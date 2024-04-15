# Diffusion Models
[更为详细的内容](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/#forward-diffusion-process)

简单来说，Diffusion Models基于非平衡热力学，马尔科夫链，每次加的噪声都是决定于当前状态，具体的数学推导见推导。

去噪过程是通过神经网络去学习到采样的分布，具体地，是采样到的${\varepsilon _\theta }$和加噪过程的${\varepsilon  }$进行拟合，通过学习到的分布，就可以从噪声$X_t$还原到$X_{t-1}$

