import Database from "better-sqlite3";
import path from "path";
import Publication from "@/components/publications/publicationType";
import { AuthorProfile } from "@/components/people/peopleType";

const dbPath = path.resolve(process.cwd(), "data", "content.db");
const db = new Database(dbPath);

export function getAllPublications(): Publication[] {
  const rows = db
    .prepare(
      `
    SELECT id, authors, date, publication_types, publication, publication_short, title, url_pdf, abstract, url_preprint, url_code, url_dataset, url_poster, url_project, url_slides, url_source, url_video
    FROM publications
  `
    )
    .all() as Array<{
    id: number;
    authors: string;
    date: string;
    publication_types: string;
    publication: string;
    publication_short: string;
    title: string;
    url_pdf: string;
    abstract: string;
    url_preprint: string;
    url_code: string;
    url_dataset: string;
    url_poster: string;
    url_project: string;
    url_slides: string;
    url_source: string;
    url_video: string;
  }>;

  return rows.map((row) => ({
    id: row.id,
    authors: row.authors.split(", ").filter(Boolean),
    date: row.date,
    publication_types: row.publication_types.split(", ").filter(Boolean),
    publication: row.publication,
    publicationShort: row.publication_short,
    title: row.title,
    url_pdf: row.url_pdf,
    abstract: row.abstract,
    url_preprint: row.url_preprint,
    url_dataset: row.url_dataset,
    url_poster: row.url_poster,
    url_project: row.url_project,
    url_slides: row.url_slides,
    url_source: row.url_source,
    url_video: row.url_video,
    url_code: row.url_code,
  }));
}

export function openDb() {
  const dbPath = path.resolve(process.cwd(), "data", "content.db");
  return new Database(dbPath, { readonly: true });
}

export function getAllAuthors(): AuthorProfile[] {
  const rows = db
    .prepare(
      `
    SELECT author, superuser, role, organization_name, organization_url, bio, interests, education, profile_bio, social_links, personal_website
    FROM profiles
  `
    )
    .all() as Array<{
    author: string;
    superuser: boolean;
    role: string;
    organization_name: string;
    organization_url: string;
    bio: string;
    interests: string;
    education: string;
    profile_bio: string;
    social_links: string;
    personal_website: string;
  }>;

  return rows.map((row) => ({
    author: row.author,
    superuser: row.superuser,
    role: row.role,
    organizationName: row.organization_name,
    organizationUrl: row.organization_url,
    bio: row.bio,
    interests: row.interests ? row.interests.split(", ").filter(Boolean) : [],
    education: row.education,
    profileBio: row.profile_bio,
    personalWebsite: row.personal_website,
    socialLinks: row.social_links
      ? row.social_links.split(", ").filter(Boolean)
      : [],
  }));
}

export function getLatestPublicationsByAuthor(authorName: string, limit = 5) {
  const db = new Database(dbPath);
  const rows = db
    .prepare(
      `
      SELECT id, title 
      FROM publications 
      WHERE authors LIKE ?
      ORDER BY date DESC 
      LIMIT ?
      `
    )
    .all(`%${authorName}%`, limit);

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
  }));
}
