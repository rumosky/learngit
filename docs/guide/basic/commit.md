---
title: 创建版本库
author: AndyBin
date: 2019-03-01
isOriginal: true
description: 用于记录如何创建版本库
---

### 结论

初始化本地仓库：

```shell
git init
```

添加文件到仓库：

```shell
# 添加单个文件
git add <file>

# 添加多个文件
git add file1 file2 ...

# 添加全部已修改文件
git add .
```

提交文件到仓库：

```shell
git commit -m "说明"
```

### 说明

什么是版本库呢？版本库又名仓库，英文名`repository`，你可以简单理解成一个目录，这个目录里面的所有文件都可以被`Git`管理起来，每个文件的修改、删除，`Git`都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以还原。

#### 步骤

首先，选择一个合适的地方，创建一个空目录，在该目录下执行:

```shell
git init
```

此时一个仓库就创建好了，在该目录下会生成一个`.git`隐藏文件，这个文件是`git`的配置文件，请勿随意修改
其次，添加一个文件到仓库，新建 readme.txt，执行：

```shell
git add readme.txt
```

然后把文件提交到仓库，执行：

```shell
git commit -m "你的注释"
```

结果如下：

```shell
$ git commit -m "第一次提交"
[master (root-commit) 6999761] 第一次提交
 1 file changed, 1 insertion(+)
 create mode 100644 readme.txt
```

::: tip
其中，`-m`后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。
`git commit`命令执行成功后会告诉你，`1 file changed`：1 个文件被改动（我们新添加的 readme.txt 文件）；`1 insertions`：插入了一行内容（readme.txt 有一行内容）。
:::
