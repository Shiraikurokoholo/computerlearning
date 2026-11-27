# 处理找不到文件

打开记录时，文件可能还没有建立。可以针对这个情形处理 `FileNotFoundError`。本例用同样的固定文件名，在新的临时目录里分别模拟文件存在与缺失。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_file_errors.py`。

```python
from pathlib import Path
from tempfile import TemporaryDirectory

# 输入 1 创建文件，输入 0 模拟文件缺失。
create_file = input().strip() == "1"
with TemporaryDirectory(dir=".") as folder:
    path = Path(folder) / "records.txt"
    if create_file:
        path.write_text("数组 20\n", encoding="utf-8")

    try:
        with open(path, "r", encoding="utf-8") as records:
            print(records.readline().strip())
    except FileNotFoundError:
        print("找不到记录文件")
```

1. 读取 `1` 或 `0`。与 `"1"` 比较的结果决定是否提前准备样本。
2. 外层 `with` 建立临时目录。仅在需要时创建 `records.txt`。
3. 尝试用 `r` 模式打开文件，`readline()` 读第一行，用 `strip()` 去掉换行。
4. 文件缺失时，`open()` 抛出 `FileNotFoundError`，对应的 `except` 输出说明。

## 示例输入与输出

输入

```text
1
```

输出

```text
数组 20
```

## 常见错误

- 把 `open()` 放在 `try` 前面，打开阶段的异常就不会被这一段捕获。
- 缺文件、权限不足、编码不符是不同问题。本例只处理缺文件。

## 动手练习

### 基础练习

分别输入 1、0，指出文件在什么时候被创建，什么时候会进入 `except`。

### 进阶练习

在个人副本中，准备样本时写入两个不同主题，然后用逐行循环打印。再输入 0，核对缺失提示。
