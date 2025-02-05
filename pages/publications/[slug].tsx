import HomeNavbar from "@/components/home/HomeNavbar";
import { AuthorProfile } from "@/components/people/peopleType";
import Publication from "@/components/publications/publicationType";
import ShareButtons from "@/components/publications/shareButtons";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { useRouter } from "next/router";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";

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
  // console.log(decodedSlug);
  const publication = publications.find((pub) => {
    // console.log(pub.url_pdf.split("/")[1]);
    // console.log(
    //   pub.title === decodedSlug || pub.url_pdf.split("/")[1] == decodedSlug
    // );
    if (pub.url_pdf) {
      console.log(
        `pdfPart=${pub.url_pdf}, decodedSlug=${decodedSlug} value=${pub.url_pdf.split("/")[1] == decodedSlug}`
      );
      return (
        pub.title === decodedSlug || pub.url_pdf.split("/")[1] == decodedSlug
      );
    }
    return pub.title === decodedSlug;
  });
  // console.log(publication);
  if (publication)
    console.log(
      publication.publication_types === "paper-conference",
      publication.publication_types
    );
  if (!publication) {
    return (
      <div>
        <HomeNavbar />
        Publication not found
      </div>
    );
  }

  const publicationAuthors = Array.isArray(publication.authors)
    ? publication.authors
    : publication.authors.split(",").map((author: string) => author.trim());

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const [textToCopy, setTextToCopy] = useState("This is the text to copy!");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(publication.cite).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  const downloadFile = () => {
    const blob = new Blob([publication.cite], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "cite.bib";
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
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
                      href={`/people/${encodeURIComponent(author)}/`}
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
              <Chip color="primary" className="mr-2">
                <a className="btn btn-outline-primary btn-sm" onClick={onOpen}>
                  Cite
                </a>
                <Modal
                  isDismissable={false}
                  isKeyboardDismissDisabled={true}
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                >
                  <ModalContent className="max-w-fit">
                    {/* <ModalContent> */}
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Citation
                        </ModalHeader>
                        <ModalBody>
                          <pre>
                            <code>{publication.cite}</code>
                          </pre>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" onPress={copyToClipboard}>
                            Copy
                          </Button>
                          <Button color="primary" onPress={downloadFile}>
                            Download
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
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
                  <div className="col-12 col-md-3 font-semibold">Type:</div>
                  <div className="col-12 col-md-9">
                    <p>
                      {publication.publication_types[0] === "paper-conference"
                        ? "Paper Conference"
                        : "Journal Article"}
                    </p>
                    {/* <p>{publication.publication_types}</p> */}
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12 col-md-3 font-semibold">
                    Publication:
                  </div>
                  <div className="col-12 col-md-9">
                    <ReactMarkdown className="dark:text-gray-300 leading-relaxed">
                      {publication.publication}
                    </ReactMarkdown>
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
