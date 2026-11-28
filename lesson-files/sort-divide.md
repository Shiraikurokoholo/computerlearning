# 分治排序与比较次数

归并先把区间拆半，回来后两个指针取各段较小项。相等先取左边，保留同值次序。快排用末尾元素作基准，把较小值搬到边界左侧，放好基准后递归处理两侧。归并共 O(n log n) 时间、O(n) 辅助数组。这里的快排遇到全相等或已排序输入可能每次只缩短一项，达到 O(n²)。

## 逐行读代码

```cpp
#include <iostream>
#include <utility>

void mergeSort(int data[], int scratch[], int left, int right) {
    if (right - left < 2) return;
    int mid = left + (right - left) / 2;
    mergeSort(data, scratch, left, mid);
    mergeSort(data, scratch, mid, right);
    int a = left, b = mid;
    for (int i = left; i < right; ++i) {
        if (b == right || (a < mid && data[a] <= data[b])) scratch[i] = data[a++];
        else scratch[i] = data[b++];
    }
    for (int i = left; i < right; ++i) data[i] = scratch[i];
}

void quickSort(int data[], int left, int right) {
    if (right - left < 2) return;
    int pivot = data[right - 1], boundary = left;
    for (int i = left; i + 1 < right; ++i) {
        if (data[i] < pivot) std::swap(data[i], data[boundary++]);
    }
    std::swap(data[boundary], data[right - 1]);
    quickSort(data, left, boundary);
    quickSort(data, boundary + 1, right);
}

int main() {
    int a[100], b[100], scratch[100], n;
    if (!(std::cin >> n) || n < 0 || n > 100) return 0;
    for (int i = 0; i < n; ++i) {
        if (!(std::cin >> a[i])) return 0;
        b[i] = a[i];
    }
    mergeSort(a, scratch, 0, n);
    quickSort(b, 0, n);
    std::cout << "归并";
    for (int i = 0; i < n; ++i) std::cout << ' ' << a[i];
    std::cout << "\n快排";
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
归并 10 20 20 30
快排 10 20 20 30
```

## 常见错误

快排第二段从 `boundary + 1` 开始。合并读取任意一段前，先检查该段还有元素。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0`，预期为 `归并 / 快排`。

### 进阶练习

从空文件先只写合并两段有序数组的函数，再接上递归。分别统计两种算法对逆序和全部相等数据的比较次数。
