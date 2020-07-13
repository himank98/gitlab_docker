(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1135:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(137);var r=a(33),s=a.n(r),i=a(7),n=a.n(i),o=a(1108),l=a(1106);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class m extends n.a.PureComponent{render(){return n.a.createElement("div",{id:"back_button",className:"signup-header"},n.a.createElement(l.a,{onClick:this.props.onClick,to:this.props.url},n.a.createElement(o.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>n.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),n.a.createElement(o.a,{id:"web.header.back",defaultMessage:"Back"})))}}c(m,"propTypes",{url:s.a.string,onClick:s.a.func}),c(m,"defaultProps",{url:"/"})},1140:function(e,t,a){e.exports=a.p+"files/77de51bb9d8c3e0ae1c9fba08495fcc7.png"},1198:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(33),s=a.n(r),i=a(7),n=a.n(i),o=a(1108);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class c extends n.a.PureComponent{render(){const{customDescriptionText:e,siteName:t}=this.props;let a=null;return a=e||n.a.createElement(o.a,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{id:"site_name"},t),n.a.createElement("h4",{id:"site_description",className:"color--light"},a))}}l(c,"propTypes",{customDescriptionText:s.a.string,siteName:s.a.string}),l(c,"defaultProps",{siteName:"Mattermost"})},1338:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));a(53);var r=a(20);function s(e,t,a){return s=>n(s(r.login(e,t,a)))}function i(e,t,a){return s=>n(s(r.loginById(e,t,a)))}async function n(e){let t=await e;return t.error&&"api.context.mfa_required.app_error"===t.error.server_error_id&&(t={data:!0}),t}},1998:function(e,t,a){"use strict";a.r(t);var r=a(310),s=a(6),i=a(20),n=a(14),o=a(173),l=a(79),c=a(1338),m=a(13),u=(a(53),a(172),a(70),a(35),a(595),a(33)),d=a.n(u),p=a(7),h=a.n(p),g=a(1108),E=a(1106),f=a(45),v=a(312),_=a(1121),b=a(71),N=a(0),S=a(1140),w=a.n(S),k=a(1135),y=a(1120),C=a(1198),I=a(1116);function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class T extends h.a.Component{constructor(e){super(e),L(this,"setDocumentTitle",e=>{e&&(document.title=e)}),L(this,"getTokenData",(e,t)=>{const a=JSON.parse(t);return{loading:!1,token:e,email:a.email,teamName:a.name}}),L(this,"getInviteInfo",async e=>{const{data:t,error:a}=await this.props.actions.getTeamInviteInfo(e);t?this.setState({loading:!1,noOpenServerError:!1,serverError:"",teamName:t.name}):a&&this.setState({loading:!1,noOpenServerError:!0,serverError:h.a.createElement(g.a,{id:"signup_user_completed.invalid_invite",defaultMessage:"The invite link was invalid.  Please speak with your Administrator to receive an invitation."})})}),L(this,"handleSignupSuccess",(e,t)=>{Object(v.d)("signup","signup_user_02_complete"),this.props.actions.loginById(t.id,e.password,"").then(({error:t})=>{if(t)return void("api.user.login.not_verified.app_error"===t.server_error_id?b.a.push("/should_verify_email?email="+encodeURIComponent(e.email)+"&teamname="+encodeURIComponent(this.state.teamName)):this.setState({serverError:t.message,isSubmitting:!1}));this.state.token>0&&this.props.actions.setGlobalItem(this.state.token,JSON.stringify({usedBefore:!0}));const a=new URLSearchParams(this.props.location.search).get("redirect_to");a?b.a.push(a):_.f()})}),L(this,"isUserValid",()=>{const e=this.refs.email.value.trim();if(!e)return this.setState({nameError:"",emailError:h.a.createElement(g.a,{id:"signup_user_completed.required"}),passwordError:"",serverError:""}),!1;if(!Object(f.isEmail)(e))return this.setState({nameError:"",emailError:h.a.createElement(g.a,{id:"signup_user_completed.validEmail"}),passwordError:"",serverError:""}),!1;const t=this.refs.name.value.trim().toLowerCase();if(!t)return this.setState({nameError:h.a.createElement(g.a,{id:"signup_user_completed.required"}),emailError:"",passwordError:"",serverError:""}),!1;const a=m.gb(t);if("Cannot use a reserved word as a username."===a)return this.setState({nameError:h.a.createElement(g.a,{id:"signup_user_completed.reserved"}),emailError:"",passwordError:"",serverError:""}),!1;if(a)return this.setState({nameError:h.a.createElement(g.a,{id:"signup_user_completed.usernameLength",values:{min:N.Q.MIN_USERNAME_LENGTH,max:N.Q.MAX_USERNAME_LENGTH}}),emailError:"",passwordError:"",serverError:""}),!1;const r=this.refs.password.value,{valid:s,error:i}=m.fb(r,this.props.passwordConfig);return!(!s&&i)||(this.setState({nameError:"",emailError:"",passwordError:i,serverError:""}),!1)}),L(this,"handleSubmit",e=>{if(e.preventDefault(),Object(v.d)("signup_email","click_create_account"),!this.state.isSubmitting&&this.isUserValid()){this.setState({nameError:"",emailError:"",passwordError:"",serverError:"",isSubmitting:!0});const e={email:this.refs.email.value.trim(),username:this.refs.name.value.trim().toLowerCase(),password:this.refs.password.value,allow_marketing:!0};this.props.actions.createUser(e,this.state.token,this.state.inviteId).then(t=>{t.error?this.setState({serverError:t.error.message,isSubmitting:!1}):this.handleSignupSuccess(e,t.data)})}}),L(this,"renderEmailSignup",()=>{let e=null,t=h.a.createElement("span",{id:"valid_email",className:"help-block"},h.a.createElement(g.a,{id:"signup_user_completed.emailHelp",defaultMessage:"Valid email required for sign-up"})),a="form-group";this.state.emailError&&(e=h.a.createElement("label",{className:"control-label"},this.state.emailError),t="",a+=" has-error");let r=null,s=h.a.createElement("span",{id:"valid_name",className:"help-block"},h.a.createElement(g.a,{id:"signup_user_completed.userHelp",defaultMessage:"You can use lowercase letters, numbers, periods, dashes, and underscores."})),i="form-group";this.state.nameError&&(r=h.a.createElement("label",{className:"control-label"},this.state.nameError),s="",i+=" has-error");let n=null,o="form-group";this.state.passwordError&&(n=h.a.createElement("label",{className:"control-label"},this.state.passwordError),o+=" has-error");let l=null;this.state.email&&(l=h.a.createElement(I.b,{id:"signup_user_completed.emailIs",defaultMessage:"Your email address is **{email}**. You'll use this address to sign in to {siteName}.",values:{email:this.state.email,siteName:this.props.siteName}}));let c="mt-8";return this.state.email&&(c="hidden"),h.a.createElement("form",null,h.a.createElement("div",{className:"inner__content"},h.a.createElement("div",{className:c},h.a.createElement("h5",{id:"email_label"},h.a.createElement("strong",null,h.a.createElement(g.a,{id:"signup_user_completed.whatis",defaultMessage:"What's your email address?"}))),h.a.createElement("div",{className:a},h.a.createElement("input",{id:"email",type:"email",ref:"email",className:"form-control",defaultValue:this.state.email,placeholder:"",maxLength:"128",autoFocus:!0,spellCheck:"false",autoCapitalize:"off"}),e,t)),l,h.a.createElement("div",{className:"mt-8"},h.a.createElement("h5",{id:"name_label"},h.a.createElement("strong",null,h.a.createElement(g.a,{id:"signup_user_completed.chooseUser",defaultMessage:"Choose your username"}))),h.a.createElement("div",{className:i},h.a.createElement("input",{id:"name",type:"text",ref:"name",className:"form-control",placeholder:"",maxLength:N.Q.MAX_USERNAME_LENGTH,spellCheck:"false",autoCapitalize:"off"}),r,s)),h.a.createElement("div",{className:"mt-8"},h.a.createElement("h5",{id:"password_label"},h.a.createElement("strong",null,h.a.createElement(g.a,{id:"signup_user_completed.choosePwd",defaultMessage:"Choose your password"}))),h.a.createElement("div",{className:o},h.a.createElement("input",{id:"password",type:"password",ref:"password",className:"form-control",placeholder:"",maxLength:"128",spellCheck:"false"}),n)),h.a.createElement("p",{className:"mt-5"},h.a.createElement("button",{id:"createAccountButton",type:"submit",onClick:this.handleSubmit,className:"btn-primary btn",disabled:this.state.isSubmitting},h.a.createElement(g.a,{id:"signup_user_completed.create",defaultMessage:"Create Account"})))))});const t=new URLSearchParams(this.props.location.search).get("d"),a=new URLSearchParams(this.props.location.search).get("t"),r=new URLSearchParams(this.props.location.search).get("id");this.state={},a&&a.length>0?this.state=this.getTokenData(a,t):r&&r.length>0&&(this.state={loading:!0,inviteId:r})}componentDidMount(){Object(v.d)("signup","signup_user_01_welcome"),this.setDocumentTitle(this.props.siteName);const{inviteId:e}=this.state;e&&e.length>0&&this.getInviteInfo(e),this.props.hasAccounts||document.body.classList.remove("sticky")}componentDidUpdate(){this.setDocumentTitle(this.props.siteName)}render(){const{customDescriptionText:e,enableSignUpWithEmail:t,location:a,privacyPolicyLink:r,siteName:s,termsOfServiceLink:i,hasAccounts:n}=this.props;let o,l=null;if(this.state.serverError&&(l=h.a.createElement("div",{id:"existingEmailErrorContainer",className:"form-group has-error"},h.a.createElement("label",{className:"control-label"},this.state.serverError))),this.state.loading)return h.a.createElement(y.a,null);if(!t)return null;o=this.renderEmailSignup();let c=null;return!this.state.noOpenServerError&&o&&(c=h.a.createElement("p",{id:"signup_agreement"},h.a.createElement(I.b,{id:"create_team.agreement",defaultMessage:"By proceeding to create your account and use {siteName}, you agree to our [Terms of Service]({TermsOfServiceLink}) and [Privacy Policy]({PrivacyPolicyLink}). If you do not agree, you cannot use {siteName}.",values:{siteName:s,TermsOfServiceLink:"!".concat(i),PrivacyPolicyLink:"!".concat(r)}}))),this.state.noOpenServerError&&(o=null),h.a.createElement("div",null,n&&h.a.createElement(k.a,{onClick:()=>Object(v.d)("signup_email","click_back")}),h.a.createElement("div",{id:"signup_email_section",className:"col-sm-12"},h.a.createElement("div",{className:"signup-team__container padding--less"},h.a.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:w.a}),h.a.createElement(C.a,{customDescriptionText:e,siteName:s}),h.a.createElement("h4",{id:"create_account",className:"color--light"},h.a.createElement(g.a,{id:"signup_user_completed.lets",defaultMessage:"Let's create your account"})),h.a.createElement("span",{id:"signin_account",className:"color--light"},h.a.createElement(g.a,{id:"signup_user_completed.haveAccount",defaultMessage:"Already have an account?"})," ",h.a.createElement(E.a,{id:"signin_account_link",to:"/login"+a.search,onClick:()=>Object(v.d)("signup_email","click_signin_account")},h.a.createElement(g.a,{id:"signup_user_completed.signIn",defaultMessage:"Click here to sign in."}))),o,l,c)))}}L(T,"propTypes",{location:d.a.object,enableSignUpWithEmail:d.a.bool.isRequired,siteName:d.a.string,termsOfServiceLink:d.a.string,privacyPolicyLink:d.a.string,customDescriptionText:d.a.string,passwordConfig:d.a.object,hasAccounts:d.a.bool.isRequired,actions:d.a.shape({createUser:d.a.func.isRequired,loginById:d.a.func.isRequired,setGlobalItem:d.a.func.isRequired,getTeamInviteInfo:d.a.func.isRequired}).isRequired});t.default=Object(r.connect)((function(e){const t=Object(n.getConfig)(e),a="true"===t.EnableSignUpWithEmail,r=t.SiteName,s=t.TermsOfServiceLink,i=t.PrivacyPolicyLink,o=t.CustomDescriptionText,l="false"===t.NoAccounts;return{enableSignUpWithEmail:a,siteName:r,termsOfServiceLink:s,privacyPolicyLink:i,customDescriptionText:o,passwordConfig:Object(m.D)(t),hasAccounts:l}}),(function(e){return{actions:Object(s.bindActionCreators)({createUser:i.createUser,loginById:c.b,setGlobalItem:l.e,getTeamInviteInfo:o.getTeamInviteInfo},e)}}))(T)}}]);
//# sourceMappingURL=11.a1e606f09ae0952d9cc0.js.map