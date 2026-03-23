---
title: 版本回退
description: 用于记录如何进行版本回退
---

### 结论

git 工作区状态：

```shell
git status
```

查看全部修改内容：

```shell
git diff
```

查看指定文件修改内容：

```shell
git diff <file>
```

回退到指定版本

```shell
git reset --hard commit_id
```

回退到上一个版本

```shell
git reset --hard HEAD^
```

回退到上上一个版本

```shell
git reset --hard HEAD^^
```

回退到上 n 个版本

```shell
git reset --hard HEAD~n
```

查看详细提交历史

```shell
git log
```

查看简化提交历史

```shell
git log --pretty=oneline
```

查看分支合并图

```shell
git log --graph
```

查看命令历史

```shell
git reflog
```

### 说明

我们多次修改文件，如果不小心删除了某些东西，可以使用版本回退来实现复原

#### 步骤

继续上一节的内容，修改 readme.txt，增加了一行内容，执行：

```shell
git status
```

结果如下：

```shell
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
        modified:   readme.txt
no changes added to commit (use "git add" and/or "git commit -a")
```

`git status`命令可以让我们时刻掌握仓库当前的状态，上面的命令输出告诉我们，`readme.txt`被修改过了，但还没有提交修改。
此时，如果想查看具体我们修改了`readme.txt`的哪一部分内容，执行：

```shell
git diff
```

结果如下：

```shell
$ git diff
diff --git a/readme.txt b/readme.txt
index cc3b095..6b77a0b 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,3 @@
 git is very famous!
-第一次追加内容
\ No newline at end of file
+第一次追加内容^M
+第二次追加内容
\ No newline at end of file
```

知道修改了什么内容，就可以放心提交了，依次执行`git add` `git commit -m ""`即可，提交完毕，执行 git status 查看状态，显示如下：

```shell
$ git status
On branch master
nothing to commit, working tree clean
```

好了，经过多次提交之后，如果想退回到某个版本，先执行：

```shell
git log
```

结果如下：

```shell
$ git log
commit f09d57ce853e850551e8802b9a4be3643ba894c0 (HEAD -> master)
Author: rumosky <rumosky@163.com>
Date:   Sun Nov 3 16:02:23 2019 +0800
    第三次追加内容
commit c3b8908ddddd8364ac8b2681b56e948885e49b1d
Author: rumosky <rumosky@163.com>
Date:   Sun Nov 3 16:00:36 2019 +0800
    第二次追加内容
commit a82d91a6bb97b1acc158d98bc1f82697df938e3b
Author: rumosky <rumosky@163.com>
Date:   Sun Nov 3 15:49:55 2019 +0800
    第一次追加内容
commit 69997611303057230d8fa50c81681bd823644553
Author: rumosky <rumosky@163.com>
Date:   Sun Nov 3 15:28:27 2019 +0800
    第一次提交
```

可以看到有四次提交，其中，`commit`后面的一串字符是`commit_id`，若觉得日志内容很长，可以添加参数`--pretty=oneline`，结果如下：

```shell
$ git log --pretty=oneline
f09d57ce853e850551e8802b9a4be3643ba894c0 (HEAD -> master) 第三次追加内容
c3b8908ddddd8364ac8b2681b56e948885e49b1d 第二次追加内容
a82d91a6bb97b1acc158d98bc1f82697df938e3b 第一次追加内容
69997611303057230d8fa50c81681bd823644553 第一次提交
```

回到上一个版本，结果如下：

```shell
$ git reset --hard HEAD^
HEAD is now at c3b8908 第二次追加内容
```

现在，我们回退到了上一个版本，但是如果我们后悔了，想恢复到新版本怎么办？
没事，此时，先执行 git reflog 找到最新版的 commit_id，结果如下：

```shell
$ git reflog
c3b8908 (HEAD -> master) HEAD@{0}: reset: moving to HEAD^
f09d57c HEAD@{1}: commit: 第三次追加内容
c3b8908 (HEAD -> master) HEAD@{2}: commit: 第二次追加内容
a82d91a HEAD@{3}: commit: 第一次追加内容
6999761 HEAD@{4}: commit (initial): 第一次提交
```

第三次追加内容`commit_id`是`f09d57c`，执行回退命令，结果如下：

```shell
$ git reset --hard f09d57c
HEAD is now at f09d57c 第三次追加内容
```

此时，查看 readme 文件，发现已经恢复了：

```shell
$ cat readme.txt
git is very famous!
第一次追加内容
第二次追加内容
第三次追加内容
```

::: tip
commit_id 没有必要全部输入，至少输入前四位就可以找到该 commit
:::
