# 输入转换、遍历和文件工具

先看工具操作的数据，再看调用后交回的值或对原数据的改动。

## 逐行读代码

```python
names = ["小林", "小陈"]
pages = [int(word) for word in "8 12".split()]
for index, pair in enumerate(zip(names, pages), start=1):
    name, count = pair
    print(index, name, count)
print("有人达到目标", any(count >= 10 for count in pages))
print("全部达到目标", all(count >= 10 for count in pages))
```

| 用途 | 常用写法 |
| --- | --- |
| 输入输出 | `input()` 读一行文字，`print()` 显示结果 |
| 转换类型 | `int()`、`float()`、`str()`、`bool()`、`list()`、`tuple()`、`dict()`、`set()` |
| 遍历 | `range(1, 4)` 依次提供 1、2、3，`enumerate()` 同时取编号与元素，`zip()` 逐项配对 |
| 判断 | `any()` 至少一项为真，`all()` 每一项都为真 |
| 查类型和帮助 | `type(x)`、`isinstance(x, int)`、`help(list.append)` |
| 文件读写 | `with open("notes.txt", encoding="utf-8") as file:`，在块内用 `file.read()`、`file.readline()`；写入模式可用 `file.write(text)` |

第一行准备姓名，第二行把每段输入转成整数。循环用 `zip()` 配对数据，`enumerate(..., start=1)` 从 1 编号。括号里的 `count >= 10 for count in pages` 依次产生真假值，再交给 `any()` 或 `all()`。

## 示例输入与输出

本例无需输入。

```text
1 小林 8
2 小陈 12
有人达到目标 True
全部达到目标 False
```

## 常见错误

两组长度不同时，`zip()` 在较短的那组结束时停止。`bool("False")` 为真，因为它是非空字符串。`all([])` 为真，统计时可另外判断有没有记录。

### 基础练习

将页数改成 `10 11`，预测两个判断结果。

### 进阶练习

输入两行同等长度的姓名和成绩，编号显示每条记录。加上长度检查，处理两行项数不一致的输入。

## 完整的内置函数与可调用类型索引

按 Python 3.14 官方索引排列。对象方法和标准库模块另有各自的清单。

```text
abs, aiter, all, anext, any, ascii
bin, bool, breakpoint, bytearray, bytes
callable, chr, classmethod, compile, complex
delattr, dict, dir, divmod
enumerate, eval, exec
filter, float, format, frozenset
getattr, globals
hasattr, hash, help, hex
id, input, int, isinstance, issubclass, iter
len, list, locals
map, max, memoryview, min
next
object, oct, open, ord
pow, print, property
range, repr, reversed, round
set, setattr, slice, sorted, staticmethod, str, sum, super
tuple, type
vars, zip, __import__
```

[Python 内置函数官方文档](https://docs.python.org/3.14/library/functions.html)
