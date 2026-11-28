# 综合练习：任务查询、领取与依赖

先输入任务数和各项编号、优先级，再输入查询编号和依赖条数。每条依赖 `A B` 表示完成 A 后才能领取 B。编号用哈希表查，能领取的任务才入堆。优先级数字越大越先取，同优先级按录入先后。`pair` 先比较第一项，再比较第二项，因此第二项取负下标。

## 逐行读代码

```cpp
#include <iostream>
#include <queue>
#include <string>
#include <unordered_map>
#include <utility>
#include <vector>

int main() {
    int n;
    if (!(std::cin >> n) || n < 0 || n > 50) return 0;
    std::unordered_map<std::string, int> index;
    std::vector<std::string> names(n);
    std::vector<int> rank(n), degree(n);
    std::vector<std::vector<int>> next(n);
    for (int i = 0; i < n; ++i) {
        if (!(std::cin >> names[i] >> rank[i])) return 0;
        if (!index.emplace(names[i], i).second) {
            std::cout << "编号重复\n";
            return 0;
        }
    }
    std::string query;
    int m;
    if (!(std::cin >> query >> m) || m < 0 || m > 2500) return 0;
    auto found = index.find(query);
    if (found == index.end()) std::cout << "未找到\n";
    else std::cout << "优先级 " << rank[found->second] << '\n';
    for (int i = 0; i < m; ++i) {
        std::string a, b;
        if (!(std::cin >> a >> b)) return 0;
        if (!index.count(a) || !index.count(b)) {
            std::cout << "未知编号\n";
            return 0;
        }
        next[index.at(a)].push_back(index.at(b));
        ++degree[index.at(b)];
    }
    using Entry = std::pair<int, int>;
    std::priority_queue<Entry> ready;
    for (int i = 0; i < n; ++i) if (!degree[i]) ready.push({rank[i], -i});
    std::vector<int> order;
    while (!ready.empty()) {
        const int task = -ready.top().second;
        ready.pop();
        order.push_back(task);
        for (int other : next[task]) if (--degree[other] == 0) ready.push({rank[other], -other});
    }
    if (static_cast<int>(order.size()) != n) std::cout << "存在依赖环\n";
    else {
        std::cout << "领取";
        for (int task : order) std::cout << ' ' << names[task];
        std::cout << '\n';
    }
}
```

## 示例输入与输出

```text
3
A 1
B 2
C 2
B 1
A B
```

输出

```text
优先级 2
领取 C A B
```

## 常见错误

查询不存在的编号用 `find`，防止通过下标操作意外增加新键。依赖不足时不能提前让任务进入堆。

### 基础练习

先手推默认数据，再换用一个边界用例，核对每步状态。例如输入 `2 / A 2 / B 2 / X 0`，预期为 `未找到 / 领取 A B`。

### 进阶练习

从空文件分阶段实现。先用数组查询，再换成哈希表，加堆排序和依赖。给重复编号、同优先级、依赖环分别写测试。
