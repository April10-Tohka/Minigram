// components/InsertDetail/InsertDetail.js
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
            console.log("上传照片后，会调用after-read事件，",event);
            const fileobj=
            {
                url:event.detail.file.tempFilePath,
            }
            const tempfileList=this.data.fileList;
            tempfileList.push(fileobj);
            this.setData({fileList:tempfileList});
        },
        // 点击预览照片上的x，删除照片  (！未完成！)
        deleteItem(event)
        {
            console.log("点击了预览照片的x后，会调用该函数不",event);
        },
        //点击选择虫子种类
        selectinsert(event)
        {
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
            this.setData({insertNum:event.detail});
        }
        // 怎么实现路由缓存，即选择好数量，保存后重新打开弹窗，数量仍然是之前选择好的数量?
    },
   
})
