# TypeScript_practice

## 1. 简介

### 1.1 TypeScript 概述

- TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程。

- 其实 TypeScript 就是相当于 JavaScript 的增强版，最后运行时还要编译成 JavaScript。TypeScript 最大的目的是让程序员更具创造性，提高生产力，它将极大增强 JavaScript 编写应用的开发和调试环节，让 JavaScript 能够方便用于编写大型应用和进行多人协作。

### 1.2 TypeScript 和 JavaScript 的对比

- TypeScript 是一个应用程序级的 JavaScript 开发语言。（这也表示 TypeScript 比较牛逼，可以开发大型应用，或者说更适合开发大型应用）

- TypeScript 是 JavaScript 的超集，可以编译成纯 JavaScript。这个和我们 CSS 里的 Less 或者 Sass 是很像的，用更好的代码编写方式来进行编写，最后还是有生成原生的 JavaScript 语言。

- TypeScript 跨浏览器、跨操作系统、跨主机、且开源。由于最后编译成了 JavaScript 所以只要能运行 JS 的地方，都可以运行我们写的程序，设置在 node.js 里。

- TypeScript 始于 JavaScript，终于 JavaScript。遵循 JavaScript 的语法和语义，所以对于前端从业者来说，学习前来得心应手，并没有太大的难度。

- TypeScript 可以重用 JavaScript 代码，调用流行的 JavaScript 库。

- TypeScript 提供了类、模块和接口，更易于构建组件和维护。

## 2. 配置开发环境

### 2.1 nodeJs

### 2.2 安装 TypeScript 包

```cmd
npm install typescript -g
tsc --version
```

- 如果是 mac 电脑，要使用 sudo npm install typescript -g 指令进行安装

### 2.3 编写 HelloWorld 程序

- npm init -y 生成 package.json 文件

- tsc --init 生成 tsconfig.json 文件

- npm install @types/node --dev-save 安装@types/node，主要解决模块的声明文件问题。

- 创建 hello world.ts 文件

- 使用 VS Code 编译运行 ts 文件，CTRL+SHIFT+B 快捷键，选择生成任务，会生成一个相同文件名的 js 文件

- node hello world.js 即可运行

## 3. 变量类型

- TypeScript 中的数据类型有：

1. Undefined : 与 js 中的 undefined 一样
2. Number: 数值类型；包括整型和浮点型,包括 NaN,Infinity,-Infunity
3. string : 字符串类型;
4. Boolean: 布尔类型；只有 True 和 False
5. enum：枚举类型；
6. any : 任意类型；用于储存不断变化的类型，而且不希望报错，可以使用这个特殊的类型
7. void：空类型；void 类型像是与 any 类型相反，它表示没有任何类型。
8. Array : 数组类型;
9. Tuple : 元组类型；可以定义一对值分别为 string 和 number 类型的元组，必须按顺序。
10. Null ：空类型。
11. Never 类型表示的是那些永不存在的值的类型。

- 枚举类型：

```ts
enum REN {
  a = "aaaaaaaaaaa",
  b = "bbbbbbbbbbb",
  c = "ccccccccccc"
}
console.log(REN.b); // bbbbbbbb
```

- Void 空类型：

```ts
// 当一个函数没有返回值时，通常会见到其返回值类型是 void：
function warnUser(): void {
  console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
```

- Null 和 Undefined：

1. TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 和 void 相似，它们的本身的类型用处不是很大。
2. 默认情况下 null 和 undefined 是所有类型的子类型。 就是说可以把 null 和 undefined 赋值给 number 类型的变量。
3. 当指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。 这能避免 很多常见的问题。

```ts
let u: undefined = undefined;
let n: null = null;
```

- Never 类型：

