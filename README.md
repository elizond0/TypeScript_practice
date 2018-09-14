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