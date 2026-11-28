# 标准库容器操作速查

| 用途 | 常见接口 |
| --- | --- |
| 可增长数组 | `vector` 的 `size()`、`capacity()`、`push_back()`、`at()` |
| 栈和队列 | `push()`、`pop()`、`empty()`；栈用 `top()`，队列用 `front()` |
| 按优先级取值 | 优先队列的 `top()`、`push()`、`pop()`；示例用 `greater<int>` 先取最小值 |
| 按键查值 | `find()`、`at()`、`operator[]`。`counts[x]` 缺键时会为这里的 `int` 值创建 0 |

范围循环遍历原有数据，在字典中累计频次，同时用堆保留待取的数字。

## 逐行读代码

```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <stack>
#include <unordered_map>
#include <vector>

int main() {
    std::vector<int> values{30, 10, 20, 10};
    values.push_back(40);
    std::unordered_map<int, int> counts;
    std::priority_queue<int, std::vector<int>, std::greater<int>> smallest;
    for (int x : values) {
        ++counts[x];
        smallest.push(x);
    }
    std::cout << values.size() << ' ' << counts.at(10) << '\n';
    while (!smallest.empty()) {
        std::cout << smallest.top() << '\n';
        smallest.pop();
    }
}
```

## 示例输入与输出

本例无需输入。

输出

```text
5 2
10
10
20
30
40
```

## 常见错误

调用 `top()`、`front()` 或 `pop()` 前先确认非空。标准库栈、队列和优先队列的 `pop()` 不返回元素。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。

### 进阶练习

从空文件写一个读入整数、统计频次并按从小到大取值的程序，补测空输入和重复项。
