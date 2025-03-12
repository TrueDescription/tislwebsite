"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { Link } from "@nextui-org/link";
import { News } from "@/types/allTypes";

type AddNewsFormProps = {
  onSubmit: (newNews: Partial<News>) => void;
};

export default function AddNewsForm({ onSubmit }: AddNewsFormProps) {
  const [localItem, setLocalItem] = useState<Partial<News>>({
    content: "",
    class: "",
    date: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocalItem((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleDateChange(date: Date | null) {
    const newDate = date ? date.toISOString().split("T")[0] : "";
    setLocalItem((prev) => ({ ...prev, date: newDate }));
  }

  return (
    <div className="max-w-md">
      <div className="grid gap-4 py-4">
        {/* CONTENT */}
        <div className="flex-col grid-cols-4 items-center gap-4">
          <Label htmlFor="content" className="text-right">
            Content
          </Label>
          <Input
            id="content"
            value={localItem.content || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* ICON CLASS */}
        <div className="flex-col grid-cols-4 items-center gap-4">
          <Label htmlFor="class" className="text-right">
            Icon: Class names can be found at the following{" "}
            <Link
              href="https://fontawesome.com/icons"
              target="_blank"
              className="text-blue-500"
            >
              link
            </Link>
          </Label>
          <Input
            id="class"
            value={localItem.class || ""}
            onChange={handleInputChange}
          />
        </div>

        {/* DATE */}
        <div className="flex-col grid-cols-4 items-center gap-4">
          <Label htmlFor="date" className="text-right mr-3">
            Date
          </Label>
          <DatePicker
            id="date"
            selected={localItem.date ? new Date(localItem.date) : null}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <Button onClick={() => onSubmit(localItem)}>Add News</Button>
    </div>
  );
}
