---
title: OperateTag
author: AndyBin
date: 2021-10-01
isOriginal: true
description: This it the OperateTag page of LearnGit
---

### 结论

删除指定本地标签

```shell
git tag -d <tag_name>
```

删除指定远程标签

```shell
git push origin :refs/tags/<tag_name>
```

推送一个本地标签

```shell
git push origin <tag_name>
```

推送全部未推送过的本地标签

```shell
git push origin --tags
```
