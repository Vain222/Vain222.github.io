# 马拉车算法
与暴力枚举的$n^3$不同，可以从中间向两边扩展降到$n^2$，进一步，可以利用前面计算好的信息启发当前的计算。

记$p$为每个位置为中心的的最大半径，显然对于奇、偶回文串要分开讨论，所以可以巧妙地在每个字符间加上未出现的字符，如：’#’

下面介绍具体的优化方法：

1. 对当前位置$i$，前面若有$mid$的半径为$R$覆盖了$i$，则$2\times mid - i$对应的位置的信息可以给$i$利用，所以有$p[i]=min(p[2 \times mid - i], mid +R - i)$
，然后暴力枚举
2. 对于未覆盖的地方，则暴力枚举

代码如下：
```python
def manacher(s):
    s = '#' + '#'.join(s) + '#'
    RL = [0] * len(s)
    MaxRight = 0
    pos = 0
    MaxLen = 0
    for i in range(len(s)):
        if i < MaxRight:
            RL[i] = min(RL[2 * pos - i], MaxRight - i)
        else:
            RL[i] = 1
        while i - RL[i] >= 0 and i + RL[i] < len(s) and s[i - RL[i]] == s[i + RL[i]]:
            RL[i] += 1
        if RL[i] + i - 1 > MaxRight:
            MaxRight = RL[i] + i - 1
            pos = i
        MaxLen = max(MaxLen, RL[i])
    print(RL)
    return MaxLen - 1
s = input()
print(manacher(s))

```