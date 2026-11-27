# 写入、追加和再读取

要在现有记录后面添一条，用追加模式 `a`。要从头写一份文件，用 `w`。本例把两条练习记录放到临时文件，再读回来核对，原有文件无需参与。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_file_write.py`。

```python
from pathlib import Path
from tempfile import TemporaryDirectory

with TemporaryDirectory(dir=".") as folder:
    path = Path(folder) / "records.txt"
    # w 写入第一条，a 保留旧内容并追加第二条。
    with open(path, "w", encoding="utf-8") as records:
        records.write("数组 20\n")
    with open(path, "a", encoding="utf-8") as records:
        records.write("循环 10\n")

    total = 0
    with open(path, "r", encoding="utf-8") as records:
        for line in records:
            print(line.strip())
            parts = line.split()
            total = total + int(parts[1])

    print(f"合计 {total} 分钟")
```

1. 建临时目录，把 `path` 指向其中的 `records.txt`。
2. 用 `w` 打开文件并写第一条，字符串末尾的 `\n` 留出下一行。
3. 用 `a` 再次打开同一份文件，将第二条追加到末尾。
4. 用 `r` 逐行读出记录。`split()` 拆出主题和分钟文本，`parts[1]` 是第 2 项。
5. 用 `int()` 转换分钟数并累加，最后在文件读完后打印总计。

## 示例输入与输出

本例无需输入。

输出

```text
数组 20
循环 10
合计 30 分钟
```

## 常见错误

- 第二次也用 `w` 会覆盖第一条，只留下「循环 10」。
- `write()` 不会自动换行。少了第一条末尾的 `\n`，两条会连到一起。

## 动手练习

### 基础练习

运行默认示例，确认读回两条记录并合计 30 分钟。

### 进阶练习

在个人副本的临时文件示例里把第二次打开改成 `w`，预测读到几行和新的总计，再本地验证。

## 从空白文件写文本读写程序

在临时目录创建 UTF-8 文本。先写入用户输入的一行主题，再追加「已完成」。关闭后重新打开，逐行带编号输出。输入「数组」时，读回第 1 行「数组」和第 2 行「已完成」。如果两条粘在一起，检查写入内容里的换行。如果只剩第二条，检查第二次打开使用的模式。
