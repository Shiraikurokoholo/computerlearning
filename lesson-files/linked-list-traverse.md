# 顺着链接遍历

输入取用的结点数。先把固定结点串成链，再沿 `next` 前进。每访问一项就移动一次，空链表访问 0 次。固定数组只用于准备这组结点，遍历只使用链接。

## 逐行读代码

```cpp
#include <iostream>

struct Node {
    int value;
    Node* next;
};

int main() {
    Node nodes[3]{{10, nullptr}, {20, nullptr}, {30, nullptr}};
    int n;
    if (!(std::cin >> n) || n < 0 || n > 3) return 0;
    for (int i = 0; i + 1 < n; ++i) nodes[i].next = &nodes[i + 1];
    Node* current = n == 0 ? nullptr : &nodes[0];
    if (current == nullptr) std::cout << "空链表";
    while (current != nullptr) {
        std::cout << current->value;
        current = current->next;
        if (current != nullptr) std::cout << ' ';
    }
    std::cout << '\n';
}
```

## 示例输入与输出

```text
3
```

输出

```text
10 20 30
```

## 常见错误

应该判断当前指针是否为空，再读它。只检查 `current->next` 会漏掉尾结点，而且空表时无法安全访问。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `1`，预期为 `10`。

### 进阶练习

从空文件写 `find(Node* head, int target)`，遍历找到目标时返回其地址，找不到返回 `nullptr`。
