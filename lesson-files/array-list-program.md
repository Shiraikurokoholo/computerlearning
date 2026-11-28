# 从空文件写顺序表

输入数量和初始号码，第二行依次为插入下标、新值、删除下标、查找值。非法插入或删除时跳过该操作。先写查找，再写插入、删除，最后接上输入。插入要从尾部搬，删除要向前补。同样的数据移动 2 次或 3 次，可以用下标数出来。

## 逐行读代码

```cpp
#include <iostream>

int find(const int data[], int n, int value) {
    for (int i = 0; i < n; ++i) if (data[i] == value) return i;
    return -1;
}

int main() {
    const int capacity = 8;
    int data[capacity]{}, n;
    if (!(std::cin >> n) || n < 0 || n > capacity) return 0;
    for (int i = 0; i < n; ++i) if (!(std::cin >> data[i])) return 0;
    int position, value, removeAt, target;
    if (!(std::cin >> position >> value >> removeAt >> target)) return 0;
    if (position >= 0 && position <= n && n < capacity) {
        for (int i = n; i > position; --i) data[i] = data[i - 1];
        data[position] = value;
        ++n;
    }
    if (removeAt >= 0 && removeAt < n) {
        for (int i = removeAt; i + 1 < n; ++i) data[i] = data[i + 1];
        --n;
    }
    for (int i = 0; i < n; ++i) std::cout << data[i] << (i + 1 < n ? " " : "");
    if (n > 0) std::cout << '\n';
    std::cout << find(data, n, target) << '\n';
}
```

## 示例输入与输出

```text
4 10 20 30 40
2 99 0 99
```

输出

```text
20 99 30 40
1
```

## 常见错误

非空表最后一项在 `n - 1`。插入允许 `position == n`，读取和删除要求下标小于 `n`。查找失败时的 `-1` 不能当下标。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0 / 0 9 -1 9`，预期为 `9 / 0`。

### 进阶练习

把插入、删除各抽成函数，通过 `int& n` 更新表长。另写双指针合并两个有序表，输入 `[10, 30]` 和 `[20, 40]`，预期 `[10, 20, 30, 40]`。
