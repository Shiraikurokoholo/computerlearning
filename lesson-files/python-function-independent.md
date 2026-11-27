# 从空文件写阅读页数统计

题目要求报告总页数、最近一次页数和达标次数。第一行是一排非负整数或空行，第二行是目标。先手算 `8 12 10` 和目标 `10`，然后开一个空文件。提示顺序是先确定函数的参数与返回值，再写循环，最后处理空列表。

## 逐行读代码

```python
def read_pages():
    pages = []
    for word in input().split():
        pages.append(int(word))
    return pages

def reading_stats(pages, goal):
    total = 0
    reached = 0
    for number in pages:
        total += number
        if number >= goal:
            reached += 1
    latest = pages[-1] if pages else None
    return total, latest, reached

def main():
    pages = read_pages()
    goal = int(input())
    total, latest, reached = reading_stats(pages, goal)
    print(f"总页数 {total}")
    if latest is None:
        print("暂无记录")
    else:
        print(f"最近一次 {latest} 页")
    print(f"达标 {reached} 次")

main()
```

1. `read_pages()` 处理输入转换。
2. `reading_stats()` 只处理已经转换好的数据。它允许你用固定列表测试核心逻辑。
3. `main()` 读目标、拆包并输出。定位错误时，从回溯底部读异常名，再找最后一个指向自己文件的行号。

## 示例输入与输出

```text
8 12 10
10
```

输出

```text
总页数 30
最近一次 10 页
达标 2 次
```

## 常见错误

从空文件起步时，先跑通最小版本。忘记最后一行的 `main()` 可能造成程序正常结束却没有输出。输入格式错误会在异常课继续练。

## 动手练习

### 基础练习

写出 `reading_stats([8, 12, 10], 10)` 的预期返回值。

### 进阶练习

自己加一个只有一项且刚好达标的用例，再加空行用例。

### 从空白文件写

从空文件写完整版本。完成后额外输出未达标次数，并说明如何用列表长度和达标次数计算。
