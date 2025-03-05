import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DynamicList } from "@/components/ui/dynamic-list";
import { DatePicker } from "@/components/ui/date-picker";

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

type PublicationFormProps = {
  initialData?: Publication | null;
  onSave: (data: Publication) => void;
  onCancel: () => void;
};

const PublicationForm: React.FC<PublicationFormProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [publication, setPublication] = useState<Publication>(
    initialData || {
      id: 0,
      authors: "",
      date: "",
      publication_types: "",
      publication: "",
      publication_short: "",
      title: "",
      url_pdf: "",
      abstract: "",
      url_preprint: "",
      url_code: "",
      url_dataset: "",
      url_poster: "",
      url_project: "",
      url_slides: "",
      url_source: "",
      url_video: "",
      cite: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPublication({ ...publication, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">
        {initialData ? "Edit Publication" : "Add Publication"}
      </h2>

      <Label htmlFor="title">Title:</Label>
      <Input
        id="title"
        name="title"
        value={publication.title}
        onChange={handleChange}
      />

      <Label htmlFor="authors">Authors:</Label>
      <DynamicList
        items={publication.authors.split(",").map((author) => author.trim())}
        onChange={(items) =>
          setPublication({ ...publication, authors: items.join(", ") })
        }
        placeholder="Add author"
      />

      <Label htmlFor="date">Date:</Label>
      <DatePicker
        selected={publication.date ? new Date(publication.date) : null}
        onChange={(selectedDate) =>
          setPublication({
            ...publication,
            date: selectedDate?.toISOString().split("T")[0] || "",
          })
        }
      />

      <Label htmlFor="abstract">Abstract:</Label>
      <Textarea
        id="abstract"
        name="abstract"
        value={publication.abstract}
        onChange={handleChange}
        rows={4}
      />

      <div className="flex justify-end mt-4">
        <Button variant="outline" onClick={onCancel} className="mr-2">
          Cancel
        </Button>
        <Button onClick={() => onSave(publication)}>Save</Button>
      </div>
    </div>
  );
};

export default PublicationForm;
