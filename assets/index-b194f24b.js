var Mt=Object.defineProperty;var Vt=(t,c,g)=>c in t?Mt(t,c,{enumerable:!0,configurable:!0,writable:!0,value:g}):t[c]=g;var A=(t,c,g)=>(Vt(t,typeof c!="symbol"?c+"":c,g),g);import{r as y,al as At,c as re,a as x,am as V,an as C,f as Ze,ao as Ut,ap as Pt,d as ae,u as ot,g as Ue,aq as Dt,b as it,h as E,t as rt,e as dt,ar as et,as as Et,i as Xe,j as Nt,k as Je,l as R,V as Ft,m as Ht,at as Ot,o as jt,T as Kt,au as Ve,av as Ae,Y as We,z as Ce,aw as tt,ax as st,ay as Lt,az as ce,aA as Ge,aB as te,aC as Ye,aD as ue,aE as Wt,aF as Gt,a2 as Yt,A as ct,O as Xt,a1 as xe,B,C as G,J as e,Q as v,U as d,D as l,N as I,S as Jt,W as w,_ as Q,af as K,ag as L,aG as qt,I as Qt,ae as Zt,aH as ut,P as se,aI as es,aJ as ts,a6 as vt,$ as Pe,F as Z,R as F,ah as De,aK as Ee,aL as ss,w as as,aM as ns,aN as ls,aO as os,aP as is,aQ as rs,aR as ds,aS as cs,aT as ge,ab as us,aU as vs}from"./index-aa375069.js";function at(t){return window.TouchEvent&&t instanceof window.TouchEvent}function nt(){const t=y(new Map),c=g=>b=>{t.value.set(g,b)};return At(()=>t.value.clear()),[t,c]}const hs=re([x("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[V("reverse",[x("slider-handles",[x("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),x("slider-dots",[x("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),V("vertical",[x("slider-handles",[x("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),x("slider-marks",[x("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),x("slider-dots",[x("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),V("vertical",`
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
 `,[C("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),V("with-mark",`
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
 `)])]),V("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[x("slider-handle",`
 cursor: not-allowed;
 `)]),V("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),re("&:hover",[x("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[C("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),x("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),V("active",[x("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[C("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),x("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),x("slider-marks",`
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
 `,[C("fill",`
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
 `,[V("transition-disabled",[x("slider-dot","transition: none;")]),x("slider-dot",`
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
 `,[V("active","border: var(--n-dot-border-active);")])])]),x("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ze()]),x("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[V("top",`
 margin-bottom: 12px;
 `),V("right",`
 margin-left: 12px;
 `),V("bottom",`
 margin-top: 12px;
 `),V("left",`
 margin-right: 12px;
 `),Ze()]),Ut(x("slider",[x("slider-dot","background-color: var(--n-dot-color-modal);")])),Pt(x("slider",[x("slider-dot","background-color: var(--n-dot-color-popover);")]))]),fs=0,ps=Object.assign(Object.assign({},Ue.props),{to:Je.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),lt=ae({name:"Slider",props:ps,setup(t){const{mergedClsPrefixRef:c,namespaceRef:g,inlineThemeDisabled:b}=ot(t),o=Ue("Slider","-slider",hs,Dt,t,c),s=y(null),[$,n]=nt(),[p,i]=nt(),h=y(new Set),m=it(t),{mergedDisabledRef:u}=m,S=E(()=>{const{step:a}=t;if(a<=0||a==="mark")return 0;const r=a.toString();let f=0;return r.includes(".")&&(f=r.length-r.indexOf(".")-1),f}),W=y(t.defaultValue),we=rt(t,"value"),de=dt(we,W),H=E(()=>{const{value:a}=de;return(t.range?a:[a]).map(le)}),z=E(()=>H.value.length>2),U=E(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),M=E(()=>{const{marks:a}=t;return a?Object.keys(a).map(parseFloat):null}),P=y(-1),J=y(-1),D=y(-1),k=y(!1),ee=y(!1),ne=E(()=>{const{vertical:a,reverse:r}=t;return a?r?"top":"bottom":r?"right":"left"}),ve=E(()=>{if(z.value)return;const a=H.value,r=he(t.range?Math.min(...a):t.min),f=he(t.range?Math.max(...a):a[0]),{value:_}=ne;return t.vertical?{[_]:`${r}%`,height:`${f-r}%`}:{[_]:`${r}%`,width:`${f-r}%`}}),_e=E(()=>{const a=[],{marks:r}=t;if(r){const f=H.value.slice();f.sort((O,j)=>O-j);const{value:_}=ne,{value:T}=z,{range:N}=t,q=T?()=>!1:O=>N?O>=f[0]&&O<=f[f.length-1]:O<=f[0];for(const O of Object.keys(r)){const j=Number(O);a.push({active:q(j),label:r[O],style:{[_]:`${he(j)}%`}})}}return a});function $e(a,r){const f=he(a),{value:_}=ne;return{[_]:`${f}%`,zIndex:r===P.value?1:0}}function Re(a){return t.showTooltip||D.value===a||P.value===a&&k.value}function Ne(a){return k.value?!(P.value===a&&J.value===a):!0}function Fe(a){var r;~a&&(P.value=a,(r=$.value.get(a))===null||r===void 0||r.focus())}function He(){p.value.forEach((a,r)=>{Re(r)&&a.syncPosition()})}function X(a){const{"onUpdate:value":r,onUpdateValue:f}=t,{nTriggerFormInput:_,nTriggerFormChange:T}=m;f&&Ce(f,a),r&&Ce(r,a),W.value=a,_(),T()}function ze(a){const{range:r}=t;if(r){if(Array.isArray(a)){const{value:f}=H;a.join()!==f.join()&&X(a)}}else Array.isArray(a)||H.value[0]!==a&&X(a)}function ye(a,r){if(t.range){const f=H.value.slice();f.splice(r,1,a),ze(f)}else ze(a)}function Y(a,r,f){const _=f!==void 0;f||(f=a-r>0?1:-1);const T=M.value||[],{step:N}=t;if(N==="mark"){const j=oe(a,T.concat(r),_?f:void 0);return j?j.value:r}if(N<=0)return r;const{value:q}=S;let O;if(_){const j=Number((r/N).toFixed(q)),ie=Math.floor(j),Ke=j>ie?ie:ie-1,Le=j<ie?ie:ie+1;O=oe(r,[Number((Ke*N).toFixed(q)),Number((Le*N).toFixed(q)),...T],f)}else{const j=je(a);O=oe(a,[...T,j])}return O?le(O.value):r}function le(a){return Math.min(t.max,Math.max(t.min,a))}function he(a){const{max:r,min:f}=t;return(a-f)/(r-f)*100}function Oe(a){const{max:r,min:f}=t;return f+(r-f)*a}function je(a){const{step:r,min:f}=t;if(r<=0||r==="mark")return a;const _=Math.round((a-f)/r)*r+f;return Number(_.toFixed(S.value))}function oe(a,r=M.value,f){if(!(r!=null&&r.length))return null;let _=null,T=-1;for(;++T<r.length;){const N=r[T]-a,q=Math.abs(N);(f===void 0||N*f>0)&&(_===null||q<_.distance)&&(_={index:T,distance:q,value:r[T]})}return _}function fe(a){const r=s.value;if(!r)return;const f=at(a)?a.touches[0]:a,_=r.getBoundingClientRect();let T;return t.vertical?T=(_.bottom-f.clientY)/_.height:T=(f.clientX-_.left)/_.width,t.reverse&&(T=1-T),Oe(T)}function ke(a){if(u.value||!t.keyboard)return;const{vertical:r,reverse:f}=t;switch(a.key){case"ArrowUp":a.preventDefault(),Te(r&&f?-1:1);break;case"ArrowRight":a.preventDefault(),Te(!r&&f?-1:1);break;case"ArrowDown":a.preventDefault(),Te(r&&f?1:-1);break;case"ArrowLeft":a.preventDefault(),Te(!r&&f?1:-1);break}}function Te(a){const r=P.value;if(r===-1)return;const{step:f}=t,_=H.value[r],T=f<=0||f==="mark"?_:_+f*a;ye(Y(T,_,a>0?1:-1),r)}function ht(a){var r,f;if(u.value||!at(a)&&a.button!==fs)return;const _=fe(a);if(_===void 0)return;const T=H.value.slice(),N=t.range?(f=(r=oe(_,T))===null||r===void 0?void 0:r.index)!==null&&f!==void 0?f:-1:0;N!==-1&&(a.preventDefault(),Fe(N),ft(),ye(Y(_,H.value[N]),N))}function ft(){k.value||(k.value=!0,Ve("touchend",document,Me),Ve("mouseup",document,Me),Ve("touchmove",document,Be),Ve("mousemove",document,Be))}function Ie(){k.value&&(k.value=!1,Ae("touchend",document,Me),Ae("mouseup",document,Me),Ae("touchmove",document,Be),Ae("mousemove",document,Be))}function Be(a){const{value:r}=P;if(!k.value||r===-1){Ie();return}const f=fe(a);ye(Y(f,H.value[r]),r)}function Me(){Ie()}function pt(a){P.value=a,u.value||(D.value=a)}function mt(a){P.value===a&&(P.value=-1,Ie()),D.value===a&&(D.value=-1)}function gt(a){D.value=a}function bt(a){D.value===a&&(D.value=-1)}et(P,(a,r)=>void We(()=>J.value=r)),et(de,()=>{if(t.marks){if(ee.value)return;ee.value=!0,We(()=>{ee.value=!1})}We(He)}),Et(()=>{Ie()});const qe=E(()=>{const{self:{markFontSize:a,railColor:r,railColorHover:f,fillColor:_,fillColorHover:T,handleColor:N,opacityDisabled:q,dotColor:O,dotColorModal:j,handleBoxShadow:ie,handleBoxShadowHover:Ke,handleBoxShadowActive:Le,handleBoxShadowFocus:xt,dotBorder:wt,dotBoxShadow:_t,railHeight:$t,railWidthVertical:yt,handleSize:kt,dotHeight:St,dotWidth:Ct,dotBorderRadius:Rt,fontSize:zt,dotBorderActive:Tt,dotColorPopover:It},common:{cubicBezierEaseInOut:Bt}}=o.value;return{"--n-bezier":Bt,"--n-dot-border":wt,"--n-dot-border-active":Tt,"--n-dot-border-radius":Rt,"--n-dot-box-shadow":_t,"--n-dot-color":O,"--n-dot-color-modal":j,"--n-dot-color-popover":It,"--n-dot-height":St,"--n-dot-width":Ct,"--n-fill-color":_,"--n-fill-color-hover":T,"--n-font-size":zt,"--n-handle-box-shadow":ie,"--n-handle-box-shadow-active":Le,"--n-handle-box-shadow-focus":xt,"--n-handle-box-shadow-hover":Ke,"--n-handle-color":N,"--n-handle-size":kt,"--n-opacity-disabled":q,"--n-rail-color":r,"--n-rail-color-hover":f,"--n-rail-height":$t,"--n-rail-width-vertical":yt,"--n-mark-font-size":a}}),pe=b?Xe("slider",void 0,qe,t):void 0,Qe=E(()=>{const{self:{fontSize:a,indicatorColor:r,indicatorBoxShadow:f,indicatorTextColor:_,indicatorBorderRadius:T}}=o.value;return{"--n-font-size":a,"--n-indicator-border-radius":T,"--n-indicator-box-shadow":f,"--n-indicator-color":r,"--n-indicator-text-color":_}}),me=b?Xe("slider-indicator",void 0,Qe,t):void 0;return{mergedClsPrefix:c,namespace:g,uncontrolledValue:W,mergedValue:de,mergedDisabled:u,mergedPlacement:U,isMounted:Nt(),adjustedTo:Je(t),dotTransitionDisabled:ee,markInfos:_e,isShowTooltip:Re,shouldKeepTooltipTransition:Ne,handleRailRef:s,setHandleRefs:n,setFollowerRefs:i,fillStyle:ve,getHandleStyle:$e,activeIndex:P,arrifiedValues:H,followerEnabledIndexSet:h,handleRailMouseDown:ht,handleHandleFocus:pt,handleHandleBlur:mt,handleHandleMouseEnter:gt,handleHandleMouseLeave:bt,handleRailKeyDown:ke,indicatorCssVars:b?void 0:Qe,indicatorThemeClass:me==null?void 0:me.themeClass,indicatorOnRender:me==null?void 0:me.onRender,cssVars:b?void 0:qe,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender}},render(){var t;const{mergedClsPrefix:c,themeClass:g,formatTooltip:b}=this;return(t=this.onRender)===null||t===void 0||t.call(this),R("div",{class:[`${c}-slider`,g,{[`${c}-slider--disabled`]:this.mergedDisabled,[`${c}-slider--active`]:this.activeIndex!==-1,[`${c}-slider--with-mark`]:this.marks,[`${c}-slider--vertical`]:this.vertical,[`${c}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},R("div",{class:`${c}-slider-rail`},R("div",{class:`${c}-slider-rail__fill`,style:this.fillStyle}),this.marks?R("div",{class:[`${c}-slider-dots`,this.dotTransitionDisabled&&`${c}-slider-dots--transition-disabled`]},this.markInfos.map(o=>R("div",{key:o.label,class:[`${c}-slider-dot`,{[`${c}-slider-dot--active`]:o.active}],style:o.style}))):null,R("div",{ref:"handleRailRef",class:`${c}-slider-handles`},this.arrifiedValues.map((o,s)=>{const $=this.isShowTooltip(s);return R(Ft,null,{default:()=>[R(Ht,null,{default:()=>R("div",{ref:this.setHandleRefs(s),class:`${c}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(o,s),onFocus:()=>this.handleHandleFocus(s),onBlur:()=>this.handleHandleBlur(s),onMouseenter:()=>this.handleHandleMouseEnter(s),onMouseleave:()=>this.handleHandleMouseLeave(s)},Ot(this.$slots.thumb,()=>[R("div",{class:`${c}-slider-handle`})]))}),this.tooltip&&R(jt,{ref:this.setFollowerRefs(s),show:$,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(s),teleportDisabled:this.adjustedTo===Je.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>R(Kt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(s),onEnter:()=>{this.followerEnabledIndexSet.add(s)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(s)}},{default:()=>{var n;return $?((n=this.indicatorOnRender)===null||n===void 0||n.call(this),R("div",{class:[`${c}-slider-handle-indicator`,this.indicatorThemeClass,`${c}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof b=="function"?b(o):o)):null}})})]})})),this.marks?R("div",{class:`${c}-slider-marks`},this.markInfos.map(o=>R("div",{key:o.label,class:`${c}-slider-mark`,style:o.style},o.label))):null))}}),ms=x("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[C("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),C("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),C("button-placeholder",`
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
 `,[tt({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),C("checked, unchecked",`
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
 `),C("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),C("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),re("&:focus",[C("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),V("round",[C("rail","border-radius: calc(var(--n-rail-height) / 2);",[C("button","border-radius: calc(var(--n-button-height) / 2);")])]),st("disabled",[st("icon",[V("rubber-band",[V("pressed",[C("rail",[C("button","max-width: var(--n-button-width-pressed);")])]),C("rail",[re("&:active",[C("button","max-width: var(--n-button-width-pressed);")])]),V("active",[V("pressed",[C("rail",[C("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),C("rail",[re("&:active",[C("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),V("active",[C("rail",[C("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),C("rail",`
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
 `,[C("button-icon",`
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
 `,[tt()]),C("button",`
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
 `)]),V("active",[C("rail","background-color: var(--n-rail-color-active);")]),V("loading",[C("rail",`
 cursor: wait;
 `)]),V("disabled",[C("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),gs=Object.assign(Object.assign({},Ue.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Se;const be=ae({name:"Switch",props:gs,setup(t){Se===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Se=CSS.supports("width","max(1px)"):Se=!1:Se=!0);const{mergedClsPrefixRef:c,inlineThemeDisabled:g}=ot(t),b=Ue("Switch","-switch",ms,Lt,t,c),o=it(t),{mergedSizeRef:s,mergedDisabledRef:$}=o,n=y(t.defaultValue),p=rt(t,"value"),i=dt(p,n),h=E(()=>i.value===t.checkedValue),m=y(!1),u=y(!1),S=E(()=>{const{railStyle:k}=t;if(k)return k({focused:u.value,checked:h.value})});function W(k){const{"onUpdate:value":ee,onChange:ne,onUpdateValue:ve}=t,{nTriggerFormInput:_e,nTriggerFormChange:$e}=o;ee&&Ce(ee,k),ve&&Ce(ve,k),ne&&Ce(ne,k),n.value=k,_e(),$e()}function we(){const{nTriggerFormFocus:k}=o;k()}function de(){const{nTriggerFormBlur:k}=o;k()}function H(){t.loading||$.value||(i.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue))}function z(){u.value=!0,we()}function U(){u.value=!1,de(),m.value=!1}function M(k){t.loading||$.value||k.key===" "&&(i.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue),m.value=!1)}function P(k){t.loading||$.value||k.key===" "&&(k.preventDefault(),m.value=!0)}const J=E(()=>{const{value:k}=s,{self:{opacityDisabled:ee,railColor:ne,railColorActive:ve,buttonBoxShadow:_e,buttonColor:$e,boxShadowFocus:Re,loadingColor:Ne,textColor:Fe,iconColor:He,[ce("buttonHeight",k)]:X,[ce("buttonWidth",k)]:ze,[ce("buttonWidthPressed",k)]:ye,[ce("railHeight",k)]:Y,[ce("railWidth",k)]:le,[ce("railBorderRadius",k)]:he,[ce("buttonBorderRadius",k)]:Oe},common:{cubicBezierEaseInOut:je}}=b.value;let oe,fe,ke;return Se?(oe=`calc((${Y} - ${X}) / 2)`,fe=`max(${Y}, ${X})`,ke=`max(${le}, calc(${le} + ${X} - ${Y}))`):(oe=Ge((te(Y)-te(X))/2),fe=Ge(Math.max(te(Y),te(X))),ke=te(Y)>te(X)?le:Ge(te(le)+te(X)-te(Y))),{"--n-bezier":je,"--n-button-border-radius":Oe,"--n-button-box-shadow":_e,"--n-button-color":$e,"--n-button-width":ze,"--n-button-width-pressed":ye,"--n-button-height":X,"--n-height":fe,"--n-offset":oe,"--n-opacity-disabled":ee,"--n-rail-border-radius":he,"--n-rail-color":ne,"--n-rail-color-active":ve,"--n-rail-height":Y,"--n-rail-width":le,"--n-width":ke,"--n-box-shadow-focus":Re,"--n-loading-color":Ne,"--n-text-color":Fe,"--n-icon-color":He}}),D=g?Xe("switch",E(()=>s.value[0]),J,t):void 0;return{handleClick:H,handleBlur:U,handleFocus:z,handleKeyup:M,handleKeydown:P,mergedRailStyle:S,pressed:m,mergedClsPrefix:c,mergedValue:i,checked:h,mergedDisabled:$,cssVars:g?void 0:J,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:c,checked:g,mergedRailStyle:b,onRender:o,$slots:s}=this;o==null||o();const{checked:$,unchecked:n,icon:p,"checked-icon":i,"unchecked-icon":h}=s,m=!(Ye(p)&&Ye(i)&&Ye(h));return R("div",{role:"switch","aria-checked":g,class:[`${t}-switch`,this.themeClass,m&&`${t}-switch--icon`,g&&`${t}-switch--active`,c&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},R("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:b},ue($,u=>ue(n,S=>u||S?R("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),u),R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),S)):null)),R("div",{class:`${t}-switch__button`},ue(p,u=>ue(i,S=>ue(h,W=>R(Wt,null,{default:()=>this.loading?R(Gt,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(S||u)?R("div",{class:`${t}-switch__button-icon`,key:S?"checked-icon":"icon"},S||u):!this.checked&&(W||u)?R("div",{class:`${t}-switch__button-icon`,key:W?"unchecked-icon":"icon"},W||u):null})))),ue($,u=>u&&R("div",{key:"checked",class:`${t}-switch__checked`},u)),ue(n,u=>u&&R("div",{key:"unchecked",class:`${t}-switch__unchecked`},u)))))}});function bs(){const t=new Date,c=t.getDate(),g=t.getMonth()+1;return`${t.getFullYear()}-${g}-${c}`}const xs={class:"p-4 space-y-5 min-h-[200px]"},ws={class:"space-y-6"},_s={class:"flex items-center space-x-4"},$s={class:"flex-shrink-0 w-[100px]"},ys={class:"w-[200px]"},ks={class:"flex items-center space-x-4"},Ss={class:"flex-shrink-0 w-[100px]"},Cs={class:"flex-1"},Rs={class:"flex items-center space-x-4"},zs={class:"flex-shrink-0 w-[100px]"},Ts={class:"flex-1"},Is={class:"flex-shrink-0 w-[100px]"},Bs={class:"flex flex-wrap items-center gap-4"},Ms={class:"flex items-center space-x-4"},Vs={class:"flex-shrink-0 w-[100px]"},As={class:"flex flex-wrap items-center gap-4"},Us={class:"flex items-center space-x-4"},Ps={class:"flex-shrink-0 w-[100px]"},Ds={class:"flex flex-wrap items-center gap-4"},Es={class:"flex items-center space-x-4"},Ns={class:"flex-shrink-0 w-[100px]"},Fs=ae({__name:"General",setup(t){const c=Yt(),g=ct(),{isMobile:b}=Xt(),o=xe(),s=E(()=>c.theme),$=E(()=>g.userInfo),n=y($.value.avatar??""),p=y($.value.name??""),i=y($.value.description??""),h=E({get(){return c.language},set(z){c.setLanguage(z)}}),m=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],u=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"}];async function S(z){await g.updateUserInfo(!0,z),o.success(se("common.success"))}function W(){const z=bs(),U=localStorage.getItem("chatStorage")||"{}",M=JSON.stringify(JSON.parse(U),null,2),P=new Blob([M],{type:"application/json"}),J=URL.createObjectURL(P),D=document.createElement("a");D.href=J,D.download=`chat-store_${z}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}function we(z){const U=z.target;if(!U||!U.files)return;const M=U.files[0];if(!M)return;const P=new FileReader;P.onload=()=>{try{const J=JSON.parse(P.result);localStorage.setItem("chatStorage",JSON.stringify(J)),o.success(se("common.success")),location.reload()}catch{o.error(se("common.invalidFileFormat"))}},P.readAsText(M)}async function de(){await es(),localStorage.removeItem("chatStorage"),location.reload()}function H(){const z=document.getElementById("fileInput");z&&z.click()}return(z,U)=>(B(),G("div",xs,[e("div",ws,[e("div",_s,[e("span",$s,v(z.$t("setting.name")),1),e("div",ys,[d(l(I),{value:p.value,"onUpdate:value":U[0]||(U[0]=M=>p.value=M),placeholder:""},null,8,["value"])])]),e("div",ks,[e("span",Ss,v(z.$t("setting.description")),1),e("div",Cs,[d(l(I),{value:i.value,"onUpdate:value":U[1]||(U[1]=M=>i.value=M),placeholder:""},null,8,["value"])])]),e("div",Rs,[e("span",zs,v(z.$t("setting.avatarLink")),1),e("div",Ts,[d(l(I),{value:n.value,"onUpdate:value":U[2]||(U[2]=M=>n.value=M),placeholder:""},null,8,["value"])])]),e("div",{class:Jt(["flex items-center space-x-4",l(b)&&"items-start"])},[e("span",Is,v(z.$t("setting.chatHistory")),1),e("div",Bs,[d(l(L),{size:"small",onClick:W},{icon:w(()=>[d(l(Q),{icon:"ri:download-2-fill"})]),default:w(()=>[K(" "+v(z.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:we},null,32),d(l(L),{size:"small",onClick:H},{icon:w(()=>[d(l(Q),{icon:"ri:upload-2-fill"})]),default:w(()=>[K(" "+v(z.$t("common.import")),1)]),_:1}),d(l(qt),{placement:"bottom",onPositiveClick:de},{trigger:w(()=>[d(l(L),{size:"small"},{icon:w(()=>[d(l(Q),{icon:"ri:close-circle-line"})]),default:w(()=>[K(" "+v(z.$t("common.clear")),1)]),_:1})]),default:w(()=>[K(" "+v(z.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",Ms,[e("span",Vs,v(z.$t("setting.theme")),1),e("div",As,[(B(),G(Qt,null,Zt(m,M=>d(l(L),{key:M.key,size:"small",type:M.key===l(s)?"primary":void 0,onClick:P=>l(c).setTheme(M.key)},{icon:w(()=>[d(l(Q),{icon:M.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",Us,[e("span",Ps,v(z.$t("setting.language")),1),e("div",Ds,[d(l(ut),{style:{width:"140px"},value:l(h),options:u,onUpdateValue:U[3]||(U[3]=M=>l(c).setLanguage(M))},null,8,["value"])])]),e("div",Es,[e("span",Ns,v(z.$t("setting.saveUserInfo")),1),d(l(L),{type:"primary",onClick:U[4]||(U[4]=M=>S({avatar:n.value,name:p.value,description:i.value}))},{default:w(()=>[K(v(z.$t("common.save")),1)]),_:1})])])]))}}),Hs={class:"p-4 space-y-5 min-h-[200px]"},Os={class:"space-y-6"},js={class:"flex items-center space-x-4"},Ks={class:"flex-shrink-0 w-[120px]"},Ls={class:"flex-1"},Ws={class:"flex items-center space-x-4"},Gs={class:"flex-shrink-0 w-[120px]"},Ys={class:"flex-1"},Xs={class:"flex items-center space-x-4"},Js={class:"flex-shrink-0 w-[120px]"},qs={class:"flex-1"},Qs={class:"flex items-center space-x-4"},Zs=e("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),ea=ae({__name:"Advanced",setup(t){const c=ts(),g=xe(),b=y(c.systemMessage??""),o=y(c.temperature??.5),s=y(c.top_p??1);function $(p){c.updateSetting(p),g.success(se("common.success"))}function n(){c.resetSetting(),g.success(se("common.success")),window.location.reload()}return(p,i)=>(B(),G("div",Hs,[e("div",Os,[e("div",js,[e("span",Ks,v(p.$t("setting.role")),1),e("div",Ls,[d(l(I),{value:b.value,"onUpdate:value":i[0]||(i[0]=h=>b.value=h),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),d(l(L),{size:"tiny",text:"",type:"primary",onClick:i[1]||(i[1]=h=>$({systemMessage:b.value}))},{default:w(()=>[K(v(p.$t("common.save")),1)]),_:1})]),e("div",Ws,[e("span",Gs,v(p.$t("setting.temperature")),1),e("div",Ys,[d(l(lt),{value:o.value,"onUpdate:value":i[2]||(i[2]=h=>o.value=h),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,v(o.value),1),d(l(L),{size:"tiny",text:"",type:"primary",onClick:i[3]||(i[3]=h=>$({temperature:o.value}))},{default:w(()=>[K(v(p.$t("common.save")),1)]),_:1})]),e("div",Xs,[e("span",Js,v(p.$t("setting.top_p")),1),e("div",qs,[d(l(lt),{value:s.value,"onUpdate:value":i[4]||(i[4]=h=>s.value=h),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,v(s.value),1),d(l(L),{size:"tiny",text:"",type:"primary",onClick:i[5]||(i[5]=h=>$({top_p:s.value}))},{default:w(()=>[K(v(p.$t("common.save")),1)]),_:1})]),e("div",Qs,[Zs,d(l(L),{size:"small",onClick:n},{default:w(()=>[K(v(p.$t("common.reset")),1)]),_:1})])])]))}});class ta{constructor(){A(this,"timeoutMs");A(this,"apiKey");A(this,"accessToken");A(this,"apiBaseUrl");A(this,"apiModel");A(this,"reverseProxy");A(this,"socksProxy");A(this,"socksAuth");A(this,"httpsProxy");A(this,"balance");A(this,"siteConfig");A(this,"mailConfig");A(this,"auditConfig")}}class sa{constructor(){A(this,"siteTitle");A(this,"loginEnabled");A(this,"loginSalt");A(this,"registerEnabled");A(this,"registerReview");A(this,"registerMails");A(this,"siteDomain")}}const aa={class:"p-4 space-y-5 min-h-[200px]"},na={class:"space-y-6"},la={class:"flex items-center space-x-4"},oa={class:"flex-shrink-0 w-[100px]"},ia={class:"flex-1"},ra={key:0},da={key:0,class:"flex items-center space-x-4"},ca={class:"flex-shrink-0 w-[100px]"},ua={class:"flex-1"},va={key:1,class:"flex items-center space-x-4"},ha={class:"flex-shrink-0 w-[100px]"},fa={class:"flex-1"},pa={class:"flex items-center space-x-4"},ma={class:"flex-shrink-0 w-[100px]"},ga={class:"flex-1"},ba={key:2,class:"flex items-center space-x-4"},xa={class:"flex-shrink-0 w-[100px]"},wa={class:"flex-1"},_a={class:"flex items-center space-x-4"},$a={class:"flex-shrink-0 w-[100px]"},ya={class:"flex-1"},ka={class:"flex items-center space-x-4"},Sa={class:"flex-shrink-0 w-[100px]"},Ca={class:"flex-1"},Ra={class:"flex items-center space-x-4"},za={class:"flex-shrink-0 w-[100px]"},Ta={class:"flex-1"},Ia={class:"flex items-center space-x-4"},Ba={class:"flex-shrink-0 w-[100px]"},Ma={class:"flex-1"},Va={class:"flex items-center space-x-4"},Aa=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Ua=ae({__name:"About",setup(t){const c=xe(),g=vt(),b=y(!1),o=y(!1),s=y();s.value=new ta;const $=E(()=>!!g.isChatGPTAPI);async function n(){try{b.value=!0;const{data:i}=await Ee();s.value=i}finally{b.value=!1}}async function p(i){if(i){o.value=!0;try{const{data:h}=await ss(i);s.value=h,c.success(se("common.success"))}catch(h){c.error(h.message)}o.value=!1}}return Pe(()=>{n()}),(i,h)=>(B(),Z(l(De),{show:b.value},{default:w(()=>{var m;return[e("div",aa,[e("div",na,[e("div",la,[e("span",oa,v(i.$t("setting.api")),1),e("div",ia,[d(l(I),{value:s.value&&s.value.apiKey,placeholder:"",onInput:h[0]||(h[0]=u=>{s.value&&(s.value.apiKey=u)})},null,8,["value"])]),l($)?(B(),G("p",ra,v(i.$t("setting.balance"))+"："+v(((m=s.value)==null?void 0:m.balance)??"-"),1)):F("",!0)]),l($)?(B(),G("div",da,[e("span",ca,v(i.$t("setting.apiBaseUrl")),1),e("div",ua,[d(l(I),{value:s.value&&s.value.apiBaseUrl,placeholder:"https://api.openai.com",onInput:h[1]||(h[1]=u=>{s.value&&(s.value.apiBaseUrl=u)})},null,8,["value"])])])):F("",!0),l($)?(B(),G("div",va,[e("span",ha,v(i.$t("setting.apiModel")),1),e("div",fa,[d(l(I),{value:s.value&&s.value.apiModel,placeholder:"",onInput:h[2]||(h[2]=u=>{s.value&&(s.value.apiModel=u)})},null,8,["value"])])])):F("",!0),e("div",pa,[e("span",ma,v(i.$t("setting.accessToken")),1),e("div",ga,[d(l(I),{value:s.value&&s.value.accessToken,placeholder:"",onInput:h[3]||(h[3]=u=>{s.value&&(s.value.accessToken=u)})},null,8,["value"])])]),l($)?F("",!0):(B(),G("div",ba,[e("span",xa,v(i.$t("setting.reverseProxy")),1),e("div",wa,[d(l(I),{value:s.value&&s.value.reverseProxy,placeholder:"",onInput:h[4]||(h[4]=u=>{s.value&&(s.value.reverseProxy=u)})},null,8,["value"])])])),e("div",_a,[e("span",$a,v(i.$t("setting.timeout")),1),e("div",ya,[d(l(I),{value:s.value&&s.value.timeoutMs!==void 0?String(s.value.timeoutMs):void 0,placeholder:"",onInput:h[5]||(h[5]=u=>{s.value&&(s.value.timeoutMs=typeof u=="string"?Number(u):void 0)})},null,8,["value"])])]),e("div",ka,[e("span",Sa,v(i.$t("setting.socks")),1),e("div",Ca,[d(l(I),{value:s.value&&s.value.socksProxy,placeholder:"",onInput:h[6]||(h[6]=u=>{s.value&&(s.value.socksProxy=u)})},null,8,["value"])])]),e("div",Ra,[e("span",za,v(i.$t("setting.socksAuth")),1),e("div",Ta,[d(l(I),{value:s.value&&s.value.socksAuth,placeholder:"name:pasword",onInput:h[7]||(h[7]=u=>{s.value&&(s.value.socksAuth=u)})},null,8,["value"])])]),e("div",Ia,[e("span",Ba,v(i.$t("setting.httpsProxy")),1),e("div",Ma,[d(l(I),{value:s.value&&s.value.httpsProxy,placeholder:"",onInput:h[8]||(h[8]=u=>{s.value&&(s.value.httpsProxy=u)})},null,8,["value"])])]),e("div",Va,[Aa,d(l(L),{loading:o.value,type:"primary",onClick:h[9]||(h[9]=u=>p(s.value))},{default:w(()=>[K(v(i.$t("common.save")),1)]),_:1},8,["loading"])])])])]}),_:1},8,["show"]))}}),Pa={class:"p-4 space-y-5 min-h-[200px]"},Da={class:"space-y-6"},Ea={class:"flex items-center space-x-4"},Na={class:"flex-shrink-0 w-[100px]"},Fa={class:"flex-1"},Ha={class:"flex items-center space-x-4"},Oa={class:"flex-shrink-0 w-[100px]"},ja={class:"flex-1"},Ka={class:"flex items-center space-x-4"},La={class:"flex-shrink-0 w-[100px]"},Wa={class:"flex-1"},Ga={class:"flex items-center space-x-4"},Ya={class:"flex-shrink-0 w-[100px]"},Xa={class:"flex-1"},Ja={class:"flex items-center space-x-4"},qa={class:"flex-shrink-0 w-[100px]"},Qa={class:"flex-1"},Za={class:"flex items-center space-x-4"},en={class:"flex-shrink-0 w-[100px]"},tn={class:"flex-1"},sn={class:"flex items-center space-x-4"},an={class:"flex-shrink-0 w-[100px]"},nn={class:"flex-1"},ln={class:"flex items-center space-x-4"},on=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),rn=ae({__name:"Site",setup(t){const c=xe(),g=y(!1),b=y(!1),o=y();o.value=new sa;async function s(){try{g.value=!0;const{data:n}=await Ee();o.value=n.siteConfig}finally{g.value=!1}}async function $(n){if(n){b.value=!0;try{const{data:p}=await ls(n);o.value=p,c.success(se("common.success"))}catch(p){c.error(p.message)}b.value=!1}}return Pe(()=>{s()}),(n,p)=>(B(),Z(l(De),{show:g.value},{default:w(()=>[e("div",Pa,[e("div",Da,[e("div",Ea,[e("span",Na,v(n.$t("setting.siteTitle")),1),e("div",Fa,[d(l(I),{value:o.value&&o.value.siteTitle,placeholder:"",onInput:p[0]||(p[0]=i=>{o.value&&(o.value.siteTitle=i)})},null,8,["value"])])]),e("div",Ha,[e("span",Oa,v(n.$t("setting.siteDomain")),1),e("div",ja,[d(l(I),{value:o.value&&o.value.siteDomain,placeholder:"",onInput:p[1]||(p[1]=i=>{o.value&&(o.value.siteDomain=i)})},null,8,["value"])])]),e("div",Ka,[e("span",La,v(n.$t("setting.loginEnabled")),1),e("div",Wa,[d(l(be),{round:!1,disabled:o.value&&o.value.loginEnabled,value:o.value&&o.value.loginEnabled,"onUpdate:value":p[2]||(p[2]=i=>{o.value&&(o.value.loginEnabled=i)})},null,8,["disabled","value"])])]),e("div",Ga,[e("span",Ya,v(n.$t("setting.loginSalt")),1),e("div",Xa,[d(l(I),{value:o.value&&o.value.loginSalt,placeholder:n.$t("setting.loginSaltTip"),onInput:p[3]||(p[3]=i=>{o.value&&(o.value.loginSalt=i)})},null,8,["value","placeholder"])])]),e("div",Ja,[e("span",qa,v(n.$t("setting.registerEnabled")),1),e("div",Qa,[d(l(be),{round:!1,value:o.value&&o.value.registerEnabled,"onUpdate:value":p[4]||(p[4]=i=>{o.value&&(o.value.registerEnabled=i)})},null,8,["value"])])]),as(e("div",Za,[e("span",en,v(n.$t("setting.registerReview")),1),e("div",tn,[d(l(be),{round:!1,value:o.value&&o.value.registerReview,"onUpdate:value":p[5]||(p[5]=i=>{o.value&&(o.value.registerReview=i)})},null,8,["value"])])],512),[[ns,o.value&&o.value.registerEnabled]]),e("div",sn,[e("span",an,v(n.$t("setting.registerMails")),1),e("div",nn,[d(l(I),{value:o.value&&o.value.registerMails,placeholder:"",onInput:p[6]||(p[6]=i=>{o.value&&(o.value.registerMails=i)})},null,8,["value"])])]),e("div",ln,[on,d(l(L),{loading:b.value,type:"primary",onClick:p[7]||(p[7]=i=>$(o.value))},{default:w(()=>[K(v(n.$t("common.save")),1)]),_:1},8,["loading"])])])])]),_:1},8,["show"]))}}),dn={class:"p-4 space-y-5 min-h-[200px]"},cn={class:"space-y-6"},un={class:"flex items-center space-x-4"},vn={class:"flex-shrink-0 w-[100px]"},hn={class:"flex-1"},fn={class:"flex items-center space-x-4"},pn={class:"flex-shrink-0 w-[100px]"},mn={class:"flex-1"},gn={class:"flex items-center space-x-4"},bn={class:"flex-shrink-0 w-[100px]"},xn={class:"flex-1"},wn={class:"flex items-center space-x-4"},_n={class:"flex-shrink-0 w-[100px]"},$n={class:"flex-1"},yn={class:"flex items-center space-x-4"},kn={class:"flex-shrink-0 w-[100px]"},Sn={class:"flex-1"},Cn={class:"flex items-center space-x-4"},Rn=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),zn={class:"flex flex-wrap items-center gap-4"},Tn=ae({__name:"Mail",setup(t){const c=xe(),g=y(!1),b=y(!1),o=y(!1),s=y();async function $(){try{g.value=!0;const{data:i}=await Ee();s.value=i.mailConfig}finally{g.value=!1}}async function n(){b.value=!0;try{const{data:i}=await os(s.value);s.value=i,c.success(se("common.success"))}catch(i){c.error(i.message)}b.value=!1}async function p(){o.value=!0;try{const{message:i}=await is(s.value);c.success(i)}catch(i){c.error(i.message)}o.value=!1}return Pe(()=>{$()}),(i,h)=>(B(),Z(l(De),{show:g.value},{default:w(()=>[e("div",dn,[e("div",cn,[e("div",un,[e("span",vn,v(i.$t("setting.smtpHost")),1),e("div",hn,[d(l(I),{value:s.value&&s.value.smtpHost,placeholder:"",onInput:h[0]||(h[0]=m=>{s.value&&(s.value.smtpHost=m)})},null,8,["value"])])]),e("div",fn,[e("span",pn,v(i.$t("setting.smtpPort")),1),e("div",mn,[d(l(I),{value:s.value&&s.value.smtpPort!==void 0?String(s.value.smtpPort):void 0,placeholder:"",onInput:h[1]||(h[1]=m=>{s.value&&(s.value.smtpPort=typeof m=="string"?Number(m):void 0)})},null,8,["value"])])]),e("div",gn,[e("span",bn,v(i.$t("setting.smtpTsl")),1),e("div",xn,[d(l(be),{round:!1,value:s.value&&s.value.smtpTsl,"onUpdate:value":h[2]||(h[2]=m=>{s.value&&(s.value.smtpTsl=m)})},null,8,["value"])])]),e("div",wn,[e("span",_n,v(i.$t("setting.smtpUserName")),1),e("div",$n,[d(l(I),{value:s.value&&s.value.smtpUserName,placeholder:"",onInput:h[3]||(h[3]=m=>{s.value&&(s.value.smtpUserName=m)})},null,8,["value"])])]),e("div",yn,[e("span",kn,v(i.$t("setting.smtpPassword")),1),e("div",Sn,[d(l(I),{value:s.value&&s.value.smtpPassword,placeholder:"",onInput:h[4]||(h[4]=m=>{s.value&&(s.value.smtpPassword=m)})},null,8,["value"])])]),e("div",Cn,[Rn,e("div",zn,[d(l(L),{loading:b.value,type:"primary",onClick:h[5]||(h[5]=m=>n())},{default:w(()=>[K(v(i.$t("common.save")),1)]),_:1},8,["loading"]),d(l(L),{loading:o.value,type:"info",onClick:h[6]||(h[6]=m=>p())},{default:w(()=>[K(v(i.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),In={class:"p-4 space-y-5 min-h-[200px]"},Bn={class:"space-y-6"},Mn={class:"flex items-center space-x-4"},Vn={class:"flex-shrink-0 w-[100px]"},An={class:"flex-1"},Un={key:0,class:"flex items-center space-x-4"},Pn={class:"flex-shrink-0 w-[100px]"},Dn={class:"flex-1"},En={class:"flex items-center space-x-4"},Nn={class:"flex-shrink-0 w-[100px]"},Fn={class:"flex-1"},Hn={key:1,class:"flex items-center space-x-4"},On={class:"flex-shrink-0 w-[100px]"},jn={class:"flex-1"},Kn={key:2,class:"flex items-center space-x-4"},Ln={class:"flex-shrink-0 w-[100px]"},Wn={class:"flex-1"},Gn={key:3,class:"flex items-center space-x-4"},Yn={class:"flex-shrink-0 w-[100px]"},Xn={class:"flex-1"},Jn={key:4,class:"flex items-center space-x-4"},qn={class:"flex-shrink-0 w-[100px]"},Qn={class:"flex-1"},Zn={key:0},el={target:"_blank",href:"https://ai.baidu.com/ai-doc/ANTIPORN/Nk3h6xbb2#%E7%BB%86%E5%88%86%E6%A0%87%E7%AD%BE%E5%AF%B9%E7%85%A7%E8%A1%A8"},tl={key:5,class:"flex items-center space-x-4"},sl={class:"flex-shrink-0 w-[100px]"},al={class:"flex-1"},nl={class:"flex items-center space-x-4"},ll=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),ol={class:"flex flex-wrap items-center gap-4"},il=ae({__name:"Audit",setup(t){const c=xe(),g=y(!1),b=y(!1),o=y(!1),s=y(),$=[{label:"百度云",key:"baidu",value:"baidu"}],n=y();async function p(){try{g.value=!0;const{data:m}=await Ee();n.value=m.auditConfig}finally{g.value=!1}}async function i(){b.value=!0;try{const{data:m}=await rs(n.value);n.value=m,c.success(se("common.success"))}catch(m){c.error(m.message)}b.value=!1}async function h(){o.value=!0;try{const{message:m}=await ds(s.value,n.value);c.success(m)}catch(m){c.error(m.message)}o.value=!1}return Pe(()=>{p()}),(m,u)=>(B(),Z(l(De),{show:g.value},{default:w(()=>[e("div",In,[e("div",Bn,[e("div",Mn,[e("span",Vn,v(m.$t("setting.auditCustomizeEnabled")),1),e("div",An,[d(l(be),{round:!1,value:n.value&&n.value.customizeEnabled,"onUpdate:value":u[0]||(u[0]=S=>{n.value&&(n.value.customizeEnabled=S)})},null,8,["value"])])]),n.value&&n.value.customizeEnabled?(B(),G("div",Un,[e("span",Pn,v(m.$t("setting.auditCustomizeWords")),1),e("div",Dn,[d(l(I),{value:n.value&&n.value.sensitiveWords,placeholder:"One word per line",type:"textarea",autosize:{minRows:1,maxRows:4},onInput:u[1]||(u[1]=S=>{n.value&&(n.value.sensitiveWords=S)})},null,8,["value"])])])):F("",!0),e("div",En,[e("span",Nn,v(m.$t("setting.auditEnabled")),1),e("div",Fn,[d(l(be),{round:!1,value:n.value&&n.value.enabled,"onUpdate:value":u[2]||(u[2]=S=>{n.value&&(n.value.enabled=S)})},null,8,["value"])])]),n.value&&n.value.enabled?(B(),G("div",Hn,[e("span",On,v(m.$t("setting.auditProvider")),1),e("div",jn,[d(l(ut),{style:{width:"140px"},value:n.value&&n.value.provider,options:$,onUpdateValue:u[3]||(u[3]=S=>{n.value&&(n.value.provider=S)})},null,8,["value"])])])):F("",!0),n.value&&n.value.enabled?(B(),G("div",Kn,[e("span",Ln,v(m.$t("setting.auditApiKey")),1),e("div",Wn,[d(l(I),{value:n.value&&n.value.options&&n.value.options.apiKey,placeholder:"",onInput:u[4]||(u[4]=S=>{n.value&&n.value.options&&(n.value.options.apiKey=S)})},null,8,["value"])])])):F("",!0),n.value&&n.value.enabled?(B(),G("div",Gn,[e("span",Yn,v(m.$t("setting.auditApiSecret")),1),e("div",Xn,[d(l(I),{value:n.value&&n.value.options&&n.value.options.apiSecret,placeholder:"",onInput:u[5]||(u[5]=S=>{n.value&&n.value.options&&(n.value.options.apiSecret=S)})},null,8,["value"])])])):F("",!0),n.value&&n.value.enabled?(B(),G("div",Jn,[e("span",qn,v(m.$t("setting.auditBaiduLabel")),1),e("div",Qn,[d(l(I),{value:n.value&&n.value.options&&n.value.options.label,placeholder:m.$t("setting.auditBaiduLabelTip"),onInput:u[6]||(u[6]=S=>{n.value&&n.value.options&&(n.value.options.label=S)})},null,8,["value","placeholder"])]),n.value&&n.value.provider==="baidu"?(B(),G("p",Zn,[e("a",el,v(m.$t("setting.auditBaiduLabelLink")),1)])):F("",!0)])):F("",!0),n.value&&(n.value.enabled||n.value.customizeEnabled)?(B(),G("div",tl,[e("span",sl,v(m.$t("setting.auditTest")),1),e("div",al,[d(l(I),{value:s.value,"onUpdate:value":u[7]||(u[7]=S=>s.value=S),placeholder:""},null,8,["value"])])])):F("",!0),e("div",nl,[ll,e("div",ol,[d(l(L),{loading:b.value,type:"primary",onClick:u[8]||(u[8]=S=>i())},{default:w(()=>[K(v(m.$t("common.save")),1)]),_:1},8,["loading"]),d(l(L),{loading:o.value,type:"info",onClick:u[9]||(u[9]=S=>h())},{default:w(()=>[K(v(m.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),rl={class:"ml-2"},dl={class:"min-h-[100px]"},cl={class:"ml-2"},ul={class:"min-h-[100px]"},vl={class:"ml-2"},hl={class:"ml-2"},fl={class:"ml-2"},pl={class:"ml-2"},bl=ae({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(t,{emit:c}){const g=t,b=ct(),o=vt(),s=E(()=>!!o.isChatGPTAPI),$=y("General"),n=E({get(){return g.visible},set(p){c("update:visible",p)}});return(p,i)=>(B(),Z(l(vs),{show:l(n),"onUpdate:show":i[1]||(i[1]=h=>us(n)?n.value=h:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"1024px"}},{default:w(()=>[e("div",null,[d(l(cs),{value:$.value,"onUpdate:value":i[0]||(i[0]=h=>$.value=h),type:"line",animated:""},{default:w(()=>[d(l(ge),{name:"General",tab:"General"},{tab:w(()=>[d(l(Q),{class:"text-lg",icon:"ri:file-user-line"}),e("span",rl,v(p.$t("setting.general")),1)]),default:w(()=>[e("div",dl,[d(Fs)])]),_:1}),l(s)?(B(),Z(l(ge),{key:0,name:"Advanced",tab:"Advanced"},{tab:w(()=>[d(l(Q),{class:"text-lg",icon:"ri:equalizer-line"}),e("span",cl,v(p.$t("setting.advanced")),1)]),default:w(()=>[e("div",ul,[d(ea)])]),_:1})):F("",!0),l(b).userInfo.root?(B(),Z(l(ge),{key:1,name:"Config",tab:"Config"},{tab:w(()=>[d(l(Q),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",vl,v(p.$t("setting.config")),1)]),default:w(()=>[d(Ua)]),_:1})):F("",!0),l(b).userInfo.root?(B(),Z(l(ge),{key:2,name:"SiteConfig",tab:"SiteConfig"},{tab:w(()=>[d(l(Q),{class:"text-lg",icon:"ri:settings-line"}),e("span",hl,v(p.$t("setting.siteConfig")),1)]),default:w(()=>[d(rn)]),_:1})):F("",!0),l(b).userInfo.root?(B(),Z(l(ge),{key:3,name:"MailConfig",tab:"MailConfig"},{tab:w(()=>[d(l(Q),{class:"text-lg",icon:"ri:mail-line"}),e("span",fl,v(p.$t("setting.mailConfig")),1)]),default:w(()=>[d(Tn)]),_:1})):F("",!0),l(b).userInfo.root?(B(),Z(l(ge),{key:4,name:"AuditConfig",tab:"AuditConfig"},{tab:w(()=>[d(l(Q),{class:"text-lg",icon:"ri:settings-line"}),e("span",pl,v(p.$t("setting.auditConfig")),1)]),default:w(()=>[d(il)]),_:1})):F("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{bl as default};
