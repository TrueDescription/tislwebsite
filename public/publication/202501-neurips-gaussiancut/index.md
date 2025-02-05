---
title: "GaussianCut: Interactive segmentation via graph cut for 3D Gaussian Splatting"
authors:
- Umangi Jain
- Ashkan Mirzaei
- Igor Gilitschenski

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

abstract: "We introduce GaussianCut, a new method for interactive multiview segmentation of scenes represented as 3D Gaussians. Our approach allows for selecting the objects to be segmented by interacting with a single view. It accepts intuitive user input, such as point clicks, coarse scribbles, or text. Using 3D Gaussian Splatting (3DGS) as the underlying scene representation simplifies the extraction of objects of interest which are considered to be a subset of the scene's Gaussians. Our key idea is to represent the scene as a graph and use the graph-cut algorithm to minimize an energy function to effectively partition the Gaussians into foreground and background. To achieve this, we construct a graph based on scene Gaussians and devise a segmentation-aligned energy function on the graph to combine user inputs with scene properties. To obtain an initial coarse segmentation, we leverage 2D image/video segmentation models and further refine these coarse estimates using our graph construction. Our empirical evaluations show the adaptability of GaussianCut across a diverse set of scenes. GaussianCut achieves competitive performance with state-of-the-art approaches for 3D segmentation without requiring any additional segmentation-aware training."


featured: true

# links:
# - name: ""
url_preprint: ""
url_code: 'https://github.com/umangi-jain/gaussiancut'
url_dataset: ''
url_poster: ''
url_project: 'https://umangi-jain.github.io/gaussiancut/'
url_slides: ''
url_source: ''
url_video: ''
url_pdf: "publication/202501-neurips-gaussiancut/neurips24-gaussiancut.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
