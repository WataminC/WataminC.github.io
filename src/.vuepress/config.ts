import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Watamin C",
  // description: "Watamin C的个人网站",

  theme,
  
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
