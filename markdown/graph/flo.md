# 分层图

分层图主要的作用是在有限的限制条件下，比如最多k次操作，那么对图进行第一层到第二层的过程可以视为一次操作，所以到第k层，就是k次操作，然后使用迪杰斯特拉求最短路径。
```python
import heapq
from math import inf
def sol():
    n, m = map(int, input().split())
    g = [[] for _ in range(3 * n + 1)]
    for _ in range(m):
        a,b,c,d = map(int, input().split())
        if d:
            g[a].append((b + n, c))
            g[b].append((a + n, c))
            g[a + n].append((b + 2 * n, c))
            g[b + n].append((a + 2 * n, c))
        else:
            g[a].append((b, c))
            g[b].append((a, c))
            g[a + n].append((b + n, c))
            g[b + n].append((a + n, c))
            g[a + 2 * n].append((b + 2 * n, c))
            g[b + 2 * n].append((a + 2 * n, c))
    dist = [inf] * (3 * n + 1)
    def dij(s):
        dist[s] = 0
        hp = [(0, s)]
        while hp:
            v_d, v = heapq.heappop(hp)
            if v_d != dist[v]:
                continue
            for u, u_d in g[v]:
                if dist[v] + u_d < dist[u]:
                    dist[u] = dist[v] + u_d
                    heapq.heappush(hp, (dist[u], u))
    dij(1)
    mx = min(dist[3 * n], dist[2 * n])
    print(dist[n] - mx)
sol()
```