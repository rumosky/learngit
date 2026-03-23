---
title: 远程仓库
description: 用于记录远程仓库主页说明内容
---

### 说明

与本地仓库相对应的就是远程仓库，有了远程仓库才方便多人协作。
首先，请先注册 GitHub 账号或者 Gitee 账号（若你不知道什么是 GitHub 或者 Gitee，请自行搜索）
一般可以通过 http 协议连接远程仓库，方便快捷且支持匿名访问，但推荐使用更加安全的 ssh 协议，Git 原生支持 ssh。

> 下面配置 ssh 的内容为非必须项，若使用 http 协议，请忽略。

#### 设置 ssh 连接

1.打开 Git Bash，执行：

```shell
ssh-keygen -t rsa -C "youremail@example.com"
```

::: tip 补充说明

- 密钥类型可以用 -t 选项指定。如果没有指定则默认生成用于 SSH-2 的 RSA 密钥。这里使用的是 rsa
- 同时在密钥中有一个注释字段，用-C 来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息
- 所以在这里输入自己的邮箱或者其他都行。
- 输入完毕后程序同时要求输入一个密语字符串(passphrase)，空表示没有密语
- 接着会让输入 2 次口令(password)，空表示没有口令
- 3 次回车即可完成当前步骤

:::

2.打开你的用户文档`c盘>用户>自己的用户名>.ssh`，在用户目录下会生成一个`.ssh`隐藏目录，目录下有这两个文件：

```shell
id_rsa      #私钥（不可泄漏）
id_rsa_pub  #公钥
```

3.登陆 GitHub，打开`Account settings`，`SSH and GPG Keys`页面，然后，点`New SSH Key`，填上任意 Title，在 Key 文本框里粘贴`id_rsa.pub`文件的内容

因为 GitHub 需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而 Git 支持 SSH 协议，所以，GitHub 只要知道了你的公钥，就可以确认只有你自己才能推送。
当然，GitHub 允许你添加多个 Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的 Key 都添加到 GitHub，就可以在每台电脑上往 GitHub 推送了。

> 若感觉 ssh 连接比较麻烦，请忽略上述配置，直接使用 http 连接即可

::: warning 可能遇到的问题

如果推送代码时出现下述情况：

```shell
$ git push -u origin master
The authenticity of host 'github.com (52.74.223.119)' can't be established.
RSA key fingerprint is SHA256:ntsahdjsab78bdagf3u1TFAN8sbhGAD882bfysabff.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,52.74.223.119' (RSA) to the list of known hosts.
Connection reset by 52.74.223.119 port 22
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

##### 解决办法

删除用户目录下的.ssh 文件夹，重新按照上述内容生成 ssh 密钥对，然后部署在 GitHub 上，打开 git bash，执行`ssh -T git@github.com`，结果如下：

```shell
$ ssh -T git@github.com
The authenticity of host 'github.com (52.74.223.119)' can't be established.
RSA key fingerprint is SHA256:ntsahdjsab78bdagf3u1TFAN8sbhGAD882bfysabff.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,52.74.223.119' (RSA) to the list of known hosts.
Hi rumosky! You've successfully authenticated, but GitHub does not provide shell access.
```

:::
