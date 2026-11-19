(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="186",Dh=0,Jl=1,Uh=2,Vs=1,Nh=2,Fs=3,Li=0,Ye=1,on=2,Xn=0,os=1,da=2,$l=3,Ql=4,Fh=5,is=100,Oh=101,zh=102,Bh=103,kh=104,Vh=200,Gh=201,Hh=202,Wh=203,wu=204,Tu=205,Xh=206,qh=207,Yh=208,Zh=209,Kh=210,Jh=211,$h=212,Qh=213,jh=214,pa=0,ma=1,ga=2,Ws=3,xa=4,va=5,_a=6,Ma=7,Au=0,tf=1,ef=2,Un=0,Ru=1,Cu=2,Pu=3,Lu=4,Iu=5,Du=6,ul=7,Uu=300,Ii=301,us=302,po=303,mo=304,no=306,Sa=1e3,Wn=1001,ya=1002,Ie=1003,nf=1004,sr=1005,Oe=1006,go=1007,Ai=1008,en=1009,Nu=1010,Fu=1011,Xs=1012,hl=1013,En=1014,bn=1015,wn=1016,fl=1017,dl=1018,qs=1020,Ou=35902,zu=35899,Bu=1021,ku=1022,mn=1023,Yn=1026,Ri=1027,io=1028,pl=1029,Di=1030,ml=1031,gl=1033,Br=33776,kr=33777,Vr=33778,Gr=33779,ba=35840,Ea=35841,wa=35842,Ta=35843,Aa=36196,Ra=37492,Ca=37496,Pa=37488,La=37489,Yr=37490,Ia=37491,Da=37808,Ua=37809,Na=37810,Fa=37811,Oa=37812,za=37813,Ba=37814,ka=37815,Va=37816,Ga=37817,Ha=37818,Wa=37819,Xa=37820,qa=37821,Ya=36492,Za=36494,Ka=36495,Ja=36283,$a=36284,Zr=36285,Qa=36286,sf=3200,ja=0,rf=1,oi="",rn="srgb",Kr="srgb-linear",Jr="linear",fe="srgb",xo=7680,of=519,af=512,lf=513,cf=514,xl=515,uf=516,hf=517,vl=518,ff=519,df=35044,jl="300 es",In=2e3,Ys=2001;function pf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){const n=$r("canvas");return n.style.display="block",n}const tc={};function ec(...n){const t="THREE."+n.shift();console.log(t,...n)}function Vu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=Vu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function oe(...n){n=Vu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function as(...n){const t=n.join(" ");t in tc||(tc[t]=!0,Wt(...n))}function gf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const xf={[pa]:ma,[ga]:_a,[xa]:Ma,[Ws]:va,[ma]:pa,[_a]:ga,[Ma]:xa,[va]:Ws};class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vo=Math.PI/180,tl=180/Math.PI;function gs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function vf(n,t){return(n%t+t)%t}function _o(n,t,e){return(1-e)*n+e*t}function _s(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nl=class Nl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nl.prototype.isVector2=!0;let ft=Nl;class Qe{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],u=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==u||c!==p||d!==m){let g=l*u+c*p+d*m+h*x;g<0&&(u=-u,p=-p,m=-m,x=-x,g=-g);let f=1-a;if(g<.9995){const _=Math.acos(g),A=Math.sin(_);f=Math.sin(f*_)/A,a=Math.sin(a*_)/A,l=l*f+u*a,c=c*f+p*a,d=d*f+m*a,h=h*f+x*a}else{l=l*f+u*a,c=c*f+p*a,d=d*f+m*a,h=h*f+x*a;const _=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=_,c*=_,d*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+d*h+l*p-c*u,t[e+1]=l*m+d*u+c*h-a*p,t[e+2]=c*m+d*p+a*u-l*h,t[e+3]=d*m-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),h=a(r/2),u=l(i/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h-u*p*m;break;case"YXZ":this._x=u*d*h+c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h+u*p*m;break;case"ZXY":this._x=u*d*h-c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h-u*p*m;break;case"ZYX":this._x=u*d*h-c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h+u*p*m;break;case"YZX":this._x=u*d*h+c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h-u*p*m;break;case"XZY":this._x=u*d*h-c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h+u*p*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fl=class Fl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),d=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*d,this.y=i+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fl.prototype.isVector3=!0;let F=Fl;const Mo=new F,nc=new Qe,Ol=class Ol{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],m=i[8],x=s[0],g=s[3],f=s[6],_=s[1],A=s[4],M=s[7],S=s[2],y=s[5],E=s[8];return r[0]=o*x+a*_+l*S,r[3]=o*g+a*A+l*y,r[6]=o*f+a*M+l*E,r[1]=c*x+d*_+h*S,r[4]=c*g+d*A+h*y,r[7]=c*f+d*M+h*E,r[2]=u*x+p*_+m*S,r[5]=u*g+p*A+m*y,r[8]=u*f+p*M+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,u=a*l-d*r,p=c*r-o*l,m=e*h+i*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=h*x,t[1]=(s*c-d*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ol.prototype.isMatrix3=!0;let Yt=Ol;const So=new Yt,ic=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _f(){const n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:t,whitePoint:i,transfer:Jr,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const ie=_f();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class Mf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Gi===void 0&&(Gi=$r("canvas")),Gi.width=t.width,Gi.height=t.height;const s=Gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Gi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qn(e[i]/255)*255):e[i]=qn(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class _l{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yo(s[o].image)):r.push(yo(s[o]))}else r=yo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function yo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let yf=0;const bo=new F;class $e extends Fi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=Wn,s=Wn,r=Oe,o=Ai,a=mn,l=en,c=$e.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=gs(),this.name="",this.source=new _l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Uu;$e.DEFAULT_ANISOTROPY=1;const zl=class zl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,M=(p+1)/2,S=(f+1)/2,y=(d+u)/4,E=(h+x)/4,v=(m+g)/4;return A>M&&A>S?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=y/i,r=E/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=y/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=E/r,s=v/r),this.set(i,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(u-d)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zl.prototype.isVector4=!0;let ye=zl;class bf extends Fi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new $e(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _l(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends bf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gu extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ef extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const eo=class eo{constructor(t,e,i,s,r,o,a,l,c,d,h,u,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,d,h,u,p,m,x,g)}set(t,e,i,s,r,o,a,l,c,d,h,u,p,m,x,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=o*d,p=o*h,m=a*d,x=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=p+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,m=c*d,x=c*h;e[0]=u+x*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=p*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,m=c*d,x=c*h;e[0]=u-x*a,e[4]=-o*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*d,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*d,p=o*h,m=a*d,x=a*h;e[0]=l*d,e[4]=m*c-p,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*d,e[4]=x-u*h,e[8]=m*h+p,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=p*h+m,e[10]=u-x*h}else if(t.order==="XZY"){const u=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+x,e[5]=o*d,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*d,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wf,t,Tf)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),$n.crossVectors(i,nn),$n.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),$n.crossVectors(i,nn)),$n.normalize(),rr.crossVectors(nn,$n),s[0]=$n.x,s[4]=rr.x,s[8]=nn.x,s[1]=$n.y,s[5]=rr.y,s[9]=nn.y,s[2]=$n.z,s[6]=rr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],m=i[2],x=i[6],g=i[10],f=i[14],_=i[3],A=i[7],M=i[11],S=i[15],y=s[0],E=s[4],v=s[8],T=s[12],I=s[1],b=s[5],C=s[9],L=s[13],P=s[2],D=s[6],O=s[10],N=s[14],k=s[3],B=s[7],q=s[11],W=s[15];return r[0]=o*y+a*I+l*P+c*k,r[4]=o*E+a*b+l*D+c*B,r[8]=o*v+a*C+l*O+c*q,r[12]=o*T+a*L+l*N+c*W,r[1]=d*y+h*I+u*P+p*k,r[5]=d*E+h*b+u*D+p*B,r[9]=d*v+h*C+u*O+p*q,r[13]=d*T+h*L+u*N+p*W,r[2]=m*y+x*I+g*P+f*k,r[6]=m*E+x*b+g*D+f*B,r[10]=m*v+x*C+g*O+f*q,r[14]=m*T+x*L+g*N+f*W,r[3]=_*y+A*I+M*P+S*k,r[7]=_*E+A*b+M*D+S*B,r[11]=_*v+A*C+M*O+S*q,r[15]=_*T+A*L+M*N+S*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],m=t[3],x=t[7],g=t[11],f=t[15],_=l*p-c*u,A=a*p-c*h,M=a*u-l*h,S=o*p-c*d,y=o*u-l*d,E=o*h-a*d;return e*(x*_-g*A+f*M)-i*(m*_-g*S+f*y)+s*(m*A-x*S+f*E)-r*(m*M-x*y+g*E)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-i*(r*d-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],m=t[12],x=t[13],g=t[14],f=t[15],_=e*a-i*o,A=e*l-s*o,M=e*c-r*o,S=i*l-s*a,y=i*c-r*a,E=s*c-r*l,v=d*x-h*m,T=d*g-u*m,I=d*f-p*m,b=h*g-u*x,C=h*f-p*x,L=u*f-p*g,P=_*L-A*C+M*b+S*I-y*T+E*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=(a*L-l*C+c*b)*D,t[1]=(s*C-i*L-r*b)*D,t[2]=(x*E-g*y+f*S)*D,t[3]=(u*y-h*E-p*S)*D,t[4]=(l*I-o*L-c*T)*D,t[5]=(e*L-s*I+r*T)*D,t[6]=(g*M-m*E-f*A)*D,t[7]=(d*E-u*M+p*A)*D,t[8]=(o*C-a*I+c*v)*D,t[9]=(i*I-e*C-r*v)*D,t[10]=(m*y-x*M+f*_)*D,t[11]=(h*M-d*y-p*_)*D,t[12]=(a*T-o*b-l*v)*D,t[13]=(e*b-i*T+s*v)*D,t[14]=(x*A-m*S-g*_)*D,t[15]=(d*S-h*A+u*_)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,u=r*c,p=r*d,m=r*h,x=o*d,g=o*h,f=a*h,_=l*c,A=l*d,M=l*h,S=i.x,y=i.y,E=i.z;return s[0]=(1-(x+f))*S,s[1]=(p+M)*S,s[2]=(m-A)*S,s[3]=0,s[4]=(p-M)*y,s[5]=(1-(u+f))*y,s[6]=(g+_)*y,s[7]=0,s[8]=(m+A)*E,s[9]=(g-_)*E,s[10]=(1-(u+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Hi.set(s[0],s[1],s[2]).length();const a=Hi.set(s[4],s[5],s[6]).length(),l=Hi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);const c=1/o,d=1/a,h=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=In,l=!1){const c=this.elements,d=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===In)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ys)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=In,l=!1){const c=this.elements,d=2/(e-t),h=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===In)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ys)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};eo.prototype.isMatrix4=!0;let ae=eo;const Hi=new F,_n=new ae,wf=new F(0,0,0),Tf=new F(1,1,1),$n=new F,rr=new F,nn=new F,rc=new ae,oc=new Qe;class di{constructor(t=0,e=0,i=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Af=0;const ac=new F,Wi=new Qe,Fn=new ae,or=new F,Ms=new F,Rf=new F,Cf=new Qe,lc=new F(1,0,0),cc=new F(0,1,0),uc=new F(0,0,1),hc={type:"added"},Pf={type:"removed"},Xi={type:"childadded",child:null},Eo={type:"childremoved",child:null};class De extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new F,e=new di,i=new Qe,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Yt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(cc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(cc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?or.copy(t):or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ms,or,this.up):Fn.lookAt(or,Ms,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pf),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new F(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dn extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function To(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=vf(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=To(o,r,t+1/3),this.g=To(o,r,t),this.b=To(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=Wu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ie.workingToColorSpace(We.copy(this),t),Math.round(te(We.r*255,0,255))*65536+Math.round(te(We.g*255,0,255))*256+Math.round(te(We.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=rn){ie.workingToColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(ar);const i=_o(Qn.h,ar.h,e),s=_o(Qn.s,ar.s,e),r=_o(Qn.l,ar.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new kt;kt.NAMES=Wu;class Ml{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new Ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xu extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mn=new F,On=new F,Ao=new F,zn=new F,qi=new F,Yi=new F,fc=new F,Ro=new F,Co=new F,Po=new F,Lo=new ye,Io=new ye,Do=new ye;class yn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),On.subVectors(i,e),Ao.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(On),l=Mn.dot(Ao),c=On.dot(On),d=On.dot(Ao),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,m=(o*d-a*l)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Lo.setScalar(0),Io.setScalar(0),Do.setScalar(0),Lo.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,i),Do.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lo,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(Do,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),On.subVectors(t,e),Mn.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Mn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;qi.subVectors(s,i),Yi.subVectors(r,i),Ro.subVectors(t,i);const l=qi.dot(Ro),c=Yi.dot(Ro);if(l<=0&&c<=0)return e.copy(i);Co.subVectors(t,s);const d=qi.dot(Co),h=Yi.dot(Co);if(d>=0&&h<=d)return e.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(qi,o);Po.subVectors(t,r);const p=qi.dot(Po),m=Yi.dot(Po);if(m>=0&&p<=m)return e.copy(r);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Yi,a);const g=d*m-p*h;if(g<=0&&h-d>=0&&p-m>=0)return fc.subVectors(r,s),a=(h-d)/(h-d+(p-m)),e.copy(s).addScaledVector(fc,a);const f=1/(g+x+u);return o=x*f,a=u*f,e.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Oi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),cr.subVectors(this.max,Ss),Zi.subVectors(t.a,Ss),Ki.subVectors(t.b,Ss),Ji.subVectors(t.c,Ss),jn.subVectors(Ki,Zi),ti.subVectors(Ji,Ki),xi.subVectors(Zi,Ji);let e=[0,-jn.z,jn.y,0,-ti.z,ti.y,0,-xi.z,xi.y,jn.z,0,-jn.x,ti.z,0,-ti.x,xi.z,0,-xi.x,-jn.y,jn.x,0,-ti.y,ti.x,0,-xi.y,xi.x,0];return!Uo(e,Zi,Ki,Ji,cr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Zi,Ki,Ji,cr))?!1:(ur.crossVectors(jn,ti),e=[ur.x,ur.y,ur.z],Uo(e,Zi,Ki,Ji,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new F,new F,new F,new F,new F,new F,new F,new F],Sn=new F,lr=new Oi,Zi=new F,Ki=new F,Ji=new F,jn=new F,ti=new F,xi=new F,Ss=new F,cr=new F,ur=new F,vi=new F;function Uo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vi.fromArray(n,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),d=i.dot(vi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Re=new F,hr=new ft;let If=0;class pe extends Fi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=df,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_s(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class qu extends pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yu extends pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends pe{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Df=new Oi,ys=new F,No=new F;class zi{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Df.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ys,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(No)),this.expandByPoint(ys.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Uf=0;const ln=new ae,Fo=new De,$i=new F,sn=new Oi,bs=new Oi,Fe=new F;class _e extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?Yu:qu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(sn.min,bs.min),sn.expandByPoint(Fe),Fe.addVectors(sn.max,bs.max),sn.expandByPoint(Fe)):(sn.expandByPoint(bs.min),sn.expandByPoint(bs.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Fe.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Fe.add($i)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new pe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new F,l[v]=new F;const c=new F,d=new F,h=new F,u=new ft,p=new ft,m=new ft,x=new F,g=new F;function f(v,T,I){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,I),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),d.sub(c),h.sub(c),p.sub(u),m.sub(u);const b=1/(p.x*m.y-m.x*p.y);isFinite(b)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(b),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(b),a[v].add(x),a[T].add(x),a[I].add(x),l[v].add(g),l[T].add(g),l[I].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let v=0,T=_.length;v<T;++v){const I=_[v],b=I.start,C=I.count;for(let L=b,P=b+C;L<P;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const A=new F,M=new F,S=new F,y=new F;function E(v){S.fromBufferAttribute(s,v),y.copy(S);const T=a[v];A.copy(T),A.sub(S.multiplyScalar(S.dot(T))).normalize(),M.crossVectors(y,T);const b=M.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,b)}for(let v=0,T=_.length;v<T;++v){const I=_[v],b=I.start,C=I.count;for(let L=b,P=b+C;L<P;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,h=new F;if(t)for(let u=0,p=t.count;u<p;u+=3){const m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let f=0;f<d;f++)u[m++]=c[p++]}return new pe(u,d,h)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new F,Nf=new F,Ff=new Yt;class ii{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oo.subVectors(i,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ff.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Of=0;class Bi extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=os,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Tu,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const kn=new F,zo=new F,fr=new F,dr=new F;class Sl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zo.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),dr.copy(this.origin).sub(zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=dr.dot(this.direction),l=-dr.dot(fr),c=dr.lengthSq(),d=Math.abs(1-o*o);let h,u,p,m;if(d>0)if(h=o*l-a,u=o*a-l,m=r*d,h>=0)if(u>=-m)if(u<=m){const x=1/d;h*=x,u*=x,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(zo).addScaledVector(fr,u),p}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);const i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,h=t.x-o.x,u=t.y-o.y,p=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,f=i.x-o.x,_=i.y-o.y,A=i.z-o.z,M=Math.abs(l),S=Math.abs(c),y=Math.abs(d);let E,v,T,I,b,C,L,P,D,O,N,k;if(M>=S&&M>=y?(T=l,C=h,D=m,k=f,l>=0?(E=c,v=d,I=u,b=p,L=x,P=g,O=_,N=A):(E=d,v=c,I=p,b=u,L=g,P=x,O=A,N=_)):S>=y?(T=c,C=u,D=x,k=_,c>=0?(E=d,v=l,I=p,b=h,L=g,P=m,O=A,N=f):(E=l,v=d,I=h,b=p,L=m,P=g,O=f,N=A)):(T=d,C=p,D=g,k=A,d>=0?(E=l,v=c,I=h,b=u,L=m,P=x,O=f,N=_):(E=c,v=l,I=u,b=h,L=x,P=m,O=_,N=f)),T===0)return null;const B=E/T,q=v/T,W=1/T,it=I-B*C,ot=b-q*C,bt=L-B*D,dt=P-q*D,yt=O-B*k,J=N-q*k,Q=yt*dt-J*bt,ut=it*J-ot*yt,It=bt*ot-dt*it;if(s){if(Q<0||ut<0||It<0)return null}else if((Q<0||ut<0||It<0)&&(Q>0||ut>0||It>0))return null;const pt=Q+ut+It;if(pt===0)return null;const Ct=W*(Q*C+ut*D+It*k);return(pt>0?Ct<0:Ct>0)?null:this.at(Ct/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yl extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dc=new ae,_i=new Sl,pr=new zi,pc=new F,mr=new F,gr=new F,xr=new F,Bo=new F,vr=new F,mc=new F,_r=new F;class jt extends De{constructor(t=new _e,e=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Bo.fromBufferAttribute(h,t),o?vr.addScaledVector(Bo,d):vr.addScaledVector(Bo.sub(e),d))}e.add(vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(pr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(pr,pc)===null||_i.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(dc),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),A=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=_,S=A;M<S;M+=3){const y=a.getX(M),E=a.getX(M+1),v=a.getX(M+2);s=Mr(this,f,t,i,c,d,h,y,E,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const _=a.getX(g),A=a.getX(g+1),M=a.getX(g+2);s=Mr(this,o,t,i,c,d,h,_,A,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=_,S=A;M<S;M+=3){const y=M,E=M+1,v=M+2;s=Mr(this,f,t,i,c,d,h,y,E,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const _=g,A=g+1,M=g+2;s=Mr(this,o,t,i,c,d,h,_,A,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function zf(n,t,e,i,s,r,o,a){let l;if(t.side===Ye?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Li,a),l===null)return null;_r.copy(a),_r.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:n}}function Mr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,mr),n.getVertexPosition(l,gr),n.getVertexPosition(c,xr);const d=zf(n,t,e,i,mr,gr,xr,mc);if(d){const h=new F;yn.getBarycoord(mc,mr,gr,xr,h),s&&(d.uv=yn.getInterpolatedAttribute(s,a,l,c,h,new ft)),r&&(d.uv1=yn.getInterpolatedAttribute(r,a,l,c,h,new ft)),o&&(d.normal=yn.getInterpolatedAttribute(o,a,l,c,h,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};yn.getNormal(mr,gr,xr,u.normal),d.face=u,d.barycoord=h}return d}class so extends $e{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ie,d=Ie,h,u){super(null,o,a,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gc extends pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new ae,xc=new ae,Sr=[],vc=new Oi,Bf=new ae,Es=new jt,ws=new zi;class ro extends jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qi),vc.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(vc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qi),ws.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(i),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),xc.multiplyMatrices(i,Qi),Es.matrixWorld=xc,Es.raycast(t,Sr);for(let o=0,a=Sr.length;o<a;o++){const l=Sr[o];l.instanceId=r,l.object=this,e.push(l)}Sr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new so(new Float32Array(s*this.count),s,this.count,io,bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mi=new zi,kf=new ft(.5,.5),yr=new F;class bl{constructor(t=new ii,e=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=In,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],p=r[7],m=r[8],x=r[9],g=r[10],f=r[11],_=r[12],A=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,p-d,f-m,S-_).normalize(),s[1].setComponents(c+o,p+d,f+m,S+_).normalize(),s[2].setComponents(c+a,p+h,f+x,S+A).normalize(),s[3].setComponents(c-a,p-h,f-x,S-A).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,p-u,f-g,S-M).normalize();else if(s[4].setComponents(c-l,p-u,f-g,S-M).normalize(),e===In)s[5].setComponents(c+l,p+u,f+g,S+M).normalize();else if(e===Ys)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=kf.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zu extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qr=new F,jr=new F,_c=new ae,Ts=new Sl,br=new zi,ko=new F,Mc=new F;class Vf extends De{constructor(t=new _e,e=new Zu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Qr.fromBufferAttribute(e,s-1),jr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Qr.distanceTo(jr);t.setAttribute("lineDistance",new ce(i,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;_c.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(_c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const f=d.getX(x),_=d.getX(x+1),A=Er(this,t,Ts,l,f,_,x);A&&e.push(A)}if(this.isLineLoop){const x=d.getX(m-1),g=d.getX(p),f=Er(this,t,Ts,l,x,g,m-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const f=Er(this,t,Ts,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=Er(this,t,Ts,l,m-1,p,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Er(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Qr.fromBufferAttribute(a,s),jr.fromBufferAttribute(a,r),e.distanceSqToSegment(Qr,jr,ko,Mc)>i)return;ko.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ko);if(!(c<t.near||c>t.far))return{distance:c,point:Mc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Sc=new F,yc=new F;class Gf extends Vf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Sc.fromBufferAttribute(e,s),yc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sc.distanceTo(yc);t.setAttribute("lineDistance",new ce(i,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hf extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bc=new ae,el=new Sl,wr=new zi,Tr=new F;class Wf extends De{constructor(t=new _e,e=new Hf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,t.ray.intersectsSphere(wr)===!1)return;bc.copy(s).invert(),el.copy(t.ray).applyMatrix4(bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=u,x=p;m<x;m++){const g=c.getX(m);Tr.fromBufferAttribute(h,g),Ec(Tr,g,l,s,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=u,x=p;m<x;m++)Tr.fromBufferAttribute(h,m),Ec(Tr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ec(n,t,e,i,s,r,o){const a=el.distanceSqToPoint(n);if(a<e){const l=new F;el.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ku extends $e{constructor(t=[],e=Ii,i,s,r,o,a,l,c,d){super(t,e,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hs extends $e{constructor(t,e,i=En,s,r,o,a=Ie,l=Ie,c,d=Yn,h=1){if(d!==Yn&&d!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:h};super(u,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _l(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Xf extends hs{constructor(t,e=En,i=Ii,s,r,o=Ie,a=Ie,l,c=Yn){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ju extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qe extends _e{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(h,2));function m(x,g,f,_,A,M,S,y,E,v,T){const I=M/E,b=S/v,C=M/2,L=S/2,P=y/2,D=E+1,O=v+1;let N=0,k=0;const B=new F;for(let q=0;q<O;q++){const W=q*b-L;for(let it=0;it<D;it++){const ot=it*I-C;B[x]=ot*_,B[g]=W*A,B[f]=P,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[f]=y>0?1:-1,d.push(B.x,B.y,B.z),h.push(it/E),h.push(1-q/v),N+=1}}for(let q=0;q<v;q++)for(let W=0;W<E;W++){const it=u+W+D*q,ot=u+W+D*(q+1),bt=u+(W+1)+D*(q+1),dt=u+(W+1)+D*q;l.push(it,ot,dt),l.push(ot,bt,dt),k+=6}a.addGroup(p,k,T),p+=k,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class El extends _e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new F,d=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const p=i+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/t+1)/2,d.y=(o[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Se extends _e{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],p=[];let m=0;const x=[],g=i/2;let f=0;_(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new ce(h,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2));function _(){const M=new F,S=new F;let y=0;const E=(e-t)/i;for(let v=0;v<=r;v++){const T=[],I=v/r,b=I*(e-t)+t;for(let C=0;C<=s;C++){const L=C/s,P=L*l+a,D=Math.sin(P),O=Math.cos(P);S.x=b*D,S.y=-I*i+g,S.z=b*O,h.push(S.x,S.y,S.z),M.set(D,E,O).normalize(),u.push(M.x,M.y,M.z),p.push(L,1-I),T.push(m++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){const I=x[T][v],b=x[T+1][v],C=x[T+1][v+1],L=x[T][v+1];(t>0||T!==0)&&(d.push(I,b,L),y+=3),(e>0||T!==r-1)&&(d.push(b,C,L),y+=3)}c.addGroup(f,y,0),f+=y}function A(M){const S=m,y=new ft,E=new F;let v=0;const T=M===!0?t:e,I=M===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,g*I,0),u.push(0,I,0),p.push(.5,.5),m++;const b=m;for(let C=0;C<=s;C++){const P=C/s*l+a,D=Math.cos(P),O=Math.sin(P);E.x=T*O,E.y=g*I,E.z=T*D,h.push(E.x,E.y,E.z),u.push(0,I,0),y.x=D*.5+.5,y.y=O*.5*I+.5,p.push(y.x,y.y),m++}for(let C=0;C<s;C++){const L=S+C,P=b+C;M===!0?d.push(P,P+1,L):d.push(P+1,P,L),v+=3}c.addGroup(f,v,M===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xs extends Se{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new xs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends _e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const A=new F,M=new F,S=new F;for(let y=0;y<e.length;y+=3)p(e[y+0],A),p(e[y+1],M),p(e[y+2],S),l(A,M,S,_)}function l(_,A,M,S){const y=S+1,E=[];for(let v=0;v<=y;v++){E[v]=[];const T=_.clone().lerp(M,v/y),I=A.clone().lerp(M,v/y),b=y-v;for(let C=0;C<=b;C++)C===0&&v===y?E[v][C]=T:E[v][C]=T.clone().lerp(I,C/b)}for(let v=0;v<y;v++)for(let T=0;T<2*(y-v)-1;T++){const I=Math.floor(T/2);T%2===0?(u(E[v][I+1]),u(E[v+1][I]),u(E[v][I])):(u(E[v][I+1]),u(E[v+1][I+1]),u(E[v+1][I]))}}function c(_){const A=new F;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(_),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function d(){const _=new F;for(let A=0;A<r.length;A+=3){_.x=r[A+0],_.y=r[A+1],_.z=r[A+2];const M=g(_)/2/Math.PI+.5,S=f(_)/Math.PI+.5;o.push(M,1-S)}m(),h()}function h(){for(let _=0;_<o.length;_+=6){const A=o[_+0],M=o[_+2],S=o[_+4],y=Math.max(A,M,S),E=Math.min(A,M,S);y>.9&&E<.1&&(A<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function p(_,A){const M=_*3;A.x=t[M+0],A.y=t[M+1],A.z=t[M+2]}function m(){const _=new F,A=new F,M=new F,S=new F,y=new ft,E=new ft,v=new ft;for(let T=0,I=0;T<r.length;T+=9,I+=6){_.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),y.set(o[I+0],o[I+1]),E.set(o[I+2],o[I+3]),v.set(o[I+4],o[I+5]),S.copy(_).add(A).add(M).divideScalar(3);const b=g(S);x(y,I+0,_,b),x(E,I+2,A,b),x(v,I+4,M,b)}}function x(_,A,M,S){S<0&&_.x===1&&(o[A]=_.x-1),M.x===0&&M.z===0&&(o[A]=S/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.vertices,t.indices,t.radius,t.detail)}}class wl extends oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wl(t.radius,t.detail)}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const d=i[s],u=i[s+1]-d,p=(o-d)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new F,s=[],r=[],o=[],a=new F,l=new ae;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tl extends Nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*d-p*h+this.aX,c=u*h+p*d+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qf extends Tl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Al(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,h){let u=(o-r)/c-(a-r)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+h)+(l-a)/h;u*=d,p*=d,s(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const wc=new F,Tc=new F,Vo=new Al,Go=new Al,Ho=new Al;class Yf extends Nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Tc.subVectors(s[0],s[1]).add(s[0]),c=Tc);const h=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(wc.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Vo.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,m,x,g),Go.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,m,x,g),Ho.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,m,x,g)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),Go.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),Ho.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return i.set(Vo.calc(l),Go.calc(l),Ho.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ac(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Zf(n,t){const e=1-n;return e*e*t}function Kf(n,t){return 2*(1-n)*n*t}function Jf(n,t){return n*n*t}function Gs(n,t,e,i){return Zf(n,t)+Kf(n,e)+Jf(n,i)}function $f(n,t){const e=1-n;return e*e*e*t}function Qf(n,t){const e=1-n;return 3*e*e*n*t}function jf(n,t){return 3*(1-n)*n*n*t}function td(n,t){return n*n*n*t}function Hs(n,t,e,i,s){return $f(n,t)+Qf(n,e)+jf(n,i)+td(n,s)}class $u extends Nn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ed extends Nn{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y),Hs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qu extends Nn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nd extends Nn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ju extends Nn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends Nn{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class th extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Ac(a,l.x,c.x,d.x,h.x),Ac(a,l.y,c.y,d.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:qf,CatmullRomCurve3:Yf,CubicBezierCurve:$u,CubicBezierCurve3:ed,EllipseCurve:Tl,LineCurve:Qu,LineCurve3:nd,QuadraticBezierCurve:ju,QuadraticBezierCurve3:id,SplineCurve:th});class sd extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new nl[s.type]().fromJSON(s))}return this}}class Rc extends sd{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qu(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new ju(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new $u(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new th(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Tl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eh extends Rc{constructor(t){super(t),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Rc().fromJSON(s))}return this}}function rd(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=nh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=ud(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let d=a,h=l;for(let u=e;u<s;u+=e){const p=n[u],m=n[u+1];p<a&&(a=p),m<l&&(l=m),p>d&&(d=p),m>h&&(h=m)}c=Math.max(d-a,h-l),c=c!==0?32767/c:0}return Zs(r,o,e,a,l,c,0),o}function nh(n,t,e,i,s){let r;if(s===Sd(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Cc(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Cc(o/i|0,n[o],n[o+1],r);return r&&fs(r,r.next)&&(Js(r),r=r.next),r}function Ui(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(fs(e,e.next)||be(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Zs(n,t,e,i,s,r,o){if(!n)return;!o&&r&&md(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?ad(n,i,s,r):od(n)){t.push(l.i,n.i,c.i),Js(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ld(Ui(n),t),Zs(n,t,e,i,s,r,2)):o===2&&cd(n,t,e,i,s,r):Zs(Ui(n),t,e,i,s,r,1);break}}}function od(n){const t=n.prev,e=n,i=n.next;if(be(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,d=Math.min(s,r,o),h=Math.min(a,l,c),u=Math.max(s,r,o),p=Math.max(a,l,c);let m=i.next;for(;m!==t;){if(m.x>=d&&m.x<=u&&m.y>=h&&m.y<=p&&Os(s,a,r,l,o,c,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ad(n,t,e,i){const s=n.prev,r=n,o=n.next;if(be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,d=s.y,h=r.y,u=o.y,p=Math.min(a,l,c),m=Math.min(d,h,u),x=Math.max(a,l,c),g=Math.max(d,h,u),f=il(p,m,t,e,i),_=il(x,g,t,e,i);let A=n.prevZ,M=n.nextZ;for(;A&&A.z>=f&&M&&M.z<=_;){if(A.x>=p&&A.x<=x&&A.y>=m&&A.y<=g&&A!==s&&A!==o&&Os(a,d,l,h,c,u,A.x,A.y)&&be(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=p&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Os(a,d,l,h,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=f;){if(A.x>=p&&A.x<=x&&A.y>=m&&A.y<=g&&A!==s&&A!==o&&Os(a,d,l,h,c,u,A.x,A.y)&&be(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Os(a,d,l,h,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ld(n,t){let e=n;do{const i=e.prev,s=e.next.next;!fs(i,s)&&sh(i,e,e.next,s)&&Ks(i,s)&&Ks(s,i)&&(t.push(i.i,e.i,s.i),Js(e),Js(e.next),e=n=s),e=e.next}while(e!==n);return Ui(e)}function cd(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vd(o,a)){let l=rh(o,a);o=Ui(o,o.next),l=Ui(l,l.next),Zs(o,t,e,i,s,r,0),Zs(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ud(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=nh(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(xd(c))}s.sort(hd);for(let r=0;r<s.length;r++)e=fd(s[r],e);return e}function hd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function fd(n,t){const e=dd(n,t);if(!e)return t;const i=rh(e,n);return Ui(i,i.next),Ui(e,e.next)}function dd(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(fs(n,e))return e;do{if(fs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&ih(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const h=Math.abs(s-e.y)/(i-e.x);Ks(e,n)&&(h<d||h===d&&(e.x>o.x||e.x===o.x&&pd(o,e)))&&(o=e,d=h)}e=e.next}while(e!==a);return o}function pd(n,t){return be(n.prev,n,t.prev)<0&&be(t.next,n,n.next)<0}function md(n,t,e,i){let s=n;do s.z===0&&(s.z=il(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gd(s)}function gd(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function il(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function xd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ih(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Os(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&ih(n,t,e,i,s,r,o,a)}function vd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!_d(n,t)&&(Ks(n,t)&&Ks(t,n)&&Md(n,t)&&(be(n.prev,n,t.prev)||be(n,t.prev,t))||fs(n,t)&&be(n.prev,n,n.next)>0&&be(t.prev,t,t.next)>0)}function be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function fs(n,t){return n.x===t.x&&n.y===t.y}function sh(n,t,e,i){const s=Rr(be(n,t,e)),r=Rr(be(n,t,i)),o=Rr(be(e,i,n)),a=Rr(be(e,i,t));return!!(s!==r&&o!==a||s===0&&Ar(n,e,t)||r===0&&Ar(n,i,t)||o===0&&Ar(e,n,i)||a===0&&Ar(e,t,i))}function Ar(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Rr(n){return n>0?1:n<0?-1:0}function _d(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ks(n,t){return be(n.prev,n,n.next)<0?be(n,t,n.next)>=0&&be(n,n.prev,t)>=0:be(n,t,n.prev)<0||be(n,n.next,t)<0}function Md(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function rh(n,t){const e=sl(n.i,n.x,n.y),i=sl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Cc(n,t,e,i){const s=sl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sd(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class yd{static triangulate(t,e,i=2){return rd(t,e,i)}}class ss{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ss.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Pc(t),Lc(i,t);let o=t.length;e.forEach(Pc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Lc(i,e[l]);const a=yd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Pc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Lc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Rl extends _e{constructor(t=new eh([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:bd;let A,M=!1,S,y,E,v;if(f){A=f.getSpacedPoints(d),M=!0,u=!1;const tt=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(d,tt),y=new F,E=new F,v=new F}u||(g=0,p=0,m=0,x=0);const T=a.extractPoints(c);let I=T.shape;const b=T.holes;if(!ss.isClockWise(I)){I=I.reverse();for(let tt=0,at=b.length;tt<at;tt++){const ct=b[tt];ss.isClockWise(ct)&&(b[tt]=ct.reverse())}}function L(tt){const ct=10000000000000001e-36;let H=tt[0];for(let j=1;j<=tt.length;j++){const At=j%tt.length,Nt=tt[At],Gt=Nt.x-H.x,Xt=Nt.y-H.y,z=Gt*Gt+Xt*Xt,ne=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(H.x),Math.abs(H.y)),Zt=ct*ne*ne;if(z<=Zt){tt.splice(At,1),j--;continue}H=Nt}}L(I),b.forEach(L);const P=b.length,D=I;for(let tt=0;tt<P;tt++){const at=b[tt];I=I.concat(at)}function O(tt,at,ct){return at||oe("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(at,ct)}const N=I.length;function k(tt,at,ct){let H,j,At;const Nt=tt.x-at.x,Gt=tt.y-at.y,Xt=ct.x-tt.x,z=ct.y-tt.y,ne=Nt*Nt+Gt*Gt,Zt=Nt*z-Gt*Xt;if(Math.abs(Zt)>Number.EPSILON){const U=Math.sqrt(ne),w=Math.sqrt(Xt*Xt+z*z),X=at.x-Gt/U,K=at.y+Nt/U,et=ct.x-z/w,ht=ct.y+Xt/w,mt=((et-X)*z-(ht-K)*Xt)/(Nt*z-Gt*Xt);H=X+Nt*mt-tt.x,j=K+Gt*mt-tt.y;const nt=H*H+j*j;if(nt<=2)return new ft(H,j);At=Math.sqrt(nt/2)}else{let U=!1;Nt>Number.EPSILON?Xt>Number.EPSILON&&(U=!0):Nt<-Number.EPSILON?Xt<-Number.EPSILON&&(U=!0):Math.sign(Gt)===Math.sign(z)&&(U=!0),U?(H=-Gt,j=Nt,At=Math.sqrt(ne)):(H=Nt,j=Gt,At=Math.sqrt(ne/2))}return new ft(H/At,j/At)}const B=[];for(let tt=0,at=D.length,ct=at-1,H=tt+1;tt<at;tt++,ct++,H++)ct===at&&(ct=0),H===at&&(H=0),B[tt]=k(D[tt],D[ct],D[H]);const q=[];let W,it=B.concat();for(let tt=0,at=P;tt<at;tt++){const ct=b[tt];W=[];for(let H=0,j=ct.length,At=j-1,Nt=H+1;H<j;H++,At++,Nt++)At===j&&(At=0),Nt===j&&(Nt=0),W[H]=k(ct[H],ct[At],ct[Nt]);q.push(W),it=it.concat(W)}let ot;if(g===0)ot=ss.triangulateShape(D,b);else{const tt=[],at=[];for(let ct=0;ct<g;ct++){const H=ct/g,j=p*Math.cos(H*Math.PI/2),At=m*Math.sin(H*Math.PI/2)+x;for(let Nt=0,Gt=D.length;Nt<Gt;Nt++){const Xt=O(D[Nt],B[Nt],At);ut(Xt.x,Xt.y,-j),H===0&&tt.push(Xt)}for(let Nt=0,Gt=P;Nt<Gt;Nt++){const Xt=b[Nt];W=q[Nt];const z=[];for(let ne=0,Zt=Xt.length;ne<Zt;ne++){const U=O(Xt[ne],W[ne],At);ut(U.x,U.y,-j),H===0&&z.push(U)}H===0&&at.push(z)}}ot=ss.triangulateShape(tt,at)}const bt=ot.length,dt=m+x;for(let tt=0;tt<N;tt++){const at=u?O(I[tt],it[tt],dt):I[tt];M?(E.copy(S.normals[0]).multiplyScalar(at.x),y.copy(S.binormals[0]).multiplyScalar(at.y),v.copy(A[0]).add(E).add(y),ut(v.x,v.y,v.z)):ut(at.x,at.y,0)}for(let tt=1;tt<=d;tt++)for(let at=0;at<N;at++){const ct=u?O(I[at],it[at],dt):I[at];M?(E.copy(S.normals[tt]).multiplyScalar(ct.x),y.copy(S.binormals[tt]).multiplyScalar(ct.y),v.copy(A[tt]).add(E).add(y),ut(v.x,v.y,v.z)):ut(ct.x,ct.y,h/d*tt)}for(let tt=g-1;tt>=0;tt--){const at=tt/g,ct=p*Math.cos(at*Math.PI/2),H=m*Math.sin(at*Math.PI/2)+x;for(let j=0,At=D.length;j<At;j++){const Nt=O(D[j],B[j],H);ut(Nt.x,Nt.y,h+ct)}for(let j=0,At=b.length;j<At;j++){const Nt=b[j];W=q[j];for(let Gt=0,Xt=Nt.length;Gt<Xt;Gt++){const z=O(Nt[Gt],W[Gt],H);M?ut(z.x,z.y+A[d-1].y,A[d-1].x+ct):ut(z.x,z.y,h+ct)}}}yt(),J();function yt(){const tt=s.length/3;if(u){let at=0,ct=N*at;for(let H=0;H<bt;H++){const j=ot[H];It(j[2]+ct,j[1]+ct,j[0]+ct)}at=d+g*2,ct=N*at;for(let H=0;H<bt;H++){const j=ot[H];It(j[0]+ct,j[1]+ct,j[2]+ct)}}else{for(let at=0;at<bt;at++){const ct=ot[at];It(ct[2],ct[1],ct[0])}for(let at=0;at<bt;at++){const ct=ot[at];It(ct[0]+N*d,ct[1]+N*d,ct[2]+N*d)}}i.addGroup(tt,s.length/3-tt,0)}function J(){const tt=s.length/3;let at=0;Q(D,at),at+=D.length;for(let ct=0,H=b.length;ct<H;ct++){const j=b[ct];Q(j,at),at+=j.length}i.addGroup(tt,s.length/3-tt,1)}function Q(tt,at){let ct=tt.length;for(;--ct>=0;){const H=ct;let j=ct-1;j<0&&(j=tt.length-1);for(let At=0,Nt=d+g*2;At<Nt;At++){const Gt=N*At,Xt=N*(At+1),z=at+H+Gt,ne=at+j+Gt,Zt=at+j+Xt,U=at+H+Xt;pt(z,ne,Zt,U)}}}function ut(tt,at,ct){l.push(tt),l.push(at),l.push(ct)}function It(tt,at,ct){Ct(tt),Ct(at),Ct(ct);const H=s.length/3,j=_.generateTopUV(i,s,H-3,H-2,H-1);qt(j[0]),qt(j[1]),qt(j[2])}function pt(tt,at,ct,H){Ct(tt),Ct(at),Ct(H),Ct(at),Ct(ct),Ct(H);const j=s.length/3,At=_.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);qt(At[0]),qt(At[1]),qt(At[3]),qt(At[1]),qt(At[2]),qt(At[3])}function Ct(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function qt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ed(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new nl[s.type]().fromJSON(s)),new Rl(i,t.options)}}const bd={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],d=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,d)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],d=t[i*3+1],h=t[i*3+2],u=t[s*3],p=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-h),new ft(u,1-m),new ft(x,1-f)]:[new ft(a,1-l),new ft(d,1-h),new ft(p,1-m),new ft(g,1-f)]}};function Ed(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pi extends oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pi(t.radius,t.detail)}}class Cl extends _e{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=te(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],d=1/e,h=new F,u=new ft,p=new F,m=new F,x=new F;let g=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-g,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-g,p.z=f*0,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(m)}for(let _=0;_<=e;_++){const A=i+_*d*s,M=Math.sin(A),S=Math.cos(A);for(let y=0;y<=t.length-1;y++){h.x=t[y].x*M,h.y=t[y].y,h.z=t[y].x*S,o.push(h.x,h.y,h.z),u.x=_/e,u.y=y/(t.length-1),a.push(u.x,u.y);const E=l[3*y+0]*M,v=l[3*y+1],T=l[3*y+0]*S;c.push(E,v,T)}}for(let _=0;_<e;_++)for(let A=0;A<t.length-1;A++){const M=A+_*t.length,S=M,y=M+t.length,E=M+t.length+1,v=M+1;r.push(S,y,v),r.push(E,v,y)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.points,t.segments,t.phiStart,t.phiLength)}}class tr extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,h=t/a,u=e/l,p=[],m=[],x=[],g=[];for(let f=0;f<d;f++){const _=f*u-o;for(let A=0;A<c;A++){const M=A*h-r;m.push(M,-_,0),x.push(0,0,1),g.push(A/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const A=_+c*f,M=_+c*(f+1),S=_+1+c*(f+1),y=_+1+c*f;p.push(A,M,y),p.push(M,S,y)}this.setIndex(p),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.width,t.height,t.widthSegments,t.heightSegments)}}class hi extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new F,u=new F,p=[],m=[],x=[],g=[];for(let f=0;f<=i;f++){const _=[],A=f/i,M=o+A*a,S=t*Math.cos(M),y=Math.sqrt(t*t-S*S);let E=0;f===0&&o===0?E=.5/e:f===i&&l===Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){const T=v/e,I=s+T*r;h.x=-y*Math.cos(I),h.y=S,h.z=y*Math.sin(I),m.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),g.push(T+E,1-A),_.push(c++)}d.push(_)}for(let f=0;f<i;f++)for(let _=0;_<e;_++){const A=d[f][_+1],M=d[f][_],S=d[f+1][_],y=d[f+1][_+1];(f!==0||o>0)&&p.push(A,M,y),(f!==i-1||l<Math.PI)&&p.push(M,S,y)}this.setIndex(p),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class er extends _e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],h=[],u=new F,p=new F,m=new F;for(let x=0;x<=i;x++){const g=o+x/i*a;for(let f=0;f<=s;f++){const _=f/s*r;p.x=(t+e*Math.cos(g))*Math.cos(_),p.y=(t+e*Math.cos(g))*Math.sin(_),p.z=e*Math.sin(g),c.push(p.x,p.y,p.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(p,u).normalize(),d.push(m.x,m.y,m.z),h.push(f/s),h.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){const f=(s+1)*x+g-1,_=(s+1)*(x-1)+g-1,A=(s+1)*(x-1)+g,M=(s+1)*x+g;l.push(f,_,M),l.push(_,A,M)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ds(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Ic(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ic(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=ds(n[e]);for(const s in i)t[s]=i[s]}return t}function Ic(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function oh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Pl={clone:ds,merge:Je};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Rd extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ps extends Bi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Cd extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pd extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ah extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ld extends ah{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Wo=new ae,Dc=new F,Uc=new F;class Id{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dc),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cr=new F,Pr=new Qe,Rn=new F;class lh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cr,Pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Cr,Pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ei=new F,Nc=new ft,Fc=new ft;class dn extends lh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Nc,Fc),e.subVectors(Fc,Nc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ao extends lh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dd extends Id{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ud extends ah{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Dd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ji=-90,ts=1;class Nd extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(ji,ts,t,e);s.layers=this.layers,this.add(s);const r=new dn(ji,ts,t,e);r.layers=this.layers,this.add(r);const o=new dn(ji,ts,t,e);o.layers=this.layers,this.add(o);const a=new dn(ji,ts,t,e);a.layers=this.layers,this.add(a);const l=new dn(ji,ts,t,e);l.layers=this.layers,this.add(l);const c=new dn(ji,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,u,p),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Fd extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Od{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=zd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zd(){this._document.hidden===!1&&this.reset()}const Bl=class Bl{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Bl.prototype.isMatrix2=!0;let Oc=Bl;function zc(n,t,e,i){const s=Bd(i);switch(e){case Bu:return n*t;case io:return n*t/s.components*s.byteLength;case pl:return n*t/s.components*s.byteLength;case Di:return n*t*2/s.components*s.byteLength;case ml:return n*t*2/s.components*s.byteLength;case ku:return n*t*3/s.components*s.byteLength;case mn:return n*t*4/s.components*s.byteLength;case gl:return n*t*4/s.components*s.byteLength;case Br:case kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Ta:return Math.max(n,16)*Math.max(t,8)/4;case ba:case wa:return Math.max(n,8)*Math.max(t,8)/2;case Aa:case Ra:case Pa:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Yr:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ya:case Za:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ja:case $a:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Zr:case Qa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bd(n){switch(n){case en:case Nu:return{byteLength:1,components:1};case Xs:case Fu:case wn:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case En:case hl:case bn:return{byteLength:4,components:1};case Ou:case zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ch(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function kd(n){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<h.length;p++){const m=h[u],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,m=h.length;p<m;p++){const x=h[p];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
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
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,Bp=`uniform sampler2D dfgLUT;
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
}`,kp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,a0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,h0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,d0=`#define TOON
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
}`,p0=`#define TOON
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
}`,m0=`uniform float size;
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,v0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Vd,alphahash_pars_fragment:Gd,alphamap_fragment:Hd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Zd,batching_pars_vertex:Kd,batching_vertex:Jd,begin_vertex:$d,beginnormal_vertex:Qd,bsdfs:jd,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:op,color_pars_fragment:ap,color_pars_vertex:lp,color_vertex:cp,common:up,cube_uv_reflection_fragment:hp,defaultnormal_vertex:fp,displacementmap_pars_vertex:dp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:xp,colorspace_pars_fragment:vp,envmap_fragment:_p,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Dp,envmap_vertex:bp,fog_vertex:Ep,fog_pars_vertex:wp,fog_fragment:Tp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Ip,lights_toon_fragment:Up,lights_toon_pars_fragment:Np,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:zp,lights_physical_pars_fragment:Bp,lights_fragment_begin:kp,lights_fragment_maps:Vp,lights_fragment_end:Gp,lightprobes_pars_fragment:Hp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Zp,map_pars_fragment:Kp,map_particle_fragment:Jp,map_particle_pars_fragment:$p,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:jp,morphinstance_vertex:tm,morphcolor_vertex:em,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:xm,project_vertex:vm,dithering_fragment:_m,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:zm,uv_vertex:Bm,worldpos_vertex:km,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Hm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:Zm,distance_vert:Km,distance_frag:Jm,equirect_vert:$m,equirect_frag:Qm,linedashed_vert:jm,linedashed_frag:t0,meshbasic_vert:e0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:o0,meshnormal_vert:a0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:u0,meshphysical_vert:h0,meshphysical_frag:f0,meshtoon_vert:d0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:x0,shadow_frag:v0,sprite_vert:_0,sprite_frag:M0},St={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Ln={basic:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Je([St.points,St.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Je([St.common,St.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Je([St.sprite,St.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Je([St.common,St.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Je([St.lights,St.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Ln.physical={uniforms:Je([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Lr={r:0,b:0,g:0},S0=new ae,uh=new Yt;uh.set(-1,0,0,0,1,0,0,0,1);function y0(n,t,e,i,s,r){const o=new kt(0);let a=s===!0?0:1,l,c,d=null,h=0,u=null;function p(_){let A=_.isScene===!0?_.background:null;if(A&&A.isTexture){const M=_.backgroundBlurriness>0;A=t.get(A,M)}return A}function m(_){let A=!1;const M=p(_);M===null?g(o,a):M&&M.isColor&&(g(M,1),A=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,A){const M=p(A);M&&(M.isCubeTexture||M.mapping===no)?(c===void 0&&(c=new jt(new qe(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:ds(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uh),c.material.toneMapped=ie.getTransfer(M.colorSpace)!==fe,(d!==M||h!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,u=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new jt(new tr(2,2),new Ze({name:"BackgroundMaterial",uniforms:ds(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,A){_.getRGB(Lr,oh(n)),e.buffers.color.setClear(Lr.r,Lr.g,Lr.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,A=1){o.set(_),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:f}}function b0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(b,C,L,P,D){let O=!1;const N=h(b,P,L,C);r!==N&&(r=N,c(r.object)),O=p(b,P,L,D),O&&m(b,P,L,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(b,C,L,P),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function d(b){return n.deleteVertexArray(b)}function h(b,C,L,P){const D=P.wireframe===!0;let O=i[C.id];O===void 0&&(O={},i[C.id]=O);const N=b.isInstancedMesh===!0?b.id:0;let k=O[N];k===void 0&&(k={},O[N]=k);let B=k[L.id];B===void 0&&(B={},k[L.id]=B);let q=B[D];return q===void 0&&(q=u(l()),B[D]=q),q}function u(b){const C=[],L=[],P=[];for(let D=0;D<e;D++)C[D]=0,L[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:P,object:b,attributes:{},index:null}}function p(b,C,L,P){const D=r.attributes,O=C.attributes;let N=0;const k=L.getAttributes();for(const B in k)if(k[B].location>=0){const W=D[B];let it=O[B];if(it===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),W===void 0||W.attribute!==it||it&&W.data!==it.data)return!0;N++}return r.attributesNum!==N||r.index!==P}function m(b,C,L,P){const D={},O=C.attributes;let N=0;const k=L.getAttributes();for(const B in k)if(k[B].location>=0){let W=O[B];W===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(W=b.instanceColor));const it={};it.attribute=W,W&&W.data&&(it.data=W.data),D[B]=it,N++}r.attributes=D,r.attributesNum=N,r.index=P}function x(){const b=r.newAttributes;for(let C=0,L=b.length;C<L;C++)b[C]=0}function g(b){f(b,0)}function f(b,C){const L=r.newAttributes,P=r.enabledAttributes,D=r.attributeDivisors;L[b]=1,P[b]===0&&(n.enableVertexAttribArray(b),P[b]=1),D[b]!==C&&(n.vertexAttribDivisor(b,C),D[b]=C)}function _(){const b=r.newAttributes,C=r.enabledAttributes;for(let L=0,P=C.length;L<P;L++)C[L]!==b[L]&&(n.disableVertexAttribArray(L),C[L]=0)}function A(b,C,L,P,D,O,N){N===!0?n.vertexAttribIPointer(b,C,L,D,O):n.vertexAttribPointer(b,C,L,P,D,O)}function M(b,C,L,P){x();const D=P.attributes,O=L.getAttributes(),N=C.defaultAttributeValues;for(const k in O){const B=O[k];if(B.location>=0){let q=D[k];if(q===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){const W=q.normalized,it=q.itemSize,ot=t.get(q);if(ot===void 0)continue;const bt=ot.buffer,dt=ot.type,yt=ot.bytesPerElement,J=dt===n.INT||dt===n.UNSIGNED_INT||q.gpuType===hl;if(q.isInterleavedBufferAttribute){const Q=q.data,ut=Q.stride,It=q.offset;if(Q.isInstancedInterleavedBuffer){for(let pt=0;pt<B.locationSize;pt++)f(B.location+pt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<B.locationSize;pt++)g(B.location+pt);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let pt=0;pt<B.locationSize;pt++)A(B.location+pt,it/B.locationSize,dt,W,ut*yt,(It+it/B.locationSize*pt)*yt,J)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<B.locationSize;Q++)f(B.location+Q,q.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<B.locationSize;Q++)g(B.location+Q);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Q=0;Q<B.locationSize;Q++)A(B.location+Q,it/B.locationSize,dt,W,it*yt,it/B.locationSize*Q*yt,J)}}else if(N!==void 0){const W=N[k];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(B.location,W);break;case 3:n.vertexAttrib3fv(B.location,W);break;case 4:n.vertexAttrib4fv(B.location,W);break;default:n.vertexAttrib1fv(B.location,W)}}}}_()}function S(){T();for(const b in i){const C=i[b];for(const L in C){const P=C[L];for(const D in P){const O=P[D];for(const N in O)d(O[N].object),delete O[N];delete P[D]}}delete i[b]}}function y(b){if(i[b.id]===void 0)return;const C=i[b.id];for(const L in C){const P=C[L];for(const D in P){const O=P[D];for(const N in O)d(O[N].object),delete O[N];delete P[D]}}delete i[b.id]}function E(b){for(const C in i){const L=i[C];for(const P in L){const D=L[P];if(D[b.id]===void 0)continue;const O=D[b.id];for(const N in O)d(O[N].object),delete O[N];delete D[b.id]}}}function v(b){for(const C in i){const L=i[C],P=b.isInstancedMesh===!0?b.id:0,D=L[P];if(D!==void 0){for(const O in D){const N=D[O];for(const k in N)d(N[k].object),delete N[k];delete D[O]}delete L[P],Object.keys(L).length===0&&delete i[C]}}}function T(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function E0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function w0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==mn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const v=E===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==en&&E!==bn&&!v&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(Wt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:A,maxFragmentUniforms:M,maxSamples:S,samples:y}}function T0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ii,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||s;return s=u,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,p){const m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,f=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?d(null):c();else{const _=r?0:i,A=_*4;let M=f.clippingState||null;l.value=M,M=d(m,u,A,p);for(let S=0;S!==A;++S)M[S]=e[S];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,p,m){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const f=p+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let A=0,M=p;A!==x;++A,M+=4)o.copy(h[A]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const rs=4,A0=6,R0=20,C0=256,As=new ao,Bc=new kt;let Xo=null,qo=0,Yo=0,Zo=!1;const P0=new F,Si=new F;class kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=P0}=r;Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:wn,format:mn,colorSpace:Kr,depthBuffer:!1},s=Vc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=L0(r)),this._blurMaterial=D0(r,t,e),this._ggxMaterial=I0(r,t,e)}return s}_compileMaterial(t){const e=new jt(new _e,t);this._renderer.compile(e,As)}_sceneToCubeUV(t,e,i,s,r){const l=new dn(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Bc),h.toneMapping=Un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new qe,new yl({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let f=!1;const _=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,f=!0):(g.color.copy(Bc),f=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[A]));const S=this._cubeSize;es(s,M*S,A>2?S:0,S,S),h.setRenderTarget(s),f&&h.render(x,l),h.render(t,l)}h.toneMapping=p,h.autoClear=u,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ii||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;es(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,As)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,p=h*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-rs?i-m+rs:0),f=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=m-e,es(r,g,f,3*x,2*x),s.setRenderTarget(r),s.render(a,As),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,es(t,g,f,3*x,2*x),s.setRenderTarget(t),s.render(a,As)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[s],h=3*d*(s>this._lodMax-rs?s-this._lodMax+rs:0),u=4*(this._cubeSize-d);es(e,h,u,3*d,2*d),o.setRenderTarget(e),o.render(l,As)}}function L0(n){const t=[],e=[];let i=n;const s=n-rs+1+A0;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,p=3,m=new Float32Array(p*u*h),x=new Float32Array(p*u*h);for(let f=0;f<h;f++){const _=f%3*2/3-1,A=f>2?0:-1,M=[_,A,0,_+2/3,A,0,_+2/3,A+1,0,_,A,0,_+2/3,A+1,0,_,A+1,0];m.set(M,p*u*f);for(let S=0;S<u;S++){const y=d[S*2]*2-1,E=d[S*2+1]*2-1;f===0?Si.set(1,E,y):f===1?Si.set(-y,1,-E):f===2?Si.set(-y,E,1):f===3?Si.set(-1,E,-y):f===4?Si.set(-y,-1,E):Si.set(y,E,-1),Si.toArray(x,(f*u+S)*p)}}const g=new _e;g.setAttribute("position",new pe(m,p)),g.setAttribute("outputDirection",new pe(x,p)),e.push(new jt(g,null)),i>rs&&i--}return{lodMeshes:e,sizeLods:t}}function Vc(n,t,e){const i=new xn(n,t,e);return i.texture.mapping=no,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function I0(n,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function D0(n,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Gc(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Hc(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function lo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hh extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ku(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:Xn});r.uniforms.tEquirect.value=e;const o=new jt(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Oe),new Nd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function U0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===po||p===mo)if(t.has(u)){const m=t.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const x=new hh(m.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===po||p===mo,x=p===Ii||p===us;if(m||x){let g=e.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new kc(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const _=u.image;return m&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new kc(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function a(u,p){return p===po?u.mapping=Ii:p===mo&&(u.mapping=us),u}function l(u){let p=0;const m=6;for(let x=0;x<m;x++)u[x]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function N0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&as("WebGLRenderer: "+i+" extension not supported."),s}}}function F0(n,t,e,i){const s={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,m=h.attributes.position;let x=0;if(m===void 0)return;if(p!==null){const _=p.array;x=p.version;for(let A=0,M=_.length;A<M;A+=3){const S=_[A+0],y=_[A+1],E=_[A+2];u.push(S,y,y,E,E,S)}}else{const _=m.array;x=m.version;for(let A=0,M=_.length/3-1;A<M;A+=3){const S=A+0,y=A+1,E=A+2;u.push(S,y,y,E,E,S)}}const g=new(m.count>=65535?Yu:qu)(u,1);g.version=x;const f=r.get(h);f&&t.remove(f),r.set(h,g)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function O0(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){n.drawElements(i,u,r,h*o),e.update(u,i,1)}function c(h,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,h*o,p),e.update(u,i,p))}function d(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,p);let x=0;for(let g=0;g<p;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function z0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function B0(n,t,e){const i=new WeakMap,s=new ye;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let I=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var p=I;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let S=a.attributes.position.count*M,y=1;S>t.maxTextureSize&&(y=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*y*4*h),v=new Gu(E,S,y,h);v.type=bn,v.needsUpdate=!0;const T=M*4;for(let b=0;b<h;b++){const C=f[b],L=_[b],P=A[b],D=S*y*4*b;for(let O=0;O<C.count;O++){const N=O*T;m===!0&&(s.fromBufferAttribute(C,O),E[D+N+0]=s.x,E[D+N+1]=s.y,E[D+N+2]=s.z,E[D+N+3]=0),x===!0&&(s.fromBufferAttribute(L,O),E[D+N+4]=s.x,E[D+N+5]=s.y,E[D+N+6]=s.z,E[D+N+7]=0),g===!0&&(s.fromBufferAttribute(P,O),E[D+N+8]=s.x,E[D+N+9]=s.y,E[D+N+10]=s.z,E[D+N+11]=P.itemSize===4?s.w:1)}}u={count:h,texture:v,size:new ft(S,y)},i.set(a,u),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function k0(n,t,e,i,s){let r=new WeakMap;function o(c){const d=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}const V0={[Ru]:"LINEAR_TONE_MAPPING",[Cu]:"REINHARD_TONE_MAPPING",[Pu]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[Du]:"AGX_TONE_MAPPING",[ul]:"NEUTRAL_TONE_MAPPING",[Iu]:"CUSTOM_TONE_MAPPING"};function G0(n,t,e,i,s,r){const o=new xn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new _e;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));const d=new Rd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new jt(c,d),u=new ao(-1,1,1,-1,0,1);let p=null,m=null,x=!1,g,f=null,_=[],A=!1;this.setSize=function(M,S){o.setSize(M,S),a!==null&&a.setSize(M,S),l!==null&&l.setSize(M,S);for(let y=0;y<_.length;y++){const E=_[y];E.setSize&&E.setSize(M,S)}},this.setEffects=function(M){_=M,A=_.length>0&&_[0].isRenderPass===!0;const S=o.width,y=o.height;_.length>0&&a===null&&(a=new xn(S,y,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(S,y,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<_.length;E++){const v=_[E];v.setSize&&v.setSize(S,y)}},this.begin=function(M,S){if(x||M.toneMapping===Un&&_.length===0)return!1;if(f=S,S!==null){const y=S.width,E=S.height;(o.width!==y||o.height!==E)&&this.setSize(y,E)}return A===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Un,!0},this.hasRenderPass=function(){return A},this.end=function(M,S){M.toneMapping=g,x=!0;let y=o,E=a;for(let v=0;v<_.length;v++){const T=_[v];T.enabled!==!1&&(T.render(M,E,y,S),T.needsSwap!==!1&&(y=E,E=E===a?l:a))}if(p!==M.outputColorSpace||m!==M.toneMapping){p=M.outputColorSpace,m=M.toneMapping,d.defines={},ie.getTransfer(p)===fe&&(d.defines.SRGB_TRANSFER="");const v=V0[m];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(f),M.render(h,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const fh=new $e,rl=new hs(1,1),dh=new Gu,ph=new Ef,mh=new Ku,Wc=[],Xc=[],qc=new Float32Array(16),Yc=new Float32Array(9),Zc=new Float32Array(4);function vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Wc[s];if(r===void 0&&(r=new Float32Array(s),Wc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function co(n,t){let e=Xc[t];e===void 0&&(e=new Int32Array(t),Xc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function H0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function Y0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Zc.set(i),n.uniformMatrix2fv(this.addr,!1,Zc),Ne(e,i)}}function Z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Yc.set(i),n.uniformMatrix3fv(this.addr,!1,Yc),Ne(e,i)}}function K0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;qc.set(i),n.uniformMatrix4fv(this.addr,!1,qc),Ne(e,i)}}function J0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function Q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function j0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function tg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function sg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rl.compareFunction=e.isReversedDepthBuffer()?vl:xl,r=rl):r=fh,e.setTexture2D(t||r,s)}function rg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ph,s)}function og(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mh,s)}function ag(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||dh,s)}function lg(n){switch(n){case 5126:return H0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return K0;case 5124:case 35670:return J0;case 35667:case 35671:return $0;case 35668:case 35672:return Q0;case 35669:case 35673:return j0;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}function cg(n,t){n.uniform1fv(this.addr,t)}function ug(n,t){const e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function hg(n,t){const e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function fg(n,t){const e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function dg(n,t){const e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function pg(n,t){const e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mg(n,t){const e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gg(n,t){n.uniform1iv(this.addr,t)}function xg(n,t){n.uniform2iv(this.addr,t)}function vg(n,t){n.uniform3iv(this.addr,t)}function _g(n,t){n.uniform4iv(this.addr,t)}function Mg(n,t){n.uniform1uiv(this.addr,t)}function Sg(n,t){n.uniform2uiv(this.addr,t)}function yg(n,t){n.uniform3uiv(this.addr,t)}function bg(n,t){n.uniform4uiv(this.addr,t)}function Eg(n,t,e){const i=this.cache,s=t.length,r=co(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=rl:o=fh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function wg(n,t,e){const i=this.cache,s=t.length,r=co(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ph,r[o])}function Tg(n,t,e){const i=this.cache,s=t.length,r=co(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mh,r[o])}function Ag(n,t,e){const i=this.cache,s=t.length,r=co(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||dh,r[o])}function Rg(n){switch(n){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return Mg;case 36294:return Sg;case 36295:return yg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Cg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lg(e.type)}}class Pg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}}class Lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Kc(n,t){n.seq.push(t),n.map[t.id]=t}function Ig(n,t,e){const i=n.name,s=i.length;for(Ko.lastIndex=0;;){const r=Ko.exec(i),o=Ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kc(e,c===void 0?new Cg(a,n,t):new Pg(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Lg(a),Kc(e,h)),e=h}}}class Hr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ig(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Jc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Dg=37297;let Ug=0;function Ng(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const $c=new Yt;function Fg(n){ie._getMatrix($c,ie.workingColorSpace,n);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Jr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Qc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ng(n.getShaderSource(t),a)}else return r}function Og(n,t){const e=Fg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const zg={[Ru]:"Linear",[Cu]:"Reinhard",[Pu]:"Cineon",[Lu]:"ACESFilmic",[Du]:"AgX",[ul]:"Neutral",[Iu]:"Custom"};function Bg(n,t){const e=zg[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new F;function kg(){ie.getLuminanceCoefficients(Ir);const n=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Gg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zs(n){return n!==""}function jc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(Wg,qg)}const Xg=new Map;function qg(n,t){let e=Qt[t];if(e===void 0){const i=Xg.get(t);if(i!==void 0)e=Qt[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ol(e)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(Yg,Zg)}function Zg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Kg={[Vs]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Jg(n){return Kg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $g={[Ii]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE_UV"};function Qg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$g[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const jg={[us]:"ENVMAP_MODE_REFRACTION"};function tx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ex={[Au]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function nx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ex[n.combine]||"ENVMAP_BLENDING_NONE"}function ix(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function sx(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Jg(e),c=Qg(e),d=tx(e),h=nx(e),u=ix(e),p=Vg(e),m=Gg(r),x=s.createProgram();let g,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zs).join(`
`),f.length>0&&(f+=`
`)):(g=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),f=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Og("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=ol(o),o=jc(o,e),o=tu(o,e),a=ol(a),a=jc(a,e),a=tu(a,e),o=eu(o),a=eu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=_+g+o,M=_+f+a,S=Jc(s,s.VERTEX_SHADER,A),y=Jc(s,s.FRAGMENT_SHADER,M);s.attachShader(x,S),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(b){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(y)||"",D=C.trim(),O=L.trim(),N=P.trim();let k=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,y);else{const q=Qc(s,S,"vertex"),W=Qc(s,y,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+q+`
`+W)}else D!==""?Wt("WebGLProgram: Program Info Log:",D):(O===""||N==="")&&(B=!1);B&&(b.diagnostics={runnable:k,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:N,prefix:f}})}s.deleteShader(S),s.deleteShader(y),v=new Hr(s,x),T=Hg(s,x)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,Dg)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=y,this}let rx=0;class ox{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ax(t),e.set(t,i)),i}}class ax{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}}function lx(n){return n===Di||n===Yr||n===Zr}function cx(n,t,e,i,s,r){const o=new Hu,a=new ox,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,I,b,C,L){const P=b.fog,D=C.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?b.environment:null,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=t.get(v.envMap||O,N),B=k&&k.mapping===no?k.image.height:null,q=p[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=W!==void 0?W.length:0;let ot=0;D.morphAttributes.position!==void 0&&(ot=1),D.morphAttributes.normal!==void 0&&(ot=2),D.morphAttributes.color!==void 0&&(ot=3);let bt,dt,yt,J;if(q){const ge=Ln[q];bt=ge.vertexShader,dt=ge.fragmentShader}else{bt=v.vertexShader,dt=v.fragmentShader;const ge=a.getVertexShaderStage(v),ue=a.getFragmentShaderStage(v);a.update(v,ge,ue),yt=ge.id,J=ue.id}const Q=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),It=C.isInstancedMesh===!0,pt=C.isBatchedMesh===!0,Ct=!!v.map,qt=!!v.matcap,tt=!!k,at=!!v.aoMap,ct=!!v.lightMap,H=!!v.bumpMap&&v.wireframe===!1,j=!!v.normalMap,At=!!v.displacementMap,Nt=!!v.emissiveMap,Gt=!!v.metalnessMap,Xt=!!v.roughnessMap,z=v.anisotropy>0,ne=v.clearcoat>0,Zt=v.dispersion>0,U=v.retroreflectivity>0,w=v.iridescence>0,X=v.sheen>0,K=v.transmission>0,et=z&&!!v.anisotropyMap,ht=ne&&!!v.clearcoatMap,mt=ne&&!!v.clearcoatNormalMap,nt=ne&&!!v.clearcoatRoughnessMap,rt=w&&!!v.iridescenceMap,xt=w&&!!v.iridescenceThicknessMap,zt=X&&!!v.sheenColorMap,Et=X&&!!v.sheenRoughnessMap,vt=!!v.specularMap,Bt=!!v.specularColorMap,Ht=!!v.specularIntensityMap,Kt=K&&!!v.transmissionMap,G=K&&!!v.thicknessMap,_t=!!v.gradientMap,st=!!v.alphaMap,Mt=v.alphaTest>0,Rt=!!v.alphaHash,lt=!!v.extensions;let Vt=Un;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Vt=n.toneMapping);const Ft={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:bt,fragmentShader:dt,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:pt,batchingColor:pt&&C._colorsTexture!==null,instancing:It,instancingColor:It&&C.instanceColor!==null,instancingMorph:It&&C.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:qt,envMap:tt,envMapMode:tt&&k.mapping,envMapCubeUVHeight:B,aoMap:at,lightMap:ct,bumpMap:H,normalMap:j,displacementMap:At,emissiveMap:Nt,normalMapObjectSpace:j&&v.normalMapType===rf,normalMapTangentSpace:j&&v.normalMapType===ja,packedNormalMap:j&&v.normalMapType===ja&&lx(v.normalMap.format),metalnessMap:Gt,roughnessMap:Xt,anisotropy:z,anisotropyMap:et,clearcoat:ne,clearcoatMap:ht,clearcoatNormalMap:mt,clearcoatRoughnessMap:nt,dispersion:Zt,retroreflection:U,iridescence:w,iridescenceMap:rt,iridescenceThicknessMap:xt,sheen:X,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:vt,specularColorMap:Bt,specularIntensityMap:Ht,transmission:K,transmissionMap:Kt,thicknessMap:G,gradientMap:_t,opaque:v.transparent===!1&&v.blending===os&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:Mt,alphaHash:Rt,combine:v.combine,mapUv:Ct&&m(v.map.channel),aoMapUv:at&&m(v.aoMap.channel),lightMapUv:ct&&m(v.lightMap.channel),bumpMapUv:H&&m(v.bumpMap.channel),normalMapUv:j&&m(v.normalMap.channel),displacementMapUv:At&&m(v.displacementMap.channel),emissiveMapUv:Nt&&m(v.emissiveMap.channel),metalnessMapUv:Gt&&m(v.metalnessMap.channel),roughnessMapUv:Xt&&m(v.roughnessMap.channel),anisotropyMapUv:et&&m(v.anisotropyMap.channel),clearcoatMapUv:ht&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&m(v.sheenRoughnessMap.channel),specularMapUv:vt&&m(v.specularMap.channel),specularColorMapUv:Bt&&m(v.specularColorMap.channel),specularIntensityMapUv:Ht&&m(v.specularIntensityMap.channel),transmissionMapUv:Kt&&m(v.transmissionMap.channel),thicknessMapUv:G&&m(v.thicknessMap.channel),alphaMapUv:st&&m(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(j||z),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(Ct||st),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&j===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ut,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ot,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===fe,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&ie.getTransfer(v.emissiveMap.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Ye,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function g(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(f(T,v),_(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function f(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function _(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){const T=p[v.type];let I;if(T){const b=Ln[T];I=Pl.clone(b.uniforms)}else I=v.uniforms;return I}function M(v,T){let I=d.get(T);return I!==void 0?++I.usedTimes:(I=new sx(n,T,v,s),c.push(I),d.set(T,I)),I}function S(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function y(v){a.remove(v)}function E(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:M,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:E}}function ux(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function hx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function iu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function su(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,x,g,f){let _=n[t];return _===void 0?(_={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:f},n[t]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=m,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=f),t++,_}function l(u,p,m,x,g,f,_){_.reversedDepth===!0&&(g=-g);const A=a(u,p,m,x,g,f);m.transmission>0?i.push(A):m.transparent===!0?s.push(A):e.push(A)}function c(u,p,m,x,g,f){const _=a(u,p,m,x,g,f);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function d(u,p){e.length>1&&e.sort(u||hx),i.length>1&&i.sort(p||iu),s.length>1&&s.sort(p||iu)}function h(){for(let u=t,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function fx(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new su,n.set(i,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function dx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new kt};break;case"SpotLight":e={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function px(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mx=0;function gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xx(n){const t=new dx,e=px(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new ae,o=new ae;function a(c){let d=0,h=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,_=0,A=0,M=0,S=0,y=0,E=0,v=0,T=0,I=0;c.sort(gx);for(let C=0,L=c.length;C<L;C++){const P=c[C],D=P.color,O=P.intensity,N=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Di?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=D.r*O,h+=D.g*O,u+=D.b*O;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],O);I++}else if(P.isSunLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[m]=W,i.sunShadowMap[m]=k;const it=q.getViewportCount();for(let ot=0;ot<it;ot++)i.sunShadowMatrix[x+ot]=q.getMatrix(ot),i.sunShadowCascade[x+ot]=q._cascadeData[ot];x+=it,m++}i.sun[p]=B,p++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.directionalShadow[g]=W,i.directionalShadowMap[g]=k,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=B,g++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(D).multiplyScalar(O),B.distance=N,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[_]=B;const q=P.shadow;if(P.map&&(i.spotLightMap[v]=P.map,v++,q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=q.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=k,E++}_++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(D).multiplyScalar(O),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[A]=B,A++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,i.pointShadow[f]=W,i.pointShadowMap[f]=k,i.pointShadowMatrix[f]=P.shadow.matrix,y++}i.point[f]=B,f++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(O),B.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[M]=B,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const b=i.hash;(b.sunLength!==p||b.directionalLength!==g||b.pointLength!==f||b.spotLength!==_||b.rectAreaLength!==A||b.hemiLength!==M||b.numSunShadows!==m||b.numDirectionalShadows!==S||b.numPointShadows!==y||b.numSpotShadows!==E||b.numSpotMaps!==v||b.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=g,i.spot.length=_,i.rectArea.length=A,i.point.length=f,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,b.sunLength=p,b.directionalLength=g,b.pointLength=f,b.spotLength=_,b.rectAreaLength=A,b.hemiLength=M,b.numSunShadows=m,b.numDirectionalShadows=S,b.numPointShadows=y,b.numSpotShadows=E,b.numSpotMaps=v,b.numLightProbes=I,i.version=mx++)}function l(c,d){let h=0,u=0,p=0,m=0,x=0,g=0;const f=d.matrixWorldInverse;for(let _=0,A=c.length;_<A;_++){const M=c[_];if(M.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),h++}else if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),g++}}}return{setup:a,setupView:l,state:i}}function ru(n){const t=new xx(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function d(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function vx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ru(n),t.set(s,[a])):r>=o.length?(a=new ru(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`,Sx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],yx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ou=new ae,Rs=new F,Jo=new F;function bx(n,t,e){let i=new bl;const s=new ft,r=new ft,o=new ye,a=new Cd,l=new Pd,c={},d=e.maxTextureSize,h={[Li]:Ye,[Ye]:Li,[on]:on},u=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:_x,fragmentShader:Mx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new _e;m.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let f=this.type;this.render=function(y,E,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Nh&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);const T=n.getRenderTarget(),I=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),C=n.state;C.setBlending(Xn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=f!==this.type;L&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(D=>D.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,D=y.length;P<D;P++){const O=y[P],N=O.shadow;if(N===void 0){Wt("WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const k=N.getFrameExtents();s.multiply(k),r.copy(N.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/k.x),s.x=r.x*k.x,N.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/k.y),s.y=r.y*k.y,N.mapSize.y=r.y));const B=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=B,N.map===null||L===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Fs){if(O.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new xn(s.x,s.y,{format:Di,type:wn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),N.map.texture.name=O.name+".shadowMap",N.map.depthTexture=new hs(s.x,s.y,bn),N.map.depthTexture.name=O.name+".shadowMapDepth",N.map.depthTexture.format=Yn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ie,N.map.depthTexture.magFilter=Ie}else O.isPointLight?(N.map=new hh(s.x),N.map.depthTexture=new Xf(s.x,En)):(N.map=new xn(s.x,s.y),N.map.depthTexture=new hs(s.x,s.y,En)),N.map.depthTexture.name=O.name+".shadowMap",N.map.depthTexture.format=Yn,this.type===Vs?(N.map.depthTexture.compareFunction=B?vl:xl,N.map.depthTexture.minFilter=Oe,N.map.depthTexture.magFilter=Oe):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ie,N.map.depthTexture.magFilter=Ie);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);const q=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();O.isPointLight!==!0&&N.updateMatrices(O,v);for(let W=0;W<q;W++){const it=N.getCamera(W);if(O.isPointLight){const ot=N.camera,bt=N.matrix,dt=O.distance||ot.far;dt!==ot.far&&(ot.far=dt,ot.updateProjectionMatrix()),Rs.setFromMatrixPosition(O.matrixWorld),ot.position.copy(Rs),Jo.copy(ot.position),Jo.add(Sx[W]),ot.up.copy(yx[W]),ot.lookAt(Jo),ot.updateMatrixWorld(),bt.makeTranslation(-Rs.x,-Rs.y,-Rs.z),ou.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),N._frustum.setFromProjectionMatrix(ou,ot.coordinateSystem,ot.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,W),n.clear();else{W===0&&(n.setRenderTarget(N.map),n.clear());const ot=N.getViewport(W);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),C.viewport(o)}i=N.getFrustum(W),M(E,v,it,O,this.type)}N.isPointLightShadow!==!0&&this.type===Fs&&_(N,v),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(T,I,b)};function _(y,E){const v=t.update(x);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new xn(s.x,s.y,{format:Di,type:wn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,v,u,x,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,v,p,x,null)}function A(y,E,v,T){let I=null;const b=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(b!==void 0)I=b;else if(I=v.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const C=I.uuid,L=E.uuid;let P=c[C];P===void 0&&(P={},c[C]=P);let D=P[L];D===void 0&&(D=I.clone(),P[L]=D,E.addEventListener("dispose",S)),I=D}if(I.visible=E.visible,I.wireframe=E.wireframe,T===Fs?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:h[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const C=n.properties.get(I);C.light=v}return I}function M(y,E,v,T,I){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&I===Fs)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);const L=t.update(y),P=y.material;if(Array.isArray(P)){const D=L.groups;for(let O=0,N=D.length;O<N;O++){const k=D[O],B=P[k.materialIndex];if(B&&B.visible){const q=A(y,B,T,I);y.onBeforeShadow(n,y,E,v,L,q,k),n.renderBufferDirect(v,null,L,q,y,k),y.onAfterShadow(n,y,E,v,L,q,k)}}}else if(P.visible){const D=A(y,P,T,I);y.onBeforeShadow(n,y,E,v,L,D,null),n.renderBufferDirect(v,null,L,D,y,null),y.onAfterShadow(n,y,E,v,L,D,null)}}const C=y.children;for(let L=0,P=C.length;L<P;L++)M(C[L],E,v,T,I)}function S(y){y.target.removeEventListener("dispose",S);for(const v in c){const T=c[v],I=y.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function Ex(n,t){function e(){let G=!1;const _t=new ye;let st=null;const Mt=new ye(0,0,0,0);return{setMask:function(Rt){st!==Rt&&!G&&(n.colorMask(Rt,Rt,Rt,Rt),st=Rt)},setLocked:function(Rt){G=Rt},setClear:function(Rt,lt,Vt,Ft,ge){ge===!0&&(Rt*=Ft,lt*=Ft,Vt*=Ft),_t.set(Rt,lt,Vt,Ft),Mt.equals(_t)===!1&&(n.clearColor(Rt,lt,Vt,Ft),Mt.copy(_t))},reset:function(){G=!1,st=null,Mt.set(-1,0,0,0)}}}function i(){let G=!1,_t=!1,st=null,Mt=null,Rt=null;return{setReversed:function(lt){if(_t!==lt){const Vt=t.get("EXT_clip_control");lt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),_t=lt;const Ft=Rt;Rt=null,this.setClear(Ft)}},getReversed:function(){return _t},setTest:function(lt){lt?Q(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(lt){st!==lt&&!G&&(n.depthMask(lt),st=lt)},setFunc:function(lt){if(_t&&(lt=xf[lt]),Mt!==lt){switch(lt){case pa:n.depthFunc(n.NEVER);break;case ma:n.depthFunc(n.ALWAYS);break;case ga:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case xa:n.depthFunc(n.EQUAL);break;case va:n.depthFunc(n.GEQUAL);break;case _a:n.depthFunc(n.GREATER);break;case Ma:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=lt}},setLocked:function(lt){G=lt},setClear:function(lt){Rt!==lt&&(Rt=lt,_t&&(lt=1-lt),n.clearDepth(lt))},reset:function(){G=!1,st=null,Mt=null,Rt=null,_t=!1}}}function s(){let G=!1,_t=null,st=null,Mt=null,Rt=null,lt=null,Vt=null,Ft=null,ge=null;return{setTest:function(ue){G||(ue?Q(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(ue){_t!==ue&&!G&&(n.stencilMask(ue),_t=ue)},setFunc:function(ue,vn,Tn){(st!==ue||Mt!==vn||Rt!==Tn)&&(n.stencilFunc(ue,vn,Tn),st=ue,Mt=vn,Rt=Tn)},setOp:function(ue,vn,Tn){(lt!==ue||Vt!==vn||Ft!==Tn)&&(n.stencilOp(ue,vn,Tn),lt=ue,Vt=vn,Ft=Tn)},setLocked:function(ue){G=ue},setClear:function(ue){ge!==ue&&(n.clearStencil(ue),ge=ue)},reset:function(){G=!1,_t=null,st=null,Mt=null,Rt=null,lt=null,Vt=null,Ft=null,ge=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,m=[],x=null,g=!1,f=null,_=null,A=null,M=null,S=null,y=null,E=null,v=new kt(0,0,0),T=0,I=!1,b=null,C=null,L=null,P=null,D=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=k>=2);let q=null,W={};const it=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),bt=new ye().fromArray(it),dt=new ye().fromArray(ot);function yt(G,_t,st,Mt){const Rt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(G,lt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<st;Vt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(_t+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return lt}const J={};J[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(Ws),H(!1),j(Jl),Q(n.CULL_FACE),at(Xn);function Q(G){d[G]!==!0&&(n.enable(G),d[G]=!0)}function ut(G){d[G]!==!1&&(n.disable(G),d[G]=!1)}function It(G,_t){return u[G]!==_t?(n.bindFramebuffer(G,_t),u[G]=_t,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_t),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function pt(G,_t){let st=m,Mt=!1;if(G){st=p.get(_t),st===void 0&&(st=[],p.set(_t,st));const Rt=G.textures;if(st.length!==Rt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Vt=Rt.length;lt<Vt;lt++)st[lt]=n.COLOR_ATTACHMENT0+lt;st.length=Rt.length,Mt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(st)}function Ct(G){return x!==G?(n.useProgram(G),x=G,!0):!1}const qt={[is]:n.FUNC_ADD,[Oh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};qt[Bh]=n.MIN,qt[kh]=n.MAX;const tt={[Vh]:n.ZERO,[Gh]:n.ONE,[Hh]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[Kh]:n.SRC_ALPHA_SATURATE,[Yh]:n.DST_COLOR,[Xh]:n.DST_ALPHA,[Wh]:n.ONE_MINUS_SRC_COLOR,[Tu]:n.ONE_MINUS_SRC_ALPHA,[Zh]:n.ONE_MINUS_DST_COLOR,[qh]:n.ONE_MINUS_DST_ALPHA,[Jh]:n.CONSTANT_COLOR,[$h]:n.ONE_MINUS_CONSTANT_COLOR,[Qh]:n.CONSTANT_ALPHA,[jh]:n.ONE_MINUS_CONSTANT_ALPHA};function at(G,_t,st,Mt,Rt,lt,Vt,Ft,ge,ue){if(G===Xn){g===!0&&(ut(n.BLEND),g=!1);return}if(g===!1&&(Q(n.BLEND),g=!0),G!==Fh){if(G!==f||ue!==I){if((_!==is||S!==is)&&(n.blendEquation(n.FUNC_ADD),_=is,S=is),ue)switch(G){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case da:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:oe("WebGLState: Invalid blending: ",G);break}else switch(G){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $l:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",G);break}A=null,M=null,y=null,E=null,v.set(0,0,0),T=0,f=G,I=ue}return}Rt=Rt||_t,lt=lt||st,Vt=Vt||Mt,(_t!==_||Rt!==S)&&(n.blendEquationSeparate(qt[_t],qt[Rt]),_=_t,S=Rt),(st!==A||Mt!==M||lt!==y||Vt!==E)&&(n.blendFuncSeparate(tt[st],tt[Mt],tt[lt],tt[Vt]),A=st,M=Mt,y=lt,E=Vt),(Ft.equals(v)===!1||ge!==T)&&(n.blendColor(Ft.r,Ft.g,Ft.b,ge),v.copy(Ft),T=ge),f=G,I=!1}function ct(G,_t){G.side===on?ut(n.CULL_FACE):Q(n.CULL_FACE);let st=G.side===Ye;_t&&(st=!st),H(st),G.blending===os&&G.transparent===!1?at(Xn):at(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Mt=G.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Nt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(G){b!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),b=G)}function j(G){G!==Dh?(Q(n.CULL_FACE),G!==C&&(G===Jl?n.cullFace(n.BACK):G===Uh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),C=G}function At(G){G!==L&&(N&&n.lineWidth(G),L=G)}function Nt(G,_t,st){G?(Q(n.POLYGON_OFFSET_FILL),(P!==_t||D!==st)&&(P=_t,D=st,o.getReversed()&&(_t=-_t),n.polygonOffset(_t,st))):ut(n.POLYGON_OFFSET_FILL)}function Gt(G){G?Q(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function Xt(G){G===void 0&&(G=n.TEXTURE0+O-1),q!==G&&(n.activeTexture(G),q=G)}function z(G,_t,st){st===void 0&&(q===null?st=n.TEXTURE0+O-1:st=q);let Mt=W[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},W[st]=Mt),(Mt.type!==G||Mt.texture!==_t)&&(q!==st&&(n.activeTexture(st),q=st),n.bindTexture(G,_t||J[G]),Mt.type=G,Mt.texture=_t)}function ne(){const G=W[q];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Zt(){try{n.compressedTexImage2D(...arguments)}catch(G){oe("WebGLState:",G)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(G){oe("WebGLState:",G)}}function w(){try{n.texSubImage2D(...arguments)}catch(G){oe("WebGLState:",G)}}function X(){try{n.texSubImage3D(...arguments)}catch(G){oe("WebGLState:",G)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(G){oe("WebGLState:",G)}}function et(){try{n.compressedTexSubImage3D(...arguments)}catch(G){oe("WebGLState:",G)}}function ht(){try{n.texStorage2D(...arguments)}catch(G){oe("WebGLState:",G)}}function mt(){try{n.texStorage3D(...arguments)}catch(G){oe("WebGLState:",G)}}function nt(){try{n.texImage2D(...arguments)}catch(G){oe("WebGLState:",G)}}function rt(){try{n.texImage3D(...arguments)}catch(G){oe("WebGLState:",G)}}function xt(G){return h[G]!==void 0?h[G]:n.getParameter(G)}function zt(G,_t){h[G]!==_t&&(n.pixelStorei(G,_t),h[G]=_t)}function Et(G){bt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),bt.copy(G))}function vt(G){dt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),dt.copy(G))}function Bt(G,_t){let st=c.get(_t);st===void 0&&(st=new WeakMap,c.set(_t,st));let Mt=st.get(G);Mt===void 0&&(Mt=n.getUniformBlockIndex(_t,G.name),st.set(G,Mt))}function Ht(G,_t){const Mt=c.get(_t).get(G);l.get(_t)!==Mt&&(n.uniformBlockBinding(_t,Mt,G.__bindingPointIndex),l.set(_t,Mt))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},q=null,W={},u={},p=new WeakMap,m=[],x=null,g=!1,f=null,_=null,A=null,M=null,S=null,y=null,E=null,v=new kt(0,0,0),T=0,I=!1,b=null,C=null,L=null,P=null,D=null,bt.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ut,bindFramebuffer:It,drawBuffers:pt,useProgram:Ct,setBlending:at,setMaterial:ct,setFlipSided:H,setCullFace:j,setLineWidth:At,setPolygonOffset:Nt,setScissorTest:Gt,activeTexture:Xt,bindTexture:z,unbindTexture:ne,compressedTexImage2D:Zt,compressedTexImage3D:U,texImage2D:nt,texImage3D:rt,pixelStorei:zt,getParameter:xt,updateUBOMapping:Bt,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:mt,texSubImage2D:w,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:et,scissor:Et,viewport:vt,reset:Kt}}function wx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,w){return m?new OffscreenCanvas(U,w):$r("canvas")}function g(U,w,X){let K=1;const et=Zt(U);if((et.width>X||et.height>X)&&(K=X/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(K*et.width),mt=Math.floor(K*et.height);u===void 0&&(u=x(ht,mt));const nt=w?x(ht,mt):u;return nt.width=ht,nt.height=mt,nt.getContext("2d").drawImage(U,0,0,ht,mt),Wt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ht+"x"+mt+")."),nt}else return"data"in U&&Wt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),U;return U}function f(U){return U.generateMipmaps}function _(U){n.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(U,w,X,K,et,ht=!1){if(U!==null){if(n[U]!==void 0)return n[U];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt;K&&(mt=t.get("EXT_texture_norm16"),mt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=w;if(w===n.RED&&(X===n.FLOAT&&(nt=n.R32F),X===n.HALF_FLOAT&&(nt=n.R16F),X===n.UNSIGNED_BYTE&&(nt=n.R8),X===n.UNSIGNED_SHORT&&mt&&(nt=mt.R16_EXT),X===n.SHORT&&mt&&(nt=mt.R16_SNORM_EXT)),w===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.R8UI),X===n.UNSIGNED_SHORT&&(nt=n.R16UI),X===n.UNSIGNED_INT&&(nt=n.R32UI),X===n.BYTE&&(nt=n.R8I),X===n.SHORT&&(nt=n.R16I),X===n.INT&&(nt=n.R32I)),w===n.RG&&(X===n.FLOAT&&(nt=n.RG32F),X===n.HALF_FLOAT&&(nt=n.RG16F),X===n.UNSIGNED_BYTE&&(nt=n.RG8),X===n.UNSIGNED_SHORT&&mt&&(nt=mt.RG16_EXT),X===n.SHORT&&mt&&(nt=mt.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RG8UI),X===n.UNSIGNED_SHORT&&(nt=n.RG16UI),X===n.UNSIGNED_INT&&(nt=n.RG32UI),X===n.BYTE&&(nt=n.RG8I),X===n.SHORT&&(nt=n.RG16I),X===n.INT&&(nt=n.RG32I)),w===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),X===n.UNSIGNED_INT&&(nt=n.RGB32UI),X===n.BYTE&&(nt=n.RGB8I),X===n.SHORT&&(nt=n.RGB16I),X===n.INT&&(nt=n.RGB32I)),w===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),X===n.UNSIGNED_INT&&(nt=n.RGBA32UI),X===n.BYTE&&(nt=n.RGBA8I),X===n.SHORT&&(nt=n.RGBA16I),X===n.INT&&(nt=n.RGBA32I)),w===n.RGB&&(X===n.UNSIGNED_SHORT&&mt&&(nt=mt.RGB16_EXT),X===n.SHORT&&mt&&(nt=mt.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(nt=n.R11F_G11F_B10F)),w===n.RGBA){const rt=ht?Jr:ie.getTransfer(et);X===n.FLOAT&&(nt=n.RGBA32F),X===n.HALF_FLOAT&&(nt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(nt=rt===fe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&mt&&(nt=mt.RGBA16_EXT),X===n.SHORT&&mt&&(nt=mt.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function S(U,w){let X;return U?w===null||w===En||w===qs?X=n.DEPTH24_STENCIL8:w===bn?X=n.DEPTH32F_STENCIL8:w===Xs&&(X=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===En||w===qs?X=n.DEPTH_COMPONENT24:w===bn?X=n.DEPTH_COMPONENT32F:w===Xs&&(X=n.DEPTH_COMPONENT16),X}function y(U,w){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ie&&U.minFilter!==Oe?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function E(U){const w=U.target;w.removeEventListener("dispose",E),T(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&h.delete(w)}function v(U){const w=U.target;w.removeEventListener("dispose",v),b(w)}function T(U){const w=i.get(U);if(w.__webglInit===void 0)return;const X=U.source,K=p.get(X);if(K){const et=K[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(U),Object.keys(K).length===0&&p.delete(X)}i.remove(U)}function I(U){const w=i.get(U);n.deleteTexture(w.__webglTexture);const X=U.source,K=p.get(X);delete K[w.__cacheKey],o.memory.textures--}function b(U){const w=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let et=0;et<w.__webglFramebuffer[K].length;et++)n.deleteFramebuffer(w.__webglFramebuffer[K][et]);else n.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)n.deleteFramebuffer(w.__webglFramebuffer[K]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=U.textures;for(let K=0,et=X.length;K<et;K++){const ht=i.get(X[K]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(X[K])}i.remove(U)}let C=0;function L(){C=0}function P(){return C}function D(U){C=U}function O(){const U=C;return U>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,U}function N(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function k(U,w){const X=i.get(U);if(U.isVideoTexture&&z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&X.__version!==U.version){const K=U.image;if(K===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(X,U,w);return}}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+w)}function B(U,w){const X=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){ut(X,U,w);return}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+w)}function q(U,w){const X=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){ut(X,U,w);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+w)}function W(U,w){const X=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&X.__version!==U.version){It(X,U,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+w)}const it={[Sa]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},ot={[Ie]:n.NEAREST,[nf]:n.NEAREST_MIPMAP_NEAREST,[sr]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},bt={[af]:n.NEVER,[ff]:n.ALWAYS,[lf]:n.LESS,[xl]:n.LEQUAL,[cf]:n.EQUAL,[vl]:n.GEQUAL,[uf]:n.GREATER,[hf]:n.NOTEQUAL};function dt(U,w){if(w.type===bn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Oe||w.magFilter===go||w.magFilter===sr||w.magFilter===Ai||w.minFilter===Oe||w.minFilter===go||w.minFilter===sr||w.minFilter===Ai)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,it[w.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,it[w.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,it[w.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,ot[w.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,ot[w.minFilter]),w.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,bt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ie||w.minFilter!==sr&&w.minFilter!==Ai||w.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function yt(U,w){let X=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",E));const K=w.source;let et=p.get(K);et===void 0&&(et={},p.set(K,et));const ht=N(w);if(ht!==U.__cacheKey){et[ht]===void 0&&(et[ht]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),et[ht].usedTimes++;const mt=et[U.__cacheKey];mt!==void 0&&(et[U.__cacheKey].usedTimes--,mt.usedTimes===0&&I(w)),U.__cacheKey=ht,U.__webglTexture=et[ht].texture}return X}function J(U,w,X){return Math.floor(Math.floor(U/X)/w)}function Q(U,w,X,K){const ht=U.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,X,K,w.data);else{ht.sort((zt,Et)=>zt.start-Et.start);let mt=0;for(let zt=1;zt<ht.length;zt++){const Et=ht[mt],vt=ht[zt],Bt=Et.start+Et.count,Ht=J(vt.start,w.width,4),Kt=J(Et.start,w.width,4);vt.start<=Bt+1&&Ht===Kt&&J(vt.start+vt.count-1,w.width,4)===Ht?Et.count=Math.max(Et.count,vt.start+vt.count-Et.start):(++mt,ht[mt]=vt)}ht.length=mt+1;const nt=e.getParameter(n.UNPACK_ROW_LENGTH),rt=e.getParameter(n.UNPACK_SKIP_PIXELS),xt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let zt=0,Et=ht.length;zt<Et;zt++){const vt=ht[zt],Bt=Math.floor(vt.start/4),Ht=Math.ceil(vt.count/4),Kt=Bt%w.width,G=Math.floor(Bt/w.width),_t=Ht,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,Kt,G,_t,st,X,K,w.data)}U.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,nt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function ut(U,w,X){let K=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=n.TEXTURE_3D);const et=yt(U,w),ht=w.source;e.bindTexture(K,U.__webglTexture,n.TEXTURE0+X);const mt=i.get(ht);if(ht.version!==mt.__version||et===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const st=ie.getPrimaries(ie.workingColorSpace),Mt=w.colorSpace===oi?null:ie.getPrimaries(w.colorSpace),Rt=w.colorSpace===oi||st===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let rt=g(w.image,!1,s.maxTextureSize);rt=ne(w,rt);const xt=r.convert(w.format,w.colorSpace),zt=r.convert(w.type);let Et=M(w.internalFormat,xt,zt,w.normalized,w.colorSpace,w.isVideoTexture);dt(K,w);let vt;const Bt=w.mipmaps,Ht=w.isVideoTexture!==!0,Kt=mt.__version===void 0||et===!0,G=ht.dataReady,_t=y(w,rt);if(w.isDepthTexture)Et=S(w.format===Ri,w.type),Kt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,Et,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Et,rt.width,rt.height,0,xt,zt,null));else if(w.isDataTexture)if(Bt.length>0){Ht&&Kt&&e.texStorage2D(n.TEXTURE_2D,_t,Et,Bt[0].width,Bt[0].height);for(let st=0,Mt=Bt.length;st<Mt;st++)vt=Bt[st],Ht?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,vt.width,vt.height,xt,zt,vt.data):e.texImage2D(n.TEXTURE_2D,st,Et,vt.width,vt.height,0,xt,zt,vt.data);w.generateMipmaps=!1}else Ht?(Kt&&e.texStorage2D(n.TEXTURE_2D,_t,Et,rt.width,rt.height),G&&Q(w,rt,xt,zt)):e.texImage2D(n.TEXTURE_2D,0,Et,rt.width,rt.height,0,xt,zt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Et,Bt[0].width,Bt[0].height,rt.depth);for(let st=0,Mt=Bt.length;st<Mt;st++)if(vt=Bt[st],w.format!==mn)if(xt!==null)if(Ht){if(G)if(w.layerUpdates.size>0){const Rt=zc(vt.width,vt.height,w.format,w.type);for(const lt of w.layerUpdates){const Vt=vt.data.subarray(lt*Rt/vt.data.BYTES_PER_ELEMENT,(lt+1)*Rt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,lt,vt.width,vt.height,1,xt,Vt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,rt.depth,xt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Et,vt.width,vt.height,rt.depth,0,vt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,rt.depth,xt,zt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Et,vt.width,vt.height,rt.depth,0,xt,zt,vt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ht&&Kt&&e.texStorage2D(n.TEXTURE_2D,_t,Et,Bt[0].width,Bt[0].height);for(let st=0,Mt=Bt.length;st<Mt;st++)vt=Bt[st],w.format!==mn?xt!==null?Ht?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Et,vt.width,vt.height,0,vt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,vt.width,vt.height,xt,zt,vt.data):e.texImage2D(n.TEXTURE_2D,st,Et,vt.width,vt.height,0,xt,zt,vt.data)}else if(w.isDataArrayTexture)if(Ht){if(Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Et,rt.width,rt.height,rt.depth),G)if(w.layerUpdates.size>0){const st=zc(rt.width,rt.height,w.format,w.type);for(const Mt of w.layerUpdates){const Rt=rt.data.subarray(Mt*st/rt.data.BYTES_PER_ELEMENT,(Mt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,rt.width,rt.height,1,xt,zt,Rt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,zt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,rt.width,rt.height,rt.depth,0,xt,zt,rt.data);else if(w.isData3DTexture)Ht?(Kt&&e.texStorage3D(n.TEXTURE_3D,_t,Et,rt.width,rt.height,rt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,zt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Et,rt.width,rt.height,rt.depth,0,xt,zt,rt.data);else if(w.isFramebufferTexture){if(Kt)if(Ht)e.texStorage2D(n.TEXTURE_2D,_t,Et,rt.width,rt.height);else{let st=rt.width,Mt=rt.height;for(let Rt=0;Rt<_t;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Et,st,Mt,0,xt,zt,null),st>>=1,Mt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),h.add(w),st.onpaint=Mt=>{const Rt=Mt.changedElements;for(const lt of h)Rt.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,rt);else{const Rt=n.RGBA,lt=n.RGBA,Vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,lt,Vt,rt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Ht&&Kt){const st=Zt(Bt[0]);e.texStorage2D(n.TEXTURE_2D,_t,Et,st.width,st.height)}for(let st=0,Mt=Bt.length;st<Mt;st++)vt=Bt[st],Ht?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,xt,zt,vt):e.texImage2D(n.TEXTURE_2D,st,Et,xt,zt,vt);w.generateMipmaps=!1}else if(Ht){if(Kt){const st=Zt(rt);e.texStorage2D(n.TEXTURE_2D,_t,Et,st.width,st.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,zt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Et,xt,zt,rt);f(w)&&_(K),mt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function It(U,w,X){if(w.image.length!==6)return;const K=yt(U,w),et=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+X);const ht=i.get(et);if(et.version!==ht.__version||K===!0){e.activeTexture(n.TEXTURE0+X);const mt=ie.getPrimaries(ie.workingColorSpace),nt=w.colorSpace===oi?null:ie.getPrimaries(w.colorSpace),rt=w.colorSpace===oi||mt===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const xt=w.isCompressedTexture||w.image[0].isCompressedTexture,zt=w.image[0]&&w.image[0].isDataTexture,Et=[];for(let lt=0;lt<6;lt++)!xt&&!zt?Et[lt]=g(w.image[lt],!0,s.maxCubemapSize):Et[lt]=zt?w.image[lt].image:w.image[lt],Et[lt]=ne(w,Et[lt]);const vt=Et[0],Bt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),Kt=M(w.internalFormat,Bt,Ht,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,_t=ht.__version===void 0||K===!0,st=et.dataReady;let Mt=y(w,vt);dt(n.TEXTURE_CUBE_MAP,w);let Rt;if(xt){G&&_t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Kt,vt.width,vt.height);for(let lt=0;lt<6;lt++){Rt=Et[lt].mipmaps;for(let Vt=0;Vt<Rt.length;Vt++){const Ft=Rt[Vt];w.format!==mn?Bt!==null?G?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ft.width,Ft.height,Bt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,Kt,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ft.width,Ft.height,Bt,Ht,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,Kt,Ft.width,Ft.height,0,Bt,Ht,Ft.data)}}}else{if(Rt=w.mipmaps,G&&_t){Rt.length>0&&Mt++;const lt=Zt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Kt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(zt){G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Et[lt].width,Et[lt].height,Bt,Ht,Et[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Et[lt].width,Et[lt].height,0,Bt,Ht,Et[lt].data);for(let Vt=0;Vt<Rt.length;Vt++){const ge=Rt[Vt].image[lt].image;G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,ge.width,ge.height,Bt,Ht,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,Kt,ge.width,ge.height,0,Bt,Ht,ge.data)}}else{G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Ht,Et[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Bt,Ht,Et[lt]);for(let Vt=0;Vt<Rt.length;Vt++){const Ft=Rt[Vt];G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Bt,Ht,Ft.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,Kt,Bt,Ht,Ft.image[lt])}}}f(w)&&_(n.TEXTURE_CUBE_MAP),ht.__version=et.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function pt(U,w,X,K,et,ht){const mt=r.convert(X.format,X.colorSpace),nt=r.convert(X.type),rt=M(X.internalFormat,mt,nt,X.normalized,X.colorSpace),xt=i.get(w),zt=i.get(X);if(zt.__renderTarget=w,!xt.__hasExternalTextures){const Et=Math.max(1,w.width>>ht),vt=Math.max(1,w.height>>ht);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,ht,rt,Et,vt,w.depth,0,mt,nt,null):e.texImage2D(et,ht,rt,Et,vt,0,mt,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,et,zt.__webglTexture,0,Gt(w)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,et,zt.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(U,w,X){if(n.bindRenderbuffer(n.RENDERBUFFER,U),w.depthBuffer){const K=w.depthTexture,et=K&&K.isDepthTexture?K.type:null,ht=S(w.stencilBuffer,et),mt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(w),ht,w.width,w.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(w),ht,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ht,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,U)}else{const K=w.textures;for(let et=0;et<K.length;et++){const ht=K[et],mt=r.convert(ht.format,ht.colorSpace),nt=r.convert(ht.type),rt=M(ht.internalFormat,mt,nt,ht.normalized,ht.colorSpace);Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(w),rt,w.width,w.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(w),rt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,rt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(U,w,X){const K=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const et=i.get(w.depthTexture);if(et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K){if(et.__webglInit===void 0&&(et.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),et.__webglTexture===void 0){et.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),dt(n.TEXTURE_CUBE_MAP,w.depthTexture);const xt=r.convert(w.depthTexture.format),zt=r.convert(w.depthTexture.type);let Et;w.depthTexture.format===Yn?Et=n.DEPTH_COMPONENT24:w.depthTexture.format===Ri&&(Et=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Et,w.width,w.height,0,xt,zt,null)}}else k(w.depthTexture,0);const ht=et.__webglTexture,mt=Gt(w),nt=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,rt=w.depthTexture.format===Ri?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Yn)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,nt,ht,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,nt,ht,0);else if(w.depthTexture.format===Ri)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,nt,ht,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,nt,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(U){const w=i.get(U),X=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const K=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=K}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)qt(w.__webglFramebuffer[K],U,K);else{const K=U.texture.mipmaps;K&&K.length>0?qt(w.__webglFramebuffer[0],U,0):qt(w.__webglFramebuffer,U,0)}else if(X){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=n.createRenderbuffer(),Ct(w.__webglDepthbuffer[K],U,!1);else{const et=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,ht)}}else{const K=U.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ct(w.__webglDepthbuffer,U,!1);else{const et=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(U,w,X){const K=i.get(U);w!==void 0&&pt(K.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&tt(U)}function ct(U){const w=U.texture,X=i.get(U),K=i.get(w);U.addEventListener("dispose",v);const et=U.textures,ht=U.isWebGLCubeRenderTarget===!0,mt=et.length>1;if(mt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=w.version,o.memory.textures++),ht){X.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[nt]=[];for(let rt=0;rt<w.mipmaps.length;rt++)X.__webglFramebuffer[nt][rt]=n.createFramebuffer()}else X.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let nt=0;nt<w.mipmaps.length;nt++)X.__webglFramebuffer[nt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(mt)for(let nt=0,rt=et.length;nt<rt;nt++){const xt=i.get(et[nt]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Xt(U)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let nt=0;nt<et.length;nt++){const rt=et[nt];X.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[nt]);const xt=r.convert(rt.format,rt.colorSpace),zt=r.convert(rt.type),Et=M(rt.internalFormat,xt,zt,rt.normalized,rt.colorSpace,U.isXRRenderTarget===!0),vt=Gt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,Et,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,X.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(X.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),dt(n.TEXTURE_CUBE_MAP,w);for(let nt=0;nt<6;nt++)if(w.mipmaps&&w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)pt(X.__webglFramebuffer[nt][rt],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else pt(X.__webglFramebuffer[nt],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);f(w)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let nt=0,rt=et.length;nt<rt;nt++){const xt=et[nt],zt=i.get(xt);let Et=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,zt.__webglTexture),dt(Et,xt),pt(X.__webglFramebuffer,U,xt,n.COLOR_ATTACHMENT0+nt,Et,0),f(xt)&&_(Et)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(nt=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,K.__webglTexture),dt(nt,w),w.mipmaps&&w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)pt(X.__webglFramebuffer[rt],U,w,n.COLOR_ATTACHMENT0,nt,rt);else pt(X.__webglFramebuffer,U,w,n.COLOR_ATTACHMENT0,nt,0);f(w)&&_(nt),e.unbindTexture()}U.depthBuffer&&tt(U)}function H(U){const w=U.textures;for(let X=0,K=w.length;X<K;X++){const et=w[X];if(f(et)){const ht=A(U),mt=i.get(et).__webglTexture;e.bindTexture(ht,mt),_(ht),e.unbindTexture()}}}const j=[],At=[];function Nt(U){if(U.samples>0){if(Xt(U)===!1){const w=U.textures,X=U.width,K=U.height;let et=n.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(U),nt=w.length>1;if(nt)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const rt=U.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);const zt=i.get(w[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,X,K,0,0,X,K,et,n.NEAREST),l===!0&&(j.length=0,At.length=0,j.push(n.COLOR_ATTACHMENT0+xt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(j.push(ht),At.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,At)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);const zt=i.get(w[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const w=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Gt(U){return Math.min(s.maxSamples,U.samples)}function Xt(U){const w=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(U){const w=o.render.frame;d.get(U)!==w&&(d.set(U,w),U.update())}function ne(U,w){const X=U.colorSpace,K=U.format,et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||X!==Kr&&X!==oi&&(ie.getTransfer(X)===fe?(K!==mn||et!==en)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",X)),w}function Zt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Tx(n,t){function e(i,s=oi){let r;const o=ie.getTransfer(s);if(i===en)return n.UNSIGNED_BYTE;if(i===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nu)return n.BYTE;if(i===Fu)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===En)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===ku)return n.RGB;if(i===mn)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Ri)return n.DEPTH_STENCIL;if(i===io)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===Di)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===Br||i===kr||i===Vr||i===Gr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ba||i===Ea||i===wa||i===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Yr||i===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Aa||i===Ra)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pa)return r.COMPRESSED_R11_EAC;if(i===La)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Da||i===Ua||i===Na||i===Fa||i===Oa||i===za||i===Ba||i===ka||i===Va||i===Ga||i===Ha||i===Wa||i===Xa||i===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ua)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===za)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ka)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ha)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===Za||i===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ya)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ja||i===$a||i===Zr||i===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`;class Cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ju(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ze({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Px extends Fi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Cx,f={},_=e.getContextAttributes();let A=null,M=null;const S=[],y=[],E=new ft;let v=null,T=null;const I=new dn;I.viewport=new ye;const b=new dn;b.viewport=new ye;const C=[I,b],L=new Fd;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=S[J];return Q===void 0&&(Q=new wo,S[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=S[J];return Q===void 0&&(Q=new wo,S[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=S[J];return Q===void 0&&(Q=new wo,S[J]=Q),Q.getHandSpace()};function O(J){const Q=y.indexOf(J.inputSource);if(Q===-1)return;const ut=S[Q];ut!==void 0&&(ut.update(J.inputSource,J.frame,c||o),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let J=0;J<S.length;J++){const Q=y[J];Q!==null&&(y[J]=null,S[J].disconnect(Q))}P=null,D=null,g.reset();for(const J in f)delete f[J];if(t.setRenderTarget(A),p=null,u=null,h=null,s=null,M=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,It=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=_.stencil?Ri:Yn,It=_.stencil?qs:En);const Ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new xn(u.textureWidth,u.textureHeight,{format:mn,type:en,depthTexture:new hs(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ut={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new xn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(J){for(let Q=0;Q<J.removed.length;Q++){const ut=J.removed[Q],It=y.indexOf(ut);It>=0&&(y[It]=null,S[It].disconnect(ut))}for(let Q=0;Q<J.added.length;Q++){const ut=J.added[Q];let It=y.indexOf(ut);if(It===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=y.length){y.push(ut),It=Ct;break}else if(y[Ct]===null){y[Ct]=ut,It=Ct;break}if(It===-1)break}const pt=S[It];pt&&pt.connect(ut)}}const B=new F,q=new F;function W(J,Q,ut){B.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ut.matrixWorld);const It=B.distanceTo(q),pt=Q.projectionMatrix.elements,Ct=ut.projectionMatrix.elements,qt=pt[14]/(pt[10]-1),tt=pt[14]/(pt[10]+1),at=(pt[9]+1)/pt[5],ct=(pt[9]-1)/pt[5],H=(pt[8]-1)/pt[0],j=(Ct[8]+1)/Ct[0],At=qt*H,Nt=qt*j,Gt=It/(-H+j),Xt=Gt*-H;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xt),J.translateZ(Gt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pt[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const z=qt+Gt,ne=tt+Gt,Zt=At-Xt,U=Nt+(It-Xt),w=at*tt/ne*z,X=ct*tt/ne*z;J.projectionMatrix.makePerspective(Zt,U,w,X,z,ne),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function it(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,ut=J.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),L.near=b.near=I.near=Q,L.far=b.far=I.far=ut,(P!==L.near||D!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,D=L.far),L.layers.mask=J.layers.mask|6,I.layers.mask=L.layers.mask&-5,b.layers.mask=L.layers.mask&-3;const It=J.parent,pt=L.cameras;it(L,It);for(let Ct=0;Ct<pt.length;Ct++)it(pt[Ct],It);pt.length===2?W(L,I,b):L.projectionMatrix.copy(I.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),ot(J,L,It)};function ot(J,Q,ut){ut===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=tl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(J){return f[J]};let bt=null;function dt(J,Q){if(d=Q.getViewerPose(c||o),m=Q,d!==null){const ut=d.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let It=!1;ut.length!==L.cameras.length&&(L.cameras.length=0,It=!0);for(let tt=0;tt<ut.length;tt++){const at=ut[tt];let ct=null;if(p!==null)ct=p.getViewport(at);else{const j=h.getViewSubImage(u,at);ct=j.viewport,tt===0&&(t.setRenderTargetTextures(M,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(M))}let H=C[tt];H===void 0&&(H=new dn,H.layers.enable(tt),H.viewport=new ye,C[tt]=H),H.matrix.fromArray(at.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(at.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(ct.x,ct.y,ct.width,ct.height),tt===0&&(L.matrix.copy(H.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),It===!0&&L.cameras.push(H)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const tt=h.getDepthInformation(ut[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),h=i.getBinding();for(let tt=0;tt<ut.length;tt++){const at=ut[tt].camera;if(at){let ct=f[at];ct||(ct=new Ju,f[at]=ct);const H=h.getCameraImage(at);ct.sourceTexture=H}}}}for(let ut=0;ut<S.length;ut++){const It=y[ut],pt=S[ut];It!==null&&pt!==void 0&&pt.update(It,Q,c||o)}bt&&bt(J,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}const yt=new ch;yt.setAnimationLoop(dt),this.setAnimationLoop=function(J){bt=J},this.dispose=function(){}}}const Lx=new ae,gh=new Yt;gh.set(-1,0,0,0,1,0,0,0,1);function Ix(n,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,oh(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,_,A,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),h(g,f)):f.isMeshPhongMaterial?(r(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,_,A):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ye&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ye&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=t.get(f),A=_.envMap,M=_.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gh),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,A){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=A*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const _=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;i.uniformBlockBinding(M,y)}function c(M,S){let y=s[M.id];y===void 0&&(g(M),y=d(M),s[M.id]=y,M.addEventListener("dispose",_));const E=S.program;i.updateUBOMapping(M,E);const v=t.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function d(M){const S=h();M.__bindingPointIndex=S;const y=n.createBuffer(),E=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const S=s[M.id],y=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,T=y.length;v<T;v++){const I=y[v];if(Array.isArray(I))for(let b=0,C=I.length;b<C;b++)p(I[b],v,b,E);else p(I,v,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,S,y,E){if(x(M,S,y,E)===!0){const v=M.__offset,T=M.value;if(Array.isArray(T)){let I=0;for(let b=0;b<T.length;b++){const C=T[b],L=f(C);m(C,M.__data,I),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function m(M,S,y){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,y)}function x(M,S,y,E){const v=M.value,T=S+"_"+y;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{const I=E[T];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(M){const S=M.uniforms;let y=0;const E=16;for(let T=0,I=S.length;T<I;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let C=0,L=b.length;C<L;C++){const P=b[C],D=Array.isArray(P.value)?P.value:[P.value];for(let O=0,N=D.length;O<N;O++){const k=D[O],B=f(k),q=y%E,W=q%B.boundary,it=q+W;y+=W,it!==0&&E-it<B.storage&&(y+=E-it),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=B.storage}}}const v=y%E;return v>0&&(y+=E-v),M.__size=y,M.__cache={},this}function f(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",M),S}function _(M){const S=M.target;S.removeEventListener("dispose",_);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}const Ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function Nx(){return Cn===null&&(Cn=new so(Ux,16,16,Di,wn),Cn.name="DFG_LUT",Cn.minFilter=Oe,Cn.magFilter=Oe,Cn.wrapS=Wn,Cn.wrapT=Wn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class Fx{constructor(t={}){const{canvas:e=mf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=en}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const x=p,g=new Set([gl,ml,pl]),f=new Set([en,En,Xs,qs,fl,dl]),_=new Uint32Array(4),A=new Int32Array(4),M=new F;let S=null,y=null;const E=[],v=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let b=!1,C=null,L=null,P=null,D=null;this._outputColorSpace=rn;let O=0,N=0,k=null,B=-1,q=null;const W=new ye,it=new ye;let ot=null;const bt=new kt(0);let dt=0,yt=e.width,J=e.height,Q=1,ut=null,It=null;const pt=new ye(0,0,yt,J),Ct=new ye(0,0,yt,J);let qt=!1;const tt=new bl;let at=!1,ct=!1;const H=new ae,j=new F,At=new ye,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Xt(){return k===null?Q:1}let z=i;function ne(R,V){return e.getContext(R,V)}let Zt,U,w,X,K,et,ht,mt,nt,rt,xt,zt,Et,vt,Bt,Ht,Kt,G,_t,st,Mt,Rt,lt;try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",vn,!1),z===null){const V="webgl2";if(z=ne(V,R),z===null)throw ne(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(R){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),oe("WebGLRenderer: "+R.message),R}function Vt(){Zt=new N0(z),Zt.init(),Mt=new Tx(z,Zt),U=new w0(z,Zt,t,Mt),w=new Ex(z,Zt),U.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),L=z.createFramebuffer(),P=z.createFramebuffer(),D=z.createFramebuffer(),X=new z0(z),K=new ux,et=new wx(z,Zt,w,K,U,Mt,X),ht=new U0(I),mt=new kd(z),Rt=new b0(z,mt),nt=new F0(z,mt,X,Rt),rt=new k0(z,nt,mt,Rt,X),G=new B0(z,U,et),Bt=new T0(K),xt=new cx(I,ht,Zt,U,Rt,Bt),zt=new Ix(I,K),Et=new fx,vt=new vx(Zt),Kt=new y0(I,ht,w,rt,m,l),Ht=new bx(I,rt,U),lt=new Dx(z,X,U,w),_t=new E0(z,Zt,X),st=new O0(z,Zt,X),X.programs=xt.programs,I.capabilities=U,I.extensions=Zt,I.properties=K,I.renderLists=Et,I.shadowMap=Ht,I.state=w,I.info=X}x!==en&&(T=new G0(x,e.width,e.height,a,s,r));const Ft=new Px(I,z);this.xr=Ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Zt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Zt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(yt,J,!1))},this.getSize=function(R){return R.set(yt,J)},this.setSize=function(R,V,$=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=R,J=V,e.width=Math.floor(R*Q),e.height=Math.floor(V*Q),$===!0&&(e.style.width=R+"px",e.style.height=V+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(yt*Q,J*Q).floor()},this.setDrawingBufferSize=function(R,V,$){yt=R,J=V,Q=$,e.width=Math.floor(R*$),e.height=Math.floor(V*$),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(x===en){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(W)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,V,$,Y){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,V,$,Y),w.viewport(W.copy(pt).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(Ct)},this.setScissor=function(R,V,$,Y){R.isVector4?Ct.set(R.x,R.y,R.z,R.w):Ct.set(R,V,$,Y),w.scissor(it.copy(Ct).multiplyScalar(Q).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(R){w.setScissorTest(qt=R)},this.setOpaqueSort=function(R){ut=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,$=!0){let Y=0;if(R){let Z=!1;if(k!==null){const Tt=k.texture.format;Z=g.has(Tt)}if(Z){const Tt=k.texture.type,Lt=f.has(Tt),wt=Kt.getClearColor(),Dt=Kt.getClearAlpha(),Ot=wt.r,$t=wt.g,ee=wt.b;Lt?(_[0]=Ot,_[1]=$t,_[2]=ee,_[3]=Dt,z.clearBufferuiv(z.COLOR,0,_)):(A[0]=Ot,A[1]=$t,A[2]=ee,A[3]=Dt,z.clearBufferiv(z.COLOR,0,A))}else Y|=z.COLOR_BUFFER_BIT}V&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),C=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),Kt.dispose(),Et.dispose(),vt.dispose(),K.dispose(),ht.dispose(),rt.dispose(),Rt.dispose(),lt.dispose(),xt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Vl),Ft.removeEventListener("sessionend",Gl),gi.stop()};function ge(R){R.preventDefault(),ec("WebGLRenderer: Context Lost."),b=!0}function ue(){ec("WebGLRenderer: Context Restored."),b=!1;const R=X.autoReset,V=Ht.enabled,$=Ht.autoUpdate,Y=Ht.needsUpdate,Z=Ht.type;Vt(),X.autoReset=R,Ht.enabled=V,Ht.autoUpdate=$,Ht.needsUpdate=Y,Ht.type=Z}function vn(R){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Tn(R){const V=R.target;V.removeEventListener("dispose",Tn),Th(V)}function Th(R){Ah(R),K.remove(R)}function Ah(R){const V=K.get(R).programs;V!==void 0&&(V.forEach(function($){xt.releaseProgram($)}),R.isShaderMaterial&&xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,$,Y,Z,Tt){V===null&&(V=Nt);const Lt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,wt=Ph(R,V,$,Y,Z);w.setMaterial(Y,Lt);let Dt=$.index,Ot=1;if(Y.wireframe===!0){if(Dt=nt.getWireframeAttribute($),Dt===void 0)return;Ot=2}const $t=$.drawRange,ee=$.attributes.position;let Ut=$t.start*Ot,he=($t.start+$t.count)*Ot;Tt!==null&&(Ut=Math.max(Ut,Tt.start*Ot),he=Math.min(he,(Tt.start+Tt.count)*Ot)),Dt!==null?(Ut=Math.max(Ut,0),he=Math.min(he,Dt.count)):ee!=null&&(Ut=Math.max(Ut,0),he=Math.min(he,ee.count));const Ae=he-Ut;if(Ae<0||Ae===1/0)return;Rt.setup(Z,Y,wt,$,Dt);let Me,me=_t;if(Dt!==null&&(Me=mt.get(Dt),me=st,me.setIndex(Me)),Z.isMesh)Y.wireframe===!0?(w.setLineWidth(Y.wireframeLinewidth*Xt()),me.setMode(z.LINES)):me.setMode(z.TRIANGLES);else if(Z.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),w.setLineWidth(Ge*Xt()),Z.isLineSegments?me.setMode(z.LINES):Z.isLineLoop?me.setMode(z.LINE_LOOP):me.setMode(z.LINE_STRIP)}else Z.isPoints?me.setMode(z.POINTS):Z.isSprite&&me.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ge=Z._multiDrawStarts,Pt=Z._multiDrawCounts,Ke=Z._multiDrawCount,re=Dt?mt.get(Dt).bytesPerElement:1,an=K.get(Y).currentProgram.getUniforms();for(let An=0;An<Ke;An++)an.setValue(z,"_gl_DrawID",An),me.render(Ge[An]/re,Pt[An])}else if(Z.isInstancedMesh)me.renderInstances(Ut,Ae,Z.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pt=Math.min($.instanceCount,Ge);me.renderInstances(Ut,Ae,Pt)}else me.render(Ut,Ae)};function kl(R,V,$,Y){C!==null&&R.isNodeMaterial&&C.setObject(Y,R),at===!0&&Bt.setState(R,$,!1),R.transparent===!0&&R.side===on&&R.forceSinglePass===!1?(R.side=Ye,R.needsUpdate=!0,ir(R,V,Y),R.side=Li,R.needsUpdate=!0,ir(R,V,Y),R.side=on):ir(R,V,Y)}this.compile=function(R,V,$=null){$===null&&($=R),C!==null&&C.renderStart(R,V,$),y=vt.get($),y.init(V),v.push(y),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),R!==$&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights(),C!==null&&C.updateLights(y.state.lightsArray),ct=this.localClippingEnabled,at=Bt.init(this.clippingPlanes,ct),at===!0&&Bt.setGlobalState(this.clippingPlanes,V),C!==null&&Ht.render(y.state.shadowsArray,$,V);const Y=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const wt=Tt[Lt];kl(wt,$,V,Z),Y.add(wt)}else kl(Tt,$,V,Z),Y.add(Tt)}),y=v.pop(),C!==null&&C.renderEnd(),Y},this.compileAsync=function(R,V,$=null){const Y=this.compile(R,V,$);return new Promise(Z=>{function Tt(){if(Y.forEach(function(Lt){const Dt=K.get(Lt).currentProgram;(Dt===void 0||Dt.isReady())&&Y.delete(Lt)}),Y.size===0){Z(R);return}setTimeout(Tt,10)}Zt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ho=null;function Rh(R){ho&&ho(R)}function Vl(){gi.stop()}function Gl(){gi.start()}const gi=new ch;gi.setAnimationLoop(Rh),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){ho=R,Ft.setAnimationLoop(R),R===null?gi.stop():gi.start()},Ft.addEventListener("sessionstart",Vl),Ft.addEventListener("sessionend",Gl),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C!==null&&C.renderStart(R,V);const $=Ft.enabled===!0&&Ft.isPresenting===!0,Y=T!==null&&(k===null||$)&&T.begin(I,k);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(V),V=Ft.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,V,k),y=vt.get(R,v.length),y.init(V),y.state.textureUnits=et.getTextureUnits(),v.push(y),H.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),tt.setFromProjectionMatrix(H,In,V.reversedDepth),ct=this.localClippingEnabled,at=Bt.init(this.clippingPlanes,ct),S=Et.get(R,E.length),S.init(),E.push(S),Ft.enabled===!0&&Ft.isPresenting===!0){const Lt=I.xr.getDepthSensingMesh();Lt!==null&&fo(Lt,V,-1/0,I.sortObjects)}fo(R,V,0,I.sortObjects),S.finish(),C!==null&&C.updateLights(y.state.lightsArray),I.sortObjects===!0&&S.sort(ut,It),Gt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Gt&&Kt.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Bt.beginShadows();const Z=y.state.shadowsArray;if(Ht.render(Z,R,V),at===!0&&Bt.endShadows(),(Y&&T.hasRenderPass())===!1){const Lt=S.opaque,wt=S.transmissive;if(y.setupLights(),V.isArrayCamera){const Dt=V.cameras;if(wt.length>0)for(let Ot=0,$t=Dt.length;Ot<$t;Ot++){const ee=Dt[Ot];Wl(Lt,wt,R,ee)}Gt&&Kt.render(R);for(let Ot=0,$t=Dt.length;Ot<$t;Ot++){const ee=Dt[Ot];Hl(S,R,ee,ee.viewport)}}else wt.length>0&&Wl(Lt,wt,R,V),Gt&&Kt.render(R),Hl(S,R,V)}k!==null&&N===0&&(et.updateMultisampleRenderTarget(k),et.updateRenderTargetMipmap(k)),Y&&T.end(I),R.isScene===!0&&R.onAfterRender(I,R,V),Rt.resetDefaultState(),B=-1,q=null,v.pop(),v.length>0?(y=v[v.length-1],et.setTextureUnits(y.state.textureUnits),at===!0&&Bt.setGlobalState(I.clippingPlanes,y.state.camera)):y=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,C!==null&&C.renderEnd()};function fo(R,V,$,Y){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLightProbeGrid)y.pushLightProbeGrid(R);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(tt)){Y&&At.setFromMatrixPosition(R.matrixWorld).applyMatrix4(H);const Lt=rt.update(R),wt=R.material;wt.visible&&S.push(R,Lt,wt,$,At.z,null,V)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(tt))){const Lt=rt.update(R),wt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),At.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),At.copy(Lt.boundingSphere.center)),At.applyMatrix4(R.matrixWorld).applyMatrix4(H)),Array.isArray(wt)){const Dt=Lt.groups;for(let Ot=0,$t=Dt.length;Ot<$t;Ot++){const ee=Dt[Ot],Ut=wt[ee.materialIndex];Ut&&Ut.visible&&S.push(R,Lt,Ut,$,At.z,ee,V)}}else wt.visible&&S.push(R,Lt,wt,$,At.z,null,V)}}const Tt=R.children;for(let Lt=0,wt=Tt.length;Lt<wt;Lt++)fo(Tt[Lt],V,$,Y)}function Hl(R,V,$,Y){const{opaque:Z,transmissive:Tt,transparent:Lt}=R;y.setupLightsView($),at===!0&&Bt.setGlobalState(I.clippingPlanes,$),Y&&w.viewport(W.copy(Y)),Z.length>0&&nr(Z,V,$),Tt.length>0&&nr(Tt,V,$),Lt.length>0&&nr(Lt,V,$),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Wl(R,V,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[Y.id]===void 0){const Ut=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[Y.id]=new xn(1,1,{generateMipmaps:!0,type:Ut?wn:en,minFilter:Ai,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const Tt=y.state.transmissionRenderTarget[Y.id],Lt=Y.viewport||W;Tt.setSize(Lt.z*I.transmissionResolutionScale,Lt.w*I.transmissionResolutionScale);const wt=I.getRenderTarget(),Dt=I.getActiveCubeFace(),Ot=I.getActiveMipmapLevel();I.setRenderTarget(Tt),I.getClearColor(bt),dt=I.getClearAlpha(),dt<1&&I.setClearColor(16777215,.5),I.clear(),Gt&&Kt.render($);const $t=I.toneMapping;I.toneMapping=Un;const ee=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),y.setupLightsView(Y),at===!0&&Bt.setGlobalState(I.clippingPlanes,Y),nr(R,$,Y),et.updateMultisampleRenderTarget(Tt),et.updateRenderTargetMipmap(Tt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let he=0,Ae=V.length;he<Ae;he++){const Me=V[he],{object:me,geometry:Ge,material:Pt,group:Ke}=Me;if(Pt.side===on&&me.layers.test(Y.layers)){const re=Pt.side;Pt.side=Ye,Pt.needsUpdate=!0,Xl(me,$,Y,Ge,Pt,Ke),Pt.side=re,Pt.needsUpdate=!0,Ut=!0}}Ut===!0&&(et.updateMultisampleRenderTarget(Tt),et.updateRenderTargetMipmap(Tt))}I.setRenderTarget(wt,Dt,Ot),I.setClearColor(bt,dt),ee!==void 0&&(Y.viewport=ee),I.toneMapping=$t}function nr(R,V,$){const Y=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Tt=R.length;Z<Tt;Z++){const Lt=R[Z],{object:wt,geometry:Dt,group:Ot}=Lt;let $t=Lt.material;$t.allowOverride===!0&&Y!==null&&($t=Y),wt.layers.test($.layers)&&Xl(wt,V,$,Dt,$t,Ot)}}function Xl(R,V,$,Y,Z,Tt){C!==null&&Z.isNodeMaterial&&C.setObject(R,Z),R.onBeforeRender(I,V,$,Y,Z,Tt),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(I,V,$,Y,R,Tt),Z.transparent===!0&&Z.side===on&&Z.forceSinglePass===!1?(Z.side=Ye,Z.needsUpdate=!0,I.renderBufferDirect($,V,Y,Z,R,Tt),Z.side=Li,Z.needsUpdate=!0,I.renderBufferDirect($,V,Y,Z,R,Tt),Z.side=on):I.renderBufferDirect($,V,Y,Z,R,Tt),R.onAfterRender(I,V,$,Y,Z,Tt)}function ir(R,V,$){V.isScene!==!0&&(V=Nt);const Y=K.get(R),Z=y.state.lights,Tt=y.state.shadowsArray,Lt=Z.state.version,wt=xt.getParameters(R,Z.state,Tt,V,$,y.state.lightProbeGridArray),Dt=xt.getProgramCacheKey(wt);let Ot=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;const $t=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=ht.get(R.envMap||Y.environment,$t),Y.envMapRotation=Y.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ot===void 0&&(R.addEventListener("dispose",Tn),Ot=new Map,Y.programs=Ot);let ee=Ot.get(Dt);if(ee!==void 0){if(Y.currentProgram===ee&&Y.lightsStateVersion===Lt)return Yl(R,wt),ee}else wt.uniforms=xt.getUniforms(R),C!==null&&R.isNodeMaterial&&C.build(R,$,wt),R.onBeforeCompile(wt,I),ee=xt.acquireProgram(wt,Dt),Ot.set(Dt,ee),Y.uniforms=wt.uniforms;const Ut=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=Bt.uniform),Yl(R,wt),Y.needsLights=Ih(R),Y.lightsStateVersion=Lt,Y.needsLights&&(Ut.ambientLightColor.value=Z.state.ambient,Ut.lightProbe.value=Z.state.probe,Ut.sunLights.value=Z.state.sun,Ut.sunLightShadows.value=Z.state.sunShadow,Ut.directionalLights.value=Z.state.directional,Ut.directionalLightShadows.value=Z.state.directionalShadow,Ut.spotLights.value=Z.state.spot,Ut.spotLightShadows.value=Z.state.spotShadow,Ut.rectAreaLights.value=Z.state.rectArea,Ut.ltc_1.value=Z.state.rectAreaLTC1,Ut.ltc_2.value=Z.state.rectAreaLTC2,Ut.pointLights.value=Z.state.point,Ut.pointLightShadows.value=Z.state.pointShadow,Ut.hemisphereLights.value=Z.state.hemi,Ut.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ut.sunShadowCascade.value=Z.state.sunShadowCascade,Ut.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ut.spotLightMatrix.value=Z.state.spotLightMatrix,Ut.spotLightMap.value=Z.state.spotLightMap,Ut.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=y.state.lightProbeGridArray.length>0,Y.currentProgram=ee,Y.uniformsList=null,ee}function ql(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Hr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Yl(R,V){const $=K.get(R);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Ch(R,V){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;M.setFromMatrixPosition(V.matrixWorld);for(let $=0,Y=R.length;$<Y;$++){const Z=R[$];if(Z.texture!==null&&Z.boundingBox.containsPoint(M))return Z}return null}function Ph(R,V,$,Y,Z){V.isScene!==!0&&(V=Nt),et.resetTextureUnits();const Tt=V.fog,Lt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,wt=k===null?I.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ie.workingColorSpace,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ot=ht.get(Y.envMap||Lt,Dt),$t=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,Ae=!!$.morphAttributes.color;let Me=Un;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Me=I.toneMapping);const me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ge=me!==void 0?me.length:0,Pt=K.get(Y),Ke=y.state.lights;if(at===!0&&(ct===!0||R!==q)){const xe=R===q&&Y.id===B;Bt.setState(Y,R,xe)}let re=!1;Y.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ke.state.version||Pt.outputColorSpace!==wt||Z.isBatchedMesh&&Pt.batching===!1||!Z.isBatchedMesh&&Pt.batching===!0||Z.isBatchedMesh&&Pt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Pt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Pt.instancing===!1||!Z.isInstancedMesh&&Pt.instancing===!0||Z.isSkinnedMesh&&Pt.skinning===!1||!Z.isSkinnedMesh&&Pt.skinning===!0||Z.isInstancedMesh&&Pt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pt.instancingMorph===!1&&Z.morphTexture!==null||Pt.envMap!==Ot||Y.fog===!0&&Pt.fog!==Tt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Bt.numPlanes||Pt.numIntersection!==Bt.numIntersection)||Pt.vertexAlphas!==$t||Pt.vertexTangents!==ee||Pt.morphTargets!==Ut||Pt.morphNormals!==he||Pt.morphColors!==Ae||Pt.toneMapping!==Me||Pt.morphTargetsCount!==Ge||!!Pt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Pt.__version=Y.version);let an=Pt.currentProgram;re===!0&&(an=ir(Y,V,Z),C&&Y.isNodeMaterial&&C.onUpdateProgram(Y,an,Pt));let An=!1,Zn=!1,ki=!1;const de=an.getUniforms(),we=Pt.uniforms;if(w.useProgram(an.program)&&(An=!0,Zn=!0,ki=!0),Y.id!==B&&(B=Y.id,Zn=!0),Pt.needsLights){const xe=Ch(y.state.lightProbeGridArray,Z);Pt.lightProbeGrid!==xe&&(Pt.lightProbeGrid=xe,Zn=!0)}if(An||q!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),de.setValue(z,"projectionMatrix",R.projectionMatrix),de.setValue(z,"viewMatrix",R.matrixWorldInverse);const Jn=de.map.cameraPosition;Jn!==void 0&&Jn.setValue(z,j.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&de.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&de.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,Zn=!0,ki=!0)}if(Pt.needsLights&&(Ke.state.sunShadowMap.length>0&&de.setValue(z,"sunShadowMap",Ke.state.sunShadowMap,et),Ke.state.directionalShadowMap.length>0&&de.setValue(z,"directionalShadowMap",Ke.state.directionalShadowMap,et),Ke.state.spotShadowMap.length>0&&de.setValue(z,"spotShadowMap",Ke.state.spotShadowMap,et),Ke.state.pointShadowMap.length>0&&de.setValue(z,"pointShadowMap",Ke.state.pointShadowMap,et)),Z.isSkinnedMesh){de.setOptional(z,Z,"bindMatrix"),de.setOptional(z,Z,"bindMatrixInverse");const xe=Z.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),de.setValue(z,"boneTexture",xe.boneTexture,et))}Z.isBatchedMesh&&(de.setOptional(z,Z,"batchingTexture"),de.setValue(z,"batchingTexture",Z._matricesTexture,et),de.setOptional(z,Z,"batchingIdTexture"),de.setValue(z,"batchingIdTexture",Z._indirectTexture,et),de.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&de.setValue(z,"batchingColorTexture",Z._colorsTexture,et));const Kn=$.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&G.update(Z,$,an),(Zn||Pt.receiveShadow!==Z.receiveShadow)&&(Pt.receiveShadow=Z.receiveShadow,de.setValue(z,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(we.envMapIntensity.value=V.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Nx()),Zn){if(de.setValue(z,"toneMappingExposure",I.toneMappingExposure),Pt.needsLights&&Lh(we,ki),Tt&&Y.fog===!0&&zt.refreshFogUniforms(we,Tt),zt.refreshMaterialUniforms(we,Y,Q,J,y.state.transmissionRenderTarget[R.id]),Pt.needsLights&&Pt.lightProbeGrid){const xe=Pt.lightProbeGrid;we.probesSH.value=xe.texture,we.probesMin.value.copy(xe.boundingBox.min),we.probesMax.value.copy(xe.boundingBox.max),we.probesResolution.value.copy(xe.resolution)}Hr.upload(z,ql(Pt),we,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hr.upload(z,ql(Pt),we,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&de.setValue(z,"center",Z.center),de.setValue(z,"modelViewMatrix",Z.modelViewMatrix),de.setValue(z,"normalMatrix",Z.normalMatrix),de.setValue(z,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const xe=Y.uniformsGroups;for(let Jn=0,Vi=xe.length;Jn<Vi;Jn++){const Kl=xe[Jn];lt.update(Kl,an),lt.bind(Kl,an)}}return an}function Lh(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Ih(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,V,$){const Y=K.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(R.texture).__webglTexture=V,K.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const $=K.get(R);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,$=0){k=R,O=V,N=$;let Y=null,Z=!1,Tt=!1;if(R){const wt=K.get(R);if(wt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(z.FRAMEBUFFER,wt.__webglFramebuffer),W.copy(R.viewport),it.copy(R.scissor),ot=R.scissorTest,w.viewport(W),w.scissor(it),w.setScissorTest(ot),B=-1;return}else if(wt.__webglFramebuffer===void 0)et.setupRenderTarget(R);else if(wt.__hasExternalTextures)et.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&K.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(R)}}const Dt=R.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Tt=!0);const Ot=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ot[V])?Y=Ot[V][$]:Y=Ot[V],Z=!0):R.samples>0&&et.useMultisampledRTT(R)===!1?Y=K.get(R).__webglMultisampledFramebuffer:Array.isArray(Ot)?Y=Ot[$]:Y=Ot,W.copy(R.viewport),it.copy(R.scissor),ot=R.scissorTest}else W.copy(pt).multiplyScalar(Q).floor(),it.copy(Ct).multiplyScalar(Q).floor(),ot=qt;if($!==0&&(Y=L),w.bindFramebuffer(z.FRAMEBUFFER,Y)&&w.drawBuffers(R,Y),w.viewport(W),w.scissor(it),w.setScissorTest(ot),Z){const wt=K.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,wt.__webglTexture,$)}else if(Tt){const wt=V;for(let Dt=0;Dt<R.textures.length;Dt++){const Ot=K.get(R.textures[Dt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,$,wt)}}else if(R!==null&&$!==0){const wt=K.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wt.__webglTexture,$)}B=-1};function Zl(R){const V=K.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=U.textureFormatReadable(R.format),V.__typeReadable=U.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,$,Y,Z,Tt,Lt,wt=0){if(!(R&&R.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Dt=Dt[Lt]),Dt){w.bindFramebuffer(z.FRAMEBUFFER,Dt);try{const Ot=R.textures[wt],$t=Ot.format,ee=Ot.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+wt);const Ut=Zl(Ot);if(Ut.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Y&&$>=0&&$<=R.height-Z&&z.readPixels(V,$,Y,Z,Mt.convert($t),Mt.convert(ee),Tt)}finally{const Ot=k!==null?K.get(k).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,V,$,Y,Z,Tt,Lt,wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Dt=Dt[Lt]),Dt)if(V>=0&&V<=R.width-Y&&$>=0&&$<=R.height-Z){w.bindFramebuffer(z.FRAMEBUFFER,Dt);const Ot=R.textures[wt],$t=Ot.format,ee=Ot.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+wt);const Ut=Zl(Ot);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),z.readPixels(V,$,Y,Z,Mt.convert($t),Mt.convert(ee),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Ae=k!==null?K.get(k).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,Ae);const Me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await gf(z,Me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(he),z.deleteSync(Me),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,$=0){const Y=Math.pow(2,-$),Z=Math.floor(R.image.width*Y),Tt=Math.floor(R.image.height*Y),Lt=V!==null?V.x:0,wt=V!==null?V.y:0;et.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Lt,wt,Z,Tt),w.unbindTexture()},this.copyTextureToTexture=function(R,V,$=null,Y=null,Z=0,Tt=0){let Lt,wt,Dt,Ot,$t,ee,Ut,he,Ae;const Me=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if($!==null)Lt=$.max.x-$.min.x,wt=$.max.y-$.min.y,Dt=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,$t=$.min.y,ee=$.isBox3?$.min.z:0;else{const we=Math.pow(2,-Z);Lt=Math.floor(Me.width*we),wt=Math.floor(Me.height*we),R.isDataArrayTexture?Dt=Me.depth:R.isData3DTexture?Dt=Math.floor(Me.depth*we):Dt=1,Ot=0,$t=0,ee=0}Y!==null?(Ut=Y.x,he=Y.y,Ae=Y.z):(Ut=0,he=0,Ae=0);const me=Mt.convert(V.format),Ge=Mt.convert(V.type);let Pt;V.isData3DTexture?(et.setTexture3D(V,0),Pt=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(et.setTexture2DArray(V,0),Pt=z.TEXTURE_2D_ARRAY):(et.setTexture2D(V,0),Pt=z.TEXTURE_2D),w.activeTexture(z.TEXTURE0),w.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const Ke=w.getParameter(z.UNPACK_ROW_LENGTH),re=w.getParameter(z.UNPACK_IMAGE_HEIGHT),an=w.getParameter(z.UNPACK_SKIP_PIXELS),An=w.getParameter(z.UNPACK_SKIP_ROWS),Zn=w.getParameter(z.UNPACK_SKIP_IMAGES);w.pixelStorei(z.UNPACK_ROW_LENGTH,Me.width),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Me.height),w.pixelStorei(z.UNPACK_SKIP_PIXELS,Ot),w.pixelStorei(z.UNPACK_SKIP_ROWS,$t),w.pixelStorei(z.UNPACK_SKIP_IMAGES,ee);const ki=R.isDataArrayTexture||R.isData3DTexture,de=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const we=K.get(R),Kn=K.get(V),xe=K.get(we.__renderTarget),Jn=K.get(Kn.__renderTarget);w.bindFramebuffer(z.READ_FRAMEBUFFER,xe.__webglFramebuffer),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Vi=0;Vi<Dt;Vi++)ki&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(R).__webglTexture,Z,ee+Vi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(V).__webglTexture,Tt,Ae+Vi)),z.blitFramebuffer(Ot,$t,Lt,wt,Ut,he,Lt,wt,z.DEPTH_BUFFER_BIT,z.NEAREST);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||K.has(R)){const we=K.get(R),Kn=K.get(V);w.bindFramebuffer(z.READ_FRAMEBUFFER,P),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,D);for(let xe=0;xe<Dt;xe++)ki?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,we.__webglTexture,Z,ee+xe):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,we.__webglTexture,Z),de?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kn.__webglTexture,Tt,Ae+xe):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Kn.__webglTexture,Tt),Z!==0?z.blitFramebuffer(Ot,$t,Lt,wt,Ut,he,Lt,wt,z.COLOR_BUFFER_BIT,z.NEAREST):de?z.copyTexSubImage3D(Pt,Tt,Ut,he,Ae+xe,Ot,$t,Lt,wt):z.copyTexSubImage2D(Pt,Tt,Ut,he,Ot,$t,Lt,wt);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else de?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Pt,Tt,Ut,he,Ae,Lt,wt,Dt,me,Ge,Me.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Pt,Tt,Ut,he,Ae,Lt,wt,Dt,me,Me.data):z.texSubImage3D(Pt,Tt,Ut,he,Ae,Lt,wt,Dt,me,Ge,Me):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,Ut,he,Lt,wt,me,Ge,Me.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,Ut,he,Me.width,Me.height,me,Me.data):z.texSubImage2D(z.TEXTURE_2D,Tt,Ut,he,Lt,wt,me,Ge,Me);w.pixelStorei(z.UNPACK_ROW_LENGTH,Ke),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,re),w.pixelStorei(z.UNPACK_SKIP_PIXELS,an),w.pixelStorei(z.UNPACK_SKIP_ROWS,An),w.pixelStorei(z.UNPACK_SKIP_IMAGES,Zn),Tt===0&&V.generateMipmaps&&z.generateMipmap(Pt),w.unbindTexture()},this.initRenderTarget=function(R){K.get(R).__webglFramebuffer===void 0&&et.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?et.setTextureCube(R,0):R.isData3DTexture?et.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?et.setTexture2DArray(R,0):et.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){O=0,N=0,k=null,w.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}function Ox(){if(typeof matchMedia!="function"||typeof window>"u")return"high";const n=new URLSearchParams(location.search).get("gfx");if(n==="low"||n==="medium"||n==="high")return n;const t=matchMedia("(pointer: coarse)").matches,e=Math.min(innerWidth,innerHeight)<520,i=navigator.hardwareConcurrency||4,s=navigator.deviceMemory||4;return t&&(i<=4||s<=3)||e?"low":t?"medium":"high"}const zx={low:{msaa:0,halation:!1,pixelRatio:1.25,shadowMap:1024,terrainStep:2,dust:380,bushes:.45,far:2600},medium:{msaa:2,halation:!0,pixelRatio:1.5,shadowMap:1536,terrainStep:2,dust:700,bushes:.75,far:3e3},high:{msaa:4,halation:!0,pixelRatio:2,shadowMap:2048,terrainStep:2,dust:1100,bushes:1,far:3400}},au=Ox(),Ve={tier:au,...zx[au]};function Bx(n,t){return Ve.degraded?!1:(Ve.degraded=!0,Ve.pixelRatio=Math.min(Ve.pixelRatio,1),n.setPixelRatio(Ve.pixelRatio),n.shadowMap.enabled&&(n.shadowMap.enabled=!1,t.castShadow=!1),!0)}const xh="dustline.settings",lu={sound:!0,camera:0,light:"afternoon"};function kx(){try{return{...lu,...JSON.parse(localStorage.getItem(xh)||"{}")}}catch{return{...lu}}}const $o=kx(),ni={get:n=>$o[n],set(n,t){$o[n]=t;try{localStorage.setItem(xh,JSON.stringify($o))}catch{}}},Te=1250,Le=2.5,Jt=Math.round(Te*2/Le)+1,ai=860;function Dr(n,t){let e=Math.imul(n,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function vh(n,t){const e=Math.floor(n),i=Math.floor(t);let s=n-e,r=t-i;s=s*s*(3-2*s),r=r*r*(3-2*r);const o=Dr(e,i),a=Dr(e+1,i),l=Dr(e,i+1),c=Dr(e+1,i+1);return o+(a-o)*s+(l-o)*r+(o-a-l+c)*s*r}function mi(n,t,e=4){let i=0,s=.5,r=0;for(let o=0;o<e;o++)i+=vh(n,t)*s,r+=s,n=n*2.03+17.3,t=t*2.03-9.1,s*=.5;return i/r}const ms=(n,t,e)=>n<t?t:n>e?e:n,Ci=(n,t,e)=>{const i=ms((e-n)/(t-n),0,1);return i*i*(3-2*i)},$s=[{name:"spiral",x:-430,z:-330,r:50,h:58,skirt:22,k:3,wob:.03,kind:"mesa"},{name:"anvil",x:360,z:-560,r:80,h:46,skirt:40,k:3,kind:"mesa"},{name:"table",x:640,z:370,r:50,h:38,skirt:34,k:2.6,kind:"mesa"},{name:"tower",x:-700,z:170,r:26,h:74,skirt:48,k:3.4,kind:"mesa"},{name:"saddle",x:-230,z:780,r:60,h:34,skirt:40,k:2.4,kind:"mesa"},{name:"shelf",x:120,z:-760,r:90,h:30,skirt:50,k:2.4,kind:"mesa"},{name:"cone1",x:-330,z:-80,r:0,h:34,skirt:62,k:2,kind:"cone"},{name:"cone2",x:-580,z:-140,r:0,h:42,skirt:70,k:2,kind:"cone"},{name:"cone3",x:-250,z:-580,r:0,h:30,skirt:56,k:2,kind:"cone"},{name:"cone4",x:-720,z:-440,r:0,h:50,skirt:80,k:2,kind:"cone"},{name:"cone5",x:80,z:520,r:0,h:26,skirt:52,k:2,kind:"cone"},{name:"cone6",x:720,z:560,r:0,h:36,skirt:64,k:2,kind:"cone"},{name:"falls",x:-560,z:520,r:38,h:58,skirt:14,k:.8,wob:.04,kind:"mesa"},{name:"spire1",x:-625,z:445,r:0,h:46,skirt:17,k:1.3,wob:.05,kind:"cone"},{name:"spire2",x:-480,z:600,r:0,h:34,skirt:14,k:1.3,wob:.05,kind:"cone"}],Gn=(()=>{const n={x:-560,z:520,r:38,h:58},t=Math.hypot(n.x,n.z),e=[-n.x/t,-n.z/t],i={x:n.x+e[0]*(n.r+23),z:n.z+e[1]*(n.r+23),r:17,depth:1.5};return{mesa:n,dir:e,lip:{x:n.x+e[0]*(n.r*.97),z:n.z+e[1]*(n.r*.97),y:n.h},pool:i}})();function Vx(n,t,e){const i=t-n.x,s=e-n.z,r=Math.hypot(i,s),o=n.r+n.skirt;if(r>o*(1+(n.wob??.12)*1.7))return 0;const a=Math.atan2(s,i),l=n.wob??.12,c=1+l*Math.sin(a*3+n.x*.01)+l*.6*Math.sin(a*7+n.z*.02),d=r/c;if(d<=n.r)return n.h+(n.kind==="mesa"?.4*(vh(t*.05,e*.05)-.5):0);const h=ms((d-n.r)/n.skirt,0,1);return n.h*Math.pow(1-h,n.k)}function Gx(n){return 300+80*Math.sin(n/150)+30*Math.sin(n/63+1.3)}const Hx={depth:22,floor:22,wall:38};function Qs(n,t){const e=Gx(n),i=80/150*Math.cos(n/150)+30/63*Math.cos(n/63+1.3),s=Math.abs(t-e)/Math.sqrt(1+i*i),{depth:r,floor:o,wall:a}=Hx;if(s>=o+a)return 0;if(s<=o)return r;const l=(s-o)/a;return r*(1-Math.pow(l,2.2))}function Wx(n,t){const s=1-Ci(180,330,Math.hypot((n-470)*.9,t- -260));if(s<=0)return 0;const r=18*(mi(n*.006,t*.006,3)-.5)*2,o=(n*.8+t*.6+r)/58,a=o-Math.floor(o),l=a<.78?Ci(0,1,a/.78):1-Ci(0,1,(a-.78)/.22),c=4+5*mi(n*.004+3,t*.004,2);return l*c*s}function Xx(n,t){const e=1-Ci(120,260,Math.hypot(n+560,t-330));return e<=0?0:(Math.sin(n*.11+Math.sin(t*.05)*2)*.5+.5)*2.4*e}function qx(n,t){const e=Math.hypot(n,t),i=Math.atan2(t,n),s=ai+40*Math.sin(i*3+1)+25*Math.sin(i*7);if(e<=s)return 0;const r=(e-s)/250,o=Math.min(360,120*Math.pow(r,2.2)),a=26,l=o/a,c=l-Math.floor(l),d=(Math.floor(l)+Math.min(1,c*1.8))*a,h=Ci(1,1.25,r);return o*(1-h)+Math.max(d,o*.92)*h+10*mi(n*.008,t*.008,3)*Math.min(1,r*2)*h+3*mi(n*.01,t*.01,2)*Math.min(1,r*3)}function Yx(n,t){return 7*mi(n/260+11,t/260-4,4)+2.5*mi(n/70,t/70,3)-4}const _h=[{name:"park",x:0,z:0,r:150,blend:50},{name:"drum",x:250,z:120,r:52,blend:30}],Zx=[{name:"loop",closed:!0,width:14,points:[[140,-190],[380,-170],[600,-130],[730,0],[650,95],[520,140],[455,230],[430,335],[480,470],[400,600],[150,650],[-150,620],[-380,520],[-430,420],[-420,297],[-430,180],[-560,40],[-760,-80],[-640,-250],[-540,-420],[-380,-520],[-160,-430]],crests:[{x:500,z:-150,h:3.2,len:34},{x:700,z:70,h:2.6,len:26},{x:300,z:630,h:3,len:30},{x:-40,z:640,h:4,len:36},{x:-700,z:-40,h:2.6,len:22},{x:-735,z:-5,h:2.6,len:22},{x:-760,z:-75,h:2.6,len:22},{x:-260,z:-490,h:3.5,len:32}]},{name:"north spur",closed:!1,width:12,points:[[0,-60],[30,-130],[140,-190],[220,-190]],crests:[]},{name:"falls road",closed:!1,width:11,points:[[-392,505],[-430,488],[-470,476],[-494,472]],crests:[]},{name:"south spur",closed:!1,width:12,points:[[40,70],[110,160],[170,250],[200,350],[220,450],[250,560],[265,626]],crests:[{x:230,z:500,h:2.5,len:26}]}];function Kx(n,t,e){const i=n.length,s=t?i:i-1;let r=e*s,o=Math.floor(r);o>=s&&(o=s-1),r-=o;const a=x=>t?n[(x%i+i)%i]:n[Math.max(0,Math.min(i-1,x))],l=a(o-1),c=a(o),d=a(o+1),h=a(o+2),u=r*r,p=u*r,m=(x,g,f,_)=>.5*(2*g+(-x+f)*r+(2*x-5*g+4*f-_)*u+(-x+3*g-3*f+_)*p);return[m(l[0],c[0],d[0],h[0]),m(l[1],c[1],d[1],h[1])]}const tn=new Float32Array(Jt*Jt),js=new Float32Array(Jt*Jt),Jx=new Float32Array(Jt*Jt),Ll=[];function $x(n,t){let e=Yx(n,t)+Wx(n,t)+Xx(n,t);for(const i of $s){const s=Vx(i,n,t);s>0&&(e=Math.max(e,s+e*(1-s/i.h)*.6))}return e+qx(n,t)}function Qx(){for(let e=0;e<Jt;e++){const i=-Te+e*Le;for(let s=0;s<Jt;s++){const r=-Te+s*Le;tn[e*Jt+s]=$x(r,i)}}for(const e of _h){e.h??(e.h=ci(e.x,e.z));const i=e.r+e.blend;al(e.x,e.z,i,(s,r,o)=>{const a=1-Ci(e.r,i,Math.hypot(r-e.x,o-e.z));tn[s]+=(e.h-tn[s])*a})}{const e=Gn.pool;e.level=ci(e.x,e.z)-.5,al(e.x,e.z,e.r+6,(i,s,r)=>{const o=Math.hypot(s-e.x,r-e.z)/e.r;if(o>=1.3)return;const a=e.level+.5-e.depth*Math.max(0,1-o*o)-(o<1?.3:.3*(1.3-o)/.3);tn[i]=Math.min(tn[i],a)})}for(let e=0;e<Jt;e++){const i=-Te+e*Le;for(let s=0;s<Jt;s++){const r=-Te+s*Le,o=Qs(r,i);o>0&&(tn[e*Jt+s]-=o)}}js.fill(1e4);const n=new Float32Array(Jt*Jt),t=new Float32Array(Jt*Jt);for(const e of Zx)jx(e,n,t);for(let e=0;e<tn.length;e++)t[e]>0&&(tn[e]+=(n[e]-tn[e])*t[e])}function al(n,t,e,i){const s=Math.max(0,Math.floor((n-e+Te)/Le)),r=Math.min(Jt-1,Math.ceil((n+e+Te)/Le)),o=Math.max(0,Math.floor((t-e+Te)/Le)),a=Math.min(Jt-1,Math.ceil((t+e+Te)/Le));for(let l=o;l<=a;l++)for(let c=s;c<=r;c++)i(l*Jt+c,-Te+c*Le,-Te+l*Le)}function jx(n,t,e){const i=[];for(let m=0;m<=4e3;m++)i.push(Kx(n.points,n.closed,m/4e3));const r=[i[0]];let o=0;for(let m=1;m<i.length;m++)o+=Math.hypot(i[m][0]-i[m-1][0],i[m][1]-i[m-1][1]),o>=2&&(r.push(i[m]),o=0);const a=r.length,l=a*2,c=r.map(([m,x])=>ci(m,x)+Qs(m,x)),d=new Float32Array(a),h=30;for(let m=0;m<a;m++){let x=0,g=0;for(let f=-h;f<=h;f++){let _=m+f;if(n.closed)_=(_+a)%a;else if(_<0||_>=a)continue;x+=c[_],g++}d[m]=x/g}for(let m=0;m<a;m++)for(const x of n.crests){x.k??(x.k=tv(r,x.x,x.z));let g=Math.abs(m-x.k)*2;n.closed&&(g=Math.min(g,l-g)),g<x.len&&(d[m]+=x.h*.5*(1+Math.cos(Math.PI*g/x.len)))}const u=n.width/2,p=u+14;for(let m=0;m<a;m++){const[x,g]=r[m],f=r[Math.min(a-1,m+1)],_=r[Math.max(0,m-1)];let A=f[0]-_[0],M=f[1]-_[1];const S=Math.hypot(A,M)||1;A/=S,M/=S;const y=Qs(x,g)>.2;Ll.push({road:n.name,x,z:g,y:d[m],tx:A,tz:M,s:m*2,inWash:y}),!y&&al(x,g,p,(E,v,T)=>{const I=Math.hypot(v-x,T-g),b=1-Ci(u+1,p,I);b<=0||((b>e[E]||b===e[E]&&d[m]>t[E])&&(e[E]=b,t[E]=d[m]),I<js[E]&&(js[E]=I,Jx[E]=m*2))})}}function tv(n,t,e){let i=0,s=1/0;for(let r=0;r<n.length;r++){const o=(n[r][0]-t)**2+(n[r][1]-e)**2;o<s&&(s=o,i=r)}return i}function ci(n,t){const e=ms((n+Te)/Le,0,Jt-1.001),i=ms((t+Te)/Le,0,Jt-1.001),s=Math.floor(e),r=Math.floor(i),o=e-s,a=i-r,l=r*Jt+s,c=tn[l],d=tn[l+1],h=tn[l+Jt],u=tn[l+Jt+1];return c+(d-c)*o+(h-c)*a+(c-d-h+u)*o*a}Qx();const Pe=ci;function Pi(n,t,e={x:0,y:1,z:0}){const s=ci(n+1,t)-ci(n-1,t),r=ci(n,t+1)-ci(n,t-1),o=Math.hypot(s,2*1,r);return e.x=-s/o,e.y=2*1/o,e.z=-r/o,e}function Qo(n,t){const e=Math.round(ms((n+Te)/Le,0,Jt-1)),i=Math.round(ms((t+Te)/Le,0,Jt-1));return js[i*Jt+e]}function cu(n){return _h.find(t=>t.name===n)}function uu(n){return $s.find(t=>t.name===n)}const ui=(n,t)=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]],cs=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],fi=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],Il=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Ni=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Dl=n=>Math.hypot(n[0],n[1],n[2]),ke=n=>{const t=Dl(n)||1;return[n[0]/t,n[1]/t,n[2]/t]},Ce=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e,n[2]+t[2]*e];function ll(n,t,e){const i=Math.cos(e),s=Math.sin(e),r=Ni(t,n),o=Il(t,n)*(1-i);return[n[0]*i+r[0]*s+t[0]*o,n[1]*i+r[1]*s+t[1]*o,n[2]*i+r[2]*s+t[2]*o]}const ev={asphalt:0,rail:1,side:2,under:3,wood:4,kicker:5,boost:6,railtop:7,concrete:8,steel:9,rock:10};function nv(n,t=20,e=.45){const i=n.length,s=n.map((o,a)=>{const l=n[Math.max(0,a-2)],c=n[Math.min(i-1,a+2)],d=c.s-l.s||1;return Il(cs(c.t,l.t),o.r)/d*t}),r=[];for(let o=0;o<i;o++){let a=0,l=0;for(let h=-6;h<=6;h++){const u=o+h;u<0||u>=i||(a+=s[u],l++)}const c=Math.max(-e,Math.min(e,a/l)),d=n[o];r.push({...d,r:ll(d.r,d.t,c),n:ll(d.n,d.t,c)})}return r}function hn(n,t,e=2){const i=Math.max(2,Math.ceil(t/e)),s=[];for(let a=0;a<=i;a++)s.push(n(t*a/i));const r=[];let o=0;for(let a=0;a<=i;a++){const l=s[Math.max(0,a-1)].p,c=s[Math.min(i,a+1)].p,d=ke(cs(c,l)),h=ke(Ni(d,s[a].up)),u=Ni(h,d);a>0&&(o+=Dl(cs(s[a].p,s[a-1].p))),r.push({p:s[a].p,t:d,r:h,n:u,s:o,...s[a].extra||{}})}return r}function jo(n,t=null,e=2){const i=n.length-1,s=h=>n[Math.max(0,Math.min(n.length-1,h))],r=h=>{let u=h*i,p=Math.min(i-1,Math.floor(u));u-=p;const m=s(p-1),x=s(p),g=s(p+1),f=s(p+2),_=u*u,A=_*u,M=(y,E,v,T)=>.5*(2*E+(-y+v)*u+(2*y-5*E+4*v-T)*_+(-y+3*E-3*v+T)*A),S=t?t[p]+(t[Math.min(t.length-1,p+1)]-t[p])*(u*u*(3-2*u)):0;return{p:[M(m[0],x[0],g[0],f[0]),M(m[1],x[1],g[1],f[1]),M(m[2],x[2],g[2],f[2])],bank:S}},o=[0];let a=r(0).p;const l=i*60;for(let h=1;h<=l;h++){const u=r(h/l).p;o.push(o[h-1]+Dl(cs(u,a))),a=u}const c=o[l],d=h=>{let u=0,p=l;for(;p-u>1;){const x=u+p>>1;o[x]<h?u=x:p=x}const m=o[p]-o[u]||1;return(u+(h-o[u])/m)/l};return hn(h=>{const u=d(h),{p,bank:m}=r(u),x=r(Math.min(1,u+.001)).p,g=r(Math.max(0,u-.001)).p,f=ke(cs(x,g));let _=[0,1,0];return _=ke(cs(_,fi(f,Il(_,f)))),m&&(_=ll(_,f,m)),{p,up:_}},c,e)}function iv(n,t,e,i,s=()=>0,r=1.5){const o=ke(Ni(t,[0,1,0])),a=Math.ceil(e/.25),l=e/a,c=[];let d=0,h=0,u=0;c.push({s:0,f:h,u,a:d});for(let p=1;p<=a;p++){const m=p*l,x=i(m-l/2),g=d+x*l/2;h+=Math.cos(g)*l,u+=Math.sin(g)*l,d+=x*l,c.push({s:m,f:h,u,a:d})}return hn(p=>{const m=c[Math.min(a,Math.round(p/l))],x=ui(ui(ui(n,fi(t,m.f)),[0,m.u,0]),fi(o,s(p))),g=ui(fi(t,-Math.sin(m.a)),[0,Math.cos(m.a),0]);return{p:x,up:g}},e,r)}const sv=(n,t="asphalt")=>[{x:-n/2,y:0,paint:t},{x:n/2,y:0}],Ti=(n,t=.9,e=1.3,i="asphalt")=>[{x:-n/2-.35,y:-e,paint:"side",dropBelow:3.2},{x:-n/2-.35,y:t,paint:"railtop"},{x:-n/2,y:t,paint:"rail"},{x:-n/2,y:0,paint:i},{x:n/2,y:0,paint:"rail"},{x:n/2,y:t,paint:"railtop"},{x:n/2+.35,y:t,paint:"side"},{x:n/2+.35,y:-e,paint:"under",dropBelow:3.2},{x:-n/2-.35,y:-e,dropBelow:3.2}],Wr=(n,t="kicker")=>[{x:-n/2,y:0,drop:!0,paint:"side"},{x:-n/2,y:0,paint:t},{x:n/2,y:0,paint:"side"},{x:n/2,y:0,drop:!0}];function Be(n,t,e={}){const i=[],s=[],r=[],o=n.length,a=n.map(c=>t.map(d=>{let h=ui(ui(c.p,fi(c.r,d.x)),fi(c.n,d.y));return d.drop&&(h=[h[0],Math.min(h[1],Pe(h[0],h[2])-.6),h[2]]),d.dropBelow&&h[1]-Pe(h[0],h[2])<d.dropBelow&&(h=[h[0],Pe(h[0],h[2])-.6,h[2]]),h})),l=t.map((c,d)=>{let h=c.paint;for(let u=d;h==null&&u>=0;u--)h=t[u].paint;return h??"asphalt"});for(let c=0;c<t.length-1;c++){const d=ev[l[c]]??0,h=0,u=Math.hypot(t[c+1].x-t[c].x,t[c+1].y-t[c].y),p=e.collide!==!1&&!(e.skipCollide&&e.skipCollide.includes(l[c]));for(let m=0;m<o-1;m++){const x=a[m][c],g=a[m][c+1],f=a[m+1][c],_=a[m+1][c+1],A=n[m].s,M=n[m+1].s,S=[x,g,f,g,_,f],y=[[h,A],[u,A],[h,M],[u,A],[u,M],[h,M]];for(let E=0;E<6;E++)i.push(S[E][0],S[E][1],S[E][2]),s.push(d,y[E][0],y[E][1]),p&&r.push(S[E][0],S[E][1],S[E][2])}}return{positions:i,paints:s,collide:r,flags:e.flags||0,name:e.name||"",path:n.map(c=>c.p)}}function rv(n,t,e,i,s){const r=Be([n,t],e,s),o=Be([n,t],i,s);for(let a=0;a<r.positions.length/18;a++)for(const l of[2,4,5])for(let c=0;c<3;c++)r.positions[a*18+l*3+c]=o.positions[a*18+l*3+c];return r.collide=s.collide===!1?[]:r.positions.slice(),r}function Ur(n,t,{length:e=14,height:i=3,width:s=8,paint:r="kicker",foot:o=null,back:a=!0}={}){t=ke([t[0],0,t[2]]);const l=o??Pe(n[0],n[2]),c=a?Math.max(2,i*1.6):0,d=hn(h=>{let u;if(h<=e){const m=h/e;u=i*m*m}else u=i*(1-(h-e)/c)-.05;return{p:Ce([n[0],l+u,n[2]],t,h),up:[0,1,0]}},e+c,1);return Be(d,Wr(s,r),{name:"kicker"})}function ov(n,t,{radius:e=13,width:i=9,offset:s=11,ease:r=12}={}){t=ke([t[0],0,t[2]]);const o=1/e,a=(2*Math.PI-o*r)/o,l=6,c=l+r+a+r+l,d=m=>(m-=l,m<0?0:m<r?o*(m/r):(m-=r,m<a?o:(m-=a,m<r?o*(1-m/r):0))),h=m=>{const x=Math.min(1,Math.max(0,(m-l)/(c-2*l)));return s*x*x*(3-2*x)},u=Pe(n[0],n[2])+.02,p=iv([n[0],u,n[2]],t,c,d,h,1);return Be(p,Ti(i,1.1,.5),{name:"loop",flags:1})}function hu(n,t,e,i,{paint:s="wood",step:r=2,flags:o=0,name:a="lathe"}={}){const l=Math.max(...t.map(u=>u.r)),c=Math.max(8,Math.ceil((i-e)*l/r)),d=[];for(let u=0;u<=c;u++){const p=i-(i-e)*u/c,m=[Math.cos(p),0,Math.sin(p)];d.push({p:[...n],t:[Math.sin(p),0,-Math.cos(p)],r:m,n:[0,1,0],s:(i-p)*l})}const h=t.map((u,p)=>({x:u.r,y:u.y,paint:u.paint??(p<t.length-1?s:void 0)}));return Be(d,h,{name:a,flags:o})}function fu(n,t,e,i,s={}){t=ke([t[0],0,t[2]]);const r=ke(Ni(t,[0,1,0])),o=[],a=Math.max(1,Math.ceil(e/2));for(let d=0;d<=a;d++){const h=e*d/a;o.push({p:Ce(n,t,h),t,r,n:[0,1,0],s:h})}if(!s.taper)return Be(o,i,s);const l=[];for(let d=0;d<a;d++){const h=_=>{const A=Math.min(_,e-_)/s.taper,M=Math.max(0,Math.min(1,A));return M*M*(3-2*M)},u=o[d],p=o[d+1],m=h(u.s),x=h(p.s),g=i.map(_=>({..._,y:_.y<0?_.y:_.y*m-.04*(1-m)})),f=i.map(_=>({..._,y:_.y<0?_.y:_.y*x-.04*(1-x)}));l.push(rv(u,p,g,f,s))}const c={positions:[],paints:[],collide:[],flags:s.flags||0,name:s.name||"",path:o.map(d=>d.p)};for(const d of l)c.positions.push(...d.positions),c.paints.push(...d.paints),c.collide.push(...d.collide);return c}function ta(n,{run:t=3,top:e=1.6,angle:i=Math.PI*.47,paint:s="concrete",back:r=!0}={}){const o=[{x:-t,y:0,paint:s}],a=14;for(let c=0;c<=a;c++){const d=i*c/a;o.push({x:Math.sin(d)*n,y:n-Math.cos(d)*n,paint:s})}const l=o[o.length-1];return o[o.length-1].paint="railtop",o.push({x:l.x+e,y:l.y,paint:"kicker"}),r&&o.push({x:l.x+e+(l.y+.6)*1.5,y:-.6}),o}const Xe=8,du=(n,t)=>(n+4096)*8192+(t+4096),av=1;function lv(){let n=new Float32Array(36864),t=new Float32Array(3*4096),e=new Uint8Array(4096),i=0;const s=new Map,r=[],o=[],a=new Uint32Array(1<<20);let l=1,c=new Uint32Array(4096);function d(){const M=new Float32Array(n.length*2);M.set(n),n=M;const S=new Float32Array(t.length*2);S.set(t),t=S;const y=new Uint8Array(e.length*2);y.set(e),e=y;const E=new Uint32Array(c.length*2);E.set(c),c=E}function h(M,S,y){const E=du(M,S);let v=s.get(E);v||s.set(E,v=[]),v.push(y)}function u(M,S=0){for(let y=0;y+8<M.length;y+=9){i*9+9>n.length&&d();const E=M[y],v=M[y+1],T=M[y+2],I=M[y+3],b=M[y+4],C=M[y+5],L=M[y+6],P=M[y+7],D=M[y+8],O=I-E,N=b-v,k=C-T,B=L-E,q=P-v,W=D-T;let it=N*W-k*q,ot=k*B-O*W,bt=O*q-N*B;const dt=Math.hypot(it,ot,bt);if(dt<1e-9)continue;it/=dt,ot/=dt,bt/=dt;const yt=i++;n.set([E,v,T,I,b,C,L,P,D],yt*9),t[yt*3]=it,t[yt*3+1]=ot,t[yt*3+2]=bt,e[yt]=S;const J=Math.floor(Math.min(E,I,L)/Xe),Q=Math.floor(Math.max(E,I,L)/Xe),ut=Math.floor(Math.min(T,C,D)/Xe),It=Math.floor(Math.max(T,C,D)/Xe);for(let pt=J;pt<=Q;pt++)for(let Ct=ut;Ct<=It;Ct++)h(pt,Ct,yt)}}function p(M,S,y,E,v){const T=r.length;r.push({x:M,z:S,r:y,y0:E,y1:v});for(let I=Math.floor((M-y)/Xe);I<=Math.floor((M+y)/Xe);I++)for(let b=Math.floor((S-y)/Xe);b<=Math.floor((S+y)/Xe);b++)h(I,b,-1-T)}function m(M,S,y,E){const v=o.length;o.push({x:M,y:S,z:y,r:E});for(let T=Math.floor((M-E)/Xe);T<=Math.floor((M+E)/Xe);T++)for(let I=Math.floor((y-E)/Xe);I<=Math.floor((y+E)/Xe);I++)h(T,I,-1e5-v)}function x(M,S,y,E,v){l++,l>4294967280&&(c.fill(0),l=1);const T=Math.floor(M/Xe),I=Math.floor(y/Xe),b=Math.floor(S/Xe),C=Math.floor(E/Xe);for(let L=T;L<=I;L++)for(let P=b;P<=C;P++){const D=s.get(du(L,P));if(D)for(let O=0;O<D.length;O++){const N=D[O];if(N>=0){if(c[N]===l)continue;c[N]=l}else{const k=-N&1048575;if(a[k]===l)continue;a[k]=l}v(N)}}}const g={t:0,nx:0,ny:1,nz:0,flags:0,terrain:!1},f={x:0,y:1,z:0};function _(M,S,y,E,v,T,I){let b=I,C=!1;const L=Math.max(2,Math.ceil(I/.8));let P=0,D=S-Pe(M,y);if(D<=0)b=0,C=!0,Pi(M,y,f),g.nx=f.x,g.ny=f.y,g.nz=f.z,g.flags=0,g.terrain=!0;else for(let k=1;k<=L;k++){const B=I*k/L,q=M+E*B,W=y+T*B,it=S+v*B-Pe(q,W);if(it<=0){let ot=P,bt=B;for(let dt=0;dt<7;dt++){const yt=(ot+bt)*.5;S+v*yt-Pe(M+E*yt,y+T*yt)>0?ot=yt:bt=yt}b=(ot+bt)*.5,C=!0,Pi(M+E*b,y+T*b,f),g.nx=f.x,g.ny=f.y,g.nz=f.z,g.flags=0,g.terrain=!0;break}P=B,D=it}const O=M+E*I,N=y+T*I;return x(Math.min(M,O),Math.min(y,N),Math.max(M,O),Math.max(y,N),k=>{if(k<0)return;const B=k*9,q=n[B],W=n[B+1],it=n[B+2],ot=n[B+3]-q,bt=n[B+4]-W,dt=n[B+5]-it,yt=n[B+6]-q,J=n[B+7]-W,Q=n[B+8]-it,ut=v*Q-T*J,It=T*yt-E*Q,pt=E*J-v*yt,Ct=ot*ut+bt*It+dt*pt;if(Ct>-1e-9&&Ct<1e-9)return;const qt=1/Ct,tt=M-q,at=S-W,ct=y-it,H=(tt*ut+at*It+ct*pt)*qt;if(H<0||H>1)return;const j=at*dt-ct*bt,At=ct*ot-tt*dt,Nt=tt*bt-at*ot,Gt=(E*j+v*At+T*Nt)*qt;if(Gt<0||H+Gt>1)return;const Xt=(yt*j+J*At+Q*Nt)*qt;if(Xt<0||Xt>=b)return;b=Xt,C=!0;let z=t[k*3],ne=t[k*3+1],Zt=t[k*3+2];z*E+ne*v+Zt*T>0&&(z=-z,ne=-ne,Zt=-Zt),g.nx=z,g.ny=ne,g.nz=Zt,g.flags=e[k],g.terrain=!1}),C?(g.t=b,g):null}function A(M,S,y,E,v){let T=0;const I=(L,P,D,O,N,k)=>{T>=v.length&&v.push({});const B=v[T++];B.nx=L,B.ny=P,B.nz=D,B.depth=O,B.flags=N,B.kind=k},b=Pe(M,y);Pi(M,y,f);const C=(S-b)*f.y;return C<E&&I(f.x,f.y,f.z,E-C,0,"ground"),x(M-E,y-E,M+E,y+E,L=>{if(L>=0){const P=L*9;cv(M,S,y,n,P,Nr);let D=M-Nr[0],O=S-Nr[1],N=y-Nr[2];const k=D*D+O*O+N*N;if(k>=E*E)return;const B=Math.sqrt(k);B>1e-6?(D/=B,O/=B,N/=B):(D=t[L*3],O=t[L*3+1],N=t[L*3+2]),I(D,O,N,E-B,e[L],"piece")}else if(L>-1e5){const P=r[-1-L];if(S+E<P.y0||S-E>P.y1)return;let D=M-P.x,O=y-P.z;const N=Math.hypot(D,O);if(N>=P.r+E)return;if(S>P.y1&&N<P.r){I(0,1,0,P.y1+E-S,0,"post");return}N>1e-6?(D/=N,O/=N):(D=1,O=0),I(D,0,O,P.r+E-N,0,"post")}else{const P=o[-1e5-L];let D=M-P.x,O=S-P.y,N=y-P.z;const k=Math.hypot(D,O,N);if(k>=P.r+E||k<1e-6)return;I(D/k,O/k,N/k,P.r+E-k,0,"rock")}}),T}return{addTriangles:u,addCylinder:p,addSphere:m,raycast:_,sphereContacts:A,get triangleCount(){return i},cylinders:r,spheres:o}}const Nr=[0,0,0];function cv(n,t,e,i,s,r){const o=i[s],a=i[s+1],l=i[s+2],c=i[s+3],d=i[s+4],h=i[s+5],u=i[s+6],p=i[s+7],m=i[s+8],x=c-o,g=d-a,f=h-l,_=u-o,A=p-a,M=m-l,S=n-o,y=t-a,E=e-l,v=x*S+g*y+f*E,T=_*S+A*y+M*E;if(v<=0&&T<=0)return yi(r,o,a,l);const I=n-c,b=t-d,C=e-h,L=x*I+g*b+f*C,P=_*I+A*b+M*C;if(L>=0&&P<=L)return yi(r,c,d,h);const D=v*P-L*T;if(D<=0&&v>=0&&L<=0){const yt=v/(v-L);return yi(r,o+x*yt,a+g*yt,l+f*yt)}const O=n-u,N=t-p,k=e-m,B=x*O+g*N+f*k,q=_*O+A*N+M*k;if(q>=0&&B<=q)return yi(r,u,p,m);const W=B*T-v*q;if(W<=0&&T>=0&&q<=0){const yt=T/(T-q);return yi(r,o+_*yt,a+A*yt,l+M*yt)}const it=L*q-B*P;if(it<=0&&P-L>=0&&B-q>=0){const yt=(P-L)/(P-L+(B-q));return yi(r,c+(u-c)*yt,d+(p-d)*yt,h+(m-h)*yt)}const ot=1/(it+W+D),bt=W*ot,dt=D*ot;return yi(r,o+x*bt+_*dt,a+g*bt+A*dt,l+f*bt+M*dt)}function yi(n,t,e,i){return n[0]=t,n[1]=e,n[2]=i,n}const ze=Math.PI*2;function uv(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function hv(){const n=uv(53335),t=[],e=[],i=[],s=[],r=[],o=lv(),a={},l=[],c=[],d=(b,C,L,{drift:P=3,speed:D=.05,colour:O=l.length}={})=>l.push({x:b,y:C,z:L,drift:P,speed:D,phase:l.length*1.7,colour:O}),h=(b,C,L,P,D=6)=>{const O=ke([P[0],0,P[2]]);c.push({x:b,y:C,z:L,nx:O[0],nz:O[2],r:D})},u=(b,C)=>Pe(b,C),p=b=>[Math.sin(b*Math.PI/180),0,-Math.cos(b*Math.PI/180)];function m(b){return t.push(b),o.addTriangles(b.collide,b.flags),b}function x(b,C,L,{length:P=10,width:D=6,y:O=null}={}){L=ke([L[0],0,L[2]]);const N=O??u(b,C),k=hn(q=>{const W=Ce([b,0,C],L,q-P/2),it=O??u(W[0],W[2]);return{p:[W[0],it+.06,W[2]],up:[0,1,0]}},P,1),B=Be(k,sv(D,"boost"),{collide:!1,name:"boost"});t.push(B),e.push({x:b,y:N,z:C,dx:L[0],dz:L[2],len:P,width:D})}function g(b,C=18,L=0){let P=C/2;for(const D of b){if(D.s<P)continue;P=D.s+C;const O=Ce(D.p,D.n,-1.3),N=u(O[0],O[2]);if(O[1]-N<2.5)continue;const k=L?[-L/2+1,L/2-1]:[0];for(const B of k){const q=Ce(O,D.r,B),W=u(q[0],q[2]);if(Qo(q[0],q[2])<9)continue;const it=o.raycast(q[0],q[1]-.2,q[2],0,-1,0,Math.max(.5,q[1]-W));it&&!it.terrain||i.push({x:q[0],z:q[2],r:L?.7:1.1,y0:W-1,y1:q[1]})}}}const _=cu("park").h;r.push({key:"park",x:0,z:0,r:120,text:"The yard"});const A={x:-5.5,y:_+1.4,z:70,heading:0};x(-5.5,30,p(0),{length:12,width:7}),m(ov([-5.5,0,6],p(0),{radius:13,width:9,offset:11})),r.push({key:"loop",x:2,z:-25,r:22,text:"The loop",above:6}),x(-26,-2,p(-90),{length:8}),m(Ur([-40,0,-2],p(-90),{length:9,height:1.6,width:7})),m(Ur([-78,0,-2],p(-90),{length:13,height:3.2,width:8})),x(-100,-2,p(-90),{length:8}),m(Ur([-120,0,-2],p(-90),{length:20,height:5.5,width:10}));{const b=[70,0,40],C=p(180),L=22,P=4.5,D=8,O=hn(N=>{const k=Math.min(1,N/L),B=N>L?(N-L)/D:0,q=Ce([b[0],_+P*k*k*(1-B)-.04*B,b[2]],C,N),W=ke(Ni(C,[0,1,0])),it=ke(ui([0,1,0],fi(W,Math.tan(.55*k*k*(1-B)))));return{p:q,up:it}},L+D,1);m(Be(O,Wr(8),{name:"twist"})),x(70,22,C,{length:10}),r.push({key:"twist",x:70,z:55,r:14,text:"The twister"})}{const b=p(90),C=12,L=3,P=40,D=100,O=hn(N=>{let k;return N<C?k=L*Math.sin(N/C*Math.PI*.5)**2:N<C+14?k=L:k=L*Math.cos((N-C-14)/C*Math.PI*.5)**2,{p:Ce([P,_+k,D],b,N),up:[0,1,0]}},C*2+14,1);m(Be(O,Wr(10,"kicker"),{name:"table"}))}{const L=ta(6,{run:0}).map(N=>({...N,x:-5-N.x})),P=ta(6,{run:0}).map(N=>({...N,x:10/2+N.x})),O=[...L.slice().reverse().map((N,k,B)=>({...N,paint:B[k+1]?.paint??"concrete"})).slice(0,-1),{x:-10/2,y:0,paint:"concrete"},...P];m(fu([-120,_,80],p(90),70,O,{name:"halfpipe",taper:8})),r.push({key:"pipe",x:-85,z:80,r:14,text:"The half-pipe"})}{const C=ta(8,{run:2}).map(L=>({r:34+L.x,y:L.y,paint:L.paint}));m(hu([110,_,-40],C,-ze*.3,ze*.3,{paint:"concrete",name:"bowl"}))}{const L=[];for(let P=0;P<=10;P++){const D=P/10;L.push({x:-7+D*7,y:2.8*D*D-.05,paint:"concrete"})}L[L.length-1].paint="railtop",L.push({x:.3,y:2.8-.05,paint:"concrete"});for(let P=0;P<=10;P++){const D=1-P/10;L.push({x:.3+(1-D)*7,y:2.8*D*D-.05,paint:"concrete"})}m(fu([-40,_,-90],p(90),26,L,{name:"spine",taper:4}))}const M=[];for(let b=0;b<10;b++)M.push({type:"cone",x:-60+b*9,z:40+Math.sin(b)*4});for(let b=0;b<6;b++)M.push({type:"barrel",x:30+b%3*1.4,z:-60+Math.floor(b/3)*1.4});for(let b=0;b<9;b++)M.push({type:"crate",x:-10+b%3*1.3,z:110+Math.floor(b/3)*.01,stack:Math.floor(b/3)});{const b=cu("drum"),C=20,L=[{r:C,y:.03,paint:"wood"},...Array.from({length:12},(O,N)=>{const k=(N+1)/12*(Math.PI/2);return{r:C+Math.sin(k)*6,y:6-Math.cos(k)*6+.03,paint:"wood"}}),{r:C+6,y:13,paint:"wood"},...Array.from({length:6},(O,N)=>{const k=(N+1)/6*(Math.PI*.6);return{r:C+6-2.4*(1-Math.cos(k)),y:13+2.4*Math.sin(k),paint:N===5?"railtop":"wood"}}),{r:C+7.2,y:15.4,paint:"side"},{r:C+7.2+24,y:-.6}],P=Math.atan2(250-b.z,170-b.x),D=.45;m(hu([b.x,b.h,b.z],L,P+D/2,P+ze-D/2,{flags:1,name:"drum"})),x(b.x+Math.cos(P)*34,b.z+Math.sin(P)*34,[-Math.cos(P),0,-Math.sin(P)],{length:10}),r.push({key:"drum",x:b.x,z:b.z,r:22,text:"The drum — keep it pinned and ride the wall"}),d(b.x,b.h+31,b.z,{drift:4})}const S=b=>{const C=Ll.filter(D=>D.road===b),L=[];let P=null;return C.forEach((D,O)=>{D.inWash?(P||L.push(P={a:O,b:O}),P.b=O):P=null}),{samples:C,runs:L}},y=S("loop");{const b=y.runs.find(W=>y.samples[W.a].x>0),C=y.samples,L=13,P=22,D=6.5,O=(W,it,ot)=>{const bt=[];for(let Q=W;Q<=it;Q++)bt.push(C[Q]);const dt=bt.length-1,yt=ot?bt[0].y:bt[dt].y,J=hn(Q=>{const ut=Math.min(dt,Math.round(Q/(dt*2)*dt)),It=bt[ut],pt=ot?ut/dt:1-ut/dt;return{p:[It.x,yt+.03+D*pt*pt,It.z],up:[0,1,0]}},dt*2,2);return m(Be(J,Wr(12),{name:"kicker"}))};O(b.a-P,b.a+L,!0),O(b.b-L,b.b+P,!1);const N=C[b.a-1],k=C[b.b+1],B=[C[b.a-P+1].x-C[b.a-P-4].x,0,C[b.a-P+1].z-C[b.a-P-4].z],q=[C[b.b+P-1].x-C[b.b+P+4].x,0,C[b.b+P-1].z-C[b.b+P+4].z];x(C[b.a-P-10].x,C[b.a-P-10].z,B,{length:12,width:8}),x(C[b.b+P+10].x,C[b.b+P+10].z,q,{length:12,width:8});{const W=C[b.a+L],it=C[b.a+L-3],ot=C[b.b-L],bt=ke([W.x-it.x,0,W.z-it.z]),dt=((ot.x-W.x)*bt[0]+(ot.z-W.z)*bt[2])/2,yt=2*D/((P+L)*2),J=55,Q=dt*yt-12*dt*dt/(2*J*J);h(W.x+bt[0]*dt,N.y+D+Q+1,W.z+bt[2]*dt,bt,8)}r.push({key:"gap",x:(N.x+k.x)/2,z:(N.z+k.z)/2,r:Math.hypot(k.x-N.x,k.z-N.z)/2,text:"Over the canyon!",above:4})}{const b=y.runs.find(W=>y.samples[W.a].x<0),C=b.a-6,L=b.b+6,P=[];for(let W=C;W<=L;W+=4)P.push(y.samples[W]);P[P.length-1]!==y.samples[L]&&P.push(y.samples[L]);const D=y.samples[C].y,O=y.samples[L].y,N=jo(P.map(W=>[W.x,0,W.z]),null,2),k=N[N.length-1].s,B=hn(W=>{const it=N[Math.min(N.length-1,Math.round(W/k*(N.length-1)))],ot=W/k,bt=D+(O-D)*ot-13*Math.sin(Math.PI*ot)**2+.05;return{p:[it.p[0],bt,it.p[2]],up:[0,1,0]}},k,2);m(Be(B,Ti(13),{name:"dip"})),g(B,16,13);const q=B[Math.floor(B.length/2)].p;r.push({key:"dip",x:q[0],z:q[2],r:30,text:"Down the dip",above:6})}{const b=S("south spur"),C=b.runs[0],L=C.a-3,P=C.b+3,D=b.samples[L],O=b.samples[P],N=[];for(let W=L;W<=P;W+=5)N.push(b.samples[W]);N[N.length-1]!==O&&N.push(O);const k=jo(N.map(W=>[W.x,0,W.z]),null,2),B=k[k.length-1].s,q=hn(W=>{const it=k[Math.min(k.length-1,Math.round(W/B*(k.length-1)))],ot=W/B,bt=D.y+(O.y-D.y)*ot+5*Math.sin(Math.PI*ot)+.05;return{p:[it.p[0],bt,it.p[2]],up:[0,1,0]}},B,2);m(Be(q,Ti(12,1.3),{name:"bridge"})),g(q,20,12),r.push({key:"bridge",x:(D.x+O.x)/2,z:(D.z+O.z)/2,r:30,text:"The bridge",above:3})}{const b=uu("spiral"),C=104,L=84,P=(C+L)/2,D=Math.atan2(-.63,-.77),O=1.25,N=P*ze*O,k=.32*ze,B=b.h+.8,q=u(b.x+Math.cos(D)*C,b.z+Math.sin(D)*C)+.05,W=N+k*55,it=hn(Ct=>{let qt,tt,at;if(Ct<=N){const j=Ct/N;qt=D+j*O*ze,tt=C+(L-C)*j,at=q+(B-q)*(j*j*(3-2*j)*.3+j*.7)}else{const j=Math.min(1,(Ct-N)/(W-N));qt=D+O*ze+k*j,tt=L-(L-22)*(j*j*(3-2*j)),at=B}const ct=[b.x+Math.cos(qt)*tt,at,b.z+Math.sin(qt)*tt],H=[-Math.cos(qt),0,-Math.sin(qt)];return{p:ct,up:ke(ui([0,1,0],fi(H,.12)))}},W,2);m(Be(it,Ti(11),{name:"spiral"})),g(it,22,11);const ot=it[it.length-1].p,bt=it[it.length-4].p,dt=ke([ot[0]-bt[0],0,ot[2]-bt[2]]),yt=ot[0]-b.x,J=ot[2]-b.z,Q=yt*dt[0]+J*dt[2],ut=-Q+Math.sqrt(Q*Q-(yt*yt+J*J-(b.r*.94)**2)),It=Ce([ot[0],0,ot[2]],dt,ut-1),pt=Ce(It,dt,-24);x(...ea(Ce(pt,dt,-5)),dt,{length:8,y:b.h+.2}),m(Ur(pt,dt,{length:24,height:4.5,width:10,foot:b.h})),a.spiral={x:ot[0],z:ot[2],heading:Math.atan2(dt[0],-dt[2]),y:B};{const Ct=Math.atan2(9,24),qt=33,tt=1.05,at=Ce(It,dt,qt*Math.cos(Ct)*tt);d(at[0],b.h+4.5+qt*Math.sin(Ct)*tt-6*tt*tt+2.5,at[2],{drift:2.5,speed:.08})}r.push({key:"spiral",x:b.x,z:b.z,r:40,text:"The top of the spiral — now jump"}),r.push({key:"spiralFoot",x:it[3].p[0],z:it[3].p[2],r:18,text:"Up and round",above:6})}{const b=(it,ot,bt)=>[it,bt??u(it,ot)+.05,ot],C=[b(-150,-40),b(-185,-40,u(-185,-40)+2.5),[-235,11,-30],[-300,19,4],[-370,15,-2],[-440,24,-50],[-500,30,-130],[-500,26,-200],[-440,20,-215],[-360,27,-200],[-290,22,-175],[-230,20,-150],[-185,18,-135]],L=nv(jo(C,null,2),26,.5);let P=L.findIndex(it=>it.p[0]>-350&&it.p[2]>-205&&it.s>400);P<0&&(P=Math.floor(L.length*.7));const D=9,O=L.slice(0,P+1).map((it,ot,bt)=>{const dt=Math.max(0,1-(bt.length-1-ot)/8);return{...it,p:Ce(it.p,it.n,1.6*dt*dt)}}),N=L.slice(P+D);m(Be(O,Ti(10),{name:"skyway"})),m(Be(N,Ti(10),{name:"skyway"})),g(O,20,10),g(N,20,10);const k=N[N.length-1],B=k.t,q=hn(it=>{const ot=it/12;return{p:Ce(Ce(k.p,B,it),k.n,3*ot*ot),up:k.n}},12,1);m(Be(q,Ti(10),{name:"skyway"})),g(q,6,10);const W=O[Math.max(0,O.length-22)];x(W.p[0],W.p[2],W.t,{length:10,width:6,y:W.p[1]}),r.push({key:"skyway",x:-300,z:4,r:30,text:"The skyway",above:10});{const it=Ce(Ce(k.p,B,12),k.n,3),ot=Ce(it,B,30);d(ot[0],it[1]+6,ot[2],{drift:3})}r.push({key:"skygap",x:O[O.length-1].p[0],z:O[O.length-1].p[2],r:18,text:"Mind the gap!",above:10})}function E(b,C,L,P,D){const O=fv(b,C),N=ke(Ni([O.tx,0,O.tz],[0,1,0])),k=[O.x,0,O.z],B=[];for(let W=0;W<=8;W++){const it=-(W/8)*ze;B.push({x:Math.cos(it)*D,y:Math.sin(it)*D*.75,paint:"rock"})}const q=hn(W=>{const it=Math.PI*(W/100),ot=-Math.cos(it)*L,bt=Ce(k,N,ot),yt=Math.min(u(...ea(Ce(k,N,-L))),u(...ea(Ce(k,N,L))))-2+Math.sin(it)*P+(1-Math.sin(it))*0;return{p:[bt[0],yt,bt[2]],up:[O.tx,0,O.tz]}},100,2.5);m(Be(q,B,{name:"arch"})),r.push({key:`arch${b}`,x:O.x,z:O.z,r:L,text:"Under the arch",above:P})}E(-650,-15,16,19,4.5),E(560,-125,15,17,4),h(-171,_+13,-2,p(-90),6);for(const[b,C,L,P]of[[200,95,-320,40],[-220,120,360,50],[520,75,300,30],[-640,130,-220,45],[40,85,720,35],[690,150,-430,60],[-40,70,-880,20]])d(b,u(b,L)+C,L,{drift:P,speed:.02});const v={cactus:[],joshua:[],bush:[],rock:[],pole:[],turbine:[],sign:[],tree:[]};{const b=Gn.pool;r.push({key:"falls",x:b.x,z:b.z,r:b.r+30,text:"The falls"}),r.push({key:"pool",x:b.x,z:b.z,r:b.r*.7,text:"Splash!"});for(let C=0;C<16;C++){const L=C/16*ze+n()*.3;if(Math.cos(L)*-Gn.dir[0]+Math.sin(L)*-Gn.dir[1]>.55)continue;const D=b.r+4+n()*12,O=b.x+Math.cos(L)*D,N=b.z+Math.sin(L)*D;Qo(O,N)<9||v.tree.push({x:O,y:u(O,N),z:N,s:.8+n()*.5,yaw:n()*ze})}}{const b=uu("shelf");for(let C=0;C<5;C++){const L=b.x-70+C*35,P=b.z+Math.sin(C*1.7)*18,D=u(L,P);v.turbine.push({x:L,y:D,z:P,phase:C*1.3,yaw:.3}),i.push({x:L,z:P,r:1.4,y0:D-1,y1:D+46})}for(let C=0;C<9;C++){const L=-ze*.25+(C-4)*.12,P=ai+150,D=Math.cos(L)*P,O=Math.sin(L)*P;v.turbine.push({x:D,y:u(D,O),z:O,phase:C*.9,yaw:.3})}}{const b=y.samples;for(let C=0;C<b.length;C+=20){const L=b[C];if(L.inWash)continue;const P=[-L.tz,0,L.tx],D=L.x+P[0]*13,O=L.z+P[2]*13;Qs(D,O)>.1||v.pole.push({x:D,y:u(D,O),z:O,yaw:Math.atan2(L.tx,L.tz)})}}const T=(b,C,L)=>{if(Qo(b,C)<14+L||Math.hypot(b,C)<160+L||Math.hypot(b-250,C-120)<50+L||Math.hypot(b-Gn.pool.x,C-Gn.pool.z)<Gn.pool.r+8+L||Math.hypot(b,C)>ai-20||Pi(b,C).y<.9)return!1;for(const D of i)if(Math.hypot(D.x-b,D.z-C)<6+L)return!1;return!0};for(let b=0;b<2600;b++){const C=(n()*2-1)*(ai-10),L=(n()*2-1)*(ai-10),P=n(),D=mi(C*.004+40,L*.004,2);if(P<.18){if(D<.45||!T(C,L,4))continue;v.cactus.push({x:C,y:u(C,L),z:L,s:.8+n()*.7,yaw:n()*ze,arms:Math.floor(n()*3)})}else if(P<.26){if(D<.5||!T(C,L,4))continue;v.joshua.push({x:C,y:u(C,L),z:L,s:.8+n()*.5,yaw:n()*ze})}else if(P<.75){if(!T(C,L,1))continue;v.bush.push({x:C,y:u(C,L),z:L,s:.5+n()*.9,yaw:n()*ze})}else if(P<.86){if(!T(C,L,6))continue;const O=1.2+n()*n()*4.5,N=u(C,L)+O*.25;v.rock.push({x:C,y:N,z:L,r:O,yaw:n()*ze}),O>1.8&&s.push({x:C,y:N,z:L,r:O*.9})}}for(const b of $s)for(let C=0;C<7;C++){const L=n()*ze,P=b.r+b.skirt*(.85+n()*.5),D=b.x+Math.cos(L)*P,O=b.z+Math.sin(L)*P;if(!T(D,O,3))continue;const N=2+n()*4,k=u(D,O)+N*.2;v.rock.push({x:D,y:k,z:O,r:N,yaw:n()*ze}),s.push({x:D,y:k,z:O,r:N*.9})}for(const b of i)o.addCylinder(b.x,b.z,b.r,b.y0,b.y1);for(const b of s)o.addSphere(b.x,b.y,b.z,b.r);for(const b of $s)b.kind!=="mesa"||b.name==="spiral"||r.push({key:b.name,x:b.x,z:b.z,r:b.r*.8,text:`On top of the ${b.name} mesa`});r.push({key:"rim",ring:ai+70,text:"The canyon wall — it always sends you back"}),r.push({key:"dunes",x:470,z:-260,r:160,text:"The dunes"});const I=[{...Gn.pool}];return{pieces:t,boosts:e,pillars:i,rocks:s,props:v,loose:M,places:r,spawn:A,collision:o,jumps:a,balloons:l,hoops:c,water:I,falls:Gn,half:Te}}function ea(n){return[n[0],n[2]]}function fv(n,t){let e=null,i=1/0;for(const s of Ll){const r=(s.x-n)**2+(s.z-t)**2;r<i&&(i=r,e=s)}return e}const gt={gravity:12,mass:1100,inertia:[2300,2500,900],track:.98,front:1.4,rear:-1.3,mountHeight:-.22,wheelRadius:.46,restLength:.62,travel:.5,spring:17e3,damper:2100,rebound:1500,bumpStop:9e4,rollCentre:.55,grip:1.35,gripSlide:.55,lateralStiffness:.75,rolling:.012,engine:11.5,topSpeed:47,reverseSpeed:14,brake:18,boost:9,boostTopSpeed:62,boostPad:38,boostPadTop:58,steerMax:.62,steerFalloff:15,steerRate:5,stickSpeed:9,stickFull:18,airSpin:4.6,airResponse:7,landAssist:3.2,landAssistRange:14,body:[[0,.05,1.25,.72],[0,.05,-1.15,.72],[0,.35,.05,.78]],restitution:.15,wallKeep:.82},Xr=8.5;function Mh(n,t,e={x:0,y:0,z:0}){const i=n.phase+t*n.speed;return e.x=n.x+Math.cos(i)*n.drift,e.z=n.z+Math.sin(i)*n.drift,e.y=n.y+Math.sin(t*.35+n.phase*2)*1.6,e}function dv(n,t,e){const i=(t.x-n.x)*n.nx+(t.z-n.z)*n.nz,s=(e.x-n.x)*n.nx+(e.z-n.z)*n.nz;if(i>0==s>0||i===s)return!1;const r=i/(i-s),o=t.x+(e.x-t.x)*r-n.x,a=t.y+(e.y-t.y)*r-n.y,l=t.z+(e.z-t.z)*r-n.z;return Math.hypot(o,a,l)<n.r}const li=1/120;function pv(n){const t={pos:new F(n.x,n.y,n.z),vel:new F,quat:Sh(n.heading),angVel:new F,wheels:[],steer:0,speed:0,forwardSpeed:0,grounded:0,airTime:0,onStick:!1,boosting:!1,onPad:!1,slip:0,throttle:0,upsideDownTime:0,stuckTime:0,airSpinLocal:new F,inverted:!1,wallTime:0,events:[],contactKinds:new Set,accumulator:0,time:0,lastHit:0,glanceDir:new F,glanceTime:0};for(const[e,i,s]of[[gt.track,gt.front,!0],[-.98,gt.front,!0],[gt.track,gt.rear,!1],[-.98,gt.rear,!1]])t.wheels.push({local:new F(e,gt.mountHeight,i),front:s,left:e>0,length:gt.restLength,prevCompression:0,contact:!1,normal:new F(0,1,0),point:new F,spin:0,spinRate:0,slip:0,surface:"ground",load:0});return t}function Sh(n){return new Qe().setFromAxisAngle(new F(0,1,0),Math.PI-n)}function mv(n){const t=new F(0,0,1).applyQuaternion(n.quat);return Math.atan2(t.x,-t.z)}function Bs(n,t,e,i,s){n.pos.set(t,e,i),n.vel.set(0,0,0),n.angVel.set(0,0,0),n.quat.copy(Sh(s)),n.airTime=0,n.airSpinLocal.set(0,0,0)}const fn=new F,le=new F,qr=new F,cn=new F,Fr=new F,ve=new F,si=new F,pn=new F,ri=new F,na=new F,bi=new F,ia=new F,Cs=new F,to=new Qe,pu=new Qe,sa=new F,mu=[];function ks(n,t,e){return e.copy(t).applyQuaternion(n.quat)}function gv(n,t,e){to.copy(n.quat).invert(),ve.copy(t).applyQuaternion(to),ve.set(ve.x/gt.inertia[0],ve.y/gt.inertia[1],ve.z/gt.inertia[2]),ve.applyQuaternion(n.quat),n.angVel.addScaledVector(ve,e)}function xv(n,t,e,i){for(n.events.length=0,n.accumulator+=Math.min(i,.1);n.accumulator>=li;)n.accumulator-=li,vv(n,t,e,li)}function vv(n,t,e,i){n.input=t;const{collision:s,boosts:r}=e;n.time+=i,ks(n,ve.set(0,0,1),fn),ks(n,ve.set(0,1,0),le),ks(n,ve.set(1,0,0),qr);const o=n.vel.length();n.speed=o;const a=n.vel.dot(fn);n.forwardSpeed=a,cn.set(0,0,0),Fr.set(0,0,0);const l=gt.steerMax/(1+Math.max(0,o)/gt.steerFalloff),c=(t.steer||0)*l;n.steer+=(c-n.steer)*Math.min(1,gt.steerRate*i*2);const d=gt.restLength+gt.wheelRadius;let h=0,u=0;Cs.set(0,0,0);let p=0;const m=t.throttle||0,x=t.brake||0;let g=0,f=0;if(m>.05){const S=n.boosting?gt.boostTopSpeed:gt.topSpeed;a<-1?f=m:g=m*gt.engine*Math.max(0,1-Math.max(0,a)/S)**.7}x>.05&&(a>1?f=Math.max(f,x):g-=x*gt.engine*.8*Math.max(0,1-Math.max(0,-a)/gt.reverseSpeed)),n.throttle=Math.max(m,x);for(const S of n.wheels){ks(n,S.local,pn).add(n.pos);const y=s.raycast(pn.x,pn.y,pn.z,-le.x,-le.y,-le.z,d);if(!y){S.contact=!1,S.length+=(gt.restLength-S.length)*Math.min(1,14*i),S.prevCompression=0,S.load=0,S.slip=0,S.spinRate*=1-.4*i;continue}const E=S.normal.set(y.nx,y.ny,y.nz);S.contact=!0,S.surface=y.terrain?"ground":"track",h++,y.flags&av&&u++,Cs.add(E);const v=Math.max(0,d-y.t);S.length=Math.min(gt.restLength,Math.max(gt.restLength-gt.travel-.1,y.t-gt.wheelRadius)),S.point.copy(pn).addScaledVector(le,-y.t);const T=(v-S.prevCompression)/i;S.prevCompression=v;let I=gt.spring*v+(T>0?gt.damper:gt.rebound)*T;v>gt.travel&&(I+=gt.bumpStop*(v-gt.travel));const b=Math.max(0,E.dot(le));I=Math.max(0,I)*(.25+.75*b),S.load=I,cn.addScaledVector(le,I),ri.copy(pn).sub(n.pos),Fr.add(ve.crossVectors(ri,si.copy(le).multiplyScalar(I))),bi.copy(fn),S.front&&bi.applyAxisAngle(le,-n.steer),bi.addScaledVector(E,-bi.dot(E)).normalize(),ia.crossVectors(E,bi),ri.copy(S.point).sub(n.pos),na.crossVectors(n.angVel,ri).add(n.vel);const C=na.dot(bi),L=na.dot(ia),P=gt.mass/4,D=(!S.front&&t.handbrake?gt.gripSlide:gt.grip)*I;let O=-L*P*gt.lateralStiffness/i,N=g*P;if(f>0||t.handbrake&&!S.front){const q=t.handbrake&&!S.front?1:f,W=Math.abs(C)*P/i;N-=Math.sign(C)*Math.min(W,q*gt.brake*P)}N-=C*gt.rolling*P;const k=Math.hypot(O,N);let B=0;k>D&&k>0&&(B=1-D/k,O*=D/k,N*=D/k),S.slip=B+Math.min(1,Math.abs(L)/8)*.6,p+=S.slip,ve.copy(bi).multiplyScalar(N).addScaledVector(ia,O),cn.add(ve),ri.copy(S.point).lerp(n.pos,gt.rollCentre).sub(n.pos),Fr.add(si.crossVectors(ri,ve)),S.spinRate=C/gt.wheelRadius}for(const S of n.wheels)S.spin+=S.spinRate*i;n.slip=h?p/h:0,n.grounded=h,h&&Cs.normalize(),n.boosting=!!t.boost,n.boosting&&a<gt.boostTopSpeed&&cn.addScaledVector(fn,gt.boost*gt.mass),n.onPad=!1;for(const S of r){const y=n.pos.x-S.x,E=n.pos.z-S.z,v=y*S.dx+E*S.dz,T=-y*S.dz+E*S.dx;Math.abs(v)<S.len/2+1&&Math.abs(T)<S.width/2+1&&Math.abs(n.pos.y-S.y)<3&&(n.onPad=!0,n.vel.x*S.dx+n.vel.z*S.dz<gt.boostPadTop&&(cn.x+=S.dx*gt.boostPad*gt.mass,cn.z+=S.dz*gt.boostPad*gt.mass),n.wasOnPad||n.events.push({type:"pad"}))}n.wasOnPad=n.onPad,n.inWater=0;for(const S of e.water||[]){const y=n.pos.x-S.x,E=n.pos.z-S.z;if(y*y+E*E>S.r*S.r)continue;const v=S.level-(n.pos.y-.7);if(v<=0)continue;const T=Math.min(1.6,v);n.inWater=T,cn.addScaledVector(n.vel,-1100*3.5*T),cn.y+=gt.mass*gt.gravity*.3*T}if(n.inWater&&!n.wasInWater&&n.speed>4&&(n.events.push({type:"splash",strength:Math.min(1,n.speed/25)}),n.vel.multiplyScalar(.7)),n.wasInWater=n.inWater>0,sa.set(0,-12,0),n.onStick=u>=2,n.onStick){const S=Math.min(1,Math.max(0,(o-gt.stickSpeed)/(gt.stickFull-gt.stickSpeed)));ve.copy(Cs).multiplyScalar(-12),sa.lerp(ve,S)}cn.addScaledVector(sa,gt.mass),h>=2&&cn.addScaledVector(Cs,-.35*gt.mass*o*o*.01),cn.addScaledVector(n.vel,-.32*o),to.copy(n.quat).invert();const _=ve.copy(n.angVel).applyQuaternion(to);if(h===0){n.airTime+=i;const S=t.pitch||0,y=t.roll||0,E=t.steer||0,v=Math.min(1,gt.airResponse*i);if(Math.abs(S)>.05?_.x+=(S*gt.airSpin-_.x)*v:_.x*=1-.6*i,Math.abs(E)>.05?_.y+=(-E*gt.airSpin-_.y)*v:_.y*=1-.6*i,Math.abs(y)>.05?_.z+=(y*gt.airSpin-_.z)*v:_.z*=1-.6*i,(Math.abs(S)>.05||Math.abs(y)>.05)&&(n.airInputTime=n.time),n.time-(n.airInputTime||0)>.35&&le.y>.2&&o>6){if(n.vel.dot(fn)/o>.5){const I=n.vel.dot(le)/o,b=Math.max(-2,Math.min(2,-I*3));_.x+=(b-_.x)*Math.min(1,3*i)}_.z*=1-Math.min(1,2.5*i)}if(n.angVel.copy(_).applyQuaternion(n.quat),n.airSpinLocal.addScaledVector(_,i),Math.abs(S)<.05&&Math.abs(y)<.05&&n.airTime>.15){const T=s.raycast(n.pos.x,n.pos.y,n.pos.z,0,-1,0,gt.landAssistRange),I=n.vel.y;if(T&&I<2){const b=1-T.t/gt.landAssistRange;si.set(T.nx,T.ny,T.nz);const C=ve.crossVectors(le,si),L=n.angVel.dot(le),P=si.copy(le).multiplyScalar(L),D=C.multiplyScalar(gt.landAssist*(.4+b));n.angVel.lerp(D.add(P),Math.min(1,(2+6*b)*i))}}}else{n.airTime=0,gv(n,Fr,i);const S=n.angVel.dot(le),y=-(t.steer||0)*Math.min(Math.abs(a),20)*Math.sign(a||1)/9;Math.abs(t.steer||0)>.05&&!t.handbrake&&n.angVel.addScaledVector(le,(y-S)*Math.min(1,2.5*i)),t.handbrake&&Math.abs(t.steer||0)>.05&&n.angVel.addScaledVector(le,-(t.steer||0)*3.2*i),n.angVel.multiplyScalar(1-1.2*i)}if(n.glanceTime>0){n.glanceTime-=i;const S=ve.copy(n.glanceDir).addScaledVector(le,-n.glanceDir.dot(le));if(S.lengthSq()>1e-4){S.normalize();const y=Math.atan2(si.crossVectors(fn,S).dot(le),fn.dot(S)),E=Math.max(-7,Math.min(7,y*9));n.angVel.addScaledVector(le,E-n.angVel.dot(le))}}n.vel.addScaledVector(cn,i/gt.mass),n.pos.addScaledVector(n.vel,i);const A=n.angVel,M=A.length()*i;M>1e-9&&(pu.setFromAxisAngle(ve.copy(A).normalize(),M),n.quat.premultiply(pu).normalize()),_v(n,s),Mv(n,e.balloons),Sv(n,i)}const ra=new F,oa=new F,Or=new F;function _v(n,t){n.contactKinds.clear();let e=!1,i=!1,s=!1;ra.set(0,0,0),oa.set(0,0,0),Or.set(0,0,0);let r=0,o=0;for(const[h,u,p,m]of gt.body){ks(n,ve.set(h,u,p),pn).add(n.pos);const x=t.sphereContacts(pn.x,pn.y,pn.z,m,mu);for(let g=0;g<x;g++){const f=mu[g],_=si.set(f.nx,f.ny,f.nz),A=f.depth-ra.dot(_);if(A<=0)continue;s=!0,n.contactKinds.add(f.kind),n.pos.addScaledVector(_,A),ra.addScaledVector(_,A),oa.addScaledVector(_,f.depth),Or.addScaledVector(pn,f.depth).addScaledVector(_,-m*f.depth),r+=f.depth;const M=Math.abs(le.dot(_))<.5||f.kind==="post"||f.kind==="rock";if(!M&&f.kind==="piece"&&n.vel.dot(_)<-.5){const S=ve.copy(pn).addScaledVector(_,-m).sub(n.pos).dot(le),y=1-Math.abs(le.dot(_));S<-.15&&y>.08&&(o=Math.max(o,Math.min(.35,f.depth+.12)))}M&&(i=!0),le.dot(_)<-.2&&(e=!0)}}if(o>0&&!i){n.pos.addScaledVector(le,o);const h=n.vel.dot(le);h<0&&n.vel.addScaledVector(le,-h),s=!1}if(s&&r>0){const h=oa.normalize();Or.multiplyScalar(1/r);const u=n.vel.dot(h);if(u<0){const p=n.vel.length();if(n.vel.addScaledVector(h,-u*(1+gt.restitution)),ri.copy(Or).sub(n.pos),ve.crossVectors(ri,h).multiplyScalar(Math.min(4,-u*.12)),n.angVel.add(ve),i){const m=n.vel.dot(h),x=ve.copy(n.vel).addScaledVector(h,-m),g=x.length(),f=p*gt.wallKeep;g>.5?g<f&&x.multiplyScalar(f/g):p>4&&(x.copy(qr).addScaledVector(h,-qr.dot(h)),x.lengthSq()<1e-4&&x.set(-h.z,0,h.x),x.normalize().multiplyScalar(f*.6*(fn.dot(x)>=0?1:-1))),n.vel.copy(x).addScaledVector(h,Math.max(0,m)+.3);const _=si.copy(x).normalize(),A=n.forwardSpeed>=0?1:-1,M=Math.asin(Math.max(-1,Math.min(1,ve.crossVectors(fn,_).dot(le)*A)));Math.abs(M)>.05&&(n.glanceDir.copy(_).multiplyScalar(A),n.glanceTime=.4),n.time-n.lastHit>.4&&p>6&&(n.events.push({type:"bump",strength:Math.min(1,-u/20)}),n.lastHit=n.time)}else-u>7&&n.angVel.multiplyScalar(.6);!i&&-u>7&&n.time-n.lastHit>.3&&(n.events.push({type:"thud",strength:Math.min(1,-u/20)}),n.lastHit=n.time)}}const a=n.angVel.length();a>14&&n.angVel.multiplyScalar(14/a);const l=le.y;if(n.grounded<=1&&n.contactKinds.size&&(e||l<.35)?n.upsideDownTime+=li:n.upsideDownTime=Math.max(0,n.upsideDownTime-li*2),n.upsideDownTime>.7){n.upsideDownTime=0,n.vel.y+=6;const h=qr.y>0?1:-1;n.angVel.copy(fn).multiplyScalar(h*5.5),n.events.push({type:"flipback"})}const c=(n.input?.throttle||0)>.3||(n.input?.brake||0)>.3,d=n.contactKinds.has("piece")||n.contactKinds.has("post")||n.contactKinds.has("rock");if(n.speed<.6&&n.grounded<2?n.stuckTime+=li:n.speed<1.5&&c&&(d||n.grounded<3)?n.stuckTime+=li*2:n.stuckTime=Math.max(0,n.stuckTime-li),n.stuckTime>2.4){n.stuckTime=0;const h=Math.atan2(fn.x,-fn.z),u=t.raycast(n.pos.x,n.pos.y+14,n.pos.z,0,-1,0,30),p=u?n.pos.y+14-u.t+1.6:n.pos.y+2.5;Bs(n,n.pos.x,Math.max(p,n.pos.y+.5),n.pos.z,h),n.events.push({type:"unstuck"})}}const gu=Math.PI*2,Ei={x:0,y:0,z:0},ns=new F;function Mv(n,t){if(t)for(const e of t){Mh(e,n.time,Ei);for(const[i,s,r]of[[0,Xr+1.3,1.9],[-14,2.4,1.4]]){ns.set(n.pos.x-Ei.x,n.pos.y-(Ei.y+i),n.pos.z-Ei.z);const o=ns.length();if(o>=s||o<.001)continue;ns.multiplyScalar(1/o),n.pos.set(Ei.x,Ei.y+i,Ei.z).addScaledVector(ns,s);const a=n.vel.dot(ns);a<0&&(n.vel.addScaledVector(ns,-a*r),n.vel.y+=4,n.angVel.multiplyScalar(.5),e.hit=n.time,n.events.push({type:"balloon",strength:Math.min(1,-a/20)}))}}}function Sv(n,t){const e=le.y;n.grounded>=2?(n.wasAirborne&&n.airLanding>.45&&yv(n),n.wasAirborne=!1,n.airLanding=0,n.airSpinLocal.set(0,0,0),e<-.5&&(n.inverted=!0),n.inverted&&e>.85&&(n.inverted=!1,n.events.push({type:"trick",name:"loop"})),Math.abs(e)<.4&&n.speed>10?(n.wallTime+=t,n.wallTime>.9&&!n.wallNoted&&(n.wallNoted=!0,n.events.push({type:"trick",name:"wall ride"}))):(n.wallTime=Math.max(0,n.wallTime-t),n.wallTime===0&&(n.wallNoted=!1))):n.grounded===0&&(n.wasAirborne=!0,n.airLanding=(n.airLanding||0)+t,n.inverted=!1)}function yv(n){const t=n.airSpinLocal,e=n.airLanding,i=Math.round(Math.abs(t.x)/gu),s=Math.round(Math.abs(t.y)/Math.PI),r=Math.round(Math.abs(t.z)/gu),o=[];i&&o.push(`${xu(i)}${t.x>0?"front":"back"}flip`),r&&o.push(`${xu(r)}barrel roll`),s>=2&&o.push(`${s*180}`);let a=null;e>3.6?a="huge air":e>2.2&&(a="big air"),n.events.push({type:"landed",airTime:e,tricks:o,size:a,speed:n.speed})}function xu(n){return n===1?"":n===2?"double ":n===3?"triple ":`${n}× `}function yh(n){const t=new Uint8Array(n.map(i=>Math.round(i*255))),e=new so(t,n.length,1,io);return e.minFilter=Ie,e.magFilter=Ie,e.generateMipmaps=!1,e.needsUpdate=!0,e}const uo=yh([.32,.6,.88,1]),Ul=yh([.38,.52,.68,.84,.95,1]),aa=new Map;function Ee(n,t={}){const e=`${n}|${JSON.stringify(t)}`;if(aa.has(e))return aa.get(e);const i=new ps({color:n,gradientMap:t.soft?Ul:uo,side:t.side??0,transparent:!!t.transparent,opacity:t.opacity??1});return t.emissive!=null&&i.emissive.setHex(t.emissive),aa.set(e,i),i}const vu={blue:{body:3103177,accent:14169386,trim:15921128,flag:16742938},red:{body:13711916,accent:2043755,trim:15921128,flag:16765498},yellow:{body:15906077,accent:2237222,trim:15921128,flag:15220781},green:{body:3119704,accent:15853256,trim:1911330,flag:16734858},pink:{body:15755944,accent:16774392,trim:16777215,flag:8011007}};function un(n,t,e,i){const s=new F(...n),r=new F(...t),o=s.distanceTo(r),a=new Se(e,e,o,6),l=new jt(a,i);return l.position.copy(s).add(r).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new F(0,1,0),r.clone().sub(s).normalize()),l.castShadow=!0,l}function Pn(n,t,e,i,s,r=[0,0,0]){const o=new jt(new qe(n,t,e),i);return o.position.set(...s),o.rotation.set(...r),o.castShadow=!0,o}function bv(n){const t=new eh;t.moveTo(2.05,-.28),t.lineTo(1.25,-.42),t.lineTo(-1.55,-.42),t.lineTo(-1.75,-.12),t.lineTo(-1.6,.18),t.lineTo(-.7,.2),t.lineTo(-.55,.05),t.lineTo(.75,.05),t.lineTo(1.35,0),t.lineTo(2.1,-.16),t.closePath();const e=new Rl(t,{depth:1.36,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1});e.translate(0,0,-.68),e.rotateY(-Math.PI/2);const i=new jt(e,n);return i.castShadow=!0,i}function Ev(n){const t=new Dn,e=new jt(new Se(gt.wheelRadius,gt.wheelRadius,.4,16),Ee(2762276,{flat:!0}));e.rotation.z=Math.PI/2,e.castShadow=!0,t.add(e);for(let r=0;r<14;r++){const o=r/14*Math.PI*2,a=new jt(new qe(.42,.08,.13),Ee(2236189));a.position.set(0,Math.cos(o)*gt.wheelRadius,Math.sin(o)*gt.wheelRadius),a.rotation.x=-o,t.add(a)}const i=new jt(new Se(.26,.26,.42,10),Ee(n.trim));i.rotation.z=Math.PI/2,t.add(i);const s=new jt(new Se(.09,.09,.44,6),Ee(n.accent));return s.rotation.z=Math.PI/2,t.add(s),t}function wv(n){const t=new Dn,e=new jt(new Se(.015,.025,2.4,4),Ee(2236962));e.position.y=1.2,t.add(e);const i=new _e;i.setAttribute("position",new pe(new Float32Array([0,2.4,0,0,2.05,0,0,2.22,-.55]),3)),i.computeVertexNormals();const s=new jt(i,Ee(n,{side:on}));return t.add(s),t.userData.flag=i,t}function _u(n="blue"){const t=vu[n]||vu.blue,e=new Dn,i=new Dn;e.add(i);const s=Ee(t.body),r=Ee(t.accent),o=Ee(t.trim),a=Ee(2500138),l=Ee(2039843);i.add(bv(s));for(const _ of[-1,1])i.add(Pn(.22,.32,2.2,r,[_*.82,-.18,.05])),i.add(Pn(.05,.08,2,o,[_*.95,-.12,.05]));i.add(Pn(.7,.04,.5,o,[0,-.13,1.55],[-.2,0,0]));for(const _ of[-1,1]){const A=new jt(new hi(.11,8,6),Ee(16774344,{emissive:7035434}));A.position.set(_*.42,-.08,1.95),i.add(A)}const c=.045,d=[[.68,.05,.55],[.58,1.05,.25],[-.58,1.05,.25],[-.68,.05,.55]],h=[[.68,.2,-.65],[.6,1.08,-.55],[-.6,1.08,-.55],[-.68,.2,-.65]];for(const _ of[d,h])for(let A=0;A<_.length-1;A++)i.add(un(_[A],_[A+1],c,l));i.add(un(d[1],h[1],c,l)),i.add(un(d[2],h[2],c,l)),i.add(un(d[1],h[2],c*.8,l)),i.add(un([.58,1.05,.25],[.5,0,1.35],c,l)),i.add(un([-.58,1.05,.25],[-.5,0,1.35],c,l)),i.add(un([.6,1.08,-.55],[.55,.2,-1.5],c,l)),i.add(un([-.6,1.08,-.55],[-.55,.2,-1.5],c,l)),i.add(Pn(1.12,.05,.86,s,[0,1.09,-.15])),i.add(Pn(.5,.6,.12,a,[0,.25,-.32],[-.15,0,0])),i.add(Pn(.46,.34,.3,Ee(3951470),[0,.32,-.14]));const u=new jt(new hi(.19,10,8),o);u.position.set(0,.68,-.1),i.add(u),i.add(Pn(.26,.1,.08,a,[0,.69,.07])),i.add(un([.12,.42,.25],[0,.42,.5],.04,Ee(3951470))),i.add(un([-.12,.42,.25],[0,.42,.5],.04,Ee(3951470)));const p=new jt(new er(.15,.025,4,12),a);p.position.set(0,.48,.52),p.rotation.x=-.5,i.add(p),i.add(Pn(.8,.4,.7,Ee(5592924),[0,.32,-1.1]));for(const _ of[-1,1])i.add(un([_*.25,.35,-1.3],[_*.3,.45,-1.85],.07,Ee(9144192)));const m=[];for(const _ of[-1,1]){const A=new jt(new xs(.13,.9,8),Ee(16757575,{emissive:16738832}));A.rotation.x=-Math.PI/2,A.position.set(_*.31,.46,-2.25),A.visible=!1,i.add(A),m.push(A)}i.add(Pn(1.7,.05,.42,r,[0,1.15,-1.55],[.12,0,0]));for(const _ of[-1,1])i.add(Pn(.04,.3,.42,s,[_*.86,1.08,-1.55])),i.add(un([_*.35,.45,-1.35],[_*.35,1.12,-1.55],.03,l));const x=[];for(const _ of[-1,1]){const A=wv(t.flag);A.position.set(_*.62,1.05,-.62),i.add(A),x.push(A)}const g=[],f=[];for(const[_,A]of[[gt.track,gt.front],[-.98,gt.front],[gt.track,gt.rear],[-.98,gt.rear]]){const M=new Dn;M.position.set(_,gt.mountHeight-gt.restLength*.7,A);const S=Ev(t);M.add(S),e.add(M),g.push({pivot:M,spinner:S});const y=new jt(new Se(.06,.06,1,6),r);y.castShadow=!0,e.add(y),f.push({mesh:y,top:new F(_*.55,.15,A*.92)})}return e.userData={body:i,wheels:g,shocks:f,flags:x,flames:m},e}const Tv=new F(0,1,0),la=new F,zr=new F;function Av(n,t,e,i){n.position.copy(t.pos),n.quaternion.copy(t.quat);const{body:s,wheels:r,shocks:o,flags:a,flames:l}=n.userData,c=t.boosting||t.onPad;for(const p of l)p.visible=c,c&&p.scale.set(1,.7+Math.random()*.8,1);t.wheels.forEach((p,m)=>{const x=r[m],g=gt.mountHeight-p.length;x.pivot.position.y+=(g-x.pivot.position.y)*Math.min(1,e*30),x.pivot.rotation.y=p.front?-t.steer:0,x.spinner.rotation.x=p.spin;const f=o[m];zr.copy(x.pivot.position),zr.x*=.92,f.mesh.position.copy(f.top).add(zr).multiplyScalar(.5),la.copy(zr).sub(f.top),f.mesh.scale.set(1,la.length(),1),f.mesh.quaternion.setFromUnitVectors(Tv,la.normalize())});const d=t.wheels[0].length+t.wheels[2].length-t.wheels[1].length-t.wheels[3].length,h=t.wheels[0].length+t.wheels[1].length-t.wheels[2].length-t.wheels[3].length;s.rotation.z+=(-d*.12-s.rotation.z)*Math.min(1,e*10),s.rotation.x+=(h*.1-s.rotation.x)*Math.min(1,e*10);const u=Math.min(1.1,t.speed/30);a.forEach((p,m)=>{p.rotation.x=-u*.45+Math.sin(i*9+m)*.04*u,p.rotation.z=Math.sin(i*5.3+m*2)*.05;const x=p.userData.flag.attributes.position;x.setX(2,Math.sin(i*22+m)*.12*(.3+u)),x.setZ(2,-.55+Math.sin(i*15+m)*.04),x.needsUpdate=!0})}const Rv=["Chase","Far","Low"],Ps=[{dist:7.6,height:2.5,look:1},{dist:13,height:4.6,look:1.4},{dist:5.2,height:1.35,look:.9}];function Cv(n,{mode:t=0}={}){const e=new F,i=new F,s=new F(0,0,-1),r=new F(0,1,0),o=new F,a=new F,l=new F,c=new F;let d=n.fov,h=0,u=t%Ps.length,p=0;function m(x){l.set(0,0,1).applyQuaternion(x.quat),s.copy(l),r.set(0,1,0),e.copy(x.pos).addScaledVector(s,-Ps[u].dist).add(o.set(0,Ps[u].height,0)),i.copy(x.pos)}return{reset:m,get mode(){return u},cycle(){return u=(u+1)%Ps.length,u},kick(x){h=Math.min(1,h+x)},nudge(x){p=Math.max(-2.6,Math.min(2.6,p+x))},update(x,g,{boosting:f=!1,looking:_=!1}={}){const A=Ps[u];a.set(0,1,0).applyQuaternion(g.quat),l.set(0,0,1).applyQuaternion(g.quat);const M=g.speed,S=g.grounded>=2;M>3&&g.forwardSpeed>-1?c.copy(g.vel).normalize():c.copy(l),S&&c.lerp(l,M>3?.35:1).normalize();const y=S?5:1.2;s.lerp(c,1-Math.exp(-y*x)).normalize();const E=S&&(g.onStick||a.y<.7);E?o.copy(a):o.set(0,1,0),r.lerp(o,1-Math.exp(-(E?4:2.5)*x)).normalize();const v=o.copy(s).addScaledVector(r,-s.dot(r)*.6).normalize();p&&v.applyAxisAngle(r,p),_||(p*=1-Math.min(1,x*1.5));const T=A.dist+Math.min(4,M*.05);if(c.copy(g.pos).addScaledVector(v,-T).addScaledVector(r,A.height),e.lerp(c,1-Math.exp(-(S?10:6)*x)),r.y>.8){const b=Pe(e.x,e.z)+1.1;e.y<b&&(e.y=b)}if(i.copy(g.pos).addScaledVector(s,3).addScaledVector(r,A.look),h=Math.max(0,h-x*2.5),n.position.copy(e),h>0){const b=h*h*.35;n.position.x+=(Math.random()-.5)*b,n.position.y+=(Math.random()-.5)*b}n.up.copy(r),n.lookAt(i);const I=62+Math.min(14,M*.24)+(f?5:0);d+=(I-d)*(1-Math.exp(-3*x)),Math.abs(n.fov-d)>.01&&(n.fov=d,n.updateProjectionMatrix())},get lookAt(){return i}}}const Ls=(n,t,e)=>n<t?t:n>e?e:n;function Mu(n,t){try{n.setPointerCapture(t)}catch{}}function Pv({actions:n={},onFirstInput:t=()=>{}}={}){const e=new Set;let i=!1;const s={up:!1,down:!1};let r=!1,o=0;const a={steer:0,pitch:0,gas:!1,brake:!1,boost:!1,active:!1},l=()=>{i||(i=!0,t())},c={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyQ:"rollL",KeyE:"rollR",Space:"handbrake",ShiftLeft:"boost",ShiftRight:"boost"};addEventListener("keydown",y=>{if(y.target&&(y.target.tagName==="INPUT"||y.target.tagName==="TEXTAREA"))return;l(),o=0;const E=c[y.code];if(E){e.add(E),(y.code.startsWith("Arrow")||y.code==="Space")&&y.preventDefault();return}y.repeat||(y.code==="KeyR"?n.reset?.():y.code==="KeyC"?n.camera?.():y.code==="KeyM"?n.sound?.():y.code==="KeyH"?n.hud?.():y.code==="KeyL"&&n.light?.())}),addEventListener("keyup",y=>{const E=c[y.code];E&&e.delete(E)}),addEventListener("blur",()=>e.clear());const d=y=>y.preventDefault();document.addEventListener("gesturestart",d,{passive:!1}),document.addEventListener("gesturechange",d,{passive:!1}),document.addEventListener("gestureend",d,{passive:!1}),document.addEventListener("touchmove",y=>{y.touches.length>1&&y.preventDefault()},{passive:!1});let h=0;document.addEventListener("touchend",y=>{const E=performance.now();E-h<320&&!y.target.closest?.("button")&&y.preventDefault(),h=E},{passive:!1}),document.addEventListener("dblclick",d,{passive:!1});const u=document.querySelector("#steerPad"),p=document.querySelector("#steerKnob"),m=document.querySelector("#steerBase");let x=null,g=0,f=0;const _=62;if(u){u.addEventListener("pointerdown",v=>{l(),x=v.pointerId,Mu(u,v.pointerId),g=v.clientX,f=v.clientY,a.active=!0,m&&(m.style.left=`${g}px`,m.style.top=`${f}px`,m.classList.add("on")),v.preventDefault()});const y=v=>{if(v.pointerId!==x)return;const T=Ls((v.clientX-g)/_,-1,1),I=Ls((v.clientY-f)/_,-1,1);a.steer=T,a.pitch=-I,p&&(p.style.transform=`translate(${T*_*.7}px, ${I*_*.7}px)`)},E=v=>{v.pointerId===x&&(x=null,a.steer=0,a.pitch=0,p&&(p.style.transform=""),m?.classList.remove("on"))};u.addEventListener("pointermove",y),u.addEventListener("pointerup",E),u.addEventListener("pointercancel",E)}const A=(y,E)=>{const v=document.querySelector(y);if(!v)return;const T=new Set;v.addEventListener("pointerdown",b=>{l(),T.add(b.pointerId),Mu(v,b.pointerId),a[E]=!0,a.active=!0,v.classList.add("down"),b.preventDefault()});const I=b=>{T.delete(b.pointerId),T.size||(a[E]=!1,v.classList.remove("down"))};v.addEventListener("pointerup",I),v.addEventListener("pointercancel",I),v.addEventListener("contextmenu",b=>b.preventDefault())};A("#gasBtn","gas"),A("#brakeBtn","brake"),A("#boostBtn","boost");const M=[];function S(){const y=navigator.getGamepads?navigator.getGamepads():[];for(const E of y){if(!E||!E.connected)continue;const v=C=>E.buttons[C]?.value??0,T=C=>{const L=v(C)>.5,P=M[C];return M[C]=L,L&&!P};T(3)&&n.camera?.(),(T(9)||T(8))&&n.reset?.();const I=C=>Math.abs(C)<.12?0:C,b={steer:I(E.axes[0]||0),pitch:-I(E.axes[1]||0),throttle:v(7),brake:v(6),boost:v(0)>.5,handbrake:v(1)>.5,roll:v(5)-v(4)};return(b.throttle||b.brake||b.steer||b.boost)&&(l(),o=0),b}return null}return{get lastActivity(){return o},get touchActive(){return a.active},sample(y,E){o+=y,E&&!r&&(s.up=e.has("up"),s.down=e.has("down")),r=E,e.has("up")||(s.up=!1),e.has("down")||(s.down=!1);const v=(e.has("right")?1:0)-(e.has("left")?1:0),T=(e.has("up")&&!s.up?1:0)-(e.has("down")&&!s.down?1:0),I=(e.has("rollR")?1:0)-(e.has("rollL")?1:0),b=S(),C=Ls(v+a.steer+(b?.steer||0),-1,1);return(a.steer||a.gas||a.brake)&&(o=0),{throttle:Math.max(e.has("up")?1:0,a.gas?1:0,b?.throttle||0),brake:Math.max(e.has("down")?1:0,a.brake?1:0,b?.brake||0),steer:C,boost:e.has("boost")||a.boost||!!b?.boost,handbrake:e.has("handbrake")||!!b?.handbrake,pitch:Ls(T+(a.pitch||0)+(b?.pitch||0),-1,1),roll:Ls(I+(b?.roll||0),-1,1),touchBrake:a.brake}}}}const Lv=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Iv=`
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
`;function Dv(n){const t=new Ze({side:Ye,depthWrite:!1,fog:!1,vertexShader:Lv,fragmentShader:Iv,uniforms:{topColor:{value:new kt(3111119)},horizonColor:{value:new kt(16176814)},glowColor:{value:new kt(16751178)},cloudColor:{value:new kt(16773590)},sunDir:{value:new F(-.5,.42,.62)},glowStrength:{value:.5},time:{value:0},night:{value:0}}}),e=new jt(new hi(4e3,32,20),t);return e.frustumCulled=!1,e.renderOrder=-1,n.add(e),{mesh:e,uniforms:t.uniforms,follow(i){e.position.copy(i)}}}const bh=`
  float dlHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float dlNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(dlHash(i), dlHash(i + vec2(1, 0)), f.x), mix(dlHash(i + vec2(0, 1)), dlHash(i + vec2(1, 1)), f.x), f.y);
  }
  float dlFbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) { v += dlNoise(p) * a; p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }
  vec3 srgb(vec3 c) { return pow(c, vec3(2.2)); }
  /* The cliffs' stripes, shared by the ground and natural rock pieces. */
  vec3 strata(vec3 w) {
    // Bands a few metres tall low down, broad ones up the canyon wall.
    float scale = mix(0.2, 0.075, smoothstep(40.0, 140.0, w.y));
    float band = w.y * scale + dlNoise(w.xz * 0.02) * 1.6 + dlNoise(w.xz * 0.09) * 0.25;
    float k = mod(floor(band), 5.0);
    vec3 c = k < 1.0 ? vec3(0.70, 0.29, 0.19)
      : k < 2.0 ? vec3(0.84, 0.48, 0.30)
      : k < 3.0 ? vec3(0.92, 0.72, 0.53)
      : k < 4.0 ? vec3(0.78, 0.40, 0.25)
      : vec3(0.56, 0.23, 0.16);
    c *= 0.9 + 0.1 * step(0.8, fract(band * 3.0));
    c *= 0.93 + 0.07 * dlNoise(w.xz * 0.3 + w.y);
    return srgb(c);
  }
`;function Uv(){const n={x:0,y:1,z:0},t=new Uint8Array(Jt*Jt*4);for(let i=0;i<Jt;i++){const s=-Te+i*Le;for(let r=0;r<Jt;r++){const o=-Te+r*Le,a=i*Jt+r;t[a*4]=Math.min(255,js[a]*8),t[a*4+1]=Math.min(255,Qs(o,s)*10);let l=0;for(const c of $s)c.kind==="mesa"&&Math.hypot(o-c.x,s-c.z)<c.r*.92&&(l=255);t[a*4+2]=l,Pi(o,s,n),t[a*4+3]=Math.min(255,(1-n.y)*600)}}const e=new so(t,Jt,Jt,mn,en);return e.magFilter=Oe,e.minFilter=Oe,e.needsUpdate=!0,e}function Nv(n){const t=Uv(),e=new ps({color:16777215,gradientMap:Ul});e.onBeforeCompile=a=>{a.uniforms.tMap={value:t},a.uniforms.fieldHalf={value:Te},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld;
varying vec3 vWNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWNormal = normalize(mat3(modelMatrix) * objectNormal);`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWorld;
        varying vec3 vWNormal;
        uniform sampler2D tMap;
        uniform float fieldHalf;
        ${bh}
        vec3 groundColor() {
          vec2 uv = (vWorld.xz + fieldHalf) / (2.0 * fieldHalf);
          vec4 m = texture2D(tMap, uv);
          float roadD = m.r * 255.0 / 8.0;
          float wash = m.g * 255.0 / 10.0;
          // Steepness from the field itself (smooth), not the mesh normals.
          float slope = m.a * 255.0 / 600.0;
          vec2 p = vWorld.xz;
          float n1 = dlFbm(p * 0.012);
          float n2 = dlNoise(p * 0.21);
          vec3 sand = mix(srgb(vec3(0.85, 0.52, 0.30)), srgb(vec3(0.93, 0.66, 0.42)), n1);
          // Wind ripples: fine lines that wander.
          float rip = sin(dot(p, vec2(0.8, 0.6)) * 1.9 + n1 * 14.0 + dlNoise(p * 0.05) * 6.0);
          sand *= 1.0 - 0.07 * smoothstep(0.55, 1.0, rip);
          // Scrubby, darker ground in patches.
          float scrub = smoothstep(0.52, 0.72, dlFbm(p * 0.004 + 40.0));
          sand = mix(sand, srgb(vec3(0.72, 0.55, 0.36)), scrub * 0.45);
          sand *= 0.95 + 0.05 * n2;
          // Mesa tops: a darker desert-varnish crust.
          sand = mix(sand, srgb(vec3(0.66, 0.36, 0.24)), m.b * 0.6);
          vec3 col = mix(sand, strata(vWorld), smoothstep(0.16, 0.34, slope));
          // The floor of the wash: pale, cracked mud.
          float floorMask = smoothstep(17.0, 21.0, wash) * (1.0 - smoothstep(0.1, 0.3, slope));
          vec3 mud = srgb(vec3(0.93, 0.78, 0.60));
          vec2 cell = p * 0.35 + dlNoise(p * 0.2) * 0.6;
          vec2 f = abs(fract(cell) - 0.5);
          mud *= 1.0 - 0.18 * smoothstep(0.44, 0.5, max(f.x, f.y));
          col = mix(col, mud, floorMask);
          // Roads: packed dirt, two ruts, a soft berm at the edge.
          float onRoad = 1.0 - smoothstep(6.2, 7.6, roadD);
          vec3 dirt = srgb(vec3(0.80, 0.62, 0.46)) * (0.93 + 0.07 * n2);
          dirt *= 1.0 - 0.13 * (1.0 - smoothstep(0.0, 0.9, abs(roadD - 2.7)));
          col = mix(col, dirt, onRoad);
          col *= 1.0 - 0.08 * (1.0 - smoothstep(0.0, 1.4, abs(roadD - 8.0)));
          return col;
        }`).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( groundColor(), opacity );")};const i=Ve.terrainStep,s=100*i,r=[],o={x:0,y:1,z:0};for(let a=0;a<Jt-1;a+=s)for(let l=0;l<Jt-1;l+=s){const c=Math.min(Jt-1,l+s),d=Math.min(Jt-1,a+s),h=Math.floor((c-l)/i)+1,u=Math.floor((d-a)/i)+1,p=new Float32Array(h*u*3),m=new Float32Array(h*u*3);let x=0;for(let M=0;M<u;M++){const S=Math.min(Jt-1,a+M*i);for(let y=0;y<h;y++){const E=Math.min(Jt-1,l+y*i),v=-Te+E*Le,T=-Te+S*Le;p[x]=v,p[x+1]=tn[S*Jt+E],p[x+2]=T,Pi(v,T,o),m[x]=o.x,m[x+1]=o.y,m[x+2]=o.z,x+=3}}const g=new Uint32Array((h-1)*(u-1)*6);let f=0;for(let M=0;M<u-1;M++)for(let S=0;S<h-1;S++){const y=M*h+S;g[f++]=y,g[f++]=y+h,g[f++]=y+1,g[f++]=y+1,g[f++]=y+h,g[f++]=y+h+1}const _=new _e;_.setAttribute("position",new pe(p,3)),_.setAttribute("normal",new pe(m,3)),_.setIndex(new pe(g,1)),_.computeBoundingSphere(),_.computeBoundingBox();const A=new jt(_,e);A.receiveShadow=!0,A.matrixAutoUpdate=!1,n.add(A),r.push(A)}return{meshes:r,material:e}}function Fv(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new _e;let c=0;for(let d=0;d<n.length;++d){const h=n[d];let u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,d),c+=p}}if(e){let d=0;const h=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let m=0;m<p.count;++m)h.push(p.getX(m)+d);d+=n[u].attributes.position.count}l.setIndex(h)}for(const d in r){const h=Su(r[d]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,h)}for(const d in o){const h=o[d][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<h;++u){const p=[];for(let x=0;x<o[d].length;++x)p.push(o[d][x][u]);const m=Su(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}}return l}function Su(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const d=n[c];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}const o=new t(r),a=new pe(o,e,i);let l=0;for(let c=0;c<n.length;++c){const d=n[c];if(d.isInterleavedBufferAttribute){const h=l/e;for(let u=0,p=d.count;u<p;u++)for(let m=0;m<e;m++){const x=d.getComponent(u,m);a.setComponent(u+h,m,x)}}else o.set(d.array,l);l+=d.count*e}return s!==void 0&&(a.gpuType=s),a}function Ov(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let o=0;const a=Object.keys(n.attributes),l={},c={},d=[],h=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let _=0,A=a.length;_<A;_++){const M=a[_],S=n.attributes[M];l[M]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);const y=n.morphAttributes[M];y&&(c[M]||(c[M]=[]),y.forEach((E,v)=>{const T=new E.array.constructor(E.count*E.itemSize);c[M][v]=new E.constructor(T,E.itemSize,E.normalized)}))}const p=t*.5,m=Math.log10(1/t),x=Math.pow(10,m),g=p*x;for(let _=0;_<r;_++){const A=i?i.getX(_):_;let M="";for(let S=0,y=a.length;S<y;S++){const E=a[S],v=n.getAttribute(E),T=v.itemSize;for(let I=0;I<T;I++)M+=`${Math.trunc(v[h[I]](A)*x+g)},`}if(M in e)d.push(e[M]);else{for(let S=0,y=a.length;S<y;S++){const E=a[S],v=n.getAttribute(E),T=n.morphAttributes[E],I=v.itemSize,b=l[E],C=c[E];for(let L=0;L<I;L++){const P=h[L],D=u[L];if(b[D](o,v[P](A)),T)for(let O=0,N=T.length;O<N;O++)C[O][D](o,T[O][P](A))}}e[M]=o,d.push(o),o++}}const f=n.clone();for(const _ in n.attributes){const A=l[_];if(f.setAttribute(_,new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)),_ in c)for(let M=0;M<c[_].length;M++){const S=c[_][M];f.morphAttributes[_][M]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return f.setIndex(d),f}const zv=`
  vec3 paintColor(vec4 p, vec3 w, out float glow) {
    float id = floor(p.x + 0.5);
    float u = p.y;
    float v = p.z;
    float width = p.w;
    glow = 0.0;
    if (id < 0.5) {
      // Asphalt: a dark road, white edge lines, a dashed yellow centre.
      vec3 c = srgb(vec3(0.24, 0.23, 0.24)) * (0.92 + 0.08 * dlNoise(vec2(u, v) * 1.7));
      float edge = step(u, 0.45) + step(width - 0.45, u);
      c = mix(c, srgb(vec3(0.95, 0.93, 0.88)), clamp(edge, 0.0, 1.0));
      float dash = step(abs(u - width * 0.5), 0.14) * step(fract(v / 5.0), 0.55);
      c = mix(c, srgb(vec3(0.98, 0.78, 0.18)), dash);
      return c;
    } else if (id < 1.5) {
      // Hazard stripes.
      float s = step(0.5, fract((u + v) / 1.4));
      return mix(srgb(vec3(0.98, 0.78, 0.12)), srgb(vec3(0.13, 0.12, 0.13)), s);
    } else if (id < 2.5) {
      return srgb(vec3(0.78, 0.25, 0.17));
    } else if (id < 3.5) {
      return srgb(vec3(0.33, 0.26, 0.24));
    } else if (id < 4.5) {
      // Planks, running round the drum.
      float plank = floor(u / 0.32);
      vec3 c = srgb(vec3(0.74, 0.52, 0.32)) * (0.86 + 0.14 * dlHash(vec2(plank, floor(v / 4.0 + plank * 0.37))));
      c *= 1.0 - 0.25 * step(0.92, fract(u / 0.32));
      return c;
    } else if (id < 5.5) {
      // Kicker: orange with white chevrons pointing the way up.
      vec3 c = srgb(vec3(0.96, 0.47, 0.13));
      float ch = fract(v / 2.2 - abs(u - width * 0.5) * 0.28);
      c = mix(c, srgb(vec3(0.99, 0.95, 0.88)), step(0.72, ch));
      float edge = step(u, 0.3) + step(width - 0.3, u);
      return mix(c, srgb(vec3(0.15, 0.14, 0.15)), clamp(edge, 0.0, 1.0));
    } else if (id < 6.5) {
      // Boost pad: green, with arrows that run forward.
      vec3 c = srgb(vec3(0.10, 0.42, 0.20));
      float a = fract((v - uTime * 9.0) / 3.0 + abs(u - width * 0.5) * 0.22);
      float arrow = step(0.62, a) * step(abs(u - width * 0.5), width * 0.42);
      glow = arrow;
      return mix(c, srgb(vec3(0.45, 1.0, 0.45)), arrow);
    } else if (id < 7.5) {
      // Kerb: red and white blocks.
      return mix(srgb(vec3(0.85, 0.16, 0.13)), srgb(vec3(0.97, 0.95, 0.92)), step(0.5, fract(v / 1.6)));
    } else if (id < 8.5) {
      // Skatepark concrete with seams.
      vec3 c = srgb(vec3(0.86, 0.81, 0.74)) * (0.95 + 0.05 * dlNoise(vec2(u, v) * 0.8));
      c *= 1.0 - 0.12 * step(0.96, fract(v / 4.0));
      return c;
    } else if (id < 9.5) {
      return srgb(vec3(0.60, 0.58, 0.56));
    }
    return strata(w);
  }
`;function Bv(n,t){let e=0;for(const m of t.pieces)e+=m.positions.length/3;const i=new Float32Array(e*3),s=new Float32Array(e*4);let r=0;for(const m of t.pieces){i.set(m.positions,r*3);for(let x=0;x<m.paints.length/3;x++){s[(r+x)*4]=m.paints[x*3],s[(r+x)*4+1]=m.paints[x*3+1],s[(r+x)*4+2]=m.paints[x*3+2];const g=Math.floor(x/6)*6;let f=0;for(let _=0;_<6;_++)f=Math.max(f,m.paints[(g+_)*3+1]||0);s[(r+x)*4+3]=f}r+=m.positions.length/3}let o=new _e;o.setAttribute("position",new pe(i,3)),o.setAttribute("aPaint",new pe(s,4)),o=Ov(o,.001),o.computeVertexNormals(),o.computeBoundingSphere();const a={value:0},l=new ps({color:16777215,gradientMap:uo,side:on});l.onBeforeCompile=m=>{m.uniforms.uTime=a,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aPaint;
varying vec4 vPaint;
varying vec3 vWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPaint = aPaint;
vWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vPaint;
varying vec3 vWorld;
uniform float uTime;
${bh}
${zv}`).replace("vec4 diffuseColor = vec4( diffuse, opacity );",`float glow;
vec4 diffuseColor = vec4( paintColor(vPaint, vWorld, glow), opacity );`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * glow * 1.4;`)};const c=new jt(o,l);c.castShadow=!0,c.receiveShadow=!0,c.matrixAutoUpdate=!1,n.add(c);const d=new Se(1,1,1,10);d.translate(0,.5,0);const h=new ro(d,Ee(12169898),t.pillars.length),u=new ae,p=new Qe;return t.pillars.forEach((m,x)=>{u.compose(new F(m.x,m.y0,m.z),p,new F(m.r,m.y1-m.y0,m.r)),h.setMatrixAt(x,u)}),h.castShadow=!0,h.receiveShadow=!0,n.add(h),{mesh:c,update(m){a.value=m}}}const kv=new ps({color:16777215,vertexColors:!0,gradientMap:uo}),Hn=kv;function se(n,t,{at:e=[0,0,0],rot:i=[0,0,0],scale:s=[1,1,1]}={}){let r=n.index?n.toNonIndexed():n;for(const d of Object.keys(r.attributes))d!=="position"&&d!=="normal"&&r.deleteAttribute(d);const o=new ae().compose(new F(...e),new Qe().setFromEuler(new di(...i)),new F(...s));r.applyMatrix4(o);const a=new kt(t),l=r.attributes.position.count,c=new Float32Array(l*3);for(let d=0;d<l;d++)c[d*3]=a.r,c[d*3+1]=a.g,c[d*3+2]=a.b;return r.setAttribute("color",new pe(c,3)),r}const gn=n=>{const t=Fv(n,!1);return t.computeBoundingSphere(),t};function Vv(n){const e=[se(new Se(.42,.48,5.4,9),6130246,{at:[0,2.7,0]}),se(new hi(.42,9,5,0,Math.PI*2,0,Math.PI/2),6130246,{at:[0,5.4,0]})],i=(s,r,o,a)=>{e.push(se(new Se(.28,.28,o,7),6130246,{at:[s*o*.5,r,0],rot:[0,0,Math.PI/2]})),e.push(se(new Se(.3,.3,a,7),6130246,{at:[s*o,r+a/2-.1,0]})),e.push(se(new hi(.3,7,4,0,Math.PI*2,0,Math.PI/2),6130246,{at:[s*o,r+a-.1,0]}))};return n>=1&&i(1,2.6,1.2,1.9),n>=2&&i(-1,3.3,1,1.5),e.push(se(new hi(.12,5,3),15918786,{at:[.15,5.78,.1]})),gn(e)}function Gv(){const e=[se(new Se(.22,.35,3.2,6),8020552,{at:[0,1.6,0]})],i=[[.9,3.9,.2,.6],[-.8,4.2,-.3,-.5],[.2,4.6,-.8,.1]];for(const[s,r,o,a]of i)e.push(se(new Se(.13,.18,1.8,5),8020552,{at:[s*.5,r-.6,o*.5],rot:[o*.6,0,-s*.6+a*.2]})),e.push(se(new pi(.62,0),7309890,{at:[s,r+.1,o],scale:[1,.85,1]}));return gn(e)}function Hv(){const t=[se(new Se(.35,.55,4.5,7),9075302,{at:[0,2.25,0]})],e=[7313982,8564040,6261302];return[[0,6.4,0,2.6],[1.6,5.6,.6,1.9],[-1.5,5.8,-.4,2],[.3,5.4,-1.7,1.8],[-.4,7.6,.6,1.7]].forEach(([s,r,o,a],l)=>t.push(se(new pi(a,1),e[l%3],{at:[s,r,o]}))),gn(t)}function Wv(){return gn([se(new pi(.9,0),9407058,{at:[0,.35,0],scale:[1.2,.6,1]}),se(new pi(.6,0),10719320,{at:[.5,.45,.3],scale:[1,.7,1]})])}function Xv(){const n=new wl(1,1),t=n.attributes.position;for(let e=0;e<t.count;e++){const i=new F().fromBufferAttribute(t,e),s=.78+.3*Math.abs(Math.sin(i.x*3.1+i.y*1.7)*Math.cos(i.z*2.3));i.multiplyScalar(s),i.y*=.72,t.setXYZ(e,i.x,i.y,i.z)}return gn([se(n,11821118)])}function qv(){return gn([se(new Se(.13,.17,8,6),7230528,{at:[0,4,0]}),se(new qe(2.4,.16,.16),7230528,{at:[0,7.4,0]}),se(new Se(.06,.06,.25,5),9421769,{at:[-1,7.6,0]}),se(new Se(.06,.06,.25,5),9421769,{at:[1,7.6,0]})])}function Yv(){return gn([se(new Se(.9,1.6,46,12),15986664,{at:[0,23,0]}),se(new qe(2.2,2.2,5.5),15986664,{at:[0,46.5,-.8]}),se(new xs(.9,1.6,10),14209736,{at:[0,46.5,2.6],rot:[Math.PI/2,0,0]})])}function Zv(){const n=[];for(let t=0;t<3;t++){const e=t/3*Math.PI*2;n.push(se(new qe(1.1,21,.25),16184302,{at:[Math.sin(e)*10.5,Math.cos(e)*10.5,0],rot:[0,0,-e]}))}return n.push(se(new qe(1.1,1.6,.26),13781556,{at:[0,20.6,0]})),gn(n)}function wi(n,t,e,i,s,{shadow:r=!0}={}){if(!e.length)return null;const o=new ro(n,t,e.length),a=new ae;return e.forEach((l,c)=>{i(l,a),o.setMatrixAt(c,a)}),o.castShadow=r,o.receiveShadow=!0,o.computeBoundingSphere(),s.add(o),o}const Vn=new Qe,Is=new F(0,1,0),Ds=new F,Us=new F;function Kv(n,t){const e=t.props,i=(h,u,p=.15)=>(Vn.setFromAxisAngle(Is,h.yaw),Ds.set(h.x,h.y-p,h.z),Us.setScalar(h.s??1),u.compose(Ds,Vn,Us));for(let h=0;h<3;h++)wi(Vv(h),Hn,e.cactus.filter(u=>u.arms===h),(u,p)=>i(u,p),n);wi(Gv(),Hn,e.joshua,(h,u)=>i(h,u),n),wi(Hv(),Hn,e.tree,(h,u)=>i(h,u,.3),n);const s=e.bush.filter((h,u)=>u*.618%1<Ve.bushes);wi(Wv(),Hn,s,(h,u)=>i(h,u,.1),n,{shadow:!1}),wi(Xv(),Hn,e.rock,(h,u)=>(Vn.setFromAxisAngle(Is,h.yaw),u.compose(Ds.set(h.x,h.y,h.z),Vn,Us.set(h.r,h.r*.9,h.r*1.1))),n),wi(qv(),Hn,e.pole,(h,u)=>i(h,u,.3),n);{const h=[],u=e.pole;for(let x=0;x<u.length;x++){const g=u[x],f=u[(x+1)%u.length];if(!(Math.hypot(g.x-f.x,g.z-f.z)>70))for(const _ of[-1,1]){const A=g.x+Math.cos(g.yaw)*_,M=g.z-Math.sin(g.yaw)*_,S=f.x+Math.cos(f.yaw)*_,y=f.z-Math.sin(f.yaw)*_,E=g.y+7.25,v=f.y+7.25;let T=null;for(let I=0;I<=8;I++){const b=I/8,C=[A+(S-A)*b,E+(v-E)*b-Math.sin(Math.PI*b)*1.1,M+(y-M)*b];T&&h.push(...T,...C),T=C}}}const p=new _e;p.setAttribute("position",new pe(new Float32Array(h),3));const m=new Gf(p,new Zu({color:3811876,transparent:!0,opacity:.6}));n.add(m)}const r=wi(Yv(),Hn,e.turbine,(h,u)=>(Vn.setFromAxisAngle(Is,h.yaw),u.compose(Ds.set(h.x,h.y-.5,h.z),Vn,Us.setScalar(1))),n),o=new ro(Zv(),Hn,e.turbine.length);o.castShadow=!0,o.frustumCulled=!1,n.add(o);const a=new ae,l=new Qe,c=new F(0,0,1),d=new F;return{towers:r,update(h){e.turbine.forEach((u,p)=>{Vn.setFromAxisAngle(Is,u.yaw),l.setFromAxisAngle(c,h*.9+u.phase),Vn.multiply(l),d.set(0,46.5,3.2).applyAxisAngle(Is,u.yaw).add(Ds.set(u.x,u.y-.5,u.z)),a.compose(d,Vn,Us.setScalar(1)),o.setMatrixAt(p,a)}),o.instanceMatrix.needsUpdate=!0}}}const ca={cone:{r:.4,h:.38,mass:.2,geo:()=>gn([se(new xs(.32,.8,8),16738842,{at:[0,.4,0]}),se(new Se(.2,.25,.14,8),16184302,{at:[0,.42,0]}),se(new qe(.7,.06,.7),14701594,{at:[0,.03,0]})])},barrel:{r:.5,h:.45,mass:.6,geo:()=>gn([se(new Se(.42,.42,.95,10),2977720,{at:[0,.475,0]}),se(new Se(.43,.43,.06,10),15328474,{at:[0,.3,0]}),se(new Se(.43,.43,.06,10),15328474,{at:[0,.65,0]})])},crate:{r:.55,h:.5,mass:.5,geo:()=>gn([se(new qe(1,1,1),13011790,{at:[0,.5,0]}),se(new qe(1.02,.12,1.02),9199155,{at:[0,.15,0]}),se(new qe(1.02,.12,1.02),9199155,{at:[0,.85,0]})])},weed:{r:.7,h:.6,mass:.05,geo:()=>gn([se(new pi(.62,1),10979674,{at:[0,.62,0]}),se(new pi(.5,0),9072197,{at:[.1,.65,-.05],rot:[.5,.3,0]})])}};function Jv(n,t,e=Math.random){const i=[];for(const p of t.loose){const m=Pe(p.x,p.z)+(p.stack||0)*1;i.push(s(p.type,p.x,m,p.z))}for(let p=0;p<26;p++){const m=e()*Math.PI*2,x=200+e()*(ai-260),g=Math.cos(m)*x,f=Math.sin(m)*x;i.push(s("weed",g,Pe(g,f),f))}function s(p,m,x,g){return{type:p,def:ca[p],home:new F(m,x,g),pos:new F(m,x,g),vel:new F,quat:new Qe,spin:new F,rest:0,moved:!1,stacked:x>Pe(m,g)+.2}}const r={};for(const p of Object.keys(ca)){const m=i.filter(g=>g.type===p);if(!m.length)continue;const x=new ro(ca[p].geo(),Hn,m.length);x.castShadow=!0,x.frustumCulled=!1,n.add(x),r[p]={mesh:x,list:m}}const o=new ae,a=new F(1,1,1),l={x:0,y:1,z:0},c=new Qe,d=new F,h=new F,u=new F(2.2,0,1.1);return{update(p,m,x){let g=0;for(const f of i){const _=f.def.r;h.copy(f.pos).sub(m.pos),h.y+=f.def.h-.2;const A=h.length();if(A<1.9+_&&m.speed>1.5){const E=d.copy(m.vel).sub(f.vel).dot(h)/(A||1);if(E>0){h.normalize();const v=1+.6/f.def.mass*.2;f.vel.addScaledVector(h,E*v).addScaledVector(m.vel,.35),f.vel.y+=2+E*.35,f.spin.set((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*14),f.moved=!0,f.stacked=!1,f.rest=0,g++;for(const T of i)T.stacked&&Math.hypot(T.home.x-f.home.x,T.home.z-f.home.z)<1.6&&(T.stacked=!1,T.moved=!0,T.vel.copy(f.vel).multiplyScalar(.5),T.spin.set(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2))}}if(f.type==="weed"){const y=Pe(f.pos.x,f.pos.z);f.pos.y-y<.1&&(f.vel.x+=(u.x-f.vel.x)*p*.6,f.vel.z+=(u.z-f.vel.z)*p*.6,Math.random()<p*.8&&(f.vel.y+=1.5+Math.random()*2)),f.spin.set(f.vel.z/_,0,-f.vel.x/_),Math.hypot(f.pos.x,f.pos.z)>ai+30&&f.pos.copy(f.home)}if(f.stacked)continue;f.vel.y-=12*p,f.pos.addScaledVector(f.vel,p);const M=Pe(f.pos.x,f.pos.z);if(f.pos.y<M){Pi(f.pos.x,f.pos.z,l),f.pos.y=M;const y=f.vel.x*l.x+f.vel.y*l.y+f.vel.z*l.z;y<0&&(f.vel.x-=l.x*y*1.4,f.vel.y-=l.y*y*1.4,f.vel.z-=l.z*y*1.4);const E=f.type==="weed"?.4:3.5;f.vel.x*=1-Math.min(1,E*p),f.vel.z*=1-Math.min(1,E*p),f.type!=="weed"&&f.spin.multiplyScalar(1-Math.min(1,4*p))}const S=f.spin.length();S>.001&&(c.setFromAxisAngle(d.copy(f.spin).normalize(),S*p),f.quat.premultiply(c)),f.type!=="weed"&&f.moved&&(f.vel.lengthSq()<.05&&(f.rest+=p,f.rest>2&&f.quat.slerp(c.identity(),Math.min(1,p*2))),f.rest>25&&m.pos.distanceTo(f.home)>70&&(f.pos.copy(f.home),f.vel.set(0,0,0),f.quat.identity(),f.moved=!1,f.rest=0))}for(const{mesh:f,list:_}of Object.values(r))_.forEach((A,M)=>{o.compose(A.pos,A.quat,a),f.setMatrixAt(M,o)}),f.instanceMatrix.needsUpdate=!0;return g}}}const $v=`
  attribute float aAge;
  attribute float aSize;
  attribute vec3 aColor;
  uniform float pixelScale;
  varying float vAge;
  varying vec3 vColor;
  varying float vNear;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vAge = aAge;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float grow = aSize * (0.5 + aAge * 1.1);
    gl_PointSize = aAge >= 1.0 ? 0.0 : min(grow * pixelScale / -mv.z, pixelScale * 0.35);
    // Fade puffs that drift right up to the lens.
    vNear = smoothstep(3.0, 9.0, -mv.z);
    #include <logdepthbuf_vertex>
  }
`,Qv=`
  uniform vec3 tint;
  varying float vAge;
  varying vec3 vColor;
  varying float vNear;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    // Soft, but with a toon edge: two flat tones, not a smear.
    float body = smoothstep(0.5, 0.12, d);
    float core = smoothstep(0.32, 0.12, d + c.y * 0.25);
    float alpha = body * (1.0 - vAge) * (1.0 - vAge) * 0.5 * vNear;
    vec3 col = mix(vColor * 0.84, vColor * 1.04, core) * tint;
    gl_FragColor = vec4(col, alpha);
    #include <colorspace_fragment>
  }
`;function jv(n){const t=Ve.dust,e=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t).fill(1),r=new Float32Array(t).fill(1),o=new Float32Array(t),a=new Float32Array(t*3),l=new _e;l.setAttribute("position",new pe(e,3)),l.setAttribute("aAge",new pe(s,1)),l.setAttribute("aSize",new pe(o,1)),l.setAttribute("aColor",new pe(a,3));const c=new Ze({vertexShader:$v,fragmentShader:Qv,transparent:!0,depthWrite:!1,blending:os,uniforms:{pixelScale:{value:600},tint:{value:new kt(1,1,1)}}}),d=new Wf(l,c);d.frustumCulled=!1,d.renderOrder=2,n.add(d);let h=0;const u=new kt(14721130),p=new kt(15389364),m=new kt(15923451),x=new kt;function g(_,A,M,S,y,E,v,T,I=u){const b=h;h=(h+1)%t,e[b*3]=_,e[b*3+1]=A,e[b*3+2]=M,i[b*3]=S,i[b*3+1]=y,i[b*3+2]=E,s[b]=0,r[b]=T,o[b]=v,x.copy(I).multiplyScalar(.9+Math.random()*.2),a[b*3]=x.r,a[b*3+1]=x.g,a[b*3+2]=x.b}let f=0;return{setTint(_){c.uniforms.tint.value.setHex(_).lerp(new kt(1,1,1),.35)},setPixelScale(_,A){c.uniforms.pixelScale.value=_/(2*Math.tan(A*Math.PI/360))},splash(_,A,M,S,y=0,E=0){const v=Math.floor(6+S*26);for(let T=0;T<v;T++){const I=Math.random()*Math.PI*2,b=1.5+Math.random()*4*S;g(_,A+.4,M,Math.cos(I)*b+y*.3,3+Math.random()*5*S,Math.sin(I)*b+E*.3,1.2+S*1.6,.8+Math.random()*.6,m)}},mist(_,A,M){const S=Math.random()*Math.PI*2,y=Math.random()*4;g(_+Math.cos(S)*y,A,M+Math.sin(S)*y,Math.cos(S)*2,1.5+Math.random()*2,Math.sin(S)*2,4+Math.random()*3,2.5+Math.random()*1.5,m)},landing(_,A,M,S){const y=Math.floor(10+S*30);for(let E=0;E<y;E++){const v=E/y*Math.PI*2,T=3+S*7;g(_,A+.8,M,Math.cos(v)*T,1+Math.random()*2,Math.sin(v)*T,2.2+S*2.5,1.3+Math.random())}},update(_,A){const M=A.speed;for(const S of A.wheels){if(!S.contact||S.surface!=="ground"||A.inWater)continue;const y=Math.min(50,Math.max(0,M-3)*.8+S.slip*60)*(S.front?.4:1);for(f+=y*_;f>=1;){f-=1;const E=.25+Math.random()*.4;g(S.point.x+(Math.random()-.5)*.5,S.point.y+.7,S.point.z+(Math.random()-.5)*.5,-A.vel.x*E+(Math.random()-.5)*3,1.2+Math.random()*2.5+S.slip*2,-A.vel.z*E+(Math.random()-.5)*3,1.2+Math.random()*1.2+S.slip*1.2+M*.03,1.4+Math.random()*1.6,Math.random()<.3?p:u)}}for(let S=0;S<t;S++){if(s[S]>=1)continue;s[S]=Math.min(1,s[S]+_/r[S]);const y=1-Math.min(1,1.8*_);i[S*3]*=y,i[S*3+1]=i[S*3+1]*y-.6*_,i[S*3+2]*=y,e[S*3]+=i[S*3]*_+.6*_,e[S*3+1]+=i[S*3+1]*_,e[S*3+2]+=i[S*3+2]*_+.3*_}l.attributes.position.needsUpdate=!0,l.attributes.aAge.needsUpdate=!0,l.attributes.aSize.needsUpdate=!0,l.attributes.aColor.needsUpdate=!0}}}const t_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,e_=`
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
`;function n_(n){const t=n.getDrawingBufferSize(new ft),e=new xn(t.x,t.y,{type:wn,samples:Ve.msaa,depthBuffer:!0});e.depthTexture=new hs(t.x,t.y,En);const i=new Ze({vertexShader:t_,fragmentShader:e_,defines:Ve.halation?{HALATION:""}:{},depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:e.texture},tDepth:{value:e.depthTexture},texel:{value:new ft(1/t.x,1/t.y)},near:{value:.5},far:{value:4200},lineWidth:{value:1},inkColor:{value:new kt(3874841)},shadowTint:{value:new kt(10129360)},lightTint:{value:new kt(16773596)},saturation:{value:1.1},halation:{value:.4},grain:{value:.045},mist:{value:0},mistColor:{value:new kt(16052714)}}}),s=new jt(new tr(2,2),i);s.frustumCulled=!1;const r=new Xu;r.add(s);const o=new ao(-1,1,1,-1,0,1);function a(){n.getDrawingBufferSize(t),e.setSize(t.x,t.y),i.uniforms.texel.value.set(1/t.x,1/t.y),i.uniforms.lineWidth.value=Math.max(1,Math.min(2,t.y/720))}return a(),{uniforms:i.uniforms,setSize:a,render(l,c){i.uniforms.near.value=c.near,i.uniforms.far.value=c.far,n.setRenderTarget(e),n.render(l,c),n.setRenderTarget(null),n.render(r,o)}}}const Eh="#include <fog_pars_vertex>",wh="#include <fog_vertex>";function i_(n,t,e){return new Ze({transparent:!0,fog:!0,depthWrite:!1,uniforms:Pl.merge([St.fog,{time:{value:0},centre:{value:[t.x,t.z]},radius:{value:t.r},impact:{value:e}}]),vertexShader:`
      varying vec3 vWorld;
      #include <common>
      ${Eh}
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        ${wh}
      }
    `,fragmentShader:`
      uniform float time;
      uniform vec2 centre;
      uniform float radius;
      uniform vec2 impact;
      varying vec3 vWorld;
      #include <common>
      #include <fog_pars_fragment>
      void main() {
        float d = length(vWorld.xz - centre) / radius;
        vec3 deep = pow(vec3(0.05, 0.42, 0.45), vec3(2.2));
        vec3 shallow = pow(vec3(0.36, 0.78, 0.70), vec3(2.2));
        vec3 col = mix(deep, shallow, smoothstep(0.35, 1.0, d));
        // Rings spreading out from where the falls land.
        float di = length(vWorld.xz - impact);
        float ring = sin(di * 1.6 - time * 4.0) * 0.5 + 0.5;
        float near = exp(-di * 0.12);
        col += vec3(0.5) * smoothstep(0.75, 1.0, ring) * near * 0.35;
        // Wind ripples elsewhere.
        float rip = sin(vWorld.x * 0.9 + time * 1.3 + sin(vWorld.z * 0.7 + time) * 1.5);
        col += vec3(0.25) * smoothstep(0.85, 1.0, rip) * 0.25;
        // Foam where the water lands and round the shore.
        float foam = smoothstep(6.0, 1.5, di) * (0.6 + 0.4 * sin(time * 9.0 + di * 3.0));
        foam = max(foam, smoothstep(0.86, 1.0, d) * (0.5 + 0.5 * sin(atan(vWorld.z - centre.y, vWorld.x - centre.x) * 22.0 + time * 2.0)));
        col = mix(col, vec3(0.95, 0.98, 1.0), clamp(foam, 0.0, 1.0) * 0.85);
        float alpha = mix(0.88, 0.55, smoothstep(0.7, 1.0, d));
        gl_FragColor = vec4(col, alpha);
        #include <fog_fragment>
      }
    `})}function ua(n,t=1){return new Ze({transparent:!0,fog:!0,depthWrite:!1,side:on,uniforms:Pl.merge([St.fog,{time:{value:0}}]),vertexShader:`
      attribute vec2 aUv;
      varying vec2 vUv;
      #include <common>
      ${Eh}
      void main() {
        vUv = aUv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        ${wh}
      }
    `,fragmentShader:`
      uniform float time;
      varying vec2 vUv;
      #include <common>
      #include <fog_pars_fragment>
      float h(float x) { return fract(sin(x * 127.1) * 43758.5453); }
      void main() {
        // u: 0..1 across, v: metres along the flow.
        float col = floor(vUv.x * 26.0);
        float off = h(col) * 10.0;
        float sp = ${n.toFixed(2)} * (0.8 + 0.4 * h(col + 3.0));
        float streak = fract((vUv.y - time * sp) * 0.18 + off);
        float s = smoothstep(0.0, 0.25, streak) * smoothstep(1.0, 0.55, streak);
        float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        vec3 base = pow(vec3(0.62, 0.86, 0.92), vec3(2.2));
        vec3 white = vec3(1.0);
        vec3 c = mix(base, white, s * 0.8) * ${t.toFixed(2)};
        float a = (0.55 + 0.4 * s) * edge;
        gl_FragColor = vec4(c, a);
        #include <fog_fragment>
      }
    `})}function ha(n,t,e){const i=[],s=[];let r=0;for(let a=0;a<n.length-1;a++){const l=n[a],c=n[a+1],d=Math.hypot(c[0]-l[0],c[1]-l[1],c[2]-l[2]),h=(x,g)=>{const f=x?c:l,_=t[a+x]/2,A=e[a+x];return[f[0]+A[0]*_*(g*2-1),f[1],f[2]+A[2]*_*(g*2-1)]},u=r,p=r+d,m=6;for(let x=0;x<m;x++){const g=x/m,f=(x+1)/m,_=h(0,g),A=h(0,f),M=h(1,g),S=h(1,f);i.push(..._,...A,...M,...A,...S,...M),s.push(g,u,f,u,g,p,f,u,f,p,g,p)}r=p}const o=new _e;return o.setAttribute("position",new pe(new Float32Array(i),3)),o.setAttribute("aUv",new pe(new Float32Array(s),2)),o.computeBoundingSphere(),o}function s_(n,t){const{lip:e,dir:i,mesa:s,pool:r}=t,o=[-i[1],0,i[0]],a=10,l=[],c=[],d=[];for(let b=0;b<=12;b++){const C=b/12,L=Math.sin(C*5)*3*(1-C),P=s.x+i[0]*s.r*C*.97+o[0]*L,D=s.z+i[1]*s.r*C*.97+o[2]*L;l.push([P,Math.max(Pe(P,D),s.h-.4)+.25,D]),c.push(3.5+C*(a-3.5)),d.push(o)}const h=ua(5,1);n.add(new jt(ha(l,c,d),h));const u=5,p=9.8,m=e.y+.25-r.level,x=Math.sqrt(2*m/p),g=[],f=[],_=[];for(let b=0;b<=30;b++){const C=b/30*x;g.push([e.x+i[0]*u*C,e.y+.25-.5*p*C*C,e.z+i[1]*u*C]),f.push(a*(1+.35*(b/30))),_.push(o)}const A=ua(16,1.08);n.add(new jt(ha(g,f,_),A));const M=g.map((b,C)=>[b[0]+i[0]*.6*(C/30),b[1],b[2]+i[1]*.6*(C/30)]),S=ua(13,.95);n.add(new jt(ha(M,f.map(b=>b*1.15),_),S));const y=[e.x+i[0]*u*x,e.z+i[1]*u*x],E=i_(0,r,y),v=new jt(new El(r.r+.6,48),E);v.rotation.x=-Math.PI/2,v.position.set(r.x,r.level,r.z),n.add(v);const T=new jt(new er(15,1.6,6,48,Math.PI),new Ze({transparent:!0,depthWrite:!1,blending:da,side:on,uniforms:{strength:{value:.22}},vertexShader:`
        varying vec3 vLocal;
        void main() { vLocal = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        uniform float strength;
        varying vec3 vLocal;
        vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
        void main() {
          float r = length(vLocal.xy);
          float t = clamp((r - 13.4) / 3.2, 0.0, 1.0);
          float edge = smoothstep(0.0, 0.2, t) * smoothstep(1.0, 0.8, t);
          float ends = smoothstep(0.0, 6.0, vLocal.y);
          gl_FragColor = vec4(hue(t * 0.8) * edge * ends * strength, 1.0);
        }
      `}));return T.position.set(y[0]+i[0]*6,r.level-2,y[1]+i[1]*6),T.rotation.y=Math.atan2(i[0],i[1]),n.add(T),{mistAt:{x:y[0],y:r.level+.5,z:y[1]},curtain:{lip:e,dir:i,v0:u,tEnd:x,width:a,side:o},update(b){h.uniforms.time.value=b,A.uniforms.time.value=b,S.uniforms.time.value=b,E.uniforms.time.value=b},under(b){const C=b.x-e.x,L=b.z-e.z,P=C*i[0]+L*i[1],D=Math.abs(C*o[0]+L*o[2]);return P>0&&P<u*x+3&&D<a*.7&&b.y<e.y}}}const yu=[[15221035,16765498],[3103177,15921128],[8011007,16743096],[3119704,16771496],[16747034,2767498],[13711916,15921128]];function r_(n){const t=[];for(let a=0;a<=20;a++){const l=a/20,c=l*Math.PI;let d=Math.sin(c)*Xr*(1.05-.25*l);l>.75&&(d=Math.max(d,1.6+(1-l)*6)),t.push(new ft(Math.max(.01,d),Xr*(1-2*l)-l*l*3))}const e=new Cl(t,24).toNonIndexed(),i=e.attributes.position,s=new Float32Array(i.count*3),r=new kt(n[0]),o=new kt(n[1]);for(let a=0;a<i.count;a+=3){const l=(i.getX(a)+i.getX(a+1)+i.getX(a+2))/3,c=(i.getZ(a)+i.getZ(a+1)+i.getZ(a+2))/3,d=(i.getY(a)+i.getY(a+1)+i.getY(a+2))/3,h=Math.floor((Math.atan2(c,l)/(Math.PI*2)+1)*12)%2,u=d<-Xr*.55?1:0,p=h^u?o:r;for(let m=0;m<3;m++)s.set([p.r,p.g,p.b],(a+m)*3)}return e.setAttribute("color",new pe(s,3)),e.computeVertexNormals(),e}function o_(n,t){const e=new ps({color:16777215,vertexColors:!0,gradientMap:Ul}),i=Ee(10119738),s=Ee(4864554),r=Ee(16756800,{emissive:16742928}),o=t.balloons.map((h,u)=>{const p=new Dn,m=new jt(r_(yu[h.colour%yu.length]),e);m.castShadow=!0,p.add(m);const x=new jt(new qe(2.2,1.4,2.2),i);x.position.y=-14,x.castShadow=!0,p.add(x);for(const[f,_]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const A=new jt(new Se(.04,.04,5.6,4),s);A.position.set(f*1.3,-14+3.3,_*1.3),A.rotation.set(_*.08,0,-f*.08),p.add(A)}const g=new jt(new xs(.5,2.2,8),r);return g.position.y=-14+2.6,g.visible=!1,p.add(g),n.add(p),{b:h,group:p,env:m,flame:g,seed:u*1.37}}),a=new er(1,.06,8,48).toNonIndexed();{const h=a.attributes.position,u=new Float32Array(h.count*3),p=new kt(14169386),m=new kt(16184302);for(let x=0;x<h.count;x+=3){const g=Math.atan2(h.getY(x),h.getX(x)),f=Math.floor((g/(Math.PI*2)+1)*16)%2?p:m;for(let _=0;_<3;_++)u.set([f.r,f.g,f.b],(x+_)*3)}a.setAttribute("color",new pe(u,3))}const l=new ps({color:16777215,vertexColors:!0,gradientMap:uo,emissive:2228224}),c=t.hoops.map(h=>{const u=new jt(a,l);return u.scale.set(h.r,h.r,h.r*3),u.position.set(h.x,h.y,h.z),u.rotation.y=Math.atan2(h.nx,h.nz),u.castShadow=!0,n.add(u),{h,m:u,flash:0}}),d={x:0,y:0,z:0};return{update(h,u){for(const p of o){Mh(p.b,u,d),p.group.position.set(d.x,d.y,d.z);const m=u-(p.b.hit??-99),x=m<1.5?Math.exp(-m*3)*Math.sin(m*18)*.12:0;p.env.scale.set(1+x,1-x,1+x);const g=Math.sin(u*.31+p.seed*5)>.93||m<.8;p.flame.visible=g,g&&p.flame.scale.setScalar(.8+Math.random()*.5)}for(const p of c)p.flash=Math.max(0,p.flash-h),p.m.rotation.z+=h*(.2+p.flash*6)},flashHoop(h){c[h]&&(c[h].flash=1.5)}}}const a_=`
class Comb {
  constructor(len) {
    this.buf = new Float32Array(len);
    this.i = 0;
    this.lp = 0;
  }
  run(x, delay, feedback, damp) {
    const n = this.buf.length;
    let r = this.i - delay;
    if (r < 0) r += n;
    const r0 = Math.floor(r);
    const f = r - r0;
    const a = this.buf[r0 % n];
    const b = this.buf[(r0 + 1) % n];
    const y = a + (b - a) * f;
    this.lp += (y - this.lp) * damp;
    this.buf[this.i] = x + this.lp * feedback;
    this.i = (this.i + 1) % n;
    return y;
  }
}

class EngineProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: 'rpm', defaultValue: 900, minValue: 300, maxValue: 9000, automationRate: 'k-rate' },
      { name: 'load', defaultValue: 0, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
    ];
  }

  constructor() {
    super();
    this.phase = 0; // 0..1 per two crank revolutions
    this.nextFire = 0;
    this.cyl = 0;
    this.strength = [1, 0.84, 0.95, 0.78];
    this.pulse = 0; // current pulse envelope
    this.pulseAmp = 0;
    this.body = 0;
    this.pipeA = new Comb(4096);
    this.pipeB = new Comb(4096);
    this.lp1 = 0;
    this.lp2 = 0;
    this.dc = 0;
    this.dcOut = 0;
    this.hiss = 0;
    this.lastLoad = 0;
    this.overrun = 0;
    this.smoothRpm = 900;
  }

  process(inputs, outputs, params) {
    const out = outputs[0][0];
    if (!out) return true;
    const sr = sampleRate;
    const targetRpm = params.rpm[0];
    const load = params.load[0];
    // Lifting off hard at high revs: a few seconds of crackle.
    if (this.lastLoad - load > 0.4 && this.smoothRpm > 4200) this.overrun = 1.2;
    this.lastLoad = load;

    for (let i = 0; i < out.length; i++) {
      this.smoothRpm += (targetRpm - this.smoothRpm) * 0.0006;
      const rpm = this.smoothRpm;
      // Four cylinders, four strokes: four firings per two revolutions.
      const cycleHz = rpm / 120;
      this.phase += cycleHz / sr;
      if (this.phase >= this.nextFire) {
        const k = this.cyl;
        this.cyl = (this.cyl + 1) % 4;
        this.nextFire += 0.25 * (1 + (Math.random() - 0.5) * 0.03);
        if (this.phase > 1) {
          this.phase -= 1;
          this.nextFire -= 1;
        }
        // Firing strength: load, cylinder character, jitter. At idle it is
        // lumpier; under load it evens out.
        const lump = 1 - (1 - this.strength[k]) * (1.2 - load);
        let amp = (0.2 + 0.8 * load) * lump * (0.9 + Math.random() * 0.2);
        // Overrun pops: occasional big bangs with no load.
        if (this.overrun > 0 && load < 0.1 && Math.random() < 0.12) amp = 0.9 + Math.random() * 0.8;
        this.pulseAmp = amp;
        this.pulse = 1;
      }
      // The pulse: a sharp, noisy click with a short body behind it.
      const tau = 0.00055 + 0.0009 * (1 - load);
      this.pulse *= Math.exp(-1 / (tau * sr));
      const click = this.pulse * this.pulseAmp * (0.75 + 0.5 * Math.random());
      this.body += (click - this.body) * 0.08;
      const excite = click * 0.6 + this.body * 1.4;

      // Exhaust pipes: resonances that move a little with rpm (hotter gas,
      // faster sound), which is where the "rasp" changes as it revs.
      const da = sr / (115 + rpm * 0.012);
      const db = sr / (310 + rpm * 0.02);
      const a = this.pipeA.run(excite, da, 0.62, 0.35);
      const b = this.pipeB.run(excite, db, 0.48, 0.5);
      let x = excite * 0.35 + a * 0.8 + b * 0.5;

      // Muffler: two one-pole lowpasses, opening with load and rpm.
      const cut = Math.min(0.6, (500 + load * 2200 + rpm * 0.25) / sr * 6.28);
      this.lp1 += (x - this.lp1) * cut;
      this.lp2 += (this.lp1 - this.lp2) * cut;
      x = this.lp2;

      // Intake and mechanical hiss.
      this.hiss += ((Math.random() * 2 - 1) - this.hiss) * 0.3;
      x += this.hiss * (0.015 + 0.05 * load) * (0.6 + 0.4 * this.pulse);

      // Remove DC, saturate gently.
      this.dcOut = x - this.dc + 0.995 * this.dcOut;
      this.dc = x;
      out[i] = Math.tanh(this.dcOut * 2.2) * 0.7;
    }
    if (this.overrun > 0) this.overrun -= out.length / sr;
    for (let c = 1; c < outputs[0].length; c++) outputs[0][c].set(out);
    return true;
  }
}

registerProcessor('dustline-engine', EngineProcessor);
`,bu=.16,Ns=[0,9,17,25,34,44,70];function l_(){let n=null,t=null,e=!0,i=null;function s(m){const x=m.createBuffer(1,m.sampleRate*2,m.sampleRate),g=x.getChannelData(0);for(let f=0;f<g.length;f++)g[f]=Math.random()*2-1;return x}function r(m=1){const x=n.createBufferSource();return x.buffer=i,x.loop=!0,x.playbackRate.value=m,x.start(),x}function o(){if(n||!e)return;const m=window.AudioContext||window.webkitAudioContext;if(!m)return;n=new m,i=s(n);const x=n.createGain();x.gain.value=bu,x.connect(n.destination);const g=n.createGain();g.gain.value=.2;const f=n.createBiquadFilter();f.type="lowpass",f.frequency.value=900,f.Q.value=2;const _=n.createWaveShaper(),A=new Float32Array(1024);for(let L=0;L<A.length;L++)A[L]=Math.tanh((L/1023*2-1)*2.4);_.curve=A,_.connect(f).connect(g).connect(x);const M=[["sawtooth",1,.5],["sawtooth",1.007,.4],["square",.5,.35]].map(([L,P,D])=>{const O=n.createOscillator();O.type=L;const N=n.createGain();return N.gain.value=D,O.connect(N).connect(_),O.start(),{o:O,mul:P}}),S=n.createBiquadFilter();S.type="bandpass",S.frequency.value=380,S.Q.value=.8;const y=n.createGain();y.gain.value=0,r(.7).connect(S).connect(y).connect(x);const E=n.createBiquadFilter();E.type="bandpass",E.frequency.value=1700,E.Q.value=9;const v=n.createGain();v.gain.value=0,r(1).connect(E).connect(v).connect(x);const T=n.createBiquadFilter();T.type="bandpass",T.frequency.value=600,T.Q.value=.6;const I=n.createGain();I.gain.value=0,r(.5).connect(T).connect(I).connect(x);const b=n.createBiquadFilter();b.type="highpass",b.frequency.value=2e3;const C=n.createGain();if(C.gain.value=0,r(1.3).connect(b).connect(C).connect(x),t={master:x,engine:g,tone:f,oscs:M,gravelGain:y,gravel:S,squealGain:v,windGain:I,wind:T,hissGain:C,worklet:null},n.audioWorklet&&typeof AudioWorkletNode<"u"){const L=URL.createObjectURL(new Blob([a_],{type:"application/javascript"}));n.audioWorklet.addModule(L).then(()=>{const P=new AudioWorkletNode(n,"dustline-engine",{outputChannelCount:[1]}),D=n.createGain();D.gain.value=.9,P.connect(D).connect(x),t.worklet=P,t.workletGain=D,g.disconnect()}).catch(()=>{})}n.state==="suspended"&&n.resume().catch(()=>{})}let a=.2,l=1;function c(m,x,g){if(!n||!t)return;const f=n.currentTime,_=Math.abs(x.forwardSpeed);for(;l<Ns.length-2&&_>Ns[l+1];)l++;for(;l>1&&_<Ns[l]-2;)l--;const A=Ns[l],M=Ns[l+1];let S=.25+.7*Math.min(1,Math.max(0,(_-A)/(M-A)));l===1&&(S=.2+.75*Math.min(1,_/M)),!x.grounded&&g.throttle>0&&(S=.95),x.grounded&&x.slip>.4&&g.throttle>0&&(S=Math.min(1,S+.25)),a+=(S-a)*Math.min(1,m*(S>a?6:9));const y=46+a*150;if(t.worklet){const T=t.worklet.parameters;T.get("rpm").setTargetAtTime(900+a*6600,f,.03),T.get("load").setTargetAtTime(Math.min(1,g.throttle*(x.grounded?1:.7)+(g.boost?.2:0)),f,.04),t.workletGain.gain.setTargetAtTime(.75+g.throttle*.25,f,.08)}for(const{o:T,mul:I}of t.oscs)T.frequency.setTargetAtTime(y*I,f,.03);t.tone.frequency.setTargetAtTime(500+a*1400+g.throttle*700,f,.05),t.engine.gain.setTargetAtTime(.1+g.throttle*.12+a*.05,f,.06);const E=x.wheels.filter(T=>T.contact&&T.surface==="ground").length/4,v=x.wheels.filter(T=>T.contact&&T.surface==="track").length/4;t.gravelGain.gain.setTargetAtTime(E*Math.min(.5,x.speed/40+x.slip*.4),f,.05),t.gravel.frequency.setTargetAtTime(220+x.speed*9,f,.1),t.squealGain.gain.setTargetAtTime(v*Math.max(0,x.slip-.35)*.35,f,.04),t.windGain.gain.setTargetAtTime(Math.min(.4,x.speed/120+(x.grounded?0:.06)),f,.2),t.wind.frequency.setTargetAtTime(300+x.speed*14,f,.2),t.hissGain.gain.setTargetAtTime(g.boost?.12:x.onPad?.08:0,f,.08)}function d(m=.5){if(!n||!t)return;const x=n.currentTime,g=n.createOscillator();g.type="sine",g.frequency.setValueAtTime(110,x),g.frequency.exponentialRampToValueAtTime(38,x+.25);const f=n.createGain();f.gain.setValueAtTime(1e-4,x),f.gain.exponentialRampToValueAtTime(.6*m+.1,x+.01),f.gain.exponentialRampToValueAtTime(1e-4,x+.35),g.connect(f).connect(t.master),g.start(x),g.stop(x+.4);const _=n.createBufferSource();_.buffer=i;const A=n.createBiquadFilter();A.type="lowpass",A.frequency.value=900;const M=n.createGain();M.gain.setValueAtTime(.4*m,x),M.gain.exponentialRampToValueAtTime(1e-4,x+.25),_.connect(A).connect(M).connect(t.master),_.start(x),_.stop(x+.3)}function h(m=.5){if(!n||!t)return;const x=n.currentTime,g=n.createBufferSource();g.buffer=i;const f=n.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(2500,x),f.frequency.exponentialRampToValueAtTime(700,x+.6),f.Q.value=.7;const _=n.createGain();_.gain.setValueAtTime(1e-4,x),_.gain.exponentialRampToValueAtTime(.5*m+.1,x+.03),_.gain.exponentialRampToValueAtTime(1e-4,x+.9),g.connect(f).connect(_).connect(t.master),g.start(x),g.stop(x+1);const A=n.createOscillator();A.frequency.setValueAtTime(160,x),A.frequency.exponentialRampToValueAtTime(60,x+.2);const M=n.createGain();M.gain.setValueAtTime(.3*m,x),M.gain.exponentialRampToValueAtTime(1e-4,x+.25),A.connect(M).connect(t.master),A.start(x),A.stop(x+.3)}function u(m=1){if(!n||!t)return;const x=n.currentTime;for(const[g,f]of[[1,0],[1.5,.07]]){const _=n.createOscillator();_.type="triangle",_.frequency.setValueAtTime(520*m*g,x+f),_.frequency.exponentialRampToValueAtTime(880*m*g,x+f+.12);const A=n.createGain();A.gain.setValueAtTime(1e-4,x+f),A.gain.exponentialRampToValueAtTime(.12,x+f+.02),A.gain.exponentialRampToValueAtTime(1e-4,x+f+.3),_.connect(A).connect(t.master),_.start(x+f),_.stop(x+f+.35)}}function p(m){return e=m,e&&!n&&o(),n&&t&&(t.master.gain.setTargetAtTime(e?bu:0,n.currentTime,.1),e&&n.state==="suspended"&&n.resume().catch(()=>{})),e}return{start:o,update:c,thump:d,chime:u,splash:h,setEnabled:p,toggle:()=>p(!e),setPaused(m){n&&(m?n.suspend().catch(()=>{}):e&&n.resume().catch(()=>{}))},get enabled(){return e}}}function c_(){const n=document.querySelector("#trick"),t=document.querySelector("#hint"),e=document.querySelector("#speed"),i=document.querySelector("#intro");let s=0,r=0,o=!1;return{trick(a,l=""){n&&(n.innerHTML=`<b>${a}</b>${l?`<small>${l}</small>`:""}`,n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop"),r=1.6)},hint(a,l=2.5){t&&(t.textContent=a,t.style.opacity="1",s=l)},showIntro(){i&&(i.style.display="",i.offsetWidth,i.classList.remove("gone"))},hideIntro(){i?.classList.add("gone"),setTimeout(()=>{i?.classList.contains("gone")&&(i.style.display="none")},600)},toggle(){return o=!o,document.body.classList.toggle("nohud",o),!o},setSound(a){document.querySelector("#soundBtn")?.classList.toggle("off",!a)},update(a,l){s>0&&(s-=a,s<=0&&t&&(t.style.opacity="0")),r>0&&(r-=a,r<=0&&n?.classList.remove("pop")),e&&(e.textContent=`${Math.round(Math.abs(l.forwardSpeed)*3.6)}`)}}}const Eu={morning:{label:"Morning",sun:[.75,.32,-.45],sunColor:16773340,sunIntensity:2.6,sky:10274542,ground:13802092,hemi:1.15,fog:15324868,top:5214168,horizon:15983311,glow:16763018,exposure:1.05,dustTint:15918812},afternoon:{label:"Afternoon",sun:[-.45,.62,.55],sunColor:16773592,sunIntensity:3,sky:9421040,ground:14194014,hemi:1.1,fog:15782574,top:3111119,horizon:16176814,glow:16751178,exposure:1.05,dustTint:16777215},sunset:{label:"Sunset",sun:[-.8,.14,.3],sunColor:16756848,sunIntensity:2.8,sky:9277384,ground:12873790,hemi:1,fog:15443578,top:3824296,horizon:16756858,glow:16738858,exposure:1.1,dustTint:14195320}},fa=["morning","afternoon","sunset"];function u_(){const n=new Fx({antialias:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,Ve.pixelRatio)),n.setSize(innerWidth,innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Vs,n.outputColorSpace=rn,n.toneMapping=ul,n.toneMappingExposure=1.05,document.body.insertBefore(n.domElement,document.querySelector("#ui"));const t=new Xu,e=new dn(62,innerWidth/innerHeight,.3,4600);t.add(e);const i=new Od;i.connect(document);const s=hv(),r={collision:s.collision,boosts:s.boosts,water:s.water,balloons:s.balloons},o=Dv(t);Nv(t);const a=Bv(t,s),l=Kv(t,s),c=Jv(t,s),d=jv(t),h=s_(t,s.falls),u=o_(t,s),p=n_(n);h_(t);const m=new Ld(10274542,13802092,1.1);t.add(m);const x=new Ud(16777215,3);x.castShadow=!0,x.shadow.mapSize.set(Ve.shadowMap,Ve.shadowMap);const g=70;Object.assign(x.shadow.camera,{left:-g,right:g,top:g,bottom:-g,near:1,far:600}),x.shadow.bias=-4e-4,x.shadow.normalBias=.35,t.add(x),t.add(x.target),t.fog=new Ml(15782574,260,Ve.far*.8);const f=new F;let _=ni.get("light")||"afternoon";function A(H){const j=Eu[H]||Eu.afternoon;_=H,f.set(...j.sun).normalize(),x.color.setHex(j.sunColor),x.intensity=j.sunIntensity,m.color.setHex(j.sky),m.groundColor.setHex(j.ground),m.intensity=j.hemi,t.fog.color.setHex(j.fog),o.uniforms.topColor.value.setHex(j.top),o.uniforms.horizonColor.value.setHex(j.horizon),o.uniforms.glowColor.value.setHex(j.glow),o.uniforms.sunDir.value.copy(f),n.toneMappingExposure=j.exposure,d.setTint(j.dustTint),ni.set("light",H);for(const At of document.querySelectorAll("[data-light]"))At.setAttribute("aria-pressed",String(At.dataset.light===H));return j.label}A(_);let M=ni.get("livery")||"blue",S=_u(M);t.add(S);function y(H){M=H,ni.set("livery",H),t.remove(S),S=_u(H),t.add(S);for(const j of document.querySelectorAll("[data-livery]"))j.setAttribute("aria-pressed",String(j.dataset.livery===H))}y(M),S.traverse(H=>{H.isMesh&&(H.castShadow=!0)});const E=pv(s.spawn),v=Cv(e,{mode:ni.get("camera")||0});v.reset(E);const T=l_(),I=c_();let b=!1;function C(){const H=v.cycle();ni.set("camera",H),I.hint(`${Rv[H]} camera`,1.2)}function L(){const H=fa[(fa.indexOf(_)+1)%fa.length];I.hint(A(H),1.3)}function P(){const H=T.toggle();ni.set("sound",H),I.setSound(H),I.hint(H?"Sound on":"Sound off",1.1)}function D(){const H=E.speed>3?Math.atan2(E.vel.x,-E.vel.z):mv(E),j=Math.max(E.pos.y,Pe(E.pos.x,E.pos.z))+2;Bs(E,E.pos.x,j,E.pos.z,H)}const O=Pv({actions:{camera:C,light:L,sound:P,reset:D,hud:()=>I.toggle()},onFirstInput:()=>T.start()});document.querySelector("#cameraBtn")?.addEventListener("click",C),document.querySelector("#lightBtn")?.addEventListener("click",L),document.querySelector("#soundBtn")?.addEventListener("click",P),document.querySelector("#resetBtn")?.addEventListener("click",D);for(const H of document.querySelectorAll("[data-light]"))H.addEventListener("click",()=>A(H.dataset.light));for(const H of document.querySelectorAll("[data-livery]"))H.addEventListener("click",()=>y(H.dataset.livery));ni.get("sound")===!1&&T.setEnabled(!1),I.setSound(T.enabled);let N=!1;const k=document.querySelector("#start"),B=document.querySelector("#restart");function q(){if(N)return it();b||(b=!0,I.hideIntro(),T.start(),Bs(E,s.spawn.x,s.spawn.y,s.spawn.z,s.spawn.heading),v.reset(E),I.hint(matchMedia("(pointer: coarse)").matches?"Hold Gas. The loop is straight ahead.":"Hold W. The loop is straight ahead.",4))}function W(){!b||N||(N=!0,k&&(k.textContent="Keep driving"),B&&(B.hidden=!1),I.showIntro())}function it(){N=!1,I.hideIntro(),i.update()}k?.addEventListener("click",q),B?.addEventListener("click",()=>{it(),Bs(E,s.spawn.x,s.spawn.y,s.spawn.z,s.spawn.heading),v.reset(E)}),document.querySelector("#menuBtn")?.addEventListener("click",()=>N?it():W()),addEventListener("keydown",H=>{(!b||N)&&H.code==="Enter"||!b&&H.code==="Space"?q():H.code==="Escape"&&(N?it():W())});const ot=new Set;function bt(){for(const H of s.places){if(ot.has(H.key))continue;let j;if(H.ring?j=Math.hypot(E.pos.x,E.pos.z)>H.ring:(j=Math.hypot(E.pos.x-H.x,E.pos.z-H.z)<H.r,j&&H.above!=null&&(j=E.pos.y-Pe(E.pos.x,E.pos.z)>H.above)),j){ot.add(H.key),I.hint(H.text,2.6);break}}}const dt=new Set;function yt(H,j,At=2.6){dt.has(H)||(dt.add(H),I.hint(j,At))}function J(){for(const H of E.events)if(H.type==="landed"){const j=Math.min(1,H.airTime/2.5);d.landing(E.pos.x,E.pos.y-.9,E.pos.z,j),T.thump(.3+j*.7),v.kick(.2+j*.5);const At=H.tricks.length?H.tricks.join(" + "):H.size;At&&(I.trick(At,H.tricks.length&&H.size?H.size:`${H.airTime.toFixed(1)}s in the air`),T.chime(H.tricks.length?1.25:1)),!H.tricks.length&&H.airTime>1.2&&yt("flip","In the air, steer to spin, and W/S (or drag up/down) to flip",3.5)}else H.type==="trick"?(I.trick(H.name==="loop"?"Loop!":"Wall ride"),T.chime(1.4)):H.type==="pad"?(T.chime(.8),v.kick(.15)):H.type==="bump"||H.type==="thud"?(T.thump(H.strength*.7),v.kick(H.strength*.5)):H.type==="splash"?(d.splash(E.pos.x,E.pos.y-.6,E.pos.z,H.strength,E.vel.x,E.vel.z),T.splash(H.strength),v.kick(.2*H.strength)):H.type==="balloon"?(I.trick("Boing!","off a balloon"),T.chime(1.6),v.kick(.3)):H.type==="flipback"?yt("flipback","Back on your wheels",1.6):H.type==="unstuck"&&I.hint("Lifted out",1.2)}let Q=!1;addEventListener("resize",()=>{e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),n.setPixelRatio(Math.min(devicePixelRatio||1,Ve.pixelRatio)),n.setSize(innerWidth,innerHeight),p.setSize()},{passive:!0}),document.addEventListener("visibilitychange",()=>{Q=document.hidden,T.setPaused(Q),Q||i.update()});let ut=0,It=60,pt=0,Ct=0,qt=!1;const tt=new F().copy(E.pos),at={throttle:0,brake:0,steer:0,boost:!1,handbrake:!1,pitch:0,roll:0};window.__dustline={car:E,layout:s,camera:e,renderer:n,scene:t,quality:Ve,get fps(){return Math.round(It)},teleport(H,j,At=0,Nt=null){b=!0,I.hideIntro(),Bs(E,H,Nt??Pe(H,j)+1.5,j,At),v.reset(E)},go:q};function ct(){if(requestAnimationFrame(ct),Q)return;i.update();const H=Math.min(i.getDelta(),.05),j=i.getElapsed();H>0&&(It=It*.95+1/H*.05);const At=b&&!N?O.sample(H,E.grounded===0):at;if(At.touchBrake&&Math.abs(At.steer)>.35&&E.forwardSpeed>12&&(At.handbrake=!0,At.brake=0),N||xv(E,At,r,H),b&&(J(),bt()),E.events.length=0,Av(S,E,H,j),h.update(j),u.update(H,E.time),b&&!N&&s.hoops.forEach((Nt,Gt)=>{dv(Nt,tt,E.pos)&&(I.trick("Through the hoop!"),T.chime(1.8),u.flashHoop(Gt))}),tt.copy(E.pos),e.position.distanceTo(h.mistAt)<600)for(Ct+=H*14;Ct>1;)Ct--,d.mist(h.mistAt.x,h.mistAt.y,h.mistAt.z);E.inWater&&E.speed>3&&Math.random()<H*20&&d.splash(E.pos.x,E.pos.y-.6,E.pos.z,Math.min(.5,E.speed/30),E.vel.x,E.vel.z),b&&h.under(E.pos)?(Math.random()<H*25&&d.splash(E.pos.x,E.pos.y+.8,E.pos.z,.4),qt||(qt=!0,yt("underFalls","Under the falls!",1.8),T.splash(.6))):qt=!1,d.update(H,E),c.update(H,E,j),a.update(j),l.update(j),b?v.update(H,E,{boosting:At.boost||E.onPad}):(pt+=H*.12,e.position.set(E.pos.x+Math.sin(pt)*11,E.pos.y+3.2,E.pos.z+Math.cos(pt)*11),e.up.set(0,1,0),e.lookAt(E.pos.x,E.pos.y+.6,E.pos.z)),d.setPixelScale(n.domElement.height,e.fov),x.target.position.copy(E.pos),x.position.copy(E.pos).addScaledVector(f,300),T.update(H,E,At),I.update(H,E),o.follow(e.position),p.render(t,e),!Ve.degraded&&H>.042?++ut>240&&Bx(n,x)&&(p.setSize(),I.hint("Easing off the detail so it stays smooth",2.2)):ut>0&&ut--}ct()}function h_(n){for(const[t,e,i,s,r]of[[1750,380,640,13208170,3],[2700,520,980,14198926,9]]){const a=[];for(let d=0;d<220;d++){const h=d/220*Math.PI*2,u=(d+1)/220*Math.PI*2,p=A=>e+(i-e)*mi(Math.cos(A)*6+r,Math.sin(A)*6,4)**1.4*1.6,m=(A,M)=>[Math.cos(A)*t,M,Math.sin(A)*t],x=m(h,-60),g=m(u,-60),f=m(h,p(h)),_=m(u,p(u));a.push(...x,...f,...g,...g,...f,..._)}const l=new _e;l.setAttribute("position",new pe(new Float32Array(a),3));const c=new jt(l,new yl({color:new kt(s),side:Ye,fog:!0}));c.material.side=2,n.add(c)}}try{u_()}catch(n){console.error(n);const t=document.querySelector("#error");t&&(t.style.display="grid")}
