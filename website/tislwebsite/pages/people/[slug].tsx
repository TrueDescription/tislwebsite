import HomeNavbar from "@/components/home/HomeNavbar";
import { useRouter } from "next/router";

export default function PeoplesPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div className="text-center py-12">Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <HomeNavbar />
      <section id="profile-page" className="pt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:space-x-12">
            {/* Profile Image and Info */}
            <div className="lg:w-1/3 flex flex-col items-center">
              <div id="profile" className="text-center">
                <img
                  className="rounded-full shadow-lg mb-6"
                  width="270"
                  height="270"
                  src="https://www.utm.utoronto.ca/math-cs-stats/sites/files/math-cs-stats/styles/square_l/public/faculty-staff-profile/photos/photo-igor_gilitschenski-square%20%283%29.jpg.webp?itok=3xMy0SZg"
                  alt="Igor Gilitschenski"
                />

                <div className="portrait-title">
                  <h2 className="text-2xl font-bold">Igor Gilitschenski</h2>
                  <h3 className="text-xl text-gray-700">Assistant Professor</h3>
                  <h3 className="text-lg text-blue-600 hover:underline">
                    <a
                      href="https://www.utoronto.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      University of Toronto
                    </a>
                  </h3>
                </div>

                <ul className="flex justify-center space-x-6 mt-4">
                  <li>
                    <a
                      href="mailto:igor@gilitschenski.org"
                      aria-label="envelope"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <i className="fas fa-envelope fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/igilitschenski"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="twitter"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <i className="fab fa-twitter fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://scholar.google.com/citations?user=Nuw1Y4oAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="google-scholar"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <i className="ai ai-google-scholar fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/igilitschenski"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="github"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <i className="fab fa-github fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Biography Section */}
            <div className="lg:w-2/3 mt-8 lg:mt-0">
              <div className="article-style text-justify text-lg leading-relaxed">
                <p>
                  I am an Assistant Professor in Computer Science at the
                  University of Toronto. Prior to coming to Toronto, I was a
                  visiting Research Scientist at TRI. I was also a Research
                  Scientist at MIT as part of the Computer Science and
                  Artificial Intelligence Lab working with Sertac Karaman and
                  Daniela Rus.
                </p>
                <p>
                  I joined MIT from the Autonomous Systems Lab of ETH Zurich
                  where I worked with Roland Siegwart on robotic perception and
                  navigation. I obtained my PhD degree in computer science
                  working on nonlinear estimation at the Intelligent
                  Sensor-Actuator-Systems Lab of the Karlsruhe Institute of
                  Technology. It was supervised by Uwe Hanebeck and Simon Julier
                  (co-supervisor).
                </p>
                <p>
                  Early on, I was fascinated by the laws that govern uncertainty
                  and their applications, which was my focus while studying
                  Mathematics (Major) and Computer Science (Minor) at the
                  University of Stuttgart. My work aims at enabling robust
                  interactive autonomy for robotics by developing novel
                  perception and decision making methods for challenging dynamic
                  environments.
                </p>
              </div>

              {/* Publications Section */}
              <div className="article-widget content-widget-hr mt-12">
                <h3 className="text-2xl font-semibold mb-4">
                  Latest Publications
                </h3>
                <ul className="list-disc list-inside text-lg space-y-3">
                  <li>
                    <a
                      href="/publication/202407-rlc-primacy_bias/"
                      className="text-blue-600 hover:underline"
                    >
                      Dissecting Deep RL with High Update Ratios: Combatting
                      Value Divergence
                    </a>
                  </li>
                  <li>
                    <a
                      href="/publication/202407-rlc-aux_tasks_in_rl/"
                      className="text-blue-600 hover:underline"
                    >
                      When does Self-Prediction help? Understanding Auxiliary
                      Tasks in Reinforcement Learning
                    </a>
                  </li>
                  <li>
                    <a
                      href="/publication/201509-mfi-se2_filter/"
                      className="text-blue-600 hover:underline"
                    >
                      A Stochastic Filter for Planar Rigid-Body Motions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
