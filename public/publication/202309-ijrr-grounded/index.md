---
title: "GROUNDED: A Localizing Ground Penetrating Radar Evaluation Dataset for Learning to Localize in Inclement Weather"
authors:
- Teddy Ort
- Igor Gilitschenski
- Daniela Rus

date: "2023-09-01"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-04-23T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*International Journal of Robotics Research* (accepted)"
publication_short: "*IJRR* (accepted)"

abstract: "Mapping and localization using surface features is prone to failure due to environment changes such as inclement weather. Recently, Localizing Ground Penetrating Radar (LGPR) has been proposed as an alternative means of localizing using underground features that are stable over time and less affected by surface conditions. However, due to the lack of commercially available LGPR sensors, the wider research community has been largely unable to replicate this work or build new and innovative solutions. We present GROUNDED, an open dataset of LGPR scans collected in a variety of environments and weather conditions. By labeling these data with ground truth localization from an RTK-GPS / Inertial Navigation System, and carefully calibrating and time-synchronizing the radar scans with ground truth positions, camera imagery, and Lidar data, we enable researchers to build novel localization solutions that are resilient to changing surface conditions. We include 108 individual runs totalling 450 km of driving with LGPR, GPS, Odometry, Camera, and Lidar measurements. We also present two new evaluation benchmarks for 1) Localizing in Weather and 2) Multi-lane Localization, to enable comparisons of future work supported by the dataset. Additionally, we present a first application of the new dataset in the form of LGPRNet: an inception-based CNN architecture for learning localization that is resilient to changing weather conditions. The dataset can be accessed at http://lgprdata.com."

featured: false

# links:
# - name: ""
#   url: ""
url_pdf: publication/202304-ijrr-grounded/ijrr23-grounded.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---