# 单链表插入、删除与释放

输入目标结点值和新值。先查目标，再保存旧后继并接入新结点。随后删首结点并遍历清理。查找可能看完整条链。已知目标地址后，接入只改固定次数的链接。

## 逐行读代码

```cpp
#include <iostream>

struct Node {
    int value;
    Node* next;
};

int main() {
    int target, value;
    if (!(std::cin >> target >> value)) return 0;
    Node* head = new Node{10, new Node{20, new Node{30, nullptr}}};
    Node* current = head;
    while (current != nullptr && current->value != target) current = current->next;
    if (current != nullptr) current->next = new Node{value, current->next};
    Node* oldHead = head;
    head = head->next;
    delete oldHead;
    while (head != nullptr) {
        std::cout << head->value << (head->next ? " " : "\n");
        Node* next = head->next;
        delete head;
        head = next;
    }
}
```

## 示例输入与输出

```text
20 99
```

输出

```text
20 99 30
```

## 常见错误

只把新结点接到前驱上会丢掉原后继。释放结点前存下 `next`。操作一般链表时，删首结点前要判断是否为空。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `30 99`，预期为 `20 30 99`。

### 进阶练习

从空文件写可从空表开始的版本，支持删除唯一结点。画图对照双向链表要同时改的两条链接，以及循环链表为什么不能用遇到空指针作停止条件。
