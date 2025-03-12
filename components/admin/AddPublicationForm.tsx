"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DynamicList } from "@/components/ui/dynamic-list";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Tooltip } from "@nextui-org/tooltip";
import { PUBLICATION_TYPES, Publication } from "@/types/allTypes";

// Fields requiring "https://..."
const extraLinkFields = [
  { id: "url_pdf", label: "PDF URL" },
  { id: "url_preprint", label: "Preprint URL" },
  { id: "url_code", label: "GitHub URL" },
  { id: "url_dataset", label: "Dataset URL" },
  { id: "url_poster", label: "Poster URL" },
  { id: "url_project", label: "Project URL" },
  { id: "url_slides", label: "Slides URL" },
  { id: "url_source", label: "Source URL" },
  { id: "url_video", label: "Video URL" },
];

type AddPublicationFormProps = {
  onSubmit: (newPublication: Partial<Publication>) => void;
  onPdfFileChange?: (file: File | null) => void;
};

export default function AddPublicationForm({
  onSubmit,
  onPdfFileChange,
}: AddPublicationFormProps) {
  const [localItem, setLocalItem] = useState<Partial<Publication>>({
    title: "",
    authors: "",
    date: "",
    publication_types: "",
    publication: "",
    publication_short: "",
    abstract: "",
    cite: "",
    url_pdf: "",
    url_preprint: "",
    url_code: "",
    url_dataset: "",
    url_poster: "",
    url_project: "",
    url_slides: "",
    url_source: "",
    url_video: "",
  });

  // On input change for basic fields
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setLocalItem((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  // On date change
  function handleDateChange(date: Date | null) {
    const newDate = date ? date.toISOString().split("T")[0] : "";
    setLocalItem((prev) => ({ ...prev, date: newDate }));
  }

  // On publication type change
  function handlePublicationTypeChange(newType: string) {
    setLocalItem((prev) => ({ ...prev, publication_types: newType }));
  }

  // On authors change (DynamicList for authors)
  function handleAuthorsChange(authorsArr: string[]) {
    setLocalItem((prev) => ({ ...prev, authors: authorsArr }));
  }

  return (
    <div className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
      <div className="grid gap-4 py-4">
        {/* TITLE */}
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={localItem.title || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* AUTHORS (DynamicList) */}
        <div className="grid gap-2">
          <Label htmlFor="authors">Authors</Label>
          <DynamicList
            items={Array.isArray(localItem.authors) ? localItem.authors : []}
            onChange={handleAuthorsChange}
            placeholder="Add author"
          />
        </div>

        {/* DATE */}
        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <DatePicker
            id="date"
            selected={localItem.date ? new Date(localItem.date) : null}
            onChange={handleDateChange}
          />
        </div>

        {/* PUBLICATION TYPE */}
        <div className="grid gap-2">
          <Label htmlFor="publication_types">Publication Type</Label>
          <Select
            value={localItem.publication_types || ""}
            onValueChange={handlePublicationTypeChange}
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

        {/* PUBLICATION */}
        <div className="grid gap-2">
          <Label htmlFor="publication">Publication</Label>
          <Input
            id="publication"
            value={localItem.publication || ""}
            onChange={handleInputChange}
          />
        </div>

        {/* PUBLICATION SHORT */}
        <div className="grid gap-2">
          <Label htmlFor="publication_short">Publication Short</Label>
          <Input
            id="publication_short"
            value={localItem.publication_short || ""}
            onChange={handleInputChange}
          />
        </div>

        {/* ABSTRACT */}
        <div className="grid gap-2">
          <Label htmlFor="abstract">Abstract</Label>
          <Textarea
            id="abstract"
            value={localItem.abstract || ""}
            onChange={handleInputChange}
            className="h-24"
          />
        </div>

        {/* CITE */}
        <div className="grid gap-2">
          <Label htmlFor="cite">
            Citation: Please follow the format from this{" "}
            <a
              className="text-blue-500 hover:text-blue-700 underline"
              href="https://www.bibtex.com/g/bibtex-format/"
              rel="noopener noreferrer"
              target="_blank"
            >
              link
            </a>
          </Label>
          <Textarea
            id="cite"
            value={localItem.cite || ""}
            onChange={handleInputChange}
            className="h-24"
          />
        </div>

        {/* PDF Upload */}
        {onPdfFileChange && (
          <div className="grid gap-2">
            <Label htmlFor="pdfFile">Upload PDF</Label>
            <input
              id="pdfFile"
              type="file"
              accept="application/pdf"
              onChange={(e) => onPdfFileChange(e.target.files?.[0] || null)}
              required
            />
          </div>
        )}

        {/* Extra Link Fields */}
        <div>
          <Label>
            Please include 'https://' in all following links if they go
            off-site.
          </Label>
          <Label>The following fields are optional.</Label>

          {extraLinkFields.map(({ id, label }) => (
            <div key={id} className="mt-3">
              <Label htmlFor={id}>{label}</Label>
              {id === "url_pdf" ? (
                // PDF URL has a tooltip in your code
                <div>
                  <Tooltip content="This will be filled automatically with an upload if a PDF is selected.">
                    <Button className="bg-transparent border-2 border-gray-400 text-gray-600 rounded-full w-5 h-5 p-0 min-w-0 ml-3">
                      i
                    </Button>
                  </Tooltip>
                  <Input
                    id={id}
                    value={(localItem as any)[id] || ""}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <Input
                  id={id}
                  value={(localItem as any)[id] || ""}
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Button onClick={() => onSubmit(localItem)} className="w-full">
        Add Publication
      </Button>
    </div>
  );
}
