# 图的 DFS、BFS 与最短步数

输入顶点数、边数和每对顶点。邻接矩阵在两方向写 true。DFS 从每个未走过的起点继续探索。BFS 从 A 入队，发现邻居时记录距离。对 AB、AC、BD、CD，A 出队后队列为 B、C，随后经 B 发现 D。矩阵逐行扫描的上界为 O(V²)，邻接表可直接遍历邻居，单次全图遍历为 O(V+E)。

## 逐行读代码

```cpp
#include <iostream>

constexpr int limit = 26;

void dfs(const bool edges[][limit], int n, int u, bool visited[]) {
    visited[u] = true;
    std::cout << ' ' << char('A' + u);
    for (int v = 0; v < n; ++v) {
        if (edges[u][v] && !visited[v]) dfs(edges, n, v, visited);
    }
}

int main() {
    bool edges[limit][limit]{}, visited[limit]{};
    int n, m;
    if (!(std::cin >> n >> m) || n < 1 || n > limit || m < 0 || m > limit * limit) return 0;
    for (int i = 0; i < m; ++i) {
        char a, b;
        if (!(std::cin >> a >> b) || a < 'A' || a >= 'A' + n || b < 'A' || b >= 'A' + n) return 0;
        edges[a - 'A'][b - 'A'] = edges[b - 'A'][a - 'A'] = true;
    }
    std::cout << "DFS";
    for (int u = 0; u < n; ++u) if (!visited[u]) dfs(edges, n, u, visited);
    std::cout << "\nBFS";
    int queue[limit]{0}, front = 0, tail = 1;
    int distance[limit];
    for (int& d : distance) d = -1;
    distance[0] = 0;
    while (front < tail) {
        int u = queue[front++];
        std::cout << ' ' << char('A' + u);
        for (int v = 0; v < n; ++v) {
            if (edges[u][v] && distance[v] == -1) {
                distance[v] = distance[u] + 1;
                queue[tail++] = v;
            }
        }
    }
    std::cout << "\n到末点 " << distance[n - 1] << '\n';
}
```

## 示例输入与输出

```text
4 4
AB AC BD CD
```

输出

```text
DFS A B D C
BFS A B C D
到末点 2
```

## 常见错误

BFS 应在入队时标记，避免重复入队。`-1` 表示从 A 不可达。单向边只写一个方向。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `5 4 / AB AC BD CD`，预期为 `DFS A B D C E / BFS A B C D / 到末点 -1`。

### 进阶练习

从空文件写最短步数查询，加 `parent[v] = u` 并沿父结点还原路径。另用邻接表保存同一幅图，对照两种表示的访问次数。
