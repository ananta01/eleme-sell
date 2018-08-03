<template>
  <div class="header">
    <div class="content-top">
      <div class="header-avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="header-content">
        <div class="header-content-title">
          <span class="title-brand"></span>
          <span class="title-name">{{ seller.name }}</span>
        </div>
        <div class="header-description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="header-support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="support-text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-bottom" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="header-back">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!--详情弹层页  (Sticky footers布局)-->
    <transition name="fade">
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrap">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="detail-supports">
              <li v-for="(item,index) in seller.supports" class="support-item">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Star from '../star/star';

  export default {
    props: {
      seller: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        detailShow: false
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

    },
    methods: {
      showDetail() {
        this.detailShow = true
      },

      hideDetail () {
        this.detailShow = false
      }

    },
    computed: {},
    components: {
      Star
    }
  }
</script>

<style lang="stylus">
  @import "../../common/css/mixin.styl";


  .fade-enter-active {
    transition: all .5s ease;
  }
  .fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }



  .header
    position: relative
    overflow: hidden
    color: #fff
    background: rgba(7, 17, 27, .4)

    .content-top
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0

      .header-avatar
        display: inline-block
        vertical-align: top

        img
          border-radius: 2px

      .header-content
        display: inline-block
        margin-left: 16px

        .header-content-title
          margin: 2px 0 8px 0

          .title-brand
            display: inline-block
            width: 30px
            height: 18px
            bg-image('brand')
            vertical-align: top
            background-size: 30px 18px
            background-repeat: no-repeat

          .title-name
            font-size: 16px
            font-weight: 700
            margin-left: 6px
            line-height: 18px

        .header-description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px

        .header-support
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat

            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')

          .support-text
            line-height: 12px
            font-size: 12px

      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0, 0, 0, .2)
        text-align: center

        .count
          font-size: 10px
        .icon-keyboard_arrow_right
          font-size: 10px
          margin-left: 2px
          line-height: 24px

    .bulletin-bottom
      position: relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, .2)

      .bulletin-title
        display: inline-block
        width: 22px
        height: 12px
        bg-image('bulletin')
        vertical-align: top
        margin-top: 8px
        background-size: 22px 12px
        background-repeat: no-repeat

      .bulletin-text
        margin: 0 4px
        font-size: 10px
        margin-top: 2px

      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        right: 12px
        top: 8px

    .header-back
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)

    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      background: rgba(7, 17, 27, .9)
      backdrop-filter: blur(10px)



      .detail-wrapper
        min-height: 100%
        width: 100%

        .detail-main
          margin-top: 64px
          padding-bottom: 64px

          .name
            line-height: 16px
            text-align: center
            font-size: 16px
            font-weight: 700

          .star-wrap
            margin-top: 18px
            paddomg: 2px 0
            text-align: center

          .title
            display: flex
            width: 80%
            margin: 28px auto 24px

            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255, 255, 255, .2)

            .text
              padding: 0 12px
              font-weight: 700
              font-size: 14px

          .detail-supports
            width: 80%
            margin: 0 auto

            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat

                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.guarantee
                  bg-image('guarantee_2')
                &.invoice
                  bg-image('invoice_2')
                &.special
                  bg-image('special_2')

              .text
                line-height: 16px
                font-size: 12px

          .bulletin
            width: 80%
            margin: 0 auto

            .content
              padding: 0 12px
              line-height: 24px
              font-size: 12px

      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px


</style>
