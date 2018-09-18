"use strict";
// 3. 变量类型-枚举
// enum REN{
//     a='aaaaaaaaaaa',
//     b='bbbbbbbbbbb',
//     c='ccccccccccc',
// }
// console.log(REN.b) // bbbbbbbbbbb
// 4. 函数
// 4.1 TypeScript语言中的函数参数
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
// 5.3 引用类型-日期对象
// // 1.不传递任何参数
// let d1:Date=new Date()
// console.log(d1);//2018-09-17T07:17:03.053Z
// // 2.传递一个整数，整数代表的是距离1970-01-01 00:00:00的毫秒数。
// let d2:Date=new Date(1000)
// console.log(d2)//1970-01-01T00:00:01.000Z
// // 3.传递一个字符串，会生成相对应的日期对象。
// let d3:Date=new Date('2018/09/06 05:30:00')
// console.log(d3)//2018-09-05T21:30:00.000Z
// // 4.传递表示年月日时分秒的变量
// let d4:Date=new Date(1991,11,7,10,12,16,500)//(year,month,day,hours,minutes,seconds,ms)
// console.log(d4);//1991-12-07T02:12:16.500Z
// 5.4 引用类型-正则表达式
// // 构造函数法
// let reg1:RegExp=new RegExp('abc')
// console.log(reg1)//  /abc/
// // 字面量法
// let reg2:RegExp=/edf/
// console.log(reg2);//  /edf/
// 常用方法:test()和exec()
var reg1 = new RegExp('abc');
var str1 = 'abcsdasdasdas';
// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
console.log(reg1.test(str1)); //true
// exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null
console.log(reg1.exec(str1)); //true
