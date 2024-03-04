---
title: OpenGauss数据库安装使用
tag: 数据库
---

### 环境

本文基于m1芯片的macOS写作,版本为Sonoma14.3.1 

### Docker安装

根据Docker[官方](https://docs.docker.com/desktop/install/mac-install/)提供的方法在本地安装Docker,安装后可通过图形化界面打开Docker Desktop或者在终端中输入

```sh
open -i docker
```

### 通过Docker安装OpenGauss

- 拉取镜像  
  
```sh
docker pull enmotech/opengauss:3.0.0
```

:::note
lastest版本的image在目前测试下存在部分问题,无法成功部署
:::

- 部署

```sh
docker run --name opengauss --privileged=true -d -e GS_PASSWORD=<密码需包含大小写，符号和数字> -v <更改为自己需要的文件夹>:/var/lib/opengauss -p 15432:5432 enmotech/opengauss:3.0.0
```

:::tip
15432的端口号可以更改
:::

- 进入镜像

```sh
docker exec -it opengauss bash
```

更换为omm用户
```sh
su omm
```

通过gsql连接数据库
```sh
gsql -d postgres -U gaussdb -W'<上面设置的密码>'
```

可以暂停和重启容器

```sh
docker stop opengauss
```

```sh
docker restart opengauss
```

### Reference

[开启和关闭数据库](https://docs-opengauss.osinfra.cn/en/docs/1.0.1/docs/Administratorguide/starting-and-stopping-opengauss.html)
[官方文档](https://docs-opengauss.osinfra.cn/en/docs/3.0.0/docs/BriefTutorial/BriefTutorial.html)