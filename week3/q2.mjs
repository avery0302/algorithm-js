//深拷贝 序列化实现
//数据传递
//为防止变量转成字符串，不从控制台输入用例了

let x=null//深拷贝的变量

console.log(deepCopy(x));//调用

function deepCopy(x){
    return JSON.parse(JSON.stringify(x))
}