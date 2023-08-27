import {formatInformation,debounce,VerifyPhone} from "../../utils/util"
Page({
    data: {
       AgreeClause:true,//是否点击我已阅读
       address:"广东省珠海市斗门区斗门一中",//地址
       phonenumber:"",//电话
       showpopup:false,//是否显示弹窗
       showdetail:"",//展示虫子信息内容
       PopupInsertInformation:false,//是否弹出填写虫子信息弹窗
       PopupCoupon:false,//是否弹出优惠券的弹窗
       PopupClause:false,//是否弹出条款协议的弹窗
       InsertInformationComplete:false,
       passdata:{},//弹窗传来的数据,
       clickInsertInformation:false,//是否点击了点击了虫子信息填写栏 （实现箭头翻转效果)
       clickCoupon:false,//是否点击了点击了优惠券栏 （实现箭头翻转效果)
       warntipTxt:"",//警告提示内容
       warntip:false,//是否显示警告
       price:18,//费用


       canOrder:false,//是否可以点击下单按钮
       
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
        this.setData({AgreeClause:event.detail})
    },
    // 点击信息填写栏，跳出对应的弹窗
    clickPopup(event)
    {
        console.log("点击了，触发onclick！跳出弹窗",event.currentTarget.dataset.menu);
        if(event.currentTarget.dataset.menu=="insertinformation")
        {
            this.setData({showpopup:true,PopupInsertInformation:true,clickInsertInformation:true})
        }
        else if(event.currentTarget.dataset.menu=="coupon")
        {
            this.setData({showpopup:true,PopupCoupon:true,clickCoupon:true})
        }
        else if(event.currentTarget.dataset.menu=="clause")
        {
            this.setData({showpopup:true,PopupClause:true})
        }
        
    },
    // 关闭弹窗
    closePopup()
    {
        console.log("关闭了弹出层！");
        this.setData({
            showpopup:false,PopupCoupon:false,PopupInsertInformation:false,PopupClause:false,clickInsertInformation:false,clickCoupon:false
        })
    },
    // 弹窗内点击了保存后，调用该函数,收到传来的参数并更新数据，并展示到页面
    updateInsertMsg(passobj)
    {
        console.log("弹窗内点击了保存，这里会收到传来的参数",passobj);
        this.setData({
            passdata:passobj.detail,
            showdetail:formatInformation(passobj.detail),
            InsertInformationComplete:passobj.detail.insertInformationComplete
        })
    },
    iptnothing(event)
    {
        return
    },
    
    // 输入手机号框获得焦点
    phonefocus(event)
    {
        this.setData({warntip:false})
    },
    // 输入手机号码框失去焦点
    phoneblur(event)
    {
        // 失去焦点时验证手机号码
        let phone=event.detail.value;
        //校验是否合法
        if(!VerifyPhone(phone))
        {
            this.setData({warntipTxt:"手机号码有误",warntip:true})
        }
        else{this.setData({warntip:false})}
    },
    // 点击 立即下单
    submitbutton(event)
    {
        console.log("点击了立即下单按钮",event);
        // 如果没有填写个人信息，弹出弹窗让用户填写，并提示

        // 如果没有填写虫子信息，弹出弹窗让用户填写,并提示
        if(!this.data.InsertInformationComplete)
        {
            this.setData({showpopup:true,PopupInsertInformation:true});
            wx.showToast({
                title: '请填写虫子信息',
                icon:"none",
            })
            return;
        }
        // 如果没有勾选同意条款，弹出弹窗让用户阅读并点击同意
        if(!this.data.AgreeClause)
        {
            this.setData({showpopup:true,PopupClause:true});
            wx.showToast({
              title: '请签署条款协议',
              icon:"none"
            })
            return;
        }
        console.log("所有资料填写完毕！之后会将信息发送到服务器");
        
    },

    
    
})






