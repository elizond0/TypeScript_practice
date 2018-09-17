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

* 如果是mac电脑，要使用sudo npm install typescript -g 指令进行安装

```cmd
npm install typescript -g
tsc --version
```

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
7. void：空类型；
8. Array : 数组类型;
9. Tuple : 元祖类型；
10. Null ：空类型。

* 枚举类型：

```ts
enum REN{
    a='aaaaaaaaaaa',
    b='bbbbbbbbbbb',
    c='ccccccccccc',
}
console.log(REN.b) // bbbbbbbb
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