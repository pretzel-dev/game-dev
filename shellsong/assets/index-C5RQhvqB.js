(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="186",tf=0,Bo=1,nf=2,ds=1,sf=2,fs=3,mi=0,Yt=1,qt=2,Gn=0,ps=1,ha=2,ko=3,Ho=4,rf=5,Gi=100,af=101,of=102,lf=103,cf=104,ff=200,hf=201,uf=202,df=203,nc=204,ic=205,pf=206,mf=207,gf=208,xf=209,_f=210,vf=211,Mf=212,Sf=213,yf=214,ua=0,da=1,pa=2,vs=3,ma=4,ga=5,xa=6,_a=7,gr=0,bf=1,Ef=2,In=0,sc=1,rc=2,ac=3,oc=4,lc=5,cc=6,ao=7,fc=300,gi=301,Ki=302,Er=303,wr=304,xr=306,va=1e3,kn=1001,Ma=1002,Ut=1003,wf=1004,As=1005,kt=1006,Tr=1007,ui=1008,tn=1009,hc=1010,uc=1011,Ms=1012,oo=1013,vn=1014,gn=1015,Mn=1016,lo=1017,co=1018,Ss=1020,dc=35902,pc=35899,mc=1021,gc=1022,xn=1023,Wn=1026,di=1027,fo=1028,ho=1029,xi=1030,uo=1031,po=1033,nr=33776,ir=33777,sr=33778,rr=33779,Sa=35840,ya=35841,ba=35842,Ea=35843,wa=36196,Ta=37492,Aa=37496,Ra=37488,Ca=37489,or=37490,Pa=37491,La=37808,Ia=37809,Da=37810,Ua=37811,Na=37812,Fa=37813,za=37814,Oa=37815,Ba=37816,ka=37817,Ha=37818,Ga=37819,Va=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,Ka=36283,$a=36284,lr=36285,Za=36286,Tf=3200,cr=0,Af=1,ii="",en="srgb",fr="srgb-linear",hr="linear",tt="srgb",Ar=7680,Rf=519,Cf=512,Pf=513,Lf=514,mo=515,If=516,Df=517,go=518,Uf=519,Nf=35044,Go="300 es",Pn=2e3,ys=2001;function Ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zf(){const i=ur("canvas");return i.style.display="block",i}const Vo={};function Wo(...i){const e="THREE."+i.shift();console.log(e,...i)}function xc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=xc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=xc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){const e=i.join(" ");e in Vo||(Vo[e]=!0,Ie(...i))}function Of(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Bf={[ua]:da,[pa]:xa,[ma]:_a,[vs]:ga,[da]:ua,[xa]:pa,[_a]:ma,[ga]:vs};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,Ja=180/Math.PI;function Es(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function kf(i,e){return(i%e+e)%e}function Cr(i,e,t){return(1-t)*i+t*e}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Eo=class Eo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eo.prototype.isVector2=!0;let Ue=Eo;class Si{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let h=n[s+0],d=n[s+1],m=n[s+2],f=n[s+3],l=r[a+0],u=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||h!==l||d!==u||m!==g){let p=h*l+d*u+m*g+f*x;p<0&&(l=-l,u=-u,g=-g,x=-x,p=-p);let c=1-o;if(p<.9995){const v=Math.acos(p),T=Math.sin(v);c=Math.sin(c*v)/T,o=Math.sin(o*v)/T,h=h*c+l*o,d=d*c+u*o,m=m*c+g*o,f=f*c+x*o}else{h=h*c+l*o,d=d*c+u*o,m=m*c+g*o,f=f*c+x*o;const v=1/Math.sqrt(h*h+d*d+m*m+f*f);h*=v,d*=v,m*=v,f*=v}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],h=n[s+1],d=n[s+2],m=n[s+3],f=r[a],l=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+m*f+h*u-d*l,e[t+1]=h*g+m*l+d*f-o*u,e[t+2]=d*g+m*u+o*l-h*f,e[t+3]=m*g-o*f-h*l-d*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,h=Math.sin,d=o(n/2),m=o(s/2),f=o(r/2),l=h(n/2),u=h(s/2),g=h(r/2);switch(a){case"XYZ":this._x=l*m*f+d*u*g,this._y=d*u*f-l*m*g,this._z=d*m*g+l*u*f,this._w=d*m*f-l*u*g;break;case"YXZ":this._x=l*m*f+d*u*g,this._y=d*u*f-l*m*g,this._z=d*m*g-l*u*f,this._w=d*m*f+l*u*g;break;case"ZXY":this._x=l*m*f-d*u*g,this._y=d*u*f+l*m*g,this._z=d*m*g+l*u*f,this._w=d*m*f-l*u*g;break;case"ZYX":this._x=l*m*f-d*u*g,this._y=d*u*f+l*m*g,this._z=d*m*g-l*u*f,this._w=d*m*f+l*u*g;break;case"YZX":this._x=l*m*f+d*u*g,this._y=d*u*f+l*m*g,this._z=d*m*g-l*u*f,this._w=d*m*f-l*u*g;break;case"XZY":this._x=l*m*f-d*u*g,this._y=d*u*f-l*m*g,this._z=d*m*g+l*u*f,this._w=d*m*f+l*u*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],h=t[9],d=t[2],m=t[6],f=t[10],l=n+o+f;if(l>0){const u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(m-h)*u,this._y=(r-d)*u,this._z=(a-s)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(m-h)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+d)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(r-d)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(h+m)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+d)/u,this._y=(h+m)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,h=t._y,d=t._z,m=t._w;return this._x=n*m+a*o+s*d-r*h,this._y=s*m+a*h+r*o-n*d,this._z=r*m+a*d+n*h-s*o,this._w=a*m-n*o-s*h-r*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let h=1-t;if(o<.9995){const d=Math.acos(o),m=Math.sin(d);h=Math.sin(h*d)/m,t=Math.sin(t*d)/m,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wo=class wo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,h=e.w,d=2*(a*s-o*n),m=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+h*d+a*f-o*m,this.y=n+h*m+o*d-r*f,this.z=s+h*f+r*m-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,h=t.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wo.prototype.isVector3=!0;let G=wo;const Pr=new G,Xo=new Si,To=class To{constructor(e,t,n,s,r,a,o,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,d)}set(e,t,n,s,r,a,o,h,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=o,m[3]=t,m[4]=r,m[5]=h,m[6]=n,m[7]=a,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],h=n[6],d=n[1],m=n[4],f=n[7],l=n[2],u=n[5],g=n[8],x=s[0],p=s[3],c=s[6],v=s[1],T=s[4],S=s[7],w=s[2],A=s[5],C=s[8];return r[0]=a*x+o*v+h*w,r[3]=a*p+o*T+h*A,r[6]=a*c+o*S+h*C,r[1]=d*x+m*v+f*w,r[4]=d*p+m*T+f*A,r[7]=d*c+m*S+f*C,r[2]=l*x+u*v+g*w,r[5]=l*p+u*T+g*A,r[8]=l*c+u*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],d=e[7],m=e[8];return t*a*m-t*o*d-n*r*m+n*o*h+s*r*d-s*a*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],d=e[7],m=e[8],f=m*a-o*d,l=o*h-m*r,u=d*r-a*h,g=t*f+n*l+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(s*d-m*n)*x,e[2]=(o*n-s*a)*x,e[3]=l*x,e[4]=(m*t-s*h)*x,e[5]=(s*r-o*t)*x,e[6]=u*x,e[7]=(n*h-d*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const h=Math.cos(r),d=Math.sin(r);return this.set(n*h,n*d,-n*(h*a+d*o)+a+e,-s*d,s*h,-s*(-d*a+h*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};To.prototype.isMatrix3=!0;let De=To;const Lr=new De,qo=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yo=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hf(){const i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const Ke=Hf();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class Gf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=ur("canvas")),Ti.width=e.width,Ti.height=e.height;const s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vf=0;class xo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ir(s[a].image)):r.push(Ir(s[a]))}else r=Ir(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Wf=0;const Dr=new G;class Kt extends Mi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=kn,s=kn,r=kt,a=ui,o=xn,h=tn,d=Kt.DEFAULT_ANISOTROPY,m=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Es(),this.name="",this.source=new xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dr).x}get height(){return this.source.getSize(Dr).y}get depth(){return this.source.getSize(Dr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=fc;Kt.DEFAULT_ANISOTROPY=1;const Ao=class Ao{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const h=e.elements,d=h[0],m=h[4],f=h[8],l=h[1],u=h[5],g=h[9],x=h[2],p=h[6],c=h[10];if(Math.abs(m-l)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(m+l)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(d+u+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,S=(u+1)/2,w=(c+1)/2,A=(m+l)/4,C=(f+x)/4,_=(g+p)/4;return T>S&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=C/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=_/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(l-m)*(l-m));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-x)/v,this.z=(l-m)/v,this.w=Math.acos((d+u+c-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ao.prototype.isVector4=!0;let vt=Ao;class Xf extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Kt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new xo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Xf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _c extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const mr=class mr{constructor(e,t,n,s,r,a,o,h,d,m,f,l,u,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,d,m,f,l,u,g,x,p)}set(e,t,n,s,r,a,o,h,d,m,f,l,u,g,x,p){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=s,c[1]=r,c[5]=a,c[9]=o,c[13]=h,c[2]=d,c[6]=m,c[10]=f,c[14]=l,c[3]=u,c[7]=g,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),d=Math.sin(s),m=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const l=a*m,u=a*f,g=o*m,x=o*f;t[0]=h*m,t[4]=-h*f,t[8]=d,t[1]=u+g*d,t[5]=l-x*d,t[9]=-o*h,t[2]=x-l*d,t[6]=g+u*d,t[10]=a*h}else if(e.order==="YXZ"){const l=h*m,u=h*f,g=d*m,x=d*f;t[0]=l+x*o,t[4]=g*o-u,t[8]=a*d,t[1]=a*f,t[5]=a*m,t[9]=-o,t[2]=u*o-g,t[6]=x+l*o,t[10]=a*h}else if(e.order==="ZXY"){const l=h*m,u=h*f,g=d*m,x=d*f;t[0]=l-x*o,t[4]=-a*f,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*m,t[9]=x-l*o,t[2]=-a*d,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){const l=a*m,u=a*f,g=o*m,x=o*f;t[0]=h*m,t[4]=g*d-u,t[8]=l*d+x,t[1]=h*f,t[5]=x*d+l,t[9]=u*d-g,t[2]=-d,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){const l=a*h,u=a*d,g=o*h,x=o*d;t[0]=h*m,t[4]=x-l*f,t[8]=g*f+u,t[1]=f,t[5]=a*m,t[9]=-o*m,t[2]=-d*m,t[6]=u*f+g,t[10]=l-x*f}else if(e.order==="XZY"){const l=a*h,u=a*d,g=o*h,x=o*d;t[0]=h*m,t[4]=-f,t[8]=d*m,t[1]=l*f+x,t[5]=a*m,t[9]=u*f-g,t[2]=g*f-u,t[6]=o*m,t[10]=x*f+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yf,e,Kf)}lookAt(e,t,n){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Kn.crossVectors(n,Qt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Kn.crossVectors(n,Qt)),Kn.normalize(),Rs.crossVectors(Qt,Kn),s[0]=Kn.x,s[4]=Rs.x,s[8]=Qt.x,s[1]=Kn.y,s[5]=Rs.y,s[9]=Qt.y,s[2]=Kn.z,s[6]=Rs.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],h=n[8],d=n[12],m=n[1],f=n[5],l=n[9],u=n[13],g=n[2],x=n[6],p=n[10],c=n[14],v=n[3],T=n[7],S=n[11],w=n[15],A=s[0],C=s[4],_=s[8],y=s[12],R=s[1],P=s[5],I=s[9],z=s[13],U=s[2],b=s[6],D=s[10],N=s[14],Z=s[3],F=s[7],W=s[11],J=s[15];return r[0]=a*A+o*R+h*U+d*Z,r[4]=a*C+o*P+h*b+d*F,r[8]=a*_+o*I+h*D+d*W,r[12]=a*y+o*z+h*N+d*J,r[1]=m*A+f*R+l*U+u*Z,r[5]=m*C+f*P+l*b+u*F,r[9]=m*_+f*I+l*D+u*W,r[13]=m*y+f*z+l*N+u*J,r[2]=g*A+x*R+p*U+c*Z,r[6]=g*C+x*P+p*b+c*F,r[10]=g*_+x*I+p*D+c*W,r[14]=g*y+x*z+p*N+c*J,r[3]=v*A+T*R+S*U+w*Z,r[7]=v*C+T*P+S*b+w*F,r[11]=v*_+T*I+S*D+w*W,r[15]=v*y+T*z+S*N+w*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],h=e[9],d=e[13],m=e[2],f=e[6],l=e[10],u=e[14],g=e[3],x=e[7],p=e[11],c=e[15],v=h*u-d*l,T=o*u-d*f,S=o*l-h*f,w=a*u-d*m,A=a*l-h*m,C=a*f-o*m;return t*(x*v-p*T+c*S)-n*(g*v-p*w+c*A)+s*(g*T-x*w+c*C)-r*(g*S-x*A+p*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],h=e[2],d=e[6],m=e[10];return t*(a*m-o*d)-n*(r*m-o*h)+s*(r*d-a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],d=e[7],m=e[8],f=e[9],l=e[10],u=e[11],g=e[12],x=e[13],p=e[14],c=e[15],v=t*o-n*a,T=t*h-s*a,S=t*d-r*a,w=n*h-s*o,A=n*d-r*o,C=s*d-r*h,_=m*x-f*g,y=m*p-l*g,R=m*c-u*g,P=f*p-l*x,I=f*c-u*x,z=l*c-u*p,U=v*z-T*I+S*P+w*R-A*y+C*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/U;return e[0]=(o*z-h*I+d*P)*b,e[1]=(s*I-n*z-r*P)*b,e[2]=(x*C-p*A+c*w)*b,e[3]=(l*A-f*C-u*w)*b,e[4]=(h*R-a*z-d*y)*b,e[5]=(t*z-s*R+r*y)*b,e[6]=(p*S-g*C-c*T)*b,e[7]=(m*C-l*S+u*T)*b,e[8]=(a*I-o*R+d*_)*b,e[9]=(n*R-t*I-r*_)*b,e[10]=(g*A-x*S+c*v)*b,e[11]=(f*S-m*A-u*v)*b,e[12]=(o*y-a*P-h*_)*b,e[13]=(t*P-n*y+s*_)*b,e[14]=(x*T-g*w-p*v)*b,e[15]=(m*w-f*T+l*v)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,h=e.z,d=r*a,m=r*o;return this.set(d*a+n,d*o-s*h,d*h+s*o,0,d*o+s*h,m*o+n,m*h-s*a,0,d*h-s*o,m*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,h=t._w,d=r+r,m=a+a,f=o+o,l=r*d,u=r*m,g=r*f,x=a*m,p=a*f,c=o*f,v=h*d,T=h*m,S=h*f,w=n.x,A=n.y,C=n.z;return s[0]=(1-(x+c))*w,s[1]=(u+S)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(u-S)*A,s[5]=(1-(l+c))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(g+T)*C,s[9]=(p-v)*C,s[10]=(1-(l+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),h=Ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);const d=1/a,m=1/o,f=1/h;return hn.elements[0]*=d,hn.elements[1]*=d,hn.elements[2]*=d,hn.elements[4]*=m,hn.elements[5]*=m,hn.elements[6]*=m,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=h,this}makePerspective(e,t,n,s,r,a,o=Pn,h=!1){const d=this.elements,m=2*r/(t-e),f=2*r/(n-s),l=(t+e)/(t-e),u=(n+s)/(n-s);let g,x;if(h)g=r/(a-r),x=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ys)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return d[0]=m,d[4]=0,d[8]=l,d[12]=0,d[1]=0,d[5]=f,d[9]=u,d[13]=0,d[2]=0,d[6]=0,d[10]=g,d[14]=x,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pn,h=!1){const d=this.elements,m=2/(t-e),f=2/(n-s),l=-(t+e)/(t-e),u=-(n+s)/(n-s);let g,x;if(h)g=1/(a-r),x=a/(a-r);else if(o===Pn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ys)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return d[0]=m,d[4]=0,d[8]=0,d[12]=l,d[1]=0,d[5]=f,d[9]=0,d[13]=u,d[2]=0,d[6]=0,d[10]=g,d[14]=x,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};mr.prototype.isMatrix4=!0;let lt=mr;const Ai=new G,hn=new lt,Yf=new G(0,0,0),Kf=new G(1,1,1),Kn=new G,Rs=new G,Qt=new G,Ko=new lt,$o=new Si;class Dn{constructor(e=0,t=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],h=s[1],d=s[5],m=s[9],f=s[2],l=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(l,d),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-m,u),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $o.setFromEuler(this),this.setFromQuaternion($o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $f=0;const Zo=new G,Ri=new Si,Un=new lt,Cs=new G,es=new G,Zf=new G,Jf=new Si,Jo=new G(1,0,0),Qo=new G(0,1,0),jo=new G(0,0,1),el={type:"added"},Qf={type:"removed"},Ci={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Rt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new G,t=new Dn,n=new Si,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new De}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Jo,e)}rotateY(e){return this.rotateOnAxis(Qo,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jo,e)}translateY(e){return this.translateOnAxis(Qo,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(es,Cs,this.up):Un.lookAt(Cs,es,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Un),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(el),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qf),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(el),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const f=h[d];r(e.shapes,f)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,d=this.material.length;h<d;h++)o.push(r(e.materials,this.material[h]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(e.animations,h))}}if(t){const o=a(e.geometries),h=a(e.materials),d=a(e.textures),m=a(e.images),f=a(e.shapes),l=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),m.length>0&&(n.images=m),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const h=[];for(const d in o){const m=o[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ye extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),c=this._getHandJoint(d,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const m=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],l=m.position.distanceTo(f.position),u=.02,g=.005;d.inputState.pinching&&l>u+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&l<=u-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Fr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=kf(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fr(a,r,e+1/3),this.g=Fr(a,r,e),this.b=Fr(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ke.workingToColorSpace(zt.copy(this),e),Math.round($e(zt.r*255,0,255))*65536+Math.round($e(zt.g*255,0,255))*256+Math.round($e(zt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let h,d;const m=(o+a)/2;if(o===a)h=0,d=0;else{const f=a-o;switch(d=m<=.5?f/(a+o):f/(2-a-o),a){case n:h=(s-r)/f+(s<r?6:0);break;case s:h=(r-n)/f+2;break;case r:h=(n-s)/f+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=en){Ke.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ps);const n=Cr($n.h,Ps.h,t),s=Cr($n.s,Ps.s,t),r=Cr($n.l,Ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ye;ye.NAMES=Mc;class _o{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new _o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new vo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const un=new G,Nn=new G,zr=new G,Fn=new G,Pi=new G,Li=new G,tl=new G,Or=new G,Br=new G,kr=new G,Hr=new vt,Gr=new vt,Vr=new vt;class pn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Nn.subVectors(n,t),zr.subVectors(e,t);const a=un.dot(un),o=un.dot(Nn),h=un.dot(zr),d=Nn.dot(Nn),m=Nn.dot(zr),f=a*d-o*o;if(f===0)return r.set(0,0,0),null;const l=1/f,u=(d*h-o*m)*l,g=(a*m-o*h)*l;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,h){return this.getBarycoord(e,t,n,s,Fn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Fn.x),h.addScaledVector(a,Fn.y),h.addScaledVector(o,Fn.z),h)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hr.setScalar(0),Gr.setScalar(0),Vr.setScalar(0),Hr.fromBufferAttribute(e,t),Gr.fromBufferAttribute(e,n),Vr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Gr,r.y),a.addScaledVector(Vr,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Nn.subVectors(e,t),un.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Pi.subVectors(s,n),Li.subVectors(r,n),Or.subVectors(e,n);const h=Pi.dot(Or),d=Li.dot(Or);if(h<=0&&d<=0)return t.copy(n);Br.subVectors(e,s);const m=Pi.dot(Br),f=Li.dot(Br);if(m>=0&&f<=m)return t.copy(s);const l=h*f-m*d;if(l<=0&&h>=0&&m<=0)return a=h/(h-m),t.copy(n).addScaledVector(Pi,a);kr.subVectors(e,r);const u=Pi.dot(kr),g=Li.dot(kr);if(g>=0&&u<=g)return t.copy(r);const x=u*d-h*g;if(x<=0&&d>=0&&g<=0)return o=d/(d-g),t.copy(n).addScaledVector(Li,o);const p=m*g-u*f;if(p<=0&&f-m>=0&&u-g>=0)return tl.subVectors(r,s),o=(f-m)/(f-m+(u-g)),t.copy(s).addScaledVector(tl,o);const c=1/(p+x+l);return a=x*c,o=l*c,t.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Is.subVectors(this.max,ts),Ii.subVectors(e.a,ts),Di.subVectors(e.b,ts),Ui.subVectors(e.c,ts),Zn.subVectors(Di,Ii),Jn.subVectors(Ui,Di),oi.subVectors(Ii,Ui);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-oi.z,oi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,oi.z,0,-oi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-oi.y,oi.x,0];return!Wr(t,Ii,Di,Ui,Is)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,Ii,Di,Ui,Is))?!1:(Ds.crossVectors(Zn,Jn),t=[Ds.x,Ds.y,Ds.z],Wr(t,Ii,Di,Ui,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new G,new G,new G,new G,new G,new G,new G,new G],dn=new G,Ls=new yi,Ii=new G,Di=new G,Ui=new G,Zn=new G,Jn=new G,oi=new G,ts=new G,Is=new G,Ds=new G,li=new G;function Wr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),h=e.dot(li),d=t.dot(li),m=n.dot(li);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>o)return!1}return!0}const Tt=new G,Us=new Ue;let eh=0;class dt extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nf,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yc extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bc extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const th=new yi,ns=new G,Xr=new G;class Ji{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):th.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Xr)),this.expandByPoint(ns.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nh=0;const rn=new lt,qr=new Rt,Ni=new G,jt=new yi,is=new yi,Dt=new G;class Mt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?bc:yc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return qr.lookAt(e),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(jt.min,is.min),jt.expandByPoint(Dt),Dt.addVectors(jt.max,is.max),jt.expandByPoint(Dt)):(jt.expandByPoint(is.min),jt.expandByPoint(is.max))}jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],h=this.morphTargetsRelative;for(let d=0,m=o.count;d<m;d++)Dt.fromBufferAttribute(o,d),h&&(Ni.fromBufferAttribute(e,d),Dt.add(Ni)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],h=[];for(let _=0;_<n.count;_++)o[_]=new G,h[_]=new G;const d=new G,m=new G,f=new G,l=new Ue,u=new Ue,g=new Ue,x=new G,p=new G;function c(_,y,R){d.fromBufferAttribute(n,_),m.fromBufferAttribute(n,y),f.fromBufferAttribute(n,R),l.fromBufferAttribute(r,_),u.fromBufferAttribute(r,y),g.fromBufferAttribute(r,R),m.sub(d),f.sub(d),u.sub(l),g.sub(l);const P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(x.copy(m).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(P),p.copy(f).multiplyScalar(u.x).addScaledVector(m,-g.x).multiplyScalar(P),o[_].add(x),o[y].add(x),o[R].add(x),h[_].add(p),h[y].add(p),h[R].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,y=v.length;_<y;++_){const R=v[_],P=R.start,I=R.count;for(let z=P,U=P+I;z<U;z+=3)c(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new G,S=new G,w=new G,A=new G;function C(_){w.fromBufferAttribute(s,_),A.copy(w);const y=o[_];T.copy(y),T.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(A,y);const P=S.dot(h[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,P)}for(let _=0,y=v.length;_<y;++_){const R=v[_],P=R.start,I=R.count;for(let z=P,U=P+I;z<U;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);const s=new G,r=new G,a=new G,o=new G,h=new G,d=new G,m=new G,f=new G;if(e)for(let l=0,u=e.count;l<u;l+=3){const g=e.getX(l+0),x=e.getX(l+1),p=e.getX(l+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),m.subVectors(a,r),f.subVectors(s,r),m.cross(f),o.fromBufferAttribute(n,g),h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,p),o.add(m),h.add(m),d.add(m),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,h.x,h.y,h.z),n.setXYZ(p,d.x,d.y,d.z)}else for(let l=0,u=t.count;l<u;l+=3)s.fromBufferAttribute(t,l+0),r.fromBufferAttribute(t,l+1),a.fromBufferAttribute(t,l+2),m.subVectors(a,r),f.subVectors(s,r),m.cross(f),n.setXYZ(l+0,m.x,m.y,m.z),n.setXYZ(l+1,m.x,m.y,m.z),n.setXYZ(l+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,h){const d=o.array,m=o.itemSize,f=o.normalized,l=new d.constructor(h.length*m);let u=0,g=0;for(let x=0,p=h.length;x<p;x++){o.isInterleavedBufferAttribute?u=h[x]*o.data.stride+o.offset:u=h[x]*m;for(let c=0;c<m;c++)l[g++]=d[u++]}return new dt(l,m,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const o in s){const h=s[o],d=e(h,n);t.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const h=[],d=r[o];for(let m=0,f=d.length;m<f;m++){const l=d[m],u=e(l,n);h.push(u)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const d=a[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let r=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let f=0,l=d.length;f<l;f++){const u=d[f];m.push(u.toJSON(e.data))}m.length>0&&(s[h]=m,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(t))}const r=e.morphAttributes;for(const d in r){const m=[],f=r[d];for(let l=0,u=f.length;l<u;l++)m.push(f[l].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,m=a.length;d<m;d++){const f=a[d];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yr=new G,ih=new G,sh=new De;class ni{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Yr.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Yr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),s=this.coplanarPoint(Yr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let rh=0;class bi extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=ps,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const On=new G,Kr=new G,Ns=new G,Fs=new G;class Ec{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kr.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(Kr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Fs.dot(this.direction),h=-Fs.dot(Ns),d=Fs.lengthSq(),m=Math.abs(1-a*a);let f,l,u,g;if(m>0)if(f=a*h-o,l=a*o-h,g=r*m,f>=0)if(l>=-g)if(l<=g){const x=1/m;f*=x,l*=x,u=f*(f+a*l+2*o)+l*(a*f+l+2*h)+d}else l=r,f=Math.max(0,-(a*l+o)),u=-f*f+l*(l+2*h)+d;else l=-r,f=Math.max(0,-(a*l+o)),u=-f*f+l*(l+2*h)+d;else l<=-g?(f=Math.max(0,-(-a*r+o)),l=f>0?-r:Math.min(Math.max(-r,-h),r),u=-f*f+l*(l+2*h)+d):l<=g?(f=0,l=Math.min(Math.max(-r,-h),r),u=l*(l+2*h)+d):(f=Math.max(0,-(a*r+o)),l=f>0?r:Math.min(Math.max(-r,-h),r),u=-f*f+l*(l+2*h)+d);else l=a>0?-r:r,f=Math.max(0,-(a*l+o)),u=-f*f+l*(l+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Kr).addScaledVector(Ns,l),u}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,h;const d=1/this.direction.x,m=1/this.direction.y,f=1/this.direction.z,l=this.origin;return d>=0?(n=(e.min.x-l.x)*d,s=(e.max.x-l.x)*d):(n=(e.max.x-l.x)*d,s=(e.min.x-l.x)*d),m>=0?(r=(e.min.y-l.y)*m,a=(e.max.y-l.y)*m):(r=(e.max.y-l.y)*m,a=(e.min.y-l.y)*m),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-l.z)*f,h=(e.max.z-l.z)*f):(o=(e.max.z-l.z)*f,h=(e.min.z-l.z)*f),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,h=o.x,d=o.y,m=o.z,f=e.x-a.x,l=e.y-a.y,u=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,c=n.x-a.x,v=n.y-a.y,T=n.z-a.z,S=Math.abs(h),w=Math.abs(d),A=Math.abs(m);let C,_,y,R,P,I,z,U,b,D,N,Z;if(S>=w&&S>=A?(y=h,I=f,b=g,Z=c,h>=0?(C=d,_=m,R=l,P=u,z=x,U=p,D=v,N=T):(C=m,_=d,R=u,P=l,z=p,U=x,D=T,N=v)):w>=A?(y=d,I=l,b=x,Z=v,d>=0?(C=m,_=h,R=u,P=f,z=p,U=g,D=T,N=c):(C=h,_=m,R=f,P=u,z=g,U=p,D=c,N=T)):(y=m,I=u,b=p,Z=T,m>=0?(C=h,_=d,R=f,P=l,z=g,U=x,D=c,N=v):(C=d,_=h,R=l,P=f,z=x,U=g,D=v,N=c)),y===0)return null;const F=C/y,W=_/y,J=1/y,ie=R-F*I,le=P-W*I,Oe=z-F*b,Ne=U-W*b,Ve=D-F*Z,te=N-W*Z,ne=Ve*Ne-te*Oe,ve=ie*te-le*Ve,Pe=Oe*le-Ne*ie;if(s){if(ne<0||ve<0||Pe<0)return null}else if((ne<0||ve<0||Pe<0)&&(ne>0||ve>0||Pe>0))return null;const xe=ne+ve+Pe;if(xe===0)return null;const Fe=J*(ne*I+ve*b+Pe*Z);return(xe>0?Fe<0:Fe>0)?null:this.at(Fe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wc extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nl=new lt,ci=new Ec,zs=new Ji,il=new G,Os=new G,Bs=new G,ks=new G,$r=new G,Hs=new G,sl=new G,Gs=new G;class Xe extends Rt{constructor(e=new Mt,t=new wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Hs.set(0,0,0);for(let h=0,d=r.length;h<d;h++){const m=o[h],f=r[h];m!==0&&($r.fromBufferAttribute(f,e),a?Hs.addScaledVector($r,m):Hs.addScaledVector($r.sub(t),m))}t.add(Hs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(zs.containsPoint(ci.origin)===!1&&(ci.intersectSphere(zs,il)===null||ci.origin.distanceToSquared(il)>(e.far-e.near)**2))&&(nl.copy(r).invert(),ci.copy(e.ray).applyMatrix4(nl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,d=r.attributes.uv,m=r.attributes.uv1,f=r.attributes.normal,l=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=l.length;g<x;g++){const p=l[g],c=a[p.materialIndex],v=Math.max(p.start,u.start),T=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let S=v,w=T;S<w;S+=3){const A=o.getX(S),C=o.getX(S+1),_=o.getX(S+2);s=Vs(this,c,e,n,d,m,f,A,C,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=g,c=x;p<c;p+=3){const v=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);s=Vs(this,a,e,n,d,m,f,v,T,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let g=0,x=l.length;g<x;g++){const p=l[g],c=a[p.materialIndex],v=Math.max(p.start,u.start),T=Math.min(h.count,Math.min(p.start+p.count,u.start+u.count));for(let S=v,w=T;S<w;S+=3){const A=S,C=S+1,_=S+2;s=Vs(this,c,e,n,d,m,f,A,C,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let p=g,c=x;p<c;p+=3){const v=p,T=p+1,S=p+2;s=Vs(this,a,e,n,d,m,f,v,T,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function ah(i,e,t,n,s,r,a,o){let h;if(e.side===Yt?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,e.side===mi,o),h===null)return null;Gs.copy(o),Gs.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Gs);return d<t.near||d>t.far?null:{distance:d,point:Gs.clone(),object:i}}function Vs(i,e,t,n,s,r,a,o,h,d){i.getVertexPosition(o,Os),i.getVertexPosition(h,Bs),i.getVertexPosition(d,ks);const m=ah(i,e,t,n,Os,Bs,ks,sl);if(m){const f=new G;pn.getBarycoord(sl,Os,Bs,ks,f),s&&(m.uv=pn.getInterpolatedAttribute(s,o,h,d,f,new Ue)),r&&(m.uv1=pn.getInterpolatedAttribute(r,o,h,d,f,new Ue)),a&&(m.normal=pn.getInterpolatedAttribute(a,o,h,d,f,new G),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const l={a:o,b:h,c:d,normal:new G,materialIndex:0};pn.getNormal(Os,Bs,ks,l.normal),m.face=l,m.barycoord=f}return m}class Tc extends Kt{constructor(e=null,t=1,n=1,s,r,a,o,h,d=Ut,m=Ut,f,l){super(null,a,o,h,d,m,s,r,f,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new lt,al=new lt,Ws=[],ol=new yi,oh=new lt,ss=new Xe,rs=new Ji;class Qa extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,oh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),ol.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(ol)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),rs.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),e.ray.intersectsSphere(rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fi),al.multiplyMatrices(n,Fi),ss.matrixWorld=al,ss.raycast(e,Ws);for(let a=0,o=Ws.length;a<o;a++){const h=Ws[a];h.instanceId=r,h.object=this,t.push(h)}Ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tc(new Float32Array(s*this.count),s,this.count,fo,gn));const r=this.morphTexture.source.data.data;let a=0;for(let d=0;d<n.length;d++)a+=n[d];const o=this.geometry.morphTargetsRelative?1:1-a,h=s*e;return r[h]=o,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fi=new Ji,lh=new Ue(.5,.5),Xs=new G;class Mo{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],h=r[2],d=r[3],m=r[4],f=r[5],l=r[6],u=r[7],g=r[8],x=r[9],p=r[10],c=r[11],v=r[12],T=r[13],S=r[14],w=r[15];if(s[0].setComponents(d-a,u-m,c-g,w-v).normalize(),s[1].setComponents(d+a,u+m,c+g,w+v).normalize(),s[2].setComponents(d+o,u+f,c+x,w+T).normalize(),s[3].setComponents(d-o,u-f,c-x,w-T).normalize(),n)s[4].setComponents(h,l,p,S).normalize(),s[5].setComponents(d-h,u-l,c-p,w-S).normalize();else if(s[4].setComponents(d-h,u-l,c-p,w-S).normalize(),t===Pn)s[5].setComponents(d+h,u+l,c+p,w+S).normalize();else if(t===ys)s[5].setComponents(h,l,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=lh.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xs.x=s.normal.x>0?e.max.x:e.min.x,Xs.y=s.normal.y>0?e.max.y:e.min.y,Xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ll=new lt,ja=new Ec,qs=new Ji,Ys=new G;class Ac extends Rt{constructor(e=new Mt,t=new ch){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,e.ray.intersectsSphere(qs)===!1)return;ll.copy(s).invert(),ja.copy(e.ray).applyMatrix4(ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,d=n.index,f=n.attributes.position;if(d!==null){const l=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=l,x=u;g<x;g++){const p=d.getX(g);Ys.fromBufferAttribute(f,p),cl(Ys,p,h,s,e,t,this)}}else{const l=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=l,x=u;g<x;g++)Ys.fromBufferAttribute(f,g),cl(Ys,g,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cl(i,e,t,n,s,r,a){const o=ja.distanceSqToPoint(i);if(o<t){const h=new G;ja.closestPointToPoint(i,h),h.applyMatrix4(n);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;r.push({distance:d,distanceToRay:Math.sqrt(o),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Rc extends Kt{constructor(e=[],t=gi,n,s,r,a,o,h,d,m){super(e,t,n,s,r,a,o,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $i extends Kt{constructor(e,t,n=vn,s,r,a,o=Ut,h=Ut,d,m=Wn,f=1){if(m!==Wn&&m!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const l={width:e,height:t,depth:f};super(l,s,r,a,o,h,m,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class fh extends $i{constructor(e,t=vn,n=gi,s,r,a=Ut,o=Ut,h,d=Wn){const m={width:e,height:e,depth:1},f=[m,m,m,m,m,m];super(e,e,t,n,s,r,a,o,h,d),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cc extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],d=[],m=[],f=[];let l=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(m,3)),this.setAttribute("uv",new xt(f,2));function g(x,p,c,v,T,S,w,A,C,_,y){const R=S/C,P=w/_,I=S/2,z=w/2,U=A/2,b=C+1,D=_+1;let N=0,Z=0;const F=new G;for(let W=0;W<D;W++){const J=W*P-z;for(let ie=0;ie<b;ie++){const le=ie*R-I;F[x]=le*v,F[p]=J*T,F[c]=U,d.push(F.x,F.y,F.z),F[x]=0,F[p]=0,F[c]=A>0?1:-1,m.push(F.x,F.y,F.z),f.push(ie/C),f.push(1-W/_),N+=1}}for(let W=0;W<_;W++)for(let J=0;J<C;J++){const ie=l+J+b*W,le=l+J+b*(W+1),Oe=l+(J+1)+b*(W+1),Ne=l+(J+1)+b*W;h.push(ie,le,Ne),h.push(le,Oe,Ne),Z+=6}o.addGroup(u,Z,y),u+=Z,l+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ms extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],h=[],d=[],m=t/2,f=Math.PI/2*e,l=t,u=2*f+l,g=n*2+r,x=s+1,p=new G,c=new G;for(let v=0;v<=g;v++){let T=0,S=0,w=0,A=0;if(v<=n){const y=v/n,R=y*Math.PI/2;S=-m-e*Math.cos(R),w=e*Math.sin(R),A=-e*Math.cos(R),T=y*f}else if(v<=n+r){const y=(v-n)/r;S=-m+y*t,w=e,A=0,T=f+y*l}else{const y=(v-n-r)/n,R=y*Math.PI/2;S=m+e*Math.sin(R),w=e*Math.cos(R),A=e*Math.sin(R),T=f+l+y*f}const C=Math.max(0,Math.min(1,T/u));let _=0;v===0?_=.5/s:v===g&&(_=-.5/s);for(let y=0;y<=s;y++){const R=y/s,P=R*Math.PI*2,I=Math.sin(P),z=Math.cos(P);c.x=-w*z,c.y=S,c.z=w*I,o.push(c.x,c.y,c.z),p.set(-w*z,A,w*I),p.normalize(),h.push(p.x,p.y,p.z),d.push(R+_,C)}if(v>0){const y=(v-1)*x;for(let R=0;R<s;R++){const P=y+R,I=y+R+1,z=v*x+R,U=v*x+R+1;a.push(P,I,z),a.push(I,U,z)}}}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class _n extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};const d=this;s=Math.floor(s),r=Math.floor(r);const m=[],f=[],l=[],u=[];let g=0;const x=[],p=n/2;let c=0;v(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(m),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(u,2));function v(){const S=new G,w=new G;let A=0;const C=(t-e)/n;for(let _=0;_<=r;_++){const y=[],R=_/r,P=R*(t-e)+e;for(let I=0;I<=s;I++){const z=I/s,U=z*h+o,b=Math.sin(U),D=Math.cos(U);w.x=P*b,w.y=-R*n+p,w.z=P*D,f.push(w.x,w.y,w.z),S.set(b,C,D).normalize(),l.push(S.x,S.y,S.z),u.push(z,1-R),y.push(g++)}x.push(y)}for(let _=0;_<s;_++)for(let y=0;y<r;y++){const R=x[y][_],P=x[y+1][_],I=x[y+1][_+1],z=x[y][_+1];(e>0||y!==0)&&(m.push(R,P,z),A+=3),(t>0||y!==r-1)&&(m.push(P,I,z),A+=3)}d.addGroup(c,A,0),c+=A}function T(S){const w=g,A=new Ue,C=new G;let _=0;const y=S===!0?e:t,R=S===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*R,0),l.push(0,R,0),u.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const U=I/s*h+o,b=Math.cos(U),D=Math.sin(U);C.x=y*D,C.y=p*R,C.z=y*b,f.push(C.x,C.y,C.z),l.push(0,R,0),A.x=b*.5+.5,A.y=D*.5*R+.5,u.push(A.x,A.y),g++}for(let I=0;I<s;I++){const z=w+I,U=P+I;S===!0?m.push(U,U+1,z):m.push(U+1,U,z),_+=3}d.addGroup(c,_,S===!0?1:2),c+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bs extends _n{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new bs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),d(n),m(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const T=new G,S=new G,w=new G;for(let A=0;A<t.length;A+=3)u(t[A+0],T),u(t[A+1],S),u(t[A+2],w),h(T,S,w,v)}function h(v,T,S,w){const A=w+1,C=[];for(let _=0;_<=A;_++){C[_]=[];const y=v.clone().lerp(S,_/A),R=T.clone().lerp(S,_/A),P=A-_;for(let I=0;I<=P;I++)I===0&&_===A?C[_][I]=y:C[_][I]=y.clone().lerp(R,I/P)}for(let _=0;_<A;_++)for(let y=0;y<2*(A-_)-1;y++){const R=Math.floor(y/2);y%2===0?(l(C[_][R+1]),l(C[_+1][R]),l(C[_][R])):(l(C[_][R+1]),l(C[_+1][R+1]),l(C[_+1][R]))}}function d(v){const T=new G;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(v),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function m(){const v=new G;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];const S=p(v)/2/Math.PI+.5,w=c(v)/Math.PI+.5;a.push(S,1-w)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){const T=a[v+0],S=a[v+2],w=a[v+4],A=Math.max(T,S,w),C=Math.min(T,S,w);A>.9&&C<.1&&(T<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function l(v){r.push(v.x,v.y,v.z)}function u(v,T){const S=v*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function g(){const v=new G,T=new G,S=new G,w=new G,A=new Ue,C=new Ue,_=new Ue;for(let y=0,R=0;y<r.length;y+=9,R+=6){v.set(r[y+0],r[y+1],r[y+2]),T.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),A.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),w.copy(v).add(T).add(S).divideScalar(3);const P=p(w);x(A,R+0,v,P),x(C,R+2,T,P),x(_,R+4,S,P)}}function x(v,T,S,w){w<0&&v.x===1&&(a[T]=v.x-1),S.x===0&&S.z===0&&(a[T]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function c(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.vertices,e.indices,e.radius,e.detail)}}class dr extends So{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dr(e.radius,e.detail)}}class vi extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),h=Math.floor(s),d=o+1,m=h+1,f=e/o,l=t/h,u=[],g=[],x=[],p=[];for(let c=0;c<m;c++){const v=c*l-a;for(let T=0;T<d;T++){const S=T*f-r;g.push(S,-v,0),x.push(0,0,1),p.push(T/o),p.push(1-c/h)}}for(let c=0;c<h;c++)for(let v=0;v<o;v++){const T=v+d*c,S=v+d*(c+1),w=v+1+d*(c+1),A=v+1+d*c;u.push(T,S,A),u.push(S,w,A)}this.setIndex(u),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jt extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(a+o,Math.PI);let d=0;const m=[],f=new G,l=new G,u=[],g=[],x=[],p=[];for(let c=0;c<=n;c++){const v=[],T=c/n,S=a+T*o,w=e*Math.cos(S),A=Math.sqrt(e*e-w*w);let C=0;c===0&&a===0?C=.5/t:c===n&&h===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const y=_/t,R=s+y*r;f.x=-A*Math.cos(R),f.y=w,f.z=A*Math.sin(R),g.push(f.x,f.y,f.z),l.copy(f).normalize(),x.push(l.x,l.y,l.z),p.push(y+C,1-T),v.push(d++)}m.push(v)}for(let c=0;c<n;c++)for(let v=0;v<t;v++){const T=m[c][v+1],S=m[c][v],w=m[c+1][v],A=m[c+1][v+1];(c!==0||a>0)&&u.push(T,S,A),(c!==n-1||h<Math.PI)&&u.push(S,w,A)}this.setIndex(u),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ln extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const h=[],d=[],m=[],f=[],l=new G,u=new G,g=new G;for(let x=0;x<=n;x++){const p=a+x/n*o;for(let c=0;c<=s;c++){const v=c/s*r;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),d.push(u.x,u.y,u.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),g.subVectors(u,l).normalize(),m.push(g.x,g.y,g.z),f.push(c/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){const c=(s+1)*x+p-1,v=(s+1)*(x-1)+p-1,T=(s+1)*(x-1)+p,S=(s+1)*x+p;h.push(c,v,S),h.push(v,T,S)}this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(m,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(fl(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Zi(i[t]);for(const s in n)e[s]=n[s]}return e}function fl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const uh={clone:Zi,merge:Wt};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mh extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pt extends bi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=gr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xt extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=gr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gh extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xh extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lc extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class _h extends Lc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Zr=new lt,hl=new G,ul=new G;class vh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),ul.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ul),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,d=s?s.y/r.y:0;e.coordinateSystem===ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+d,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+d,0,0,.5,.5,0,0,0,1),t.multiply(Zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ks=new G,$s=new Si,bn=new G;class Ic extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ks,$s,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,$s,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ks,$s,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,$s,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new G,dl=new Ue,pl=new Ue;class on extends Ic{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,dl,pl),t.subVectors(pl,dl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/h,t-=a.offsetY*n/d,s*=a.width/h,n*=a.height/d}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _r extends Ic{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=m*this.view.offsetY,h=o-m*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mh extends vh{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends Lc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const zi=-90,Oi=1;class yh extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(zi,Oi,e,t);s.layers=this.layers,this.add(s);const r=new on(zi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new on(zi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new on(zi,Oi,e,t);o.layers=this.layers,this.add(o);const h=new on(zi,Oi,e,t);h.layers=this.layers,this.add(h);const d=new on(zi,Oi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,h]=t;for(const d of t)this.remove(d);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,h,d,m]=this.children,f=e.getRenderTarget(),l=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(f,l,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bh extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Eh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=wh.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function wh(){this._document.hidden===!1&&this.reset()}const Ro=class Ro{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ro.prototype.isMatrix2=!0;let ml=Ro;function gl(i,e,t,n){const s=Th(n);switch(t){case mc:return i*e;case fo:return i*e/s.components*s.byteLength;case ho:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case uo:return i*e*2/s.components*s.byteLength;case gc:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case po:return i*e*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:case Ea:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case ba:return Math.max(i,8)*Math.max(e,8)/2;case wa:case Ta:case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case or:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ka:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lr:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Th(i){switch(i){case tn:case hc:return{byteLength:1,components:1};case Ms:case uc:case Mn:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case vn:case oo:case gn:return{byteLength:4,components:1};case dc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ah(i){const e=new WeakMap;function t(o,h){const d=o.array,m=o.usage,f=d.byteLength,l=i.createBuffer();i.bindBuffer(h,l),i.bufferData(h,d,m),o.onUploadCallback();let u;if(d instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)u=i.HALF_FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)u=i.SHORT;else if(d instanceof Uint32Array)u=i.UNSIGNED_INT;else if(d instanceof Int32Array)u=i.INT;else if(d instanceof Int8Array)u=i.BYTE;else if(d instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:l,type:u,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,h,d){const m=h.array,f=h.updateRanges;if(i.bindBuffer(d,o),f.length===0)i.bufferSubData(d,0,m);else{f.sort((u,g)=>u.start-g.start);let l=0;for(let u=1;u<f.length;u++){const g=f[l],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++l,f[l]=x)}f.length=l+1;for(let u=0,g=f.length;u<g;u++){const x=f[u];i.bufferSubData(d,x.start*m.BYTES_PER_ELEMENT,m,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);h&&(i.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=e.get(o);(!m||m.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=e.get(o);if(d===void 0)e.set(o,t(o,h));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,h),d.version=o.version}}return{get:s,remove:r,update:a}}var Rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ch=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ou=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$d=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Rh,alphahash_pars_fragment:Ch,alphamap_fragment:Ph,alphamap_pars_fragment:Lh,alphatest_fragment:Ih,alphatest_pars_fragment:Dh,aomap_fragment:Uh,aomap_pars_fragment:Nh,batching_pars_vertex:Fh,batching_vertex:zh,begin_vertex:Oh,beginnormal_vertex:Bh,bsdfs:kh,iridescence_fragment:Hh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Vh,clipping_planes_pars_fragment:Wh,clipping_planes_pars_vertex:Xh,clipping_planes_vertex:qh,color_fragment:Yh,color_pars_fragment:Kh,color_pars_vertex:$h,color_vertex:Zh,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:jh,displacementmap_pars_vertex:eu,displacementmap_vertex:tu,emissivemap_fragment:nu,emissivemap_pars_fragment:iu,colorspace_fragment:su,colorspace_pars_fragment:ru,envmap_fragment:au,envmap_common_pars_fragment:ou,envmap_pars_fragment:lu,envmap_pars_vertex:cu,envmap_physical_pars_fragment:Mu,envmap_vertex:fu,fog_vertex:hu,fog_pars_vertex:uu,fog_fragment:du,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:xu,lights_lambert_pars_fragment:_u,lights_pars_begin:vu,lights_toon_fragment:Su,lights_toon_pars_fragment:yu,lights_phong_fragment:bu,lights_phong_pars_fragment:Eu,lights_physical_fragment:wu,lights_physical_pars_fragment:Tu,lights_fragment_begin:Au,lights_fragment_maps:Ru,lights_fragment_end:Cu,lightprobes_pars_fragment:Pu,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Iu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Uu,map_fragment:Nu,map_pars_fragment:Fu,map_particle_fragment:zu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Hu,morphcolor_vertex:Gu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:qu,normal_fragment_maps:Yu,normal_pars_fragment:Ku,normal_pars_vertex:$u,normal_vertex:Zu,normalmap_pars_fragment:Ju,clearcoat_normal_fragment_begin:Qu,clearcoat_normal_fragment_maps:ju,clearcoat_pars_fragment:ed,iridescence_pars_fragment:td,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:sd,project_vertex:rd,dithering_fragment:ad,dithering_pars_fragment:od,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:fd,shadowmap_pars_vertex:hd,shadowmap_vertex:ud,shadowmask_pars_fragment:dd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:gd,skinnormal_vertex:xd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:yd,transmission_pars_fragment:bd,uv_pars_fragment:Ed,uv_pars_vertex:wd,uv_vertex:Td,worldpos_vertex:Ad,background_vert:Rd,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Ld,cube_vert:Id,cube_frag:Dd,depth_vert:Ud,depth_frag:Nd,distance_vert:Fd,distance_frag:zd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:kd,linedashed_frag:Hd,meshbasic_vert:Gd,meshbasic_frag:Vd,meshlambert_vert:Wd,meshlambert_frag:Xd,meshmatcap_vert:qd,meshmatcap_frag:Yd,meshnormal_vert:Kd,meshnormal_frag:$d,meshphong_vert:Zd,meshphong_frag:Jd,meshphysical_vert:Qd,meshphysical_frag:jd,meshtoon_vert:ep,meshtoon_frag:tp,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:ap,sprite_frag:op},de={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Rn={basic:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Wt([de.common,de.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Wt([de.lights,de.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Rn.physical={uniforms:Wt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Zs={r:0,b:0,g:0},lp=new lt,Uc=new De;Uc.set(-1,0,0,0,1,0,0,0,1);function cp(i,e,t,n,s,r){const a=new ye(0);let o=s===!0?0:1,h,d,m=null,f=0,l=null;function u(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const S=v.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(v){let T=!1;const S=u(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){const S=u(T);S&&(S.isCubeTexture||S.mapping===xr)?(d===void 0&&(d=new Xe(new _i(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Zi(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Uc),d.material.toneMapped=Ke.getTransfer(S.colorSpace)!==tt,(m!==S||f!==S.version||l!==i.toneMapping)&&(d.material.needsUpdate=!0,m=S,f=S.version,l=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Xe(new vi(2,2),new Ht({name:"BackgroundMaterial",uniforms:Zi(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(m!==S||f!==S.version||l!==i.toneMapping)&&(h.material.needsUpdate=!0,m=S,f=S.version,l=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function p(v,T){v.getRGB(Zs,Pc(i)),t.buffers.color.setClear(Zs.r,Zs.g,Zs.b,T,r)}function c(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:x,dispose:c}}function fp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=l(null);let r=s,a=!1;function o(P,I,z,U,b){let D=!1;const N=f(P,U,z,I);r!==N&&(r=N,d(r.object)),D=u(P,U,z,b),D&&g(P,U,z,b),b!==null&&e.update(b,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,S(P,I,z,U),b!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))}function h(){return i.createVertexArray()}function d(P){return i.bindVertexArray(P)}function m(P){return i.deleteVertexArray(P)}function f(P,I,z,U){const b=U.wireframe===!0;let D=n[I.id];D===void 0&&(D={},n[I.id]=D);const N=P.isInstancedMesh===!0?P.id:0;let Z=D[N];Z===void 0&&(Z={},D[N]=Z);let F=Z[z.id];F===void 0&&(F={},Z[z.id]=F);let W=F[b];return W===void 0&&(W=l(h()),F[b]=W),W}function l(P){const I=[],z=[],U=[];for(let b=0;b<t;b++)I[b]=0,z[b]=0,U[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:U,object:P,attributes:{},index:null}}function u(P,I,z,U){const b=r.attributes,D=I.attributes;let N=0;const Z=z.getAttributes();for(const F in Z)if(Z[F].location>=0){const J=b[F];let ie=D[F];if(ie===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;N++}return r.attributesNum!==N||r.index!==U}function g(P,I,z,U){const b={},D=I.attributes;let N=0;const Z=z.getAttributes();for(const F in Z)if(Z[F].location>=0){let J=D[F];J===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),b[F]=ie,N++}r.attributes=b,r.attributesNum=N,r.index=U}function x(){const P=r.newAttributes;for(let I=0,z=P.length;I<z;I++)P[I]=0}function p(P){c(P,0)}function c(P,I){const z=r.newAttributes,U=r.enabledAttributes,b=r.attributeDivisors;z[P]=1,U[P]===0&&(i.enableVertexAttribArray(P),U[P]=1),b[P]!==I&&(i.vertexAttribDivisor(P,I),b[P]=I)}function v(){const P=r.newAttributes,I=r.enabledAttributes;for(let z=0,U=I.length;z<U;z++)I[z]!==P[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function T(P,I,z,U,b,D,N){N===!0?i.vertexAttribIPointer(P,I,z,b,D):i.vertexAttribPointer(P,I,z,U,b,D)}function S(P,I,z,U){x();const b=U.attributes,D=z.getAttributes(),N=I.defaultAttributeValues;for(const Z in D){const F=D[Z];if(F.location>=0){let W=b[Z];if(W===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const J=W.normalized,ie=W.itemSize,le=e.get(W);if(le===void 0)continue;const Oe=le.buffer,Ne=le.type,Ve=le.bytesPerElement,te=Ne===i.INT||Ne===i.UNSIGNED_INT||W.gpuType===oo;if(W.isInterleavedBufferAttribute){const ne=W.data,ve=ne.stride,Pe=W.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<F.locationSize;xe++)c(F.location+xe,ne.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<F.locationSize;xe++)p(F.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let xe=0;xe<F.locationSize;xe++)T(F.location+xe,ie/F.locationSize,Ne,J,ve*Ve,(Pe+ie/F.locationSize*xe)*Ve,te)}else{if(W.isInstancedBufferAttribute){for(let ne=0;ne<F.locationSize;ne++)c(F.location+ne,W.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ne=0;ne<F.locationSize;ne++)p(F.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ne=0;ne<F.locationSize;ne++)T(F.location+ne,ie/F.locationSize,Ne,J,ie*Ve,ie/F.locationSize*ne*Ve,te)}}else if(N!==void 0){const J=N[Z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(F.location,J);break;case 3:i.vertexAttrib3fv(F.location,J);break;case 4:i.vertexAttrib4fv(F.location,J);break;default:i.vertexAttrib1fv(F.location,J)}}}}v()}function w(){y();for(const P in n){const I=n[P];for(const z in I){const U=I[z];for(const b in U){const D=U[b];for(const N in D)m(D[N].object),delete D[N];delete U[b]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const z in I){const U=I[z];for(const b in U){const D=U[b];for(const N in D)m(D[N].object),delete D[N];delete U[b]}}delete n[P.id]}function C(P){for(const I in n){const z=n[I];for(const U in z){const b=z[U];if(b[P.id]===void 0)continue;const D=b[P.id];for(const N in D)m(D[N].object),delete D[N];delete b[P.id]}}}function _(P){for(const I in n){const z=n[I],U=P.isInstancedMesh===!0?P.id:0,b=z[U];if(b!==void 0){for(const D in b){const N=b[D];for(const Z in N)m(N[Z].object),delete N[Z];delete b[D]}delete z[U],Object.keys(z).length===0&&delete n[I]}}}function y(){R(),a=!0,r!==s&&(r=s,d(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function hp(i,e,t){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),t.update(d,n,1)}function a(h,d,m){m!==0&&(i.drawArraysInstanced(n,h,d,m),t.update(d,n,m))}function o(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,m);let l=0;for(let u=0;u<m;u++)l+=d[u];t.update(l,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function up(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==tn&&C!==gn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(Ie("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const f=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&l===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:f,reversedDepthBuffer:l,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:c,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:A}}function dp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ni,o=new De,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const u=f.length!==0||l||n!==0||s;return s=l,n=f.length,u},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,l){t=m(f,l,0)},this.setState=function(f,l,u){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,c=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?m(null):d();else{const v=r?0:n,T=v*4;let S=c.clippingState||null;h.value=S,S=m(g,l,T,u);for(let w=0;w!==T;++w)S[w]=t[w];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(f,l,u,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=h.value,g!==!0||p===null){const c=u+x*4,v=l.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<c)&&(p=new Float32Array(c));for(let T=0,S=u;T!==x;++T,S+=4)a.copy(f[T]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}h.value=p,h.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const Vi=4,pp=6,mp=20,gp=256,as=new _r,xl=new ye;let Jr=null,Qr=0,jr=0,ea=!1;const xp=new G,hi=new G;class _l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=xp}=r;Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Qr,jr),this._renderer.xr.enabled=ea,e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Mn,format:xn,colorSpace:fr,depthBuffer:!1},s=vl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_p(r)),this._blurMaterial=Mp(r,e,t),this._ggxMaterial=vp(r,e,t)}return s}_compileMaterial(e){const t=new Xe(new Mt,e);this._renderer.compile(t,as)}_sceneToCubeUV(e,t,n,s,r){const h=new on(90,1,t,n),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,l=f.autoClear,u=f.toneMapping;f.getClearColor(xl),f.toneMapping=In,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new _i,new wc({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let c=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,c=!0):(p.color.copy(xl),c=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(h.up.set(0,d[T],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+m[T],r.y,r.z)):S===1?(h.up.set(0,0,d[T]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+m[T],r.z)):(h.up.set(0,d[T],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+m[T]));const w=this._cubeSize;Bi(s,S*w,T>2?w:0,w,w),f.setRenderTarget(s),c&&f.render(x,h),f.render(e,h)}f.toneMapping=u,f.autoClear=l,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===gi||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const h=this._cubeSize;Bi(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(a,as)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const h=a.uniforms,d=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),f=Math.sqrt(d*d-m*m),l=d*1.25,u=f*l,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-Vi?n-g+Vi:0),c=4*(this._cubeSize-x);h.envMap.value=e.texture,h.roughness.value=u,h.mipInt.value=g-t,Bi(r,p,c,3*x,2*x),s.setRenderTarget(r),s.render(o,as),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=g-n,Bi(e,p,c,3*x,2*x),s.setRenderTarget(e),s.render(o,as)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;const d=o.uniforms;d.envMap.value=e.texture,d.sigma.value=r,d.mipInt.value=this._lodMax-n;const m=this._sizeLods[s],f=3*m*(s>this._lodMax-Vi?s-this._lodMax+Vi:0),l=4*(this._cubeSize-m);Bi(t,f,l,3*m,2*m),a.setRenderTarget(t),a.render(h,as)}}function _p(i){const e=[],t=[];let n=i;const s=i-Vi+1+pp;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),h=-o,d=1+o,m=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,l=6,u=3,g=new Float32Array(u*l*f),x=new Float32Array(u*l*f);for(let c=0;c<f;c++){const v=c%3*2/3-1,T=c>2?0:-1,S=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(S,u*l*c);for(let w=0;w<l;w++){const A=m[w*2]*2-1,C=m[w*2+1]*2-1;c===0?hi.set(1,C,A):c===1?hi.set(-A,1,-C):c===2?hi.set(-A,C,1):c===3?hi.set(-1,C,-A):c===4?hi.set(-A,-1,C):hi.set(A,C,-1),hi.toArray(x,(c*l+w)*u)}}const p=new Mt;p.setAttribute("position",new dt(g,u)),p.setAttribute("outputDirection",new dt(x,u)),t.push(new Xe(p,null)),n>Vi&&n--}return{lodMeshes:t,sizeLods:e}}function vl(i,e,t){const n=new cn(i,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function vp(i,e,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Mp(i,e,t){return new Ht({name:"SphericalGaussianBlur",defines:{SAMPLES:mp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ml(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Sl(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nc extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _i(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Gn});r.uniforms.tEquirect.value=t;const a=new Xe(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=kt),new yh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Sp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(l,u=!1){return l==null?null:u?a(l):r(l)}function r(l){if(l&&l.isTexture){const u=l.mapping;if(u===Er||u===wr)if(e.has(l)){const g=e.get(l).texture;return o(g,l.mapping)}else{const g=l.image;if(g&&g.height>0){const x=new Nc(g.height);return x.fromEquirectangularTexture(i,l),e.set(l,x),l.addEventListener("dispose",d),o(x.texture,l.mapping)}else return null}}return l}function a(l){if(l&&l.isTexture){const u=l.mapping,g=u===Er||u===wr,x=u===gi||u===Ki;if(g||x){let p=t.get(l);const c=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==c)return n===null&&(n=new _l(i)),p=g?n.fromEquirectangular(l,p):n.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),p.texture;if(p!==void 0)return p.texture;{const v=l.image;return g&&v&&v.height>0||x&&v&&h(v)?(n===null&&(n=new _l(i)),p=g?n.fromEquirectangular(l):n.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),l.addEventListener("dispose",m),p.texture):null}}}return l}function o(l,u){return u===Er?l.mapping=gi:u===wr&&(l.mapping=Ki),l}function h(l){let u=0;const g=6;for(let x=0;x<g;x++)l[x]!==void 0&&u++;return u===g}function d(l){const u=l.target;u.removeEventListener("dispose",d);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function m(l){const u=l.target;u.removeEventListener("dispose",m);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function yp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function bp(i,e,t,n){const s={},r=new WeakMap;function a(f){const l=f.target;l.index!==null&&e.remove(l.index);for(const g in l.attributes)e.remove(l.attributes[g]);l.removeEventListener("dispose",a),delete s[l.id];const u=r.get(l);u&&(e.remove(u),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(f,l){return s[l.id]===!0||(l.addEventListener("dispose",a),s[l.id]=!0,t.memory.geometries++),l}function h(f){const l=f.attributes;for(const u in l)e.update(l[u],i.ARRAY_BUFFER)}function d(f){const l=[],u=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(u!==null){const v=u.array;x=u.version;for(let T=0,S=v.length;T<S;T+=3){const w=v[T+0],A=v[T+1],C=v[T+2];l.push(w,A,A,C,C,w)}}else{const v=g.array;x=g.version;for(let T=0,S=v.length/3-1;T<S;T+=3){const w=T+0,A=T+1,C=T+2;l.push(w,A,A,C,C,w)}}const p=new(g.count>=65535?bc:yc)(l,1);p.version=x;const c=r.get(f);c&&e.remove(c),r.set(f,p)}function m(f){const l=r.get(f);if(l){const u=f.index;u!==null&&l.version<u.version&&d(f)}else d(f);return r.get(f)}return{get:o,update:h,getWireframeAttribute:m}}function Ep(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function h(f,l){i.drawElements(n,l,r,f*a),t.update(l,n,1)}function d(f,l,u){u!==0&&(i.drawElementsInstanced(n,l,r,f*a,u),t.update(l,n,u))}function m(f,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,f,0,u);let x=0;for(let p=0;p<u;p++)x+=l[p];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function wp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tp(i,e,t){const n=new WeakMap,s=new vt;function r(a,o,h){const d=a.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=m!==void 0?m.length:0;let l=n.get(o);if(l===void 0||l.count!==f){let R=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var u=R;l!==void 0&&l.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let w=o.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*f),_=new _c(C,w,A,f);_.type=gn,_.needsUpdate=!0;const y=S*4;for(let P=0;P<f;P++){const I=c[P],z=v[P],U=T[P],b=w*A*4*P;for(let D=0;D<I.count;D++){const N=D*y;g===!0&&(s.fromBufferAttribute(I,D),C[b+N+0]=s.x,C[b+N+1]=s.y,C[b+N+2]=s.z,C[b+N+3]=0),x===!0&&(s.fromBufferAttribute(z,D),C[b+N+4]=s.x,C[b+N+5]=s.y,C[b+N+6]=s.z,C[b+N+7]=0),p===!0&&(s.fromBufferAttribute(U,D),C[b+N+8]=s.x,C[b+N+9]=s.y,C[b+N+10]=s.z,C[b+N+11]=U.itemSize===4?s.w:1)}}l={count:f,texture:_,size:new Ue(w,A)},n.set(o,l),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<d.length;p++)g+=d[p];const x=o.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:r}}function Ap(i,e,t,n,s){let r=new WeakMap;function a(d){const m=s.render.frame,f=d.geometry,l=e.get(d,f);if(r.get(l)!==m&&(e.update(l),r.set(l,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==m&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,m))),d.isSkinnedMesh){const u=d.skeleton;r.get(u)!==m&&(u.update(),r.set(u,m))}return l}function o(){r=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:a,dispose:o}}const Rp={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[oc]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[ao]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function Cp(i,e,t,n,s,r){const a=new cn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,h=null;const d=new Mt;d.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new xt([0,2,0,0,2,0],2));const m=new mh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Xe(d,m),l=new _r(-1,1,1,-1,0,1);let u=null,g=null,x=!1,p,c=null,v=[],T=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),h!==null&&h.setSize(S,w);for(let A=0;A<v.length;A++){const C=v[A];C.setSize&&C.setSize(S,w)}},this.setEffects=function(S){v=S,T=v.length>0&&v[0].isRenderPass===!0;const w=a.width,A=a.height;v.length>0&&o===null&&(o=new cn(w,A,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),h=new cn(w,A,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const _=v[C];_.setSize&&_.setSize(w,A)}},this.begin=function(S,w){if(x||S.toneMapping===In&&v.length===0)return!1;if(c=w,w!==null){const A=w.width,C=w.height;(a.width!==A||a.height!==C)&&this.setSize(A,C)}return T===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=In,!0},this.hasRenderPass=function(){return T},this.end=function(S,w){S.toneMapping=p,x=!0;let A=a,C=o;for(let _=0;_<v.length;_++){const y=v[_];y.enabled!==!1&&(y.render(S,C,A,w),y.needsSwap!==!1&&(A=C,C=C===o?h:o))}if(u!==S.outputColorSpace||g!==S.toneMapping){u=S.outputColorSpace,g=S.toneMapping,m.defines={},Ke.getTransfer(u)===tt&&(m.defines.SRGB_TRANSFER="");const _=Rp[g];_&&(m.defines[_]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(c),S.render(f,l),c=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),d.dispose(),m.dispose()}}const Fc=new Kt,eo=new $i(1,1),zc=new _c,Oc=new qf,Bc=new Rc,yl=[],bl=[],El=new Float32Array(16),wl=new Float32Array(9),Tl=new Float32Array(4);function Qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=yl[s];if(r===void 0&&(r=new Float32Array(s),yl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mr(i,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Up(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Tl.set(n),i.uniformMatrix2fv(this.addr,!1,Tl),It(t,n)}}function Np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;wl.set(n),i.uniformMatrix3fv(this.addr,!1,wl),It(t,n)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;El.set(n),i.uniformMatrix4fv(this.addr,!1,El),It(t,n)}}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Xp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eo.compareFunction=t.isReversedDepthBuffer()?go:mo,r=eo):r=Fc,t.setTexture2D(e||r,s)}function qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Oc,s)}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bc,s)}function Kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zc,s)}function $p(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return zp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return kp;case 5125:return Hp;case 36294:return Gp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Kp}}function Zp(i,e){i.uniform1fv(this.addr,e)}function Jp(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function Qp(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function jp(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function e0(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t0(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n0(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i0(i,e){i.uniform1iv(this.addr,e)}function s0(i,e){i.uniform2iv(this.addr,e)}function r0(i,e){i.uniform3iv(this.addr,e)}function a0(i,e){i.uniform4iv(this.addr,e)}function o0(i,e){i.uniform1uiv(this.addr,e)}function l0(i,e){i.uniform2uiv(this.addr,e)}function c0(i,e){i.uniform3uiv(this.addr,e)}function f0(i,e){i.uniform4uiv(this.addr,e)}function h0(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=eo:a=Fc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function u0(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Oc,r[a])}function d0(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Bc,r[a])}function p0(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zc,r[a])}function m0(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return Qp;case 35666:return jp;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$p(t.type)}}class x0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m0(t.type)}}class _0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Al(i,e){i.seq.push(e),i.map[e.id]=e}function v0(i,e,t){const n=i.name,s=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),a=ta.lastIndex;let o=r[1];const h=r[2]==="]",d=r[3];if(h&&(o=o|0),d===void 0||d==="["&&a+2===s){Al(t,d===void 0?new g0(o,i,e):new x0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new _0(o),Al(t,f)),t=f}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),h=e.getUniformLocation(t,o.name);v0(o,h,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Rl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const M0=37297;let S0=0;function y0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cl=new De;function b0(i){Ke._getMatrix(Cl,Ke.workingColorSpace,i);const e=`mat3( ${Cl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case hr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+y0(i.getShaderSource(e),o)}else return r}function E0(i,e){const t=b0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const w0={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[oc]:"ACESFilmic",[cc]:"AgX",[ao]:"Neutral",[lc]:"Custom"};function T0(i,e){const t=w0[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new G;function A0(){Ke.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function C0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hs(i){return i!==""}function Ll(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Il(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(L0,D0)}const I0=new Map;function D0(i,e){let t=He[e];if(t===void 0){const n=I0.get(e);if(n!==void 0)t=He[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return to(t)}const U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(i){return i.replace(U0,N0)}function N0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ul(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const F0={[ds]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function z0(i){return F0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const O0={[gi]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE_UV"};function B0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":O0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const k0={[Ki]:"ENVMAP_MODE_REFRACTION"};function H0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G0={[gr]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function V0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G0[i.combine]||"ENVMAP_BLENDING_NONE"}function W0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function X0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const h=z0(t),d=B0(t),m=H0(t),f=V0(t),l=W0(t),u=R0(t),g=C0(r),x=s.createProgram();let p,c,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),c.length>0&&(c+=`
`)):(p=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),c=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?He.tonemapping_pars_fragment:"",t.toneMapping!==In?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,E0("linearToOutputTexel",t.outputColorSpace),A0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=to(a),a=Ll(a,t),a=Il(a,t),o=to(o),o=Ll(o,t),o=Il(o,t),a=Dl(a),o=Dl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const T=v+p+a,S=v+c+o,w=Rl(s,s.VERTEX_SHADER,T),A=Rl(s,s.FRAGMENT_SHADER,S);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(w)||"",U=s.getShaderInfoLog(A)||"",b=I.trim(),D=z.trim(),N=U.trim();let Z=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const W=Pl(s,w,"vertex"),J=Pl(s,A,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+b+`
`+W+`
`+J)}else b!==""?Ie("WebGLProgram: Program Info Log:",b):(D===""||N==="")&&(F=!1);F&&(P.diagnostics={runnable:Z,programLog:b,vertexShader:{log:D,prefix:p},fragmentShader:{log:N,prefix:c}})}s.deleteShader(w),s.deleteShader(A),_=new ar(s,x),y=P0(s,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,M0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let q0=0;class Y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new K0(e),t.set(e,n)),n}}class K0{constructor(e){this.id=q0++,this.code=e,this.usedTimes=0}}function $0(i){return i===xi||i===or||i===lr}function Z0(i,e,t,n,s,r){const a=new vc,o=new Y0,h=new Set,d=[],m=new Map,f=n.logarithmicDepthBuffer;let l=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return h.add(_),_===0?"uv":`uv${_}`}function x(_,y,R,P,I,z){const U=P.fog,b=I.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=e.get(_.envMap||D,N),F=Z&&Z.mapping===xr?Z.image.height:null,W=u[_.type];_.precision!==null&&(l=n.getMaxPrecision(_.precision),l!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",l,"instead."));const J=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,ie=J!==void 0?J.length:0;let le=0;b.morphAttributes.position!==void 0&&(le=1),b.morphAttributes.normal!==void 0&&(le=2),b.morphAttributes.color!==void 0&&(le=3);let Oe,Ne,Ve,te;if(W){const ht=Rn[W];Oe=ht.vertexShader,Ne=ht.fragmentShader}else{Oe=_.vertexShader,Ne=_.fragmentShader;const ht=o.getVertexShaderStage(_),je=o.getFragmentShaderStage(_);o.update(_,ht,je),Ve=ht.id,te=je.id}const ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,Fe=!!_.map,_t=!!_.matcap,ze=!!Z,qe=!!_.aoMap,nt=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,it=!!_.normalMap,mt=!!_.displacementMap,Ct=!!_.emissiveMap,ct=!!_.metalnessMap,ft=!!_.roughnessMap,H=_.anisotropy>0,St=_.clearcoat>0,Ze=_.dispersion>0,L=_.retroreflectivity>0,M=_.iridescence>0,V=_.sheen>0,$=_.transmission>0,ee=H&&!!_.anisotropyMap,ce=St&&!!_.clearcoatMap,K=St&&!!_.clearcoatNormalMap,X=St&&!!_.clearcoatRoughnessMap,j=M&&!!_.iridescenceMap,se=M&&!!_.iridescenceThicknessMap,Me=V&&!!_.sheenColorMap,he=V&&!!_.sheenRoughnessMap,ue=!!_.specularMap,we=!!_.specularColorMap,Ce=!!_.specularIntensityMap,Le=$&&!!_.transmissionMap,k=$&&!!_.thicknessMap,fe=!!_.gradientMap,O=!!_.alphaMap,oe=_.alphaTest>0,pe=!!_.alphaHash,re=!!_.extensions;let Re=In;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=i.toneMapping);const Te={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:Ne,defines:_.defines,customVertexShaderID:Ve,customFragmentShaderID:te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:l,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:_t,envMap:ze,envMapMode:ze&&Z.mapping,envMapCubeUVHeight:F,aoMap:qe,lightMap:nt,bumpMap:Be,normalMap:it,displacementMap:mt,emissiveMap:Ct,normalMapObjectSpace:it&&_.normalMapType===Af,normalMapTangentSpace:it&&_.normalMapType===cr,packedNormalMap:it&&_.normalMapType===cr&&$0(_.normalMap.format),metalnessMap:ct,roughnessMap:ft,anisotropy:H,anisotropyMap:ee,clearcoat:St,clearcoatMap:ce,clearcoatNormalMap:K,clearcoatRoughnessMap:X,dispersion:Ze,retroreflection:L,iridescence:M,iridescenceMap:j,iridescenceThicknessMap:se,sheen:V,sheenColorMap:Me,sheenRoughnessMap:he,specularMap:ue,specularColorMap:we,specularIntensityMap:Ce,transmission:$,transmissionMap:Le,thicknessMap:k,gradientMap:fe,opaque:_.transparent===!1&&_.blending===ps&&_.alphaToCoverage===!1,alphaMap:O,alphaTest:oe,alphaHash:pe,combine:_.combine,mapUv:Fe&&g(_.map.channel),aoMapUv:qe&&g(_.aoMap.channel),lightMapUv:nt&&g(_.lightMap.channel),bumpMapUv:Be&&g(_.bumpMap.channel),normalMapUv:it&&g(_.normalMap.channel),displacementMapUv:mt&&g(_.displacementMap.channel),emissiveMapUv:Ct&&g(_.emissiveMap.channel),metalnessMapUv:ct&&g(_.metalnessMap.channel),roughnessMapUv:ft&&g(_.roughnessMap.channel),anisotropyMapUv:ee&&g(_.anisotropyMap.channel),clearcoatMapUv:ce&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:K&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(_.sheenRoughnessMap.channel),specularMapUv:ue&&g(_.specularMap.channel),specularColorMapUv:we&&g(_.specularColorMap.channel),specularIntensityMapUv:Ce&&g(_.specularIntensityMap.channel),transmissionMapUv:Le&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:O&&g(_.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(it||H),vertexNormals:!!b.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!b.attributes.uv&&(Fe||O),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||b.attributes.normal===void 0&&it===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:le,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===tt,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qt,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=h.has(1),Te.vertexUv2s=h.has(2),Te.vertexUv3s=h.has(3),h.clear(),Te}function p(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)y.push(R),y.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(c(y,_),v(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function c(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function v(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const y=u[_.type];let R;if(y){const P=Rn[y];R=uh.clone(P.uniforms)}else R=_.uniforms;return R}function S(_,y){let R=m.get(y);return R!==void 0?++R.usedTimes:(R=new X0(i,y,_,s),d.push(R),m.set(y,R)),R}function w(_){if(--_.usedTimes===0){const y=d.indexOf(_);d[y]=d[d.length-1],d.pop(),m.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:d,dispose:C}}function J0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(l){let u=0;return l.isInstancedMesh&&(u+=2),l.isSkinnedMesh&&(u+=1),u}function o(l,u,g,x,p,c){let v=i[e];return v===void 0?(v={id:l.id,object:l,geometry:u,material:g,materialVariant:a(l),groupOrder:x,renderOrder:l.renderOrder,z:p,group:c},i[e]=v):(v.id=l.id,v.object=l,v.geometry=u,v.material=g,v.materialVariant=a(l),v.groupOrder=x,v.renderOrder=l.renderOrder,v.z=p,v.group=c),e++,v}function h(l,u,g,x,p,c,v){v.reversedDepth===!0&&(p=-p);const T=o(l,u,g,x,p,c);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function d(l,u,g,x,p,c){const v=o(l,u,g,x,p,c);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function m(l,u){t.length>1&&t.sort(l||Q0),n.length>1&&n.sort(u||Nl),s.length>1&&s.sort(u||Nl)}function f(){for(let l=e,u=i.length;l<u;l++){const g=i[l];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:h,unshift:d,finish:f,sort:m}}function j0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fl,i.set(n,[a])):s>=r.length?(a=new Fl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function em(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new ye};break;case"SpotLight":t={position:new G,direction:new G,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function tm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let nm=0;function im(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sm(i){const e=new em,t=tm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new G);const s=new G,r=new lt,a=new lt;function o(d){let m=0,f=0,l=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,g=0,x=0,p=0,c=0,v=0,T=0,S=0,w=0,A=0,C=0,_=0,y=0,R=0;d.sort(im);for(let I=0,z=d.length;I<z;I++){const U=d[I],b=U.color,D=U.intensity,N=U.distance;let Z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===xi?Z=U.shadow.map.texture:Z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)m+=b.r*D,f+=b.g*D,l+=b.b*D;else if(U.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(U.sh.coefficients[F],D);R++}else if(U.isSunLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,J=t.get(U);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=Z;const ie=W.getViewportCount();for(let le=0;le<ie;le++)n.sunShadowMatrix[x+le]=W.getMatrix(le),n.sunShadowCascade[x+le]=W._cascadeData[le];x+=ie,g++}n.sun[u]=F,u++}else if(U.isDirectionalLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,J=t.get(U);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=U.shadow.matrix,w++}n.directional[p]=F,p++}else if(U.isSpotLight){const F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(b).multiplyScalar(D),F.distance=N,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,n.spot[v]=F;const W=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,W.updateMatrices(U),U.castShadow&&y++),n.spotLightMatrix[v]=W.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=Z,C++}v++}else if(U.isRectAreaLight){const F=e.get(U);F.color.copy(b).multiplyScalar(D),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),n.rectArea[T]=F,T++}else if(U.isPointLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const W=U.shadow,J=t.get(U);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,n.pointShadow[c]=J,n.pointShadowMap[c]=Z,n.pointShadowMatrix[c]=U.shadow.matrix,A++}n.point[c]=F,c++}else if(U.isHemisphereLight){const F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(D),F.groundColor.copy(U.groundColor).multiplyScalar(D),n.hemi[S]=F,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=f,n.ambient[2]=l;const P=n.hash;(P.sunLength!==u||P.directionalLength!==p||P.pointLength!==c||P.spotLength!==v||P.rectAreaLength!==T||P.hemiLength!==S||P.numSunShadows!==g||P.numDirectionalShadows!==w||P.numPointShadows!==A||P.numSpotShadows!==C||P.numSpotMaps!==_||P.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=c,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,P.sunLength=u,P.directionalLength=p,P.pointLength=c,P.spotLength=v,P.rectAreaLength=T,P.hemiLength=S,P.numSunShadows=g,P.numDirectionalShadows=w,P.numPointShadows=A,P.numSpotShadows=C,P.numSpotMaps=_,P.numLightProbes=R,n.version=nm++)}function h(d,m){let f=0,l=0,u=0,g=0,x=0,p=0;const c=m.matrixWorldInverse;for(let v=0,T=d.length;v<T;v++){const S=d[v];if(S.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(c),f++}else if(S.isDirectionalLight){const w=n.directional[l];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),l++}else if(S.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(c),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),g++}else if(S.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(c),a.identity(),r.copy(S.matrixWorld),r.premultiply(c),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(c),u++}else if(S.isHemisphereLight){const w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(c),p++}}}return{setup:o,setupView:h,state:n}}function zl(i){const e=new sm(i),t=[],n=[],s=[];function r(l){f.camera=l,t.length=0,n.length=0,s.length=0}function a(l){t.push(l)}function o(l){n.push(l)}function h(l){s.push(l)}function d(){e.setup(t)}function m(l){e.setupView(t,l)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:d,setupLightsView:m,pushLight:a,pushShadow:o,pushLightProbeGrid:h}}function rm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zl(i),e.set(s,[o])):r>=a.length?(o=new zl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lm=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],cm=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Ol=new lt,os=new G,na=new G;function fm(i,e,t){let n=new Mo;const s=new Ue,r=new Ue,a=new vt,o=new gh,h=new xh,d={},m=t.maxTextureSize,f={[mi]:Yt,[Yt]:mi,[qt]:qt},l=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:am,fragmentShader:om}),u=l.clone();u.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xe(g,l),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let c=this.type;this.render=function(A,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===sf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);const y=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Gn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=c!==this.type;z&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(b=>b.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,b=A.length;U<b;U++){const D=A[U],N=D.shadow;if(N===void 0){Ie("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Z=N.getFrameExtents();s.multiply(Z),r.copy(N.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/Z.x),s.x=r.x*Z.x,N.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/Z.y),s.y=r.y*Z.y,N.mapSize.y=r.y));const F=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=F,N.map===null||z===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===fs){if(D.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new cn(s.x,s.y,{format:xi,type:Mn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new $i(s.x,s.y,gn),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=Wn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut}else D.isPointLight?(N.map=new Nc(s.x),N.map.depthTexture=new fh(s.x,vn)):(N.map=new cn(s.x,s.y),N.map.depthTexture=new $i(s.x,s.y,vn)),N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=Wn,this.type===ds?(N.map.depthTexture.compareFunction=F?go:mo,N.map.depthTexture.minFilter=kt,N.map.depthTexture.magFilter=kt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);const W=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();D.isPointLight!==!0&&N.updateMatrices(D,_);for(let J=0;J<W;J++){const ie=N.getCamera(J);if(D.isPointLight){const le=N.camera,Oe=N.matrix,Ne=D.distance||le.far;Ne!==le.far&&(le.far=Ne,le.updateProjectionMatrix()),os.setFromMatrixPosition(D.matrixWorld),le.position.copy(os),na.copy(le.position),na.add(lm[J]),le.up.copy(cm[J]),le.lookAt(na),le.updateMatrixWorld(),Oe.makeTranslation(-os.x,-os.y,-os.z),Ol.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Ol,le.coordinateSystem,le.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,J),i.clear();else{J===0&&(i.setRenderTarget(N.map),i.clear());const le=N.getViewport(J);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),I.viewport(a)}n=N.getFrustum(J),S(C,_,ie,D,this.type)}N.isPointLightShadow!==!0&&this.type===fs&&v(N,_),N.needsUpdate=!1}c=this.type,p.needsUpdate=!1,i.setRenderTarget(y,R,P)};function v(A,C){const _=e.update(x);l.defines.VSM_SAMPLES!==A.blurSamples&&(l.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new cn(s.x,s.y,{format:xi,type:Mn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),l.uniforms.shadow_pass.value=A.map.depthTexture,l.uniforms.resolution.value.set(A.map.width,A.map.height),l.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,_,l,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,_,u,x,null)}function T(A,C,_,y){let R=null;const P=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?h:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=R.uuid,z=C.uuid;let U=d[I];U===void 0&&(U={},d[I]=U);let b=U[z];b===void 0&&(b=R.clone(),U[z]=b,C.addEventListener("dispose",w)),R=b}if(R.visible=C.visible,R.wireframe=C.wireframe,y===fs?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=i.properties.get(R);I.light=_}return R}function S(A,C,_,y,R){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===fs)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const z=e.update(A),U=A.material;if(Array.isArray(U)){const b=z.groups;for(let D=0,N=b.length;D<N;D++){const Z=b[D],F=U[Z.materialIndex];if(F&&F.visible){const W=T(A,F,y,R);A.onBeforeShadow(i,A,C,_,z,W,Z),i.renderBufferDirect(_,null,z,W,A,Z),A.onAfterShadow(i,A,C,_,z,W,Z)}}}else if(U.visible){const b=T(A,U,y,R);A.onBeforeShadow(i,A,C,_,z,b,null),i.renderBufferDirect(_,null,z,b,A,null),A.onAfterShadow(i,A,C,_,z,b,null)}}const I=A.children;for(let z=0,U=I.length;z<U;z++)S(I[z],C,_,y,R)}function w(A){A.target.removeEventListener("dispose",w);for(const _ in d){const y=d[_],R=A.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function hm(i,e){function t(){let k=!1;const fe=new vt;let O=null;const oe=new vt(0,0,0,0);return{setMask:function(pe){O!==pe&&!k&&(i.colorMask(pe,pe,pe,pe),O=pe)},setLocked:function(pe){k=pe},setClear:function(pe,re,Re,Te,ht){ht===!0&&(pe*=Te,re*=Te,Re*=Te),fe.set(pe,re,Re,Te),oe.equals(fe)===!1&&(i.clearColor(pe,re,Re,Te),oe.copy(fe))},reset:function(){k=!1,O=null,oe.set(-1,0,0,0)}}}function n(){let k=!1,fe=!1,O=null,oe=null,pe=null;return{setReversed:function(re){if(fe!==re){const Re=e.get("EXT_clip_control");re?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Te=pe;pe=null,this.setClear(Te)}},getReversed:function(){return fe},setTest:function(re){re?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(re){O!==re&&!k&&(i.depthMask(re),O=re)},setFunc:function(re){if(fe&&(re=Bf[re]),oe!==re){switch(re){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){k=re},setClear:function(re){pe!==re&&(pe=re,fe&&(re=1-re),i.clearDepth(re))},reset:function(){k=!1,O=null,oe=null,pe=null,fe=!1}}}function s(){let k=!1,fe=null,O=null,oe=null,pe=null,re=null,Re=null,Te=null,ht=null;return{setTest:function(je){k||(je?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(je){fe!==je&&!k&&(i.stencilMask(je),fe=je)},setFunc:function(je,fn,Sn){(O!==je||oe!==fn||pe!==Sn)&&(i.stencilFunc(je,fn,Sn),O=je,oe=fn,pe=Sn)},setOp:function(je,fn,Sn){(re!==je||Re!==fn||Te!==Sn)&&(i.stencilOp(je,fn,Sn),re=je,Re=fn,Te=Sn)},setLocked:function(je){k=je},setClear:function(je){ht!==je&&(i.clearStencil(je),ht=je)},reset:function(){k=!1,fe=null,O=null,oe=null,pe=null,re=null,Re=null,Te=null,ht=null}}}const r=new t,a=new n,o=new s,h=new WeakMap,d=new WeakMap;let m={},f={},l={},u=new WeakMap,g=[],x=null,p=!1,c=null,v=null,T=null,S=null,w=null,A=null,C=null,_=new ye(0,0,0),y=0,R=!1,P=null,I=null,z=null,U=null,b=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Z=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=Z>=1):F.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=Z>=2);let W=null,J={};const ie=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Oe=new vt().fromArray(ie),Ne=new vt().fromArray(le);function Ve(k,fe,O,oe){const pe=new Uint8Array(4),re=i.createTexture();i.bindTexture(k,re),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<O;Re++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(fe+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return re}const te={};te[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(vs),Be(!1),it(Bo),ne(i.CULL_FACE),qe(Gn);function ne(k){m[k]!==!0&&(i.enable(k),m[k]=!0)}function ve(k){m[k]!==!1&&(i.disable(k),m[k]=!1)}function Pe(k,fe){return l[k]!==fe?(i.bindFramebuffer(k,fe),l[k]=fe,k===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=fe),k===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function xe(k,fe){let O=g,oe=!1;if(k){O=u.get(fe),O===void 0&&(O=[],u.set(fe,O));const pe=k.textures;if(O.length!==pe.length||O[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Re=pe.length;re<Re;re++)O[re]=i.COLOR_ATTACHMENT0+re;O.length=pe.length,oe=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,oe=!0);oe&&i.drawBuffers(O)}function Fe(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const _t={[Gi]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[of]:i.FUNC_REVERSE_SUBTRACT};_t[lf]=i.MIN,_t[cf]=i.MAX;const ze={[ff]:i.ZERO,[hf]:i.ONE,[uf]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[gf]:i.DST_COLOR,[pf]:i.DST_ALPHA,[df]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[mf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(k,fe,O,oe,pe,re,Re,Te,ht,je){if(k===Gn){p===!0&&(ve(i.BLEND),p=!1);return}if(p===!1&&(ne(i.BLEND),p=!0),k!==rf){if(k!==c||je!==R){if((v!==Gi||w!==Gi)&&(i.blendEquation(i.FUNC_ADD),v=Gi,w=Gi),je)switch(k){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",k);break}else switch(k){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",k);break}T=null,S=null,A=null,C=null,_.set(0,0,0),y=0,c=k,R=je}return}pe=pe||fe,re=re||O,Re=Re||oe,(fe!==v||pe!==w)&&(i.blendEquationSeparate(_t[fe],_t[pe]),v=fe,w=pe),(O!==T||oe!==S||re!==A||Re!==C)&&(i.blendFuncSeparate(ze[O],ze[oe],ze[re],ze[Re]),T=O,S=oe,A=re,C=Re),(Te.equals(_)===!1||ht!==y)&&(i.blendColor(Te.r,Te.g,Te.b,ht),_.copy(Te),y=ht),c=k,R=!1}function nt(k,fe){k.side===qt?ve(i.CULL_FACE):ne(i.CULL_FACE);let O=k.side===Yt;fe&&(O=!O),Be(O),k.blending===ps&&k.transparent===!1?qe(Gn):qe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const oe=k.stencilWrite;o.setTest(oe),oe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ct(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function it(k){k!==tf?(ne(i.CULL_FACE),k!==I&&(k===Bo?i.cullFace(i.BACK):k===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),I=k}function mt(k){k!==z&&(N&&i.lineWidth(k),z=k)}function Ct(k,fe,O){k?(ne(i.POLYGON_OFFSET_FILL),(U!==fe||b!==O)&&(U=fe,b=O,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,O))):ve(i.POLYGON_OFFSET_FILL)}function ct(k){k?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ft(k){k===void 0&&(k=i.TEXTURE0+D-1),W!==k&&(i.activeTexture(k),W=k)}function H(k,fe,O){O===void 0&&(W===null?O=i.TEXTURE0+D-1:O=W);let oe=J[O];oe===void 0&&(oe={type:void 0,texture:void 0},J[O]=oe),(oe.type!==k||oe.texture!==fe)&&(W!==O&&(i.activeTexture(O),W=O),i.bindTexture(k,fe||te[k]),oe.type=k,oe.texture=fe)}function St(){const k=J[W];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function M(){try{i.texSubImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function V(){try{i.texSubImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function ce(){try{i.texStorage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function K(){try{i.texStorage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function X(){try{i.texImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function j(){try{i.texImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function se(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function Me(k,fe){f[k]!==fe&&(i.pixelStorei(k,fe),f[k]=fe)}function he(k){Oe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Oe.copy(k))}function ue(k){Ne.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ne.copy(k))}function we(k,fe){let O=d.get(fe);O===void 0&&(O=new WeakMap,d.set(fe,O));let oe=O.get(k);oe===void 0&&(oe=i.getUniformBlockIndex(fe,k.name),O.set(k,oe))}function Ce(k,fe){const oe=d.get(fe).get(k);h.get(fe)!==oe&&(i.uniformBlockBinding(fe,oe,k.__bindingPointIndex),h.set(fe,oe))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},f={},W=null,J={},l={},u=new WeakMap,g=[],x=null,p=!1,c=null,v=null,T=null,S=null,w=null,A=null,C=null,_=new ye(0,0,0),y=0,R=!1,P=null,I=null,z=null,U=null,b=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ve,bindFramebuffer:Pe,drawBuffers:xe,useProgram:Fe,setBlending:qe,setMaterial:nt,setFlipSided:Be,setCullFace:it,setLineWidth:mt,setPolygonOffset:Ct,setScissorTest:ct,activeTexture:ft,bindTexture:H,unbindTexture:St,compressedTexImage2D:Ze,compressedTexImage3D:L,texImage2D:X,texImage3D:j,pixelStorei:Me,getParameter:se,updateUBOMapping:we,uniformBlockBinding:Ce,texStorage2D:ce,texStorage3D:K,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:ee,scissor:he,viewport:ue,reset:Le}}function um(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ue,m=new WeakMap,f=new Set;let l;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,M){return g?new OffscreenCanvas(L,M):ur("canvas")}function p(L,M,V){let $=1;const ee=Ze(L);if((ee.width>V||ee.height>V)&&($=V/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor($*ee.width),K=Math.floor($*ee.height);l===void 0&&(l=x(ce,K));const X=M?x(ce,K):l;return X.width=ce,X.height=K,X.getContext("2d").drawImage(L,0,0,ce,K),Ie("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+K+")."),X}else return"data"in L&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),L;return L}function c(L){return L.generateMipmaps}function v(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(L,M,V,$,ee,ce=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K;$&&(K=e.get("EXT_texture_norm16"),K||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=M;if(M===i.RED&&(V===i.FLOAT&&(X=i.R32F),V===i.HALF_FLOAT&&(X=i.R16F),V===i.UNSIGNED_BYTE&&(X=i.R8),V===i.UNSIGNED_SHORT&&K&&(X=K.R16_EXT),V===i.SHORT&&K&&(X=K.R16_SNORM_EXT)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.R8UI),V===i.UNSIGNED_SHORT&&(X=i.R16UI),V===i.UNSIGNED_INT&&(X=i.R32UI),V===i.BYTE&&(X=i.R8I),V===i.SHORT&&(X=i.R16I),V===i.INT&&(X=i.R32I)),M===i.RG&&(V===i.FLOAT&&(X=i.RG32F),V===i.HALF_FLOAT&&(X=i.RG16F),V===i.UNSIGNED_BYTE&&(X=i.RG8),V===i.UNSIGNED_SHORT&&K&&(X=K.RG16_EXT),V===i.SHORT&&K&&(X=K.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RG8UI),V===i.UNSIGNED_SHORT&&(X=i.RG16UI),V===i.UNSIGNED_INT&&(X=i.RG32UI),V===i.BYTE&&(X=i.RG8I),V===i.SHORT&&(X=i.RG16I),V===i.INT&&(X=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RGB8UI),V===i.UNSIGNED_SHORT&&(X=i.RGB16UI),V===i.UNSIGNED_INT&&(X=i.RGB32UI),V===i.BYTE&&(X=i.RGB8I),V===i.SHORT&&(X=i.RGB16I),V===i.INT&&(X=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),V===i.UNSIGNED_INT&&(X=i.RGBA32UI),V===i.BYTE&&(X=i.RGBA8I),V===i.SHORT&&(X=i.RGBA16I),V===i.INT&&(X=i.RGBA32I)),M===i.RGB&&(V===i.UNSIGNED_SHORT&&K&&(X=K.RGB16_EXT),V===i.SHORT&&K&&(X=K.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),M===i.RGBA){const j=ce?hr:Ke.getTransfer(ee);V===i.FLOAT&&(X=i.RGBA32F),V===i.HALF_FLOAT&&(X=i.RGBA16F),V===i.UNSIGNED_BYTE&&(X=j===tt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&K&&(X=K.RGBA16_EXT),V===i.SHORT&&K&&(X=K.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function w(L,M){let V;return L?M===null||M===vn||M===Ss?V=i.DEPTH24_STENCIL8:M===gn?V=i.DEPTH32F_STENCIL8:M===Ms&&(V=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vn||M===Ss?V=i.DEPTH_COMPONENT24:M===gn?V=i.DEPTH_COMPONENT32F:M===Ms&&(V=i.DEPTH_COMPONENT16),V}function A(L,M){return c(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==kt?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function C(L){const M=L.target;M.removeEventListener("dispose",C),y(M),M.isVideoTexture&&m.delete(M),M.isHTMLTexture&&f.delete(M)}function _(L){const M=L.target;M.removeEventListener("dispose",_),P(M)}function y(L){const M=n.get(L);if(M.__webglInit===void 0)return;const V=L.source,$=u.get(V);if($){const ee=$[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(L),Object.keys($).length===0&&u.delete(V)}n.remove(L)}function R(L){const M=n.get(L);i.deleteTexture(M.__webglTexture);const V=L.source,$=u.get(V);delete $[M.__cacheKey],a.memory.textures--}function P(L){const M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ee=0;ee<M.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=L.textures;for(let $=0,ee=V.length;$<ee;$++){const ce=n.get(V[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(V[$])}n.remove(L)}let I=0;function z(){I=0}function U(){return I}function b(L){I=L}function D(){const L=I;return L>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function N(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Z(L,M){const V=n.get(L);if(L.isVideoTexture&&H(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){const $=L.image;if($===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,L,M);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function F(L,M){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){ve(V,L,M);return}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function W(L,M){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){ve(V,L,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function J(L,M){const V=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&V.__version!==L.version){Pe(V,L,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const ie={[va]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},le={[Ut]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Oe={[Cf]:i.NEVER,[Uf]:i.ALWAYS,[Pf]:i.LESS,[mo]:i.LEQUAL,[Lf]:i.EQUAL,[go]:i.GEQUAL,[If]:i.GREATER,[Df]:i.NOTEQUAL};function Ne(L,M){if(M.type===gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===kt||M.magFilter===Tr||M.magFilter===As||M.magFilter===ui||M.minFilter===kt||M.minFilter===Tr||M.minFilter===As||M.minFilter===ui)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ie[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ie[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ie[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ut||M.minFilter!==As&&M.minFilter!==ui||M.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(L,M){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",C));const $=M.source;let ee=u.get($);ee===void 0&&(ee={},u.set($,ee));const ce=N(M);if(ce!==L.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[ce].usedTimes++;const K=ee[L.__cacheKey];K!==void 0&&(ee[L.__cacheKey].usedTimes--,K.usedTimes===0&&R(M)),L.__cacheKey=ce,L.__webglTexture=ee[ce].texture}return V}function te(L,M,V){return Math.floor(Math.floor(L/V)/M)}function ne(L,M,V,$){const ce=L.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,V,$,M.data);else{ce.sort((Me,he)=>Me.start-he.start);let K=0;for(let Me=1;Me<ce.length;Me++){const he=ce[K],ue=ce[Me],we=he.start+he.count,Ce=te(ue.start,M.width,4),Le=te(he.start,M.width,4);ue.start<=we+1&&Ce===Le&&te(ue.start+ue.count-1,M.width,4)===Ce?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++K,ce[K]=ue)}ce.length=K+1;const X=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Me=0,he=ce.length;Me<he;Me++){const ue=ce[Me],we=Math.floor(ue.start/4),Ce=Math.ceil(ue.count/4),Le=we%M.width,k=Math.floor(we/M.width),fe=Ce,O=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Le,k,fe,O,V,$,M.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function ve(L,M,V){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const ee=Ve(L,M),ce=M.source;t.bindTexture($,L.__webglTexture,i.TEXTURE0+V);const K=n.get(ce);if(ce.version!==K.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const O=Ke.getPrimaries(Ke.workingColorSpace),oe=M.colorSpace===ii?null:Ke.getPrimaries(M.colorSpace),pe=M.colorSpace===ii||O===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=p(M.image,!1,s.maxTextureSize);j=St(M,j);const se=r.convert(M.format,M.colorSpace),Me=r.convert(M.type);let he=S(M.internalFormat,se,Me,M.normalized,M.colorSpace,M.isVideoTexture);Ne($,M);let ue;const we=M.mipmaps,Ce=M.isVideoTexture!==!0,Le=K.__version===void 0||ee===!0,k=ce.dataReady,fe=A(M,j);if(M.isDepthTexture)he=w(M.format===di,M.type),Le&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,he,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,he,j.width,j.height,0,se,Me,null));else if(M.isDataTexture)if(we.length>0){Ce&&Le&&t.texStorage2D(i.TEXTURE_2D,fe,he,we[0].width,we[0].height);for(let O=0,oe=we.length;O<oe;O++)ue=we[O],Ce?k&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,ue.width,ue.height,se,Me,ue.data):t.texImage2D(i.TEXTURE_2D,O,he,ue.width,ue.height,0,se,Me,ue.data);M.generateMipmaps=!1}else Ce?(Le&&t.texStorage2D(i.TEXTURE_2D,fe,he,j.width,j.height),k&&ne(M,j,se,Me)):t.texImage2D(i.TEXTURE_2D,0,he,j.width,j.height,0,se,Me,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ce&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,he,we[0].width,we[0].height,j.depth);for(let O=0,oe=we.length;O<oe;O++)if(ue=we[O],M.format!==xn)if(se!==null)if(Ce){if(k)if(M.layerUpdates.size>0){const pe=gl(ue.width,ue.height,M.format,M.type);for(const re of M.layerUpdates){const Re=ue.data.subarray(re*pe/ue.data.BYTES_PER_ELEMENT,(re+1)*pe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,re,ue.width,ue.height,1,se,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ue.width,ue.height,j.depth,se,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,he,ue.width,ue.height,j.depth,0,ue.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ue.width,ue.height,j.depth,se,Me,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,he,ue.width,ue.height,j.depth,0,se,Me,ue.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ce&&Le&&t.texStorage2D(i.TEXTURE_2D,fe,he,we[0].width,we[0].height);for(let O=0,oe=we.length;O<oe;O++)ue=we[O],M.format!==xn?se!==null?Ce?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,ue.width,ue.height,se,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,O,he,ue.width,ue.height,0,ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?k&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,ue.width,ue.height,se,Me,ue.data):t.texImage2D(i.TEXTURE_2D,O,he,ue.width,ue.height,0,se,Me,ue.data)}else if(M.isDataArrayTexture)if(Ce){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,he,j.width,j.height,j.depth),k)if(M.layerUpdates.size>0){const O=gl(j.width,j.height,M.format,M.type);for(const oe of M.layerUpdates){const pe=j.data.subarray(oe*O/j.data.BYTES_PER_ELEMENT,(oe+1)*O/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,j.width,j.height,1,se,Me,pe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,se,Me,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,j.width,j.height,j.depth,0,se,Me,j.data);else if(M.isData3DTexture)Ce?(Le&&t.texStorage3D(i.TEXTURE_3D,fe,he,j.width,j.height,j.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,se,Me,j.data)):t.texImage3D(i.TEXTURE_3D,0,he,j.width,j.height,j.depth,0,se,Me,j.data);else if(M.isFramebufferTexture){if(Le)if(Ce)t.texStorage2D(i.TEXTURE_2D,fe,he,j.width,j.height);else{let O=j.width,oe=j.height;for(let pe=0;pe<fe;pe++)t.texImage2D(i.TEXTURE_2D,pe,he,O,oe,0,se,Me,null),O>>=1,oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const O=i.canvas;if(O.hasAttribute("layoutsubtree")||O.setAttribute("layoutsubtree","true"),j.parentNode!==O){O.appendChild(j),f.add(M),O.onpaint=oe=>{const pe=oe.changedElements;for(const re of f)pe.includes(re.image)&&(re.needsUpdate=!0)},O.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const pe=i.RGBA,re=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,re,Re,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ce&&Le){const O=Ze(we[0]);t.texStorage2D(i.TEXTURE_2D,fe,he,O.width,O.height)}for(let O=0,oe=we.length;O<oe;O++)ue=we[O],Ce?k&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,se,Me,ue):t.texImage2D(i.TEXTURE_2D,O,he,se,Me,ue);M.generateMipmaps=!1}else if(Ce){if(Le){const O=Ze(j);t.texStorage2D(i.TEXTURE_2D,fe,he,O.width,O.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Me,j)}else t.texImage2D(i.TEXTURE_2D,0,he,se,Me,j);c(M)&&v($),K.__version=ce.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Pe(L,M,V){if(M.image.length!==6)return;const $=Ve(L,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);const ce=n.get(ee);if(ee.version!==ce.__version||$===!0){t.activeTexture(i.TEXTURE0+V);const K=Ke.getPrimaries(Ke.workingColorSpace),X=M.colorSpace===ii?null:Ke.getPrimaries(M.colorSpace),j=M.colorSpace===ii||K===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const se=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!se&&!Me?he[re]=p(M.image[re],!0,s.maxCubemapSize):he[re]=Me?M.image[re].image:M.image[re],he[re]=St(M,he[re]);const ue=he[0],we=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type),Le=S(M.internalFormat,we,Ce,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,fe=ce.__version===void 0||$===!0,O=ee.dataReady;let oe=A(M,ue);Ne(i.TEXTURE_CUBE_MAP,M);let pe;if(se){k&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Le,ue.width,ue.height);for(let re=0;re<6;re++){pe=he[re].mipmaps;for(let Re=0;Re<pe.length;Re++){const Te=pe[Re];M.format!==xn?we!==null?k?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Le,Te.width,Te.height,0,Te.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Te.width,Te.height,we,Ce,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Le,Te.width,Te.height,0,we,Ce,Te.data)}}}else{if(pe=M.mipmaps,k&&fe){pe.length>0&&oe++;const re=Ze(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Le,re.width,re.height)}for(let re=0;re<6;re++)if(Me){k?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,we,Ce,he[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Le,he[re].width,he[re].height,0,we,Ce,he[re].data);for(let Re=0;Re<pe.length;Re++){const ht=pe[Re].image[re].image;k?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,ht.width,ht.height,we,Ce,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Le,ht.width,ht.height,0,we,Ce,ht.data)}}else{k?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,we,Ce,he[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Le,we,Ce,he[re]);for(let Re=0;Re<pe.length;Re++){const Te=pe[Re];k?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,we,Ce,Te.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Le,we,Ce,Te.image[re])}}}c(M)&&v(i.TEXTURE_CUBE_MAP),ce.__version=ee.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function xe(L,M,V,$,ee,ce){const K=r.convert(V.format,V.colorSpace),X=r.convert(V.type),j=S(V.internalFormat,K,X,V.normalized,V.colorSpace),se=n.get(M),Me=n.get(V);if(Me.__renderTarget=M,!se.__hasExternalTextures){const he=Math.max(1,M.width>>ce),ue=Math.max(1,M.height>>ce);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,j,he,ue,M.depth,0,K,X,null):t.texImage2D(ee,ce,j,he,ue,0,K,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,Me.__webglTexture,0,ct(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,Me.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(L,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){const $=M.depthTexture,ee=$&&$.isDepthTexture?$.type:null,ce=w(M.stencilBuffer,ee),K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(M),ce,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(M),ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,L)}else{const $=M.textures;for(let ee=0;ee<$.length;ee++){const ce=$[ee],K=r.convert(ce.format,ce.colorSpace),X=r.convert(ce.type),j=S(ce.internalFormat,K,X,ce.normalized,ce.colorSpace);ft(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(M),j,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(L,M,V){const $=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,M.depthTexture);const se=r.convert(M.depthTexture.format),Me=r.convert(M.depthTexture.type);let he;M.depthTexture.format===Wn?he=i.DEPTH_COMPONENT24:M.depthTexture.format===di&&(he=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,M.width,M.height,0,se,Me,null)}}else Z(M.depthTexture,0);const ce=ee.__webglTexture,K=ct(M),X=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,j=M.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Wn)ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,X,ce,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,j,X,ce,0);else if(M.depthTexture.format===di)ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,X,ce,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,j,X,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(L){const M=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=$}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)_t(M.__webglFramebuffer[$],L,$);else{const $=L.texture.mipmaps;$&&$.length>0?_t(M.__webglFramebuffer[0],L,0):_t(M.__webglFramebuffer,L,0)}else if(V){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),Fe(M.__webglDepthbuffer[$],L,!1);else{const ee=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}}else{const $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Fe(M.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(L,M,V){const $=n.get(L);M!==void 0&&xe($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ze(L)}function nt(L){const M=L.texture,V=n.get(L),$=n.get(M);L.addEventListener("dispose",_);const ee=L.textures,ce=L.isWebGLCubeRenderTarget===!0,K=ee.length>1;if(K||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),ce){V.__webglFramebuffer=[];for(let X=0;X<6;X++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[X]=[];for(let j=0;j<M.mipmaps.length;j++)V.__webglFramebuffer[X][j]=i.createFramebuffer()}else V.__webglFramebuffer[X]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let X=0;X<M.mipmaps.length;X++)V.__webglFramebuffer[X]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(K)for(let X=0,j=ee.length;X<j;X++){const se=n.get(ee[X]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&ft(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let X=0;X<ee.length;X++){const j=ee[X];V.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[X]);const se=r.convert(j.format,j.colorSpace),Me=r.convert(j.type),he=S(j.internalFormat,se,Me,j.normalized,j.colorSpace,L.isXRRenderTarget===!0),ue=ct(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,he,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,V.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,M);for(let X=0;X<6;X++)if(M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)xe(V.__webglFramebuffer[X][j],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,j);else xe(V.__webglFramebuffer[X],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);c(M)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){for(let X=0,j=ee.length;X<j;X++){const se=ee[X],Me=n.get(se);let he=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Me.__webglTexture),Ne(he,se),xe(V.__webglFramebuffer,L,se,i.COLOR_ATTACHMENT0+X,he,0),c(se)&&v(he)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(X=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,$.__webglTexture),Ne(X,M),M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)xe(V.__webglFramebuffer[j],L,M,i.COLOR_ATTACHMENT0,X,j);else xe(V.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,X,0);c(M)&&v(X),t.unbindTexture()}L.depthBuffer&&ze(L)}function Be(L){const M=L.textures;for(let V=0,$=M.length;V<$;V++){const ee=M[V];if(c(ee)){const ce=T(L),K=n.get(ee).__webglTexture;t.bindTexture(ce,K),v(ce),t.unbindTexture()}}}const it=[],mt=[];function Ct(L){if(L.samples>0){if(ft(L)===!1){const M=L.textures,V=L.width,$=L.height;let ee=i.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(L),X=M.length>1;if(X)for(let se=0;se<M.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer);const j=L.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let se=0;se<M.length;se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[se]);const Me=n.get(M[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,V,$,0,0,V,$,ee,i.NEAREST),h===!0&&(it.length=0,mt.length=0,it.push(i.COLOR_ATTACHMENT0+se),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(it.push(ce),mt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let se=0;se<M.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,K.__webglColorRenderbuffer[se]);const Me=n.get(M[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&h){const M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ct(L){return Math.min(s.maxSamples,L.samples)}function ft(L){const M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function H(L){const M=a.render.frame;m.get(L)!==M&&(m.set(L,M),L.update())}function St(L,M){const V=L.colorSpace,$=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==fr&&V!==ii&&(Ke.getTransfer(V)===tt?($!==xn||ee!==tn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",V)),M}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.getTextureUnits=U,this.setTextureUnits=b,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=qe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dm(i,e){function t(n,s=ii){let r;const a=Ke.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===xn)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===fo)return i.RED;if(n===ho)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===uo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ya||n===ba||n===Ea)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===or||n===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ta)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_R11_EAC;if(n===or)return r.COMPRESSED_RG11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===za||n===Oa||n===Ba||n===ka||n===Ha||n===Ga||n===Va||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===$a||n===lr||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:pm,fragmentShader:mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends Mi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",h=1,d=null,m=null,f=null,l=null,u=null,g=null;const x=typeof XRWebGLBinding<"u",p=new gm,c={},v=t.getContextAttributes();let T=null,S=null;const w=[],A=[],C=new Ue;let _=null,y=null;const R=new on;R.viewport=new vt;const P=new on;P.viewport=new vt;const I=[R,P],z=new bh;let U=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ne=w[te];return ne===void 0&&(ne=new Nr,w[te]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(te){let ne=w[te];return ne===void 0&&(ne=new Nr,w[te]=ne),ne.getGripSpace()},this.getHand=function(te){let ne=w[te];return ne===void 0&&(ne=new Nr,w[te]=ne),ne.getHandSpace()};function D(te){const ne=A.indexOf(te.inputSource);if(ne===-1)return;const ve=w[ne];ve!==void 0&&(ve.update(te.inputSource,te.frame,d||a),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",Z);for(let te=0;te<w.length;te++){const ne=A[te];ne!==null&&(A[te]=null,w[te].disconnect(ne))}U=null,b=null,p.reset();for(const te in c)delete c[te];if(e.setRenderTarget(T),u=null,l=null,f=null,s=null,S=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),y!==null){const te=y.camera;te.fov=y.fov,te.zoom=y.zoom,te.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?di:Wn,Pe=v.stencil?Ss:vn);const Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=this.getBinding(),l=f.createProjectionLayer(Fe),s.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),S=new cn(l.textureWidth,l.textureHeight,{format:xn,type:tn,depthTexture:new $i(l.textureWidth,l.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new cn(u.framebufferWidth,u.framebufferHeight,{format:xn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),d=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(te){for(let ne=0;ne<te.removed.length;ne++){const ve=te.removed[ne],Pe=A.indexOf(ve);Pe>=0&&(A[Pe]=null,w[Pe].disconnect(ve))}for(let ne=0;ne<te.added.length;ne++){const ve=te.added[ne];let Pe=A.indexOf(ve);if(Pe===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=A.length){A.push(ve),Pe=Fe;break}else if(A[Fe]===null){A[Fe]=ve,Pe=Fe;break}if(Pe===-1)break}const xe=w[Pe];xe&&xe.connect(ve)}}const F=new G,W=new G;function J(te,ne,ve){F.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(ve.matrixWorld);const Pe=F.distanceTo(W),xe=ne.projectionMatrix.elements,Fe=ve.projectionMatrix.elements,_t=xe[14]/(xe[10]-1),ze=xe[14]/(xe[10]+1),qe=(xe[9]+1)/xe[5],nt=(xe[9]-1)/xe[5],Be=(xe[8]-1)/xe[0],it=(Fe[8]+1)/Fe[0],mt=_t*Be,Ct=_t*it,ct=Pe/(-Be+it),ft=ct*-Be;if(ne.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ft),te.translateZ(ct),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),xe[10]===-1)te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const H=_t+ct,St=ze+ct,Ze=mt-ft,L=Ct+(Pe-ft),M=qe*ze/St*H,V=nt*ze/St*H;te.projectionMatrix.makePerspective(Ze,L,M,V,H,St),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ie(te,ne){ne===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ne.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ne=te.near,ve=te.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),z.near=P.near=R.near=ne,z.far=P.far=R.far=ve,(U!==z.near||b!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),U=z.near,b=z.far),z.layers.mask=te.layers.mask|6,R.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const Pe=te.parent,xe=z.cameras;ie(z,Pe);for(let Fe=0;Fe<xe.length;Fe++)ie(xe[Fe],Pe);xe.length===2?J(z,R,P):z.projectionMatrix.copy(R.projectionMatrix),y===null&&te.isPerspectiveCamera&&(y={camera:te,fov:te.fov,zoom:te.zoom}),le(te,z,Pe)};function le(te,ne,ve){ve===null?te.matrix.copy(ne.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ne.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ja*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(l===null&&u===null))return h},this.setFoveation=function(te){h=te,l!==null&&(l.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(te){return c[te]};let Oe=null;function Ne(te,ne){if(m=ne.getViewerPose(d||a),g=ne,m!==null){const ve=m.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let Pe=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Pe=!0);for(let ze=0;ze<ve.length;ze++){const qe=ve[ze];let nt=null;if(u!==null)nt=u.getViewport(qe);else{const it=f.getViewSubImage(l,qe);nt=it.viewport,ze===0&&(e.setRenderTargetTextures(S,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(S))}let Be=I[ze];Be===void 0&&(Be=new on,Be.layers.enable(ze),Be.viewport=new vt,I[ze]=Be),Be.matrix.fromArray(qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(nt.x,nt.y,nt.width,nt.height),ze===0&&(z.matrix.copy(Be.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pe===!0&&z.cameras.push(Be)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const ze=f.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let ze=0;ze<ve.length;ze++){const qe=ve[ze].camera;if(qe){let nt=c[qe];nt||(nt=new Cc,c[qe]=nt);const Be=f.getCameraImage(qe);nt.sourceTexture=Be}}}}for(let ve=0;ve<w.length;ve++){const Pe=A[ve],xe=w[ve];Pe!==null&&xe!==void 0&&xe.update(Pe,ne,d||a)}Oe&&Oe(te,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ve=new Dc;Ve.setAnimationLoop(Ne),this.setAnimationLoop=function(te){Oe=te},this.dispose=function(){}}}const _m=new lt,kc=new De;kc.set(-1,0,0,0,1,0,0,0,1);function vm(i,e){function t(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function n(p,c){c.color.getRGB(p.fogColor.value,Pc(i)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function s(p,c,v,T,S){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?r(p,c):c.isMeshLambertMaterial?(r(p,c),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(r(p,c),f(p,c)):c.isMeshPhongMaterial?(r(p,c),m(p,c),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(r(p,c),l(p,c),c.isMeshPhysicalMaterial&&u(p,c,S)):c.isMeshMatcapMaterial?(r(p,c),g(p,c)):c.isMeshDepthMaterial?r(p,c):c.isMeshDistanceMaterial?(r(p,c),x(p,c)):c.isMeshNormalMaterial?r(p,c):c.isLineBasicMaterial?(a(p,c),c.isLineDashedMaterial&&o(p,c)):c.isPointsMaterial?h(p,c,v,T):c.isSpriteMaterial?d(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,t(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===Yt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,t(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===Yt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,t(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,t(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const v=e.get(c),T=v.envMap,S=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(kc),p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,p.aoMapTransform))}function a(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform))}function o(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function h(p,c,v,T){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*v,p.scale.value=T*.5,c.map&&(p.map.value=c.map,t(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function d(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function m(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function f(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function l(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function u(p,c,v){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Yt&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.retroreflectivity>0&&(p.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const v=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(S,w){const A=w.program;n.uniformBlockBinding(S,A)}function d(S,w){let A=s[S.id];A===void 0&&(p(S),A=m(S),s[S.id]=A,S.addEventListener("dispose",v));const C=w.program;n.updateUBOMapping(S,C);const _=e.render.frame;r[S.id]!==_&&(l(S),r[S.id]=_)}function m(S){const w=f();S.__bindingPointIndex=w;const A=i.createBuffer(),C=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(S){const w=s[S.id],A=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,y=A.length;_<y;_++){const R=A[_];if(Array.isArray(R))for(let P=0,I=R.length;P<I;P++)u(R[P],_,P,C);else u(R,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,w,A,C){if(x(S,w,A,C)===!0){const _=S.__offset,y=S.value;if(Array.isArray(y)){let R=0;for(let P=0;P<y.length;P++){const I=y[P],z=c(I);g(I,S.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function g(S,w,A){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,A)}function x(S,w,A,C){const _=S.value,y=w+"_"+A;if(C[y]===void 0)return typeof _=="number"||typeof _=="boolean"?C[y]=_:ArrayBuffer.isView(_)?C[y]=_.slice():C[y]=_.clone(),!0;{const R=C[y];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function p(S){const w=S.uniforms;let A=0;const C=16;for(let y=0,R=w.length;y<R;y++){const P=Array.isArray(w[y])?w[y]:[w[y]];for(let I=0,z=P.length;I<z;I++){const U=P[I],b=Array.isArray(U.value)?U.value:[U.value];for(let D=0,N=b.length;D<N;D++){const Z=b[D],F=c(Z),W=A%C,J=W%F.boundary,ie=W+J;A+=J,ie!==0&&C-ie<F.storage&&(A+=C-ie),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=F.storage}}}const _=A%C;return _>0&&(A+=C-_),S.__size=A,S.__cache={},this}function c(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),w}function v(S){const w=S.target;w.removeEventListener("dispose",v);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:h,update:d,dispose:T}}const Sm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function ym(){return En===null&&(En=new Tc(Sm,16,16,xi,Mn),En.name="DFG_LUT",En.minFilter=kt,En.magFilter=kt,En.wrapS=kn,En.wrapT=kn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class bm{constructor(e={}){const{canvas:t=zf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:l=!1,outputBufferType:u=tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=u,p=new Set([po,uo,ho]),c=new Set([tn,vn,Ms,Ss,lo,co]),v=new Uint32Array(4),T=new Int32Array(4),S=new G;let w=null,A=null;const C=[],_=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,I=null,z=null,U=null,b=null;this._outputColorSpace=en;let D=0,N=0,Z=null,F=-1,W=null;const J=new vt,ie=new vt;let le=null;const Oe=new ye(0);let Ne=0,Ve=t.width,te=t.height,ne=1,ve=null,Pe=null;const xe=new vt(0,0,Ve,te),Fe=new vt(0,0,Ve,te);let _t=!1;const ze=new Mo;let qe=!1,nt=!1;const Be=new lt,it=new G,mt=new vt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ft(){return Z===null?ne:1}let H=n;function St(E,B){return t.getContext(E,B)}let Ze,L,M,V,$,ee,ce,K,X,j,se,Me,he,ue,we,Ce,Le,k,fe,O,oe,pe,re;try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",fn,!1),H===null){const B="webgl2";if(H=St(B,E),H===null)throw St(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(E){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Qe("WebGLRenderer: "+E.message),E}function Re(){Ze=new yp(H),Ze.init(),oe=new dm(H,Ze),L=new up(H,Ze,e,oe),M=new hm(H,Ze),L.reversedDepthBuffer&&l&&M.buffers.depth.setReversed(!0),z=H.createFramebuffer(),U=H.createFramebuffer(),b=H.createFramebuffer(),V=new wp(H),$=new J0,ee=new um(H,Ze,M,$,L,oe,V),ce=new Sp(R),K=new Ah(H),pe=new fp(H,K),X=new bp(H,K,V,pe),j=new Ap(H,X,K,pe,V),k=new Tp(H,L,ee),we=new dp($),se=new Z0(R,ce,Ze,L,pe,we),Me=new vm(R,$),he=new j0,ue=new rm(Ze),Le=new cp(R,ce,M,j,g,h),Ce=new fm(R,j,L),re=new Mm(H,V,L,M),fe=new hp(H,Ze,V),O=new Ep(H,Ze,V),V.programs=se.programs,R.capabilities=L,R.extensions=Ze,R.properties=$,R.renderLists=he,R.shadowMap=Ce,R.state=M,R.info=V}x!==tn&&(y=new Cp(x,t.width,t.height,o,s,r));const Te=new xm(R,H);this.xr=Te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(Ve,te,!1))},this.getSize=function(E){return E.set(Ve,te)},this.setSize=function(E,B,Q=!0){if(Te.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=E,te=B,t.width=Math.floor(E*ne),t.height=Math.floor(B*ne),Q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Ve*ne,te*ne).floor()},this.setDrawingBufferSize=function(E,B,Q){Ve=E,te=B,ne=Q,t.width=Math.floor(E*Q),t.height=Math.floor(B*Q),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(x===tn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,B,Q,q){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,B,Q,q),M.viewport(J.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,B,Q,q){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,B,Q,q),M.scissor(ie.copy(Fe).multiplyScalar(ne).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(E){M.setScissorTest(_t=E)},this.setOpaqueSort=function(E){ve=E},this.setTransparentSort=function(E){Pe=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Q=!0){let q=0;if(E){let Y=!1;if(Z!==null){const ge=Z.texture.format;Y=p.has(ge)}if(Y){const ge=Z.texture.type,Se=c.has(ge),me=Le.getClearColor(),be=Le.getClearAlpha(),Ae=me.r,ke=me.g,We=me.b;Se?(v[0]=Ae,v[1]=ke,v[2]=We,v[3]=be,H.clearBufferuiv(H.COLOR,0,v)):(T[0]=Ae,T[1]=ke,T[2]=We,T[3]=be,H.clearBufferiv(H.COLOR,0,T))}else q|=H.COLOR_BUFFER_BIT}B&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Le.dispose(),he.dispose(),ue.dispose(),$.dispose(),ce.dispose(),j.dispose(),pe.dispose(),re.dispose(),se.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Po),Te.removeEventListener("sessionend",Lo),ai.stop()};function ht(E){E.preventDefault(),Wo("WebGLRenderer: Context Lost."),P=!0}function je(){Wo("WebGLRenderer: Context Restored."),P=!1;const E=V.autoReset,B=Ce.enabled,Q=Ce.autoUpdate,q=Ce.needsUpdate,Y=Ce.type;Re(),V.autoReset=E,Ce.enabled=B,Ce.autoUpdate=Q,Ce.needsUpdate=q,Ce.type=Y}function fn(E){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Sn(E){const B=E.target;B.removeEventListener("dispose",Sn),Kc(B)}function Kc(E){$c(E),$.remove(E)}function $c(E){const B=$.get(E).programs;B!==void 0&&(B.forEach(function(Q){se.releaseProgram(Q)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Q,q,Y,ge){B===null&&(B=Ct);const Se=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,me=Qc(E,B,Q,q,Y);M.setMaterial(q,Se);let be=Q.index,Ae=1;if(q.wireframe===!0){if(be=X.getWireframeAttribute(Q),be===void 0)return;Ae=2}const ke=Q.drawRange,We=Q.attributes.position;let Ee=ke.start*Ae,et=(ke.start+ke.count)*Ae;ge!==null&&(Ee=Math.max(Ee,ge.start*Ae),et=Math.min(et,(ge.start+ge.count)*Ae)),be!==null?(Ee=Math.max(Ee,0),et=Math.min(et,be.count)):We!=null&&(Ee=Math.max(Ee,0),et=Math.min(et,We.count));const wt=et-Ee;if(wt<0||wt===1/0)return;pe.setup(Y,q,me,Q,be);let pt,at=fe;if(be!==null&&(pt=K.get(be),at=O,at.setIndex(pt)),Y.isMesh)q.wireframe===!0?(M.setLineWidth(q.wireframeLinewidth*ft()),at.setMode(H.LINES)):at.setMode(H.TRIANGLES);else if(Y.isLine){let Nt=q.linewidth;Nt===void 0&&(Nt=1),M.setLineWidth(Nt*ft()),Y.isLineSegments?at.setMode(H.LINES):Y.isLineLoop?at.setMode(H.LINE_LOOP):at.setMode(H.LINE_STRIP)}else Y.isPoints?at.setMode(H.POINTS):Y.isSprite&&at.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))at.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Nt=Y._multiDrawStarts,_e=Y._multiDrawCounts,Gt=Y._multiDrawCount,Je=be?K.get(be).bytesPerElement:1,sn=$.get(q).currentProgram.getUniforms();for(let yn=0;yn<Gt;yn++)sn.setValue(H,"_gl_DrawID",yn),at.render(Nt[yn]/Je,_e[yn])}else if(Y.isInstancedMesh)at.renderInstances(Ee,wt,Y.count);else if(Q.isInstancedBufferGeometry){const Nt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,_e=Math.min(Q.instanceCount,Nt);at.renderInstances(Ee,wt,_e)}else at.render(Ee,wt)};function Co(E,B,Q,q){I!==null&&E.isNodeMaterial&&I.setObject(q,E),qe===!0&&we.setState(E,Q,!1),E.transparent===!0&&E.side===qt&&E.forceSinglePass===!1?(E.side=Yt,E.needsUpdate=!0,Ts(E,B,q),E.side=mi,E.needsUpdate=!0,Ts(E,B,q),E.side=qt):Ts(E,B,q)}this.compile=function(E,B,Q=null){Q===null&&(Q=E),I!==null&&I.renderStart(E,B,Q),A=ue.get(Q),A.init(B),_.push(A),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),E!==Q&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),I!==null&&I.updateLights(A.state.lightsArray),nt=this.localClippingEnabled,qe=we.init(this.clippingPlanes,nt),qe===!0&&we.setGlobalState(this.clippingPlanes,B),I!==null&&Ce.render(A.state.shadowsArray,Q,B);const q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];Co(me,Q,B,Y),q.add(me)}else Co(ge,Q,B,Y),q.add(ge)}),A=_.pop(),I!==null&&I.renderEnd(),q},this.compileAsync=function(E,B,Q=null){const q=this.compile(E,B,Q);return new Promise(Y=>{function ge(){if(q.forEach(function(Se){const be=$.get(Se).currentProgram;(be===void 0||be.isReady())&&q.delete(Se)}),q.size===0){Y(E);return}setTimeout(ge,10)}Ze.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let yr=null;function Zc(E){yr&&yr(E)}function Po(){ai.stop()}function Lo(){ai.start()}const ai=new Dc;ai.setAnimationLoop(Zc),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){yr=E,Te.setAnimationLoop(E),E===null?ai.stop():ai.start()},Te.addEventListener("sessionstart",Po),Te.addEventListener("sessionend",Lo),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,B);const Q=Te.enabled===!0&&Te.isPresenting===!0,q=y!==null&&(Z===null||Q)&&y.begin(R,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(B),B=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,B,Z),A=ue.get(E,_.length),A.init(B),A.state.textureUnits=ee.getTextureUnits(),_.push(A),Be.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ze.setFromProjectionMatrix(Be,Pn,B.reversedDepth),nt=this.localClippingEnabled,qe=we.init(this.clippingPlanes,nt),w=he.get(E,C.length),w.init(),C.push(w),Te.enabled===!0&&Te.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&br(Se,B,-1/0,R.sortObjects)}br(E,B,0,R.sortObjects),w.finish(),I!==null&&I.updateLights(A.state.lightsArray),R.sortObjects===!0&&w.sort(ve,Pe),ct=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,ct&&Le.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&we.beginShadows();const Y=A.state.shadowsArray;if(Ce.render(Y,E,B),qe===!0&&we.endShadows(),(q&&y.hasRenderPass())===!1){const Se=w.opaque,me=w.transmissive;if(A.setupLights(),B.isArrayCamera){const be=B.cameras;if(me.length>0)for(let Ae=0,ke=be.length;Ae<ke;Ae++){const We=be[Ae];Do(Se,me,E,We)}ct&&Le.render(E);for(let Ae=0,ke=be.length;Ae<ke;Ae++){const We=be[Ae];Io(w,E,We,We.viewport)}}else me.length>0&&Do(Se,me,E,B),ct&&Le.render(E),Io(w,E,B)}Z!==null&&N===0&&(ee.updateMultisampleRenderTarget(Z),ee.updateRenderTargetMipmap(Z)),q&&y.end(R),E.isScene===!0&&E.onAfterRender(R,E,B),pe.resetDefaultState(),F=-1,W=null,_.pop(),_.length>0?(A=_[_.length-1],ee.setTextureUnits(A.state.textureUnits),qe===!0&&we.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,I!==null&&I.renderEnd()};function br(E,B,Q,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ze)){q&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Be);const Se=j.update(E),me=E.material;me.visible&&w.push(E,Se,me,Q,mt.z,null,B)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ze))){const Se=j.update(E),me=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),mt.copy(Se.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(Be)),Array.isArray(me)){const be=Se.groups;for(let Ae=0,ke=be.length;Ae<ke;Ae++){const We=be[Ae],Ee=me[We.materialIndex];Ee&&Ee.visible&&w.push(E,Se,Ee,Q,mt.z,We,B)}}else me.visible&&w.push(E,Se,me,Q,mt.z,null,B)}}const ge=E.children;for(let Se=0,me=ge.length;Se<me;Se++)br(ge[Se],B,Q,q)}function Io(E,B,Q,q){const{opaque:Y,transmissive:ge,transparent:Se}=E;A.setupLightsView(Q),qe===!0&&we.setGlobalState(R.clippingPlanes,Q),q&&M.viewport(J.copy(q)),Y.length>0&&ws(Y,B,Q),ge.length>0&&ws(ge,B,Q),Se.length>0&&ws(Se,B,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Do(E,B,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const Ee=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new cn(1,1,{generateMipmaps:!0,type:Ee?Mn:tn,minFilter:ui,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ge=A.state.transmissionRenderTarget[q.id],Se=q.viewport||J;ge.setSize(Se.z*R.transmissionResolutionScale,Se.w*R.transmissionResolutionScale);const me=R.getRenderTarget(),be=R.getActiveCubeFace(),Ae=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(Oe),Ne=R.getClearAlpha(),Ne<1&&R.setClearColor(16777215,.5),R.clear(),ct&&Le.render(Q);const ke=R.toneMapping;R.toneMapping=In;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),qe===!0&&we.setGlobalState(R.clippingPlanes,q),ws(E,Q,q),ee.updateMultisampleRenderTarget(ge),ee.updateRenderTargetMipmap(ge),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let et=0,wt=B.length;et<wt;et++){const pt=B[et],{object:at,geometry:Nt,material:_e,group:Gt}=pt;if(_e.side===qt&&at.layers.test(q.layers)){const Je=_e.side;_e.side=Yt,_e.needsUpdate=!0,Uo(at,Q,q,Nt,_e,Gt),_e.side=Je,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(ee.updateMultisampleRenderTarget(ge),ee.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,be,Ae),R.setClearColor(Oe,Ne),We!==void 0&&(q.viewport=We),R.toneMapping=ke}function ws(E,B,Q){const q=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,ge=E.length;Y<ge;Y++){const Se=E[Y],{object:me,geometry:be,group:Ae}=Se;let ke=Se.material;ke.allowOverride===!0&&q!==null&&(ke=q),me.layers.test(Q.layers)&&Uo(me,B,Q,be,ke,Ae)}}function Uo(E,B,Q,q,Y,ge){I!==null&&Y.isNodeMaterial&&I.setObject(E,Y),E.onBeforeRender(R,B,Q,q,Y,ge),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(R,B,Q,q,E,ge),Y.transparent===!0&&Y.side===qt&&Y.forceSinglePass===!1?(Y.side=Yt,Y.needsUpdate=!0,R.renderBufferDirect(Q,B,q,Y,E,ge),Y.side=mi,Y.needsUpdate=!0,R.renderBufferDirect(Q,B,q,Y,E,ge),Y.side=qt):R.renderBufferDirect(Q,B,q,Y,E,ge),E.onAfterRender(R,B,Q,q,Y,ge)}function Ts(E,B,Q){B.isScene!==!0&&(B=Ct);const q=$.get(E),Y=A.state.lights,ge=A.state.shadowsArray,Se=Y.state.version,me=se.getParameters(E,Y.state,ge,B,Q,A.state.lightProbeGridArray),be=se.getProgramCacheKey(me);let Ae=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=ce.get(E.envMap||q.environment,ke),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Sn),Ae=new Map,q.programs=Ae);let We=Ae.get(be);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Se)return Fo(E,me),We}else me.uniforms=se.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,Q,me),E.onBeforeCompile(me,R),We=se.acquireProgram(me,be),Ae.set(be,We),q.uniforms=me.uniforms;const Ee=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=we.uniform),Fo(E,me),q.needsLights=ef(E),q.lightsStateVersion=Se,q.needsLights&&(Ee.ambientLightColor.value=Y.state.ambient,Ee.lightProbe.value=Y.state.probe,Ee.sunLights.value=Y.state.sun,Ee.sunLightShadows.value=Y.state.sunShadow,Ee.directionalLights.value=Y.state.directional,Ee.directionalLightShadows.value=Y.state.directionalShadow,Ee.spotLights.value=Y.state.spot,Ee.spotLightShadows.value=Y.state.spotShadow,Ee.rectAreaLights.value=Y.state.rectArea,Ee.ltc_1.value=Y.state.rectAreaLTC1,Ee.ltc_2.value=Y.state.rectAreaLTC2,Ee.pointLights.value=Y.state.point,Ee.pointLightShadows.value=Y.state.pointShadow,Ee.hemisphereLights.value=Y.state.hemi,Ee.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ee.sunShadowCascade.value=Y.state.sunShadowCascade,Ee.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ee.spotLightMatrix.value=Y.state.spotLightMatrix,Ee.spotLightMap.value=Y.state.spotLightMap,Ee.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=A.state.lightProbeGridArray.length>0,q.currentProgram=We,q.uniformsList=null,We}function No(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=ar.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Fo(E,B){const Q=$.get(E);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function Jc(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let Q=0,q=E.length;Q<q;Q++){const Y=E[Q];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function Qc(E,B,Q,q,Y){B.isScene!==!0&&(B=Ct),ee.resetTextureUnits();const ge=B.fog,Se=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,me=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ke.workingColorSpace,be=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ae=ce.get(q.envMap||Se,be),ke=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ee=!!Q.morphAttributes.position,et=!!Q.morphAttributes.normal,wt=!!Q.morphAttributes.color;let pt=In;q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(pt=R.toneMapping);const at=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Nt=at!==void 0?at.length:0,_e=$.get(q),Gt=A.state.lights;if(qe===!0&&(nt===!0||E!==W)){const ut=E===W&&q.id===F;we.setState(q,E,ut)}let Je=!1;q.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Gt.state.version||_e.outputColorSpace!==me||Y.isBatchedMesh&&_e.batching===!1||!Y.isBatchedMesh&&_e.batching===!0||Y.isBatchedMesh&&_e.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&_e.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&_e.instancing===!1||!Y.isInstancedMesh&&_e.instancing===!0||Y.isSkinnedMesh&&_e.skinning===!1||!Y.isSkinnedMesh&&_e.skinning===!0||Y.isInstancedMesh&&_e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&_e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&_e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&_e.instancingMorph===!1&&Y.morphTexture!==null||_e.envMap!==Ae||q.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==we.numPlanes||_e.numIntersection!==we.numIntersection)||_e.vertexAlphas!==ke||_e.vertexTangents!==We||_e.morphTargets!==Ee||_e.morphNormals!==et||_e.morphColors!==wt||_e.toneMapping!==pt||_e.morphTargetsCount!==Nt||!!_e.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=q.version);let sn=_e.currentProgram;Je===!0&&(sn=Ts(q,B,Y),I&&q.isNodeMaterial&&I.onUpdateProgram(q,sn,_e));let yn=!1,Xn=!1,Ei=!1;const st=sn.getUniforms(),yt=_e.uniforms;if(M.useProgram(sn.program)&&(yn=!0,Xn=!0,Ei=!0),q.id!==F&&(F=q.id,Xn=!0),_e.needsLights){const ut=Jc(A.state.lightProbeGridArray,Y);_e.lightProbeGrid!==ut&&(_e.lightProbeGrid=ut,Xn=!0)}if(yn||W!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),st.setValue(H,"projectionMatrix",E.projectionMatrix),st.setValue(H,"viewMatrix",E.matrixWorldInverse);const Yn=st.map.cameraPosition;Yn!==void 0&&Yn.setValue(H,it.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&st.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&st.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,Xn=!0,Ei=!0)}if(_e.needsLights&&(Gt.state.sunShadowMap.length>0&&st.setValue(H,"sunShadowMap",Gt.state.sunShadowMap,ee),Gt.state.directionalShadowMap.length>0&&st.setValue(H,"directionalShadowMap",Gt.state.directionalShadowMap,ee),Gt.state.spotShadowMap.length>0&&st.setValue(H,"spotShadowMap",Gt.state.spotShadowMap,ee),Gt.state.pointShadowMap.length>0&&st.setValue(H,"pointShadowMap",Gt.state.pointShadowMap,ee)),Y.isSkinnedMesh){st.setOptional(H,Y,"bindMatrix"),st.setOptional(H,Y,"bindMatrixInverse");const ut=Y.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),st.setValue(H,"boneTexture",ut.boneTexture,ee))}Y.isBatchedMesh&&(st.setOptional(H,Y,"batchingTexture"),st.setValue(H,"batchingTexture",Y._matricesTexture,ee),st.setOptional(H,Y,"batchingIdTexture"),st.setValue(H,"batchingIdTexture",Y._indirectTexture,ee),st.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&st.setValue(H,"batchingColorTexture",Y._colorsTexture,ee));const qn=Q.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&k.update(Y,Q,sn),(Xn||_e.receiveShadow!==Y.receiveShadow)&&(_e.receiveShadow=Y.receiveShadow,st.setValue(H,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(yt.envMapIntensity.value=B.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=ym()),Xn){if(st.setValue(H,"toneMappingExposure",R.toneMappingExposure),_e.needsLights&&jc(yt,Ei),ge&&q.fog===!0&&Me.refreshFogUniforms(yt,ge),Me.refreshMaterialUniforms(yt,q,ne,te,A.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const ut=_e.lightProbeGrid;yt.probesSH.value=ut.texture,yt.probesMin.value.copy(ut.boundingBox.min),yt.probesMax.value.copy(ut.boundingBox.max),yt.probesResolution.value.copy(ut.resolution)}ar.upload(H,No(_e),yt,ee)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ar.upload(H,No(_e),yt,ee),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&st.setValue(H,"center",Y.center),st.setValue(H,"modelViewMatrix",Y.modelViewMatrix),st.setValue(H,"normalMatrix",Y.normalMatrix),st.setValue(H,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const ut=q.uniformsGroups;for(let Yn=0,wi=ut.length;Yn<wi;Yn++){const Oo=ut[Yn];re.update(Oo,sn),re.bind(Oo,sn)}}return sn}function jc(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function ef(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,B,Q){const q=$.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=B,$.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Q,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Q=$.get(E);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Q=0){Z=E,D=B,N=Q;let q=null,Y=!1,ge=!1;if(E){const me=$.get(E);if(me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(H.FRAMEBUFFER,me.__webglFramebuffer),J.copy(E.viewport),ie.copy(E.scissor),le=E.scissorTest,M.viewport(J),M.scissor(ie),M.setScissorTest(le),F=-1;return}else if(me.__webglFramebuffer===void 0)ee.setupRenderTarget(E);else if(me.__hasExternalTextures)ee.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&$.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(E)}}const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);const Ae=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?q=Ae[B][Q]:q=Ae[B],Y=!0):E.samples>0&&ee.useMultisampledRTT(E)===!1?q=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?q=Ae[Q]:q=Ae,J.copy(E.viewport),ie.copy(E.scissor),le=E.scissorTest}else J.copy(xe).multiplyScalar(ne).floor(),ie.copy(Fe).multiplyScalar(ne).floor(),le=_t;if(Q!==0&&(q=z),M.bindFramebuffer(H.FRAMEBUFFER,q)&&M.drawBuffers(E,q),M.viewport(J),M.scissor(ie),M.setScissorTest(le),Y){const me=$.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,Q)}else if(ge){const me=B;for(let be=0;be<E.textures.length;be++){const Ae=$.get(E.textures[be]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+be,Ae.__webglTexture,Q,me)}}else if(E!==null&&Q!==0){const me=$.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,me.__webglTexture,Q)}F=-1};function zo(E){const B=$.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=L.textureFormatReadable(E.format),B.__typeReadable=L.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,Q,q,Y,ge,Se,me=0){if(!(E&&E.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){M.bindFramebuffer(H.FRAMEBUFFER,be);try{const Ae=E.textures[me],ke=Ae.format,We=Ae.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+me);const Ee=zo(Ae);if(Ee.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&Q>=0&&Q<=E.height-Y&&H.readPixels(B,Q,q,Y,oe.convert(ke),oe.convert(We),ge)}finally{const Ae=Z!==null?$.get(Z).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,B,Q,q,Y,ge,Se,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(B>=0&&B<=E.width-q&&Q>=0&&Q<=E.height-Y){M.bindFramebuffer(H.FRAMEBUFFER,be);const Ae=E.textures[me],ke=Ae.format,We=Ae.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+me);const Ee=zo(Ae);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,et),H.bufferData(H.PIXEL_PACK_BUFFER,ge.byteLength,H.STREAM_READ),H.readPixels(B,Q,q,Y,oe.convert(ke),oe.convert(We),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const wt=Z!==null?$.get(Z).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,wt);const pt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Of(H,pt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,et),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ge),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(et),H.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Q=0){const q=Math.pow(2,-Q),Y=Math.floor(E.image.width*q),ge=Math.floor(E.image.height*q),Se=B!==null?B.x:0,me=B!==null?B.y:0;ee.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,Se,me,Y,ge),M.unbindTexture()},this.copyTextureToTexture=function(E,B,Q=null,q=null,Y=0,ge=0){let Se,me,be,Ae,ke,We,Ee,et,wt;const pt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(Q!==null)Se=Q.max.x-Q.min.x,me=Q.max.y-Q.min.y,be=Q.isBox3?Q.max.z-Q.min.z:1,Ae=Q.min.x,ke=Q.min.y,We=Q.isBox3?Q.min.z:0;else{const yt=Math.pow(2,-Y);Se=Math.floor(pt.width*yt),me=Math.floor(pt.height*yt),E.isDataArrayTexture?be=pt.depth:E.isData3DTexture?be=Math.floor(pt.depth*yt):be=1,Ae=0,ke=0,We=0}q!==null?(Ee=q.x,et=q.y,wt=q.z):(Ee=0,et=0,wt=0);const at=oe.convert(B.format),Nt=oe.convert(B.type);let _e;B.isData3DTexture?(ee.setTexture3D(B,0),_e=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ee.setTexture2DArray(B,0),_e=H.TEXTURE_2D_ARRAY):(ee.setTexture2D(B,0),_e=H.TEXTURE_2D),M.activeTexture(H.TEXTURE0),M.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const Gt=M.getParameter(H.UNPACK_ROW_LENGTH),Je=M.getParameter(H.UNPACK_IMAGE_HEIGHT),sn=M.getParameter(H.UNPACK_SKIP_PIXELS),yn=M.getParameter(H.UNPACK_SKIP_ROWS),Xn=M.getParameter(H.UNPACK_SKIP_IMAGES);M.pixelStorei(H.UNPACK_ROW_LENGTH,pt.width),M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pt.height),M.pixelStorei(H.UNPACK_SKIP_PIXELS,Ae),M.pixelStorei(H.UNPACK_SKIP_ROWS,ke),M.pixelStorei(H.UNPACK_SKIP_IMAGES,We);const Ei=E.isDataArrayTexture||E.isData3DTexture,st=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const yt=$.get(E),qn=$.get(B),ut=$.get(yt.__renderTarget),Yn=$.get(qn.__renderTarget);M.bindFramebuffer(H.READ_FRAMEBUFFER,ut.__webglFramebuffer),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let wi=0;wi<be;wi++)Ei&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$.get(E).__webglTexture,Y,We+wi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$.get(B).__webglTexture,ge,wt+wi)),H.blitFramebuffer(Ae,ke,Se,me,Ee,et,Se,me,H.DEPTH_BUFFER_BIT,H.NEAREST);M.bindFramebuffer(H.READ_FRAMEBUFFER,null),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||$.has(E)){const yt=$.get(E),qn=$.get(B);M.bindFramebuffer(H.READ_FRAMEBUFFER,U),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,b);for(let ut=0;ut<be;ut++)Ei?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yt.__webglTexture,Y,We+ut):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yt.__webglTexture,Y),st?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qn.__webglTexture,ge,wt+ut):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qn.__webglTexture,ge),Y!==0?H.blitFramebuffer(Ae,ke,Se,me,Ee,et,Se,me,H.COLOR_BUFFER_BIT,H.NEAREST):st?H.copyTexSubImage3D(_e,ge,Ee,et,wt+ut,Ae,ke,Se,me):H.copyTexSubImage2D(_e,ge,Ee,et,Ae,ke,Se,me);M.bindFramebuffer(H.READ_FRAMEBUFFER,null),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else st?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(_e,ge,Ee,et,wt,Se,me,be,at,Nt,pt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(_e,ge,Ee,et,wt,Se,me,be,at,pt.data):H.texSubImage3D(_e,ge,Ee,et,wt,Se,me,be,at,Nt,pt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ge,Ee,et,Se,me,at,Nt,pt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ge,Ee,et,pt.width,pt.height,at,pt.data):H.texSubImage2D(H.TEXTURE_2D,ge,Ee,et,Se,me,at,Nt,pt);M.pixelStorei(H.UNPACK_ROW_LENGTH,Gt),M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Je),M.pixelStorei(H.UNPACK_SKIP_PIXELS,sn),M.pixelStorei(H.UNPACK_SKIP_ROWS,yn),M.pixelStorei(H.UNPACK_SKIP_IMAGES,Xn),ge===0&&B.generateMipmaps&&H.generateMipmap(_e),M.unbindTexture()},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ee.setTextureCube(E,0):E.isData3DTexture?ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ee.setTexture2DArray(E,0):ee.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){D=0,N=0,Z=null,M.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function Em(){if(typeof matchMedia!="function"||typeof window>"u")return"high";const i=new URLSearchParams(location.search).get("gfx");if(i==="low"||i==="medium"||i==="high")return i;const e=matchMedia("(pointer: coarse)").matches,t=Math.min(innerWidth,innerHeight)<520,n=navigator.hardwareConcurrency||4,s=navigator.deviceMemory||4;return e&&(n<=4||s<=3)||t?"low":e?"medium":"high"}const wm={low:{msaa:0,halation:!1,pixelRatio:1.25,shadowMap:1024,fish:160,kelp:160,particles:1200,seabed:120},medium:{msaa:2,halation:!0,pixelRatio:1.5,shadowMap:1536,fish:260,kelp:260,particles:1800,seabed:150},high:{msaa:4,halation:!0,pixelRatio:2,shadowMap:2048,fish:360,kelp:360,particles:2400,seabed:180}},Tm=Em(),Bt={...wm[Tm]};function Am(i,e){return Bt.degraded?!1:(Bt.degraded=!0,Bt.pixelRatio=Math.min(Bt.pixelRatio,1),i.setPixelRatio(Bt.pixelRatio),i.shadowMap.enabled&&(i.shadowMap.enabled=!1,e.castShadow=!1),!0)}const Hc="shellsong.settings",Bl={sound:!0,music:!0,look:{hair:"gold",skin:"peach",top:"pink",tail:"teal",crown:"gold",throne:"pink",style:"long"},name:"",treasure:[]};function Rm(){try{return{...Bl,...JSON.parse(localStorage.getItem(Hc)||"{}")}}catch{return{...Bl}}}const ia=Rm(),Vt={get:i=>ia[i],set(i,e){ia[i]=e;try{localStorage.setItem(Hc,JSON.stringify(ia))}catch{}}},ln=(i,e,t)=>i<e?e:i>t?t:i,gs=(i,e,t)=>i+(e-i)*t,xs=(i,e,t)=>{const n=ln((t-i)/(e-i),0,1);return n*n*(3-2*n)},rt=(i,e,t,n)=>gs(i,e,1-Math.exp(-t*n)),Sr=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i));function Gc(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Qs(i,e){let t=Math.imul(i|0,374761393)+Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function pr(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),h=Qs(t,n),d=Qs(t+1,n),m=Qs(t,n+1),f=Qs(t+1,n+1);return h+(d-h)*a+(m-h)*o+(h-d-m+f)*a*o}function Cm(i,e,t=4){let n=0,s=.5,r=0;for(let a=0;a<t;a++)n+=pr(i,e)*s,r+=s,i=i*2.03+17.3,e=e*2.03+9.1,s*=.5;return n/r}const sa=300,Hn={x:0,z:0,floor:-20,hallR:14,towerR:24},Cn=[{name:"Palm Island",x:135,z:-150,r:40,h:5},{name:"Seagull Island",x:-175,z:70,r:36,h:4.5},{name:"Lighthouse Island",x:75,z:195,r:32,h:4},{name:"the Sunny Rocks",x:-45,z:-95,r:13,h:1.2,rocksOnly:!0}],ri=[{name:"the Crystal Grotto",x:-125,z:-130,r:10,crystal:11565823},{name:"the Glow Grotto",x:205,z:30,r:10,crystal:5959888},{name:"the Rainbow Grotto",x:-80,z:210,r:10,crystal:16743112}],Wi=[{name:"the pirate ship",x:95,z:-60,yaw:.7,roll:.22,sail:2763312},{name:"the old galleon",x:-150,z:-25,yaw:2.3,roll:-.18,sail:15260864},{name:"the little sailing ship",x:25,z:125,yaw:-.8,roll:.3,sail:14215416}],kl=[{x:42,z:-32},{x:-62,z:38},{x:150,z:95},{x:-112,z:150}],Hl=[{x:-60,z:100,r:30},{x:115,z:40,r:24},{x:-205,z:-85,r:30},{x:170,z:-60,r:22}],si=[{id:"crown",name:"a golden crown",where:{wreck:0}},{id:"coins",name:"a pile of gold coins",where:{wreck:1}},{id:"compass",name:"a pirate's compass",where:{wreck:2}},{id:"ruby",name:"a sparkly ruby",where:{grotto:0}},{id:"emerald",name:"a shiny emerald",where:{grotto:1}},{id:"sapphire",name:"a blue sapphire",where:{grotto:2}},{id:"pearl",name:"a magic pearl",where:{clam:0}},{id:"necklace",name:"a pearl necklace",where:{clam:1}},{id:"mirror",name:"a silver mirror",where:{clam:2}},{id:"conch",name:"a singing conch shell",where:{clam:3}},{id:"bottle",name:"a message in a bottle",where:{islet:3}},{id:"tiara",name:"a starry tiara",where:{kelp:0}}],pi=(i,e,t,n)=>Math.hypot(i-t,e-n);function yo(i,e){let t=-29+9*Cm(i/110+3,e/110-7,4)+2.2*(pr(i/18,e/18)-.5);const n=Math.hypot(i,e);t-=xs(250,340,n)*30;for(const s of Cn){const r=pi(i,e,s.x,s.z),a=xs(s.r*1.7,s.r*.25,r);if(a>0){const o=s.h+(s.rocksOnly?0:1.5*(pr(i/9,e/9)-.5));t=gs(t,o,a*a*(3-2*a))}}return t}function ot(i,e){let t=yo(i,e);const n=pi(i,e,Hn.x,Hn.z),s=xs(70,42,n);s>0&&(t=gs(t,Hn.floor,s));for(const r of ri){const a=pi(i,e,r.x,r.z),o=xs(r.r+9,r.r+1,a);o>0&&(t=gs(t,r.floor,o))}for(const r of Wi){const a=pi(i,e,r.x,r.z),o=xs(22,10,a)*.7;o>0&&(t=gs(t,r.floor,o))}return t}for(const i of ri)i.floor=yo(i.x,i.z)-1;for(const i of Wi)i.floor=yo(i.x,i.z);function Vc(i,e){return{x:(ot(i+.6,e)-ot(i-.6,e))/(2*.6),z:(ot(i,e+.6)-ot(i,e-.6))/(2*.6)}}function Pm(i=24229){const e=Gc(i),t=(f=0,l=1)=>f+e()*(l-f),n={spheres:[],cyls:[],boxes:[],shells:[],seats:[],rocks:[],coral:[],kelp:[],lanterns:[],treasures:[],palace:Hn,islands:Cn,grottos:ri,wrecks:Wi,clams:[],palms:[],spawn:{x:0,y:-12,z:50,yaw:0}},s=Hn,r=(f,l,u,g)=>{const x=Math.hypot(f,l,u);return{x:f/x,y:l/x,z:u/x,cos:Math.cos(g)}};n.shells.push({name:"the palace",x:s.x,y:s.floor,z:s.z,r:s.hallR,doors:[r(0,.3,1,.5),r(0,.3,-1,.42),r(0,1,0,.4)]}),s.towers=[];for(let f=0;f<4;f++){const l=Math.PI/4+f*Math.PI/2,u={x:s.x+Math.cos(l)*s.towerR,z:s.z+Math.sin(l)*s.towerR,r:3.2,y0:s.floor-2,y1:-7};s.towers.push(u),n.cyls.push({x:u.x,z:u.z,r:u.r,y0:u.y0,y1:u.y1+4})}s.pillars=[];for(let f=0;f<4;f++)for(const l of[-1,1]){const u={x:s.x+l*6.5,z:s.z+19+f*6,r:.7,y0:s.floor-1,y1:s.floor+7};s.pillars.push(u),n.cyls.push(u),n.lanterns.push({x:u.x,y:u.y1+.6,z:u.z})}s.kingThrone={x:s.x-3.6,y:s.floor,z:s.z-8.2,yaw:Math.PI},s.throne={x:s.x+3.6,y:s.floor,z:s.z-8,yaw:Math.PI-.15},n.seats.push({kind:"throne",name:"your throne",x:s.throne.x+Math.sin(s.throne.yaw)*.4,y:s.floor+1.6,z:s.throne.z-Math.cos(s.throne.yaw)*.4,yaw:s.throne.yaw}),n.spheres.push({x:s.kingThrone.x,y:s.floor+1.2,z:s.kingThrone.z-.3,r:2.2}),s.display=[];for(let f=0;f<si.length;f++){const l=-.2+f/(si.length-1)*2.2;s.display.push({x:s.throne.x+2.5+Math.cos(l)*3.2-1.5,y:s.floor+1.1+f%2*.5,z:s.throne.z+1.2-Math.sin(l)*3.2+1.5})}for(const f of ri){const l=s.x-f.x,u=s.z-f.z,g=Math.hypot(l,u);f.door={x:l/g,z:u/g},f.y=f.floor,n.shells.push({name:f.name,x:f.x,y:f.floor,z:f.z,r:f.r,doors:[r(f.door.x,.35,f.door.z,.55)]});for(let x=0;x<9;x++){const p=x/9*Math.PI*2,c=Math.cos(p),v=Math.sin(p);if(c*f.door.x+v*f.door.z>.55)continue;const T=t(3,5),S=f.r+T*.9+.8,w={x:f.x+c*S,y:f.floor+t(0,3),z:f.z+v*S,r:T};n.rocks.push({...w,sy:.8,color:8023946}),n.spheres.push(w)}}for(const f of Wi){f.y=f.floor,n.boxes.push({x:f.x,y:f.floor+2,z:f.z,hx:3.2,hy:2.8,hz:10.5,yaw:-f.yaw});const l=Math.sin(f.yaw),u=-Math.cos(f.yaw);n.cyls.push({x:f.x+l*1.5,z:f.z+u*1.5,r:.5,y0:f.floor,y1:f.floor+11}),f.chest={x:f.x-l*9+u*5,z:f.z-u*9-l*5,yaw:f.yaw+.6},f.chest.y=ot(f.chest.x,f.chest.z)}for(const f of kl){const l={x:f.x,z:f.z,y:ot(f.x,f.z),yaw:t(0,6.28)};n.clams.push(l),n.spheres.push({x:l.x,y:l.y+.2,z:l.z,r:1.1})}for(const f of Cn){const l=f.rocksOnly?4:3;for(let u=0;u<l;u++){const g=u/l*Math.PI*2+.5;let x=f.r*.2;for(;x<f.r*2&&ot(f.x+Math.cos(g)*x,f.z+Math.sin(g)*x)>-1.6;)x+=.5;const p=f.x+Math.cos(g)*x,c=f.z+Math.sin(g)*x,v={x:p,y:-.9,z:c,r:2,sy:.75,color:9080730};n.rocks.push(v),n.spheres.push({x:p,y:-1.2,z:c,r:1.9});const T=1.1,S=v.y+v.sy*Math.sqrt(v.r*v.r-T*T);n.seats.push({kind:"rock",name:`a rock by ${f.name}`,x:p+Math.cos(g)*T,y:S+.25,z:c+Math.sin(g)*T,yaw:Math.atan2(Math.cos(g),-Math.sin(g))})}if(!f.rocksOnly)for(let u=0;u<7;u++){const g=t(0,6.28),x=t(0,f.r*.45),p=f.x+Math.cos(g)*x,c=f.z+Math.sin(g)*x;ot(p,c)>1&&n.palms.push({x:p,y:ot(p,c),z:c,h:t(5,8),lean:t(-.3,.3),yaw:t(0,6.28)})}}for(const f of si){const l=f.where;let u;if(l.wreck!=null){const g=Wi[l.wreck];u={...g.chest,container:"chest",place:g.name}}else if(l.grotto!=null){const g=ri[l.grotto],x=g.x-g.door.x*(g.r-3.5),p=g.z-g.door.z*(g.r-3.5);u={x,y:g.floor,z:p,yaw:Math.atan2(g.door.x,-g.door.z),container:"chest",place:g.name,approach:[{x:g.x+g.door.x*(g.r+8),y:g.floor+4,z:g.z+g.door.z*(g.r+8)},{x:g.x+g.door.x*(g.r-2),y:g.floor+3,z:g.z+g.door.z*(g.r-2)}]}}else if(l.clam!=null){const g=n.clams[l.clam];u={x:g.x,y:g.y+1.2,z:g.z,yaw:g.yaw,container:"clam",place:"a giant clam"}}else if(l.islet!=null){const g=Cn[l.islet];u={x:g.x+g.r*.9,y:-.1,z:g.z+g.r*.4,yaw:0,container:"bottle",place:g.name}}else if(l.kelp!=null){const g=Hl[l.kelp];u={x:g.x+4,y:ot(g.x+4,g.z-3),z:g.z-3,yaw:.4,container:"chest",place:"the kelp forest"}}n.treasures.push({...f,...u})}const a=["branch","brain","fan","tube","anemone","star","sponge"],o=[16743050,16756826,15882912,11565823,5951743,16769114,16734810,8060826,16751320],h=(f,l,u,g)=>u.some(x=>pi(f,l,x.x,x.z)<g),d=(f,l)=>h(f,l,ri.map(u=>({x:u.x,z:u.z})),13)||h(f,l,Wi,13)||h(f,l,kl,3)||pi(f,l,s.x,s.z)<s.hallR+2||Math.abs(f-s.x)<9&&l>s.z+10&&l<s.z+46||s.towers.some(u=>pi(f,l,u.x,u.z)<5),m=(f,l,u,g)=>{for(let x=0;x<g;x++){const p=t(0,6.28),c=Math.sqrt(e())*u,v=f+Math.cos(p)*c,T=l+Math.sin(p)*c,S=ot(v,T);if(S>-2.5||d(v,T))continue;const w=a[Math.floor(e()*a.length)],A=t(.7,1.6);n.coral.push({x:v,y:S,z:T,kind:w,color:o[Math.floor(e()*o.length)],s:A,yaw:t(0,6.28)}),w==="brain"&&A>1.3&&n.spheres.push({x:v,y:S+.3,z:T,r:.9*A})}};m(s.x,s.z,62,260);for(const f of Cn)m(f.x,f.z,f.r*1.9,f.rocksOnly?40:90);for(let f=0;f<26;f++)m(t(-260,260),t(-260,260),14,16);for(let f=0;f<70;f++){const l=t(-270,270),u=t(-270,270);if(d(l,u)||Math.hypot(l,u)>280)continue;const g=ot(l,u);if(g>-3)continue;const x=t(1.2,3.5);n.rocks.push({x:l,y:g,z:u,r:x,sy:t(.6,.9),color:9076848}),n.spheres.push({x:l,y:g-x*.2,z:u,r:x*.85})}for(const f of Hl)for(let l=0;l<90;l++){const u=t(0,6.28),g=Math.sqrt(e())*f.r,x=f.x+Math.cos(u)*g,p=f.z+Math.sin(u)*g,c=ot(x,p);c>-6||n.kelp.push({x,y:c,z:p,h:Math.min(-c-2,t(9,18))})}for(let f=0;f<40;f++){const l=t(0,6.28),u=t(30,60),g=s.x+Math.cos(l)*u,x=s.z+Math.sin(l)*u;if(d(g,x))continue;const p=ot(g,x);n.kelp.push({x:g,y:p,z:x,h:t(6,12)})}return n}function bo(i,e,t,n={}){let s=0,r=0,a=0;const o=(m,f,l)=>{e.x+=m,e.y+=f,e.z+=l,s+=m,r+=f,a+=l};for(const m of i.spheres){const f=e.x-m.x,l=e.y-m.y,u=e.z-m.z,g=Math.hypot(f,l,u),x=m.r+t;g>=x||(g<1e-6?o(0,x,0):o(f/g*(x-g),l/g*(x-g),u/g*(x-g)))}for(const m of i.cyls){if(e.y<m.y0-t||e.y>m.y1+t)continue;const f=e.x-m.x,l=e.z-m.z,u=Math.hypot(f,l),g=m.r+t;if(!(u>=g)){if(e.y>m.y1-.5){o(0,m.y1+t-e.y,0);continue}u<1e-6?o(g,0,0):o(f/u*(g-u),0,l/u*(g-u))}}for(const m of i.boxes){const f=Math.cos(m.yaw),l=Math.sin(m.yaw),u=e.x-m.x,g=e.y-m.y,x=e.z-m.z,p=u*f-x*l,c=u*l+x*f,v=Math.max(-m.hx,Math.min(m.hx,p)),T=Math.max(-m.hy,Math.min(m.hy,g)),S=Math.max(-m.hz,Math.min(m.hz,c));let w=p-v,A=g-T,C=c-S,_=Math.hypot(w,A,C);if(_>=t)continue;let y;_>1e-6?(w/=_,A/=_,C/=_,y=t-_):([_,w,A,C]=[[m.hx-p,1,0,0],[p+m.hx,-1,0,0],[m.hy-g,0,1,0],[g+m.hy,0,-1,0],[m.hz-c,0,0,1],[c+m.hz,0,0,-1]].sort((P,I)=>P[0]-I[0])[0],y=_+t),o((w*f+C*l)*y,A*y,(-w*l+C*f)*y)}for(const m of i.shells){const f=e.x-m.x,l=e.y-m.y,u=e.z-m.z,g=Math.hypot(f,l,u);if(l<-1||g>m.r+t+1.5||g<1e-6)continue;const x=f/g,p=l/g,c=u/g;if(m.doors.some(T=>x*T.x+p*T.y+c*T.z>=T.cos))continue;const v=.6;if(g<m.r){const T=m.r-v-t;g>T&&o(-x*(g-T),-p*(g-T),-c*(g-T))}else{const T=m.r+v+t;g<T&&o(x*(T-g),p*(T-g),c*(T-g))}}const h=n.surface??-.15;for(let m=0;m<3;m++){const f=ot(e.x,e.z)+t+.15;if(e.y>=f)break;if(f<=h+.01)o(0,f-e.y,0);else{const l=Vc(e.x,e.z),u=Math.hypot(l.x,l.z)||1,g=Math.min(2,f-h);o(-l.x/u*g,0,-l.z/u*g),e.y<ot(e.x,e.z)+t+.15&&ot(e.x,e.z)+t+.15<=h&&o(0,ot(e.x,e.z)+t+.15-e.y,0)}}e.y>h&&o(0,h-e.y,0);const d=Math.hypot(e.x,e.z);return d>sa&&o(-e.x/d*(d-sa),0,-e.z/d*(d-sa)),{x:s,y:r,z:a}}function Lm(i,e,t=.3){const n={...e},s=bo(i,n,t,{surface:50});return Math.hypot(s.x,s.y,s.z)>.05}const bt={speed:6.5,reverse:2,turn:2.1,rise:4,accel:5,radius:.65,floatY:-.15,twirlBoost:1.6,rideSpeed:13,rideMin:4,leapUp:10,gravity:13,reach:3.5,findReach:2.8},Gl={wave:2.2,kiss:1.8,sing:3.6,dance:3.2,flip:1.3};function Im(i,e){return!Gl[e]||e==="flip"&&i.mode!=="swim"?!1:(i.emote={kind:e,t:0,dur:Gl[e]},i.events.push({type:"emote",kind:e}),!0)}function Dm(i){return{x:i.x,y:i.y,z:i.z,yaw:i.yaw??0,pitch:0,roll:0,speed:0,vy:0,mode:"swim",seat:null,ride:null,twirl:0,emote:null,stroke:0,atSurface:!1,time:0,events:[]}}function Vl(i,e,t,n,s=i.yaw){Object.assign(i,{x:e,y:t,z:n,yaw:s,speed:0,vy:0,mode:"swim",seat:null,ride:null,twirl:0})}function Um(i,e,t){if(i.mode==="sit"||i.mode==="throne")return{kind:"stand",label:"Swim"};if(i.mode==="ride"||i.mode==="leap")return{kind:"leap",label:"Jump!"};let n=null,s=bt.reach;for(const r of e.seats){const a=Math.hypot(r.x-i.x,(r.y-i.y)*.7,r.z-i.z);a<s&&(s=a,n={kind:r.kind==="throne"?"throne":"sit",label:r.kind==="throne"?"Sit on your throne":"Sit",target:r})}for(const r of t.dolphins){const a=Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z);a<s+1&&r.leap<0&&(s=a-1,n={kind:"ride",label:"Ride",target:r})}return n}function Nm(i,e){e&&(e.kind==="sit"||e.kind==="throne"?(i.mode=e.kind==="throne"?"throne":"sit",i.seat=e.target,i.speed=0,i.vy=0,i.events.push({type:e.kind})):e.kind==="stand"?Wc(i):e.kind==="ride"?(i.mode="ride",i.ride=e.target,i.yaw=e.target.yaw,i.speed=Math.max(bt.rideMin,e.target.speed||6),i.events.push({type:"ride"})):e.kind==="leap"&&i.mode==="ride"&&i.ride.y>-3&&(i.mode="leap",i.vy=bt.leapUp,i.events.push({type:"leap"})))}function Fm(i){return i.mode!=="ride"?!1:(i.mode="swim",i.y=Math.min(i.y,-.8),i.ride=null,i.speed=Math.min(i.speed,bt.speed),i.events.push({type:"letgo"}),!0)}function Wc(i){const e=i.seat;i.mode="swim",i.seat=null,e&&(i.x=e.x+Math.sin(e.yaw)*1.8,i.z=e.z-Math.cos(e.yaw)*1.8,i.y=e.kind==="throne"?e.y:-1.4,i.yaw=e.yaw),i.events.push({type:"stand"})}const At={x:0,y:0,z:0};function zm(i,e,t,n){i.time+=n,i.emote&&(i.emote.t+=n)>=i.emote.dur&&(i.emote=null);const s=ln(e.turn||0,-1,1),r=ln(e.forward||0,-1,1),a=ln(e.rise||0,-1,1);if(i.mode==="sit"||i.mode==="throne"){const x=i.seat;i.x=rt(i.x,x.x,10,n),i.y=rt(i.y,x.y,10,n),i.z=rt(i.z,x.z,10,n),i.yaw+=Sr(i.yaw,x.yaw)*Math.min(1,n*8),i.pitch=rt(i.pitch,0,6,n),i.roll=rt(i.roll,0,6,n),i.stroke=rt(i.stroke,0,3,n),(Math.abs(r)>.5||Math.abs(s)>.8||Math.abs(a)>.5)&&Wc(i);return}if(e.twirl&&i.mode==="swim"&&i.twirl<=0&&(i.twirl=1,i.events.push({type:"twirl"})),i.twirl>0&&(i.twirl=Math.max(0,i.twirl-n*1.1)),i.mode==="ride"||i.mode==="leap")return Om(i,s,r,a,t,n);i.yaw+=s*bt.turn*n*(1-.25*Math.min(1,i.speed/bt.speed));const o=i.twirl>0?bt.twirlBoost:1,h=r>=0?r*bt.speed*o:r*bt.reverse;i.speed+=ln(h-i.speed,-5*1.5*n,bt.accel*n*o),i.vy=rt(i.vy,a*bt.rise,4,n);const d=Math.sin(i.yaw),m=-Math.cos(i.yaw);At.x=i.x+d*i.speed*n,At.y=i.y+i.vy*n,At.z=i.z+m*i.speed*n;const f=bo(t,At,bt.radius,{surface:bt.floatY}),l=-(f.x*d+f.z*m);l>0&&(i.speed=Math.max(0,i.speed-l/n*.5)),i.x=At.x,i.y=At.y,i.z=At.z;const u=i.atSurface;i.atSurface=i.y>bt.floatY-.4,i.atSurface&&!u&&i.events.push({type:"surface",speed:Math.abs(i.vy)}),!i.atSurface&&u&&i.events.push({type:"dive"});const g=i.atSurface&&a>=0?0:i.vy;i.pitch=rt(i.pitch,ln(Math.atan2(g,Math.max(1.5,i.speed))*1.2,-1.1,1.1),5,n),i.roll=rt(i.roll,-s*Math.min(1,i.speed/4)*.5,5,n),i.stroke=rt(i.stroke,Math.min(1,Math.abs(i.speed)/bt.speed+Math.abs(i.vy)/6),3,n)}function Om(i,e,t,n,s,r){const a=i.ride;i.yaw+=e*1.7*r;const o=t>=0?bt.rideMin+t*(bt.rideSpeed-bt.rideMin):2;i.speed=rt(i.speed,o,2,r);const h=Math.sin(i.yaw),d=-Math.cos(i.yaw);i.mode==="leap"?i.vy-=bt.gravity*r:(i.vy=rt(i.vy,n*5,4,r),n>.5&&a.y>-1.2&&i.speed>7&&(i.mode="leap",i.vy=bt.leapUp,i.events.push({type:"leap"}))),At.x=a.x+h*i.speed*r,At.y=a.y+i.vy*r,At.z=a.z+d*i.speed*r,bo(s,At,.9,{surface:i.mode==="leap"?6:-.9}),i.mode==="leap"&&i.vy<0&&At.y<-.6&&(i.mode="ride",i.vy=-2,i.events.push({type:"splash",x:At.x,z:At.z,size:1.4})),i.mode==="leap"&&At.y>.2&&a.y<=.2&&i.events.push({type:"splash",x:At.x,z:At.z,size:1}),a.x=At.x,a.y=At.y,a.z=At.z,a.yaw=i.yaw,a.pitch=ln(Math.atan2(i.vy,i.speed),-.9,.9),a.speed=i.speed,i.x=a.x-h*.2,i.y=a.y+.75,i.z=a.z-d*.2,i.pitch=a.pitch*.5,i.roll=rt(i.roll,-e*.35,5,r),i.atSurface=a.y>-1.5,i.stroke=rt(i.stroke,.2,3,r)}function Bm(i,e,t){for(const n of e.treasures){if(t.has(n.id))continue;if(Math.hypot(n.x-i.x,n.y+.6-i.y,n.z-i.z)<bt.findReach)return n}return null}const Zt=Math.PI*2,Wl=[16765498,4172031,16747050,11565823,16738984,14215408,5959856,16730698,8048895,16773280];function Yi(i,e,t){const n=i.phase+i.w*e*i.dir,s=1+.12*Math.sin(n*3+i.phase*7);return t.x=i.cx+Math.cos(n)*i.r*s,t.z=i.cz+Math.sin(n)*i.r*s,t.y=i.y+Math.sin(n*2+i.phase)*(i.bob??1),t}function _s(i,e,t,n,s=-.8){return Math.min(s,Math.max(e,ot(i,t)+n))}function km(i,{fish:e=260,seed:t=9}={}){const n=Gc(t),s=(u=0,g=1)=>u+n()*(g-u),r=(u,g,x,p,c,v=1)=>({cx:u,cz:g,r:x,y:p,w:c/x,dir:n()<.5?1:-1,phase:s(0,Zt),bob:v}),a=(u,g,x={})=>({kind:u,loop:g,x:g.cx,y:g.y,z:g.cz,yaw:0,pitch:0,roll:0,speed:0,anim:s(0,Zt),...x}),o={t:0,events:[]},h=[];[{x:0,z:0,r:50},{x:30,z:40,r:25},{x:-40,z:-30,r:30},...Cn.map(u=>({x:u.x,z:u.z,r:u.r*1.9})),{x:95,z:-60,r:25},{x:-150,z:-25,r:25},{x:25,z:125,r:25},{x:-60,z:100,r:30},{x:150,z:95,r:25}].forEach((u,g)=>{const x=Math.max(ot(u.x,u.z)+4,-14);h.push({loop:r(u.x,u.z,u.r,Math.min(-3,x),2.2,2),color:Wl[g%Wl.length],size:g%3===0?1.3:1,x:0,y:0,z:0})});const m={n:e,px:new Float32Array(e),py:new Float32Array(e),pz:new Float32Array(e),vx:new Float32Array(e),vy:new Float32Array(e),vz:new Float32Array(e),yaw:new Float32Array(e),school:new Uint16Array(e),orbit:new Float32Array(e),phase:new Float32Array(e),height:new Float32Array(e),size:new Float32Array(e)};for(let u=0;u<e;u++){const g=u%h.length;m.school[u]=g,m.orbit[u]=s(1,5),m.phase[u]=s(0,Zt),m.height[u]=s(-1.5,1.5),m.size[u]=h[g].size*s(.8,1.2),Yi(h[g].loop,0,gt),m.px[u]=gt.x+s(-3,3),m.py[u]=h[g].loop.y,m.pz[u]=gt.z+s(-3,3)}o.schools=h,o.fish=m,o.turtles=[];for(let u=0;u<7;u++){const g=s(0,Zt),x=s(40,200);o.turtles.push(a("turtle",r(Math.cos(g)*x,Math.sin(g)*x,s(25,55),s(-14,-6),1.6,2),{size:s(.9,1.3)}))}o.rays=[];for(let u=0;u<6;u++){const g=s(0,Zt),x=s(35,220);o.rays.push(a("ray",r(Math.cos(g)*x,Math.sin(g)*x,s(18,40),0,2.2,0),{size:s(1,1.6)}))}o.jellies=[];for(let u=0;u<22;u++){const g=ri[u%ri.length],x=u<12,p=s(0,Zt),c=x?s(14,30):s(60,240),v=x?g.x+Math.cos(p)*c:Math.cos(p)*c,T=x?g.z+Math.sin(p)*c:Math.sin(p)*c;o.jellies.push({x:v,y:s(-14,-5),z:T,cx:v,cz:T,anim:s(0,Zt),color:[16754912,13150463,11069695,16769192][u%4],size:s(.6,1.1)})}o.seahorses=[];for(let u=0;u<10;u++){const g=s(0,Zt),x=s(17,40);o.seahorses.push({cx:Hn.x+Math.cos(g)*x,cz:Hn.z+Math.sin(g)*x,x:0,y:0,z:0,yaw:s(0,Zt),anim:s(0,Zt),color:[16756826,16743088,16769114,8048895][u%4]})}o.crabs=[];for(let u=0;u<14;u++){const g=Cn[u%Cn.length],x=s(0,Zt),p=u<8?{x:g.x+Math.cos(x)*g.r*1.2,z:g.z+Math.sin(x)*g.r*1.2}:{x:Hn.x+Math.cos(x)*s(20,50),z:Hn.z+Math.sin(x)*s(20,50)};o.crabs.push({cx:p.x,cz:p.z,x:p.x,y:0,z:p.z,yaw:s(0,Zt),anim:s(0,Zt),color:u%2?16734778:16747066})}o.dolphins=[];for(const[u,g,x]of[[20,-20,85],[-60,60,120],[60,90,70]]){const p=r(u,g,x,-2.2,7,.4);for(let c=0;c<3;c++){const v={...p,r:p.r+(c-1)*3,phase:p.phase-c*.06,y:p.y-c*.5};o.dolphins.push(a("dolphin",v,{leapIn:s(3,12),leap:-1,ridden:!1,offset:{x:0,y:0,z:0,k:0}}))}}o.whales=[a("whale",r(0,0,105,-14,3,1.5),{breathIn:25,breath:-1,size:1}),a("whale",r(-20,10,150,-16,2.6,1.5),{breathIn:50,breath:-1,size:.85})],o.ships=[];const f=[[0,0,112],[0,0,285],[40,-30,172],[-20,40,150],[10,0,235],[-60,-40,95],[60,40,120],[30,20,70],[-40,0,60],[0,0,300]],l=(u,g,x)=>{for(let p=0;p<Zt;p+=.04)for(const c of[.86,1,1.14])if(ot(u+Math.cos(p)*x*c,g+Math.sin(p)*x*c)>-5)return!1;return!0};for(const[u,g,x]of f)o.ships.length>=3||!l(u,g,x)||o.ships.push(a("ship",r(u,g,x,0,3.2,0),{kind2:o.ships.length,color:[9062954,3824266,9054778][o.ships.length]}));o.gulls=[];for(let u=0;u<14;u++){const g=Cn[u%Cn.length],x=u<10?g:{x:s(-150,150),z:s(-150,150)};o.gulls.push(a("gull",r(x.x,x.z,s(8,26),s(8,16),7,1.5),{}))}return o}const gt={x:0,y:0,z:0},ki={x:0,y:0,z:0};function Hi(i,e,t,n){Yi(i.loop,e,gt),Yi(i.loop,e+.4,ki),i.x=gt.x,i.z=gt.z,i.y=_s(gt.x,gt.y,gt.z,t,n);const s=_s(ki.x,ki.y,ki.z,t,n),r=ki.x-gt.x,a=ki.z-gt.z,o=Math.hypot(r,a);i.yaw=Math.atan2(r,-a),i.pitch=Math.atan2(s-i.y,o||1),i.speed=o/.4}function Hm(i,e,t){i.t+=e;const n=i.t;i.events.length=0;const s=t.mermaid;for(const a of i.schools)Yi(a.loop,n,gt),a.x=gt.x,a.z=gt.z,a.y=_s(gt.x,gt.y,gt.z,3,-2);const r=i.fish;for(let a=0;a<r.n;a++){const o=i.schools[r.school[a]],h=r.phase[a]+n*(.6+r.orbit[a]*.05)*(a%2?1:-1)*.8;let d=o.x+Math.cos(h)*r.orbit[a]*1.6,m=o.y+r.height[a]+Math.sin(h*2)*.4,f=o.z+Math.sin(h)*r.orbit[a]*1.6;t.lure&&Math.hypot(o.x-t.lure.x,o.z-t.lure.z)<25&&(d=t.lure.x+Math.cos(h)*(2.2+r.orbit[a]*.5),m=t.lure.y+r.height[a]*.6+Math.sin(h*2)*.4,f=t.lure.z+Math.sin(h)*(2.2+r.orbit[a]*.5));const l=r.px[a]-s.x,u=r.py[a]-s.y,g=r.pz[a]-s.z,x=Math.hypot(l,u,g);if(x<5&&x>.001&&!t.lure){const T=(5-x)*2.2;d+=l/x*T,m+=u/x*T*.5,f+=g/x*T}const p=Math.min(1,e*2.5);r.vx[a]+=((d-r.px[a])*1.5-r.vx[a])*p,r.vy[a]+=((m-r.py[a])*1.5-r.vy[a])*p,r.vz[a]+=((f-r.pz[a])*1.5-r.vz[a])*p;const c=r.px[a]+r.vx[a]*e,v=r.pz[a]+r.vz[a]*e;if(ot(c,v)<-2.2?(r.px[a]=c,r.pz[a]=v):(r.vx[a]*=-.5,r.vz[a]*=-.5),r.py[a]=_s(r.px[a],r.py[a]+r.vy[a]*e,r.pz[a],.8,-.8),Math.hypot(r.vx[a],r.vz[a])>.15){const T=Math.atan2(r.vx[a],-r.vz[a]);r.yaw[a]+=Sr(r.yaw[a],T)*Math.min(1,e*8)}}for(const a of i.turtles)Hi(a,n,2.5,-1.5),a.anim+=e*1.6;for(const a of i.rays)Yi(a.loop,n,gt),a.loop.y=ot(gt.x,gt.z)+1.4,Hi(a,n,1.2,-1.5),a.anim+=e*2.2;for(const a of i.jellies)a.anim+=e,a.x=a.cx+Math.sin(a.anim*.13)*4,a.z=a.cz+Math.cos(a.anim*.11)*4,a.y=_s(a.x,a.y+Math.sin(a.anim*1.7)*e*.6,a.z,2,-2);for(const a of i.seahorses)a.anim+=e,a.x=a.cx+Math.sin(a.anim*.2)*1.5,a.z=a.cz+Math.cos(a.anim*.17)*1.5,a.y=ot(a.x,a.z)+2+Math.sin(a.anim*1.3)*.4,a.yaw+=e*.15;for(const a of i.crabs){a.anim+=e;const o=Math.sin(a.anim*.5)*3;a.x=a.cx+Math.cos(a.yaw)*o,a.z=a.cz+Math.sin(a.yaw)*o,a.y=ot(a.x,a.z)}for(const a of i.dolphins){if(a.anim+=e*6,a===t.riding){a.ridden=!0;continue}a.ridden&&(a.ridden=!1,Yi(a.loop,n,gt),a.offset={x:a.x-gt.x,y:a.y-gt.y,z:a.z-gt.z,k:1});const o=a.x,h=a.z;if(Hi(a,n,2,-1.2),a.offset.k>0){a.offset.k=Math.max(0,a.offset.k-e/5);const d=a.offset.k*a.offset.k*(3-2*a.offset.k);a.x+=a.offset.x*d,a.y+=a.offset.y*d,a.z+=a.offset.z*d,Math.hypot(a.x-o,a.z-h)>.001&&(a.yaw=Math.atan2(a.x-o,-(a.z-h)))}if(t.lure&&a.leap<0&&a.leapIn>.5&&Math.hypot(a.x-t.lure.x,a.z-t.lure.z)<35&&(a.leapIn=.2+a.anim*13%1.5),a.leapIn-=e,a.leap<0&&a.leapIn<=0&&a.offset.k===0&&(a.leap=0,i.events.push({type:"splash",x:a.x,y:0,z:a.z,size:.8})),a.leap>=0){a.leap+=e/1.3;const d=Math.min(1,a.leap);a.y=-.8+Math.sin(d*Math.PI)*3.2,a.pitch=Math.cos(d*Math.PI)*.9,a.leap>=1&&(a.leap=-1,a.leapIn=5+a.anim*997%9,i.events.push({type:"splash",x:a.x,y:0,z:a.z,size:1}))}}for(const a of i.whales)if(Hi(a,n,6,-3),a.anim+=e*.8,a.breathIn-=e,a.breath<0&&a.breathIn<=0&&(a.breath=0),a.breath>=0){a.breath+=e/14;const o=Math.min(1,a.breath),h=Math.sin(o*Math.PI);a.y=a.y+(-2.2-a.y)*h,a.pitch+=Math.cos(o*Math.PI)*.15,!a.blew&&o>.5&&(a.blew=!0,i.events.push({type:"spout",x:a.x+Math.sin(a.yaw)*3,y:0,z:a.z-Math.cos(a.yaw)*3})),a.breath>=1&&(a.breath=-1,a.blew=!1,a.breathIn=40+a.anim*31%20)}for(const a of i.ships)Hi(a,n,-100,0),a.y=0,a.pitch=Math.sin(n*.8+a.loop.phase)*.03,a.roll=Math.sin(n*.6+a.loop.phase*2)*.05;for(const a of i.gulls)Hi(a,n,-100,40),a.y=a.loop.y+Math.sin(n*.7+a.loop.phase)*1.5,a.roll=.35*a.loop.dir,a.anim+=e*9}const Gm=new ye(15917748),Vm=new ye(13153418),Wm=new ye(10127994),Xm=new ye(8044640),Xl=new ye(16773320),qm=`
  uniform float uTime;
  varying vec3 vCausticPos;
  float caustic(vec2 p, float t) {
    vec2 q = p * 0.32;
    float c = 0.0;
    for (int i = 0; i < 3; i++) {
      q += vec2(sin(q.y * 1.7 + t * 0.9), cos(q.x * 1.3 - t * 0.7)) * 0.65;
      c += abs(sin(q.x + q.y));
    }
    c = 1.0 - c / 3.0;
    return pow(max(c, 0.0), 6.0);
  }
`;function us(i,e,t=.55){return i.onBeforeCompile=n=>{n.uniforms.uTime=e.uTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCausticPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vCausticPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+qm).replace("#include <color_fragment>",`#include <color_fragment>
      {
        float under = step(vCausticPos.y, -0.2);
        float shallow = smoothstep(-40.0, -3.0, vCausticPos.y);
        float c = caustic(vCausticPos.xz, uTime) + 0.5 * caustic(vCausticPos.xz * 1.7 + 3.1, uTime * 1.3);
        diffuseColor.rgb += c * ${t.toFixed(2)} * shallow * under * vec3(0.75, 1.0, 1.0);
      }`)},i.customProgramCacheKey=()=>`caustics${t}`,i}function Ym(i,e){const t=Bt.seabed,n=680,s=n/t,r=new Float32Array((t+1)*(t+1)*3),a=new Float32Array((t+1)*(t+1)*3),o=new ye;for(let f=0;f<=t;f++)for(let l=0;l<=t;l++){const u=-n/2+l*s,g=-n/2+f*s,x=ot(u,g),p=(f*(t+1)+l)*3;r[p]=u,r[p+1]=x,r[p+2]=g;const c=Vc(u,g),v=Math.min(1,Math.hypot(c.x,c.z)*1.3);o.copy(Gm).lerp(Vm,Math.min(1,Math.max(0,(-x-18)/18))),o.lerp(Wm,v*.8),x>-.5&&o.copy(Xl),x>1.4&&o.copy(Xl).lerp(Xm,Math.min(1,(x-1.4)/1.2));const T=Math.sin(u*12.9898+g*78.233)*43758.5453,S=(T-Math.floor(T)-.5)*.06;a[p]=o.r+S,a[p+1]=o.g+S,a[p+2]=o.b+S}const h=[];for(let f=0;f<t;f++)for(let l=0;l<t;l++){const u=f*(t+1)+l,g=u+1,x=u+t+1,p=x+1;h.push(u,x,g,g,x,p)}const d=new Mt;d.setAttribute("position",new dt(r,3)),d.setAttribute("color",new dt(a,3)),d.setIndex(h),d.computeVertexNormals();const m=new Xe(d,us(new Xt({vertexColors:!0}),e,.6));return m.receiveShadow=!0,i.add(m),m}const Km=`
  varying vec3 vWorld;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,$m=`
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSky;
  uniform vec3 uUnder;
  uniform vec3 uSunDir;
  uniform vec3 uFogAbove;
  uniform vec3 uFogBelow;
  uniform float uFogDensity;
  varying vec3 vWorld;

  vec3 waveNormal(vec2 p, float t) {
    float dx = 0.0;
    float dz = 0.0;
    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      vec2 dir = vec2(cos(fi * 1.7 + 0.3), sin(fi * 2.3 + 0.9));
      float f = 0.35 + fi * 0.28;
      float ph = dot(dir, p) * f + t * (1.1 + fi * 0.35);
      float a = 0.18 / (1.0 + fi);
      dx += dir.x * cos(ph) * a * f;
      dz += dir.y * cos(ph) * a * f;
    }
    return normalize(vec3(-dx, 1.0, -dz));
  }

  void main() {
    vec3 n = waveNormal(vWorld.xz, uTime);
    vec3 toEye = cameraPosition - vWorld;
    float dist = length(toEye);
    vec3 v = toEye / dist;
    vec4 col;
    if (gl_FrontFacing) {
      // From above: deep blue, catching the sky at a glance, glinting in the sun.
      float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
      vec3 c = mix(uDeep, uSky, 0.25 + fres * 0.6);
      vec3 h = normalize(uSunDir + v);
      c += vec3(1.0, 0.95, 0.85) * pow(max(dot(n, h), 0.0), 180.0) * 2.5;
      float fog = 1.0 - exp(-dist * 0.0018);
      c = mix(c, uFogAbove, fog);
      col = vec4(c, mix(0.9, 0.98, fres));
    } else {
      // From below: a bright, rippling ceiling; brightest straight overhead.
      float up = max(-v.y, 0.0);
      float ripple = 0.5 + 0.5 * sin(dot(n.xz, vec2(40.0, 33.0)) + uTime * 2.0);
      vec3 c = mix(uUnder * 0.7, uUnder * 1.6 + vec3(0.25), smoothstep(0.55, 0.95, up));
      c += ripple * 0.12;
      float fog = 1.0 - exp(-dist * uFogDensity * 1.2);
      c = mix(c, uFogBelow, fog);
      col = vec4(c, 0.92);
    }
    gl_FragColor = col;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Zm=`
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vDepth = w.y;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,Jm=`
  uniform float uAlpha;
  uniform float uTime;
  uniform float uSeed;
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    float side = sin(vUv.x * 3.14159);
    side = pow(side, 2.0);
    float flicker = 0.7 + 0.3 * sin(uTime * 0.8 + uSeed * 7.0 + vUv.y * 3.0);
    float fade = smoothstep(0.0, 0.25, vUv.y) * smoothstep(-34.0, -4.0, vDepth);
    gl_FragColor = vec4(vec3(0.75, 1.0, 0.95) * side * fade * flicker * uAlpha, 1.0);
  }
`;function Qm(i){const e={uTime:{value:0},uDeep:{value:new ye(1731240)},uSky:{value:new ye(11065599)},uUnder:{value:new ye(8050920)},uSunDir:{value:null},uFogAbove:{value:new ye(13625592)},uFogBelow:{value:new ye(2792128)},uFogDensity:{value:.016}},t=new Xe(new vi(4e3,4e3),new Ht({vertexShader:Km,fragmentShader:$m,uniforms:e,side:qt,transparent:!0,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.renderOrder=5,i.add(t);const n=[];for(let d=0;d<14;d++){const m=new Ht({vertexShader:Zm,fragmentShader:Jm,uniforms:{uAlpha:{value:.1},uTime:e.uTime,uSeed:{value:d*1.37}},transparent:!0,blending:ha,depthWrite:!1,side:qt}),f=new vi(1,1);f.translate(0,-.5,0);const l=new Xe(f,m);l.userData={angle:d/14*Math.PI*2,r:10+d*7%5*9,w:2+d*3%4*1.8},l.renderOrder=6,l.frustumCulled=!1,i.add(l),n.push(l)}const s=700,r=40,a=new Float32Array(s*3);for(let d=0;d<s*3;d++)a[d]=(Math.random()-.5)*r;const o=new Mt;o.setAttribute("position",new dt(a,3));const h=new Ac(o,new Ht({transparent:!0,depthWrite:!1,uniforms:{uCam:{value:null},uScale:{value:400}},vertexShader:`
        uniform vec3 uCam;
        uniform float uScale;
        varying float vA;
        void main() {
          vec3 p = mod(position - uCam + 20.0, 40.0) - 20.0 + uCam;
          vec4 mv = viewMatrix * vec4(p, 1.0);
          gl_PointSize = uScale * 0.06 / -mv.z;
          vA = smoothstep(20.0, 6.0, length(p - uCam)) * step(p.y, -0.3);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          gl_FragColor = vec4(0.9, 1.0, 1.0, vA * 0.5 * (1.0 - r * 2.0));
        }`}));return h.frustumCulled=!1,i.add(h),{uniforms:e,surface:t,update(d,m,f,l){e.uTime.value=d,e.uSunDir.value=l,t.position.x=m.position.x,t.position.z=m.position.z;for(const u of n){const g=u.userData,x=g.angle+d*.01;u.position.set(m.position.x+Math.cos(x)*g.r,0,m.position.z+Math.sin(x)*g.r),u.scale.set(g.w,36,1),u.rotation.set(0,Math.atan2(m.position.x-u.position.x,m.position.z-u.position.z),.18+Math.sin(d*.3+g.angle)*.05),u.visible=f}h.visible=f,h.material.uniforms.uCam.value=m.position},setScale(d){h.material.uniforms.uScale.value=d}}}const ra=new Map;function wn(i,e){if(!ra.has(i)){const t=e();ra.set(i,t.index?t.toNonIndexed():t)}return ra.get(i)}function jm(){const i=[-.5,0,.5,.5,0,.5,.5,1,0,-.5,0,.5,.5,1,0,-.5,1,0,.5,0,-.5,-.5,0,-.5,-.5,1,0,.5,0,-.5,-.5,1,0,.5,1,0],e=new Mt;return e.setAttribute("position",new dt(new Float32Array(i),3)),e.computeVertexNormals(),e}function eg(){const i=[.5,0,.5,.5,0,-.5,.5,1,0,-.5,0,-.5,-.5,0,.5,-.5,1,0],e=new Mt;return e.setAttribute("position",new dt(new Float32Array(i),3)),e.computeVertexNormals(),e}const ae={box:()=>wn("box",()=>new _i(1,1,1)),cyl:(i=12)=>wn(`cyl${i}`,()=>new _n(.5,.5,1,i)),cone:(i=12)=>wn(`cone${i}`,()=>new bs(.5,1,i)),sphere:(i=10,e=7)=>wn(`sph${i}x${e}`,()=>new Jt(.5,i,e)),blob:()=>wn("blob",()=>new dr(.5,1)),gem:()=>wn("gem",()=>new dr(.5,0)),torus:(i=.35,e=.15)=>wn(`tor${i}${e}`,()=>new Ln(i,e,8,18)),roof:()=>wn("roof",jm),gable:()=>wn("gable",eg),plane:()=>wn("plane",()=>new _i(1,.001,1))},ql=new lt,Yl=new De,Kl=new Si,$l=new Dn,tg=new G,ng=new G,an=new ye,jn=new G;class Et{constructor(){this.pos=[],this.nor=[],this.col=[]}add(e,t,n,s,r,a,o,h,d=0,m=0,f=0){return $l.set(m,d,f,"YXZ"),Kl.setFromEuler($l),ql.compose(tg.set(t,n,s),Kl,ng.set(r,a,o)),this.addMatrix(e,ql,h)}addMatrix(e,t,n){Yl.getNormalMatrix(t),an.set(n);const s=e.attributes.position.array,r=e.attributes.normal.array;for(let a=0;a<s.length;a+=3)jn.set(s[a],s[a+1],s[a+2]).applyMatrix4(t),this.pos.push(jn.x,jn.y,jn.z),jn.set(r[a],r[a+1],r[a+2]).applyMatrix3(Yl).normalize(),this.nor.push(jn.x,jn.y,jn.z),this.col.push(an.r,an.g,an.b);return this}box(e,t,n,s,r,a,o,h=0){return this.add(ae.box(),e,t+r/2,n,s,r,a,o,h)}cyl(e,t,n,s,r,a,o=12){return this.add(ae.cyl(o),e,t+r/2,n,s*2,r,s*2,a)}cone(e,t,n,s,r,a,o=12){return this.add(ae.cone(o),e,t+r/2,n,s*2,r,s*2,a)}ball(e,t,n,s,r,a=10,o=7){return this.add(ae.sphere(a,o),e,t,n,s*2,s*2,s*2,r)}blob(e,t,n,s,r,a=1){return this.add(ae.blob(),e,t,n,s*2,s*2*a,s*2,r)}quad(e,t,n,s,r,a){const o=[e,r,n,e,r,s,t,r,s,e,r,n,t,r,s,t,r,n];an.set(a);for(let h=0;h<o.length;h+=3)this.pos.push(o[h],o[h+1],o[h+2]),this.nor.push(0,1,0),this.col.push(an.r,an.g,an.b);return this}disc(e,t,n,s,r,a=28){an.set(r);for(let o=0;o<a;o++){const h=o/a*Math.PI*2,d=(o+1)/a*Math.PI*2;this.pos.push(e,s,t,e+Math.cos(d)*n,s,t+Math.sin(d)*n,e+Math.cos(h)*n,s,t+Math.sin(h)*n);for(let m=0;m<3;m++)this.nor.push(0,1,0),this.col.push(an.r,an.g,an.b)}return this}get empty(){return this.pos.length===0}geometry(){const e=new Mt;return e.setAttribute("position",new dt(new Float32Array(this.pos),3)),e.setAttribute("normal",new dt(new Float32Array(this.nor),3)),e.setAttribute("color",new dt(new Float32Array(this.col),3)),e.computeBoundingSphere(),e}}const ls=15911242,aa=14739184,Zl=16775412,ig=new Pt({vertexColors:!0,shininess:120,specular:16777215,emissive:3153936});function sg(i){const e=new Et;switch(i){case"crown":e.add(ae.cyl(18),0,.12,0,.5,.22,.5,ls);for(let t=0;t<6;t++){const n=t/6*Math.PI*2;e.cone(Math.cos(n)*.24,.22,Math.sin(n)*.24,.05,.16,ls,6),e.ball(Math.cos(n)*.24,.4,Math.sin(n)*.24,.035,t%2?16726618:3836671)}e.ball(0,.13,-.26,.05,16726618);break;case"coins":for(let t=0;t<9;t++){const n=t*2.4,s=t<1?0:.14;e.add(ae.cyl(14),Math.cos(n)*s,.03+Math.floor(t/4)*.05,Math.sin(n)*s,.2,.04,.2,ls)}e.add(ae.cyl(14),0,.25,0,.2,.04,.2,ls,0,1.2);break;case"compass":e.add(ae.cyl(20),0,.05,0,.42,.1,.42,13146698),e.add(ae.cyl(20),0,.1,0,.34,.02,.34,16774368),e.add(ae.box(),0,.12,-.06,.04,.02,.14,14825518),e.add(ae.box(),0,.12,.06,.04,.02,.14,2763312);break;case"ruby":case"emerald":case"sapphire":{const t={ruby:16722522,emerald:2809978,sapphire:2779903}[i];e.add(ae.gem(),0,.22,0,.36,.44,.36,t);break}case"pearl":e.ball(0,.18,0,.18,Zl,16,12);break;case"necklace":for(let t=0;t<16;t++){const n=t/16*Math.PI*2;e.ball(Math.cos(n)*.22,.05,Math.sin(n)*.17,.045,Zl)}e.add(ae.gem(),0,.05,.22,.1,.12,.1,16747208);break;case"mirror":e.add(ae.cyl(20),0,.3,0,.36,.04,.36,aa,0,Math.PI/2),e.add(ae.cyl(20),0,.3,-.02,.3,.02,.3,13168895,0,Math.PI/2),e.add(ae.cyl(8),0,.05,0,.06,.24,.06,aa);break;case"conch":for(let t=0;t<5;t++)e.add(ae.cone(10),0,.12+t*.05,0,.36-t*.06,.18,.36-t*.06,t%2?16761040:16773344,t*.7);e.add(ae.cone(10),.12,.1,0,.18,.3,.18,16751288,0,0,Math.PI/2);break;case"bottle":e.add(ae.cyl(12),0,.12,0,.18,.3,.18,10150080),e.add(ae.cyl(10),0,.33,0,.08,.14,.08,10150080),e.add(ae.cyl(8),0,.42,0,.07,.06,.07,9067066),e.add(ae.cyl(8),0,.12,0,.1,.2,.1,16774360);break;case"tiara":for(let t=0;t<9;t++){const n=Math.PI*(.1+t/8*.8);e.ball(Math.cos(n)*.22,.05+Math.sin(n)*.08,-Math.sin(n)*.12,.03,aa)}for(let t=0;t<5;t++){const n=Math.PI*(.2+t/4*.6),s=t===2?.22:.14;e.add(ae.gem(),Math.cos(n)*.22,.1+s,-Math.sin(n)*.12,.08,.1,.03,t===2?16769114:11069695)}break;default:e.ball(0,.2,0,.2,ls)}return e.geometry()}const oa=new Map;function no(i){oa.has(i)||oa.set(i,sg(i));const e=new Xe(oa.get(i),ig);return e.castShadow=!0,e}const io={hair:{label:"Hair",colors:{gold:15911242,honey:14195258,brown:8014378,black:2759962,red:13783082,pink:16747208,purple:11037426,blue:4892927,mint:7008448,silver:15263988}},skin:{label:"Skin",colors:{porcelain:16770256,peach:16306352,tan:14723194,caramel:12616794,cocoa:9067066,deep:5913128,seagreen:11069640,lilac:14207224}},top:{label:"Shell top",colors:{pink:16747184,purple:11565823,gold:15911242,white:16774384,blue:5943551,coral:16743002,mint:7008448}},tail:{label:"Tail",colors:{teal:2801840,purple:10115826,pink:16738984,blue:2783999,green:3850346,gold:15906874,coral:16743002,silver:13160672}},crown:{label:"Crown",colors:{gold:15911242,silver:14542062,rose:15902880,pearl:16774392,crystal:11069695,pink:16747208}},throne:{label:"Throne",colors:{pink:16754888,purple:12624127,blue:9095423,gold:15911242,white:16774384,mint:10154192,coral:16751226}}},Xc={hair:"gold",skin:"peach",top:"pink",tail:"teal",crown:"gold",throne:"pink",style:"long"},rg={long:"Long",ponytail:"Ponytail",plaits:"Plaits",buns:"Buns",bob:"Short"};function mn(i,e){const t=io[e].colors;return t[i?.[e]]??t[Xc[e]]}const ag=16774384,Bn=15911242,cs=6965810,la=9071176,ca=new Map;function og(i,e){if(!ca.has(i)){const t=e();ca.set(i,t.index?t.toNonIndexed():t)}return ca.get(i)}const lg=()=>og("halfdown",()=>new Jt(.5,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2));function Jl(i,e,t=0){const s=new Jt(i,48,20,0,Math.PI*2,0,Math.PI/2).toNonIndexed().attributes.position.array,r=[],a=new G;for(let h=0;h<s.length;h+=9)if(a.set((s[h]+s[h+3]+s[h+6])/3,(s[h+1]+s[h+4]+s[h+7])/3,(s[h+2]+s[h+5]+s[h+8])/3).normalize(),!e.some(d=>a.x*d.x+a.y*d.y+a.z*d.z>=d.cos))for(let d=0;d<9;d+=3){let m=s[h+d],f=s[h+d+1],l=s[h+d+2];if(t){const u=pr(m*.35+5,l*.35+f*.3)*t,g=Math.hypot(m,f,l);m*=(g+u)/g,f*=(g+u)/g,l*=(g+u)/g}r.push(m,f,l)}const o=new Mt;return o.setAttribute("position",new dt(new Float32Array(r),3)),o.computeVertexNormals(),o}function Ql(i,e=1){const t=new Ye,n=new Pt({color:i,shininess:90}),s=new Pt({color:ag,shininess:120}),r=(o,h,d,m,f,l,u,g,x=0,p=0)=>{const c=new Xe(o,h);return c.position.set(d,m,f),c.scale.set(l,u,g),c.rotation.set(x,0,p),c.castShadow=!0,c.receiveShadow=!0,t.add(c),c},a=new Jt(1,14,10);r(new _n(.9,1.1,.7,20),s,0,.35,0,1,1,1),r(a,n,0,.95,.05,.95,.32,.8);for(let o=0;o<9;o++){const h=-1.15+o/8*2.3,d=r(a,n,Math.sin(h)*.75,1.2+Math.cos(h)*.75,.75,.2,.85,.14,-.2,-h);d.position.y+=.2,r(a,s,Math.sin(h)*1.5,1.4+Math.cos(h)*1.5,.8,.1,.1,.1)}return r(a,n,0,1.25,.8,.9,.55,.12),t.scale.setScalar(e),t.userData.shell=n,t}function cg(i,e,t,n){const s=new Et,r=new Et,a=[];for(const b of e.rocks)s.add(ae.blob(),b.x,b.y,b.z,b.r*2,b.r*2*b.sy,b.r*2,b.color),s.add(ae.gem(),b.x+b.r*.4,b.y+b.r*.3*b.sy,b.z-b.r*.3,b.r*1.1,b.r*.9*b.sy,b.r*1.1,new ye(b.color).multiplyScalar(.9).getHex());for(const b of e.coral){const D=b.s,{x:N,y:Z,z:F,color:W}=b;switch(b.kind){case"branch":for(let J=0;J<5;J++){const ie=b.yaw+J*1.3,le=.35+J%2*.25,Oe=(.8+J%3*.35)*D;s.add(ae.cyl(6),N+Math.cos(ie)*.2*D,Z+Oe*.45,F+Math.sin(ie)*.2*D,.14*D,Oe,.14*D,W,-ie+Math.PI/2,0,le),s.ball(N+Math.cos(ie)*(.2+Math.sin(le)*Oe)*D,Z+Math.cos(le)*Oe*.95,F+Math.sin(ie)*(.2+Math.sin(le)*Oe)*D,.1*D,W,6,4)}break;case"brain":s.add(ae.blob(),N,Z+.2*D,F,1.6*D,1*D,1.6*D,W);break;case"fan":s.add(ae.cyl(14),N,Z+.75*D,F,1.5*D,.06,1.3*D,W,b.yaw,Math.PI/2),s.add(ae.cyl(5),N,Z+.2*D,F,.08,.4*D,.08,W);break;case"tube":for(let J=0;J<5;J++){const ie=b.yaw+J*1.25,le=(.5+J%3*.3)*D;s.cyl(N+Math.cos(ie)*.22*D,Z,F+Math.sin(ie)*.22*D,.1*D,le,W,7)}break;case"anemone":s.cyl(N,Z,F,.25*D,.25*D,W,8);for(let J=0;J<10;J++){const ie=J/10*Math.PI*2;s.add(ae.cone(5),N+Math.cos(ie)*.17*D,Z+.45*D,F+Math.sin(ie)*.17*D,.07*D,.45*D,.07*D,16777215-(W&4144959),0,Math.cos(ie)*.3,-Math.sin(ie)*.3)}break;case"star":for(let J=0;J<5;J++){const ie=b.yaw+J/5*Math.PI*2;s.add(ae.box(),N+Math.cos(ie)*.15*D,Z+.05,F+Math.sin(ie)*.15*D,.32*D,.08,.1*D,W,-ie)}break;default:s.cyl(N,Z,F,.35*D,.7*D,W,10),s.cyl(N,Z+.69*D,F,.24*D,.03,new ye(W).multiplyScalar(.5).getHex(),10)}}for(const b of e.palms){let N=b.x,Z=b.z,F=b.y;const W=Math.cos(b.yaw)*b.lean,J=Math.sin(b.yaw)*b.lean;for(let ie=0;ie<6;ie++){const le=b.h/6;s.add(ae.cyl(7),N,F+le/2,Z,.36-ie*.03,le*1.05,.36-ie*.03,ie%2?10517066:9071162,0,J*(ie/6),-W*(ie/6)),N+=W*le*(ie/6),Z+=J*le*(ie/6),F+=le}for(let ie=0;ie<7;ie++){const le=ie/7*Math.PI*2;s.add(ae.box(),N+Math.cos(le)*1.3,F-.2,Z+Math.sin(le)*1.3,2.8,.08,.7,4892752,-le,0,-.45)}for(let ie=0;ie<3;ie++)s.ball(N+Math.cos(ie*2.1)*.25,F-.3,Z+Math.sin(ie*2.1)*.25,.18,6965802)}const o=e.palace,h=e.shells[0],d=new Xe(Jl(o.hallR,h.doors),us(new Pt({color:16770286,shininess:70,specular:10061977,side:qt,emissive:3809328}),t,.35));d.position.set(o.x,o.floor,o.z),d.castShadow=!0,i.add(d);for(let b=0;b<6;b++){const D=new Xe(new Ln(o.hallR+.15,.22,6,40,Math.PI),new Pt({color:Bn,shininess:120,specular:16777215}));D.position.set(o.x,o.floor,o.z),D.rotation.y=b/6*Math.PI,i.add(D)}const m=new Pt({color:Bn,shininess:120,specular:16777215}),f=new Xe(new Ln(o.hallR+.2,.35,8,64),m);f.position.set(o.x,o.floor+.2,o.z),f.rotation.x=Math.PI/2,i.add(f),[16774384,10150120,16763100,16774384,10150120,16763100,15911242].forEach((b,D)=>s.add(ae.cyl(40),o.x,o.floor+.05+D*.004,o.z,(o.hallR-D*1.9)*2,.1,(o.hallR-D*1.9)*2,b));for(const b of o.towers){const D=b.y1-b.y0;s.add(ae.cyl(20),b.x,b.y0+D/2,b.z,b.r*2,D,b.r*2,16771312);for(let N=0;N<4;N++)s.add(ae.torus(.5,.05),b.x,b.y0+3+N*3.5,b.z,b.r*2.1,b.r*2.1,3,N%2?Bn:16751304,0,Math.PI/2);for(let N=0;N<4;N++){const Z=N*1.57+.4;r.add(ae.sphere(8,6),b.x+Math.cos(Z)*b.r,b.y0+9+N%2*3,b.z+Math.sin(Z)*b.r,.9,1.4,.9,16771232)}s.cone(b.x,b.y1,b.z,b.r*1.3,6,16747200,20),s.add(ae.torus(.5,.06),b.x,b.y1,b.z,b.r*2.6,b.r*2.6,4,Bn,0,Math.PI/2),s.ball(b.x,b.y1+6.3,b.z,.5,Bn)}for(const b of o.pillars)s.cyl(b.x,b.y0,b.z,b.r,b.y1-b.y0,16773364,14),s.cyl(b.x,b.y1-.2,b.z,b.r*1.4,.4,Bn,14),s.cyl(b.x,b.y0,b.z,b.r*1.4,.5,Bn,14);for(const b of e.lanterns)r.ball(b.x,b.y,b.z,.45,16773312,12,9);for(let b=0;b<10;b++){const D=b/10*Math.PI*2+.3;r.ball(o.x+Math.cos(D)*(o.hallR-1.5),o.floor+4,o.z+Math.sin(D)*(o.hallR-1.5),.35,16773312,10,8)}const u=new Xe(new Ln(6.8,.4,8,32,Math.PI),m);u.position.set(o.x,o.floor,o.z+o.hallR+.6),i.add(u);const g=Ql(Bn,1.6);g.position.set(o.kingThrone.x,o.floor,o.kingThrone.z),g.rotation.y=o.kingThrone.yaw,i.add(g);const x=Ql(mn(n,"throne"),1);x.position.set(o.throne.x,o.floor,o.throne.z),x.rotation.y=o.throne.yaw,i.add(x);for(const b of o.display)s.cyl(b.x,o.floor,b.z,.16,b.y-o.floor-.05,16765152,8),s.cyl(b.x,b.y-.08,b.z,.3,.08,16774384,12);e.grottos.forEach((b,D)=>{const N=e.shells[1+D],Z=new ye(b.crystal).multiplyScalar(.35),F=us(new Xt({color:10128042,side:qt,emissive:Z}),t,.3),W=new Xe(Jl(b.r+.3,N.doors,1.2),F);W.position.set(b.x,b.floor,b.z),W.castShadow=!0,W.receiveShadow=!0,i.add(W);for(let J=0;J<16;J++){const ie=J/16*Math.PI*2,le=Math.cos(ie),Oe=Math.sin(ie);if(le*b.door.x+Oe*b.door.z>.75)continue;const Ne=b.r-1.2,Ve=.8+J%3*.6;r.add(ae.gem(),b.x+le*Ne,b.floor+Ve*.5,b.z+Oe*Ne,.5,Ve*1.6,.5,b.crystal,ie,.3*Oe,-.3*le),r.add(ae.gem(),b.x+le*(Ne-.6),b.floor+.3,b.z+Oe*(Ne-.6),.3,.8,.3,16777215,ie)}for(const J of[-1,1]){const ie=-b.door.z*J,le=b.door.x*J;r.add(ae.gem(),b.x+b.door.x*(b.r+1)+ie*5,b.floor+1,b.z+b.door.z*(b.r+1)+le*5,.8,2.6,.8,b.crystal)}});for(const b of e.wrecks){const D=new Et,N=3.2;D.add(lg(),0,N,0,6.4,5.2,21,cs),D.box(0,N-.15,0,5.8,.3,19,la);for(let F=0;F<6;F++)D.box((F%3-1)*1.6,N+.02,-6+F*2.5,.8,.1,1.2,2760728);D.box(0,N,7.5,5.4,2.4,4,cs);for(let F=-1;F<=1;F++)D.box(F*1.5,N+1.1,9.52,.7,.6,.06,1714746);D.box(0,N+2.4,7.5,5.8,.25,4.4,la),D.add(ae.cyl(6),0,N+1,-11.5,.3,4,.3,cs,0,-1.2),D.cyl(0,N,-1.5,.35,7,cs,8),D.add(ae.box(),.4,N+4.5,-1.2,4.5,3,.06,b.sail,.3,.2,.15),D.cyl(0,N+7,-1.5,.7,.4,la,10),D.add(ae.cyl(6),1.5,N+.4,3,.3,7,.3,cs,.4,0,1.45);for(const F of[-1,1])for(let W=0;W<3;W++)D.add(ae.cyl(8),F*3.1,N-.9,-4+W*3.5,.32,1.2,.32,2763312,0,0,Math.PI/2);for(let F=0;F<8;F++)D.cone(F*37%5-2,N,-8+F*2.2,.15,1+F%3*.5,3840586,5);const Z=new Xe(D.geometry(),us(new Xt({vertexColors:!0}),t,.4));Z.castShadow=!0,Z.receiveShadow=!0,Z.position.set(b.x,b.floor-.8,b.z),Z.rotation.set(0,-b.yaw,b.roll,"YXZ"),i.add(Z);for(let F=0;F<4;F++){const W=b.yaw+1.6+F*.5,J=b.x+Math.cos(W)*(6+F),ie=b.z+Math.sin(W)*(6+F);s.add(ae.cyl(10),J,b.floor+.4+F%2*.1,ie,.9,1.2,.9,9067066,W,F%2?Math.PI/2:0)}}const p=new _n(.05,.08,1,4,10,!0);p.translate(0,.5,0);const c=p.attributes.position;for(let b=0;b<c.count;b++)c.setX(b,c.getX(b)*9);p.computeVertexNormals();const v=new Xt({color:16777215,side:qt,emissive:666128});v.onBeforeCompile=b=>{b.uniforms.uTime=t.uTime,b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        vec3 base = vec3(instanceMatrix[3][0], 0.0, instanceMatrix[3][2]);
        float h = position.y;
        float sway = sin(uTime * 0.9 + base.x * 0.3 + base.z * 0.2 + h * 2.0) * 0.35 * h * h;
        transformed.x += sway;
        transformed.z += cos(uTime * 0.7 + base.z * 0.3 + h * 1.5) * 0.25 * h * h;
      }`)};const T=e.kelp.slice(0,Bt.kelp),S=new Qa(p,v,T.length),w=new Rt,A=new ye;T.forEach((b,D)=>{w.position.set(b.x,b.y,b.z),w.rotation.set(0,b.x*13.7%6.28,0),w.scale.set(1,b.h,1),w.updateMatrix(),S.setMatrixAt(D,w.matrix),S.setColorAt(D,A.setHSL(.27+Math.abs(b.z)*7.1%1*.07,.6,.45))}),S.instanceMatrix.needsUpdate=!0,i.add(S);const C=new Pt({color:14201064,shininess:60,side:qt}),_=e.clams.map(b=>{const D=new Ye;D.position.set(b.x,b.y,b.z),D.rotation.y=b.yaw;const N=new Xe(new Jt(1.2,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),C);N.scale.set(1,.5,.85),N.position.y=.55,D.add(N);const Z=new Ye;Z.position.set(0,.55,1),D.add(Z);const F=new Xe(new Jt(1.2,16,8,0,Math.PI*2,0,Math.PI/2),C);F.scale.set(1,.5,.85),F.position.set(0,0,-1),Z.add(F);for(const W of[N,F])W.castShadow=!0,W.receiveShadow=!0;return i.add(D),{hinge:Z,open:0}}),y=new Xt({color:9067058}),R=new Pt({color:Bn,shininess:120,specular:16777215}),P=new Map;for(const b of e.treasures){if(b.container!=="chest")continue;const D=new Ye;D.position.set(b.x,b.y,b.z),D.rotation.y=-(b.yaw||0);const N=new Xe(ae.box(),y);N.scale.set(1.4,.8,.9),N.position.y=.4,D.add(N);for(const J of[-.55,.55]){const ie=new Xe(ae.box(),R);ie.scale.set(.12,.84,.94),ie.position.set(J,.4,0),D.add(ie)}const Z=new Ye;Z.position.set(0,.8,.45),D.add(Z);const F=new Xe(new _n(.45,.45,1.4,12,1,!1,0,Math.PI),y);F.rotation.z=Math.PI/2,F.position.set(0,0,-.45),Z.add(F);const W=new Xe(ae.box(),R);W.scale.set(.22,.26,.08),W.position.set(0,-.05,-.92),Z.add(W);for(const J of[N,F])J.castShadow=!0;i.add(D),P.set(b.id,{hinge:Z,open:0})}const I=new Map;for(const b of e.treasures){const D=no(b.id);D.scale.setScalar(1.5),D.position.set(b.x,b.y+(b.container==="chest"?.85:b.container==="clam"?.1:0),b.z),i.add(D),I.set(b.id,D)}const z=new Xe(s.geometry(),us(new Xt({vertexColors:!0}),t,.45));z.castShadow=!0,z.receiveShadow=!0,i.add(z);const U=new Xe(r.geometry(),new Xt({vertexColors:!0,emissive:16777215,emissiveIntensity:.55}));return U.material.onBeforeCompile=b=>{b.fragmentShader=b.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;","vec3 totalEmissiveRadiance = emissive * vColor.rgb;")},i.add(U),{throne:x,kingThrone:g,setThroneColor(b){x.userData.shell.color.setHex(b)},update(b,D,N,Z){e.clams.forEach((F,W)=>{const ie=Math.hypot(Z.x-F.x,Z.y-F.y,Z.z-F.z)<9?1:.15+.1*Math.sin(b*.4+W);_[W].open+=(ie-_[W].open)*Math.min(1,D*2),_[W].hinge.rotation.x=_[W].open*.9});for(const[F,W]of P)W.open+=((N.has(F)?1:0)-W.open)*Math.min(1,D*2.5),W.hinge.rotation.x=W.open*1.9;for(const F of e.treasures){const W=I.get(F.id);W.visible=!N.has(F.id),W.visible&&(W.rotation.y=b*.8,F.container==="bottle"?W.position.y=-.1+Math.sin(b*1.6)*.12:W.position.y=F.y+(F.container==="chest"?.85:.1)+Math.sin(b*2)*.06)}for(const F of a)F(b)}}}const fg=new Xt({vertexColors:!0}),jl=new Pt({vertexColors:!0,shininess:60,specular:5596791}),qc=new Jt(.5,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2).toNonIndexed(),Yc=new Jt(.5,14,6,0,Math.PI*2,0,Math.PI/2).toNonIndexed();function nn(i,e=fg){const t=new Xe(i.geometry(),e);return t.castShadow=!0,t}function hg(){const i=new Et;i.add(ae.sphere(10,7),0,0,0,.32,.5,1,16777215),i.add(ae.sphere(8,5),0,0,.05,.34,.36,.2,5592405),i.add(ae.cone(6),0,0,.62,.05,.4,.42,16777215,0,Math.PI/2),i.add(ae.cone(5),0,.28,0,.05,.3,.3,16777215);for(const e of[-1,1])i.ball(e*.14,.06,-.32,.055,1710626,6,4);return i.geometry()}function ug(){const i=new Ye,e=new Et;e.add(Yc,0,0,0,1.4,.7,1.7,5933642);for(let n=0;n<5;n++)e.add(ae.gem(),(n%3-1)*.35,.28,(Math.floor(n/3)-.3)*.5,.35,.08,.35,8039002);e.add(qc,0,.02,0,1.3,.25,1.6,14209184),e.ball(0,.05,-1,.24,10141818);for(const n of[-1,1])e.ball(n*.1,.12,-1.15,.04,1710626,6,4);i.add(nn(e));const t=[];for(const[n,s,r]of[[-1,-.45,.8],[1,-.45,.8],[-1,.55,.45],[1,.55,.45]]){const a=new Ye;a.position.set(n*.6,0,s);const o=new Et;o.add(ae.sphere(8,5),n*r/2,0,0,r,.08,r*.45,10141818),a.add(nn(o)),i.add(a),t.push({pivot:a,sx:n,front:s<0})}return i.userData={flippers:t},i}function dg(){const i=new Ye,e=new Et;e.add(ae.sphere(10,6),0,0,0,.9,.25,1.4,6978192),e.add(ae.cyl(4),0,0,1.4,.05,1.8,.05,5925504,0,Math.PI/2);for(const n of[-1,1])e.ball(n*.18,.1,-.5,.05,1710626,6,4);i.add(nn(e));const t=[-1,1].map(n=>{const s=new Ye;s.position.set(n*.35,0,0);const r=new Et;return r.add(ae.gem(),n*.75,0,.05,1.6,.12,1.1,6978192,n*.6),r.add(ae.gem(),n*.75,-.03,.05,1.5,.08,1,15265524,n*.6),s.add(nn(r)),i.add(s),{pivot:s,sx:n}});return i.userData={wings:t},i}function pg(){const i=new Ye,e=new Et,t=8034488;e.add(ae.sphere(14,10),0,0,0,.7,.68,2.3,t),e.add(ae.sphere(12,8),0,-.12,-.15,.6,.48,1.9,15266040),e.add(ae.sphere(10,6),0,-.05,-1.25,.24,.2,.6,t),e.add(ae.cone(8),0,.42,.15,.08,.5,.45,t,0,-.5);for(const r of[-1,1])e.add(ae.sphere(8,5),r*.38,-.2,-.45,.5,.05,.22,t,r*.6,0,r*.5),e.ball(r*.2,.1,-.85,.045,1710626,6,4);e.add(ae.box(),0,-.1,-1.05,.22,.02,.3,5925504),i.add(nn(e,jl));const n=new Ye;n.position.set(0,0,.95);const s=new Et;s.add(ae.sphere(10,6),0,0,.35,.3,.28,.9,t);for(const r of[-1,1])s.add(ae.sphere(8,5),r*.3,0,.82,.6,.05,.3,t,r*.5);return n.add(nn(s,jl)),i.add(n),i.userData={tail:n},i}function mg(){const i=new Ye,e=new Et,t=3820138;e.add(ae.sphere(18,12),0,0,0,3.4,2.8,13,t),e.add(ae.sphere(16,10),0,-.6,-1.5,3,1.8,10,14738668);for(let r=0;r<6;r++)e.add(ae.box(),0,-1.35,-5+r*1.3,2.2,.06,.12,10134708);for(let r=0;r<7;r++)e.ball((r%3-1)*.5,1.15,-5.3+r*.4,.14,2767450,6,4);for(const r of[-1,1])e.add(ae.sphere(10,6),r*2.6,-.6,-2.2,4.4,.25,1,t,r*.35,0,r*.4),e.ball(r*1.3,-.1,-4.6,.2,1710626,8,6),e.ball(r*1.36,-.05,-4.62,.07,16777215,6,4);e.add(ae.cone(6),0,1.25,2.6,.5,.6,.9,t),i.add(nn(e));const n=new Ye;n.position.set(0,0,5.8);const s=new Et;s.add(ae.sphere(12,8),0,0,1.4,1.4,1.2,3.6,t);for(const r of[-1,1])s.add(ae.sphere(10,6),r*1.6,0,3.2,3.2,.2,1.3,t,r*.45);return n.add(nn(s)),i.add(n),i.userData={tail:n},i}function gg(){const i=new Et;i.add(Yc,0,0,0,1,.75,1,16777215);for(let e=0;e<8;e++){const t=e/8*Math.PI*2;i.add(ae.cyl(4),Math.cos(t)*.3,-.6,Math.sin(t)*.3,.03,1.2,.03,16777215)}return i.add(ae.sphere(8,6),0,-.25,0,.35,.6,.35,16777215),i.geometry()}function xg(i){const e=new Et;for(let t=0;t<5;t++)e.ball(0,.5-t*.18,.05*Math.sin(t*1.2)+(t>2?(t-2)*.06:0),.13-t*.018,i,8,6);e.ball(0,.68,-.05,.12,i,8,6),e.add(ae.cyl(6),0,.66,-.2,.06,.22,.06,i,0,Math.PI/2),e.add(ae.sphere(6,4),0,.35,.14,.04,.2,.15,16777215);for(const t of[-1,1])e.ball(t*.07,.72,-.1,.025,1710626,6,4);return nn(e)}function _g(i){const e=new Et;e.add(ae.sphere(10,6),0,.2,0,.7,.3,.5,i);for(const t of[-1,1]){e.cyl(t*.12,.25,-.2,.02,.2,i,4),e.ball(t*.12,.47,-.2,.05,1710626,6,4),e.ball(t*.42,.22,-.3,.12,i,8,6);for(let n=0;n<3;n++)e.add(ae.box(),t*.42,.1,-.05+n*.12,.35,.04,.04,i,0,0,t*.5)}return nn(e)}function vg(i){const e=new Et;e.add(qc,0,.6,0,4.4,3.4,15,i),e.box(0,.45,0,4,.3,13.5,13148272),e.box(0,.6,5,3.8,1.8,3,i);for(const[t,n]of[[-3.5,9],[1.5,11]])e.cyl(0,.6,t,.2,n,6965810,6),e.add(ae.box(),0,.6+n*.55,t+.35,4.6,n*.55,.12,16775406,0,-.08),e.add(ae.box(),.9,.6+n+.3,t,1.6,.6,.05,14825518);return e.add(ae.cyl(6),0,1.6,-8.2,.15,4,.15,6965810,0,-1.2),nn(e)}function Mg(){const i=new Ye,e=new Et;e.add(ae.sphere(10,6),0,0,0,.3,.3,.75,16777215),e.ball(0,.12,-.38,.13,16777215,8,6),e.add(ae.cone(5),0,.1,-.56,.05,.16,.05,15900730,0,-Math.PI/2),e.add(ae.box(),0,.02,.42,.22,.04,.2,14540253),i.add(nn(e));const t=[-1,1].map(n=>{const s=new Ye;s.position.set(n*.12,.05,-.02);const r=new Et;return r.box(n*.45,-.02,0,.9,.04,.3,13159636),r.box(n*.95,-.02,.02,.2,.04,.26,2763312),s.add(nn(r)),i.add(s),{pivot:s,sx:n}});return i.userData={wings:t},i}function Sg(i,e){const t=e.fish,n=new Qa(hg(),new Pt({vertexColors:!0,shininess:70,specular:6710886}),t.n);n.frustumCulled=!1;const s=new ye;for(let c=0;c<t.n;c++)n.setColorAt(c,s.setHex(e.schools[t.school[c]].color));i.add(n);const r=new Qa(gg(),new Pt({vertexColors:!0,transparent:!0,opacity:.6,emissive:3351108,shininess:90,depthWrite:!1}),e.jellies.length);r.frustumCulled=!1,e.jellies.forEach((c,v)=>r.setColorAt(v,s.setHex(c.color))),i.add(r);const a=(c,v)=>c.map(T=>{const S=v(T);return i.add(S),S}),o=a(e.turtles,ug),h=a(e.rays,dg),d=a(e.dolphins,pg),m=a(e.whales,mg),f=a(e.seahorses,c=>xg(c.color)),l=a(e.crabs,c=>_g(c.color)),u=a(e.ships,c=>vg(c.color)),g=a(e.gulls,Mg),x=new Rt,p=(c,v,T=1)=>{c.position.set(v.x,v.y,v.z),c.rotation.set(v.pitch||0,-(v.yaw||0),v.roll||0,"YXZ"),c.scale.setScalar(T)};return{update(c){for(let v=0;v<t.n;v++)x.position.set(t.px[v],t.py[v],t.pz[v]),x.rotation.set(0,-t.yaw[v]+Math.sin(c*9+v)*.15,0),x.scale.setScalar(.42*t.size[v]),x.updateMatrix(),n.setMatrixAt(v,x.matrix);n.instanceMatrix.needsUpdate=!0,e.jellies.forEach((v,T)=>{const S=1+Math.sin(v.anim*2.2)*.15;x.position.set(v.x,v.y,v.z),x.rotation.set(0,v.anim*.1,0),x.scale.set(v.size*S,v.size/S,v.size*S),x.updateMatrix(),r.setMatrixAt(T,x.matrix)}),r.instanceMatrix.needsUpdate=!0,e.turtles.forEach((v,T)=>{p(o[T],v,v.size);for(const S of o[T].userData.flippers)S.pivot.rotation.z=S.sx*Math.sin(v.anim+(S.front?0:1.5))*(S.front?.6:.3)}),e.rays.forEach((v,T)=>{p(h[T],v,v.size);for(const S of h[T].userData.wings)S.pivot.rotation.z=S.sx*Math.sin(v.anim)*.35}),e.dolphins.forEach((v,T)=>{p(d[T],v,1),d[T].userData.tail.rotation.x=Math.sin(v.anim)*.35}),e.whales.forEach((v,T)=>{p(m[T],v,v.size),m[T].userData.tail.rotation.x=Math.sin(v.anim)*.25}),e.seahorses.forEach((v,T)=>p(f[T],{...v,pitch:0,roll:Math.sin(v.anim)*.1},1.4)),e.crabs.forEach((v,T)=>p(l[T],{x:v.x,y:v.y,z:v.z,yaw:v.yaw+Math.PI/2},1.2)),e.ships.forEach((v,T)=>p(u[T],v,1)),e.gulls.forEach((v,T)=>{p(g[T],v,1.3);for(const S of g[T].userData.wings)S.pivot.rotation.z=S.sx*Math.sin(v.anim)*.5})}}}const ti=[[.2,.175],[.19,.165],[.18,.145],[.17,.12],[.16,.095],[.15,.072],[.13,.055]];function yg(i){const e=new Pt({color:i,shininess:80,specular:8956586});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vScaleUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vScaleUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vScaleUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec2 g = vScaleUv * vec2(14.0, 9.0);
          g.x += step(1.0, mod(g.y, 2.0)) * 0.5;
          vec2 f = fract(g) - vec2(0.5, 0.15);
          float edge = smoothstep(0.42, 0.5, length(f * vec2(1.0, 0.8)));
          diffuseColor.rgb *= 1.0 - edge * 0.28;
          diffuseColor.rgb += (1.0 - edge) * 0.06;
        }`)},e}const ei=new Jt(1,16,12),Ot=new Jt(1,10,8);function Ge(i,e,t,n,s,r=1,a=r,o=r){const h=new Xe(i,e);return h.position.set(t,n,s),h.scale.set(r,a,o),h.castShadow=!0,h}function ec(i,{king:e=!1}={}){const t={skin:new Xt({color:16777215}),hair:new Xt({color:16777215}),top:new Pt({color:16777215,shininess:60}),tail:yg(16777215),fin:new Pt({color:16777215,shininess:60,transparent:!0,opacity:.88}),crown:new Pt({color:16777215,shininess:120,specular:16777215}),eye:new Xt({color:2759994}),white:new Xt({color:16777215,emissive:16777215,emissiveIntensity:.5}),blush:new Xt({color:16751272,transparent:!0,opacity:.6}),mouth:new Xt({color:11549258}),gem:new Pt({color:16734888,shininess:120,emissive:4198440}),pearl:new Pt({color:16775412,shininess:120}),beard:new Xt({color:16053496}),gold:new Pt({color:15911242,shininess:120,specular:16777215})},n=new Ye,s=new Ye;if(n.add(s),e&&n.scale.setScalar(1.85),s.add(Ge(new ms(.16,.3,6,14),t.skin,0,0,0,1,1,.85)),e){const p=Ge(new Ln(.16,.025,6,20),t.gold,0,.02,0,1,1,.85);p.rotation.set(Math.PI/2,.5,0),s.add(p)}else{for(const p of[-1,1]){const c=Ge(new Jt(1,14,8,0,Math.PI*2,0,Math.PI/2),t.top,p*.075,.09,-.1,.085,.07,.085);c.rotation.x=-Math.PI/2+.15,c.rotation.z=p*.25,s.add(c);for(let v=-1;v<=1;v++){const T=Ge(Ot,t.top,p*.075+v*.028,.09+Math.abs(v)*-.01,-.165,.008,.05,.01);s.add(T)}}s.add(Ge(Ot,t.pearl,0,.07,-.135,.022))}for(let p=0;p<12;p++){const c=p/12*Math.PI*2;s.add(Ge(Ot,t.pearl,Math.cos(c)*.155,-.17,Math.sin(c)*.135,.025))}const r=new Ye;r.position.set(0,.42,0),s.add(r),s.add(Ge(new _n(.055,.065,.12,10),t.skin,0,.27,0)),r.add(Ge(ei,t.skin,0,0,0,.21,.205,.2));for(const p of[-1,1])r.add(Ge(Ot,t.eye,p*.075,.005,-.178,.04,.055,.025)),r.add(Ge(Ot,t.white,p*.075+.014,.025,-.198,.013)),r.add(Ge(Ot,t.blush,p*.12,-.055,-.155,.035,.022,.012));const a=Ge(new Ln(.035,.008,6,12,Math.PI),t.mouth,0,-.07,-.19);a.rotation.z=Math.PI,r.add(a),r.add(Ge(Ot,t.skin,0,-.02,-.2,.018));const o=new Ye;r.add(o),o.add(Ge(ei,t.hair,0,.035,.02,.225,.215,.215));for(let p=-2;p<=2;p++)o.add(Ge(Ot,t.hair,p*.055,.12-Math.abs(p)*.025,-.16+Math.abs(p)*.02,.06,.05,.05));const h=[],d=(p,c,v,T,S,w,A=.13)=>{let C=p;for(let _=0;_<S;_++){const y=new Ye;y.position.set(_===0?c:0,_===0?v:-A,_===0?T:.005);const R=w-_*(w/(S+2));y.add(Ge(ei,t.hair,0,-A*.6,.02,R,A*1.05,R*.4)),y.userData.first=_===0,C.add(y),h.push(y),C=y}},m={};m.long=new Ye;for(const p of[-1,1])m.long.add(Ge(Ot,t.hair,p*.17,-.05,0,.07,.15,.09));d(m.long,0,-.02,.15,e?2:5,.21),m.ponytail=new Ye,m.ponytail.add(Ge(new Ln(.045,.018,6,12),t.pearl,0,.16,.17)),d(m.ponytail,0,.16,.19,5,.11,.12),m.buns=new Ye;for(const p of[-1,1])m.buns.add(Ge(ei,t.hair,p*.13,.17,.04,.085)),m.buns.add(Ge(Ot,t.pearl,p*.13,.23,-.02,.022));d(m.buns,0,-.02,.15,2,.17),m.bob=new Ye;for(const p of[-1,1])m.bob.add(Ge(ei,t.hair,p*.16,-.06,.03,.1,.16,.13));m.bob.add(Ge(ei,t.hair,0,-.06,.13,.2,.16,.1)),m.plaits=new Ye;for(const p of[-1,1])d(m.plaits,p*.14,-.06,.1,5,.075,.11);for(const p of Object.values(m))o.add(p);const f=new Ye;f.position.set(0,.17,0),f.rotation.x=-.15,r.add(f);const l=e?.13:.1;f.add(Ge(new _n(l,l*1.05,.05,18,1,!0),t.crown,0,0,0));for(let p=0;p<(e?7:5);p++){const c=p/(e?7:5)*Math.PI*2+Math.PI/2;f.add(Ge(new bs(.022,e?.12:.08,6),t.crown,Math.cos(c)*l,e?.08:.06,-Math.sin(c)*l)),f.add(Ge(Ot,t.pearl,Math.cos(c)*l,e?.145:.105,-Math.sin(c)*l,.014))}if(f.add(Ge(Ot,t.gem,0,0,-l-.01,.025)),e){for(let p=0;p<7;p++){const c=p/6*Math.PI-Math.PI;r.add(Ge(Ot,t.beard,Math.cos(c)*.13,-.12+Math.sin(c)*.06,-.12,.07,.09,.06))}r.add(Ge(Ot,t.beard,0,-.24,-.1,.11,.14,.07));for(const p of[-1,1])r.add(Ge(Ot,t.beard,p*.05,-.05,-.19,.055,.022,.025));a.visible=!1}const u=[-1,1].map(p=>{const c=new Ye;c.position.set(p*.19,.13,0),s.add(c),c.add(Ge(new ms(.042,.17,4,8),t.skin,0,-.11,0));const v=new Ye;v.position.set(0,-.22,0),c.add(v),v.add(Ge(new ms(.036,.15,4,8),t.skin,0,-.09,0)),v.add(Ge(Ot,t.skin,0,-.2,0,.045));const T=Ge(new Ln(.04,.012,5,12),t.pearl,0,-.15,0);return T.rotation.x=Math.PI/2,v.add(T),{shoulder:c,elbow:v,side:p}});if(e){const p=new Ye;p.add(Ge(new _n(.018,.018,1.5,6),t.gold,0,.3,0));for(const v of[-1,0,1])p.add(Ge(new bs(.03,.18,6),t.gold,v*.07,1.1+(v===0?.04:0),0));const c=Ge(new _n(.012,.012,.16,6),t.gold,0,1,0);c.rotation.z=Math.PI/2,p.add(c),p.position.set(0,-.2,0),p.rotation.x=-1.4,u[1].elbow.add(p)}const g=bg(t.tail);s.add(g.mesh);const x=new Ye;s.add(x);for(const p of[-1,1]){const c=Ge(ei,t.fin,p*.13,-.17,0,.13,.26,.035);c.rotation.z=p*.75,x.add(c)}return x.add(Ge(ei,t.tail,0,0,0,.06,.07,.05)),n.userData={mats:t,body:s,head:r,hair:o,locks:h,styles:m,crown:f,arms:u,tail:g,fin:x,king:e,wave:0,swimPose:0,sitPose:0,phase:0,bends:ti.map(()=>0),emote:0,emoteKind:null},so(n,i),n}function bg(i){const n=ti.length*4+1,s=ti.reduce((l,[u])=>l+u,0),r=new Float32Array(n*15*3),a=new Float32Array(n*15*3),o=new Float32Array(n*15*2),h=[];for(let l=0;l<n-1;l++)for(let u=0;u<14;u++){const g=l*15+u,x=g+14+1;h.push(g,g+1,x,g+1,x+1,x)}const d=new Mt;d.setAttribute("position",new dt(r,3)),d.setAttribute("normal",new dt(a,3)),d.setAttribute("uv",new dt(o,2)),d.setIndex(h);const m=new Xe(d,i);m.castShadow=!0,m.frustumCulled=!1;const f={y:0,z:0,angle:0};return{mesh:m,update(l){let u=-.12,g=0,x=0,p=0,c=0;for(let v=0;v<ti.length;v++){const[T,S]=ti[v],w=v+1<ti.length?ti[v+1][1]:.04;for(let A=0;A<4||v===ti.length-1&&A===4;A++){const C=A/4,_=S+(w-S)*C,y=-Math.cos(x),R=-Math.sin(x);for(let I=0;I<=14;I++){const z=I/14*Math.PI*2,U=Math.cos(z),b=Math.sin(z),D=U,N=b*R,Z=b*-y,F=(c*15+I)*3;r[F]=D*_,r[F+1]=u+N*_*.85,r[F+2]=g+Z*_*.85;const W=Math.hypot(D,N,Z)||1;a[F]=D/W,a[F+1]=N/W,a[F+2]=Z/W;const J=(c*15+I)*2;o[J]=I/14,o[J+1]=p/s}if(c++,A===4)break;x+=l[v]/4;const P=T/4;u+=-Math.cos(x)*P,g+=-Math.sin(x)*P,p+=P}}return d.attributes.position.needsUpdate=!0,d.attributes.normal.needsUpdate=!0,f.y=u,f.z=g,f.angle=x,f}}}function so(i,e){const{mats:t,king:n,styles:s}=i.userData,r=n?"long":s[e?.style]?e.style:"long";for(const[o,h]of Object.entries(s))h.visible=o===r;if(n){t.skin.color.setHex(15911072),t.hair.color.setHex(16053496),t.tail.color.setHex(2788032),t.fin.color.setHex(6998256),t.crown.color.setHex(15911242),t.gem.color.setHex(5941503);return}t.skin.color.setHex(mn(e,"skin")),t.hair.color.setHex(mn(e,"hair")),t.top.color.setHex(mn(e,"top"));const a=mn(e,"tail");t.tail.color.setHex(a),t.fin.color.setHex(a).lerp(t.white.color,.35),t.crown.color.setHex(mn(e,"crown"))}function tc(i,e,t,n){const s=i.userData,r=e.mode==="swim"&&(e.speed>1.2||Math.abs(e.vy||0)>1.5)&&!(e.atSurface&&e.speed<2.5),a=e.mode==="sit"||e.mode==="throne"||e.mode==="ride"||e.mode==="leap";s.swimPose=rt(s.swimPose,r?1:0,3,t),s.sitPose=rt(s.sitPose,a?1:0,5,t);const o=e.stroke??0;s.phase+=t*(2+o*5);const h=e.emote;h&&(s.emoteKind=h.kind),s.emote=rt(s.emote,h?Math.min(1,(h.dur-h.t)*3):0,8,t);const d=s.emote>.01?s.emoteKind:null,m=h?h.t:0,f=s.emote;let l=e.twirl>0?(1-e.twirl)*Math.PI*4:0,u=0,g=0;d==="flip"&&h&&(u=-Math.PI*2*Math.min(1,h.t/h.dur*1.15)),d==="dance"&&(g=Math.sin(m*7)*.3*f,l+=Math.sin(m*3.5)*.5*f),s.body.rotation.set(-(Math.PI/2)*s.swimPose*(1-s.sitPose)+(e.pitch||0)*s.swimPose+u,l,(e.roll||0)*(.4+.6*s.swimPose)+g),s.body.position.y=Math.sin(n*1.6)*.05*(1-s.swimPose)*(1-s.sitPose)+(d==="dance"?Math.abs(Math.sin(m*7))*.08*f:0);const x=.12+o*.32+(d==="dance"?.25*f:0),p=[1.35,.15,-.25,-.35,-.35,-.3,-.2];s.bends.forEach((S,w)=>{const A=Math.sin(s.phase-w*.75)*x*(.4+w*.12),C=w>3?Math.sin(n*1.5-w*.5)*.08:0;s.bends[w]=A*(1-s.sitPose*.8)+(p[w]+C)*s.sitPose+Math.sin(n*1.2+w)*.04});const c=s.tail.update(s.bends);s.fin.position.set(0,c.y,c.z),s.fin.rotation.x=c.angle+Math.sin(s.phase-6)*x*1.2-.25*s.sitPose;const v=1.1*s.swimPose*(1-s.sitPose)-(d==="sing"?.3*f:0);s.locks.forEach((S,w)=>{const A=Math.sin(n*1.8-w*.6)*.1;S.userData.first?S.rotation.x=-(.5-.22*s.swimPose)-v+A:S.rotation.x=.08-.06*s.swimPose+A*.6,S.rotation.z=Math.sin(n*1.1-w*.5)*.08});const T=e.wave||d==="wave"?1:0;s.wave=rt(s.wave,T,4,t);for(const S of s.arms){const w=S.side,A=1-s.swimPose,C=Math.sin(s.phase*.5)*.45*s.swimPose;let _=.25*A+C,y=w*(.55*A+.3*s.swimPose+.2*Math.sin(n*1.3+w)*A),R=.35*A+.15;if((e.mode==="ride"||e.mode==="leap")&&(_=1,y=w*.25,R=.4),w>0&&s.wave>.01&&(_=_*(1-s.wave)+.2*s.wave,y=y*(1-s.wave)+(2.5+Math.sin(n*9)*.35)*s.wave,R=R*(1-s.wave)+.4*s.wave),d==="kiss"&&w>0){const P=h?Math.min(1,Math.max(0,(h.t-.6)*2.5)):1;_=_*(1-f)+(1.2+P*.5)*f,y=y*(1-f)+.25*f,R=R*(1-f)+(2.3-P*1.8)*f}else if(d==="sing")_=_*(1-f)+.9*f,y=y*(1-f)+w*(1+Math.sin(m*2+w)*.25)*f,R=R*(1-f)+.2*f;else if(d==="dance"){const P=Math.sin(m*7+(w>0?0:Math.PI))>0;_=_*(1-f)+.3*f,y=y*(1-f)+w*(P?2.7:1.2)*f,R=R*(1-f)+.5*f}else d==="flip"&&(_=_*(1-f)+2.8*f,y=y*(1-f)+w*.3*f,R=R*(1-f));s.king&&w>0&&(_=.3,y=.35,R=1.4),S.shoulder.rotation.set(_,0,y),S.elbow.rotation.set(R,0,0)}s.head.rotation.x=v,s.head.rotation.y=Math.sin(n*.5)*.15*(1-s.swimPose),s.head.rotation.z=d==="sing"||d==="dance"?Math.sin(m*3)*.15*f:0}function Eg(i){const e=new Ye,t=new Et;t.add(ae.sphere(14,10),0,0,0,.42,.46,.55,16765498);for(const o of[-.05,.12])t.add(ae.sphere(12,6),0,0,o,.44,.48,.07,3836671);t.add(ae.cone(6),0,.27,.05,.05,.22,.26,16765498);for(const o of[-1,1])t.ball(o*.13,.07,-.19,.075,16777215,10,8),t.ball(o*.15,.07,-.24,.042,1710634,8,6),t.ball(o*.16,.09,-.27,.014,16777215,6,4),t.add(ae.sphere(8,5),o*.22,-.05,0,.18,.04,.12,3836671,o*.5);t.add(ae.box(),0,-.07,-.27,.08,.02,.02,14174778);const n=new Xe(t.geometry(),new Pt({vertexColors:!0,shininess:70}));n.castShadow=!0,e.add(n);const s=new Ye;s.position.z=.26;const r=new Et;r.add(ae.cone(6),0,0,.14,.05,.3,.38,3836671,0,Math.PI/2),s.add(new Xe(r.geometry(),n.material)),e.add(s),i.add(e);const a={x:0,y:0,z:0,yaw:0,spin:0,hop:0,ready:!1};return{cheer(o=!1){a.spin=1,o&&(a.hop=1)},update(o,h,d){const m=o.mode==="ride"||o.mode==="leap"?1.6:1.1,f=Math.cos(o.yaw),l=Math.sin(o.yaw),u=Math.sin(o.yaw),g=-Math.cos(o.yaw),x=o.x+f*m-u*.6,p=o.z+l*m-g*.6,c=Math.min(-.25,o.y+.4+Math.sin(d*2.2)*.15);a.ready||Object.assign(a,{x,y:c,z:p,ready:!0});const v=a.x,T=a.z;a.x=rt(a.x,x,3,h),a.y=rt(a.y,c,3,h),a.z=rt(a.z,p,3,h);const S=Math.hypot(a.x-v,a.z-T),w=S>.01?Math.atan2(a.x-v,-(a.z-T)):o.yaw;a.yaw+=Sr(a.yaw,w)*Math.min(1,h*5),a.spin=Math.max(0,a.spin-h*.9),a.hop=Math.max(0,a.hop-h*1.2),e.position.set(a.x,a.y+Math.sin(a.hop*Math.PI)*.8,a.z),e.rotation.set(0,-a.yaw+(1-a.spin)*Math.PI*4*(a.spin>0?1:0),Math.sin(d*3)*.1),s.rotation.y=Math.sin(d*(6+S*60))*.5}}}const Tn={confetti:1,bubble:2,star:3,drop:4,heart:5,note:6},wg=`
  attribute vec4 tint;
  attribute vec2 extra; // size, shape
  attribute float spin;
  uniform float scale;
  varying vec4 vTint;
  varying float vShape;
  varying float vSpin;
  void main() {
    vTint = tint;
    vShape = extra.y;
    vSpin = spin;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(extra.x * scale / -mv.z, 0.0, 400.0);
    gl_Position = projectionMatrix * mv;
  }
`,Tg=`
  varying vec4 vTint;
  varying float vShape;
  varying float vSpin;
  void main() {
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    uv.y = -uv.y;
    float r = length(uv);
    vec3 col = vTint.rgb;
    float a = vTint.a;
    if (vShape < 0.5) {
      // Puff: a solid round cloud, lit from the top left.
      if (r > 1.0) discard;
      a *= smoothstep(1.0, 0.8, r);
      col *= 0.82 + 0.3 * clamp(dot(uv, vec2(-0.45, 0.6)) + 0.4, 0.0, 1.0);
    } else if (vShape < 1.5) {
      // Confetti: a little tumbling rectangle.
      float c = cos(vSpin);
      float s = sin(vSpin);
      vec2 q = mat2(c, -s, s, c) * uv;
      q.y /= 0.25 + 0.75 * abs(sin(vSpin * 1.7));
      if (abs(q.x) > 0.8 || abs(q.y) > 0.45) discard;
    } else if (vShape < 2.5) {
      // A bubble: a clear ring with a bright glint.
      if (r > 1.0) discard;
      float ring = smoothstep(0.6, 0.95, r) * (1.0 - smoothstep(0.95, 1.0, r));
      float glint = smoothstep(0.35, 0.0, length(uv - vec2(-0.35, 0.4)));
      a *= ring * 0.8 + glint + 0.08;
      col = mix(col, vec3(1.0), glint);
    } else if (vShape < 3.5) {
      // Star: five points.
      float ang = atan(uv.y, uv.x) + vSpin;
      float k = 0.5 + 0.5 * pow(abs(cos(ang * 2.5)), 3.0);
      if (r > k * 0.95) discard;
      col *= 1.1 + 0.3 * (1.0 - r);
    } else if (vShape < 4.5) {
      // A drop of water: bright, with a glint.
      if (r > 1.0) discard;
      a *= smoothstep(1.0, 0.55, r);
      col += vec3(0.6) * smoothstep(0.4, 0.0, length(uv - vec2(-0.3, 0.35)));
    } else if (vShape > 5.5) {
      // A music note: a round head, a stem and a little flag.
      vec2 h = uv - vec2(-0.25, -0.5);
      float head = length(h * vec2(1.0, 1.35)) - 0.3;
      float stem = max(abs(uv.x - 0.03) - 0.07, abs(uv.y - 0.15) - 0.65);
      float flag = max(abs(uv.x - 0.25) - 0.22, abs(uv.y - 0.62 + (uv.x - 0.03) * 0.5) - 0.12);
      if (min(head, min(stem, flag)) > 0.0) discard;
    } else {
      // Heart.
      vec2 h = uv * 1.25;
      h.y += 0.25;
      float x = abs(h.x);
      float d = h.y - sqrt(max(0.0, x)) * 0.8;
      if (x * x + d * d * 1.4 > 0.75) discard;
    }
    gl_FragColor = vec4(col, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Ag(){return new Ht({vertexShader:wg,fragmentShader:Tg,transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}}})}function Rg(i){const e=new Mt;e.setAttribute("position",new dt(new Float32Array(i*3),3)),e.setAttribute("tint",new dt(new Float32Array(i*4),4)),e.setAttribute("extra",new dt(new Float32Array(i*2),2)),e.setAttribute("spin",new dt(new Float32Array(i),1));for(const t of["position","tint","extra","spin"])e.attributes[t].setUsage(35048);return e}function Cg(i,e=2e3){const t=Ag(),n=Rg(e),s=new Ac(n,t);s.frustumCulled=!1,s.renderOrder=7,i.add(s);const r={x:new Float32Array(e),y:new Float32Array(e),z:new Float32Array(e),vx:new Float32Array(e),vy:new Float32Array(e),vz:new Float32Array(e),age:new Float32Array(e).fill(1),life:new Float32Array(e).fill(1),s0:new Float32Array(e),s1:new Float32Array(e),r:new Float32Array(e),g:new Float32Array(e),b:new Float32Array(e),a:new Float32Array(e),shape:new Float32Array(e),grav:new Float32Array(e),drag:new Float32Array(e),spin:new Float32Array(e),spinV:new Float32Array(e),fade:new Float32Array(e),wobble:new Float32Array(e)};let a=0;const o=new ye,h=()=>Math.random()-.5;function d(m){const f=a;a=(a+1)%e,r.x[f]=m.x,r.y[f]=m.y,r.z[f]=m.z,r.vx[f]=m.vx??0,r.vy[f]=m.vy??0,r.vz[f]=m.vz??0,r.age[f]=0,r.life[f]=m.life??1,r.s0[f]=m.size??1,r.s1[f]=m.size1??m.size??1,o.set(m.color??16777215),r.r[f]=o.r*(m.bright??1),r.g[f]=o.g*(m.bright??1),r.b[f]=o.b*(m.bright??1),r.a[f]=m.alpha??1,r.shape[f]=m.shape??0,r.grav[f]=m.gravity??0,r.drag[f]=m.drag??0,r.spin[f]=m.spin??Math.random()*6.28,r.spinV[f]=m.spinV??0,r.fade[f]=m.fade??.6,r.wobble[f]=m.wobble??0}return{emit:d,bubbles(m,f,l,u=1,g=.18){for(let x=0;x<u;x++){const p=g*(.5+Math.random());d({x:m+h()*.4,y:f+h()*.3,z:l+h()*.4,vx:h()*.3,vy:1.2+Math.random()*1.2,vz:h()*.3,life:2.5+Math.random()*2,size:p,size1:p*1.4,color:14219519,shape:Tn.bubble,fade:.85,wobble:1})}},sparkle(m,f,l,u=16773280,g=1,x=.6,p=.35){for(let c=0;c<g;c++)d({x:m+h()*x*2,y:f+h()*x*2,z:l+h()*x*2,vx:h()*.4,vy:.4+Math.random()*.6,vz:h()*.4,life:.8+Math.random()*.8,size:p*(.6+Math.random()),size1:.02,color:u,bright:1.8,shape:Tn.star,spinV:3,fade:.2})},splash(m,f,l,u=20,g=1){for(let x=0;x<u;x++){const p=Math.random()*6.28,c=(1+Math.random()*2.5)*g;d({x:m,y:f+.1,z:l,vx:Math.cos(p)*c,vy:2.5+Math.random()*4*g,vz:Math.sin(p)*c,life:.7+Math.random()*.4,size:.3+Math.random()*.3,size1:.12,color:15268863,alpha:.95,gravity:11,shape:Tn.drop})}for(let x=0;x<u/4;x++)d({x:m+h()*1.5,y:f+.1,z:l+h()*1.5,vy:.3,life:.8,size:.4*g,size1:1.1*g,color:16777215,alpha:.5,drag:1,fade:.2})},spout(m,f,l){for(let u=0;u<60;u++)d({x:m+h()*.4,y:f,z:l+h()*.4,vx:h()*1.5,vy:7+Math.random()*5,vz:h()*1.5,life:1.6,size:.4+Math.random()*.4,size1:1.2,color:16055295,alpha:.8,gravity:7,drag:.6,shape:Tn.drop,fade:.5})},confetti(m,f,l,u=120,g=2.5){const x=[16738984,5951743,16769114,8056992,11565823,16751194,16777215];for(let p=0;p<u;p++){const c=Math.random()*6.28,v=1.5+Math.random()*3.5;d({x:m,y:f,z:l,vx:Math.cos(c)*v,vy:2+Math.random()*5,vz:Math.sin(c)*v,life:3+Math.random()*1.5,size:.35,color:x[p%x.length],gravity:g,drag:1.6,shape:Tn.confetti,spinV:(Math.random()-.5)*12,fade:.8})}},coins(m,f,l,u=30){for(let g=0;g<u;g++){const x=Math.random()*6.28,p=1+Math.random()*2.5;d({x:m,y:f,z:l,vx:Math.cos(x)*p,vy:3+Math.random()*3,vz:Math.sin(x)*p,life:2,size:.32,color:16765498,bright:1.4,gravity:3,drag:1.2,shape:Tn.confetti,spinV:10,fade:.7})}},stars(m,f,l,u=10,g=16767050){for(let x=0;x<u;x++){const p=x/u*6.28;d({x:m,y:f,z:l,vx:Math.cos(p)*2.5,vy:1.5+Math.random()*2,vz:Math.sin(p)*2.5,life:1.6,size:.9,size1:.4,color:g,bright:1.5,drag:1.2,shape:Tn.star,spinV:2,fade:.6})}},note(m,f,l){const u=[16738984,5951743,16769114,11565823,8056992];d({x:m+h()*.6,y:f,z:l+h()*.6,vx:h()*.8,vy:.9+Math.random()*.6,vz:h()*.8,life:2,size:.55,size1:.7,color:u[Math.floor(Math.random()*u.length)],bright:1.3,shape:Tn.note,fade:.6,wobble:1})},heart(m,f,l,u=16738970){d({x:m,y:f,z:l,vy:.9,life:1.6,size:.6,size1:.9,color:u,bright:1.2,shape:Tn.heart,fade:.6})},setScale(m,f){t.uniforms.scale.value=m/(2*Math.tan(f*Math.PI/180/2))},update(m,f){const l=n.attributes.position.array,u=n.attributes.tint.array,g=n.attributes.extra.array,x=n.attributes.spin.array;for(let p=0;p<e;p++){if(r.age[p]>=r.life[p]){g[p*2]=0,u[p*4+3]=0;continue}r.age[p]+=m;const c=Math.min(1,r.age[p]/r.life[p]);r.vy[p]-=r.grav[p]*m;const v=Math.exp(-r.drag[p]*m);r.vx[p]*=v,r.vy[p]*=r.grav[p]>0?1:v,r.vz[p]*=v,r.x[p]+=(r.vx[p]+(r.wobble[p]?Math.sin(f*6+p)*.25:0))*m,r.y[p]+=r.vy[p]*m,r.z[p]+=r.vz[p]*m,r.shape[p]===Tn.bubble&&r.y[p]>-.1&&(r.age[p]=r.life[p]),r.spin[p]+=r.spinV[p]*m,l[p*3]=r.x[p],l[p*3+1]=r.y[p],l[p*3+2]=r.z[p];const T=r.fade[p],S=c<T?1:1-(c-T)/(1-T);u[p*4]=r.r[p],u[p*4+1]=r.g[p],u[p*4+2]=r.b[p],u[p*4+3]=r.a[p]*S*Math.min(1,r.age[p]*12),g[p*2]=r.s0[p]+(r.s1[p]-r.s0[p])*c,g[p*2+1]=r.shape[p],x[p]=r.spin[p]}n.attributes.position.needsUpdate=!0,n.attributes.tint.needsUpdate=!0,n.attributes.extra.needsUpdate=!0,n.attributes.spin.needsUpdate=!0}}}const Pg=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Lg=`
  uniform vec3 topColor;
  uniform vec3 horizonColor;
  uniform vec3 glowColor;
  uniform vec3 cloudColor;
  uniform vec3 sunDir;
  uniform float glowStrength;
  uniform float time;
  uniform float night;
  varying vec3 vDir;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) { v += noise(p) * a; p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }

  void main() {
    vec3 dir = normalize(vDir);
    float y = dir.y;

    // Three-stop gradient: a pale band on the horizon, a clean mid-blue, and
    // a deeper zenith — the look of a gouache sky wash.
    float h = smoothstep(-0.02, 0.42, y);
    vec3 mid = mix(horizonColor, topColor, 0.7);
    vec3 col = mix(horizonColor, mid, smoothstep(0.0, 0.35, h));
    col = mix(col, topColor * 0.92, smoothstep(0.5, 1.0, h));

    // Below the horizon, the sky fades into the dust haze.
    col = mix(col, horizonColor * 1.02, smoothstep(0.0, -0.08, y));

    float cosA = dot(dir, normalize(sunDir));
    col += glowColor * pow(max(0.0, cosA), 6.0) * glowStrength * 0.45;
    col += glowColor * pow(max(0.0, cosA), 90.0) * glowStrength * 0.9;
    // The disc: a flat, bright coin with a crisp edge, as a painter would.
    // At night it is the moon: much bigger, pale, with its seas drawn on.
    float disc = smoothstep(mix(0.9990, 0.9955, night), mix(0.9994, 0.9960, night), cosA);
    vec3 moon = vec3(0.95, 0.96, 1.0) * 1.5;
    vec3 side = normalize(cross(normalize(sunDir), vec3(0.0, 1.0, 0.0)));
    vec2 mp = vec2(dot(dir, side), dot(dir, cross(side, normalize(sunDir)))) * 40.0;
    moon *= 1.0 - 0.18 * smoothstep(0.55, 0.75, fbm(mp * 1.3 + 3.0));
    col = mix(col, mix(vec3(1.0, 0.98, 0.92) * 1.4, moon, night), disc);

    // Stars, twinkling, thinning towards the horizon and hidden by the moon.
    if (night > 0.01 && y > 0.0) {
      vec2 sp = vec2(atan(dir.z, dir.x) * 180.0, y * 260.0);
      vec2 cell = floor(sp);
      float h = hash(cell);
      vec2 offset = vec2(hash(cell + 7.1), hash(cell + 3.3));
      float d = length(fract(sp) - offset);
      float star = step(0.975, h) * smoothstep(0.12, 0.0, d);
      star *= 0.6 + 0.4 * sin(time * (1.5 + h * 3.0) + h * 40.0);
      star *= smoothstep(0.0, 0.25, y) * (1.0 - smoothstep(0.96, 0.99, cosA));
      col += vec3(0.95, 0.97, 1.0) * star * night * 1.6;
    }

    // High cirrus: long wind-combed strokes, only overhead.
    if (y > 0.04) {
      vec2 p = dir.xz / (y + 0.18);
      p = vec2(p.x * 0.55 + p.y * 0.2, p.y * 1.9) + vec2(time * 0.004, 0.0);
      float streak = fbm(p * 1.6);
      streak = smoothstep(0.56, 0.78, streak) * smoothstep(0.04, 0.3, y);
      // Lit on the sun side, cooler away from it.
      vec3 tint = mix(cloudColor * 0.92, cloudColor * 1.05 + glowColor * 0.08, 0.5 + 0.5 * cosA);
      col = mix(col, tint, streak * 0.45);
    }

    gl_FragColor = vec4(col, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Ig(i){const e=new Ht({side:Yt,depthWrite:!1,fog:!1,vertexShader:Pg,fragmentShader:Lg,uniforms:{topColor:{value:new ye(3111119)},horizonColor:{value:new ye(16176814)},glowColor:{value:new ye(16751178)},cloudColor:{value:new ye(16773590)},sunDir:{value:new G(-.5,.42,.62)},glowStrength:{value:.5},time:{value:0},night:{value:0}}}),t=new Xe(new Jt(4e3,32,20),e);return t.frustumCulled=!1,t.renderOrder=-1,i.add(t),{mesh:t,uniforms:e.uniforms,follow(n){t.position.copy(n)}}}const Dg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Ug=`
  #include <packing>
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 texel;
  uniform float near;
  uniform float far;
  uniform float lineWidth;
  uniform vec2 inkFade;
  uniform vec3 inkColor;
  uniform vec3 shadowTint;
  uniform vec3 lightTint;
  uniform float saturation;
  uniform float halation;
  uniform float grain;
  uniform float mist;
  uniform vec3 mistColor;
  varying vec2 vUv;

  float viewZ(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    return -perspectiveDepthToViewZ(d, near, far);
  }

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }

  float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

  void main() {
    vec3 col = texture2D(tColor, vUv).rgb;

    /* -- ink ------------------------------------------------------------ */
    float z = viewZ(vUv);
    vec2 o = texel * lineWidth;
    float zl = viewZ(vUv - vec2(o.x, 0.0));
    float zr = viewZ(vUv + vec2(o.x, 0.0));
    float zu = viewZ(vUv + vec2(0.0, o.y));
    float zd = viewZ(vUv - vec2(0.0, o.y));
    // Only the near side of a depth jump gets inked, so lines sit on the
    // object's edge rather than floating on the background behind it.
    float jump = max(max(zl, zr), max(zu, zd)) - z;
    // Relative, so a line means the same thing at 20m and at 800m; and the
    // second-derivative term ignores smooth slopes seen edge-on (the sea).
    float curve = abs(zl + zr - 2.0 * z) + abs(zu + zd - 2.0 * z);
    float edge = smoothstep(0.035, 0.09, jump / z) * smoothstep(0.012, 0.04, curve / z);
    edge *= 1.0 - smoothstep(inkFade.x, inkFade.y, z);
    // The sky has nothing to ink.
    edge *= step(z, far * 0.95);
    vec3 inked = mix(col * 0.32, inkColor, 0.45);
    col = mix(col, inked, edge * 0.85);

    /* -- halation ------------------------------------------------------- */
    #ifdef HALATION
      vec3 glow = vec3(0.0);
      for (int i = 0; i < 8; i++) {
        float a = float(i) * 0.7854;
        vec2 dir = vec2(cos(a), sin(a));
        vec3 s1 = texture2D(tColor, vUv + dir * texel * 5.0).rgb;
        vec3 s2 = texture2D(tColor, vUv + dir * texel * 14.0).rgb;
        glow += max(s1 - 1.15, 0.0) + max(s2 - 1.15, 0.0) * 0.7;
      }
      col += glow * halation / 8.0;
    #endif

    /* -- grade ---------------------------------------------------------- */
    float l = luma(col);
    col = mix(vec3(l), col, saturation);
    // Split-tone: shadows lean blue-violet, highlights lean warm.
    float shade = 1.0 - smoothstep(0.05, 0.45, l);
    float light = smoothstep(0.45, 1.1, l);
    col = mix(col, col * shadowTint * 1.25, shade * 0.35);
    col = mix(col, col * lightTint, light * 0.25);

    /* -- inside a cloud: soft white, thinner at the edges of the screen -- */
    vec2 m = vUv - 0.5;
    float wisp = 0.85 + 0.15 * sin(vUv.x * 9.0 + vUv.y * 5.0);
    col = mix(col, mistColor, clamp(mist * wisp * (1.0 - dot(m, m) * 0.6), 0.0, 0.92));

    /* -- paper ---------------------------------------------------------- */
    vec2 px = gl_FragCoord.xy;
    float paper = noise(px * 0.35) * 0.6 + noise(px * 0.09) * 0.4;
    col *= 1.0 + (paper - 0.5) * grain;
    float fine = hash(px) - 0.5;
    col += fine * grain * 0.25;

    vec2 c = vUv - 0.5;
    col *= 1.0 - dot(c, c) * 0.42;

    gl_FragColor = vec4(max(col, 0.0), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Ng(i){const e=i.getDrawingBufferSize(new Ue),t=new cn(e.x,e.y,{type:Mn,samples:Bt.msaa,depthBuffer:!0});t.depthTexture=new $i(e.x,e.y,vn);const n=new Ht({vertexShader:Dg,fragmentShader:Ug,defines:Bt.halation?{HALATION:""}:{},depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:t.texture},tDepth:{value:t.depthTexture},texel:{value:new Ue(1/e.x,1/e.y)},near:{value:.5},far:{value:4200},lineWidth:{value:1},inkFade:{value:new Ue(700,2200)},inkColor:{value:new ye(2761536)},shadowTint:{value:new ye(10787544)},lightTint:{value:new ye(16773596)},saturation:{value:1.12},halation:{value:.4},grain:{value:.03},mist:{value:0},mistColor:{value:new ye(16052714)}}}),s=new Xe(new vi(2,2),n);s.frustumCulled=!1;const r=new Sc;r.add(s);const a=new _r(-1,1,1,-1,0,1);function o(){i.getDrawingBufferSize(e),t.setSize(e.x,e.y),n.uniforms.texel.value.set(1/e.x,1/e.y),n.uniforms.lineWidth.value=Math.max(1,Math.min(2,e.y/720))}return o(),{uniforms:n.uniforms,setSize:o,render(h,d){n.uniforms.near.value=d.near,n.uniforms.far.value=d.far,i.setRenderTarget(t),i.render(h,d),i.setRenderTarget(null),i.render(r,a)}}}const An={distance:6.5,height:1.6,ride:10,sit:5.5,min:3.5,max:16};function Fg(i,e){const t=new G;let n=0,s=An.distance,r=1,a=0,o=1,h=0;const d={x:0,y:0,z:0};function m(f,l,u=!1){const g=f.mode==="sit"||f.mode==="throne"||f.emote&&f.emote.kind!=="flip"&&f.mode!=="ride"&&f.mode!=="leap",x=f.mode==="ride"||f.mode==="leap",p=g?f.yaw+Math.PI+.5+Math.sin(f.time*.1)*.3:f.yaw,c=u?1:Math.min(1,l*(g?1.2:2.5+Math.min(4,f.speed)*.3));n+=Sr(n,p+a)*c;const v=(x?An.ride:g?An.sit:An.distance)*r;s=u?v:rt(s,v,2,l),t.x=u?f.x:rt(t.x,f.x,10,l),t.y=u?f.y:rt(t.y,f.y,8,l),t.z=u?f.z:rt(t.z,f.z,10,l);const T=Math.sin(n),S=-Math.cos(n);let w=1;for(let R=1;R<=8;R++){const P=R/8;if(d.x=t.x-T*s*P,d.y=t.y+An.height*P,d.z=t.z-S*s*P,Lm(e,d,.35)){w=Math.max(.3,(R-1)/8);break}}o=u?w:w<o?rt(o,w,20,l):rt(o,w,2,l);let A=t.x-T*s*o,C=t.y+An.height*(.6+.4*o)+(g?.3:0),_=t.z-S*s*o;f.atSurface||f.mode==="sit"?C=Math.max(C,1.4):C=Math.min(C,-.7),C=Math.max(C,ot(A,_)+.9),h>0&&(A+=(Math.random()-.5)*h,C+=(Math.random()-.5)*h,h=Math.max(0,h-l*2)),i.position.set(A,C,_);const y=g?0:2;i.lookAt(t.x+T*y,t.y+(g?.6:.3),t.z+S*y)}return{get yaw(){return n},reset(f){m(f,1,!0)},update(f,l){m(f,l)},lookRound(f,l,u){l?a=ln(a+f*.006,-2.2,2.2):a=rt(a,0,1.2,u)},zoom(f){r=ln(r*f,An.min/An.distance,An.max/An.distance)},kick(f){h=Math.max(h,f)},get underwater(){return i.position.y<0}}}function fa(i,e){try{i.setPointerCapture(e)}catch{}}function zg({actions:i={},onFirstInput:e=()=>{}}={}){const t=new Set;let n=!1;const s={mx:0,my:0,up:!1,down:!1,look:0,looking:!1};let r=!1,a=!1;const o=()=>{n||(n=!0,e())},h={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"up",KeyR:"up",PageUp:"up",ShiftLeft:"down",ShiftRight:"down",KeyC:"down",KeyF:"down",PageDown:"down"};addEventListener("keydown",y=>{if(y.target&&(y.target.tagName==="INPUT"||y.target.tagName==="TEXTAREA")||y.ctrlKey||y.metaKey||y.altKey)return;o();const R=h[y.code];if(R){t.add(R),(y.code.startsWith("Arrow")||y.code==="Space")&&y.preventDefault();return}y.repeat||(y.code==="KeyE"||y.code==="Enter"?r=!0:y.code==="KeyQ"||y.code==="KeyT"?a=!0:y.code==="KeyM"?i.sound?.():y.code==="KeyH"?i.home?.():y.code==="Minus"||y.code==="NumpadSubtract"?i.zoom?.(1.15):(y.code==="Equal"||y.code==="NumpadAdd")&&i.zoom?.(1/1.15))}),addEventListener("keyup",y=>{const R=h[y.code];R&&t.delete(R)}),addEventListener("blur",()=>t.clear());const d=y=>y.preventDefault();document.addEventListener("gesturestart",d,{passive:!1}),document.addEventListener("gesturechange",d,{passive:!1}),document.addEventListener("gestureend",d,{passive:!1}),document.addEventListener("touchmove",y=>{y.touches.length>1&&y.preventDefault()},{passive:!1});let m=0;document.addEventListener("touchend",y=>{const R=performance.now();R-m<320&&!y.target.closest?.("button, input")&&y.preventDefault(),m=R},{passive:!1}),document.addEventListener("dblclick",d,{passive:!1});const f=document.querySelector("#stickPad"),l=document.querySelector("#stickKnob"),u=document.querySelector("#stickBase");let g=null,x=0,p=0;const c=60;if(f){f.addEventListener("pointerdown",R=>{o(),g===null&&(g=R.pointerId,fa(f,R.pointerId),x=R.clientX,p=R.clientY,u&&(u.style.left=`${x}px`,u.style.top=`${p}px`,u.classList.add("on")),R.preventDefault())}),f.addEventListener("pointermove",R=>{if(R.pointerId!==g)return;let P=(R.clientX-x)/c,I=(R.clientY-p)/c;const z=Math.hypot(P,I);z>1.4&&(x+=(R.clientX-x)*(z-1.4)/z,p+=(R.clientY-p)*(z-1.4)/z,u&&(u.style.left=`${x}px`,u.style.top=`${p}px`),P/=z/1.4,I/=z/1.4);const U=Math.min(1,Math.hypot(P,I)),b=Math.atan2(I,P),D=U<.15?0:Math.min(1,(U-.15)/.55);s.mx=Math.cos(b)*D,s.my=-Math.sin(b)*D,l&&(l.style.transform=`translate(${Math.cos(b)*U*c*.75}px, ${Math.sin(b)*U*c*.75}px)`)});const y=R=>{R.pointerId===g&&(g=null,s.mx=0,s.my=0,l&&(l.style.transform=""),u?.classList.remove("on"))};f.addEventListener("pointerup",y),f.addEventListener("pointercancel",y)}const v=document.querySelector("#lookPad");let T=null,S=0;if(v){v.addEventListener("pointerdown",R=>{o(),T===null&&(T=R.pointerId,S=R.clientX,fa(v,R.pointerId),s.looking=!0)}),v.addEventListener("pointermove",R=>{R.pointerId===T&&(s.look+=R.clientX-S,S=R.clientX)});const y=R=>{R.pointerId===T&&(T=null,s.looking=!1)};v.addEventListener("pointerup",y),v.addEventListener("pointercancel",y)}const w=(y,R)=>{const P=document.querySelector(y);if(!P)return;const I=new Set;P.addEventListener("pointerdown",U=>{o(),I.add(U.pointerId),fa(P,U.pointerId),s[R]=!0,P.classList.add("down"),U.preventDefault()});const z=U=>{I.delete(U.pointerId),I.size||(s[R]=!1,P.classList.remove("down"))};P.addEventListener("pointerup",z),P.addEventListener("pointercancel",z),P.addEventListener("contextmenu",U=>U.preventDefault())};w("#upBtn","up"),w("#downBtn","down");const A=(y,R)=>{const P=document.querySelector(y);if(!P)return;P.addEventListener("pointerdown",z=>{o(),z.preventDefault(),P.classList.add("down"),R()});const I=()=>P.classList.remove("down");P.addEventListener("pointerup",I),P.addEventListener("pointercancel",I),P.addEventListener("pointerleave",I),P.addEventListener("contextmenu",z=>z.preventDefault())};A("#actBtn",()=>r=!0),A("#twirlBtn",()=>a=!0);const C=[];function _(){const y=navigator.getGamepads?navigator.getGamepads():[];for(const R of y){if(!R||!R.connected)continue;const P=b=>R.buttons[b]?.value??0,I=b=>{const D=P(b)>.5,N=C[b];return C[b]=D,D&&!N};I(0)&&(r=!0),(I(2)||I(1))&&(a=!0),I(9)&&i.menu?.();const z=b=>Math.abs(b)<.15?0:b,U={mx:z(R.axes[0]||0),my:-z(R.axes[1]||0),rise:P(7)-P(6)+(P(5)-P(4)),look:z(R.axes[2]||0)};return(U.mx||U.my||U.rise)&&o(),U}return null}return{sample(){const y=_(),R=(t.has("right")?1:0)-(t.has("left")?1:0),P=(t.has("fwd")?1:0)-(t.has("back")?1:0),I=ln(R+s.mx+(y?.mx||0),-1,1),z=ln(P+s.my+(y?.my||0),-1,1),U=ln((t.has("up")||s.up?1:0)-(t.has("down")||s.down?1:0)+(y?.rise||0),-1,1),b={turn:I,forward:z,rise:U,action:r,twirl:a,look:s.look+(y?.look||0)*12,looking:s.looking||!!y?.look};return r=!1,a=!1,s.look=0,b}}}const Og=.5,js=[0,2,4,7,9,12,14,16,19,21];function Bg(){let i=null,e=!0,t=!0,n=!1,s=null,r=null;function a(){if(i||!e)return;const l=window.AudioContext||window.webkitAudioContext;if(!l)return;i=new l,r=i.createBuffer(1,i.sampleRate*2,i.sampleRate);const u=r.getChannelData(0);for(let _=0;_<u.length;_++)u[_]=Math.random()*2-1;const g=i.createDynamicsCompressor();g.threshold.value=-16,g.ratio.value=4;const x=i.createGain();x.gain.value=Og,x.connect(g).connect(i.destination);const p=i.createGain();p.gain.value=.5;const c=i.createDelay(1);c.delayTime.value=.34;const v=i.createGain();v.gain.value=.38;const T=i.createGain();T.gain.value=.45,c.connect(v).connect(c),c.connect(T).connect(x),p.connect(x),p.connect(c);const S=(_,y,R,P)=>{const I=i.createBufferSource();I.buffer=r,I.loop=!0,I.playbackRate.value=_;const z=i.createBiquadFilter();z.type=y,z.frequency.value=R,z.Q.value=P;const U=i.createGain();return U.gain.value=0,I.connect(z).connect(U).connect(x),I.start(),{f:z,g:U}},w=S(.3,"lowpass",220,.7),A=S(.8,"bandpass",700,.8),C=S(.5,"lowpass",900,.5);s={master:x,music:p,echo:c,deep:w,swim:A,waves:C,harpT:0,gullT:2,bubbleT:1,note:0,chord:0}}const o=()=>i.currentTime,h=()=>i&&e&&!n;function d(l,u,g,{type:x="sine",peak:p=.15,glide:c=1,dest:v=null,attack:T=.01}={}){const S=i.createOscillator();S.type=x,S.frequency.setValueAtTime(l,u),c!==1&&S.frequency.exponentialRampToValueAtTime(l*c,u+g);const w=i.createGain();w.gain.setValueAtTime(1e-4,u),w.gain.exponentialRampToValueAtTime(p,u+T),w.gain.exponentialRampToValueAtTime(1e-4,u+g),S.connect(w).connect(v||s.master),S.start(u),S.stop(u+g+.05)}function m(l,u,g=.08,x=null){d(l,u,2.2,{type:"sine",peak:g,dest:x||s.music,attack:.005}),d(l*2,u,1.2,{type:"triangle",peak:g*.3,dest:x||s.music,attack:.005})}function f(l,u,g,x,p,c="bandpass"){const v=i.createBufferSource();v.buffer=r;const T=i.createBiquadFilter();T.type=c,T.frequency.value=g,T.Q.value=x;const S=i.createGain();S.gain.setValueAtTime(1e-4,l),S.gain.exponentialRampToValueAtTime(p,l+.01),S.gain.exponentialRampToValueAtTime(1e-4,l+u),v.connect(T).connect(S).connect(s.master),v.start(l,Math.random()),v.stop(l+u+.05)}return{get enabled(){return e},start(){a(),i?.state==="suspended"&&i.resume()},setEnabled(l){e=l,!l&&i&&i.suspend(),l&&(a(),i?.resume())},toggle(){return this.setEnabled(!e),e},setMusic(l){t=l,s&&s.music.gain.setTargetAtTime(l?.5:0,o(),.3)},setPaused(l){n=l,i&&(l?i.suspend():e&&i.resume())},update(l,u){if(!h())return;const g=o();if(s.deep.g.gain.setTargetAtTime(u.underwater?.22:.03,g,.3),s.swim.g.gain.setTargetAtTime(Math.min(.12,u.speed*.015)*(u.underwater?1:.3),g,.15),s.swim.f.frequency.setTargetAtTime(500+u.speed*80,g,.2),s.waves.g.gain.setTargetAtTime(u.underwater?.02:.16,g,.4),s.waves.f.frequency.setTargetAtTime(600+Math.sin(g*.4)*300,g,.5),s.bubbleT-=l,u.underwater&&s.bubbleT<=0){s.bubbleT=.3+Math.random()*1.5;const x=500+Math.random()*700;d(x,g,.08,{type:"sine",peak:.04,glide:1.8})}if(s.gullT-=l,!u.underwater&&s.gullT<=0){s.gullT=2+Math.random()*5;for(let x=0;x<2+Math.floor(Math.random()*3);x++){const p=1100+Math.random()*400;d(p,g+x*.22,.2,{type:"sawtooth",peak:.025,glide:.75})}}if(u.whaleNear&&Math.random()<l*.2){const x=120+Math.random()*120;d(x,g,2.5,{type:"sine",peak:.12*u.whaleNear,glide:1.4+Math.random()*.4,dest:s.music,attack:.6}),d(x*1.5,g+.3,2,{type:"triangle",peak:.04*u.whaleNear,glide:.8,dest:s.music,attack:.5})}if(u.dolphinNear&&Math.random()<l*.5){const x=g+Math.random()*.2;d(1800+Math.random()*800,x,.35,{type:"sine",peak:.06*u.dolphinNear,glide:1.6});for(let p=0;p<5;p++)f(x+.4+p*.035,.01,4e3,4,.05*u.dolphinNear)}if(s.harpT-=l,t&&s.harpT<=0){s.harpT=.55+(Math.random()<.3?.55:0);const x=[220,196,174.6,196][Math.floor(s.chord/8)%4];s.chord++,s.note=Math.max(0,Math.min(js.length-1,s.note+Math.floor(Math.random()*5)-2)),m(x*2**(js[s.note]/12),g,.06),s.chord%4===0&&m(x/2,g,.05)}},treasure(){if(!h())return;const l=o();[0,4,7,12,16,19,24].forEach((u,g)=>m(523*2**(u/12),l+g*.07,.12,s.master));for(let u=0;u<10;u++)d(2e3+Math.random()*3e3,l+.5+u*.05,.15,{type:"sine",peak:.03})},sparkle(){if(!h())return;const l=o();for(let u=0;u<6;u++)d(1800+u*300,l+u*.04,.2,{type:"triangle",peak:.04})},twirl(){if(!h())return;const l=o();js.forEach((u,g)=>m(392*2**(u/12),l+g*.04,.05,s.master))},splash(l=1){if(!h())return;const u=o();f(u,.5*l,900,.6,.25*l,"lowpass"),f(u+.05,.3,2500,1,.08*l)},surface(){h()&&f(o(),.35,1200,.7,.12,"lowpass")},sit(){if(!h())return;const l=o();[0,7,12].forEach((u,g)=>m(392*2**(u/12),l+g*.1,.08,s.master))},hello(){if(!h())return;const l=o();d(150,l,.35,{type:"sawtooth",peak:.05,glide:1.25,attack:.05}),d(185,l+.35,.5,{type:"sawtooth",peak:.05,glide:.9,attack:.05})},emote(l){if(!h())return;const u=o();if(l==="wave")[0,4,7].forEach((g,x)=>m(659*2**(g/12),u+x*.08,.07,s.master));else if(l==="kiss")d(900,u+.55,.12,{type:"sine",peak:.12,glide:1.6}),f(u+.55,.05,3e3,2,.05),[12,16,19].forEach((g,x)=>m(523*2**(g/12),u+.75+x*.1,.05,s.master));else if(l==="sing")[0,4,7,9,7,4,7,12,9,7,4,0].forEach((x,p)=>{const c=440*2**(x/12);d(c,u+p*.28,.32,{type:"triangle",peak:.07,attack:.04}),d(c*2,u+p*.28,.25,{type:"sine",peak:.03,attack:.04})});else if(l==="dance"){const g=[0,7,5,7];for(let x=0;x<12;x++)m(262*2**((g[x%4]+(x%2?12:0))/12),u+x*.25,.06,s.master),x%2===0&&f(u+x*.25,.05,6e3,1,.03)}else l==="flip"&&(f(u,.5,800,.8,.12),js.slice(0,6).forEach((g,x)=>m(523*2**(g/12),u+.3+x*.05,.05,s.master)))},dolphin(){if(!h())return;const l=o();d(1500,l,.25,{type:"sine",peak:.08,glide:1.8}),d(2600,l+.25,.3,{type:"sine",peak:.07,glide:.6})}}}const kg={sit:"🪨",throne:"👑",ride:"🐬",leap:"⤴",stand:"🌊"};function Hg(){const i=document.querySelector("#actBtn"),e=document.querySelector("#actIcon"),t=document.querySelector("#actText"),n=document.querySelector("#twirlBtn"),s=document.querySelector("#pop"),r=document.querySelector("#hint"),a=document.querySelector("#speech"),o=document.querySelector("#intro");let h=0,d=0,m=0,f=null;return{action(l,u){const g=l?l.kind+l.label:null;g!==f&&(f=g,i?.classList.toggle("on",!!l),l&&(e.textContent=kg[l.kind]??"✦",t.textContent=l.label)),n?.classList.toggle("letgo",!!u)},pop(l,u=""){s&&(s.innerHTML=`<b>${l}</b>${u?`<small>${u}</small>`:""}`,s.classList.remove("pop"),s.offsetWidth,s.classList.add("pop"),d=3)},say(l,u=4){a&&(a.textContent=l,a.classList.add("on"),m=u)},hint(l,u=3.5){r&&(r.textContent=l,r.style.opacity="1",h=u)},showIntro(){o&&(o.style.display="",o.offsetWidth,o.classList.remove("gone"))},hideIntro(){o?.classList.add("gone"),setTimeout(()=>{o?.classList.contains("gone")&&(o.style.display="none")},520)},setSound(l){document.querySelector("#soundBtn")?.classList.toggle("off",!l)},setMusic(l){document.querySelector("#musicBtn")?.classList.toggle("off",!l)},update(l){h>0&&(h-=l)<=0&&r&&(r.style.opacity="0"),d>0&&(d-=l)<=0&&s?.classList.remove("pop"),m>0&&(m-=l)<=0&&a?.classList.remove("on")}}}const er=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,tr={color:3845840,density:.014},Gg={color:14216440};function Vg(){const i=new bm({antialias:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio||1,Bt.pixelRatio)),i.setSize(innerWidth,innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=ds,i.outputColorSpace=en,i.toneMapping=ao,i.toneMappingExposure=1.05,document.body.insertBefore(i.domElement,document.querySelector("#ui"));const e=new Sc,t=new on(58,innerWidth/innerHeight,.3,4500);e.add(t);const n=new Eh;n.connect(document);const s=Pm(),r={uTime:{value:0}},a={...Xc,...Vt.get("look")||{}};Ym(e,r);const o=cg(e,s,r,a),h=Qm(e),d=Ig(e);d.uniforms.topColor.value.setHex(5217e3),d.uniforms.horizonColor.value.setHex(14873087),d.uniforms.glowColor.value.setHex(16773312);const m=Ng(i),f=new _h(13169919,3836584,1.5);e.add(f);const l=new Sh(16774368,2.4),u=new G(.35,1,.25).normalize();d.uniforms.sunDir.value.copy(u),l.castShadow=!0,l.shadow.mapSize.set(Bt.shadowMap,Bt.shadowMap);const g=30;Object.assign(l.shadow.camera,{left:-g,right:g,top:g,bottom:-g,near:1,far:200}),l.shadow.bias=-5e-4,l.shadow.normalBias=.3,e.add(l,l.target);const x=new _o(tr.color,tr.density),p=new vo(Gg.color,120,1400);e.fog=x,h.uniforms.uFogBelow.value.setHex(tr.color),h.uniforms.uFogDensity.value=tr.density;const c=Dm(s.spawn);c.yaw=Math.PI;const v=ec(a);e.add(v);const T=ec(null,{king:!0}),S=s.palace.kingThrone;T.position.set(S.x,S.y+1.55*1.6+.2,S.z+.35),T.rotation.y=-S.yaw,e.add(T);const w={mode:"throne",pitch:0,roll:0,speed:0,stroke:0,wave:!1,time:0},A=km(s,{fish:Bt.fish}),C=Sg(e,A),_=Cg(e,Bt.particles),y=Fg(t,s),R=Eg(e),P=Bg(),I=Hg(),z=new Set((Vt.get("treasure")||[]).filter(K=>si.some(X=>X.id===K))),U=new Map;function b(K){if(U.has(K))return;const X=si.findIndex(Me=>Me.id===K),j=s.palace.display[X],se=no(K);se.position.set(j.x,j.y,j.z),se.scale.setScalar(1.3),e.add(se),U.set(K,se)}for(const K of z)b(K);let D=null,N="hair";function Z(){const K=document.querySelector("#swatches");if(K){if(K.innerHTML="",N==="style"){for(const[X,j]of Object.entries(rg)){const se=document.createElement("button");se.className="tab",se.textContent=j,se.setAttribute("aria-pressed",String((a.style||"long")===X)),se.addEventListener("click",()=>{a.style=X,Vt.set("look",{...a}),so(v,a),Z(),P.sparkle(),_.sparkle(c.x,c.y+.7,c.z,mn(a,"hair"),8,.6)}),K.appendChild(se)}for(const X of document.querySelectorAll("[data-tab]"))X.setAttribute("aria-pressed",String(X.dataset.tab===N));return}for(const[X,j]of Object.entries(io[N].colors)){const se=document.createElement("button");se.className="swatch",se.style.background=`#${j.toString(16).padStart(6,"0")}`,se.setAttribute("aria-label",`${io[N].label}: ${X}`),se.setAttribute("aria-pressed",String(a[N]===X)),se.addEventListener("click",()=>{a[N]=X,Vt.set("look",{...a}),so(v,a),o.setThroneColor(mn(a,"throne")),Z(),P.sparkle(),_.sparkle(c.x,c.y+.6,c.z,mn(a,N),8,.8)}),K.appendChild(se)}for(const X of document.querySelectorAll("[data-tab]"))X.setAttribute("aria-pressed",String(X.dataset.tab===N))}}for(const K of document.querySelectorAll("[data-tab]"))K.addEventListener("click",()=>{N=K.dataset.tab,Z(),P.start()});Z();const F=document.querySelector("#name");F&&(F.value=Vt.get("name")||"",F.addEventListener("input",()=>Vt.set("name",F.value.trim().slice(0,20))));const W=()=>{const K=(Vt.get("name")||"").trim();return K?`Princess ${K}`:"my little princess"};function J(){const K=document.querySelector("#treasureList");if(!K)return;K.innerHTML="";for(const j of si){const se=document.createElement("li");se.className=z.has(j.id)?"got":"",se.textContent=z.has(j.id)?j.name.replace(/^an? /,""):"?",K.appendChild(se)}const X=document.querySelector("#treasureCount");X&&(X.textContent=z.size?`${z.size} of ${si.length} found`:"Hidden all over the sea")}J();let ie=!1,le=!1;function Oe(){const K=P.toggle();Vt.set("sound",K),I.setSound(K)}function Ne(){const K=Vt.get("music")===!1;Vt.set("music",K),P.setMusic(K),I.setMusic(K)}function Ve(){Vl(c,s.spawn.x,s.spawn.y,s.spawn.z,0),y.reset(c),I.hint("Home to the palace!",2.5)}const te=zg({actions:{sound:Oe,home:Ve,zoom:K=>y.zoom(K),menu:()=>le?mt():it()},onFirstInput:()=>P.start()});document.querySelector("#soundBtn")?.addEventListener("click",Oe),document.querySelector("#musicBtn")?.addEventListener("click",Ne),Vt.get("sound")===!1&&P.setEnabled(!1),Vt.get("music")===!1&&P.setMusic(!1),I.setSound(P.enabled),I.setMusic(Vt.get("music")!==!1);let ne=null;const ve=document.querySelector("#emoteBar");document.querySelector("#emoteBtn")?.addEventListener("pointerdown",K=>{K.preventDefault(),P.start(),ve?.classList.toggle("open")});for(const K of document.querySelectorAll("[data-emote]"))K.addEventListener("pointerdown",X=>{X.preventDefault(),ne=K.dataset.emote});const Pe={Digit1:"wave",Digit2:"kiss",Digit3:"sing",Digit4:"dance",Digit5:"flip"};addEventListener("keydown",K=>{K.target?.tagName!=="INPUT"&&Pe[K.code]&&(ne=Pe[K.code])});const xe={wave:()=>`Hello, ${W()}!`,kiss:()=>"And a kiss for you too, my darling!",sing:()=>"What a beautiful song!",dance:()=>"What lovely dancing!",flip:()=>"What a splendid flip!"};let Fe=0,_t=0;const ze=document.querySelector("#start"),qe=document.querySelector("#home"),nt=document.querySelector("#resetTreasure");function Be(){if(le)return mt();ie||(ie=!0,document.body.classList.add("playing"),I.hideIntro(),P.start(),c.yaw=0,y.reset(c),I.hint(er?"Drag on the left to swim. The arrows swim up and down.":"W, A, S, D to swim. Space swims up, Shift swims down.",5),setTimeout(()=>I.say(`Off you go, ${W()}! The palace is right in front of you.`,4.5),1200))}function it(){!ie||le||(le=!0,ze&&(ze.textContent="Keep swimming"),qe&&(qe.hidden=!1),J(),I.showIntro())}function mt(){le=!1,I.hideIntro(),n.update()}ze?.addEventListener("click",Be),qe?.addEventListener("click",()=>{mt(),Ve()}),nt?.addEventListener("click",()=>{z.clear(),Vt.set("treasure",[]);for(const K of U.values())e.remove(K);U.clear(),J(),I.hint("The treasure is hidden again!",2.5)}),document.querySelector("#menuBtn")?.addEventListener("click",()=>le?mt():it()),addEventListener("keydown",K=>{K.target?.tagName!=="INPUT"&&((!ie||le)&&K.code==="Enter"?Be():K.code==="Escape"&&(le?mt():it()))});let Ct=!1;addEventListener("resize",()=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),i.setPixelRatio(Math.min(devicePixelRatio||1,Bt.pixelRatio)),i.setSize(innerWidth,innerHeight),m.setSize()},{passive:!0}),document.addEventListener("visibilitychange",()=>{Ct=document.hidden,P.setPaused(Ct),Ct||n.update()});const ct=new Set,ft=(K,X,j=3.5)=>{ct.has(K)||(ct.add(K),I.hint(X,j))};let H=!1,St=0,Ze=0,L=0,M=0,V=60,$=0;const ee={turn:0,forward:0,rise:0,action:!1,twirl:!1,look:0,looking:!1};window.__shellsong={mermaid:c,ocean:s,creatures:A,camera:t,renderer:i,found:z,get fps(){return Math.round(V)},go:Be,viewFrom:null,teleport(K,X,j,se=0){Vl(c,K,X,j,se),y.reset(c)}};function ce(){if(requestAnimationFrame(ce),Ct)return;n.update();const K=Math.min(n.getDelta(),.05),X=n.getElapsed();K>0&&(V=V*.95+1/K*.05),r.uTime.value=X;const j=ie&&!le,se=j?te.sample():ee,Me=j?Um(c,s,A):null;se.action&&Me&&Nm(c,Me),se.twirl&&(c.mode==="ride"||c.mode==="leap")&&(Fm(c),se.twirl=!1),j&&ne&&Im(c,ne),ne=null,j&&zm(c,se,s,K),I.action(j?Me:null,c.mode==="ride"||c.mode==="leap");for(const O of c.events)O.type==="surface"?(_.splash(c.x,0,c.z,10,.5),P.surface(),ft("surface","The top of the sea! Look for ships and seagulls, and rocks to sit on.",4)):O.type==="twirl"?(P.twirl(),_.sparkle(c.x,c.y,c.z,mn(a,"tail"),16,1),_.bubbles(c.x,c.y,c.z,10)):O.type==="sit"||O.type==="throne"?(P.sit(),O.type==="throne"&&I.say(`You look wonderful on your throne, ${W()}!`,4)):O.type==="ride"?(P.dolphin(),I.hint(er?"Push up to go fast! Press Jump to leap out of the water.":"W to go fast! Press E to jump out of the water. Q to let go.",4)):O.type==="leap"?P.dolphin():O.type==="emote"?(P.emote(O.kind),R.cheer(),O.kind==="flip"&&_.bubbles(c.x,c.y,c.z,14),O.kind==="dance"&&_.sparkle(c.x,c.y+.5,c.z,mn(a,"tail"),14,1),O.kind==="kiss"&&(_t=5),Math.hypot(c.x-S.x,c.y-S.y,c.z-S.z)<18&&(setTimeout(()=>{P.hello(),I.say(xe[O.kind](),3)},700),St=3),ft("emote","Try them all! Sing to the fish and dolphins.",3)):O.type==="splash"&&(_.splash(O.x,0,O.z,30,O.size),P.splash(O.size),y.kick(.15));if(c.events.length=0,j&&!D){const O=Bm(c,s,z);if(O){z.add(O.id),Vt.set("treasure",[...z]),P.treasure(),R.cheer(!0),_.confetti(O.x,O.y+1,O.z,90),_.coins(O.x,O.y+1,O.z,30),_.stars(O.x,O.y+1.2,O.z,10),I.pop("Treasure!",`You found ${O.name}!`);const oe=no(O.id);oe.position.set(O.x,O.y+.9,O.z),oe.scale.setScalar(1.5),e.add(oe),D={mesh:oe,t:0,id:O.id},z.size===si.length?setTimeout(()=>I.pop("All twelve!","You found every treasure in the sea!"),3200):z.size===1&&setTimeout(()=>I.hint("Your treasure goes on show by your throne in the palace.",4),3200)}}if(D){D.t+=K;const O=D;O.mesh.rotation.y+=K*3,O.t<1.6?O.mesh.position.y+=K*1.2:O.mesh.scale.multiplyScalar(Math.max(0,1-K*3)),Math.random()<K*20&&_.sparkle(O.mesh.position.x,O.mesh.position.y,O.mesh.position.z,16773280,1,.4),O.t>2.6&&(e.remove(O.mesh),b(O.id),D=null)}if(Ze-=K,Ze<=0){Ze=.12;for(const O of s.treasures)z.has(O.id)||Math.hypot(O.x-c.x,O.z-c.z)<70&&Math.random()<.5&&_.sparkle(O.x,O.y+1.4,O.z,16773280,1,.8,.5)}L-=K,c.y<-1&&c.speed>3&&L<=0&&(L=.15,_.bubbles(c.x-Math.sin(c.yaw)*1.2,c.y,c.z+Math.cos(c.yaw)*1.2,1,.12)),Me?.kind==="sit"&&ft("sit",er?"Press Sit to sit on the rock.":"Press E to sit on the rock."),Me?.kind==="ride"&&ft("ride",er?"A dolphin! Press Ride to ride it.":"A dolphin! Press E to ride it."),Me?.kind==="throne"&&ft("throne","Your very own shell throne!");const he=s.palace,ue=Math.hypot(c.x-S.x,c.y-S.y,c.z-S.z),we=Math.hypot(c.x-he.x,c.z-he.z)<he.hallR&&c.y<he.floor+he.hallR;we&&!H&&j&&(P.hello(),I.say(z.size?`Welcome home, ${W()}! What lovely treasures you've found!`:`Welcome home, ${W()}! There's treasure hidden all over the sea.`,4.5),St=4),H=we,St-=K,w.wave=ue<12&&St>0,w.time=X,tc(T,w,K,X);const Ce=c.emote?.kind==="sing";if(Ce&&(Fe-=K)<=0&&(Fe=.22,_.note(c.x,c.y+.9,c.z)),_t>0&&c.emote?.kind==="kiss"&&c.emote.t>.6){_t--;const O=t.position.x-c.x,oe=t.position.z-c.z,pe=Math.hypot(O,oe)||1;_.emit({x:c.x,y:c.y+.6,z:c.z,vx:O/pe*1.5+(Math.random()-.5),vy:.6+Math.random()*.5,vz:oe/pe*1.5+(Math.random()-.5),life:1.8,size:.4,size1:.6,color:16738970,bright:1.3,shape:5,fade:.6,drag:.8})}Hm(A,K,{mermaid:c,riding:c.mode==="ride"||c.mode==="leap"?c.ride:null,lure:Ce?c:null}),C.update(X);for(const O of A.events){const oe=Math.hypot(O.x-c.x,O.z-c.z);oe>80||(O.type==="splash"?(_.splash(O.x,0,O.z,16,O.size),oe<40&&P.splash(O.size*.5)):O.type==="spout"&&(_.spout(O.x,.5,O.z),P.splash(.6)))}let Le=0;for(const O of A.whales)Le=Math.max(Le,1-Math.hypot(O.x-c.x,O.y-c.y,O.z-c.z)/60);let k=0;for(const O of A.dolphins)k=Math.max(k,1-Math.hypot(O.x-c.x,O.y-c.y,O.z-c.z)/30);if(v.position.set(c.x,c.y,c.z),v.rotation.y=-c.yaw,tc(v,{...c,wave:c.mode==="sit"&&Math.sin(X*.4)>.6},K,X),o.update(X,K,z,c),R.update(c,K,X),ie){y.lookRound(se.look,se.looking,K),y.update(c,K);const O=window.__shellsong.viewFrom;O&&(t.position.set(c.x+O.x,c.y+O.y,c.z+O.z),t.lookAt(c.x,c.y+.2,c.z))}else{$+=K;const O=c.yaw+Math.sin($*.3)*.35;t.position.set(c.x+Math.sin(O)*3.6,c.y+.6,c.z-Math.cos(O)*3.6),t.lookAt(c.x,c.y+.2,c.z);const oe=innerWidth>innerHeight;t.setViewOffset(innerWidth,innerHeight,oe?innerWidth*.22:0,oe?0:innerHeight*.22,innerWidth,innerHeight)}ie&&t.view?.enabled&&t.clearViewOffset();const fe=t.position.y<0;e.fog=fe?x:p,d.mesh.visible=!fe,e.background=fe?x.color:null,h.surface.material.depthWrite=!fe,m.uniforms.inkFade.value.set(fe?18:300,fe?70:1500),f.intensity=fe?1.5:1.25,h.update(X,t,fe,u),_.setScale(i.domElement.height,t.fov),_.update(K,X),l.target.position.set(c.x,c.y,c.z),l.position.copy(l.target.position).addScaledVector(u,80),P.update(K,{underwater:fe,speed:c.speed,whaleNear:Math.max(0,Le),dolphinNear:Math.max(0,k)}),I.update(K),d.follow(t.position),d.uniforms.time.value=X,m.render(e,t),!Bt.degraded&&K>.042?++M>240&&Am(i,l)&&m.setSize():M>0&&M--}ce()}try{Vg()}catch(i){console.error(i);const e=document.querySelector("#error");e&&(e.style.display="grid")}
