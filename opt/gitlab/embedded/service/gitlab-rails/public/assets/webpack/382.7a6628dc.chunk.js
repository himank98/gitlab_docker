(this.webpackJsonp=this.webpackJsonp||[]).push([[382],{hNaJ:function(e,t,n){"use strict";n.r(t);n("va8A"),n("kO4A"),n("+kFb"),n("zCcL"),n("zpLX"),n("BD5p"),n("Id6h");var i=n("yi8e"),l=(n("9U97"),n("+xU6"),{components:{GlLink:n("MV2A").a},props:{lineNumber:{type:Number,required:!0},path:{type:String,required:!0}},computed:{buildLineNumber:function(){return"".concat(this.path,"#").concat(this.lineNumberId)},parsedLineNumber:function(){return this.lineNumber+1},lineNumberId:function(){return"L".concat(this.parsedLineNumber)}}}),r=n("tBpV"),o=Object(r.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("gl-link",{staticClass:"d-inline-block text-right line-number flex-shrink-0",attrs:{id:this.lineNumberId,href:this.buildLineNumber}},[this._v(this._s(this.parsedLineNumber))])}),[],!1,null,null,null).exports,s={components:{LineNumber:o},props:{line:{type:Object,required:!0},path:{type:String,required:!0}}},a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"js-line log-line"},[n("line-number",{attrs:{"line-number":e.line.lineNumber,path:e.path}}),e._v(" "),e._l(e.line.content,(function(t,i){return n("span",{key:i,staticClass:"ws-pre-wrap",class:t.style},[e._v(e._s(t.text))])}))],2)}),[],!1,null,null,null).exports,c=n("len0"),u={props:{duration:{type:String,required:!0}}},p=Object(r.a)(u,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"log-duration-badge rounded align-self-start px-2 ml-2 flex-shrink-0 ws-normal"},[this._v("\n  "+this._s(this.duration)+"\n")])}),[],!1,null,null,null).exports,d={components:{Icon:c.a,LineNumber:o,DurationBadge:p},props:{line:{type:Object,required:!0},isClosed:{type:Boolean,required:!0},path:{type:String,required:!0},duration:{type:String,required:!1,default:""}},computed:{iconName:function(){return this.isClosed?"angle-right":"angle-down"}},methods:{handleOnClick:function(){this.$emit("toggleLine")}}},b={name:"CollpasibleLogSection",components:{LogLine:a,LogLineHeader:Object(r.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-line collapsible-line d-flex justify-content-between ws-normal",attrs:{role:"button"},on:{click:e.handleOnClick}},[n("icon",{staticClass:"arrow position-absolute",attrs:{name:e.iconName}}),e._v(" "),n("line-number",{attrs:{"line-number":e.line.lineNumber,path:e.path}}),e._v(" "),e._l(e.line.content,(function(t,i){return n("span",{key:i,staticClass:"line-text w-100 ws-pre-wrap",class:t.style},[e._v(e._s(t.text))])})),e._v(" "),e.duration?n("duration-badge",{attrs:{duration:e.duration}}):e._e()],2)}),[],!1,null,null,null).exports},props:{section:{type:Object,required:!0},traceEndpoint:{type:String,required:!0}},computed:{badgeDuration:function(){return this.section.line&&this.section.line.section_duration}},methods:{handleOnClickCollapsibleLine:function(e){this.$emit("onClickCollapsibleLine",e)}}};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={components:{CollpasibleLogSection:Object(r.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("log-line-header",{attrs:{line:e.section.line,duration:e.badgeDuration,path:e.traceEndpoint,"is-closed":e.section.isClosed},on:{toggleLine:function(t){return e.handleOnClickCollapsibleLine(e.section)}}}),e._v(" "),e.section.isClosed?e._e():e._l(e.section.lines,(function(t){return n("log-line",{key:t.offset,attrs:{line:t,path:e.traceEndpoint}})}))],2)}),[],!1,null,null,null).exports,LogLine:a},computed:f({},Object(i.e)(["traceEndpoint","trace","isTraceComplete","isScrolledToBottomBeforeReceivingTrace"])),updated:function(){var e=this;this.$nextTick((function(){e.handleScrollDown()}))},mounted:function(){var e=this;this.$nextTick((function(){e.handleScrollDown()}))},methods:f(f({},Object(i.c)(["toggleCollapsibleLine","scrollBottom"])),{},{handleOnClickCollapsibleLine:function(e){this.toggleCollapsibleLine(e)},handleScrollDown:function(){var e=this;this.isScrolledToBottomBeforeReceivingTrace&&setTimeout((function(){e.scrollBottom()}),0)}})},v=Object(r.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",{staticClass:"job-log d-block",attrs:{"data-qa-selector":"job_log_content"}},[e._l(e.trace,(function(t,i){return[t.isHeader?n("collpasible-log-section",{key:"collapsible-"+i,attrs:{section:t,"trace-endpoint":e.traceEndpoint},on:{onClickCollapsibleLine:e.handleOnClickCollapsibleLine}}):n("log-line",{key:t.offset,attrs:{line:t,path:e.traceEndpoint}})]})),e._v(" "),e.isTraceComplete?e._e():n("div",{staticClass:"js-log-animation loader-animation pt-3 pl-3"},[n("div",{staticClass:"dot"}),e._v(" "),n("div",{staticClass:"dot"}),e._v(" "),n("div",{staticClass:"dot"})])],2)}),[],!1,null,null,null);t.default=v.exports}}]);
//# sourceMappingURL=382.7a6628dc.chunk.js.map