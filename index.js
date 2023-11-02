// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var _=String.fromCharCode,S=isNaN,T=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,f,s,l,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=j.exec(r);n;)(e=r.slice(i,j.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=j.lastIndex,n=j.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function F(r){var e,t,n;if(!N(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var O=Object.prototype,V=O.toString,L=O.__defineGetter__,P=O.__defineSetter__,$=O.__lookupGetter__,C=O.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function R(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,X="function"==typeof B?B.toStringTag:"",q=M()?function(r){var e,t,n,i,a;if(null==r)return Z.call(r);t=r[X],a=X,e=null!=(i=r)&&Y.call(i,a);try{r[X]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[X]=t:delete r[X],n}:function(r){return Z.call(r)},z=Number,J=z.prototype.toString,D=M();function K(r){return"object"==typeof r&&(r instanceof z||(D?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return H(r)||K(r)}function rr(r,e){if(!(this instanceof rr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!H(r))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",r));if(!H(e))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function er(r){return r!=r}R(Q,"isPrimitive",H),R(Q,"isObject",K),R(rr,"BYTES_PER_ELEMENT",8),R(rr.prototype,"BYTES_PER_ELEMENT",8),R(rr.prototype,"byteLength",16),R(rr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),R(rr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var tr=Number.POSITIVE_INFINITY,nr=z.NEGATIVE_INFINITY;function ir(r){return r===tr||r===nr}var ar=Math.floor;function or(r){return ar(r)===r}function ur(r){return or(r/2)}function cr(r){return ur(r>0?r-1:r+1)}var fr=Math.sqrt;function sr(r){return Math.abs(r)}var lr,pr="function"==typeof Uint32Array,yr="function"==typeof Uint32Array?Uint32Array:null,gr="function"==typeof Uint32Array?Uint32Array:void 0;lr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(pr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr=lr,vr="function"==typeof Float64Array,wr="function"==typeof Float64Array?Float64Array:null,br="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,NaN]),t=e,r=(vr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Er=dr,Ar="function"==typeof Uint8Array,_r="function"==typeof Uint8Array?Uint8Array:null,Sr="function"==typeof Uint8Array?Uint8Array:void 0;mr=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,256,257]),t=e,r=(Ar&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var Tr,Ur=mr,Ir="function"==typeof Uint16Array,jr="function"==typeof Uint16Array?Uint16Array:null,xr="function"==typeof Uint16Array?Uint16Array:void 0;Tr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ir&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?xr:function(){throw new Error("not implemented")};var kr,Nr={uint16:Tr,uint8:Ur};(kr=new Nr.uint16(1))[0]=4660;var Fr,Or,Vr=52===new Nr.uint8(kr.buffer)[0];!0===Vr?(Fr=1,Or=0):(Fr=0,Or=1);var Lr={HIGH:Fr,LOW:Or},Pr=new Er(1),$r=new hr(Pr.buffer),Cr=Lr.HIGH,Gr=Lr.LOW;function Rr(r,e,t,n){return Pr[0]=r,e[n]=$r[Cr],e[n+t]=$r[Gr],e}function Hr(r){return Rr(r,[0,0],1,0)}R(Hr,"assign",Rr);var Wr=!0===Vr?0:1,Mr=new Er(1),Zr=new hr(Mr.buffer);function Yr(r,e){return Mr[0]=r,Zr[Wr]=e>>>0,Mr[0]}function Br(r){return 0|r}var Xr,qr,zr=2147483647,Jr=!0===Vr?1:0,Dr=new Er(1),Kr=new hr(Dr.buffer);function Qr(r){return Dr[0]=r,Kr[Jr]}!0===Vr?(Xr=1,qr=0):(Xr=0,qr=1);var re={HIGH:Xr,LOW:qr},ee=new Er(1),te=new hr(ee.buffer),ne=re.HIGH,ie=re.LOW;function ae(r,e){return te[ne]=r,te[ie]=e,ee[0]}var oe=[0,0];function ue(r,e){var t,n;return Hr.assign(r,oe,1,0),t=oe[0],t&=zr,n=Qr(e),ae(t|=n&=2147483648,oe[1])}var ce=!0===Vr?1:0,fe=new Er(1),se=new hr(fe.buffer);function le(r,e){return fe[0]=r,se[ce]=e>>>0,fe[0]}var pe=1023,ye=1048576,ge=[1,1.5],de=[0,.5849624872207642],he=[0,1.350039202129749e-8];function ve(r,e,t,n){return er(r)||ir(r)?(e[n]=r,e[n+t]=0,e):0!==r&&sr(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}R((function(r){return ve(r,[0,0],1,0)}),"assign",ve);var we=[0,0],be=[0,0];function me(r,e){var t,n;return 0===e||0===r||er(r)||ir(r)?r:(ve(r,we,1,0),e+=we[1],e+=function(r){var e=Qr(r);return(e=(2146435072&e)>>>20)-pe|0}(r=we[0]),e<-1074?ue(0,r):e>1023?r<0?nr:tr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Hr.assign(r,be,1,0),t=be[0],t&=2148532223,n*ae(t|=e+pe<<20,be[1])))}var Ee=1048575,Ae=1048576,_e=1083179008,Se=1e300,Te=1e-300,Ue=[0,0],Ie=[0,0];function je(r,e){var t,n,i,a,o,u,c,f,s,l,p,y,g,d;if(er(r)||er(e))return NaN;if(Hr.assign(e,Ue,1,0),o=Ue[0],0===Ue[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return fr(r);if(-.5===e)return 1/fr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(ir(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:sr(r)<1==(e===tr)?0:tr}(r,e)}if(Hr.assign(r,Ue,1,0),a=Ue[0],0===Ue[1]){if(0===a)return function(r,e){return e===nr?tr:e===tr?0:e>0?cr(e)?r:0:cr(e)?ue(tr,r):tr}(r,e);if(1===r)return 1;if(-1===r&&cr(e))return-1;if(ir(r))return r===nr?je(-0,-e):e<0?0:tr}if(r<0&&!1===or(e))return(r-r)/(r-r);if(i=sr(r),t=a&zr|0,n=o&zr|0,c=o>>>31|0,u=(u=a>>>31|0)&&cr(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(Qr(r)&zr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===c?u*Se*Se:u*Te*Te;if(t>1072693248)return 0===c?u*Se*Se:u*Te*Te;p=function(r,e){var t,n,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Yr(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r}(Ie,i)}else p=function(r,e,t){var n,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,E,A,_;return m=0,t<ye&&(m-=53,t=Qr(e*=9007199254740992)),m+=(t>>20)-pe|0,t=1072693248|(E=1048575&t|0),E<=235662?A=0:E<767610?A=1:(A=0,m+=1,t-=ye),o=Yr(i=(w=(e=le(e,t))-(f=ge[A]))*(b=1/(e+f)),0),n=524288+(t>>1|536870912),c=le(0,n+=A<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Yr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Yr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+he[A])-((g=Yr(g=(p=.9617967009544373*l)+y+(s=de[A])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Ie,i,t);if(y=(l=(e-(f=Yr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Hr.assign(y,Ue,1,0),g=Br(Ue[0]),d=Br(Ue[1]),g>=_e){if(0!=(g-_e|d))return u*Se*Se;if(l+8008566259537294e-32>y-s)return u*Se*Se}else if((g&zr)>=1083231232){if(0!=(g-3230714880|d))return u*Te*Te;if(l<=y-s)return u*Te*Te}return y=function(r,e,t){var n,i,a,o,u,c,f,s,l,p;return l=((s=r&zr|0)>>20)-pe|0,f=0,s>1071644672&&(i=le(0,((f=r+(Ae>>l+1)>>>0)&~(Ee>>(l=((f&zr)>>20)-pe|0)))>>>0),f=(f&Ee|Ae)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Br(r=Qr(c=1-((c=(a=.6931471824645996*(i=Yr(i=t+e,0)))+(o=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?me(c,f):le(c,r)}(g,s,l),u*y}var xe=Math.round,ke=1e308;function Ne(r,e){var t,n;return er(r)||er(e)||ir(e)?NaN:ir(r)||0===r||e<-324||sr(r)>9007199254740992&&e<=0?r:e>308?0*r:e<-308?(t=je(10,-(e+308)),ir(n=r*ke*t)?r:xe(n)/ke/t):ir(n=r*(t=je(10,-e)))?r:xe(n)/t}return function(r,e){return new rr(Ne(function(r){return r.re}(r),e),Ne(function(r){return r.im}(r),e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).croundn=e();
//# sourceMappingURL=index.js.map