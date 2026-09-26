(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Pt=-1,st=0,ke={accel:.03,outerPeriod:2400,outerRadius:200,startShips:4,startCredits:400,income:{planet:1,moon:.5,station:.6,asteroid:.3},mineIncome:1.5,ship:{cost:150,time:45},structures:{shipyard:{name:"Shipyard",cost:400,time:90},mine:{name:"Mine",cost:200,time:45,only:["asteroid","moon"],maxLevel:3},defence:{name:"Guns",cost:250,time:50,maxLevel:3},lab:{name:"Research station",cost:300,time:60,maxLevel:3}},baseGuns:1,gunsPerDefence:2,coverShare:.5,fire:.12,gunRegen:.02,flipTime:4,demolishFee:.25,cancelRefund:.8,labSpeed:.5},tr={drives:{name:"Drives",text:["+15% thrust","+30% thrust","+45% thrust"],cost:[300,600,1e3],time:[90,150,240]},sensors:{name:"Sensors",text:["See further","See much further","See across the system"],cost:[250,500,900],time:[80,140,220]},intel:{name:"Intel",text:["Enemy fleet sizes","Enemy routes and landing points","Enemy arrival times and warnings"],cost:[300,550,850],time:[90,150,210]},weapons:{name:"Weapons",text:["+15% firepower","+30% firepower"],cost:[400,800],time:[120,200]},armour:{name:"Armour",text:["Ships take 12% less damage","Ships take 24% less damage"],cost:[400,800],time:[120,200]},industry:{name:"Industry",text:["Build 12% faster, mines +15%","Build 24% faster, mines +30%"],cost:[350,700],time:[100,180]}},Iu=[70,110,160,240],Si=(n,e,t)=>e===Pt||!n.tech?0:n.tech[e][t];function Qt(n,e,t,i=1){e===Pt||!n.stats||(n.stats.totals[e][t]+=i)}function sl(n){n.stats.series.push({t:n.time,p:n.credits.map((e,t)=>({ships:n.bodies.reduce((i,r)=>i+(r.owner===t?r.ships:0),0)+n.fleets.reduce((i,r)=>i+(r.owner===t?r.n:0),0),worlds:n.bodies.filter(i=>i.owner===t).length,income:Rc(n,t),credits:e}))})}const Uu=(n,e)=>ke.accel*(1+.15*Si(n,e,"drives")),al=(n,e)=>1+.15*Si(n,e,"weapons"),ol=(n,e)=>1-.12*Si(n,e,"armour"),Nu=(n,e)=>1+.12*Si(n,e,"industry");function Ar(n,e,t){const i=n.tech[e][t],r=tr[t];return i<r.cost.length?{level:i+1,cost:r.cost[i],time:r.time[i],text:r.text[i]}:null}function _s(n,e){const t=n.bodies.reduce((i,r)=>i+(r.owner===e?To(r,"lab"):0),0);return 1+ke.labSpeed*t}function yo(n,e,t){const i=Ar(n,e,t);return i?n.tech[e].project?"already researching":n.credits[e]<i.cost?"not enough credits":null:"complete"}function yc(n,e,t){if(yo(n,e,t))return!1;const i=Ar(n,e,t);return n.credits[e]-=i.cost,Qt(n,e,"spent",i.cost),n.tech[e].project={key:t,left:i.time,total:i.time},!0}function Eo(n,e){const t=Iu[Si(n,e,"sensors")],i=[];for(const a of n.bodies)a.owner===e&&i.push([vn(n,a,n.time),t]);for(const a of n.fleets)a.owner===e&&i.push([Tn(a,n.time),20]);for(const a of n.bodies)a.sieges.some(o=>o.owner===e)&&i.push([vn(n,a,n.time),20]);const r=a=>i.some(([o,l])=>Ec(o,a)<=l),s=new Set(n.bodies.filter(a=>a.owner===e||r(vn(n,a,n.time))).map(a=>a.id));return{owner:e,sees:r,bodies:s,intel:Si(n,e,"intel")}}function Ti(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Ec=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),Fu=["Vesper","Ardent","Halcyon","Morrow","Tessaly","Oberin","Calyx","Nadir"],Ou=["Io","Kell","Pim","Soren","Lark","Dace","Nym","Tove","Wren","Ossa"],Bu=["Tycho Yard","Ring One","Anchor","Meridian"],zu=["Ceres","Hygiea","Pallas","Thisbe","Egeria","Iris"],ll=n=>ke.outerPeriod*(n/ke.outerRadius)**1.5;function bc({seed:n=Date.now(),opponents:e=1}={}){const t=Ti(n),i=(d,h)=>{const y=d.filter(M=>!h.has(M)),A=y[Math.floor(t()*y.length)]??`${d[0]} ${h.size}`;return h.add(A),A},r=new Set,s=[],a=d=>(d.id=s.length,d.owner=Pt,d.ships=0,d.build=0,d.queue=0,d.structures=[],d.guns=d.kind==="planet"?2:1+Math.floor(t()*2),d.sieges=[],s.push(d),d),o=[];for(let d=0;d<6;d++){const h=d>=3&&t()<.7,y=h?3.2+t()*1.2:1.6+t()*1.1,A=d===0?0:h?1+Math.floor(t()*3):Math.floor(t()*2),M=[];for(let E=0;E<A;E++)M.push({r:y*1.8+3+E*3.2+t()*.8,size:.5+t()*.5,period:300+E*150+t()*120});o.push({giant:h,size:y,moons:M,station:!1})}const l=[1,2,3,4,5].sort(()=>t()-.5).slice(0,2);for(const d of l)o[d].station=!0;for(const d of o)d.reach=Math.max(d.size*1.6,d.station?d.size*1.9+1:0,...d.moons.map(h=>h.r+h.size));const c=16;let f=0,p=null;for(const[d,h]of o.entries())p?h.r=p.r+p.reach+h.reach+c+t()*10:h.r=30,d===4&&(f=p.r+p.reach+c,h.r=f+6+c+h.reach+t()*10),p=h;for(const d of o){const h=a({kind:"planet",name:i(Fu,r),parent:null,r:d.r,period:ll(d.r),phase:t()*Math.PI*2,incl:(t()-.5)*.06,size:d.size,giant:d.giant,hue:t()});for(const y of d.moons)a({kind:"moon",name:i(Ou,r),parent:h.id,r:y.r,period:y.period,phase:t()*Math.PI*2,incl:(t()-.5)*.3,size:y.size,hue:t()});d.station&&a({kind:"station",name:i(Bu,r),parent:h.id,r:d.size*1.9,period:200+t()*60,phase:t()*Math.PI*2,incl:.2,size:.45,hue:0})}for(let d=0;d<4;d++){const h=f+t()*6;a({kind:"asteroid",name:i(zu,r),parent:null,r:h,period:ll(h),phase:d/4*Math.PI*2+t()*.8,incl:(t()-.5)*.1,size:.5+t()*.4,hue:t()})}const u={bodies:s,fleets:[],players:e+1,time:0,winner:null,nextId:1},_=s.filter(d=>d.kind==="planet").slice(1,5),x=[_[Math.floor(t()*_.length)]];for(;x.length<u.players;){let d=null,h=-1;for(const y of _){if(x.includes(y))continue;const A=Math.min(...x.map(M=>Ec(vn(u,M,0),vn(u,y,0))));A>h&&(h=A,d=y)}x.push(d)}for(const d of s)d.kind==="station"&&d.structures.push({type:"shipyard",level:1,left:0});return x.forEach((d,h)=>{d.owner=h,d.ships=ke.startShips,d.home=!0,d.structures.push({type:"shipyard",level:1,left:0},{type:"defence",level:1,left:0}),d.guns=Ac(d)}),u.credits=Array.from({length:u.players},()=>ke.startCredits),u.stats={totals:Array.from({length:u.players},()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,earned:0,spent:0,research:0})),series:[]},u.tech=Array.from({length:u.players},()=>({drives:0,sensors:0,intel:0,weapons:0,armour:0,industry:0,project:null})),u}function Tc(n){return n.kind==="station"?2:n.kind==="asteroid"?1:n.kind==="moon"?n.size>.8?2:1:n.giant?4:n.size>2.2?3:2}const bo=n=>n.left<=0||n.next,wc=(n,e)=>n.structures.some(t=>t.type===e&&bo(t)),To=(n,e)=>n.structures.reduce((t,i)=>t+(i.type===e&&bo(i)?i.level:0),0),Ac=n=>ke.baseGuns+ke.gunsPerDefence*To(n,"defence"),Ca=(n,e)=>{if(n.owner===Pt)return 0;const t=1+.15*(e?Si(e,n.owner,"industry"):0);return ke.income[n.kind]+ke.mineIncome*To(n,"mine")*t},Rc=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?Ca(i,n):0),0),wo=n=>n.structures.filter(e=>e.type==="shipyard"&&bo(e)).length,ws=n=>Math.round(ke.structures[n.type].cost*ke.demolishFee);function Cc(n,e,t){return e.owner===Pt?"not yours":n.credits[e.owner]<ws(t)?"not enough credits":null}function Gu(n,e,t){return Cc(n,e,t)?!1:(n.credits[e.owner]-=ws(t),Qt(n,e.owner,"spent",ws(t)),e.structures=e.structures.filter(i=>i!==t),wo(e)||(e.build=0),!0)}function Hu(n,e){return e.owner===Pt||e.queue<1?!1:(e.queue-=1,n.credits[e.owner]+=Math.round(ke.ship.cost*ke.cancelRefund),e.queue===0&&(e.build=0),!0)}function Ao(n,e,t){const i=ke.structures[t];return e.owner===Pt?"not yours":i.only&&!i.only.includes(e.kind)?`${e.kind}s can't have one`:e.structures.length>=Tc(e)?"no free slots":n.credits[e.owner]<i.cost?"not enough credits":null}function Ki(n,e,t){if(Ao(n,e,t))return!1;const i=ke.structures[t];return n.credits[e.owner]-=i.cost,Qt(n,e.owner,"spent",i.cost),e.structures.push({type:t,level:1,left:i.time}),!0}const nr=n=>Math.round(ke.structures[n.type].cost*(n.level+1)*.75),Ro=n=>ke.structures[n.type].time*(1+n.level*.5);function Co(n,e,t){const i=ke.structures[t.type];return e.owner===Pt?"not yours":i.maxLevel?t.left>0?"busy":t.level>=i.maxLevel?"at max level":n.credits[e.owner]<nr(t)?"not enough credits":null:"can't be upgraded"}function Pa(n,e,t){return Co(n,e,t)?!1:(Qt(n,e.owner,"spent",nr(t)),n.credits[e.owner]-=nr(t),t.next=t.level+1,t.left=Ro(t),!0)}function Po(n,e){return e.owner===Pt?"not yours":wc(e,"shipyard")?n.credits[e.owner]<ke.ship.cost?"not enough credits":null:"needs a shipyard"}function Pc(n,e){return Po(n,e)?!1:(n.credits[e.owner]-=ke.ship.cost,Qt(n,e.owner,"spent",ke.ship.cost),e.queue+=1,!0)}function vn(n,e,t){const i=e.phase+2*Math.PI*t/e.period,r={x:Math.cos(i)*e.r,y:Math.sin(i)*e.r*e.incl,z:Math.sin(i)*e.r};if(e.parent!==null){const s=vn(n,n.bodies[e.parent],t);r.x+=s.x,r.y+=s.y,r.z+=s.z}return r}function cl(n,e,t){const r=vn(n,e,t-.5),s=vn(n,e,t+.5);return{x:(s.x-r.x)/(2*.5),y:(s.y-r.y)/(2*.5),z:(s.z-r.z)/(2*.5)}}const ku=14,Vu=n=>n.size*1.8+.4,Lc=(n,e)=>({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}),Jt=n=>Math.hypot(n.x,n.y,n.z);function Wu(n,e,t,i,r){const s={x:t.x-n.x-e.x*r,y:t.y-n.y-e.y*r,z:t.z-n.z-e.z*r},a=Lc(i,e),o=4/(r*r),l={x:o*s.x-a.x/r,y:o*s.y-a.y/r,z:o*s.z-a.z/r},c={x:3*a.x/r-o*s.x,y:3*a.y/r-o*s.y,z:3*a.z/r-o*s.z};return{a1:l,a2:c,need:Math.max(Jt(l),Jt(c))}}function Dc(n,e){const t=n.T/2,i=Math.min(e,t);let r=n.p0.x+n.v0.x*i+.5*n.a1.x*i*i,s=n.p0.y+n.v0.y*i+.5*n.a1.y*i*i,a=n.p0.z+n.v0.z*i+.5*n.a1.z*i*i,o=n.v0.x+n.a1.x*i,l=n.v0.y+n.a1.y*i,c=n.v0.z+n.a1.z*i;if(e>t){const f=e-t;r+=o*f+.5*n.a2.x*f*f,s+=l*f+.5*n.a2.y*f*f,a+=c*f+.5*n.a2.z*f*f,o+=n.a2.x*f,l+=n.a2.y*f,c+=n.a2.z*f}return{x:r,y:s,z:a,vx:o,vy:l,vz:c}}function Xu(n){for(let e=1;e<64;e++)if(Jt(Dc(n,e/64*n.T))<ku)return!1;return!0}function gi(n,e,t,i=n.time){const r=Uu(n,e.owner),s=vn(n,e,i),a=cl(n,e,i),o=c=>{const f=vn(n,t,i+c),p=Lc(s,f),u=Jt(p)||1,m=Vu(t),_={x:f.x+p.x/u*m,y:f.y+p.y/u*m,z:f.z+p.z/u*m},x=cl(n,t,i+c);return{p0:s,v0:a,p1:_,v1:x,T:c,...Wu(s,a,_,x,c)}};let l=1;for(let c=2;c<2e4;c+=2){let f=o(c);if(f.need>r){l=c;continue}let p=l,u=c;for(let m=0;m<30;m++){const _=(p+u)/2;o(_).need>r?p=_:u=_}if(f=o(u),Xu(f))return f;l=c}return o(2e4)}function yr(n,e,t,i){if(i=Math.min(Math.floor(i),e.ships),i<1||e===t||n.winner!==null)return null;const r=gi(n,e,t);e.ships-=i;const s={id:n.nextId++,owner:e.owner,n:i,from:e.id,to:t.id,...r,t0:n.time};return n.fleets.push(s),s}function Tn(n,e){const t=Math.min(n.T,Math.max(0,e-n.t0)),i=Dc(n,t),r=n.T/2,s=r-ke.flipTime/2,a=Math.abs(t-r)<ke.flipTime/2,o=Jt(n.a1)>1e-9?{x:n.a1.x/Jt(n.a1),y:n.a1.y/Jt(n.a1),z:n.a1.z/Jt(n.a1)}:{x:0,y:0,z:1},l=Jt(n.a2)>1e-9?{x:n.a2.x/Jt(n.a2),y:n.a2.y/Jt(n.a2),z:n.a2.z/Jt(n.a2)}:o;let c=t<r?o:l;if(a){const f=(1-Math.cos((t-s)/ke.flipTime*Math.PI))/2;if(c={x:o.x+(l.x-o.x)*f,y:o.y+(l.y-o.y)*f,z:o.z+(l.z-o.z)*f},Jt(c)<.3){const m={x:-o.z,y:0,z:o.x},_=Math.sin(f*Math.PI)*.8;c={x:c.x+m.x*_,y:c.y+m.y*_,z:c.z+m.z*_}}const u=Jt(c)||1;c={x:c.x/u,y:c.y/u,z:c.z/u}}return{x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz,nx:c.x,ny:c.y,nz:c.z,progress:t/n.T,burning:!a&&t<n.T,flipping:a,phase:t<r?1:2}}function Lo(n,e){if(e.parent===null)return 0;const t=n.bodies[e.parent];return t.owner===e.owner?t.guns*ke.coverShare:0}function qu(n,e,t){const i=e.sieges.reduce((a,o)=>a+o.n,0),r=(e.ships+e.guns+Lo(n,e))*al(n,e.owner);let s=0;for(const a of e.sieges){const o=i>0?a.n/i:0;a.dmg=(a.dmg||0)+ke.fire*r*o*ol(n,a.owner)*t,s+=a.n*al(n,a.owner)}for(e.dmg=(e.dmg||0)+ke.fire*s*ol(n,e.owner)*t,e.fighting=!0;e.dmg>=1&&e.ships+e.guns>0;)e.dmg-=1,e.ships>0?(e.ships-=1,Qt(n,e.owner,"lost"),Qt(n,e.sieges.slice().sort((a,o)=>o.n-a.n)[0].owner,"killed")):e.guns=Math.max(0,e.guns-1),e.lostDef=(e.lostDef||0)+1;for(const a of e.sieges)for(;a.dmg>=1&&a.n>0;)a.dmg-=1,a.n-=1,e.lostAtk=(e.lostAtk||0)+1,Qt(n,a.owner,"lost"),Qt(n,e.owner,"killed");if(e.sieges=e.sieges.filter(a=>a.n>0),e.ships+e.guns<=0&&e.sieges.length){const a=e.sieges.sort((o,l)=>l.n-o.n)[0];Qt(n,e.owner,"worldsLost"),Qt(n,a.owner,"captured"),e.owner=a.owner,e.ships=a.n,e.guns=0,e.dmg=0,e.build=0,e.slips=[],e.queue=0,e.structures=e.structures.filter(o=>o.left<=0||o.next);for(const o of e.structures)o.next&&(delete o.next,o.left=0);e.sieges=e.sieges.filter(o=>o!==a),e.captured=!0}e.sieges.length||(e.dmg=0,e.fighting=!1)}function Do(n,e){if(n.winner!==null)return;n.stats&&(!n.stats.series.length||n.time-n.stats.series.at(-1).t>=10)&&sl(n),n.time+=e;for(const i of n.bodies){if(i.owner===Pt)continue;n.credits[i.owner]+=Ca(i,n)*e,Qt(n,i.owner,"earned",Ca(i,n)*e);const r=Nu(n,i.owner);if(i.sieges.length)continue;for(const o of i.structures)o.left<=0||(o.left=Math.max(0,o.left-e*r),o.left===0&&o.next&&(o.level=o.next,delete o.next));const s=wo(i);for(i.slips||(i.slips=[]);i.slips.length<Math.min(s,i.queue);)i.slips.push(0);i.slips.length=Math.min(i.slips.length,s,i.queue),i.slips=i.slips.map(o=>o+e*r/ke.ship.time);for(const o of i.slips)o>=1&&(i.queue-=1,i.ships+=1,Qt(n,i.owner,"built"));i.slips=i.slips.filter(o=>o<1),i.build=i.slips.length?Math.max(...i.slips):0;const a=Ac(i);i.guns<a&&(i.guns=Math.min(a,i.guns+ke.gunRegen*e))}for(const[i,r]of(n.tech||[]).entries())r.project&&(r.project.left-=e*_s(n,i),r.project.left<=0&&(r[r.project.key]+=1,r.project=null,Qt(n,i,"research")));n.fleets=n.fleets.filter(i=>{if(n.time-i.t0<i.T)return!0;const r=n.bodies[i.to];if(r.owner===i.owner)r.ships+=i.n;else{const s=r.sieges.find(a=>a.owner===i.owner);s?s.n+=i.n:r.sieges.push({owner:i.owner,n:i.n})}return!1});for(const i of n.bodies)i.sieges.length&&qu(n,i,e);const t=new Set;for(const i of n.bodies){i.owner!==Pt&&t.add(i.owner);for(const r of i.sieges)t.add(r.owner)}for(const i of n.fleets)t.add(i.owner);t.has(st)?t.size===1&&(n.winner=st):n.winner=[...t][0]??Pt,n.winner!==null&&n.stats&&sl(n)}const $u={easy:{think:8,margin:1.8},normal:{think:5,margin:1.5},hard:{think:3,margin:1.3}};function Ic(n,e,t){return{owner:n,d:$u[e],rand:t,clock:5+t()*5,plan:null}}function Uc(n,e,t){if(e.clock-=t,e.clock>0||n.winner!==null)return;e.clock=e.d.think*(.7+e.rand()*.6);const i=n.bodies.filter(x=>x.owner===e.owner),r=Eo(n,e.owner),s=x=>x.owner===e.owner||r.intel>=2&&r.sees(Tn(x,n.time)),a=x=>x.owner===e.owner||r.intel>=1?x.n:5,o=(x,d)=>n.fleets.filter(h=>h.to===x.id&&h.owner===e.owner===d&&s(h)).reduce((h,y)=>h+a(y),0),l=x=>r.bodies.has(x.id)?x.ships:4,c=x=>r.bodies.has(x.id)?x.guns+Lo(n,x):3;if(Yu(n,e,i,o))return;let f=null;for(const x of i){const d=x.ships-Math.ceil(o(x,!1)*1.2)-1;if(!(d<2))for(const h of n.bodies){if(h.owner===e.owner)continue;const{T:y}=gi(n,x,h),A=h.owner===Pt||!wc(h,"shipyard")?0:Math.min(h.queue,y/ke.ship.time),M=Math.ceil((l(h)+c(h)+A)*e.d.margin)+1-o(h,!0);if(M<1||M>d)continue;const b=(h.kind==="planet"?3:h.kind==="station"?2:1)/(M+y/30);(!f||b>f.score)&&(f={s:x,t:h,need:M,score:b})}}if(f){yr(n,f.s,f.t,f.need);return}const p=x=>x.ships-Math.ceil(o(x,!1)*1.2)-1;if(e.plan){const x=n.bodies[e.plan.target],d=n.bodies[e.plan.stage];if(x.owner===e.owner||d.owner!==e.owner||n.time>e.plan.until)e.plan=null;else if(d.ships>=e.plan.need){yr(n,d,x,d.ships-1),e.plan=null;return}else{const h=i.filter(y=>y!==d&&p(y)>=2&&!n.fleets.some(A=>A.from===y.id&&A.to===d.id)).sort((y,A)=>gi(n,y,d).T-gi(n,A,d).T)[0];h&&yr(n,h,d,p(h));return}}const u=i.reduce((x,d)=>x+Math.max(0,p(d)),0);let m=null,_=1/0;for(const x of n.bodies){if(x.owner===e.owner)continue;const d=Math.ceil((Math.max(l(x),6)+c(x))*e.d.margin)+2;d<=u&&d<_&&(m=x,_=d)}if(m&&i.length>1){const x=i.slice().sort((d,h)=>gi(n,d,m).T-gi(n,h,m).T)[0];e.plan={target:m.id,stage:x.id,need:_,until:n.time+900}}}function Yu(n,e,t,i){const r=x=>i(x,!1)>0||x.sieges.length,s=(x,d)=>!Ao(n,x,d),a=t.find(x=>r(x)&&s(x,"defence")&&x.structures.filter(d=>d.type==="defence").length<2);if(a)return Ki(n,a,"defence");const o=t.find(x=>(x.kind==="asteroid"||x.kind==="moon")&&!x.structures.some(d=>d.type==="mine")&&s(x,"mine"));if(o)return Ki(n,o,"mine");const l=n.credits[e.owner];for(const x of t)for(const d of x.structures)if(!Co(n,x,d)&&(d.type==="mine"&&l>nr(d)+ke.ship.cost||d.type==="defence"&&(r(x)||l>nr(d)+200)))return Pa(n,x,d);const f=["sensors","drives","intel","industry","weapons","armour","drives","sensors","weapons","armour","industry","intel","drives","sensors","intel"].find(x=>Ar(n,e.owner,x));if(f&&!yo(n,e.owner,f)&&l>Ar(n,e.owner,f).cost+ke.ship.cost)return yc(n,e.owner,f);if(!t.reduce((x,d)=>x+d.structures.filter(h=>h.type==="lab").length,0)&&l>700){const x=t.find(d=>s(d,"lab")&&d.kind!=="asteroid");if(x)return Ki(n,x,"lab")}if(t.filter(x=>x.structures.some(d=>d.type==="shipyard")).length<2&&e.rand()<.5){const x=t.filter(d=>d.kind==="planet"&&s(d,"shipyard")).sort((d,h)=>h.size-d.size)[0];if(x)return Ki(n,x,"shipyard")}const m=t.filter(x=>!Po(n,x)&&x.queue<3).sort((x,d)=>x.queue-d.queue)[0];if(m&&e.rand()<.8)return Pc(n,m);const _=t.find(x=>x.home)||t[0];return _&&n.credits[e.owner]>300&&s(_,"defence")?Ki(n,_,"defence"):!1}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="186",Ku=0,ul=1,Zu=2,xs=1,Ju=2,Mr=3,yi=0,jt=1,mn=2,Vn=0,Er=1,Hn=2,fl=3,dl=4,Qu=5,Zi=100,ju=101,ef=102,tf=103,nf=104,rf=200,sf=201,af=202,of=203,Nc=204,Fc=205,lf=206,cf=207,uf=208,ff=209,df=210,hf=211,pf=212,mf=213,gf=214,La=0,Da=1,Ia=2,Rr=3,Ua=4,Na=5,Fa=6,Oa=7,Oc=0,_f=1,xf=2,Pn=0,Bc=1,zc=2,Gc=3,Hc=4,kc=5,Vc=6,Wc=7,Xc=300,Ei=301,ir=302,$s=303,Ys=304,Os=306,Ba=1e3,kn=1001,za=1002,Nt=1003,vf=1004,Gr=1005,Ht=1006,Ks=1007,xi=1008,an=1009,qc=1010,$c=1011,Cr=1012,Uo=1013,Dn=1014,An=1015,In=1016,No=1017,Fo=1018,Pr=1020,Yc=35902,Kc=35899,Zc=1021,Jc=1022,xn=1023,qn=1026,vi=1027,Qc=1028,Oo=1029,bi=1030,Bo=1031,zo=1033,vs=33776,Ms=33777,Ss=33778,ys=33779,Ga=35840,Ha=35841,ka=35842,Va=35843,Wa=36196,Xa=37492,qa=37496,$a=37488,Ya=37489,As=37490,Ka=37491,Za=37808,Ja=37809,Qa=37810,ja=37811,eo=37812,to=37813,no=37814,io=37815,ro=37816,so=37817,ao=37818,oo=37819,lo=37820,co=37821,uo=36492,fo=36494,ho=36495,po=36283,mo=36284,Rs=36285,go=36286,Mf=3200,_o=0,Sf=1,ii="",rn="srgb",Cs="srgb-linear",Ps="linear",ft="srgb",Zs=7680,yf=519,Ef=512,bf=513,Tf=514,Go=515,wf=516,Af=517,Ho=518,Rf=519,jc=35044,hl="300 es",Rn=2e3,Lr=2001;function Cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pf(){const n=Ls("canvas");return n.style.display="block",n}const pl={};function Ds(...n){const e="THREE."+n.shift();console.log(e,...n)}function eu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=eu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=eu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ji(...n){const e=n.join(" ");e in pl||(pl[e]=!0,Oe(...n))}function Lf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Df={[La]:Da,[Ia]:Fa,[Ua]:Oa,[Rr]:Na,[Da]:La,[Fa]:Ia,[Oa]:Ua,[Na]:Rr};class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const br=Math.PI/180,Dr=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function ko(n,e){return(n%e+e)%e}function If(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Uf(n,e,t){return n!==e?(t-n)/(e-n):0}function Tr(n,e,t){return(1-t)*n+t*e}function Nf(n,e,t,i){return Tr(n,e,1-Math.exp(-t*i))}function Ff(n,e=1){return e-Math.abs(ko(n,e*2)-e)}function Of(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gf(n,e){return n+Math.random()*(e-n)}function Hf(n){return n*(.5-Math.random())}function kf(n){n!==void 0&&(ml=n);let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(n){return n*br}function Wf(n){return n*Dr}function Xf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function qf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $f(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),f=a((e+i)/2),p=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*f,l*p,l*u,o*c);break;case"YZY":n.set(l*u,o*f,l*p,o*c);break;case"ZXZ":n.set(l*p,l*u,o*f,o*c);break;case"XZX":n.set(o*f,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*f,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*f,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ui={DEG2RAD:br,RAD2DEG:Dr,generateUUID:Wn,clamp:Qe,euclideanModulo:ko,mapLinear:If,inverseLerp:Uf,lerp:Tr,damp:Nf,pingpong:Ff,smoothstep:Of,smootherstep:Bf,randInt:zf,randFloat:Gf,randFloatSpread:Hf,seededRandom:kf,degToRad:Vf,radToDeg:Wf,isPowerOfTwo:Xf,ceilPowerOfTwo:qf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Yf,normalize:dt,denormalize:gn},Qo=class Qo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qo.prototype.isVector2=!0;let ze=Qo;class or{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],u=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(p!==x||l!==u||c!==m||f!==_){let d=l*u+c*m+f*_+p*x;d<0&&(u=-u,m=-m,_=-_,x=-x,d=-d);let h=1-o;if(d<.9995){const y=Math.acos(d),A=Math.sin(y);h=Math.sin(h*y)/A,o=Math.sin(o*y)/A,l=l*h+u*o,c=c*h+m*o,f=f*h+_*o,p=p*h+x*o}else{l=l*h+u*o,c=c*h+m*o,f=f*h+_*o,p=p*h+x*o;const y=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=y,c*=y,f*=y,p*=y}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+f*p+l*m-c*u,e[t+1]=l*_+f*u+c*p-o*m,e[t+2]=c*_+f*m+o*u-l*p,e[t+3]=f*_-o*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),u=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*f*p+c*m*_,this._y=c*m*p-u*f*_,this._z=c*f*_+u*m*p,this._w=c*f*p-u*m*_;break;case"YXZ":this._x=u*f*p+c*m*_,this._y=c*m*p-u*f*_,this._z=c*f*_-u*m*p,this._w=c*f*p+u*m*_;break;case"ZXY":this._x=u*f*p-c*m*_,this._y=c*m*p+u*f*_,this._z=c*f*_+u*m*p,this._w=c*f*p-u*m*_;break;case"ZYX":this._x=u*f*p-c*m*_,this._y=c*m*p+u*f*_,this._z=c*f*_-u*m*p,this._w=c*f*p+u*m*_;break;case"YZX":this._x=u*f*p+c*m*_,this._y=c*m*p+u*f*_,this._z=c*f*_-u*m*p,this._w=c*f*p-u*m*_;break;case"XZY":this._x=u*f*p-c*m*_,this._y=c*m*p-u*f*_,this._z=c*f*_+u*m*p,this._w=c*f*p+u*m*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],p=t[10],u=i+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jo=class jo{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jo.prototype.isVector3=!0;let D=jo;const Js=new D,gl=new or,el=class el{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],m=i[5],_=i[8],x=r[0],d=r[3],h=r[6],y=r[1],A=r[4],M=r[7],E=r[2],b=r[5],R=r[8];return s[0]=a*x+o*y+l*E,s[3]=a*d+o*A+l*b,s[6]=a*h+o*M+l*R,s[1]=c*x+f*y+p*E,s[4]=c*d+f*A+p*b,s[7]=c*h+f*M+p*R,s[2]=u*x+m*y+_*E,s[5]=u*d+m*A+_*b,s[8]=u*h+m*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,u=o*l-f*s,m=c*s-a*l,_=t*p+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=p*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=u*x,e[4]=(f*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qs.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qs.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};el.prototype.isMatrix3=!0;let Ge=el;const Qs=new Ge,_l=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){const n={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cs]:{primaries:e,whitePoint:i,transfer:Ps,toXYZ:_l,fromXYZ:xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:_l,fromXYZ:xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const je=Kf();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class Zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Di===void 0&&(Di=Ls("canvas")),Di.width=e.width,Di.height=e.height;const r=Di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jf=0;class Vo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let Qf=0;const ea=new D;class kt extends wi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=kn,r=kn,s=Ht,a=xi,o=xn,l=an,c=kt.DEFAULT_ANISOTROPY,f=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Wn(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Xc;kt.DEFAULT_ANISOTROPY=1;const tl=class tl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],u=l[1],m=l[5],_=l[9],x=l[2],d=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(m+1)/2,E=(h+1)/2,b=(f+u)/4,R=(p+x)/4,v=(_+d)/4;return A>M&&A>E?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=R/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=v/s),this.set(i,r,s,t),this}let y=Math.sqrt((d-_)*(d-_)+(p-x)*(p-x)+(u-f)*(u-f));return Math.abs(y)<.001&&(y=1),this.x=(d-_)/y,this.y=(p-x)/y,this.z=(u-f)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tl.prototype.isVector4=!0;let Et=tl;class jf extends wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends jf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tu extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Fs=class Fs{constructor(e,t,i,r,s,a,o,l,c,f,p,u,m,_,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,p,u,m,_,x,d)}set(e,t,i,r,s,a,o,l,c,f,p,u,m,_,x,d){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=m,h[7]=_,h[11]=x,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=a*f,m=a*p,_=o*f,x=o*p;t[0]=l*f,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,m=l*p,_=c*f,x=c*p;t[0]=u+x*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=m*o-_,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,m=l*p,_=c*f,x=c*p;t[0]=u-x*o,t[4]=-a*p,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*f,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,m=a*p,_=o*f,x=o*p;t[0]=l*f,t[4]=_*c-m,t[8]=u*c+x,t[1]=l*p,t[5]=x*c+u,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*f,t[4]=x-u*p,t[8]=_*p+m,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*p+_,t[10]=u-x*p}else if(e.order==="XZY"){const u=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*f,t[4]=-p,t[8]=c*f,t[1]=u*p+x,t[5]=a*f,t[9]=m*p-_,t[2]=_*p-m,t[6]=o*f,t[10]=x*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Qn.crossVectors(i,tn),Qn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Qn.crossVectors(i,tn)),Qn.normalize(),Hr.crossVectors(tn,Qn),r[0]=Qn.x,r[4]=Hr.x,r[8]=tn.x,r[1]=Qn.y,r[5]=Hr.y,r[9]=tn.y,r[2]=Qn.z,r[6]=Hr.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],m=i[13],_=i[2],x=i[6],d=i[10],h=i[14],y=i[3],A=i[7],M=i[11],E=i[15],b=r[0],R=r[4],v=r[8],T=r[12],P=r[1],N=r[5],B=r[9],V=r[13],O=r[2],F=r[6],$=r[10],X=r[14],re=r[3],Z=r[7],ee=r[11],te=r[15];return s[0]=a*b+o*P+l*O+c*re,s[4]=a*R+o*N+l*F+c*Z,s[8]=a*v+o*B+l*$+c*ee,s[12]=a*T+o*V+l*X+c*te,s[1]=f*b+p*P+u*O+m*re,s[5]=f*R+p*N+u*F+m*Z,s[9]=f*v+p*B+u*$+m*ee,s[13]=f*T+p*V+u*X+m*te,s[2]=_*b+x*P+d*O+h*re,s[6]=_*R+x*N+d*F+h*Z,s[10]=_*v+x*B+d*$+h*ee,s[14]=_*T+x*V+d*X+h*te,s[3]=y*b+A*P+M*O+E*re,s[7]=y*R+A*N+M*F+E*Z,s[11]=y*v+A*B+M*$+E*ee,s[15]=y*T+A*V+M*X+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],u=e[10],m=e[14],_=e[3],x=e[7],d=e[11],h=e[15],y=l*m-c*u,A=o*m-c*p,M=o*u-l*p,E=a*m-c*f,b=a*u-l*f,R=a*p-o*f;return t*(x*y-d*A+h*M)-i*(_*y-d*E+h*b)+r*(_*A-x*E+h*R)-s*(_*M-x*b+d*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],u=e[10],m=e[11],_=e[12],x=e[13],d=e[14],h=e[15],y=t*o-i*a,A=t*l-r*a,M=t*c-s*a,E=i*l-r*o,b=i*c-s*o,R=r*c-s*l,v=f*x-p*_,T=f*d-u*_,P=f*h-m*_,N=p*d-u*x,B=p*h-m*x,V=u*h-m*d,O=y*V-A*B+M*N+E*P-b*T+R*v;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=(o*V-l*B+c*N)*F,e[1]=(r*B-i*V-s*N)*F,e[2]=(x*R-d*b+h*E)*F,e[3]=(u*b-p*R-m*E)*F,e[4]=(l*P-a*V-c*T)*F,e[5]=(t*V-r*P+s*T)*F,e[6]=(d*M-_*R-h*A)*F,e[7]=(f*R-u*M+m*A)*F,e[8]=(a*B-o*P+c*v)*F,e[9]=(i*P-t*B-s*v)*F,e[10]=(_*b-x*M+h*y)*F,e[11]=(p*M-f*b-m*y)*F,e[12]=(o*T-a*N-l*v)*F,e[13]=(t*N-i*T+r*v)*F,e[14]=(x*A-_*E-d*y)*F,e[15]=(f*E-p*A+u*y)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,p=o+o,u=s*c,m=s*f,_=s*p,x=a*f,d=a*p,h=o*p,y=l*c,A=l*f,M=l*p,E=i.x,b=i.y,R=i.z;return r[0]=(1-(x+h))*E,r[1]=(m+M)*E,r[2]=(_-A)*E,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(u+h))*b,r[6]=(d+y)*b,r[7]=0,r[8]=(_+A)*R,r[9]=(d-y)*R,r[10]=(1-(u+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),l=Ii.set(r[8],r[9],r[10]).length();s<0&&(a=-a),dn.copy(this);const c=1/a,f=1/o,p=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=f,dn.elements[5]*=f,dn.elements[6]*=f,dn.elements[8]*=p,dn.elements[9]*=p,dn.elements[10]*=p,t.setFromRotationMatrix(dn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Rn,l=!1){const c=this.elements,f=2*s/(t-e),p=2*s/(i-r),u=(t+e)/(t-e),m=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===Rn)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Lr)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Rn,l=!1){const c=this.elements,f=2/(t-e),p=2/(i-r),u=-(t+e)/(t-e),m=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===Rn)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Lr)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Fs.prototype.isMatrix4=!0;let vt=Fs;const Ii=new D,dn=new vt,td=new D(0,0,0),nd=new D(1,1,1),Qn=new D,Hr=new D,tn=new D,vl=new vt,Ml=new or;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let id=0;const Sl=new D,Ui=new or,Nn=new vt,kr=new D,ur=new D,rd=new D,sd=new or,yl=new D(1,0,0),El=new D(0,1,0),bl=new D(0,0,1),Tl={type:"added"},ad={type:"removed"},Ni={type:"childadded",child:null},ta={type:"childremoved",child:null};class Ft extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new D,t=new oi,i=new or,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ge}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(El,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(El,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ur,kr,this.up):Nn.lookAt(kr,ur,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _n extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const od={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),h=this._getHandJoint(c,x);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(od)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=ko(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ia(a,s,e+1/3),this.g=ia(a,s,e),this.b=ia(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return je.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=rn){je.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Vr);const i=Tr(jn.h,Vr.h,t),r=Tr(jn.s,Vr.s,t),s=Tr(jn.l,Vr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new He;He.NAMES=iu;class ld extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new D,Fn=new D,ra=new D,On=new D,Fi=new D,Oi=new D,wl=new D,sa=new D,aa=new D,oa=new D,la=new Et,ca=new Et,ua=new Et;class un{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),Fn.subVectors(i,t),ra.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Fn),l=hn.dot(ra),c=Fn.dot(Fn),f=Fn.dot(ra),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,m=(c*l-o*f)*u,_=(a*f-o*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return la.setScalar(0),ca.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,i),ua.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(la,s.x),a.addScaledVector(ca,s.y),a.addScaledVector(ua,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),Fn.subVectors(e,t),hn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Fi.subVectors(r,i),Oi.subVectors(s,i),sa.subVectors(e,i);const l=Fi.dot(sa),c=Oi.dot(sa);if(l<=0&&c<=0)return t.copy(i);aa.subVectors(e,r);const f=Fi.dot(aa),p=Oi.dot(aa);if(f>=0&&p<=f)return t.copy(r);const u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Fi,a);oa.subVectors(e,s);const m=Fi.dot(oa),_=Oi.dot(oa);if(_>=0&&m<=_)return t.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Oi,o);const d=f*_-m*p;if(d<=0&&p-f>=0&&m-_>=0)return wl.subVectors(s,r),o=(p-f)/(p-f+(m-_)),t.copy(r).addScaledVector(wl,o);const h=1/(d+x+u);return a=x*h,o=u*h,t.copy(i).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Or{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Xr.subVectors(this.max,fr),Bi.subVectors(e.a,fr),zi.subVectors(e.b,fr),Gi.subVectors(e.c,fr),ei.subVectors(zi,Bi),ti.subVectors(Gi,zi),fi.subVectors(Bi,Gi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-fi.z,fi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,fi.z,0,-fi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-fi.y,fi.x,0];return!fa(t,Bi,zi,Gi,Xr)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Bi,zi,Gi,Xr))?!1:(qr.crossVectors(ei,ti),t=[qr.x,qr.y,qr.z],fa(t,Bi,zi,Gi,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],pn=new D,Wr=new Or,Bi=new D,zi=new D,Gi=new D,ei=new D,ti=new D,fi=new D,fr=new D,Xr=new D,qr=new D,di=new D;function fa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){di.fromArray(n,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),f=i.dot(di);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Rt=new D,$r=new ze;let cd=0;class Ut extends wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ru extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class su extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ud=new Or,dr=new D,da=new D;class Br{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ud.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(da)),this.expandByPoint(dr.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fd=0;const cn=new vt,ha=new Ft,Hi=new D,nn=new Or,hr=new Or,It=new D;class St extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cf(e)?su:ru)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(nn.min,hr.min),nn.expandByPoint(It),It.addVectors(nn.max,hr.max),nn.expandByPoint(It)):(nn.expandByPoint(hr.min),nn.expandByPoint(hr.max))}nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)It.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),It.add(Hi)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ut(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new D,l[v]=new D;const c=new D,f=new D,p=new D,u=new ze,m=new ze,_=new ze,x=new D,d=new D;function h(v,T,P){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,P),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),f.sub(c),p.sub(c),m.sub(u),_.sub(u);const N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(N),d.copy(p).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(N),o[v].add(x),o[T].add(x),o[P].add(x),l[v].add(d),l[T].add(d),l[P].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,T=y.length;v<T;++v){const P=y[v],N=P.start,B=P.count;for(let V=N,O=N+B;V<O;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new D,M=new D,E=new D,b=new D;function R(v){E.fromBufferAttribute(r,v),b.copy(E);const T=o[v];A.copy(T),A.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(b,T);const N=M.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,N)}for(let v=0,T=y.length;v<T;++v){const P=y[v],N=P.start,B=P.count;for(let V=N,O=N+B;V<O;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,f=new D,p=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),x=e.getX(u+1),d=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let h=0;h<f;h++)u[_++]=c[m++]}return new Ut(u,f,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const u=c[f],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let u=0,m=p.length;u<m;u++)f.push(p[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const $t=new D;class Is{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ds("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Is(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ds("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pa=new D,hd=new D,pd=new Ge;class Gn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pa.subVectors(i,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(pa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pd.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let md=0;class ci extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Er,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Fc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _i extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ki;const pr=new D,Vi=new D,Wi=new D,Xi=new ze,mr=new ze,au=new vt,Yr=new D,gr=new D,Kr=new D,Al=new ze,ma=new ze,Rl=new ze;class Ji extends Ft{constructor(e=new _i){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dd(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Is(i,3,0,!1)),ki.setAttribute("uv",new Is(i,2,3,!1))}this.geometry=ki,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Wi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Zr(Yr.set(-.5,-.5,0),Wi,a,Vi,r,s),Zr(gr.set(.5,-.5,0),Wi,a,Vi,r,s),Zr(Kr.set(.5,.5,0),Wi,a,Vi,r,s),Al.set(0,0),ma.set(1,0),Rl.set(1,1);let o=e.ray.intersectTriangle(Yr,gr,Kr,!1,pr);if(o===null&&(Zr(gr.set(-.5,.5,0),Wi,a,Vi,r,s),ma.set(0,1),o=e.ray.intersectTriangle(Yr,Kr,gr,!1,pr),o===null))return;const l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:un.getInterpolation(pr,Yr,gr,Kr,Al,ma,Rl,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zr(n,e,t,i,r,s){Xi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(mr.x=s*Xi.x-r*Xi.y,mr.y=r*Xi.x+s*Xi.y):mr.copy(Xi),n.copy(e),n.x+=mr.x,n.y+=mr.y,n.applyMatrix4(au)}const zn=new D,ga=new D,Jr=new D,Qr=new D;class Bs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ga.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(ga);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=Qr.dot(this.direction),l=-Qr.dot(Jr),c=Qr.lengthSq(),f=Math.abs(1-a*a);let p,u,m,_;if(f>0)if(p=a*l-o,u=a*o-l,_=s*f,p>=0)if(u>=-_)if(u<=_){const x=1/f;p*=x,u*=x,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-a*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(p=Math.max(0,-(a*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c);else u=a>0?-s:s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ga).addScaledVector(Jr,u),m}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=e.x-a.x,u=e.y-a.y,m=e.z-a.z,_=t.x-a.x,x=t.y-a.y,d=t.z-a.z,h=i.x-a.x,y=i.y-a.y,A=i.z-a.z,M=Math.abs(l),E=Math.abs(c),b=Math.abs(f);let R,v,T,P,N,B,V,O,F,$,X,re;if(M>=E&&M>=b?(T=l,B=p,F=_,re=h,l>=0?(R=c,v=f,P=u,N=m,V=x,O=d,$=y,X=A):(R=f,v=c,P=m,N=u,V=d,O=x,$=A,X=y)):E>=b?(T=c,B=u,F=x,re=y,c>=0?(R=f,v=l,P=m,N=p,V=d,O=_,$=A,X=h):(R=l,v=f,P=p,N=m,V=_,O=d,$=h,X=A)):(T=f,B=m,F=d,re=A,f>=0?(R=l,v=c,P=p,N=u,V=_,O=x,$=h,X=y):(R=c,v=l,P=u,N=p,V=x,O=_,$=y,X=h)),T===0)return null;const Z=R/T,ee=v/T,te=1/T,Fe=P-Z*B,De=N-ee*B,tt=V-Z*F,Je=O-ee*F,et=$-Z*re,Q=X-ee*re,ne=et*Je-Q*tt,Ae=Fe*Q-De*et,Be=tt*De-Je*Fe;if(r){if(ne<0||Ae<0||Be<0)return null}else if((ne<0||Ae<0||Be<0)&&(ne>0||Ae>0||Be>0))return null;const be=ne+Ae+Be;if(be===0)return null;const Xe=te*(ne*B+Ae*F+Be*re);return(be>0?Xe<0:Xe>0)?null:this.at(Xe/be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ir extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cl=new vt,hi=new Bs,jr=new Br,Pl=new D,es=new D,ts=new D,ns=new D,_a=new D,is=new D,Ll=new D,rs=new D;class mt extends Ft{constructor(e=new St,t=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(_a.fromBufferAttribute(p,e),a?is.addScaledVector(_a,f):is.addScaledVector(_a.sub(t),f))}t.add(is)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(jr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(jr,Pl)===null||hi.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Cl),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const d=u[_],h=a[d.materialIndex],y=Math.max(d.start,m.start),A=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,E=A;M<E;M+=3){const b=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);r=ss(this,h,e,i,c,f,p,b,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=_,h=x;d<h;d+=3){const y=o.getX(d),A=o.getX(d+1),M=o.getX(d+2);r=ss(this,a,e,i,c,f,p,y,A,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const d=u[_],h=a[d.materialIndex],y=Math.max(d.start,m.start),A=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,E=A;M<E;M+=3){const b=M,R=M+1,v=M+2;r=ss(this,h,e,i,c,f,p,b,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=_,h=x;d<h;d+=3){const y=d,A=d+1,M=d+2;r=ss(this,a,e,i,c,f,p,y,A,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function gd(n,e,t,i,r,s,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===yi,o),l===null)return null;rs.copy(o),rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:n}}function ss(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,es),n.getVertexPosition(l,ts),n.getVertexPosition(c,ns);const f=gd(n,e,t,i,es,ts,ns,Ll);if(f){const p=new D;un.getBarycoord(Ll,es,ts,ns,p),r&&(f.uv=un.getInterpolatedAttribute(r,o,l,c,p,new ze)),s&&(f.uv1=un.getInterpolatedAttribute(s,o,l,c,p,new ze)),a&&(f.normal=un.getInterpolatedAttribute(a,o,l,c,p,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};un.getNormal(es,ts,ns,u.normal),f.face=u,f.barycoord=p}return f}class _d extends kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Nt,f=Nt,p,u){super(null,a,o,l,c,f,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pi=new Br,xd=new ze(.5,.5),as=new D;class Wo{constructor(e=new Gn,t=new Gn,i=new Gn,r=new Gn,s=new Gn,a=new Gn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],p=s[5],u=s[6],m=s[7],_=s[8],x=s[9],d=s[10],h=s[11],y=s[12],A=s[13],M=s[14],E=s[15];if(r[0].setComponents(c-a,m-f,h-_,E-y).normalize(),r[1].setComponents(c+a,m+f,h+_,E+y).normalize(),r[2].setComponents(c+o,m+p,h+x,E+A).normalize(),r[3].setComponents(c-o,m-p,h-x,E-A).normalize(),i)r[4].setComponents(l,u,d,M).normalize(),r[5].setComponents(c-l,m-u,h-d,E-M).normalize();else if(r[4].setComponents(c-l,m-u,h-d,E-M).normalize(),t===Rn)r[5].setComponents(c+l,m+u,h+d,E+M).normalize();else if(t===Lr)r[5].setComponents(l,u,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=xd.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(as.x=r.normal.x>0?e.max.x:e.min.x,as.y=r.normal.y>0?e.max.y:e.min.y,as.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ur extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Us=new D,Ns=new D,Dl=new vt,_r=new Bs,os=new Br,xa=new D,Il=new D;class Xo extends Ft{constructor(e=new St,t=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Us.fromBufferAttribute(t,r-1),Ns.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Us.distanceTo(Ns);e.setAttribute("lineDistance",new _t(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;Dl.copy(r).invert(),_r.copy(e.ray).applyMatrix4(Dl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=m,d=_-1;x<d;x+=c){const h=f.getX(x),y=f.getX(x+1),A=ls(this,e,_r,l,h,y,x);A&&t.push(A)}if(this.isLineLoop){const x=f.getX(_-1),d=f.getX(m),h=ls(this,e,_r,l,x,d,_-1);h&&t.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=m,d=_-1;x<d;x+=c){const h=ls(this,e,_r,l,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){const x=ls(this,e,_r,l,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ls(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Us.fromBufferAttribute(o,r),Ns.fromBufferAttribute(o,s),t.distanceSqToSegment(Us,Ns,xa,Il)>i)return;xa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(xa);if(!(c<e.near||c>e.far))return{distance:c,point:Il.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ul=new D,Nl=new D;class Fl extends Xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ul.fromBufferAttribute(t,r),Nl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ul.distanceTo(Nl);e.setAttribute("lineDistance",new _t(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qo extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ol=new vt,xo=new Bs,cs=new Br,us=new D;class ou extends Ft{constructor(e=new St,t=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;Ol.copy(r).invert(),xo.copy(e.ray).applyMatrix4(Ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=u,x=m;_<x;_++){const d=c.getX(_);us.fromBufferAttribute(p,d),Bl(us,d,l,r,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=u,x=m;_<x;_++)us.fromBufferAttribute(p,_),Bl(us,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bl(n,e,t,i,r,s,a){const o=xo.distanceSqToPoint(n);if(o<t){const l=new D;xo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class lu extends kt{constructor(e=[],t=Ei,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vd extends kt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nr extends kt{constructor(e,t,i=Dn,r,s,a,o=Nt,l=Nt,c,f=qn,p=1){if(f!==qn&&f!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Md extends Nr{constructor(e,t=Dn,i=Ei,r,s,a=Nt,o=Nt,l,c=qn){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cu extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class li extends St{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let u=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(p,2));function _(x,d,h,y,A,M,E,b,R,v,T){const P=M/R,N=E/v,B=M/2,V=E/2,O=b/2,F=R+1,$=v+1;let X=0,re=0;const Z=new D;for(let ee=0;ee<$;ee++){const te=ee*N-V;for(let Fe=0;Fe<F;Fe++){const De=Fe*P-B;Z[x]=De*y,Z[d]=te*A,Z[h]=O,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[d]=0,Z[h]=b>0?1:-1,f.push(Z.x,Z.y,Z.z),p.push(Fe/R),p.push(1-ee/v),X+=1}}for(let ee=0;ee<v;ee++)for(let te=0;te<R;te++){const Fe=u+te+F*ee,De=u+te+F*(ee+1),tt=u+(te+1)+F*(ee+1),Je=u+(te+1)+F*ee;l.push(Fe,De,Je),l.push(De,tt,Je),re+=6}o.addGroup(m,re,T),m+=re,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ln extends St{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],u=[],m=[];let _=0;const x=[],d=i/2;let h=0;y(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(m,2));function y(){const M=new D,E=new D;let b=0;const R=(t-e)/i;for(let v=0;v<=s;v++){const T=[],P=v/s,N=P*(t-e)+e;for(let B=0;B<=r;B++){const V=B/r,O=V*l+o,F=Math.sin(O),$=Math.cos(O);E.x=N*F,E.y=-P*i+d,E.z=N*$,p.push(E.x,E.y,E.z),M.set(F,R,$).normalize(),u.push(M.x,M.y,M.z),m.push(V,1-P),T.push(_++)}x.push(T)}for(let v=0;v<r;v++)for(let T=0;T<s;T++){const P=x[T][v],N=x[T+1][v],B=x[T+1][v+1],V=x[T][v+1];(e>0||T!==0)&&(f.push(P,N,V),b+=3),(t>0||T!==s-1)&&(f.push(N,B,V),b+=3)}c.addGroup(h,b,0),h+=b}function A(M){const E=_,b=new ze,R=new D;let v=0;const T=M===!0?e:t,P=M===!0?1:-1;for(let B=1;B<=r;B++)p.push(0,d*P,0),u.push(0,P,0),m.push(.5,.5),_++;const N=_;for(let B=0;B<=r;B++){const O=B/r*l+o,F=Math.cos(O),$=Math.sin(O);R.x=T*$,R.y=d*P,R.z=T*F,p.push(R.x,R.y,R.z),u.push(0,P,0),b.x=F*.5+.5,b.y=$*.5*P+.5,m.push(b.x,b.y),_++}for(let B=0;B<r;B++){const V=E+B,O=N+B;M===!0?f.push(O,O+1,V):f.push(O+1,O,V),v+=3}c.addGroup(h,v,M===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $o extends Ln{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yo extends St{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const A=new D,M=new D,E=new D;for(let b=0;b<t.length;b+=3)m(t[b+0],A),m(t[b+1],M),m(t[b+2],E),l(A,M,E,y)}function l(y,A,M,E){const b=E+1,R=[];for(let v=0;v<=b;v++){R[v]=[];const T=y.clone().lerp(M,v/b),P=A.clone().lerp(M,v/b),N=b-v;for(let B=0;B<=N;B++)B===0&&v===b?R[v][B]=T:R[v][B]=T.clone().lerp(P,B/N)}for(let v=0;v<b;v++)for(let T=0;T<2*(b-v)-1;T++){const P=Math.floor(T/2);T%2===0?(u(R[v][P+1]),u(R[v+1][P]),u(R[v][P])):(u(R[v][P+1]),u(R[v+1][P+1]),u(R[v+1][P]))}}function c(y){const A=new D;for(let M=0;M<s.length;M+=3)A.x=s[M+0],A.y=s[M+1],A.z=s[M+2],A.normalize().multiplyScalar(y),s[M+0]=A.x,s[M+1]=A.y,s[M+2]=A.z}function f(){const y=new D;for(let A=0;A<s.length;A+=3){y.x=s[A+0],y.y=s[A+1],y.z=s[A+2];const M=d(y)/2/Math.PI+.5,E=h(y)/Math.PI+.5;a.push(M,1-E)}_(),p()}function p(){for(let y=0;y<a.length;y+=6){const A=a[y+0],M=a[y+2],E=a[y+4],b=Math.max(A,M,E),R=Math.min(A,M,E);b>.9&&R<.1&&(A<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function m(y,A){const M=y*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}function _(){const y=new D,A=new D,M=new D,E=new D,b=new ze,R=new ze,v=new ze;for(let T=0,P=0;T<s.length;T+=9,P+=6){y.set(s[T+0],s[T+1],s[T+2]),A.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),b.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),E.copy(y).add(A).add(M).divideScalar(3);const N=d(E);x(b,P+0,y,N),x(R,P+2,A,N),x(v,P+4,M,N)}}function x(y,A,M,E){E<0&&y.x===1&&(a[A]=y.x-1),M.x===0&&M.z===0&&(a[A]=E/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.vertices,e.indices,e.radius,e.detail)}}class Ko extends Yo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ko(e.radius,e.detail)}}class zr extends St{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,u=t/l,m=[],_=[],x=[],d=[];for(let h=0;h<f;h++){const y=h*u-a;for(let A=0;A<c;A++){const M=A*p-s;_.push(M,-y,0),x.push(0,0,1),d.push(A/o),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const A=y+c*h,M=y+c*(h+1),E=y+1+c*(h+1),b=y+1+c*h;m.push(A,M,b),m.push(M,E,b)}this.setIndex(m),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zo extends St{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let p=e;const u=(t-e)/r,m=new D,_=new ze;for(let x=0;x<=r;x++){for(let d=0;d<=i;d++){const h=s+d/i*a;m.x=p*Math.cos(h),m.y=p*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,f.push(_.x,_.y)}p+=u}for(let x=0;x<r;x++){const d=x*(i+1);for(let h=0;h<i;h++){const y=h+d,A=y,M=y+i+1,E=y+i+2,b=y+1;o.push(A,M,b),o.push(M,E,b)}}this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fr extends St{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],p=new D,u=new D,m=[],_=[],x=[],d=[];for(let h=0;h<=i;h++){const y=[],A=h/i,M=a+A*o,E=e*Math.cos(M),b=Math.sqrt(e*e-E*E);let R=0;h===0&&a===0?R=.5/t:h===i&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){const T=v/t,P=r+T*s;p.x=-b*Math.cos(P),p.y=E,p.z=b*Math.sin(P),_.push(p.x,p.y,p.z),u.copy(p).normalize(),x.push(u.x,u.y,u.z),d.push(T+R,1-A),y.push(c++)}f.push(y)}for(let h=0;h<i;h++)for(let y=0;y<t;y++){const A=f[h][y+1],M=f[h][y],E=f[h+1][y],b=f[h+1][y+1];(h!==0||a>0)&&m.push(A,M,b),(h!==i-1||l<Math.PI)&&m.push(M,E,b)}this.setIndex(m),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zs extends St{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],p=[],u=new D,m=new D,_=new D;for(let x=0;x<=i;x++){const d=a+x/i*o;for(let h=0;h<=r;h++){const y=h/r*s;m.x=(e+t*Math.cos(d))*Math.cos(y),m.y=(e+t*Math.cos(d))*Math.sin(y),m.z=t*Math.sin(d),c.push(m.x,m.y,m.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),_.subVectors(m,u).normalize(),f.push(_.x,_.y,_.z),p.push(h/r),p.push(x/i)}}for(let x=1;x<=i;x++)for(let d=1;d<=r;d++){const h=(r+1)*x+d-1,y=(r+1)*(x-1)+d-1,A=(r+1)*(x-1)+d,M=(r+1)*x+d;l.push(h,y,M),l.push(y,A,M)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(zl(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(zl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const r in i)e[r]=i[r]}return e}function zl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const yd={clone:rr,merge:Yt};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(r.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Td extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ri extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wd extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ad extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rd extends Ur{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class fu extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const va=new vt,Gl=new D,Hl=new D;class Cd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(va,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fs=new D,ds=new or,En=new D;class du extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fs,ds,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ds,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(fs,ds,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ds,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new D,kl=new ze,Vl=new ze;class sn extends du{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,kl,Vl),t.subVectors(Vl,kl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pd extends Cd{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ld extends fu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class hu extends du{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dd extends fu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const qi=-90,$i=1;class Id extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(qi,$i,e,t);r.layers=this.layers,this.add(r);const s=new sn(qi,$i,e,t);s.layers=this.layers,this.add(s);const a=new sn(qi,$i,e,t);a.layers=this.layers,this.add(a);const o=new sn(qi,$i,e,t);o.layers=this.layers,this.add(o);const l=new sn(qi,$i,e,t);l.layers=this.layers,this.add(l);const c=new sn(qi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ud extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nl=class nl{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};nl.prototype.isMatrix2=!0;let Wl=nl;function Xl(n,e,t,i){const r=Nd(i);switch(t){case Zc:return n*e;case Qc:return n*e/r.components*r.byteLength;case Oo:return n*e/r.components*r.byteLength;case bi:return n*e*2/r.components*r.byteLength;case Bo:return n*e*2/r.components*r.byteLength;case Jc:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case zo:return n*e*4/r.components*r.byteLength;case vs:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ss:case ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:case Va:return Math.max(n,16)*Math.max(e,8)/4;case Ga:case ka:return Math.max(n,8)*Math.max(e,8)/2;case Wa:case Xa:case $a:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case As:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ro:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uo:case fo:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*16;case po:case mo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rs:case go:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nd(n){switch(n){case an:case qc:return{byteLength:1,components:1};case Cr:case $c:case In:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case Dn:case Uo:case An:return{byteLength:4,components:1};case Yc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pu(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Fd(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,f);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){const _=p[u],x=p[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,p[u]=x)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){const x=p[m];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ah=`#define PI 3.141592653589793
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
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
}`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
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
#endif`,Nh=`uniform sampler2D dfgLUT;
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
}`,Fh=`
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$h=`#if defined( USE_POINTS_UV )
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
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jh=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,rm=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,am=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,um=`#define TOON
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
}`,fm=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Od,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:Gd,alphatest_fragment:Hd,alphatest_pars_fragment:kd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:$d,beginnormal_vertex:Yd,bsdfs:Kd,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:sh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:uh,emissivemap_fragment:fh,emissivemap_pars_fragment:dh,colorspace_fragment:hh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:_h,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Ch,envmap_vertex:vh,fog_vertex:Mh,fog_pars_vertex:Sh,fog_fragment:yh,fog_pars_fragment:Eh,gradientmap_pars_fragment:bh,lightmap_pars_fragment:Th,lights_lambert_fragment:wh,lights_lambert_pars_fragment:Ah,lights_pars_begin:Rh,lights_toon_fragment:Ph,lights_toon_pars_fragment:Lh,lights_phong_fragment:Dh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Uh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Fh,lights_fragment_maps:Oh,lights_fragment_end:Bh,lightprobes_pars_fragment:zh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:kh,logdepthbuf_vertex:Vh,map_fragment:Wh,map_pars_fragment:Xh,map_particle_fragment:qh,map_particle_pars_fragment:$h,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:Kh,morphinstance_vertex:Zh,morphcolor_vertex:Jh,morphnormal_vertex:Qh,morphtarget_pars_vertex:jh,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:rp,normal_vertex:sp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,opaque_fragment:fp,packing:dp,premultiplied_alpha_fragment:hp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:yp,skinbase_vertex:Ep,skinning_pars_vertex:bp,skinning_vertex:Tp,skinnormal_vertex:wp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Ip,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:Bp,backgroundCube_vert:zp,backgroundCube_frag:Gp,cube_vert:Hp,cube_frag:kp,depth_vert:Vp,depth_frag:Wp,distance_vert:Xp,distance_frag:qp,equirect_vert:$p,equirect_frag:Yp,linedashed_vert:Kp,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:Qp,meshlambert_vert:jp,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:rm,meshphong_vert:sm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:um,points_vert:fm,points_frag:dm,shadow_vert:hm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},xe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wn={basic:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Yt([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Yt([xe.lights,xe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};wn.physical={uniforms:Yt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const hs={r:0,b:0,g:0},_m=new vt,mu=new Ge;mu.set(-1,0,0,0,1,0,0,0,1);function xm(n,e,t,i,r,s){const a=new He(0);let o=r===!0?0:1,l,c,f=null,p=0,u=null;function m(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){const M=y.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(y){let A=!1;const M=m(y);M===null?d(a,o):M&&M.isColor&&(d(M,1),A=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,A){const M=m(A);M&&(M.isCubeTexture||M.mapping===Os)?(c===void 0&&(c=new mt(new li(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:rr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mu),c.material.toneMapped=je.getTransfer(M.colorSpace)!==ft,(f!==M||p!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mt(new zr(2,2),new Sn({name:"BackgroundMaterial",uniforms:rr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,A){y.getRGB(hs,uu(n)),t.buffers.color.setClear(hs.r,hs.g,hs.b,A,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,A=1){a.set(y),o=A,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,d(a,o)},render:_,addToRenderList:x,dispose:h}}function vm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(N,B,V,O,F){let $=!1;const X=p(N,O,V,B);s!==X&&(s=X,c(s.object)),$=m(N,O,V,F),$&&_(N,O,V,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(N,B,V,O),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function f(N){return n.deleteVertexArray(N)}function p(N,B,V,O){const F=O.wireframe===!0;let $=i[B.id];$===void 0&&($={},i[B.id]=$);const X=N.isInstancedMesh===!0?N.id:0;let re=$[X];re===void 0&&(re={},$[X]=re);let Z=re[V.id];Z===void 0&&(Z={},re[V.id]=Z);let ee=Z[F];return ee===void 0&&(ee=u(l()),Z[F]=ee),ee}function u(N){const B=[],V=[],O=[];for(let F=0;F<t;F++)B[F]=0,V[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:O,object:N,attributes:{},index:null}}function m(N,B,V,O){const F=s.attributes,$=B.attributes;let X=0;const re=V.getAttributes();for(const Z in re)if(re[Z].location>=0){const te=F[Z];let Fe=$[Z];if(Fe===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Fe=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Fe=N.instanceColor)),te===void 0||te.attribute!==Fe||Fe&&te.data!==Fe.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function _(N,B,V,O){const F={},$=B.attributes;let X=0;const re=V.getAttributes();for(const Z in re)if(re[Z].location>=0){let te=$[Z];te===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));const Fe={};Fe.attribute=te,te&&te.data&&(Fe.data=te.data),F[Z]=Fe,X++}s.attributes=F,s.attributesNum=X,s.index=O}function x(){const N=s.newAttributes;for(let B=0,V=N.length;B<V;B++)N[B]=0}function d(N){h(N,0)}function h(N,B){const V=s.newAttributes,O=s.enabledAttributes,F=s.attributeDivisors;V[N]=1,O[N]===0&&(n.enableVertexAttribArray(N),O[N]=1),F[N]!==B&&(n.vertexAttribDivisor(N,B),F[N]=B)}function y(){const N=s.newAttributes,B=s.enabledAttributes;for(let V=0,O=B.length;V<O;V++)B[V]!==N[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function A(N,B,V,O,F,$,X){X===!0?n.vertexAttribIPointer(N,B,V,F,$):n.vertexAttribPointer(N,B,V,O,F,$)}function M(N,B,V,O){x();const F=O.attributes,$=V.getAttributes(),X=B.defaultAttributeValues;for(const re in $){const Z=$[re];if(Z.location>=0){let ee=F[re];if(ee===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const te=ee.normalized,Fe=ee.itemSize,De=e.get(ee);if(De===void 0)continue;const tt=De.buffer,Je=De.type,et=De.bytesPerElement,Q=Je===n.INT||Je===n.UNSIGNED_INT||ee.gpuType===Uo;if(ee.isInterleavedBufferAttribute){const ne=ee.data,Ae=ne.stride,Be=ee.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<Z.locationSize;be++)h(Z.location+be,ne.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<Z.locationSize;be++)d(Z.location+be);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let be=0;be<Z.locationSize;be++)A(Z.location+be,Fe/Z.locationSize,Je,te,Ae*et,(Be+Fe/Z.locationSize*be)*et,Q)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<Z.locationSize;ne++)h(Z.location+ne,ee.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<Z.locationSize;ne++)d(Z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ne=0;ne<Z.locationSize;ne++)A(Z.location+ne,Fe/Z.locationSize,Je,te,Fe*et,Fe/Z.locationSize*ne*et,Q)}}else if(X!==void 0){const te=X[re];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Z.location,te);break;case 3:n.vertexAttrib3fv(Z.location,te);break;case 4:n.vertexAttrib4fv(Z.location,te);break;default:n.vertexAttrib1fv(Z.location,te)}}}}y()}function E(){T();for(const N in i){const B=i[N];for(const V in B){const O=B[V];for(const F in O){const $=O[F];for(const X in $)f($[X].object),delete $[X];delete O[F]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const B=i[N.id];for(const V in B){const O=B[V];for(const F in O){const $=O[F];for(const X in $)f($[X].object),delete $[X];delete O[F]}}delete i[N.id]}function R(N){for(const B in i){const V=i[B];for(const O in V){const F=V[O];if(F[N.id]===void 0)continue;const $=F[N.id];for(const X in $)f($[X].object),delete $[X];delete F[N.id]}}}function v(N){for(const B in i){const V=i[B],O=N.isInstancedMesh===!0?N.id:0,F=V[O];if(F!==void 0){for(const $ in F){const X=F[$];for(const re in X)f(X[re].object),delete X[re];delete F[$]}delete V[O],Object.keys(V).length===0&&delete i[B]}}}function T(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:d,disableUnusedAttributes:y}}function Mm(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Sm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==an&&R!==An&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Oe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:M,maxSamples:E,samples:b}}function ym(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Gn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||r;return r=u,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=f(p,u,0)},this.setState=function(p,u,m){const _=p.clippingPlanes,x=p.clipIntersection,d=p.clipShadows,h=n.get(p);if(!r||_===null||_.length===0||s&&!d)s?f(null):c();else{const y=s?0:i,A=y*4;let M=h.clippingState||null;l.value=M,M=f(_,u,A,m);for(let E=0;E!==A;++E)M[E]=t[E];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,u,m,_){const x=p!==null?p.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const h=m+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<h)&&(d=new Float32Array(h));for(let A=0,M=m;A!==x;++A,M+=4)a.copy(p[A]).applyMatrix4(y,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}const Qi=4,Em=6,bm=20,Tm=256,xr=new hu,ql=new He;let Ma=null,Sa=0,ya=0,Ea=!1;const wm=new D,mi=new D;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=wm}=s;Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Sa,ya),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:In,format:xn,colorSpace:Cs,depthBuffer:!1},r=Yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Am(s)),this._blurMaterial=Cm(s,e,t),this._ggxMaterial=Rm(s,e,t)}return r}_compileMaterial(e){const t=new mt(new St,e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,i,r,s){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(ql),p.toneMapping=Pn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new li,new Ir({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,d=x.material;let h=!1;const y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,h=!0):(d.color.copy(ql),h=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[A],s.y,s.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[A]));const E=this._cubeSize;Yi(r,M*E,A>2?E:0,E,E),p.setRenderTarget(r),h&&p.render(x,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ei||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,m=p*u,{_lodMax:_}=this,x=this._sizeLods[i],d=3*x*(i>_-Qi?i-_+Qi:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,Yi(s,d,h,3*x,2*x),r.setRenderTarget(s),r.render(o,xr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Yi(e,d,h,3*x,2*x),r.setRenderTarget(e),r.render(o,xr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-Qi?r-this._lodMax+Qi:0),u=4*(this._cubeSize-f);Yi(t,p,u,3*f,2*f),a.setRenderTarget(t),a.render(l,xr)}}function Am(n){const e=[],t=[];let i=n;const r=n-Qi+1+Em;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,_=new Float32Array(m*u*p),x=new Float32Array(m*u*p);for(let h=0;h<p;h++){const y=h%3*2/3-1,A=h>2?0:-1,M=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];_.set(M,m*u*h);for(let E=0;E<u;E++){const b=f[E*2]*2-1,R=f[E*2+1]*2-1;h===0?mi.set(1,R,b):h===1?mi.set(-b,1,-R):h===2?mi.set(-b,R,1):h===3?mi.set(-1,R,-b):h===4?mi.set(-b,-1,R):mi.set(b,R,-1),mi.toArray(x,(h*u+E)*m)}}const d=new St;d.setAttribute("position",new Ut(_,m)),d.setAttribute("outputDirection",new Ut(x,m)),t.push(new mt(d,null)),i>Qi&&i--}return{lodMeshes:t,sizeLods:e}}function Yl(n,e,t){const i=new Mn(n,e,t);return i.texture.mapping=Os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rm(n,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Cm(n,e,t){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:bm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Kl(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zl(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Gs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gu extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new li(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new mt(r,s),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Ht),new Id(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Pm(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===$s||m===Ys)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const x=new gu(_.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,_=m===$s||m===Ys,x=m===Ei||m===ir;if(_||x){let d=t.get(u);const h=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new $l(n)),d=_?i.fromEquirectangular(u,d):i.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),d.texture;if(d!==void 0)return d.texture;{const y=u.image;return _&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new $l(n)),d=_?i.fromEquirectangular(u):i.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),u.addEventListener("dispose",f),d.texture):null}}}return u}function o(u,m){return m===$s?u.mapping=Ei:m===Ys&&(u.mapping=ir),u}function l(u){let m=0;const _=6;for(let x=0;x<_;x++)u[x]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Lm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ji("WebGLRenderer: "+i+" extension not supported."),r}}}function Dm(n,e,t,i){const r={},s=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,_=p.attributes.position;let x=0;if(_===void 0)return;if(m!==null){const y=m.array;x=m.version;for(let A=0,M=y.length;A<M;A+=3){const E=y[A+0],b=y[A+1],R=y[A+2];u.push(E,b,b,R,R,E)}}else{const y=_.array;x=_.version;for(let A=0,M=y.length/3-1;A<M;A+=3){const E=A+0,b=A+1,R=A+2;u.push(E,b,b,R,R,E)}}const d=new(_.count>=65535?su:ru)(u,1);d.version=x;const h=s.get(p);h&&e.remove(h),s.set(p,d)}function f(p){const u=s.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function Im(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,u){n.drawElements(i,u,s,p*a),t.update(u,i,1)}function c(p,u,m){m!==0&&(n.drawElementsInstanced(i,u,s,p*a,m),t.update(u,i,m))}function f(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,m);let x=0;for(let d=0;d<m;d++)x+=u[d];t.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Um(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Nm(n,e,t){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let P=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),d===!0&&(M=3);let E=o.attributes.position.count*M,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*b*4*p),v=new tu(R,E,b,p);v.type=An,v.needsUpdate=!0;const T=M*4;for(let N=0;N<p;N++){const B=h[N],V=y[N],O=A[N],F=E*b*4*N;for(let $=0;$<B.count;$++){const X=$*T;_===!0&&(r.fromBufferAttribute(B,$),R[F+X+0]=r.x,R[F+X+1]=r.y,R[F+X+2]=r.z,R[F+X+3]=0),x===!0&&(r.fromBufferAttribute(V,$),R[F+X+4]=r.x,R[F+X+5]=r.y,R[F+X+6]=r.z,R[F+X+7]=0),d===!0&&(r.fromBufferAttribute(O,$),R[F+X+8]=r.x,R[F+X+9]=r.y,R[F+X+10]=r.z,R[F+X+11]=O.itemSize===4?r.w:1)}}u={count:p,texture:v,size:new ze(E,b)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Fm(n,e,t,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Om={[Bc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function Bm(n,e,t,i,r,s){const a=new Mn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new St;c.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _t([0,2,0,0,2,0],2));const f=new Td({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new mt(c,f),u=new hu(-1,1,1,-1,0,1);let m=null,_=null,x=!1,d,h=null,y=[],A=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let b=0;b<y.length;b++){const R=y[b];R.setSize&&R.setSize(M,E)}},this.setEffects=function(M){y=M,A=y.length>0&&y[0].isRenderPass===!0;const E=a.width,b=a.height;y.length>0&&o===null&&(o=new Mn(E,b,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(E,b,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const v=y[R];v.setSize&&v.setSize(E,b)}},this.begin=function(M,E){if(x||M.toneMapping===Pn&&y.length===0)return!1;if(h=E,E!==null){const b=E.width,R=E.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return A===!1&&M.setRenderTarget(a),d=M.toneMapping,M.toneMapping=Pn,!0},this.hasRenderPass=function(){return A},this.end=function(M,E){M.toneMapping=d,x=!0;let b=a,R=o;for(let v=0;v<y.length;v++){const T=y[v];T.enabled!==!1&&(T.render(M,R,b,E),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(m!==M.outputColorSpace||_!==M.toneMapping){m=M.outputColorSpace,_=M.toneMapping,f.defines={},je.getTransfer(m)===ft&&(f.defines.SRGB_TRANSFER="");const v=Om[_];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(h),M.render(p,u),h=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const _u=new kt,vo=new Nr(1,1),xu=new tu,vu=new ed,Mu=new lu,Jl=[],Ql=[],jl=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jl[r];if(s===void 0&&(s=new Float32Array(r),Jl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hs(n,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;tc.set(i),n.uniformMatrix2fv(this.addr,!1,tc),Dt(t,i)}}function Wm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;ec.set(i),n.uniformMatrix3fv(this.addr,!1,ec),Dt(t,i)}}function Xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;jl.set(i),n.uniformMatrix4fv(this.addr,!1,jl),Dt(t,i)}}function qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function Qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function e0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vo.compareFunction=t.isReversedDepthBuffer()?Ho:Go,s=vo):s=_u,t.setTexture2D(e||s,r)}function t0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vu,r)}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mu,r)}function i0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xu,r)}function r0(n){switch(n){case 5126:return zm;case 35664:return Gm;case 35665:return Hm;case 35666:return km;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return $m;case 35668:case 35672:return Ym;case 35669:case 35673:return Km;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function s0(n,e){n.uniform1fv(this.addr,e)}function a0(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function o0(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function l0(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function c0(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u0(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f0(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function d0(n,e){n.uniform1iv(this.addr,e)}function h0(n,e){n.uniform2iv(this.addr,e)}function p0(n,e){n.uniform3iv(this.addr,e)}function m0(n,e){n.uniform4iv(this.addr,e)}function g0(n,e){n.uniform1uiv(this.addr,e)}function _0(n,e){n.uniform2uiv(this.addr,e)}function x0(n,e){n.uniform3uiv(this.addr,e)}function v0(n,e){n.uniform4uiv(this.addr,e)}function M0(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=vo:a=_u;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function S0(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vu,s[a])}function y0(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mu,s[a])}function E0(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xu,s[a])}function b0(n){switch(n){case 5126:return s0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return h0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return x0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return E0}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}}class w0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}}class A0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function nc(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){const i=n.name,r=i.length;for(ba.lastIndex=0;;){const s=ba.exec(i),a=ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){nc(t,c===void 0?new T0(o,n,e):new w0(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new A0(o),nc(t,p)),t=p}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);R0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ic(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const C0=37297;let P0=0;function L0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const rc=new Ge;function D0(n){je._getMatrix(rc,je.workingColorSpace,n);const e=`mat3( ${rc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Ps:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+L0(n.getShaderSource(e),o)}else return s}function I0(n,e){const t=D0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const U0={[Bc]:"Linear",[zc]:"Reinhard",[Gc]:"Cineon",[Hc]:"ACESFilmic",[Vc]:"AgX",[Wc]:"Neutral",[kc]:"Custom"};function N0(n,e){const t=U0[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new D;function F0(){je.getLuminanceCoefficients(ps);const n=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function B0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function z0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sr(n){return n!==""}function ac(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(n){return n.replace(G0,k0)}const H0=new Map;function k0(n,e){let t=$e[e];if(t===void 0){const i=H0.get(e);if(i!==void 0)t=$e[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mo(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(n){return n.replace(V0,W0)}function W0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const X0={[xs]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function q0(n){return X0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $0={[Ei]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE_UV"};function Y0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const K0={[ir]:"ENVMAP_MODE_REFRACTION"};function Z0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":K0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J0={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[xf]:"ENVMAP_BLENDING_ADD"};function Q0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":J0[n.combine]||"ENVMAP_BLENDING_NONE"}function j0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=q0(t),c=Y0(t),f=Z0(t),p=Q0(t),u=j0(t),m=O0(t),_=B0(s),x=r.createProgram();let d,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),h.length>0&&(h+=`
`)):(d=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),h=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Pn?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=Mo(a),a=ac(a,t),a=oc(a,t),o=Mo(o),o=ac(o,t),o=oc(o,t),a=lc(a),o=lc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=y+d+a,M=y+h+o,E=ic(r,r.VERTEX_SHADER,A),b=ic(r,r.FRAGMENT_SHADER,M);r.attachShader(x,E),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(N){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(E)||"",O=r.getShaderInfoLog(b)||"",F=B.trim(),$=V.trim(),X=O.trim();let re=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,b);else{const ee=sc(r,E,"vertex"),te=sc(r,b,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+ee+`
`+te)}else F!==""?Oe("WebGLProgram: Program Info Log:",F):($===""||X==="")&&(Z=!1);Z&&(N.diagnostics={runnable:re,programLog:F,vertexShader:{log:$,prefix:d},fragmentShader:{log:X,prefix:h}})}r.deleteShader(E),r.deleteShader(b),v=new Es(r,x),T=z0(r,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,C0)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let tg=0;class ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ig(e),t.set(e,i)),i}}class ig{constructor(e){this.id=tg++,this.code=e,this.usedTimes=0}}function rg(n){return n===bi||n===As||n===Rs}function sg(n,e,t,i,r,s){const a=new nu,o=new ng,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,P,N,B,V){const O=N.fog,F=B.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,re=e.get(v.envMap||$,X),Z=re&&re.mapping===Os?re.image.height:null,ee=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Fe=te!==void 0?te.length:0;let De=0;F.morphAttributes.position!==void 0&&(De=1),F.morphAttributes.normal!==void 0&&(De=2),F.morphAttributes.color!==void 0&&(De=3);let tt,Je,et,Q;if(ee){const ut=wn[ee];tt=ut.vertexShader,Je=ut.fragmentShader}else{tt=v.vertexShader,Je=v.fragmentShader;const ut=o.getVertexShaderStage(v),ot=o.getFragmentShaderStage(v);o.update(v,ut,ot),et=ut.id,Q=ot.id}const ne=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,be=B.isBatchedMesh===!0,Xe=!!v.map,bt=!!v.matcap,Ye=!!re,ae=!!v.aoMap,oe=!!v.lightMap,ce=!!v.bumpMap&&v.wireframe===!1,ge=!!v.normalMap,Re=!!v.displacementMap,at=!!v.emissiveMap,Ve=!!v.metalnessMap,We=!!v.roughnessMap,L=v.anisotropy>0,Mt=v.clearcoat>0,Ke=v.dispersion>0,w=v.retroreflectivity>0,g=v.iridescence>0,G=v.sheen>0,W=v.transmission>0,Y=L&&!!v.anisotropyMap,ue=Mt&&!!v.clearcoatMap,he=Mt&&!!v.clearcoatNormalMap,K=Mt&&!!v.clearcoatRoughnessMap,j=g&&!!v.iridescenceMap,me=g&&!!v.iridescenceThicknessMap,Pe=G&&!!v.sheenColorMap,C=G&&!!v.sheenRoughnessMap,z=!!v.specularMap,se=!!v.specularColorMap,ye=!!v.specularIntensityMap,ve=W&&!!v.transmissionMap,I=W&&!!v.thicknessMap,le=!!v.gradientMap,J=!!v.alphaMap,de=v.alphaTest>0,fe=!!v.alphaHash,ie=!!v.extensions;let Ee=Pn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ee=n.toneMapping);const _e={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:tt,fragmentShader:Je,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:be,batchingColor:be&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:bt,envMap:Ye,envMapMode:Ye&&re.mapping,envMapCubeUVHeight:Z,aoMap:ae,lightMap:oe,bumpMap:ce,normalMap:ge,displacementMap:Re,emissiveMap:at,normalMapObjectSpace:ge&&v.normalMapType===Sf,normalMapTangentSpace:ge&&v.normalMapType===_o,packedNormalMap:ge&&v.normalMapType===_o&&rg(v.normalMap.format),metalnessMap:Ve,roughnessMap:We,anisotropy:L,anisotropyMap:Y,clearcoat:Mt,clearcoatMap:ue,clearcoatNormalMap:he,clearcoatRoughnessMap:K,dispersion:Ke,retroreflection:w,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:me,sheen:G,sheenColorMap:Pe,sheenRoughnessMap:C,specularMap:z,specularColorMap:se,specularIntensityMap:ye,transmission:W,transmissionMap:ve,thicknessMap:I,gradientMap:le,opaque:v.transparent===!1&&v.blending===Er&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:fe,combine:v.combine,mapUv:Xe&&_(v.map.channel),aoMapUv:ae&&_(v.aoMap.channel),lightMapUv:oe&&_(v.lightMap.channel),bumpMapUv:ce&&_(v.bumpMap.channel),normalMapUv:ge&&_(v.normalMap.channel),displacementMapUv:Re&&_(v.displacementMap.channel),emissiveMapUv:at&&_(v.emissiveMap.channel),metalnessMapUv:Ve&&_(v.metalnessMap.channel),roughnessMapUv:We&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:ue&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:C&&_(v.sheenRoughnessMap.channel),specularMapUv:z&&_(v.specularMap.channel),specularColorMapUv:se&&_(v.specularColorMap.channel),specularIntensityMapUv:ye&&_(v.specularIntensityMap.channel),transmissionMapUv:ve&&_(v.transmissionMap.channel),thicknessMapUv:I&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ge||L),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Xe||J),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:De,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)T.push(P),T.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(h(T,v),y(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function h(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const T=m[v.type];let P;if(T){const N=wn[T];P=yd.clone(N.uniforms)}else P=v.uniforms;return P}function M(v,T){let P=f.get(T);return P!==void 0?++P.usedTimes:(P=new eg(n,T,v,r),c.push(P),f.set(T,P)),P}function E(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:A,acquireProgram:M,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:R}}function ag(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function og(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function uc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,x,d,h){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:d,group:h},n[e]=y):(y.id=u.id,y.object=u,y.geometry=m,y.material=_,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=d,y.group=h),e++,y}function l(u,m,_,x,d,h,y){y.reversedDepth===!0&&(d=-d);const A=o(u,m,_,x,d,h);_.transmission>0?i.push(A):_.transparent===!0?r.push(A):t.push(A)}function c(u,m,_,x,d,h){const y=o(u,m,_,x,d,h);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):t.unshift(y)}function f(u,m){t.length>1&&t.sort(u||og),i.length>1&&i.sort(m||uc),r.length>1&&r.sort(m||uc)}function p(){for(let u=e,m=n.length;u<m;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function lg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new fc,n.set(i,[a])):r>=s.length?(a=new fc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function ug(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fg=0;function dg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hg(n){const e=new cg,t=ug(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new vt,a=new vt;function o(c){let f=0,p=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,_=0,x=0,d=0,h=0,y=0,A=0,M=0,E=0,b=0,R=0,v=0,T=0,P=0;c.sort(dg);for(let B=0,V=c.length;B<V;B++){const O=c[B],F=O.color,$=O.intensity,X=O.distance;let re=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===bi?re=O.shadow.map.texture:re=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)f+=F.r*$,p+=F.g*$,u+=F.b*$;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(O.sh.coefficients[Z],$);P++}else if(O.isSunLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ee=O.shadow,te=t.get(O);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=te,i.sunShadowMap[_]=re;const Fe=ee.getViewportCount();for(let De=0;De<Fe;De++)i.sunShadowMatrix[x+De]=ee.getMatrix(De),i.sunShadowCascade[x+De]=ee._cascadeData[De];x+=Fe,_++}i.sun[m]=Z,m++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ee=O.shadow,te=t.get(O);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=re,i.directionalShadowMatrix[d]=O.shadow.matrix,E++}i.directional[d]=Z,d++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(F).multiplyScalar($),Z.distance=X,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,i.spot[y]=Z;const ee=O.shadow;if(O.map&&(i.spotLightMap[v]=O.map,v++,ee.updateMatrices(O),O.castShadow&&T++),i.spotLightMatrix[y]=ee.matrix,O.castShadow){const te=t.get(O);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[y]=te,i.spotShadowMap[y]=re,R++}y++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(F).multiplyScalar($),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),i.rectArea[A]=Z,A++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const ee=O.shadow,te=t.get(O);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[h]=te,i.pointShadowMap[h]=re,i.pointShadowMatrix[h]=O.shadow.matrix,b++}i.point[h]=Z,h++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar($),Z.groundColor.copy(O.groundColor).multiplyScalar($),i.hemi[M]=Z,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;const N=i.hash;(N.sunLength!==m||N.directionalLength!==d||N.pointLength!==h||N.spotLength!==y||N.rectAreaLength!==A||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==v||N.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=d,i.spot.length=y,i.rectArea.length=A,i.point.length=h,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,N.sunLength=m,N.directionalLength=d,N.pointLength=h,N.spotLength=y,N.rectAreaLength=A,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=v,N.numLightProbes=P,i.version=fg++)}function l(c,f){let p=0,u=0,m=0,_=0,x=0,d=0;const h=f.matrixWorldInverse;for(let y=0,A=c.length;y<A;y++){const M=c[y];if(M.isSunLight){const E=i.sun[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(h),p++}else if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),u++}else if(M.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),_++}else if(M.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(h),a.identity(),s.copy(M.matrixWorld),s.premultiply(h),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(h),m++}else if(M.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(h),d++}}}return{setup:o,setupView:l,state:i}}function dc(n){const e=new hg(n),t=[],i=[],r=[];function s(u){p.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function pg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new dc(n),e.set(r,[o])):s>=a.length?(o=new dc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
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
}`,_g=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],xg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],hc=new vt,vr=new D,Ta=new D;function vg(n,e,t){let i=new Wo;const r=new ze,s=new ze,a=new Et,o=new wd,l=new Ad,c={},f=t.maxTextureSize,p={[yi]:jt,[jt]:yi,[mn]:mn},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new St;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new mt(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let h=this.type;this.render=function(b,R,v){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;this.type===Ju&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xs);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Vn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=h!==this.type;V&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(F=>F.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,F=b.length;O<F;O++){const $=b[O],X=$.shadow;if(X===void 0){Oe("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const re=X.getFrameExtents();r.multiply(re),s.copy(X.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/re.x),r.x=s.x*re.x,X.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/re.y),r.y=s.y*re.y,X.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Mr){if($.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Mn(r.x,r.y,{format:bi,type:In,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new Nr(r.x,r.y,An),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=qn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Nt,X.map.depthTexture.magFilter=Nt}else $.isPointLight?(X.map=new gu(r.x),X.map.depthTexture=new Md(r.x,Dn)):(X.map=new Mn(r.x,r.y),X.map.depthTexture=new Nr(r.x,r.y,Dn)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=qn,this.type===xs?(X.map.depthTexture.compareFunction=Z?Ho:Go,X.map.depthTexture.minFilter=Ht,X.map.depthTexture.magFilter=Ht):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Nt,X.map.depthTexture.magFilter=Nt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const ee=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();$.isPointLight!==!0&&X.updateMatrices($,v);for(let te=0;te<ee;te++){const Fe=X.getCamera(te);if($.isPointLight){const De=X.camera,tt=X.matrix,Je=$.distance||De.far;Je!==De.far&&(De.far=Je,De.updateProjectionMatrix()),vr.setFromMatrixPosition($.matrixWorld),De.position.copy(vr),Ta.copy(De.position),Ta.add(_g[te]),De.up.copy(xg[te]),De.lookAt(Ta),De.updateMatrixWorld(),tt.makeTranslation(-vr.x,-vr.y,-vr.z),hc.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),X._frustum.setFromProjectionMatrix(hc,De.coordinateSystem,De.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,te),n.clear();else{te===0&&(n.setRenderTarget(X.map),n.clear());const De=X.getViewport(te);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),B.viewport(a)}i=X.getFrustum(te),M(R,v,Fe,$,this.type)}X.isPointLightShadow!==!0&&this.type===Mr&&y(X,v),X.needsUpdate=!1}h=this.type,d.needsUpdate=!1,n.setRenderTarget(T,P,N)};function y(b,R){const v=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Mn(r.x,r.y,{format:bi,type:In}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,v,u,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,v,m,x,null)}function A(b,R,v,T){let P=null;const N=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=P.uuid,V=R.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let F=O[V];F===void 0&&(F=P.clone(),O[V]=F,R.addEventListener("dispose",E)),P=F}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Mr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:p[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=n.properties.get(P);B.light=v}return P}function M(b,R,v,T,P){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Mr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const V=e.update(b),O=b.material;if(Array.isArray(O)){const F=V.groups;for(let $=0,X=F.length;$<X;$++){const re=F[$],Z=O[re.materialIndex];if(Z&&Z.visible){const ee=A(b,Z,T,P);b.onBeforeShadow(n,b,R,v,V,ee,re),n.renderBufferDirect(v,null,V,ee,b,re),b.onAfterShadow(n,b,R,v,V,ee,re)}}}else if(O.visible){const F=A(b,O,T,P);b.onBeforeShadow(n,b,R,v,V,F,null),n.renderBufferDirect(v,null,V,F,b,null),b.onAfterShadow(n,b,R,v,V,F,null)}}const B=b.children;for(let V=0,O=B.length;V<O;V++)M(B[V],R,v,T,P)}function E(b){b.target.removeEventListener("dispose",E);for(const v in c){const T=c[v],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Mg(n,e){function t(){let I=!1;const le=new Et;let J=null;const de=new Et(0,0,0,0);return{setMask:function(fe){J!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ie,Ee,_e,ut){ut===!0&&(fe*=_e,ie*=_e,Ee*=_e),le.set(fe,ie,Ee,_e),de.equals(le)===!1&&(n.clearColor(fe,ie,Ee,_e),de.copy(le))},reset:function(){I=!1,J=null,de.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,J=null,de=null,fe=null;return{setReversed:function(ie){if(le!==ie){const Ee=e.get("EXT_clip_control");ie?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const _e=fe;fe=null,this.setClear(_e)}},getReversed:function(){return le},setTest:function(ie){ie?ne(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(ie){J!==ie&&!I&&(n.depthMask(ie),J=ie)},setFunc:function(ie){if(le&&(ie=Df[ie]),de!==ie){switch(ie){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Ia:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ie}},setLocked:function(ie){I=ie},setClear:function(ie){fe!==ie&&(fe=ie,le&&(ie=1-ie),n.clearDepth(ie))},reset:function(){I=!1,J=null,de=null,fe=null,le=!1}}}function r(){let I=!1,le=null,J=null,de=null,fe=null,ie=null,Ee=null,_e=null,ut=null;return{setTest:function(ot){I||(ot?ne(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(ot){le!==ot&&!I&&(n.stencilMask(ot),le=ot)},setFunc:function(ot,en,on){(J!==ot||de!==en||fe!==on)&&(n.stencilFunc(ot,en,on),J=ot,de=en,fe=on)},setOp:function(ot,en,on){(ie!==ot||Ee!==en||_e!==on)&&(n.stencilOp(ot,en,on),ie=ot,Ee=en,_e=on)},setLocked:function(ot){I=ot},setClear:function(ot){ut!==ot&&(n.clearStencil(ot),ut=ot)},reset:function(){I=!1,le=null,J=null,de=null,fe=null,ie=null,Ee=null,_e=null,ut=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},p={},u={},m=new WeakMap,_=[],x=null,d=!1,h=null,y=null,A=null,M=null,E=null,b=null,R=null,v=new He(0,0,0),T=0,P=!1,N=null,B=null,V=null,O=null,F=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=re>=2);let ee=null,te={};const Fe=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),tt=new Et().fromArray(Fe),Je=new Et().fromArray(De);function et(I,le,J,de){const fe=new Uint8Array(4),ie=n.createTexture();n.bindTexture(I,ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<J;Ee++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ie}const Q={};Q[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Rr),ce(!1),ge(ul),ne(n.CULL_FACE),ae(Vn);function ne(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function Ae(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Be(I,le){return u[I]!==le?(n.bindFramebuffer(I,le),u[I]=le,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function be(I,le){let J=_,de=!1;if(I){J=m.get(le),J===void 0&&(J=[],m.set(le,J));const fe=I.textures;if(J.length!==fe.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ee=fe.length;ie<Ee;ie++)J[ie]=n.COLOR_ATTACHMENT0+ie;J.length=fe.length,de=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,de=!0);de&&n.drawBuffers(J)}function Xe(I){return x!==I?(n.useProgram(I),x=I,!0):!1}const bt={[Zi]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[ef]:n.FUNC_REVERSE_SUBTRACT};bt[tf]=n.MIN,bt[nf]=n.MAX;const Ye={[rf]:n.ZERO,[sf]:n.ONE,[af]:n.SRC_COLOR,[Nc]:n.SRC_ALPHA,[df]:n.SRC_ALPHA_SATURATE,[uf]:n.DST_COLOR,[lf]:n.DST_ALPHA,[of]:n.ONE_MINUS_SRC_COLOR,[Fc]:n.ONE_MINUS_SRC_ALPHA,[ff]:n.ONE_MINUS_DST_COLOR,[cf]:n.ONE_MINUS_DST_ALPHA,[hf]:n.CONSTANT_COLOR,[pf]:n.ONE_MINUS_CONSTANT_COLOR,[mf]:n.CONSTANT_ALPHA,[gf]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(I,le,J,de,fe,ie,Ee,_e,ut,ot){if(I===Vn){d===!0&&(Ae(n.BLEND),d=!1);return}if(d===!1&&(ne(n.BLEND),d=!0),I!==Qu){if(I!==h||ot!==P){if((y!==Zi||E!==Zi)&&(n.blendEquation(n.FUNC_ADD),y=Zi,E=Zi),ot)switch(I){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hn:n.blendFunc(n.ONE,n.ONE);break;case fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",I);break}else switch(I){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fl:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",I);break}A=null,M=null,b=null,R=null,v.set(0,0,0),T=0,h=I,P=ot}return}fe=fe||le,ie=ie||J,Ee=Ee||de,(le!==y||fe!==E)&&(n.blendEquationSeparate(bt[le],bt[fe]),y=le,E=fe),(J!==A||de!==M||ie!==b||Ee!==R)&&(n.blendFuncSeparate(Ye[J],Ye[de],Ye[ie],Ye[Ee]),A=J,M=de,b=ie,R=Ee),(_e.equals(v)===!1||ut!==T)&&(n.blendColor(_e.r,_e.g,_e.b,ut),v.copy(_e),T=ut),h=I,P=!1}function oe(I,le){I.side===mn?Ae(n.CULL_FACE):ne(n.CULL_FACE);let J=I.side===jt;le&&(J=!J),ce(J),I.blending===Er&&I.transparent===!1?ae(Vn):ae(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(I){N!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),N=I)}function ge(I){I!==Ku?(ne(n.CULL_FACE),I!==B&&(I===ul?n.cullFace(n.BACK):I===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),B=I}function Re(I){I!==V&&(X&&n.lineWidth(I),V=I)}function at(I,le,J){I?(ne(n.POLYGON_OFFSET_FILL),(O!==le||F!==J)&&(O=le,F=J,a.getReversed()&&(le=-le),n.polygonOffset(le,J))):Ae(n.POLYGON_OFFSET_FILL)}function Ve(I){I?ne(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function We(I){I===void 0&&(I=n.TEXTURE0+$-1),ee!==I&&(n.activeTexture(I),ee=I)}function L(I,le,J){J===void 0&&(ee===null?J=n.TEXTURE0+$-1:J=ee);let de=te[J];de===void 0&&(de={type:void 0,texture:void 0},te[J]=de),(de.type!==I||de.texture!==le)&&(ee!==J&&(n.activeTexture(J),ee=J),n.bindTexture(I,le||Q[I]),de.type=I,de.texture=le)}function Mt(){const I=te[ee];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ke(){try{n.compressedTexImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function g(){try{n.texSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function G(){try{n.texSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function ue(){try{n.texStorage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function he(){try{n.texStorage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function K(){try{n.texImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function j(){try{n.texImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function me(I){return p[I]!==void 0?p[I]:n.getParameter(I)}function Pe(I,le){p[I]!==le&&(n.pixelStorei(I,le),p[I]=le)}function C(I){tt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function z(I){Je.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Je.copy(I))}function se(I,le){let J=c.get(le);J===void 0&&(J=new WeakMap,c.set(le,J));let de=J.get(I);de===void 0&&(de=n.getUniformBlockIndex(le,I.name),J.set(I,de))}function ye(I,le){const de=c.get(le).get(I);l.get(le)!==de&&(n.uniformBlockBinding(le,de,I.__bindingPointIndex),l.set(le,de))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},p={},ee=null,te={},u={},m=new WeakMap,_=[],x=null,d=!1,h=null,y=null,A=null,M=null,E=null,b=null,R=null,v=new He(0,0,0),T=0,P=!1,N=null,B=null,V=null,O=null,F=null,tt.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Ae,bindFramebuffer:Be,drawBuffers:be,useProgram:Xe,setBlending:ae,setMaterial:oe,setFlipSided:ce,setCullFace:ge,setLineWidth:Re,setPolygonOffset:at,setScissorTest:Ve,activeTexture:We,bindTexture:L,unbindTexture:Mt,compressedTexImage2D:Ke,compressedTexImage3D:w,texImage2D:K,texImage3D:j,pixelStorei:Pe,getParameter:me,updateUBOMapping:se,uniformBlockBinding:ye,texStorage2D:ue,texStorage3D:he,texSubImage2D:g,texSubImage3D:G,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:C,viewport:z,reset:ve}}function Sg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,f=new WeakMap,p=new Set;let u;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,g){return _?new OffscreenCanvas(w,g):Ls("canvas")}function d(w,g,G){let W=1;const Y=Ke(w);if((Y.width>G||Y.height>G)&&(W=G/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ue=Math.floor(W*Y.width),he=Math.floor(W*Y.height);u===void 0&&(u=x(ue,he));const K=g?x(ue,he):u;return K.width=ue,K.height=he,K.getContext("2d").drawImage(w,0,0,ue,he),Oe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ue+"x"+he+")."),K}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function h(w){return w.generateMipmaps}function y(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,g,G,W,Y,ue=!1){if(w!==null){if(n[w]!==void 0)return n[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;W&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),G===n.SHORT&&he&&(K=he.R16_SNORM_EXT)),g===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),g===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),G===n.SHORT&&he&&(K=he.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),g===n.RGB&&(G===n.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),G===n.SHORT&&he&&(K=he.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),g===n.RGBA){const j=ue?Ps:je.getTransfer(Y);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=j===ft?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),G===n.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(w,g){let G;return w?g===null||g===Dn||g===Pr?G=n.DEPTH24_STENCIL8:g===An?G=n.DEPTH32F_STENCIL8:g===Cr&&(G=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Dn||g===Pr?G=n.DEPTH_COMPONENT24:g===An?G=n.DEPTH_COMPONENT32F:g===Cr&&(G=n.DEPTH_COMPONENT16),G}function b(w,g){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&p.delete(g)}function v(w){const g=w.target;g.removeEventListener("dispose",v),N(g)}function T(w){const g=i.get(w);if(g.__webglInit===void 0)return;const G=w.source,W=m.get(G);if(W){const Y=W[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(w),Object.keys(W).length===0&&m.delete(G)}i.remove(w)}function P(w){const g=i.get(w);n.deleteTexture(g.__webglTexture);const G=w.source,W=m.get(G);delete W[g.__cacheKey],a.memory.textures--}function N(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Y=0;Y<g.__webglFramebuffer[W].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[W][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const G=w.textures;for(let W=0,Y=G.length;W<Y;W++){const ue=i.get(G[W]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(G[W])}i.remove(w)}let B=0;function V(){B=0}function O(){return B}function F(w){B=w}function $(){const w=B;return w>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,w}function X(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function re(w,g){const G=i.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){const W=w.image;if(W===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(G,w,g);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+g)}function Z(w,g){const G=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Ae(G,w,g);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+g)}function ee(w,g){const G=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Ae(G,w,g);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+g)}function te(w,g){const G=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&G.__version!==w.version){Be(G,w,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+g)}const Fe={[Ba]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},De={[Nt]:n.NEAREST,[vf]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Ks]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},tt={[Ef]:n.NEVER,[Rf]:n.ALWAYS,[bf]:n.LESS,[Go]:n.LEQUAL,[Tf]:n.EQUAL,[Ho]:n.GEQUAL,[wf]:n.GREATER,[Af]:n.NOTEQUAL};function Je(w,g){if(g.type===An&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ht||g.magFilter===Ks||g.magFilter===Gr||g.magFilter===xi||g.minFilter===Ht||g.minFilter===Ks||g.minFilter===Gr||g.minFilter===xi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Fe[g.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Fe[g.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Fe[g.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,De[g.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,De[g.minFilter]),g.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,tt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==Gr&&g.minFilter!==xi||g.type===An&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function et(w,g){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const W=g.source;let Y=m.get(W);Y===void 0&&(Y={},m.set(W,Y));const ue=X(g);if(ue!==w.__cacheKey){Y[ue]===void 0&&(Y[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Y[ue].usedTimes++;const he=Y[w.__cacheKey];he!==void 0&&(Y[w.__cacheKey].usedTimes--,he.usedTimes===0&&P(g)),w.__cacheKey=ue,w.__webglTexture=Y[ue].texture}return G}function Q(w,g,G){return Math.floor(Math.floor(w/G)/g)}function ne(w,g,G,W){const ue=w.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,G,W,g.data);else{ue.sort((Pe,C)=>Pe.start-C.start);let he=0;for(let Pe=1;Pe<ue.length;Pe++){const C=ue[he],z=ue[Pe],se=C.start+C.count,ye=Q(z.start,g.width,4),ve=Q(C.start,g.width,4);z.start<=se+1&&ye===ve&&Q(z.start+z.count-1,g.width,4)===ye?C.count=Math.max(C.count,z.start+z.count-C.start):(++he,ue[he]=z)}ue.length=he+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Pe=0,C=ue.length;Pe<C;Pe++){const z=ue[Pe],se=Math.floor(z.start/4),ye=Math.ceil(z.count/4),ve=se%g.width,I=Math.floor(se/g.width),le=ye,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,ve,I,le,J,G,W,g.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Ae(w,g,G){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const Y=et(w,g),ue=g.source;t.bindTexture(W,w.__webglTexture,n.TEXTURE0+G);const he=i.get(ue);if(ue.version!==he.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=je.getPrimaries(je.workingColorSpace),de=g.colorSpace===ii?null:je.getPrimaries(g.colorSpace),fe=g.colorSpace===ii||J===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let j=d(g.image,!1,r.maxTextureSize);j=Mt(g,j);const me=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type);let C=M(g.internalFormat,me,Pe,g.normalized,g.colorSpace,g.isVideoTexture);Je(W,g);let z;const se=g.mipmaps,ye=g.isVideoTexture!==!0,ve=he.__version===void 0||Y===!0,I=ue.dataReady,le=b(g,j);if(g.isDepthTexture)C=E(g.format===vi,g.type),ve&&(ye?t.texStorage2D(n.TEXTURE_2D,1,C,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,C,j.width,j.height,0,me,Pe,null));else if(g.isDataTexture)if(se.length>0){ye&&ve&&t.texStorage2D(n.TEXTURE_2D,le,C,se[0].width,se[0].height);for(let J=0,de=se.length;J<de;J++)z=se[J],ye?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,z.width,z.height,me,Pe,z.data):t.texImage2D(n.TEXTURE_2D,J,C,z.width,z.height,0,me,Pe,z.data);g.generateMipmaps=!1}else ye?(ve&&t.texStorage2D(n.TEXTURE_2D,le,C,j.width,j.height),I&&ne(g,j,me,Pe)):t.texImage2D(n.TEXTURE_2D,0,C,j.width,j.height,0,me,Pe,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ye&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,C,se[0].width,se[0].height,j.depth);for(let J=0,de=se.length;J<de;J++)if(z=se[J],g.format!==xn)if(me!==null)if(ye){if(I)if(g.layerUpdates.size>0){const fe=Xl(z.width,z.height,g.format,g.type);for(const ie of g.layerUpdates){const Ee=z.data.subarray(ie*fe/z.data.BYTES_PER_ELEMENT,(ie+1)*fe/z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ie,z.width,z.height,1,me,Ee)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,z.width,z.height,j.depth,me,z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,C,z.width,z.height,j.depth,0,z.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,z.width,z.height,j.depth,me,Pe,z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,C,z.width,z.height,j.depth,0,me,Pe,z.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ye&&ve&&t.texStorage2D(n.TEXTURE_2D,le,C,se[0].width,se[0].height);for(let J=0,de=se.length;J<de;J++)z=se[J],g.format!==xn?me!==null?ye?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,z.width,z.height,me,z.data):t.compressedTexImage2D(n.TEXTURE_2D,J,C,z.width,z.height,0,z.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,z.width,z.height,me,Pe,z.data):t.texImage2D(n.TEXTURE_2D,J,C,z.width,z.height,0,me,Pe,z.data)}else if(g.isDataArrayTexture)if(ye){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,C,j.width,j.height,j.depth),I)if(g.layerUpdates.size>0){const J=Xl(j.width,j.height,g.format,g.type);for(const de of g.layerUpdates){const fe=j.data.subarray(de*J/j.data.BYTES_PER_ELEMENT,(de+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,j.width,j.height,1,me,Pe,fe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,me,Pe,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,C,j.width,j.height,j.depth,0,me,Pe,j.data);else if(g.isData3DTexture)ye?(ve&&t.texStorage3D(n.TEXTURE_3D,le,C,j.width,j.height,j.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,me,Pe,j.data)):t.texImage3D(n.TEXTURE_3D,0,C,j.width,j.height,j.depth,0,me,Pe,j.data);else if(g.isFramebufferTexture){if(ve)if(ye)t.texStorage2D(n.TEXTURE_2D,le,C,j.width,j.height);else{let J=j.width,de=j.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,C,J,de,0,me,Pe,null),J>>=1,de>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),p.add(g),J.onpaint=de=>{const fe=de.changedElements;for(const ie of p)fe.includes(ie.image)&&(ie.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const fe=n.RGBA,ie=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,fe,ie,Ee,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(se.length>0){if(ye&&ve){const J=Ke(se[0]);t.texStorage2D(n.TEXTURE_2D,le,C,J.width,J.height)}for(let J=0,de=se.length;J<de;J++)z=se[J],ye?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,me,Pe,z):t.texImage2D(n.TEXTURE_2D,J,C,me,Pe,z);g.generateMipmaps=!1}else if(ye){if(ve){const J=Ke(j);t.texStorage2D(n.TEXTURE_2D,le,C,J.width,J.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Pe,j)}else t.texImage2D(n.TEXTURE_2D,0,C,me,Pe,j);h(g)&&y(W),he.__version=ue.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Be(w,g,G){if(g.image.length!==6)return;const W=et(w,g),Y=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+G);const ue=i.get(Y);if(Y.version!==ue.__version||W===!0){t.activeTexture(n.TEXTURE0+G);const he=je.getPrimaries(je.workingColorSpace),K=g.colorSpace===ii?null:je.getPrimaries(g.colorSpace),j=g.colorSpace===ii||he===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const me=g.isCompressedTexture||g.image[0].isCompressedTexture,Pe=g.image[0]&&g.image[0].isDataTexture,C=[];for(let ie=0;ie<6;ie++)!me&&!Pe?C[ie]=d(g.image[ie],!0,r.maxCubemapSize):C[ie]=Pe?g.image[ie].image:g.image[ie],C[ie]=Mt(g,C[ie]);const z=C[0],se=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),ve=M(g.internalFormat,se,ye,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,le=ue.__version===void 0||W===!0,J=Y.dataReady;let de=b(g,z);Je(n.TEXTURE_CUBE_MAP,g);let fe;if(me){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ve,z.width,z.height);for(let ie=0;ie<6;ie++){fe=C[ie].mipmaps;for(let Ee=0;Ee<fe.length;Ee++){const _e=fe[Ee];g.format!==xn?se!==null?I?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,_e.width,_e.height,se,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ve,_e.width,_e.height,0,_e.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,_e.width,_e.height,se,ye,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ve,_e.width,_e.height,0,se,ye,_e.data)}}}else{if(fe=g.mipmaps,I&&le){fe.length>0&&de++;const ie=Ke(C[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Pe){I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,C[ie].width,C[ie].height,se,ye,C[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ve,C[ie].width,C[ie].height,0,se,ye,C[ie].data);for(let Ee=0;Ee<fe.length;Ee++){const ut=fe[Ee].image[ie].image;I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,ut.width,ut.height,se,ye,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ve,ut.width,ut.height,0,se,ye,ut.data)}}else{I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,se,ye,C[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ve,se,ye,C[ie]);for(let Ee=0;Ee<fe.length;Ee++){const _e=fe[Ee];I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,se,ye,_e.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ve,se,ye,_e.image[ie])}}}h(g)&&y(n.TEXTURE_CUBE_MAP),ue.__version=Y.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function be(w,g,G,W,Y,ue){const he=s.convert(G.format,G.colorSpace),K=s.convert(G.type),j=M(G.internalFormat,he,K,G.normalized,G.colorSpace),me=i.get(g),Pe=i.get(G);if(Pe.__renderTarget=g,!me.__hasExternalTextures){const C=Math.max(1,g.width>>ue),z=Math.max(1,g.height>>ue);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,ue,j,C,z,g.depth,0,he,K,null):t.texImage2D(Y,ue,j,C,z,0,he,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),We(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Y,Pe.__webglTexture,0,Ve(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Y,Pe.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(w,g,G){if(n.bindRenderbuffer(n.RENDERBUFFER,w),g.depthBuffer){const W=g.depthTexture,Y=W&&W.isDepthTexture?W.type:null,ue=E(g.stencilBuffer,Y),he=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;We(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(g),ue,g.width,g.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(g),ue,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ue,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,w)}else{const W=g.textures;for(let Y=0;Y<W.length;Y++){const ue=W[Y],he=s.convert(ue.format,ue.colorSpace),K=s.convert(ue.type),j=M(ue.internalFormat,he,K,ue.normalized,ue.colorSpace);We(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(g),j,g.width,g.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(g),j,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,j,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(w,g,G){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Je(n.TEXTURE_CUBE_MAP,g.depthTexture);const me=s.convert(g.depthTexture.format),Pe=s.convert(g.depthTexture.type);let C;g.depthTexture.format===qn?C=n.DEPTH_COMPONENT24:g.depthTexture.format===vi&&(C=n.DEPTH24_STENCIL8);for(let z=0;z<6;z++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,C,g.width,g.height,0,me,Pe,null)}}else re(g.depthTexture,0);const ue=Y.__webglTexture,he=Ve(g),K=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,j=g.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===qn)We(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,ue,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,ue,0);else if(g.depthTexture.format===vi)We(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,ue,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(w){const g=i.get(w),G=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=W}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(G)for(let W=0;W<6;W++)bt(g.__webglFramebuffer[W],w,W);else{const W=w.texture.mipmaps;W&&W.length>0?bt(g.__webglFramebuffer[0],w,0):bt(g.__webglFramebuffer,w,0)}else if(G){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),Xe(g.__webglDepthbuffer[W],w,!1);else{const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ue)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Xe(g.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(w,g,G){const W=i.get(w);g!==void 0&&be(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ye(w)}function oe(w){const g=w.texture,G=i.get(w),W=i.get(g);w.addEventListener("dispose",v);const Y=w.textures,ue=w.isWebGLCubeRenderTarget===!0,he=Y.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++),ue){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let j=0;j<g.mipmaps.length;j++)G.__webglFramebuffer[K][j]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(he)for(let K=0,j=Y.length;K<j;K++){const me=i.get(Y[K]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&We(w)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const j=Y[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const me=s.convert(j.format,j.colorSpace),Pe=s.convert(j.type),C=M(j.internalFormat,me,Pe,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),z=Ve(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,z,C,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Je(n.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)be(G.__webglFramebuffer[K][j],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else be(G.__webglFramebuffer[K],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(g)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let K=0,j=Y.length;K<j;K++){const me=Y[K],Pe=i.get(me);let C=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(C=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(C,Pe.__webglTexture),Je(C,me),be(G.__webglFramebuffer,w,me,n.COLOR_ATTACHMENT0+K,C,0),h(me)&&y(C)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),Je(K,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)be(G.__webglFramebuffer[j],w,g,n.COLOR_ATTACHMENT0,K,j);else be(G.__webglFramebuffer,w,g,n.COLOR_ATTACHMENT0,K,0);h(g)&&y(K),t.unbindTexture()}w.depthBuffer&&Ye(w)}function ce(w){const g=w.textures;for(let G=0,W=g.length;G<W;G++){const Y=g[G];if(h(Y)){const ue=A(w),he=i.get(Y).__webglTexture;t.bindTexture(ue,he),y(ue),t.unbindTexture()}}}const ge=[],Re=[];function at(w){if(w.samples>0){if(We(w)===!1){const g=w.textures,G=w.width,W=w.height;let Y=n.COLOR_BUFFER_BIT;const ue=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(w),K=g.length>1;if(K)for(let me=0;me<g.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const j=w.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<g.length;me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const Pe=i.get(g[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,G,W,0,0,G,W,Y,n.NEAREST),l===!0&&(ge.length=0,Re.length=0,ge.push(n.COLOR_ATTACHMENT0+me),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ge.push(ue),Re.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let me=0;me<g.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const Pe=i.get(g[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const g=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ve(w){return Math.min(r.maxSamples,w.samples)}function We(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(w){const g=a.render.frame;f.get(w)!==g&&(f.set(w,g),w.update())}function Mt(w,g){const G=w.colorSpace,W=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Cs&&G!==ii&&(je.getTransfer(G)===ft?(W!==xn||Y!==an)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",G)),g}function Ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=F,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yg(n,e){function t(i,r=ii){let s;const a=je.getTransfer(r);if(i===an)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return n.BYTE;if(i===$c)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Uo)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===Zc)return n.ALPHA;if(i===Jc)return n.RGB;if(i===xn)return n.RGBA;if(i===qn)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===Oo)return n.RED_INTEGER;if(i===bi)return n.RG;if(i===Bo)return n.RG_INTEGER;if(i===zo)return n.RGBA_INTEGER;if(i===vs||i===Ms||i===Ss||i===ys)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Ha||i===ka||i===Va)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===Xa||i===qa||i===$a||i===Ya||i===As||i===Ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wa||i===Xa)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qa)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$a)return s.COMPRESSED_R11_EAC;if(i===Ya)return s.COMPRESSED_SIGNED_R11_EAC;if(i===As)return s.COMPRESSED_RG11_EAC;if(i===Ka)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Za||i===Ja||i===Qa||i===ja||i===eo||i===to||i===no||i===io||i===ro||i===so||i===ao||i===oo||i===lo||i===co)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Za)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===to)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===no)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===io)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ro)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===so)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ao)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===co)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uo||i===fo||i===ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uo)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===po||i===mo||i===Rs||i===go)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===go)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`;class Tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new cu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sn({vertexShader:Eg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new zr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wg extends wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,m=null,_=null;const x=typeof XRWebGLBinding<"u",d=new Tg,h={},y=t.getContextAttributes();let A=null,M=null;const E=[],b=[],R=new ze;let v=null,T=null;const P=new sn;P.viewport=new Et;const N=new sn;N.viewport=new Et;const B=[P,N],V=new Ud;let O=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=E[Q];return ne===void 0&&(ne=new na,E[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=E[Q];return ne===void 0&&(ne=new na,E[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=E[Q];return ne===void 0&&(ne=new na,E[Q]=ne),ne.getHandSpace()};function $(Q){const ne=b.indexOf(Q.inputSource);if(ne===-1)return;const Ae=E[ne];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,c||a),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",re);for(let Q=0;Q<E.length;Q++){const ne=b[Q];ne!==null&&(b[Q]=null,E[Q].disconnect(ne))}O=null,F=null,d.reset();for(const Q in h)delete h[Q];if(e.setRenderTarget(A),m=null,u=null,p=null,r=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),T!==null){const Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",X),r.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Be=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=y.stencil?vi:qn,Be=y.stencil?Pr:Dn);const Xe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Xe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Mn(u.textureWidth,u.textureHeight,{format:xn,type:an,depthTexture:new Nr(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Mn(m.framebufferWidth,m.framebufferHeight,{format:xn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function re(Q){for(let ne=0;ne<Q.removed.length;ne++){const Ae=Q.removed[ne],Be=b.indexOf(Ae);Be>=0&&(b[Be]=null,E[Be].disconnect(Ae))}for(let ne=0;ne<Q.added.length;ne++){const Ae=Q.added[ne];let Be=b.indexOf(Ae);if(Be===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=b.length){b.push(Ae),Be=Xe;break}else if(b[Xe]===null){b[Xe]=Ae,Be=Xe;break}if(Be===-1)break}const be=E[Be];be&&be.connect(Ae)}}const Z=new D,ee=new D;function te(Q,ne,Ae){Z.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(Ae.matrixWorld);const Be=Z.distanceTo(ee),be=ne.projectionMatrix.elements,Xe=Ae.projectionMatrix.elements,bt=be[14]/(be[10]-1),Ye=be[14]/(be[10]+1),ae=(be[9]+1)/be[5],oe=(be[9]-1)/be[5],ce=(be[8]-1)/be[0],ge=(Xe[8]+1)/Xe[0],Re=bt*ce,at=bt*ge,Ve=Be/(-ce+ge),We=Ve*-ce;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(We),Q.translateZ(Ve),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const L=bt+Ve,Mt=Ye+Ve,Ke=Re-We,w=at+(Be-We),g=ae*Ye/Mt*L,G=oe*Ye/Mt*L;Q.projectionMatrix.makePerspective(Ke,w,g,G,L,Mt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Fe(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ne=Q.near,Ae=Q.far;d.texture!==null&&(d.depthNear>0&&(ne=d.depthNear),d.depthFar>0&&(Ae=d.depthFar)),V.near=N.near=P.near=ne,V.far=N.far=P.far=Ae,(O!==V.near||F!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,F=V.far),V.layers.mask=Q.layers.mask|6,P.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Be=Q.parent,be=V.cameras;Fe(V,Be);for(let Xe=0;Xe<be.length;Xe++)Fe(be[Xe],Be);be.length===2?te(V,P,N):V.projectionMatrix.copy(P.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),De(Q,V,Be)};function De(Q,ne,Ae){Ae===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Dr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(V)},this.getCameraTexture=function(Q){return h[Q]};let tt=null;function Je(Q,ne){if(f=ne.getViewerPose(c||a),_=ne,f!==null){const Ae=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Be=!1;Ae.length!==V.cameras.length&&(V.cameras.length=0,Be=!0);for(let Ye=0;Ye<Ae.length;Ye++){const ae=Ae[Ye];let oe=null;if(m!==null)oe=m.getViewport(ae);else{const ge=p.getViewSubImage(u,ae);oe=ge.viewport,Ye===0&&(e.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(M))}let ce=B[Ye];ce===void 0&&(ce=new sn,ce.layers.enable(Ye),ce.viewport=new Et,B[Ye]=ce),ce.matrix.fromArray(ae.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ae.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(oe.x,oe.y,oe.width,oe.height),Ye===0&&(V.matrix.copy(ce.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Be===!0&&V.cameras.push(ce)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){p=i.getBinding();const Ye=p.getDepthInformation(Ae[0]);Ye&&Ye.isValid&&Ye.texture&&d.init(Ye,r.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),p=i.getBinding();for(let Ye=0;Ye<Ae.length;Ye++){const ae=Ae[Ye].camera;if(ae){let oe=h[ae];oe||(oe=new cu,h[ae]=oe);const ce=p.getCameraImage(ae);oe.sourceTexture=ce}}}}for(let Ae=0;Ae<E.length;Ae++){const Be=b[Ae],be=E[Ae];Be!==null&&be!==void 0&&be.update(Be,ne,c||a)}tt&&tt(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const et=new pu;et.setAnimationLoop(Je),this.setAnimationLoop=function(Q){tt=Q},this.dispose=function(){}}}const Ag=new vt,Su=new Ge;Su.set(-1,0,0,0,1,0,0,0,1);function Rg(n,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,uu(n)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function r(d,h,y,A,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(d,h):h.isMeshLambertMaterial?(s(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(d,h),p(d,h)):h.isMeshPhongMaterial?(s(d,h),f(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(d,h),u(d,h),h.isMeshPhysicalMaterial&&m(d,h,M)):h.isMeshMatcapMaterial?(s(d,h),_(d,h)):h.isMeshDepthMaterial?s(d,h):h.isMeshDistanceMaterial?(s(d,h),x(d,h)):h.isMeshNormalMaterial?s(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&o(d,h)):h.isPointsMaterial?l(d,h,y,A):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===jt&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===jt&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const y=e.get(h),A=y.envMap,M=y.envMapRotation;A&&(d.envMap.value=A,d.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Su),d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function o(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,y,A){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*y,d.scale.value=A*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function f(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function p(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function u(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function m(d,h,y){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===jt&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.retroreflectivity>0&&(d.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,h){h.matcap&&(d.matcap.value=h.matcap)}function x(d,h){const y=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const b=E.program;i.uniformBlockBinding(M,b)}function c(M,E){let b=r[M.id];b===void 0&&(d(M),b=f(M),r[M.id]=b,M.addEventListener("dispose",y));const R=E.program;i.updateUBOMapping(M,R);const v=e.render.frame;s[M.id]!==v&&(u(M),s[M.id]=v)}function f(M){const E=p();M.__bindingPointIndex=E;const b=n.createBuffer(),R=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=r[M.id],b=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,T=b.length;v<T;v++){const P=b[v];if(Array.isArray(P))for(let N=0,B=P.length;N<B;N++)m(P[N],v,N,R);else m(P,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,E,b,R){if(x(M,E,b,R)===!0){const v=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){const B=T[N],V=h(B);_(B,M.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function _(M,E,b){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,b)}function x(M,E,b,R){const v=M.value,T=E+"_"+b;if(R[T]===void 0)return typeof v=="number"||typeof v=="boolean"?R[T]=v:ArrayBuffer.isView(v)?R[T]=v.slice():R[T]=v.clone(),!0;{const P=R[T];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function d(M){const E=M.uniforms;let b=0;const R=16;for(let T=0,P=E.length;T<P;T++){const N=Array.isArray(E[T])?E[T]:[E[T]];for(let B=0,V=N.length;B<V;B++){const O=N[B],F=Array.isArray(O.value)?O.value:[O.value];for(let $=0,X=F.length;$<X;$++){const re=F[$],Z=h(re),ee=b%R,te=ee%Z.boundary,Fe=ee+te;b+=te,Fe!==0&&R-Fe<Z.storage&&(b+=R-Fe),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=Z.storage}}}const v=b%R;return v>0&&(b+=R-v),M.__size=b,M.__cache={},this}function h(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",M),E}function y(M){const E=M.target;E.removeEventListener("dispose",y);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function A(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:A}}const Pg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function Lg(){return bn===null&&(bn=new _d(Pg,16,16,bi,In),bn.name="DFG_LUT",bn.minFilter=Ht,bn.magFilter=Ht,bn.wrapS=kn,bn.wrapT=kn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class Dg{constructor(e={}){const{canvas:t=Pf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=an}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=m,d=new Set([zo,Bo,Oo]),h=new Set([an,Dn,Cr,Pr,No,Fo]),y=new Uint32Array(4),A=new Int32Array(4),M=new D;let E=null,b=null;const R=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,B=null,V=null,O=null,F=null;this._outputColorSpace=rn;let $=0,X=0,re=null,Z=-1,ee=null;const te=new Et,Fe=new Et;let De=null;const tt=new He(0);let Je=0,et=t.width,Q=t.height,ne=1,Ae=null,Be=null;const be=new Et(0,0,et,Q),Xe=new Et(0,0,et,Q);let bt=!1;const Ye=new Wo;let ae=!1,oe=!1;const ce=new vt,ge=new D,Re=new Et,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function We(){return re===null?ne:1}let L=i;function Mt(S,U){return t.getContext(S,U)}let Ke,w,g,G,W,Y,ue,he,K,j,me,Pe,C,z,se,ye,ve,I,le,J,de,fe,ie;try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Io}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",en,!1),L===null){const U="webgl2";if(L=Mt(U,S),L===null)throw Mt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(S){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",en,!1),rt("WebGLRenderer: "+S.message),S}function Ee(){Ke=new Lm(L),Ke.init(),de=new yg(L,Ke),w=new Sm(L,Ke,e,de),g=new Mg(L,Ke),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=L.createFramebuffer(),O=L.createFramebuffer(),F=L.createFramebuffer(),G=new Um(L),W=new ag,Y=new Sg(L,Ke,g,W,w,de,G),ue=new Pm(P),he=new Fd(L),fe=new vm(L,he),K=new Dm(L,he,G,fe),j=new Fm(L,K,he,fe,G),I=new Nm(L,w,Y),se=new ym(W),me=new sg(P,ue,Ke,w,fe,se),Pe=new Rg(P,W),C=new lg,z=new pg(Ke),ve=new xm(P,ue,g,j,_,l),ye=new vg(P,j,w),ie=new Cg(L,G,w,g),le=new Mm(L,Ke,G),J=new Im(L,Ke,G),G.programs=me.programs,P.capabilities=w,P.extensions=Ke,P.properties=W,P.renderLists=C,P.shadowMap=ye,P.state=g,P.info=G}x!==an&&(T=new Bm(x,t.width,t.height,o,r,s));const _e=new wg(P,L);this.xr=_e,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(et,Q,!1))},this.getSize=function(S){return S.set(et,Q)},this.setSize=function(S,U,q=!0){if(_e.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}et=S,Q=U,t.width=Math.floor(S*ne),t.height=Math.floor(U*ne),q===!0&&(t.style.width=S+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(et*ne,Q*ne).floor()},this.setDrawingBufferSize=function(S,U,q){et=S,Q=U,ne=q,t.width=Math.floor(S*q),t.height=Math.floor(U*q),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(x===an){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,U,q,H){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,U,q,H),g.viewport(te.copy(be).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(Xe)},this.setScissor=function(S,U,q,H){S.isVector4?Xe.set(S.x,S.y,S.z,S.w):Xe.set(S,U,q,H),g.scissor(Fe.copy(Xe).multiplyScalar(ne).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(S){g.setScissorTest(bt=S)},this.setOpaqueSort=function(S){Ae=S},this.setTransparentSort=function(S){Be=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,q=!0){let H=0;if(S){let k=!1;if(re!==null){const Se=re.texture.format;k=d.has(Se)}if(k){const Se=re.texture.type,Ce=h.has(Se),Me=ve.getClearColor(),Ie=ve.getClearAlpha(),Ne=Me.r,qe=Me.g,Ze=Me.b;Ce?(y[0]=Ne,y[1]=qe,y[2]=Ze,y[3]=Ie,L.clearBufferuiv(L.COLOR,0,y)):(A[0]=Ne,A[1]=qe,A[2]=Ze,A[3]=Ie,L.clearBufferiv(L.COLOR,0,A))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",en,!1),ve.dispose(),C.dispose(),z.dispose(),W.dispose(),ue.dispose(),j.dispose(),fe.dispose(),ie.dispose(),me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",nt),_e.removeEventListener("sessionend",Kt),yt.stop()};function ut(S){S.preventDefault(),Ds("WebGLRenderer: Context Lost."),N=!0}function ot(){Ds("WebGLRenderer: Context Restored."),N=!1;const S=G.autoReset,U=ye.enabled,q=ye.autoUpdate,H=ye.needsUpdate,k=ye.type;Ee(),G.autoReset=S,ye.enabled=U,ye.autoUpdate=q,ye.needsUpdate=H,ye.type=k}function en(S){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function on(S){const U=S.target;U.removeEventListener("dispose",on),Ws(U)}function Ws(S){Xs(S),W.remove(S)}function Xs(S){const U=W.get(S).programs;U!==void 0&&(U.forEach(function(q){me.releaseProgram(q)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,q,H,k,Se){U===null&&(U=at);const Ce=k.isMesh&&k.matrixWorld.determinantAffine()<0,Me=Pu(S,U,q,H,k);g.setMaterial(H,Ce);let Ie=q.index,Ne=1;if(H.wireframe===!0){if(Ie=K.getWireframeAttribute(q),Ie===void 0)return;Ne=2}const qe=q.drawRange,Ze=q.attributes.position;let Ue=qe.start*Ne,lt=(qe.start+qe.count)*Ne;Se!==null&&(Ue=Math.max(Ue,Se.start*Ne),lt=Math.min(lt,(Se.start+Se.count)*Ne)),Ie!==null?(Ue=Math.max(Ue,0),lt=Math.min(lt,Ie.count)):Ze!=null&&(Ue=Math.max(Ue,0),lt=Math.min(lt,Ze.count));const At=lt-Ue;if(At<0||At===1/0)return;fe.setup(k,H,Me,q,Ie);let xt,pt=le;if(Ie!==null&&(xt=he.get(Ie),pt=J,pt.setIndex(xt)),k.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*We()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(k.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),g.setLineWidth(Ot*We()),k.isLineSegments?pt.setMode(L.LINES):k.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else k.isPoints?pt.setMode(L.POINTS):k.isSprite&&pt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ot=k._multiDrawStarts,we=k._multiDrawCounts,qt=k._multiDrawCount,it=Ie?he.get(Ie).bytesPerElement:1,ln=W.get(H).currentProgram.getUniforms();for(let yn=0;yn<qt;yn++)ln.setValue(L,"_gl_DrawID",yn),pt.render(Ot[yn]/it,we[yn])}else if(k.isInstancedMesh)pt.renderInstances(Ue,At,k.count);else if(q.isInstancedBufferGeometry){const Ot=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,we=Math.min(q.instanceCount,Ot);pt.renderInstances(Ue,At,we)}else pt.render(Ue,At)};function Ai(S,U,q,H){B!==null&&S.isNodeMaterial&&B.setObject(H,S),ae===!0&&se.setState(S,q,!1),S.transparent===!0&&S.side===mn&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,$n(S,U,H),S.side=yi,S.needsUpdate=!0,$n(S,U,H),S.side=mn):$n(S,U,H)}this.compile=function(S,U,q=null){q===null&&(q=S),B!==null&&B.renderStart(S,U,q),b=z.get(q),b.init(U),v.push(b),q.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),S!==q&&S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,ae=se.init(this.clippingPlanes,oe),ae===!0&&se.setGlobalState(this.clippingPlanes,U),B!==null&&ye.render(b.state.shadowsArray,q,U);const H=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Se=k.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Me=Se[Ce];Ai(Me,q,U,k),H.add(Me)}else Ai(Se,q,U,k),H.add(Se)}),b=v.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(S,U,q=null){const H=this.compile(S,U,q);return new Promise(k=>{function Se(){if(H.forEach(function(Ce){const Ie=W.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&H.delete(Ce)}),H.size===0){k(S);return}setTimeout(Se,10)}Ke.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let cr=null;function qs(S){cr&&cr(S)}function nt(){yt.stop()}function Kt(){yt.start()}const yt=new pu;yt.setAnimationLoop(qs),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(S){cr=S,_e.setAnimationLoop(S),S===null?yt.stop():yt.start()},_e.addEventListener("sessionstart",nt),_e.addEventListener("sessionend",Kt),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(S,U);const q=_e.enabled===!0&&_e.isPresenting===!0,H=T!==null&&(re===null||q)&&T.begin(P,re);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(U),U=_e.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,re),b=z.get(S,v.length),b.init(U),b.state.textureUnits=Y.getTextureUnits(),v.push(b),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ye.setFromProjectionMatrix(ce,Rn,U.reversedDepth),oe=this.localClippingEnabled,ae=se.init(this.clippingPlanes,oe),E=C.get(S,R.length),E.init(),R.push(E),_e.enabled===!0&&_e.isPresenting===!0){const Ce=P.xr.getDepthSensingMesh();Ce!==null&&Vt(Ce,U,-1/0,P.sortObjects)}Vt(S,U,0,P.sortObjects),E.finish(),B!==null&&B.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(Ae,Be),Ve=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Ve&&ve.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&se.beginShadows();const k=b.state.shadowsArray;if(ye.render(k,S,U),ae===!0&&se.endShadows(),(H&&T.hasRenderPass())===!1){const Ce=E.opaque,Me=E.transmissive;if(b.setupLights(),U.isArrayCamera){const Ie=U.cameras;if(Me.length>0)for(let Ne=0,qe=Ie.length;Ne<qe;Ne++){const Ze=Ie[Ne];Xt(Ce,Me,S,Ze)}Ve&&ve.render(S);for(let Ne=0,qe=Ie.length;Ne<qe;Ne++){const Ze=Ie[Ne];Wt(E,S,Ze,Ze.viewport)}}else Me.length>0&&Xt(Ce,Me,S,U),Ve&&ve.render(S),Wt(E,S,U)}re!==null&&X===0&&(Y.updateMultisampleRenderTarget(re),Y.updateRenderTargetMipmap(re)),H&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),fe.resetDefaultState(),Z=-1,ee=null,v.pop(),v.length>0?(b=v[v.length-1],Y.setTextureUnits(b.state.textureUnits),ae===!0&&se.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,B!==null&&B.renderEnd()};function Vt(S,U,q,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ye)){H&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const Ce=j.update(S),Me=S.material;Me.visible&&E.push(S,Ce,Me,q,Re.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ye))){const Ce=j.update(S),Me=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Re.copy(Ce.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){const Ie=Ce.groups;for(let Ne=0,qe=Ie.length;Ne<qe;Ne++){const Ze=Ie[Ne],Ue=Me[Ze.materialIndex];Ue&&Ue.visible&&E.push(S,Ce,Ue,q,Re.z,Ze,U)}}else Me.visible&&E.push(S,Ce,Me,q,Re.z,null,U)}}const Se=S.children;for(let Ce=0,Me=Se.length;Ce<Me;Ce++)Vt(Se[Ce],U,q,H)}function Wt(S,U,q,H){const{opaque:k,transmissive:Se,transparent:Ce}=S;b.setupLightsView(q),ae===!0&&se.setGlobalState(P.clippingPlanes,q),H&&g.viewport(te.copy(H)),k.length>0&&Zt(k,U,q),Se.length>0&&Zt(Se,U,q),Ce.length>0&&Zt(Ce,U,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xt(S,U,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Ue=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Mn(1,1,{generateMipmaps:!0,type:Ue?In:an,minFilter:xi,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const Se=b.state.transmissionRenderTarget[H.id],Ce=H.viewport||te;Se.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);const Me=P.getRenderTarget(),Ie=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(tt),Je=P.getClearAlpha(),Je<1&&P.setClearColor(16777215,.5),P.clear(),Ve&&ve.render(q);const qe=P.toneMapping;P.toneMapping=Pn;const Ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ae===!0&&se.setGlobalState(P.clippingPlanes,H),Zt(S,q,H),Y.updateMultisampleRenderTarget(Se),Y.updateRenderTargetMipmap(Se),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let lt=0,At=U.length;lt<At;lt++){const xt=U[lt],{object:pt,geometry:Ot,material:we,group:qt}=xt;if(we.side===mn&&pt.layers.test(H.layers)){const it=we.side;we.side=jt,we.needsUpdate=!0,Ri(pt,q,H,Ot,we,qt),we.side=it,we.needsUpdate=!0,Ue=!0}}Ue===!0&&(Y.updateMultisampleRenderTarget(Se),Y.updateRenderTargetMipmap(Se))}P.setRenderTarget(Me,Ie,Ne),P.setClearColor(tt,Je),Ze!==void 0&&(H.viewport=Ze),P.toneMapping=qe}function Zt(S,U,q){const H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,Se=S.length;k<Se;k++){const Ce=S[k],{object:Me,geometry:Ie,group:Ne}=Ce;let qe=Ce.material;qe.allowOverride===!0&&H!==null&&(qe=H),Me.layers.test(q.layers)&&Ri(Me,U,q,Ie,qe,Ne)}}function Ri(S,U,q,H,k,Se){B!==null&&k.isNodeMaterial&&B.setObject(S,k),S.onBeforeRender(P,U,q,H,k,Se),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(P,U,q,H,S,Se),k.transparent===!0&&k.side===mn&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,P.renderBufferDirect(q,U,H,k,S,Se),k.side=yi,k.needsUpdate=!0,P.renderBufferDirect(q,U,H,k,S,Se),k.side=mn):P.renderBufferDirect(q,U,H,k,S,Se),S.onAfterRender(P,U,q,H,k,Se)}function $n(S,U,q){U.isScene!==!0&&(U=at);const H=W.get(S),k=b.state.lights,Se=b.state.shadowsArray,Ce=k.state.version,Me=me.getParameters(S,k.state,Se,U,q,b.state.lightProbeGridArray),Ie=me.getProgramCacheKey(Me);let Ne=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=ue.get(S.envMap||H.environment,qe),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",on),Ne=new Map,H.programs=Ne);let Ze=Ne.get(Ie);if(Ze!==void 0){if(H.currentProgram===Ze&&H.lightsStateVersion===Ce)return Ci(S,Me),Ze}else Me.uniforms=me.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,q,Me),S.onBeforeCompile(Me,P),Ze=me.acquireProgram(Me,Ie),Ne.set(Ie,Ze),H.uniforms=Me.uniforms;const Ue=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=se.uniform),Ci(S,Me),H.needsLights=Du(S),H.lightsStateVersion=Ce,H.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.sunLights.value=k.state.sun,Ue.sunLightShadows.value=k.state.sunShadow,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.sunShadowMatrix.value=k.state.sunShadowMatrix,Ue.sunShadowCascade.value=k.state.sunShadowCascade,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=Ze,H.uniformsList=null,Ze}function Yn(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Es.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ci(S,U){const q=W.get(S);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Cu(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let q=0,H=S.length;q<H;q++){const k=S[q];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Pu(S,U,q,H,k){U.isScene!==!0&&(U=at),Y.resetTextureUnits();const Se=U.fog,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Me=re===null?P.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:je.workingColorSpace,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=ue.get(H.envMap||Ce,Ie),qe=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let xt=Pn;H.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(xt=P.toneMapping);const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=pt!==void 0?pt.length:0,we=W.get(H),qt=b.state.lights;if(ae===!0&&(oe===!0||S!==ee)){const gt=S===ee&&H.id===Z;se.setState(H,S,gt)}let it=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==qt.state.version||we.outputColorSpace!==Me||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==Ne||H.fog===!0&&we.fog!==Se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==se.numPlanes||we.numIntersection!==se.numIntersection)||we.vertexAlphas!==qe||we.vertexTangents!==Ze||we.morphTargets!==Ue||we.morphNormals!==lt||we.morphColors!==At||we.toneMapping!==xt||we.morphTargetsCount!==Ot||!!we.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,we.__version=H.version);let ln=we.currentProgram;it===!0&&(ln=$n(H,U,k),B&&H.isNodeMaterial&&B.onUpdateProgram(H,ln,we));let yn=!1,Kn=!1,Pi=!1;const ht=ln.getUniforms(),Tt=we.uniforms;if(g.useProgram(ln.program)&&(yn=!0,Kn=!0,Pi=!0),H.id!==Z&&(Z=H.id,Kn=!0),we.needsLights){const gt=Cu(b.state.lightProbeGridArray,k);we.lightProbeGrid!==gt&&(we.lightProbeGrid=gt,Kn=!0)}if(yn||ee!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(L,"projectionMatrix",S.projectionMatrix),ht.setValue(L,"viewMatrix",S.matrixWorldInverse);const Jn=ht.map.cameraPosition;Jn!==void 0&&Jn.setValue(L,ge.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,Kn=!0,Pi=!0)}if(we.needsLights&&(qt.state.sunShadowMap.length>0&&ht.setValue(L,"sunShadowMap",qt.state.sunShadowMap,Y),qt.state.directionalShadowMap.length>0&&ht.setValue(L,"directionalShadowMap",qt.state.directionalShadowMap,Y),qt.state.spotShadowMap.length>0&&ht.setValue(L,"spotShadowMap",qt.state.spotShadowMap,Y),qt.state.pointShadowMap.length>0&&ht.setValue(L,"pointShadowMap",qt.state.pointShadowMap,Y)),k.isSkinnedMesh){ht.setOptional(L,k,"bindMatrix"),ht.setOptional(L,k,"bindMatrixInverse");const gt=k.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ht.setValue(L,"boneTexture",gt.boneTexture,Y))}k.isBatchedMesh&&(ht.setOptional(L,k,"batchingTexture"),ht.setValue(L,"batchingTexture",k._matricesTexture,Y),ht.setOptional(L,k,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",k._indirectTexture,Y),ht.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",k._colorsTexture,Y));const Zn=q.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&I.update(k,q,ln),(Kn||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,ht.setValue(L,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Lg()),Kn){if(ht.setValue(L,"toneMappingExposure",P.toneMappingExposure),we.needsLights&&Lu(Tt,Pi),Se&&H.fog===!0&&Pe.refreshFogUniforms(Tt,Se),Pe.refreshMaterialUniforms(Tt,H,ne,Q,b.state.transmissionRenderTarget[S.id]),we.needsLights&&we.lightProbeGrid){const gt=we.lightProbeGrid;Tt.probesSH.value=gt.texture,Tt.probesMin.value.copy(gt.boundingBox.min),Tt.probesMax.value.copy(gt.boundingBox.max),Tt.probesResolution.value.copy(gt.resolution)}Es.upload(L,Yn(we),Tt,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Es.upload(L,Yn(we),Tt,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(L,"center",k.center),ht.setValue(L,"modelViewMatrix",k.modelViewMatrix),ht.setValue(L,"normalMatrix",k.normalMatrix),ht.setValue(L,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){const gt=H.uniformsGroups;for(let Jn=0,Li=gt.length;Jn<Li;Jn++){const rl=gt[Jn];ie.update(rl,ln),ie.bind(rl,ln)}}return ln}function Lu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Du(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(S,U,q){const H=W.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=U,W.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const q=W.get(S);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,q=0){re=S,$=U,X=q;let H=null,k=!1,Se=!1;if(S){const Me=W.get(S);if(Me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,Me.__webglFramebuffer),te.copy(S.viewport),Fe.copy(S.scissor),De=S.scissorTest,g.viewport(te),g.scissor(Fe),g.setScissorTest(De),Z=-1;return}else if(Me.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(Me.__hasExternalTextures)Y.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(Me.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Se=!0);const Ne=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?H=Ne[U][q]:H=Ne[U],k=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?H=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[q]:H=Ne,te.copy(S.viewport),Fe.copy(S.scissor),De=S.scissorTest}else te.copy(be).multiplyScalar(ne).floor(),Fe.copy(Xe).multiplyScalar(ne).floor(),De=bt;if(q!==0&&(H=V),g.bindFramebuffer(L.FRAMEBUFFER,H)&&g.drawBuffers(S,H),g.viewport(te),g.scissor(Fe),g.setScissorTest(De),k){const Me=W.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,q)}else if(Se){const Me=U;for(let Ie=0;Ie<S.textures.length;Ie++){const Ne=W.get(S.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,q,Me)}}else if(S!==null&&q!==0){const Me=W.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,q)}Z=-1};function il(S){const U=W.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=w.textureFormatReadable(S.format),U.__typeReadable=w.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,q,H,k,Se,Ce,Me=0){if(!(S&&S.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){g.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Ne=S.textures[Me],qe=Ne.format,Ze=Ne.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me);const Ue=il(Ne);if(Ue.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&q>=0&&q<=S.height-k&&L.readPixels(U,q,H,k,de.convert(qe),de.convert(Ze),Se)}finally{const Ne=re!==null?W.get(re).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,U,q,H,k,Se,Ce,Me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(U>=0&&U<=S.width-H&&q>=0&&q<=S.height-k){g.bindFramebuffer(L.FRAMEBUFFER,Ie);const Ne=S.textures[Me],qe=Ne.format,Ze=Ne.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me);const Ue=il(Ne);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(U,q,H,k,de.convert(qe),de.convert(Ze),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const At=re!==null?W.get(re).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,At);const xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lf(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(lt),L.deleteSync(xt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,q=0){const H=Math.pow(2,-q),k=Math.floor(S.image.width*H),Se=Math.floor(S.image.height*H),Ce=U!==null?U.x:0,Me=U!==null?U.y:0;Y.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ce,Me,k,Se),g.unbindTexture()},this.copyTextureToTexture=function(S,U,q=null,H=null,k=0,Se=0){let Ce,Me,Ie,Ne,qe,Ze,Ue,lt,At;const xt=S.isCompressedTexture?S.mipmaps[Se]:S.image;if(q!==null)Ce=q.max.x-q.min.x,Me=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,qe=q.min.y,Ze=q.isBox3?q.min.z:0;else{const Tt=Math.pow(2,-k);Ce=Math.floor(xt.width*Tt),Me=Math.floor(xt.height*Tt),S.isDataArrayTexture?Ie=xt.depth:S.isData3DTexture?Ie=Math.floor(xt.depth*Tt):Ie=1,Ne=0,qe=0,Ze=0}H!==null?(Ue=H.x,lt=H.y,At=H.z):(Ue=0,lt=0,At=0);const pt=de.convert(U.format),Ot=de.convert(U.type);let we;U.isData3DTexture?(Y.setTexture3D(U,0),we=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),we=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),we=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const qt=g.getParameter(L.UNPACK_ROW_LENGTH),it=g.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(L.UNPACK_SKIP_PIXELS),yn=g.getParameter(L.UNPACK_SKIP_ROWS),Kn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),g.pixelStorei(L.UNPACK_SKIP_ROWS,qe),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const Pi=S.isDataArrayTexture||S.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Tt=W.get(S),Zn=W.get(U),gt=W.get(Tt.__renderTarget),Jn=W.get(Zn.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,gt.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Li=0;Li<Ie;Li++)Pi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(S).__webglTexture,k,Ze+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(U).__webglTexture,Se,At+Li)),L.blitFramebuffer(Ne,qe,Ce,Me,Ue,lt,Ce,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||W.has(S)){const Tt=W.get(S),Zn=W.get(U);g.bindFramebuffer(L.READ_FRAMEBUFFER,O),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let gt=0;gt<Ie;gt++)Pi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,k,Ze+gt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,k),ht?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zn.__webglTexture,Se,At+gt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zn.__webglTexture,Se),k!==0?L.blitFramebuffer(Ne,qe,Ce,Me,Ue,lt,Ce,Me,L.COLOR_BUFFER_BIT,L.NEAREST):ht?L.copyTexSubImage3D(we,Se,Ue,lt,At+gt,Ne,qe,Ce,Me):L.copyTexSubImage2D(we,Se,Ue,lt,Ne,qe,Ce,Me);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(we,Se,Ue,lt,At,Ce,Me,Ie,pt,Ot,xt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(we,Se,Ue,lt,At,Ce,Me,Ie,pt,xt.data):L.texSubImage3D(we,Se,Ue,lt,At,Ce,Me,Ie,pt,Ot,xt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,Ue,lt,Ce,Me,pt,Ot,xt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,Ue,lt,xt.width,xt.height,pt,xt.data):L.texSubImage2D(L.TEXTURE_2D,Se,Ue,lt,Ce,Me,pt,Ot,xt);g.pixelStorei(L.UNPACK_ROW_LENGTH,qt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),g.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(L.UNPACK_SKIP_ROWS,yn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Kn),Se===0&&U.generateMipmaps&&L.generateMipmap(we),g.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){$=0,X=0,re=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function pc(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new St;let c=0;for(let f=0;f<n.length;++f){const p=n[f];let u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in p.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(p.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in p.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,f),c+=m}}if(t){let f=0;const p=[];for(let u=0;u<n.length;++u){const m=n[u].index;for(let _=0;_<m.count;++_)p.push(m.getX(_)+f);f+=n[u].attributes.position.count}l.setIndex(p)}for(const f in s){const p=mc(s[f]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,p)}for(const f in a){const p=a[f][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<p;++u){const m=[];for(let x=0;x<a[f].length;++x)m.push(a[f][x][u]);const _=mc(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(_)}}}return l}function mc(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const f=n[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*t}const a=new e(s),o=new Ut(a,t,i);let l=0;for(let c=0;c<n.length;++c){const f=n[c];if(f.isInterleavedBufferAttribute){const p=l/t;for(let u=0,m=f.count;u<m;u++)for(let _=0;_<t;_++){const x=f.getComponent(u,_);o.setComponent(u+p,_,x)}}else a.set(f.array,l);l+=f.count*t}return r!==void 0&&(o.gpuType=r),o}function Ig(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let a=0;const o=Object.keys(n.attributes),l={},c={},f=[],p=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,A=o.length;y<A;y++){const M=o[y],E=n.attributes[M];l[M]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const b=n.morphAttributes[M];b&&(c[M]||(c[M]=[]),b.forEach((R,v)=>{const T=new R.array.constructor(R.count*R.itemSize);c[M][v]=new R.constructor(T,R.itemSize,R.normalized)}))}const m=e*.5,_=Math.log10(1/e),x=Math.pow(10,_),d=m*x;for(let y=0;y<s;y++){const A=i?i.getX(y):y;let M="";for(let E=0,b=o.length;E<b;E++){const R=o[E],v=n.getAttribute(R),T=v.itemSize;for(let P=0;P<T;P++)M+=`${Math.trunc(v[p[P]](A)*x+d)},`}if(M in t)f.push(t[M]);else{for(let E=0,b=o.length;E<b;E++){const R=o[E],v=n.getAttribute(R),T=n.morphAttributes[R],P=v.itemSize,N=l[R],B=c[R];for(let V=0;V<P;V++){const O=p[V],F=u[V];if(N[F](a,v[O](A)),T)for(let $=0,X=T.length;$<X;$++)B[$][F](a,T[$][O](A))}}t[M]=a,f.push(a),a++}}const h=n.clone();for(const y in n.attributes){const A=l[y];if(h.setAttribute(y,new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)),y in c)for(let M=0;M<c[y].length;M++){const E=c[y][M];h.morphAttributes[y][M]=new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)}}return h.setIndex(f),h}const yu=["#58b8ff","#ff6a5a","#ffb347"],Ug="#8a90a6",wt=n=>n===Pt?Ug:yu[n],Ng=6,Fg=400,Og=120;function ks(n,e,t,i=1){const r=document.createElement("canvas");r.width=n*i,r.height=e*i;const s=r.getContext("2d");s.scale(i,i),t(s,n,e);const a=new vd(r);return a.colorSpace=rn,a}const bs=ks(128,128,n=>{const e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.1)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)}),gc=ks(128,128,n=>{n.strokeStyle="#fff",n.lineWidth=4,n.beginPath(),n.arc(64,64,58,0,Math.PI*2),n.stroke()});function Bg(n,e,t,i,r){for(let s=0;s<6e3;s++)n.fillStyle=i()<.5?`rgba(0,0,0,${r})`:`rgba(255,255,255,${r*.6})`,n.fillRect(i()*e,i()*t,.35,.35)}function zg(n){const e=Ti(Math.floor(n.hue*1e6)+n.id),t=new He;return ks(256,128,(r,s,a)=>{i(r,s,a),Bg(r,s,a,e,n.giant?.05:.12)},n.kind==="planet"?4:2);function i(r,s,a){if(n.home){r.fillStyle="#1d4f86",r.fillRect(0,0,s,a);for(let o=0;o<7;o++){const l=e()*s,c=a*(.2+e()*.6);for(let f=0;f<26;f++)t.setHSL(.22+e()*.12-(e()<.3?.14:0),.45,.3+e()*.1),r.fillStyle=`#${t.getHexString()}`,r.beginPath(),r.arc((l+(e()-.5)*50+s)%s,c+(e()-.5)*26,3+e()*9,0,Math.PI*2),r.fill()}r.fillStyle="rgba(240,248,255,0.9)",r.fillRect(0,0,s,6),r.fillRect(0,a-6,s,6),r.fillStyle="rgba(255,255,255,0.35)";for(let o=0;o<40;o++)r.beginPath(),r.ellipse(e()*s,e()*a,8+e()*20,2+e()*3,0,0,Math.PI*2),r.fill();return}if(n.kind==="planet"&&n.giant){const o=.05+n.hue*.12;for(let l=0;l<a;l++){const c=Math.sin(l*.18+Math.sin(l*.05)*3)*.5+.5;t.setHSL(o+c*.04,.35+c*.2,.35+c*.25+(e()-.5)*.03),r.fillStyle=`#${t.getHexString()}`,r.fillRect(0,l,s,1)}t.setHSL(o,.6,.55),r.fillStyle=`#${t.getHexString()}`,r.beginPath(),r.ellipse(s*e(),a*(.3+e()*.4),14,6,0,0,Math.PI*2),r.fill()}else{const o=n.kind!=="planet",l=o?.08:[.08,.55,.02,.33][Math.floor(n.hue*4)];t.setHSL(l,o?.05:.3,o?.45:.35),r.fillStyle=`#${t.getHexString()}`,r.fillRect(0,0,s,a);for(let c=0;c<90;c++)t.setHSL(l+(e()-.5)*.05,o?.05:.35,.25+e()*.3),r.fillStyle=`#${t.getHexString()}`,r.globalAlpha=.35,r.beginPath(),r.arc(e()*s,e()*a,2+e()*(o?8:22),0,Math.PI*2),r.fill();r.globalAlpha=.5;for(let c=0;c<(o?40:12);c++){const f=e()*s,p=e()*a,u=1+e()*4;r.strokeStyle="rgba(0,0,0,0.5)",r.beginPath(),r.arc(f,p,u,0,Math.PI*2),r.stroke()}r.globalAlpha=1,o||(r.fillStyle="rgba(255,255,255,0.8)",r.fillRect(0,0,s,5),r.fillRect(0,a-5,s,5))}}}function Gg(n){const e=Ti(n.id*131+7);return ks(256,128,(i,r,s)=>{i.fillStyle="#000",i.fillRect(0,0,r,s);const a=n.giant?6:n.kind==="moon"?5:18;for(let o=0;o<a;o++){const l=e()*r,c=s*(.15+e()*.7),f=20+Math.floor(e()*60);for(let p=0;p<f;p++){const u=e()**2;i.fillStyle=e()<.2?"#fff4d0":"#ffb95a",i.globalAlpha=.4+e()*.6,i.fillRect((l+(e()-.5)*30*u+r)%r,c+(e()-.5)*14*u,.45,.45)}}i.globalAlpha=1},4)}const Eu={value:new D};function Hg(n){return n.onBeforeCompile=e=>{e.uniforms.uSunView=Eu,e.fragmentShader=`uniform vec3 uSunView;
${e.fragmentShader}`.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      {
        float day = dot(normal, normalize(uSunView + vViewPosition));
        totalEmissiveRadiance *= smoothstep(0.12, -0.25, day);
      }`)},n}function kg(){const n=Math.PI/2,e=(p,u)=>(p.userData.tag=u,p),t=(p,u,m,_=0,x=0,d=0,h="hull")=>e(new li(p,u,m).translate(_,x,d),h),i=(p,u,m,_,x="hull",d=10)=>e(new Ln(p,u,m,d).rotateX(n).translate(0,0,_),x),r=(p,u)=>[i(p*.9,p*1.05,.1,u,"dark"),e(new Ln(p*.45,p*.9,.14,12,1,!0).rotateX(-n).translate(0,0,u-.11),"dark")],s=new He("#c9ced6"),a=new He("#3b414c"),o=p=>{const u=[],m=[];for(const _ of p){const x=_.toNonIndexed();if(_.userData.tag==="accent"){m.push(x);continue}const d=_.userData.tag==="dark"?a:s,h=new Float32Array(x.attributes.position.count*3);for(let y=0;y<h.length;y+=3)h.set([d.r,d.g,d.b],y);x.setAttribute("color",new Ut(h,3)),u.push(x)}return{base:pc(u),accent:pc(m)}},l=o([t(.16,.14,.16,0,0,.26),t(.165,.03,.12,0,.06,.26,"accent"),t(.12,.12,.06,0,0,.36,"accent"),i(.1,.1,.18,.08),i(.105,.105,.03,.08,"accent"),t(.2,.18,.12,0,0,-.08,"dark"),t(.36,.008,.14,0,.05,-.08,"dark"),t(.36,.008,.14,0,-.05,-.08,"dark"),t(.035,.035,.08,.1,.07,.26,"dark"),t(.035,.035,.08,-.1,-.07,.26,"dark"),...r(.1,-.2)]),c=o([t(.26,.1,.4,0,0,.05),t(.2,.06,.1,0,.07,.12,"accent"),t(.06,.06,.38,.17,0,.08,"accent"),t(.06,.06,.38,-.17,0,.08,"accent"),t(.02,.02,.14,.17,0,.32,"dark"),t(.02,.02,.14,-.17,0,.32,"dark"),t(.3,.12,.08,0,0,-.18,"dark"),...r(.11,-.26)]),f=o([t(.14,.14,.12,0,0,.32),t(.145,.04,.125,0,.05,.32,"accent"),t(.03,.03,.56,.05,.05,0,"dark"),t(.03,.03,.56,-.05,-.05,0,"dark"),t(.03,.03,.56,.05,-.05,0,"dark"),t(.03,.03,.56,-.05,.05,0,"dark"),t(.1,.1,.1,.12,0,.1),t(.1,.1,.1,-.12,0,.1,"accent"),t(.1,.1,.1,0,.12,-.04),t(.42,.006,.1,0,0,-.14,"dark"),t(.18,.16,.08,0,0,-.22),...r(.09,-.3)]);return[l,c,f]}function Vg(n){const e=new ri({color:"#c9ced8",metalness:.6,roughness:.4}),t=new _n;t.add(new mt(new zs(n,n*.12,8,32),e));const i=[];for(let a=0;a<40;a++){const o=a/40*Math.PI*2;i.push(new D(Math.cos(o)*n*1.13,Math.sin(o)*n*1.13,(a%3-1)*n*.05))}const r=new ou(new St().setFromPoints(i),new qo({color:"#ffd08a",size:2,sizeAttenuation:!1,transparent:!0,opacity:.9}));r.name="windows",r.visible=!1,t.add(r),t.add(new mt(new Ln(n*.15,n*.15,n*1.4,12).rotateX(Math.PI/2),e));for(let a=0;a<4;a++){const o=new mt(new Ln(n*.04,n*.04,n*2,6),e);o.rotation.z=a*Math.PI/4,t.add(o)}const s=new ri({color:"#2a3f7a",metalness:.3,roughness:.6,side:mn});for(const a of[-1,1]){const o=new mt(new zr(n*.5,n*1.4),s);o.position.z=a*n*1.1,o.rotation.y=Math.PI/2,t.add(o)}return t}function Wg(n){const e=Ti(n.id*97+1);let t=new Ko(n.size,5);t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=Ig(t);const i=Array.from({length:5},()=>({d:new D(e()-.5,e()-.5,e()-.5).normalize(),f:.6+e()*1.2,ph:e()*6.28,a:.05+e()*.07}));for(let c=0;c<4;c++)i.push({d:new D(e()-.5,e()-.5,e()-.5).normalize(),f:3+e()*3,ph:e()*6.28,a:.015+e()*.015});const r=Array.from({length:6},()=>({d:new D(e()-.5,e()-.5,e()-.5).normalize(),size:.2+e()*.25})),s=new D(1.2+e()*.5,.8+e()*.2,.9+e()*.3),a=t.attributes.position,o=new D,l=new D;for(let c=0;c<a.count;c++){o.fromBufferAttribute(a,c),l.copy(o).normalize();let f=1;for(const p of i)f+=p.a*Math.sin(l.dot(p.d)*p.f*3+p.ph);for(const p of r){const u=l.distanceTo(p.d);u<p.size?f-=.12*Math.cos(u/p.size*Math.PI*.5)**2:u<p.size*1.25&&(f+=.03)}o.multiplyScalar(f).multiply(s),a.setXYZ(c,o.x,o.y,o.z)}return t.computeVertexNormals(),new mt(t,new ri({color:"#8a7f72",roughness:.95,metalness:.05}))}function Xg(n){const e=[];for(let t=0;t<=128;t++){const i=t/128*Math.PI*2;e.push(new D(Math.cos(i)*n.r,Math.sin(i)*n.r*n.incl,Math.sin(i)*n.r))}return new Xo(new St().setFromPoints(e),new Ur({color:"#3a4460",transparent:!0,opacity:n.parent===null?.5:.35}))}function qg(n){const e=new He(n.home?"#6fb6ff":n.giant?"#e8d2a8":"#b9c8dc"),t=n.home?1.1:n.giant?.45:.6;return new mt(new Fr(n.size*1.05,48,32),new Sn({uniforms:{color:{value:e},strength:{value:t}},vertexShader:`varying vec3 vN; varying vec3 vV;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform vec3 color; uniform float strength; varying vec3 vN; varying vec3 vV;
        void main() {
          float rim = pow(1.0 - max(dot(vN, vV), 0.0), 3.0);
          gl_FragColor = vec4(color, rim * strength);
        }`,transparent:!0,blending:Hn,depthWrite:!1}))}const $g=new ri({color:"#b9c0cc",metalness:.6,roughness:.45}),Yg=new Ir({color:"#9fd4ff",transparent:!0,opacity:.35,wireframe:!0});function Kg(n,e,t,i){const r=i?$g:Yg,s=Math.max(.25,e.size*.14),a=new _n;if(n==="shipyard"){a.add(new mt(new zs(e.size*1.35,s*.12,6,48),r));for(let c=0;c<4;c++){const f=c/4*Math.PI*2,p=new mt(new li(s*.25,s*.25,s*1.2),r);p.position.set(Math.cos(f)*e.size*1.35,0,Math.sin(f)*e.size*1.35),p.lookAt(0,0,0),a.add(p)}return a.rotation.x=Math.PI/2+.35,a}const o=Ti(e.id*17+t*101+(n==="mine"?5:0)),l=new D(o()-.5,(o()-.5)*.9,o()-.5).normalize();if(n==="defence"){const c=new mt(new Ln(s*.5,s*.6,s*.35,8),r),f=new mt(new Ln(s*.08,s*.08,s*.9,6),r);f.position.set(0,s*.45,s*.25),f.rotation.x=.7,a.add(c,f)}else{a.add(new mt(new li(s*.9,s*.4,s*.7),r));const c=new mt(new Ln(s*.08,s*.14,s*1.4,5),r);if(c.position.y=s*.7,a.add(c),i){const f=new Ji(new _i({map:bs,color:"#ffc070",blending:Hn,depthWrite:!1,transparent:!0}));f.position.y=s*1.5,f.scale.setScalar(s*1.6),a.add(f)}}return a.position.copy(l).multiplyScalar(e.size*(e.kind==="asteroid"?1.1:1)),a.quaternion.setFromUnitVectors(new D(0,1,0),l),a}function Zg(n,e){const t=new Dg({canvas:n,antialias:!0,logarithmicDepthBuffer:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new ld;i.background=new He("#03040a");const r=new sn(45,1,.02,2e4);{const oe=new Float32Array(7500),ce=new D;for(let Re=0;Re<2500;Re++)ce.randomDirection().multiplyScalar(4e3+Math.random()*2e3),oe.set([ce.x,ce.y,ce.z],Re*3);const ge=new St;ge.setAttribute("position",new Ut(oe,3)),i.add(new ou(ge,new qo({size:1.3,sizeAttenuation:!1,color:"#9aa6c8",transparent:!0,opacity:.7})))}i.add(new mt(new Fr(Ng,32,24),new Ir({color:"#fff4d6"})));for(const[ae,oe,ce]of[[40,"#ffd27a",.9],[110,"#ff9a4a",.35]]){const ge=new Ji(new _i({map:bs,color:oe,opacity:ce,blending:Hn,depthWrite:!1,transparent:!0}));ge.scale.setScalar(ae),i.add(ge)}i.add(new Ld("#fff1dd",3,0,0)),i.add(new Dd("#26304a",.35));const s=kg(),a=new _n;i.add(a);let o=[];const l={az:.4,pol:.9,dist:380,minDist:1.2,maxDist:900,target:new D,vaz:0,vpol:0,follow:null};function c(ae){a.clear(),e.innerHTML="",tt.length=0,o=ae.bodies.map(oe=>{const ce=new _n;let ge;if(oe.kind==="station")ge=Vg(oe.size);else if(oe.kind==="asteroid")ge=Wg(oe);else if(ge=new mt(new Fr(oe.size,48,32),Hg(new ri({map:zg(oe),roughness:1,metalness:0,emissiveMap:Gg(oe),emissive:"#ffd08a",emissiveIntensity:0}))),ge.rotation.z=.2+oe.hue*.3,oe.kind==="planet"&&ce.add(qg(oe)),oe.giant&&oe.hue>.4){const Mt=new mt(new Zo(oe.size*1.4,oe.size*2.2,64),new ri({color:"#c8b89a",transparent:!0,opacity:.55,side:mn}));Mt.rotation.x=Math.PI/2-.25,ce.add(Mt)}ce.add(ge);const Re=new _n;ge.add(Re);const at=new Ji(new _i({map:gc,transparent:!0,depthWrite:!1,depthTest:!1,opacity:.8}));at.scale.setScalar(oe.size*3.2),ce.add(at),a.add(ce);const Ve=Xg(oe),We=new _n;We.add(Ve),a.add(We);const L=document.createElement("div");return L.className="lbl",e.appendChild(L),{b:oe,g:ce,body:ge,surface:Re,mark:at,lineHolder:We,label:L,shown:"",owner:null,pulse:0,sig:null,structs:null}})}const f=[];function p(ae){if(ae>=Fg)return null;if(!f[ae]){const oe=new mt(s[0].base,new ri({vertexColors:!0,metalness:.55,roughness:.45})),ce=new mt(s[0].accent,new ri({metalness:.3,roughness:.5}));oe.add(ce);const ge=new mt(new $o(.07,1,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.92),new Ir({color:"#9fd4ff",transparent:!0,opacity:.8,blending:Hn,depthWrite:!1}));oe.add(ge);const Re=new Ji(new _i({map:bs,blending:Hn,depthWrite:!1,transparent:!0}));i.add(oe,Re),f[ae]={mesh:oe,accent:ce,plume:ge,glint:Re}}return f[ae]}const u=new St,m=16,_=new Float32Array(200*m*6),x=new Float32Array(200*m*6);u.setAttribute("position",new Ut(_,3)),u.setAttribute("color",new Ut(x,3));const d=new Fl(u,new Ur({vertexColors:!0,transparent:!0,opacity:.45}));d.frustumCulled=!1,i.add(d);const h=[];function y(ae){if(!h[ae]){const oe=new Ji(new _i({map:gc,transparent:!0,depthWrite:!1,opacity:.5}));i.add(oe),h[ae]=oe}return h[ae]}const A=new St().setFromPoints(Array.from({length:33},()=>new D)),M=new Xo(A,new Rd({color:yu[0],dashSize:1.5,gapSize:1}));M.frustumCulled=!1,i.add(M);const E=[];let b=0;function R(ae,oe,ce,ge){let Re=E[b];Re||(Re=new Ji(new _i({map:bs,blending:Hn,depthWrite:!1,transparent:!0})),Re.userData={},i.add(Re),E[b]=Re),b=(b+1)%Og,Re.position.copy(ae),Re.material.color.set(oe),Object.assign(Re.userData,{age:0,life:ge,size:ce}),Re.visible=!0}const v=240,T=[];function P(ae,oe,ce){let ge=T.find(Re=>!Re.live);if(!ge){if(T.length>=v)return;ge={a:new D,b:new D,c:new He},T.push(ge)}ge.live=!0,ge.a.copy(ae),ge.b.copy(oe),ge.color=ce,ge.c.set(ce).lerp(new He("#ffffff"),.45),ge.age=0,ge.life=ui.clamp(ae.distanceTo(oe)/14,.12,.7)}const N=new St,B=new Float32Array(v*6),V=new Float32Array(v*6);N.setAttribute("position",new Ut(B,3)),N.setAttribute("color",new Ut(V,3));const O=new Fl(N,new Ur({vertexColors:!0,transparent:!0,blending:Hn,depthWrite:!1}));O.frustumCulled=!1,i.add(O);const F=new D,$=new D,X=new D,re=new D,Z=new D(0,1,0),ee=ae=>window.innerHeight/(2*Math.tan(ui.degToRad(r.fov/2))*r.position.distanceTo(ae)),te=(ae,oe)=>{let ce=Math.imul(ae^2654435769,2246822507)^Math.imul(oe+1663821227,3266489909);return ce^=ce>>>15,ce=Math.imul(ce,739982445),((ce^ce>>>12)>>>0)/4294967296};function Fe(){t.setSize(window.innerWidth,window.innerHeight,!1),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()}const De=[],tt=[];function Je(ae){if(!tt[ae]){const oe=document.createElement("div");oe.className="flbl",e.appendChild(oe),tt[ae]=oe}return tt[ae]}function et(ae,oe,ce,ge,Re,at,Ve,We=Ve){ae.mesh.visible=!0;const L=Math.floor(te(We,3)*s.length);ae.mesh.geometry!==s[L].base&&(ae.mesh.geometry=s[L].base,ae.accent.geometry=s[L].accent);const Mt=.9+te(We,5)*.25;ae.mesh.scale.set(.8,.8,.8*Mt),ae.mesh.material.color.setHSL(.6,.05+te(We,9)*.08,.85+te(We,11)*.15),ae.mesh.position.copy(oe),$.copy(oe).add(ce),ae.mesh.lookAt($),ae.accent.material.color.set(ge),ae.accent.material.emissive.set(ge).multiplyScalar(.35),ae.plume.visible=Re,Re&&ae.plume.scale.set(1,1,.8+Math.sin(at*40+Ve)*.15);const Ke=ee(oe);ae.glint.visible=!0,ae.glint.position.copy(oe),ae.glint.material.color.set(Re?"#cfe8ff":ge),ae.glint.material.opacity=Ke>60?0:Re?1:.7,ae.glint.scale.setScalar((Re?9:5)/Ke)}function Q(ae,oe,ce,ge){const Re=ae.time;for(const C of o){const z=vn(ae,C.b,Re);De[C.b.id]=z}if(l.follow!==null){const C=De[l.follow];l.target.lerp(F.set(C.x,C.y,C.z),Math.min(1,ce*6))}oe.dragging||(l.az+=l.vaz,l.pol+=l.vpol,l.vaz*=.92,l.vpol*=.92),l.pol=ui.clamp(l.pol,.15,Math.PI-.15),l.dist=ui.clamp(l.dist,l.minDist,l.maxDist),r.position.setFromSphericalCoords(l.dist,l.pol,l.az).add(l.target),r.lookAt(l.target),r.updateMatrixWorld();const at=window.innerWidth,Ve=window.innerHeight;let We=0;Eu.value.set(0,0,0).applyMatrix4(r.matrixWorldInverse);const L=oe.vis,Mt=C=>!L||L.bodies.has(C.id),Ke=C=>!L||C.owner===L.owner||L.sees(Tn(C,Re)),w=C=>!L||C.owner===L.owner||L.intel>=2&&Ke(C),g=C=>!L||C.owner===L.owner||L.intel>=3&&Ke(C),G=C=>!L||C.owner===L.owner||L.intel>=1,W=new Map;for(const C of ae.fleets){const z=ae.bodies[C.to];if(C.owner===z.owner||!g(C))continue;const se=C.T-(Re-C.t0),ye=`${C.to}:${C.owner}`,ve=W.get(ye)||{to:C.to,owner:C.owner,n:0,eta:1/0};ve.n+=C.n,ve.eta=Math.min(ve.eta,se),W.set(ye,ve)}const Y=new Map;for(const C of W.values())Y.has(C.to)||Y.set(C.to,[]),Y.get(C.to).push(C);const ue=new Set,he=new Map;for(const C of o){const z=C.b;if(z.parent===null||oe.selected===z.id||oe.target===z.id||z.sieges.length||ae.fleets.some(ye=>ye.to===z.id&&ye.owner!==z.owner))continue;const se=De[z.parent];F.copy(C.g.position).project(r),$.set(se.x,se.y,se.z).project(r),!(Math.hypot((F.x-$.x)*at,(F.y-$.y)*Ve)/2>=46)&&(ue.add(z.id),z.owner!==Pt&&z.ships>0&&Mt(z)&&(he.has(z.parent)||he.set(z.parent,[]),he.get(z.parent).push(`<span class="kid" style="color:${wt(z.owner)}">+${z.ships}</span>`)))}for(const C of o){const{b:z}=C,se=De[z.id];if(C.g.position.set(se.x,se.y,se.z),z.parent!==null){const nt=De[z.parent];C.lineHolder.position.set(nt.x,nt.y,nt.z)}z.kind==="station"?C.body.rotation.z+=ce*.5:z.kind==="asteroid"?(C.body.rotation.x+=ce*.3,C.body.rotation.y+=ce*.2):C.body.rotation.y+=ce*.05;const ye=wt(z.owner);if(C.owner!==z.owner){C.owner!==null&&(C.pulse=1),C.owner=z.owner,C.body.material&&C.body.material.emissiveMap&&(C.body.material.emissiveIntensity=z.owner===Pt?0:1.6);const nt=C.body.getObjectByName&&C.body.getObjectByName("windows");nt&&(nt.visible=z.owner!==Pt),C.mark.material.color.set(ye),C.label.style.color=ye}C.pulse=Math.max(0,C.pulse-ce);const ve=z.structures.map(nt=>nt.type+(nt.left>0?"~":"")).join();ve!==C.sig&&(C.sig=ve,C.structs&&C.structs.removeFromParent(),C.surface.clear(),C.structs=new _n,z.structures.forEach((nt,Kt)=>{if(z.kind==="station"&&nt.type==="shipyard")return;const yt=Kg(nt.type,z,Kt,nt.left<=0);(nt.type==="shipyard"?C.structs:C.surface).add(yt)}),C.g.add(C.structs));const I=oe.selected===z.id,le=oe.target===z.id,J=ee(C.g.position),de=Math.max(z.size*3.2*J,22);C.mark.scale.setScalar(de/J*(1+C.pulse*.6+(I?Math.sin(ge*5)*.06:0))),C.mark.material.opacity=I?1:le?.9:z.owner===Pt?.25:.7,z.size*J>70&&(C.mark.material.opacity*=.25),I||le?C.mark.material.color.set(I?"#ffffff":ye):C.mark.material.color.set(ye);const fe=Mt(z);C.structs&&(C.structs.visible=fe),C.surface.visible=fe;const ie=fe&&z.sieges.length>0,Ee=[],_e=[],ut=(nt,Kt,yt,Vt,Wt,Xt)=>{for(let Zt=0;Zt<nt;Zt++){const Ri=p(We++);if(!Ri)return;const $n=te(Wt,Zt),Yn=$n*Math.PI*2+ge*Vt*(.8+$n*.4),Ci=yt*(1+te(Zt,Wt)*.3);F.set(se.x+Math.cos(Yn)*Ci,se.y+Math.sin(Yn*.7+$n)*Ci*.15,se.z+Math.sin(Yn)*Ci),X.set(-Math.sin(Yn),0,Math.cos(Yn)),et(Ri,F,X,wt(Kt),!1,ge,Zt,Wt*131+Zt),Ri.glint.material.opacity*=.6,Xt&&Xt.push({p:F.clone(),owner:Kt})}};fe&&ut(Math.min(z.ships,20),z.owner,z.size*1.8+.4,.25,z.id*13,ie?Ee:null);for(const nt of fe?z.sieges:[])ut(Math.min(nt.n,20),nt.owner,z.size*2.6+.8,-.18,z.id*29+nt.owner,_e);if(ie){for(let yt=0;yt<Math.ceil(z.guns);yt++){const Vt=te(z.id,yt*2)*Math.PI*2+ge*.05,Wt=(te(yt*2+1,z.id)-.5)*1.6,Xt=z.size*1.02;Ee.push({p:new D(se.x+Math.cos(Vt)*Math.cos(Wt)*Xt,se.y+Math.sin(Wt)*Xt,se.z+Math.sin(Vt)*Math.cos(Wt)*Xt),owner:z.owner})}const nt=_e.length+Ee.length;let Kt=nt*ce*1.6;for(;Kt>0&&_e.length&&Ee.length;){if(Math.random()<Kt){const yt=Math.random()<_e.length/nt,Vt=(yt?_e:Ee)[Math.random()*(yt?_e:Ee).length|0],Wt=(yt?Ee:_e)[Math.random()*(yt?Ee:_e).length|0];P(Vt.p,Wt.p,wt(Vt.owner))}Kt-=1}for(const[yt,Vt]of[[z.lostDef,Ee],[z.lostAtk,_e]])for(let Wt=0;Wt<Math.min(3,yt||0);Wt++){const Xt=Vt.length?Vt[Math.random()*Vt.length|0].p:F.set(se.x,se.y,se.z);R(Xt,"#ffffff",3,.3),R(Xt,"#ffc070",5,1.2);for(let Zt=0;Zt<4;Zt++)$.set(Xt.x+(Math.random()-.5)*1.6,Xt.y+(Math.random()-.5)*1.6,Xt.z+(Math.random()-.5)*1.6),R($,"#ff8a40",1.4,1+Math.random()*.8)}}if(z.lostDef=z.lostAtk=0,z.captured&&(C.pulse=1,z.captured=!1),F.copy(C.g.position).project(r),F.z>1||ue.has(z.id)){C.label.style.visibility="hidden";continue}const en=(fe?z.sieges:[]).map(nt=>`<span class="atk" style="color:${wt(nt.owner)}">⚔ ${nt.n}</span>`).join(""),on=fe?z.owner===Pt?`<i class="guns">◆${Math.ceil(z.guns)}</i>`:`<b>${z.ships}</b>`:'<b class="unk">?</b>',Ws=(he.get(z.id)||[]).join(""),Xs=(Y.get(z.id)||[]).map(nt=>{const Kt=Math.max(0,nt.eta);return`<span class="inc" style="color:${wt(nt.owner)}">▼${nt.n} ${Math.floor(Kt/60)}:${String(Math.floor(Kt%60)).padStart(2,"0")}</span>`}).join(""),Ai=`<span class="row1">${on}${Ws}</span>${en}${Xs}<small>${z.name}</small>`;Ai!==C.shown&&(C.label.innerHTML=Ai,C.shown=Ai),C.label.style.visibility="visible";const cr=(F.x*.5+.5)*at,qs=(-F.y*.5+.5)*Ve;C.label.style.transform=`translate(${cr}px, ${qs+de/2+2}px) translate(-50%, 0)`}let K=0,j=0;for(const C of ae.fleets){if(!Ke(C))continue;const z=Tn(C,Re),se=wt(C.owner),ye=new D(z.nx,z.ny,z.nz);X.set(z.vx,z.vy,z.vz),X.lengthSq()<1e-9&&X.copy(ye),X.normalize(),re.crossVectors(X,Z),re.lengthSq()<1e-6&&re.set(1,0,0),re.normalize();for(let ve=0;ve<C.n;ve++){const I=p(We++);if(!I)break;const le=Math.floor(ve/3),J=ve%3-1,de=Re-C.t0,fe=ui.smoothstep(Math.min(de,C.T-de),0,12)*.92+.08;F.set(z.x,z.y,z.z).addScaledVector(re,(J*1.1+le%2*.45+(te(C.id,ve)-.5)*.15)*fe).addScaledVector(Z,((le%2?.35:-.2)+(te(ve,C.id)-.5)*.12)*fe).addScaledVector(X,-le*1.3*fe),et(I,F,ye,se,z.burning,ge,ve,C.id*97+ve)}if(K<200*m&&w(C)){const ve=new He(se);let I=z;for(let fe=1;fe<=m;fe++){const ie=z.progress+(1-z.progress)*fe/m,Ee=Tn(C,C.t0+ie*C.T),_e=1-fe/m*.7;_.set([I.x,I.y,I.z,Ee.x,Ee.y,Ee.z],K*6),x.set([ve.r*_e,ve.g*_e,ve.b*_e,ve.r*_e,ve.g*_e,ve.b*_e],K*6),K++,I=Ee}const le=y(j++);le.visible=!0,le.position.set(C.p1.x,C.p1.y,C.p1.z),le.material.color.set(se);const J=C.owner!==0,de=J?1+.35*Math.sin(ge*6):1;le.material.opacity=J?.9:.5,le.scale.setScalar((J?22:14)*de/ee(le.position))}}for(let C=We;C<f.length;C++)f[C].mesh.visible=!1,f[C].glint.visible=!1;let me=0;for(const C of ae.fleets){const z=Tn(C,Re);F.set(z.x,z.y,z.z).project(r);const se=Je(me++);if(F.z>1||!Ke(C)){se.style.visibility="hidden";continue}const ye=C.owner===0,ve=`▸ ${G(C)?C.n:"?"}`;se._t!==ve&&(se._t=ve,se.textContent=ve),se.style.color=wt(C.owner),se.style.borderColor=wt(C.owner),se.style.opacity=ye?oe.fleet===C.id?1:.85:.6,se.classList.toggle("sel",oe.fleet===C.id),se.style.visibility="visible",se.style.transform=`translate(${(F.x*.5+.5)*at+12}px, ${(-F.y*.5+.5)*Ve-9}px)`}for(let C=me;C<tt.length;C++)tt[C].style.visibility="hidden";for(let C=j;C<h.length;C++)h[C].visible=!1;u.setDrawRange(0,K*2),u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0;let Pe=0;for(const C of T){if(!C.live)continue;C.age+=ce;const z=C.age/C.life;if(z>=1){C.live=!1,R(C.b,C.color,.5,.25);continue}if(Pe>=v)continue;F.lerpVectors(C.a,C.b,Math.max(0,z-.18)),$.lerpVectors(C.a,C.b,z),B.set([F.x,F.y,F.z,$.x,$.y,$.z],Pe*6);const se=C.c;V.set([se.r*.2,se.g*.2,se.b*.2,se.r,se.g,se.b],Pe*6),Pe++}N.setDrawRange(0,Pe*2),N.attributes.position.needsUpdate=!0,N.attributes.color.needsUpdate=!0;for(const C of E){if(!C.visible)continue;C.userData.age+=ce;const z=C.userData.age/C.userData.life;if(z>=1){C.visible=!1;continue}C.scale.setScalar(C.userData.size*(.4+Math.sqrt(z))),C.material.opacity=Math.min(1,(1-z)*1.6)}if(oe.preview){const{p1:C}=oe.preview;M.visible=!0;const z={...oe.preview,t0:0};for(let ye=0;ye<=32;ye++){const ve=Tn(z,ye/32*z.T);A.attributes.position.setXYZ(ye,ve.x,ve.y,ve.z)}A.attributes.position.needsUpdate=!0,M.computeLineDistances(),M.material.dashSize=6/ee(F.set(C.x,C.y,C.z)),M.material.gapSize=M.material.dashSize*.7;const se=y(j++);se.visible=!0,se.position.set(C.x,C.y,C.z),se.material.color.set("#ffffff"),se.material.opacity=.6,se.scale.setScalar(22/ee(se.position))}else M.visible=!1;t.render(i,r)}function ne(ae,oe){const ce=window.innerWidth,ge=window.innerHeight;let Re=null,at=1/0;for(const Ve of o){if(F.copy(Ve.g.position).project(r),F.z>1)continue;const We=Math.hypot((F.x*.5+.5)*ce-ae,(-F.y*.5+.5)*ge-oe),L=Math.max(30,Ve.b.size*ee(Ve.g.position)+12);We<L&&We<at&&(at=We,Re=Ve.b.id)}return Re}function Ae(ae,oe,ce,ge){let Re=null,at=24;for(const Ve of ae.fleets){if(Ve.owner!==ge)continue;const We=Tn(Ve,ae.time);if(F.set(We.x,We.y,We.z).project(r),F.z>1)continue;const L=Math.hypot((F.x*.5+.5)*window.innerWidth-oe,(-F.y*.5+.5)*window.innerHeight-ce);L<at&&(at=L,Re=Ve.id)}return Re}function Be(ae,oe){const ce=new D(ae/window.innerWidth*2-1,-(oe/window.innerHeight)*2+1,.5).unproject(r),ge=new Bs(r.position,ce.sub(r.position).normalize()),Re=new Gn().setFromNormalAndCoplanarPoint(r.getWorldDirection(new D),l.target);return ge.intersectPlane(Re,new D)}function be(ae,oe,ce){l.follow=null;const ge=Be(ae,oe),Re=ui.clamp(l.dist*ce,l.minDist,l.maxDist),at=Re/l.dist;l.dist=Re,ge&&l.target.lerp(ge,1-at)}function Xe(ae,oe){l.follow=null;const ce=2*l.dist*Math.tan(ui.degToRad(r.fov/2))/window.innerHeight,ge=new D().setFromMatrixColumn(r.matrixWorld,0),Re=new D().crossVectors(Z,ge).normalize();l.target.addScaledVector(ge,-ae*ce).addScaledVector(Re,oe*ce)}function bt(ae,oe,ce=!0){if(l.follow=oe,oe===null||!ce)return;const ge=ae.bodies[oe];l.dist=Math.max(l.minDist,ge.size*9+3)}function Ye(ae){return F.copy(o[ae].g.position).project(r),{x:(F.x*.5+.5)*window.innerWidth,y:(-F.y*.5+.5)*window.innerHeight}}return{build:c,render:Q,resize:Fe,pick:ne,pickFleet:Ae,orbit:l,zoomAt:be,pan:Xe,focus:bt,screenOf:Ye}}const Le=n=>document.getElementById(n),Mi=(n,e)=>{n._html!==e&&(n._html=e,n.innerHTML=e)},ct=Zg(Le("scene"),Le("labels")),ai=(()=>{const n={rivals:1,difficulty:"normal"};try{return{...n,...JSON.parse(localStorage.getItem("perihelion")||"{}")}}catch{return n}})(),Jg=()=>{try{localStorage.setItem("perihelion",JSON.stringify(ai))}catch{}};let Te=null,Vs=[],fn=!1;const wa=[1,2,4,8];let wr=1;const pe={selected:null,target:null,fleet:null,count:1,preview:null,dragging:!1,vis:null,slot:null},Un=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`;function bu(n,e,t){const i=()=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.v===String(e())));n.addEventListener("click",r=>{const s=r.target.closest("button");s&&(t(s.dataset.v),Jg(),i())}),i()}bu(Le("rivals"),()=>ai.rivals,n=>ai.rivals=Number(n));bu(Le("difficulty"),()=>ai.difficulty,n=>ai.difficulty=n);function Qg(){const n=Math.random()*2147483648|0;Te=bc({seed:n,opponents:ai.rivals});const e=Ti(n^2748);Vs=Array.from({length:ai.rivals},(i,r)=>Ic(r+1,ai.difficulty,e)),pe.selected=pe.target=pe.preview=pe.fleet=null,pe.slot=null,So={},Le("research").hidden=!0,ct.build(Te),pe.vis=Eo(Te,st);const t=Te.bodies.find(i=>i.owner===st);ct.focus(Te,t.id,!1),ct.orbit.target.set(0,0,0),ct.orbit.dist=t.size*12+40,ct.orbit.pol=.9,Le("menu").hidden=!0,Le("end").hidden=!0,Le("hud").hidden=!1,fn=!0,Gt()}Le("play").addEventListener("click",Qg);Le("again").addEventListener("click",()=>{Le("end").hidden=!0,Le("menu").hidden=!1,Le("resume").hidden=!0,Le("play").textContent="Play"});Le("pause").addEventListener("click",Tu);Le("resume").addEventListener("click",()=>{Le("menu").hidden=!0,fn=!0});function Tu(){!Te||Te.winner!==null||!fn||(fn=!1,Le("menu").hidden=!1,Le("resume").hidden=!1,Le("play").textContent="New game")}document.addEventListener("visibilitychange",()=>document.hidden&&Tu());Le("warp").addEventListener("click",()=>{wr=wa[(wa.indexOf(wr)+1)%wa.length],Le("warp").textContent=`${wr}×`});Le("system").addEventListener("click",()=>{ct.orbit.follow=null,ct.orbit.target.set(0,0,0),ct.orbit.dist=650});function wu(){const n=pe.fleet!==null&&Te?Te.fleets.find(a=>a.id===pe.fleet):null;if(n||(pe.fleet=null),Le("fleet").hidden=!n||!fn||pe.selected!==null,Le("fleet").hidden)return;const e=Tn(n,Te.time),t=n.T-(Te.time-n.t0),i=e.flipping?"flipping":e.phase===1?"burning toward":"braking for",r=Te.bodies[n.to],s=Math.hypot(e.vx,e.vy,e.vz);Mi(Le("fleet"),`<b>${n.n} ship${n.n===1?"":"s"}</b> from ${Te.bodies[n.from].name}, ${i} <b>${r.name}</b><br>arrive in <b>${Un(t)}</b> · ${Math.round(e.progress*100)}% · ${s.toFixed(2)} u/s`)}function Gt(){wu();const n=pe.selected!==null&&Te?Te.bodies[pe.selected]:null,e=!!n&&n.owner===st&&fn;if(Le("actions").hidden=!e,Le("system").hidden=ct.orbit.follow===null,!e){pe.preview=null;return}if(pe.count=n.ships?Math.max(1,Math.min(pe.count,n.ships)):0,Le("count").textContent=pe.count,Le("buildrow").hidden=pe.target!==null,pe.target===null){pe.preview=null;const t=n.kind==="station"?"Station":n.kind[0].toUpperCase()+n.kind.slice(1);Mi(Le("info"),`<span class="tag">${t}</span><b>${n.name}</b><span class="grow"></span><span class="num">${n.ships}</span><span class="tag">ship${n.ships===1?"":"s"}</span>`),Le("launch").disabled=!0,jg(n)}else{const t=Te.bodies[pe.target];pe.preview=gi(Te,n,t);const i=t.owner===st?"reinforce":`${t.ships} ship${t.ships===1?"":"s"}, ${Math.ceil(t.guns)} gun${Math.ceil(t.guns)===1?"":"s"}`,r=t.owner===st?0:Lo(Te,t),a=!pe.vis||pe.vis.bodies.has(t.id)?r?`${i}, +${r.toFixed(1)} cover from ${Te.bodies[t.parent].name}`:i:"defences unknown";n.ships<1?Mi(Le("info"),`No ships at <b>${n.name}</b> to send`):Mi(Le("info"),`<b>${pe.count}</b> → <b>${t.name}</b> (${a}) · arrive in <b>${Un(pe.preview.T)}</b>`),Le("launch").disabled=n.ships<1}}const sr=["","I","II","III"],_c={shipyard:"Yard",mine:"Mine",defence:"Guns",lab:"Lab"},ms=n=>`${Math.max(0,Math.min(100,Math.floor(n*100)))}%`;function xc(n){return n.next?1-n.left/Ro({...n,level:n.next-1}):n.left>0?1-n.left/ke.structures[n.type].time:null}function jg(n){const e=Tc(n);pe.slot!==null&&pe.slot>=e&&(pe.slot=null);const t=[];for(let s=0;s<e;s++){const a=n.structures[s],o=pe.slot===s?" on":"";if(!a){t.push(`<button class="cell empty${o}" data-slot="${s}"><span>+</span></button>`);continue}const l=ke.structures[a.type],c=xc(a),f=l.maxLevel?`<i class="pips">${"▮".repeat(a.level)}${"▯".repeat(l.maxLevel-a.level)}</i>`:"",p=c===null?"":`<i class="prog" style="width:${ms(c)}"></i>`;t.push(`<button class="cell${c===null?"":" busy"}${o}" data-slot="${s}"><b>${_c[a.type]}</b>${f}${p}</button>`)}let i=`<div class="cells">${t.join("")}</div>`;if(pe.slot!==null){const s=n.structures[pe.slot];let a="";if(!s)a=["shipyard","mine","defence","lab"].map(o=>{const l=Ao(Te,n,o);return l&&l!=="not enough credits"?"":`<button data-b="${o}" ${l?"disabled":""}>${_c[o]}<small>${ke.structures[o].cost}</small></button>`}).join("");else{const o=ke.structures[s.type],l=xc(s),c=s.next?`upgrading → ${sr[s.next]} · ${ms(l)}`:s.left>0?`building · ${ms(l)}`:o.maxLevel?`level ${sr[s.level]}`:"online",f=Co(Te,n,s),p=!f||f==="not enough credits"?`<button data-u="${pe.slot}" ${f?"disabled":""}>Upgrade<small>${nr(s)}</small></button>`:"",u=Cc(Te,n,s);a=`<span class="what">${o.name} · ${c}</span>${p}<button class="danger" data-d="${pe.slot}" ${u?"disabled":""}>Scrap<small>${ws(s)}</small></button>`}i+=`<div class="ctx">${a}</div>`}const r=wo(n);if(r){const s=Po(Te,n),a=n.queue?`<span class="what">Queue <b class="num">${n.queue}</b><i class="meter"><i style="width:${ms(n.build)}"></i></i></span>`:`<span class="what">${r} yard${r===1?"":"s"} idle</span>`;i+=`<div class="ctx ships">${a}`+(n.queue?`<button data-cancel="1" class="danger">✕<small>+${Math.round(ke.ship.cost*ke.cancelRefund)}</small></button>`:"")+`<button data-b="ship" ${s?"disabled":""}>+ Ship<small>${ke.ship.cost}</small></button></div>`}Mi(Le("buildrow"),i)}Le("buildrow").addEventListener("click",n=>{if(pe.selected===null)return;const e=Te.bodies[pe.selected],t=n.target.closest("button[data-slot]");if(t){const l=Number(t.dataset.slot);pe.slot=pe.slot===l?null:l,Gt();return}if(n.target.closest("button[data-cancel]")){Hu(Te,e)&&si("Ship build cancelled",wt(st)),Gt();return}const i=n.target.closest("button[data-u]");if(i){const l=e.structures[Number(i.dataset.u)];l&&Pa(Te,e,l)&&si(`Upgrading ${ke.structures[l.type].name} to ${sr[l.next]} · ${Math.round(Ro({...l,level:l.next-1}))}s`,wt(st)),Gt();return}const r=n.target.closest("button[data-d]");if(r){const l=e.structures[Number(r.dataset.d)];l&&Gu(Te,e,l)&&si(`${ke.structures[l.type].name} scrapped at ${e.name}`,wt(st)),pe.slot=null,Gt();return}const s=n.target.closest("button[data-b]");if(!s)return;const a=s.dataset.b;(a==="ship"?Pc(Te,e):Ki(Te,e,a))&&(si(a==="ship"?`Ship ordered at ${e.name}`:`${ke.structures[a].name} under construction at ${e.name}`,wt(st)),a!=="ship"&&(pe.slot=null)),Gt()});function Jo(){const n=Te.tech[st],e=n.project;if(Le("rbar").hidden=!fn||!e,e){const t=Math.floor((1-e.left/e.total)*100),i=Un(e.left/_s(Te,st));Mi(Le("rbar"),`Researching <b>${tr[e.key].name} ${sr[n[e.key]+1]}</b> · ${t}% · ${i}`)}Le("research").hidden||(Le("rstatus").textContent=`speed ×${_s(Te,st).toFixed(1)}`,Mi(Le("rlist"),Object.entries(tr).map(([t,i])=>{const r=n[t],s="●".repeat(r)+"○".repeat(i.cost.length-r),a=Ar(Te,st,t);if(!a)return`<button class="tech-row" disabled><span class="t"><b>${i.name}<span class="pips">${s}</span></b><small>Complete</small></span></button>`;const o=e&&e.key===t,l=yo(Te,st,t),c=o?`Researching · ${Math.floor((1-e.left/e.total)*100)}%`:`${a.text} · ${Un(a.time/_s(Te,st))}`;return`<button class="tech-row" data-k="${t}" ${l?"disabled":""}><span class="t"><b>${i.name} ${sr[a.level]}<span class="pips">${s}</span></b><small>${c}</small></span><span class="c">${o?"":a.cost}</span></button>`}).join("")))}Le("rnd").addEventListener("click",()=>{Le("research").hidden=!Le("research").hidden,pe.selected=pe.target=null,Gt(),Jo()});Le("rclose").addEventListener("click",()=>{Le("research").hidden=!0});Le("rlist").addEventListener("click",n=>{const e=n.target.closest("button[data-k]");e&&(yc(Te,st,e.dataset.k)&&(si(`Researching ${tr[e.dataset.k].name}`,wt(st)),Le("research").hidden=!0),Jo())});Le("less").addEventListener("click",()=>{pe.count=Math.max(1,pe.count-1),Gt()});Le("more").addEventListener("click",()=>{pe.count+=1,Gt()});Le("launch").addEventListener("click",e_);Le("focus").addEventListener("click",()=>{const n=pe.target??pe.selected;n!==null&&ct.focus(Te,n),Gt()});function e_(){if(pe.selected===null||pe.target===null||pe.count<1)return;const n=yr(Te,Te.bodies[pe.selected],Te.bodies[pe.target],pe.count);n&&si(`${n.n} ship${n.n===1?"":"s"} burning for ${Te.bodies[n.to].name} · ${Un(n.T)}`,wt(st)),pe.selected=pe.target=null,Gt()}let vc=0;function si(n,e){const t=Le("toast");t.textContent=n,t.style.color=e,t.classList.add("show"),clearTimeout(vc),vc=setTimeout(()=>t.classList.remove("show"),2800)}function t_(n,e,t){if(pe.selected===null){const i=ct.pickFleet(Te,e,t,st);if(i!==null){pe.fleet=i,Gt();return}}pe.fleet=null,n!==null&&ct.focus(Te,n,!1),n===null?pe.target!==null?pe.target=null:pe.selected=null:pe.selected!==null&&n===pe.target||(pe.selected!==null&&n!==pe.selected?pe.target=n:n===pe.selected?pe.selected=pe.target=null:Te.bodies[n].owner===st&&(pe.selected=n,pe.slot=null,pe.target=null)),Gt()}const ar=Le("scene"),Cn=new Map;let Ct=null,gs={t:0,id:null};ar.addEventListener("pointerdown",n=>{if(fn){n.preventDefault();try{ar.setPointerCapture(n.pointerId)}catch{}if(Cn.set(n.pointerId,{x:n.clientX,y:n.clientY}),Cn.size===1)Ct={kind:"tap",x0:n.clientX,y0:n.clientY};else if(Cn.size===2){const[e,t]=[...Cn.values()];Ct={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2}}pe.dragging=!0,ct.orbit.vaz=ct.orbit.vpol=0}});ar.addEventListener("pointermove",n=>{const e=Cn.get(n.pointerId);if(!e||!Ct)return;const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,Ct.kind==="pinch"){if(Cn.size<2)return;const[r,s]=[...Cn.values()],a=Math.hypot(r.x-s.x,r.y-s.y),o=(r.x+s.x)/2,l=(r.y+s.y)/2;ct.pan(o-Ct.mx,l-Ct.my),ct.zoomAt(o,l,Ct.d/Math.max(1,a)),Ct.d=a,Ct.mx=o,Ct.my=l;return}if(Ct.kind==="tap"&&Math.hypot(n.clientX-Ct.x0,n.clientY-Ct.y0)>10&&(Ct.kind="orbit"),Ct.kind==="orbit"){const r=4/window.innerHeight;ct.orbit.az-=t*r,ct.orbit.pol-=i*r,ct.orbit.vaz=-t*r,ct.orbit.vpol=-i*r}});function Au(n){if(Cn.delete(n.pointerId)){if(Ct?.kind==="tap"&&Cn.size===0){const e=ct.pick(n.clientX,n.clientY),t=performance.now();e!==null&&gs.id===e&&t-gs.t<350?(ct.focus(Te,e),gs={t:0,id:null},Gt()):(gs={t,id:e},t_(e,n.clientX,n.clientY))}Cn.size===0?(Ct=null,pe.dragging=!1):Ct={kind:"orbit"}}}ar.addEventListener("pointerup",Au);ar.addEventListener("pointercancel",n=>{Ct=null,Au(n)});ar.addEventListener("wheel",n=>{n.preventDefault(),ct.zoomAt(n.clientX,n.clientY,Math.exp(n.deltaY*.001))},{passive:!1});document.addEventListener("contextmenu",n=>n.preventDefault());for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,e=>e.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});const Ts=["You","Red","Amber"];function Aa(n,e,t,i,r=s=>Math.round(s)){const p=t.at(-1).t||1,u=Math.max(1,...t.flatMap(y=>y.p.map(A=>A[e]))),m=y=>30+y/p*256,_=y=>8+(1-y/u)*104,x=i.map(y=>{const A=t.map(E=>`${m(E.t).toFixed(1)},${_(E.p[y][e]).toFixed(1)}`).join(" "),M=t.at(-1).p[y][e];return`<polyline points="${A}" fill="none" stroke="${wt(y)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><text x="${m(p)+4}" y="${_(M)+4}" font-size="10" fill="#aab1c8">${Ts[y]}</text>`}).join(""),d=[0,.5,1].map(y=>`<line x1="30" x2="286" y1="${_(u*y)}" y2="${_(u*y)}" stroke="rgba(160,180,255,0.12)" /><text x="26" y="${_(u*y)+3}" font-size="9" fill="#858ca6" text-anchor="end">${r(u*y)}</text>`).join(""),h=`<text x="30" y="126" font-size="9" fill="#858ca6">0:00</text><text x="286" y="126" font-size="9" fill="#858ca6" text-anchor="end">${Un(p)}</text>`;return`<div class="chart" data-key="${e}"><h3>${n}</h3><svg viewBox="0 0 320 130" data-l="30" data-r="286" data-w="320">${d}${h}${x}<line class="cross" y1="8" y2="112" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg><div class="readout">Touch the chart to read values</div></div>`}function n_(){const n=Te.stats,e=Array.from({length:Te.players},(s,a)=>a),t=[["Ships built","built"],["Ships lost","lost"],["Enemy ships destroyed","killed"],["Worlds captured","captured"],["Worlds lost","worldsLost"],["Credits earned","earned"],["Credits spent","spent"],["Research completed","research"]],i=`<div class="legend">${e.map(s=>`<span><i style="background:${wt(s)}"></i>${Ts[s]}</span>`).join("")}</div>`,r=`<table class="totals"><tr><th></th>${e.map(s=>`<th style="color:${wt(s)}">${Ts[s]}</th>`).join("")}</tr>`+t.map(([s,a])=>`<tr><td>${s}</td>${e.map(o=>`<td>${Math.round(n.totals[o][a])}</td>`).join("")}</tr>`).join("")+"</table>";Le("report").innerHTML=i+r+Aa("Ships","ships",n.series,e)+Aa("Worlds held","worlds",n.series,e)+Aa("Income (credits/s)","income",n.series,e,s=>s.toFixed(1));for(const s of Le("report").querySelectorAll(".chart")){const a=s.querySelector("svg"),o=s.dataset.key,l=c=>{const f=a.getBoundingClientRect(),p=(c.clientX-f.left)/f.width*Number(a.dataset.w),u=Number(a.dataset.l),m=Number(a.dataset.r),_=Math.min(1,Math.max(0,(p-u)/(m-u))),x=n.series[Math.round(_*(n.series.length-1))],d=a.querySelector(".cross"),h=u+x.t/(n.series.at(-1).t||1)*(m-u);d.setAttribute("x1",h),d.setAttribute("x2",h),d.setAttribute("visibility","visible"),s.querySelector(".readout").innerHTML=`${Un(x.t)} · `+e.map(y=>{const A=x.p[y][o];return`${Ts[y]} <b>${o==="income"?A.toFixed(1):Math.round(A)}</b>`}).join(" · ")};a.addEventListener("pointerdown",l),a.addEventListener("pointermove",l)}}function i_(){fn=!1,pe.selected=pe.target=null,Gt();const n=Te.winner===st;Le("end-title").textContent=n?"Victory":"Defeat",Le("end-title").style.color=wt(n?st:Te.winner),Le("end-sub").textContent=n?`The system is yours after ${Un(Te.time)}.`:`Your last world fell at ${Un(Te.time)}.`,n_(),setTimeout(()=>Le("end").hidden=!1,1200)}let Mc=performance.now(),Ra=0,So={};const Sc=new Map;function Ru(n){const e=Math.min(.1,(n-Mc)/1e3);if(Mc=n,Te){if(fn){let t=e*wr;for(;t>0;){const i=Math.min(.25,t);for(const r of Vs)Uc(Te,r,i);Do(Te,i),t-=i}if(pe.selected!==null&&Te.bodies[pe.selected].owner!==st&&(pe.selected=pe.target=null),pe.fleet!==null&&wu(),Ra-=e,Ra<=0){Ra=.25,pe.vis=Eo(Te,st),Gt(),Jo();const i=Te.tech[st],r=Object.keys(tr).find(s=>i[s]>(So[s]??0));r&&si(`${tr[r].name} ${sr[i[r]]} complete`,wt(st)),So={...i},Le("clock").innerHTML=`<b>₵ ${Math.floor(Te.credits[st])}</b> +${Rc(Te,st).toFixed(1)}/s · T+${Un(Te.time)}`;for(const s of Te.bodies){const a=Sc.get(s.id);a!==void 0&&a!==s.owner&&(a===st||s.owner===st)&&si(s.owner===st?`${s.name} taken`:`${s.name} lost`,wt(s.owner)),Sc.set(s.id,s.owner)}}Te.winner!==null&&i_()}ct.render(Te,pe,e*(fn?wr:.2),n/1e3)}requestAnimationFrame(Ru)}window.addEventListener("resize",ct.resize);ct.resize();Te=bc({seed:11,opponents:2});Vs=[0,1,2].map(n=>Ic(n,"hard",Ti(5+n)));ct.build(Te);ct.orbit.dist=330;(function n(){if(!(fn||Le("menu").hidden)){for(let e=0;e<4;e++){for(const t of Vs)Uc(Te,t,.25);Do(Te,.25)}ct.orbit.az+=.001,setTimeout(n,50)}})();requestAnimationFrame(Ru);window.__perihelion={get game(){return Te},view:ct,ui:pe,sim:{launch:yr,fleetState:Tn,step:Do}};
