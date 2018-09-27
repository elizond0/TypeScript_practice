# TypeScript_practice

## 1. 简介

### 1.1 TypeScript概述

* TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程。

* 其实TypeScript就是相当于JavaScript的增强版，最后运行时还要编译成JavaScript。TypeScript最大的目的是让程序员更具创造性，提高生产力，它将极大增强JavaScript编写应用的开发和调试环节，让JavaScript能够方便用于编写大型应用和进行多人协作。

### 1.2 TypeScript和JavaScript的对比

* TypeScript是一个应用程序级的JavaScript开发语言。（这也表示TypeScript比较牛逼，可以开发大型应用，或者说更适合开发大型应用）

* TypeScript是JavaScript的超集，可以编译成纯JavaScript。这个和我们CSS里的Less或者Sass是很像的，用更好的代码编写方式来进行编写，最后还是有生成原生的JavaScript语言。

* TypeScript跨浏览器、跨操作系统、跨主机、且开源。由于最后编译成了JavaScript所以只要能运行JS的地方，都可以运行我们写的程序，设置在node.js里。

* TypeScript始于JavaScript，终于JavaScript。遵循JavaScript的语法和语义，所以对于前端从业者来说，学习前来得心应手，并没有太大的难度。

* TypeScript可以重用JavaScript代码，调用流行的JavaScript库。

* TypeScript提供了类、模块和接口，更易于构建组件和维护。

## 2. 配置开发环境

### 2.1 nodeJs

### 2.2 安装TypeScript包

```cmd
npm install typescript -g
tsc --version
```

* 如果是mac电脑，要使用sudo npm install typescript -g 指令进行安装

### 2.3 编写HelloWorld程序

* npm init -y 生成package.json文件

* tsc --init 生成tsconfig.json文件

* npm install @types/node --dev-save 安装@types/node，主要解决模块的声明文件问题。

* 创建hello world.ts文件

* 使用VS Code编译运行ts文件，CTRL+SHIFT+B快捷键，选择生成任务，会生成一个相同文件名的js文件

* node hello world.js 即可运行

## 3. 变量类型

* TypeScript中的数据类型有：
1. Undefined : 与js中的undefined一样
2. Number: 数值类型；包括整型和浮点型,包裹NaN,Infinity,-Infunity
3. string : 字符串类型;
4. Boolean: 布尔类型；只有True和False
5. enum：枚举类型；
6. any : 任意类型；用于储存不断变化的类型，而且不希望报错，可以使用这个特殊的类型
7. void：空类型；void类型像是与any类型相反，它表示没有任何类型。
8. Array : 数组类型;
9. Tuple : 元组类型；可以定义一对值分别为 string和number类型的元组，必须按顺序。
10. Null ：空类型。
11. Never 类型表示的是那些永不存在的值的类型。

* 枚举类型：

```ts
enum REN{
    a='aaaaaaaaaaa',
    b='bbbbbbbbbbb',
    c='ccccccccccc',
}
console.log(REN.b) // bbbbbbbb
```

* Void 空类型：

```ts
// 当一个函数没有返回值时，通常会见到其返回值类型是 void：
function warnUser(): void {
    console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
```

* Null 和 Undefined：
1. TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大。
2. 默认情况下null和undefined是所有类型的子类型。 就是说可以把 null和undefined赋值给number类型的变量。
3. 当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。

```ts
let u: undefined = undefined;
let n: null = null;
```

* Never 类型：
1. never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
2. 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
3. never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

## 4. 函数

* typescript定义函数：
1. 声明（定义）函数必须加 function 关键字；
2. 函数名与变量名一样，命名规则按照标识符规则；
3. 函数参数可有可无，多个参数之间用逗号隔开；
4. 每个参数参数由名字与类型组成，之间用分号隔开；
5. 函数的返回值可有可无，没有时，返回类型为 void；
6. 大括号中是函数体。

### 4.1 TypeScript语言中的函数参数

* 可选参数:在定义函数的时候通过?标注。

```ts
//age-参数类型,多个参数使用','分隔,'?'表示可以不传
function search(age:number,name?:string):string{//大括号前的string-函数返回类型
    let text:string=''
    text='你输入的年龄是：'+age

    if(name!=undefined){
        text+='，名字是：'+name
    }

    return text
}
var age:number = 18
var result1:string=search(age)
console.log(result1)//你输入的年龄是：18
var myname:string='aaa'
var result2:string=search(age,myname)
console.log(result2)//你输入的年龄是：18，名字是：aaa
console.log(search(28,'hahaha'))//你输入的年龄是：28，名字是：hahaha
```

* 默认参数:不传递的时候，会使用默认值，而不是undefined

```ts
//age-参数类型,多个参数使用','分隔,'='标注默认参数，且不会等于undefined
function search(age:number,name:string='默认名字'):string{//大括号前的string-函数返回类型
    let text:string=''
    text='你输入的年龄是：'+age

    if(name!=undefined){
        text+='，名字是：'+name
    }

    return text
}
var age:number = 18
var result1:string=search(age)
console.log(result1)//你输入的年龄是：18，名字是：没有名字
var myname:string='aaa'
var result2:string=search(age,myname)
console.log(result2)//你输入的年龄是：18，名字是：aaa
console.log(search(28,'hahaha'))//你输入的年龄是：28，名字是：hahaha
```

