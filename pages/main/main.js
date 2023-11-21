// pages/main/main.js

// require('../../@babel/runtime/helpers/typeof')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasUserInfo: false,
        userInfo: {},
        msg: "msg"
    },

    getUserProfileClick() {
        this.getUserProfile()
    },

    getUserProfile(e) {
        console.log("getUserProfile:")
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                    msg: "avatarUrl:" + res.userInfo.avatarUrl + "\n city:" + res.userInfo.city + "\n country:" + res.userInfo.country  + "\n gender:" + res.userInfo.gender  + "\n nickName:" + res.userInfo.nickName 
                })
                console.log("success userInfo:" + this.userInfo)
            },
            fail: (res, a) => {
                console.log("fail::" + res + " a:" + typeof (res))
            },
            complete: (res) => {
                console.log("complete::" + res.errMsg)
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log("onLoad:::" + typeof (userInfo))
        // this.getUserProfile()
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