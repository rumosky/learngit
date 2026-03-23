---
title: 速查词典
description: 用于快速查询Git常见命令
---

### 速查表

> 创建

1.克隆现有仓库

```shell
git clone ssh://user@domain.com/repo.git
```

2.创建一个新的本地仓库

```shell
git init
```

> **本地修改**

1.查看工作目录中已更改的文件，即查看 git 状态

```shell
git status
```

2.查看跟踪文件的更改，即远程仓库与本地仓库文件的不同

```shell
git diff
```

3.将所有当前更改添加到下一次提交，即全部提交

```shell
git add .
```

4.将某个文件的更改添加到下一次提交，即部分提交

```shell
git add -p <file>
```

5.提交跟踪文件中的所有本地更改

```shell
git commit -a
```

6.提交先前进行的更改

```shell
git commit
```

7.更改最后一次提交（不要修改已发布的提交）

```shell
git commit --amend
```

> **提交历史**

1.显示所有提交，从最新的提交开始

```shell
git log
```

2.显示特定文件随时间的修改

```shell
git log -p <file>
```

3.查看特定文件什么时间被什么人修改了什么内容

```shell
git blame <file>
```

> **分支和标签**

1.列出所有现有分支

```shell
git branch -av
```

2.切换当前分支

```shell
git checkout <branch>
```

3.基于当前 head 指针创建新分支

```shell
git branch <new-branch>
```

4.基于当前远程分支创建一个新跟踪分支

```shell
git checkout --track <remote/branch>
```

5.删除一个本地分支

```shell
git branch -d <branch>
```

6.将一次提交标记为一个标签

```shell
git tag <tag-name>
```

> **更新和推送**

1.列出当前仓库关联的所有远程仓库

```shell
git remote -v
```

2.显示远程仓库的详细信息

```shell
git remote show <remote>
```

3.关联一个新的远程仓库到本地仓库

```shell
git remote add <shortname> <url>
```

4.仅拉取远程仓库所有更改，不合并到本地仓库

```shell
git fetch <remote>
```

5.拉取远程仓库所有更改，并合并到本地仓库

```shell
git pull <remote> <branch>
```

6.推送本地仓库修改到远程仓库

```shell
git push <remote> <branch>
```

7.删除远程仓库的一个分支

```shell
git branch -dr <remote/branch>
```

8.推送所有本地仓库标签到远程仓库

```shell
git push --tags
```

> **合并和变基**

1.合并指定分支到当前分支

```shell
git merge <branch>
```

2.变基

```shell
git rebase <branch>
```

3.放弃变基

```shell
git rebase --abort
```

4.解决冲突之后继续变基

```shell
git rebase --continue
```

5.运行合并冲突解决工具来解决合并冲突

```shell
git mergetool
# 合并冲突解决工具需要配置，是图形化工具
```

6.使用编辑器手动解决冲突，并（在解决之后）将文件标记为已解决

```shell
git add <resolved-file>
git rm <resolved-file>
```

> **撤销**

1.放弃工作目录中的所有本地更改

```shell
git reset --hard HEAD
```

2.放弃特定文件中的本地更改

```shell
git checkout HEAD <file>
```

3.还原提交

```shell
git revert <commit>
```

4.将你的 HEAD 指针重置为上一次提交...并放弃此后的所有更改

```shell
git reset --hard <commit>
```

5....并将所有更改保留为未提交的更改

```shell
git reset <commit>
```

6....并保留未提交的本地更改

```shell
git reset --keep <commit>
```

---

#### 版本控制最佳做法

> **提交相关更改**

提交应该是相关更改的封装。 例如，修复两个不同的`BUG`应产生两个单独的提交。 较小的提交可使其他开发人员更容易理解更改，并在出现问题时将其回滚。 借助暂存区和仅暂存文件部分的能力等工具，`Git`可以轻松创建非常精细的提交。

> **经常提交**

经常提交会使你的提交变小，并且帮助你仅提交相关的更改。 而且，它使你可以更频繁地与他人共享代码。 这样，每个人都可以更轻松地定期同步整合代码更改，并避免合并冲突。 相比之下，很少的大量提交和共享代码，会导致很难解决冲突。

> **不要提交未完成的代码**

你应该只能在代码完成后提交。 但这并不意味着你在提交之前必须先完成一个完整的大型功能。 恰恰相反：将功能的实现分成逻辑块，并记住要尽可能早的频繁的提交。 但是，不要只想在一天结束离开办公室之前在仓库中提交一些代码。 如果你只是因为需要干净的工作区（切换分支，同步更改等）而打算提交未完成的代码，请考虑改用`git stash`。

> **提交代码之前一定要先测试**

在你还没有确认工作完成之前，忍住提交代码的冲动。彻底的测试代码，确保其没有副作用（据我们所知），虽然在本地存储库中提交半生不熟的东西只需要你原谅自己，但是当涉及到向他人推送/共享代码时，测试代码就更加重要了。

> **写"好"的提交注释**

提交注释的开头应该要用简短的总结语句（最多 50 个字符最为开头总结），后续正文与开头用空白行分开。注释的正文应该包含下面问题的详细答案：
_本次修改代码的原因是什么？
本次代码与之前的实现有何不同？_

> **版本控制不是备份系统**

在远程服务器上备份文件是版本控制系统的一个很好的副作用。但是你不应该把你的`VCS`（版本控制系统）当成一个备份系统来使用。在进行版本控制时，你应该注意语义上的提交(参见相关章节)——你不应该只是填入文件。

> **多使用分支**

分支是`Git`最强大的功能之一，这并非偶然，因为从`Git`创建的第一天开始快速简单的分支就是它的中心要求。分支是帮助你避免混淆不同开发线的完美工具。你应该在开发工作流中广泛使用分支，例如，增加一个新的功能；修复`BUG`，新的想法等。

> **商定工作流程**

`Git`允许你从许多不同的工作流中进行选择：长时间运行的分支、主题分支、合并或变基、git 流……你选择哪一个取决于几个因素：你的项目、你的整体开发和部署工作流程，以及(可能最重要的)你和你的队友的个人偏好。无论你选择如何工作，只要确保大家都同意一个通用的工作流程就可以了。

> **帮助与文档**

在命令行获取帮助

```shell
git help <command>
```

> **免费在线资源**

[https://www.git-scm.com/docs](https://www.git-scm.com/docs)

[http://rogerdudler.github.io/git-guide/index.zh.html](http://rogerdudler.github.io_git-guide_index.zh)

[https://www.git-tower.com/learn/git/ebook/cn/command-line/introduction](https://www.git-tower.com/learn/git/ebook/cn/command-line/introduction)
