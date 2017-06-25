<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h1>{{ msgfromfather }}</h1>
  <button v-on:click="onClickMe">点击我，给父组件传递消息</button>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['msgfromfather'],
  methods: {
    onClickMe: function () {
      console.log(this.msgfromfather)
      this.$emit('child-tell-father', this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #42b983;
}
</style>
