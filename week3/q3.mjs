/**
 * 乘坐保密电梯
 * 回溯算法 数学不等式
 * 输入
 * 5 3
 * 1 2 6
 * 输出
 * 6 2 1
 */
import * as readline from "readline";
let rl = readline.createInterface({input:process.stdin});
let lines=[]

function printArrByState(arr,state,len) {
    let trueIdx=0,falseIdx=0,newArr=[]
    while (newArr.length<len) {
        for (let i = trueIdx; i < len; i++) {
            if(state[i]){
                newArr.push(arr[i])
                trueIdx=i+1
                break
            }
        }
        for (let j = falseIdx; j < len; j++) {
            if(!state[j]){
                newArr.push(arr[j])
                falseIdx=j+1
                break
            }
        }
    }
    console.log(newArr.join(" "));
}

function buildState(arr,state,bestState,sum,height,len,idx,trueIdx,curSum,bestCurSum) {
    for(let i=idx;i<=len;i++){
        if(trueIdx==Math.ceil(len/2)){
            if(curSum<=(sum+height)/2){
                return curSum
            }else {
                return 0
            }

        }
        if(curSum+arr[i]<=(sum+height)/2){
            state[i]=true
            trueIdx++
            curSum+=arr[i]
            if(buildState(arr,state,bestState,sum,height,len,i+1,trueIdx,curSum,bestCurSum)>bestCurSum){//拿到一个符合的不能结束，可能不是最优解
                bestState=state
            }else {
                state[i]=false
                trueIdx--
                curSum-=arr[i]
            }

        }
    }
    return 0;
}

function strToArr(lines){
    let arr1=lines[0].split(" ").map(Number)
    let height=arr1[0]
    let len=arr1[1]
    let arr=lines[1].split(" ").map(Number).sort((a,b)=>b-a)//reverse只是倒过来排，不是逆序
    let state=new Array(len).fill(false)
    let sum=arr.reduce((result,item)=>result+item)
    let bestState=[]
    if(buildState(arr,state,bestState,sum,height,len,0,0,0,0)){
        printArrByState(arr,bestState,len)
    }
}

rl.on("line",line=>{
    lines.push(line)
    if(lines.length==2){
        strToArr(lines)
        lines=[]
    }
})