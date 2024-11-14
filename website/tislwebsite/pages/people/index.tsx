import React from "react";
import HomeNavbar from "@/components/home/HomeNavbar";
import PeopleCard from "@/components/people/PeopleCard";
import { GetStaticProps } from "next";
import { AuthorProfile } from "@/components/people/peopleType";
import { getAllAuthors } from "@/lib/db";
import Students from "@/components/people/Students";
import Alumni from "@/components/people/Alumni";

interface PeoplePageProps {
  authors: AuthorProfile[];
}

export const getStaticProps: GetStaticProps<PeoplePageProps> = async () => {
  const authors = getAllAuthors();
  return {
    props: {
      authors,
    },
  };
};

export default function People({ authors }: PeoplePageProps) {
  return (
    <div>
      <HomeNavbar />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold m-5">Meet The Team</h1>
        <div className="flex justify-center">
          <PeopleCard
            title="Assistant Professor"
            role="Principle Investigator"
            slug="Igor-Gilitschenski"
            name="Igor Gilitschenski"
            link="/authors/igor-gilitschenski.jpg"
            socialLinks={[
              "mailto:igor@gilitschenski.org",
              "https://twitter.com/igilitschenski",
              "https://scholar.google.com/citations?user=Nuw1Y4oAAAAJ&hl=en",
              "https://github.com/igilitschenski",
            ]}
            personalWebsite=""
          />
        </div>
        <h1 className="text-4xl font-bold m-5">Graduate</h1>
        <div className="flex justify-center flex-wrap">
          {authors
            .filter((author) => author.author != "Igor Gilitschenski")
            .map((author) => (
              <PeopleCard
                key={author.author}
                title={author.organizationName}
                name={author.author}
                role={author.role}
                slug={`${author.author.replace(/\s+/g, "-")}`}
                link={`/authors/${author.author.replace(/\s+/g, "-").toLowerCase()}.jpg`}
                socialLinks={author.socialLinks}
                personalWebsite={author.personalWebsite}
              />
            ))}
        </div>
        {/* <h1 className="text-4xl font-bold m-5">Alumni</h1>
        <div className="flex justify-center flex-wrap">
          {authors
            .filter((author) => author.role === "Alumni")
            .map((author) => (
              <PeopleCard
                key={author.author}
                title={author.organizationName}
                name={author.author}
                role={author.role}
                slug={`${author.author.replace(/\s+/g, "")}.jpg`}
                link={`/public/${author.author.replace(/\s+/g, "")}.jpg`}
                socialLinks={author.socialLinks}
              />
            ))}
        </div> */}
      </div>
      <Alumni />
      <Students />
    </div>
  );
}
