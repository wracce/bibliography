"use strict";(self.webpackChunkBibliography=self.webpackChunkBibliography||[]).push([[592],{6634:(x,v,e)=>{e.d(v,{b:()=>m,r:()=>g});var s=e(4650),t=e(8535),u=(e(8865),e(9654));let g=(()=>{class o{transform(c,f=`${t.kU}7`,h="(###) ###-##-##"){return(0,u.ev)(c,f,h)}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275pipe=s.Yjl({name:"tuiFormatPhone",type:o,pure:!0}),o})(),m=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({}),o})()},2041:(x,v,e)=>{e.d(v,{JP:()=>I,Jm:()=>B});var s=e(655),t=e(4650),p=e(5753),u=e(8923),g=e(8276),m=e(9040),o=e(9368),l=e(6895),c=e(702),f=e(8355),h=e(9306),_=e(9751),z=e(9646),T=e(7579),y=e(3900),b=e(9300),A=e(4004),w=e(262),U=e(5698),L=e(2722);let M=(()=>{class a extends _.y{constructor(i,r,d){super(H=>this.src$.pipe((0,y.w)(O=>d.pipe((0,b.h)(([{isIntersecting:J}])=>J),(0,A.U)(()=>O),(0,w.K)(()=>(0,z.of)(O)),(0,f.NA)(i),(0,U.q)(1))),(0,L.R)(r)).subscribe(H)),this.src$=new T.x}next(i){this.src$.next(i)}}return a.\u0275fac=function(i){return new(i||a)(t.LFG(t.sBO),t.LFG(h.a3,2),t.LFG(c.te))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})(),D=(()=>{class a{constructor(i,r){this.src$=i,this.el=r,this.animation="tuiSkeletonVibe ease-in-out 1s infinite alternate",this.background="var(--tui-clear-hover)",this.src=null,this.supported||this.src$.subscribe(d=>{this.src=d})}set srcSetter(i){this.src=this.supported?i:null,this.src$.next(i)}get supported(){return"loading"in this.el.nativeElement}onLoad(){this.background="",this.animation=""}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(M),t.Y36(t.SBq))},a.\u0275dir=t.lG2({type:a,selectors:[["img","loading","lazy"]],hostVars:5,hostBindings:function(i,r){1&i&&t.NdJ("load",function(){return r.onLoad()}),2&i&&(t.uIk("src",r.src,t.LSH),t.Udp("animation",r.animation)("background",r.background))},inputs:{srcSetter:["src","srcSetter"]},features:[t._Bn([M,c.te,h.a3])]}),a})(),k=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({}),a})();function S(a,n){if(1&a){const i=t.EpF();t.TgZ(0,"img",3),t.NdJ("error",function(){t.CHM(i);const d=t.oxw();return t.KtG(d.onError())}),t.qZA()}if(2&a){const i=t.oxw();t.Q6J("src",i.avatarUrl||"",t.LSH),t.uIk("alt",i.text)}}function E(a,n){if(1&a&&t._UZ(0,"tui-svg",4),2&a){const i=t.oxw();t.Q6J("src",i.fallback)}}function F(a,n){if(1&a&&t._UZ(0,"tui-svg",4),2&a){const i=t.oxw();t.Q6J("src",i.stringAvatar)}}const P={size:"m",autoColor:!1,rounded:!1},C=new t.OlP("[TUI_AVATAR_OPTIONS]",{factory:()=>P});let I=(()=>{class a{constructor(i){this.options=i,this.size=this.options.size,this.text="",this.fallback=null,this.autoColor=this.options.autoColor,this.rounded=this.options.rounded,this.avatarUrl=null,this.isUrlValid=!1}set avatarUrlSetter(i){this.avatarUrl=i,this.isUrlValid=!!i&&!this.iconAvatar}get bgColor(){return this.autoColor?(0,o.s)(this.text):""}get hasAvatar(){return null!==this.avatarUrl&&this.isUrlValid}get iconAvatar(){var i;return(0,p.Aj)(this.avatarUrl)&&!(null===(i=this.avatarUrl)||void 0===i||!i.startsWith("tuiIcon"))}get useFallback(){return!(!this.fallback||!this.avatarUrl||this.isUrlValid||this.text.length)}get computedText(){return this.hasAvatar||this.iconAvatar||""===this.text?"":this.getSlicedText(this.text,this.size)}get stringAvatar(){return this.iconAvatar?String(this.avatarUrl):""}onError(){this.isUrlValid=!1}getSlicedText(i,r){const d=i.split(" ");return d.length>1&&(0,m.R9)(r)?d[0].slice(0,1)+d[1].slice(0,1):d[0].slice(0,1)}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(C))},a.\u0275cmp=t.Xpm({type:a,selectors:[["tui-avatar"]],hostVars:7,hostBindings:function(i,r){2&i&&(t.uIk("data-size",r.size),t.Udp("background",r.bgColor),t.ekj("_rounded",r.rounded)("_has-avatar",r.hasAvatar))},inputs:{size:"size",avatarUrlSetter:["avatarUrl","avatarUrlSetter"],text:"text",fallback:"fallback",autoColor:"autoColor",rounded:"rounded"},decls:5,vars:4,consts:[["loading","lazy","class","t-image",3,"src","error",4,"ngIf"],["class","t-icon",3,"src",4,"ngIf"],[1,"t-text"],["loading","lazy",1,"t-image",3,"src","error"],[1,"t-icon",3,"src"]],template:function(i,r){1&i&&(t.YNc(0,S,1,2,"img",0),t.YNc(1,E,1,1,"tui-svg",1),t.YNc(2,F,1,1,"tui-svg",1),t.TgZ(3,"span",2),t._uU(4),t.qZA()),2&i&&(t.Q6J("ngIf",r.isUrlValid),t.xp6(1),t.Q6J("ngIf",r.useFallback),t.xp6(1),t.Q6J("ngIf",r.stringAvatar),t.xp6(2),t.Oqu(r.computedText))},dependencies:[g.PN,l.O5,D],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-shrink:0;border-radius:var(--tui-radius-m);color:var(--tui-secondary-active);text-align:center;text-transform:uppercase;justify-content:center;align-items:center;background:var(--tui-avatar-background, currentColor);-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}[data-size=xs][_nghost-%COMP%]{font:var(--tui-font-text-s);width:1.5rem;height:1.5rem}[data-size=s][_nghost-%COMP%]{font:var(--tui-font-text-m);width:2rem;height:2rem}[data-size=m][_nghost-%COMP%]{font:var(--tui-font-text-l);width:3rem;height:3rem}[data-size=l][_nghost-%COMP%]{font:var(--tui-font-heading-5);width:4rem;height:4rem;border-radius:var(--tui-radius-xl)}[data-size=xl][_nghost-%COMP%]{font:var(--tui-font-heading-3);width:6rem;height:6rem;border-radius:var(--tui-radius-xl)}[data-size=xxl][_nghost-%COMP%]{font:var(--tui-font-heading-1);width:9rem;height:9rem;border-radius:var(--tui-radius-l)}[new][data-size=xxs][_nghost-%COMP%]{width:1.5rem;height:1.5rem;border-radius:var(--tui-radius-s)}[new][data-size=xxs][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.58)}[new][data-size=xs][_nghost-%COMP%]{width:2rem;height:2rem;border-radius:var(--tui-radius-s)}[new][data-size=xs][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.83)}[new][data-size=s][_nghost-%COMP%]{width:2.5rem;height:2.5rem;border-radius:calc(1.5 * var(--tui-radius-s))}[new][data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1)}[new][data-size=m][_nghost-%COMP%]{width:3rem;height:3rem;border-radius:calc(2 * var(--tui-radius-s))}[new][data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1.17)}[new][data-size=l][_nghost-%COMP%]{width:4rem;height:4rem;border-radius:calc(2 * var(--tui-radius-s))}[new][data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1.67)}[new][data-size=xl][_nghost-%COMP%]{width:6rem;height:6rem;border-radius:calc(3 * var(--tui-radius-s))}[new][data-size=xl][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(2.33)}[new][data-size=xxl][_nghost-%COMP%]{width:8rem;height:8rem;border-radius:calc(4 * var(--tui-radius-s))}[new][data-size=xxl][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(3.33)}._has-avatar[_nghost-%COMP%]{background-color:transparent}._rounded[_nghost-%COMP%]{border-radius:100%!important}  .tui-avatar-stack{display:flex;width:-webkit-min-content;width:min-content}.tui-avatar-stack[data-size=xs][_nghost-%COMP%], .tui-avatar-stack   [data-size=xs][_nghost-%COMP%]{margin-right:-.625rem;box-shadow:0 0 0 1px var(--tui-avatar-border, var(--tui-base-01))}.tui-avatar-stack[data-size=s][_nghost-%COMP%], .tui-avatar-stack   [data-size=s][_nghost-%COMP%]{margin-right:-.875rem;box-shadow:0 0 0 1px var(--tui-avatar-border, var(--tui-base-01))}.tui-avatar-stack[data-size=m][_nghost-%COMP%], .tui-avatar-stack   [data-size=m][_nghost-%COMP%]{margin-right:-1.25rem;box-shadow:0 0 0 2px var(--tui-avatar-border, var(--tui-base-01))}.tui-avatar-stack[data-size=l][_nghost-%COMP%], .tui-avatar-stack   [data-size=l][_nghost-%COMP%]{margin-right:-1.625rem;box-shadow:0 0 0 2px var(--tui-avatar-border, var(--tui-base-01))}.tui-avatar-stack[data-size=xl][_nghost-%COMP%], .tui-avatar-stack   [data-size=xl][_nghost-%COMP%]{margin-right:-2.25rem;box-shadow:0 0 0 3px var(--tui-avatar-border, var(--tui-base-01))}.tui-avatar-stack[data-size=xxl][_nghost-%COMP%], .tui-avatar-stack   [data-size=xxl][_nghost-%COMP%]{margin-right:-3.375rem;box-shadow:0 0 0 3px var(--tui-avatar-border, var(--tui-base-01))}.t-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.t-text[_ngcontent-%COMP%]{color:var(--tui-avatar-color, var(--tui-text-01))}.t-icon[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;color:var(--tui-avatar-color, var(--tui-text-01))}[data-size=xs][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.5)}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1.6)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(2)}[data-size=xl][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(3.2)}"],changeDetection:0}),(0,s.gn)([(0,u.TH)()],a.prototype,"size",void 0),(0,s.gn)([(0,u.NH)()],a.prototype,"avatarUrlSetter",null),(0,s.gn)([(0,u.TH)()],a.prototype,"text",void 0),(0,s.gn)([(0,u.TH)()],a.prototype,"fallback",void 0),(0,s.gn)([(0,u.TH)()],a.prototype,"autoColor",void 0),(0,s.gn)([(0,u.TH)()],a.prototype,"rounded",void 0),(0,s.gn)([u.UM],a.prototype,"getSlicedText",null),a})(),B=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[l.ez,k,g.EI]]}),a})()}}]);