1. never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
2. 变量也可能是 never 类型，当它们被永不为真的类型保护所约束时
3. never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）。 即使 any 也不可以赋值给 never。

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
  while (true) {}
}
```

## 4. 函数

- typescript 定义函数：

1. 声明（定义）函数必须加 function 关键字；
2. 函数名与变量名一样，命名规则按照标识符规则；
3. 函数参数可有可无，多个参数之间用逗号隔开；
4. 每个参数参数由名字与类型组成，之间用分号隔开；
5. 函数的返回值可有可无，没有时，返回类型为 void；
6. 大括号中是函数体。

### 4.1 TypeScript 语言中的函数参数

- 可选参数:在定义函数的时候通过?标注。

```ts
//age-参数类型,多个参数使用','分隔,'?'表示可以不传
function search(age: number, name?: string): string {
  //大括号前的string-函数返回类型
  let text: string = "";
  text = "你输入的年龄是：" + age;

  if (name != undefined) {
    text += "，名字是：" + name;
  }

  return text;
}
var age: number = 18;
var result1: string = search(age);
console.log(result1); //你输入的年龄是：18
var myname: string = "aaa";
var result2: string = search(age, myname);
console.log(result2); //你输入的年龄是：18，名字是：aaa
console.log(search(28, "hahaha")); //你输入的年龄是：28，名字是：hahaha
```

- 默认参数:不传递的时候，会使用默认值，而不是 undefined

```ts
//age-参数类型,多个参数使用','分隔,'='标注默认参数，且不会等于undefined
function search(age: number, name: string = "默认名字"): string {
  //大括号前的string-函数返回类型
  let text: string = "";
  text = "你输入的年龄是：" + age;

  if (name != undefined) {
    text += "，名字是：" + name;
  }

  return text;
}
var age: number = 18;
var result1: string = search(age);
console.log(result1); //你输入的年龄是：18，名字是：没有名字
var myname: string = "aaa";
var result2: string = search(age, myname);
console.log(result2); //你输入的年龄是：18，名字是：aaa
console.log(search(28, "hahaha")); //你输入的年龄是：28，名字是：hahaha
```

- 数组参数:传递给函数的参数个数不确定,剩余参数就是形参是一个数组，传递几个实参过来都可以直接存在形参的数组中。

```ts
function search(age: number, ...names: string[]): string {
  //大括号前的string-函数返回类型
  let text: string = "";
  text = "你输入的年龄是：" + age;

  if (names.length >= 0) {
    text += "，曾经使用过的名字有：";
  }

  for (let i = 0; i < names.length; i++) {
    if (i == names.length - 1) {
      text += names[i];
    } else {
      text += names[i] + "、";
    }
  }

  return text;
}
let names = ["abc", "cdw", "dsdsd"];
let result = search(18, ...names);
console.log(result); //你输入的年龄是：18，曾经使用过的名字有：abc、cdw、dsdsd
```

### 4.2 函数的三种定义方式

- 函数声明法:最常用的函数定义法。使用 function 关键字和函数名去定义一个函数。

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(add(1, 4));
```

- 函数表达式法:将一个函数赋值给一个变量，这个变量名就是函数名。通过变量名就可以调用函数了。这种方式定义的函数，必须在定义之后，调用函数。下面例子中等号右边的函数没有函数名，称为匿名函数。

```ts
var add = function(n1: number, n2: number): number {
  return n1 + n2;
};
console.log(add(1, 4));
```

- 箭头函数:ES6 中新增的函数定义的新方式，TypeScript 语言是完全支持 ES6 语法的。箭头函数定义的函数一般都用于回调函数中。

```ts
var add = (n1: number, n2: number): number => {
  return n1 + n2;
};
console.log(add(1, 4));
```

## 5. 引用类型

### 5.1 引用类型-数组

- 数组声明

```ts
let arr1: number[]; //数值类型的数组
let arr2: Array<string>; //字符串类型的数组
```

- 数组赋值，指定数据类型的数组只能存储同一类型的数组元素。

```ts
let arr3: number[] = [1, 2, 3, 4, 5]; //字面量赋值
let arr4: Array<string> = new Array("abc", "bac", "cba"); //构造函数赋值

let arr5: number[] = [1, 2, true]; //不允许混搭，会报错
```

### 5.2 引用类型-字符串

- 字符串的两种类型：

1. 基本类型字符串：由单引号或者双引号括起来的一串字符串。
2. 引用类型字符串：用 new 实例化的 String 类型。类型注释 String 首字母需要大写。

