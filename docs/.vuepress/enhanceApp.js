import ElementUI from 'element-ui';

import FlexLayout from './components/Layout/index';

import 'element-ui/lib/theme-chalk/index.css';
import './../assets/style/base.less';
import './../assets/style/css-utils.css';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(ElementUI);

  Vue.component(FlexLayout.name, FlexLayout);
  // ...做一些其他的应用级别的优化
}