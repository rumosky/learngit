---
title: 删除文件
author: AndyBin
date: 2019-03-01
isOriginal: true
description: 用于记录如何删除文件
---

### 结论

删除未添加到暂存区的文件

```shell
#显示将要删除的文件和目录
git clean -n

#删除文件和目录
git clean -df

#删除文件
git clean -f
git rm <file>
```
