import HomeNavbar from "@/components/home/HomeNavbar";
import AuthorCard from "@/components/publications/authorCard";
import PublicationCard from "@/components/publications/publicationCard";
import Publication from "@/components/publications/publicationType";
import ShareButtons from "@/components/publications/shareButtons";
import { useRouter } from "next/router";

const publicationsData: Publication = {
  title:
    "When does Self-Prediction help? Understanding Auxiliary Tasks in Reinforcement Learning",
  authors: [
    "Claas Voelcker",
    "Tyler Kastner",
    "Igor Gilitschenski",
    "Amir-Massoud Farahmand",
  ],
  year: 2024,
  publicationType: "pubtype-paper-conference",
  links: {
    pdf: "/publication/202407-rlc-aux_tasks_in_rl/rlc2024-aux_tasks_in_rl.pdf",
    code: "https://github.com/adaptive-agents-lab/understading_auxilliary_tasks",
    cite: "/publication/202407-rlc-aux_tasks_in_rl/cite.bib",
  },
  slug: "temp-1",
};

export default function PublicationsPage() {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <HomeNavbar />
      <div className="page-body container mx-auto px-4 lg:px-8 py-8">
        <div className="pub">
          {/* <div className="flex justify-center">
                <PublicationCard {...publicationsData} />
            </div> */}
          <div className="article-container pt-6">
            <h1 className="text-3xl font-bold mb-4">
              When does Self-Prediction help? Understanding Auxiliary Tasks in
              Reinforcement Learning
            </h1>

            <div className="article-metadata text-gray-600 mb-4">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span>
                  <a
                    href="/author/claas-voelcker/"
                    className="text-blue-600 hover:underline"
                  >
                    Claas Voelcker
                  </a>
                </span>
                ,{" "}
                <span>
                  <a
                    href="/author/tyler-kastner/"
                    className="text-blue-600 hover:underline"
                  >
                    Tyler Kastner
                  </a>
                </span>
                ,{" "}
                <span>
                  <a
                    href="/author/igor-gilitschenski/"
                    className="text-blue-600 hover:underline"
                  >
                    Igor Gilitschenski
                  </a>
                </span>
                ,{" "}
                <span>
                  <a
                    href="/author/amir-massoud-farahmand/"
                    className="text-blue-600 hover:underline"
                  >
                    Amir-Massoud Farahmand
                  </a>
                </span>
              </div>

              <span className="article-date block text-gray-500">
                July, 2024
              </span>
            </div>

            <div className="btn-links mb-6 flex space-x-4">
              <a
                className="btn border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded transition-colors duration-200"
                href="/publication/202407-rlc-aux_tasks_in_rl/rlc2024-aux_tasks_in_rl.pdf"
                target="_blank"
                rel="noopener"
              >
                PDF
              </a>

              <a
                href="#"
                className="btn border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded transition-colors duration-200"
                onClick={() => alert("Cite modal would appear here")}
              >
                Cite
              </a>

              <a
                className="btn border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded transition-colors duration-200"
                href="https://github.com/adaptive-agents-lab/understading_auxilliary_tasks"
                target="_blank"
                rel="noopener"
              >
                Code
              </a>
            </div>
          </div>

          <div className="article-container my-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Abstract
            </h3>
            <p className="pub-abstract text-lg leading-relaxed text-justify mb-6">
              We investigate the impact of auxiliary learning tasks such as
              observation reconstruction and latent self-prediction on the
              representation learning problem in reinforcement learning. We also
              study how they interact with distractions and observation
              functions in the MDP. We provide a theoretical analysis of the
              learning dynamics of observation reconstruction, latent
              self-prediction, and TD learning in the presence of distractions
              and observation functions under linear model assumptions. With
              this formalization, we are able to explain why latent-self
              prediction is a helpful auxiliary task, while observation
              reconstruction can provide more useful features when used in
              isolation. Our empirical analysis shows that the insights obtained
              from our learning dynamics framework predict the behavior of these
              loss functions beyond the linear model assumption in non-linear
              neural networks. This reinforces the usefulness of the linear
              model framework not only for theoretical analysis, but also
              practical benefit for applied problems.
            </p>

            <div className="row my-6">
              <div className="col-md-1"></div>
              <div className="col-md-10 mx-auto">
                <div className="row mb-4">
                  <div className="col-12 col-md-3 font-semibold">Type</div>
                  <div className="col-12 col-md-9">
                    <a
                      href="/publication/#paper-conference"
                      className="text-blue-500 hover:underline"
                    >
                      Conference paper
                    </a>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12 col-md-3 font-semibold">
                    Publication
                  </div>
                  <div className="col-12 col-md-9">
                    Reinforcement Learning Conference <em>(RLC)</em>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <ShareButtons slug={slug} />
            </div>
          </div>

          <h4 className="text-xl font-semibold  my-8">
            Toronto Intelligent Systems Lab Co-authors
          </h4>

          <div className="author-section grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <AuthorCard
              name="Claas Voelcker"
              title="PhD Student"
              bio="My research focuses on task-aligned and value-aware model learning for reinforcement learning and control. My research focuses on agents learning world models which are correct where it matters."
              avatar="/author/claas-voelcker/avatar_hu5035332920155993092.jpg"
              links={{
                email: "mailto:cvoelcker@cs.toronto.edu",
                twitter: "https://twitter.com/c_voelcker",
                scholar:
                  "https://www.semanticscholar.org/author/C.-Voelcker/1387979639",
                github: "https://github.com/cvoelcker",
              }}
            />

            <AuthorCard
              name="Igor Gilitschenski"
              title="Assistant Professor"
              avatar="/author/igor-gilitschenski/avatar_hu15440415280092298125.jpg"
              links={{
                email: "mailto:igor@gilitschenski.org",
                twitter: "https://twitter.com/igilitschenski",
                scholar:
                  "https://scholar.google.com/citations?user=Nuw1Y4oAAAAJ&hl=en",
                github: "https://github.com/igilitschenski",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
