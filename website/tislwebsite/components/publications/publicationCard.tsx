import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import React from "react";
import Publication from "./publicationType"; // Ensure this is correctly imported from your types

export default function PublicationCard({ title, authors, year, publicationType, links, slug }: Publication) {
  return (
    <div>
      <Card className="max-w-[750px]">
        <CardHeader className="flex gap-3">
          <i className="far fa-file-alt pub-icon" aria-hidden="true"></i>
          <span className="article-metadata li-cite-author">
            {authors.map((author, index) => (
              <span key={index}>
                <a href={`/author/${author.toLowerCase().replace(' ', '-')}/`}>{author}</a>
                {index < authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            {year} -{" "}
            <Link href={`/publications/${slug}`}>
              {title}
            </Link>
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          {links.pdf && (
            <Chip color="primary">
              <a href={links.pdf} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                PDF
              </a>
            </Chip>
          )}
          {links.cite && (
            <Chip color="primary">
              <a href={links.cite} className="btn btn-outline-primary btn-sm">
                Cite
              </a>
            </Chip>
          )}
          {links.code && (
            <Chip color="primary">
              <a href={links.code} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </Chip>
          )}
          {links.project && (
            <Chip color="primary">
              <a href={links.project} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                Project
              </a>
            </Chip>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
