# 字符串清理、拆分与拼接

先看工具操作的数据，再看调用后交回的值或对原数据的改动。

## 逐行读代码

```python
text = "  Apple, Pear, Apple  "
cleaned = text.strip().lower()
words = []
for word in cleaned.split(","):
    words.append(word.strip())
print("词数", len(words))
print("拼接", " / ".join(words))
print("替换", cleaned.replace("apple", "orange"))
```

| 写法 | 用途 |
| --- | --- |
| `text.strip()` | 清除两端的空白 |
| `text.split()`、`text.split(",")` | 按空白、或按指定符号拆成列表 |
| `" / ".join(words)` | 用分隔符连接多个字符串 |
| `text.replace("旧", "新")` | 返回替换后的文字 |
| `text.lower()`、`text.upper()` | 返回转换大小写后的文字 |
| `text.startswith("第")`、`text.endswith(".py")` | 检查开头、结尾 |

`strip().lower()` 先去除两端空白，再将结果转为小写。逗号切出来的每一项可能仍带空白，循环中再清理一次。

## 示例输入与输出

本例无需输入。

```text
词数 3
拼接 apple / pear / apple
替换 orange, pear, orange
```

## 常见错误

字符串方法处理后通常要接住返回值。拼接写成 `"分隔符".join(字符串列表)`。列表中有整数时，先用 `str()` 转换。

### 基础练习

把分隔符改成 `"、"`，比较拆分和拼接各自使用的符号。

### 进阶练习

写一个程序接受逗号分隔的名字，把每项清理后用 ` / ` 相连。测试连续逗号造成的空项。