```ts
let str1: string = "abc";
let str2: String = new String("cba"); //注意此处 变量之后的类型注释，String首字母需要大写
```

### 5.3 引用类型-日期对象

- 日期对象是 Date 的实例，可以使用构造函数的方法进行创建。并且构造函数中可以传递多种类型的参数。

```ts
// 1.不传递任何参数
let d1: Date = new Date();
console.log(d1); //2018-09-17T07:17:03.053Z
// 2.传递一个整数，整数代表的是距离1970-01-01 00:00:00的毫秒数。
let d2: Date = new Date(1000);
console.log(d2); //1970-01-01T00:00:01.000Z
// 3.传递一个字符串，会生成相对应的日期对象。
let d3: Date = new Date("2018/09/06 05:30:00");
console.log(d3); //2018-09-05T21:30:00.000Z
// 4.传递表示年月日时分秒的变量
let d4: Date = new Date(1991, 11, 7, 10, 12, 16, 500); //(year,month,day,hours,minutes,seconds,ms)
console.log(d4); //1991-12-07T02:12:16.500Z
```

### 5.4 引用类型-正则表达式

- 声明方法：构造函数法，字面量法

```ts
// 构造函数法
let reg1: RegExp = new RegExp("abc");
console.log(reg1); //  /abc/
// 字面量法
let reg2: RegExp = /edf/;
console.log(reg2); //  /edf/
```

- 常用方法:test()和 exec()

```ts
let reg1: RegExp = new RegExp("abc");
let str1: string = "abcsdasdasdas";
// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
console.log(reg1.test(str1)); //true
// exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null
console.log(reg1.exec(str1)); //[ 'abc', index: 0, input: 'abcsdasdasdas' ]
```

## 6. 类

### 6.1 类-定义

```ts
class Base {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log("我叫" + this.name + "，今年" + this.age + "岁。");
  }
}
let testClass: Base = new Base("abc", 18);
console.log(testClass); // Base { name: 'abc', age: 18 }
testClass.introduce(); // 我叫abc，今年18岁。
```

### 6.2 类-修饰符

- 访问修饰符

1. public:公有修饰符，可以在类内或者类外使用 public 修饰的属性或者行为，默认修饰符。
2. protected:受保护的修饰符，可以本类和子类中使用 protected 修饰的属性和行为。
3. private:私有修饰符，只可以在类内使用 private 修饰的属性和行为。

- 只读属性修饰符，只读属性必须在声明时或者构造函数里被初始化

```ts
class Base {
  public readonly name: string; //公有修饰符，类内或者类外使用，默认public;readonly只读修饰符，只读属性必须在声明时或者构造函数里被初始化
  private age: number; //私有修饰符，只可以在类内使用
  protected sex: string; //受保护的修饰符，可以本类和子类中使用
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  public introduce() {
    //公有修饰符
    console.log("我叫" + this.name + "，今年" + this.age + "岁。");
  }
  protected showSex() {
    console.log("我是" + this.sex + "的");
  }
}
let test = new Base("abc", 20, "男");
console.log(test); //Base { name: 'abc', age: 20, sex: '男' }
test.introduce(); //我叫abc，今年20岁。
console.log(test.age); //会报错,但依然能打印 20
console.log(test.sex); //会报错,但依然能打印 男
test.showSex(); //会报错,但依然能打印 我是男的
console.log(test.name); //abc
test.name = "ssss";
console.log(test.name); //编译会报错，但依然可以发现name被修改了 ssss
```

### 6.3 类-继承和重写

- 继承 class B extends A ，TypeScript 不支持多重继承

- 重写，如果子类重写了构造函数，并且类内的方法中需要用到父类的属性，则在子类构造函数内需要 super 继承父类

