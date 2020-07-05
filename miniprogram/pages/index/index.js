var timestamp = Math.round(new Date().getTime() / 1000);
var riLiApi = "https://co-api.51wnl.com/calendar/details?token=CD78D9012F1C063E54C640EA27952F80&timestamp=" + timestamp + "&client=ceshi";
var ciDianApi = "https://fanyi.youdao.com/openapi.do";
var ziYuanApi1 = "https://api.douban.com/v2/movie/us_box";
var ziYuanApi2 = "https://api.douban.com/v2/movie/in_theaters";
const app = getApp();
var index = 0;
Page({
  data: {

  },
  changeTips: function () {
    var a = ['关卡号', '中英文', '图影音'];
    if (index >= a.length) {
      index = 0;
    }
    this.setData({
      tips: a[index]
    })
    index += 1;
  },
  onLoad: function (options) {
    wx.request({
      url: "",
      success: (res) => { }
    })
  },
  searching: function (e) {
    wx.request({
      url: ciDianApi,
      data: {
        q: e.detail.value,
        doctype: "json",
        type: "data",
        keyfrom: "dsfesdfesdff",
        key: "1068666577",
        version: "1.1"
      },
      success: (res) => {
        this.setData({
          searcher: "（释义：" + res.data.translation + "）",
          searches: res.data.web
        });
        console.log(res);
        if (!this.data.searcher || !this.data.searches) {
          this.setData({
            searcher: "",
            searches: null
          });
        }
      }
    })
  },
  searched: function (e) {
    app.globalData.searchWords = e.detail.value;
    wx.redirectTo({
      url: '/pages/content/content'
    })
  },
  searchout: function (e) {
    this.setData({
      searcher: "",
      searches: null
    })
  },
  cancel: function (e) {
    this.setData({
      words: ""
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setInterval(this.changeTips, 1000);
    wx.request({
      url: ziYuanApi1,
      data: {
        apikey: "0df993c66c0c636e29ecbb5344252a4a"
      },
      header: {
        'content-type': 'json'
      },
      success: (res) => {
        this.setData({
          profiles: res.data.subjects
        });
        console.log(res);
      }
    })
    wx.request({
      url: ziYuanApi2,
      data: {
        apikey: "0df993c66c0c636e29ecbb5344252a4a"
      },
      header: {
        'content-type': 'json'
      },
      success: (res) => {
        this.setData({
          summary: res.data.subjects
        });
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "旧词汇又双叒叕来了，一直给您不一样的体验！",
      desc: "旧词汇+",
      imageUrl: "../../image/app_icon.jpg"
    }
  }
})