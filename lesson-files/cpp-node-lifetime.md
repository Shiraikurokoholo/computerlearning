# 用 new 和 delete 管理结点

`new Node{...}` 创建一个动态结点并返回地址。每轮先保存后继，再释放当前结点，最后移动表头。局部变量的地址和 `new` 返回的地址有不同的管理方式。

## 逐行读代码

```cpp
#include <iostream>

struct Node {
    int value;
    Node* next;
};

int main() {
    Node* head = new Node{10, new Node{20, nullptr}};
    while (head != nullptr) {
        Node* next = head->next;
        std::cout << head->value << '\n';
        delete head;
        head = next;
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

释放后不能再读取该结点的成员。只能对匹配的动态分配执行 `delete`。同一结点只释放一次。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。

### 进阶练习

先用空指针运行，再写一个追加动态结点并清理整条链的程序。
