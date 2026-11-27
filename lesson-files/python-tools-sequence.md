# 列表与元组操作

先看工具操作的数据，再看调用后交回的值或对原数据的改动。

## 逐行读代码

```python
pages = [8, 12, 10]
pages.append(5)
pages.extend([6, 7])
last = pages.pop()
ordered = pages.copy()
ordered.sort()
print("取出的元素", last)
print("现在的列表", pages)
print("排序后的副本", ordered)
```

| 操作 | 列表方法 |
| --- | --- |
| 添加 | `append(x)` 加一项，`extend(items)` 逐项加，`insert(i, x)` 在指定位置前插入 |
| 删除 | `remove(x)` 删除第一个匹配的值，`pop(i)` 删除并返回该下标的值，`clear()` 清空 |
| 查找 | `index(x)` 找第一个匹配值的下标，`count(x)` 数匹配项 |
| 整理 | `sort()` 就地排序，`reverse()` 就地逆序，`copy()` 复制外层列表 |

`pop()` 省略下标时取最后一项。代码先追加，再取最后一项，最后只对复制出的列表排序。元组也有 `count()` 和 `index()`，元素位置在创建后固定。

## 示例输入与输出

本例无需输入。

```text
取出的元素 7
现在的列表 [8, 12, 10, 5, 6]
排序后的副本 [5, 6, 8, 10, 12]
```

## 常见错误

`append()` 和 `sort()` 改原列表，返回的是 `None`。`pages.append([6, 7])` 会把整个列表作为一个元素。`remove(x)` 和 `index(x)` 找不到时会报错。

### 基础练习

把 `extend([6, 7])` 换为两个单独的 `append()`，比较输出。

### 进阶练习

从空文件写一个取出并显示最近记录的程序，分别测试空列表和只有一项的列表。
