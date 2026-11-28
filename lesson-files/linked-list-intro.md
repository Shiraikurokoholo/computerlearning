# 认识链表结点

给三个结点分别画一格值和一格链接。`&first` 得到第一个结点地址，`head->next` 得到第二个结点地址。末尾的 `nullptr` 表示没有后继。

## 逐行读代码

```cpp
#include <iostream>

struct Node {
    int value;
    Node* next;
};

int main() {
    Node third{30, nullptr};
    Node second{20, &third};
    Node first{10, &second};
    Node* head = &first;
    std::cout << head->value << ' ' << head->next->value << '\n';
}
```

## 示例输入与输出

本例无需输入。

输出

```text
10 20
```

## 常见错误

指针为空时不能读取成员。局部结点只在它所在的作用域内活着。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。

### 进阶练习

从空文件创建三个结点，改链接使输出从 `10 20` 变成 `10 30`。
