# 拓扑排序与依赖环

`AB` 表示先 A 后 B。入度数还没处理的前置任务数。先收集入度为零的任务，处理后给后继的计数减一。队列走完仍有任务就说明有环。

## 逐行读代码

```cpp
#include <iostream>

int main() {
    constexpr int limit = 26;
    bool edge[limit][limit]{};
    int degree[limit]{}, pending[limit], n, m;
    if (!(std::cin >> n >> m) || n < 1 || n > limit || m < 0 || m > limit * limit) return 0;
    for (int i = 0; i < m; ++i) {
        char a, b;
        if (!(std::cin >> a >> b) || a < 'A' || a >= 'A' + n || b < 'A' || b >= 'A' + n) return 0;
        int u = a - 'A', v = b - 'A';
        if (!edge[u][v]) {
            edge[u][v] = true;
            ++degree[v];
        }
    }
    int front = 0, tail = 0;
    for (int u = 0; u < n; ++u) if (degree[u] == 0) pending[tail++] = u;
    while (front < tail) {
        int u = pending[front++];
        for (int v = 0; v < n; ++v) {
            if (edge[u][v] && --degree[v] == 0) pending[tail++] = v;
        }
    }
    if (tail < n) std::cout << "存在依赖环\n";
    else {
        std::cout << "顺序";
        for (int i = 0; i < n; ++i) std::cout << ' ' << char('A' + pending[i]);
        std::cout << '\n';
    }
}
```

## 示例输入与输出

```text
3 2
AB BC
```

输出

```text
顺序 A B C
```

## 常见错误

只在入度刚变为零时入队。重复边在这个矩阵表示里只算一次。可能存在多种合法的拓扑顺序。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `3 3 / AB BC CA`，预期为 `存在依赖环`。

### 进阶练习

从空文件写一个按编号处理课程依赖的程序，另外测有多个可用任务和自环的情况。
