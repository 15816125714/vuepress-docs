// 设置快捷路径
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  title: 'Vuepress-docs',
  description: '项目文档',
  // base: '/example/docs/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '介绍', link: '/guide/' },
    ],
    sidebar: [
      {
        title: '示例',
        collapsable: false,
        children: [
          ['/guide/example/flex/', '弹性布局'],
        ]
      }
    ]
  },

  extendMarkdown: (md) => {
    md.use(require('markdown-it-container'), 'demo', {
      validate: (params) => {
        return params.trim().match(/^demo\s*(.*)$/);
      },
     
      render: (tokens, idx) => {
        let m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          let description = (m && m.length > 1) ? m[1] : '';
          let content = tokens[idx + 1].content;

          return `<DemoBlock>
            <div class="source" slot="source">${content}</div>
            <template slot="description">${md.renderInline(description)}</template>
            <div class="highlight" slot="highlight">`;
        }
        return '</div></DemoBlock>\n';
      }
    });
  },

  less: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'less-loader', // compiles Less to CSS
      },
    ],
    loaderOptions: {
      less: {
        globalVars: {
          '@primary-color': '#4290f7',
          '@assist-color': '#717ea1',
          '@success-color': '#6bc24e',
          '@primary-text-color': '#333333',
          '@content-text-color': '#999999',
          '@bg-color': '#f3f3f3',
        }
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
      }
    }
  },

  chainWebpack: (config, isServer) => {}
}