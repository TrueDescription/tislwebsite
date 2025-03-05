import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";

type News = {
  id: number;
  class: string;
  date: string;
  content: string;
};

type NewsFormProps = {
  initialData?: News | null;
  onSave: (data: News) => void;
  onCancel: () => void;
};

const NewsForm: React.FC<NewsFormProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [news, setNews] = useState<News>(
    initialData || {
      id: 0,
      class: "",
      date: "",
      content: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">
        {initialData ? "Edit News" : "Add News"}
      </h2>

      <Label htmlFor="content">Content:</Label>
      <Input
        id="content"
        name="content"
        value={news.content}
        onChange={handleChange}
      />

      <Label htmlFor="date">Date:</Label>
      <DatePicker
        selected={news.date ? new Date(news.date) : null}
        onChange={(selectedDate) =>
          setNews({
            ...news,
            date: selectedDate?.toISOString().split("T")[0] || "",
          })
        }
      />

      <div className="flex justify-end mt-4">
        <Button variant="outline" onClick={onCancel} className="mr-2">
          Cancel
        </Button>
        <Button onClick={() => onSave(news)}>Save</Button>
      </div>
    </div>
  );
};

export default NewsForm;
