(function(e){function n(n){for(var i,c,l=n[0],o=n[1],a=n[2],f=0,d=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(n);while(d.length)d.shift()();return s.push.apply(s,a||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],i=!0,l=1;l<t.length;l++){var o=t[l];0!==r[o]&&(i=!1)}i&&(s.splice(n--,1),e=c(c.s=t[0]))}return e}var i={},r={index:0},s=[];function c(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=i,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(t,i,function(n){return e[n]}.bind(null,i));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=n,l=l.slice();for(var a=0;a<l.length;a++)n(l[a]);var u=o;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c31f")},"0e30":function(e,n,t){},"1ed2":function(e,n,t){"use strict";var i=t("0e30"),r=t.n(i);r.a},"4d6a":function(e,n,t){e.exports=t.p+"img/l1.bfc8b791.png"},"7bfa":function(e,n,t){e.exports=t.p+"img/l2.e2e843dd.png"},"92d7":function(e,n,t){},a5a5:function(e,n,t){e.exports=t.p+"img/l3.a1c5d27e.png"},ac85:function(e,n,t){"use strict";var i=t("92d7"),r=t.n(i);r.a},c31f:function(e,n,t){"use strict";t.r(n);t("96dd"),t("a60a"),t("e783"),t("8b1f");var i=t("6e6d"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("p",[e._v("键盘输入的值:  "+e._s(e.value))]),t("LicenseKeyboard",{staticClass:"license-keyboard",model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),e._m(0)],1)},s=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"demo"},[i("h4",{staticClass:"title"},[e._v("示例图片")]),i("img",{attrs:{src:t("4d6a"),alt:"车牌汉字输入"}}),i("img",{attrs:{src:t("7bfa"),alt:"车牌数字输入"}}),i("img",{attrs:{src:t("a5a5"),alt:"车牌数字输入"}})])}],c={data:function(){return{value:null}}},l=c,o=(t("1ed2"),t("6691")),a=Object(o["a"])(l,r,s,!1,null,"53025494",null),u=a.exports,f=(t("efce"),t("4634"),t("ed8b"),t("97a3")),d=(t("7cfd"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-license-keyboard"},[t("span",{on:{click:function(n){return e.show()}}},[e._t("default",[t("i",{staticClass:"el-icon-s-grid icon"}),t("font",[e._v("软键盘")])])],2),e.isShow?t("div",{staticClass:"license-container"},[t("div",{staticClass:"license-bar"},[t("span",{staticClass:"res-view"},[e._v("预览: "+e._s(e.licenseNumber))]),t("div",[t("span",{staticClass:"confirm",on:{click:function(n){return e.confirm()}}},[e._v("完成")]),t("span",{staticClass:"close",on:{click:function(n){return e.close()}}},[e._v("关闭")])])]),e.type?[e._l(e.licenseNumberModels,(function(n,i){return[t("div",{key:i,staticClass:"license-buttons"},[3==i?t("span",{staticClass:"model",class:{"disabled-btn":!e.licenseNumber},attrs:{disabled:!e.licenseNumber},on:{click:function(n){return e.toggle()}}},[e._v("\n                        切换\n                    ")]):e._e(),e._l(n,(function(n,i){return[t("span",{key:i,on:{click:function(t){return e.handleChinese(n)}}},[e._v(e._s(n))])]})),3==i?t("span",{staticClass:"delete",class:{"disabled-btn":!e.licenseNumber},attrs:{disabled:!e.licenseNumber}},[e._v("删除")]):e._e()],2)]}))]:[e._l(e.abcAndNums,(function(n,i){return[t("div",{key:i,staticClass:"license-buttons"},[3==i?t("span",{staticClass:"model",class:{"disabled-btn":!e.licenseNumber},attrs:{disabled:!e.licenseNumber},on:{click:function(n){return e.toggle()}}},[e._v("\n                        切换\n                    ")]):e._e(),e._l(n,(function(n,i){return[t("span",{key:i,on:{click:function(t){return e.handleAbcNum(n)}}},[e._v(e._s(n))])]})),3==i?t("span",{staticClass:"delete",class:{"disabled-btn":!e.licenseNumber},attrs:{disabled:!e.licenseNumber},on:{click:function(n){return e.deleteLicense()}}},[e._v("删除")]):e._e()],2)]}))]],2):e._e()])}),p=[],b={name:"LicenseKeyboard",model:{value:"license",event:"confirm"},props:{license:{required:!1,type:[String],default:null}},data:function(){return{isShow:!1,licenseNumberModels:[["川","京","苏","津","浙","渝","冀","皖","琼","鲁"],["闽","贵","新","晋","赣","云","宁","蒙","豫","藏"],["港","辽","鄂","陕","澳","吉","湘","甘","台","粤"],["青","沪","桂","黑","军","警","学"]],abcAndNums:[[1,2,3,4,5,6,7,8,9,0],["Q","W","E","R","T","Y","U","I","O"],["P","A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]],type:!0,licenseNumber:null}},watch:{licenseNumber:function(e){e||(this.type=!0)}},methods:{show:function(){this.isShow=!0,this.licenseNumber=null,this.type=!0},toggle:function(){this.licenseNumber&&(this.type=!this.type)},handleChinese:function(e){this.licenseNumber=e,this.type=!1},handleAbcNum:function(e){this.licenseNumber.length<8&&(this.licenseNumber+=e)},deleteLicense:function(){this.licenseNumber&&(this.licenseNumber=this.licenseNumber.substring(0,this.licenseNumber.length-1))},confirm:function(){this.licenseNumber&&this.$emit("confirm",this.licenseNumber),this.isShow=!1},close:function(){this.isShow=!1}}},m=b,h=(t("ac85"),Object(o["a"])(m,d,p,!1,null,"2c48b71c",null)),v=h.exports;v.install=function(e){e.component(v.name,v)};var y=v;function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach((function(n){Object(f["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=[y],O=function e(n){if(e.installed)return!1;e.installed=!0,w.map((function(e){n.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&O(window.Vue);var N=_({install:O},w);i["a"].use(N),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=index.3e55c809.js.map