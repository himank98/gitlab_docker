(this.webpackJsonp=this.webpackJsonp||[]).push([[33],{"2Swe":function(t,e,i){"use strict";var n=i("LLbv"),s={components:{CiIcon:i("8zNS").a},directives:{GlTooltip:n.a},props:{status:{type:Object,required:!0},showText:{type:Boolean,required:!1,default:!0}},computed:{cssClass:function(){var t=this.status.group;return t?"ci-status ci-".concat(t," qa-status-badge"):"ci-status qa-status-badge"}}},r=i("tBpV"),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],class:t.cssClass,attrs:{href:t.status.details_path,title:t.showText?"":t.status.text}},[i("ci-icon",{attrs:{status:t.status}}),t._v(" "),t.showText?[t._v("\n    "+t._s(t.status.text)+"\n  ")]:t._e()],2)}),[],!1,null,null,null);e.a=o.exports},"5/PK":function(t,e,i){"use strict";i("+xU6");var n=i("T9Fk"),s={name:"SmartVirtualList",components:{VirtualList:i.n(n).a},props:{size:{type:Number,required:!0},length:{type:Number,required:!0},remain:{type:Number,required:!0},rtag:{type:String,default:"div",required:!1},wtag:{type:String,default:"div",required:!1},wclass:{type:String,default:null,required:!1}}},r=i("tBpV"),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.length>t.remain?i("virtual-list",t._b({staticClass:"js-virtual-list",attrs:{size:t.remain,remain:t.remain,rtag:t.rtag,wtag:t.wtag,wclass:t.wclass}},"virtual-list",t.$attrs,!1),[t._t("default")],2):i(t.rtag,{tag:"component",staticClass:"js-plain-element"},[i(t.wtag,{tag:"component",class:t.wclass},[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=o.exports},"8pn6":function(t,e,i){"use strict";var n=i("ZfjD"),s=i("WG2a").findIndex,r=i("x5C5"),o=i("sRF7"),a=!0,l=o("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),n({target:"Array",proto:!0,forced:a||!l},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("findIndex")},"Fsq/":function(t,e,i){"use strict";var n=i("LLbv"),s=i("5QKO"),r=(i("bOix"),{directives:{GlTooltip:n.a},mixins:[s.a],props:{time:{type:String,required:!0},tooltipPlacement:{type:String,required:!1,default:"top"},cssClass:{type:String,required:!1,default:""}}}),o=i("tBpV"),a=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("time",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip.viewport",value:{placement:this.tooltipPlacement},expression:"{ placement: tooltipPlacement }",modifiers:{viewport:!0}}],class:this.cssClass,attrs:{title:this.tooltipTitle(this.time)},domProps:{textContent:this._s(this.timeFormatted(this.time))}})}),[],!1,null,null,null);e.a=a.exports},HXu9:function(t,e,i){"use strict";var n=i("bOix");e.a={data:function(){return{remainingTime:Object(n.e)(0),remainingTimeIntervalId:null}},mounted:function(){this.startRemainingTimeInterval()},beforeDestroy:function(){this.remainingTimeIntervalId&&clearInterval(this.remainingTimeIntervalId)},computed:{isDelayedJob:function(){return this.job&&this.job.scheduled}},watch:{isDelayedJob:function(){this.startRemainingTimeInterval()}},methods:{startRemainingTimeInterval:function(){var t=this;this.remainingTimeIntervalId&&clearInterval(this.remainingTimeIntervalId),this.isDelayedJob&&(this.updateRemainingTime(),this.remainingTimeIntervalId=setInterval((function(){return t.updateRemainingTime()}),1e3))},updateRemainingTime:function(){var t=Object(n.b)(this.job.scheduled_at);this.remainingTime=Object(n.e)(t)}}}},KcQl:function(t,e,i){"use strict";var n=i("ZfjD"),s=i("PpKG"),r=i("O9kB"),o=i("QmHw"),a=i("OuD2"),l=i("eclS"),c=i("arHL"),u=i("fEQ0");n({target:"Promise",proto:!0,real:!0,forced:!!r&&o((function(){r.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=l(this,a("Promise")),i="function"==typeof t;return this.then(i?function(i){return c(e,t()).then((function(){return i}))}:t,i?function(i){return c(e,t()).then((function(){throw i}))}:t)}}),s||"function"!=typeof r||r.prototype.finally||u(r.prototype,"finally",a("Promise").prototype.finally)},MoW5:function(t,e,i){"use strict";var n=i("ZfjD"),s=i("u67S"),r=i("wSP0"),o=i("7PMs"),a=i("QmHw"),l=1..toFixed,c=Math.floor,u=function(t,e,i){return 0===e?i:e%2==1?u(t,e-1,i*t):u(t*t,e/2,i)};n({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){l.call({})}))},{toFixed:function(t){var e,i,n,a,l=r(this),d=s(t),h=[0,0,0,0,0,0],f="",p="0",m=function(t,e){for(var i=-1,n=e;++i<6;)n+=t*h[i],h[i]=n%1e7,n=c(n/1e7)},v=function(t){for(var e=6,i=0;--e>=0;)i+=h[e],h[e]=c(i/t),i=i%t*1e7},b=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==h[t]){var i=String(h[t]);e=""===e?i:e+o.call("0",7-i.length)+i}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(f="-",l=-l),l>1e-21)if(i=(e=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e}(l*u(2,69,1))-69)<0?l*u(2,-e,1):l/u(2,e,1),i*=4503599627370496,(e=52-e)>0){for(m(0,i),n=d;n>=7;)m(1e7,0),n-=7;for(m(u(10,n,1),0),n=e-1;n>=23;)v(1<<23),n-=23;v(1<<n),m(1,1),v(2),p=b()}else m(0,i),m(1<<-e,0),p=b()+o.call("0",d);return p=d>0?f+((a=p.length)<=d?"0."+o.call("0",d-a)+p:p.slice(0,a-d)+"."+p.slice(a-d)):f+p}})},PvM2:function(t,e,i){"use strict";i("gyUR"),i("8Qi2"),i("+xU6");var n=i("MV2A"),s=i("LLbv"),r=i("f3jp"),o={components:{ciIcon:i("8zNS").a},props:{name:{type:String,required:!0},status:{type:Object,required:!0}}},a=i("tBpV"),l=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"ci-job-name-component mw-100"},[e("ci-icon",{attrs:{status:this.status}}),this._v(" "),e("span",{staticClass:"ci-status-text text-truncate mw-70p gl-pl-1-deprecated-no-really-do-not-use-me d-inline-block align-bottom"},[this._v("\n    "+this._s(this.name)+"\n  ")])],1)}),[],!1,null,null,null).exports,c=i("/lV4"),u=i("HXu9"),d={components:{ActionComponent:r.a,JobNameComponent:l,GlLink:n.a},directives:{GlTooltip:s.a},mixins:[u.a],props:{job:{type:Object,required:!0},cssClassJobName:{type:String,required:!1,default:""},dropdownLength:{type:Number,required:!1,default:1/0}},computed:{boundary:function(){return 1===this.dropdownLength?"viewport":"scrollParent"},status:function(){return this.job&&this.job.status?this.job.status:{}},tooltipText:function(){var t=[],e=this.job.name;e&&t.push(e);var i=this.status.tooltip;return e&&i&&t.push("-"),i&&(this.isDelayedJob?t.push(Object(c.e)(i,{remainingTime:this.remainingTime})):t.push(i)),t.join(" ")},hasAction:function(){return this.job.status&&this.job.status.action&&this.job.status.action.path}},methods:{pipelineActionRequestComplete:function(){this.$emit("pipelineActionRequestComplete")}}},h=Object(a.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ci-job-component"},[t.status.has_details?i("gl-link",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:t.boundary,placement:"bottom"},expression:"{ boundary, placement: 'bottom' }"}],staticClass:"js-pipeline-graph-job-link qa-job-link menu-item",class:t.cssClassJobName,attrs:{href:t.status.details_path,title:t.tooltipText}},[i("job-name-component",{attrs:{name:t.job.name,status:t.job.status}})],1):i("div",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:t.boundary,placement:"bottom"},expression:"{ boundary, placement: 'bottom' }"}],staticClass:"js-job-component-tooltip non-details-job-component",class:t.cssClassJobName,attrs:{title:t.tooltipText}},[i("job-name-component",{attrs:{name:t.job.name,status:t.job.status}})],1),t._v(" "),t.hasAction?i("action-component",{attrs:{"tooltip-text":t.status.action.title,link:t.status.action.path,"action-icon":t.status.action.icon},on:{pipelineActionRequestComplete:t.pipelineActionRequestComplete}}):t._e()],1)}),[],!1,null,null,null);e.a=h.exports},T9Fk:function(t,e,i){(function(t){var n,s,r,o,a;function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o=this,a=function(t,e){"object"===l(e)&&"function"==typeof e.default&&(e=e.default);var i=function(t,e,i){var n;return function(){var s=this,r=arguments,o=function(){n=null,i||t.apply(s,r)},a=i&&!n;clearTimeout(n),n=setTimeout(o,e),a&&t.apply(s,r)}};return e.component(t,{props:{size:{type:Number,required:!0},remain:{type:Number,required:!0},rtag:{type:String,default:"div"},wtag:{type:String,default:"div"},wclass:{type:String,default:""},wstyle:{type:Object,default:function(){return{}}},pagemode:{type:Boolean,default:!1},scrollelement:{type:"undefined"==typeof window?Object:HTMLElement,default:null},start:{type:Number,default:0},offset:{type:Number,default:0},variable:{type:[Function,Boolean],default:!1},bench:{type:Number,default:0},debounce:{type:Number,default:0},totop:{type:[Function,Boolean],default:!1},tobottom:{type:[Function,Boolean],default:!1},onscroll:{type:[Function,Boolean],default:!1},istable:{type:Boolean,default:!1},item:{type:[Function,Object],default:null},itemcount:{type:Number,default:0},itemprops:{type:Function,default:function(){}}},watch:{size:function(){this.changeProp="size"},remain:function(){this.changeProp="remain"},bench:function(){this.changeProp="bench",this.itemModeForceRender()},start:function(){this.changeProp="start",this.itemModeForceRender()},offset:function(){this.changeProp="offset",this.itemModeForceRender()},itemcount:function(){this.changeProp="itemcount",this.itemModeForceRender()},scrollelement:function(t,e){this.pagemode||(e&&this.removeScrollListener(e),t&&this.addScrollListener(t))}},created:function(){var t=this.start>=this.remain?this.start:0,e=this.remain+(this.bench||this.remain),i=Object.create(null);i.direction="",i.scrollTop=0,i.start=t,i.end=t+e-1,i.keeps=e,i.total=0,i.offsetAll=0,i.paddingTop=0,i.paddingBottom=0,i.varCache={},i.varAverSize=0,i.varLastCalcIndex=0,this.delta=i},mounted:function(){if(this.pagemode?this.addScrollListener(window):this.scrollelement&&this.addScrollListener(this.scrollelement),this.start){var t=this.getZone(this.start).start;this.setScrollTop(this.variable?this.getVarOffset(t):t*this.size)}else this.offset&&this.setScrollTop(this.offset)},beforeDestroy:function(){this.pagemode?this.removeScrollListener(window):this.scrollelement&&this.removeScrollListener(this.scrollelement)},beforeUpdate:function(){var t=this.delta;t.keeps=this.remain+(this.bench||this.remain);var e="start"===this.changeProp?this.start:t.start,i=this.getZone(e);if(this.changeProp&&["start","size","offset"].includes(this.changeProp)){var n="offset"===this.changeProp?this.offset:this.variable?this.getVarOffset(i.isLast?t.total:i.start):i.isLast&&t.total-e<=this.remain?t.total*this.size:e*this.size;this.$nextTick(this.setScrollTop.bind(this,n))}(this.changeProp||t.end!==i.end||e!==i.start)&&(this.changeProp="",t.end=i.end,t.start=i.start,this.forceRender())},methods:{addScrollListener:function(t){this.scrollHandler=this.debounce?i(this.onScroll.bind(this),this.debounce):this.onScroll,t.addEventListener("scroll",this.scrollHandler,!1)},removeScrollListener:function(t){t.removeEventListener("scroll",this.scrollHandler,!1)},onScroll:function(t){var e,i=this.delta,n=this.$refs.vsl;if(this.pagemode)e=-this.$el.getBoundingClientRect().top;else if(this.scrollelement){var s=this.scrollelement.getBoundingClientRect(),r=this.$el.getBoundingClientRect();e=s.top-r.top}else e=(n.$el||n).scrollTop||0;i.direction=e>i.scrollTop?"D":"U",i.scrollTop=e,i.total>i.keeps?this.updateZone(e):i.end=i.total-1;var o=i.offsetAll;if(this.onscroll){var a=Object.create(null);a.offset=e,a.offsetAll=o,a.start=i.start,a.end=i.end,this.onscroll(t,a)}!e&&i.total&&this.fireEvent("totop"),e>=o&&this.fireEvent("tobottom")},updateZone:function(t){var e=this.delta,i=this.variable?this.getVarOvers(t):Math.floor(t/this.size);"U"===e.direction&&(i=i-this.remain+1);var n=this.getZone(i),s=this.bench||this.remain,r=1===Math.abs(i-e.start-s);!r&&i-e.start<=s&&!n.isLast&&i>e.start||(r||n.start!==e.start||n.end!==e.end)&&(e.end=n.end,e.start=n.start,this.forceRender())},getZone:function(t){var e,i=this.delta;t=parseInt(t,10),t=Math.max(0,t);var n=i.total-i.keeps,s=t<=i.total&&t>=n||t>i.total;return{end:(e=s?Math.max(0,n):t)+i.keeps-1,start:e,isLast:s}},forceRender:function(){var t=this;window.requestAnimationFrame((function(){t.$forceUpdate()}))},itemModeForceRender:function(){this.item&&this.forceRender()},getVarOvers:function(t){for(var e=0,i=0,n=0,s=this.delta,r=s.total;e<=r;){if(i=e+Math.floor((r-e)/2),n=this.getVarOffset(i),s.varAverSize||(s.varAverSize=Math.floor(n/i)),n===t)return i;n<t?e=i+1:n>t&&(r=i-1)}return e>0?--e:0},getVarOffset:function(t,e){var i=this.delta,n=i.varCache[t];if(!e&&n)return n.offset;for(var s=0,r=0;r<t;r++){var o=this.getVarSize(r,e);i.varCache[r]={size:o,offset:s},s+=o}return i.varLastCalcIndex=Math.max(i.varLastCalcIndex,t-1),i.varLastCalcIndex=Math.min(i.varLastCalcIndex,i.total-1),s},getVarSize:function(t,e){var i=this.delta.varCache[t];if(!e&&i)return i.size;if("function"==typeof this.variable)return this.variable(t)||0;var n=this.item?this.$children[t]?this.$children[t].$vnode:null:this.$slots.default[t],s=n&&n.data&&n.data.style;if(s&&s.height){var r=s.height.match(/^(.*)px$/);return r&&+r[1]||0}return 0},getVarPaddingTop:function(){return this.getVarOffset(this.delta.start)},getVarPaddingBottom:function(){var t=this.delta,e=t.total-1;return t.total-t.end<=t.keeps||t.varLastCalcIndex===e?this.getVarOffset(e)-this.getVarOffset(t.end):(t.total-t.end)*(t.varAverSize||this.size)},getVarAllHeight:function(){var t=this.delta;return t.total-t.end<=t.keeps||t.varLastCalcIndex===t.total-1?this.getVarOffset(t.total):this.getVarOffset(t.start)+(t.total-t.end)*(t.varAverSize||this.size)},updateVariable:function(t){this.getVarOffset(t,!0)},fireEvent:function(t){this[t]&&this[t]()},setScrollTop:function(t){if(this.pagemode)window.scrollTo(0,t);else if(this.scrollelement)this.scrollelement.scrollTo(0,t);else{var e=this.$refs.vsl;e&&((e.$el||e).scrollTop=t)}},filter:function(t){var e,i,n,s=this.delta,r=this.$slots.default||[];this.item||this.$scopedSlots.item?(s.total=this.itemcount,s.keeps>s.total&&(s.end=s.total-1)):(r.length||(s.start=0),s.total=r.length);var o=s.total>s.keeps;this.variable?(n=this.getVarAllHeight(),e=o?this.getVarPaddingTop():0,i=o?this.getVarPaddingBottom():0):(n=this.size*s.total,e=this.size*(o?s.start:0),i=this.size*(o?s.total-s.keeps:0)-e),i<this.size&&(i=0),s.paddingTop=e,s.paddingBottom=i,s.offsetAll=n-this.size*this.remain;for(var a=[],l=s.start;l<s.total&&l<=Math.ceil(s.end);l++){var c=null;c=this.$scopedSlots.item?this.$scopedSlots.item(l):this.item?t(this.item,this.itemprops(l)):r[l],a.push(c)}return a}},render:function(t){var e=this.debounce,n=this.filter(t),s=this.delta,r=s.paddingTop,o=s.paddingBottom,a=this.istable,l=a?"div":this.wtag,c=a?"div":this.rtag;a&&(n=[t("table",[t("tbody",n)])]);var u=t(l,{style:Object.assign({display:"block","padding-top":r+"px","padding-bottom":o+"px"},this.wstyle),class:this.wclass,attrs:{role:"group"}},n);return this.pagemode||this.scrollelement?u:t(c,{ref:"vsl",style:{display:"block","overflow-y":this.size>=this.remain?"auto":"initial",height:this.size*this.remain+"px"},on:{"&scroll":e?i(this.onScroll.bind(this),e):this.onScroll}},[u])}})},"object"===l(e)&&"object"===l(t)?t.exports=a("VirtualList",i("jB52")):(s=[i("jB52")],n=a.bind(o,"VirtualList"),void 0===(r="function"==typeof n?n.apply(e,s):n)||(t.exports=r))}).call(this,i("Fs+f")(t))},XqDB:function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i("Mm9T"),s=i("o/E4"),r=i("QXXq"),o=i("BrvI"),a=i("7bmO"),l="__bv_modal_directive__",c=function(t){var e=t.modifiers,i=void 0===e?{}:e,n=t.arg,s=t.value;return Object(o.i)(s)?s:Object(o.i)(n)?n:Object(a.j)(i).reverse()[0]},u=function(t){return t&&Object(s.p)(t,".dropdown-menu > li, li.nav-item")&&Object(s.v)("a, button",t)||t},d=function(t){t&&"BUTTON"!==t.tagName&&(Object(s.k)(t,"role")||Object(s.x)(t,"role","button"),"A"===t.tagName||Object(s.k)(t,"tabindex")||Object(s.x)(t,"tabindex","0"))},h=function(t){var e=t[l]||{},i=e.trigger,n=e.handler;i&&n&&(Object(r.c)(i,"click",n,r.b),Object(r.c)(i,"keydown",n,r.b),Object(r.c)(t,"click",n,r.b),Object(r.c)(t,"keydown",n,r.b)),delete t[l]},f=function(t,e,i){var o=t[l]||{},a=c(e),f=u(t);a===o.target&&f===o.trigger||(h(t),function(t,e,i){var o=c(e),a=u(t);if(o&&a){var h=function(t){var e=t.currentTarget;if(!Object(s.m)(e)){var r=t.type,a=t.keyCode;"click"!==r&&("keydown"!==r||a!==n.a.ENTER&&a!==n.a.SPACE)||i.context.$root.$emit("bv::show::modal",o,e)}};t[l]={handler:h,target:o,trigger:a},d(a),Object(r.d)(a,"click",h,r.b),"BUTTON"!==a.tagName&&"button"===Object(s.e)(a,"role")&&Object(r.d)(a,"keydown",h,r.b)}}(t,e,i)),d(f)},p={inserted:f,updated:function(){},componentUpdated:f,unbind:h}},dsWN:function(t,e,i){"use strict";var n=i("s1D3"),s=i("4lAS"),r=i("XBTk"),o=i("Pyw5"),a=i.n(o);function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const d={components:{GlIcon:n.a,GlButton:s.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:r.b.info,validator:function(t){return Object.keys(r.b).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""}},computed:{iconName:function(){return r.a[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:"info",category:r.u.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:"default",category:r.u.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var i=u({},e.attrs);return i.href||delete i.href,t.push(u(u({},e),{},{attrs:i})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const h=a()({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["gl-alert",t.variantClass],attrs:{role:"alert"}},[i("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?i("button",{ref:"dismiss",staticClass:"gl-alert-dismiss",attrs:{type:"button","aria-label":t.dismissLabel},on:{click:t.onDismiss}},[i("gl-icon",{attrs:{name:"close"}})],1):t._e(),t._v(" "),t.title?i("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),i("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?i("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,n){return i("gl-button",t._g(t._b({key:n,staticClass:"gl-alert-action"},"gl-button",e.attrs,!1),e.listeners),[t._v("\n        "+t._s(e.text)+"\n      ")])})))],2):t._e()],1)},staticRenderFns:[]},void 0,d,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=h},f3jp:function(t,e,i){"use strict";i("9U97"),i("7Kf6");var n=i("GTGS"),s=i("FkSe"),r=i("LLbv"),o=i("2ibD"),a=i("0AwG"),l=i("/lV4"),c=i("XRO8"),u={components:{Icon:i("len0").a,GlDeprecatedButton:n.a,GlLoadingIcon:s.a},directives:{GlTooltip:r.a},props:{tooltipText:{type:String,required:!0},link:{type:String,required:!0},actionIcon:{type:String,required:!0}},data:function(){return{isDisabled:!1,isLoading:!1}},computed:{cssClass:function(){var t=Object(a.f)(this.actionIcon);return"".concat(t," js-icon-").concat(t)}},methods:{onClickAction:function(){var t=this;this.$root.$emit("bv::hide::tooltip","js-ci-action-".concat(this.link)),this.isDisabled=!0,this.isLoading=!0,o.a.post("".concat(this.link,".json")).then((function(){t.isDisabled=!1,t.isLoading=!1,t.$emit("pipelineActionRequestComplete")})).catch((function(){t.isDisabled=!1,t.isLoading=!1,Object(c.a)(Object(l.a)("An error occurred while making the request."))}))}}},d=i("tBpV"),h=Object(d.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("gl-deprecated-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:"viewport"},expression:"{ boundary: 'viewport' }"}],staticClass:"js-ci-action btn btn-blank btn-transparent ci-action-icon-container ci-action-icon-wrapper d-flex align-items-center justify-content-center",class:this.cssClass,attrs:{id:"js-ci-action-"+this.link,title:this.tooltipText,disabled:this.isDisabled},on:{click:this.onClickAction}},[this.isLoading?e("gl-loading-icon",{staticClass:"js-action-icon-loading"}):e("icon",{attrs:{name:this.actionIcon}})],1)}),[],!1,null,null,null);e.a=h.exports},o4PY:function(t,e,i){var n=i("rhmX"),s=0;t.exports=function(t){var e=++s;return n(t)+e}},s5BM:function(t,e,i){"use strict";var n=i("jB52");e.a=new n.default},wSP0:function(t,e,i){var n=i("WmU+");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}}}]);
//# sourceMappingURL=commons~pages.projects.merge_requests.show~pages.projects.pipelines.builds~pages.projects.pipelines.~6ca3fd1c.6ce4fc95.chunk.js.map