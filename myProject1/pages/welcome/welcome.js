Page({

  data: {
    username:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    this.setData({username : options.username})
  },

 
})