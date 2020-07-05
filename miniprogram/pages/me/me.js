// miniprogram/pages/me/me.js
const app = getApp();

Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      wx.getUserInfo({
        lang: "zh_CN",
        withCredentials: false,
        success: (res) => {
          this.setData({
            userInfo: res.userInfo
          })
        }
      });
    }
  },
  getUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  onShareAppMessage: function (e) {
    return {
      title: "旧词汇又双叒叕来了，一直给您不一样的体验！",
      desc: "旧词汇+",
      imageUrl: "../../image/app_icon.jpg"
    }
  }

})