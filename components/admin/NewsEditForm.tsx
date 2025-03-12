"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { ArrowLeftIcon } from "lucide-react";
import { News } from "@/types/allTypes";

type NewsEditFormProps = {
  news: News;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (date: Date | null) => void;
  onSave: () => void;
  onBack: () => void;
};

export default function NewsEditForm({
  news,
  onChange,
  onDateChange,
  onSave,
  onBack,
}: NewsEditFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Edit News</h2>
        <Button variant="outline" onClick={onBack}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {/* CONTENT */}
      <div className="mb-4">
        <Label htmlFor="content">content:</Label>
        <Input
          id="content"
          name="content"
          value={news.content || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* CLASS (ICON) */}
      <div className="mb-4">
        <Label htmlFor="class">
          class (icon): Class names can be found at the following
        </Label>
        <Input
          id="class"
          name="class"
          value={news.class || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* DATE */}
      <div className="mb-4">
        <Label htmlFor="date">date:</Label>
        <DatePicker
          selected={news.date ? new Date(news.date) : null}
          onChange={onDateChange}
        />
      </div>

      <Button onClick={onSave}>Save Changes</Button>
    </div>
  );
}
