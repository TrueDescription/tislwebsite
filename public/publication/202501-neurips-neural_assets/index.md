---
title: "Neural Assets: 3D-Aware Multi-Object Scene Synthesis with Image Diffusion Models"
authors:
- Ziyi Wu
- Yulia Rubanova
- Rishabh Kabra
- Drew A. Hudson
- Igor Gilitschenski
- Yusuf Aytar
- Sjoerd van Steenkiste
- Kelsey Allen
- Thomas Kipf

date: "2025-01-08"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-01-08T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*Advances in Neural Information Processing Systems (NeurIPS)*"
publication_short: "*NeurIPS*"

abstract: " We address the problem of multi-object 3D pose control in image diffusion models. Instead of conditioning on a sequence of text tokens, we propose to use a set of per-object representations, “Neural Assets”, to control the 3D pose of individual objects in a scene. Neural Assets are obtained by pooling visual representations of objects from a reference image, such as a frame in a video, and are trained to reconstruct the respective objects in a different image, e.g., a later frame in the video. Importantly, we encode object visuals from the reference image while conditioning on object poses from the target frame, which enables learning disentangled appearance and position features. Combining visual and 3D pose representations in a sequence-of-tokens format allows us to keep the text-to-image interface of existing models, with Neural Assets in place of text tokens. By fine-tuning a pre-trained text-to-image diffusion model with this information, our approach enables fine-grained 3D pose and placement control of individual objects in a scene. We further demonstrate that Neural Assets can be transferred and recomposed across different scenes. Our model achieves state-of-the-art multi-object editing results on both synthetic 3D scene datasets, as well as two real-world video datasets (Objectron, Waymo Open)."


featured: true

# links:
# - name: ""
url_preprint: ""
url_code: ''
url_dataset: ''
url_poster: ''
url_project: 'https://neural-assets.github.io/'
url_slides: ''
url_source: ''
url_video: ''
url_pdf: "publication/202501-neurips-neural_assets/neurips24-neural_assets.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
