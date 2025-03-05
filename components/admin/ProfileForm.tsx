import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DynamicList } from "@/components/ui/dynamic-list";

type Profile = {
  author: string;
  superuser: number;
  role: string;
  organization_name: string;
  organization_url: string;
  bio: string;
  interests: string;
  education: string;
  profile_bio: string;
  social_links: string;
  personal_website: string;
};

type ProfileFormProps = {
  initialData?: Profile | null;
  onSave: (data: Profile) => void;
  onCancel: () => void;
};

const ProfileForm: React.FC<ProfileFormProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [profile, setProfile] = useState<Profile>(
    initialData || {
      author: "",
      superuser: 0,
      role: "",
      organization_name: "",
      organization_url: "",
      bio: "",
      interests: "",
      education: "",
      profile_bio: "",
      social_links: "",
      personal_website: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  console.log(profile);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">
        {initialData ? "Edit Profile" : "Add Profile"}
      </h2>

      <Label htmlFor="author">Author:</Label>
      <Input
        id="author"
        name="author"
        value={profile.author}
        onChange={handleChange}
      />

      <Label htmlFor="role">Role:</Label>
      <Input
        id="role"
        name="role"
        value={profile.role}
        onChange={handleChange}
      />

      <Label htmlFor="organization_name">Organization:</Label>
      <Input
        id="organization_name"
        name="organization_name"
        value={profile.organization_name}
        onChange={handleChange}
      />

      <Label htmlFor="organization_url">Organization URL:</Label>
      <Input
        id="organization_url"
        name="organization_url"
        value={profile.organization_url}
        onChange={handleChange}
      />

      <Label htmlFor="bio">Bio:</Label>
      <Textarea
        id="bio"
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        rows={4}
      />

      <Label htmlFor="interests">Interests:</Label>
      <DynamicList
        items={profile.interests.split(",").map((i) => i.trim())}
        onChange={(items) =>
          setProfile({ ...profile, interests: items.join(", ") })
        }
        placeholder="Add interest"
      />

      <Label htmlFor="social_links">Social Links:</Label>
      <DynamicList
        items={profile.social_links.split(",").map((i) => i.trim())}
        onChange={(items) =>
          setProfile({ ...profile, social_links: items.join(", ") })
        }
        placeholder="Add social link"
      />

      <div className="flex justify-end mt-4">
        <Button variant="outline" onClick={onCancel} className="mr-2">
          Cancel
        </Button>
        <Button onClick={() => onSave(profile)}>Save</Button>
      </div>
    </div>
  );
};

export default ProfileForm;
