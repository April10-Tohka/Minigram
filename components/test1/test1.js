// components/test1/test1.js
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
        size:99
    },

    /**
     * 组件的方法列表
     */
    methods: {
        chufaevent()
        {
            console.log("这里是test1组件，我要用triggerEvent来触发myevent事件了");
            this.triggerEvent("myevent",{a:1,b:2,size:this.data.size});
        }
    }
})
