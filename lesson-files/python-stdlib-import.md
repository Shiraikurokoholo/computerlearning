# 使用标准库模块

四种方式都在用同一个平方根函数。每次导入会在当前文件中创建一个名字。用一个空文件分别尝试四行导入语句，观察各自能使用的名字。

## 逐行读代码

```python
import math
import math as m
from math import sqrt
from math import sqrt as root

number = float(input())
print(math.sqrt(number))
print(m.sqrt(number))
print(sqrt(number))
print(root(number))
```

| 导入语句 | 新名字 | 调用 |
| --- | --- | --- |
| `import math` | `math` | `math.sqrt(81)` |
| `import math as m` | `m` | `m.sqrt(81)` |
| `from math import sqrt` | `sqrt` | `sqrt(81)` |
| `from math import sqrt as root` | `root` | `root(81)` |

用 `float(input())` 读取数值。四个 `print()` 依次调用同一个函数，输出应当相同。两个模块有同名函数时，保留模块名或用别名区分。读到 `from math import *` 时，知道它会把多个公开名字带进当前文件。

## 示例输入与输出

```text
81
```

```text
9.0
9.0
9.0
9.0
```

## 常见错误

只写 `import math as m` 时，调用 `math.sqrt()` 会遇到 `NameError`。同理，只导入 `sqrt` 时直接调用 `sqrt()`。避免把自己的文件命名为 `math.py`，以免遮蔽标准库。平方根示例接受非负数。

## 动手练习

### 基础练习

输入 `16`，解释为何四行都是 `4.0`。

### 进阶练习

逐个注释导入语句，预测哪一行会报错。

### 从空白文件写

从空文件写一个平方根程序，只使用 `from math import sqrt as root`。读入 `2.25`，预期输出 `1.5`。
