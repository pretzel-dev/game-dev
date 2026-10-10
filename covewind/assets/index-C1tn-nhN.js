(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="186",zd=0,El=1,Bd=2,er=1,kd=2,Ks=3,gi=0,tn=1,en=2,Jn=0,tr=1,lr=2,Tl=3,Al=4,Gd=5,ls=100,Vd=101,Hd=102,Wd=103,Xd=104,qd=200,Yd=201,$d=202,Zd=203,hh=204,dh=205,Kd=206,Jd=207,Qd=208,jd=209,ef=210,tf=211,nf=212,sf=213,rf=214,za=0,Ba=1,ka=2,ur=3,Ga=4,Va=5,Ha=6,Wa=7,fh=0,of=1,af=2,zn=0,ph=1,mh=2,gh=3,xh=4,vh=5,_h=6,zc=7,Mh=300,Ii=301,gs=302,Ko=303,Jo=304,Fo=306,Xa=1e3,Zn=1001,qa=1002,Bt=1003,cf=1004,Tr=1005,Kt=1006,Qo=1007,Ci=1008,un=1009,yh=1010,Sh=1011,hr=1012,Bc=1013,Tn=1014,bn=1015,An=1016,kc=1017,Gc=1018,dr=1020,wh=35902,bh=35899,Eh=1021,Th=1022,En=1023,jn=1026,Pi=1027,Oo=1028,Vc=1029,Ui=1030,Hc=1031,Wc=1033,fo=33776,po=33777,mo=33778,go=33779,Ya=35840,$a=35841,Za=35842,Ka=35843,Ja=36196,Qa=37492,ja=37496,ec=37488,tc=37489,So=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,cc=37813,lc=37814,uc=37815,hc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,xc=36492,vc=36494,_c=36495,Mc=36283,yc=36284,wo=36285,Sc=36286,lf=3200,wc=0,uf=1,fi="",rn="srgb",bo="srgb-linear",Eo="linear",St="srgb",jo=7680,hf=519,df=512,ff=513,pf=514,Xc=515,mf=516,gf=517,qc=518,xf=519,vf=35044,Li=35048,Rl="300 es",On=2e3,fr=2001;function _f(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mf(){const n=To("canvas");return n.style.display="block",n}const Cl={};function Pl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ah(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=Ah(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function gt(...n){n=Ah(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fs(...n){const e=n.join(" ");e in Cl||(Cl[e]=!0,tt(...n))}function yf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Sf={[za]:Ba,[ka]:Ha,[Ga]:Wa,[ur]:Va,[Ba]:za,[Ha]:ka,[Wa]:Ga,[Va]:ur};class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ea=Math.PI/180,bc=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function wf(n,e){return(n%e+e)%e}function ta(n,e,t){return(1-t)*n+t*e}function Ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ul=class ul{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;let xe=ul;class kn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(h!==x||c!==d||l!==f||u!==g){let m=c*d+l*f+u*g+h*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,a=Math.sin(a*M)/y,c=c*p+d*a,l=l*p+f*a,u=u*p+g*a,h=h*p+x*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+g*a,h=h*p+x*a;const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let L=hl;const na=new L,Ll=new kn,dl=class dl{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],M=s[1],y=s[4],_=s[7],S=s[2],b=s[5],A=s[8];return r[0]=o*x+a*M+c*S,r[3]=o*m+a*y+c*b,r[6]=o*p+a*_+c*A,r[1]=l*x+u*M+h*S,r[4]=l*m+u*y+h*b,r[7]=l*p+u*_+h*A,r[2]=d*x+f*M+g*S,r[5]=d*m+f*y+g*b,r[8]=d*p+f*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ia.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dl.prototype.isMatrix3=!0;let nt=dl;const ia=new nt,Dl=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){const n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bo]:{primaries:e,whitePoint:i,transfer:Eo,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const pt=bf();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class Ef{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wi===void 0&&(Wi=To("canvas")),Wi.width=e.width,Wi.height=e.height;const s=Wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qn(t[i]/255)*255):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class Yc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sa(s[o].image)):r.push(sa(s[o]))}else r=sa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ef.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Af=0;const ra=new L;class Jt extends Oi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Zn,s=Zn,r=Kt,o=Ci,a=En,c=un,l=Jt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=bs(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Mh;Jt.DEFAULT_ANISOTROPY=1;const fl=class fl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(f+1)/2,S=(p+1)/2,b=(u+d)/4,A=(h+x)/4,v=(g+m)/4;return y>_&&y>S?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=b/i,r=A/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=A/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;let Pt=fl;class Rf extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Jt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cf extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const No=class No{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,x,m)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new No().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Lf)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ii.crossVectors(i,an),ii.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ii.crossVectors(i,an)),ii.normalize(),Ar.crossVectors(an,ii),s[0]=ii.x,s[4]=Ar.x,s[8]=an.x,s[1]=ii.y,s[5]=Ar.y,s[9]=an.y,s[2]=ii.z,s[6]=Ar.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],y=i[7],_=i[11],S=i[15],b=s[0],A=s[4],v=s[8],E=s[12],R=s[1],C=s[5],I=s[9],X=s[13],F=s[2],k=s[6],N=s[10],B=s[14],J=s[3],O=s[7],$=s[11],j=s[15];return r[0]=o*b+a*R+c*F+l*J,r[4]=o*A+a*C+c*k+l*O,r[8]=o*v+a*I+c*N+l*$,r[12]=o*E+a*X+c*B+l*j,r[1]=u*b+h*R+d*F+f*J,r[5]=u*A+h*C+d*k+f*O,r[9]=u*v+h*I+d*N+f*$,r[13]=u*E+h*X+d*B+f*j,r[2]=g*b+x*R+m*F+p*J,r[6]=g*A+x*C+m*k+p*O,r[10]=g*v+x*I+m*N+p*$,r[14]=g*E+x*X+m*B+p*j,r[3]=M*b+y*R+_*F+S*J,r[7]=M*A+y*C+_*k+S*O,r[11]=M*v+y*I+_*N+S*$,r[15]=M*E+y*X+_*B+S*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=c*f-l*d,y=a*f-l*h,_=a*d-c*h,S=o*f-l*u,b=o*d-c*u,A=o*h-a*u;return t*(x*M-m*y+p*_)-i*(g*M-m*S+p*b)+s*(g*y-x*S+p*A)-r*(g*_-x*b+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*a-i*o,y=t*c-s*o,_=t*l-r*o,S=i*c-s*a,b=i*l-r*a,A=s*l-r*c,v=u*x-h*g,E=u*m-d*g,R=u*p-f*g,C=h*m-d*x,I=h*p-f*x,X=d*p-f*m,F=M*X-y*I+_*C+S*R-b*E+A*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(a*X-c*I+l*C)*k,e[1]=(s*I-i*X-r*C)*k,e[2]=(x*A-m*b+p*S)*k,e[3]=(d*b-h*A-f*S)*k,e[4]=(c*R-o*X-l*E)*k,e[5]=(t*X-s*R+r*E)*k,e[6]=(m*_-g*A-p*y)*k,e[7]=(u*A-d*_+f*y)*k,e[8]=(o*I-a*R+l*v)*k,e[9]=(i*R-t*I-r*v)*k,e[10]=(g*b-x*_+p*M)*k,e[11]=(h*_-u*b-f*M)*k,e[12]=(a*E-o*C-c*v)*k,e[13]=(t*C-i*E+s*v)*k,e[14]=(x*y-g*S-m*M)*k,e[15]=(u*S-h*y+d*M)*k,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,M=c*l,y=c*u,_=c*h,S=i.x,b=i.y,A=i.z;return s[0]=(1-(x+p))*S,s[1]=(f+_)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+y)*A,s[9]=(m-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),c=Xi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vn.copy(this);const l=1/o,u=1/a,h=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=On,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===On)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===On)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===fr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};No.prototype.isMatrix4=!0;let Et=No;const Xi=new L,vn=new Et,Pf=new L(0,0,0),Lf=new L(1,1,1),ii=new L,Ar=new L,an=new L,Ul=new Et,Nl=new kn;class xi{constructor(e=0,t=0,i=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Df=0;const Fl=new L,qi=new kn,Vn=new Et,Rr=new L,Ds=new L,If=new L,Uf=new kn,Ol=new L(1,0,0),zl=new L(0,1,0),Bl=new L(0,0,1),kl={type:"added"},Nf={type:"removed"},Yi={type:"childadded",child:null},oa={type:"childremoved",child:null};class Ht extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new L,t=new xi,i=new kn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new nt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Ol,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Fl.copy(e).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ol,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ds,Rr,this.up):Vn.lookAt(Rr,Ds,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class je extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ff={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=wf(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ca(o,r,e+1/3),this.g=ca(o,r,e),this.b=ca(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return pt.workingToColorSpace($t.copy(this),e),Math.round(ut($t.r*255,0,255))*65536+Math.round(ut($t.g*255,0,255))*256+Math.round(ut($t.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=rn){pt.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Cr);const i=ta(si.h,Cr.h,t),s=ta(si.s,Cr.s,t),r=ta(si.l,Cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new _e;_e.NAMES=Ph;class $c{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=i}clone(){return new $c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lh extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new L,Hn=new L,la=new L,Wn=new L,$i=new L,Zi=new L,Gl=new L,ua=new L,ha=new L,da=new L,fa=new Pt,pa=new Pt,ma=new Pt;class wn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),Hn.subVectors(i,t),la.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Hn),c=_n.dot(la),l=Hn.dot(Hn),u=Hn.dot(la),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,i),ma.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),Hn.subVectors(e,t),_n.cross(Hn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;$i.subVectors(s,i),Zi.subVectors(r,i),ua.subVectors(e,i);const c=$i.dot(ua),l=Zi.dot(ua);if(c<=0&&l<=0)return t.copy(i);ha.subVectors(e,s);const u=$i.dot(ha),h=Zi.dot(ha);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector($i,o);da.subVectors(e,r);const f=$i.dot(da),g=Zi.dot(da);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Zi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Gl.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Gl,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector($i,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Lr.subVectors(this.max,Is),Ki.subVectors(e.a,Is),Ji.subVectors(e.b,Is),Qi.subVectors(e.c,Is),ri.subVectors(Ji,Ki),oi.subVectors(Qi,Ji),yi.subVectors(Ki,Qi);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-yi.z,yi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,yi.z,0,-yi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-yi.y,yi.x,0];return!ga(t,Ki,Ji,Qi,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Ki,Ji,Qi,Lr))?!1:(Dr.crossVectors(ri,oi),t=[Dr.x,Dr.y,Dr.z],ga(t,Ki,Ji,Qi,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,Pr=new zi,Ki=new L,Ji=new L,Qi=new L,ri=new L,oi=new L,yi=new L,Is=new L,Lr=new L,Dr=new L,Si=new L;function ga(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Si.fromArray(n,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ot=new L,Ir=new xe;let Of=0;class gn extends Oi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vf,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dh extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ih extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ze extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const zf=new zi,Us=new L,xa=new L;class Es{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(xa)),this.expandByPoint(Us.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bf=0;const dn=new Et,va=new Ht,ji=new L,cn=new zi,Ns=new zi,Vt=new L;class xt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?Ih:Dh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(cn.min,Ns.min),cn.expandByPoint(Vt),Vt.addVectors(cn.max,Ns.max),cn.expandByPoint(Vt)):(cn.expandByPoint(Ns.min),cn.expandByPoint(Ns.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),Vt.add(ji)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new L,c[v]=new L;const l=new L,u=new L,h=new L,d=new xe,f=new xe,g=new xe,x=new L,m=new L;function p(v,E,R){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,R),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[v].add(x),a[E].add(x),a[R].add(x),c[v].add(m),c[E].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,E=M.length;v<E;++v){const R=M[v],C=R.start,I=R.count;for(let X=C,F=C+I;X<F;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new L,_=new L,S=new L,b=new L;function A(v){S.fromBufferAttribute(s,v),b.copy(S);const E=a[v];y.copy(E),y.sub(S.multiplyScalar(S.dot(E))).normalize(),_.crossVectors(b,E);const C=_.dot(c[v])<0?-1:1;o.setXYZW(v,y.x,y.y,y.z,C)}for(let v=0,E=M.length;v<E;++v){const R=M[v],C=R.start,I=R.count;for(let X=C,F=C+I;X<F;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new gn(d,u,h)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new L,kf=new L,Gf=new nt;class hi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=_a.subVectors(i,t).cross(kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(_a),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gf.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vf=0;class Ts extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=tr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=dh,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qn=new L,Ma=new L,Ur=new L,Nr=new L;class Uh{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ma.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=Nr.dot(this.direction),c=-Nr.dot(Ur),l=Nr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ma).addScaledVector(Ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,m=t.z-o.z,p=i.x-o.x,M=i.y-o.y,y=i.z-o.z,_=Math.abs(c),S=Math.abs(l),b=Math.abs(u);let A,v,E,R,C,I,X,F,k,N,B,J;if(_>=S&&_>=b?(E=c,I=h,k=g,J=p,c>=0?(A=l,v=u,R=d,C=f,X=x,F=m,N=M,B=y):(A=u,v=l,R=f,C=d,X=m,F=x,N=y,B=M)):S>=b?(E=l,I=d,k=x,J=M,l>=0?(A=u,v=c,R=f,C=h,X=m,F=g,N=y,B=p):(A=c,v=u,R=h,C=f,X=g,F=m,N=p,B=y)):(E=u,I=f,k=m,J=y,u>=0?(A=c,v=l,R=h,C=d,X=g,F=x,N=p,B=M):(A=l,v=c,R=d,C=h,X=x,F=g,N=M,B=p)),E===0)return null;const O=A/E,$=v/E,j=1/E,pe=R-O*I,re=C-$*I,Ge=X-O*k,me=F-$*k,oe=N-O*J,G=B-$*J,Q=oe*me-G*Ge,de=pe*G-re*oe,Ie=Ge*re-me*pe;if(s){if(Q<0||de<0||Ie<0)return null}else if((Q<0||de<0||Ie<0)&&(Q>0||de>0||Ie>0))return null;const Me=Q+de+Ie;if(Me===0)return null;const Oe=j*(Q*I+de*k+Ie*J);return(Me>0?Oe<0:Oe>0)?null:this.at(Oe/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xs extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vl=new Et,wi=new Uh,Fr=new Es,Hl=new L,Or=new L,zr=new L,Br=new L,ya=new L,kr=new L,Wl=new L,Gr=new L;class D extends Ht{constructor(e=new xt,t=new xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(ya.fromBufferAttribute(h,e),o?kr.addScaledVector(ya,u):kr.addScaledVector(ya.sub(t),u))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Fr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Fr,Hl)===null||wi.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Vl.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=y;_<S;_+=3){const b=a.getX(_),A=a.getX(_+1),v=a.getX(_+2);s=Vr(this,p,e,i,l,u,h,b,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Vr(this,o,e,i,l,u,h,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=y;_<S;_+=3){const b=_,A=_+1,v=_+2;s=Vr(this,p,e,i,l,u,h,b,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,y=m+1,_=m+2;s=Vr(this,o,e,i,l,u,h,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Hf(n,e,t,i,s,r,o,a){let c;if(e.side===tn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===gi,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:n}}function Vr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Or),n.getVertexPosition(c,zr),n.getVertexPosition(l,Br);const u=Hf(n,e,t,i,Or,zr,Br,Wl);if(u){const h=new L;wn.getBarycoord(Wl,Or,zr,Br,h),s&&(u.uv=wn.getInterpolatedAttribute(s,a,c,l,h,new xe)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,c,l,h,new xe)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};wn.getNormal(Or,zr,Br,d.normal),u.face=d,u.barycoord=h}return u}class Zc extends Jt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Bt,u=Bt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xl extends gn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Et,ql=new Et,Hr=[],Yl=new zi,Wf=new Et,Fs=new D,Os=new Es;class Xf extends D{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Wf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),Yl.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(Yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),Os.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),e.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),ql.multiplyMatrices(i,es),Fs.matrixWorld=ql,Fs.raycast(e,Hr);for(let o=0,a=Hr.length;o<a;o++){const c=Hr[o];c.instanceId=r,c.object=this,t.push(c)}Hr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zc(new Float32Array(s*this.count),s,this.count,Oo,bn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bi=new Es,qf=new xe(.5,.5),Wr=new L;class Kc{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],y=r[13],_=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,p-g,S-M).normalize(),s[1].setComponents(l+o,f+u,p+g,S+M).normalize(),s[2].setComponents(l+a,f+h,p+x,S+y).normalize(),s[3].setComponents(l-a,f-h,p-x,S-y).normalize(),i)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,f-d,p-m,S-_).normalize();else if(s[4].setComponents(l-c,f-d,p-m,S-_).normalize(),t===On)s[5].setComponents(l+c,f+d,p+m,S+_).normalize();else if(t===fr)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=qf.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nh extends Ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $l=new Et,Ec=new Uh,Xr=new Es,qr=new L;class Fh extends Ht{constructor(e=new xt,t=new Nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;$l.copy(s).invert(),Ec.copy(e.ray).applyMatrix4($l);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=l.getX(g);qr.fromBufferAttribute(h,m),Zl(qr,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)qr.fromBufferAttribute(h,g),Zl(qr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zl(n,e,t,i,s,r,o){const a=Ec.distanceSqToPoint(n);if(a<t){const c=new L;Ec.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Oh extends Jt{constructor(e=[],t=Ii,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yf extends Jt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends Jt{constructor(e,t,i=Tn,s,r,o,a=Bt,c=Bt,l,u=jn,h=1){if(u!==jn&&u!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $f extends vs{constructor(e,t=Tn,i=Ii,s,r,o=Bt,a=Bt,c,l=jn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zh extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class we extends xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function g(x,m,p,M,y,_,S,b,A,v,E){const R=_/A,C=S/v,I=_/2,X=S/2,F=b/2,k=A+1,N=v+1;let B=0,J=0;const O=new L;for(let $=0;$<N;$++){const j=$*C-X;for(let pe=0;pe<k;pe++){const re=pe*R-I;O[x]=re*M,O[m]=j*y,O[p]=F,l.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[p]=b>0?1:-1,u.push(O.x,O.y,O.z),h.push(pe/A),h.push(1-$/v),B+=1}}for(let $=0;$<v;$++)for(let j=0;j<A;j++){const pe=d+j+k*$,re=d+j+k*($+1),Ge=d+(j+1)+k*($+1),me=d+(j+1)+k*$;c.push(pe,re,me),c.push(re,Ge,me),J+=6}a.addGroup(f,J,E),f+=J,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new we(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _s extends xt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=i*2+r,x=s+1,m=new L,p=new L;for(let M=0;M<=g;M++){let y=0,_=0,S=0,b=0;if(M<=i){const E=M/i,R=E*Math.PI/2;_=-u-e*Math.cos(R),S=e*Math.sin(R),b=-e*Math.cos(R),y=E*h}else if(M<=i+r){const E=(M-i)/r;_=-u+E*t,S=e,b=0,y=h+E*d}else{const E=(M-i-r)/i,R=E*Math.PI/2;_=u+e*Math.sin(R),S=e*Math.cos(R),b=e*Math.sin(R),y=h+d+E*h}const A=Math.max(0,Math.min(1,y/f));let v=0;M===0?v=.5/s:M===g&&(v=-.5/s);for(let E=0;E<=s;E++){const R=E/s,C=R*Math.PI*2,I=Math.sin(C),X=Math.cos(C);p.x=-S*X,p.y=_,p.z=S*I,a.push(p.x,p.y,p.z),m.set(-S*X,b,S*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+v,A)}if(M>0){const E=(M-1)*x;for(let R=0;R<s;R++){const C=E+R,I=E+R+1,X=M*x+R,F=M*x+R+1;o.push(C,I,X),o.push(I,F,X)}}}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Kn extends xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,u=new xe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ke extends xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=i/2;let p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function M(){const _=new L,S=new L;let b=0;const A=(t-e)/i;for(let v=0;v<=r;v++){const E=[],R=v/r,C=R*(t-e)+e;for(let I=0;I<=s;I++){const X=I/s,F=X*c+a,k=Math.sin(F),N=Math.cos(F);S.x=C*k,S.y=-R*i+m,S.z=C*N,h.push(S.x,S.y,S.z),_.set(k,A,N).normalize(),d.push(_.x,_.y,_.z),f.push(X,1-R),E.push(g++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const R=x[E][v],C=x[E+1][v],I=x[E+1][v+1],X=x[E][v+1];(e>0||E!==0)&&(u.push(R,C,X),b+=3),(t>0||E!==r-1)&&(u.push(C,I,X),b+=3)}l.addGroup(p,b,0),p+=b}function y(_){const S=g,b=new xe,A=new L;let v=0;const E=_===!0?e:t,R=_===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const F=I/s*c+a,k=Math.cos(F),N=Math.sin(F);A.x=E*N,A.y=m*R,A.z=E*k,h.push(A.x,A.y,A.z),d.push(0,R,0),b.x=k*.5+.5,b.y=N*.5*R+.5,f.push(b.x,b.y),g++}for(let I=0;I<s;I++){const X=S+I,F=C+I;_===!0?u.push(F,F+1,X):u.push(F+1,F,X),v+=3}l.addGroup(p,v,_===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nt extends ke{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zo extends xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new L,_=new L,S=new L;for(let b=0;b<t.length;b+=3)f(t[b+0],y),f(t[b+1],_),f(t[b+2],S),c(y,_,S,M)}function c(M,y,_,S){const b=S+1,A=[];for(let v=0;v<=b;v++){A[v]=[];const E=M.clone().lerp(_,v/b),R=y.clone().lerp(_,v/b),C=b-v;for(let I=0;I<=C;I++)I===0&&v===b?A[v][I]=E:A[v][I]=E.clone().lerp(R,I/C)}for(let v=0;v<b;v++)for(let E=0;E<2*(b-v)-1;E++){const R=Math.floor(E/2);E%2===0?(d(A[v][R+1]),d(A[v+1][R]),d(A[v][R])):(d(A[v][R+1]),d(A[v+1][R+1]),d(A[v+1][R]))}}function l(M){const y=new L;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const M=new L;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const _=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(_,1-S)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],_=o[M+2],S=o[M+4],b=Math.max(y,_,S),A=Math.min(y,_,S);b>.9&&A<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const M=new L,y=new L,_=new L,S=new L,b=new xe,A=new xe,v=new xe;for(let E=0,R=0;E<r.length;E+=9,R+=6){M.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),b.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),v.set(o[R+4],o[R+5]),S.copy(M).add(y).add(_).divideScalar(3);const C=m(S);x(b,R+0,M,C),x(A,R+2,y,C),x(v,R+4,_,C)}}function x(M,y,_,S){S<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.vertices,e.indices,e.radius,e.detail)}}class Bo extends zo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bo(e.radius,e.detail)}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new xe:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,s=[],r=[],o=[],a=new L,c=new Et;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends Gn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new xe){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zf extends Jc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Kl=new L,Jl=new L,Sa=new Qc,wa=new Qc,ba=new Qc;class Bh extends Gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Jl.subVectors(s[0],s[1]).add(s[0]),l=Jl);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Kl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Kl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Sa.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),wa.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),ba.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),wa.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ba.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Sa.calc(c),wa.calc(c),ba.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ql(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Kf(n,e){const t=1-n;return t*t*e}function Jf(n,e){return 2*(1-n)*n*e}function Qf(n,e){return n*n*e}function nr(n,e,t,i){return Kf(n,e)+Jf(n,t)+Qf(n,i)}function jf(n,e){const t=1-n;return t*t*t*e}function ep(n,e){const t=1-n;return 3*t*t*n*e}function tp(n,e){return 3*(1-n)*n*n*e}function np(n,e){return n*n*n*e}function ir(n,e,t,i,s){return jf(n,e)+ep(n,t)+tp(n,i)+np(n,s)}class kh extends Gn{constructor(e=new xe,t=new xe,i=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new xe){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ip extends Gn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gh extends Gn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends Gn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends Gn{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends Gn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Ql(a,c.x,l.x,u.x,h.x),Ql(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var Ao=Object.freeze({__proto__:null,ArcCurve:Zf,CatmullRomCurve3:Bh,CubicBezierCurve:kh,CubicBezierCurve3:ip,EllipseCurve:Jc,LineCurve:Gh,LineCurve3:sp,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:Hh,SplineCurve:Wh});class rp extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ao[s.type]().fromJSON(s))}return this}}class jl extends rp{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Gh(this.currentPoint.clone(),new xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Vh(this.currentPoint.clone(),new xe(e,t),new xe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new kh(this.currentPoint.clone(),new xe(e,t),new xe(i,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Jc(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ro extends jl{constructor(e){super(e),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new jl().fromJSON(s))}return this}}function op(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Xh(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=hp(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,h=c;for(let d=t;d<s;d+=t){const f=n[d],g=n[d+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return pr(r,o,t,a,c,l,0),o}function Xh(n,e,t,i,s){let r;if(s===Sp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=eu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=eu(o/i|0,n[o],n[o+1],r);return r&&Ms(r,r.next)&&(gr(r),r=r.next),r}function Ni(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ms(t,t.next)||Lt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function pr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&gp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?cp(n,i,s,r):ap(n)){e.push(c.i,n.i,l.i),gr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=lp(Ni(n),e),pr(n,e,t,i,s,r,2)):o===2&&up(n,e,t,i,s,r):pr(Ni(n),e,t,i,s,r,1);break}}}function ap(n){const e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Js(s,a,r,c,o,l,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cp(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Lt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(u,h,d),x=Math.max(a,c,l),m=Math.max(u,h,d),p=Tc(f,g,e,t,i),M=Tc(x,m,e,t,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=p&&_&&_.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Js(a,u,c,h,l,d,y.x,y.y)&&Lt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Js(a,u,c,h,l,d,_.x,_.y)&&Lt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Js(a,u,c,h,l,d,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Js(a,u,c,h,l,d,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function lp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ms(i,s)&&Yh(i,t,t.next,s)&&mr(i,s)&&mr(s,i)&&(e.push(i.i,t.i,s.i),gr(t),gr(t.next),t=n=s),t=t.next}while(t!==n);return Ni(t)}function up(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_p(o,a)){let c=$h(o,a);o=Ni(o,o.next),c=Ni(c,c.next),pr(o,e,t,i,s,r,0),pr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hp(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Xh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(vp(l))}s.sort(dp);for(let r=0;r<s.length;r++)t=fp(s[r],t);return t}function dp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function fp(n,e){const t=pp(n,e);if(!t)return e;const i=$h(t,n);return Ni(i,i.next),Ni(t,t.next)}function pp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ms(n,t))return t;do{if(Ms(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&qh(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);mr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&mp(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function mp(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function gp(n,e,t,i){let s=n;do s.z===0&&(s.z=Tc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,xp(s)}function xp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Tc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function vp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function qh(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Js(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&qh(n,e,t,i,s,r,o,a)}function _p(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Mp(n,e)&&(mr(n,e)&&mr(e,n)&&yp(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||Ms(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ms(n,e){return n.x===e.x&&n.y===e.y}function Yh(n,e,t,i){const s=$r(Lt(n,e,t)),r=$r(Lt(n,e,i)),o=$r(Lt(t,i,n)),a=$r(Lt(t,i,e));return!!(s!==r&&o!==a||s===0&&Yr(n,t,e)||r===0&&Yr(n,i,e)||o===0&&Yr(t,n,i)||a===0&&Yr(t,e,i))}function Yr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function $r(n){return n>0?1:n<0?-1:0}function Mp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function mr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function yp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $h(n,e){const t=Ac(n.i,n.x,n.y),i=Ac(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function eu(n,e,t,i){const s=Ac(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ac(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class wp{static triangulate(e,t,i=2){return op(e,t,i)}}class us{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return us.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];tu(e),nu(i,e);let o=e.length;t.forEach(tu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,nu(i,t[c]);const a=wp.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function tu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class xr extends xt{constructor(e=new Ro([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:bp;let y,_=!1,S,b,A,v;if(p){y=p.getSpacedPoints(u),_=!0,d=!1;const ae=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,ae),b=new L,A=new L,v=new L}d||(m=0,f=0,g=0,x=0);const E=a.extractPoints(l);let R=E.shape;const C=E.holes;if(!us.isClockWise(R)){R=R.reverse();for(let ae=0,q=C.length;ae<q;ae++){const se=C[ae];us.isClockWise(se)&&(C[ae]=se.reverse())}}function X(ae){const se=10000000000000001e-36;let ue=ae[0];for(let ge=1;ge<=ae.length;ge++){const Ke=ge%ae.length,He=ae[Ke],Qe=He.x-ue.x,et=He.y-ue.y,z=Qe*Qe+et*et,_t=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(ue.x),Math.abs(ue.y)),ht=se*_t*_t;if(z<=ht){ae.splice(Ke,1),ge--;continue}ue=He}}X(R),C.forEach(X);const F=C.length,k=R;for(let ae=0;ae<F;ae++){const q=C[ae];R=R.concat(q)}function N(ae,q,se){return q||gt("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(q,se)}const B=R.length;function J(ae,q,se){let ue,ge,Ke;const He=ae.x-q.x,Qe=ae.y-q.y,et=se.x-ae.x,z=se.y-ae.y,_t=He*He+Qe*Qe,ht=He*z-Qe*et;if(Math.abs(ht)>Number.EPSILON){const P=Math.sqrt(_t),w=Math.sqrt(et*et+z*z),Y=q.x-Qe/P,ee=q.y+He/P,ne=se.x-z/w,ve=se.y+et/w,ye=((ne-Y)*z-(ve-ee)*et)/(He*z-Qe*et);ue=Y+He*ye-ae.x,ge=ee+Qe*ye-ae.y;const ie=ue*ue+ge*ge;if(ie<=2)return new xe(ue,ge);Ke=Math.sqrt(ie/2)}else{let P=!1;He>Number.EPSILON?et>Number.EPSILON&&(P=!0):He<-Number.EPSILON?et<-Number.EPSILON&&(P=!0):Math.sign(Qe)===Math.sign(z)&&(P=!0),P?(ue=-Qe,ge=He,Ke=Math.sqrt(_t)):(ue=He,ge=Qe,Ke=Math.sqrt(_t/2))}return new xe(ue/Ke,ge/Ke)}const O=[];for(let ae=0,q=k.length,se=q-1,ue=ae+1;ae<q;ae++,se++,ue++)se===q&&(se=0),ue===q&&(ue=0),O[ae]=J(k[ae],k[se],k[ue]);const $=[];let j,pe=O.concat();for(let ae=0,q=F;ae<q;ae++){const se=C[ae];j=[];for(let ue=0,ge=se.length,Ke=ge-1,He=ue+1;ue<ge;ue++,Ke++,He++)Ke===ge&&(Ke=0),He===ge&&(He=0),j[ue]=J(se[ue],se[Ke],se[He]);$.push(j),pe=pe.concat(j)}let re;if(m===0)re=us.triangulateShape(k,C);else{const ae=[],q=[];for(let se=0;se<m;se++){const ue=se/m,ge=f*Math.cos(ue*Math.PI/2),Ke=g*Math.sin(ue*Math.PI/2)+x;for(let He=0,Qe=k.length;He<Qe;He++){const et=N(k[He],O[He],Ke);de(et.x,et.y,-ge),ue===0&&ae.push(et)}for(let He=0,Qe=F;He<Qe;He++){const et=C[He];j=$[He];const z=[];for(let _t=0,ht=et.length;_t<ht;_t++){const P=N(et[_t],j[_t],Ke);de(P.x,P.y,-ge),ue===0&&z.push(P)}ue===0&&q.push(z)}}re=us.triangulateShape(ae,q)}const Ge=re.length,me=g+x;for(let ae=0;ae<B;ae++){const q=d?N(R[ae],pe[ae],me):R[ae];_?(A.copy(S.normals[0]).multiplyScalar(q.x),b.copy(S.binormals[0]).multiplyScalar(q.y),v.copy(y[0]).add(A).add(b),de(v.x,v.y,v.z)):de(q.x,q.y,0)}for(let ae=1;ae<=u;ae++)for(let q=0;q<B;q++){const se=d?N(R[q],pe[q],me):R[q];_?(A.copy(S.normals[ae]).multiplyScalar(se.x),b.copy(S.binormals[ae]).multiplyScalar(se.y),v.copy(y[ae]).add(A).add(b),de(v.x,v.y,v.z)):de(se.x,se.y,h/u*ae)}for(let ae=m-1;ae>=0;ae--){const q=ae/m,se=f*Math.cos(q*Math.PI/2),ue=g*Math.sin(q*Math.PI/2)+x;for(let ge=0,Ke=k.length;ge<Ke;ge++){const He=N(k[ge],O[ge],ue);de(He.x,He.y,h+se)}for(let ge=0,Ke=C.length;ge<Ke;ge++){const He=C[ge];j=$[ge];for(let Qe=0,et=He.length;Qe<et;Qe++){const z=N(He[Qe],j[Qe],ue);_?de(z.x,z.y+y[u-1].y,y[u-1].x+se):de(z.x,z.y,h+se)}}}oe(),G();function oe(){const ae=s.length/3;if(d){let q=0,se=B*q;for(let ue=0;ue<Ge;ue++){const ge=re[ue];Ie(ge[2]+se,ge[1]+se,ge[0]+se)}q=u+m*2,se=B*q;for(let ue=0;ue<Ge;ue++){const ge=re[ue];Ie(ge[0]+se,ge[1]+se,ge[2]+se)}}else{for(let q=0;q<Ge;q++){const se=re[q];Ie(se[2],se[1],se[0])}for(let q=0;q<Ge;q++){const se=re[q];Ie(se[0]+B*u,se[1]+B*u,se[2]+B*u)}}i.addGroup(ae,s.length/3-ae,0)}function G(){const ae=s.length/3;let q=0;Q(k,q),q+=k.length;for(let se=0,ue=C.length;se<ue;se++){const ge=C[se];Q(ge,q),q+=ge.length}i.addGroup(ae,s.length/3-ae,1)}function Q(ae,q){let se=ae.length;for(;--se>=0;){const ue=se;let ge=se-1;ge<0&&(ge=ae.length-1);for(let Ke=0,He=u+m*2;Ke<He;Ke++){const Qe=B*Ke,et=B*(Ke+1),z=q+ue+Qe,_t=q+ge+Qe,ht=q+ge+et,P=q+ue+et;Me(z,_t,ht,P)}}}function de(ae,q,se){c.push(ae),c.push(q),c.push(se)}function Ie(ae,q,se){Oe(ae),Oe(q),Oe(se);const ue=s.length/3,ge=M.generateTopUV(i,s,ue-3,ue-2,ue-1);lt(ge[0]),lt(ge[1]),lt(ge[2])}function Me(ae,q,se,ue){Oe(ae),Oe(q),Oe(ue),Oe(q),Oe(se),Oe(ue);const ge=s.length/3,Ke=M.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);lt(Ke[0]),lt(Ke[1]),lt(Ke[3]),lt(Ke[1]),lt(Ke[2]),lt(Ke[3])}function Oe(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function lt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ep(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ao[s.type]().fromJSON(s)),new xr(i,e.options)}}const bp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new xe(r,o),new xe(a,c),new xe(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new xe(o,1-c),new xe(l,1-h),new xe(d,1-g),new xe(x,1-p)]:[new xe(a,1-c),new xe(u,1-h),new xe(f,1-g),new xe(m,1-p)]}};function Ep(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bi extends zo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bi(e.radius,e.detail)}}class Mr extends xt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new L,d=new xe,f=new L,g=new L,x=new L;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=t;M++){const y=i+M*u*s,_=Math.sin(y),S=Math.cos(y);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*_,h.y=e[b].y,h.z=e[b].x*S,o.push(h.x,h.y,h.z),d.x=M/t,d.y=b/(e.length-1),a.push(d.x,d.y);const A=c[3*b+0]*_,v=c[3*b+1],E=c[3*b+0]*S;l.push(A,v,E)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const _=y+M*e.length,S=_,b=_+e.length,A=_+e.length+1,v=_+1;r.push(S,b,v),r.push(A,v,b)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.points,e.segments,e.phiStart,e.phiLength)}}class _i extends xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let y=0;y<l;y++){const _=y*h-r;g.push(_,-M,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,_=M+l*(p+1),S=M+1+l*(p+1),b=M+1+l*p;f.push(y,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}class bt extends xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const M=[],y=p/i,_=o+y*a,S=e*Math.cos(_),b=Math.sqrt(e*e-S*S);let A=0;p===0&&o===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const E=v/t,R=s+E*r;h.x=-b*Math.cos(R),h.y=S,h.z=b*Math.sin(R),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+A,1-y),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const y=u[p][M+1],_=u[p][M],S=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&f.push(y,_,b),(p!==i-1||c<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rn extends xt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],h=[],d=new L,f=new L,g=new L;for(let x=0;x<=i;x++){const m=o+x/i*a;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(p/s),h.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){const p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,y=(s+1)*(x-1)+m,_=(s+1)*x+m;c.push(p,M,_),c.push(M,y,_)}this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class jc extends xt{constructor(e=new Hh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new xe;let u=new L;const h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),p()}function m(y){u=e.getPointAt(y/t,u);const _=o.normals[y],S=o.binormals[y];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,v=Math.sin(A),E=-Math.cos(A);c.x=E*_.x+v*S.x,c.y=E*_.y+v*S.y,c.z=E*_.z+v*S.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){const S=(s+1)*(y-1)+(_-1),b=(s+1)*y+(_-1),A=(s+1)*y+_,v=(s+1)*(y-1)+_;g.push(S,b,v),g.push(b,A,v)}}function M(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)l.x=y/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jc(new Ao[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(iu(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(iu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const s in i)e[s]=i[s]}return e}function iu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Ap={clone:ys,merge:jt};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new _e().setHex(s.value);break;case"v2":this.uniforms[i].value=new xe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Pp extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lp extends Ts{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Dp extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ip extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class el extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Up extends el{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ea=new Et,su=new L,ru=new L;class Kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ea,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===fr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zr=new L,Kr=new kn,In=new L;class Jh extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,Kr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Kr,In.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zr,Kr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Kr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new L,ou=new xe,au=new xe;class ln extends Jh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,ou,au),t.subVectors(au,ou)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Np extends Kh{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class Fp extends el{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ko extends Jh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Op extends Kh{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends el{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ts=-90,ns=1;class Bp extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ts,ns,e,t);s.layers=this.layers,this.add(s);const r=new ln(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new ln(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new ln(ts,ns,e,t);a.layers=this.layers,this.add(a);const c=new ln(ts,ns,e,t);c.layers=this.layers,this.add(c);const l=new ln(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kp extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Vp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vp(){this._document.hidden===!1&&this.reset()}const pl=class pl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};pl.prototype.isMatrix2=!0;let cu=pl;function lu(n,e,t,i){const s=Hp(i);switch(t){case Eh:return n*e;case Oo:return n*e/s.components*s.byteLength;case Vc:return n*e/s.components*s.byteLength;case Ui:return n*e*2/s.components*s.byteLength;case Hc:return n*e*2/s.components*s.byteLength;case Th:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Wc:return n*e*4/s.components*s.byteLength;case fo:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:case Ka:return Math.max(n,16)*Math.max(e,8)/4;case Ya:case Za:return Math.max(n,8)*Math.max(e,8)/2;case Ja:case Qa:case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case So:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xc:case vc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mc:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wo:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hp(n){switch(n){case un:case yh:return{byteLength:1,components:1};case hr:case Sh:case An:return{byteLength:2,components:1};case kc:case Gc:return{byteLength:2,components:4};case Tn:case Bc:case bn:return{byteLength:4,components:1};case wh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qh(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
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
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,p0=`#define PI 3.141592653589793
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
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,O0=`#ifdef USE_ENVMAP
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
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
#endif`,H0=`uniform sampler2D dfgLUT;
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
}`,W0=`
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,jm=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,vg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:Yp,alphamap_pars_fragment:$p,alphatest_fragment:Zp,alphatest_pars_fragment:Kp,aomap_fragment:Jp,aomap_pars_fragment:Qp,batching_pars_vertex:jp,batching_vertex:e0,begin_vertex:t0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:s0,bumpmap_pars_fragment:r0,clipping_planes_fragment:o0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:l0,color_fragment:u0,color_pars_fragment:h0,color_pars_vertex:d0,color_vertex:f0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:x0,displacementmap_vertex:v0,emissivemap_fragment:_0,emissivemap_pars_fragment:M0,colorspace_fragment:y0,colorspace_pars_fragment:S0,envmap_fragment:w0,envmap_common_pars_fragment:b0,envmap_pars_fragment:E0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:O0,envmap_vertex:A0,fog_vertex:R0,fog_pars_vertex:C0,fog_fragment:P0,fog_pars_fragment:L0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:I0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:N0,lights_pars_begin:F0,lights_toon_fragment:z0,lights_toon_pars_fragment:B0,lights_phong_fragment:k0,lights_phong_pars_fragment:G0,lights_physical_fragment:V0,lights_physical_pars_fragment:H0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:q0,lightprobes_pars_fragment:Y0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:j0,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:om,morphtarget_pars_vertex:am,morphtarget_vertex:cm,normal_fragment_begin:lm,normal_fragment_maps:um,normal_pars_fragment:hm,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:_m,packing:Mm,premultiplied_alpha_fragment:ym,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:bm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Pm,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Im,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:Om,tonemapping_pars_fragment:zm,transmission_fragment:Bm,transmission_pars_fragment:km,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Hm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:$m,cube_vert:Zm,cube_frag:Km,depth_vert:Jm,depth_frag:Qm,distance_vert:jm,distance_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:og,meshlambert_vert:ag,meshlambert_frag:cg,meshmatcap_vert:lg,meshmatcap_frag:ug,meshnormal_vert:hg,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:_g,points_frag:Mg,shadow_vert:yg,shadow_frag:Sg,sprite_vert:wg,sprite_frag:bg},Ce={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Nn={basic:{uniforms:jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:jt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:jt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new _e(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:jt([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:jt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:jt([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:jt([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:jt([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:jt([Ce.lights,Ce.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Nn.physical={uniforms:jt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Jr={r:0,b:0,g:0},Eg=new Et,jh=new nt;jh.set(-1,0,0,0,1,0,0,0,1);function Tg(n,e,t,i,s,r){const o=new _e(0);let a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const _=M.backgroundBlurriness>0;y=e.get(y,_)}return y}function g(M){let y=!1;const _=f(M);_===null?m(o,a):_&&_.isColor&&(m(_,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,y){const _=f(y);_&&(_.isCubeTexture||_.mapping===Fo)?(l===void 0&&(l=new D(new we(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:ys(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(jh),l.material.toneMapped=pt.getTransfer(_.colorSpace)!==St,(u!==_||h!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new D(new _i(2,2),new Xt({name:"BackgroundMaterial",uniforms:ys(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=pt.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(Jr,Zh(n)),t.buffers.color.setClear(Jr.r,Jr.g,Jr.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Ag(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(C,I,X,F,k){let N=!1;const B=h(C,F,X,I);r!==B&&(r=B,l(r.object)),N=f(C,F,X,k),N&&g(C,F,X,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(C,I,X,F),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,I,X,F){const k=F.wireframe===!0;let N=i[I.id];N===void 0&&(N={},i[I.id]=N);const B=C.isInstancedMesh===!0?C.id:0;let J=N[B];J===void 0&&(J={},N[B]=J);let O=J[X.id];O===void 0&&(O={},J[X.id]=O);let $=O[k];return $===void 0&&($=d(c()),O[k]=$),$}function d(C){const I=[],X=[],F=[];for(let k=0;k<t;k++)I[k]=0,X[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:F,object:C,attributes:{},index:null}}function f(C,I,X,F){const k=r.attributes,N=I.attributes;let B=0;const J=X.getAttributes();for(const O in J)if(J[O].location>=0){const j=k[O];let pe=N[O];if(pe===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),j===void 0||j.attribute!==pe||pe&&j.data!==pe.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function g(C,I,X,F){const k={},N=I.attributes;let B=0;const J=X.getAttributes();for(const O in J)if(J[O].location>=0){let j=N[O];j===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(j=C.instanceColor));const pe={};pe.attribute=j,j&&j.data&&(pe.data=j.data),k[O]=pe,B++}r.attributes=k,r.attributesNum=B,r.index=F}function x(){const C=r.newAttributes;for(let I=0,X=C.length;I<X;I++)C[I]=0}function m(C){p(C,0)}function p(C,I){const X=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;X[C]=1,F[C]===0&&(n.enableVertexAttribArray(C),F[C]=1),k[C]!==I&&(n.vertexAttribDivisor(C,I),k[C]=I)}function M(){const C=r.newAttributes,I=r.enabledAttributes;for(let X=0,F=I.length;X<F;X++)I[X]!==C[X]&&(n.disableVertexAttribArray(X),I[X]=0)}function y(C,I,X,F,k,N,B){B===!0?n.vertexAttribIPointer(C,I,X,k,N):n.vertexAttribPointer(C,I,X,F,k,N)}function _(C,I,X,F){x();const k=F.attributes,N=X.getAttributes(),B=I.defaultAttributeValues;for(const J in N){const O=N[J];if(O.location>=0){let $=k[J];if($===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),$!==void 0){const j=$.normalized,pe=$.itemSize,re=e.get($);if(re===void 0)continue;const Ge=re.buffer,me=re.type,oe=re.bytesPerElement,G=me===n.INT||me===n.UNSIGNED_INT||$.gpuType===Bc;if($.isInterleavedBufferAttribute){const Q=$.data,de=Q.stride,Ie=$.offset;if(Q.isInstancedInterleavedBuffer){for(let Me=0;Me<O.locationSize;Me++)p(O.location+Me,Q.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<O.locationSize;Me++)m(O.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Me=0;Me<O.locationSize;Me++)y(O.location+Me,pe/O.locationSize,me,j,de*oe,(Ie+pe/O.locationSize*Me)*oe,G)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<O.locationSize;Q++)p(O.location+Q,$.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<O.locationSize;Q++)m(O.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Q=0;Q<O.locationSize;Q++)y(O.location+Q,pe/O.locationSize,me,j,pe*oe,pe/O.locationSize*Q*oe,G)}}else if(B!==void 0){const j=B[J];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(O.location,j);break;case 3:n.vertexAttrib3fv(O.location,j);break;case 4:n.vertexAttrib4fv(O.location,j);break;default:n.vertexAttrib1fv(O.location,j)}}}}M()}function S(){E();for(const C in i){const I=i[C];for(const X in I){const F=I[X];for(const k in F){const N=F[k];for(const B in N)u(N[B].object),delete N[B];delete F[k]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const I=i[C.id];for(const X in I){const F=I[X];for(const k in F){const N=F[k];for(const B in N)u(N[B].object),delete N[B];delete F[k]}}delete i[C.id]}function A(C){for(const I in i){const X=i[I];for(const F in X){const k=X[F];if(k[C.id]===void 0)continue;const N=k[C.id];for(const B in N)u(N[B].object),delete N[B];delete k[C.id]}}}function v(C){for(const I in i){const X=i[I],F=C.isInstancedMesh===!0?C.id:0,k=X[F];if(k!==void 0){for(const N in k){const B=k[N];for(const J in B)u(B[J].object),delete B[J];delete k[N]}delete X[F],Object.keys(X).length===0&&delete i[I]}}}function E(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Rg(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==En&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const v=A===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==un&&A!==bn&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(tt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,maxSamples:S,samples:b}}function Pg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new hi,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:i,y=M*4;let _=p.clippingState||null;c.value=_,_=u(g,d,y,f);for(let S=0;S!==y;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const hs=4,Lg=6,Dg=20,Ig=256,zs=new ko,uu=new _e;let Ta=null,Aa=0,Ra=0,Ca=!1;const Ug=new L,Ei=new L;class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Ug}=r;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:An,format:En,colorSpace:bo,depthBuffer:!1},s=du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ng(r)),this._blurMaterial=Og(r,e,t),this._ggxMaterial=Fg(r,e,t)}return s}_compileMaterial(e){const t=new D(new xt,e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,i,s,r){const c=new ln(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(uu),h.toneMapping=zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new D(new we,new xs({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(uu),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const S=this._cubeSize;is(s,_*S,y>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ii||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;is(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-hs?i-g+hs:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,is(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,zs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,is(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,zs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],h=3*u*(s>this._lodMax-hs?s-this._lodMax+hs:0),d=4*(this._cubeSize-u);is(t,h,d,3*u,2*u),o.setRenderTarget(t),o.render(c,zs)}}function Ng(n){const e=[],t=[];let i=n;const s=n-hs+1+Lg;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,g=new Float32Array(f*d*h),x=new Float32Array(f*d*h);for(let p=0;p<h;p++){const M=p%3*2/3-1,y=p>2?0:-1,_=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];g.set(_,f*d*p);for(let S=0;S<d;S++){const b=u[S*2]*2-1,A=u[S*2+1]*2-1;p===0?Ei.set(1,A,b):p===1?Ei.set(-b,1,-A):p===2?Ei.set(-b,A,1):p===3?Ei.set(-1,A,-b):p===4?Ei.set(-b,-1,A):Ei.set(b,A,-1),Ei.toArray(x,(p*d+S)*f)}}const m=new xt;m.setAttribute("position",new gn(g,f)),m.setAttribute("outputDirection",new gn(x,f)),t.push(new D(m,null)),i>hs&&i--}return{lodMeshes:t,sizeLods:e}}function du(n,e,t){const i=new mn(n,e,t);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Fg(n,e,t){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Og(n,e,t){return new Xt({name:"SphericalGaussianBlur",defines:{SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fu(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function pu(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ed extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Oh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Jn});r.uniforms.tEquirect.value=t;const o=new D(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Kt),new Bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function zg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ko||f===Jo)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new ed(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,g=f===Ko||f===Jo,x=f===Ii||f===gs;if(g||x){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new hu(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||x&&M&&c(M)?(i===null&&(i=new hu(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Ko?d.mapping=Ii:f===Jo&&(d.mapping=gs),d}function c(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Bg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fs("WebGLRenderer: "+i+" extension not supported."),s}}}function kg(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const M=f.array;x=f.version;for(let y=0,_=M.length;y<_;y+=3){const S=M[y+0],b=M[y+1],A=M[y+2];d.push(S,b,b,A,A,S)}}else{const M=g.array;x=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const S=y+0,b=y+1,A=y+2;d.push(S,b,b,A,A,S)}}const m=new(g.count>=65535?Ih:Dh)(d,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Gg(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*o,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Vg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Hg(n,e,t){const i=new WeakMap,s=new Pt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let R=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var f=R;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let S=a.attributes.position.count*_,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*b*4*h),v=new Rh(A,S,b,h);v.type=bn,v.needsUpdate=!0;const E=_*4;for(let C=0;C<h;C++){const I=p[C],X=M[C],F=y[C],k=S*b*4*C;for(let N=0;N<I.count;N++){const B=N*E;g===!0&&(s.fromBufferAttribute(I,N),A[k+B+0]=s.x,A[k+B+1]=s.y,A[k+B+2]=s.z,A[k+B+3]=0),x===!0&&(s.fromBufferAttribute(X,N),A[k+B+4]=s.x,A[k+B+5]=s.y,A[k+B+6]=s.z,A[k+B+7]=0),m===!0&&(s.fromBufferAttribute(F,N),A[k+B+8]=s.x,A[k+B+9]=s.y,A[k+B+10]=s.z,A[k+B+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:v,size:new xe(S,b)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Wg(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Xg={[ph]:"LINEAR_TONE_MAPPING",[mh]:"REINHARD_TONE_MAPPING",[gh]:"CINEON_TONE_MAPPING",[xh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function qg(n,e,t,i,s,r){const o=new mn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new xt;l.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const u=new Pp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new D(l,u),d=new ko(-1,1,1,-1,0,1);let f=null,g=null,x=!1,m,p=null,M=[],y=!1;this.setSize=function(_,S){o.setSize(_,S),a!==null&&a.setSize(_,S),c!==null&&c.setSize(_,S);for(let b=0;b<M.length;b++){const A=M[b];A.setSize&&A.setSize(_,S)}},this.setEffects=function(_){M=_,y=M.length>0&&M[0].isRenderPass===!0;const S=o.width,b=o.height;M.length>0&&a===null&&(a=new mn(S,b,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new mn(S,b,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const v=M[A];v.setSize&&v.setSize(S,b)}},this.begin=function(_,S){if(x||_.toneMapping===zn&&M.length===0)return!1;if(p=S,S!==null){const b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return y===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=zn,!0},this.hasRenderPass=function(){return y},this.end=function(_,S){_.toneMapping=m,x=!0;let b=o,A=a;for(let v=0;v<M.length;v++){const E=M[v];E.enabled!==!1&&(E.render(_,A,b,S),E.needsSwap!==!1&&(b=A,A=A===a?c:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,u.defines={},pt.getTransfer(f)===St&&(u.defines.SRGB_TRANSFER="");const v=Xg[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(p),_.render(h,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const td=new Jt,Rc=new vs(1,1),nd=new Rh,id=new Cf,sd=new Oh,mu=[],gu=[],xu=new Float32Array(16),vu=new Float32Array(9),_u=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vo(n,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function Jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),Gt(t,i)}}function Qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,i))return;vu.set(i),n.uniformMatrix3fv(this.addr,!1,vu),Gt(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),Gt(t,i)}}function ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function cx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rc.compareFunction=t.isReversedDepthBuffer()?qc:Xc,r=Rc):r=td,t.setTexture2D(e||r,s)}function lx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||id,s)}function ux(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sd,s)}function hx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nd,s)}function dx(n){switch(n){case 5126:return Yg;case 35664:return $g;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return jg;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return hx}}function fx(n,e){n.uniform1fv(this.addr,e)}function px(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function mx(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function gx(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function xx(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vx(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _x(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mx(n,e){n.uniform1iv(this.addr,e)}function yx(n,e){n.uniform2iv(this.addr,e)}function Sx(n,e){n.uniform3iv(this.addr,e)}function wx(n,e){n.uniform4iv(this.addr,e)}function bx(n,e){n.uniform1uiv(this.addr,e)}function Ex(n,e){n.uniform2uiv(this.addr,e)}function Tx(n,e){n.uniform3uiv(this.addr,e)}function Ax(n,e){n.uniform4uiv(this.addr,e)}function Rx(n,e,t){const i=this.cache,s=e.length,r=Vo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Rc:o=td;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Cx(n,e,t){const i=this.cache,s=e.length,r=Vo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||id,r[o])}function Px(n,e,t){const i=this.cache,s=e.length,r=Vo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sd,r[o])}function Lx(n,e,t){const i=this.cache,s=e.length,r=Vo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nd,r[o])}function Dx(n){switch(n){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return vx;case 35676:return _x;case 5124:case 35670:return Mx;case 35667:case 35671:return yx;case 35668:case 35672:return Sx;case 35669:case 35673:return wx;case 5125:return bx;case 36294:return Ex;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ix{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dx(t.type)}}class Ux{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Mu(n,e){n.seq.push(e),n.map[e.id]=e}function Fx(n,e,t){const i=n.name,s=i.length;for(Pa.lastIndex=0;;){const r=Pa.exec(i),o=Pa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mu(t,l===void 0?new Ix(a,n,e):new Ux(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Nx(a),Mu(t,h)),t=h}}}class xo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Fx(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function yu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ox=37297;let zx=0;function Bx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Su=new nt;function kx(n){pt._getMatrix(Su,pt.workingColorSpace,n);const e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Eo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bx(n.getShaderSource(e),a)}else return r}function Gx(n,e){const t=kx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Vx={[ph]:"Linear",[mh]:"Reinhard",[gh]:"Cineon",[xh]:"ACESFilmic",[_h]:"AgX",[zc]:"Neutral",[vh]:"Custom"};function Hx(n,e){const t=Vx[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new L;function Wx(){pt.getLuminanceCoefficients(Qr);const n=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function qx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qs(n){return n!==""}function bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace($x,Kx)}const Zx=new Map;function Kx(n,e){let t=at[e];if(t===void 0){const i=Zx.get(e);if(i!==void 0)t=at[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cc(t)}const Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace(Jx,Qx)}function Qx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const jx={[er]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function ev(n){return jx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tv={[Ii]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function nv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":tv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const iv={[gs]:"ENVMAP_MODE_REFRACTION"};function sv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rv={[fh]:"ENVMAP_BLENDING_MULTIPLY",[of]:"ENVMAP_BLENDING_MIX",[af]:"ENVMAP_BLENDING_ADD"};function ov(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rv[n.combine]||"ENVMAP_BLENDING_NONE"}function av(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ev(t),l=nv(t),u=sv(t),h=ov(t),d=av(t),f=Xx(t),g=qx(r),x=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?at.tonemapping_pars_fragment:"",t.toneMapping!==zn?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Gx("linearToOutputTexel",t.outputColorSpace),Wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Cc(o),o=bu(o,t),o=Eu(o,t),a=Cc(a),a=bu(a,t),a=Eu(a,t),o=Tu(o),a=Tu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,_=M+p+a,S=yu(s,s.VERTEX_SHADER,y),b=yu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(b)||"",k=I.trim(),N=X.trim(),B=F.trim();let J=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,b);else{const $=wu(s,S,"vertex"),j=wu(s,b,"fragment");gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+$+`
`+j)}else k!==""?tt("WebGLProgram: Program Info Log:",k):(N===""||B==="")&&(O=!1);O&&(C.diagnostics={runnable:J,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(S),s.deleteShader(b),v=new xo(s,x),E=Yx(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Ox)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}let lv=0;class uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hv(e),t.set(e,i)),i}}class hv{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}}function dv(n){return n===Ui||n===So||n===wo}function fv(n,e,t,i,s,r){const o=new Ch,a=new uv,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,R,C,I,X){const F=C.fog,k=I.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||N,B),O=J&&J.mapping===Fo?J.image.height:null,$=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pe=j!==void 0?j.length:0;let re=0;k.morphAttributes.position!==void 0&&(re=1),k.morphAttributes.normal!==void 0&&(re=2),k.morphAttributes.color!==void 0&&(re=3);let Ge,me,oe,G;if($){const At=Nn[$];Ge=At.vertexShader,me=At.fragmentShader}else{Ge=v.vertexShader,me=v.fragmentShader;const At=a.getVertexShaderStage(v),Mt=a.getFragmentShaderStage(v);a.update(v,At,Mt),oe=At.id,G=Mt.id}const Q=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,Me=I.isBatchedMesh===!0,Oe=!!v.map,lt=!!v.matcap,ae=!!J,q=!!v.aoMap,se=!!v.lightMap,ue=!!v.bumpMap&&v.wireframe===!1,ge=!!v.normalMap,Ke=!!v.displacementMap,He=!!v.emissiveMap,Qe=!!v.metalnessMap,et=!!v.roughnessMap,z=v.anisotropy>0,_t=v.clearcoat>0,ht=v.dispersion>0,P=v.retroreflectivity>0,w=v.iridescence>0,Y=v.sheen>0,ee=v.transmission>0,ne=z&&!!v.anisotropyMap,ve=_t&&!!v.clearcoatMap,ye=_t&&!!v.clearcoatNormalMap,ie=_t&&!!v.clearcoatRoughnessMap,le=w&&!!v.iridescenceMap,be=w&&!!v.iridescenceThicknessMap,qe=Y&&!!v.sheenColorMap,Re=Y&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,Ye=!!v.specularColorMap,Je=!!v.specularIntensityMap,st=ee&&!!v.transmissionMap,W=ee&&!!v.thicknessMap,Te=!!v.gradientMap,ce=!!v.alphaMap,Ae=v.alphaTest>0,De=!!v.alphaHash,fe=!!v.extensions;let $e=zn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&($e=n.toneMapping);const Ve={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:me,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Me,batchingColor:Me&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:lt,envMap:ae,envMapMode:ae&&J.mapping,envMapCubeUVHeight:O,aoMap:q,lightMap:se,bumpMap:ue,normalMap:ge,displacementMap:Ke,emissiveMap:He,normalMapObjectSpace:ge&&v.normalMapType===uf,normalMapTangentSpace:ge&&v.normalMapType===wc,packedNormalMap:ge&&v.normalMapType===wc&&dv(v.normalMap.format),metalnessMap:Qe,roughnessMap:et,anisotropy:z,anisotropyMap:ne,clearcoat:_t,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:ie,dispersion:ht,retroreflection:P,iridescence:w,iridescenceMap:le,iridescenceThicknessMap:be,sheen:Y,sheenColorMap:qe,sheenRoughnessMap:Re,specularMap:Ee,specularColorMap:Ye,specularIntensityMap:Je,transmission:ee,transmissionMap:st,thicknessMap:W,gradientMap:Te,opaque:v.transparent===!1&&v.blending===tr&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:De,combine:v.combine,mapUv:Oe&&g(v.map.channel),aoMapUv:q&&g(v.aoMap.channel),lightMapUv:se&&g(v.lightMap.channel),bumpMapUv:ue&&g(v.bumpMap.channel),normalMapUv:ge&&g(v.normalMap.channel),displacementMapUv:Ke&&g(v.displacementMap.channel),emissiveMapUv:He&&g(v.emissiveMap.channel),metalnessMapUv:Qe&&g(v.metalnessMap.channel),roughnessMapUv:et&&g(v.roughnessMap.channel),anisotropyMapUv:ne&&g(v.anisotropyMap.channel),clearcoatMapUv:ve&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(v.sheenRoughnessMap.channel),specularMapUv:Ee&&g(v.specularMap.channel),specularColorMapUv:Ye&&g(v.specularColorMap.channel),specularIntensityMapUv:Je&&g(v.specularIntensityMap.channel),transmissionMapUv:st&&g(v.transmissionMap.channel),thicknessMapUv:W&&g(v.thicknessMap.channel),alphaMapUv:ce&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ge||z),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Oe||ce),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:re,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&pt.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:He&&v.emissiveMap.isVideoTexture===!0&&pt.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(E,v),M(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){const E=f[v.type];let R;if(E){const C=Nn[E];R=Ap.clone(C.uniforms)}else R=v.uniforms;return R}function _(v,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new cv(n,E,v,s),l.push(R),u.set(E,R)),R}function S(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:_,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:A}}function pv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function mv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ru(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},n[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function c(d,f,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);const y=a(d,f,g,x,m,p);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(d,f,g,x,m,p){const M=a(d,f,g,x,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||mv),i.length>1&&i.sort(f||Ru),s.length>1&&s.sort(f||Ru)}function h(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function gv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Cu,n.set(i,[o])):s>=r.length?(o=new Cu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new _e};break;case"SpotLight":t={position:new L,direction:new L,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function vv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _v=0;function Mv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yv(n){const e=new xv,t=vv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new Et,o=new Et;function a(l){let u=0,h=0,d=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,y=0,_=0,S=0,b=0,A=0,v=0,E=0,R=0;l.sort(Mv);for(let I=0,X=l.length;I<X;I++){const F=l[I],k=F.color,N=F.intensity,B=F.distance;let J=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ui?J=F.shadow.map.texture:J=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=k.r*N,h+=k.g*N,d+=k.b*N;else if(F.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(F.sh.coefficients[O],N);R++}else if(F.isSunLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=J;const pe=$.getViewportCount();for(let re=0;re<pe;re++)i.sunShadowMatrix[x+re]=$.getMatrix(re),i.sunShadowCascade[x+re]=$._cascadeData[re];x+=pe,g++}i.sun[f]=O,f++}else if(F.isDirectionalLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=F.shadow.matrix,S++}i.directional[m]=O,m++}else if(F.isSpotLight){const O=e.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(k).multiplyScalar(N),O.distance=B,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,i.spot[M]=O;const $=F.shadow;if(F.map&&(i.spotLightMap[v]=F.map,v++,$.updateMatrices(F),F.castShadow&&E++),i.spotLightMatrix[M]=$.matrix,F.castShadow){const j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=J,A++}M++}else if(F.isRectAreaLight){const O=e.get(F);O.color.copy(k).multiplyScalar(N),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=O,y++}else if(F.isPointLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=F.shadow.matrix,b++}i.point[p]=O,p++}else if(F.isHemisphereLight){const O=e.get(F);O.skyColor.copy(F.color).multiplyScalar(N),O.groundColor.copy(F.groundColor).multiplyScalar(N),i.hemi[_]=O,_++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==M||C.rectAreaLength!==y||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==A||C.numSpotMaps!==v||C.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=y,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-E,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=M,C.rectAreaLength=y,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=A,C.numSpotMaps=v,C.numLightProbes=R,i.version=_v++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=0;const p=u.matrixWorldInverse;for(let M=0,y=l.length;M<y;M++){const _=l[M];if(_.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),h++}else if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(_.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Pu(n){const e=new yv(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Sv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Pu(n),e.set(s,[a])):r>=o.length?(a=new Pu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
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
}`,Ev=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Tv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Lu=new Et,Bs=new L,La=new L;function Av(n,e,t){let i=new Kc;const s=new xe,r=new xe,o=new Pt,a=new Dp,c=new Ip,l={},u=t.maxTextureSize,h={[gi]:tn,[tn]:gi,[en]:en},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:wv,fragmentShader:bv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new D(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let p=this.type;this.render=function(b,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===kd&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Jn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const X=p!==this.type;X&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=b.length;F<k;F++){const N=b[F],B=N.shadow;if(B===void 0){tt("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();s.multiply(J),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,B.mapSize.y=r.y));const O=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ks){if(N.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new mn(s.x,s.y,{format:Ui,type:An,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new vs(s.x,s.y,bn),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=jn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt}else N.isPointLight?(B.map=new ed(s.x),B.map.depthTexture=new $f(s.x,Tn)):(B.map=new mn(s.x,s.y),B.map.depthTexture=new vs(s.x,s.y,Tn)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=jn,this.type===er?(B.map.depthTexture.compareFunction=O?qc:Xc,B.map.depthTexture.minFilter=Kt,B.map.depthTexture.magFilter=Kt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();N.isPointLight!==!0&&B.updateMatrices(N,v);for(let j=0;j<$;j++){const pe=B.getCamera(j);if(N.isPointLight){const re=B.camera,Ge=B.matrix,me=N.distance||re.far;me!==re.far&&(re.far=me,re.updateProjectionMatrix()),Bs.setFromMatrixPosition(N.matrixWorld),re.position.copy(Bs),La.copy(re.position),La.add(Ev[j]),re.up.copy(Tv[j]),re.lookAt(La),re.updateMatrixWorld(),Ge.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Lu.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Lu,re.coordinateSystem,re.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,j),n.clear();else{j===0&&(n.setRenderTarget(B.map),n.clear());const re=B.getViewport(j);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),I.viewport(o)}i=B.getFrustum(j),_(A,v,pe,N,this.type)}B.isPointLightShadow!==!0&&this.type===Ks&&M(B,v),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,R,C)};function M(b,A){const v=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new mn(s.x,s.y,{format:Ui,type:An}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,v,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,v,f,x,null)}function y(b,A,v,E){let R=null;const C=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)R=C;else if(R=v.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=R.uuid,X=A.uuid;let F=l[I];F===void 0&&(F={},l[I]=F);let k=F[X];k===void 0&&(k=R.clone(),F[X]=k,A.addEventListener("dispose",S)),R=k}if(R.visible=A.visible,R.wireframe=A.wireframe,E===Ks?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:h[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=n.properties.get(R);I.light=v}return R}function _(b,A,v,E,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Ks)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const X=e.update(b),F=b.material;if(Array.isArray(F)){const k=X.groups;for(let N=0,B=k.length;N<B;N++){const J=k[N],O=F[J.materialIndex];if(O&&O.visible){const $=y(b,O,E,R);b.onBeforeShadow(n,b,A,v,X,$,J),n.renderBufferDirect(v,null,X,$,b,J),b.onAfterShadow(n,b,A,v,X,$,J)}}}else if(F.visible){const k=y(b,F,E,R);b.onBeforeShadow(n,b,A,v,X,k,null),n.renderBufferDirect(v,null,X,k,b,null),b.onAfterShadow(n,b,A,v,X,k,null)}}const I=b.children;for(let X=0,F=I.length;X<F;X++)_(I[X],A,v,E,R)}function S(b){b.target.removeEventListener("dispose",S);for(const v in l){const E=l[v],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Rv(n,e){function t(){let W=!1;const Te=new Pt;let ce=null;const Ae=new Pt(0,0,0,0);return{setMask:function(De){ce!==De&&!W&&(n.colorMask(De,De,De,De),ce=De)},setLocked:function(De){W=De},setClear:function(De,fe,$e,Ve,At){At===!0&&(De*=Ve,fe*=Ve,$e*=Ve),Te.set(De,fe,$e,Ve),Ae.equals(Te)===!1&&(n.clearColor(De,fe,$e,Ve),Ae.copy(Te))},reset:function(){W=!1,ce=null,Ae.set(-1,0,0,0)}}}function i(){let W=!1,Te=!1,ce=null,Ae=null,De=null;return{setReversed:function(fe){if(Te!==fe){const $e=e.get("EXT_clip_control");fe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Te=fe;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Te},setTest:function(fe){fe?Q(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(fe){ce!==fe&&!W&&(n.depthMask(fe),ce=fe)},setFunc:function(fe){if(Te&&(fe=Sf[fe]),Ae!==fe){switch(fe){case za:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=fe}},setLocked:function(fe){W=fe},setClear:function(fe){De!==fe&&(De=fe,Te&&(fe=1-fe),n.clearDepth(fe))},reset:function(){W=!1,ce=null,Ae=null,De=null,Te=!1}}}function s(){let W=!1,Te=null,ce=null,Ae=null,De=null,fe=null,$e=null,Ve=null,At=null;return{setTest:function(Mt){W||(Mt?Q(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Mt){Te!==Mt&&!W&&(n.stencilMask(Mt),Te=Mt)},setFunc:function(Mt,xn,Ln){(ce!==Mt||Ae!==xn||De!==Ln)&&(n.stencilFunc(Mt,xn,Ln),ce=Mt,Ae=xn,De=Ln)},setOp:function(Mt,xn,Ln){(fe!==Mt||$e!==xn||Ve!==Ln)&&(n.stencilOp(Mt,xn,Ln),fe=Mt,$e=xn,Ve=Ln)},setLocked:function(Mt){W=Mt},setClear:function(Mt){At!==Mt&&(n.clearStencil(Mt),At=Mt)},reset:function(){W=!1,Te=null,ce=null,Ae=null,De=null,fe=null,$e=null,Ve=null,At=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,y=null,_=null,S=null,b=null,A=null,v=new _e(0,0,0),E=0,R=!1,C=null,I=null,X=null,F=null,k=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=J>=2);let $=null,j={};const pe=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Ge=new Pt().fromArray(pe),me=new Pt().fromArray(re);function oe(W,Te,ce,Ae){const De=new Uint8Array(4),fe=n.createTexture();n.bindTexture(W,fe),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ce;$e++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Te+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return fe}const G={};G[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(ur),ue(!1),ge(El),Q(n.CULL_FACE),q(Jn);function Q(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function de(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Ie(W,Te){return d[W]!==Te?(n.bindFramebuffer(W,Te),d[W]=Te,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Te),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Me(W,Te){let ce=g,Ae=!1;if(W){ce=f.get(Te),ce===void 0&&(ce=[],f.set(Te,ce));const De=W.textures;if(ce.length!==De.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,$e=De.length;fe<$e;fe++)ce[fe]=n.COLOR_ATTACHMENT0+fe;ce.length=De.length,Ae=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ce)}function Oe(W){return x!==W?(n.useProgram(W),x=W,!0):!1}const lt={[ls]:n.FUNC_ADD,[Vd]:n.FUNC_SUBTRACT,[Hd]:n.FUNC_REVERSE_SUBTRACT};lt[Wd]=n.MIN,lt[Xd]=n.MAX;const ae={[qd]:n.ZERO,[Yd]:n.ONE,[$d]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[ef]:n.SRC_ALPHA_SATURATE,[Qd]:n.DST_COLOR,[Kd]:n.DST_ALPHA,[Zd]:n.ONE_MINUS_SRC_COLOR,[dh]:n.ONE_MINUS_SRC_ALPHA,[jd]:n.ONE_MINUS_DST_COLOR,[Jd]:n.ONE_MINUS_DST_ALPHA,[tf]:n.CONSTANT_COLOR,[nf]:n.ONE_MINUS_CONSTANT_COLOR,[sf]:n.CONSTANT_ALPHA,[rf]:n.ONE_MINUS_CONSTANT_ALPHA};function q(W,Te,ce,Ae,De,fe,$e,Ve,At,Mt){if(W===Jn){m===!0&&(de(n.BLEND),m=!1);return}if(m===!1&&(Q(n.BLEND),m=!0),W!==Gd){if(W!==p||Mt!==R){if((M!==ls||S!==ls)&&(n.blendEquation(n.FUNC_ADD),M=ls,S=ls),Mt)switch(W){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lr:n.blendFunc(n.ONE,n.ONE);break;case Tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",W);break}else switch(W){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tl:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",W);break}y=null,_=null,b=null,A=null,v.set(0,0,0),E=0,p=W,R=Mt}return}De=De||Te,fe=fe||ce,$e=$e||Ae,(Te!==M||De!==S)&&(n.blendEquationSeparate(lt[Te],lt[De]),M=Te,S=De),(ce!==y||Ae!==_||fe!==b||$e!==A)&&(n.blendFuncSeparate(ae[ce],ae[Ae],ae[fe],ae[$e]),y=ce,_=Ae,b=fe,A=$e),(Ve.equals(v)===!1||At!==E)&&(n.blendColor(Ve.r,Ve.g,Ve.b,At),v.copy(Ve),E=At),p=W,R=!1}function se(W,Te){W.side===en?de(n.CULL_FACE):Q(n.CULL_FACE);let ce=W.side===tn;Te&&(ce=!ce),ue(ce),W.blending===tr&&W.transparent===!1?q(Jn):q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const Ae=W.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),He(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(W){C!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),C=W)}function ge(W){W!==zd?(Q(n.CULL_FACE),W!==I&&(W===El?n.cullFace(n.BACK):W===Bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),I=W}function Ke(W){W!==X&&(B&&n.lineWidth(W),X=W)}function He(W,Te,ce){W?(Q(n.POLYGON_OFFSET_FILL),(F!==Te||k!==ce)&&(F=Te,k=ce,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,ce))):de(n.POLYGON_OFFSET_FILL)}function Qe(W){W?Q(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function et(W){W===void 0&&(W=n.TEXTURE0+N-1),$!==W&&(n.activeTexture(W),$=W)}function z(W,Te,ce){ce===void 0&&($===null?ce=n.TEXTURE0+N-1:ce=$);let Ae=j[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[ce]=Ae),(Ae.type!==W||Ae.texture!==Te)&&($!==ce&&(n.activeTexture(ce),$=ce),n.bindTexture(W,Te||G[W]),Ae.type=W,Ae.texture=Te)}function _t(){const W=j[$];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ht(){try{n.compressedTexImage2D(...arguments)}catch(W){gt("WebGLState:",W)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(W){gt("WebGLState:",W)}}function w(){try{n.texSubImage2D(...arguments)}catch(W){gt("WebGLState:",W)}}function Y(){try{n.texSubImage3D(...arguments)}catch(W){gt("WebGLState:",W)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(W){gt("WebGLState:",W)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(W){gt("WebGLState:",W)}}function ve(){try{n.texStorage2D(...arguments)}catch(W){gt("WebGLState:",W)}}function ye(){try{n.texStorage3D(...arguments)}catch(W){gt("WebGLState:",W)}}function ie(){try{n.texImage2D(...arguments)}catch(W){gt("WebGLState:",W)}}function le(){try{n.texImage3D(...arguments)}catch(W){gt("WebGLState:",W)}}function be(W){return h[W]!==void 0?h[W]:n.getParameter(W)}function qe(W,Te){h[W]!==Te&&(n.pixelStorei(W,Te),h[W]=Te)}function Re(W){Ge.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ge.copy(W))}function Ee(W){me.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),me.copy(W))}function Ye(W,Te){let ce=l.get(Te);ce===void 0&&(ce=new WeakMap,l.set(Te,ce));let Ae=ce.get(W);Ae===void 0&&(Ae=n.getUniformBlockIndex(Te,W.name),ce.set(W,Ae))}function Je(W,Te){const Ae=l.get(Te).get(W);c.get(Te)!==Ae&&(n.uniformBlockBinding(Te,Ae,W.__bindingPointIndex),c.set(Te,Ae))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},$=null,j={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,y=null,_=null,S=null,b=null,A=null,v=new _e(0,0,0),E=0,R=!1,C=null,I=null,X=null,F=null,k=null,Ge.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:de,bindFramebuffer:Ie,drawBuffers:Me,useProgram:Oe,setBlending:q,setMaterial:se,setFlipSided:ue,setCullFace:ge,setLineWidth:Ke,setPolygonOffset:He,setScissorTest:Qe,activeTexture:et,bindTexture:z,unbindTexture:_t,compressedTexImage2D:ht,compressedTexImage3D:P,texImage2D:ie,texImage3D:le,pixelStorei:qe,getParameter:be,updateUBOMapping:Ye,uniformBlockBinding:Je,texStorage2D:ve,texStorage3D:ye,texSubImage2D:w,texSubImage3D:Y,compressedTexSubImage2D:ee,compressedTexSubImage3D:ne,scissor:Re,viewport:Ee,reset:st}}function Cv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,w){return g?new OffscreenCanvas(P,w):To("canvas")}function m(P,w,Y){let ee=1;const ne=ht(P);if((ne.width>Y||ne.height>Y)&&(ee=Y/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ve=Math.floor(ee*ne.width),ye=Math.floor(ee*ne.height);d===void 0&&(d=x(ve,ye));const ie=w?x(ve,ye):d;return ie.width=ve,ie.height=ye,ie.getContext("2d").drawImage(P,0,0,ve,ye),tt("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ve+"x"+ye+")."),ie}else return"data"in P&&tt("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function p(P){return P.generateMipmaps}function M(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(P,w,Y,ee,ne,ve=!1){if(P!==null){if(n[P]!==void 0)return n[P];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye;ee&&(ye=e.get("EXT_texture_norm16"),ye||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=w;if(w===n.RED&&(Y===n.FLOAT&&(ie=n.R32F),Y===n.HALF_FLOAT&&(ie=n.R16F),Y===n.UNSIGNED_BYTE&&(ie=n.R8),Y===n.UNSIGNED_SHORT&&ye&&(ie=ye.R16_EXT),Y===n.SHORT&&ye&&(ie=ye.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.R8UI),Y===n.UNSIGNED_SHORT&&(ie=n.R16UI),Y===n.UNSIGNED_INT&&(ie=n.R32UI),Y===n.BYTE&&(ie=n.R8I),Y===n.SHORT&&(ie=n.R16I),Y===n.INT&&(ie=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(ie=n.RG32F),Y===n.HALF_FLOAT&&(ie=n.RG16F),Y===n.UNSIGNED_BYTE&&(ie=n.RG8),Y===n.UNSIGNED_SHORT&&ye&&(ie=ye.RG16_EXT),Y===n.SHORT&&ye&&(ie=ye.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RG16UI),Y===n.UNSIGNED_INT&&(ie=n.RG32UI),Y===n.BYTE&&(ie=n.RG8I),Y===n.SHORT&&(ie=n.RG16I),Y===n.INT&&(ie=n.RG32I)),w===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),Y===n.UNSIGNED_INT&&(ie=n.RGB32UI),Y===n.BYTE&&(ie=n.RGB8I),Y===n.SHORT&&(ie=n.RGB16I),Y===n.INT&&(ie=n.RGB32I)),w===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ie=n.RGBA32UI),Y===n.BYTE&&(ie=n.RGBA8I),Y===n.SHORT&&(ie=n.RGBA16I),Y===n.INT&&(ie=n.RGBA32I)),w===n.RGB&&(Y===n.UNSIGNED_SHORT&&ye&&(ie=ye.RGB16_EXT),Y===n.SHORT&&ye&&(ie=ye.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),w===n.RGBA){const le=ve?Eo:pt.getTransfer(ne);Y===n.FLOAT&&(ie=n.RGBA32F),Y===n.HALF_FLOAT&&(ie=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ie=le===St?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&ye&&(ie=ye.RGBA16_EXT),Y===n.SHORT&&ye&&(ie=ye.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(P,w){let Y;return P?w===null||w===Tn||w===dr?Y=n.DEPTH24_STENCIL8:w===bn?Y=n.DEPTH32F_STENCIL8:w===hr&&(Y=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Tn||w===dr?Y=n.DEPTH_COMPONENT24:w===bn?Y=n.DEPTH_COMPONENT32F:w===hr&&(Y=n.DEPTH_COMPONENT16),Y}function b(P,w){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Bt&&P.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){const w=P.target;w.removeEventListener("dispose",A),E(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function v(P){const w=P.target;w.removeEventListener("dispose",v),C(w)}function E(P){const w=i.get(P);if(w.__webglInit===void 0)return;const Y=P.source,ee=f.get(Y);if(ee){const ne=ee[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(ee).length===0&&f.delete(Y)}i.remove(P)}function R(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const Y=P.source,ee=f.get(Y);delete ee[w.__cacheKey],o.memory.textures--}function C(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ne=0;ne<w.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=P.textures;for(let ee=0,ne=Y.length;ee<ne;ee++){const ve=i.get(Y[ee]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(Y[ee])}i.remove(P)}let I=0;function X(){I=0}function F(){return I}function k(P){I=P}function N(){const P=I;return P>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function B(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function J(P,w){const Y=i.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const ee=P.image;if(ee===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{de(Y,P,w);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function O(P,w){const Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){de(Y,P,w);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function $(P,w){const Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){de(Y,P,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function j(P,w){const Y=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){Ie(Y,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const pe={[Xa]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},re={[Bt]:n.NEAREST,[cf]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Ge={[df]:n.NEVER,[xf]:n.ALWAYS,[ff]:n.LESS,[Xc]:n.LEQUAL,[pf]:n.EQUAL,[qc]:n.GEQUAL,[mf]:n.GREATER,[gf]:n.NOTEQUAL};function me(P,w){if(w.type===bn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kt||w.magFilter===Qo||w.magFilter===Tr||w.magFilter===Ci||w.minFilter===Kt||w.minFilter===Qo||w.minFilter===Tr||w.minFilter===Ci)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,pe[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,pe[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,pe[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Bt||w.minFilter!==Tr&&w.minFilter!==Ci||w.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function oe(P,w){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));const ee=w.source;let ne=f.get(ee);ne===void 0&&(ne={},f.set(ee,ne));const ve=B(w);if(ve!==P.__cacheKey){ne[ve]===void 0&&(ne[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[ve].usedTimes++;const ye=ne[P.__cacheKey];ye!==void 0&&(ne[P.__cacheKey].usedTimes--,ye.usedTimes===0&&R(w)),P.__cacheKey=ve,P.__webglTexture=ne[ve].texture}return Y}function G(P,w,Y){return Math.floor(Math.floor(P/Y)/w)}function Q(P,w,Y,ee){const ve=P.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Y,ee,w.data);else{ve.sort((qe,Re)=>qe.start-Re.start);let ye=0;for(let qe=1;qe<ve.length;qe++){const Re=ve[ye],Ee=ve[qe],Ye=Re.start+Re.count,Je=G(Ee.start,w.width,4),st=G(Re.start,w.width,4);Ee.start<=Ye+1&&Je===st&&G(Ee.start+Ee.count-1,w.width,4)===Je?Re.count=Math.max(Re.count,Ee.start+Ee.count-Re.start):(++ye,ve[ye]=Ee)}ve.length=ye+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let qe=0,Re=ve.length;qe<Re;qe++){const Ee=ve[qe],Ye=Math.floor(Ee.start/4),Je=Math.ceil(Ee.count/4),st=Ye%w.width,W=Math.floor(Ye/w.width),Te=Je,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,st,W,Te,ce,Y,ee,w.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function de(P,w,Y){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);const ne=oe(P,w),ve=w.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+Y);const ye=i.get(ve);if(ve.version!==ye.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ce=pt.getPrimaries(pt.workingColorSpace),Ae=w.colorSpace===fi?null:pt.getPrimaries(w.colorSpace),De=w.colorSpace===fi||ce===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let le=m(w.image,!1,s.maxTextureSize);le=_t(w,le);const be=r.convert(w.format,w.colorSpace),qe=r.convert(w.type);let Re=_(w.internalFormat,be,qe,w.normalized,w.colorSpace,w.isVideoTexture);me(ee,w);let Ee;const Ye=w.mipmaps,Je=w.isVideoTexture!==!0,st=ye.__version===void 0||ne===!0,W=ve.dataReady,Te=b(w,le);if(w.isDepthTexture)Re=S(w.format===Pi,w.type),st&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Re,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Re,le.width,le.height,0,be,qe,null));else if(w.isDataTexture)if(Ye.length>0){Je&&st&&t.texStorage2D(n.TEXTURE_2D,Te,Re,Ye[0].width,Ye[0].height);for(let ce=0,Ae=Ye.length;ce<Ae;ce++)Ee=Ye[ce],Je?W&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,be,qe,Ee.data):t.texImage2D(n.TEXTURE_2D,ce,Re,Ee.width,Ee.height,0,be,qe,Ee.data);w.generateMipmaps=!1}else Je?(st&&t.texStorage2D(n.TEXTURE_2D,Te,Re,le.width,le.height),W&&Q(w,le,be,qe)):t.texImage2D(n.TEXTURE_2D,0,Re,le.width,le.height,0,be,qe,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Re,Ye[0].width,Ye[0].height,le.depth);for(let ce=0,Ae=Ye.length;ce<Ae;ce++)if(Ee=Ye[ce],w.format!==En)if(be!==null)if(Je){if(W)if(w.layerUpdates.size>0){const De=lu(Ee.width,Ee.height,w.format,w.type);for(const fe of w.layerUpdates){const $e=Ee.data.subarray(fe*De/Ee.data.BYTES_PER_ELEMENT,(fe+1)*De/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,fe,Ee.width,Ee.height,1,be,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,le.depth,be,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Re,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,le.depth,be,qe,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Re,Ee.width,Ee.height,le.depth,0,be,qe,Ee.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Je&&st&&t.texStorage2D(n.TEXTURE_2D,Te,Re,Ye[0].width,Ye[0].height);for(let ce=0,Ae=Ye.length;ce<Ae;ce++)Ee=Ye[ce],w.format!==En?be!==null?Je?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,be,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Re,Ee.width,Ee.height,0,Ee.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?W&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,be,qe,Ee.data):t.texImage2D(n.TEXTURE_2D,ce,Re,Ee.width,Ee.height,0,be,qe,Ee.data)}else if(w.isDataArrayTexture)if(Je){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Re,le.width,le.height,le.depth),W)if(w.layerUpdates.size>0){const ce=lu(le.width,le.height,w.format,w.type);for(const Ae of w.layerUpdates){const De=le.data.subarray(Ae*ce/le.data.BYTES_PER_ELEMENT,(Ae+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,le.width,le.height,1,be,qe,De)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,qe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,be,qe,le.data);else if(w.isData3DTexture)Je?(st&&t.texStorage3D(n.TEXTURE_3D,Te,Re,le.width,le.height,le.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,qe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,be,qe,le.data);else if(w.isFramebufferTexture){if(st)if(Je)t.texStorage2D(n.TEXTURE_2D,Te,Re,le.width,le.height);else{let ce=le.width,Ae=le.height;for(let De=0;De<Te;De++)t.texImage2D(n.TEXTURE_2D,De,Re,ce,Ae,0,be,qe,null),ce>>=1,Ae>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),le.parentNode!==ce){ce.appendChild(le),h.add(w),ce.onpaint=Ae=>{const De=Ae.changedElements;for(const fe of h)De.includes(fe.image)&&(fe.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{const De=n.RGBA,fe=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,De,fe,$e,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(Je&&st){const ce=ht(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Te,Re,ce.width,ce.height)}for(let ce=0,Ae=Ye.length;ce<Ae;ce++)Ee=Ye[ce],Je?W&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,be,qe,Ee):t.texImage2D(n.TEXTURE_2D,ce,Re,be,qe,Ee);w.generateMipmaps=!1}else if(Je){if(st){const ce=ht(le);t.texStorage2D(n.TEXTURE_2D,Te,Re,ce.width,ce.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,qe,le)}else t.texImage2D(n.TEXTURE_2D,0,Re,be,qe,le);p(w)&&M(ee),ye.__version=ve.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ie(P,w,Y){if(w.image.length!==6)return;const ee=oe(P,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);const ve=i.get(ne);if(ne.version!==ve.__version||ee===!0){t.activeTexture(n.TEXTURE0+Y);const ye=pt.getPrimaries(pt.workingColorSpace),ie=w.colorSpace===fi?null:pt.getPrimaries(w.colorSpace),le=w.colorSpace===fi||ye===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,qe=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let fe=0;fe<6;fe++)!be&&!qe?Re[fe]=m(w.image[fe],!0,s.maxCubemapSize):Re[fe]=qe?w.image[fe].image:w.image[fe],Re[fe]=_t(w,Re[fe]);const Ee=Re[0],Ye=r.convert(w.format,w.colorSpace),Je=r.convert(w.type),st=_(w.internalFormat,Ye,Je,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,Te=ve.__version===void 0||ee===!0,ce=ne.dataReady;let Ae=b(w,Ee);me(n.TEXTURE_CUBE_MAP,w);let De;if(be){W&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,st,Ee.width,Ee.height);for(let fe=0;fe<6;fe++){De=Re[fe].mipmaps;for(let $e=0;$e<De.length;$e++){const Ve=De[$e];w.format!==En?Ye!==null?W?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,0,0,Ve.width,Ve.height,Ye,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,st,Ve.width,Ve.height,0,Ve.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,0,0,Ve.width,Ve.height,Ye,Je,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,st,Ve.width,Ve.height,0,Ye,Je,Ve.data)}}}else{if(De=w.mipmaps,W&&Te){De.length>0&&Ae++;const fe=ht(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,st,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(qe){W?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Re[fe].width,Re[fe].height,Ye,Je,Re[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,st,Re[fe].width,Re[fe].height,0,Ye,Je,Re[fe].data);for(let $e=0;$e<De.length;$e++){const At=De[$e].image[fe].image;W?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,0,0,At.width,At.height,Ye,Je,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,st,At.width,At.height,0,Ye,Je,At.data)}}else{W?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ye,Je,Re[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,st,Ye,Je,Re[fe]);for(let $e=0;$e<De.length;$e++){const Ve=De[$e];W?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,0,0,Ye,Je,Ve.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,st,Ye,Je,Ve.image[fe])}}}p(w)&&M(n.TEXTURE_CUBE_MAP),ve.__version=ne.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Me(P,w,Y,ee,ne,ve){const ye=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),le=_(Y.internalFormat,ye,ie,Y.normalized,Y.colorSpace),be=i.get(w),qe=i.get(Y);if(qe.__renderTarget=w,!be.__hasExternalTextures){const Re=Math.max(1,w.width>>ve),Ee=Math.max(1,w.height>>ve);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ve,le,Re,Ee,w.depth,0,ye,ie,null):t.texImage2D(ne,ve,le,Re,Ee,0,ye,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ne,qe.__webglTexture,0,Qe(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ne,qe.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(P,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const ee=w.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,ve=S(w.stencilBuffer,ne),ye=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe(w),ve,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe(w),ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,P)}else{const ee=w.textures;for(let ne=0;ne<ee.length;ne++){const ve=ee[ne],ye=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),le=_(ve.internalFormat,ye,ie,ve.normalized,ve.colorSpace);et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe(w),le,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe(w),le,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,le,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(P,w,Y){const ee=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(w.depthTexture);if(ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),me(n.TEXTURE_CUBE_MAP,w.depthTexture);const be=r.convert(w.depthTexture.format),qe=r.convert(w.depthTexture.type);let Re;w.depthTexture.format===jn?Re=n.DEPTH_COMPONENT24:w.depthTexture.format===Pi&&(Re=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Re,w.width,w.height,0,be,qe,null)}}else J(w.depthTexture,0);const ve=ne.__webglTexture,ye=Qe(w),ie=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,le=w.depthTexture.format===Pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===jn)et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ie,ve,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,le,ie,ve,0);else if(w.depthTexture.format===Pi)et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ie,ve,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,le,ie,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(P){const w=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=ee}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let ee=0;ee<6;ee++)lt(w.__webglFramebuffer[ee],P,ee);else{const ee=P.texture.mipmaps;ee&&ee.length>0?lt(w.__webglFramebuffer[0],P,0):lt(w.__webglFramebuffer,P,0)}else if(Y){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Oe(w.__webglDepthbuffer[ee],P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ve)}}else{const ee=P.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Oe(w.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function q(P,w,Y){const ee=i.get(P);w!==void 0&&Me(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ae(P)}function se(P){const w=P.texture,Y=i.get(P),ee=i.get(w);P.addEventListener("dispose",v);const ne=P.textures,ve=P.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++),ve){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let le=0;le<w.mipmaps.length;le++)Y.__webglFramebuffer[ie][le]=n.createFramebuffer()}else Y.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ie=0,le=ne.length;ie<le;ie++){const be=i.get(ne[ie]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&et(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){const le=ne[ie];Y.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);const be=r.convert(le.format,le.colorSpace),qe=r.convert(le.type),Re=_(le.internalFormat,be,qe,le.normalized,le.colorSpace,P.isXRRenderTarget===!0),Ee=Qe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Re,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),me(n.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let le=0;le<w.mipmaps.length;le++)Me(Y.__webglFramebuffer[ie][le],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else Me(Y.__webglFramebuffer[ie],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(w)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,le=ne.length;ie<le;ie++){const be=ne[ie],qe=i.get(be);let Re=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,qe.__webglTexture),me(Re,be),Me(Y.__webglFramebuffer,P,be,n.COLOR_ATTACHMENT0+ie,Re,0),p(be)&&M(Re)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),me(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let le=0;le<w.mipmaps.length;le++)Me(Y.__webglFramebuffer[le],P,w,n.COLOR_ATTACHMENT0,ie,le);else Me(Y.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ie,0);p(w)&&M(ie),t.unbindTexture()}P.depthBuffer&&ae(P)}function ue(P){const w=P.textures;for(let Y=0,ee=w.length;Y<ee;Y++){const ne=w[Y];if(p(ne)){const ve=y(P),ye=i.get(ne).__webglTexture;t.bindTexture(ve,ye),M(ve),t.unbindTexture()}}}const ge=[],Ke=[];function He(P){if(P.samples>0){if(et(P)===!1){const w=P.textures,Y=P.width,ee=P.height;let ne=n.COLOR_BUFFER_BIT;const ve=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(P),ie=w.length>1;if(ie)for(let be=0;be<w.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const le=P.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let be=0;be<w.length;be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);const qe=i.get(w[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,ne,n.NEAREST),c===!0&&(ge.length=0,Ke.length=0,ge.push(n.COLOR_ATTACHMENT0+be),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ge.push(ve),Ke.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let be=0;be<w.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);const qe=i.get(w[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Qe(P){return Math.min(s.maxSamples,P.samples)}function et(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function _t(P,w){const Y=P.colorSpace,ee=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==bo&&Y!==fi&&(pt.getTransfer(Y)===St?(ee!==En||ne!==un)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",Y)),w}function ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=X,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=q,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Pv(n,e){function t(i,s=fi){let r;const o=pt.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===Eh)return n.ALPHA;if(i===Th)return n.RGB;if(i===En)return n.RGBA;if(i===jn)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===Oo)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===Ui)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===fo||i===po||i===mo||i===go)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===$a||i===Za||i===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===Qa||i===ja||i===ec||i===tc||i===So||i===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ja||i===Qa)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ja)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ec)return r.COMPRESSED_R11_EAC;if(i===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===So)return r.COMPRESSED_RG11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===cc||i===lc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xc||i===vc||i===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===yc||i===wo||i===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xt({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new D(new _i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uv extends Oi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Iv,p={},M=t.getContextAttributes();let y=null,_=null;const S=[],b=[],A=new xe;let v=null,E=null;const R=new ln;R.viewport=new Pt;const C=new ln;C.viewport=new Pt;const I=[R,C],X=new kp;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=S[G];return Q===void 0&&(Q=new aa,S[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=S[G];return Q===void 0&&(Q=new aa,S[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=S[G];return Q===void 0&&(Q=new aa,S[G]=Q),Q.getHandSpace()};function N(G){const Q=b.indexOf(G.inputSource);if(Q===-1)return;const de=S[Q];de!==void 0&&(de.update(G.inputSource,G.frame,l||o),de.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",J);for(let G=0;G<S.length;G++){const Q=b[G];Q!==null&&(b[G]=null,S[G].disconnect(Q))}F=null,k=null,m.reset();for(const G in p)delete p[G];if(e.setRenderTarget(y),f=null,d=null,h=null,s=null,_=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),E!==null){const G=E.camera;G.fov=E.fov,G.zoom=E.zoom,G.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ie=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?Pi:jn,Ie=M.stencil?dr:Tn);const Oe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new mn(d.textureWidth,d.textureHeight,{format:En,type:un,depthTexture:new vs(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new mn(f.framebufferWidth,f.framebufferHeight,{format:En,type:un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(G){for(let Q=0;Q<G.removed.length;Q++){const de=G.removed[Q],Ie=b.indexOf(de);Ie>=0&&(b[Ie]=null,S[Ie].disconnect(de))}for(let Q=0;Q<G.added.length;Q++){const de=G.added[Q];let Ie=b.indexOf(de);if(Ie===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=b.length){b.push(de),Ie=Oe;break}else if(b[Oe]===null){b[Oe]=de,Ie=Oe;break}if(Ie===-1)break}const Me=S[Ie];Me&&Me.connect(de)}}const O=new L,$=new L;function j(G,Q,de){O.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const Ie=O.distanceTo($),Me=Q.projectionMatrix.elements,Oe=de.projectionMatrix.elements,lt=Me[14]/(Me[10]-1),ae=Me[14]/(Me[10]+1),q=(Me[9]+1)/Me[5],se=(Me[9]-1)/Me[5],ue=(Me[8]-1)/Me[0],ge=(Oe[8]+1)/Oe[0],Ke=lt*ue,He=lt*ge,Qe=Ie/(-ue+ge),et=Qe*-ue;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(et),G.translateZ(Qe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Me[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const z=lt+Qe,_t=ae+Qe,ht=Ke-et,P=He+(Ie-et),w=q*ae/_t*z,Y=se*ae/_t*z;G.projectionMatrix.makePerspective(ht,P,w,Y,z,_t),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function pe(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Q=G.near,de=G.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(de=m.depthFar)),X.near=C.near=R.near=Q,X.far=C.far=R.far=de,(F!==X.near||k!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,k=X.far),X.layers.mask=G.layers.mask|6,R.layers.mask=X.layers.mask&-5,C.layers.mask=X.layers.mask&-3;const Ie=G.parent,Me=X.cameras;pe(X,Ie);for(let Oe=0;Oe<Me.length;Oe++)pe(Me[Oe],Ie);Me.length===2?j(X,R,C):X.projectionMatrix.copy(R.projectionMatrix),E===null&&G.isPerspectiveCamera&&(E={camera:G,fov:G.fov,zoom:G.zoom}),re(G,X,Ie)};function re(G,Q,de){de===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=bc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(G){return p[G]};let Ge=null;function me(G,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ie=!1;de.length!==X.cameras.length&&(X.cameras.length=0,Ie=!0);for(let ae=0;ae<de.length;ae++){const q=de[ae];let se=null;if(f!==null)se=f.getViewport(q);else{const ge=h.getViewSubImage(d,q);se=ge.viewport,ae===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let ue=I[ae];ue===void 0&&(ue=new ln,ue.layers.enable(ae),ue.viewport=new Pt,I[ae]=ue),ue.matrix.fromArray(q.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(q.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(se.x,se.y,se.width,se.height),ae===0&&(X.matrix.copy(ue.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ie===!0&&X.cameras.push(ue)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const ae=h.getDepthInformation(de[0]);ae&&ae.isValid&&ae.texture&&m.init(ae,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ae=0;ae<de.length;ae++){const q=de[ae].camera;if(q){let se=p[q];se||(se=new zh,p[q]=se);const ue=h.getCameraImage(q);se.sourceTexture=ue}}}}for(let de=0;de<S.length;de++){const Ie=b[de],Me=S[de];Ie!==null&&Me!==void 0&&Me.update(Ie,Q,l||o)}Ge&&Ge(G,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const oe=new Qh;oe.setAnimationLoop(me),this.setAnimationLoop=function(G){Ge=G},this.dispose=function(){}}}const Nv=new Et,rd=new nt;rd.set(-1,0,0,0,1,0,0,0,1);function Fv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ov(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,S){const b=S.program;i.uniformBlockBinding(_,b)}function l(_,S){let b=s[_.id];b===void 0&&(m(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",M));const A=S.program;i.updateUBOMapping(_,A);const v=e.render.frame;r[_.id]!==v&&(d(_),r[_.id]=v)}function u(_){const S=h();_.__bindingPointIndex=S;const b=n.createBuffer(),A=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const S=s[_.id],b=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,E=b.length;v<E;v++){const R=b[v];if(Array.isArray(R))for(let C=0,I=R.length;C<I;C++)f(R[C],v,C,A);else f(R,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,b,A){if(x(_,S,b,A)===!0){const v=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let C=0;C<E.length;C++){const I=E[C],X=p(I);g(I,_.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function g(_,S,b){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,b)}function x(_,S,b,A){const v=_.value,E=S+"_"+b;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const R=A[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(_){const S=_.uniforms;let b=0;const A=16;for(let E=0,R=S.length;E<R;E++){const C=Array.isArray(S[E])?S[E]:[S[E]];for(let I=0,X=C.length;I<X;I++){const F=C[I],k=Array.isArray(F.value)?F.value:[F.value];for(let N=0,B=k.length;N<B;N++){const J=k[N],O=p(J),$=b%A,j=$%O.boundary,pe=$+j;b+=j,pe!==0&&A-pe<O.storage&&(b+=A-pe),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=O.storage}}}const v=b%A;return v>0&&(b+=A-v),_.__size=b,_.__cache={},this}function p(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",_),S}function M(_){const S=_.target;S.removeEventListener("dispose",M);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function y(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:y}}const zv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function Bv(){return Un===null&&(Un=new Zc(zv,16,16,Ui,An),Un.name="DFG_LUT",Un.minFilter=Kt,Un.magFilter=Kt,Un.wrapS=Zn,Un.wrapT=Zn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class kv{constructor(e={}){const{canvas:t=Mf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=f,m=new Set([Wc,Hc,Vc]),p=new Set([un,Tn,hr,dr,kc,Gc]),M=new Uint32Array(4),y=new Int32Array(4),_=new L;let S=null,b=null;const A=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,I=null,X=null,F=null,k=null;this._outputColorSpace=rn;let N=0,B=0,J=null,O=-1,$=null;const j=new Pt,pe=new Pt;let re=null;const Ge=new _e(0);let me=0,oe=t.width,G=t.height,Q=1,de=null,Ie=null;const Me=new Pt(0,0,oe,G),Oe=new Pt(0,0,oe,G);let lt=!1;const ae=new Kc;let q=!1,se=!1;const ue=new Et,ge=new L,Ke=new Pt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function et(){return J===null?Q:1}let z=i;function _t(T,H){return t.getContext(T,H)}let ht,P,w,Y,ee,ne,ve,ye,ie,le,be,qe,Re,Ee,Ye,Je,st,W,Te,ce,Ae,De,fe;try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",xn,!1),z===null){const H="webgl2";if(z=_t(H,T),z===null)throw _t(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(T){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),gt("WebGLRenderer: "+T.message),T}function $e(){ht=new Bg(z),ht.init(),Ae=new Pv(z,ht),P=new Cg(z,ht,e,Ae),w=new Rv(z,ht),P.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),X=z.createFramebuffer(),F=z.createFramebuffer(),k=z.createFramebuffer(),Y=new Vg(z),ee=new pv,ne=new Cv(z,ht,w,ee,P,Ae,Y),ve=new zg(R),ye=new Wp(z),De=new Ag(z,ye),ie=new kg(z,ye,Y,De),le=new Wg(z,ie,ye,De,Y),W=new Hg(z,P,ne),Ye=new Pg(ee),be=new fv(R,ve,ht,P,De,Ye),qe=new Fv(R,ee),Re=new gv,Ee=new Sv(ht),st=new Tg(R,ve,w,le,g,c),Je=new Av(R,le,P),fe=new Ov(z,Y,P,w),Te=new Rg(z,ht,Y),ce=new Gg(z,ht,Y),Y.programs=be.programs,R.capabilities=P,R.extensions=ht,R.properties=ee,R.renderLists=Re,R.shadowMap=Je,R.state=w,R.info=Y}x!==un&&(E=new qg(x,t.width,t.height,a,s,r));const Ve=new Uv(R,z);this.xr=Ve,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(oe,G,!1))},this.getSize=function(T){return T.set(oe,G)},this.setSize=function(T,H,te=!0){if(Ve.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,G=H,t.width=Math.floor(T*Q),t.height=Math.floor(H*Q),te===!0&&(t.style.width=T+"px",t.style.height=H+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(oe*Q,G*Q).floor()},this.setDrawingBufferSize=function(T,H,te){oe=T,G=H,Q=te,t.width=Math.floor(T*te),t.height=Math.floor(H*te),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(x===un){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,H,te,Z){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,H,te,Z),w.viewport(j.copy(Me).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Oe)},this.setScissor=function(T,H,te,Z){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,H,te,Z),w.scissor(pe.copy(Oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(T){w.setScissorTest(lt=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){Ie=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,te=!0){let Z=0;if(T){let K=!1;if(J!==null){const Le=J.texture.format;K=m.has(Le)}if(K){const Le=J.texture.type,Ne=p.has(Le),Pe=st.getClearColor(),ze=st.getClearAlpha(),We=Pe.r,ot=Pe.g,dt=Pe.b;Ne?(M[0]=We,M[1]=ot,M[2]=dt,M[3]=ze,z.clearBufferuiv(z.COLOR,0,M)):(y[0]=We,y[1]=ot,y[2]=dt,y[3]=ze,z.clearBufferiv(z.COLOR,0,y))}else Z|=z.COLOR_BUFFER_BIT}H&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),st.dispose(),Re.dispose(),Ee.dispose(),ee.dispose(),ve.dispose(),le.dispose(),De.dispose(),fe.dispose(),be.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",gl),Ve.removeEventListener("sessionend",xl),Mi.stop()};function At(T){T.preventDefault(),Pl("WebGLRenderer: Context Lost."),C=!0}function Mt(){Pl("WebGLRenderer: Context Restored."),C=!1;const T=Y.autoReset,H=Je.enabled,te=Je.autoUpdate,Z=Je.needsUpdate,K=Je.type;$e(),Y.autoReset=T,Je.enabled=H,Je.autoUpdate=te,Je.needsUpdate=Z,Je.type=K}function xn(T){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ln(T){const H=T.target;H.removeEventListener("dispose",Ln),Ld(H)}function Ld(T){Dd(T),ee.remove(T)}function Dd(T){const H=ee.get(T).programs;H!==void 0&&(H.forEach(function(te){be.releaseProgram(te)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,te,Z,K,Le){H===null&&(H=He);const Ne=K.isMesh&&K.matrixWorld.determinantAffine()<0,Pe=Nd(T,H,te,Z,K);w.setMaterial(Z,Ne);let ze=te.index,We=1;if(Z.wireframe===!0){if(ze=ie.getWireframeAttribute(te),ze===void 0)return;We=2}const ot=te.drawRange,dt=te.attributes.position;let Be=ot.start*We,yt=(ot.start+ot.count)*We;Le!==null&&(Be=Math.max(Be,Le.start*We),yt=Math.min(yt,(Le.start+Le.count)*We)),ze!==null?(Be=Math.max(Be,0),yt=Math.min(yt,ze.count)):dt!=null&&(Be=Math.max(Be,0),yt=Math.min(yt,dt.count));const Ft=yt-Be;if(Ft<0||Ft===1/0)return;De.setup(K,Z,Pe,te,ze);let Ct,Tt=Te;if(ze!==null&&(Ct=ye.get(ze),Tt=ce,Tt.setIndex(Ct)),K.isMesh)Z.wireframe===!0?(w.setLineWidth(Z.wireframeLinewidth*et()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(K.isLine){let qt=Z.linewidth;qt===void 0&&(qt=1),w.setLineWidth(qt*et()),K.isLineSegments?Tt.setMode(z.LINES):K.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else K.isPoints?Tt.setMode(z.POINTS):K.isSprite&&Tt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Tt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qt=K._multiDrawStarts,Ue=K._multiDrawCounts,Qt=K._multiDrawCount,mt=ze?ye.get(ze).bytesPerElement:1,hn=ee.get(Z).currentProgram.getUniforms();for(let Dn=0;Dn<Qt;Dn++)hn.setValue(z,"_gl_DrawID",Dn),Tt.render(qt[Dn]/mt,Ue[Dn])}else if(K.isInstancedMesh)Tt.renderInstances(Be,Ft,K.count);else if(te.isInstancedBufferGeometry){const qt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,qt);Tt.renderInstances(Be,Ft,Ue)}else Tt.render(Be,Ft)};function ml(T,H,te,Z){I!==null&&T.isNodeMaterial&&I.setObject(Z,T),q===!0&&Ye.setState(T,te,!1),T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Er(T,H,Z),T.side=gi,T.needsUpdate=!0,Er(T,H,Z),T.side=en):Er(T,H,Z)}this.compile=function(T,H,te=null){te===null&&(te=T),I!==null&&I.renderStart(T,H,te),b=Ee.get(te),b.init(H),v.push(b),te.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),T!==te&&T.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),se=this.localClippingEnabled,q=Ye.init(this.clippingPlanes,se),q===!0&&Ye.setGlobalState(this.clippingPlanes,H),I!==null&&Je.render(b.state.shadowsArray,te,H);const Z=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Le=K.material;if(Le)if(Array.isArray(Le))for(let Ne=0;Ne<Le.length;Ne++){const Pe=Le[Ne];ml(Pe,te,H,K),Z.add(Pe)}else ml(Le,te,H,K),Z.add(Le)}),b=v.pop(),I!==null&&I.renderEnd(),Z},this.compileAsync=function(T,H,te=null){const Z=this.compile(T,H,te);return new Promise(K=>{function Le(){if(Z.forEach(function(Ne){const ze=ee.get(Ne).currentProgram;(ze===void 0||ze.isReady())&&Z.delete(Ne)}),Z.size===0){K(T);return}setTimeout(Le,10)}ht.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let $o=null;function Id(T){$o&&$o(T)}function gl(){Mi.stop()}function xl(){Mi.start()}const Mi=new Qh;Mi.setAnimationLoop(Id),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(T){$o=T,Ve.setAnimationLoop(T),T===null?Mi.stop():Mi.start()},Ve.addEventListener("sessionstart",gl),Ve.addEventListener("sessionend",xl),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(T,H);const te=Ve.enabled===!0&&Ve.isPresenting===!0,Z=E!==null&&(J===null||te)&&E.begin(R,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(H),H=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,H,J),b=Ee.get(T,v.length),b.init(H),b.state.textureUnits=ne.getTextureUnits(),v.push(b),ue.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(ue,On,H.reversedDepth),se=this.localClippingEnabled,q=Ye.init(this.clippingPlanes,se),S=Re.get(T,A.length),S.init(),A.push(S),Ve.enabled===!0&&Ve.isPresenting===!0){const Ne=R.xr.getDepthSensingMesh();Ne!==null&&Zo(Ne,H,-1/0,R.sortObjects)}Zo(T,H,0,R.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(de,Ie),Qe=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Qe&&st.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),q===!0&&Ye.beginShadows();const K=b.state.shadowsArray;if(Je.render(K,T,H),q===!0&&Ye.endShadows(),(Z&&E.hasRenderPass())===!1){const Ne=S.opaque,Pe=S.transmissive;if(b.setupLights(),H.isArrayCamera){const ze=H.cameras;if(Pe.length>0)for(let We=0,ot=ze.length;We<ot;We++){const dt=ze[We];_l(Ne,Pe,T,dt)}Qe&&st.render(T);for(let We=0,ot=ze.length;We<ot;We++){const dt=ze[We];vl(S,T,dt,dt.viewport)}}else Pe.length>0&&_l(Ne,Pe,T,H),Qe&&st.render(T),vl(S,T,H)}J!==null&&B===0&&(ne.updateMultisampleRenderTarget(J),ne.updateRenderTargetMipmap(J)),Z&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,H),De.resetDefaultState(),O=-1,$=null,v.pop(),v.length>0?(b=v[v.length-1],ne.setTextureUnits(b.state.textureUnits),q===!0&&Ye.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,I!==null&&I.renderEnd()};function Zo(T,H,te,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ae)){Z&&Ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Ne=le.update(T),Pe=T.material;Pe.visible&&S.push(T,Ne,Pe,te,Ke.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ae))){const Ne=le.update(T),Pe=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ke.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ke.copy(Ne.boundingSphere.center)),Ke.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Pe)){const ze=Ne.groups;for(let We=0,ot=ze.length;We<ot;We++){const dt=ze[We],Be=Pe[dt.materialIndex];Be&&Be.visible&&S.push(T,Ne,Be,te,Ke.z,dt,H)}}else Pe.visible&&S.push(T,Ne,Pe,te,Ke.z,null,H)}}const Le=T.children;for(let Ne=0,Pe=Le.length;Ne<Pe;Ne++)Zo(Le[Ne],H,te,Z)}function vl(T,H,te,Z){const{opaque:K,transmissive:Le,transparent:Ne}=T;b.setupLightsView(te),q===!0&&Ye.setGlobalState(R.clippingPlanes,te),Z&&w.viewport(j.copy(Z)),K.length>0&&br(K,H,te),Le.length>0&&br(Le,H,te),Ne.length>0&&br(Ne,H,te),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function _l(T,H,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){const Be=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new mn(1,1,{generateMipmaps:!0,type:Be?An:un,minFilter:Ci,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Le=b.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||j;Le.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);const Pe=R.getRenderTarget(),ze=R.getActiveCubeFace(),We=R.getActiveMipmapLevel();R.setRenderTarget(Le),R.getClearColor(Ge),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),Qe&&st.render(te);const ot=R.toneMapping;R.toneMapping=zn;const dt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),q===!0&&Ye.setGlobalState(R.clippingPlanes,Z),br(T,te,Z),ne.updateMultisampleRenderTarget(Le),ne.updateRenderTargetMipmap(Le),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let yt=0,Ft=H.length;yt<Ft;yt++){const Ct=H[yt],{object:Tt,geometry:qt,material:Ue,group:Qt}=Ct;if(Ue.side===en&&Tt.layers.test(Z.layers)){const mt=Ue.side;Ue.side=tn,Ue.needsUpdate=!0,Ml(Tt,te,Z,qt,Ue,Qt),Ue.side=mt,Ue.needsUpdate=!0,Be=!0}}Be===!0&&(ne.updateMultisampleRenderTarget(Le),ne.updateRenderTargetMipmap(Le))}R.setRenderTarget(Pe,ze,We),R.setClearColor(Ge,me),dt!==void 0&&(Z.viewport=dt),R.toneMapping=ot}function br(T,H,te){const Z=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Le=T.length;K<Le;K++){const Ne=T[K],{object:Pe,geometry:ze,group:We}=Ne;let ot=Ne.material;ot.allowOverride===!0&&Z!==null&&(ot=Z),Pe.layers.test(te.layers)&&Ml(Pe,H,te,ze,ot,We)}}function Ml(T,H,te,Z,K,Le){I!==null&&K.isNodeMaterial&&I.setObject(T,K),T.onBeforeRender(R,H,te,Z,K,Le),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(R,H,te,Z,T,Le),K.transparent===!0&&K.side===en&&K.forceSinglePass===!1?(K.side=tn,K.needsUpdate=!0,R.renderBufferDirect(te,H,Z,K,T,Le),K.side=gi,K.needsUpdate=!0,R.renderBufferDirect(te,H,Z,K,T,Le),K.side=en):R.renderBufferDirect(te,H,Z,K,T,Le),T.onAfterRender(R,H,te,Z,K,Le)}function Er(T,H,te){H.isScene!==!0&&(H=He);const Z=ee.get(T),K=b.state.lights,Le=b.state.shadowsArray,Ne=K.state.version,Pe=be.getParameters(T,K.state,Le,H,te,b.state.lightProbeGridArray),ze=be.getProgramCacheKey(Pe);let We=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;const ot=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=ve.get(T.envMap||Z.environment,ot),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",Ln),We=new Map,Z.programs=We);let dt=We.get(ze);if(dt!==void 0){if(Z.currentProgram===dt&&Z.lightsStateVersion===Ne)return Sl(T,Pe),dt}else Pe.uniforms=be.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,te,Pe),T.onBeforeCompile(Pe,R),dt=be.acquireProgram(Pe,ze),We.set(ze,dt),Z.uniforms=Pe.uniforms;const Be=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Ye.uniform),Sl(T,Pe),Z.needsLights=Od(T),Z.lightsStateVersion=Ne,Z.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.sunLights.value=K.state.sun,Be.sunLightShadows.value=K.state.sunShadow,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.sunShadowMatrix.value=K.state.sunShadowMatrix,Be.sunShadowCascade.value=K.state.sunShadowCascade,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=b.state.lightProbeGridArray.length>0,Z.currentProgram=dt,Z.uniformsList=null,dt}function yl(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=xo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Sl(T,H){const te=ee.get(T);te.outputColorSpace=H.outputColorSpace,te.batching=H.batching,te.batchingColor=H.batchingColor,te.instancing=H.instancing,te.instancingColor=H.instancingColor,te.instancingMorph=H.instancingMorph,te.skinning=H.skinning,te.morphTargets=H.morphTargets,te.morphNormals=H.morphNormals,te.morphColors=H.morphColors,te.morphTargetsCount=H.morphTargetsCount,te.numClippingPlanes=H.numClippingPlanes,te.numIntersection=H.numClipIntersection,te.vertexAlphas=H.vertexAlphas,te.vertexTangents=H.vertexTangents,te.toneMapping=H.toneMapping}function Ud(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let te=0,Z=T.length;te<Z;te++){const K=T[te];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function Nd(T,H,te,Z,K){H.isScene!==!0&&(H=He),ne.resetTextureUnits();const Le=H.fog,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,Pe=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:pt.workingColorSpace,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,We=ve.get(Z.envMap||Ne,ze),ot=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,dt=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Be=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,Ft=!!te.morphAttributes.color;let Ct=zn;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ct=R.toneMapping);const Tt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,qt=Tt!==void 0?Tt.length:0,Ue=ee.get(Z),Qt=b.state.lights;if(q===!0&&(se===!0||T!==$)){const Rt=T===$&&Z.id===O;Ye.setState(Z,T,Rt)}let mt=!1;Z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Qt.state.version||Ue.outputColorSpace!==Pe||K.isBatchedMesh&&Ue.batching===!1||!K.isBatchedMesh&&Ue.batching===!0||K.isBatchedMesh&&Ue.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ue.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ue.instancing===!1||!K.isInstancedMesh&&Ue.instancing===!0||K.isSkinnedMesh&&Ue.skinning===!1||!K.isSkinnedMesh&&Ue.skinning===!0||K.isInstancedMesh&&Ue.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ue.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ue.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ue.instancingMorph===!1&&K.morphTexture!==null||Ue.envMap!==We||Z.fog===!0&&Ue.fog!==Le||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ye.numPlanes||Ue.numIntersection!==Ye.numIntersection)||Ue.vertexAlphas!==ot||Ue.vertexTangents!==dt||Ue.morphTargets!==Be||Ue.morphNormals!==yt||Ue.morphColors!==Ft||Ue.toneMapping!==Ct||Ue.morphTargetsCount!==qt||!!Ue.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ue.__version=Z.version);let hn=Ue.currentProgram;mt===!0&&(hn=Er(Z,H,K),I&&Z.isNodeMaterial&&I.onUpdateProgram(Z,hn,Ue));let Dn=!1,ei=!1,Vi=!1;const wt=hn.getUniforms(),It=Ue.uniforms;if(w.useProgram(hn.program)&&(Dn=!0,ei=!0,Vi=!0),Z.id!==O&&(O=Z.id,ei=!0),Ue.needsLights){const Rt=Ud(b.state.lightProbeGridArray,K);Ue.lightProbeGrid!==Rt&&(Ue.lightProbeGrid=Rt,ei=!0)}if(Dn||$!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),wt.setValue(z,"projectionMatrix",T.projectionMatrix),wt.setValue(z,"viewMatrix",T.matrixWorldInverse);const ni=wt.map.cameraPosition;ni!==void 0&&ni.setValue(z,ge.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&wt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&wt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,ei=!0,Vi=!0)}if(Ue.needsLights&&(Qt.state.sunShadowMap.length>0&&wt.setValue(z,"sunShadowMap",Qt.state.sunShadowMap,ne),Qt.state.directionalShadowMap.length>0&&wt.setValue(z,"directionalShadowMap",Qt.state.directionalShadowMap,ne),Qt.state.spotShadowMap.length>0&&wt.setValue(z,"spotShadowMap",Qt.state.spotShadowMap,ne),Qt.state.pointShadowMap.length>0&&wt.setValue(z,"pointShadowMap",Qt.state.pointShadowMap,ne)),K.isSkinnedMesh){wt.setOptional(z,K,"bindMatrix"),wt.setOptional(z,K,"bindMatrixInverse");const Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),wt.setValue(z,"boneTexture",Rt.boneTexture,ne))}K.isBatchedMesh&&(wt.setOptional(z,K,"batchingTexture"),wt.setValue(z,"batchingTexture",K._matricesTexture,ne),wt.setOptional(z,K,"batchingIdTexture"),wt.setValue(z,"batchingIdTexture",K._indirectTexture,ne),wt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&wt.setValue(z,"batchingColorTexture",K._colorsTexture,ne));const ti=te.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&W.update(K,te,hn),(ei||Ue.receiveShadow!==K.receiveShadow)&&(Ue.receiveShadow=K.receiveShadow,wt.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(It.envMapIntensity.value=H.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Bv()),ei){if(wt.setValue(z,"toneMappingExposure",R.toneMappingExposure),Ue.needsLights&&Fd(It,Vi),Le&&Z.fog===!0&&qe.refreshFogUniforms(It,Le),qe.refreshMaterialUniforms(It,Z,Q,G,b.state.transmissionRenderTarget[T.id]),Ue.needsLights&&Ue.lightProbeGrid){const Rt=Ue.lightProbeGrid;It.probesSH.value=Rt.texture,It.probesMin.value.copy(Rt.boundingBox.min),It.probesMax.value.copy(Rt.boundingBox.max),It.probesResolution.value.copy(Rt.resolution)}xo.upload(z,yl(Ue),It,ne)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(xo.upload(z,yl(Ue),It,ne),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&wt.setValue(z,"center",K.center),wt.setValue(z,"modelViewMatrix",K.modelViewMatrix),wt.setValue(z,"normalMatrix",K.normalMatrix),wt.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){const Rt=Z.uniformsGroups;for(let ni=0,Hi=Rt.length;ni<Hi;ni++){const bl=Rt[ni];fe.update(bl,hn),fe.bind(bl,hn)}}return hn}function Fd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Od(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,H,te){const Z=ee.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ee.get(T.texture).__webglTexture=H,ee.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const te=ee.get(T);te.__webglFramebuffer=H,te.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,te=0){J=T,N=H,B=te;let Z=null,K=!1,Le=!1;if(T){const Pe=ee.get(T);if(Pe.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(z.FRAMEBUFFER,Pe.__webglFramebuffer),j.copy(T.viewport),pe.copy(T.scissor),re=T.scissorTest,w.viewport(j),w.scissor(pe),w.setScissorTest(re),O=-1;return}else if(Pe.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(Pe.__hasExternalTextures)ne.rebindTextures(T,ee.get(T.texture).__webglTexture,ee.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ot=T.depthTexture;if(Pe.__boundDepthTexture!==ot){if(ot!==null&&ee.has(ot)&&(T.width!==ot.image.width||T.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Le=!0);const We=ee.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[H])?Z=We[H][te]:Z=We[H],K=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?Z=ee.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[te]:Z=We,j.copy(T.viewport),pe.copy(T.scissor),re=T.scissorTest}else j.copy(Me).multiplyScalar(Q).floor(),pe.copy(Oe).multiplyScalar(Q).floor(),re=lt;if(te!==0&&(Z=X),w.bindFramebuffer(z.FRAMEBUFFER,Z)&&w.drawBuffers(T,Z),w.viewport(j),w.scissor(pe),w.setScissorTest(re),K){const Pe=ee.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,te)}else if(Le){const Pe=H;for(let ze=0;ze<T.textures.length;ze++){const We=ee.get(T.textures[ze]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ze,We.__webglTexture,te,Pe)}}else if(T!==null&&te!==0){const Pe=ee.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pe.__webglTexture,te)}O=-1};function wl(T){const H=ee.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=P.textureFormatReadable(T.format),H.__typeReadable=P.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,te,Z,K,Le,Ne,Pe=0){if(!(T&&T.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){w.bindFramebuffer(z.FRAMEBUFFER,ze);try{const We=T.textures[Pe],ot=We.format,dt=We.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);const Be=wl(We);if(Be.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&te>=0&&te<=T.height-K&&z.readPixels(H,te,Z,K,Ae.convert(ot),Ae.convert(dt),Le)}finally{const We=J!==null?ee.get(J).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,H,te,Z,K,Le,Ne,Pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze)if(H>=0&&H<=T.width-Z&&te>=0&&te<=T.height-K){w.bindFramebuffer(z.FRAMEBUFFER,ze);const We=T.textures[Pe],ot=We.format,dt=We.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);const Be=wl(We);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.bufferData(z.PIXEL_PACK_BUFFER,Le.byteLength,z.STREAM_READ),z.readPixels(H,te,Z,K,Ae.convert(ot),Ae.convert(dt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Ft=J!==null?ee.get(J).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,Ft);const Ct=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await yf(z,Ct,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Le),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(yt),z.deleteSync(Ct),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,te=0){const Z=Math.pow(2,-te),K=Math.floor(T.image.width*Z),Le=Math.floor(T.image.height*Z),Ne=H!==null?H.x:0,Pe=H!==null?H.y:0;ne.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Ne,Pe,K,Le),w.unbindTexture()},this.copyTextureToTexture=function(T,H,te=null,Z=null,K=0,Le=0){let Ne,Pe,ze,We,ot,dt,Be,yt,Ft;const Ct=T.isCompressedTexture?T.mipmaps[Le]:T.image;if(te!==null)Ne=te.max.x-te.min.x,Pe=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,We=te.min.x,ot=te.min.y,dt=te.isBox3?te.min.z:0;else{const It=Math.pow(2,-K);Ne=Math.floor(Ct.width*It),Pe=Math.floor(Ct.height*It),T.isDataArrayTexture?ze=Ct.depth:T.isData3DTexture?ze=Math.floor(Ct.depth*It):ze=1,We=0,ot=0,dt=0}Z!==null?(Be=Z.x,yt=Z.y,Ft=Z.z):(Be=0,yt=0,Ft=0);const Tt=Ae.convert(H.format),qt=Ae.convert(H.type);let Ue;H.isData3DTexture?(ne.setTexture3D(H,0),Ue=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ne.setTexture2DArray(H,0),Ue=z.TEXTURE_2D_ARRAY):(ne.setTexture2D(H,0),Ue=z.TEXTURE_2D),w.activeTexture(z.TEXTURE0),w.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),w.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),w.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const Qt=w.getParameter(z.UNPACK_ROW_LENGTH),mt=w.getParameter(z.UNPACK_IMAGE_HEIGHT),hn=w.getParameter(z.UNPACK_SKIP_PIXELS),Dn=w.getParameter(z.UNPACK_SKIP_ROWS),ei=w.getParameter(z.UNPACK_SKIP_IMAGES);w.pixelStorei(z.UNPACK_ROW_LENGTH,Ct.width),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ct.height),w.pixelStorei(z.UNPACK_SKIP_PIXELS,We),w.pixelStorei(z.UNPACK_SKIP_ROWS,ot),w.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);const Vi=T.isDataArrayTexture||T.isData3DTexture,wt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const It=ee.get(T),ti=ee.get(H),Rt=ee.get(It.__renderTarget),ni=ee.get(ti.__renderTarget);w.bindFramebuffer(z.READ_FRAMEBUFFER,Rt.__webglFramebuffer),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Hi=0;Hi<ze;Hi++)Vi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.get(T).__webglTexture,K,dt+Hi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.get(H).__webglTexture,Le,Ft+Hi)),z.blitFramebuffer(We,ot,Ne,Pe,Be,yt,Ne,Pe,z.DEPTH_BUFFER_BIT,z.NEAREST);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||ee.has(T)){const It=ee.get(T),ti=ee.get(H);w.bindFramebuffer(z.READ_FRAMEBUFFER,F),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let Rt=0;Rt<ze;Rt++)Vi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.__webglTexture,K,dt+Rt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,K),wt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ti.__webglTexture,Le,Ft+Rt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ti.__webglTexture,Le),K!==0?z.blitFramebuffer(We,ot,Ne,Pe,Be,yt,Ne,Pe,z.COLOR_BUFFER_BIT,z.NEAREST):wt?z.copyTexSubImage3D(Ue,Le,Be,yt,Ft+Rt,We,ot,Ne,Pe):z.copyTexSubImage2D(Ue,Le,Be,yt,We,ot,Ne,Pe);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else wt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Ue,Le,Be,yt,Ft,Ne,Pe,ze,Tt,qt,Ct.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ue,Le,Be,yt,Ft,Ne,Pe,ze,Tt,Ct.data):z.texSubImage3D(Ue,Le,Be,yt,Ft,Ne,Pe,ze,Tt,qt,Ct):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Le,Be,yt,Ne,Pe,Tt,qt,Ct.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Le,Be,yt,Ct.width,Ct.height,Tt,Ct.data):z.texSubImage2D(z.TEXTURE_2D,Le,Be,yt,Ne,Pe,Tt,qt,Ct);w.pixelStorei(z.UNPACK_ROW_LENGTH,Qt),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt),w.pixelStorei(z.UNPACK_SKIP_PIXELS,hn),w.pixelStorei(z.UNPACK_SKIP_ROWS,Dn),w.pixelStorei(z.UNPACK_SKIP_IMAGES,ei),Le===0&&H.generateMipmaps&&z.generateMipmap(Ue),w.unbindTexture()},this.initRenderTarget=function(T){ee.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){N=0,B=0,J=null,w.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}function Gv(){if(typeof matchMedia!="function"||typeof window>"u")return"high";const n=matchMedia("(pointer: coarse)").matches,e=Math.min(innerWidth,innerHeight)<520,t=navigator.hardwareConcurrency||4,i=navigator.deviceMemory||4;return n&&(t<=4||i<=3)||e?"low":n?"medium":"high"}const Vv={low:{msaa:0,halation:!1,pixelRatio:1.25,shadows:!0,shadowMap:1024,shadowDistance:380,islandRings:34,islandSegments:112,waterSegments:64,clouds:9,birds:14,boats:8,trees:240,villagers:12,coveRocks:12,contrails:!0,contrailLength:48,spray:48,spatialAudio:!0,anisotropy:1},medium:{msaa:2,halation:!0,pixelRatio:1.5,shadows:!0,shadowMap:1536,shadowDistance:460,islandRings:40,islandSegments:140,waterSegments:90,clouds:13,birds:22,boats:11,trees:460,villagers:18,coveRocks:18,contrails:!0,contrailLength:64,spray:80,spatialAudio:!0,anisotropy:2},high:{msaa:4,halation:!0,pixelRatio:2,shadows:!0,shadowMap:2048,shadowDistance:520,islandRings:48,islandSegments:168,waterSegments:120,clouds:18,birds:30,boats:14,trees:760,villagers:26,coveRocks:24,contrails:!0,contrailLength:90,spray:120,spatialAudio:!0,anisotropy:4}},Du=Gv(),ct={tier:Du,...Vv[Du]};function Hv(n,e){return ct.degraded?!1:(ct.degraded=!0,ct.pixelRatio=Math.min(ct.pixelRatio,1),n.setPixelRatio(ct.pixelRatio),n.shadowMap.enabled&&(n.shadowMap.enabled=!1,e.traverse(t=>{t.isLight&&t.shadow&&(t.castShadow=!1)})),!0)}const od="covewind.settings",Pc=2,Iu={light:null,sound:!0,camera:0,invertPitch:!0,version:Pc},Wv=["invertPitch"];function Xv(){try{const n=JSON.parse(localStorage.getItem(od)||"{}");if(n.version!==Pc)for(const e of Wv)delete n[e];return{...Iu,...n,version:Pc}}catch{return{...Iu}}}const Da=Xv(),fn={get(n){return Da[n]},set(n,e){Da[n]=e;try{localStorage.setItem(od,JSON.stringify(Da))}catch{}}},ft={grass:7317571,grass2:10274131,grassDry:14206062,maquis:4156984,rock:14472644,rockWarm:13614494,stone:15327176,sand:15916198,pebble:15525590,cream:16774102,red:13190973,navy:2051171,wood:9723967,woodDark:6175786,dark:2637642,white:16775920,leaf:4160060,leaf2:7118405,pine:3104058,roof:12867644,roof2:14449228,yellow:15841354,blue:4161456,shutter:5081694,linen:16314072},vo={sunrise:{label:"Sunrise",sunDir:[.82,.2,-.55],sunColor:16764830,sunIntensity:3.3,skyColor:13228276,groundColor:9203576,hemiIntensity:1.7,skyTop:5078991,skyHorizon:16762536,sunGlow:16753514,glowStrength:.7,cloudLit:16773340,cloudShade:11836098,fog:15126470,fogNear:700,fogFar:3e3,seaShallow:6077636,seaDeep:2775955,exposure:1.04,beam:.085,shadowOpacity:.9},noon:{label:"Noon",sunDir:[.3,.9,.3],sunColor:16774624,sunIntensity:3.9,skyColor:13625599,groundColor:9407082,hemiIntensity:1.9,skyTop:3114716,skyHorizon:12576757,sunGlow:16774876,glowStrength:.28,cloudLit:16777215,cloudShade:10467032,fog:13231856,fogNear:900,fogFar:3400,seaShallow:3396040,seaDeep:1203880,exposure:1,beam:.02,shadowOpacity:1},golden:{label:"Golden hour",sunDir:[-.55,.3,.72],sunColor:16766106,sunIntensity:3.8,skyColor:13952763,groundColor:9728090,hemiIntensity:1.8,skyTop:4887254,skyHorizon:16767398,sunGlow:16751178,glowStrength:.55,cloudLit:16773590,cloudShade:11117256,fog:15325629,fogNear:800,fogFar:3200,seaShallow:4179142,seaDeep:1728412,exposure:1.05,beam:.06,shadowOpacity:1},dusk:{label:"Dusk",sunDir:[-.62,.1,.78],sunColor:16752518,sunIntensity:2.1,skyColor:12036320,groundColor:6969978,hemiIntensity:1.9,skyTop:3952538,skyHorizon:16754592,sunGlow:16743018,glowStrength:.85,cloudLit:16762805,cloudShade:8352688,fog:13214648,fogNear:650,fogFar:2800,seaShallow:5941696,seaDeep:2572166,exposure:1.1,beam:.2,shadowOpacity:.8,night:.35},night:{label:"Night",sunDir:[.45,.42,-.62],sunColor:11124223,sunIntensity:1.1,skyColor:3820682,groundColor:1842228,hemiIntensity:.9,skyTop:462122,skyHorizon:2373742,sunGlow:12176639,glowStrength:.55,cloudLit:10136022,cloudShade:2765155,fog:1779792,fogNear:550,fogFar:2700,seaShallow:1989756,seaDeep:662082,exposure:1.2,beam:.4,shadowOpacity:.7,night:1}},Ia=["sunrise","noon","golden","dusk","night"],sr="golden",rt=Math.PI*2,it=(n,e,t)=>n<e?e:n>t?t:n,tl=(n,e,t)=>n+(e-n)*t,Wt=(n,e,t)=>{const i=it((t-n)/(e-n),0,1);return i*i*(3-2*i)},vt=(n,e,t,i)=>tl(n,e,1-Math.exp(-t*i)),Co=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n));function ms(n,e=.06,t=.35){const i=Math.sign(n),s=Math.abs(n);if(s<=e)return 0;const r=(s-e)/(1-e);return i*tl(r,r*r*r,t)}function qv(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const nl=qv(202369821),V=(n=0,e=1)=>n+nl()*(e-n),Dt=n=>n[Math.floor(nl()*n.length)%n.length],zt=n=>nl()<n,mi=Math.PI*2,vi=0,Yv=-38,vr=(n,e)=>Math.exp(-(n*n)/(e*e));function Lc(n,e){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function jr(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}const Uu=n=>n*n*(3-2*n);function $v(n,e){const t=Math.floor(n),i=Math.floor(e),s=Uu(n-t),r=Uu(e-i),o=jr(t,i),a=jr(t+1,i),c=jr(t,i+1),l=jr(t+1,i+1);return(o+(a-o)*s)*(1-r)+(c+(l-c)*s)*r}function _o(n,e){let t=0,i=.5,s=1;for(let r=0;r<3;r++)t+=$v(n*s,e*s)*i,s*=2.07,i*=.5;return t*2-.875}const nn=[{key:"harbour",name:"Harbour Island",centre:{x:0,z:0},base:330,waves:[[24,3,.8],[16,5,-1.2],[10,8,.4],[5,13,2.1]],bumps:[{theta:.33,size:58,sigma:.22},{theta:2.17,size:-34,sigma:.26}],cliffs:[{theta:.33,strength:.85,sigma:.34},{theta:1.15,strength:.6,sigma:.3},{theta:-.7,strength:.7,sigma:.3}],beaches:[{theta:2.17,strength:.9,sigma:.24}],rise:24,peak:74,roughness:1,ridge:{x:-34,z:24,direction:[.82,-.57],along:250,across:88,height:96},seed:0},{key:"cove",name:"the hidden cove",centre:{x:750,z:-610},base:215,waves:[[18,3,2.2],[12,5,.6],[7,9,-1.1]],bumps:[{theta:-.5,size:-96,sigma:.2},{theta:-.84,size:40,sigma:.12},{theta:-.16,size:40,sigma:.12}],cliffs:[{theta:-.86,strength:.95,sigma:.16},{theta:-.14,strength:.95,sigma:.16},{theta:1.9,strength:.75,sigma:.5}],beaches:[{theta:-.5,strength:.95,sigma:.09}],rise:30,peak:96,roughness:1.1,ridge:{x:710,z:-560,direction:[.3,.95],along:170,across:70,height:62},seed:37},{key:"canyon",name:"the canyon",centre:{x:-700,z:-460},base:250,waves:[[20,4,1.4],[11,7,-.5],[6,11,2.7]],cliffs:[{theta:0,strength:.9,sigma:1.6},{theta:3.14,strength:.9,sigma:1.6}],rise:54,peak:132,roughness:.7,carves:[{from:{x:-880,z:-330},to:{x:-520,z:-600},width:46,wall:26,floor:-7}],seed:101},{key:"falls",name:"the waterfall",centre:{x:-520,z:620},base:235,waves:[[22,3,-.6],[13,6,1.9],[7,10,.2]],bumps:[{theta:1.6,size:-30,sigma:.3}],cliffs:[{theta:1.6,strength:1,sigma:.34},{theta:-1.4,strength:.7,sigma:.5}],beaches:[{theta:-2.6,strength:.85,sigma:.3}],rise:44,peak:96,cliffHeight:88,roughness:.85,seed:211},{key:"atoll",name:"the lagoon",centre:{x:700,z:560},base:205,waves:[[14,4,.9],[9,7,2.4]],beaches:[{theta:0,strength:.9,sigma:2.5},{theta:3.14,strength:.9,sigma:2.5}],rise:46,peak:10,roughness:.35,lagoon:{from:.34,depth:6},seed:313},{key:"chapel",name:"the chapel on the rock",centre:{x:0,z:-820},base:82,waves:[[6,3,.4],[4,5,1.9]],cliffs:[{theta:-1.57,strength:.7,sigma:1.2}],beaches:[{theta:1.57,strength:.9,sigma:.35}],rise:10,peak:12,cliffHeight:16,roughness:.35,seed:401},{key:"fortress",name:"the fortress island",centre:{x:1050,z:0},base:150,waves:[[12,3,2.6],[8,5,.3],[5,9,1.1]],bumps:[{theta:0,size:56,sigma:.17}],cliffs:[{theta:0,strength:1,sigma:.5},{theta:1.9,strength:.85,sigma:.7},{theta:-1.8,strength:.85,sigma:.7}],beaches:[{theta:3.14,strength:.85,sigma:.3}],rise:30,peak:26,cliffHeight:58,roughness:.6,seed:503},{key:"pines",name:"the pine island",centre:{x:-1050,z:80},base:170,waves:[[16,3,1.1],[10,5,-2.2],[6,8,.5]],bumps:[{theta:-2.5,size:-58,sigma:.24}],cliffs:[{theta:.4,strength:.6,sigma:.6}],beaches:[{theta:-2.5,strength:.95,sigma:.32}],rise:22,peak:40,roughness:.9,ridge:{x:-1080,z:120,direction:[.6,.8],along:120,across:70,height:20},seed:607},{key:"stacks",name:"the sea stacks",centre:{x:120,z:880},spires:[{dx:-74,dz:12,radius:24,height:92},{dx:0,dz:-10,radius:31,height:118},{dx:74,dz:18,radius:21,height:78},{dx:28,dz:66,radius:9,height:20}],base:70,waves:[],rise:0,peak:0,roughness:.6,seed:709}],ad=Object.fromEntries(nn.map(n=>[n.key,n])),Ut=n=>ad[n];function pn(n,e,t){const i=ad[n],s=Cn(i,e)*t;return{x:i.centre.x+Math.cos(e)*s,z:i.centre.z+Math.sin(e)*s}}const ki=[],Rs=[],he={villageCentre:{x:-110,z:167},harbour:{x:-158,z:244},villageBeach:{x:-140,z:272},church:{x:-104,z:150},lighthouse:{x:370,z:128},summit:{x:-34,z:24},coveBeach:pn("cove",-.5,.88),coveDock:pn("cove",-.5,1.06),canyonMouth:{x:-880,z:-330},canyonEnd:{x:-520,z:-600},fallsTop:pn("falls",1.6,.98),fallsTarn:pn("falls",1.6,.72),fallsFoot:pn("falls",1.6,1.22),lagoon:{x:700,z:560},grottoMouth:pn("falls",1.6,1.02),grottoCavern:pn("falls",1.6,.5),grottoExit:pn("falls",2.75,1.02),chapel:{x:0,z:-838},chapelQuay:pn("chapel",1.57,1.08),fortress:{x:1030,z:0},fortressArch:{x:1228,z:0},pinesBay:pn("pines",-2.5,.84),wreck:pn("pines",-2.5,1.1),pinesLake:{x:-1020,z:110},stacks:{x:120,z:870},bridge:{x:-700,z:-465}};Ut("harbour").shelves=[{...he.villageCentre,radius:120,height:30,strength:.9},{...he.harbour,radius:62,height:5.5,strength:.95},{...he.villageBeach,radius:44,height:2.8,strength:.9},{...he.lighthouse,radius:40,height:44,strength:.85}];Ut("cove").shelves=[{...he.coveBeach,radius:55,height:3.4,strength:.95}];Ut("falls").shelves=[{...he.fallsTarn,radius:58,height:92,strength:.9},{...he.fallsTop,radius:26,height:90,strength:.85}];Ut("chapel").shelves=[{...he.chapel,radius:36,height:13,strength:.9}];Ut("fortress").shelves=[{...he.fortress,radius:78,height:54,strength:.92}];Ut("pines").shelves=[{...he.pinesBay,radius:40,height:2.6,strength:.9}];for(const[n,e,t]of[[he.church,8,72],[he.lighthouse,9,50]])Rs.push({x:n.x,z:n.z,radius:e,top:0,height:t,pending:!0});function yr(n,e,t,{width:i,wall:s=10,floor:r=-6,roof:o,name:a,glow:c=!1}){const l=Ut(n);l.carves??(l.carves=[]),l.carves.push({from:e,to:t,width:i,wall:s,floor:r,roofed:!0}),ki.push({from:e,to:t,width:i+s*.6,bottom:o,name:a,island:n,glow:c})}const Gi=[{...he.fallsTarn,radius:44,level:90,name:"the tarn above the falls"},{...he.pinesLake,radius:40,level:24,name:"a lake hidden in the pines"}];yr("falls",pn("falls",1.6,1),he.grottoCavern,{width:22,wall:10,roof:27,name:"Behind the waterfall — the grotto"});yr("falls",he.grottoCavern,he.grottoCavern,{width:54,wall:12,roof:34,name:"The blue grotto — land if you like",glow:!0});yr("falls",he.grottoCavern,he.grottoExit,{width:20,wall:10,roof:26,name:"Daylight at the end of the tunnel"});yr("fortress",{x:1228,z:-62},{x:1228,z:62},{width:17,wall:8,roof:30,name:"Through the sea arch"});{const n=Ut("stacks").centre;yr("stacks",{x:n.x,z:n.z-58},{x:n.x,z:n.z+42},{width:13,wall:6,roof:32,name:"Threading the needle"})}{const{x:n,z:e}=he.bridge,t=.6,i=.8,s=52;ki.push({from:{x:n-t*s,z:e-i*s},to:{x:n+t*s,z:e+i*s},width:8,bottom:46,top:66,name:"Under the old bridge",bridge:!0})}for(const n of nn){let e=n.base;for(const[t]of n.waves)e+=Math.abs(t);for(const t of n.bumps??[])e+=Math.max(0,t.size);for(const t of n.spires??[])e=Math.max(e,Math.hypot(t.dx,t.dz)+t.radius);n.reach=e+12,n.reachSq=n.reach*n.reach}function Cn(n,e){let t=n.base;for(const[i,s,r]of n.waves)t+=i*Math.sin(e*s+r);for(const i of n.bumps??[])t+=i.size*vr(Lc(e,i.theta),i.sigma);return t}function Po(n,e){let t=0;for(const s of n.cliffs??[])t=Math.max(t,s.strength*vr(Lc(e,s.theta),s.sigma));let i=0;for(const s of n.beaches??[])i=Math.max(i,s.strength*vr(Lc(e,s.theta),s.sigma));return Math.max(0,Math.min(1,t-i))}function Zv(n,e,t){const i=n.ridge;if(!i)return 0;const[s,r]=i.direction,o=e-i.x,a=t-i.z,c=o*s+a*r,l=o*-r+a*s;return i.height*vr(l,i.across)*vr(c,i.along)}function Kv(n,e,t,i){const s=(e-i.x)*(e-i.x)+(t-i.z)*(t-i.z),r=Math.exp(-s/(i.radius*i.radius))*i.strength;return n*(1-r)+i.height*r}function cd(n,e,t,i){const s=i.x-t.x,r=i.z-t.z,o=n-t.x,a=e-t.z,c=s*s+r*r||1,l=Math.max(0,Math.min(1,(o*s+a*r)/c));return Math.hypot(o-s*l,a-r*l)}function Nu(n,e,t,i){const s=cd(e,t,i.from,i.to);if(s>i.width+i.wall)return n;const r=1-_r(i.width,i.width+i.wall,s);return n*(1-r)+i.floor*r}function _r(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function Jv(n,e,t){let i=-1/0;for(const s of n.spires){const r=Math.hypot(e-n.centre.x-s.dx,t-n.centre.z-s.dz),o=_o((e+n.seed)*.05,(t-n.seed)*.05)*3,a=s.radius+o;if(r>=a+6){i=Math.max(i,-2-Math.min(30,(r-a)*.4));continue}const c=1-_r(a-3,a+4,r),l=1-Math.pow(r/(a+4),3)*.28,u=Math.floor(s.height*l*.2)/.2;i=Math.max(i,(u*.3+s.height*l*.7)*c-2*(1-c))}return i}function Qv(n,e,t,i=!1){if(n.spires){let x=Jv(n,e,t);if(!i)for(const m of n.carves??[])x=Nu(x,e,t,m);return x}const s=e-n.centre.x,r=t-n.centre.z,o=Math.hypot(s,r),a=Math.atan2(r,s),c=Cn(n,a),l=Po(n,a);if(o>=c){const x=o-c;return-1.5-Math.min(34,x*(.1+l*.5))}const u=1-o/c,h=1-Math.exp(-u*(6+l*150)),d=u*u*(2.2-1.2*u);let f=(n.rise*u+n.peak*d+l*(n.cliffHeight??44))*h;f+=Zv(n,e,t)*h;const g=n.seed;if(f+=_o((e+g)*.0052,(t-g)*.0052)*32*n.roughness*u,f+=_o((e+g)*.0145+11.3,(t-g)*.0145-4.7)*17*n.roughness*u*(.5+u*.7),f+=_o((e+g)*.027,(t-g)*.027)*5.5*n.roughness*u*(.4+l*.9),n.lagoon){const x=_r(n.lagoon.from-.12,n.lagoon.from+.14,u);f=f*(1-x)+-n.lagoon.depth*x}for(const x of n.shelves??[])f=Kv(f,e,t,x);for(const x of Gi)f=jv(f,e,t,x);for(const x of n.carves??[])i&&x.roofed||(f=Nu(f,e,t,x));return f}function jv(n,e,t,i){const s=Math.hypot(e-i.x,t-i.z);if(s>i.radius*1.8)return n;if(s>i.radius){const a=i.level+1.6-Math.max(0,s-i.radius*1.25)*.55;return Math.max(n,a)}const r=i.level+1.2+(s-i.radius)*.5,o=i.level-5*_r(i.radius,i.radius*.85,s);return Math.min(n,Math.max(o,Math.min(r,i.level-.8+_r(i.radius-2,i.radius+6,s)*3)))}function Fe(n,e,t=!1){let i=Yv;for(const s of nn){const r=n-s.centre.x,o=e-s.centre.z;if(r*r+o*o>s.reachSq)continue;const a=Qv(s,n,e,t);a>i&&(i=a)}return i}function Ho(n,e){for(const t of Gi){const i=n-t.x,s=e-t.z;if(i*i+s*s<t.radius*t.radius*1.2)return t}return null}function Wo(n,e){return Ho(n,e)?.level??vi}function il(n,e){let t=-1/0;for(const i of Rs){const s=n-i.x,r=e-i.z;s*s+r*r<i.radius*i.radius&&i.top>t&&(t=i.top)}return t}function ld(n,e){return Math.max(Fe(n,e),il(n,e))}function Sr(n,e){for(const t of ki)if(cd(n,e,t.from,t.to)<t.width)return t;return null}function sl(n,e,t){return n.top??Fe(e,t,!0)}function Lo(n,e){return Math.max(Fe(n,e),Wo(n,e),il(n,e))}function rr(n,e,t){const i=Sr(n,t);return i&&e<i.bottom?Math.max(Fe(n,t),vi):i?Math.max(Lo(n,t),sl(i,n,t)):Lo(n,t)}const Ua={x:0,z:0};function Xo(n,e,t=6){const i=Fe(n+t,e)-Fe(n-t,e),s=Fe(n,e+t)-Fe(n,e-t);return Ua.x=i/(2*t),Ua.z=s/(2*t),Ua}function rl(n,e){let t=null;for(const i of nn){const s=n-i.centre.x,r=e-i.centre.z,o=Math.hypot(s,r),a=Math.atan2(r,s);let c=o-Cn(i,a);if(i.spires){c=1/0;for(const l of i.spires)c=Math.min(c,Math.hypot(s-l.dx,r-l.dz)-l.radius)}(!t||c<t.distance)&&(t={spec:i,distance:c,theta:a,r:o})}return t}function ud(n,e){return rl(n,e).distance}function e_(n,e){return Fe(n,e)>vi}const t_=nn.reduce((n,e)=>Math.max(n,Math.hypot(e.centre.x,e.centre.z)+e.reach),0);function hd(){const n=i=>i.toFixed(4),e=nn.map((i,s)=>{if(i.spires){const a=i.spires.map(c=>`best = min(best, length(p - vec2(${n(i.centre.x+c.dx)}, ${n(i.centre.z+c.dz)})) - ${n(c.radius)});`).join(`
    `);return`
  float coast${s}(vec2 p) {
    float best = 1.0e6;
    ${a}
    return best;
  }`}const r=i.waves.map(([a,c,l])=>`r += ${n(a)} * sin(th * ${n(c)} + ${n(l)});`).join(`
      `),o=(i.bumps??[]).map(a=>`r += ${n(a.size)} * cw_gauss(cw_dAngle(th, ${n(a.theta)}), ${n(a.sigma)});`).join(`
      `);return`
  float coast${s}(vec2 p) {
    vec2 d = p - vec2(${n(i.centre.x)}, ${n(i.centre.z)});
    float dist = length(d);
    if (dist > ${n(i.reach+300)}) return dist - ${n(i.base)};
    float th = atan(d.y, d.x);
    float r = ${n(i.base)};
    ${r}
    ${o}
    return dist - r;
  }`}),t=nn.map((i,s)=>`  best = min(best, coast${s}(p));`).join(`
`);return`
  float cw_dAngle(float a, float b){ return atan(sin(a - b), cos(a - b)); }
  float cw_gauss(float d, float s){ return exp(-(d * d) / (s * s)); }
  ${e.join(`
`)}
  float coastDistance(vec2 p) {
    float best = 1.0e6;
${t}
    return best;
  }`}for(const n of Rs)n.pending&&(n.top=Fe(n.x,n.z)+n.height,delete n.pending);const n_=Object.freeze(Object.defineProperty({__proto__:null,ARCHIPELAGO_RADIUS:t_,ISLANDS:nn,LAKES:Gi,OBSTACLES:Rs,OVERHANGS:ki,PLACES:he,SEA_LEVEL:vi,TAU:mi,ceilingAt:Sr,cliffFactorAt:Po,coastDistance:ud,coastlineGLSL:hd,isOverLand:e_,island:Ut,islandRadiusAt:Cn,lakeAt:Ho,nearestCoast:rl,obstacleHeightAt:il,roofTopAt:sl,solidHeightAt:ld,surfaceBelow:rr,surfaceHeightAt:Lo,terrainGradient:Xo,terrainHeightAt:Fe,waterLevelAt:Wo},Symbol.toStringTag,{value:"Module"})),i_=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,s_=`
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

    // Below the horizon, the sky fades into the sea haze.
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
`;function r_(n){const e=new Xt({side:tn,depthWrite:!1,fog:!1,vertexShader:i_,fragmentShader:s_,uniforms:{topColor:{value:new _e(4887254)},horizonColor:{value:new _e(16767398)},glowColor:{value:new _e(16751178)},cloudColor:{value:new _e(16773590)},sunDir:{value:new L(-.55,.3,.72)},glowStrength:{value:.5},time:{value:0},night:{value:0}}}),t=new D(new bt(3600,32,20),e);return t.frustumCulled=!1,t.renderOrder=-1,n.add(t),{mesh:t,uniforms:e.uniforms,follow(i){t.position.copy(i)}}}function qo(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new xt;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Fu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const g=Fu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Fu(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new gn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const o_=`
  varying vec3 vNormal;
  varying vec3 vWorld;
  varying float vHeight;
  attribute float height;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vHeight = height;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,a_=`
  uniform vec3 litColor;
  uniform vec3 shadeColor;
  uniform vec3 glowColor;
  uniform vec3 sunDir;
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;
  uniform float maxFog;
  varying vec3 vNormal;
  varying vec3 vWorld;
  varying float vHeight;

  void main() {
    vec3 n = normalize(vNormal);
    vec3 l = normalize(sunDir);
    vec3 v = normalize(cameraPosition - vWorld);

    // Wrap the light a little so the terminator sits round the side of each
    // puff, then step it: shade, a mid-tone band, and full sun.
    float d = dot(n, l) * 0.6 + 0.4;
    // Height in the cloud matters as much as the sun: bottoms stay in shade.
    d += (vHeight - 0.35) * 0.55;
    float band = smoothstep(0.28, 0.32, d) * 0.5 + smoothstep(0.6, 0.64, d) * 0.5;
    vec3 col = mix(shadeColor, litColor, band);

    // Silver lining where the sun is behind the cloud.
    float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    float backlit = max(0.0, dot(-v, l));
    col += (litColor * 0.25 + glowColor * 0.35) * rim * (0.35 + backlit * 0.9);

    float fog = smoothstep(fogNear, fogFar, length(cameraPosition - vWorld)) * maxFog;
    col = mix(col, fogColor, fog);
    gl_FragColor = vec4(col, 1.0);
  }
`;function Ou(n){return new Xt({vertexShader:o_,fragmentShader:a_,uniforms:{litColor:{value:new _e(16773590)},shadeColor:{value:new _e(11117256)},glowColor:{value:new _e(16751178)},sunDir:{value:new L(-.55,.3,.72)},fogColor:{value:new _e(15325629)},fogNear:{value:900},fogFar:{value:3200},maxFog:{value:n}}})}function c_(n,e,t){const i=new Bi(n,e),s=i.attributes.position,r=new L;for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o);const a=r.clone().normalize(),c=Math.sin(a.x*5.1+t)*Math.sin(a.y*4.3+t*1.7)*Math.sin(a.z*4.7-t);r.multiplyScalar(1+c*.12),s.setXYZ(o,r.x,r.y,r.z)}return i.computeVertexNormals(),i}function zu({width:n=60,tower:e=1,detail:t=2}){const i=[],s=Math.round(7+e*5),r=n*.55*e;for(let u=0;u<s;u++){const h=u/(s-1),d=n*(1-h*.7)*.5,f=n*(.2+(1-h)*.12)*V(.8,1.2),g=V(-d,d),x=V(-d*.6,d*.6),m=h*r+f*.35,p=c_(f,t,V(0,20));p.translate(g,m,x),i.push(p)}const o=qo(i,!1);for(const u of i)u.dispose();const a=o.attributes.position;let c=0;for(let u=0;u<a.count;u++)c=Math.max(c,a.getY(u));const l=new Float32Array(a.count);for(let u=0;u<a.count;u++){const h=a.getY(u);h<0&&a.setY(u,h*.12),l[u]=Math.max(0,h)/c}return o.setAttribute("height",new gn(l,1)),o.computeVertexNormals(),o.computeBoundingSphere(),o}function l_(n){const e=Ou(.85),t=Ou(.55),i=ct.tier==="low"?1:2,s=[];for(let c=0;c<ct.clouds;c++){const l=V(40,95),u=new D(zu({width:l,tower:V(.6,1.3),detail:i}),e),h=c%3===0;u.position.set(V(-1600,1600),h?V(430,520):V(190,360),V(-1600,1600)),h&&u.scale.set(V(1.8,2.6),V(.8,1.1),V(1.8,2.6)),u.rotation.y=V(0,rt),n.add(u),s.push({group:u,drift:V(1.2,3),bob:V(0,rt)})}const r=[],o=ct.tier==="low"?7:12;for(let c=0;c<o;c++){const l=c/o*rt+V(-.2,.2),u=V(2500,3100),h=V(380,700),d=new D(zu({width:h,tower:V(1.1,1.9),detail:1}),t);d.position.set(Math.cos(l)*u,V(-40,30),Math.sin(l)*u),d.rotation.y=V(0,rt),d.frustumCulled=!1,n.add(d),r.push(d)}const a=[e,t];return{clouds:s,towers:r,materials:a,setLight({lit:c,shade:l,glow:u,sunDir:h,fog:d,fogNear:f,fogFar:g}){for(const x of a)x.uniforms.litColor.value.copy(c),x.uniforms.shadeColor.value.copy(l),x.uniforms.glowColor.value.copy(u),x.uniforms.sunDir.value.copy(h),x.uniforms.fogColor.value.copy(d);e.uniforms.fogNear.value=f,e.uniforms.fogFar.value=g+600,t.uniforms.fogNear.value=f*1.6,t.uniforms.fogFar.value=g*1.4},inside(c){let l=0;for(const u of s){const h=u.group,d=h.geometry.boundingSphere,f=Math.max(h.scale.x,h.scale.y,h.scale.z),g=d.radius*f*.7,x=h.position.x+d.center.x*h.scale.x,m=h.position.y+d.center.y*h.scale.y,p=h.position.z+d.center.z*h.scale.z,M=Math.hypot(c.x-x,(c.y-m)*1.4,c.z-p);M<g&&(l=Math.max(l,Math.min(1,(g-M)/(g*.45))))}return l},follow(c){var l;for(const u of r)(l=u.userData).base??(l.base=u.position.clone()),u.position.x=u.userData.base.x+c.x,u.position.z=u.userData.base.z+c.z}}}function Di(n,e,t){return 1*Math.sin(n*.018+t*.7)+.65*Math.sin(e*.024-t*.9)+.8*Math.sin((n+e)*.011+t*.45)+.35*Math.sin((n-e)*.031-t*1.3)}const dd=`
  float waveAt(vec2 p, float t) {
    return 1.00 * sin(p.x * 0.018 + t * 0.70)
         + 0.65 * sin(p.y * 0.024 - t * 0.90)
         + 0.80 * sin((p.x + p.y) * 0.011 + t * 0.45)
         + 0.35 * sin((p.x - p.y) * 0.031 - t * 1.30);
  }
  vec3 waveNormal(vec2 p, float t) {
    float dx = 1.00 * 0.018 * cos(p.x * 0.018 + t * 0.70)
             + 0.80 * 0.011 * cos((p.x + p.y) * 0.011 + t * 0.45)
             + 0.35 * 0.031 * cos((p.x - p.y) * 0.031 - t * 1.30);
    float dy = 0.65 * 0.024 * cos(p.y * 0.024 - t * 0.90)
             + 0.80 * 0.011 * cos((p.x + p.y) * 0.011 + t * 0.45)
             - 0.35 * 0.031 * cos((p.x - p.y) * 0.031 - t * 1.30);
    return normalize(vec3(-dx * 8.0, 1.0, -dy * 8.0));
  }
`,u_=`
  uniform float time;
  varying vec3 vWorld;
  varying float vWave;
  ${dd}
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    float w = waveAt(world.xz, time);
    world.y += w;
    vWave = w;
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,h_=`
  uniform float time;
  uniform vec3 shallowColor;
  uniform vec3 deepColor;
  uniform vec3 foamColor;
  uniform vec3 sunDir;
  uniform vec3 sunColor;
  uniform vec3 skyColor;
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;
  varying vec3 vWorld;
  varying float vWave;
  ${dd}
  __COASTLINE__
  __ROOFS__

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }

  // Cel caustics: the bright net of light on a sandy bottom, drawn as lines.
  float caustic(vec2 p, float t) {
    vec2 q = p * 0.09;
    float a = sin(q.x + sin(q.y * 1.3 + t * 0.7) * 1.4 + t * 0.4);
    float b = sin(q.y * 1.1 + sin(q.x * 0.9 - t * 0.6) * 1.4 - t * 0.3);
    float c = abs(a + b);
    return smoothstep(0.22, 0.0, c);
  }

  void main() {
    vec2 p = vWorld.xz;
    float coast = coastDistance(p);
    float dist = length(cameraPosition - vWorld);

    // Depth bands, the way the Adriatic sits over white stone: glassy
    // turquoise in the shallows, a clean step to blue, ink out in the channel.
    float depth = smoothstep(-20.0, 380.0, coast);
    float stepped = floor(depth * 4.0 + noise(p * 0.01) * 0.6) / 4.0;
    depth = mix(depth, stepped, 0.45);
    vec3 col = mix(shallowColor * 1.08, deepColor, depth);

    // Sea floor showing through the shallows.
    float shallow = 1.0 - smoothstep(0.0, 90.0, coast);
    col += vec3(0.85, 1.0, 0.95) * caustic(p, time) * shallow * 0.22 * (1.0 - smoothstep(300.0, 900.0, dist));

    vec3 normal = waveNormal(p, time);
    // Small ripples on top of the swell, for the glitter.
    normal = normalize(normal + vec3(noise(p * 0.12 + time * 0.4) - 0.5, 0.0, noise(p * 0.12 - time * 0.35 + 7.0) - 0.5) * 0.35);
    vec3 viewDir = normalize(cameraPosition - vWorld);

    // Sky in the surface at grazing angles.
    float fres = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    col = mix(col, skyColor, fres * 0.35);

    // Sun glitter, drawn as hard white sparks rather than a smooth sheen.
    vec3 halfDir = normalize(normalize(sunDir) + viewDir);
    float nh = max(dot(normal, halfDir), 0.0);
    float sheen = pow(nh, 40.0);
    col += sunColor * sheen * 0.18;
    float sparkle = step(0.997, nh) * step(0.72, noise(p * 1.7 + time * 1.3));
    col += vec3(1.0) * sparkle * 1.6;

    // Whitecaps: little brush flecks on the swell crests, out in open water.
    float crest = smoothstep(1.4, 2.2, vWave) * step(0.8, noise(p * 0.22 + vec2(time * 0.5, 0.0)));
    col = mix(col, foamColor, crest * 0.55 * smoothstep(20.0, 120.0, coast) * (1.0 - smoothstep(500.0, 1400.0, dist)));

    // Surf: a clean ribbon on the shore, then drawn foam lines that roll in
    // parallel to the coast, the way waves are drawn in a picture book.
    float swell = sin(time * 0.55 + coast * 0.09) * 3.0;
    float edge = coast + swell;
    float ripple = noise(p * 0.08 + time * 0.2);
    float surf = smoothstep(9.0 + ripple * 6.0, 5.0 + ripple * 4.0, edge) * smoothstep(-9.0, -1.0, edge);
    float lines = fract((coast - time * 5.0) / 16.0 + ripple * 0.35);
    float line = smoothstep(0.08, 0.0, abs(lines - 0.5) - 0.02);
    line *= smoothstep(64.0, 14.0, coast) * step(0.0, coast) * step(0.35, noise(p * 0.05 + 3.0));
    col = mix(col, foamColor, clamp(surf * 0.95 + line * 0.7, 0.0, 1.0));

    // Under rock the sea is in shade — except in the grotto, where sunlight
    // coming up through the water turns it an impossible, glowing blue.
    vec2 cave = roofShade(p);
    float glint = 0.6 + 0.4 * noise(p * 0.15 + time * 0.6);
    col = mix(col, col * vec3(0.3, 0.36, 0.48), cave.x * (1.0 - cave.y));
    col = mix(col, vec3(0.12, 0.62, 1.25) * glint + caustic(p * 2.0, time) * 0.3, cave.y);

    float fogAmount = smoothstep(fogNear, fogFar, dist);
    col = mix(col, fogColor, fogAmount);

    float alpha = mix(0.82, 1.0, smoothstep(0.0, 60.0, coast));
    gl_FragColor = vec4(col, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function d_(){const n=t=>t.toFixed(3);return`
  float cw_segment(vec2 p, vec2 a, vec2 b) {
    vec2 v = b - a;
    float t = clamp(dot(p - a, v) / max(dot(v, v), 1e-3), 0.0, 1.0);
    return length(p - a - v * t);
  }
  vec2 roofShade(vec2 p) {
    float shade = 0.0;
    float glow = 0.0;
    ${ki.filter(t=>t.top==null).map(t=>{const i=`cw_segment(p, vec2(${n(t.from.x)}, ${n(t.from.z)}), vec2(${n(t.to.x)}, ${n(t.to.z)}))`,s=`smoothstep(${n(t.width)}, ${n(t.width-10)}, ${i})`;return t.glow?`glow = max(glow, ${s});`:`shade = max(shade, ${s});`}).join(`
    `)}
    return vec2(max(shade, glow), glow);
  }`}function f_(n){const t=new Xt({transparent:!0,depthWrite:!0,side:en,uniforms:{time:{value:0},shallowColor:{value:new _e(4958390)},deepColor:{value:new _e(1927806)},foamColor:{value:new _e(16643811)},sunDir:{value:new L(-.55,.34,.72)},sunColor:{value:new _e(16769198)},skyColor:{value:new _e(12576757)},fogColor:{value:new _e(14143156)},fogNear:{value:540},fogFar:{value:1270}},vertexShader:u_,fragmentShader:h_.replace("__COASTLINE__",hd()).replace("__ROOFS__",d_())}),i=ct.waterSegments,s=new D(new _i(6400,6400,i,i),t);return s.rotation.x=-Math.PI/2,s.position.y=0,s.renderOrder=1,n.add(s),{mesh:s,uniforms:t.uniforms}}function fd(n){const e=new Uint8Array(n.map(i=>Math.round(i*255))),t=new Zc(e,n.length,1,Oo);return t.minFilter=Bt,t.magFilter=Bt,t.generateMipmaps=!1,t.needsUpdate=!0,t}const p_=fd([.2,.52,.86,1]),m_=fd([.3,.46,.64,.82,.94,1]);function Se(n,e={}){const t=new Lp({color:n,gradientMap:e.soft?m_:p_,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side??gi,vertexColors:!!e.vertexColors});return t.flatShading=e.flat??!1,e.emissive!=null&&t.emissive.setHex(e.emissive),t}const eo={flat:!0},U={grass:Se(ft.grass,{soft:!0}),grass2:Se(ft.grass2,{soft:!0}),rock:Se(ft.rock,eo),rockWarm:Se(ft.rockWarm,eo),sand:Se(ft.sand),cream:Se(ft.cream),red:Se(ft.red),navy:Se(ft.navy),wood:Se(ft.wood),woodDark:Se(ft.woodDark),dark:Se(ft.dark),white:Se(ft.white),leaf:Se(ft.leaf,{soft:!0}),leaf2:Se(ft.leaf2,{soft:!0}),pine:Se(ft.pine,{soft:!0}),roof:Se(ft.roof),roof2:Se(ft.roof2),yellow:Se(ft.yellow),blue:Se(ft.blue),green:Se(ft.shutter),linen:Se(ft.linen),skin:Se(15778458),terracotta:Se(14256991),plaster:Se(16048056),plaster2:Se(15519644),plaster3:Se(15776154),plaster4:Se(16181711),stone:Se(ft.stone,eo),stoneDark:Se(11970444,eo),brass:Se(14263361),glass:Se(10475238,{emissive:1915460}),lamp:Se(16773824,{emissive:16769946}),window:Se(2637642,{emissive:16757335}),navRed:Se(14168112,{emissive:16722474}),navGreen:Se(3124826,{emissive:2817898}),navWhite:Se(16777215,{emissive:16777215})};U.window.emissiveIntensity=0;for(const n of[U.navRed,U.navGreen,U.navWhite])n.emissiveIntensity=.4;const g_=[U.cream,U.plaster,U.plaster2,U.plaster3,U.plaster4,U.stone],x_=[U.roof,U.roof2,U.terracotta],v_=[U.green,U.blue,U.green,U.woodDark],Cs=[U.linen,U.white,U.blue,U.red,U.yellow],ks=["sunColor","skyColor","groundColor","skyTop","skyHorizon","sunGlow","cloudLit","cloudShade","fog","seaShallow","seaDeep"],Bu=["sunIntensity","hemiIntensity","glowStrength","fogNear","fogFar","exposure","beam","night"];function __(n,e,t,i,s=null){const r=new zp(16769198,4);r.castShadow=ct.shadows;const o=ct.shadowDistance;r.shadow.mapSize.set(ct.shadowMap,ct.shadowMap),r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.camera.near=10,r.shadow.camera.far=1900,r.shadow.bias=-5e-4,r.shadow.normalBias=2.2,n.add(r),n.add(r.target);const a=new Up(14676479,9138775,2.05);n.add(a),n.fog=new $c(14143156,540,1270);const c={sunDir:new L,target:new L};for(const m of ks)c[m]=new _e;const l={};for(const m of ks)l[m]=new _e;let u=sr,h=vo[sr];const d=new L;function f(m){h=m,c.target.set(...m.sunDir).normalize();for(const p of ks)l[p].setHex(m[p==="fog"?"fog":p])}function g(){c.sunDir.copy(c.target);for(const m of ks)c[m].copy(l[m]);for(const m of Bu)c[m]=h[m]??0;x()}function x(){r.color.copy(c.sunColor),r.intensity=c.sunIntensity,a.color.copy(c.skyColor),a.groundColor.copy(c.groundColor),a.intensity=c.hemiIntensity,r.position.copy(c.sunDir).multiplyScalar(900).add(d),r.target.position.copy(d),r.target.updateMatrixWorld(),n.fog.color.copy(c.fog),n.fog.near=c.fogNear,n.fog.far=c.fogFar,e.toneMappingExposure=c.exposure,t.uniforms.topColor.value.copy(c.skyTop),t.uniforms.horizonColor.value.copy(c.skyHorizon),t.uniforms.glowColor.value.copy(c.sunGlow),t.uniforms.glowStrength.value=c.glowStrength,t.uniforms.sunDir.value.copy(c.sunDir),i.uniforms.shallowColor.value.copy(c.seaShallow),i.uniforms.deepColor.value.copy(c.seaDeep),i.uniforms.sunColor.value.copy(c.sunColor),i.uniforms.sunDir.value.copy(c.sunDir),i.uniforms.fogColor.value.copy(c.fog),i.uniforms.fogNear.value=c.fogNear,i.uniforms.fogFar.value=c.fogFar,i.uniforms.skyColor.value.copy(c.skyHorizon).lerp(c.skyTop,.35),t.uniforms.cloudColor.value.copy(c.cloudLit),t.uniforms.night.value=c.night,U.window.emissiveIntensity=c.night*2.2,U.lamp.emissiveIntensity=1+c.night*3;for(const m of[U.navRed,U.navGreen,U.navWhite])m.emissiveIntensity=.4+c.night*3.2;s?.setLight({lit:c.cloudLit,shade:c.cloudShade,glow:c.sunGlow,sunDir:c.sunDir,fog:c.fog,fogNear:c.fogNear,fogFar:c.fogFar})}return f(vo[sr]),g(),{sun:r,hemi:a,get name(){return u},get label(){return h.label},get beam(){return c.beam},get night(){return c.night},set(m,{instant:p=!1}={}){const M=vo[m];return M&&(u=m,f(M),p&&g()),u},follow(m){d.set(m.x,0,m.z)},update(m){c.sunDir.lerp(c.target,1-Math.exp(-2.6*m)).normalize();for(const M of ks)c[M].lerp(l[M],1-Math.exp(-2.6*m));for(const M of Bu)c[M]=vt(c[M],h[M]??0,2.6,m);x()}}}function pd(n,e){for(let t=n;t&&t!==e;t=t.parent)if(t.userData?.dynamic)return!0;return!1}function Ps(n){n.updateMatrixWorld(!0);const e=new Map,t=[];n.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material)||pd(s,n))return;let r=s.geometry.clone();r.applyMatrix4(s.matrixWorld),r.index&&(r=r.toNonIndexed());for(const a of Object.keys(r.attributes))a!=="position"&&a!=="normal"&&r.deleteAttribute(a);r.attributes.normal||r.computeVertexNormals();const o=`${s.material.uuid}|${s.castShadow}|${s.receiveShadow}|${s.renderOrder}`;e.has(o)||e.set(o,{material:s.material,parts:[],cast:s.castShadow,receive:s.receiveShadow,order:s.renderOrder}),e.get(o).parts.push(r),t.push(s)});for(const s of t)s.removeFromParent();const i=[];for(const s of e.values()){const r=qo(s.parts,!1);for(const c of s.parts)c.dispose();if(!r)continue;r.computeBoundingSphere();const o=new D(r,s.material);o.castShadow=s.cast,o.receiveShadow=s.receive,o.renderOrder=s.order,o.matrixAutoUpdate=!1;let a=n;for(;a.parent;)a=a.parent;a.add(o),i.push(o)}return i}function Ss(n){n.updateMatrixWorld(!0);const e=n.matrixWorld.clone().invert(),t=new Map,i=[];n.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material)||pd(s,n))return;let r=s.geometry.clone();r.applyMatrix4(e.clone().multiply(s.matrixWorld)),r.index&&(r=r.toNonIndexed());for(const a of Object.keys(r.attributes))a!=="position"&&a!=="normal"&&r.deleteAttribute(a);const o=`${s.material.uuid}|${s.castShadow}|${s.receiveShadow}|${s.renderOrder}`;t.has(o)||t.set(o,{material:s.material,parts:[],cast:s.castShadow,receive:s.receiveShadow,order:s.renderOrder}),t.get(o).parts.push(r),i.push(s)});for(const s of i)s.removeFromParent();for(const s of t.values()){const r=qo(s.parts,!1);for(const a of s.parts)a.dispose();if(!r)continue;r.computeBoundingSphere();const o=new D(r,s.material);o.castShadow=s.cast,o.receiveShadow=s.receive,o.renderOrder=s.order,n.add(o)}return n}const Sn={wetSand:new _e(13612163),sand:new _e(ft.sand),pebble:new _e(ft.pebble),grass:new _e(ft.grass),grass2:new _e(ft.grass2),dry:new _e(ft.grassDry),maquis:new _e(ft.maquis),rock:new _e(ft.rock),rockWarm:new _e(ft.rockWarm)},M_=new _e;function md(n,e,t,i,s){const r=.5+.5*Math.sin(n*.0075+e*.0061+1.3),o=.5+.5*Math.sin(n*.021+e*.017-.6)*Math.sin(e*.013-n*.009),a=.5+.5*Math.sin(n*.055-e*.047)*Math.sin(e*.038+.7),c=(g,x)=>Wt(x-.06,x+.06,g);s.copy(Sn.grass).lerp(Sn.grass2,c(r*.6+o*.4,.5)*.8),s.lerp(Sn.dry,c(o,.62)*Wt(14,60,t)*.85),s.lerp(Sn.dry,Wt(70,150,t)*.6);const l=c(a*.55+r*.45,.66)*(1-Wt(90,150,t));s.lerp(Sn.maquis,l*.9);const u=.5+.5*Math.sin(t*.42+n*.004),h=M_.copy(Sn.rock).lerp(Sn.rockWarm,c(u,.55)*.7),d=Math.max(Wt(.85,1.25,i),c(o,.7)*Wt(110,160,t));s.lerp(h,Math.min(d,1));const f=Wt(6.5,3.5,t)*Wt(1.4,.7,i);return s.lerp(r>.5?Sn.pebble:Sn.sand,f),s.lerp(Sn.wetSand,Wt(1.8,.2,t)*Wt(1.1,.5,i)),(1-Math.min(d,1))*(1-f)*(1-l*.6)}const gd={time:{value:0}},xd=(()=>{const n=Se(16777215,{vertexColors:!0,soft:!0});return n.onBeforeCompile=e=>{e.uniforms.time=gd.time,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float grassy;
varying float vGrassy;
varying vec2 vGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGrassy = grassy;
vGround = (modelMatrix * vec4(position, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float time;
varying float vGrassy;
varying vec2 vGround;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // Gusts running over a meadow: bright bands that travel downwind.
          vec2 g = vGround;
          float a = sin(g.x * 0.021 + g.y * 0.013 - time * 1.1);
          float b = sin(g.x * 0.047 - g.y * 0.031 - time * 1.7 + a * 1.4);
          float gust = smoothstep(0.55, 0.95, a * 0.6 + b * 0.4);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.16 + vec3(0.03, 0.035, 0.0), gust * vGrassy * 0.75);
        }`)},n})();function ku(n,{cx:e,cz:t,radiusAt:i,rings:s,segs:r,name:o}){const a=[],c=[],l=[],u=[],h=new _e;for(let g=0;g<=s;g++){const x=g/s,m=1-Math.pow(1-x,1.25);for(let p=0;p<r;p++){const M=p/r*mi,y=i(M)*m,_=e+Math.cos(M)*y,S=t+Math.sin(M)*y;let b;g===s?b=-40:(b=Fe(_,S),b+=Math.sin(p*12.37+g*2.1)*.35*(1-m)),a.push(_,b,S);const A=Xo(_,S,5),v=Math.hypot(A.x,A.z),E=md(_,S,b,v,h);g===s&&h.lerp(Sn.rock,.7),c.push(h.r,h.g,h.b),l.push(g===s?0:E)}}for(let g=0;g<s;g++)for(let x=0;x<r;x++){const m=(x+1)%r,p=g*r+x,M=g*r+m,y=(g+1)*r+x,_=(g+1)*r+m;u.push(p,M,y,M,_,y)}const d=new xt;d.setAttribute("position",new Ze(a,3)),d.setAttribute("color",new Ze(c,3)),d.setAttribute("grassy",new Ze(l,1)),d.setIndex(u),d.computeVertexNormals();const f=new D(d,xd);return f.receiveShadow=!0,f.castShadow=!0,f.name=o,n.add(f),f}function y_(n,e){if(e.spires){const i=new je;n.add(i);for(const s of e.spires)ku(i,{cx:e.centre.x+s.dx,cz:e.centre.z+s.dz,radiusAt:()=>s.radius+14,rings:Math.round(ct.islandRings*.6),segs:Math.round(ct.islandSegments*.45),name:`island:${e.key}`});return i}const t=e.base/300;return ku(n,{cx:e.centre.x,cz:e.centre.z,radiusAt:i=>Cn(e,i),rings:Math.max(20,Math.round(ct.islandRings*(.6+t*.4))),segs:Math.max(64,Math.round(ct.islandSegments*(.55+t*.45))),name:`island:${e.key}`})}const S_=Se(7301752,{flat:!0});function w_(n,e){const t=e.to.x-e.from.x,i=e.to.z-e.from.z,s=Math.hypot(t,i),r=s?t/s:1,o=s?i/s:0,a=e.width+10,c=3,l=Math.ceil((s+a*2)/c),u=Math.ceil(a*2/c),h=[],d=[],f=[],g=[],x=[],m=new _e;for(let v=0;v<=l;v++)for(let E=0;E<=u;E++){const R=-a+v/l*(s+a*2),C=-a+E/u*a*2,I=e.from.x+r*R-o*C,X=e.from.z+o*R+r*C,F=Fe(I,X,!0),k=Math.max(F+.35,e.bottom);h.push(I,k,X),g.push(I,e.bottom+Math.sin(I*.21)*Math.sin(X*.17)*1.4,X);const N=5,B=Math.hypot(Fe(I+N,X,!0)-Fe(I-N,X,!0),Fe(I,X+N,!0)-Fe(I,X-N,!0))/(2*N),J=md(I,X,F,B,m);d.push(m.r,m.g,m.b),f.push(J),x.push(F>e.bottom+2)}const p=[],M=[],y=(v,E)=>v*(u+1)+E;for(let v=0;v<l;v++)for(let E=0;E<u;E++){const R=[y(v,E),y(v+1,E),y(v,E+1),y(v+1,E+1)];R.some(C=>x[C])&&(p.push(R[0],R[2],R[1],R[1],R[2],R[3]),M.push(R[0],R[1],R[2],R[1],R[3],R[2]))}const _=new xt;_.setAttribute("position",new Ze(h,3)),_.setAttribute("color",new Ze(d,3)),_.setAttribute("grassy",new Ze(f,1)),_.setIndex(p),_.computeVertexNormals();const S=new D(_,xd);S.receiveShadow=!0,S.castShadow=!0,n.add(S);const b=new xt;b.setAttribute("position",new Ze(g,3)),b.setIndex(M),b.computeVertexNormals();const A=new D(b,S_);A.castShadow=!0,n.add(A)}const b_=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,E_=`
  uniform float time;
  uniform vec3 centre;
  uniform float radius;
  uniform vec3 deep;
  uniform vec3 shallow;
  uniform vec3 sky;
  varying vec3 vWorld;
  void main() {
    float d = length(vWorld.xz - centre.xz) / radius;
    vec3 col = mix(deep, shallow, smoothstep(0.35, 1.0, d));
    vec3 view = normalize(cameraPosition - vWorld);
    col = mix(col, sky, pow(1.0 - view.y, 3.0) * 0.5);
    // Ripple rings drifting out from the middle, drawn as thin pale lines.
    float ring = fract(d * 6.0 - time * 0.12);
    col = mix(col, vec3(1.0), smoothstep(0.04, 0.0, abs(ring - 0.5)) * 0.18 * (1.0 - d));
    // A shore line of foam where it laps the bank.
    col = mix(col, vec3(0.97, 1.0, 0.98), smoothstep(0.9, 0.98, d) * 0.6);
    gl_FragColor = vec4(col, 0.92);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Dc={time:{value:0},sky:{value:new _e(12576757)}};function T_(n,e){const t=new Xt({vertexShader:b_,fragmentShader:E_,transparent:!0,uniforms:{time:Dc.time,sky:Dc.sky,centre:{value:new L(e.x,e.level,e.z)},radius:{value:e.radius*1.15},deep:{value:new _e(2064284)},shallow:{value:new _e(6279108)}}}),i=new D(new Kn(e.radius*1.15,48),t);return i.rotation.x=-Math.PI/2,i.position.set(e.x,e.level,e.z),i.renderOrder=2,n.add(i),i}function A_(n){const e=nn.map(i=>y_(n,i)),t=new je;n.add(t);for(const i of nn)i.spires||C_(t,i);P_(t),Ps(t);for(const i of ki)i.top==null&&w_(n,i);for(const i of Gi)T_(n,i);return{meshes:e,byKey:Object.fromEntries(nn.map((i,s)=>[i.key,e[s]]))}}function R_(n,e,t){const i=new je;let s=0,r=e;const o=2+Math.floor(V(1,3.99));for(let a=0;a<o;a++){const c=n/o*V(.75,1.25),l=new D(new ke(r*V(.62,.86),r,c,6+a*2%3,1),t);l.position.y=s+c/2,l.rotation.y=V(0,mi),l.castShadow=!0,l.receiveShadow=!0,i.add(l),s+=c*.94,r*=V(.66,.86)}return i}function C_(n,e){const t=Math.round(ct.coveRocks*(e.key==="atoll"?.3:.75));for(let i=0;i<t;i++){let s=0,r=0;do s=V(0,mi),r++;while(Po(e,s)<.45&&r<60);if(Po(e,s)<.3)continue;const o=Cn(e,s),a=V(-6,34),c=o+a,l=e.centre.x+Math.cos(s)*c,u=e.centre.z+Math.sin(s)*c,h=Fe(l,u),d=V(12,34)*(a>12?.85:1.2),f=R_(d,V(8,18),i%3===0?U.rockWarm:U.rock);f.position.set(l,Math.max(h-3,-7),u),f.rotation.y=V(0,mi),n.add(f)}for(const i of e.beaches??[])for(let s=0;s<4;s++){const r=i.theta+V(-.3,.3),o=Cn(e,r)*V(.82,.98),a=e.centre.x+Math.cos(r)*o,c=e.centre.z+Math.sin(r)*o,l=Fe(a,c);if(l<-3||l>16)continue;const u=new D(new Bo(V(2.4,5.5),0),U.rock);u.position.set(a,l+.6,c),u.rotation.set(V(-.4,.4),V(0,mi),V(-.3,.3)),u.scale.y=V(.6,1.05),u.castShadow=!0,u.receiveShadow=!0,n.add(u)}}function P_(n){const{x:e,z:t,theta:i}=vd(),s=new je;s.position.set(e,0,t),s.rotation.y=-i+Math.PI/2;const r=30,o=24;for(const l of[-1,1]){const u=new D(new ke(7.5,11.5,o,7,1),U.rockWarm);u.position.set(l*r,o/2-5,0),u.rotation.y=l*.4,u.castShadow=!0,u.receiveShadow=!0,s.add(u)}const a=new D(new Rn(r,8,5,12,Math.PI),U.rockWarm);a.position.y=o-5,a.scale.y=.78,a.castShadow=!0,a.receiveShadow=!0,s.add(a);const c=new D(new Bo(9,0),U.rock);return c.position.set(V(-6,6),o+r*.78-7,0),c.scale.set(1.2,.7,.9),c.castShadow=!0,s.add(c),n.add(s),s}function vd(){const n=Ut("cove"),e=Math.atan2(he.coveBeach.z-n.centre.z,he.coveBeach.x-n.centre.x),t=Cn(n,e)+62;return{x:n.centre.x+Math.cos(e)*t,z:n.centre.z+Math.sin(e)*t,theta:e}}const Do=he.villageCentre;function L_(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const D_=Math.atan2(he.harbour.z-Do.z,he.harbour.x-Do.x),_d=[{radius:48,spread:1.15,houses:5},{radius:86,spread:1.25,houses:8},{radius:124,spread:1.3,houses:11}];function Md(n,e){const t=D_+(e-.5)*2*n.spread;return{x:Do.x+Math.cos(t)*n.radius,z:Do.z+Math.sin(t)*n.radius,theta:t}}function I_(n,e,t=7){const i=Fe(n+t,e)-Fe(n-t,e),s=Fe(n,e+t)-Fe(n,e-t);return Math.hypot(i,s)/(2*t)}function U_(){const n=L_(20260912),e=[];_d.forEach((t,i)=>{for(let s=0;s<t.houses;s++){const r=(s+.5)/t.houses,o=Md(t,r),a=s%2===0?1:-1,c=13+n()*5,l=o.x+Math.cos(o.theta)*c*a+(n()-.5)*6,u=o.z+Math.sin(o.theta)*c*a+(n()-.5)*6;e.push({x:l,z:u,rot:o.theta+Math.PI/2+(n()-.5)*.5,scale:.74+n()*.3,lane:i,u:r})}});for(let t=0;t<5;t++){const i=t/4;e.push({x:he.harbour.x-58+i*104+(n()-.5)*8,z:he.harbour.z-26+Math.sin(i*Math.PI)*9,rot:Math.PI+(n()-.5)*.4,scale:.7+n()*.22,lane:3,u:i})}return e.filter(t=>Fe(t.x,t.z)>4.5&&I_(t.x,t.z)<.46)}const or=U_();function N_(){const n=[];for(let e=1;e<or.length;e++){const t=or[e-1],i=or[e];if(t.lane!==i.lane)continue;const s=Math.hypot(t.x-i.x,t.z-i.z);s<16||s>40||e%2||n.push({a:t,b:i})}return n}function Ic(n){const e=[];for(const i of n)for(const s of i)e.push(...s);const t=new xt;return t.setAttribute("position",new Ze(e,3)),t.computeVertexNormals(),t}function ol(n,e,t,i=.9){const s=n/2+i,r=e/2+i,o=s>=r,a=o?r:s,c=o?[Math.max(.01,s-a),0]:[0,Math.max(.01,r-a)],l=[-s,0,-r],u=[s,0,-r],h=[s,0,r],d=[-s,0,r],f=o?[-c[0],t,0]:[0,t,-c[1]],g=o?[c[0],t,0]:[0,t,c[1]];return Ic(o?[[l,f,g],[l,g,u],[d,h,g],[d,g,f],[l,d,f],[u,g,h]]:[[l,d,g],[l,g,f],[u,f,g],[u,g,h],[l,f,u],[d,h,g]])}function al(n,e,t,i=.8){const s=n/2+i,r=e/2+i,o=[-s,0,-r],a=[s,0,-r],c=[s,0,r],l=[-s,0,r],u=[-s,t,0],h=[s,t,0];return Ic([[o,u,h],[o,h,a],[l,c,h],[l,h,u],[[-n/2,0,-e/2],[-n/2,0,e/2],[-n/2,t*.92,0]],[[n/2,0,e/2],[n/2,0,-e/2],[n/2,t*.92,0]]])}function Uc(n,e,t,i,{shutter:s=U.green,open:r=zt(.6),w:o=1.6,h:a=2.3}={}){const c=new D(new we(o,a,.2),zt(.55)?U.window:U.dark);c.position.set(e,t,i+.02),n.add(c);const l=new D(new we(o+.6,.25,.5),U.stone);l.position.set(e,t-a/2-.1,i+.2),n.add(l);for(const u of[-1,1]){const h=new D(new we(o/2+.05,a+.1,.16),s);r?h.position.set(e+u*(o*.75+.3),t,i+.1):h.position.set(e+u*(o/4),t,i+.14),n.add(h)}}function wr(n,e,t,{w:i=2.4,h:s=4,material:r=U.woodDark}={}){const o=new D(new we(i,s-i/2,.24),r);o.position.set(e,(s-i/2)/2,t+.03),n.add(o);const a=new D(new ke(i/2,i/2,.24,12,1,!1,-Math.PI/2,Math.PI),r);a.rotation.x=Math.PI/2,a.position.set(e,s-i/2,t+.03),n.add(a);const c=new D(new we(i+.7,.35,.3),U.stone);c.position.set(e,s+.15,t+.05),n.add(c)}const yd=[Se(14170255,{soft:!0}),Se(15226270,{soft:!0}),Se(15759932,{soft:!0})];function F_(n,e,t,i,s=3){const r=Dt(yd);for(let o=0;o<5;o++){const a=new D(new Bi(V(.7,1.2),1),o%2?r:U.leaf2);a.position.set(e+V(-s,s),t-V(0,s*1.3),i+V(.2,.6)),a.scale.set(1.2,.9,.6),n.add(a)}}function Nc(n,e,t,i,s=3,r=.9){for(let o=0;o<s;o++){const a=e+(o-(s-1)/2)*r,c=new D(new ke(.28,.2,.45,6),U.terracotta);c.position.set(a,t+.22,i),n.add(c);const l=new D(new bt(.34,6,4),zt(.5)?U.red:yd[1]);l.position.set(a,t+.62,i),n.add(l)}}const Gu=Se(13203546,{flat:!0}),Vu=Se(11428424,{flat:!0});function O_(n,{height:e=46,width:t=9}={}){const i=new je;n.add(i);const s=new D(new we(t,e,t),Gu);s.position.y=e/2,i.add(s);for(const[d,f]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const g=new D(new we(1.1,e,1.1),Vu);g.position.set(d*t/2,e/2,f*t/2),i.add(g)}for(let d=0;d<4;d++){const f=d*Math.PI/2,g=new D(new we(.8,e*.9,.5),Vu);g.position.set(Math.sin(f)*(t/2+.1),e*.45,Math.cos(f)*(t/2+.1)),g.rotation.y=f,i.add(g)}const r=new D(new we(t+1.4,.9,t+1.4),U.stone);r.position.y=e+.45,i.add(r);const o=8;for(const[d,f]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const g=new D(new we(2,o,2),U.stone);g.position.set(d*(t-2)/2,e+.9+o/2,f*(t-2)/2),i.add(g)}for(let d=0;d<4;d++){const f=d*Math.PI/2,g=new D(new ke(.35,.35,o-2.5,6),U.stone);g.position.set(Math.sin(f)*(t/2-.6),e+.9+(o-2.5)/2,Math.cos(f)*(t/2-.6)),i.add(g);const x=new D(new we(t,2.2,.8),U.stone);x.position.set(Math.sin(f)*(t/2-.4),e+.9+o-1.1,Math.cos(f)*(t/2-.4)),x.rotation.y=f,i.add(x)}const a=new D(new Nt(1.6,2.6,10,1,!0),U.brass);a.position.y=e+.9+o*.45,i.add(a);const c=new D(new we(t+.8,.8,t+.8),U.stone);c.position.y=e+.9+o+.4,i.add(c);const l=new D(new ke(t*.42,t*.46,4,8),Gu);l.position.y=e+o+3.8,i.add(l);const u=new D(new Nt(t*.44,12,8),Se(6265990,{flat:!0}));u.position.y=e+o+11.8,i.add(u);const h=new D(new bt(.55,8,6),U.brass);h.position.y=e+o+18.3,i.add(h);for(const d of i.children)d.castShadow=d.receiveShadow=!0;return{group:i,bellHeight:a.position.y,top:e+o+18.8}}function z_(n,{span:e,rise:t,thickness:i=2,depth:s=6,y:r=0,material:o=U.stone,pieces:a=11}){const c=e*e/4/(2*t)+t/2,l=r+t-c,u=Math.asin(Math.min(1,e/2/c));for(let h=0;h<a;h++){const d=-u+(h+.5)/a*u*2,f=u*2/a*(c+i/2)*1.04,g=new D(new we(f,i,s),o);g.position.set(Math.sin(d)*(c+i/2),l+Math.cos(d)*(c+i/2),0),g.rotation.z=-d,n.add(g)}}function Gs(n,e,t,i,s,{height:r=9,thickness:o=3,base:a=0,material:c=U.stone}={}){const l=Math.hypot(i-e,s-t),u=new D(new we(l,r,o),c),h=-Math.atan2(s-t,i-e);u.position.set((e+i)/2,a+r/2,(t+s)/2),u.rotation.y=h,n.add(u);const d=Math.floor(l/3);for(let f=0;f<d;f++){const g=(f+.5)/d,x=new D(new we(1.6,1.6,o+.2),c);x.position.set(e+(i-e)*g,a+r+.8,t+(s-t)*g),x.rotation.y=h,n.add(x)}}function B_(n,e,t,{radius:i=6,height:s=16,base:r=0,material:o=U.stone,roof:a=!1}={}){const c=new D(new ke(i,i*1.12,s,14),o);c.position.set(e,r+s/2,t),n.add(c);const l=new D(new ke(i+.6,i+.6,1,14),o);if(l.position.set(e,r+s+.5,t),n.add(l),a){const u=new D(new Nt(i+1.2,i*1.3,14),U.roof);u.position.set(e,r+s+1+i*.65,t),n.add(u)}else for(let u=0;u<10;u++){const h=u/10*rt,d=new D(new we(1.4,1.4,1.2),o);d.position.set(e+Math.cos(h)*(i+.2),r+s+1.6,t+Math.sin(h)*(i+.2)),d.rotation.y=-h,n.add(d)}}const Sd=["pine","cypress","olive","round","palm","bush"],Io={time:{value:0},gust:{value:0}},wd=Object.fromEntries(Sd.map(n=>[n,[]]));function k_(n,e,t,i,s=1){wd[n].push({x:e,y:t,z:i,scale:s,rot:V(0,rt),tint:V(-1,1)})}const Hu=320,G_=new _e(ft.woodDark),Wu=new _e(9071184);function ar(n,e,t=0){const i=n.attributes.position.count,s=new Float32Array(i*3),r=e.clone();t&&r.offsetHSL(V(-.02,.02)*t,0,V(-.05,.05)*t);for(let o=0;o<i;o++)s[o*3]=r.r,s[o*3+1]=r.g,s[o*3+2]=r.b;return n.setAttribute("color",new n.attributes.position.constructor(s,3)),n.index?n.toNonIndexed():n}function cr(n){for(const e of Object.keys(n.attributes))["position","normal","color"].includes(e)||n.deleteAttribute(e);return n}function Vs(n,e=.75,t=1,i,s=V(0,10)){const r=new Bi(n,t),o=r.attributes.position,a=new L;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const l=a.clone().normalize(),u=1+Math.sin(l.x*4.1+s)*Math.sin(l.z*3.7-s)*.12;a.multiplyScalar(u),a.y*=e,o.setXYZ(c,a.x,a.y,a.z)}return r.computeVertexNormals(),cr(ar(r,i,1))}function Hs(n,e,t,i,s){const r=[];for(let h=0;h<=4;h++){const d=h/4;r.push(new L(Math.sin(d*1.4)*i,d*n,Math.sin(d*2.1)*i*.3))}const o=new Bh(r),a=new jc(o,8,1,6,!1),c=a.attributes.position,l=new L,u=new L;for(let h=0;h<c.count;h++){l.fromBufferAttribute(c,h);const d=Math.min(1,Math.max(0,l.y/n));o.getPointAt(Math.min(1,d),u);const f=e+(t-e)*d;l.sub(u).multiplyScalar(f).add(u),c.setXYZ(h,l.x,l.y,l.z)}return a.computeVertexNormals(),{geometry:cr(ar(a,s)),tip:o.getPointAt(1)}}function ss(n){const e=qo(n.map(t=>t.index?t.toNonIndexed():t),!1);return e.computeBoundingSphere(),e}const V_={pine(){const{geometry:n,tip:e}=Hs(12,.85,.45,1.6,Wu),t=[n],i=new _e(ft.pine);for(let s=0;s<7;s++){const r=s/7*rt,o=s===0?0:V(2.8,4.6),a=Vs(V(2.8,3.6),.42,1,i);a.translate(e.x+Math.cos(r)*o,e.y+1.2+V(-.4,.6),e.z+Math.sin(r)*o),t.push(a)}return ss(t)},cypress(){const n=[[.01,0],[1.2,.8],[1.65,3.5],[1.6,7],[1.25,10.5],[.7,13.5],[.01,15.5]].map(([r,o])=>new xe(r,o)),e=new Mr(n,9),t=e.attributes.position,i=new L;for(let r=0;r<t.count;r++){i.fromBufferAttribute(t,r);const o=1+Math.sin(i.y*1.7)*.07+Math.sin(Math.atan2(i.z,i.x)*3+i.y)*.06;t.setXYZ(r,i.x*o,i.y+1.2,i.z*o)}e.computeVertexNormals();const s=new ke(.35,.5,1.6,6);return s.translate(0,.8,0),ss([cr(ar(e,new _e(3103286))),cr(ar(s,G_))])},olive(){const n=Hs(4.2,.9,.5,1.1,new _e(8021330)),e=Hs(3.4,.6,.35,-.9,new _e(8021330));e.geometry.rotateY(2.2);const t=[n.geometry,e.geometry],i=new _e(9152104);for(let s=0;s<6;s++){const r=Vs(V(1.9,2.6),.7,1,i),o=V(0,rt);r.translate(Math.cos(o)*V(.6,2.4),V(4.2,6),Math.sin(o)*V(.6,2.4)),t.push(r)}return ss(t)},round(){const{geometry:n}=Hs(5,.8,.45,.4,Wu),e=[n],t=new _e(ft.leaf);for(let i=0;i<7;i++){const s=Vs(V(2.4,3.3),.85,1,t),r=i/7*rt,o=i===0?0:V(1.6,2.8);s.translate(Math.cos(r)*o,6.2+V(-.6,1.6)+(i===0?1.6:0),Math.sin(r)*o),e.push(s)}return ss(e)},palm(){const{geometry:n,tip:e}=Hs(10,.55,.38,2.2,new _e(10189397)),t=[n],i=new _e(ft.leaf2);for(let r=0;r<8;r++){const o=new bt(1,8,4);o.scale(.9,.12,3.6),o.translate(0,0,3.2),o.rotateX(.55),o.rotateY(r/8*rt+V(-.15,.15)),o.translate(e.x,e.y+.2,e.z),t.push(cr(ar(o,i,1)))}const s=Vs(.7,1,0,new _e(7166522));return s.translate(e.x,e.y-.3,e.z),t.push(s),ss(t)},bush(){const n=new _e(ft.maquis),e=[];for(let t=0;t<3;t++){const i=Vs(V(1.4,2.1),.7,0,n);i.translate(V(-1.4,1.4),.9,V(-1.4,1.4)),e.push(i)}return ss(e)}};function Xu(n=!1){const e=Se(16777215,{vertexColors:!0,soft:!0,side:n?en:void 0});return e.onBeforeCompile=t=>{t.uniforms.time=Io.time,t.uniforms.gust=Io.gust,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float time;
uniform float gust;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          // Crowns sway, trunks do not: the higher up the tree, the more it moves.
          vec3 base = vec3(0.0);
          #ifdef USE_INSTANCING
            base = instanceMatrix[3].xyz;
          #endif
          float h = max(0.0, transformed.y - 2.0) / 12.0;
          float phase = time * 1.3 + base.x * 0.05 + base.z * 0.043;
          float sway = (sin(phase) * 0.6 + sin(phase * 2.3 + 1.7) * 0.25) * (0.35 + gust * 0.6);
          transformed.x += sway * h * h * 1.4;
          transformed.z += sway * h * h * 0.6;
        }`)},e}const H_=new Et,qu=new kn,Yu=new L,$u=new L,W_=new L(0,1,0),Zu=new _e;function X_(n){const e=[],t=Xu(!1),i=Xu(!0);for(const s of Sd){const r=wd[s];if(!r.length)continue;const o=V_[s](),a=new Map;for(const c of r){const l=`${Math.floor(c.x/Hu)},${Math.floor(c.z/Hu)}`;a.has(l)||a.set(l,[]),a.get(l).push(c)}for(const c of a.values()){const l=new Xf(o,s==="palm"?i:t,c.length);c.forEach((u,h)=>{qu.setFromAxisAngle(W_,u.rot),Yu.setScalar(u.scale),$u.set(u.x,u.y-.3,u.z),l.setMatrixAt(h,H_.compose($u,qu,Yu)),Zu.setRGB(1,1,1).offsetHSL(u.tint*.015,u.tint*.05,u.tint*.04),l.setColorAt(h,Zu)}),l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.castShadow=s!=="bush",l.receiveShadow=!0,l.computeBoundingSphere(),l.boundingSphere.radius+=12,l.name=`forest:${s}`,n.add(l),e.push(l)}}return e}const bd=[],Ku=new Map;function q_(n){let e=Ku.get(n);return e||(e=n.clone(),e.side=en,Ku.set(n,e)),e}function Pn(n,{width:e=6,height:t=4,mode:i="flag",material:s=U.linen,phase:r=V(0,10),amplitude:o=1}={}){const a=i==="flag"?7:4,c=i==="flag"?3:5,l=new _i(e,t,a,c),u=new D(l,q_(s));u.userData.dynamic=!0,u.castShadow=!0,n.add(u);const h=l.attributes.position.array.slice();return bd.push({mesh:u,geometry:l,rest:h,mode:i,width:e,height:t,phase:r,amplitude:o,speed:V(3.2,4.6)}),u}function Y_(n,e){const t=.35+e*1.5;for(const i of bd){const s=t*i.amplitude,r=i.geometry.attributes.position,o=r.array;for(let a=0;a<o.length;a+=3){const c=i.rest[a],l=i.rest[a+1],u=i.mode==="flag"?(c+i.width/2)/i.width:.5-l/i.height,h=Math.sin(u*5.4-n*i.speed+i.phase),d=Math.sin(u*9.1-n*i.speed*1.6+i.phase*1.7)*.35;if(i.mode==="flag")o[a]=c-u*u*(.6-Math.min(e,.6))*i.width*.22,o[a+1]=l+(h+d)*u*s*.32-u*u*(1.1-e)*.9,o[a+2]=(h+d)*u*s;else{const f=(h+d)*u*s*.55;o[a]=c+f*.7,o[a+1]=l+u*(1-Math.cos(f*.25))*1.2,o[a+2]=f}}r.needsUpdate=!0,i.geometry.computeVertexNormals()}}function Ed(n,{x:e,z:t,rot:i=0,scale:s=1,wall:r=null,tall:o=!1}={}){const a=new je;a.position.set(e,Fe(e,t)-.6,t),a.rotation.y=i,a.scale.setScalar(s),n.add(a);const c=V(11,15),l=V(9.5,12.5),u=o?3:zt(.45)?2:1,h=3.6,d=1.2+u*h+.6,f=r||Dt(g_),g=Dt(v_),x=new D(new we(c+.4,1.8,l+.4),U.stoneDark);x.position.y=.3,a.add(x);const m=new D(new we(c,d,l),f);m.position.y=d/2,a.add(m);const p=new D(ol(c,l,V(3.2,4.4),.9),Dt(x_));p.position.y=d,a.add(p);const M=new D(new we(c+.5,.45,l+.5),U.stone);M.position.y=d-.1,a.add(M);const y=l/2+.05,_=V(-c*.25,c*.25);wr(a,_,y,{w:2.2,h:3.4,material:zt(.5)?g:U.woodDark});for(let S=0;S<u;S++){const b=1.2+S*h+h*.55,A=c>13?[-c*.32,0,c*.32]:[-c*.27,c*.27];for(const v of A)S===0&&Math.abs(v-_)<2.6||Uc(a,v,b,y,{shutter:g,w:1.4,h:2.1});for(const v of[-1,1]){if(!zt(.6))continue;const E=new je;E.rotation.y=v*Math.PI/2,a.add(E),Uc(E,V(-l*.2,l*.2),b,c/2+.05,{shutter:g,w:1.3,h:2})}}if(u>1&&zt(.55)){const S=1.2+h,b=new D(new we(4.6,.35,1.6),U.stone);b.position.set(_,S,y+.8),a.add(b);const A=new D(new we(4.6,1,.12),U.dark);A.position.set(_,S+.7,y+1.55),a.add(A),Nc(a,_,S+.18,y+1.2,4,1)}else zt(.5)&&Nc(a,_+2.2,.6,y+.5,2,.8);if(zt(.35)&&F_(a,V(-c*.35,c*.35),d-.5,y,2.4),zt(.6)){const S=V(-c*.25,c*.25),b=new D(new we(1.4,3.8,1.4),f);b.position.set(S,d+2.4,V(-1.5,1.5)),a.add(b);const A=new D(new we(2,.35,2),U.roof2);A.position.set(S,d+4.45,b.position.z),a.add(A)}if(zt(.3)){const S=new D(new we(4.2,.3,2.2),Dt([U.red,U.blue,U.yellow]));S.position.set(_,3.9,y+1.05),S.rotation.x=-.3,a.add(S)}if(zt(.25)){const S=new D(new ke(.1,.1,4.4,5),U.woodDark);S.position.set(c*.3,d+3.4,0),a.add(S),Pn(a,{width:3,height:1.9,material:Dt(Cs),phase:V(0,rt)}).position.set(c*.3+1.6,d+4.6,0)}return a.traverse(S=>{S.isMesh&&!S.userData.dynamic&&(S.castShadow=!0,S.receiveShadow=!0)}),a}const $_=["pine","cypress","olive","round","round","pine"];function Fi(n,e,t,i=1,s=null){const r=Fe(e,t,!0);if(r<4.5)return null;const o=4;if(Math.hypot(Fe(e+o,t,!0)-Fe(e-o,t,!0),Fe(e,t+o,!0)-Fe(e,t-o,!0))/(2*o)>.95||Ho(e,t))return null;for(const l of or)if(Math.abs(l.x-e)<11&&Math.abs(l.z-t)<11)return null;const c=s||Dt($_);return k_(c,e,r,t,i*(c==="bush"?V(.7,1.3):1)),!0}function Ju(n=10,e=3.4,t=1.8){const s=[];for(let c=0;c<=12;c++){const l=c/12,u=(l-.5)*n,h=e/2*Math.pow(Math.sin(Math.PI*l),.55),d=.9+Math.pow(Math.abs(l-.5)*2,2.2)*.9,f=t*(.35+.65*Math.pow(Math.sin(Math.PI*l),.4));s.push([[h,d,u],[h*.92,-f*.35,u],[h*.45,-f*.85,u],[0,-f,u],[-h*.45,-f*.85,u],[-h*.92,-f*.35,u],[-h,d,u]])}const r=[],o=(c,l,u,h)=>r.push(...c,...l,...u,...c,...u,...h);for(let c=0;c<12;c++){const l=s[c],u=s[c+1];for(let h=0;h<l.length-1;h++)o(l[h],u[h],u[h+1],l[h+1])}const a=new xt;return a.setAttribute("position",new Ze(r,3)),a.computeVertexNormals(),a}function Z_(n,e){const t=[];for(let o=0;o<=12;o++){const a=o/12;t.push([e/2*.95*Math.pow(Math.sin(Math.PI*a),.55),(a-.5)*n])}const s=[];for(let o=0;o<12;o++){const[a,c]=t[o],[l,u]=t[o+1];s.push(-a,0,c,l,0,u,a,0,c),s.push(-a,0,c,-l,0,u,l,0,u)}const r=new xt;return r.setAttribute("position",new Ze(s,3)),r.computeVertexNormals(),r}const K_=[U.white,U.blue,U.cream,U.red,Se(3112824),U.yellow],J_=[U.white,U.linen,Se(14250810),Se(13124911),Se(15249983)];function ws(n,e,t,i=1,{moored:s=!1,heading:r=null,kind:o=null}={}){const a=new je;a.position.set(e,1.2,t),a.rotation.y=r??V(0,rt),a.scale.setScalar(i),a.userData.dynamic=!0,n.add(a);const c=10,l=3.6,u=Dt(K_),h=new D(Ju(c,l,1.9),u);h.castShadow=!0,a.add(h);const d=new D(Ju(c*1.005,l*1.02,.5),u===U.white?U.blue:U.white);d.position.y=.45,d.scale.y=.5,a.add(d);const f=new D(Z_(c*.96,l*.96),U.wood);f.position.y=.95,a.add(f);const g=o?o==="fishing":zt(.5);if(g){const x=new D(new we(2.4,2,2.4),U.cream);x.position.set(0,2,-1.8),x.castShadow=!0,a.add(x);const m=new D(new we(2.8,.3,2.8),u===U.white?U.blue:u);m.position.set(0,3.1,-1.8),a.add(m);const p=new D(new ke(.1,.13,5,5),U.woodDark);p.position.set(0,4,.8),a.add(p);const M=new D(new bt(.25,6,4),U.lamp);M.position.set(0,6.4,.8),a.add(M);const y=new D(new Rn(.9,.38,5,8),U.leaf2);y.rotation.x=Math.PI/2,y.position.set(0,1.3,2.6),a.add(y);for(let _=0;_<3;_++){const S=new D(new bt(.28,6,4),Dt([U.red,U.yellow]));S.position.set(V(-.8,.8),1.5,2.6+V(-.6,.6)),a.add(S)}}else{const x=new D(new ke(.12,.18,12,6),U.woodDark);x.position.set(0,6.8,1.2),x.castShadow=!0,a.add(x);const m=new D(new bt(.22,6,4),U.lamp);m.position.set(0,12.9,1.2),a.add(m);const p=Dt(J_),M=new D(Qu([0,12.4,0],[0,1.7,0],[0,2.1,-5.2]),p);M.position.set(0,.2,1.1),M.castShadow=!0,a.add(M);const y=new D(Qu([0,11,0],[0,1.6,0],[0,1.8,4]),p===U.white?U.linen:U.white);if(y.position.set(0,.2,1.3),a.add(y),p!==U.white&&p!==U.linen&&zt(.6)){const _=new D(new Kn(1.1,12),U.yellow);_.position.set(.02,6,-1.3),_.rotation.y=Math.PI/2,a.add(_);const S=_.clone();S.position.x=-.02,S.rotation.y=-Math.PI/2,a.add(S)}}return zt(.4)&&Pn(a,{width:1.8,height:1.1,material:Dt(Cs)}).position.set(.9,g?6.4:12.6,g?.8:1.2),Ss(a),{group:a,phase:V(0,rt),drift:s?0:V(1.4,3.6),heading:a.rotation.y,turn:0,turnTimer:0,heel:g?0:V(.08,.16)}}function Qu(n=[0,11,0],e=[0,1.6,0],t=[6.4,2.4,0]){const i=new xt;return i.setAttribute("position",new Ze([...n,...e,...t,...n,...t,...e],3)),i.computeVertexNormals(),i}function cl(n,{x:e,z:t,length:i=54,width:s=5,rot:r=0}){const o=new je;o.position.set(e,0,t),o.rotation.y=r,n.add(o);const a=new D(new we(s,.9,i),U.wood);a.position.y=3.1,a.castShadow=!0,a.receiveShadow=!0,o.add(a);const c=Math.max(2,Math.round(i/9));for(let l=0;l<c;l++){const u=(l+.5)/c-.5;for(const h of[-1,1]){const d=new D(new ke(.45,.5,7,5),U.woodDark);d.position.set(h*s/2.6,.4,u*i),o.add(d)}}return o}function Q_(n,e,t){const i=Fe(e,t);if(i<2)return null;const s=new je;s.position.set(e,i,t),s.rotation.y=V(0,rt),s.scale.setScalar(V(.85,1.15)),s.userData.dynamic=!0,n.add(s);const r=new D(new _s(.62,1.5,3,7),Dt([U.red,U.blue,U.yellow,U.navy,U.cream]));r.position.y=1.45,r.castShadow=!0,s.add(r);const o=new D(new bt(.6,8,6),U.skin);if(o.position.y=2.75,s.add(o),zt(.35)){const a=new D(new Nt(.95,.5,8),U.linen);a.position.y=3.16,s.add(a)}return Ss(s),{group:s,phase:V(0,rt),speed:V(.5,1.3),heading:s.rotation.y,home:{x:e,z:t}}}const Yo=Se(15259830);Yo.polygonOffset=!0;Yo.polygonOffsetFactor=-2;Yo.polygonOffsetUnits=-2;const j_=Se(14864297);function Fc(n,e,t){const i=[],s=[];for(let a=0;a<e.length;a++){const c=e[a],l=e[Math.max(0,a-1)],u=e[Math.min(e.length-1,a+1)],h=u.x-l.x,d=u.z-l.z,f=Math.hypot(h,d)||1,g=-d/f,x=h/f,m=(c.width??t)/2;for(const p of[-1,1]){const M=c.x+g*m*p,y=c.z+x*m*p;i.push(M,Fe(M,y)+.3,y)}if(a>0){const p=(a-1)*2;s.push(p,p+1,p+2,p+1,p+3,p+2)}}const r=new xt;r.setAttribute("position",new Ze(i,3)),r.setIndex(s),r.computeVertexNormals();const o=new D(r,Yo);return o.receiveShadow=!0,n.add(o),o}function eM(n){const{x:e,z:t}=he.church,i=Fe(e,t),s=new je;s.position.set(e,i-.5,t),s.rotation.y=.3,n.add(s);const r=O_(s,{height:44,width:9});r.group.position.set(0,0,0);const o=new je;o.position.set(-17,0,-2),s.add(o);const a=new D(new we(14,13,26),U.stone);a.position.y=6.5,o.add(a);const c=new D(al(26,14,5.5,.8),U.roof);c.rotation.y=Math.PI/2,c.position.y=13,o.add(c);const l=new D(new ke(1.9,1.9,.4,16),U.dark);l.rotation.x=Math.PI/2,l.position.set(0,9.5,13.1),o.add(l);const u=new D(new Rn(2.1,.35,6,18),U.stoneDark);u.position.set(0,9.5,13.2),o.add(u),wr(o,0,13,{w:3.2,h:5.4,material:U.woodDark});const h=new D(new ke(6,6,10,14,1,!1,Math.PI/2,Math.PI),U.stone);h.position.set(0,5,-13),o.add(h);const d=new D(new Nt(6.6,4,14,1,!1,Math.PI/2,Math.PI),U.roof);d.position.set(0,12,-13),o.add(d);const f=new D(new ke(20,20,.6,24),j_);f.position.set(-8,.2,22),s.add(f);const g=new D(new ke(3.4,3.8,1.2,12),U.stone);g.position.set(-8,.9,22),s.add(g);const x=new D(new ke(3,3,.2,12),Se(6472918,{emissive:1061690}));x.position.set(-8,1.45,22),s.add(x);const m=new D(new ke(.4,.6,3,8),U.stone);m.position.set(-8,2.4,22),s.add(m);for(let p=0;p<5;p++){const M=.6+p*.42,y=-8+Math.cos(M)*14,_=22+Math.sin(M)*14,S=new D(new ke(.8,.8,.15,8),U.white);S.position.set(y,1.4,_),s.add(S);const b=new D(new ke(.08,.08,3.4,4),U.woodDark);b.position.set(y,2.2,_),s.add(b);const A=new D(new Nt(2,.9,8),p%2?U.cream:U.red);A.position.set(y,4,_),s.add(A)}return s.traverse(p=>{p.isMesh&&(p.castShadow=p.receiveShadow=!0)}),{group:s,bellPosition:{x:e,y:i+r.bellHeight,z:t}}}function tM(n,e){const{x:t,z:i}=he.harbour,s=[];for(let c=0;c<=12;c++){const l=c/12;s.push({x:t-62+l*124,z:i-10+Math.sin(l*Math.PI)*6,width:11})}Fc(n,s,11);for(let c=0;c<3;c++){const l=t-42+c*42,u=i+20+V(-4,4);cl(n,{x:l,z:u,length:52+V(-6,10),rot:V(-.12,.12)});for(let h=0;h<2;h++)e.push(ws(n,l+(h?9:-9),u+V(-14,14),V(.7,.95),{moored:!0,heading:V(-.2,.2)}))}const r=new je;r.position.set(t+52,Fe(t+52,i-8),i-8),n.add(r);const o=new D(new ke(.6,.8,14,6),U.woodDark);o.position.y=7,o.castShadow=!0,r.add(o);const a=new D(new we(11,.7,.7),U.woodDark);a.position.set(4,13.4,0),a.rotation.z=-.16,r.add(a);for(let c=0;c<7;c++){const l=new D(new we(V(2,3.4),2,V(2,3)),Dt([U.wood,U.woodDark,U.plaster2])),u=t-50+V(0,96),h=i-16+V(-6,6);l.position.set(u,Fe(u,h)+1,h),l.rotation.y=V(0,rt),l.castShadow=!0,n.add(l)}for(let c=0;c<6;c++){const l=new D(new bt(.9,8,6),Dt([U.red,U.yellow,U.white]));l.position.set(t+V(-70,70),1.2,i+V(28,86)),n.add(l)}}function nM(n){for(const{a:e,b:t}of N_()){const i=Fe(e.x,e.z)+9.5,s=Fe(t.x,t.z)+9.5,r={x:(e.x+t.x)/2,z:(e.z+t.z)/2},o=Math.hypot(t.x-e.x,t.z-e.z),a=new D(new ke(.08,.08,o,4),U.woodDark);a.position.set(r.x,(i+s)/2-.6,r.z),a.rotation.z=Math.PI/2,a.rotation.y=-Math.atan2(t.z-e.z,t.x-e.x),n.add(a);const c=2+Math.floor(V(0,3));for(let l=0;l<c;l++){const u=(l+1)/(c+1),h=Pn(n,{width:V(1.8,3),height:V(2.2,3.4),mode:"hang",material:Dt(Cs)});h.position.set(e.x+(t.x-e.x)*u,i+(s-i)*u-2.2,e.z+(t.z-e.z)*u),h.rotation.y=Math.atan2(t.z-e.z,t.x-e.x)+Math.PI/2}}}function iM(n){const e=new je;e.name="village",n.add(e);for(const a of or)Ed(e,{...a,tall:zt(.12)});for(const a of _d){const c=[];for(let l=0;l<=18;l++)c.push(Md(a,l/18));Fc(e,c,a.radius>100?7:6)}const t=[];for(let a=0;a<=12;a++){const c=a/12;t.push({x:he.villageCentre.x+(he.harbour.x-he.villageCentre.x)*c+Math.sin(c*4)*9,z:he.villageCentre.z+(he.harbour.z-he.villageCentre.z)*c})}Fc(e,t,7);const{bellPosition:i}=eM(e),s=[];tM(e,s),nM(e);const r=Math.round(ct.trees*.45);for(let a=0;a<r;a++){const c=V(0,rt),l=V(60,190);Fi(e,he.villageCentre.x+Math.cos(c)*l,he.villageCentre.z+Math.sin(c)*l,V(.7,1.2))}for(let a=0;a<7;a++)Fi(e,he.church.x+V(-34,34),he.church.z+V(-30,30),V(.75,1.05),"cypress");const o=[];for(let a=0;a<ct.villagers;a++){const c=V(0,rt),l=V(20,150),u=Q_(e,he.villageCentre.x+Math.cos(c)*l,he.villageCentre.z+Math.sin(c)*l);u&&o.push(u)}return Ps(e),{group:e,villagers:o,moorings:s,bellPosition:i}}function sM(n){const{x:e,z:t}=he.lighthouse,i=Fe(e,t),s=new je;s.name="lighthouse",s.position.set(e,i,t),n.add(s);const r=new D(new ke(5.6,8.4,34,16,1),U.cream);r.position.y=17,r.castShadow=!0,r.receiveShadow=!0,s.add(r);for(const m of[9,22]){const p=new D(new ke(7.2-(m-9)*.12,7.6-(m-9)*.12,5.5,16),U.red);p.position.y=m,s.add(p)}const o=new D(new ke(8.6,8.6,1.2,18),U.dark);o.position.y=34.4,o.castShadow=!0,s.add(o);const a=new D(new Rn(8.4,.25,5,20),U.dark);a.rotation.x=Math.PI/2,a.position.y=36.4,s.add(a);const c=new D(new ke(5.2,5.6,6.8,12),U.blue);c.position.y=38.4,c.castShadow=!0,s.add(c);const l=new D(new ke(2.6,2.6,4,10),new xs({color:16773824}));l.userData.dynamic=!0,l.position.y=38.4,s.add(l);const u=new D(new Nt(6.8,6,12),U.red);u.position.y=44.8,u.castShadow=!0,s.add(u);const h=new D(new Nt(.5,2.2,6),U.dark);h.position.y=48.6,s.add(h);const d=new xs({color:16773295,transparent:!0,opacity:.15,depthWrite:!1,side:2,blending:lr,fog:!1}),f=new je;f.userData.dynamic=!0,f.position.y=38.4,s.add(f);for(const m of[1,-1]){const p=new D(new Nt(11,150,16,1,!0),d);p.rotation.x=Math.PI/2*m,p.position.z=75*m,f.add(p)}Ed(n,{x:e-34,z:t-18,rot:-.5,scale:.8,wall:U.cream});const g=new D(new ke(.16,.2,9,5),U.woodDark);g.position.set(-16,4.5,14),s.add(g),Pn(s,{width:4.2,height:2.6,material:Dt(Cs)}).position.set(-13.8,8,14);for(let m=0;m<7;m++)Fi(n,e+V(-70,40),t+V(-70,70),V(.55,.85),"cypress");return Ps(s),{group:s,beams:f,beamMaterial:d,lampPosition:{x:e,y:i+38.4,z:t},update(m,p){f.rotation.y=m*.42,d.opacity=p,l.scale.setScalar(1+Math.sin(m*.84)*.05)}}}const Na=Math.atan2(he.coveDock.z-he.coveBeach.z,he.coveDock.x-he.coveBeach.x),ju=Se(15920348),eh=Se(14180430),rM=Se(16445654),oM=Se(14271386),aM=Se(15306042),cM=Se(14216946);function Td(){const n=he.coveBeach,e=Math.cos(Na),t=Math.sin(Na),i=-t*16,s=e*16;let r=0;for(let c=-12;c<=60&&!(Fe(n.x+i+e*c,n.z+s+t*c)<2.8);c+=1.5)r=c;const o=Math.max(-12,r-4.5),a={x:n.x+i+e*o,z:n.z+s+t*o};return{...a,y:Fe(a.x,a.z),facing:Na}}function lM(n){const e=new je;n.add(e);const t=U.wood;for(const r of[-1,1]){const o=new D(new we(.14,1.5,.14),t);o.position.set(r*.62,.7,.5),o.rotation.x=.34,e.add(o);const a=new D(new we(.14,2.3,.14),t);a.position.set(r*.62,.95,-.55),a.rotation.x=-.5,e.add(a);const c=new D(new we(.13,.13,1.9),t);c.position.set(r*.62,1.32,-.1),c.rotation.x=-.16,e.add(c)}const i=new je;i.position.set(0,1.02,-.1),i.rotation.x=-.42,e.add(i);for(let r=0;r<9;r++){const o=new D(new we(1.34,.09,.3),r%2?eh:rM);o.position.set(0,0,-1.1+r*.28),o.position.y=-Math.cos((r/8-.5)*2.6)*.12,o.castShadow=!0,i.add(o)}const s=new D(new we(1.34,.11,.72),eh);return s.position.set(0,1.68,-1.2),s.rotation.x=-.95,s.castShadow=!0,e.add(s),e}function uM(n){const e=new je;e.position.set(1.55,0,.15),n.add(e);const t=new D(new ke(.72,.72,.12,12),U.woodDark);t.position.y=1.05,t.castShadow=!0,e.add(t);for(let o=0;o<3;o++){const a=o/3*Math.PI*2+.4,c=new D(new ke(.06,.07,1.05,5),U.woodDark);c.position.set(Math.cos(a)*.5,.52,Math.sin(a)*.5),c.rotation.z=-Math.cos(a)*.13,c.rotation.x=Math.sin(a)*.13,e.add(c)}for(const[o,a]of[-.26,.28].entries()){const c=new D(new ke(.17,.14,.52,8),cM);c.position.set(a,1.37,o?.18:-.16),c.castShadow=!0,e.add(c);const l=new D(new ke(.15,.13,.34,8),aM);l.position.set(a,1.3,o?.18:-.16),e.add(l);const u=new D(new ke(.025,.025,.7,4),U.red);u.position.set(a+.07,1.58,o?.18:-.16),u.rotation.z=-.3,e.add(u)}const i=new D(new ke(.12,.12,.03,8),U.yellow);i.position.set(-.26,1.63,-.16),i.rotation.x=Math.PI/2.4,e.add(i);const s=new D(new ke(.13,.17,.6,8),U.leaf);s.position.set(.02,1.41,-.02),s.castShadow=!0,e.add(s);const r=new D(new ke(.05,.07,.3,6),U.leaf);return r.position.set(.02,1.82,-.02),e.add(r),e}function hM(n){const e=new je;e.position.set(-1.45,0,.7),e.rotation.y=.5,n.add(e);const t=new D(new we(1.15,.72,.42),oM);t.position.y=.36;const i=new D(new we(1.02,.58,.06),U.red);i.position.set(0,.37,.2),i.rotation.x=-.08,e.add(i),t.rotation.x=-.08,t.castShadow=!0,e.add(t);const s=new D(new ke(.24,.24,.06,12),U.dark);s.rotation.x=Math.PI/2,s.position.set(-.26,.38,.22),e.add(s);for(const[a,c]of[.18,.42].entries()){const l=new D(new ke(.09,.09,.05,8),a?U.red:U.dark);l.rotation.x=Math.PI/2,l.position.set(c,.38,.22),e.add(l)}const r=new D(new we(.62,.07,.07),U.dark);r.position.set(0,.78,0),e.add(r);const o=new D(new ke(.022,.035,1.5,4),U.dark);return o.position.set(.5,1.05,-.12),o.rotation.z=-.42,o.rotation.x=-.2,e.add(o),e}function dM(n){const e=new je;e.position.set(-.75,.06,1.5),e.rotation.y=-.7,n.add(e);const t=new D(new we(1.5,.05,1.05),ju);t.position.set(.1,.03,0),t.receiveShadow=!0,e.add(t);const i=new D(new we(.78,.012,.075),U.dark);i.position.set(-.05,.06,-.38),e.add(i);for(let r=0;r<2;r++)for(let o=0;o<7;o++){const a=new D(new we(.58,.012,.022),U.dark);a.position.set(-.24+r*.66,.06,-.22+o*.085),e.add(a)}const s=Pn(e,{width:1.15,height:.92,material:ju,phase:2.4,amplitude:.14});return s.rotation.set(-Math.PI/2+.1,0,.12),s.position.set(-.66,.09,.04),e}function fM(n){const e=Td(),t=new je;t.name="beachCamp",t.position.set(e.x,e.y,e.z),t.rotation.y=-e.facing+Math.PI/2+.25,t.scale.setScalar(1.35),n.add(t),lM(t),uM(t),hM(t),dM(t);for(const[r,o]of[-.9,-.55].entries()){const a=new D(new we(.28,.07,.66),U.blue);a.position.set(o,.05,-1.1+r*.1),a.rotation.y=r?.4:-.25,t.add(a)}const i=new D(new ke(.3,.24,.42,10),U.red);i.position.set(2.2,.22,1.5),i.rotation.z=.25,i.castShadow=!0,t.add(i);const s=new D(new bt(.34,10,8),U.yellow);return s.position.set(2.9,.34,-.9),s.castShadow=!0,t.add(s),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),{group:t,spot:e,radioPosition:{x:e.x-1.9,y:e.y+.6,z:e.z+.9}}}function pM(n){const e=new je;e.name="cove",n.add(e);const t=he.coveBeach,i=he.coveDock,s=Math.atan2(i.z-t.z,i.x-t.x);cl(e,{x:i.x,z:i.z,length:46,width:4.2,rot:-s+Math.PI/2});for(let c=0;c<3;c++){const l=t.x+V(-30,30),u=t.z+V(-24,24),h=Fe(l,u);if(h<1)continue;const d=new je;d.position.set(l,h,u),d.rotation.y=V(0,rt),e.add(d);for(const g of[-3.2,3.2]){const x=new D(new ke(.18,.22,6.5,5),U.woodDark);x.position.set(g,3.2,0),d.add(x)}Pn(d,{width:6,height:3.6,mode:"hang",material:U.leaf2}).position.set(0,4.6,0)}for(let c=0;c<Math.round(ct.trees*.14);c++)Fi(e,t.x+V(-58,58),t.z+V(-20,60),V(.7,1.05),zt(.6)?"palm":"olive");const r=fM(e),o=new D(new ke(.14,.18,7.5,5),U.woodDark);return o.position.set(i.x,4.5,i.z),e.add(o),Pn(e,{width:3,height:2,material:Dt(Cs)}).position.set(i.x+1.6,7.2,i.z),Ps(e),{group:e,moorings:[],camp:r}}const Ad=(n,e)=>Fe(n,e,!0),mM=new _e(12577266),gM=new _e(6272713),xM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,vM=`
  uniform float time;
  uniform vec3 topColor;
  uniform vec3 deepColor;
  varying vec2 vUv;

  float hash(float n) { return fract(sin(n) * 43758.5453); }

  void main() {
    // Drawn water: long ribbons of light and shade falling at their own
    // pace, with white streaks breaking through, the way a waterfall is
    // painted in a background rather than simulated.
    float lanes = 22.0;
    float lane = floor(vUv.x * lanes);
    float speed = 1.2 + hash(lane) * 1.1;
    float v = vUv.y * 2.4 + time * speed + hash(lane + 7.0) * 10.0;
    float ribbon = step(0.5, fract(v * 0.7 + hash(lane + 3.0)));
    float streak = step(0.86, fract(v * 1.3 + hash(lane + 11.0) * 3.0));

    vec3 col = mix(deepColor, topColor, 0.35 + ribbon * 0.4);
    col = mix(col, vec3(1.0), streak * 0.85);
    // All foam near the bottom, where it has fallen furthest.
    float foam = smoothstep(0.32, 0.0, vUv.y + (hash(lane) - 0.5) * 0.08);
    col = mix(col, vec3(1.0), foam * 0.9);

    float edge = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
    float alpha = (0.72 + ribbon * 0.2 + streak * 0.1) * edge;
    gl_FragColor = vec4(col, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function _M(n,e,t){const i=[],s=[];for(let a=0;a<e.length;a++){const c=e[a],l=e[Math.max(0,a-1)],u=e[Math.min(e.length-1,a+1)],h=u.x-l.x,d=u.z-l.z,f=Math.hypot(h,d)||1,g=t/2;for(const x of[-1,1]){const m=c.x+-d/f*g*x,p=c.z+h/f*g*x;i.push(m,Math.max(Ad(m,p),c.y)+.35,p)}if(a>0){const x=(a-1)*2;s.push(x,x+1,x+2,x+1,x+3,x+2)}}const r=new xt;r.setAttribute("position",new Ze(i,3)),r.setIndex(s),r.computeVertexNormals();const o=new D(r,Se(7128788,{transparent:!0,opacity:.9,side:en,emissive:862771}));return o.renderOrder=2,n.add(o),o}function MM(n){const e=new je;e.name="falls",n.add(e);const t=he.fallsTop,i=he.fallsFoot,s=he.fallsTarn,r=Ad(t.x,t.z);_M(e,[{x:s.x+6,z:s.z+30,y:r+.4},{x:s.x+10,z:s.z+44,y:r+2},{x:t.x,z:t.z-8,y:r+1.5},{x:t.x,z:t.z+6,y:r+1}],26);const o=r+4,a=new Xt({transparent:!0,depthWrite:!1,side:en,uniforms:{time:{value:0},topColor:{value:mM.clone()},deepColor:{value:gM.clone()}},vertexShader:xM,fragmentShader:vM});for(const[h,d]of[0,-7].entries()){const f=new D(new _i(34-h*8,o,1,1),a);f.position.set(t.x+h*3,o/2-2,t.z+12+d*-1),f.renderOrder=3,f.userData.dynamic=!0,e.add(f)}const c=Se(16055295,{flat:!1});c.transparent=!0,c.opacity=.4,c.emissive=new _e(5925488);const l=[];for(let h=0;h<(ct.tier==="low"?5:9);h++){const d=h%2?1:-1,f=new D(new Bi(V(5,9),1),c);f.position.set(t.x+d*V(20,34),V(2,16),t.z+24+V(-6,12)),f.scale.set(V(1,1.6),V(.6,1),V(1,1.5)),f.renderOrder=4,f.userData.dynamic=!0,l.push({mesh:f,phase:V(0,rt),base:f.position.y}),e.add(f)}const u=new D(new Kn(40,24),Se(15924223,{transparent:!0,opacity:.7,emissive:4478298}));u.rotation.x=-Math.PI/2,u.position.set(t.x+2,.7,t.z+24),u.renderOrder=2,e.add(u);for(let h=0;h<Math.round(ct.trees*.12);h++)Fi(e,t.x+V(-90,90),t.z+V(-70,-12),V(.7,1.1),zt(.6)?"cypress":"round");return Ps(e),{group:e,position:{x:t.x,y:o*.5,z:t.z+12},update(h){a.uniforms.time.value=h;for(const d of l)d.mesh.position.y=d.base+Math.sin(h*.6+d.phase)*3,d.mesh.rotation.y=h*.05+d.phase},foot:{x:t.x,y:4,z:t.z+20,far:i}}}const rs=Se(4152683),yM=Se(13621711),th=[{x:330,z:-330,radius:120},{x:-340,z:300,radius:140},{x:720,z:60,radius:110},{x:-160,z:-640,radius:130}];function SM(n){const e=new je,t=new D(new _s(4.6,12,5,10),rs);t.rotation.x=Math.PI/2,t.scale.set(1,1,.72),t.castShadow=!0,e.add(t);const i=new D(new _s(3.6,11,4,10),yM);i.rotation.x=Math.PI/2,i.scale.set(1,.5,.7),i.position.y=-2.4,e.add(i);const s=new D(new bt(4.4,10,8),rs);s.scale.set(.9,.72,1.25),s.position.z=8.5,e.add(s);const r=new je;r.position.z=-9.5,e.add(r);const o=new D(new Nt(3,9,7),rs);o.rotation.x=-Math.PI/2,o.scale.set(1,1,.55),o.position.z=-3.5,r.add(o);for(const c of[-1,1]){const l=new D(new Nt(3.4,8,4),rs);l.rotation.set(Math.PI/2,0,c*.5),l.scale.set(1,1,.28),l.position.set(c*4,0,-8),r.add(l)}for(const c of[-1,1]){const l=new D(new Nt(1.9,7.5,4),rs);l.rotation.set(Math.PI/2.1,0,c*1.25),l.scale.set(1,1,.3),l.position.set(c*4.6,-1.2,2),e.add(l)}const a=new D(new Nt(1.5,3.4,4),rs);return a.scale.set(1,1,.4),a.position.set(0,3.6,-3),a.rotation.x=-.4,e.add(a),e.scale.setScalar(n),r.userData.dynamic=!0,Ss(e),Ss(r),{whale:e,stock:r}}function wM(){const n=new je,e=Se(16187135,{flat:!1});e.transparent=!0,e.opacity=0;const t=[];for(let i=0;i<4;i++){const s=new D(new bt(1.5+i*.5,7,6),e);s.position.set(V(-.8,.8),2+i*2.6,V(-.8,.8)),n.add(s),t.push(s)}return n.position.set(0,3.4,6),n.visible=!1,{group:n,material:e,blobs:t}}function bM(n){const e=[],t=ct.tier==="low"?2:ct.tier==="medium"?3:4;for(let s=0;s<t;s++){const r=th[s%th.length],o=s===0?3:2;for(let a=0;a<o;a++){const c=V(.8,1.45)*(a===0?1.15:1),{whale:l,stock:u}=SM(c);n.add(l);const h=wM();l.add(h.group),e.push({group:l,stock:u,spout:h,centre:r,radius:r.radius*V(.55,1),phase:V(0,rt),speed:V(.028,.05),cycle:V(16,26),offset:V(0,20),scale:c})}}function i(s,r){for(const o of e){const a=o.phase+s*o.speed,c=o.centre.x+Math.cos(a)*o.radius,l=o.centre.z+Math.sin(a)*o.radius,u=(s+o.offset)%o.cycle/o.cycle;let h,d=0;if(u<.12){const m=u/.12;h=-14+m*15,d=-.35*(1-m)}else if(u<.32)h=1;else if(u<.46){const m=(u-.32)/.14;h=1-m*10,d=m*.85}else h=-14,d=.1;const g=Fe(c,l)<-12;o.group.visible=g,o.group.position.set(c,h*(g?1:0)-(g?0:40),l),o.group.rotation.y=-a+Math.PI/2,o.group.rotation.x=vt(o.group.rotation.x,d,2.5,r),o.group.rotation.z=Math.sin(s*.6+o.phase)*.06,o.stock.rotation.x=Math.sin(s*1.1+o.phase)*(.14+Math.max(0,d)*.25);const x=u>.13&&u<.24&&g;if(o.spout.group.visible=x,x){const m=(u-.13)/.11;o.spout.material.opacity=Math.sin(m*Math.PI)*.75,o.spout.blobs.forEach((p,M)=>{p.scale.setScalar(.6+m*(1.1+M*.35))})}}}return{pods:e,update:i}}const ll=[];function EM(){const n=new xt;return n.setAttribute("position",new Ze([0,0,0,-3.1,.12,-.75,-.65,.18,.72],3)),n.setIndex([0,1,2]),n.computeVertexNormals(),n}function TM(n,e,t,i,s=1){const r=new je;r.position.set(e,t,i),r.scale.setScalar(s),n.add(r);const o=new D(new _s(.3,1.35,3,6),U.white);o.rotation.x=Math.PI/2,r.add(o);const a=EM(),c=new D(a,U.white),l=new D(a,U.white);l.scale.x=-1,r.add(c,l);const u={group:r,left:c,right:l,pos:new L(e,t,i),prev:new L(e,t,i),vel:new L,centre:new L(e,0,i),radius:V(24,78),baseY:t,phase:V(0,rt),speed:V(.3,.62),flap:V(0,rt),startle:0,startleRadius:V(34,58)};return ll.push(u),u}function AM(n){const e=ct.birds;for(let t=0;t<e;t++){const i=t/e;let s,r;if(i<.26)s=he.harbour.x+V(-90,90),r=he.harbour.z+V(-40,110);else if(i<.42)s=he.coveBeach.x+V(-70,90),r=he.coveBeach.z+V(-90,50);else{const o=nn[t%nn.length],a=V(0,rt),c=Cn(o,a)+V(-40,70);s=o.centre.x+Math.cos(a)*c,r=o.centre.z+Math.sin(a)*c}TM(n,s,V(28,105),r,V(.75,1.3))}return ll}const Ws=new L,nh=new L;function RM(n,e,t,i){for(const s of ll){const r=s.pos.distanceTo(t);if(r<s.startleRadius&&s.startle<=0&&(s.startle=V(2.6,4.8),Ws.copy(s.pos).sub(t),Ws.y=Math.abs(Ws.y)*.35+4,Ws.normalize(),s.vel.addScaledVector(Ws,V(16,26)),s.vel.y+=V(4,11),i&&i(s,r)),s.prev.copy(s.pos),s.startle>0)s.startle-=e,s.vel.y-=3.2*e,s.pos.addScaledVector(s.vel,e),s.vel.multiplyScalar(Math.exp(-1.15*e));else{const h=s.phase+n*s.speed;nh.set(s.centre.x+Math.cos(h)*s.radius,s.baseY+Math.sin(n*1.7+s.phase)*4,s.centre.z+Math.sin(h)*s.radius),s.pos.lerp(nh,1-Math.exp(-1.5*e)),s.vel.multiplyScalar(Math.exp(-3*e))}const o=Math.max(Lo(s.pos.x,s.pos.z)+7,6);s.pos.y<o&&(s.pos.y=o,s.vel.y=Math.max(s.vel.y,2)),s.group.position.copy(s.pos);const a=s.pos.x-s.prev.x,c=s.pos.z-s.prev.z;if(a*a+c*c>1e-6){const h=Math.atan2(a,c);s.group.rotation.y=vt(s.group.rotation.y,s.group.rotation.y+Co(s.group.rotation.y,h),9,e)}const l=s.startle>0?2.1:1;s.flap+=e*(6.5+l*5);const u=Math.sin(s.flap)*(.55+l*.22);s.left.rotation.z=u,s.right.rotation.z=-u,s.group.rotation.z=vt(s.group.rotation.z,u*.12,6,e)}}function CM(n,e,t,i){const s=i.y<70;for(const r of n){const o=i.x-r.group.position.x,a=i.z-r.group.position.z;if(s&&o*o+a*a<110*110){const d=Math.atan2(o,a);r.group.rotation.y+=Co(r.group.rotation.y,d)*Math.min(1,t*3),r.group.rotation.x=vt(r.group.rotation.x,-.16,3,t);continue}if(r.group.rotation.x=vt(r.group.rotation.x,0,3,t),r.phase+=t,r.phase>6){r.phase=V(0,2),r.heading+=V(-1.6,1.6);const d=Math.atan2(r.home.x-r.group.position.x,r.home.z-r.group.position.z);Math.hypot(r.home.x-r.group.position.x,r.home.z-r.group.position.z)>45&&(r.heading=d)}const l=r.speed*t,u=r.group.position.x+Math.sin(r.heading)*l,h=r.group.position.z+Math.cos(r.heading)*l;Fe(u,h)>2.5?(r.group.position.x=u,r.group.position.z=h):r.heading+=2.2,r.group.position.y=Fe(r.group.position.x,r.group.position.z),r.group.rotation.y=r.heading,r.group.position.y+=Math.abs(Math.sin(e*6+r.phase))*.12}}function Ti(n,e=18){const t=n.map(([s,r])=>new xe(Math.max(.001,s),r)),i=new Mr(t,e);return i.rotateX(Math.PI/2),i}function to({span:n,leading:e,trailing:t,thickness:i=.2,steps:s=16,bevel:r=.09,from:o=-1}){const a=new Ro,c=[];for(let u=0;u<=s;u++){const h=o+(1-o)*u/s;c.push(h*n)}a.moveTo(c[0],t(c[0]));for(const u of c)a.lineTo(u,e(u));for(let u=c.length-1;u>=0;u--)a.lineTo(c[u],t(c[u]));const l=new xr(a,{depth:i,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:4});return l.translate(0,0,-i/2),l.rotateX(Math.PI/2),l.computeVertexNormals(),l}const no=new L,io=new L,ih=new L,sh=new L,PM=new kn,LM=new L(0,1,0);function ci(n,e,t,i,s){no.set(...e),io.set(...t);const r=no.distanceTo(io),o=new D(new ke(i,i,r,6),s);return ih.addVectors(no,io).multiplyScalar(.5),o.position.copy(ih),sh.subVectors(io,no).normalize(),o.quaternion.copy(PM.setFromUnitVectors(LM,sh)),n.add(o),o}const Xs=(n,e,t,i=.55)=>t*Math.pow(Math.max(0,1-(n/e)**2),i);function Rd(n=13190973,e=!1,t={}){const i=new je,s=e?.78:1,r=new je;r.scale.setScalar(s),i.add(r);const o=Se(n),a=t.wing?Se(t.wing):U.cream,c=t.trim?Se(t.trim):U.cream,l=U.dark,u=new D(Ti([[.02,-6.3],[.28,-6.1],[.55,-5.2],[.82,-3.6],[1.08,-1.6],[1.26,.2],[1.34,1.8],[1.32,3],[1.22,3.7]],20),o);u.scale.set(.92,1.05,1),r.add(u);const h=new D(Ti([[.02,-5.9],[.6,-5.2],[.88,-3.4],[1.1,-1.4],[1.25,.6],[1.3,2.2]]),c);h.scale.set(.935,.42,1.001),h.position.y=-.2,r.add(h);const d=new D(Ti([[1.22,3.6],[1.4,3.9],[1.46,4.5],[1.38,5.1],[1.1,5.35],[.9,5.3]]),c);r.add(d);const f=new D(new Kn(1,16),l);f.position.z=5.28,r.add(f);for(let oe=0;oe<3;oe++)for(const G of[-1,1]){const Q=new D(new ke(.1,.13,.55,6),l);Q.rotation.z=Math.PI/2,Q.position.set(G*1.36,-.25-oe*.28,3.4-oe*.18),r.add(Q)}const g=new je;g.position.z=5.55,r.add(g);const x=new D(Ti([[.62,0],[.6,.35],[.45,.8],[.02,1.35]]),U.red);g.add(x);for(let oe=0;oe<2;oe++){const G=new D(new bt(1,10,6),U.woodDark);G.scale.set(.32,3.1,.1),G.position.y=(oe?-1:1)*2.9,G.rotation.y=(oe?-1:1)*.35;const Q=new D(new bt(1,8,5),U.yellow);Q.scale.set(.34,.45,.11),Q.position.y=(oe?-1:1)*2.75,G.add(Q),Q.scale.divide(G.scale),Q.position.y/=G.scale.y,g.add(G)}const m=new D(new Kn(3.2,28),new xs({color:16774880,transparent:!0,opacity:.12,depthWrite:!1,side:en,blending:lr}));m.position.z=5.6,m.renderOrder=4,r.add(m);const p=new D(new Rn(.72,.13,6,16),U.woodDark);p.rotation.x=Math.PI/2,p.scale.set(1,1.35,1),p.position.set(0,1.3,-.5),r.add(p);const M=new D(new bt(.8,12,6,0,rt,0,Math.PI/2),U.glass);M.scale.set(.9,.55,.4),M.position.set(0,1.2,.55),r.add(M);const y=new D(Ti([[.02,-3.6],[.35,-2.8],[.5,-1.8],[.46,-1.35],[.02,-1.3]],10),o);y.scale.set(1,.9,1),y.position.y=1.05,r.add(y);const _=7.2,S=2.9,b=[3.4,6.2],A=oe=>Math.abs(oe)>b[0]&&Math.abs(oe)<b[1],v=3.1,E=new D(to({span:_,steps:28,leading:oe=>Xs(oe,_,S)*.42,trailing:oe=>-Xs(oe,_,S)*.58+(A(oe)?.72:0),thickness:.22,bevel:.1}),a);E.position.set(0,v,.4),r.add(E);for(const oe of[-1,1]){const G=new D(new Kn(.95,20),o);G.rotation.x=-Math.PI/2,G.position.set(oe*4.8,v+.24,.35),r.add(G);const Q=new D(new Kn(.45,16),U.cream);Q.rotation.x=-Math.PI/2,Q.position.set(oe*4.8,v+.26,.35),r.add(Q)}const R=[],C=oe=>.4-Xs(oe,_,S)*.58+.72;let I=0;for(let oe=0;oe<=8;oe++)I+=C(b[0]+(b[1]-b[0])*oe/8)/9;for(const oe of[-1,1]){const G=new je;G.position.set(0,v,I),r.add(G);const Q=new D(to({span:b[1]-.05,from:(b[0]+.05)/(b[1]-.05),steps:8,leading:de=>C(de)-I-.04,trailing:de=>C(de)-I-.7,thickness:.14,bevel:.06}),c);Q.scale.x=-oe,G.add(Q),R.push({pivot:G,side:oe})}for(const oe of[-1,1])ci(r,[oe*.55,1.1,1.2],[oe*1,v-.1,1],.07,l),ci(r,[oe*.55,1.1,-.6],[oe*1,v-.1,-.4],.07,l),ci(r,[oe*1.05,-.5,.9],[oe*4.3,v-.1,.9],.09,l),ci(r,[oe*1.05,-.5,.2],[oe*4.3,v-.1,-.5],.09,l);for(const[oe,G]of[[1,U.navRed],[-1,U.navGreen]]){const Q=new D(new bt(.22,8,6),G);Q.position.set(oe*(_-.25),v,.3),r.add(Q)}const X=new D(new bt(.2,8,6),U.navWhite);X.position.set(0,3.35,-6.1),X.userData.dynamic=!0,r.add(X);const F=2.7,k=new D(to({span:F,leading:oe=>Xs(oe,F,1.5)*.55,trailing:()=>0,thickness:.12,bevel:.06}),o);k.position.set(0,.35,-5.2),r.add(k);const N=new je;N.position.set(0,.35,-5.2),r.add(N);const B=new D(to({span:F,leading:()=>0,trailing:oe=>-Xs(oe,F,1.3)*.6,thickness:.1,bevel:.05}),c);N.add(B);const J=new Ro;J.moveTo(0,0),J.quadraticCurveTo(-.2,2.2,-1,2.7),J.lineTo(-1.2,2.7),J.lineTo(-1.2,0),J.lineTo(0,0);const O=new D(new xr(J,{depth:.12,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2}),o);O.geometry.translate(0,0,-.06),O.rotation.y=-Math.PI/2,O.position.set(0,.6,-4.2),r.add(O);const $=new je;$.position.set(0,.6,-5.4),r.add($);const j=new Ro;j.moveTo(0,-.3),j.lineTo(0,2.7),j.quadraticCurveTo(-1,2.6,-1.05,1.2),j.quadraticCurveTo(-1,-.2,0,-.3);const pe=new xr(j,{depth:.1,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});pe.translate(0,0,-.05);const re=new D(pe,c);re.rotation.y=-Math.PI/2,$.add(re);const Ge=[[.02,-4.4],[.3,-4.1],[.55,-2.8],[.72,-.6],[.78,1.2],[.74,2.9],[.55,3.9],[.25,4.5],[.02,4.7]];for(const oe of[-1,1]){const G=new je;G.position.set(oe*2.5,-2.6,.6),r.add(G);const Q=new D(Ti(Ge,14),U.cream);Q.scale.set(1,.85,1),G.add(Q);const de=new D(Ti(Ge,14),o);de.scale.set(1.02,.3,1),de.position.y=-.32,G.add(de),ci(r,[oe*2.5,-2.3,2.6],[oe*.7,-.9,2.4],.08,l),ci(r,[oe*2.5,-2.3,-.8],[oe*.7,-.9,-.6],.08,l),ci(r,[oe*2.5,-2.3,2.6],[oe*.7,-.9,-.6],.06,l)}ci(r,[-2.5,-2.2,1],[2.5,-2.2,1],.06,l);let me=null;if(!e){const oe=new je;oe.position.set(0,1.25,-.55),r.add(oe);const G=new D(new bt(.6,12,8),Se(9067068));G.scale.set(1,.6,.8),oe.add(G);const Q=new D(new bt(.44,14,10),U.skin);Q.position.y=.58,oe.add(Q);const de=new D(new bt(.47,14,8,0,rt,0,Math.PI*.55),Se(7030320));de.position.y=.62,oe.add(de);for(const Me of[-1,1]){const Oe=new D(new Rn(.13,.05,6,12),U.brass);Oe.position.set(Me*.17,.66,.4),oe.add(Oe)}me=new je,me.position.set(0,1.55,-.85),r.add(me);const Ie=Pn(me,{width:3.2,height:.55,material:U.red,phase:0});Ie.rotation.y=Math.PI/2,Ie.position.set(0,0,-1.6)}i.traverse(oe=>{oe.isMesh&&oe!==m&&(oe.castShadow=!0,oe.receiveShadow=!0)});for(const oe of[g,m,N,$,me,...R.map(G=>G.pivot)])oe&&(oe.userData.dynamic=!0);return Ss(i),i.userData={propeller:g,disc:m,ailerons:R,elevator:N,rudder:$,scarf:me,strobe:X},i}function DM(n,{roll:e=0,pitch:t=0,yaw:i=0},s=.016,r=40){const{ailerons:o,elevator:a,rudder:c,disc:l}=n.userData;for(const{pivot:u,side:h}of o)u.rotation.x=vt(u.rotation.x,it(e,-1,1)*.45*h,12,s);a.rotation.x=vt(a.rotation.x,it(t,-1,1)*.42,12,s),c.rotation.y=vt(c.rotation.y,it(i,-1,1)*.5,12,s),l&&(l.material.opacity=it(.04+r/400,.04,.22))}function IM(n){const e=[],t=[{colour:14788939,radius:360,y:96,speed:.075,figure:!1},{colour:4684434,radius:480,y:142,speed:.058,figure:!1},{colour:8363348,radius:250,y:68,speed:.1,figure:!0}];for(const i of t){const s=Rd(i.colour,!0);n.add(s),e.push({group:s,...i,phase:V(0,rt),centre:new L(V(-50,50),0,V(-40,40)),bob:V(0,rt),prev:new L})}return e}const Zt=new L,UM=46;function NM(n,e,t){for(const i of n){const s=i.phase+e*i.speed,r=i.figure?i.radius*(.65+.35*Math.cos(s*2)):i.radius;Zt.set(i.centre.x+Math.cos(s)*r,i.y+Math.sin(e*.55+i.bob)*11,i.centre.z+Math.sin(s)*(i.figure?r*1.15:r));const o=90,a=s+.35,c=i.figure?i.radius*(.65+.35*Math.cos(a*2)):i.radius,u=Math.max(Fe(Zt.x,Zt.z),Fe(i.centre.x+Math.cos(a)*c,i.centre.z+Math.sin(a)*(i.figure?c*1.15:c)),Fe(Zt.x+Math.sin(i.group.rotation.y)*o,Zt.z+Math.cos(i.group.rotation.y)*o))+UM;Zt.y<u&&(Zt.y=u);const h=Zt.y>(i.height??Zt.y)?3.4:.9;i.height=i.height===void 0?Zt.y:vt(i.height,Zt.y,h,t),Zt.y=i.height;const d=Zt.x-i.group.position.x,f=Zt.y-i.group.position.y,g=Zt.z-i.group.position.z;i.group.position.copy(Zt),d*d+g*g>1e-5&&(i.group.rotation.y=Math.atan2(d,g));const x=Math.atan2(f,Math.max(.001,Math.hypot(d,g)));i.group.rotation.x=vt(i.group.rotation.x,-x*.6-.06*Math.sin(e+i.bob),3,t),i.group.rotation.z=vt(i.group.rotation.z,i.figure?.34*Math.cos(s*2):.3,2,t),i.group.userData.propeller.rotation.z+=t*34}}const js=Se(16249315,{flat:!0}),FM=Se(7249844,{flat:!0}),OM=Se(9067068,{flat:!0}),$n=Se(7297094,{flat:!0}),Bn=n=>n.traverse(e=>{e.isMesh&&!e.userData.dynamic&&(e.castShadow=e.receiveShadow=!0)});function on(n,e,t,i=0,s=null){const r=new je;return r.position.set(e,s??Fe(e,t),t),r.rotation.y=i,n.add(r),r}function zM(n,e){const{x:t,z:i}=he.chapel,s=he.chapelQuay,r=Math.atan2(s.x-t,s.z-i),o=on(n,t,i,r,Fe(t,i)-.4),a=new D(new we(9,8,14),js);a.position.y=4,o.add(a);const c=new D(al(14,9,3.2,.6),U.roof);c.rotation.y=Math.PI/2,c.position.y=8,o.add(c);const l=new D(new ke(3.6,3.6,3.4,8),js);l.position.set(0,10.6,-2),o.add(l);const u=new D(new bt(3.7,16,8,0,rt,0,Math.PI/2),FM);u.position.set(0,12.2,-2),o.add(u);const h=new D(new ke(.8,.9,1.6,8),js);h.position.set(0,16.4,-2),o.add(h);const d=new D(new we(.2,1.8,.2),U.brass);d.position.set(0,18,-2),o.add(d);const f=new D(new we(1,.2,.2),U.brass);f.position.set(0,18.3,-2),o.add(f);const g=new D(new we(4,4.6,1),js);g.position.set(0,10.8,7),o.add(g);const x=new D(new we(1.8,2.4,1.1),U.dark);x.position.set(0,10.8,7),o.add(x);const m=new D(new Nt(.7,1.2,8,1,!0),U.brass);m.position.set(0,10.9,7),o.add(m),wr(o,0,7,{w:2.2,h:4,material:U.blue});for(const M of[-1,1]){const y=new D(new we(1.2,6,2),U.stone);y.position.set(M*5,3,1),o.add(y)}Rs.push({x:t,z:i,radius:8,top:o.position.y+19});const p=new D(new we(4,1,24),U.stone);p.position.set(0,-2,20),p.rotation.x=.4,o.add(p),cl(n,{x:s.x,z:s.z,length:30,width:6,rot:r}),e.push(ws(n,s.x+7,s.z+4,.8,{moored:!0,heading:r,kind:"fishing"})),Bn(o)}function BM(n){const{x:e,z:t}=he.fortress,i=Fe(e,t)-1,s=on(n,e,t,.2,i),r=[];for(let h=0;h<5;h++){const d=h/5*rt+.3;r.push([Math.cos(d)*44,Math.sin(d)*44])}for(let h=0;h<5;h++){const[d,f]=r[h],[g,x]=r[(h+1)%5];Gs(s,d,f,g,x,{height:10,thickness:3.4,base:-3}),B_(s,d,f,{radius:6.5,height:15,base:-4,roof:h%2===1})}const o=new je;o.position.set(-44,0,0),o.rotation.y=Math.PI/2,s.add(o);const a=new D(new we(10,12,7),U.stone);a.position.y=4,o.add(a),wr(o,0,3.5,{w:4,h:6,material:U.dark});const c=new D(new we(14,26,14),U.stone);c.position.y=11,s.add(c),Gs(s,-7,-7,7,-7,{height:.4,thickness:1,base:24}),Gs(s,7,-7,7,7,{height:.4,thickness:1,base:24}),Gs(s,7,7,-7,7,{height:.4,thickness:1,base:24}),Gs(s,-7,7,-7,-7,{height:.4,thickness:1,base:24});for(let h=0;h<4;h++){const d=h*Math.PI/2,f=new D(new we(.8,3,.3),U.dark);f.position.set(Math.sin(d)*7.05,16,Math.cos(d)*7.05),f.rotation.y=d,s.add(f)}for(let h=0;h<3;h++){const d=h/3*rt+1.1,f=new je;f.position.set(Math.cos(d)*28,-1,Math.sin(d)*28),f.rotation.y=-d+Math.PI/2,s.add(f);const g=new D(new we(14,5,7),U.stone);g.position.y=2.5,f.add(g);const x=new D(ol(14,7,2.4,.5),U.roof2);x.position.y=5,f.add(x)}const l=new D(new ke(.2,.25,9,6),U.woodDark);l.position.set(0,28.5,0),s.add(l),Pn(s,{width:6,height:3.6,material:U.red}).position.set(3.1,31,0),Rs.push({x:e,z:t,radius:11,top:i+34}),Bn(s)}function kM(n){const e=ki.find(f=>f.bridge),{x:t,z:i}=he.bridge,s=on(n,t,i,-Math.atan2(.8,.6),0),r=e.top,o=e.bottom,a=150,c=new D(new we(a,8,14),U.stone);c.position.y=r-4,s.add(c);for(const f of[-1,1]){const g=new D(new we(a,1.6,1),U.stoneDark);g.position.set(0,r+.8,f*6.5),s.add(g)}const l=18,u=50,h=u*u/(2*l)+l/2,d=o-h;for(let f=-52;f<52;f+=4){const g=f+2,x=d+Math.sqrt(Math.max(0,(h+3.4)**2-g*g)),m=Math.min(x,o+2),p=r-8-m;if(p<=.2)continue;const M=new D(new we(4.05,p,12),U.stone);M.position.set(g,m+p/2,0),s.add(M)}for(let f=-4;f<=4;f++){if(Math.abs(f)<1)continue;const g=new D(new we(5,7,12.4),U.dark);g.position.set(f*10,o+5,0),s.add(g)}z_(s,{span:100,rise:18,thickness:3.4,depth:13,y:o-18,pieces:17,material:U.stoneDark});for(const f of[-1,1]){const g=new D(new we(22,80,16),U.stone);g.position.set(f*60,r-44,0),s.add(g)}for(let f=-3;f<=3;f++)for(const g of[-1,1]){const x=new D(new ke(.15,.2,3.4,5),U.dark);x.position.set(f*18,r+1.7,g*6.4),s.add(x);const m=new D(new bt(.45,6,4),U.lamp);m.position.set(f*18,r+3.6,g*6.4),s.add(m)}Bn(s)}function GM(n){const{x:e,z:t}=he.wreck,i=on(n,e,t,.9,-3.2);i.rotation.z=.28,i.rotation.x=-.1;const s=new D(new we(.9,.9,30),$n);i.add(s);for(let l=0;l<12;l++){const u=l/11-.5,h=7*Math.cos(u*2.4),d=new D(new Rn(h/2,.32,4,10,Math.PI),$n);d.rotation.z=Math.PI,d.position.set(0,h/2-.4,u*26),i.add(d)}const r=new D(new we(6,.4,9),$n);r.position.set(-1.8,1.6,-7),r.rotation.z=1.1,i.add(r);const o=new D(new ke(.35,.45,14,6),$n);o.position.set(0,7,4),o.rotation.z=-.5,i.add(o);const a=new D(new ke(.2,.2,8,5),$n);a.position.set(-2.4,11,4),a.rotation.z=.9,i.add(a);const c=new D(new Rn(1.1,.25,5,10,Math.PI),OM);c.position.set(2,-.5,13),i.add(c),Bn(i)}const Fa=[[U.red,U.white],[U.blue,U.white],[U.yellow,U.white],[Se(3116906),U.cream]];function rh(n,e,t,i,s=0){const r=Fe(e,t),o=new D(new ke(.08,.08,3.4,4),U.white);o.position.set(e,r+1.7,t),n.add(o);for(let c=0;c<8;c++){const l=new D(new Nt(2.4,.9,2,1,!1,c/8*rt,rt/8),i[c%2]);l.position.set(e,r+3.5,t),n.add(l)}const a=new D(new we(.9,.3,2.2),U.white);if(a.position.set(e+Math.cos(s)*1.6,r+.4,t+Math.sin(s)*1.6),a.rotation.y=-s+Math.PI/2,n.add(a),zt(.5)){const c=new D(new we(.8,.05,1.8),Dt(Cs));c.position.set(a.position.x,r+.58,a.position.z),c.rotation.y=a.rotation.y,n.add(c)}}function VM(n,e){const t=on(n,0,0,0,0),i=he.villageBeach,s=Math.atan2(i.z-he.villageCentre.z,i.x-he.villageCentre.x),r=s+Math.PI/2,o=Dt(Fa);for(let b=0;b<3;b++)for(let A=-3;A<=3;A++){const v=i.x+Math.cos(r)*A*6+Math.cos(s)*(b*6-8),E=i.z+Math.sin(r)*A*6+Math.sin(s)*(b*6-8),R=Fe(v,E);R<.6||R>6||rh(t,v,E,b===1?Dt(Fa):o,s)}const a=i.x+Math.cos(r)*26+Math.cos(s)*2,c=i.z+Math.sin(r)*26+Math.sin(s)*2;if(Fe(a,c)>.5){const b=on(t,a,c,-s+Math.PI/2);for(const[R,C]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]]){const I=new D(new ke(.1,.1,4,4),U.white);I.position.set(R,2,C),b.add(I)}const A=new D(new we(2,.3,2),U.red);A.position.y=4,b.add(A);const v=new D(new we(2,1.6,.2),U.red);v.position.set(0,4.8,-.9),b.add(v),Pn(b,{width:1.6,height:1,material:U.red}).position.set(1,6.4,-.9)}const l=i.x+Math.cos(s)*40,u=i.z+Math.sin(s)*40,h=new je;h.position.set(l,.6,u),h.rotation.y=V(0,rt),h.userData.dynamic=!0,n.add(h);for(const b of[-1,1]){const A=new D(new ke(.5,.5,4.4,8),U.white);A.rotation.x=Math.PI/2,A.position.x=b*1,h.add(A)}const d=new D(new we(2,.8,1.6),U.yellow);d.position.y=.7,h.add(d),e.push({group:h,phase:V(0,rt),drift:0,heading:h.rotation.y,turn:0,turnTimer:0,heel:0,ride:.2});const f=Ut("atoll"),g=3.93,x=Cn(f,g)*.8,m=f.centre.x+Math.cos(g)*x,p=f.centre.z+Math.sin(g)*x,M=on(t,m,p,-g+Math.PI/2),y=new D(new we(7,3.2,5),$n);y.position.y=1.6,M.add(y);const _=new D(new Nt(6.2,3,6),Se(13610602));_.position.y=4.6,M.add(_);const S=new D(new we(7.4,1.2,1),U.cream);S.position.set(0,1.4,3),M.add(S);for(let b=0;b<6;b++){const A=g+(b-2.5)*.06,v=f.centre.x+Math.cos(A)*x*V(.97,1.06),E=f.centre.z+Math.sin(A)*x*V(.97,1.06);Math.hypot(v-m,E-p)<8||rh(t,v,E,Dt(Fa),A)}Bn(t)}function HM(n){const e=he.grottoCavern,t=Gi[0],i=Math.atan2(e.z-t.z,e.x-t.x)+1.2,s=e.x+Math.cos(i)*50,r=e.z+Math.sin(i)*50,o=on(n,s,r,-i+Math.PI/2,0),a=new D(new ke(9,11,3.4,9),U.rock);a.position.y=.4,o.add(a);const c=new D(new we(8,.4,5),$n);c.position.set(0,2.3,5),o.add(c);const l=new D(new Nt(3,3.4,4),Se(14271642));l.position.set(-3,3.8,-2),l.rotation.y=Math.PI/4,o.add(l);for(let f=0;f<3;f++){const g=new D(new we(1.4,1.2,1.4),U.wood);g.position.set(3+f*.4,2.7+(f===2?1.2:0),-2+(f===2?0:f*1.5)),o.add(g)}const u=new D(new Rn(2.2,.35,4,10,Math.PI),Se(15259310));u.rotation.z=Math.PI,u.position.set(0,5,-4),o.add(u);for(let f=0;f<4;f++){const g=new D(new bt(.35,8,6),U.lamp);g.position.set(-4+f*2.8,6.2-f%2*.6,1),o.add(g)}const h=new Fp(16761466,60,60,1.6);h.position.set(s,8,r),h.userData.dynamic=!0,n.add(h);const d=ws(n,s+Math.cos(i+1.2)*16,r+Math.sin(i+1.2)*16,.7,{moored:!0,heading:i,kind:"fishing"});return Bn(o),d}function WM(n){const e=Gi[0],t=on(n,0,0,0,0),i=2.4,s=e.x+Math.cos(i)*(e.radius+18),r=e.z+Math.sin(i)*(e.radius+18),o=on(t,s,r,i,Fe(s,r,!0)-.3),a=new D(new ke(3.4,3.8,3.4,8),U.stoneDark);a.position.y=1.7,o.add(a);const c=new D(new Nt(4.2,2.8,8),U.stone);c.position.y=4.8,o.add(c);const l=new D(new we(1.2,2,.3),U.dark);l.position.set(0,1,3.6),o.add(l);const u=Se(16447210,{soft:!0});for(let h=0;h<9;h++){const d=V(0,rt),f=e.radius+V(6,34),g=e.x+Math.cos(d)*f,x=e.z+Math.sin(d)*f,m=Fe(g,x,!0);if(m<e.level)continue;const p=on(t,g,x,V(0,rt),m),M=new D(new Bi(1.1,1),u);M.scale.set(1,.85,1.35),M.position.y=1.2,p.add(M);const y=new D(new bt(.42,8,6),U.dark);y.position.set(0,1.4,1.45),p.add(y);for(const[_,S]of[[-.45,-.6],[.45,-.6],[-.45,.6],[.45,.6]]){const b=new D(new ke(.09,.09,.8,4),U.dark);b.position.set(_,.4,S),p.add(b)}}Bn(t)}function XM(n,e){const t=Gi[1],i=-.6,s=t.x+Math.cos(i)*(t.radius-4),r=t.z+Math.sin(i)*(t.radius-4),o=on(n,s,r,-i-Math.PI/2,t.level),a=new D(new we(3,.4,16),$n);a.position.set(0,1,-4),o.add(a);for(let g=0;g<4;g++)for(const x of[-1,1]){const m=new D(new ke(.2,.2,3,5),U.woodDark);m.position.set(x*1.3,-.2,-11+g*4.5),o.add(m)}const c=t.x+Math.cos(i)*(t.radius+16),l=t.z+Math.sin(i)*(t.radius+16),u=on(n,c,l,-i+Math.PI/2,Fe(c,l)-.3),h=new D(new we(8,4,6),$n);h.position.y=2,u.add(h);const d=new D(al(8,6,2.8,.7),Se(8014390));d.position.y=4,u.add(d),Uc(u,1.8,2.2,3.05,{shutter:U.green,w:1.2,h:1.4});const f=new D(new we(.9,3,.9),U.stone);f.position.set(-2.6,5,0),u.add(f),e.push(ws(n,t.x+Math.cos(i)*(t.radius-16),t.z+Math.sin(i)*(t.radius-16),.55,{moored:!0,heading:-i,kind:"fishing"})),e[e.length-1].lake=t.level,Bn(o),Bn(u)}function qM(n){const e=Ut("stacks"),t=e.spires.reduce((u,h)=>h.height>u.height?h:u),i=e.centre.x+t.dx-6,s=e.centre.z+t.dz+8,r=on(n,i,s,.4,Fe(i,s,!0)-.3),o=new D(new we(5,3.6,4.4),js);o.position.y=1.8,r.add(o);const a=new D(ol(5,4.4,1.8,.4),U.roof);a.position.y=3.6,r.add(a),wr(r,0,2.2,{w:1.2,h:2.2,material:U.blue}),Nc(r,1.8,0,2.6,2,.8);const c=new D(new ke(.1,.12,6,5),U.woodDark);c.position.set(-3.2,3,0),r.add(c),Pn(r,{width:2.2,height:1.4,material:U.yellow}).position.set(-2,5.4,0),Bn(r)}function YM(n){const e=new je;e.name="landmarks",n.add(e);const t=[];zM(e,t),BM(e),kM(e),GM(e),VM(e,t),t.push(HM(e)),WM(e),XM(e,t),qM(e);for(let i=0;i<8;i++){const s=V(0,rt);Fi(e,he.chapel.x+Math.cos(s)*V(12,24),he.chapel.z+Math.sin(s)*V(12,24),V(.7,1),"cypress")}return Ps(e),{root:e,boats:t}}const so=Se(7311270),$M=Se(15331056);function ZM(){const n=new je,e=[[.01,-2.6],[.25,-2.2],[.55,-1.2],[.72,.1],[.66,1],[.42,1.7],[.2,2.1],[.08,2.6]].map(([o,a])=>new xe(o,a)),t=new Mr(e,12);t.rotateX(Math.PI/2);const i=new D(t,so);i.scale.set(1,.9,1),n.add(i);const s=new D(t,$M);s.scale.set(.9,.7,.96),s.position.y=-.18,n.add(s);const r=new D(new Nt(.35,.9,4),so);r.scale.set(.35,1,1),r.rotation.x=-.6,r.position.set(0,.75,-.1),n.add(r);for(const o of[-1,1]){const a=new D(new bt(.5,8,4),so);a.scale.set(1,.12,.45),a.position.set(o*.45,0,-2.55),a.rotation.y=o*.5,n.add(a);const c=new D(new bt(.4,8,4),so);c.scale.set(1,.12,.5),c.position.set(o*.62,-.3,.6),c.rotation.set(0,o*.6,o*.5),n.add(c)}return n.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),Ss(n),n}const os=new L,ro=new L;function KM(n,e=5){const t=[];for(let o=0;o<e;o++){const a=ZM();a.visible=!1,a.scale.setScalar(V(1.1,1.5)),n.add(a),t.push({group:a,side:(o%2?1:-1)*V(9,20),back:V(-4,16),period:V(1.5,2.1),phase:V(0,rt),height:V(3.5,6.5),pos:new L,lag:V(.6,1)})}let i=0,s=0,r=!1;return{pod:t,update(o,a,c){i=c.overWater&&!c.onLake&&!c.underRoof&&ud(c.pos.x,c.pos.z)>35&&!c.waterborne&&c.groundClearance<18&&c.speed>24?i+a:Math.max(0,i-a*2);const h=i>2.5?1:0;s=vt(s,h,h?.8:1.4,a);let d=!1;h&&!r&&s>.5&&(r=!0,d=!0),!h&&s<.05&&(r=!1),os.set(Math.sin(c.heading),0,Math.cos(c.heading)),ro.set(-os.z,0,os.x);for(const f of t){const g=f.group;if(g.visible=s>.02,!g.visible){f.pos.copy(c.pos).addScaledVector(os,-40).addScaledVector(ro,f.side);continue}const x=c.pos.x-os.x*(f.back+(1-s)*60)+ro.x*f.side,m=c.pos.z-os.z*(f.back+(1-s)*60)+ro.z*f.side;f.pos.x=vt(f.pos.x,x,2.2*f.lag,a),f.pos.z=vt(f.pos.z,m,2.2*f.lag,a);const p=((o/f.period+f.phase)%1+1)%1,M=it(p/.45,0,1),y=p<.45?Math.sin(M*Math.PI):-Math.sin((p-.45)/.55*Math.PI)*.5,S=Di(f.pos.x,f.pos.z,o)-1.4+y*f.height*s;g.position.set(f.pos.x,S,f.pos.z);const b=p<.45?Math.cos(M*Math.PI):-Math.cos((p-.45)/.55*Math.PI)*.5;g.rotation.set(-b*.9,c.heading,0,"YXZ")}return d}}}function Yn(n,e,t,i=null){for(let s=0;s<t;s++){const r=V(0,mi),o=Cn(e,r)*Math.sqrt(V(.05,.92)),a=e.centre.x+Math.cos(r)*o,c=e.centre.z+Math.sin(r)*o;Fi(n,a,c,V(.6,1.15),i?Dt(i):null)}}function JM(n,e){const t=A_(n),i=iM(n),s=sM(n),r=pM(n),o=MM(n),a=ct.trees;Yn(n,Ut("harbour"),Math.round(a*.2),["olive","olive","pine","round","cypress"]),Yn(n,Ut("cove"),Math.round(a*.08),["pine","round","olive"]),Yn(n,Ut("canyon"),Math.round(a*.08),["cypress","pine","olive"]),Yn(n,Ut("falls"),Math.round(a*.13),["round","round","pine","cypress"]),Yn(n,Ut("atoll"),Math.round(a*.07),["palm"]),Yn(n,Ut("fortress"),Math.round(a*.04),["cypress","olive"]),Yn(n,Ut("chapel"),6,["cypress"]),Yn(n,Ut("pines"),Math.round(a*.2),["pine","pine","pine","round"]);for(const y of nn)y.spires||y.lagoon||Yn(n,y,Math.round(a*(y.base/330)*.35),["bush"]);const c=e.clouds,l=[...i.moorings];for(let y=0;y<ct.boats;y++){let _=0,S=0;for(let b=0;b<24&&(_=V(-1100,1100),S=V(-1100,1100),!(Fe(_,S)<-14));b++);l.push(ws(n,_,S,V(.7,1.25)))}const u=YM(n);l.push(...u.boats);const h={centre:{x:430,z:330},radius:110};for(let y=0;y<(ct.tier==="low"?3:6);y++){const _=ws(n,h.centre.x,h.centre.z,V(.75,.95),{kind:"sail"});_.course={...h,angle:y/6*mi*.5,speed:V(5.5,7),wobble:V(-8,8)},_.drift=0,_.heel=V(.16,.24),l.push(_)}const d=KM(n,ct.tier==="low"?3:5),f=AM(n),g=IM(n),x=bM(n);X_(n);const m={village:he.villageCentre,harbour:he.harbour,lighthouse:he.lighthouse,cove:he.coveBeach,arch:vd(),summit:he.summit,beachCamp:r.camp.spot,canyon:he.canyonMouth,canyonEnd:he.canyonEnd,falls:o.position,lagoon:he.lagoon,campanile:he.church,lido:he.villageBeach,chapel:he.chapel,fortress:he.fortress,stacks:he.stacks,wreck:he.wreck,pines:Ut("pines").centre,grotto:he.grottoMouth},p=new L;function M(y,_,S,b,{beamOpacity:A=.15,onBirdScatter:v,onDolphins:E}={}){p.copy(S.pos),gd.time.value=y,Io.time.value=y,Io.gust.value=b.gust,Dc.time.value=y;for(const R of c)R.group.position.x+=R.drift*_*(1+b.gust*.8),R.group.position.y+=Math.sin(y*.12+R.bob)*_*.6,R.group.position.x>1700&&(R.group.position.x=-1700);for(const R of l){const{group:C}=R;if(R.lake!=null){C.position.y=R.lake+.9+Math.sin(y*.8+R.phase)*.05;continue}const I=Di(C.position.x,C.position.z,y),X=Di(C.position.x,C.position.z+6,y),F=Di(C.position.x+6,C.position.z,y);if(C.position.y=I+(R.ride??1.05),C.rotation.x=vt(C.rotation.x,(X-I)*.08,3,_),C.rotation.z=vt(C.rotation.z,-(F-I)*.08+(R.heel??0),3,_),R.course){const k=R.course;k.angle+=k.speed/k.radius*_;const N=k.radius+k.wobble+Math.sin(k.angle*3)*12;C.position.x=k.centre.x+Math.cos(k.angle)*N,C.position.z=k.centre.z+Math.sin(k.angle)*N;const B=Math.atan2(-Math.sin(k.angle),Math.cos(k.angle));C.rotation.y+=Co(C.rotation.y,B)*Math.min(1,_*2)}else if(R.drift>0){const N=C.position.x+Math.sin(R.heading)*26,B=C.position.z+Math.cos(R.heading)*26;Fe(N,B)>-5?R.turnTimer<=0&&(R.turn=Math.sin(R.heading*3.1+C.position.x*.01)>0?1:-1,R.turnTimer=4):R.turnTimer<=0&&(R.turn=0),R.turnTimer=Math.max(0,R.turnTimer-_),R.heading+=R.turn*.5*_;const J=R.drift*_,O=C.position.x+Math.sin(R.heading)*J,$=C.position.z+Math.cos(R.heading)*J;Fe(O,$)<-3&&(C.position.x=O,C.position.z=$),C.rotation.y+=Co(C.rotation.y,R.heading)*Math.min(1,_*1.6)}}RM(y,_,p,v),CM(i.villagers,y,_,p),NM(g,y,_),Y_(y,b.gust),x.update(y,_),d.update(y,_,S)&&E?.(),o.update(y),s.update(y,A)}return{islands:t,island:t.byKey.harbour,village:i,lighthouse:s,cove:r,falls:o,whales:x,dolphins:d,places:u,clouds:c,boats:l,birds:f,aiPlanes:g,landmarks:m,specs:nn,update:M}}const Xe={pitchRate:1.3,rollRate:2.9,yawRate:.52,maxRoll:1.25,trickRollRate:4.4,pitchCentring:.5,rollCentring:1.5,minSpeed:13,maxSpeed:96,baseSpeed:20,throttleSpeed:40,boostSpeed:21,pitchSpeedTrade:30,speedResponse:1.25,turnBase:.4,turnFromSpeed:.0075,bankSink:.5,liftPerSpeed:.02,sinkPerSpeed:.24,liftNeutralSpeed:34,idleSink:.5,invertedSink:4.5,invertedPatience:3,stallSpeed:25,stallAuthority:.45,stallNoseDown:.6,waterCushion:9,landCushion:19,cushionRise:5.5,lookAhead:52,skimScrub:.22,skimHeight:10,roofCushion:4,landingSpeed:32,touchdownHeight:6,floatDraft:3,taxiSpeed:34,taxiBoost:9,takeoffSpeed:30,waterSteer:.85,waterDrag:.9,waterBrake:2.6,ceiling:760,softCeiling:720,homeRadius:1450,turnHomeRate:.18},oo=Math.PI*2;function QM(){return{pos:new L(-60,108,330),velocity:new L,quat:new kn,heading:Math.PI*.86,pitch:-.03,roll:0,bank:0,climb:0,rollBase:0,trick:null,throttle:.64,speed:40,wobble:0,stall:0,contact:0,overWater:!0,skimming:!1,boosting:!1,groundClearance:100,waterborne:!1,justLanded:!1,justTookOff:!1,grounded:!1,underRoof:null,loopProgress:0,rollProgress:0,invertedTime:0,justDid:null}}const Fn=new L,di=new L,oh=new L,ds=new L,Oa=new L,Uo=new kn,pi=new xi(0,0,0,"YXZ"),Mo=new L(0,1,0);function jM(n){n.heading===n._h&&n.pitch===n._p&&n.roll===n._r||(pi.set(-n.pitch,n.heading,n.roll,"YXZ"),n.quat.setFromEuler(pi),n.rollBase=Math.abs(n.roll)>Math.PI/2?Math.PI:0,n.trick=null,Ri(n))}function Ri(n){pi.setFromQuaternion(n.quat,"YXZ"),n.heading=pi.y,n.pitch=-pi.x,n.roll=pi.z,Fn.set(0,0,1).applyQuaternion(n.quat),di.set(0,1,0).applyQuaternion(n.quat),oh.set(-1,0,0).applyQuaternion(n.quat),n.climb=Math.asin(it(Fn.y,-1,1)),n.bank=Math.atan2(-oh.y,di.y),n._h=n.heading,n._p=n.pitch,n._r=n.roll}function qs(n,e,t,i,s){s&&(ds.set(e,t,i),Uo.setFromAxisAngle(ds,s),n.quat.multiply(Uo))}function yo(n,e,t){t&&(Uo.setFromAxisAngle(e,t),n.quat.premultiply(Uo))}function Ys(n,e){Fn.set(0,0,1).applyQuaternion(n.quat),ds.crossVectors(Fn,Mo),!(ds.lengthSq()<1e-6)&&(ds.normalize(),yo(n,ds,e))}const ao=n=>Math.atan2(Math.sin(n),Math.cos(n));function ah(n,e,t,i,s){if(n.justLanded=!1,n.justTookOff=!1,n.justDid=null,jM(n),n.waterborne)return ey(n,e,i,s),pi.set(-n.pitch,n.heading,n.roll,"YXZ"),n.quat.setFromEuler(pi),Ri(n),n;const r=ms(it(e.pitch,-1,1)),o=ms(it(e.roll,-1,1)),a=ms(it(e.yaw,-1,1),.1,.2);n.boosting=!!e.boost;const c=Wt(Xe.stallSpeed+6,Xe.stallSpeed-6,n.speed);n.stall=vt(n.stall,c,4,i);const l=1-n.stall*(1-Xe.stallAuthority),u=it(n.speed/60,.4,1.3),h=r*Xe.pitchRate*(.62+.38*u)*l;qs(n,1,0,0,-h*i),n.loopProgress=Math.abs(r)>.3?n.loopProgress+h*i:0,Ri(n);const d=Math.abs(r)+Math.abs(o)+Math.abs(a)>.04;n.handsOff=d?0:(n.handsOff??0)+i,n.rollBase&&n.handsOff>Xe.invertedPatience&&(n.rollBase=0),e.trick&&!n.trick&&(n.trick={dir:Math.sign(e.trick),rolled:0,holding:!0});let f;if(n.trick){const me=n.trick;me.holding&&!(Math.sign(o)===me.dir&&Math.abs(o)>.4)&&(me.holding=!1,me.target=me.rolled<Math.PI*.6?oo:Math.ceil(me.rolled/Math.PI)*Math.PI),f=me.dir*Xe.trickRollRate;let oe=Xe.trickRollRate*i;if(!me.holding){const G=me.target-me.rolled;G<=oe&&(oe=Math.max(0,G),f=me.dir*oe/i,n.rollBase=Math.abs(ao(n.bank+me.dir*oe))>Math.PI/2?Math.PI:0,me.target>=oo-.01&&(n.justDid="roll"),n.trick=null)}me.rolled+=oe}else{const me=n.rollBase+o*Xe.maxRoll,oe=ao(me-n.bank),G=Math.abs(o)<.04,Q=G?Wt(.25,.6,Math.abs(Math.cos(n.climb)))*(Math.abs(r)>.5?0:1):1,de=G?Xe.rollCentring:Xe.rollRate;f=it(oe*de*Q,-4.4,Xe.trickRollRate)}qs(n,0,0,1,f*i),n.rollProgress=n.trick?n.trick.rolled:0,qs(n,0,1,0,-a*Xe.yawRate*i),n.wobble+=i*(2.2+n.speed*.02);const g=t.gust*(.05+n.stall*.12);qs(n,0,0,1,Math.sin(n.wobble*1.7)*g*i*2.4),qs(n,1,0,0,-Math.sin(n.wobble*2.3+1.1)*g*i*1.4),Ri(n);const m=Math.sin(n.bank)*Math.max(0,Math.cos(n.climb))*(Xe.turnBase+n.speed*Xe.turnFromSpeed)*l;yo(n,Mo,-m*i);const p=n.rollBase===0&&!n.trick;Math.abs(r)<.04&&Math.abs(n.climb)<1.1&&Ys(n,-n.climb*Xe.pitchCentring*(p?1:.4)*i),n.stall>.01&&Ys(n,-n.stall*Xe.stallNoseDown*Math.cos(n.climb*.5)*i),Ri(n);const M=Xe.baseSpeed+n.throttle*Xe.throttleSpeed+(n.boosting?Xe.boostSpeed:0)-Math.sin(n.climb)*Xe.pitchSpeedTrade,y=n.climb>.5&&M<n.speed?Xe.speedResponse*1.4:Xe.speedResponse;n.speed=vt(n.speed,M,y,i),n.speed=it(n.speed,Xe.minSpeed,Xe.maxSpeed),Fn.set(0,0,1).applyQuaternion(n.quat),di.set(0,1,0).applyQuaternion(n.quat),n.velocity.copy(Fn).multiplyScalar(n.speed);const _=n.speed-Xe.liftNeutralSpeed,S=_*(_>=0?Xe.liftPerSpeed:Xe.sinkPerSpeed),b=(1-n.throttle)*Xe.idleSink,A=Math.abs(Math.sin(n.bank))*Xe.bankSink,v=Math.max(0,-di.y);n.velocity.y+=S*Math.max(0,di.y)-b-A-v*Xe.invertedSink,n.velocity.x+=t.vector.x*.35,n.velocity.z+=t.vector.z*.35,n.velocity.y+=t.updraft*.5,n.pos.addScaledVector(n.velocity,i),n.invertedTime=di.y<-.6?n.invertedTime+i:0,n.loopProgress>oo*.92?(n.justDid="loop",n.loopProgress=0):n.loopProgress<-oo*.92&&(n.justDid="outside loop",n.loopProgress=0);const E=Sr(n.pos.x,n.pos.z);n.underRoof=null;let R=null;if(E)if(n.pos.y<E.bottom){n.underRoof=E.bottom;const me=E.bottom-Xe.roofCushion;n.pos.y>me&&(n.pos.y=vt(n.pos.y,me,8,i),n.climb>0&&Ys(n,-n.climb*4*i))}else R=Math.max(sl(E,n.pos.x,n.pos.z),Fe(n.pos.x,n.pos.z));const C=R??ld(n.pos.x,n.pos.z),I=n.underRoof!=null?vi:Wo(n.pos.x,n.pos.z);n.overWater=C<=I,n.onLake=n.overWater&&I>vi;const X=n.overWater?n.onLake?I:Di(n.pos.x,n.pos.z,s):0,F=Math.max(C,X);n.surfaceY=F,n.groundClearance=n.pos.y-F;const k=Math.hypot(Fn.x,Fn.z)||1,N=Xe.lookAhead*it(n.speed/50,.5,1.2);Oa.set(n.pos.x+Fn.x/k*N,n.pos.y,n.pos.z+Fn.z/k*N);const B=rr(Oa.x,n.pos.y,Oa.z),J=n.pos.y-B,O=B>n.pos.y-2,$=n.overWater&&!O?Xe.waterCushion:Xe.landCushion,j=n.overWater&&!O&&n.speed<Xe.landingSpeed&&di.y>.7,pe=O?Math.min(n.groundClearance,J):n.groundClearance,re=j?0:it(1-pe/$,0,1);if(n.contact=vt(n.contact,re,9,i),re>0){const me=(O?Math.max(F,B):F)+$*.72,oe=n.underRoof?n.underRoof-Xe.roofCushion:1/0;n.pos.y=Math.min(vt(n.pos.y,Math.max(n.pos.y,me),Xe.cushionRise*re,i),Math.max(oe,me)),n.climb<.16*re&&Ys(n,(.16*re-n.climb)*3.5*re*i),di.y<.2&&!n.trick&&(n.rollBase=0),n.speed*=1-Xe.skimScrub*re*i;const G=Xo(n.pos.x,n.pos.z,14);if(Math.hypot(G.x,G.z)>.25){const Q=Math.atan2(-G.x,-G.z),de=ao(Q-n.heading);yo(n,Mo,de*re*.45*i)}}if(n.skimming=n.overWater&&n.groundClearance<Xe.skimHeight,j&&n.groundClearance<Xe.touchdownHeight&&n.velocity.y<3)return n.waterborne=!0,n.justLanded=!0,n.trick=null,n.rollBase=0,n.speed=Math.min(n.speed,Xe.takeoffSpeed-6),n.pos.y=F+Xe.floatDraft,Ri(n),n.pitch=0,n.roll=0,n;n.pos.y>Xe.softCeiling&&(n.pos.y=vt(n.pos.y,Xe.softCeiling,1.6,i),n.climb>.1&&Ys(n,-(n.climb-.1)*2*i)),n.pos.y=Math.min(n.pos.y,Xe.ceiling);const Ge=Math.hypot(n.pos.x,n.pos.z);if(Ge>Xe.homeRadius){const me=Math.atan2(-n.pos.x,-n.pos.z),oe=ao(me-n.heading),G=Wt(Xe.homeRadius,Xe.homeRadius+320,Ge);yo(n,Mo,oe*Xe.turnHomeRate*G*i*3)}return n.quat.normalize(),Ri(n),n}function ey(n,e,t,i){const s=it(ms(it(e.roll,-1,1))+ms(it(e.yaw,-1,1),.1,.2),-1,1);n.boosting=!!e.boost,n.contact=1,n.stall=0;const r=Sr(n.pos.x,n.pos.z);n.underRoof=r&&n.pos.y<r.bottom?r.bottom:null;const o=n.underRoof!=null?vi:Wo(n.pos.x,n.pos.z);n.onLake=o>vi;const a=it(ms(it(e.pitch,-1,1)),0,1),c=n.onLake,l=n.throttle*Xe.taxiSpeed+(n.boosting?Xe.taxiBoost:0);n.speed=vt(n.speed,l,Xe.waterDrag*(c?2:1),t),a>0&&(n.speed=vt(n.speed,0,Xe.waterBrake*a,t)),n.speed<.25&&(n.speed=0);const u=.5+it(n.speed/26,0,1)*.75;n.heading-=s*Xe.waterSteer*u*t;const h=n.speed*t,d=n.pos.x+Math.sin(n.heading)*h,f=n.pos.z+Math.cos(n.heading)*h;(n.onLake?Fe(d,f,!0):Fe(d,f))<o-(c?.6:1.5)?(n.pos.x=d,n.pos.z=f,n.grounded=!1):(n.speed*=1-2.4*t,n.grounded=!0);const x=(y,_)=>n.onLake?o:Di(y,_,i),m=x(n.pos.x,n.pos.z),p=x(n.pos.x+Math.sin(n.heading)*6,n.pos.z+Math.cos(n.heading)*6),M=x(n.pos.x+Math.cos(n.heading)*6,n.pos.z-Math.sin(n.heading)*6);return n.surfaceY=m,n.pos.y=vt(n.pos.y,m+Xe.floatDraft,8,t),n.pitch=vt(n.pitch,(p-m)*.06,3,t),n.roll=vt(n.roll,(M-m)*.05+s*.12,3,t),n.velocity.set(Math.sin(n.heading)*n.speed,0,Math.cos(n.heading)*n.speed),n.groundClearance=Xe.floatDraft,n.overWater=!0,n.skimming=n.speed>10,n.speed>Xe.takeoffSpeed*(c?.85:1)&&(n.waterborne=!1,n.justTookOff=!0,n.grounded=!1,n.speed=Math.max(n.speed,Xe.landingSpeed+1),n.pitch=.14,n.contact=0),n}function ty(){const n=new L,e={vector:n,gust:0,updraft:0,direction:0,speed:0};function t(i,s){e.direction=2.1+Math.sin(i*.021)*.55+Math.sin(i*.0073+1.7)*.3;const r=2.6+Math.sin(i*.037+.4)*1.1,o=Math.sin(i*.31)*.5+Math.sin(i*.72+1.3)*.3+Math.sin(i*1.27+2.9)*.2;e.gust=it(Wt(.05,.75,o)*(.55+Math.sin(i*.11)*.45),0,1),e.speed=r+e.gust*5.2,n.set(Math.sin(e.direction),0,Math.cos(e.direction)).multiplyScalar(e.speed);const a=Fe(s.x,s.z),c=s.y-Math.max(a,0),l=Wt(150,12,c);if(l>.01&&a>-6){const u=Xo(s.x,s.z,12),h=-(u.x*n.x+u.z*n.z);e.updraft=it(h*.85,-3.5,7)*l}else e.updraft=0;return n.y=e.updraft,e}return{state:e,update:t}}const Cd=["Chase","Close","Postcard"],co=new L,yn=new L,lo=new L,li=new L,$s=new L,ui=new L(0,1,0),uo=new L;function ny(n,{mode:e=0}={}){const t=new L,i={mode:e,fov:58,postcardAngle:.9,photo:{active:!1,yaw:.7,pitch:.22,distance:34,autoSpin:1,idle:0}};function s(){return i.mode=(i.mode+1)%Cd.length,i.mode}const r=new L(0,0,1),o=new L(0,1,0),a=new L,c=new L;let l=0;function u(m,p,M,{boosting:y=!1}={}){c.set(0,0,1).applyQuaternion(M.quaternion),a.set(0,1,0).applyQuaternion(M.quaternion),co.copy(c),yn.set(c.x,0,c.z),yn.lengthSq()<1e-4&&yn.copy(r).setY(0),yn.normalize(),lo.set(-yn.z,0,yn.x);const _=Math.max(Wt(.75,1.15,Math.abs(p.climb??p.pitch)),Wt(.35,-.2,a.y));l=vt(l,_,_>l?3:.8,m),r.lerp(c,1-Math.exp(-4.2*m)).normalize(),o.lerp(a,1-Math.exp(-3.4*m)).normalize();const S=it((p.speed-20)/55,0,1);let b=4.6,A=58;if(i.photo.active){const R=i.photo;R.idle+=m,R.idle>2.5&&(R.yaw+=m*.09*R.autoSpin);const C=Math.cos(R.pitch);li.set(Math.sin(R.yaw)*C,Math.sin(R.pitch),Math.cos(R.yaw)*C).multiplyScalar(R.distance).add(M.position),$s.copy(M.position),b=7,A=46}else if(i.mode===0){const R=Math.sin(p.roll),C=p.waterborne?-18:-26-S*6,I=p.waterborne?5.5:9.2;li.copy(p.pos).addScaledVector(yn,C).addScaledVector(lo,-R*4.5).addScaledVector(ui,I-(p.climb??p.pitch)*4),uo.copy(p.pos).addScaledVector(r,C).addScaledVector(o,I*.8),li.lerp(uo,l),$s.copy(p.pos).addScaledVector(co,30).addScaledVector(ui,1.6),b=4.2+S*1.6+l*3,A=58+S*4+l*4}else if(i.mode===1)li.copy(p.pos).addScaledVector(yn,-12.5).addScaledVector(ui,4.2),uo.copy(p.pos).addScaledVector(r,-12.5).addScaledVector(o,4),li.lerp(uo,l),$s.copy(p.pos).addScaledVector(co,42),b=6.5+l*3,A=62+S*4;else{i.postcardAngle+=m*.06;const R=Math.sin(i.postcardAngle)*.55;li.copy(p.pos).addScaledVector(lo,30+R*14).addScaledVector(yn,-34+R*9).addScaledVector(ui,16+Math.sin(i.postcardAngle*.7)*5),$s.copy(p.pos).addScaledVector(co,16),b=2.4,A=52}y&&(A+=7),h(li,p.pos),n.position.lerp(li,1-Math.exp(-b*m));const v=rr(n.position.x,n.position.y,n.position.z)+3.5;n.position.y<v&&(n.position.y=tl(n.position.y,v,.6)),t.lerp($s,1-Math.exp(-(b+2)*m));const E=i.photo.active?0:Math.sin(p.roll)*.14;ui.set(0,1,0).addScaledVector(lo,E).normalize(),!i.photo.active&&i.mode!==2&&ui.lerp(o,l*.85).normalize(),n.up.lerp(ui,1-Math.exp(-4*m)).normalize(),ui.set(0,1,0),n.lookAt(t),i.fov=vt(i.fov,A,3.2,m),Math.abs(n.fov-i.fov)>.01&&(n.fov=i.fov,n.updateProjectionMatrix())}function h(m,p){let y=1;for(let S=1;S<=6;S++){const b=S/6,A=p.x+(m.x-p.x)*b,v=p.y+(m.y-p.y)*b,E=p.z+(m.z-p.z)*b;if(v<rr(A,v,E)+3){y=(S-1)/6;break}}if(y>=1)return;const _=Math.max(y,.4);m.set(p.x+(m.x-p.x)*_,Math.max(p.y+(m.y-p.y)*_,rr(m.x,p.y,m.z)+3.5),p.z+(m.z-p.z)*_)}function d(m){yn.set(Math.sin(m.heading),0,Math.cos(m.heading)),n.position.copy(m.pos).addScaledVector(yn,-28).add(new L(0,10,0)),t.copy(m.pos),n.lookAt(t)}function f(m,p){const M=i.photo;M.yaw-=m*.006,M.pitch=it(M.pitch+p*.005,-.5,1.25),M.idle=0,M.autoSpin=m===0?M.autoSpin:Math.sign(-m)||1}function g(m){i.photo.distance=it(i.photo.distance*(1+m*.0016),12,130),i.photo.idle=0}function x(m,p){if(i.photo.active=m,m){i.photo.idle=0;const M=n.position.x-(p?.x??0),y=n.position.z-(p?.z??0);i.photo.yaw=(Math.atan2(M,y)+rt)%rt,i.photo.distance=it(Math.hypot(M,y),22,60),i.photo.pitch=.22}}return{state:i,update:u,cycle:s,reset:d,orbit:f,zoom:g,setPhoto:x,lookAt:t}}const Zs=new L,ho=new L,Ai=new L,ch=new L;function iy(n){const e=ct.contrailLength,t=[-1,1].map(c=>{const l=new xt,u=new Float32Array(e*2*3),h=new Float32Array(e*2*4),d=[];for(let g=0;g<e-1;g++){const x=g*2;d.push(x,x+1,x+2,x+1,x+3,x+2)}l.setAttribute("position",new Ze(u,3).setUsage(Li)),l.setAttribute("color",new Ze(h,4).setUsage(Li)),l.setIndex(d);const f=new D(l,new xs({vertexColors:!0,transparent:!0,depthWrite:!1,blending:lr,fog:!1}));return f.frustumCulled=!1,f.renderOrder=2,n.add(f),{side:c,mesh:f,geometry:l,history:Array.from({length:e},()=>({p:new L,strength:0})),ready:!1}});let i=0;const s=1/40;let r=0;function o(c,l,u,h){const d=u.waterborne?0:u.boosting?1:u.contact>.35&&u.speed>52?.45:0;i=vt(i,d,d>i?7:2.2,c),r+=c;const f=r>=s;f&&(r%=s);for(const g of t){Zs.set(g.side*7,3.1,-.2),l.localToWorld(Zs);const x=g.history;if(f){const M=x.shift();M.p.copy(Zs),M.strength=i,x.push(M)}else{const M=x[x.length-1];M.p.copy(Zs),M.strength=i}if(!g.ready){for(const M of x)M.p.copy(Zs);g.ready=!0}const m=g.geometry.attributes.position.array,p=g.geometry.attributes.color.array;for(let M=0;M<x.length;M++){const y=x[M],_=x[Math.min(x.length-1,M+1)],S=x[Math.max(0,M-1)];ho.copy(_.p).sub(S.p),ho.lengthSq()<1e-8&&ho.set(0,0,1),ch.copy(h.position).sub(y.p),Ai.crossVectors(ho,ch),Ai.lengthSq()<1e-8&&Ai.set(1,0,0),Ai.normalize();const b=M/(x.length-1),A=.28+(1-b)*.85,v=y.strength*b*b*.2;for(let E=0;E<2;E++){const R=(M*2+E)*3,C=E===0?-1:1;m[R]=y.p.x+Ai.x*A*C,m[R+1]=y.p.y+Ai.y*A*C,m[R+2]=y.p.z+Ai.z*A*C;const I=(M*2+E)*4;p[I]=1,p[I+1]=.97,p[I+2]=.92,p[I+3]=v}}g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.color.needsUpdate=!0,g.mesh.visible=i>.01||a(x)}}function a(c){for(const l of c)if(l.strength>.01)return!0;return!1}return{update:o}}function sy(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.45,"rgba(255,255,255,0.75)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64);const s=new Yf(e);return s.colorSpace=rn,s}function ry(n){const e=ct.spray,t=new xt,i=new Float32Array(e*3),s=new Float32Array(e*4);t.setAttribute("position",new Ze(i,3).setUsage(Li)),t.setAttribute("color",new Ze(s,4).setUsage(Li));const r=new Fh(t,new Nh({size:1.7,map:sy(),sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!0}));r.frustumCulled=!1,r.renderOrder=3,n.add(r);const o=Array.from({length:e},()=>({pos:new L,vel:new L,life:0}));let a=0,c=0;function l(h,d){const f=o[a];a=(a+1)%e,f.pos.set(h.pos.x+V(-2.5,2.5),(h.surfaceY??Di(h.pos.x,h.pos.z,d))+V(0,1),h.pos.z+V(-2.5,2.5)),f.vel.set(V(-4,4),V(5,13),V(-4,4)).addScaledVector(h.velocity,.06),f.life=V(.6,1.3)}function u(h,d,f){if(d.skimming&&d.speed>22){const p=it((Xe.skimHeight+2-d.groundClearance)/8,0,1)*95;for(c+=p*h;c>1;)l(d,f),c-=1}else c=0;const g=t.attributes.position.array,x=t.attributes.color.array;let m=0;for(let p=0;p<o.length;p++){const M=o[p];M.life>0&&(M.life-=h,M.vel.y-=17*h,M.vel.multiplyScalar(Math.exp(-1.1*h)),M.pos.addScaledVector(M.vel,h),m++),g[p*3]=M.pos.x,g[p*3+1]=M.pos.y,g[p*3+2]=M.pos.z,x[p*4]=1,x[p*4+1]=1,x[p*4+2]=.97,x[p*4+3]=it(M.life,0,1)*.85}t.attributes.position.needsUpdate=!0,t.attributes.color.needsUpdate=!0,r.visible=m>0}return{update:u}}const oy=`
  attribute float size;
  attribute vec4 tint;
  varying vec4 vTint;
  uniform float scale;
  void main() {
    vTint = tint;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * scale / max(1.0, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,ay=`
  varying vec4 vTint;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    // A cel puff: flat colour with a soft rim, and a little shade underneath.
    float a = smoothstep(0.5, 0.36, d) * vTint.a;
    if (a < 0.01) discard;
    float shade = smoothstep(-0.1, 0.35, c.y) * 0.18;
    gl_FragColor = vec4(vTint.rgb * (1.0 - shade), a);
  }
`,Pd=["Off","Smoke on","Tricolore"],lh=[[.1,.62,.32],[1,1,.97],[.86,.16,.2]];function cy(n){const e=ct.tier==="low"?600:1400,t=new xt,i=new Float32Array(e*3),s=new Float32Array(e),r=new Float32Array(e*4);t.setAttribute("position",new Ze(i,3).setUsage(Li)),t.setAttribute("size",new Ze(s,1).setUsage(Li)),t.setAttribute("tint",new Ze(r,4).setUsage(Li));const o=new Xt({vertexShader:oy,fragmentShader:ay,transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}}}),a=new Fh(t,o);a.frustumCulled=!1,a.renderOrder=3,n.add(a);const c=Array.from({length:e},()=>({pos:new L,vel:new L,life:0,max:1,colour:[1,1,1]}));let l=0,u=0,h=0;const d=new L;function f(x,m,p,M){const y=c[l];l=(l+1)%e,d.copy(x),m.localToWorld(d),y.pos.copy(d),y.vel.copy(p.velocity).multiplyScalar(.12),y.vel.x+=V(-.6,.6),y.vel.y+=V(-.2,.8),y.vel.z+=V(-.6,.6),y.max=V(6,8.5),y.life=y.max,y.colour=M}const g=[new L(6.4,3,-.4),new L(0,.5,-6.4),new L(-6.4,3,-.4)];return{get mode(){return u},cycle(){return u=(u+1)%Pd.length,u},update(x,m,p,M){if(o.uniforms.scale.value=M*.9,u&&!p.waterborne)for(h+=x*45;h>1;)if(h-=1,u===2)for(let A=0;A<3;A++)f(g[A],m,p,lh[A]);else f(g[1],m,p,lh[1]);else h=0;const y=t.attributes.position.array,_=t.attributes.size.array,S=t.attributes.tint.array;let b=0;for(let A=0;A<e;A++){const v=c[A];v.life>0&&(v.life-=x,v.vel.multiplyScalar(Math.exp(-.9*x)),v.vel.y+=.25*x,v.pos.addScaledVector(v.vel,x),b++);const E=1-Math.max(0,v.life)/v.max;y[A*3]=v.pos.x,y[A*3+1]=v.pos.y,y[A*3+2]=v.pos.z,_[A]=1.6+E*7,S[A*4]=v.colour[0],S[A*4+1]=v.colour[1],S[A*4+2]=v.colour[2],S[A*4+3]=v.life>0?Math.min(1,E*12)*(1-E)*.85:0}t.attributes.position.needsUpdate=!0,t.attributes.size.needsUpdate=!0,t.attributes.tint.needsUpdate=!0,a.visible=b>0}}}function ly({canvas:n,actions:e={},onFirstInput:t}={}){const i=Object.create(null),s={pitch:0,roll:0};let r=!1,o=0;const a={dir:0,at:-1},c=.32;function l(N){const B=performance.now()/1e3;a.dir===N&&B-a.at<c?(o=N,a.at=-1):(a.dir=N,a.at=B)}let u=!1;const h={pitch:0,roll:0,yaw:0,boost:!1,throttleAxis:0,throttleSet:null,touching:!1,lastActivity:0,trick:0};let d=!1;const f=()=>{h.lastActivity=0,!d&&(d=!0,t?.())},g={KeyC:"camera",KeyH:"hud",KeyM:"sound",KeyP:"photo",KeyL:"light",KeyI:"invertPitch",KeyX:"smoke",Escape:"escape"};addEventListener("keydown",N=>{if(N.repeat){i[N.code]=!0;return}i[N.code]=!0,f(),(N.code==="KeyA"||N.code==="ArrowLeft")&&l(-1),(N.code==="KeyD"||N.code==="ArrowRight")&&l(1);const B=g[N.code];B&&e[B]&&(e[B](),N.preventDefault()),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(N.code)&&N.preventDefault()}),addEventListener("keyup",N=>{i[N.code]=!1}),addEventListener("blur",()=>{for(const N of Object.keys(i))i[N]=!1;h.boost=!1});const x=document.querySelector("#joy"),m=document.querySelector("#knob"),p=document.querySelector("#throttle"),M=document.querySelector("#throttleFill"),y=document.querySelector("#boostBtn");if(x&&m){let N=null;const B=O=>{const $=x.getBoundingClientRect();let j=O.clientX-($.left+$.width/2),pe=O.clientY-($.top+$.height/2);const re=$.width*.34,Ge=Math.hypot(j,pe)||1;Ge>re&&(j=j/Ge*re,pe=pe/Ge*re),m.style.transform=`translate(${j}px, ${pe}px)`;const me=it(j/re,-1,1);Math.abs(me)>.85&&Math.abs(s.roll)<=.85&&l(Math.sign(me)),s.roll=me,s.pitch=it(-pe/re,-1,1)};x.addEventListener("pointerdown",O=>{N=O.pointerId,x.setPointerCapture(N),h.touching=!0,B(O),f()}),x.addEventListener("pointermove",O=>{O.pointerId===N&&B(O)});const J=O=>{O.pointerId===N&&(N=null,h.touching=!1,s.pitch=0,s.roll=0,m.style.transform="translate(0, 0)")};x.addEventListener("pointerup",J),x.addEventListener("pointercancel",J)}if(p&&M){let N=null;const B=O=>{const $=p.getBoundingClientRect();h.throttleSet=it(1-(O.clientY-$.top)/$.height,0,1)};p.addEventListener("pointerdown",O=>{N=O.pointerId,p.setPointerCapture(N),B(O),f()}),p.addEventListener("pointermove",O=>{O.pointerId===N&&B(O)});const J=()=>{N=null};p.addEventListener("pointerup",J),p.addEventListener("pointercancel",J)}if(document.querySelector("#smokeBtn")?.addEventListener("pointerdown",N=>{N.preventDefault(),f(),e.smoke?.()}),y){const N=J=>{J.preventDefault(),r=!0,f()},B=()=>{r=!1};y.addEventListener("pointerdown",N),y.addEventListener("pointerup",B),y.addEventListener("pointercancel",B),y.addEventListener("pointerleave",B)}if(n){const N=new Map;let B=0;n.addEventListener("pointerdown",O=>{N.set(O.pointerId,{x:O.clientX,y:O.clientY}),n.setPointerCapture?.(O.pointerId),f()}),n.addEventListener("pointermove",O=>{const $=N.get(O.pointerId);if(!$)return;const j=O.clientX-$.x,pe=O.clientY-$.y;if($.x=O.clientX,$.y=O.clientY,N.size>=2){const[re,Ge]=[...N.values()],me=Math.hypot(re.x-Ge.x,re.y-Ge.y);B&&e.zoom?.((B-me)*2.4),B=me}else e.orbit?.(j,pe)});const J=O=>{N.delete(O.pointerId),N.size<2&&(B=0)};n.addEventListener("pointerup",J),n.addEventListener("pointercancel",J),n.addEventListener("wheel",O=>{O.preventDefault(),e.zoom?.(O.deltaY)},{passive:!1})}const S={on:!1,pitch:0,roll:0,base:null,raw:null},b=28;function A(){return(screen.orientation&&screen.orientation.angle)??window.orientation??0}function v(N){if(N.beta==null)return;const B=(A()%360+360)%360;let J=N.beta,O=N.gamma;B===90?[J,O]=[-N.gamma,N.beta]:B===270?[J,O]=[N.gamma,-N.beta]:B===180&&([J,O]=[-N.beta,-N.gamma]),S.raw={pitch:J,roll:O},S.base||(S.base={pitch:J,roll:O});const $=J-S.base.pitch,j=O-S.base.roll;S.pitch=it($/b,-1,1),S.roll=it(j/b,-1,1),Math.abs(S.roll)>.95&&Math.abs(S.lastRoll??0)<=.95&&l(Math.sign(S.roll)),S.lastRoll=S.roll}async function E(N){if(N){const B=window.DeviceOrientationEvent;if(!B)return S.on=!1;if(typeof B.requestPermission=="function")try{if(await B.requestPermission()!=="granted")return S.on=!1}catch{return S.on=!1}if(S.base=null,S.raw=null,addEventListener("deviceorientation",v),S.on=!0,await new Promise(J=>setTimeout(J,900)),!S.raw)return removeEventListener("deviceorientation",v),S.on=!1}else removeEventListener("deviceorientation",v),S.on=!1,S.pitch=S.roll=0;return S.on}function R(){S.raw&&(S.base={...S.raw})}function C(N){const B=(i.KeyW||i.ArrowUp?1:0)-(i.KeyS||i.ArrowDown?1:0),J=(i.KeyD||i.ArrowRight?1:0)-(i.KeyA||i.ArrowLeft?1:0),O=(i.KeyE?1:0)-(i.KeyQ?1:0),$=S.on&&!h.touching,j=$?F(-S.pitch):0,pe=$?F(S.roll):0;return h.pitch=it(B+s.pitch+j,-1,1)*(u?-1:1),h.roll=it(J+s.roll+pe,-1,1),h.yaw=it(O,-1,1),h.throttleAxis=(i.KeyR?1:0)-(i.KeyF?1:0),h.boost=!!i.Space||r,h.trick=o,o=0,B||J||O||h.throttleAxis||s.pitch||s.roll||Math.abs(j)+Math.abs(pe)>.1?h.lastActivity=0:h.lastActivity+=N,h}function I(){h.throttleSet=null}function X(N){r=N}function F(N){const B=Math.abs(N);return B<.12?0:Math.sign(N)*((B-.12)/.88)}function k(N){return u=!!N,u}return{input:h,sample:C,clearThrottleSet:I,setBoost:X,setInvertPitch:k,setTilt:E,recentreTilt:R,get tilt(){return S.on},get invertPitch(){return u},keys:i,throttleFill:M}}const uy=6;function hy({actions:n={}}={}){const e={speed:document.querySelector("#speed"),alt:document.querySelector("#alt"),power:document.querySelector("#power"),hint:document.querySelector("#hint"),hud:document.querySelector("#hud"),keyhints:document.querySelector("#keyhints"),tools:document.querySelector("#tools"),intro:document.querySelector("#intro"),sound:document.querySelector("#soundBtn"),throttleFill:document.querySelector("#throttleFill"),throttle:document.querySelector("#throttle")};let t=0,i=!0,s=0,r=0,o="";const a=(g,x)=>{const m=document.querySelector(g);!m||!x||m.addEventListener("click",p=>{p.preventDefault(),x()})};a("#cameraBtn",n.camera),a("#lightBtn",n.light),a("#photoBtn",n.photo),a("#soundBtn",n.sound);function c(g,x=2.4){if(e.hint){if(g===o&&t>0){t=Math.max(t,x);return}o=g,e.hint.textContent=g,e.hint.style.opacity=i?"1":"0",t=x}}function l(){const g=i&&s>.2&&t<=0,x=m=>i?g?m*.19:m:0;e.hud.style.opacity=String(x(.94)),e.keyhints&&(e.keyhints.style.opacity=String(x(.68))),e.tools&&(e.tools.style.opacity=String(x(1)),e.tools.style.pointerEvents=i?"auto":"none"),!i&&e.hint&&(e.hint.style.opacity="0")}function u(){return i=!i,l(),i}function h(g){e.sound&&(e.sound.classList.toggle("off",!g),e.sound.textContent=g?"♪":"♪̸")}function d(g,x,m){t>0&&(t-=g,t<=0&&e.hint&&(e.hint.style.opacity="0",l()));const p=s>.2;s=m>uy?Math.min(s+g,2):0,p!==s>.2&&l(),r-=g,!(r>0)&&(r=.1,e.speed.textContent=`${Math.round(x.speed)} kt`,e.alt.textContent=`${Math.round(Math.max(0,x.pos.y))} m`,e.power.textContent=`${Math.round(x.throttle*100)}%${x.boosting?" ⚡":""}`,e.throttleFill&&(e.throttleFill.style.height=`${Math.max(8,x.throttle*92)}%`),e.throttle&&e.throttle.setAttribute("aria-valuenow",String(Math.round(x.throttle*100))))}function f(){e.intro&&(e.intro.style.opacity="0",setTimeout(()=>{e.intro.style.display="none"},500))}return{hint:c,toggle:u,update:d,setSound:h,hideIntro:f,get visible(){return i}}}function dy({rig:n,hud:e,onChange:t}={}){const i=document.querySelector("#photo"),s=document.querySelector("#flash");let r=!1,o=!1;function a(h,d){return h===r||(r=h,document.body.classList.toggle("photo",r),i?.setAttribute("aria-hidden",String(!r)),n.setPhoto(r,d),t?.(r),r||e?.hint("Back to flying",1.4)),r}const c=h=>a(!r,h);function l(){o=!0}function u(h){if(o){o=!1;try{h.domElement.toBlob(d=>{if(!d)return;const f=URL.createObjectURL(d),g=document.createElement("a"),x=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);g.href=f,g.download=`covewind-${x}.png`,document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(f),4e3)},"image/png")}catch{e?.hint("This browser would not let me save the picture",2.4);return}s&&(s.style.transition="none",s.style.opacity="0.85",requestAnimationFrame(()=>{s.style.transition="opacity .45s ease",s.style.opacity="0"}))}}return document.querySelector("#shutter")?.addEventListener("click",l),document.querySelector("#photoExit")?.addEventListener("click",()=>a(!1)),{get active(){return r},set:a,toggle:c,capture:l,flush:u}}function as(n,{refDistance:e=80,maxDistance:t=1300,rolloff:i=1.1}={}){const s=n.createPanner();return s.panningModel="equalpower",s.distanceModel="inverse",s.refDistance=e,s.maxDistance=t,s.rolloffFactor=i,s}function cs(n,e,t,i,s){if(n.positionX){const r=s.currentTime;n.positionX.setTargetAtTime(e,r,.05),n.positionY.setTargetAtTime(t,r,.05),n.positionZ.setTargetAtTime(i,r,.05)}else n.setPosition&&n.setPosition(e,t,i)}function fy(n,e,t){const i=n.createGain();i.gain.value=.85,i.connect(e);const s=n.createBufferSource();s.buffer=t,s.loop=!0;const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=520,r.Q.value=1.3;const o=n.createGain();o.gain.value=0;const a=as(n,{refDistance:110,maxDistance:900,rolloff:1.5});cs(a,he.villageCentre.x,30,he.villageCentre.z,n),s.connect(r).connect(o).connect(a).connect(i),s.start();const c=n.createBufferSource();c.buffer=t,c.loop=!0;const l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=900;const u=n.createGain();u.gain.value=0;const h=as(n,{refDistance:90,maxDistance:800,rolloff:1.4});c.connect(l).connect(u).connect(h).connect(i),c.start();function d(J,O,$){const j=n.currentTime,pe=as(n,{refDistance:60,maxDistance:700,rolloff:1.6});cs(pe,J,O,$,n),pe.connect(i);const re=n.createGain();re.gain.value=0;const Ge=n.createBiquadFilter();Ge.type="bandpass",Ge.frequency.value=1500,Ge.Q.value=4.5,re.connect(Ge).connect(pe);const me=n.createOscillator();me.type="sawtooth",me.connect(re);const oe=2+Math.floor(Math.random()*2);let G=j+.02;for(let Q=0;Q<oe;Q++){const de=820+Math.random()*420;me.frequency.setValueAtTime(de*.8,G),me.frequency.exponentialRampToValueAtTime(de*1.7,G+.07),me.frequency.exponentialRampToValueAtTime(de*.75,G+.3),re.gain.setValueAtTime(1e-4,G),re.gain.exponentialRampToValueAtTime(.5,G+.05),re.gain.exponentialRampToValueAtTime(1e-4,G+.34),G+=.42+Math.random()*.3}me.start(j),me.stop(G+.4),me.onended=()=>{me.disconnect(),re.disconnect(),Ge.disconnect(),pe.disconnect()}}function f(J,O,$,j=210,pe=.5){const re=n.currentTime,Ge=as(n,{refDistance:140,maxDistance:1600,rolloff:.9});cs(Ge,J,O,$,n),Ge.connect(i);const me=[1,2.02,2.41,3.03,4.12,5.47],oe=[1,.55,.4,.3,.16,.09],G=[];me.forEach((Q,de)=>{const Ie=n.createOscillator();Ie.type="sine",Ie.frequency.value=j*Q;const Me=n.createGain(),Oe=pe*oe[de]*.5;Me.gain.setValueAtTime(1e-4,re),Me.gain.exponentialRampToValueAtTime(Oe,re+.012),Me.gain.exponentialRampToValueAtTime(1e-4,re+Math.max(1.2,5.4-de*.55)),Ie.connect(Me).connect(Ge),Ie.start(re),Ie.stop(re+6),G.push(()=>{Ie.disconnect(),Me.disconnect()}),de===0&&(Ie.onended=()=>G.forEach(lt=>lt()))})}const g=n.createBufferSource();g.buffer=t,g.loop=!0;const x=n.createBiquadFilter();x.type="lowpass",x.frequency.value=1400;const m=n.createGain();m.gain.value=0;const p=as(n,{refDistance:90,maxDistance:900,rolloff:1.5});cs(p,he.fallsTop.x,40,he.fallsTop.z+16,n),g.connect(x).connect(m).connect(p).connect(i),g.start();const M=Td(),y=as(n,{refDistance:22,maxDistance:280,rolloff:2.1});cs(y,M.x,M.y+1,M.z,n),y.connect(i);const _=n.createBiquadFilter();_.type="bandpass",_.frequency.value=1250,_.Q.value=2.6,_.connect(y);const S=n.createGain();S.gain.value=0,S.connect(_);const b=n.createOscillator();b.type="square",b.frequency.value=440,b.connect(S),b.start();const A=n.createBufferSource();A.buffer=t,A.loop=!0;const v=n.createGain();v.gain.value=.035,A.connect(v).connect(_),A.start();const E=[0,3,5,7,5,3,0,null,3,5,7,10,12,10,7,null,5,7,5,3,0,null],R=.34;let C=0,I=n.currentTime+.5;function X(){for(I<n.currentTime&&(I=n.currentTime+.05);I<n.currentTime+.5;){const J=E[C%E.length];C++;const O=R*(C%8===0?2:1);if(J!==null){const $=440*Math.pow(2,(J+12)/12);b.frequency.setValueAtTime($,I),S.gain.setValueAtTime(1e-4,I),S.gain.exponentialRampToValueAtTime(.09,I+.02),S.gain.exponentialRampToValueAtTime(.02,I+O*.7),S.gain.exponentialRampToValueAtTime(1e-4,I+O*.95)}I+=O}}let F=2,k=40,N=0;function B(J,O,$){const j=n.currentTime,{x:pe,z:re}=O.pos,Ge=Math.hypot(pe-he.villageCentre.x,re-he.villageCentre.z);N+=J*.35;const me=it(1-(O.pos.y-20)/220,0,1),oe=it(1-Ge/320,0,1)*me*(.55+Math.sin(N)*.18);o.gain.setTargetAtTime(oe*.1,j,.4);const G=rl(pe,re);cs(h,G.spec.centre.x+Math.cos(G.theta)*(G.r-G.distance),2,G.spec.centre.z+Math.sin(G.theta)*(G.r-G.distance),n);const Q=Math.abs(G.distance),de=it(1-Q/260,0,1)*me;if(u.gain.setTargetAtTime(de*.11,j,.5),l.frequency.setTargetAtTime(600+de*900,j,.5),F-=J,F<=0){const Oe=Math.hypot(pe-he.harbour.x,re-he.harbour.z),lt=Math.hypot(pe-he.coveBeach.x,re-he.coveBeach.z),ae=lt<Oe?he.coveBeach:he.harbour,q=it(1-Math.min(Oe,lt)/460,0,1);F=2.5+Math.random()*7-q*1.6,q>.06&&d(ae.x+(Math.random()-.5)*160,24+Math.random()*60,ae.z+(Math.random()-.5)*160)}const Ie=Math.hypot(pe-he.fallsTop.x,re-he.fallsTop.z);m.gain.setTargetAtTime(it(1-Ie/620,0,1)*.17,j,.4);const Me=Math.hypot(pe-M.x,re-M.z);if(Me<320&&X(),v.gain.setTargetAtTime(Me<320?.035:0,j,.4),k-=J,k<=0){k=52+Math.random()*40;const Oe=Math.hypot(pe-he.church.x,re-he.church.z);Math.hypot(pe-he.lighthouse.x,re-he.lighthouse.z)<Oe?f(he.lighthouse.x,40,he.lighthouse.z,150,.45):(f(he.church.x,34,he.church.z,232,.5),setTimeout(()=>{try{f(he.church.x,34,he.church.z,232,.36)}catch{}},2100))}}return{update:B,gull:d,bell:f,bus:i}}const uh=.13;function py(){let n=null,e=null,t=null,i=!0,s=!1;function r(h){const d=h.createBuffer(1,h.sampleRate*2,h.sampleRate),f=d.getChannelData(0);let g=0;for(let x=0;x<f.length;x++){const m=Math.random()*2-1;g=(g+.02*m)/1.02,f[x]=g*3.2}return d}function o(){if(s||!i)return;const h=window.AudioContext||window.webkitAudioContext;if(!h)return;s=!0,n=new h;const d=n.createGain();d.gain.value=uh,d.connect(n.destination);const f=n.createGain();f.gain.value=.25;const g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=1400,g.Q.value=.5,f.connect(g).connect(d);const x=24,m=new Float32Array(x),p=new Float32Array(x);for(let re=1;re<x;re++)p[re]=1/Math.pow(re,.9)*(re>=3&&re<=5?1.6:1)*(re%2?1:.7);const M=n.createPeriodicWave(m,p),y=n.createOscillator();y.setPeriodicWave(M),y.frequency.value=40;const _=n.createWaveShaper(),S=new Float32Array(1024);for(let re=0;re<S.length;re++){const Ge=re/(S.length-1)*2-1;S[re]=Math.tanh(Ge*2.6)*.8}_.curve=S,_.oversample="2x";const b=n.createGain();b.gain.value=.55;const A=n.createBiquadFilter();A.type="lowpass",A.frequency.value=520,y.connect(_).connect(A).connect(b).connect(f);const v=n.createGain();v.gain.value=1;const E=n.createOscillator();E.type="triangle",E.frequency.value=20;const R=n.createGain();R.gain.value=.25,E.connect(R).connect(v.gain),b.disconnect(),b.connect(v).connect(f);const C=n.createOscillator();C.type="sawtooth",C.frequency.value=80;const I=n.createBiquadFilter();I.type="bandpass",I.frequency.value=240,I.Q.value=1.4;const X=n.createGain();X.gain.value=.18,C.connect(I).connect(X).connect(f);const F=n.createOscillator();F.frequency.value=.7;const k=n.createGain();k.gain.value=1.2,F.connect(k),k.connect(y.frequency),k.connect(C.frequency),y.start(),C.start(),E.start(),F.start();const N=r(n),B=n.createBufferSource();B.buffer=N,B.loop=!0;const J=n.createBiquadFilter();J.type="bandpass",J.frequency.value=700,J.Q.value=.7;const O=n.createGain();O.gain.value=.05,B.connect(J).connect(O).connect(d),B.start();const $=n.createBufferSource();$.buffer=N,$.loop=!0,$.playbackRate.value=1.7;const j=n.createBiquadFilter();j.type="bandpass",j.frequency.value=900,j.Q.value=2;const pe=n.createGain();pe.gain.value=.05,$.connect(j).connect(pe).connect(f),$.start(),e={master:d,engineBus:f,lowpass:g,exhaust:y,exhaustTone:A,prop:C,propBand:I,flutterLfo:E,gritBand:j,gritGain:pe,windFilter:J,windGain:O},t=fy(n,d,N),n.state==="suspended"&&n.resume().catch(()=>{})}function a(h,d,f,g,x){if(!n||!e)return;const m=n.currentTime,p=d.speed,M=900+d.throttle*1500+p*9+(d.boosting?450:0),y=M/60*2.5,_=M/60*2;e.exhaust.frequency.setTargetAtTime(y,m,.12),e.flutterLfo.frequency.setTargetAtTime(y*.5,m,.12),e.prop.frequency.setTargetAtTime(_,m,.12),e.propBand.frequency.setTargetAtTime(_*3+p*4,m,.2),e.exhaustTone.frequency.setTargetAtTime(320+d.throttle*520+(d.boosting?300:0),m,.15),e.gritBand.frequency.setTargetAtTime(600+M*.3,m,.2),e.gritGain.gain.setTargetAtTime(.03+d.throttle*.05,m,.2),e.engineBus.gain.setTargetAtTime(.12+d.throttle*.2+(d.boosting?.08:0),m,.12),e.lowpass.frequency.setTargetAtTime(900+p*18+d.throttle*600,m,.2);const S=.018+p/260+f.gust*.03+d.contact*.03;e.windGain.gain.setTargetAtTime(it(S,0,.2),m,.25),e.windFilter.frequency.setTargetAtTime(420+p*16+f.gust*260,m,.3),t?.update(h,d,g,x),c(g,x)}function c(h,d){const f=n.listener,{x:g,y:x,z:m}=h.position;if(f.positionX){const p=n.currentTime;f.positionX.setTargetAtTime(g,p,.04),f.positionY.setTargetAtTime(x,p,.04),f.positionZ.setTargetAtTime(m,p,.04);const M=d.x-g,y=d.y-x,_=d.z-m,S=Math.hypot(M,y,_)||1;f.forwardX.setTargetAtTime(M/S,p,.04),f.forwardY.setTargetAtTime(y/S,p,.04),f.forwardZ.setTargetAtTime(_/S,p,.04),f.upX.setTargetAtTime(0,p,.04),f.upY.setTargetAtTime(1,p,.04),f.upZ.setTargetAtTime(0,p,.04)}else if(f.setPosition){f.setPosition(g,x,m);const p=d.x-g,M=d.y-x,y=d.z-m,_=Math.hypot(p,M,y)||1;f.setOrientation(p/_,M/_,y/_,0,1,0)}}function l(h){return i=h,i&&!s&&o(),n&&e&&(e.master.gain.setTargetAtTime(i?uh:0,n.currentTime,.1),i&&n.state==="suspended"&&n.resume().catch(()=>{})),i}function u(h){n&&(h?n.suspend().catch(()=>{}):i&&n.resume().catch(()=>{}))}return{start:o,update:a,setEnabled:l,setPaused:u,toggle:()=>l(!i),get enabled(){return i},get ambience(){return t}}}const my=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,gy=`
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
`;function xy(n){const e=n.getDrawingBufferSize(new xe),t=new mn(e.x,e.y,{type:An,samples:ct.msaa,depthBuffer:!0});t.depthTexture=new vs(e.x,e.y,Tn);const i=new Xt({vertexShader:my,fragmentShader:gy,defines:ct.halation?{HALATION:""}:{},depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:t.texture},tDepth:{value:t.depthTexture},texel:{value:new xe(1/e.x,1/e.y)},near:{value:.5},far:{value:4200},lineWidth:{value:1},inkColor:{value:new _e(2761267)},shadowTint:{value:new _e(9212872)},lightTint:{value:new _e(16775146)},saturation:{value:1.12},halation:{value:.4},grain:{value:.045},mist:{value:0},mistColor:{value:new _e(16052714)}}}),s=new D(new _i(2,2),i);s.frustumCulled=!1;const r=new Lh;r.add(s);const o=new ko(-1,1,1,-1,0,1);function a(){n.getDrawingBufferSize(e),t.setSize(e.x,e.y),i.uniforms.texel.value.set(1/e.x,1/e.y),i.uniforms.lineWidth.value=Math.max(1,Math.min(2,e.y/720))}return a(),{uniforms:i.uniforms,setSize:a,render(c,l){i.uniforms.near.value=l.near,i.uniforms.far.value=l.far,n.setRenderTarget(t),n.render(c,l),n.setRenderTarget(null),n.render(r,o)}}}function vy(){const n=new kv({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,ct.pixelRatio)),n.setSize(innerWidth,innerHeight),n.shadowMap.enabled=ct.shadows,n.shadowMap.type=er,n.outputColorSpace=rn,n.toneMapping=zc,n.toneMappingExposure=1.08,document.body.insertBefore(n.domElement,document.querySelector("#ui"));const e=new Lh,t=new ln(58,innerWidth/innerHeight,.5,4200);e.add(t);const i=new Gp;i.connect(document);const s=r_(e),r=l_(e),o=f_(e),a=__(e,n,s,o,r),c=JM(e,r),l=xy(n),u=Rd(13190973,!1);u.rotation.order="YXZ",e.add(u);const h=QM(),d=ty(),f=ny(t,{mode:fn.get("camera")??0}),g=iy(e),x=ry(e),m=cy(e),p=py();u.position.copy(h.pos),f.reset(h);let M=!1;const y=hy({actions:{camera:()=>b(),light:()=>A(),photo:()=>E(),sound:()=>R()}});function _(){const q=m.cycle();y.hint(Pd[q],1.3),document.querySelector("#smokeBtn")?.classList.toggle("off",q===0)}const S=dy({rig:f,hud:y,onChange:q=>{q&&y.hint("Photo mode — drag to look around, tap the shutter to keep it",3.4)}});function b(){const q=f.cycle();fn.set("camera",q),y.hint(`${Cd[q]} camera`,1.3)}function A(){const q=Ia.indexOf(a.name),se=Ia[(q+1)%Ia.length];v(se)}function v(q){a.set(q),fn.set("light",q),y.hint(vo[q].label,1.4);for(const se of document.querySelectorAll("[data-light]"))se.setAttribute("aria-pressed",String(se.dataset.light===q))}function E(){S.toggle(u.position)}function R(){const q=p.toggle();fn.set("sound",q),y.setSound(q),y.hint(q?"Sound on":"Sound off",1.2)}const C=ly({canvas:n.domElement,actions:{camera:b,light:A,photo:E,sound:R,smoke:_,hud:()=>y.toggle(),invertPitch:()=>I(!C.invertPitch),escape:()=>S.set(!1),orbit:(q,se)=>{S.active&&f.orbit(q,se)},zoom:q=>{S.active&&f.zoom(q)}},onFirstInput:()=>p.start()});function I(q){const se=C.setInvertPitch(q);fn.set("invertPitch",se),y.hint(se?"Pull back to climb":"Push forward to climb",1.6);for(const ue of document.querySelectorAll("[data-pitch]"))ue.setAttribute("aria-pressed",String(ue.dataset.pitch==="inverted"===se))}v(fn.get("light")||sr),a.set(fn.get("light")||sr,{instant:!0}),C.setInvertPitch(fn.get("invertPitch"));for(const q of document.querySelectorAll("[data-pitch]"))q.setAttribute("aria-pressed",String(q.dataset.pitch==="inverted"==!!fn.get("invertPitch"))),q.addEventListener("click",()=>I(q.dataset.pitch==="inverted"));async function X(q){const se=document.querySelector("#tiltNote");for(const ge of document.querySelectorAll("[data-tilt]"))ge.setAttribute("aria-pressed",String(ge.dataset.tilt==="on"===q));se&&(se.textContent=q?"Asking the phone for its tilt…":"");const ue=await C.setTilt(q);se&&(se.textContent=q?ue?"Tilt is on — how you hold it at take-off is level":"This browser is not sharing the tilt sensor here. Try opening the game in its own tab.":""),fn.set("tilt",ue);for(const ge of document.querySelectorAll("[data-tilt]"))ge.setAttribute("aria-pressed",String(ge.dataset.tilt==="on"===ue));return q&&!ue&&y.hint("This phone would not share its tilt",2.4),ue}for(const q of document.querySelectorAll("[data-tilt]"))q.addEventListener("click",()=>X(q.dataset.tilt==="on"));fn.get("tilt")&&typeof window.DeviceOrientationEvent?.requestPermission!="function"&&X(!0),fn.get("sound")===!1&&p.setEnabled(!1),y.setSound(p.enabled);for(const q of document.querySelectorAll("[data-light]"))q.addEventListener("click",()=>{v(q.dataset.light),p.start()});document.querySelector("#photoLight")?.addEventListener("click",A),document.querySelector("#start")?.addEventListener("click",()=>{M=!0,y.hideIntro(),p.start(),C.tilt&&(C.recentreTilt(),y.hint("Tilt to fly — hold the phone how you like, that is level",3)),C.tilt||y.hint("Follow the coast — there is a cove hiding past the lighthouse, and a lot more besides",5)});const F=new Set,k=[{key:"cove",at:()=>c.landmarks.cove,radius:130,below:130,text:"The hidden cove"},{key:"lighthouse",at:()=>c.landmarks.lighthouse,radius:120,below:160,text:"The lighthouse on the point"},{key:"village",at:()=>c.landmarks.village,radius:140,below:110,text:"Over the village — mind the laundry"},{key:"arch",at:()=>c.landmarks.arch,radius:34,below:46,text:"Straight through the arch!"},{key:"summit",at:()=>c.landmarks.summit,radius:90,below:240,text:"The top of the island"},{key:"camp",at:()=>c.landmarks.beachCamp,radius:42,below:26,text:"Someone's chair on the sand, and the radio still on"},{key:"canyon",at:()=>c.landmarks.canyon,radius:150,below:150,text:"The canyon — it goes all the way through"},{key:"canyonEnd",at:()=>c.landmarks.canyonEnd,radius:90,below:60,text:"Out the other side"},{key:"falls",at:()=>c.landmarks.falls,radius:170,below:190,text:"The waterfall"},{key:"lagoon",at:()=>c.landmarks.lagoon,radius:130,below:120,text:"The lagoon — shallow enough to land in"},{key:"campanile",at:()=>c.landmarks.campanile,radius:60,below:130,text:"Round the campanile — mind the bells"},{key:"lido",at:()=>c.landmarks.lido,radius:70,below:45,text:"The lido — somebody waves from under an umbrella"},{key:"chapel",at:()=>c.landmarks.chapel,radius:110,below:90,text:"The chapel on the rock"},{key:"fortress",at:()=>c.landmarks.fortress,radius:140,below:160,text:"The old fortress — there is an arch through the headland"},{key:"stacks",at:()=>c.landmarks.stacks,radius:150,below:160,text:"The sea stacks — one of them has a hole right through it"},{key:"wreck",at:()=>c.landmarks.wreck,radius:60,below:60,text:"A wreck in the shallows"},{key:"pines",at:()=>c.landmarks.pines,radius:160,below:110,text:"The pine island — is that water between the trees?"},{key:"grotto",at:()=>c.landmarks.grotto,radius:70,below:60,text:"There is a way in, behind the falling water…"}];let N=!1;function B(){N||h.waterborne||!h.overWater||h.pos.y>45||h.speed>34||(N=!0,y.hint("Ease the nose down — the floats will take the water",4))}function J(){for(const q of k){if(F.has(q.key))continue;const se=q.at();if(Math.hypot(h.pos.x-se.x,h.pos.z-se.z)<q.radius&&h.pos.y<q.below){F.add(q.key),y.hint(q.text,2.6);break}}}const O=new Set;let $=0,j=!1,pe=0;const re={loop:["A loop! The whole sky went round","Loop"],"outside loop":["An outside loop — brave","Outside loop"],roll:["A barrel roll! Double-tap a bank to roll again","Roll"]};function Ge(q){if($=Math.max(0,$-q),!(!M||S.active)){if(h.justDid&&re[h.justDid]&&$<=0){const[se,ue]=re[h.justDid];y.hint(O.has(h.justDid)?ue:se,O.has(h.justDid)?1:2.6),O.add(h.justDid),$=1.2}if(h.invertedTime>2.5&&!j&&(j=!0,y.hint("Upside down over the Adriatic — let go and it rolls back",2.8)),pe=Math.max(0,pe-q),h.underRoof&&pe<=0){pe=10;const se=Sr(h.pos.x,h.pos.z);se?.name&&y.hint(se.name,2)}}}let me=!1;addEventListener("resize",()=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),n.setPixelRatio(Math.min(devicePixelRatio||1,ct.pixelRatio)),n.setSize(innerWidth,innerHeight),l.setSize()},{passive:!0}),document.addEventListener("visibilitychange",()=>{me=document.hidden,p.setPaused(me),me||i.update()}),n.domElement.addEventListener("webglcontextlost",q=>{q.preventDefault(),me=!0,y.hint("Graphics paused — reload the page if it does not come back",8)}),n.domElement.addEventListener("webglcontextrestored",()=>{me=!1});const oe=new L;let G=0,Q=0,de=0,Ie=0,Me=!1,Oe=60,lt=!1;window.__covewind={flight:h,world:c,lighting:a,terrain:n_,camera:t,rig:f,quality:ct,renderer:n,scene:e,get fps(){return Math.round(Oe)},teleport(q,se,ue,ge=h.heading){h.pos.set(q,se,ue),h.heading=ge,h.roll=0,h.pitch=0,M=!0,y.hideIntro(),f.reset(h)}};function ae(){if(requestAnimationFrame(ae),me)return;i.update();const q=Math.min(i.getDelta(),.05),se=i.getElapsed();q>0&&(Oe=Oe*.94+1/q*.06);const ue=C.sample(q),ge=d.update(se,h.pos);if(ue.throttleSet!=null&&(h.throttle=ue.throttleSet,C.clearThrottleSet()),ue.throttleAxis&&(h.throttle=it(h.throttle+ue.throttleAxis*.34*q,0,1)),S.active||(M?(ah(h,ue,ge,q,se),J(),B()):ah(h,{pitch:0,roll:-.22,yaw:0,boost:!1,trick:0},ge,q,se)),h.justLanded){const He=Ho(h.pos.x,h.pos.z),et=h.underRoof!=null?"Down in the grotto — nobody will find you here":He?`Down on ${He.name}`:"Down on the water";y.hint(Me?et:`${et} — open the throttle to take off again`,Me?2:4),Me=!0}else h.justTookOff?y.hint("Airborne",1.2):h.grounded&&Ie<=0&&(Ie=8,y.hint("The floats are nudging the sand",1.8));if(Ie=Math.max(0,Ie-q),Ge(q),u.position.copy(h.pos),u.quaternion.copy(h.quat),u.userData.propeller.rotation.z+=q*(16+h.speed*.8),u.userData.strobe.visible=se%1.4<.12,DM(u,S.active?{roll:0,pitch:0,yaw:0}:ue,q,h.speed),a.follow(h.pos),a.update(q),o.uniforms.time.value=se,s.uniforms.time.value=se,c.update(se,q,h,ge,{beamOpacity:a.beam,onDolphins:()=>{M&&!S.active&&y.hint("Dolphins! They have come to race you",2.6)},onBirdScatter:()=>{de>0||(de=14,M&&!S.active&&y.hint("Gulls!",1.2))}}),g.update(q,u,h,t),x.update(q,h,se),m.update(q,u,h,n.domElement.height),f.update(q,h,u,{boosting:h.boosting}),oe.copy(f.lookAt),Q=Math.max(0,Q-q),de=Math.max(0,de-q),M&&!S.active&&Q<=0){for(const He of c.aiPlanes)if(He.group.position.distanceTo(h.pos)<34){Q=18,y.hint("Hello, sky neighbour 👋",1.8);break}h.contact>.55&&!h.waterborne&&(Q=6,y.hint(h.overWater?"Skimming the waves!":"Easy — give the rooftops some room",1.4))}p.update(q,h,ge,t,oe),y.update(q,h,S.active?99:ue.lastActivity),s.follow(t.position),r.follow(t.position);const Ke=r.inside(t.position);l.uniforms.mist.value+=(Ke-l.uniforms.mist.value)*Math.min(1,q*4),l.uniforms.mistColor.value.copy(r.materials[0].uniforms.litColor.value).lerp(r.materials[0].uniforms.shadeColor.value,.25),Ke>.5&&!lt&&M&&(lt=!0,y.hint("Inside a cloud — keep climbing and you will come out on top",2.6)),l.render(e,t),S.flush(n),!ct.degraded&&q>.042?(G++,G>260&&Hv(n,e)&&(l.setSize(),y.hint("Easing off the detail so this stays smooth",2.4))):G>0&&G--}ae()}try{vy()}catch(n){console.error(n);const e=document.querySelector("#error");e&&(e.style.display="grid")}"serviceWorker"in navigator&&location.protocol.startsWith("http")&&addEventListener("load",()=>{const n=new URL("sw.js",document.baseURI).href;navigator.serviceWorker.register(n,{scope:"./"}).catch(()=>{})});
