---
title: "Multi-Abstractive Neural Controller: An Efficient Hierarchical Control Architecture for Interactive Driving"
authors:
- Xiao Li
- Igor Gilitschenski
- Guy Rosman
- Sertac Karaman
- Daniela Rus

date: "2023-08-01"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-04-08T00:00:00Z"

doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Robotics and Automation Letters*"
publication_short: "*RA-L*"

abstract: As learning-based methods make their way from perception systems to planning/control stacks, robot control systems have started to enjoy the benefits that data-driven methods provide. Because control systems directly affect the motion of the robot, data-driven methods, especially black box approaches, need to be used with caution considering aspects such as stability and interpretability. In this paper, we describe a differentiable and hierarchical control architecture. The proposed representation, called multi-abstractive neural controller, uses the input image to control the transitions within a novel discrete behavior planner (referred to as the visual automaton generative network, or vAGN). The output of a vAGN controls the parameters of a set of dynamic movement primitives which provides the system controls. We train this neural controller with real-world driving data via behavior cloning and show improved explainability, sample efficiency, and similarity to human driving.

featured: false

# links:
# - name: ""
#   url: ""
url_pdf: publication/202304-ral-neural_controller/ral23-neural_controller.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---