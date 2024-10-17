import HomeNavbar from "@/components/home/HomeNavbar";
import React from "react";

export default function TeachingSection() {
    return (
        <div>
            <HomeNavbar/>
            <div className="row justify-content-center">
                <div className="section-heading col-12 mb-3 text-center">
                    <h1 className="mb-0">Teaching</h1>
                </div>

                <div className="col-12">
                    <h2 id="current-courses">Current Courses</h2>
                    <p>In Winter 2023, we are offering the following two courses:</p>
                    <ul>
                    <li>CSC478 Robotics Perception (UTM, Undergrad)</li>
                    <li>CSC2545 Advanced Topics in ML: Causal Representation Learning (StG, Grad)</li>
                    </ul>
                    
                    <h2 id="past-courses">Past Courses</h2>
                    <ul>
                    <li>
                        <a href="https://uoft-isl.github.io/csc498-w22/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                        CSC498 Topics in CS: Robotic Perception
                        </a> (Winter 2022)
                    </li>
                    </ul>

                    <h2 id="thesis-supervision-and-research-projects">Thesis Supervision and Research Projects</h2>
                    <p>
                    Please see our <a href="/opportunities/" style={{ color: 'blue', textDecoration: 'underline' }}>opportunities page</a> for information on how to get involved in our lab’s research as an undergraduate student.
                    </p>
                </div>
            </div>
        </div>
    );
}