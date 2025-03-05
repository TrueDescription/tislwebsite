"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UsersIcon, FileTextIcon } from "lucide-react";
import ProfileList from "@/components/admin/ProfileList";
import PublicationsList from "@/components/admin//PublicationsList";
import NewsList from "@/components/admin//NewsList";
import ProfileForm from "@/components/admin//ProfileForm";
import PublicationForm from "@/components/admin//PublicationForm";
import NewsForm from "@/components/admin//NewsForm";
// import { Profile, Publication, News } from "../types"; // Import shared types

type Profile = {
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

type Publication = {
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

type News = {
  id: number;
  class: string;
  date: string;
  content: string;
};

export default function AdminPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState<
    "profiles" | "publications" | "news"
  >("profiles");
  const [editItem, setEditItem] = useState<Profile | Publication | News | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const [profilesRes, publicationsRes, newsRes] = await Promise.all([
          fetch("/api/admin/profiles"),
          fetch("/api/admin/publications"),
          fetch("/api/admin/news"),
        ]);

        if (!profilesRes.ok || !publicationsRes.ok || !newsRes.ok) {
          router.push("/admin/login");
          throw new Error("Failed to fetch data. Possibly unauthorized.");
        }

        const profilesData = await profilesRes.json();
        const publicationsData = await publicationsRes.json();
        const newsData = await newsRes.json();

        setProfiles(profilesData);
        setPublications(publicationsData);
        setNews(newsData);
      } catch (err: any) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  function handleRemove(
    type: "publications" | "profiles" | "news",
    id: number | string
  ) {
    if (!window.confirm("This action is not reversible, are you sure?")) return;

    fetch(`/api/${type}Remove`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to remove ${type}`);
        if (type === "publications") {
          setPublications(publications.filter((pub) => pub.id !== id));
        } else if (type === "news") {
          setNews(news.filter((newsi) => newsi.id !== id));
        } else {
          setProfiles(profiles.filter((profile) => profile.author !== id));
        }
      })
      .catch((err) => console.error(err.message));
  }

  function handleSaveProfile(profile: Profile) {
    fetch(`/api/admin/profiles`, {
      method: editItem ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    })
      .then(() => {
        router.refresh();
        setEditItem(null);
      })
      .catch((err) => console.error(err.message));
  }

  function handleSavePublication(publication: Publication) {
    fetch(`/api/admin/publications`, {
      method: editItem ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(publication),
    })
      .then(() => {
        router.refresh();
        setEditItem(null);
      })
      .catch((err) => console.error(err.message));
  }

  function handleSaveNews(newsItem: News) {
    fetch(`/api/admin/news`, {
      method: editItem ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newsItem),
    })
      .then(() => {
        router.refresh();
        setEditItem(null);
      })
      .catch((err) => console.error(err.message));
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <nav>
          <Button
            variant={activeSection === "profiles" ? "default" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => setActiveSection("profiles")}
          >
            <UsersIcon className="mr-2 h-4 w-4" /> Profiles
          </Button>
          <Button
            variant={activeSection === "publications" ? "default" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => setActiveSection("publications")}
          >
            <FileTextIcon className="mr-2 h-4 w-4" /> Publications
          </Button>
          <Button
            variant={activeSection === "news" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("news")}
          >
            <FileTextIcon className="mr-2 h-4 w-4" /> News
          </Button>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-8">
          <Input
            type="search"
            placeholder="Search..."
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>

        {editItem ? (
          "author" in editItem ? (
            <ProfileForm
              initialData={editItem as Profile}
              onSave={handleSaveProfile}
              onCancel={() => setEditItem(null)}
            />
          ) : "publication" in editItem ? (
            <PublicationForm
              initialData={editItem as Publication}
              onSave={handleSavePublication}
              onCancel={() => setEditItem(null)}
            />
          ) : (
            <NewsForm
              initialData={editItem as News}
              onSave={handleSaveNews}
              onCancel={() => setEditItem(null)}
            />
          )
        ) : activeSection === "profiles" ? (
          <ProfileList
            profiles={profiles.filter((profile) =>
              profile.author.toLowerCase().includes(searchTerm.toLowerCase())
            )}
            onEdit={(profile) => setEditItem(profile)}
            onRemove={(author) => handleRemove("profiles", author)}
          />
        ) : activeSection === "publications" ? (
          <PublicationsList
            publications={publications.filter(
              (pub) =>
                pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
            )}
            onEdit={(publication) => setEditItem(publication)}
            onRemove={(id) => handleRemove("publications", id)}
          />
        ) : (
          <NewsList
            news={news.filter((newsi) =>
              newsi.content.toLowerCase().includes(searchTerm.toLowerCase())
            )}
            onEdit={(newsi) => setEditItem(newsi)}
            onRemove={(id) => handleRemove("news", id)}
          />
        )}
      </main>
    </div>
  );
}
