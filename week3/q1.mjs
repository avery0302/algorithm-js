//深拷贝 递归实现
//数据传递
//为防止变量转成字符串，不从控制台输入用例了

let x//深拷贝的变量

console.log(deepCopy(x));//调用

function deepCopy(x){//声明
    if(typeof x!=="object"||x===null){//判断是否是基本类型
        return x
    }
    if(Array.isArray(x)){//判断是否是数组
        let newX=[]
        x.forEach(item=>{
            newX.push(deepCopy(item))//遍历出来的元素可能也是对象或者数组，继续递归调用
        })
        return newX
    }
    let newX={}//走到这里就只能是对象了
    Object.entries(x).forEach(([key,value])=>{//对象和map遍历的方式不一样
        newX[key]=deepCopy(value)
    })
    return newX
}
