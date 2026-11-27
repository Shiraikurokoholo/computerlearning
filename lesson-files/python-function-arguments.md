# 位置参数、关键字参数和默认值

位置实参按顺序传值，关键字实参通过名字传值。省略 `goal` 时，函数使用默认目标 20。

## 逐行读代码

```python
def show_result(minutes, goal=20):
    print(minutes >= goal)

show_result(25)
show_result(25, 30)
show_result(goal=30, minutes=25)
```

1. `goal=20` 声明默认值，`minutes` 仍是必填。
2. 第一处调用只提供 25，用默认目标。
3. 第二处按位置传入 25 和 30。
4. 第三处按名字传值，可交换书写顺序。也可写成 `show_result(25, goal=30)`。

## 示例输入与输出

本例无需输入。

输出

```text
True
False
False
```

## 常见错误

必填的普通参数放在有默认值的参数前。调用时先写位置实参，再写关键字实参。`show_result(25, minutes=10)` 给同一个参数传了两遍。

## 动手练习

### 基础练习

把默认目标改成 30，预测三行输出。

### 进阶练习

故意漏传 `minutes`，再拼错 `goal`，分别找错误提示。

### 从空白文件写

写 `show_fee(price, quantity=1)`，打印总价。分别用默认值、两个位置实参、两个关键字实参调用。
