# 二叉搜索树的查找与删除

左边的键较小，右边的键较大，重复插入忽略。删除无孩子或仅有一个孩子的结点时交回替代它的指针。两个孩子都在时，取右子树最小键填到当前位置，再删除原来的那个键。查找时间取决于树高。

## 逐行读代码

```cpp
#include <iostream>

struct Node {
    int key;
    Node* left;
    Node* right;
};

Node* insert(Node* node, int key) {
    if (!node) return new Node{key, nullptr, nullptr};
    if (key < node->key) node->left = insert(node->left, key);
    if (key > node->key) node->right = insert(node->right, key);
    return node;
}

Node* erase(Node* node, int key) {
    if (!node) return nullptr;
    if (key < node->key) node->left = erase(node->left, key);
    else if (key > node->key) node->right = erase(node->right, key);
    else if (!node->left || !node->right) {
        Node* child = node->left ? node->left : node->right;
        delete node;
        return child;
    } else {
        Node* next = node->right;
        while (next->left) next = next->left;
        node->key = next->key;
        node->right = erase(node->right, next->key);
    }
    return node;
}

void showAndFree(Node* node) {
    if (!node) return;
    showAndFree(node->left);
    std::cout << ' ' << node->key;
    showAndFree(node->right);
    delete node;
}

int main() {
    Node* root = nullptr;
    for (int key : {30, 10, 40, 20}) root = insert(root, key);
    int key;
    if (std::cin >> key) {
        std::cout << "路径";
        Node* node = root;
        while (node) {
            std::cout << ' ' << node->key;
            if (node->key == key) break;
            node = key < node->key ? node->left : node->right;
        }
        std::cout << (node ? " 找到\n" : " 未找到\n");
        root = erase(root, key);
    }
    std::cout << "剩余";
    showAndFree(root);
    std::cout << '\n';
}
```

## 示例输入与输出

```text
20
```

输出

```text
路径 30 10 20 找到
剩余 10 30 40
```

## 常见错误

根结点删除后可能改变，调用处需要接住返回值。右子树最小键要沿左链接找。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `30`，预期为 `路径 30 找到 / 剩余 10 20 40`。

### 进阶练习

从空文件实现构建和查找，再加入三种删除用例。按递增顺序插入并画出退化后的形状。
