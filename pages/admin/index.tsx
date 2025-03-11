"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Link } from "@nextui-org/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip } from "@nextui-org/tooltip";
import {
  ArrowLeftIcon,
  CalendarIcon,
  FileTextIcon,
  PlusIcon,
  TrashIcon,
  UsersIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDisclosure } from "@nextui-org/react";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// ---------- New Imports for Modularized Components ----------
import ProfileList from "@/components/admin/ProfileList";
import PublicationsList from "@/components/admin/PublicationsList";
import NewsList from "@/components/admin/NewsList";

import ProfileEditForm from "@/components/admin/ProfileEditForm";
import PublicationEditForm from "@/components/admin/PublicationEditForm";
import NewsEditForm from "@/components/admin/NewsEditForm";

import AddProfileForm from "@/components/admin/AddProfileForm";
import AddPublicationForm from "@/components/admin/AddPublicationForm";
import AddNewsForm from "@/components/admin/AddNewsForm";

// ---------- Types (adjust path if needed) ----------
// import { Profile, Publication, News } from "@/types/allTypes";

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

// ---------- Constants / Roles / Types ----------
const PROFILE_ROLES = [
  "Alumni",
  "PhD Student",
  "Assistant Professor",
  "MSc Student",
];
const PUBLICATION_TYPES = ["paper-conference", "article-journal"];

