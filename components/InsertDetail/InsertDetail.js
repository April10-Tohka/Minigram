Component({
    properties: {

    },
    relations:{
        "../../pages/publish-order/publish-order.wxml":{
            type:"parent"
        }
    },
    data: {
        fileList:[],//上传图片的列表
        insert:"",//选中的虫子
        size:"",//选中的大小
        insertNum:1,//选中的数量
        insertList:[
            {name:"蟑螂",ischoose:false,_id:"001"},
            {name:"蜘蛛",ischoose:false,_id:"002"},
            {name:"老鼠",ischoose:false,_id:"003"},
        ],//渲染到页面的数据
        sizeList:[
            {name:"大",ischoose:false,_id:"001"},
            {name:"中等",ischoose:false,_id:"002"},
            {name:"小",ischoose:false,_id:"003"},
        ],//渲染到页面的数据
    },
    methods: {
        // 点击上传图片,并显示预览照片
        afterRead(event)
        {
            const fileobj={url:event.detail.file.tempFilePath};
            this.data.fileList.push(fileobj);
            this.setData({fileList:this.data.fileList});
        },
        // 点击预览照片上的x，删除照片 
        deletePic(value)
        {
            let index=value.detail.index;
            this.data.fileList.splice(index,1);
            this.setData({fileList:this.data.fileList});
        },
        //点击选择虫子种类
        selectinsert(event)
        {
            let value=event.currentTarget.dataset.value;
            this.data.insertList.forEach((element)=>{
                if(element.name==value){element.ischoose=true}
                else{element.ischoose=false}
            })
            this.setData({
                insertList:this.data.insertList,
                insert:value
            })
        },
        // 点击选择虫子大小
        selectsize(event)
        {
            let value=event.currentTarget.dataset.value;
            this.data.sizeList.forEach((element)=>{
                if(element.name==value){element.ischoose=true}
                else{element.ischoose=false}
            })
            this.setData({
                sizeList:this.data.sizeList,
                size:value
            })
        },
        // 步进器显示虫子数量
        stepper(event)
        {
            this.setData({insertNum:event.detail});
        },
        // 点击保存按钮，实现组件间通信
        savebutton()
        {
            // 传出去的数据
            let passobj={
                insert:this.data.insert,
                size:this.data.size,
                num:this.data.insertNum
            }
            // 本地缓存所选择的数据 
            // 实现下一次点开弹窗显示上一次所选情况  
            let CacheData={
                insertList:this.data.insertList,
                sizeList:this.data.sizeList,
                fileList:this.data.fileList,
                insertNum:this.data.insertNum,
                insert:this.data.insert,
                size:this.data.size
            }
            wx.setStorageSync('selectedData', CacheData);
            // 触发save事件，并将数据传出去并渲染显示到页面中
            this.triggerEvent("save",passobj);
            //关闭弹窗
            this.triggerEvent("closePopup")
        },
    },
    lifetimes:{
        attached()
        {
            console.log("组件实例进入到页面节点树时调用!");
            // 获取本地数据
            let selectedData=wx.getStorageSync('selectedData');
            // 本地有数据的话，更新数据并渲染到页面
            if(selectedData)
            {
                this.setData({
                    fileList:selectedData.fileList,
                    insert:selectedData.insert,
                    insertList:selectedData.insertList,
                    insertNum:selectedData.insertNum,
                    size:selectedData.size,
                    sizeList:selectedData.sizeList
                })
            }
        },
        
    }
   
})
