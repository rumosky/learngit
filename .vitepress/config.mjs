import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "LearnGit",
  description: "Git skills",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
    },
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://rumosky.net',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzYwIDM2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYwIDM2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzU1NTU1NTt9DQo8L3N0eWxlPg0KPGcgaWQ9IuWbvuWxgl8yXzAwMDAwMTAwMzU0NzQxNzYzNTYyNDgxNjcwMDAwMDEyMjI0OTA4NjUzNTQwNjQ3MDg5XyI+DQoJPGcgaWQ9IuWbvuWxgl8xLTIiPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjkuNSwxNDkuN2M2NC4yLTI2LDEwMy4yLDE3LjcsMTQ1LjcsNTEuOGMyNS40LDIwLjQsNDcuMiw0NS45LDc5LDU3LjZjMjAuNiw3LjUsMzIuMSwxLDQyLjctMjIuNA0KCQkJYzYuNS0xNC4yLDExLjQtMjkuMiwxNC41LTQ0LjVjMi45LDM0LjYtMTMuOSw3Ny40LTQyLjEsMTA1LjJjLTYyLjgsNjEuOC0xNTkuOSw3MS41LTIyNy4xLDIyLjlDOC41LDI2Ny03LjQsMTgwLDIyLjUsMTE0LjYNCgkJCUM2NS45LDE5LjUsMTUyLDAuMiwyMTguNSwxMi4xYzQxLjUsNy40LDczLjksMzAsOTguNCw2NC4zQzI3OCw0MCwyMzIuMywyNi43LDE4MC4xLDM0LjhjLTUuOSwwLjktMTEuNSwzLjQtMTcsNi41DQoJCQljMTYuMywwLjYsMzEuOCwyLjgsNDYuOCw5YzMzLjcsMTMuOCw1Mi40LDQ1LjYsNDQuNiw4MC44Yy00LjYsMjAuNi0yMCwzNS4zLTM1LDQ5LjJjLTQuMSwzLjktMTAuNiwxLjktMTUuNS0yLjMNCgkJCWMtMTAuMy04LjktMjEtMTcuNC0zMi40LTI2LjhjOC42LTcuNSwxNS43LTEzLjcsMjIuOC0xOS45QzIwOS41LDExOCwyMDguNyw5NCwxOTMuMiw4MWMtMTUuMi0xMi43LTMzLTE4LjMtNTIuMy0xOQ0KCQkJYy0yNC43LTAuOS01MS42LDIyLjctNjIuMSw1Mi4xQzc0LjcsMTI1LjksNjkuNywxMzcuMiw2OS41LDE0OS43eiBNMjgyLjUsMjkzLjNjLTQuNy0wLjQtNi45LTAuNi05LTAuOA0KCQkJYy0xNS42LTAuOS0zMC44LTUuNS00NC4zLTEzLjNjLTI5LjQtMTcuMS00OS45LTQzLjUtNzItNjguMmMtMjIuNC0yNS4xLTQ0LjItNTEuNC04My42LTQ1LjRjLTMuOCwwLjYtNi43LDEtNi44LDUuOQ0KCQkJYy0wLjEsMTcuOCwyLjcsMzUuMywxMCw1MS4zYzIyLjQsNDkuNyw2MSw3OS43LDExNS4zLDg3LjJDMjIyLjcsMzE0LjIsMjUyLjMsMzA4LjMsMjgyLjUsMjkzLjN6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzYwIDM2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYwIDM2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzU1NTU1NTt9DQo8L3N0eWxlPg0KPGcgaWQ9IuWbvuWxgl8yXzAwMDAwMTAwMzU0NzQxNzYzNTYyNDgxNjcwMDAwMDEyMjI0OTA4NjUzNTQwNjQ3MDg5XyI+DQoJPGcgaWQ9IuWbvuWxgl8xLTIiPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjkuNSwxNDkuN2M2NC4yLTI2LDEwMy4yLDE3LjcsMTQ1LjcsNTEuOGMyNS40LDIwLjQsNDcuMiw0NS45LDc5LDU3LjZjMjAuNiw3LjUsMzIuMSwxLDQyLjctMjIuNA0KCQkJYzYuNS0xNC4yLDExLjQtMjkuMiwxNC41LTQ0LjVjMi45LDM0LjYtMTMuOSw3Ny40LTQyLjEsMTA1LjJjLTYyLjgsNjEuOC0xNTkuOSw3MS41LTIyNy4xLDIyLjlDOC41LDI2Ny03LjQsMTgwLDIyLjUsMTE0LjYNCgkJCUM2NS45LDE5LjUsMTUyLDAuMiwyMTguNSwxMi4xYzQxLjUsNy40LDczLjksMzAsOTguNCw2NC4zQzI3OCw0MCwyMzIuMywyNi43LDE4MC4xLDM0LjhjLTUuOSwwLjktMTEuNSwzLjQtMTcsNi41DQoJCQljMTYuMywwLjYsMzEuOCwyLjgsNDYuOCw5YzMzLjcsMTMuOCw1Mi40LDQ1LjYsNDQuNiw4MC44Yy00LjYsMjAuNi0yMCwzNS4zLTM1LDQ5LjJjLTQuMSwzLjktMTAuNiwxLjktMTUuNS0yLjMNCgkJCWMtMTAuMy04LjktMjEtMTcuNC0zMi40LTI2LjhjOC42LTcuNSwxNS43LTEzLjcsMjIuOC0xOS45QzIwOS41LDExOCwyMDguNyw5NCwxOTMuMiw4MWMtMTUuMi0xMi43LTMzLTE4LjMtNTIuMy0xOQ0KCQkJYy0yNC43LTAuOS01MS42LDIyLjctNjIuMSw1Mi4xQzc0LjcsMTI1LjksNjkuNywxMzcuMiw2OS41LDE0OS43eiBNMjgyLjUsMjkzLjNjLTQuNy0wLjQtNi45LTAuNi05LTAuOA0KCQkJYy0xNS42LTAuOS0zMC44LTUuNS00NC4zLTEzLjNjLTI5LjQtMTcuMS00OS45LTQzLjUtNzItNjguMmMtMjIuNC0yNS4xLTQ0LjItNTEuNC04My42LTQ1LjRjLTMuOCwwLjYtNi43LDEtNi44LDUuOQ0KCQkJYy0wLjEsMTcuOCwyLjcsMzUuMywxMCw1MS4zYzIyLjQsNDkuNyw2MSw3OS43LDExNS4zLDg3LjJDMjIyLjcsMzE0LjIsMjUyLjMsMzA4LjMsMjgyLjUsMjkzLjN6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=' }
    ],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'rumosky' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzYwIDM2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYwIDM2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzU1NTU1NTt9DQo8L3N0eWxlPg0KPGcgaWQ9IuWbvuWxgl8yXzAwMDAwMTAwMzU0NzQxNzYzNTYyNDgxNjcwMDAwMDEyMjI0OTA4NjUzNTQwNjQ3MDg5XyI+DQoJPGcgaWQ9IuWbvuWxgl8xLTIiPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjkuNSwxNDkuN2M2NC4yLTI2LDEwMy4yLDE3LjcsMTQ1LjcsNTEuOGMyNS40LDIwLjQsNDcuMiw0NS45LDc5LDU3LjZjMjAuNiw3LjUsMzIuMSwxLDQyLjctMjIuNA0KCQkJYzYuNS0xNC4yLDExLjQtMjkuMiwxNC41LTQ0LjVjMi45LDM0LjYtMTMuOSw3Ny40LTQyLjEsMTA1LjJjLTYyLjgsNjEuOC0xNTkuOSw3MS41LTIyNy4xLDIyLjlDOC41LDI2Ny03LjQsMTgwLDIyLjUsMTE0LjYNCgkJCUM2NS45LDE5LjUsMTUyLDAuMiwyMTguNSwxMi4xYzQxLjUsNy40LDczLjksMzAsOTguNCw2NC4zQzI3OCw0MCwyMzIuMywyNi43LDE4MC4xLDM0LjhjLTUuOSwwLjktMTEuNSwzLjQtMTcsNi41DQoJCQljMTYuMywwLjYsMzEuOCwyLjgsNDYuOCw5YzMzLjcsMTMuOCw1Mi40LDQ1LjYsNDQuNiw4MC44Yy00LjYsMjAuNi0yMCwzNS4zLTM1LDQ5LjJjLTQuMSwzLjktMTAuNiwxLjktMTUuNS0yLjMNCgkJCWMtMTAuMy04LjktMjEtMTcuNC0zMi40LTI2LjhjOC42LTcuNSwxNS43LTEzLjcsMjIuOC0xOS45QzIwOS41LDExOCwyMDguNyw5NCwxOTMuMiw4MWMtMTUuMi0xMi43LTMzLTE4LjMtNTIuMy0xOQ0KCQkJYy0yNC43LTAuOS01MS42LDIyLjctNjIuMSw1Mi4xQzc0LjcsMTI1LjksNjkuNywxMzcuMiw2OS41LDE0OS43eiBNMjgyLjUsMjkzLjNjLTQuNy0wLjQtNi45LTAuNi05LTAuOA0KCQkJYy0xNS42LTAuOS0zMC44LTUuNS00NC4zLTEzLjNjLTI5LjQtMTcuMS00OS45LTQzLjUtNzItNjguMmMtMjIuNC0yNS4xLTQ0LjItNTEuNC04My42LTQ1LjRjLTMuOCwwLjYtNi43LDEtNi44LDUuOQ0KCQkJYy0wLjEsMTcuOCwyLjcsMzUuMywxMCw1MS4zYzIyLjQsNDkuNyw2MSw3OS43LDExNS4zLDg3LjJDMjIyLjcsMzE0LjIsMjUyLjMsMzA4LjMsMjgyLjUsMjkzLjN6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=',
      dark: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzYwIDM2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYwIDM2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0FBQUFBQTt9DQo8L3N0eWxlPg0KPGcgaWQ9IuWbvuWxgl8yXzAwMDAwMDMxODkzNjI5MzQwMTg1NjczNjcwMDAwMDEzNjY5MDc0NjAyMzgyNTEzMzI4XyI+DQoJPGcgaWQ9IuWbvuWxgl8xLTIiPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjguMywxNDkuOWM2NC4yLTI2LDEwMy4yLDE3LjcsMTQ1LjcsNTEuOGMyNS40LDIwLjQsNDcuMiw0NS45LDc5LDU3LjZjMjAuNiw3LjUsMzIuMSwxLDQyLjctMjIuNA0KCQkJYzYuNS0xNC4yLDExLjQtMjkuMiwxNC41LTQ0LjVjMi45LDM0LjYtMTMuOSw3Ny40LTQyLjEsMTA1LjJjLTYyLjgsNjEuOS0xNTkuOSw3MS41LTIyNy4xLDIyLjlDNy4yLDI2Ny4yLTguNiwxODAuMywyMS4yLDExNC44DQoJCQljNDMuNC05NSwxMjkuNS0xMTQuNCwxOTYtMTAyLjRjNDEuNSw3LjQsNzMuOSwzMCw5OC40LDY0LjNDMjc2LjcsNDAuMiwyMzEsMjYuOSwxNzguOSwzNS4xYy01LjksMC45LTExLjUsMy40LTE3LDYuNQ0KCQkJYzE2LjMsMC42LDMxLjgsMi44LDQ2LjgsOWMzMy43LDEzLjgsNTIuNCw0NS42LDQ0LjYsODAuOGMtNC42LDIwLjYtMjAsMzUuMy0zNSw0OS4yYy00LjEsMy45LTEwLjYsMS45LTE1LjUtMi4zDQoJCQljLTEwLjMtOC45LTIxLTE3LjQtMzIuNC0yNi44YzguNi03LjUsMTUuNy0xMy43LDIyLjgtMTkuOWMxNS4xLTEzLjQsMTQuMy0zNy40LTEuMi01MC4zYy0xNS4yLTEyLjctMzMtMTguMy01Mi4zLTE5DQoJCQlDMTE0LjksNjEuNCw4OCw4NSw3Ny42LDExNC40QzczLjQsMTI2LjEsNjguNCwxMzcuNSw2OC4zLDE0OS45eiBNMjgxLjIsMjkzLjZjLTQuNy0wLjQtNi45LTAuNi05LTAuOA0KCQkJYy0xNS42LTAuOS0zMC44LTUuNS00NC4zLTEzLjNjLTI5LjQtMTcuMS00OS45LTQzLjUtNzItNjguMmMtMjIuNC0yNS4xLTQ0LjItNTEuNC04My42LTQ1LjRjLTMuOCwwLjYtNi43LDEtNi44LDUuOQ0KCQkJYy0wLjEsMTcuOCwyLjcsMzUuMywxMCw1MS4zYzIyLjQsNDkuNyw2MSw3OS43LDExNS4zLDg3LjJDMjIxLjUsMzE0LjQsMjUxLDMwOC41LDI4MS4yLDI5My42eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K',
      alt: 'rumosky',
      width: 24,
      height: 24
    },

    nav: nav(),
    sidebar: {
      "/guide/": { base: "/guide/", items: sidebar() },
      "/reference/": { base: "/reference/", items: sidebarExtra() },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/rumosky/learngit" },
    ],
    footer: {
      message: "诚者，天之道也；诚之者，人之道也",
      copyright:
        "Copyright © 2018 - 2026 <a href='https://rumosky.com' target='_blank'>如默星空</a>",
    },
    outline: {
      label: '页面导航',
      level: [1, 6],
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    search: searchConfig(),
  },
});

