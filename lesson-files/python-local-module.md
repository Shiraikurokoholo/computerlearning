# 把函数放进另一个文件

先完成单文件的练习时长统计器，再把计算函数搬进 `study_minutes.py`。入口文件保留输入和输出。在项目根目录执行 `python examples/python_local_module.py`。在线版已配好两个文件，可直接运行。

## 逐行读代码

```python
from study_minutes import parse_minutes, summarize

def main():
    minutes = parse_minutes(input())
    goal = int(input())
    total, latest, reached_count = summarize(minutes, goal)
    print(f"总时长 {total}")
    if latest is None:
        print("暂无记录")
    else:
        print(f"最近一次 {latest}")
    print(f"达标 {reached_count} 次")

if __name__ == "__main__":
    main()
```

1. `from study_minutes import parse_minutes, summarize` 把模块中的两个名字带入当前文件。导入时省略 `.py`。
2. `main()` 负责读入两行、调用函数、拆包并展示统计结果。
3. `if __name__ == "__main__":` 只在直接运行入口文件时调用 `main()`。从其他文件导入它时，函数会被定义，输入输出不会自动开始。
4. 也可以写 `import study_minutes`，调用 `study_minutes.summarize(...)`。此时需要给两个计算函数的调用都加上模块名。

把下面的代码保存为同目录的 `study_minutes.py`，就能从空文件复现这份练习。

```python
def parse_minutes(text):
    minutes = []
    for word in text.split():
        minutes.append(int(word))
    return minutes

def summarize(minutes, goal):
    total = 0
    reached_count = 0
    for duration in minutes:
        total += duration
        if duration >= goal:
            reached_count += 1
    latest = minutes[-1] if minutes else None
    return total, latest, reached_count

def to_hours(total_minutes):
    return total_minutes // 60, total_minutes % 60
```

## 示例输入与输出

```text
15 20 25
20
```

```text
总时长 60
最近一次 25
达标 2 次
```

## 常见错误

`ModuleNotFoundError` 时查模块文件名和位置。`ImportError` 时查模块中是否真的定义了那个函数。`NameError` 时对照调用名和导入语句。直接在模块顶层写 `input()` 会让别人导入时也需要输入。自己创建的 `math.py` 也可能与标准库同名。

## 动手练习

### 基础练习

先输入 `15 20 25` 和目标 `20`，再试空列表与单独的 `0`。

### 进阶练习

把两处调用改为通过模块名访问。在同目录创建 `verify.py`，导入入口模块并检查导入过程没有读取输入。

### 从空白文件写

把上一课自己写的阅读页数程序拆成 `reading.py` 和 `main.py`，用普通导入与别名导入各跑一次。
