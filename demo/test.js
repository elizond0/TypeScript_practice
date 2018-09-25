"use strict";
// 3. 变量类型-枚举
// enum REN{
//     a='aaaaaaaaaaa',
//     b='bbbbbbbbbbb',
//     c='ccccccccccc',
// }
// console.log(REN.b) // bbbbbbbbbbb
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// let reg1:RegExp=new RegExp('abc')
// let str1:string='abcsdasdasdas'
// // test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
// console.log(reg1.test(str1));//true
// // exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null
// console.log(reg1.exec(str1));//[ 'abc', index: 0, input: 'abcsdasdasdas' ]
// 6.1 类-定义
// class Base {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     introduce() {
//         console.log('我叫' + this.name + '，今年' + this.age + '岁。')
//     }
// }
// let testClass: Base = new Base('abc', 18)
// console.log(testClass)// Base { name: 'abc', age: 18 }
// testClass.introduce()// 我叫abc，今年18岁。
// 6.2 类-修饰符
// class Base {
//     public readonly name: string;//公有修饰符，类内或者类外使用，默认public;readonly只读修饰符，只读属性必须在生命时或者构造函数里被初始化
//     private age: number;//私有修饰符，只可以在类内使用
//     protected sex: string;//受保护的修饰符，可以本类和子类中使用
//     constructor(name: string, age: number, sex: string) {
//         this.name = name
//         this.age = age
//         this.sex = sex
//     }
//     public introduce() { //公有修饰符
//         console.log('我叫' + this.name + '，今年' + this.age + '岁。')
//     }
//     protected showSex(){
//         console.log('我是'+this.sex+'的')
//     }
// }
// let test = new Base('abc',20,'男')
// console.log(test);//Base { name: 'abc', age: 20, sex: '男' }
// test.introduce()//我叫abc，今年20岁。
// console.log(test.age);//会报错,但依然能打印 20
// console.log(test.sex)//会报错,但依然能打印 男
// test.showSex()//会报错,但依然能打印 我是男的
// console.log(test.name);//abc
// test.name='ssss'
// console.log(test.name);//编译会报错，但依然可以发现name被修改了 ssss
// 6.3 类-继承和重写
var Base = /** @class */ (function () {
    function Base(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Base.prototype.introduce = function () {
        console.log('我叫' + this.name + '，今年' + this.age + '岁。');
    };
    Base.prototype.showSex = function () {
        console.log('我是' + this.sex + '的');
    };
    return Base;
}());
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    //由于子类里包含了constructor函数，相等于重写，则需要super继承父类的属性
    function Senior(name, age, sex) {
        return _super.call(this, name, age, sex) || this;
    }
    Senior.prototype.earnMoney = function () {
        console.log('赚钱');
    };
    Senior.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log("\u54C8\u54C8\u54C8\uFF0C\u6211\u662F" + this.sex + "\u7684");
    };
    return Senior;
}(Base));
var senior1 = new Senior('bcd', 1, '男');
senior1.introduce(); //我叫bcd，今年1岁。  hahahaha
senior1.earnMoney(); //赚钱
