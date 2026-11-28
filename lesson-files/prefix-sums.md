# 前缀和与区间查询

先读元素数量和元素。`prefix[k]` 记录前 k 项的总和。每个查询输入左闭右开区间 `[left, right)`。用较长前缀减掉较短的前缀，每次只需一次减法。

## 逐行读代码

```cpp
#include <iostream>

int main() {
    long long prefix[101]{};
    int n;
    if (!(std::cin >> n) || n < 0 || n > 100) return 0;
    for (int i = 0; i < n; ++i) {
        int value;
        if (!(std::cin >> value)) return 0;
        prefix[i + 1] = prefix[i] + value;
    }
    int left, right;
    while (std::cin >> left >> right) {
        if (left < 0 || right < left || right > n) std::cout << "无效区间\n";
        else std::cout << prefix[right] - prefix[left] << '\n';
    }
}
```

## 示例输入与输出

```text
4 10 20 -5 30
1 4
0 4
2 2
```

输出

```text
45
55
0
```

## 常见错误

前缀表要多一格来存零项总和。查询先验证 `0 <= left <= right <= n`。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0 / 0 0 / 0 1`，预期为 `0 / 无效区间`。

### 进阶练习

从空文件实现多次区间求和，对照直接循环的结果。试负数、空区间和越界。
