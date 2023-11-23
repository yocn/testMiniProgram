// components/home/homeView.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        imgUrl: "",
        title: "",
        naviPath: {
            type: String,
            value: "",
            observer: function (newVal, oldVal) {
                // this.setData({
                //     naviPathData: newVal
                // })
                // console.log("naviPath newVal:" + newVal + " naviPathData:" + this.naviPathData + " naviPath:" + this.properties.naviPath)
            }
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        nati: function (e) {
            wx.navigateTo({
                url: this.properties.naviPath,
            })
        }
    }
})