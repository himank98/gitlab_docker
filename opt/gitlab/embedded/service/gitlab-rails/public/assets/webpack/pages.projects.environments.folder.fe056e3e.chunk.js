(this.webpackJsonp=this.webpackJsonp||[]).push([[210],{114:function(e,t,n){n("HVBj"),n("gjpc"),e.exports=n("cwLK")},"2/vm":function(e,t,n){"use strict";var o=n("NmEs");t.a={data:function(){var e=document.querySelector(this.$options.el).dataset;return{canaryDeploymentFeatureId:e.environmentsDataCanaryDeploymentFeatureId,showCanaryDeploymentCallout:Object(o.H)(e.environmentsDataShowCanaryDeploymentCallout),userCalloutsPath:e.environmentsDataUserCalloutsPath,lockPromotionSvgPath:e.environmentsDataLockPromotionSvgPath,helpCanaryDeploymentsPath:e.environmentsDataHelpCanaryDeploymentsPath}},computed:{canaryCalloutProps:function(){return{canaryDeploymentFeatureId:this.canaryDeploymentFeatureId,showCanaryDeploymentCallout:this.showCanaryDeploymentCallout,userCalloutsPath:this.userCalloutsPath,lockPromotionSvgPath:this.lockPromotionSvgPath,helpCanaryDeploymentsPath:this.helpCanaryDeploymentsPath}}}}},"71Sp":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("FMw2"),n("QifN");var o=n("osXd"),r=n.n(o),a=n("k4Ha"),i=function(e){return r()(e,(function(e,t){return a.k.includes(t)&&e}))}},Fpys:function(e,t,n){"use strict";var o=n("LLbv"),r=n("Mifk"),a=n("/lV4"),i=n("kJRM"),s={id:"stop-environment-modal",name:"StopEnvironmentModal",components:{GlModal:r.a},directives:{GlTooltip:o.a},props:{environment:{type:Object,required:!0}},computed:{noStopActionMessage:function(){return Object(a.e)(Object(a.d)("Environments|Note that this action will stop the environment,\n        but it will %{emphasisStart}not%{emphasisEnd} have an effect on any existing deployment\n        due to no “stop environment action” being defined\n        in the %{ciConfigLinkStart}.gitlab-ci.yml%{ciConfigLinkEnd} file."),{emphasisStart:"<strong>",emphasisEnd:"</strong>",ciConfigLinkStart:'<a href="https://docs.gitlab.com/ee/ci/yaml/" target="_blank" rel="noopener noreferrer">',ciConfigLinkEnd:"</a>"},!1)}},methods:{onSubmit:function(){i.a.$emit("stopEnvironment",this.environment)}}},l=n("tBpV"),c=Object(l.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("gl-modal",{attrs:{id:e.$options.id,"footer-primary-button-text":e.s__("Environments|Stop environment"),"footer-primary-button-variant":"danger"},on:{submit:e.onSubmit},scopedSlots:e._u([{key:"header",fn:function(){return[n("h4",{staticClass:"modal-title d-flex mw-100"},[e._v("\n      Stopping\n      "),n("span",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"text-truncate ml-1 mr-1 flex-fill",attrs:{title:e.environment.name}},[e._v("\n        "+e._s(e.environment.name)+"?\n      ")])])]},proxy:!0}])},[e._v(" "),n("p",[e._v(e._s(e.s__("Environments|Are you sure you want to stop this environment?")))]),e._v(" "),e.environment.has_stop_action?e._e():n("div",{staticClass:"warning_message"},[n("p",{domProps:{innerHTML:e._s(e.noStopActionMessage)}}),e._v(" "),n("a",{attrs:{href:"https://docs.gitlab.com/ee/ci/environments.html#stopping-an-environment",target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.s__("Environments|Learn more about stopping environments")))])])])}),[],!1,null,null,null);t.a=c.exports},WYZc:function(e,t,n){"use strict";n("va8A"),n("9U97"),n("kO4A"),n("+kFb"),n("gyUR"),n("Z5ek"),n("+xU6"),n("zCcL"),n("zpLX"),n("BD5p"),n("MRnW"),n("GzNv"),n("Id6h");var o=n("NmEs"),r=n("71Sp");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a={methods:{onChangeTab:function(e){var t={scope:e,page:"1"};t=this.onChangeWithFilter(t),this.updateContent(t)},onChangePage:function(e){var t={page:Number(e).toString()};this.scope&&(t.scope=this.scope),t=this.onChangeWithFilter(t),this.updateContent(t)},onChangeWithFilter:function(e){return i(i({},e),Object(r.a)(this.requestData))},updateInternalState:function(e){var t=this;this.poll.stop();var n=Object.keys(e).map((function(n){var o=e[n];return t[n]=o,"".concat(n,"=").concat(encodeURIComponent(o))})).join("&");this.requestData=e,Object(o.t)(Object(o.f)("?".concat(n))),this.isLoading=!0}}}},cwLK:function(e,t,n){"use strict";n.r(t);n("va8A"),n("kO4A"),n("+kFb"),n("zCcL"),n("zpLX"),n("BD5p"),n("Id6h");var o=n("jB52"),r=n("2/vm"),a=n("aCCI"),i=n("WYZc"),s=n("Fpys"),l=n("py3j"),c={components:{StopEnvironmentModal:s.a,DeleteEnvironmentModal:l.a},mixins:[a.a,i.a],props:{endpoint:{type:String,required:!0},folderName:{type:String,required:!0},cssContainerClass:{type:String,required:!0},canReadEnvironment:{type:Boolean,required:!0},canaryDeploymentFeatureId:{type:String,required:!1,default:""},showCanaryDeploymentCallout:{type:Boolean,required:!1,default:!1},userCalloutsPath:{type:String,required:!1,default:""},lockPromotionSvgPath:{type:String,required:!1,default:""},helpCanaryDeploymentsPath:{type:String,required:!1,default:""}},methods:{successCallback:function(e){this.saveData(e)}}},p=n("tBpV"),u=Object(p.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.cssContainerClass},[n("stop-environment-modal",{attrs:{environment:e.environmentInStopModal}}),e._v(" "),n("delete-environment-modal",{attrs:{environment:e.environmentInDeleteModal}}),e._v(" "),n("h4",{staticClass:"js-folder-name environments-folder-name"},[e._v("\n    "+e._s(e.s__("Environments|Environments"))+" /\n    "),n("b",[e._v(e._s(e.folderName))])]),e._v(" "),n("div",{staticClass:"top-area"},[e.isLoading?e._e():n("tabs",{attrs:{tabs:e.tabs,scope:"environments"},on:{onChangeTab:e.onChangeTab}})],1),e._v(" "),n("container",{attrs:{"is-loading":e.isLoading,environments:e.state.environments,pagination:e.state.paginationInformation,"can-read-environment":e.canReadEnvironment,"canary-deployment-feature-id":e.canaryDeploymentFeatureId,"show-canary-deployment-callout":e.showCanaryDeploymentCallout,"user-callouts-path":e.userCalloutsPath,"lock-promotion-svg-path":e.lockPromotionSvgPath,"help-canary-deployments-path":e.helpCanaryDeploymentsPath},on:{onChangePage:e.onChangePage}})],1)}),[],!1,null,null,null).exports,m=n("NmEs"),d=n("0KyK");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.default.use(d.a);document.addEventListener("DOMContentLoaded",(function(){return new o.default({el:"#environments-folder-list-view",components:{environmentsFolderApp:u},mixins:[r.a],data:function(){var e=document.querySelector(this.$options.el).dataset;return{endpoint:e.environmentsDataEndpoint,folderName:e.environmentsDataFolderName,cssContainerClass:e.cssClass,canReadEnvironment:Object(m.H)(e.environmentsDataCanReadEnvironment)}},render:function(e){return e("environments-folder-app",{props:h({endpoint:this.endpoint,folderName:this.folderName,cssContainerClass:this.cssContainerClass,canReadEnvironment:this.canReadEnvironment},this.canaryCalloutProps)})}})}))}},[[114,1,0,15,23,32,53]]]);
//# sourceMappingURL=pages.projects.environments.folder.fe056e3e.chunk.js.map