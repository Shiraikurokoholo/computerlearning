# 字符、字符串与整行输入

`char` 存单个字符，`std::string` 存字符串。`getline()` 读整行，保留行内空格。范围循环每次把一个字符复制到 `ch`。

## 逐行读代码

```cpp
#include <iostream>
#include <string>

int main() {
    std::string text;
    std::getline(std::cin, text);
    int left = 0;
    int right = 0;
    for (char ch : text) {
        if (ch == '(') ++left;
        if (ch == ')') ++right;
    }
    std::cout << left << ' ' << right << '\n';
}
```

## 示例输入与输出

```text
(a) (b)
```

输出

```text
2 2
```

## 常见错误

`cin >> text` 遇到空白停止。先用 `>>` 读数字再用 `getline()` 时，可用 `cin.ignore()` 丢掉分隔换行，或明确清理这一行余下的字符。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 ` / `，预期为 `0 0`。

### 进阶练习

从空文件写一个读整行并统计三种左括号的程序，测试空行和带空格的表达式。
