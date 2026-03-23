---
title: Bug分支
description: 用于记录如何使用Bug分支
---

### 结论

暂存工作区状态

```shell
git stash
```

查看暂存的工作区状态

```shell
git stash list
```

恢复全部暂存状态，但不删除暂存内容

```shell
git stash apply
```

恢复指定暂存状态，但不删除暂存内容

```shell
git stash apply stash@{<id>}
```

删除暂存内容

```shell
git stash drop
```

恢复暂存状态，同时删除暂存内容

```shell
git stash pop
```

复制一个特定的提交到当前分支

```shell
git cherry-pick <commit_id>
```

### 说明

修复 bug 时，我们会通过创建新的 bug 分支进行修复，然后合并，最后删除；

当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复 bug，修复后，再`git stash pop`，回到工作现场；

在 master 分支上修复的 bug，想要合并到当前 dev 分支，可以用`git cherry-pick <commit_id>`命令，把 bug 提交的修改“复制”到当前分支，避免重复劳动。
