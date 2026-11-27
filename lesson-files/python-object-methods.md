# 让对象更新自己的数据

给记录加时间可以封装成方法。`first.add_minutes(5)` 可以读成「请第一条记录给自己再加 5 分钟」。同一个方法还能用于第二条记录。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_object_methods.py`。

```python
class Record:
    def __init__(self, topic, minutes):
        self.topic = topic
        self.minutes = minutes

    def add_minutes(self, extra):
        # 只把正数加到当前对象。
        if extra > 0:
            self.minutes = self.minutes + extra

first = Record("数组", 20)
second = Record("循环", 10)
first.add_minutes(5)
second.add_minutes(2)

print(f"{first.topic} {first.minutes}")
print(f"{second.topic} {second.minutes}")
```

1. `__init__()` 仍然负责保存新对象的初始属性。
2. `add_minutes(self, extra)` 定义实例方法。通过 `first.add_minutes(5)` 调用时，Python 把 `first` 交给 `self`，把 `5` 交给 `extra`。
3. `if extra > 0` 只允许正数增加时间。更新的是当前对象的 `self.minutes`。
4. 两个对象分别调用方法，最后分别输出各自的属性。

## 示例输入与输出

本例无需输入。

输出

```text
数组 25
循环 12
```

## 常见错误

- 写成 `first.add_minutes(first, 5)` 会多传一个参数。点号左边的对象已由 Python 传给 `self`。
- 更新的是 `self.minutes`。若另建一个局部变量 `minutes`，对象上的值不会跟着变。

## 动手练习

### 基础练习

在打印前让 `first` 再增加 3 分钟。检查第二条仍为 12。

### 进阶练习

将两条记录放进列表，在循环里让每一条都增加 1 分钟。再试传 0 和 -1，验证方法的判断。
