<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}"
       v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>child tells father : {{ childMsg }}</p>
    <Components-hello msgfromfather="父组件给子组件传递的消息"
    v-on:child-tell-father="listenToSon"></Components-hello>
  </div>
</template>

<script>
  import Store from './store'
  import ComponentsHello from './components/Hello'
  export default {
    data: function () {
      return {
        title: 'Vue test hello!',
        items: Store.fetch(),
        newItem: '',
        childMsg: ''
      }
    },
    components: { ComponentsHello },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    methods: {
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished
      },
      addNew: function () {
        this.items.push({
          label: this.newItem,
          isFinished: false
        })
        this.newItem = ''
      },
      listenToSon: function (msg) {
        console.log(msg)
        this.childMsg = msg
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app ul {
  list-style: none;
}
#app ul li {
  padding: 5px 10px;
}
.finished {
    color: red;
  }
</style>
