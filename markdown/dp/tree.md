# 树形 dp
树形 dp主要用于解决树形结构的问题，常见的树形结构有树、森林、多叉树等。
有点类似于深度优先搜索，对每个节点，要递归利用其子节点来计算出。

```python
# 题目链接：https://www.luogu.com.cn/problem/P4362
from math import inf
from copy import deepcopy

def sol():
    # 读入节点数n，边数m和k
    n, m, k = map(int, input().split())
    # 初始化图的邻接表
    g = [[] for _ in range(n + 1)]
    # 读入边信息，并构建无向图
    for _ in range(n - 1):
        a, b, c = map(int, input().split())
        g[a].append((b, c))
        g[b].append((a, c))
    
    # 如果n - k小于m - 1，则直接输出-1
    if n - k < m - 1:
        print(-1)
        return
    
    # 初始化dp数组，dp[x][j][0]表示不选x节点，dp[x][j][1]表示选x节点
    dp = [[[inf] * 2 for _ in range(k + 1)] for _ in range(n + 1)]
    
    # 深度优先搜索函数
    def dfs(x, fa):
        nonlocal dp, n, k
        # 初始化当前节点的dp值
        dp[x][0][0] = dp[x][1][1] = 0
        # 遍历当前节点的所有子节点
        for v, w in g[x]:
            if v == fa:
                continue
            dfs(v, x)
            # 使用临时数组来避免覆盖原有的dp值
            tmp = deepcopy(dp[x])
            # 重新初始化dp[x]
            dp[x] = [[inf] * 2 for _ in range(k + 1)]
            # 更新dp值
            for j in range(k + 1):
                for t in range(j + 1):
                    dp[x][j][0] = min(dp[x][j][0], dp[v][t][0] + tmp[j-t][0] + (m==2) * w, dp[v][t][1] + tmp[j-t][0])
                    dp[x][j][1] = min(dp[x][j][1], dp[v][t][1] + tmp[j-t][1] + w, dp[v][t][0] + tmp[j-t][1])
    
    # 从节点1开始深度优先搜索
    dfs(1, 0)
    # 输出结果
    print(dp[1][k][1])

sol()
```

主要困难的地方在于，设计dp过程，在设计出状态转移方程后，模板化套用就行。
