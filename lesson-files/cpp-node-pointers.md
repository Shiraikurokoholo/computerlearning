# 用指针读取和连接结点

`&second` 取第二个结点的地址。`current->value` 通过地址找到结点，读取其 `value`。`current = current->next` 移动当前指针。`nullptr` 表示当前没有结点。

## 逐行读代码

```cpp
#include <iostream>

struct Node {
    int value;
    Node* next;
};

int main() {
    Node second{20, nullptr};
    Node first{10, &second};
    Node* current = &first;
    while (current != nullptr) {
        std::cout << current->value << '\n';
        current = current->next;
    }
}
```

## 示例输入与输出

本例无需输入。

输出

```text
10
20
```

## 常见错误

访问 `current->value` 之前要确认指针非空。给 `current` 赋值只会移动它，改 `current->next` 才会改变结点的链接。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。

### 进阶练习

从空文件定义三个结点并连接。再把起点改为 `nullptr`，确认循环一次也不执行。
