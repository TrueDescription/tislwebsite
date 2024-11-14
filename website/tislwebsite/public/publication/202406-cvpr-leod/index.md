---
title: "LEOD: Label-Efficient Object Detection for Event Cameras"
authors:
- Ziyi Wu
- Mathias Gehrig
- Qing Lyu
- Xudong Liu
- Igor Gilitschenski

date: "2024-06-24"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-06-24T00:00:00Z"

doi: ""

# Publication type.
# paper-conference, article-journal
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*Conference on Computer Vision and Pattern Recognition (CVPR)*"
publication_short: "*CVPR*"

abstract: "Object detection with event cameras benefits from the sensor’s low latency and high dynamic range. However, 
it is costly to fully label event streams for supervised training due to their high temporal resolution. To reduce this
cost, we present LEOD, the first method for label-efficient event-based detection. Our approach unifies weakly- and
semi-supervised object detection with a self-training mechanism. We first utilize a detector pre-trained on limited 
labels to produce pseudo ground truth on unlabeled events. Then, the detector is re-trained with both real and generated
labels. Leveraging the temporal consistency of events, we run bi-directional inference and apply tracking-based post-
processing to enhance the quality of pseudo labels. To stabilize training against label noise, we further design a soft
anchor assignment strategy. We introduce new experimental protocols to evaluate the task of label-efficient event-based
detection on Gen1 and 1Mpx datasets. LEOD consistently outperforms supervised baselines across various labeling
ratios. For example, on Gen1, it improves mAP by 8.6% and 7.8% for RVT-S trained with 1% and 2% labels. On 1Mpx,
RVT-S with 10% labels even surpasses its fully-supervised counterpart using 100% labels. LEOD maintains its 
effectiveness even when all labeled data are available, reaching new state-of-the-art results. 
Finally, we show that our method readily scales to improve larger detectors as well."


featured: true

# links:
# - name: ""
url_preprint: ""
url_code: 'https://github.com/Wuziyi616/LEOD'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
url_pdf: "publication/202406-cvpr-leod/cvpr2024-leod.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
