(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1135:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t(137);var s=t(33),n=t.n(s),i=t(7),r=t.n(i),o=t(1108),l=t(1106);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class m extends r.a.PureComponent{render(){return r.a.createElement("div",{id:"back_button",className:"signup-header"},r.a.createElement(l.a,{onClick:this.props.onClick,to:this.props.url},r.a.createElement(o.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>r.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),r.a.createElement(o.a,{id:"web.header.back",defaultMessage:"Back"})))}}c(m,"propTypes",{url:n.a.string,onClick:n.a.func}),c(m,"defaultProps",{url:"/"})},1140:function(e,a,t){e.exports=t.p+"files/77de51bb9d8c3e0ae1c9fba08495fcc7.png"},1198:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var s=t(33),n=t.n(s),i=t(7),r=t.n(i),o=t(1108);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class c extends r.a.PureComponent{render(){const{customDescriptionText:e,siteName:a}=this.props;let t=null;return t=e||r.a.createElement(o.a,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"site_name"},a),r.a.createElement("h4",{id:"site_description",className:"color--light"},t))}}l(c,"propTypes",{customDescriptionText:n.a.string,siteName:n.a.string}),l(c,"defaultProps",{siteName:"Mattermost"})},1239:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var s=t(7),n=t.n(s),i=t(1108);class r extends n.a.PureComponent{render(){return n.a.createElement(i.a,{id:"generic_icons.logout",defaultMessage:"Logout Icon"},e=>n.a.createElement("i",{className:"fa fa-1x fa-angle-left",title:e}))}}},1985:function(e,a,t){"use strict";t.r(a);var s=t(310),n=t(6),i=t(1107),r=t(173),o=t(139),l=t(14),c=t(11),m=t(98),u=t(18),d=t(10),p=t(1193),g=t(13),h=(t(53),t(113),t(97),t(33)),f=t.n(h),b=t(7),E=t.n(b),_=t(1108),T=t(1106),v=t(1121),C=t(312),P=t(15),N=t(0),M=t(1140),y=t.n(M),R=t(1184),S=t(1135),k=t(1120),j=t(1185),I=t(1198),O=t(1239),w=t(1116),D=t(1194),L=t.n(D);function x(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class U extends E.a.PureComponent{constructor(e){super(e),x(this,"validateBuffer",e=>e<100?100:Math.abs(e)),x(this,"getAmountOfPages",(e,a)=>Math.ceil(e/a)),x(this,"handleScroll",()=>{const{isFetching:e,isEndofData:a}=this.state,{callBack:t,bufferValue:s,totalItems:n,itemsPerPage:i,pageNumber:r}=this.props,o=this.node.current,l=this.validateBuffer(s),c=o.scrollHeight-o.clientHeight-l;!(o.scrollTop>c)||a||e||this.setState({isFetching:!0},async()=>{if(await t(),this.setState({isFetching:!1}),0===n)return void this.setState({isEndofData:!0});const e=this.getAmountOfPages(n,i);r===e&&this.setState({isEndofData:!0})})}),x(this,"debounceHandleScroll",L()(this.handleScroll,200)),this.state={isFetching:!1,isEndofData:!1},this.node=E.a.createRef()}componentDidMount(){this.node.current.addEventListener("scroll",this.debounceHandleScroll)}componentWillUnmount(){this.node.current.removeEventListener("scroll",this.debounceHandleScroll)}render(){const{children:e,endOfDataMessage:a,styleClass:t,loaderStyle:s}=this.props,{isEndofData:n,isFetching:i}=this.state,r=!n&&i;return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"infinite-scroll ".concat(t),ref:this.node},e,r&&E.a.createElement(k.a,{style:s,message:" "}),!r&&a))}}x(U,"propTypes",{children:f.a.node.isRequired,callBack:f.a.func.isRequired,endOfDataMessage:f.a.string,styleClass:f.a.string,bufferValue:f.a.number,totalItems:f.a.number.isRequired,itemsPerPage:f.a.number.isRequired,pageNumber:f.a.number.isRequired,loaderStyle:f.a.object}),x(U,"defaultProps",{bufferValue:100,endOfDataMessage:"",styleClass:"",loaderStyle:{}});t(594),t(35);var A=t(1378),q=t(1142),J=t(1118);class B extends E.a.PureComponent{render(){return E.a.createElement("span",this.props,E.a.createElement(_.a,{id:"generic_icons.info",defaultMessage:"Info Icon"},e=>E.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 20 20",style:F,role:"img","aria-label":e},E.a.createElement("g",{transform:"matrix(1.17647,0,0,1.17647,-1.55431e-15,-1.00573e-14)"},E.a.createElement("path",{d:"M8.5,0C3.797,0 0,3.797 0,8.5C0,13.203 3.797,17 8.5,17C13.203,17 17,13.203 17,8.5C17,3.797 13.203,0 8.5,0ZM10,8.5C10,7.672 9.328,7 8.5,7C7.672,7 7,7.672 7,8.5L7,12.45C7,13.278 7.672,13.95 8.5,13.95C9.328,13.95 10,13.278 10,12.45L10,8.5ZM8.5,3C9.328,3 10,3.672 10,4.5C10,5.328 9.328,6 8.5,6C7.672,6 7,5.328 7,4.5C7,3.672 7.672,3 8.5,3Z"})))))}}const F={fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:1.41421};var Y=t(28);function G(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class H extends E.a.PureComponent{constructor(...e){super(...e),G(this,"handleTeamClick",e=>{e.preventDefault(),this.props.onTeamClick(this.props.team)}),G(this,"renderDescriptionTooltip",()=>{const e=this.props.team;if(!e.description)return null;const a=E.a.createElement(A.a,{id:"team-description__tooltip"},e.description);return E.a.createElement(J.a,{delayShow:1e3,placement:"top",overlay:a,rootClose:!0,container:this},E.a.createElement(B,{className:"icon icon--info"}))})}render(){const{canJoinPublicTeams:e,canJoinPrivateTeams:a,loading:t,team:s}=this.props;let n;n=t?E.a.createElement(q.a,{className:"fa fa-refresh fa-spin right signup-team__icon",component:"span",title:{id:Object(Y.b)("generic_icons.loading"),defaultMessage:"Loading Icon"}}):E.a.createElement(q.a,{className:"fa fa-angle-right right signup-team__icon",component:"span",title:{id:Object(Y.b)("select_team.join.icon"),defaultMessage:"Join Team Icon"}});const i=s.allow_open_invite&&e||!s.allow_open_invite&&a;return E.a.createElement("div",{className:"signup-team-dir"},this.renderDescriptionTooltip(),E.a.createElement("a",{href:"#",id:g.h(s.display_name),onClick:i?this.handleTeamClick:null,className:i?"":"disabled"},E.a.createElement("span",{className:"signup-team-dir__name"},s.display_name),!s.allow_open_invite&&E.a.createElement(q.a,{className:"fa fa-lock light",title:{id:Object(Y.b)("select_team.private.icon"),defaultMessage:"Private team"}}),i&&n))}}function V(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}G(H,"propTypes",{team:f.a.object.isRequired,onTeamClick:f.a.func.isRequired,loading:f.a.bool.isRequired,canJoinPublicTeams:f.a.bool.isRequired,canJoinPrivateTeams:f.a.bool.isRequired});class Z extends E.a.Component{constructor(e){super(e),V(this,"fetchMoreTeams",async()=>{const{currentPage:e}=this.state,{actions:a}=this.props,t=await a.getTeams(e,30,!0);t.error||t.error instanceof Error||this.setState(e=>({currentPage:e.currentPage+1}))}),V(this,"handleTeamClick",async e=>{const{siteURL:a,currentUserRoles:t}=this.props;this.setState({loadingTeamId:e.id});const{data:s,error:n}=await this.props.actions.addUserToTeam(e.id,this.props.currentUserId);if(s)this.props.history.push("/".concat(e.name,"/channels/").concat(N.Q.DEFAULT_CHANNEL));else if(n){let e=n.message;"api.team.add_members.user_denied"===n.server_error_id&&(e=t.includes(N.Q.PERMISSIONS_SYSTEM_ADMIN)?E.a.createElement(w.b,{id:"join_team_group_constrained_denied_admin",defaultMessage:"You need to be a member of a linked group to join this team. You can add a group to this team [here](".concat(a,"/admin_console/user_management/groups)."),values:{siteURL:a}}):E.a.createElement(w.b,{id:"join_team_group_constrained_denied",defaultMessage:"You need to be a member of a linked group to join this team."})),this.setState({error:e,loadingTeamId:""})}}),V(this,"handleLogoutClick",e=>{e.preventDefault(),Object(C.d)("select_team","click_logout"),Object(v.e)("/login")}),V(this,"clearError",e=>{e.preventDefault(),this.setState({error:null})}),this.state={loadingTeamId:"",error:null,endofTeamsData:!1,currentPage:0,currentListableTeams:[]}}static getDerivedStateFromProps(e,a){return e.listableTeams.length!==a.currentListableTeams.length?{currentListableTeams:e.listableTeams.slice(0,30*a.currentPage)}:null}componentDidMount(){Object(C.d)("signup","signup_select_team",{userId:this.props.currentUserId}),this.fetchMoreTeams(),this.props.actions.loadRolesIfNeeded(this.props.currentUserRoles.split(" "))}render(){const{currentPage:e,currentListableTeams:a}=this.state,{currentUserIsGuest:t,canManageSystem:s,customDescriptionText:n,isMemberOfTeam:i,siteName:r,canCreateTeams:o,canJoinPublicTeams:l,canJoinPrivateTeams:m,totalTeamsCount:u}=this.props;let d;if(this.state.loadingTeamId)d=E.a.createElement(k.a,null);else if(this.state.error)d=E.a.createElement("div",{className:"signup__content"},E.a.createElement("div",{className:"form-group has-error"},E.a.createElement("label",{className:"control-label"},this.state.error)));else if(t)d=E.a.createElement("div",{className:"signup__content"},E.a.createElement("div",{className:"form-group has-error"},E.a.createElement("label",{className:"control-label"},E.a.createElement(_.a,{id:"signup_team.guest_without_channels",defaultMessage:"Your guest account has no channels assigned. Please contact an administrator."}))));else{let t=[];a.forEach(e=>{(e.allow_open_invite&&l||!e.allow_open_invite&&m)&&t.push(E.a.createElement(H,{key:"team_"+e.name,team:e,onTeamClick:this.handleTeamClick,loading:this.state.loadingTeamId===e.id,canJoinPublicTeams:l,canJoinPrivateTeams:m}))}),0===t.length&&(o||s)?t=E.a.createElement("div",{className:"signup-team-dir-err"},E.a.createElement("div",null,E.a.createElement(_.a,{id:"signup_team.no_open_teams_canCreate",defaultMessage:"No teams are available to join. Please create a new team or ask your administrator for an invite."}))):0===t.length&&(t=E.a.createElement("div",{className:"signup-team-dir-err"},E.a.createElement("div",null,E.a.createElement(j.a,{permissions:[c.Permissions.CREATE_TEAM]},E.a.createElement(_.a,{id:"signup_team.no_open_teams_canCreate",defaultMessage:"No teams are available to join. Please create a new team or ask your administrator for an invite."})),E.a.createElement(j.a,{permissions:[c.Permissions.CREATE_TEAM],invert:!0},E.a.createElement(_.a,{id:"signup_team.no_open_teams",defaultMessage:"No teams are available to join. Please ask your administrator for an invite."}))))),d=E.a.createElement("div",{id:"teamsYouCanJoinContent",className:"signup__content"},E.a.createElement("h4",null,E.a.createElement(_.a,{id:"signup_team.join_open",defaultMessage:"Teams you can join: "})),E.a.createElement(U,{callBack:this.fetchMoreTeams,styleClass:"signup-team-all",totalItems:u,itemsPerPage:30,bufferValue:280,pageNumber:e,loaderStyle:{padding:"0px",height:"40px"}},t))}const p=E.a.createElement(j.a,{permissions:[c.Permissions.CREATE_TEAM]},E.a.createElement("div",{className:"margin--extra",style:{marginTop:"0.5em"}},E.a.createElement(T.a,{id:"createNewTeamLink",to:"/create_team",onClick:()=>Object(C.d)("select_team","click_create_team"),className:"signup-team-login"},E.a.createElement(_.a,{id:"login.createTeam",defaultMessage:"Create a new team"}))));let g,h;return P.o()||(g=E.a.createElement(j.a,{permissions:[c.Permissions.MANAGE_SYSTEM]},E.a.createElement("div",{className:"mt-8 hidden-xs"},E.a.createElement(T.a,{to:"/admin_console",className:"signup-team-login",onClick:()=>Object(C.d)("select_team","click_system_console")},E.a.createElement(_.a,{id:"signup_team_system_console",defaultMessage:"Go to System Console"}))))),h=this.state.error?E.a.createElement(S.a,{onClick:this.clearError}):i?E.a.createElement(S.a,null):E.a.createElement("div",{className:"signup-header"},E.a.createElement("a",{href:"#",id:"logout",onClick:this.handleLogoutClick},E.a.createElement(O.a,null),E.a.createElement(_.a,{id:"web.header.logout",defaultMessage:"Logout"}))),E.a.createElement("div",null,E.a.createElement(R.a,null),h,E.a.createElement("div",{className:"col-sm-12"},E.a.createElement("div",{className:"signup-team__container"},E.a.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:y.a}),E.a.createElement(I.a,{customDescriptionText:n,siteName:r}),d,p,g)))}}V(Z,"propTypes",{currentUserId:f.a.string.isRequired,currentUserRoles:f.a.string,currentUserIsGuest:f.a.bool,customDescriptionText:f.a.string,isMemberOfTeam:f.a.bool.isRequired,listableTeams:f.a.array,siteName:f.a.string,canCreateTeams:f.a.bool.isRequired,canManageSystem:f.a.bool.isRequired,canJoinPublicTeams:f.a.bool.isRequired,canJoinPrivateTeams:f.a.bool.isRequired,history:f.a.object,siteURL:f.a.string,actions:f.a.shape({getTeams:f.a.func.isRequired,loadRolesIfNeeded:f.a.func.isRequired,addUserToTeam:f.a.func.isRequired}).isRequired,totalTeamsCount:f.a.number.isRequired});a.default=Object(i.g)(Object(s.connect)((function(e){const a=Object(l.getConfig)(e),t=Object(d.getCurrentUser)(e),s=Object.values(Object(u.getTeamMemberships)(e));return{currentUserId:t.id,currentUserRoles:t.roles||"",currentUserIsGuest:Object(g.W)(t),customDescriptionText:a.CustomDescriptionText,isMemberOfTeam:s&&s.length>0,listableTeams:Object(u.getSortedListableTeams)(e,t.locale),siteName:a.SiteName,canCreateTeams:Object(m.haveISystemPermission)(e,{permission:c.Permissions.CREATE_TEAM}),canManageSystem:Object(m.haveISystemPermission)(e,{permission:c.Permissions.MANAGE_SYSTEM}),canJoinPublicTeams:Object(m.haveISystemPermission)(e,{permission:c.Permissions.JOIN_PUBLIC_TEAMS}),canJoinPrivateTeams:Object(m.haveISystemPermission)(e,{permission:c.Permissions.JOIN_PRIVATE_TEAMS}),siteURL:a.SiteURL,totalTeamsCount:e.entities.teams.totalCount||0}}),(function(e){return{actions:Object(n.bindActionCreators)({getTeams:r.getTeams,loadRolesIfNeeded:o.loadRolesIfNeeded,addUserToTeam:p.a},e)}}))(Z))}}]);
//# sourceMappingURL=14.e3a7dc0d371e00cdfb71.js.map