// pages/maptest/maptest.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        centerlat:0,
        centerlng:0,
        nearbyhotel:[],
        testmarkers:[],
        iptvalue:"",
        fileList:[
            {
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片1',
                deletable:true
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let MapContext=wx.createMapContext('maptest', this);
        console.log(MapContext);
        MapContext.getCenterLocation({
            success:(res)=>
            {
                console.log(`centerlat:${this.data.centerlat},centerlng:${this.data.centerlng}`);
                console.log("成功调用MapContext.getCenterLocation的接口,res:",res);
                this.setData({
                    centerlat:res.latitude,
                    centerlng:res.longitude,
                })
                console.log(`更新数据后，centerlat:${this.data.centerlat},centerlng:${this.data.centerlng}`);
            }
        })
        
    },

    markertap:function(event)
    {
        console.log("触碰了图标，event：",event);
    },
    SearchHotel()
    {
        wx.showToast({
          title: '正在寻找附近的酒店。。。',
          mask:true
        })
        setTimeout(()=>{wx.request({
            url:"https://apis.map.qq.com/ws/place/v1/search?key=NAIBZ-2IOCZ-FEQXC-ZNM5I-T3IQQ-ORB4R&keyword=酒店&boundary=nearby(22.05748,113.35280,1000,0)",
            success:(res)=>
            {
                console.log("找到附近的酒店了",res);
                this.setData({
                    nearbyhotel:res.data.data
                })
                let hotleData=[];
                this.data.nearbyhotel.forEach((element)=>{
                    
                    let hotel=
                    {
                        id:element.id,
                        title:element.title,
                        latitude:element.location.lat,
                        longitude:element.location.lng,
                        iconPath:"../../icons/坐标.png",
                        width:30,
                        height:30,
                    }
                    hotleData.push(hotel);
                    
                })
                console.log("看看是否添加进去",hotleData);
                
                this.setData({
                    testmarkers:hotleData
                })
                wx.hideToast();
                
            }
        })},2000)
        
    },
    afterRead(event)
    {
        console.log("文件上传完毕后，会触发after-read函数，event:",event);
        const file=event.detail.file;//获取上传图片的信息
        let tempfilelist=this.data.fileList;
        wx.uploadFile({
          filePath: file.url,
          name: 'testfile',
          url: 'https://file-uniakwxezc-mp-0d3b7191-4034-400e-bd11-c48edcc2d836.oss-cn-zhangjiakou.aliyuncs.com',
          success:(res)=>
          {
              console.log("上传到服务器返回的数据",res); 
              let imgobj=
              {
                  url:file.url,
                  name:"图片2",
                  deletable:true
              }
              
              tempfilelist.push(imgobj);
              console.log("上传文件函数的this：",this);
              this.setData({
                  fileList:tempfilelist
              })
          }
        })
        
    },


    //地址解析
    addressResolution()
    {
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?address=',
          method:"GET",
          data:
          {
              key:"NAIBZ-2IOCZ-FEQXC-ZNM5I-T3IQQ-ORB4R",
              address:this.data.iptvalue
          },
          success:(res)=>
          {
              console.log("成功返回res",res);
              let temp=[];
              let address={
                  longitude:res.data.result.location.lng,
                  latitude:res.data.result.location.lat,
                  iconPath:"../../icons/坐标.png",
                  width:30,
                  height:30,
                    
              };
              temp.push(address);
              this.setData({
                  testmarkers:temp
              })
          }
        })
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