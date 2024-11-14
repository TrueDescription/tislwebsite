---
title: "SPIn-NeRF: Multiview Segmentation and Perceptual Inpainting with Neural Radiance Fields"
authors:
- Ashkan Mirzaei
- Tristan Aumentado-Armstrong
- Konstantinos G. Derpanis
- Jonathan Kelly
- Marcus A. Brubaker
- Igor Gilitschenski
- Alex Levinshtein

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

abstract: "Neural Radiance Fields (NeRFs) have emerged as a popular approach for novel view synthesis. While NeRFs are quickly being adapted for a wider set of applications, intuitively editing NeRF scenes is still an open challenge. One important editing task is the removal of unwanted objects from a 3D scene, such that the replaced region is visually plausible and consistent with its context. We refer to this task as 3D inpainting. In 3D, solutions must be both consistent across multiple views and geometrically valid. In this paper, we propose a novel 3D inpainting method that addresses these challenges. Given a small set of posed images and sparse annotations in a single input image, our framework first rapidly obtains a 3D segmentation mask for a target object. Using the mask, a perceptual optimization-based approach is then introduced that leverages learned 2D image inpainters, distilling their information into 3D space, while ensuring view consistency. We also address the lack of a diverse benchmark for evaluating 3D scene inpainting methods by introducing a dataset comprised of challenging real-world scenes. In particular, our dataset contains views of the same scene with and without a target object, enabling more principled benchmarking of the 3D inpainting task. We first demonstrate the superiority of our approach on multiview segmentation, comparing to NeRF-based methods and 2D segmentation approaches. We then evaluate on the task of 3D inpainting, establishing state-of-the-art performance against other NeRF manipulation algorithms, as well as a strong 2D image inpainter baseline."


featured: true

# links:
# - name: ""
# url_preprint: "https://arxiv.org/abs/2207.01583"
url_code: 'https://spinnerf3d.github.io/'
url_dataset: 'https://drive.google.com/drive/folders/1N7D4-6IutYD40v9lfXGSVbWrd47UdJEC?usp=share_link'
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=WEgJf1WC5SQ'
url_pdf: "publication/202306-cvpr-spinnerf/cvpr23-spinnerf.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
