"use client";

import React from "react";
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
import { ArrowLeftIcon } from "lucide-react";
// import { Publication } from "@/types/allTypes"; // adjust path if needed

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

const PUBLICATION_TYPES = ["paper-conference", "article-journal"];
type PublicationEditFormProps = {
  publication: Publication;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPublicationTypeChange: (type: string) => void;
  onAuthorsChange: (authors: string[]) => void;
  onDateChange: (selectedDate: Date | null) => void;
  onSave: () => void;
  onBack: () => void;
  onPdfFileChange?: (file: File | null) => void;
};

export default function PublicationEditForm({
  publication,
  onChange,
  onPublicationTypeChange,
  onAuthorsChange,
  onDateChange,
  onSave,
  onBack,
  onPdfFileChange,
}: PublicationEditFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Edit {publication.title}</h2>
        <Button variant="outline" onClick={onBack}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {/* TITLE */}
      <div className="mb-4">
        <Label htmlFor="title">Title:</Label>
        <Input
          id="title"
          name="title"
          value={publication.title || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* AUTHORS (comma-separated -> DynamicList) */}
      <div className="mb-4">
        <Label htmlFor="authors">Authors:</Label>
        <DynamicList
          items={
            publication.authors
              ? publication.authors.split(",").map((a) => a.trim())
              : []
          }
          onChange={onAuthorsChange}
          placeholder="Add author"
        />
      </div>

      {/* DATE */}
      <div className="mb-4">
        <Label htmlFor="date">Date:</Label>
        <DatePicker
          selected={publication.date ? new Date(publication.date) : null}
          onChange={onDateChange}
        />
      </div>

      {/* PUBLICATION TYPE (Select) */}
      <div className="mb-4">
        <Label htmlFor="publication_types">Publication Type:</Label>
        <Select
          value={publication.publication_types || ""}
          onValueChange={onPublicationTypeChange}
        >
          <SelectTrigger className="w-full mt-1">
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
      <div className="mb-4">
        <Label htmlFor="publication">Publication:</Label>
        <Input
          id="publication"
          name="publication"
          value={publication.publication || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* PUBLICATION SHORT */}
      <div className="mb-4">
        <Label htmlFor="publication_short">Publication Short:</Label>
        <Input
          id="publication_short"
          name="publication_short"
          value={publication.publication_short || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* ABSTRACT */}
      <div className="mb-4">
        <Label htmlFor="abstract">Abstract:</Label>
        <Textarea
          id="abstract"
          name="abstract"
          value={publication.abstract || ""}
          onChange={onChange}
          rows={4}
        />
      </div>

      {/* CITE (BibTeX or other) */}
      <div className="mb-4">
        <Label htmlFor="cite">
          Citation: Please follow the format from this{" "}
          <a
            href="https://www.bibtex.com/g/bibtex-format/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            link
          </a>
        </Label>
        <Textarea
          id="cite"
          name="cite"
          value={publication.cite || ""}
          onChange={onChange}
          rows={4}
        />
      </div>

      {/* Additional Link Fields */}
      {/* You can replicate the approach you use in AddPublicationForm. */}
      {/* For example: url_pdf, url_preprint, url_code, etc. */}
      <div className="mb-4">
        <Label htmlFor="url_pdf">PDF URL:</Label>
        <Input
          id="url_pdf"
          name="url_pdf"
          value={publication.url_pdf || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_preprint">Preprint URL:</Label>
        <Input
          id="url_preprint"
          name="url_preprint"
          value={publication.url_preprint || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_code">GitHub URL:</Label>
        <Input
          id="url_code"
          name="url_code"
          value={publication.url_code || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_dataset">Dataset URL:</Label>
        <Input
          id="url_dataset"
          name="url_dataset"
          value={publication.url_dataset || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_poster">Poster URL:</Label>
        <Input
          id="url_poster"
          name="url_poster"
          value={publication.url_poster || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_project">Project URL:</Label>
        <Input
          id="url_project"
          name="url_project"
          value={publication.url_project || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_slides">Slides URL:</Label>
        <Input
          id="url_slides"
          name="url_slides"
          value={publication.url_slides || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_source">Source URL:</Label>
        <Input
          id="url_source"
          name="url_source"
          value={publication.url_source || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="url_video">Video URL:</Label>
        <Input
          id="url_video"
          name="url_video"
          value={publication.url_video || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* PDF UPLOAD */}
      {onPdfFileChange && (
        <div className="mb-4">
          <Label htmlFor="pdfFile">Update PDF:</Label>
          <Input
            id="pdfFile"
            type="file"
            accept="application/pdf"
            className="mt-1 block w-full"
            onChange={(e) => onPdfFileChange(e.target.files?.[0] || null)}
          />
        </div>
      )}

      {/* SAVE BUTTON */}
      <Button onClick={onSave}>Save Changes</Button>
    </div>
  );
}
