(this.webpackJsonp=this.webpackJsonp||[]).push([[60],{"2bBj":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("9U97"),n("t3Gg"),n("S6uq");var i=n("Tmea"),r=n.n(i),o=n("3a3M"),s=n.n(o),a=n("2ibD");function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"filter_groups";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.filterForm=e,this.listFilterElement=n,this.listHolderElement=i,this.filterInputField=r,this.isBusy=!1}var e,n,i;return e=t,(n=[{key:"getFilterEndpoint",value:function(){return this.getPagePath()}},{key:"getPagePath",value:function(){var t=this.filterForm.getAttribute("action"),e=s()(this.filterForm).serialize();return"".concat(t).concat(t.indexOf("?")>0?"&":"?").concat(e)}},{key:"initSearch",value:function(){this.debounceFilter=r()(this.onFilterInput.bind(this),500),this.unbindEvents(),this.bindEvents()}},{key:"onFilterInput",value:function(){var t={},e=s()(this.filterForm).find('[name="'.concat(this.filterInputField,'"]')).val();e&&(t[this.filterInputField]=e),this.filterResults(t),this.setDefaultFilterOption&&this.setDefaultFilterOption()}},{key:"bindEvents",value:function(){this.listFilterElement.addEventListener("input",this.debounceFilter)}},{key:"unbindEvents",value:function(){this.listFilterElement.removeEventListener("input",this.debounceFilter)}},{key:"filterResults",value:function(t){var e=this;return!this.isBusy&&(s()(this.listHolderElement).fadeTo(250,.5),this.isBusy=!0,a.a.get(this.getFilterEndpoint(),{params:t}).then((function(n){e.onFilterSuccess(n,t),e.onFilterComplete()})).catch((function(){return e.onFilterComplete()})))}},{key:"onFilterSuccess",value:function(t,e){t.data.html&&(this.listHolderElement.innerHTML=t.data.html);var n=this.getPagePath(e);return window.history.replaceState({page:n},document.title,n)}},{key:"onFilterComplete",value:function(){this.isBusy=!1,s()(this.listHolderElement).fadeTo(250,1)}}])&&c(e.prototype,n),i&&c(e,i),t}()},"4lAS":function(t,e,n){"use strict";var i=n("ofGl"),r=n("s1D3"),o=n("FkSe"),s=n("LCwo"),a=n("XBTk"),c=n("Pyw5"),l=n.n(c);const u={components:{BButton:i.a,GlIcon:r.a,GlLoadingIcon:o.a},mixins:[s.a],props:{category:{type:String,required:!1,default:a.u.tertiary,validator:function(t){return Object.keys(a.u).includes(t)}},variant:{type:String,required:!1,default:a.x.default,validator:function(t){return Object.keys(a.x).includes(t)}},size:{type:String,required:!1,default:a.v.medium,validator:function(t){return Object.keys(a.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){return{"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,"btn-secondary":this.category===a.u.secondary,"gl-button":this.variant!==a.x.link,"btn-label":this.label,selected:this.selected}},buttonSize:function(){return a.w[this.size]}}};const f=l()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",t._g(t._b({class:t.buttonClasses,attrs:{rel:t.relType,target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"b-button",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),t.hasIcon?n("gl-icon",{attrs:{name:t.icon}}):t._e(),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text"},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=f},ZY52:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("va8A"),n("z4I3"),n("dj/k"),n("x/6R"),n("WQYg"),n("MRnW"),n("EfZm"),n("IdsT"),n("GzNv"),n("tbvx"),n("S26F"),n("orcL");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(c,t);var e,n,i,a=s(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a.apply(this,arguments)}return e=c,(n=[{key:"getFilterEndpoint",value:function(){return this.getPagePath().replace("/projects?","/projects.json?")}}])&&r(e.prototype,n),i&&r(e,i),c}(n("2bBj").a);var u=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector("form#project-filter-form"),n=document.querySelector(".js-projects-list-filter"),i=document.querySelector(".js-projects-list-holder");e&&n&&i&&new l(e,n,i).initSearch()}},dsWN:function(t,e,n){"use strict";var i=n("s1D3"),r=n("4lAS"),o=n("XBTk"),s=n("Pyw5"),a=n.n(s);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const f={components:{GlIcon:i.a,GlButton:r.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:o.b.info,validator:function(t){return Object.keys(o.b).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""}},computed:{iconName:function(){return o.a[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:"info",category:o.u.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:"default",category:o.u.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var n=u({},e.attrs);return n.href||delete n.href,t.push(u(u({},e),{},{attrs:n})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const d=a()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["gl-alert",t.variantClass],attrs:{role:"alert"}},[n("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?n("button",{ref:"dismiss",staticClass:"gl-alert-dismiss",attrs:{type:"button","aria-label":t.dismissLabel},on:{click:t.onDismiss}},[n("gl-icon",{attrs:{name:"close"}})],1):t._e(),t._v(" "),t.title?n("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?n("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,i){return n("gl-button",t._g(t._b({key:i,staticClass:"gl-alert-action"},"gl-button",e.attrs,!1),e.listeners),[t._v("\n        "+t._s(e.text)+"\n      ")])})))],2):t._e()],1)},staticRenderFns:[]},void 0,f,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},g4s4:function(t,e,n){"use strict";n.r(e);n("+kFb"),n("Id6h");var i=n("ZY52"),r=(n("9U97"),n("jnfO"),n("3a3M")),o=n.n(r),s=(n("X42B"),n("qPgm")),a=n("3twG"),c=n("NmEs"),l=n("/lV4");var u=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=Object(c.H)(e.dropdown.dataset.isFilter),i=e.dropdown.dataset.fieldName||"namespace_id";o()(e.dropdown).glDropdown({filterable:!0,selectable:!0,filterRemote:!0,search:{fields:["path"]},fieldName:i,toggleLabel:function(t){return null==t.id?t.text:"".concat(t.kind,": ").concat(t.full_path)},data:function(t,e){return s.a.namespaces(t,(function(t){if(n){var i={text:Object(l.a)("Any namespace"),id:null};t.unshift(i),t.splice(1,0,{type:"divider"})}return e(t)}))},text:function(t){return null==t.id?t.text:"".concat(t.kind,": ").concat(t.full_path)},renderRow:this.renderRow,clicked:function(t){n||t.e.preventDefault()},url:function(t){return Object(a.n)((e={},n=i,r=t.id,n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e),window.location.href);var e,n,r}})};document.addEventListener("DOMContentLoaded",(function(){new i.a,document.querySelectorAll(".js-namespace-select").forEach((function(t){return new u({dropdown:t})}))}))},iooJ:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"requestStatistics",(function(){return _})),n.d(i,"fetchStatistics",(function(){return k})),n.d(i,"receiveStatisticsSuccess",(function(){return E})),n.d(i,"receiveStatisticsError",(function(){return P})),n.d(i,"default",(function(){return C}));var r={};n.r(r),n.d(r,"getStatistics",(function(){return I})),n.d(r,"default",(function(){return T}));n("t3Gg");var o=n("3a3M"),s=n.n(o),a=n("3twG");function c(){"file"===s()('input[name="blacklist_type"]:checked').val()?(s()(".blacklist-file").show(),s()(".blacklist-raw").hide()):(s()(".blacklist-file").hide(),s()(".blacklist-raw").show())}var l=n("jB52"),u=(n("va8A"),n("kO4A"),n("+kFb"),n("zCcL"),n("zpLX"),n("BD5p"),n("Id6h"),n("yi8e")),f=n("FkSe"),d=n("/lV4"),p={forks:Object(d.d)("AdminStatistics|Forks"),issues:Object(d.d)("AdminStatistics|Issues"),mergeRequests:Object(d.d)("AdminStatistics|Merge Requests"),notes:Object(d.d)("AdminStatistics|Notes"),snippets:Object(d.d)("AdminStatistics|Snippets"),sshKeys:Object(d.d)("AdminStatistics|SSH Keys"),milestones:Object(d.d)("AdminStatistics|Milestones"),activeUsers:Object(d.d)("AdminStatistics|Active Users")};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m,v={components:{GlLoadingIcon:f.a},data:function(){return{statisticsLabels:p}},computed:h(h({},Object(u.e)(["isLoading","statistics"])),Object(u.d)(["getStatistics"])),mounted:function(){this.fetchStatistics()},methods:h({},Object(u.c)(["fetchStatistics"]))},g=n("tBpV"),O=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-well"},[n("div",{staticClass:"well-segment admin-well admin-well-statistics"},[n("h4",[t._v(t._s(t.__("Statistics")))]),t._v(" "),t.isLoading?n("gl-loading-icon",{staticClass:"my-3",attrs:{size:"md"}}):t._l(t.getStatistics(t.statisticsLabels),(function(e){return n("p",{key:e.key,staticClass:"js-stats"},[t._v("\n        "+t._s(e.label)+"\n        "),n("span",{staticClass:"light float-right"},[t._v(t._s(e.value))])])}))],2)])}),[],!1,null,null,null).exports,S=n("qPgm"),j=n("XRO8"),w=n("NmEs"),_=function(t){return(0,t.commit)("REQUEST_STATISTICS")},k=function(t){var e=t.dispatch;e("requestStatistics"),S.a.adminStatistics().then((function(t){var n=t.data;e("receiveStatisticsSuccess",Object(w.g)(n,{deep:!0}))})).catch((function(t){return e("receiveStatisticsError",t)}))},E=function(t,e){return(0,t.commit)("RECEIVE_STATISTICS_SUCCESS",e)},P=function(t,e){(0,t.commit)("RECEIVE_STATISTICS_ERROR",e),Object(j.a)(Object(d.d)("AdminDashboard|Error loading the statistics. Please try again"))},C=function(){},I=(n("Z5ek"),function(t){return function(e){return Object.keys(e).map((function(n){return{key:n,label:e[n],value:t.statistics&&t.statistics[n]?t.statistics[n]:null}}))}}),T=function(){};function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D=(B(m={},"REQUEST_STATISTICS",(function(t){t.isLoading=!0})),B(m,"RECEIVE_STATISTICS_SUCCESS",(function(t,e){t.isLoading=!1,t.error=null,t.statistics=e})),B(m,"RECEIVE_STATISTICS_ERROR",(function(t,e){t.isLoading=!1,t.error=e})),m);l.default.use(u.b);var A=function(t){if(!t)return!1;var e=new u.b.Store({actions:i,getters:r,mutations:D,state:{error:null,isLoading:!1,statistics:null}});return new l.default({el:t,store:e,components:{StatisticsPanelApp:O},render:function(t){return t(O)}})},F=(n("z4I3"),n("dj/k"),n("OZM5"),n("x/6R"),n("4ql4"),n("8Qi2"),n("MRnW"),n("GzNv"),n("tbvx"),n("orcL"),{components:{GlAlert:n("dsWN").a},props:{html:{type:String,required:!1,default:""}},data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0}}}),R=Object(g.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDismissed?t._e():n("gl-alert",t._g(t._b({on:{dismiss:t.dismiss}},"gl-alert",t.$attrs,!1),t.$listeners),[n("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports;function L(t){return function(t){if(Array.isArray(t))return q(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $=function(t){var e={html:t.innerHTML},n=M(M({},t.dataset),{},{dismissible:Object(w.H)(t.dataset.dismissible)});return new l.default({el:t,render:function(t){return t(R,{props:e,attrs:n})}})};document.addEventListener("DOMContentLoaded",(function(){return L(document.querySelectorAll(".js-vue-alert")).map($)})),document.addEventListener("DOMContentLoaded",(function(){var t,e=document.getElementById("js-admin-statistics-container");t=s()(".change-owner-holder"),s()("input#user_force_random_password").on("change",(function(){var t=s()("#user_password, #user_password_confirmation");s()(this).attr("checked")?t.val("").prop("disabled",!0):t.prop("disabled",!1)})),s()("body").on("click",".js-toggle-colors-link",(function(t){t.preventDefault(),s()(".js-toggle-colors-container").toggleClass("hide")})),s()(".log-tabs a").on("click",(function(t){t.preventDefault(),s()(this).tab("show")})),s()(".log-bottom").on("click",(function(t){t.preventDefault();var e=s()(".file-content:visible");e.animate({scrollTop:e.find("ol").height()},"fast")})),s()(".change-owner-link").on("click",(function(e){e.preventDefault(),s()(this).hide(),t.show()})),s()(".change-owner-cancel-link").on("click",(function(e){e.preventDefault(),t.hide(),s()(".change-owner-link").show()})),s()("li.project_member, li.group_member").on("ajax:success",a.r),s()("input[name='blacklist_type']").on("click",c),c(),A(e)}))}}]);
//# sourceMappingURL=commons~pages.admin.projects~pages.admin.projects.index.48217c55.chunk.js.map