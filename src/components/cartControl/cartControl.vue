<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease " v-show="food.count>0"
           @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {
      addCart(event) {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++;
        }
        this.$emit('cart-add', event.target)
      },

      decreaseCart() {
        if (this.food.count) {
          this.food.count--;
        }
      }
    },
    computed: {},
    components: {}
  }
</script>

<style scoped lang="stylus">

  .move-enter-active, .move-leave-active
    transition: all .3s linear

  .move-enter, .move-leave-active
    opacity: 0
    transform: translate3d(0, 0, 0)
    transform: translateX(40px)


  .cartcontrol
    font-size: 0

    .cart-decrease
      display: inline-block
      padding: 6px

      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)

    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)

    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

</style>
