# 使用标准库模块

模块把相关工具放在一起。`math` 随 Python 安装，里面的 `sqrt()` 可以求非负数的平方根，例如 9 乘 9 得 81，所以 81 的平方根是 9。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_stdlib_import.py`。

```python
# math 是 Python 自带的模块。
import math

number = float(input())
root = math.sqrt(number)
print(root)
```

1. `import math` 让当前程序可以用 `math` 这个模块名。
2. `float(input())` 读入数字，保留输入小数的能力。
3. `math.sqrt(number)` 用模块名加句点找到模块里的函数。
4. `print(root)` 输出结果。这个函数给出的是浮点数，所以 81 对应 `9.0`。

## 示例输入与输出

输入

```text
81
```

输出

```text
9.0
```

## 常见错误

- 只写 `sqrt(number)` 时，当前作用范围里没有叫 `sqrt` 的名字。此处通过 `math.sqrt` 访问。
- 本例输入应为非负数。输入负数会得到 `ValueError`，异常课会讲怎样阅读这类信息。
- 给自己的文件起名时，避开 `math.py` 这样的标准库模块名。

## 动手练习

### 基础练习

分别输入 0、16、2.25，先用乘法验证预期的平方根。

### 进阶练习

再加一行显示 `root * root`，观察平方根乘回去后是否接近原数。
