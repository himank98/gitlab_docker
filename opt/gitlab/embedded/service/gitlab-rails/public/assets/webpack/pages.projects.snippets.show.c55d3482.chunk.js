(this.webpackJsonp=this.webpackJsonp||[]).push([[281],{186:function(t,e,n){n("HVBj"),n("gjpc"),t.exports=n("qg3q")},CX32:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n("va8A"),n("z4I3"),n("dj/k"),n("x/6R"),n("WQYg"),n("MRnW"),n("EfZm"),n("GzNv"),n("tbvx"),n("orcL");var r=n("t6Yz"),i=n.n(r),o=n("yQ8t");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,t);var e=c(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),t=e.call(this),i.a.bind("g p",(function(){return Object(o.a)(".shortcuts-project")})),i.a.bind("g v",(function(){return Object(o.a)(".shortcuts-project-activity")})),i.a.bind("g r",(function(){return Object(o.a)(".shortcuts-project-releases")})),i.a.bind("g f",(function(){return Object(o.a)(".shortcuts-tree")})),i.a.bind("g c",(function(){return Object(o.a)(".shortcuts-commits")})),i.a.bind("g j",(function(){return Object(o.a)(".shortcuts-builds")})),i.a.bind("g n",(function(){return Object(o.a)(".shortcuts-network")})),i.a.bind("g d",(function(){return Object(o.a)(".shortcuts-repository-charts")})),i.a.bind("g i",(function(){return Object(o.a)(".shortcuts-issues")})),i.a.bind("g b",(function(){return Object(o.a)(".shortcuts-issue-boards")})),i.a.bind("g m",(function(){return Object(o.a)(".shortcuts-merge_requests")})),i.a.bind("g w",(function(){return Object(o.a)(".shortcuts-wiki")})),i.a.bind("g s",(function(){return Object(o.a)(".shortcuts-snippets")})),i.a.bind("g k",(function(){return Object(o.a)(".shortcuts-kubernetes")})),i.a.bind("g e",(function(){return Object(o.a)(".shortcuts-environments")})),i.a.bind("g l",(function(){return Object(o.a)(".shortcuts-metrics")})),i.a.bind("i",(function(){return Object(o.a)(".shortcuts-new-issue")})),t}return n}(n("v+Mp").a)},L9rd:function(t,e,n){"use strict";var r=n("nsmN"),i=n("MA/v"),o=n("Ylta"),a=n("W0S0"),s=(n("9U97"),n("IdsT"),n("TZoF"),n("/lV4")),c=n("NmEs");function u(t,e){t.classList.add("is-active"),e.classList.remove("is-active")}var l=n("jcRP");document.addEventListener("DOMContentLoaded",(function(){gon.features.snippetsVue?(Object(l.b)(),Object(a.a)()):(new r.a,new i.a,Object(a.a)(),new o.a,function(){var t=document.querySelector(".js-share-btn");if(t){var e=document.querySelector(".js-embed-btn"),n=document.querySelector(".js-snippet-url-area"),r=document.querySelector(".js-embed-action"),i=n.getAttribute("data-url");n.addEventListener("click",(function(){return n.select()})),t.addEventListener("click",(function(){u(t,e),n.value=i,r.innerText=Object(s.a)("Share")})),e.addEventListener("click",(function(){var o=Object(c.K)(i),a="".concat(o.origin+Object(c.L)(i)),l=o.search,h='<script src="'.concat(a,".js").concat(l,'"><\/script>');u(e,t),n.value=h,r.innerText=Object(s.a)("Embed")}))}}())}))},W0S0:function(t,e,n){"use strict";var r=n("uqFy");e.a=function(){var t=document.querySelector(".js-notes-data"),e=JSON.parse(t.innerHTML),n=e.notesUrl,i=e.notesIds,o=e.now,a=e.diffView,s=e.enableGFM;r.a.initialize(n,i,o,a,s)}},ZeWX:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));n("t3Gg"),n("+xeR");var r=n("3a3M"),i=n.n(r),o=n("06tH"),a=n.n(o),s=n("/lV4"),c=n("3twG");n("kO4A"),n("OZM5"),n("x/6R"),n("Z5ek"),n("yaFd"),n("8Qi2"),n("EWC9"),n("MRnW"),n("tbvx"),n("orcL");var u=function(t){return t.reduce((function(t,e){var n=e.name,r=e.value;return Object.assign(t,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,r))}),{})},l=n("2ibD"),h=n("XRO8"),d=n("k/Fq");function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=i()("ul.clone-options-dropdown"),n=i()("#project_clone"),r=i()(".js-git-clone-holder .js-clone-dropdown-label"),o=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),s=r.text().trim();s.length>0&&i()("a:contains('".concat(s,"')"),e).addClass("is-active"),i()("a",e).on("click",(function(t){t.preventDefault();var r=i()(t.currentTarget),a=r.attr("href"),s=r.data("cloneType");i()(".is-active",e).removeClass("is-active"),i()('a[data-clone-type="'.concat(s,'"]')).each((function(){var t=i()(this),e=t.find(".dropdown-menu-inner-title").text(),n=t.closest(".project-clone-holder").find(".js-clone-dropdown-label");t.toggleClass("is-active"),n.text(e)})),o?o.dataset.clipboardText=a:n.val(a),i()(".js-git-empty .js-clone").text(a)})),t.initRefSwitcher(),i()(".project-refs-select").on("change",(function(){return i()(this).parents("form").submit()})),i()(".hide-no-ssh-message").on("click",(function(t){return a.a.set("hide_no_ssh_message","false"),i()(this).parents(".no-ssh-key-message").remove(),t.preventDefault()})),i()(".hide-no-password-message").on("click",(function(t){return a.a.set("hide_no_password_message","false"),i()(this).parents(".no-password-message").remove(),t.preventDefault()})),i()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(t){var e=i()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(e);return a.a.set(n,"false"),i()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),t.preventDefault()})),t.projectSelectDropdown()}var e,n,r;return e=t,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),i()(".project-item-select").on("click",(function(e){return t.changeProject(i()(e.currentTarget).val())}))}},{key:"changeProject",value:function(t){return window.location=t}},{key:"initRefSwitcher",value:function(){var t=document.createElement("li"),e=document.createElement("a");return e.href="#",i()(".js-project-refs-dropdown").each((function(){var n,r,o,a=i()(this),d=a.data("selected"),f=a.data("fieldName"),p=Boolean(a.data("visit")),g=a.closest("form"),b=g.attr("action"),v=Object(c.n)((n=g[0],r=new FormData(n),o=Array.from(r.keys()).map((function(t){var e=r.getAll(t);return{name:t,value:1===(e=e.filter((function(t){return t}))).length?e[0]:e}})),u(o)),b);return a.glDropdown({data:function(t,e){l.a.get(a.data("refsUrl"),{params:{ref:a.data("ref"),search:t}}).then((function(t){var n=t.data;return e(n)})).catch((function(){return Object(h.a)(Object(s.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:a.data("inputFieldName"),fieldName:f,renderRow:function(n){var r,i,o,a=t.cloneNode(!1),s=e.cloneNode(!1);return n===d&&(s.className="is-active"),s.textContent=n,s.dataset.ref=n,n.length>0&&p&&(s.href=Object(c.n)((o=n,(i=f)in(r={})?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r),v)),a.appendChild(s),a},id:function(t,e){return e.attr("data-ref")},toggleLabel:function(t,e){return e.text().trim()},clicked:function(t){var e=t.e;p||e.preventDefault()}})}))}}],(n=null)&&f(e.prototype,n),r&&f(e,r),t}()},gjpc:function(t,e,n){"use strict";n.r(e);var r=n("ZeWX"),i=n("CX32");document.addEventListener("DOMContentLoaded",(function(){new r.a,new i.a}))},"k/Fq":function(t,e,n){"use strict";n("9U97"),n("8Qi2"),n("MRnW"),n("jaBk");var r=n("3a3M"),i=n.n(r),o=n("qPgm"),a=(n("gyUR"),n("4ql4"),n("IdsT"),n("pBsb"),n("n7CP"));function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.projectSelectInput=i()(e),this.newItemBtn=i()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var e,r,o;return e=t,(r=[{key:"bindEvents",value:function(){var t=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(e){return t.openDropdown(e)})),this.newItemBtn.on("click",(function(e){t.getProjectFromLocalStorage()||(e.preventDefault(),t.openDropdown(e))})),this.projectSelectInput.on("change",(function(){return t.selectProject()}))}},{key:"initLocalStorage",value:function(){a.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(t){n.e(311).then(n.t.bind(null,"p9g0",7)).then((function(){i()(t.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var t=JSON.parse(this.projectSelectInput.val()),e={url:"".concat(t.url,"/").concat(this.projectSelectInput.data("relativePath")),name:t.name};this.setNewItemBtnAttributes(e),this.setProjectInLocalStorage(e)}},{key:"setBtnTextFromLocalStorage",value:function(){var t=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(t)}},{key:"setNewItemBtnAttributes",value:function(t){t?(this.newItemBtn.attr("href",t.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(t.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var t=localStorage.getItem(this.localStorageKey);return JSON.parse(t)}},{key:"setProjectInLocalStorage",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)}},{key:"deriveTextVariants",value:function(){var t=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:t,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&s(e.prototype,r),o&&s(e,o),t}(),u=n("/lV4"),l=function(){i()(".ajax-project-select").each((function(t,e){var n,r=this,a=i()(e).data("simpleFilter")||!1,s=i()(e).data("select2");return this.groupId=i()(e).data("groupId"),this.userId=i()(e).data("userId"),this.includeGroups=i()(e).data("includeGroups"),this.allProjects=i()(e).data("allProjects")||!1,this.orderBy=i()(e).data("orderBy")||"id",this.withIssuesEnabled=i()(e).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(e).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(e).data("withShared")||i()(e).data("withShared"),this.includeProjectsInSubgroups=i()(e).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(e).data("allowClear")||!1,n=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(u.d)("ProjectSelect| or group")),i()(e).select2({placeholder:n,minimumInputLength:0,query:function(t){var e,n=function(e){var n={results:e};return t.callback(n)};return e=r.includeGroups?function(e){return o.a.groups(t.term,{},(function(t){var r=t.concat(e);return n(r)}))}:n,r.groupId?o.a.groupProjects(r.groupId,t.term,{search_namespaces:!0,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},e):r.userId?o.a.userProjects(r.userId,t.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},e):o.a.projects(t.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},e)},id:function(t){return a?t.id:JSON.stringify({name:t.name,url:t.web_url})},text:function(t){return t.name_with_namespace||t.name},initSelection:function(t,e){return o.a.project(t.val()).then((function(t){var n=t.data;return e(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),s||a?e:new c(e)}))};e.a=function(){return n.e(311).then(n.t.bind(null,"p9g0",7)).then(l).catch((function(){}))}},nsmN:function(t,e,n){"use strict";n("9U97"),n("IdsT"),n("l9AF");var r=n("3a3M"),i=n.n(r),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.highlightLineClass=t.highlightLineClass||"hll",t.fileHolderSelector=t.fileHolderSelector||".file-holder",t.scrollFileHolder=t.scrollFileHolder||!1,t.hash=t.hash||window.location.hash,this.options=t,this._hash=t.hash,this.highlightLineClass=t.highlightLineClass,this.setHash=this.setHash.bind(this),this.highlightLine=this.highlightLine.bind(this),this.clickHandler=this.clickHandler.bind(this),this.highlightHash=this.highlightHash.bind(this),this.bindEvents(),this.highlightHash()};o.prototype.bindEvents=function(){var t=this,e=i()(this.options.fileHolderSelector);e.on("click","a[data-line-number]",this.clickHandler),e.on("highlight:line",this.highlightHash),window.addEventListener("hashchange",(function(e){return t.highlightHash(e.target.location.hash)}))},o.prototype.highlightHash=function(t){var e;if(t&&"string"==typeof t&&(this._hash=t),this.clearHighlight(),""!==this._hash&&(e=this.hashToRange(this._hash))[0]){this.highlightRange(e);var n="#L".concat(e[0]),r={offset:-150};this.options.scrollFileHolder?i()(this.options.fileHolderSelector).scrollTo(n,r):i.a.scrollTo(n,r)}},o.prototype.clickHandler=function(t){var e;t.preventDefault(),this.clearHighlight();var n=i()(t.target).closest("a").data("lineNumber"),r=this.hashToRange(this._hash);return r[0]&&t.shiftKey?t.shiftKey?(e=n<r[0]?[n,r[0]]:[r[0],n],this.setHash(e[0],e[1]),this.highlightRange(e)):void 0:(this.setHash(n),this.highlightLine(n))},o.prototype.clearHighlight=function(){return i()(".".concat(this.highlightLineClass)).removeClass(this.highlightLineClass)},o.prototype.hashToRange=function(t){var e=t.match(/^#?L(\d+)(?:-(\d+))?$/);return e&&e.length?[parseInt(e[1],10),e[2]?parseInt(e[2],10):null]:[null,null]},o.prototype.highlightLine=function(t){return i()("#LC".concat(t)).addClass(this.highlightLineClass)},o.prototype.highlightRange=function(t){if(t[1]){for(var e=[],n=t[0]<=t[1]?t:t.reverse(),r=t[0];r<=n[1];r+=1)e.push(this.highlightLine(r));return e}return this.highlightLine(t[0])},o.prototype.setHash=function(t,e){var n;return n=e?"#L".concat(t,"-").concat(e):"#L".concat(t),this._hash=n,this.__setLocationHash__(n)},o.prototype.__setLocationHash__=function(t){return window.history.pushState({url:t},document.title,t)},e.a=o},o4PY:function(t,e,n){var r=n("rhmX"),i=0;t.exports=function(t){var e=++i;return r(t)+e}},qg3q:function(t,e,n){"use strict";n.r(e);n("L9rd")}},[[186,1,0,25,2,5,9,13,16,22,34,35]]]);
//# sourceMappingURL=pages.projects.snippets.show.c55d3482.chunk.js.map