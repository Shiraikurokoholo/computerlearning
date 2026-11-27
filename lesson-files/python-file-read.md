# 读一份 UTF-8 文本

逐行读文本适合处理一行一条的记录。本例自动准备一份 UTF-8 临时文本，内容是「数组 20」和「循环 10」。`records.txt` 这样的相对文件名要结合程序的当前工作目录来找。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_file_read.py`。

```python
from pathlib import Path
from tempfile import TemporaryDirectory

# 先准备一份可重复使用的临时样本。
with TemporaryDirectory(dir=".") as folder:
    path = Path(folder) / "records.txt"
    path.write_text("数组 20\n循环 10\n", encoding="utf-8")

    with open(path, "r", encoding="utf-8") as records:
        for line in records:
            print(line.strip())
```

1. 开头导入 `Path` 和 `TemporaryDirectory`。外层 `with` 在当前目录 `.` 创建临时子目录，结束时清理它。`Path(folder) / "records.txt"` 把目录和文件名拼成路径。
2. `write_text()` 为例子准备文件。引号里的 `\n` 表示换行，真实文件有两行。
3. `with open(path, "r", encoding="utf-8") as records` 用 UTF-8 打开文件读取，退出这段缩进后自动关闭文件。
4. `for line in records` 每轮读一行。读到的行常含末尾换行，`strip()` 去掉两端空白后，`print()` 自己再加换行。

## 示例输入与输出

本例无需输入。

输出

```text
数组 20
循环 10
```

## 常见错误

- 相对路径从程序的当前工作目录解释，可能跟脚本所在文件夹不同。
- 读取和写入应约定同一种编码，中文示例统一用 `encoding="utf-8"`。

## 动手练习

### 基础练习

把准备样本的 `write_text()` 中的文字改成空字符串，在本地运行，检查循环执行几轮。

### 进阶练习

在循环前加一个计数变量，每读一行就加 1，最后输出总行数。
