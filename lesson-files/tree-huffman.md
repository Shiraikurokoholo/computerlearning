# 哈夫曼树的构造与编码

先手算 `2+3=5`、`5+7=12`、`9+12=21`。每轮选择两个尚未合并的最轻结点，写入新父结点。向左、向右分别追加 0 和 1。相同权重按结点编号先后选。单叶约定编码为 0。

## 逐行读代码

```cpp
#include <algorithm>
#include <iostream>
#include <string>

struct Node {
    int weight;
    int left;
    int right;
    bool pending;
};

int takeSmallest(Node nodes[], int count) {
    int best = -1;
    for (int i = 0; i < count; ++i) {
        if (nodes[i].pending && (best == -1 || nodes[i].weight < nodes[best].weight)) best = i;
    }
    nodes[best].pending = false;
    return best;
}

void encode(const Node nodes[], int index, const std::string& prefix, std::string codes[]) {
    if (nodes[index].left == -1) {
        codes[index] = prefix.empty() ? "0" : prefix;
        return;
    }
    encode(nodes, nodes[index].left, prefix + '0', codes);
    encode(nodes, nodes[index].right, prefix + '1', codes);
}

int main() {
    Node nodes[15]{};
    std::string codes[8];
    int n;
    if (!(std::cin >> n) || n < 1 || n > 8) return 0;
    for (int i = 0; i < n; ++i) {
        int weight;
        if (!(std::cin >> weight) || weight < 1 || weight > 10000) return 0;
        nodes[i] = {weight, -1, -1, true};
    }
    int count = n;
    while (count < 2 * n - 1) {
        int left = takeSmallest(nodes, count);
        int right = takeSmallest(nodes, count);
        int weight = nodes[left].weight + nodes[right].weight;
        nodes[count++] = {weight, left, right, true};
        std::cout << "合并 " << weight << '\n';
    }
    encode(nodes, count - 1, "", codes);
    for (int i = 0; i < n; ++i) std::cout << i << ' ' << codes[i] << '\n';
}
```

## 示例输入与输出

```text
4 2 3 7 9
```

输出

```text
合并 5
合并 12
合并 21
0 100
1 101
2 11
3 0
```

## 常见错误

取出结点后需要标记为已用。同权重可以有不同的有效编码，核对应使用同一约定。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `1 2`，预期为 `0 0`。

### 进阶练习

从空文件实现合并过程，再独立写递归编码。学完堆后，可用优先队列替代每次扫描。
