---
title: GitRemote
description: This it the GitRemote page of LearnGit
---

### 结论

关联远程仓库

```shell
git remote add origin <url>
# 其中origin是默认的远程仓库名，也可以自行修改
# url可以是ssh链接，也可以是http链接，推荐使用ssh，安全高速
```

删除远程仓库

```shell
git remote rm origin
```

查看远程仓库

```shell
git remote -v
```

推送提交到远程仓库

```shell
git push origin master
# 一般用于非首次推送
```

```shell
git push -u origin master
# -u参数是将本地master分支与远程仓库master分支关联起来，一般用于第一次推送代码到远程库
```

### 说明

现在的情景是，你的本地仓库已经有了，但是你必须要有一个远程仓库，才可以使得自己的代码可以让别人来协作开发，也可以作为一个本地仓库的备份。
