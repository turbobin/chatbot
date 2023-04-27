var Mt=Object.defineProperty;var Bt=(t,d,g)=>d in t?Mt(t,d,{enumerable:!0,configurable:!0,writable:!0,value:g}):t[d]=g;var V=(t,d,g)=>(Bt(t,typeof d!="symbol"?d+"":d,g),g);import{r as $,ak as Vt,c as re,a as x,al as A,am as S,f as tt,an as At,ao as Pt,d as ae,u as it,g as Ue,ap as Ut,b as rt,h as E,t as dt,e as ct,a9 as Je,a0 as Ge,aq as Dt,i as qe,j as Et,k as Qe,l as R,V as Nt,m as Ft,ar as Ht,o as Ot,T as Kt,as as Ve,at as Ae,z as Se,au as st,av as at,aw as Lt,ax as ce,ay as Ye,az as te,aA as Xe,aB as ue,aC as jt,aD as Wt,a2 as Gt,A as ut,K as Yt,U as xe,B as M,C as G,J as e,Q as h,W as r,D as l,N as I,S as Xt,Y as w,_ as Q,X as L,af as j,aE as Jt,I as qt,ae as Qt,aF as Pe,L as se,aG as Zt,aH as es,M as De,F as Z,R as F,ag as Ee,aI as Ne,aJ as ts,w as ss,aK as as,aL as ns,aM as ls,aN as os,aO as is,aP as rs,a6 as ds,aQ as cs,aR as ge,aa as us,aS as vs}from"./index-2b6bd752.js";function nt(t){return window.TouchEvent&&t instanceof window.TouchEvent}function lt(){const t=$(new Map),d=g=>b=>{t.value.set(g,b)};return Vt(()=>t.value.clear()),[t,d]}const hs=re([x("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[A("reverse",[x("slider-handles",[x("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),x("slider-dots",[x("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),A("vertical",[x("slider-handles",[x("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),x("slider-marks",[x("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),x("slider-dots",[x("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),A("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[x("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[x("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),x("slider-rail",`
 height: 100%;
 `,[S("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),A("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),x("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[x("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),x("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[x("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),A("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[x("slider-handle",`
 cursor: not-allowed;
 `)]),A("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),re("&:hover",[x("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[S("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),x("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),A("active",[x("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[S("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),x("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),x("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[x("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),x("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[S("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),x("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[x("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[x("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[re("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),re("&:focus",[x("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[re("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),x("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[A("transition-disabled",[x("slider-dot","transition: none;")]),x("slider-dot",`
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
 `,[A("active","border: var(--n-dot-border-active);")])])]),x("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[tt()]),x("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[A("top",`
 margin-bottom: 12px;
 `),A("right",`
 margin-left: 12px;
 `),A("bottom",`
 margin-top: 12px;
 `),A("left",`
 margin-right: 12px;
 `),tt()]),At(x("slider",[x("slider-dot","background-color: var(--n-dot-color-modal);")])),Pt(x("slider",[x("slider-dot","background-color: var(--n-dot-color-popover);")]))]),fs=0,ps=Object.assign(Object.assign({},Ue.props),{to:Qe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ot=ae({name:"Slider",props:ps,setup(t){const{mergedClsPrefixRef:d,namespaceRef:g,inlineThemeDisabled:b}=it(t),s=Ue("Slider","-slider",hs,Ut,t,d),f=$(null),[k,a]=lt(),[m,c]=lt(),u=$(new Set),i=rt(t),{mergedDisabledRef:v}=i,C=E(()=>{const{step:n}=t;if(n<=0||n==="mark")return 0;const o=n.toString();let p=0;return o.includes(".")&&(p=o.length-o.indexOf(".")-1),p}),W=$(t.defaultValue),we=dt(t,"value"),de=ct(we,W),H=E(()=>{const{value:n}=de;return(t.range?n:[n]).map(le)}),z=E(()=>H.value.length>2),P=E(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),B=E(()=>{const{marks:n}=t;return n?Object.keys(n).map(parseFloat):null}),U=$(-1),J=$(-1),D=$(-1),y=$(!1),ee=$(!1),ne=E(()=>{const{vertical:n,reverse:o}=t;return n?o?"top":"bottom":o?"right":"left"}),ve=E(()=>{if(z.value)return;const n=H.value,o=he(t.range?Math.min(...n):t.min),p=he(t.range?Math.max(...n):n[0]),{value:_}=ne;return t.vertical?{[_]:`${o}%`,height:`${p-o}%`}:{[_]:`${o}%`,width:`${p-o}%`}}),_e=E(()=>{const n=[],{marks:o}=t;if(o){const p=H.value.slice();p.sort((O,K)=>O-K);const{value:_}=ne,{value:T}=z,{range:N}=t,q=T?()=>!1:O=>N?O>=p[0]&&O<=p[p.length-1]:O<=p[0];for(const O of Object.keys(o)){const K=Number(O);n.push({active:q(K),label:o[O],style:{[_]:`${he(K)}%`}})}}return n});function $e(n,o){const p=he(n),{value:_}=ne;return{[_]:`${p}%`,zIndex:o===U.value?1:0}}function Re(n){return t.showTooltip||D.value===n||U.value===n&&y.value}function Fe(n){return y.value?!(U.value===n&&J.value===n):!0}function He(n){var o;~n&&(U.value=n,(o=k.value.get(n))===null||o===void 0||o.focus())}function Oe(){m.value.forEach((n,o)=>{Re(o)&&n.syncPosition()})}function X(n){const{"onUpdate:value":o,onUpdateValue:p}=t,{nTriggerFormInput:_,nTriggerFormChange:T}=i;p&&Se(p,n),o&&Se(o,n),W.value=n,_(),T()}function ze(n){const{range:o}=t;if(o){if(Array.isArray(n)){const{value:p}=H;n.join()!==p.join()&&X(n)}}else Array.isArray(n)||H.value[0]!==n&&X(n)}function ye(n,o){if(t.range){const p=H.value.slice();p.splice(o,1,n),ze(p)}else ze(n)}function Y(n,o,p){const _=p!==void 0;p||(p=n-o>0?1:-1);const T=B.value||[],{step:N}=t;if(N==="mark"){const K=oe(n,T.concat(o),_?p:void 0);return K?K.value:o}if(N<=0)return o;const{value:q}=C;let O;if(_){const K=Number((o/N).toFixed(q)),ie=Math.floor(K),je=K>ie?ie:ie-1,We=K<ie?ie:ie+1;O=oe(o,[Number((je*N).toFixed(q)),Number((We*N).toFixed(q)),...T],p)}else{const K=Le(n);O=oe(n,[...T,K])}return O?le(O.value):o}function le(n){return Math.min(t.max,Math.max(t.min,n))}function he(n){const{max:o,min:p}=t;return(n-p)/(o-p)*100}function Ke(n){const{max:o,min:p}=t;return p+(o-p)*n}function Le(n){const{step:o,min:p}=t;if(o<=0||o==="mark")return n;const _=Math.round((n-p)/o)*o+p;return Number(_.toFixed(C.value))}function oe(n,o=B.value,p){if(!(o!=null&&o.length))return null;let _=null,T=-1;for(;++T<o.length;){const N=o[T]-n,q=Math.abs(N);(p===void 0||N*p>0)&&(_===null||q<_.distance)&&(_={index:T,distance:q,value:o[T]})}return _}function fe(n){const o=f.value;if(!o)return;const p=nt(n)?n.touches[0]:n,_=o.getBoundingClientRect();let T;return t.vertical?T=(_.bottom-p.clientY)/_.height:T=(p.clientX-_.left)/_.width,t.reverse&&(T=1-T),Ke(T)}function ke(n){if(v.value||!t.keyboard)return;const{vertical:o,reverse:p}=t;switch(n.key){case"ArrowUp":n.preventDefault(),Te(o&&p?-1:1);break;case"ArrowRight":n.preventDefault(),Te(!o&&p?-1:1);break;case"ArrowDown":n.preventDefault(),Te(o&&p?1:-1);break;case"ArrowLeft":n.preventDefault(),Te(!o&&p?1:-1);break}}function Te(n){const o=U.value;if(o===-1)return;const{step:p}=t,_=H.value[o],T=p<=0||p==="mark"?_:_+p*n;ye(Y(T,_,n>0?1:-1),o)}function vt(n){var o,p;if(v.value||!nt(n)&&n.button!==fs)return;const _=fe(n);if(_===void 0)return;const T=H.value.slice(),N=t.range?(p=(o=oe(_,T))===null||o===void 0?void 0:o.index)!==null&&p!==void 0?p:-1:0;N!==-1&&(n.preventDefault(),He(N),ht(),ye(Y(_,H.value[N]),N))}function ht(){y.value||(y.value=!0,Ve("touchend",document,Be),Ve("mouseup",document,Be),Ve("touchmove",document,Me),Ve("mousemove",document,Me))}function Ie(){y.value&&(y.value=!1,Ae("touchend",document,Be),Ae("mouseup",document,Be),Ae("touchmove",document,Me),Ae("mousemove",document,Me))}function Me(n){const{value:o}=U;if(!y.value||o===-1){Ie();return}const p=fe(n);ye(Y(p,H.value[o]),o)}function Be(){Ie()}function ft(n){U.value=n,v.value||(D.value=n)}function pt(n){U.value===n&&(U.value=-1,Ie()),D.value===n&&(D.value=-1)}function mt(n){D.value=n}function gt(n){D.value===n&&(D.value=-1)}Je(U,(n,o)=>void Ge(()=>J.value=o)),Je(de,()=>{if(t.marks){if(ee.value)return;ee.value=!0,Ge(()=>{ee.value=!1})}Ge(Oe)}),Dt(()=>{Ie()});const Ze=E(()=>{const{self:{markFontSize:n,railColor:o,railColorHover:p,fillColor:_,fillColorHover:T,handleColor:N,opacityDisabled:q,dotColor:O,dotColorModal:K,handleBoxShadow:ie,handleBoxShadowHover:je,handleBoxShadowActive:We,handleBoxShadowFocus:bt,dotBorder:xt,dotBoxShadow:wt,railHeight:_t,railWidthVertical:$t,handleSize:yt,dotHeight:kt,dotWidth:Ct,dotBorderRadius:St,fontSize:Rt,dotBorderActive:zt,dotColorPopover:Tt},common:{cubicBezierEaseInOut:It}}=s.value;return{"--n-bezier":It,"--n-dot-border":xt,"--n-dot-border-active":zt,"--n-dot-border-radius":St,"--n-dot-box-shadow":wt,"--n-dot-color":O,"--n-dot-color-modal":K,"--n-dot-color-popover":Tt,"--n-dot-height":kt,"--n-dot-width":Ct,"--n-fill-color":_,"--n-fill-color-hover":T,"--n-font-size":Rt,"--n-handle-box-shadow":ie,"--n-handle-box-shadow-active":We,"--n-handle-box-shadow-focus":bt,"--n-handle-box-shadow-hover":je,"--n-handle-color":N,"--n-handle-size":yt,"--n-opacity-disabled":q,"--n-rail-color":o,"--n-rail-color-hover":p,"--n-rail-height":_t,"--n-rail-width-vertical":$t,"--n-mark-font-size":n}}),pe=b?qe("slider",void 0,Ze,t):void 0,et=E(()=>{const{self:{fontSize:n,indicatorColor:o,indicatorBoxShadow:p,indicatorTextColor:_,indicatorBorderRadius:T}}=s.value;return{"--n-font-size":n,"--n-indicator-border-radius":T,"--n-indicator-box-shadow":p,"--n-indicator-color":o,"--n-indicator-text-color":_}}),me=b?qe("slider-indicator",void 0,et,t):void 0;return{mergedClsPrefix:d,namespace:g,uncontrolledValue:W,mergedValue:de,mergedDisabled:v,mergedPlacement:P,isMounted:Et(),adjustedTo:Qe(t),dotTransitionDisabled:ee,markInfos:_e,isShowTooltip:Re,shouldKeepTooltipTransition:Fe,handleRailRef:f,setHandleRefs:a,setFollowerRefs:c,fillStyle:ve,getHandleStyle:$e,activeIndex:U,arrifiedValues:H,followerEnabledIndexSet:u,handleRailMouseDown:vt,handleHandleFocus:ft,handleHandleBlur:pt,handleHandleMouseEnter:mt,handleHandleMouseLeave:gt,handleRailKeyDown:ke,indicatorCssVars:b?void 0:et,indicatorThemeClass:me==null?void 0:me.themeClass,indicatorOnRender:me==null?void 0:me.onRender,cssVars:b?void 0:Ze,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender}},render(){var t;const{mergedClsPrefix:d,themeClass:g,formatTooltip:b}=this;return(t=this.onRender)===null||t===void 0||t.call(this),R("div",{class:[`${d}-slider`,g,{[`${d}-slider--disabled`]:this.mergedDisabled,[`${d}-slider--active`]:this.activeIndex!==-1,[`${d}-slider--with-mark`]:this.marks,[`${d}-slider--vertical`]:this.vertical,[`${d}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},R("div",{class:`${d}-slider-rail`},R("div",{class:`${d}-slider-rail__fill`,style:this.fillStyle}),this.marks?R("div",{class:[`${d}-slider-dots`,this.dotTransitionDisabled&&`${d}-slider-dots--transition-disabled`]},this.markInfos.map(s=>R("div",{key:s.label,class:[`${d}-slider-dot`,{[`${d}-slider-dot--active`]:s.active}],style:s.style}))):null,R("div",{ref:"handleRailRef",class:`${d}-slider-handles`},this.arrifiedValues.map((s,f)=>{const k=this.isShowTooltip(f);return R(Nt,null,{default:()=>[R(Ft,null,{default:()=>R("div",{ref:this.setHandleRefs(f),class:`${d}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(s,f),onFocus:()=>this.handleHandleFocus(f),onBlur:()=>this.handleHandleBlur(f),onMouseenter:()=>this.handleHandleMouseEnter(f),onMouseleave:()=>this.handleHandleMouseLeave(f)},Ht(this.$slots.thumb,()=>[R("div",{class:`${d}-slider-handle`})]))}),this.tooltip&&R(Ot,{ref:this.setFollowerRefs(f),show:k,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(f),teleportDisabled:this.adjustedTo===Qe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>R(Kt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(f),onEnter:()=>{this.followerEnabledIndexSet.add(f)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(f)}},{default:()=>{var a;return k?((a=this.indicatorOnRender)===null||a===void 0||a.call(this),R("div",{class:[`${d}-slider-handle-indicator`,this.indicatorThemeClass,`${d}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof b=="function"?b(s):s)):null}})})]})})),this.marks?R("div",{class:`${d}-slider-marks`},this.markInfos.map(s=>R("div",{key:s.label,class:`${d}-slider-mark`,style:s.style},s.label))):null))}}),ms=x("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[S("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),S("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),S("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),x("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[st({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),S("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),S("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),S("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),re("&:focus",[S("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),A("round",[S("rail","border-radius: calc(var(--n-rail-height) / 2);",[S("button","border-radius: calc(var(--n-button-height) / 2);")])]),at("disabled",[at("icon",[A("rubber-band",[A("pressed",[S("rail",[S("button","max-width: var(--n-button-width-pressed);")])]),S("rail",[re("&:active",[S("button","max-width: var(--n-button-width-pressed);")])]),A("active",[A("pressed",[S("rail",[S("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),S("rail",[re("&:active",[S("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),A("active",[S("rail",[S("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),S("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[S("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[st()]),S("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),A("active",[S("rail","background-color: var(--n-rail-color-active);")]),A("loading",[S("rail",`
 cursor: wait;
 `)]),A("disabled",[S("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),gs=Object.assign(Object.assign({},Ue.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Ce;const be=ae({name:"Switch",props:gs,setup(t){Ce===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Ce=CSS.supports("width","max(1px)"):Ce=!1:Ce=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:g}=it(t),b=Ue("Switch","-switch",ms,Lt,t,d),s=rt(t),{mergedSizeRef:f,mergedDisabledRef:k}=s,a=$(t.defaultValue),m=dt(t,"value"),c=ct(m,a),u=E(()=>c.value===t.checkedValue),i=$(!1),v=$(!1),C=E(()=>{const{railStyle:y}=t;if(y)return y({focused:v.value,checked:u.value})});function W(y){const{"onUpdate:value":ee,onChange:ne,onUpdateValue:ve}=t,{nTriggerFormInput:_e,nTriggerFormChange:$e}=s;ee&&Se(ee,y),ve&&Se(ve,y),ne&&Se(ne,y),a.value=y,_e(),$e()}function we(){const{nTriggerFormFocus:y}=s;y()}function de(){const{nTriggerFormBlur:y}=s;y()}function H(){t.loading||k.value||(c.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue))}function z(){v.value=!0,we()}function P(){v.value=!1,de(),i.value=!1}function B(y){t.loading||k.value||y.key===" "&&(c.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue),i.value=!1)}function U(y){t.loading||k.value||y.key===" "&&(y.preventDefault(),i.value=!0)}const J=E(()=>{const{value:y}=f,{self:{opacityDisabled:ee,railColor:ne,railColorActive:ve,buttonBoxShadow:_e,buttonColor:$e,boxShadowFocus:Re,loadingColor:Fe,textColor:He,iconColor:Oe,[ce("buttonHeight",y)]:X,[ce("buttonWidth",y)]:ze,[ce("buttonWidthPressed",y)]:ye,[ce("railHeight",y)]:Y,[ce("railWidth",y)]:le,[ce("railBorderRadius",y)]:he,[ce("buttonBorderRadius",y)]:Ke},common:{cubicBezierEaseInOut:Le}}=b.value;let oe,fe,ke;return Ce?(oe=`calc((${Y} - ${X}) / 2)`,fe=`max(${Y}, ${X})`,ke=`max(${le}, calc(${le} + ${X} - ${Y}))`):(oe=Ye((te(Y)-te(X))/2),fe=Ye(Math.max(te(Y),te(X))),ke=te(Y)>te(X)?le:Ye(te(le)+te(X)-te(Y))),{"--n-bezier":Le,"--n-button-border-radius":Ke,"--n-button-box-shadow":_e,"--n-button-color":$e,"--n-button-width":ze,"--n-button-width-pressed":ye,"--n-button-height":X,"--n-height":fe,"--n-offset":oe,"--n-opacity-disabled":ee,"--n-rail-border-radius":he,"--n-rail-color":ne,"--n-rail-color-active":ve,"--n-rail-height":Y,"--n-rail-width":le,"--n-width":ke,"--n-box-shadow-focus":Re,"--n-loading-color":Fe,"--n-text-color":He,"--n-icon-color":Oe}}),D=g?qe("switch",E(()=>f.value[0]),J,t):void 0;return{handleClick:H,handleBlur:P,handleFocus:z,handleKeyup:B,handleKeydown:U,mergedRailStyle:C,pressed:i,mergedClsPrefix:d,mergedValue:c,checked:u,mergedDisabled:k,cssVars:g?void 0:J,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:d,checked:g,mergedRailStyle:b,onRender:s,$slots:f}=this;s==null||s();const{checked:k,unchecked:a,icon:m,"checked-icon":c,"unchecked-icon":u}=f,i=!(Xe(m)&&Xe(c)&&Xe(u));return R("div",{role:"switch","aria-checked":g,class:[`${t}-switch`,this.themeClass,i&&`${t}-switch--icon`,g&&`${t}-switch--active`,d&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},R("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:b},ue(k,v=>ue(a,C=>v||C?R("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),v),R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),C)):null)),R("div",{class:`${t}-switch__button`},ue(m,v=>ue(c,C=>ue(u,W=>R(jt,null,{default:()=>this.loading?R(Wt,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(C||v)?R("div",{class:`${t}-switch__button-icon`,key:C?"checked-icon":"icon"},C||v):!this.checked&&(W||v)?R("div",{class:`${t}-switch__button-icon`,key:W?"unchecked-icon":"icon"},W||v):null})))),ue(k,v=>v&&R("div",{key:"checked",class:`${t}-switch__checked`},v)),ue(a,v=>v&&R("div",{key:"unchecked",class:`${t}-switch__unchecked`},v)))))}});function bs(){const t=new Date,d=t.getDate(),g=t.getMonth()+1;return`${t.getFullYear()}-${g}-${d}`}const xs={class:"p-4 space-y-5 min-h-[200px]"},ws={class:"space-y-6"},_s={class:"flex items-center space-x-4"},$s={class:"flex-shrink-0 w-[100px]"},ys={class:"w-[200px]"},ks={class:"flex items-center space-x-4"},Cs={class:"flex-shrink-0 w-[100px]"},Ss={class:"flex-1"},Rs={class:"flex items-center space-x-4"},zs={class:"flex-shrink-0 w-[100px]"},Ts={class:"flex-1"},Is={class:"flex-shrink-0 w-[100px]"},Ms={class:"flex flex-wrap items-center gap-4"},Bs={class:"flex items-center space-x-4"},Vs={class:"flex-shrink-0 w-[100px]"},As={class:"flex flex-wrap items-center gap-4"},Ps={class:"flex items-center space-x-4"},Us={class:"flex-shrink-0 w-[100px]"},Ds={class:"flex flex-wrap items-center gap-4"},Es={class:"flex items-center space-x-4"},Ns={class:"flex-shrink-0 w-[100px]"},Fs=ae({__name:"General",setup(t){const d=Gt(),g=ut(),{isMobile:b}=Yt(),s=xe(),f=E(()=>d.theme),k=E(()=>g.userInfo),a=$(k.value.avatar??""),m=$(k.value.name??""),c=$(k.value.description??""),u=E({get(){return d.language},set(z){d.setLanguage(z)}}),i=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],v=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"}];async function C(z){await g.updateUserInfo(!0,z),s.success(se("common.success"))}function W(){const z=bs(),P=localStorage.getItem("chatStorage")||"{}",B=JSON.stringify(JSON.parse(P),null,2),U=new Blob([B],{type:"application/json"}),J=URL.createObjectURL(U),D=document.createElement("a");D.href=J,D.download=`chat-store_${z}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}function we(z){const P=z.target;if(!P||!P.files)return;const B=P.files[0];if(!B)return;const U=new FileReader;U.onload=()=>{try{const J=JSON.parse(U.result);localStorage.setItem("chatStorage",JSON.stringify(J)),s.success(se("common.success")),location.reload()}catch{s.error(se("common.invalidFileFormat"))}},U.readAsText(B)}async function de(){await Zt(),localStorage.removeItem("chatStorage"),location.reload()}function H(){const z=document.getElementById("fileInput");z&&z.click()}return(z,P)=>(M(),G("div",xs,[e("div",ws,[e("div",_s,[e("span",$s,h(z.$t("setting.name")),1),e("div",ys,[r(l(I),{value:m.value,"onUpdate:value":P[0]||(P[0]=B=>m.value=B),placeholder:""},null,8,["value"])])]),e("div",ks,[e("span",Cs,h(z.$t("setting.description")),1),e("div",Ss,[r(l(I),{value:c.value,"onUpdate:value":P[1]||(P[1]=B=>c.value=B),placeholder:""},null,8,["value"])])]),e("div",Rs,[e("span",zs,h(z.$t("setting.avatarLink")),1),e("div",Ts,[r(l(I),{value:a.value,"onUpdate:value":P[2]||(P[2]=B=>a.value=B),placeholder:""},null,8,["value"])])]),e("div",{class:Xt(["flex items-center space-x-4",l(b)&&"items-start"])},[e("span",Is,h(z.$t("setting.chatHistory")),1),e("div",Ms,[r(l(j),{size:"small",onClick:W},{icon:w(()=>[r(l(Q),{icon:"ri:download-2-fill"})]),default:w(()=>[L(" "+h(z.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:we},null,32),r(l(j),{size:"small",onClick:H},{icon:w(()=>[r(l(Q),{icon:"ri:upload-2-fill"})]),default:w(()=>[L(" "+h(z.$t("common.import")),1)]),_:1}),r(l(Jt),{placement:"bottom",onPositiveClick:de},{trigger:w(()=>[r(l(j),{size:"small"},{icon:w(()=>[r(l(Q),{icon:"ri:close-circle-line"})]),default:w(()=>[L(" "+h(z.$t("common.clear")),1)]),_:1})]),default:w(()=>[L(" "+h(z.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",Bs,[e("span",Vs,h(z.$t("setting.theme")),1),e("div",As,[(M(),G(qt,null,Qt(i,B=>r(l(j),{key:B.key,size:"small",type:B.key===l(f)?"primary":void 0,onClick:U=>l(d).setTheme(B.key)},{icon:w(()=>[r(l(Q),{icon:B.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",Ps,[e("span",Us,h(z.$t("setting.language")),1),e("div",Ds,[r(l(Pe),{style:{width:"140px"},value:l(u),options:v,onUpdateValue:P[3]||(P[3]=B=>l(d).setLanguage(B))},null,8,["value"])])]),e("div",Es,[e("span",Ns,h(z.$t("setting.saveUserInfo")),1),r(l(j),{type:"primary",onClick:P[4]||(P[4]=B=>C({avatar:a.value,name:m.value,description:c.value}))},{default:w(()=>[L(h(z.$t("common.save")),1)]),_:1})])])]))}}),Hs={class:"p-4 space-y-5 min-h-[200px]"},Os={class:"space-y-6"},Ks={class:"flex items-center space-x-4"},Ls={class:"flex-shrink-0 w-[120px]"},js={class:"flex-1"},Ws={class:"flex items-center space-x-4"},Gs={class:"flex-shrink-0 w-[120px]"},Ys={class:"flex-1"},Xs={class:"flex items-center space-x-4"},Js={class:"flex-shrink-0 w-[120px]"},qs={class:"flex-1"},Qs={class:"flex items-center space-x-4"},Zs=e("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),ea=ae({__name:"Advanced",setup(t){const d=es(),g=xe(),b=$(d.systemMessage??""),s=$(d.temperature??.5),f=$(d.top_p??1);function k(m){d.updateSetting(m),g.success(se("common.success"))}function a(){d.resetSetting(),g.success(se("common.success")),window.location.reload()}return(m,c)=>(M(),G("div",Hs,[e("div",Os,[e("div",Ks,[e("span",Ls,h(m.$t("setting.role")),1),e("div",js,[r(l(I),{value:b.value,"onUpdate:value":c[0]||(c[0]=u=>b.value=u),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),r(l(j),{size:"tiny",text:"",type:"primary",onClick:c[1]||(c[1]=u=>k({systemMessage:b.value}))},{default:w(()=>[L(h(m.$t("common.save")),1)]),_:1})]),e("div",Ws,[e("span",Gs,h(m.$t("setting.temperature")),1),e("div",Ys,[r(l(ot),{value:s.value,"onUpdate:value":c[2]||(c[2]=u=>s.value=u),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,h(s.value),1),r(l(j),{size:"tiny",text:"",type:"primary",onClick:c[3]||(c[3]=u=>k({temperature:s.value}))},{default:w(()=>[L(h(m.$t("common.save")),1)]),_:1})]),e("div",Xs,[e("span",Js,h(m.$t("setting.top_p")),1),e("div",qs,[r(l(ot),{value:f.value,"onUpdate:value":c[4]||(c[4]=u=>f.value=u),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,h(f.value),1),r(l(j),{size:"tiny",text:"",type:"primary",onClick:c[5]||(c[5]=u=>k({top_p:f.value}))},{default:w(()=>[L(h(m.$t("common.save")),1)]),_:1})]),e("div",Qs,[Zs,r(l(j),{size:"small",onClick:a},{default:w(()=>[L(h(m.$t("common.reset")),1)]),_:1})])])]))}});class ta{constructor(){V(this,"timeoutMs");V(this,"apiKey");V(this,"accessToken");V(this,"apiBaseUrl");V(this,"apiModel");V(this,"chatModel");V(this,"reverseProxy");V(this,"socksProxy");V(this,"socksAuth");V(this,"httpsProxy");V(this,"balance");V(this,"siteConfig");V(this,"mailConfig");V(this,"auditConfig")}}class sa{constructor(){V(this,"siteTitle");V(this,"loginEnabled");V(this,"loginSalt");V(this,"registerEnabled");V(this,"registerReview");V(this,"registerMails");V(this,"siteDomain")}}const aa={class:"p-4 space-y-5 min-h-[200px]"},na={class:"space-y-6"},la={class:"flex items-center space-x-4"},oa={class:"flex-shrink-0 w-[100px]"},ia={class:"flex-1"},ra={key:0,class:"flex items-center space-x-4"},da={class:"flex-shrink-0 w-[100px]"},ca={class:"flex-1"},ua={key:1,class:"flex items-center space-x-4"},va={class:"flex-shrink-0 w-[100px]"},ha={class:"flex-1"},fa={key:2,class:"flex items-center space-x-4"},pa={class:"flex-shrink-0 w-[100px]"},ma={class:"flex-1"},ga=e("p",null,[e("a",{target:"_blank",href:"https://chat.openai.com/api/auth/session"},"Get Token")],-1),ba={key:3,class:"flex items-center space-x-4"},xa={class:"flex-shrink-0 w-[100px]"},wa={class:"flex-1"},_a={class:"flex items-center space-x-4"},$a={class:"flex-shrink-0 w-[100px]"},ya={class:"flex-1"},ka={class:"flex items-center space-x-4"},Ca={class:"flex-shrink-0 w-[100px]"},Sa={class:"flex-1"},Ra={class:"flex items-center space-x-4"},za={class:"flex-shrink-0 w-[100px]"},Ta={class:"flex-1"},Ia={class:"flex items-center space-x-4"},Ma={class:"flex-shrink-0 w-[100px]"},Ba={class:"flex-1"},Va={class:"flex items-center space-x-4"},Aa={class:"flex-shrink-0 w-[100px]"},Pa={class:"flex-1"},Ua={class:"flex items-center space-x-4"},Da=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Ea=ae({__name:"About",setup(t){const d=xe(),g=$(!1),b=$(!1),s=$(new ta),f=["ChatGPTAPI","ChatGPTUnofficialProxyAPI"].map(u=>({label:u,key:u,value:u})),k=["gpt-3.5-turbo","gpt-3.5-turbo-0301","gpt-4","gpt-4-0314","gpt-4-32k","gpt-4-32k-0314"].map(u=>({label:u,key:u,value:u}));let a=s.value.apiModel==="ChatGPTAPI";Je(()=>s.value.apiModel,(u,i)=>{a=u==="ChatGPTAPI"});async function m(){try{g.value=!0;const{data:u}=await Ne();s.value=u}finally{g.value=!1}}async function c(u){if(u){b.value=!0;try{const{data:i}=await ts(u);s.value=i,d.success(se("common.success"))}catch(i){d.error(i.message)}b.value=!1}}return De(()=>{m()}),(u,i)=>(M(),Z(l(Ee),{show:g.value},{default:w(()=>[e("div",aa,[e("div",na,[e("div",la,[e("span",oa,h(u.$t("setting.apiModel")),1),e("div",ia,[r(l(Pe),{style:{width:"240px"},value:s.value.apiModel,options:l(f),onUpdateValue:i[0]||(i[0]=v=>{s.value.apiModel=v})},null,8,["value","options"])])]),l(a)?(M(),G("div",ra,[e("span",da,h(u.$t("setting.api")),1),e("div",ca,[r(l(I),{value:s.value.apiKey,placeholder:"",onInput:i[1]||(i[1]=v=>{s.value.apiKey=v})},null,8,["value"])]),e("p",null,h(u.$t("setting.balance"))+"："+h(s.value.balance),1)])):F("",!0),l(a)?(M(),G("div",ua,[e("span",va,h(u.$t("setting.apiBaseUrl")),1),e("div",ha,[r(l(I),{value:s.value.apiBaseUrl,placeholder:"https://api.openai.com",onInput:i[2]||(i[2]=v=>{s.value.apiBaseUrl=v})},null,8,["value"])])])):F("",!0),l(a)?F("",!0):(M(),G("div",fa,[e("span",pa,h(u.$t("setting.accessToken")),1),e("div",ma,[r(l(I),{value:s.value.accessToken,placeholder:"",onInput:i[3]||(i[3]=v=>{s.value.accessToken=v})},null,8,["value"])]),ga])),l(a)?F("",!0):(M(),G("div",ba,[e("span",xa,h(u.$t("setting.reverseProxy")),1),e("div",wa,[r(l(I),{value:s.value.reverseProxy,placeholder:"",onInput:i[4]||(i[4]=v=>{s.value.reverseProxy=v})},null,8,["value"])])])),e("div",_a,[e("span",$a,h(u.$t("setting.chatModel")),1),e("div",ya,[r(l(Pe),{style:{width:"240px"},value:s.value.chatModel,options:l(k),onUpdateValue:i[5]||(i[5]=v=>{s.value.chatModel=v})},null,8,["value","options"])])]),e("div",ka,[e("span",Ca,h(u.$t("setting.timeout")),1),e("div",Sa,[r(l(I),{value:s.value.timeoutMs!==void 0?String(s.value.timeoutMs):void 0,placeholder:"",onInput:i[6]||(i[6]=v=>{s.value.timeoutMs=typeof v=="string"?Number(v):void 0})},null,8,["value"])])]),e("div",Ra,[e("span",za,h(u.$t("setting.socks")),1),e("div",Ta,[r(l(I),{value:s.value.socksProxy,placeholder:"",onInput:i[7]||(i[7]=v=>{s.value.socksProxy=v})},null,8,["value"])])]),e("div",Ia,[e("span",Ma,h(u.$t("setting.socksAuth")),1),e("div",Ba,[r(l(I),{value:s.value.socksAuth,placeholder:"name:pasword",onInput:i[8]||(i[8]=v=>{s.value.socksAuth=v})},null,8,["value"])])]),e("div",Va,[e("span",Aa,h(u.$t("setting.httpsProxy")),1),e("div",Pa,[r(l(I),{value:s.value.httpsProxy,placeholder:"",onInput:i[9]||(i[9]=v=>{s.value.httpsProxy=v})},null,8,["value"])])]),e("div",Ua,[Da,r(l(j),{loading:b.value,type:"primary",onClick:i[10]||(i[10]=v=>c(s.value))},{default:w(()=>[L(h(u.$t("common.save")),1)]),_:1},8,["loading"])])])])]),_:1},8,["show"]))}}),Na={class:"p-4 space-y-5 min-h-[200px]"},Fa={class:"space-y-6"},Ha={class:"flex items-center space-x-4"},Oa={class:"flex-shrink-0 w-[100px]"},Ka={class:"flex-1"},La={class:"flex items-center space-x-4"},ja={class:"flex-shrink-0 w-[100px]"},Wa={class:"flex-1"},Ga={class:"flex items-center space-x-4"},Ya={class:"flex-shrink-0 w-[100px]"},Xa={class:"flex-1"},Ja={class:"flex items-center space-x-4"},qa={class:"flex-shrink-0 w-[100px]"},Qa={class:"flex-1"},Za={class:"flex items-center space-x-4"},en={class:"flex-shrink-0 w-[100px]"},tn={class:"flex-1"},sn={class:"flex items-center space-x-4"},an={class:"flex-shrink-0 w-[100px]"},nn={class:"flex-1"},ln={class:"flex items-center space-x-4"},on={class:"flex-shrink-0 w-[100px]"},rn={class:"flex-1"},dn={class:"flex items-center space-x-4"},cn=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),un=ae({__name:"Site",setup(t){const d=xe(),g=$(!1),b=$(!1),s=$();s.value=new sa;async function f(){try{g.value=!0;const{data:a}=await Ne();s.value=a.siteConfig}finally{g.value=!1}}async function k(a){if(a){b.value=!0;try{const{data:m}=await ns(a);s.value=m,d.success(se("common.success"))}catch(m){d.error(m.message)}b.value=!1}}return De(()=>{f()}),(a,m)=>(M(),Z(l(Ee),{show:g.value},{default:w(()=>[e("div",Na,[e("div",Fa,[e("div",Ha,[e("span",Oa,h(a.$t("setting.siteTitle")),1),e("div",Ka,[r(l(I),{value:s.value&&s.value.siteTitle,placeholder:"",onInput:m[0]||(m[0]=c=>{s.value&&(s.value.siteTitle=c)})},null,8,["value"])])]),e("div",La,[e("span",ja,h(a.$t("setting.siteDomain")),1),e("div",Wa,[r(l(I),{value:s.value&&s.value.siteDomain,placeholder:"",onInput:m[1]||(m[1]=c=>{s.value&&(s.value.siteDomain=c)})},null,8,["value"])])]),e("div",Ga,[e("span",Ya,h(a.$t("setting.loginEnabled")),1),e("div",Xa,[r(l(be),{round:!1,disabled:s.value&&s.value.loginEnabled,value:s.value&&s.value.loginEnabled,"onUpdate:value":m[2]||(m[2]=c=>{s.value&&(s.value.loginEnabled=c)})},null,8,["disabled","value"])])]),e("div",Ja,[e("span",qa,h(a.$t("setting.loginSalt")),1),e("div",Qa,[r(l(I),{value:s.value&&s.value.loginSalt,placeholder:a.$t("setting.loginSaltTip"),onInput:m[3]||(m[3]=c=>{s.value&&(s.value.loginSalt=c)})},null,8,["value","placeholder"])])]),e("div",Za,[e("span",en,h(a.$t("setting.registerEnabled")),1),e("div",tn,[r(l(be),{round:!1,value:s.value&&s.value.registerEnabled,"onUpdate:value":m[4]||(m[4]=c=>{s.value&&(s.value.registerEnabled=c)})},null,8,["value"])])]),ss(e("div",sn,[e("span",an,h(a.$t("setting.registerReview")),1),e("div",nn,[r(l(be),{round:!1,value:s.value&&s.value.registerReview,"onUpdate:value":m[5]||(m[5]=c=>{s.value&&(s.value.registerReview=c)})},null,8,["value"])])],512),[[as,s.value&&s.value.registerEnabled]]),e("div",ln,[e("span",on,h(a.$t("setting.registerMails")),1),e("div",rn,[r(l(I),{value:s.value&&s.value.registerMails,placeholder:"",onInput:m[6]||(m[6]=c=>{s.value&&(s.value.registerMails=c)})},null,8,["value"])])]),e("div",dn,[cn,r(l(j),{loading:b.value,type:"primary",onClick:m[7]||(m[7]=c=>k(s.value))},{default:w(()=>[L(h(a.$t("common.save")),1)]),_:1},8,["loading"])])])])]),_:1},8,["show"]))}}),vn={class:"p-4 space-y-5 min-h-[200px]"},hn={class:"space-y-6"},fn={class:"flex items-center space-x-4"},pn={class:"flex-shrink-0 w-[100px]"},mn={class:"flex-1"},gn={class:"flex items-center space-x-4"},bn={class:"flex-shrink-0 w-[100px]"},xn={class:"flex-1"},wn={class:"flex items-center space-x-4"},_n={class:"flex-shrink-0 w-[100px]"},$n={class:"flex-1"},yn={class:"flex items-center space-x-4"},kn={class:"flex-shrink-0 w-[100px]"},Cn={class:"flex-1"},Sn={class:"flex items-center space-x-4"},Rn={class:"flex-shrink-0 w-[100px]"},zn={class:"flex-1"},Tn={class:"flex items-center space-x-4"},In=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Mn={class:"flex flex-wrap items-center gap-4"},Bn=ae({__name:"Mail",setup(t){const d=xe(),g=$(!1),b=$(!1),s=$(!1),f=$();async function k(){try{g.value=!0;const{data:c}=await Ne();f.value=c.mailConfig}finally{g.value=!1}}async function a(){b.value=!0;try{const{data:c}=await ls(f.value);f.value=c,d.success(se("common.success"))}catch(c){d.error(c.message)}b.value=!1}async function m(){s.value=!0;try{const{message:c}=await os(f.value);d.success(c)}catch(c){d.error(c.message)}s.value=!1}return De(()=>{k()}),(c,u)=>(M(),Z(l(Ee),{show:g.value},{default:w(()=>[e("div",vn,[e("div",hn,[e("div",fn,[e("span",pn,h(c.$t("setting.smtpHost")),1),e("div",mn,[r(l(I),{value:f.value&&f.value.smtpHost,placeholder:"",onInput:u[0]||(u[0]=i=>{f.value&&(f.value.smtpHost=i)})},null,8,["value"])])]),e("div",gn,[e("span",bn,h(c.$t("setting.smtpPort")),1),e("div",xn,[r(l(I),{value:f.value&&f.value.smtpPort!==void 0?String(f.value.smtpPort):void 0,placeholder:"",onInput:u[1]||(u[1]=i=>{f.value&&(f.value.smtpPort=typeof i=="string"?Number(i):void 0)})},null,8,["value"])])]),e("div",wn,[e("span",_n,h(c.$t("setting.smtpTsl")),1),e("div",$n,[r(l(be),{round:!1,value:f.value&&f.value.smtpTsl,"onUpdate:value":u[2]||(u[2]=i=>{f.value&&(f.value.smtpTsl=i)})},null,8,["value"])])]),e("div",yn,[e("span",kn,h(c.$t("setting.smtpUserName")),1),e("div",Cn,[r(l(I),{value:f.value&&f.value.smtpUserName,placeholder:"",onInput:u[3]||(u[3]=i=>{f.value&&(f.value.smtpUserName=i)})},null,8,["value"])])]),e("div",Sn,[e("span",Rn,h(c.$t("setting.smtpPassword")),1),e("div",zn,[r(l(I),{value:f.value&&f.value.smtpPassword,placeholder:"",onInput:u[4]||(u[4]=i=>{f.value&&(f.value.smtpPassword=i)})},null,8,["value"])])]),e("div",Tn,[In,e("div",Mn,[r(l(j),{loading:b.value,type:"primary",onClick:u[5]||(u[5]=i=>a())},{default:w(()=>[L(h(c.$t("common.save")),1)]),_:1},8,["loading"]),r(l(j),{loading:s.value,type:"info",onClick:u[6]||(u[6]=i=>m())},{default:w(()=>[L(h(c.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),Vn={class:"p-4 space-y-5 min-h-[200px]"},An={class:"space-y-6"},Pn={class:"flex items-center space-x-4"},Un={class:"flex-shrink-0 w-[100px]"},Dn={class:"flex-1"},En={key:0,class:"flex items-center space-x-4"},Nn={class:"flex-shrink-0 w-[100px]"},Fn={class:"flex-1"},Hn={class:"flex items-center space-x-4"},On={class:"flex-shrink-0 w-[100px]"},Kn={class:"flex-1"},Ln={key:1,class:"flex items-center space-x-4"},jn={class:"flex-shrink-0 w-[100px]"},Wn={class:"flex-1"},Gn={key:2,class:"flex items-center space-x-4"},Yn={class:"flex-shrink-0 w-[100px]"},Xn={class:"flex-1"},Jn={key:3,class:"flex items-center space-x-4"},qn={class:"flex-shrink-0 w-[100px]"},Qn={class:"flex-1"},Zn={key:4,class:"flex items-center space-x-4"},el={class:"flex-shrink-0 w-[100px]"},tl={class:"flex-1"},sl={key:0},al={target:"_blank",href:"https://ai.baidu.com/ai-doc/ANTIPORN/Nk3h6xbb2#%E7%BB%86%E5%88%86%E6%A0%87%E7%AD%BE%E5%AF%B9%E7%85%A7%E8%A1%A8"},nl={key:5,class:"flex items-center space-x-4"},ll={class:"flex-shrink-0 w-[100px]"},ol={class:"flex-1"},il={class:"flex items-center space-x-4"},rl=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),dl={class:"flex flex-wrap items-center gap-4"},cl=ae({__name:"Audit",setup(t){const d=xe(),g=$(!1),b=$(!1),s=$(!1),f=$(),k=[{label:"百度云",key:"baidu",value:"baidu"}],a=$();async function m(){try{g.value=!0;const{data:i}=await Ne();a.value=i.auditConfig}finally{g.value=!1}}async function c(){b.value=!0;try{const{data:i}=await is(a.value);a.value=i,d.success(se("common.success"))}catch(i){d.error(i.message)}b.value=!1}async function u(){s.value=!0;try{const{message:i}=await rs(f.value,a.value);d.success(i)}catch(i){d.error(i.message)}s.value=!1}return De(()=>{m()}),(i,v)=>(M(),Z(l(Ee),{show:g.value},{default:w(()=>[e("div",Vn,[e("div",An,[e("div",Pn,[e("span",Un,h(i.$t("setting.auditCustomizeEnabled")),1),e("div",Dn,[r(l(be),{round:!1,value:a.value&&a.value.customizeEnabled,"onUpdate:value":v[0]||(v[0]=C=>{a.value&&(a.value.customizeEnabled=C)})},null,8,["value"])])]),a.value&&a.value.customizeEnabled?(M(),G("div",En,[e("span",Nn,h(i.$t("setting.auditCustomizeWords")),1),e("div",Fn,[r(l(I),{value:a.value&&a.value.sensitiveWords,placeholder:"一行一个敏感词 | One word per line",type:"textarea",autosize:{minRows:1,maxRows:4},onInput:v[1]||(v[1]=C=>{a.value&&(a.value.sensitiveWords=C)})},null,8,["value"])])])):F("",!0),e("div",Hn,[e("span",On,h(i.$t("setting.auditEnabled")),1),e("div",Kn,[r(l(be),{round:!1,value:a.value&&a.value.enabled,"onUpdate:value":v[2]||(v[2]=C=>{a.value&&(a.value.enabled=C)})},null,8,["value"])])]),a.value&&a.value.enabled?(M(),G("div",Ln,[e("span",jn,h(i.$t("setting.auditProvider")),1),e("div",Wn,[r(l(Pe),{style:{width:"140px"},value:a.value&&a.value.provider,options:k,onUpdateValue:v[3]||(v[3]=C=>{a.value&&(a.value.provider=C)})},null,8,["value"])])])):F("",!0),a.value&&a.value.enabled?(M(),G("div",Gn,[e("span",Yn,h(i.$t("setting.auditApiKey")),1),e("div",Xn,[r(l(I),{value:a.value&&a.value.options&&a.value.options.apiKey,placeholder:"",onInput:v[4]||(v[4]=C=>{a.value&&a.value.options&&(a.value.options.apiKey=C)})},null,8,["value"])])])):F("",!0),a.value&&a.value.enabled?(M(),G("div",Jn,[e("span",qn,h(i.$t("setting.auditApiSecret")),1),e("div",Qn,[r(l(I),{value:a.value&&a.value.options&&a.value.options.apiSecret,placeholder:"",onInput:v[5]||(v[5]=C=>{a.value&&a.value.options&&(a.value.options.apiSecret=C)})},null,8,["value"])])])):F("",!0),a.value&&a.value.enabled?(M(),G("div",Zn,[e("span",el,h(i.$t("setting.auditBaiduLabel")),1),e("div",tl,[r(l(I),{value:a.value&&a.value.options&&a.value.options.label,placeholder:i.$t("setting.auditBaiduLabelTip"),onInput:v[6]||(v[6]=C=>{a.value&&a.value.options&&(a.value.options.label=C)})},null,8,["value","placeholder"])]),a.value&&a.value.provider==="baidu"?(M(),G("p",sl,[e("a",al,h(i.$t("setting.auditBaiduLabelLink")),1)])):F("",!0)])):F("",!0),a.value&&(a.value.enabled||a.value.customizeEnabled)?(M(),G("div",nl,[e("span",ll,h(i.$t("setting.auditTest")),1),e("div",ol,[r(l(I),{value:f.value,"onUpdate:value":v[7]||(v[7]=C=>f.value=C),placeholder:""},null,8,["value"])])])):F("",!0),e("div",il,[rl,e("div",dl,[r(l(j),{loading:b.value,type:"primary",onClick:v[8]||(v[8]=C=>c())},{default:w(()=>[L(h(i.$t("common.save")),1)]),_:1},8,["loading"]),r(l(j),{loading:s.value,type:"info",onClick:v[9]||(v[9]=C=>u())},{default:w(()=>[L(h(i.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),ul={class:"ml-2"},vl={class:"min-h-[100px]"},hl={class:"ml-2"},fl={class:"min-h-[100px]"},pl={class:"ml-2"},ml={class:"ml-2"},gl={class:"ml-2"},bl={class:"ml-2"},_l=ae({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(t,{emit:d}){const g=t,b=ut(),s=ds(),f=E(()=>!!s.isChatGPTAPI),k=$("General"),a=E({get(){return g.visible},set(m){d("update:visible",m)}});return(m,c)=>(M(),Z(l(vs),{show:l(a),"onUpdate:show":c[1]||(c[1]=u=>us(a)?a.value=u:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"1024px"}},{default:w(()=>[e("div",null,[r(l(cs),{value:k.value,"onUpdate:value":c[0]||(c[0]=u=>k.value=u),type:"line",animated:""},{default:w(()=>[r(l(ge),{name:"General",tab:"General"},{tab:w(()=>[r(l(Q),{class:"text-lg",icon:"ri:file-user-line"}),e("span",ul,h(m.$t("setting.general")),1)]),default:w(()=>[e("div",vl,[r(Fs)])]),_:1}),l(f)?(M(),Z(l(ge),{key:0,name:"Advanced",tab:"Advanced"},{tab:w(()=>[r(l(Q),{class:"text-lg",icon:"ri:equalizer-line"}),e("span",hl,h(m.$t("setting.advanced")),1)]),default:w(()=>[e("div",fl,[r(ea)])]),_:1})):F("",!0),l(b).userInfo.root?(M(),Z(l(ge),{key:1,name:"Config",tab:"Config"},{tab:w(()=>[r(l(Q),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",pl,h(m.$t("setting.config")),1)]),default:w(()=>[r(Ea)]),_:1})):F("",!0),l(b).userInfo.root?(M(),Z(l(ge),{key:2,name:"SiteConfig",tab:"SiteConfig"},{tab:w(()=>[r(l(Q),{class:"text-lg",icon:"ri:settings-line"}),e("span",ml,h(m.$t("setting.siteConfig")),1)]),default:w(()=>[r(un)]),_:1})):F("",!0),l(b).userInfo.root?(M(),Z(l(ge),{key:3,name:"MailConfig",tab:"MailConfig"},{tab:w(()=>[r(l(Q),{class:"text-lg",icon:"ri:mail-line"}),e("span",gl,h(m.$t("setting.mailConfig")),1)]),default:w(()=>[r(Bn)]),_:1})):F("",!0),l(b).userInfo.root?(M(),Z(l(ge),{key:4,name:"AuditConfig",tab:"AuditConfig"},{tab:w(()=>[r(l(Q),{class:"text-lg",icon:"ri:settings-line"}),e("span",bl,h(m.$t("setting.auditConfig")),1)]),default:w(()=>[r(cl)]),_:1})):F("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{_l as default};
