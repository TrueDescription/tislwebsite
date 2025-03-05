// @/components/admin/PublicationsList.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, TrashIcon } from "lucide-react";
// import { Publication } from "@/types/allTypes"; // Adjust path if needed

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

type PublicationsListProps = {
  publications: Publication[];
  onEdit: (publication: Publication) => void;
  onRemove: (id: number) => void;
};

export default function PublicationsList({
  publications,
  onEdit,
  onRemove,
}: PublicationsListProps) {
  const router = useRouter();

  return (
    <section>
      <div className="flex justify-between mb-4 ">
        {/* <h2 className="text-2xl font-semibold">Publications</h2> */}
        {/* The "Add Publication" button + Dialog remain in index.tsx */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {publications.map((pub) => (
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
                    onEdit(pub);
                    router.push(`/admin?type=publications&id=${pub.id}`);
                  }}
                >
                  Edit Publication
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onRemove(pub.id)}
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
