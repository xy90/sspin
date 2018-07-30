//index.js

//获取应用实例
const app = getApp()
var data = require('./data.js')

Page({
  data: {
    swiperList: null,
    actvList: null,
    showGoTop: false
  },

  onLoad: function () {
    this.setData({
      swiperList: data.swiperList,
      actvList: data.actvList
    })
  },

// 获取滚动条当前位置
  onPageScroll: function (e) { 
    if (e.scrollTop > 200) {
      this.setData({
        showGoTop: true
      });
    } else {
      this.setData({
        showGoTop: false
      });
    }
  },

 // 一键回到顶部
  goTop: function (e) { 
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
})
