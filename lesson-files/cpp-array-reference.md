# 数组参数、引用与边界

数组参数旁边传入有效长度。`const` 表示函数通过这个参数只读。`int& result` 给调用处的整数起了一个函数内的名字。赋值会写回调用处，`bool` 返回值则报告操作是否成功。

## 逐行读代码

```cpp
#include <iostream>

bool readAt(const int values[], int length, int index, int& result) {
    if (index < 0 || index >= length) {
        return false;
    }
    result = values[index];
    return true;
}

int main() {
    const int values[] = {10, 20, 30};
    int index;
    if (!(std::cin >> index)) return 0;
    int result = 0;
    if (readAt(values, 3, index, result)) {
        std::cout << result << '\n';
    } else {
        std::cout << "下标越界\n";
    }
}
```

## 示例输入与输出

```text
2
```

输出

```text
30
```

## 常见错误

最后一项的下标在非空时才是 `length - 1`。`-1` 可以是查找失败的标记，不能拿来访问 C++ 数组。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `-1`，预期为 `下标越界`。

### 进阶练习

写一个 `find()` 返回第一次出现的下标。用 `10 20 30` 分别找 20 和 99，核对 `1` 和 `-1`。