function nav() {
  return [
    { text: "指南", link: "/guide/basic/installgit", activeMatch: "/guide/" },
    {
      text: "扩展知识",
      link: "/reference/extra/1",
      activeMatch: "/reference/",
    },
  ];
}

function sidebar() {
  return [
    {
      text: "基础知识",
      collapsed: false,
      items: [
        { text: "安装Git", link: "/basic/installgit" },
        { text: "创建版本库", link: "/basic/commit" },
        { text: "版本回退", link: "/basic/commitback" },
        { text: "工作区与暂存区", link: "/basic/workspace" },
        { text: "管理修改", link: "/basic/managechange" },
        { text: "撤销修改", link: "/basic/cancel" },
        { text: "删除文件", link: "/basic/deletefile" },
      ],
    },
    {
      text: "远程仓库",
      collapsed: false,
      items: [
        { text: "前期配置", link: "/repo/config" },
        { text: "添加远程仓库", link: "/repo/remote" },
        { text: "从远程成仓库克隆", link: "/repo/clone" },
      ],
    },
    {
      text: "分支管理",
      collapsed: false,
      items: [
        { text: "前言", link: "/branch/preface" },
        { text: "创建与合并分支", link: "/branch/createbranch" },
        { text: "解决冲突", link: "/branch/fixconflict" },
        { text: "分支管理策略", link: "/branch/branchstrategy" },
        { text: "BUG分支", link: "/branch/BUG" },
        { text: "Feature分支", link: "/branch/Feature" },
        { text: "多人协作", link: "/branch/cooperation" },
        { text: "Rebase变基", link: "/branch/Rebase" },
      ],
    },
    {
      text: "标签管理",
      collapsed: false,
      items: [
        { text: "前言", link: "/tag/preface" },
        { text: "创建标签", link: "/tag/createtag" },
        { text: "操作标签", link: "/tag/operatetag" },
      ],
    },
    {
      text: "速查词典",
      link: "/quickDic",
    },
    {
      text: "其他命令",
      link: "/otherCommand",
    },
  ];
}

