---
title: 撤销修改
description: 用于记录如何撤销修改
---

### 结论

丢弃工作区的修改（未提交至暂存区）

```shell
# 丢弃指定文件的修改
git checkout -- file
git restore <file>

# 丢弃所有文件的修改
git checkout -- .
git restore .
```

丢弃已添加到暂存区的修改

```shell
# 丢弃指定文件的修改
git reset HEAD <file>
git restore --staged <file>

# 丢弃所有文件的修改
git reset HEAD .
git restore --staged .
```

::: tip
git restore 是 2.23 版之后的命令，若提示找不到命令，请更新 git 至最新版即可
:::

丢弃已提交的修改（未推送到远程仓库），请参考基础知识-版本回退章节内容。
