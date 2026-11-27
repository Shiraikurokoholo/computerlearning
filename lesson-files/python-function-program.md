# 从题意拆出完整程序

先写清输入和输出。第一行是练习时长，可为空。第二行是目标。然后分别实现读取、统计和展示。先尝试从空文件写，再用下方程序对照。

## 逐行读代码

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

main()
```

1. `parse_minutes()` 先把字符串变成整数列表。独立测试时，`parse_minutes("15 20 25")` 应得到 `[15, 20, 25]`。
2. `summarize()` 遍历时长，累加总和，遇到不低于目标的条目就加一次。`+=` 表示在变量的原值上加一个值。
3. `a if condition else b` 是一个会产生值的条件表达式。这里有记录就取最后一项，空列表就得到 `None`。也可以用普通 `if` 和 `else` 写。
4. `return total, latest, reached_count` 返回三项数据。`main()` 负责调用、拆包、输出。最后一行 `main()` 开始执行整个程序。

## 示例输入与输出

```text
15 20 25
20
```

输出

```text
总时长 60
最近一次 25
达标 2 次
```

## 常见错误

判断达标要用 `>=`。第二行输入即使在空记录时仍要读取。显示最近一项时检查 `None`，时长 0 也要保留。

## 动手练习

### 基础练习

试 `20` 和目标 `20`，确认刚好达标。

### 进阶练习

试第一行空、第二行 `20`，再试第一行 `0`、第二行 `0`，比较输出。

### 从空白文件写

写一个投篮成绩小程序。输入每轮命中数和目标，输出总命中数、最新一轮和达标轮数。先单测统计函数。
