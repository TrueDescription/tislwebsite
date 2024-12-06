---
title: "Dissecting Deep RL with High Update Ratios: Combatting Value Divergence"
authors:
- Marcel Hussing
- Claas Voelcker
- Igor Gilitschenski
- Amir-massoud Farahmand
- Eric Eaton

date: "2024-07-09"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-07-09T00:00:00Z"

doi: ""

# Publication type.
# paper-conference, article-journal
publication_types : ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "Reinforcement Learning Conference *(RLC)*"
publication_short: "*RLC*"

abstract: "We show that deep reinforcement learning can maintain its ability to learn without resetting network parameters in settings where the number of gradient updates greatly exceeds the number of environment samples. Under such large update-to-data ratios, a recent study by Nikishin et al. (2022) suggested the emergence of a primacy bias, in which agents overfit early interactions and downplay later experience, impairing their ability to learn. In this work, we dissect the phenomena underlying the primacy bias. We inspect the early stages of training that ought to cause the failure to learn and find that a fundamental challenge is a long-standing acquaintance: value overestimation. Overinflated Q-values are found not only on out-of-distribution but also in-distribution data and can be traced to unseen action prediction propelled by optimizer momentum. We employ a simple unit-ball normalization that enables learning under large update ratios, show its efficacy on the widely used dm_control suite, and obtain strong performance on the challenging dog tasks, competitive with model-based approaches. Our results question, in parts, the prior explanation for sub-optimal learning due to overfitting on early data."


featured: true

# links:
# - name: ""
url_preprint: ""
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
url_pdf: "publication/202407-rlc-primacy_bias/rlc2024-primacy_bias.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#  focal_point: ""
#  preview_only: false
---
