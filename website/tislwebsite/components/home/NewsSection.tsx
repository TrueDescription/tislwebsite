import React from "react";

export default function NewsSection() {
  return (
    <div className="container mx-auto my-12 px-4">
      <style>
        {`
          a {
            color: blue;
            text-decoration: underline;
          }
          a:hover {
            color: darkblue;
          }
        `}
      </style>
      <div className="row justify-center">
        <div className="section-heading col-12 mb-8 text-center">
          <h1 className="text-3xl font-bold">News</h1>
        </div>

        <div className="col-12">
          <ul className="space-y-6">
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>May 14, 2024</strong>, Our papers on{" "}
              <a href="publication/202407-rlc-aux_tasks_in_rl">
                Auxillary Tasks
              </a>{" "}
              and{" "}
              <a href="publication/202407-rlc-primacy_bias">
                High Update Ratios
              </a>{" "}
              in Reinforcement Learning were accepted at RLC.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Feb 26, 2024</strong>, Our papers on{" "}
              <a href="publication/202406-cvpr-spad">Multiview Diffusers</a>,{" "}
              <a href="publication/202406-cvpr-lomutp">
                Map Uncertainty in Trajectory Prediction
              </a>
              , and{" "}
              <a href="publication/202406-cvpr-leod">
                Label-Efficient Object Detection for Event Cameras
              </a>{" "}
              were accepted at CVPR.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-user mr-2" aria-hidden="true"></i>
              <strong>Jan 01, 2024</strong>,{" "}
              <a href="author/evgenii-opryshko/">Evgenii Oprysho</a> joined our
              lab as graduate student.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Dec 8, 2023</strong>, The code for GeoMatch is now
              released{" "}
              <a href="https://github.com/google-deepmind/geomatch">here</a>.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Oct 24, 2023</strong>,{" "}
              <a href="publication/202401-wacv-avatarone/">AvatarOne</a>{" "}
              accepted at WACV.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Oct 1, 2023</strong>,{" "}
              <a href="publication/202312-siggraphasia-invs/">iNVS</a> accepted
              at SIGGRAPH Asia Conference Track.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Sep 22, 2023</strong>,{" "}
              <a href="https://slotdiffusion.github.io/">SlotDiffusion</a>{" "}
              accepted as a Spotlight at NeurIPS and{" "}
              <a href="https://huggingface.co/papers/2307.13924">trajdata</a>{" "}
              accepted in the datasets and benchmarks track.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-user mr-2" aria-hidden="true"></i>
              <strong>Sep 01, 2023</strong>,{" "}
              <a href="author/umangi-jain/">Umangi Jain</a> joined our lab as
              graduate student.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Aug 30, 2023</strong>, Our papers on{" "}
              <a href="publication/202311-corl-multi_team_racing/">
                Multi-team Racing
              </a>{" "}
              and{" "}
              <a href="publication/202311-corl-geomatch/">
                Geometry Matching for Multi-Embodiment Grasping
              </a>{" "}
              have been accepted at CoRL.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Jul 14, 2023</strong>, Our paper on{" "}
              <a href="publication/202310-iccv-referenceguidedinpainting/">
                Reference-guided controllable inpainting
              </a>{" "}
              has been accepted at ICCV.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-bullhorn mr-2" aria-hidden="true"></i>
              <strong>Jun 04, 2023</strong>, Talk at IV Symposium's{" "}
              <a href="https://interactive-driving.github.io/">
                Workshop on Socially Interactive Autonomous Mobility
              </a>
              .
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-trophy mr-2" aria-hidden="true"></i>
              <strong>Jun 01, 2023</strong>, Our workshop paper "Towards
              Zero-Shot Multi-Team Racing: Competitive Driving via Learning in
              Simulation" has won the Best Workshop Paper Award at the ICRA{" "}
              <a href="https://sites.google.com/cam.ac.uk/multirobotlearningworkshopicra/home">
                Workshop on Multi-Robot Learning
              </a>
              .
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Apr 23, 2023</strong>, An{" "}
              <a href="publication/202304-ijrr-grounded/">extended version</a>{" "}
              of our RSS'21 work{" "}
              <a href="publication/202107-rss-grounded/">GROUNDED</a> has been
              accepted at IJRR.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Apr 08, 2023</strong>,{" "}
              <a href="publication/202304-ral-neural_controller/">
                Multi-Abstractive Neural Controller
              </a>{" "}
              accepted at RA-L.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Feb 27, 2023</strong>,{" "}
              <a href="publication/202306-cvpr-spinnerf/">SPIn-NeRF</a>,{" "}
              <a href="publication/202306-cvpr_invertible_neural_skinning/">
                INS
              </a>
              , and <a href="publication/202306-cvpr-sparsepose/">SparsePose</a>{" "}
              accepted at CVPR.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Jan 20, 2023</strong>,{" "}
              <a href="publication/202305-iclr-continuous_control_via_q_learning/">
                Solving Continuous Control via Q Learning
              </a>{" "}
              accepted at ICLR.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-bullhorn mr-2" aria-hidden="true"></i>
              <strong>Jan 17, 2023</strong>, Talk at Technion Robotics Seminar.
            </li>
            <li className="text-lg leading-relaxed">
              <i
                className="fas fa-hand-holding-heart mr-2"
                aria-hidden="true"
              ></i>
              <strong>Jan 07, 2023</strong>, We are hosting the Woodlands
              Secondary School's FIRST Robotics Competition team "Absolute
              Robotics" for their season kick-off at UTM.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-school mr-2" aria-hidden="true"></i>
              <strong>Jan 02, 2023</strong>, We are offering courses on Robotic
              Perception and Causal Representation Learning in Winter 2023.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-user mr-2" aria-hidden="true"></i>
              <strong>Jan 01, 2023</strong>,{" "}
              <a href="author/claas-voelcker/">Claas Voelcker</a> joined our lab
              as graduate student.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-bullhorn mr-2" aria-hidden="true"></i>
              <strong>Oct 28, 2022</strong>, Talk at{" "}
              <a href="https://rpg.ifi.uzh.ch/">
                UZH Robotics & Perception Group
              </a>
              .
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-bullhorn mr-2" aria-hidden="true"></i>
              <strong>Sep 13, 2022</strong>, Talk at{" "}
              <a href="https://idsc.ethz.ch/research-frazzoli/autonomy-talks.html">
                ETH Autonomy Talks
              </a>{" "}
              (<a href="https://www.youtube.com/watch?v=sM394_DB6cU">Video</a>)
              on "Interactive Navigation for Robust Autonomy".
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-user mr-2" aria-hidden="true"></i>
              <strong>Sep 01, 2022</strong>,{" "}
              <a href="author/andrei-ivanovic/">Andrei Ivanovic</a>,{" "}
              <a href="author/samarth-sinha/">Samarth Sinha</a>, and{" "}
              <a href="author/ziyi-wu/">Ziyi Wu</a> joined our lab as graduate
              students.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Jul 08, 2022</strong>,{" "}
              <a href="publication/202210-eccv-laterf/">LaTeRF</a> and{" "}
              <a href="publication/202210-eccv-housekeep/">Housekeep</a>{" "}
              accepted at ECCV.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Jun 30, 2022</strong>,{" "}
              <a href="publication/202206-ral-maplite2/">Maplite 2.0</a>{" "}
              accepted at IROS and RA-L.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-bullhorn mr-2" aria-hidden="true"></i>
              <strong>Jun 5, 2022</strong>, Talk at{" "}
              <a href="https://kit-mrt.github.io/iv2022_workshop_bridging_the_gap/">
                IV2022 Workshop on Bridging the gap between map-based and
                map-less driving
              </a>
              .
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-trophy mr-2" aria-hidden="true"></i>
              <strong>May 26, 2022</strong>, Prof. Gilitschenski has been
              recognized as "Outstanding Associate Editor" for the Robotics and
              Automation Letters.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-bullhorn mr-2" aria-hidden="true"></i>
              <strong>Apr 6, 2022</strong>, Talk at{" "}
              <a href="https://nvr-avg.github.io/">NVIDIA AV Research Group</a>.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Mar 1, 2022</strong>,{" "}
              <a href="publication/202206-l4dc-nmer/">
                Neighborhood Mixup Experience Replay
              </a>{" "}
              accepted at L4DC.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-bullhorn mr-2" aria-hidden="true"></i>
              <strong>Feb 18, 2022</strong>, Talk at Samsung AI Research
              Toronto.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Jan 31, 2022</strong>, Five papers accepted at ICRA:{" "}
              <a href="publication/202205-icra-interactive_policies/">
                VISTA 2.0
              </a>
              ,{" "}
              <a href="publication/202205-interactive_policies/">
                Interactive Driving Policies
              </a>
              , <a href="publication/202205-icra-hyper/">HYPER</a>,{" "}
              <a href="publication/202205-icra-concept_graph/">
                Concept Graph Network
              </a>
              , and <a href="publication/202111-ral-agn/">AGN</a> (which has
              already been accepted to RA-L).
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
              <strong>Nov 22, 2021</strong>, Our paper on{" "}
              <a href="publication/202111-ral-agn/">
                Automaton Generative Networks
              </a>{" "}
              has been accepted at RA-L.
            </li>
            <li className="text-lg leading-relaxed">
              <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
              <strong>Sep 1, 2021</strong>, Start of our lab with the first
              cohort of graduate students:{" "}
              <a href="author/maria-attarian/">Maria Attarian</a>,{" "}
              <a href="author/yash-kant/">Yash Kant</a>, and{" "}
              <a href="author/ashkan-mirzaei/">Ashkan Mirzaei</a>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
