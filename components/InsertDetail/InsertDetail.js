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
        insertNum:1,//选中的数量
        insertList:[
            {name:"蟑螂",ischoose:false,_id:"001"},
            {name:"蜘蛛",ischoose:false,_id:"002"},
            {name:"老鼠",ischoose:false,_id:"003"},
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

        // 步进器显示虫子数量
        stepper(event)
        {
            this.setData({insertNum:event.detail});
        },
        // 点击保存按钮，实现组件间通信
        savebutton()
        {
            // 点击保存前，先校验是否选择了虫子种类 没有弹出提示窗
            if(!this.data.insert)
            {
                wx.showToast({
                  title: '请选择虫子种类',
                  icon:"success",
                  image:"../../icons/提示说明.png"
                })
                return;
            }
            // 有执行下面操作
            // 传出去的数据
            let passobj={
                insert:this.data.insert,
                num:this.data.insertNum,
                fileList:this.data.fileList,
                insertInformationComplete:true// 确认已填好虫子信息，传递给publish-order
            }
            // 本地缓存所选择的数据(异步操作) 实现下一次点开弹窗显示上一次所选情况  
            new Promise(resolve=>{
                let CacheData={
                    insertList:this.data.insertList,
                    fileList:this.data.fileList,
                    insertNum:this.data.insertNum,
                    insert:this.data.insert,
                }
                resolve(CacheData);
            })
            .then((CacheData)=>{
                wx.setStorage({
                    key:"selectedData",
                    data:CacheData
                })
            })
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
            // 获取本地数据(异步操作)
            new Promise((resolve)=>{
                wx.getStorage({
                    key:"selectedData",
                    success:(res)=>{
                        resolve(res.data);
                    }
                })
            })
            .then((data)=>{
                this.setData({
                    fileList:data.fileList,
                    insert:data.insert,
                    insertList:data.insertList,
                    insertNum:data.insertNum,
                })
            })
           
        },
        detached()
        {
            console.log("组件实例从页面树移除");
        }
        
    }
   
})
