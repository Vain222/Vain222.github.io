# 并查集
带权并查集
```python
def sol():
    n = 30000
    p = int(input())
    fa = [i for i in range(n + 1)]
    l = [1] * (n + 1)
    dis = [0] * (n + 1)
    def find(x):
        if fa[x] == x:
            return x
        f = find(fa[x])
        dis[x] += dis[fa[x]]
        fa[x] = f
        return f
    def move(x, y):
        fx = find(x)
        fy = find(y)
        fa[fx] = fy
        dis[fx] += l[fy]
        l[fy] += l[fx]
    def query(x):
        fx = find(x)
        print(dis[x])
    for _ in range(p):
        t = list(input().split())
        if t[0] == 'M':
            move(int(t[1]), int(t[2]))
        else:
            query(int(t[1]))
sol()
```