# 选择排序与冒泡排序

选择排序每轮从未排序区扫描出最小项，最多交换一次。冒泡每轮比较相邻项，把本轮最大项一路送到右端。冒泡的一轮如果没有交换，就已经有序。这两种排序的最坏比较次数都与 n² 同阶。

## 逐行读代码

```cpp
#include <iostream>
#include <utility>

void selection(int values[], int n) {
    for (int i = 0; i < n; ++i) {
        int smallest = i;
        for (int j = i + 1; j < n; ++j) {
            if (values[j] < values[smallest]) smallest = j;
        }
        if (smallest != i) std::swap(values[i], values[smallest]);
    }
}

void bubble(int values[], int n) {
    for (int end = n; end > 1; --end) {
        bool changed = false;
        for (int i = 1; i < end; ++i) {
            if (values[i - 1] > values[i]) {
                std::swap(values[i - 1], values[i]);
                changed = true;
            }
        }
        if (!changed) return;
    }
}

int main() {
    int a[100], b[100], n;
    if (!(std::cin >> n) || n < 0 || n > 100) return 0;
    for (int i = 0; i < n; ++i) {
        if (!(std::cin >> a[i])) return 0;
        b[i] = a[i];
    }
    selection(a, n);
    bubble(b, n);
    std::cout << "选择";
    for (int i = 0; i < n; ++i) std::cout << ' ' << a[i];
    std::cout << "\n冒泡";
    for (int i = 0; i < n; ++i) std::cout << ' ' << b[i];
    std::cout << '\n';
}
```

## 示例输入与输出

```text
4 30 10 20 20
```

输出

```text
选择 10 20 20 30
冒泡 10 20 20 30
```

## 常见错误

选择排序在内层只更新最小下标，结束后才交换。冒泡排序只交换严格逆序的相邻项。用带编号的 `[2A, 2B, 1]` 手推，选择排序的第一次交换会改变两个 2 的顺序。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0`，预期为 `选择 / 冒泡`。

### 进阶练习

从空文件增加比较和交换计数，分别使用升序、降序及相等元素输入。说明每个计数在哪里更新。
