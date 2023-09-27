import {request} from "../utils/request"

//下单，数据传输给服务器
const sendServer=(params)=>{
    //params为要传输的数据
    return request({
        url:"/posts",
        method:"POST",
        data:params
    })
}
module.exports={
    sendServer
}
