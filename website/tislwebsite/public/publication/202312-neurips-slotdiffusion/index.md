---
title: "SlotDiffusion: Object-Centric Generative Modeling with Diffusion Models"
authors:
- Ziyi Wu
- Jingyu Hu
- Wuyue Lu
- Igor Gilitschenski
- Animesh Garg

date: "2023-12-12"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-12-12T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*Advances in Neural Information Processing Systems (NeurIPS)*"
publication_short: "*NeurIPS*"

abstract: "Object-centric learning aims to represent visual data with a set of object entities (a.k.a. slots), providing structured representations that enable systematic generalization. Leveraging advanced architectures like Transformers, recent approaches have made significant progress in unsupervised object discovery. In addition, slot-based representations hold great potential for generative modeling, such as controllable image generation and object manipulation in image editing. However, current slot-based methods often produce blurry images and distorted objects, exhibiting poor generative modeling capabilities. In this paper, we focus on improving slot-to-image decoding, a crucial aspect for high-quality visual generation. We introduce SlotDiffusion -- an object-centric Latent Diffusion Model (LDM) designed for both image and video data. Thanks to the powerful modeling capacity of LDMs, SlotDiffusion surpasses previous slot models in unsupervised object segmentation and visual generation across six datasets. Furthermore, our learned object features can be utilized by existing object-centric dynamics models, improving video prediction quality and downstream temporal reasoning tasks. Finally, we demonstrate the scalability of SlotDiffusion to unconstrained real-world datasets such as PASCAL VOC and COCO, when integrated with self-supervised pre-trained image encoders."


featured: true

# links:
# - name: ""
url_preprint: "https://arxiv.org/abs/2305.11281"
url_code: 'https://github.com/Wuziyi616/SlotDiffusion'
url_dataset: ''
url_poster: ''
url_project: 'https://slotdiffusion.github.io/'
url_slides: ''
url_source: ''
url_video: ''
url_pdf: "publication/202312-neurips-slotdiffusion/neurips23-slotdiffusion.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
