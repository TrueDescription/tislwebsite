---
title: "Learning An Explainable Trajectory Generator Using The Automaton
Generative Network (AGN)"
authors:
- Xiao Li
- Guy Rosman
- Igor Gilitschenski
- Brandon Araki
- Cristian Ioan Vasile
- Sertac Karaman
- Daniela Rus

date: "2022-04-01"
publishDate: "2021-11-22T00:00:00Z"

doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types : ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Robotics and Automation Letters*"
publication_short: "*RA-L*"

abstract: Symbolic reasoning is a key component for enabling practical use of data-driven planners in autonomous driving. In that context, deterministic finite state automata (DFA) are often used to formalize the underlying high-level decision-making process. Manual design of an effective DFA can be tedious. In combination with deep learning pipelines, DFA can serve as an effective representation to learn and process complex behavioral patterns. The goal of this work is to leverage that potential. We propose the automaton generative network (AGN), a differentiable representation of DFAs. The resulting neural network module can be used standalone or as an embedded component within a larger architecture. In evaluations on deep learning based autonomous vehicle planning tasks, we demonstrate that incorporating AGN improves the explainability, sample efficiency, and generalizability of the model.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: publication/202111-ral-agn/li-ral-agn.pdf
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

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides:
---