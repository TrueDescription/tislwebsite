import HomeNavbar from '@/components/home/HomeNavbar';
import React from 'react';

export default function Contact() {
  return (
    <div>
        <HomeNavbar/>
        <div className="page-body">
        <span className="js-widget-page d-none"></span>

        <section id="contact" className="home-section wg-markdown">
            <div className="home-section-bg"></div>
            <div className="container">
            <div className="row justify-content-center">
                <div className="section-heading col-12 mb-3 text-center">
                <h1 className="mb-0">Contact</h1>
                </div>

                <div className="col-12">
                <p>
                    <strong>Online</strong>
                    <br />
                    <i className="fas fa-envelope"></i>{' '}
                    <a href="mailto:gilitschenski@cs.toronto.edu" style={{ color: 'blue', textDecoration: 'underline' }}>
                    gilitschenski@cs.toronto.edu
                    </a>{' '}
                    / <i className="fab fa-twitter-square"></i>{' '}
                    <a href="https://twitter.com/igilitschenski" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                    igilitschenski
                    </a>
                    <br />
                </p>

                <p>
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
                    <br />
                </p>

                <p>
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
