# 最小堆与优先队列

数组按层存二叉树。新值放到末尾后和父结点比较并上移。取走堆顶时用末项补位，再和较小的孩子交换。堆顶读取为常数时间，上移和下移至多走树高。

## 逐行读代码

```cpp
#include <iostream>
#include <utility>

void push(int heap[], int& size, int value) {
    int i = size++;
    heap[i] = value;
    while (i > 0) {
        int parent = (i - 1) / 2;
        if (heap[parent] <= heap[i]) break;
        std::swap(heap[parent], heap[i]);
        i = parent;
    }
}

int pop(int heap[], int& size) {
    int result = heap[0];
    heap[0] = heap[--size];
    int i = 0;
    while (2 * i + 1 < size) {
        int child = 2 * i + 1;
        if (child + 1 < size && heap[child + 1] < heap[child]) ++child;
        if (heap[i] <= heap[child]) break;
        std::swap(heap[i], heap[child]);
        i = child;
    }
    return result;
}

int main() {
    int heap[100], size = 0, n, value;
    if (!(std::cin >> n) || n < 0 || n > 100) return 0;
    for (int i = 0; i < n; ++i) {
        if (!(std::cin >> value)) return 0;
        push(heap, size, value);
    }
    if (size == 0) std::cout << "空堆\n";
    while (size > 0) std::cout << pop(heap, size) << '\n';
}
```

## 示例输入与输出

```text
4 30 10 40 20
```

输出

```text
10
20
30
40
```

## 常见错误

空堆不能取堆顶。访问右孩子前检查下标。只有 `i > 0` 时才求父结点位置。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0`，预期为 `空堆`。

### 进阶练习

从空文件实现容量为 8 的任务优先队列，读入优先级并按小到大依次取出，再用标准库版对照。
