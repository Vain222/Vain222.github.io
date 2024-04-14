素数筛主要用于快速求出给定区间内的素数，对于任意一个大于 $1$ 的正整数 $n$，那么它的 $x$ 倍就是合数（$x > 1$）。利用这个结论，我们可以避免很多次不必要的检测，也就是埃拉托斯特尼筛法（时间复杂度为$O(nloglogn)$）。

```python
N = 10 ** 5 + 10
is_prime = [True] * N
is_prime[1] = False
for i in range(2, N):
    if is_prime[i]:
        for j in range(i * i, N, i):
            is_prime[j] = False
```

```python
# 筛选出素数的同时，记录最大的质因数
def sieve(n):
    primes = [0]*1000001
    prime_count = [0]
    is_composite = [0]*1000001
    is_prime = [0]*1000001
    max_prime_factor = [0]*1000001
    for i in range(2, n+1):
        if is_composite[i] == 0:
            prime_count[0] += 1
            primes[prime_count[0]] = i
            is_prime[i] = 1
            max_prime_factor[i] = i
        j = 1
        while j <= prime_count[0] and primes[j]*i <= n:
            max_prime_factor[primes[j]*i] = max(primes[j], max_prime_factor[i])
            is_composite[primes[j]*i] = 1
            if i % primes[j] == 0:
                break
            j += 1
    return primes, prime_count, is_composite, is_prime, max_prime_factor

# 简化后
def sieve(n):
    prime = []
    vis = [0] * (n + 1)
    is_prime = [0] * (n + 1)
    fac = [0] * (n + 1)
    cnt = 0
    for i in range(2, n + 1):
        if not vis[i]:
            cnt += 1
            prime.append(i)
            is_prime[i] = 1
            fac[i] = i
        for j in range(len(prime)):
            if prime[j] * i > n:
                break
            fac[prime[j] * i] = max(prime[j], fac[i])
            vis[prime[j] * i] = 1
            if i % prime[j] == 0:
                break
    return is_prime, fac
```