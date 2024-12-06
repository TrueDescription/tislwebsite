---
title: "Reference-guided Controllable Inpainting of Neural Radiance Fields"
authors:
- Ashkan Mirzaei
- Tristan Aumentado-Armstrong
- Marcus A. Brubaker
- Jonathan Kelly
- Alex Levinshtein
- Konstantinos G. Derpanis
- Igor Gilitschenski

date: "2023-10-02"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-03-06T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*International Conference on Computer Vision (ICCV)*"
publication_short: "*ICCV*"

abstract: "The popularity of Neural Radiance Fields (NeRFs) for view synthesis has led to a desire for NeRF editing tools. Here, we focus on inpainting regions in a view-consistent and controllable manner. In addition to the typical NeRF inputs and masks delineating the unwanted region in each view, we require only a single inpainted view of the scene, i.e., a reference view. We use monocular depth estima- tors to back-project the inpainted view to the correct 3D positions. Then, via a novel rendering technique, a bilat- eral solver can construct view-dependent effects in non- reference views, making the inpainted region appear consis- tent from any view. For non-reference disoccluded regions, which cannot be supervised by the single reference view, we devise a method based on image inpainters to guide both the geometry and appearance. Our approach shows superior performance to NeRF inpainting baselines, with the addi- tional advantage that a user can control the output via a single inpainted image."


featured: true

# links:
# - name: ""
# url_preprint: "https://arxiv.org/abs/2207.01583"
# url_code: 'https://spinnerf3d.github.io/'
# url_dataset: 'https://drive.google.com/drive/folders/1N7D4-6IutYD40v9lfXGSVbWrd47UdJEC?usp=share_link'
url_poster: ''
url_project: 'https://ashmrz.github.io/reference-guided-3d/'
url_slides: ''
url_source: ''
url_video: 'https://youtu.be/y7Tv3iN6OgY'
url_pdf: "publication/202310-iccv-referenceguidedinpainting/iccv23-referenceguidedinpainting.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
