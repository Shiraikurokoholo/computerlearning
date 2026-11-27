# 用类创建练习记录

类描述一种对象有哪些数据。可以把 `Record` 想成记录表的样式，把 `first` 和 `second` 想成分别填好的两张表。两条记录分别保管自己的主题和分钟数。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_class_record.py`。

```python
# 每条记录都有自己的主题和分钟数。
class Record:
    def __init__(self, topic, minutes):
        self.topic = topic
        self.minutes = minutes

first = Record("数组", 20)
second = Record("循环", 10)
first.minutes = 25

print(f"{first.topic} {first.minutes}")
print(f"{second.topic} {second.minutes}")
```

1. `class Record:` 定义一种记录对象。
2. 创建记录时，Python 会为新对象调用 `__init__()`。参数 `self` 表示当前这条记录。
3. `self.topic` 和 `self.minutes` 把传入的值保存为当前记录的属性。属性可以通过对象名加句点读取。
4. 两次调用 `Record(...)` 分别建立两条记录，后面的赋值只改 `first.minutes`。
5. 分别打印两条记录，看到第二条仍然是 10。

## 示例输入与输出

本例无需输入。

输出

```text
数组 25
循环 10
```

## 常见错误

- 写成 `minutes = minutes` 只会用到参数名，之后通过对象访问不到它。实例属性需要 `self.minutes`。
- `first.minutes` 与 `second.minutes` 各自存值，改前者时另一条保持原值。

## 动手练习

### 基础练习

把第二条的时间改成 12，核对第一条仍是 25。

### 进阶练习

再创建「树 15」这一条记录，按三行输出。预测三条分别储存了什么。
