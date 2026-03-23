---
title: 安装Git
description: 用于记录如何安装Git
---

### 前言

`git`是全版本的软件，下载安装时请选择对应的系统即可

#### 在 Windows 上安装

前往官网下载对应客户端：[https://git-scm.com/downloads](https://git-scm.com/downloads)
下载完成后默认安装即可，（默认会将 git 添加到系统环境变量）

#### 在 Mac 上安装

如果你正在使用`Mac`做开发，有两种安装`Git`的方法。
一是安装`homebrew`，然后通过`homebrew`安装`Git`，具体方法请参考`homebrew`文档：[https://brew.sh/index_zh-cn](https://brew.sh/index_zh-cn)
第二种方法更简单，也是推荐的方法，就是直接从`AppStore`安装`Xcode`，`Xcode`集成了`Git`，不过默认没有安装，你需要运行`Xcode`，选择菜单`Xcode->Preferences`，在弹出窗口中找到`Downloads`，选择`Command Line Tools`，点`Install`就可以完成安装了。

#### 在 Linux 上安装

首先，试着在终端里面输入`git`，查看是否已安装，若出现下列内容，则说明没有安装`git`

```shell
$ git
The program 'git' is currently not installed. You can install it by typing:
sudo apt-get install git
```

所以，Ubuntu 系统使用：

```shell
sudo apt-get install git
```

CentOS 使用：

```shell
sudo yum install git -y
```

其他版本 Linux 需要使用源码编译安装
先去官网下载最新版本压缩包：[https://github.com/git/git/releases](https://github.com/git/git/releases)
解压之后执行下列命令：

```shell
git clone https://github.com/git/git.git
./configure
make
sudo make install
```

### 配置

安装好 git 之后，需要配置一下才可以正常使用，打开命令行，执行：

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

上述命令里的 name 和 Email 是你注册 GitHub 时使用的 name 和 Email

::: tip
注意 git config 命令的--global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。
:::
