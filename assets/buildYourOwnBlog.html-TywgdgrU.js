import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as p,a as e,e as n,b as t,n as h,g as u,f as a}from"./app-CUdQkCwZ.js";const m="/assets/images/cover2.jpg",v={},g=e("p",null,"本文基于20.04.1版本的Ubuntu环境写作，部分代码可能与Windows系统下有出入，理论上无需其他编程前置知识,但可能需要你对Markdown有一定的了解，不过现学完全来的及！但后续网站改动可能需要一定的动手能力。同时本文仅作整理，只给出必要的内容，更多详细信息可以参考官方的文档，链接均在文章中给出，若有实质性偏差和错误，欢迎友好交流，提Issues！",-1),b=e("h1",{id:"开始的契机",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开始的契机"},[e("span",null,"开始的契机")])],-1),_=e("p",null,"近期在学习6.s081，因为经常需要研读xv6源码，想把自己的学习过程记录下来但是本地的Markdown不足以满足我的需求和分享欲，于是打算搭建一个网站来放些自己的笔记，顺便用来督促一下自己在学习的过程中多记笔记，不然真是学啥忘啥！",-1),f=e("h2",{id:"选用的技术栈",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#选用的技术栈"},[e("span",null,"选用的技术栈")])],-1),k={href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://theme-hope.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},w=a('<ul><li>Vuepress基于Vue和Vite方便后期拓展</li><li>Vuepress theme hope这一主题提前集成了大量插件，可按需配置</li></ul><p>简单来说，Vuepress是个基于Vue的静态网页生成器(Vue-powered Static Site Generator)，可以将你的Markdown文件渲染成静态的HTML文件。在整个网站搭建的过程中，可以用过配置的方式，获得自己想要的网站，从而方便创作者专注于文档的写作。同时Vuepress还支持高度的自定义，方便创作者后期的拓展。</p><h2 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备"><span>前期准备</span></a></h2><ul><li>Git和Node.js</li><li>一个合适的编辑器</li><li>一个github账号</li></ul><h3 id="git和github账号" tabindex="-1"><a class="header-anchor" href="#git和github账号"><span>Git和Github账号</span></a></h3><p>Git是一个著名的版本管理工具而Github则是一个著名的代码托管平台，我们需要借助Git帮助我们实现版本管理并将代码推送到Github平台实现自动化部署。</p><h4 id="github账号注册" tabindex="-1"><a class="header-anchor" href="#github账号注册"><span>Github账号注册</span></a></h4>',7),j={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},y=e("h4",{id:"git环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git环境"},[e("span",null,"Git环境")])],-1),G={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},M=a(`<p>Ubuntu系统下可以通过以下指令快速下载</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),V={href:"https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup",target:"_blank",rel:"noopener noreferrer"},E=a(`<p>简单来讲，需要在终端或者Git Bash中执行以下两条命令，需要将用户名和邮箱修改成自己实际的用户名和邮箱。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;John Doe&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email johndoe@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C={href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",target:"_blank",rel:"noopener noreferrer"},B=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),D={href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"本次配置过程各个官方文档都写的很详细而且也有相对应的中文文档，过程出现的大多数问题都可以在文档中找到解答，以学习为目的的话推荐多看看文档！",-1),z=e("h4",{id:"编辑器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编辑器"},[e("span",null,"编辑器")])],-1),A={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},N=e("h4",{id:"node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js"},[e("span",null,"Node.js")])],-1),S=e("p",null,"以Vuepress V2为例，官方给出的要求是",-1),P=e("ul",null,[e("li",null,"Node.js v18.16.0+"),e("li",null,"Package manager like pnpm, yarn, npm, etc.")],-1),R=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"在使用pnpm时，需要安装vue以满足依赖")],-1),T={href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"},W={href:"https://nodejs.org/en/download/package-manager",target:"_blank",rel:"noopener noreferrer"},O={class:"hint-container note"},H=e("p",{class:"hint-container-title"},"注意",-1),I={href:"https://github.com/nodejs/snap",target:"_blank",rel:"noopener noreferrer"},U=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap refresh <span class="token function">node</span> <span class="token parameter variable">--channel</span><span class="token operator">=</span><span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="网站搭建" tabindex="-1"><a class="header-anchor" href="#网站搭建"><span>网站搭建</span></a></h2><p>可以选择pnpm yarn npm三种方式，以pnpm为例(官方推荐，存在问题较少)</p><h3 id="安装pnpm" tabindex="-1"><a class="header-anchor" href="#安装pnpm"><span>安装pnpm</span></a></h3><p>最简单的方式是通过npm安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h3><p>执行以下命令，并根据提示按需选择，my-docs可以更换为自己想要的项目名称</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> create vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>最后提示是否需要自动化部署工具请选择是</p></div><h3 id="尝试本地运行" tabindex="-1"><a class="header-anchor" href="#尝试本地运行"><span>尝试本地运行</span></a></h3><p>进入项目文件夹，运行以下指令，可以在本地运行项目，默认使用8080端口，在浏览器网址栏输入localhost:8080进入</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解构一下整个项目" tabindex="-1"><a class="header-anchor" href="#解构一下整个项目"><span>解构一下整个项目</span></a></h2><p>基础的网站以及基本搭建完成，初始文件部分是作者提前准备的用来展示项目功能的，初看来会较眼花缭乱，本人在此整理出个人认为较为重要的部分和功能并给出具体的文档部分，更多细节的部分推荐自己完整阅读文档或者在文档中搜索自己需要的内容。</p>`,15),Y={href:"https://theme-hope.vuejs.press/zh/get-started/",target:"_blank",rel:"noopener noreferrer"},F=e("h3",{id:"总的来说",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总的来说"},[e("span",null,"总的来说")])],-1),L=e("p",null,"Vuepress是一个以配置为主的网站构建工具，也就是说主体的逻辑和内容以及提前给出，我们需要关心的是“要不要，要多少，要什么”的问题。换言之，我们只需要修改文件中作者提前给出的数据大小，true还是false，各个部分的名称，就能个性化的定制我们的网站，所以搞清楚整个项目的架构，搞清楚“哪个文件是负责那块部分”，就能快速解决“我修改这个会有什么区别，我想把网站哪个部分改成什么样我应该如何做”的问题！",-1),J={class:"hint-container important"},Z=e("p",{class:"hint-container-title"},"重要",-1),K={href:"https://v2.vuepress.vuejs.org/guide/page.html#frontmatter",target:"_blank",rel:"noopener noreferrer"},Q=a(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>以上是官方给出的项目架构</p></div><p>其中</p><ul><li>.github是我们构建项目是选择自动化部署而自己创建的部分，不需要修改</li><li>package.json 同样不需要修改</li></ul><p>所以，整体的核心部分是我们的src文件夹!</p><h3 id="src文件夹-路径" tabindex="-1"><a class="header-anchor" href="#src文件夹-路径"><span>src文件夹--&quot;/&quot;路径</span></a></h3>`,6),X={href:"https://theme-hope.vuejs.press/zh/get-started/content.html#%E9%A1%B5%E9%9D%A2%E7%9A%84%E7%94%9F%E6%88%90",target:"_blank",rel:"noopener noreferrer"},$=a(`<div class="hint-container important"><p class="hint-container-title">重要</p><p>每个文件夹下的Markdown文件都会被渲染成对应名称的html文件并根据文件夹的路径获得其最终的路径，而README.md文件是特殊的，根据约定，它会变成index.html而不是README.html，所有一个文件夹下既有README.md又有index.md会产生冲突，推荐非特殊情况统一使用README.md</p></div><p>而在网页上浏览的时候会以src为根目录，在某一路径下如果未指定文件，将默认显示README的内容</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>也就是说，localhost:8080/ 将会显示src/README.md被渲染后的页面，而localhost:8080/example/ex1.html 将会显示src/example/ex1.md被渲染后的页面</p></div><h3 id="默认的演示文件" tabindex="-1"><a class="header-anchor" href="#默认的演示文件"><span>默认的演示文件</span></a></h3><p>在本人目前的测试环境下，src文件中会默认生成一个demo文件夹和posts文件夹，里面存放的分别是顶部导航栏第二个和第三个的内容</p><h3 id="src-vuepress" tabindex="-1"><a class="header-anchor" href="#src-vuepress"><span>/src/.vuepress</span></a></h3><p>这个文件夹下包含我们主要的配置部分</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.vuepress (可选的) → VuePress 配置文件夹
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public文件夹中存储的网站的静态资源，比如网站的logo，文章中的图片</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在Markdown引用本地资源的时候，根目录将变成public文件夹，但我还没找到具体指出这一事实的文档部分</p></div><p>styles中包含三个文件，其中config.scss和palette.scss文件用于配置该主题提前给出的样式风格。而在index.scss中可以通过css自己修改网站的样式</p><p>最关键的是config.{js,ts}，其中包含了网站最主要的配置，而部分变量则通过引用的方式，分在不同的文件中编写，有</p><ul><li>导航栏部分--navbar.ts</li><li>侧边栏部分--sidebar.ts</li><li>主题部分--theme.ts</li></ul><p>导航栏和侧边栏都可以根据自己实际的文件布局修改成自己想要的样子，这部分各有喜好，也较为简单，可以根据官方文档自己尝试，或者参考我的布局</p>`,14),ee={href:"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html",target:"_blank",rel:"noopener noreferrer"},te=e("p",null,"而主页则是在src下的README.md中配置",-1),se={href:"https://theme-hope.vuejs.press/zh/guide/layout/home.html",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://theme-hope.vuejs.press/zh/config/frontmatter/home.html#heroimagedark",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://ecosystem.vuejs.press/themes/default/frontmatter.html#home-page",target:"_blank",rel:"noopener noreferrer"},le=e("h3",{id:"参考指南",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考指南"},[e("span",null,"参考指南")])],-1),re={href:"https://theme-hope.vuejs.press/zh/guide/",target:"_blank",rel:"noopener noreferrer"},oe=e("ul",null,[e("li",null,[n("界面 "),e("ul",null,[e("li",null,"主题色"),e("li",null,"图标主持")])])],-1),de={class:"hint-container warning"},ce=e("p",{class:"hint-container-title"},"注意",-1),pe={href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},he={href:"https://theme-hope.vuejs.press/zh/guide/component/built-in.html",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://plugin-components.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},me={href:"https://theme-hope.vuejs.press/config/style.html#config-scss",target:"_blank",rel:"noopener noreferrer"},ve=e("h2",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署"},[e("span",null,"部署")])],-1),ge={href:"https://theme-hope.vuejs.press/zh/get-started/deploy.html",target:"_blank",rel:"noopener noreferrer"},be=a('<ol><li><p>在Github上创建一个&quot;username.github.io&quot;的公开仓库</p></li><li><p>根据Github空白仓库上面的指令将项目推送至Github</p></li><li><p>在仓库的settings中的pages页面，在Build and deployment下将Branch改为gh-pages(main分支之外的那一个)</p></li><li><p>访问&quot;https://username.github.io&quot;</p></li><li><p>之后在本地修改测试无误后再用相同方法推送到Github上，项目会自动更新</p></li></ol><div class="hint-container caution"><p class="hint-container-title">警告</p><p>将username改为你的用户名</p></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>整个文章写起来还是比我想象中的要难很多，原先想写一个非常完整，跟着走下来能完美建站的攻略，但是实际写起来发现这可能会比写出现在这样一篇文章花多得多的时间。以目前截止，我也没停地打了三个小时才搞定这篇文，希望今后熟能生巧吧！</p><p>我写笔记的初衷还是达到了，一个是让自己过后能轻松回忆起来，一个是写一下自己过程中不解的问题并把它梳理出来，点出自己遇到的坑。每个人的需求不同，但是我的网站主要以写学习笔记为主，目前也不打算开放其他功能，要求是在美观的前提下越简洁越好，所以我主要用到的也就是以上提到的部分。最后在列出部分组件或者网站，供参考和备用！</p><div class="hint-container important"><p class="hint-container-title">Custom important</p></div><div class="hint-container info"><p class="hint-container-title">Custom info</p></div><div class="hint-container note"><p class="hint-container-title">Custom note</p></div><div class="hint-container tip"><p class="hint-container-title">Custom tip</p></div><div class="hint-container warning"><p class="hint-container-title">Custom warning</p></div><div class="hint-container caution"><p class="hint-container-title">Custom caution</p></div>',11),_e=e("figure",null,[e("img",{src:m,alt:"picture",tabindex:"0",loading:"lazy"}),e("figcaption",null,"picture")],-1),fe={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"};function ke(xe,we){const s=i("ExternalLinkIcon"),l=i("VPCard"),r=i("Share"),o=i("BiliBili");return c(),p("div",null,[g,b,_,f,e("p",null,[n("因为建站的目的是为了放笔记和做笔记而不是作为一个前后端学习的项目，我希望前端部分能尽可能的简单和模块化，同时网站还需要有一定的Markdown增强功能，所以我在Vuepress和Hexo之中选择了"),e("a",k,[n("Vuepress"),t(s)]),n("并且使用了"),e("a",x,[n("Vuepress theme hope"),t(s)]),n("这一主题")]),w,e("p",null,[n("访问正确的"),e("a",j,[n("Github"),t(s)]),n("，在正确的网络环境下，通过邮箱可以免费注册Github账号，在校大学生还可以通过学生认证获得免费Copilot使用权等多个福利！")]),y,e("p",null,[n("下载详见"),e("a",G,[n("Git官方文档"),t(s)])]),M,e("p",null,[n("下载完成后，需要提前配置好用户名和邮箱，详见"),e("a",V,[n("官方文档"),t(s)])]),E,e("p",null,[n("然后需要配置ssh，详见"),e("a",C,[n("Github文档"),t(s)])]),B,e("p",null,[n("并将其添加至你的Github账号中，参考"),e("a",D,[n("官方文档"),t(s)])]),q,z,e("p",null,[n("没有固定需求，用顺手的就可以，推荐使用"),e("a",A,[n("Vscode"),t(s)]),n(",对TS/JS语言的支持很赞！")]),N,S,P,R,e("p",null,[n("可以直接下载"),e("a",T,[n("最新版本"),t(s)]),n("，或者通过"),e("a",W,[n("包管理工具"),t(s)])]),e("div",O,[H,e("p",null,[n("在本人使用的20.04版本的Ubuntu，Node.js v19和v20都存在一定的bug且暂时无法解决，推荐使用相同系统的人下载v18的版本，可以参考"),e("a",I,[n("nodejs/snap"),t(s)])])]),U,e("p",null,[n("推荐先看看"),e("a",Y,[n("快速入门的部分"),t(s)])]),F,L,e("div",J,[Z,e("p",null,[n("Vuepress中有一个重要的概念"),e("a",K,[n("Frontmatter"),t(s)]),n("，可以根据每个Markdown文件最上方的YAML部分配置对于的网页")])]),Q,e("p",null,[n("参见"),e("a",X,[n("官方的解释"),t(s)]),n("，在Vuepress中，Markdown文件是核心，Vuepress会把每个Markdown文件渲染成一个网页。")]),$,e("ul",null,[e("li",null,[e("a",ee,[n("导航栏"),t(s)])]),e("li",null,[e("a",ne,[n("侧边栏"),t(s)])])]),te,e("ul",null,[e("li",null,[e("a",se,[n("主页"),t(s)])]),e("li",null,[e("a",ae,[n("主页Frontmatter"),t(s)])]),e("li",null,[e("a",ie,[n("主题Frontmatter"),t(s)])])]),le,e("p",null,[n("整体配置还是需要大致阅读一下"),e("a",re,[n("官方指南"),t(s)]),n("，本人只做总结并给出我个人认为重要的概念")]),oe,e("div",de,[ce,e("p",null,[n("主题默认的图标网站是"),e("a",pe,[n("fontawesome"),t(s)]),n("，可以在theme.ts中更改")])]),e("ul",null,[e("li",null,[e("a",he,[n("内置组件"),t(s)])]),e("li",null,[e("a",ue,[n("Components Lib"),t(s)])]),e("li",null,[e("a",me,[n("Style config"),t(s)])])]),ve,e("p",null,[e("a",ge,[n("部署项目"),t(s)]),n("是通过将项目推送到Github，借助Github Actions和Github Pages实现在公网查看网页。")]),be,t(l,h(u({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16),t(r,{services:["qq","weibo"]}),t(o,{bvid:"BV1BS4y1N7PH"}),_e,e("ul",null,[e("li",null,[e("a",fe,[n("emoji-cheat-sheet"),t(s)])])])])}const Ge=d(v,[["render",ke],["__file","buildYourOwnBlog.html.vue"]]),Me=JSON.parse('{"path":"/MD/Others/buildYourOwnBlog.html","title":"零成本创建一个属于自己的个人网站","lang":"zh-CN","frontmatter":{"title":"零成本创建一个属于自己的个人网站","category":"技术分享","author":"WataminC","description":"本文基于20.04.1版本的Ubuntu环境写作，部分代码可能与Windows系统下有出入，理论上无需其他编程前置知识,但可能需要你对Markdown有一定的了解，不过现学完全来的及！但后续网站改动可能需要一定的动手能力。同时本文仅作整理，只给出必要的内容，更多详细信息可以参考官方的文档，链接均在文章中给出，若有实质性偏差和错误，欢迎友好交流，提Iss...","head":[["meta",{"property":"og:url","content":"https://wataminc.github.io/MD/Others/buildYourOwnBlog.html"}],["meta",{"property":"og:site_name","content":"Watamin C"}],["meta",{"property":"og:title","content":"零成本创建一个属于自己的个人网站"}],["meta",{"property":"og:description","content":"本文基于20.04.1版本的Ubuntu环境写作，部分代码可能与Windows系统下有出入，理论上无需其他编程前置知识,但可能需要你对Markdown有一定的了解，不过现学完全来的及！但后续网站改动可能需要一定的动手能力。同时本文仅作整理，只给出必要的内容，更多详细信息可以参考官方的文档，链接均在文章中给出，若有实质性偏差和错误，欢迎友好交流，提Iss..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wataminc.github.io/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-18T09:30:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"零成本创建一个属于自己的个人网站"}],["meta",{"property":"article:author","content":"WataminC"}],["meta",{"property":"article:modified_time","content":"2024-02-18T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"零成本创建一个属于自己的个人网站\\",\\"image\\":[\\"https://wataminc.github.io/assets/images/cover2.jpg\\"],\\"dateModified\\":\\"2024-02-18T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WataminC\\"}]}"]]},"headers":[{"level":2,"title":"选用的技术栈","slug":"选用的技术栈","link":"#选用的技术栈","children":[]},{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[{"level":3,"title":"Git和Github账号","slug":"git和github账号","link":"#git和github账号","children":[]}]},{"level":2,"title":"网站搭建","slug":"网站搭建","link":"#网站搭建","children":[{"level":3,"title":"安装pnpm","slug":"安装pnpm","link":"#安装pnpm","children":[]},{"level":3,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":3,"title":"尝试本地运行","slug":"尝试本地运行","link":"#尝试本地运行","children":[]}]},{"level":2,"title":"解构一下整个项目","slug":"解构一下整个项目","link":"#解构一下整个项目","children":[{"level":3,"title":"总的来说","slug":"总的来说","link":"#总的来说","children":[]},{"level":3,"title":"src文件夹--\\"/\\"路径","slug":"src文件夹-路径","link":"#src文件夹-路径","children":[]},{"level":3,"title":"默认的演示文件","slug":"默认的演示文件","link":"#默认的演示文件","children":[]},{"level":3,"title":"/src/.vuepress","slug":"src-vuepress","link":"#src-vuepress","children":[]},{"level":3,"title":"参考指南","slug":"参考指南","link":"#参考指南","children":[]}]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1708248254000,"updatedTime":1708248640000,"contributors":[{"name":"WataminC","email":"1286982501@qq.com","commits":2}]},"readingTime":{"minutes":9.97,"words":2992},"filePathRelative":"MD/Others/buildYourOwnBlog.md","localizedDate":"2024年2月18日","excerpt":"<p>本文基于20.04.1版本的Ubuntu环境写作，部分代码可能与Windows系统下有出入，理论上无需其他编程前置知识,但可能需要你对Markdown有一定的了解，不过现学完全来的及！但后续网站改动可能需要一定的动手能力。同时本文仅作整理，只给出必要的内容，更多详细信息可以参考官方的文档，链接均在文章中给出，若有实质性偏差和错误，欢迎友好交流，提Issues！</p>\\n<h1>开始的契机</h1>\\n<p>近期在学习6.s081，因为经常需要研读xv6源码，想把自己的学习过程记录下来但是本地的Markdown不足以满足我的需求和分享欲，于是打算搭建一个网站来放些自己的笔记，顺便用来督促一下自己在学习的过程中多记笔记，不然真是学啥忘啥！</p>","autoDesc":true}');export{Ge as comp,Me as data};
