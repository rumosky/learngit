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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

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
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '7BXCW8PCCD',
        apiKey: '528bdbbd36698372c5640a715ee4f81d',
        indexName: 'rumosky',
        locales: {
          zh: {
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
                  poweredByText: '由…提供支持'
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
            }
          }
        }
      }
    },
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
      link: "1",
    },
    {
      text: "git报错fatal: refusing to merge unrelated histories",
      link: "2",
    },
    {
      text: "git merge origin master与merge origin/master的区别",
      link: "3",
    },
    {
      text: "Git撤回已经推送至远程仓库的提交",
      link: "4",
    },
    {
      text: "浅析warning: LF will be replaced by CRLF",
      link: "5",
    },
    {
      text: "git pull: Pulling in not possible because you have unmerged files",
      link: "6",
    },
    {
      text: "Git基于远程仓库修改覆盖问题",
      link: "7",
    },
    {
      text: "Git批量删除tag标签",
      link: "8",
    },
    {
      text: "Git拉取远程仓库其他分支代码",
      link: "9",
    },
  ];
}
