(this.webpackJsonp=this.webpackJsonp||[]).push([[252],{157:function(t,e,n){n("HVBj"),n("gjpc"),t.exports=n("W/bb")},MV2A:function(t,e,n){"use strict";var r=n("1m+M"),a=n("jB52"),o=function(t){try{var e=new URL(t,(n=window.location,r=n.protocol,a=n.host,"".concat(r,"//").concat(a)));return["http:","https:","mailto:","ftp:"].includes(e.protocol)}catch(t){return!1}var n,r,a},i=function(t){var e=t.href,n=t.target,r=t.rel,a=t.hostname;o(e)||(t.href="about:blank"),function(t,e){return"_blank"===t&&e!==window.location.hostname}(n,a)&&(t.rel=function(t){var e=t?t.trim().split(" "):[];return e.includes("noopener")||e.push("noopener"),e.includes("noreferrer")||e.push("noreferrer"),e.join(" ")}(r))},l={inserted:i,update:function(t){a.default.nextTick((function(){i(t)}))}},s=n("Pyw5"),c=n.n(s);const u={components:{BLink:r.a},directives:{SafeLink:l},props:{target:{type:String,required:!1,default:null}}};const d=c()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-link",this._g(this._b({directives:[{name:"safe-link",rawName:"v-safe-link"}],staticClass:"gl-link",attrs:{target:this.target}},"b-link",this.$attrs,!1),this.$listeners),[this._t("default")],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},"W/bb":function(t,e,n){"use strict";n.r(e);var r=n("oX8m");document.addEventListener("DOMContentLoaded",r.a)},iI3z:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));n("9U97"),n("t3Gg"),n("8Qi2"),n("+xU6"),n("L1PU");function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a={name:"UTC",offset:0},o={$inputEl:null,$dropdownEl:null,onSelectTimezone:null,displayFormat:function(t){return t.name}},i=function(t){return"[UTC ".concat((e=t.offset,n=parseInt(e,10),Number.isNaN(n)||0===n?"0":"".concat(e>0?"+":"-"," ").concat(Math.abs(e/3600))),"] ").concat(t.name);var e,n},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&t.length&&e&&e.length&&t.find((function(t){return t.identifier===e}))||null},s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=e.$dropdownEl,r=e.$inputEl,i=e.onSelectTimezone,s=e.displayFormat;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$dropdown=n,this.$dropdownToggle=this.$dropdown.find(".dropdown-toggle-text"),this.$input=r,this.timezoneData=this.$dropdown.data("data"),this.onSelectTimezone=i,this.displayFormat=s||o.displayFormat,this.initialTimezone=l(this.timezoneData,this.$input.val())||a,this.initDefaultTimezone(),this.initDropdown()}var e,n,s;return e=t,(n=[{key:"initDropdown",value:function(){var t=this;this.$dropdown.glDropdown({data:this.timezoneData,filterable:!0,selectable:!0,toggleLabel:this.displayFormat,search:{fields:["name"]},clicked:function(e){return t.updateInputValue(e)},text:function(t){return i(t)}}),this.setDropdownToggle(this.displayFormat(this.initialTimezone))}},{key:"initDefaultTimezone",value:function(){this.$input.val()||this.$input.val(a.name)}},{key:"setDropdownToggle",value:function(t){this.$dropdownToggle.text(t)}},{key:"updateInputValue",value:function(t){var e=t.selectedObj,n=t.e;n.preventDefault(),this.$input.val(e.identifier),this.onSelectTimezone&&this.onSelectTimezone({selectedObj:e,e:n})}}])&&r(e.prototype,n),s&&r(e,s),t}()},oX8m:function(t,e,n){"use strict";var r=n("3a3M"),a=n.n(r),o=n("jB52"),i=n("0KyK"),l=n("59b1"),s=(n("9U97"),n("FMw2"),n("N0ZT"),n("QifN"),n("30su")),c=n("MV2A"),u=n("/lV4"),d=n("bOix"),v={components:{GlSprintf:s.a,GlLink:c.a},props:{initialCronInterval:{type:String,required:!1,default:""}},data:function(){return{isEditingCustom:!1,randomHour:this.generateRandomHour(),randomWeekDayIndex:this.generateRandomWeekDayIndex(),randomDay:this.generateRandomDay(),inputNameAttribute:"schedule[cron]",cronInterval:this.initialCronInterval,cronSyntaxUrl:"https://en.wikipedia.org/wiki/Cron"}},computed:{cronIntervalPresets:function(){return{everyDay:"0 ".concat(this.randomHour," * * *"),everyWeek:"0 ".concat(this.randomHour," * * ").concat(this.randomWeekDayIndex),everyMonth:"0 ".concat(this.randomHour," ").concat(this.randomDay," * *")}},intervalIsPreset:function(){return Object.values(this.cronIntervalPresets).includes(this.cronInterval)},formattedTime:function(){return this.randomHour>12?"".concat(this.randomHour-12,":00pm"):12===this.randomHour?"12:00pm":"".concat(this.randomHour,":00am")},weekday:function(){return Object(d.l)()[this.randomWeekDayIndex]},everyDayText:function(){return Object(u.e)(Object(u.d)("Every day (at %{time})"),{time:this.formattedTime})},everyWeekText:function(){return Object(u.e)(Object(u.d)("Every week (%{weekday} at %{time})"),{weekday:this.weekday,time:this.formattedTime})},everyMonthText:function(){return Object(u.e)(Object(u.d)("Every month (Day %{day} at %{time})"),{day:this.randomDay,time:this.formattedTime})}},watch:{cronInterval:function(){this.$nextTick((function(){gl.pipelineScheduleFieldErrors.updateFormValidityState()}))}},mounted:function(){""===this.cronInterval&&(this.cronInterval=this.cronIntervalPresets.everyDay)},methods:{setCustomInput:function(t){this.isEditingCustom||(this.isEditingCustom=!0,this.$refs.customInput.click(),this.cronInterval=t.target.value),this.intervalIsPreset&&(this.isEditingCustom=!1)},toggleCustomInput:function(t){this.isEditingCustom=t,t&&(this.cronInterval="".concat(this.cronInterval," "))},generateRandomHour:function(){return Math.floor(23*Math.random())},generateRandomWeekDayIndex:function(){return Math.floor(6*Math.random())},generateRandomDay:function(){return Math.floor(28*Math.random())}}},p=n("tBpV"),m=Object(p.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interval-pattern-form-group"},[n("div",{staticClass:"cron-preset-radio-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cronInterval,expression:"cronInterval"}],staticClass:"label-bold",attrs:{id:"every-day",name:t.inputNameAttribute,type:"radio"},domProps:{value:t.cronIntervalPresets.everyDay,checked:t._q(t.cronInterval,t.cronIntervalPresets.everyDay)},on:{click:function(e){return t.toggleCustomInput(!1)},change:function(e){t.cronInterval=t.cronIntervalPresets.everyDay}}}),t._v(" "),n("label",{staticClass:"label-bold",attrs:{for:"every-day"}},[t._v("\n      "+t._s(t.everyDayText)+"\n    ")])]),t._v(" "),n("div",{staticClass:"cron-preset-radio-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cronInterval,expression:"cronInterval"}],staticClass:"label-bold",attrs:{id:"every-week",name:t.inputNameAttribute,type:"radio"},domProps:{value:t.cronIntervalPresets.everyWeek,checked:t._q(t.cronInterval,t.cronIntervalPresets.everyWeek)},on:{click:function(e){return t.toggleCustomInput(!1)},change:function(e){t.cronInterval=t.cronIntervalPresets.everyWeek}}}),t._v(" "),n("label",{staticClass:"label-bold",attrs:{for:"every-week"}},[t._v("\n      "+t._s(t.everyWeekText)+"\n    ")])]),t._v(" "),n("div",{staticClass:"cron-preset-radio-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cronInterval,expression:"cronInterval"}],staticClass:"label-bold",attrs:{id:"every-month",name:t.inputNameAttribute,type:"radio"},domProps:{value:t.cronIntervalPresets.everyMonth,checked:t._q(t.cronInterval,t.cronIntervalPresets.everyMonth)},on:{click:function(e){return t.toggleCustomInput(!1)},change:function(e){t.cronInterval=t.cronIntervalPresets.everyMonth}}}),t._v(" "),n("label",{staticClass:"label-bold",attrs:{for:"every-month"}},[t._v("\n      "+t._s(t.everyMonthText)+"\n    ")])]),t._v(" "),n("div",{staticClass:"cron-preset-radio-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cronInterval,expression:"cronInterval"}],ref:"customInput",staticClass:"label-bold",attrs:{id:"custom",name:t.inputNameAttribute,type:"radio"},domProps:{value:t.cronInterval,checked:t._q(t.cronInterval,t.cronInterval)},on:{click:function(e){return t.toggleCustomInput(!0)},change:function(e){t.cronInterval=t.cronInterval}}}),t._v(" "),n("label",{attrs:{for:"custom"}},[t._v(" "+t._s(t.s__("PipelineSheduleIntervalPattern|Custom"))+" ")]),t._v(" "),n("gl-sprintf",{attrs:{message:t.__("(%{linkStart}Cron syntax%{linkEnd})")},scopedSlots:t._u([{key:"link",fn:function(e){var r=e.content;return[n("gl-link",{staticClass:"gl-font-sm",attrs:{href:t.cronSyntaxUrl,target:"_blank"}},[t._v("\n          "+t._s(r)+"\n        ")])]}}])})],1),t._v(" "),n("div",{staticClass:"cron-interval-input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cronInterval,expression:"cronInterval"}],staticClass:"form-control inline cron-interval-input",attrs:{id:"schedule_cron",placeholder:t.__("Define a custom pattern with cron syntax"),name:t.inputNameAttribute,type:"text",required:"true"},domProps:{value:t.cronInterval},on:{input:[function(e){e.target.composing||(t.cronInterval=e.target.value)},t.setCustomInput]}})])])}),[],!1,null,null,null).exports,h=n("iI3z");n("t3Gg"),n("Z5ek"),n("8Qi2");function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$dropdown=a()(".js-target-branch-dropdown"),this.$dropdownToggle=this.$dropdown.find(".dropdown-toggle-text"),this.$input=a()("#schedule_ref"),this.initDefaultBranch(),this.initDropdown()}var e,n,r;return e=t,(n=[{key:"initDropdown",value:function(){var t=this;this.$dropdown.glDropdown({data:this.formatBranchesList(),filterable:!0,selectable:!0,toggleLabel:function(t){return t.name},search:{fields:["name"]},clicked:function(e){return t.updateInputValue(e)},text:function(t){return t.name}}),this.setDropdownToggle()}},{key:"formatBranchesList",value:function(){return this.$dropdown.data("data").map((function(t){return{name:t}}))}},{key:"setDropdownToggle",value:function(){var t=this.$input.val();this.$dropdownToggle.text(t)}},{key:"initDefaultBranch",value:function(){var t=this.$input.val(),e=this.$dropdown.data("defaultBranch");t||this.$input.val(e)}},{key:"updateInputValue",value:function(t){var e=t.selectedObj;t.e.preventDefault(),this.$input.val(e.name),gl.pipelineScheduleFieldErrors.updateFormValidityState()}}])&&f(e.prototype,n),r&&f(e,r),t}(),g=n("nNFV");o.default.use(i.a);e.a=function(){var t,e,n;e=document.getElementById("interval-pattern-input"),n=null==e?void 0:null===(t=e.dataset)||void 0===t?void 0:t.initialInterval,new o.default({el:e,components:{intervalPatternInput:m},render:function(t){return t("interval-pattern-input",{props:{initialCronInterval:n}})}});var r=document.getElementById("new-pipeline-schedule-form");gl.timezoneDropdown=new h.a({$dropdownEl:a()(".js-timezone-dropdown"),$inputEl:a()("#schedule_cron_timezone"),onSelectTimezone:function(){gl.pipelineScheduleFieldErrors.updateFormValidityState()}}),gl.targetBranchDropdown=new y,gl.pipelineScheduleFieldErrors=new l.a(r),Object(g.a)({container:a()(".js-ci-variable-list-section"),formField:"schedule"})}}},[[157,1,0,36]]]);
//# sourceMappingURL=pages.projects.pipeline_schedules.new.5e922256.chunk.js.map