```ts
class Base {
  public readonly name: string;
  public age: number;
  public sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  public introduce() {
    console.log("我叫" + this.name + "，今年" + this.age + "岁。");
  }
  public showSex() {
    console.log("我是" + this.sex + "的");
  }
}

class Senior extends Base {
  //继承
  //由于子类里包含了constructor函数，相等于重写，则需要super继承父类的属性
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex);
  }
  public earnMoney() {
    console.log("赚钱");
  }
  public introduce() {
    //重写
    super.introduce();
    console.log(`哈哈哈，我是${this.sex}的`);
  }
}
let senior1 = new Senior("bcd", 1, "男");
senior1.introduce(); //我叫bcd，今年1岁。  哈哈哈，我是男的
senior1.earnMoney(); //赚钱
```

## 7. 接口 interface

### 7.1 对象类型

- 在面向对象的语言中，术语 interface 经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型。

- TypeScript 的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在 TypeScript 里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。

```ts
// 参数对象接口
interface Shelter {
  age: number;
  sexual: string;
  homeless?: boolean;
}
let shelter999: Shelter = {
  //填入不符合的类型ts会报错
  age: 10,
  sexual: "male",
  homeless: true
};

// 函数传入参数对象接口
interface SearchShelter {
  age: number;
  sexual?: string;
}
function createFilter(config: SearchShelter) {
  let newFilter = { age: 16, sexual: "male" };
  if (config.age) {
    newFilter.age = config.age;
  }
  if (config.sexual) {
    newFilter.sexual = config.sexual;
  }

  return newFilter;
}
let newFilter1 = createFilter({ age: 80, sexual: "male" });
console.log(newFilter1); //{ age: 80, sexual: 'male' }
```

- 参数对象接口，同样支持只读属性 readonly 和可选属性?，用法也相似,最简单判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用 readonly。

- 额外的属性检查：ts 会检查传入属性值是否存在于接口，如果接口中未定义则会报错，即使是可选属性。简单说，接口对象必须包含传入参数的对象

```ts
interface SearchShelter {
  age: number;
  sexual?: string;
}
function createFilter(config: SearchShelter) {
  let newFilter = { age: 16, sexual: "male" };
  if (config.age) {
    newFilter.age = config.age;
  }
  if (config.sexual) {
    newFilter.sexual = config.sexual;
  }

  return newFilter;
}
//此处sexual为可选属性，传入不存在的属性值sexual1则会报错
let newFilter2 = createFilter({ age: 80, sexual1: "male" });
```

- 绕开检查的方法：1，使用类型断言 as [接口名]；2，更为推荐此方法，添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性；3，将参数对象赋值给一个变量：因为变量不会经过额外属性检查，所以编译器不会报错。

```ts
interface SearchShelter {
  age: number;
  sexual?: string;
  // 方法2：添加一个字符串索引签名
  [propName: string]: any; //表示只要它们不是age和sexual，那么就无所谓它们的类型是什么
}

function createFilter(config: SearchShelter) {
  let newFilter = { age: 16, sexual: "male" };
  if (config.age) {
    newFilter.age = config.age;
  }
  if (config.sexual) {
    newFilter.sexual = config.sexual;
  }
  console.log(config); //{ age: 80, sexual1: 'female' }
  return newFilter;
}
let newFilter2 = createFilter({ age: 80, sexual1: "female" });
// 方法1：类型断言 as SearchShelter
// let newFilter2 = createFilter({ age: 80, sexual1: 'female' } as SearchShelter)
// 方法3：将参数对象赋值给一个变量：因为变量不会经过额外属性检查，所以编译器不会报错。
```

### 7.2 函数类型

- 接口能够描述 JavaScript 中对象拥有的各种各样的外形。为了使用接口表示函数类型，需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

- 函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript 的类型系统会推断出参数类型，因为函数直接赋值给了 定义接口的类型变量。

```ts
interface SearchFunc {
  // boolean表示的是函数返回值的类型
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
// 函数的参数名不需要与接口里定义的名字相匹配
mySearch = function(src: string, sub: string) {
  let result = src.search(sub);
  console.log(result); //0
  return result > -1;
};
mySearch("string1", "s");
```

### 7.3 可索引的类型

- 具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number 来索引时，JavaScript 会将它转换成 string 然后再去索引对象。 也就是说用 100（一个 number）去索引等同于使用"100"（一个 string）去索引，因此两者需要保持一致。

