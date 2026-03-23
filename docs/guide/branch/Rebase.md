---
title: Rebase变基
description: 用于记录何为变基
---

### 结论

变基

```shell
git rebase <branch>
```

放弃变基

```shell
git rebase --abort
```

解决冲突之后继续变基

```shell
git rebase --continue
```

### 说明

rebase 操作可以把本地未 push 的分叉提交历史整理成直线；

rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。
