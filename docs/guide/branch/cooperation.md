---
title: 多人协作
author: AndyBin
date: 2019-03-01
isOriginal: true
description: 用于记录如何进行多人协作
---

### 结论

查看远程仓库信息

```shell
git remote
```

查看远程仓库详细信息

```shell
git remote -v
```

与远程仓库代码同步

```shell
git pull
# git pull = git fetch + git merge
```

在本地创建和远程分支对应的分支

```shell
git checkout -b branch-name origin/branch-name
git switch -c branch-name origin/branch-name
```

将本地分支与远程仓库关联

```shell
git branch --set-upstream-to <branch-name> origin/<branch-name>
```

推送本地分支到远程仓库

```shell
git push origin <branch-name>
```

### 说明

多人协作的工作模式通常是这样：

1. 首先，可以试图用`git push origin <branch-name>`推送自己的修改；
1. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
1. 如果合并有冲突，则解决冲突，并在本地提交；
1. 没有冲突或者解决掉冲突后，再用`git push origin <branch-name>`推送就能成功！
1. 如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建。

这就是多人协作的工作模式，一旦熟悉了，就非常简单。

::: tip

- 本地新建的分支如果不推送到远程，对其他人就是不可见的；
- 在本地创建和远程分支对应的分支，本地和远程分支的名称最好一致；
- 从远程抓取分支，如果有冲突，要先处理冲突。

:::

::: warning 问题

本地仓库有文件，远程仓库也有文件，但是这两个仓库文件不一致。这时，将本地仓库与远程仓库关联起来，执行`git branch --set-upstream-to <branch-name> origin/<branch-name>`，提示错误：`error：the requested upstream branch 'origin/master' does not exist"`

**解决办法**
若直接执行`git pull`会提示：`refusing to merge unrelated histories`，正确做法：

```shell
git pull origin master --allow-unrelated-histories
git branch --set-upstream-to=origin/master master
git push origin master
```

:::
