# 把函数放进另一个文件

把分钟换算函数放进 `study_minutes.py`，另一个文件就能使用它。两个文件都在项目的 `examples` 目录。用 VS Code 打开项目，在 PowerShell 终端运行下面的命令，再输入分钟数。

```powershell
python -X utf8 .\examples\python_local_module.py
```

## 逐行读代码

编辑区显示主程序 `examples/python_local_module.py`。运行时它会导入同目录的配套模块。

```python
# 两个 .py 文件应放在同一个文件夹。
from study_minutes import to_hours

entered = int(input())
hours, minutes = to_hours(entered)
print(f"{hours} 小时，{minutes} 分钟")
```

1. `from study_minutes import to_hours` 从同目录的 `study_minutes.py` 取出函数。在 `import` 里省略 `.py` 后缀。
2. `int(input())` 读取分钟整数。
3. 调用刚导入的 `to_hours()`，拆包接收两项结果并输出。

配套模块 `examples/study_minutes.py` 的内容如下。

```python
def to_hours(total_minutes):
    return total_minutes // 60, total_minutes % 60
```

如果要运行网页保存的个人版主程序，把 `study_minutes.py` 复制到个人版主程序所在目录，再展开「VS Code 本地调试」运行提示的命令。

## 示例输入与输出

输入

```text
75
```

输出

```text
1 小时，15 分钟
```

## 常见错误

- `ModuleNotFoundError` 往往表示模块的文件名或位置不符合预期。先检查两个 `.py` 文件是否同目录。
- 在模块顶层写 `input()`，导入模块时也可能被要求输入。可把演示放到主程序里。

## 动手练习

### 基础练习

运行主程序，输入 75 和 0，再在模块中找到执行换算的那一行。

### 进阶练习

在自己复制的模块末尾加上 `if __name__ == "__main__":`，在它的缩进里打印 `to_hours(60)`。分别运行模块和主程序，观察只有直接运行模块时才额外打印这行。
