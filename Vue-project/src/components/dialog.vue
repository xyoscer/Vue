<template>
<div class="modal" transition="fade">
  <div class="modal-dialog">
    <div class="modal-header">
        <div class="header-title">{{title}}</div>
        <div class="close"><a href="#" @click="cancel">×</a></div>
      </div>
    <div class="modal-body">
        <p>{{text}}</p>
      </div>
      <div class="modal-footer">
        <a href="#"  class="btn" @click="cancel">{{cancle}}</a>
        <a href="#"  class="btn" @click="confirmHandle">{{confirm}}</a>
      </div>
    </div>
</div>

</template>

<script>
export default {
  data: function () {
    return {
      title: '提示',
      text: '确定要删除宝贝吗',
      cancle: '取消',
      confirm: '确定'
    }
  },
  methods: {
    cancel: function () {
      this.$emit('changeShow') // 向父组件通信，进行取消这个弹窗
    },
    confirmHandle: function () {
      this.$emit('confirmhandle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 遮罩层样式 */
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(170, 170, 170, 0.58);
  }
  /* 弹窗水平垂直居中 */
  .modal-dialog {
    position: absolute;
    z-index: 1001;
    width:400px;
    height:200px;
    left: 50%;
    top: 50%;
    text-align: left;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border: 1px solid #eee;
  }
  /* 弹出头部样式 */
  .modal-header {
    background-color: #42b983;
    color: #fff;
    line-height: 1.5;
    padding: 10px 2px;
  }
  .modal-header > div {
    display: inline-block;
  }
  .header-title {
    width:100px;
    margin-left: 10px;
  }
  .close {
    margin-right:5px;
    float: right;
  }
  .close > a {
    font-size: 20px;
    color: #eee;
  }
  .close > a:hover {
    font-size: 22px;
    color: #fff;
  }
  /* 弹窗内容样式 */
  .modal-body {
    padding-left:20px;
  }
  p {
    color: red;
  }
  /* 弹窗脚部样式 */
  .modal-footer {
    position: absolute;
    width:100%;
    bottom: 3px;
    text-align: center;
  }
  .modal-footer > a {
    color: #dc3e2c;
    margin-right: 5px;
  }
  .modal-footer > a:first-child {
    background-color: #ddd;
  }
</style>
