# 并查集、最小生成树与最短路

输入顶点数、边数，再逐行读两个下标和权重。Kruskal 从轻到重选边，用并查集判断两端是否已连通。Dijkstra 每轮选当前距离最近的未确定点，更新经它到各点的距离。`std::sort` 第三个参数是比较函数，`[](Edge a, Edge b){ ... }` 就地定义这个小函数。

## 逐行读代码

```cpp
#include <algorithm>
#include <iostream>

constexpr int limit = 8;
constexpr int inf = 100000000;
struct Edge { int u, v, weight; };

int root(int parent[], int x) {
    while (parent[x] != x) x = parent[x];
    return x;
}

int main() {
    Edge edges[28];
    int n, m;
    if (!(std::cin >> n >> m) || n < 1 || n > limit || m < 0 || m > 28) return 0;
    int graph[limit][limit];
    for (auto& row : graph) for (int& weight : row) weight = inf;
    for (int i = 0; i < m; ++i) {
        auto& edge = edges[i];
        if (!(std::cin >> edge.u >> edge.v >> edge.weight) ||
            edge.u < 0 || edge.u >= n || edge.v < 0 || edge.v >= n ||
            edge.weight < 0 || edge.weight > 10000) return 0;
        int& weight = graph[edge.u][edge.v];
        weight = graph[edge.v][edge.u] = std::min(weight, edge.weight);
    }
    std::sort(edges, edges + m, [](Edge a, Edge b) { return a.weight < b.weight; });
    int parent[limit], weight = 0, used = 0;
    for (int i = 0; i < n; ++i) parent[i] = i;
    for (int i = 0; i < m; ++i) {
        int a = root(parent, edges[i].u), b = root(parent, edges[i].v);
        if (a == b) continue;
        parent[b] = a;
        weight += edges[i].weight;
        ++used;
    }
    if (used == n - 1) std::cout << "生成树 " << weight << '\n';
    else std::cout << "不连通\n";

    bool visited[limit]{};
    int dist[limit];
    for (int& d : dist) d = inf;
    dist[0] = 0;
    for (int step = 0; step < n; ++step) {
        int u = -1;
        for (int i = 0; i < n; ++i) {
            if (!visited[i] && (u == -1 || dist[i] < dist[u])) u = i;
        }
        if (u == -1 || dist[u] == inf) break;
        visited[u] = true;
        for (int v = 0; v < n; ++v) {
            if (graph[u][v] != inf) dist[v] = std::min(dist[v], dist[u] + graph[u][v]);
        }
    }
    std::cout << "到末点 " << (dist[n - 1] == inf ? -1 : dist[n - 1]) << '\n';
}
```

## 示例输入与输出

```text
3 3
0 1 1
1 2 2
0 2 5
```

输出

```text
生成树 3
到末点 3
```

## 常见错误

生成树总权重比较的是选了哪些边，最短距离问的是一个起点到一个终点。Dijkstra 需要非负权重；选点时到所有剩余点的距离都为无穷就停止。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `3 1 / 0 1 0`，预期为 `不连通 / 到末点 -1`。

### 进阶练习

从空文件先只写并查集和选边，再单独完成最短路径。用有零权边和孤立点的图核对结果。
