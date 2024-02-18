---
title: 零成本创建一个属于自己的个人网站
category: 技术分享
author: WataminC
---

本文基于20.04.1版本的Ubuntu环境写作，部分代码可能与Windows系统下有出入，理论上无需其他编程前置知识,但可能需要你对Markdown有一定的了解，不过现学完全来的及！但后续网站改动可能需要一定的动手能力。同时本文仅作整理，只给出必要的内容，更多详细信息可以参考官方的文档，链接均在文章中给出，若有实质性偏差和错误，欢迎友好交流，提Issues！

# 开始的契机

近期在学习6.s081，因为经常需要研读xv6源码，想把自己的学习过程记录下来但是本地的Markdown不足以满足我的需求和分享欲，于是打算搭建一个网站来放些自己的笔记，顺便用来督促一下自己在学习的过程中多记笔记，不然真是学啥忘啥！

## 选用的技术栈

因为建站的目的是为了放笔记和做笔记而不是作为一个前后端学习的项目，我希望前端部分能尽可能的简单和模块化，同时网站还需要有一定的Markdown增强功能，所以我在Vuepress和Hexo之中选择了[Vuepress](https://vuepress.vuejs.org/)并且使用了[Vuepress theme hope](https://theme-hope.vuejs.press/)这一主题

- Vuepress基于Vue和Vite方便后期拓展
- Vuepress theme hope这一主题提前集成了大量插件，可按需配置

简单来说，Vuepress是个基于Vue的静态网页生成器(Vue-powered Static Site Generator)，可以将你的Markdown文件渲染成静态的HTML文件。在整个网站搭建的过程中，可以用过配置的方式，获得自己想要的网站，从而方便创作者专注于文档的写作。同时Vuepress还支持高度的自定义，方便创作者后期的拓展。

## 前期准备

- Git和Node.js
- 一个合适的编辑器
- 一个github账号

### Git和Github账号

Git是一个著名的版本管理工具而Github则是一个著名的代码托管平台，我们需要借助Git帮助我们实现版本管理并将代码推送到Github平台实现自动化部署。

#### Github账号注册

访问正确的[Github](https://github.com/)，在正确的网络环境下，通过邮箱可以免费注册Github账号，在校大学生还可以通过学生认证获得免费Copilot使用权等多个福利！

#### Git环境

下载详见[Git官方文档](https://git-scm.com/downloads)

Ubuntu系统下可以通过以下指令快速下载

```sh
sudo apt-get install git
```

下载完成后，需要提前配置好用户名和邮箱，详见[官方文档](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

简单来讲，需要在终端或者Git Bash中执行以下两条命令，需要将用户名和邮箱修改成自己实际的用户名和邮箱。

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

然后需要配置ssh，详见[Github文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

并将其添加至你的Github账号中，参考[官方文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

本次配置过程各个官方文档都写的很详细而且也有相对应的中文文档，过程出现的大多数问题都可以在文档中找到解答，以学习为目的的话推荐多看看文档！

#### 编辑器

没有固定需求，用顺手的就可以，推荐使用[Vscode](https://code.visualstudio.com/),对TS/JS语言的支持很赞！

#### Node.js

以Vuepress V2为例，官方给出的要求是

- Node.js v18.16.0+
- Package manager like pnpm, yarn, npm, etc.

::: tip
在使用pnpm时，需要安装vue以满足依赖
:::

可以直接下载[最新版本](https://nodejs.org/en/download)，或者通过[包管理工具](https://nodejs.org/en/download/package-manager)

::: note 注意
在本人使用的20.04版本的Ubuntu，Node.js v19和v20都存在一定的bug且暂时无法解决，推荐使用相同系统的人下载v18的版本，可以参考[nodejs/snap](https://github.com/nodejs/snap)
:::

```sh
sudo snap refresh node --channel=18
```

## 网站搭建

可以选择pnpm yarn npm三种方式，以pnpm为例(官方推荐，存在问题较少)

### 安装pnpm

最简单的方式是通过npm安装

```sh
npm install -g pnpm
```

### 创建项目

执行以下命令，并根据提示按需选择，my-docs可以更换为自己想要的项目名称

```sh
pnpm create vuepress-theme-hope my-docs
```

::: important
最后提示是否需要自动化部署工具请选择是
:::

### 尝试本地运行

进入项目文件夹，运行以下指令，可以在本地运行项目，默认使用8080端口，在浏览器网址栏输入localhost:8080进入

```sh
pnpm run docs:dev
```

## 解构一下整个项目

基础的网站以及基本搭建完成，初始文件部分是作者提前准备的用来展示项目功能的，初看来会较眼花缭乱，本人在此整理出个人认为较为重要的部分和功能并给出具体的文档部分，更多细节的部分推荐自己完整阅读文档或者在文档中搜索自己需要的内容。

推荐先看看[快速入门的部分](https://theme-hope.vuejs.press/zh/get-started/)

### 总的来说

Vuepress是一个以配置为主的网站构建工具，也就是说主体的逻辑和内容以及提前给出，我们需要关心的是“要不要，要多少，要什么”的问题。换言之，我们只需要修改文件中作者提前给出的数据大小，true还是false，各个部分的名称，就能个性化的定制我们的网站，所以搞清楚整个项目的架构，搞清楚“哪个文件是负责那块部分”，就能快速解决“我修改这个会有什么区别，我想把网站哪个部分改成什么样我应该如何做”的问题！

:::important
Vuepress中有一个重要的概念[Frontmatter](https://v2.vuepress.vuejs.org/guide/page.html#frontmatter)，可以根据每个Markdown文件最上方的YAML部分配置对于的网页
:::

```
.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
```

:::note 
以上是官方给出的项目架构
:::

其中

- .github是我们构建项目是选择自动化部署而自己创建的部分，不需要修改
- package.json 同样不需要修改

所以，整体的核心部分是我们的src文件夹!

### src文件夹--"/"路径

参见[官方的解释](https://theme-hope.vuejs.press/zh/get-started/content.html#%E9%A1%B5%E9%9D%A2%E7%9A%84%E7%94%9F%E6%88%90)，在Vuepress中，Markdown文件是核心，Vuepress会把每个Markdown文件渲染成一个网页。

::: important
每个文件夹下的Markdown文件都会被渲染成对应名称的html文件并根据文件夹的路径获得其最终的路径，而README.md文件是特殊的，根据约定，它会变成index.html而不是README.html，所有一个文件夹下既有README.md又有index.md会产生冲突，推荐非特殊情况统一使用README.md
:::

而在网页上浏览的时候会以src为根目录，在某一路径下如果未指定文件，将默认显示README的内容

:::tip
也就是说，localhost:8080/ 将会显示src/README.md被渲染后的页面，而localhost:8080/example/ex1.html 将会显示src/example/ex1.md被渲染后的页面
:::

### 默认的演示文件

在本人目前的测试环境下，src文件中会默认生成一个demo文件夹和posts文件夹，里面存放的分别是顶部导航栏第二个和第三个的内容

### /src/.vuepress

这个文件夹下包含我们主要的配置部分

```
.vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── 供config引用的多个ts或js文件
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
```

public文件夹中存储的网站的静态资源，比如网站的logo，文章中的图片

::: warning
在Markdown引用本地资源的时候，根目录将变成public文件夹，但我还没找到具体指出这一事实的文档部分
:::

styles中包含三个文件，其中config.scss和palette.scss文件用于配置该主题提前给出的样式风格。而在index.scss中可以通过css自己修改网站的样式

最关键的是config.{js,ts}，其中包含了网站最主要的配置，而部分变量则通过引用的方式，分在不同的文件中编写，有

- 导航栏部分--navbar.ts
- 侧边栏部分--sidebar.ts
- 主题部分--theme.ts

导航栏和侧边栏都可以根据自己实际的文件布局修改成自己想要的样子，这部分各有喜好，也较为简单，可以根据官方文档自己尝试，或者参考我的布局

- [导航栏](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)
- [侧边栏](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html)

而主页则是在src下的README.md中配置

- [主页](https://theme-hope.vuejs.press/zh/guide/layout/home.html)
- [主页Frontmatter](https://theme-hope.vuejs.press/zh/config/frontmatter/home.html#heroimagedark)
- [主题Frontmatter](https://ecosystem.vuejs.press/themes/default/frontmatter.html#home-page)

### 参考指南
整体配置还是需要大致阅读一下[官方指南](https://theme-hope.vuejs.press/zh/guide/)，本人只做总结并给出我个人认为重要的概念

- 界面
  - 主题色
  - 图标主持

:::warning
主题默认的图标网站是[fontawesome](https://fontawesome.com/)，可以在theme.ts中更改
:::

- [内置组件](https://theme-hope.vuejs.press/zh/guide/component/built-in.html)
- [Components Lib](https://plugin-components.vuejs.press/)
- [Style config](https://theme-hope.vuejs.press/config/style.html#config-scss)

## 部署

[部署项目](https://theme-hope.vuejs.press/zh/get-started/deploy.html)是通过将项目推送到Github，借助Github Actions和Github Pages实现在公网查看网页。

1. 在Github上创建一个<username>.github.io的公开仓库

2. 根据Github空白仓库上面的指令将项目推送至Github

3. 在仓库的settings中的pages页面，在Build and deployment下将Branch改为gh-pages(main分支之外的那一个)

4. 访问https://<username>.github.io

5. 之后在本地修改测试无误后再用相同方法推送到Github上，项目会自动更新

## 总结

整个文章写起来还是比我想象中的要难很多，原先想写一个非常完整，跟着走下来能完美建站的攻略，但是实际写起来发现这可能会比写出现在这样一篇文章花多得多的时间。以目前截止，我也没停地打了三个小时才搞定这篇文，希望今后熟能生巧吧！

我写笔记的初衷还是达到了，一个是让自己过后能轻松回忆起来，一个是写一下自己过程中不解的问题并把它梳理出来，点出自己遇到的坑。每个人的需求不同，但是我的网站主要以写学习笔记为主，目前也不打算开放其他功能，要求是在美观的前提下越简洁越好，所以我主要用到的也就是以上提到的部分。最后在列出部分组件或者网站，供参考和备用！

::: important Custom important
:::

::: info Custom info
:::

::: note Custom note
:::

::: tip Custom tip
:::

::: warning Custom warning
:::

::: caution Custom caution
:::

```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

<Share :services="['qq','weibo']" />

<BiliBili bvid="BV1BS4y1N7PH" />

![picture](/assets/images/cover2.jpg)

[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)