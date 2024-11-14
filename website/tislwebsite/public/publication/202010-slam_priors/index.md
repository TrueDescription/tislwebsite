---

authors:
- Chenxi Ye
- Yiduo Wang
- Ziwen Lu
- Igor Gilitschenski
- Martin Parsley
- Simon J. Julier

publishdate : "2020-08-01"
date : "2020-10-25T00:00:00Z"
publication_types : ['paper-conference']
publication : "*International Conference on Intelligent Robots and Systems (IROS)*"
publication_short : "*IROS*"
title : "Exploiting Semantic and Public Prior Information in MonoSLAM"

abstract: In this paper, we propose a method to use semantic information to improve the use of map priors in a sparse, feature-based MonoSLAM system. To incorporate the priors, the features in the prior and SLAM maps must be associated with one another. Most existing systems build a map using SLAM and then align it with the prior map. However, this approach assumes that the local map is accurate, and the majority of the features within it can be constrained by the prior. We use the intuition that many prior maps are created to provide semantic information. Therefore, valid associations only exist if the features in the SLAM map arise from the same kind of semantic object as the prior map. Using this intuition, we extend ORB-SLAM2 using an open source pre-trained semantic segmentation network (DeepLabV3+) to incorporate prior information from Open Street Map building footprint data. We show that the amount of drift, before loop closing, is significantly smaller than that for original ORB-SLAM2. Furthermore, we show that when ORB-SLAM2 is used as a prior-aided visual odometry system, the tracking accuracy is equal to or better than the full ORB-SLAM2 system without the need for global mapping or loop closure.

url_pdf: "publication/202010-slam_priors/iros20-slam_priors.pdf"
featured: false
---
