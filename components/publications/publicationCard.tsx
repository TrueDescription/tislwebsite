import { Card, CardBody, Link } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import React from "react";
import publicationType from "./publicationType";

export default function PublicationCard(pub: publicationType) {
  return (
    <div>
      <Card className="max-w-[750px]">
        <CardBody>
          <p className="text-lg">
            <i className="far fa-file-alt pub-icon mr-2" aria-hidden="true"></i>
            <span className="article-metadata li-cite-author">
              {Array.isArray(pub.authors) &&
                pub.authors.map((author, index) => (
                  <span key={index}>
                    <a
                      href={`/people/${author.replace(/ /g, "-")}/`}
                      className="hover:underline hover:text-blue-600"
                    >
                      {author}
                    </a>
                    {index < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              {" (" + pub.date.split("-")[0] + "). "}
              <a
                href={`/publications/${encodeURIComponent(pub.title)}`}
                className="text-blue-600 hover:underline"
              >
                {pub.title}
              </a>
              {". "}
              <em>
                {pub.publicationShort.slice(1, -1)}
                {"."}
              </em>
            </span>
          </p>
          <div className="flex mt-2">
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
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
