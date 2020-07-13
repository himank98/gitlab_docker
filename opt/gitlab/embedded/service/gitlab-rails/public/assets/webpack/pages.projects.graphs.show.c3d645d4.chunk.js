(this.webpackJsonp=this.webpackJsonp||[]).push([[220],{124:function(t,n,e){e("HVBj"),e("gjpc"),t.exports=e("CrRL")},CrRL:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"showChart",(function(){return E})),e.d(r,"parsedData",(function(){return I})),e.d(r,"default",(function(){return L}));var a={};e.r(a),e.d(a,"fetchChartData",(function(){return P})),e.d(a,"default",(function(){return z}));var i=e("jB52"),o=(e("va8A"),e("z4I3"),e("dj/k"),e("9U97"),e("kO4A"),e("+kFb"),e("OZM5"),e("x/6R"),e("Z5ek"),e("yaFd"),e("4ql4"),e("8Qi2"),e("5j0x"),e("zCcL"),e("zpLX"),e("BD5p"),e("MRnW"),e("GzNv"),e("tbvx"),e("Id6h"),e("orcL"),e("d+lS")),c=e.n(o),s=e("Tmea"),u=e.n(s),h=e("yi8e"),l=e("FkSe"),d=e("mlng"),f=e("/lV4"),m=e("bO+A"),b=e("bOix"),p=function(t){var n=new Date(t),e=n.getUTCMonth(),r=n.getUTCFullYear();return 0===e?"".concat(r):Object(b.j)(!0)[e]},v=function(t){var n=t.getUTCFullYear(),e=t.getUTCMonth(),r=t.getUTCDate();return"".concat(n,"-").concat("0".concat(e+1).slice(-2),"-").concat("0".concat(r).slice(-2))},g=e("8WOL");function C(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return O(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){A(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function A(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var D,_={components:{GlAreaChart:d.a,GlLoadingIcon:l.a,ResizableChartContainer:g.a},props:{endpoint:{type:String,required:!0},branch:{type:String,required:!0}},data:function(){return{masterChart:null,individualCharts:[],svgs:{},masterChartHeight:264,individualChartHeight:216}},computed:j(j(j({},Object(h.e)(["chartData","loading"])),Object(h.d)(["showChart","parsedData"])),{},{masterChartData:function(){var t=this,n={};return this.xAxisRange.forEach((function(e){n[e]=t.parsedData.total[e]||0})),[{name:Object(f.a)("Commits"),data:Object.entries(n)}]},masterChartOptions:function(){return j(j({},this.getCommonChartOptions(!0)),{},{yAxis:{name:Object(f.a)("Number of commits")},grid:{bottom:64,left:64,right:20,top:20}})},individualChartsData:function(){var t=this;return Object.keys(this.parsedData.byAuthorEmail).map((function(n){var e=t.parsedData.byAuthorEmail[n];return{name:e.name,email:n,commits:e.commits,dates:[{name:Object(f.a)("Commits"),data:t.xAxisRange.map((function(t){return[t,e.dates[t]||0]}))}]}})).sort((function(t,n){return n.commits-t.commits})).slice(0,100)},individualChartOptions:function(){return j(j({},this.getCommonChartOptions(!1)),{},{yAxis:{name:Object(f.a)("Commits"),max:this.individualChartYAxisMax},grid:{bottom:27,left:64,right:20,top:8}})},individualChartYAxisMax:function(){return this.individualChartsData.reduce((function(t,n){var e=n.dates[0].data.map((function(t){return t[1]}));return Math.max.apply(Math,[t].concat(C(e)))}),0)},xAxisRange:function(){var t=Object.keys(this.parsedData.total).sort((function(t,n){return new Date(t)-new Date(n)})),n=new Date(t[0]),e=new Date(t[t.length-1]);return Object(b.g)(n,e,v)},firstContributionDate:function(){return this.xAxisRange[0]},lastContributionDate:function(){return this.xAxisRange[this.xAxisRange.length-1]},charts:function(){return c()(this.individualCharts)}}),mounted:function(){this.fetchChartData(this.endpoint)},methods:j(j({},Object(h.c)(["fetchChartData"])),{},{getCommonChartOptions:function(t){return{xAxis:{type:"time",name:"",data:this.xAxisRange,axisLabel:{formatter:p,showMaxLabel:!1,showMinLabel:!1},boundaryGap:!1,splitNumber:t?24:18,minInterval:24192e5,min:this.firstContributionDate,max:this.lastContributionDate}}},setSvg:function(t){var n=this;return Object(m.a)(t).then((function(e){e&&n.$set(n.svgs,t,"path://".concat(e))})).catch((function(){}))},onMasterChartCreated:function(t){var n=this;this.masterChart=t,this.setSvg("scroll-handle").then((function(){n.masterChart.setOption({dataZoom:[{type:"slider",handleIcon:n.svgs["scroll-handle"]}]})})).catch((function(){})),this.masterChart.on("datazoom",u()(this.setIndividualChartsZoom,200))},onIndividualChartCreated:function(t){this.individualCharts.push(t)},setIndividualChartsZoom:function(t){this.charts.forEach((function(n){return n.setOption({dataZoom:{start:t.start,end:t.end,show:!1}},{lazyUpdate:!0})}))}})},x=e("tBpV"),w=Object(x.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.loading?e("div",{staticClass:"contributors-loader text-center"},[e("gl-loading-icon",{attrs:{inline:!0,size:"xl"}})],1):t.showChart?e("div",{staticClass:"contributors-charts"},[e("h4",[t._v(t._s(t.__("Commits to"))+" "+t._s(t.branch))]),t._v(" "),e("span",[t._v(t._s(t.__("Excluding merge commits. Limited to 6,000 commits.")))]),t._v(" "),e("resizable-chart-container",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.width;return e("gl-area-chart",{attrs:{width:r,data:t.masterChartData,option:t.masterChartOptions,height:t.masterChartHeight},on:{created:t.onMasterChartCreated}})}}])}),t._v(" "),e("div",{staticClass:"row"},t._l(t.individualChartsData,(function(n,r){return e("div",{key:r,staticClass:"col-lg-6 col-12"},[e("h4",[t._v(t._s(n.name))]),t._v(" "),e("p",[t._v(t._s(t.n__("%d commit","%d commits",n.commits))+" ("+t._s(n.email)+")")]),t._v(" "),e("resizable-chart-container",{scopedSlots:t._u([{key:"default",fn:function(r){var a=r.width;return e("gl-area-chart",{attrs:{width:a,data:n.dates,option:t.individualChartOptions,height:t.individualChartHeight},on:{created:t.onIndividualChartCreated}})}}],null,!0)})],1)})),0)],1):t._e()])}),[],!1,null,null,null).exports;e("EWC9");function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var T=(S(D={},"SET_LOADING_STATE",(function(t,n){t.loading=n})),S(D,"SET_CHART_DATA",(function(t,n){Object.assign(t,{chartData:n})})),S(D,"SET_ACTIVE_BRANCH",(function(t,n){Object.assign(t,{branch:n})})),D);var E=function(t){return Boolean(!t.loading&&t.chartData)},I=function(t){var n={},e={};return t.chartData.forEach((function(t){var r=t.date,a=t.author_name,i=t.author_email;e[r]=e[r]?e[r]+1:1;var o,c,s,u=n[i];u?(u.commits+=1,u.dates[r]=u.dates[r]?u.dates[r]+1:1):n[i]={name:a,commits:1,dates:(o={},c=r,s=1,c in o?Object.defineProperty(o,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[c]=s,o)}})),{total:e,byAuthorEmail:n}},L=function(){},R=e("XRO8"),M=e("2ibD"),k=function(t){return M.a.get(t)},P=function(t,n){var e=t.commit;return e("SET_LOADING_STATE",!0),k(n).then((function(t){return t.data})).then((function(t){e("SET_CHART_DATA",t),e("SET_LOADING_STATE",!1)})).catch((function(){return Object(R.a)(Object(f.a)("An error occurred while loading chart data"))}))},z=function(){};i.default.use(h.b);var G=new h.b.Store({actions:a,mutations:T,getters:r,state:{loading:!1,chartData:null,branch:"master"}});document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".js-contributors-graph");return t?new i.default({el:t,store:G,render:function(n){return n(w,{props:{endpoint:t.dataset.projectGraphPath,branch:t.dataset.projectBranch}})}}):null}))},"bO+A":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("htNe"),a=e.n(r),i=e("2ibD"),o=a()((function(){return i.a.get(gon.sprite_icons).then((function(t){var n=t.data;return(new DOMParser).parseFromString(n,"text/xml")})).catch((function(t){throw o.cache.clear(),t}))})),c=function(t){return o().then((function(n){return n.querySelector("#".concat(t," path")).getAttribute("d")})).catch((function(){return null}))}}},[[124,1,0,24,70]]]);
//# sourceMappingURL=pages.projects.graphs.show.c3d645d4.chunk.js.map