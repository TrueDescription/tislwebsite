// @/components/admin/ProfileList.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
// import { Profile } from "@/types/allTypes"; // <-- adjust path to your actual types location

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

type ProfileListProps = {
  profiles: Profile[];
  onEdit: (profile: Profile) => void;
  onRemove: (author: string) => void;
};

export default function ProfileList({
  profiles,
  onEdit,
  onRemove,
}: ProfileListProps) {
  const router = useRouter();

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        {/* <h2 className="text-2xl font-semibold">Profiles</h2> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
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
                <CardTitle className="text-lg">{profile.author}</CardTitle>
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
                    onEdit(profile);
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
                  onClick={() => onRemove(profile.author)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
