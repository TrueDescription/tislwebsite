---

authors:
- Renaud Dubé
- Mattia G. Gollub
- Hannes Sommer
- Igor Gilitschenski
- Roland Siegwart
- Cesar Cadena
- Juan Nieto
date : "2018-07-01T00:00:00Z"

abstract :  Localization in 3D point clouds is a highly challenging task due to the complexity associated with extracting information from 3D data. This paper proposes an incremental approach addressing this problem efficiently. The presented method first accumulates the measurements in a dynamic voxel grid and selectively updates the point normals affected by the insertion. An incremental segmentation algorithm, based on region growing, tracks the evolution of single segments which enables an efficient recognition strategy using partitioning and caching of geometric consistencies. We show that the incremental method can perform global localization at 10Hz in a urban driving environment, a speedup of x7.1 over the compared batch solution. The efficiency of the method makes it suitable for applications where real–time localization is required and enables its usage on cheaper, low–energy systems. Our implementation will be available open source after publication along with instructions for running the system.

publication_types : ["article-journal"]
publication_short : "*RA-L*"
publication : "*IEEE Robotics and Automation Letters*"
title : "Incremental Segment-Based Localization in 3D Point Clouds"

url_pdf: "publication/201807-ral-incremental_segmatch/ral18-incremental_segmatch.pdf"

featured: false
---