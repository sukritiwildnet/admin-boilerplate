(this["webpackJsonpreact-material-dashboard"]=this["webpackJsonpreact-material-dashboard"]||[]).push([[0],{295:function(e,t,a){e.exports=a(406)},396:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),o=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(253),l=a(254),s=a(287),g=a(286),p=a(14),d=a(28),m=a(50),u=a(469),h=a(51),f=a.n(h);var b={draw:function(){var e,t,a,n,i,r,o,c,l=this._chart.ctx,s=this._view,g=s.borderWidth,p=this._chart.config.options.cornerRadius;if(p<0&&(p=0),"undefined"===typeof p&&(p=0),s.horizontal?(e=s.base,t=s.x,a=s.y-s.height/2,n=s.y+s.height/2,i=t>e?1:-1,r=1,o=s.borderSkipped||"left"):(e=s.x-s.width/2,t=s.x+s.width/2,a=s.y,i=1,r=(n=s.base)>a?1:-1,o=s.borderSkipped||"bottom"),g){var d=Math.min(Math.abs(e-t),Math.abs(a-n)),m=(g=g>d?d:g)/2,u=e+("left"!==o?m*i:0),h=t+("right"!==o?-m*i:0),f=a+("top"!==o?m*r:0),b=n+("bottom"!==o?-m*r:0);u!==h&&(a=f,n=b),f!==b&&(e=u,t=h)}l.beginPath(),l.fillStyle=s.backgroundColor,l.strokeStyle=s.borderColor,l.lineWidth=g;var x=[[e,n],[e,a],[t,a],[t,n]],y=["bottom","left","top","right"].indexOf(o,0);function v(e){return x[(y+e)%4]}-1===y&&(y=0);var w=v(0);l.moveTo(w[0],w[1]);for(var j=1;j<4;j+=1){w=v(j);var C=j+1;4===C&&(C=0);var O=x[2][0]-x[1][0],k=x[0][1]-x[1][1],T=x[1][0],E=x[1][1];if((c=p)>Math.abs(k)/2&&(c=Math.floor(Math.abs(k)/2)),c>Math.abs(O)/2&&(c=Math.floor(Math.abs(O)/2)),k<0){var S=T,N=T+O,I=E+k,B=E+k,W=T,q=T+O,L=E,R=E;l.moveTo(W+c,L),l.lineTo(q-c,R),l.quadraticCurveTo(q,R,q,R-c),l.lineTo(N,B+c),l.quadraticCurveTo(N,B,N-c,B),l.lineTo(S+c,I),l.quadraticCurveTo(S,I,S,I+c),l.lineTo(W,L-c),l.quadraticCurveTo(W,L,W+c,L)}else if(O<0){var z=T+O,F=T,H=E,M=E,G=T+O,V=T,A=E+k,D=E+k;l.moveTo(G+c,A),l.lineTo(V-c,D),l.quadraticCurveTo(V,D,V,D-c),l.lineTo(F,M+c),l.quadraticCurveTo(F,M,F-c,M),l.lineTo(z+c,H),l.quadraticCurveTo(z,H,z,H+c),l.lineTo(G,A-c),l.quadraticCurveTo(G,A,G+c,A)}else l.moveTo(T+c,E),l.lineTo(T+O-c,E),l.quadraticCurveTo(T+O,E,T+O,E+c),l.lineTo(T+O,E+k-c),l.quadraticCurveTo(T+O,E+k,T+O-c,E+k),l.lineTo(T+c,E+k),l.quadraticCurveTo(T,E+k,T,E+k-c),l.lineTo(T,E+c),l.quadraticCurveTo(T,E,T+c,E)}l.fill(),g&&l.stroke()}},x=a(285),y=a(6),v="#FFFFFF",w={black:"#000000",white:v,primary:{contrastText:v,dark:y.a.indigo[900],main:y.a.indigo[500],light:y.a.indigo[100]},secondary:{contrastText:v,dark:y.a.blue[900],main:y.a.blue.A400,light:y.a.blue.A400},success:{contrastText:v,dark:y.a.green[900],main:y.a.green[600],light:y.a.green[400]},info:{contrastText:v,dark:y.a.blue[900],main:y.a.blue[600],light:y.a.blue[400]},warning:{contrastText:v,dark:y.a.orange[900],main:y.a.orange[600],light:y.a.orange[400]},error:{contrastText:v,dark:y.a.red[900],main:y.a.red[600],light:y.a.red[400]},text:{primary:y.a.blueGrey[900],secondary:y.a.blueGrey[600],link:y.a.blue[600]},background:{default:"#F4F6F8",paper:v},icon:y.a.blueGrey[600],divider:y.a.grey[200]},j={h1:{color:w.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:w.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:w.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:w.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:w.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:w.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:w.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:w.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:w.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:w.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:w.text.primary,fontSize:"14px"},caption:{color:w.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:w.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},C={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:w.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(p.a)(Object(p.a)({},j.body1),{},{borderBottom:"1px solid ".concat(w.divider)})},MuiTableHead:{root:{backgroundColor:y.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}},O=Object(x.a)({palette:w,typography:j,overrides:C,zIndex:{appBar:1200,drawer:1100}}),k=(a(395),a(396),{checked:function(e,t){if(!0!==e)return t.message||"must be checked"}}),T=a(21),E=a(8),S=a(2),N=a(470),I=(a(110),a(289),a(258),Object(N.a)((function(e){return{root:{borderRadius:"4px",alignItems:"center",padding:e.spacing(1),display:"flex",flexBasis:420},icon:{marginRight:e.spacing(1),color:e.palette.text.secondary},input:{flexGrow:1,fontSize:"14px",lineHeight:"16px",letterSpacing:"-0.05px"}}})),a(16)),B=Object(N.a)((function(e){return{root:{display:"inline-block",borderRadius:"50%",flexGrow:0,flexShrink:0},sm:{height:e.spacing(1),width:e.spacing(1)},md:{height:e.spacing(2),width:e.spacing(2)},lg:{height:e.spacing(3),width:e.spacing(3)},neutral:{backgroundColor:e.palette.neutral},primary:{backgroundColor:e.palette.primary.main},info:{backgroundColor:e.palette.info.main},warning:{backgroundColor:e.palette.warning.main},danger:{backgroundColor:e.palette.error.main},success:{backgroundColor:e.palette.success.main}}})),W=function(e){var t,a=e.className,n=e.size,r=e.color,o=Object(E.a)(e,["className","size","color"]),c=B();return i.a.createElement("span",Object.assign({},o,{className:Object(S.a)((t={},Object(I.a)(t,c.root,!0),Object(I.a)(t,c[n],n),Object(I.a)(t,c[r],r),t),a)}))};W.defaultProps={size:"md",color:"default"};var q=a(20),L=(a(109),a(415),Object(N.a)((function(e){return{root:{padding:e.spacing(4)}}})),a(443),a(445),a(259),a(260),a(261),a(262),a(26)),R=(a(474),a(40)),z=(Object(N.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"fit-content"},avatar:{width:60,height:60},name:{marginTop:e.spacing(1)}}})),a(409),a(410),a(442)),F=(Object(N.a)((function(e){return{root:{},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{color:y.a.blueGrey[800],padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightMedium},icon:{color:e.palette.icon,width:24,height:24,display:"flex",alignItems:"center",marginRight:e.spacing(1)},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium,"& $icon":{color:e.palette.primary.main}}}})),Object(n.forwardRef)((function(e,t){return i.a.createElement("div",{ref:t,style:{flexGrow:1}},i.a.createElement(L.b,e))})),Object(N.a)((function(e){return{root:{backgroundColor:y.a.grey[50]},media:{paddingTop:e.spacing(2),height:80,textAlign:"center","& > img":{height:"100%",width:"auto"}},content:{padding:e.spacing(1,2)},actions:{padding:e.spacing(1,2),display:"flex",justifyContent:"center"}}})),Object(N.a)((function(e){return{drawer:Object(I.a)({width:240},e.breakpoints.up("lg"),{marginTop:64,height:"calc(100% - 64px)"}),root:{backgroundColor:e.palette.white,display:"flex",flexDirection:"column",height:"100%",padding:e.spacing(2)},divider:{margin:e.spacing(2,0)},nav:{marginBottom:e.spacing(2)}}})),a(446),a(447),a(473),a(449)),H=(a(450),a(265),a(263),a(264),Object(N.a)((function(e){return{root:{boxShadow:"none"},flexGrow:{flexGrow:1},signOutButton:{marginLeft:e.spacing(1)}}})),Object(N.a)((function(e){return{root:Object(I.a)({paddingTop:56,height:"100%"},e.breakpoints.up("sm"),{paddingTop:64}),shiftContent:{paddingLeft:240},content:{height:"100%"}}})),Object(N.a)((function(){return{root:{boxShadow:"none"}}})),Object(N.a)((function(){return{root:{paddingTop:64,height:"100%"},content:{height:"100%"}}})),a(454)),M=(a(451),a(452),a(453),a(455)),G=(a(456),Object(N.a)((function(){return{root:{}}})),a(30)),V=a.n(G),A=(a(457),Object(N.a)((function(e){return{root:{},details:{display:"flex"},avatar:{marginLeft:"auto",height:110,width:100,flexShrink:0,flexGrow:0},progress:{marginTop:e.spacing(2)},uploadButton:{marginRight:e.spacing(2)}}})),Object(N.a)((function(e){return{root:{padding:e.spacing(4)}}})),a(269),a(268),Object(N.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.error.main,height:56,width:56},icon:{height:32,width:32},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIcon:{color:e.palette.error.dark},differenceValue:{color:e.palette.error.dark,marginRight:e.spacing(1)}}})),a(107),a(458),a(459),a(460),a(461),a(462),a(475),a(463),a(70),a(13)),D=a.n(A),P=(D()(),D()(),D()(),D()(),D()(),D()(),Object(N.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:800},statusContainer:{display:"flex",alignItems:"center"},status:{marginRight:e.spacing(1)},actions:{justifyContent:"flex-end"}}})),a(464),a(465),a(271),D()(),V()().subtract(2,"hours"),D()(),V()().subtract(2,"hours"),D()(),V()().subtract(3,"hours"),D()(),V()().subtract(5,"hours"),D()(),V()().subtract(9,"hours"),Object(N.a)((function(){return{root:{height:"100%"},content:{padding:0},image:{height:48,width:48},actions:{justifyContent:"flex-end"}}})),a(272),w.primary.main,w.text.primary,w.text.secondary,w.text.secondary,w.text.secondary,w.text.secondary,Object(N.a)((function(){return{root:{},chartContainer:{height:400,position:"relative"},actions:{justifyContent:"flex-end"}}})),a(273),Object(N.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,height:56,width:56},icon:{height:32,width:32},progress:{marginTop:e.spacing(3)}}})),a(274),Object(N.a)((function(e){return{root:{height:"100%",backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.white,color:e.palette.primary.main,height:56,width:56},icon:{height:32,width:32}}})),a(276),a(275),Object(N.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.success.main,height:56,width:56},icon:{height:32,width:32},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIcon:{color:e.palette.success.dark},differenceValue:{color:e.palette.success.dark,marginRight:e.spacing(1)}}})),a(277),a(279),a(280),a(278),Object(N.a)((function(e){return{root:{height:"100%"},chartContainer:{position:"relative",height:"300px"},stats:{marginTop:e.spacing(2),display:"flex",justifyContent:"center"},device:{textAlign:"center",padding:e.spacing(1)},deviceIcon:{color:e.palette.icon}}})),Object(N.a)((function(e){return{root:{padding:e.spacing(4)}}})),Object(N.a)((function(e){return{root:{padding:e.spacing(4)},iframe:{width:"100%",minHeight:640,border:0}}})),Object(N.a)((function(e){return{root:{padding:e.spacing(4)},content:{paddingTop:150,textAlign:"center"},image:{marginTop:50,display:"inline-block",maxWidth:"100%",width:560}}})),a(284),a(283),a(281),a(282),Object(N.a)((function(e){return{root:{},imageContainer:{height:64,width:64,margin:"0 auto",border:"1px solid ".concat(e.palette.divider),borderRadius:"5px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},image:{width:"100%"},statsItem:{display:"flex",alignItems:"center"},statsIcon:{color:e.palette.icon,marginRight:e.spacing(1)}}})),Object(N.a)((function(e){return{root:{},row:{height:"42px",display:"flex",alignItems:"center",marginTop:e.spacing(1)},spacer:{flexGrow:1},importButton:{marginRight:e.spacing(1)},exportButton:{marginRight:e.spacing(1)},searchInput:{marginRight:e.spacing(1)}}})),D()(),D()(),D()(),D()(),D()(),D()(),Object(N.a)((function(e){return{root:{padding:e.spacing(3)},content:{marginTop:e.spacing(2)},pagination:{marginTop:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"flex-end"}}})),a(466),a(471)),U=(Object(N.a)((function(){return{root:{},item:{display:"flex",flexDirection:"column"}}})),Object(N.a)((function(){return{root:{}}})),Object(N.a)((function(e){return{root:{padding:e.spacing(4)}}})),a(467)),_=a(138),J=a(102);function Z(e){return i.a.createElement(J.a,e,i.a.createElement("path",{d:"M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z"}))}function $(e){return i.a.createElement(J.a,e,i.a.createElement("path",{d:"M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z"}))}var K={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}}},Q=Object(N.a)((function(e){return{root:{backgroundColor:e.palette.background.default,height:"100%"},grid:{height:"100%"},quoteContainer:Object(I.a)({},e.breakpoints.down("md"),{display:"none"}),quote:{backgroundColor:e.palette.neutral,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(/images/auth.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},quoteInner:{textAlign:"center",flexBasis:"600px"},quoteText:{color:e.palette.white,fontWeight:300},name:{marginTop:e.spacing(3),color:e.palette.white},bio:{color:e.palette.white},contentContainer:{},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:e.spacing(5),paddingBototm:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},logoImage:{marginLeft:e.spacing(4)},contentBody:Object(I.a)({flexGrow:1,display:"flex",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"center"}),form:Object(I.a)({paddingLeft:100,paddingRight:100,paddingBottom:125,flexBasis:700},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{marginTop:e.spacing(3)},socialButtons:{marginTop:e.spacing(3)},socialIcon:{marginRight:e.spacing(1)},sugestion:{marginTop:e.spacing(2)},textField:{marginTop:e.spacing(2)},signInButton:{margin:e.spacing(2,0)}}})),X=(Object(T.g)((function(e){var t=e.history,a=Q(),r=Object(_.a)().loginWithRedirect,o=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),c=Object(q.a)(o,2),l=c[0],s=c[1];Object(n.useEffect)((function(){var e=f()(l.values,K);s((function(t){return Object(p.a)(Object(p.a)({},t),{},{isValid:!e,errors:e||{}})}))}),[l.values]);var g=function(e){e.persist(),s((function(t){return Object(p.a)(Object(p.a)({},t),{},{values:Object(p.a)(Object(p.a)({},t.values),{},Object(I.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(p.a)(Object(p.a)({},t.touched),{},Object(I.a)({},e.target.name,!0))})}))},d=function(e){e.preventDefault(),t.push("/")},m=function(e){return!(!l.touched[e]||!l.errors[e])};return i.a.createElement("div",{className:a.root},i.a.createElement(H.a,{className:a.grid,container:!0},i.a.createElement(H.a,{className:a.quoteContainer,item:!0,lg:5},i.a.createElement("div",{className:a.quote})),i.a.createElement(H.a,{className:a.content,item:!0,lg:7,xs:12},i.a.createElement("div",{className:a.content},i.a.createElement("div",{className:a.contentHeader}),i.a.createElement("div",{className:a.contentBody},i.a.createElement("form",{className:a.form,onSubmit:d},i.a.createElement(R.a,{className:a.title,variant:"h2"},"Sign in"),i.a.createElement(R.a,{color:"textSecondary",gutterBottom:!0},"Sign in with social media"),i.a.createElement(H.a,{className:a.socialButtons,container:!0,spacing:2},i.a.createElement(H.a,{item:!0},i.a.createElement(z.a,{color:"primary",onClick:d,size:"large",variant:"contained"},i.a.createElement(Z,{className:a.socialIcon}),"Login with Facebook")),i.a.createElement(H.a,{item:!0},i.a.createElement(z.a,Object(I.a)({onClick:d,size:"large",variant:"contained"},"onClick",(function(){return r()})),i.a.createElement($,{className:a.socialIcon}),"Login with Google"))),i.a.createElement(R.a,{align:"center",className:a.sugestion,color:"textSecondary",variant:"body1"},"or login with email address"),i.a.createElement(M.a,{className:a.textField,error:m("email"),fullWidth:!0,helperText:m("email")?l.errors.email[0]:null,label:"Email address",name:"email",onChange:g,type:"text",value:l.values.email||"",variant:"outlined"}),i.a.createElement(M.a,{className:a.textField,error:m("password"),fullWidth:!0,helperText:m("password")?l.errors.password[0]:null,label:"Password",name:"password",onChange:g,type:"password",value:l.values.password||"",variant:"outlined"}),i.a.createElement(z.a,{className:a.signInButton,color:"primary",disabled:!l.isValid,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign in now"),i.a.createElement(R.a,{color:"textSecondary",variant:"body1"},"Don't have an account?"," ",i.a.createElement(U.a,{component:L.a,to:"/sign-up",variant:"h6"},"Sign up"))))))))})),a(422)),Y=a(139),ee=a.n(Y),te={firstName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},lastName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}},policy:{presence:{allowEmpty:!1,message:"is required"},checked:!0}},ae=Object(N.a)((function(e){return{root:{backgroundColor:e.palette.background.default,height:"100%"},grid:{height:"100%"},quoteContainer:Object(I.a)({},e.breakpoints.down("md"),{display:"none"}),quote:{backgroundColor:e.palette.neutral,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(/images/auth.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},quoteInner:{textAlign:"center",flexBasis:"600px"},quoteText:{color:e.palette.white,fontWeight:300},name:{marginTop:e.spacing(3),color:e.palette.white},bio:{color:e.palette.white},contentContainer:{},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:e.spacing(5),paddingBototm:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},logoImage:{marginLeft:e.spacing(4)},contentBody:Object(I.a)({flexGrow:1,display:"flex",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"center"}),form:Object(I.a)({paddingLeft:100,paddingRight:100,paddingBottom:125,flexBasis:700},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{marginTop:e.spacing(3)},textField:{marginTop:e.spacing(2)},policy:{marginTop:e.spacing(1),display:"flex",alignItems:"center"},policyCheckbox:{marginLeft:"-14px"},signUpButton:{margin:e.spacing(2,0)}}}));Object(T.g)((function(e){var t=e.history,a=ae(),r=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),o=Object(q.a)(r,2),c=o[0],l=o[1];Object(n.useEffect)((function(){var e=f()(c.values,te);l((function(t){return Object(p.a)(Object(p.a)({},t),{},{isValid:!e,errors:e||{}})}))}),[c.values]);var s=function(e){e.persist(),l((function(t){return Object(p.a)(Object(p.a)({},t),{},{values:Object(p.a)(Object(p.a)({},t.values),{},Object(I.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(p.a)(Object(p.a)({},t.touched),{},Object(I.a)({},e.target.name,!0))})}))},g=function(e){return!(!c.touched[e]||!c.errors[e])};return i.a.createElement("div",{className:a.root},i.a.createElement(H.a,{className:a.grid,container:!0},i.a.createElement(H.a,{className:a.quoteContainer,item:!0,lg:5},i.a.createElement("div",{className:a.quote},i.a.createElement("div",{className:a.quoteInner},i.a.createElement(R.a,{className:a.quoteText,variant:"h1"},"Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life."),i.a.createElement("div",{className:a.person},i.a.createElement(R.a,{className:a.name,variant:"body1"},"Takamaru Ayako"),i.a.createElement(R.a,{className:a.bio,variant:"body2"},"Manager at inVision"))))),i.a.createElement(H.a,{className:a.content,item:!0,lg:7,xs:12},i.a.createElement("div",{className:a.content},i.a.createElement("div",{className:a.contentHeader},i.a.createElement(F.a,{onClick:function(){t.goBack()}},i.a.createElement(ee.a,null))),i.a.createElement("div",{className:a.contentBody},i.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),t.push("/")}},i.a.createElement(R.a,{className:a.title,variant:"h2"},"Create new account"),i.a.createElement(R.a,{color:"textSecondary",gutterBottom:!0},"Use your email to create new account"),i.a.createElement(M.a,{className:a.textField,error:g("firstName"),fullWidth:!0,helperText:g("firstName")?c.errors.firstName[0]:null,label:"First name",name:"firstName",onChange:s,type:"text",value:c.values.firstName||"",variant:"outlined"}),i.a.createElement(M.a,{className:a.textField,error:g("lastName"),fullWidth:!0,helperText:g("lastName")?c.errors.lastName[0]:null,label:"Last name",name:"lastName",onChange:s,type:"text",value:c.values.lastName||"",variant:"outlined"}),i.a.createElement(M.a,{className:a.textField,error:g("email"),fullWidth:!0,helperText:g("email")?c.errors.email[0]:null,label:"Email address",name:"email",onChange:s,type:"text",value:c.values.email||"",variant:"outlined"}),i.a.createElement(M.a,{className:a.textField,error:g("password"),fullWidth:!0,helperText:g("password")?c.errors.password[0]:null,label:"Password",name:"password",onChange:s,type:"password",value:c.values.password||"",variant:"outlined"}),i.a.createElement("div",{className:a.policy},i.a.createElement(P.a,{checked:c.values.policy||!1,className:a.policyCheckbox,color:"primary",name:"policy",onChange:s}),i.a.createElement(R.a,{className:a.policyText,color:"textSecondary",variant:"body1"},"I have read the"," ",i.a.createElement(U.a,{color:"primary",component:L.a,to:"#",underline:"always",variant:"h6"},"Terms and Conditions"))),g("policy")&&i.a.createElement(X.a,{error:!0},c.errors.policy[0]),i.a.createElement(z.a,{className:a.signUpButton,color:"primary",disabled:!c.isValid,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign up now"),i.a.createElement(R.a,{color:"textSecondary",variant:"body1"},"Have an account?"," ",i.a.createElement(U.a,{component:L.a,to:"/sign-in",variant:"h6"},"Sign in"))))))))})),Object(N.a)((function(e){return{root:{padding:e.spacing(4)}}})),a(472),Object(N.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:1050},nameContainer:{display:"flex",alignItems:"center"},avatar:{marginRight:e.spacing(2)},actions:{justifyContent:"flex-end"}}})),Object(N.a)((function(e){return{root:{},row:{height:"42px",display:"flex",alignItems:"center",marginTop:e.spacing(1)},spacer:{flexGrow:1},importButton:{marginRight:e.spacing(1)},exportButton:{marginRight:e.spacing(1)},searchInput:{marginRight:e.spacing(1)}}})),D()(),D()(),D()(),D()(),D()(),D()(),D()(),D()(),D()(),D()(),Object(N.a)((function(e){return{root:{padding:e.spacing(3)},content:{marginTop:e.spacing(2)}}})),Object(d.a)();m.Chart.helpers.extend(m.Chart.elements.Rectangle.prototype,{draw:b.draw}),f.a.validators=Object(p.a)(Object(p.a)({},f.a.validators),k);var ne=function(e){Object(s.a)(a,e);var t=Object(g.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,{theme:O},i.a.createElement("div",null,"Testing"))}}]),a}(n.Component);o.a.render(i.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[295,1,2]]]);
//# sourceMappingURL=main.9d70507f.chunk.js.map