// 格式化虫子信息
const formatInformation=(passdata)=>{
    return passdata.insert+" / "+passdata.num+"只";
}

//函数防抖
function debounce(func,time=1000)
{
    let timer;
    return function(...params){
        let context=this;
        let args=params;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func.apply(context,args);
        },time);
    }
}

//验证手机号码是否合法
function VerifyPhone(...phoneIfo)
{
    console.log("验证手机号码接受到的参数",phoneIfo);
    let phone=phoneIfo[0];//要验证的手机号码
    const phoneNumberRegex = /^1[3-9]\d{9}$/;
    if(phoneNumberRegex.test(phone))
    {
        console.log("合法！");
        return true;
    }
    else
    {
        console.log("不合法！");
        return false;
    }
}


module.exports = {
  formatInformation,
  debounce,
  VerifyPhone
}
