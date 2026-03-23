---
title: Feature分支
description: 用于记录如何使用Feature分支
---

### 结论

强制删除分支（会丢失分支上的修改）

```shell
git branch -D <name>
```

### 说明

开发一个新 feature，最好新建一个分支；

如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。
