import React from "react";

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
    <div className="flex flex-col md:flex-row gap-4 items-center p-6 rounded-lg shadow-lg max-w-[850px] ">
      {/* Search Bar */}
      <div className="flex-1 w-full">
        <label htmlFor="search" className="sr-only">
          Search Publications
        </label>
        <input
          type="search"
          id="search"
          className="w-full rounded-lg  text-primary border placeholder-primary/70 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2"
          placeholder="Search for publications..."
          onChange={onSearchChange}
        />
      </div>

      {/* Publication Type Filter */}
      <div className="flex-1 w-full">
        <label htmlFor="publication-type" className="sr-only">
          Filter by Publication Type
        </label>
        <select
          id="publication-type"
          className="w-full text-primary border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2"
          onChange={(e) => onFilterChange("pubtype", e.target.value)}
        >
          <option value="*">All Publication Types</option>
          {publicationTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Year Filter */}
      <div className="flex-1 w-full">
        <label htmlFor="year" className="sr-only">
          Filter by Year
        </label>
        <select
          id="year"
          className="w-full rounded-lg text-primary border focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2"
          onChange={(e) => onFilterChange("year", e.target.value)}
        >
          <option value="*">All Years</option>
          {years.map((year) => (
            <option key={year} value={`year-${year}`}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
