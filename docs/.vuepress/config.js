module.exports = {
  theme: 'reco',
  title: "TauZZ'blog",
  description: 'welcome to my blog ',
  base: '/MyBlog/',
  // 移动端优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // 主题设置
  themeConfig: {
    type: 'blog',
    author: 'TauZZ',
    // 显示在个人信息的头像
    authorAvatar: '/avatar.png',
    // 导航栏左侧logo
    logo: '/avatar.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航及其深度
    subSidebar: 'auto',
    sidebarDepth: 1,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 项目开始时间
    startYear: '2021',
    // 导航栏配置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '笔记', link: '/note/', icon: 'reco-document' },
      { text: 'GitHub', link: 'https://github.com/Tauzi', icon: 'reco-github' }
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    },
    // 友情链接
    friendLink: [

    ],
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/note/': [
        {
          title: 'JAVA',
          collapsable: true,
          children: ['java/20230501']
        },

      ]
    },
  },

  // 插件配置
  plugins: [
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '-'
      }
    ],

    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]

  ]
}