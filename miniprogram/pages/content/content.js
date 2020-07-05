// miniprogram/pages/content/content.js
var ciDianApi = "https://dict-co.iciba.com/api/dictionary.php";
var tuHuaApi = "https://api.douban.com/v2/book/search";
var yinYueApi = "https://api.douban.com/v2/music/search";
var dianYingApi = "https://api.douban.com/v2/movie/search";
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    move: 850,
    word: "+"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: ciDianApi,
      data: {
        w: app.globalData.searchWords,
        type: "json",
        key: "1F9CA812CB18FFDFC95FC17E9C57A5E1"
      },
      success: (res) => {
        console.log(res);
        var riu = "";
        var r = res.data.symbols[0];
        var s = res.data.exchange;
        for (var i in r.parts) {
          if (r.parts[i].part != undefined) {
            riu += '\n' + r.parts[i].part + '\t';
            for (var u in r.parts[i].means) {
              riu += r.parts[i].means[u] + '；';
            }
          } else {
            riu += '\n<\t' + r.parts[i].part_name + '\t>\t';
            for (var u in r.parts[i].means) {
              riu += r.parts[i].means[u].word_mean + '；';
            }
          }
        }
        try {
          var siu1 = '过去分词 ' + s.word_done[0] + '\n现在分词 ' + s.word_ing[0] + '\n三单复数 ' + (s.word_third[0] ? s.word_third[0] : s.word_pl[0]);
          var siu2 = s.word_er[0] + ' 比较级\n' + s.word_est[0] + ' 最高级\n' + s.word_past[0] + ' 过去式';
        } catch (e) {
          var siu1 = "";
          var siu2 = "";
        }
        this.setData({
          word: res.data.word_name,
          tts: r.ph_tts_mp3 ? r.ph_tts_mp3 : r.symbol_mp3,
          am1: r.ph_tts_mp3 ? "美:[" + r.ph_am + "]" : "中:[" + (r.word_symbol ? r.word_symbol : '') + "]",
          am2: r.ph_tts_mp3 ? r.ph_am_mp3 : r.symbol_mp3,
          en1: r.ph_tts_mp3 ? "英:[" + r.ph_en + "]" : "[]",
          en2: r.ph_en_mp3,
          parts: riu.substring(1),
          ex1: siu1,
          ex2: siu2
        })
      }
    })
  },
  tts: function () {
    const tt = wx.createInnerAudioContext();
    tt.src = this.data.tts;
    tt.play();
  },
  am2: function () {
    const am = wx.createInnerAudioContext();
    am.src = this.data.am2;
    am.play();
  },
  en2: function () {
    const en = wx.createInnerAudioContext();
    en.src = this.data.en2;
    en.play();
  },
  moveable: function () {
    this.setData({
      move: -8
    })
  },
  backHome: function (e) {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(this.moveable, 1500);
    wx.request({
      url: yinYueApi,
      data: {
        tag: app.globalData.searchWords,
        start: 0,
        count: 1,
        apikey: "0df993c66c0c636e29ecbb5344252a4a"
      },
      header: {
        'content-type': 'json'
      },
      success: (res) => {
        console.log(res);
        this.setData({
          imageBg: res.data.musics[0].image
        })
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

  }
})