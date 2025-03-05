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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
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
        <Label htmlFor="title">title:</Label>
        <Input
          id="title"
          name="title"
          value={publication.title || ""}
          onChange={onChange}
          className="mt-1 block w-full"
        />
      </div>

      {/* AUTHORS (DynamicList -> comma separated) */}
      <div className="mb-4">
        <Label htmlFor="authors">authors:</Label>
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
        <Label htmlFor="date">date:</Label>
        <DatePicker
          selected={publication.date ? new Date(publication.date) : null}
          onChange={onDateChange}
        />
      </div>

      {/* PUBLICATION_TYPE (Select) */}
      <div className="mb-4">
        <Label htmlFor="publication_types">publication_types:</Label>
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

      {/* ABSTRACT */}
      <div className="mb-4">
        <Label htmlFor="abstract">abstract:</Label>
        <Textarea
          id="abstract"
          name="abstract"
          value={publication.abstract || ""}
          onChange={onChange}
          rows={4}
        />
      </div>

      {/* PDF Upload */}
      {onPdfFileChange && (
        <div className="mb-4">
          <Label htmlFor="pdfFile">Update Pdf:</Label>
          <Input
            id="pdfFile"
            type="file"
            accept="application/pdf"
            className="mt-1 block w-full"
            onChange={(e) => onPdfFileChange(e.target.files?.[0] || null)}
          />
        </div>
      )}

      <Button onClick={onSave}>Save Changes</Button>
    </div>
  );
}
