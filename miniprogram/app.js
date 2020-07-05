//app.js
App({
  onLaunch: function () {
    wx.checkSession({
      fail: (res) => {
        wx.login({
          success: (res) => { },
        });
      }
    });
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            lang: "zh_CN",
            withCredentials: false,
            success: res => {
              this.globalData.userInfo = res.userInfo;
            }
          });
        }
      }
    });
  },
  globalData: {
    userInfo: null,
    searchWords: ""
  }
})