export default function AdminPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ---------- State ----------
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState<
    "profiles" | "publications" | "news"
  >("profiles");
  const [editItem, setEditItem] = useState<Profile | Publication | News | null>(
    null
  );

  // For uploading images/pdf
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  // For adding new items
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState<Partial<Profile | Publication | News>>(
    {}
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Check for query params to auto-load an edit item
  const editType = searchParams.get("type");
  const editId = searchParams.get("id");

  // ---------- On Mount: Fetch Data ----------
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

        // Parse the JSON results
        const profilesData = await profilesRes.json();
        const publicationsData = await publicationsRes.json();
        const newsData = await newsRes.json();

        // Transform profiles so interests & social_links are arrays
        const transformedProfiles = profilesData.map((profile: Profile) => ({
          ...profile,
          interests: Array.isArray(profile.interests)
            ? profile.interests
            : profile.interests
                .split(",")
                .map((i) => i.trim())
                .filter(Boolean),
          social_links: Array.isArray(profile.social_links)
            ? profile.social_links
            : profile.social_links
                .split(",")
                .map((l) => l.trim())
                .filter(Boolean),
        }));

        // Sort publications by date (descending)
        const sortedPublications = publicationsData.sort(
          (a: Publication, b: Publication) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Sort news by date (descending)
        const sortedNews = newsData.sort(
          (a: News, b: News) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Update state
        setProfiles(transformedProfiles);
        setPublications(sortedPublications);
        setNews(sortedNews);

        // If we have an edit type and ID in the URL, auto-populate editItem
        if (editType && editId) {
          if (editType === "profiles") {
            const profile = transformedProfiles.find(
              (p) => p.author === editId
            );
            if (profile) {
              setEditItem(profile);
              setActiveSection("profiles");
            }
          } else if (editType === "publications") {
            const publication = sortedPublications.find(
              (p) => p.id === Number(editId)
            );
            if (publication) {
              setEditItem(publication);
              setActiveSection("publications");
            }
          } else if (editType === "news") {
            // If your news item is identified by `content` or `id`, adjust as needed
            const singleNews = sortedNews.find((n) => n.content === editId);
            if (singleNews) {
              setEditItem(singleNews);
              setActiveSection("news");
            }
          }
        }
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchData();
  }, [editType, editId, router]);

  // ---------- Filtered Arrays for Searching ----------
  const filteredProfiles = profiles.filter((profile) =>
    profile.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredNews = news.filter((newsi) =>
    newsi.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPublications = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------- Remove (Delete) Items ----------
  async function handleRemove(
    type: "publications" | "profiles" | "news",
    id: number | string
  ) {
    const confirmationMessage = `This action is not reversible, are you sure?`;
    const confirmDelete = window.confirm(confirmationMessage);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/${type}Remove`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: type === "publications" || type === "news" ? id : undefined,
          author: type === "profiles" ? id : undefined,
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to remove ${type}`);
      }

      if (type === "publications") {
        setPublications((prev) => prev.filter((pub) => pub.id !== id));
      } else if (type === "news") {
        setNews((prev) => prev.filter((newsi) => newsi.id !== id));
      } else {
        setProfiles((prev) => prev.filter((profile) => profile.author !== id));
      }
    } catch (err: any) {
      setError(err.message);
    }
  }

  // ========== EDIT: Form Change Handlers ==========
  // ----- Profile -----
  function handleProfileChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (!editItem || !("author" in editItem)) return;
    const { name, value } = e.target;
    setEditItem((prev) => (prev ? { ...prev, [name]: value } : prev));
  }
  function handleProfileRoleChange(newRole: string) {
    if (!editItem || !("author" in editItem)) return;
    setEditItem((prev) => (prev ? { ...prev, role: newRole } : prev));
  }
  function handleProfileInterestsChange(items: string[]) {
    if (!editItem || !("author" in editItem)) return;
    setEditItem((prev) => (prev ? { ...prev, interests: items } : prev));
  }
  function handleProfileSocialLinksChange(items: string[]) {
    if (!editItem || !("author" in editItem)) return;
    setEditItem((prev) => (prev ? { ...prev, social_links: items } : prev));
  }
  function handleAvatarFileChange(file: File | null) {
    setAvatarFile(file);
  }

  // ----- Publication -----
  function handlePublicationChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (!editItem || !("publication_types" in editItem)) return;
    const { name, value } = e.target;
    setEditItem((prev) => (prev ? { ...prev, [name]: value } : prev));
  }
  function handlePublicationTypeChange(newType: string) {
    if (!editItem || !("publication_types" in editItem)) return;
    setEditItem((prev) =>
      prev ? { ...prev, publication_types: newType } : prev
    );
  }
  function handlePublicationAuthorsChange(authorsArr: string[]) {
    // Combine authors into a comma-separated string
    if (!editItem || !("publication_types" in editItem)) return;
    setEditItem((prev) =>
      prev ? { ...prev, authors: authorsArr.join(", ") } : prev
    );
  }
  function handlePublicationDateChange(date: Date | null) {
    if (!editItem || !("publication_types" in editItem)) return;
    const newDate = date ? date.toISOString().split("T")[0] : "";
    setEditItem((prev) => (prev ? { ...prev, date: newDate } : prev));
  }
  function handlePdfFileChange(file: File | null) {
    setPdfFile(file);
  }

  // ----- News -----
  function handleNewsChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!editItem || !("content" in editItem)) return;
    const { name, value } = e.target;
    setEditItem((prev) => (prev ? { ...prev, [name]: value } : prev));
  }
  function handleNewsDateChange(date: Date | null) {
    if (!editItem || !("content" in editItem)) return;
    const newDate = date ? date.toISOString().split("T")[0] : "";
    setEditItem((prev) => (prev ? { ...prev, date: newDate } : prev));
  }

  // ========== EDIT: Save Changes ==========
  async function handleSave() {
    if (!editItem) return;
    try {
      let type = "profiles";
      let dataToSend: any = { ...editItem };

      // Check which type we’re editing
      if ("content" in editItem) {
        // NEWS
        type = "news";
      } else if ("author" in editItem) {
        // PROFILES
        // Convert arrays -> comma string
        dataToSend.interests = Array.isArray(editItem.interests)
          ? editItem.interests.join(", ")
          : editItem.interests;
        dataToSend.social_links = Array.isArray(editItem.social_links)
          ? editItem.social_links.join(", ")
          : editItem.social_links;

        // If user selected a new avatar
        if (avatarFile && "author" in editItem) {
          const formData = new FormData();
          formData.append("avatar", avatarFile);
          formData.append("author", editItem.author);
          const avatarRes = await fetch("/api/admin/updateAvatar", {
            method: "POST",
            body: formData,
          });
          if (!avatarRes.ok) throw new Error("Avatar update failed.");
          setAvatarFile(null);
        }
      } else if ("publication_types" in editItem) {
        // PUBLICATIONS
        type = "publications";

        // If user selected a new PDF
        if (pdfFile && dataToSend.title) {
          dataToSend.url_pdf =
            `publication/${dataToSend.title}/${dataToSend.title}.pdf`.replace(
              / /g,
              "-"
            );
          const formData = new FormData();
          formData.append("pdf", pdfFile);
          formData.append("title", dataToSend.title);
          const pdfRes = await fetch("/api/admin/updatePdf", {
            method: "POST",
            body: formData,
          });
          if (!pdfRes.ok) throw new Error("PDF update failed.");
          setPdfFile(null);
        }
      }

      const res = await fetch(`/api/admin/${type}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      if (!res.ok) {
        throw new Error("Update failed. Possibly unauthorized.");
      }

      alert("Update successful");
      setEditItem(null);
      router.refresh();
    } catch (err: any) {
      alert(err.message);
    }
  }

  // ========== ADD: Create New Item ==========
  async function handleAdd(data: Partial<Profile | Publication | News>) {
    try {
      let type: "profiles" | "publications" | "news" | "" = "";
      if (activeSection === "news") {
        type = "news";
      } else if (activeSection === "profiles") {
        type = "profiles";
      } else {
        type = "publications";
      }

      // let data: any = { ...newItem };

      // PROFILES
      if (type === "profiles") {
        if (avatarFile && data.author) {
          const formData = new FormData();
          formData.append("avatar", avatarFile);
          formData.append("author", String(data.author));
          const avatarRes = await fetch("/api/admin/updateAvatar", {
            method: "POST",
            body: formData,
          });
          if (!avatarRes.ok) {
            throw new Error("Avatar update failed.");
          }
          setAvatarFile(null);
        }
      }

      // PUBLICATIONS
      if (type === "publications") {
        if (Array.isArray(data.authors)) {
          data.authors = data.authors.join(", ");
        }
        if (pdfFile && data.title) {
          // data.url_pdf = `publication/${data.title}/${data.title}.pdf`;
          data.url_pdf = `publication/${data.title}/${data.title}.pdf`.replace(
            / /g,
            "-"
          );
          const formData = new FormData();
          formData.append("pdf", pdfFile);
          formData.append("title", String(data.title));
          const pdfRes = await fetch("/api/admin/updatePdf", {
            method: "POST",
            body: formData,
          });
          if (!pdfRes.ok) throw new Error("PDF update failed.");
          setPdfFile(null);
        }
      }

      if (type === "news") {
        // const formData = new FormData();
        console.log(data);
        // return;
      }

      // POST to server
      const res = await fetch(`/api/${type}Add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Add failed: ${errorData.message || "Unknown error"}`);
      }

      const result = await res.json();

      // Update local state
      if (type === "publications") {
        setPublications((prev) => [...prev, result.publication]);
      } else if (type === "news") {
        // Some back-end might not return data in the same shape. If it does, you can do:
        // setNews((prev) => [...prev, result.news]);
        // Or force a refresh if needed:
        router.refresh();
      } else {
        setProfiles((prev) => [...prev, result.profile]);
      }

      setIsAddDialogOpen(false);
      setNewItem({});
      setAvatarFile(null);
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    }
  }

  // ========== ERROR SCREEN ==========
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{error}</p>
            <Button asChild>
              <Link href="/admin/login">Go to Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ========== RENDER ==========
  return (
    <div className="flex h-screen bg-gray-100">
      {/* ---------- Sidebar ---------- */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <nav>
            <Button
              variant={activeSection === "profiles" ? "default" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setActiveSection("profiles")}
            >
              <UsersIcon className="mr-2 h-4 w-4" />
              Profiles
            </Button>
            <Button
              variant={activeSection === "publications" ? "default" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setActiveSection("publications")}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              Publications
            </Button>
            <Button
              variant={activeSection === "news" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("news")}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              News
            </Button>
          </nav>
        </div>
      </aside>

      {/* ---------- Main Content ---------- */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* ---------- Header ---------- */}
        <header className="flex justify-between items-center mb-8">
          <Input
            type="search"
            placeholder="Search..."
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Add optional Logout or other buttons here */}
        </header>

        {/* ---------- Editing Mode? ---------- */}
        {editItem ? (
          // Decide which form to show
          "content" in editItem ? (
            // NEWS EDIT FORM
            <NewsEditForm
              news={editItem}
              onChange={handleNewsChange}
              onDateChange={handleNewsDateChange}
              onSave={handleSave}
              onBack={() => {
                setEditItem(null);
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname
                );
              }}
            />
          ) : "author" in editItem ? (
            // PROFILE EDIT FORM
            <ProfileEditForm
              profile={editItem}
              onChange={handleProfileChange}
              onRoleChange={handleProfileRoleChange}
              onInterestsChange={handleProfileInterestsChange}
              onSocialLinksChange={handleProfileSocialLinksChange}
              onAvatarFileChange={handleAvatarFileChange}
              onSave={handleSave}
              onBack={() => {
                setEditItem(null);
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname
                );
              }}
            />
          ) : (
            // PUBLICATION EDIT FORM
            <PublicationEditForm
              publication={editItem}
              onChange={handlePublicationChange}
              onPublicationTypeChange={handlePublicationTypeChange}
              onAuthorsChange={handlePublicationAuthorsChange}
              onDateChange={handlePublicationDateChange}
              onPdfFileChange={handlePdfFileChange}
              onSave={handleSave}
              onBack={() => {
                setEditItem(null);
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname
                );
              }}
            />
          )
        ) : (
          // ---------- NOT Editing: Render Lists + Add Dialogs ----------
          <>
            {activeSection === "profiles" && (
              <section className="mb-8">
                {/* ---------- Add Author Dialog ---------- */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">Profiles</h2>
                  <Dialog
                    open={isAddDialogOpen}
                    onOpenChange={setIsAddDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button>
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Add Author
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md max-h-screen overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New Author</DialogTitle>
                      </DialogHeader>

                      {/* ---------- Modular Add Profile Form ---------- */}
                      <AddProfileForm
                        onSubmit={(data) => {
                          // Capture final fields and call handleAdd
                          // setNewItem(data);
                          handleAdd(data);
                        }}
                        onAvatarFileChange={(file) => setAvatarFile(file)}
                      />
                    </DialogContent>
                  </Dialog>
                </div>

                {/* ---------- Profile List Component ---------- */}
                <ProfileList
                  profiles={filteredProfiles}
                  onEdit={(profile) => setEditItem(profile)}
                  onRemove={(author) => handleRemove("profiles", author)}
                />
              </section>
            )}

            {activeSection === "publications" && (
              <section>
                <div>
                  {/* ---------- Add Publication Dialog ---------- */}
                  <div className="flex justify-between mb-4">
                    <h2 className="text-2xl font-semibold">Publications</h2>
                    <Dialog
                      open={isAddDialogOpen}
                      onOpenChange={setIsAddDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button className="flex items-center">
                          <PlusIcon className="mr-2 h-4 w-4" />
                          Add Publication
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl sm:text-2xl font-bold">
                            Add New Publication
                          </DialogTitle>
                        </DialogHeader>

                        {/* ---------- Modular Add Publication Form ---------- */}
                        <AddPublicationForm
                          onSubmit={(data) => {
                            // setNewItem(data);
                            handleAdd(data);
                          }}
                          onPdfFileChange={(file) => setPdfFile(file)}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* ---------- Publications List Component ---------- */}
                <PublicationsList
                  publications={filteredPublications}
                  onEdit={(pub) => setEditItem(pub)}
                  onRemove={(id) => handleRemove("publications", id)}
                />
              </section>
            )}

            {activeSection === "news" && (
              <section>
                <div className="flex justify-between mb-4">
                  <h2 className="text-2xl font-semibold">News</h2>
                  <Dialog
                    open={isAddDialogOpen}
                    onOpenChange={setIsAddDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button>
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Add News
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Add New News</DialogTitle>
                      </DialogHeader>

                      {/* ---------- Modular Add News Form ---------- */}
                      <AddNewsForm
                        onSubmit={(data) => {
                          // setNewItem(data);
                          // console.log("newItem! ");
                          // // console.log(data);
                          // console.log("newItem! ");
                          handleAdd(data);
                        }}
                      />
                    </DialogContent>
                  </Dialog>
                </div>

                {/* ---------- News List Component ---------- */}
                <NewsList
                  news={filteredNews}
                  onEdit={(newsi) => setEditItem(newsi)}
                  onRemove={(id) => handleRemove("news", id)}
                />
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}
