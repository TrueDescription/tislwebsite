import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { AuthorProfile } from "./peopleType";

interface Props {
  title: string;
  name: string;
  role: string;
  link: string;
  slug: string;
  socialLinks: string[];
  personalWebsite: string;
}

export default function PeopleCard({
  title,
  name,
  role,
  link,
  slug,
  socialLinks,
  personalWebsite,
}: Props) {
  return (
    <div>
      
      <Card className="py-4 m-5 mb-2 max-w-[300px] max-h-[435px]">
  {/* Wrap the title and image with a single Link */}
  <Link
    href={
      personalWebsite.startsWith("http")
        ? personalWebsite
        : `/people/${slug}`
    }
    target={personalWebsite.startsWith("http") ? "_blank" : "_self"}
    rel={
      personalWebsite.startsWith("http") ? "noopener noreferrer" : undefined
    }
    className="block" // Ensure the entire area is clickable
  >
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">{role}</p>
      <small className="text-default-500 text-default-500 truncate w-full max-w-[300px]">
        {title}
      </small>
      <h4 className="font-bold text-large">{name}</h4>
    </CardHeader>

    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={link}
        width={270}
        height={300}
      />
    </CardBody>
  </Link>

    <div className="flex ml-3">
      {socialLinks &&
        socialLinks.map((link, index) => (
          <Link
            key={index}
            className="mr-2"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.includes("twitter") && <i className="fab fa-twitter"></i>}
            {link.includes("github") && <i className="fab fa-github"></i>}
            {link.includes("scholar") && <i className="ai ai-google-scholar"></i>}
            {link.includes("mailto") && <i className="fas fa-envelope"></i>}
            {!link.includes("twitter") &&
              !link.includes("github") &&
              !link.includes("scholar") &&
              !link.includes("mailto") && <i className="fas fa-link"></i>}
          </Link>
        ))}
    </div>
</Card>
      
      
    </div>
  );
}
