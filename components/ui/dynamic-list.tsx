import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { PlusIcon, XIcon } from "lucide-react";

interface DynamicListProps {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder: string;
}

export function DynamicList({
  items,
  onChange,
  placeholder,
}: DynamicListProps) {
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      onChange([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Input value={item} readOnly />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeItem(index)}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <Button type="button" onClick={addItem}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>
    </div>
  );
}
