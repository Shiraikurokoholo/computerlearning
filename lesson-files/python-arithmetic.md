# 运算、整组与余数

按每组 5 个来分 12 个物品，可以凑出 2 组，留下 2 个。`12 / 5` 得到 2.4，`12 // 5` 给出完整组数，`12 % 5` 给出余数。本例约定物品数非负，每组至少 1 个。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_arithmetic.py`。

```python
# 输入物品总数和每组个数，每行一个整数。
items = int(input())
group_size = int(input())

groups = items // group_size
leftover = items % group_size
print(f"{groups} 组，剩 {leftover} 个")
```

1. 读取 `items` 和 `group_size`，两次 `input()` 各读一行。
2. `//` 得出完整组数，`%` 得到分完完整组后的数量。
3. `f` 字符串把 `groups` 和 `leftover` 代入输出。

`2 + 3 * 4` 先乘后加，得到 14。用 `(2 + 3) * 4` 可以让加法先做，得到 20。减法写作 `-`。

## 示例输入与输出

输入

```text
12
5
```

输出

```text
2 组，剩 2 个
```

## 常见错误

- 把 `/` 写在求组数的位置，会得到可能带小数的结果。
- 每组填 `0` 会触发 `ZeroDivisionError`，因为除数必须非零。

## 动手练习

### 基础练习

输入 10 和 5，再输入 4 和 5。对照整组和余数。

### 进阶练习

把 `groups * group_size + leftover` 也打印出来，用 12 和 5 检查能否还原物品总数。
