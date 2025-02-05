import HomeNavbar from "@/components/home/HomeNavbar";
import { AuthorProfile } from "@/components/people/peopleType";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/link";
import Publication from "@/components/publications/publicationType";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";

interface PeoplePageProps {
  authors: AuthorProfile[];
  publications: Publication[];
}

export default function PeoplesPage({
  authors,
  publications,
}: PeoplePageProps) {
  const router = useRouter();
  const { slug } = router.query;

  if (
    !slug ||
    authors == null ||
    typeof slug !== "string" ||
    publications == null
  ) {
    return (
      <div>
        <HomeNavbar />
      </div>
    );
  }
  // const name = slug.replace(/-/g, " ").toLowerCase().trim();
  const name = decodeURIComponent(slug).toLowerCase();

  let author = authors.find((author) => {
    // return author.author.toLowerCase().replace(/-/g, " ").trim() === name;
    return author.author.toLowerCase() === name;
  });
  if (author == null) {
    author = {
      // author: slug.replace(/-/g, " ").trim(),
      author: decodeURIComponent(slug),
      role: "",
      organizationName: "University of Toronto",
      organizationUrl: "https://www.utoronto.ca/",
      bio: "string",
      interests: [],
      education: "",
      profileBio: "",
      socialLinks: [],
      personalWebsite: "",
    };
  }
  const [imgSrc, setImgSrc] = useState(
    `/authors/${author.author.replace(/\s+/g, "-").toLowerCase()}.jpg`
  );
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const filteredPublications = publications
    .filter((p) => p.authors.includes(author.author))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

  // var publicationsToShow = filteredPublications.slice(0, 5);

  const [publicationsToShow, setPublicationsToShow] = useState(
    filteredPublications.slice(0, 5)
  );

  return (
    <div>
      <HomeNavbar />
      <section id="profile-page" className="pt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:space-x-12">
            <div className="lg:w-1/3 flex flex-col items-center">
              <div
                id="profile"
                className="text-center flex flex-col items-center"
              >
                <Image
                  alt="Card background"
                  className="rounded-full shadow-lg mb-6 object-cover"
                  src={imgSrc}
                  onError={() => setImgSrc("/authors/default.png")}
                  width={270}
                  height={270}
                />

                <div className="portrait-title text-center">
                  <h2 className="text-2xl font-bold">{author.author}</h2>
                  <h3 className="text-xl text-gray-700">{author.role}</h3>
                  <h3 className="text-lg text-blue-600 hover:underline">
                    <a
                      href={author.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {author.organizationName}
                    </a>
                  </h3>
                </div>

                {author.socialLinks && (
                  <div className="flex justify-center gap-4 mt-4">
                    {author.socialLinks.map((link, index) => (
                      <Link
                        key={index}
                        className="text-xl"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.includes("twitter") && (
                          <i className="fab fa-twitter"></i>
                        )}
                        {link.includes("github") && (
                          <i className="fab fa-github"></i>
                        )}
                        {link.includes("scholar") && (
                          <i className="ai ai-google-scholar"></i>
                        )}
                        {link.includes("mailto") && (
                          <i className="fas fa-envelope"></i>
                        )}
                        {!link.includes("twitter") &&
                          !link.includes("github") &&
                          !link.includes("scholar") &&
                          !link.includes("mailto") && (
                            <i className="fas fa-link"></i>
                          )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-2/3 mt-8 lg:mt-0">
              <div className="article-style text-justify text-lg leading-relaxed">
                <p>{author.profileBio}</p>
              </div>
              <div className="article-widget content-widget-hr mt-12">
                <div className="flex items-center justify-between space-x-4 p-4">
                  <h3 className="text-2xl font-semibold text-primary">
                    Latest Publications
                  </h3>
                  {filteredPublications.length > 5 ? (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setExpanded((prev) => !prev);
                        setIsOpen((prev) => !prev);
                        if (!expanded) {
                          setPublicationsToShow(filteredPublications);
                        } else {
                          setPublicationsToShow(
                            filteredPublications.slice(0, 5)
                          );
                        }
                      }}
                    >
                      <p>Show More</p>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span className="sr-only">Toggle publications</span>
                    </Button>
                  ) : (
                    <></>
                  )}
                </div>
                <ul className="space-y-2 list-disc pl-5">
                  {publicationsToShow.map((pub) => (
                    <li key={pub.id} className="text-sm">
                      <a
                        href={`/publications/${encodeURIComponent(pub.title)}`}
                        className="text-lg text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                      >
                        {pub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
