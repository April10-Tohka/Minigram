const bastURL="https://jsonplaceholder.typicode.com";//接口的地址

const request=(params)=>{
    let dataobj=params.data||{};//网路请求参数
    let headerobj={
        "content-type":"application/json"
    }//网络请求头
    return new Promise((resolve,reject)=>{
        wx.request({
          url: bastURL+params.url,
          method:params.method||"GET",
          data:dataobj,
          header:headerobj,
          success:(res)=>{
              console.log("网络请求成功！",res);
              resolve(res.data);
          },
          fail:(err)=>{
              console.log("网络请求失败！",err);
              reject(err);
          }
        })
    })
}

module.exports={
    request
}