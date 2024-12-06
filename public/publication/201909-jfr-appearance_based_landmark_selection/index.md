---

authors:
- Mathias Bürki
- Cesar Cadena
- Igor Gilitschenski
- Roland Siegwart
- Juan Nieto

date : "2019-09-01T00:00:00Z"

abstract :  Visual localization in outdoor environments is subject to varying appearance conditions rendering it difficult to match current camera images against a previously recorded map. Although it is possible to extend the respective maps to allow precise localization across a wide range of differing appearance conditions, these maps quickly grow in size and become impractical to handle on a mobile robotic platform. To address this problem, we present a landmark selection algorithm that exploits appearance coobservability for efficient visual localization in outdoor environments. Based on the appearance condition inferred from recently observed landmarks, a small fraction of landmarks useful under the current appearance condition is selected and used for localization. This allows to greatly reduce the bandwidth consumption between the mobile platform and a map backend in a shared-map scenario, and significantly lowers the demands on the computational resources on said mobile platform. We derive a landmark ranking function that exhibits high performance under vastly changing appearance conditions and is agnostic to the distribution of landmarks across the different map sessions. Furthermore, we relate and compare our proposed appearancebased landmark ranking function to popular ranking schemes from Information Retrieval, and validate our results on the challenging NCLT datasets, including an evaluation of the localization accuracy using ground-truth poses. In addition to that, we investigate the computational and bandwidth resource demands. Our results show that by selecting 20%−30% of landmarks using our proposed approach, a similar localization performance as the baseline strategy using all landmarks is achieved.

publication_types : ["article-journal"]
publication_short : "*JFR*"
publication : "*Journal of Field Robotics*"
title : "Appearance-Based Landmark Selection for Visual Localization"

url_pdf: "publication/201909-jfr-appearance_based_landmark_selection/jfr20-appearance_based_landmark_selection.pdf"

featured: false
---
