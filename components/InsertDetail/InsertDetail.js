let Cachenum=1;//记录选择数量，实现数据缓存效果
let CachefileList=[];//记录上传照片，实现数据缓存效果
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    relations:{
        "../../pages/publish-order/publish-order.wxml":{
            type:"parent"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        fileList:[],
        itemclass:"item",
        insert:"",
        size:"",
        insertNum:1
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击上传图片,并显示预览照片
        afterRead(event)
        {
            const fileobj=
            {
                url:event.detail.file.tempFilePath,
            }
            CachefileList.push(fileobj);
            this.setData({fileList:CachefileList});
        },
        // 点击预览照片上的x，删除照片 
        deletePic(value)
        {
            let index=value.detail.index;
            CachefileList.splice(index,1);
            this.setData({fileList:CachefileList});
        },
        //点击选择虫子种类
        selectinsert(event)
        {
            console.log(event);
            console.log("点击了！",event.currentTarget.dataset.value);
            this.setData({insert:event.currentTarget.dataset.value});
            console.log("insert:",this.data.insert);
        },
        // 点击选择虫子大小
        selectsize(event)
        {
            console.log("又点击了！",event.currentTarget.dataset.value);
            this.setData({size:event.currentTarget.dataset.value});
            console.log("size:",this.data.size);
        },
        // 点击保存按钮，实现组件间通信
        savebutton()
        {
            let passobj={
                insert:this.data.insert,
                size:this.data.size,
                num:this.data.insertNum
            }
            // 触发save事件，并将数据传出去
            this.triggerEvent("save",passobj);
            //关闭弹窗
            this.triggerEvent("closePopup")
        },
        // 步进器显示虫子数量
        stepper(event)
        {
            Cachenum=event.detail;
            this.setData({insertNum:event.detail});
        },
    },
    lifetimes:{
        attached()
        {
            // 该组件进入到页面节点树时，更新上一次选择的数据，实现数据缓存效果
            this.setData({insertNum:Cachenum,fileList:CachefileList});
            console.log("组件进入页面节点树后执行，insertnum：",this.data.insertNum,this.data.fileList);
        },
        
    }
   
})
