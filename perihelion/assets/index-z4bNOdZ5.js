var H0=n=>{throw TypeError(n)};var Ns=(n,e,t)=>e.has(n)?H0("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);function $0(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Md={ansible:'<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>',drives:'<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>',sensors:'<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',intel:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',weapons:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',armour:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',industry:'<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>',array:'<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',targeting:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',kinetic:'<path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M4 9v6"/>',torch:'<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>',hardened:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>',pdnet:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',sundiver:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',massdriver:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',ringyard:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',citadel:'<path d="M10 5V3"/><path d="M14 5V3"/><path d="M15 21v-3a3 3 0 0 0-6 0v3"/><path d="M18 3v8"/><path d="M18 5H6"/><path d="M22 11H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"/><path d="M6 3v8"/>',college:'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',spy:'<path d="M18 11c-1.5 0-2.5.5-3 2"/><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"/><path d="M6 11c1.5 0 2.5.5 3 2"/>'},W0={guns:"M3 12h10M5 12V9h6v3M8 9V3.5",attack:"M3 3l10 10M13 3L3 13M3 10v3h3M13 10v3h-3",fleet:"M5 3.5l6 4.5-6 4.5",probe:"M8 2.5l5 5.5-5 5.5-5-5.5z",incoming:"M4 5l4 6 4-6",reinforce:"M4 11l4-6 4 6",system:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",focus:"M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0",pause:"M5.5 3.5v9M10.5 3.5v9",play:"M5 3l8 5-8 5z",close:"M4 4l8 8M12 4l-8 8",assist:"M12.5 5.5A5 5 0 1 0 13 9M12.5 2v3.5H9",spy:"M2.5 7.5h11M4.5 7.5l1.5-4h4l1.5 4M5.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 11.5h1",dark:"M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z",seam:"M8 1.5l4.5 4-4.5 8.5-4.5-8.5zM3.5 5.5h9M6 5.5l2 8.5 2-8.5",relay:"M3.5 9.5a5 5 0 0 0 7-7zM7 6l4.5-4.5M6 11l-2 3.5h7L9 11",depot:"M8 1.5C11 5.5 12 7.5 12 10a4 4 0 0 1-8 0c0-2.5 1-4.5 4-8.5zM6.5 10.5a1.5 1.5 0 0 0 1.5 1.5",post:"M8 9v5.5M5.5 14.5h5M5.2 6.2a4 4 0 0 1 5.6 0M3 4a7 7 0 0 1 10 0M8 8.5m-.6 0a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0",fortress:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5z",archive:"M2 3.5h4.5A1.5 1.5 0 0 1 8 5v9a1.5 1.5 0 0 0-1.5-1.5H2zM14 3.5H9.5A1.5 1.5 0 0 0 8 5v9a1.5 1.5 0 0 1 1.5-1.5H14z",hulk:"M8 5v9.5M5 7.5h6M2.5 10.5a5.5 4.5 0 0 0 11 0M8 2.2m-1.3 0a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0",forge:"M8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5M3.4 3.4l1.8 1.8M10.8 10.8l1.8 1.8M12.6 3.4l-1.8 1.8M5.2 10.8l-1.8 1.8M8 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0",comet:"M5 11m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 9l6.5-6.5M7.8 10.8l5-3.3M5.2 8.2l3.3-5",derelict:"M1.5 9.5l3.5-3h6l3.5 3-3.5 3H5zM9 6.5L7.5 4M6.5 9.5l1.5 1.5 1-2",signal:"M1.5 8.5h3l2-5 3 9 2-4h3",wreck:"M8 1.5v13M2.4 4.8l11.2 6.4M13.6 4.8L2.4 11.2",convoy:"M2 4.5l3 3.5-3 3.5M6.5 4.5l3 3.5-3 3.5M11 4.5l3 3.5-3 3.5",cache:"M2.5 5L8 2l5.5 3v6L8 14l-5.5-3zM2.5 5L8 8l5.5-3M8 8v6",drives:"M8 1.5l2.5 5h-5zM5.5 6.5h5v4h-5zM6.5 10.5L5 14.5M9.5 10.5l1.5 4M8 10.5v4",sensors:"M2.5 10a6 6 0 0 0 8.5-8.5zM6.8 6.2l5-5M12 1.5h2v2",intel:"M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",weapons:"M2 14l8-8M9.5 6.5l1.5-4 2.5 2.5-4 1.5M3 10l3 3",armour:"M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 4.5v7M5 6.5v3M11 6.5v3",industry:"M3 13l5.5-5.5M9.2 2.6a3.3 3.3 0 1 0 4.2 4.2l-2.2-.4-.6-1.6zM2 14l1-1",ansible:"M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4.6 4.6a4.8 4.8 0 0 0 0 6.8M11.4 4.6a4.8 4.8 0 0 1 0 6.8M2.2 2.2a8.2 8.2 0 0 0 0 11.6M13.8 2.2a8.2 8.2 0 0 1 0 11.6",targeting:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M8 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 1v3M8 12v3M1 8h3M12 8h3",kinetic:"M1.5 8h7M5.5 4.5L9 8l-3.5 3.5M11 3v10M13.5 5v6",torch:"M8 1.5c2.5 3 3.5 5 3.5 7.5a3.5 3.5 0 0 1-7 0c0-1.5.7-2.5 1.5-3.5.3 1.5 1 2 2 2 0-2-.5-4 0-6z",hardened:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5zM8 5.5v5M5.5 8h5",pdnet:"M2 12.5a6 6 0 0 1 12 0zM4.6 6.2L3.4 4M8 5V2.5M11.4 6.2L12.6 4",sundiver:"M5 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 3.5h5v9h-5zM9.5 8h5M12 3.5v9",massdriver:"M2 13L13 2M4.5 13.5L14 4M10.5 2h3.5v3.5",ringyard:"M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 8m-6.5 0a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0",citadel:"M2.5 14.5v-9h2v2h2v-2h3v2h2v-2h2v9zM6.5 14.5v-3h3v3",telescope:"M2 10l9-5 1.5 3-9 5zM6.5 11.5l-2 3M7.5 11l2 3.5M11 5l1.5-1 1.5 3-1.5 1",star:"M8 1.5l1.9 4.2 4.6.4-3.5 3 1.1 4.5L8 11.2l-4.1 2.4 1.1-4.5-3.5-3 4.6-.4z"},hh=n=>Md[n]?{vb:"0 0 24 24",body:Md[n],lu:!0}:{vb:"0 0 16 16",body:`<path d="${W0[n]}"/>`,lu:!1},lt=(n,e="")=>{const t=hh(n);return`<svg class="ic${t.lu?" lu":""}${e?` ${e}`:""}" viewBox="${t.vb}" aria-hidden="true">${t.body}</svg>`},ze=-1,Sd=0,Te={accel:.03,outerPeriod:2400,outerRadius:200,startShips:4,startCredits:400,income:{planet:1,moon:.5,station:.6,asteroid:.3,visitor:0},homeIncome:.4,mineIncome:1.5,ship:{cost:150,time:45},structures:{shipyard:{name:"Shipyard",cost:400,time:90,desc:"Builds ships, one at a time"},mine:{name:"Mine",cost:200,time:45,only:["asteroid","moon"],maxLevel:3,desc:"+1.5/s per level"},skimmer:{name:"Gas harvester",cost:350,time:70,where:"giant",maxLevel:3,income:2,desc:"Skims fuel from the clouds: +2/s per level"},exchange:{name:"Orbital exchange",cost:450,time:80,where:"home",maxLevel:2,income:2.5,desc:"Sells war bonds: +2.5/s per level"},defence:{name:"Guns",cost:250,time:50,maxLevel:3,desc:"+2 guns per level"},bureau:{name:"Security bureau",cost:250,time:50,maxLevel:2,desc:"Hunts enemy spies here and on nearby worlds"},lab:{name:"Research station",cost:300,time:60,maxLevel:3,desc:"Research +50% per level"}},baseGuns:1,gunsPerDefence:2,coverShare:.5,moonCover:.25,fire:.12,gunRegen:.02,flipTime:4,scrapRefund:.4,scrapTime:20,cooldown:15,probe:{cost:80,speed:4,scan:150},cancelRefund:.8,labSpeed:.5},ii={drives:{name:"Drives",cost:[300,600,1e3],time:[90,150,240],levels:["Magnetic nozzle","Pellet-fusion torch","Catalysed fusion drive"],text:["Tighter plasma, +15% thrust","Pulsed fusion, +30% thrust","Hotter burn, +45% thrust"]},sensors:{name:"Sensors",cost:[250,500,900],time:[80,140,220],levels:["Long-baseline telescopes","Deep-space listening posts","Interferometer net"],text:["Spot drive flares further out","Hear further into the system","Wide-field sight, a long way out"]},intel:{name:"Intel",cost:[300,550,850],time:[90,150,210],levels:["Signals intercept","Agents in the yards","Broken fleet cipher"],text:["Read enemy fleet sizes; recruit agents; catch enemy agents more often","Learn enemy routes and landing points","Know arrival times; get warnings"]},weapons:{name:"Weapons",cost:[400,800],time:[120,200],levels:["Coilgun batteries","Spinal railguns"],text:["Faster slugs, +15% firepower","Hull-length rails, +30% firepower"]},armour:{name:"Armour",cost:[400,800],time:[120,200],levels:["Whipple shielding","Point-defence drone swarm"],text:["Layered plate, 12% less damage","Drones swat rounds, 24% less damage"]},industry:{name:"Industry",cost:[350,700],time:[100,180],levels:["Orbital fabricators","Self-replicating tooling"],text:["Build 12% faster, mines +15%","Build 24% faster, mines +30%"]}},Ja={burn:.12,seen:.3},kn={travel:40,cost:250,catch:1/300,intel:.5,bureau:1.5,bureauRange:40,skim:.4,slow:.25},X0=[70,100,135,175],pl=["intel","sensors","weapons","drives","industry","armour"],Fn={ansible:{name:"Entangled signals",needs:["intel","sensors"],cost:1100,time:220,text:"Read every fleet you can see: its size, destination and arrival time; get warnings"},targeting:{name:"Targeting data",needs:["sensors","weapons"],cost:1100,time:220,text:"+20% firepower when attacking"},kinetic:{name:"Kinetic strike",needs:["weapons","drives"],cost:1100,time:220,text:"Fleets arrive firing: an opening volley destroys a tenth of their number in defenders"},torch:{name:"Torch production",needs:["drives","industry"],cost:1100,time:220,text:"Ships build 25% faster and fly 10% faster"},hardened:{name:"Hardened colonies",needs:["industry","armour"],cost:1100,time:220,text:"+1 gun on every world; guns rebuild twice as fast"},pdnet:{name:"Point-defence net",needs:["armour","intel"],cost:1100,time:220,text:"Your worlds shoot down 15% of every attacking fleet as it arrives"}},Mi=(n,e,t)=>e!==ze&&!!n.tech&&!!n.tech[e][t],ph=(n,e)=>Fn[n]?Fn[n].name:ii[n].levels[e-1],Kt={sundiver:{needs:"torch",name:"Sun-diver collectors",where:"inner",text:"Every world you hold earns 50% more",cost:2e3,time:480},massdriver:{needs:"kinetic",name:"Mass driver",where:"planet",text:"Fleets launched here fly 50% faster",cost:2e3,time:480},ringyard:{needs:"hardened",name:"Ring yard",where:"giant",text:"Ships build three times as fast here",cost:2e3,time:480},citadel:{needs:"pdnet",name:"Fortress world",where:"any",text:"Three times the guns here, and its cover reaches its family at full strength",cost:2e3,time:480},array:{needs:"ansible",name:"Ansible array",where:"any",text:"See every world and fleet in the system, and where they are going",cost:2e3,time:480},college:{needs:"targeting",name:"War college",where:"any",text:"Simulator-trained crews: every ship you build starts as a veteran (second rank)",cost:2e3,time:480}},Ca=(n,e,t)=>e!==ze&&n.bodies.some(i=>i.wonder===t&&i.owner===e);function Ps(n,e,t){const i=Kt[t];if(e.owner===ze||e.visitor)return"not yours";if(!Mi(n,e.owner,i.needs))return`needs ${Fn[i.needs].name}`;if(e.project||e.wonder)return"this world already has one";if(n.wonders&&n.wonders[t]!==void 0)return"already built";if(i.where==="giant"&&!e.giant)return"gas giants only";if(i.where==="planet"&&e.kind!=="planet")return"planets only";if(i.where==="inner"){const r=n.bodies.filter(s=>s.kind==="planet"&&s.parent===null&&!s.star).sort((s,o)=>s.r-o.r)[0];if(e!==r)return"the innermost planet only"}return n.credits[e.owner]<i.cost?"not enough credits":null}function mh(n,e,t){if(Ps(n,e,t))return!1;const i=Kt[t];return n.credits[e.owner]-=i.cost,on(n,e.owner,"spent",i.cost),e.project={key:t,left:i.time,paid:i.cost},an(n,{type:"project",phase:"start",owner:e.owner,at:e.id,key:t}),!0}function q0(n,e,t){return!1}function Y0(n,e){for(const t of n.bodies){if(!t.project||t.owner===ze||t.sieges.length)continue;const i=t.project.rush>0?2:1;if(t.project.rush>0&&(t.project.rush=Math.max(0,t.project.rush-e)),t.project.left-=e*i*Er(n,t.owner)*(K0(n,t).length?1-kn.slow:1),t.project.left>0)continue;const r=t.project.key;t.wonder=r,t.project=null,(n.wonders||(n.wonders={}))[r]=t.id,an(n,{type:"project",phase:"done",owner:t.owner,at:t.id,key:r});for(const s of n.bodies)!s.project||s.project.key!==r||(s.owner!==ze&&(n.credits[s.owner]+=Math.round(s.project.paid/2)),an(n,{type:"project",phase:"lost",owner:s.owner,at:s.id,key:r}),s.project=null)}}const tr=(n,e,t)=>e===ze||!n.tech?0:n.tech[e][t];function on(n,e,t,i=1){e===ze||!n.stats||(n.stats.totals[e][t]+=i)}function bd(n){n.stats.series.push({t:n.time,p:n.credits.map((e,t)=>({ships:n.bodies.reduce((i,r)=>i+(r.owner===t?r.ships:0),0)+n.fleets.reduce((i,r)=>i+(r.owner===t?r.n:0),0),worlds:n.bodies.filter(i=>i.owner===t).length,income:Lu(n,t),credits:e}))})}const ho=(n,e)=>Te.accel*(1+.15*tr(n,e,"drives"))*(Mi(n,e,"torch")?1.1:1),Au=(n,e)=>1+.15*tr(n,e,"weapons"),gh=(n,e)=>Au(n,e)*(Mi(n,e,"targeting")?1.2:1),Ra=(n,e)=>1-.12*tr(n,e,"armour"),vs=(n,e,t=null)=>(1+.12*tr(n,e,"industry"))*(t&&t.perk==="forge"?dn.forge.boost:1);function Tr(n,e,t){const i=n.tech[e][t]||0;if(Fn[t]){const s=Fn[t];return i?null:{level:1,cost:s.cost,time:s.time,text:s.text,title:s.name}}const r=ii[t];return i<r.cost.length?{level:i+1,cost:r.cost[i],time:r.time[i],text:r.text[i],title:r.levels[i]}:null}function Er(n,e){const t=n.bodies.reduce((i,r)=>i+(r.owner===e?no(r,"lab"):0),0);return(1+Te.labSpeed*t)*(Mh(n,e,"archive")?dn.archive.boost:1)}function po(n,e,t){const i=Tr(n,e,t);return i?Fn[t]&&Fn[t].needs.some(r=>n.tech[e][r]<2)?"locked":n.tech[e].project?"already researching":n.credits[e]<i.cost?"not enough credits":null:"complete"}function vh(n,e,t){if(po(n,e,t))return!1;const i=Tr(n,e,t);return n.credits[e]-=i.cost,on(n,e,"spent",i.cost),n.tech[e].project={key:t,left:i.time,total:i.time},!0}function Qa(n,e,t){return e===ze||!t||t.owner===ze||t.owner===e?"enemy worlds only":tr(n,e,"intel")<1?"needs Signals intercept":(n.spies||[]).some(i=>i.owner===e&&i.body===t.id)?"already a spy there":n.credits[e]<kn.cost?"not enough credits":null}function _h(n,e,t){if(Qa(n,e,t)||n.winner!==null)return null;n.credits[e]-=kn.cost,on(n,e,"spent",kn.cost);const i={id:n.nextId++,owner:e,body:t.id,since:n.time+kn.travel};return(n.spies||(n.spies=[])).push(i),i}const K0=(n,e)=>(n.spies||[]).filter(t=>t.body===e.id&&t.owner!==e.owner&&t.since<=n.time);function xh(n,e){if(e.owner===ze)return 1;const t=bt(n,e,n.time);let i=0;for(const r of n.bodies){if(r.owner!==e.owner)continue;const s=r.structures.find(o=>o.type==="bureau"&&o.left<=0);s&&(r===e||qn(bt(n,r,n.time),t)<=kn.bureauRange)&&(i=Math.max(i,s.level))}return kn.catch*(1+kn.intel*tr(n,e.owner,"intel"))*(1+kn.bureau*i)}const j0=(n,e)=>{const t=Math.sin(n*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function Z0(n,e){if(!n.spies||!n.spies.length)return;const t=Math.floor(n.time-e);n.spies=n.spies.filter(i=>{const r=n.bodies[i.body];if(r.owner===i.owner||r.owner===ze)return!1;if(i.since>n.time)return!0;const s=Math.min(n.credits[r.owner],Ts(r,n)*kn.skim*e);n.credits[r.owner]-=s,n.credits[i.owner]+=s;const o=xh(n,r);for(let c=Math.max(t,Math.floor(i.since))+1;c<=Math.floor(n.time);c++)if(j0(i.id,c)<o)return an(n,{type:"spycaught",owner:i.owner,by:r.owner,at:r.id,after:n.time-i.since}),!1;return!0})}function Co(n,e){const t=X0[tr(n,e,"sensors")],i=[];for(const l of n.bodies)l.owner===e&&i.push([bt(n,l,n.time),t]);for(const l of n.fleets)l.owner===e&&i.push([Hn(l,n.time),20]);for(const l of n.bodies)l.sieges.some(u=>u.owner===e)&&i.push([bt(n,l,n.time),20]);for(const l of n.scans||[])l.owner===e&&l.until>n.time&&i.push([bt(n,n.bodies[l.body],n.time),14]);for(const l of n.spies||[])l.owner===e&&l.since<=n.time&&i.push([bt(n,n.bodies[l.body],n.time),30]);const r=l=>i.some(([u,f])=>qn(u,l)<=f);for(const l of n.bodies)l.perk==="relay"&&l.owner===e&&i.push([bt(n,l,n.time),dn.relay.range]);const s=new Set(n.bodies.filter(l=>l.owner===e||r(bt(n,l,n.time))).map(l=>l.id)),o=Math.max(tr(n,e,"intel"),Mi(n,e,"ansible")||Ca(n,e,"array")?3:0),c=new Set((n.spies||[]).filter(l=>l.owner===e&&l.since<=n.time).map(l=>l.body)),a=(l,u=Hn(l,n.time))=>l.owner===e||c.has(l.from)||(l.dark&&!u.burning?i.some(([f,d])=>qn(f,u)<=d*Ja.seen):r(u));return Ca(n,e,"array")?{owner:e,sees:()=>!0,seesFleet:()=>!0,bodies:new Set(n.bodies.map(l=>l.id)),intel:o,warn:!0}:{owner:e,sees:r,seesFleet:a,bodies:s,intel:o,warn:Mh(n,e,"post")||Mi(n,e,"ansible")}}function pi(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const qn=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),wd=["Aurelion","Seraphine","Caelestis","Vespera","Solenne","Astraeon","Halcyra","Lumeris","Orionde","Celestine","Empyra","Noctara","Stellarin","Zenitha","Aethelis","Borealis Major","Cygnara","Draconis","Elysion","Fulgora","Galathea","Heliara","Ixora","Lyrae","Meridia","Nebulon","Ophira","Polaria","Quasara","Radiantis","Sidera","Thessaly Prime","Uranara","Valenor","Wynthera","Xandria","Ysolde","Zephyra","Aquilon","Brightholm","Corvessa","Dawnmere","Equinoxa","Firmament","Gloriana","Hyperion Tor","Irisca","Kyrios","Luminara","Magellane","Nimbara","Ouranos Minor","Perigee","Radiance","Solstira","Tethra","Umbrielle","Vireon","Aldebara","Betelline","Capellan","Deneba","Etamin","Fomalhara","Hadara","Izarine","Kochaba","Mirzana","Nashira","Pollara","Rigelle","Sadalmel","Talitha","Vegara","Alcyone Deep","Canopea","Mimosa","Aludra","Suhail","Menkara"],Td=["Selene Minor","Lucen","Nyxa","Astra","Eos","Hesperel","Stilbe","Aglaia","Phaenna","Asteria","Chione","Lampetia","Aether","Hemera","Orphne","Aura","Pleia","Maia Minor","Electra Minor","Merope Minor","Taygete Minor","Sterope","Celaeno Minor","Alcyon","Aphelia","Periel","Syzyn","Nadira","Zenia","Umbra","Penumbra","Crescen","Gibbous","Waxen","Occulta","Transita","Libra Minor","Albedo","Lumen","Nimbus","Corona Minor","Halo","Parhelia","Glimmer","Starling","Morrowlight","Duskmere","Emberlight","Frostlight","Glowworm","Ashlight","Moth","Lantern","Candela","Lux","Ignis","Scintilla","Stella Parva","Vela Minor","Nova Parva","Pulsa","Quark","Photon","Zodia","Ecliptica"],J0=["Ring One","Anchor","Meridian","Longreach","Holdfast","Keystone","Lantern","Tollgate","Crossways","Beacon Hill","Harbourline","Windlass","Capstan","Stillwater","Gantry Nine","Fairhaven","Moorings","Pinwheel","Carrick Yard","Halfway House","Sentinel","Spindle","Drydock Four","Tether","Outlook","Commonwealth","Linchpin","Caravel","Weigh Station","Portcullis"],Q0=["Hollow","Gravel","Anvil","Cairn","Dolmen","Flinders","Grist","Hearth","Kiln","Loam","Menhir","Nugget","Quarry","Rubble","Slag","Tor","Whetstone","Boulder","Clinker","Dregs","Ingot","Lump","Pumice","Scoria","Talus","Tuff","Cobalt","Nickel Jack","Old Iron","Spall","Brickbat","Crag","Scree","Knapp","Hardpan"],Ed=["Resolute","Tenacity","Wayfarer","Undaunted","Nightingale","Clemency","Forbearance","Hardihood","Persistence","Sparrowhawk","Temerity","Valiance","Wanderlust","Adamant","Bellicose","Candour","Diligence","Endeavour","Fortitude","Gallantry","Harbinger","Impetus","Jubilee","Kittiwake","Longbow","Mistral","Nonesuch","Obstinate","Paladin","Quicksilver","Rapier","Sirocco","Tempest","Unbowed","Vigilant","Warspite","Xiphias","Yeoman","Zealous","Albatross","Brigantine","Corsair","Dauntless","Equinox","Firebrand","Grenadier","Halberd","Inflexible","Javelin","Kingfisher","Lionheart","Mariner","Nemesis","Onslaught","Peregrine","Quarterstaff","Relentless","Stalwart","Thunderer","Unicorn","Vanguard","Wolfhound","Arbalest","Bulwark","Cutlass","Defiance","Ember Tide","Falconer","Goshawk","Hotspur","Invictus","Jackdaw","Kraken","Lodestone","Monsoon","Northwind","Outrider","Pathfinder","Quarrel","Redoubt","Scimitar","Trident","Upholder","Vortex","Whirlwind","Asp","Basilisk","Cockatrice","Dragonet","Estoc","Fulmar","Glaive","Hurricane","Ironside","Jaeger","Kestrel Wing","Lance","Magpie","Narwhal","Osprey","Petrel","Raven","Shrike","Tern","Umbra","Viper","Wyvern Wing","Auk","Bittern","Curlew","Dunlin","Egret","Fieldfare","Gannet","Heron","Ibis","Jay","Kite","Lapwing","Merlin","Nuthatch","Oriole","Plover","Redshank","Skua","Tanager","Veery","Whimbrel","Stoic","Candle","Hearthguard"],ws=.08,em=[1,2.5,4.5],$n=n=>em.filter(e=>(n||0)>=e).length,Ad=(n,e,t)=>{const i=Math.min(2,Math.max(0,n/Math.max(e,.5)));return Math.min(4.5,.15+.35*Math.min(1,t/Math.max(e,1))+.3*i**1.3)};function an(n,e){n.events&&(n.events.push({t:n.time,...e}),n.events.length>60&&n.events.splice(0,n.events.length-60))}function yh(n){const e=Ed[(n.nameSeed+n.nextId*7919)%Ed.length];return n.fleets.some(i=>i.name===e)?`${e} ${["II","III","IV","V"][n.nextId%4]}`:e}const ua=(n,e,t,i)=>e+i>0?(n*e+t*i)/(e+i):0,Cd=n=>Te.outerPeriod*(n/Te.outerRadius)**1.5,dn={seam:{name:"Rich seam",text:"Mines here pay double",kinds:["asteroid","moon"]},relay:{name:"Old relay",text:"See everything inside its ring",range:160},depot:{name:"Fuel depot",text:"Fleets launched from your worlds inside its ring fly 20% faster",range:120,boost:1.2},post:{name:"Listening post",text:"Warns of fleets heading for your worlds"},fortress:{name:"Fortress rock",text:"Heavy guns; +1 gun on each of your worlds inside its ring",range:100},archive:{name:"Ancient archive",text:"Research 25% faster",boost:1.25},hulk:{name:"Drydock hulk",text:"Ships built here start as veterans",vet:2.5},forge:{name:"Tidal forge",text:"Tidal heat runs the foundries: structures, upgrades and ships build twice as fast here",boost:2,giantMoon:!0}},xr={comet:{name:"Comet pass",text:"Catch it on its pass round the sun and hold it to mine it",hold:60,pay:12},derelict:{name:"Derelict warship",text:"Catch the drifting hulk and hold it to salvage veteran ships",hold:45,ships:4},signal:{name:"Lost probe signal",text:"Hold to recover a research level",hold:40},wreck:{name:"Ice-hauler wreck",text:"Hold to salvage its cargo",hold:45,credits:450},convoy:{name:"Refugee convoy",text:"Hold when it docks: the world earns +1/s for good",hold:30,bonus:1},cache:{name:"Supply cache",text:"Hold for a free structure upgrade",hold:30}},ml={comet:{inside:420,q:[70,120],guns:0},derelict:{inside:480,q:[100,160],guns:2}},mo=(n,e,t=n.time)=>!e.visitor||!!n.visit&&t>=n.visit.t0&&t<=n.visit.t0+n.visit.T,Cu=(n,e)=>e.visitor?n.visit?n.visit.t0+n.visit.T-n.time:0:1/0;function tm(n,e){const t=n.visit;if(!t||e<t.t0||e>t.t0+t.T)return{x:4e3,y:0,z:4e3};const i=(e-t.t0-t.T/2)/t.tau;let r=i;for(let l=0;l<8;l++)r-=(r+r*r*r/3-i)/(1+r*r);const s=2*Math.atan(r),o=t.q*(1+r*r),c=o*Math.cos(s),a=o*Math.sin(s);return{x:c*Math.cos(t.w)-a*Math.sin(t.w),y:o*.04*Math.sin(s),z:c*Math.sin(t.w)+a*Math.cos(t.w)}}function nm(n,e){const t=ml[e],i=t.q[0]+ji(n)*(t.q[1]-t.q[0]),r=Math.max(...n.bodies.filter(l=>l.parent===null&&!l.visitor).map(l=>l.r)),s=l=>{const u=Math.sqrt(Math.max(0,l/i-1));return u+u**3/3},o=t.inside/2/s(r),c=2*o*s(r+60);n.visit={kind:e,t0:n.time,T:c,q:i,w:ji(n)*Math.PI*2,tau:o};const a=n.bodies.find(l=>l.visitor);return a.owner=ze,a.ships=0,a.guns=t.guns,a.sieges=[],a.vet=0,a.tf=null,a.name=e==="comet"?`Comet ${String.fromCharCode(65+Math.floor(ji(n)*26))}/${10+Math.floor(ji(n)*90)}`:`Derelict ${yh(n)}`,a}function im(n){const e=n.bodies.find(o=>o.visitor),t=(o,c)=>n.bodies.filter(a=>a.owner===o&&!a.visitor).sort((a,l)=>qn(bt(n,a,n.time),c)-qn(bt(n,l,n.time),c))[0],i=bt(n,e,n.time),r=(o,c,a,l)=>{const u=t(o,i);!u||c<1||(e.owner=o,e.ships=c,e.vet=a,e.tf=l,e.restUntil=0,nc(n,e,u,c))},s=e.sieges;e.sieges=[],e.owner!==ze&&r(e.owner,e.ships,e.vet,e.tf);for(const o of s)r(o.owner,o.n,o.vet,o.name);for(const o of n.fleets){if(o.to!==e.id)continue;const c=Hn(o,n.time),a=t(o.owner,c);if(!a){o.n=0;continue}const l=go(n,null,a,n.time,ho(n,o.owner),{p:{x:c.x,y:c.y,z:c.z},v:{x:c.vx,y:c.vy,z:c.vz}});delete o.assist,Object.assign(o,l,{t0:n.time,to:a.id})}n.fleets=n.fleets.filter(o=>o.n>0||o.probe),e.owner=ze,e.ships=0,e.guns=0,an(n,{type:"visitor",phase:"left",name:e.name}),n.visit=null}const rm={first:300,every:510,jitter:90,notice:60,grace:45};function ji(n){return n.evSeed=Math.imul(n.evSeed^n.evSeed>>>15,2246822507)+1831565813>>>0,n.evSeed/4294967296}function sm(n,e){const t=rm;if(n.nextEvent===void 0&&(n.nextEvent=t.first+(ji(n)-.5)*2*60),n.happenings||(n.happenings=[]),n.time>=n.nextEvent){const i=Object.keys(xr).filter(c=>!ml[c]||!n.visit),r=i[Math.floor(ji(n)*i.length)];let s;if(ml[r]){const c=nm(n,r);s={id:n.nextId++,kind:r,at:c.id,starts:n.time+t.notice,ends:n.visit.t0+n.visit.T-20,holder:ze,held:0}}else{const c=n.bodies.filter(l=>!l.home&&!l.visitor&&!n.happenings.some(u=>u.at===l.id)),a=c[Math.floor(ji(n)*c.length)];s={id:n.nextId++,kind:r,at:a.id,starts:n.time+t.notice,ends:n.time+t.notice+xr[r].hold+t.grace,holder:ze,held:0}}const o=n.bodies[s.at];n.happenings.push(s),an(n,{type:"event",phase:"soon",kind:r,at:o.id}),n.nextEvent=n.time+t.every+(ji(n)-.5)*2*t.jitter}for(const i of n.happenings){if(n.time<i.starts)continue;const r=n.bodies[i.at],s=xr[i.kind],o=r.sieges.length?ze:r.owner;o!==i.holder&&(i.holder=o,i.held=0),o!==ze&&(i.held+=e,i.kind==="comet"&&(n.credits[o]+=s.pay*e,on(n,o,"earned",s.pay*e)),i.held>=s.hold&&(om(n,i,r,o),i.done=!0))}n.visit&&n.time>=n.visit.t0+n.visit.T-1&&im(n);for(const i of n.happenings)!i.done&&n.time>i.ends&&(i.done=!0,an(n,{type:"event",phase:"gone",kind:i.kind,at:i.at}));n.happenings=n.happenings.filter(i=>!i.done)}function om(n,e,t,i){const r=xr[e.kind];let s="";if(e.kind==="derelict"&&(t.vet=ua(t.vet||0,t.ships,2.5,r.ships),t.ships+=r.ships,s=`${r.ships} veteran ships`),e.kind==="wreck"&&(n.credits[i]+=r.credits,on(n,i,"earned",r.credits),s=`${r.credits} credits`),e.kind==="convoy"&&(t.bonus=(t.bonus||0)+r.bonus,s=`+${r.bonus}/s here`),e.kind==="comet"&&(s="the comet mined"),e.kind==="signal"){const o=Object.keys(ii).filter(a=>Tr(n,i,a)),c=o[Math.floor(ji(n)*o.length)];c?(n.tech[i][c]+=1,c==="drives"&&Uh(n,i),s=ii[c].levels[n.tech[i][c]-1]):(n.credits[i]+=400,s="400 credits")}if(e.kind==="cache"){const o=t.structures.find(c=>Te.structures[c.type].maxLevel&&c.level<Te.structures[c.type].maxLevel&&c.left<=0&&!c.scrap);o?(o.level+=1,s=`${Te.structures[o.type].name} to level ${o.level}`):(n.credits[i]+=300,s="300 credits")}an(n,{type:"event",phase:"won",kind:e.kind,at:t.id,owner:i,what:s})}const Mh=(n,e,t)=>e!==ze&&n.bodies.some(i=>i.perk===t&&i.owner===e),Wn={classic:{name:"Classic",text:"Six worlds, a belt, a few moons"},court:{name:"Giant’s court",text:"One huge gas giant ringed with moons",court:!0},wide:{name:"Wide and cold",text:"Few worlds, far apart",gap:30,moons:.5,rocks:3},crowded:{name:"Crowded",text:"Worlds packed close: short, sharp trips",gap:8,stations:3},belt:{name:"Rich belt",text:"A thick asteroid belt worth mining",rocks:8,beltW:12},binary:{name:"Binary",text:"A second sun and its worlds swing around the system; its worlds earn +50%",companion:!0}},Rd=2.6,am=6,Sh=Object.keys(Wn),Pa=Sh.filter(n=>!Wn[n].test);function to(n,e,t=n.time){const i=n.stars[e];if(i.e){const s=i.phase+2*Math.PI*t/i.period;let o=s;for(let l=0;l<6;l++)o-=(o-i.e*Math.sin(o)-s)/(1-i.e*Math.cos(o));const c=i.a*(Math.cos(o)-i.e),a=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(o);return{x:c*Math.cos(i.w)-a*Math.sin(i.w),y:0,z:c*Math.sin(i.w)+a*Math.cos(i.w)}}const r=i.phase+2*Math.PI*t/i.period;return{x:Math.cos(r)*i.r,y:0,z:Math.sin(r)*i.r}}function bh(n=new Date){const e=n.toISOString().slice(0,10);let t=2166136261;for(const i of e)t=Math.imul(t^i.charCodeAt(0),16777619);return{seed:t>>>0,system:Pa[(t>>>0)%Pa.length],key:e}}function wh({seed:n=Date.now(),opponents:e=1,mp:t=!1,system:i="classic"}={}){const r=pi(n),s=Wn[i]||Wn.classic,o=(C,R)=>{const L=C.filter(U=>!R.has(U)),N=L[Math.floor(r()*L.length)]??`${C[0]} ${R.size}`;return R.add(N),N},c=new Set,a=[],l=C=>(C.id=a.length,C.owner=ze,C.ships=0,C.build=0,C.queue=0,C.structures=[],C.guns=C.kind==="planet"?C.giant?5:2:1+Math.floor(r()*2),C.sieges=[],a.push(C),C),u=[],f=e+1,d=[1,2,3,4].sort(()=>r()-.5).slice(0,f);for(let C=0;C<6;C++){const R=s.court&&C===5,L=R||!d.includes(C)&&C>=3&&r()<(s.court?.3:.7),N=R?5:L?3.2+r()*1.2:1.6+r()*1.1;let U=C===0?0:d.includes(C)?1:R?5:L?1+Math.floor(r()*3):Math.floor(r()*2);s.moons&&!d.includes(C)&&(U=Math.floor(U*s.moons));const B=[];for(let Z=0;Z<U;Z++)B.push({r:N*3.4+6+Z*7+r()*.8,size:.5+r()*.5,period:300+Z*150+r()*120});u.push({giant:L,size:N,moons:B,station:!1})}const p=[1,2,3,4,5].sort(()=>r()-.5).slice(0,s.stations||2);for(const C of p)u[C].station=!0;for(const C of d)u[C].station&&(u[C].moons=[]);for(const C of u)C.reach=Math.max(C.size*1.6,C.station?C.size*1.5+1:0,...C.moons.map(R=>R.r+R.size));const g=s.gap||16;let _=0,m=null;for(const[C,R]of u.entries())m?R.r=m.r+m.reach+R.reach+g+r()*10:R.r=s.inner||56,C===4&&(_=m.r+m.reach+g,R.r=_+(s.beltW||6)+g+R.reach+r()*10),m=R;for(const C of u){const R=l({kind:"planet",name:o(wd,c),parent:null,r:C.r,period:Cd(C.r),phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:C.size,giant:C.giant,hue:r()});for(const L of C.moons)l({kind:"moon",name:o(Td,c),parent:R.id,r:L.r,period:L.period,phase:r()*Math.PI*2,incl:(r()-.5)*.3,size:L.size,hue:r()});C.station&&l({kind:"station",name:o(J0,c),parent:R.id,r:C.size*1.45,period:200+r()*60,phase:r()*Math.PI*2,incl:.2,size:.45,hue:0})}const h=s.rocks||4;for(let C=0;C<h;C++){const R=_+r()*(s.beltW||6);l({kind:"asteroid",name:o(Q0,c),parent:null,r:R,period:Cd(R),phase:C/h*Math.PI*2+r()*.8,incl:(r()-.5)*.1,size:.5+r()*.4,hue:r()})}const v=[{r:0,period:1,phase:0,size:Rd}];if(s.companion){const R=Math.max(...a.filter(N=>N.parent===null).map(N=>N.r))+22,L=.35;v.push({a:R/(1-L),e:L,w:r()*Math.PI*2,period:2800,phase:r()*Math.PI*2,size:.5,clear:9}),[[16,1.9],[30,2.4]].forEach(([N,U],B)=>{const Z=l({kind:"planet",name:o(wd,c),parent:null,star:1,r:N,period:140+B*160,phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:U,giant:!1,hue:r()});B===1&&l({kind:"moon",name:o(Td,c),parent:Z.id,r:U*3.4+6,period:260,phase:r()*Math.PI*2,incl:.2,size:.7,hue:r()})})}l({kind:"visitor",name:"Visitor",parent:null,r:0,period:1,phase:0,incl:0,size:.8,hue:.55,visitor:!0}).guns=0;const w={mp:t,system:s===Wn[i]?i:"classic",stars:v,gravity:!0,sunClear:am*Rd*1.8,bodies:a,fleets:[],players:f,time:0,winner:null,nextId:1,events:[],nameSeed:Math.floor(r()*1e5)},y=a.filter(C=>C.kind==="planet"),b=d.map(C=>y[C]),M=r()*Math.PI*2;b.forEach((C,R)=>{C.phase=M+R*Math.PI*2/f});for(const C of a)C.kind==="station"&&C.structures.push({type:"shipyard",level:1,left:0});b.forEach((C,R)=>{C.owner=R,C.ships=Te.startShips,C.home=!0;for(const L of a)L.parent===C.id&&L.kind==="moon"&&(L.homeMoon=!0);C.structures.push({type:"shipyard",level:1,left:0},{type:"defence",level:1,left:0}),C.guns=Da(C)});const A=new Set(b.flatMap(C=>[C.id,...a.filter(R=>R.parent===C.id).map(R=>R.id)])),x=Object.keys(dn).sort(()=>r()-.5);let E=0;for(const C of x){if(E>=3)break;const R=dn[C],L=a.filter(se=>se.owner===ze&&!se.perk&&!se.visitor&&!A.has(se.id)&&(!R.kinds||R.kinds.includes(se.kind))&&(!R.giantMoon||se.kind==="moon"&&a[se.parent].giant)),N=se=>se.parent===null?se.id:se.parent,U=se=>a.filter(ee=>ee.perk&&N(ee)===N(se)).length,B=L.filter(se=>U(se)===0),Z=B.length?B:L.filter(se=>U(se)<2);if(!Z.length)continue;const K=Z[Math.floor(r()*Z.length)];K.perk=C,C==="fortress"&&(K.structures.push({type:"defence",level:2,left:0}),K.guns=Da(K)+1),C==="hulk"&&!K.structures.some(se=>se.type==="shipyard")&&K.structures.push({type:"shipyard",level:1,left:0}),E++}return w.evSeed=Math.floor(r()*2**31),w.credits=Array.from({length:w.players},()=>Te.startCredits),w.stats={totals:Array.from({length:w.players},()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,earned:0,spent:0,research:0})),series:[]},w.tech=Array.from({length:w.players},()=>({drives:0,sensors:0,intel:0,weapons:0,armour:0,industry:0,project:null})),w}function Th(n){return n.visitor?0:n.kind==="station"?2:n.kind==="asteroid"?1:n.kind==="moon"?n.homeMoon||n.size>.8?2:1:n.home?5:n.giant?4:n.size>2.2?3:2}const Ru=n=>!n.scrap&&(n.left<=0||n.next),La=(n,e)=>n.structures.some(t=>t.type===e&&Ru(t)),no=(n,e)=>n.structures.reduce((t,i)=>t+(i.type===e&&Ru(i)?i.level:0),0);function Pu(n,e){if(e.owner===ze||e.perk==="fortress")return 0;const t=bt(n,e,n.time);return n.bodies.some(i=>i.perk==="fortress"&&i.owner===e.owner&&qn(bt(n,i,n.time),t)<=dn.fortress.range)?1:0}const cm=(n,e)=>(Da(e)+Pu(n,e)+(Mi(n,e.owner,"hardened")?1:0))*(e.wonder==="citadel"?3:1),Da=n=>Te.baseGuns+Te.gunsPerDefence*no(n,"defence"),Eh=(n,e)=>{if(n.owner===ze)return{worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};const t=1+.15*(e?tr(e,n.owner,"industry"):0),i=Te.structures,r={worlds:Te.income[n.kind]*(n.star?1.5:1)+(n.home?Te.homeIncome:0),mines:Te.mineIncome*no(n,"mine")*t*(n.perk==="seam"?2:1),skimmers:i.skimmer.income*no(n,"skimmer"),exchanges:i.exchange.income*no(n,"exchange"),bonuses:n.bonus||0};return e&&Ca(e,n.owner,"sundiver")&&(r.bonuses+=.5*(r.worlds+r.mines+r.skimmers+r.exchanges+r.bonuses)),r},Ts=(n,e)=>{const t=Eh(n,e);return t.worlds+t.mines+t.skimmers+t.exchanges+t.bonuses},Lu=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?Ts(i,n):0),0),ec=n=>n.structures.filter(e=>e.type==="shipyard"&&Ru(e)).length,gl=n=>{let e=Te.structures[n.type].cost;for(let t=1;t<(n.level||1);t++)e+=yr({type:n.type,level:t});return Math.round(e*Te.scrapRefund)};function Du(n,e,t){return e.owner===ze?"not yours":t.scrap?"already scrapping":null}function Ah(n,e,t){return Du(n,e,t)?!1:(n.credits[e.owner]+=gl(t),on(n,e.owner,"earned",gl(t)),t.scrap=Te.scrapTime,ec(e)||(e.build=0),!0)}function Ch(n,e){return e.owner===ze||e.queue<1?!1:(e.queue-=1,n.credits[e.owner]+=Math.round(Te.ship.cost*Te.cancelRefund),e.queue===0&&(e.build=0),!0)}function Ia(n,e,t){const i=Te.structures[t];return e.owner===ze?"not yours":i.only&&!i.only.includes(e.kind)?`${e.kind}s can't have one`:i.where==="giant"&&!e.giant?"gas giants only":i.where==="home"&&!e.home?"homeworlds only":e.structures.length>=Th(e)?"no free slots":n.credits[e.owner]<i.cost?"not enough credits":null}function Yi(n,e,t){if(Ia(n,e,t))return!1;const i=Te.structures[t];return n.credits[e.owner]-=i.cost,on(n,e.owner,"spent",i.cost),e.structures.push({type:t,level:1,left:i.time}),!0}const yr=n=>Math.round(Te.structures[n.type].cost*(n.level+1)*.75),Pd=(n,e)=>Te.ship.time/(vs(n,e.owner,e)*(Mi(n,e.owner,"torch")?1.25:1)*(e.wonder==="ringyard"?3:1)),tc=n=>Te.structures[n.type].time*(1+n.level*.5);function Ua(n,e,t){const i=Te.structures[t.type];return e.owner===ze?"not yours":i.maxLevel?t.left>0||t.scrap?"busy":t.level>=i.maxLevel?"at max level":n.credits[e.owner]<yr(t)?"not enough credits":null:"can't be upgraded"}function da(n,e,t){return Ua(n,e,t)?!1:(on(n,e.owner,"spent",yr(t)),n.credits[e.owner]-=yr(t),t.next=t.level+1,t.left=tc(t),!0)}function Na(n,e){return e.owner===ze?"not yours":La(e,"shipyard")?n.credits[e.owner]<Te.ship.cost?"not enough credits":null:"needs a shipyard"}function vl(n,e){return Na(n,e)?!1:(n.credits[e.owner]-=Te.ship.cost,on(n,e.owner,"spent",Te.ship.cost),e.queue+=1,!0)}function bt(n,e,t){if(e.visitor)return tm(n,t);const i=e.phase+2*Math.PI*t/e.period,r={x:Math.cos(i)*e.r,y:Math.sin(i)*e.r*e.incl,z:Math.sin(i)*e.r};if(e.star){const s=to(n,e.star,t);r.x+=s.x,r.z+=s.z}if(e.parent!==null){const s=bt(n,n.bodies[e.parent],t);r.x+=s.x,r.y+=s.y,r.z+=s.z}return r}function Ld(n,e,t){const r=bt(n,e,t-.5),s=bt(n,e,t+.5);return{x:(s.x-r.x)/(2*.5),y:(s.y-r.y)/(2*.5),z:(s.z-r.z)/(2*.5)}}const lm=14,um=n=>n.size*1.8+.4,Rh=(n,e)=>({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}),Dn=n=>Math.hypot(n.x,n.y,n.z);function Dd(n,e,t,i,r,s=r/2){const o={x:t.x-n.x-e.x*r,y:t.y-n.y-e.y*r,z:t.z-n.z-e.z*r},c=Rh(i,e),a=s*s/2,l=1/(s*(r-s)),u={x:(o.x-a*c.x/s)*l,y:(o.y-a*c.y/s)*l,z:(o.z-a*c.z/s)*l},f={x:c.x/s-u.x,y:c.y/s-u.y,z:c.z/s-u.z};return{a1:u,a2:f,need:Math.max(Dn(u),Dn(f))}}function Iu(n,e){const t=Uu(n,e);if(!n.gs)return t;const i=Dh(n.gs,Math.max(0,Math.min(1,e/n.T)));return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2],vx:t.vx+i[3],vy:t.vy+i[4],vz:t.vz+i[5]}}function Uu(n,e){const t=n.bf?n.bf*n.T:n.T/2,i=Math.min(e,t);let r=n.p0.x+n.v0.x*i+.5*n.a1.x*i*i,s=n.p0.y+n.v0.y*i+.5*n.a1.y*i*i,o=n.p0.z+n.v0.z*i+.5*n.a1.z*i*i,c=n.v0.x+n.a1.x*i,a=n.v0.y+n.a1.y*i,l=n.v0.z+n.a1.z*i;const u=Math.max(0,Math.min(e,n.T-t)-t);if(r+=c*u,s+=a*u,o+=l*u,e>n.T-t){const f=e-(n.T-t);r+=c*f+.5*n.a2.x*f*f,s+=a*f+.5*n.a2.y*f*f,o+=l*f+.5*n.a2.z*f*f,c+=n.a2.x*f,a+=n.a2.y*f,l+=n.a2.z*f}return{x:r,y:s,z:o,vx:c,vy:a,vz:l}}function yc(n,e,t){for(let i=1;i<128;i++){const r=i/128*n.T,s=Iu(n,r);if(Dn(s)<(e.sunClear||lm))return!1;for(let o=1;o<(e.stars||[]).length;o++)if(qn(s,to(e,o,t+r))<e.stars[o].clear)return!1}return!0}const Ph={boost:1.25,range:16};function Id(n,e,t,i,r){const s=new Set([t.id,i.id,t.parent,i.parent]);let o=null;for(const c of n.bodies)if(!(!c.giant||s.has(c.id)))for(let a=1;a<24;a++){const l=a/24*e.T,u=qn(Iu(e,l),bt(n,c,r+l));u<c.size*Ph.range&&(!o||u<o.d)&&(o={g:c,d:u})}return o&&o.g}function Lh(n,e,t=n.time){if(e.owner===ze)return 1;const i=bt(n,e,t);return n.bodies.some(r=>r.perk==="depot"&&r.owner===e.owner&&qn(bt(n,r,t),i)<=dn.depot.range)?dn.depot.boost:1}function Ro(n,e,t,i=n.time,r=1,s=!1,o=.5){r*=Lh(n,e,i)*(e.wonder==="massdriver"?1.5:1);const c=go(n,e,t,i,ho(n,e.owner)*r,null,s,o),a=Id(n,c,e,t,i);if(!a)return c;const l=go(n,e,t,i,ho(n,e.owner)*r*Ph.boost,null,s,o);return l.T<c.T&&Id(n,l,e,t,i)===a?{...l,assist:a.id}:c}const dm={share:1},fm=4*Math.PI*Math.PI*Te.outerRadius**3/Te.outerPeriod**2,Ii=48;function Ud(n,e){const t=n.T/Ii,i=[[0,0,0,0,0,0]];let r=0,s=0,o=0,c=0,a=0,l=0;for(let u=0;u<Ii;u++){const f=(u+.5)*t,d=Uu(n,f),p=e?Dh(e,(u+.5)/Ii):[r+c*t*.5,s+a*t*.5,o+l*t*.5],g=d.x+p[0],_=d.y+p[1],m=d.z+p[2],h=g*g+_*_+m*m,v=-fm*dm.share/(h*Math.sqrt(h));c+=v*g*t,a+=v*_*t,l+=v*m*t,r+=c*t,s+=a*t,o+=l*t,i.push([r,s,o,c,a,l])}return i}function Dh(n,e){const t=Math.min(Ii-1,Math.floor(e*Ii)),i=e*Ii-t,r=n[t],s=n[t+1];return r.map((o,c)=>o+(s[c]-o)*i)}function go(n,e,t,i,r,s=null,o=!1,c=.5){const a=s?s.p:bt(n,e,i),l=s?s.v:Ld(n,e,i),u=g=>{const _=bt(n,t,i+g),m=Rh(a,_),h=Dn(m)||1,v=um(t),w={x:_.x+m.x/h*v,y:_.y+m.y/h*v,z:_.z+m.z/h*v},y=Ld(n,t,i+g);return{p0:a,v0:l,p1:w,v1:y,T:g,...c<.5?{bf:c}:{},...Dd(a,l,w,y,g,g*c)}},f=g=>{let _=u(g),m=null;for(let y=0;y<12;y++){m=Ud(_,m);const b=m[Ii],M={x:_.p1.x-b[0],y:_.p1.y-b[1],z:_.p1.z-b[2]},A={x:_.v1.x-b[3],y:_.v1.y-b[4],z:_.v1.z-b[5]},x=Dd(a,l,M,A,g,g*c),E=y<2?1:.7,C=(N,U)=>({x:N.x+(U.x-N.x)*E,y:N.y+(U.y-N.y)*E,z:N.z+(U.z-N.z)*E}),R=C(_.a1,x.a1),L=C(_.a2,x.a2);_={..._,a1:R,a2:L,need:Math.max(Dn(R),Dn(L))}}const h=Ud(_,m),v=Uu(_,g),w=Math.hypot(v.x+h[Ii][0]-_.p1.x,v.y+h[Ii][1]-_.p1.y,v.z+h[Ii][2]-_.p1.z);return _.gs=h,w>.5&&(_.need=1/0),_},d=u;let p=1;for(let g=2;g<2e4;g+=2){let _=d(g);if(_.need>r){p=g;continue}let m=p,h=g;for(let v=0;v<30;v++){const w=(m+h)/2;d(w).need>r?m=w:h=w}if(_=d(h),n.gravity&&!o&&yc(_,n,i)){for(let v=h;v<h*2.5+40;v*=1.06){const w=f(v);if(w.need<=r&&yc(w,n,i))return w}return _}if(yc(_,n,i))return _;p=g}return n.gravity&&!o?f(2e4):d(2e4)}const Nu=(n,e)=>e.restUntil>n.time?Math.min(e.resting||0,e.ships):0,Mr=(n,e)=>e.ships-Nu(n,e);function Ih(n,e,t){e.resting=Nu(n,e)+t,e.restUntil=n.time+Te.cooldown}function nc(n,e,t,i,r=!1){if(i=Math.min(Math.floor(i),Mr(n,e)),i<1||e===t||n.winner!==null)return null;const s=Ro(n,e,t,n.time,1,!1,r?Ja.burn:.5);if(s.T>Cu(n,t)-5||!mo(n,t))return null;if(e.ships-=i,e.sieges.length){const c=Math.ceil(i/2);i-=c,on(n,e.owner,"lost",c);for(const a of e.sieges)on(n,a.owner,"killed",c/e.sieges.length);if(an(n,{type:"breakout",owner:e.owner,at:e.id,lost:c,n:i}),i<1)return null}const o={id:n.nextId++,owner:e.owner,n:i,from:e.id,to:t.id,...s,t0:n.time,vet:e.vet||0};return r&&(o.dark=!0),e.tf&&i*2>=i+e.ships?(o.name=e.tf,e.tf=null):o.name=yh(n),e.ships||(e.tf=null),n.fleets.push(o),an(n,{type:"launch",owner:o.owner,fleet:o.id,name:o.name,n:i,from:e.id,to:t.id}),o}function Uh(n,e){for(const t of n.fleets){if(t.owner!==e)continue;const i=t.T-(n.time-t.t0);if(i<10)continue;const r=Hn(t,n.time),s=ho(n,e)*(t.probe?Te.probe.speed:1),o=go(n,null,n.bodies[t.to],n.time,s,{p:{x:r.x,y:r.y,z:r.z},v:{x:r.vx,y:r.vy,z:r.vz}},!1,t.bf||.5);o.T>=i||(delete t.assist,delete t.gs,Object.assign(t,o,{t0:n.time}))}}function hm(n,e,t){if(!e||e.probe||!!e.dark===t||n.winner!==null||e.T-(n.time-e.t0)<10)return!1;const r=Hn(e,n.time),s=go(n,null,n.bodies[e.to],n.time,ho(n,e.owner),{p:{x:r.x,y:r.y,z:r.z},v:{x:r.vx,y:r.vy,z:r.vz}},!1,t?Ja.burn:.5);return delete e.assist,delete e.bf,delete e.gs,Object.assign(e,s,{t0:n.time}),t?e.dark=!0:delete e.dark,!0}function ku(n,e,t){return e.owner===ze?"not yours":!t||t===e?"pick a target":La(e,"shipyard")?n.credits[e.owner]<Te.probe.cost?"not enough credits":null:"needs a shipyard"}function _l(n,e,t){if(ku(n,e,t)||n.winner!==null||!mo(n,t))return null;n.credits[e.owner]-=Te.probe.cost,on(n,e.owner,"spent",Te.probe.cost);const i={id:n.nextId++,owner:e.owner,n:0,probe:!0,from:e.id,to:t.id,...Ro(n,e,t,n.time,Te.probe.speed),t0:n.time,vet:0,name:"Probe"};return n.fleets.push(i),i}function Hn(n,e){const t=Math.min(n.T,Math.max(0,e-n.t0)),i=Iu(n,t),r=n.T/2,s=r-Te.flipTime/2,o=Math.abs(t-r)<Te.flipTime/2,c=Dn(n.a1)>1e-9?{x:n.a1.x/Dn(n.a1),y:n.a1.y/Dn(n.a1),z:n.a1.z/Dn(n.a1)}:{x:0,y:0,z:1},a=Dn(n.a2)>1e-9?{x:n.a2.x/Dn(n.a2),y:n.a2.y/Dn(n.a2),z:n.a2.z/Dn(n.a2)}:c;let l=t<r?c:a;if(o){const u=(1-Math.cos((t-s)/Te.flipTime*Math.PI))/2,f=Math.max(-1,Math.min(1,c.x*a.x+c.y*a.y+c.z*a.z)),d=Math.acos(f)*u;let p={x:c.y*a.z-c.z*a.y,y:c.z*a.x-c.x*a.z,z:c.x*a.y-c.y*a.x};Dn(p)<1e-4&&(p=Math.abs(c.y)<.9?{x:-c.z,y:0,z:c.x}:{x:1,y:0,z:0});const g=Dn(p)||1;p={x:p.x/g,y:p.y/g,z:p.z/g};const _=Math.cos(d),m=Math.sin(d),h={x:p.y*c.z-p.z*c.y,y:p.z*c.x-p.x*c.z,z:p.x*c.y-p.y*c.x},v=p.x*c.x+p.y*c.y+p.z*c.z;l={x:c.x*_+h.x*m+p.x*v*(1-_),y:c.y*_+h.y*m+p.y*v*(1-_),z:c.z*_+h.z*m+p.z*v*(1-_)}}return{x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz,nx:l.x,ny:l.y,nz:l.z,progress:t/n.T,burning:!o&&t<n.T&&(!n.bf||t<n.bf*n.T||t>n.T-n.bf*n.T),flipping:o,phase:t<r?1:2}}function ka(n,e){if(e.owner===ze||e.visitor)return[];const t=e.parent===null?e:n.bodies[e.parent],i=[t,...n.bodies.filter(s=>s.parent===t.id)],r=[];for(const s of i){if(s===e||s.owner!==e.owner||s.guns<=0)continue;const o=s.wonder==="citadel"?1:s===t?Te.coverShare:Te.moonCover;r.push({from:s,n:s.guns*o})}return r}const Ls=(n,e)=>ka(n,e).reduce((t,i)=>t+i.n,0);function pm(n,e,t){let i=!1;const r=e.sieges.reduce((c,a)=>c+a.n,0),s=(e.ships*(1+ws*$n(e.vet))+e.guns+Ls(n,e))*Au(n,e.owner);let o=0;for(const c of e.sieges){const a=r>0?c.n/r:0;c.dmg=(c.dmg||0)+Te.fire*s*a*Ra(n,c.owner)*t,o+=c.n*(1+ws*$n(c.vet))*gh(n,c.owner)}for(e.dmg=(e.dmg||0)+Te.fire*o*Ra(n,e.owner)*t,e.fighting=!0;e.dmg>=1&&e.ships+e.guns>0;){e.dmg-=1,e.ships>0?(e.ships-=1,on(n,e.owner,"lost"),on(n,e.sieges.slice().sort((a,l)=>l.n-a.n)[0].owner,"killed")):e.guns=Math.max(0,e.guns-1);const c=e.sieges.slice().sort((a,l)=>l.n-a.n)[0];c.kills=(c.kills||0)+1,e.lostDef=(e.lostDef||0)+1,e.totDef=(e.totDef||0)+1}for(const c of e.sieges)for(;c.dmg>=1&&c.n>0;)c.dmg-=1,c.n-=1,e.lostAtk=(e.lostAtk||0)+1,e.totAtk=(e.totAtk||0)+1,on(n,c.owner,"lost"),on(n,e.owner,"killed"),e.kills=(e.kills||0)+1;for(const c of e.sieges)c.n<=0&&an(n,{type:"wiped",owner:c.owner,name:c.name,at:e.id,vs:e.owner});if(e.ships||(e.tf=null),e.sieges=e.sieges.filter(c=>c.n>0),e.ships+e.guns<=0&&e.sieges.length){const c=e.sieges.sort((a,l)=>l.n-a.n)[0];on(n,e.owner,"worldsLost"),on(n,c.owner,"captured"),an(n,{type:"captured",owner:c.owner,from:e.owner,at:e.id,name:c.name}),e.owner=c.owner,e.ships=c.n,e.resting=0,Ih(n,e,c.n),e.vet=Math.min(4.5,(c.vet||0)+Ad(c.foe0||1,c.n0||c.n,c.kills||0)),e.tf=c.name,$n(e.vet)>$n(c.vet)&&an(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),e.guns=0,e.dmg=0,e.build=0,e.slips=[],e.queue=0,e.structures=e.structures.filter(a=>a.left<=0||a.next);for(const a of e.structures)a.next&&(delete a.next,a.left=0),delete a.scrap;e.sieges=e.sieges.filter(a=>a!==c),e.captured=!0,i=!0}if(!e.sieges.length){if(e.fighting&&!i&&e.ships>0){const c=e.vet;e.vet=Math.min(4.5,(e.vet||0)+Ad(e.foe0||1,e.own0||1,e.kills||0)),$n(e.vet)>$n(c)&&an(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),an(n,{type:"held",owner:e.owner,at:e.id})}e.dmg=0,e.fighting=!1,e.foe0=e.own0=e.kills=0}}function Fu(n,e){if(n.winner!==null)return;n.stats&&(!n.stats.series.length||n.time-n.stats.series.at(-1).t>=10)&&bd(n),n.time+=e;for(const i of n.bodies){if(i.owner===ze)continue;n.credits[i.owner]+=Ts(i,n)*e,on(n,i.owner,"earned",Ts(i,n)*e);const r=vs(n,i.owner,i);if(i.sieges.length)continue;for(const l of i.structures){if(l.scrap){l.scrap=Math.max(0,l.scrap-e),l.scrap||(l.gone=!0);continue}l.left<=0||(l.left=Math.max(0,l.left-e*r),l.left===0&&l.next&&(l.level=l.next,delete l.next))}if(i.structures.some(l=>l.gone)){const l=i.structures.find(u=>u.gone);i.structures=i.structures.filter(u=>!u.gone),an(n,{type:"scrapped",owner:i.owner,at:i.id,what:l.type})}const s=ec(i);for(i.slips||(i.slips=[]);i.slips.length<Math.min(s,i.queue);)i.slips.push(0);i.slips.length=Math.min(i.slips.length,s,i.queue);const o=(Mi(n,i.owner,"torch")?1.25:1)*(i.wonder==="ringyard"?3:1);i.slips=i.slips.map(l=>l+e*r*o/Te.ship.time);for(const l of i.slips)l>=1&&(i.vet=ua(i.vet||0,i.ships,Math.max(i.perk==="hulk"?dn.hulk.vet:0,Ca(n,i.owner,"college")?2.5:0),1),i.queue-=1,i.ships+=1,on(n,i.owner,"built"));i.slips=i.slips.filter(l=>l<1),i.build=i.slips.length?Math.max(...i.slips):0;const c=cm(n,i),a=Te.gunRegen*(Mi(n,i.owner,"hardened")?2:1);i.guns<c&&(i.guns=Math.min(c,i.guns+a*e))}for(const[i,r]of(n.tech||[]).entries())r.project&&(r.project.left-=e*Er(n,i),r.project.left<=0&&(r[r.project.key]=(r[r.project.key]||0)+1,r.project.key==="drives"&&Uh(n,i),an(n,{type:"research",owner:i,key:r.project.key,level:r[r.project.key]}),r.project=null,on(n,i,"research")));n.scans&&(n.scans=n.scans.filter(i=>i.until>n.time)),Z0(n,e),n.fleets=n.fleets.filter(i=>{if(n.time-i.t0<i.T)return!0;const r=n.bodies[i.to];if(i.probe)return(n.scans||(n.scans=[])).push({owner:i.owner,body:r.id,until:n.time+Te.probe.scan}),an(n,{type:"probed",owner:i.owner,at:r.id}),!1;if(r.owner===i.owner)r.vet=ua(r.vet||0,r.ships,i.vet||0,i.n),(!r.tf||i.n>=r.ships)&&(r.tf=i.name),r.ships+=i.n,Ih(n,r,i.n),an(n,{type:"arrived",owner:i.owner,name:i.name,n:i.n,at:r.id});else{if(Mi(n,r.owner,"pdnet")&&(i.n-=Math.round(i.n*.15)),i.n<=0)return an(n,{type:"wiped",owner:i.owner,name:i.name,at:r.id,vs:r.owner}),!1;if(Mi(n,i.owner,"kinetic")){let c=Math.round(i.n*.1);for(;c-- >0&&r.ships+r.guns>0;)r.ships>0?r.ships-=1:r.guns=Math.max(0,r.guns-1)}const s=r.ships*(1+ws*$n(r.vet))+r.guns+Ls(n,r);r.own0=Math.max(r.own0||0,s),r.foe0=(r.foe0||0)+i.n;const o=r.sieges.find(c=>c.owner===i.owner);o?(o.vet=ua(o.vet||0,o.n,i.vet||0,i.n),o.n+=i.n,o.n0+=i.n):r.sieges.push({owner:i.owner,n:i.n,vet:i.vet||0,name:i.name,n0:i.n,foe0:s}),an(n,{type:"engaged",owner:i.owner,name:i.name,n:i.n,at:r.id,vs:r.owner})}return!1});for(const i of n.bodies)i.sieges.length&&pm(n,i,e);Y0(n,e),n.evSeed!==void 0&&sm(n,e);const t=new Set;for(const i of n.bodies){i.owner!==ze&&t.add(i.owner);for(const r of i.sieges)t.add(r.owner)}for(const i of n.fleets)i.probe||t.add(i.owner);n.mp?t.size<=1&&(n.winner=[...t][0]??ze):t.has(Sd)?t.size===1&&(n.winner=Sd):n.winner=[...t][0]??ze,n.winner!==null&&n.stats&&bd(n)}const mm={cadet:{think:14,acts:1,margin:.85,extra:0,seenExtra:0,skill:.1,eco:.5,calm:480},easy:{think:8,acts:1,margin:1,extra:1,seenExtra:0,skill:.35,eco:.7,calm:240},normal:{think:4,acts:2,margin:1.2,extra:1,seenExtra:1,skill:.7},hard:{think:2,acts:3,margin:1.3,extra:1,seenExtra:1,skill:.95,eco:1.4,smart:!0},brutal:{think:.8,acts:5,margin:1.4,extra:2,seenExtra:1,skill:1,eco:2.1,smart:!0}};function xl(n,e,t){return{owner:n,d:mm[e],rand:t,clock:2+t()*3,plan:null}}const fa=(n,e,t,i)=>e.sieges.length?null:nc(n,e,t,i);function Nd(n,e,t,i=0,r=!0,s=null){const o=s||{ships:t.ships,vet:t.vet,guns:t.guns,cover:Ls(n,t)},c=gh(n,e)*(1+ws*$n(i)),a=Ra(n,e),l=t.owner,u=l===ze?1:Au(n,l),f=l===ze?1:Ra(n,l),d=1+ws*$n(o.vet),p=m=>{let h=m,v=0,w=o.ships,y=o.guns,b=0;for(let M=0;M<1200;M++){for(v+=Te.fire*(w*d+y+o.cover)*u*a*.5,b+=Te.fire*h*c*f*.5;b>=1&&w+y>0;)b-=1,w>0?w-=1:y=Math.max(0,y-1);for(;v>=1&&h>0;)v-=1,h-=1;if(h<=0)return!1;if(w+y<=0)return!0}return!1};let g=1,_=1;for(;!p(_);)if(_*=2,_>256)return 1/0;for(;g<_;){const m=g+_>>1;p(m)?_=m:g=m+1}return _}function Nh(n,e,t){if(e.d.eco&&n.winner===null&&(n.credits[e.owner]=Math.max(0,n.credits[e.owner]+Lu(n,e.owner)*(e.d.eco-1)*t)),e.clock-=t,e.clock>0||n.winner!==null)return;e.clock=e.d.think*(.8+e.rand()*.4);const i=Co(n,e.owner),r=p=>{if(!i.seesFleet(p))return!1;const g=n.bodies[p.to];return g.owner===e.owner&&qn(Hn(p,n.time),bt(n,g,n.time))<60},s=p=>p.owner===e.owner||i.intel>=2&&i.seesFleet(p)||r(p),o=p=>p.owner===e.owner||i.intel>=1?p.n:5,c=(p,g)=>n.fleets.filter(_=>!_.probe&&_.to===p.id&&_.owner===e.owner===g&&s(_)).reduce((_,m)=>_+o(m),0),a=()=>e.rand()<e.d.skill,l=p=>p.ships*(1+ws*$n(p.vet)),u=new Map,d={vis:i,coming:c,route:(p,g)=>{const _=p.id*1e3+g.id;return u.has(_)||u.set(_,Ro(n,p,g,n.time,1,!0).T),u.get(_)}};vm(n,e,n.bodies.filter(p=>p.owner===e.owner),i,s,o,l,a);for(let p=0;p<e.d.acts&&gm(n,e,d);p++);for(let p=0;p<e.d.acts;p++){const g=_m(n,e,n.bodies.filter(_=>_.owner===e.owner),c,a);if(!g||g==="save")break}}function kd(n,e,t,i){return t.bodies.has(i.id)?{ships:i.ships,vet:i.vet,guns:i.guns,cover:Ls(n,i)}:i.owner===ze?{ships:0,vet:0,guns:i.perk==="fortress"?6:i.giant?5:(i.kind==="planet",2),cover:0}:{ships:6,vet:1,guns:3,cover:1}}function gm(n,e,{vis:t,coming:i,route:r}){const s=n.bodies.filter(v=>v.owner===e.owner),o=e.d.smart,c=e.d.calm&&n.time<e.d.calm,a=v=>v.home&&n.time>900?2:1,l=v=>Mr(n,v)-Math.ceil(i(v,!1)*1.2)-a(v),u=v=>(n.scans||[]).some(w=>w.owner===e.owner&&w.body===v.id),f=v=>n.fleets.some(w=>w.probe&&w.owner===e.owner&&w.to===v.id),d=v=>n.fleets.filter(w=>!w.probe&&w.owner===e.owner&&w.to===v.id).reduce((w,y)=>w+y.n,0),p=(v,w)=>Math.ceil(v*e.d.margin)+(t.bodies.has(w.id)?e.d.seenExtra:e.d.extra);if(o&&!n.fleets.some(v=>v.probe&&v.owner===e.owner)&&n.credits[e.owner]>Te.probe.cost+200){const v=s.filter(b=>La(b,"shipyard")),w=b=>Math.min(...v.map(M=>qn(bt(n,M,n.time),bt(n,b,n.time)))),y=n.bodies.filter(b=>b.owner!==e.owner&&b.owner!==ze&&!b.visitor&&!t.bodies.has(b.id)&&!u(b)).sort((b,M)=>w(b)-w(M))[0];if(y&&v.length&&w(y)<160&&e.rand()<.5){const b=M=>qn(bt(n,M,n.time),bt(n,y,n.time));if(_l(n,v.sort((M,A)=>b(M)-b(A))[0],y))return!0}}let g=null;for(const v of s){const w=l(v);if(!(w<1))for(const y of n.bodies){if(y.owner===e.owner||!mo(n,y)||c&&y.owner!==ze||d(y)>0)continue;const b=r(v,y);if(b>Cu(n,y)-10)continue;const M=kd(n,e,t,y);y.owner!==ze&&La(y,"shipyard")&&(M.ships+=Math.min(y.queue||1,b/Te.ship.time)),y.owner!==ze&&(M.guns=Math.max(M.guns,Math.min(Da(y)+Pu(n,y),M.guns+Te.gunRegen*b))),M.ships+=i(y,!1);const A=p(Nd(n,e.owner,y,v.vet,!0,M),y);if(A<1||A>w)continue;let x=y.kind==="planet"?y.giant?4:3:y.kind==="station"?2:1.5;o&&y.owner!==ze&&n.time>900&&(x*=y.home?1.6:1.25),y.perk&&(x*=1.5),(n.happenings||[]).some(C=>C.at===y.id)&&(x*=2);const E=x/(A+b/25);(!g||E>g.score)&&(g={s:v,t:y,need:A,score:E})}}if(g&&o&&g.t.owner!==ze&&!t.bodies.has(g.t.id)&&!u(g.t))if(f(g.t))g=null;else{const v=s.find(w=>!ku(n,w,g.t));if(v&&_l(n,v,g.t))return!0}if(g)return fa(n,g.s,g.t,g.need),!0;if(e.plan){const v=n.bodies[e.plan.target],w=n.bodies[e.plan.stage];if(v.owner===e.owner||w.owner!==e.owner||n.time>e.plan.until)e.plan=null;else{if(Mr(n,w)-a(w)>=e.plan.need)return fa(n,w,v,Mr(n,w)-a(w)),e.plan=null,!0;{const y=s.filter(b=>b!==w&&l(b)>=1&&!n.fleets.some(M=>M.from===b.id&&M.to===w.id)).sort((b,M)=>r(b,w)-r(M,w))[0];return y?(fa(n,y,w,l(y)),!0):!1}}}const _=s.reduce((v,w)=>v+Math.max(0,l(w)),0);let m=null,h=1/0;for(const v of n.bodies){if(v.owner===e.owner||v.visitor||c&&v.owner!==ze)continue;const w=p(Nd(n,e.owner,v,0,!0,kd(n,e,t,v)),v)+1;w<=_&&w<h&&(m=v,h=w)}if(m&&s.length>1){const v=s.slice().sort((w,y)=>r(w,m)-r(y,m))[0];e.plan={target:m.id,stage:v.id,need:h,until:n.time+600}}return!1}function vm(n,e,t,i,r,s,o,c){for(const a of t){const l=n.fleets.filter(m=>m.to===a.id&&m.owner!==e.owner&&r(m));if(!l.length)continue;const u=Math.min(...l.map(m=>m.t0+m.T-n.time)),f=l.reduce((m,h)=>m+s(h),0)*1.2,d=o(a)+a.guns+Ls(n,a);if(d>=f)continue;const p=Math.ceil(f-d)+1,g=t.filter(m=>m!==a&&Mr(n,m)>=3&&!n.fleets.some(h=>h.to===m.id&&h.owner!==e.owner&&r(h))).map(m=>({s:m,T:Ro(n,m,a,n.time,1,!0).T})).filter(m=>m.T<u-5).sort((m,h)=>m.T-h.T),_=g.find(m=>Mr(n,m.s)-1>=p)||(e.d.smart?null:g[0]);if(_&&c())return fa(n,_.s,a,Math.min(Mr(n,_.s)-1,p)),!0;if(!_&&a.queue>0&&d*2<f&&c()){for(;a.queue>0;)Ch(n,a);return!0}}return!1}function _m(n,e,t,i,r){const s=e.d.smart,o=M=>i(M,!1)>0||M.sieges.length,c=(M,A)=>!Ia(n,M,A),a=t.find(M=>o(M)&&c(M,"defence")&&M.structures.filter(A=>A.type==="defence").length<2);if(a)return Yi(n,a,"defence");const l=t.find(M=>(M.kind==="asteroid"||M.kind==="moon")&&!M.structures.some(A=>A.type==="mine")&&(c(M,"mine")||Ia(n,M,"mine")==="not enough credits"));if(l){if(c(l,"mine"))return Yi(n,l,"mine");if(!o(l)&&r())return"save"}const u=t.filter(M=>!Na(n,M)&&M.queue<1)[0];if(u)return vl(n,u);for(const M of["exchange","skimmer"]){const A=t.find(x=>c(x,M)&&!o(x)&&!x.structures.some(E=>E.type===M));if(A&&(s||r()))return Yi(n,A,M)}const f=n.credits[e.owner],d=t.flatMap(M=>M.structures.filter(A=>A.type==="mine"&&Ua(n,M,A)==="not enough credits").map(A=>[M,A]))[0];if(d&&!o(d[0])&&t.reduce((M,A)=>M+A.ships,0)>=6&&r()&&f<yr(d[1]))return"save";for(const M of t)for(const A of M.structures)if(!Ua(n,M,A)&&((A.type==="mine"||A.type==="skimmer"||A.type==="exchange")&&f>=yr(A)&&r()||A.type==="lab"&&n.tech[e.owner].project&&f>yr(A)+300&&r()||A.type==="defence"&&o(M)&&r()))return da(n,M,A);if(s&&!t.find(A=>A.project)&&f>2500&&t.length>=4)for(const A of["sundiver","ringyard","citadel","massdriver","array","college"]){const x=L=>L.structures.filter(N=>N.type==="shipyard").length,E=L=>A==="ringyard"?x(L)*10+(c(L,"shipyard")?1:0):A==="massdriver"?x(L)*4+L.ships+(L.home?3:0):L.home?5:L.kind==="planet"?1:0,R=t.filter(L=>!o(L)&&!Ps(n,L,A)).sort((L,N)=>E(N)-E(L))[0];if(!(A==="ringyard"&&R&&!x(R)&&!c(R,"shipyard"))&&R)return mh(n,R,A)}if(s&&f>1100&&!(n.spies||[]).some(M=>M.owner===e.owner)){const M=n.bodies.filter(A=>!Qa(n,e.owner,A)).sort((A,x)=>(x.project?2:x.home?1:0)-(A.project?2:A.home?1:0))[0];if(M&&r())return!!_h(n,e.owner,M)}const p=t.find(M=>M.home);if(s&&p&&t.length>=6&&f>1e3&&c(p,"bureau")&&!p.structures.some(M=>M.type==="bureau"))return Yi(n,p,"bureau");const g=t.find(M=>(M.wonder==="ringyard"||M.project?.key==="ringyard")&&!M.structures.some(A=>A.type==="shipyard")&&c(M,"shipyard"));if(g)return Yi(n,g,"shipyard");if(t.filter(M=>M.structures.some(A=>A.type==="shipyard")).length<1+Math.floor(t.length/3)&&r()){const M=t.filter(A=>A.kind==="planet"&&c(A,"shipyard")).sort((A,x)=>x.size-A.size)[0];if(M)return Yi(n,M,"shipyard")}const m=s?["industry","sensors","intel","drives","weapons","armour","industry","drives","weapons","armour","sensors","intel","drives","sensors","intel"]:["sensors","drives","intel","industry","weapons","armour","drives","sensors","weapons","armour","industry","intel","drives","sensors","intel"],h=["torch","hardened","targeting","kinetic","pdnet","ansible"],v=[...m,...h].find(M=>Tr(n,e.owner,M)&&po(n,e.owner,M)!=="locked");if(v&&!po(n,e.owner,v)&&f>Tr(n,e.owner,v).cost+Te.ship.cost*2&&t.length>=3)return vh(n,e.owner,v);const w=t.reduce((M,A)=>M+A.structures.filter(x=>x.type==="lab").length,0);if(w<2&&f>700+w*500&&t.length>2+w*2&&r()){const M=t.find(E=>c(E,"lab")&&E.kind!=="asteroid");if(M)return Yi(n,M,"lab");const A=t.find(E=>E.kind!=="asteroid"&&!o(E)&&E.structures.filter(C=>C.type==="defence").length>1),x=A&&A.structures.find(E=>E.type==="defence"&&E.level===1&&!Du(n,A,E));if(x&&f>900)return Ah(n,A,x)}const y=t.filter(M=>!Na(n,M)&&M.queue<3).sort((M,A)=>M.queue-A.queue)[0];if(y&&(s||e.rand()<.8))return vl(n,y);const b=t.find(M=>M.home)||t[0];return b&&n.credits[e.owner]>600&&c(b,"defence")&&b.structures.filter(M=>M.type==="defence").length<2?Yi(n,b,"defence"):!1}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ou="186",xm=0,Fd=1,ym=2,ha=1,Mm=2,Js=3,Br=0,Yn=1,Jn=2,Zi=0,io=1,On=2,Od=3,zd=4,Sm=5,gs=100,bm=101,wm=102,Tm=103,Em=104,Am=200,Cm=201,Rm=202,Pm=203,kh=204,Fh=205,Lm=206,Dm=207,Im=208,Um=209,Nm=210,km=211,Fm=212,Om=213,zm=214,yl=0,Ml=1,Sl=2,vo=3,bl=4,wl=5,Tl=6,El=7,Oh=0,Bm=1,Gm=2,Fi=0,zh=1,Bh=2,Gh=3,Vh=4,Hh=5,$h=6,Wh=7,Xh=300,Gr=301,Es=302,Mc=303,Sc=304,ic=306,_o=1e3,Ui=1001,Al=1002,Tn=1003,Vm=1004,Lo=1005,jt=1006,bc=1007,gr=1008,Xn=1009,qh=1010,Yh=1011,xo=1012,zu=1013,Bi=1014,Si=1015,hi=1016,Bu=1017,Gu=1018,yo=1020,Kh=35902,jh=35899,Zh=1021,Jh=1022,ci=1023,nr=1026,Fr=1027,Vu=1028,Hu=1029,Vr=1030,$u=1031,Wu=1033,pa=33776,ma=33777,ga=33778,va=33779,Cl=35840,Rl=35841,Pl=35842,Ll=35843,Dl=36196,Il=37492,Ul=37496,Nl=37488,kl=37489,Fa=37490,Fl=37491,Ol=37808,zl=37809,Bl=37810,Gl=37811,Vl=37812,Hl=37813,$l=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Kl=37819,jl=37820,Zl=37821,Jl=36492,Ql=36494,eu=36495,tu=36283,nu=36284,Oa=36285,iu=36286,Hm=3200,ru=0,$m=1,mr="",Un="srgb",za="srgb-linear",Ba="linear",Ft="srgb",wc=7680,Wm=519,Xm=512,qm=513,Ym=514,Xu=515,Km=516,jm=517,qu=518,Zm=519,Qh=35044,pr=35048,Bd="300 es",Ni=2e3,Mo=2001;function Jm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qm(){const n=Ga("canvas");return n.style.display="block",n}const Gd={};function Va(...n){const e="THREE."+n.shift();console.log(e,...n)}function ep(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=ep(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function At(...n){n=ep(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ys(...n){const e=n.join(" ");e in Gd||(Gd[e]=!0,et(...n))}function eg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const tg={[yl]:Ml,[Sl]:Tl,[bl]:El,[vo]:wl,[Ml]:yl,[Tl]:Sl,[El]:bl,[wl]:vo};class $r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vd=1234567;const ro=Math.PI/180,So=180/Math.PI;function Ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function Yu(n,e){return(n%e+e)%e}function ng(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ig(n,e,t){return n!==e?(t-n)/(e-n):0}function so(n,e,t){return(1-t)*n+t*e}function rg(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}function sg(n,e=1){return e-Math.abs(Yu(n,e*2)-e)}function og(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ag(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lg(n,e){return n+Math.random()*(e-n)}function ug(n){return n*(.5-Math.random())}function dg(n){n!==void 0&&(Vd=n);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fg(n){return n*ro}function hg(n){return n*So}function pg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function mg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vg(n,e,t,i,r){const s=Math.cos,o=Math.sin,c=s(t/2),a=o(t/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(c*u,a*f,a*d,c*l);break;case"YZY":n.set(a*d,c*u,a*f,c*l);break;case"ZXZ":n.set(a*f,a*d,c*u,c*l);break;case"XZX":n.set(c*u,a*g,a*p,c*l);break;case"YXY":n.set(a*p,c*u,a*g,c*l);break;case"ZYZ":n.set(a*g,a*p,c*u,c*l);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bn={DEG2RAD:ro,RAD2DEG:So,generateUUID:Ji,clamp:pt,euclideanModulo:Yu,mapLinear:ng,inverseLerp:ig,lerp:so,damp:rg,pingpong:sg,smoothstep:og,smootherstep:ag,randInt:cg,randFloat:lg,randFloatSpread:ug,seededRandom:dg,degToRad:fg,radToDeg:hg,isPowerOfTwo:pg,ceilPowerOfTwo:mg,floorPowerOfTwo:gg,setQuaternionFromProperEuler:vg,normalize:Ot,denormalize:yi},gd=class gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gd.prototype.isVector2=!0;let qe=gd;class Gi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,c){let a=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||a!==d||l!==p||u!==g){let m=a*d+l*p+u*g+f*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let h=1-c;if(m<.9995){const v=Math.acos(m),w=Math.sin(v);h=Math.sin(h*v)/w,c=Math.sin(c*v)/w,a=a*h+d*c,l=l*h+p*c,u=u*h+g*c,f=f*h+_*c}else{a=a*h+d*c,l=l*h+p*c,u=u*h+g*c,f=f*h+_*c;const v=1/Math.sqrt(a*a+l*l+u*u+f*f);a*=v,l*=v,u*=v,f*=v}}e[t]=a,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const c=i[r],a=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=c*g+u*f+a*p-l*d,e[t+1]=a*g+u*d+l*f-c*p,e[t+2]=l*g+u*p+c*d-a*f,e[t+3]=u*g-c*f-a*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,a=Math.sin,l=c(i/2),u=c(r/2),f=c(s/2),d=a(i/2),p=a(r/2),g=a(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],c=t[5],a=t[9],l=t[2],u=t[6],f=t[10],d=i+c+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-a)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>c&&i>f){const p=2*Math.sqrt(1+i-c-f);this._w=(u-a)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(c>f){const p=2*Math.sqrt(1+c-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(a+u)/p}else{const p=2*Math.sqrt(1+f-i-c);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(a+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,c=t._x,a=t._y,l=t._z,u=t._w;return this._x=i*u+o*c+r*l-s*a,this._y=r*u+o*a+s*c-i*l,this._z=s*u+o*l+i*a-r*c,this._w=o*u-i*c-r*a-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(i=-i,r=-r,s=-s,o=-o,c=-c);let a=1-t;if(c<.9995){const l=Math.acos(c),u=Math.sin(l);a=Math.sin(a*l)/u,t=Math.sin(t*l)/u,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+s*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+s*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vd=class vd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,c=e.z,a=e.w,l=2*(o*r-c*i),u=2*(c*t-s*r),f=2*(s*i-o*t);return this.x=t+a*l+o*f-c*u,this.y=i+a*u+c*l-s*f,this.z=r+a*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,c=t.y,a=t.z;return this.x=r*a-s*c,this.y=s*o-i*a,this.z=i*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vd.prototype.isVector3=!0;let D=vd;const Tc=new D,Hd=new Gi,_d=class _d{constructor(e,t,i,r,s,o,c,a,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,c,a,l)}set(e,t,i,r,s,o,c,a,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=c,u[3]=t,u[4]=s,u[5]=a,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],c=i[3],a=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],w=r[4],y=r[7],b=r[2],M=r[5],A=r[8];return s[0]=o*_+c*v+a*b,s[3]=o*m+c*w+a*M,s[6]=o*h+c*y+a*A,s[1]=l*_+u*v+f*b,s[4]=l*m+u*w+f*M,s[7]=l*h+u*y+f*A,s[2]=d*_+p*v+g*b,s[5]=d*m+p*w+g*M,s[8]=d*h+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8];return t*o*u-t*c*l-i*s*u+i*c*a+r*s*l-r*o*a}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8],f=u*o-c*l,d=c*a-u*s,p=l*s-o*a,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(c*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*a)*_,e[5]=(r*s-c*t)*_,e[6]=p*_,e[7]=(i*a-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,c){const a=Math.cos(s),l=Math.sin(s);return this.set(i*a,i*l,-i*(a*o+l*c)+o+e,-r*l,r*a,-r*(-l*o+a*c)+c+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_d.prototype.isMatrix3=!0;let at=_d;const Ec=new at,$d=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _g(){const n={enabled:!0,workingColorSpace:za,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ft&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ft&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?Ba:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[za]:{primaries:e,whitePoint:i,transfer:Ba,toXYZ:$d,fromXYZ:Wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:$d,fromXYZ:Wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),n}const Mt=_g();function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jr;class xg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=Ga("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class Ku{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(Ac(r[o].image)):s.push(Ac(r[o]))}else s=Ac(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let Mg=0;const Cc=new D;class zn extends $r{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=Ui,r=Ui,s=jt,o=gr,c=ci,a=Xn,l=zn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Ji(),this.name="",this.source=new Ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=a,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Xh;zn.DEFAULT_ANISOTROPY=1;const xd=class xd{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const a=e.elements,l=a[0],u=a[4],f=a[8],d=a[1],p=a[5],g=a[9],_=a[2],m=a[6],h=a[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(p+1)/2,b=(h+1)/2,M=(u+d)/4,A=(f+_)/4,x=(g+m)/4;return w>y&&w>b?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=M/i,s=A/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=M/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=x/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xd.prototype.isVector4=!0;let Ht=xd;class Sg extends $r{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new zn(r),o=i.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ku(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Sg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tp extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bg extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Za=class Za{constructor(e,t,i,r,s,o,c,a,l,u,f,d,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,c,a,l,u,f,d,p,g,_,m)}set(e,t,i,r,s,o,c,a,l,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=c,h[13]=a,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Za().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),c=Math.sin(i),a=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=c*u,_=c*f;t[0]=a*u,t[4]=-a*f,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-c*a,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*a}else if(e.order==="YXZ"){const d=a*u,p=a*f,g=l*u,_=l*f;t[0]=d+_*c,t[4]=g*c-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-c,t[2]=p*c-g,t[6]=_+d*c,t[10]=o*a}else if(e.order==="ZXY"){const d=a*u,p=a*f,g=l*u,_=l*f;t[0]=d-_*c,t[4]=-o*f,t[8]=g+p*c,t[1]=p+g*c,t[5]=o*u,t[9]=_-d*c,t[2]=-o*l,t[6]=c,t[10]=o*a}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=c*u,_=c*f;t[0]=a*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=a*f,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=c*a,t[10]=o*a}else if(e.order==="YZX"){const d=o*a,p=o*l,g=c*a,_=c*l;t[0]=a*u,t[4]=_-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-c*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*a,p=o*l,g=c*a,_=c*l;t[0]=a*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=c*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Tg)}lookAt(e,t,i){const r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ar.crossVectors(i,ei),ar.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ar.crossVectors(i,ei)),ar.normalize(),Do.crossVectors(ei,ar),r[0]=ar.x,r[4]=Do.x,r[8]=ei.x,r[1]=ar.y,r[5]=Do.y,r[9]=ei.y,r[2]=ar.z,r[6]=Do.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],c=i[4],a=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],w=i[7],y=i[11],b=i[15],M=r[0],A=r[4],x=r[8],E=r[12],C=r[1],R=r[5],L=r[9],N=r[13],U=r[2],B=r[6],Z=r[10],K=r[14],se=r[3],ee=r[7],ae=r[11],fe=r[15];return s[0]=o*M+c*C+a*U+l*se,s[4]=o*A+c*R+a*B+l*ee,s[8]=o*x+c*L+a*Z+l*ae,s[12]=o*E+c*N+a*K+l*fe,s[1]=u*M+f*C+d*U+p*se,s[5]=u*A+f*R+d*B+p*ee,s[9]=u*x+f*L+d*Z+p*ae,s[13]=u*E+f*N+d*K+p*fe,s[2]=g*M+_*C+m*U+h*se,s[6]=g*A+_*R+m*B+h*ee,s[10]=g*x+_*L+m*Z+h*ae,s[14]=g*E+_*N+m*K+h*fe,s[3]=v*M+w*C+y*U+b*se,s[7]=v*A+w*R+y*B+b*ee,s[11]=v*x+w*L+y*Z+b*ae,s[15]=v*E+w*N+y*K+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],c=e[5],a=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15],v=a*p-l*d,w=c*p-l*f,y=c*d-a*f,b=o*p-l*u,M=o*d-a*u,A=o*f-c*u;return t*(_*v-m*w+h*y)-i*(g*v-m*b+h*M)+r*(g*w-_*b+h*A)-s*(g*y-_*M+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],c=e[9],a=e[2],l=e[6],u=e[10];return t*(o*u-c*l)-i*(s*u-c*a)+r*(s*l-o*a)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=t*c-i*o,w=t*a-r*o,y=t*l-s*o,b=i*a-r*c,M=i*l-s*c,A=r*l-s*a,x=u*_-f*g,E=u*m-d*g,C=u*h-p*g,R=f*m-d*_,L=f*h-p*_,N=d*h-p*m,U=v*N-w*L+y*R+b*C-M*E+A*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/U;return e[0]=(c*N-a*L+l*R)*B,e[1]=(r*L-i*N-s*R)*B,e[2]=(_*A-m*M+h*b)*B,e[3]=(d*M-f*A-p*b)*B,e[4]=(a*C-o*N-l*E)*B,e[5]=(t*N-r*C+s*E)*B,e[6]=(m*y-g*A-h*w)*B,e[7]=(u*A-d*y+p*w)*B,e[8]=(o*L-c*C+l*x)*B,e[9]=(i*C-t*L-s*x)*B,e[10]=(g*M-_*y+h*v)*B,e[11]=(f*y-u*M-p*v)*B,e[12]=(c*E-o*R-a*x)*B,e[13]=(t*R-i*E+r*x)*B,e[14]=(_*w-g*b-m*v)*B,e[15]=(u*b-f*w+d*v)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,c=e.y,a=e.z,l=s*o,u=s*c;return this.set(l*o+i,l*c-r*a,l*a+r*c,0,l*c+r*a,u*c+i,u*a-r*o,0,l*a-r*c,u*a+r*o,s*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,c=t._z,a=t._w,l=s+s,u=o+o,f=c+c,d=s*l,p=s*u,g=s*f,_=o*u,m=o*f,h=c*f,v=a*l,w=a*u,y=a*f,b=i.x,M=i.y,A=i.z;return r[0]=(1-(_+h))*b,r[1]=(p+y)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(p-y)*M,r[5]=(1-(d+h))*M,r[6]=(m+v)*M,r[7]=0,r[8]=(g+w)*A,r[9]=(m-v)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Qr.set(r[0],r[1],r[2]).length();const c=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),gi.copy(this);const l=1/o,u=1/c,f=1/a;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=f,gi.elements[9]*=f,gi.elements[10]*=f,t.setFromRotationMatrix(gi),i.x=o,i.y=c,i.z=a,this}makePerspective(e,t,i,r,s,o,c=Ni,a=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(a)g=s/(o-s),_=o*s/(o-s);else if(c===Ni)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(c===Mo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,c=Ni,a=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(a)g=1/(o-s),_=o/(o-s);else if(c===Ni)g=-2/(o-s),_=-(o+s)/(o-s);else if(c===Mo)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Za.prototype.isMatrix4=!0;let Dt=Za;const Qr=new D,gi=new Dt,wg=new D(0,0,0),Tg=new D(1,1,1),ar=new D,Do=new D,ei=new D,Xd=new Dt,qd=new Gi;class ir{constructor(e=0,t=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],c=r[8],a=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eg=0;const Yd=new D,es=new Gi,Hi=new Dt,Io=new D,ks=new D,Ag=new D,Cg=new Gi,Kd=new D(1,0,0),jd=new D(0,1,0),Zd=new D(0,0,1),Jd={type:"added"},Rg={type:"removed"},ts={type:"childadded",child:null},Rc={type:"childremoved",child:null};class En extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new D,t=new ir,i=new Gi,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new at}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Io.copy(e):Io.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ks,Io,this.up):Hi.lookAt(Io,ks,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Hi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),ts.child=e,this.dispatchEvent(ts),ts.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rg),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,a){return c[a.uuid]===void 0&&(c[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const a=c.shapes;if(Array.isArray(a))for(let l=0,u=a.length;l<u;l++){const f=a[l];s(e.shapes,f)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let a=0,l=this.material.length;a<l;a++)c.push(s(e.materials,this.material[a]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const a=this.animations[c];r.animations.push(s(e.animations,a))}}if(t){const c=o(e.geometries),a=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);c.length>0&&(i.geometries=c),a.length>0&&(i.materials=a),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(c){const a=[];for(const l in c){const u=c[l];delete u.metadata,a.push(u)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}En.DEFAULT_UP=new D(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class In extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const c=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return c!==null&&(c.visible=r!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new In;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Lc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=Yu(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Lc(o,s,e+1/3),this.g=Lc(o,s,e),this.b=Lc(o,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Un){function i(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Mt.workingToColorSpace(Ln.copy(this),e),Math.round(pt(Ln.r*255,0,255))*65536+Math.round(pt(Ln.g*255,0,255))*256+Math.round(pt(Ln.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,s=Ln.b,o=Math.max(i,r,s),c=Math.min(i,r,s);let a,l;const u=(c+o)/2;if(c===o)a=0,l=0;else{const f=o-c;switch(l=u<=.5?f/(o+c):f/(2-o-c),o){case i:a=(r-s)/f+(r<s?6:0);break;case r:a=(s-i)/f+2;break;case s:a=(i-r)/f+4;break}a/=6}return e.h=a,e.s=l,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Un){Mt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,r=Ln.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Uo);const i=so(cr.h,Uo.h,t),r=so(cr.s,Uo.s,t),s=so(cr.l,Uo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new tt;tt.NAMES=ip;class rc extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new D,$i=new D,Dc=new D,Wi=new D,ns=new D,is=new D,Qd=new D,Ic=new D,Uc=new D,Nc=new D,kc=new Ht,Fc=new Ht,Oc=new Ht;class ai{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vi.subVectors(e,t),r.cross(vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vi.subVectors(r,t),$i.subVectors(i,t),Dc.subVectors(e,t);const o=vi.dot(vi),c=vi.dot($i),a=vi.dot(Dc),l=$i.dot($i),u=$i.dot(Dc),f=o*l-c*c;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*a-c*u)*d,g=(o*u-c*a)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,i,r,s,o,c,a){return this.getBarycoord(e,t,i,r,Wi)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,Wi.x),a.addScaledVector(o,Wi.y),a.addScaledVector(c,Wi.z),a)}static getInterpolatedAttribute(e,t,i,r,s,o){return kc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),kc.fromBufferAttribute(e,t),Fc.fromBufferAttribute(e,i),Oc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(kc,s.x),o.addScaledVector(Fc,s.y),o.addScaledVector(Oc,s.z),o}static isFrontFacing(e,t,i,r){return vi.subVectors(i,t),$i.subVectors(e,t),vi.cross($i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),vi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,c;ns.subVectors(r,i),is.subVectors(s,i),Ic.subVectors(e,i);const a=ns.dot(Ic),l=is.dot(Ic);if(a<=0&&l<=0)return t.copy(i);Uc.subVectors(e,r);const u=ns.dot(Uc),f=is.dot(Uc);if(u>=0&&f<=u)return t.copy(r);const d=a*f-u*l;if(d<=0&&a>=0&&u<=0)return o=a/(a-u),t.copy(i).addScaledVector(ns,o);Nc.subVectors(e,s);const p=ns.dot(Nc),g=is.dot(Nc);if(g>=0&&p<=g)return t.copy(s);const _=p*l-a*g;if(_<=0&&l>=0&&g<=0)return c=l/(l-g),t.copy(i).addScaledVector(is,c);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Qd.subVectors(s,r),c=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Qd,c);const h=1/(m+_+d);return o=_*h,c=d*h,t.copy(i).addScaledVector(ns,o).addScaledVector(is,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),ko.subVectors(this.max,Fs),rs.subVectors(e.a,Fs),ss.subVectors(e.b,Fs),os.subVectors(e.c,Fs),lr.subVectors(ss,rs),ur.subVectors(os,ss),Pr.subVectors(rs,os);let t=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Pr.z,Pr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Pr.z,0,-Pr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Pr.y,Pr.x,0];return!zc(t,rs,ss,os,ko)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,rs,ss,os,ko))?!1:(Fo.crossVectors(lr,ur),t=[Fo.x,Fo.y,Fo.z],zc(t,rs,ss,os,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new D,new D,new D,new D,new D,new D,new D,new D],_i=new D,No=new Wr,rs=new D,ss=new D,os=new D,lr=new D,ur=new D,Pr=new D,Fs=new D,ko=new D,Fo=new D,Lr=new D;function zc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Lr.fromArray(n,s);const c=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),a=e.dot(Lr),l=t.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(a,l,u),Math.min(a,l,u))>c)return!1}return!0}const ln=new D,Oo=new qe;let Lg=0;class Zt extends $r{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class rp extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sp extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Dg=new Wr,Os=new D,Bc=new D;class Xr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Bc)),this.expandByPoint(Os.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ig=0;const oi=new Dt,Gc=new En,as=new D,ti=new Wr,zs=new Wr,gn=new D;class zt extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?sp:rp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];zs.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(ti.min,zs.min),ti.expandByPoint(gn),gn.addVectors(ti.max,zs.max),ti.expandByPoint(gn)):(ti.expandByPoint(zs.min),ti.expandByPoint(zs.max))}ti.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],a=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)gn.fromBufferAttribute(c,l),a&&(as.fromBufferAttribute(e,l),gn.add(as)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const c=[],a=[];for(let x=0;x<i.count;x++)c[x]=new D,a[x]=new D;const l=new D,u=new D,f=new D,d=new qe,p=new qe,g=new qe,_=new D,m=new D;function h(x,E,C){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,C),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,C),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),c[x].add(_),c[E].add(_),c[C].add(_),a[x].add(m),a[E].add(m),a[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,E=v.length;x<E;++x){const C=v[x],R=C.start,L=C.count;for(let N=R,U=R+L;N<U;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new D,y=new D,b=new D,M=new D;function A(x){b.fromBufferAttribute(r,x),M.copy(b);const E=c[x];w.copy(E),w.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(M,E);const R=y.dot(a[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,R)}for(let x=0,E=v.length;x<E;++x){const C=v[x],R=C.start,L=C.count;for(let N=R,U=R+L;N<U;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,c=new D,a=new D,l=new D,u=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),c.fromBufferAttribute(i,g),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.add(u),a.add(u),l.add(u),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(c,a){const l=c.array,u=c.itemSize,f=c.normalized,d=new l.constructor(a.length*u);let p=0,g=0;for(let _=0,m=a.length;_<m;_++){c.isInterleavedBufferAttribute?p=a[_]*c.data.stride+c.offset:p=a[_]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Zt(d,u,f)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const c in r){const a=r[c],l=e(a,i);t.setAttribute(c,l)}const s=this.morphAttributes;for(const c in s){const a=[],l=s[c];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,i);a.push(p)}t.morphAttributes[c]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,a=o.length;c<a;c++){const l=o[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const a in i){const l=i[a];e.data.attributes[a]=l.toJSON(e.data)}const r={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[a]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ug{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qh,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Gn=new D;class Ha{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ha(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vc=new D,Ng=new D,kg=new at;class Li{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vc.subVectors(i,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Vc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kg.getNormalMatrix(e),r=this.coplanarPoint(Vc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Fg=0;class Ar extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=io,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Fh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wc,this.stencilZFail=wc,this.stencilZPass=wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const c in s){const a=s[c];delete a.metadata,o.push(a)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oo extends Ar{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const Bs=new D,ls=new D,us=new D,ds=new qe,Gs=new qe,op=new Dt,zo=new D,Vs=new D,Bo=new D,ef=new qe,Hc=new qe,tf=new qe;class _a extends En{constructor(e=new oo){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ug(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Ha(i,3,0,!1)),cs.setAttribute("uv",new Ha(i,2,3,!1))}this.geometry=cs,this.material=e,this.center=new qe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&At('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Go(zo.set(-.5,-.5,0),us,o,ls,r,s),Go(Vs.set(.5,-.5,0),us,o,ls,r,s),Go(Bo.set(.5,.5,0),us,o,ls,r,s),ef.set(0,0),Hc.set(1,0),tf.set(1,1);let c=e.ray.intersectTriangle(zo,Vs,Bo,!1,Bs);if(c===null&&(Go(Vs.set(-.5,.5,0),us,o,ls,r,s),Hc.set(0,1),c=e.ray.intersectTriangle(zo,Bo,Vs,!1,Bs),c===null))return;const a=e.ray.origin.distanceTo(Bs);a<e.near||a>e.far||t.push({distance:a,point:Bs.clone(),uv:ai.getInterpolation(Bs,zo,Vs,Bo,ef,Hc,tf,new qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Go(n,e,t,i,r,s){ds.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Gs.x=s*ds.x-r*ds.y,Gs.y=r*ds.x+s*ds.y):Gs.copy(ds),n.copy(e),n.x+=Gs.x,n.y+=Gs.y,n.applyMatrix4(op)}const qi=new D,$c=new D,Vo=new D,Ho=new D;class sc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$c.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Ho.copy(this.origin).sub($c);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vo),c=Ho.dot(this.direction),a=-Ho.dot(Vo),l=Ho.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*a-c,d=o*c-a,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*c)+d*(o*f+d+2*a)+l}else d=s,f=Math.max(0,-(o*d+c)),p=-f*f+d*(d+2*a)+l;else d=-s,f=Math.max(0,-(o*d+c)),p=-f*f+d*(d+2*a)+l;else d<=-g?(f=Math.max(0,-(-o*s+c)),d=f>0?-s:Math.min(Math.max(-s,-a),s),p=-f*f+d*(d+2*a)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-a),s),p=d*(d+2*a)+l):(f=Math.max(0,-(o*s+c)),d=f>0?s:Math.min(Math.max(-s,-a),s),p=-f*f+d*(d+2*a)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+c)),p=-f*f+d*(d+2*a)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($c).addScaledVector(Vo,d),p}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),r=qi.dot(qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),c=i-o,a=i+o;return a<0?null:c<0?this.at(a,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,c,a;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(c=(e.min.z-d.z)*f,a=(e.max.z-d.z)*f):(c=(e.max.z-d.z)*f,a=(e.min.z-d.z)*f),i>a||c>r)||((c>i||i!==i)&&(i=c),(a<r||r!==r)&&(r=a),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,r,s){const o=this.origin,c=this.direction,a=c.x,l=c.y,u=c.z,f=e.x-o.x,d=e.y-o.y,p=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,h=i.x-o.x,v=i.y-o.y,w=i.z-o.z,y=Math.abs(a),b=Math.abs(l),M=Math.abs(u);let A,x,E,C,R,L,N,U,B,Z,K,se;if(y>=b&&y>=M?(E=a,L=f,B=g,se=h,a>=0?(A=l,x=u,C=d,R=p,N=_,U=m,Z=v,K=w):(A=u,x=l,C=p,R=d,N=m,U=_,Z=w,K=v)):b>=M?(E=l,L=d,B=_,se=v,l>=0?(A=u,x=a,C=p,R=f,N=m,U=g,Z=w,K=h):(A=a,x=u,C=f,R=p,N=g,U=m,Z=h,K=w)):(E=u,L=p,B=m,se=w,u>=0?(A=a,x=l,C=f,R=d,N=g,U=_,Z=h,K=v):(A=l,x=a,C=d,R=f,N=_,U=g,Z=v,K=h)),E===0)return null;const ee=A/E,ae=x/E,fe=1/E,Be=C-ee*L,Fe=R-ae*L,Ut=N-ee*B,We=U-ae*B,ve=Z-ee*se,te=K-ae*se,ue=ve*We-te*Ut,Pe=Be*te-Fe*ve,je=Ut*Fe-We*Be;if(r){if(ue<0||Pe<0||je<0)return null}else if((ue<0||Pe<0||je<0)&&(ue>0||Pe>0||je>0))return null;const De=ue+Pe+je;if(De===0)return null;const it=fe*(ue*L+Pe*B+je*se);return(De>0?it<0:it>0)?null:this.at(it/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ju extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nf=new Dt,Dr=new sc,$o=new Xr,rf=new D,Wo=new D,Xo=new D,qo=new D,Wc=new D,Yo=new D,sf=new D,Ko=new D;class Lt extends En{constructor(e=new zt,t=new ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Yo.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const u=c[a],f=s[a];u!==0&&(Wc.fromBufferAttribute(f,e),o?Yo.addScaledVector(Wc,u):Yo.addScaledVector(Wc.sub(t),u))}t.add(Yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!($o.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere($o,rf)===null||Dr.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(nf.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(nf),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,c=s.index,a=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(c!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,b=w;y<b;y+=3){const M=c.getX(y),A=c.getX(y+1),x=c.getX(y+2);r=jo(this,h,e,i,l,u,f,M,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=c.getX(m),w=c.getX(m+1),y=c.getX(m+2);r=jo(this,o,e,i,l,u,f,v,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,b=w;y<b;y+=3){const M=y,A=y+1,x=y+2;r=jo(this,h,e,i,l,u,f,M,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,w=m+1,y=m+2;r=jo(this,o,e,i,l,u,f,v,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Og(n,e,t,i,r,s,o,c){let a;if(e.side===Yn?a=i.intersectTriangle(o,s,r,!0,c):a=i.intersectTriangle(r,s,o,e.side===Br,c),a===null)return null;Ko.copy(c),Ko.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:n}}function jo(n,e,t,i,r,s,o,c,a,l){n.getVertexPosition(c,Wo),n.getVertexPosition(a,Xo),n.getVertexPosition(l,qo);const u=Og(n,e,t,i,Wo,Xo,qo,sf);if(u){const f=new D;ai.getBarycoord(sf,Wo,Xo,qo,f),r&&(u.uv=ai.getInterpolatedAttribute(r,c,a,l,f,new qe)),s&&(u.uv1=ai.getInterpolatedAttribute(s,c,a,l,f,new qe)),o&&(u.normal=ai.getInterpolatedAttribute(o,c,a,l,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:c,b:a,c:l,normal:new D,materialIndex:0};ai.getNormal(Wo,Xo,qo,d.normal),u.face=d,u.barycoord=f}return u}class Zu extends zn{constructor(e=null,t=1,i=1,r,s,o,c,a,l=Tn,u=Tn,f,d){super(null,o,c,a,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As extends Zt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new Dt,of=new Dt,Zo=[],af=new Wr,zg=new Dt,Hs=new Lt,$s=new Xr;class $a extends Lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),af.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),$s.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let c=0;c<i.length;c++)i[c]=r[o+c]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),e.ray.intersectsSphere($s)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fs),of.multiplyMatrices(i,fs),Hs.matrixWorld=of,Hs.raycast(e,Zo);for(let o=0,c=Zo.length;o<c;o++){const a=Zo[o];a.instanceId=s,a.object=this,t.push(a)}Zo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zu(new Float32Array(r*this.count),r,this.count,Vu,Si));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const c=this.geometry.morphTargetsRelative?1:1-o,a=r*e;return s[a]=c,s.set(i,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ir=new Xr,Bg=new qe(.5,.5),Jo=new D;class Ju{constructor(e=new Li,t=new Li,i=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni,i=!1){const r=this.planes,s=e.elements,o=s[0],c=s[1],a=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],_=s[9],m=s[10],h=s[11],v=s[12],w=s[13],y=s[14],b=s[15];if(r[0].setComponents(l-o,p-u,h-g,b-v).normalize(),r[1].setComponents(l+o,p+u,h+g,b+v).normalize(),r[2].setComponents(l+c,p+f,h+_,b+w).normalize(),r[3].setComponents(l-c,p-f,h-_,b-w).normalize(),i)r[4].setComponents(a,d,m,y).normalize(),r[5].setComponents(l-a,p-d,h-m,b-y).normalize();else if(r[4].setComponents(l-a,p-d,h-m,b-y).normalize(),t===Ni)r[5].setComponents(l+a,p+d,h+m,b+y).normalize();else if(t===Mo)r[5].setComponents(a,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const t=Bg.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jo.x=r.normal.x>0?e.max.x:e.min.x,Jo.y=r.normal.y>0?e.max.y:e.min.y,Jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qu extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new D,Xa=new D,cf=new Dt,Ws=new sc,Qo=new Xr,Xc=new D,lf=new D;class xa extends En{constructor(e=new zt,t=new Qu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Wa.fromBufferAttribute(t,r-1),Xa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new mt(i,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;cf.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(cf);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=c*c,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const h=u.getX(_),v=u.getX(_+1),w=ea(this,e,Ws,a,h,v,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),h=ea(this,e,Ws,a,_,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const h=ea(this,e,Ws,a,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){const _=ea(this,e,Ws,a,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function ea(n,e,t,i,r,s,o){const c=n.geometry.attributes.position;if(Wa.fromBufferAttribute(c,r),Xa.fromBufferAttribute(c,s),t.distanceSqToSegment(Wa,Xa,Xc,lf)>i)return;Xc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Xc);if(!(l<e.near||l>e.far))return{distance:l,point:lf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const uf=new D,df=new D;class Gg extends xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)uf.fromBufferAttribute(t,r),df.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+uf.distanceTo(df);e.setAttribute("lineDistance",new mt(i,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vg extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ff=new Dt,su=new sc,ta=new Xr,na=new D;class ap extends En{constructor(e=new zt,t=new Vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),ta.radius+=s,e.ray.intersectsSphere(ta)===!1)return;ff.copy(r).invert(),su.copy(e.ray).applyMatrix4(ff);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=c*c,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);na.fromBufferAttribute(f,m),hf(na,m,a,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)na.fromBufferAttribute(f,g),hf(na,g,a,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function hf(n,e,t,i,r,s,o){const c=su.distanceSqToPoint(n);if(c<t){const a=new D;su.closestPointToPoint(n,a),a.applyMatrix4(i);const l=r.ray.origin.distanceTo(a);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(c),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cp extends zn{constructor(e=[],t=Gr,i,r,s,o,c,a,l,u){super(e,t,i,r,s,o,c,a,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ed extends zn{constructor(e,t,i,r,s,o,c,a,l){super(e,t,i,r,s,o,c,a,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bo extends zn{constructor(e,t,i=Bi,r,s,o,c=Tn,a=Tn,l,u=nr,f=1){if(u!==nr&&u!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,c,a,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Hg extends bo{constructor(e,t=Bi,i=Gr,r,s,o=Tn,c=Tn,a,l=nr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,c,a,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lp extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _n extends zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const a=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function g(_,m,h,v,w,y,b,M,A,x,E){const C=y/A,R=b/x,L=y/2,N=b/2,U=M/2,B=A+1,Z=x+1;let K=0,se=0;const ee=new D;for(let ae=0;ae<Z;ae++){const fe=ae*R-N;for(let Be=0;Be<B;Be++){const Fe=Be*C-L;ee[_]=Fe*v,ee[m]=fe*w,ee[h]=U,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[h]=M>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Be/A),f.push(1-ae/x),K+=1}}for(let ae=0;ae<x;ae++)for(let fe=0;fe<A;fe++){const Be=d+fe+B*ae,Fe=d+fe+B*(ae+1),Ut=d+(fe+1)+B*(ae+1),We=d+(fe+1)+B*ae;a.push(Be,Fe,We),a.push(Fe,Ut,We),se+=6}c.addGroup(p,se,E),p+=se,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vn extends zt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,c=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:a};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let h=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function v(){const y=new D,b=new D;let M=0;const A=(t-e)/i;for(let x=0;x<=s;x++){const E=[],C=x/s,R=C*(t-e)+e;for(let L=0;L<=r;L++){const N=L/r,U=N*a+c,B=Math.sin(U),Z=Math.cos(U);b.x=R*B,b.y=-C*i+m,b.z=R*Z,f.push(b.x,b.y,b.z),y.set(B,A,Z).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-C),E.push(g++)}_.push(E)}for(let x=0;x<r;x++)for(let E=0;E<s;E++){const C=_[E][x],R=_[E+1][x],L=_[E+1][x+1],N=_[E][x+1];(e>0||E!==0)&&(u.push(C,R,N),M+=3),(t>0||E!==s-1)&&(u.push(R,L,N),M+=3)}l.addGroup(h,M,0),h+=M}function w(y){const b=g,M=new qe,A=new D;let x=0;const E=y===!0?e:t,C=y===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),g++;const R=g;for(let L=0;L<=r;L++){const U=L/r*a+c,B=Math.cos(U),Z=Math.sin(U);A.x=E*Z,A.y=m*C,A.z=E*B,f.push(A.x,A.y,A.z),d.push(0,C,0),M.x=B*.5+.5,M.y=Z*.5*C+.5,p.push(M.x,M.y),g++}for(let L=0;L<r;L++){const N=b+L,U=R+L;y===!0?u.push(U,U+1,N):u.push(U+1,U,N),x+=3}l.addGroup(h,x,y===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class td extends vn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,i,r,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new td(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nd extends zt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];c(r),l(i),u(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(v){const w=new D,y=new D,b=new D;for(let M=0;M<t.length;M+=3)p(t[M+0],w),p(t[M+1],y),p(t[M+2],b),a(w,y,b,v)}function a(v,w,y,b){const M=b+1,A=[];for(let x=0;x<=M;x++){A[x]=[];const E=v.clone().lerp(y,x/M),C=w.clone().lerp(y,x/M),R=M-x;for(let L=0;L<=R;L++)L===0&&x===M?A[x][L]=E:A[x][L]=E.clone().lerp(C,L/R)}for(let x=0;x<M;x++)for(let E=0;E<2*(M-x)-1;E++){const C=Math.floor(E/2);E%2===0?(d(A[x][C+1]),d(A[x+1][C]),d(A[x][C])):(d(A[x][C+1]),d(A[x+1][C+1]),d(A[x+1][C]))}}function l(v){const w=new D;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(v),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function u(){const v=new D;for(let w=0;w<s.length;w+=3){v.x=s[w+0],v.y=s[w+1],v.z=s[w+2];const y=m(v)/2/Math.PI+.5,b=h(v)/Math.PI+.5;o.push(y,1-b)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){const w=o[v+0],y=o[v+2],b=o[v+4],M=Math.max(w,y,b),A=Math.min(w,y,b);M>.9&&A<.1&&(w<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function p(v,w){const y=v*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const v=new D,w=new D,y=new D,b=new D,M=new qe,A=new qe,x=new qe;for(let E=0,C=0;E<s.length;E+=9,C+=6){v.set(s[E+0],s[E+1],s[E+2]),w.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),M.set(o[C+0],o[C+1]),A.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),b.copy(v).add(w).add(y).divideScalar(3);const R=m(b);_(M,C+0,v,R),_(A,C+2,w,R),_(x,C+4,y,R)}}function _(v,w,y,b){b<0&&v.x===1&&(o[w]=v.x-1),y.x===0&&y.z===0&&(o[w]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.vertices,e.indices,e.radius,e.detail)}}class id extends nd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new id(e.radius,e.detail)}}class rd extends zt{constructor(e=[new qe(0,-.5),new qe(.5,0),new qe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=pt(r,0,Math.PI*2);const s=[],o=[],c=[],a=[],l=[],u=1/t,f=new D,d=new qe,p=new D,g=new D,_=new D;let m=0,h=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,h=e[v+1].y-e[v].y,p.x=h*1,p.y=-m,p.z=h*0,_.copy(p),p.normalize(),a.push(p.x,p.y,p.z);break;case e.length-1:a.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,h=e[v+1].y-e[v].y,p.x=h*1,p.y=-m,p.z=h*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),a.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=t;v++){const w=i+v*u*r,y=Math.sin(w),b=Math.cos(w);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*y,f.y=e[M].y,f.z=e[M].x*b,o.push(f.x,f.y,f.z),d.x=v/t,d.y=M/(e.length-1),c.push(d.x,d.y);const A=a[3*M+0]*y,x=a[3*M+1],E=a[3*M+0]*b;l.push(A,x,E)}}for(let v=0;v<t;v++)for(let w=0;w<e.length-1;w++){const y=w+v*e.length,b=y,M=y+e.length,A=y+e.length+1,x=y+1;s.push(b,M,x),s.push(A,x,M)}this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(c,2)),this.setAttribute("normal",new mt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rd(e.points,e.segments,e.phiStart,e.phiLength)}}class Ds extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,c=Math.floor(i),a=Math.floor(r),l=c+1,u=a+1,f=e/c,d=t/a,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const v=h*d-o;for(let w=0;w<l;w++){const y=w*f-s;g.push(y,-v,0),_.push(0,0,1),m.push(w/c),m.push(1-h/a)}}for(let h=0;h<a;h++)for(let v=0;v<c;v++){const w=v+l*h,y=v+l*(h+1),b=v+1+l*(h+1),M=v+1+l*h;p.push(w,y,M),p.push(y,b,M)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class oc extends zt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const c=[],a=[],l=[],u=[];let f=e;const d=(t-e)/r,p=new D,g=new qe;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),a.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let h=0;h<i;h++){const v=h+m,w=v,y=v+i+1,b=v+i+2,M=v+1;c.push(w,y,M),c.push(y,b,M)}}this.setIndex(c),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oi extends zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const a=Math.min(o+c,Math.PI);let l=0;const u=[],f=new D,d=new D,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const v=[],w=h/i,y=o+w*c,b=e*Math.cos(y),M=Math.sqrt(e*e-b*b);let A=0;h===0&&o===0?A=.5/t:h===i&&a===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const E=x/t,C=r+E*s;f.x=-M*Math.cos(C),f.y=b,f.z=M*Math.sin(C),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(E+A,1-w),v.push(l++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<t;v++){const w=u[h][v+1],y=u[h][v],b=u[h+1][v],M=u[h+1][v+1];(h!==0||o>0)&&p.push(w,y,M),(h!==i-1||a<Math.PI)&&p.push(y,b,M)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vr extends zt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:c},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],u=[],f=[],d=new D,p=new D,g=new D;for(let _=0;_<=i;_++){const m=o+_/i*c;for(let h=0;h<=r;h++){const v=h/r*s;p.x=(e+t*Math.cos(m))*Math.cos(v),p.y=(e+t*Math.cos(m))*Math.sin(v),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(p,d).normalize(),u.push(g.x,g.y,g.z),f.push(h/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=r;m++){const h=(r+1)*_+m-1,v=(r+1)*(_-1)+m-1,w=(r+1)*(_-1)+m,y=(r+1)*_+m;a.push(h,v,y),a.push(v,w,y)}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(pf(r))r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(pf(r[0])){const s=[];for(let o=0,c=r.length;o<c;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=Cs(n[t]);for(const r in i)e[r]=i[r]}return e}function pf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $g(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Wg={clone:Cs,merge:Vn};var Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=$g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new at().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Yg extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qa extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kg extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jg extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qc extends Qu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class dp extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Yc=new Dt,mf=new D,gf=new D;class Zg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ju,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Yc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,c=r?r.w/s.y:1,a=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Mo||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*c,0,.5*c+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*c,0,.5*c+l,0,0,.5,.5,0,0,0,1),t.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ia=new D,ra=new Gi,Ri=new D;class ac extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ia,ra,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,ra,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ia,ra,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,ra,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dr=new D,vf=new qe,_f=new qe;class ni extends ac{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,vf,_f),t.subVectors(_f,vf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/a,t-=o.offsetY*i/l,r*=o.width/a,i*=o.height/l}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jg extends Zg{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}}class xf extends dp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Jg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fp extends ac{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,c=r+t,a=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,c-=u*this.view.offsetY,a=c-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qg extends dp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hp extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const hs=-90,ps=1;class pp extends En{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(hs,ps,e,t);r.layers=this.layers,this.add(r);const s=new ni(hs,ps,e,t);s.layers=this.layers,this.add(s);const o=new ni(hs,ps,e,t);o.layers=this.layers,this.add(o);const c=new ni(hs,ps,e,t);c.layers=this.layers,this.add(c);const a=new ni(hs,ps,e,t);a.layers=this.layers,this.add(a);const l=new ni(hs,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,c,a]=t;for(const l of t)this.remove(l);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,a,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ev extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tv{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yd=class yd{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};yd.prototype.isMatrix2=!0;let yf=yd;function Mf(n,e,t,i){const r=nv(i);switch(t){case Zh:return n*e;case Vu:return n*e/r.components*r.byteLength;case Hu:return n*e/r.components*r.byteLength;case Vr:return n*e*2/r.components*r.byteLength;case $u:return n*e*2/r.components*r.byteLength;case Jh:return n*e*3/r.components*r.byteLength;case ci:return n*e*4/r.components*r.byteLength;case Wu:return n*e*4/r.components*r.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Ll:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Dl:case Il:case Nl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fa:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Ql:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oa:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nv(n){switch(n){case Xn:case qh:return{byteLength:1,components:1};case xo:case Yh:case hi:return{byteLength:2,components:1};case Bu:case Gu:return{byteLength:2,components:4};case Bi:case zu:case Si:return{byteLength:4,components:1};case Kh:case jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ou}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ou);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mp(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iv(n){const e=new WeakMap;function t(c,a){const l=c.array,u=c.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(a,d),n.bufferData(a,l,u),c.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:f}}function i(c,a,l){const u=a.array,f=a.updateRanges;if(n.bindBuffer(l,c),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}a.clearUpdateRanges()}a.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const a=e.get(c);a&&(n.deleteBuffer(a.buffer),e.delete(c))}function o(c,a){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const l=e.get(c);if(l===void 0)e.set(c,t(c,a));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,a),l.version=c.version}}return{get:r,remove:s,update:o}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
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
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vv=`#ifdef USE_IRIDESCENCE
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
#endif`,_v=`#ifdef USE_BUMPMAP
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
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rv=`vec3 transformedNormal = objectNormal;
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
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
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
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t_=`PhysicalMaterial material;
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
#endif`,n_=`uniform sampler2D dfgLUT;
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
}`,i_=`
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p_=`#if defined( USE_POINTS_UV )
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
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H_=`float getShadowMask() {
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
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,wx=`#define NORMAL
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
}`,Tx=`#define NORMAL
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
}`,Ex=`#define PHONG
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
}`,Ax=`#define PHONG
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
}`,Cx=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,kx=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:rv,alphahash_pars_fragment:sv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:cv,alphatest_pars_fragment:lv,aomap_fragment:uv,aomap_pars_fragment:dv,batching_pars_vertex:fv,batching_vertex:hv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:vv,bumpmap_pars_fragment:_v,clipping_planes_fragment:xv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:Sv,color_fragment:bv,color_pars_fragment:wv,color_pars_vertex:Tv,color_vertex:Ev,common:Av,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Pv,displacementmap_vertex:Lv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Iv,colorspace_fragment:Uv,colorspace_pars_fragment:Nv,envmap_fragment:kv,envmap_common_pars_fragment:Fv,envmap_pars_fragment:Ov,envmap_pars_vertex:zv,envmap_physical_pars_fragment:jv,envmap_vertex:Bv,fog_vertex:Gv,fog_pars_vertex:Vv,fog_fragment:Hv,fog_pars_fragment:$v,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:qv,lights_lambert_pars_fragment:Yv,lights_pars_begin:Kv,lights_toon_fragment:Zv,lights_toon_pars_fragment:Jv,lights_phong_fragment:Qv,lights_phong_pars_fragment:e_,lights_physical_fragment:t_,lights_physical_pars_fragment:n_,lights_fragment_begin:i_,lights_fragment_maps:r_,lights_fragment_end:s_,lightprobes_pars_fragment:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:u_,map_fragment:d_,map_pars_fragment:f_,map_particle_fragment:h_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphinstance_vertex:v_,morphcolor_vertex:__,morphnormal_vertex:x_,morphtarget_pars_vertex:y_,morphtarget_vertex:M_,normal_fragment_begin:S_,normal_fragment_maps:b_,normal_pars_fragment:w_,normal_pars_vertex:T_,normal_vertex:E_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:L_,opaque_fragment:D_,packing:I_,premultiplied_alpha_fragment:U_,project_vertex:N_,dithering_fragment:k_,dithering_pars_fragment:F_,roughnessmap_fragment:O_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:G_,shadowmap_vertex:V_,shadowmask_pars_fragment:H_,skinbase_vertex:$_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:q_,specularmap_fragment:Y_,specularmap_pars_fragment:K_,tonemapping_fragment:j_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:Q_,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:rx,background_frag:sx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:cx,cube_frag:lx,depth_vert:ux,depth_frag:dx,distance_vert:fx,distance_frag:hx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:vx,meshbasic_vert:_x,meshbasic_frag:xx,meshlambert_vert:yx,meshlambert_frag:Mx,meshmatcap_vert:Sx,meshmatcap_frag:bx,meshnormal_vert:wx,meshnormal_frag:Tx,meshphong_vert:Ex,meshphong_frag:Ax,meshphysical_vert:Cx,meshphysical_frag:Rx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Dx,points_frag:Ix,shadow_vert:Ux,shadow_frag:Nx,sprite_vert:kx,sprite_frag:Fx},Ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Di={basic:{uniforms:Vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Vn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Vn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Vn([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Vn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Vn([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Vn([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Vn([Ae.common,Ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Vn([Ae.lights,Ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Di.physical={uniforms:Vn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const sa={r:0,b:0,g:0},Ox=new Dt,gp=new at;gp.set(-1,0,0,0,1,0,0,0,1);function zx(n,e,t,i,r,s){const o=new tt(0);let c=r===!0?0:1,a,l,u=null,f=0,d=null;function p(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const y=v.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(v){let w=!1;const y=p(v);y===null?m(o,c):y&&y.isColor&&(m(y,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,w){const y=p(w);y&&(y.isCubeTexture||y.mapping===ic)?(l===void 0&&(l=new Lt(new _n(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Cs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gp),l.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Ft,(u!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(a===void 0&&(a=new Lt(new Ds(2,2),new It({name:"BackgroundMaterial",uniforms:Cs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=y,a.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,a.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),a.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(a.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),a.layers.enableAll(),v.unshift(a,a.geometry,a.material,0,0,null))}function m(v,w){v.getRGB(sa,up(n)),t.buffers.color.setClear(sa.r,sa.g,sa.b,w,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),c=w,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(o,c)},render:g,addToRenderList:_,dispose:h}}function Bx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function c(R,L,N,U,B){let Z=!1;const K=f(R,U,N,L);s!==K&&(s=K,l(s.object)),Z=p(R,U,N,B),Z&&g(R,U,N,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(R,L,N,U),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function a(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function f(R,L,N,U){const B=U.wireframe===!0;let Z=i[L.id];Z===void 0&&(Z={},i[L.id]=Z);const K=R.isInstancedMesh===!0?R.id:0;let se=Z[K];se===void 0&&(se={},Z[K]=se);let ee=se[N.id];ee===void 0&&(ee={},se[N.id]=ee);let ae=ee[B];return ae===void 0&&(ae=d(a()),ee[B]=ae),ae}function d(R){const L=[],N=[],U=[];for(let B=0;B<t;B++)L[B]=0,N[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:U,object:R,attributes:{},index:null}}function p(R,L,N,U){const B=s.attributes,Z=L.attributes;let K=0;const se=N.getAttributes();for(const ee in se)if(se[ee].location>=0){const fe=B[ee];let Be=Z[ee];if(Be===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(Be=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(Be=R.instanceColor)),fe===void 0||fe.attribute!==Be||Be&&fe.data!==Be.data)return!0;K++}return s.attributesNum!==K||s.index!==U}function g(R,L,N,U){const B={},Z=L.attributes;let K=0;const se=N.getAttributes();for(const ee in se)if(se[ee].location>=0){let fe=Z[ee];fe===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));const Be={};Be.attribute=fe,fe&&fe.data&&(Be.data=fe.data),B[ee]=Be,K++}s.attributes=B,s.attributesNum=K,s.index=U}function _(){const R=s.newAttributes;for(let L=0,N=R.length;L<N;L++)R[L]=0}function m(R){h(R,0)}function h(R,L){const N=s.newAttributes,U=s.enabledAttributes,B=s.attributeDivisors;N[R]=1,U[R]===0&&(n.enableVertexAttribArray(R),U[R]=1),B[R]!==L&&(n.vertexAttribDivisor(R,L),B[R]=L)}function v(){const R=s.newAttributes,L=s.enabledAttributes;for(let N=0,U=L.length;N<U;N++)L[N]!==R[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function w(R,L,N,U,B,Z,K){K===!0?n.vertexAttribIPointer(R,L,N,B,Z):n.vertexAttribPointer(R,L,N,U,B,Z)}function y(R,L,N,U){_();const B=U.attributes,Z=N.getAttributes(),K=L.defaultAttributeValues;for(const se in Z){const ee=Z[se];if(ee.location>=0){let ae=B[se];if(ae===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const fe=ae.normalized,Be=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const Ut=Fe.buffer,We=Fe.type,ve=Fe.bytesPerElement,te=We===n.INT||We===n.UNSIGNED_INT||ae.gpuType===zu;if(ae.isInterleavedBufferAttribute){const ue=ae.data,Pe=ue.stride,je=ae.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)h(ee.location+De,ue.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<ee.locationSize;De++)m(ee.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let De=0;De<ee.locationSize;De++)w(ee.location+De,Be/ee.locationSize,We,fe,Pe*ve,(je+Be/ee.locationSize*De)*ve,te)}else{if(ae.isInstancedBufferAttribute){for(let ue=0;ue<ee.locationSize;ue++)h(ee.location+ue,ae.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ue=0;ue<ee.locationSize;ue++)m(ee.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let ue=0;ue<ee.locationSize;ue++)w(ee.location+ue,Be/ee.locationSize,We,fe,Be*ve,Be/ee.locationSize*ue*ve,te)}}else if(K!==void 0){const fe=K[se];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(ee.location,fe);break;case 3:n.vertexAttrib3fv(ee.location,fe);break;case 4:n.vertexAttrib4fv(ee.location,fe);break;default:n.vertexAttrib1fv(ee.location,fe)}}}}v()}function b(){E();for(const R in i){const L=i[R];for(const N in L){const U=L[N];for(const B in U){const Z=U[B];for(const K in Z)u(Z[K].object),delete Z[K];delete U[B]}}delete i[R]}}function M(R){if(i[R.id]===void 0)return;const L=i[R.id];for(const N in L){const U=L[N];for(const B in U){const Z=U[B];for(const K in Z)u(Z[K].object),delete Z[K];delete U[B]}}delete i[R.id]}function A(R){for(const L in i){const N=i[L];for(const U in N){const B=N[U];if(B[R.id]===void 0)continue;const Z=B[R.id];for(const K in Z)u(Z[K].object),delete Z[K];delete B[R.id]}}}function x(R){for(const L in i){const N=i[L],U=R.isInstancedMesh===!0?R.id:0,B=N[U];if(B!==void 0){for(const Z in B){const K=B[Z];for(const se in K)u(K[se].object),delete K[se];delete B[Z]}delete N[U],Object.keys(N).length===0&&delete i[L]}}}function E(){C(),o=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:E,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Gx(n,e,t){let i;function r(a){i=a}function s(a,l){n.drawArrays(i,a,l),t.update(l,i,1)}function o(a,l,u){u!==0&&(n.drawArraysInstanced(i,a,l,u),t.update(l,i,u))}function c(a,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c}function Vx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ci&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(A){const x=A===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xn&&A!==Si&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function a(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=a(l);u!==l&&(et("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:M}}function Hx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Li,c=new at,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const v=s?0:i,w=v*4;let y=h.clippingState||null;a.value=y,y=u(g,d,w,p);for(let b=0;b!==w;++b)y[b]=t[b];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=a.value,g!==!0||m===null){const h=p+_*4,v=d.matrixWorldInverse;c.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,y=p;w!==_;++w,y+=4)o.copy(f[w]).applyMatrix4(v,c),o.normal.toArray(m,y),m[y+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const _s=4,$x=6,Wx=20,Xx=256,Xs=new fp,Sf=new tt;let Kc=null,jc=0,Zc=0,Jc=!1;const qx=new D,Ur=new D;class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:c=qx}=s;Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a,c),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,jc,Zc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:hi,format:ci,colorSpace:za,depthBuffer:!1},r=bf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yx(s)),this._blurMaterial=jx(s,e,t),this._ggxMaterial=Kx(s,e,t)}return r}_compileMaterial(e){const t=new Lt(new zt,e);this._renderer.compile(t,Xs)}_sceneToCubeUV(e,t,i,r,s){const a=new ni(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Sf),f.toneMapping=Fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new _n,new ju({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,h=!0):(m.color.copy(Sf),h=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(a.up.set(0,l[w],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+u[w],s.y,s.z)):y===1?(a.up.set(0,0,l[w]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+u[w],s.z)):(a.up.set(0,l[w],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+u[w]));const b=this._cubeSize;ms(r,y*b,w>2?b:0,b,b),f.setRenderTarget(r),h&&f.render(_,a),f.render(e,a)}f.toneMapping=p,f.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gr||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const a=this._cubeSize;ms(t,0,0,3*a,2*a),i.setRenderTarget(t),i.render(o,Xs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[i];c.material=o;const a=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=l*1.25,p=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-_s?i-g+_s:0),h=4*(this._cubeSize-_);a.envMap.value=e.texture,a.roughness.value=p,a.mipInt.value=g-t,ms(s,m,h,3*_,2*_),r.setRenderTarget(s),r.render(c,Xs),a.envMap.value=s.texture,a.roughness.value=0,a.mipInt.value=g-i,ms(e,m,h,3*_,2*_),r.setRenderTarget(e),r.render(c,Xs)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){const o=this._renderer,c=this._blurMaterial,a=this._lodMeshes[r];a.material=c;const l=c.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-_s?r-this._lodMax+_s:0),d=4*(this._cubeSize-u);ms(t,f,d,3*u,2*u),o.setRenderTarget(t),o.render(a,Xs)}}function Yx(n){const e=[],t=[];let i=n;const r=n-_s+1+$x;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const c=1/(o-2),a=-c,l=1+c,u=[a,a,l,a,l,l,a,a,l,l,a,l],f=6,d=6,p=3,g=new Float32Array(p*d*f),_=new Float32Array(p*d*f);for(let h=0;h<f;h++){const v=h%3*2/3-1,w=h>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];g.set(y,p*d*h);for(let b=0;b<d;b++){const M=u[b*2]*2-1,A=u[b*2+1]*2-1;h===0?Ur.set(1,A,M):h===1?Ur.set(-M,1,-A):h===2?Ur.set(-M,A,1):h===3?Ur.set(-1,A,-M):h===4?Ur.set(-M,-1,A):Ur.set(M,A,-1),Ur.toArray(_,(h*d+b)*p)}}const m=new zt;m.setAttribute("position",new Zt(g,p)),m.setAttribute("outputDirection",new Zt(_,p)),t.push(new Lt(m,null)),i>_s&&i--}return{lodMeshes:t,sizeLods:e}}function bf(n,e,t){const i=new Kn(n,e,t);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Kx(n,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function jx(n,e,t){return new It({name:"SphericalGaussianBlur",defines:{SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function wf(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Tf(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class sd extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _n(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:Zi});s.uniforms.tEquirect.value=t;const o=new Lt(r,s),c=t.minFilter;return t.minFilter===gr&&(t.minFilter=jt),new pp(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function Zx(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Mc||p===Sc)if(e.has(d)){const g=e.get(d).texture;return c(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new sd(g.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",l),c(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===Mc||p===Sc,_=p===Gr||p===Es;if(g||_){let m=t.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new ou(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||_&&v&&a(v)?(i===null&&(i=new ou(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function c(d,p){return p===Mc?d.mapping=Gr:p===Sc&&(d.mapping=Es),d}function a(d){let p=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function l(d){const p=d.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Jx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ys("WebGLRenderer: "+i+" extension not supported."),r}}}function Qx(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function a(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const v=p.array;_=p.version;for(let w=0,y=v.length;w<y;w+=3){const b=v[w+0],M=v[w+1],A=v[w+2];d.push(b,M,M,A,A,b)}}else{const v=g.array;_=g.version;for(let w=0,y=v.length/3-1;w<y;w+=3){const b=w+0,M=w+1,A=w+2;d.push(b,M,M,A,A,b)}}const m=new(g.count>=65535?sp:rp)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:c,update:a,getWireframeAttribute:u}}function ey(n,e,t){let i;function r(f){i=f}let s,o;function c(f){s=f.type,o=f.bytesPerElement}function a(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function l(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,f*o,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let _=0;for(let m=0;m<p;m++)_+=d[m];t.update(_,i,1)}this.setMode=r,this.setIndex=c,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function ty(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,c){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:At("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ny(n,e,t){const i=new WeakMap,r=new Ht;function s(o,c,a){const l=o.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(c);if(d===void 0||d.count!==f){let C=function(){x.dispose(),i.delete(c),c.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const g=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,h=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let b=c.attributes.position.count*y,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*M*4*f),x=new tp(A,b,M,f);x.type=Si,x.needsUpdate=!0;const E=y*4;for(let R=0;R<f;R++){const L=h[R],N=v[R],U=w[R],B=b*M*4*R;for(let Z=0;Z<L.count;Z++){const K=Z*E;g===!0&&(r.fromBufferAttribute(L,Z),A[B+K+0]=r.x,A[B+K+1]=r.y,A[B+K+2]=r.z,A[B+K+3]=0),_===!0&&(r.fromBufferAttribute(N,Z),A[B+K+4]=r.x,A[B+K+5]=r.y,A[B+K+6]=r.z,A[B+K+7]=0),m===!0&&(r.fromBufferAttribute(U,Z),A[B+K+8]=r.x,A[B+K+9]=r.y,A[B+K+10]=r.z,A[B+K+11]=U.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new qe(b,M)},i.set(c,d),c.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=c.morphTargetsRelative?1:1-g;a.getUniforms().setValue(n,"morphTargetBaseInfluence",_),a.getUniforms().setValue(n,"morphTargetInfluences",l)}a.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),a.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function iy(n,e,t,i,r){let s=new WeakMap;function o(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function c(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:c}}const ry={[zh]:"LINEAR_TONE_MAPPING",[Bh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};function sy(n,e,t,i,r,s){const o=new Kn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,a=null;const l=new zt;l.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new mt([0,2,0,0,2,0],2));const u=new Yg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Lt(l,u),d=new fp(-1,1,1,-1,0,1);let p=null,g=null,_=!1,m,h=null,v=[],w=!1;this.setSize=function(y,b){o.setSize(y,b),c!==null&&c.setSize(y,b),a!==null&&a.setSize(y,b);for(let M=0;M<v.length;M++){const A=v[M];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){v=y,w=v.length>0&&v[0].isRenderPass===!0;const b=o.width,M=o.height;v.length>0&&c===null&&(c=new Kn(b,M,{type:hi,depthBuffer:!1,stencilBuffer:!1}),a=new Kn(b,M,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){const x=v[A];x.setSize&&x.setSize(b,M)}},this.begin=function(y,b){if(_||y.toneMapping===Fi&&v.length===0)return!1;if(h=b,b!==null){const M=b.width,A=b.height;(o.width!==M||o.height!==A)&&this.setSize(M,A)}return w===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Fi,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=m,_=!0;let M=o,A=c;for(let x=0;x<v.length;x++){const E=v[x];E.enabled!==!1&&(E.render(y,A,M,b),E.needsSwap!==!1&&(M=A,A=A===c?a:c))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,u.defines={},Mt.getTransfer(p)===Ft&&(u.defines.SRGB_TRANSFER="");const x=ry[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(h),y.render(f,d),h=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),a!==null&&a.dispose(),l.dispose(),u.dispose()}}const vp=new zn,au=new bo(1,1),_p=new tp,xp=new bg,yp=new cp,Ef=[],Af=[],Cf=new Float32Array(16),Rf=new Float32Array(9),Pf=new Float32Array(4);function Is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ef[r];if(s===void 0&&(s=new Float32Array(r),Ef[r]=s),e!==0){i.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,n[o].toArray(s,c)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lc(n,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Pf.set(i),n.uniformMatrix2fv(this.addr,!1,Pf),hn(t,i)}}function dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Rf.set(i),n.uniformMatrix3fv(this.addr,!1,Rf),hn(t,i)}}function fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Cf.set(i),n.uniformMatrix4fv(this.addr,!1,Cf),hn(t,i)}}function hy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function My(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(au.compareFunction=t.isReversedDepthBuffer()?qu:Xu,s=au):s=vp,t.setTexture2D(e||s,r)}function Sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xp,r)}function by(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yp,r)}function wy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_p,r)}function Ty(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return cy;case 35666:return ly;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return hy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return _y;case 36295:return xy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return wy}}function Ey(n,e){n.uniform1fv(this.addr,e)}function Ay(n,e){const t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function Cy(n,e){const t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function Ry(n,e){const t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function Py(n,e){const t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ly(n,e){const t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){const t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Iy(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Ny(n,e){n.uniform3iv(this.addr,e)}function ky(n,e){n.uniform4iv(this.addr,e)}function Fy(n,e){n.uniform1uiv(this.addr,e)}function Oy(n,e){n.uniform2uiv(this.addr,e)}function zy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function Gy(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=au:o=vp;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||o,s[c])}function Vy(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xp,s[o])}function Hy(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yp,s[o])}function $y(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_p,s[o])}function Wy(n){switch(n){case 5126:return Ey;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return Iy;case 35667:case 35671:return Uy;case 35668:case 35672:return Ny;case 35669:case 35673:return ky;case 5125:return Fy;case 36294:return Oy;case 36295:return zy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return $y}}class Xy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ty(t.type)}}class qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wy(t.type)}}class Yy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const c=r[s];c.setValue(e,t[c.id],i)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function Lf(n,e){n.seq.push(e),n.map[e.id]=e}function Ky(n,e,t){const i=n.name,r=i.length;for(Qc.lastIndex=0;;){const s=Qc.exec(i),o=Qc.lastIndex;let c=s[1];const a=s[2]==="]",l=s[3];if(a&&(c=c|0),l===void 0||l==="["&&o+2===r){Lf(t,l===void 0?new Xy(c,n,e):new qy(c,n,e));break}else{let f=t.map[c];f===void 0&&(f=new Yy(c),Lf(t,f)),t=f}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const c=e.getActiveUniform(t,o),a=e.getUniformLocation(t,c.name);Ky(c,a,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const c=t[s],a=i[c.id];a.needsUpdate!==!1&&c.setValue(e,a.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Df(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jy=37297;let Zy=0;function Jy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const c=o+1;i.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return i.join(`
`)}const If=new at;function Qy(n){Mt._getMatrix(If,Mt.workingColorSpace,n);const e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Ba:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Jy(n.getShaderSource(e),c)}else return s}function e1(n,e){const t=Qy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const t1={[zh]:"Linear",[Bh]:"Reinhard",[Gh]:"Cineon",[Vh]:"ACESFilmic",[$h]:"AgX",[Wh]:"Neutral",[Hh]:"Custom"};function n1(n,e){const t=t1[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oa=new D;function i1(){Mt.getLuminanceCoefficients(oa);const n=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function s1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:c}}return t}function Qs(n){return n!==""}function Nf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(n){return n.replace(a1,l1)}const c1=new Map;function l1(n,e){let t=ft[e];if(t===void 0){const i=c1.get(e);if(i!==void 0)t=ft[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cu(t)}const u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(n){return n.replace(u1,d1)}function d1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Of(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const f1={[ha]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function h1(n){return f1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p1={[Gr]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[ic]:"ENVMAP_TYPE_CUBE_UV"};function m1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":p1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const g1={[Es]:"ENVMAP_MODE_REFRACTION"};function v1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":g1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _1={[Oh]:"ENVMAP_BLENDING_MULTIPLY",[Bm]:"ENVMAP_BLENDING_MIX",[Gm]:"ENVMAP_BLENDING_ADD"};function x1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_1[n.combine]||"ENVMAP_BLENDING_NONE"}function y1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function M1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const a=h1(t),l=m1(t),u=v1(t),f=x1(t),d=y1(t),p=r1(t),g=s1(s),_=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),h.length>0&&(h+=`
`)):(m=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),h=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Fi?n1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,e1("linearToOutputTexel",t.outputColorSpace),i1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=cu(o),o=Nf(o,t),o=kf(o,t),c=cu(c),c=Nf(c,t),c=kf(c,t),o=Ff(o),c=Ff(c),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=v+m+o,y=v+h+c,b=Df(r,r.VERTEX_SHADER,w),M=Df(r,r.FRAGMENT_SHADER,y);r.attachShader(_,b),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",N=r.getShaderInfoLog(b)||"",U=r.getShaderInfoLog(M)||"",B=L.trim(),Z=N.trim(),K=U.trim();let se=!0,ee=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,M);else{const ae=Uf(r,b,"vertex"),fe=Uf(r,M,"fragment");At("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ae+`
`+fe)}else B!==""?et("WebGLProgram: Program Info Log:",B):(Z===""||K==="")&&(ee=!1);ee&&(R.diagnostics={runnable:se,programLog:B,vertexShader:{log:Z,prefix:m},fragmentShader:{log:K,prefix:h}})}r.deleteShader(b),r.deleteShader(M),x=new ya(r,_),E=o1(r,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,jy)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=M,this}let S1=0;class b1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new w1(e),t.set(e,i)),i}}class w1{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}}function T1(n){return n===Vr||n===Fa||n===Oa}function E1(n,e,t,i,r,s){const o=new np,c=new b1,a=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return a.add(x),x===0?"uv":`uv${x}`}function _(x,E,C,R,L,N){const U=R.fog,B=L.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||Z,K),ee=se&&se.mapping===ic?se.image.height:null,ae=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&et("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Be=fe!==void 0?fe.length:0;let Fe=0;B.morphAttributes.position!==void 0&&(Fe=1),B.morphAttributes.normal!==void 0&&(Fe=2),B.morphAttributes.color!==void 0&&(Fe=3);let Ut,We,ve,te;if(ae){const ce=Di[ae];Ut=ce.vertexShader,We=ce.fragmentShader}else{Ut=x.vertexShader,We=x.fragmentShader;const ce=c.getVertexShaderStage(x),j=c.getFragmentShaderStage(x);c.update(x,ce,j),ve=ce.id,te=j.id}const ue=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),je=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,it=!!x.map,Nt=!!x.matcap,ct=!!se,dt=!!x.aoMap,Bt=!!x.lightMap,Qe=!!x.bumpMap&&x.wireframe===!1,Pt=!!x.normalMap,cn=!!x.displacementMap,An=!!x.emissiveMap,$t=!!x.metalnessMap,qt=!!x.roughnessMap,H=x.anisotropy>0,Jt=x.clearcoat>0,wt=x.dispersion>0,P=x.retroreflectivity>0,S=x.iridescence>0,W=x.sheen>0,J=x.transmission>0,ie=H&&!!x.anisotropyMap,me=Jt&&!!x.clearcoatMap,_e=Jt&&!!x.clearcoatNormalMap,re=Jt&&!!x.clearcoatRoughnessMap,de=S&&!!x.iridescenceMap,Me=S&&!!x.iridescenceThicknessMap,Ve=W&&!!x.sheenColorMap,Ee=W&&!!x.sheenRoughnessMap,Se=!!x.specularMap,He=!!x.specularColorMap,Xe=!!x.specularIntensityMap,rt=J&&!!x.transmissionMap,V=J&&!!x.thicknessMap,xe=!!x.gradientMap,oe=!!x.alphaMap,ye=x.alphaTest>0,Le=!!x.alphaHash,k=!!x.extensions;let Q=Fi;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Q=n.toneMapping);const $={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:Ut,fragmentShader:We,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:je,instancingColor:je&&L.instanceColor!==null,instancingMorph:je&&L.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:it,matcap:Nt,envMap:ct,envMapMode:ct&&se.mapping,envMapCubeUVHeight:ee,aoMap:dt,lightMap:Bt,bumpMap:Qe,normalMap:Pt,displacementMap:cn,emissiveMap:An,normalMapObjectSpace:Pt&&x.normalMapType===$m,normalMapTangentSpace:Pt&&x.normalMapType===ru,packedNormalMap:Pt&&x.normalMapType===ru&&T1(x.normalMap.format),metalnessMap:$t,roughnessMap:qt,anisotropy:H,anisotropyMap:ie,clearcoat:Jt,clearcoatMap:me,clearcoatNormalMap:_e,clearcoatRoughnessMap:re,dispersion:wt,retroreflection:P,iridescence:S,iridescenceMap:de,iridescenceThicknessMap:Me,sheen:W,sheenColorMap:Ve,sheenRoughnessMap:Ee,specularMap:Se,specularColorMap:He,specularIntensityMap:Xe,transmission:J,transmissionMap:rt,thicknessMap:V,gradientMap:xe,opaque:x.transparent===!1&&x.blending===io&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:ye,alphaHash:Le,combine:x.combine,mapUv:it&&g(x.map.channel),aoMapUv:dt&&g(x.aoMap.channel),lightMapUv:Bt&&g(x.lightMap.channel),bumpMapUv:Qe&&g(x.bumpMap.channel),normalMapUv:Pt&&g(x.normalMap.channel),displacementMapUv:cn&&g(x.displacementMap.channel),emissiveMapUv:An&&g(x.emissiveMap.channel),metalnessMapUv:$t&&g(x.metalnessMap.channel),roughnessMapUv:qt&&g(x.roughnessMap.channel),anisotropyMapUv:ie&&g(x.anisotropyMap.channel),clearcoatMapUv:me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(x.sheenRoughnessMap.channel),specularMapUv:Se&&g(x.specularMap.channel),specularColorMapUv:He&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:rt&&g(x.transmissionMap.channel),thicknessMapUv:V&&g(x.thicknessMap.channel),alphaMapUv:oe&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pt||H),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(it||oe),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Fe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:it&&x.map.isVideoTexture===!0&&Mt.getTransfer(x.map.colorSpace)===Ft,decodeVideoTextureEmissive:An&&x.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(x.emissiveMap.colorSpace)===Ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jn,flipSided:x.side===Yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:k&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $.vertexUv1s=a.has(1),$.vertexUv2s=a.has(2),$.vertexUv3s=a.has(3),a.clear(),$}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(h(E,x),v(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function h(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){const E=p[x.type];let C;if(E){const R=Di[E];C=Wg.clone(R.uniforms)}else C=x.uniforms;return C}function y(x,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new M1(n,E,x,r),l.push(C),u.set(E,C)),C}function b(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){c.remove(x)}function A(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:M,programs:l,dispose:A}}function A1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let c=n.get(o);return c===void 0&&(c={},n.set(o,c)),c}function i(o){n.delete(o)}function r(o,c,a){n.get(o)[c]=a}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function C1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function c(d,p,g,_,m,h){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:h},n[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=h),e++,v}function a(d,p,g,_,m,h,v){v.reversedDepth===!0&&(m=-m);const w=c(d,p,g,_,m,h);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):t.push(w)}function l(d,p,g,_,m,h){const v=c(d,p,g,_,m,h);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function u(d,p){t.length>1&&t.sort(d||C1),i.length>1&&i.sort(p||zf),r.length>1&&r.sort(p||zf)}function f(){for(let d=e,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function R1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bf,n.set(i,[o])):r>=s.length?(o=new Bf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function P1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function L1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let D1=0;function I1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function U1(n){const e=new P1,t=L1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new Dt,o=new Dt;function c(l){let u=0,f=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,w=0,y=0,b=0,M=0,A=0,x=0,E=0,C=0;l.sort(I1);for(let L=0,N=l.length;L<N;L++){const U=l[L],B=U.color,Z=U.intensity,K=U.distance;let se=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Vr?se=U.shadow.map.texture:se=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=B.r*Z,f+=B.g*Z,d+=B.b*Z;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(U.sh.coefficients[ee],Z);C++}else if(U.isSunLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ae=U.shadow,fe=t.get(U);fe.shadowIntensity=ae.intensity,fe.shadowBias=ae.bias,fe.shadowNormalBias=ae.normalBias,fe.shadowRadius=ae.radius,fe.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),i.sunShadow[g]=fe,i.sunShadowMap[g]=se;const Be=ae.getViewportCount();for(let Fe=0;Fe<Be;Fe++)i.sunShadowMatrix[_+Fe]=ae.getMatrix(Fe),i.sunShadowCascade[_+Fe]=ae._cascadeData[Fe];_+=Be,g++}i.sun[p]=ee,p++}else if(U.isDirectionalLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ae=U.shadow,fe=t.get(U);fe.shadowIntensity=ae.intensity,fe.shadowBias=ae.bias,fe.shadowNormalBias=ae.normalBias,fe.shadowRadius=ae.radius,fe.shadowMapSize=ae.mapSize,i.directionalShadow[m]=fe,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=U.shadow.matrix,b++}i.directional[m]=ee,m++}else if(U.isSpotLight){const ee=e.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(B).multiplyScalar(Z),ee.distance=K,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,i.spot[v]=ee;const ae=U.shadow;if(U.map&&(i.spotLightMap[x]=U.map,x++,ae.updateMatrices(U),U.castShadow&&E++),i.spotLightMatrix[v]=ae.matrix,U.castShadow){const fe=t.get(U);fe.shadowIntensity=ae.intensity,fe.shadowBias=ae.bias,fe.shadowNormalBias=ae.normalBias,fe.shadowRadius=ae.radius,fe.shadowMapSize=ae.mapSize,i.spotShadow[v]=fe,i.spotShadowMap[v]=se,A++}v++}else if(U.isRectAreaLight){const ee=e.get(U);ee.color.copy(B).multiplyScalar(Z),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),i.rectArea[w]=ee,w++}else if(U.isPointLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const ae=U.shadow,fe=t.get(U);fe.shadowIntensity=ae.intensity,fe.shadowBias=ae.bias,fe.shadowNormalBias=ae.normalBias,fe.shadowRadius=ae.radius,fe.shadowMapSize=ae.mapSize,fe.shadowCameraNear=ae.camera.near,fe.shadowCameraFar=ae.camera.far,i.pointShadow[h]=fe,i.pointShadowMap[h]=se,i.pointShadowMatrix[h]=U.shadow.matrix,M++}i.point[h]=ee,h++}else if(U.isHemisphereLight){const ee=e.get(U);ee.skyColor.copy(U.color).multiplyScalar(Z),ee.groundColor.copy(U.groundColor).multiplyScalar(Z),i.hemi[y]=ee,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.sunLength!==p||R.directionalLength!==m||R.pointLength!==h||R.spotLength!==v||R.rectAreaLength!==w||R.hemiLength!==y||R.numSunShadows!==g||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==A||R.numSpotMaps!==x||R.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=h,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,R.sunLength=p,R.directionalLength=m,R.pointLength=h,R.spotLength=v,R.rectAreaLength=w,R.hemiLength=y,R.numSunShadows=g,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=A,R.numSpotMaps=x,R.numLightProbes=C,i.version=D1++)}function a(l,u){let f=0,d=0,p=0,g=0,_=0,m=0;const h=u.matrixWorldInverse;for(let v=0,w=l.length;v<w;v++){const y=l[v];if(y.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(h),f++}else if(y.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),d++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(h),o.identity(),s.copy(y.matrixWorld),s.premultiply(h),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(h),m++}}}return{setup:c,setupView:a,state:i}}function Gf(n){const e=new U1(n),t=[],i=[],r=[];function s(d){f.camera=d,t.length=0,i.length=0,r.length=0}function o(d){t.push(d)}function c(d){i.push(d)}function a(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:c,pushLightProbeGrid:a}}function N1(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new Gf(n),e.set(r,[c])):s>=o.length?(c=new Gf(n),o.push(c)):c=o[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const k1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
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
}`,O1=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],z1=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Vf=new Dt,qs=new D,el=new D;function B1(n,e,t){let i=new Ju;const r=new qe,s=new qe,o=new Ht,c=new Kg,a=new jg,l={},u=t.maxTextureSize,f={[Br]:Yn,[Yn]:Br,[Jn]:Jn},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:k1,fragmentShader:F1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let h=this.type;this.render=function(M,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Mm&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ha);const E=n.getRenderTarget(),C=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=h!==this.type;N&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(B=>B.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,B=M.length;U<B;U++){const Z=M[U],K=Z.shadow;if(K===void 0){et("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const se=K.getFrameExtents();r.multiply(se),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,K.mapSize.y=s.y));const ee=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ee,K.map===null||N===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Js){if(Z.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Kn(r.x,r.y,{format:Vr,type:hi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new bo(r.x,r.y,Si),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=nr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn}else Z.isPointLight?(K.map=new sd(r.x),K.map.depthTexture=new Hg(r.x,Bi)):(K.map=new Kn(r.x,r.y),K.map.depthTexture=new bo(r.x,r.y,Bi)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=nr,this.type===ha?(K.map.depthTexture.compareFunction=ee?qu:Xu,K.map.depthTexture.minFilter=jt,K.map.depthTexture.magFilter=jt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const ae=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Z.isPointLight!==!0&&K.updateMatrices(Z,x);for(let fe=0;fe<ae;fe++){const Be=K.getCamera(fe);if(Z.isPointLight){const Fe=K.camera,Ut=K.matrix,We=Z.distance||Fe.far;We!==Fe.far&&(Fe.far=We,Fe.updateProjectionMatrix()),qs.setFromMatrixPosition(Z.matrixWorld),Fe.position.copy(qs),el.copy(Fe.position),el.add(O1[fe]),Fe.up.copy(z1[fe]),Fe.lookAt(el),Fe.updateMatrixWorld(),Ut.makeTranslation(-qs.x,-qs.y,-qs.z),Vf.multiplyMatrices(Fe.projectionMatrix,Fe.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Vf,Fe.coordinateSystem,Fe.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,fe),n.clear();else{fe===0&&(n.setRenderTarget(K.map),n.clear());const Fe=K.getViewport(fe);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),L.viewport(o)}i=K.getFrustum(fe),y(A,x,Be,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Js&&v(K,x),K.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,C,R)};function v(M,A){const x=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Kn(r.x,r.y,{format:Vr,type:hi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(A,null,x,d,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(A,null,x,p,_,null)}function w(M,A,x,E){let C=null;const R=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)C=R;else if(C=x.isPointLight===!0?a:c,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=C.uuid,N=A.uuid;let U=l[L];U===void 0&&(U={},l[L]=U);let B=U[N];B===void 0&&(B=C.clone(),U[N]=B,A.addEventListener("dispose",b)),C=B}if(C.visible=A.visible,C.wireframe=A.wireframe,E===Js?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=n.properties.get(C);L.light=x}return C}function y(M,A,x,E,C){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Js)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const N=e.update(M),U=M.material;if(Array.isArray(U)){const B=N.groups;for(let Z=0,K=B.length;Z<K;Z++){const se=B[Z],ee=U[se.materialIndex];if(ee&&ee.visible){const ae=w(M,ee,E,C);M.onBeforeShadow(n,M,A,x,N,ae,se),n.renderBufferDirect(x,null,N,ae,M,se),M.onAfterShadow(n,M,A,x,N,ae,se)}}}else if(U.visible){const B=w(M,U,E,C);M.onBeforeShadow(n,M,A,x,N,B,null),n.renderBufferDirect(x,null,N,B,M,null),M.onAfterShadow(n,M,A,x,N,B,null)}}const L=M.children;for(let N=0,U=L.length;N<U;N++)y(L[N],A,x,E,C)}function b(M){M.target.removeEventListener("dispose",b);for(const x in l){const E=l[x],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function G1(n,e){function t(){let V=!1;const xe=new Ht;let oe=null;const ye=new Ht(0,0,0,0);return{setMask:function(Le){oe!==Le&&!V&&(n.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){V=Le},setClear:function(Le,k,Q,$,ce){ce===!0&&(Le*=$,k*=$,Q*=$),xe.set(Le,k,Q,$),ye.equals(xe)===!1&&(n.clearColor(Le,k,Q,$),ye.copy(xe))},reset:function(){V=!1,oe=null,ye.set(-1,0,0,0)}}}function i(){let V=!1,xe=!1,oe=null,ye=null,Le=null;return{setReversed:function(k){if(xe!==k){const Q=e.get("EXT_clip_control");k?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT),xe=k;const $=Le;Le=null,this.setClear($)}},getReversed:function(){return xe},setTest:function(k){k?ue(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(k){oe!==k&&!V&&(n.depthMask(k),oe=k)},setFunc:function(k){if(xe&&(k=tg[k]),ye!==k){switch(k){case yl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case vo:n.depthFunc(n.LEQUAL);break;case bl:n.depthFunc(n.EQUAL);break;case wl:n.depthFunc(n.GEQUAL);break;case Tl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=k}},setLocked:function(k){V=k},setClear:function(k){Le!==k&&(Le=k,xe&&(k=1-k),n.clearDepth(k))},reset:function(){V=!1,oe=null,ye=null,Le=null,xe=!1}}}function r(){let V=!1,xe=null,oe=null,ye=null,Le=null,k=null,Q=null,$=null,ce=null;return{setTest:function(j){V||(j?ue(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(j){xe!==j&&!V&&(n.stencilMask(j),xe=j)},setFunc:function(j,le,be){(oe!==j||ye!==le||Le!==be)&&(n.stencilFunc(j,le,be),oe=j,ye=le,Le=be)},setOp:function(j,le,be){(k!==j||Q!==le||$!==be)&&(n.stencilOp(j,le,be),k=j,Q=le,$=be)},setLocked:function(j){V=j},setClear:function(j){ce!==j&&(n.clearStencil(j),ce=j)},reset:function(){V=!1,xe=null,oe=null,ye=null,Le=null,k=null,Q=null,$=null,ce=null}}}const s=new t,o=new i,c=new r,a=new WeakMap,l=new WeakMap;let u={},f={},d={},p=new WeakMap,g=[],_=null,m=!1,h=null,v=null,w=null,y=null,b=null,M=null,A=null,x=new tt(0,0,0),E=0,C=!1,R=null,L=null,N=null,U=null,B=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=se>=1):ee.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=se>=2);let ae=null,fe={};const Be=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ut=new Ht().fromArray(Be),We=new Ht().fromArray(Fe);function ve(V,xe,oe,ye){const Le=new Uint8Array(4),k=n.createTexture();n.bindTexture(V,k),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Q=0;Q<oe;Q++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(xe+Q,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return k}const te={};te[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ue(n.DEPTH_TEST),o.setFunc(vo),Qe(!1),Pt(Fd),ue(n.CULL_FACE),dt(Zi);function ue(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function Pe(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function je(V,xe){return d[V]!==xe?(n.bindFramebuffer(V,xe),d[V]=xe,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xe),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function De(V,xe){let oe=g,ye=!1;if(V){oe=p.get(xe),oe===void 0&&(oe=[],p.set(xe,oe));const Le=V.textures;if(oe.length!==Le.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let k=0,Q=Le.length;k<Q;k++)oe[k]=n.COLOR_ATTACHMENT0+k;oe.length=Le.length,ye=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ye=!0);ye&&n.drawBuffers(oe)}function it(V){return _!==V?(n.useProgram(V),_=V,!0):!1}const Nt={[gs]:n.FUNC_ADD,[bm]:n.FUNC_SUBTRACT,[wm]:n.FUNC_REVERSE_SUBTRACT};Nt[Tm]=n.MIN,Nt[Em]=n.MAX;const ct={[Am]:n.ZERO,[Cm]:n.ONE,[Rm]:n.SRC_COLOR,[kh]:n.SRC_ALPHA,[Nm]:n.SRC_ALPHA_SATURATE,[Im]:n.DST_COLOR,[Lm]:n.DST_ALPHA,[Pm]:n.ONE_MINUS_SRC_COLOR,[Fh]:n.ONE_MINUS_SRC_ALPHA,[Um]:n.ONE_MINUS_DST_COLOR,[Dm]:n.ONE_MINUS_DST_ALPHA,[km]:n.CONSTANT_COLOR,[Fm]:n.ONE_MINUS_CONSTANT_COLOR,[Om]:n.CONSTANT_ALPHA,[zm]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(V,xe,oe,ye,Le,k,Q,$,ce,j){if(V===Zi){m===!0&&(Pe(n.BLEND),m=!1);return}if(m===!1&&(ue(n.BLEND),m=!0),V!==Sm){if(V!==h||j!==C){if((v!==gs||b!==gs)&&(n.blendEquation(n.FUNC_ADD),v=gs,b=gs),j)switch(V){case io:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case On:n.blendFunc(n.ONE,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:At("WebGLState: Invalid blending: ",V);break}else switch(V){case io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case On:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Od:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zd:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",V);break}w=null,y=null,M=null,A=null,x.set(0,0,0),E=0,h=V,C=j}return}Le=Le||xe,k=k||oe,Q=Q||ye,(xe!==v||Le!==b)&&(n.blendEquationSeparate(Nt[xe],Nt[Le]),v=xe,b=Le),(oe!==w||ye!==y||k!==M||Q!==A)&&(n.blendFuncSeparate(ct[oe],ct[ye],ct[k],ct[Q]),w=oe,y=ye,M=k,A=Q),($.equals(x)===!1||ce!==E)&&(n.blendColor($.r,$.g,$.b,ce),x.copy($),E=ce),h=V,C=!1}function Bt(V,xe){V.side===Jn?Pe(n.CULL_FACE):ue(n.CULL_FACE);let oe=V.side===Yn;xe&&(oe=!oe),Qe(oe),V.blending===io&&V.transparent===!1?dt(Zi):dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const ye=V.stencilWrite;c.setTest(ye),ye&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),An(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(V){R!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),R=V)}function Pt(V){V!==xm?(ue(n.CULL_FACE),V!==L&&(V===Fd?n.cullFace(n.BACK):V===ym?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),L=V}function cn(V){V!==N&&(K&&n.lineWidth(V),N=V)}function An(V,xe,oe){V?(ue(n.POLYGON_OFFSET_FILL),(U!==xe||B!==oe)&&(U=xe,B=oe,o.getReversed()&&(xe=-xe),n.polygonOffset(xe,oe))):Pe(n.POLYGON_OFFSET_FILL)}function $t(V){V?ue(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function qt(V){V===void 0&&(V=n.TEXTURE0+Z-1),ae!==V&&(n.activeTexture(V),ae=V)}function H(V,xe,oe){oe===void 0&&(ae===null?oe=n.TEXTURE0+Z-1:oe=ae);let ye=fe[oe];ye===void 0&&(ye={type:void 0,texture:void 0},fe[oe]=ye),(ye.type!==V||ye.texture!==xe)&&(ae!==oe&&(n.activeTexture(oe),ae=oe),n.bindTexture(V,xe||te[V]),ye.type=V,ye.texture=xe)}function Jt(){const V=fe[ae];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function wt(){try{n.compressedTexImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function S(){try{n.texSubImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function W(){try{n.texSubImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function me(){try{n.texStorage2D(...arguments)}catch(V){At("WebGLState:",V)}}function _e(){try{n.texStorage3D(...arguments)}catch(V){At("WebGLState:",V)}}function re(){try{n.texImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function de(){try{n.texImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function Me(V){return f[V]!==void 0?f[V]:n.getParameter(V)}function Ve(V,xe){f[V]!==xe&&(n.pixelStorei(V,xe),f[V]=xe)}function Ee(V){Ut.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ut.copy(V))}function Se(V){We.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),We.copy(V))}function He(V,xe){let oe=l.get(xe);oe===void 0&&(oe=new WeakMap,l.set(xe,oe));let ye=oe.get(V);ye===void 0&&(ye=n.getUniformBlockIndex(xe,V.name),oe.set(V,ye))}function Xe(V,xe){const ye=l.get(xe).get(V);a.get(xe)!==ye&&(n.uniformBlockBinding(xe,ye,V.__bindingPointIndex),a.set(xe,ye))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ae=null,fe={},d={},p=new WeakMap,g=[],_=null,m=!1,h=null,v=null,w=null,y=null,b=null,M=null,A=null,x=new tt(0,0,0),E=0,C=!1,R=null,L=null,N=null,U=null,B=null,Ut.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:ue,disable:Pe,bindFramebuffer:je,drawBuffers:De,useProgram:it,setBlending:dt,setMaterial:Bt,setFlipSided:Qe,setCullFace:Pt,setLineWidth:cn,setPolygonOffset:An,setScissorTest:$t,activeTexture:qt,bindTexture:H,unbindTexture:Jt,compressedTexImage2D:wt,compressedTexImage3D:P,texImage2D:re,texImage3D:de,pixelStorei:Ve,getParameter:Me,updateUBOMapping:He,uniformBlockBinding:Xe,texStorage2D:me,texStorage3D:_e,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:J,compressedTexSubImage3D:ie,scissor:Ee,viewport:Se,reset:rt}}function V1(n,e,t,i,r,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return g?new OffscreenCanvas(P,S):Ga("canvas")}function m(P,S,W){let J=1;const ie=wt(P);if((ie.width>W||ie.height>W)&&(J=W/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const me=Math.floor(J*ie.width),_e=Math.floor(J*ie.height);d===void 0&&(d=_(me,_e));const re=S?_(me,_e):d;return re.width=me,re.height=_e,re.getContext("2d").drawImage(P,0,0,me,_e),et("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+me+"x"+_e+")."),re}else return"data"in P&&et("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function h(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,S,W,J,ie,me=!1){if(P!==null){if(n[P]!==void 0)return n[P];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e;J&&(_e=e.get("EXT_texture_norm16"),_e||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=S;if(S===n.RED&&(W===n.FLOAT&&(re=n.R32F),W===n.HALF_FLOAT&&(re=n.R16F),W===n.UNSIGNED_BYTE&&(re=n.R8),W===n.UNSIGNED_SHORT&&_e&&(re=_e.R16_EXT),W===n.SHORT&&_e&&(re=_e.R16_SNORM_EXT)),S===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.R8UI),W===n.UNSIGNED_SHORT&&(re=n.R16UI),W===n.UNSIGNED_INT&&(re=n.R32UI),W===n.BYTE&&(re=n.R8I),W===n.SHORT&&(re=n.R16I),W===n.INT&&(re=n.R32I)),S===n.RG&&(W===n.FLOAT&&(re=n.RG32F),W===n.HALF_FLOAT&&(re=n.RG16F),W===n.UNSIGNED_BYTE&&(re=n.RG8),W===n.UNSIGNED_SHORT&&_e&&(re=_e.RG16_EXT),W===n.SHORT&&_e&&(re=_e.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.RG8UI),W===n.UNSIGNED_SHORT&&(re=n.RG16UI),W===n.UNSIGNED_INT&&(re=n.RG32UI),W===n.BYTE&&(re=n.RG8I),W===n.SHORT&&(re=n.RG16I),W===n.INT&&(re=n.RG32I)),S===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.RGB8UI),W===n.UNSIGNED_SHORT&&(re=n.RGB16UI),W===n.UNSIGNED_INT&&(re=n.RGB32UI),W===n.BYTE&&(re=n.RGB8I),W===n.SHORT&&(re=n.RGB16I),W===n.INT&&(re=n.RGB32I)),S===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),W===n.UNSIGNED_INT&&(re=n.RGBA32UI),W===n.BYTE&&(re=n.RGBA8I),W===n.SHORT&&(re=n.RGBA16I),W===n.INT&&(re=n.RGBA32I)),S===n.RGB&&(W===n.UNSIGNED_SHORT&&_e&&(re=_e.RGB16_EXT),W===n.SHORT&&_e&&(re=_e.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(re=n.R11F_G11F_B10F)),S===n.RGBA){const de=me?Ba:Mt.getTransfer(ie);W===n.FLOAT&&(re=n.RGBA32F),W===n.HALF_FLOAT&&(re=n.RGBA16F),W===n.UNSIGNED_BYTE&&(re=de===Ft?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&_e&&(re=_e.RGBA16_EXT),W===n.SHORT&&_e&&(re=_e.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(P,S){let W;return P?S===null||S===Bi||S===yo?W=n.DEPTH24_STENCIL8:S===Si?W=n.DEPTH32F_STENCIL8:S===xo&&(W=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bi||S===yo?W=n.DEPTH_COMPONENT24:S===Si?W=n.DEPTH_COMPONENT32F:S===xo&&(W=n.DEPTH_COMPONENT16),W}function M(P,S){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==jt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){const S=P.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function x(P){const S=P.target;S.removeEventListener("dispose",x),R(S)}function E(P){const S=i.get(P);if(S.__webglInit===void 0)return;const W=P.source,J=p.get(W);if(J){const ie=J[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(P),Object.keys(J).length===0&&p.delete(W)}i.remove(P)}function C(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const W=P.source,J=p.get(W);delete J[S.__cacheKey],o.memory.textures--}function R(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ie=0;ie<S.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(S.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)n.deleteFramebuffer(S.__webglFramebuffer[J]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=P.textures;for(let J=0,ie=W.length;J<ie;J++){const me=i.get(W[J]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(W[J])}i.remove(P)}let L=0;function N(){L=0}function U(){return L}function B(P){L=P}function Z(){const P=L;return P>=r.maxTextures&&et("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function K(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function se(P,S){const W=i.get(P);if(P.isVideoTexture&&H(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const J=P.image;if(J===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(W,P,S);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+S)}function ee(P,S){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Pe(W,P,S);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+S)}function ae(P,S){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Pe(W,P,S);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+S)}function fe(P,S){const W=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){je(W,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+S)}const Be={[_o]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},Fe={[Tn]:n.NEAREST,[Vm]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[bc]:n.LINEAR_MIPMAP_NEAREST,[gr]:n.LINEAR_MIPMAP_LINEAR},Ut={[Xm]:n.NEVER,[Zm]:n.ALWAYS,[qm]:n.LESS,[Xu]:n.LEQUAL,[Ym]:n.EQUAL,[qu]:n.GEQUAL,[Km]:n.GREATER,[jm]:n.NOTEQUAL};function We(P,S){if(S.type===Si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===jt||S.magFilter===bc||S.magFilter===Lo||S.magFilter===gr||S.minFilter===jt||S.minFilter===bc||S.minFilter===Lo||S.minFilter===gr)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Be[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Be[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Be[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Fe[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Fe[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ut[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==Lo&&S.minFilter!==gr||S.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ve(P,S){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let ie=p.get(J);ie===void 0&&(ie={},p.set(J,ie));const me=K(S);if(me!==P.__cacheKey){ie[me]===void 0&&(ie[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[me].usedTimes++;const _e=ie[P.__cacheKey];_e!==void 0&&(ie[P.__cacheKey].usedTimes--,_e.usedTimes===0&&C(S)),P.__cacheKey=me,P.__webglTexture=ie[me].texture}return W}function te(P,S,W){return Math.floor(Math.floor(P/W)/S)}function ue(P,S,W,J){const me=P.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,W,J,S.data);else{me.sort((Ve,Ee)=>Ve.start-Ee.start);let _e=0;for(let Ve=1;Ve<me.length;Ve++){const Ee=me[_e],Se=me[Ve],He=Ee.start+Ee.count,Xe=te(Se.start,S.width,4),rt=te(Ee.start,S.width,4);Se.start<=He+1&&Xe===rt&&te(Se.start+Se.count-1,S.width,4)===Xe?Ee.count=Math.max(Ee.count,Se.start+Se.count-Ee.start):(++_e,me[_e]=Se)}me.length=_e+1;const re=t.getParameter(n.UNPACK_ROW_LENGTH),de=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ve=0,Ee=me.length;Ve<Ee;Ve++){const Se=me[Ve],He=Math.floor(Se.start/4),Xe=Math.ceil(Se.count/4),rt=He%S.width,V=Math.floor(He/S.width),xe=Xe,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,rt,V,xe,oe,W,J,S.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,re),t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function Pe(P,S,W){let J=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=n.TEXTURE_3D);const ie=ve(P,S),me=S.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+W);const _e=i.get(me);if(me.version!==_e.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const oe=Mt.getPrimaries(Mt.workingColorSpace),ye=S.colorSpace===mr?null:Mt.getPrimaries(S.colorSpace),Le=S.colorSpace===mr||oe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let de=m(S.image,!1,r.maxTextureSize);de=Jt(S,de);const Me=s.convert(S.format,S.colorSpace),Ve=s.convert(S.type);let Ee=y(S.internalFormat,Me,Ve,S.normalized,S.colorSpace,S.isVideoTexture);We(J,S);let Se;const He=S.mipmaps,Xe=S.isVideoTexture!==!0,rt=_e.__version===void 0||ie===!0,V=me.dataReady,xe=M(S,de);if(S.isDepthTexture)Ee=b(S.format===Fr,S.type),rt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Ee,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ee,de.width,de.height,0,Me,Ve,null));else if(S.isDataTexture)if(He.length>0){Xe&&rt&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,He[0].width,He[0].height);for(let oe=0,ye=He.length;oe<ye;oe++)Se=He[oe],Xe?V&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Se.width,Se.height,Me,Ve,Se.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,Se.width,Se.height,0,Me,Ve,Se.data);S.generateMipmaps=!1}else Xe?(rt&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,de.width,de.height),V&&ue(S,de,Me,Ve)):t.texImage2D(n.TEXTURE_2D,0,Ee,de.width,de.height,0,Me,Ve,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,He[0].width,He[0].height,de.depth);for(let oe=0,ye=He.length;oe<ye;oe++)if(Se=He[oe],S.format!==ci)if(Me!==null)if(Xe){if(V)if(S.layerUpdates.size>0){const Le=Mf(Se.width,Se.height,S.format,S.type);for(const k of S.layerUpdates){const Q=Se.data.subarray(k*Le/Se.data.BYTES_PER_ELEMENT,(k+1)*Le/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,k,Se.width,Se.height,1,Me,Q)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Se.width,Se.height,de.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,Se.width,Se.height,de.depth,0,Se.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Se.width,Se.height,de.depth,Me,Ve,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,Se.width,Se.height,de.depth,0,Me,Ve,Se.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Xe&&rt&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,He[0].width,He[0].height);for(let oe=0,ye=He.length;oe<ye;oe++)Se=He[oe],S.format!==ci?Me!==null?Xe?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ee,Se.width,Se.height,0,Se.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?V&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Se.width,Se.height,Me,Ve,Se.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,Se.width,Se.height,0,Me,Ve,Se.data)}else if(S.isDataArrayTexture)if(Xe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,de.width,de.height,de.depth),V)if(S.layerUpdates.size>0){const oe=Mf(de.width,de.height,S.format,S.type);for(const ye of S.layerUpdates){const Le=de.data.subarray(ye*oe/de.data.BYTES_PER_ELEMENT,(ye+1)*oe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,de.width,de.height,1,Me,Ve,Le)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Ve,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,de.width,de.height,de.depth,0,Me,Ve,de.data);else if(S.isData3DTexture)Xe?(rt&&t.texStorage3D(n.TEXTURE_3D,xe,Ee,de.width,de.height,de.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Ve,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,de.width,de.height,de.depth,0,Me,Ve,de.data);else if(S.isFramebufferTexture){if(rt)if(Xe)t.texStorage2D(n.TEXTURE_2D,xe,Ee,de.width,de.height);else{let oe=de.width,ye=de.height;for(let Le=0;Le<xe;Le++)t.texImage2D(n.TEXTURE_2D,Le,Ee,oe,ye,0,Me,Ve,null),oe>>=1,ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),de.parentNode!==oe){oe.appendChild(de),f.add(S),oe.onpaint=ye=>{const Le=ye.changedElements;for(const k of f)Le.includes(k.image)&&(k.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,de);else{const Le=n.RGBA,k=n.RGBA,Q=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,k,Q,de)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(He.length>0){if(Xe&&rt){const oe=wt(He[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ee,oe.width,oe.height)}for(let oe=0,ye=He.length;oe<ye;oe++)Se=He[oe],Xe?V&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me,Ve,Se):t.texImage2D(n.TEXTURE_2D,oe,Ee,Me,Ve,Se);S.generateMipmaps=!1}else if(Xe){if(rt){const oe=wt(de);t.texStorage2D(n.TEXTURE_2D,xe,Ee,oe.width,oe.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ve,de)}else t.texImage2D(n.TEXTURE_2D,0,Ee,Me,Ve,de);h(S)&&v(J),_e.__version=me.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function je(P,S,W){if(S.image.length!==6)return;const J=ve(P,S),ie=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);const me=i.get(ie);if(ie.version!==me.__version||J===!0){t.activeTexture(n.TEXTURE0+W);const _e=Mt.getPrimaries(Mt.workingColorSpace),re=S.colorSpace===mr?null:Mt.getPrimaries(S.colorSpace),de=S.colorSpace===mr||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ve=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let k=0;k<6;k++)!Me&&!Ve?Ee[k]=m(S.image[k],!0,r.maxCubemapSize):Ee[k]=Ve?S.image[k].image:S.image[k],Ee[k]=Jt(S,Ee[k]);const Se=Ee[0],He=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type),rt=y(S.internalFormat,He,Xe,S.normalized,S.colorSpace),V=S.isVideoTexture!==!0,xe=me.__version===void 0||J===!0,oe=ie.dataReady;let ye=M(S,Se);We(n.TEXTURE_CUBE_MAP,S);let Le;if(Me){V&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,rt,Se.width,Se.height);for(let k=0;k<6;k++){Le=Ee[k].mipmaps;for(let Q=0;Q<Le.length;Q++){const $=Le[Q];S.format!==ci?He!==null?V?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,0,0,$.width,$.height,He,$.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,rt,$.width,$.height,0,$.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,0,0,$.width,$.height,He,Xe,$.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,rt,$.width,$.height,0,He,Xe,$.data)}}}else{if(Le=S.mipmaps,V&&xe){Le.length>0&&ye++;const k=wt(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,rt,k.width,k.height)}for(let k=0;k<6;k++)if(Ve){V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ee[k].width,Ee[k].height,He,Xe,Ee[k].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,rt,Ee[k].width,Ee[k].height,0,He,Xe,Ee[k].data);for(let Q=0;Q<Le.length;Q++){const ce=Le[Q].image[k].image;V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,0,0,ce.width,ce.height,He,Xe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,rt,ce.width,ce.height,0,He,Xe,ce.data)}}else{V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,He,Xe,Ee[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,rt,He,Xe,Ee[k]);for(let Q=0;Q<Le.length;Q++){const $=Le[Q];V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,0,0,He,Xe,$.image[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,rt,He,Xe,$.image[k])}}}h(S)&&v(n.TEXTURE_CUBE_MAP),me.__version=ie.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function De(P,S,W,J,ie,me){const _e=s.convert(W.format,W.colorSpace),re=s.convert(W.type),de=y(W.internalFormat,_e,re,W.normalized,W.colorSpace),Me=i.get(S),Ve=i.get(W);if(Ve.__renderTarget=S,!Me.__hasExternalTextures){const Ee=Math.max(1,S.width>>me),Se=Math.max(1,S.height>>me);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,me,de,Ee,Se,S.depth,0,_e,re,null):t.texImage2D(ie,me,de,Ee,Se,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),qt(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,Ve.__webglTexture,0,$t(S)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,Ve.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(P,S,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const J=S.depthTexture,ie=J&&J.isDepthTexture?J.type:null,me=b(S.stencilBuffer,ie),_e=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;qt(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(S),me,S.width,S.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(S),me,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,me,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,P)}else{const J=S.textures;for(let ie=0;ie<J.length;ie++){const me=J[ie],_e=s.convert(me.format,me.colorSpace),re=s.convert(me.type),de=y(me.internalFormat,_e,re,me.normalized,me.colorSpace);qt(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(S),de,S.width,S.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(S),de,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,de,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(P,S,W){const J=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(S.depthTexture);if(ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),We(n.TEXTURE_CUBE_MAP,S.depthTexture);const Me=s.convert(S.depthTexture.format),Ve=s.convert(S.depthTexture.type);let Ee;S.depthTexture.format===nr?Ee=n.DEPTH_COMPONENT24:S.depthTexture.format===Fr&&(Ee=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ee,S.width,S.height,0,Me,Ve,null)}}else se(S.depthTexture,0);const me=ie.__webglTexture,_e=$t(S),re=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,de=S.depthTexture.format===Fr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===nr)qt(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,re,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,de,re,me,0);else if(S.depthTexture.format===Fr)qt(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,re,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,de,re,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(P){const S=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=J}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let J=0;J<6;J++)Nt(S.__webglFramebuffer[J],P,J);else{const J=P.texture.mipmaps;J&&J.length>0?Nt(S.__webglFramebuffer[0],P,0):Nt(S.__webglFramebuffer,P,0)}else if(W){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=n.createRenderbuffer(),it(S.__webglDepthbuffer[J],P,!1);else{const ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,me)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),it(S.__webglDepthbuffer,P,!1);else{const ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(P,S,W){const J=i.get(P);S!==void 0&&De(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ct(P)}function Bt(P){const S=P.texture,W=i.get(P),J=i.get(S);P.addEventListener("dispose",x);const ie=P.textures,me=P.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,o.memory.textures++),me){W.__webglFramebuffer=[];for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[re]=[];for(let de=0;de<S.mipmaps.length;de++)W.__webglFramebuffer[re][de]=n.createFramebuffer()}else W.__webglFramebuffer[re]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)W.__webglFramebuffer[re]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,de=ie.length;re<de;re++){const Me=i.get(ie[re]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&qt(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let re=0;re<ie.length;re++){const de=ie[re];W.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[re]);const Me=s.convert(de.format,de.colorSpace),Ve=s.convert(de.type),Ee=y(de.internalFormat,Me,Ve,de.normalized,de.colorSpace,P.isXRRenderTarget===!0),Se=$t(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,W.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),it(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),We(n.TEXTURE_CUBE_MAP,S);for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)De(W.__webglFramebuffer[re][de],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else De(W.__webglFramebuffer[re],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);h(S)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,de=ie.length;re<de;re++){const Me=ie[re],Ve=i.get(Me);let Ee=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Ve.__webglTexture),We(Ee,Me),De(W.__webglFramebuffer,P,Me,n.COLOR_ATTACHMENT0+re,Ee,0),h(Me)&&v(Ee)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),We(re,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)De(W.__webglFramebuffer[de],P,S,n.COLOR_ATTACHMENT0,re,de);else De(W.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,re,0);h(S)&&v(re),t.unbindTexture()}P.depthBuffer&&ct(P)}function Qe(P){const S=P.textures;for(let W=0,J=S.length;W<J;W++){const ie=S[W];if(h(ie)){const me=w(P),_e=i.get(ie).__webglTexture;t.bindTexture(me,_e),v(me),t.unbindTexture()}}}const Pt=[],cn=[];function An(P){if(P.samples>0){if(qt(P)===!1){const S=P.textures,W=P.width,J=P.height;let ie=n.COLOR_BUFFER_BIT;const me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(P),re=S.length>1;if(re)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const de=P.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Me]);const Ve=i.get(S[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,W,J,0,0,W,J,ie,n.NEAREST),a===!0&&(Pt.length=0,cn.length=0,Pt.push(n.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Pt.push(me),cn.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,cn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Me]);const Ve=i.get(S[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&a){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function $t(P){return Math.min(r.maxSamples,P.samples)}function qt(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Jt(P,S){const W=P.colorSpace,J=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==za&&W!==mr&&(Mt.getTransfer(W)===Ft?(J!==ci||ie!==Xn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),S}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=N,this.getTextureUnits=U,this.setTextureUnits=B,this.setTexture2D=se,this.setTexture2DArray=ee,this.setTexture3D=ae,this.setTextureCube=fe,this.rebindTextures=dt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=De,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function H1(n,e){function t(i,r=mr){let s;const o=Mt.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Bu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===xo)return n.UNSIGNED_SHORT;if(i===zu)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===Zh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===ci)return n.RGBA;if(i===nr)return n.DEPTH_COMPONENT;if(i===Fr)return n.DEPTH_STENCIL;if(i===Vu)return n.RED;if(i===Hu)return n.RED_INTEGER;if(i===Vr)return n.RG;if(i===$u)return n.RG_INTEGER;if(i===Wu)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===va)if(o===Ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Rl||i===Pl||i===Ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Il||i===Ul||i===Nl||i===kl||i===Fa||i===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dl||i===Il)return o===Ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ul)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return s.COMPRESSED_R11_EAC;if(i===kl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fa)return s.COMPRESSED_RG11_EAC;if(i===Fl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===zl||i===Bl||i===Gl||i===Vl||i===Hl||i===$l||i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===jl||i===Zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ol)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===Ql||i===eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jl)return o===Ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tu||i===nu||i===Oa||i===iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
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

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new lp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new It({vertexShader:$1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q1 extends $r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,c="local-floor",a=1,l=null,u=null,f=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new X1,h={},v=t.getContextAttributes();let w=null,y=null;const b=[],M=[],A=new qe;let x=null,E=null;const C=new ni;C.viewport=new Ht;const R=new ni;R.viewport=new Ht;const L=[C,R],N=new ev;let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=b[te];return ue===void 0&&(ue=new Pc,b[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=b[te];return ue===void 0&&(ue=new Pc,b[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=b[te];return ue===void 0&&(ue=new Pc,b[te]=ue),ue.getHandSpace()};function Z(te){const ue=M.indexOf(te.inputSource);if(ue===-1)return;const Pe=b[ue];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,l||o),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function K(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",se);for(let te=0;te<b.length;te++){const ue=M[te];ue!==null&&(M[te]=null,b[te].disconnect(ue))}U=null,B=null,m.reset();for(const te in h)delete h[te];if(e.setRenderTarget(w),p=null,d=null,f=null,r=null,y=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),E!==null){const te=E.camera;te.fov=E.fov,te.zoom=E.zoom,te.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,je=null,De=null;v.depth&&(De=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=v.stencil?Fr:nr,je=v.stencil?yo:Bi);const it={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(it),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Kn(d.textureWidth,d.textureHeight,{format:ci,type:Xn,depthTexture:new bo(d.textureWidth,d.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Kn(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(a),l=null,o=await r.requestReferenceSpace(c),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(te){for(let ue=0;ue<te.removed.length;ue++){const Pe=te.removed[ue],je=M.indexOf(Pe);je>=0&&(M[je]=null,b[je].disconnect(Pe))}for(let ue=0;ue<te.added.length;ue++){const Pe=te.added[ue];let je=M.indexOf(Pe);if(je===-1){for(let it=0;it<b.length;it++)if(it>=M.length){M.push(Pe),je=it;break}else if(M[it]===null){M[it]=Pe,je=it;break}if(je===-1)break}const De=b[je];De&&De.connect(Pe)}}const ee=new D,ae=new D;function fe(te,ue,Pe){ee.setFromMatrixPosition(ue.matrixWorld),ae.setFromMatrixPosition(Pe.matrixWorld);const je=ee.distanceTo(ae),De=ue.projectionMatrix.elements,it=Pe.projectionMatrix.elements,Nt=De[14]/(De[10]-1),ct=De[14]/(De[10]+1),dt=(De[9]+1)/De[5],Bt=(De[9]-1)/De[5],Qe=(De[8]-1)/De[0],Pt=(it[8]+1)/it[0],cn=Nt*Qe,An=Nt*Pt,$t=je/(-Qe+Pt),qt=$t*-Qe;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(qt),te.translateZ($t),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const H=Nt+$t,Jt=ct+$t,wt=cn-qt,P=An+(je-qt),S=dt*ct/Jt*H,W=Bt*ct/Jt*H;te.projectionMatrix.makePerspective(wt,P,S,W,H,Jt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Be(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ue=te.near,Pe=te.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Pe=m.depthFar)),N.near=R.near=C.near=ue,N.far=R.far=C.far=Pe,(U!==N.near||B!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,B=N.far),N.layers.mask=te.layers.mask|6,C.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;const je=te.parent,De=N.cameras;Be(N,je);for(let it=0;it<De.length;it++)Be(De[it],je);De.length===2?fe(N,C,R):N.projectionMatrix.copy(C.projectionMatrix),E===null&&te.isPerspectiveCamera&&(E={camera:te,fov:te.fov,zoom:te.zoom}),Fe(te,N,je)};function Fe(te,ue,Pe){Pe===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=So*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return a},this.setFoveation=function(te){a=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(te){return h[te]};let Ut=null;function We(te,ue){if(u=ue.getViewerPose(l||o),g=ue,u!==null){const Pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let je=!1;Pe.length!==N.cameras.length&&(N.cameras.length=0,je=!0);for(let ct=0;ct<Pe.length;ct++){const dt=Pe[ct];let Bt=null;if(p!==null)Bt=p.getViewport(dt);else{const Pt=f.getViewSubImage(d,dt);Bt=Pt.viewport,ct===0&&(e.setRenderTargetTextures(y,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(y))}let Qe=L[ct];Qe===void 0&&(Qe=new ni,Qe.layers.enable(ct),Qe.viewport=new Ht,L[ct]=Qe),Qe.matrix.fromArray(dt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(dt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),ct===0&&(N.matrix.copy(Qe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),je===!0&&N.cameras.push(Qe)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const ct=f.getDepthInformation(Pe[0]);ct&&ct.isValid&&ct.texture&&m.init(ct,r.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let ct=0;ct<Pe.length;ct++){const dt=Pe[ct].camera;if(dt){let Bt=h[dt];Bt||(Bt=new lp,h[dt]=Bt);const Qe=f.getCameraImage(dt);Bt.sourceTexture=Qe}}}}for(let Pe=0;Pe<b.length;Pe++){const je=M[Pe],De=b[Pe];je!==null&&De!==void 0&&De.update(je,ue,l||o)}Ut&&Ut(te,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const ve=new mp;ve.setAnimationLoop(We),this.setAnimationLoop=function(te){Ut=te},this.dispose=function(){}}}const Y1=new Dt,Mp=new at;Mp.set(-1,0,0,0,1,0,0,0,1);function K1(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,up(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,w,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&c(m,h)):h.isPointsMaterial?a(m,h,v,w):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Yn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Yn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mp),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function c(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,v,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=w*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function j1(n,e,t,i){let r={},s={},o=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(y,b){const M=b.program;i.uniformBlockBinding(y,M)}function l(y,b){let M=r[y.id];M===void 0&&(m(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",v));const A=b.program;i.updateUBOMapping(y,A);const x=e.render.frame;s[y.id]!==x&&(d(y),s[y.id]=x)}function u(y){const b=f();y.__bindingPointIndex=b;const M=n.createBuffer(),A=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let y=0;y<c;y++)if(o.indexOf(y)===-1)return o.push(y),y;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=r[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,E=M.length;x<E;x++){const C=M[x];if(Array.isArray(C))for(let R=0,L=C.length;R<L;R++)p(C[R],x,R,A);else p(C,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,M,A){if(_(y,b,M,A)===!0){const x=y.__offset,E=y.value;if(Array.isArray(E)){let C=0;for(let R=0;R<E.length;R++){const L=E[R],N=h(L);g(L,y.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,y.__data)}}function g(y,b,M){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,M)}function _(y,b,M,A){const x=y.value,E=b+"_"+M;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const C=A[E];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){const b=y.uniforms;let M=0;const A=16;for(let E=0,C=b.length;E<C;E++){const R=Array.isArray(b[E])?b[E]:[b[E]];for(let L=0,N=R.length;L<N;L++){const U=R[L],B=Array.isArray(U.value)?U.value:[U.value];for(let Z=0,K=B.length;Z<K;Z++){const se=B[Z],ee=h(se),ae=M%A,fe=ae%ee.boundary,Be=ae+fe;M+=fe,Be!==0&&A-Be<ee.storage&&(M+=A-Be),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=ee.storage}}}const x=M%A;return x>0&&(M+=A-x),y.__size=M,y.__cache={},this}function h(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):et("WebGLRenderer: Unsupported uniform value type.",y),b}function v(y){const b=y.target;b.removeEventListener("dispose",v);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:a,update:l,dispose:w}}const Z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function J1(){return Pi===null&&(Pi=new Zu(Z1,16,16,Vr,hi),Pi.name="DFG_LUT",Pi.minFilter=jt,Pi.magFilter=jt,Pi.wrapS=Ui,Pi.wrapT=Ui,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Q1{constructor(e={}){const{canvas:t=Qm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=p,m=new Set([Wu,$u,Hu]),h=new Set([Xn,Bi,xo,yo,Bu,Gu]),v=new Uint32Array(4),w=new Int32Array(4),y=new D;let b=null,M=null;const A=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,L=null,N=null,U=null,B=null;this._outputColorSpace=Un;let Z=0,K=0,se=null,ee=-1,ae=null;const fe=new Ht,Be=new Ht;let Fe=null;const Ut=new tt(0);let We=0,ve=t.width,te=t.height,ue=1,Pe=null,je=null;const De=new Ht(0,0,ve,te),it=new Ht(0,0,ve,te);let Nt=!1;const ct=new Ju;let dt=!1,Bt=!1;const Qe=new Dt,Pt=new D,cn=new Ht,An={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function qt(){return se===null?ue:1}let H=i;function Jt(T,F){return t.getContext(T,F)}let wt,P,S,W,J,ie,me,_e,re,de,Me,Ve,Ee,Se,He,Xe,rt,V,xe,oe,ye,Le,k;try{const T={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ou}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",le,!1),H===null){const F="webgl2";if(H=Jt(F,T),H===null)throw Jt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Q()}catch(T){throw t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",le,!1),At("WebGLRenderer: "+T.message),T}function Q(){wt=new Jx(H),wt.init(),ye=new H1(H,wt),P=new Vx(H,wt,e,ye),S=new G1(H,wt),P.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),N=H.createFramebuffer(),U=H.createFramebuffer(),B=H.createFramebuffer(),W=new ty(H),J=new A1,ie=new V1(H,wt,S,J,P,ye,W),me=new Zx(C),_e=new iv(H),Le=new Bx(H,_e),re=new Qx(H,_e,W,Le),de=new iy(H,re,_e,Le,W),V=new ny(H,P,ie),He=new Hx(J),Me=new E1(C,me,wt,P,Le,He),Ve=new K1(C,J),Ee=new R1,Se=new N1(wt),rt=new zx(C,me,S,de,g,a),Xe=new B1(C,de,P),k=new j1(H,W,P,S),xe=new Gx(H,wt,W),oe=new ey(H,wt,W),W.programs=Me.programs,C.capabilities=P,C.extensions=wt,C.properties=J,C.renderLists=Ee,C.shadowMap=Xe,C.state=S,C.info=W}_!==Xn&&(E=new sy(_,t.width,t.height,c,r,s));const $=new q1(C,H);this.xr=$,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=wt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=wt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(T){T!==void 0&&(ue=T,this.setSize(ve,te,!1))},this.getSize=function(T){return T.set(ve,te)},this.setSize=function(T,F,q=!0){if($.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=T,te=F,t.width=Math.floor(T*ue),t.height=Math.floor(F*ue),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ve*ue,te*ue).floor()},this.setDrawingBufferSize=function(T,F,q){ve=T,te=F,ue=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(_===Xn){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(fe)},this.getViewport=function(T){return T.copy(De)},this.setViewport=function(T,F,q,Y){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,F,q,Y),S.viewport(fe.copy(De).multiplyScalar(ue).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,F,q,Y){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,F,q,Y),S.scissor(Be.copy(it).multiplyScalar(ue).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){S.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){je=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let Y=0;if(T){let X=!1;if(se!==null){const ge=se.texture.format;X=m.has(ge)}if(X){const ge=se.texture.type,Re=h.has(ge),pe=rt.getClearColor(),Ie=rt.getClearAlpha(),we=pe.r,Ge=pe.g,st=pe.b;Re?(v[0]=we,v[1]=Ge,v[2]=st,v[3]=Ie,H.clearBufferuiv(H.COLOR,0,v)):(w[0]=we,w[1]=Ge,w[2]=st,w[3]=Ie,H.clearBufferiv(H.COLOR,0,w))}else Y|=H.COLOR_BUFFER_BIT}F&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",le,!1),rt.dispose(),Ee.dispose(),Se.dispose(),J.dispose(),me.dispose(),de.dispose(),Le.dispose(),k.dispose(),Me.dispose(),$.dispose(),$.removeEventListener("sessionstart",vt),$.removeEventListener("sessionend",Cn),Gt.stop()};function ce(T){T.preventDefault(),Va("WebGLRenderer: Context Lost."),R=!0}function j(){Va("WebGLRenderer: Context Restored."),R=!1;const T=W.autoReset,F=Xe.enabled,q=Xe.autoUpdate,Y=Xe.needsUpdate,X=Xe.type;Q(),W.autoReset=T,Xe.enabled=F,Xe.autoUpdate=q,Xe.needsUpdate=Y,Xe.type=X}function le(T){At("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){const F=T.target;F.removeEventListener("dispose",be),nt(F)}function nt(T){Rt(T),J.remove(T)}function Rt(T){const F=J.get(T).programs;F!==void 0&&(F.forEach(function(q){Me.releaseProgram(q)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,Y,X,ge){F===null&&(F=An);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,pe=Po(T,F,q,Y,X);S.setMaterial(Y,Re);let Ie=q.index,we=1;if(Y.wireframe===!0){if(Ie=re.getWireframeAttribute(q),Ie===void 0)return;we=2}const Ge=q.drawRange,st=q.attributes.position;let ke=Ge.start*we,xt=(Ge.start+Ge.count)*we;ge!==null&&(ke=Math.max(ke,ge.start*we),xt=Math.min(xt,(ge.start+ge.count)*we)),Ie!==null?(ke=Math.max(ke,0),xt=Math.min(xt,Ie.count)):st!=null&&(ke=Math.max(ke,0),xt=Math.min(xt,st.count));const rn=xt-ke;if(rn<0||rn===1/0)return;Le.setup(X,Y,pe,q,Ie);let Vt,kt=xe;if(Ie!==null&&(Vt=_e.get(Ie),kt=oe,kt.setIndex(Vt)),X.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*qt()),kt.setMode(H.LINES)):kt.setMode(H.TRIANGLES);else if(X.isLine){let mn=Y.linewidth;mn===void 0&&(mn=1),S.setLineWidth(mn*qt()),X.isLineSegments?kt.setMode(H.LINES):X.isLineLoop?kt.setMode(H.LINE_LOOP):kt.setMode(H.LINE_STRIP)}else X.isPoints?kt.setMode(H.POINTS):X.isSprite&&kt.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))kt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const mn=X._multiDrawStarts,Ne=X._multiDrawCounts,Sn=X._multiDrawCount,yt=Ie?_e.get(Ie).bytesPerElement:1,Rn=J.get(Y).currentProgram.getUniforms();for(let si=0;si<Sn;si++)Rn.setValue(H,"_gl_DrawID",si),kt.render(mn[si]/yt,Ne[si])}else if(X.isInstancedMesh)kt.renderInstances(ke,rn,X.count);else if(q.isInstancedBufferGeometry){const mn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ne=Math.min(q.instanceCount,mn);kt.renderInstances(ke,rn,Ne)}else kt.render(ke,rn)};function Wt(T,F,q,Y){L!==null&&T.isNodeMaterial&&L.setObject(Y,T),dt===!0&&He.setState(T,q,!1),T.transparent===!0&&T.side===Jn&&T.forceSinglePass===!1?(T.side=Yn,T.needsUpdate=!0,mi(T,F,Y),T.side=Br,T.needsUpdate=!0,mi(T,F,Y),T.side=Jn):mi(T,F,Y)}this.compile=function(T,F,q=null){q===null&&(q=T),L!==null&&L.renderStart(T,F,q),M=Se.get(q),M.init(F),x.push(M),q.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),Bt=this.localClippingEnabled,dt=He.init(this.clippingPlanes,Bt),dt===!0&&He.setGlobalState(this.clippingPlanes,F),L!==null&&Xe.render(M.state.shadowsArray,q,F);const Y=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){const pe=ge[Re];Wt(pe,q,F,X),Y.add(pe)}else Wt(ge,q,F,X),Y.add(ge)}),M=x.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(T,F,q=null){const Y=this.compile(T,F,q);return new Promise(X=>{function ge(){if(Y.forEach(function(Re){const Ie=J.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&Y.delete(Re)}),Y.size===0){X(T);return}setTimeout(ge,10)}wt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Xt=null;function yn(T){Xt&&Xt(T)}function vt(){Gt.stop()}function Cn(){Gt.start()}const Gt=new mp;Gt.setAnimationLoop(yn),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){Xt=T,$.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},$.addEventListener("sessionstart",vt),$.addEventListener("sessionend",Cn),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(T,F);const q=$.enabled===!0&&$.isPresenting===!0,Y=E!==null&&(se===null||q)&&E.begin(C,se);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,se),M=Se.get(T,x.length),M.init(F),M.state.textureUnits=ie.getTextureUnits(),x.push(M),Qe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ct.setFromProjectionMatrix(Qe,Ni,F.reversedDepth),Bt=this.localClippingEnabled,dt=He.init(this.clippingPlanes,Bt),b=Ee.get(T,A.length),b.init(),A.push(b),$.enabled===!0&&$.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&Yt(Re,F,-1/0,C.sortObjects)}Yt(T,F,0,C.sortObjects),b.finish(),L!==null&&L.updateLights(M.state.lightsArray),C.sortObjects===!0&&b.sort(Pe,je),$t=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,$t&&rt.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&He.beginShadows();const X=M.state.shadowsArray;if(Xe.render(X,T,F),dt===!0&&He.endShadows(),(Y&&E.hasRenderPass())===!1){const Re=b.opaque,pe=b.transmissive;if(M.setupLights(),F.isArrayCamera){const Ie=F.cameras;if(pe.length>0)for(let we=0,Ge=Ie.length;we<Ge;we++){const st=Ie[we];Mn(Re,pe,T,st)}$t&&rt.render(T);for(let we=0,Ge=Ie.length;we<Ge;we++){const st=Ie[we];pn(b,T,st,st.viewport)}}else pe.length>0&&Mn(Re,pe,T,F),$t&&rt.render(T),pn(b,T,F)}se!==null&&K===0&&(ie.updateMultisampleRenderTarget(se),ie.updateRenderTargetMipmap(se)),Y&&E.end(C),T.isScene===!0&&T.onAfterRender(C,T,F),Le.resetDefaultState(),ee=-1,ae=null,x.pop(),x.length>0?(M=x[x.length-1],ie.setTextureUnits(M.state.textureUnits),dt===!0&&He.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,L!==null&&L.renderEnd()};function Yt(T,F,q,Y){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ct)){Y&&cn.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qe);const Re=de.update(T),pe=T.material;pe.visible&&b.push(T,Re,pe,q,cn.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ct))){const Re=de.update(T),pe=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),cn.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),cn.copy(Re.boundingSphere.center)),cn.applyMatrix4(T.matrixWorld).applyMatrix4(Qe)),Array.isArray(pe)){const Ie=Re.groups;for(let we=0,Ge=Ie.length;we<Ge;we++){const st=Ie[we],ke=pe[st.materialIndex];ke&&ke.visible&&b.push(T,Re,ke,q,cn.z,st,F)}}else pe.visible&&b.push(T,Re,pe,q,cn.z,null,F)}}const ge=T.children;for(let Re=0,pe=ge.length;Re<pe;Re++)Yt(ge[Re],F,q,Y)}function pn(T,F,q,Y){const{opaque:X,transmissive:ge,transparent:Re}=T;M.setupLightsView(q),dt===!0&&He.setGlobalState(C.clippingPlanes,q),Y&&S.viewport(fe.copy(Y)),X.length>0&&nn(X,F,q),ge.length>0&&nn(ge,F,q),Re.length>0&&nn(Re,F,q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Mn(T,F,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const ke=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Kn(1,1,{generateMipmaps:!0,type:ke?hi:Xn,minFilter:gr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const ge=M.state.transmissionRenderTarget[Y.id],Re=Y.viewport||fe;ge.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),Ie=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Ut),We=C.getClearAlpha(),We<1&&C.setClearColor(16777215,.5),C.clear(),$t&&rt.render(q);const Ge=C.toneMapping;C.toneMapping=Fi;const st=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),dt===!0&&He.setGlobalState(C.clippingPlanes,Y),nn(T,q,Y),ie.updateMultisampleRenderTarget(ge),ie.updateRenderTargetMipmap(ge),wt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let xt=0,rn=F.length;xt<rn;xt++){const Vt=F[xt],{object:kt,geometry:mn,material:Ne,group:Sn}=Vt;if(Ne.side===Jn&&kt.layers.test(Y.layers)){const yt=Ne.side;Ne.side=Yn,Ne.needsUpdate=!0,ri(kt,q,Y,mn,Ne,Sn),Ne.side=yt,Ne.needsUpdate=!0,ke=!0}}ke===!0&&(ie.updateMultisampleRenderTarget(ge),ie.updateRenderTargetMipmap(ge))}C.setRenderTarget(pe,Ie,we),C.setClearColor(Ut,We),st!==void 0&&(Y.viewport=st),C.toneMapping=Ge}function nn(T,F,q){const Y=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ge=T.length;X<ge;X++){const Re=T[X],{object:pe,geometry:Ie,group:we}=Re;let Ge=Re.material;Ge.allowOverride===!0&&Y!==null&&(Ge=Y),pe.layers.test(q.layers)&&ri(pe,F,q,Ie,Ge,we)}}function ri(T,F,q,Y,X,ge){L!==null&&X.isNodeMaterial&&L.setObject(T,X),T.onBeforeRender(C,F,q,Y,X,ge),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,F,q,Y,T,ge),X.transparent===!0&&X.side===Jn&&X.forceSinglePass===!1?(X.side=Yn,X.needsUpdate=!0,C.renderBufferDirect(q,F,Y,X,T,ge),X.side=Br,X.needsUpdate=!0,C.renderBufferDirect(q,F,Y,X,T,ge),X.side=Jn):C.renderBufferDirect(q,F,Y,X,T,ge),T.onAfterRender(C,F,q,Y,X,ge)}function mi(T,F,q){F.isScene!==!0&&(F=An);const Y=J.get(T),X=M.state.lights,ge=M.state.shadowsArray,Re=X.state.version,pe=Me.getParameters(T,X.state,ge,F,q,M.state.lightProbeGridArray),Ie=Me.getProgramCacheKey(pe);let we=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,Y.fog=F.fog;const Ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=me.get(T.envMap||Y.environment,Ge),Y.envMapRotation=Y.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,we===void 0&&(T.addEventListener("dispose",be),we=new Map,Y.programs=we);let st=we.get(Ie);if(st!==void 0){if(Y.currentProgram===st&&Y.lightsStateVersion===Re)return rr(T,pe),st}else pe.uniforms=Me.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,q,pe),T.onBeforeCompile(pe,C),st=Me.acquireProgram(pe,Ie),we.set(Ie,st),Y.uniforms=pe.uniforms;const ke=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=He.uniform),rr(T,pe),Y.needsLights=ne(T),Y.lightsStateVersion=Re,Y.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.sunLights.value=X.state.sun,ke.sunLightShadows.value=X.state.sunShadow,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.sunShadowMatrix.value=X.state.sunShadowMatrix,ke.sunShadowCascade.value=X.state.sunShadowCascade,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=st,Y.uniformsList=null,st}function Cr(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ya.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function rr(T,F){const q=J.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Us(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let q=0,Y=T.length;q<Y;q++){const X=T[q];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function Po(T,F,q,Y,X){F.isScene!==!0&&(F=An),ie.resetTextureUnits();const ge=F.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?F.environment:null,pe=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Mt.workingColorSpace,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,we=me.get(Y.envMap||Re,Ie),Ge=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,st=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,rn=!!q.morphAttributes.color;let Vt=Fi;Y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const kt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,mn=kt!==void 0?kt.length:0,Ne=J.get(Y),Sn=M.state.lights;if(dt===!0&&(Bt===!0||T!==ae)){const Ye=T===ae&&Y.id===ee;He.setState(Y,T,Ye)}let yt=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Sn.state.version||Ne.outputColorSpace!==pe||X.isBatchedMesh&&Ne.batching===!1||!X.isBatchedMesh&&Ne.batching===!0||X.isBatchedMesh&&Ne.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ne.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||X.isInstancedMesh&&Ne.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ne.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ne.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ne.instancingMorph===!1&&X.morphTexture!==null||Ne.envMap!==we||Y.fog===!0&&Ne.fog!==ge||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==He.numPlanes||Ne.numIntersection!==He.numIntersection)||Ne.vertexAlphas!==Ge||Ne.vertexTangents!==st||Ne.morphTargets!==ke||Ne.morphNormals!==xt||Ne.morphColors!==rn||Ne.toneMapping!==Vt||Ne.morphTargetsCount!==mn||!!Ne.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ne.__version=Y.version);let Rn=Ne.currentProgram;yt===!0&&(Rn=mi(Y,F,X),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,Rn,Ne));let si=!1,Ci=!1,Ue=!1;const $e=Rn.getUniforms(),Ze=Ne.uniforms;if(S.useProgram(Rn.program)&&(si=!0,Ci=!0,Ue=!0),Y.id!==ee&&(ee=Y.id,Ci=!0),Ne.needsLights){const Ye=Us(M.state.lightProbeGridArray,X);Ne.lightProbeGrid!==Ye&&(Ne.lightProbeGrid=Ye,Ci=!0)}if(si||ae!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),$e.setValue(H,"projectionMatrix",T.projectionMatrix),$e.setValue(H,"viewMatrix",T.matrixWorldInverse);const Qt=$e.map.cameraPosition;Qt!==void 0&&Qt.setValue(H,Pt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&$e.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&$e.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),ae!==T&&(ae=T,Ci=!0,Ue=!0)}if(Ne.needsLights&&(Sn.state.sunShadowMap.length>0&&$e.setValue(H,"sunShadowMap",Sn.state.sunShadowMap,ie),Sn.state.directionalShadowMap.length>0&&$e.setValue(H,"directionalShadowMap",Sn.state.directionalShadowMap,ie),Sn.state.spotShadowMap.length>0&&$e.setValue(H,"spotShadowMap",Sn.state.spotShadowMap,ie),Sn.state.pointShadowMap.length>0&&$e.setValue(H,"pointShadowMap",Sn.state.pointShadowMap,ie)),X.isSkinnedMesh){$e.setOptional(H,X,"bindMatrix"),$e.setOptional(H,X,"bindMatrixInverse");const Ye=X.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),$e.setValue(H,"boneTexture",Ye.boneTexture,ie))}X.isBatchedMesh&&($e.setOptional(H,X,"batchingTexture"),$e.setValue(H,"batchingTexture",X._matricesTexture,ie),$e.setOptional(H,X,"batchingIdTexture"),$e.setValue(H,"batchingIdTexture",X._indirectTexture,ie),$e.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&$e.setValue(H,"batchingColorTexture",X._colorsTexture,ie));const Et=q.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&V.update(X,q,Rn),(Ci||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,$e.setValue(H,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&F.environment!==null&&(Ze.envMapIntensity.value=F.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=J1()),Ci){if($e.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ne.needsLights&&z(Ze,Ue),ge&&Y.fog===!0&&Ve.refreshFogUniforms(Ze,ge),Ve.refreshMaterialUniforms(Ze,Y,ue,te,M.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.lightProbeGrid){const Ye=Ne.lightProbeGrid;Ze.probesSH.value=Ye.texture,Ze.probesMin.value.copy(Ye.boundingBox.min),Ze.probesMax.value.copy(Ye.boundingBox.max),Ze.probesResolution.value.copy(Ye.resolution)}ya.upload(H,Cr(Ne),Ze,ie)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ya.upload(H,Cr(Ne),Ze,ie),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&$e.setValue(H,"center",X.center),$e.setValue(H,"modelViewMatrix",X.modelViewMatrix),$e.setValue(H,"normalMatrix",X.normalMatrix),$e.setValue(H,"modelMatrix",X.matrixWorld),Y.uniformsGroups!==void 0){const Ye=Y.uniformsGroups;for(let Qt=0,sn=Ye.length;Qt<sn;Qt++){const sr=Ye[Qt];k.update(sr,Rn),k.bind(sr,Rn)}}return Rn}function z(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function ne(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(T,F,q){const Y=J.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(T.texture).__webglTexture=F,J.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const q=J.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){se=T,Z=F,K=q;let Y=null,X=!1,ge=!1;if(T){const pe=J.get(T);if(pe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(H.FRAMEBUFFER,pe.__webglFramebuffer),fe.copy(T.viewport),Be.copy(T.scissor),Fe=T.scissorTest,S.viewport(fe),S.scissor(Be),S.setScissorTest(Fe),ee=-1;return}else if(pe.__webglFramebuffer===void 0)ie.setupRenderTarget(T);else if(pe.__hasExternalTextures)ie.rebindTextures(T,J.get(T.texture).__webglTexture,J.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(pe.__boundDepthTexture!==Ge){if(Ge!==null&&J.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(T)}}const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);const we=J.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(we[F])?Y=we[F][q]:Y=we[F],X=!0):T.samples>0&&ie.useMultisampledRTT(T)===!1?Y=J.get(T).__webglMultisampledFramebuffer:Array.isArray(we)?Y=we[q]:Y=we,fe.copy(T.viewport),Be.copy(T.scissor),Fe=T.scissorTest}else fe.copy(De).multiplyScalar(ue).floor(),Be.copy(it).multiplyScalar(ue).floor(),Fe=Nt;if(q!==0&&(Y=N),S.bindFramebuffer(H.FRAMEBUFFER,Y)&&S.drawBuffers(T,Y),S.viewport(fe),S.scissor(Be),S.setScissorTest(Fe),X){const pe=J.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,q)}else if(ge){const pe=F;for(let Ie=0;Ie<T.textures.length;Ie++){const we=J.get(T.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,we.__webglTexture,q,pe)}}else if(T!==null&&q!==0){const pe=J.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pe.__webglTexture,q)}ee=-1};function Ce(T){const F=J.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=P.textureFormatReadable(T.format),F.__typeReadable=P.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,q,Y,X,ge,Re,pe=0){if(!(T&&T.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){S.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const we=T.textures[pe],Ge=we.format,st=we.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+pe);const ke=Ce(we);if(ke.__formatReadable===!1){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-Y&&q>=0&&q<=T.height-X&&H.readPixels(F,q,Y,X,ye.convert(Ge),ye.convert(st),ge)}finally{const we=se!==null?J.get(se).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,Y,X,ge,Re,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(F>=0&&F<=T.width-Y&&q>=0&&q<=T.height-X){S.bindFramebuffer(H.FRAMEBUFFER,Ie);const we=T.textures[pe],Ge=we.format,st=we.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+pe);const ke=Ce(we);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.bufferData(H.PIXEL_PACK_BUFFER,ge.byteLength,H.STREAM_READ),H.readPixels(F,q,Y,X,ye.convert(Ge),ye.convert(st),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const rn=se!==null?J.get(se).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,rn);const Vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await eg(H,Vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ge),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(xt),H.deleteSync(Vt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,q=0){const Y=Math.pow(2,-q),X=Math.floor(T.image.width*Y),ge=Math.floor(T.image.height*Y),Re=F!==null?F.x:0,pe=F!==null?F.y:0;ie.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,Re,pe,X,ge),S.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,Y=null,X=0,ge=0){let Re,pe,Ie,we,Ge,st,ke,xt,rn;const Vt=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(q!==null)Re=q.max.x-q.min.x,pe=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,Ge=q.min.y,st=q.isBox3?q.min.z:0;else{const Ze=Math.pow(2,-X);Re=Math.floor(Vt.width*Ze),pe=Math.floor(Vt.height*Ze),T.isDataArrayTexture?Ie=Vt.depth:T.isData3DTexture?Ie=Math.floor(Vt.depth*Ze):Ie=1,we=0,Ge=0,st=0}Y!==null?(ke=Y.x,xt=Y.y,rn=Y.z):(ke=0,xt=0,rn=0);const kt=ye.convert(F.format),mn=ye.convert(F.type);let Ne;F.isData3DTexture?(ie.setTexture3D(F,0),Ne=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ie.setTexture2DArray(F,0),Ne=H.TEXTURE_2D_ARRAY):(ie.setTexture2D(F,0),Ne=H.TEXTURE_2D),S.activeTexture(H.TEXTURE0),S.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);const Sn=S.getParameter(H.UNPACK_ROW_LENGTH),yt=S.getParameter(H.UNPACK_IMAGE_HEIGHT),Rn=S.getParameter(H.UNPACK_SKIP_PIXELS),si=S.getParameter(H.UNPACK_SKIP_ROWS),Ci=S.getParameter(H.UNPACK_SKIP_IMAGES);S.pixelStorei(H.UNPACK_ROW_LENGTH,Vt.width),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vt.height),S.pixelStorei(H.UNPACK_SKIP_PIXELS,we),S.pixelStorei(H.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(H.UNPACK_SKIP_IMAGES,st);const Ue=T.isDataArrayTexture||T.isData3DTexture,$e=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Ze=J.get(T),Et=J.get(F),Ye=J.get(Ze.__renderTarget),Qt=J.get(Et.__renderTarget);S.bindFramebuffer(H.READ_FRAMEBUFFER,Ye.__webglFramebuffer),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let sn=0;sn<Ie;sn++)Ue&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,J.get(T).__webglTexture,X,st+sn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,J.get(F).__webglTexture,ge,rn+sn)),H.blitFramebuffer(we,Ge,Re,pe,ke,xt,Re,pe,H.DEPTH_BUFFER_BIT,H.NEAREST);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||J.has(T)){const Ze=J.get(T),Et=J.get(F);S.bindFramebuffer(H.READ_FRAMEBUFFER,U),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,B);for(let Ye=0;Ye<Ie;Ye++)Ue?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.__webglTexture,X,st+Ye):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ze.__webglTexture,X),$e?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Et.__webglTexture,ge,rn+Ye):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Et.__webglTexture,ge),X!==0?H.blitFramebuffer(we,Ge,Re,pe,ke,xt,Re,pe,H.COLOR_BUFFER_BIT,H.NEAREST):$e?H.copyTexSubImage3D(Ne,ge,ke,xt,rn+Ye,we,Ge,Re,pe):H.copyTexSubImage2D(Ne,ge,ke,xt,we,Ge,Re,pe);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else $e?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(Ne,ge,ke,xt,rn,Re,pe,Ie,kt,mn,Vt.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(Ne,ge,ke,xt,rn,Re,pe,Ie,kt,Vt.data):H.texSubImage3D(Ne,ge,ke,xt,rn,Re,pe,Ie,kt,mn,Vt):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ge,ke,xt,Re,pe,kt,mn,Vt.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ge,ke,xt,Vt.width,Vt.height,kt,Vt.data):H.texSubImage2D(H.TEXTURE_2D,ge,ke,xt,Re,pe,kt,mn,Vt);S.pixelStorei(H.UNPACK_ROW_LENGTH,Sn),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Rn),S.pixelStorei(H.UNPACK_SKIP_ROWS,si),S.pixelStorei(H.UNPACK_SKIP_IMAGES,Ci),ge===0&&F.generateMipmaps&&H.generateMipmap(Ne),S.unbindTexture()},this.initRenderTarget=function(T){J.get(T).__webglFramebuffer===void 0&&ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ie.setTextureCube(T,0):T.isData3DTexture?ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ie.setTexture2DArray(T,0):ie.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){Z=0,K=0,se=null,S.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}function eM(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},c=n[0].morphTargetsRelative,a=new zt;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(c!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;a.addGroup(l,p,u),l+=p}}if(t){let u=0;const f=[];for(let d=0;d<n.length;++d){const p=n[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=n[d].attributes.position.count}a.setIndex(f)}for(const u in s){const f=Hf(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;a.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[u]=[];for(let d=0;d<f;++d){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][d]);const g=Hf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;a.morphAttributes[u].push(g)}}}return a}function Hf(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),c=new Zt(o,t,i);let a=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=a/t;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);c.setComponent(d+f,g,_)}}else o.set(u.array,a);a+=u.count*t}return r!==void 0&&(c.gpuType=r),c}function tM(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let o=0;const c=Object.keys(n.attributes),a={},l={},u=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,w=c.length;v<w;v++){const y=c[v],b=n.attributes[y];a[y]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);const M=n.morphAttributes[y];M&&(l[y]||(l[y]=[]),M.forEach((A,x)=>{const E=new A.array.constructor(A.count*A.itemSize);l[y][x]=new A.constructor(E,A.itemSize,A.normalized)}))}const p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let v=0;v<s;v++){const w=i?i.getX(v):v;let y="";for(let b=0,M=c.length;b<M;b++){const A=c[b],x=n.getAttribute(A),E=x.itemSize;for(let C=0;C<E;C++)y+=`${Math.trunc(x[f[C]](w)*_+m)},`}if(y in t)u.push(t[y]);else{for(let b=0,M=c.length;b<M;b++){const A=c[b],x=n.getAttribute(A),E=n.morphAttributes[A],C=x.itemSize,R=a[A],L=l[A];for(let N=0;N<C;N++){const U=f[N],B=d[N];if(R[B](o,x[U](w)),E)for(let Z=0,K=E.length;Z<K;Z++)L[Z][B](o,E[Z][U](w))}}t[y]=o,u.push(o),o++}}const h=n.clone();for(const v in n.attributes){const w=a[v];if(h.setAttribute(v,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),v in l)for(let y=0;y<l[v].length;y++){const b=l[v][y];h.morphAttributes[v][y]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return h.setIndex(u),h}const wi=`#include <common>
#include <logdepthbuf_pars_vertex>`,Ti="#include <logdepthbuf_vertex>",Ei="#include <logdepthbuf_pars_fragment>",Ai="#include <logdepthbuf_fragment>",er=`
vec3 n_mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 n_mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 n_perm(vec4 x) { return n_mod289(((x * 34.0) + 10.0) * x); }
vec4 n_tis(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = n_mod289(i);
  vec4 p = n_perm(n_perm(n_perm(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = n_tis(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm(vec3 p, int oct) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 10; i++) { if (i >= oct) break; s += snoise(p) * a; p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; }
  return s;
}
// Sharp ridges (mountain chains, rilles, filaments): 0..~1.
float ridged(vec3 p, int oct) {
  float s = 0.0, a = 0.5, w = 1.0;
  for (int i = 0; i < 10; i++) {
    if (i >= oct) break;
    float n = 1.0 - abs(snoise(p));
    n *= n * w;
    w = clamp(n * 2.0, 0.0, 1.0);
    s += n * a;
    p = p * 2.1 + vec3(3.1, 1.3, 7.7);
    a *= 0.5;
  }
  return s;
}
// Cheap hash, 3D -> 0..1.
float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}
// Cellular (Worley) noise: x = distance to nearest feature, y = to second nearest.
vec2 worley(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 o = vec3(float(x), float(y), float(z));
    vec3 r = o + hash33(i + o) - f;
    float d = dot(r, r);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return sqrt(vec2(d1, d2));
}
`,ao=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function nM(n){const e=new zt;e.setAttribute("position",new mt([-1,-1,0,3,-1,0,-1,3,0],3));const t=new Lt(e);t.frustumCulled=!1;const i=new rc;i.add(t);const r=new ac,s=n.extensions,o=s.has("EXT_color_buffer_float")||s.has("EXT_color_buffer_half_float")?hi:Xn,c={type:o,depthBuffer:!1,minFilter:jt,magFilter:jt};let a=null;const l=[],u=6,f=()=>({value:new qe}),d=new It({uniforms:{tSrc:{value:null},uTexel:f(),uPrefilter:{value:0},uThreshold:{value:1},uKnee:{value:.6}},vertexShader:ao,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uPrefilter, uThreshold, uKnee;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
      void main() {
        // 13 taps in five overlapping boxes, weighted toward the centre.
        vec3 a = s(vec2(-2, 2)), b = s(vec2(0, 2)), c = s(vec2(2, 2));
        vec3 d = s(vec2(-2, 0)), e = s(vec2(0, 0)), f = s(vec2(2, 0));
        vec3 g = s(vec2(-2, -2)), h = s(vec2(0, -2)), i = s(vec2(2, -2));
        vec3 j = s(vec2(-1, 1)), k = s(vec2(1, 1)), l = s(vec2(-1, -1)), m = s(vec2(1, -1));
        vec3 col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
        if (uPrefilter > 0.5) {
          // Karis average: weight each box by 1/(1+brightness), so a single
          // bright pixel (a glint on metal, a sub-pixel light) can't bloom
          // into a flash that flickers as it moves.
          vec3 b0 = (a + b + d + e) * 0.25, b1 = (b + c + e + f) * 0.25, b2 = (d + e + g + h) * 0.25, b3 = (e + f + h + i) * 0.25, b4 = (j + k + l + m) * 0.25;
          float w0 = 1.0 / (1.0 + max(b0.r, max(b0.g, b0.b))), w1 = 1.0 / (1.0 + max(b1.r, max(b1.g, b1.b)));
          float w2 = 1.0 / (1.0 + max(b2.r, max(b2.g, b2.b))), w3 = 1.0 / (1.0 + max(b3.r, max(b3.g, b3.b)));
          float w4 = 1.0 / (1.0 + max(b4.r, max(b4.g, b4.b)));
          col = (b0 * w0 * 0.125 + b1 * w1 * 0.125 + b2 * w2 * 0.125 + b3 * w3 * 0.125 + b4 * w4 * 0.5) / (w0 * 0.125 + w1 * 0.125 + w2 * 0.125 + w3 * 0.125 + w4 * 0.5);
          // Soft threshold: only light brighter than about white blooms, so
          // orbit lines and labels-in-the-scene stay crisp.
          col = min(col, vec3(16.0));
          float br = max(col.r, max(col.g, col.b));
          float rq = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
          rq = rq * rq / (4.0 * uKnee + 1e-4);
          col *= max(rq, br - uThreshold) / max(br, 1e-4);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,depthTest:!1,depthWrite:!1}),p=new It({uniforms:{tSrc:{value:null},uTexel:f(),uRadius:{value:1}},vertexShader:ao,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
      void main() {
        vec3 col = s(vec2(0)) * 4.0 + (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.0
          + s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
        gl_FragColor = vec4(col / 16.0, 1.0);
      }`,blending:On,depthTest:!1,depthWrite:!1}),g={pos:new qe(.5,.5),vis:0,color:new tt("#ffe2b0")},_=new It({uniforms:{tScene:{value:null},tBloom:{value:null},uBloom:{value:.17},uExposure:{value:1},uTime:{value:0},uAspect:{value:1},uSun:{value:g.pos},uSunVis:{value:0},uSunColor:{value:g.color},uTexel:f(),uCA:{value:1},uGrain:{value:1}},vertexShader:ao,fragmentShader:`
      uniform sampler2D tScene, tBloom; uniform float uBloom, uExposure, uTime, uAspect, uSunVis, uCA, uGrain;
      uniform vec2 uSun, uTexel; uniform vec3 uSunColor;
      varying vec2 vUv;
      // Khronos PBR Neutral tone mapping: keeps colours true below about 0.8,
      // then rolls highlights off to white (so owner colours stay owner colours).
      vec3 neutral(vec3 c) {
        float x = min(c.r, min(c.g, c.b));
        float off = x < 0.08 ? x - 6.25 * x * x : 0.04;
        c -= off;
        float peak = max(c.r, max(c.g, c.b));
        if (peak < 0.76) return c;
        float d = 0.24;
        float np = 1.0 - d * d / (peak + d - 0.76);
        c *= np / peak;
        float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
        return mix(c, vec3(np), g);
      }
      vec3 toSRGB(vec3 c) {
        c = clamp(c, 0.0, 1.0);
        return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
      }
      float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float disc(vec2 p, vec2 c, float r, float soft) { return 1.0 - smoothstep(r * (1.0 - soft), r, length((p - c) * vec2(uAspect, 1.0))); }
      void main() {
        vec2 fromC = vUv - 0.5;
        vec3 col = texture2D(tScene, vUv).rgb;
        col += texture2D(tBloom, vUv).rgb * uBloom;
        // Lens flare from the sun: ghosts strung along the line through the
        // centre of the frame, a faint halo, and a thin anamorphic streak.
        if (uSunVis > 0.001) {
          vec2 sd = uSun - 0.5;
          vec3 fl = vec3(0.0);
          fl += disc(vUv, 0.5 - sd * 0.45, 0.03, 0.7) * vec3(0.30, 0.55, 1.00) * 0.05;
          fl += disc(vUv, 0.5 - sd * 0.80, 0.06, 0.9) * vec3(0.45, 0.85, 0.75) * 0.02;
          fl += disc(vUv, 0.5 - sd * 1.25, 0.016, 0.5) * vec3(1.00, 0.60, 0.30) * 0.07;
          fl += disc(vUv, 0.5 + sd * 0.35, 0.04, 1.0) * vec3(0.70, 0.50, 1.00) * 0.025;
          vec2 dv = (vUv - uSun) * vec2(uAspect, 1.0);
          float streak = exp(-abs(dv.y) * 700.0) * exp(-abs(dv.x) * 6.0);
          fl += streak * vec3(0.55, 0.75, 1.0) * 0.3;
          col += fl * uSunVis * uSunColor;
        }
        col *= uExposure;
        // Gentle grade: cool the shadows a little, as through a ship's camera.
        float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col += vec3(-0.004, 0.0, 0.010) * (1.0 - smoothstep(0.0, 0.25, lum));
        col = neutral(max(col, 0.0));
        // Vignette.
        float v = smoothstep(0.95, 0.25, length(fromC * vec2(uAspect * 0.85, 1.0)));
        col *= mix(0.72, 1.0, v);
        vec3 outc = toSRGB(col);
        // A whisper of dither, just enough to hide banding in the dark sky.
        float gr = h12(gl_FragCoord.xy + fract(uTime * 7.31) * 517.0) - 0.5;
        outc += gr * 0.006 * uGrain;
        gl_FragColor = vec4(outc, 1.0);
      }`,depthTest:!1,depthWrite:!1});let m=new qe(1,1),h=4;function v(x,E,C){const R=Math.max(1,Math.round(x*C)),L=Math.max(1,Math.round(E*C));m.set(R,L),a?a.setSize(R,L):a=new Kn(R,L,{type:o,samples:h,depthBuffer:!0});let N=Math.max(1,R>>1),U=Math.max(1,L>>1);for(let B=0;B<u;B++)l[B]?l[B].setSize(N,U):l[B]=new Kn(N,U,c),N=Math.max(1,N>>1),U=Math.max(1,U>>1);_.uniforms.uAspect.value=x/E}function w(x){x!==h&&(h=x,a&&(a.dispose(),a=new Kn(m.x,m.y,{type:o,samples:h,depthBuffer:!0})))}function y(x,E){t.material=x,n.setRenderTarget(E),n.render(i,r)}function b(x,E,C){n.setRenderTarget(a),n.clear(),n.render(x,E);let R=a.texture,L=m.x,N=m.y;for(let B=0;B<M;B++)d.uniforms.tSrc.value=R,d.uniforms.uTexel.value.set(1/L,1/N),d.uniforms.uPrefilter.value=B===0?1:0,y(d,l[B]),R=l[B].texture,L=l[B].width,N=l[B].height;for(let B=M-2;B>=0;B--)p.uniforms.tSrc.value=l[B+1].texture,p.uniforms.uTexel.value.set(1/l[B+1].width,1/l[B+1].height),n.autoClear=!1,y(p,l[B]),n.autoClear=!0;const U=_.uniforms;U.tScene.value=a.texture,U.tBloom.value=l[0].texture,U.uTime.value=C,U.uSunVis.value=g.vis,y(_,null)}let M=u;function A(x){M=x==="high"?u:4}return{setSize:v,setSamples:w,setLevel:A,render:b,flare:g,uniforms:_.uniforms}}const aa=[[[.1,.45,.55],[.55,.12,.4]],[[.65,.3,.08],[.35,.06,.08]],[[.2,.3,.75],[.45,.15,.6]],[[.15,.5,.4],[.6,.45,.15]],[[.6,.2,.25],[.15,.25,.6]],[[.4,.55,.7],[.25,.1,.35]]],iM=`
${er}
uniform vec3 uPole;
uniform vec3 uNebDir[3];
uniform vec3 uNebA[3];
uniform vec3 uNebB[3];
uniform float uNebSize[3];
uniform vec3 uGal[3];
uniform float uSeed;
uniform float uRes;
varying vec3 vDir;

void main() {
  vec3 d = normalize(vDir);
  vec3 col = vec3(0.0);

  // --- The Milky Way: the galaxy's disc seen from inside, round the sky. ---
  float lat = asin(clamp(dot(d, uPole), -1.0, 1.0));
  vec3 X = normalize(vec3(1.0, 0.0, 0.0) - uPole * uPole.x);
  vec3 Y = cross(uPole, X);
  float lon = atan(dot(d, Y), dot(d, X));
  float wob = 0.16 * (0.75 + 0.5 * fbm(d * 2.5 + 13.0, 3));
  float band = exp(-pow(lat / wob, 2.0)) + 0.25 * exp(-pow(lat / 0.55, 2.0));
  float clouds = fbm(d * 6.0 + 41.0, 6) * 0.5 + 0.5;
  float core = exp(-pow(lon / 0.75, 2.0)) * exp(-pow(lat / 0.28, 2.0));
  float lanes = ridged(d * 7.0 + 77.0, 5);
  float dust = smoothstep(0.35, 0.8, lanes) * exp(-pow((lat - 0.02 * sin(lon * 3.0)) / 0.07, 2.0));
  float mw = band * (0.25 + clouds * 0.9) + core * 1.4;
  mw *= 1.0 - min(0.92, dust * 1.3);
  col += mix(vec3(0.55, 0.62, 0.85), vec3(1.0, 0.82, 0.6), clamp(core * 1.4, 0.0, 1.0)) * mw * 0.020;

  // --- Nebulae: big soft clouds of glowing gas with dark dust through them. ---
  for (int i = 0; i < 3; i++) {
    float sz = uNebSize[i];
    if (sz <= 0.0) continue;
    float a = acos(clamp(dot(d, uNebDir[i]), -1.0, 1.0));
    if (a > sz * 1.8) continue;
    vec3 q = d * (2.2 / sz) + float(i) * 17.0;
    vec3 w = vec3(fbm(q, 4), fbm(q + 5.2, 4), fbm(q + 9.7, 4));
    float gas = fbm(q * 1.6 + w * 1.8, 6) * 0.5 + 0.5;
    float wisps = ridged(q * 2.4 + w * 2.2, 5);
    float fall = smoothstep(sz * 1.8, 0.0, a);
    fall *= fall;
    float dens = clamp(gas * 1.6 - 0.45, 0.0, 1.0) * fall;
    vec3 c = mix(uNebB[i], uNebA[i], smoothstep(0.2, 0.9, dens + wisps * 0.3));
    float glow = dens * dens * 0.9 + wisps * wisps * dens * 0.8;
    float dk = smoothstep(0.55, 0.85, ridged(q * 1.3 + 31.0, 4)) * fall;
    col *= 1.0 - dk * 0.7;
    col += c * glow * 0.075 * (1.0 - dk * 0.85);
  }

  // --- Faint galaxies far beyond: small tilted ellipses with a bright core. ---
  for (int i = 0; i < 3; i++) {
    vec3 gd = normalize(uGal[i]);
    float s = length(uGal[i]) * 0.012;
    vec3 gx = normalize(cross(gd, vec3(0.3, 1.0, 0.2)));
    vec3 gy = cross(gd, gx);
    vec2 uv = vec2(dot(d, gx), dot(d, gy)) / s;
    if (dot(d, gd) < 0.0 || length(uv) > 3.0) continue;
    float ang = float(i) * 1.3;
    uv = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * uv;
    uv.y *= 2.6;
    float r = length(uv);
    float th = atan(uv.y, uv.x);
    float arms = 0.5 + 0.5 * sin(th * 2.0 - log(r + 0.05) * 4.0);
    float gal = exp(-r * 2.4) * (0.4 + 0.6 * arms) + exp(-r * 9.0) * 1.5;
    col += vec3(0.85, 0.85, 1.0) * gal * 0.035;
  }

  // (Stars are all drawn live, as points, so they stay pin-sharp.)

  gl_FragColor = vec4(col, 1.0);
}`;function rM(n,e){const t=e==="high"?1024:512,i=n.extensions,r=i.has("EXT_color_buffer_float")||i.has("EXT_color_buffer_half_float")?hi:Xn,s=new sd(t,{type:r,generateMipmaps:!1,minFilter:jt,magFilter:jt}),o=new pp(.1,100,s),c=new rc,a={uPole:{value:new D},uNebDir:{value:[new D,new D,new D]},uNebA:{value:[new D,new D,new D]},uNebB:{value:[new D,new D,new D]},uNebSize:{value:[0,0,0]},uGal:{value:[new D,new D,new D]},uSeed:{value:0},uRes:{value:t}};c.add(new Lt(new Oi(10,64,32),new It({uniforms:a,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:iM,side:Yn,depthWrite:!1})));const l=new ou(n);let u=null,f=null;const d=e==="high"?9e3:5e3,p=new zt,g=new Float32Array(d*3),_=new Float32Array(d*3),m=new Float32Array(d);p.setAttribute("position",new Zt(g,3)),p.setAttribute("color",new Zt(_,3)),p.setAttribute("size",new Zt(m,1));const h=new It({uniforms:{uT:{value:0},uPR:{value:1}},vertexShader:`
      attribute float size; attribute vec3 color;
      uniform float uT, uPR;
      varying vec3 vCol; varying float vB;
      void main() {
        // Stars sit at infinity: only the camera's rotation moves them.
        vec3 d = mat3(viewMatrix) * normalize(position);
        gl_Position = projectionMatrix * vec4(d * 100.0, 1.0);
        gl_Position.z = gl_Position.w * 0.999999;
        float tw = 0.85 + 0.15 * sin(uT * (1.5 + fract(position.x * 7.1) * 3.0) + position.y * 13.0);
        vB = size;
        vCol = color * tw;
        gl_PointSize = (1.0 + size * 2.2) * max(uPR, 1.0);
      }`,fragmentShader:`
      varying vec3 vCol; varying float vB;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float core = exp(-r * r * 9.0);
        // Faint diffraction spikes on the brightest few.
        float spike = vB > 1.6 ? (exp(-abs(p.x) * 60.0) + exp(-abs(p.y) * 60.0)) * (1.0 - r) * 0.5 : 0.0;
        float a = core + max(spike, 0.0);
        if (a < 0.01) discard;
        gl_FragColor = vec4(vCol * a, 1.0);
      }`,blending:On,depthTest:!1,depthWrite:!1}),v=new ap(p,h);v.frustumCulled=!1,v.renderOrder=-100;function w(y=1){if(f===y)return;f=y;const b=pi(y*7919+13),M=()=>{const L=b()*2-1,N=b()*Math.PI*2,U=Math.sqrt(1-L*L);return new D(Math.cos(N)*U,L,Math.sin(N)*U)};a.uPole.value.set(.3+b()*.4,.75+b()*.2,.3-b()*.6).normalize();const A=aa[Math.floor(b()*aa.length)],x=aa[Math.floor(b()*aa.length)],E=2+(b()<.5?1:0);for(let L=0;L<3;L++){const N=L===1?x:A,U=b()<.4;a.uNebDir.value[L].copy(M()),a.uNebA.value[L].fromArray(U?N[1]:N[0]),a.uNebB.value[L].fromArray(U?N[0]:N[1]),a.uNebSize.value[L]=L<E?.35+b()*.45:0,a.uGal.value[L].copy(M()).multiplyScalar(.6+b()*1.2)}a.uSeed.value=Math.floor(b()*1e3),o.update(n,c),u&&u.dispose(),u=l.fromCubemap(s.texture);const C=a.uPole.value,R=new D;for(let L=0;L<d;L++){R.copy(M()),b()<.5&&R.addScaledVector(C,-R.dot(C)*(.75+b()*.25)).normalize(),g.set([R.x,R.y,R.z],L*3);const N=b()**7,U=b(),B=U<.18?[.7,.82,1]:U<.75?[1,.97,.93]:U<.94?[1,.84,.62]:[1,.62,.48],Z=.12+b()*.12+N*3.5;_.set([B[0]*Z,B[1]*Z,B[2]*Z],L*3),m[L]=N*2.2}p.attributes.position.needsUpdate=!0,p.attributes.color.needsUpdate=!0,p.attributes.size.needsUpdate=!0}return{stars:v,bake:w,get background(){return s.texture},get env(){return u?u.texture:null},update(y,b){h.uniforms.uT.value=y,h.uniforms.uPR.value=b}}}function $f(n,e){const t=new In,i={value:0},r=e==="high",s=new Lt(new Oi(n,96,64),new It({uniforms:{uT:i,uTint:{value:new tt(1,1,1)}},vertexShader:`${wi}
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
          ${Ti}
        }`,fragmentShader:`${Ei}
        ${er}
        uniform float uT; uniform vec3 uTint;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          ${Ai}
          vec3 p = normalize(vP);
          float t = uT;
          // Granules: convection cells, bright centres and dark lanes, that churn.
          vec3 q = p * 30.0 + vec3(fbm(p * 5.0 + t * 0.015, 3), fbm(p * 5.0 + 7.0 - t * 0.015, 3), 0.0) * 1.2;
          vec2 w = worley(q + vec3(0.0, 0.0, t * 0.05));
          float gran = smoothstep(0.0, 0.7, w.y - w.x) * 0.7 + (snoise(q * 0.7 + t * 0.03) * 0.5 + 0.5) * 0.3;
          ${r?"vec2 w2 = worley(q * 2.3 + 11.0 - vec3(t * 0.08)); gran = gran * 0.75 + smoothstep(0.0, 0.5, w2.y - w2.x) * 0.25;":""}
          float sup = fbm(p * 6.0 - t * 0.01, 3) * 0.5 + 0.5;
          // Active regions: spots (umbra and penumbra) and bright faculae round them.
          float act = fbm(p * 2.0 + vec3(0.0, t * 0.004, 0.0), 2) + snoise(p * 9.0) * 0.03;
          act *= smoothstep(0.85, 0.3, abs(p.y)); // spots keep to the low latitudes
          float pen = smoothstep(0.36, 0.41, act);
          float umb = smoothstep(0.44, 0.47, act);
          float fil = 0.5 + 0.5 * sin(atan(p.y, p.x) * 90.0 + fbm(p * 20.0, 2) * 6.0);
          float mu = max(dot(vN, vV), 0.0);
          float limb = 0.35 + 0.65 * pow(mu, 0.55);
          float fac = smoothstep(0.18, 0.28, act) * (1.0 - pen) * (1.0 - mu) * 1.5;
          vec3 hot = vec3(1.0, 0.93, 0.78), warm = vec3(1.0, 0.62, 0.25), deep = vec3(0.8, 0.28, 0.06);
          vec3 c = mix(warm, hot, gran * 0.7 + sup * 0.3);
          c = mix(c, deep, (1.0 - limb) * 0.85);
          c *= 1.0 + fac * 0.6;
          c *= 1.0 - pen * (0.45 + 0.1 * fil) - umb * 0.45;
          // Brighter than white: the bloom does the rest.
          gl_FragColor = vec4(c * uTint * (0.4 + 0.7 * limb), 1.0);
        }`}));t.add(s);const o=new Lt(new Ds(2,2),new It({uniforms:{uT:i,uR:{value:n},uTint:s.material.uniforms.uTint},vertexShader:`${wi}
        uniform float uR; varying vec2 vXY;
        void main() {
          float s = length(modelMatrix[0].xyz) * uR * 3.4;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 3.4; // in star radii
          gl_Position = projectionMatrix * mv;
          ${Ti}
        }`,fragmentShader:`${Ei}
        ${er}
        uniform float uT; uniform vec3 uTint; varying vec2 vXY;
        void main() {
          ${Ai}
          float r = length(vXY);
          if (r < 0.97) discard;
          float a = atan(vXY.y, vXY.x);
          vec2 dir = vXY / r;
          // Streamers: noise in angle, stretched outward, drifting slowly.
          // Streamers turn slowly with the star and stream outward.
          float rot = uT * 0.015;
          vec2 rd = vec2(dir.x * cos(rot) - dir.y * sin(rot), dir.x * sin(rot) + dir.y * cos(rot));
          float s = fbm(vec3(rd * 3.0, uT * 0.04), 4) * 0.5 + 0.5;
          float s2 = fbm(vec3(rd * 9.0 + 4.0, r * 1.2 - uT * 0.25), 3) * 0.5 + 0.5;
          float streak = pow(s, 2.0) * 0.8 + pow(s2, 3.0) * 0.6;
          float fall = exp(-(r - 1.0) * 3.6) * 0.8 + exp(-(r - 1.0) * 1.4) * 0.08;
          float inner = exp(-(r - 1.0) * 18.0) * 1.5; // the bright chromosphere edge
          float k = fall * (0.35 + streak) + inner;
          k *= smoothstep(3.4, 2.4, r) * (0.92 + 0.08 * sin(uT * 0.6 + s * 4.0));
          vec3 c = mix(vec3(1.0, 0.55, 0.25), vec3(1.0, 0.85, 0.65), clamp(streak, 0.0, 1.0)) * uTint;
          gl_FragColor = vec4(c * k * 0.7, 1.0);
        }`,blending:On,transparent:!0,depthWrite:!1}));o.frustumCulled=!1,t.add(o);const c=[],a=d=>new It({uniforms:{uT:i,uA:{value:0},uC:{value:new tt().setHSL(d,1,.55)},uTint:s.material.uniforms.uTint},vertexShader:`${wi}
      varying vec2 vUv; varying float vRim;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vRim = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
        ${Ti}
      }`,fragmentShader:`${Ei}
      ${er}
      uniform float uT, uA; uniform vec3 uC, uTint; varying vec2 vUv; varying float vRim;
      void main() {
        ${Ai}
        float flow = snoise(vec3(vUv.x * 14.0 - uT * 0.6, vUv.y * 3.0, uT * 0.1)) * 0.5 + 0.5;
        float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float k = uA * (0.35 + flow) * (0.4 + 0.6 * vRim) * (0.5 + ends * 0.5);
        gl_FragColor = vec4(uC * uTint * k * 2.2, 1.0);
      }`,blending:On,transparent:!0,depthWrite:!1,side:Jn});{const d=pi(7),p=new D(0,1,0);for(let g=0;g<9;g++){const _=.7+d()*1.3,m=new Lt(new vr(_,.07+d()*.08,8,40,Math.PI),a(.03+d()*.05)),h=()=>{const v=new D().randomDirection();m.position.copy(v).multiplyScalar(n*.97),m.quaternion.setFromUnitVectors(p,v),m.rotateY(Math.random()*Math.PI)};h(),c.push({m,place:h,phase:d()*40,period:25+d()*30,peak:.5+d()*.4,lastU:0}),t.add(m)}}const l=sM(),u=[];for(const[d,p,g]of[[14,"#fff0c0",.16],[26,"#ffd890",.06],[55,"#ffc070",.02]]){const _=new _a(new oo({map:l,color:p,opacity:g,blending:On,depthWrite:!1,transparent:!0}));_.scale.setScalar(d),_.userData.base=d,u.push(_),t.add(_)}function f(d){i.value=d,u.forEach((p,g)=>p.scale.setScalar(p.userData.base*(1+.03*Math.sin(d*(.5+g*.23)+g))));for(const p of c){const g=(d+p.phase)%p.period/p.period;g<p.lastU&&p.place(),p.lastU=g,p.m.material.uniforms.uA.value=Math.sin(g*Math.PI)**2*p.peak,p.m.scale.setScalar(.6+g*.6)}}return{group:t,update:f,tint:s.material.uniforms.uTint.value}}function sM(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.5)"),t.addColorStop(.5,"rgba(255,255,255,0.1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new ed(n);return i.colorSpace=Un,i}const _t=0,Je=1,xn=2,Sr=3,br=4,Or=5,li=6,oM=7;let fr=null;function aM(){if(fr)return fr;const n=256,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=pi(17);t.fillStyle="#d8d8d8",t.fillRect(0,0,n,n);const r=(s,o,c,a,l)=>{if(l>4||c<18||a<18||l>1&&i()<.18){const u=196+i()*52|0;t.fillStyle=`rgb(${u},${u},${u+2})`,t.fillRect(s+1,o+1,c-2,a-2),t.strokeStyle="rgba(30,34,40,0.6)",t.lineWidth=1,t.strokeRect(s+.5,o+.5,c-1,a-1),t.strokeStyle="rgba(255,255,255,0.25)",t.beginPath(),t.moveTo(s+1.5,o+a-1.5),t.lineTo(s+1.5,o+1.5),t.lineTo(s+c-1.5,o+1.5),t.stroke();const f=i();if(f<.15)t.fillStyle="rgba(40,44,52,0.45)",t.fillRect(s+c*.3,o+a*.3,c*.3,a*.25);else if(f<.25){t.fillStyle="rgba(30,32,36,0.5)";for(let d=0;d<5;d++)t.fillRect(s+3,o+3+d*3,c*.4,1)}else if(f<.33){t.fillStyle="rgba(30,30,30,0.45)";for(let d=3;d<c-3;d+=4)t.fillRect(s+d,o+2,1,1),t.fillRect(s+d,o+a-3,1,1)}else if(f<.36){t.save(),t.beginPath(),t.rect(s+2,o+a-7,c-4,5),t.clip();for(let d=-10;d<c;d+=6)t.fillStyle="rgba(190,140,30,0.7)",t.beginPath(),t.moveTo(s+d,o+a),t.lineTo(s+d+3,o+a),t.lineTo(s+d+8,o+a-8),t.lineTo(s+d+5,o+a-8),t.fill();t.restore()}return}if(c>a){const u=c*(.3+i()*.4)|0;r(s,o,u,a,l+1),r(s+u,o,c-u,a,l+1)}else{const u=a*(.3+i()*.4)|0;r(s,o,c,u,l+1),r(s,o+u,c,a-u,l+1)}};r(0,0,n,n,0);for(let s=0;s<90;s++)t.fillStyle=`rgba(20,20,26,${.03+i()*.06})`,t.fillRect(i()*n,i()*n,1+i()*14,1);for(let s=0;s<1200;s++)t.fillStyle=i()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",t.fillRect(i()*n,i()*n,1,1);return fr=new ed(e),fr.colorSpace=Un,fr.wrapS=fr.wrapT=_o,fr.anisotropy=4,fr}function xs(n){const e=[],t=pi(n),i=Math.PI/2,r=(o,c,a=1)=>(o.userData.kind=c,o.userData.tint=a,e.push(o),o),s={r:t,add:(o,c=_t,a=1)=>r(o,c,a),box:(o,c,a,l=0,u=0,f=0,d=_t,p)=>r(new _n(o,c,a).translate(l,u,f),d,p),cyl:(o,c,a,l,u=_t,f=12,d=0,p=0,g)=>r(new vn(o,c,a,f).rotateX(i).translate(d,p,l),u,g),bell:(o,c,a=.16)=>{const l=[];for(let u=0;u<=8;u++){const f=u/8;l.push(new qe(o*(.42+.58*Math.pow(f,1.6)),-f*a))}r(new rd(l,20).rotateX(-i).translate(0,0,c),Je,.7),r(new vn(o*.4,o*.4,.004,16).rotateX(i).translate(0,0,c-.012),oM)},greeble:(o,c,a,l,u,f,d,p="tbs")=>{for(let g=0;g<d;g++){const _=p[Math.floor(t()*p.length)],m=(.1+t()*.25)*o,h=(.08+t()*.3)*a,v=.004+t()*.012,w=l+(t()-.5)*(o-m),y=f+(t()-.5)*(a-h),b=t()<.6?Je:_t;if(_==="t")s.box(m,v,h,w,u+c/2+v/2,y,b);else if(_==="b")s.box(m,v,h,w,u-c/2-v/2,y,b);else{const M=t()<.5?-1:1,A=u+(t()-.5)*(c-m*.6);s.box(v,Math.min(m,c*.4),h,l+M*(o/2+v/2),A,y,b)}}},pdc:(o,c,a,l=1)=>{s.cyl(.011,.013,.008,a,Je,8,o,c),s.box(.014,.01*l,.014,o,c+.006*l,a,Je,.9),s.box(.003,.003,.03,o-.003,c+.009*l,a+.016,Je,.6),s.box(.003,.003,.03,o+.003,c+.009*l,a+.016,Je,.6)},light:(o,c,a,l,u=.008)=>s.box(u,u,u,o,c,a,l),windows:(o,c,a,l,u,f=[-1,1])=>{for(let d=0;d<u;d++){const p=a+(l-a)*d/Math.max(1,u-1);for(const g of f)s.box(.002,.006,.01,g*o,c,p,Sr)}},build(o=1.35){const c=[];for(const l of e){const u=l.index?l.toNonIndexed():l;u.deleteAttribute("uv");const f=u.attributes.position.count,d=new Float32Array(f).fill(l.userData.kind),p=new Float32Array(f).fill(l.userData.tint*(.9+t()*.2));u.setAttribute("kind",new Zt(d,1)),u.setAttribute("tint",new Zt(p,1)),u.computeVertexNormals();const g=u.attributes.position,_=u.attributes.normal,m=new Float32Array(f*2),h=7;for(let v=0;v<f;v++){const w=Math.abs(_.getX(v)),y=Math.abs(_.getY(v)),b=Math.abs(_.getZ(v)),M=g.getX(v),A=g.getY(v),x=g.getZ(v);w>=y&&w>=b?(m[v*2]=x*h,m[v*2+1]=A*h):y>=b?(m[v*2]=M*h,m[v*2+1]=x*h):(m[v*2]=M*h,m[v*2+1]=A*h)}u.setAttribute("uv",new Zt(m,2)),c.push(u)}const a=eM(c);return a.scale(o,o,1),a.computeBoundingSphere(),a}};return s}function cM(){const n=xs(11);n.add(new td(.05,.12,4).rotateY(Math.PI/4).rotateX(Math.PI/2).translate(0,0,.36),_t),n.box(.072,.09,.07,0,0,.29,_t),n.box(.078,.096,.17,0,0,.17),n.box(.086,.104,.2,0,0,-.02),n.box(.06,.018,.13,0,.058,.12,xn),n.box(.04,.012,.06,0,.07,.15,_t),n.cyl(.009,.009,.01,.15,Je,8,0,.082),n.box(.08,.01,.04,0,-.055,.27,xn);for(const l of[-.1,-.04,.02,.08])n.box(.092,.108,.008,0,0,l,Je);n.box(.018,.018,.4,0,-.06,.1,Je),n.box(.008,.008,.06,0,-.06,.32,Je,.6),n.greeble(.078,.096,.17,0,0,.17,10),n.greeble(.086,.104,.2,0,0,-.02,14),n.pdc(.04,.052,.24),n.pdc(-.04,.052,.24),n.pdc(.045,-.054,-.07,-1),n.pdc(-.045,-.054,-.07,-1);for(const l of[-1,1])for(const u of[-1,1])n.box(.012,.012,.012,l*.05,u*.058,-.11,Je,.7);n.cyl(.05,.056,.07,-.155,Je,14),n.cyl(.058,.058,.012,-.13,_t,14),n.bell(.06,-.19,.15),n.windows(.0395,.02,.1,.24,6),n.windows(.0435,-.02,-.08,.06,4),n.box(.03,.012,.004,0,.022,.355,Sr),n.light(-.047,0,0,br),n.light(.047,0,0,Or),n.light(0,.066,-.08,li);const e=n.build(),t=xs(23);for(let l=0;l<6;l++){const u=.28-l*.085,f=.088+(l===1||l===4?.006:0);t.box(f,f,.082,0,0,u,_t,.95+l%2*.08),t.greeble(f,f,.082,0,0,u,4)}t.box(.074,.074,.05,0,0,.345),t.box(.06,.06,.02,0,0,.375,Je),t.box(.05,.04,.08,0,.062,.12),t.box(.054,.012,.05,0,.088,.115,xn),t.box(.092,.016,.16,0,.044,.25,xn),t.box(.22,.004,.11,0,0,-.12,Je,.55),t.box(.004,.06,.11,.115,0,-.12,Je,.5),t.box(.004,.06,.11,-.115,0,-.12,Je,.5);for(const l of[-1,1])t.box(.016,.016,.42,l*.022,-.054,.12,Je);for(const[l,u,f,d]of[[.046,.048,.3,1],[-.046,.048,.3,1],[.046,-.048,.22,-1],[-.046,-.048,.22,-1],[.046,.048,-.02,1],[-.046,.048,-.02,1]])t.pdc(l,u,f,d);t.cyl(.055,.06,.06,-.225,Je,14),t.bell(.072,-.255,.17),t.windows(.045,.012,.18,.33,7),t.windows(.026,.07,.09,.15,3),t.light(-.116,0,-.12,br),t.light(.116,0,-.12,Or),t.light(0,.096,.1,li);const i=t.build(),r=xs(37);r.box(.075,.065,.085,0,0,.3),r.box(.076,.016,.05,0,.034,.3,xn),r.box(.04,.012,.004,0,.012,.343,Sr),r.box(.022,.022,.52,0,0,.03,Je);for(const[l,u]of[.19,.1,.01,-.08].entries())for(const[f,d]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const p=(l+(f>0?1:0)+(d>0?1:0))%3===0;r.box(.046,.036,.08,f*.026,d*.021,u,p?xn:_t,.8+r.r()*.3)}r.box(.13,.003,.07,0,.026,-.17,Je,.55),r.cyl(.04,.046,.05,-.2,Je),r.bell(.055,-.225,.13),r.windows(.0385,.01,.27,.33,3),r.light(-.07,.03,-.17,br),r.light(.07,.03,-.17,Or),r.light(0,.045,.3,li);const s=r.build(),o=xs(41);o.box(.05,.05,.07,0,0,0),o.cyl(.047,.012,.025,.05,_t,18),o.box(.004,.004,.05,0,0,.07,Je);for(const l of[-1,1])o.box(.16,.004,.045,l*.11,0,0,Je,.45),o.box(.03,.006,.006,l*.04,0,0,Je);o.box(.05,.008,.012,0,.029,0,xn),o.bell(.02,-.035,.03),o.light(0,.03,.02,li,.006);const c=o.build(),a=[e,i,s];return a.probe=c,a}function Sp(n){const e=aM(),t=new qa({color:"#d4d8de",map:e,roughnessMap:e,metalness:.35,roughness:.62,emissive:"#06070a"});return t.onBeforeCompile=i=>{i.uniforms.uT=n,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute float kind; attribute float tint; attribute vec3 iPaint; attribute float iSun; attribute float iSeed; attribute float iHull; attribute float iLit;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vKind = kind; vTint = tint; vPaint = iPaint; vSun = iSun; vSeed = iSeed; vHull = iHull; vLit = iLit;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uT;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit;
        float isK(float k) { return 1.0 - step(0.5, abs(vKind - k)); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float dark = isK(1.0) + isK(7.0);
        float paint = isK(2.0);
        vec3 base = mix(vec3(vHull), vec3(0.24, 0.25, 0.28), dark) * vTint;
        diffuseColor.rgb *= mix(base, vPaint * 0.9 + 0.04, paint);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.7, isK(1.0)) ;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float blink = step(fract(uT * 0.7 + vSeed), 0.06);
          float flash = step(fract(uT * 0.45 + vSeed * 1.7), 0.03);
          totalEmissiveRadiance += isK(3.0) * vec3(1.6, 1.1, 0.55) * vLit;
          totalEmissiveRadiance += isK(4.0) * vec3(2.2, 0.1, 0.06) * (0.35 + blink * 0.6) * vLit;
          totalEmissiveRadiance += isK(5.0) * vec3(0.08, 2.2, 0.45) * (0.35 + blink * 0.6) * vLit;
          totalEmissiveRadiance += isK(6.0) * vec3(2.2) * flash * vLit;
          totalEmissiveRadiance += isK(7.0) * vec3(0.6, 0.9, 1.6) * vLit;
          totalEmissiveRadiance += paint * vPaint * 0.05;
        }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        reflectedLight.directDiffuse *= vSun;
        reflectedLight.directSpecular *= vSun;`)},t}function lM(n){return new It({uniforms:{uT:n},vertexShader:`${wi}
      attribute float part; attribute float iPow; attribute float iSeed; attribute vec3 iTint;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        mat4 m = modelMatrix * instanceMatrix;
        vec3 origin = (m * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vec3 ax = mat3(m) * vec3(0.0, 0.0, -1.0);
        float len = length(ax);
        ax /= max(len, 1e-6);
        float wid = length(mat3(m) * vec3(1.0, 0.0, 0.0));
        vec3 toCam = normalize(cameraPosition - origin);
        vec3 wp;
        if (part < 0.5) {
          // The jet: a ribbon along the drive axis, turned to face the camera.
          vec3 side = normalize(cross(ax, toCam) + vec3(1e-6));
          wp = origin + ax * (position.y * len) + side * position.x * wid;
        } else {
          // The flare at the nozzle: a camera-facing disc.
          vec3 r = normalize(cross(toCam, vec3(0.0, 1.0, 0.0)) + vec3(1e-6, 0.0, 0.0));
          vec3 u = cross(r, toCam);
          wp = origin + (r * position.x + u * position.y) * wid * 5.0 + ax * wid * 0.5;
        }
        vQ = position.xy; vPart = part; vPow = iPow; vSeed = iSeed; vTint = iTint;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
        ${Ti}
      }`,fragmentShader:`${Ei}
      uniform float uT;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        ${Ai}
        if (vPow <= 0.0) discard;
        float flick = 0.88 + 0.12 * sin(uT * 53.0 + vSeed * 17.0) * sin(uT * 31.0 + vSeed * 5.0);
        vec3 col;
        if (vPart < 0.5) {
          float v = clamp(vQ.y, 0.0, 1.0);
          float u = vQ.x;
          float w = 0.16 * (1.0 + v * 1.6);
          float core = exp(-pow(u / (w * 0.35), 2.0)) * pow(1.0 - v, 1.4);
          float sheath = exp(-pow(u / w, 2.0)) * pow(1.0 - v, 2.2);
          // Shock diamonds: bright knots that fade down the jet.
          float diam = (0.5 + 0.5 * cos(v * 70.0 - uT * 4.0)) * exp(-v * 9.0);
          float k = core * (1.0 + diam * 2.5) * 5.0 + sheath * 0.9;
          col = mix(vTint, vec3(1.0, 0.97, 0.92), clamp(core * 1.2, 0.0, 1.0)) * k;
          col *= smoothstep(0.0, 0.02, v);
        } else {
          float r = length(vQ);
          float k = exp(-r * r * 18.0) * 3.0 + exp(-r * 5.0) * 0.25 + exp(-abs(vQ.y) * 60.0) * exp(-abs(vQ.x) * 3.0) * 0.4;
          col = mix(vTint, vec3(1.0), 0.6) * k;
        }
        gl_FragColor = vec4(col * vPow * flick, 1.0);
      }`,blending:On,transparent:!0,depthWrite:!1})}function uM(){return new It({uniforms:{uPR:{value:1}},vertexShader:`${wi}
      attribute vec3 color; attribute float size;
      uniform float uPR; varying vec3 vCol;
      void main() {
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPR;
        ${Ti}
      }`,fragmentShader:`${Ei}
      varying vec3 vCol;
      void main() {
        ${Ai}
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float k = exp(-r * r * 5.0) + exp(-abs(p.y) * 40.0) * (1.0 - r) * 0.35;
        if (k < 0.01) discard;
        gl_FragColor = vec4(vCol * k, 1.0);
      }`,blending:On,transparent:!0,depthWrite:!1})}function bp(n,e){const t=n.clone(),i=new $a(t,Wf||(Wf=Sp(e)),1),r=(a,l)=>{const u=new As(new Float32Array(l),l.length);return t.setAttribute(a,u),u},s=r("iPaint",[.6,.6,.6]),o=r("iSun",[1]),c=r("iLit",[0]);return r("iSeed",[Math.random()]),r("iHull",[.95]),i.setMatrixAt(0,new Dt),i.frustumCulled=!1,i.userData.set=(a,l,u)=>{const f=new tt(a);s.setXYZ(0,f.r,f.g,f.b),s.needsUpdate=!0,o.setX(0,l),o.needsUpdate=!0,c.setX(0,u?1:0),c.needsUpdate=!0},i}let Wf=null;function dM(n,e){const t={value:0},i=cM(),r=[...i,i.probe],s=Sp(t),o=r.map(N=>{const U=N.clone(),B=new $a(U,s,e);B.instanceMatrix.setUsage(pr);const Z=(K,se)=>{const ee=new As(new Float32Array(e*se),se);return ee.setUsage(pr),U.setAttribute(K,ee),ee};return B.userData={paint:Z("iPaint",3),sun:Z("iSun",1),seed:Z("iSeed",1),hull:Z("iHull",1),n:0},Z("iLit",1).array.fill(1),B.frustumCulled=!1,B.count=0,n.add(B),B}),c=new hp;c.setAttribute("position",new mt([-1,-.02,0,1,-.02,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),c.setAttribute("part",new mt([0,0,0,0,1,1,1,1],1)),c.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]);const a=(N,U)=>{const B=new As(new Float32Array(e*U),U);return B.setUsage(pr),c.setAttribute(N,B),B},l=a("iPow",1),u=a("iSeed",1),f=a("iTint",3),d=new $a(c,lM(t),e);d.instanceMatrix.setUsage(pr),d.frustumCulled=!1,d.count=0,d.renderOrder=2,n.add(d);const p=new zt,g=new Float32Array(e*3),_=new Float32Array(e*3),m=new Float32Array(e);p.setAttribute("position",new Zt(g,3).setUsage(pr)),p.setAttribute("color",new Zt(_,3).setUsage(pr)),p.setAttribute("size",new Zt(m,1).setUsage(pr));const h=uM(),v=new ap(p,h);v.frustumCulled=!1,v.renderOrder=3,n.add(v);const w=new Dt,y=new Gi,b=new D,M=new D,A=new D(0,1,0),x=new tt;let E=0,C=0,R=0;const L=new tt(.35,.6,1);return{geometries:i,uT:t,begin(N,U){t.value=N,h.uniforms.uPR.value=U;for(const B of o)B.userData.n=0;E=C=R=0},add(N,U,B,Z,K,se,ee,ae,fe,Be,Fe,Ut){if(!(R>=e)){if(R++,M.copy(U).add(B),w.lookAt(M,U,Math.abs(B.y)>.99?b.set(1,0,0):A),y.setFromRotationMatrix(w),Fe>1.5){const We=o[N],ve=We.userData.n++;w.compose(U,y,b.set(Z[0],Z[1],Z[2])),We.setMatrixAt(ve,w),x.set(K),We.userData.paint.setXYZ(ve,x.r,x.g,x.b),We.userData.sun.setX(ve,Ut),We.userData.seed.setX(ve,ee*.137%1),We.userData.hull.setX(ve,se)}if(ae){const We=E++;M.set(0,0,N===1?-.43:N===3?-.07:-.36).multiply(b.set(Z[0],Z[1],Z[2])).applyQuaternion(y).add(U);const ve=1.9*fe*Z[2];w.compose(M,y,b.set(.06*Z[0]*(N===3?.5:1),1,ve)),d.setMatrixAt(We,w),l.setX(We,1),u.setX(We,ee*.371%1),f.setXYZ(We,L.r,L.g,L.b)}if(Be&&Be[0]>0){const We=C++;g[We*3]=U.x,g[We*3+1]=U.y,g[We*3+2]=U.z,x.set(ae?"#cfe8ff":K);const ve=Be[1]*(ae?2.2:1);_[We*3]=x.r*ve,_[We*3+1]=x.g*ve,_[We*3+2]=x.b*ve,m[We]=Be[0]}}},end(){for(const N of o)if(N.count=N.userData.n,!!N.count){N.instanceMatrix.needsUpdate=!0;for(const U of["paint","sun","seed","hull"])N.userData[U].needsUpdate=!0}d.count=E,E&&(d.instanceMatrix.needsUpdate=!0,l.needsUpdate=u.needsUpdate=f.needsUpdate=!0),p.setDrawRange(0,C),C&&(p.attributes.position.needsUpdate=!0,p.attributes.color.needsUpdate=!0,p.attributes.size.needsUpdate=!0)}}}function Xf(n,e,t){const i=xs(e*31+7),r=pi(e*31+7),s=n,o=(f,d,p,g,_=_t,m=!0,h=0)=>{for(let v=0;v<g;v++){const w=v/g*Math.PI*2,y=new _n(d,2*Math.PI*f/g*1.02,p);if(y.rotateZ(w).translate(Math.cos(w)*f,Math.sin(w)*f,h),i.add(y,v%7===3?xn:_,.9+r()*.2),m&&v%2===0){const b=new _n(.004*s,2*Math.PI*f/g*.6,.012*s);b.rotateZ(w).translate(Math.cos(w)*(f+d/2+.001),Math.sin(w)*(f+d/2+.001),h+(r()-.5)*p*.6),i.add(b,Sr)}}},c=(f,d,p,g=0,_=Je)=>{const m=new _n(d,f,d);m.translate(0,f/2,0).rotateZ(p).translate(0,0,g),i.add(m,_)},a=(f,d,p,g=_t,_=16,m=0,h=0)=>i.cyl(f,f,d,p,g,_,m,h);if(e===0){o(s,s*.2,s*.3,40),o(s*.8,s*.03,s*.32,40,Je,!1);for(let f=0;f<6;f++)c(s*.8,s*.05,f/6*Math.PI*2+.26);a(s*.12,s*2.6,0,_t),a(s*.24,s*.45,s*.3,_t),a(s*.26,s*.06,s*.55,xn),a(s*.2,s*.35,-s*.55,Je);for(const f of[.95,1.15,1.3])a(s*.2,s*.06,s*f,Je);for(let f=0;f<4;f++){const d=f/4*Math.PI*2,p=new _n(s*.05,s*.35,s*.05);p.translate(0,s*.3,0).rotateZ(d).translate(0,0,s*1.05),i.add(p,Je),i.light(Math.cos(d+Math.PI/2)*s*.48,Math.sin(d+Math.PI/2)*s*.48,s*1.05,f%2?br:Or,s*.04)}for(let f=0;f<3;f++){const d=r()*Math.PI*2;i.box(s*.12,s*.12,s*.24,Math.cos(d)*s*1.12,Math.sin(d)*s*1.12,0,_t)}i.light(0,0,s*1.32,li,s*.05),i.light(0,0,-s*.75,li,s*.05)}else if(e===1){a(s*.07,s*3.2,0,Je,10);for(let f=0;f<7;f++){const d=(f-3)*s*.4+(f>2?s*.3:-s*.3);a(s*(.12+r()*.05),s*.26,d,f===3?xn:_t,14,(r()-.5)*s*.1,(r()-.5)*s*.1),i.greeble(s*.2,s*.2,s*.26,0,0,d,3)}for(const f of[-.13,.13]){o(s*.8,s*.1,s*.12,32,_t,!0,f*s);for(let d=0;d<4;d++)c(s*.8,s*.025,d/4*Math.PI*2+(f>0?.4:0),f*s)}for(const f of[-1.35,1.35])for(const d of[-1,1])i.box(s*.7,s*.03,s*.03,d*s*.45,0,f*s,Je),i.box(s*.02,s*1.5,s*.3,d*s*.95,0,f*s,Je,.45),i.box(s*.024,s*1.52,s*.012,d*s*.95,0,f*s,_t,.8);i.light(0,0,s*1.62,li,s*.05),i.light(s*1.2,0,s*1.35,Or,s*.04),i.light(-s*1.2,0,s*1.35,br,s*.04)}else{i.box(s*.9,s*.7,s*.8,0,0,0,_t),i.greeble(s*.9,s*.7,s*.8,0,0,0,16),i.box(s*1.1,s*.18,s*.95,0,s*.3,0,Je),i.box(s*.92,s*.08,s*.82,0,-s*.22,0,xn),a(s*.32,s*.5,s*.55,_t),a(s*.22,s*.25,s*.85,Je);for(const f of[-1,1])i.box(s*1.1,s*.1,s*.1,f*s*.95,-s*.05,0,Je),a(s*.17,s*.45,0,_t,14,f*s*1.5,-s*.05),i.box(s*.6,s*.02,s*.3,f*s*.9,s*.25,-s*.2,Je,.5),i.light(f*s*1.68,-s*.05,0,f>0?Or:br,s*.05);i.add(new vn(s*.015,s*.04,s*1.6,6).translate(0,-s*1.1,0),Je),i.light(0,-s*1.9,0,li,s*.05);for(let f=0;f<4;f++)i.box(s*.16,s*.16,s*.16,(f-1.5)*s*.22,s*.45,-s*.25,Je);for(let f=-1;f<=1;f++)for(let d=0;d<9;d++)r()<.75&&i.box(s*.05,s*.02,s*.004,(d-4)*s*.09,f*s*.18,s*.402,Sr)}const l=i.build(1),u=bp(l,t);return u.userData.spin=e===0?.4:.08,u}function fM(n,e,t,i,r,s,o,c){const a=Math.max(.25,e.size*.14),l=xs(e.id*17+t*101+r),u=n==="shipyard"||n==="skimmer";if(n==="shipyard"){const m=e.size*1.35;l.add(new vr(m,a*.06,8,96),_t),l.add(new vr(m,a*.025,6,96).translate(0,0,a*.16),Je),l.add(new vr(m,a*.025,6,96).translate(0,0,-a*.16),Je);for(let h=0;h<3;h++){const v=h/3*Math.PI*2+.4,w=y=>y.rotateZ(v).translate(Math.cos(v)*m,Math.sin(v)*m,0);for(const y of[-1,1])l.add(w(new _n(a*.9,a*.05,a*.05).translate(a*.45,0,y*a*.16)),Je);for(const y of[.2,.55,.88])l.add(w(new _n(a*.04,a*.04,a*.36).translate(a*y,0,0)),_t);l.add(w(new _n(a*.5,a*.1,a*.12).translate(a*.52,0,0)),h===0?xn:_t),l.add(w(new _n(a*.04,a*.04,a*.04).translate(a*.9,0,a*.18)),h%2?br:Or)}}else if(n==="skimmer"){const m=e.size*1.06;for(let h=0;h<r;h++){const v=h/r*Math.PI*2+t,w=y=>y.rotateZ(v+Math.PI/2).translate(Math.cos(v)*m,Math.sin(v)*m,0);l.add(w(new vn(a*.14,a*.26,a*.35,10)),_t),l.add(w(new vn(a*.15,a*.15,a*.04,10).translate(0,a*.18,0)),xn),l.add(w(new Oi(a*.17,10,8).translate(0,-a*.3,0)),Je),l.add(w(new vn(a*.05,a*.09,a*.1,8).translate(0,-a*.5,0)),Je),l.add(w(new _n(a*.03,a*.03,a*.03).translate(0,-a*.56,0)),li)}}else if(n==="defence"){const m=1+(r-1)*.25;l.add(new vn(a*.5*m,a*.62*m,a*.22,8).translate(0,a*.11,0),Je),l.add(new vn(a*.52*m,a*.52*m,a*.04,8).translate(0,a*.23,0),xn),l.box(a*.55*m,a*.22,a*.5,0,a*.36,0,_t);for(let h=0;h<r;h++){const v=(h-(r-1)/2)*a*.16;l.add(new _n(a*.06,a*.06,a*(.8+r*.12)).rotateX(-.45).translate(v,a*.52,a*.45),Je)}r>1&&l.add(new Oi(a*.16,12,8,0,Math.PI*2,0,Math.PI/2).translate(-a*.32*m,a*.47,-a*.15),_t),l.box(a*.04,a*.04,a*.04,0,a*.5,-a*.24,br)}else if(n==="exchange"){l.add(new vn(a*.1,a*.34,a*1.6,8).translate(0,a*.8,0),_t),l.add(new vn(a*.36,a*.42,a*.12,8).translate(0,a*.06,0),xn),l.add(new vn(a*.015,a*.015,a*3,4).translate(0,a*3.1,0),Je);const m=a*(.42+r*.12);for(let h=0;h<r;h++){l.add(new vr(m,a*.07,8,32).rotateX(Math.PI/2).translate(0,a*(4.6+h*.18),0),h===0?xn:_t);for(let v=0;v<12;v++){const w=v/12*Math.PI*2;l.box(a*.03,a*.025,a*.05,Math.cos(w)*(m+a*.07),a*(4.6+h*.18),Math.sin(w)*(m+a*.07),Sr)}}l.add(new vn(a*.14,a*.14,a*.25,8).translate(0,a*4.6,0),_t),l.box(a*.05,a*.05,a*.05,0,a*4.8+r*a*.18,0,li)}else if(n==="lab"){l.box(a*.8,a*.28,a*.65,0,a*.14,0,_t),l.box(a*.82,a*.05,a*.67,0,a*.3,0,xn);for(let m=0;m<6;m++)l.box(a*.08,a*.04,a*.01,(m-2.5)*a*.12,a*.16,a*.33,Sr);l.add(new vn(a*.05,a*.08,a*.9,6).translate(a*.2,a*.75,0),Je);for(let m=0;m<r;m++){const h=new Oi(a*(.3-m*.05),14,6,0,Math.PI*2,0,Math.PI/3.2).rotateX(Math.PI-.6).rotateY(m*2.1);l.add(h.translate(a*.2,a*(.75+m*.3),0),_t)}l.add(new vn(a*.01,a*.01,a*.6,3).translate(-a*.28,a*.6,-a*.2),Je),l.box(a*.04,a*.04,a*.04,-a*.28,a*.92,-a*.2,li)}else{const m=a*(.8+(r-1)*.4);l.box(m,a*.1,a*.7,0,a*.05,0,Je),l.box(m,a*.03,a*.05,0,a*.12,a*.3,xn),l.box(m*.9,a*.05,a*.08,0,a*.2,-a*.15,_t);for(let h=0;h<r;h++){const v=(h-(r-1)/2)*a*.4;for(const[w,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])l.add(new _n(a*.025,a*.85,a*.025).rotateZ(w*.12).rotateX(-y*.12).translate(v+w*a*.06,a*.52,y*a*.06),Je);l.add(new vn(a*.1,a*.05,a*.18,8).translate(v,a*.28,-a*.15),_t),l.box(a*.12,a*.1,a*.1,v+a*.12,a*.15,a*.18,_t),l.box(a*.08,a*.03,a*.005,v+a*.12,a*.17,a*.23,Sr),l.box(a*.03,a*.03,a*.03,v,a*.97,0,li)}}const f=l.build(1);let d;i?(d=bp(f,s),d.userData.set(c,1,!0)):d=new Lt(f,o);const p=new In;if(p.add(d),u)return p.rotation.x=n==="shipyard"?Math.PI/2+.35:Math.PI/2+.25+t*.3,p;const g=pi(e.id*17+t*101+(n==="mine"?5:0)),_=new D(g()-.5,(g()-.5)*.9,g()-.5).normalize();return p.position.copy(_).multiplyScalar(e.size*(e.kind==="asteroid"?1.05:.99)),p.quaternion.setFromUnitVectors(new D(0,1,0),_),p}function hM(n,e,t,i){let r=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^Math.imul(i,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function pM(n,e,t,i){const r=Math.floor(n),s=Math.floor(e),o=Math.floor(t),c=n-r,a=e-s,l=t-o,u=c*c*(3-2*c),f=a*a*(3-2*a),d=l*l*(3-2*l),p=(_,m,h)=>_+(m-_)*h,g=(_,m,h)=>hM(r+_,s+m,o+h,i);return p(p(p(g(0,0,0),g(1,0,0),u),p(g(0,1,0),g(1,1,0),u),f),p(p(g(0,0,1),g(1,0,1),u),p(g(0,1,1),g(1,1,1),u),f),d)}function ca(n,e,t,i,r){let s=0,o=.5,c=1;for(let a=0;a<r;a++)s+=pM(n*c,e*c,t*c,i+a)*o,c*=2.03,o*=.5;return s}function wp(n,e,t=5,i=1){const r=pi(n*97+1);let s=new id(e,t);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=tM(s);const o=Array.from({length:5},()=>({d:new D(r()-.5,r()-.5,r()-.5).normalize(),f:.6+r()*1.2,ph:r()*6.28,a:.05+r()*.08})),c=Array.from({length:7+Math.floor(r()*5)},()=>({d:new D(r()-.5,r()-.5,r()-.5).normalize(),size:.15+r()*.3})),a=new D(1.2+r()*.6,.75+r()*.2,.85+r()*.35),l=Math.floor(n)%1e3,u=s.attributes.position,f=new D,d=new D,p=[],g=r()<.35,_=g?[1.08,.95,.82]:[1,.98,.95],m=g?.26:.16;for(let h=0;h<u.count;h++){f.fromBufferAttribute(u,h),d.copy(f).normalize();let v=1;for(const b of o)v+=b.a*Math.sin(d.dot(b.d)*b.f*3+b.ph);v+=(Math.abs(ca(d.x*2.2,d.y*2.2,d.z*2.2,l+7,3)-.5)-.15)*.25*i;let w=0;for(const b of c){const M=d.distanceTo(b.d)/b.size;if(M<1){const A=1-M*M;v-=.11*A*b.size*3,w=Math.max(w,A)}else M<1.3&&(v+=.025*(1-(M-1)/.3)*b.size*3)}v+=(ca(d.x*7,d.y*7,d.z*7,l+5,3)-.5)*.09*i,f.multiplyScalar(v).multiply(a),u.setXYZ(h,f.x,f.y,f.z);let y=m+(ca(d.x*2.5,d.y*2.5,d.z*2.5,l+9,4)-.5)*.18+(v-1)*.25-w*.04;y+=(ca(d.x*12,d.y*12,d.z*12,l+2,2)-.5)*.08,y=Math.max(.05,Math.min(.5,y)),p.push(y*_[0],y*_[1],y*_[2])}return s.setAttribute("color",new mt(p,3)),s.computeVertexNormals(),s}function Tp(n={}){const e=new qa({vertexColors:!0,roughness:.92,metalness:.04}),t=n.scale??6,i=!!n.tumble;return e.onBeforeCompile=r=>{r.uniforms.uT=n.uT||{value:0},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        uniform float uT; varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz;
        mat3 rotAxis(vec3 a, float t) { float c = cos(t), s = sin(t); vec3 u = normalize(a); return mat3(c + u.x*u.x*(1.0-c), u.y*u.x*(1.0-c) + u.z*s, u.z*u.x*(1.0-c) - u.y*s, u.x*u.y*(1.0-c) - u.z*s, c + u.y*u.y*(1.0-c), u.z*u.y*(1.0-c) + u.x*s, u.x*u.z*(1.0-c) + u.y*s, u.y*u.z*(1.0-c) - u.x*s, c + u.z*u.z*(1.0-c)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${i?`float fid = float(gl_InstanceID);
        vec3 ax = vec3(fract(sin(fid * 12.9898) * 43758.5), fract(sin(fid * 78.233) * 43758.5), fract(sin(fid * 37.719) * 43758.5)) - 0.5;
        mat3 tum = rotAxis(ax + 1e-3, uT * (0.05 + fract(fid * 0.618) * 0.3) + fid);
        objectNormal = tum * objectNormal;`:""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        ${i?"transformed = tum * transformed;":""}
        vObj = transformed;
        vRx = normalMatrix * vec3(1.0, 0.0, 0.0); vRy = normalMatrix * vec3(0.0, 1.0, 0.0); vRz = normalMatrix * vec3(0.0, 0.0, 1.0);`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz;
        ${er}
        float rockH(vec3 p) { return fbm(p, 3) + abs(snoise(p * 0.5)) * 0.5; }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          // Grit and small craters: bump the normal with the gradient of 3D noise.
          vec3 p = vObj * ${t.toFixed(2)};
          float e = 0.08;
          float h0 = rockH(p);
          vec3 g = vec3(rockH(p + vec3(e, 0.0, 0.0)) - h0, rockH(p + vec3(0.0, e, 0.0)) - h0, rockH(p + vec3(0.0, 0.0, e)) - h0) / e;
          vec3 gv = vRx * g.x + vRy * g.y + vRz * g.z;
          normal = normalize(normal - (gv - dot(gv, normal) * normal) * 0.22);
          diffuseColor.rgb *= 0.85 + h0 * 0.3;
        }`)},e}const tl={mat:null};function qf(n){const e=wp(n.id,n.size,5);return tl.mat||(tl.mat=Tp({scale:5})),new Lt(e,tl.mat)}function mM(n,e,t,i,r){const s=new In,o=i==="high"?2400:900,c=[0,1,2,3].map(g=>wp(500+g*17,1,2,1.3)),a=Tp({scale:4,tumble:!0,uT:r}),l=pi(Math.floor(n*131)),u=[],f=3;for(let g=0;g<f;g++){const _=new In,m=n+(e-n)*g/f,h=n+(e-n)*(g+1)/f;_.userData.omega=Math.PI*2/t((m+h)/2),s.add(_),u.push(_);const v=Math.ceil(o/f/c.length);for(const w of c){const y=new $a(w,a,v),b=new Dt,M=new Gi,A=new D,x=new D;for(let E=0;E<v;E++){const C=m+l()*(h-m),R=l()*Math.PI*2,L=(l()+l()+l()-1.5)*1.6;A.set(Math.cos(R)*C,L,Math.sin(R)*C),M.setFromEuler(new ir(l()*6,l()*6,l()*6));const N=.04+Math.pow(l(),4)*.32;b.compose(A,M,x.setScalar(N)),y.setMatrixAt(E,b)}y.frustumCulled=!1,_.add(y)}}const d=new oc(n-4,e+4,256,4).rotateX(-Math.PI/2),p=new Lt(d,new It({uniforms:{uR0:{value:n-4},uR1:{value:e+4}},vertexShader:`#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vW;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`#include <logdepthbuf_pars_fragment>
      ${er}
      uniform float uR0, uR1; varying vec3 vW;
      void main() {
        #include <logdepthbuf_fragment>
        float rr = length(vW.xz);
        float u = (rr - uR0) / (uR1 - uR0);
        float prof = smoothstep(0.0, 0.3, u) * smoothstep(1.0, 0.7, u);
        float ang = atan(vW.z, vW.x);
        float n = snoise(vec3(cos(ang) * 6.0, sin(ang) * 6.0, rr * 0.4)) * 0.5 + 0.5;
        float streaks = snoise(vec3(cos(ang) * 40.0, sin(ang) * 40.0, rr * 2.5)) * 0.5 + 0.5;
        float k = prof * (0.4 + n * 0.6) * (0.6 + streaks * 0.4);
        gl_FragColor = vec4(vec3(0.55, 0.47, 0.38) * k * 0.035, 1.0);
      }`,blending:On,transparent:!0,depthWrite:!1,side:Jn}));return s.add(p),{group:s,update(g){for(const _ of u)_.rotation.y=-_.userData.omega*g},dispose(){for(const g of c)g.dispose();d.dispose()}}}const Ys=0,Ks=1,js=2,nl=3,Yf=4,il=5;function gM(n,e=4096){const t={value:0},i=new hp;i.setAttribute("position",new mt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);const r={},s=(_,m)=>{const h=new As(new Float32Array(e*m),m);h.setUsage(pr),i.setAttribute(_,h),r[_]=h};s("aP0",3),s("aVel",3),s("aDir",3),s("aCol",3),s("aTime",2),s("aSize",2),s("aKind",2),r.aTime.array.fill(-1e6),i.instanceCount=e;const o=new It({uniforms:{uT:t,uPx:{value:.002}},vertexShader:`${wi}
      attribute vec3 aP0, aVel, aDir, aCol; attribute vec2 aTime, aSize, aKind;
      uniform float uT, uPx;
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        float age = (uT - aTime.x) / aTime.y; // 0..1 over its life
        vAge = age;
        vKind = aKind.x; vSeed = aKind.y; vCol = aCol; vQ = position.xy;
        if (age < 0.0 || age > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
        float t = age * aTime.y;
        // Debris and sparks slow a little (a tidy look, not physics).
        float drag = aKind.x == ${js}.0 ? 1.2 : aKind.x == ${Ks}.0 ? 2.5 : 0.0;
        float travel = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
        vec3 p = aP0 + aVel * travel;
        float size = mix(aSize.x, aSize.y, aKind.x == ${Ks}.0 ? sqrt(age) : age);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Far away, a flash only a pixel or two across fades rather than sparkles.
        vFade = aKind.x == ${Ys}.0 || aKind.x == ${Ks}.0 || aKind.x == ${nl}.0 ? clamp(size / (uPx * -mv.z) / 4.0, 0.12, 1.0) : 1.0;
        // Rounds, beams and sparks never get thinner than about a pixel.
        if (aKind.x == ${js}.0 || aKind.x == ${Yf}.0 || aKind.x == ${il}.0) size = max(size, uPx * -mv.z * (aKind.x == ${il}.0 ? 2.0 : 1.3));
        vec3 dirW = aDir;
        if (aKind.x == ${js}.0) dirW = -aVel * exp(-drag * t) * 0.06;
        float len = length(dirW);
        vLen = len;
        if (len > 1e-5) {
          // A streak from p back along dirW, a fixed width across.
          vec4 mv2 = modelViewMatrix * vec4(p + dirW, 1.0);
          vec2 d = mv2.xy - mv.xy;
          float dl = length(d);
          vec2 ax = dl > 1e-6 ? d / dl : vec2(1.0, 0.0);
          vec2 side = vec2(-ax.y, ax.x);
          float u = position.y * 0.5 + 0.5; // 0 at the head, 1 at the tail
          vec3 base = mix(mv.xyz, mv2.xyz, u);
          // Across by the width, and past both ends by it so the caps are round.
          base.xy += side * position.x * size + ax * position.y * size;
          mv = vec4(base, 1.0);
        } else {
          mv.xy += position.xy * size;
        }
        gl_Position = projectionMatrix * mv;
        ${Ti}
      }`,fragmentShader:`${Ei}
      ${er}
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        ${Ai}
        if (vAge < 0.0 || vAge > 1.0) discard;
        float r = length(vQ);
        vec3 col;
        if (vKind < 0.5) {
          // Flash: hot core, soft halo, gone fast.
          float k = (exp(-r * r * 6.0) * 1.5 + exp(-r * 3.5) * 0.35) * smoothstep(1.0, 0.6, r);
          col = vCol * k * pow(1.0 - vAge, 2.0);
        } else if (vKind < 1.5) {
          // Fireball: billowing noise, cooling from white-yellow to red, thinning out.
          float n = fbm(vec3(vQ * 1.8, vSeed * 10.0 + vAge * 1.5), 4) * 0.5 + 0.5;
          float edge = smoothstep(1.0, 0.25, r + (n - 0.5) * 0.7);
          float dens = edge * smoothstep(0.15, 0.6, n + (1.0 - vAge) * 0.4 - r * 0.3);
          float temp = (1.0 - vAge) * (0.6 + n * 0.6) - r * 0.25;
          vec3 ramp = mix(vec3(0.6, 0.05, 0.01), vec3(1.0, 0.45, 0.08), smoothstep(0.05, 0.45, temp));
          ramp = mix(ramp, vec3(1.0, 0.9, 0.7), smoothstep(0.5, 0.95, temp));
          col = ramp * vCol * dens * (1.0 - vAge * 0.7) * (1.0 + smoothstep(0.6, 1.0, temp) * 2.0);
        } else if (vKind < 2.5) {
          // Spark: a thin hot streak, cooling.
          float k = exp(-vQ.x * vQ.x * 4.0) * smoothstep(1.0, 0.2, abs(vQ.y));
          vec3 hot = mix(vCol, vec3(1.0, 0.95, 0.85), 1.0 - vAge);
          col = hot * k * (1.0 - vAge) * 2.0;
        } else if (vKind < 3.5) {
          // Shockwave: a thin bright ring.
          float k = exp(-pow((r - 0.85) / 0.06, 2.0));
          col = vCol * k * pow(1.0 - vAge, 1.5);
        } else if (vKind < 4.5) {
          // Tracer round: a short bright dash with a hotter head.
          float across = exp(-vQ.x * vQ.x * 3.0);
          float along = smoothstep(1.0, 0.2, vQ.y) * smoothstep(-1.0, -0.85, vQ.y);
          float head = exp(-pow((vQ.y + 0.8) / 0.2, 2.0));
          col = (vCol * along + vec3(1.0, 0.95, 0.9) * head * 1.5) * across * 1.6;
        } else {
          // Railgun beam: a white-hot core in a coloured sheath, fading fast.
          float core = exp(-vQ.x * vQ.x * 30.0);
          float sheath = exp(-vQ.x * vQ.x * 3.0);
          float fade = pow(1.0 - vAge, 2.0);
          col = (vec3(1.0) * core * 4.0 + vCol * sheath * 1.2) * fade * smoothstep(1.0, 0.85, abs(vQ.y));
        }
        gl_FragColor = vec4(col * vFade, 1.0);
      }`,blending:On,transparent:!0,depthWrite:!1,side:Jn}),c=new Lt(i,o);c.frustumCulled=!1,c.renderOrder=5,n.add(c);let a=0,l=!1;const u=new tt;function f(_,m,h,v,w,y,b,M,A=0,x=1){const E=a;a=(a+1)%e,r.aP0.setXYZ(E,m.x,m.y,m.z),r.aVel.setXYZ(E,h?h.x:0,h?h.y:0,h?h.z:0),r.aDir.setXYZ(E,v?v.x:0,v?v.y:0,v?v.z:0),u.set(w).multiplyScalar(x),r.aCol.setXYZ(E,u.r,u.g,u.b),r.aTime.setXY(E,t.value+A,y),r.aSize.setXY(E,b,M),r.aKind.setXY(E,_,Math.random()),l=!0}const d=new D,p=new D,g=()=>d.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{uT:t,update(_,m){if(t.value=_,m&&(o.uniforms.uPx.value=m),l){for(const h in r)r[h].needsUpdate=!0;l=!1}},explosion(_,m=1){f(Ys,_,null,null,"#ffffff",.16,.3*m,1.5*m,0,3.5),f(nl,_,null,null,"#9fd4ff",.5,.15*m,1.9*m,0,1.2),f(Ks,_,g().multiplyScalar(.2),null,"#ffffff",.75+Math.random()*.2,.25*m,.95*m,.02,2.2);for(let h=0;h<2;h++)f(Ks,p.copy(_).add(g().multiplyScalar(.25*m)),g().multiplyScalar(.4),null,"#ffffff",.55,.12*m,.5*m,.08+h*.12,2);for(let h=0;h<16;h++)f(js,_,g().multiplyScalar((1.5+Math.random()*3.5)*m),null,"#ff9a40",.5+Math.random()*.8,.025*m,.015*m,0,3);for(let h=0;h<6;h++)f(Ys,_,g().multiplyScalar(.4+Math.random()*.8),null,"#ff7a30",1.5+Math.random()*1.5,.06*m,.025*m,.05,2.5)},impact(_,m,h=!1){f(Ys,_,null,null,m,.15,.1,h?.6:.35,0,1.6);for(let v=0;v<(h?6:3);v++)f(js,_,g().multiplyScalar(1.5+Math.random()*3),null,"#ffd090",.25+Math.random()*.3,.02,.01,0,2.5)},intercept(_){f(Ys,_,null,null,"#dff4ff",.12,.05,.3,0,3)},bolt(_,m,h,v,w,y,b=0){p.subVectors(m,_);const M=d.copy(p).divideScalar(v),A=p.clone().normalize().multiplyScalar(-w);f(Yf,_,M,A,h,v,y,y,b,1.6)},beam(_,m,h,v=.3){p.subVectors(m,_),f(il,m,null,p.clone().negate(),h,v,.045,.02,0,1.4)},ring(_,m,h,v=1.2){f(nl,_,null,null,m,v,h*.3,h,0,1.5)}}}const Ep=`
vec3 dirFromUv(vec2 uv) {
  float phi = uv.x * 6.28318530718;
  float th = (1.0 - uv.y) * 3.14159265359;
  return vec3(-cos(phi) * sin(th), cos(th), sin(phi) * sin(th));
}`,vM=`
${er}
${Ep}
uniform int uKind;   // 0 homeworld, 1 rocky planet, 2 moon, 3 gas giant
uniform int uType;   // biome / subtype
uniform float uSeed;
uniform vec3 uPalA, uPalB, uPalC;
uniform vec4 uStorm[4]; // xyz direction, w size
varying vec2 vUv;

vec3 toS(vec3 c) { return pow(clamp(c, 0.0, 1.0), vec3(1.0 / 2.2)); }

// Impact craters on one scale: bowls, raised rims, central peaks, ejecta
// and (for the young ones) bright rays. Adds to height h and albedo tint a.
void craters(vec3 d, float freq, float density, float depth, float seed, inout float h, inout float a) {
  vec3 p = d * freq;
  vec3 c0 = floor(p);
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 cell = c0 + vec3(float(x), float(y), float(z));
    vec3 hh = hash33(cell + seed);
    if (hh.x > density) continue;
    vec3 cd = normalize(cell + hash33(cell * 1.31 + seed + 4.0));
    float cosd = dot(d, cd);
    if (cosd < 0.0) continue;
    float dist = acos(min(cosd, 1.0)) * freq;
    float R = 0.18 + 0.42 * hh.y * hh.y;
    float r = dist / R;
    if (r > 3.0) continue;
    float k = R * depth;
    float prof;
    if (r < 1.0) prof = -(1.0 - r * r) * 0.8 + (R > 0.42 ? 0.35 * exp(-r * r * 30.0) : 0.0);
    else prof = 0.0;
    prof += 0.32 * exp(-pow((r - 1.0) / 0.16, 2.0));
    prof += r > 1.0 ? 0.05 * exp(-(r - 1.0) * 2.5) : 0.0;
    h += prof * k;
    // Old craters have dark lava-filled floors; young ones throw bright rays.
    if (hh.z > 0.82) {
      vec3 t1 = normalize(cross(cd, vec3(0.3, 1.0, 0.2)));
      vec3 t2 = cross(cd, t1);
      float ang = atan(dot(d, t2), dot(d, t1));
      float rays = pow(0.5 + 0.5 * sin(ang * 23.0 + hh.y * 40.0), 6.0) * pow(0.5 + 0.5 * sin(ang * 9.0 + hh.x * 70.0), 2.0);
      a += (r < 1.15 ? 0.18 : rays * 0.22 * exp(-(r - 1.0) * 0.9) * step(1.0, r));
    } else if (r < 1.0) a -= 0.05 * hh.z;
  }
}

// Long cracks across an icy crust (lineae): 0 off a crack, 1 on one.
float lineae(vec3 d, float s) {
  float l = 0.0;
  for (int i = 0; i < 3; i++) {
    float f = float(i);
    float n = snoise(d * (2.0 + f * 1.7) + s + f * 13.0 + vec3(0.0, fbm(d * 3.0 + f, 3) * 0.6, 0.0));
    l = max(l, exp(-pow(n / 0.025, 2.0)) * (0.6 + 0.4 * snoise(d * 5.0 + f * 3.0)));
  }
  return clamp(l, 0.0, 1.0);
}

void main() {
  vec3 d = dirFromUv(vUv);
  float lat = asin(clamp(d.y, -1.0, 1.0));
  float alat = abs(d.y);
  vec3 col = vec3(0.5);
  float h = 0.5;
  vec3 q = d + uSeed;

  if (uKind == 0) {
    // ---- Homeworld ----
    vec3 w = vec3(fbm(q * 1.3, 4), fbm(q * 1.3 + 5.3, 4), fbm(q * 1.3 + 9.1, 4));
    float cont = fbm(q * 1.25 + w * 0.6, 8);
    float sea = uType == 1 ? -0.32 : uType == 5 ? 0.2 : uType == 2 ? 0.0 : uType == 3 ? 0.02 : uType == 4 ? -0.06 : 0.05;
    float land = cont - sea;
    float mtn = ridged(q * 3.2 + w * 1.2, 7);
    float hgt = land + mtn * smoothstep(0.0, 0.2, land) * 0.32;
    float moist = fbm(q * 2.4 + 17.0, 5) * 0.5 + 0.5;
    float fine = fbm(q * 18.0, 4);
    float iceLine = (uType == 2 ? 0.42 : uType == 1 ? 0.93 : uType == 3 ? 0.9 : 0.8) - hgt * 0.2 + fine * 0.04;
    if (uType == 0 || uType == 5 || uType == 3) {
      // Temperate, ocean and jungle worlds: blue water, green and tan land.
      if (land < 0.0) {
        float k = clamp(1.0 + land * 5.0, 0.0, 1.0);
        col = mix(vec3(0.004, 0.018, 0.055), vec3(0.02, 0.12, 0.17), k * k * k);
        if (uType == 3) col = mix(vec3(0.004, 0.03, 0.04), vec3(0.03, 0.14, 0.12), k * k * k);
      } else {
        float hot = 1.0 - alat;
        float tropics = smoothstep(0.5, 0.65, hot) * smoothstep(0.92, 0.78, hot); // dry belts either side of the equator
        float dry = clamp(moist * 1.2 - 0.05 - tropics * 0.45 + (uType == 3 ? 0.4 : 0.0), 0.0, 1.0);
        vec3 forest = uType == 3 ? vec3(0.025, 0.08, 0.02) : vec3(0.04, 0.09, 0.025);
        vec3 grass = vec3(0.12, 0.15, 0.05);
        vec3 desert = vec3(0.42, 0.30, 0.16);
        col = mix(desert, mix(grass, forest, smoothstep(0.4, 0.8, dry)), smoothstep(0.15, 0.45, dry));
        col = mix(col, vec3(0.3, 0.22, 0.14), smoothstep(0.08, 0.3, hgt - land) * 0.8); // mountains
        col = mix(col, vec3(0.5, 0.45, 0.32), smoothstep(0.0, 0.015, 0.015 - land) * 0.6); // beaches
        col = mix(col, vec3(0.28, 0.32, 0.25), smoothstep(0.65, 0.85, alat)); // tundra
        col *= 0.85 + fine * 0.25;
        col = mix(col, vec3(0.68, 0.7, 0.72), smoothstep(0.32, 0.42, hgt - land) * 0.9); // snow on peaks
      }
    } else if (uType == 1) {
      // Desert: dune seas, dark rock ridges, dry basins and salt pans.
      float dunes = ridged(vec3(d.x * 30.0, d.y * 10.0, d.z * 30.0) + w, 3);
      col = mix(vec3(0.45, 0.24, 0.10), vec3(0.62, 0.40, 0.20), moist);
      col = mix(col, vec3(0.20, 0.11, 0.06), smoothstep(0.15, 0.35, mtn * smoothstep(0.0, 0.3, land)));
      col *= 0.9 + dunes * 0.15;
      col = mix(col, vec3(0.75, 0.70, 0.62), smoothstep(-0.02, -0.12, land) * 0.7);
      hgt = max(hgt, -0.15) + dunes * 0.01;
    } else if (uType == 2) {
      // Ice: white sheets, blue crevasses, a few dark frozen seas.
      float cr = lineae(d, uSeed);
      col = land < 0.0 ? vec3(0.08, 0.18, 0.28) * (0.8 + fine * 0.3) : mix(vec3(0.48, 0.55, 0.62), vec3(0.66, 0.69, 0.72), smoothstep(0.0, 0.3, land));
      col = mix(col, vec3(0.15, 0.3, 0.45), cr * 0.7);
      hgt = max(hgt, -0.05) - cr * 0.02;
    } else {
      // Volcanic: black basalt, rust highlands, glowing lava seams (in aux).
      col = land < 0.0 ? vec3(0.025, 0.018, 0.015) : mix(vec3(0.05, 0.04, 0.035), vec3(0.22, 0.09, 0.04), smoothstep(0.0, 0.4, land + moist * 0.2));
      col *= 0.8 + fine * 0.4;
      hgt = max(hgt, -0.08);
    }
    if (alat > iceLine && uType != 1) col = mix(col, vec3(0.7, 0.73, 0.76), smoothstep(0.0, 0.04, alat - iceLine));
    if (uType == 1 && alat > iceLine) col = mix(col, vec3(0.8, 0.78, 0.74), 0.8);
    h = clamp(max(hgt, uType == 1 ? -1.0 : 0.0) * 0.5 + 0.5, 0.0, 1.0);
    if (land < 0.0 && uType != 1 && uType != 4) h = 0.5 + land * 0.04; // sea floor, below the waterline
  } else if (uKind == 1 || uKind == 2) {
    // ---- Rocky planets and moons ----
    float mare = fbm(q * 1.6, 5);
    float grit = fbm(q * 14.0, 4);
    float hgt = fbm(q * 2.5, 6) * 0.15;
    float a = 0.0;
    int t = uType;
    bool icy = (uKind == 1 && t == 3) || (uKind == 2 && t == 2);
    float cd = icy ? 0.25 : 1.0;
    craters(d, 3.0, 0.35 * cd, 0.10, uSeed, hgt, a);
    craters(d, 7.0, 0.45 * cd, 0.07, uSeed + 1.0, hgt, a);
    craters(d, 16.0, 0.55 * cd, 0.045, uSeed + 2.0, hgt, a);
    craters(d, 38.0, 0.6 * cd, 0.03, uSeed + 3.0, hgt, a);
    if (uKind == 1 && t == 0) {
      // Rust desert: dark albedo provinces, canyons, polar caps.
      float can = ridged(q * 2.0 + 3.0, 5);
      hgt -= smoothstep(0.75, 0.95, can) * 0.06;
      col = mix(vec3(0.20, 0.08, 0.035), vec3(0.50, 0.24, 0.10), smoothstep(-0.2, 0.3, mare));
      col *= 0.85 + grit * 0.2 + a * 0.6;
      col = mix(col, vec3(0.86, 0.84, 0.82), smoothstep(0.86, 0.9, alat + fbm(q * 6.0, 3) * 0.04));
    } else if (uKind == 1 && t == 2) {
      // Thick-clouded world: no surface visible, only swirled cream and sulphur cloud.
      vec3 sw = vec3(fbm(q * 2.0, 4), fbm(q * 2.0 + 7.0, 4), 0.0);
      float c = fbm(vec3(d.x * 2.0, d.y * 7.0, d.z * 2.0) + sw * 1.5 + uSeed, 6);
      col = mix(vec3(0.55, 0.45, 0.25), vec3(0.85, 0.78, 0.6), c * 0.5 + 0.5);
      hgt = 0.0;
    } else if (icy) {
      // Icy crust: bright, few craters, long reddish-brown cracks.
      float cr = lineae(d, uSeed);
      col = mix(vec3(0.62, 0.62, 0.6), vec3(0.85, 0.85, 0.82), mare * 0.5 + 0.5);
      col = mix(col, vec3(0.42, 0.22, 0.12), cr * 0.75);
      col *= 0.92 + grit * 0.1 + a * 0.3;
      hgt -= cr * 0.015;
    } else if (uKind == 2 && t == 3) {
      // Sulphur moon: yellow and orange plains, dark volcanic spots and halos.
      vec2 v = worley(q * 5.0);
      float spot = smoothstep(0.18, 0.05, v.x);
      float halo = smoothstep(0.45, 0.15, v.x) * (1.0 - spot);
      col = mix(vec3(0.62, 0.52, 0.18), vec3(0.75, 0.62, 0.32), mare * 0.5 + 0.5);
      col = mix(col, vec3(0.55, 0.22, 0.06), halo * 0.6);
      col = mix(col, vec3(0.06, 0.04, 0.03), spot);
      col *= 0.9 + grit * 0.15;
      hgt *= 0.4;
    } else {
      // Grey or tan airless rock: dark maria, bright highlands.
      vec3 hi = (uKind == 2 && t == 1) ? vec3(0.32, 0.27, 0.22) : vec3(0.42, 0.40, 0.37);
      vec3 lo = (uKind == 2 && t == 1) ? vec3(0.10, 0.085, 0.07) : vec3(0.13, 0.125, 0.12);
      if (uKind == 1) { hi = vec3(0.40, 0.36, 0.31); lo = vec3(0.16, 0.14, 0.12); }
      col = mix(lo, hi, smoothstep(0.05, 0.3, mare + 0.15));
      col *= 0.85 + grit * 0.2;
      col += a * vec3(0.9, 0.88, 0.85) * 0.6;
    }
    h = clamp(0.5 + hgt * 2.0, 0.0, 1.0);
  } else {
    // ---- Gas giant ----
    vec3 p = d;
    // Storms: swirl the cloud field round each one before drawing the bands.
    for (int i = 0; i < 4; i++) {
      vec3 sd = uStorm[i].xyz;
      float sz = uStorm[i].w;
      if (sz <= 0.0) continue;
      float dd = length(p - sd);
      float ang = 5.0 * exp(-pow(dd / sz, 2.0)) * (i == 0 ? 1.0 : -1.0);
      float c = cos(ang), s = sin(ang);
      p = p * c + cross(sd, p) * s + sd * dot(sd, p) * (1.0 - c);
    }
    // Zones and belts: several band frequencies, pushed about by turbulence
    // that's strongest where neighbouring bands shear past each other.
    float turb = fbm(vec3(p.x * 4.0, p.y * 14.0, p.z * 4.0) + uSeed, 6);
    float y = p.y + turb * 0.03;
    float s1 = uSeed * 3.1, s2 = uSeed * 1.7, s3 = uSeed * 0.9;
    float main = sin(y * 9.0 + s1);
    float bands = main * 0.45 + sin(y * 19.0 + s2) * 0.28 + sin(y * 41.0 + s3) * 0.16 + sin(y * 87.0 + s1) * 0.08;
    float edge = 1.0 - abs(main);
    float eddy = fbm(vec3(p.x * 10.0, p.y * 36.0, p.z * 10.0) + turb * 3.0 + uSeed, 6);
    float wisp = fbm(vec3(p.x * 28.0, p.y * 110.0, p.z * 28.0) + eddy * 2.0, 4);
    float band = bands + eddy * (0.25 + edge * 0.45) + wisp * 0.1;
    col = mix(uPalC * 0.8, uPalA, smoothstep(-0.75, -0.1, band));
    col = mix(col, uPalB, smoothstep(0.0, 0.7, band));
    col = mix(col, uPalB * 1.12, smoothstep(0.75, 1.1, band) * 0.6);
    col *= 0.92 + wisp * 0.12;
    // The great storm: a paler (or redder) oval.
    float st = exp(-pow(length(d - uStorm[0].xyz) / (uStorm[0].w * 0.6), 2.0));
    col = mix(col, uPalC * 1.15, st * 0.7);
    for (int i = 1; i < 4; i++) col = mix(col, vec3(0.85, 0.83, 0.78), exp(-pow(length(d - uStorm[i].xyz) / (uStorm[i].w * 0.35), 2.0)) * 0.8);
    col = mix(col, col * vec3(0.8, 0.85, 0.95), smoothstep(0.75, 0.95, alat)); // bluish poles
    h = 0.5;
  }
  gl_FragColor = vec4(toS(col), h);
}`,_M=`
${er}
${Ep}
// Wind the sphere round the nearest cyclone centre (mid-latitudes only).
vec3 cyclones(vec3 d, float seed) {
  vec3 p = d * 2.6;
  vec3 c0 = floor(p);
  vec3 best = d; float bd = 9.0;
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 cell = c0 + vec3(float(x), float(y), float(z));
    vec3 c = normalize(cell + hash33(cell + seed));
    float dd = length(d - c);
    if (dd < bd) { bd = dd; best = c; }
  }
  float la = asin(best.y);
  float str = smoothstep(0.35, 0.7, abs(la)) * smoothstep(1.35, 1.05, abs(la)) * sign(la);
  float ang = str * 4.0 * exp(-bd * bd / 0.025);
  float c = cos(ang), s = sin(ang);
  return d * c + cross(best, d) * s + best * dot(best, d) * (1.0 - c);
}
uniform sampler2D tAlb;
uniform vec2 uTexel;
uniform float uRelief;
uniform int uKind, uType;
uniform float uSeed;
uniform float uClouds;
varying vec2 vUv;
void main() {
  vec3 d = dirFromUv(vUv);
  float st = max(sqrt(1.0 - d.y * d.y), 0.08);
  // Sobel over a two-texel spacing: smooths away the steps of 8-bit heights.
  vec2 ex = vec2(uTexel.x * 2.0, 0.0), ey = vec2(0.0, uTexel.y * 2.0);
  float h0 = texture2D(tAlb, vUv).a;
  float hE = texture2D(tAlb, vUv + ex).a * 2.0 + texture2D(tAlb, vUv + ex + ey).a + texture2D(tAlb, vUv + ex - ey).a;
  float hW = texture2D(tAlb, vUv - ex).a * 2.0 + texture2D(tAlb, vUv - ex + ey).a + texture2D(tAlb, vUv - ex - ey).a;
  float hN = texture2D(tAlb, vUv + ey).a * 2.0 + texture2D(tAlb, vUv + ey + ex).a + texture2D(tAlb, vUv + ey - ex).a;
  float hS = texture2D(tAlb, vUv - ey).a * 2.0 + texture2D(tAlb, vUv - ey + ex).a + texture2D(tAlb, vUv - ey - ex).a;
  float dx = (hE - hW) / 4.0 / (4.0 * uTexel.x * 6.2832 * st);
  float dy = (hN - hS) / 4.0 / (4.0 * uTexel.y * 3.1416);
  vec3 n = normalize(vec3(-dx * uRelief, -dy * uRelief, 1.0));
  vec3 q = d + uSeed;
  // City lights: clustered towns along coasts and rivers, none at sea or on ice.
  float lights = 0.0;
  if (uKind == 0) {
    float land = step(0.5001, h0);
    float alat = abs(d.y);
    // Populated regions, metro clusters in them, and a fine grain of streets.
    float region = smoothstep(0.05, 0.45, fbm(q * 3.0 + 40.0, 4));
    float metro = smoothstep(0.62, 0.82, fbm(q * 16.0 + 3.0, 4) * 0.5 + 0.5);
    float towns = pow(max(0.0, snoise(q * 70.0 + 9.0)), 3.0);
    float grain = 0.25 + 0.75 * smoothstep(0.1, 0.7, snoise(q * 190.0) * 0.5 + 0.5);
    float coast = 1.0 + smoothstep(0.03, 0.0, h0 - 0.5) * 1.5; // cities crowd the coasts
    lights = land * region * (metro * 0.85 + towns * 0.35) * grain * coast * smoothstep(0.8, 0.6, alat);
    if (uType == 1) lights *= 1.3;
  } else if (uKind == 1 || uKind == 2) {
    // Domes and mining towns on other worlds: sparse.
    float region = smoothstep(0.3, 0.6, fbm(q * 2.0 + 40.0, 3));
    lights = region * pow(max(0.0, fbm(q * 50.0, 3) * 0.5 + 0.5), 6.0) * 6.0;
  } else {
    // Floating cities and skimmer fleets in the upper deck.
    float region = smoothstep(0.35, 0.6, fbm(q * 2.0 + 40.0, 3)) * smoothstep(0.7, 0.4, abs(d.y));
    lights = region * pow(max(0.0, snoise(q * 70.0) * 0.5 + 0.5), 8.0) * 4.0;
  }
  // Clouds: storm belts at mid latitudes and the tropics, swirls, clear subtropics.
  float a = 0.0;
  if (uKind == 0 && uType == 4) {
    // Volcanic world: lava seams instead of water clouds.
    float seam = exp(-pow(snoise(q * 4.0 + fbm(q * 3.0, 3)) / 0.04, 2.0)) + exp(-pow(snoise(q * 9.0 + 2.0) / 0.03, 2.0)) * 0.5;
    a = clamp(seam * step(0.5, h0) * (0.4 + 0.6 * smoothstep(0.5, 0.75, h0)), 0.0, 1.0);
  } else if (uClouds > 0.0) {
    // Weather: an equatorial band of storms, clear subtropics with scattered
    // fair-weather cumulus, and mid-latitude storm tracks wound into spiral
    // cyclones (turning opposite ways in each hemisphere).
    vec3 dc = cyclones(d, uSeed);
    float lat = asin(d.y);
    vec3 w = vec3(fbm(dc * 2.0 + 5.0, 4), fbm(dc * 2.0 + 8.0, 4), fbm(dc * 2.0 + 11.0, 4));
    float big = fbm(vec3(dc.x * 2.4, dc.y * 4.5, dc.z * 2.4) + w * 0.7 + uSeed + 50.0, 7);
    float alat = abs(lat);
    float bias = -0.1 + 0.25 * exp(-pow(lat / 0.12, 2.0))
      + 0.2 * smoothstep(0.6, 0.9, alat) * smoothstep(1.45, 1.1, alat)
      - 0.18 * exp(-pow((alat - 0.4) / 0.14, 2.0));
    float cov = smoothstep(0.0, 0.22, big + bias);
    float streak = fbm(vec3(dc.x * 10.0, dc.y * 40.0, dc.z * 10.0) + w * 2.0, 4);
    cov *= 0.75 + 0.35 * streak;
    float cu = smoothstep(0.66, 0.82, fbm(d * 22.0 + 3.0, 4) * 0.5 + 0.5) * 0.3 * (1.0 - cov);
    a = clamp(cov + cu, 0.0, 1.0) * uClouds;
    if (uType == 1) a *= 0.35; // desert: thin
    if (uType == 2) a *= 0.7;
    if (uType == 3 || uType == 5) a = min(1.0, a * 1.2); // wet worlds
  }
  gl_FragColor = vec4(n.xy * 0.5 + 0.5, clamp(lights, 0.0, 1.0), a);
}`,Ap=["temperate","desert","ice","jungle","volcanic","ocean"],Kf={temperate:[.35,.6,1],desert:[1,.7,.45],ice:[.6,.8,1],jungle:[.4,.7,.85],volcanic:[1,.45,.25],ocean:[.3,.55,1]},rl=[[[.5,.33,.18],[.82,.7,.52],[.62,.3,.15]],[[.3,.45,.6],[.7,.82,.88],[.2,.3,.55]],[[.22,.42,.4],[.55,.72,.66],[.15,.3,.32]],[[.45,.2,.12],[.78,.55,.4],[.35,.12,.08]],[[.35,.28,.45],[.7,.62,.75],[.25,.18,.4]],[[.62,.55,.4],[.88,.84,.72],[.5,.4,.28]]];function Cp(n){return rl[Math.floor(n.hue*rl.length)%rl.length]}function xM(n){if(n.home)return{kind:0,type:Math.max(0,Ap.indexOf(n.biome||"temperate")),atmo:Kf[n.biome]||Kf.temperate,atmoK:1,clouds:n.biome==="volcanic"?0:1,relief:.06};if(n.giant)return{kind:3,type:0,atmo:Cp(n)[1].map(t=>t*.9+.1),atmoK:.55,clouds:0,relief:0};if(n.kind==="planet"){const t=Math.floor(n.hue*4)%4,i=[[1,.6,.4],null,[1,.85,.55],[.6,.75,1]][t];return{kind:1,type:t,atmo:i,atmoK:t===2?1.2:.45,clouds:0,relief:t===2?0:.09,airless:t===1}}return{kind:2,type:Math.floor(n.hue*4)%4,atmo:null,atmoK:0,clouds:0,relief:.12,airless:!0}}function yM(n,e){const t=new zt;t.setAttribute("position",new mt([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Lt(t);i.frustumCulled=!1;const r=new rc;r.add(i);const s=new ac,o=new It({uniforms:{uKind:{value:0},uType:{value:0},uSeed:{value:0},uPalA:{value:new D},uPalB:{value:new D},uPalC:{value:new D},uStorm:{value:[0,1,2,3].map(()=>new Ht)}},vertexShader:ao,fragmentShader:vM,depthTest:!1,depthWrite:!1}),c=new It({uniforms:{tAlb:{value:null},uTexel:{value:new qe},uRelief:{value:1},uKind:{value:0},uType:{value:0},uSeed:{value:0},uClouds:{value:0}},vertexShader:ao,fragmentShader:_M,depthTest:!1,depthWrite:!1}),a=Math.min(8,n.capabilities.getMaxAnisotropy()),l=(u,f)=>{const d=new Kn(u,f,{depthBuffer:!1,generateMipmaps:!0,minFilter:gr,magFilter:jt,wrapS:_o,wrapT:Ui});return d.texture.anisotropy=a,d};return function(f,d){const p=e()==="high",g=d.kind===0?p?2048:1024:p?1024:512,_=g/2,m=(f.id*7.31+f.hue*13.7)%97,h=o.uniforms;if(h.uKind.value=d.kind,h.uType.value=d.type,h.uSeed.value=m,d.kind===3){const M=Cp(f);h.uPalA.value.fromArray(M[0]),h.uPalB.value.fromArray(M[1]),h.uPalC.value.fromArray(M[2]);let A=Math.floor(m*1e3);const x=()=>(A=A*16807%2147483647)/2147483647;h.uStorm.value.forEach((E,C)=>{const R=(x()-.5)*(C?1.4:.9),L=x()*Math.PI*2;E.set(Math.cos(R)*Math.cos(L),Math.sin(R),Math.cos(R)*Math.sin(L),C===0?.12+x()*.06:.04+x()*.03)})}const v=l(g,_),w=l(g,_),y=n.getRenderTarget();i.material=o,n.setRenderTarget(v),n.render(r,s);const b=c.uniforms;return b.tAlb.value=v.texture,b.uTexel.value.set(1/g,1/_),b.uRelief.value=d.relief*(g/1024)*.5+d.relief*.5,b.uKind.value=d.kind,b.uType.value=d.type,b.uSeed.value=m,b.uClouds.value=d.clouds,i.material=c,n.setRenderTarget(w),n.render(r,s),n.setRenderTarget(y),{alb:v.texture,aux:w.texture,rts:[v,w]}}}const ui={pos:{value:[new D,new D]},col:{value:[new D(1.22,1.17,1.08),new D]}},od=`
uniform vec4 uOcc[4];
// Soft shadow of up to four spheres (other worlds) between p and the light.
float eclipse(vec3 p, vec3 L, float lightDist) {
  float s = 1.0;
  for (int i = 0; i < 4; i++) {
    vec4 o = uOcc[i];
    vec3 oc = o.xyz - p;
    float t = dot(oc, L);
    float m = length(oc - L * t);
    float pen = o.w * 0.06 + t * 0.012; // penumbra grows with distance
    float k = smoothstep(o.w - pen, o.w + pen, m);
    s *= (o.w > 0.0 && t > 0.0 && t < lightDist) ? k : 1.0;
  }
  return s;
}`;function MM(n,e,t,i){const r=e.kind===3,s={tAlb:{value:t.alb},tAux:{value:t.aux},uStarPos:ui.pos,uStarCol:ui.col,uCity:{value:0},uCityCol:{value:new D(2.4,1.5,.7)},uCloudShift:{value:0},uCloudK:{value:e.clouds?.55:0},uLava:{value:e.kind===0&&e.type===4?1:0},uOcean:{value:e.kind===0&&e.type!==1&&e.type!==4?1:0},uAirless:{value:e.airless?1:0},uAtmo:{value:new D(...e.atmo||[0,0,0])},uAtmoK:{value:e.atmoK},uT:{value:0},uFlow:{value:r?1:e.kind===1&&e.type===2?.4:0},uOcc:{value:[0,1,2,3].map(()=>new Ht(0,0,0,0))},uRingN:{value:new D(0,1,0)},uRingIn:{value:0},uRingOut:{value:0},tRing:{value:i?i.tex:null},uCenter:{value:new D},uRadius:{value:n.size}};return new It({uniforms:s,vertexShader:`${wi}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      void main() {
        vUv = uv;
        // Tangent frame on the sphere (east, north, up), in world space.
        vec3 n = normalize(position);
        vec3 t = normalize(vec3(n.z, 0.0, -n.x) + vec3(1e-5, 0.0, 0.0));
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * n);
        vWT = normalize(mat3(modelMatrix) * t);
        vWB = cross(vWN, vWT);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Ti}
      }`,fragmentShader:`${Ei}
      ${od}
      uniform sampler2D tAlb, tAux, tRing;
      uniform vec3 uStarPos[2], uStarCol[2];
      uniform float uCity, uCloudShift, uCloudK, uLava, uOcean, uAirless, uAtmoK, uT, uFlow, uRingIn, uRingOut, uRadius;
      uniform vec3 uCityCol, uAtmo, uRingN, uCenter;
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      vec3 fromS(vec3 c) { return pow(c, vec3(2.2)); }
      void main() {
        ${Ai}
        vec2 uv = vUv;
        vec4 alb, aux;
        if (uFlow > 0.0) {
          // Bands flow at their own speeds (jets): two samples half a cycle
          // apart, cross-faded, so the shear never builds up into a smear.
          float lat = uv.y - 0.5;
          float jet = sin(lat * 40.0) * 0.6 + sin(lat * 17.0 + 1.0) * 0.4;
          float ph = uT * 0.02 * uFlow;
          float f0 = fract(ph), f1 = fract(ph + 0.5);
          vec2 o0 = vec2(jet * f0 * 0.012, 0.0), o1 = vec2(jet * f1 * 0.012, 0.0);
          float w = abs(f0 * 2.0 - 1.0);
          alb = mix(texture2D(tAlb, uv + o0), texture2D(tAlb, uv + o1), 1.0 - w);
          aux = texture2D(tAux, uv);
        } else {
          alb = texture2D(tAlb, uv);
          aux = texture2D(tAux, uv);
        }
        vec3 albedo = fromS(alb.rgb);
        vec2 nxy = aux.xy * 2.0 - 1.0;
        vec3 Ng = normalize(vWN);
        vec3 N = normalize(normalize(vWT) * nxy.x + normalize(vWB) * nxy.y + Ng * sqrt(max(0.0, 1.0 - dot(nxy, nxy))));
        vec3 V = normalize(cameraPosition - vWorld);
        float water = uOcean * smoothstep(0.502, 0.497, alb.a);
        float clouds = uCloudK > 0.0 ? texture2D(tAux, uv + vec2(uCloudShift, 0.0)).a : 0.0;
        vec3 col = vec3(0.0);
        float dayAll = 0.0;
        for (int i = 0; i < 2; i++) {
          vec3 sc = uStarCol[i];
          if (sc.r + sc.g + sc.b <= 0.0) continue;
          vec3 Lv = uStarPos[i] - vWorld;
          float ld = length(Lv);
          vec3 L = Lv / ld;
          float ndl = dot(N, L);
          float ngl = dot(Ng, L);
          float diff;
          if (uAirless > 0.5) {
            // Lunar-Lambert: airless dust looks flat at full phase, with a crisp terminator.
            float ndv = max(dot(N, V), 0.0);
            float ls = 2.0 * max(ndl, 0.0) / (max(ndl, 0.0) + ndv + 1e-3);
            diff = mix(max(ndl, 0.0), ls * 0.5, 0.45);
          } else {
            diff = max(0.0, (ndl + 0.04) / 1.04);
          }
          // Only the lit hemisphere (the normal map can't light the night side).
          diff *= smoothstep(-0.06, 0.08, ngl);
          float sh = eclipse(vWorld, L, ld);
          // Ring shadow on the planet.
          if (uRingOut > 0.0) {
            float dn = dot(L, uRingN);
            if (abs(dn) > 1e-3) {
              float t = dot(uCenter - vWorld, uRingN) / dn;
              if (t > 0.0) {
                float rr = length(vWorld + L * t - uCenter) / uRadius;
                if (rr > uRingIn && rr < uRingOut) sh *= 1.0 - texture2D(tRing, vec2((rr - uRingIn) / (uRingOut - uRingIn), 0.5)).a * 0.85;
              }
            }
          }
          sh *= 1.0 - clouds * uCloudK;
          // A warm tint where the light comes in low through the air.
          vec3 tint = mix(vec3(1.0), vec3(1.0, 0.62, 0.38), (1.0 - smoothstep(0.0, 0.35, ngl)) * step(0.01, uAtmoK) * 0.8);
          col += albedo * diff * sh * sc * tint;
          // Sun glitter on open water.
          if (water > 0.0) {
            vec3 Hh = normalize(L + V);
            float nh = max(dot(Ng, Hh), 0.0);
            float fres = 0.02 + 0.98 * pow(1.0 - max(dot(Ng, V), 0.0), 5.0);
            float spec = (pow(nh, 160.0) * 2.0 + pow(nh, 30.0) * 0.12) * (0.4 + fres);
            spec *= clamp(1.0 - length(fwidth(Ng)) * 25.0, 0.0, 1.0); // fade on small, distant worlds
            col += sc * spec * water * sh * smoothstep(0.0, 0.1, ngl);
          }
          dayAll = max(dayAll, smoothstep(-0.15, 0.25, ngl));
        }
        // Night: city lights and lava glow, dimmed under cloud.
        float night = 1.0 - smoothstep(-0.1, 0.12, dayAll);
        col += aux.b * uCity * uCityCol * night * (1.0 - clouds * 0.7) * 1.1;
        if (uLava > 0.0) col += aux.a * vec3(3.0, 0.7, 0.12) * (0.35 + 0.65 * night);
        // A whisper of skylight on the dark side (starlight, ring- and moonshine).
        col += albedo * vec3(0.006, 0.007, 0.01);
        gl_FragColor = vec4(col, 1.0);
      }`})}function SM(n){return new It({uniforms:{tAux:{value:n.aux},uStarPos:ui.pos,uStarCol:ui.col,uOcc:{value:[0,1,2,3].map(()=>new Ht(0,0,0,0))}},vertexShader:`${wi}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Ti}
      }`,fragmentShader:`${Ei}
      ${od}
      uniform sampler2D tAux; uniform vec3 uStarPos[2], uStarCol[2];
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN;
      void main() {
        ${Ai}
        float a = texture2D(tAux, vUv).a;
        if (a < 0.01) discard;
        vec3 N = normalize(vWN);
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 col = vec3(0.0);
        for (int i = 0; i < 2; i++) {
          vec3 sc = uStarCol[i];
          if (sc.r + sc.g + sc.b <= 0.0) continue;
          vec3 Lv = uStarPos[i] - vWorld;
          float ld = length(Lv);
          vec3 L = Lv / ld;
          float ndl = dot(N, L);
          float diff = smoothstep(-0.12, 0.5, ndl);
          vec3 tint = mix(vec3(1.0, 0.55, 0.35), vec3(1.0), smoothstep(-0.05, 0.3, ndl));
          col += sc * diff * tint * eclipse(vWorld, L, ld) * 0.92;
        }
        // Thick cloud is brighter; thin edges let the ground through.
        float thick = smoothstep(0.0, 0.9, a);
        col *= 0.75 + thick * 0.3;
        // Thin at the limb as seen from above, so the edge stays crisp.
        float limb = smoothstep(0.0, 0.2, dot(N, V));
        gl_FragColor = vec4(col, a * 0.95 * (0.5 + 0.5 * limb));
      }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})}function bM(n,e,t="high"){const i=e.kind===3?.035:e.kind===0?.045:.035,r=n.size*(1+i),s=e.atmo,o=new D(s[0],s[1],s[2]),c=new Lt(new Oi(r,64,40),new It({uniforms:{uCenter:{value:new D},uRp:{value:n.size*.998},uRa:{value:r},uStarPos:ui.pos,uStarCol:ui.col,uBeta:{value:o},uK:{value:e.atmoK},uOcc:{value:[0,1,2,3].map(()=>new Ht(0,0,0,0))}},vertexShader:`${wi}
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
          ${Ti}
        }`,fragmentShader:`${Ei}
        ${od}
        uniform vec3 uCenter, uBeta; uniform float uRp, uRa, uK;
        uniform vec3 uStarPos[2], uStarCol[2];
        varying vec3 vWorld;
        void main() {
          ${Ai}
          vec3 ro = cameraPosition;
          vec3 rd = normalize(vWorld - ro);
          vec3 oc = ro - uCenter;
          float b = dot(oc, rd);
          float c = dot(oc, oc) - uRa * uRa;
          float h = b * b - c;
          if (h < 0.0) discard;
          h = sqrt(h);
          float t0 = max(-b - h, 0.0), t1 = -b + h;
          float hp = b * b - (dot(oc, oc) - uRp * uRp);
          bool ground = false;
          if (hp > 0.0) { float tp = -b - sqrt(hp); if (tp > 0.0) { t1 = min(t1, tp); ground = true; } }
          float H = uRa - uRp;
          float seg = (t1 - t0) / H; // in shell thicknesses
          const int N = STEPS;
          float dt = seg / float(N);
          vec3 sum = vec3(0.0);
          vec3 mie = vec3(0.0);
          float odV = 0.0;
          vec3 ext = uBeta * 0.5 + 0.12; // extinction: blue goes first
          ext = vec3(0.10, 0.22, 0.48) + (vec3(1.0) - uBeta) * 0.25;
          for (int i = 0; i < N; i++) {
            float t = t0 + (t1 - t0) * (float(i) + 0.5) / float(N);
            vec3 p = ro + rd * t;
            float alt = clamp((length(p - uCenter) - uRp) / H, 0.0, 1.0);
            float dens = exp(-alt * 4.0);
            odV += dens * dt;
            vec3 up = normalize(p - uCenter);
            for (int s = 0; s < 2; s++) {
              vec3 sc = uStarCol[s];
              if (sc.r + sc.g + sc.b <= 0.0) continue;
              vec3 Lv = uStarPos[s] - p;
              float ld = length(Lv);
              vec3 L = Lv / ld;
              float mu = dot(up, L);
              // Light reaching this point: blocked by the planet below the
              // horizon, reddened by the long path when the sun is low.
              float lit = smoothstep(-0.18, 0.06, mu) * eclipse(p, L, ld);
              float odS = dens * 6.0 / (max(mu, 0.0) * 6.0 + 0.6);
              vec3 att = exp(-ext * (odS + odV) * 1.2);
              float cth = dot(rd, L);
              float pr = 0.75 * (1.0 + cth * cth);
              float g = 0.76;
              float pm = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * cth, 1.5) * 0.08;
              sum += dens * lit * att * sc * pr * dt;
              mie += dens * lit * att * sc * pm * dt;
            }
          }
          vec3 col = (sum * uBeta * 0.55 + mie * 0.9) * uK;
          // Over the ground, the air is a thin haze: fade it so the surface reads.
          if (ground) col *= 0.75;
          gl_FragColor = vec4(col, 1.0);
        }`,defines:{STEPS:t==="high"?8:5},transparent:!0,blending:On,depthWrite:!1}));return c.renderOrder=1,c}function wM(n){const r=new Uint8Array(2048);let s=Math.floor(n.hue*1e6)+n.id*97;const o=()=>(s=s*16807%2147483647)/2147483647,c=Array.from({length:3},()=>({at:.2+o()*.7,w:.006+o()*.025})),a=new Float32Array(512);let l=.5;for(let p=0;p<512;p++)l+=(o()-.5)*.18,l+=(.55-l)*.04,a[p]=l;for(let p=0;p<512;p++){const g=p/511;let _=(a[Math.max(0,p-1)]+a[p]+a[Math.min(511,p+1)])/3;_*=.65+.35*Math.sin(g*9+o()*.2),_*=Math.min(1,g/.1)*Math.min(1,(1-g)/.06),g>.42&&g<.72&&(_*=1.4),g<.18&&(_*=.45);for(const v of c)Math.abs(g-v.at)<v.w&&(_*=.06);_=Math.max(0,Math.min(1,_));const m=.8+.2*a[p*7%512],h=g<.3?.6:.2;r.set([(170+h*20)*m,(163+h*5)*m,(150-h*25)*m,_*255],p*4)}const u=new Zu(r,512,1,ci);u.colorSpace=Un,u.magFilter=jt,u.minFilter=jt,u.needsUpdate=!0;const f=new oc(n.size*1.35,n.size*2.35,160,1),d=new Lt(f,new It({uniforms:{tRing:{value:u},uIn:{value:1.35},uOut:{value:2.35},uR:{value:n.size},uCenter:{value:new D},uStarPos:ui.pos,uStarCol:ui.col},vertexShader:`${wi}
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        vLocal = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Ti}
      }`,fragmentShader:`${Ei}
      uniform sampler2D tRing; uniform float uIn, uOut, uR; uniform vec3 uCenter;
      uniform vec3 uStarPos[2], uStarCol[2];
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        ${Ai}
        float rr = length(vLocal.xy) / uR;
        vec4 tx = texture2D(tRing, vec2((rr - uIn) / (uOut - uIn), 0.5));
        if (tx.a < 0.01) discard;
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 col = vec3(0.0);
        for (int i = 0; i < 2; i++) {
          vec3 sc = uStarCol[i];
          if (sc.r + sc.g + sc.b <= 0.0) continue;
          vec3 L = normalize(uStarPos[i] - vWorld);
          // Planet's shadow across the rings.
          vec3 oc = uCenter - vWorld;
          float t = dot(oc, L);
          float m = length(oc - L * t);
          float sh = t > 0.0 ? smoothstep(uR * 0.97, uR * 1.03, m) : 1.0;
          float sameSide = sign(dot(vN, L)) * sign(dot(vN, V));
          // Lit face: diffuse. Seen against the light: forward scattering through thin ring.
          float lit = sameSide > 0.0 ? (0.35 + 0.65 * abs(dot(vN, L))) : (1.0 - tx.a) * 1.6 * pow(max(0.0, dot(-V, L)), 3.0) + 0.12;
          col += pow(tx.rgb, vec3(2.2)) * sc * lit * sh;
        }
        gl_FragColor = vec4(col, tx.a * 0.92);
      }`,transparent:!0,depthWrite:!1,side:Jn}));return d.userData.ring={tex:u,inner:1.35,outer:2.35},d}const Rp=["#58b8ff","#ff6a5a","#ffb347"],TM="#8a90a6",ut=n=>n===ze?TM:Rp[n],jf=6,la=400;function EM(n,e,t,i=1){const r=document.createElement("canvas");r.width=n*i,r.height=e*i;const s=r.getContext("2d");s.scale(i,i),t(s,n,e);const o=new ed(r);return o.colorSpace=Un,o}const sl=EM(128,128,n=>{const e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.1)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)}),Pp={value:1},AM=new Ds(2,2);function Zf(n=!1){const e=new Lt(AM,new It({uniforms:{uColor:{value:new tt("#ffffff")},uOpacity:{value:.8},uLvl:{value:0},uWidth:{value:1.6},uPR:Pp},vertexShader:`varying vec2 vQ;
      void main() {
        vQ = position.xy;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += position.xy * length(modelMatrix[0].xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity, uLvl, uWidth, uPR; varying vec2 vQ;
      void main() {
        float r = length(vQ);
        float px = max(fwidth(r), 1e-5);
        float d = abs(r - 0.9) / px;
        float a = clamp(uWidth * uPR * 0.5 + 0.5 - d, 0.0, 1.0);
        // Veterancy gaps, centred on the upper right.
        float th = -atan(vQ.y, vQ.x);
        float start = -0.7854 - (uLvl - 1.0) * 0.15;
        for (int k = 0; k < 3; k++) {
          if (float(k) >= uLvl) break;
          float c = start + float(k) * 0.3;
          float dd = abs(mod(th - c + 3.14159, 6.28318) - 3.14159);
          a *= smoothstep(0.075, 0.075 + px * 1.5, dd);
        }
        if (a < 0.003) discard;
        gl_FragColor = vec4(uColor, a * uOpacity);
      }`,transparent:!0,depthWrite:!1,depthTest:n}));return e.frustumCulled=!1,e.renderOrder=10,e}const Lp={value:new qe(1,1)};function CM(n){const e=n.parent!==null?192:512,t=[],i=[],r=[],s=[],o=[],c=f=>[Math.cos(f)*n.r,Math.sin(f)*n.r*n.incl,Math.sin(f)*n.r];for(let f=0;f<=e;f++){const d=f/e*Math.PI*2;for(const p of[-1,1])t.push(...c(d)),i.push(...c(d+.01)),r.push(d),s.push(p);if(f<e){const p=f*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}}const a=new zt;a.setAttribute("position",new mt(t,3)),a.setAttribute("nextPos",new mt(i,3)),a.setAttribute("ang",new mt(r,1)),a.setAttribute("side",new mt(s,1)),a.setIndex(o);const l=n.parent!==null,u=new Lt(a,new It({uniforms:{uTh:{value:0},uRes:Lp,uWidth:{value:l?1.4:2.2},uColor:{value:new tt(l?"#5d6a8c":"#7383ad")},uOpacity:{value:l?.55:.75}},vertexShader:`attribute vec3 nextPos; attribute float ang; attribute float side;
      uniform float uTh; uniform vec2 uRes; uniform float uWidth;
      varying float vF; varying float vSide;
      void main() {
        vec4 c = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 n = projectionMatrix * modelViewMatrix * vec4(nextPos, 1.0);
        vec2 dir = normalize((n.xy / n.w - c.xy / c.w) * uRes + 1e-6);
        vF = fract((uTh - ang) / 6.2831853); // 0 just behind the world, 1 a full turn later
        float w = uWidth * pow(1.0 - vF, 0.9);
        c.xy += vec2(-dir.y, dir.x) * side * w / uRes * c.w;
        vSide = side;
        gl_Position = c;
      }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; varying float vF; varying float vSide;
      void main() {
        float a = uOpacity * pow(1.0 - vF, 1.3) * smoothstep(1.0, 0.35, abs(vSide));
        gl_FragColor = vec4(uColor, a);
      }`,transparent:!0,depthWrite:!1,side:Jn}));return u.frustumCulled=!1,u}const Dp={value:0},RM=new It({uniforms:{uT:Dp},vertexShader:`${wi}
    varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vW = wp.xyz;
      vec4 mv = viewMatrix * wp;
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
      ${Ti}
    }`,fragmentShader:`${Ei}
    uniform float uT; varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      ${Ai}
      float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
      float scan = 0.55 + 0.45 * sin(vW.y * 60.0 - uT * 6.0);
      float flick = 0.85 + 0.15 * sin(uT * 23.0) * sin(uT * 7.0);
      gl_FragColor = vec4(vec3(0.45, 0.8, 1.3) * (0.12 + rim * 0.9) * scan * flick, 1.0);
    }`,blending:On,transparent:!0,depthWrite:!1});function PM(n,e,t={}){const i=new Q1({canvas:n,antialias:!1,powerPreference:"high-performance"});let r=t.quality||"high";const s=()=>Math.min(window.devicePixelRatio||1,r==="high"?2:1.25);let o=s();i.setPixelRatio(1),i.autoClear=!0;const c=new rc,a=new ni(45,1,.02,2e4),l=nM(i);l.setSamples(r==="high"?4:2);const u=rM(i,r);c.add(u.stars),c.environmentIntensity=.9;const f=$f(jf,r),d=f.group;c.add(d);const p=$f(jf,r);p.tint.set(1,.78,.6);const g=p.group;g.visible=!1,g.add(new xf("#ffd9b0",1.4,0,0)),c.add(g),c.add(new xf("#fff1dd",3,0,0)),c.add(new Qg("#2a3550",.7));const _=new In;c.add(_);let m=[];const h={az:.4,pol:.9,dist:380,minDist:1.2,maxDist:900,target:new D,vaz:0,vpol:0,follow:null};let v=null,w=null;const y=yM(i,()=>r),b=[],M=new Map;function A(k,Q){const $=`${k}:${Q}`;return M.has($)||M.set($,new Oi(k,Q?128:96,Q?80:56)),M.get($)}function x(k){{const $=pi((k.nameSeed||1)+77),ce=[...Ap];for(const j of k.bodies.filter(le=>le.home))j.biome=ce.splice(Math.floor($()*ce.length),1)[0]||"temperate"}u.bake((k.nameSeed||1)+1),c.background=u.background,c.environment=u.env;for(const $ of b)$.dispose();b.length=0,_.clear(),e.innerHTML="",Pt.length=0,m=k.bodies.map($=>{const ce=new In;let j,le=null,be=null,nt=null,Rt=null;if($.kind==="station")j=Xf($.size,$.id%3,E.uT);else if($.kind==="asteroid")j=qf($);else if($.visitor){j=qf($),be=new In;const Yt=pn=>new _a(new oo({map:sl,color:pn,transparent:!0,depthWrite:!1,blending:On,opacity:0}));be.userData.ion=Array.from({length:26},()=>Yt("#9fd0ff")),be.userData.dust=Array.from({length:22},()=>Yt("#fff0cf")),be.userData.coma=Yt("#e8f6ff");for(const pn of[...be.userData.ion,...be.userData.dust,be.userData.coma])be.add(pn);ce.add(be),le=Xf(.7,0,E.uT),le.userData.set("#3a3d44",.8,!1),ce.add(le)}else{const Yt=xM($),pn=y($,Yt);b.push(...pn.rts);const Mn=.2+$.hue*.3;if($.giant&&$.hue>.4){nt=wM($),nt.rotation.x=Math.PI/2;const nn=new In;nn.rotation.z=Mn,nn.add(nt),ce.add(nn)}if(j=new Lt(A($.size,Yt.kind===0||Yt.kind===3?1:0),MM($,Yt,pn,nt&&nt.userData.ring)),j.rotation.order="ZYX",j.rotation.z=Mn,Yt.atmo&&(Rt=bM($,Yt,r),ce.add(Rt)),Yt.clouds){const nn=new Lt(A($.size*1.008,1),SM(pn));nn.name="clouds",j.add(nn)}}ce.add(j);const Wt=new In;j.add(Wt);const Xt=Zf(!1);Xt.scale.setScalar($.size*3.2),ce.add(Xt),_.add(ce);const yn=CM($),vt=new In;vt.add(yn),_.add(vt);const Cn=document.createElement("div");Cn.className="lbl",e.appendChild(Cn),$.visitor&&(vt.visible=!1);let Gt=null;if($.perk&&dn[$.perk].range){const Yt=dn[$.perk].range,pn=[];for(let Mn=0;Mn<=96;Mn++){const nn=Mn/96*Math.PI*2;pn.push(new D(Math.cos(nn)*Yt,0,Math.sin(nn)*Yt))}Gt=new xa(new zt().setFromPoints(pn),new qc({color:"#c7a6ff",transparent:!0,opacity:.55,dashSize:2.5,gapSize:2})),Gt.computeLineDistances(),Gt.visible=!1,_.add(Gt)}return{b:$,g:ce,body:j,surface:Wt,mark:Xt,lineHolder:vt,line:yn,label:Cn,shown:"",owner:null,pulse:0,sig:null,structs:null,hulk:le,tail:be,reach:Gt,ring:nt,atmo:Rt,ringN:new D,occ:[]}}),w&&(w.group.removeFromParent(),w.dispose(),w=null);const Q=k.bodies.filter($=>$.kind==="asteroid");if(Q.length){const $=Q[0],ce=Math.min(...Q.map(le=>le.r))-2,j=Math.max(...Q.map(le=>le.r))+2;w=mM(ce,j,le=>$.period*Math.pow(le/$.r,1.5),r,E.uT),_.add(w.group)}for(const $ of m){const ce=$.b;if(ce.kind!=="planet"&&ce.kind!=="moon")continue;const j=ce.kind==="planet"?k.bodies.filter(le=>le.parent===ce.id&&le.kind==="moon"):k.bodies.filter(le=>le.id===ce.parent||le.parent===ce.parent&&le.kind==="moon"&&le.id!==ce.id);$.occ=j.slice(0,4).map(le=>le.id)}if(v&&(v.removeFromParent(),v=null),k.stars&&k.stars[1]){const $=[];for(let ce=0;ce<=256;ce++){const j=to(k,1,ce/256*k.stars[1].period);$.push(new D(j.x,j.y,j.z))}v=new xa(new zt().setFromPoints($),new qc({color:"#ffb070",transparent:!0,opacity:.35,dashSize:4,gapSize:4})),v.computeLineDistances(),_.add(v)}}const E=dM(c,la),C=E.geometries;let R=0;const L=new zt,N=64,U=new Float32Array(200*N*6),B=new Float32Array(200*N*6);L.setAttribute("position",new Zt(U,3)),L.setAttribute("color",new Zt(B,3));const Z=new Gg(L,new Qu({vertexColors:!0,transparent:!0,opacity:.45}));Z.frustumCulled=!1,c.add(Z);const K=[];function se(k){if(!K[k]){const Q=Zf(!0);c.add(Q),K[k]=Q}return K[k]}const ee=new zt().setFromPoints(Array.from({length:129},()=>new D)),ae=new xa(ee,new qc({color:Rp[0],dashSize:1.5,gapSize:1}));ae.frustumCulled=!1,c.add(ae);const fe=gM(c,r==="high"?4096:2048),Be=240,Fe=[],Ut=new tt("#ffffff");function We(k,Q,$,ce=0,j=!1){let le=Fe.find(be=>!be.live);if(!le){if(Fe.length>=Be)return;le={a:new D,b:new D,c:new tt},Fe.push(le)}if(le.live=!0,le.a.copy(k),le.b.copy(Q),le.color=$,le.c.set($).lerp(Ut,[.45,.6,.85][ce]),le.rail=ce===2,le.age=0,le.life=ce===2?.05:bn.clamp(k.distanceTo(Q)/(ce?24:14),.1,.7),le.pd=j&&Math.random()<.3,le.pd&&le.b.lerpVectors(k,Q,.7+Math.random()*.2),ce===2)fe.beam(le.a,le.b,le.c,.35);else if(ce===1)fe.bolt(le.a,le.b,le.c,le.life,.5,.035);else for(let be=0;be<4;be++)te.copy(le.b).add(ue.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.25)),fe.bolt(le.a,te,le.c,le.life,.22,.018,be*.045)}const ve=new D,te=new D,ue=new D,Pe=new D,je=new D,De=new D(0,1,0),it=k=>window.innerHeight/(2*Math.tan(bn.degToRad(a.fov/2))*a.position.distanceTo(k)),Nt=(k,Q)=>{let $=Math.imul(k^2654435769,2246822507)^Math.imul(Q+1663821227,3266489909);return $^=$>>>15,$=Math.imul($,739982445),(($^$>>>12)>>>0)/4294967296};function ct(){const k=window.innerWidth,Q=window.innerHeight;i.setSize(Math.round(k*o),Math.round(Q*o),!1),n.style.width=k+"px",n.style.height=Q+"px",l.setSize(k,Q,o),Pp.value=o,Lp.value.set(k,Q),a.aspect=k/Q,a.updateProjectionMatrix()}const dt=new D;function Bt(k){dt.copy(d.position).project(a);let Q=dt.z<1&&Math.abs(dt.x)<1.1&&Math.abs(dt.y)<1.1?1:0;if(Q){const ce=a.position;ue.copy(d.position).sub(ce);const j=ue.length();ue.divideScalar(j);for(const le of m){if(!le.g.visible)continue;te.copy(le.g.position).sub(ce);const be=te.dot(ue);if(be<0||be>j)continue;if(Math.sqrt(Math.max(0,te.lengthSq()-be*be))<le.b.size){Q=0;break}}Q*=bn.clamp((1.1-Math.max(Math.abs(dt.x),Math.abs(dt.y)))*4,0,1)}const $=l.flare;$.vis+=(Q*.9-$.vis)*Math.min(1,k*8+.05),$.pos.set(dt.x*.5+.5,dt.y*.5+.5)}const Qe=[],Pt=[];function cn(k){if(!Pt[k]){const Q=document.createElement("div");Q.className="flbl",e.appendChild(Q),Pt[k]=Q}return Pt[k]}function An(k){for(const Q of m){const $=Qe[Q.b.id];if(!$)continue;const ce=Q.b.size*1.25+.25,j=ce*2,le=k.x-$.x,be=k.y-$.y,nt=k.z-$.z,Rt=le*le+be*be+nt*nt;if(Rt>=j*j)continue;const Wt=Math.sqrt(Rt);if(Wt<1e-6){k.x=$.x+ce;continue}const Xt=(Wt+(j-Wt)**2*ce/(j*j))/Wt;k.set($.x+le*Xt,$.y+be*Xt,$.z+nt*Xt)}}function $t(k){let Q=1;const $=d.position.x,ce=d.position.y,j=d.position.z;let le=$-k.x,be=ce-k.y,nt=j-k.z;const Rt=Math.hypot(le,be,nt)||1;le/=Rt,be/=Rt,nt/=Rt;for(const Wt of m){if(Wt.b.kind!=="planet"&&Wt.b.kind!=="moon")continue;const Xt=Qe[Wt.b.id],yn=Xt.x-k.x,vt=Xt.y-k.y,Cn=Xt.z-k.z,Gt=yn*le+vt*be+Cn*nt;if(Gt<=0||Gt>Rt)continue;const Yt=yn-le*Gt,pn=vt-be*Gt,Mn=Cn-nt*Gt,nn=Math.sqrt(Yt*Yt+pn*pn+Mn*Mn),ri=Wt.b.size,mi=ri*.08+Gt*.012;nn<ri+mi&&(Q*=bn.smoothstep(nn,ri-mi,ri+mi))}return Q}function qt(k,Q,$,ce,j,le,be=le,nt=1,Rt=!1,Wt=1){if(R>=la)return;R++;const Xt=Rt?3:Math.floor(Nt(be,3)*3),yn=.9+Nt(be,5)*.25,vt=Rt?[.45,.45,.45]:[.8,.8,.8*yn];An(k);const Cn=it(k),Gt=Cn>60?null:[(ce?9:5)*(Rt?.8:1),(ce?1:.7)*Wt];E.add(Xt,k,Q,vt,$,.82+Nt(be,11)*.28,be,ce,nt*(.8+Math.sin(j*40+le)*.05)*(Rt?.35:1),Gt,.6*Cn,$t(k))}const H=new Map,Jt=new qa({color:"#b9bec8",metalness:.5,roughness:.5}),wt=new qa({color:"#4a505c",metalness:.4,roughness:.7});function P(k){const Q=new In,$=(j,le,be,nt=Jt)=>new Lt(new _n(j,le,be),nt);if(k==="signal"){Q.add($(.12,.12,.18));const j=new Lt(new Oi(.14,12,6,0,Math.PI*2,0,Math.PI/3),Jt);j.position.z=.12,j.rotation.x=-Math.PI/2,Q.add(j,$(.5,.004,.08,wt))}else if(k==="wreck"){for(let j=0;j<4;j++){const le=$(.12+j*.03,.1,.22-j*.03,j%2?wt:Jt);le.position.set((j-1.5)*.18,Math.sin(j*2)*.08,Math.cos(j*3)*.1),le.rotation.set(j,j*2,j*.5),Q.add(le)}for(let j=0;j<6;j++){const le=new _a(new oo({map:sl,color:"#cfe8ff",blending:On,depthWrite:!1,transparent:!0,opacity:.7}));le.position.set(Math.sin(j*5)*.35,Math.cos(j*3)*.2,Math.sin(j*7)*.3),le.scale.setScalar(.12),Q.add(le)}}else if(k==="convoy")for(let j=0;j<3;j++){const le=new Lt(C[2],Jt);le.position.set((j-1)*.25,0,-j*.5),le.scale.setScalar(.8),Q.add(le)}else{for(let j=0;j<6;j++){const le=$(.12,.1,.12,j%3?Jt:wt);le.position.set((j%3-1)*.14,Math.floor(j/3)*.11,0),Q.add(le)}Q.add($(.46,.02,.16,wt))}const ce=new _a(new oo({map:sl,color:"#c7a6ff",blending:On,depthWrite:!1,transparent:!0}));return c.add(Q,ce),{g:Q,glint:ce,kind:k}}function S(k,Q,$){const ce=new Set;for(const j of k.happenings||[]){const le=k.bodies[j.at];if(le.visitor||!Qe[le.id])continue;ce.add(j.id),H.has(j.id)||H.set(j.id,P(j.kind));const be=H.get(j.id),nt=Qe[le.id],Rt=le.size*2.9+1.2,Wt=$*.15+j.id;if(ve.set(nt.x+Math.cos(Wt)*Rt,nt.y+.4,nt.z+Math.sin(Wt)*Rt),be.kind==="convoy"){const yn=bn.clamp((j.starts-Q)/60,0,1),vt=j.id*2.399;ve.x+=Math.cos(vt)*yn*70,ve.z+=Math.sin(vt)*yn*70,te.set(-Math.cos(vt),0,-Math.sin(vt)),yn<=0&&te.set(-Math.sin(Wt),0,Math.cos(Wt)),be.g.lookAt(ve.clone().add(te))}else be.g.rotation.x+=.004,be.g.rotation.y+=be.kind==="wreck"?.01:.003;be.g.position.copy(ve),be.g.visible=!0;const Xt=it(be.g.position);be.glint.position.copy(ve),be.glint.scale.setScalar((be.kind==="signal"?.6+.4*Math.sin($*5):1)*9/Xt),be.glint.material.opacity=Xt>80?.3:.9}for(const[j,le]of H)ce.has(j)||(le.g.removeFromParent(),le.glint.removeFromParent(),H.delete(j))}function W(k,Q,$,ce){const j=k.time,le=k.stars||[{r:0,period:1,phase:0,size:1}];le.slice(0,2).forEach((z,ne)=>{const Ce=ne?g:d,T=to(k,ne,j);Ce.visible=!0,Ce.position.set(T.x,T.y,T.z),Ce.scale.setScalar(z.size)}),le.length<2&&(g.visible=!1),ui.pos.value[0].copy(d.position),ui.pos.value[1].copy(g.position),g.visible?ui.col.value[1].set(1.25,.95,.72):ui.col.value[1].set(0,0,0),f.update(ce),Dp.value=ce,fe.update(ce),w&&w.update(j),g.visible&&p.update(ce+50),u.update(ce,o);const be=(z,ne)=>z>=0&&k.tech?k.tech[z][ne]:0;for(const z of m){const ne=bt(k,z.b,j);Qe[z.b.id]=ne}let nt=0;for(const z of m)mo(k,z.b,j)&&(nt=Math.max(nt,Math.hypot(Qe[z.b.id].x,Qe[z.b.id].z)));nt=nt*1.2+20;const Rt=Math.hypot(h.target.x,h.target.z);if(Rt>nt&&(h.target.x*=nt/Rt,h.target.z*=nt/Rt),h.target.y=bn.clamp(h.target.y,-nt*.3,nt*.3),h.follow===null&&(h.target.y*=1-Math.min(1,$*2)),h.follow!==null){const z=Qe[h.follow];h.target.lerp(ve.set(z.x,z.y,z.z),Math.min(1,$*6))}Q.dragging||(h.az+=h.vaz,h.pol+=h.vpol,h.vaz*=.92,h.vpol*=.92),h.goalDist&&(h.dist+=(h.goalDist-h.dist)*Math.min(1,$*4),Math.abs(h.goalDist-h.dist)<.01*h.dist&&(h.goalDist=null)),h.pol=bn.clamp(h.pol,.15,Math.PI-.15),h.dist=bn.clamp(h.dist,h.minDist,h.maxDist),a.position.setFromSphericalCoords(h.dist,h.pol,h.az).add(h.target),a.lookAt(h.target);const Wt=bn.clamp(h.dist*.02,.01,12);Math.abs(Wt-a.near)>a.near*.05&&(a.near=Wt,a.far=6e3,a.updateProjectionMatrix()),a.updateMatrixWorld();const Xt=window.innerWidth,yn=window.innerHeight;R=0,E.begin(ce,o);const vt=Q.vis,Cn=z=>!vt||vt.bodies.has(z.id),Gt=z=>!vt||z.owner===vt.owner||vt.seesFleet(z,Hn(z,j)),Yt=z=>!vt||z.owner===vt.owner||vt.intel>=2&&Gt(z),pn=z=>!vt||z.owner===vt.owner||vt.intel>=3&&Gt(z)||vt.warn&&k.bodies[z.to].owner===vt.owner,Mn=z=>!vt||z.owner===vt.owner||vt.intel>=1,nn=new Map;for(const z of k.fleets){if(z.probe)continue;const ne=k.bodies[z.to];if(z.owner===ne.owner?z.owner!==(vt?vt.owner:0):!pn(z))continue;const Ce=z.T-(j-z.t0),T=`${z.to}:${z.owner}`,F=nn.get(T)||{to:z.to,owner:z.owner,n:0,eta:1/0,sized:Mn(z)};F.n+=z.n,F.eta=Math.min(F.eta,Ce),nn.set(T,F)}const ri=new Map;for(const z of nn.values())ri.has(z.to)||ri.set(z.to,[]),ri.get(z.to).push(z);const mi=new Set,Cr=new Map;for(const z of m){const ne=z.b;if(ne.parent===null||Q.selected===ne.id||Q.target===ne.id||ne.sieges.length||k.fleets.some(T=>T.to===ne.id&&T.owner!==ne.owner))continue;const Ce=Qe[ne.parent];ve.copy(z.g.position).project(a),te.set(Ce.x,Ce.y,Ce.z).project(a),!(Math.hypot((ve.x-te.x)*Xt,(ve.y-te.y)*yn)/2>=46)&&(mi.add(ne.id),ne.owner!==ze&&ne.ships>0&&Cn(ne)&&(Cr.has(ne.parent)||Cr.set(ne.parent,[]),Cr.get(ne.parent).push(`<span class="kid" style="color:${ut(ne.owner)}">+${ne.ships}</span>`)))}for(const z of m){const{b:ne}=z,Ce=Qe[ne.id];if(z.g.position.set(Ce.x,Ce.y,Ce.z),z.line.material.uniforms&&(z.line.material.uniforms.uTh.value=ne.phase+2*Math.PI*j/ne.period),ne.parent!==null){const Ue=Qe[ne.parent];z.lineHolder.position.set(Ue.x,Ue.y,Ue.z)}else if(ne.star){const Ue=to(k,ne.star,j);z.lineHolder.position.set(Ue.x,Ue.y,Ue.z)}if(z.reach&&(z.reach.position.set(Ce.x,0,Ce.z),z.reach.visible=Q.selected===ne.id||Q.peek===ne.id||Q.target===ne.id),ne.visitor){const Ue=mo(k,ne,j);if(z.g.visible=Ue,!Ue){z.label.style.visibility="hidden";continue}const $e=k.visit&&k.visit.kind==="comet";if(z.body.visible=z.tail.visible=$e,z.hulk.visible=!$e,$e){const Ze=Math.max(1,Math.hypot(Ce.x,Ce.y,Ce.z)),Et=bn.clamp(2600/Ze,8,60),Ye=bn.clamp(120/Ze,.55,1),Qt=te.set(Ce.x,Ce.y,Ce.z).normalize(),sn=bt(k,ne,j+2),sr=new D(Ce.x-sn.x,Ce.y-sn.y,Ce.z-sn.z).normalize(),{ion:or,dust:Zr,coma:_c}=z.tail.userData;or.forEach((Rr,xc)=>{const Vi=(xc+1)/or.length;Rr.position.copy(Qt).multiplyScalar(Vi*Et),Rr.scale.setScalar(.8+Vi*Et*.12),Rr.material.opacity=.5*Ye*(1-Vi)**1.3}),Zr.forEach((Rr,xc)=>{const Vi=(xc+1)/Zr.length;Rr.position.copy(Qt).multiplyScalar(Vi*Et*.75).addScaledVector(sr,Vi*Vi*Et*.35),Rr.scale.setScalar(1+Vi*Et*.18),Rr.material.opacity=.38*Ye*(1-Vi)**1.1}),_c.position.set(0,0,0),_c.scale.setScalar(2.2+Ye*3),_c.material.opacity=.35+Ye*.4}else z.hulk.rotation.y+=$*.08}if(ne.kind==="station")z.body.rotation.z+=$*(z.body.userData.spin??.5),z.body.userData.set(ne.owner===ze?"#6a7080":ut(ne.owner),$t(Ce),ne.owner!==ze);else if(ne.kind==="asteroid")z.body.rotation.x+=$*.3,z.body.rotation.y+=$*.2;else{z.body.rotation.y+=$*.05;const Ue=z.body.getObjectByName("clouds");Ue&&(Ue.rotation.y+=$*.012);const $e=z.body.material.uniforms;$e&&($e.uT.value=ce,Ue&&($e.uCloudShift.value=-Ue.rotation.y/(Math.PI*2)),$e.uCenter.value.set(Ce.x,Ce.y,Ce.z),z.occ.forEach((Ze,Et)=>{const Ye=Qe[Ze];$e.uOcc.value[Et].set(Ye.x,Ye.y,Ye.z,k.bodies[Ze].size)}),Ue&&(Ue.material.uniforms.uOcc.value=$e.uOcc.value),z.atmo&&(z.atmo.material.uniforms.uCenter.value.set(Ce.x,Ce.y,Ce.z),z.atmo.material.uniforms.uOcc.value=$e.uOcc.value),z.ring&&(z.ring.updateMatrixWorld(!0),$e.uRingN.value.set(0,0,1).transformDirection(z.ring.matrixWorld),$e.uRingIn.value=z.ring.userData.ring.inner,$e.uRingOut.value=z.ring.userData.ring.outer,z.ring.material.uniforms.uCenter.value.set(Ce.x,Ce.y,Ce.z)))}const T=ut(ne.owner);z.owner!==ne.owner&&(z.owner!==null&&(z.pulse=1),z.owner=ne.owner,z.body.material&&z.body.material.uniforms&&z.body.material.uniforms.uCity&&(z.body.material.uniforms.uCity.value=ne.owner===ze?0:1),z.mark.material.uniforms.uColor.value.set(T),z.label.style.color=T),z.pulse=Math.max(0,z.pulse-$);const F=ne.owner+":"+ne.structures.map(Ue=>Ue.type+Ue.level+(Ue.left>0&&!Ue.next||Ue.scrap?"~":"")).join();F!==z.sig&&(z.sig=F,z.structs&&z.structs.removeFromParent(),z.surface.clear(),z.structs=new In,ne.structures.forEach((Ue,$e)=>{if(ne.kind==="station"&&Ue.type==="shipyard")return;const Ze=fM(Ue.type,ne,$e,!Ue.scrap&&(Ue.left<=0||!!Ue.next),Ue.level,E.uT,RM,ne.owner===ze?"#6a7080":ut(ne.owner));(Ue.type==="shipyard"||Ue.type==="skimmer"?z.structs:z.surface).add(Ze)}),z.g.add(z.structs));const q=Q.selected===ne.id,Y=Q.target===ne.id,X=it(z.g.position),ge=Math.max(ne.size*2.4*X,18);z.mark.scale.setScalar(ge/X*(1+z.pulse*.6+(q?Math.sin(ce*5)*.06:0))),z.mark.material.uniforms.uOpacity.value=q?1:Y?.9:ne.owner===ze?.25:.7,ne.size*X>70&&(z.mark.material.uniforms.uOpacity.value*=.25);const Re=Cn(ne)&&ne.ships>0?$n(ne.vet):0;z.mark.material.uniforms.uLvl.value=Re,q||Y?z.mark.material.uniforms.uColor.value.set(q?"#ffffff":T):z.mark.material.uniforms.uColor.value.set(T);const pe=Cn(ne);z.structs&&(z.structs.visible=pe),z.surface.visible=pe;const Ie=pe&&ne.sieges.length>0,we=[],Ge=[],st=(Ue,$e,Ze,Et,Ye,Qt)=>{for(let sn=0;sn<Ue;sn++){if(R>=la)return;const sr=Nt(Ye,sn),or=sr*Math.PI*2+ce*Et*(.8+sr*.4),Zr=Ze*(1+Nt(sn,Ye)*.15);ve.set(Ce.x+Math.cos(or)*Zr,Ce.y+Math.sin(or*.7+sr)*Zr*.15,Ce.z+Math.sin(or)*Zr),Pe.set(-Math.sin(or),0,Math.cos(or)),qt(ve,Pe,ut($e),!1,ce,sn,Ye*131+sn,1,!1,.6),Qt&&Qt.push({p:ve.clone(),owner:$e})}};pe&&st(Math.min(ne.ships,20),ne.owner,ne.size*1.8+.4,.25,ne.id*13,Ie?we:null);for(const Ue of pe?ne.sieges:[])st(Math.min(Ue.n,20),Ue.owner,ne.size*2.4+.8,-.18,ne.id*29+Ue.owner,Ge);if(Ie){for(let Ze=0;Ze<Math.ceil(ne.guns);Ze++){const Et=Nt(ne.id,Ze*2)*Math.PI*2+ce*.05,Ye=(Nt(Ze*2+1,ne.id)-.5)*1.6,Qt=ne.size*1.02;we.push({p:new D(Ce.x+Math.cos(Et)*Math.cos(Ye)*Qt,Ce.y+Math.sin(Ye)*Qt,Ce.z+Math.sin(Et)*Math.cos(Ye)*Qt),owner:ne.owner})}const Ue=Ge.length+we.length;let $e=Ue*$*1.6;for(;$e>0&&Ge.length&&we.length;){if(Math.random()<$e){const Ze=Math.random()<Ge.length/Ue,Et=(Ze?Ge:we)[Math.random()*(Ze?Ge:we).length|0],Ye=(Ze?we:Ge)[Math.random()*(Ze?we:Ge).length|0];We(Et.p,Ye.p,ut(Et.owner),Math.min(2,be(Et.owner,"weapons")),be(Ye.owner,"armour")>=2)}$e-=1}for(const[Ze,Et]of[[ne.lostDef,we],[ne.lostAtk,Ge]])for(let Ye=0;Ye<Math.min(3,Ze||0);Ye++){const Qt=Et.length?Et[Math.random()*Et.length|0].p:ve.set(Ce.x,Ce.y,Ce.z);fe.explosion(Qt,.9+Math.random()*.3)}}ne.lostDef=ne.lostAtk=0,ne.captured&&(z.pulse=1,ne.captured=!1,fe.ring(ve.set(Ce.x,Ce.y,Ce.z),ut(ne.owner),ne.size*3.5,1.4));const ke=ne.wonder?1:ne.project?Math.max(.02,Math.min(1,1-ne.project.left/Kt[ne.project.key].time)):0,xt=Math.round(ke*60);if(z.megaStep!==xt&&(z.megaStep=xt,z.mega&&(z.g.remove(z.mega),z.mega.geometry.dispose(),z.mega=null),xt)){const Ue=ne.size*2.1+.6;z.mega=new Lt(new vr(Ue,Math.max(.05,ne.size*.04),6,96,xt/60*Math.PI*2),new ju({color:"#c7a6ff",transparent:!0,opacity:ne.wonder?.9:.55,depthWrite:!1})),z.mega.rotation.x=Math.PI/2,z.g.add(z.mega)}if(z.mega&&(z.mega.rotation.z=ce*.05),ve.copy(z.g.position).project(a),ve.z>1||mi.has(ne.id)){z.label.style.visibility="hidden";continue}const Vt=(pe?ne.sieges:[]).map(Ue=>`<span class="atk" style="color:${ut(Ue.owner)}">${lt("attack")}${Ue.n}</span>`).join(""),kt=pe?ne.owner===ze?`<i class="guns">${lt("guns")}${Math.ceil(ne.guns)}</i>`:ne.ships?`<b>${ne.ships}</b>`:"":'<b class="unk">?</b>',mn=(Cr.get(ne.id)||[]).join(""),Ne=(ri.get(ne.id)||[]).map(Ue=>{const $e=Math.max(0,Ue.eta),Ze=Ue.owner===ne.owner;return`<span class="${Ze?"rein":"inc"}" style="color:${ut(Ue.owner)}">${lt(Ze?"reinforce":"incoming")}${Ue.sized?Ue.n:"?"} ${Math.floor($e/60)}:${String(Math.floor($e%60)).padStart(2,"0")}</span>`}).join(""),Sn=(k.happenings||[]).filter(Ue=>Ue.at===ne.id).map(Ue=>{const $e=xr[Ue.kind],Ze=j<Ue.starts,Et=!Ze&&Ue.holder!==ze,Ye=Math.max(0,Ze?Ue.starts-j:Et?$e.hold-Ue.held:Ue.ends-j),Qt=Et?ut(Ue.holder):"#c7a6ff",sn=`${Math.floor(Ye/60)}:${String(Math.floor(Ye%60)).padStart(2,"0")}`;return`<span class="ev" style="color:${Qt}">${lt(Ue.kind)} ${Ze?`in ${sn}`:Et?`hold ${sn}`:`gone ${sn}`}</span>`}).join(""),yt=(ne.perk?`<i class="perk" title="${dn[ne.perk].name}">${lt(ne.perk)}</i> `:"")+(ne.wonder?`<i class="perk">${lt(ne.wonder)}</i> `:ne.project?`<i class="perk proj">${lt(ne.project.key)}</i> `:""),Rn=`<span class="row1">${kt}${mn}</span>${Vt}${Ne}${Sn}<small>${yt}${ne.name}</small>`;Rn!==z.shown&&(z.label.innerHTML=Rn,z.shown=Rn),z.label.classList.toggle("can",Q.mode==="project"&&ne.owner===(Q.me??0)&&!Ps(k,ne,Q.projKey)),z.label.style.visibility="visible";const si=(ve.x*.5+.5)*Xt,Ci=(-ve.y*.5+.5)*yn;z.label.style.transform=`translate(${si}px, ${Ci+ge/2+2}px) translate(-50%, 0)`}S(k,j,ce);let rr=0,Us=0;for(const z of k.fleets){if(!Gt(z))continue;const ne=Hn(z,j),Ce=ut(z.owner);Pe.set(z.p1.x-z.p0.x,z.p1.y-z.p0.y,z.p1.z-z.p0.z),Pe.lengthSq()<1e-9&&Pe.set(ne.nx,ne.ny,ne.nz),Pe.normalize(),je.crossVectors(Pe,De),je.lengthSq()<1e-6&&je.set(1,0,0),je.normalize();const T=z.probe?1:Mn(z)?z.n:Math.min(z.n,3),F=Math.max(3,Math.ceil(Math.sqrt(T)));for(let q=0;q<T&&!(R>=la);q++){const Y=Math.floor(q/F),X=q%F-(F-1)/2,ge=j-z.t0,Re=bn.smoothstep(Math.min(ge,z.T-ge),0,12)*.5+.5,pe=Nt(z.id,q),Ie=Nt(q,z.id),we=Nt(z.id+7,q*3),Ge=ce*(.3+pe*.4)+Ie*6;ve.set(ne.x,ne.y,ne.z).addScaledVector(je,(X*(.8+we*.4)+Y%2*.4+(pe-.5)*.6+Math.sin(Ge)*.08)*Re).addScaledVector(De,((Ie-.5)*.9+Math.cos(Ge*.8)*.06)*Re).addScaledVector(Pe,(-Y*(.9+we*.4)-(Ie-.5)*.7)*Re);const st=z.probe?ne:Hn(z,j+(we-.5)*2.5);qt(ve,ue.set(st.nx,st.ny,st.nz),Ce,st.burning,ce,q,z.id*97+q,1+.35*be(z.owner,"drives"),z.probe)}if(rr<200*N&&Yt(z)){const q=new tt(Ce);let Y=ne;for(let pe=1;pe<=N;pe++){const Ie=ne.progress+(1-ne.progress)*pe/N,we=Hn(z,z.t0+Ie*z.T),Ge=1-pe/N*.7;U.set([Y.x,Y.y,Y.z,we.x,we.y,we.z],rr*6),B.set([q.r*Ge,q.g*Ge,q.b*Ge,q.r*Ge,q.g*Ge,q.b*Ge],rr*6),rr++,Y=we}const X=se(Us++);X.visible=!0,X.position.set(z.p1.x,z.p1.y,z.p1.z),X.material.uniforms.uColor.value.set(Ce);const ge=z.owner!==(Q.me??0),Re=ge?1+.35*Math.sin(ce*6):1;X.material.uniforms.uOpacity.value=ge?.9:.5,X.scale.setScalar((ge?22:14)*Re/it(X.position))}}E.end();let Po=0;for(const z of k.fleets){const ne=Hn(z,j);ve.set(ne.x,ne.y,ne.z).project(a);const Ce=cn(Po++);if(ve.z>1||!Gt(z)){Ce.style.visibility="hidden";continue}const T=z.owner===(Q.me??0),F=z.probe?`${lt("probe")}${a.position.distanceTo(te.set(ne.x,ne.y,ne.z))<60?" probe":""}`:`${lt("fleet")}${Mn(z)?z.n:"?"}${z.dark?` ${lt("dark")}`:""}`,q=Mn(z)?$n(z.vet):0;Ce._v!==q&&(Ce._v=q,Ce.dataset.v=q),Ce._t!==F&&(Ce._t=F,Ce.innerHTML=F),Ce.style.color=ut(z.owner),Ce.style.borderColor=ut(z.owner),Ce.style.opacity=T?Q.fleet===z.id?1:.85:.6,Ce.classList.toggle("sel",Q.fleet===z.id),Ce.style.visibility="visible",Ce.style.transform=`translate(${(ve.x*.5+.5)*Xt+12}px, ${(-ve.y*.5+.5)*yn-9}px)`}for(let z=Po;z<Pt.length;z++)Pt[z].style.visibility="hidden";for(let z=Us;z<K.length;z++)K[z].visible=!1;L.setDrawRange(0,rr*2),L.attributes.position.needsUpdate=!0,L.attributes.color.needsUpdate=!0;for(const z of Fe)z.live&&(z.age+=$,!(z.age<z.life)&&(z.live=!1,z.pd?fe.intercept(z.b):fe.impact(z.b,z.c,z.rail)));if(fe.update(ce,2*Math.tan(bn.degToRad(a.fov/2))/window.innerHeight),Q.preview){const{p1:z}=Q.preview;ae.visible=!0;const ne={...Q.preview,t0:0};for(let T=0;T<=128;T++){const F=Hn(ne,T/128*ne.T);ee.attributes.position.setXYZ(T,F.x,F.y,F.z)}ee.attributes.position.needsUpdate=!0,ae.computeLineDistances(),ae.material.dashSize=6/it(ve.set(z.x,z.y,z.z)),ae.material.gapSize=ae.material.dashSize*.7;const Ce=se(Us++);Ce.visible=!0,Ce.position.set(z.x,z.y,z.z),Ce.material.uniforms.uColor.value.set("#ffffff"),Ce.material.uniforms.uOpacity.value=.6,Ce.scale.setScalar(22/it(Ce.position))}else ae.visible=!1;Bt($),Le(ce),l.render(c,a,ce)}function J(k,Q){const $=window.innerWidth,ce=window.innerHeight;let j=null,le=1/0;for(const be of m){if(!be.g.visible||(ve.copy(be.g.position).project(a),ve.z>1))continue;const nt=Math.hypot((ve.x*.5+.5)*$-k,(-ve.y*.5+.5)*ce-Q),Rt=Math.max(30,be.b.size*it(be.g.position)+12);nt<Rt&&nt<le&&(le=nt,j=be.b.id)}return j}function ie(k,Q,$,ce){let j=null,le=24;for(const be of k.fleets){if(be.owner!==ce)continue;const nt=Hn(be,k.time);if(ve.set(nt.x,nt.y,nt.z).project(a),ve.z>1)continue;const Rt=Math.hypot((ve.x*.5+.5)*window.innerWidth-Q,(-ve.y*.5+.5)*window.innerHeight-$);Rt<le&&(le=Rt,j=be.id)}return j}function me(k,Q){const $=new D(k/window.innerWidth*2-1,-(Q/window.innerHeight)*2+1,.5).unproject(a),ce=new sc(a.position,$.sub(a.position).normalize()),j=new Li(De.clone(),-h.target.y),le=ce.intersectPlane(j,new D);if(le&&le.distanceTo(a.position)<h.dist*4)return le;const be=new Li().setFromNormalAndCoplanarPoint(a.getWorldDirection(new D),h.target);return ce.intersectPlane(be,new D)}function _e(k,Q,$){h.follow=null,h.goalDist=null;const ce=me(k,Q),j=bn.clamp(h.dist*$,h.minDist,h.maxDist),le=j/h.dist;h.dist=j,ce&&h.target.lerp(ce,1-le)}function re(k,Q){h.follow=null;const $=2*h.dist*Math.tan(bn.degToRad(a.fov/2))/window.innerHeight,ce=new D().setFromMatrixColumn(a.matrixWorld,0),j=new D().crossVectors(De,ce).normalize();h.target.addScaledVector(ce,-k*$).addScaledVector(j,Q*$)}function de(k,Q,$=!0){if(h.follow=Q,Q===null||!$)return;const ce=k.bodies[Q];h.goalDist=Math.max(h.minDist,ce.size*9+3)}function Me(k,Q,$){const ce=J(Q,$);return ce!==null?m[ce].g.position.clone():me(Q,$)||h.target.clone()}function Ve(k,Q,$){h.follow=null,h.goalDist=null;const ce=new D().subVectors(a.position,h.target),j=new tv().setFromVector3(ce);$=bn.clamp(j.phi+$,.15,Math.PI-.15)-j.phi;const be=new D().setFromMatrixColumn(a.matrixWorld,0).normalize(),nt=new Gi().setFromAxisAngle(De,Q).multiply(new Gi().setFromAxisAngle(be,$)),Rt=a.position.clone().sub(k).applyQuaternion(nt).add(k);h.target.sub(k).applyQuaternion(nt).add(k),j.setFromVector3(Rt.clone().sub(h.target)),h.az=j.theta,h.pol=j.phi,h.dist=j.radius}function Ee(k,Q,$){const ce=J(k,Q);if(h.goalDist=null,ce===null){_e(k,Q,$);return}h.follow=null;const j=m[ce].g.position,le=bn.clamp(h.dist*$,h.minDist,h.maxDist);h.target.lerp(j,1-le/h.dist),h.dist=le}function Se(k){return ve.copy(m[k].g.position).project(a),{x:(ve.x*.5+.5)*window.innerWidth,y:(-ve.y*.5+.5)*window.innerHeight}}function He(k){r=k,o=s(),l.setSamples(k==="high"?4:2),l.setLevel(k),ct()}l.setLevel(r);let Xe=0,rt=0,V=null,xe=0,oe=null,ye=!1;function Le(k){if(V!==null){const j=k-V;j>0&&j<.5&&(rt+=j,Xe++)}if(V=k,Xe<90)return;const Q=rt/Xe;rt=0,Xe=0;const $=s(),ce=$>=1.5?Math.max(1,$*.65):$*.85;if(oe){Q>oe.avg*.9&&(o=oe.pr,ye=!0,ct()),oe=null;return}!ye&&Q>1/45&&o>ce?(oe={pr:o,avg:Q},o=Math.max(ce,o-.25),xe=k+20,ct()):Q<1/57&&o<$&&k>xe&&(o=Math.min($,o+.25),ct())}return{_debug:{scene:c,renderer:i,post:l,camera:a,fx:fe,get pixelRatio(){return o}},build:x,render:W,resize:ct,setQuality:He,pick:J,pickFleet:ie,orbit:h,zoomAt:_e,pan:re,focus:de,screenOf:Se,pivotAt:Me,rotateAround:Ve,zoomToward:Ee}}class LM{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return DM(e).buffer}}function DM(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function Ip(n){return new IM(n).unpack()}function Up(n){const e=new UM,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class IM{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,o;for(;i<e;)s=t[i],s<160?(o=s,i++):(s^192)<32?(o=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(o=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(o=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(o);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class UM{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),o=2**32,c=t<<31|i+1023<<20|s/o&1048575,a=s%o;this._bufferBuilder.append(203),this.pack_int32(c),this.pack_int32(a)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const c=this.pack(e[o]);if(c instanceof Promise)return c.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new LM,this._textEncoder=new TextEncoder}}let Np=!0,kp=!0;function eo(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function qr(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){ad("Unable to polyfill events");return}const r=n.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(c,a){if(c!==e)return s.apply(this,arguments);const l=u=>{const f=t(u);f&&(a.handleEvent?a.handleEvent(f):a(f))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,l),s.apply(this,[c,l])};const o=r.removeEventListener;r.removeEventListener=function(c,a){if(c!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(a))return o.apply(this,arguments);const l=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[c,l])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(c){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),c&&this.addEventListener(e,this["_on"+e]=c)},enumerable:!0,configurable:!0})}function NM(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Np=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function kM(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(kp=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function ad(){if(typeof window=="object"){if(Np)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function cd(n,e){kp&&console.warn(n+" is deprecated, please use "+e+" instead.")}function FM(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i){const r=parseInt(i.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(eo(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(eo(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(eo(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=eo(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Jf(n){return Object.prototype.toString.call(n)==="[object Object]"}function Fp(n){return Jf(n)?Object.keys(n).reduce(function(e,t){const i=Jf(n[t]),r=i?Fp(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function lu(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?lu(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{lu(n,n.get(r),t)})}))}function Qf(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{n.forEach(c=>{c.type===i&&c.trackId===o.id&&lu(n,c,r)})}),r}const eh=ad;function Op(n,e){if(e.version>=64)return;const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(c){if(typeof c!="object"||c.mandatory||c.optional)return c;const a={};return Object.keys(c).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof c[l]=="object"?c[l]:{ideal:c[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const f=function(d,p){return d?d+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(u.ideal!==void 0){a.optional=a.optional||[];let d={};typeof u.ideal=="number"?(d[f("min",l)]=u.ideal,a.optional.push(d),d={},d[f("max",l)]=u.ideal,a.optional.push(d)):(d[f("",l)]=u.ideal,a.optional.push(d))}u.exact!==void 0&&typeof u.exact!="number"?(a.mandatory=a.mandatory||{},a.mandatory[f("",l)]=u.exact):["min","max"].forEach(d=>{u[d]!==void 0&&(a.mandatory=a.mandatory||{},a.mandatory[f(d,l)]=u[d])})}),c.advanced&&(a.optional=(a.optional||[]).concat(c.advanced)),a},r=function(c,a){if(e.version>=61)return a(c);if(c=JSON.parse(JSON.stringify(c)),c&&typeof c.audio=="object"){const l=function(u,f,d){f in u&&!(d in u)&&(u[d]=u[f],delete u[f])};c=JSON.parse(JSON.stringify(c)),l(c.audio,"autoGainControl","googAutoGainControl"),l(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=i(c.audio)}if(c&&typeof c.video=="object"){let l=c.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete c.video.facingMode;let f;if(l.exact==="environment"||l.ideal==="environment"?f=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(f=["front"]),f)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let p=d.find(g=>f.some(_=>g.label.toLowerCase().includes(_)));return!p&&d.length&&f.includes("back")&&(p=d[d.length-1]),p&&(c.video.deviceId=l.exact?{exact:p.deviceId}:{ideal:p.deviceId}),c.video=i(c.video),eh("chrome: "+JSON.stringify(c)),a(c)})}c.video=i(c.video)}return eh("chrome: "+JSON.stringify(c)),a(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(c,a,l){r(c,u=>{t.webkitGetUserMedia(u,a,f=>{l&&l(s(f))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const c=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(a){return r(a,l=>c(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(f=>{f.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function zp(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function Bp(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(a=>a.track&&a.track.id===s.track.id):o={track:s.track};const c=new Event("track");c.track=s.track,c.receiver=o,c.transceiver={receiver:o},c.streams=[r.stream],this.dispatchEvent(c)}),r.stream.getTracks().forEach(s=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(a=>a.track&&a.track.id===s.id):o={track:s};const c=new Event("track");c.track=s,c.receiver=o,c.transceiver={receiver:o},c.streams=[r.stream],this.dispatchEvent(c)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else qr(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Gp(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(c,a){let l=r.apply(this,arguments);return l||(l=e(this,c),this._senders.push(l)),l};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(c){s.apply(this,arguments);const a=this._senders.indexOf(c);a!==-1&&this._senders.splice(a,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(o=>{const c=this._senders.find(a=>a.track===o);c&&this._senders.splice(this._senders.indexOf(c),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Vp(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const o=i.apply(this,[]);return o.forEach(c=>c._pc=this),o});const r=n.RTCPeerConnection.prototype.addTrack;r&&(n.RTCPeerConnection.prototype.addTrack=function(){const o=r.apply(this,arguments);return o._pc=this,o}),n.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(c=>Qf(c,o.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const s=i.apply(this,[]);return s.forEach(o=>o._pc=this),s}),qr(n,"track",r=>(r.receiver._pc=r.srcElement,r)),n.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>Qf(o,s.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const r=arguments[0];let s,o,c;return this.getSenders().forEach(a=>{a.track===r&&(s?c=!0:s=a)}),this.getReceivers().forEach(a=>(a.track===r&&(o?c=!0:o=a),a.track===r)),c||s&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Hp(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,c){if(!c)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const a=e.apply(this,arguments);return this._shimmedLocalStreams[c.id]?this._shimmedLocalStreams[c.id].indexOf(a)===-1&&this._shimmedLocalStreams[c.id].push(a):this._shimmedLocalStreams[c.id]=[c,a],a};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(f=>f.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const c=this.getSenders();t.apply(this,arguments);const a=this.getSenders().filter(l=>c.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(a)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(c=>{const a=this._shimmedLocalStreams[c].indexOf(o);a!==-1&&this._shimmedLocalStreams[c].splice(a,1),this._shimmedLocalStreams[c].length===1&&delete this._shimmedLocalStreams[c]}),r.apply(this,arguments)}}function $p(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Hp(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(f=>this._reverseStreams[f.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(f=>{if(this.getSenders().find(p=>p.track===f))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const f=new n.MediaStream(u.getTracks());this._streams[u.id]=f,this._reverseStreams[f.id]=u,u=f}i.apply(this,[u])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},n.RTCPeerConnection.prototype.addTrack=function(u,f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[f.id];if(g)g.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new n.MediaStream([u]);this._streams[f.id]=_,this._reverseStreams[_.id]=f,this.addStream(_)}return this.getSenders().find(_=>_.track===u)};function s(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],g=l._streams[p.id];f=f.replace(new RegExp(g.id,"g"),p.id)}),new RTCSessionDescription({type:u.type,sdp:f})}function o(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],g=l._streams[p.id];f=f.replace(new RegExp(p.id,"g"),g.id)}),new RTCSessionDescription({type:u.type,sdp:f})}["createOffer","createAnswer"].forEach(function(l){const u=n.RTCPeerConnection.prototype[l],f={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[g=>{const _=s(this,g);d[0].apply(null,[_])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):u.apply(this,arguments).then(g=>s(this,g))}};n.RTCPeerConnection.prototype[l]=f[l]});const c=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?c.apply(this,arguments):(arguments[0]=o(this,arguments[0]),c.apply(this,arguments))};const a=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const l=a.get.apply(this);return l.type===""?l:s(this,l)}}),n.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(p=>{this._streams[p].getTracks().find(_=>u.track===_)&&(d=this._streams[p])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function uu(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function Wp(n,e){e.version>102||qr(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const th=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Wp,shimAddTrackRemoveTrack:$p,shimAddTrackRemoveTrackWithNative:Hp,shimGetSendersWithDtmf:Gp,shimGetUserMedia:Op,shimMediaStream:zp,shimOnTrack:Bp,shimPeerConnection:uu,shimSenderReceiverGetStats:Vp},Symbol.toStringTag,{value:"Module"}));function Xp(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,o){cd("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(o,c,a){c in o&&!(a in o)&&(o[a]=o[c],delete o[c])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o.audio,"autoGainControl","mozAutoGainControl"),r(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},i&&i.prototype.getSettings){const o=i.prototype.getSettings;i.prototype.getSettings=function(){const c=o.apply(this,arguments);return r(c,"mozAutoGainControl","autoGainControl"),r(c,"mozNoiseSuppression","noiseSuppression"),c}}if(i&&i.prototype.applyConstraints){const o=i.prototype.applyConstraints;i.prototype.applyConstraints=function(c){return this.kind==="audio"&&typeof c=="object"&&(c=JSON.parse(JSON.stringify(c)),r(c,"autoGainControl","mozAutoGainControl"),r(c,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[c])}}}}function OM(n,e){n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)}))}function qp(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function du(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]}))}function Yp(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,o,c]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[s||null]).then(a=>{if(e.version<53&&!o)try{a.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;a.forEach((u,f)=>{a.set(f,Object.assign({},u,{type:t[u.type]||u.type}))})}return a}).then(o,c)}}function Kp(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function jp(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),qr(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Zp(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){cd("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function Jp(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function Qp(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.addTransceiver;t&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(c=>{if("rid"in c&&!/^[a-z0-9]{0,16}$/i.test(c.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in c&&!(parseFloat(c.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in c&&!(parseFloat(c.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(s){const{sender:c}=o,a=c.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=r,c.sendEncodings=r,this.setParametersPromises.push(c.setParameters(a).then(()=>{delete c.sendEncodings}).catch(()=>{delete c.sendEncodings})))}return o})}function e0(n,e){if(!(typeof n=="object"&&n.RTCRtpSender)||e.version>=110)return;const t=n.RTCRtpSender.prototype.getParameters;t&&(n.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function t0(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function n0(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const nh=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Qp,shimCreateAnswer:n0,shimCreateOffer:t0,shimGetDisplayMedia:OM,shimGetParameters:e0,shimGetStats:Yp,shimGetUserMedia:Xp,shimOnTrack:qp,shimPeerConnection:du,shimRTCDataChannel:Jp,shimReceiverGetStats:jp,shimRemoveStream:Zp,shimSenderGetStats:Kp},Symbol.toStringTag,{value:"Module"}));function i0(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function r0(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,i.dispatchEvent(o)})}),e.apply(i,arguments)}}}function s0(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d},e.createAnswer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d};let c=function(a,l,u){const f=r.apply(this,[a]);return u?(f.then(l,u),Promise.resolve()):f};e.setLocalDescription=c,c=function(a,l,u){const f=s.apply(this,[a]);return u?(f.then(l,u),Promise.resolve()):f},e.setRemoteDescription=c,c=function(a,l,u){const f=o.apply(this,[a]);return u?(f.then(l,u),Promise.resolve()):f},e.addIceCandidate=c}function o0(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(a0(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}.bind(e))}function a0(n){return n&&n.video!==void 0?Object.assign({},n,{video:Fp(n.video)}):n}function c0(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let o=0;o<i.iceServers.length;o++){let c=i.iceServers[o];c.urls===void 0&&c.url?(cd("RTCIceServer.url","RTCIceServer.urls"),c=JSON.parse(JSON.stringify(c)),c.urls=c.url,delete c.url,s.push(c)):s.push(i.iceServers[o])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function l0(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function u0(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function d0(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const ih=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:d0,shimCallbacksAPI:s0,shimConstraints:a0,shimCreateOfferLegacy:u0,shimGetUserMedia:o0,shimLocalStreamsAPI:i0,shimRTCIceServerUrls:c0,shimRemoteStreamsAPI:r0,shimTrackEventTransceiver:l0},Symbol.toStringTag,{value:"Module"}));function zM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var f0={exports:{}};(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(r=>r.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const r={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let s=8;s<i.length;s+=2)switch(i[s]){case"raddr":r.relatedAddress=i[s+1];break;case"rport":r.relatedPort=parseInt(i[s+1],10);break;case"tcptype":r.tcpType=i[s+1];break;case"ufrag":r.ufrag=i[s+1],r.usernameFragment=i[s+1];break;default:r[i[s]]===void 0&&(r[i[s]]=i[s+1]);break}return r},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const r=t.component;r==="rtp"?i.push(1):r==="rtcp"?i.push(2):i.push(r),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const s=t.type;return i.push("typ"),i.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const r={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),r.name=i[0],r.clockRate=parseInt(i[1],10),r.channels=i.length===3?parseInt(i[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<s.length;o++)r=s[o].trim().split("="),i[r[0].trim()]=r[1];return i},e.writeFmtp=function(t){let i="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?s.push(o+"="+t.parameters[o]):s.push(o)}),i+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{i+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,i),10)},s=t.indexOf(":",i);return s>-1?(r.attribute=t.substring(i+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(i+1),r},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(r=>parseInt(r,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let r="a=setup:"+i+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const r=e.matchPrefix(t+i,"a=ice-ufrag:")[0],s=e.matchPrefix(t+i,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let c=3;c<s.length;c++){const a=s[c],l=e.matchPrefix(t,"a=rtpmap:"+a+" ")[0];if(l){const u=e.parseRtpMap(l),f=e.matchPrefix(t,"a=fmtp:"+a+" ");switch(u.parameters=f.length?e.parseFmtp(f[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+a+" ").map(e.parseRtcpFb),i.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(c=>{i.headerExtensions.push(e.parseExtmap(c))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(c=>{o.forEach(a=>{c.rtcpFeedback.find(u=>u.type===a.type&&u.parameter===a.parameter)||c.rtcpFeedback.push(a)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(o=>{r+=e.writeRtpMap(o),r+=e.writeFmtp(o),r+=e.writeRtcpFb(o)});let s=0;return i.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(o=>{r+=e.writeExtmap(o)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,o=r.fecMechanisms.indexOf("ULPFEC")!==-1,c=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),a=c.length>0&&c[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));u.length>0&&u[0].length>1&&u[0][0]===a&&(l=u[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let p={ssrc:a,codecPayloadType:parseInt(d.parameters.apt,10)};a&&l&&(p.rtx={ssrc:l}),i.push(p),s&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:a,mechanism:o?"red+ulpfec":"red"},i.push(p))}}),i.length===0&&a&&i.push({ssrc:a});let f=e.matchPrefix(t,"b=");return f.length&&(f[0].indexOf("b=TIAS:")===0?f=parseInt(f[0].substring(7),10):f[0].indexOf("b=AS:")===0?f=parseInt(f[0].substring(5),10)*1e3*.95-50*40*8:f=void 0,i.forEach(d=>{d.maxBitrate=f})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(c=>e.parseSsrcMedia(c)).filter(c=>c.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return i.mux=o.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return i=r[0].substring(7).split(" "),{stream:i[0],track:i[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return i=s[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:i.fmt,maxMessageSize:s};const c=e.matchPrefix(t,"a=sctpmap:");if(c.length>0){const a=c[0].substring(10).split(" ");return{port:parseInt(a[0],10),protocol:a[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,i){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&r.push("a=max-message-size:"+i.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,r){let s;const o=i!==void 0?i:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(f0);var h0=f0.exports;const Ss=zM(h0),BM=$0({__proto__:null,default:Ss},[h0]);function Ma(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=Ss.parseCandidate(i.candidate);for(const o in s)o in r||Object.defineProperty(r,o,{value:s[o]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,qr(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function fu(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||qr(n,"icecandidate",e=>{if(e.candidate){const t=Ss.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Sa(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(c){if(!c||!c.sdp)return!1;const a=Ss.splitSections(c.sdp);return a.shift(),a.some(l=>{const u=Ss.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},i=function(c){const a=c.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(a===null||a.length<2)return-1;const l=parseInt(a[1],10);return l!==l?-1:l},r=function(c){let a=65536;return e.browser==="firefox"&&(e.version<57?c===-1?a=16384:a=2147483637:e.version<60?a=e.version===57?65535:65536:a=2147483637),a},s=function(c,a){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=Ss.matchPrefix(c.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&a!==-1&&(l=2147483637),l},o=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:a}=this.getConfiguration();a==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const a=i(arguments[0]),l=r(a),u=s(arguments[0],a);let f;l===0&&u===0?f=Number.POSITIVE_INFINITY:l===0||u===0?f=Math.max(l,u):f=Math.min(l,u);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return f}}),this._sctp=d}return o.apply(this,arguments)}}function ba(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const o=r.send;r.send=function(){const a=arguments[0],l=a.length||a.size||a.byteLength;if(r.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return o.apply(r,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const s=i.apply(this,arguments);return t(s,this),s},qr(n,"datachannel",r=>(t(r.channel,r.target),r))}function hu(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",r);s.dispatchEvent(o)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function pu(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function wa(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Ta(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const GM=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:pu,shimAddIceCandidateNullOrEmpty:wa,shimConnectionState:hu,shimMaxMessageSize:Sa,shimParameterlessSetLocalDescription:Ta,shimRTCIceCandidate:Ma,shimRTCIceCandidateRelayProtocol:fu,shimSendThrowTypeError:ba},Symbol.toStringTag,{value:"Module"}));function VM({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=ad,i=FM(n),r={browserDetails:i,commonShim:GM,extractVersion:eo,disableLog:NM,disableWarnings:kM,sdp:BM};switch(i.browser){case"chrome":if(!th||!uu||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=th,wa(n,i),Ta(n),Op(n,i),zp(n),uu(n,i),Bp(n,i),$p(n,i),Gp(n),Vp(n,i),Wp(n,i),Ma(n),fu(n),hu(n),Sa(n,i),ba(n,i),pu(n,i);break;case"firefox":if(!nh||!du||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=nh,wa(n,i),Ta(n),Xp(n,i),du(n,i),Yp(n,i),qp(n),Zp(n),Kp(n),jp(n),Jp(n),Qp(n,i),e0(n,i),t0(n,i),n0(n,i),Ma(n),hu(n),Sa(n,i),ba(n,i);break;case"safari":if(!ih||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=ih,wa(n,i),Ta(n),c0(n),u0(n),s0(n),i0(n),r0(n),l0(n),o0(n),d0(n),Ma(n),fu(n),Sa(n,i),ba(n,i),pu(n,i);break;default:t("Unsupported browser!");break}return r}const rh=VM({window:typeof window>"u"?void 0:window});function Yr(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class p0{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,o=0;for(;o<i;){const c=Math.min(i,o+this.chunkedMTU),a=e.slice(o,c),l={__peerData:this._dataCount,n:s,data:a,total:r};t.push(l),o=c,s++}return this._dataCount++,t}}}function HM(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const ol=rh.default||rh,Zs=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return ol.browserDetails.browser}getVersion(){return ol.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=ol.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},$M=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),m0=()=>Math.random().toString(36).slice(2),sh={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class WM extends p0{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=sh,this.browser=Zs.getBrowser(),this.browserVersion=Zs.getVersion(),this.pack=Up,this.unpack=Ip,this.supports=function(){const t={browser:Zs.isBrowserSupported(),webRTC:Zs.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(sh),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Zs.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t}(),this.validateId=$M,this.randomToken=m0}}const Zn=new WM,XM="PeerJS: ";class qM{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[XM,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var Oe=new qM,ld={},YM=Object.prototype.hasOwnProperty,jn="~";function wo(){}Object.create&&(wo.prototype=Object.create(null),new wo().__proto__||(jn=!1));function KM(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function g0(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new KM(t,i||n,r),o=jn?jn+e:e;return n._events[o]?n._events[o].fn?n._events[o]=[n._events[o],s]:n._events[o].push(s):(n._events[o]=s,n._eventsCount++),n}function Ea(n,e){--n._eventsCount===0?n._events=new wo:delete n._events[e]}function Bn(){this._events=new wo,this._eventsCount=0}Bn.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)YM.call(t,i)&&e.push(jn?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Bn.prototype.listeners=function(e){var t=jn?jn+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=new Array(s);r<s;r++)o[r]=i[r].fn;return o};Bn.prototype.listenerCount=function(e){var t=jn?jn+e:e,i=this._events[t];return i?i.fn?1:i.length:0};Bn.prototype.emit=function(e,t,i,r,s,o){var c=jn?jn+e:e;if(!this._events[c])return!1;var a=this._events[c],l=arguments.length,u,f;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,t),!0;case 3:return a.fn.call(a.context,t,i),!0;case 4:return a.fn.call(a.context,t,i,r),!0;case 5:return a.fn.call(a.context,t,i,r,s),!0;case 6:return a.fn.call(a.context,t,i,r,s,o),!0}for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];a.fn.apply(a.context,u)}else{var d=a.length,p;for(f=0;f<d;f++)switch(a[f].once&&this.removeListener(e,a[f].fn,void 0,!0),l){case 1:a[f].fn.call(a[f].context);break;case 2:a[f].fn.call(a[f].context,t);break;case 3:a[f].fn.call(a[f].context,t,i);break;case 4:a[f].fn.call(a[f].context,t,i,r);break;default:if(!u)for(p=1,u=new Array(l-1);p<l;p++)u[p-1]=arguments[p];a[f].fn.apply(a[f].context,u)}}return!0};Bn.prototype.on=function(e,t,i){return g0(this,e,t,i,!1)};Bn.prototype.once=function(e,t,i){return g0(this,e,t,i,!0)};Bn.prototype.removeListener=function(e,t,i,r){var s=jn?jn+e:e;if(!this._events[s])return this;if(!t)return Ea(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!r||o.once)&&(!i||o.context===i)&&Ea(this,s);else{for(var c=0,a=[],l=o.length;c<l;c++)(o[c].fn!==t||r&&!o[c].once||i&&o[c].context!==i)&&a.push(o[c]);a.length?this._events[s]=a.length===1?a[0]:a:Ea(this,s)}return this};Bn.prototype.removeAllListeners=function(e){var t;return e?(t=jn?jn+e:e,this._events[t]&&Ea(this,t)):(this._events=new wo,this._eventsCount=0),this};Bn.prototype.off=Bn.prototype.removeListener;Bn.prototype.addListener=Bn.prototype.on;Bn.prefixed=jn;Bn.EventEmitter=Bn;ld=Bn;var Kr={};Yr(Kr,"ConnectionType",()=>wr);Yr(Kr,"PeerErrorType",()=>un);Yr(Kr,"BaseConnectionErrorType",()=>mu);Yr(Kr,"DataConnectionErrorType",()=>ud);Yr(Kr,"SerializationType",()=>uc);Yr(Kr,"SocketEventType",()=>_r);Yr(Kr,"ServerMessageType",()=>Nn);var wr=function(n){return n.Data="data",n.Media="media",n}({}),un=function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n}({}),mu=function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n}({}),ud=function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n}({}),uc=function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n}({}),_r=function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n}({}),Nn=function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n}({});const v0="1.5.5";class jM extends ld.EventEmitter{constructor(e,t,i,r,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const c=e?"wss://":"ws://";this._baseUrl=c+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+v0),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),Oe.log("Server message received:",s)}catch{Oe.log("Invalid server message",r.data);return}this.emit(_r.Message,s)},this._socket.onclose=r=>{this._disconnected||(Oe.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(_r.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Oe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Oe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Nn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(_r.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class _0{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===wr.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Oe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;Oe.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Oe.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:Nn.Candidate,payload:{candidate:o.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Oe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(mu.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Oe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(mu.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Oe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Oe.log("Listening for data channel"),e.ondatachannel=o=>{Oe.log("Received data channel");const c=o.channel;s.getConnection(t,i)._initializeDataChannel(c)},Oe.log("Listening for remote stream"),e.ontrack=o=>{Oe.log("Received remote stream");const c=o.streams[0],a=s.getConnection(t,i);if(a.type===wr.Media){const l=a;this._addStreamToMediaConnection(c,l)}}}cleanup(){Oe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);Oe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Oe.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===wr.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Nn.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(un.WebRTC,r),Oe.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(un.WebRTC,i),Oe.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();Oe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Oe.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:Nn.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(un.WebRTC,r),Oe.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(un.WebRTC,i),Oe.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;Oe.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),Oe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){r.emitError(un.WebRTC,o),Oe.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Oe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Oe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(un.WebRTC,t),Oe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Oe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Oe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){Oe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class x0 extends ld.EventEmitter{emitError(e,t){Oe.error("Error:",t),this.emit("error",new ZM(`${e}`,t))}}class ZM extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class y0 extends x0{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var bu;const uo=class uo extends y0{get type(){return wr.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||uo.ID_PREFIX+Zn.randomToken(),this._negotiator=new _0(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Oe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Oe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Oe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case Nn.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case Nn.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:Oe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Oe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};bu=new WeakMap,Ns(uo,bu,uo.ID_PREFIX="mc_");let Ya=uo;class JM{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:o}=this._options,c=new URL(`${t}://${i}:${r}${s}${o}/${e}`);return c.searchParams.set("ts",`${Date.now()}${Math.random()}`),c.searchParams.set("version",v0),fetch(c.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Oe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Zn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Zn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Oe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var wu,Tu;const kr=class kr extends y0{get type(){return wr.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||kr.ID_PREFIX+m0(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new _0(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Oe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Oe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Oe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(ud.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Nn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Nn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Oe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};wu=new WeakMap,Tu=new WeakMap,Ns(kr,wu,kr.ID_PREFIX="dc_"),Ns(kr,Tu,kr.MAX_BUFFERED_AMOUNT=8388608);let Ka=kr;class dd extends Ka{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Ka.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Oe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class al extends dd{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new p0,this.serialization=uc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Ip(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=HM(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=Up(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Oe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class QM extends dd{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=uc.None}}class eS extends dd{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=Zn.chunkedMTU){this.emitError(ud.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=uc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Eu;const fo=class fo extends x0{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:QM,json:eS,binary:al,"binary-utf8":al,default:al},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:Zn.CLOUD_HOST,port:Zn.CLOUD_PORT,path:"/",key:fo.DEFAULT_KEY,token:Zn.randomToken(),config:Zn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Zn.CLOUD_HOST?this._options.secure=Zn.isSecure():this._options.host==Zn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Oe.setLogFunction(this._options.logFunction),Oe.logLevel=this._options.debug||0,this._api=new JM(t),this._socket=this._createServerConnection(),!Zn.supports.audioVideo&&!Zn.supports.data){this._delayedAbort(un.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Zn.validateId(i)){this._delayedAbort(un.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(un.ServerError,r))}_createServerConnection(){const e=new jM(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(_r.Message,t=>{this._handleMessage(t)}),e.on(_r.Error,t=>{this._abort(un.SocketError,t)}),e.on(_r.Disconnected,()=>{this.disconnected||(this.emitError(un.Network,"Lost connection to server."),this.disconnect())}),e.on(_r.Close,()=>{this.disconnected||this._abort(un.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case Nn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Nn.Error:this._abort(un.ServerError,i.msg);break;case Nn.IdTaken:this._abort(un.UnavailableID,`ID "${this.id}" is taken`);break;case Nn.InvalidKey:this._abort(un.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Nn.Leave:Oe.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Nn.Expire:this.emitError(un.PeerUnavailable,`Could not connect to peer ${r}`);break;case Nn.Offer:{const s=i.connectionId;let o=this.getConnection(r,s);if(o&&(o.close(),Oe.warn(`Offer received for existing Connection ID:${s}`)),i.type===wr.Media){const a=new Ya(r,this,{connectionId:s,_payload:i,metadata:i.metadata});o=a,this._addConnection(r,o),this.emit("call",a)}else if(i.type===wr.Data){const a=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});o=a,this._addConnection(r,o),this.emit("connection",a)}else{Oe.warn(`Received malformed connection type:${i.type}`);return}const c=this._getMessages(s);for(const a of c)o.handleMessage(a);break}default:{if(!i){Oe.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,o=this.getConnection(r,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):Oe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Oe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(un.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){Oe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(un.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Oe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new Ya(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){Oe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Oe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Oe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;Oe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Oe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Oe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(un.ServerError,t))}};Eu=new WeakMap,Ns(fo,Eu,fo.DEFAULT_KEY="peerjs");let gu=fo;var M0=gu;const S0="perihelion-v1-",oh="ABCDEFGHJKLMNPQRSTUVWXYZ",ja=3,cl=new URLSearchParams(location.search).get("peer"),b0=cl?{host:cl.split(":")[0],port:Number(cl.split(":")[1]||9e3),path:"/",secure:!1,debug:0}:{debug:0},tS=()=>Array.from({length:5},()=>oh[Math.random()*oh.length|0]).join("");function nS(n,e){const t=tS(),i=new M0(S0+t,b0),r=[{kind:"human",name:n,online:!0}];let s=!1;const o=()=>r.map(l=>({kind:l.kind,name:l.name,online:l.online,difficulty:l.difficulty})),c=(l,u)=>{try{l&&l.open&&l.send(u)}catch{}},a={code:t,seats:r,get started(){return s},broadcast(l){for(const u of r)u.conn&&c(u.conn,l)},sendTo(l,u){c(r[l]?.conn,u)},lobby(){for(const[l,u]of r.entries())u.conn&&c(u.conn,{t:"lobby",seats:o(),you:l,code:t});e.seats(o())},addAI(l){s||r.length>=ja||(r.push({kind:"ai",name:`AI · ${l}`,online:!0,difficulty:l}),a.lobby())},remove(l){if(s||l===0||!r[l])return;const[u]=r.splice(l,1);u.conn&&(c(u.conn,{t:"kicked"}),setTimeout(()=>u.conn.close(),200)),a.lobby()},start(){s=!0},close(){i.destroy()}};return i.on("open",()=>e.open(t)),i.on("error",l=>e.error(l.type==="unavailable-id"?"Code clash, try again":`Connection problem (${l.type})`)),i.on("connection",l=>{l.on("data",u=>{if(u.t==="hello"){let f=r.findIndex((d,p)=>p!==0&&d.kind==="human"&&d.name===u.name&&!d.online);if(f<0&&s){c(l,{t:"full",why:"Game already started"});return}if(f<0){if(r.length>=ja){c(l,{t:"full",why:"Room is full"});return}r.push({kind:"human",name:iS(r,u.name)}),f=r.length-1}Object.assign(r[f],{conn:l,online:!0}),l.seat=f,a.lobby(),s&&e.rejoin(f)}else u.t==="cmd"&&l.seat!==void 0&&e.cmd(l.seat,u.cmd)}),l.on("close",()=>{const u=r.findIndex(f=>f.conn===l);if(!(u<0)){if(!s){r.splice(u,1),a.lobby();return}r[u].online=!1,r[u].conn=null,a.lobby(),e.left(u)}})}),a}function iS(n,e){let t=e||"Player",i=2;for(;n.some(r=>r.name===t);)t=`${e} ${i++}`;return t}function rS(n,e,t){const i=new M0(b0);let r=null;const s={send(o){try{r&&r.open&&r.send(o)}catch{}},close(){i.destroy()}};return i.on("open",()=>{r=i.connect(S0+n.toUpperCase(),{reliable:!0});const o=setTimeout(()=>{r.open||t.error("No game found with that code")},9e3);r.on("open",()=>{clearTimeout(o),s.send({t:"hello",name:e})}),r.on("data",c=>t.message(c)),r.on("close",()=>t.closed())}),i.on("error",o=>t.error(o.type==="peer-unavailable"?"No game found with that code":`Connection problem (${o.type})`)),s}const G=n=>document.getElementById(n),wn=(n,e)=>{n._html!==e&&(n._html=e,n.innerHTML=e)},ot=(()=>{const n={rivals:1,difficulty:"normal",system:"random",pct:100,dev:!1,gfx:"auto"};try{return{...n,...JSON.parse(localStorage.getItem("perihelion")||"{}")}}catch{return n}})(),jr=()=>{try{localStorage.setItem("perihelion",JSON.stringify(ot))}catch{}};function fd(){const n=new URLSearchParams(location.search).get("gfx");if(n==="high"||n==="low")return n;if(ot.gfx==="high"||ot.gfx==="low")return ot.gfx;const e=matchMedia("(pointer: coarse)").matches,t=(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4;return e&&t?"low":"high"}const Ke=PM(G("scene"),G("labels"),{quality:fd()});let I=null,dc=[],tn=!1,he=0,St=null,di=!1;const Aa=[.5,1,2,4,8];let zr=1;const O={peek:null,pick:null,selected:null,target:null,fleet:null,count:1,dark:!1,preview:null,dragging:!1,vis:null,slot:null,mode:null},Tt=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`;function w0(n,e){const t=I.bodies[e.b];if(e.type!=="research"&&e.type!=="spy"&&e.type!=="dark"&&(!t||t.owner!==n))return!1;switch(e.type){case"launch":return!!nc(I,t,I.bodies[e.to],e.n,!!e.dark);case"spy":return!!_h(I,n,t);case"dark":{const i=I.fleets.find(r=>r.id===e.f&&r.owner===n);return hm(I,i,!!e.on)}case"ship":return vl(I,t);case"cancel":return Ch(I,t);case"build":return Yi(I,t,e.k);case"upgrade":return!!t.structures[e.i]&&da(I,t,t.structures[e.i]);case"demolish":return!!t.structures[e.i]&&Ah(I,t,t.structures[e.i]);case"research":return vh(I,n,e.k);case"probe":return!!_l(I,t,I.bodies[e.to]);case"project":return mh(I,t,e.k);case"fund":return q0(I,t,e.how==="ship"?"ship":"cash");default:return!1}}function fi(n){return St?.role==="client"?(St.room.send({t:"cmd",cmd:n}),!0):w0(he,n)}function T0(n,e,t){const i=()=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.v===String(e())));n.addEventListener("click",r=>{const s=r.target.closest("button");s&&(t(s.dataset.v),jr(),i())}),i()}T0(G("rivals"),()=>ot.rivals,n=>ot.rivals=Number(n));T0(G("difficulty"),()=>ot.difficulty,n=>ot.difficulty=n);let fc=[],Rs=null;const sS=n=>ot.system!=="random"&&Wn[ot.system]?ot.system:Pa[(n>>>0)%Pa.length];function hc({seed:n=Math.random()*2**31|0,players:e=ot.rivals+1,seat:t=0,names:i=null,aiSeats:r=null,aiDiffs:s=null,mp:o=!1,system:c=sS(n),day:a=null}={}){Rs=a,I=wh({seed:n,opponents:e-1,mp:o,system:c}),i&&(I.names=i),he=t;const l=pi(n^2748);fc=s||(r?r.map(([,d])=>d):o?[]:Array(e-1).fill(ot.difficulty)),dc=St?.role==="client"?[]:r?r.map(([d,p])=>xl(d,p,l)):Array.from({length:e-1},(d,p)=>xl(p+1,ot.difficulty,l)),O.selected=O.target=O.preview=O.fleet=O.mode=O.peek=null,O.slot=null,O.me=he,di=!1,bs=!1,I.events.length=0,G("feed").innerHTML="",G("research").hidden=!0,Ke.build(I),O.vis=Co(I,he);const u=I.bodies.find(d=>d.owner===he);Ke.focus(I,u.id,!1),Ke.orbit.target.set(0,0,0),Ke.orbit.dist=u.size*12+40,Ke.orbit.pol=.9;for(const d of["menu","end","lobby"])G(d).hidden=!0;G("hud").hidden=!1,G("warp").hidden=!!St,G("pause").hidden=St?.role==="client",zr=1,G("warp").textContent="1×",tn=!0,Ct();const f=Wn[I.system];ht(`${Rs?"Daily · ":""}${f.name}`,"#aab1c8")}const pc=()=>G("resume").hidden||confirm("Leave the game in progress? It will be lost.");function oS(){pc()&&(zi(),hc())}function E0(){if(!pc())return;zi();const n=bh();hc({seed:n.seed,system:n.system,day:n.key})}G("daily").addEventListener("click",E0);const ll=["random",...Sh];function A0(){G("system-pick").textContent=ot.system==="random"?"Random":`${Wn[ot.system].name}${Wn[ot.system].test?" (test)":""}`,G("system-pick").title=ot.system==="random"?"A different system type each game":Wn[ot.system].text;const n=bh();G("daily").innerHTML=`Daily<small>${Wn[n.system].name}</small>`,G("daily").title=`Today's system, the same for everyone: ${Wn[n.system].name}`}G("system-pick").addEventListener("click",()=>{ot.system=ll[(ll.indexOf(ot.system)+1)%ll.length],jr(),A0()});A0();G("play").addEventListener("click",oS);G("again").addEventListener("click",()=>{if(zi(),G("end").hidden=!0,Rs){E0();return}G("menu").hidden=!1,G("resume").hidden=!0,G("menu").classList.remove("paused"),G("play").textContent="Play vs AI"});G("pause").addEventListener("click",C0);G("resume").addEventListener("click",()=>{G("menu").hidden=!0,G("menu").classList.remove("paused"),tn=!0});function C0(){if(!(!I||I.winner!==null||!tn)){if(St){di=!di,G("pause").innerHTML=lt(di?"play":"pause"),St.room.broadcast({t:"pause",paused:di}),vu();return}tn=!1,G("menu").hidden=!1,G("resume").hidden=!1,G("rnd").hidden=!0,G("menu").classList.add("paused"),G("play").textContent="New game"}}function vu(){G("banner").hidden=!di,G("banner").textContent=he===0?"Paused · tap play to resume":"Paused by host"}G("keys").textContent=matchMedia("(pointer: fine)").matches?"Mouse: click to select · drag to pan · right-drag to rotate · scroll to zoom · double-click a world to fly there. Keys: WASD pan · Q/E rotate · +/− zoom · F focus · H whole system · L launch/confirm · P probe · R research · Space pause · 1–5 speed (½× to 8×) · Esc back.":"Drag to rotate · two fingers to pan and zoom · double-tap to fly to a world.";G("name").value=ot.name||"";G("name").addEventListener("input",()=>{ot.name=G("name").value.trim(),jr()});const R0=()=>(G("name").value.trim()||"Player").slice(0,16),bi=n=>{G("menu-msg").textContent=n||""};let P0=[];function zi(){St&&St.room.close(),St=null,di=!1,G("banner").hidden=!0,G("pause").innerHTML=lt("pause")}function _u(n,e){P0=n,G("lobby-code").textContent=e||"·····";const t=St?.role==="host",i=n.map((r,s)=>`<div class="seat"><i style="background:${ut(s)}"></i><span>${r.name}${s===he?" (you)":""}</span><small>${r.kind==="ai"?"AI":s===0?"host":r.online===!1?"offline":"ready"}</small>${t&&s>0?`<button data-kick="${s}" aria-label="Remove">${lt("close")}</button>`:""}</div>`);for(let r=n.length;r<ja;r++)i.push('<div class="seat empty"><span>Open seat</span></div>');G("seats").innerHTML=i.join(""),G("lobby-ai").hidden=!t||n.length>=ja,G("lobby-start").hidden=!t,G("lobby-start").disabled=n.length<2,G("lobby-hint").textContent=t?n.length<2?"Tap the code to copy it. Up to 3 empires.":"Ready when you are.":"Waiting for the host to start…"}let L0="normal";G("ai-diff").addEventListener("click",n=>{const e=n.target.closest("button");e&&(L0=e.dataset.v,G("ai-diff").querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)))});G("add-ai").addEventListener("click",()=>St?.role==="host"&&St.room.addAI(L0));G("seats").addEventListener("click",n=>{const e=n.target.closest("button[data-kick]");e&&St?.role==="host"&&St.room.remove(Number(e.dataset.kick))});G("lobby-leave").addEventListener("click",()=>{zi(),G("lobby").hidden=!0,G("menu").hidden=!1});G("host").addEventListener("click",()=>{if(!pc())return;zi(),bi("Opening a room…"),he=0;const n=nS(R0(),{open:e=>{bi(""),G("menu").hidden=!0,G("lobby").hidden=!1,_u(n.seats,e)},seats:e=>_u(e,n.code),error:e=>{bi(e),n.started||(zi(),G("lobby").hidden=!0,G("menu").hidden=!1)},cmd:(e,t)=>{I&&tn&&w0(e,t)},left:e=>ht(`${I.names[e]} disconnected`,ut(e)),rejoin:e=>{n.sendTo(e,D0(e)),ht(`${I.names[e]} is back`,ut(e))}});St={role:"host",room:n}});function D0(n){return{t:"start",seed:St.seed,players:I.players,names:I.names,seat:n,paused:di,aiDiffs:fc,system:I.system}}G("lobby-start").addEventListener("click",()=>{if(St?.role!=="host"||P0.length<2)return;const n=St.room;n.start(),St.seed=Math.random()*2**31|0;const e=n.seats.map(i=>i.name),t=n.seats.map((i,r)=>[r,i]).filter(([,i])=>i.kind==="ai").map(([i,r])=>[i,r.difficulty]);hc({seed:St.seed,players:n.seats.length,seat:0,names:e,aiSeats:t,mp:!0}),n.seats.forEach((i,r)=>{i.conn&&n.sendTo(r,D0(r))})});function I0(n){G("mp-buttons").hidden=n,G("join-row").hidden=!n,n&&G("code").focus()}G("join").addEventListener("click",()=>{bi(""),I0(!0)});G("join-back").addEventListener("click",()=>{bi(""),I0(!1)});G("code").addEventListener("keydown",n=>{n.key==="Enter"&&G("join-go").click()});G("devtoggle").addEventListener("click",()=>{ot.dev=!ot.dev,jr(),N0()});G("gfxtoggle").addEventListener("click",()=>{ot.gfx={auto:"high",high:"low",low:"auto"}[ot.gfx]||"auto",jr(),Ke.setQuality(fd()),U0()});function U0(){G("gfxtoggle").textContent=`Graphics ${ot.gfx==="auto"?`auto (${fd()})`:ot.gfx}`}U0();function N0(){G("devtoggle").textContent=`Dev view ${ot.dev?"on":"off"}`,G("devbar").hidden=!ot.dev||St!==null||!I}N0();function k0(){G("devbar").hidden=!1;const n=O.devAs===void 0?he:O.devAs,e=[...Array.from({length:I.players},(t,i)=>[i,Qn(i)]),["all","All"]];wn(G("devbar"),`<span>View as</span>${e.map(([t,i])=>`<button data-as="${t}" class="${String(n)===String(t)?"on":""}" style="${t==="all"?"":`color:${ut(t)}`}">${i}</button>`).join("")}<button data-w16="1">16×</button>`)}G("devbar").addEventListener("click",n=>{const e=n.target.closest("button");if(e){if(e.dataset.w16){hd(16);return}O.devAs=e.dataset.as==="all"?"all":Number(e.dataset.as),O.vis=O.devAs==="all"?null:Co(I,O.devAs),k0()}});G("howto").addEventListener("click",()=>{G("menu").hidden=!0,G("tutorial").hidden=!1});G("tut-close").addEventListener("click",()=>{G("tutorial").hidden=!0,G("menu").hidden=!1});G("lobby-code").addEventListener("click",async()=>{const n=G("lobby-code").textContent;if(!/^\w{5}$/.test(n))return;const e=G("lobby-hint"),t=e.textContent;try{await navigator.clipboard.writeText(n),e.textContent="Code copied"}catch{e.textContent="Long-press the code to copy it"}setTimeout(()=>{e.textContent=t},1800)});G("join-go").addEventListener("click",()=>{if(!pc())return;const n=G("code").value.trim().toUpperCase();if(n.length!==5){bi("Enter the 5-letter code");return}zi(),bi("Connecting…"),St={role:"client",room:rS(n,R0(),{message:t=>aS(t),error:t=>{bi(t),zi(),G("lobby").hidden=!0,G("menu").hidden=!1},closed:()=>{St&&(zi(),tn?(ht("Lost connection to the host","#ff7a4d"),tn=!1,setTimeout(()=>{G("menu").hidden=!1},1500)):(G("lobby").hidden=!0,G("menu").hidden=!1,bi("The host closed the room")))}}),code:n}});function aS(n){n.t==="lobby"?(he=n.you,bi(""),G("menu").hidden=!0,tn||(G("lobby").hidden=!1),_u(n.seats,n.code)):n.t==="full"||n.t==="kicked"?(bi(n.t==="kicked"?"The host removed you":n.why),zi(),G("lobby").hidden=!0,G("menu").hidden=!1):n.t==="start"?(hc({seed:n.seed,players:n.players,seat:n.seat,names:n.names,aiDiffs:n.aiDiffs||[],mp:!0,system:n.system||"classic"}),di=n.paused,vu()):n.t==="state"&&I&&tn?uS(n.s):n.t==="events"&&I&&tn?O0(n.list):n.t==="pause"&&(di=n.paused,vu())}const cS=["owner","ships","guns","structures","sieges","queue","build","slips","vet","tf","fighting","totDef","totAtk","resting","restUntil","bonus","name","project","wonder"];function lS(){return{time:I.time,winner:I.winner,credits:I.credits,tech:I.tech,fleets:I.fleets,scans:I.scans,spies:I.spies,happenings:I.happenings,wonders:I.wonders,visit:I.visit,nextId:I.nextId,bodies:I.bodies.map(n=>Object.fromEntries(cS.map(e=>[e,n[e]]))),stats:I.winner!==null?I.stats:void 0}}function uS(n){const e=n.time-I.time;I.time=di||Math.abs(e)>1.5?n.time:I.time+e*.5,I.credits=n.credits,I.tech=n.tech,I.fleets=n.fleets,I.scans=n.scans,I.spies=n.spies,I.happenings=n.happenings,I.wonders=n.wonders,I.visit=n.visit,I.nextId=n.nextId,n.bodies.forEach((t,i)=>{const r=I.bodies[i],s=(r.lostDef||0)+Math.max(0,(t.totDef||0)-(r.totDef||0)),o=(r.lostAtk||0)+Math.max(0,(t.totAtk||0)-(r.totAtk||0)),c=r.captured||t.owner!==r.owner;Object.assign(r,t,{lostDef:s,lostAtk:o,captured:c})}),n.stats&&(I.stats=n.stats),n.winner!==null&&(I.winner=n.winner)}function hd(n){zr=n,G("warp").textContent=`${zr===.5?"½":zr}×`}G("warp").addEventListener("click",()=>hd(Aa[(Aa.indexOf(zr)+1)%Aa.length]));function F0(){Ke.orbit.follow=null,Ke.orbit.target.set(0,0,0),Ke.orbit.vaz=Ke.orbit.vpol=0,Ke.orbit.pol=.9,Ke.orbit.goalDist=650}G("system").addEventListener("click",F0);function mc(){const n=O.fleet!==null&&I?I.fleets.find(l=>l.id===O.fleet):null;if(n||(O.fleet=null),G("fleet").hidden=!n||!tn||O.selected!==null||!G("research").hidden,G("fleet").hidden)return;const e=Hn(n,I.time),t=n.T-(I.time-n.t0),i=n.dark&&!e.burning?en(`${lt("dark")} coasting dark`,"Drive off: enemies only spot this fleet close in","dim"):e.flipping?"flipping":e.phase===1?"burning":"braking",r=I.bodies[n.to],s=Math.hypot(e.vx,e.vy,e.vz);if(n.probe){G("fdark").hidden=!0,wn(G("fleetText"),`${lt("probe")} <b>Probe</b> → <b>${r.name}</b> · <b>${Tt(t)}</b>`);return}const o=n.owner===he&&!n.probe&&t>10;G("fdark").hidden=!o,o&&(G("fdark").classList.toggle("on",!!n.dark),wn(G("fdark"),`${lt("dark")} ${n.dark?"Light up":"Go dark"}`),G("fdark").title=n.dark?"Light the drive: burn the rest of the way (sooner, easy to spot)":"Go dark: cut the drive and coast (later, hard to spot)");const c="",a=ot.dev&&!St?`<br><span class="dim">seen by ${I.names,""}${Array.from({length:I.players},(l,u)=>u).filter(l=>l!==n.owner).map(l=>`<span style="color:${ut(l)}">${Qn(l)} ${Co(I,l).seesFleet(n)?"✓":"✗"}</span>`).join(" · ")}</span>`:"";wn(G("fleetText"),`<b>${Ki(n.name)}</b>${$n(n.vet)?` <span class="vet">${Su(n.vet)}</span>`:""} · <b>${n.n}</b> → <b>${r.name}</b><br><span class="dim">${i}</span> · arrive in <b>${Tt(t)}</b>${n.assist!==void 0?` ${en(lt("assist"),`Gravity assist via ${I.bodies[n.assist].name}`,"assist")}`:""} ${en(`${Math.round(e.progress*100)}%`,`${s.toFixed(2)} units/s`,"dim")}${c}${a}`)}G("fdark").addEventListener("click",()=>{const n=I.fleets.find(e=>e.id===O.fleet);n&&fi({type:"dark",f:n.id,on:!n.dark})&&ht(`${Ki(n.name)} ${n.dark?"running dark":"drive lit"}`,ut(he),"dark"),mc()});function dS(){const n=O.peek!==null&&I&&tn&&O.selected===null&&O.fleet===null?I.bodies[O.peek]:null;if(G("peek").hidden=!n,!n)return;const e=!O.vis||O.vis.bodies.has(n.id),t=n.visitor?I.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="planet"&&n.giant?"Gas giant":n.kind[0].toUpperCase()+n.kind.slice(1),i=n.owner===ze?"Independent":Qn(n.owner),r=n.structures.filter(o=>o.left<=0||o.next).map(o=>`${Te.structures[o.type].name}${Te.structures[o.type].maxLevel?` ${co[o.level]}`:""}`),s=e?`${lt("fleet")} <b>${n.ships}</b> ship${n.ships===1?"":"s"} · ${lt("guns")} <b>${Math.ceil(n.guns)}</b> gun${Math.ceil(n.guns)===1?"":"s"}${r.length?` · ${r.join(", ")}`:""}`:en("Defences unknown","Out of sensor range: send a probe or get a world nearby to see it");wn(G("peek"),`<div class="head"><span class="tag">${t}</span><b>${n.name}</b><span class="grow"></span><span class="tag" style="color:${n.owner===ze?"var(--dim)":ut(n.owner)}">${i}</span></div><div class="row2">${s}</div>${xu(n,{income:!1,seen:e})}${pS(n)}`)}const fS=()=>window.innerWidth<760;function hS(){const n={worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};let e=0;for(const s of I.bodies){if(s.owner!==he)continue;e+=1;const o=Eh(s,I);for(const c in n)n[c]+=o[c]}const t=(I.spies||[]).filter(s=>s.owner===he&&s.since<=I.time).reduce((s,o)=>s+Ts(I.bodies[o.body],I)*kn.skim,0),i=(I.happenings||[]).some(s=>s.kind==="comet"&&s.holder===he&&I.time>=s.starts)?xr.comet.pay:0;return[[`${e} world${e===1?"":"s"}`,n.worlds],["Mines",n.mines],["Gas harvesters",n.skimmers],["Exchanges",n.exchanges],["Bonuses and wonders",n.bonuses],["Agents",t],["Comet mining",i]].filter(([,s])=>s>.001).map(([s,o])=>`${s}  +${o.toFixed(1)}/s`).join(`
`)}function pS(n){if(n.owner===ze||n.owner===he||n.visitor||bs)return"";const e=(I.spies||[]).find(i=>i.owner===he&&i.body===n.id);if(e&&e.since>I.time)return`<div class="spy">${lt("spy")} ${en(`Recruiting · ${Tt(e.since-I.time)}`,"Finding someone on the inside: they start work once recruited")}</div>`;if(e){const i=xh(I,n)*60,r=i<.25?"low":i<.5?"rising":"high";return`<div class="spy">${lt("spy")} ${en(`Agent in place · ${Tt(I.time-e.since)}`,"Shows you this world and its launches, skims its income and slows any megaproject here")}<span class="grow"></span>${en(`risk ${r}`,"Each minute there's a chance the agent is caught. Their Intel and a security bureau nearby raise it",r==="high"?"warn":"dim")}</div>`}const t=Qa(I,he,n);return t==="needs Signals intercept"?`<div class="spy dim">${lt("spy")} Agents need Signals intercept (Intel I)</div>`:`<div class="spy">${lt("spy")} <span class="dim">No agent here</span><span class="grow"></span><button data-spy="${n.id}" ${t?"disabled":""} title="Recruit an agent there">Recruit agent<small>${kn.cost}</small></button></div>`}G("peek").addEventListener("click",n=>{const e=n.target.closest("button[data-spy]");if(!e)return;const t=I.bodies[+e.dataset.spy];fi({type:"spy",b:t.id})&&ht(`Recruiting an agent on ${t.name}`,ut(he),"spy"),Ct()});function Ct(){if(G("hint").hidden=O.mode!=="project",O.mode==="project"){const s=Kt[O.projKey];wn(G("hintText"),`${lt(O.projKey)} Tap a world for the <b>${s.name}</b><small>${s.where==="giant"?"Gas giants only":s.where==="inner"?"Innermost planet only":s.where==="planet"?"Planets only":"Any world of yours"} · they're ringed in violet</small>`)}mc(),dS();const n=O.selected!==null&&I?I.bodies[O.selected]:null,e=!!n&&n.owner===he&&tn;if(G("actions").hidden=!e,!e){O.preview=null,O.mode!=="project"&&(O.mode=null);return}if(O.mode==="projconfirm"){const s=Kt[O.projKey],o=Ps(I,n,O.projKey);G("actions").classList.add("launching"),G("buildrow").hidden=G("stepper").hidden=G("dark").hidden=!0,G("cancel").hidden=!1,wn(G("info"),`<span>${lt(O.projKey)} Build the <b>${s.name}</b> at <b>${n.name}</b> · <b>${s.cost}</b> · ${Tt(s.time/Er(I,he))}${o?` · <span class="warn">${o}</span>`:""}</span><small class="dim" style="flex-basis:100%">${s.text}. Only one empire can finish it; if a rival gets there first you get half back.</small>`),G("launch").textContent="Confirm",G("launch").disabled=!!o;return}!n.ships&&O.mode==="launch"&&(O.mode=null);const t=Mr(I,n);O.mode==="probe"&&!ec(n)&&(O.mode=null);const i=O.mode==="probe"||O.mode==="spy";O.count=t?Math.max(1,Math.min(t,Math.round(t*ot.pct/100))):0,wn(G("count"),`${O.count}<small>${ot.pct}%</small>`),G("count").title=`${O.count} of ${t} ready ships (${ot.pct}%). Tap: all, half, a quarter`,Number(G("pct").value)!==ot.pct&&(G("pct").value=ot.pct),G("pct").style.setProperty("--fill",`${ot.pct}%`);const r=O.mode==="launch"||i;if(G("actions").classList.toggle("launching",r),G("buildrow").hidden=r,G("stepper").hidden=!r||i,G("cancel").hidden=!r,G("dark").hidden=!r||i,G("dark").classList.toggle("on",O.dark),r)if(O.target===null)O.preview=null,wn(G("info"),`<span class="tag">${O.mode==="spy"?"Send an agent":i?"Probe from":"Launch from"}</span><b>${n.name}</b><span class="grow"></span><span class="tag">tap a destination</span>`),G("launch").textContent="Confirm",G("launch").disabled=!0;else{const s=I.bodies[O.target];O.preview=Ro(I,n,s,I.time,i?Te.probe.speed:1,!1,!i&&O.dark?Ja.burn:.5);const o=s.owner===he?"reinforce":`${s.ships} ship${s.ships===1?"":"s"}, ${Math.ceil(s.guns)} gun${Math.ceil(s.guns)===1?"":"s"}`,c=s.owner===he?0:Ls(I,s),a=!O.vis||O.vis.bodies.has(s.id),l=a?c?`${o} ${en(`+${c.toFixed(1)}`,`Cover from ${ka(I,s).map(h=>h.from.name).join(", ")}`)}`:o:"unknown",u=O.preview.assist!==void 0?` ${en(lt("assist"),`Gravity assist via ${I.bodies[O.preview.assist].name}: a faster route`,"assist")}`:"";if(O.mode==="spy"){O.preview=null;const h=Qa(I,he,s);wn(G("info"),`<span>${lt("spy")} Agent → <b>${s.name}</b> · <b>${kn.cost}</b> · ${Tt(kn.travel)}${h?` · <span class="dim">${h}</span>`:""}</span>`),G("launch").textContent="Confirm",G("launch").disabled=!!h;return}if(i){const h=ku(I,n,s);wn(G("info"),`<span>Probe → <b>${s.name}</b> · <b>${Tt(O.preview.T)}</b>${h?` · <span class="dim">${h}</span>`:""}</span>`),G("launch").textContent="Confirm",G("launch").disabled=!!h;return}const f=Nu(I,n),d=f?` ${en(`+${f} in ${Tt(Math.ceil(n.restUntil-I.time))}`,`${f} ship${f===1?"":"s"} just arrived and can launch in ${Tt(Math.ceil(n.restUntil-I.time))}`,"dim")}`:"",p=Cu(I,s),g=O.preview.T>p-5,_=Number.isFinite(p)?` · <span class="${g?"warn":"dim"}">${g?"too late":`leaves ${Tt(p)}`}</span>`:"",m=n.sieges.length?` · <span class="warn">${en("breaking out","This world is under attack: half the ships launched will be shot down leaving orbit","warn")}</span>`:"";wn(G("info"),`<span><b>${O.count}</b>${m} → <b>${s.name}</b> <span class="dim">${l}</span> · <b>${Tt(O.preview.T)}</b>${O.dark?` ${en("dark","Running dark: enemies only spot this fleet close in","dim")}`:""}${u}${d}${_}</span>${xu(s,{income:!1,seen:a})}`),G("launch").textContent="Confirm",G("launch").disabled=t<1||g}else{O.preview=null,O.target=null;const s=n.visitor?I.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="station"?"Station":n.kind[0].toUpperCase()+n.kind.slice(1);wn(G("info"),`<span class="tag">${s}</span><b>${n.name}</b><span class="grow"></span>${n.ships?`${n.tf?`<span class="tag">TF ${n.tf}</span>`:""}<span class="num">${n.ships}</span><span class="tag">ship${n.ships===1?"":"s"}</span>`:'<span class="tag">no ships</span>'}`+xu(n));const o=n.ships&&!t?Math.ceil(n.restUntil-I.time):0;G("launch").textContent=o?`Ready in ${Tt(o)}`:"Launch",G("launch").disabled=t<1,gS(n)}}const co=["","I","II","III"],pd=n=>String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),en=(n,e,t="")=>`<span class="chip${t?` ${t}`:""}" tabindex="0" data-tip="${pd(e)}">${n}</span>`;function xu(n,{income:e=!0,seen:t=!0}={}){const i=[];if(e&&n.owner!==ze){const r=Ts(n,I),s=Te.income[n.kind]*(n.star?1.5:1),o=r-s;i.push(en(`<b class="pos">+${r.toFixed(1)}/s</b>`,`Income: ${n.home?"homeworld":n.kind} ${s.toFixed(1)}${o>.001?` + ${o.toFixed(1)} from structures and bonuses`:""} per second`))}if(t){const r=ka(I,n),s=I.bodies.filter(l=>l!==n&&ka(I,l).some(u=>u.from===n)),o=Math.ceil(n.guns),c=r.reduce((l,u)=>l+u.n,0),a=[`${o} gun${o===1?"":"s"} here`];for(const l of r)a.push(`+${l.n.toFixed(1)} from ${l.from.name}`);s.length&&a.push(`these guns also help defend ${s.map(l=>l.name).join(", ")} (${n.parent===null?"half":"quarter"} strength)`),(n.owner!==ze||o)&&i.push(en(`${lt("guns")} ${o}${c?` <span class="pos">+${c.toFixed(1)}</span>`:""}`,a.join(" · ")))}if(n.owner!==ze&&n.perk!=="fortress"&&Pu(I,n)){const r=I.bodies.find(s=>s.perk==="fortress"&&s.owner===n.owner&&qn(bt(I,s,I.time),bt(I,n,I.time))<=dn.fortress.range);i.push(en(`${lt("fortress")} +1 gun`,`Covered by the ${dn.fortress.name}${r?` at ${r.name}`:""}: +1 gun here while it's inside the ring`,"gold"))}if(n.owner!==ze&&n.perk!=="depot"&&Lh(I,n)>1&&i.push(en(`${lt("depot")} +20% speed`,`A ${dn.depot.name} nearby: fleets launched from here fly ${Math.round((dn.depot.boost-1)*100)}% faster`,"gold")),n.owner!==ze&&n.perk!=="relay"&&I.bodies.some(r=>r.perk==="relay"&&r.owner===n.owner&&qn(bt(I,r,I.time),bt(I,n,I.time))<=dn.relay.range)&&i.push(en(`${lt("relay")} watched`,`Inside your ${dn.relay.name}'s ring: everything around here is in view`,"gold")),n.perk){const r=dn[n.perk];let s="";if(r.range&&n.perk==="relay")s=" (dashed ring)";else if(r.range){const o=bt(I,n,I.time),c=I.bodies.filter(a=>a.owner===he&&a!==n&&qn(bt(I,a,I.time),o)<=r.range).map(a=>a.name);s=` (dashed ring). ${c.length?`Yours inside now: ${c.join(", ")}`:"None of yours inside now"}`}i.push(en(`${lt(n.perk)} ${r.name}`,`${r.text}${s}`,"gold"))}n.wonder&&i.push(en(`${lt(n.wonder)} ${Kt[n.wonder].name}`,Kt[n.wonder].text,"gold")),n.project&&i.push(en(`${lt(n.project.key)} ${Math.floor((1-n.project.left/Kt[n.project.key].time)*100)}%`,`Building the ${Kt[n.project.key].name}: ${Kt[n.project.key].text}. Take the world and it's yours.`,"gold"));for(const r of I.happenings||[]){if(r.at!==n.id)continue;const s=xr[r.kind],o=I.time<r.starts,c=!o&&r.holder!==ze,a=o?`starts in ${Tt(r.starts-I.time)}`:c?`${r.holder===he?"you hold it":`${Qn(r.holder)} holds it`}: ${Tt(Math.max(0,s.hold-r.held))} to go`:`gone in ${Tt(Math.max(0,r.ends-I.time))}`;i.push(en(`${lt(r.kind)} ${s.name}`,`${s.text}. Hold it for ${Tt(s.hold)} without a fight. Now: ${a}`,"gold"))}return i.length?`<div class="chips">${i.join("")}</div>`:""}function mS(n,e){const t=1+.15*I.tech[he].industry;return n==="mine"?`+${(Te.mineIncome*e*t).toFixed(1)}/s`:Te.structures[n].income?`+${(Te.structures[n].income*e).toFixed(1)}/s`:n==="defence"?`${Te.gunsPerDefence*e} guns`:n==="bureau"?`${e===1?"2.5":"4"}× catch`:n==="lab"?`+${Math.round(Te.labSpeed*e*100)}% research`:""}const ah={bureau:"Security",shipyard:"Yard",mine:"Mine",defence:"Guns",lab:"Lab",skimmer:"Gas rig",exchange:"Exchange"},Nr=n=>`${Math.max(0,Math.min(100,Math.floor(n*100)))}%`;function ch(n){return n.scrap?1-n.scrap/Te.scrapTime:n.next?1-n.left/tc({...n,level:n.next-1}):n.left>0?1-n.left/Te.structures[n.type].time:null}function gS(n){const e=Th(n);O.slot!==null&&O.slot>=e&&(O.slot=null);const t=[];for(let s=0;s<e;s++){const o=n.structures[s],c=O.slot===s?" on":"";if(!o){t.push(`<button class="cell empty${c}" data-slot="${s}"><span>+</span></button>`);continue}const a=Te.structures[o.type],l=ch(o),u=a.maxLevel?`<i class="pips">${"▮".repeat(o.level)}${"▯".repeat(a.maxLevel-o.level)}</i>`:"",f=l===null?"":`<i class="prog" style="width:${Nr(l)}"></i>`,d=l!==null&&!o.scrap?`<i class="pips">${Tt(o.left/vs(I,he,n))}</i>`:u;t.push(`<button class="cell${l===null?"":" busy"}${c}" data-slot="${s}"><b>${ah[o.type]}</b>${d}${f}</button>`)}let i=`<div class="cells">${t.join("")}</div>`;if(O.slot!==null){const s=n.structures[O.slot];let o="";if(!s)o=["shipyard","mine","skimmer","exchange","defence","lab","bureau"].map(c=>{const a=Ia(I,n,c);if(a&&a!=="not enough credits")return"";const l=Te.structures[c];return`<button class="opt" data-b="${c}" data-hold="${pd(`${l.name}: ${l.desc}`)}" title="${l.name}: ${l.desc}" ${a?"disabled":""}>${ah[c]}<small>${l.cost} · ${Tt(l.time/vs(I,he,n))}</small></button>`}).join("");else{const c=Te.structures[s.type],a=ch(s),l=s.scrap?`scrapping · ${Nr(a)}`:s.next?`upgrading → ${co[s.next]} · ${Nr(a)}`:s.left>0?`building · ${Nr(a)}`:c.maxLevel?`level ${co[s.level]}`:"online",u=Ua(I,n,s),f=Du(I,n,s);if(o=`<span class="what" title="${c.desc}">${c.name} · ${l}</span><button class="danger" data-d="${O.slot}" ${f?"disabled":""}>Scrap<small>+${gl(s)}</small></button>`,c.maxLevel){const d=[];for(let p=1;p<=c.maxLevel;p++){const g=p===1?c.cost:yr({type:s.type,level:p-1}),_=p<=s.level?"done":p===s.next?"now":p>s.level+1||s.next?"later":"",m=p===s.level+1&&!s.next&&(!u||u==="not enough credits"),h=m?`button data-u="${O.slot}" ${u?"disabled":""}`:"span",v=p<=s.level?"✓":p===s.next?Tt(s.left/vs(I,he,n)):m?`Upgrade · ${g} · ${Tt(tc({type:s.type,level:p-1})/vs(I,he,n))}`:g;d.push(`<${h} class="lv ${_}${m?" next":""}"><b>${co[p]}</b> ${mS(s.type,p)}<small>${v}</small></${h.split(" ")[0]}>`)}o+=`<div class="ladder">${d.join("")}</div>`}}i+=`<div class="ctx">${o}</div>`}const r=ec(n);if(r){const s=Na(I,n),c=Array.from({length:r},(l,u)=>n.slips&&n.slips[u]!==void 0?n.slips[u]:0).map(l=>`<i class="meter"><i style="width:${Nr(l)}"></i></i>`).join(""),a=n.queue&&n.slips&&n.slips.length?Tt((1-Math.max(...n.slips))*Pd(I,n)):"";i+=`<div class="ctx ships"><span class="what">${n.queue?`Queue <b class="num">${n.queue}</b>`:`${r} yard${r===1?"":"s"} idle`}<span class="bars">${c}</span><span class="dim">${a}</span></span></div><div class="ctx shipbtns"><button data-b="ship" title="Order a ship (${Te.ship.time}s per yard)" ${s?"disabled":""}>+ Ship<small>${Te.ship.cost} · ${Tt(Pd(I,n))}</small></button><button data-cancel="1" class="danger" title="Cancel the last queued ship" ${n.queue?"":"disabled"}>${lt("close")}<small>+${Math.round(Te.ship.cost*Te.cancelRefund)}</small></button><button class="mini" data-probe="1" ${I.credits[he]<Te.probe.cost?"disabled":""} title="Probe: fast one-way flyby that reveals a world">Probe<small>${Te.probe.cost}</small></button>${lh()}</div>`}else i+=`<div class="ctx shipbtns">${lh()}</div>`;wn(G("buildrow"),i)}function lh(){const n=I.tech[he].intel<1;return`<button class="mini" data-spy-mode="1" ${n||I.credits[he]<kn.cost?"disabled":""} title="${n?"Agents need Signals intercept (Intel I)":"Agent: recruit one on an enemy world"}">${lt("spy")}<small>${kn.cost}</small></button>`}G("buildrow").addEventListener("click",n=>{if(O.selected===null)return;const e=I.bodies[O.selected],t=n.target.closest("button[data-slot]");if(t){O.pick=null;const a=Number(t.dataset.slot);O.slot=O.slot===a?null:a,Ct();return}if(n.target.closest("button[data-spy-mode]")){O.mode="spy",O.target=null,O.slot=null,Ct();return}if(n.target.closest("button[data-probe]")){O.mode="probe",O.target=null,O.slot=null,Ct();return}if(n.target.closest("button[data-cancel]")){fi({type:"cancel",b:e.id})&&ht("Ship build cancelled",ut(he)),Ct();return}const i=n.target.closest("button[data-u]");if(i){const a=e.structures[Number(i.dataset.u)];a&&fi({type:"upgrade",b:e.id,i:Number(i.dataset.u)})&&ht(`Upgrading ${Te.structures[a.type].name} to ${co[a.level+1]} · ${Math.round(tc(a))}s`,ut(he)),Ct();return}const r=n.target.closest("button[data-d]");if(r){const a=e.structures[Number(r.dataset.d)];a&&fi({type:"demolish",b:e.id,i:Number(r.dataset.d)})&&ht(`Scrapping ${Te.structures[a.type].name} at ${e.name}`,ut(he)),O.slot=null,Ct();return}const s=n.target.closest("button[data-b]");if(!s)return;const o=s.dataset.b;if(Eo){Eo=!1;return}fi(o==="ship"?{type:"ship",b:e.id}:{type:"build",b:e.id,k:o})&&(ht(o==="ship"?`Ship ordered at ${e.name}`:`${Te.structures[o].name} under construction at ${e.name}`,ut(he)),o!=="ship"&&(O.slot=null)),Ct()});const ul=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]],vS={ansible:"Signals",targeting:"Targeting",kinetic:"Kinetic",torch:"Torch",hardened:"Hardened",pdnet:"PD net"};function _S(){const e=([a,l])=>[45*a,30*Math.sqrt(3)*(l+a/2)],t=(a,l,u=28)=>Array.from({length:6},(f,d)=>`${(a+u*Math.cos(Math.PI/3*d)).toFixed(1)},${(l+u*Math.sin(Math.PI/3*d)).toFixed(1)}`).join(" "),i=[];pl.forEach((a,l)=>{const[u,f]=e(ul[l]);i.push({key:a,cx:u,cy:f,branch:!0});const d=ul[l],p=ul[(l+1)%6],g=Object.keys(Fn).find(h=>Fn[h].needs.includes(a)&&Fn[h].needs.includes(pl[(l+1)%6])),[_,m]=e([d[0]+p[0],d[1]+p[1]]);i.push({key:g,cx:_,cy:m})});const r=I.tech[he],s=r.project,o=[`<title>One project at a time. A joint tech needs both neighbours at II. Research stations speed everything up.</title><polygon points="${t(0,0)}" class="hx core"/><text x="0" y="-2" class="hl">R&amp;D</text><text x="0" y="11" class="hs">×${Er(I,he).toFixed(1)}</text>`];for(const a of i){const l=r[a.key]||0,u=a.branch?ii[a.key].cost.length:1,f=po(I,he,a.key),d=l>=u?"done":s&&s.key===a.key?"run":f==="locked"?"locked":I.credits[he]<Tr(I,he,a.key).cost?"open poor":"open",p=O.techSel===a.key?" sel":"",g=a.branch?Array.from({length:u},(_,m)=>`<circle cx="${(m-(u-1)/2)*6}" cy="17" r="1.8" class="${m<l?"on":""}"/>`).join(""):"";o.push(`<g data-hex="${a.key}" transform="translate(${a.cx.toFixed(1)},${a.cy.toFixed(1)})" class="hexc ${d}${p}"><polygon points="${t(0,0)}" class="hx"/>`+(()=>{const _=hh(a.key);return`<svg x="-8" y="-17" width="16" height="16" viewBox="${_.vb}" class="ic${_.lu?" lu":""}">${_.body}</svg>`})()+`<text x="0" y="9" class="hl">${a.branch?ii[a.key].name:vS[a.key]}</text>${g}</g>`)}const c=Object.keys(Kt).map(a=>{const l=Kt[a].needs,u=I.wonders&&I.wonders[a]!==void 0?I.bodies[I.wonders[a]]:null,f=I.bodies.some(g=>g.owner===he&&g.project&&g.project.key===a),d=u?u.owner===he?"done":"taken":f?"run":r[l]?I.credits[he]<Kt[a].cost?"poor":"open":"locked",p=O.techSel===`mega:${a}`?" sel":"";return`<button data-hex="mega:${a}" class="mtile ${d}${p}" title="${pd(Kt[a].name)}">${lt(a)}</button>`}).join("");return`<svg class="board" viewBox="-124 -114 248 228">${o.join("")}</svg><div class="megarow"><span>Megaprojects</span>${c}</div>`}function xS(n){const e=I.tech[he],t=e.project,i=Fn[n],r=Tr(I,he,n),s=po(I,he,n),o=e[n]||0,c=i?i.name:ii[n].name,a=i?o?[i.text]:[]:ii[n].levels.slice(0,o).map((u,f)=>`${u}: ${ii[n].text[f]}`);let l=a.length?`<div class="have">${a.map(u=>`<div>${lt("star")} ${u}</div>`).join("")}</div>`:"";if(!r)l+='<small class="dim">Complete</small>';else if(t&&t.key===n)l+=`<small>Researching ${r.title} · ${Math.floor((1-t.left/t.total)*100)}%</small>`;else{const u=i&&s==="locked"?`<small class="dim">Needs ${i.needs.map(f=>`${ii[f].name} II`).join(" and ")}</small>`:"";l+=`<div class="nextrow"><span>${i?"":`<b>${r.title}</b>`}<small>${r.text} · ${Tt(r.time/Er(I,he))}</small>${u}</span><button data-k="${n}" ${s?"disabled":""}>Research<small>${r.cost}</small></button></div>`}if(i){const u=Object.keys(Kt).find(f=>Kt[f].needs===n);u&&(l+=`<small class="dim unlocks">Unlocks ${lt(u)} ${Kt[u].name}</small>`)}return`<div class="tdetail"><div class="th">${lt(n)} <b>${c}</b></div>${l}</div>`}function yS(n){const e=Object.keys(Kt).find(u=>Kt[u].needs===n);if(!e)return"";const t=Kt[e],i=`<div class="mega"><div class="th">${lt(e)} <b>${t.name}</b> <span class="dim">megaproject</span></div><small>${t.text}</small><small class="dim">${t.where==="giant"?"Gas giants only":t.where==="inner"?"Innermost planet only":t.where==="planet"?"Planets only":"Any world of yours"} · one per world · only one empire can finish it</small>`,r=I.wonders&&I.wonders[e]!==void 0?I.bodies[I.wonders[e]]:null;if(r)return`${i}<small>${r.owner===he?"Yours":`Built by ${Qn(r.owner)}`}, at ${r.name}</small></div>`;const s=I.bodies.find(u=>u.owner===he&&u.project&&u.project.key===e),o=I.bodies.filter(u=>u.owner!==he&&u.project&&u.project.key===e).length,c=o?`<small class="warn">${o} rival${o===1?"":"s"} building it</small>`:"";if(s)return`${i}${c}<div class="nextrow"><span><small>At ${s.name} · ${Tt(s.project.left/Er(I,he))} left · research stations speed it up</small><i class="meter"><i style="width:${Nr(1-s.project.left/t.time)}"></i></i></span></div></div>`;const a=I.tech[he][n],l=I.bodies.filter(u=>u.owner===he&&!Ps(I,u,e));return`${i}${c}<div class="nextrow"><span><small>${a?l.length?Tt(t.time/Er(I,he)):"No world of yours can take it yet":`Needs ${Fn[n].name}${I.tech[he][Fn[n].needs[0]]<2||I.tech[he][Fn[n].needs[1]]<2?` (after ${Fn[n].needs.map(u=>`${ii[u].name} II`).join(" and ")})`:""}`}</small></span><button data-mega="${e}" ${a&&l.length?"":"disabled"}>Build<small>${t.cost}</small></button></div></div>`}function To(){const e=I.tech[he].project;if(G("rbar").hidden=!0,G("rnd").hidden=!tn||bs||O.mode==="project"||!G("menu").hidden||!G("end").hidden||!G("research").hidden||fS()&&(!G("actions").hidden||!G("peek").hidden||!G("fleet").hidden),G("rnd").classList.toggle("idle",!e),wn(G("rndsub"),e?`${ii[e.key]?ii[e.key].name:Fn[e.key].name} · ${Tt(e.left/Er(I,he))}`:"idle"),G("rndbar").style.width=e?Nr(1-e.left/e.total):"0%",G("research").hidden)return;G("rstatus").textContent="",O.techSel||(O.techSel=e?e.key:pl.find(i=>Tr(I,he,i))||"ansible");const t=O.techSel;wn(G("rlist"),_S()+(t.startsWith("mega:")?`<div class="tdetail">${yS(Kt[t.slice(5)].needs)}</div>`:xS(t)))}G("rlist").addEventListener("click",n=>{const e=n.target.closest("[data-hex]");if(e){O.techSel=e.dataset.hex,To();return}const t=n.target.closest("button[data-fund]");if(t){fi({type:"fund",b:Number(t.dataset.fb),how:t.dataset.fund}),To();return}const i=n.target.closest("button[data-mega]");i&&(O.mode="project",O.projKey=i.dataset.mega,O.selected=O.target=null,G("research").hidden=!0,Ct())});G("rnd").addEventListener("click",()=>{G("research").hidden=!G("research").hidden,O.selected=O.target=null,Ct(),To()});G("rclose").addEventListener("click",()=>{G("research").hidden=!0});const MS=n=>{G("research").hidden||n.target.closest("#research, #rnd")||(G("research").hidden=!0,mc())};for(const n of["pointerdown","touchstart","mousedown"])document.addEventListener(n,MS,{capture:!0,passive:!0});G("rlist").addEventListener("click",n=>{const e=n.target.closest("button[data-k]");if(!e)return;const t=ph(e.dataset.k,(I.tech[he][e.dataset.k]||0)+1);fi({type:"research",k:e.dataset.k})&&(ht(`Researching ${t}`,ut(he)),G("research").hidden=!0),To()});G("pct").addEventListener("input",()=>{ot.pct=Number(G("pct").value),jr(),Ct()});G("count").addEventListener("click",()=>{ot.pct=ot.pct===100?50:ot.pct===50?25:100,jr(),Ct()});G("launch").addEventListener("click",()=>{if(!O.mode){O.mode="launch",O.target=null,Ct();return}SS()});G("dark").addEventListener("click",()=>{O.dark=!O.dark,Ct()});G("cancel").addEventListener("click",()=>{O.dark=!1,O.mode=null,O.target=null,Ct()});G("focus").addEventListener("click",()=>{const n=O.target??O.selected;n!==null&&Ke.focus(I,n),Ct()});function SS(){if(O.mode==="projconfirm"&&O.selected!==null){const n=I.bodies[O.selected];fi({type:"project",b:n.id,k:O.projKey})&&ht(`${Kt[O.projKey].name} begun at ${n.name}`,ut(he),O.projKey),O.mode=null,Ct();return}if(!(O.selected===null||O.target===null)){if(O.mode==="spy"){const n=I.bodies[O.target];fi({type:"spy",b:O.target})&&ht(`Recruiting an agent on ${n.name}`,ut(he),"spy"),O.mode=null,O.selected=O.target=null,Ct();return}if(O.mode==="probe"){const n=I.bodies[O.target];fi({type:"probe",b:O.selected,to:O.target})&&ht(`Probe away to ${n.name}`,ut(he)),O.mode=null,O.selected=O.target=null,Ct();return}O.count<1||(fi({type:"launch",b:O.selected,to:O.target,n:O.count,dark:O.dark}),O.dark=!1,O.mode=null,O.selected=O.target=null,Ct())}}let gc=matchMedia("(pointer: coarse)").matches;window.addEventListener("pointerdown",n=>{gc=n.pointerType!=="mouse"},!0);const xi=document.createElement("div");xi.id="tipbox";xi.hidden=!0;document.body.appendChild(xi);let vc=null;function md(n,e=n.dataset.tip){vc=n,xi.textContent=e,xi.hidden=!1;const t=n.getBoundingClientRect(),i=Math.min(280,window.innerWidth-24);xi.style.maxWidth=`${i}px`;const r=xi.offsetWidth,s=xi.offsetHeight,o=Math.max(12,Math.min(window.innerWidth-r-12,t.left+t.width/2-r/2)),c=t.top-s-8;xi.style.left=`${o}px`,xi.style.top=`${c>8?c:t.bottom+8}px`}function yu(){vc=null,xi.hidden=!0}document.addEventListener("mouseover",n=>{const e=n.target.closest?.("[data-tip]");e&&!gc&&md(e)});document.addEventListener("mouseout",n=>{const e=n.target.closest?.("[data-tip]");e&&e===vc&&!gc&&yu()});document.addEventListener("click",n=>{if(Eo)return;const e=n.target.closest?.("[data-tip]");if(e&&gc){vc===e?yu():md(e);return}e||yu()},!0);let Mu=null,Eo=!1;document.addEventListener("pointerdown",n=>{const e=n.target.closest?.("[data-hold]");clearTimeout(Mu),Eo=!1,!(!e||n.pointerType==="mouse")&&(Mu=setTimeout(()=>{Eo=!0,md(e,e.dataset.hold)},450))},!0);for(const n of["pointerup","pointercancel","pointermove"])document.addEventListener(n,e=>{(n!=="pointermove"||Math.hypot(e.movementX||0,e.movementY||0)>6)&&clearTimeout(Mu)},!0);let lo=null;function ht(n,e,t=null){const i=G("feed"),r=document.createElement("div");if(r.className="note",lo!==null&&I&&I.bodies[lo]){const s=lo;r.classList.add("go"),r.addEventListener("click",()=>{Ke.focus(I,s),O.mode=null,O.fleet=null,O.selected=I.bodies[s].owner===he?s:null,O.peek=s,Ct()})}for(r.style.setProperty("--c",e),r.textContent=n,t&&r.insertAdjacentHTML("afterbegin",`${lt(t)} `),i.prepend(r);i.children.length>4;)i.lastChild.remove();setTimeout(()=>r.classList.add("gone"),5200),setTimeout(()=>r.remove(),5800)}const Su=n=>["","blooded","veteran","elite"][$n(n)],Ki=n=>`TF ${n}`;function O0(n=I.events.splice(0)){const e=O.vis,t=r=>I.bodies[r].name,i=ut(he);for(const r of n){lo=r.at??r.to??r.from??null;const s=ut(r.owner);switch(r.type){case"launch":if(r.owner===he){const o=I.fleets.find(c=>c.id===r.fleet);ht(`${Ki(r.name)} · ${r.n} ship${r.n===1?"":"s"} → ${t(r.to)}${o?` · ${Tt(o.T)}`:""}${o&&o.assist!==void 0?` · assist via ${t(o.assist)}`:""}`,i);break}if(!e||e.intel<1||!e.bodies.has(r.from))break;{const o=I.fleets.find(c=>c.id===r.fleet);if(o&&o.dark&&!e.seesFleet(o))break}ht(`Launch detected at ${t(r.from)} · ${r.n} ship${r.n===1?"":"s"}${e.intel>=2?` → ${t(r.to)}`:""}`,s);break;case"arrived":r.owner===he&&ht(`${Ki(r.name)} arrived at ${t(r.at)}`,i);break;case"engaged":r.owner===he?ht(`${Ki(r.name)} engaging ${t(r.at)}`,i):r.vs===he&&ht(`${t(r.at)} under attack`,s);break;case"wiped":r.owner===he?ht(`${Ki(r.name)} lost with all hands at ${t(r.at)}`,ut(r.vs)):r.vs===he&&ht(`Enemy ${Ki(r.name)} destroyed at ${t(r.at)}`,i);break;case"captured":r.owner===he?ht(`${t(r.at)} taken by ${Ki(r.name)}`,i):r.from===he&&ht(`${t(r.at)} lost`,s);break;case"held":r.owner===he&&ht(`${t(r.at)} held${$n(I.bodies[r.at].vet)?` · garrison ${Su(I.bodies[r.at].vet)}`:""}`,i);break;case"promoted":r.owner===he&&ht(`${r.name?Ki(r.name):`${t(r.at)} garrison`} now ${Su(r.v)}`,i);break;case"event":{const o=xr[r.kind];r.phase==="soon"?ht(I.bodies[r.at].visitor?`${t(r.at)} incoming`:`${o.name} at ${t(r.at)} in 1:00`,"#c7a6ff",r.kind):r.phase==="won"?ht(`${r.owner===he?"You":Qn(r.owner)} secured the ${o.name.toLowerCase()} · ${r.what}`,ut(r.owner),r.kind):ht(`${o.name} at ${t(r.at)} is gone`,"#858ca6",r.kind);break}case"visitor":ht(`${r.name} has left the system`,"#858ca6","comet");break;case"project":{const o=Kt[r.key];r.phase==="start"&&r.owner!==he&&ht(`${Qn(r.owner)} began the ${o.name} at ${t(r.at)}`,ut(r.owner),r.key),r.phase==="done"&&ht(`${r.owner===he?"You":Qn(r.owner)} completed the ${o.name}`,ut(r.owner),r.key),r.phase==="lost"&&r.owner===he&&ht(`Beaten to the ${o.name}: half refunded`,"#ff7a4d",r.key);break}case"spycaught":r.owner===he?ht(`Agent caught on ${t(r.at)} after ${Tt(r.after)}`,"#ff7a4d","spy"):r.by===he&&ht(`Security caught a ${Qn(r.owner)} spy on ${t(r.at)}`,i,"spy");break;case"breakout":r.owner===he&&ht(`Broke out of ${t(r.at)}: ${r.lost} ship${r.lost===1?"":"s"} lost${r.n?`, ${r.n} got away`:""}`,"#ff7a4d");break;case"probed":r.owner===he&&ht(`Probe flyby of ${t(r.at)} · in view for ${Math.round(Te.probe.scan/60*2)/2} min`,i);break;case"scrapped":r.owner===he&&ht(`${Te.structures[r.what].name} scrapped at ${t(r.at)}`,i);break;case"research":r.owner===he&&ht(`${ph(r.key,r.level)} complete`,i,r.key);break}}lo=null}function uh(n,e,t,i=!1){if(!O.mode){const r=Ke.pickFleet(I,e,t,he),s=n!==null&&(n===O.peek||n===O.selected);if(r!==null&&(n===null||s)&&O.fleet!==r){O.selected=O.target=O.peek=null,O.fleet=r,Ct();return}}if(O.fleet=null,n!==null&&!i&&Ke.focus(I,n,!1),O.mode==="project"){const r=n!==null?I.bodies[n]:null,s=r?Ps(I,r,O.projKey):"cancelled";if(r&&!s){O.selected=n,O.peek=null,O.mode="projconfirm",Ct();return}ht(s==="cancelled"?"Megaproject cancelled":`Can't build it there: ${s}`,"#858ca6"),O.mode=null,Ct();return}if(O.mode==="launch"||O.mode==="probe"||O.mode==="spy")n===null?(O.selected=O.target=null,O.mode=null):O.target=n!==O.selected?n:null;else if(n===null||n===O.selected)O.selected=O.target=null;else if(I.bodies[n].owner===he)O.selected=n,O.slot=null,O.pick=null,O.target=null;else{O.selected=O.target=null,O.peek=O.peek===n?null:n,Ct();return}O.peek=null,Ct()}const Hr=G("scene"),ki=new Map;let gt=null,hr={t:0,id:null};Hr.addEventListener("pointerdown",n=>{if(tn){n.preventDefault();try{Hr.setPointerCapture(n.pointerId)}catch{}if(n.pointerType==="mouse"){const e=n.button===2||n.button===1||n.altKey;gt={kind:e?"turn":"click",right:n.button===2,mouse:!0,x0:n.clientX,y0:n.clientY,x:n.clientX,y:n.clientY,pivot:e?Ke.pivotAt(I,n.clientX,n.clientY):null},O.dragging=!0,Ke.orbit.vaz=Ke.orbit.vpol=0;return}if(ki.set(n.pointerId,{x:n.clientX,y:n.clientY}),ki.size===1)gt={kind:"tap",x0:n.clientX,y0:n.clientY};else if(ki.size===2){const[e,t]=[...ki.values()];gt={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2}}O.dragging=!0,Ke.orbit.vaz=Ke.orbit.vpol=0}});Hr.addEventListener("pointermove",n=>{if(gt?.mouse){const r=n.clientX-gt.x,s=n.clientY-gt.y;gt.x=n.clientX,gt.y=n.clientY,gt.kind==="click"&&Math.hypot(n.clientX-gt.x0,n.clientY-gt.y0)>5&&(gt.kind="pan"),gt.kind==="pan"&&Ke.pan(r,s),gt.kind==="turn"&&(Ke.rotateAround(gt.pivot,-r*.006,-s*.006),Math.hypot(n.clientX-gt.x0,n.clientY-gt.y0)>5&&(gt.moved=!0));return}n.pointerType==="mouse"&&I&&(Hr.style.cursor=Ke.pick(n.clientX,n.clientY)!==null?"pointer":"grab");const e=ki.get(n.pointerId);if(!e||!gt)return;const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,gt.kind==="pinch"){if(ki.size<2)return;const[r,s]=[...ki.values()],o=Math.hypot(r.x-s.x,r.y-s.y),c=(r.x+s.x)/2,a=(r.y+s.y)/2;Ke.pan(c-gt.mx,a-gt.my),Ke.zoomAt(c,a,gt.d/Math.max(1,o)),gt.d=o,gt.mx=c,gt.my=a;return}if(gt.kind==="tap"&&Math.hypot(n.clientX-gt.x0,n.clientY-gt.y0)>10&&(gt.kind="orbit"),gt.kind==="orbit"){const r=4/window.innerHeight;Ke.orbit.az-=t*r,Ke.orbit.pol-=i*r,Ke.orbit.vaz=-t*r,Ke.orbit.vpol=-i*r}});function z0(n){if(gt?.mouse){const e=gt;if(gt=null,O.dragging=!1,e.kind==="turn"&&e.right&&!e.moved&&n.type!=="pointercancel"){const r=Ke.pick(n.clientX,n.clientY),s=O.selected!==null?I.bodies[O.selected]:null;r!==null&&s&&s.owner===he&&r!==s.id&&s.ships&&(O.mode="launch",O.target=r,O.fleet=null,Ct());return}if(e.kind!=="click"||n.type==="pointercancel")return;const t=Ke.pick(n.clientX,n.clientY),i=performance.now();t!==null&&hr.id===t&&i-hr.t<350?(Ke.focus(I,t),hr={t:0,id:null},Ct()):(hr={t:i,id:t},uh(t,n.clientX,n.clientY,!0));return}if(ki.delete(n.pointerId)){if(gt?.kind==="tap"&&ki.size===0){const e=Ke.pick(n.clientX,n.clientY),t=performance.now();e!==null&&hr.id===e&&t-hr.t<350?(Ke.focus(I,e),hr={t:0,id:null},Ct()):(hr={t,id:e},uh(e,n.clientX,n.clientY))}ki.size===0?(gt=null,O.dragging=!1):gt={kind:"orbit"}}}Hr.addEventListener("pointerup",z0);Hr.addEventListener("pointercancel",n=>{z0(n),gt=null,O.dragging=!1});Hr.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?window.innerHeight:1),t=n.ctrlKey?.01:.0015;Ke.zoomToward(n.clientX,n.clientY,Math.exp(Math.max(-.5,Math.min(.5,e*t))))},{passive:!1});const Ao=new Set;window.addEventListener("keydown",n=>{if(!tn||n.target.closest("input, textarea"))return;const e=n.key.toLowerCase();if(Ao.add(e),e==="escape")O.mode?(O.mode=null,O.target=null):O.selected=O.target=O.peek=null,G("research").hidden=!0,Ct();else if(e==="f"){const t=O.target??O.selected;t!==null&&Ke.focus(I,t)}else if(e==="h")F0();else if(e>="1"&&e<="5"&&!St)hd(Aa[Number(e)-1]);else if(e===" ")n.preventDefault(),G("pause").hidden||C0();else if(e==="l"||e==="enter")O.selected!==null&&!G("launch").disabled&&G("launch").click();else if(e==="d")G("dark").hidden||G("dark").click();else if(e==="p"){const t=document.querySelector("#buildrow button[data-probe]");t&&!t.disabled&&t.click()}else e==="r"&&G("rnd").click()});window.addEventListener("keyup",n=>Ao.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>Ao.clear());function bS(n){if(!Ao.size)return;const e=700*n,t=(...i)=>i.some(r=>Ao.has(r));t("w","arrowup")&&Ke.pan(0,e),t("s","arrowdown")&&Ke.pan(0,-e),t("a","arrowleft")&&Ke.pan(e,0),t("d","arrowright")&&Ke.pan(-e,0),t("q")&&(Ke.orbit.az+=n*1.5),t("e")&&(Ke.orbit.az-=n*1.5),t("=","+")&&Ke.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(-n*1.8)),t("-","_")&&Ke.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(n*1.8))}document.addEventListener("contextmenu",n=>n.preventDefault());for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,e=>e.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});const wS=["You","Red","Amber"],Qn=n=>n===he?"You":I.names?I.names[n]:wS[n];function dl(n,e,t,i,r=s=>Math.round(s)){const f=t.at(-1).t||1,d=Math.max(1,...t.flatMap(v=>v.p.map(w=>w[e]))),p=v=>30+v/f*256,g=v=>8+(1-v/d)*104,_=i.map(v=>{const w=t.map(b=>`${p(b.t).toFixed(1)},${g(b.p[v][e]).toFixed(1)}`).join(" "),y=t.at(-1).p[v][e];return`<polyline points="${w}" fill="none" stroke="${ut(v)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><text x="${p(f)+4}" y="${g(y)+4}" font-size="10" fill="#aab1c8">${Qn(v)}</text>`}).join(""),m=[0,.5,1].map(v=>`<line x1="30" x2="286" y1="${g(d*v)}" y2="${g(d*v)}" stroke="rgba(160,180,255,0.12)" /><text x="26" y="${g(d*v)+3}" font-size="9" fill="#858ca6" text-anchor="end">${r(d*v)}</text>`).join(""),h=`<text x="30" y="126" font-size="9" fill="#858ca6">0:00</text><text x="286" y="126" font-size="9" fill="#858ca6" text-anchor="end">${Tt(f)}</text>`;return`<div class="chart" data-key="${e}"><h3>${n}</h3><svg viewBox="0 0 320 130" data-l="30" data-r="286" data-w="320">${m}${h}${_}<line class="cross" y1="8" y2="112" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg><div class="readout">Touch the chart to read values</div></div>`}const B0=[["Ships built","built"],["Ships lost","lost"],["Enemy ships destroyed","killed"],["Worlds captured","captured"],["Worlds lost","worldsLost"],["Credits earned","earned"],["Credits spent","spent"],["Research completed","research"]],dh=new Set(["lost","worldsLost"]);function G0(n,e){const t=e.map(r=>Math.round(I.stats.totals[r][n])),i=dh.has(n)?Math.min(...t):Math.max(...t);return!dh.has(n)&&i<=0?[]:t.every(r=>r===i)?[]:e.filter((r,s)=>t[s]===i)}function TS(){const n=I.players-1,e=[...new Set(fc)],t=e.length?` · ${I.mp?"AI ":""}${e.join("/")}`:"";return`${Rs?`Daily ${Rs.slice(5).replace("-","/")} · ${Wn[I.system].name}`:Wn[I.system].name} · ${Tt(I.time)} · ${n} rival${n===1?"":"s"}${t}`}function ES(n,e,t,i,r,s,o,c){let a=o;for(n.font=c(s,a);a>16&&n.measureText(e).width>r;)n.font=c(s,--a);if(n.measureText(e).width>r){for(;e.length>1&&n.measureText(e+"…").width>r;)e=e.slice(0,-1);e+="…"}n.fillText(e,t,i)}function AS(){const t=document.createElement("canvas");t.width=1080,t.height=1500;const i=t.getContext("2d"),r=Array.from({length:I.players},(m,h)=>h),s=(m,h)=>`${m} ${h}px Rajdhani, system-ui, sans-serif`;i.fillStyle="#03040a",i.fillRect(0,0,1080,1500),i.strokeStyle="rgba(120,190,255,0.25)",i.lineWidth=2,i.strokeRect(24,24,1032,1452),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(600,30),i.fillText("P E R I H E L I O N",1080/2,96);const o=I.winner===he;i.fillStyle=ut(o?he:I.winner),i.font=s(700,96),i.fillText(o?"VICTORY":"DEFEAT",1080/2,200),i.fillStyle="#e6ebf7",i.font=s(500,34),i.fillText(TS(),1080/2,252);const c=80,a=170,l=920-a*r.length;let u=330;i.font=s(700,32),i.textAlign="right",r.forEach((m,h)=>{i.fillStyle=ut(m),ES(i,Qn(m),c+l+a*(h+1)-20,u,a-30,700,32,s)}),u+=20;for(const[m,h]of B0){u+=52,i.strokeStyle="rgba(160,180,255,0.15)",i.beginPath(),i.moveTo(c,u+16),i.lineTo(1080-c,u+16),i.stroke(),i.textAlign="left",i.fillStyle="#858ca6",i.font=s(500,30),i.fillText(m,c,u);const v=G0(h,r);r.forEach((w,y)=>{const b=c+l+a*(y+1)-20;v.includes(w)?(i.fillStyle="rgba(126,224,161,0.16)",i.fillRect(b-a+30,u-34,a-20,46),i.fillStyle="#7ee0a1"):i.fillStyle="#e6ebf7",i.textAlign="right",i.font=s(v.includes(w)?700:500,32),i.fillText(String(Math.round(I.stats.totals[w][h])),b,u)})}const f=I.stats.series,d=[["Ships","ships"],["Worlds","worlds"],["Income","income"]],p=880/3,g=400,_=u+90;return d.forEach(([m,h],v)=>{const w=80+v*(p+20);i.textAlign="left",i.fillStyle="#e6ebf7",i.font=s(600,30),i.fillText(m,w,_);const y=_+20,b=y+g,M=f.at(-1).t||1,A=Math.max(1,...f.flatMap(x=>x.p.map(E=>E[h])));i.strokeStyle="rgba(160,180,255,0.15)",i.lineWidth=2;for(const x of[0,.5,1])i.beginPath(),i.moveTo(w,b-x*g),i.lineTo(w+p,b-x*g),i.stroke();for(const x of r)i.strokeStyle=ut(x),i.lineWidth=4,i.lineJoin="round",i.beginPath(),f.forEach((E,C)=>{const R=w+E.t/M*p,L=b-E.p[x][h]/A*g;C?i.lineTo(R,L):i.moveTo(R,L)}),i.stroke();i.fillStyle="#858ca6",i.font=s(500,24),i.fillText(h==="income"?A.toFixed(1):String(Math.round(A)),w,y+26)}),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(500,26),i.fillText("pretzel-dev.github.io/game-dev/perihelion",1080/2,1444),t}async function CS(){const n=await new Promise(i=>AS().toBlob(i,"image/png")),e=new File([n],"perihelion-report.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i.name==="AbortError")return}const t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e.name,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}G("share").addEventListener("click",CS);function RS(){const n=I.stats,e=Array.from({length:I.players},(s,o)=>o),t=B0,i=`<div class="legend">${e.map(s=>`<span><i style="background:${ut(s)}"></i>${Qn(s)}</span>`).join("")}</div>`,r=`<table class="totals"><tr><th></th>${e.map(s=>`<th style="color:${ut(s)}">${Qn(s)}</th>`).join("")}</tr>`+t.map(([s,o])=>`<tr><td>${s}</td>${e.map(c=>`<td class="${G0(o,e).includes(c)?"best":""}">${Math.round(n.totals[c][o])}</td>`).join("")}</tr>`).join("")+"</table>";G("report").innerHTML=i+r+dl("Ships","ships",n.series,e)+dl("Worlds held","worlds",n.series,e)+dl("Income (credits/s)","income",n.series,e,s=>s.toFixed(1));for(const s of G("report").querySelectorAll(".chart")){const o=s.querySelector("svg"),c=s.dataset.key,a=l=>{const u=o.getBoundingClientRect(),f=(l.clientX-u.left)/u.width*Number(o.dataset.w),d=Number(o.dataset.l),p=Number(o.dataset.r),g=Math.min(1,Math.max(0,(f-d)/(p-d))),_=n.series[Math.round(g*(n.series.length-1))],m=o.querySelector(".cross"),h=d+_.t/(n.series.at(-1).t||1)*(p-d);m.setAttribute("x1",h),m.setAttribute("x2",h),m.setAttribute("visibility","visible"),s.querySelector(".readout").innerHTML=`${Tt(_.t)} · `+e.map(v=>{const w=_.p[v][c];return`${Qn(v)} <b>${c==="income"?w.toFixed(1):Math.round(w)}</b>`}).join(" · ")};o.addEventListener("pointerdown",a),o.addEventListener("pointermove",a)}}function PS(){tn=!1,G("rnd").hidden=!0,O.selected=O.target=null,Ct();const n=I.winner===he;G("end-title").textContent=n?"Victory":"Defeat",G("end-title").style.color=ut(n?he:I.winner);const e=[...new Set(fc)],t=e.length?` · ${e.map(i=>i[0].toUpperCase()+i.slice(1)).join(" / ")} AI`:"";G("end-sub").textContent=(n?`The system is yours after ${Tt(I.time)}.`:`Your last world fell at ${Tt(I.time)}.`)+t+` · ${Rs?"Daily · ":""}${Wn[I.system].name}`,RS(),setTimeout(()=>G("end").hidden=!1,1200)}let fh=performance.now(),fl=0,hl=0,bs=!1;function V0(n){const e=Math.min(.1,(n-fh)/1e3);if(fh=n,I){if(tn&&!di)if(St?.role==="client")I.time+=e;else{let t=e*zr;for(;t>0;){const i=Math.min(.25,t);for(const r of dc)Nh(I,r,i);Fu(I,i),t-=i}}if(tn){if(O.selected!==null&&I.bodies[O.selected].owner!==he&&(O.selected=O.target=null),St?.role!=="client"){const t=I.events.splice(0);O0(t),St?.role==="host"&&t.length&&St.room.broadcast({t:"events",list:t})}St?.role==="host"&&(hl-=e,(hl<=0||I.winner!==null)&&(hl=.25,St.room.broadcast({t:"state",s:lS()}))),I.mp&&!bs&&!I.bodies.some(t=>t.owner===he)&&!I.fleets.some(t=>t.owner===he&&!t.probe)&&I.winner===null&&(bs=!0,ht("Your empire has fallen · watching the rest","#ff7a4d"),O.vis=null),O.fleet!==null&&mc(),fl-=e,fl<=0&&(fl=.25,O.vis=bs||ot.dev&&!St&&O.devAs==="all"?null:Co(I,ot.dev&&!St&&O.devAs!==void 0?O.devAs:he),ot.dev&&!St&&k0(),Ct(),To(),wn(G("clock"),`<b>₵ ${Math.floor(I.credits[he])}</b> ${en(`+${Lu(I,he).toFixed(1)}/s`,hS(),"inc")} · T+${Tt(I.time)}`)),I.winner!==null&&PS()}tn&&bS(e),Ke.render(I,O,e*(tn?zr:.2),n/1e3)}requestAnimationFrame(V0)}window.addEventListener("resize",Ke.resize);Ke.resize();I=wh({seed:11,opponents:2});dc=[0,1,2].map(n=>xl(n,"hard",pi(5+n)));Ke.build(I);Ke.orbit.dist=330;(function n(){if(!(tn||G("menu").hidden)){for(let e=0;e<4;e++){for(const t of dc)Nh(I,t,.25);Fu(I,.25)}Ke.orbit.az+=.001,setTimeout(n,50)}})();requestAnimationFrame(V0);window.__perihelion={get game(){return I},view:Ke,ui:O,sim:{launch:nc,fleetState:Hn,step:Fu,posAt:bt}};
