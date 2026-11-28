# 循环队列与叫号

输入 `+ 数字` 入队，`-` 出队。队头记录读的位置，队尾记录下一次写的位置，两者到末尾后用取余绕回。用元素数判断空与满，入队出队只更新固定几个位置。

## 逐行读代码

```cpp
#include <iostream>

struct Queue {
    int data[3]{};
    int front = 0;
    int tail = 0;
    int count = 0;

    bool push(int value) {
        if (count == 3) return false;
        data[tail] = value;
        tail = (tail + 1) % 3;
        ++count;
        return true;
    }

    bool pop(int& result) {
        if (count == 0) return false;
        result = data[front];
        front = (front + 1) % 3;
        --count;
        return true;
    }
};

int main() {
    Queue queue;
    char command;
    int value;
    while (std::cin >> command) {
        if (command == '+') {
            if (!(std::cin >> value)) return 0;
            if (!queue.push(value)) std::cout << "队满\n";
        } else if (command == '-') {
            if (queue.pop(value)) std::cout << value << '\n';
            else std::cout << "队空\n";
        }
    }
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

空队和满队都可能出现队头等于队尾。取余前保证容量大于 0。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `- + 1 + 2 + 3 + 4`，预期为 `队空 / 队满`。

### 进阶练习

从空文件实现容量 1 的版本再测试。进阶用链队列保留队头和队尾，最后一个结点出队时一起重置它们。
