<template>
  <div id="app">
    <div class="cart">
      <div class="cart-title">
        <h1>购物车</h1>
      </div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th><input type="checkbox" id="checkall1" class="checkbox" v-model="checkall" @click="checkAll(checkall)"><label for="checkall1">全选</label></th>
          <th>商品信息</th>
          <th>商品金额</th>
          <th>商品数量</th>
          <th>商品总额</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in productList">
            <td width="5%"><input type="checkbox" class="checkbox" v-bind:id = "index" v-model="item.checked" @click="chooseOne()"><label v-bind:for="index"></label></td>
            <td width="30%" style="text-align: left;"><img v-bind:src="item.productImage"alt="商品描述" width="80px;height:80px;" style="float:left"><a href="#" class="desc">{{item.productName}}</a></td>
            <td width="10%"><span>{{item.productPrice | formatMoneny}}</span></td>
            <td width="30%"><span @click="changeQuantity(item, -1)">-</span>
              <input type="text" class="form-control" value="0" v-model="item.productQuantity" style="width:50px;">
              <span @click="changeQuantity(item, 1)">+</span></td>
            <td width="10%"><span>{{item.productPrice*item.productQuantity | formatMoneny}}</span></td>
            <td><button class="btn">删除</button></td>
          </tr>
        </tbody>
      </table>
       <div class="cart-footer">
          <div class="item-total">以选<span class="badge">{{checkNum}}</span>件/全部<span class="badge">{{totalProductNum}}</span>件<span>合计：{{totalMoney | formatMoneny}}</span><a href="#" class="btn">结账</a></div>
       </div>
      </div>
  </div>

</template>

<script>

  export default {
    data: function () {
      return {
        productList: [],
        checkall: false,
        totalMoney: 0,
        checkNum: 0,
        totalProductNum: 0
      }
    },
    filters: {
      formatMoneny: function (value) {
        return '￥' + value.toFixed(2)
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
          this.totalProductNum = this.productList.length
        })
      },
      changeQuantity: function (product, flag) {
        if (flag > 0) {
          product.productQuantity++
        } else {
          product.productQuantity--
          if (product.productQuantity < 1) {
            product.productQuantity = 1
          }
        }
        this.calcTotalMoney()
      },
      checkAll: function (checkall) {
        this.checkNum = 0
        if (checkall) {
          this.productList.forEach((item, index) => {
            if (typeof item.checked === 'undefined') {
              this.$set(item, 'checked', true)
              this.checkNum++
            } else {
              item.checked = true
              this.checkNum++
            }
          })
        } else {
          this.productList.forEach((item, index) => {
            if (typeof item.checked === 'undefined') {
              this.$set(item, 'checked', false)
            } else {
              item.checked = false
              this.checkNum = 0
            }
          })
        }
        this.calcTotalMoney()
      },
      chooseOne: function () {
        this.checkNum = 0
        this.productList.forEach((item, index) => {
          if (item.checked) {
            this.checkNum++
          }
        })
        this.calcTotalMoney()
      },
      calcTotalMoney: function () {
        this.totalMoney = 0
        this.productList.forEach((item, index) => {
          if (item.checked) {
            this.totalMoney += item.productPrice * item.productQuantity
          }
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
    padding: 7px 2px;
    line-height: 1.4;
    vertical-align: middle;
    border-top: 1px solid #ddd;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #fcfcfc;
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
  span {
    display: inline-block;
  }
  span:hover {
    cursor: pointer;
  }
  .checkbox {
    visibility: hidden;
    margin-right: 10px;
  }
  .checkbox + label {
    position: relative;
    cursor: pointer;
    margin-right: 10px;
  }
  .checkbox + label::before {
    position: absolute;
    top: 2px;
    left: -30px;
    display: inline-block;
    width: 15px;
    height: 15px;
    content: '';
    border: 1px solid #c0c0c0;
    border-radius: 3px;
  }
  .checkbox + label::after {
    display: none;
    content: '';
  }
  .checkbox:checked + label::after {
    display: block;
    position: absolute;
    left: -25px;
    top: 2px;
    width: 6px;
    height: 10px;
    transform: rotate(45deg);
    border: 2px solid red;
    border-top: 0;
    border-left: 0;
  }
.cart-footer {
  float: right;
  margin-right: 50px;
}
  .item-total > span:nth-last-of-type(1) {
    margin-right: 30px;
    margin-left: 30px;
  }
  .badge {
    padding: 0 5px;
    color: #3fe0bb;
    font-size: 14px;
    font-weight: bold;
  }
  .desc {
    color: #363636;
    height: 50px;
    vertical-align: top;
    margin-left: 8px;
    word-wrap: break-word;
  }
  .desc:hover {
    text-decoration: underline;
    color: #c68607;
  }





</style>
