<template>
  <div id="add">
    <div class="checkout-addr">
      <div class="check-step">
        <ul>
          <li class="cur">地址确认</li>
          <li>查看订单</li>
          <li>支付</li>
          <li>确认支付</li>
        </ul>
      </div>
      <div class="addr-list-wrap">
        <h3 class="list-title">选择收货地址</h3>
        <div class="addr-list">
          <ul>
            <li v-for="(item, index) in filterAddress" v-bind:class="{'check': index == currentIndex}"
                 @click="currentIndex=index">
              <dl>
                <dt>{{item.userName}}</dt>
                <dd class="address">{{item.streetName}}</dd>
                <dd class="tel">{{item.tel}}</dd>
              </dl>
            </li>
            <li class="addr-new">
              <div class="add-new-inner">
                <p>添加新增地址</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="shipping-addr-more">
          <a href="#" @click="limitNum = addressList.length" v-show="limitNum == 3">
            <p>显示全部地址列表</p>
          </a>
          <a href="#" @click="limitNum = 3" v-show="limitNum == addressList.length">
            <p>收回地址列表</p>
          </a>
        </div>
      </div>
      <h3 class="list-title">配送方式</h3>
      <div class="shipping-method">
        <ul>
          <li v-bind:class="{'active':shipMethod == 1}" @click="shipMethod=1">菜鸟驿站</li>
          <li v-bind:class="{'active':shipMethod == 2}" @click="shipMethod=2">京东快递</li>
        </ul>
      </div>

      <h3 class="list-title">支付方式</h3>
      <div class="shipping-method">
        <ul>
          <li v-bind:class="{'active':payMethod == 2}" @click="payMethod=2">货到付款</li>
          <li v-bind:class="{'active':payMethod == 1}" @click="payMethod=1">在线支付</li>
        </ul>
      </div>
    </div>
    <!--<router-link></router-link>-->
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        limitNum: 3,
        addressList: [],
        currentIndex: 0,
        shipMethod: 1,
        payMethod: 1
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getAddressList()
      })
    },
    computed: {
      // 用于循环输出列表，默认只显示3条信息
      filterAddress: function () {
        return this.addressList.slice(0, this.limitNum)
      }
    },
    methods: {
      getAddressList: function () {
        this.$http.get('../../static/data/address.json').then(res => {
          var resResult = res.data
          if (resResult.status === '0') {
            this.addressList = res.body.result
          }
        })
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
  }
  .checkout-addr {
    with: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .check-step {
    padding: 5px 0;
  }
  .check-step ul {
    display: flex;
    list-style: none;
    margin: 25px 0 50px 0;
  }
  .check-step li {
    position: relative;
    display: inline-block;
    flex: 1;
    width: 25%;
    line-height: 1.4;
    padding: 0 2em 2em 2em;
    border-bottom: 2px solid #ccc;
    color: #999;
    text-align: center;
    font-size: 16px;
  }
  .check-step li::before {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 52%;
    width: 6px;
    height: 12px;
    z-index: 100;
    transform: rotate(45deg);
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
  }
  .check-step li::after {
    position: absolute;
    bottom: -8px;
    content: '';
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ccc;
  }

  .check-step li.cur {
    border-color: #ee7a23;
    color: #ee7a23;
  }
  .check-step li.cur::after {
    background-color: #ee7a23 ;
  }
  .check-step li.cur::before {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 52%;
    width: 6px;
    height: 12px;
    z-index: 100;
    transform: rotate(45deg);
    border: 2px solid #00ff72;
    border-top: 0;
    border-left: 0;
  }
  .list-title {
    margin-left: 10px;
    font-weight: bold;
  }
  .addr-list ul{
    width: 100%;
    margin-top: 5px;
  }
  .addr-list ul li {
    display: inline-block;
    position: relative;
    vertical-align: top;
    width: -webkit-calc(25% - (10px + 10px + 2px + 10px) * 2);
    height: 150px;
    margin: 10px;
    padding: 5px 10px;
    border: 2px solid #e9e9e9;
    cursor: pointer;
  }
  .addr-list ul li:hover {
    border: 2px solid #ee7a23;
    cursor: pointer;
  }
  .addr-list ul li.check {
    border: 2px solid #ee7a23;
    cursor: pointer;
  }
  .addr-list ul li.check::after {
    position: absolute;
    content: '';
    bottom: 10px;
    right: 6px;
    width: 10px;
    height: 20px;
    z-index: 100;
    transform: rotate(45deg);
    border: 3px solid #00ff72;
    border-top: 0;
    border-left: 0;
  }
  .addr-list ul li.check::before {
    position: absolute;
    content: '';
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    z-index: 10;
    border: 26px solid #ee7a23;
    border-top-color: transparent;
    border-left-color: transparent;
  }
  .addr-list li dt {
    margin-bottom: 10px;
    font-size: 18px;
  }
  .addr-list li dd {
    margin-bottom: 6px;
    line-height: 20px;
  }
  .addr-list li .address {
    height: 40px;
  }
  .addr-list li .tel {
    color: #605f5f;
  }
  .shipping-addr-more {
    margin: 10px;
  }
  .shipping-addr-more a {
    text-decoration: none;
    color: #debd07;
  }
  .shipping-method {
    margin-top: 10px;
    margin-left: 100px;
  }
  .shipping-method li{
    display: inline-block;
    border: 1px solid #e9e9e9;
    padding:10px 15px;
    margin-left: 20px;
  }
  .shipping-method li.active {
    border: 2px solid #ee7a23;
    cursor: pointer;
  }
</style>
