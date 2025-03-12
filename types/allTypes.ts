export const PROFILE_ROLES = [
  "Alumni",
  "PhD Student",
  "Assistant Professor",
  "MSc Student",
];

export const PUBLICATION_TYPES = ["paper-conference", "article-journal"];

export type Profile = {
  author: string;
  superuser: number;
  role: string;
  organization_name: string;
  organization_url: string;
  bio: string;
  interests: string[];
  education: string;
  profile_bio: string;
  social_links: string[];
  personal_website: string;
};

export type Publication = {
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
  cite: string;
};

export type News = {
  id: number;
  class: string;
  date: string;
  content: string;
};
