"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  FileTextIcon,
  LogOutIcon,
  UsersIcon,
  PlusIcon,
  TrashIcon,
  ArrowLeftIcon,
  UploadIcon,
} from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { DynamicList } from "@/components/ui/dynamic-list";

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

const PROFILE_ROLES = ["Alumni", "PhD Student", "Assistant Professor"];
const PUBLICATION_TYPES = ["paper-conference", "article-journal"];

export default function AdminPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
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
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState<Partial<Profile | Publication>>({});

  const editType = searchParams.get("type");
  const editId = searchParams.get("id");

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both profiles and publications concurrently
        const [profilesRes, publicationsRes, newsRes] = await Promise.all([
          fetch("/api/admin/profiles"),
          fetch("/api/admin/publications"),
          fetch("/api/admin/news"),
        ]);

        // If either request fails, redirect to login (per your logic)
        if (!profilesRes.ok || !publicationsRes.ok || !newsRes.ok) {
          router.push("/admin/login");
          throw new Error("Failed to fetch data. Possibly unauthorized.");
        }

        // Parse the JSON results
        const profilesData = await profilesRes.json();
        const publicationsData = await publicationsRes.json();
        const newsData = await newsRes.json();
        let i = 0;
        newsData.forEach((element) => {
          element.id = i;
          i++;
        });
        setNews(newsData);

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

        // Update state
        setProfiles(transformedProfiles);
        setPublications(sortedPublications);

        // If we have an edit type and ID, auto-populate editItem
        if (editType && editId) {
          if (editType === "profiles") {
            const profile = transformedProfiles.find(
              (p: Profile) => p.author === editId
            );
            setEditItem(profile);
            setActiveSection("profiles");
          } else if (editType === "publications") {
            const publication = sortedPublications.find(
              (p: Publication) => p.id === Number(editId)
            );
            setEditItem(publication);
            setActiveSection("publications");
          }
        }
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchData();
  }, [editType, editId]);

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

  async function handleRemove(
    type: "publications" | "profiles" | "news",
    id: number | string
  ) {
    const confirmationMessage = `This action is not reversable, are you sure?`;
    const confirmDelete = window.confirm(confirmationMessage);

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/${type}Remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: type === "publications" ? id : undefined,
          author: type === "profiles" ? id : undefined,
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to remove ${type}`);
      }

      if (type === "publications") {
        setPublications(publications.filter((pub) => pub.id !== id));
      } else {
        setProfiles(profiles.filter((profile) => profile.author !== id));
      }
    } catch (err: any) {
      setError(err.message);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (editItem) {
      setEditItem((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
    console.log(editItem);
  }

  async function handleSave() {
    if (!editItem) return;
    try {
      const type = "author" in editItem ? "profiles" : "publications";
      const dataToSend = {
        ...editItem,
        interests: Array.isArray(editItem.interests)
          ? editItem.interests.join(", ")
          : editItem.interests,
        social_links: Array.isArray(editItem.social_links)
          ? editItem.social_links.join(", ")
          : editItem.social_links,
      };
      console.log(editItem.interests);
      console.log(editItem.social_links);
      const res = await fetch(`/api/admin/${type}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      if (!res.ok) {
        throw new Error("Update failed. Possibly unauthorized.");
      }

      if (avatarFile && "author" in editItem) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);
        formData.append("author", editItem.author);
        const avatarRes = await fetch("/api/admin/updateAvatar", {
          method: "POST",
          body: formData,
        });
        if (!avatarRes.ok) {
          throw new Error("Avatar update failed.");
        }
      }

      alert("Update successful");
      setEditItem(null);
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function handleAdd() {
    try {
      const type = activeSection === "profiles" ? "profiles" : "publications";

      const data = { ...newItem };
      if (type === "profiles") {
        Object.entries(data).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            data[key] = JSON.stringify(value);
            console.log(key, value);
          }
        });
      }

      const res = await fetch(`/api/${type}Add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Add failed: ${errorData.message || "Unknown error"}`);
      }

      const result = await res.json();

      if (type === "publications") {
        setPublications([...publications, result.publication]);
      } else {
        setProfiles([...profiles, result.profile]);
      }

      setIsAddDialogOpen(false);
      setNewItem({});
      setAvatarFile(null);
    } catch (err: any) {
      alert(err.message);
    }
  }

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

  return (
    <div className="flex h-screen bg-gray-100">
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
              className="w-full justify-start"
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
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-8">
          <Input
            type="search"
            placeholder="Search..."
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </header>
        {editItem ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Edit {"author" in editItem ? editItem.author : editItem.title}
              </h2>
              <Button
                variant="outline"
                onClick={() => {
                  setEditItem(null);
                  window.history.replaceState(
                    {},
                    document.title,
                    window.location.pathname
                  );
                }}
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
            {Object.entries(editItem).map(([key, value]) => (
              <div key={key} className="mb-4">
                <Label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {key}:
                </Label>
                {key === "abstract" || key === "bio" ? (
                  <Textarea
                    id={key}
                    name={key}
                    value={value ?? ""}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                    rows={4}
                  />
                ) : key === "authors" ? (
                  <DynamicList
                    items={
                      Array.isArray(value)
                        ? value
                        : value
                            .split(",")
                            .map((author: string) => author.trim())
                    }
                    onChange={(updatedAuthors) =>
                      setEditItem({
                        ...editItem,
                        authors: updatedAuthors.join(", "),
                      })
                    }
                    placeholder="Add Author"
                  />
                ) : key === "date" ? (
                  <DatePicker
                    selected={value ? new Date(value) : null}
                    onChange={(selectedDate) =>
                      setEditItem({
                        ...editItem,
                        date: selectedDate
                          ? selectedDate.toISOString().split("T")[0]
                          : "",
                      })
                    }
                  />
                ) : key === "role" ? (
                  <Select
                    value={value as string}
                    onValueChange={(newValue) =>
                      setEditItem({ ...editItem, [key]: newValue })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROFILE_ROLES.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : key === "publication_types" ? (
                  <Select
                    value={value as string}
                    onValueChange={(newValue) =>
                      setEditItem({ ...editItem, [key]: newValue })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a publication type" />
                    </SelectTrigger>
                    <SelectContent>
                      {PUBLICATION_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : key === "social_links" ? (
                  <div className="col-span-3">
                    <DynamicList
                      items={editItem.social_links || []}
                      onChange={(updatedLinks) => {
                        setEditItem((prev) =>
                          prev ? { ...prev, social_links: updatedLinks } : prev
                        );
                      }}
                      placeholder="Add social link"
                    />
                  </div>
                ) : key === "interests" ? (
                  <div className="col-span-3">
                    <DynamicList
                      items={editItem.interests || []}
                      onChange={(updatedInterests) => {
                        setEditItem((prev) =>
                          prev ? { ...prev, interests: updatedInterests } : prev
                        );
                      }}
                      placeholder="Add interest"
                    />
                  </div>
                ) : (
                  <Input
                    type="text"
                    id={key}
                    name={key}
                    value={value ?? ""}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                  />
                )}
              </div>
            ))}
            {"author" in editItem && (
              <div className="mb-4">
                <Label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Update Avatar:
                </Label>
                <Input
                  id="avatar"
                  type="file"
                  onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
                  accept="image/*"
                  className="mt-1 block w-full"
                />
              </div>
            )}
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        ) : activeSection === "profiles" ? (
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Profiles</h2>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
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
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="author" className="text-right">
                        Author
                      </Label>
                      <Input
                        id="author"
                        className="col-span-3"
                        value={(newItem as any).author || ""}
                        onChange={(e) =>
                          setNewItem({ ...newItem, author: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Role
                      </Label>
                      <Select
                        value={(newItem as any).role || ""}
                        onValueChange={(value) =>
                          setNewItem({ ...newItem, role: value })
                        }
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          {PROFILE_ROLES.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="organization_name" className="text-right">
                        Organization
                      </Label>
                      <Input
                        id="organization_name"
                        className="col-span-3"
                        value={(newItem as any).organization_name || ""}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            organization_name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="organization_url" className="text-right">
                        Organization URL
                      </Label>
                      <Input
                        id="organization_url"
                        className="col-span-3"
                        value={(newItem as any).organization_url || ""}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            organization_url: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="bio" className="text-right">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        className="col-span-3"
                        value={(newItem as any).bio || ""}
                        onChange={(e) =>
                          setNewItem({ ...newItem, bio: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="interests" className="text-right">
                        Interests
                      </Label>
                      <div className="col-span-3">
                        <DynamicList
                          items={(newItem as any).interests || []}
                          onChange={(items) =>
                            setNewItem({ ...newItem, interests: items })
                          }
                          placeholder="Add interest"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="education" className="text-right">
                        Education
                      </Label>
                      <Input
                        id="education"
                        className="col-span-3"
                        value={(newItem as any).education || ""}
                        onChange={(e) =>
                          setNewItem({ ...newItem, education: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="profile_bio" className="text-right">
                        Profile Bio
                      </Label>
                      <Textarea
                        id="profile_bio"
                        className="col-span-3"
                        value={(newItem as any).profile_bio || ""}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            profile_bio: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="social_links" className="text-right">
                        Social Links
                      </Label>
                      <div className="col-span-3">
                        <DynamicList
                          items={(newItem as any).social_links || []}
                          onChange={(items) =>
                            setNewItem({ ...newItem, social_links: items })
                          }
                          placeholder="Add social link"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="personal_website" className="text-right">
                        Personal Website
                      </Label>
                      <Input
                        id="personal_website"
                        className="col-span-3"
                        value={(newItem as any).personal_website || ""}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            personal_website: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="profilePic" className="text-right">
                        Profile Picture
                      </Label>
                      <Input
                        id="profilePic"
                        type="file"
                        className="col-span-3"
                        onChange={(e) =>
                          setAvatarFile(e.target.files?.[0] || null)
                        }
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <Button onClick={handleAdd}>Add Author</Button>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProfiles.map((profile) => (
                <Card key={profile.author}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={`/authors/${profile.author.toLowerCase().replace(" ", "-")}.jpg`}
                        alt={profile.author}
                      />
                      <AvatarFallback>
                        {profile.author.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {profile.author}
                      </CardTitle>
                      <p className="text-sm text-gray-500">{profile.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{profile.organization_name}</p>
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditItem(profile);
                          router.push(
                            `/admin?type=profiles&id=${encodeURIComponent(profile.author)}`
                          );
                        }}
                      >
                        Edit Profile
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemove("profiles", profile.author)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : activeSection === "publications" ? (
          <section>
            <div>
              <div className="flex justify-between mb-4 ">
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
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={(newItem as any).title || ""}
                          onChange={(e) =>
                            setNewItem({ ...newItem, title: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="authors">Authors</Label>
                        <Input
                          id="authors"
                          value={(newItem as any).authors || ""}
                          onChange={(e) =>
                            setNewItem({ ...newItem, authors: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="date">Date</Label>
                        <DatePicker
                          id="date"
                          selected={
                            (newItem as any).date
                              ? new Date((newItem as any).date)
                              : null
                          }
                          onChange={(date) =>
                            setNewItem({
                              ...newItem,
                              date: date?.toISOString().split("T")[0],
                            })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="publication_types">
                          Publication Type
                        </Label>
                        <Select
                          value={(newItem as any).publication_types || ""}
                          onValueChange={(value) =>
                            setNewItem({ ...newItem, publication_types: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a publication type" />
                          </SelectTrigger>
                          <SelectContent>
                            {PUBLICATION_TYPES.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="publication">Publication</Label>
                        <Input
                          id="publication"
                          value={(newItem as any).publication || ""}
                          onChange={(e) =>
                            setNewItem({
                              ...newItem,
                              publication: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="publication_short">
                          Publication Short
                        </Label>
                        <Input
                          id="publication_short"
                          value={(newItem as any).publication_short || ""}
                          onChange={(e) =>
                            setNewItem({
                              ...newItem,
                              publication_short: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="abstract">Abstract</Label>
                        <Textarea
                          id="abstract"
                          value={(newItem as any).abstract || ""}
                          onChange={(e) =>
                            setNewItem({ ...newItem, abstract: e.target.value })
                          }
                          className="h-24"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          { id: "url_pdf", label: "PDF URL" },
                          { id: "url_preprint", label: "Preprint URL" },
                          { id: "url_code", label: "Code URL" },
                          { id: "url_dataset", label: "Dataset URL" },
                          { id: "url_poster", label: "Poster URL" },
                          { id: "url_project", label: "Project URL" },
                          { id: "url_slides", label: "Slides URL" },
                          { id: "url_source", label: "Source URL" },
                          { id: "url_video", label: "Video URL" },
                        ].map(({ id, label }) => (
                          <div key={id} className="grid gap-2">
                            <Label htmlFor={id}>{label}</Label>
                            <Input
                              id={id}
                              value={(newItem as any)[id] || ""}
                              onChange={(e) =>
                                setNewItem({ ...newItem, [id]: e.target.value })
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button onClick={handleAdd} className="w-full">
                      Add Publication
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPublications.map((pub) => (
                <Card key={pub.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">{pub.authors}</p>
                    <p className="text-sm mb-2 flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pub.date}
                    </p>
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditItem(pub);
                          router.push(`/admin?type=publications&id=${pub.id}`);
                        }}
                      >
                        Edit Publication
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemove("publications", pub.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">News</h2>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add News
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md max-h-screen overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New News</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="author" className="text-right">
                        Author
                      </Label>
                      <Input
                        id="author"
                        className="col-span-3"
                        value={(newItem as any).author || ""}
                        onChange={(e) =>
                          setNewItem({ ...newItem, author: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Role
                      </Label>
                      <Select
                        value={(newItem as any).role || ""}
                        onValueChange={(value) =>
                          setNewItem({ ...newItem, role: value })
                        }
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          {PROFILE_ROLES.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="organization_name" className="text-right">
                        Organization
                      </Label>
                      <Input
                        id="organization_name"
                        className="col-span-3"
                        value={(newItem as any).organization_name || ""}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            organization_name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <Button onClick={handleAdd}>Add Author</Button>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {news.map((newsi) => (
                <Card key={newsi.id}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">
                        <i className={newsi.class} aria-hidden="true"></i>
                        {newsi.content}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditItem(newsi);
                          router.push(
                            `/admin?type=news&id=${encodeURIComponent(newsi.content)}`
                          );
                        }}
                      >
                        Edit News
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemove("news", newsi.content)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
