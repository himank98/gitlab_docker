(this.webpackJsonp=this.webpackJsonp||[]).push([[319],{"7oJ8":function(t,e,i){"use strict";i.r(e);i("9U97"),i("kO4A");var s=i("3a3M"),n=i.n(s),o=i("2O3R"),a=i("jB52"),d=i("1fc5"),r=i("GTGS"),l=i("jl6Z"),u=i("DZUU"),c=i("Hkfv"),h=i("/lV4"),p=i("len0"),b=i("Dfb/"),f=i("n7CP"),g=i("a/g3"),I=i("4XuX"),w=i("nh1s"),L=i("6zUg"),m=i("KQYO"),x=i("qdPE"),B=i("7Aw+"),S=i("NmEs");e.default=a.default.extend({components:{BoardBlankState:g.a,BoardDelete:I.a,BoardList:w.a,Icon:p.a,GlButtonGroup:d.a,IssueCount:L.a,GlDeprecatedButton:r.a,GlLabel:l.a,GlTooltip:u.a},directives:{Tooltip:b.a},mixins:[c.a],props:{list:{type:Object,default:function(){return{}},required:!1},disabled:{type:Boolean,required:!0},issueLinkBase:{type:String,required:!0},rootPath:{type:String,required:!0},boardId:{type:String,required:!0},canAdminList:{type:Boolean,required:!1,default:!1}},data:function(){return{detailIssue:m.c.detail,filter:m.c.filter}},computed:{isLoggedIn:function(){return Boolean(gon.current_user_id)},showListHeaderButton:function(){return!this.disabled&&this.list.type!==B.b.closed&&this.list.type!==B.b.blank},issuesTooltip:function(){var t=this.list.issuesSize;return Object(h.e)(Object(h.a)("%{issuesSize} issues"),{issuesSize:t})},weightCountToolTip:function(){},caretTooltip:function(){return this.list.isExpanded?Object(h.d)("Boards|Collapse"):Object(h.d)("Boards|Expand")},isNewIssueShown:function(){return this.list.type===B.b.backlog||this.showListHeaderButton},isSettingsShown:function(){return this.list.type!==B.b.backlog&&this.showListHeaderButton&&this.list.isExpanded&&this.isWipLimitsOn},showBoardListAndBoardInfo:function(){return this.list.type!==B.b.blank&&this.list.type!==B.b.promotion},uniqueKey:function(){return"boards.".concat(this.boardId,".").concat(this.list.type,".").concat(this.list.id)}},watch:{filter:{handler:function(){this.list.page=1,this.list.getIssues(!0).catch((function(){}))},deep:!0}},mounted:function(){var t=this,e=Object(x.a)({disabled:this.disabled,group:"boards",draggable:".is-draggable",handle:".js-board-handle",onEnd:function(e){Object(x.b)();if(void 0!==e.newIndex&&e.oldIndex!==e.newIndex){var i=this.toArray(),s=m.c.findList("id",parseInt(e.item.dataset.id,10));t.$nextTick((function(){m.c.moveList(s,i)}))}}});o.default.create(this.$el.parentNode,e)},created:function(){if(this.list.isExpandable&&f.a.isLocalStorageAccessSafe()&&!this.isLoggedIn){var t="false"===localStorage.getItem("".concat(this.uniqueKey,".expanded"));this.list.isExpanded=!t}},methods:{showScopedLabels:function(t){return m.c.scopedLabels.enabled&&Object(S.E)(t)},showNewIssueForm:function(){this.$refs["board-list"].showIssueForm=!this.$refs["board-list"].showIssueForm},toggleExpanded:function(){this.list.isExpandable&&(this.list.isExpanded=!this.list.isExpanded,f.a.isLocalStorageAccessSafe()&&!this.isLoggedIn&&localStorage.setItem("".concat(this.uniqueKey,".expanded"),this.list.isExpanded),this.isLoggedIn&&this.list.update(),n()(".tooltip").tooltip("hide"))}},template:"#js-board-template"})}}]);
//# sourceMappingURL=319.e516c8ef.chunk.js.map