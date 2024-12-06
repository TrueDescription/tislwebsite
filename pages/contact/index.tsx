import HomeNavbar from "@/components/home/HomeNavbar";
import React from "react";

export default function Contact() {
  return (
    <div>
      <HomeNavbar />
      <div className="page-body">
        <span className="js-widget-page hidden"></span>

        <section id="contact" className="home-section wg-markdown">
          <div className="container mx-auto my-12 px-4">
            <div className="row justify-center">
              <div className="section-heading col-12 mb-6 text-center">
                <h1 className="text-3xl font-bold">Contact</h1>
              </div>

              <div className="col-12 text-lg leading-relaxed">
                <p>
                  <strong>Online</strong>
                  <br />
                  <i className="fas fa-envelope mr-2"></i>
                  <a
                    href="mailto:gilitschenski@cs.toronto.edu"
                    className="text-blue-600 hover:underline"
                  >
                    gilitschenski@cs.toronto.edu
                  </a>{" "}
                  / <i className="fab fa-twitter-square mr-2"></i>
                  <a
                    href="https://twitter.com/igilitschenski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    igilitschenski
                  </a>
                </p>

                <p className="mt-6">
                  <strong>Mississauga Campus</strong> (use this for mail)
                  <br />
                  University of Toronto
                  <br />
                  Department of Mathematical &amp; Computational Sciences
                  <br />
                  3359 Mississauga Road
                  <br />
                  Deerfield Hall, Office 3070
                  <br />
                  Mississauga, ON, L5L 1C6
                </p>

                <p className="mt-6">
                  <strong>St. George Campus</strong>
                  <br />
                  University of Toronto
                  <br />
                  Department of Computer Science
                  <br />
                  6 King’s College Road
                  <br />
                  D.L. Pratt Building, Office 283E
                  <br />
                  Toronto, ON, M5S 3H5
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
