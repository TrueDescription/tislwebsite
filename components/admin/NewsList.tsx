// @/components/admin/NewsList.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, TrashIcon } from "lucide-react";
import { News } from "@/types/allTypes";

type NewsListProps = {
  news: News[];
  onEdit: (newsItem: News) => void;
  onRemove: (id: number) => void;
};

export default function NewsList({ news, onEdit, onRemove }: NewsListProps) {
  const router = useRouter();

  return (
    <section>
      <div className="flex justify-between mb-4">
        {/* <h2 className="text-2xl font-semibold">News</h2> */}
        {/* The "Add News" dialog remains in index.tsx */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((newsi) => (
          <Card key={newsi.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <CardTitle className="text-lg">
                <i className={newsi.class} aria-hidden="true"></i>
                <p>{newsi.content}</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2 flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {newsi.date}
              </p>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onEdit(newsi);
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
                  onClick={() => onRemove(newsi.id)}
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