```ts
interface StringArray {
  // [index: number]: string;// 使用number索引时返回string类型的值
  readonly [index: number]: string; // 可以将索引签名设置为只读，这样就防止了给索引赋值

  length: number; // 可以，length是number类型
  // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
let myArray: StringArray;
myArray = ["abc", "edf"];

let myStr: string = myArray[0];
console.log(myStr); //abc
// myArray[0]='sss'// 报错，只读
```

### 7.4 类类型

- 接口描述了类的公共部分，而不是公共和私有两部分。它不会检查类是否具有某些私有成员。类是具有两个类型的：静态部分的类型和实例的类型，constructor 存在于类的静态部分，所以不在检查的范围内。因此，应该直接操作类的静态部分。

```ts
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

- 接口支持继承

```ts
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square = <Square>{}; //<>相当于是接口继承的new方法
square.color = "blue";
square.sideLength = 10;
console.log(square); //{ color: 'blue', sideLength: 10 }
```

### 7.5 混合类型

- 一个对象可以同时做为函数和对象使用，并带有额外的属性。在使用 JavaScript 第三方库的时候，可能需要去完整地定义类型。

```ts
interface Counter {
  //定义混合接口
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}
let c = getCounter();
```

### 7.6 接口继承类

- 当接口继承了一个类的类型时，它会继承类的成员但不包括其实现。接口同样会继承到类的 private 和 protected 成员。 这意味着创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。这个子类除了继承至基类外与基类没有任何关系。

```ts
class Control {
  //定义类
  private state: any;
}
interface SelectableControl extends Control {
  //接口继承类
  select(): void;
}
class Button extends Control implements SelectableControl {
  //子类继承基类，实现接口类，有效
  select() {}
}
class TextBox extends Control {
  //子类继承基类，有效
  select() {}
}
// 错误：“Image”类型缺少“state”属性。Image和Input类没有继承接口，继承不包括实现implements
class Image implements SelectableControl {
  //报错
  select() {}
}
class Input {} //什么都没有继承
// 在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

// 在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。 实际上， SelectableControl接口和拥有select方法的Control类是一样的。 Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image和Input类并不是这样的。
```

## 8. 命名空间 Namespaces

### 8.1 使用方法

- 使用命名空间（之前叫做“内部模块”）来组织代码，“内部模块”现在叫做“命名空间”。 另外，任何使用 module 关键字来声明一个内部模块的地方都应该使用 namespace 关键字来替换。这就避免了让新的使用者被相似的名称所迷惑。

- 所有的验证器都放在一个文件里

```ts
// 验证器
interface StringValidator {
  //检测是否是字符串
  isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// 测试文本
let strings = ["Hello", "98052", "101"];

// 校验器
let validators: { [s: string]: StringValidator } = {};

validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// 检测是否通过验证
for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? "通过" : "不匹配"} '${name}'！`);
  }
}
```

- 把所有与验证器相关的类型都放到一个叫做 Validation 的命名空间里

```ts
namespace Validation {
  // 想让这些接口和类在命名空间之外也是可访问的，所以需要使用 export。
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  // 变量 lettersRegexp和numberRegexp是实现的细节，不需要导出，因此它们在命名空间外是不能访问的。
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// 测试文本
let strings = ["Hello", "98052", "101"];

// 校验器  由于是在命名空间之外访问，因此需要限定类型的名称，比如 Validation.LettersOnlyValidator。
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// 检测是否通过验证
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${validators[name].isAcceptable(s) ? "匹配" : "不匹配"} ${name}`
    );
  }
}
```

- 分离到多文件，尽管是不同的文件，它们仍是同一个命名空间，并且在使用的时候就如同它们在一个文件中定义的一样。 因为不同文件之间存在依赖关系，所以我们加入了引用标签来告诉编译器文件之间的关联。

```ts
// Validation.ts
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}

// LettersOnlyValidator.ts
/// <reference path="Validation.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}

