import HomeNavbar from "@/components/home/HomeNavbar";
import React from "react";

export default function Opportunities() {
  return (
    <div>
      <HomeNavbar />
      <div className="page-body">
        <span className="js-widget-page hidden"></span>

        <section
          id="opportunities_overview"
          className="home-section wg-markdown"
        >
          <div className="container mx-auto my-12 px-4">
            <div className="row justify-center">
              <div className="section-heading col-12 mb-6 text-center">
                <h1 className="text-3xl font-bold">Opportunities</h1>
              </div>

              <div className="col-12 text-lg leading-relaxed">
                <p>
                  We are looking for people at all levels to get involved with
                  our lab’s research. Please{" "}
                  <strong>read this page first before contacting the PI</strong>{" "}
                  directly.
                </p>

                <h2
                  id="undergraduate-students"
                  className="text-2xl font-semibold mt-8 mb-4"
                >
                  Undergraduate Students
                </h2>
                <p>
                  We are actively looking for undergraduates with experience in
                  machine learning, software engineering (ideally in C++ and
                  Python), and Robotics (ideally hands-on experience with
                  ROS/ROS2). There are many different opportunities to work with
                  our lab such as via a summer research internship, Eng Sci.
                  theses, or as part of the CSC 494/495 course.
                </p>
                <p>
                  To apply, please send an email with CV and grade transcripts
                  to:{" "}
                  <a
                    href="mailto:tisl-apply@cs.toronto.edu"
                    className="text-blue-600 hover:underline"
                  >
                    tisl-apply@cs.toronto.edu
                  </a>
                  . This message will go to everyone who may have potential
                  projects. One of us will respond if your background is a
                  potential match for an anticipated opening. No response can
                  have multiple reasons and usually does not mean that your
                  application is not “good enough”. In most cases we simply
                  might currently not have a project that is a good match. You
                  are still very welcome to apply again in one of the next
                  terms.
                </p>

                <h2
                  id="graduate-students"
                  className="text-2xl font-semibold mt-8 mb-4"
                >
                  Graduate Students
                </h2>
                <p>
                  If you are interested in becoming a graduate student at our
                  lab, please{" "}
                  <a
                    href="https://web.cs.toronto.edu/graduate/prospective"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    apply
                  </a>{" "}
                  to the University of Toronto Computer Science graduate program
                  and indicate Prof. Gilitschenski as a potential supervisor.
                  While there is nothing wrong with also reaching out via email,
                  we do not recommend contacting the PI directly. We simply get
                  too many such emails and it usually adds no extra benefit.
                  Below is a FAQ containing some of the questions we typically
                  receive.
                </p>

                <h2
                  id="postdoctoral-researchers"
                  className="text-2xl font-semibold mt-8 mb-4"
                >
                  Postdoctoral Researchers
                </h2>
                <p>
                  We are actively looking for PostDocs with a strong background
                  in the areas of robotic perception, reinforcement learning,
                  probabilistic and geometric machine learning. You may be asked
                  to apply for a fellowship (and supported in that application).
                  Thus, a good time for reaching out is typically around 9
                  months before you want to start.
                </p>

                <h2 id="visitors" className="text-2xl font-semibold mt-8 mb-4">
                  Visitors
                </h2>
                <p>
                  Visitors are welcome at all levels. Priority is given to
                  self-funded visitors but we try to be helpful in obtaining
                  funding. For undergraduates, funding can be obtained e.g. via
                  the{" "}
                  <a
                    href="https://www.mitacs.ca/en/programs/globalink"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mitacs Globalink Program
                  </a>{" "}
                  (only for certain countries).
                </p>
                <p>
                  We also accept remote interns from time to time but these
                  spots are very limited and highly dependent on our current
                  bandwidth and research needs. If you are interested in
                  becoming a remote intern, please send an email with CV and
                  grade transcripts to:{" "}
                  <a
                    href="mailto:tisl-apply@cs.toronto.edu"
                    className="text-blue-600 hover:underline"
                  >
                    tisl-apply@cs.toronto.edu
                  </a>
                  .
                </p>

                <h2 id="faq" className="text-2xl font-semibold mt-8 mb-4">
                  FAQ
                </h2>

                <h3
                  id="before-applying-for-graduate-school"
                  className="text-xl font-semibold mb-4"
                >
                  Before Applying for Graduate School
                </h3>
                <p>
                  <strong>Will you hire graduate students this year?</strong>
                </p>
                <p>Yes.</p>
                <p>
                  <strong>
                    Can we have a chat before I submit my application?
                  </strong>
                </p>
                <p>
                  Unfortunately, no. I love getting to know students and hearing
                  what you are interested in but there are simply too many such
                  requests.
                </p>

                <h3
                  id="after-submitting-your-graduate-school-application"
                  className="text-xl font-semibold mb-4"
                >
                  After Submitting Your Graduate School Application
                </h3>
                <p>
                  <strong>Will you take a look at my application?</strong>
                </p>
                <p>
                  I try to look at all applications that may be relevant. The
                  best way to be sure is by mentioning me as a potential
                  supervisor.
                </p>
                <p>
                  <strong>
                    I have submitted my application, will you interview me?
                  </strong>
                </p>
                <p>
                  Maybe. However, I won’t be able to comment on this during the
                  application process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
