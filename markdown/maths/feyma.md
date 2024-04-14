费马小定理：

假如$a$是一个整数，$p$是一个质数，那么当$a$是$p$的倍数时，有：

$$a^p \equiv a(mod p)$$

当$a$不是$p$的倍数时，有：
$$a^{p-1} \equiv 1(mod p)$$

# 有理数求模
$$\frac{a}{b}\% \bmod  \Leftrightarrow a \times inv(b)\% \bmod $$

并且，$$inv(b) \equiv {b^{\bmod  - 2}}(\bmod 是质数)$$

```python
def sol():
    mod = 998244353
    # 快速幂
    def qpow(x, k):
        res = 1
        while k:
            if k & 1:
                res = (res * x) % mod
            x = (x * x) % mod
            k >>= 1
        return res
    p = [(0, 0)]
    n = int(input())
    for i in range(1, n + 1):
        a, b = map(int, input().split())
        p.append((a, b))
    s1, s2, s3 = 1, 0, 0
    for i in range(1, n + 1):
        a, b = p[i]
        # 费马小定理
        p1 = (a * qpow(b, mod - 2)) % mod
        p2 = ((b - a) * qpow(b, mod - 2)) % mod
        s3 = (s3 + s1) % mod
        s2 = (s2 + s1 * p1) % mod
        s1 = (s1 * p2) % mod
    print((s3 * qpow(1 - s2 + mod, mod - 2)) % mod)
sol()
```