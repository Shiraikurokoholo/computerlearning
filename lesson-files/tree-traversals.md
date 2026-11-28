# 建树、递归遍历与层序

输入用 `#` 标记空结点，按「当前、左、右」读取。A 是根，B 和 C 是孩子，C、D、E 是叶。`walk` 把输出位置放在两次递归的前、中、后。以 B 为例，先序先访问 B，中序先走到 D，后序在 D 和 E 都返回后才访问 B。层序用前章已理解的队列。`destroy` 先释放孩子再释放自己。

## 逐行读代码

```cpp
#include <iostream>
#include <queue>

struct Node {
    char value;
    Node* left;
    Node* right;
};

Node* readTree() {
    char value;
    if (!(std::cin >> value) || value == '#') return nullptr;
    Node* left = readTree();
    Node* right = readTree();
    return new Node{value, left, right};
}

void walk(Node* root, int order) {
    if (!root) return;
    if (order == 0) std::cout << ' ' << root->value;
    walk(root->left, order);
    if (order == 1) std::cout << ' ' << root->value;
    walk(root->right, order);
    if (order == 2) std::cout << ' ' << root->value;
}

void levelOrder(Node* root) {
    std::queue<Node*> pending;
    if (root) pending.push(root);
    while (!pending.empty()) {
        Node* node = pending.front();
        pending.pop();
        std::cout << ' ' << node->value;
        if (node->left) pending.push(node->left);
        if (node->right) pending.push(node->right);
    }
}

void destroy(Node* root) {
    if (!root) return;
    destroy(root->left);
    destroy(root->right);
    delete root;
}

int main() {
    Node* root = readTree();
    const char* labels[] = {"先序", "中序", "后序"};
    for (int order = 0; order < 3; ++order) {
        std::cout << labels[order];
        walk(root, order);
        std::cout << '\n';
    }
    std::cout << "层序";
    levelOrder(root);
    std::cout << '\n';
    destroy(root);
}
```

## 示例输入与输出

```text
A B D # # E # # C # #
```

输出

```text
先序 A B D E C
中序 D B E A C
后序 D E B C A
层序 A B C D E
```

## 常见错误

递归先判空。层序先取 `front()`，再 `pop()`。本练习约定输入是完整的先序表示，每个结点都有左、右两段。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `#`，预期为 `先序 / 中序 / 后序 / 层序`。

### 进阶练习

从空文件分别写三个递归函数再合成程序。加一个 `height`，空树为 0，结点高度是两棵子树的较大高度加 1。
