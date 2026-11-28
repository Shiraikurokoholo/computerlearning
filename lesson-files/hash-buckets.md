# 哈希桶与冲突链

两项对 5 取余都为 1，所以桶 1 保留了一条链。查询先算桶下标，再比较该桶中的键，输出桶号、是否命中和比较次数。键挤到同一桶时，最坏仍要逐个检查。

## 逐行读代码

```cpp
#include <iostream>

struct Node {
    int key;
    Node* next;
};

int main() {
    Node* buckets[5]{};
    Node first{6, nullptr};
    Node second{11, &first};
    buckets[6 % 5] = &second;
    int key;
    while (std::cin >> key) {
        if (key < 0) {
            std::cout << "无效编号\n";
            continue;
        }
        int index = key % 5;
        Node* current = buckets[index];
        int checks = 0;
        while (current) {
            ++checks;
            if (current->key == key) break;
            current = current->next;
        }
        std::cout << index << ' ' << (current ? "找到" : "未找到") << ' ' << checks << '\n';
    }
}
```

## 示例输入与输出

```text
6 11 16
```

输出

```text
1 找到 2
1 找到 1
1 未找到 2
```

## 常见错误

键相同和桶号相同是两件事。示例只接受非负键，以保证取余结果是有效下标。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `2 -1`，预期为 `2 未找到 0 / 无效编号`。

### 进阶练习

从空文件实现插入与查找，对重复值约定忽略或计数。测两个键相撞、一个未命中和完全空表。
