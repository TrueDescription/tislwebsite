---

authors:
- Brandon Araki
- Igor Gilitschenski
- Tatum Ogata
- Alex Wallar
- Wilko Schwarting
- Zareen Choudhury
- Sertac Karaman
- Daniela Rus
date : "2019-10-27T00:00:00Z"
publication_types : ['paper-conference']
publication : "*International Conference on Intelligent Transportation Systems (ITSC)*"
publication_short : "*ITSC*"
title : "Range-based Cooperative Localization with Nonlinear Observability Analysis"

abstract :  Accurate localization of other cars in scenarios such as intersection navigation, intention-aware planning, and guardian systems is a critical component of safety. Multi-robot cooperative localization (CL) provides a method to estimate the joint state of a network of cars by exchanging information between communicating agents. However, there are many challenges to implementing CL algorithms on physical systems, including network delays, unmodeled dynamics, and non-constant velocities. In this work, we present a novel experimental framework for range-based cooperative localization that enables the testing of CL algorithms in realistic conditions, and we perform experiments using up to five cars. For state estimation, we develop and compare a particle filter, an Unscented Kalman Filter, and an Extended Kalman Filter that are compatible with nonlinear dynamics and the asynchronous reception of messages. We also model the relative transform between two unicycle models and perform a nonlinear observability analysis on the system, giving us insight into the measurements required to estimate the system’s state. Our approach enables relative localization of multiple vehicles in the absence of any global reference frame or joint map, and we demonstrate the effectiveness of our system in real-world experiments. Our results show that the UKF is likely the best candidate to use for the CL task.

url_pdf: "publication/201910-itsc-cooperative_localization/itsc19-cooperative_localization.pdf"

featured: false
---