# 链队列的队头和队尾

新结点接到原队尾后。队列原本为空时，新结点同时是队头和队尾。出队释放旧队头，取完最后一个结点时把队尾一起清空。保留队尾地址后，入队无需遍历整条链。

## 逐行读代码

```cpp
#include <iostream>

struct Node { int value; Node* next; };

struct Queue {
    Node* head = nullptr;
    Node* tail = nullptr;

    void push(int value) {
        Node* node = new Node{value, nullptr};
        if (tail) tail->next = node;
        else head = node;
        tail = node;
    }

    bool pop(int& result) {
        if (!head) return false;
        Node* old = head;
        result = old->value;
        head = old->next;
        if (!head) tail = nullptr;
        delete old;
        return true;
    }
};

int main() {
    Queue queue;
    char command;
    int value;
    while (std::cin >> command) {
        if (command == '+') {
            if (!(std::cin >> value)) break;
            queue.push(value);
        } else if (command == '-') {
            if (queue.pop(value)) std::cout << value << '\n';
            else std::cout << "队空\n";
        }
    }
    while (queue.pop(value)) {}
}
```

## 示例输入与输出

```text
+ 10 + 20 + 30 - + 40 - - -
```

输出

```text
10
20
30
40
```

## 常见错误

如果只清空队头，下一次入队会改已释放的旧队尾。这个队列按单一所有者使用，课内不复制对象。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `+ 1 - - + 2 -`，预期为 `1 / 队空 / 2`。

### 进阶练习

从空文件写只维护队头的版本，数出为了追加元素需要走多少步，再加回队尾。
