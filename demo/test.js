"use strict";
// 2. 变量类型-枚举
// enum REN{
//     a='aaaaaaaaaaa',
//     b='bbbbbbbbbbb',
//     c='ccccccccccc',
// }
// console.log(REN.b) // bbbbbbbbbbb
// 3. 函数
//age-参数类型,多个参数使用','分隔，'?'表示可以不传
// '='标注默认参数，且不会等于undefined
// ...names:string[] 表示参数数组
function search(age) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    var text = '';
    text = '你输入的年龄是：' + age;
    if (names.length >= 0) {
        text += '，曾经使用过的名字有：';
    }
    for (var i = 0; i < names.length; i++) {
        if (i == names.length - 1) {
            text += names[i];
        }
        else {
            text += names[i] + '、';
        }
    }
    return text;
}
var names = ['abc', 'cdw', 'dsdsd'];
var result = search.apply(void 0, [18].concat(names));
console.log(result);
