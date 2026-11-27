# 局部变量与列表修改

每次调用都有自己的局部名字。但函数里的 `items` 和外面的 `original` 可以指向同一份列表。

## 逐行读代码

```python
def add_on_copy(items, minutes):
    result = items.copy()
    result.append(minutes)
    return result

def add_in_place(items, minutes):
    items.append(minutes)

original = [10]
print(add_on_copy(original, 20))
print(original)
add_in_place(original, 30)
print(original)
```

| 调用 | 内部操作 | 外面的 original |
| --- | --- | --- |
| `add_on_copy` | 复制后追加，返回新列表 | `[10]` |
| `add_in_place` | 直接向收到的列表追加 | `[10, 30]` |

`items = []` 只给局部名字重新赋值。`items.append(...)` 则会修改该名字当前指向的列表。

## 示例输入与输出

本例无需输入。

输出

```text
[10, 20]
[10]
[10, 30]
```

## 常见错误

`append()` 返回 `None`，别把它的返回值当列表。默认写成 `items=[]` 会在多次调用间共用列表。要每次新建，可用 `items=None`，在函数内用 `if items is None:` 检查后创建空列表。

## 动手练习

### 基础练习

再调用一次 `add_on_copy`，观察返回值与原列表。

### 进阶练习

把 `result = items.copy()` 改成 `result = items`，解释原列表为何也变。

### 从空白文件写

写 `add_bonus(scores, bonus)`，用循环生成加分后的新列表。连续调用两次，核对旧分数。
