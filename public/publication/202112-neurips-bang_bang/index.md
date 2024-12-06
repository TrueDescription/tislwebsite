---

authors:
- Tim Seyde
- Igor Gilitschenski
- Wilko Schwarting
- Bartolomeo Stellato
- Martin Riedmiller
- Markus Wulfmeier
- Daniela Rus
date : "2021-12-06T00:00:00Z"
publishDate : "2021-09-10"

publication_types : ['paper-conference']
publication : "*Neural Information Processing Systems (NeurIPS)*"
publication_short : "*NeurIPS*"
title : "Is Bang-Bang Control All You Need? Solving Continuous Control with Bernoulli Policies"

abstract: Reinforcement learning (RL) for continuous control typically employs distributions whose support covers the entire action space. In this work, we investigate the colloquially known phenomenon that trained agents often prefer actions at the boundaries of that space. We draw theoretical connections to the emergence of bang-bang behavior in optimal control, and provide extensive empirical evaluation across a variety of recent RL algorithms. We replace the normal Gaussian by a Bernoulli distribution that solely considers the extremes along each action dimension - a bang-bang controller. Surprisingly, this achieves state-of-the-art performance on several continuous control benchmarks - in contrast to robotic hardware, where energy and maintenance cost affect controller choices. Since exploration, learning, and the final solution are entangled in RL, we provide additional imitation learning experiments to reduce the impact of exploration on our analysis. Finally, we show that our observations generalize to environments that aim to model real-world challenges and evaluate factors to mitigate the emergence of bang-bang solutions. Our findings emphasise challenges for benchmarking continuous control algorithms, particularly in light of potential real-world applications.

url_pdf: "/publication/202112-neurips-bang_bang/202112-neurips-bang_bang.pdf"
featured: false
---
