(this.webpackJsonp=this.webpackJsonp||[]).push([[273],{178:function(e,t,n){n("HVBj"),n("gjpc"),e.exports=n("dV6o")},CX32:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("va8A"),n("z4I3"),n("dj/k"),n("x/6R"),n("WQYg"),n("MRnW"),n("EfZm"),n("GzNv"),n("tbvx"),n("orcL");var r=n("t6Yz"),o=n.n(r),a=n("yQ8t");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=s(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e=t.call(this),o.a.bind("g p",(function(){return Object(a.a)(".shortcuts-project")})),o.a.bind("g v",(function(){return Object(a.a)(".shortcuts-project-activity")})),o.a.bind("g r",(function(){return Object(a.a)(".shortcuts-project-releases")})),o.a.bind("g f",(function(){return Object(a.a)(".shortcuts-tree")})),o.a.bind("g c",(function(){return Object(a.a)(".shortcuts-commits")})),o.a.bind("g j",(function(){return Object(a.a)(".shortcuts-builds")})),o.a.bind("g n",(function(){return Object(a.a)(".shortcuts-network")})),o.a.bind("g d",(function(){return Object(a.a)(".shortcuts-repository-charts")})),o.a.bind("g i",(function(){return Object(a.a)(".shortcuts-issues")})),o.a.bind("g b",(function(){return Object(a.a)(".shortcuts-issue-boards")})),o.a.bind("g m",(function(){return Object(a.a)(".shortcuts-merge_requests")})),o.a.bind("g w",(function(){return Object(a.a)(".shortcuts-wiki")})),o.a.bind("g s",(function(){return Object(a.a)(".shortcuts-snippets")})),o.a.bind("g k",(function(){return Object(a.a)(".shortcuts-kubernetes")})),o.a.bind("g e",(function(){return Object(a.a)(".shortcuts-environments")})),o.a.bind("g l",(function(){return Object(a.a)(".shortcuts-metrics")})),o.a.bind("i",(function(){return Object(a.a)(".shortcuts-new-issue")})),e}return n}(n("v+Mp").a)},ZeWX:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n("t3Gg"),n("+xeR");var r=n("3a3M"),o=n.n(r),a=n("06tH"),c=n.n(a),i=n("/lV4"),s=n("3twG");n("kO4A"),n("OZM5"),n("x/6R"),n("Z5ek"),n("yaFd"),n("8Qi2"),n("EWC9"),n("MRnW"),n("tbvx"),n("orcL");var u=function(e){return e.reduce((function(e,t){var n=t.name,r=t.value;return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}),{})},l=n("2ibD"),d=n("XRO8"),f=n("k/Fq");function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=o()("ul.clone-options-dropdown"),n=o()("#project_clone"),r=o()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),i=r.text().trim();i.length>0&&o()("a:contains('".concat(i,"')"),t).addClass("is-active"),o()("a",t).on("click",(function(e){e.preventDefault();var r=o()(e.currentTarget),c=r.attr("href"),i=r.data("cloneType");o()(".is-active",t).removeClass("is-active"),o()('a[data-clone-type="'.concat(i,'"]')).each((function(){var e=o()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),a?a.dataset.clipboardText=c:n.val(c),o()(".js-git-empty .js-clone").text(c)})),e.initRefSwitcher(),o()(".project-refs-select").on("change",(function(){return o()(this).parents("form").submit()})),o()(".hide-no-ssh-message").on("click",(function(e){return c.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),o()(".hide-no-password-message").on("click",(function(e){return c.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),e.preventDefault()})),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){var t=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return c.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(f.a)(),o()(".project-item-select").on("click",(function(t){return e.changeProject(o()(t.currentTarget).val())}))}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",o()(".js-project-refs-dropdown").each((function(){var n,r,a,c=o()(this),f=c.data("selected"),p=c.data("fieldName"),h=Boolean(c.data("visit")),b=c.closest("form"),g=b.attr("action"),m=Object(s.n)((n=b[0],r=new FormData(n),a=Array.from(r.keys()).map((function(e){var t=r.getAll(e);return{name:e,value:1===(t=t.filter((function(e){return e}))).length?t[0]:t}})),u(a)),g);return c.glDropdown({data:function(e,t){l.a.get(c.data("refsUrl"),{params:{ref:c.data("ref"),search:e}}).then((function(e){var n=e.data;return t(n)})).catch((function(){return Object(d.a)(Object(i.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:c.data("inputFieldName"),fieldName:p,renderRow:function(n){var r,o,a,c=e.cloneNode(!1),i=t.cloneNode(!1);return n===f&&(i.className="is-active"),i.textContent=n,i.dataset.ref=n,n.length>0&&h&&(i.href=Object(s.n)((a=n,(o=p)in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r),m)),c.appendChild(i),c},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){var t=e.e;h||t.preventDefault()}})}))}}],(n=null)&&p(t.prototype,n),r&&p(t,r),e}()},dV6o:function(e,t,n){"use strict";n.r(t);var r=n("z7to");document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-webhooks-moved-alert");r.a.factory(e)}))},gjpc:function(e,t,n){"use strict";n.r(t);var r=n("ZeWX"),o=n("CX32");document.addEventListener("DOMContentLoaded",(function(){new r.a,new o.a}))},"k/Fq":function(e,t,n){"use strict";n("9U97"),n("8Qi2"),n("MRnW"),n("jaBk");var r=n("3a3M"),o=n.n(r),a=n("qPgm"),c=(n("gyUR"),n("4ql4"),n("IdsT"),n("pBsb"),n("n7CP"));function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=o()(t),this.newItemBtn=o()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,r,a;return t=e,(r=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}},{key:"initLocalStorage",value:function(){c.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){n.e(311).then(n.t.bind(null,"p9g0",7)).then((function(){o()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&i(t.prototype,r),a&&i(t,a),e}(),u=n("/lV4"),l=function(){o()(".ajax-project-select").each((function(e,t){var n,r=this,c=o()(t).data("simpleFilter")||!1,i=o()(t).data("select2");return this.groupId=o()(t).data("groupId"),this.userId=o()(t).data("userId"),this.includeGroups=o()(t).data("includeGroups"),this.allProjects=o()(t).data("allProjects")||!1,this.orderBy=o()(t).data("orderBy")||"id",this.withIssuesEnabled=o()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=o()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===o()(t).data("withShared")||o()(t).data("withShared"),this.includeProjectsInSubgroups=o()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=o()(t).data("allowClear")||!1,n=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(u.d)("ProjectSelect| or group")),o()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){var t,n=function(t){var n={results:t};return e.callback(n)};return t=r.includeGroups?function(t){return a.a.groups(e.term,{},(function(e){var r=e.concat(t);return n(r)}))}:n,r.groupId?a.a.groupProjects(r.groupId,e.term,{search_namespaces:!0,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):r.userId?a.a.userProjects(r.userId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):a.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},t)},id:function(e){return c?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return a.a.project(e.val()).then((function(e){var n=e.data;return t(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),i||c?t:new s(t)}))};t.a=function(){return n.e(311).then(n.t.bind(null,"p9g0",7)).then(l).catch((function(){}))}}},[[178,1,0]]]);
//# sourceMappingURL=pages.projects.settings.integrations.show.47247120.chunk.js.map