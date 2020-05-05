var timestamp = Math.round(new Date().getTime() / 1000);
var riLiApi = "http://co-api.51wnl.com/calendar/details?token=CD78D9012F1C063E54C640EA27952F80&timestamp=" + timestamp + "&client=ceshi";
Page({
  data: {

  },
  onLoad: function(options) {
    wx.request({
      url: "",
      success: (res) => {},
      fail: (res) => {}
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "旧词汇又双叒叕来了，一直给您不一样的体验！",
      desc: "旧词汇+",
      imageUrl: "../../image/app_icon.jpg"
    }
  }
})