function sidebarExtra() {
  return [
    {
      text: "git 的 merge 与 no-ff merge 的不同之处",
      link: "/extra/1",
    },
    {
      text: "git报错fatal: refusing to merge unrelated histories",
      link: "/extra/2",
    },
    {
      text: "git merge origin master与merge origin/master的区别",
      link: "/extra/3",
    },
    {
      text: "Git撤回已经推送至远程仓库的提交",
      link: "/extra/4",
    },
    {
      text: "浅析warning: LF will be replaced by CRLF",
      link: "/extra/5",
    },
    {
      text: "git pull: Pulling in not possible because you have unmerged files",
      link: "/extra/6",
    },
    {
      text: "Git基于远程仓库修改覆盖问题",
      link: "/extra/7",
    },
    {
      text: "Git批量删除tag标签",
      link: "/extra/8",
    },
    {
      text: "Git拉取远程仓库其他分支代码",
      link: "/extra/9",
    },
  ];
}

// 搜索配置方法
function searchConfig() {
  return {
    provider: 'algolia',
    options: {
      appId: 'PP47B61JK7',
      apiKey: '6fae4571e2cd28539455e7ee75fae937',
      indexName: 'rumosky_net_pp47b61jk7_pages',
      askAi: {
        assistantId: 'HyGhEBChkRq5',
        appId: 'PP47B61JK7',
        apiKey: '6fae4571e2cd28539455e7ee75fae937',
        indexName: 'rumosky_net_pp47b61jk7_pages',
        sidePanel: true
      },
      locales: {
        root: {
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索'
            },
            modal: {
              searchBox: {
                clearButtonTitle: '清除',
                clearButtonAriaLabel: '清除查询',
                closeButtonText: '关闭',
                closeButtonAriaLabel: '关闭',
                placeholderText: '搜索文档或向 AI 提问',
                placeholderTextAskAi: '再问一个问题...',
                placeholderTextAskAiStreaming: '正在回答...',
                searchInputLabel: '搜索',
                backToKeywordSearchButtonText: '返回关键词搜索',
                backToKeywordSearchButtonAriaLabel: '返回关键词搜索',
                newConversationPlaceholder: '提问',
                conversationHistoryTitle: '我的对话历史',
                startNewConversationText: '开始新的对话',
                viewConversationHistoryText: '对话历史',
                threadDepthErrorPlaceholder: '对话已达上限'
              },
              newConversation: {
                newConversationTitle: '我今天能帮你什么？',
                newConversationDescription:
                  '我会搜索你的文档，快速帮你找到设置指南、功能细节和故障排除提示。'
              },
              footer: {
                selectText: '选择',
                submitQuestionText: '提交问题',
                selectKeyAriaLabel: '回车键',
                navigateText: '导航',
                navigateUpKeyAriaLabel: '向上箭头',
                navigateDownKeyAriaLabel: '向下箭头',
                closeText: '关闭',
                backToSearchText: '返回搜索',
                closeKeyAriaLabel: 'Esc 键',
                poweredByText: '技术支持'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查网络连接。'
              },
              startScreen: {
                recentSearchesTitle: '最近',
                noRecentSearchesText: '暂无最近搜索',
                saveRecentSearchButtonTitle: '保存此搜索',
                removeRecentSearchButtonTitle: '从历史记录中移除此搜索',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除此搜索',
                recentConversationsTitle: '最近对话',
                removeRecentConversationButtonTitle: '从历史记录中移除此对话'
              },
              noResultsScreen: {
                noResultsText: '未找到相关结果',
                suggestedQueryText: '尝试搜索',
                reportMissingResultsText: '认为此查询应该有结果？',
                reportMissingResultsLinkText: '告诉我们。'
              },
              resultsScreen: {
                askAiPlaceholder: '询问 AI：',
                noResultsAskAiPlaceholder: '文档里没找到？让 Ask AI 帮忙：'
              },
              askAiScreen: {
                disclaimerText: '回答由 AI 生成，可能会出错。请核实。',
                relatedSourcesText: '相关来源',
                thinkingText: '思考中...',
                copyButtonText: '复制',
                copyButtonCopiedText: '已复制！',
                copyButtonTitle: '复制',
                likeButtonTitle: '喜欢',
                dislikeButtonTitle: '不喜欢',
                thanksForFeedbackText: '感谢你的反馈！',
                preToolCallText: '搜索中...',
                duringToolCallText: '搜索中...',
                afterToolCallText: '已搜索',
                stoppedStreamingText: '你已停止此回复',
                errorTitleText: '聊天错误',
                threadDepthExceededMessage: '为保持回答准确，此对话已关闭。',
                startNewConversationButtonText: '开始新的对话'
              }
            }
          },
          askAi: {
            sidePanel: {
              button: {
                translations: {
                  buttonText: '询问 AI',
                  buttonAriaLabel: '询问 AI'
                }
              },
              panel: {
                translations: {
                  header: {
                    title: '询问 AI',
                    conversationHistoryTitle: '我的对话历史',
                    newConversationText: '开始新的对话',
                    viewConversationHistoryText: '对话历史'
                  },
                  promptForm: {
                    promptPlaceholderText: '提问',
                    promptAnsweringText: '正在回答...',
                    promptAskAnotherQuestionText: '再问一个问题',
                    promptDisclaimerText: '回答由 AI 生成，可能会出错。',
                    promptLabelText: '按回车发送，Shift+回车换行。',
                    promptAriaLabelText: '问题输入'
                  },
                  conversationScreen: {
                    preToolCallText: '搜索中...',
                    searchingText: '搜索中...',
                    toolCallResultText: '已搜索',
                    conversationDisclaimer: '回答由 AI 生成，可能会出错。请核实。',
                    reasoningText: '推理中...',
                    thinkingText: '思考中...',
                    relatedSourcesText: '相关来源',
                    stoppedStreamingText: '你已停止此回复',
                    copyButtonText: '复制',
                    copyButtonCopiedText: '已复制！',
                    likeButtonTitle: '喜欢',
                    dislikeButtonTitle: '不喜欢',
                    thanksForFeedbackText: '感谢你的反馈！',
                    errorTitleText: '聊天错误'
                  },
                  newConversationScreen: {
                    titleText: '我今天能帮你什么？',
                    introductionText:
                      '我会搜索你的文档，快速帮你找到设置指南、功能细节和故障排除提示。'
                  },
                  logo: {
                    poweredByText: '技术支持'
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}