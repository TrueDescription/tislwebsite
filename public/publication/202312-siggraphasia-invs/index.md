---
title: "iNVS: Repurposing Diffusion Inpainters for Novel View Synthesis"
authors:
- Yash Kant
- Aliaksandr Siarohin
- Michael Vasilkovsky
- Riza Alp Guler
- Jian Ren
- Sergey Tulyakov
- Igor Gilitschenski

date: "2023-12-12"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-12-12T00:00:00Z"

doi: "10.1145/3610548.3618149"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*SIGGRAPH Asia (Conference Papers)*"
publication_short: "*SIGGRAPH Asia Conf.*"

abstract: "We present a method for generating consistent novel views from a single source image. Our approach focuses on maximizing the reuse of visible pixels from the source image. To achieve this, we use a monocular depth estimator that transfers visible pixels from the source view to the target view. Starting from a pre-trained 2D inpainting diffusion model, we train our method on the large-scale Objaverse dataset to learn 3D object priors. While training we use a novel masking mechanism based on epipolar lines to further improve the quality of our approach. This allows our framework to perform zero-shot novel view synthesis on a variety of objects. We evaluate the zero-shot abilities of our framework on three challenging datasets: Google Scanned Objects, Ray Traced Multiview, and Common Objects in 3D. See our webpage for more details: https://yashkant.github.io/invs."


featured: true

# links:
# - name: ""
# url_preprint: "https://arxiv.org/abs/2207.01583"
# url_code: 'https://spinnerf3d.github.io/'
# url_dataset: 'https://drive.google.com/drive/folders/1N7D4-6IutYD40v9lfXGSVbWrd47UdJEC?usp=share_link'
url_poster: 'https://yashkant.github.io/invs/img/invs-poster.pdf'
url_project: 'https://yashkant.github.io/invs'
url_slides: 'https://yashkant.github.io/invs/img/invs-ppt.pdf'
url_source: ''
url_video: 'https://yashkant.github.io/invs/img/vids/supp_video.mp4'
url_pdf: "publication/202312-siggraphasia-invs/siggraphasia23-invs.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
