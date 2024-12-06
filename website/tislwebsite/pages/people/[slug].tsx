import HomeNavbar from "@/components/home/HomeNavbar";
import { AuthorProfile } from "@/components/people/peopleType";
import { getAllAuthors, getLatestPublicationsByAuthor } from "@/lib/db";
import { GetStaticPaths, GetStaticProps } from "next";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/link";
import Publication from "@/components/publications/publicationType";

// interface PeoplePageProps {
//   author: AuthorProfile;
//   latestPublications: { id: number; title: string }[];
// }

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

  if (!slug || authors == null || typeof slug !== "string") {
    return (
      <div>
        <HomeNavbar />
      </div>
    );
  }
  console.log(slug);
  const name = slug.replace(/-/g, " ");
  console.log(name);
  const author = authors.find((author) => {
    return author.author == name;
  });
  if (author == null) {
    return (
      <div>
        <HomeNavbar />
        <p>This person does not have a page</p>
      </div>
    );
  }

  return (
    <div>
      <HomeNavbar />
      <section id="profile-page" className="pt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:space-x-12">
            <div className="lg:w-1/3 flex flex-col items-center">
              <div id="profile" className="text-center">
                <Image
                  alt="Card background"
                  className="rounded-full shadow-lg mb-6 object-cover"
                  src={`/authors/${author.author.replace(/\s+/g, "-").toLowerCase()}.jpg`}
                  width={270}
                  height={270}
                />

                <div className="portrait-title">
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

                {author.socialLinks &&
                  author.socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="mr-2"
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
            </div>

            <div className="lg:w-2/3 mt-8 lg:mt-0">
              <div className="article-style text-justify text-lg leading-relaxed">
                <p>{author.profileBio}</p>
              </div>

              <div className="article-widget content-widget-hr mt-12">
                <h3 className="text-2xl font-semibold mb-4">
                  Latest Publications
                </h3>
                <ul className="list-disc list-inside text-lg space-y-3">
                  {/* {latestPublications.map((pub) => (
                    <li key={pub.id}>
                      <a
                        href={`/publication/${pub.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {pub.title}
                      </a>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
