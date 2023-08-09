// components/InsertDetail/InsertDetail.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        fileList:[],
        itemclass:"item",
        insert:"",
        size:""
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
        // 点击预览照片上的x，删除照片
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
        }
    }
})
