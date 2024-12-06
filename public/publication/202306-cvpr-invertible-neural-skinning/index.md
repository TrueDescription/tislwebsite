---
title: "Invertible Neural Skinning"
authors:
- Yash Kant
- Aliaksandr Siarohin
- Riza Alp Guler
- Menglei Chai
- Jian Ren
- Sergey Tulyakov
- Igor Gilitschenski

date: "2023-06-18"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-03-06T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*Conference on Computer Vision and Pattern Recognition (CVPR)*"
publication_short: "*CVPR*"

abstract: "Building animatable and editable models of clothed humans from raw 3D scans and poses is a challenging problem. Existing reposing methods suffer from the limited expressiveness of Linear Blend Skinning (LBS), require costly mesh extraction to generate each new pose, and typically do not preserve surface correspondences across different poses. In this work, we introduce Invertible Neural Skinning (INS) to address these shortcomings. To maintain correspondences, we propose a Pose-conditioned Invertible Network (PIN) architecture, which extends the LBS process by learning additional pose-varying deformations. Next, we combine PIN with a differentiable LBS module to build an expressive and end-to-end Invertible Neural Skinning (INS) pipeline. We demonstrate the strong performance of our method by outperforming the state-of-the-art reposing techniques on clothed humans and preserving surface correspondences, while being an order of magnitude faster. We also perform an ablation study, which shows the usefulness of our pose-conditioning formulation, and our qualitative results display that INS can rectify artefacts introduced by LBS well."


featured: true

# links:
# - name: ""
url_preprint: "https://arxiv.org/abs/2302.09227"
url_code: ''
url_dataset: ''
url_poster: ''
url_project: 'https://yashkant.github.io/invertible-neural-skinning/'
url_slides: ''
url_source: ''
url_video: ''
url_pdf: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
