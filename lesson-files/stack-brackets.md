# 数组栈与括号匹配

入栈先写 `stack[count]` 再加一。只看栈顶时读 `stack[count - 1]`。出栈先让 `count` 减一再取值。每个字符最多进栈或出栈一次，时间随字符串长度线性增长。函数调用也遵循后进入的调用先返回。

## 逐行读代码

```cpp
#include <iostream>
#include <string>

bool matches(const std::string& text) {
    char stack[128];
    int count = 0;
    for (char ch : text) {
        if (ch == '(' || ch == '[' || ch == '{') {
            if (count == 128) return false;
            stack[count++] = ch;
        } else if (ch == ')' || ch == ']' || ch == '}') {
            if (count == 0) return false;
            char left = stack[--count];
            if ((ch == ')' && left != '(') ||
                (ch == ']' && left != '[') ||
                (ch == '}' && left != '{')) return false;
        }
    }
    return count == 0;
}

int main() {
    std::string text;
    std::getline(std::cin, text);
    std::cout << (matches(text) ? "合法" : "不合法") << '\n';
}
```

## 示例输入与输出

```text
([{}])
```

输出

```text
合法
```

## 常见错误

栈空时不能取栈顶。输入结束时还剩左括号也不合法。示例忽略普通字符，容量不足视为匹配失败。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `([)]`，预期为 `不合法`。

### 进阶练习

从空文件拆出 `push`、`top`、`pop`，返回 `bool` 报告是否成功。再用链表版栈顶实现相同接口。
