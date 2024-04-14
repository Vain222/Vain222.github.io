具体可参见：[知乎](https://zhuanlan.zhihu.com/p/585474169)
# 介绍
首先，莫比乌斯反演的主要目的是，通过引入莫比乌斯函数来简化问题的计算复杂性，所以极富创造性的是对问题的解构能力。
下面先给出定义：
$$ \mu (n)=\left\{ \begin{matrix}   1 & n=1  \\   {{(-1)}^{k}} & n为k个不同质数积  \\   0 & other  \\\end{matrix} \right. $$

然后是偏序关系，我们可以赋予小于、整除关系、包含关系，在偏序问题中可以通用地用来表达，那么莫比乌斯反演可以通用的表达为$ \le  $
所以定义有：
$$ g(x)=\sum\nolimits_{d\le n}{f(d)}$$

# 推导
目前我遇到的所有用莫比乌斯反演的地方在求最大公约数

好，现在的问题是如何简单、快速求得$f(x)$，


```python
import math

N = 60010
vis = [False]*N
prim = [0]*N
mu = [0]*N
sums = [0]*N
cnt = 0

def get_mu(n):
    global cnt
    mu[1] = 1
    for i in range(2, n+1):
        if not vis[i]:
            mu[i] = -1
            cnt += 1
            prim[cnt] = i
        j = 1
        while j <= cnt and i*prim[j] <= n:
            vis[i * prim[j]] = True
            if i % prim[j] == 0:
                break
            else:
                mu[i*prim[j]] = -mu[i]
            j += 1
    for i in range(1, n+1):
        sums[i] = sums[i-1] + mu[i]

def main():
    t = int(input())
    get_mu(50000)
    while t > 0:
        a, b, d = map(int, input().split())
        max_rep = min(a, b)
        ans = 0
        l = 1
        while l <= max_rep:
            r = min(a//(a//l), b//(b//l))
            ans += (a//(l*d)) * (b//(l*d)) * (sums[r] - sums[l-1])
            l = r + 1
        print(ans)
        t -= 1

if __name__ == "__main__":
    main()
```