# 遍历一排数字并统计

当一行里有多次练习的分钟数，可以先拆词，再把每个词转为整数存进列表。转换后的列表还能用于求和、输出或做其他统计。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_list_traverse.py`。

```python
# 在一行输入多个整数，用空格隔开。
parts = input().split()
minutes = []

for part in parts:
    minutes.append(int(part))

total = 0
for item in minutes:
    total = total + item

print(f"总计 {total}")
```

1. `input().split()` 先得到 `"20"`、`"15"`、`"10"` 三段文本。
2. `minutes = []` 准备空列表。第一个循环逐个转换文本，并把整数追加进去。
3. `total` 从 0 开始。第二个循环按顺序拿到整数，把它加到总计。
4. 最终输出总计。空行没有词，两个循环都执行零次。

## 示例输入与输出

输入

```text
20 15 10
```

输出

```text
总计 45
```

## 常见错误

- `split()` 拆出来的元素还是字符串。先 `int(part)` 才能按数字相加。
- 把 `minutes = []` 写进转换循环的话，每一轮都会重新开始。

## 动手练习

### 基础练习

测试空行和带多余空格的 `7 8`，看看总计是否正确。

### 进阶练习

在求和循环里额外数出大于等于 15 的项目。用默认输入核对计数 2。

## 遍历值还是下标

`for number in minutes` 每次取出一个值。若要修改列表中的某个位置，可以用 `for index in range(len(minutes))`，再读写 `minutes[index]`。只在循环里写 `number = number + 1` 不会替换原列表里的整数。遍历时需要删除多项，可以先把要保留的项追加到新列表。
