# 参数与实参

定义里的 `minutes` 和 `goal` 是参数，用来接收数据。调用 `show_result(15, 20)` 时，`15` 和 `20` 是实参，依次交给两个参数。

## 逐行读代码

```python
def show_result(minutes, goal):
    print(minutes >= goal)

minutes = int(input())
goal = int(input())
show_result(minutes, goal)
```

1. `def` 定义函数，此时缩进里的代码还没执行。
2. 主程序读两行并转换成整数。
3. 最后一行调用函数，把两个值交给对应参数。函数体比较并打印结果。也可以传表达式，如 `show_result(10 + 5, 20)`。

## 示例输入与输出

```text
15
20
```

输出

```text
False
```

## 常见错误

少传一个实参会得到 `TypeError`。漏写 `int()` 会按字符串比较，例如 `"9" >= "20"` 为真。

## 动手练习

### 基础练习

输入 15 和 20，再试 20 和 20。

### 进阶练习

调换调用处的两个实参，预测输出。

### 从空白文件写

写 `show_cost(price, quantity)` 打印总价。两行输入 `8` 和 `3`，应打印 `24`。
