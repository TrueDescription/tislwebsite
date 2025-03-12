"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DynamicList } from "@/components/ui/dynamic-list";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { PROFILE_ROLES, Profile } from "@/types/allTypes";

type ProfileEditFormProps = {
  profile: Profile;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => void;
  onRoleChange: (role: string) => void;
  onInterestsChange: (items: string[]) => void;
  onSocialLinksChange: (items: string[]) => void;
  onSave: () => void;
  onBack: () => void;
  onAvatarFileChange?: (file: File | null) => void;
};

export default function ProfileEditForm({
  profile,
  onChange,
  onRoleChange,
  onInterestsChange,
  onSocialLinksChange,
  onSave,
  onBack,
  onAvatarFileChange,
}: ProfileEditFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Edit {profile.author}</h2>
        <Button variant="outline" onClick={onBack}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {/* AUTHOR (readonly / not recommended to change) */}
      <div className="mb-4">
        <Label htmlFor="author">author:</Label>
        <Input
          id="author"
          name="author"
          value={profile.author || ""}
          onChange={onChange}
          className="mt-1 block w-full"
          disabled
        />
      </div>

      {/* ROLE */}
      <div className="mb-4">
        <Label htmlFor="role">role:</Label>
        <Select value={profile.role} onValueChange={onRoleChange}>
          <SelectTrigger className="w-full mt-1">
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

      {/* ORGANIZATION NAME */}
      <div className="mb-4">
        <Label htmlFor="organization_name">organization_name:</Label>
        <Input
          id="organization_name"
          name="organization_name"
          value={profile.organization_name || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* ORGANIZATION URL */}
      <div className="mb-4">
        <Label htmlFor="organization_url">organization_url:</Label>
        <Input
          id="organization_url"
          name="organization_url"
          value={profile.organization_url || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* BIO */}
      <div className="mb-4">
        <Label htmlFor="bio">bio:</Label>
        <Textarea
          id="bio"
          name="bio"
          value={profile.bio || ""}
          onChange={onChange}
          className="mt-1 block w-full"
          rows={4}
        />
      </div>

      {/* INTERESTS */}
      <div className="mb-4">
        <Label htmlFor="interests">interests:</Label>
        <DynamicList
          items={profile.interests || []}
          onChange={onInterestsChange}
          placeholder="Add interest"
        />
      </div>

      {/* SOCIAL LINKS */}
      <div className="mb-4">
        <Label htmlFor="social_links">social_links:</Label>
        <DynamicList
          items={profile.social_links || []}
          onChange={onSocialLinksChange}
          placeholder="Add social link"
        />
      </div>

      {/* AVATAR UPDATE */}
      {onAvatarFileChange && (
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
            accept="image/*"
            className="mt-1 block w-full"
            onChange={(e) => onAvatarFileChange(e.target.files?.[0] || null)}
          />
        </div>
      )}

      <Button onClick={onSave}>Save Changes</Button>
    </div>
  );
}
