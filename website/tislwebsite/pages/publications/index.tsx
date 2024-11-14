import React, { useState } from "react";
import Filter from "@/components/publications/fillter";
import PublicationCard from "@/components/publications/publicationCard";
import HomeNavbar from "@/components/home/HomeNavbar";
import { GetStaticProps } from "next";
import Publication from "@/components/publications/publicationType";
import { getAllPublications } from "@/lib/db";

interface PublicationsPageProps {
  publications: Publication[];
}

export const getStaticProps: GetStaticProps<
  PublicationsPageProps
> = async () => {
  const publications = getAllPublications();
  return {
    props: {
      publications,
    },
  };
};

export default function PublicationsPage({
  publications,
}: PublicationsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("*");
  const [filterYear, setFilterYear] = useState("*");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "pubtype") {
      setFilterType(value);
    } else if (filterType === "year") {
      setFilterYear(value);
    }
  };

  const filteredPublications = publications
    .filter((pub) => {
      const matchesSearch = pub.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesType =
        filterType === "*" || pub.publication_types.includes(filterType);

      const matchesYear =
        filterYear === "*" ||
        pub.date.split("T")[0].split("-")[0].toString() ==
          filterYear.split("-")[1];

      return matchesSearch && matchesType && matchesYear;
    })
    .sort(
      (a, b) =>
        new Date(b.date.split("T")[0]).getTime() -
        new Date(a.date.split("T")[0]).getTime()
    );

  const years = Array.from(
    new Set(
      publications.map((pub) => parseInt(pub.date.split("T")[0].split("-")[0]))
    )
  );

  return (
    <div>
      <HomeNavbar />
      <div className="flex justify-center min-h-screen">
        <div className="publications-page w-full max-w-4xl py-12 px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Publications
          </h1>
          <div className="text-center mb-6">
            <Filter
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              years={years}
              publicationTypes={[
                { label: "Journal article", value: "article-journal" },
                {
                  label: "Conference paper",
                  value: "paper-conference",
                },
              ]}
            />
          </div>
          <div className="publications-container grid justify-center">
            {filteredPublications.map((pub, index) => (
              <div key={index} className="mb-5">
                {/* <PublicationCard {...pub} /> */}
                <PublicationCard {...pub} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
