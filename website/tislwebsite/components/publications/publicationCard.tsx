import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import React from "react";
import Publication from "./publicationType";
import publicationType from "./publicationType";

export default function PublicationCard(pub: publicationType) {
  return (
    <div>
      <Card className="max-w-[750px]">
        <CardHeader className="flex gap-3">
          <i className="far fa-file-alt pub-icon" aria-hidden="true"></i>
          <span className="article-metadata li-cite-author">
            {pub.authors.map((author, index) => (
              <span key={index}>
                <a href={`/people/${author.replace(/ /g, "-")}/`}>{author}</a>
                {index < pub.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            <Link href={`/publications/${pub.id}`}>{pub.title}</Link>{" "}
          </p>
          <Divider className="mb-3 mt-3" />
          {pub.date.split("T")[0]}
        </CardBody>
        <Divider />
        <CardFooter>
          {pub.url_pdf && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_pdf}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF
              </a>
            </Chip>
          )}
          {pub.url_preprint && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_preprint}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preprint
              </a>
            </Chip>
          )}

          {pub.url_code && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_code}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </Chip>
          )}

          {pub.url_dataset && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_dataset}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dataset
              </a>
            </Chip>
          )}

          {pub.url_poster && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_poster}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poster
              </a>
            </Chip>
          )}

          {pub.url_project && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_project}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project
              </a>
            </Chip>
          )}

          {pub.url_slides && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_slides}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slides
              </a>
            </Chip>
          )}

          {pub.url_source && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_source}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </Chip>
          )}

          {pub.url_video && (
            <Chip color="primary" className="mr-2">
              <a
                href={pub.url_video}
                className="btn btn-outline-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </a>
            </Chip>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
