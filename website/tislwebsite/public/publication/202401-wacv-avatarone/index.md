---
title: "AvatarOne: Monocular 3D Human Animation"
authors:
- Akash Karthikeyan
- Robert Ren
- Yash Kant
- Igor Gilitschenski

date: "2024-01-04"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-01-04T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*Winter Conference on Applications of Computer Vision (WACV)*"
publication_short: "*WACV*"

abstract: "Reconstructing realistic human avatars from monocular videos is a challenge that demands intricate modeling of 3D surface and articulation. In this paper, we introduce a comprehensive approach that synergizes three pivotal components: (1) a Signed Distance Field (SDF) representation with volume rendering and grid-based ray sampling to prune empty raysets, enabling efficient 3D reconstruction; (2) faster 3D surface reconstruction through a warmup stage for human surfaces, which ensures detailed modeling of body limbs; and (3) temporally consistent subjectspecific forward canonical skinning, which helps in retaining correspondences across frames, all of which can be trained in an end-to-end fashion under 30 mins. Leveraging warmup and grid-based ray marching, along with a faster voxel-based correspondence search, our model streamlines the computational demands of the problem. We further experiment with different sampling representations to improve ray radiance approximations and obtain a floater free surface. Through rigorous evaluation, we demonstrate that our method is on par with current techniques while offering novel insights and avenues for future research in 3D avatar modeling. This work showcases a fast and robust solution for both surface modeling and novel view animation."


featured: true

# links:
# - name: ""
url_preprint: ""
url_code: 'https://github.com/Aku02/av3d/'
url_dataset: ''
url_poster: ''
url_project: 'https://aku02.github.io/projects/avatarone/'
url_slides: ''
url_source: ''
url_video: ''
url_pdf: "publication/202401-wacv-avatarone/wacv2024-avatarone.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
