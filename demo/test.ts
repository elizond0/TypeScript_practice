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
// class Base {
//     public readonly name: string;
//     public age: number;
//     public sex: string;
//     constructor(name: string, age: number, sex: string) {
//         this.name = name
//         this.age = age
//         this.sex = sex
//     }
//     public introduce() {
//         console.log('我叫' + this.name + '，今年' + this.age + '岁。')
//     }
//     public showSex() {
//         console.log('我是' + this.sex + '的')
//     }
// }

// class Senior extends Base {//继承
//     //由于子类里包含了constructor函数，相等于重写，则需要super继承父类的属性
//     constructor(name: string, age: number, sex: string) {
//         super(name, age, sex)
//     }
//     public earnMoney() {
//         console.log('赚钱')
//     }
//     public introduce() {//重写
//         super.introduce()
//         console.log(`哈哈哈，我是${this.sex}的`)
//     }
// }
// let senior1 = new Senior('bcd', 1, '男')
// senior1.introduce()//我叫bcd，今年1岁。  哈哈哈，我是男的
// senior1.earnMoney()//赚钱

// 7.1 接口 interface-对象类型
// 参数对象接口
// interface Shelter{
//     age:number
//     sexual:string
//     homeless?:boolean
// }
// let shelter999:Shelter={//填入不符合的类型ts会报错
//     age:10,
//     sexual:'male',
//     homeless:true
// }
// 
// 函数传入参数对象接口
// interface SearchShelter {
//     age: number
//     sexual?: string
// }

// function createFilter(config: SearchShelter) {
//     let newFilter = { age: 16, sexual: 'male' }
//     if (config.age) {
//         newFilter.age = config.age
//     }
//     if (config.sexual) {
//         newFilter.sexual = config.sexual
//     }

//     return newFilter
// }

// let newFilter1 = createFilter({ age: 80, sexual: 'male' })
// console.log(newFilter1);//{ age: 80, sexual: 'male' }

// 额外的属性检查
// interface SearchShelter {
//     age: number
//     sexual?: string
//     // 方法2：添加一个字符串索引签名，
//     [propName: string]: any;//表示只要它们不是age和sexual，那么就无所谓它们的类型是什么
// }

// function createFilter(config: SearchShelter) {
//     let newFilter = { age: 16, sexual: 'male' }
//     if (config.age) {
//         newFilter.age = config.age
//     }
//     if (config.sexual) {
//         newFilter.sexual = config.sexual
//     }
//     console.log(config);//{ age: 80, sexual1: 'female' }
//     return newFilter
// }
// let newFilter2 = createFilter({ age: 80, sexual1: 'female' })
// 方法1：类型断言 as SearchShelter
// let newFilter2 = createFilter({ age: 80, sexual1: 'female' } as SearchShelter)

// 7.2 函数类型
// interface SearchFunc {
//     // boolean表示的是函数返回值的类型
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// // 函数的参数名不需要与接口里定义的名字相匹配
// mySearch = function (src: string, sub: string) {
//     let result = src.search(sub);
//     console.log(result);//0
//     return result > -1;
// }
// mySearch('string1', 's')

// // 7.3 可索引的类型
// interface StringArray {
//     // [index: number]: string;// 使用number索引时返回string类型的值
//     readonly [index: number]: string;// 可以将索引签名设置为只读，这样就防止了给索引赋值

//     length: number;    // 可以，length是number类型
//     // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
// let myArray: StringArray;
// myArray = ["abc", "edf"];

// let myStr: string = myArray[0];
// console.log(myStr);//abc
// // myArray[0]='sss'// 报错，只读

// 7.4 类类型
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick():void;
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// interface Shape {
//     color: string;
// }
// interface Square extends Shape {
//     sideLength: number;
// }
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// console.log(square)//{ color: 'blue', sideLength: 10 }

// 7.5 混合类型
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }

// let c = getCounter();

// 7.6 接口继承类
// class Control {//定义类
//     private state: any;
// }
// interface SelectableControl extends Control {//接口继承类
//     select(): void;
// }
// class Button extends Control implements SelectableControl {//子类继承基类，实现接口类，有效
//     select() { }
// }
// class TextBox extends Control {//子类继承基类，有效
//     select() { }
// }
// // 错误：“Image”类型缺少“state”属性。Image和Input类没有继承接口，继承不包括实现implements
// class Image implements SelectableControl {//报错
//     select() { }
// }
// class Input {}//什么都没有继承

// ## 8. 命名空间 Namespaces

// 验证器
// interface StringValidator {//检测是否是字符串
//     isAcceptable(s: string): boolean;
// }

// let lettersRegexp = /^[A-Za-z]+$/;
// let numberRegexp = /^[0-9]+$/;

// class LettersOnlyValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return lettersRegexp.test(s);
//     }
// }

// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }

// // 测试
// let strings = ["Hello", "98052", "101"];

// // 验证器
// let validators: { [s: string]: StringValidator; } = {};

// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();

// // 检测是否通过验证
// for (let s of strings) {
//     for (let name in validators) {
//         let isMatch = validators[name].isAcceptable(s);
//         console.log(`'${s}' ${isMatch ? "通过" : "不匹配"} '${name}'！`);
//     }
// }

// 使用命名空间的验证器
// namespace Validation {
//     // 想让这些接口和类在命名空间之外也是可访问的，所以需要使用 export。
//     export interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }

//     // 变量 lettersRegexp和numberRegexp是实现的细节，不需要导出，因此它们在命名空间外是不能访问的。
//     const lettersRegexp = /^[A-Za-z]+$/;
//     const numberRegexp = /^[0-9]+$/;

//     export class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }

//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
// }

// // 测试文本
// let strings = ["Hello", "98052", "101"];

// // 校验器  由于是在命名空间之外访问，因此需要限定类型的名称，比如 Validation.LettersOnlyValidator。
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();

// // 检测是否通过验证
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "匹配" : "不匹配" } ${ name }`);
//     }
// }

// namespace Validation {
//     export interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }
// }

// namespace Validation {
//     const lettersRegexp = /^[A-Za-z]+$/;
//     export class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }
// }

// namespace Validation {
//     const numberRegexp = /^[0-9]+$/;
//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
// }

// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
//     }
// }