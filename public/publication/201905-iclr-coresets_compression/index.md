---

authors:
- Cenk Baykal
- Lucas Liebenwein
- Igor Gilitschenski
- Dan Feldman
- Daniela Rus
date : "2019-05-06T00:00:00Z"
publication_types : ['paper-conference']
publication : "*International Conference on Learning Representations (ICLR)*"
publication_short : "*ICLR*"
title : "Data-Dependent Coresets for Compressing Neural Networks with Applications to Generalization Bounds"

abstract :  We present an efficient coresets-based neural network compression algorithm that sparsifies the parameters of a trained fully-connected neural network in a manner that provably approximates the network's output. Our approach is based on an importance sampling scheme that judiciously defines a sampling distribution over the neural network parameters, and as a result, retains parameters of high importance while discarding redundant ones. We leverage a novel, empirical notion of sensitivity and extend traditional coreset constructions to the application of compressing parameters. Our theoretical analysis establishes guarantees on the size and accuracy of the resulting compressed network and gives rise to generalization bounds that may provide new insights into the generalization properties of neural networks. We demonstrate the practical effectiveness of our algorithm on a variety of neural network configurations and real-world data sets.


url_pdf: "publication/201905-iclr-coresets_compression/iclr19-coresets_compression.pdf"

featured: false
---