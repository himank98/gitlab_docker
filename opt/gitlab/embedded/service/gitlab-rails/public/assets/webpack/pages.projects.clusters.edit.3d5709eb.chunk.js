(this.webpackJsonp=this.webpackJsonp||[]).push([[200],{"07e+":function(t,e,n){"use strict";n.r(e);var r=n("Pz+3");document.addEventListener("DOMContentLoaded",(function(){new r.a}))},103:function(t,e,n){n("HVBj"),n("gjpc"),n("p472"),t.exports=n("07e+")},CX32:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("va8A"),n("z4I3"),n("dj/k"),n("x/6R"),n("WQYg"),n("MRnW"),n("EfZm"),n("GzNv"),n("tbvx"),n("orcL");var r=n("t6Yz"),o=n.n(r),c=n("yQ8t");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=u(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),t=e.call(this),o.a.bind("g p",(function(){return Object(c.a)(".shortcuts-project")})),o.a.bind("g v",(function(){return Object(c.a)(".shortcuts-project-activity")})),o.a.bind("g r",(function(){return Object(c.a)(".shortcuts-project-releases")})),o.a.bind("g f",(function(){return Object(c.a)(".shortcuts-tree")})),o.a.bind("g c",(function(){return Object(c.a)(".shortcuts-commits")})),o.a.bind("g j",(function(){return Object(c.a)(".shortcuts-builds")})),o.a.bind("g n",(function(){return Object(c.a)(".shortcuts-network")})),o.a.bind("g d",(function(){return Object(c.a)(".shortcuts-repository-charts")})),o.a.bind("g i",(function(){return Object(c.a)(".shortcuts-issues")})),o.a.bind("g b",(function(){return Object(c.a)(".shortcuts-issue-boards")})),o.a.bind("g m",(function(){return Object(c.a)(".shortcuts-merge_requests")})),o.a.bind("g w",(function(){return Object(c.a)(".shortcuts-wiki")})),o.a.bind("g s",(function(){return Object(c.a)(".shortcuts-snippets")})),o.a.bind("g k",(function(){return Object(c.a)(".shortcuts-kubernetes")})),o.a.bind("g e",(function(){return Object(c.a)(".shortcuts-environments")})),o.a.bind("g l",(function(){return Object(c.a)(".shortcuts-metrics")})),o.a.bind("i",(function(){return Object(c.a)(".shortcuts-new-issue")})),t}return n}(n("v+Mp").a)},ZeWX:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));n("t3Gg"),n("+xeR");var r=n("3a3M"),o=n.n(r),c=n("06tH"),a=n.n(c),i=n("/lV4"),u=n("3twG");n("kO4A"),n("OZM5"),n("x/6R"),n("Z5ek"),n("yaFd"),n("8Qi2"),n("EWC9"),n("MRnW"),n("tbvx"),n("orcL");var s=function(t){return t.reduce((function(t,e){var n=e.name,r=e.value;return Object.assign(t,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,r))}),{})},f=n("2ibD"),l=n("XRO8"),d=n("k/Fq");function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=o()("ul.clone-options-dropdown"),n=o()("#project_clone"),r=o()(".js-git-clone-holder .js-clone-dropdown-label"),c=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),i=r.text().trim();i.length>0&&o()("a:contains('".concat(i,"')"),e).addClass("is-active"),o()("a",e).on("click",(function(t){t.preventDefault();var r=o()(t.currentTarget),a=r.attr("href"),i=r.data("cloneType");o()(".is-active",e).removeClass("is-active"),o()('a[data-clone-type="'.concat(i,'"]')).each((function(){var t=o()(this),e=t.find(".dropdown-menu-inner-title").text(),n=t.closest(".project-clone-holder").find(".js-clone-dropdown-label");t.toggleClass("is-active"),n.text(e)})),c?c.dataset.clipboardText=a:n.val(a),o()(".js-git-empty .js-clone").text(a)})),t.initRefSwitcher(),o()(".project-refs-select").on("change",(function(){return o()(this).parents("form").submit()})),o()(".hide-no-ssh-message").on("click",(function(t){return a.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),t.preventDefault()})),o()(".hide-no-password-message").on("click",(function(t){return a.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),t.preventDefault()})),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(t){var e=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(e);return a.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),t.preventDefault()})),t.projectSelectDropdown()}var e,n,r;return e=t,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),o()(".project-item-select").on("click",(function(e){return t.changeProject(o()(e.currentTarget).val())}))}},{key:"changeProject",value:function(t){return window.location=t}},{key:"initRefSwitcher",value:function(){var t=document.createElement("li"),e=document.createElement("a");return e.href="#",o()(".js-project-refs-dropdown").each((function(){var n,r,c,a=o()(this),d=a.data("selected"),p=a.data("fieldName"),b=Boolean(a.data("visit")),h=a.closest("form"),v=h.attr("action"),m=Object(u.n)((n=h[0],r=new FormData(n),c=Array.from(r.keys()).map((function(t){var e=r.getAll(t);return{name:t,value:1===(e=e.filter((function(t){return t}))).length?e[0]:e}})),s(c)),v);return a.glDropdown({data:function(t,e){f.a.get(a.data("refsUrl"),{params:{ref:a.data("ref"),search:t}}).then((function(t){var n=t.data;return e(n)})).catch((function(){return Object(l.a)(Object(i.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:a.data("inputFieldName"),fieldName:p,renderRow:function(n){var r,o,c,a=t.cloneNode(!1),i=e.cloneNode(!1);return n===d&&(i.className="is-active"),i.textContent=n,i.dataset.ref=n,n.length>0&&b&&(i.href=Object(u.n)((c=n,(o=p)in(r={})?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,r),m)),a.appendChild(i),a},id:function(t,e){return e.attr("data-ref")},toggleLabel:function(t,e){return e.text().trim()},clicked:function(t){var e=t.e;b||e.preventDefault()}})}))}}],(n=null)&&p(e.prototype,n),r&&p(e,r),t}()},gjpc:function(t,e,n){"use strict";n.r(e);var r=n("ZeWX"),o=n("CX32");document.addEventListener("DOMContentLoaded",(function(){new r.a,new o.a}))},p472:function(t,e,n){"use strict";n.r(e);var r=n("vtCS");document.addEventListener("DOMContentLoaded",(function(){Object(r.a)(document,gon)}))}},[[103,1,0,3,4,10,17]]]);
//# sourceMappingURL=pages.projects.clusters.edit.3d5709eb.chunk.js.map