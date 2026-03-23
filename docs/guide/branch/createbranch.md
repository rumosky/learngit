---
title: 创建与合并分支
description: 用于记录如何创建与合并分支
---

### 结论

查看分支

```shell
git branch
```

创建分支

```shell
git branch <name>
```

切换分支

```shell
git checkout <name>
git switch <name>
# switch是2.23版本新增命令
```

创建并切换到该分支

```shell
git checkout -b <name>
git switch -c <name>
```

合并指定分支到当前分支

```shell
git merge <name>
```

删除本地已合并分支

```shell
git branch -d <name>
```

删除远程分支

```shell
git push <远程仓库名> --delete <远程分支名>
```

推送本地分支到远程仓库并在远程仓库创建新分支

```shell
git push <远程仓库名> <本地分支名>:<远程分支名>
```

### 说明

在第一章基础知识-版本回退里，你已经知道，每次提交，Git 都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在 Git 里，这个分支叫主分支，即 master 分支。HEAD 严格来说不是指向提交，而是指向 master，master 才是指向提交的，所以，HEAD 指向的就是当前分支。

所以创建分支、切换分支、删除分支只是对相对应的指针进行操作，所以速度才会非常快。

::: info switch

我们注意到切换分支使用`git checkout <branch>`，而前面讲过的撤销修改则是`git checkout -- <file>`，同一个命令，有两种作用，确实有点令人迷惑。

实际上，切换分支这个动作，用`switch`更科学。因此，最新版本的 Git 提供了新的 git switch 命令来切换分支，使用新的 git switch 命令，比 git checkout 要更容易理解。

:::

**git: 'switch' is not a git command**
因为这个命令是`2.23`版本发布的，在此之前的版本都没有，需要升级到最新版

首先，查看当前版本，执行：

```shell
git --version
```

2.17.1 版本之前，升级命令：

```shell
git update
```

2.17.1 之后的版本，升级命令：

```shell
git update-git-for-windows
```

:::
