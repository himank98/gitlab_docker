(this.webpackJsonp=this.webpackJsonp||[]).push([[150],{"3nve":function(e,t,a){"use strict";var i=a("3a3M"),n=a.n(i),s=a("Ylta"),d=a("bplN"),o=a("FVJN");t.a=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];new s.a,new d.a,new o.a(n()(".milestone-form"),{emojis:!0,members:e,issues:e,mergeRequests:e,epics:e,milestones:e,labels:e,snippets:e})}},55:function(e,t,a){a("HVBj"),e.exports=a("iRx8")},bplN:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a("9U97"),a("t3Gg"),a("Z5ek"),a("MRnW"),a("IdsT"),a("GzNv"),a("pBsb");var i=a("3a3M"),n=a.n(i),s=a("+XPY"),d=a.n(s),o=a("a+C/"),l=a.n(o),r=a("/lV4"),u=a("2ibD"),c=a("bOix"),h=a("KQYO");function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t,a){return t&&f(e.prototype,t),a&&f(e,a),e}var b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.$dropdown,i=t.$loading;p(this,e);var s=a.closest(".dropdown"),d=a.closest(".block");this.$loading=i,this.$dropdown=a,this.$dropdownParent=s,this.$datePicker=s.find(".js-due-date-calendar"),this.$block=d,this.$sidebarCollapsedValue=d.find(".sidebar-collapsed-icon"),this.$selectbox=a.closest(".selectbox"),this.$value=d.find(".value"),this.$valueContent=d.find(".value-content"),this.$sidebarValue=n()(".js-due-date-sidebar-value",d),this.fieldName=a.data("fieldName"),this.abilityName=a.data("abilityName"),this.issueUpdateURL=a.data("issueUpdate"),this.rawSelectedDate=null,this.displayedDate=null,this.datePayload=null,this.initGlDropdown(),this.initRemoveDueDate(),this.initDatePicker()}return v(e,[{key:"initGlDropdown",value:function(){var e=this;this.$dropdown.glDropdown({opened:function(){e.$datePicker.data("pikaday").show()},hidden:function(){e.$selectbox.hide(),e.$value.css("display","")},shouldPropagate:!1})}},{key:"initDatePicker",value:function(){var e=this,t=n()("input[name='".concat(this.fieldName,"']")),a=new d.a({field:t.get(0),theme:"gitlab-theme",format:"yyyy-mm-dd",parse:function(e){return Object(c.o)(e)},toString:function(e){return Object(c.q)(e)},onSelect:function(i){t.val(a.toString(i)),e.$dropdown.hasClass("js-issue-boards-due-date")?(h.c.detail.issue.dueDate=t.val(),e.updateIssueBoardIssue()):e.saveDueDate(!0)},firstDay:gon.first_day_of_week});a.setDate(Object(c.o)(t.val())),this.$datePicker.append(a.el),this.$datePicker.data("pikaday",a)}},{key:"initRemoveDueDate",value:function(){var e=this;this.$block.on("click",".js-remove-due-date",(function(t){var a=e.$datePicker.data("pikaday");t.preventDefault(),a.setDate(null),e.$dropdown.hasClass("js-issue-boards-due-date")?(h.c.detail.issue.dueDate="",e.updateIssueBoardIssue()):(n()("input[name='".concat(e.fieldName,"']")).val(""),e.saveDueDate(!1))}))}},{key:"saveDueDate",value:function(e){this.parseSelectedDate(),this.prepSelectedDate(),this.submitSelectedDate(e)}},{key:"parseSelectedDate",value:function(){if(this.rawSelectedDate=n()("input[name='".concat(this.fieldName,"']")).val(),this.rawSelectedDate.length){var e=this.rawSelectedDate.split("-").map((function(e){return parseInt(e,10)})),t=new Date(e[0],e[1]-1,e[2]);this.displayedDate=l()(t,"mmm d, yyyy")}else this.displayedDate=Object(r.a)("None")}},{key:"prepSelectedDate",value:function(){var e={};e[this.abilityName]={},e[this.abilityName].due_date=this.rawSelectedDate,this.datePayload=e}},{key:"updateIssueBoardIssue",value:function(){var e=this;this.$loading.fadeIn(),this.$dropdown.trigger("loading.gl.dropdown"),this.$selectbox.hide(),this.$value.css("display","");var t=function(){e.$loading.fadeOut()};h.c.detail.issue.update(this.$dropdown.attr("data-issue-update")).then(t).catch(t)}},{key:"submitSelectedDate",value:function(e){var t=this,a=this.datePayload[this.abilityName].due_date,i=this.displayedDate!==Object(r.a)("None"),s=i?"bold":"no-value";return this.$loading.removeClass("hidden").fadeIn(),e&&(this.$dropdown.trigger("loading.gl.dropdown"),this.$selectbox.hide()),this.$value.css("display",""),this.$valueContent.html("<span class='".concat(s,"'>").concat(this.displayedDate,"</span>")),this.$sidebarValue.html(this.displayedDate),n()(".js-remove-due-date-holder").toggleClass("hidden",a.length),u.a.put(this.issueUpdateURL,this.datePayload).then((function(){var n=i?"".concat(Object(r.a)("Due date"),"<br />").concat(a," (").concat(Object(c.t)(a),")"):Object(r.a)("Due date");return e&&(t.$dropdown.trigger("loaded.gl.dropdown"),t.$dropdown.dropdown("toggle")),t.$sidebarCollapsedValue.attr("data-original-title",n),t.$loading.fadeOut()}))}}]),e}(),y=function(){function e(){p(this,e),this.initMilestoneDatePicker(),this.initIssuableSelect()}return v(e,[{key:"initMilestoneDatePicker",value:function(){n()(".datepicker").each((function(){var e=n()(this),t=e.val(),a=new d.a({field:e.get(0),theme:"gitlab-theme animate-picker",format:"yyyy-mm-dd",container:e.parent().get(0),parse:function(e){return Object(c.o)(e)},toString:function(e){return Object(c.q)(e)},onSelect:function(t){e.val(a.toString(t))},firstDay:gon.first_day_of_week});a.setDate(Object(c.o)(t)),e.data("pikaday",a)})),n()(".js-clear-due-date,.js-clear-start-date").on("click",(function(e){e.preventDefault(),n()(e.target).siblings(".datepicker").data("pikaday").setDate(null)}))}},{key:"initIssuableSelect",value:function(){var e=n()(".js-issuable-update .due_date").find(".block-loading").hide();n()(".js-due-date-select").each((function(t,a){var i=n()(a);new b({$dropdown:i,$loading:e})}))}}]),e}()},iRx8:function(e,t,a){"use strict";a.r(t);var i=a("3nve");document.addEventListener("DOMContentLoaded",(function(){return Object(i.a)(!1)}))}},[[55,1,0,2,5,6,7]]]);
//# sourceMappingURL=pages.groups.milestones.new.f6d8c093.chunk.js.map