// ZipCodeValidator.ts
/// <reference path="Validation.ts" />
namespace Validation {
  const numberRegexp = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// Test.ts
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// 测试文本
let strings = ["Hello", "98052", "101"];

// 校验器
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// 检测是否通过验证
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${validators[name].isAcceptable(s) ? "匹配" : "不匹配"} ${name}`
    );
  }
}
```

- 当涉及到多文件时，必须确保所有编译后的代码都被加载了。 有两种方式。

1. 把所有的输入文件编译为一个输出文件，需要使用--outFile 标记：\$ tsc --outFile sample.js Test.ts ，编译器会根据 test.ts 文件中的 reference 标签依次导入
2. 可以编译每一个文件（默认方式），那么每个源文件都会对应生成一个 JavaScript 文件。 然后，在页面上通过 script 标签把所有生成的 JavaScript 文件按正确的顺序引进来

### 8.2 别名

- 另一种简化命名空间操作的方法是使用 import q = x.y.z 给常用的对象起一个短的名字，可以用这种方法为任意标识符创建别名，也包括导入的模块中的对象。

```ts
namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // 相当于 "new Shapes.Polygons.Square()"
```

## 9. 类型推论 和 类型兼容性

### 9.1 类型推论

- 最佳通用类型：当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型。计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型。

- 上下文类型：TypeScript 类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处的位置相关时。如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。

```ts
window.onmousedown = function(mouseEvent: any) {
  // 如果不指定any 会报错
  console.log(mouseEvent.button);
};
```

### 9.2 类型兼容性

- TypeScript 里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。 它正好与名义（nominal）类型形成对比。在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。这与结构性类型系统不同，它是基于类型的组成结构，且不要求明确地声明。

#### 9.2.1 TypeScript 结构化类型系统的基本规则是，如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性。

```ts
interface Named {
  name: string;
}

let x: Named;
// y 的推断类型是 { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
// 编译器检查x中的每个属性，看是否能在y中也找到对应属性。 在这个例子中，y必须包含名字是name的string类型成员。y满足条件，因此赋值正确。
x = y; // y必须包含被赋值的x
// y有个额外的location属性，但这不会引发错误。 只有目标类型（这里是Named）的成员会被一一检查是否兼容
```

#### 9.2.2 判断两个函数是否兼容

- 要查看 x 是否能赋值给 y，首先看它们的参数列表。 x 的每个参数必须能在 y 里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。 这里，x 的每个参数在 y 中都能找到对应的参数，所以允许赋值。

```ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK 被赋值的y必须包含x
x = y; // Error
```

- 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。

```ts
let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });

x = y; // OK y必须包含被赋值的x，这点和基础类型相同
y = x; // Error, x 缺少location属性
```

- 函数参数双向协变：当比较函数参数类型时，只有当源函数参数能够赋值给目标函数或者反过来时才能赋值成功。 这是不稳定的，因为调用者可能传入了一个具有更精确类型信息的函数，但是调用这个传入的函数的时候却使用了不是那么精确的类型信息。 实际上，这极少会发生错误，并且能够实现很多 JavaScript 里的常见模式。

- 可选参数及剩余参数：比较函数兼容性的时候，可选参数与必须参数是可互换的。 源类型上有额外的可选参数不是错误，目标类型的可选参数在源类型里没有对应的参数也不是错误。当一个函数有剩余参数时，它被当做无限个可选参数。

- 函数重载：对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名。 这确保了目标函数可以在所有源函数可调用的地方调用。

#### 9.2.3 其他类型的兼容

- 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。

- 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。类

- 类的私有成员和受保护成员会影响兼容性。 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。 同样地，这条规则也适用于包含受保护成员实例的类型检查。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。

#### 9.2.4 泛型

- TypeScript 是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型。

```ts
// 对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。然后用结果类型进行比较。
interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;

x = y; // x和y是兼容的，因为它们的结构使用类型参数时并没有什么不同。
```

#### 9.2.5 子类型与赋值

- 在 TypeScript 里，有两种兼容性：子类型和赋值。 它们的不同点在于，赋值扩展了子类型兼容性，增加了一些规则，允许和 any 来回赋值，以及 enum 和对应数字值之间的来回赋值。实际上，类型兼容性是由赋值兼容性来控制的，即使在 implements 和 extends 语句也不例外。
