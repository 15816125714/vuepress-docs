export default {
  name: 'flex-layout',

  props: {
    tag: {
      type: String,
      default: 'div'
    },

    width: {
      type: [String, Number],
      default: ''
    },

    height: {
      type: [String, Number],
      default: ''
    },

    fullWin: {
      type: Boolean,
      default: false
    },

    fixedSize: {
      type: Boolean,
      default: false
    },

    clearFlex: {
      type: Boolean,
      default: false
    },

    direction: {
      type: String,
      default: 'row'
    },

    vertical: {
      type: Boolean,
      default: false
    },

    wrap: {
      type: Boolean,
      default: false
    },

    center: {
      type: Boolean,
      default: false
    },

    justifyContent: String,

    alignItems: String,

    alignContent: String,
    
    order: {
      type: [Number, String],
      default: ''
    },
    
    flexGrow: {
      type: [Number, String],
      default: 0
    },
    
    flexShrink: {
      type: [Number, String],
      default: 1
    },
    
    flexBasis: {
      type: [Number, String],
      default: 'auto'
    },

    flex: {
      type: [Number, String],
      default: ''
    },

    alignSelf: {
      type: String,
      default: 'auto'
    }
  },

  render (h) {
    return h(this.tag, {
      staticClass: 'flex-layout',
      class: {
        'is-vertical': this.vertical,
        'is-wrap': this.wrap,
        'is-fixed-size': this.fixedSize,
        'is-clear-flex': this.clearFlex,
        'is-center': this.center
      },
      style: {
        width: this.fullWin ? '100%' : this.width,
        height: this.fullWin ? '100%' : this.height,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        alignContent: this.alignContent,
        order: this.order,
        flexGrow: this.flexGrow,
        flexShrink: this.flexShrink,
        flexBasis: this.flexBasis,
        flex: this.flex,
        alignSelf: this.alignSelf
      },
      on: {
        ...this.$listeners
      }
    }, this.$slots.default)
  }
}
