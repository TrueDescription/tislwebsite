import React from "react";
import HomeNavbar from "@/components/home/HomeNavbar";
import NewsSection from "@/components/home/NewsSection";
import News from "@/components/home/newsType";
interface NewsSectionProps {
  news: News[];
}
export default function Home({ news }: NewsSectionProps) {
  return (
    <div>
      <HomeNavbar />
      <div className="infosection flex flex-col lg:flex-row justify-between items-center my-8 container mx-auto px-4">
        <div className="info-text lg:w-1/2 lg:pr-8 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to the Toronto Intelligent Systems Lab
          </h1>
          <p className="text-lg leading-relaxed">
            Our lab is a place for computer scientists and creative thinkers to
            come together and design the next generation of algorithms for
            robotic intelligence. The lab is located at the&nbsp;
            <a
              href="http://www.toronto.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              University of Toronto
            </a>
            &nbsp;and led by&nbsp;
            <a
              href="../people/Igor-Gilitschenski/"
              className="text-blue-600 hover:underline"
            >
              Igor Gilitschenski
            </a>
            .
          </p>
        </div>
        <div className="info-image lg:w-1/2 mt-6 lg:mt-0">
          <img
            src="/welcomehome.jpg"
            alt="Lab Overview"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Research Agenda</h1>
        </div>

        <div className="text-lg leading-relaxed">
          <p className="mb-6">
            Our goal is to enable Embodied AI and robot learning inspired by the
            human learning process. The current work focuses on foundation
            models for building efficient scene representations and simulation
            environments as well as robot learning in these environments. We are
            also interested in novel perception and sensing modalities. Overall,
            our research spans basic problems in machine learning, computer
            vision, and robotics. Current interests involve the following
            topics:
          </p>

          <ul className="list-disc list-inside">
            <li className="mb-3">
              <strong>Robotics:</strong> Large-scale Models for Robotic
              Perception and robust Policy Learning.
            </li>
            <li className="mb-3">
              <strong>Computer Vision:</strong> Efficient &amp; Editable Neural
              3D Reconstruction, Generative Scene Representations, Neuromorphic
              Vision.
            </li>
            <li className="mb-3">
              <strong>Machine Learning:</strong> Geometric Deep Learning, Causal
              Representation Learning, Reinforcement Learning, Imitation
              Learning.
            </li>
          </ul>
        </div>
      </div>

      <NewsSection news={news} />
    </div>
  );
}
