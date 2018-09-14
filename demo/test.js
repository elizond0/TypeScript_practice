"use strict";
var REN;
(function (REN) {
    REN["a"] = "aaaaaaaaaaa";
    REN["b"] = "bbbbbbbbbbb";
    REN["c"] = "ccccccccccc";
})(REN || (REN = {}));
console.log(REN.b); // bbbbbbbb
