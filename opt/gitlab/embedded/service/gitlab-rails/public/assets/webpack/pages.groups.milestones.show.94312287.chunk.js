(this.webpackJsonp=this.webpackJsonp||[]).push([[151],{"2yuJ":function(e,t,n){"use strict";n("+kFb"),n("Id6h");var i=n("jB52"),s=n("0KyK"),o=(n("+xU6"),n("2ibD")),a=n("XRO8"),l=n("3V9n"),r=n("/lV4"),u=n("3twG"),d=n("elH8"),c={components:{DeprecatedModal:l.a},props:{issueCount:{type:Number,required:!0},mergeRequestCount:{type:Number,required:!0},milestoneId:{type:Number,required:!0},milestoneTitle:{type:String,required:!0},milestoneUrl:{type:String,required:!0}},computed:{text:function(){var e=Object(r.e)("<strong>%{milestoneTitle}</strong>",{milestoneTitle:this.milestoneTitle});return 0===this.issueCount&&0===this.mergeRequestCount?Object(r.e)(Object(r.d)("Milestones|\nYou’re about to permanently delete the milestone %{milestoneTitle}.\nThis milestone is not currently used in any issues or merge requests."),{milestoneTitle:e},!1):Object(r.e)(Object(r.d)("Milestones|\nYou’re about to permanently delete the milestone %{milestoneTitle} and remove it from %{issuesWithCount} and %{mergeRequestsWithCount}.\nOnce deleted, it cannot be undone or recovered."),{milestoneTitle:e,issuesWithCount:Object(r.c)("%d issue","%d issues",this.issueCount),mergeRequestsWithCount:Object(r.c)("%d merge request","%d merge requests",this.mergeRequestCount)},!1)},title:function(){return Object(r.e)(Object(r.d)("Milestones|Delete milestone %{milestoneTitle}?"),{milestoneTitle:this.milestoneTitle})}},methods:{onSubmit:function(){var e=this;return d.a.$emit("deleteMilestoneModal.requestStarted",this.milestoneUrl),o.a.delete(this.milestoneUrl).then((function(t){d.a.$emit("deleteMilestoneModal.requestFinished",{milestoneUrl:e.milestoneUrl,successful:!0}),Object(u.q)(t.request.responseURL)})).catch((function(t){throw d.a.$emit("deleteMilestoneModal.requestFinished",{milestoneUrl:e.milestoneUrl,successful:!1}),t.response&&404===t.response.status?Object(a.a)(Object(r.e)(Object(r.d)("Milestones|Milestone %{milestoneTitle} was not found"),{milestoneTitle:e.milestoneTitle})):Object(a.a)(Object(r.e)(Object(r.d)("Milestones|Failed to delete milestone %{milestoneTitle}"),{milestoneTitle:e.milestoneTitle})),t}))}}},m=n("tBpV"),b=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("deprecated-modal",{attrs:{id:"delete-milestone-modal",title:e.title,text:e.text,"primary-button-label":e.s__("Milestones|Delete milestone"),kind:"danger"},on:{submit:e.onSubmit},scopedSlots:e._u([{key:"body",fn:function(t){return[n("p",{domProps:{innerHTML:e._s(t.text)}})]}}])})}),[],!1,null,null,null).exports;t.a=function(){i.default.use(s.a);var e=function(e){var t=e.milestoneUrl,n=e.successful,i=document.querySelector('.js-delete-milestone-button[data-milestone-url="'.concat(t,'"]'));n||i.removeAttribute("disabled"),i.querySelector(".js-loading-icon").classList.add("hidden")},t=function(t){var n=document.querySelector('.js-delete-milestone-button[data-milestone-url="'.concat(t,'"]'));n.setAttribute("disabled",""),n.querySelector(".js-loading-icon").classList.remove("hidden"),d.a.$once("deleteMilestoneModal.requestFinished",e)},n=function(e){var n=e.currentTarget,i={milestoneId:parseInt(n.dataset.milestoneId,10),milestoneTitle:n.dataset.milestoneTitle,milestoneUrl:n.dataset.milestoneUrl,issueCount:parseInt(n.dataset.milestoneIssueCount,10),mergeRequestCount:parseInt(n.dataset.milestoneMergeRequestCount,10)};d.a.$once("deleteMilestoneModal.requestStarted",t),d.a.$emit("deleteMilestoneModal.props",i)},o=document.querySelectorAll(".js-delete-milestone-button");return o.forEach((function(e){e.addEventListener("click",n)})),d.a.$once("deleteMilestoneModal.mounted",(function(){o.forEach((function(e){e.removeAttribute("disabled")}))})),new i.default({el:"#delete-milestone-modal",components:{deleteMilestoneModal:b},data:function(){return{modalProps:{milestoneId:-1,milestoneTitle:"",milestoneUrl:"",issueCount:-1,mergeRequestCount:-1}}},mounted:function(){d.a.$on("deleteMilestoneModal.props",this.setModalProps),d.a.$emit("deleteMilestoneModal.mounted")},beforeDestroy:function(){d.a.$off("deleteMilestoneModal.props",this.setModalProps)},methods:{setModalProps:function(e){this.modalProps=e}},render:function(e){return e(b,{props:this.modalProps})}})}},"3V9n":function(e,t,n){"use strict";var i=n("/lV4");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={name:"DeprecatedModal",props:{id:{type:String,required:!1},title:{type:String,required:!1},text:{type:String,required:!1},hideFooter:{type:Boolean,required:!1,default:!1},kind:{type:String,required:!1,default:"primary"},modalDialogClass:{type:String,required:!1,default:""},closeKind:{type:String,required:!1,default:"default"},closeButtonLabel:{type:String,required:!1,default:Object(i.a)("Cancel")},primaryButtonLabel:{type:String,required:!1,default:""},secondaryButtonLabel:{type:String,required:!1,default:""},submitDisabled:{type:Boolean,required:!1,default:!1}},computed:{btnKindClass:function(){return s({},"btn-".concat(this.kind),!0)},btnCancelKindClass:function(){return s({},"btn-".concat(this.closeKind),!0)}},methods:{emitCancel:function(e){this.$emit("cancel",e)},emitSubmit:function(e){this.$emit("submit",e)}}},a=n("tBpV"),l=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-open"},[n("div",{staticClass:"modal",class:e.id?"":"d-block",attrs:{id:e.id,role:"dialog",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog",class:e.modalDialogClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("h4",{staticClass:"modal-title float-left"},[e._v(e._s(e.title))]),e._v(" "),n("button",{staticClass:"close float-right",attrs:{type:"button","data-dismiss":"modal","aria-label":e.__("Close")},on:{click:function(t){return e.emitCancel(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("body",[n("p",[e._v(e._s(e.text))])],{text:e.text})],2),e._v(" "),e.hideFooter?e._e():n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn",class:e.btnCancelKindClass,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.emitCancel(t)}}},[e._v("\n            "+e._s(e.closeButtonLabel)+"\n          ")]),e._v(" "),e.secondaryButtonLabel?e._t("secondary-button",[e.secondaryButtonLabel?n("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n              "+e._s(e.secondaryButtonLabel)+"\n            ")]):e._e()]):e._e(),e._v(" "),e.primaryButtonLabel?n("button",{staticClass:"btn js-primary-button",class:e.btnKindClass,attrs:{disabled:e.submitDisabled,type:"button","data-dismiss":"modal","data-qa-selector":"save_changes_button"},on:{click:function(t){return e.emitSubmit(t)}}},[e._v("\n            "+e._s(e.primaryButtonLabel)+"\n          ")]):e._e()],2)])])]),e._v(" "),e.id?e._e():n("div",{staticClass:"modal-backdrop fade show"})])}),[],!1,null,null,null);t.a=l.exports},56:function(e,t,n){n("HVBj"),e.exports=n("GVoa")},E21w:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("jB52"),s=n("tyhI"),o=n("NmEs");var a=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=document.getElementById("issuable-time-tracker");if(t){var n=t.dataset,a=n.timeEstimate,l=n.timeSpent,r=n.humanTimeEstimate,u=n.humanTimeSpent,d=n.limitToHours;new i.default({el:t,components:{timeTracker:s.a},render:function(e){return e("timeTracker",{props:{timeEstimate:parseInt(a,10),timeSpent:parseInt(l,10),humanTimeEstimate:r,humanTimeSpent:u,limitToHours:Object(o.H)(d)}})}})}}},GVoa:function(e,t,n){"use strict";n.r(t);var i=n("qynk"),s=n("2yuJ"),o=n("i6jo");document.addEventListener("DOMContentLoaded",(function(){Object(i.a)(),Object(s.a)(),o.a.initDeprecationMessage()}))},elH8:function(e,t,n){"use strict";var i=n("7xOh");t.a=Object(i.a)()},i6jo:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("3a3M"),s=n.n(i),o=n("2ibD"),a=n("XRO8"),l=n("qcwA"),r=n("/lV4");function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bindTabsSwitching(),this.loadTab(s()(".js-milestone-tabs .active a")),this.loadInitialTab()}var t,n,i;return t=e,i=[{key:"initDeprecationMessage",value:function(){var e=document.querySelector(".js-milestone-deprecation-message");if(e){var t=e.querySelector(".js-milestone-deprecation-message-template").innerHTML,n=s()(".js-popover-link",e),i=l.c.bind(n,!1);n.popover({content:t,html:!0,placement:"bottom"}).on("mouseenter",l.b).on("mouseleave",Object(l.a)()).on("show.bs.popover",(function(){window.addEventListener("scroll",i,{once:!0})}))}}}],(n=[{key:"bindTabsSwitching",value:function(){var e=this;return s()('a[data-toggle="tab"]').on("show.bs.tab",(function(t){var n=s()(t.target);window.location.hash=n.attr("href"),e.loadTab(n)}))}},{key:"loadInitialTab",value:function(){var e=s()('.js-milestone-tabs a[href="'.concat(window.location.hash,'"]'));e.length&&e.tab("show")}},{key:"loadTab",value:function(e){var t=e.data("endpoint"),n=e.attr("href");t&&!e.hasClass("is-loaded")&&o.a.get(t).then((function(t){var i=t.data;s()(n).html(i.html),e.addClass("is-loaded")})).catch((function(){return Object(a.a)(Object(r.a)("Error loading milestone tab"))}))}}])&&u(t.prototype,n),i&&u(t,i),e}()},qynk:function(e,t,n){"use strict";var i=n("i6jo"),s=n("i3lA"),o=n("E21w");t.a=function(){new i.a,new s.a,new o.a}}},[[56,1,0,19]]]);
//# sourceMappingURL=pages.groups.milestones.show.94312287.chunk.js.map