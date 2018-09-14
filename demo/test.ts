// 2. 变量类型-枚举
// enum REN{
//     a='aaaaaaaaaaa',
//     b='bbbbbbbbbbb',
//     c='ccccccccccc',
// }
// console.log(REN.b) // bbbbbbbbbbb

// 3. 函数
// * 可选参数:在定义函数的时候通过?标注。
//age-参数类型,多个参数使用','分隔,'?'表示可以不传
// function search(age:number,name?:string):string{//大括号前的string-函数返回类型
//     let text:string=''
//     text='你输入的年龄是：'+age

//     if(name!=undefined){
//         text+='，名字是：'+name
//     }

//     return text
// }
// var age:number = 18
// var result1:string=search(age)
// console.log(result1)//你输入的年龄是：18
// var myname:string='aaa'
// var result2:string=search(age,myname)
// console.log(result2)//你输入的年龄是：18，名字是：aaa
// console.log(search(28,'hahaha'))//你输入的年龄是：28，名字是：hahaha

// * 默认参数:不传递的时候，会使用默认值，而不是undefined
//age-参数类型,多个参数使用','分隔,'='标注默认参数，且不会等于undefined
// function search(age:number,name:string='默认名字'):string{//大括号前的string-函数返回类型
//     let text:string=''
//     text='你输入的年龄是：'+age

//     if(name!=undefined){
//         text+='，名字是：'+name
//     }

//     return text
// }
// var age:number = 18
// var result1:string=search(age)
// console.log(result1)//你输入的年龄是：18，名字是：没有名字
// var myname:string='aaa'
// var result2:string=search(age,myname)
// console.log(result2)//你输入的年龄是：18，名字是：aaa
// console.log(search(28,'hahaha'))//你输入的年龄是：28，名字是：hahaha

// * 数组参数:传递给函数的参数个数不确定,剩余参数就是形参是一个数组，传递几个实参过来都可以直接存在形参的数组中。
// function search(age:number,...names:string[]):string{//大括号前的string-函数返回类型
//     let text:string=''
//     text='你输入的年龄是：'+age

//     if(names.length>=0){
//         text+='，曾经使用过的名字有：'
//     }

//     for(let i=0;i<names.length;i++){
//         if(i==names.length-1){
//             text+=names[i]
//         }else{
//             text+=names[i]+'、'
//         }
//     }

//     return text
// }
// let names=['abc','cdw','dsdsd']
// let result=search(18,...names)
// console.log(result);//你输入的年龄是：18，曾经使用过的名字有：abc、cdw、dsdsd
