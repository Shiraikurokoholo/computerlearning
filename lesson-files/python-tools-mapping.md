# 字典查找与集合去重

先看工具操作的数据，再看调用后交回的值或对原数据的改动。

## 逐行读代码

```python
scores = {"小林": 8, "小陈": 12}
print("缺席同学的默认成绩", scores.get("小周", 0))
for name, score in scores.items():
    print(name, score)

seen = set(["小林", "小林", "小陈"])
seen.add("小周")
seen.discard("小吴")
print("见过的人数", len(seen))
print("共同出现", sorted(seen.intersection({"小林", "小吴"})))
```

- 字典用 `get(key, default)` 查值，`keys()` 和 `values()` 只取键或值，`items()` 一次拿到键值对。`pop(key, default)` 删除并返回对应值，缺失时返回给定默认值。
- 集合用 `add(x)` 添加，`discard(x)` 尝试移除。用 `intersection(other)` 找共同元素，`union(other)` 找两边所有不同元素。
- 代码用 `sorted()` 把共同元素整理成顺序固定的列表，再打印。

## 示例输入与输出

本例无需输入。

```text
缺席同学的默认成绩 0
小林 8
小陈 12
见过的人数 3
共同出现 ['小林']
```

## 常见错误

`key in scores` 检查的是键。如果默认值 0 和实际成绩 0 有不同含义，先用 `in` 区分。空集合用 `set()`，`{}` 创建空字典。

### 基础练习

试着给集合重复添加“小林”，再比较人数。

### 进阶练习

给两组人名去重，输出两组共同出现的所有名字。补测其中一组为空。
