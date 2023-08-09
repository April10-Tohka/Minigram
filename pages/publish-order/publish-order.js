Page({

    /**
     * 页面的初始数据
     */
    data: {
       checked:false,
       address:"广东省珠海市斗门区斗门一中",
       phonenumber:13727851384,
       showpopup:false,
       showdetail:"显示虫子的信息"
       
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

    },
    onChange(event)
    {
        console.log(event);
        this.setData({checked:event.detail})
    },
    onclick()
    {
        console.log("点击了，触发onclick！");
        this.setData({showpopup:true})
    },
    onClose()
    {
        console.log("关闭了弹出层！");
        this.setData({showpopup:false})
    }
})
