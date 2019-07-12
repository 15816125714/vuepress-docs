# flex-layout

### 实例：横向布局
#

::: demo 这是tips内容，`233`，`666` 内容被解析了
```vue
<div class="box-wrap">
  <flex-layout fullWin>
    <flex-layout width="256px" height="100%" class="box" center>slide-bar</flex-layout>
    <flex-layout fullWin center class="content">content</flex-layout>
  </flex-layout>
</div>
```
:::

### 实例：垂直布局
#

::: demo
```vue
<div class="box-wrap" style="width: 100%; height: 300px;">
  <flex-layout fullWin vertical>
    <flex-layout width="100%" class="box header" fixedSize center>header</flex-layout>
    <flex-layout fullWin class="box content" center>content</flex-layout>
    <flex-layout width="100%" class="box footer" fixedSize center>footer</flex-layout>
  </flex-layout>
</div>
```
:::

### 实例：嵌套布局1
#

::: demo
```vue
<div class="box-wrap" style="width: 100%; height: 300px;">
  <flex-layout fullWin vertical>
    <flex-layout class="border-b box header" width="100%" fixedSize center>Header</flex-layout>
    <flex-layout fullWin>
      <flex-layout width="256px" height="100%" class="box border-r" center>slide-bar</flex-layout>
      <flex-layout fullWin class="box content" center>content</flex-layout>
    </flex-layout>
  </flex-layout>
</div>
```
:::

### 实例：嵌套布局2
#

::: demo
```vue
<div class="box-wrap" style="width: 100%; height: 300px;">
  <flex-layout fullWin vertical>
    <flex-layout class="box border-b header" width="100%" fixedSize center>Header</flex-layout>
    <flex-layout fullWin>
      <flex-layout width="256px" height="100%" class="border-r box slide-bar" center>slide-bar</flex-layout>
      <flex-layout fullWin class="content" vertical center>
        <flex-layout width="100%" height="50px" class="box content border-b other" center fixedSize>filter</flex-layout>
        <flex-layout width="100%" height="50px" class="box content border-b other" center fixedSize>other</flex-layout>
        <flex-layout fullWin class="box content" center>content</flex-layout>
      </flex-layout>
    </flex-layout>
  </flex-layout>
</div>
```
:::

<style lang="less">
.box-wrap {
  width: 100%;
  height: 300px;

  * {
    font-size: 18px;
    text-align: center;
  }
}

.header, .footer, .other {
  height: 60px;
  line-height: 60px;
}

.box {
  color: #ffd200;
  background: #282c34;
}

.border-l{
  border-left: 1px solid rgba(0, 0, 0, .2);
  box-sizing: border-box;
}

.border-r{
  border-right: 1px solid rgba(0, 0, 0, .2);
  box-sizing: border-box;
}

.border-b{
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  box-sizing: border-box;
}

.border-t{
  border-top: 1px solid rgba(0, 0, 0, .2);
  box-sizing: border-box;
}

.content {
  color: #545252;
  background: #fff;
}
</style>

### 属性值
参数 | 说明 | 类型 | 可选值 | 默认值  
:- |:- |:- |:- |:- 
tag | 渲染元素标签名 | String | - | div
width | 元素宽度 | String/Number | - | -
height | 元素高度 | String/Number | - | -
fullWin | 是否将元素的宽高设置成100% | Boolean | true/false | false
fixedSize | 是否将元素设置成固定大小`flex: 1 0 auto` | Boolean | true/false | false
clearFlex | 是否清除元素的flex属性 | Boolean | true/false | false
direction | 项目的排列方向 | String | row/row-reverse/column/column-reverse | row
vertical | 是否垂直排列，如果 `vertical=true` 则将flex-direction被设置为column | Boolean | true/false | false
wrap | 是否换行 | Boolean | true/false | false
center | 是否将内容居中 | Boolean | true/false | false
justifyContent | 项目在主轴上的对齐方式 | String | flex-start/flex-end/center/space-between/space-around | flex-start
alignItems | 项目在交叉轴上如何对齐 | String | flex-start/flex-end/center/baseline/stretch | flex-start
alignContent | 多根轴线的对齐方式 | String | flex-start/flex-end/center/space-between/space-around/stretch | flex-start
order | 排列顺序，数值越小，排列越靠前 | Number | - | 0
flexGrow | 定义项目的放大比例，即如果存在剩余空间，也不放大 | Number | - | 0
flexShrink | 项目的缩小比例，即如果空间不足，该项目将缩小 | Number | - | 1
flexBasis | 在分配多余空间之前，项目占据的主轴空间 | String/Number | - | auto
flex | `flex-grow`, `flex-shrink` 和 `flex-basis`的简写 | String | - | 0 1 auto
alignSelf | 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性 | String | auto/flex-start/flex-end/center/baseline/stretch | auto
