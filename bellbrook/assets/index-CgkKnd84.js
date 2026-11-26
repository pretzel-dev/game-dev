(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="186",Nh=0,fl=1,zh=2,Fs=1,Fh=2,Ds=3,Pi=0,tn=1,kn=2,jn=0,Os=1,ka=2,ul=3,dl=4,Oh=5,rs=100,Bh=101,kh=102,Hh=103,Gh=104,Vh=200,Wh=201,Xh=202,qh=203,Bc=204,kc=205,Yh=206,Zh=207,Kh=208,$h=209,Jh=210,Qh=211,jh=212,ef=213,tf=214,Ha=0,Ga=1,Va=2,Bs=3,Wa=4,Xa=5,qa=6,Ya=7,Wr=0,nf=1,sf=2,Wn=0,Hc=1,Gc=2,Vc=3,Wc=4,Xc=5,qc=6,zo=7,Yc=300,Li=301,fs=302,Qr=303,jr=304,Xr=306,Za=1e3,Qn=1001,Ka=1002,Ht=1003,rf=1004,Zs=1005,Kt=1006,ea=1007,Ri=1008,fn=1009,Zc=1010,Kc=1011,ks=1012,Fo=1013,In=1014,Pn=1015,Dn=1016,Oo=1017,Bo=1018,Hs=1020,$c=35902,Jc=35899,Qc=1021,jc=1022,Ln=1023,ti=1026,Ci=1027,ko=1028,Ho=1029,Ii=1030,Go=1031,Vo=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,$a=35840,Ja=35841,Qa=35842,ja=35843,eo=36196,to=37492,no=37496,io=37488,so=37489,Ir=37490,ro=37491,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,fo=37813,uo=37814,po=37815,mo=37816,go=37817,xo=37818,_o=37819,vo=37820,Mo=37821,So=36492,yo=36494,bo=36495,Eo=36283,wo=36284,Dr=36285,To=36286,af=3200,Ur=0,of=1,gi="",sn="srgb",Nr="srgb-linear",zr="linear",lt="srgb",ta=7680,lf=519,cf=512,hf=513,ff=514,Wo=515,uf=516,df=517,Xo=518,pf=519,eh=35044,pl="300 es",Gn=2e3,Gs=2001;function mf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gf(){const n=Fr("canvas");return n.style.display="block",n}const ml={};function Or(...n){const e="THREE."+n.shift();console.log(e,...n)}function th(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=th(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function nt(...n){n=th(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ls(...n){const e=n.join(" ");e in ml||(ml[e]=!0,Ge(...n))}function xf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const _f={[Ha]:Ga,[Va]:qa,[Wa]:Ya,[Bs]:Xa,[Ga]:Ha,[qa]:Va,[Ya]:Wa,[Xa]:Bs};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Br=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function vf(n,e){return(n%e+e)%e}function ia(n,e,t){return(1-t)*n+t*e}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tl=class tl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tl.prototype.isVector2=!0;let Oe=tl;class Ni{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,l){let c=i[s+0],h=i[s+1],d=i[s+2],m=i[s+3],f=r[o+0],g=r[o+1],v=r[o+2],S=r[o+3];if(m!==S||c!==f||h!==g||d!==v){let p=c*f+h*g+d*v+m*S;p<0&&(f=-f,g=-g,v=-v,S=-S,p=-p);let u=1-l;if(p<.9995){const M=Math.acos(p),I=Math.sin(M);u=Math.sin(u*M)/I,l=Math.sin(l*M)/I,c=c*u+f*l,h=h*u+g*l,d=d*u+v*l,m=m*u+S*l}else{c=c*u+f*l,h=h*u+g*l,d=d*u+v*l,m=m*u+S*l;const M=1/Math.sqrt(c*c+h*h+d*d+m*m);c*=M,h*=M,d*=M,m*=M}}e[t]=c,e[t+1]=h,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,r,o){const l=i[s],c=i[s+1],h=i[s+2],d=i[s+3],m=r[o],f=r[o+1],g=r[o+2],v=r[o+3];return e[t]=l*v+d*m+c*g-h*f,e[t+1]=c*v+d*f+h*m-l*g,e[t+2]=h*v+d*g+l*f-c*m,e[t+3]=d*v-l*m-c*f-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,h=l(i/2),d=l(s/2),m=l(r/2),f=c(i/2),g=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=f*d*m+h*g*v,this._y=h*g*m-f*d*v,this._z=h*d*v+f*g*m,this._w=h*d*m-f*g*v;break;case"YXZ":this._x=f*d*m+h*g*v,this._y=h*g*m-f*d*v,this._z=h*d*v-f*g*m,this._w=h*d*m+f*g*v;break;case"ZXY":this._x=f*d*m-h*g*v,this._y=h*g*m+f*d*v,this._z=h*d*v+f*g*m,this._w=h*d*m-f*g*v;break;case"ZYX":this._x=f*d*m-h*g*v,this._y=h*g*m+f*d*v,this._z=h*d*v-f*g*m,this._w=h*d*m+f*g*v;break;case"YZX":this._x=f*d*m+h*g*v,this._y=h*g*m+f*d*v,this._z=h*d*v-f*g*m,this._w=h*d*m-f*g*v;break;case"XZY":this._x=f*d*m-h*g*v,this._y=h*g*m-f*d*v,this._z=h*d*v+f*g*m,this._w=h*d*m+f*g*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],h=t[2],d=t[6],m=t[10],f=i+l+m;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-h)*g,this._z=(o-s)*g}else if(i>l&&i>m){const g=2*Math.sqrt(1+i-l-m);this._w=(d-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+h)/g}else if(l>m){const g=2*Math.sqrt(1+l-i-m);this._w=(r-h)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+m-i-l);this._w=(o-s)/g,this._x=(r+h)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,h=t._z,d=t._w;return this._x=i*d+o*l+s*h-r*c,this._y=s*d+o*c+r*l-i*h,this._z=r*d+o*h+i*c-s*l,this._w=o*d-i*l-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){const h=Math.acos(l),d=Math.sin(h);c=Math.sin(c*h)/d,t=Math.sin(t*h)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nl=class nl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,h=2*(o*s-l*i),d=2*(l*t-r*s),m=2*(r*i-o*t);return this.x=t+c*h+o*m-l*d,this.y=i+c*d+l*h-r*m,this.z=s+c*m+r*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-i*c,this.z=i*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nl.prototype.isVector3=!0;let X=nl;const sa=new X,gl=new Ni,il=class il{constructor(e,t,i,s,r,o,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,l,c,h)}set(e,t,i,s,r,o,l,c,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],l=i[3],c=i[6],h=i[1],d=i[4],m=i[7],f=i[2],g=i[5],v=i[8],S=s[0],p=s[3],u=s[6],M=s[1],I=s[4],E=s[7],C=s[2],R=s[5],P=s[8];return r[0]=o*S+l*M+c*C,r[3]=o*p+l*I+c*R,r[6]=o*u+l*E+c*P,r[1]=h*S+d*M+m*C,r[4]=h*p+d*I+m*R,r[7]=h*u+d*E+m*P,r[2]=f*S+g*M+v*C,r[5]=f*p+g*I+v*R,r[8]=f*u+g*E+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8];return t*o*d-t*l*h-i*r*d+i*l*c+s*r*h-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],m=d*o-l*h,f=l*c-d*r,g=h*r-o*c,v=t*m+i*f+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=m*S,e[1]=(s*h-d*i)*S,e[2]=(l*i-s*o)*S,e[3]=f*S,e[4]=(d*t-s*c)*S,e[5]=(s*r-l*t)*S,e[6]=g*S,e[7]=(i*c-h*t)*S,e[8]=(o*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,l){const c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*o+h*l)+o+e,-s*h,s*c,-s*(-h*o+c*l)+l+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ra.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};il.prototype.isMatrix3=!0;let Ve=il;const ra=new Ve,xl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){const n={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nr]:{primaries:e,whitePoint:i,transfer:zr,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const je=Mf();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class Sf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ki===void 0&&(ki=Fr("canvas")),ki.width=e.width,ki.height=e.height;const s=ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yf=0;class qo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let bf=0;const oa=new X;class $t extends Ui{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Qn,s=Qn,r=Kt,o=Ri,l=Ln,c=fn,h=$t.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=_i(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Yc;$t.DEFAULT_ANISOTROPY=1;const sl=class sl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,h=c[0],d=c[4],m=c[8],f=c[1],g=c[5],v=c[9],S=c[2],p=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(m-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(m+S)<.1&&Math.abs(v+p)<.1&&Math.abs(h+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,E=(g+1)/2,C=(u+1)/2,R=(d+f)/4,P=(m+S)/4,x=(v+p)/4;return I>E&&I>C?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=R/i,r=P/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=x/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-v)*(p-v)+(m-S)*(m-S)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(m-S)/M,this.z=(f-d)/M,this.w=Math.acos((h+g+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sl.prototype.isVector4=!0;let yt=sl;class Ef extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new $t(s),o=i.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Ef{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nh extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wf extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vr=class Vr{constructor(e,t,i,s,r,o,l,c,h,d,m,f,g,v,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,l,c,h,d,m,f,g,v,S,p)}set(e,t,i,s,r,o,l,c,h,d,m,f,g,v,S,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=l,u[13]=c,u[2]=h,u[6]=d,u[10]=m,u[14]=f,u[3]=g,u[7]=v,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Hi.setFromMatrixColumn(e,0).length(),r=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const f=o*d,g=o*m,v=l*d,S=l*m;t[0]=c*d,t[4]=-c*m,t[8]=h,t[1]=g+v*h,t[5]=f-S*h,t[9]=-l*c,t[2]=S-f*h,t[6]=v+g*h,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,g=c*m,v=h*d,S=h*m;t[0]=f+S*l,t[4]=v*l-g,t[8]=o*h,t[1]=o*m,t[5]=o*d,t[9]=-l,t[2]=g*l-v,t[6]=S+f*l,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,g=c*m,v=h*d,S=h*m;t[0]=f-S*l,t[4]=-o*m,t[8]=v+g*l,t[1]=g+v*l,t[5]=o*d,t[9]=S-f*l,t[2]=-o*h,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,g=o*m,v=l*d,S=l*m;t[0]=c*d,t[4]=v*h-g,t[8]=f*h+S,t[1]=c*m,t[5]=S*h+f,t[9]=g*h-v,t[2]=-h,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,g=o*h,v=l*c,S=l*h;t[0]=c*d,t[4]=S-f*m,t[8]=v*m+g,t[1]=m,t[5]=o*d,t[9]=-l*d,t[2]=-h*d,t[6]=g*m+v,t[10]=f-S*m}else if(e.order==="XZY"){const f=o*c,g=o*h,v=l*c,S=l*h;t[0]=c*d,t[4]=-m,t[8]=h*d,t[1]=f*m+S,t[5]=o*d,t[9]=g*m-v,t[2]=v*m-g,t[6]=l*d,t[10]=S*m+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Af)}lookAt(e,t,i){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ri.crossVectors(i,ln),ri.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ri.crossVectors(i,ln)),ri.normalize(),Ks.crossVectors(ln,ri),s[0]=ri.x,s[4]=Ks.x,s[8]=ln.x,s[1]=ri.y,s[5]=Ks.y,s[9]=ln.y,s[2]=ri.z,s[6]=Ks.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],l=i[4],c=i[8],h=i[12],d=i[1],m=i[5],f=i[9],g=i[13],v=i[2],S=i[6],p=i[10],u=i[14],M=i[3],I=i[7],E=i[11],C=i[15],R=s[0],P=s[4],x=s[8],T=s[12],D=s[1],a=s[5],_=s[9],U=s[13],A=s[2],y=s[6],w=s[10],N=s[14],F=s[3],k=s[7],O=s[11],B=s[15];return r[0]=o*R+l*D+c*A+h*F,r[4]=o*P+l*a+c*y+h*k,r[8]=o*x+l*_+c*w+h*O,r[12]=o*T+l*U+c*N+h*B,r[1]=d*R+m*D+f*A+g*F,r[5]=d*P+m*a+f*y+g*k,r[9]=d*x+m*_+f*w+g*O,r[13]=d*T+m*U+f*N+g*B,r[2]=v*R+S*D+p*A+u*F,r[6]=v*P+S*a+p*y+u*k,r[10]=v*x+S*_+p*w+u*O,r[14]=v*T+S*U+p*N+u*B,r[3]=M*R+I*D+E*A+C*F,r[7]=M*P+I*a+E*y+C*k,r[11]=M*x+I*_+E*w+C*O,r[15]=M*T+I*U+E*N+C*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],h=e[13],d=e[2],m=e[6],f=e[10],g=e[14],v=e[3],S=e[7],p=e[11],u=e[15],M=c*g-h*f,I=l*g-h*m,E=l*f-c*m,C=o*g-h*d,R=o*f-c*d,P=o*m-l*d;return t*(S*M-p*I+u*E)-i*(v*M-p*C+u*R)+s*(v*I-S*C+u*P)-r*(v*E-S*R+p*P)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10];return t*(o*d-l*h)-i*(r*d-l*c)+s*(r*h-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],m=e[9],f=e[10],g=e[11],v=e[12],S=e[13],p=e[14],u=e[15],M=t*l-i*o,I=t*c-s*o,E=t*h-r*o,C=i*c-s*l,R=i*h-r*l,P=s*h-r*c,x=d*S-m*v,T=d*p-f*v,D=d*u-g*v,a=m*p-f*S,_=m*u-g*S,U=f*u-g*p,A=M*U-I*_+E*a+C*D-R*T+P*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/A;return e[0]=(l*U-c*_+h*a)*y,e[1]=(s*_-i*U-r*a)*y,e[2]=(S*P-p*R+u*C)*y,e[3]=(f*R-m*P-g*C)*y,e[4]=(c*D-o*U-h*T)*y,e[5]=(t*U-s*D+r*T)*y,e[6]=(p*E-v*P-u*I)*y,e[7]=(d*P-f*E+g*I)*y,e[8]=(o*_-l*D+h*x)*y,e[9]=(i*D-t*_-r*x)*y,e[10]=(v*R-S*E+u*M)*y,e[11]=(m*E-d*R-g*M)*y,e[12]=(l*T-o*a-c*x)*y,e[13]=(t*a-i*T+s*x)*y,e[14]=(S*I-v*C-p*M)*y,e[15]=(d*C-m*I+f*M)*y,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,l=e.y,c=e.z,h=r*o,d=r*l;return this.set(h*o+i,h*l-s*c,h*c+s*l,0,h*l+s*c,d*l+i,d*c-s*o,0,h*c-s*l,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,h=r+r,d=o+o,m=l+l,f=r*h,g=r*d,v=r*m,S=o*d,p=o*m,u=l*m,M=c*h,I=c*d,E=c*m,C=i.x,R=i.y,P=i.z;return s[0]=(1-(S+u))*C,s[1]=(g+E)*C,s[2]=(v-I)*C,s[3]=0,s[4]=(g-E)*R,s[5]=(1-(f+u))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(v+I)*P,s[9]=(p-M)*P,s[10]=(1-(f+S))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Hi.set(s[0],s[1],s[2]).length();const l=Hi.set(s[4],s[5],s[6]).length(),c=Hi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bn.copy(this);const h=1/o,d=1/l,m=1/c;return bn.elements[0]*=h,bn.elements[1]*=h,bn.elements[2]*=h,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=m,bn.elements[9]*=m,bn.elements[10]*=m,t.setFromRotationMatrix(bn),i.x=o,i.y=l,i.z=c,this}makePerspective(e,t,i,s,r,o,l=Gn,c=!1){const h=this.elements,d=2*r/(t-e),m=2*r/(i-s),f=(t+e)/(t-e),g=(i+s)/(i-s);let v,S;if(c)v=r/(o-r),S=o*r/(o-r);else if(l===Gn)v=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(l===Gs)v=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=m,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,o,l=Gn,c=!1){const h=this.elements,d=2/(t-e),m=2/(i-s),f=-(t+e)/(t-e),g=-(i+s)/(i-s);let v,S;if(c)v=1/(o-r),S=o/(o-r);else if(l===Gn)v=-2/(o-r),S=-(o+r)/(o-r);else if(l===Gs)v=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=m,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vr.prototype.isMatrix4=!0;let st=Vr;const Hi=new X,bn=new st,Tf=new X(0,0,0),Af=new X(1,1,1),ri=new X,Ks=new X,ln=new X,vl=new st,Ml=new Ni;class Xn{constructor(e=0,t=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],h=s[5],d=s[9],m=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rf=0;const Sl=new X,Gi=new Ni,qn=new st,$s=new X,vs=new X,Cf=new X,Pf=new Ni,yl=new X(1,0,0),bl=new X(0,1,0),El=new X(0,0,1),wl={type:"added"},Lf={type:"removed"},Vi={type:"childadded",child:null},la={type:"childremoved",child:null};class dt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new X,t=new Xn,i=new Ni,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ve}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(El,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(El,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(vs,$s,this.up):qn.lookAt($s,vs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(qn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const m=c[h];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),h=o(e.textures),d=o(e.images),m=o(e.shapes),f=o(e.skeletons),g=o(e.animations),v=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(l){const c=[];for(const h in l){const d=l[h];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}dt.DEFAULT_UP=new X(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const If={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,i),u=this._getHandJoint(h,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],f=d.position.distanceTo(m.position),g=.02,v=.005;h.inputState.pinching&&f>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(If)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ha(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=vf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ha(o,r,e+1/3),this.g=ha(o,r,e),this.b=ha(o,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=ih[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return je.workingToColorSpace(Wt.copy(this),e),Math.round(et(Wt.r*255,0,255))*65536+Math.round(et(Wt.g*255,0,255))*256+Math.round(et(Wt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),l=Math.min(i,s,r);let c,h;const d=(l+o)/2;if(l===o)c=0,h=0;else{const m=o-l;switch(h=d<=.5?m/(o+l):m/(2-o-l),o){case i:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-i)/m+2;break;case r:c=(i-s)/m+4;break}c/=6}return e.h=c,e.s=h,e.l=d,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=sn){je.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Js);const i=ia(ai.h,Js.h,t),s=ia(ai.s,Js.s,t),r=ia(ai.l,Js.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ne;Ne.NAMES=ih;class Zo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new Zo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sh extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new X,Yn=new X,fa=new X,Zn=new X,Wi=new X,Xi=new X,Tl=new X,ua=new X,da=new X,pa=new X,ma=new yt,ga=new yt,xa=new yt;class _n{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),En.subVectors(e,t),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){En.subVectors(s,t),Yn.subVectors(i,t),fa.subVectors(e,t);const o=En.dot(En),l=En.dot(Yn),c=En.dot(fa),h=Yn.dot(Yn),d=Yn.dot(fa),m=o*h-l*l;if(m===0)return r.set(0,0,0),null;const f=1/m,g=(h*c-l*d)*f,v=(o*d-l*c)*f;return r.set(1-g-v,v,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,s,r,o,l,c){return this.getBarycoord(e,t,i,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(l,Zn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ma.setScalar(0),ga.setScalar(0),xa.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,i),xa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(xa,r.z),o}static isFrontFacing(e,t,i,s){return En.subVectors(i,t),Yn.subVectors(e,t),En.cross(Yn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,l;Wi.subVectors(s,i),Xi.subVectors(r,i),ua.subVectors(e,i);const c=Wi.dot(ua),h=Xi.dot(ua);if(c<=0&&h<=0)return t.copy(i);da.subVectors(e,s);const d=Wi.dot(da),m=Xi.dot(da);if(d>=0&&m<=d)return t.copy(s);const f=c*m-d*h;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(Wi,o);pa.subVectors(e,r);const g=Wi.dot(pa),v=Xi.dot(pa);if(v>=0&&g<=v)return t.copy(r);const S=g*h-c*v;if(S<=0&&h>=0&&v<=0)return l=h/(h-v),t.copy(i).addScaledVector(Xi,l);const p=d*v-g*m;if(p<=0&&m-d>=0&&g-v>=0)return Tl.subVectors(r,s),l=(m-d)/(m-d+(g-v)),t.copy(s).addScaledVector(Tl,l);const u=1/(p+S+f);return o=S*u,l=f*u,t.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zi{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),js.subVectors(this.max,Ms),qi.subVectors(e.a,Ms),Yi.subVectors(e.b,Ms),Zi.subVectors(e.c,Ms),oi.subVectors(Yi,qi),li.subVectors(Zi,Yi),Si.subVectors(qi,Zi);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Si.z,Si.y,oi.z,0,-oi.x,li.z,0,-li.x,Si.z,0,-Si.x,-oi.y,oi.x,0,-li.y,li.x,0,-Si.y,Si.x,0];return!_a(t,qi,Yi,Zi,js)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,qi,Yi,Zi,js))?!1:(er.crossVectors(oi,li),t=[er.x,er.y,er.z],_a(t,qi,Yi,Zi,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new X,new X,new X,new X,new X,new X,new X,new X],wn=new X,Qs=new zi,qi=new X,Yi=new X,Zi=new X,oi=new X,li=new X,Si=new X,Ms=new X,js=new X,er=new X,yi=new X;function _a(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){yi.fromArray(n,r);const l=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=e.dot(yi),h=t.dot(yi),d=i.dot(yi);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}const Rt=new X,tr=new Oe;let Df=0;class wt extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class rh extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ah extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Uf=new zi,Ss=new X,va=new X;class gs{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ss,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(va)),this.expandByPoint(Ss.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Nf=0;const mn=new st,Ma=new dt,Ki=new X,cn=new zi,ys=new zi,Ut=new X;class Tt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mf(e)?ah:rh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ys.setFromBufferAttribute(l),this.morphTargetsRelative?(Ut.addVectors(cn.min,ys.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,ys.max),cn.expandByPoint(Ut)):(cn.expandByPoint(ys.min),cn.expandByPoint(ys.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Ut.fromBufferAttribute(l,h),c&&(Ki.fromBufferAttribute(e,h),Ut.add(Ki)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new X,c[x]=new X;const h=new X,d=new X,m=new X,f=new Oe,g=new Oe,v=new Oe,S=new X,p=new X;function u(x,T,D){h.fromBufferAttribute(i,x),d.fromBufferAttribute(i,T),m.fromBufferAttribute(i,D),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,T),v.fromBufferAttribute(r,D),d.sub(h),m.sub(h),g.sub(f),v.sub(f);const a=1/(g.x*v.y-v.x*g.y);isFinite(a)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(m,-g.y).multiplyScalar(a),p.copy(m).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(a),l[x].add(S),l[T].add(S),l[D].add(S),c[x].add(p),c[T].add(p),c[D].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){const D=M[x],a=D.start,_=D.count;for(let U=a,A=a+_;U<A;U+=3)u(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const I=new X,E=new X,C=new X,R=new X;function P(x){C.fromBufferAttribute(s,x),R.copy(C);const T=l[x];I.copy(T),I.sub(C.multiplyScalar(C.dot(T))).normalize(),E.crossVectors(R,T);const a=E.dot(c[x])<0?-1:1;o.setXYZW(x,I.x,I.y,I.z,a)}for(let x=0,T=M.length;x<T;++x){const D=M[x],a=D.start,_=D.count;for(let U=a,A=a+_;U<A;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,l=new X,c=new X,h=new X,d=new X,m=new X;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,p),l.add(d),c.add(d),h.add(d),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(l,c){const h=l.array,d=l.itemSize,m=l.normalized,f=new h.constructor(c.length*d);let g=0,v=0;for(let S=0,p=c.length;S<p;S++){l.isInterleavedBufferAttribute?g=c[S]*l.data.stride+l.offset:g=c[S]*d;for(let u=0;u<d;u++)f[v++]=h[g++]}return new wt(f,d,m)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,s=this.attributes;for(const l in s){const c=s[l],h=e(c,i);t.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const c=[],h=r[l];for(let d=0,m=h.length;d<m;d++){const f=h[d],g=e(f,i);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const h=i[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let m=0,f=h.length;m<f;m++){const g=h[m];d.push(g.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],m=r[h];for(let f=0,g=m.length;f<g;f++)d.push(m[f].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const m=o[h];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const jt=new X;class kr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sa=new X,Ff=new X,Of=new Ve;class mi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Sa.subVectors(i,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Sa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Of.getNormalMatrix(e),s=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Bf=0;class Mi extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Os,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=kc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const l in r){const c=r[l];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oh extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $i;const bs=new X,Ji=new X,Qi=new X,ji=new Oe,Es=new Oe,lh=new st,nr=new X,ws=new X,ir=new X,Al=new Oe,ya=new Oe,Rl=new Oe;class kf extends dt{constructor(e=new oh){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zf(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new kr(i,3,0,!1)),$i.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=$i,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),lh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Qi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;sr(nr.set(-.5,-.5,0),Qi,o,Ji,s,r),sr(ws.set(.5,-.5,0),Qi,o,Ji,s,r),sr(ir.set(.5,.5,0),Qi,o,Ji,s,r),Al.set(0,0),ya.set(1,0),Rl.set(1,1);let l=e.ray.intersectTriangle(nr,ws,ir,!1,bs);if(l===null&&(sr(ws.set(-.5,.5,0),Qi,o,Ji,s,r),ya.set(0,1),l=e.ray.intersectTriangle(nr,ir,ws,!1,bs),l===null))return;const c=e.ray.origin.distanceTo(bs);c<e.near||c>e.far||t.push({distance:c,point:bs.clone(),uv:_n.getInterpolation(bs,nr,ws,ir,Al,ya,Rl,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sr(n,e,t,i,s,r){ji.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Es.x=r*ji.x-s*ji.y,Es.y=s*ji.x+r*ji.y):Es.copy(ji),n.copy(e),n.x+=Es.x,n.y+=Es.y,n.applyMatrix4(lh)}const $n=new X,ba=new X,rr=new X,ar=new X;class Ko{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ba.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(rr),l=ar.dot(this.direction),c=-ar.dot(rr),h=ar.lengthSq(),d=Math.abs(1-o*o);let m,f,g,v;if(d>0)if(m=o*c-l,f=o*l-c,v=r*d,m>=0)if(f>=-v)if(f<=v){const S=1/d;m*=S,f*=S,g=m*(m+o*f+2*l)+f*(o*m+f+2*c)+h}else f=r,m=Math.max(0,-(o*f+l)),g=-m*m+f*(f+2*c)+h;else f=-r,m=Math.max(0,-(o*f+l)),g=-m*m+f*(f+2*c)+h;else f<=-v?(m=Math.max(0,-(-o*r+l)),f=m>0?-r:Math.min(Math.max(-r,-c),r),g=-m*m+f*(f+2*c)+h):f<=v?(m=0,f=Math.min(Math.max(-r,-c),r),g=f*(f+2*c)+h):(m=Math.max(0,-(o*r+l)),f=m>0?r:Math.min(Math.max(-r,-c),r),g=-m*m+f*(f+2*c)+h);else f=o>0?-r:r,m=Math.max(0,-(o*f+l)),g=-m*m+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(ba).addScaledVector(rr,f),g}intersectSphere(e,t){if(e.radius<0)return null;$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,l,c;const h=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),m>=0?(l=(e.min.z-f.z)*m,c=(e.max.z-f.z)*m):(l=(e.max.z-f.z)*m,c=(e.min.z-f.z)*m),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,l=this.direction,c=l.x,h=l.y,d=l.z,m=e.x-o.x,f=e.y-o.y,g=e.z-o.z,v=t.x-o.x,S=t.y-o.y,p=t.z-o.z,u=i.x-o.x,M=i.y-o.y,I=i.z-o.z,E=Math.abs(c),C=Math.abs(h),R=Math.abs(d);let P,x,T,D,a,_,U,A,y,w,N,F;if(E>=C&&E>=R?(T=c,_=m,y=v,F=u,c>=0?(P=h,x=d,D=f,a=g,U=S,A=p,w=M,N=I):(P=d,x=h,D=g,a=f,U=p,A=S,w=I,N=M)):C>=R?(T=h,_=f,y=S,F=M,h>=0?(P=d,x=c,D=g,a=m,U=p,A=v,w=I,N=u):(P=c,x=d,D=m,a=g,U=v,A=p,w=u,N=I)):(T=d,_=g,y=p,F=I,d>=0?(P=c,x=h,D=m,a=f,U=v,A=S,w=u,N=M):(P=h,x=c,D=f,a=m,U=S,A=v,w=M,N=u)),T===0)return null;const k=P/T,O=x/T,B=1/T,j=D-k*_,le=a-O*_,Ie=U-k*y,Te=A-O*y,ue=w-k*F,K=N-O*F,ie=ue*Te-K*Ie,ge=j*K-le*ue,Ae=Ie*le-Te*j;if(s){if(ie<0||ge<0||Ae<0)return null}else if((ie<0||ge<0||Ae<0)&&(ie>0||ge>0||Ae>0))return null;const _e=ie+ge+Ae;if(_e===0)return null;const ke=B*(ie*_+ge*y+Ae*F);return(_e>0?ke<0:ke>0)?null:this.at(ke/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class us extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cl=new st,bi=new Ko,or=new gs,Pl=new X,lr=new X,cr=new X,hr=new X,Ea=new X,fr=new X,Ll=new X,ur=new X;class $e extends dt{constructor(e=new Tt,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){fr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=l[c],m=r[c];d!==0&&(Ea.fromBufferAttribute(m,e),o?fr.addScaledVector(Ea,d):fr.addScaledVector(Ea.sub(t),d))}t.add(fr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(or.containsPoint(bi.origin)===!1&&(bi.intersectSphere(or,Pl)===null||bi.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Cl),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,f=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const p=f[v],u=o[p.materialIndex],M=Math.max(p.start,g.start),I=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=M,C=I;E<C;E+=3){const R=l.getX(E),P=l.getX(E+1),x=l.getX(E+2);s=dr(this,u,e,i,h,d,m,R,P,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let p=v,u=S;p<u;p+=3){const M=l.getX(p),I=l.getX(p+1),E=l.getX(p+2);s=dr(this,o,e,i,h,d,m,M,I,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const p=f[v],u=o[p.materialIndex],M=Math.max(p.start,g.start),I=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let E=M,C=I;E<C;E+=3){const R=E,P=E+1,x=E+2;s=dr(this,u,e,i,h,d,m,R,P,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let p=v,u=S;p<u;p+=3){const M=p,I=p+1,E=p+2;s=dr(this,o,e,i,h,d,m,M,I,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Hf(n,e,t,i,s,r,o,l){let c;if(e.side===tn?c=i.intersectTriangle(o,r,s,!0,l):c=i.intersectTriangle(s,r,o,e.side===Pi,l),c===null)return null;ur.copy(l),ur.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(ur);return h<t.near||h>t.far?null:{distance:h,point:ur.clone(),object:n}}function dr(n,e,t,i,s,r,o,l,c,h){n.getVertexPosition(l,lr),n.getVertexPosition(c,cr),n.getVertexPosition(h,hr);const d=Hf(n,e,t,i,lr,cr,hr,Ll);if(d){const m=new X;_n.getBarycoord(Ll,lr,cr,hr,m),s&&(d.uv=_n.getInterpolatedAttribute(s,l,c,h,m,new Oe)),r&&(d.uv1=_n.getInterpolatedAttribute(r,l,c,h,m,new Oe)),o&&(d.normal=_n.getInterpolatedAttribute(o,l,c,h,m,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new X,materialIndex:0};_n.getNormal(lr,cr,hr,f.normal),d.face=f,d.barycoord=m}return d}class ch extends $t{constructor(e=null,t=1,i=1,s,r,o,l,c,h=Ht,d=Ht,m,f){super(null,o,l,c,h,d,s,r,m,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il extends wt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new st,Dl=new st,pr=[],Ul=new zi,Gf=new st,Ts=new $e,As=new gs;class qr extends $e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Il(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),Ul.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(Ul)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),As.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[o+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(i),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),Dl.multiplyMatrices(i,es),Ts.matrixWorld=Dl,Ts.raycast(e,pr);for(let o=0,l=pr.length;o<l;o++){const c=pr[o];c.instanceId=r,c.object=this,t.push(c)}pr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ch(new Float32Array(s*this.count),s,this.count,ko,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const l=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=l,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ei=new gs,Vf=new Oe(.5,.5),mr=new X;class $o{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){const s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],h=r[3],d=r[4],m=r[5],f=r[6],g=r[7],v=r[8],S=r[9],p=r[10],u=r[11],M=r[12],I=r[13],E=r[14],C=r[15];if(s[0].setComponents(h-o,g-d,u-v,C-M).normalize(),s[1].setComponents(h+o,g+d,u+v,C+M).normalize(),s[2].setComponents(h+l,g+m,u+S,C+I).normalize(),s[3].setComponents(h-l,g-m,u-S,C-I).normalize(),i)s[4].setComponents(c,f,p,E).normalize(),s[5].setComponents(h-c,g-f,u-p,C-E).normalize();else if(s[4].setComponents(h-c,g-f,u-p,C-E).normalize(),t===Gn)s[5].setComponents(h+c,g+f,u+p,C+E).normalize();else if(t===Gs)s[5].setComponents(c,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=Vf.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wf extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nl=new st,Ao=new Ko,gr=new gs,xr=new X;class zl extends dt{constructor(e=new Tt,t=new Wf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,e.ray.intersectsSphere(gr)===!1)return;Nl.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(Nl);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=i.index,m=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,S=g;v<S;v++){const p=h.getX(v);xr.fromBufferAttribute(m,p),Fl(xr,p,c,s,e,t,this)}}else{const f=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let v=f,S=g;v<S;v++)xr.fromBufferAttribute(m,v),Fl(xr,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Fl(n,e,t,i,s,r,o){const l=Ao.distanceSqToPoint(n);if(l<t){const c=new X;Ao.closestPointToPoint(n,c),c.applyMatrix4(i);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hh extends $t{constructor(e=[],t=Li,i,s,r,o,l,c,h,d){super(e,t,i,s,r,o,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xf extends $t{constructor(e,t,i,s,r,o,l,c,h){super(e,t,i,s,r,o,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends $t{constructor(e,t,i=In,s,r,o,l=Ht,c=Ht,h,d=ti,m=1){if(d!==ti&&d!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:m};super(f,s,r,o,l,c,d,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class qf extends ds{constructor(e,t=In,i=Li,s,r,o=Ht,l=Ht,c,h=ti){const d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,l,c,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fh extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vi extends Tt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],d=[],m=[];let f=0,g=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(m,2));function v(S,p,u,M,I,E,C,R,P,x,T){const D=E/P,a=C/x,_=E/2,U=C/2,A=R/2,y=P+1,w=x+1;let N=0,F=0;const k=new X;for(let O=0;O<w;O++){const B=O*a-U;for(let j=0;j<y;j++){const le=j*D-_;k[S]=le*M,k[p]=B*I,k[u]=A,h.push(k.x,k.y,k.z),k[S]=0,k[p]=0,k[u]=R>0?1:-1,d.push(k.x,k.y,k.z),m.push(j/P),m.push(1-O/x),N+=1}}for(let O=0;O<x;O++)for(let B=0;B<P;B++){const j=f+B+y*O,le=f+B+y*(O+1),Ie=f+(B+1)+y*(O+1),Te=f+(B+1)+y*O;c.push(j,le,Te),c.push(le,Ie,Te),F+=6}l.addGroup(g,F,T),g+=F,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vs extends Tt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],l=[],c=[],h=new X,d=new Oe;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let m=0,f=3;m<=t;m++,f+=3){const g=i+m/t*s;h.x=e*Math.cos(g),h.y=e*Math.sin(g),o.push(h.x,h.y,h.z),l.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,c.push(d.x,d.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ws extends Tt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],m=[],f=[],g=[];let v=0;const S=[],p=i/2;let u=0;M(),o===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(d),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(g,2));function M(){const E=new X,C=new X;let R=0;const P=(t-e)/i;for(let x=0;x<=r;x++){const T=[],D=x/r,a=D*(t-e)+e;for(let _=0;_<=s;_++){const U=_/s,A=U*c+l,y=Math.sin(A),w=Math.cos(A);C.x=a*y,C.y=-D*i+p,C.z=a*w,m.push(C.x,C.y,C.z),E.set(y,P,w).normalize(),f.push(E.x,E.y,E.z),g.push(U,1-D),T.push(v++)}S.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const D=S[T][x],a=S[T+1][x],_=S[T+1][x+1],U=S[T][x+1];(e>0||T!==0)&&(d.push(D,a,U),R+=3),(t>0||T!==r-1)&&(d.push(a,_,U),R+=3)}h.addGroup(u,R,0),u+=R}function I(E){const C=v,R=new Oe,P=new X;let x=0;const T=E===!0?e:t,D=E===!0?1:-1;for(let _=1;_<=s;_++)m.push(0,p*D,0),f.push(0,D,0),g.push(.5,.5),v++;const a=v;for(let _=0;_<=s;_++){const A=_/s*c+l,y=Math.cos(A),w=Math.sin(A);P.x=T*w,P.y=p*D,P.z=T*y,m.push(P.x,P.y,P.z),f.push(0,D,0),R.x=y*.5+.5,R.y=w*.5*D+.5,g.push(R.x,R.y),v++}for(let _=0;_<s;_++){const U=C+_,A=a+_;E===!0?d.push(A,A+1,U):d.push(A+1,A,U),x+=3}h.addGroup(u,x,E===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jo extends Ws{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,i,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new Jo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qo extends Tt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];l(s),h(i),d(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(M){const I=new X,E=new X,C=new X;for(let R=0;R<t.length;R+=3)g(t[R+0],I),g(t[R+1],E),g(t[R+2],C),c(I,E,C,M)}function c(M,I,E,C){const R=C+1,P=[];for(let x=0;x<=R;x++){P[x]=[];const T=M.clone().lerp(E,x/R),D=I.clone().lerp(E,x/R),a=R-x;for(let _=0;_<=a;_++)_===0&&x===R?P[x][_]=T:P[x][_]=T.clone().lerp(D,_/a)}for(let x=0;x<R;x++)for(let T=0;T<2*(R-x)-1;T++){const D=Math.floor(T/2);T%2===0?(f(P[x][D+1]),f(P[x+1][D]),f(P[x][D])):(f(P[x][D+1]),f(P[x+1][D+1]),f(P[x+1][D]))}}function h(M){const I=new X;for(let E=0;E<r.length;E+=3)I.x=r[E+0],I.y=r[E+1],I.z=r[E+2],I.normalize().multiplyScalar(M),r[E+0]=I.x,r[E+1]=I.y,r[E+2]=I.z}function d(){const M=new X;for(let I=0;I<r.length;I+=3){M.x=r[I+0],M.y=r[I+1],M.z=r[I+2];const E=p(M)/2/Math.PI+.5,C=u(M)/Math.PI+.5;o.push(E,1-C)}v(),m()}function m(){for(let M=0;M<o.length;M+=6){const I=o[M+0],E=o[M+2],C=o[M+4],R=Math.max(I,E,C),P=Math.min(I,E,C);R>.9&&P<.1&&(I<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function g(M,I){const E=M*3;I.x=e[E+0],I.y=e[E+1],I.z=e[E+2]}function v(){const M=new X,I=new X,E=new X,C=new X,R=new Oe,P=new Oe,x=new Oe;for(let T=0,D=0;T<r.length;T+=9,D+=6){M.set(r[T+0],r[T+1],r[T+2]),I.set(r[T+3],r[T+4],r[T+5]),E.set(r[T+6],r[T+7],r[T+8]),R.set(o[D+0],o[D+1]),P.set(o[D+2],o[D+3]),x.set(o[D+4],o[D+5]),C.copy(M).add(I).add(E).divideScalar(3);const a=p(C);S(R,D+0,M,a),S(P,D+2,I,a),S(x,D+4,E,a)}}function S(M,I,E,C){C<0&&M.x===1&&(o[I]=M.x-1),E.x===0&&E.z===0&&(o[I]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.vertices,e.indices,e.radius,e.detail)}}class Hr extends Qo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hr(e.radius,e.detail)}}class Di extends Tt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,l=Math.floor(i),c=Math.floor(s),h=l+1,d=c+1,m=e/l,f=t/c,g=[],v=[],S=[],p=[];for(let u=0;u<d;u++){const M=u*f-o;for(let I=0;I<h;I++){const E=I*m-r;v.push(E,-M,0),S.push(0,0,1),p.push(I/l),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<l;M++){const I=M+h*u,E=M+h*(u+1),C=M+1+h*(u+1),R=M+1+h*u;g.push(I,E,R),g.push(E,C,R)}this.setIndex(g),this.setAttribute("position",new vt(v,3)),this.setAttribute("normal",new vt(S,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}class ps extends Tt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let h=0;const d=[],m=new X,f=new X,g=[],v=[],S=[],p=[];for(let u=0;u<=i;u++){const M=[],I=u/i,E=o+I*l,C=e*Math.cos(E),R=Math.sqrt(e*e-C*C);let P=0;u===0&&o===0?P=.5/t:u===i&&c===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){const T=x/t,D=s+T*r;m.x=-R*Math.cos(D),m.y=C,m.z=R*Math.sin(D),v.push(m.x,m.y,m.z),f.copy(m).normalize(),S.push(f.x,f.y,f.z),p.push(T+P,1-I),M.push(h++)}d.push(M)}for(let u=0;u<i;u++)for(let M=0;M<t;M++){const I=d[u][M+1],E=d[u][M],C=d[u+1][M],R=d[u+1][M+1];(u!==0||o>0)&&g.push(I,E,R),(u!==i-1||c<Math.PI)&&g.push(E,C,R)}this.setIndex(g),this.setAttribute("position",new vt(v,3)),this.setAttribute("normal",new vt(S,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jo extends Tt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},i=Math.floor(i),s=Math.floor(s);const c=[],h=[],d=[],m=[],f=new X,g=new X,v=new X;for(let S=0;S<=i;S++){const p=o+S/i*l;for(let u=0;u<=s;u++){const M=u/s*r;g.x=(e+t*Math.cos(p))*Math.cos(M),g.y=(e+t*Math.cos(p))*Math.sin(M),g.z=t*Math.sin(p),h.push(g.x,g.y,g.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),v.subVectors(g,f).normalize(),d.push(v.x,v.y,v.z),m.push(u/s),m.push(S/i)}}for(let S=1;S<=i;S++)for(let p=1;p<=s;p++){const u=(s+1)*S+p-1,M=(s+1)*(S-1)+p-1,I=(s+1)*(S-1)+p,E=(s+1)*S+p;c.push(u,M,E),c.push(M,I,E)}this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Ol(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ol(s[0])){const r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=ms(n[t]);for(const s in i)e[s]=i[s]}return e}function Ol(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Zf={clone:ms,merge:en};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[i].value=new st().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jf extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Us extends Mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Wr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xt extends Mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Wr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qf extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yr extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class eu extends Yr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wa=new st,Bl=new X,kl=new X;class el{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),t.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _r=new X,vr=new Ni,Nn=new X;class dh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_r,vr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_r,vr,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_r,vr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_r,vr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ci=new X,Hl=new Oe,Gl=new Oe;class an extends dh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Gl),t.subVectors(Gl,Hl)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/h,s*=o.width/c,i*=o.height/h}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tu extends el{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class nu extends Yr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class iu extends el{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class ph extends Yr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zr extends dh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class su extends el{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ru extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new su}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ts=-90,ns=1;class au extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(ts,ns,e,t);s.layers=this.layers,this.add(s);const r=new an(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new an(ts,ns,e,t);o.layers=this.layers,this.add(o);const l=new an(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new an(ts,ns,e,t);c.layers=this.layers,this.add(c);const h=new an(ts,ns,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,l,c]=t;for(const h of t)this.remove(h);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,c,h,d]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,f,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ou extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cu.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cu(){this._document.hidden===!1&&this.reset()}const Vl=new st;class hu{constructor(e,t,i=0,s=1/0){this.ray=new Ko(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vl),this}intersectObject(e,t=!0,i=[]){return Ro(e,this,i,t),i.sort(Wl),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ro(e[s],this,i,t);return i.sort(Wl),i}}function Wl(n,e){return n.distance-e.distance}function Ro(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,l=r.length;o<l;o++)Ro(r[o],e,t,!0)}}const rl=class rl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};rl.prototype.isMatrix2=!0;let Xl=rl;function ql(n,e,t,i){const s=fu(i);switch(t){case Qc:return n*e;case ko:return n*e/s.components*s.byteLength;case Ho:return n*e/s.components*s.byteLength;case Ii:return n*e*2/s.components*s.byteLength;case Go:return n*e*2/s.components*s.byteLength;case jc:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case Vo:return n*e*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:case ja:return Math.max(n,16)*Math.max(e,8)/4;case $a:case Qa:return Math.max(n,8)*Math.max(e,8)/2;case eo:case to:case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case no:case Ir:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case So:case yo:case bo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eo:case wo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dr:case To:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fu(n){switch(n){case fn:case Zc:return{byteLength:1,components:1};case ks:case Kc:case Dn:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case In:case Fo:case Pn:return{byteLength:4,components:1};case $c:case Jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mh(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function uu(n){const e=new WeakMap;function t(l,c){const h=l.array,d=l.usage,m=h.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=n.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,c,h){const d=c.array,m=c.updateRanges;if(n.bindBuffer(h,l),m.length===0)n.bufferSubData(h,0,d);else{m.sort((g,v)=>g.start-v.start);let f=0;for(let g=1;g<m.length;g++){const v=m[f],S=m[g];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,m[f]=S)}m.length=f+1;for(let g=0,v=m.length;g<v;g++){const S=m[g];n.bufferSubData(h,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:o}}var du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
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
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vu=`#ifdef USE_AOMAP
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
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
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
#endif`,yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tu=`#ifdef USE_IRIDESCENCE
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
#endif`,Au=`#ifdef USE_BUMPMAP
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zu=`#define PI 3.141592653589793
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
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ou=`vec3 transformedNormal = objectNormal;
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
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
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
#endif`,fd=`uniform sampler2D dfgLUT;
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
}`,ud=`
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qd=`float getShadowMask() {
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
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Up=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define STANDARD
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
}`,Bp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:du,alphahash_pars_fragment:pu,alphamap_fragment:mu,alphamap_pars_fragment:gu,alphatest_fragment:xu,alphatest_pars_fragment:_u,aomap_fragment:vu,aomap_pars_fragment:Mu,batching_pars_vertex:Su,batching_vertex:yu,begin_vertex:bu,beginnormal_vertex:Eu,bsdfs:wu,iridescence_fragment:Tu,bumpmap_pars_fragment:Au,clipping_planes_fragment:Ru,clipping_planes_pars_fragment:Cu,clipping_planes_pars_vertex:Pu,clipping_planes_vertex:Lu,color_fragment:Iu,color_pars_fragment:Du,color_pars_vertex:Uu,color_vertex:Nu,common:zu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:Bu,displacementmap_vertex:ku,emissivemap_fragment:Hu,emissivemap_pars_fragment:Gu,colorspace_fragment:Vu,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:qu,envmap_pars_fragment:Yu,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:rd,envmap_vertex:Ku,fog_vertex:$u,fog_pars_vertex:Ju,fog_fragment:Qu,fog_pars_fragment:ju,gradientmap_pars_fragment:ed,lightmap_pars_fragment:td,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:hd,lights_physical_pars_fragment:fd,lights_fragment_begin:ud,lights_fragment_maps:dd,lights_fragment_end:pd,lightprobes_pars_fragment:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:vd,map_fragment:Md,map_pars_fragment:Sd,map_particle_fragment:yd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:wd,morphinstance_vertex:Td,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Id,normal_pars_fragment:Dd,normal_pars_vertex:Ud,normal_vertex:Nd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:kd,opaque_fragment:Hd,packing:Gd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:$d,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:jd,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:fp,worldpos_vertex:up,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:xp,cube_frag:_p,depth_vert:vp,depth_frag:Mp,distance_vert:Sp,distance_frag:yp,equirect_vert:bp,equirect_frag:Ep,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Ip,meshnormal_vert:Dp,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:zp,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:Bp,meshtoon_frag:kp,points_vert:Hp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},ve={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Bn={basic:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:en([ve.common,ve.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:en([ve.lights,ve.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Bn.physical={uniforms:en([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Mr={r:0,b:0,g:0},Yp=new st,gh=new Ve;gh.set(-1,0,0,0,1,0,0,0,1);function Zp(n,e,t,i,s,r){const o=new Ne(0);let l=s===!0?0:1,c,h,d=null,m=0,f=null;function g(M){let I=M.isScene===!0?M.background:null;if(I&&I.isTexture){const E=M.backgroundBlurriness>0;I=e.get(I,E)}return I}function v(M){let I=!1;const E=g(M);E===null?p(o,l):E&&E.isColor&&(p(E,1),I=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,I){const E=g(I);E&&(E.isCubeTexture||E.mapping===Xr)?(h===void 0&&(h=new $e(new vi(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ms(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(I.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(gh),h.material.toneMapped=je.getTransfer(E.colorSpace)!==lt,(d!==E||m!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=E,m=E.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new $e(new Di(2,2),new un({name:"BackgroundMaterial",uniforms:ms(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=je.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||m!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,m=E.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,I){M.getRGB(Mr,uh(n)),t.buffers.color.setClear(Mr.r,Mr.g,Mr.b,I,r)}function u(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,I=1){o.set(M),l=I,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:S,dispose:u}}function Kp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function l(a,_,U,A,y){let w=!1;const N=m(a,A,U,_);r!==N&&(r=N,h(r.object)),w=g(a,A,U,y),w&&v(a,A,U,y),y!==null&&e.update(y,n.ELEMENT_ARRAY_BUFFER),(w||o)&&(o=!1,E(a,_,U,A),y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(y).buffer))}function c(){return n.createVertexArray()}function h(a){return n.bindVertexArray(a)}function d(a){return n.deleteVertexArray(a)}function m(a,_,U,A){const y=A.wireframe===!0;let w=i[_.id];w===void 0&&(w={},i[_.id]=w);const N=a.isInstancedMesh===!0?a.id:0;let F=w[N];F===void 0&&(F={},w[N]=F);let k=F[U.id];k===void 0&&(k={},F[U.id]=k);let O=k[y];return O===void 0&&(O=f(c()),k[y]=O),O}function f(a){const _=[],U=[],A=[];for(let y=0;y<t;y++)_[y]=0,U[y]=0,A[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:U,attributeDivisors:A,object:a,attributes:{},index:null}}function g(a,_,U,A){const y=r.attributes,w=_.attributes;let N=0;const F=U.getAttributes();for(const k in F)if(F[k].location>=0){const B=y[k];let j=w[k];if(j===void 0&&(k==="instanceMatrix"&&a.instanceMatrix&&(j=a.instanceMatrix),k==="instanceColor"&&a.instanceColor&&(j=a.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;N++}return r.attributesNum!==N||r.index!==A}function v(a,_,U,A){const y={},w=_.attributes;let N=0;const F=U.getAttributes();for(const k in F)if(F[k].location>=0){let B=w[k];B===void 0&&(k==="instanceMatrix"&&a.instanceMatrix&&(B=a.instanceMatrix),k==="instanceColor"&&a.instanceColor&&(B=a.instanceColor));const j={};j.attribute=B,B&&B.data&&(j.data=B.data),y[k]=j,N++}r.attributes=y,r.attributesNum=N,r.index=A}function S(){const a=r.newAttributes;for(let _=0,U=a.length;_<U;_++)a[_]=0}function p(a){u(a,0)}function u(a,_){const U=r.newAttributes,A=r.enabledAttributes,y=r.attributeDivisors;U[a]=1,A[a]===0&&(n.enableVertexAttribArray(a),A[a]=1),y[a]!==_&&(n.vertexAttribDivisor(a,_),y[a]=_)}function M(){const a=r.newAttributes,_=r.enabledAttributes;for(let U=0,A=_.length;U<A;U++)_[U]!==a[U]&&(n.disableVertexAttribArray(U),_[U]=0)}function I(a,_,U,A,y,w,N){N===!0?n.vertexAttribIPointer(a,_,U,y,w):n.vertexAttribPointer(a,_,U,A,y,w)}function E(a,_,U,A){S();const y=A.attributes,w=U.getAttributes(),N=_.defaultAttributeValues;for(const F in w){const k=w[F];if(k.location>=0){let O=y[F];if(O===void 0&&(F==="instanceMatrix"&&a.instanceMatrix&&(O=a.instanceMatrix),F==="instanceColor"&&a.instanceColor&&(O=a.instanceColor)),O!==void 0){const B=O.normalized,j=O.itemSize,le=e.get(O);if(le===void 0)continue;const Ie=le.buffer,Te=le.type,ue=le.bytesPerElement,K=Te===n.INT||Te===n.UNSIGNED_INT||O.gpuType===Fo;if(O.isInterleavedBufferAttribute){const ie=O.data,ge=ie.stride,Ae=O.offset;if(ie.isInstancedInterleavedBuffer){for(let _e=0;_e<k.locationSize;_e++)u(k.location+_e,ie.meshPerAttribute);a.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let _e=0;_e<k.locationSize;_e++)p(k.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let _e=0;_e<k.locationSize;_e++)I(k.location+_e,j/k.locationSize,Te,B,ge*ue,(Ae+j/k.locationSize*_e)*ue,K)}else{if(O.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)u(k.location+ie,O.meshPerAttribute);a.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ie=0;ie<k.locationSize;ie++)p(k.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ie=0;ie<k.locationSize;ie++)I(k.location+ie,j/k.locationSize,Te,B,j*ue,j/k.locationSize*ie*ue,K)}}else if(N!==void 0){const B=N[F];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(k.location,B);break;case 3:n.vertexAttrib3fv(k.location,B);break;case 4:n.vertexAttrib4fv(k.location,B);break;default:n.vertexAttrib1fv(k.location,B)}}}}M()}function C(){T();for(const a in i){const _=i[a];for(const U in _){const A=_[U];for(const y in A){const w=A[y];for(const N in w)d(w[N].object),delete w[N];delete A[y]}}delete i[a]}}function R(a){if(i[a.id]===void 0)return;const _=i[a.id];for(const U in _){const A=_[U];for(const y in A){const w=A[y];for(const N in w)d(w[N].object),delete w[N];delete A[y]}}delete i[a.id]}function P(a){for(const _ in i){const U=i[_];for(const A in U){const y=U[A];if(y[a.id]===void 0)continue;const w=y[a.id];for(const N in w)d(w[N].object),delete w[N];delete y[a.id]}}}function x(a){for(const _ in i){const U=i[_],A=a.isInstancedMesh===!0?a.id:0,y=U[A];if(y!==void 0){for(const w in y){const N=y[w];for(const F in N)d(N[F].object),delete N[F];delete y[w]}delete U[A],Object.keys(U).length===0&&delete i[_]}}}function T(){D(),o=!0,r!==s&&(r=s,h(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function $p(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function l(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Jp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){const x=P===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fn&&P!==Pn&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=c(h);d!==h&&(Ge("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const m=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:M,maxVaryings:I,maxFragmentUniforms:E,maxSamples:C,samples:R}}function Qp(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new mi,l=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const g=m.length!==0||f||i!==0||s;return s=f,i=m.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,f){t=d(m,f,0)},this.setState=function(m,f,g){const v=m.clippingPlanes,S=m.clipIntersection,p=m.clipShadows,u=n.get(m);if(!s||v===null||v.length===0||r&&!p)r?d(null):h();else{const M=r?0:i,I=M*4;let E=u.clippingState||null;c.value=E,E=d(v,f,I,g);for(let C=0;C!==I;++C)E[C]=t[C];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(m,f,g,v){const S=m!==null?m.length:0;let p=null;if(S!==0){if(p=c.value,v!==!0||p===null){const u=g+S*4,M=f.matrixWorldInverse;l.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let I=0,E=g;I!==S;++I,E+=4)o.copy(m[I]).applyMatrix4(M,l),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const as=4,jp=6,e0=20,t0=256,Rs=new Zr,Yl=new Ne;let Ta=null,Aa=0,Ra=0,Ca=!1;const n0=new X,wi=new X;class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:l=n0}=r;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Dn,format:Ln,colorSpace:Nr,depthBuffer:!1},s=Kl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=i0(r)),this._blurMaterial=r0(r,e,t),this._ggxMaterial=s0(r,e,t)}return s}_compileMaterial(e){const t=new $e(new Tt,e);this._renderer.compile(t,Rs)}_sceneToCubeUV(e,t,i,s,r){const c=new an(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,g=m.toneMapping;m.getClearColor(Yl),m.toneMapping=Wn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new vi,new us({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let u=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,u=!0):(p.color.copy(Yl),u=!0);for(let I=0;I<6;I++){const E=I%3;E===0?(c.up.set(0,h[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[I],r.y,r.z)):E===1?(c.up.set(0,0,h[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[I],r.z)):(c.up.set(0,h[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[I]));const C=this._cubeSize;is(s,E*C,I>2?C:0,C,C),m.setRenderTarget(s),u&&m.render(S,c),m.render(e,c)}m.toneMapping=g,m.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Li||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const l=r.uniforms;l.envMap.value=e;const c=this._cubeSize;is(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Rs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms,h=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-d*d),f=h*1.25,g=m*f,{_lodMax:v}=this,S=this._sizeLods[i],p=3*S*(i>v-as?i-v+as:0),u=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=v-t,is(r,p,u,3*S,2*S),s.setRenderTarget(r),s.render(l,Rs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-i,is(e,p,u,3*S,2*S),s.setRenderTarget(e),s.render(l,Rs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;const h=l.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;const d=this._sizeLods[s],m=3*d*(s>this._lodMax-as?s-this._lodMax+as:0),f=4*(this._cubeSize-d);is(t,m,f,3*d,2*d),o.setRenderTarget(t),o.render(c,Rs)}}function i0(n){const e=[],t=[];let i=n;const s=n-as+1+jp;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const l=1/(o-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,f=6,g=3,v=new Float32Array(g*f*m),S=new Float32Array(g*f*m);for(let u=0;u<m;u++){const M=u%3*2/3-1,I=u>2?0:-1,E=[M,I,0,M+2/3,I,0,M+2/3,I+1,0,M,I,0,M+2/3,I+1,0,M,I+1,0];v.set(E,g*f*u);for(let C=0;C<f;C++){const R=d[C*2]*2-1,P=d[C*2+1]*2-1;u===0?wi.set(1,P,R):u===1?wi.set(-R,1,-P):u===2?wi.set(-R,P,1):u===3?wi.set(-1,P,-R):u===4?wi.set(-R,-1,P):wi.set(R,P,-1),wi.toArray(S,(u*f+C)*g)}}const p=new Tt;p.setAttribute("position",new wt(v,g)),p.setAttribute("outputDirection",new wt(S,g)),t.push(new $e(p,null)),i>as&&i--}return{lodMeshes:t,sizeLods:e}}function Kl(n,e,t){const i=new Mn(n,e,t);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function s0(n,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:t0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function r0(n,e,t){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:e0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function $l(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Kr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xh extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new hh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:jn});r.uniforms.tEquirect.value=t;const o=new $e(s,r),l=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Kt),new au(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function a0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,g=!1){return f==null?null:g?o(f):r(f)}function r(f){if(f&&f.isTexture){const g=f.mapping;if(g===Qr||g===jr)if(e.has(f)){const v=e.get(f).texture;return l(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const S=new xh(v.height);return S.fromEquirectangularTexture(n,f),e.set(f,S),f.addEventListener("dispose",h),l(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const g=f.mapping,v=g===Qr||g===jr,S=g===Li||g===fs;if(v||S){let p=t.get(f);const u=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new Zl(n)),p=v?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const M=f.image;return v&&M&&M.height>0||S&&M&&c(M)?(i===null&&(i=new Zl(n)),p=v?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",d),p.texture):null}}}return f}function l(f,g){return g===Qr?f.mapping=Li:g===jr&&(f.mapping=fs),f}function c(f){let g=0;const v=6;for(let S=0;S<v;S++)f[S]!==void 0&&g++;return g===v}function h(f){const g=f.target;g.removeEventListener("dispose",h);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function d(f){const g=f.target;g.removeEventListener("dispose",d);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function o0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ls("WebGLRenderer: "+i+" extension not supported."),s}}}function l0(n,e,t,i){const s={},r=new WeakMap;function o(m){const f=m.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(m,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(m){const f=m.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER)}function h(m){const f=[],g=m.index,v=m.attributes.position;let S=0;if(v===void 0)return;if(g!==null){const M=g.array;S=g.version;for(let I=0,E=M.length;I<E;I+=3){const C=M[I+0],R=M[I+1],P=M[I+2];f.push(C,R,R,P,P,C)}}else{const M=v.array;S=v.version;for(let I=0,E=M.length/3-1;I<E;I+=3){const C=I+0,R=I+1,P=I+2;f.push(C,R,R,P,P,C)}}const p=new(v.count>=65535?ah:rh)(f,1);p.version=S;const u=r.get(m);u&&e.remove(u),r.set(m,p)}function d(m){const f=r.get(m);if(f){const g=m.index;g!==null&&f.version<g.version&&h(m)}else h(m);return r.get(m)}return{get:l,update:c,getWireframeAttribute:d}}function c0(n,e,t){let i;function s(m){i=m}let r,o;function l(m){r=m.type,o=m.bytesPerElement}function c(m,f){n.drawElements(i,f,r,m*o),t.update(f,i,1)}function h(m,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,m*o,g),t.update(f,i,g))}function d(m,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,m,0,g);let S=0;for(let p=0;p<g;p++)S+=f[p];t.update(S,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function h0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function f0(n,e,t){const i=new WeakMap,s=new yt;function r(o,l,c){const h=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=d!==void 0?d.length:0;let f=i.get(l);if(f===void 0||f.count!==m){let D=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",D)};var g=D;f!==void 0&&f.texture.dispose();const v=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,p=l.morphAttributes.color!==void 0,u=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],I=l.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let C=l.attributes.position.count*E,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*R*4*m),x=new nh(P,C,R,m);x.type=Pn,x.needsUpdate=!0;const T=E*4;for(let a=0;a<m;a++){const _=u[a],U=M[a],A=I[a],y=C*R*4*a;for(let w=0;w<_.count;w++){const N=w*T;v===!0&&(s.fromBufferAttribute(_,w),P[y+N+0]=s.x,P[y+N+1]=s.y,P[y+N+2]=s.z,P[y+N+3]=0),S===!0&&(s.fromBufferAttribute(U,w),P[y+N+4]=s.x,P[y+N+5]=s.y,P[y+N+6]=s.z,P[y+N+7]=0),p===!0&&(s.fromBufferAttribute(A,w),P[y+N+8]=s.x,P[y+N+9]=s.y,P[y+N+10]=s.z,P[y+N+11]=A.itemSize===4?s.w:1)}}f={count:m,texture:x,size:new Oe(C,R)},i.set(l,f),l.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<h.length;p++)v+=h[p];const S=l.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function u0(n,e,t,i,s){let r=new WeakMap;function o(h){const d=s.render.frame,m=h.geometry,f=e.get(h,m);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return f}function l(){r=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:l}}const d0={[Hc]:"LINEAR_TONE_MAPPING",[Gc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[zo]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function p0(n,e,t,i,s,r){const o=new Mn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null;const h=new Tt;h.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vt([0,2,0,0,2,0],2));const d=new Jf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new $e(h,d),f=new Zr(-1,1,1,-1,0,1);let g=null,v=null,S=!1,p,u=null,M=[],I=!1;this.setSize=function(E,C){o.setSize(E,C),l!==null&&l.setSize(E,C),c!==null&&c.setSize(E,C);for(let R=0;R<M.length;R++){const P=M[R];P.setSize&&P.setSize(E,C)}},this.setEffects=function(E){M=E,I=M.length>0&&M[0].isRenderPass===!0;const C=o.width,R=o.height;M.length>0&&l===null&&(l=new Mn(C,R,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(C,R,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){const x=M[P];x.setSize&&x.setSize(C,R)}},this.begin=function(E,C){if(S||E.toneMapping===Wn&&M.length===0)return!1;if(u=C,C!==null){const R=C.width,P=C.height;(o.width!==R||o.height!==P)&&this.setSize(R,P)}return I===!1&&E.setRenderTarget(o),p=E.toneMapping,E.toneMapping=Wn,!0},this.hasRenderPass=function(){return I},this.end=function(E,C){E.toneMapping=p,S=!0;let R=o,P=l;for(let x=0;x<M.length;x++){const T=M[x];T.enabled!==!1&&(T.render(E,P,R,C),T.needsSwap!==!1&&(R=P,P=P===l?c:l))}if(g!==E.outputColorSpace||v!==E.toneMapping){g=E.outputColorSpace,v=E.toneMapping,d.defines={},je.getTransfer(g)===lt&&(d.defines.SRGB_TRANSFER="");const x=d0[v];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,E.setRenderTarget(u),E.render(m,f),u=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}const _h=new $t,Co=new ds(1,1),vh=new nh,Mh=new wf,Sh=new hh,Ql=[],jl=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),e!==0){i.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(r,l)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $r(n,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function v0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;nc.set(i),n.uniformMatrix2fv(this.addr,!1,nc),It(t,i)}}function M0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;tc.set(i),n.uniformMatrix3fv(this.addr,!1,tc),It(t,i)}}function S0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;ec.set(i),n.uniformMatrix4fv(this.addr,!1,ec),It(t,i)}}function y0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function E0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function T0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function P0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Co.compareFunction=t.isReversedDepthBuffer()?Xo:Wo,r=Co):r=_h,t.setTexture2D(e||r,s)}function L0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mh,s)}function I0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Sh,s)}function D0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||vh,s)}function U0(n){switch(n){case 5126:return m0;case 35664:return g0;case 35665:return x0;case 35666:return _0;case 35674:return v0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return y0;case 35667:case 35671:return b0;case 35668:case 35672:return E0;case 35669:case 35673:return w0;case 5125:return T0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return D0}}function N0(n,e){n.uniform1fv(this.addr,e)}function z0(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function F0(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function O0(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function B0(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function k0(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H0(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function G0(n,e){n.uniform1iv(this.addr,e)}function V0(n,e){n.uniform2iv(this.addr,e)}function W0(n,e){n.uniform3iv(this.addr,e)}function X0(n,e){n.uniform4iv(this.addr,e)}function q0(n,e){n.uniform1uiv(this.addr,e)}function Y0(n,e){n.uniform2uiv(this.addr,e)}function Z0(n,e){n.uniform3uiv(this.addr,e)}function K0(n,e){n.uniform4uiv(this.addr,e)}function $0(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Co:o=_h;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function J0(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mh,r[o])}function Q0(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sh,r[o])}function j0(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vh,r[o])}function em(n){switch(n){case 5126:return N0;case 35664:return z0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return k0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return Z0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return j0}}class tm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U0(t.type)}}class nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=em(t.type)}}class im{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(e,t[l.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function ic(n,e){n.seq.push(e),n.map[e.id]=e}function sm(n,e,t){const i=n.name,s=i.length;for(Pa.lastIndex=0;;){const r=Pa.exec(i),o=Pa.lastIndex;let l=r[1];const c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===s){ic(t,h===void 0?new tm(l,n,e):new nm(l,n,e));break}else{let m=t.map[l];m===void 0&&(m=new im(l),ic(t,m)),t=m}}}class Pr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);sm(l,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const l=t[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function sc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rm=37297;let am=0;function om(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const rc=new Ve;function lm(n){je._getMatrix(rc,je.workingColorSpace,n);const e=`mat3( ${rc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case zr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ac(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+om(n.getShaderSource(e),l)}else return r}function cm(n,e){const t=lm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hm={[Hc]:"Linear",[Gc]:"Reinhard",[Vc]:"Cineon",[Wc]:"ACESFilmic",[qc]:"AgX",[zo]:"Neutral",[Xc]:"Custom"};function fm(n,e){const t=hm[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new X;function um(){je.getLuminanceCoefficients(Sr);const n=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function pm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function Ns(n){return n!==""}function oc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(n){return n.replace(gm,_m)}const xm=new Map;function _m(n,e){let t=Ze[e];if(t===void 0){const i=xm.get(e);if(i!==void 0)t=Ze[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Po(t)}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(n){return n.replace(vm,Mm)}function Mm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Sm={[Fs]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function ym(n){return Sm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bm={[Li]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE_UV"};function Em(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bm[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const wm={[fs]:"ENVMAP_MODE_REFRACTION"};function Tm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Am={[Wr]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function Rm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Am[n.combine]||"ENVMAP_BLENDING_NONE"}function Cm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Pm(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=ym(t),h=Em(t),d=Tm(t),m=Rm(t),f=Cm(t),g=dm(t),v=pm(r),S=s.createProgram();let p,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ns).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ns).join(`
`),u.length>0&&(u+=`
`)):(p=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),u=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Wn?fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,cm("linearToOutputTexel",t.outputColorSpace),um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Po(o),o=oc(o,t),o=lc(o,t),l=Po(l),l=oc(l,t),l=lc(l,t),o=cc(o),l=cc(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const I=M+p+o,E=M+u+l,C=sc(s,s.VERTEX_SHADER,I),R=sc(s,s.FRAGMENT_SHADER,E);s.attachShader(S,C),s.attachShader(S,R),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(a){if(n.debug.checkShaderErrors){const _=s.getProgramInfoLog(S)||"",U=s.getShaderInfoLog(C)||"",A=s.getShaderInfoLog(R)||"",y=_.trim(),w=U.trim(),N=A.trim();let F=!0,k=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,C,R);else{const O=ac(s,C,"vertex"),B=ac(s,R,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+a.name+`
Material Type: `+a.type+`

Program Info Log: `+y+`
`+O+`
`+B)}else y!==""?Ge("WebGLProgram: Program Info Log:",y):(w===""||N==="")&&(k=!1);k&&(a.diagnostics={runnable:F,programLog:y,vertexShader:{log:w,prefix:p},fragmentShader:{log:N,prefix:u}})}s.deleteShader(C),s.deleteShader(R),x=new Pr(s,S),T=mm(s,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(S,rm)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=R,this}let Lm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dm(e),t.set(e,i)),i}}class Dm{constructor(e){this.id=Lm++,this.code=e,this.usedTimes=0}}function Um(n){return n===Ii||n===Ir||n===Dr}function Nm(n,e,t,i,s,r){const o=new Yo,l=new Im,c=new Set,h=[],d=new Map,m=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,T,D,a,_,U){const A=a.fog,y=_.geometry,w=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?a.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||w,N),k=F&&F.mapping===Xr?F.image.height:null,O=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const B=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,j=B!==void 0?B.length:0;let le=0;y.morphAttributes.position!==void 0&&(le=1),y.morphAttributes.normal!==void 0&&(le=2),y.morphAttributes.color!==void 0&&(le=3);let Ie,Te,ue,K;if(O){const Fe=Bn[O];Ie=Fe.vertexShader,Te=Fe.fragmentShader}else{Ie=x.vertexShader,Te=x.fragmentShader;const Fe=l.getVertexShaderStage(x),ze=l.getFragmentShaderStage(x);l.update(x,Fe,ze),ue=Fe.id,K=ze.id}const ie=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ae=_.isInstancedMesh===!0,_e=_.isBatchedMesh===!0,ke=!!x.map,tt=!!x.matcap,Xe=!!F,He=!!x.aoMap,Ke=!!x.lightMap,qe=!!x.bumpMap&&x.wireframe===!1,rt=!!x.normalMap,gt=!!x.displacementMap,bt=!!x.emissiveMap,ot=!!x.metalnessMap,Mt=!!x.roughnessMap,W=x.anisotropy>0,Dt=x.clearcoat>0,Ee=x.dispersion>0,z=x.retroreflectivity>0,b=x.iridescence>0,q=x.sheen>0,$=x.transmission>0,ee=W&&!!x.anisotropyMap,ce=Dt&&!!x.clearcoatMap,he=Dt&&!!x.clearcoatNormalMap,te=Dt&&!!x.clearcoatRoughnessMap,se=b&&!!x.iridescenceMap,fe=b&&!!x.iridescenceThicknessMap,Pe=q&&!!x.sheenColorMap,de=q&&!!x.sheenRoughnessMap,pe=!!x.specularMap,Le=!!x.specularColorMap,Ue=!!x.specularIntensityMap,We=$&&!!x.transmissionMap,G=$&&!!x.thicknessMap,me=!!x.gradientMap,H=!!x.alphaMap,ne=x.alphaTest>0,re=!!x.alphaHash,J=!!x.extensions;let Se=Wn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Se=n.toneMapping);const ae={shaderID:O,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Te,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:_e,batchingColor:_e&&_._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&_.instanceColor!==null,instancingMorph:Ae&&_.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:tt,envMap:Xe,envMapMode:Xe&&F.mapping,envMapCubeUVHeight:k,aoMap:He,lightMap:Ke,bumpMap:qe,normalMap:rt,displacementMap:gt,emissiveMap:bt,normalMapObjectSpace:rt&&x.normalMapType===of,normalMapTangentSpace:rt&&x.normalMapType===Ur,packedNormalMap:rt&&x.normalMapType===Ur&&Um(x.normalMap.format),metalnessMap:ot,roughnessMap:Mt,anisotropy:W,anisotropyMap:ee,clearcoat:Dt,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:te,dispersion:Ee,retroreflection:z,iridescence:b,iridescenceMap:se,iridescenceThicknessMap:fe,sheen:q,sheenColorMap:Pe,sheenRoughnessMap:de,specularMap:pe,specularColorMap:Le,specularIntensityMap:Ue,transmission:$,transmissionMap:We,thicknessMap:G,gradientMap:me,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:H,alphaTest:ne,alphaHash:re,combine:x.combine,mapUv:ke&&v(x.map.channel),aoMapUv:He&&v(x.aoMap.channel),lightMapUv:Ke&&v(x.lightMap.channel),bumpMapUv:qe&&v(x.bumpMap.channel),normalMapUv:rt&&v(x.normalMap.channel),displacementMapUv:gt&&v(x.displacementMap.channel),emissiveMapUv:bt&&v(x.emissiveMap.channel),metalnessMapUv:ot&&v(x.metalnessMap.channel),roughnessMapUv:Mt&&v(x.roughnessMap.channel),anisotropyMapUv:ee&&v(x.anisotropyMap.channel),clearcoatMapUv:ce&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(x.sheenRoughnessMap.channel),specularMapUv:pe&&v(x.specularMap.channel),specularColorMapUv:Le&&v(x.specularColorMap.channel),specularIntensityMapUv:Ue&&v(x.specularIntensityMap.channel),transmissionMapUv:We&&v(x.transmissionMap.channel),thicknessMapUv:G&&v(x.thicknessMap.channel),alphaMapUv:H&&v(x.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(rt||W),vertexNormals:!!y.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(ke||H),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||y.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ge,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:le,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:bt&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:J&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J&&x.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(u(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function u(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function I(x){const T=g[x.type];let D;if(T){const a=Bn[T];D=Zf.clone(a.uniforms)}else D=x.uniforms;return D}function E(x,T){let D=d.get(T);return D!==void 0?++D.usedTimes:(D=new Pm(n,T,x,s),h.push(D),d.set(T,D)),D}function C(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),d.delete(x.cacheKey),x.destroy()}}function R(x){l.remove(x)}function P(){l.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:I,acquireProgram:E,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:P}}function zm(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function s(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function l(f,g,v,S,p,u){let M=n[e];return M===void 0?(M={id:f.id,object:f,geometry:g,material:v,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:p,group:u},n[e]=M):(M.id=f.id,M.object=f,M.geometry=g,M.material=v,M.materialVariant=o(f),M.groupOrder=S,M.renderOrder=f.renderOrder,M.z=p,M.group=u),e++,M}function c(f,g,v,S,p,u,M){M.reversedDepth===!0&&(p=-p);const I=l(f,g,v,S,p,u);v.transmission>0?i.push(I):v.transparent===!0?s.push(I):t.push(I)}function h(f,g,v,S,p,u){const M=l(f,g,v,S,p,u);v.transmission>0?i.unshift(M):v.transparent===!0?s.unshift(M):t.unshift(M)}function d(f,g){t.length>1&&t.sort(f||Fm),i.length>1&&i.sort(g||fc),s.length>1&&s.sort(g||fc)}function m(){for(let f=e,g=n.length;f<g;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:h,finish:m,sort:d}}function Om(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new uc,n.set(i,[o])):s>=r.length?(o=new uc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Ne};break;case"SpotLight":t={position:new X,direction:new X,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function km(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hm=0;function Gm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vm(n){const e=new Bm,t=km(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new X);const s=new X,r=new st,o=new st;function l(h){let d=0,m=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let g=0,v=0,S=0,p=0,u=0,M=0,I=0,E=0,C=0,R=0,P=0,x=0,T=0,D=0;h.sort(Gm);for(let _=0,U=h.length;_<U;_++){const A=h[_],y=A.color,w=A.intensity,N=A.distance;let F=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ii?F=A.shadow.map.texture:F=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=y.r*w,m+=y.g*w,f+=y.b*w;else if(A.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],w);D++}else if(A.isSunLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,B=t.get(A);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[v]=B,i.sunShadowMap[v]=F;const j=O.getViewportCount();for(let le=0;le<j;le++)i.sunShadowMatrix[S+le]=O.getMatrix(le),i.sunShadowCascade[S+le]=O._cascadeData[le];S+=j,v++}i.sun[g]=k,g++}else if(A.isDirectionalLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,B=t.get(A);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=A.shadow.matrix,C++}i.directional[p]=k,p++}else if(A.isSpotLight){const k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(y).multiplyScalar(w),k.distance=N,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[M]=k;const O=A.shadow;if(A.map&&(i.spotLightMap[x]=A.map,x++,O.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[M]=O.matrix,A.castShadow){const B=t.get(A);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=F,P++}M++}else if(A.isRectAreaLight){const k=e.get(A);k.color.copy(y).multiplyScalar(w),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[I]=k,I++}else if(A.isPointLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const O=A.shadow,B=t.get(A);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,i.pointShadow[u]=B,i.pointShadowMap[u]=F,i.pointShadowMatrix[u]=A.shadow.matrix,R++}i.point[u]=k,u++}else if(A.isHemisphereLight){const k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(w),k.groundColor.copy(A.groundColor).multiplyScalar(w),i.hemi[E]=k,E++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=f;const a=i.hash;(a.sunLength!==g||a.directionalLength!==p||a.pointLength!==u||a.spotLength!==M||a.rectAreaLength!==I||a.hemiLength!==E||a.numSunShadows!==v||a.numDirectionalShadows!==C||a.numPointShadows!==R||a.numSpotShadows!==P||a.numSpotMaps!==x||a.numLightProbes!==D)&&(i.sun.length=g,i.directional.length=p,i.spot.length=M,i.rectArea.length=I,i.point.length=u,i.hemi.length=E,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,a.sunLength=g,a.directionalLength=p,a.pointLength=u,a.spotLength=M,a.rectAreaLength=I,a.hemiLength=E,a.numSunShadows=v,a.numDirectionalShadows=C,a.numPointShadows=R,a.numSpotShadows=P,a.numSpotMaps=x,a.numLightProbes=D,i.version=Hm++)}function c(h,d){let m=0,f=0,g=0,v=0,S=0,p=0;const u=d.matrixWorldInverse;for(let M=0,I=h.length;M<I;M++){const E=h[M];if(E.isSunLight){const C=i.sun[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(u),m++}else if(E.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),f++}else if(E.isSpotLight){const C=i.spot[v];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),v++}else if(E.isRectAreaLight){const C=i.rectArea[S];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),o.identity(),r.copy(E.matrixWorld),r.premultiply(u),o.extractRotation(r),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),S++}else if(E.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),g++}else if(E.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:i}}function dc(n){const e=new Vm(n),t=[],i=[],s=[];function r(f){m.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function l(f){i.push(f)}function c(f){s.push(f)}function h(){e.setup(t)}function d(f){e.setupView(t,f)}const m={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:h,setupLightsView:d,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function Wm(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new dc(n),e.set(s,[l])):r>=o.length?(l=new dc(n),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`,Ym=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Zm=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],pc=new st,Cs=new X,La=new X;function Km(n,e,t){let i=new $o;const s=new Oe,r=new Oe,o=new yt,l=new Qf,c=new jf,h={},d=t.maxTextureSize,m={[Pi]:tn,[tn]:Pi,[kn]:kn},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new Tt;v.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new $e(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let u=this.type;this.render=function(R,P,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===Fh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);const T=n.getRenderTarget(),D=n.getActiveCubeFace(),a=n.getActiveMipmapLevel(),_=n.state;_.setBlending(jn),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);const U=u!==this.type;U&&P.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(y=>y.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,y=R.length;A<y;A++){const w=R[A],N=w.shadow;if(N===void 0){Ge("WebGLShadowMap:",w,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const F=N.getFrameExtents();s.multiply(F),r.copy(N.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/F.x),s.x=r.x*F.x,N.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/F.y),s.y=r.y*F.y,N.mapSize.y=r.y));const k=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=k,N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Ds){if(w.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Mn(s.x,s.y,{format:Ii,type:Dn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),N.map.texture.name=w.name+".shadowMap",N.map.depthTexture=new ds(s.x,s.y,Pn),N.map.depthTexture.name=w.name+".shadowMapDepth",N.map.depthTexture.format=ti,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ht,N.map.depthTexture.magFilter=Ht}else w.isPointLight?(N.map=new xh(s.x),N.map.depthTexture=new qf(s.x,In)):(N.map=new Mn(s.x,s.y),N.map.depthTexture=new ds(s.x,s.y,In)),N.map.depthTexture.name=w.name+".shadowMap",N.map.depthTexture.format=ti,this.type===Fs?(N.map.depthTexture.compareFunction=k?Xo:Wo,N.map.depthTexture.minFilter=Kt,N.map.depthTexture.magFilter=Kt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ht,N.map.depthTexture.magFilter=Ht);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);const O=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();w.isPointLight!==!0&&N.updateMatrices(w,x);for(let B=0;B<O;B++){const j=N.getCamera(B);if(w.isPointLight){const le=N.camera,Ie=N.matrix,Te=w.distance||le.far;Te!==le.far&&(le.far=Te,le.updateProjectionMatrix()),Cs.setFromMatrixPosition(w.matrixWorld),le.position.copy(Cs),La.copy(le.position),La.add(Ym[B]),le.up.copy(Zm[B]),le.lookAt(La),le.updateMatrixWorld(),Ie.makeTranslation(-Cs.x,-Cs.y,-Cs.z),pc.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),N._frustum.setFromProjectionMatrix(pc,le.coordinateSystem,le.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,B),n.clear();else{B===0&&(n.setRenderTarget(N.map),n.clear());const le=N.getViewport(B);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),_.viewport(o)}i=N.getFrustum(B),E(P,x,j,w,this.type)}N.isPointLightShadow!==!0&&this.type===Ds&&M(N,x),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(T,D,a)};function M(R,P){const x=e.update(S);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new Mn(s.x,s.y,{format:Ii,type:Dn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,x,f,S,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,x,g,S,null)}function I(R,P,x,T){let D=null;const a=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(a!==void 0)D=a;else if(D=x.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const _=D.uuid,U=P.uuid;let A=h[_];A===void 0&&(A={},h[_]=A);let y=A[U];y===void 0&&(y=D.clone(),A[U]=y,P.addEventListener("dispose",C)),D=y}if(D.visible=P.visible,D.wireframe=P.wireframe,T===Ds?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:m[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const _=n.properties.get(D);_.light=x}return D}function E(R,P,x,T,D){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&D===Ds)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);const U=e.update(R),A=R.material;if(Array.isArray(A)){const y=U.groups;for(let w=0,N=y.length;w<N;w++){const F=y[w],k=A[F.materialIndex];if(k&&k.visible){const O=I(R,k,T,D);R.onBeforeShadow(n,R,P,x,U,O,F),n.renderBufferDirect(x,null,U,O,R,F),R.onAfterShadow(n,R,P,x,U,O,F)}}}else if(A.visible){const y=I(R,A,T,D);R.onBeforeShadow(n,R,P,x,U,y,null),n.renderBufferDirect(x,null,U,y,R,null),R.onAfterShadow(n,R,P,x,U,y,null)}}const _=R.children;for(let U=0,A=_.length;U<A;U++)E(_[U],P,x,T,D)}function C(R){R.target.removeEventListener("dispose",C);for(const x in h){const T=h[x],D=R.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function $m(n,e){function t(){let G=!1;const me=new yt;let H=null;const ne=new yt(0,0,0,0);return{setMask:function(re){H!==re&&!G&&(n.colorMask(re,re,re,re),H=re)},setLocked:function(re){G=re},setClear:function(re,J,Se,ae,Fe){Fe===!0&&(re*=ae,J*=ae,Se*=ae),me.set(re,J,Se,ae),ne.equals(me)===!1&&(n.clearColor(re,J,Se,ae),ne.copy(me))},reset:function(){G=!1,H=null,ne.set(-1,0,0,0)}}}function i(){let G=!1,me=!1,H=null,ne=null,re=null;return{setReversed:function(J){if(me!==J){const Se=e.get("EXT_clip_control");J?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),me=J;const ae=re;re=null,this.setClear(ae)}},getReversed:function(){return me},setTest:function(J){J?ie(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(J){H!==J&&!G&&(n.depthMask(J),H=J)},setFunc:function(J){if(me&&(J=_f[J]),ne!==J){switch(J){case Ha:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=J}},setLocked:function(J){G=J},setClear:function(J){re!==J&&(re=J,me&&(J=1-J),n.clearDepth(J))},reset:function(){G=!1,H=null,ne=null,re=null,me=!1}}}function s(){let G=!1,me=null,H=null,ne=null,re=null,J=null,Se=null,ae=null,Fe=null;return{setTest:function(ze){G||(ze?ie(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ze){me!==ze&&!G&&(n.stencilMask(ze),me=ze)},setFunc:function(ze,xt,ct){(H!==ze||ne!==xt||re!==ct)&&(n.stencilFunc(ze,xt,ct),H=ze,ne=xt,re=ct)},setOp:function(ze,xt,ct){(J!==ze||Se!==xt||ae!==ct)&&(n.stencilOp(ze,xt,ct),J=ze,Se=xt,ae=ct)},setLocked:function(ze){G=ze},setClear:function(ze){Fe!==ze&&(n.clearStencil(ze),Fe=ze)},reset:function(){G=!1,me=null,H=null,ne=null,re=null,J=null,Se=null,ae=null,Fe=null}}}const r=new t,o=new i,l=new s,c=new WeakMap,h=new WeakMap;let d={},m={},f={},g=new WeakMap,v=[],S=null,p=!1,u=null,M=null,I=null,E=null,C=null,R=null,P=null,x=new Ne(0,0,0),T=0,D=!1,a=null,_=null,U=null,A=null,y=null;const w=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=F>=2);let O=null,B={};const j=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),Ie=new yt().fromArray(j),Te=new yt().fromArray(le);function ue(G,me,H,ne){const re=new Uint8Array(4),J=n.createTexture();n.bindTexture(G,J),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<H;Se++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(me+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return J}const K={};K[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Bs),qe(!1),rt(fl),ie(n.CULL_FACE),He(jn);function ie(G){d[G]!==!0&&(n.enable(G),d[G]=!0)}function ge(G){d[G]!==!1&&(n.disable(G),d[G]=!1)}function Ae(G,me){return f[G]!==me?(n.bindFramebuffer(G,me),f[G]=me,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=me),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=me),!0):!1}function _e(G,me){let H=v,ne=!1;if(G){H=g.get(me),H===void 0&&(H=[],g.set(me,H));const re=G.textures;if(H.length!==re.length||H[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Se=re.length;J<Se;J++)H[J]=n.COLOR_ATTACHMENT0+J;H.length=re.length,ne=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,ne=!0);ne&&n.drawBuffers(H)}function ke(G){return S!==G?(n.useProgram(G),S=G,!0):!1}const tt={[rs]:n.FUNC_ADD,[Bh]:n.FUNC_SUBTRACT,[kh]:n.FUNC_REVERSE_SUBTRACT};tt[Hh]=n.MIN,tt[Gh]=n.MAX;const Xe={[Vh]:n.ZERO,[Wh]:n.ONE,[Xh]:n.SRC_COLOR,[Bc]:n.SRC_ALPHA,[Jh]:n.SRC_ALPHA_SATURATE,[Kh]:n.DST_COLOR,[Yh]:n.DST_ALPHA,[qh]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[$h]:n.ONE_MINUS_DST_COLOR,[Zh]:n.ONE_MINUS_DST_ALPHA,[Qh]:n.CONSTANT_COLOR,[jh]:n.ONE_MINUS_CONSTANT_COLOR,[ef]:n.CONSTANT_ALPHA,[tf]:n.ONE_MINUS_CONSTANT_ALPHA};function He(G,me,H,ne,re,J,Se,ae,Fe,ze){if(G===jn){p===!0&&(ge(n.BLEND),p=!1);return}if(p===!1&&(ie(n.BLEND),p=!0),G!==Oh){if(G!==u||ze!==D){if((M!==rs||C!==rs)&&(n.blendEquation(n.FUNC_ADD),M=rs,C=rs),ze)switch(G){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.ONE,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",G);break}else switch(G){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ul:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",G);break}I=null,E=null,R=null,P=null,x.set(0,0,0),T=0,u=G,D=ze}return}re=re||me,J=J||H,Se=Se||ne,(me!==M||re!==C)&&(n.blendEquationSeparate(tt[me],tt[re]),M=me,C=re),(H!==I||ne!==E||J!==R||Se!==P)&&(n.blendFuncSeparate(Xe[H],Xe[ne],Xe[J],Xe[Se]),I=H,E=ne,R=J,P=Se),(ae.equals(x)===!1||Fe!==T)&&(n.blendColor(ae.r,ae.g,ae.b,Fe),x.copy(ae),T=Fe),u=G,D=!1}function Ke(G,me){G.side===kn?ge(n.CULL_FACE):ie(n.CULL_FACE);let H=G.side===tn;me&&(H=!H),qe(H),G.blending===Os&&G.transparent===!1?He(jn):He(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const ne=G.stencilWrite;l.setTest(ne),ne&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(G){a!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),a=G)}function rt(G){G!==Nh?(ie(n.CULL_FACE),G!==_&&(G===fl?n.cullFace(n.BACK):G===zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),_=G}function gt(G){G!==U&&(N&&n.lineWidth(G),U=G)}function bt(G,me,H){G?(ie(n.POLYGON_OFFSET_FILL),(A!==me||y!==H)&&(A=me,y=H,o.getReversed()&&(me=-me),n.polygonOffset(me,H))):ge(n.POLYGON_OFFSET_FILL)}function ot(G){G?ie(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Mt(G){G===void 0&&(G=n.TEXTURE0+w-1),O!==G&&(n.activeTexture(G),O=G)}function W(G,me,H){H===void 0&&(O===null?H=n.TEXTURE0+w-1:H=O);let ne=B[H];ne===void 0&&(ne={type:void 0,texture:void 0},B[H]=ne),(ne.type!==G||ne.texture!==me)&&(O!==H&&(n.activeTexture(H),O=H),n.bindTexture(G,me||K[G]),ne.type=G,ne.texture=me)}function Dt(){const G=B[O];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ee(){try{n.compressedTexImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function b(){try{n.texSubImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function q(){try{n.texSubImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function ee(){try{n.compressedTexSubImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function ce(){try{n.texStorage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function he(){try{n.texStorage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function te(){try{n.texImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function se(){try{n.texImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function fe(G){return m[G]!==void 0?m[G]:n.getParameter(G)}function Pe(G,me){m[G]!==me&&(n.pixelStorei(G,me),m[G]=me)}function de(G){Ie.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function pe(G){Te.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Te.copy(G))}function Le(G,me){let H=h.get(me);H===void 0&&(H=new WeakMap,h.set(me,H));let ne=H.get(G);ne===void 0&&(ne=n.getUniformBlockIndex(me,G.name),H.set(G,ne))}function Ue(G,me){const ne=h.get(me).get(G);c.get(me)!==ne&&(n.uniformBlockBinding(me,ne,G.__bindingPointIndex),c.set(me,ne))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},m={},O=null,B={},f={},g=new WeakMap,v=[],S=null,p=!1,u=null,M=null,I=null,E=null,C=null,R=null,P=null,x=new Ne(0,0,0),T=0,D=!1,a=null,_=null,U=null,A=null,y=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:ie,disable:ge,bindFramebuffer:Ae,drawBuffers:_e,useProgram:ke,setBlending:He,setMaterial:Ke,setFlipSided:qe,setCullFace:rt,setLineWidth:gt,setPolygonOffset:bt,setScissorTest:ot,activeTexture:Mt,bindTexture:W,unbindTexture:Dt,compressedTexImage2D:Ee,compressedTexImage3D:z,texImage2D:te,texImage3D:se,pixelStorei:Pe,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:he,texSubImage2D:b,texSubImage3D:q,compressedTexSubImage2D:$,compressedTexSubImage3D:ee,scissor:de,viewport:pe,reset:We}}function Jm(n,e,t,i,s,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Oe,d=new WeakMap,m=new Set;let f;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(z,b){return v?new OffscreenCanvas(z,b):Fr("canvas")}function p(z,b,q){let $=1;const ee=Ee(z);if((ee.width>q||ee.height>q)&&($=q/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ce=Math.floor($*ee.width),he=Math.floor($*ee.height);f===void 0&&(f=S(ce,he));const te=b?S(ce,he):f;return te.width=ce,te.height=he,te.getContext("2d").drawImage(z,0,0,ce,he),Ge("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+he+")."),te}else return"data"in z&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),z;return z}function u(z){return z.generateMipmaps}function M(z){n.generateMipmap(z)}function I(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(z,b,q,$,ee,ce=!1){if(z!==null){if(n[z]!==void 0)return n[z];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let he;$&&(he=e.get("EXT_texture_norm16"),he||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=b;if(b===n.RED&&(q===n.FLOAT&&(te=n.R32F),q===n.HALF_FLOAT&&(te=n.R16F),q===n.UNSIGNED_BYTE&&(te=n.R8),q===n.UNSIGNED_SHORT&&he&&(te=he.R16_EXT),q===n.SHORT&&he&&(te=he.R16_SNORM_EXT)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(te=n.R8UI),q===n.UNSIGNED_SHORT&&(te=n.R16UI),q===n.UNSIGNED_INT&&(te=n.R32UI),q===n.BYTE&&(te=n.R8I),q===n.SHORT&&(te=n.R16I),q===n.INT&&(te=n.R32I)),b===n.RG&&(q===n.FLOAT&&(te=n.RG32F),q===n.HALF_FLOAT&&(te=n.RG16F),q===n.UNSIGNED_BYTE&&(te=n.RG8),q===n.UNSIGNED_SHORT&&he&&(te=he.RG16_EXT),q===n.SHORT&&he&&(te=he.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(te=n.RG8UI),q===n.UNSIGNED_SHORT&&(te=n.RG16UI),q===n.UNSIGNED_INT&&(te=n.RG32UI),q===n.BYTE&&(te=n.RG8I),q===n.SHORT&&(te=n.RG16I),q===n.INT&&(te=n.RG32I)),b===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(te=n.RGB8UI),q===n.UNSIGNED_SHORT&&(te=n.RGB16UI),q===n.UNSIGNED_INT&&(te=n.RGB32UI),q===n.BYTE&&(te=n.RGB8I),q===n.SHORT&&(te=n.RGB16I),q===n.INT&&(te=n.RGB32I)),b===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),q===n.UNSIGNED_INT&&(te=n.RGBA32UI),q===n.BYTE&&(te=n.RGBA8I),q===n.SHORT&&(te=n.RGBA16I),q===n.INT&&(te=n.RGBA32I)),b===n.RGB&&(q===n.UNSIGNED_SHORT&&he&&(te=he.RGB16_EXT),q===n.SHORT&&he&&(te=he.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),b===n.RGBA){const se=ce?zr:je.getTransfer(ee);q===n.FLOAT&&(te=n.RGBA32F),q===n.HALF_FLOAT&&(te=n.RGBA16F),q===n.UNSIGNED_BYTE&&(te=se===lt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&he&&(te=he.RGBA16_EXT),q===n.SHORT&&he&&(te=he.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(z,b){let q;return z?b===null||b===In||b===Hs?q=n.DEPTH24_STENCIL8:b===Pn?q=n.DEPTH32F_STENCIL8:b===ks&&(q=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===In||b===Hs?q=n.DEPTH_COMPONENT24:b===Pn?q=n.DEPTH_COMPONENT32F:b===ks&&(q=n.DEPTH_COMPONENT16),q}function R(z,b){return u(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ht&&z.minFilter!==Kt?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function P(z){const b=z.target;b.removeEventListener("dispose",P),T(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&m.delete(b)}function x(z){const b=z.target;b.removeEventListener("dispose",x),a(b)}function T(z){const b=i.get(z);if(b.__webglInit===void 0)return;const q=z.source,$=g.get(q);if($){const ee=$[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(z),Object.keys($).length===0&&g.delete(q)}i.remove(z)}function D(z){const b=i.get(z);n.deleteTexture(b.__webglTexture);const q=z.source,$=g.get(q);delete $[b.__cacheKey],o.memory.textures--}function a(z){const b=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let ee=0;ee<b.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=z.textures;for(let $=0,ee=q.length;$<ee;$++){const ce=i.get(q[$]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(q[$])}i.remove(z)}let _=0;function U(){_=0}function A(){return _}function y(z){_=z}function w(){const z=_;return z>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),_+=1,z}function N(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function F(z,b){const q=i.get(z);if(z.isVideoTexture&&W(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&q.__version!==z.version){const $=z.image;if($===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(q,z,b);return}}else z.isExternalTexture&&(q.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function k(z,b){const q=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&q.__version!==z.version){ge(q,z,b);return}else z.isExternalTexture&&(q.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function O(z,b){const q=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&q.__version!==z.version){ge(q,z,b);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function B(z,b){const q=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&q.__version!==z.version){Ae(q,z,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}const j={[Za]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},le={[Ht]:n.NEAREST,[rf]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Ie={[cf]:n.NEVER,[pf]:n.ALWAYS,[hf]:n.LESS,[Wo]:n.LEQUAL,[ff]:n.EQUAL,[Xo]:n.GEQUAL,[uf]:n.GREATER,[df]:n.NOTEQUAL};function Te(z,b){if(b.type===Pn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kt||b.magFilter===ea||b.magFilter===Zs||b.magFilter===Ri||b.minFilter===Kt||b.minFilter===ea||b.minFilter===Zs||b.minFilter===Ri)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,j[b.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,j[b.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,j[b.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,le[b.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,Ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ht||b.minFilter!==Zs&&b.minFilter!==Ri||b.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(z,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ue(z,b){let q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",P));const $=b.source;let ee=g.get($);ee===void 0&&(ee={},g.set($,ee));const ce=N(b);if(ce!==z.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ee[ce].usedTimes++;const he=ee[z.__cacheKey];he!==void 0&&(ee[z.__cacheKey].usedTimes--,he.usedTimes===0&&D(b)),z.__cacheKey=ce,z.__webglTexture=ee[ce].texture}return q}function K(z,b,q){return Math.floor(Math.floor(z/q)/b)}function ie(z,b,q,$){const ce=z.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,q,$,b.data);else{ce.sort((Pe,de)=>Pe.start-de.start);let he=0;for(let Pe=1;Pe<ce.length;Pe++){const de=ce[he],pe=ce[Pe],Le=de.start+de.count,Ue=K(pe.start,b.width,4),We=K(de.start,b.width,4);pe.start<=Le+1&&Ue===We&&K(pe.start+pe.count-1,b.width,4)===Ue?de.count=Math.max(de.count,pe.start+pe.count-de.start):(++he,ce[he]=pe)}ce.length=he+1;const te=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Pe=0,de=ce.length;Pe<de;Pe++){const pe=ce[Pe],Le=Math.floor(pe.start/4),Ue=Math.ceil(pe.count/4),We=Le%b.width,G=Math.floor(Le/b.width),me=Ue,H=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,We,G,me,H,q,$,b.data)}z.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function ge(z,b,q){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);const ee=ue(z,b),ce=b.source;t.bindTexture($,z.__webglTexture,n.TEXTURE0+q);const he=i.get(ce);if(ce.version!==he.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const H=je.getPrimaries(je.workingColorSpace),ne=b.colorSpace===gi?null:je.getPrimaries(b.colorSpace),re=b.colorSpace===gi||H===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let se=p(b.image,!1,s.maxTextureSize);se=Dt(b,se);const fe=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type);let de=E(b.internalFormat,fe,Pe,b.normalized,b.colorSpace,b.isVideoTexture);Te($,b);let pe;const Le=b.mipmaps,Ue=b.isVideoTexture!==!0,We=he.__version===void 0||ee===!0,G=ce.dataReady,me=R(b,se);if(b.isDepthTexture)de=C(b.format===Ci,b.type),We&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,de,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,de,se.width,se.height,0,fe,Pe,null));else if(b.isDataTexture)if(Le.length>0){Ue&&We&&t.texStorage2D(n.TEXTURE_2D,me,de,Le[0].width,Le[0].height);for(let H=0,ne=Le.length;H<ne;H++)pe=Le[H],Ue?G&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,pe.width,pe.height,fe,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,H,de,pe.width,pe.height,0,fe,Pe,pe.data);b.generateMipmaps=!1}else Ue?(We&&t.texStorage2D(n.TEXTURE_2D,me,de,se.width,se.height),G&&ie(b,se,fe,Pe)):t.texImage2D(n.TEXTURE_2D,0,de,se.width,se.height,0,fe,Pe,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,de,Le[0].width,Le[0].height,se.depth);for(let H=0,ne=Le.length;H<ne;H++)if(pe=Le[H],b.format!==Ln)if(fe!==null)if(Ue){if(G)if(b.layerUpdates.size>0){const re=ql(pe.width,pe.height,b.format,b.type);for(const J of b.layerUpdates){const Se=pe.data.subarray(J*re/pe.data.BYTES_PER_ELEMENT,(J+1)*re/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,J,pe.width,pe.height,1,fe,Se)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,se.depth,fe,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,de,pe.width,pe.height,se.depth,0,pe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,se.depth,fe,Pe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,de,pe.width,pe.height,se.depth,0,fe,Pe,pe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ue&&We&&t.texStorage2D(n.TEXTURE_2D,me,de,Le[0].width,Le[0].height);for(let H=0,ne=Le.length;H<ne;H++)pe=Le[H],b.format!==Ln?fe!==null?Ue?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,H,de,pe.width,pe.height,0,pe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?G&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,pe.width,pe.height,fe,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,H,de,pe.width,pe.height,0,fe,Pe,pe.data)}else if(b.isDataArrayTexture)if(Ue){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,de,se.width,se.height,se.depth),G)if(b.layerUpdates.size>0){const H=ql(se.width,se.height,b.format,b.type);for(const ne of b.layerUpdates){const re=se.data.subarray(ne*H/se.data.BYTES_PER_ELEMENT,(ne+1)*H/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,fe,Pe,re)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Pe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,se.width,se.height,se.depth,0,fe,Pe,se.data);else if(b.isData3DTexture)Ue?(We&&t.texStorage3D(n.TEXTURE_3D,me,de,se.width,se.height,se.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Pe,se.data)):t.texImage3D(n.TEXTURE_3D,0,de,se.width,se.height,se.depth,0,fe,Pe,se.data);else if(b.isFramebufferTexture){if(We)if(Ue)t.texStorage2D(n.TEXTURE_2D,me,de,se.width,se.height);else{let H=se.width,ne=se.height;for(let re=0;re<me;re++)t.texImage2D(n.TEXTURE_2D,re,de,H,ne,0,fe,Pe,null),H>>=1,ne>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const H=n.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),se.parentNode!==H){H.appendChild(se),m.add(b),H.onpaint=ne=>{const re=ne.changedElements;for(const J of m)re.includes(J.image)&&(J.needsUpdate=!0)},H.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{const re=n.RGBA,J=n.RGBA,Se=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,re,J,Se,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ue&&We){const H=Ee(Le[0]);t.texStorage2D(n.TEXTURE_2D,me,de,H.width,H.height)}for(let H=0,ne=Le.length;H<ne;H++)pe=Le[H],Ue?G&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,fe,Pe,pe):t.texImage2D(n.TEXTURE_2D,H,de,fe,Pe,pe);b.generateMipmaps=!1}else if(Ue){if(We){const H=Ee(se);t.texStorage2D(n.TEXTURE_2D,me,de,H.width,H.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Pe,se)}else t.texImage2D(n.TEXTURE_2D,0,de,fe,Pe,se);u(b)&&M($),he.__version=ce.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function Ae(z,b,q){if(b.image.length!==6)return;const $=ue(z,b),ee=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+q);const ce=i.get(ee);if(ee.version!==ce.__version||$===!0){t.activeTexture(n.TEXTURE0+q);const he=je.getPrimaries(je.workingColorSpace),te=b.colorSpace===gi?null:je.getPrimaries(b.colorSpace),se=b.colorSpace===gi||he===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const fe=b.isCompressedTexture||b.image[0].isCompressedTexture,Pe=b.image[0]&&b.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!fe&&!Pe?de[J]=p(b.image[J],!0,s.maxCubemapSize):de[J]=Pe?b.image[J].image:b.image[J],de[J]=Dt(b,de[J]);const pe=de[0],Le=r.convert(b.format,b.colorSpace),Ue=r.convert(b.type),We=E(b.internalFormat,Le,Ue,b.normalized,b.colorSpace),G=b.isVideoTexture!==!0,me=ce.__version===void 0||$===!0,H=ee.dataReady;let ne=R(b,pe);Te(n.TEXTURE_CUBE_MAP,b);let re;if(fe){G&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,We,pe.width,pe.height);for(let J=0;J<6;J++){re=de[J].mipmaps;for(let Se=0;Se<re.length;Se++){const ae=re[Se];b.format!==Ln?Le!==null?G?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,ae.width,ae.height,Le,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,We,ae.width,ae.height,0,ae.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,ae.width,ae.height,Le,Ue,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,We,ae.width,ae.height,0,Le,Ue,ae.data)}}}else{if(re=b.mipmaps,G&&me){re.length>0&&ne++;const J=Ee(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,We,J.width,J.height)}for(let J=0;J<6;J++)if(Pe){G?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Le,Ue,de[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,de[J].width,de[J].height,0,Le,Ue,de[J].data);for(let Se=0;Se<re.length;Se++){const Fe=re[Se].image[J].image;G?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Fe.width,Fe.height,Le,Ue,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,We,Fe.width,Fe.height,0,Le,Ue,Fe.data)}}else{G?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,Ue,de[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Le,Ue,de[J]);for(let Se=0;Se<re.length;Se++){const ae=re[Se];G?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Le,Ue,ae.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,We,Le,Ue,ae.image[J])}}}u(b)&&M(n.TEXTURE_CUBE_MAP),ce.__version=ee.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function _e(z,b,q,$,ee,ce){const he=r.convert(q.format,q.colorSpace),te=r.convert(q.type),se=E(q.internalFormat,he,te,q.normalized,q.colorSpace),fe=i.get(b),Pe=i.get(q);if(Pe.__renderTarget=b,!fe.__hasExternalTextures){const de=Math.max(1,b.width>>ce),pe=Math.max(1,b.height>>ce);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,se,de,pe,b.depth,0,he,te,null):t.texImage2D(ee,ce,se,de,pe,0,he,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,z),Mt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ee,Pe.__webglTexture,0,ot(b)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ee,Pe.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(z,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,z),b.depthBuffer){const $=b.depthTexture,ee=$&&$.isDepthTexture?$.type:null,ce=C(b.stencilBuffer,ee),he=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Mt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot(b),ce,b.width,b.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot(b),ce,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ce,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,z)}else{const $=b.textures;for(let ee=0;ee<$.length;ee++){const ce=$[ee],he=r.convert(ce.format,ce.colorSpace),te=r.convert(ce.type),se=E(ce.internalFormat,he,te,ce.normalized,ce.colorSpace);Mt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot(b),se,b.width,b.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot(b),se,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,se,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function tt(z,b,q){const $=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(b.depthTexture);if(ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Te(n.TEXTURE_CUBE_MAP,b.depthTexture);const fe=r.convert(b.depthTexture.format),Pe=r.convert(b.depthTexture.type);let de;b.depthTexture.format===ti?de=n.DEPTH_COMPONENT24:b.depthTexture.format===Ci&&(de=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,de,b.width,b.height,0,fe,Pe,null)}}else F(b.depthTexture,0);const ce=ee.__webglTexture,he=ot(b),te=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,se=b.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ti)Mt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,te,ce,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,se,te,ce,0);else if(b.depthTexture.format===Ci)Mt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,te,ce,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,se,te,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(z){const b=i.get(z),q=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const $=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=$}if(z.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let $=0;$<6;$++)tt(b.__webglFramebuffer[$],z,$);else{const $=z.texture.mipmaps;$&&$.length>0?tt(b.__webglFramebuffer[0],z,0):tt(b.__webglFramebuffer,z,0)}else if(q){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=n.createRenderbuffer(),ke(b.__webglDepthbuffer[$],z,!1);else{const ee=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ce)}}else{const $=z.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ke(b.__webglDepthbuffer,z,!1);else{const ee=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(z,b,q){const $=i.get(z);b!==void 0&&_e($.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Xe(z)}function Ke(z){const b=z.texture,q=i.get(z),$=i.get(b);z.addEventListener("dispose",x);const ee=z.textures,ce=z.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,o.memory.textures++),ce){q.__webglFramebuffer=[];for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[te]=[];for(let se=0;se<b.mipmaps.length;se++)q.__webglFramebuffer[te][se]=n.createFramebuffer()}else q.__webglFramebuffer[te]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)q.__webglFramebuffer[te]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(he)for(let te=0,se=ee.length;te<se;te++){const fe=i.get(ee[te]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(z.samples>0&&Mt(z)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){const se=ee[te];q.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[te]);const fe=r.convert(se.format,se.colorSpace),Pe=r.convert(se.type),de=E(se.internalFormat,fe,Pe,se.normalized,se.colorSpace,z.isXRRenderTarget===!0),pe=ot(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,de,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,q.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Te(n.TEXTURE_CUBE_MAP,b);for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)_e(q.__webglFramebuffer[te][se],z,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,se);else _e(q.__webglFramebuffer[te],z,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);u(b)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let te=0,se=ee.length;te<se;te++){const fe=ee[te],Pe=i.get(fe);let de=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(de=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Pe.__webglTexture),Te(de,fe),_e(q.__webglFramebuffer,z,fe,n.COLOR_ATTACHMENT0+te,de,0),u(fe)&&M(de)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(te=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,$.__webglTexture),Te(te,b),b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)_e(q.__webglFramebuffer[se],z,b,n.COLOR_ATTACHMENT0,te,se);else _e(q.__webglFramebuffer,z,b,n.COLOR_ATTACHMENT0,te,0);u(b)&&M(te),t.unbindTexture()}z.depthBuffer&&Xe(z)}function qe(z){const b=z.textures;for(let q=0,$=b.length;q<$;q++){const ee=b[q];if(u(ee)){const ce=I(z),he=i.get(ee).__webglTexture;t.bindTexture(ce,he),M(ce),t.unbindTexture()}}}const rt=[],gt=[];function bt(z){if(z.samples>0){if(Mt(z)===!1){const b=z.textures,q=z.width,$=z.height;let ee=n.COLOR_BUFFER_BIT;const ce=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(z),te=b.length>1;if(te)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const se=z.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Pe=i.get(b[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,q,$,0,0,q,$,ee,n.NEAREST),c===!0&&(rt.length=0,gt.length=0,rt.push(n.COLOR_ATTACHMENT0+fe),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(rt.push(ce),gt.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Pe=i.get(b[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&c){const b=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ot(z){return Math.min(s.maxSamples,z.samples)}function Mt(z){const b=i.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(z){const b=o.render.frame;d.get(z)!==b&&(d.set(z,b),z.update())}function Dt(z,b){const q=z.colorSpace,$=z.format,ee=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||q!==Nr&&q!==gi&&(je.getTransfer(q)===lt?($!==Ln||ee!==fn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",q)),b}function Ee(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=U,this.getTextureUnits=A,this.setTextureUnits=y,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=He,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qm(n,e){function t(i,s=gi){let r;const o=je.getTransfer(s);if(i===fn)return n.UNSIGNED_BYTE;if(i===Oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$c)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zc)return n.BYTE;if(i===Kc)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===Fo)return n.INT;if(i===In)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===Qc)return n.ALPHA;if(i===jc)return n.RGB;if(i===Ln)return n.RGBA;if(i===ti)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===ko)return n.RED;if(i===Ho)return n.RED_INTEGER;if(i===Ii)return n.RG;if(i===Go)return n.RG_INTEGER;if(i===Vo)return n.RGBA_INTEGER;if(i===Tr||i===Ar||i===Rr||i===Cr)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===Ja||i===Qa||i===ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eo||i===to||i===no||i===io||i===so||i===Ir||i===ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eo||i===to)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===no)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===io)return r.COMPRESSED_R11_EAC;if(i===so)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ir)return r.COMPRESSED_RG11_EAC;if(i===ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ao||i===oo||i===lo||i===co||i===ho||i===fo||i===uo||i===po||i===mo||i===go||i===xo||i===_o||i===vo||i===Mo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ao)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===co)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ho)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===po)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===go)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_o)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===So||i===yo||i===bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===So)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eo||i===wo||i===Dr||i===To)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new un({vertexShader:jm,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends Ui{constructor(e,t){super();const i=this;let s=null,r=1,o=null,l="local-floor",c=1,h=null,d=null,m=null,f=null,g=null,v=null;const S=typeof XRWebGLBinding<"u",p=new tg,u={},M=t.getContextAttributes();let I=null,E=null;const C=[],R=[],P=new Oe;let x=null,T=null;const D=new an;D.viewport=new yt;const a=new an;a.viewport=new yt;const _=[D,a],U=new ou;let A=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=C[K];return ie===void 0&&(ie=new ca,C[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=C[K];return ie===void 0&&(ie=new ca,C[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=C[K];return ie===void 0&&(ie=new ca,C[K]=ie),ie.getHandSpace()};function w(K){const ie=R.indexOf(K.inputSource);if(ie===-1)return;const ge=C[ie];ge!==void 0&&(ge.update(K.inputSource,K.frame,h||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",F);for(let K=0;K<C.length;K++){const ie=R[K];ie!==null&&(R[K]=null,C[K].disconnect(ie))}A=null,y=null,p.reset();for(const K in u)delete u[K];if(e.setRenderTarget(I),g=null,f=null,m=null,s=null,E=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",N),s.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ae=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?Ci:ti,Ae=M.stencil?Hs:In);const ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};m=this.getBinding(),f=m.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Mn(f.textureWidth,f.textureHeight,{format:Ln,type:fn,depthTexture:new ds(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Mn(g.framebufferWidth,g.framebufferHeight,{format:Ln,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(l),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(K){for(let ie=0;ie<K.removed.length;ie++){const ge=K.removed[ie],Ae=R.indexOf(ge);Ae>=0&&(R[Ae]=null,C[Ae].disconnect(ge))}for(let ie=0;ie<K.added.length;ie++){const ge=K.added[ie];let Ae=R.indexOf(ge);if(Ae===-1){for(let ke=0;ke<C.length;ke++)if(ke>=R.length){R.push(ge),Ae=ke;break}else if(R[ke]===null){R[ke]=ge,Ae=ke;break}if(Ae===-1)break}const _e=C[Ae];_e&&_e.connect(ge)}}const k=new X,O=new X;function B(K,ie,ge){k.setFromMatrixPosition(ie.matrixWorld),O.setFromMatrixPosition(ge.matrixWorld);const Ae=k.distanceTo(O),_e=ie.projectionMatrix.elements,ke=ge.projectionMatrix.elements,tt=_e[14]/(_e[10]-1),Xe=_e[14]/(_e[10]+1),He=(_e[9]+1)/_e[5],Ke=(_e[9]-1)/_e[5],qe=(_e[8]-1)/_e[0],rt=(ke[8]+1)/ke[0],gt=tt*qe,bt=tt*rt,ot=Ae/(-qe+rt),Mt=ot*-qe;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(ot),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const W=tt+ot,Dt=Xe+ot,Ee=gt-Mt,z=bt+(Ae-Mt),b=He*Xe/Dt*W,q=Ke*Xe/Dt*W;K.projectionMatrix.makePerspective(Ee,z,b,q,W,Dt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function j(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,ge=K.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),U.near=a.near=D.near=ie,U.far=a.far=D.far=ge,(A!==U.near||y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),A=U.near,y=U.far),U.layers.mask=K.layers.mask|6,D.layers.mask=U.layers.mask&-5,a.layers.mask=U.layers.mask&-3;const Ae=K.parent,_e=U.cameras;j(U,Ae);for(let ke=0;ke<_e.length;ke++)j(_e[ke],Ae);_e.length===2?B(U,D,a):U.projectionMatrix.copy(D.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),le(K,U,Ae)};function le(K,ie,ge){ge===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Br*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(K){return u[K]};let Ie=null;function Te(K,ie){if(d=ie.getViewerPose(h||o),v=ie,d!==null){const ge=d.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Ae=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,Ae=!0);for(let Xe=0;Xe<ge.length;Xe++){const He=ge[Xe];let Ke=null;if(g!==null)Ke=g.getViewport(He);else{const rt=m.getViewSubImage(f,He);Ke=rt.viewport,Xe===0&&(e.setRenderTargetTextures(E,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(E))}let qe=_[Xe];qe===void 0&&(qe=new an,qe.layers.enable(Xe),qe.viewport=new yt,_[Xe]=qe),qe.matrix.fromArray(He.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(He.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Xe===0&&(U.matrix.copy(qe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ae===!0&&U.cameras.push(qe)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=i.getBinding();const Xe=m.getDepthInformation(ge[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,s.renderState)}if(_e&&_e.includes("camera-access")&&S){e.state.unbindTexture(),m=i.getBinding();for(let Xe=0;Xe<ge.length;Xe++){const He=ge[Xe].camera;if(He){let Ke=u[He];Ke||(Ke=new fh,u[He]=Ke);const qe=m.getCameraImage(He);Ke.sourceTexture=qe}}}}for(let ge=0;ge<C.length;ge++){const Ae=R[ge],_e=C[ge];Ae!==null&&_e!==void 0&&_e.update(Ae,ie,h||o)}Ie&&Ie(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const ue=new mh;ue.setAnimationLoop(Te),this.setAnimationLoop=function(K){Ie=K},this.dispose=function(){}}}const ig=new st,yh=new Ve;yh.set(-1,0,0,0,1,0,0,0,1);function sg(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,uh(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,M,I,E){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(p,u):u.isMeshLambertMaterial?(r(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(p,u),m(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&g(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),v(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),S(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&l(p,u)):u.isPointsMaterial?c(p,u,M,I):u.isSpriteMaterial?h(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=e.get(u),I=M.envMap,E=M.envMapRotation;I&&(p.envMap.value=I,p.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(E)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yh),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function l(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,M,I){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=I*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function m(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const M=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rg(n,e,t,i){let s={},r={},o=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,C){const R=C.program;i.uniformBlockBinding(E,R)}function h(E,C){let R=s[E.id];R===void 0&&(p(E),R=d(E),s[E.id]=R,E.addEventListener("dispose",M));const P=C.program;i.updateUBOMapping(E,P);const x=e.render.frame;r[E.id]!==x&&(f(E),r[E.id]=x)}function d(E){const C=m();E.__bindingPointIndex=C;const R=n.createBuffer(),P=E.__size,x=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,R),R}function m(){for(let E=0;E<l;E++)if(o.indexOf(E)===-1)return o.push(E),E;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const C=s[E.id],R=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let x=0,T=R.length;x<T;x++){const D=R[x];if(Array.isArray(D))for(let a=0,_=D.length;a<_;a++)g(D[a],x,a,P);else g(D,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,C,R,P){if(S(E,C,R,P)===!0){const x=E.__offset,T=E.value;if(Array.isArray(T)){let D=0;for(let a=0;a<T.length;a++){const _=T[a],U=u(_);v(_,E.__data,D),typeof _!="number"&&typeof _!="boolean"&&!_.isMatrix3&&!ArrayBuffer.isView(_)&&(D+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,E.__data)}}function v(E,C,R){typeof E=="number"||typeof E=="boolean"?C[0]=E:E.isMatrix3?(C[0]=E.elements[0],C[1]=E.elements[1],C[2]=E.elements[2],C[3]=0,C[4]=E.elements[3],C[5]=E.elements[4],C[6]=E.elements[5],C[7]=0,C[8]=E.elements[6],C[9]=E.elements[7],C[10]=E.elements[8],C[11]=0):ArrayBuffer.isView(E)?C.set(new E.constructor(E.buffer,E.byteOffset,C.length)):E.toArray(C,R)}function S(E,C,R,P){const x=E.value,T=C+"_"+R;if(P[T]===void 0)return typeof x=="number"||typeof x=="boolean"?P[T]=x:ArrayBuffer.isView(x)?P[T]=x.slice():P[T]=x.clone(),!0;{const D=P[T];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return P[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function p(E){const C=E.uniforms;let R=0;const P=16;for(let T=0,D=C.length;T<D;T++){const a=Array.isArray(C[T])?C[T]:[C[T]];for(let _=0,U=a.length;_<U;_++){const A=a[_],y=Array.isArray(A.value)?A.value:[A.value];for(let w=0,N=y.length;w<N;w++){const F=y[w],k=u(F),O=R%P,B=O%k.boundary,j=O+B;R+=B,j!==0&&P-j<k.storage&&(R+=P-j),A.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=R,R+=k.storage}}}const x=R%P;return x>0&&(R+=P-x),E.__size=R,E.__cache={},this}function u(E){const C={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(C.boundary=4,C.storage=4):E.isVector2?(C.boundary=8,C.storage=8):E.isVector3||E.isColor?(C.boundary=16,C.storage=12):E.isVector4?(C.boundary=16,C.storage=16):E.isMatrix3?(C.boundary=48,C.storage=48):E.isMatrix4?(C.boundary=64,C.storage=64):E.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(C.boundary=16,C.storage=E.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",E),C}function M(E){const C=E.target;C.removeEventListener("dispose",M);const R=o.indexOf(C.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function I(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:h,dispose:I}}const ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function og(){return zn===null&&(zn=new ch(ag,16,16,Ii,Dn),zn.name="DFG_LUT",zn.minFilter=Kt,zn.magFilter=Kt,zn.wrapS=Qn,zn.wrapT=Qn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class lg{constructor(e={}){const{canvas:t=gf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:g=fn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const S=g,p=new Set([Vo,Go,Ho]),u=new Set([fn,In,ks,Hs,Oo,Bo]),M=new Uint32Array(4),I=new Int32Array(4),E=new X;let C=null,R=null;const P=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let a=!1,_=null,U=null,A=null,y=null;this._outputColorSpace=sn;let w=0,N=0,F=null,k=-1,O=null;const B=new yt,j=new yt;let le=null;const Ie=new Ne(0);let Te=0,ue=t.width,K=t.height,ie=1,ge=null,Ae=null;const _e=new yt(0,0,ue,K),ke=new yt(0,0,ue,K);let tt=!1;const Xe=new $o;let He=!1,Ke=!1;const qe=new st,rt=new X,gt=new yt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Mt(){return F===null?ie:1}let W=i;function Dt(L,V){return t.getContext(L,V)}let Ee,z,b,q,$,ee,ce,he,te,se,fe,Pe,de,pe,Le,Ue,We,G,me,H,ne,re,J;try{const L={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",xt,!1),W===null){const V="webgl2";if(W=Dt(V,L),W===null)throw Dt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(L){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),nt("WebGLRenderer: "+L.message),L}function Se(){Ee=new o0(W),Ee.init(),ne=new Qm(W,Ee),z=new Jp(W,Ee,e,ne),b=new $m(W,Ee),z.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),U=W.createFramebuffer(),A=W.createFramebuffer(),y=W.createFramebuffer(),q=new h0(W),$=new zm,ee=new Jm(W,Ee,b,$,z,ne,q),ce=new a0(D),he=new uu(W),re=new Kp(W,he),te=new l0(W,he,q,re),se=new u0(W,te,he,re,q),G=new f0(W,z,ee),Le=new Qp($),fe=new Nm(D,ce,Ee,z,re,Le),Pe=new sg(D,$),de=new Om,pe=new Wm(Ee),We=new Zp(D,ce,b,se,v,c),Ue=new Km(D,se,z),J=new rg(W,q,z,b),me=new $p(W,Ee,q),H=new c0(W,Ee,q),q.programs=fe.programs,D.capabilities=z,D.extensions=Ee,D.properties=$,D.renderLists=de,D.shadowMap=Ue,D.state=b,D.info=q}S!==fn&&(T=new p0(S,t.width,t.height,l,s,r));const ae=new ng(D,W);this.xr=ae,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=Ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(L){L!==void 0&&(ie=L,this.setSize(ue,K,!1))},this.getSize=function(L){return L.set(ue,K)},this.setSize=function(L,V,Q=!0){if(ae.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=L,K=V,t.width=Math.floor(L*ie),t.height=Math.floor(V*ie),Q===!0&&(t.style.width=L+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(ue*ie,K*ie).floor()},this.setDrawingBufferSize=function(L,V,Q){ue=L,K=V,ie=Q,t.width=Math.floor(L*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,L,V)},this.setEffects=function(L){if(S===fn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let V=0;V<L.length;V++)if(L[V].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(_e)},this.setViewport=function(L,V,Q,Y){L.isVector4?_e.set(L.x,L.y,L.z,L.w):_e.set(L,V,Q,Y),b.viewport(B.copy(_e).multiplyScalar(ie).round())},this.getScissor=function(L){return L.copy(ke)},this.setScissor=function(L,V,Q,Y){L.isVector4?ke.set(L.x,L.y,L.z,L.w):ke.set(L,V,Q,Y),b.scissor(j.copy(ke).multiplyScalar(ie).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(L){b.setScissorTest(tt=L)},this.setOpaqueSort=function(L){ge=L},this.setTransparentSort=function(L){Ae=L},this.getClearColor=function(L){return L.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(L=!0,V=!0,Q=!0){let Y=0;if(L){let Z=!1;if(F!==null){const ye=F.texture.format;Z=p.has(ye)}if(Z){const ye=F.texture.type,we=u.has(ye),Me=We.getClearColor(),Re=We.getClearAlpha(),De=Me.r,Ye=Me.g,Je=Me.b;we?(M[0]=De,M[1]=Ye,M[2]=Je,M[3]=Re,W.clearBufferuiv(W.COLOR,0,M)):(I[0]=De,I[1]=Ye,I[2]=Je,I[3]=Re,W.clearBufferiv(W.COLOR,0,I))}else Y|=W.COLOR_BUFFER_BIT}V&&(Y|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&W.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),_=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),We.dispose(),de.dispose(),pe.dispose(),$.dispose(),ce.dispose(),se.dispose(),re.dispose(),J.dispose(),fe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Be),ae.removeEventListener("sessionend",pt),nn.stop()};function Fe(L){L.preventDefault(),Or("WebGLRenderer: Context Lost."),a=!0}function ze(){Or("WebGLRenderer: Context Restored."),a=!1;const L=q.autoReset,V=Ue.enabled,Q=Ue.autoUpdate,Y=Ue.needsUpdate,Z=Ue.type;Se(),q.autoReset=L,Ue.enabled=V,Ue.autoUpdate=Q,Ue.needsUpdate=Y,Ue.type=Z}function xt(L){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ct(L){const V=L.target;V.removeEventListener("dispose",ct),zt(V)}function zt(L){dn(L),$.remove(L)}function dn(L){const V=$.get(L).programs;V!==void 0&&(V.forEach(function(Q){fe.releaseProgram(Q)}),L.isShaderMaterial&&fe.releaseShaderCache(L))}this.renderBufferDirect=function(L,V,Q,Y,Z,ye){V===null&&(V=bt);const we=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Me=Ih(L,V,Q,Y,Z);b.setMaterial(Y,we);let Re=Q.index,De=1;if(Y.wireframe===!0){if(Re=te.getWireframeAttribute(Q),Re===void 0)return;De=2}const Ye=Q.drawRange,Je=Q.attributes.position;let Ce=Ye.start*De,at=(Ye.start+Ye.count)*De;ye!==null&&(Ce=Math.max(Ce,ye.start*De),at=Math.min(at,(ye.start+ye.count)*De)),Re!==null?(Ce=Math.max(Ce,0),at=Math.min(at,Re.count)):Je!=null&&(Ce=Math.max(Ce,0),at=Math.min(at,Je.count));const At=at-Ce;if(At<0||At===1/0)return;re.setup(Z,Y,Me,Q,Re);let _t,ut=me;if(Re!==null&&(_t=he.get(Re),ut=H,ut.setIndex(_t)),Z.isMesh)Y.wireframe===!0?(b.setLineWidth(Y.wireframeLinewidth*Mt()),ut.setMode(W.LINES)):ut.setMode(W.TRIANGLES);else if(Z.isLine){let Gt=Y.linewidth;Gt===void 0&&(Gt=1),b.setLineWidth(Gt*Mt()),Z.isLineSegments?ut.setMode(W.LINES):Z.isLineLoop?ut.setMode(W.LINE_LOOP):ut.setMode(W.LINE_STRIP)}else Z.isPoints?ut.setMode(W.POINTS):Z.isSprite&&ut.setMode(W.TRIANGLES);if(Z.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Gt=Z._multiDrawStarts,be=Z._multiDrawCounts,Qt=Z._multiDrawCount,it=Re?he.get(Re).bytesPerElement:1,pn=$.get(Y).currentProgram.getUniforms();for(let Un=0;Un<Qt;Un++)pn.setValue(W,"_gl_DrawID",Un),ut.render(Gt[Un]/it,be[Un])}else if(Z.isInstancedMesh)ut.renderInstances(Ce,At,Z.count);else if(Q.isInstancedBufferGeometry){const Gt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,be=Math.min(Q.instanceCount,Gt);ut.renderInstances(Ce,At,be)}else ut.render(Ce,At)};function yn(L,V,Q,Y){_!==null&&L.isNodeMaterial&&_.setObject(Y,L),He===!0&&Le.setState(L,Q,!1),L.transparent===!0&&L.side===kn&&L.forceSinglePass===!1?(L.side=tn,L.needsUpdate=!0,Ys(L,V,Y),L.side=Pi,L.needsUpdate=!0,Ys(L,V,Y),L.side=kn):Ys(L,V,Y)}this.compile=function(L,V,Q=null){Q===null&&(Q=L),_!==null&&_.renderStart(L,V,Q),R=pe.get(Q),R.init(V),x.push(R),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),L!==Q&&L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),R.setupLights(),_!==null&&_.updateLights(R.state.lightsArray),Ke=this.localClippingEnabled,He=Le.init(this.clippingPlanes,Ke),He===!0&&Le.setGlobalState(this.clippingPlanes,V),_!==null&&Ue.render(R.state.shadowsArray,Q,V);const Y=new Set;return L.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const ye=Z.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){const Me=ye[we];yn(Me,Q,V,Z),Y.add(Me)}else yn(ye,Q,V,Z),Y.add(ye)}),R=x.pop(),_!==null&&_.renderEnd(),Y},this.compileAsync=function(L,V,Q=null){const Y=this.compile(L,V,Q);return new Promise(Z=>{function ye(){if(Y.forEach(function(we){const Re=$.get(we).currentProgram;(Re===void 0||Re.isReady())&&Y.delete(we)}),Y.size===0){Z(L);return}setTimeout(ye,10)}Ee.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ft=null;function Jt(L){Ft&&Ft(L)}function Be(){nn.stop()}function pt(){nn.start()}const nn=new mh;nn.setAnimationLoop(Jt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(L){Ft=L,ae.setAnimationLoop(L),L===null?nn.stop():nn.start()},ae.addEventListener("sessionstart",Be),ae.addEventListener("sessionend",pt),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(a===!0)return;_!==null&&_.renderStart(L,V);const Q=ae.enabled===!0&&ae.isPresenting===!0,Y=T!==null&&(F===null||Q)&&T.begin(D,F);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(V),V=ae.getCamera()),L.isScene===!0&&L.onBeforeRender(D,L,V,F),R=pe.get(L,x.length),R.init(V),R.state.textureUnits=ee.getTextureUnits(),x.push(R),qe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Xe.setFromProjectionMatrix(qe,Gn,V.reversedDepth),Ke=this.localClippingEnabled,He=Le.init(this.clippingPlanes,Ke),C=de.get(L,P.length),C.init(),P.push(C),ae.enabled===!0&&ae.isPresenting===!0){const we=D.xr.getDepthSensingMesh();we!==null&&Xs(we,V,-1/0,D.sortObjects)}Xs(L,V,0,D.sortObjects),C.finish(),_!==null&&_.updateLights(R.state.lightsArray),D.sortObjects===!0&&C.sort(ge,Ae),ot=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ot&&We.addToRenderList(C,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Le.beginShadows();const Z=R.state.shadowsArray;if(Ue.render(Z,L,V),He===!0&&Le.endShadows(),(Y&&T.hasRenderPass())===!1){const we=C.opaque,Me=C.transmissive;if(R.setupLights(),V.isArrayCamera){const Re=V.cameras;if(Me.length>0)for(let De=0,Ye=Re.length;De<Ye;De++){const Je=Re[De];qs(we,Me,L,Je)}ot&&We.render(L);for(let De=0,Ye=Re.length;De<Ye;De++){const Je=Re[De];_s(C,L,Je,Je.viewport)}}else Me.length>0&&qs(we,Me,L,V),ot&&We.render(L),_s(C,L,V)}F!==null&&N===0&&(ee.updateMultisampleRenderTarget(F),ee.updateRenderTargetMipmap(F)),Y&&T.end(D),L.isScene===!0&&L.onAfterRender(D,L,V),re.resetDefaultState(),k=-1,O=null,x.pop(),x.length>0?(R=x[x.length-1],ee.setTextureUnits(R.state.textureUnits),He===!0&&Le.setGlobalState(D.clippingPlanes,R.state.camera)):R=null,P.pop(),P.length>0?C=P[P.length-1]:C=null,_!==null&&_.renderEnd()};function Xs(L,V,Q,Y){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLightProbeGrid)R.pushLightProbeGrid(L);else if(L.isLight)R.pushLight(L),L.castShadow&&R.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(Xe)){Y&&gt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(qe);const we=se.update(L),Me=L.material;Me.visible&&C.push(L,we,Me,Q,gt.z,null,V)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(Xe))){const we=se.update(L),Me=L.material;if(Y&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),gt.copy(L.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),gt.copy(we.boundingSphere.center)),gt.applyMatrix4(L.matrixWorld).applyMatrix4(qe)),Array.isArray(Me)){const Re=we.groups;for(let De=0,Ye=Re.length;De<Ye;De++){const Je=Re[De],Ce=Me[Je.materialIndex];Ce&&Ce.visible&&C.push(L,we,Ce,Q,gt.z,Je,V)}}else Me.visible&&C.push(L,we,Me,Q,gt.z,null,V)}}const ye=L.children;for(let we=0,Me=ye.length;we<Me;we++)Xs(ye[we],V,Q,Y)}function _s(L,V,Q,Y){const{opaque:Z,transmissive:ye,transparent:we}=L;R.setupLightsView(Q),He===!0&&Le.setGlobalState(D.clippingPlanes,Q),Y&&b.viewport(B.copy(Y)),Z.length>0&&Fi(Z,V,Q),ye.length>0&&Fi(ye,V,Q),we.length>0&&Fi(we,V,Q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function qs(L,V,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){const Ce=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new Mn(1,1,{generateMipmaps:!0,type:Ce?Dn:fn,minFilter:Ri,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ye=R.state.transmissionRenderTarget[Y.id],we=Y.viewport||B;ye.setSize(we.z*D.transmissionResolutionScale,we.w*D.transmissionResolutionScale);const Me=D.getRenderTarget(),Re=D.getActiveCubeFace(),De=D.getActiveMipmapLevel();D.setRenderTarget(ye),D.getClearColor(Ie),Te=D.getClearAlpha(),Te<1&&D.setClearColor(16777215,.5),D.clear(),ot&&We.render(Q);const Ye=D.toneMapping;D.toneMapping=Wn;const Je=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),He===!0&&Le.setGlobalState(D.clippingPlanes,Y),Fi(L,Q,Y),ee.updateMultisampleRenderTarget(ye),ee.updateRenderTargetMipmap(ye),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let at=0,At=V.length;at<At;at++){const _t=V[at],{object:ut,geometry:Gt,material:be,group:Qt}=_t;if(be.side===kn&&ut.layers.test(Y.layers)){const it=be.side;be.side=tn,be.needsUpdate=!0,al(ut,Q,Y,Gt,be,Qt),be.side=it,be.needsUpdate=!0,Ce=!0}}Ce===!0&&(ee.updateMultisampleRenderTarget(ye),ee.updateRenderTargetMipmap(ye))}D.setRenderTarget(Me,Re,De),D.setClearColor(Ie,Te),Je!==void 0&&(Y.viewport=Je),D.toneMapping=Ye}function Fi(L,V,Q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,ye=L.length;Z<ye;Z++){const we=L[Z],{object:Me,geometry:Re,group:De}=we;let Ye=we.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),Me.layers.test(Q.layers)&&al(Me,V,Q,Re,Ye,De)}}function al(L,V,Q,Y,Z,ye){_!==null&&Z.isNodeMaterial&&_.setObject(L,Z),L.onBeforeRender(D,V,Q,Y,Z,ye),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Z.onBeforeRender(D,V,Q,Y,L,ye),Z.transparent===!0&&Z.side===kn&&Z.forceSinglePass===!1?(Z.side=tn,Z.needsUpdate=!0,D.renderBufferDirect(Q,V,Y,Z,L,ye),Z.side=Pi,Z.needsUpdate=!0,D.renderBufferDirect(Q,V,Y,Z,L,ye),Z.side=kn):D.renderBufferDirect(Q,V,Y,Z,L,ye),L.onAfterRender(D,V,Q,Y,Z,ye)}function Ys(L,V,Q){V.isScene!==!0&&(V=bt);const Y=$.get(L),Z=R.state.lights,ye=R.state.shadowsArray,we=Z.state.version,Me=fe.getParameters(L,Z.state,ye,V,Q,R.state.lightProbeGridArray),Re=fe.getProgramCacheKey(Me);let De=Y.programs;Y.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;const Ye=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Y.envMap=ce.get(L.envMap||Y.environment,Ye),Y.envMapRotation=Y.environment!==null&&L.envMap===null?V.environmentRotation:L.envMapRotation,De===void 0&&(L.addEventListener("dispose",ct),De=new Map,Y.programs=De);let Je=De.get(Re);if(Je!==void 0){if(Y.currentProgram===Je&&Y.lightsStateVersion===we)return ll(L,Me),Je}else Me.uniforms=fe.getUniforms(L),_!==null&&L.isNodeMaterial&&_.build(L,Q,Me),L.onBeforeCompile(Me,D),Je=fe.acquireProgram(Me,Re),De.set(Re,Je),Y.uniforms=Me.uniforms;const Ce=Y.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ce.clippingPlanes=Le.uniform),ll(L,Me),Y.needsLights=Uh(L),Y.lightsStateVersion=we,Y.needsLights&&(Ce.ambientLightColor.value=Z.state.ambient,Ce.lightProbe.value=Z.state.probe,Ce.sunLights.value=Z.state.sun,Ce.sunLightShadows.value=Z.state.sunShadow,Ce.directionalLights.value=Z.state.directional,Ce.directionalLightShadows.value=Z.state.directionalShadow,Ce.spotLights.value=Z.state.spot,Ce.spotLightShadows.value=Z.state.spotShadow,Ce.rectAreaLights.value=Z.state.rectArea,Ce.ltc_1.value=Z.state.rectAreaLTC1,Ce.ltc_2.value=Z.state.rectAreaLTC2,Ce.pointLights.value=Z.state.point,Ce.pointLightShadows.value=Z.state.pointShadow,Ce.hemisphereLights.value=Z.state.hemi,Ce.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ce.sunShadowCascade.value=Z.state.sunShadowCascade,Ce.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=Z.state.spotLightMatrix,Ce.spotLightMap.value=Z.state.spotLightMap,Ce.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=R.state.lightProbeGridArray.length>0,Y.currentProgram=Je,Y.uniformsList=null,Je}function ol(L){if(L.uniformsList===null){const V=L.currentProgram.getUniforms();L.uniformsList=Pr.seqWithValue(V.seq,L.uniforms)}return L.uniformsList}function ll(L,V){const Q=$.get(L);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Lh(L,V){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;E.setFromMatrixPosition(V.matrixWorld);for(let Q=0,Y=L.length;Q<Y;Q++){const Z=L[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(E))return Z}return null}function Ih(L,V,Q,Y,Z){V.isScene!==!0&&(V=bt),ee.resetTextureUnits();const ye=V.fog,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Me=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:je.workingColorSpace,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,De=ce.get(Y.envMap||we,Re),Ye=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ce=!!Q.morphAttributes.position,at=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let _t=Wn;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_t=D.toneMapping);const ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Gt=ut!==void 0?ut.length:0,be=$.get(Y),Qt=R.state.lights;if(He===!0&&(Ke===!0||L!==O)){const mt=L===O&&Y.id===k;Le.setState(Y,L,mt)}let it=!1;Y.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Qt.state.version||be.outputColorSpace!==Me||Z.isBatchedMesh&&be.batching===!1||!Z.isBatchedMesh&&be.batching===!0||Z.isBatchedMesh&&be.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&be.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&be.instancing===!1||!Z.isInstancedMesh&&be.instancing===!0||Z.isSkinnedMesh&&be.skinning===!1||!Z.isSkinnedMesh&&be.skinning===!0||Z.isInstancedMesh&&be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&be.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&be.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&be.instancingMorph===!1&&Z.morphTexture!==null||be.envMap!==De||Y.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Le.numPlanes||be.numIntersection!==Le.numIntersection)||be.vertexAlphas!==Ye||be.vertexTangents!==Je||be.morphTargets!==Ce||be.morphNormals!==at||be.morphColors!==At||be.toneMapping!==_t||be.morphTargetsCount!==Gt||!!be.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,be.__version=Y.version);let pn=be.currentProgram;it===!0&&(pn=Ys(Y,V,Z),_&&Y.isNodeMaterial&&_.onUpdateProgram(Y,pn,be));let Un=!1,ni=!1,Oi=!1;const ht=pn.getUniforms(),Et=be.uniforms;if(b.useProgram(pn.program)&&(Un=!0,ni=!0,Oi=!0),Y.id!==k&&(k=Y.id,ni=!0),be.needsLights){const mt=Lh(R.state.lightProbeGridArray,Z);be.lightProbeGrid!==mt&&(be.lightProbeGrid=mt,ni=!0)}if(Un||O!==L){b.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ht.setValue(W,"projectionMatrix",L.projectionMatrix),ht.setValue(W,"viewMatrix",L.matrixWorldInverse);const si=ht.map.cameraPosition;si!==void 0&&si.setValue(W,rt.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&ht.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),O!==L&&(O=L,ni=!0,Oi=!0)}if(be.needsLights&&(Qt.state.sunShadowMap.length>0&&ht.setValue(W,"sunShadowMap",Qt.state.sunShadowMap,ee),Qt.state.directionalShadowMap.length>0&&ht.setValue(W,"directionalShadowMap",Qt.state.directionalShadowMap,ee),Qt.state.spotShadowMap.length>0&&ht.setValue(W,"spotShadowMap",Qt.state.spotShadowMap,ee),Qt.state.pointShadowMap.length>0&&ht.setValue(W,"pointShadowMap",Qt.state.pointShadowMap,ee)),Z.isSkinnedMesh){ht.setOptional(W,Z,"bindMatrix"),ht.setOptional(W,Z,"bindMatrixInverse");const mt=Z.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(W,"boneTexture",mt.boneTexture,ee))}Z.isBatchedMesh&&(ht.setOptional(W,Z,"batchingTexture"),ht.setValue(W,"batchingTexture",Z._matricesTexture,ee),ht.setOptional(W,Z,"batchingIdTexture"),ht.setValue(W,"batchingIdTexture",Z._indirectTexture,ee),ht.setOptional(W,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ht.setValue(W,"batchingColorTexture",Z._colorsTexture,ee));const ii=Q.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&G.update(Z,Q,pn),(ni||be.receiveShadow!==Z.receiveShadow)&&(be.receiveShadow=Z.receiveShadow,ht.setValue(W,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(Et.envMapIntensity.value=V.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=og()),ni){if(ht.setValue(W,"toneMappingExposure",D.toneMappingExposure),be.needsLights&&Dh(Et,Oi),ye&&Y.fog===!0&&Pe.refreshFogUniforms(Et,ye),Pe.refreshMaterialUniforms(Et,Y,ie,K,R.state.transmissionRenderTarget[L.id]),be.needsLights&&be.lightProbeGrid){const mt=be.lightProbeGrid;Et.probesSH.value=mt.texture,Et.probesMin.value.copy(mt.boundingBox.min),Et.probesMax.value.copy(mt.boundingBox.max),Et.probesResolution.value.copy(mt.resolution)}Pr.upload(W,ol(be),Et,ee)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Pr.upload(W,ol(be),Et,ee),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(W,"center",Z.center),ht.setValue(W,"modelViewMatrix",Z.modelViewMatrix),ht.setValue(W,"normalMatrix",Z.normalMatrix),ht.setValue(W,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const mt=Y.uniformsGroups;for(let si=0,Bi=mt.length;si<Bi;si++){const hl=mt[si];J.update(hl,pn),J.bind(hl,pn)}}return pn}function Dh(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.sunLights.needsUpdate=V,L.sunLightShadows.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function Uh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(L,V,Q){const Y=$.get(L);Y.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(L.texture).__webglTexture=V,$.get(L.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,V){const Q=$.get(L);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(L,V=0,Q=0){F=L,w=V,N=Q;let Y=null,Z=!1,ye=!1;if(L){const Me=$.get(L);if(Me.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(W.FRAMEBUFFER,Me.__webglFramebuffer),B.copy(L.viewport),j.copy(L.scissor),le=L.scissorTest,b.viewport(B),b.scissor(j),b.setScissorTest(le),k=-1;return}else if(Me.__webglFramebuffer===void 0)ee.setupRenderTarget(L);else if(Me.__hasExternalTextures)ee.rebindTextures(L,$.get(L.texture).__webglTexture,$.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ye=L.depthTexture;if(Me.__boundDepthTexture!==Ye){if(Ye!==null&&$.has(Ye)&&(L.width!==Ye.image.width||L.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(L)}}const Re=L.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ye=!0);const De=$.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(De[V])?Y=De[V][Q]:Y=De[V],Z=!0):L.samples>0&&ee.useMultisampledRTT(L)===!1?Y=$.get(L).__webglMultisampledFramebuffer:Array.isArray(De)?Y=De[Q]:Y=De,B.copy(L.viewport),j.copy(L.scissor),le=L.scissorTest}else B.copy(_e).multiplyScalar(ie).floor(),j.copy(ke).multiplyScalar(ie).floor(),le=tt;if(Q!==0&&(Y=U),b.bindFramebuffer(W.FRAMEBUFFER,Y)&&b.drawBuffers(L,Y),b.viewport(B),b.scissor(j),b.setScissorTest(le),Z){const Me=$.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Me.__webglTexture,Q)}else if(ye){const Me=V;for(let Re=0;Re<L.textures.length;Re++){const De=$.get(L.textures[Re]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Re,De.__webglTexture,Q,Me)}}else if(L!==null&&Q!==0){const Me=$.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Me.__webglTexture,Q)}k=-1};function cl(L){const V=$.get(L);return(V.__readFormat!==L.format||V.__readType!==L.type)&&(V.__readFormat=L.format,V.__readType=L.type,V.__formatReadable=z.textureFormatReadable(L.format),V.__typeReadable=z.textureTypeReadable(L.type)),V}this.readRenderTargetPixels=function(L,V,Q,Y,Z,ye,we,Me=0){if(!(L&&L.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=$.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){b.bindFramebuffer(W.FRAMEBUFFER,Re);try{const De=L.textures[Me],Ye=De.format,Je=De.type;L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Me);const Ce=cl(De);if(Ce.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=L.width-Y&&Q>=0&&Q<=L.height-Z&&W.readPixels(V,Q,Y,Z,ne.convert(Ye),ne.convert(Je),ye)}finally{const De=F!==null?$.get(F).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(L,V,Q,Y,Z,ye,we,Me=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=$.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(V>=0&&V<=L.width-Y&&Q>=0&&Q<=L.height-Z){b.bindFramebuffer(W.FRAMEBUFFER,Re);const De=L.textures[Me],Ye=De.format,Je=De.type;L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Me);const Ce=cl(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,at),W.bufferData(W.PIXEL_PACK_BUFFER,ye.byteLength,W.STREAM_READ),W.readPixels(V,Q,Y,Z,ne.convert(Ye),ne.convert(Je),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const At=F!==null?$.get(F).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,At);const _t=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await xf(W,_t,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,at),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ye),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(at),W.deleteSync(_t),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,V=null,Q=0){const Y=Math.pow(2,-Q),Z=Math.floor(L.image.width*Y),ye=Math.floor(L.image.height*Y),we=V!==null?V.x:0,Me=V!==null?V.y:0;ee.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,we,Me,Z,ye),b.unbindTexture()},this.copyTextureToTexture=function(L,V,Q=null,Y=null,Z=0,ye=0){let we,Me,Re,De,Ye,Je,Ce,at,At;const _t=L.isCompressedTexture?L.mipmaps[ye]:L.image;if(Q!==null)we=Q.max.x-Q.min.x,Me=Q.max.y-Q.min.y,Re=Q.isBox3?Q.max.z-Q.min.z:1,De=Q.min.x,Ye=Q.min.y,Je=Q.isBox3?Q.min.z:0;else{const Et=Math.pow(2,-Z);we=Math.floor(_t.width*Et),Me=Math.floor(_t.height*Et),L.isDataArrayTexture?Re=_t.depth:L.isData3DTexture?Re=Math.floor(_t.depth*Et):Re=1,De=0,Ye=0,Je=0}Y!==null?(Ce=Y.x,at=Y.y,At=Y.z):(Ce=0,at=0,At=0);const ut=ne.convert(V.format),Gt=ne.convert(V.type);let be;V.isData3DTexture?(ee.setTexture3D(V,0),be=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ee.setTexture2DArray(V,0),be=W.TEXTURE_2D_ARRAY):(ee.setTexture2D(V,0),be=W.TEXTURE_2D),b.activeTexture(W.TEXTURE0),b.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);const Qt=b.getParameter(W.UNPACK_ROW_LENGTH),it=b.getParameter(W.UNPACK_IMAGE_HEIGHT),pn=b.getParameter(W.UNPACK_SKIP_PIXELS),Un=b.getParameter(W.UNPACK_SKIP_ROWS),ni=b.getParameter(W.UNPACK_SKIP_IMAGES);b.pixelStorei(W.UNPACK_ROW_LENGTH,_t.width),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t.height),b.pixelStorei(W.UNPACK_SKIP_PIXELS,De),b.pixelStorei(W.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(W.UNPACK_SKIP_IMAGES,Je);const Oi=L.isDataArrayTexture||L.isData3DTexture,ht=V.isDataArrayTexture||V.isData3DTexture;if(L.isDepthTexture){const Et=$.get(L),ii=$.get(V),mt=$.get(Et.__renderTarget),si=$.get(ii.__renderTarget);b.bindFramebuffer(W.READ_FRAMEBUFFER,mt.__webglFramebuffer),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Bi=0;Bi<Re;Bi++)Oi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$.get(L).__webglTexture,Z,Je+Bi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$.get(V).__webglTexture,ye,At+Bi)),W.blitFramebuffer(De,Ye,we,Me,Ce,at,we,Me,W.DEPTH_BUFFER_BIT,W.NEAREST);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Z!==0||L.isRenderTargetTexture||$.has(L)){const Et=$.get(L),ii=$.get(V);b.bindFramebuffer(W.READ_FRAMEBUFFER,A),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,y);for(let mt=0;mt<Re;mt++)Oi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Et.__webglTexture,Z,Je+mt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Et.__webglTexture,Z),ht?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ii.__webglTexture,ye,At+mt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ii.__webglTexture,ye),Z!==0?W.blitFramebuffer(De,Ye,we,Me,Ce,at,we,Me,W.COLOR_BUFFER_BIT,W.NEAREST):ht?W.copyTexSubImage3D(be,ye,Ce,at,At+mt,De,Ye,we,Me):W.copyTexSubImage2D(be,ye,Ce,at,De,Ye,we,Me);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ht?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(be,ye,Ce,at,At,we,Me,Re,ut,Gt,_t.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(be,ye,Ce,at,At,we,Me,Re,ut,_t.data):W.texSubImage3D(be,ye,Ce,at,At,we,Me,Re,ut,Gt,_t):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ye,Ce,at,we,Me,ut,Gt,_t.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ye,Ce,at,_t.width,_t.height,ut,_t.data):W.texSubImage2D(W.TEXTURE_2D,ye,Ce,at,we,Me,ut,Gt,_t);b.pixelStorei(W.UNPACK_ROW_LENGTH,Qt),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,it),b.pixelStorei(W.UNPACK_SKIP_PIXELS,pn),b.pixelStorei(W.UNPACK_SKIP_ROWS,Un),b.pixelStorei(W.UNPACK_SKIP_IMAGES,ni),ye===0&&V.generateMipmaps&&W.generateMipmap(be),b.unbindTexture()},this.initRenderTarget=function(L){$.get(L).__webglFramebuffer===void 0&&ee.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ee.setTextureCube(L,0):L.isData3DTexture?ee.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ee.setTexture2DArray(L,0):ee.setTexture2D(L,0),b.unbindTexture()},this.resetState=function(){w=0,N=0,F=null,b.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function cg(){if(typeof matchMedia!="function"||typeof window>"u")return"high";const n=new URLSearchParams(location.search).get("gfx");if(n==="low"||n==="medium"||n==="high")return n;const e=matchMedia("(pointer: coarse)").matches,t=Math.min(innerWidth,innerHeight)<520,i=navigator.hardwareConcurrency||4,s=navigator.deviceMemory||4;return e&&(i<=4||s<=3)||t?"low":e?"medium":"high"}const hg={low:{msaa:0,halation:!1,pixelRatio:1.25,shadowMap:1024,people:70,particles:1400},medium:{msaa:2,halation:!0,pixelRatio:1.5,shadowMap:1536,people:100,particles:2e3},high:{msaa:4,halation:!0,pixelRatio:2,shadowMap:2048,people:130,particles:2600}},fg=cg(),rn={...hg[fg]};function ug(n,e){return rn.degraded?!1:(rn.degraded=!0,rn.pixelRatio=Math.min(rn.pixelRatio,1),n.setPixelRatio(rn.pixelRatio),n.shadowMap.enabled&&(n.shadowMap.enabled=!1,e.castShadow=!1),!0)}const bh="bellbrook.settings",mc={sound:!0,light:"day",paint:"red",view:0};function dg(){try{return{...mc,...JSON.parse(localStorage.getItem(bh)||"{}")}}catch{return{...mc}}}const Ia=dg(),Tn={get:n=>Ia[n],set(n,e){Ia[n]=e;try{localStorage.setItem(bh,JSON.stringify(Ia))}catch{}}},Zt=(n,e,t)=>n<e?e:n>t?t:n,pg=(n,e,t)=>n+(e-n)*t,St=(n,e,t,i)=>pg(n,e,1-Math.exp(-t*i)),on=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n));function Jr(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const zs=44,Cn=12,vn=zs+Cn,Ct=6,Sn=Ct*vn/2,gc=3,kt=n=>-Sn+n*vn,xc=n=>kt(n)+Cn/2,_c=n=>kt(n+1)-Cn/2,vc=["Acorn Lane","Maple Street","Daisy Avenue","High Street","Honey Lane","Pebble Road","Willow Way"],Mc=["Orchard Road","Clover Street","Bluebell Road","Market Street","Puddle Lane","Teapot Street","Seaside Parade"],Sc=n=>Math.max(-Sn,Math.min(Sn,n));function Gr(n,e){const t=Math.max(0,Math.min(Ct,Math.round((n+Sn)/vn))),i=Math.max(0,Math.min(Ct,Math.round((e+Sn)/vn))),s={x:kt(t),z:Sc(e),axis:"ns",index:t},r={x:Sc(n),z:kt(i),axis:"ew",index:i},o=Math.hypot(s.x-n,s.z-e),l=Math.hypot(r.x-n,r.z-e),c=o<=l?s:r;return c.dist=Math.min(o,l),c}function yc(n){if(n.axis==="ns"){const t=Math.max(0,Math.min(Ct-1,Math.floor((n.z+Sn)/vn)));return[{i:n.index,j:t},{i:n.index,j:t+1}]}const e=Math.max(0,Math.min(Ct-1,Math.floor((n.x+Sn)/vn)));return[{i:e,j:n.index},{i:e+1,j:n.index}]}const Da=n=>({x:kt(n.i),z:kt(n.j)}),bc=(n,e)=>Math.abs(n.x-e.x)+Math.abs(n.z-e.z);function mg(n,e,t,i){const s=Gr(n,e),r=Gr(t,i),o=[{x:s.x,z:s.z}];if(s.axis===r.axis&&s.index===r.index)return o.push({x:r.x,z:r.z}),o;let c=null;for(const g of yc(s))for(const v of yc(r)){const S=bc(s,Da(g))+Math.abs(g.i-v.i)*vn+Math.abs(g.j-v.j)*vn+bc(Da(v),r);(!c||S<c.cost)&&(c={a:g,b:v,cost:S})}const{a:h,b:d}=c,m=r.axis==="ew"?{i:h.i,j:d.j}:{i:d.i,j:h.j};for(const g of[h,m,d])o.push(Da(g));o.push({x:r.x,z:r.z});const f=[];for(const g of o){const v=f[f.length-1];v&&Math.abs(v.x-g.x)<.01&&Math.abs(v.z-g.z)<.01||f.push(g)}return f}const Qe=.15,Ot=206,Nt={minX:-198,maxX:198,minZ:-200,maxZ:Ot-3},hn={minX:51,maxX:61,minZ:Ot-6,maxZ:Ot+44},Bt={x:56,z:Ot+56,r:15},Eh=[Nt,hn],gg=[["farm","fields","houses","houses","school","houses"],["houses","houses","shops","shops","houses","houses"],["houses","park","downtown","townhall","shops","houses"],["houses","playpark","downtown","station","shops","build"],["houses","shops","market","hospital","houses","houses"],["houses","houses","shops","police","houses","houses"]],hi={walls:[16243140,16508833,13231326,13033201,15910622,16446429,14405104,16369312,14938304],roofs:[14245947,5995953,5212763,9329307,13190202,8018504,4157327],towers:[15259061,14257770,10470361,11064762,15848074,13088992,15115685,16049871],doors:[4157327,13190202,5212763,15906077,9329307,3098712],awnings:[14831690,4165586,5222506,15903035,14248616,9071321,3126696]},xg=[{name:"the bakery",sign:16172395,top:"cupcake"},{name:"the toy shop",sign:4165586,top:"teddy"},{name:"the ice cream shop",sign:15899842,top:"cone"},{name:"the flower shop",sign:7191402,top:null},{name:"the book shop",sign:9071321,top:null},{name:"the sweet shop",sign:14831690,top:"lolly"},{name:"the café",sign:10119754,top:"teacup"},{name:"the doughnut shop",sign:15903035,top:"donut"},{name:"the pet shop",sign:3126696,top:null},{name:"the bike shop",sign:3098712,top:null},{name:"the pizza place",sign:14245947,top:null},{name:"the music shop",sign:5995953,top:null},{name:"the greengrocer",sign:5212763,top:null},{name:"the hat shop",sign:13088992,top:null},{name:"the barber",sign:4157327,top:null},{name:"the post office",sign:14831690,top:null}],_g={window:1,bin:.6,tree:1.3,hay:1.5,hut:1.1,stall:1.1,skip:.9,bbq:.6};function vg(n=3188830720){const e=Jr(n),t=(y=0,w=1)=>y+e()*(w-y),i=y=>y[Math.floor(e()*y.length)%y.length],s=y=>e()<y,r={blocks:[],buildings:[],windows:[],doors:[],awnings:[],signs:[],trees:[],boxes:[],circles:[],ground:[],discs:[],props:[],lamps:[],spots:[],loops:[],ponds:[],crew:[],spawn:null},o=(y,w,N,F,k)=>r.boxes.push({minX:y-N/2,maxX:y+N/2,minZ:w-F/2,maxZ:w+F/2,h:k}),l=(y,w,N,F={})=>{const k={type:y,x:w,z:N,rot:0,...F};return r.props.push(k),k},c=(y,w,N,F,k,O={})=>{const B={id:r.spots.length,kind:y,x:w,y:N,z:F,name:k,size:_g[y]??1,nx:0,nz:0,...O};return r.spots.push(B),B},h=(y,w,N={})=>{const F={x:y,z:w,h:N.h??t(4.5,6.5),r:N.r??t(1.8,2.6),color:N.color??i([7323482,5942866,8571230,5218122,9949026]),shape:N.shape??(s(.2)?"cone":"ball")};return r.trees.push(F),r.circles.push({x:y,z:w,r:.45}),F},d=(y,w)=>{c("tree",y.x,y.h*.66+y.r*.8,y.z,`a tree ${w}`,{tree:y}),c("cat",y.x,y.h*.78,y.z,`a tree ${w}`,{tree:y})},m={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]};function f(y){const w={floorH:3.2,roof:"flat",roofH:0,faces:["n","s","e","w"],fire:[],door:null,shopfront:!1,trim:16777215,...y};w.h=w.floors*w.floorH,r.buildings.push(w),o(w.x,w.z,w.w,w.d,w.h+w.roofH);const N=r.windows.length;for(const k of w.faces){const[O,B]=m[k],j=k==="n"||k==="s"?w.w:w.d,le=(k==="n"||k==="s"?w.d:w.w)/2,Ie=w.x+O*le,Te=w.z+B*le,ue=-B,K=O,ie=Math.max(1,Math.floor((j-1.6)/(w.winGap??3))),ge=j/ie;for(let Ae=0;Ae<w.floors;Ae++){const _e=Ae===0;for(let ke=0;ke<ie;ke++){const tt=-j/2+ge*(ke+.5);if(_e&&w.door===k&&Math.abs(tt)<ge*.6)continue;const He=_e&&w.shopfront&&k===w.door,Ke={x:Ie+ue*tt,y:Ae*w.floorH+(He?1.35:w.floorH*.55),z:Te+K*tt,nx:O,nz:B,w:He?Math.min(ge-.8,3.2):Math.min(1.3,ge-.7),h:He?1.9:1.45,fire:w.fire.includes(k)&&!He&&Ae*w.floorH<11,building:w};r.windows.push(Ke)}}w.door===k&&r.doors.push({x:Ie,z:Te,nx:O,nz:B,w:w.doorW??1.5,h:w.doorH??2.3,color:w.doorColor??i(hi.doors)})}const F=r.windows.slice(N).filter(k=>k.fire);for(let k=0;k<Math.min(F.length,w.fireCount??1);k++){const O=F.splice(Math.floor(e()*F.length),1)[0];c("window",O.x+O.nx*.9,O.y,O.z+O.nz*.9,w.name,{nx:O.nx,nz:O.nz,window:O})}return w}function g(y,w){return w==="n"?Mc[y.r]:w==="s"?Mc[y.r+1]:w==="w"?vc[y.c]:vc[y.c+1]}function v(y){const{x0:w,x1:N,z0:F,z1:k,cx:O}=y;for(const B of[0,1])for(const j of[0,1]){const le=B===0?"n":"s",Ie=j===0?"w":"e",Te=t(8.6,10.4),ue=t(7.4,8.4),K=O+(j?10:-10)+t(-.6,.6),ie=B===0?F+3+5+ue/2:k-3-5-ue/2,ge=s(.6)?2:1,Ae=g(y,le),_e=i(hi.walls),ke=f({kind:"house",name:`a house on ${Ae}`,x:K,z:ie,w:Te,d:ue,floors:ge,floorH:3,color:_e,roof:"gable",roofH:t(2.4,3.2),roofColor:i(hi.roofs),door:le,faces:[le,Ie],fire:[le,Ie],chimney:s(.6)}),tt=le==="n"?-1:1,He=ie+tt*ue/2,Ke=le==="n"?F+3:k-3;r.ground.push({x0:K-.8,x1:K+.8,z0:Math.min(He,Ke),z1:Math.max(He,Ke),kind:"path"}),l("flowers",K-2.6,(He+Ke)/2,{w:2.6,d:1.2,color:i([15882874,15913019,11565792,16777215,15895099])}),l("flowers",K+2.6,(He+Ke)/2,{w:2.6,d:1.2,color:i([15882874,15913019,11565792,16777215,15895099])}),l("postbox",K+1.4,Ke-tt*.6,{color:ke.doorColor??13190202});const qe=K+(j?1:-1)*(Te/2+2.6),rt=h(qe,(He+Ke)/2+tt*.4,{h:t(5,6.5),r:t(2,2.4),shape:"ball"});if(d(rt,`outside a house on ${Ae}`),s(.5)){const bt=K-(j?1:-1)*(Te/2-.6);l("bin",bt,Ke-tt*.8,{color:i([4165450,4157327,5593696])}),c("bin",bt,.9,Ke-tt*.8,`a bin on ${Ae}`)}const gt=ie-tt*(ue/2+4.5);h(K+t(-3,3),gt,{h:t(4.5,6)}),s(.5)&&l("washing",K+(j?-2:2),gt+tt*1.5,{rot:0})}l("hedge",O,y.cz,{w:1.2,d:zs-14,h:1.3,rot:0}),l("hedge",O,y.cz,{w:zs-14,d:1.2,h:1.3,rot:0}),r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:k-3,kind:"garden"})}function S(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;for(const j of["n","s"]){const Ie=j==="n"?F+3+6.25+.3:k-3-6.25-.3;for(let Te=0;Te<3;Te++){const ue=y.shopList.pop(),K=O+(Te-1)*12.4,ie=i([2,2,3]),ge=f({kind:"shop",name:ue.name,x:K,z:Ie,w:12,d:12.5,floors:ie,floorH:3.4,color:i(hi.walls),door:j,doorColor:ue.sign,shopfront:!0,faces:[j,...Te===0?["w"]:Te===2?["e"]:[]],fire:[j],parapet:!0,rooftop:ue.top,signColor:ue.sign}),Ae=j==="n"?-1:1,_e=Ie+Ae*12.5/2;r.awnings.push({x:K,z:_e,nx:0,nz:Ae,w:11,color:i(hi.awnings),stripes:s(.7)}),r.signs.push({x:K,y:3,z:_e+Ae*.15,nx:0,nz:Ae,w:7,color:ue.sign}),ue.top&&l(ue.top,K,Ie,{y:ge.h+.3}),l("bench",K+4,_e+Ae*2.2,{rot:0})}}r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:k-3,kind:"plaza"}),h(O-8,B,{h:5,shape:"ball"}),h(O+8,B,{h:5,shape:"ball"})}function p(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;for(const j of[0,1])for(const le of[0,1]){const Ie=O+(le?9.5:-9.5),Te=B+(j?9.5:-9.5),ue=j?"s":"n",K=le?"e":"w",ie=Math.floor(t(4,7.99));f({kind:"tower",name:`a tall building on ${g(y,ue)}`,x:Ie,z:Te,w:17,d:17,floors:ie,color:i(hi.towers),door:ue,shopfront:!0,faces:[ue,K],fire:[ue,K],fireCount:2,parapet:!0,rooftop:s(.45)?"watertower":"vents"})}r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:k-3,kind:"plaza"})}function u(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;f({kind:"townhall",name:"the town hall",x:O,z:B-8,w:28,d:16,floors:2,floorH:4.2,color:16049871,door:"s",doorW:3,doorH:3.4,doorColor:8014378,faces:["s","e","w"],parapet:!0,winGap:3.4}),l("clocktower",O,B-8,{y:8.4}),o(O,B-8,6,6,26),r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:k-3,kind:"square"}),l("fountain",O,B+8,{r:4}),r.circles.push({x:O,z:B+8,r:4.3});for(const j of[-1,1])l("flowers",O+j*12,B+8,{w:6,d:3,color:15882874}),h(O+j*17,B+15,{h:5.5,shape:"cone"}),l("bench",O+j*8,B+15,{rot:Math.PI})}function M(y){const{x0:w,x1:N,z0:F,z1:k,cx:O}=y,B=F+3+8,j=B+8;f({kind:"station",name:"the fire station",x:O-2,z:B,w:32,d:16,floors:2,floorH:4.6,color:13125178,faces:["s","w"],parapet:!0,winGap:3.6,trim:16774368});for(let le=-1;le<=1;le++)l("baydoor",O-2+le*9.5,j,{w:7,h:5.2,nz:1});l("bell",O-2,j+.4,{y:7.1,nz:1}),l("stationsign",O-2,j+.1,{y:8.2,nz:1}),l("hosetower",N-3-3,B+2,{h:17,nz:1}),o(N-3-3,B+2,5,5,17),r.ground.push({x0:w+3,x1:N-3,z0:j,z1:k-3,kind:"apron"}),l("flagpole",w+6,k-7,{h:10}),l("hydrant",w+4,j+1);for(let le=0;le<3;le++)r.crew.push({x:O-15+le*1.6,z:j+2.5+le%2*.8});r.spawn={x:O-2,z:j+10,heading:Math.PI}}function I(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;f({kind:"hospital",name:"the hospital",x:O,z:B-4,w:32,d:20,floors:3,floorH:3.6,color:16185590,door:"s",doorW:3,doorColor:5943456,faces:["s","e","w"],parapet:!0,stripe:7129268}),l("heartsign",O,B+6.2,{y:9.5,nz:1}),r.ground.push({x0:w+3,x1:N-3,z0:B+6,z1:k-3,kind:"apron"}),l("parked",O-10,B+12,{vehicle:"ambulance",heading:Math.PI/2}),r.circles.push({x:O-10,z:B+12,r:2.2}),h(O+14,B+14,{h:5})}function E(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;f({kind:"police",name:"the police station",x:O,z:B-6,w:28,d:16,floors:2,floorH:3.6,color:12111848,door:"s",doorColor:3100559,faces:["s","e","w"],parapet:!0,stripe:3100559}),l("bluelamp",O,B+2.2,{y:3.4}),r.ground.push({x0:w+3,x1:N-3,z0:B+2,z1:k-3,kind:"apron"}),l("parked",O+9,B+10,{vehicle:"police",heading:Math.PI/2}),r.circles.push({x:O+9,z:B+10,r:2.2}),h(O-14,B+12,{h:5,shape:"cone"})}function C(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;f({kind:"school",name:"the school",x:O,z:k-3-8,w:34,d:14,floors:2,floorH:3.6,color:16507018,door:"s",doorW:2.6,doorColor:4165586,faces:["s","e","w"],fire:["s"],roof:"gable",roofH:3,roofColor:4165586}),l("schoolclock",O,k-3-1+.1,{y:8.6,nz:1}),r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:B+2,kind:"pitch"}),l("goal",O-16,B-9,{rot:Math.PI/2}),l("goal",O+16,B-9,{rot:-Math.PI/2}),l("slide",O-12,B-2,{rot:0}),l("swings",O+12,B-2,{rot:0});const j=h(N-5,F+5,{h:6,shape:"ball"});d(j,"by the school"),l("bin",w+5,B,{color:4157327}),c("bin",w+5,.9,B,"a bin by the school")}function R(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:k-3,kind:"square"});const j=["apples","flowers","cheese","fish","cakes","veg","toys","bread","honey"];let le=0;for(const Ie of[-1,0,1])for(const Te of[-1,0,1]){if(Te===0&&Ie===0)continue;const ue=O+Te*12,K=B+Ie*12,ie=hi.awnings[le%hi.awnings.length];l("stall",ue,K,{color:ie,goods:j[le%j.length]}),o(ue,K,4,2.6,2.8),c("stall",ue,1.8,K+1.8*Math.sign(Ie||1),"the market",{nz:Math.sign(Ie||1)}),le++}l("fountain",O,B,{r:2.6,small:!0}),r.circles.push({x:O,z:B,r:2.9})}function P(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:k-3,kind:"dirt"}),l("frame",O+6,B+6,{w:18,d:14,floors:3}),o(O+6,B+6,18,14,10),l("crane",O-12,B+12,{h:30}),o(O-12,B+12,3,3,30),l("digger",O-10,B-8,{rot:.6}),r.circles.push({x:O-10,z:B-8,r:2.2}),l("sandpile",O+10,B-10,{r:4}),l("skip",O-2,B-14,{rot:0}),o(O-2,B-14,4,2.2,1.6),c("skip",O-2,1.4,B-15.4,"the building site",{nz:-1});for(let j=0;j<6;j++)l("cone",w+6+j*3,F+5)}function x(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;r.ground.push({x0:w+3,x1:N-3,z0:F+3,z1:k-3,kind:"meadow"}),f({kind:"barn",name:"the big red barn",x:O-4,z:B-4,w:14,d:18,floors:1,floorH:6,color:13125178,door:"e",doorW:5,doorH:4.6,doorColor:16774368,faces:["e"],roof:"barn",roofH:5,roofColor:8010288,ridge:"z",winGap:6}),l("silo",O-15,B-12,{h:13}),r.circles.push({x:O-15,z:B-12,r:3.2});for(const[j,le]of[[O+10,B+12],[O+14,B+6],[O+4,B+15]])l("hay",j,le,{r:1.5}),r.circles.push({x:j,z:le,r:1.6}),c("hay",j,1.6,le,"the farm");l("tractor",O+12,B-12,{rot:-.5}),r.circles.push({x:O+12,z:B-12,r:1.8}),l("fence",O,B,{w:zs-7,d:zs-7})}function T(y){const{x0:w,x1:N,z0:F,z1:k,cx:O,cz:B}=y;r.ground.push({x0:w+3,x1:O+2,z0:F+3,z1:k-3,kind:"field"}),r.ground.push({x0:O+2,x1:N-3,z0:F+3,z1:k-3,kind:"meadow"}),l("windmill",O+11,B-9,{h:12}),r.circles.push({x:O+11,z:B-9,r:2.6});for(let j=0;j<4;j++)l("cow",O+7+j%2*6,B+4+Math.floor(j/2)*6,{rot:t(0,6.28)});for(const[j,le]of[[O-6,B-12],[O-12,B+10]])l("hay",j,le,{r:1.5}),r.circles.push({x:j,z:le,r:1.6}),c("hay",j,1.6,le,"the hay field")}function D(y,w){const{x0:N,x1:F,z0:k,z1:O,cx:B,cz:j}=y;if(r.ground.push({x0:N+3,x1:F-3,z0:k+3,z1:O-3,kind:"park"}),r.ground.push({x0:B-1.3,x1:B+1.3,z0:k+3,z1:O-3,kind:"path"}),r.ground.push({x0:N+3,x1:F-3,z0:j-1.3,z1:j+1.3,kind:"path"}),w)l("slide",B+9,j-9,{rot:Math.PI/2}),l("swings",B-9,j-9,{rot:0}),l("roundabout",B+9,j+9),l("sandpit",B-9,j+9,{r:3.5}),l("seesaw",B-9,j+1.8,{rot:0});else{const Ie=B+9,Te=j-9;r.discs.push({x:Ie,z:Te,r:8,kind:"pond"}),r.ponds.push({x:Ie,z:Te,r:8});for(let ue=0;ue<4;ue++)l("duck",Ie+Math.cos(ue*1.7)*4,Te+Math.sin(ue*1.7)*4,{rot:ue*1.7,pond:{x:Ie,z:Te}});l("picnic",B-9,j+9,{rot:.3}),l("bbq",B-13,j+12),c("bbq",B-13,1,j+12,"the barbecue in the park")}[[N+6,k+6],[F-6,O-6],[N+6,O-6],[F-6,k+6],[B-6,j-15],[B+15,j+4]].forEach(([Ie,Te],ue)=>{if(!w&&Math.hypot(Ie-(B+9),Te-(j-9))<10)return;const K=h(Ie,Te,{h:t(5.5,7),r:t(2.2,2.8),shape:ue%3===2?"cone":"ball"});ue<4&&d(K,w?"in the playground":"in the park")}),l("bench",B+4,j+3,{rot:0}),l("bench",B-4,j-3,{rot:Math.PI}),l("bin",B+3,j-3,{color:4165450}),c("bin",B+3,.9,j-3,w?"a bin in the playground":"a bin in the park")}const a=[...xg];for(let y=a.length-1;y>0;y--){const w=Math.floor(e()*(y+1));[a[y],a[w]]=[a[w],a[y]]}const _=[...a,...a,...a].slice(0,36);for(let y=0;y<Ct;y++)for(let w=0;w<Ct;w++){const N=gg[y][w],F={c:w,r:y,kind:N,x0:xc(w),x1:_c(w),z0:xc(y),z1:_c(y)};F.cx=(F.x0+F.x1)/2,F.cz=(F.z0+F.z1)/2,r.blocks.push(F),r.ground.push({x0:F.x0,x1:F.x1,z0:F.z0,z1:F.z1,kind:"pavement"}),F.loop={x0:F.x0+1.5,x1:F.x1-1.5,z0:F.z0+1.5,z1:F.z1-1.5,block:F},r.loops.push(F.loop),N==="houses"?v(F):N==="shops"?(F.shopList=_.splice(0,6),S(F)):N==="downtown"?p(F):N==="townhall"?u(F):N==="station"?M(F):N==="hospital"?I(F):N==="police"?E(F):N==="school"?C(F):N==="market"?R(F):N==="build"?P(F):N==="farm"?x(F):N==="fields"?T(F):N==="park"?D(F,!1):N==="playpark"&&D(F,!0);for(const k of[.3,.7]){const O=F.x0+(F.x1-F.x0)*k,B=F.z0+(F.z1-F.z0)*k;r.lamps.push({x:O,z:F.z0+.5,nx:0,nz:-1}),r.lamps.push({x:O,z:F.z1-.5,nx:0,nz:1}),r.lamps.push({x:F.x0+.5,z:B,nx:-1,nz:0}),r.lamps.push({x:F.x1-.5,z:B,nx:1,nz:0})}(w+y)%2===0&&l("hydrant",F.x0+.9,F.z0+.9)}for(let y=Nt.minX+6;y<=Nt.maxX-6;y+=9)h(y+t(-2,2),Nt.minZ+t(5,12),{h:t(6,9),r:t(2.4,3.2)}),s(.6)&&h(y+t(-2,2),Nt.minZ+t(14,20),{h:t(5,8),r:t(2.2,3)});for(let y=Nt.minZ+20;y<=Sn+2;y+=9)for(const w of[-1,1]){const N=w<0?Nt.minX:Nt.maxX;h(N-w*t(5,12),y+t(-2,2),{h:t(6,9),r:t(2.4,3.2)})}const U=kt(Ct);r.ground.push({x0:Nt.minX,x1:Nt.maxX,z0:U+6,z1:U+9,kind:"pavement"}),r.ground.push({x0:Nt.minX,x1:Nt.maxX,z0:U+9,z1:Ot+2,kind:"sand"}),r.loops.push({x0:-186,x1:186,z0:U+7.5,z1:U+22,block:null});const A=[15882874,4165586,15913019,5222506,15895099,11565792,3126696];for(let y=0;y<13;y++){const w=-165+y*9,N=A[y%A.length];l("hut",w,U+14,{color:N}),o(w,U+14,3.6,3.4,4.2),y%2===0&&c("hut",w,2.2,U+14-2.2,"a beach hut",{nz:-1})}for(let y=0;y<14;y++){const w=-40+y*13+t(-3,3);Math.abs(w-56)<9||l("umbrella",w,U+26+t(0,8),{color:A[y%A.length]})}l("lifeguard",20,Ot-6),l("sandcastle",0,Ot-10),l("sandcastle",90,Ot-12),l("pier",(hn.minX+hn.maxX)/2,(hn.minZ+hn.maxZ)/2,{w:hn.maxX-hn.minX,d:hn.maxZ-hn.minZ}),l("pierhead",Bt.x,Bt.z,{r:Bt.r,neck:hn.maxX-hn.minX}),l("lighthouse",Bt.x,Bt.z,{h:16}),r.circles.push({x:Bt.x,z:Bt.z,r:3});for(const[y,w,N]of[[10,Ot+30,15882874],[-40,Ot+45,4165586],[110,Ot+26,15913019],[-110,Ot+34,16777215],[160,Ot+60,5222506]])l("boat",y,w,{color:N,rot:t(0,6.28)});for(const y of r.spots){const w=Gr(y.x,y.z);y.road={x:w.x,z:w.z},y.roadDist=w.dist}return r.spots=r.spots.filter(y=>y.roadDist<30),r.spots.forEach((y,w)=>y.id=w),r}function Mg(n,e){if(Math.hypot(n-Bt.x,e-Bt.z)<=Bt.r)return!0;if(!Eh.some(i=>n>=i.minX&&n<=i.maxX&&e>=i.minZ&&e<=i.maxZ))return!1;const t=Lo(n,e);return!t||t.x===n&&t.z===e}const An=24;function Lo(n,e){const t=Nt,i=n<t.minX+An?t.minX+An:n>t.maxX-An?t.maxX-An:null,s=e<t.minZ+An?t.minZ+An:e>t.maxZ-An?t.maxZ-An:null;if(i===null||s===null||n>=hn.minX&&n<=hn.maxX)return null;const r=Math.hypot(n-i,e-s);return r<=An?{x:n,z:e}:{x:i+(n-i)/r*An,z:s+(e-s)/r*An}}function wh(n,e){if(Mg(n,e))return{x:n,z:e};if(n>=Nt.minX&&n<=Nt.maxX&&e>=Nt.minZ&&e<=Nt.maxZ)return Lo(n,e);let t=null,i=1/0;for(const l of Eh){let c={x:Math.min(l.maxX,Math.max(l.minX,n)),z:Math.min(l.maxZ,Math.max(l.minZ,e))};l===Nt&&(c=Lo(c.x,c.z)||c);const h=Math.hypot(c.x-n,c.z-e);h<i&&(i=h,t=c)}const s=n-Bt.x,r=e-Bt.z,o=Math.hypot(s,r);return o-Bt.r<i&&(t={x:Bt.x+s/o*Bt.r,z:Bt.z+r/o*Bt.r}),t}function hs(n,e){const t=i=>{const s=i+Sn,r=s-Math.floor(s/vn)*vn;return s>0&&s<Ct*vn&&r>Cn/2&&r<vn-Cn/2};return t(n)&&t(e)||e>Sn+Cn/2&&e<Sn+9&&n>-198&&n<198?Qe:0}const Fn=16;function Sg(n){const e=new Map,t=(l,c)=>l*4096+c,i=(l,c,h,d,m)=>{for(let f=Math.floor(c/Fn);f<=Math.floor(h/Fn);f++)for(let g=Math.floor(d/Fn);g<=Math.floor(m/Fn);g++){const v=t(f,g);e.has(v)||e.set(v,[]),e.get(v).push(l)}};for(const l of n.boxes)i({box:l},l.minX,l.maxX,l.minZ,l.maxZ);for(const l of n.circles)i({circle:l},l.x-l.r,l.x+l.r,l.z-l.r,l.z+l.r);const s=new Set;function r(l,c,h,d){d.length=0,s.clear();for(let m=Math.floor((l-h)/Fn);m<=Math.floor((l+h)/Fn);m++)for(let f=Math.floor((c-h)/Fn);f<=Math.floor((c+h)/Fn);f++){const g=e.get(t(m,f));if(g)for(const v of g)s.has(v)||(s.add(v),d.push(v))}return d}function o(l,c,h){const d=e.get(t(Math.floor(l/Fn),Math.floor(h/Fn)));if(!d)return null;for(const m of d){const f=m.box;if(f&&l>f.minX&&l<f.maxX&&h>f.minZ&&h<f.maxZ&&c<f.h)return f}return null}return{near:r,boxAt:o}}const yg=[];function bg(n,e,t,i,s=null){let r=0,o=0;const l=n.near(e,t,i,yg),c=(g,v,S)=>{r+=g*S,o+=v*S};for(const g of l){const v=e+r,S=t+o;if(g.box){const p=g.box,u=Math.max(p.minX,Math.min(p.maxX,v)),M=Math.max(p.minZ,Math.min(p.maxZ,S)),I=v-u,E=S-M,C=Math.hypot(I,E);if(C>=i)continue;if(C>1e-6)c(I/C,E/C,i-C);else{const R=[[v-p.minX,-1,0],[p.maxX-v,1,0],[S-p.minZ,0,-1],[p.maxZ-S,0,1]].sort((D,a)=>D[0]-a[0]),[P,x,T]=R[0];c(x,T,P+i)}}else{const p=g.circle,u=v-p.x,M=S-p.z,I=Math.hypot(u,M),E=i+p.r;if(I>=E)continue;I>1e-6?c(u/I,M/I,E-I):c(1,0,E)}}if(s)for(const g of s){const v=e+r,S=t+o,p=v-g.x,u=S-g.z,M=Math.hypot(p,u),I=i+g.r;M>=I||M<1e-6||c(p/M,u/M,I-M)}const h=wh(e+r,t+o),d=h.x-(e+r),m=h.z-(t+o);r+=d,o+=m;const f=Math.hypot(r,o);return{x:r,z:o,nx:f>1e-6?r/f:0,nz:f>1e-6?o/f:0,depth:f}}const Vn={firstDelay:5,breather:[7,11],near:[55,190],firstNear:[45,120],catEvery:4,water:.0065,rescueRange:15,rescueTime:1};function Eg(n,e=7){return{city:n,rng:Jr(e),active:null,timer:Vn.firstDelay,calls:0,recent:[],events:[]}}function wg(n,e,t){const[i,s]=n.calls===0?Vn.firstNear:Vn.near,r=n.calls>0&&n.calls%Vn.catEvery===Vn.catEvery-1,o=n.recent.slice(-2).map(h=>n.city.spots[h].kind);let l=n.city.spots.filter(h=>{if(h.kind==="cat"!==r||n.recent.includes(h.id))return!1;const d=Math.hypot(h.x-e,h.z-t);return d>=i&&d<=s});const c=l.filter(h=>!o.includes(h.kind)||h.kind==="window");return c.length&&(l=c),l.length||(l=n.city.spots.filter(h=>h.kind==="cat"===r&&!n.recent.includes(h.id))),l[Math.floor(n.rng()*l.length)%l.length]}function Tg(n,e,t){const i=wg(n,e,t);n.calls++,n.recent.push(i.id),n.recent.length>8&&n.recent.shift(),n.active={spot:i,kind:i.kind,x:i.x,y:i.y,z:i.z,size:i.size,r:1.3+i.size*.9,hp:1,age:0,rescue:0,done:!1},n.events.push({type:"start",fire:n.active})}function Ag(n,e,t){if(!n.active){n.timer-=e,n.timer<=0&&Tg(n,t.x,t.z);return}const i=n.active;i.age+=e,i.kind==="cat"&&(Math.hypot(t.x-i.x,t.z-i.z)<Vn.rescueRange&&t.ladderUp?i.rescue+=e:i.rescue=Math.max(0,i.rescue-e*.5),i.rescue>=Vn.rescueTime&&Th(n,"rescued"))}function Rg(n,e=1){const t=n.active;!t||t.kind==="cat"||t.done||(t.hp-=Vn.water*e/t.size,t.hp<=0&&(t.hp=0,Th(n,"out")))}function Th(n,e){const t=n.active;t.done=!0,n.events.push({type:e,fire:t}),n.active=null;const[i,s]=Vn.breather;n.timer=i+n.rng()*(s-i)}const xi={speed:22,rate:95,gravity:9.8,spread:.025,life:4};function Cg(n=1e3){return{max:n,px:new Float32Array(n),py:new Float32Array(n),pz:new Float32Array(n),vx:new Float32Array(n),vy:new Float32Array(n),vz:new Float32Array(n),age:new Float32Array(n).fill(99),next:0,carry:0,events:[]}}function Pg(n,e,t,i,s,r,o=xi.speed){const l=i-n,c=r-t,h=Math.max(.01,Math.hypot(l,c)),d=s-e,m=xi.gravity,f=o*o,g=f*f-m*(m*h*h+2*d*f);let v;g>=0?v=Math.atan((f-Math.sqrt(g))/(m*h)):v=Math.PI/4;const S=Math.cos(v)*o;return{x:l/h*S,y:Math.sin(v)*o,z:c/h*S,reach:g>=0}}function Lg(n,e,t,i,s=Math.random){for(n.carry+=xi.rate*i;n.carry>=1;){n.carry-=1;const r=n.next;n.next=(n.next+1)%n.max;const o=1+(s()-.5)*xi.spread*2,l=xi.speed*xi.spread,c=s()*i;n.vx[r]=t.x*o+(s()-.5)*l,n.vy[r]=t.y*o+(s()-.5)*l,n.vz[r]=t.z*o+(s()-.5)*l,n.px[r]=e.x+n.vx[r]*c,n.py[r]=e.y+n.vy[r]*c,n.pz[r]=e.z+n.vz[r]*c,n.age[r]=c}}function Ig(n,e,t){const i=n.events;i.length=0;const s=xi.gravity,r=t.fire;for(let o=0;o<n.max;o++){if(n.age[o]>xi.life)continue;n.age[o]+=e,n.vy[o]-=s*e,n.px[o]+=n.vx[o]*e,n.py[o]+=n.vy[o]*e,n.pz[o]+=n.vz[o]*e;const l=n.px[o],c=n.py[o],h=n.pz[o];let d=null;if(r&&r.kind!=="cat"&&Math.hypot(l-r.x,(c-r.y)*.8,h-r.z)<r.r&&(d="fire"),!d&&t.collider.boxAt(l,c,h)&&(d="wall"),!d&&c<=0&&(d="ground"),!d&&t.people&&c<2){for(const m of t.people)if(Math.abs(m.x-l)<.6&&Math.abs(m.z-h)<.6){i.push({type:"person",x:l,y:c,z:h,person:m}),d="person";break}if(d){n.age[o]=99;continue}}d&&(i.push({type:d,x:l,y:Math.max(0,c),z:h}),n.age[o]=99)}}const Ps={shirts:[14831690,4165586,15913019,5222506,15895099,11565792,3126696,15882874,16777215,3098712],legs:[3098712,5995953,8018504,3816008,13215610,5212763],skin:[16175796,15250574,13209190,10118208,7227954,16769224],hair:[2759956,5913120,13208122,15913082,10107424,3815994,15658734]};function Ah(n){return 2*(n.x1-n.x0+(n.z1-n.z0))}function Io(n,e,t){const i=n.x1-n.x0,s=n.z1-n.z0,r=2*(i+s);return e=(e%r+r)%r,e<i?Object.assign(t,{x:n.x0+e,z:n.z0,tx:1,tz:0,nx:0,nz:1}):e<i+s?Object.assign(t,{x:n.x1,z:n.z0+(e-i),tx:0,tz:1,nx:-1,nz:0}):e<2*i+s?Object.assign(t,{x:n.x1-(e-i-s),z:n.z1,tx:-1,tz:0,nx:0,nz:-1}):Object.assign(t,{x:n.x0,z:n.z1-(e-2*i-s),tx:0,tz:-1,nx:1,nz:0}),t}function Dg(n,e,t){const i=n.x1-n.x0,s=n.z1-n.z0,r=Math.max(n.x0,Math.min(n.x1,e)),o=Math.max(n.z0,Math.min(n.z1,t)),l=[[Math.hypot(e-r,t-n.z0),r-n.x0],[Math.hypot(e-n.x1,t-o),i+(o-n.z0)],[Math.hypot(e-r,t-n.z1),i+s+(n.x1-r)],[Math.hypot(e-n.x0,t-o),2*i+s+(n.z1-o)]];return l.sort((c,h)=>c[0]-h[0]),l[0][1]}function Ug(n,e,t=11){const i=Jr(t),s=c=>c[Math.floor(i()*c.length)%c.length],r=n.loops,o=[],l={};for(let c=0;c<e;c++){const h=c%9===0?r[r.length-1]:r[Math.floor(i()*(r.length-1))],d=i()*Ah(h);Io(h,d,l);const m=i()<.3;o.push({loop:h,s:d,dir:i()<.5?1:-1,pace:(m?1.1:1.25)+i()*.35,x:l.x,z:l.z,heading:0,side:0,state:"walk",t:i()*6,phase:i()*6,cool:0,watchS:0,cross:null,walk:0,arms:0,wave:0,hop:0,look:null,scale:m?.9:1.2+i()*.18,shirt:s(Ps.shirts),legs:s(Ps.legs),skin:s(Ps.skin),hair:s(Ps.hair),hat:i()<.18?s([15913019,14831690,4165586,16777215]):null,crew:!1})}for(const c of n.crew)o.push({loop:null,x:c.x,z:c.z,homeX:c.x,homeZ:c.z,heading:Math.PI,side:0,state:"crew",t:0,phase:i()*6,cool:0,walk:0,arms:0,wave:0,hop:0,look:null,scale:1.3,shirt:2764602,legs:2764602,skin:s(Ps.skin),hair:2759956,hat:15913019,crew:!0});return{list:o,rng:i,tmp:{}}}function Ng(n,e,t){const{truck:i}=t,s=n.tmp,r=n.rng,o=t.fire;for(const l of n.list){l.t+=e,l.cool=Math.max(0,l.cool-e);const c=Math.hypot(l.x-i.x,l.z-i.z);if(t.cheer&&Math.hypot(l.x-t.cheer.x,l.z-t.cheer.z)<55?(l.state="cheer",l.t=-r()*.3,l.look={x:t.cheer.x,z:t.cheer.z}):t.horn&&c<24&&l.state!=="cheer"&&l.state!=="cross"?(l.state="wave",l.t=0,l.hopKick=1):t.siren&&c<26&&l.cool<=0&&(l.state==="walk"||l.state==="wait"||l.state==="crew")&&(l.prev=l.state==="crew"?"crew":"walk",l.state="wave",l.t=0,l.cool=9+r()*4),l.crew?zg(l,e,i,c):Fg(l,e,t,o,s,r),!l.crew&&l.state!=="cross"){const m=c<4.6&&Math.abs(i.speed)>.5;l.side=St(l.side,m?2.4:0,m?8:.8,e)}const h=Math.sin(l.t*7+l.phase);l.wave=St(l.wave,l.state==="wave"||l.state==="crew"&&c<30||l.state==="point"?1:0,8,e),l.arms=St(l.arms,l.state==="cheer"?1:0,10,e);let d=0;l.state==="cheer"?d=Math.abs(Math.sin(l.t*7.5+l.phase))*.45:l.state==="giggle"&&(d=Math.abs(Math.sin(l.t*10))*.3),l.hopKick&&(d=Math.max(d,l.hopKick*.4),l.hopKick=Math.max(0,l.hopKick-e*3)),l.hop=d,l.waveSwing=h}}function Lr(n,e,t,i,s=6){const r=Math.atan2(e-n.x,-(t-n.z));n.heading+=on(n.heading,r)*Math.min(1,s*i)}function zg(n,e,t,i){n.x=n.homeX,n.z=n.homeZ,n.state==="cheer"?n.t>3&&(n.state="crew"):n.state==="wave"&&n.t>2.5&&(n.state="crew"),i<40&&Lr(n,t.x,t.z,e,3),n.walk=0}function Fg(n,e,t,i,s,r,o){const l=n.loop,c=l?Ah(l):0;if(i&&(n.state==="walk"||n.state==="wait")&&l&&Math.hypot(n.x-i.x,n.z-i.z)<48){const m=Dg(l,i.x,i.z);Io(l,m,s),Math.hypot(s.x-i.x,s.z-i.z)>5&&(n.state="watch",n.watchS=m+(r()-.5)*14)}!i&&(n.state==="watch"||n.state==="point")&&(n.state="walk");let h=!1;switch(n.state){case"walk":{if(n.s+=n.dir*n.pace*e,h=!0,r()<e*.04&&(n.state="wait",n.t=0),l.block&&t.blocks){const d=Og(l,n.s);d!=null&&r()<.35&&n.lastCorner!==Math.round(n.s)&&kg(n,l,d,t.blocks,r),d!=null&&(n.lastCorner=Math.round(n.s))}break}case"wait":n.t>2+r()*2&&(n.state="walk",r()<.4&&(n.dir*=-1));break;case"wave":Lr(n,t.truck.x,t.truck.z,e),n.t>2.6&&(n.state="walk");break;case"watch":{const d=((n.watchS-n.s)%c+c*1.5)%c-c/2;Math.abs(d)>.4?(n.s+=Math.sign(d)*Math.min(Math.abs(d),2.4*e),h=!0):(n.state="point",n.t=0);break}case"point":Lr(n,i.x,i.z,e);break;case"cheer":n.look&&Lr(n,n.look.x,n.look.z,e),n.t>3.6&&(n.state="wave",n.t=.8);break;case"giggle":n.heading+=e*9,n.t>1.1&&(n.state="walk");break;case"cross":{const d=n.cross;d.u+=n.pace*1.15*e/d.len;const m=Math.min(1,d.u);n.x=d.ax+(d.bx-d.ax)*m,n.z=d.az+(d.bz-d.az)*m;const f=Math.atan2(d.bx-d.ax,-(d.bz-d.az));n.heading+=on(n.heading,f)*Math.min(1,8*e),n.walk+=e*n.pace*2.2,m>=1&&(n.loop=d.loop,n.s=d.s,n.state="walk",n.cross=null,n.lastCorner=Math.round(n.s));return}}if(l&&(Io(l,n.s,s),n.x=s.x+s.nx*n.side,n.z=s.z+s.nz*n.side,h)){const d=s.tx*Math.sign(n.state==="walk"?n.dir:1),m=s.tz*Math.sign(n.state==="walk"?n.dir:1),f=n.state==="watch"?Math.atan2(i.x-n.x,-(i.z-n.z)):Math.atan2(d,-m);if(n.state==="watch"){const g=((n.watchS-n.s)%c+c*1.5)%c-c/2,v=Math.sign(g)||1;n.heading+=on(n.heading,Math.atan2(s.tx*v,-s.tz*v))*Math.min(1,8*e)}else n.heading+=on(n.heading,f)*Math.min(1,8*e);n.walk+=e*n.pace*2.2}}function Og(n,e){const t=n.x1-n.x0,i=n.z1-n.z0,s=2*(t+i),r=(e%s+s)%s,o=[0,t,t+i,2*t+i];for(let l=0;l<4;l++)if(Math.abs(r-o[l])<.05||Math.abs(r-s)<.05)return Math.abs(r-s)<.05?0:l;return null}function Ec(n,e){return[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]][e]}function Bg(n,e){const t=n.x1-n.x0,i=n.z1-n.z0;return[0,t,t+i,2*t+i][e]}function kg(n,e,t,i,s){const r=e.block,l={0:[[-1,0,1],[0,-1,3]],1:[[1,0,0],[0,-1,2]],2:[[1,0,3],[0,1,1]],3:[[-1,0,2],[0,1,0]]}[t].map(([S,p,u])=>[i.find(M=>M.c===r.c+S&&M.r===r.r+p),u]).filter(([S])=>S);if(!l.length)return;const[c,h]=l[Math.floor(s()*l.length)%l.length],d=c.loop;if(!d)return;const[m,f]=Ec(e,t),[g,v]=Ec(d,h);n.state="cross",n.cross={ax:m,az:f,bx:g,bz:v,len:Math.hypot(g-m,v-f),u:0,loop:d,s:Bg(d,h)}}function Hg(n){return n.crew||n.state==="cross"||n.state==="giggle"||n.state==="cheer"||n.cool>6?!1:(n.state="giggle",n.t=0,n.cool=8,!0)}const Yt=[[1,0],[0,1],[-1,0],[0,-1]],Do=n=>[Yt[n][1]*gc,-Yt[n][0]*gc],os=6.5,Gg={car:{length:3.8,speed:[5.5,7]},bus:{length:8.5,speed:[4.5,5]},icecream:{length:4.8,speed:[4,4.5]}},wc=[14831690,4165586,15913019,5222506,15895099,11565792,3126696,15882874,16777215,10470361],Rh=(n,e,t)=>{const i=n+Yt[t][0],s=e+Yt[t][1];return i>=0&&i<=Ct&&s>=0&&s<=Ct};function Vg(n,e=23){const t=Jr(e),i=[],s=new Set;for(let r=0;r<n;r++){const o=r===0?"bus":r===1?"icecream":"car";let l,c,h;do l=Math.floor(t()*(Ct+1)),c=Math.floor(t()*(Ct+1)),h=Math.floor(t()*4);while(!Rh(l,c,h)||s.has(`${l},${c},${h}`));s.add(`${l},${c},${h}`);const d=Gg[o],m={kind:o,color:o==="car"?wc[r%wc.length]:null,length:d.length,cruise:d.speed[0]+t()*(d.speed[1]-d.speed[0]),speed:0,x:0,z:0,heading:0,pull:0,wait:0,path:[],node:{i:l,j:c},dir:h,inJunction:null,wheel:0},[f,g]=Do(h),v=kt(l)+f+Yt[h][0]*(os+4),S=kt(c)+g+Yt[h][1]*(os+4);m.x=v,m.z=S,m.heading=Math.atan2(Yt[h][0],-Yt[h][1]),m.node={i:l+Yt[h][0],j:c+Yt[h][1]},Uo(m,t),i.push(m)}return{cars:i,rng:t}}function Uo(n,e){const{i:t,j:i}=n.node,s=n.dir,r=[0,1,2,3].filter(p=>p!==(s+2)%4&&Rh(t,i,p));let o=r.includes(s)&&e()<.55?s:r[Math.floor(e()*r.length)%r.length];o===void 0&&(o=(s+2)%4);const l=kt(t),c=kt(i),[h,d]=Do(s),[m,f]=Do(o),g=[l+h-Yt[s][0]*os,c+d-Yt[s][1]*os],v=[l+m+Yt[o][0]*os,c+f+Yt[o][1]*os],S=s===o?[(g[0]+v[0])/2,(g[1]+v[1])/2]:o===(s+2)%4?[l,c]:[l+h+m,c+d+f];n.path.push({x:g[0],z:g[1],junction:{i:t,j:i}});for(let p=1;p<=6;p++){const u=p/6,M=(1-u)*(1-u),I=2*(1-u)*u,E=u*u;n.path.push({x:M*g[0]+I*S[0]+E*v[0],z:M*g[1]+I*S[1]+E*v[1],junction:p<6?{i:t,j:i}:null})}n.dir=o,n.node={i:t+Yt[o][0],j:i+Yt[o][1]}}function Wg(n){const e=Math.sin(n.heading);return[-Math.cos(n.heading)*1.7*n.pull,-e*1.7*n.pull]}function Ch(n){const[e,t]=Wg(n);return{x:n.x+e,z:n.z+t}}function Xg(n,e,t){const{truck:i}=t;for(const s of n.cars){const r=Math.sin(s.heading),o=-Math.cos(s.heading);let l=s.cruise;const c=(v,S,p)=>{const u=v-s.x,M=S-s.z,I=u*r+M*o,E=Math.abs(u*o-M*r);I>0&&I<10+p/2&&E<2.6&&(l=Math.min(l,Math.max(0,(I-s.length/2-p/2-1.5)*1.3)))};c(i.x,i.z,7);for(const v of n.cars)v!==s&&c(v.x,v.z,v.length);const h=s.path[0];h&&h.junction&&!s.inJunction&&Math.hypot(h.x-s.x,h.z-s.z)<4&&(n.cars.some(p=>p!==s&&p.inJunction&&p.inJunction.i===h.junction.i&&p.inJunction.j===h.junction.j)?l=0:s.inJunction=h.junction);const d=Math.hypot(i.x-s.x,i.z-s.z),m=t.siren&&d<30&&!s.inJunction;s.pull=St(s.pull,m?1:0,m?2.5:1.2,e),m&&(l=0),s.pull>.05&&!m&&(l=Math.min(l,s.cruise*(1-s.pull))),s.speed=St(s.speed,l,l<s.speed?5:1.6,e);let f=s.speed*e;for(;f>0&&s.path.length;){const v=s.path[0],S=v.x-s.x,p=v.z-s.z,u=Math.hypot(S,p);u<=f?(s.x=v.x,s.z=v.z,f-=u,s.path.shift(),s.inJunction&&!v.junction&&s.path.length&&!s.path[0].junction&&(s.inJunction=null)):(s.x+=S/u*f,s.z+=p/u*f,f=0),s.path.length<2&&Uo(s,n.rng)}s.path.length<2&&Uo(s,n.rng),s.inJunction&&s.path[0]&&!s.path[0].junction&&(s.inJunction=null);const g=s.path[0];if(g){const v=Math.atan2(g.x-s.x,-(g.z-s.z));Math.hypot(g.x-s.x,g.z-s.z)>.05&&(s.heading+=on(s.heading,v)*Math.min(1,10*e))}s.wheel+=s.speed*e}}function qg(n,e=[]){e.length=0;for(const t of n.cars){const{x:i,z:s}=Ch(t),r=Math.sin(t.heading),o=-Math.cos(t.heading),l=t.length/2-.9;for(let c=-l;c<=l+.01;c+=Math.max(.5,l))e.push({x:i+r*c,z:s+o*c,r:1})}return e}const Rn={maxSpeed:14,reverseSpeed:5,accel:7,brake:15,coast:5,turnRadius:6,spin:1.25,snap:.42,radius:1.35,offsets:[-2.3,0,2.3]};function Yg(n){return{x:n.x,z:n.z,heading:n.heading??0,speed:0,yawRate:0,blocked:0,backing:0,contact:null,contactT:0,inWater:!1,time:0,events:[]}}function Tc(n,e,t,i){n.x=e,n.z=t,n.heading=i,n.speed=0,n.yawRate=0,n.blocked=0,n.backing=0,n.contactT=0}function Zg(n,e,t,i,s=null){n.time+=i;let r=e.dx||0,o=e.dz||0;const l=Math.min(1,Math.hypot(r,o));if(n.contactT-=i,n.contactT>0&&l>.08){const R=n.contact,P=r*R.x+o*R.z;if(P<0){r-=P*R.x,o-=P*R.z;let x=Math.hypot(r,o);if(x<.3*l){const T=Math.sign(Math.sin(n.heading)*-R.z+-Math.cos(n.heading)*R.x)||1;r=-R.z*T,o=R.x*T,x=1}r=r/x*l,o=o/x*l}}let c=n.heading,h=0,d=0;const m=e.steer!==void 0,f=m?Math.abs(e.throttle):l;if(m){const R=e.throttle,P=e.steer;if(n.backing>0&&R>.05)n.backing-=i,h=-5,d=-(P||.7);else if(R<-.05)h=R*Rn.reverseSpeed,d=-P;else if(h=Math.max(0,R)*Rn.maxSpeed*(1-.3*Math.abs(P)),d=P,n.contactT>0&&R>.05){const x=n.contact,T=Math.sin(n.heading),D=-Math.cos(n.heading),a=-(T*x.x+D*x.z);if(a>0){const _=Math.sign(T*-x.z+D*x.x)||1,U=Math.atan2(-x.z*_,-(x.x*_));d=Zt(d+Zt(on(n.heading,U)*2,-1,1)*Math.min(1,a*2),-1,1)}}R<=.05&&(n.backing=0)}else if(l>.08){if(c=Math.atan2(r,-o),Gr(n.x,n.z).dist<8){const x=Math.round(c/(Math.PI/2))*(Math.PI/2);Math.abs(on(c,x))<Rn.snap&&(c=x)}const P=on(n.heading,c);if(n.backing>0)n.backing-=i,h=-5,d=Zt(P*2.6,-1,1);else{const x=Math.abs(P);h=l*Rn.maxSpeed*Zt(1.15-x/1.5,.12,1),d=Zt(P*2.6,-1,1)}}else n.backing=0;const g=h===0?Rn.coast:Math.sign(h)!==Math.sign(n.speed)&&Math.abs(n.speed)>.3?Rn.brake:Rn.accel;n.speed<h?n.speed=Math.min(h,n.speed+g*i):n.speed=Math.max(h,n.speed-g*i);const v=Math.abs(n.speed),S=Math.max(v/Rn.turnRadius,Rn.spin*(1-Math.min(1,v/5)));n.yawRate=St(n.yawRate,d*S,10,i),n.heading+=n.yawRate*i,n.heading=Math.atan2(Math.sin(n.heading),Math.cos(n.heading));const p=Math.sin(n.heading),u=-Math.cos(n.heading);n.x+=p*n.speed*i,n.z+=u*n.speed*i;let M=null,I=0;for(let R=0;R<2;R++)for(const P of Rn.offsets){const x=bg(t.collider,n.x+p*P,n.z+u*P,Rn.radius,s);x.depth>1e-4&&(n.x+=x.x,n.z+=x.z,x.depth>I&&(I=x.depth,M=[x.nx,x.nz]))}const E=wh(n.x,n.z);if(n.x=E.x,n.z=E.z,M){n.contact={x:M[0],z:M[1]},n.contactT=.35;const R=-(p*M[0]+u*M[1])*Math.sign(n.speed||1);R>.6&&Math.abs(n.speed)>5?(n.events.push({type:"bump",strength:Math.min(1,Math.abs(n.speed)*R/12)}),n.speed*=.3):R>0&&(n.speed*=1-R*R*Math.min(1,8*i)),f>.3&&Math.abs(n.speed)<1.2&&n.backing<=0&&R>.3&&(n.blocked+=i,n.blocked>(m?1.4:.45)&&(n.backing=1.1,n.blocked=0))}else n.blocked=Math.max(0,n.blocked-i);const C=n.inWater;n.inWater=t.ponds.some(R=>Math.hypot(n.x-R.x,n.z-R.z)<R.r-.5),n.inWater&&!C&&Math.abs(n.speed)>2&&n.events.push({type:"splash",strength:Math.min(1,Math.abs(n.speed)/12)})}const Ua=new Map;function On(n,e){if(!Ua.has(n)){const t=e();Ua.set(n,t.index?t.toNonIndexed():t)}return Ua.get(n)}function Kg(){const n=[-.5,0,.5,.5,0,.5,.5,1,0,-.5,0,.5,.5,1,0,-.5,1,0,.5,0,-.5,-.5,0,-.5,-.5,1,0,.5,0,-.5,-.5,1,0,.5,1,0],e=new Tt;return e.setAttribute("position",new wt(new Float32Array(n),3)),e.computeVertexNormals(),e}function $g(){const n=[.5,0,.5,.5,0,-.5,.5,1,0,-.5,0,-.5,-.5,0,.5,-.5,1,0],e=new Tt;return e.setAttribute("position",new wt(new Float32Array(n),3)),e.computeVertexNormals(),e}const xe={box:()=>On("box",()=>new vi(1,1,1)),cyl:(n=12)=>On(`cyl${n}`,()=>new Ws(.5,.5,1,n)),cone:(n=12)=>On(`cone${n}`,()=>new Jo(.5,1,n)),sphere:(n=10,e=7)=>On(`sph${n}x${e}`,()=>new ps(.5,n,e)),blob:()=>On("blob",()=>new Hr(.5,1)),gem:()=>On("gem",()=>new Hr(.5,0)),torus:(n=.35,e=.15)=>On(`tor${n}${e}`,()=>new jo(n,e,8,18)),roof:()=>On("roof",Kg),gable:()=>On("gable",$g),plane:()=>On("plane",()=>new vi(1,.001,1))},Ac=new st,Rc=new Ve,Cc=new Ni,Pc=new Xn,Jg=new X,Qg=new X,gn=new Ne,fi=new X;class Pt{constructor(){this.pos=[],this.nor=[],this.col=[]}add(e,t,i,s,r,o,l,c,h=0,d=0,m=0){return Pc.set(d,h,m,"YXZ"),Cc.setFromEuler(Pc),Ac.compose(Jg.set(t,i,s),Cc,Qg.set(r,o,l)),this.addMatrix(e,Ac,c)}addMatrix(e,t,i){Rc.getNormalMatrix(t),gn.set(i);const s=e.attributes.position.array,r=e.attributes.normal.array;for(let o=0;o<s.length;o+=3)fi.set(s[o],s[o+1],s[o+2]).applyMatrix4(t),this.pos.push(fi.x,fi.y,fi.z),fi.set(r[o],r[o+1],r[o+2]).applyMatrix3(Rc).normalize(),this.nor.push(fi.x,fi.y,fi.z),this.col.push(gn.r,gn.g,gn.b);return this}box(e,t,i,s,r,o,l,c=0){return this.add(xe.box(),e,t+r/2,i,s,r,o,l,c)}cyl(e,t,i,s,r,o,l=12){return this.add(xe.cyl(l),e,t+r/2,i,s*2,r,s*2,o)}cone(e,t,i,s,r,o,l=12){return this.add(xe.cone(l),e,t+r/2,i,s*2,r,s*2,o)}ball(e,t,i,s,r,o=10,l=7){return this.add(xe.sphere(o,l),e,t,i,s*2,s*2,s*2,r)}blob(e,t,i,s,r,o=1){return this.add(xe.blob(),e,t,i,s*2,s*2*o,s*2,r)}quad(e,t,i,s,r,o){const l=[e,r,i,e,r,s,t,r,s,e,r,i,t,r,s,t,r,i];gn.set(o);for(let c=0;c<l.length;c+=3)this.pos.push(l[c],l[c+1],l[c+2]),this.nor.push(0,1,0),this.col.push(gn.r,gn.g,gn.b);return this}disc(e,t,i,s,r,o=28){gn.set(r);for(let l=0;l<o;l++){const c=l/o*Math.PI*2,h=(l+1)/o*Math.PI*2;this.pos.push(e,s,t,e+Math.cos(h)*i,s,t+Math.sin(h)*i,e+Math.cos(c)*i,s,t+Math.sin(c)*i);for(let d=0;d<3;d++)this.nor.push(0,1,0),this.col.push(gn.r,gn.g,gn.b)}return this}get empty(){return this.pos.length===0}geometry(){const e=new Tt;return e.setAttribute("position",new wt(new Float32Array(this.pos),3)),e.setAttribute("normal",new wt(new Float32Array(this.nor),3)),e.setAttribute("color",new wt(new Float32Array(this.col),3)),e.computeBoundingSphere(),e}}const Lc={red:14165291,yellow:15909403,blue:3108824,green:5221946,pink:15755944},xn=15001838,Jn=2764084,Ic=3099242,yr=16645110,br=15909403,jg=2434603;function ex(){const n=new Pt;return n.add(xe.cyl(18),0,0,0,1.1,.5,1.1,jg,0,0,Math.PI/2),n.add(xe.cyl(12),.04,0,0,.62,.52,.62,xn,0,0,Math.PI/2),n.add(xe.cyl(8),.06,0,0,.22,.56,.22,14165291,0,0,Math.PI/2),n.add(xe.box(),.07,0,0,.5,.08,.16,Jn),n.geometry()}function Dc(n="red"){const e=new qt,t=new qt;e.add(t);const i=new Xt({vertexColors:!0}),s=new Us({vertexColors:!0,shininess:70,specular:6710886}),r=Lc[n]??Lc.red,o=new Pt;o.box(0,.45,.2,2.2,.45,7,Jn),o.box(0,.5,-3.55,2.7,.42,.3,xn),o.box(0,.55,3.62,2.5,.32,.22,Jn),o.box(0,.85,-2.45,2.6,2.05,2.1,r),o.box(0,2.9,-2.45,2.5,.12,2,r),o.box(0,1.95,-3.51,2.3,.85,.06,Ic);for(const a of[-1,1])o.box(a*1.31,1.95,-2.6,.04,.8,1.2,Ic),o.box(a*1.32,1.15,-2.45,.04,.1,2,yr),o.box(a*1.45,2.05,-3.35,.12,.45,.06,Jn),o.box(a*1.38,2.1,-3.35,.18,.04,.04,Jn);o.box(0,.95,-3.51,1.2,.55,.06,xn);for(let a=0;a<4;a++)o.box(0,1+a*.12,-3.54,1.1,.04,.02,Jn);for(const a of[-1,1])o.add(xe.cyl(14),a*.95,1.18,-3.52,.42,.08,.42,16774864,0,Math.PI/2),o.add(xe.cyl(14),a*.95,1.18,-3.5,.52,.06,.52,xn,0,Math.PI/2);o.add(xe.cone(14),-.75,1.62,-3.68,.34,.3,.34,br),o.ball(-.75,1.8,-3.68,.1,br),o.box(0,.85,1.25,2.6,1.95,4.7,r),o.box(0,2.8,1.25,2.5,.08,4.6,12107462);for(const a of[-1,1]){for(let _=0;_<3;_++){const U=-.25+_*1.45;o.box(a*1.31,1.25,U,.04,1.35,1.25,xn);for(let A=0;A<6;A++)o.box(a*1.335,1.32+A*.21,U,.02,.03,1.2,12107462)}o.box(a*1.32,.95,.2,.04,.16,7,yr),o.box(a*1.32,.88,.2,.04,.05,7,br),o.add(xe.torus(.35,.14),a*1.38,2.25,3,1,1,1,yr,Math.PI/2),o.add(xe.cyl(10),a*1.36,2.25,3,.4,.12,.4,r,0,0,Math.PI/2)}o.box(0,.4,3.75,1.6,.12,.4,xn);for(const a of[-1,1])o.box(a*1.05,1,3.61,.36,.5,.06,14831690);o.box(0,1.2,3.61,1.3,1.1,.04,xn),o.box(0,2.95,-2.8,.2,.55,.2,Jn),o.box(0,2.98,-2.3,2,.12,.45,Jn);for(const a of[-2.35,1.55,2.75])for(const _ of[-1,1])o.box(_*1.2,1.12,a,.3,.12,1.3,Jn);const l=new $e(o.geometry(),s);l.castShadow=!0,t.add(l);const c=new Pt;for(const a of[-.55,.55])c.ball(a,2.05,-2.7,.24,1578e4),c.add(xe.sphere(10,6),a,2.2,-2.7,.56,.36,.6,br),c.box(a,1.4,-2.6,.6,.5,.4,2764602);t.add(new $e(c.geometry(),i));const h=[0,1].map(()=>new Xt({color:2771616,emissive:4885247,emissiveIntensity:0})),d=[-1,1].map((a,_)=>{const U=new $e(xe.box(),h[_]);return U.scale.set(.75,.28,.4),U.position.set(a*.55,3.24,-2.3),t.add(U),U});[-1,1].forEach((a,_)=>{const U=new $e(xe.box(),h[_]);U.scale.set(.22,.14,.08),U.position.set(a*.45,.82,-3.71),t.add(U)});const m=new ph(4885247,0,22,1.6);m.position.set(0,4,-2.3),t.add(m);const f=new nu(16773584,0,45,.6,.6,1.2);f.position.set(0,1.3,-3.6),f.target.position.set(0,0,-16),t.add(f,f.target);const g=new qt;g.position.set(0,2.85,-.4),t.add(g);const v=new Pt;v.cyl(0,0,0,.32,.3,xn,12),v.box(0,.3,0,.24,.35,.24,r),g.add(new $e(v.geometry(),s));const S=new qt;S.position.set(0,.55,0),g.add(S);const p=new Pt;p.add(xe.cyl(10),0,0,-.5,.2,1.1,.2,xn,0,Math.PI/2),p.add(xe.cyl(10),0,0,-1.08,.3,.16,.3,r,0,Math.PI/2),p.ball(0,0,0,.17,xn);const u=new $e(p.geometry(),s);u.castShadow=!0,S.add(u);const M=new dt;M.position.set(0,0,-1.2),S.add(M);const I=new qt;I.position.set(0,2.85,2.7),t.add(I);const E=new Pt;E.cyl(0,0,0,.75,.25,xn,16),E.box(0,.25,0,.9,.5,.9,r),I.add(new $e(E.geometry(),s));const C=new qt;C.position.set(0,.6,0),I.add(C);const R=Uc(5.6,.95,xn);C.add(R);const P=Uc(5,.72,yr);P.position.set(0,.16,-.3),C.add(P);const x=new dt;P.add(x),x.position.set(0,.2,-5);const T=ex(),D=[];for(const[a,_]of[[-2.35,!0],[1.55,!1],[2.75,!1]])for(const U of[-1,1]){const A=new qt;A.position.set(U*1.08,.55,a);const y=new $e(T,i);y.rotation.y=U<0?Math.PI:0,y.castShadow=!0;const w=new qt;w.add(y),A.add(w),e.add(A),D.push({pivot:A,spin:w,steer:_})}return e.userData={body:t,wheels:D,lightMats:h,lightMeshes:d,blue:m,headlamp:f,cannonYaw:g,cannonPitch:S,nozzle:M,turntable:I,ladderPitch:C,upper:P,tip:x,lean:0,pitch:0,bounce:0,bounceV:0,lastSpeed:0,ladder:0,aimYaw:0,aimPitch:.25,laddYaw:0},e}function Uc(n,e,t){const i=new Pt;for(const o of[-1,1])i.box(o*e/2,0,-n/2,.1,.16,n,t);for(let o=.25;o<n;o+=.45)i.box(0,.04,-o,e,.06,.06,t);const s=new $e(i.geometry(),new Xt({vertexColors:!0}));s.castShadow=!0;const r=new qt;return r.add(s),r}const ui=new X;function tx(n,e,t,i,s){const r=n.userData;n.position.set(e.x,s.y??0,e.z),n.rotation.y=-e.heading;const o=e.yawRate*e.speed;r.lean=St(r.lean,Zt(-o*.012,-.08,.08),6,t);const l=(e.speed-r.lastSpeed)/Math.max(t,.001);r.lastSpeed=e.speed,r.pitch=St(r.pitch,Zt(-l*.006,-.05,.05),5,t),r.bounceV+=(-r.bounce*120-r.bounceV*9)*t,r.bounce+=r.bounceV*t,s.bump&&(r.bounceV+=s.bump),r.body.rotation.set(r.pitch,0,r.lean),r.body.position.y=r.bounce*.15+Math.sin(i*30)*.004*Math.min(1,Math.abs(e.speed));for(const p of r.wheels)p.spin.rotation.x-=e.speed*t/.55,p.steer&&(p.pivot.rotation.y=Zt(-e.yawRate*.5,-.5,.5));const c=s.siren,h=i*3.2%1,d=c&&(h<.12||h>.2&&h<.32),m=c&&h>.5&&(h<.62||h>.7&&h<.82);if(r.lightMats[0].emissiveIntensity=d?4:.05,r.lightMats[1].emissiveIntensity=m?4:.05,r.lightMats[0].color.setHex(d?10142975:2771616),r.lightMats[1].color.setHex(m?10142975:2771616),r.blue.intensity=d||m?s.night?60:18:0,r.blue.position.x=d?-.6:.6,r.headlamp.intensity=s.night?120:0,s.aim){ui.set(s.aim.x,s.aim.y,s.aim.z),r.cannonYaw.parent.worldToLocal(ui);const p=ui.x-r.cannonYaw.position.x,u=ui.z-r.cannonYaw.position.z,M=Math.atan2(-p,-u);r.aimYaw+=on(r.aimYaw,M)*Math.min(1,t*12),s.aimPitch!=null&&(r.aimPitch=St(r.aimPitch,s.aimPitch,12,t))}else r.aimYaw+=on(r.aimYaw,0)*Math.min(1,t*3),r.aimPitch=St(r.aimPitch,.1,3,t);r.cannonYaw.rotation.y=r.aimYaw,r.cannonPitch.rotation.x=r.aimPitch,r.ladder=St(r.ladder,s.ladderUp?1:0,s.ladderUp?3:2.6,t);let f=0;s.ladderUp&&s.ladderAt&&(ui.set(s.ladderAt.x,0,s.ladderAt.z),r.turntable.parent.worldToLocal(ui),f=Math.atan2(-(ui.x-r.turntable.position.x),-(ui.z-r.turntable.position.z)));const g=Math.min(1,r.ladder*2.5);r.laddYaw+=on(r.laddYaw,f*g)*Math.min(1,t*3),r.turntable.rotation.y=r.laddYaw;const v=Zt((r.ladder-.15)/.5,0,1);r.ladderPitch.rotation.x=v*.75;const S=Zt((r.ladder-.45)/.55,0,1);r.upper.position.z=-.3-S*s.ladderReach}function nx(n,e){return n.updateMatrixWorld(!0),n.userData.nozzle.getWorldPosition(e)}function ix(n,e){return n.userData.tip.getWorldPosition(e)}function sx(n,e){return n.userData.turntable.getWorldPosition(e)}const di={pitch:.86,distance:48,minDistance:24,maxDistance:90,baseYaw:.32},pi={distance:13,height:6,lookAhead:6,minDistance:10,maxDistance:30};function rx(n,{view:e=0,mode:t="above",blocker:i=null}={}){const s=new X,r=new X;let o=di.baseYaw+e*(Math.PI/2),l=o,c=di.distance,h=di.distance,d=0,m=e,f=pi.distance,g=0,v=1;const S=new X,p=new X;function u(I,E=1){const C=Math.sin(g),R=-Math.cos(g),P=f/pi.distance;if(i){S.set(s.x,2.5,s.z),p.set(s.x-C*f,s.y+pi.height*P,s.z-R*f);const T=Math.max(.2,i(S,p)-.08);v=T<v?St(v,T,25,E):St(v,T,2.5,E)}const x=f*v;n.position.set(s.x-C*x,s.y+pi.height*P*(.7+.3*v)+(1-v)*4,s.z-R*x),d>0&&(n.position.x+=(Math.random()-.5)*d,n.position.y+=(Math.random()-.5)*d),n.lookAt(s.x+C*pi.lookAhead,s.y+1.2,s.z+R*pi.lookAhead)}function M(){const I=Math.cos(di.pitch)*c;n.position.set(s.x-Math.sin(o)*I,s.y+Math.sin(di.pitch)*c,s.z+Math.cos(o)*I),d>0&&(n.position.x+=(Math.random()-.5)*d,n.position.y+=(Math.random()-.5)*d),n.lookAt(s)}return{get yaw(){return o},get distance(){return c},get view(){return m},get mode(){return t},setMode(I,E){t=I,E&&this.reset(E)},turn(I=1){return m=((m+I)%4+4)%4,l=di.baseYaw+m*(Math.PI/2),m},zoom(I){if(t==="behind"){f=Zt(f*I,pi.minDistance,pi.maxDistance);return}h=Zt(h*I,di.minDistance,di.maxDistance)},kick(I){d=Math.max(d,I)},reset(I){s.set(I.x,0,I.z),r.set(0,0,0),o=l,g=I.heading,t==="behind"?u():M()},update(I,E,C=null){if(t==="behind"){s.x=St(s.x,E.x,8,I),s.y=St(s.y,C?Math.min(3,(C.y??0)*.3):0,3,I),s.z=St(s.z,E.z,8,I);let a=E.heading;if(C){const _=Math.atan2(C.x-E.x,-(C.z-E.z));a+=Zt(on(a,_),-.9,.9)*.5}g+=on(g,a)*Math.min(1,I*(2+Math.abs(E.speed)*.15)),d=Math.max(0,d-I*2),u(E,I);return}const R=Math.sin(E.heading)*E.speed,P=-Math.cos(E.heading)*E.speed;r.x=St(r.x,R*.7,1.5,I),r.z=St(r.z,P*.7,1.5,I);let x=E.x+r.x,T=E.z+r.z,D=0;if(C){const _=Math.hypot(C.x-E.x,C.z-E.z)<40?.42:0;x+=(C.x-x)*_,T+=(C.z-T)*_,D=(C.y??0)*.25}s.x=St(s.x,x,4,I),s.y=St(s.y,D,3,I),s.z=St(s.z,T,4,I),o+=on(o,l)*Math.min(1,I*4),c=St(c,h,4,I),d=Math.max(0,d-I*2),M()},toWorld(I,E){const C=t==="behind"?g:o,R=Math.sin(C),P=-Math.cos(C),x=Math.cos(C),T=Math.sin(C);return{dx:x*I+R*E,dz:T*I+P*E}}}}function Na(n,e){try{n.setPointerCapture(e)}catch{}}function ax({actions:n={},onFirstInput:e=()=>{}}={}){const t=new Set;let i=!1;const s={mx:0,my:0,spray:!1,aim:null},r={aim:null};let o=0;const l=()=>{o=0,i||(i=!0,e())},c={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"spray",Enter:"spray",NumpadEnter:"spray"};addEventListener("keydown",T=>{if(T.target&&(T.target.tagName==="INPUT"||T.target.tagName==="TEXTAREA")||T.ctrlKey||T.metaKey||T.altKey)return;l();const D=c[T.code];if(D){t.add(D),(T.code.startsWith("Arrow")||T.code==="Space")&&T.preventDefault();return}T.repeat||(T.code==="KeyF"||T.code==="KeyN"?n.siren?.():T.code==="KeyH"||T.code==="KeyB"?n.horn?.():T.code==="KeyL"?n.ladder?.():T.code==="KeyQ"?n.turn?.(-1):T.code==="KeyE"?n.turn?.(1):T.code==="KeyM"?n.sound?.():T.code==="KeyT"?n.light?.():T.code==="KeyC"?n.camera?.():T.code==="Minus"||T.code==="NumpadSubtract"?n.zoom?.(1.15):(T.code==="Equal"||T.code==="NumpadAdd")&&n.zoom?.(1/1.15))}),addEventListener("keyup",T=>{const D=c[T.code];D&&t.delete(D)}),addEventListener("blur",()=>{t.clear(),r.aim=null});const h=T=>T.preventDefault();document.addEventListener("gesturestart",h,{passive:!1}),document.addEventListener("gesturechange",h,{passive:!1}),document.addEventListener("gestureend",h,{passive:!1}),document.addEventListener("touchmove",T=>{T.touches.length>1&&T.preventDefault()},{passive:!1});let d=0;document.addEventListener("touchend",T=>{const D=performance.now();D-d<320&&!T.target.closest?.("button")&&T.preventDefault(),d=D},{passive:!1}),document.addEventListener("dblclick",h,{passive:!1});const m=document.querySelector("#stickPad"),f=document.querySelector("#stickKnob"),g=document.querySelector("#stickBase");let v=null,S=0,p=0;const u=60;if(m){m.addEventListener("pointerdown",D=>{l(),v===null&&(v=D.pointerId,Na(m,D.pointerId),S=D.clientX,p=D.clientY,g&&(g.style.left=`${S}px`,g.style.top=`${p}px`,g.classList.add("on")),D.preventDefault())}),m.addEventListener("pointermove",D=>{if(D.pointerId!==v)return;let a=(D.clientX-S)/u,_=(D.clientY-p)/u;const U=Math.hypot(a,_);U>1.4&&(S+=(D.clientX-S)*(U-1.4)/U,p+=(D.clientY-p)*(U-1.4)/U,g&&(g.style.left=`${S}px`,g.style.top=`${p}px`),a/=U/1.4,_/=U/1.4);const A=Math.min(1,Math.hypot(a,_)),y=Math.atan2(_,a),w=A<.15?0:Math.min(1,(A-.15)/.55);s.mx=Math.cos(y)*w,s.my=-Math.sin(y)*w,f&&(f.style.transform=`translate(${Math.cos(y)*Math.min(A,1)*u*.75}px, ${Math.sin(y)*Math.min(A,1)*u*.75}px)`)});const T=D=>{D.pointerId===v&&(v=null,s.mx=0,s.my=0,f&&(f.style.transform=""),g?.classList.remove("on"))};m.addEventListener("pointerup",T),m.addEventListener("pointercancel",T)}const M=document.querySelector("#aimPad");let I=null;if(M){M.addEventListener("pointerdown",D=>{l(),I===null&&(I=D.pointerId,Na(M,D.pointerId),s.aim={x:D.clientX,y:D.clientY},D.preventDefault())}),M.addEventListener("pointermove",D=>{D.pointerId===I&&(s.aim={x:D.clientX,y:D.clientY})});const T=D=>{D.pointerId===I&&(I=null,s.aim=null)};M.addEventListener("pointerup",T),M.addEventListener("pointercancel",T)}const E=()=>document.querySelector("canvas");addEventListener("pointerdown",T=>{T.pointerType!=="mouse"||T.button!==0||T.target!==E()||(l(),r.aim={x:T.clientX,y:T.clientY})}),addEventListener("pointermove",T=>{T.pointerType==="mouse"&&r.aim&&(r.aim={x:T.clientX,y:T.clientY})}),addEventListener("pointerup",T=>{T.pointerType==="mouse"&&(r.aim=null)}),addEventListener("wheel",T=>{T.target===E()&&n.zoom?.(T.deltaY>0?1.1:1/1.1)},{passive:!0}),((T,D)=>{const a=document.querySelector(T);if(!a)return;const _=new Set;a.addEventListener("pointerdown",A=>{l(),_.add(A.pointerId),Na(a,A.pointerId),s[D]=!0,a.classList.add("down"),A.preventDefault()});const U=A=>{_.delete(A.pointerId),_.size||(s[D]=!1,a.classList.remove("down"))};a.addEventListener("pointerup",U),a.addEventListener("pointercancel",U),a.addEventListener("contextmenu",A=>A.preventDefault())})("#sprayBtn","spray");const R=(T,D)=>{const a=document.querySelector(T);if(!a)return;a.addEventListener("pointerdown",U=>{l(),U.preventDefault(),a.classList.add("down"),D()});const _=()=>a.classList.remove("down");a.addEventListener("pointerup",_),a.addEventListener("pointercancel",_),a.addEventListener("pointerleave",_),a.addEventListener("contextmenu",U=>U.preventDefault())};R("#sirenBtn",()=>n.siren?.()),R("#hornBtn",()=>n.horn?.()),R("#ladderBtn",()=>n.ladder?.());const P=[];function x(){const T=navigator.getGamepads?navigator.getGamepads():[];for(const D of T){if(!D||!D.connected)continue;const a=y=>D.buttons[y]?.value??0,_=y=>{const w=a(y)>.5,N=P[y];return P[y]=w,w&&!N};_(2)&&n.siren?.(),_(1)&&n.horn?.(),_(3)&&n.ladder?.(),_(4)&&n.turn?.(-1),_(5)&&n.turn?.(1),_(9)&&n.menu?.();const U=y=>Math.abs(y)<.15?0:y,A={mx:U(D.axes[0]||0),my:-U(D.axes[1]||0),ax:U(D.axes[2]||0),ay:-U(D.axes[3]||0),spray:a(0)>.5||a(7)>.3};return(A.mx||A.my||A.spray||A.ax||A.ay)&&l(),A}return null}return{get lastActivity(){return o},sample(T){o+=T;const D=(t.has("right")?1:0)-(t.has("left")?1:0),a=(t.has("up")?1:0)-(t.has("down")?1:0),_=x();let U=D+s.mx+(_?.mx||0),A=a+s.my+(_?.my||0);const y=Math.hypot(U,A);y>1&&(U/=y,A/=y),(s.mx||s.my||s.spray||s.aim)&&(o=0);const w=_&&(_.ax||_.ay)?{x:Zt(_.ax,-1,1),y:Zt(_.ay,-1,1)}:null;return{mx:U,my:A,spray:t.has("spray")||s.spray||!!_?.spray||!!s.aim||!!r.aim||!!w,aim:s.aim||r.aim,stickAim:w}}}}const Ti=3625070,ox=2763312,lx=14212579,cx=new Xt({vertexColors:!0});function Er(n,e,t,i=.42,s=.36){for(const r of e)for(const o of t)n.add(xe.cyl(14),r,i,o,i*2,s,i*2,ox,0,0,Math.PI/2),n.add(xe.cyl(10),r+Math.sign(r)*.02,i,o,i*1,s+.02,i*1,lx,0,0,Math.PI/2)}function wr(n,e,t,i,s){for(const r of[-1,1])n.box(r*(e/2-.3),s,t-.02,.36,.22,.06,16774344),n.box(r*(e/2-.3),s,i+.02,.32,.2,.06,14831690)}function Ph(n,e=14831690){const t=new Pt;if(n==="bus"){const s=e??14831690;t.box(0,.45,0,2.4,2.6,8.4,s),t.box(0,3.05,0,2.3,.12,8.2,16053492);for(let r=0;r<6;r++)for(const o of[-1,1])t.box(o*1.21,1.75,-3.2+r*1.3,.04,.9,1.1,Ti);t.box(0,1.5,-4.21,2.1,1.3,.04,Ti),t.box(0,.6,-4.22,2,.35,.04,15913019),t.box(0,1.3,0,2.42,.18,8.42,15913019),Er(t,[-1.05,1.05],[-2.8,2.8],.5,.4),wr(t,2.4,-4.2,4.2,.75)}else if(n==="icecream")t.box(0,.4,.4,2.1,2.2,3.8,16774392),t.box(0,.4,-1.8,2,1.4,1,16774392),t.box(0,1.4,-1.8,1.9,.6,.9,Ti),t.box(0,.5,.4,2.12,.35,3.82,15899842),t.box(1.06,1.3,.6,.04,.9,2,6965850),t.box(1.2,1.25,.6,.35,.08,2,15899842),t.add(xe.cone(12),0,3.2,.6,.9,1.3,.9,14725232,0,Math.PI),t.ball(0,4,.6,.55,15899842),t.ball(0,4.45,.6,.18,14831690),Er(t,[-.95,.95],[-1.6,1.6]),wr(t,2.1,-2.3,2.3,.75);else if(n==="ambulance"||n==="police"){const r=n==="ambulance"?5222506:3108824;t.box(0,.4,.5,2.1,1.9,3.6,16777215),t.box(0,.4,-1.8,2,1.2,1.2,16777215),t.box(0,1.25,-1.6,1.9,.65,.9,Ti),t.box(0,.9,.2,2.12,.35,4.6,r),t.box(0,2.3,-.6,1.2,.2,.4,4165631),Er(t,[-.95,.95],[-1.5,1.5]),wr(t,2.1,-2.4,2.3,.7)}else{const s=e;t.box(0,.35,0,1.8,.8,3.6,s),t.box(0,1.15,.2,1.6,.7,2,s),t.box(0,1.2,-.82,1.5,.55,.04,Ti),t.box(0,1.2,1.22,1.5,.5,.04,Ti);for(const r of[-1,1])t.box(r*.81,1.2,.2,.04,.48,1.7,Ti);t.box(0,.5,-1.82,1.6,.2,.06,14212579),t.box(0,.5,1.82,1.6,.2,.06,14212579),Er(t,[-.85,.85],[-1.2,1.2],.38,.32),wr(t,1.8,-1.8,1.8,.8)}const i=new $e(t.geometry(),cx);return i.castShadow=!0,i}const oe={grass:9424746,asphalt:6581112,line:16184298,pavement:14472908,garden:10212978,plaza:15391686,square:15518132,apron:13947596,pitch:8178010,dirt:13610624,meadow:11065464,park:9622634,path:15917240,sand:16114344,soil:10121288,trunk:9067066,white:16645110,roofFlat:12432810,glass:9225450,stone:14209220,wood:11565642,yellow:15909403,water:6078694},hx={garden:oe.garden,plaza:oe.plaza,square:oe.square,apron:oe.apron,pitch:oe.pitch,dirt:oe.dirt,meadow:oe.meadow,park:oe.park,path:oe.path,sand:oe.sand};function za(n,e){return n.onBeforeCompile=t=>{t.uniforms.uTruck=e.uTruck,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPos;
uniform vec3 uTruck;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          // Distance from this fragment to the line camera -> truck, if the
          // fragment is in front of the truck. Inside that tube: dither away.
          vec3 a = cameraPosition;
          vec3 b = uTruck + vec3(0.0, 1.6, 0.0);
          vec3 ab = b - a;
          float t = dot(vWorldPos - a, ab) / dot(ab, ab);
          if (t > 0.0 && t < 0.93 && vWorldPos.y > 1.2) {
            float d = length(vWorldPos - (a + ab * t));
            float r = 4.5 * smoothstep(0.55, 0.85, t) + 1.0;
            if (d < r) {
              vec2 px = floor(gl_FragCoord.xy);
              if (mod(px.x + px.y, 2.0) < 1.0 || d < r * 0.6) discard;
            }
          }
        }`)},n.customProgramCacheKey=()=>"seethrough",n}function fx(n,e){const t={uTruck:{value:new X}},i=new Pt,s=new Pt,r=new Pt,o=new Pt,l=new Pt,c=[];i.quad(-700,700,-700,Ot+1,0,oe.grass);const h=Sn+Cn/2;for(let a=0;a<=Ct;a++){const _=kt(a);i.quad(_-Cn/2,_+Cn/2,-h,h,.02,oe.asphalt),i.quad(-h,h,_-Cn/2,_+Cn/2,.021,oe.asphalt)}for(let a=0;a<=Ct;a++)for(let _=0;_<Ct;_++){const U=kt(a),A=kt(_)+10,y=kt(_+1)-10;for(let w=A;w+2.2<=y;w+=5)i.quad(U-.13,U+.13,w,w+2.2,.04,oe.line),i.quad(w,w+2.2,U-.13,U+.13,.04,oe.line)}for(let a=0;a<=Ct;a++)for(let _=0;_<=Ct;_++){const U=kt(a),A=kt(_);for(let y=-4;y<=4;y++){const w=y*1.2;_>0&&i.quad(U+w-.35,U+w+.35,A-9,A-6.6,.04,oe.line),_<Ct&&i.quad(U+w-.35,U+w+.35,A+6.6,A+9,.04,oe.line),a>0&&i.quad(U-9,U-6.6,A+w-.35,A+w+.35,.04,oe.line),a<Ct&&i.quad(U+6.6,U+9,A+w-.35,A+w+.35,.04,oe.line)}}for(const a of e.ground)a.kind==="pavement"&&s.box((a.x0+a.x1)/2,0,(a.z0+a.z1)/2,a.x1-a.x0,Qe,a.z1-a.z0,oe.pavement);for(const a of e.ground){if(a.kind==="pavement")continue;const _=a.kind==="sand"?.012:a.kind==="path"?Qe+.006:Qe+.003;if(a.kind==="field"){for(let U=a.x0,A=0;U<a.x1;U+=2,A++)i.quad(U,Math.min(a.x1,U+2),a.z0,a.z1,_,A%2?10123850:10473306);continue}if(i.quad(a.x0,a.x1,a.z0,a.z1,_,hx[a.kind]??oe.grass),a.kind==="pitch"){const U=(a.x0+a.x1)/2,A=(a.z0+a.z1)/2;i.quad(U-.12,U+.12,a.z0+1.5,a.z1-1.5,_+.004,oe.line),i.disc(U,A,3,_+.003,oe.line),i.disc(U,A,2.75,_+.005,oe.pitch)}}for(const a of e.discs)a.kind==="pond"&&i.disc(a.x,a.z,a.r+.8,Qe+.008,13615784);const d=()=>Math.random()<.6?o:r;for(const a of e.buildings){const _=Qe;if(s.box(a.x,_,a.z,a.w+.3,.5,a.d+.3,Ai(a.color,.78)),s.box(a.x,_,a.z,a.w,a.h,a.d,a.color),a.stripe)for(let U=1;U<a.floors;U++)s.box(a.x,_+U*a.floorH-.25,a.z,a.w+.08,.4,a.d+.08,a.stripe);if((a.roof==="flat"||a.parapet)&&(s.box(a.x,_+a.h,a.z,a.w+.5,.45,a.d+.5,a.trim),s.box(a.x,_+a.h+.45,a.z,a.w-.4,.05,a.d-.4,oe.roofFlat)),a.roof==="gable"||a.roof==="barn"){const U=a.ridge==="z",A=U?Math.PI/2:0,y=U?a.d:a.w,w=U?a.w:a.d;s.add(xe.gable(),a.x,_+a.h,a.z,y,a.roofH,w,a.color,A),s.add(xe.roof(),a.x,_+a.h-.05,a.z,y+.8,a.roofH+.25,w+1,a.roofColor,A),a.roof==="barn"&&s.box(a.x+a.w/2+.05,_,a.z,.12,.3,a.d,oe.white),a.chimney&&s.box(a.x+a.w*.25,_+a.h+a.roofH*.3,a.z+.8,.9,a.roofH*.9,.9,11558986)}if(a.kind==="station"&&s.box(a.x,_+a.floorH-.2,a.z,a.w+.1,.35,a.d+.1,a.trim),a.rooftop==="watertower"){const U=_+a.h+.5;for(const[A,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])s.box(a.x+3+A*1.1,U,a.z-2+y*1.1,.25,2.2,.25,6965818);s.cyl(a.x+3,U+2.2,a.z-2,1.7,2.6,10514506,14),s.cone(a.x+3,U+4.8,a.z-2,1.9,1.2,8018504,14)}else a.rooftop==="vents"&&(s.box(a.x-3,_+a.h+.5,a.z+2,2.4,1.2,1.8,12107976),s.box(a.x+3.5,_+a.h+.5,a.z-3,1.4,.9,1.4,11055288))}for(const a of e.windows){const _=Qe+a.y,U=Math.atan2(a.nx,a.nz);s.add(xe.box(),a.x+a.nx*.04,_,a.z+a.nz*.04,a.w+.32,a.h+.32,.12,oe.white,U),s.add(xe.box(),a.x+a.nx*.13,_-a.h/2-.18,a.z+a.nz*.13,a.w+.5,.12,.3,oe.white,U),d().add(xe.box(),a.x+a.nx*.09,_,a.z+a.nz*.09,a.w,a.h,.08,oe.glass,U)}for(const a of e.doors){const _=Math.atan2(a.nx,a.nz);s.add(xe.box(),a.x+a.nx*.04,Qe+a.h/2+.1,a.z+a.nz*.04,a.w+.4,a.h+.2,.12,oe.white,_),s.add(xe.box(),a.x+a.nx*.09,Qe+a.h/2,a.z+a.nz*.09,a.w,a.h,.1,a.color,_);const U=-a.nz,A=a.nx;s.ball(a.x+a.nx*.18+U*a.w*.32,Qe+a.h*.48,a.z+a.nz*.18+A*a.w*.32,.07,15909403),s.add(xe.box(),a.x+a.nx*.4,Qe+.07,a.z+a.nz*.4,a.w+.8,.14,.8,oe.stone,_)}for(const a of e.awnings){const _=Math.atan2(a.nx,a.nz),U=9,A=-a.nz,y=a.nx,w=a.w/U;for(let N=0;N<U;N++){const F=-a.w/2+w*(N+.5),k=a.stripes&&N%2?oe.white:a.color;s.add(xe.box(),a.x+A*F+a.nx*.85,Qe+2.75,a.z+y*F+a.nz*.85,w,.08,1.8,k,_,.38),s.add(xe.box(),a.x+A*F+a.nx*1.68,Qe+2.28,a.z+y*F+a.nz*1.68,w,.36,.06,k,_)}}for(const a of e.signs){const _=Math.atan2(a.nx,a.nz),U=-a.nz,A=a.nx;s.add(xe.box(),a.x,Qe+3.65,a.z,a.w,.85,.16,a.color,_);for(let y=0;y<5;y++){const w=-2.4+y*1.2;s.add(xe.box(),a.x+U*w+a.nx*.09,Qe+3.65,a.z+A*w+a.nz*.09,.7,.36+y%2*.12,.04,oe.white,_)}}for(const a of e.trees){const _=hs(a.x,a.z);if(s.cyl(a.x,_,a.z,.26,a.h*.5,oe.trunk,7),a.shape==="cone"){const U=Ai(a.color,.82);s.cone(a.x,_+a.h*.28,a.z,a.r*1.05,a.h*.55,U,9),s.cone(a.x,_+a.h*.55,a.z,a.r*.8,a.h*.5,a.color,9)}else s.blob(a.x,_+a.h*.66,a.z,a.r,a.color,.92),s.add(xe.gem(),a.x+a.r*.55,_+a.h*.55,a.z+a.r*.2,a.r*1.3,a.r*1.2,a.r*1.3,Ai(a.color,1.08)),s.add(xe.gem(),a.x-a.r*.45,_+a.h*.58,a.z-a.r*.3,a.r*1.25,a.r*1.15,a.r*1.25,Ai(a.color,.9))}for(const a of e.lamps)s.cyl(a.x,Qe,a.z,.09,4.2,4149087,6),s.box(a.x+a.nx*.3,Qe+4.1,a.z+a.nz*.3,.12+Math.abs(a.nx)*.5,.1,.12+Math.abs(a.nz)*.5,4149087),l.box(a.x+a.nx*.55,Qe+3.85,a.z+a.nz*.55,.36,.26,.36,16773568);for(const a of e.props)g(a);function m(a,_,U){const A=Math.cos(a.rot||0),y=Math.sin(a.rot||0);return[a.x+_*A+U*y,a.z-_*y+U*A]}function f(a,_,U,A,y,w,N,F){const[k,O]=m(a,_,A);s.box(k,U,O,y,w,N,F,a.rot||0)}function g(a){const _=a.y??hs(a.x,a.z),U=a.nz??-1;switch(a.type){case"flowers":{s.box(a.x,_,a.z,a.w,.22,a.d,oe.soil);const A=Math.max(3,Math.round(a.w*1.6));for(let y=0;y<A;y++){const w=a.x-a.w/2+a.w*(y+.5)/A,N=a.z+(y%2?.25:-.25)*a.d;s.blob(w,_+.32,N,.22,5942866),s.add(xe.gem(),w,_+.55,N,.32,.22,.32,y%3===2?oe.white:a.color)}break}case"postbox":s.cyl(a.x,_,a.z,.05,1,6965818,5),s.box(a.x,_+1,a.z,.45,.35,.3,a.color);break;case"bin":s.box(a.x,_,a.z,.7,1,.7,a.color),s.box(a.x,_+1,a.z,.76,.08,.76,Ai(a.color,.75));break;case"washing":{for(const y of[-2,2])s.cyl(a.x+y,_,a.z,.05,1.9,9079434,5);s.box(a.x,_+1.85,a.z,4,.03,.03,14540253);const A=[15882874,4165586,16777215,15913019];for(let y=0;y<4;y++)s.box(a.x-1.5+y,_+1.25,a.z,.6,.6,.05,A[y]);break}case"hedge":s.box(a.x,_,a.z,a.w,a.h,a.d,5939278);break;case"bench":f(a,0,_+.42,0,1.6,.08,.45,oe.wood),f(a,0,_+.5,.22,1.6,.45,.07,oe.wood);for(const A of[-.7,.7])f(a,A,_,0,.08,.42,.4,4149087);break;case"cupcake":s.cyl(a.x,_,a.z,1.6,1.4,15899842,14),s.blob(a.x,_+1.8,a.z,1.8,16774376,.65),s.ball(a.x,_+2.8,a.z,.4,14831690);break;case"teddy":s.blob(a.x,_+1.1,a.z,1.2,11565642),s.blob(a.x,_+2.6,a.z,.85,11565642);for(const A of[-1,1])s.ball(a.x+A*.65,_+3.25,a.z,.3,9067066);s.ball(a.x,_+2.5,a.z-.75,.3,15254682),s.add(xe.box(),a.x,_+1.95,a.z-.3,1,.25,.9,14831690);break;case"cone":a.y!=null?(s.add(xe.cone(12),a.x,_+1.4,a.z,1.8,2.8,1.8,14725232,0,Math.PI),s.ball(a.x,_+3.2,a.z,1.1,15899842),s.ball(a.x,_+4.2,a.z,.85,11067592),s.ball(a.x,_+5,a.z,.25,14831690)):(s.cone(a.x,_,a.z,.3,.8,15895099,10),s.cyl(a.x,_+.35,a.z,.2,.14,oe.white,10));break;case"lolly":s.cyl(a.x,_,a.z,.15,2.4,oe.white,6),s.add(xe.cyl(18),a.x,_+3.6,a.z,3,.4,3,15882874,0,Math.PI/2),s.add(xe.torus(.9,.2),a.x,_+3.6,a.z-.2,1,1,1,oe.white);break;case"teacup":s.cyl(a.x,_,a.z,2,.2,oe.white,16),s.cyl(a.x,_+.2,a.z,1.4,1.8,oe.white,16),s.cyl(a.x,_+1.9,a.z,1.2,.12,8014378,16),s.add(xe.torus(.55,.15),a.x+1.5,_+1.1,a.z,1,1,1,oe.white,Math.PI/2);break;case"donut":s.add(xe.torus(1.3,.65),a.x,_+2,a.z,1,1,1,14725232),s.add(xe.torus(1.3,.55),a.x,_+2,a.z-.18,1,1,1,15899842);break;case"clocktower":{const A=_;s.box(a.x,A,a.z,6,13,6,16049871),s.box(a.x,A+13,a.z,6.6,.5,6.6,oe.white);for(const[y,w]of[[0,-1],[0,1],[1,0],[-1,0]]){const N=Math.atan2(y,w);s.add(xe.cyl(20),a.x+y*3.05,A+10,a.z+w*3.05,3.4,.12,3.4,oe.white,N,Math.PI/2),s.add(xe.box(),a.x+y*3.15,A+10.5,a.z+w*3.15,.18,1.1,.06,2763312,N),s.add(xe.box(),a.x+y*3.15,A+10,a.z+w*3.15,.8,.15,.06,2763312,N)}s.add(xe.cone(4),a.x,A+13.5+2.5,a.z,8.4,5,8.4,5212763,Math.PI/4),s.ball(a.x,A+18.8,a.z,.4,15909403);break}case"fountain":{const A=a.r;s.cyl(a.x,_,a.z,A,.7,oe.stone,24),i.disc(a.x,a.z,A-.3,_+.62,oe.water),s.cyl(a.x,_,a.z,.4,a.small?1.4:2.2,oe.stone,10),s.cyl(a.x,_+(a.small?1.4:2.2),a.z,a.small?.9:1.4,.3,oe.stone,14);const y=new $e(xe.cone(10),new Xt({color:14217983,transparent:!0,opacity:.7})),w=a.small?1.6:2.4;y.position.set(a.x,_+(a.small?1.7:2.5)+w/2,a.z),y.scale.set(.35,w,.35),n.add(y),c.push(N=>{const F=1+Math.sin(N*5+a.x)*.08;y.scale.set(.35*F,w*(2-F),.35*F)});break}case"baydoor":{s.box(a.x,Qe,a.z,a.w+.6,a.h+.4,.3,oe.white),s.box(a.x,Qe,a.z+U*.1,a.w,a.h,.3,13777454);for(let A=1;A<5;A++)s.box(a.x,Qe+A*(a.h/5),a.z+U*.27,a.w,.06,.04,11020834);for(let A=0;A<4;A++)s.box(a.x-a.w/2+.9+A*((a.w-1.8)/3),Qe+a.h*.62,a.z+U*.28,1,.7,.04,oe.glass);break}case"bell":s.box(a.x,_+.9,a.z-U*.2,.15,.5,.6,6965818),s.add(xe.cone(14),a.x,_+.35,a.z+U*.2,1.2,1,1.2,15909403),s.ball(a.x,_+.82,a.z+U*.2,.32,15909403),s.ball(a.x,_-.15,a.z+U*.2,.15,13146651);break;case"stationsign":s.box(a.x,_,a.z,14,1.2,.2,oe.white);for(let A=0;A<9;A++)s.box(a.x-5.6+A*1.4,_+.25,a.z+U*.12,.9,.7,.05,13125178);break;case"hosetower":s.box(a.x,Qe,a.z,5,a.h,5,13125178),s.box(a.x,Qe+a.h,a.z,5.6,.6,5.6,16774368);for(let A=1;A<4;A++)s.box(a.x,Qe+A*4,a.z+U*2.55,1,1.4,.12,oe.glass);break;case"flagpole":{s.cyl(a.x,_,a.z,.08,a.h,14540253,6);const A=new $e(xe.box(),new Xt({color:14165291}));A.scale.set(2.2,1.3,.05),A.position.set(a.x+1.15,_+a.h-.8,a.z),n.add(A),c.push(y=>{A.rotation.y=Math.sin(y*2.4)*.25,A.position.x=a.x+Math.cos(A.rotation.y)*1.15,A.position.z=a.z-Math.sin(A.rotation.y)*1.15});break}case"hydrant":s.cyl(a.x,_,a.z,.22,.7,14825518,10),s.ball(a.x,_+.72,a.z,.24,14825518),s.add(xe.cyl(8),a.x,_+.45,a.z,.16,.6,.16,15909403,0,0,Math.PI/2);break;case"heartsign":{s.box(a.x,_,a.z,4,3,.2,oe.white),s.ball(a.x-.45,_+1.9,a.z+U*.15,.62,14831690),s.ball(a.x+.45,_+1.9,a.z+U*.15,.62,14831690),s.add(xe.box(),a.x,_+1.35,a.z+U*.15,1.15,1.15,.3,14831690,0,0,Math.PI/4);break}case"parked":{const A=Ph(a.vehicle);A.position.set(a.x,_,a.z),A.rotation.y=-a.heading,n.add(A);break}case"bluelamp":l.box(a.x,_,a.z,.6,.6,.6,5937919);break;case"schoolclock":s.add(xe.cyl(20),a.x,_,a.z+U*.1,2.2,.12,2.2,oe.white,0,Math.PI/2),s.add(xe.box(),a.x,_+.35,a.z+U*.2,.14,.75,.05,2763312),s.add(xe.box(),a.x+.25,_,a.z+U*.2,.6,.12,.05,2763312);break;case"goal":for(const A of[-1.8,1.8])f(a,A,_,0,.12,1.8,.12,oe.white);f(a,0,_+1.8,0,3.72,.12,.12,oe.white),f(a,0,_+.9,.8,3.6,1.8,.04,15263976);break;case"slide":{f(a,-1.5,_,0,.8,2.4,.8,15909403),f(a,-1.5,_+2.4,0,1,.12,1,4165586);const[A,y]=m(a,.3,0);s.add(xe.box(),A,_+1.25,y,3.6,.12,.9,14831690,(a.rot||0)+0,0,-.6);break}case"swings":for(const A of[-1.8,1.8])f(a,A,_,-.6,.12,2.6,.12,4165586),f(a,A,_,.6,.12,2.6,.12,4165586);f(a,0,_+2.5,0,3.8,.14,.14,4165586);for(const A of[-.8,.8])f(a,A,_+.5,0,.6,.08,.3,14831690),f(a,A-.25,_+.55,0,.03,1.95,.03,8947848),f(a,A+.25,_+.55,0,.03,1.95,.03,8947848);break;case"stall":{s.box(a.x,_,a.z,3.6,.9,2,oe.wood);for(const[y,w]of[[-1.8,-1.1],[1.8,-1.1],[1.8,1.1],[-1.8,1.1]])s.box(a.x+y,_,a.z+w,.1,2.5,.1,15658734);for(let y=0;y<6;y++)s.box(a.x-1.75+y*.7+.35,_+2.5,a.z,.7,.2,2.6,y%2?oe.white:a.color);const A={apples:14825518,flowers:15882874,cheese:15913019,fish:10470361,cakes:15899842,veg:5222506,toys:4165586,bread:14196832,honey:15903035}[a.goods];for(let y=0;y<8;y++)s.ball(a.x-1.4+y%4*.9,_+1.05,a.z-.4+Math.floor(y/4)*.8,.28,A);break}case"frame":{for(let y=0;y<=a.floors;y++)s.box(a.x,Qe+y*3.2,a.z,a.w,.3,a.d,13157564);for(let y=0;y<=3;y++)for(let w=0;w<=2;w++){const N=a.x-a.w/2+.3+y*(a.w-.6)/3,F=a.z-a.d/2+.3+w*(a.d-.6)/2;s.box(N,Qe,F,.4,a.floors*3.2,.4,12104876)}for(let y=0;y<=6;y++)s.box(a.x-a.w/2+y*(a.w/6),Qe,a.z-a.d/2-1.2,.1,a.floors*3.2+1,.1,oe.yellow);for(let y=1;y<=a.floors;y++)s.box(a.x,Qe+y*3.2,a.z-a.d/2-1.2,a.w,.1,.1,oe.yellow);break}case"crane":{s.box(a.x,Qe,a.z,3.2,1,3.2,9079434),s.box(a.x,Qe+1,a.z,1.8,a.h-1,1.8,oe.yellow),s.box(a.x,Qe+a.h,a.z,2.6,2.2,2.6,oe.yellow);const A=new qt,y=new Pt;y.box(5,0,0,22,.9,1.1,oe.yellow),y.box(-6,-.4,0,4,1.6,2,8026746),y.box(12,-9,0,.05,9,.05,4473924),y.box(12,-9.6,0,.9,.6,.6,14831690),y.box(12,-12.4,0,2.4,2.4,2.4,7317724);const w=new $e(y.geometry(),new Xt({vertexColors:!0}));w.castShadow=!0,A.add(w),A.position.set(a.x,Qe+a.h+2.2,a.z),n.add(A),c.push(N=>A.rotation.y=Math.sin(N*.08)*1.4+.6);break}case"digger":{f(a,0,_,0,2.6,.7,3.4,3816e3),f(a,0,_+.7,.3,2.4,1.4,2.4,oe.yellow),f(a,0,_+2.1,.5,1.6,1.2,1.4,oe.yellow),f(a,0,_+2.2,0,1.5,.9,.05,oe.glass);const[A,y]=m(a,0,-2.2);s.add(xe.box(),A,_+2.4,y,.5,.5,3.2,oe.yellow,a.rot||0,-.5);const[w,N]=m(a,0,-3.8);s.box(w,_,N,1.4,.8,.9,6974064,a.rot||0);break}case"sandpile":s.cone(a.x,_,a.z,a.r,2.4,15255690,12);break;case"skip":f(a,0,_,0,4,1.5,2.2,oe.yellow),f(a,0,_+1.45,0,3.6,.1,1.8,6969928);break;case"silo":s.cyl(a.x,_,a.z,3,a.h,14212579,18),s.ball(a.x,_+a.h,a.z,3,12107976,18,9);for(let A=1;A<4;A++)s.cyl(a.x,_+A*(a.h/4),a.z,3.05,.2,10134186,18);break;case"hay":s.add(xe.cyl(14),a.x,_+a.r,a.z,a.r*2,1.7,a.r*2,15254618,.4,0,Math.PI/2),s.add(xe.cyl(14),a.x,_+a.r,a.z,a.r*1.4,1.74,a.r*1.4,14200906,.4,0,Math.PI/2);break;case"tractor":f(a,0,_+.6,.2,1.6,1,3.2,5221962),f(a,0,_+1.6,.8,1.5,1.4,1.4,5221962),f(a,0,_+1.75,.8,1.55,.9,1.3,oe.glass),f(a,0,_+3,.8,1.7,.1,1.6,15921906);for(const A of[-1,1]){const[y,w]=m(a,A*1,1);s.add(xe.cyl(14),y,_+.85,w,1.7,.6,1.7,2763312,a.rot||0,0,Math.PI/2),s.add(xe.cyl(10),y,_+.85,w,.9,.64,.9,15909403,a.rot||0,0,Math.PI/2);const[N,F]=m(a,A*.85,-1.1);s.add(xe.cyl(12),N,_+.5,F,1,.4,1,2763312,a.rot||0,0,Math.PI/2)}break;case"fence":{const A=a.x-a.w/2,y=a.x+a.w/2,w=a.z-a.d/2,N=a.z+a.d/2;for(let F=A;F<=y+.01;F+=3)s.box(F,_,w,.15,1.1,.15,oe.white),s.box(F,_,N,.15,1.1,.15,oe.white);for(let F=w;F<=N+.01;F+=3)s.box(A,_,F,.15,1.1,.15,oe.white),s.box(y,_,F,.15,1.1,.15,oe.white);for(const F of[.5,.95])s.box(a.x,_+F,w,a.w,.1,.06,oe.white),s.box(a.x,_+F,N,a.w,.1,.06,oe.white),s.box(A,_+F,a.z,.06,.1,a.d,oe.white),s.box(y,_+F,a.z,.06,.1,a.d,oe.white);break}case"windmill":{s.cyl(a.x,_,a.z,2.2,1,14209220,12),s.add(xe.cyl(12),a.x,_+a.h/2,a.z,3.4,a.h,3.4,oe.white),s.cone(a.x,_+a.h,a.z,2,2.4,4157327,12);const A=new qt,y=new Pt;for(let N=0;N<4;N++){const F=N*Math.PI/2;y.add(xe.box(),Math.cos(F)*3.4,Math.sin(F)*3.4,0,6.6,.18,.1,oe.wood,0,0,F),y.add(xe.box(),Math.cos(F)*3.8-Math.sin(F)*.55,Math.sin(F)*3.8+Math.cos(F)*.55,0,5,1,.06,oe.white,0,0,F)}y.ball(0,0,0,.5,14831690);const w=new $e(y.geometry(),new Xt({vertexColors:!0}));w.castShadow=!0,A.add(w),A.position.set(a.x,_+a.h+.6,a.z-1.9),n.add(A),c.push(N=>A.rotation.z=N*.7);break}case"cow":{f(a,0,_+.7,0,1,.9,1.9,oe.white),f(a,.3,_+1.25,.2,.42,.38,.7,2763312),f(a,-.2,_+.95,-.4,.62,.4,.5,2763312),f(a,0,_+1.1,-1.15,.7,.7,.6,oe.white),f(a,0,_+1.05,-1.5,.6,.35,.12,15904952);for(const[A,y]of[[-.35,-.7],[.35,-.7],[-.35,.7],[.35,.7]])f(a,A,_,y,.2,.72,.2,oe.white);break}case"duck":{const A=new Pt;A.blob(0,.2,0,.32,16774320,.7),A.blob(0,.45,-.25,.18,16774320),A.add(xe.box(),0,.43,-.45,.12,.06,.16,15895099);const y=new $e(A.geometry(),new Xt({vertexColors:!0}));n.add(y);const w=Math.hypot(a.x-a.pond.x,a.z-a.pond.z),N=Math.atan2(a.z-a.pond.z,a.x-a.pond.x);c.push(F=>{const k=N+F*.15;y.position.set(a.pond.x+Math.cos(k)*w,Qe+.02+Math.sin(F*2+N)*.03,a.pond.z+Math.sin(k)*w),y.rotation.y=-k+Math.PI});break}case"picnic":f(a,0,_+.75,0,1,.08,2,oe.wood);for(const A of[-.75,.75])f(a,A,_+.42,0,.35,.06,2,oe.wood);for(const A of[-.6,.6])f(a,0,_,A,1.6,.42,.08,oe.wood);f(a,0,_+.83,0,.9,.02,.9,14831690);break;case"bbq":for(const A of[0,2.1,4.2])s.box(a.x+Math.cos(A)*.25,_,a.z+Math.sin(A)*.25,.05,.6,.05,2763312);s.add(xe.sphere(12,8),a.x,_+.75,a.z,.8,.6,.8,2763312);break;case"roundabout":{s.cyl(a.x,_,a.z,2.2,.25,14831690,18),s.cyl(a.x,_+.25,a.z,.12,1,15909403,8);break}case"sandpit":s.box(a.x,_,a.z,a.r*2,.3,a.r*2,oe.wood),s.box(a.x,_+.01,a.z,a.r*2-.5,.3,a.r*2-.5,oe.sand),s.cone(a.x+.8,_+.3,a.z-.6,.6,.7,15255690,8);break;case"seesaw":f(a,0,_,0,.3,.6,.3,4165586);{const[A,y]=m(a,0,0);s.add(xe.box(),A,_+.65,y,3.6,.1,.35,15909403,a.rot||0,0,.2)}break;case"hut":{s.box(a.x,_,a.z,3.2,3,3,oe.white);for(let A=0;A<4;A++)s.box(a.x-1.2+A*.8,_,a.z-1.52,.4,3,.05,a.color);s.add(xe.gable(),a.x,_+3,a.z,3.2,1.2,3,oe.white,Math.PI/2),s.add(xe.roof(),a.x,_+2.95,a.z,3.6,1.35,3.8,a.color,Math.PI/2),s.box(a.x,_,a.z-1.56,1.2,2.2,.05,Ai(a.color,.7));break}case"umbrella":s.cyl(a.x,_,a.z,.05,2.2,oe.white,5),s.cone(a.x,_+2,a.z,1.6,.6,a.color,10),s.box(a.x+1,_,a.z+.8,1,.04,1.9,Ai(a.color,1.2));break;case"lifeguard":for(const[A,y]of[[-.8,-.8],[.8,-.8],[.8,.8],[-.8,.8]])s.box(a.x+A,_,a.z+y,.15,2.4,.15,oe.white);s.box(a.x,_+2.4,a.z,2.2,1.6,2.2,14825518),s.box(a.x,_+2.8,a.z-1.11,1.6,.6,.04,oe.glass),s.add(xe.roof(),a.x,_+4,a.z,2.6,.8,2.6,oe.white);break;case"sandcastle":s.box(a.x,_,a.z,2,.8,2,15255690);for(const[A,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])s.cyl(a.x+A,_,a.z+y,.4,1.3,15255690,8);s.cone(a.x,_+.8,a.z,.6,1,15255690,8),s.box(a.x,_+1.8,a.z,.02,.6,.02,8947848),s.box(a.x+.2,_+2.2,a.z,.4,.25,.02,14831690);break;case"pier":{s.box(a.x,.25,a.z,a.w,.25,a.d,oe.wood);for(let A=a.z-a.d/2+2;A<a.z+a.d/2;A+=5)for(const y of[-1,1])s.box(a.x+y*(a.w/2-.2),-2,A,.4,2.3,.4,8018490),s.box(a.x+y*(a.w/2-.1),.5,A,.15,1.1,.15,oe.white);for(const A of[-1,1])s.box(a.x+A*(a.w/2-.1),1.45,a.z+1.5,.1,.1,a.d-9,oe.white);break}case"pierhead":{s.cyl(a.x,.25,a.z,a.r,.25,oe.wood,40);const A=34;for(let y=0;y<A;y++){const w=y/A*Math.PI*2,N=a.x+Math.cos(w)*(a.r-.2),F=a.z+Math.sin(w)*(a.r-.2);if(s.box(N,-2,F,.4,2.3,.4,8018490),F<a.z&&Math.abs(N-a.x)<a.neck/2+.5)continue;s.box(N,.5,F,.15,1.1,.15,oe.white);const k=(y+.5)/A*Math.PI*2,O=Math.PI*2*a.r/A*1.02;s.add(xe.box(),a.x+Math.cos(k)*(a.r-.2),1.5,a.z+Math.sin(k)*(a.r-.2),O,.1,.1,oe.white,-k-Math.PI/2)}break}case"lighthouse":{for(let y=0;y<5;y++){const w=2.6-y*.25;s.add(xe.cyl(16),a.x,.5+(y+.5)*(a.h/5),a.z,w*2,a.h/5,w*2,y%2?oe.white:14825518)}s.cyl(a.x,.5+a.h,a.z,2,.3,2763312,16),s.cyl(a.x,.5+a.h+2.4,a.z,1.6,.3,2763312,16),s.cone(a.x,.5+a.h+2.7,a.z,1.7,1.6,14825518,16),l.cyl(a.x,.5+a.h+.3,a.z,1.2,2.1,16773536,12);break}case"boat":{const A=new Pt;A.box(0,-.3,0,2.2,1,5,a.color),A.box(0,.7,0,2,.1,4.8,oe.white),A.box(0,.8,.6,1.2,1,1.6,oe.white),A.box(0,.8,.6,1.24,.4,1,oe.glass),A.cyl(0,.8,-1,.06,4,14540253,5),A.add(xe.gable(),0,1.4,-1.6,.06,3.2,1.6,oe.white,Math.PI/2);const y=new $e(A.geometry(),new Xt({vertexColors:!0}));y.castShadow=!0,n.add(y),c.push(w=>{y.position.set(a.x+Math.sin(w*.05+a.x)*6,Math.sin(w*1.2+a.x)*.15,a.z),y.rotation.set(Math.sin(w*1.1+a.z)*.06,a.rot+Math.sin(w*.05+a.x)*.1,Math.sin(w*.9+a.x)*.08)});break}}}const v=new $e(new Di(3e3,1400),new Us({color:4174044,shininess:60,specular:8965358}));v.rotation.x=-Math.PI/2,v.position.set(0,.03,Ot+700),v.receiveShadow=!0,n.add(v);const S=new $e(new Di(3e3,1.4),new us({color:16777215,transparent:!0,opacity:.8}));S.rotation.x=-Math.PI/2,S.position.set(0,.05,Ot+.4),n.add(S),c.push(a=>{S.position.z=Ot+.2+Math.sin(a*.9)*.8,S.material.opacity=.55+Math.sin(a*.9+1)*.25});for(const a of e.discs){if(a.kind!=="pond")continue;const _=new $e(new Vs(a.r,32),new Us({color:oe.water,shininess:80,specular:10083839}));_.rotation.x=-Math.PI/2,_.position.set(a.x,Qe+.012,a.z),_.receiveShadow=!0,n.add(_)}const p=new Pt;for(let a=0;a<70;a++){const _=a/70*Math.PI*2;if(Math.sin(_)>.35)continue;const U=520+a*37%9*22,A=70+a*53%7*18;p.blob(Math.cos(_)*U,-A*.15,Math.sin(_)*U,A,a%3?8175458:6991448,.55)}for(let a=0;a<90;a++){const _=a/90*Math.PI*2;if(Math.sin(_)>.5)continue;const U=290+a*13%5*12;p.blob(Math.cos(_)*U,4,Math.sin(_)*U,16+a*7%4*4,5939022,.8)}const u=new $e(p.geometry(),new Xt({vertexColors:!0}));n.add(u);const M=new $e(i.geometry(),new Xt({vertexColors:!0}));M.receiveShadow=!0,n.add(M);const I=za(new Xt({vertexColors:!0}),t),E=new $e(s.geometry(),I);E.castShadow=!0,E.receiveShadow=!0,n.add(E);const C=za(new Us({vertexColors:!0,shininess:90,specular:16777215}),t),R=za(new Us({vertexColors:!0,shininess:90,specular:16777215,emissive:16762992,emissiveIntensity:0}),t);C.customProgramCacheKey=()=>"seethrough-glass",R.customProgramCacheKey=()=>"seethrough-glass",n.add(new $e(r.geometry(),C)),n.add(new $e(o.geometry(),R));const P=new Xt({vertexColors:!0,emissive:16769184,emissiveIntensity:.1});n.add(new $e(l.geometry(),P));const x=new us({color:16767120,transparent:!0,opacity:0,blending:ka,depthWrite:!1}),T=new qr(new Vs(2.4,20),x,e.lamps.length),D=new dt;return e.lamps.forEach((a,_)=>{D.position.set(a.x+a.nx*1.4,Qe+.03,a.z+a.nz*1.4),D.rotation.set(-Math.PI/2,0,0),D.updateMatrix(),T.setMatrixAt(_,D.matrix)}),T.visible=!1,n.add(T),{uniforms:t,setNight(a){R.emissiveIntensity=a*1.6,P.emissiveIntensity=.1+a*2.2,x.opacity=a*.22,T.visible=a>.01},update(a,_){t.uTruck.value.set(_.x,0,_.z);for(const U of c)U(a)}}}function Ai(n,e){const t=new Ne(n);return t.r=Math.min(1,t.r*e),t.g=Math.min(1,t.g*e),t.b=Math.min(1,t.b*e),t.getHex()}function Ls(n,e,t){const i=new qr(n,new Xt,e);return i.frustumCulled=!1,i.castShadow=!0,t.add(i),i}function Nc(n,e,t){const i=new vi(n,e,t);return i.translate(0,-e/2,0),i}function ux(n,e){const t=e.list,i=t.length,s=Ls(Nc(.17,.72,.19),i*2,n),r=Ls(new Ws(.22,.27,.66,8),i,n),o=Ls(new ps(.23,10,7),i,n),l=Ls(new ps(.245,10,4,0,Math.PI*2,0,Math.PI*.55),i,n),c=Ls(Nc(.12,.58,.14),i*2,n),h=new Ne;t.forEach((v,S)=>{r.setColorAt(S,h.set(v.shirt)),o.setColorAt(S,h.set(v.skin)),l.setColorAt(S,h.set(v.hat??v.hair)),s.setColorAt(S*2,h.set(v.legs)),s.setColorAt(S*2+1,h.set(v.legs)),c.setColorAt(S*2,h.set(v.shirt)),c.setColorAt(S*2+1,h.set(v.shirt))});for(const v of[s,r,o,l,c])v.instanceColor.needsUpdate=!0;const d=new st,m=new st,f=new dt;function g(v,S,p,u,M,I=0,E=0,C=1,R=1,P=1){f.position.set(p,u,M),f.rotation.set(I,0,E),f.scale.set(C,R,P),f.updateMatrix(),m.multiplyMatrices(d,f.matrix),v.setMatrixAt(S,m)}return{update(){for(let v=0;v<i;v++){const S=t[v],p=hs(S.x,S.z)+S.hop;f.position.set(S.x,p,S.z),f.rotation.set(0,-S.heading,0),f.scale.setScalar(S.scale),f.updateMatrix(),d.copy(f.matrix);const u=Math.sin(S.walk*3.2)*.55;g(s,v*2,-.11,.74,0,u),g(s,v*2+1,.11,.74,0,-u),g(r,v,0,1.06,0),g(o,v,0,1.6,0);const M=S.hat!=null;g(l,v,0,M?1.66:1.63,.02,-.15,0,M?1.12:1,M?.8:1,M?1.12:1);const I=S.arms*2.8,E=S.wave*(2.5+S.waveSwing*.35),C=S.state==="point";g(c,v*2,-.31,1.33,0,-u*(1-S.arms),-I*.98),g(c,v*2+1,.31,1.33,0,C?1.5:u*(1-S.arms),C?0:Math.max(I,E))}for(const v of[s,r,o,l,c])v.instanceMatrix.needsUpdate=!0}}}function dx(){const n=new Pt,e=15900731;n.blob(0,.32,.05,.3,e,1.05),n.ball(0,.68,-.15,.24,e),n.add(xe.cone(4),-.13,.9,-.15,.14,.18,.1,e),n.add(xe.cone(4),.13,.9,-.15,.14,.18,.1,e),n.ball(-.08,.72,-.37,.04,2763312),n.ball(.08,.72,-.37,.04,2763312),n.ball(0,.64,-.39,.03,15895200),n.add(xe.box(),0,.25,.42,.08,.08,.5,e,0,-.6),n.blob(0,.32,-.12,.16,16774376);const t=new $e(n.geometry(),new Xt({vertexColors:!0}));t.castShadow=!0;const i=new qt;return i.add(t),i.visible=!1,i}function px(n,e){const t=e.cars.map(i=>{const s=Ph(i.kind,i.color);return n.add(s),s});return{update(i){e.cars.forEach((s,r)=>{const o=t[r],l=Ch(s);o.position.set(l.x,Math.abs(Math.sin(s.wheel*1.3))*.03,l.z),o.rotation.y=-s.heading})}}}const ss={confetti:1,flame:2,star:3,drop:4,heart:5},mx=`
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
`,gx=`
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
      // Flame: a teardrop pointing up, with a pale hot core.
      float y = uv.y;
      float w = y < -0.25 ? sqrt(max(0.0, 0.42 - (y + 0.25) * (y + 0.25))) : 0.648 * pow(max(0.0, 1.0 - (y + 0.25) / 1.15), 0.85);
      float edge = abs(uv.x) / max(w, 1e-3);
      if (edge > 1.0 || y > 0.9) discard;
      float core = smoothstep(0.75, 0.35, edge) * smoothstep(0.55, -0.35, y);
      col = mix(col, vec3(1.0, 0.95, 0.6) * 1.6, core);
      col *= 1.25;
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
`;function xx(){return new un({vertexShader:mx,fragmentShader:gx,transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}}})}function zc(n){const e=new Tt;e.setAttribute("position",new wt(new Float32Array(n*3),3)),e.setAttribute("tint",new wt(new Float32Array(n*4),4)),e.setAttribute("extra",new wt(new Float32Array(n*2),2)),e.setAttribute("spin",new wt(new Float32Array(n),1));for(const t of["position","tint","extra","spin"])e.attributes[t].setUsage(35048);return e}function _x(n,e=2e3,t=1e3){const i=xx(),s=zc(e),r=new zl(s,i);r.frustumCulled=!1,r.renderOrder=2,n.add(r);const o=zc(t),l=new zl(o,i);l.frustumCulled=!1,l.renderOrder=3,n.add(l);const c={x:new Float32Array(e),y:new Float32Array(e),z:new Float32Array(e),vx:new Float32Array(e),vy:new Float32Array(e),vz:new Float32Array(e),age:new Float32Array(e).fill(1),life:new Float32Array(e).fill(1),s0:new Float32Array(e),s1:new Float32Array(e),r:new Float32Array(e),g:new Float32Array(e),b:new Float32Array(e),a:new Float32Array(e),shape:new Float32Array(e),grav:new Float32Array(e),drag:new Float32Array(e),spin:new Float32Array(e),spinV:new Float32Array(e),fade:new Float32Array(e)};let h=0;const d=new Ne;function m(P){const x=h;h=(h+1)%e,c.x[x]=P.x,c.y[x]=P.y,c.z[x]=P.z,c.vx[x]=P.vx??0,c.vy[x]=P.vy??0,c.vz[x]=P.vz??0,c.age[x]=0,c.life[x]=P.life??1,c.s0[x]=P.size??1,c.s1[x]=P.size1??P.size??1,d.set(P.color??16777215),c.r[x]=d.r*(P.bright??1),c.g[x]=d.g*(P.bright??1),c.b[x]=d.b*(P.bright??1),c.a[x]=P.alpha??1,c.shape[x]=P.shape??0,c.grav[x]=P.gravity??0,c.drag[x]=P.drag??0,c.spin[x]=P.spin??Math.random()*6.28,c.spinV[x]=P.spinV??0,c.fade[x]=P.fade??.6}const f=()=>Math.random()-.5,g=48,v=new us({color:1717584,transparent:!0,opacity:.22,depthWrite:!1}),S=new qr(new Vs(1,18),v,g);S.frustumCulled=!1;const p=new Float32Array(g).fill(99),u=new Float32Array(g*3),M=new Float32Array(g);let I=0,E=0;const C=new dt;return n.add(S),S.instanceColor=null,{points:r,emit:m,flames(P,x,T=0,D=0){let _=(34+40*P.size)*(.35+.65*P.hp)*x;for(;_>0&&!(Math.random()>_);){_-=1;const U=.7*P.size*(.5+.5*P.hp),A=Math.random();m({x:P.x+f()*U*2+T*.3,y:P.y-.4*P.size+Math.random()*.3,z:P.z+f()*U*2+D*.3,vx:f()*.4+T*.7,vy:2+Math.random()*1.8,vz:f()*.4+D*.7,life:.5+Math.random()*.4,size:(2+Math.random()*1.6)*P.size*(.45+.55*P.hp),size1:.4*P.size,color:A<.45?16753178:A<.8?16738842:16726810,bright:1.6,shape:ss.flame,fade:.5})}},smoke(P,x){if(Math.random()>(3+5*P.size)*x)return;const T=.36+(1-P.hp)*.4;m({x:P.x+f()*P.size,y:P.y+.6*P.size,z:P.z+f()*P.size,vx:f()*.5+.35,vy:2.2+Math.random(),vz:f()*.5,life:4+Math.random()*2,size:1.6*P.size,size1:6+P.size*3,color:new Ne(T,T,T*1.04).getHex(),alpha:.6,drag:.15,fade:.3})},steam(P,x,T,D=1,a=1){for(let _=0;_<D;_++)m({x:P+f()*.6*a,y:x+f()*.4,z:T+f()*.6*a,vx:f()*1.2*a,vy:1.5+Math.random()*1.6*a,vz:f()*1.2*a,life:1.2+Math.random()*.8,size:.8*a,size1:3*a,color:16777215,alpha:.75,drag:.6,fade:.2})},splash(P,x,T,D=3,a=1,_=14217983){for(let U=0;U<D;U++){const A=Math.random()*6.28,y=(1+Math.random()*2)*a;m({x:P,y:x+.05,z:T,vx:Math.cos(A)*y,vy:1.5+Math.random()*2.5*a,vz:Math.sin(A)*y,life:.45+Math.random()*.3,size:.25+Math.random()*.2,size1:.1,color:_,alpha:.9,gravity:12,shape:ss.drop})}},confetti(P,x,T,D=120){const a=[14831690,4165586,15913019,5222506,15895099,11565792,15882874,16777215];for(let _=0;_<D;_++){const U=Math.random()*6.28,A=2+Math.random()*5;m({x:P,y:x,z:T,vx:Math.cos(U)*A,vy:6+Math.random()*8,vz:Math.sin(U)*A,life:3+Math.random()*1.5,size:.4,color:a[_%a.length],gravity:6,drag:1.4,shape:ss.confetti,spinV:(Math.random()-.5)*14,fade:.8})}},stars(P,x,T,D=8,a=16767050){for(let _=0;_<D;_++){const U=_/D*6.28;m({x:P,y:x,z:T,vx:Math.cos(U)*3,vy:3+Math.random()*2,vz:Math.sin(U)*3,life:1.4,size:1.3,size1:.6,color:a,bright:1.4,gravity:2,drag:1.2,shape:ss.star,spinV:2,fade:.6})}},heart(P,x,T){m({x:P,y:x,z:T,vy:1.2,life:1.4,size:.7,size1:1,color:16734858,bright:1.2,shape:ss.heart,fade:.6})},puff(P,x,T,D=10132122,a=.5){m({x:P,y:x,z:T,vx:f()*.4,vy:.9,vz:f()*.4,life:1,size:a,size1:a*3,color:D,alpha:.5,drag:1,fade:.2})},wetAt(P,x,T,D){if(E-=D,E>0)return;E=.12;const a=I;I=(I+1)%g,p[a]=0,u[a*3]=P+f(),u[a*3+1]=x+.025+a*4e-4,u[a*3+2]=T+f(),M[a]=1+Math.random()*.8},setScale(P,x){i.uniforms.scale.value=P/(2*Math.tan(x*Math.PI/180/2))},update(P,x){const T=s.attributes.position.array,D=s.attributes.tint.array,a=s.attributes.extra.array,_=s.attributes.spin.array;for(let w=0;w<e;w++){if(c.age[w]>=c.life[w]){a[w*2]=0,D[w*4+3]=0;continue}c.age[w]+=P;const N=Math.min(1,c.age[w]/c.life[w]);c.vy[w]-=c.grav[w]*P;const F=Math.exp(-c.drag[w]*P);c.vx[w]*=F,c.vy[w]*=c.grav[w]>0?1:F,c.vz[w]*=F,c.x[w]+=c.vx[w]*P,c.y[w]+=c.vy[w]*P,c.z[w]+=c.vz[w]*P,c.y[w]<.05&&c.grav[w]>0&&(c.y[w]=.05,c.vy[w]*=-.2,c.vx[w]*=.5,c.vz[w]*=.5),c.spin[w]+=c.spinV[w]*P,T[w*3]=c.x[w],T[w*3+1]=c.y[w],T[w*3+2]=c.z[w];const k=c.fade[w],O=N<k?1:1-(N-k)/(1-k);D[w*4]=c.r[w],D[w*4+1]=c.g[w],D[w*4+2]=c.b[w],D[w*4+3]=c.a[w]*O*Math.min(1,c.age[w]*12),a[w*2]=c.s0[w]+(c.s1[w]-c.s0[w])*N,a[w*2+1]=c.shape[w],_[w]=c.spin[w]}s.attributes.position.needsUpdate=!0,s.attributes.tint.needsUpdate=!0,s.attributes.extra.needsUpdate=!0,s.attributes.spin.needsUpdate=!0;const U=o.attributes.position.array,A=o.attributes.tint.array,y=o.attributes.extra.array;for(let w=0;w<x.max;w++){const N=x.age[w]<4;U[w*3]=x.px[w],U[w*3+1]=x.py[w],U[w*3+2]=x.pz[w],A[w*4]=.75,A[w*4+1]=.9,A[w*4+2]=1,A[w*4+3]=N?.85:0,y[w*2]=N?.3+Math.min(.3,x.age[w]*.35):0,y[w*2+1]=ss.drop}o.attributes.position.needsUpdate=!0,o.attributes.tint.needsUpdate=!0,o.attributes.extra.needsUpdate=!0;for(let w=0;w<g;w++){p[w]+=P;const N=7,F=p[w]<N?M[w]*(1-(p[w]/N)**3):0;C.position.set(u[w*3],u[w*3+1],u[w*3+2]),C.rotation.set(-Math.PI/2,0,0),C.scale.set(F+.001,F+.001,1),C.updateMatrix(),S.setMatrixAt(w,C.matrix)}S.instanceMatrix.needsUpdate=!0}}}const Fa=160,vx=4.5;function Mx(){const n=[[-1.2,.6],[0,-.6],[0,.1],[-1.2,.6],[0,.1],[-1.2,1.3],[0,-.6],[1.2,.6],[0,.1],[0,.1],[1.2,.6],[1.2,1.3]],e=[];for(const[i,s]of n)e.push(i,0,s);const t=new Tt;return t.setAttribute("position",new wt(new Float32Array(e),3)),t}function Fc(n){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");if(t.fillStyle="#ffffff",t.beginPath(),t.arc(64,60,50,0,Math.PI*2),t.fill(),t.lineWidth=9,t.strokeStyle=n==="cat"?"#f2a03b":"#e2382e",t.stroke(),t.fillStyle=t.strokeStyle,t.beginPath(),t.moveTo(50,104),t.lineTo(78,104),t.lineTo(64,124),t.fill(),n==="cat")t.fillStyle="#f2a03b",t.beginPath(),t.arc(64,66,26,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(40,56),t.lineTo(44,26),t.lineTo(62,44),t.moveTo(88,56),t.lineTo(84,26),t.lineTo(66,44),t.fill(),t.fillStyle="#2a2a30",t.beginPath(),t.arc(54,62,4,0,Math.PI*2),t.arc(74,62,4,0,Math.PI*2),t.fill(),t.fillStyle="#f28aa0",t.beginPath(),t.arc(64,72,3.5,0,Math.PI*2),t.fill();else{const s=(r,o,l)=>{t.fillStyle=o,t.beginPath(),t.moveTo(64,18+l),t.bezierCurveTo(64+34*r,48,64+30*r,92,64,92),t.bezierCurveTo(64-30*r,92,64-34*r,48,64,18+l),t.fill()};s(1,"#ff5a1a",0),s(.62,"#ffb21a",22),s(.3,"#fff2a0",42)}const i=new Xf(e);return i.colorSpace=sn,i}function Sx(n){const e=new us({color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:kn}),t=new qr(Mx(),e,Fa);t.frustumCulled=!1,t.count=0,t.renderOrder=1,n.add(t);const i=new dt,s=new Ne,r={fire:Fc("fire"),cat:Fc("cat")},o=new kf(new oh({map:r.fire,depthTest:!1,transparent:!0}));o.renderOrder=10,o.visible=!1,n.add(o);let l=null,c=0,h=null,d=[];return{set(m){h=m,c=0,o.visible=!!m,m&&(o.material.map=m.kind==="cat"?r.cat:r.fire),m||(t.count=0)},update(m,f,g,v,S=1e9){if(!h)return;const p=Math.max(3.2,v*.075);o.scale.set(p,p,1);const u=Math.max(0,Math.min(1,(26-S)/12));if(o.material.opacity=1-u*.75,o.position.set(h.x,h.y+3.4+p*.6+u*4+Math.sin(f*3)*.4,h.z),c-=m,c<=0){c=.4,l=mg(g.x,g.z,h.x,h.z),l.push({x:h.x,z:h.z}),d=[];let M=0;const I=Math.hypot(g.x-h.x,g.z-h.z);for(let E=1;E<l.length&&d.length<Fa;E++){const C=l[E-1],R=l[E],P=Math.hypot(R.x-C.x,R.z-C.z);if(P<.01)continue;const x=(R.x-C.x)/P,T=(R.z-C.z)/P;let D=M;for(;D<P&&d.length<Fa;){const a=C.x+x*D,_=C.z+T*D,U=Math.hypot(a-g.x,_-g.z),A=Math.hypot(a-h.x,_-h.z);U>6&&A>7&&d.push({x:a,z:_,h:Math.atan2(x,-T)}),D+=vx}M=D-P}I<14&&(d.length=0),t.count=d.length}d.forEach((M,I)=>{i.position.set(M.x,.18,M.z),i.rotation.set(0,-M.h,0),i.scale.setScalar(1),i.updateMatrix(),t.setMatrixAt(I,i.matrix);const E=.5+.5*Math.sin(I*.7-f*6);s.setRGB(1,.75+.25*E,.25+.5*E),t.setColorAt(I,s)}),t.instanceMatrix&&(t.instanceMatrix.needsUpdate=!0),t.instanceColor&&(t.instanceColor.needsUpdate=!0)},sprite:o}}const yx=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,bx=`
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
`;function Ex(n){const e=new un({side:tn,depthWrite:!1,fog:!1,vertexShader:yx,fragmentShader:bx,uniforms:{topColor:{value:new Ne(3111119)},horizonColor:{value:new Ne(16176814)},glowColor:{value:new Ne(16751178)},cloudColor:{value:new Ne(16773590)},sunDir:{value:new X(-.5,.42,.62)},glowStrength:{value:.5},time:{value:0},night:{value:0}}}),t=new $e(new ps(4e3,32,20),e);return t.frustumCulled=!1,t.renderOrder=-1,n.add(t),{mesh:t,uniforms:e.uniforms,follow(i){t.position.copy(i)}}}const wx=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Tx=`
  #include <packing>
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 texel;
  uniform float near;
  uniform float far;
  uniform float lineWidth;
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
    edge *= 1.0 - smoothstep(700.0, 2200.0, z);
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
`;function Ax(n){const e=n.getDrawingBufferSize(new Oe),t=new Mn(e.x,e.y,{type:Dn,samples:rn.msaa,depthBuffer:!0});t.depthTexture=new ds(e.x,e.y,In);const i=new un({vertexShader:wx,fragmentShader:Tx,defines:rn.halation?{HALATION:""}:{},depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:t.texture},tDepth:{value:t.depthTexture},texel:{value:new Oe(1/e.x,1/e.y)},near:{value:.5},far:{value:4200},lineWidth:{value:1},inkColor:{value:new Ne(2761536)},shadowTint:{value:new Ne(10787544)},lightTint:{value:new Ne(16773596)},saturation:{value:1.12},halation:{value:.4},grain:{value:.03},mist:{value:0},mistColor:{value:new Ne(16052714)}}}),s=new $e(new Di(2,2),i);s.frustumCulled=!1;const r=new sh;r.add(s);const o=new Zr(-1,1,1,-1,0,1);function l(){n.getDrawingBufferSize(e),t.setSize(e.x,e.y),i.uniforms.texel.value.set(1/e.x,1/e.y),i.uniforms.lineWidth.value=Math.max(1,Math.min(2,e.y/720))}return l(),{uniforms:i.uniforms,setSize:l,render(c,h){i.uniforms.near.value=h.near,i.uniforms.far.value=h.far,n.setRenderTarget(t),n.render(c,h),n.setRenderTarget(null),n.render(r,o)}}}const Rx=.5;function Cx(){let n=null,e=!0,t=!1,i=null,s=null,r=null;function o(S,p=2){const u=S.createBuffer(1,S.sampleRate*p,S.sampleRate),M=u.getChannelData(0);for(let I=0;I<M.length;I++)M[I]=Math.random()*2-1;return u}function l(S){const u=S.createBuffer(1,S.sampleRate*3.2,S.sampleRate),M=u.getChannelData(0),I=S.sampleRate;for(let E=0;E<520;E++){const C=Math.random()**1.6*3.2*.95,R=Math.min(1,C*3)*(1-C/3.2),P=Math.floor(C*I),x=Math.floor(I*(.012+Math.random()*.02)),T=(.25+Math.random()*.5)*R;for(let D=0;D<x&&P+D<M.length;D++)M[P+D]+=(Math.random()*2-1)*T*Math.exp(-D/(x*.25))}return u}function c(){if(n||!e)return;const S=window.AudioContext||window.webkitAudioContext;if(!S)return;n=new S,s=o(n),r=l(n);const p=n.createDynamicsCompressor();p.threshold.value=-14,p.ratio.value=4;const u=n.createGain();u.gain.value=Rx,u.connect(p).connect(n.destination);const M=n.createGain();M.gain.value=0;const I=n.createBiquadFilter();I.type="lowpass",I.frequency.value=320,I.Q.value=3,I.connect(M).connect(u);const E=n.createOscillator();E.type="sawtooth";const C=n.createOscillator();C.type="square";const R=n.createGain();R.gain.value=.4,E.connect(I),C.connect(R).connect(I);const P=n.createOscillator();P.type="square";const x=n.createGain();x.gain.value=.05,P.connect(x).connect(M.gain),E.start(),C.start(),P.start();const T=n.createOscillator();T.type="sawtooth";const D=n.createOscillator();D.type="square";const a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=2200;const _=n.createGain();_.gain.value=0;const U=n.createGain();U.gain.value=.3,T.connect(a),D.connect(U).connect(a),a.connect(_).connect(u),T.start(),D.start();const A=n.createBufferSource();A.buffer=s,A.loop=!0;const y=n.createBiquadFilter();y.type="bandpass",y.frequency.value=1400,y.Q.value=.6;const w=n.createGain();w.gain.value=0,A.connect(y).connect(w).connect(u),A.start();const N=n.createBufferSource();N.buffer=s,N.loop=!0,N.playbackRate.value=.6;const F=n.createBiquadFilter();F.type="lowpass",F.frequency.value=900;const k=n.createGain();k.gain.value=0,N.connect(F).connect(k).connect(u),N.start(),i={master:u,engine:M,tone:I,e1:E,e2:C,chug:P,sirenOsc:T,sirenOsc2:D,sirenGain:_,hoseGain:w,splashGain:k,crackleT:0,vanT:0}}const h=()=>n.currentTime;function d(S,p,u,M,I){S.gain.setValueAtTime(1e-4,p),S.gain.exponentialRampToValueAtTime(M,p+u),S.gain.exponentialRampToValueAtTime(1e-4,p+u+I)}function m(S,p,u,M="sine",I=.2,E=1){const C=n.createOscillator();C.type=M,C.frequency.setValueAtTime(S,p),E!==1&&C.frequency.exponentialRampToValueAtTime(S*E,p+u);const R=n.createGain();C.connect(R).connect(i.master),d(R,p,.01,I,u),C.start(p),C.stop(p+u+.05)}function f(S,p,u,M,I,E="bandpass"){const C=n.createBufferSource();C.buffer=s,C.playbackRate.value=.8+Math.random()*.4;const R=n.createBiquadFilter();R.type=E,R.frequency.value=u,R.Q.value=M;const P=n.createGain();C.connect(R).connect(P).connect(i.master),d(P,S,.003,I,p),C.start(S,Math.random()),C.stop(S+p+.05)}function g(S,p){const u=n.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(p,S),u.frequency.exponentialRampToValueAtTime(p*1.45,S+.32),u.frequency.exponentialRampToValueAtTime(p*1.25,S+.9);const M=n.createOscillator();M.frequency.value=6+Math.random()*2;const I=n.createGain();I.gain.value=p*.03,M.connect(I).connect(u.frequency);const E=n.createBiquadFilter();E.type="bandpass",E.frequency.setValueAtTime(500,S),E.frequency.linearRampToValueAtTime(850,S+.25),E.Q.value=6;const C=n.createBiquadFilter();C.type="bandpass",C.frequency.setValueAtTime(2e3,S),C.frequency.linearRampToValueAtTime(1300,S+.25),C.Q.value=7;const R=n.createGain();u.connect(E).connect(R),u.connect(C).connect(R),R.connect(i.master),R.gain.setValueAtTime(1e-4,S),R.gain.exponentialRampToValueAtTime(.5,S+.08),R.gain.setValueAtTime(.5,S+.5),R.gain.exponentialRampToValueAtTime(1e-4,S+1.1),u.start(S),M.start(S),u.stop(S+1.2),M.stop(S+1.2)}const v=()=>n&&e&&!t;return{get enabled(){return e},start(){c(),n?.state==="suspended"&&n.resume()},setEnabled(S){e=S,!S&&n&&n.suspend(),S&&(c(),n?.resume())},toggle(){return this.setEnabled(!e),e},setPaused(S){t=S,n&&(S?n.suspend():e&&n.resume())},update(S,p){if(!v())return;const u=h(),M=Math.abs(p.speed),I=36+M*3.2+p.throttle*6;i.e1.frequency.setTargetAtTime(I,u,.1),i.e2.frequency.setTargetAtTime(I*2,u,.1),i.chug.frequency.setTargetAtTime(I/4,u,.1),i.tone.frequency.setTargetAtTime(260+M*30+p.throttle*150,u,.15),i.engine.gain.setTargetAtTime(.12+Math.min(.12,M*.01)+p.throttle*.05,u,.2);const C=Math.floor(p.time/.62)%2===0?622:466;if(i.sirenOsc.frequency.setTargetAtTime(C,u,.012),i.sirenOsc2.frequency.setTargetAtTime(C*.5,u,.012),i.sirenGain.gain.setTargetAtTime(p.siren?.085:0,u,.05),i.hoseGain.gain.setTargetAtTime(p.spraying?.24:0,u,.06),i.splashGain.gain.setTargetAtTime(Math.min(.2,p.splashes*.012),u,.1),p.fireNear!=null){i.crackleT-=S;const R=Math.max(0,1-p.fireNear/50)*p.fireHp;i.crackleT<=0&&R>.02&&(i.crackleT=.03+Math.random()*.12,f(u,.02+Math.random()*.04,1500+Math.random()*3e3,2,.05+R*.18),Math.random()<.2&&f(u,.12,300,1,R*.12,"lowpass"))}i.vanT-=S,p.vanNear!=null&&p.vanNear<28&&i.vanT<=0&&(i.vanT=14,[784,988,1175,988,784,659,784,988,784].forEach((P,x)=>m(P,u+x*.18,.2,"triangle",.1)))},horn(){if(!v())return;const S=h();for(const p of[185,233,277]){const u=n.createOscillator();u.type="sawtooth",u.frequency.value=p;const M=n.createBiquadFilter();M.type="lowpass",M.frequency.value=1400;const I=n.createGain();u.connect(M).connect(I).connect(i.master),I.gain.setValueAtTime(1e-4,S),I.gain.exponentialRampToValueAtTime(.16,S+.03),I.gain.setValueAtTime(.16,S+.5),I.gain.exponentialRampToValueAtTime(1e-4,S+.7),u.start(S),u.stop(S+.75)}},bell(S=2){if(!v())return;const p=h();for(let u=0;u<S;u++)for(const[M,I]of[[1,.18],[2.76,.08],[5.4,.05]])m(1046*M,p+u*.32,1.2,"sine",I)},cheer(){if(!v())return;const S=h(),p=n.createBufferSource();p.buffer=r;const u=n.createBiquadFilter();u.type="highpass",u.frequency.value=900;const M=n.createGain();M.gain.value=.55,p.connect(u).connect(M).connect(i.master),p.start(S+.1);for(let I=0;I<7;I++)g(S+Math.random()*.25,220+Math.random()*260);[523,659,784,1046,1318].forEach((I,E)=>m(I,S+.05+E*.09,.6,"triangle",.12))},meow(){if(!v())return;const S=h(),p=n.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(520,S),p.frequency.exponentialRampToValueAtTime(880,S+.15),p.frequency.exponentialRampToValueAtTime(480,S+.55);const u=n.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(900,S),u.frequency.linearRampToValueAtTime(1800,S+.2),u.frequency.linearRampToValueAtTime(800,S+.55),u.Q.value=4;const M=n.createGain();p.connect(u).connect(M).connect(i.master),d(M,S,.04,.35,.55),p.start(S),p.stop(S+.65)},giggle(){if(!v())return;const S=h(),p=700+Math.random()*400;for(let u=0;u<3;u++)m(p*(1+u*.04),S+u*.1,.08,"triangle",.08,1.2)},bump(S=.5){if(!v())return;const p=h();m(90,p,.25,"sine",.3*S+.1,.45),f(p,.08,400,1,.1*S,"lowpass")},splash(S=.5){if(!v())return;const p=h();f(p,.4,700,.8,.2*S+.05,"lowpass")},ladder(S){if(!v())return;const p=h(),u=n.createOscillator();u.type="square",u.frequency.setValueAtTime(S?70:95,p),u.frequency.linearRampToValueAtTime(S?95:70,p+1.2);const M=n.createBiquadFilter();M.type="lowpass",M.frequency.value=500;const I=n.createGain();u.connect(M).connect(I).connect(i.master),I.gain.setValueAtTime(1e-4,p),I.gain.exponentialRampToValueAtTime(.06,p+.1),I.gain.setValueAtTime(.06,p+1),I.gain.exponentialRampToValueAtTime(1e-4,p+1.3),u.start(p),u.stop(p+1.35)},alert(){if(!v())return;const S=h();m(880,S,.25,"triangle",.14),m(1175,S+.18,.4,"triangle",.14)}}}function Px(){const n=document.querySelector("#call"),e=document.querySelector("#callIcon"),t=document.querySelector("#callText"),i=document.querySelector("#pop"),s=document.querySelector("#hint"),r=document.querySelector("#arrow"),o=document.querySelector("#intro");let l=0,c=0;return{call(h,d){if(n){if(!d){n.classList.remove("on");return}e.className=h==="cat"?"cat":"fire",t.textContent=d,n.classList.remove("on"),n.offsetWidth,n.classList.add("on")}},pop(h,d=""){i&&(i.innerHTML=`<b>${h}</b>${d?`<small>${d}</small>`:""}`,i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop"),c=2.4)},hint(h,d=3){s&&(s.textContent=h,s.style.opacity="1",l=d)},arrow(h,d=0,m=0,f=0,g="fire"){r&&(r.style.opacity=h?"1":"0",h&&(r.style.transform=`translate(${d}px, ${m}px) translate(-50%, -50%) rotate(${f}rad)`,r.dataset.kind=g))},showIntro(){o&&(o.style.display="",o.offsetWidth,o.classList.remove("gone"))},hideIntro(){o?.classList.add("gone"),setTimeout(()=>{o?.classList.contains("gone")&&(o.style.display="none")},520)},setButton(h,d){document.querySelector(h)?.classList.toggle("on",!!d)},setSound(h){document.querySelector("#soundBtn")?.classList.toggle("off",!h)},update(h){l>0&&(l-=h,l<=0&&s&&(s.style.opacity="0")),c>0&&(c-=h,c<=0&&i?.classList.remove("pop"))}}}const Oa={day:{label:"Sunny day",sun:[.45,.78,.42],sunColor:16774368,sunIntensity:2.7,sky:12903167,ground:10274682,hemi:1.3,fog:13822198,top:5217e3,horizon:14873087,glow:16773312,exposure:1,night:0},sunset:{label:"Sunset",sun:[-.75,.24,.42],sunColor:16757370,sunIntensity:2.6,sky:12560614,ground:12880474,hemi:1.05,fog:15907992,top:5925576,horizon:16759948,glow:16742970,exposure:1.08,night:.3},night:{label:"Night time",sun:[.35,.62,-.55],sunColor:11058431,sunIntensity:.6,sky:4872856,ground:2240570,hemi:.75,fog:1844552,top:726580,horizon:2899056,glow:8030975,exposure:1.2,night:1}},Ba=["day","sunset","night"],Is=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;function Lx(){const n=new lg({antialias:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,rn.pixelRatio)),n.setSize(innerWidth,innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Fs,n.outputColorSpace=sn,n.toneMapping=zo,document.body.insertBefore(n.domElement,document.querySelector("#ui"));const e=new sh,t=new an(40,innerWidth/innerHeight,1,4500);e.add(t);const i=new lu;i.connect(document);const s=vg(),r=Sg(s),o={collider:r,ponds:s.ponds},l=fx(e,s),c=Ex(e),h=Ax(n);h.uniforms.mistColor.value.set(16777215);const d=new eu(12903167,10274682,1.3);e.add(d);const m=new ru(16777215,2.7);m.castShadow=!0,m.shadow.mapSize.set(rn.shadowMap,rn.shadowMap);const f=60;Object.assign(m.shadow.camera,{left:-f,right:f,top:f,bottom:-f,near:1,far:400}),m.shadow.bias=-5e-4,m.shadow.normalBias=.3,e.add(m,m.target),e.fog=new Zo(13822198,220,1100);const g=new X,v=new ph(16747066,0,26,1.5);e.add(v);let S=Oa[Tn.get("light")]?Tn.get("light"):"day",p=0;function u(H){const ne=Oa[H]||Oa.day;S=H,g.set(...ne.sun).normalize(),m.color.setHex(ne.sunColor),m.intensity=ne.sunIntensity,d.color.setHex(ne.sky),d.groundColor.setHex(ne.ground),d.intensity=ne.hemi,e.fog.color.setHex(ne.fog),c.uniforms.topColor.value.setHex(ne.top),c.uniforms.horizonColor.value.setHex(ne.horizon),c.uniforms.glowColor.value.setHex(ne.glow),c.uniforms.cloudColor.value.setHex(ne.night>.5?8949944:16777215),c.uniforms.sunDir.value.copy(g),c.uniforms.night.value=ne.night>.5?1:0,n.toneMappingExposure=ne.exposure,p=ne.night,l.setNight(ne.night),Tn.set("light",H);for(const re of document.querySelectorAll("[data-light]"))re.setAttribute("aria-pressed",String(re.dataset.light===H));return ne.label}u(S);const M=Yg(s.spawn);let I=Tn.get("paint")||"red",E=Dc(I);e.add(E);function C(H){I=H,Tn.set("paint",H);const ne=E;E=Dc(H),e.add(E),e.remove(ne);for(const re of document.querySelectorAll("[data-paint]"))re.setAttribute("aria-pressed",String(re.dataset.paint===H))}C(I);let R=Tn.get("drive")==="behind"?"behind":"above";function P(H,ne){let re=1;const J=ne.x-H.x,Se=ne.y-H.y,ae=ne.z-H.z;for(const Fe of s.boxes){let ze=0,xt=re;for(const[ct,zt,dn,yn]of[[H.x,J,Fe.minX,Fe.maxX],[H.y,Se,0,Fe.h],[H.z,ae,Fe.minZ,Fe.maxZ]]){if(Math.abs(zt)<1e-9){(ct<dn||ct>yn)&&(ze=2);continue}let Ft=(dn-ct)/zt,Jt=(yn-ct)/zt;Ft>Jt&&([Ft,Jt]=[Jt,Ft]),ze=Math.max(ze,Ft),xt=Math.min(xt,Jt)}ze<=xt&&ze<re&&(re=ze)}return re}const x=rx(t,{view:Tn.get("view")||0,mode:R,blocker:P});function T(H){R=H,Tn.set("drive",H),x.setMode(H,M),document.body.classList.toggle("behind",H==="behind");for(const ne of document.querySelectorAll("[data-drive]"))ne.setAttribute("aria-pressed",String(ne.dataset.drive===H))}T(R),x.reset(M);const D=Ug(s,rn.people),a=ux(e,D),_=Vg(14),U=px(e,_),A=[],y=Eg(s,(Date.now()&65535)+1),w=Cg(1e3),N=_x(e,rn.particles,w.max),F=Sx(e),k=dx();e.add(k);const O=Cx(),B=Px();let j=!1,le=!1,Ie=!1,Te=!1,ue=!1,K=!1;const ie=new Set,ge=(H,ne,re=3.5)=>{ie.has(H)||(ie.add(H),B.hint(ne,re))};function Ae(){!j||le||(Ie=!Ie,K=!0,B.setButton("#sirenBtn",Ie),document.querySelector("#sirenBtn")?.classList.remove("pulse"))}function _e(){!j||le||(Te=!0,O.horn())}function ke(){!j||le||(ue=!ue,ue&&(M.speed=Math.min(M.speed,2)),B.setButton("#ladderBtn",ue),document.querySelector("#ladderBtn")?.classList.remove("pulse"),O.ladder(ue))}function tt(H){Tn.set("view",x.turn(H))}function Xe(){const H=Ba[(Ba.indexOf(S)+1)%Ba.length];B.hint(u(H),1.4)}function He(){const H=O.toggle();Tn.set("sound",H),B.setSound(H)}const Ke=ax({actions:{siren:Ae,horn:_e,ladder:ke,turn:tt,zoom:H=>x.zoom(H),sound:He,light:Xe,camera:()=>{T(R==="behind"?"above":"behind"),B.hint(R==="behind"?"Behind the truck":"From above",1.4)},menu:()=>le?ot():bt()},onFirstInput:()=>O.start()});document.querySelector("#viewBtn")?.addEventListener("click",()=>tt(1)),document.querySelector("#lightBtn")?.addEventListener("click",Xe),document.querySelector("#soundBtn")?.addEventListener("click",He);for(const H of document.querySelectorAll("[data-light]"))H.addEventListener("click",()=>u(H.dataset.light));for(const H of document.querySelectorAll("[data-drive]"))H.addEventListener("click",()=>T(H.dataset.drive));for(const H of document.querySelectorAll("[data-paint]"))H.addEventListener("click",()=>C(H.dataset.paint));Tn.get("sound")===!1&&O.setEnabled(!1),B.setSound(O.enabled);const qe=document.querySelector("#start"),rt=document.querySelector("#home");function gt(){if(le)return ot();j||(j=!0,B.hideIntro(),document.body.classList.add("playing"),O.start(),O.bell(3),x.reset(M),document.querySelector("#sirenBtn")?.classList.add("pulse"),R==="behind"?B.hint(Is?"Push up on the left to go, left and right to steer. Try the siren!":"W to go, A and D to steer, S to back up. F for the siren!",5):B.hint(Is?"Drag on the left to drive. Try the siren!":"Arrow keys or WASD to drive. F for the siren!",4.5))}function bt(){!j||le||(le=!0,qe&&(qe.textContent="Keep driving"),rt&&(rt.hidden=!1),B.showIntro())}function ot(){le=!1,B.hideIntro(),i.update()}qe?.addEventListener("click",gt),rt?.addEventListener("click",()=>{ot(),Tc(M,s.spawn.x,s.spawn.z,s.spawn.heading),x.reset(M)}),document.querySelector("#menuBtn")?.addEventListener("click",()=>le?ot():bt()),addEventListener("keydown",H=>{(!j||le)&&(H.code==="Enter"||H.code==="Space")?(H.preventDefault(),gt()):H.code==="Escape"&&(le?ot():bt())});const Mt=new hu,W=new Oe;function Dt(H,ne){W.set(H/innerWidth*2-1,-(ne/innerHeight)*2+1),Mt.setFromCamera(W,t);const{origin:re,direction:J}=Mt.ray,Se=y.active;if(Se&&Se.kind!=="cat"){const Fe=Se.x-re.x,ze=Se.y-re.y,xt=Se.z-re.z,ct=Fe*J.x+ze*J.y+xt*J.z,zt=Math.hypot(Fe-J.x*ct,ze-J.y*ct,xt-J.z*ct);if(ct>0&&zt<3+Se.size*2)return{x:Se.x,y:Se.y,z:Se.z}}let ae=J.y<0?-re.y/J.y:1e9;for(const Fe of s.boxes){let ze=0,xt=ae;for(const[ct,zt,dn,yn]of[[re.x,J.x,Fe.minX,Fe.maxX],[re.y,J.y,0,Fe.h],[re.z,J.z,Fe.minZ,Fe.maxZ]]){if(Math.abs(zt)<1e-9){(ct<dn||ct>yn)&&(ze=1e9);continue}let Ft=(dn-ct)/zt,Jt=(yn-ct)/zt;Ft>Jt&&([Ft,Jt]=[Jt,Ft]),ze=Math.max(ze,Ft),xt=Math.min(xt,Jt)}ze<=xt&&ze<ae&&(ae=ze)}return ae>400&&(ae=60),{x:re.x+J.x*ae,y:Math.max(0,re.y+J.y*ae),z:re.z+J.z*ae}}const Ee={state:"hidden",t:0,tree:null,from:new X,to:new X};function z(H){const ne=H.spot.tree,re=H.spot.road.x-ne.x,J=H.spot.road.z-ne.z,Se=Math.hypot(re,J)||1;Ee.tree={x:ne.x+re/Se*ne.r*.75,y:hs(ne.x,ne.z)+ne.h*.66+ne.r*.55,z:ne.z+J/Se*ne.r*.75},Ee.state="tree",Ee.t=0,k.visible=!0}const b=new X,q=new X;function $(H,ne){if(Ee.state!=="hidden")if(Ee.t+=H,Ee.state==="tree")k.position.set(Ee.tree.x,Ee.tree.y+Math.abs(Math.sin(ne*2))*.05,Ee.tree.z),k.rotation.y=Math.sin(ne*.7)*.6-Math.atan2(M.x-Ee.tree.x,-(M.z-Ee.tree.z)),Math.random()<H*.25&&Math.hypot(M.x-Ee.tree.x,M.z-Ee.tree.z)<40&&O.meow();else if(Ee.state==="down"){ix(E,b),sx(E,q);const re=Ee.t;if(re<.6)k.position.lerpVectors(Ee.from.set(Ee.tree.x,Ee.tree.y,Ee.tree.z),b,re/.6);else if(re<2.4)k.position.lerpVectors(b,q,(re-.6)/1.8);else if(re<3){const J=(re-2.4)/.6;Ee.to.set(M.x+Math.cos(M.heading)*2.5,hs(M.x,M.z),M.z+Math.sin(M.heading)*2.5),k.position.lerpVectors(q,Ee.to,J),k.position.y+=Math.sin(J*Math.PI)*1.2}else Ee.state="happy",Ee.t=0,ue=!1,B.setButton("#ladderBtn",!1),O.ladder(!1);k.rotation.y=-M.heading}else Ee.state==="happy"&&(k.position.y=Ee.to.y+Math.abs(Math.sin(Ee.t*6))*.3,k.rotation.y+=H*2,Ee.t>4&&(Ee.state="hidden",k.visible=!1))}let ee=!1;addEventListener("resize",()=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),n.setPixelRatio(Math.min(devicePixelRatio||1,rn.pixelRatio)),n.setSize(innerWidth,innerHeight),h.setSize()},{passive:!0}),document.addEventListener("visibilitychange",()=>{ee=document.hidden,O.setPaused(ee),ee||i.update()});let ce=0,he=60,te=0,se=null,fe=0,Pe=0,de=0,pe=0,Le=!1;const Ue=new X,We={mx:0,my:0,spray:!1,aim:null,stickAim:null},G=new X;window.__bellbrook={truck:M,city:s,fires:y,people:D,traffic:_,camera:t,renderer:n,get fps(){return Math.round(he)},go:gt,teleport(H,ne,re=0){Tc(M,H,ne,re),x.reset(M)},callNow(){y.timer=0},get ladder(){return{up:ue,raised:E.userData.ladder,kitten:Ee.state}}};function me(){if(requestAnimationFrame(me),ee)return;i.update();const H=Math.min(i.getDelta(),.05),ne=i.getElapsed();H>0&&(he=he*.95+1/H*.05);const re=j&&!le,J=re?Ke.sample(H):We,Se=R==="behind"?{throttle:J.my,steer:J.mx}:x.toWorld(J.mx,J.my);ue&&Math.hypot(J.mx,J.my)>.5&&Ee.state!=="down"&&(ue=!1,B.setButton("#ladderBtn",!1),O.ladder(!1)),re&&(qg(_,A),Zg(M,ue?{dx:0,dz:0}:Se,o,H,A));for(const Be of M.events)Be.type==="bump"?(O.bump(Be.strength),x.kick(Be.strength*.4)):Be.type==="splash"&&(N.splash(M.x,.3,M.z,30,1.6,12577023),O.splash(Be.strength));M.events.length=0,M.inWater&&Math.abs(M.speed)>2&&Math.random()<H*20&&N.splash(M.x+(Math.random()-.5)*3,.3,M.z+(Math.random()-.5)*3,3,1,12577023),fe=St(fe,hs(M.x,M.z),12,H);const ae=y.active;let Fe=null;if(J.aim)Fe=Dt(J.aim.x,J.aim.y);else if(J.stickAim){const Be=x.toWorld(J.stickAim.x,J.stickAim.y);Fe={x:M.x+Be.dx*16,y:0,z:M.z+Be.dz*16}}else J.spray&&(ae&&ae.kind!=="cat"&&Math.hypot(ae.x-M.x,ae.z-M.z)<46?Fe={x:ae.x,y:ae.y,z:ae.z}:Fe={x:M.x+Math.sin(M.heading)*15,y:0,z:M.z-Math.cos(M.heading)*15});const ze=re&&J.spray&&!!Fe;let xt=null;if(ze){nx(E,Ue);const Be=Pg(Ue.x,Ue.y,Ue.z,Fe.x,Fe.y,Fe.z);xt=Math.atan2(Be.y,Math.hypot(Be.x,Be.z)),Lg(w,Ue,Be,H)}Ig(w,H,{collider:r,fire:ae,people:D.list});let ct=0;Pe-=H;for(const Be of w.events)Be.type==="fire"?(Rg(y),Pe<=0&&(Pe=.06,N.steam(Be.x,Be.y,Be.z,1,.8+(ae?.size??1)*.3))):Be.type==="person"?Hg(Be.person)&&(N.heart(Be.person.x,2.2,Be.person.z),O.giggle()):(ct++,Math.random()<.35&&N.splash(Be.x,Be.y,Be.z,2,.7),Be.type==="ground"&&N.wetAt(Be.x,Be.y,Be.z,H));re&&Ag(y,H,{x:M.x,z:M.z,ladderUp:ue&&E.userData.ladder>.8}),se=null;for(const Be of y.events){const pt=Be.fire;Be.type==="start"?(O.alert(),F.set(pt),pt.kind==="cat"?(z(pt),B.call("cat",`A kitten is stuck up ${pt.spot.name}!`)):B.call("fire",`Fire at ${pt.spot.name}!`),ge("follow","Follow the arrows!",3),K||document.querySelector("#sirenBtn")?.classList.add("pulse")):(Be.type==="out"||Be.type==="rescued")&&(se={x:pt.x,z:pt.z},F.set(null),B.call(null),O.cheer(),N.confetti(pt.x,pt.y+1,pt.z,140),N.stars(pt.x,pt.y+1.5,pt.z,10),Be.type==="out"?(N.steam(pt.x,pt.y,pt.z,18,1.8),B.pop(Oc(["Hooray!","Well done!","Yay!","All out!","Hooray!"]),Oc(["Thank you, firefighter!","The fire is out!","Everyone is safe!","Super spraying!"]))):(Ee.state="down",Ee.t=0,O.meow(),B.pop("Hooray!","Kitten saved!"),document.querySelector("#ladderBtn")?.classList.remove("pulse")),x.kick(.15))}y.events.length=0;const zt=ae?Math.hypot(ae.x-M.x,ae.z-M.z):1e9;ae&&ae.kind!=="cat"&&zt<36?(ge("spray",Is?"Hold the water button, or touch the fire, to spray!":"Hold Space, or click on the fire, to spray!",4.5),!Le&&!ze&&document.querySelector("#sprayBtn")?.classList.add("pulse"),Le=!0):Le=!1,ze&&document.querySelector("#sprayBtn")?.classList.remove("pulse"),ae&&ae.kind==="cat"&&zt<Vn.rescueRange&&(ge("ladder",Is?"Stop by the tree and raise the ladder!":"Stop by the tree and press L for the ladder!",4),ue||document.querySelector("#ladderBtn")?.classList.add("pulse"),Math.abs(M.speed)<.5&&!ue?(de+=H,de>2.5&&(de=0,ke())):de=0),j&&ne>20&&!K&&ge("siren",Is?"Press the blue siren button! Nee-naw!":"Press F for the siren! Nee-naw!",3.5),Ng(D,H,{truck:M,siren:Ie&&re,horn:Te,fire:ae,cheer:se,blocks:s.blocks}),Te=!1,a.update(),Xg(_,H,{truck:M,siren:Ie&&re}),U.update(),ae&&ae.kind!=="cat"?(N.flames(ae,H,ae.spot.nx,ae.spot.nz),N.smoke(ae,H),v.position.set(ae.x+ae.spot.nx*1.5,ae.y+1,ae.z+ae.spot.nz*1.5),v.intensity=(8+22*p)*ae.hp*(.85+Math.random()*.3)*ae.size):v.intensity=0,re&&M.speed>1&&M.speed<8&&(pe-=H)<0&&(pe=.35,N.puff(M.x+Math.cos(M.heading)*1.1-Math.sin(M.heading)*3.4,.5+fe,M.z+Math.sin(M.heading)*1.1+Math.cos(M.heading)*3.4,9079434,.3));const dn=ae&&ae.kind==="cat"&&Ee.tree||Ee.state==="down"?Ee.tree:null;let yn=0;if(dn&&(yn=Zt(Math.hypot(dn.x-M.x,dn.z-M.z)-5.5,0,4.5)),tx(E,M,H,ne,{aim:Fe,aimPitch:xt,siren:Ie&&re,ladderUp:ue,ladderAt:dn,ladderReach:yn||2.5,night:p>.5,y:fe}),$(H,ne),F.update(H,ne,M,x.distance,zt),N.update(H,w),l.update(ne,M),ae&&j){G.set(ae.x,ae.y+2,ae.z).project(t);const Be=G.z>1;let pt=G.x,nn=G.y;if(Be&&(pt=-pt,nn=-nn),Be||Math.abs(pt)>.92||Math.abs(nn)>.88){const _s=.86/Math.max(Math.abs(pt),Math.abs(nn),.001),qs=pt*Math.min(1,_s),Fi=nn*Math.min(1,_s);B.arrow(!0,(qs+1)/2*innerWidth,(1-Fi)/2*innerHeight,Math.atan2(-nn,pt),ae.kind)}else B.arrow(!1)}else B.arrow(!1);if(j){let Be=null;ze?Be=Fe:ae&&zt<34&&(Be={x:ae.x,y:ae.y,z:ae.z}),x.update(H,M,Be)}else{te+=H*.2;const Be=Math.sin(te*.5)*1;t.position.set(M.x+Math.sin(Be)*22,9+Math.sin(te*.7)*1.5,M.z+Math.cos(Be)*22),t.lookAt(M.x,3,M.z-6)}N.setScale(n.domElement.height,t.fov);let Ft=j?t.position.x+Math.sin(x.yaw)*Math.cos(.86)*x.distance:M.x,Jt=j?t.position.z-Math.cos(x.yaw)*Math.cos(.86)*x.distance:M.z;j&&R==="behind"&&(Ft=M.x+Math.sin(M.heading)*25,Jt=M.z-Math.cos(M.heading)*25),m.target.position.set(Ft,0,Jt),m.position.set(Ft,0,Jt).addScaledVector(g,200),O.update(H,{speed:M.speed,throttle:Math.min(1,Math.hypot(J.mx,J.my)),siren:Ie&&re,time:ne,spraying:ze,splashes:ct,fireNear:ae&&ae.kind!=="cat"?zt:null,fireHp:ae?ae.hp:0,vanNear:Math.hypot(_.cars[1].x-M.x,_.cars[1].z-M.z)}),B.update(H),c.follow(t.position),c.uniforms.time.value=ne,h.render(e,t),!rn.degraded&&H>.042?++ce>240&&ug(n,m)&&h.setSize():ce>0&&ce--}me()}const Oc=n=>n[Math.floor(Math.random()*n.length)];try{Lx()}catch(n){console.error(n);const e=document.querySelector("#error");e&&(e.style.display="grid")}
