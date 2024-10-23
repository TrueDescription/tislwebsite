import React from "react";
// import { Select, SelectItem } from "@nextui-org/react";

interface FilterProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (filterType: string, value: string) => void;
  years: number[];
  publicationTypes: { label: string; value: string }[];
}

export default function Filter({
  onSearchChange,
  onFilterChange,
  years,
  publicationTypes,
}: FilterProps) {
  return (
    <div className="filter-bar">
      <input
        type="search"
        className="form-control"
        placeholder="Search..."
        onChange={onSearchChange}
      />
      <select
        className="form-control"
        onChange={(e) => onFilterChange("pubtype", e.target.value)}
      >
        <option value="*">Type</option>
        {publicationTypes.map((type, index) => (
          <option key={index} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
      <select
        className="form-control"
        onChange={(e) => onFilterChange("year", e.target.value)}
      >
        <option value="*">Year</option>
        {years.map((year, index) => (
          <option key={index} value={`year-${year}`}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
