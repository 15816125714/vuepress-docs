<template>
  <div class="demo-block">
    <div class="demo-block-tools" @click="visible = !visible">
      <el-tooltip effect="dark" :content="visible ? '收起代码' : '展开代码'" placement="right">
        <span :class="['btn', {'is-show': visible}]">
          <i class="el-icon-arrow-left icon-arrow"></i>
          <i class="el-icon-arrow-right icon-arrow"></i>
        </span>
      </el-tooltip>
    </div>
    
    <el-collapse-transition>
      <div class="meta" v-show="visible">
        <div class="description" v-if="$slots.description">
          <slot name="description"></slot>
        </div>
        <slot name="highlight"></slot>
      </div>
    </el-collapse-transition>
    
    <div class="demo-block-content">
      <slot name="source"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: 'demo-block',
  props: {
  },
  data () {
    return {
      visible: false
    };
  },
  computed: {
  },
  methods: {}
};
</script>

<style lang="less">
.demo-block {
  position: relative;

  .demo-block-tools {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 10;

    .btn {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      z-index: 10;
      border-radius: 50%;
      box-sizing: border-box;
      outline: none;
      
      &:hover {
        background: rgba(0, 0, 0, .1);
      }

      &.is-show {
        color: #545252;
        background: #ffd200;
      }


      .icon-arrow {
        width: 12px;
        font-size: 16px;
        font-weight: bold;
        margin-left: -2px;
      }
    }
  }

  .meta {

    *[class*="language-"] {
      margin: 0 !important;
      border-radius: 0 !important;
    }
  }

  .description {
    padding: 10px 24px;
    box-sizing: border-box;
    border: 1px solid #eee;
  }

  .demo-block-content {
    padding: 48px 24px 24px;
    background: #eee;
  }
}
</style>