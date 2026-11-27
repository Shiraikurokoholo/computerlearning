# 综合练习：练习记录器

这道综合题把输入、条件、循环、容器、函数、文件和异常连起来。输入固定三行，每行用空格隔开主题和分钟数。先用两条同主题、另一条不同主题手算。原始记录有三条，按主题统计后有两条，文件读回的是三条原始记录。

## 逐行读代码

完整程序在编辑区，也可单独运行 `examples/python_practice_tracker.py`。

```python
from pathlib import Path
from tempfile import TemporaryDirectory

# 每行是一个主题和一个正整数，示例读三行。
def read_records():
    records = []
    for turn in range(3):
        parts = input().split()
        if len(parts) != 2:
            print("跳过格式错误的记录")
            continue
        topic, text = parts
        try:
            minutes = int(text)
        except ValueError:
            print("跳过无效分钟数")
            continue
        if minutes <= 0:
            print("跳过无效分钟数")
            continue
        records.append((topic, minutes))
    return records

def total_by_topic(records):
    totals = {}
    for topic, minutes in records:
        totals[topic] = totals.get(topic, 0) + minutes
    return totals

records = read_records()
totals = total_by_topic(records)
grand_total = 0
for topic in totals:
    print(f"{topic} {totals[topic]} 分钟")
    grand_total = grand_total + totals[topic]
print(f"总计 {grand_total} 分钟")

# 把原始记录写入临时文件，再逐行读回核对。
with TemporaryDirectory(dir=".") as folder:
    path = Path(folder) / "records.txt"
    with open(path, "w", encoding="utf-8") as output_file:
        for topic, minutes in records:
            output_file.write(f"{topic} {minutes}\n")
    print("读回原始记录")
    with open(path, "r", encoding="utf-8") as input_file:
        for line in input_file:
            print(line.strip())
```

1. `read_records()` 循环读三行。`split()` 后必须恰好有两项，才进行拆包。
2. `try` 转换分钟字段。格式有误、分钟无法转成整数或分钟数不大于 0 时，用 `continue` 跳过当前行。合格的记录以元组追加到列表，最后返回整张列表。
3. `total_by_topic()` 逐条拆包，为同名主题加上分钟数。`get(topic, 0)` 给第一次出现的主题提供起始值。
4. 主程序先调用两个函数，再遍历汇总字典。它同时打印分项和总计。
5. 外层 `with` 建立临时目录，`w` 模式逐条写原始记录，`r` 模式逐行读回。临时文件在程序结束时清理。

## 示例输入与输出

输入

```text
数组 20
循环 10
数组 15
```

输出

```text
数组 35 分钟
循环 10 分钟
总计 45 分钟
读回原始记录
数组 20
循环 10
数组 15
```

## 常见错误

- 三条记录应分三行输入。每行的主题是一个词，分钟数是正整数。
- 文件应该遍历 `records`，这样同一个主题的两条原始记录都会保留。汇总展示才使用 `totals`。

## 动手练习

### 基础练习

先运行默认输入，再替换任意一行为「循环 十」。检查该行是否跳过，其他记录是否仍能统计和读回。

### 进阶练习

在个人副本中让程序先读取要录入的条数，再改第一个循环。完成后，可以试着把元组改成 `Record` 对象，并通过 `.topic` 和 `.minutes` 取值。
