# 取余、二维数组与交换

`links[row][col]` 指定行、列。`std::swap()` 交换两个变量的值。`step % 3` 是除以 3 的余数，在非负下标上用来绕回。

## 逐行读代码

```cpp
#include <iostream>
#include <utility>

int main() {
    const int links[3][3] = {{0, 1, 1}, {1, 0, 0}, {1, 0, 0}};
    int row;
    if (!(std::cin >> row) || row < 0 || row >= 3) {
        std::cout << "无效顶点\n";
        return 0;
    }
    for (int col = 0; col < 3; ++col) {
        if (links[row][col]) std::cout << col << '\n';
    }
    int a = 20, b = 10;
    std::swap(a, b);
    std::cout << a << ' ' << b << '\n';
    for (int step = 0; step < 4; ++step) std::cout << step % 3 << '\n';
}
```

## 示例输入与输出

```text
0
```

输出

```text
1
2
10 20
0
1
2
0
```

## 常见错误

取余的除数必须非零。读取二维数组前分别核对行和列的边界。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `-1`，预期为 `无效顶点`。

### 进阶练习

输入一个顶点并列出它所有邻居，再把容量改为 4，验证下标如何绕回。
