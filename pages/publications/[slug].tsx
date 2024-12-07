import HomeNavbar from "@/components/home/HomeNavbar";
import { AuthorProfile } from "@/components/people/peopleType";
import Publication from "@/components/publications/publicationType";
import ShareButtons from "@/components/publications/shareButtons";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { useRouter } from "next/router";

interface PublicationsPageProps {
  authors: AuthorProfile[];
  publications: Publication[];
}

export default function PublicationsPage({
  authors,
  publications,
}: PublicationsPageProps) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || publications == null) {
    return (
      <div>
        <HomeNavbar />
      </div>
    );
  }

  const decodedSlug = decodeURIComponent(slug as string);
  const publication = publications.find((pub) => pub.title === decodedSlug);

  if (!publication) {
    return <div>Publication not found</div>;
  }

  // Ensure authors is always an array of strings
  const publicationAuthors = Array.isArray(publication.authors)
    ? publication.authors
    : publication.authors.split(",").map((author: string) => author.trim());

  return (
    <div>
      <HomeNavbar />
      <div className="page-body container mx-auto px-4 lg:px-8 py-8">
        <div className="pub">
          <div className="article-container pt-6">
            <h1 className="text-3xl font-bold mb-4">{publication.title}</h1>

            <div className="article-metadata text-gray-600 mb-4">
              <div className="flex flex-wrap space-x-2 mb-2">
                {publicationAuthors.map((author: string, index: number) => (
                  <span key={index}>
                    <a
                      href={`/people/${author.replace(/ /g, "-")}/`}
                      className="text-blue-600 hover:underline"
                    >
                      {author}
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
                    href={"/" + publication.url_pdf}
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
