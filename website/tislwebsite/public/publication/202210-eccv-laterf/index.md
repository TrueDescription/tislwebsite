---
title: "LaTeRF: Label and Text Driven Object Radiance Fields"
authors:
- Ashkan Mirzaei
- Yash Kant
- Jonathan Kelly
- Igor Gilitschenski

date: "2022-10-23"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-07-05T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*European Conference on Computer Vision (ECCV)*"
publication_short: "*ECCV*"

abstract: Obtaining 3D object representations is important for creating photo-realistic simulators and collecting assets for AR/VR applications. Neural fields have shown their effectiveness in learning a continuous volumetric representation of a scene from 2D images, but acquiring object representations from these models with weak supervision remains an open challenge. In this paper we introduce LaTeRF, a method for extracting an object of interest from a scene given 2D images of the entire scene and known camera poses, a natural language description of the object, and a small number of point-labels of object and non-object points in the input images. To faithfully extract the object from the scene, LaTeRF extends the NeRF formulation with an additional `objectness' probability at each 3D point.  Additionally, we leverage the rich latent space of a pre-trained CLIP model combined with our differentiable object renderer, to inpaint the occluded parts of the object. We demonstrate high-fidelity object extraction on both synthetic and real datasets and justify our design choices through an extensive ablation study.


featured: false

# links:
# - name: ""
#   url: ""
url_preprint: ''
url_code: 'https://github.com/ashmrz/LaTeRF'
url_pdf: "publication/202210-eccv-laterf/eccv22-laterf.pdf"
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://youtu.be/rRgsLZoyHek'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
