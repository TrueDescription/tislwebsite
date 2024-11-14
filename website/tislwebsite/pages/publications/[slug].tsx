import HomeNavbar from "@/components/home/HomeNavbar";
import AuthorCard from "@/components/publications/authorCard";
import PublicationCard from "@/components/publications/publicationCard";
import Publication from "@/components/publications/publicationType";
import ShareButtons from "@/components/publications/shareButtons";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PublicationsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [publication, setPublication] = useState<Publication | null>(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchPublication() {
      try {
        const response = await fetch(
          `/api/publication?slug=${encodeURIComponent(slug as string)}`
        );
        const data: Publication | null = await response.json();

        if (data) {
          setPublication({
            ...data,
            authors:
              typeof data.authors === "string"
                ? data.authors.split(",").map((author: string) => author.trim())
                : data.authors,
          });
        } else {
          setPublication(null);
        }
      } catch (error) {
        console.error("Failed to fetch publication:", error);
      }
    }

    fetchPublication();
  }, [slug]);

  if (!slug) {
    return <div>Loading...</div>;
  }

  if (!publication) {
    return <div>Publication not found</div>;
  }
  return (
    <div>
      <HomeNavbar />
      <div className="page-body container mx-auto px-4 lg:px-8 py-8">
        <div className="pub">
          <div className="article-container pt-6">
            <h1 className="text-3xl font-bold mb-4">{publication.title}</h1>

            <div className="article-metadata text-gray-600 mb-4">
              <div className="flex flex-wrap space-x-2 mb-2">
                {(typeof publication.authors === "string"
                  ? publication.authors
                      .split(",")
                      .map((author: string) => author.trim())
                  : publication.authors
                ).map((author: string, index: number) => (
                  <span key={index}>
                    <a
                      href={`/people/${author.replace(/ /g, "-")}/`}
                      className="text-blue-600 hover:underline"
                    >
                      <User
                        name={author}
                        description=""
                        avatarProps={{
                          src: `/authors/${author.replace(/ /g, "-").toLowerCase()}.jpg`,
                        }}
                      />
                    </a>
                  </span>
                ))}
              </div>

              <span className="article-date block text-gray-500">
                {new Date(publication.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="btn-links mb-6 flex space-x-4">
              {publication.url_pdf && (
                <Chip color="primary">
                  <a
                    href={publication.url_pdf}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </Chip>
              )}
              {publication.url_preprint && (
                <Chip color="primary">
                  <a
                    href={publication.url_preprint}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preprint
                  </a>
                </Chip>
              )}

              {publication.url_code && (
                <Chip color="primary">
                  <a
                    href={publication.url_code}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Chip>
              )}

              {publication.url_dataset && (
                <Chip color="primary">
                  <a
                    href={publication.url_dataset}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dataset
                  </a>
                </Chip>
              )}

              {publication.url_poster && (
                <Chip color="primary">
                  <a
                    href={publication.url_poster}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Poster
                  </a>
                </Chip>
              )}

              {publication.url_project && (
                <Chip color="primary">
                  <a
                    href={publication.url_project}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project
                  </a>
                </Chip>
              )}

              {publication.url_slides && (
                <Chip color="primary">
                  <a
                    href={publication.url_slides}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Slides
                  </a>
                </Chip>
              )}

              {publication.url_source && (
                <Chip color="primary">
                  <a
                    href={publication.url_source}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </Chip>
              )}

              {publication.url_video && (
                <Chip color="primary">
                  <a
                    href={publication.url_video}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video
                  </a>
                </Chip>
              )}
              <Chip color="primary">
                <a
                  href="#"
                  onClick={() => alert("Cite modal would appear here")}
                >
                  Cite
                </a>
              </Chip>
            </div>
          </div>

          <div className="article-container my-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Abstract
            </h3>
            <p className="pub-abstract text-lg leading-relaxed text-justify mb-6">
              {publication.abstract}
            </p>

            <div className="row my-6">
              <div className="col-md-1"></div>
              <div className="col-md-10 mx-auto">
                <div className="row mb-4">
                  <div className="col-12 col-md-3 font-semibold">Type</div>
                  <div className="col-12 col-md-9">
                    <p>{publication.publication_types}</p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12 col-md-3 font-semibold">
                    Publication
                  </div>
                  <div className="col-12 col-md-9">
                    {publication.publication}{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <ShareButtons slug={slug as string} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
