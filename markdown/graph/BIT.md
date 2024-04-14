# 解释
<p align="center">
<img src="img\BIT.png" />
</p>
如上图，可以理解树状数组是用来维护前缀和的，插入和查询都是logn，对于区间用query(R) - query(L - 1)

需要注意的细节是别超出数组范围

```python
def sol():
    n = int(input())
    h = list(map(int, input().split()))
    
    def lowbit(x):
        return x & (-x)
    def getsum(x):
        sums = 0
        while x:
            sums += t[x]
            x -= lowbit(x)
        return sums
    def update(x, y):
        while x <= 100009:
            t[x] += y
            x += lowbit(x)
    table = {v: i for i, v in enumerate(sorted(h), 1)}
    t = [0] * 100010
    res = [0] * 100010
    for i in range(n):
        update(table[h[i]] + 1, 1)
        res[i] += (i - getsum(table[h[i]] + 1) + 1)
    
    t = [0] * 100010
    for i in range(n - 1, -1, -1):
        update(table[h[i]] + 1, 1)
        res[i] += getsum(table[h[i]])
    ans = 0
    for i in range(n):
        ans += (res[i] + 1) * res[i] // 2
    print(ans)
sol()

```

另一个例题，求树的子树中大于节点的个数，注意所有使用到dfs的地方都设置最大递归深度
```python
import sys
sys.setrecursionlimit(100000)
def sol():
    with open('C:\\Users\\lhl\\Downloads\\P3605_2.in', 'r') as file:
        n = int(file.readline())
        p = [int(file.readline()) for _ in range(n)]
        b = {v: k for k, v in enumerate(sorted(p), 1)}
        g = [[] for _ in range(n+2)]
        ans = [0 for _ in range(n+2)]
        t = [0 for _ in range(n+10)]  # 增加数组t的大小
        for i in range(2, n+1):
            f = int(file.readline())
            g[f].append(i)
    def lowbit(x):
        return x & -x
    def update(x, y):
        while x <= n+8:  # 更新边界条件
            t[x] += y
            x += lowbit(x)
    def query(x):
        res = 0
        while x > 0:
            res += t[x]
            x -= lowbit(x)
        return res
    def dfs(x):
        ans[x] -= query(n) - query(b[p[x-1]])
        for i in g[x]:
            dfs(i)
        ans[x] += query(n) - query(b[p[x-1]])
        update(b[p[x-1]], 1)
    dfs(1)
    for i in range(1, n+1):
        print(ans[i])
sol()

```

# 用树状数组求最大值
```python
# 实现寻找C中小于x左边的最大值
class BIT:
    def __init__(self, n):
        self.C = [0] * (n + 1)

    def add(self, x, y):
        while x < len(self.C):
            self.C[x] = max(self.C[x], y)
            x += x & (-x)

    def query(self, x):
        ans = 0
        while x:
            ans = max(ans, self.C[x])
            x -= x & (-x)
        return ans

def sol():
    n = int(input())
    a = list(map(int, input().split()))
    b = BIT(n + 10)
    table = {v: k for k, v in enumerate(sorted(a), 1)}
    for i in range(n):
        a[i] = table[a[i]]
    L = [0] * (n + 10)
    for i in range(n):
        L[i] = b.query(a[i]) + 1
        b.add(a[i], L[i])
    
    b = BIT(n + 10)
    R = [0] * (n + 10)
    for i in range(n - 1, -1, -1):
        R[i] = b.query(n - a[i] + 1) + 1
        b.add(n - a[i] + 1, R[i])
    print(L)
    print(R)
sol()

```