# 快速幂

快速幂主要利用二进制的思想，将幂的次数转换为二进制形式，然后从最低位开始，如果当前位为1，则将结果乘以当前位的底数，如果当前位为0，则将结果乘以当前位的底数的平方。

官方实现的pow实际上就是利用了快速幂的思想，但是在面对数值很大时，会面临速度慢的问题，所有在面对需要取模的题目时，要自己实现快速幂，每一步取模，可以很大程度加快速度。

下面的代码实现了矩阵快速幂和普通快速幂，加速了计算过程，同时还有分数的取模。
```python
mod = 998244353
class Mu:
    def __init__(self, a):
        self.a = a
    def __mul__(self, other):
        c = [[0] * 2 for _ in range(2)]
        for i in range(2):
            for j in range(2):
                for x in range(2):
                        c[i][j] += self.a[i][x] * other.a[x][j]
                c[i][j] %= mod
        return Mu(c)

def pow(x, y):
    res = 1
    while y:
        if y & 1:
            res *= x
            res %= mod
        x *= x
        x %= mod
        y = y >> 1
    return res
def sol():
    N = int(input())
    n = N
    sing = Mu([[1, 1],
            [1, 0]])
    fi = Mu([[1, 0],
            [0, 1]])
    n += 1
    while n:
        if n & 1:
            fi *= sing
        sing *= sing
        n = n >> 1
    p = N * (fi.a[1][0] + fi.a[1][1]) - fi.a[0][0] - fi.a[0][1] + 2 
    p %= mod
    inv = pow(N * (N + 1) // 2, mod - 2)
    print(f"{p * inv % mod}")
        
for _ in range(int(input())):
    sol()
```