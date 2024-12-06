---
title: "SPAD: Spatially Aware Multi-View Diffusers"
authors:
- Yash Kant
- Aliaksandr Siarohin
- Ziyi Wu
- Michael Vasilkovsky
- Guocheng Qian
- Jian Ren
- Riza Alp Guler
- Bernard Ghanem
- Sergey Tulyakov
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

abstract: "We present SPAD, a novel approach for creating consistent multi-view images from text prompts or single images. To enable multi-view generation, we repurpose a pretrained 2D diffusion model by extending its self-attention layers with cross-view interactions, and fine-tune it on a high quality subset of Objaverse. We find that a naive extension of the self-attention proposed in prior work (e.g. MVDream) leads to content copying between views. Therefore, we explicitly constrain the cross-view attention based on epipolar geometry. To further enhance 3D consistency, we utilize Plucker coordinates derived from camera rays and inject them as positional encoding. This enables SPAD to reason over spatial proximity in 3D well. In contrast to recent works that can only generate views at fixed azimuth and elevation, SPAD offers full camera control and achieves state-of-the-art results in novel view synthesis on unseen objects from the Objaverse and Google Scanned Objects datasets. Finally, we demonstrate that text-to-3D generation using SPAD prevents the multi-face Janus issue."


featured: true

# links:
# - name: ""
url_preprint: ""
url_code: 'https://github.com/yashkant/spad'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
url_pdf: "publication/202406-cvpr-spad/cvpr2024-spad.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
