import{G,A as r,e as M,q as ne,i as Se,O as ua,t as va,B as Ie,h as xe,p as de,n as ha,s as pa,Z as C,K as fa,F as T,k as ma,f as xa,o as Re,L as me,V as ba,b as _e,I as ga,x as _,a as wa,z as ya,S as ka,c as $a,m as za,d as Ca,$ as Sa,W as Ra,g as He,j as Y,l as be,r as o,D as p,u as c,v as s,w as ie,y as x,H as F,C as I,Q as _a,Y as P,E as Ta,J as Ba,M as Da,X as Ma,N as Aa,P as Fa,R as Te,T as Ia,U as Be,_ as Ha,a0 as Ua,a1 as Oa,a2 as Ea,a3 as re,a4 as se,a5 as V,a6 as De}from"./index-09f8785e.js";function Me(l){return window.TouchEvent&&l instanceof window.TouchEvent}function Ae(){const l=C(new Map),n=k=>w=>{l.value.set(k,w)};return Ea(()=>l.value.clear()),[l,n]}const ja=G([r("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[M("reverse",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),M("vertical",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),r("slider-marks",[r("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),M("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[r("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[r("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),r("slider-rail",`
 height: 100%;
 `,[ne("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),M("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),r("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[r("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),r("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[r("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),M("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[r("slider-handle",`
 cursor: not-allowed;
 `)]),M("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),G("&:hover",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ne("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),M("active",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ne("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),r("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[r("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),r("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[ne("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),r("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[r("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[r("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),G("&:focus",[r("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),r("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[M("transition-disabled",[r("slider-dot","transition: none;")]),r("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[M("active","border: var(--n-dot-border-active);")])])]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Se()]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[M("top",`
 margin-bottom: 12px;
 `),M("right",`
 margin-left: 12px;
 `),M("bottom",`
 margin-top: 12px;
 `),M("left",`
 margin-right: 12px;
 `),Se()]),ua(r("slider",[r("slider-dot","background-color: var(--n-dot-color-modal);")])),va(r("slider",[r("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Na=0,Pa=Object.assign(Object.assign({},Ie.props),{to:xe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Fe=de({name:"Slider",props:Pa,setup(l){const{mergedClsPrefixRef:n,namespaceRef:k,inlineThemeDisabled:w}=ha(l),v=Ie("Slider","-slider",ja,pa,l,n),f=C(null),[$,z]=Ae(),[g,b]=Ae(),A=C(new Set),W=fa(l),{mergedDisabledRef:j}=W,N=T(()=>{const{step:e}=l;if(e<=0||e==="mark")return 0;const a=e.toString();let t=0;return a.includes(".")&&(t=a.length-a.indexOf(".")-1),t}),L=C(l.defaultValue),ce=ma(l,"value"),K=xa(ce,L),B=T(()=>{const{value:e}=K;return(l.range?e:[e]).map(ke)}),X=T(()=>B.value.length>2),u=T(()=>l.placement===void 0?l.vertical?"right":"top":l.placement),m=T(()=>{const{marks:e}=l;return e?Object.keys(e).map(parseFloat):null}),d=C(-1),O=C(-1),H=C(-1),D=C(!1),J=C(!1),ue=T(()=>{const{vertical:e,reverse:a}=l;return e?a?"top":"bottom":a?"right":"left"}),Ue=T(()=>{if(X.value)return;const e=B.value,a=q(l.range?Math.min(...e):l.min),t=q(l.range?Math.max(...e):e[0]),{value:i}=ue;return l.vertical?{[i]:`${a}%`,height:`${t-a}%`}:{[i]:`${a}%`,width:`${t-a}%`}}),Oe=T(()=>{const e=[],{marks:a}=l;if(a){const t=B.value.slice();t.sort((S,R)=>S-R);const{value:i}=ue,{value:h}=X,{range:y}=l,U=h?()=>!1:S=>y?S>=t[0]&&S<=t[t.length-1]:S<=t[0];for(const S of Object.keys(a)){const R=Number(S);e.push({active:U(R),label:a[S],style:{[i]:`${q(R)}%`}})}}return e});function Ee(e,a){const t=q(e),{value:i}=ue;return{[i]:`${t}%`,zIndex:a===d.value?1:0}}function ge(e){return l.showTooltip||H.value===e||d.value===e&&D.value}function je(e){return D.value?!(d.value===e&&O.value===e):!0}function Ne(e){var a;~e&&(d.value=e,(a=$.value.get(e))===null||a===void 0||a.focus())}function Pe(){g.value.forEach((e,a)=>{ge(a)&&e.syncPosition()})}function we(e){const{"onUpdate:value":a,onUpdateValue:t}=l,{nTriggerFormInput:i,nTriggerFormChange:h}=W;t&&De(t,e),a&&De(a,e),L.value=e,i(),h()}function ye(e){const{range:a}=l;if(a){if(Array.isArray(e)){const{value:t}=B;e.join()!==t.join()&&we(e)}}else Array.isArray(e)||B.value[0]!==e&&we(e)}function ve(e,a){if(l.range){const t=B.value.slice();t.splice(a,1,e),ye(t)}else ye(e)}function he(e,a,t){const i=t!==void 0;t||(t=e-a>0?1:-1);const h=m.value||[],{step:y}=l;if(y==="mark"){const R=Q(e,h.concat(a),i?t:void 0);return R?R.value:a}if(y<=0)return a;const{value:U}=N;let S;if(i){const R=Number((a/y).toFixed(U)),E=Math.floor(R),pe=R>E?E:E-1,fe=R<E?E:E+1;S=Q(a,[Number((pe*y).toFixed(U)),Number((fe*y).toFixed(U)),...h],t)}else{const R=Le(e);S=Q(e,[...h,R])}return S?ke(S.value):a}function ke(e){return Math.min(l.max,Math.max(l.min,e))}function q(e){const{max:a,min:t}=l;return(e-t)/(a-t)*100}function Ve(e){const{max:a,min:t}=l;return t+(a-t)*e}function Le(e){const{step:a,min:t}=l;if(a<=0||a==="mark")return e;const i=Math.round((e-t)/a)*a+t;return Number(i.toFixed(N.value))}function Q(e,a=m.value,t){if(!(a!=null&&a.length))return null;let i=null,h=-1;for(;++h<a.length;){const y=a[h]-e,U=Math.abs(y);(t===void 0||y*t>0)&&(i===null||U<i.distance)&&(i={index:h,distance:U,value:a[h]})}return i}function $e(e){const a=f.value;if(!a)return;const t=Me(e)?e.touches[0]:e,i=a.getBoundingClientRect();let h;return l.vertical?h=(i.bottom-t.clientY)/i.height:h=(t.clientX-i.left)/i.width,l.reverse&&(h=1-h),Ve(h)}function Ke(e){if(j.value||!l.keyboard)return;const{vertical:a,reverse:t}=l;switch(e.key){case"ArrowUp":e.preventDefault(),Z(a&&t?-1:1);break;case"ArrowRight":e.preventDefault(),Z(!a&&t?-1:1);break;case"ArrowDown":e.preventDefault(),Z(a&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),Z(!a&&t?1:-1);break}}function Z(e){const a=d.value;if(a===-1)return;const{step:t}=l,i=B.value[a],h=t<=0||t==="mark"?i:i+t*e;ve(he(h,i,e>0?1:-1),a)}function Ge(e){var a,t;if(j.value||!Me(e)&&e.button!==Na)return;const i=$e(e);if(i===void 0)return;const h=B.value.slice(),y=l.range?(t=(a=Q(i,h))===null||a===void 0?void 0:a.index)!==null&&t!==void 0?t:-1:0;y!==-1&&(e.preventDefault(),Ne(y),Ye(),ve(he(i,B.value[y]),y))}function Ye(){D.value||(D.value=!0,re("touchend",document,te),re("mouseup",document,te),re("touchmove",document,ae),re("mousemove",document,ae))}function ee(){D.value&&(D.value=!1,se("touchend",document,te),se("mouseup",document,te),se("touchmove",document,ae),se("mousemove",document,ae))}function ae(e){const{value:a}=d;if(!D.value||a===-1){ee();return}const t=$e(e);ve(he(t,B.value[a]),a)}function te(){ee()}function We(e){d.value=e,j.value||(H.value=e)}function Xe(e){d.value===e&&(d.value=-1,ee()),H.value===e&&(H.value=-1)}function Je(e){H.value=e}function qe(e){H.value===e&&(H.value=-1)}Re(d,(e,a)=>void me(()=>O.value=a)),Re(K,()=>{if(l.marks){if(J.value)return;J.value=!0,me(()=>{J.value=!1})}me(Pe)}),ba(()=>{ee()});const ze=T(()=>{const{self:{markFontSize:e,railColor:a,railColorHover:t,fillColor:i,fillColorHover:h,handleColor:y,opacityDisabled:U,dotColor:S,dotColorModal:R,handleBoxShadow:E,handleBoxShadowHover:pe,handleBoxShadowActive:fe,handleBoxShadowFocus:Qe,dotBorder:Ze,dotBoxShadow:ea,railHeight:aa,railWidthVertical:ta,handleSize:la,dotHeight:oa,dotWidth:na,dotBorderRadius:ra,fontSize:sa,dotBorderActive:ia,dotColorPopover:da},common:{cubicBezierEaseInOut:ca}}=v.value;return{"--n-bezier":ca,"--n-dot-border":Ze,"--n-dot-border-active":ia,"--n-dot-border-radius":ra,"--n-dot-box-shadow":ea,"--n-dot-color":S,"--n-dot-color-modal":R,"--n-dot-color-popover":da,"--n-dot-height":oa,"--n-dot-width":na,"--n-fill-color":i,"--n-fill-color-hover":h,"--n-font-size":sa,"--n-handle-box-shadow":E,"--n-handle-box-shadow-active":fe,"--n-handle-box-shadow-focus":Qe,"--n-handle-box-shadow-hover":pe,"--n-handle-color":y,"--n-handle-size":la,"--n-opacity-disabled":U,"--n-rail-color":a,"--n-rail-color-hover":t,"--n-rail-height":aa,"--n-rail-width-vertical":ta,"--n-mark-font-size":e}}),le=w?_e("slider",void 0,ze,l):void 0,Ce=T(()=>{const{self:{fontSize:e,indicatorColor:a,indicatorBoxShadow:t,indicatorTextColor:i,indicatorBorderRadius:h}}=v.value;return{"--n-font-size":e,"--n-indicator-border-radius":h,"--n-indicator-box-shadow":t,"--n-indicator-color":a,"--n-indicator-text-color":i}}),oe=w?_e("slider-indicator",void 0,Ce,l):void 0;return{mergedClsPrefix:n,namespace:k,uncontrolledValue:L,mergedValue:K,mergedDisabled:j,mergedPlacement:u,isMounted:ga(),adjustedTo:xe(l),dotTransitionDisabled:J,markInfos:Oe,isShowTooltip:ge,shouldKeepTooltipTransition:je,handleRailRef:f,setHandleRefs:z,setFollowerRefs:b,fillStyle:Ue,getHandleStyle:Ee,activeIndex:d,arrifiedValues:B,followerEnabledIndexSet:A,handleRailMouseDown:Ge,handleHandleFocus:We,handleHandleBlur:Xe,handleHandleMouseEnter:Je,handleHandleMouseLeave:qe,handleRailKeyDown:Ke,indicatorCssVars:w?void 0:Ce,indicatorThemeClass:oe==null?void 0:oe.themeClass,indicatorOnRender:oe==null?void 0:oe.onRender,cssVars:w?void 0:ze,themeClass:le==null?void 0:le.themeClass,onRender:le==null?void 0:le.onRender}},render(){var l;const{mergedClsPrefix:n,themeClass:k,formatTooltip:w}=this;return(l=this.onRender)===null||l===void 0||l.call(this),_("div",{class:[`${n}-slider`,k,{[`${n}-slider--disabled`]:this.mergedDisabled,[`${n}-slider--active`]:this.activeIndex!==-1,[`${n}-slider--with-mark`]:this.marks,[`${n}-slider--vertical`]:this.vertical,[`${n}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},_("div",{class:`${n}-slider-rail`},_("div",{class:`${n}-slider-rail__fill`,style:this.fillStyle}),this.marks?_("div",{class:[`${n}-slider-dots`,this.dotTransitionDisabled&&`${n}-slider-dots--transition-disabled`]},this.markInfos.map(v=>_("div",{key:v.label,class:[`${n}-slider-dot`,{[`${n}-slider-dot--active`]:v.active}],style:v.style}))):null,_("div",{ref:"handleRailRef",class:`${n}-slider-handles`},this.arrifiedValues.map((v,f)=>{const $=this.isShowTooltip(f);return _(wa,null,{default:()=>[_(ya,null,{default:()=>_("div",{ref:this.setHandleRefs(f),class:`${n}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(v,f),onFocus:()=>this.handleHandleFocus(f),onBlur:()=>this.handleHandleBlur(f),onMouseenter:()=>this.handleHandleMouseEnter(f),onMouseleave:()=>this.handleHandleMouseLeave(f)},ka(this.$slots.thumb,()=>[_("div",{class:`${n}-slider-handle`})]))}),this.tooltip&&_($a,{ref:this.setFollowerRefs(f),show:$,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(f),teleportDisabled:this.adjustedTo===xe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>_(za,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(f),onEnter:()=>{this.followerEnabledIndexSet.add(f)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(f)}},{default:()=>{var z;return $?((z=this.indicatorOnRender)===null||z===void 0||z.call(this),_("div",{class:[`${n}-slider-handle-indicator`,this.indicatorThemeClass,`${n}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof w=="function"?w(v):v)):null}})})]})})),this.marks?_("div",{class:`${n}-slider-marks`},this.markInfos.map(v=>_("div",{key:v.label,class:`${n}-slider-mark`,style:v.style},v.label))):null))}});function Va(){const l=new Date,n=l.getDate(),k=l.getMonth()+1;return`${l.getFullYear()}-${k}-${n}`}const La={class:"p-4 space-y-5 min-h-[200px]"},Ka={class:"space-y-6"},Ga={class:"flex items-center space-x-4"},Ya={class:"flex-shrink-0 w-[100px]"},Wa={class:"flex-1"},Xa={class:"flex items-center space-x-4"},Ja={class:"flex-shrink-0 w-[100px]"},qa={class:"w-[200px]"},Qa={class:"flex items-center space-x-4"},Za={class:"flex-shrink-0 w-[100px]"},et={class:"flex-1"},at={class:"flex-shrink-0 w-[100px]"},tt={class:"flex flex-wrap items-center gap-4"},lt={class:"flex items-center space-x-4"},ot={class:"flex-shrink-0 w-[100px]"},nt={class:"flex flex-wrap items-center gap-4"},rt={class:"flex items-center space-x-4"},st={class:"flex-shrink-0 w-[100px]"},it={class:"flex flex-wrap items-center gap-4"},dt={class:"flex items-center space-x-4"},ct={class:"flex-shrink-0 w-[100px]"},ut=de({__name:"General",setup(l){const n=Ca(),k=Sa(),{isMobile:w}=Ra(),v=He(),f=T(()=>n.theme),$=T(()=>k.userInfo),z=C($.value.avatar??""),g=C($.value.name??""),b=C($.value.description??""),A=T({get(){return n.language},set(u){n.setLanguage(u)}}),W=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],j=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"}];function N(u){k.updateUserInfo(u),v.success(V("common.success"))}function L(){k.resetUserInfo(),v.success(V("common.success")),window.location.reload()}function ce(){const u=Va(),m=localStorage.getItem("chatStorage")||"{}",d=JSON.stringify(JSON.parse(m),null,2),O=new Blob([d],{type:"application/json"}),H=URL.createObjectURL(O),D=document.createElement("a");D.href=H,D.download=`chat-store_${u}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}function K(u){const m=u.target;if(!m||!m.files)return;const d=m.files[0];if(!d)return;const O=new FileReader;O.onload=()=>{try{const H=JSON.parse(O.result);localStorage.setItem("chatStorage",JSON.stringify(H)),v.success(V("common.success")),location.reload()}catch{v.error(V("common.invalidFileFormat"))}},O.readAsText(d)}function B(){localStorage.removeItem("chatStorage"),location.reload()}function X(){const u=document.getElementById("fileInput");u&&u.click()}return(u,m)=>(Y(),be("div",La,[o("div",Ka,[o("div",Ga,[o("span",Ya,p(u.$t("setting.avatarLink")),1),o("div",Wa,[c(s(ie),{value:z.value,"onUpdate:value":m[0]||(m[0]=d=>z.value=d),placeholder:""},null,8,["value"])]),c(s(I),{size:"tiny",text:"",type:"primary",onClick:m[1]||(m[1]=d=>N({avatar:z.value}))},{default:x(()=>[F(p(u.$t("common.save")),1)]),_:1})]),o("div",Xa,[o("span",Ja,p(u.$t("setting.name")),1),o("div",qa,[c(s(ie),{value:g.value,"onUpdate:value":m[2]||(m[2]=d=>g.value=d),placeholder:""},null,8,["value"])]),c(s(I),{size:"tiny",text:"",type:"primary",onClick:m[3]||(m[3]=d=>N({name:g.value}))},{default:x(()=>[F(p(u.$t("common.save")),1)]),_:1})]),o("div",Qa,[o("span",Za,p(u.$t("setting.description")),1),o("div",et,[c(s(ie),{value:b.value,"onUpdate:value":m[4]||(m[4]=d=>b.value=d),placeholder:""},null,8,["value"])]),c(s(I),{size:"tiny",text:"",type:"primary",onClick:m[5]||(m[5]=d=>N({description:b.value}))},{default:x(()=>[F(p(u.$t("common.save")),1)]),_:1})]),o("div",{class:_a(["flex items-center space-x-4",s(w)&&"items-start"])},[o("span",at,p(u.$t("setting.chatHistory")),1),o("div",tt,[c(s(I),{size:"small",onClick:ce},{icon:x(()=>[c(s(P),{icon:"ri:download-2-fill"})]),default:x(()=>[F(" "+p(u.$t("common.export")),1)]),_:1}),o("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:K},null,32),c(s(I),{size:"small",onClick:X},{icon:x(()=>[c(s(P),{icon:"ri:upload-2-fill"})]),default:x(()=>[F(" "+p(u.$t("common.import")),1)]),_:1}),c(s(Ta),{placement:"bottom",onPositiveClick:B},{trigger:x(()=>[c(s(I),{size:"small"},{icon:x(()=>[c(s(P),{icon:"ri:close-circle-line"})]),default:x(()=>[F(" "+p(u.$t("common.clear")),1)]),_:1})]),default:x(()=>[F(" "+p(u.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),o("div",lt,[o("span",ot,p(u.$t("setting.theme")),1),o("div",nt,[(Y(),be(Ba,null,Da(W,d=>c(s(I),{key:d.key,size:"small",type:d.key===s(f)?"primary":void 0,onClick:O=>s(n).setTheme(d.key)},{icon:x(()=>[c(s(P),{icon:d.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),o("div",rt,[o("span",st,p(u.$t("setting.language")),1),o("div",it,[c(s(Ma),{style:{width:"140px"},value:s(A),options:j,onUpdateValue:m[6]||(m[6]=d=>s(n).setLanguage(d))},null,8,["value"])])]),o("div",dt,[o("span",ct,p(u.$t("setting.resetUserInfo")),1),c(s(I),{size:"small",onClick:L},{default:x(()=>[F(p(u.$t("common.reset")),1)]),_:1})])])]))}}),vt={class:"p-4 space-y-5 min-h-[200px]"},ht={class:"space-y-6"},pt={class:"flex items-center space-x-4"},ft={class:"flex-shrink-0 w-[120px]"},mt={class:"flex-1"},xt={class:"flex items-center space-x-4"},bt={class:"flex-shrink-0 w-[120px]"},gt={class:"flex-1"},wt={class:"flex items-center space-x-4"},yt={class:"flex-shrink-0 w-[120px]"},kt={class:"flex-1"},$t={class:"flex items-center space-x-4"},zt=o("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),Ct=de({__name:"Advanced",setup(l){const n=Aa(),k=He(),w=C(n.systemMessage??""),v=C(n.temperature??.5),f=C(n.top_p??1);function $(g){n.updateSetting(g),k.success(V("common.success"))}function z(){n.resetSetting(),k.success(V("common.success")),window.location.reload()}return(g,b)=>(Y(),be("div",vt,[o("div",ht,[o("div",pt,[o("span",ft,p(g.$t("setting.role")),1),o("div",mt,[c(s(ie),{value:w.value,"onUpdate:value":b[0]||(b[0]=A=>w.value=A),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),c(s(I),{size:"tiny",text:"",type:"primary",onClick:b[1]||(b[1]=A=>$({systemMessage:w.value}))},{default:x(()=>[F(p(g.$t("common.save")),1)]),_:1})]),o("div",xt,[o("span",bt,p(g.$t("setting.temperature")),1),o("div",gt,[c(s(Fe),{value:v.value,"onUpdate:value":b[2]||(b[2]=A=>v.value=A),max:1,min:0,step:.1},null,8,["value","step"])]),o("span",null,p(v.value),1),c(s(I),{size:"tiny",text:"",type:"primary",onClick:b[3]||(b[3]=A=>$({temperature:v.value}))},{default:x(()=>[F(p(g.$t("common.save")),1)]),_:1})]),o("div",wt,[o("span",yt,p(g.$t("setting.top_p")),1),o("div",kt,[c(s(Fe),{value:f.value,"onUpdate:value":b[4]||(b[4]=A=>f.value=A),max:1,min:0,step:.1},null,8,["value","step"])]),o("span",null,p(f.value),1),c(s(I),{size:"tiny",text:"",type:"primary",onClick:b[5]||(b[5]=A=>$({top_p:f.value}))},{default:x(()=>[F(p(g.$t("common.save")),1)]),_:1})]),o("div",$t,[zt,c(s(I),{size:"small",onClick:z},{default:x(()=>[F(p(g.$t("common.reset")),1)]),_:1})])])]))}}),St={class:"ml-2"},Rt={class:"min-h-[100px]"},_t={class:"ml-2"},Tt={class:"min-h-[100px]"},Dt=de({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(l,{emit:n}){const k=l,w=Fa(),v=T(()=>!!w.isChatGPTAPI),f=C("General"),$=T({get(){return k.visible},set(z){n("update:visible",z)}});return(z,g)=>(Y(),Te(s(Oa),{show:s($),"onUpdate:show":g[1]||(g[1]=b=>Ua($)?$.value=b:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:x(()=>[o("div",null,[c(s(Ia),{value:f.value,"onUpdate:value":g[0]||(g[0]=b=>f.value=b),type:"line",animated:""},{default:x(()=>[c(s(Be),{name:"General",tab:"General"},{tab:x(()=>[c(s(P),{class:"text-lg",icon:"ri:file-user-line"}),o("span",St,p(z.$t("setting.general")),1)]),default:x(()=>[o("div",Rt,[c(ut)])]),_:1}),s(v)?(Y(),Te(s(Be),{key:0,name:"Advanced",tab:"Advanced"},{tab:x(()=>[c(s(P),{class:"text-lg",icon:"ri:equalizer-line"}),o("span",_t,p(z.$t("setting.advanced")),1)]),default:x(()=>[o("div",Tt,[c(Ct)])]),_:1})):Ha("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{Dt as default};
