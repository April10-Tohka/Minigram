Page({
    

    /**
     * 页面的初始数据
     */
    data: {
       checked:false,
       address:"广东省珠海市斗门区斗门一中",
       phonenumber:13727851384,
       showpopup:false,
       showdetail:"",
       PopupInsertInformation:false,
       PopupCoupon:false
       
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
    // 点击阅读并同意按钮
    onChange(event)
    {
        console.log("点击了我已阅读按钮！",event);
        this.setData({checked:event.detail})
    },
    // 点击信息填写栏，跳出对应的弹窗
    onclick(event)
    {
        console.log("点击了，触发onclick！跳出弹窗",event.currentTarget.dataset.menu);
        this.setData({showpopup:true})
        if(event.currentTarget.dataset.menu=="insertinformation")
        {
            this.setData({PopupInsertInformation:true})
        }
        else if(event.currentTarget.dataset.menu=="coupon")
        {
            this.setData({PopupCoupon:true})
        }
        
    },
    // 关闭弹窗
    onClose()
    {
        console.log("关闭了弹出层！");
        this.setData({showpopup:false,PopupCoupon:false,PopupInsertInformation:false})
        
    },
    // 弹窗内点击了保存后，收到传来的参数并更新数据，并展示到页面
    updateInsertMsg(passobj)
    {
        this.setData({
            showdetail:passobj.detail.insert+","+passobj.detail.size+","+passobj.detail.num+"只"
        })
    }
})
