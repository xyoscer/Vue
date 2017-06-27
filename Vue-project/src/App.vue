<template>
  <div id="app">
    <div class="cart">
      <div class="cart-title">
        <h1>购物车</h1>
      </div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th><label for="check"><input type="checkbox" id="check"></label></th>
          <th>商品信息</th>
          <th>商品金额</th>
          <th>商品数量</th>
          <th>商品总额</th>
          <th>编辑</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item in productList">
            <td><label for=""><input type="checkbox"></label></td>
            <td><img v-bind:src="item.productImage" alt="商品描述" width="80px;height:80px;"></td>
            <td><span>item.productPrice</span></td>
            <td><span>-</span><input type="text" class="form-control" value="0" v-model="item.productQuantity" style="width:50px;"><span>+</span></td>
            <td><span>{{item.productPrice*item.productQuantity}}</span></td>
            <td><button class="btn">删除</button></td>
          </tr>
        </tbody>
      </table>
       <div class="cart-footer">
          <div class="item-total">总价：<a href="#" class="btn">结账</a></div>
       </div>
      </div>
  </div>

</template>

<script>

  export default {
    data: function () {
      return {
        productList: []
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.cartView()
      })
    },
    methods: {
      cartView: function () {
        this.$http.get('../../static/data/data.json').then(res => {
          this.productList = res.body.result.list
        })
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
  width: 100%;
}
#app ul {
  list-style: none;
}
.cart {
  width: 100%;
}
  .cart-title {
    width: 100%;
    text-align: center;
    color: #7fffd4;
  }

 .table {
   width: 100%;
   border-collapse: collapse;
   max-width: 100%;
   margin-bottom: 20px;
 }
  .table > thead > tr > th,
  .table > tbody > tr > td {
    padding: 8px;
    line-height: 1.4;
    vertical-align: middle;
    border-top: 1px solid #ddd;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  .table-hover > tbody > tr:hover {
    background-color: #f5f5f5;
  }
  .form-control {
    display: inline-block;
    padding: 6px 12px;
    margin: 0 5px;
    font-size: 14px;
    color: #555;
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  }
  .form-control:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);

  }
  a {
    text-decoration: none;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid transparent;
    color: #000;
    background-color: #7fffd4;

  }
  .btn:hover {
    color: #000;
    background-color: #8fffdd;
    outline: none;
  }


</style>
