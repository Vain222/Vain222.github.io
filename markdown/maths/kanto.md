# 康托展开

康托展开是一种用于确定一个序列在其全排列中的位置的方法。

## 公式
对于序列 $a_1, a_2, \dots, a_n$，其康托展开值 $X$ 可以通过以下公式计算：
$$ X = \sum_{i=1}^{n} \text{perm}(a_i) \times (n-i)! $$
其中 $\text{perm}(a_i)$ 是在 $a_i$ 之后且小于 $a_i$ 的元素数量。

## 代码示例
```python
def kanto(a: list):
    n = len(a)
    perm = [0] * (n+1)
    for i in range(len(a)):
        for j in range(i+1, len(a)):
            if a[j] < a[i]:
                perm[i] += 1
    return sum(perm[i] * math.factorial(n-i) for i in range(1, n+1))
```
