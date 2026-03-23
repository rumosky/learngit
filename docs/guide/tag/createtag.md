---
title: GitTag
description: This it the GitTag page of LearnGit
---

### 结论

新建标签（指向最新的 commit_id）

```shell
git tag <tag_name>
```

新建标签（指向特定 commit_id）

```shell
git tag <tag_name> <commit_id>
```

查看所有标签

```shell
git tag
```

显示某个标签的详细信息

```shell
git show <tag_name>
```

新建带有说明的标签

```shell
git tag -a <tag_name> -m "说明" <commit_id>
```
