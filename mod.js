// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,d,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,v,"$1."),n=l.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,A=isNaN,_=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,a,o,c,f,s,l,p,y,v,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return U.apply(null,e)}var x=Object.prototype,N=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,L=x.__lookupSetter__;var P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=x,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function $(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return G&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var M="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof M?M.toStringTag:"";var Y=R()?function(r){var e,t,n,i,a;if(null==r)return H.call(r);t=r[Z],a=Z,e=null!=(i=r)&&W.call(i,a);try{r[Z]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[Z]=t:delete r[Z],n}:function(r){return H.call(r)},B=Number,X=B.prototype.toString;var q=R();function z(r){return"object"==typeof r&&(r instanceof B||(q?function(r){try{return X.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function J(r){return C(r)||z(r)}function D(r,e){if(!(this instanceof D))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!C(r))throw new TypeError(k("invalid argument. Real component must be a number. Value: `%s`.",r));if(!C(e))throw new TypeError(k("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function K(r){return r!=r}$(J,"isPrimitive",C),$(J,"isObject",z),$(D,"BYTES_PER_ELEMENT",8),$(D.prototype,"BYTES_PER_ELEMENT",8),$(D.prototype,"byteLength",16),$(D.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),$(D.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Q=Number.POSITIVE_INFINITY,rr=B.NEGATIVE_INFINITY;function er(r){return r===Q||r===rr}var tr=Math.floor;function nr(r){return tr(r)===r}function ir(r){return nr(r/2)}function ar(r){return ir(r>0?r-1:r+1)}var or=Math.sqrt;function ur(r){return Math.abs(r)}var cr="function"==typeof Uint32Array;var fr="function"==typeof Uint32Array?Uint32Array:null;var sr,lr="function"==typeof Uint32Array?Uint32Array:void 0;sr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(cr&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,yr="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var gr,hr="function"==typeof Float64Array?Float64Array:void 0;gr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),t=e,r=(yr&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var dr=gr,wr="function"==typeof Uint8Array;var br="function"==typeof Uint8Array?Uint8Array:null;var mr,Er="function"==typeof Uint8Array?Uint8Array:void 0;mr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,256,257]),t=e,r=(wr&&t instanceof Uint8Array||"[object Uint8Array]"===Y(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ar=mr,_r="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Ur,Ir="function"==typeof Uint16Array?Uint16Array:void 0;Ur=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_r&&t instanceof Uint16Array||"[object Uint16Array]"===Y(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Tr,jr={uint16:Ur,uint8:Ar};(Tr=new jr.uint16(1))[0]=4660;var kr,xr,Nr=52===new jr.uint8(Tr.buffer)[0];!0===Nr?(kr=1,xr=0):(kr=0,xr=1);var Fr={HIGH:kr,LOW:xr},Or=new dr(1),Vr=new pr(Or.buffer),Lr=Fr.HIGH,Pr=Fr.LOW;function $r(r,e,t,n){return Or[0]=r,e[n]=Vr[Lr],e[n+t]=Vr[Pr],e}function Cr(r){return $r(r,[0,0],1,0)}$(Cr,"assign",$r);var Gr=!0===Nr?0:1,Rr=new dr(1),Hr=new pr(Rr.buffer);function Wr(r,e){return Rr[0]=r,Hr[Gr]=e>>>0,Rr[0]}function Mr(r){return 0|r}var Zr,Yr,Br=2147483647,Xr=2147483648,qr=!0===Nr?1:0,zr=new dr(1),Jr=new pr(zr.buffer);function Dr(r){return zr[0]=r,Jr[qr]}!0===Nr?(Zr=1,Yr=0):(Zr=0,Yr=1);var Kr={HIGH:Zr,LOW:Yr},Qr=new dr(1),re=new pr(Qr.buffer),ee=Kr.HIGH,te=Kr.LOW;function ne(r,e){return re[ee]=r,re[te]=e,Qr[0]}var ie=[0,0];function ae(r,e){var t,n;return Cr.assign(r,ie,1,0),t=ie[0],t&=Br,n=Dr(e),ne(t|=n&=Xr,ie[1])}var oe=1072693247,ue=1e300,ce=1e-300;var fe=!0===Nr?1:0,se=new dr(1),le=new pr(se.buffer);function pe(r,e){return se[0]=r,le[fe]=e>>>0,se[0]}var ye=1023;var ve=1048575,ge=1048576,he=1072693248,de=536870912,we=524288,be=20,me=9007199254740992,Ee=.9617966939259756,Ae=.9617967009544373,_e=-7.028461650952758e-9,Se=[1,1.5],Ue=[0,.5849624872207642],Ie=[0,1.350039202129749e-8];var Te=1.4426950408889634,je=1.4426950216293335,ke=1.9259629911266175e-8;var xe=1023,Ne=-1023,Fe=-1074,Oe=22250738585072014e-324,Ve=4503599627370496;function Le(r,e,t,n){return K(r)||er(r)?(e[n]=r,e[n+t]=0,e):0!==r&&ur(r)<Oe?(e[n]=r*Ve,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Le(r,[0,0],1,0)}),"assign",Le);var Pe=2146435072;var $e=2220446049250313e-31,Ce=2148532223,Ge=[0,0],Re=[0,0];function He(r,e){var t,n;return 0===e||0===r||K(r)||er(r)?r:(Le(r,Ge,1,0),r=Ge[0],e+=Ge[1],e+=function(r){var e=Dr(r);return(e=(e&Pe)>>>20)-ye|0}(r),e<Fe?ae(0,r):e>xe?r<0?rr:Q:(e<=Ne?(e+=52,n=$e):n=1,Cr.assign(r,Re,1,0),t=Re[0],t&=Ce,n*ne(t|=e+ye<<20,Re[1])))}var We=.6931471805599453,Me=1048575;var Ze=1048576,Ye=1071644672,Be=20,Xe=.6931471824645996,qe=-1.904654299957768e-9;var ze=1072693247,Je=1105199104,De=1139802112,Ke=1083179008,Qe=1072693248,rt=1083231232,et=3230714880,tt=31,nt=1e300,it=1e-300,at=8008566259537294e-32,ot=[0,0],ut=[0,0];function ct(r,e){var t,n,i,a,o,u,c,f,s,l,p,y,v,g;if(K(r)||K(e))return NaN;if(Cr.assign(e,ot,1,0),o=ot[0],0===ot[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return or(r);if(-.5===e)return 1/or(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(er(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ur(r)<1==(e===Q)?0:Q}(r,e)}if(Cr.assign(r,ot,1,0),a=ot[0],0===ot[1]){if(0===a)return function(r,e){return e===rr?Q:e===Q?0:e>0?ar(e)?r:0:ar(e)?ae(Q,r):Q}(r,e);if(1===r)return 1;if(-1===r&&ar(e))return-1;if(er(r))return r===rr?ct(-0,-e):e<0?0:Q}if(r<0&&!1===nr(e))return(r-r)/(r-r);if(i=ur(r),t=a&Br|0,n=o&Br|0,c=o>>>tt|0,u=(u=a>>>tt|0)&&ar(e)?-1:1,n>Je){if(n>De)return function(r,e){return(Dr(r)&Br)<=oe?e<0?ue*ue:ce*ce:e>0?ue*ue:ce*ce}(r,e);if(t<ze)return 1===c?u*nt*nt:u*it*it;if(t>Qe)return 0===c?u*nt*nt:u*it*it;p=function(r,e){var t,n,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),t=(u=i*ke-a*Te)-((n=Wr(n=(o=je*i)+u,0))-o),r[0]=n,r[1]=t,r}(ut,i)}else p=function(r,e,t){var n,i,a,o,u,c,f,s,l,p,y,v,g,h,d,w,b,m,E,A,_;return m=0,t<ge&&(m-=53,t=Dr(e*=me)),m+=(t>>be)-ye|0,t=(E=t&ve|0)|he|0,E<=235662?A=0:E<767610?A=1:(A=0,m+=1,t-=ge),o=Wr(i=(w=(e=pe(e,t))-(f=Se[A]))*(b=1/(e+f)),0),n=(t>>1|de)+we,c=pe(0,n+=A<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Wr(c=3+(a=o*o)+(d+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Wr(l=(w=o*c)+(b=u*c+(d-(c-3-a))*i),0),p=Ae*l,g=(y=_e*l+(b-(l-w))*Ee+Ie[A])-((v=Wr(v=p+y+(s=Ue[A])+(h=m),0))-h-s-p),r[0]=v,r[1]=g,r}(ut,i,t);if(y=(l=(e-(f=Wr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Cr.assign(y,ot,1,0),v=Mr(ot[0]),g=Mr(ot[1]),v>=Ke){if(0!=(v-Ke|g))return u*nt*nt;if(l+at>y-s)return u*nt*nt}else if((v&Br)>=rt){if(0!=(v-et|g))return u*it*it;if(l<=y-s)return u*it*it}return y=function(r,e,t){var n,i,a,o,u,c,f,s,l,p;return l=((s=r&Br|0)>>Be)-ye|0,f=0,s>Ye&&(i=pe(0,((f=r+(Ze>>l+1)>>>0)&~(Me>>(l=((f&Br)>>Be)-ye|0)))>>>0),f=(f&Me|Ze)>>Be-l>>>0,r<0&&(f=-f),e-=i),r=Mr(r=Dr(c=1-((c=(a=(i=Wr(i=t+e,0))*Xe)+(o=(t-(i-e))*We+i*qe))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<Be>>>0)>>Be<=0?He(c,f):pe(c,r)}(v,s,l),u*y}var ft=Math.round,st=308,lt=-308,pt=-324,yt=9007199254740992,vt=1e308;function gt(r,e){var t,n;return K(r)||K(e)||er(e)?NaN:er(r)||0===r||e<pt||ur(r)>yt&&e<=0?r:e>st?0*r:e<lt?(t=ct(10,-(e+st)),er(n=r*vt*t)?r:ft(n)/vt/t):er(n=r*(t=ct(10,-e)))?r:ft(n)/t}function ht(r,e){return new D(gt(function(r){return r.re}(r),e),gt(function(r){return r.im}(r),e))}export{ht as default};
//# sourceMappingURL=mod.js.map