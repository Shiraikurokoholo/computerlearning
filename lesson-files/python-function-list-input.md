# 把一排数字交给函数

| 列表元素 | 10 | 20 | 30 |
| --- | --- | --- | --- |
| 正下标 | 0 | 1 | 2 |
| 负下标 | -3 | -2 | -1 |

对非空列表，`items[-1]` 等同于 `items[len(items) - 1]`。`items[-2]` 要求至少两项，而 `items[-2:]` 是切片，最多取两项并返回列表。Python 列表和 C++ 数组的下标规则不同。

## 逐行读代码

```python
def parse_minutes(text):
    numbers = []
    for word in text.split():
        numbers.append(int(word))
    return numbers

def last_minutes(items):
    if len(items) == 0:
        return None
    return items[-1]

minutes = parse_minutes(input())
last = last_minutes(minutes)
if last is None:
    print("暂无记录")
else:
    print(last)
```

1. `split()` 拆出字符串，循环把它们转换为整数并追加。
2. `last_minutes()` 先处理空列表，再取最后一项。
3. 调用处用 `last is None` 判断没有记录，所以时长 `0` 仍能正常显示。

## 示例输入与输出

```text
10 20 30
```

输出

```text
30
```

## 常见错误

空列表取 `[-1]` 会抛出 `IndexError`。传入无法转换的文字会触发 `ValueError`，其处理方法见异常章节。

## 动手练习

### 基础练习

分别试多项、单项、空行和单独的 `0`。

### 进阶练习

改为打印最后两项组成的列表，再试空行。

### 从空白文件写

写 `first_number(items)`，空列表返回 `None`，否则返回第一项。