* 数组参数:传递给函数的参数个数不确定,剩余参数就是形参是一个数组，传递几个实参过来都可以直接存在形参的数组中。

```ts
function search(age:number,...names:string[]):string{//大括号前的string-函数返回类型
    let text:string=''
    text='你输入的年龄是：'+age

    if(names.length>=0){
        text+='，曾经使用过的名字有：'
    }

    for(let i=0;i<names.length;i++){
        if(i==names.length-1){
            text+=names[i]
        }else{
            text+=names[i]+'、'
        }
    }

    return text
}
let names=['abc','cdw','dsdsd']
let result=search(18,...names)
console.log(result);//你输入的年龄是：18，曾经使用过的名字有：abc、cdw、dsdsd
```

### 4.2 函数的三种定义方式

* 函数声明法:最常用的函数定义法。使用function关键字和函数名去定义一个函数。

```ts
function add(n1:number,n2:number):number{
    return n1+n2
}
console.log(add(1,4))
```

* 函数表达式法:将一个函数赋值给一个变量，这个变量名就是函数名。通过变量名就可以调用函数了。这种方式定义的函数，必须在定义之后，调用函数。下面例子中等号右边的函数没有函数名，称为匿名函数。

```ts
var add = function(n1:number,n2:number):number{
    return n1+n2
}
console.log(add(1,4))
```

* 箭头函数:ES6 中新增的函数定义的新方式，TypeScript 语言是完全支持 ES6 语法的。箭头函数定义的函数一般都用于回调函数中。

```ts
var add = (n1:number,n2:number):number=>{
    return n1+n2
}
console.log(add(1,4))
```

## 5. 引用类型

### 5.1 引用类型-数组

* 数组声明

```ts
let arr1:number[]//数值类型的数组
let arr2:Array<string>//字符串类型的数组
```

* 数组赋值，指定数据类型的数组只能存储同一类型的数组元素。

```ts
let arr3:number[]=[1,2,3,4,5]//字面量赋值
let arr4:Array<string>=new Array('abc','bac','cba')//构造函数赋值

let arr5:number[] = [1,2,true] //不允许混搭，会报错
```

### 5.2 引用类型-字符串

* 字符串的两种类型：
1. 基本类型字符串：由单引号或者双引号括起来的一串字符串。
2. 引用类型字符串：用new 实例化的 String类型。类型注释String首字母需要大写。

```ts
let str1:string='abc'
let str2:String=new String('cba')//注意此处 变量之后的类型注释，String首字母需要大写
```

### 5.3 引用类型-日期对象

* 日期对象是Date的实例，可以使用构造函数的方法进行创建。并且构造函数中可以传递多种类型的参数。

```ts
// 1.不传递任何参数
let d1:Date=new Date()
console.log(d1);//2018-09-17T07:17:03.053Z
// 2.传递一个整数，整数代表的是距离1970-01-01 00:00:00的毫秒数。
let d2:Date=new Date(1000)
console.log(d2)//1970-01-01T00:00:01.000Z
// 3.传递一个字符串，会生成相对应的日期对象。
let d3:Date=new Date('2018/09/06 05:30:00')
console.log(d3)//2018-09-05T21:30:00.000Z
// 4.传递表示年月日时分秒的变量
let d4:Date=new Date(1991,11,7,10,12,16,500)//(year,month,day,hours,minutes,seconds,ms)
console.log(d4);//1991-12-07T02:12:16.500Z
```

### 5.4 引用类型-正则表达式

* 声明方法：构造函数法，字面量法

```ts
// 构造函数法
let reg1:RegExp=new RegExp('abc')
console.log(reg1)//  /abc/
// 字面量法
let reg2:RegExp=/edf/
console.log(reg2);//  /edf/
```

* 常用方法:test()和exec()

```ts
let reg1:RegExp=new RegExp('abc')
let str1:string='abcsdasdasdas'
// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
console.log(reg1.test(str1));//true
// exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null
console.log(reg1.exec(str1));//[ 'abc', index: 0, input: 'abcsdasdasdas' ]
```

## 6. 类

### 6.1 类-定义

```ts
class Base {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log('我叫' + this.name + '，今年' + this.age + '岁。')
    }
}
let testClass: Base = new Base('abc', 18)
console.log(testClass)// Base { name: 'abc', age: 18 }
testClass.introduce()// 我叫abc，今年18岁。
```

### 6.2 类-修饰符

* 访问修饰符
1. public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
2. protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
3. private:私有修饰符，只可以在类内使用private修饰的属性和行为。

* 只读属性修饰符，只读属性必须在声明时或者构造函数里被初始化

