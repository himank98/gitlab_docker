(this.webpackJsonp=this.webpackJsonp||[]).push([[320],{uOOt:function(t,e,n){"use strict";n.r(e);var i=n("jB52"),o=n("yi8e"),r=(n("9U97"),n("+kFb"),n("yaFd"),n("N0ZT"),n("Id6h"),n("2ibD"));n("va8A"),n("z4I3"),n("dj/k"),n("t3Gg"),n("OZM5"),n("x/6R"),n("4ql4"),n("8Qi2"),n("SG5y"),n("MRnW"),n("GzNv"),n("tbvx"),n("Tznw"),n("6yen"),n("OeRx"),n("l/dT"),n("RqS2"),n("Zy7a"),n("cjZU"),n("OAhk"),n("X42P"),n("mHhP"),n("fn0I"),n("UB/6"),n("imhG"),n("orcL");function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var c,l=new Map,u=function(){return l.get("current")},f=function(t,e){var n=e.start_line+1,i=document.querySelector('[data-path="'.concat(t,'"]')).querySelectorAll(".blob-content #LC".concat(n,", .line_content:not(.old) #LC").concat(n));(null==i?void 0:i.length)&&i.forEach((function(t){var n=0,i=a(t.childNodes).find((function(t){var i=t.textContent;return n===e.start_char||(n+=i.length,!1)}));i&&(i.setAttribute("data-char-index",e.start_char),i.setAttribute("data-line-index",e.start_line),i.classList.add("cursor-pointer","code-navigation","js-code-navigation"))}))},d={setInitialData:function(t,e){(0,t.commit)("SET_INITIAL_DATA",e)},requestDataError:function(t){(0,t.commit)("REQUEST_DATA_ERROR")},fetchData:function(t){var e=t.commit,n=t.dispatch,i=t.state;e("REQUEST_DATA"),i.blobs.forEach((function(t){var i=t.path,o=t.codeNavigationPath;r.a.get(o).then((function(t){var n=t.data.reduce((function(t,e){return e.hover&&(t["".concat(e.start_line,":").concat(e.start_char)]=e,f(i,e)),t}),{});e("REQUEST_DATA_SUCCESS",{path:i,normalizedData:n})})).catch((function(){return n("requestDataError")}))}))},showBlobInteractionZones:function(t,e){var n=t.state;n.data&&n.data[e]&&Object.values(n.data[e]).forEach((function(t){return f(e,t)}))},showDefinition:function(t,e){var n,i,o=t.commit,r=t.state,a=e.target;if(r.data){var s=a.classList.contains("hll");u()&&u().classList.remove("hll");var c=a.closest("[data-path]");if(c){var f=c.dataset.path,d=r.data[f];if(d){if(a.closest(".js-code-navigation")&&!s){var h=a.dataset,p=h.lineIndex,b=h.charIndex,v=a.getBoundingClientRect();i={x:v.x||0,y:v.y+window.scrollY||0,height:a.offsetHeight},n=d["".concat(p,":").concat(b)],a.classList.add("hll"),function(t){l.set("current",t)}(a)}o("SET_CURRENT_DEFINITION",{definition:n,position:i,blobPath:f})}}else o("SET_CURRENT_DEFINITION",{definition:n,position:i})}}};n("kO4A"),n("zCcL"),n("zpLX"),n("BD5p");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v,y=(b(c={},"SET_INITIAL_DATA",(function(t,e){var n=e.blobs,i=e.definitionPathPrefix;t.blobs=n,t.definitionPathPrefix=i})),b(c,"REQUEST_DATA",(function(t){t.loading=!0})),b(c,"REQUEST_DATA_SUCCESS",(function(t,e){var n=e.path,i=e.normalizedData;t.loading=!1,t.data=p(p({},t.data),{},b({},n,i))})),b(c,"REQUEST_DATA_ERROR",(function(t){t.loading=!1})),b(c,"SET_CURRENT_DEFINITION",(function(t,e){var n=e.definition,i=e.position,o=e.blobPath;t.currentDefinition=n,t.currentDefinitionPosition=i,t.currentBlobPath=o})),c),g=new o.b.Store({actions:d,mutations:y,state:{blobs:[],loading:!1,data:null,currentDefinition:null,currentDefinitionPosition:null,currentBlobPath:null}}),m=(n("S6uq"),n("IdsT"),n("pBsb"),n("4lAS")),O={props:{language:{type:String,required:!0},tokens:{type:Array,required:!0}}},_=n("tBpV"),P=Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"line",attrs:{lang:t.language}},t._l(t.tokens,(function(e,i){return n("span",{key:i,class:e.class},[t._v(t._s(e.value))])})),0)}),[],!1,null,null,null).exports,D={components:{GlButton:m.a,DocLine:P},props:{position:{type:Object,required:!0},data:{type:Object,required:!0},definitionPathPrefix:{type:String,required:!0},blobPath:{type:String,required:!0}},data:function(){return{offsetLeft:0}},computed:{positionStyles:function(){return{left:"".concat(this.position.x-this.offsetLeft,"px"),top:"".concat(this.position.y+this.position.height,"px")}},definitionPath:function(){return this.data.definition_path?this.isDefinitionCurrentBlob?"#".concat(this.data.definition_path.split("#").pop()):"".concat(this.definitionPathPrefix,"/").concat(this.data.definition_path):null},isDefinitionCurrentBlob:function(){return 0===this.data.definition_path.indexOf(this.blobPath)}},watch:{position:{handler:function(){var t=this;this.$nextTick((function(){return t.updateOffsetLeft()}))},deep:!0,immediate:!0}},methods:{updateOffsetLeft:function(){this.offsetLeft=Math.max(0,this.$el.offsetLeft+this.$el.offsetWidth-window.innerWidth+20)}},colorScheme:null===(v=gon)||void 0===v?void 0:v.user_color_scheme},E=Object(_.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popover code-navigation-popover popover-font-size-normal gl-popover bs-popover-bottom show",style:t.positionStyles},[n("div",{staticClass:"arrow",style:{left:t.offsetLeft+"px"}}),t._v(" "),t._l(t.data.hover,(function(e,i){return n("div",{key:i,staticClass:"border-bottom"},[e.language?n("pre",{ref:"code-output",refInFor:!0,staticClass:"border-0 bg-transparent m-0 code highlight",class:t.$options.colorScheme},t._l(e.tokens,(function(t,i){return n("doc-line",{key:i,attrs:{language:e.language,tokens:t}})})),1):n("p",{ref:"doc-output",refInFor:!0,staticClass:"p-3 m-0"},[t._v("\n      "+t._s(e.value)+"\n    ")])])})),t._v(" "),t.definitionPath?n("div",{staticClass:"popover-body"},[n("gl-button",{staticClass:"w-100",attrs:{href:t.definitionPath,target:t.isDefinitionCurrentBlob?null:"_blank",variant:"default","data-testid":"go-to-definition-btn"}},[t._v("\n      "+t._s(t.__("Go to definition"))+"\n    ")])],1):t._e()],2)}),[],!1,null,null,null).exports,j=n("J7NB");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A={components:{Popover:E},computed:S({},Object(o.e)(["currentDefinition","currentDefinitionPosition","currentBlobPath","definitionPathPrefix"])),mounted:function(){this.body=document.body,j.a.$on("showBlobInteractionZones",this.showBlobInteractionZones),this.addGlobalEventListeners(),this.fetchData()},beforeDestroy:function(){j.a.$off("showBlobInteractionZones",this.showBlobInteractionZones),this.removeGlobalEventListeners()},methods:S(S({},Object(o.c)(["fetchData","showDefinition","showBlobInteractionZones"])),{},{addGlobalEventListeners:function(){this.body&&this.body.addEventListener("click",this.showDefinition)},removeGlobalEventListeners:function(){this.body&&this.body.removeEventListener("click",this.showDefinition)}})},T=Object(_.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return this.currentDefinition?e("popover",{attrs:{position:this.currentDefinitionPosition,data:this.currentDefinition,"definition-path-prefix":this.definitionPathPrefix,"blob-path":this.currentBlobPath}}):this._e()}),[],!1,null,null,null).exports;i.default.use(o.b);e.default=function(t){var e=document.getElementById("js-code-navigation");return g.dispatch("setInitialData",t),new i.default({el:e,store:g,render:function(t){return t(T)}})}}}]);
//# sourceMappingURL=320.14e512b1.chunk.js.map