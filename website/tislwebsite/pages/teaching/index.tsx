import HomeNavbar from "@/components/home/HomeNavbar";
import React from "react";

export default function TeachingSection() {
  return (
    <div>
      <HomeNavbar />
      <div className="container mx-auto my-12 px-4">
        <div className="row justify-center">
          <div className="section-heading col-12 mb-6 text-center">
            <h1 className="text-3xl font-bold">Teaching</h1>
          </div>

          <div className="col-12">
            <h2 id="current-courses" className="text-2xl font-semibold mb-4">
              Current Courses
            </h2>
            <p className="text-lg mb-4">
              In Winter 2023, we are offering the following two courses:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
              <li>CSC478 Robotics Perception (UTM, Undergrad)</li>
              <li>
                CSC2545 Advanced Topics in ML: Causal Representation Learning
                (StG, Grad)
              </li>
            </ul>

            <h2 id="past-courses" className="text-2xl font-semibold mb-4">
              Past Courses
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
              <li>
                <a
                  href="https://uoft-isl.github.io/csc498-w22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  CSC498 Topics in CS: Robotic Perception
                </a>{" "}
                (Winter 2022)
              </li>
            </ul>

            <h2
              id="thesis-supervision-and-research-projects"
              className="text-2xl font-semibold mb-4"
            >
              Thesis Supervision and Research Projects
            </h2>
            <p className="text-lg leading-relaxed">
              Please see our{" "}
              <a
                href="/opportunities/"
                className="text-blue-600 hover:underline"
              >
                opportunities page
              </a>{" "}
              for information on how to get involved in our lab’s research as an
              undergraduate student.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
