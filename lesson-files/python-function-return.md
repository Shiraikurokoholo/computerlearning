# 参数、返回值与局部变量

75 分钟由一整小时和 15 分钟组成。函数可以接收一个数，做完换算后交回两项结果。调用者再决定怎么用这些数。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_function_return.py`。

```python
# 分钟换算函数返回两项结果。
def to_hours(total_minutes):
    hours = total_minutes // 60
    minutes = total_minutes % 60
    return hours, minutes

entered = int(input())
hours, minutes = to_hours(entered)
print(f"{hours} 小时，{minutes} 分钟")
```

1. `total_minutes` 是参数。调用 `to_hours(75)` 时，这次调用里的参数接到 `75`。
2. 用 `//` 和 `%` 得到小时和余下的分钟。函数里的 `hours`、`minutes` 是这次调用的局部变量。
3. `return hours, minutes` 把两项值组成元组交回调用处。
4. 顶格代码读取输入、调用函数，用拆包接住两个返回值，最后打印。这里外部的两个变量可以换成其他名字。

## 示例输入与输出

输入

```text
75
```

输出

```text
1 小时，15 分钟
```

## 常见错误

- 在函数里 `print()` 会显示文字。把结果交给调用者继续计算，要用 `return`。
- 局部变量的名字只在函数内部有意义，外面用返回值接住结果。

## 动手练习

### 基础练习

输入 60 和 0，核对小时数和余数。

### 进阶练习

用两个变量分别调用函数换算 75 与 90，交换调用顺序，检查每次各自的结果。

## 函数没有交回结果时

函数走到末尾或执行空的 `return`，调用处得到 `None`。执行 `return` 也会立即离开函数。给 `to_hours()` 加一个检查，让负数提前返回 `None`。调用处先用 `result is None` 检查，再决定要不要拆包。如果直接拆包 `None`，会出现 `TypeError`。

### 从空白文件写

写 `rectangle(width, height)`，交回面积和周长两项。主程序读两行整数，调用函数、拆包并打印。输入 3 和 5，应得到面积 15、周长 16。
