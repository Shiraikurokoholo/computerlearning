# 用列表生成式和排序整理数据

已经会用 `for`、`if` 和 `append()` 时，可以把简单的「挑出哪些项」写得紧凑一些。用列表生成式选出至少 10 分钟的记录，再用 `sorted()` 得到排好的新列表。本例保留了筛选后的原顺序。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_list_sort_comprehension.py`。

```python
# 用一排分钟数练习两种写法。
minutes = [10, 20, 5, 15]

long_sessions = [item for item in minutes if item >= 10]
ordered = sorted(long_sessions, reverse=True)
print(f"筛选后 {long_sessions}")
print(f"从长到短 {ordered}")
```

1. `minutes` 是原始记录。
2. `[item for item in minutes if item >= 10]` 依次取 `item`，只把条件为真的项放进新列表。最前面的 `item` 是放入新列表的内容。
3. `sorted(long_sessions, reverse=True)` 返回从大到小排列的新列表。`reverse=True` 指定反向排列，默认是从小到大。
4. 分别打印筛选结果和排序结果。

第 2 步等价于先写 `long_sessions = []`，再用 `for` 和 `if` 检查每一项，符合条件时调用 `long_sessions.append(item)`。

## 示例输入与输出

本例无需输入。

输出

```text
筛选后 [10, 20, 15]
从长到短 [20, 15, 10]
```

## 常见错误

- 忘了第一个 `item` 会让生成式缺少输出项。
- `sorted()` 的结果是一份新列表。想保留结果，需要接住返回值。

## 动手练习

### 基础练习

把原列表换成 `[5, 15, 10, 20]`，先写下两行的预期顺序，再运行。

### 进阶练习

将元组列表 `[("数组", 15), ("循环", 20)]` 按时长排序。先定义函数 `get_minutes(record)` 返回 `record[1]`，再把 `key=get_minutes` 传给 `sorted()`，让它用分钟数比较。

### 从空白文件写

用普通循环读入一行整数，筛出正数。用 `sorted()` 得到升序列表，打印结果。再换成列表生成式并用同一组数据对照。输入 `5 -1 3 0`，预期得到 `[3, 5]`。
