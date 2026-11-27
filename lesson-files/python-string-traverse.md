# 逐个字符检查

`for` 也能逐个取出字符串中的字符。例如处理 `banana` 时，程序会依次看到 `b`、`a`、`n`、`a`、`n`、`a`。计数在每次碰到小写 `a` 时加一。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_string_traverse.py`。

```python
# 统计一行文字里小写 a 的数量。
text = input()
count = 0

for letter in text:
    if letter == "a":
        count = count + 1

print(f"a 出现 {count} 次")
```

1. 读取一行文字，把计数设为 0。
2. `for letter in text` 每轮把下一个字符交给 `letter`。
3. `if letter == "a"` 检查当前字符。为真才更新 `count`。
4. 全部检查完再输出计数。空行没有循环轮次，所以保持 0。

## 示例输入与输出

输入

```text
banana
```

输出

```text
a 出现 3 次
```

## 常见错误

- `letter = "a"` 是赋值，比较要写两个等号。
- `"A"` 和 `"a"` 是不同字符。本例只数小写。

## 动手练习

### 基础练习

测试 `aaa`、`AAA`，再用空行测试计数能否保持 0。

### 进阶练习

再读入一行作为要找的字符，把固定的 `"a"` 换成读到的变量。用 `banana` 和 `n` 检查。
