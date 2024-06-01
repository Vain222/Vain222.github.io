# 状态压缩 dp
状压 DP 主要用在题目数据量小，可以二进制枚举的题目上。

### 例题：状压 DP 解决旅行商问题 (TSP)

**问题描述**：

给定一个 n 个城市的列表，每两个城市之间有一定的距离。求出一条最短的路径，使得旅行商从一个城市出发，经过所有其他城市恰好一次后，返回到起始城市。

**解决方案**：

使用状压 DP 来解决这个问题。定义 `dp[mask][i]` 表示已经访问过的城市集合为 `mask`，且当前在城市 `i` 的最短路径长度。

#### Python 实现：

```python
def tsp(dist):
    n = len(dist)
    # dp[mask][i] 表示访问过的城市集合为 mask，当前在城市 i 的最短路径长度
    dp = [[float('inf')] * n for _ in range(1 << n)]
    dp[1][0] = 0  # 从城市 0 开始

    for mask in range(1 << n):
        for u in range(n):
            if mask & (1 << u):  # 如果城市 u 在集合中
                for v in range(n):
                    if not mask & (1 << v):  # 城市 v 不在集合中
                        next_mask = mask | (1 << v)
                        dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + dist[u][v])

    # 返回到起始城市 0 的最短路径长度
    return min(dp[(1 << n) - 1][i] + dist[i][0] for i in range(1, n))

# 示例距离矩阵
dist = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

print(tsp(dist))  # 输出最短路径长度
```