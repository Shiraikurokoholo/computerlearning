# 字典树与前缀查词

先输入词数和小写单词，再逐个输入要查的词。根是下标 0，`next[letter]` 为 0 表示这条边不存在。沿字母逐段走，最后的 `ends` 区分完整词和仅有前缀。

## 逐行读代码

```cpp
#include <iostream>
#include <string>
#include <vector>

struct Node {
    int next[26]{};
    bool ends = false;
};

bool valid(const std::string& word) {
    for (char ch : word) if (ch < 'a' || ch > 'z') return false;
    return true;
}

int main() {
    std::vector<Node> nodes(1);
    int n;
    if (!(std::cin >> n) || n < 0 || n > 100) return 0;
    std::string word;
    for (int i = 0; i < n; ++i) {
        if (!(std::cin >> word) || !valid(word)) return 0;
        int node = 0;
        for (char ch : word) {
            int letter = ch - 'a';
            if (!nodes[node].next[letter]) {
                nodes[node].next[letter] = static_cast<int>(nodes.size());
                nodes.push_back(Node{});
            }
            node = nodes[node].next[letter];
        }
        nodes[node].ends = true;
    }
    while (std::cin >> word) {
        int node = 0;
        if (!valid(word)) {
            std::cout << "无效输入\n";
            continue;
        }
        for (char ch : word) {
            node = nodes[node].next[ch - 'a'];
            if (!node) break;
        }
        if (!node) std::cout << "未找到\n";
        else std::cout << (nodes[node].ends ? "完整词\n" : "仅前缀\n");
    }
}
```

## 示例输入与输出

```text
3 cat car dog
ca cat do rat
```

输出

```text
仅前缀
完整词
仅前缀
未找到
```

## 常见错误

存在路径时还要查看结束标记。`vector` 扩容可能改变结点地址，此处始终保存并使用下标。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `0 / cat A`，预期为 `未找到 / 无效输入`。

### 进阶练习

从空文件写只允许 a、b、c 三个字母的前缀查找器，测试有相同前缀和空词表。
