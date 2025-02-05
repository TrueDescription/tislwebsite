import { Card, CardBody, Link } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import { Code } from "@nextui-org/code";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import publicationType from "./publicationType";

export default function PublicationCard(pub: publicationType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const [textToCopy, setTextToCopy] = useState("This is the text to copy!");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pub.cite).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  const downloadFile = () => {
    const blob = new Blob([pub.cite], { type: "text/plain" });
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
      <Card className="max-w-[750px]">
        <CardBody>
          <p className="text-lg">
            {/* <i className="far fa-file-alt pub-icon mr-2" aria-hidden="true"></i> */}
            <span className="article-metadata li-cite-author">
              {Array.isArray(pub.authors) &&
                pub.authors.map((author, index) => (
                  <span key={index}>
                    <a
                      href={`/people/${encodeURIComponent(author)}/`}
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

            {pub.cite && (
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
                            <code>{pub.cite}</code>
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
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
