# 读错误信息并处理转换失败

直接运行 `int("abc")` 会失败。看回溯时，先读最后一行，找到异常名 `ValueError`，再往上找指向自己代码的那一行。本例知道无法转换是一种预期情况，于是给它一条简短提示。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_value_error.py`。

```python
# 只处理把文字转成整数时的失败。
text = input()

try:
    number = int(text)
except ValueError:
    print("请输入整数")
else:
    print(number)
```

1. `text = input()` 读取原始文字。
2. `try` 中只尝试 `int(text)`。例如 `"3"` 能转换，`"abc"` 不能。
3. 遇到 `ValueError` 时进入 `except ValueError`，显示提示。
4. `else` 只在 `try` 中没有抛出异常时执行，此时可以打印 `number`。

## 示例输入与输出

输入

```text
abc
```

输出

```text
请输入整数
```

## 常见错误

- 出错前如果没能给 `number` 赋值，在分支之后直接用它会产生新的错误。
- 捕获明确知道怎么处理的异常。这里输入流结束时产生的 `EOFError` 是另一种情况。

## 动手练习

### 基础练习

分别输入 `abc`、`3`、`3.0`，说出每次走哪个分支。

### 进阶练习

在 VS Code 的个人副本中运行一行 `int("abc")`，从回溯里指出异常名称和对应的代码位置，然后恢复这节的例子。
