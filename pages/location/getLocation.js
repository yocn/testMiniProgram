// pages/location/getLocation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg: "non"
    },

    handlerGobackClick() {
        wx.navigateBack()
    },

    handlerGohomeClick() {
        var pages = getCurrentPages()
        var pagesCount = pages.length
        wx.navigateBack(pagesCount)
        console.log(pagesCount)
    },

    // https://api.kertennet.com/geography/locationInfo?lat=31.14581&lng=121.67892
    getLocation() {
        wx.showLoading({
            title: '加载中',
        })
        console.log("getLocation:")
        var that = this
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                const latitude = res.latitude
                const longitude = res.longitude
                that.setData({
                    msg: "纬度：" + longitude + "纬度:" + latitude
                })
                wx.request({
                    url: 'https://api.kertennet.com/geography/locationInfo',
                    data: {
                        lat: latitude,
                        lng: longitude
                    },
                    success(res) {
                        console.log(res.data)
                        var m = "地址：" + res.data['data']['address']
                        console.log(m)
                        that.setData({
                            msg: that.data.msg + "\n" + m
                        })
                    },
                    fail: (res) => {
                        console.log("getLocation fail::" + res)
                    },
                    complete: (res) => {
                        console.log("getLocation complete::" + res.errMsg)
                        wx.hideLoading()
                    }
                })
                console.log("getLocation 经度:" + longitude + " 纬度:" + latitude)
            },
            fail: (res) => {
                console.log("getLocation fail::" + res)
            },
            complete: (res) => {
                console.log("getLocation complete::" + res.errMsg)
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})