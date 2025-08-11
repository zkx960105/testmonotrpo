module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1754385011107, function(require, module, exports) {
var n=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var x=(r,o)=>{for(var i in o)n(r,i,{get:o[i],enumerable:!0})},c=(r,o,i,e)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of p(o))!u.call(r,t)&&t!==i&&n(r,t,{get:()=>o[t],enumerable:!(e=m(o,t))||e.enumerable});return r};var s=r=>c(n({},"__esModule",{value:!0}),r);var a={};x(a,{userInit:()=>I});module.exports=s(a);var f=require("@myproject/test");function I(){(0,f.init)()}0&&(module.exports={userInit});
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1754385011107);
})()
//miniprogram-npm-outsideDeps=["@myproject/test"]
//# sourceMappingURL=index.js.map