```ts
class Base {
    public readonly name: string;//公有修饰符，类内或者类外使用，默认public;readonly只读修饰符，只读属性必须在声明时或者构造函数里被初始化
    private age: number;//私有修饰符，只可以在类内使用
    protected sex: string;//受保护的修饰符，可以本类和子类中使用
    constructor(name: string, age: number, sex: string) {
        this.name = name
        this.age = age
        this.sex = sex
    }
    public introduce() { //公有修饰符
        console.log('我叫' + this.name + '，今年' + this.age + '岁。')
    }
    protected showSex(){
        console.log('我是'+this.sex+'的')
    }
}
let test = new Base('abc',20,'男')
console.log(test);//Base { name: 'abc', age: 20, sex: '男' }
test.introduce()//我叫abc，今年20岁。
console.log(test.age);//会报错,但依然能打印 20
console.log(test.sex)//会报错,但依然能打印 男
test.showSex()//会报错,但依然能打印 我是男的
console.log(test.name);//abc
test.name='ssss'
console.log(test.name);//编译会报错，但依然可以发现name被修改了 ssss
```

### 6.3 类-继承和重写

* 继承 class B extends A ，TypeScript不支持多重继承

* 重写，如果子类重写了构造函数，并且类内的方法中需要用到父类的属性，则在子类构造函数内需要super继承父类

```ts
class Base {
    public readonly name: string;
    public age: number;
    public sex: string;
    constructor(name: string, age: number, sex: string) {
        this.name = name
        this.age = age
        this.sex = sex
    }
    public introduce() {
        console.log('我叫' + this.name + '，今年' + this.age + '岁。')
    }
    public showSex() {
        console.log('我是' + this.sex + '的')
    }
}

class Senior extends Base {//继承
    //由于子类里包含了constructor函数，相等于重写，则需要super继承父类的属性
    constructor(name: string, age: number, sex: string) {
        super(name, age, sex)
    }
    public earnMoney() {
        console.log('赚钱')
    }
    public introduce() {//重写
        super.introduce()
        console.log(`哈哈哈，我是${this.sex}的`)
    }
}
let senior1 = new Senior('bcd', 1, '男')
senior1.introduce()//我叫bcd，今年1岁。  哈哈哈，我是男的
senior1.earnMoney()//赚钱
```

## 7. 接口 interface

### 7.1 对象类型

* 在面向对象的语言中，术语interface经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型。

* TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。

```ts
// 参数对象接口
interface Shelter{
    age:number
    sexual:string
    homeless?:boolean
}
let shelter999:Shelter={//填入不符合的类型ts会报错
    age:10,
    sexual:'male',
    homeless:true
}

// 函数传入参数对象接口
interface SearchShelter {
    age: number
    sexual?: string
}
function createFilter(config: SearchShelter) {
    let newFilter = { age: 16, sexual: 'male' }
    if (config.age) {
        newFilter.age = config.age
    }
    if (config.sexual) {
        newFilter.sexual = config.sexual
    }

    return newFilter
}
let newFilter1 = createFilter({ age: 80, sexual: 'male' })
console.log(newFilter1);//{ age: 80, sexual: 'male' }
```

### 7.2 可选属性和只读属性

* 参数对象接口，同样支持只读属性readonly和可选属性?，用法也相似

* 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

### 7.3 额外的属性检查

* ts会检查传入属性值是否存在于接口，如果接口中未定义则会报错，即使是可选属性。简单说，接口对象必须包含传入参数的对象

```ts
interface SearchShelter {
    age: number
    sexual?: string
}
function createFilter(config: SearchShelter) {
    let newFilter = { age: 16, sexual: 'male' }
    if (config.age) {
        newFilter.age = config.age
    }
    if (config.sexual) {
        newFilter.sexual = config.sexual
    }

    return newFilter
}
//此处sexual为可选属性，传入不存在的属性值sexual1则会报错
let newFilter2 = createFilter({ age: 80, sexual1: 'male' })
```

* 绕开检查的方法：1，使用类型断言as [接口名]；2，更为推荐此方法，添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性；3，将参数对象赋值给一个变量：因为变量不会经过额外属性检查，所以编译器不会报错。

```ts
interface SearchShelter {
    age: number
    sexual?: string
    // 方法2：添加一个字符串索引签名
    [propName: string]: any;//表示只要它们不是age和sexual，那么就无所谓它们的类型是什么
}

function createFilter(config: SearchShelter) {
    let newFilter = { age: 16, sexual: 'male' }
    if (config.age) {
        newFilter.age = config.age
    }
    if (config.sexual) {
        newFilter.sexual = config.sexual
    }
    console.log(config);//{ age: 80, sexual1: 'female' }
    return newFilter
}
let newFilter2 = createFilter({ age: 80, sexual1: 'female' })
// 方法1：类型断言 as SearchShelter
// let newFilter2 = createFilter({ age: 80, sexual1: 'female' } as SearchShelter)
// 方法3：将参数对象赋值给一个变量：因为变量不会经过额外属性检查，所以编译器不会报错。
```
