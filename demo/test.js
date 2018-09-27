"use strict";
// 3. 变量类型-枚举
// enum REN{
//     a='aaaaaaaaaaa',
//     b='bbbbbbbbbbb',
//     c='ccccccccccc',
// }
// console.log(REN.b) // bbbbbbbbbbb
function createFilter(config) {
    var newFilter = { age: 16, sexual: 'male' };
    if (config.age) {
        newFilter.age = config.age;
    }
    if (config.sexual) {
        newFilter.sexual = config.sexual;
    }
    console.log(config); //{ age: 80, sexual1: 'female' }
    return newFilter;
}
var newFilter2 = createFilter({ age: 80, sexual1: 'female' });
// 方法1：类型断言 as SearchShelter
// let newFilter2 = createFilter({ age: 80, sexual1: 'female' } as SearchShelter)
