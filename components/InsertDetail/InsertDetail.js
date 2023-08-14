let Cachenum=1;//记录选择数量，实现数据缓存效果
let CachefileList=[];//记录上传照片，实现数据缓存效果
let CacheinsertList=[
    {name:"蟑螂",ischoose:false,_id:"001"},
    {name:"蜘蛛",ischoose:false,_id:"002"},
    {name:"老鼠",ischoose:false,_id:"003"},
];
let CachesizeList=[
    {name:"大",ischoose:false,_id:"001"},
    {name:"中等",ischoose:false,_id:"002"},
    {name:"小",ischoose:false,_id:"003"},
];
let Cacheinsert="";
let Cachesize="";
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
        insert:"",
        size:"",
        insertNum:1,
        insertList:[],
        sizeList:[],
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
            let value=event.currentTarget.dataset.value;
            Cacheinsert=value;
            CacheinsertList.forEach((element)=>{
                if(element.name==value){element.ischoose=true}
                else{element.ischoose=false}
            })
            this.setData({
                insertList:CacheinsertList,
                insert:event.currentTarget.dataset.value
            });
        },
        // 点击选择虫子大小
        selectsize(event)
        {
            let value=event.currentTarget.dataset.value;
            Cachesize=value;
            let CachesizeList=this.data.sizeList;
            CachesizeList.forEach((element)=>{
                if(element.name==value){element.ischoose=true}
                else{element.ischoose=false}
            })
            this.setData({
                sizeList:CachesizeList,
                size:value
            })
        },
        // 点击保存按钮，实现组件间通信
        savebutton()
        {
            // todo:保存前要做个校验
            if(Cacheinsert=="")
            {
                console.log("虫子种类不能为空！")
                return;
            }
            else if(Cachesize=="")
            {
                console.log("虫子大小不能为空！");
                return;
            }
            else
            {
                console.log("选择完毕！");
                
            }
            // 传出去的数据
            let passobj={
                insert:Cacheinsert,
                size:Cachesize,
                num:Cachenum
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
            this.setData({
                insertNum:Cachenum,
                fileList:CachefileList,
                insertList:CacheinsertList,
                sizeList:CachesizeList
            });
            console.log("组件进入页面节点树后执行，insertnum：",this.data.insertNum);
            console.log("fileList",this.data.fileList);
            console.log("sizeList",this.data.sizeList);
            console.log("insertList",this.data.insertList);
            console.log("cacheinsert:",Cacheinsert);
            console.log("cachesize:",Cachesize);
            console.log("cachenum:",Cachenum);
        },
        
    }
   
})
