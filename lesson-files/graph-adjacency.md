# 邻接矩阵与邻接表

矩阵里每一格回答两点有没有边。邻接表对每点仅保存邻居编号。这里用固定数组模拟邻接表。一般规模可用 `vector` 给每个顶点单独存邻居。

## 逐行读代码

```cpp
#include <iostream>

int main() {
    bool matrix[4][4]{};
    int neighbors[4][4]{}, count[4]{};
    int n;
    if (!(std::cin >> n) || n < 0 || n > 6) return 0;
    for (int i = 0; i < n; ++i) {
        char a, b;
        if (!(std::cin >> a >> b) || a < 'A' || a > 'D' || b < 'A' || b > 'D') return 0;
        matrix[a - 'A'][b - 'A'] = matrix[b - 'A'][a - 'A'] = true;
    }
    for (int u = 0; u < 4; ++u) {
        for (int v = 0; v < 4; ++v) if (matrix[u][v]) neighbors[u][count[u]++] = v;
        std::cout << char('A' + u);
        for (int i = 0; i < count[u]; ++i) std::cout << ' ' << char('A' + neighbors[u][i]);
        std::cout << '\n';
    }
}
```

## 示例输入与输出

```text
4 AB AC BD CD
```

输出

```text
A B C
B A D
C A D
D B C
```

## 常见错误

无向边在矩阵里有两格。有向边只记一个方向。每行的有效邻居数由 `count[u]` 保存。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0`，预期为 `A / B / C / D`。

### 进阶练习

从空文件直接按输入构造邻接表，再对同一组边输出两种表示。测试孤立点和重复输入。
