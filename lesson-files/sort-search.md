# 从插入排序到二分查找

排序每轮把当前值插进前面已排好的区间。比较使用 `>`，所以同值元素的相对顺序保持原样。二分在 `[left,right)` 中找第一个不小于目标的位置，核对找到的位置是否相等。插入排序逆序时搬动最多，二分每轮缩小约一半。

## 逐行读代码

```cpp
#include <iostream>

void insertionSort(int data[], int n) {
    for (int i = 1; i < n; ++i) {
        int value = data[i], j = i;
        while (j > 0 && data[j - 1] > value) {
            data[j] = data[j - 1];
            --j;
        }
        data[j] = value;
    }
}

int firstMatch(const int data[], int n, int target) {
    int left = 0, right = n;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (data[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left < n && data[left] == target ? left : -1;
}

int main() {
    int data[100], n;
    if (!(std::cin >> n) || n < 0 || n > 100) return 0;
    for (int i = 0; i < n; ++i) if (!(std::cin >> data[i])) return 0;
    insertionSort(data, n);
    std::cout << "排序";
    for (int i = 0; i < n; ++i) std::cout << ' ' << data[i];
    std::cout << '\n';
    int target;
    while (std::cin >> target) std::cout << firstMatch(data, n, target) << '\n';
}
```

## 示例输入与输出

```text
4 30 10 20 20
30 99 20
```

输出

```text
排序 10 20 20 30
3
-1
1
```

## 常见错误

搜索前确认有序。检查 `left < n` 后再读 `data[left]`。返回的下标属于排序后的数组。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0 / 99`，预期为 `排序 / -1`。

### 进阶练习

从空文件写顺序查找和二分查找，再用选择排序和冒泡排序替换排序函数。给相同数值加标签，比较稳定性。
