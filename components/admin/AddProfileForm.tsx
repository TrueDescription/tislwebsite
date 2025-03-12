"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DynamicList } from "@/components/ui/dynamic-list";
import { PROFILE_ROLES, Profile } from "@/types/allTypes";

type AddProfileFormProps = {
  onSubmit: (newProfile: Partial<Profile>) => void;
  onAvatarFileChange?: (file: File | null) => void;
};

export default function AddProfileForm({
  onSubmit,
  onAvatarFileChange,
}: AddProfileFormProps) {
  const [localItem, setLocalItem] = useState<Partial<Profile>>({
    author: "",
    role: "",
    organization_name: "",
    organization_url: "",
    bio: "",
    interests: [],
    education: "",
    profile_bio: "",
    social_links: [],
    personal_website: "",
  });

  // Update local state as user types
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setLocalItem((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  // Update role
  function handleRoleChange(newRole: string) {
    setLocalItem((prev) => ({ ...prev, role: newRole }));
  }

  // For DynamicList fields
  function handleInterestsChange(items: string[]) {
    setLocalItem((prev) => ({ ...prev, interests: items }));
  }
  function handleSocialLinksChange(items: string[]) {
    setLocalItem((prev) => ({ ...prev, social_links: items }));
  }

  return (
    <div className="grid gap-4 py-4">
      {/* AUTHOR */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="author" className="text-right">
          Author
        </Label>
        <Input
          id="author"
          className="col-span-3"
          value={localItem.author || ""}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* ROLE */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="role" className="text-right">
          Role
        </Label>
        <Select value={localItem.role || ""} onValueChange={handleRoleChange}>
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

      {/* ORGANIZATION */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="organization_name" className="text-right">
          Organization
        </Label>
        <Input
          id="organization_name"
          className="col-span-3"
          value={localItem.organization_name || ""}
          onChange={handleInputChange}
        />
      </div>

      {/* ORGANIZATION URL */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="organization_url" className="text-right">
          Organization URL
        </Label>
        <Input
          id="organization_url"
          className="col-span-3"
          value={localItem.organization_url || ""}
          onChange={handleInputChange}
        />
      </div>

      {/* BIO */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="bio" className="text-right">
          Bio
        </Label>
        <Textarea
          id="bio"
          className="col-span-3"
          value={localItem.bio || ""}
          onChange={handleInputChange}
        />
      </div>

      {/* INTERESTS (DynamicList) */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="interests" className="text-right">
          Interests
        </Label>
        <DynamicList
          items={Array.isArray(localItem.interests) ? localItem.interests : []}
          onChange={handleInterestsChange}
          placeholder="Add interest"
        />
      </div>

      {/* EDUCATION */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="education" className="text-right">
          Education
        </Label>
        <Input
          id="education"
          className="col-span-3"
          value={localItem.education || ""}
          onChange={handleInputChange}
        />
      </div>

      {/* PROFILE BIO */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="profile_bio" className="text-right">
          Profile Bio
        </Label>
        <Textarea
          id="profile_bio"
          className="col-span-3"
          value={localItem.profile_bio || ""}
          onChange={handleInputChange}
        />
      </div>

      {/* SOCIAL LINKS (DynamicList + Tooltip) */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="social_links" className="text-right">
          Social Links
          <Tooltip content="Please also include 'https://' on all links that redirect externally. For email, use 'mailto:email@example.com'">
            <Button className="bg-transparent border-2 border-gray-400 text-gray-600 rounded-full w-5 h-5 p-0 min-w-0 ml-3">
              i
            </Button>
          </Tooltip>
        </Label>
        <DynamicList
          items={
            Array.isArray(localItem.social_links) ? localItem.social_links : []
          }
          onChange={handleSocialLinksChange}
          placeholder="Add social link"
        />
      </div>

      {/* PERSONAL WEBSITE (Optional) */}
      <div className="flex-col grid-cols-4 items-center gap-4">
        <Label htmlFor="personal_website" className="text-right">
          Personal Website:
          <Tooltip content="Include 'https://' if it's an external link. Leave blank if not used.">
            <Button className="bg-transparent border-2 border-gray-400 text-gray-600 rounded-full w-5 h-5 p-0 min-w-0 ml-3">
              i
            </Button>
          </Tooltip>
        </Label>
        <Input
          id="personal_website"
          className="col-span-3"
          value={localItem.personal_website || ""}
          onChange={handleInputChange}
        />
      </div>

      {/* PROFILE PIC UPLOAD */}
      {onAvatarFileChange && (
        <div className="flex-col grid-cols-4 items-center gap-4">
          <Label htmlFor="profilePic" className="text-right">
            Profile Picture
          </Label>
          <Input
            id="profilePic"
            type="file"
            accept="image/*"
            onChange={(e) => onAvatarFileChange(e.target.files?.[0] || null)}
          />
        </div>
      )}

      {/* ---------- Add Author Button ---------- */}
      <Button onClick={() => onSubmit(localItem)}>Add Author</Button>
    </div>
  );
}
