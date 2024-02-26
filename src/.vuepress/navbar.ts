import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/MD/Computer/",
  "/MD/Maths/",
  {
    text: "校内课程",
    icon: "ghost",
    prefix: "/MD/School",
    children: [
      {
        text: "概率论",
        icon: "chart-simple",
        link: "Probability/",
      },
      {
        text: "数据结构",
        icon: "code",
        link: "DataStructure/",
      },
      {
        text: "数据库系统",
        icon: "database",
        link: "DatabaseSystem/",
      },
      {
        text: "其他",
        icon: "bars",
        link: "Others/",
      },
    ],
    link: "/MD/School/"
  },
  // "/MD/Badminton/",
  {
    text: "技术分享",
    icon: "list",
    link: "/MD/Others/",
  },
  {
    text: "关于",
    icon: "sitemap",
    children: [
      {
        text: "关于本站",
        icon: "globe",
        link: "intro.html",
      },
      {
        text: "关于本人",
        icon: "user",
        link: "AboutMe.html"
      },
    ],
  },
]);
