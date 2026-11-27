# 数值统计与排序

把同一组数字交给不同的工具，看看每次会返回什么。

## 逐行读代码

```python
numbers = [8, 12, 10]
total = sum(numbers)
print("总和", total)
print("最小值", min(numbers))
print("最大值", max(numbers))
print("平均值", total / len(numbers))
print("从小到大", sorted(numbers))
print("原列表", numbers)
```

| 写法 | 用途 |
| --- | --- |
| `len(numbers)` | 数元素个数 |
| `sum(numbers)` | 求总和 |
| `min(numbers)`、`max(numbers)` | 找最小值、最大值 |
| `sorted(numbers, reverse=True)` | 新建从大到小排序的列表 |
| `list(reversed(numbers))` | 按原顺序的反方向取项 |
| `abs(-5)`、`round(3.1416, 2)` | 取绝对值、保留到指定精度 |
| `divmod(75, 60)` | 一次得到商和余数 `(1, 15)` |

先用 `sum()` 得到总和，再除以 `len()` 算平均值。`sorted()` 交回新列表，最后一行可以检查原列表的顺序。

## 示例输入与输出

本例无需输入。

```text
总和 30
最小值 8
最大值 12
平均值 10.0
从小到大 [8, 10, 12]
原列表 [8, 12, 10]
```

## 常见错误

空列表的 `sum([])` 是 0，`min([])` 和 `max([])` 会报错。计算平均值前也要检查列表是否为空。

### 基础练习

改成 `[5, -2, 5]`，先手算最大值和总和。

### 进阶练习

读取一行整数，输出最小值、最大值与平均值。用空行检查“暂无数据”的分支。
