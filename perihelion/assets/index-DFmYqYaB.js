var Op=n=>{throw TypeError(n)};var ps=(n,e,t)=>e.has(n)?Op("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);function kp(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Au={ansible:'<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>',drives:'<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>',sensors:'<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',intel:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',weapons:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',armour:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',industry:'<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>',array:'<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',targeting:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',kinetic:'<path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M4 9v6"/>',torch:'<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>',hardened:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>',pdnet:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',sundiver:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',massdriver:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',ringyard:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',citadel:'<path d="M10 5V3"/><path d="M14 5V3"/><path d="M15 21v-3a3 3 0 0 0-6 0v3"/><path d="M18 3v8"/><path d="M18 5H6"/><path d="M22 11H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"/><path d="M6 3v8"/>',telescope:'<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/><path d="m6.158 8.633 1.114 4.456"/><path d="m8 21 3.105-6.21"/><circle cx="12" cy="13" r="2"/>',spy:'<path d="M18 11c-1.5 0-2.5.5-3 2"/><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"/><path d="M6 11c1.5 0 2.5.5 3 2"/>'},Bp={guns:"M3 12h10M5 12V9h6v3M8 9V3.5",attack:"M3 3l10 10M13 3L3 13M3 10v3h3M13 10v3h-3",fleet:"M5 3.5l6 4.5-6 4.5",probe:"M8 2.5l5 5.5-5 5.5-5-5.5z",incoming:"M4 5l4 6 4-6",reinforce:"M4 11l4-6 4 6",system:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",focus:"M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0",pause:"M5.5 3.5v9M10.5 3.5v9",play:"M5 3l8 5-8 5z",close:"M4 4l8 8M12 4l-8 8",assist:"M12.5 5.5A5 5 0 1 0 13 9M12.5 2v3.5H9",spy:"M2.5 7.5h11M4.5 7.5l1.5-4h4l1.5 4M5.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 11.5h1",dark:"M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z",seam:"M8 1.5l4.5 4-4.5 8.5-4.5-8.5zM3.5 5.5h9M6 5.5l2 8.5 2-8.5",relay:"M3.5 9.5a5 5 0 0 0 7-7zM7 6l4.5-4.5M6 11l-2 3.5h7L9 11",depot:"M8 1.5C11 5.5 12 7.5 12 10a4 4 0 0 1-8 0c0-2.5 1-4.5 4-8.5zM6.5 10.5a1.5 1.5 0 0 0 1.5 1.5",post:"M8 9v5.5M5.5 14.5h5M5.2 6.2a4 4 0 0 1 5.6 0M3 4a7 7 0 0 1 10 0M8 8.5m-.6 0a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0",fortress:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5z",archive:"M2 3.5h4.5A1.5 1.5 0 0 1 8 5v9a1.5 1.5 0 0 0-1.5-1.5H2zM14 3.5H9.5A1.5 1.5 0 0 0 8 5v9a1.5 1.5 0 0 1 1.5-1.5H14z",hulk:"M8 5v9.5M5 7.5h6M2.5 10.5a5.5 4.5 0 0 0 11 0M8 2.2m-1.3 0a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0",forge:"M8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5M3.4 3.4l1.8 1.8M10.8 10.8l1.8 1.8M12.6 3.4l-1.8 1.8M5.2 10.8l-1.8 1.8M8 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0",comet:"M5 11m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 9l6.5-6.5M7.8 10.8l5-3.3M5.2 8.2l3.3-5",derelict:"M1.5 9.5l3.5-3h6l3.5 3-3.5 3H5zM9 6.5L7.5 4M6.5 9.5l1.5 1.5 1-2",signal:"M1.5 8.5h3l2-5 3 9 2-4h3",wreck:"M8 1.5v13M2.4 4.8l11.2 6.4M13.6 4.8L2.4 11.2",convoy:"M2 4.5l3 3.5-3 3.5M6.5 4.5l3 3.5-3 3.5M11 4.5l3 3.5-3 3.5",cache:"M2.5 5L8 2l5.5 3v6L8 14l-5.5-3zM2.5 5L8 8l5.5-3M8 8v6",drives:"M8 1.5l2.5 5h-5zM5.5 6.5h5v4h-5zM6.5 10.5L5 14.5M9.5 10.5l1.5 4M8 10.5v4",sensors:"M2.5 10a6 6 0 0 0 8.5-8.5zM6.8 6.2l5-5M12 1.5h2v2",intel:"M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",weapons:"M2 14l8-8M9.5 6.5l1.5-4 2.5 2.5-4 1.5M3 10l3 3",armour:"M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 4.5v7M5 6.5v3M11 6.5v3",industry:"M3 13l5.5-5.5M9.2 2.6a3.3 3.3 0 1 0 4.2 4.2l-2.2-.4-.6-1.6zM2 14l1-1",ansible:"M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4.6 4.6a4.8 4.8 0 0 0 0 6.8M11.4 4.6a4.8 4.8 0 0 1 0 6.8M2.2 2.2a8.2 8.2 0 0 0 0 11.6M13.8 2.2a8.2 8.2 0 0 1 0 11.6",targeting:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M8 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 1v3M8 12v3M1 8h3M12 8h3",kinetic:"M1.5 8h7M5.5 4.5L9 8l-3.5 3.5M11 3v10M13.5 5v6",torch:"M8 1.5c2.5 3 3.5 5 3.5 7.5a3.5 3.5 0 0 1-7 0c0-1.5.7-2.5 1.5-3.5.3 1.5 1 2 2 2 0-2-.5-4 0-6z",hardened:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5zM8 5.5v5M5.5 8h5",pdnet:"M2 12.5a6 6 0 0 1 12 0zM4.6 6.2L3.4 4M8 5V2.5M11.4 6.2L12.6 4",sundiver:"M5 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 3.5h5v9h-5zM9.5 8h5M12 3.5v9",massdriver:"M2 13L13 2M4.5 13.5L14 4M10.5 2h3.5v3.5",ringyard:"M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 8m-6.5 0a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0",citadel:"M2.5 14.5v-9h2v2h2v-2h3v2h2v-2h2v9zM6.5 14.5v-3h3v3",telescope:"M2 10l9-5 1.5 3-9 5zM6.5 11.5l-2 3M7.5 11l2 3.5M11 5l1.5-1 1.5 3-1.5 1",star:"M8 1.5l1.9 4.2 4.6.4-3.5 3 1.1 4.5L8 11.2l-4.1 2.4 1.1-4.5-3.5-3 4.6-.4z"},pf=n=>Au[n]?{vb:"0 0 24 24",body:Au[n],lu:!0}:{vb:"0 0 16 16",body:`<path d="${Bp[n]}"/>`,lu:!1},dt=(n,e="")=>{const t=pf(n);return`<svg class="ic${t.lu?" lu":""}${e?` ${e}`:""}" viewBox="${t.vb}" aria-hidden="true">${t.body}</svg>`},Be=-1,Cu=0,Se={accel:.03,outerPeriod:2400,outerRadius:200,startShips:4,startCredits:400,income:{planet:1,moon:.5,station:.6,asteroid:.3,visitor:0},homeIncome:.4,mineIncome:1.5,ship:{cost:150,time:45},structures:{shipyard:{name:"Shipyard",cost:400,time:90,desc:"Builds ships, one at a time"},mine:{name:"Mine",cost:200,time:45,only:["asteroid","moon"],maxLevel:3,desc:"+1.5/s per level"},skimmer:{name:"Gas harvester",cost:350,time:70,where:"giant",maxLevel:3,income:2,desc:"Skims fuel from the clouds: +2/s per level"},exchange:{name:"Orbital exchange",cost:450,time:80,where:"home",maxLevel:2,income:2.5,desc:"Sells war bonds: +2.5/s per level"},defence:{name:"Guns",cost:250,time:50,maxLevel:3,desc:"+2 guns per level"},bureau:{name:"Security bureau",cost:250,time:50,maxLevel:2,desc:"Hunts enemy spies here and on nearby worlds"},lab:{name:"Research station",cost:300,time:60,maxLevel:3,desc:"Research +50% per level"}},baseGuns:1,gunsPerDefence:2,coverShare:.5,moonCover:.25,fire:.12,gunRegen:.02,flipTime:4,demolishFee:.25,scrapTime:20,cooldown:15,probe:{cost:80,speed:4,scan:150},cancelRefund:.8,labSpeed:.5},Gn={drives:{name:"Drives",cost:[300,600,1e3],time:[90,150,240],levels:["Magnetic nozzle","Pellet-fusion torch","Catalysed fusion drive"],text:["Tighter plasma, +15% thrust","Pulsed fusion, +30% thrust","Hotter burn, +45% thrust"]},sensors:{name:"Sensors",cost:[250,500,900],time:[80,140,220],levels:["Long-baseline telescopes","Deep-space listening posts","Interferometer net"],text:["Spot drive flares further out","Hear further into the system","Wide-field sight, a long way out"]},intel:{name:"Intel",cost:[300,550,850],time:[90,150,210],levels:["Signals intercept","Agents in the yards","Broken fleet cipher"],text:["Read enemy fleet sizes","Learn enemy routes and landing points","Know arrival times; get warnings"]},weapons:{name:"Weapons",cost:[400,800],time:[120,200],levels:["Coilgun batteries","Spinal railguns"],text:["Faster slugs, +15% firepower","Hull-length rails, +30% firepower"]},armour:{name:"Armour",cost:[400,800],time:[120,200],levels:["Whipple shielding","Point-defence drone swarm"],text:["Layered plate, 12% less damage","Drones swat rounds, 24% less damage"]},industry:{name:"Industry",cost:[350,700],time:[100,180],levels:["Orbital fabricators","Self-replicating tooling"],text:["Build 12% faster, mines +15%","Build 24% faster, mines +30%"]}},Ol={burn:.12,seen:.3},Jn={travel:40,cost:250,catch:1/300,intel:.5,bureau:1.5,bureauRange:40,skim:.4,slow:.25},zp=[70,100,135,175],Tc=["intel","sensors","weapons","drives","industry","armour"],mn={ansible:{name:"Entangled signals",needs:["intel","sensors"],cost:1100,time:220,text:"Read every fleet you can see: its size, destination and arrival time; get warnings"},targeting:{name:"Targeting data",needs:["sensors","weapons"],cost:1100,time:220,text:"+20% firepower when attacking"},kinetic:{name:"Kinetic strike",needs:["weapons","drives"],cost:1100,time:220,text:"Fleets arrive firing: an opening volley destroys a fifth of their number in defenders"},torch:{name:"Torch production",needs:["drives","industry"],cost:1100,time:220,text:"Ships build 25% faster and fly 10% faster"},hardened:{name:"Hardened colonies",needs:["industry","armour"],cost:1100,time:220,text:"+1 gun on every world; guns rebuild twice as fast"},pdnet:{name:"Point-defence net",needs:["armour","intel"],cost:1100,time:220,text:"Your worlds shoot down 15% of every attacking fleet as it arrives"}},ci=(n,e,t)=>e!==Be&&!!n.tech&&!!n.tech[e][t],mf=(n,e)=>mn[n]?mn[n].name:Gn[n].levels[e-1],Bt={sundiver:{needs:"torch",name:"Sun-diver collectors",where:"inner",text:"+8 credits/s",cost:2e3,time:480},massdriver:{needs:"kinetic",name:"Mass driver",where:"planet",text:"Fleets launched here fly 50% faster",cost:2e3,time:480},ringyard:{needs:"hardened",name:"Ring yard",where:"giant",text:"Ships build three times as fast here",cost:2e3,time:480},citadel:{needs:"pdnet",name:"Fortress world",where:"any",text:"Three times the guns here, and its cover reaches its family at full strength",cost:2e3,time:480},array:{needs:"ansible",name:"Ansible array",where:"any",text:"See every world and fleet in the system, and where they are going",cost:2e3,time:480},telescope:{needs:"targeting",name:"Deep-space telescope",where:"any",text:"See every enemy fleet: its size, destination and arrival time",cost:2e3,time:480}},_i={credits:200,cut:30,crewCut:20},to=(n,e,t)=>e!==Be&&n.bodies.some(i=>i.wonder===t&&i.owner===e);function ya(n,e,t){const i=Bt[t];if(e.owner===Be||e.visitor)return"not yours";if(!ci(n,e.owner,i.needs))return`needs ${mn[i.needs].name}`;if(e.project||e.wonder)return"this world already has one";if(n.wonders&&n.wonders[t]!==void 0)return"already built";if(i.where==="giant"&&!e.giant)return"gas giants only";if(i.where==="planet"&&e.kind!=="planet")return"planets only";if(i.where==="inner"){const r=n.bodies.filter(s=>s.kind==="planet"&&s.parent===null&&!s.star).sort((s,o)=>s.r-o.r)[0];if(e!==r)return"the innermost planet only"}return n.credits[e.owner]<i.cost?"not enough credits":null}function gf(n,e,t){if(ya(n,e,t))return!1;const i=Bt[t];return n.credits[e.owner]-=i.cost,Yt(n,e.owner,"spent",i.cost),e.project={key:t,left:i.time,paid:i.cost},Kt(n,{type:"project",phase:"start",owner:e.owner,at:e.id,key:t}),!0}function _f(n,e,t){return!e.project||e.owner===Be?!1:t==="ship"?fi(n,e)<1?!1:(e.ships-=1,e.project.rush=(e.project.rush||0)+_i.crewCut,!0):n.credits[e.owner]<_i.credits?!1:(n.credits[e.owner]-=_i.credits,Yt(n,e.owner,"spent",_i.credits),e.project.paid+=_i.credits,e.project.rush=(e.project.rush||0)+_i.cut,!0)}function Gp(n,e){for(const t of n.bodies){if(!t.project||t.owner===Be||t.sieges.length)continue;const i=t.project.rush>0?2:1;if(t.project.rush>0&&(t.project.rush=Math.max(0,t.project.rush-e)),t.project.left-=e*i*rr(n,t.owner)*(Hp(n,t).length?1-Jn.slow:1),t.project.left>0)continue;const r=t.project.key;t.wonder=r,t.project=null,(n.wonders||(n.wonders={}))[r]=t.id,Kt(n,{type:"project",phase:"done",owner:t.owner,at:t.id,key:r});for(const s of n.bodies)!s.project||s.project.key!==r||(s.owner!==Be&&(n.credits[s.owner]+=Math.round(s.project.paid/2)),Kt(n,{type:"project",phase:"lost",owner:s.owner,at:s.id,key:r}),s.project=null)}}const Hi=(n,e,t)=>e===Be||!n.tech?0:n.tech[e][t];function Yt(n,e,t,i=1){e===Be||!n.stats||(n.stats.totals[e][t]+=i)}function Ru(n){n.stats.series.push({t:n.time,p:n.credits.map((e,t)=>({ships:n.bodies.reduce((i,r)=>i+(r.owner===t?r.ships:0),0)+n.fleets.reduce((i,r)=>i+(r.owner===t?r.n:0),0),worlds:n.bodies.filter(i=>i.owner===t).length,income:Vl(n,t),credits:e}))})}const Yo=(n,e)=>Se.accel*(1+.15*Hi(n,e,"drives"))*(ci(n,e,"torch")?1.1:1),kl=(n,e)=>1+.15*Hi(n,e,"weapons"),vf=(n,e)=>kl(n,e)*(ci(n,e,"targeting")?1.2:1),Ko=(n,e)=>1-.12*Hi(n,e,"armour"),ts=(n,e,t=null)=>(1+.12*Hi(n,e,"industry"))*(t&&t.perk==="forge"?Hn.forge.boost:1);function cr(n,e,t){const i=n.tech[e][t]||0;if(mn[t]){const s=mn[t];return i?null:{level:1,cost:s.cost,time:s.time,text:s.text,title:s.name}}const r=Gn[t];return i<r.cost.length?{level:i+1,cost:r.cost[i],time:r.time[i],text:r.text[i],title:r.levels[i]}:null}function rr(n,e){const t=n.bodies.reduce((i,r)=>i+(r.owner===e?Ps(r,"lab"):0),0);return(1+Se.labSpeed*t)*(bf(n,e,"archive")?Hn.archive.boost:1)}function Os(n,e,t){const i=cr(n,e,t);return i?mn[t]&&mn[t].needs.some(r=>n.tech[e][r]<2)?"locked":n.tech[e].project?"already researching":n.credits[e]<i.cost?"not enough credits":null:"complete"}function xf(n,e,t){if(Os(n,e,t))return!1;const i=cr(n,e,t);return n.credits[e]-=i.cost,Yt(n,e,"spent",i.cost),n.tech[e].project={key:t,left:i.time,total:i.time},!0}function Bl(n,e,t){return e===Be||!t||t.owner===Be||t.owner===e?"enemy worlds only":Hi(n,e,"intel")<1?"needs Signals intercept":(n.spies||[]).some(i=>i.owner===e&&i.body===t.id)?"already a spy there":n.credits[e]<Jn.cost?"not enough credits":null}function yf(n,e,t){if(Bl(n,e,t)||n.winner!==null)return null;n.credits[e]-=Jn.cost,Yt(n,e,"spent",Jn.cost);const i={id:n.nextId++,owner:e,body:t.id,since:n.time+Jn.travel};return(n.spies||(n.spies=[])).push(i),i}const Hp=(n,e)=>(n.spies||[]).filter(t=>t.body===e.id&&t.owner!==e.owner&&t.since<=n.time);function Mf(n,e){if(e.owner===Be)return 1;const t=Mt(n,e,n.time);let i=0;for(const r of n.bodies){if(r.owner!==e.owner)continue;const s=r.structures.find(o=>o.type==="bureau"&&o.left<=0);s&&(r===e||Vn(Mt(n,r,n.time),t)<=Jn.bureauRange)&&(i=Math.max(i,s.level))}return Jn.catch*(1+Jn.intel*Hi(n,e.owner,"intel"))*(1+Jn.bureau*i)}const Vp=(n,e)=>{const t=Math.sin(n*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function Wp(n,e){if(!n.spies||!n.spies.length)return;const t=Math.floor(n.time-e);n.spies=n.spies.filter(i=>{const r=n.bodies[i.body];if(r.owner===i.owner||r.owner===Be)return!1;if(i.since>n.time)return!0;const s=Math.min(n.credits[r.owner],cs(r,n)*Jn.skim*e);n.credits[r.owner]-=s,n.credits[i.owner]+=s;const o=Mf(n,r);for(let a=Math.max(t,Math.floor(i.since))+1;a<=Math.floor(n.time);a++)if(Vp(i.id,a)<o)return Kt(n,{type:"spycaught",owner:i.owner,by:r.owner,at:r.id,after:n.time-i.since}),!1;return!0})}function zl(n,e){const t=zp[Hi(n,e,"sensors")],i=[];for(const u of n.bodies)u.owner===e&&i.push([Mt(n,u,n.time),t]);for(const u of n.fleets)u.owner===e&&i.push([On(u,n.time),20]);for(const u of n.bodies)u.sieges.some(f=>f.owner===e)&&i.push([Mt(n,u,n.time),20]);for(const u of n.scans||[])u.owner===e&&u.until>n.time&&i.push([Mt(n,n.bodies[u.body],n.time),14]);for(const u of n.spies||[])u.owner===e&&u.since<=n.time&&i.push([Mt(n,n.bodies[u.body],n.time),30]);const r=u=>i.some(([f,d])=>Vn(f,u)<=d);for(const u of n.bodies)u.perk==="relay"&&u.owner===e&&i.push([Mt(n,u,n.time),Hn.relay.range]);const s=new Set(n.bodies.filter(u=>u.owner===e||r(Mt(n,u,n.time))).map(u=>u.id)),o=Math.max(Hi(n,e,"intel"),ci(n,e,"ansible")||to(n,e,"telescope")||to(n,e,"array")?3:0),a=to(n,e,"telescope"),c=new Set((n.spies||[]).filter(u=>u.owner===e&&u.since<=n.time).map(u=>u.body)),l=(u,f=On(u,n.time))=>u.owner===e||a||c.has(u.from)||(u.dark&&!f.burning?i.some(([d,h])=>Vn(d,f)<=h*Ol.seen):r(f));return to(n,e,"array")?{owner:e,sees:()=>!0,seesFleet:()=>!0,bodies:new Set(n.bodies.map(u=>u.id)),intel:o,warn:!0}:{owner:e,sees:r,seesFleet:l,bodies:s,intel:o,warn:bf(n,e,"post")||ci(n,e,"ansible")}}function Ti(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Vn=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),Pu=["Aurelion","Seraphine","Caelestis","Vespera","Solenne","Astraeon","Halcyra","Lumeris","Orionde","Celestine","Empyra","Noctara","Stellarin","Zenitha","Aethelis","Borealis Major","Cygnara","Draconis","Elysion","Fulgora","Galathea","Heliara","Ixora","Lyrae","Meridia","Nebulon","Ophira","Polaria","Quasara","Radiantis","Sidera","Thessaly Prime","Uranara","Valenor","Wynthera","Xandria","Ysolde","Zephyra","Aquilon","Brightholm","Corvessa","Dawnmere","Equinoxa","Firmament","Gloriana","Hyperion Tor","Irisca","Kyrios","Luminara","Magellane","Nimbara","Ouranos Minor","Perigee","Radiance","Solstira","Tethra","Umbrielle","Vireon","Aldebara","Betelline","Capellan","Deneba","Etamin","Fomalhara","Hadara","Izarine","Kochaba","Mirzana","Nashira","Pollara","Rigelle","Sadalmel","Talitha","Vegara","Alcyone Deep","Canopea","Mimosa","Aludra","Suhail","Menkara"],Lu=["Selene Minor","Lucen","Nyxa","Astra","Eos","Hesperel","Stilbe","Aglaia","Phaenna","Asteria","Chione","Lampetia","Aether","Hemera","Orphne","Aura","Pleia","Maia Minor","Electra Minor","Merope Minor","Taygete Minor","Sterope","Celaeno Minor","Alcyon","Aphelia","Periel","Syzyn","Nadira","Zenia","Umbra","Penumbra","Crescen","Gibbous","Waxen","Occulta","Transita","Libra Minor","Albedo","Lumen","Nimbus","Corona Minor","Halo","Parhelia","Glimmer","Starling","Morrowlight","Duskmere","Emberlight","Frostlight","Glowworm","Ashlight","Moth","Lantern","Candela","Lux","Ignis","Scintilla","Stella Parva","Vela Minor","Nova Parva","Pulsa","Quark","Photon","Zodia","Ecliptica"],$p=["Ring One","Anchor","Meridian","Longreach","Holdfast","Keystone","Lantern","Tollgate","Crossways","Beacon Hill","Harbourline","Windlass","Capstan","Stillwater","Gantry Nine","Fairhaven","Moorings","Pinwheel","Carrick Yard","Halfway House","Sentinel","Spindle","Drydock Four","Tether","Outlook","Commonwealth","Linchpin","Caravel","Weigh Station","Portcullis"],Xp=["Hollow","Gravel","Anvil","Cairn","Dolmen","Flinders","Grist","Hearth","Kiln","Loam","Menhir","Nugget","Quarry","Rubble","Slag","Tor","Whetstone","Boulder","Clinker","Dregs","Ingot","Lump","Pumice","Scoria","Talus","Tuff","Cobalt","Nickel Jack","Old Iron","Spall","Brickbat","Crag","Scree","Knapp","Hardpan"],Du=["Resolute","Tenacity","Wayfarer","Undaunted","Nightingale","Clemency","Forbearance","Hardihood","Persistence","Sparrowhawk","Temerity","Valiance","Wanderlust","Adamant","Bellicose","Candour","Diligence","Endeavour","Fortitude","Gallantry","Harbinger","Impetus","Jubilee","Kittiwake","Longbow","Mistral","Nonesuch","Obstinate","Paladin","Quicksilver","Rapier","Sirocco","Tempest","Unbowed","Vigilant","Warspite","Xiphias","Yeoman","Zealous","Albatross","Brigantine","Corsair","Dauntless","Equinox","Firebrand","Grenadier","Halberd","Inflexible","Javelin","Kingfisher","Lionheart","Mariner","Nemesis","Onslaught","Peregrine","Quarterstaff","Relentless","Stalwart","Thunderer","Unicorn","Vanguard","Wolfhound","Arbalest","Bulwark","Cutlass","Defiance","Ember Tide","Falconer","Goshawk","Hotspur","Invictus","Jackdaw","Kraken","Lodestone","Monsoon","Northwind","Outrider","Pathfinder","Quarrel","Redoubt","Scimitar","Trident","Upholder","Vortex","Whirlwind","Asp","Basilisk","Cockatrice","Dragonet","Estoc","Fulmar","Glaive","Hurricane","Ironside","Jaeger","Kestrel Wing","Lance","Magpie","Narwhal","Osprey","Petrel","Raven","Shrike","Tern","Umbra","Viper","Wyvern Wing","Auk","Bittern","Curlew","Dunlin","Egret","Fieldfare","Gannet","Heron","Ibis","Jay","Kite","Lapwing","Merlin","Nuthatch","Oriole","Plover","Redshank","Skua","Tanager","Veery","Whimbrel","Stoic","Candle","Hearthguard"],as=.08,qp=[1,2.5,4.5],bn=n=>qp.filter(e=>(n||0)>=e).length,Iu=(n,e,t)=>{const i=Math.min(2,Math.max(0,n/Math.max(e,.5)));return Math.min(4.5,.15+.35*Math.min(1,t/Math.max(e,1))+.3*i**1.3)};function Kt(n,e){n.events&&(n.events.push({t:n.time,...e}),n.events.length>60&&n.events.splice(0,n.events.length-60))}function Sf(n){const e=Du[(n.nameSeed+n.nextId*7919)%Du.length];return n.fleets.some(i=>i.name===e)?`${e} ${["II","III","IV","V"][n.nextId%4]}`:e}const Do=(n,e,t,i)=>e+i>0?(n*e+t*i)/(e+i):0,Uu=n=>Se.outerPeriod*(n/Se.outerRadius)**1.5,Hn={seam:{name:"Rich seam",text:"Mines here pay double",kinds:["asteroid","moon"]},relay:{name:"Old relay",text:"See everything inside its ring",range:160},depot:{name:"Fuel depot",text:"Fleets launched from your worlds inside its ring fly 20% faster",range:120,boost:1.2},post:{name:"Listening post",text:"Warns of fleets heading for your worlds"},fortress:{name:"Fortress rock",text:"Heavy guns; +1 gun on each of your worlds inside its ring",range:100},archive:{name:"Ancient archive",text:"Research 25% faster",boost:1.25},hulk:{name:"Drydock hulk",text:"Ships built here start as veterans",vet:2.5},forge:{name:"Tidal forge",text:"Tidal heat runs the foundries: structures, upgrades and ships build twice as fast here",boost:2,giantMoon:!0}},sr={comet:{name:"Comet pass",text:"Catch it on its pass round the sun and hold it to mine it",hold:60,pay:12},derelict:{name:"Derelict warship",text:"Catch the drifting hulk and hold it to salvage veteran ships",hold:45,ships:4},signal:{name:"Lost probe signal",text:"Hold to recover a research level",hold:40},wreck:{name:"Ice-hauler wreck",text:"Hold to salvage its cargo",hold:45,credits:450},convoy:{name:"Refugee convoy",text:"Hold when it docks: the world earns +1/s for good",hold:30,bonus:1},cache:{name:"Supply cache",text:"Hold for a free structure upgrade",hold:30}},wc={comet:{inside:420,q:[70,120],guns:0},derelict:{inside:480,q:[100,160],guns:2}},ks=(n,e,t=n.time)=>!e.visitor||!!n.visit&&t>=n.visit.t0&&t<=n.visit.t0+n.visit.T,Gl=(n,e)=>e.visitor?n.visit?n.visit.t0+n.visit.T-n.time:0:1/0;function Yp(n,e){const t=n.visit;if(!t||e<t.t0||e>t.t0+t.T)return{x:4e3,y:0,z:4e3};const i=(e-t.t0-t.T/2)/t.tau;let r=i;for(let l=0;l<8;l++)r-=(r+r*r*r/3-i)/(1+r*r);const s=2*Math.atan(r),o=t.q*(1+r*r),a=o*Math.cos(s),c=o*Math.sin(s);return{x:a*Math.cos(t.w)-c*Math.sin(t.w),y:o*.04*Math.sin(s),z:a*Math.sin(t.w)+c*Math.cos(t.w)}}function Kp(n,e){const t=wc[e],i=t.q[0]+Fi(n)*(t.q[1]-t.q[0]),r=Math.max(...n.bodies.filter(l=>l.parent===null&&!l.visitor).map(l=>l.r)),s=l=>{const u=Math.sqrt(Math.max(0,l/i-1));return u+u**3/3},o=t.inside/2/s(r),a=2*o*s(r+60);n.visit={kind:e,t0:n.time,T:a,q:i,w:Fi(n)*Math.PI*2,tau:o};const c=n.bodies.find(l=>l.visitor);return c.owner=Be,c.ships=0,c.guns=t.guns,c.sieges=[],c.vet=0,c.tf=null,c.name=e==="comet"?`Comet ${String.fromCharCode(65+Math.floor(Fi(n)*26))}/${10+Math.floor(Fi(n)*90)}`:`Derelict ${Sf(n)}`,c}function jp(n){const e=n.bodies.find(o=>o.visitor),t=(o,a)=>n.bodies.filter(c=>c.owner===o&&!c.visitor).sort((c,l)=>Vn(Mt(n,c,n.time),a)-Vn(Mt(n,l,n.time),a))[0],i=Mt(n,e,n.time),r=(o,a,c,l)=>{const u=t(o,i);!u||a<1||(e.owner=o,e.ships=a,e.vet=c,e.tf=l,e.restUntil=0,br(n,e,u,a))},s=e.sieges;e.sieges=[],e.owner!==Be&&r(e.owner,e.ships,e.vet,e.tf);for(const o of s)r(o.owner,o.n,o.vet,o.name);for(const o of n.fleets){if(o.to!==e.id)continue;const a=On(o,n.time),c=t(o.owner,a);if(!c){o.n=0;continue}const l=ia(n,null,c,n.time,Yo(n,o.owner),{p:{x:a.x,y:a.y,z:a.z},v:{x:a.vx,y:a.vy,z:a.vz}});delete o.assist,Object.assign(o,l,{t0:n.time,to:c.id})}n.fleets=n.fleets.filter(o=>o.n>0||o.probe),e.owner=Be,e.ships=0,e.guns=0,Kt(n,{type:"visitor",phase:"left",name:e.name}),n.visit=null}const Zp={first:300,every:510,jitter:90,notice:60,grace:45};function Fi(n){return n.evSeed=Math.imul(n.evSeed^n.evSeed>>>15,2246822507)+1831565813>>>0,n.evSeed/4294967296}function Jp(n,e){const t=Zp;if(n.nextEvent===void 0&&(n.nextEvent=t.first+(Fi(n)-.5)*2*60),n.happenings||(n.happenings=[]),n.time>=n.nextEvent){const i=Object.keys(sr).filter(a=>!wc[a]||!n.visit),r=i[Math.floor(Fi(n)*i.length)];let s;if(wc[r]){const a=Kp(n,r);s={id:n.nextId++,kind:r,at:a.id,starts:n.time+t.notice,ends:n.visit.t0+n.visit.T-20,holder:Be,held:0}}else{const a=n.bodies.filter(l=>!l.home&&!l.visitor&&!n.happenings.some(u=>u.at===l.id)),c=a[Math.floor(Fi(n)*a.length)];s={id:n.nextId++,kind:r,at:c.id,starts:n.time+t.notice,ends:n.time+t.notice+sr[r].hold+t.grace,holder:Be,held:0}}const o=n.bodies[s.at];n.happenings.push(s),Kt(n,{type:"event",phase:"soon",kind:r,at:o.id}),n.nextEvent=n.time+t.every+(Fi(n)-.5)*2*t.jitter}for(const i of n.happenings){if(n.time<i.starts)continue;const r=n.bodies[i.at],s=sr[i.kind],o=r.sieges.length?Be:r.owner;o!==i.holder&&(i.holder=o,i.held=0),o!==Be&&(i.held+=e,i.kind==="comet"&&(n.credits[o]+=s.pay*e,Yt(n,o,"earned",s.pay*e)),i.held>=s.hold&&(Qp(n,i,r,o),i.done=!0))}n.visit&&n.time>=n.visit.t0+n.visit.T-1&&jp(n);for(const i of n.happenings)!i.done&&n.time>i.ends&&(i.done=!0,Kt(n,{type:"event",phase:"gone",kind:i.kind,at:i.at}));n.happenings=n.happenings.filter(i=>!i.done)}function Qp(n,e,t,i){const r=sr[e.kind];let s="";if(e.kind==="derelict"&&(t.vet=Do(t.vet||0,t.ships,2.5,r.ships),t.ships+=r.ships,s=`${r.ships} veteran ships`),e.kind==="wreck"&&(n.credits[i]+=r.credits,Yt(n,i,"earned",r.credits),s=`${r.credits} credits`),e.kind==="convoy"&&(t.bonus=(t.bonus||0)+r.bonus,s=`+${r.bonus}/s here`),e.kind==="comet"&&(s="the comet mined"),e.kind==="signal"){const o=Object.keys(Gn).filter(c=>cr(n,i,c)),a=o[Math.floor(Fi(n)*o.length)];a?(n.tech[i][a]+=1,a==="drives"&&Ff(n,i),s=Gn[a].levels[n.tech[i][a]-1]):(n.credits[i]+=400,s="400 credits")}if(e.kind==="cache"){const o=t.structures.find(a=>Se.structures[a.type].maxLevel&&a.level<Se.structures[a.type].maxLevel&&a.left<=0&&!a.scrap);o?(o.level+=1,s=`${Se.structures[o.type].name} to level ${o.level}`):(n.credits[i]+=300,s="300 credits")}Kt(n,{type:"event",phase:"won",kind:e.kind,at:t.id,owner:i,what:s})}const bf=(n,e,t)=>e!==Be&&n.bodies.some(i=>i.perk===t&&i.owner===e),En={classic:{name:"Classic",text:"Six worlds, a belt, a few moons"},court:{name:"Giant’s court",text:"One huge gas giant ringed with moons",court:!0},wide:{name:"Wide and cold",text:"Few worlds, far apart",gap:30,moons:.5,rocks:3},crowded:{name:"Crowded",text:"Worlds packed close: short, sharp trips",gap:8,stations:3},belt:{name:"Rich belt",text:"A thick asteroid belt worth mining",rocks:8,beltW:12},binary:{name:"Binary",text:"A second sun and its worlds swing around the system; its worlds earn +50%",companion:!0}},Nu=2.6,em=6,Ef=Object.keys(En),jo=Ef.filter(n=>!En[n].test);function Rs(n,e,t=n.time){const i=n.stars[e];if(i.e){const s=i.phase+2*Math.PI*t/i.period;let o=s;for(let l=0;l<6;l++)o-=(o-i.e*Math.sin(o)-s)/(1-i.e*Math.cos(o));const a=i.a*(Math.cos(o)-i.e),c=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(o);return{x:a*Math.cos(i.w)-c*Math.sin(i.w),y:0,z:a*Math.sin(i.w)+c*Math.cos(i.w)}}const r=i.phase+2*Math.PI*t/i.period;return{x:Math.cos(r)*i.r,y:0,z:Math.sin(r)*i.r}}function Tf(n=new Date){const e=n.toISOString().slice(0,10);let t=2166136261;for(const i of e)t=Math.imul(t^i.charCodeAt(0),16777619);return{seed:t>>>0,system:jo[(t>>>0)%jo.length],key:e}}function wf({seed:n=Date.now(),opponents:e=1,mp:t=!1,system:i="classic"}={}){const r=Ti(n),s=En[i]||En.classic,o=(A,P)=>{const I=A.filter(N=>!P.has(N)),V=I[Math.floor(r()*I.length)]??`${A[0]} ${P.size}`;return P.add(V),V},a=new Set,c=[],l=A=>(A.id=c.length,A.owner=Be,A.ships=0,A.build=0,A.queue=0,A.structures=[],A.guns=A.kind==="planet"?A.giant?5:2:1+Math.floor(r()*2),A.sieges=[],c.push(A),A),u=[],f=e+1,d=[1,2,3,4].sort(()=>r()-.5).slice(0,f);for(let A=0;A<6;A++){const P=s.court&&A===5,I=P||!d.includes(A)&&A>=3&&r()<(s.court?.3:.7),V=P?5:I?3.2+r()*1.2:1.6+r()*1.1;let N=A===0?0:d.includes(A)?1:P?5:I?1+Math.floor(r()*3):Math.floor(r()*2);s.moons&&!d.includes(A)&&(N=Math.floor(N*s.moons));const X=[];for(let ae=0;ae<N;ae++)X.push({r:V*3.4+6+ae*7+r()*.8,size:.5+r()*.5,period:300+ae*150+r()*120});u.push({giant:I,size:V,moons:X,station:!1})}const h=[1,2,3,4,5].sort(()=>r()-.5).slice(0,s.stations||2);for(const A of h)u[A].station=!0;for(const A of d)u[A].station&&(u[A].moons=[]);for(const A of u)A.reach=Math.max(A.size*1.6,A.station?A.size*1.5+1:0,...A.moons.map(P=>P.r+P.size));const g=s.gap||16;let v=0,m=null;for(const[A,P]of u.entries())m?P.r=m.r+m.reach+P.reach+g+r()*10:P.r=s.inner||56,A===4&&(v=m.r+m.reach+g,P.r=v+(s.beltW||6)+g+P.reach+r()*10),m=P;for(const A of u){const P=l({kind:"planet",name:o(Pu,a),parent:null,r:A.r,period:Uu(A.r),phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:A.size,giant:A.giant,hue:r()});for(const I of A.moons)l({kind:"moon",name:o(Lu,a),parent:P.id,r:I.r,period:I.period,phase:r()*Math.PI*2,incl:(r()-.5)*.3,size:I.size,hue:r()});A.station&&l({kind:"station",name:o($p,a),parent:P.id,r:A.size*1.45,period:200+r()*60,phase:r()*Math.PI*2,incl:.2,size:.45,hue:0})}const p=s.rocks||4;for(let A=0;A<p;A++){const P=v+r()*(s.beltW||6);l({kind:"asteroid",name:o(Xp,a),parent:null,r:P,period:Uu(P),phase:A/p*Math.PI*2+r()*.8,incl:(r()-.5)*.1,size:.5+r()*.4,hue:r()})}const y=[{r:0,period:1,phase:0,size:Nu}];if(s.companion){const P=Math.max(...c.filter(V=>V.parent===null).map(V=>V.r))+22,I=.35;y.push({a:P/(1-I),e:I,w:r()*Math.PI*2,period:2800,phase:r()*Math.PI*2,size:.5,clear:9}),[[16,1.9],[30,2.4]].forEach(([V,N],X)=>{const ae=l({kind:"planet",name:o(Pu,a),parent:null,star:1,r:V,period:140+X*160,phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:N,giant:!1,hue:r()});X===1&&l({kind:"moon",name:o(Lu,a),parent:ae.id,r:N*3.4+6,period:260,phase:r()*Math.PI*2,incl:.2,size:.7,hue:r()})})}l({kind:"visitor",name:"Visitor",parent:null,r:0,period:1,phase:0,incl:0,size:.8,hue:.55,visitor:!0}).guns=0;const T={mp:t,system:s===En[i]?i:"classic",stars:y,gravity:!0,sunClear:em*Nu*1.8,bodies:c,fleets:[],players:f,time:0,winner:null,nextId:1,events:[],nameSeed:Math.floor(r()*1e5)},S=c.filter(A=>A.kind==="planet"),x=d.map(A=>S[A]),b=r()*Math.PI*2;x.forEach((A,P)=>{A.phase=b+P*Math.PI*2/f});for(const A of c)A.kind==="station"&&A.structures.push({type:"shipyard",level:1,left:0});x.forEach((A,P)=>{A.owner=P,A.ships=Se.startShips,A.home=!0,A.structures.push({type:"shipyard",level:1,left:0},{type:"defence",level:1,left:0}),A.guns=Jo(A)});const C=new Set(x.flatMap(A=>[A.id,...c.filter(P=>P.parent===A.id).map(P=>P.id)])),_=Object.keys(Hn).sort(()=>r()-.5);let w=0;for(const A of _){if(w>=3)break;const P=Hn[A],I=c.filter(N=>N.owner===Be&&!N.perk&&!N.visitor&&!C.has(N.id)&&(!P.kinds||P.kinds.includes(N.kind))&&(!P.giantMoon||N.kind==="moon"&&c[N.parent].giant));if(!I.length)continue;const V=I[Math.floor(r()*I.length)];V.perk=A,A==="fortress"&&(V.structures.push({type:"defence",level:2,left:0}),V.guns=Jo(V)+1),A==="hulk"&&!V.structures.some(N=>N.type==="shipyard")&&V.structures.push({type:"shipyard",level:1,left:0}),w++}return T.evSeed=Math.floor(r()*2**31),T.credits=Array.from({length:T.players},()=>Se.startCredits),T.stats={totals:Array.from({length:T.players},()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,earned:0,spent:0,research:0})),series:[]},T.tech=Array.from({length:T.players},()=>({drives:0,sensors:0,intel:0,weapons:0,armour:0,industry:0,project:null})),T}function Af(n){return n.visitor?0:n.kind==="station"?2:n.kind==="asteroid"?1:n.kind==="moon"?n.size>.8?2:1:n.home?5:n.giant?4:n.size>2.2?3:2}const Hl=n=>!n.scrap&&(n.left<=0||n.next),Zo=(n,e)=>n.structures.some(t=>t.type===e&&Hl(t)),Ps=(n,e)=>n.structures.reduce((t,i)=>t+(i.type===e&&Hl(i)?i.level:0),0);function Cf(n,e){if(e.owner===Be||e.perk==="fortress")return 0;const t=Mt(n,e,n.time);return n.bodies.some(i=>i.perk==="fortress"&&i.owner===e.owner&&Vn(Mt(n,i,n.time),t)<=Hn.fortress.range)?1:0}const tm=(n,e)=>(Jo(e)+Cf(n,e)+(ci(n,e.owner,"hardened")?1:0))*(e.wonder==="citadel"?3:1),Jo=n=>Se.baseGuns+Se.gunsPerDefence*Ps(n,"defence"),Rf=(n,e)=>{if(n.owner===Be)return{worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};const t=1+.15*(e?Hi(e,n.owner,"industry"):0),i=Se.structures;return{worlds:Se.income[n.kind]*(n.star?1.5:1)+(n.home?Se.homeIncome:0),mines:Se.mineIncome*Ps(n,"mine")*t*(n.perk==="seam"?2:1),skimmers:i.skimmer.income*Ps(n,"skimmer"),exchanges:i.exchange.income*Ps(n,"exchange"),bonuses:(n.wonder==="sundiver"?8:0)+(n.bonus||0)}},cs=(n,e)=>{const t=Rf(n,e);return t.worlds+t.mines+t.skimmers+t.exchanges+t.bonuses},Vl=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?cs(i,n):0),0),Ma=n=>n.structures.filter(e=>e.type==="shipyard"&&Hl(e)).length,Qo=n=>Math.round(Se.structures[n.type].cost*Se.demolishFee);function Wl(n,e,t){return e.owner===Be?"not yours":t.scrap?"already scrapping":n.credits[e.owner]<Qo(t)?"not enough credits":null}function Pf(n,e,t){return Wl(n,e,t)?!1:(n.credits[e.owner]-=Qo(t),Yt(n,e.owner,"spent",Qo(t)),t.scrap=Se.scrapTime,Ma(e)||(e.build=0),!0)}function Lf(n,e){return e.owner===Be||e.queue<1?!1:(e.queue-=1,n.credits[e.owner]+=Math.round(Se.ship.cost*Se.cancelRefund),e.queue===0&&(e.build=0),!0)}function ea(n,e,t){const i=Se.structures[t];return e.owner===Be?"not yours":i.only&&!i.only.includes(e.kind)?`${e.kind}s can't have one`:i.where==="giant"&&!e.giant?"gas giants only":i.where==="home"&&!e.home?"homeworlds only":e.structures.length>=Af(e)?"no free slots":n.credits[e.owner]<i.cost?"not enough credits":null}function Qi(n,e,t){if(ea(n,e,t))return!1;const i=Se.structures[t];return n.credits[e.owner]-=i.cost,Yt(n,e.owner,"spent",i.cost),e.structures.push({type:t,level:1,left:i.time}),!0}const Sr=n=>Math.round(Se.structures[n.type].cost*(n.level+1)*.75),Fu=(n,e)=>Se.ship.time/(ts(n,e.owner,e)*(ci(n,e.owner,"torch")?1.25:1)*(e.wonder==="ringyard"?3:1)),Sa=n=>Se.structures[n.type].time*(1+n.level*.5);function ta(n,e,t){const i=Se.structures[t.type];return e.owner===Be?"not yours":i.maxLevel?t.left>0||t.scrap?"busy":t.level>=i.maxLevel?"at max level":n.credits[e.owner]<Sr(t)?"not enough credits":null:"can't be upgraded"}function Io(n,e,t){return ta(n,e,t)?!1:(Yt(n,e.owner,"spent",Sr(t)),n.credits[e.owner]-=Sr(t),t.next=t.level+1,t.left=Sa(t),!0)}function na(n,e){return e.owner===Be?"not yours":Zo(e,"shipyard")?n.credits[e.owner]<Se.ship.cost?"not enough credits":null:"needs a shipyard"}function Ac(n,e){return na(n,e)?!1:(n.credits[e.owner]-=Se.ship.cost,Yt(n,e.owner,"spent",Se.ship.cost),e.queue+=1,!0)}function Mt(n,e,t){if(e.visitor)return Yp(n,t);const i=e.phase+2*Math.PI*t/e.period,r={x:Math.cos(i)*e.r,y:Math.sin(i)*e.r*e.incl,z:Math.sin(i)*e.r};if(e.star){const s=Rs(n,e.star,t);r.x+=s.x,r.z+=s.z}if(e.parent!==null){const s=Mt(n,n.bodies[e.parent],t);r.x+=s.x,r.y+=s.y,r.z+=s.z}return r}function Ou(n,e,t){const r=Mt(n,e,t-.5),s=Mt(n,e,t+.5);return{x:(s.x-r.x)/(2*.5),y:(s.y-r.y)/(2*.5),z:(s.z-r.z)/(2*.5)}}const nm=14,im=n=>n.size*1.8+.4,Df=(n,e)=>({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}),hn=n=>Math.hypot(n.x,n.y,n.z);function ku(n,e,t,i,r,s=r/2){const o={x:t.x-n.x-e.x*r,y:t.y-n.y-e.y*r,z:t.z-n.z-e.z*r},a=Df(i,e),c=s*s/2,l=1/(s*(r-s)),u={x:(o.x-c*a.x/s)*l,y:(o.y-c*a.y/s)*l,z:(o.z-c*a.z/s)*l},f={x:a.x/s-u.x,y:a.y/s-u.y,z:a.z/s-u.z};return{a1:u,a2:f,need:Math.max(hn(u),hn(f))}}function $l(n,e){const t=Xl(n,e);if(!n.gs)return t;const i=Uf(n.gs,Math.max(0,Math.min(1,e/n.T)));return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2],vx:t.vx+i[3],vy:t.vy+i[4],vz:t.vz+i[5]}}function Xl(n,e){const t=n.bf?n.bf*n.T:n.T/2,i=Math.min(e,t);let r=n.p0.x+n.v0.x*i+.5*n.a1.x*i*i,s=n.p0.y+n.v0.y*i+.5*n.a1.y*i*i,o=n.p0.z+n.v0.z*i+.5*n.a1.z*i*i,a=n.v0.x+n.a1.x*i,c=n.v0.y+n.a1.y*i,l=n.v0.z+n.a1.z*i;const u=Math.max(0,Math.min(e,n.T-t)-t);if(r+=a*u,s+=c*u,o+=l*u,e>n.T-t){const f=e-(n.T-t);r+=a*f+.5*n.a2.x*f*f,s+=c*f+.5*n.a2.y*f*f,o+=l*f+.5*n.a2.z*f*f,a+=n.a2.x*f,c+=n.a2.y*f,l+=n.a2.z*f}return{x:r,y:s,z:o,vx:a,vy:c,vz:l}}function Na(n,e,t){for(let i=1;i<128;i++){const r=i/128*n.T,s=$l(n,r);if(hn(s)<(e.sunClear||nm))return!1;for(let o=1;o<(e.stars||[]).length;o++)if(Vn(s,Rs(e,o,t+r))<e.stars[o].clear)return!1}return!0}const If={boost:1.25,range:16};function Bu(n,e,t,i,r){const s=new Set([t.id,i.id,t.parent,i.parent]);let o=null;for(const a of n.bodies)if(!(!a.giant||s.has(a.id)))for(let c=1;c<24;c++){const l=c/24*e.T,u=Vn($l(e,l),Mt(n,a,r+l));u<a.size*If.range&&(!o||u<o.d)&&(o={g:a,d:u})}return o&&o.g}function rm(n,e,t=n.time){if(e.owner===Be)return 1;const i=Mt(n,e,t);return n.bodies.some(r=>r.perk==="depot"&&r.owner===e.owner&&Vn(Mt(n,r,t),i)<=Hn.depot.range)?Hn.depot.boost:1}function Ks(n,e,t,i=n.time,r=1,s=!1,o=.5){r*=rm(n,e,i)*(e.wonder==="massdriver"?1.5:1);const a=ia(n,e,t,i,Yo(n,e.owner)*r,null,s,o),c=Bu(n,a,e,t,i);if(!c)return a;const l=ia(n,e,t,i,Yo(n,e.owner)*r*If.boost,null,s,o);return l.T<a.T&&Bu(n,l,e,t,i)===c?{...l,assist:c.id}:a}const sm={share:1},om=4*Math.PI*Math.PI*Se.outerRadius**3/Se.outerPeriod**2,yi=48;function zu(n,e){const t=n.T/yi,i=[[0,0,0,0,0,0]];let r=0,s=0,o=0,a=0,c=0,l=0;for(let u=0;u<yi;u++){const f=(u+.5)*t,d=Xl(n,f),h=e?Uf(e,(u+.5)/yi):[r+a*t*.5,s+c*t*.5,o+l*t*.5],g=d.x+h[0],v=d.y+h[1],m=d.z+h[2],p=g*g+v*v+m*m,y=-om*sm.share/(p*Math.sqrt(p));a+=y*g*t,c+=y*v*t,l+=y*m*t,r+=a*t,s+=c*t,o+=l*t,i.push([r,s,o,a,c,l])}return i}function Uf(n,e){const t=Math.min(yi-1,Math.floor(e*yi)),i=e*yi-t,r=n[t],s=n[t+1];return r.map((o,a)=>o+(s[a]-o)*i)}function ia(n,e,t,i,r,s=null,o=!1,a=.5){const c=s?s.p:Mt(n,e,i),l=s?s.v:Ou(n,e,i),u=g=>{const v=Mt(n,t,i+g),m=Df(c,v),p=hn(m)||1,y=im(t),T={x:v.x+m.x/p*y,y:v.y+m.y/p*y,z:v.z+m.z/p*y},S=Ou(n,t,i+g);return{p0:c,v0:l,p1:T,v1:S,T:g,...a<.5?{bf:a}:{},...ku(c,l,T,S,g,g*a)}},f=g=>{let v=u(g),m=null;for(let S=0;S<12;S++){m=zu(v,m);const x=m[yi],b={x:v.p1.x-x[0],y:v.p1.y-x[1],z:v.p1.z-x[2]},C={x:v.v1.x-x[3],y:v.v1.y-x[4],z:v.v1.z-x[5]},_=ku(c,l,b,C,g,g*a),w=S<2?1:.7,A=(V,N)=>({x:V.x+(N.x-V.x)*w,y:V.y+(N.y-V.y)*w,z:V.z+(N.z-V.z)*w}),P=A(v.a1,_.a1),I=A(v.a2,_.a2);v={...v,a1:P,a2:I,need:Math.max(hn(P),hn(I))}}const p=zu(v,m),y=Xl(v,g),T=Math.hypot(y.x+p[yi][0]-v.p1.x,y.y+p[yi][1]-v.p1.y,y.z+p[yi][2]-v.p1.z);return v.gs=p,T>.5&&(v.need=1/0),v},d=u;let h=1;for(let g=2;g<2e4;g+=2){let v=d(g);if(v.need>r){h=g;continue}let m=h,p=g;for(let y=0;y<30;y++){const T=(m+p)/2;d(T).need>r?m=T:p=T}if(v=d(p),n.gravity&&!o&&Na(v,n,i)){for(let y=p;y<p*2.5+40;y*=1.06){const T=f(y);if(T.need<=r&&Na(T,n,i))return T}return v}if(Na(v,n,i))return v;h=g}return n.gravity&&!o?f(2e4):d(2e4)}const ql=(n,e)=>e.restUntil>n.time?Math.min(e.resting||0,e.ships):0,fi=(n,e)=>e.ships-ql(n,e);function Nf(n,e,t){e.resting=ql(n,e)+t,e.restUntil=n.time+Se.cooldown}function br(n,e,t,i,r=!1){if(i=Math.min(Math.floor(i),fi(n,e)),i<1||e===t||n.winner!==null)return null;const s=Ks(n,e,t,n.time,1,!1,r?Ol.burn:.5);if(s.T>Gl(n,t)-5||!ks(n,t))return null;e.ships-=i;const o={id:n.nextId++,owner:e.owner,n:i,from:e.id,to:t.id,...s,t0:n.time,vet:e.vet||0};return r&&(o.dark=!0),e.tf&&i*2>=i+e.ships?(o.name=e.tf,e.tf=null):o.name=Sf(n),e.ships||(e.tf=null),n.fleets.push(o),Kt(n,{type:"launch",owner:o.owner,fleet:o.id,name:o.name,n:i,from:e.id,to:t.id}),o}function Ff(n,e){for(const t of n.fleets){if(t.owner!==e)continue;const i=t.T-(n.time-t.t0);if(i<10)continue;const r=On(t,n.time),s=Yo(n,e)*(t.probe?Se.probe.speed:1),o=ia(n,null,n.bodies[t.to],n.time,s,{p:{x:r.x,y:r.y,z:r.z},v:{x:r.vx,y:r.vy,z:r.vz}},!1,t.bf||.5);o.T>=i||(delete t.assist,Object.assign(t,o,{t0:n.time}))}}function Yl(n,e,t){return e.owner===Be?"not yours":!t||t===e?"pick a target":Zo(e,"shipyard")?n.credits[e.owner]<Se.probe.cost?"not enough credits":null:"needs a shipyard"}function Cc(n,e,t){if(Yl(n,e,t)||n.winner!==null||!ks(n,t))return null;n.credits[e.owner]-=Se.probe.cost,Yt(n,e.owner,"spent",Se.probe.cost);const i={id:n.nextId++,owner:e.owner,n:0,probe:!0,from:e.id,to:t.id,...Ks(n,e,t,n.time,Se.probe.speed),t0:n.time,vet:0,name:"Probe"};return n.fleets.push(i),i}function On(n,e){const t=Math.min(n.T,Math.max(0,e-n.t0)),i=$l(n,t),r=n.T/2,s=r-Se.flipTime/2,o=Math.abs(t-r)<Se.flipTime/2,a=hn(n.a1)>1e-9?{x:n.a1.x/hn(n.a1),y:n.a1.y/hn(n.a1),z:n.a1.z/hn(n.a1)}:{x:0,y:0,z:1},c=hn(n.a2)>1e-9?{x:n.a2.x/hn(n.a2),y:n.a2.y/hn(n.a2),z:n.a2.z/hn(n.a2)}:a;let l=t<r?a:c;if(o){const u=(1-Math.cos((t-s)/Se.flipTime*Math.PI))/2;if(l={x:a.x+(c.x-a.x)*u,y:a.y+(c.y-a.y)*u,z:a.z+(c.z-a.z)*u},hn(l)<.3){const h={x:-a.z,y:0,z:a.x},g=Math.sin(u*Math.PI)*.8;l={x:l.x+h.x*g,y:l.y+h.y*g,z:l.z+h.z*g}}const d=hn(l)||1;l={x:l.x/d,y:l.y/d,z:l.z/d}}return{x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz,nx:l.x,ny:l.y,nz:l.z,progress:t/n.T,burning:!o&&t<n.T&&(!n.bf||t<n.bf*n.T||t>n.T-n.bf*n.T),flipping:o,phase:t<r?1:2}}function ra(n,e){if(e.owner===Be||e.visitor)return[];const t=e.parent===null?e:n.bodies[e.parent],i=[t,...n.bodies.filter(s=>s.parent===t.id)],r=[];for(const s of i){if(s===e||s.owner!==e.owner||s.guns<=0)continue;const o=s.wonder==="citadel"?1:s===t?Se.coverShare:Se.moonCover;r.push({from:s,n:s.guns*o})}return r}const fs=(n,e)=>ra(n,e).reduce((t,i)=>t+i.n,0);function am(n,e,t){let i=!1;const r=e.sieges.reduce((a,c)=>a+c.n,0),s=(e.ships*(1+as*bn(e.vet))+e.guns+fs(n,e))*kl(n,e.owner);let o=0;for(const a of e.sieges){const c=r>0?a.n/r:0;a.dmg=(a.dmg||0)+Se.fire*s*c*Ko(n,a.owner)*t,o+=a.n*(1+as*bn(a.vet))*vf(n,a.owner)}for(e.dmg=(e.dmg||0)+Se.fire*o*Ko(n,e.owner)*t,e.fighting=!0;e.dmg>=1&&e.ships+e.guns>0;){e.dmg-=1,e.ships>0?(e.ships-=1,Yt(n,e.owner,"lost"),Yt(n,e.sieges.slice().sort((c,l)=>l.n-c.n)[0].owner,"killed")):e.guns=Math.max(0,e.guns-1);const a=e.sieges.slice().sort((c,l)=>l.n-c.n)[0];a.kills=(a.kills||0)+1,e.lostDef=(e.lostDef||0)+1,e.totDef=(e.totDef||0)+1}for(const a of e.sieges)for(;a.dmg>=1&&a.n>0;)a.dmg-=1,a.n-=1,e.lostAtk=(e.lostAtk||0)+1,e.totAtk=(e.totAtk||0)+1,Yt(n,a.owner,"lost"),Yt(n,e.owner,"killed"),e.kills=(e.kills||0)+1;for(const a of e.sieges)a.n<=0&&Kt(n,{type:"wiped",owner:a.owner,name:a.name,at:e.id,vs:e.owner});if(e.ships||(e.tf=null),e.sieges=e.sieges.filter(a=>a.n>0),e.ships+e.guns<=0&&e.sieges.length){const a=e.sieges.sort((c,l)=>l.n-c.n)[0];Yt(n,e.owner,"worldsLost"),Yt(n,a.owner,"captured"),Kt(n,{type:"captured",owner:a.owner,from:e.owner,at:e.id,name:a.name}),e.owner=a.owner,e.ships=a.n,e.resting=0,Nf(n,e,a.n),e.vet=Math.min(4.5,(a.vet||0)+Iu(a.foe0||1,a.n0||a.n,a.kills||0)),e.tf=a.name,bn(e.vet)>bn(a.vet)&&Kt(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),e.guns=0,e.dmg=0,e.build=0,e.slips=[],e.queue=0,e.structures=e.structures.filter(c=>c.left<=0||c.next);for(const c of e.structures)c.next&&(delete c.next,c.left=0),delete c.scrap;e.sieges=e.sieges.filter(c=>c!==a),e.captured=!0,i=!0}if(!e.sieges.length){if(e.fighting&&!i&&e.ships>0){const a=e.vet;e.vet=Math.min(4.5,(e.vet||0)+Iu(e.foe0||1,e.own0||1,e.kills||0)),bn(e.vet)>bn(a)&&Kt(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),Kt(n,{type:"held",owner:e.owner,at:e.id})}e.dmg=0,e.fighting=!1,e.foe0=e.own0=e.kills=0}}function Kl(n,e){if(n.winner!==null)return;n.stats&&(!n.stats.series.length||n.time-n.stats.series.at(-1).t>=10)&&Ru(n),n.time+=e;for(const i of n.bodies){if(i.owner===Be)continue;n.credits[i.owner]+=cs(i,n)*e,Yt(n,i.owner,"earned",cs(i,n)*e);const r=ts(n,i.owner,i);if(i.sieges.length)continue;for(const l of i.structures){if(l.scrap){l.scrap=Math.max(0,l.scrap-e),l.scrap||(l.gone=!0);continue}l.left<=0||(l.left=Math.max(0,l.left-e*r),l.left===0&&l.next&&(l.level=l.next,delete l.next))}if(i.structures.some(l=>l.gone)){const l=i.structures.find(u=>u.gone);i.structures=i.structures.filter(u=>!u.gone),Kt(n,{type:"scrapped",owner:i.owner,at:i.id,what:l.type})}const s=Ma(i);for(i.slips||(i.slips=[]);i.slips.length<Math.min(s,i.queue);)i.slips.push(0);i.slips.length=Math.min(i.slips.length,s,i.queue);const o=(ci(n,i.owner,"torch")?1.25:1)*(i.wonder==="ringyard"?3:1);i.slips=i.slips.map(l=>l+e*r*o/Se.ship.time);for(const l of i.slips)l>=1&&(i.vet=Do(i.vet||0,i.ships,i.perk==="hulk"?Hn.hulk.vet:0,1),i.queue-=1,i.ships+=1,Yt(n,i.owner,"built"));i.slips=i.slips.filter(l=>l<1),i.build=i.slips.length?Math.max(...i.slips):0;const a=tm(n,i),c=Se.gunRegen*(ci(n,i.owner,"hardened")?2:1);i.guns<a&&(i.guns=Math.min(a,i.guns+c*e))}for(const[i,r]of(n.tech||[]).entries())r.project&&(r.project.left-=e*rr(n,i),r.project.left<=0&&(r[r.project.key]=(r[r.project.key]||0)+1,r.project.key==="drives"&&Ff(n,i),Kt(n,{type:"research",owner:i,key:r.project.key,level:r[r.project.key]}),r.project=null,Yt(n,i,"research")));n.scans&&(n.scans=n.scans.filter(i=>i.until>n.time)),Wp(n,e),n.fleets=n.fleets.filter(i=>{if(n.time-i.t0<i.T)return!0;const r=n.bodies[i.to];if(i.probe)return(n.scans||(n.scans=[])).push({owner:i.owner,body:r.id,until:n.time+Se.probe.scan}),Kt(n,{type:"probed",owner:i.owner,at:r.id}),!1;if(r.owner===i.owner)r.vet=Do(r.vet||0,r.ships,i.vet||0,i.n),(!r.tf||i.n>=r.ships)&&(r.tf=i.name),r.ships+=i.n,Nf(n,r,i.n),Kt(n,{type:"arrived",owner:i.owner,name:i.name,n:i.n,at:r.id});else{if(ci(n,r.owner,"pdnet")&&(i.n-=Math.round(i.n*.15)),i.n<=0)return Kt(n,{type:"wiped",owner:i.owner,name:i.name,at:r.id,vs:r.owner}),!1;if(ci(n,i.owner,"kinetic")){let a=Math.round(i.n*.2);for(;a-- >0&&r.ships+r.guns>0;)r.ships>0?r.ships-=1:r.guns=Math.max(0,r.guns-1)}const s=r.ships*(1+as*bn(r.vet))+r.guns+fs(n,r);r.own0=Math.max(r.own0||0,s),r.foe0=(r.foe0||0)+i.n;const o=r.sieges.find(a=>a.owner===i.owner);o?(o.vet=Do(o.vet||0,o.n,i.vet||0,i.n),o.n+=i.n,o.n0+=i.n):r.sieges.push({owner:i.owner,n:i.n,vet:i.vet||0,name:i.name,n0:i.n,foe0:s}),Kt(n,{type:"engaged",owner:i.owner,name:i.name,n:i.n,at:r.id,vs:r.owner})}return!1});for(const i of n.bodies)i.sieges.length&&am(n,i,e);Gp(n,e),n.evSeed!==void 0&&Jp(n,e);const t=new Set;for(const i of n.bodies){i.owner!==Be&&t.add(i.owner);for(const r of i.sieges)t.add(r.owner)}for(const i of n.fleets)i.probe||t.add(i.owner);n.mp?t.size<=1&&(n.winner=[...t][0]??Be):t.has(Cu)?t.size===1&&(n.winner=Cu):n.winner=[...t][0]??Be,n.winner!==null&&n.stats&&Ru(n)}const cm={cadet:{think:14,acts:1,margin:.85,extra:0,seenExtra:0,skill:.1,eco:.5,calm:480},easy:{think:8,acts:1,margin:1,extra:1,seenExtra:0,skill:.35,eco:.7,calm:240},normal:{think:4,acts:2,margin:1.2,extra:1,seenExtra:1,skill:.7},hard:{think:2,acts:3,margin:1.3,extra:1,seenExtra:1,skill:.95,eco:1.4,smart:!0},brutal:{think:.8,acts:5,margin:1.4,extra:2,seenExtra:1,skill:1,eco:2.1,smart:!0}};function Rc(n,e,t){return{owner:n,d:cm[e],rand:t,clock:2+t()*3,plan:null}}function Gu(n,e,t,i=0,r=!0,s=null){const o=s||{ships:t.ships,vet:t.vet,guns:t.guns,cover:fs(n,t)},a=vf(n,e)*(1+as*bn(i)),c=Ko(n,e),l=t.owner,u=l===Be?1:kl(n,l),f=l===Be?1:Ko(n,l),d=1+as*bn(o.vet),h=m=>{let p=m,y=0,T=o.ships,S=o.guns,x=0;for(let b=0;b<1200;b++){for(y+=Se.fire*(T*d+S+o.cover)*u*c*.5,x+=Se.fire*p*a*f*.5;x>=1&&T+S>0;)x-=1,T>0?T-=1:S=Math.max(0,S-1);for(;y>=1&&p>0;)y-=1,p-=1;if(p<=0)return!1;if(T+S<=0)return!0}return!1};let g=1,v=1;for(;!h(v);)if(v*=2,v>256)return 1/0;for(;g<v;){const m=g+v>>1;h(m)?v=m:g=m+1}return v}function Of(n,e,t){if(e.d.eco&&n.winner===null&&(n.credits[e.owner]=Math.max(0,n.credits[e.owner]+Vl(n,e.owner)*(e.d.eco-1)*t)),e.clock-=t,e.clock>0||n.winner!==null)return;e.clock=e.d.think*(.8+e.rand()*.4);const i=zl(n,e.owner),r=h=>{if(!i.seesFleet(h))return!1;const g=n.bodies[h.to];return g.owner===e.owner&&Vn(On(h,n.time),Mt(n,g,n.time))<60},s=h=>h.owner===e.owner||i.intel>=2&&i.seesFleet(h)||r(h),o=h=>h.owner===e.owner||i.intel>=1?h.n:5,a=(h,g)=>n.fleets.filter(v=>!v.probe&&v.to===h.id&&v.owner===e.owner===g&&s(v)).reduce((v,m)=>v+o(m),0),c=()=>e.rand()<e.d.skill,l=h=>h.ships*(1+as*bn(h.vet)),u=new Map,d={vis:i,coming:a,route:(h,g)=>{const v=h.id*1e3+g.id;return u.has(v)||u.set(v,Ks(n,h,g,n.time,1,!0).T),u.get(v)}};um(n,e,n.bodies.filter(h=>h.owner===e.owner),i,s,o,l,c);for(let h=0;h<e.d.acts&&lm(n,e,d);h++);for(let h=0;h<e.d.acts;h++){const g=dm(n,e,n.bodies.filter(v=>v.owner===e.owner),a,c);if(!g||g==="save")break}}function Hu(n,e,t,i){return t.bodies.has(i.id)?{ships:i.ships,vet:i.vet,guns:i.guns,cover:fs(n,i)}:i.owner===Be?{ships:0,vet:0,guns:i.perk==="fortress"?6:i.giant?5:(i.kind==="planet",2),cover:0}:{ships:6,vet:1,guns:3,cover:1}}function lm(n,e,{vis:t,coming:i,route:r}){const s=n.bodies.filter(y=>y.owner===e.owner),o=e.d.smart,a=e.d.calm&&n.time<e.d.calm,c=y=>y.home&&n.time>900?2:1,l=y=>fi(n,y)-Math.ceil(i(y,!1)*1.2)-c(y),u=y=>(n.scans||[]).some(T=>T.owner===e.owner&&T.body===y.id),f=y=>n.fleets.some(T=>T.probe&&T.owner===e.owner&&T.to===y.id),d=y=>n.fleets.filter(T=>!T.probe&&T.owner===e.owner&&T.to===y.id).reduce((T,S)=>T+S.n,0),h=(y,T)=>Math.ceil(y*e.d.margin)+(t.bodies.has(T.id)?e.d.seenExtra:e.d.extra);if(o&&!n.fleets.some(y=>y.probe&&y.owner===e.owner)&&n.credits[e.owner]>Se.probe.cost+200){const y=s.filter(x=>Zo(x,"shipyard")),T=x=>Math.min(...y.map(b=>Vn(Mt(n,b,n.time),Mt(n,x,n.time)))),S=n.bodies.filter(x=>x.owner!==e.owner&&x.owner!==Be&&!x.visitor&&!t.bodies.has(x.id)&&!u(x)).sort((x,b)=>T(x)-T(b))[0];if(S&&y.length&&T(S)<160&&e.rand()<.5){const x=b=>Vn(Mt(n,b,n.time),Mt(n,S,n.time));if(Cc(n,y.sort((b,C)=>x(b)-x(C))[0],S))return!0}}let g=null;for(const y of s){const T=l(y);if(!(T<1))for(const S of n.bodies){if(S.owner===e.owner||!ks(n,S)||a&&S.owner!==Be||d(S)>0)continue;const x=r(y,S);if(x>Gl(n,S)-10)continue;const b=Hu(n,e,t,S);S.owner!==Be&&Zo(S,"shipyard")&&(b.ships+=Math.min(S.queue||1,x/Se.ship.time)),S.owner!==Be&&(b.guns=Math.max(b.guns,Math.min(Jo(S)+Cf(n,S),b.guns+Se.gunRegen*x))),b.ships+=i(S,!1);const C=h(Gu(n,e.owner,S,y.vet,!0,b),S);if(C<1||C>T)continue;let _=S.kind==="planet"?S.giant?4:3:S.kind==="station"?2:1.5;o&&S.owner!==Be&&n.time>900&&(_*=S.home?1.6:1.25),S.perk&&(_*=1.5),(n.happenings||[]).some(A=>A.at===S.id)&&(_*=2);const w=_/(C+x/25);(!g||w>g.score)&&(g={s:y,t:S,need:C,score:w})}}if(g&&o&&g.t.owner!==Be&&!t.bodies.has(g.t.id)&&!u(g.t))if(f(g.t))g=null;else{const y=s.find(T=>!Yl(n,T,g.t));if(y&&Cc(n,y,g.t))return!0}if(g)return br(n,g.s,g.t,g.need),!0;if(e.plan){const y=n.bodies[e.plan.target],T=n.bodies[e.plan.stage];if(y.owner===e.owner||T.owner!==e.owner||n.time>e.plan.until)e.plan=null;else{if(fi(n,T)-c(T)>=e.plan.need)return br(n,T,y,fi(n,T)-c(T)),e.plan=null,!0;{const S=s.filter(x=>x!==T&&l(x)>=1&&!n.fleets.some(b=>b.from===x.id&&b.to===T.id)).sort((x,b)=>r(x,T)-r(b,T))[0];return S?(br(n,S,T,l(S)),!0):!1}}}const v=s.reduce((y,T)=>y+Math.max(0,l(T)),0);let m=null,p=1/0;for(const y of n.bodies){if(y.owner===e.owner||y.visitor||a&&y.owner!==Be)continue;const T=h(Gu(n,e.owner,y,0,!0,Hu(n,e,t,y)),y)+1;T<=v&&T<p&&(m=y,p=T)}if(m&&s.length>1){const y=s.slice().sort((T,S)=>r(T,m)-r(S,m))[0];e.plan={target:m.id,stage:y.id,need:p,until:n.time+600}}return!1}function um(n,e,t,i,r,s,o,a){for(const c of t){const l=n.fleets.filter(m=>m.to===c.id&&m.owner!==e.owner&&r(m));if(!l.length)continue;const u=Math.min(...l.map(m=>m.t0+m.T-n.time)),f=l.reduce((m,p)=>m+s(p),0)*1.2,d=o(c)+c.guns+fs(n,c);if(d>=f)continue;const h=Math.ceil(f-d)+1,g=t.filter(m=>m!==c&&fi(n,m)>=3&&!n.fleets.some(p=>p.to===m.id&&p.owner!==e.owner&&r(p))).map(m=>({s:m,T:Ks(n,m,c,n.time,1,!0).T})).filter(m=>m.T<u-5).sort((m,p)=>m.T-p.T),v=g.find(m=>fi(n,m.s)-1>=h)||(e.d.smart?null:g[0]);if(v&&a())return br(n,v.s,c,Math.min(fi(n,v.s)-1,h)),!0;if(!v&&c.queue>0&&d*2<f&&a()){for(;c.queue>0;)Lf(n,c);return!0}}return!1}function dm(n,e,t,i,r){const s=e.d.smart,o=x=>i(x,!1)>0||x.sieges.length,a=(x,b)=>!ea(n,x,b),c=t.find(x=>o(x)&&a(x,"defence")&&x.structures.filter(b=>b.type==="defence").length<2);if(c)return Qi(n,c,"defence");const l=t.find(x=>(x.kind==="asteroid"||x.kind==="moon")&&!x.structures.some(b=>b.type==="mine")&&(a(x,"mine")||ea(n,x,"mine")==="not enough credits"));if(l){if(a(l,"mine"))return Qi(n,l,"mine");if(!o(l)&&r())return"save"}const u=t.filter(x=>!na(n,x)&&x.queue<1)[0];if(u)return Ac(n,u);for(const x of["exchange","skimmer"]){const b=t.find(C=>a(C,x)&&!o(C)&&!C.structures.some(_=>_.type===x));if(b&&(s||r()))return Qi(n,b,x)}const f=n.credits[e.owner],d=t.flatMap(x=>x.structures.filter(b=>b.type==="mine"&&ta(n,x,b)==="not enough credits").map(b=>[x,b]))[0];if(d&&!o(d[0])&&t.reduce((x,b)=>x+b.ships,0)>=6&&r()&&f<Sr(d[1]))return"save";for(const x of t)for(const b of x.structures)if(!ta(n,x,b)&&((b.type==="mine"||b.type==="skimmer"||b.type==="exchange")&&f>=Sr(b)&&r()||b.type==="lab"&&n.tech[e.owner].project&&f>Sr(b)+300&&r()||b.type==="defence"&&o(x)&&r()))return Io(n,x,b);if(s){const x=t.find(b=>b.project);if(x&&f>900&&!o(x))return _f(n,x,"cash");if(!x&&f>2500&&t.length>=4)for(const b of["sundiver","ringyard","citadel","massdriver","array","telescope"]){const C=t.filter(_=>!o(_)&&!ya(n,_,b)).sort((_,w)=>(w.home?1:0)-(_.home?1:0))[0];if(C)return gf(n,C,b)}}if(s&&f>1100&&!(n.spies||[]).some(x=>x.owner===e.owner)){const x=n.bodies.filter(b=>!Bl(n,e.owner,b)).sort((b,C)=>(C.project?2:C.home?1:0)-(b.project?2:b.home?1:0))[0];if(x&&r())return!!yf(n,e.owner,x)}const h=t.find(x=>x.home);if(s&&h&&t.length>=6&&f>1e3&&a(h,"bureau")&&!h.structures.some(x=>x.type==="bureau"))return Qi(n,h,"bureau");if(t.filter(x=>x.structures.some(b=>b.type==="shipyard")).length<1+Math.floor(t.length/3)&&r()){const x=t.filter(b=>b.kind==="planet"&&a(b,"shipyard")).sort((b,C)=>C.size-b.size)[0];if(x)return Qi(n,x,"shipyard")}const v=s?["industry","sensors","intel","drives","weapons","armour","industry","drives","weapons","armour","sensors","intel","drives","sensors","intel"]:["sensors","drives","intel","industry","weapons","armour","drives","sensors","weapons","armour","industry","intel","drives","sensors","intel"],m=["torch","hardened","targeting","kinetic","pdnet","ansible"],p=[...v,...m].find(x=>cr(n,e.owner,x)&&Os(n,e.owner,x)!=="locked");if(p&&!Os(n,e.owner,p)&&f>cr(n,e.owner,p).cost+Se.ship.cost*2&&t.length>=3)return xf(n,e.owner,p);const y=t.reduce((x,b)=>x+b.structures.filter(C=>C.type==="lab").length,0);if(y<2&&f>700+y*500&&t.length>2+y*2&&r()){const x=t.find(_=>a(_,"lab")&&_.kind!=="asteroid");if(x)return Qi(n,x,"lab");const b=t.find(_=>_.kind!=="asteroid"&&!o(_)&&_.structures.filter(w=>w.type==="defence").length>1),C=b&&b.structures.find(_=>_.type==="defence"&&_.level===1&&!Wl(n,b,_));if(C&&f>900)return Pf(n,b,C)}const T=t.filter(x=>!na(n,x)&&x.queue<3).sort((x,b)=>x.queue-b.queue)[0];if(T&&(s||e.rand()<.8))return Ac(n,T);const S=t.find(x=>x.home)||t[0];return S&&n.credits[e.owner]>600&&a(S,"defence")&&S.structures.filter(x=>x.type==="defence").length<2?Qi(n,S,"defence"):!1}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="186",fm=0,Vu=1,hm=2,Uo=1,pm=2,ws=3,Tr=0,Tn=1,jn=2,Bi=0,Ls=1,on=2,Wu=3,$u=4,mm=5,es=100,gm=101,_m=102,vm=103,xm=104,ym=200,Mm=201,Sm=202,bm=203,kf=204,Bf=205,Em=206,Tm=207,wm=208,Am=209,Cm=210,Rm=211,Pm=212,Lm=213,Dm=214,Pc=0,Lc=1,Dc=2,Bs=3,Ic=4,Uc=5,Nc=6,Fc=7,zf=0,Im=1,Um=2,wi=0,Gf=1,Hf=2,Vf=3,Wf=4,$f=5,Xf=6,qf=7,Yf=300,wr=301,ls=302,Fa=303,Oa=304,ba=306,sa=1e3,Oi=1001,Oc=1002,an=1003,Nm=1004,no=1005,gn=1006,ka=1007,yr=1008,zn=1009,Kf=1010,jf=1011,zs=1012,Zl=1013,Ci=1014,Mi=1015,Ri=1016,Jl=1017,Ql=1018,Gs=1020,Zf=35902,Jf=35899,Qf=1021,eh=1022,li=1023,Vi=1026,Mr=1027,th=1028,eu=1029,Ar=1030,tu=1031,nu=1033,No=33776,Fo=33777,Oo=33778,ko=33779,kc=35840,Bc=35841,zc=35842,Gc=35843,Hc=36196,Vc=37492,Wc=37496,$c=37488,Xc=37489,oa=37490,qc=37491,Yc=37808,Kc=37809,jc=37810,Zc=37811,Jc=37812,Qc=37813,el=37814,tl=37815,nl=37816,il=37817,rl=37818,sl=37819,ol=37820,al=37821,cl=36492,ll=36494,ul=36495,dl=36283,fl=36284,aa=36285,hl=36286,Fm=3200,pl=0,Om=1,tr="",Fn="srgb",ca="srgb-linear",la="linear",Tt="srgb",Ba=7680,km=519,Bm=512,zm=513,Gm=514,iu=515,Hm=516,Vm=517,ru=518,Wm=519,nh=35044,Xu="300 es",Si=2e3,Hs=2001;function $m(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xm(){const n=ua("canvas");return n.style.display="block",n}const qu={};function da(...n){const e="THREE."+n.shift();console.log(e,...n)}function ih(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=ih(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function gt(...n){n=ih(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function is(...n){const e=n.join(" ");e in qu||(qu[e]=!0,We(...n))}function qm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ym={[Pc]:Lc,[Dc]:Nc,[Ic]:Fc,[Bs]:Uc,[Lc]:Pc,[Nc]:Dc,[Fc]:Ic,[Uc]:Bs};class Pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yu=1234567;const Ds=Math.PI/180,Vs=180/Math.PI;function zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function su(n,e){return(n%e+e)%e}function Km(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function jm(n,e,t){return n!==e?(t-n)/(e-n):0}function Is(n,e,t){return(1-t)*n+t*e}function Zm(n,e,t,i){return Is(n,e,1-Math.exp(-t*i))}function Jm(n,e=1){return e-Math.abs(su(n,e*2)-e)}function Qm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function e0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function t0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function n0(n,e){return n+Math.random()*(e-n)}function i0(n){return n*(.5-Math.random())}function r0(n){n!==void 0&&(Yu=n);let e=Yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(n){return n*Ds}function o0(n){return n*Vs}function a0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function c0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function l0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function u0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*f,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Dn={DEG2RAD:Ds,RAD2DEG:Vs,generateUUID:zi,clamp:at,euclideanModulo:su,mapLinear:Km,inverseLerp:jm,lerp:Is,damp:Zm,pingpong:Jm,smoothstep:Qm,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:r0,degToRad:s0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:c0,floorPowerOfTwo:l0,setQuaternionFromProperEuler:u0,normalize:wt,denormalize:oi},Mu=class Mu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mu.prototype.isVector2=!0;let Xe=Mu;class lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(f!==v||c!==d||l!==h||u!==g){let m=c*d+l*h+u*g+f*v;m<0&&(d=-d,h=-h,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,a=Math.sin(a*y)/T,c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+v*a}else{c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+v*a;const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-a*h,e[t+2]=l*g+u*h+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Su=class Su{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Su.prototype.isVector3=!0;let F=Su;const za=new F,Ku=new lr,bu=class bu{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],y=r[1],T=r[4],S=r[7],x=r[2],b=r[5],C=r[8];return s[0]=o*v+a*y+c*x,s[3]=o*m+a*T+c*b,s[6]=o*p+a*S+c*C,s[1]=l*v+u*y+f*x,s[4]=l*m+u*T+f*b,s[7]=l*p+u*S+f*C,s[2]=d*v+h*y+g*x,s[5]=d*m+h*T+g*b,s[8]=d*p+h*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,h=l*s-o*c,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bu.prototype.isMatrix3=!0;let Ye=bu;const Ga=new Ye,ju=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){const n={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?la:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ca]:{primaries:e,whitePoint:i,transfer:la,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),n}const ut=d0();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Or;class f0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=ua("canvas")),Or.width=e.width,Or.height=e.height;const r=Or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h0=0;class ou{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?f0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let p0=0;const Va=new F;class _n extends Pr{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Oi,r=Oi,s=gn,o=yr,a=li,c=zn,l=_n.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=zi(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Yf;_n.DEFAULT_ANISOTROPY=1;const Eu=class Eu{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(h+1)/2,x=(p+1)/2,b=(u+d)/4,C=(f+v)/4,_=(g+m)/4;return T>S&&T>x?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=b/i,s=C/i):S>x?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=_/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=C/s,r=_/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eu.prototype.isVector4=!0;let Nt=Eu;class m0 extends Pr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new _n(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ou(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends m0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rh extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g0 extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const xa=class xa{constructor(e,t,i,r,s,o,a,c,l,u,f,d,h,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,d,h,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,v=l*f;t[0]=d+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,v=l*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+v,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_0,e,v0)}lookAt(e,t,i){const r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),qi.crossVectors(i,In),qi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),qi.crossVectors(i,In)),qi.normalize(),io.crossVectors(In,qi),r[0]=qi.x,r[4]=io.x,r[8]=In.x,r[1]=qi.y,r[5]=io.y,r[9]=In.y,r[2]=qi.z,r[6]=io.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],T=i[7],S=i[11],x=i[15],b=r[0],C=r[4],_=r[8],w=r[12],A=r[1],P=r[5],I=r[9],V=r[13],N=r[2],X=r[6],ae=r[10],Q=r[14],me=r[3],ce=r[7],fe=r[11],ne=r[15];return s[0]=o*b+a*A+c*N+l*me,s[4]=o*C+a*P+c*X+l*ce,s[8]=o*_+a*I+c*ae+l*fe,s[12]=o*w+a*V+c*Q+l*ne,s[1]=u*b+f*A+d*N+h*me,s[5]=u*C+f*P+d*X+h*ce,s[9]=u*_+f*I+d*ae+h*fe,s[13]=u*w+f*V+d*Q+h*ne,s[2]=g*b+v*A+m*N+p*me,s[6]=g*C+v*P+m*X+p*ce,s[10]=g*_+v*I+m*ae+p*fe,s[14]=g*w+v*V+m*Q+p*ne,s[3]=y*b+T*A+S*N+x*me,s[7]=y*C+T*P+S*X+x*ce,s[11]=y*_+T*I+S*ae+x*fe,s[15]=y*w+T*V+S*Q+x*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=c*h-l*d,T=a*h-l*f,S=a*d-c*f,x=o*h-l*u,b=o*d-c*u,C=o*f-a*u;return t*(v*y-m*T+p*S)-i*(g*y-m*x+p*b)+r*(g*T-v*x+p*C)-s*(g*S-v*b+m*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=t*a-i*o,T=t*c-r*o,S=t*l-s*o,x=i*c-r*a,b=i*l-s*a,C=r*l-s*c,_=u*v-f*g,w=u*m-d*g,A=u*p-h*g,P=f*m-d*v,I=f*p-h*v,V=d*p-h*m,N=y*V-T*I+S*P+x*A-b*w+C*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/N;return e[0]=(a*V-c*I+l*P)*X,e[1]=(r*I-i*V-s*P)*X,e[2]=(v*C-m*b+p*x)*X,e[3]=(d*b-f*C-h*x)*X,e[4]=(c*A-o*V-l*w)*X,e[5]=(t*V-r*A+s*w)*X,e[6]=(m*S-g*C-p*T)*X,e[7]=(u*C-d*S+h*T)*X,e[8]=(o*I-a*A+l*_)*X,e[9]=(i*A-t*I-s*_)*X,e[10]=(g*b-v*S+p*y)*X,e[11]=(f*S-u*b-h*y)*X,e[12]=(a*w-o*P-c*_)*X,e[13]=(t*P-i*w+r*_)*X,e[14]=(v*T-g*x-m*y)*X,e[15]=(u*x-f*T+d*y)*X,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,h=s*u,g=s*f,v=o*u,m=o*f,p=a*f,y=c*l,T=c*u,S=c*f,x=i.x,b=i.y,C=i.z;return r[0]=(1-(v+p))*x,r[1]=(h+S)*x,r[2]=(g-T)*x,r[3]=0,r[4]=(h-S)*b,r[5]=(1-(d+p))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(g+T)*C,r[9]=(m-y)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=kr.set(r[0],r[1],r[2]).length();const a=kr.set(r[4],r[5],r[6]).length(),c=kr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ni.copy(this);const l=1/o,u=1/a,f=1/c;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,t.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=Si,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===Si)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Hs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===Si)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Hs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};xa.prototype.isMatrix4=!0;let Dt=xa;const kr=new F,ni=new Dt,_0=new F(0,0,0),v0=new F(1,1,1),qi=new F,io=new F,In=new F,Ju=new Dt,Qu=new lr;class ur{constructor(e=0,t=0,i=0,r=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x0=0;const ed=new F,Br=new lr,Pi=new Dt,ro=new F,ms=new F,y0=new F,M0=new lr,td=new F(1,0,0),nd=new F(0,1,0),id=new F(0,0,1),rd={type:"added"},S0={type:"removed"},zr={type:"childadded",child:null},Wa={type:"childremoved",child:null};class cn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new F,t=new ur,i=new lr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ye}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ms,ro,this.up):Pi.lookAt(ro,ms,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Pi),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),zr.child=e,this.dispatchEvent(zr),zr.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}cn.DEFAULT_UP=new F(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Sn extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b0={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},so={h:0,s:0,l:0};function Xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=su(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xa(o,s,e+1/3),this.g=Xa(o,s,e),this.b=Xa(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=oh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ut.workingToColorSpace(fn.copy(this),e),Math.round(at(fn.r*255,0,255))*65536+Math.round(at(fn.g*255,0,255))*256+Math.round(at(fn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(fn.copy(this),t);const i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Fn){ut.workingToColorSpace(fn.copy(this),e);const t=fn.r,i=fn.g,r=fn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(so);const i=Is(Yi.h,so.h,t),r=Is(Yi.s,so.s,t),s=Is(Yi.l,so.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new $e;$e.NAMES=oh;class E0 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ii=new F,Li=new F,qa=new F,Di=new F,Gr=new F,Hr=new F,sd=new F,Ya=new F,Ka=new F,ja=new F,Za=new Nt,Ja=new Nt,Qa=new Nt;class Zn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ii.subVectors(e,t),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ii.subVectors(r,t),Li.subVectors(i,t),qa.subVectors(e,t);const o=ii.dot(ii),a=ii.dot(Li),c=ii.dot(qa),l=Li.dot(Li),u=Li.dot(qa),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,i),Qa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Za,s.x),o.addScaledVector(Ja,s.y),o.addScaledVector(Qa,s.z),o}static isFrontFacing(e,t,i,r){return ii.subVectors(i,t),Li.subVectors(e,t),ii.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Hr.subVectors(s,i),Ya.subVectors(e,i);const c=Gr.dot(Ya),l=Hr.dot(Ya);if(c<=0&&l<=0)return t.copy(i);Ka.subVectors(e,r);const u=Gr.dot(Ka),f=Hr.dot(Ka);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Gr,o);ja.subVectors(e,s);const h=Gr.dot(ja),g=Hr.dot(ja);if(g>=0&&h<=g)return t.copy(s);const v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Hr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return sd.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(sd,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Gr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class js{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),ao.subVectors(this.max,gs),Vr.subVectors(e.a,gs),Wr.subVectors(e.b,gs),$r.subVectors(e.c,gs),Ki.subVectors(Wr,Vr),ji.subVectors($r,Wr),hr.subVectors(Vr,$r);let t=[0,-Ki.z,Ki.y,0,-ji.z,ji.y,0,-hr.z,hr.y,Ki.z,0,-Ki.x,ji.z,0,-ji.x,hr.z,0,-hr.x,-Ki.y,Ki.x,0,-ji.y,ji.x,0,-hr.y,hr.x,0];return!ec(t,Vr,Wr,$r,ao)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,Vr,Wr,$r,ao))?!1:(co.crossVectors(Ki,ji),t=[co.x,co.y,co.z],ec(t,Vr,Wr,$r,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new F,new F,new F,new F,new F,new F,new F,new F],ri=new F,oo=new js,Vr=new F,Wr=new F,$r=new F,Ki=new F,ji=new F,hr=new F,gs=new F,ao=new F,co=new F,pr=new F;function ec(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){pr.fromArray(n,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),l=t.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Xt=new F,lo=new Xe;let T0=0;class rn extends Pr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nh,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ah extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ch extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const w0=new js,_s=new F,tc=new F;class Zs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):w0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(tc)),this.expandByPoint(_s.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A0=0;const qn=new Dt,nc=new cn,Xr=new F,Un=new js,vs=new js,nn=new F;class Lt extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($m(e)?ch:ah)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Un.min,vs.min),Un.expandByPoint(nn),nn.addVectors(Un.max,vs.max),Un.expandByPoint(nn)):(Un.expandByPoint(vs.min),Un.expandByPoint(vs.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(Xr.fromBufferAttribute(e,l),nn.add(Xr)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new F,c[_]=new F;const l=new F,u=new F,f=new F,d=new Xe,h=new Xe,g=new Xe,v=new F,m=new F;function p(_,w,A){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,A),d.fromBufferAttribute(s,_),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,A),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(P),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),a[_].add(v),a[w].add(v),a[A].add(v),c[_].add(m),c[w].add(m),c[A].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,w=y.length;_<w;++_){const A=y[_],P=A.start,I=A.count;for(let V=P,N=P+I;V<N;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new F,S=new F,x=new F,b=new F;function C(_){x.fromBufferAttribute(r,_),b.copy(x);const w=a[_];T.copy(w),T.sub(x.multiplyScalar(x.dot(w))).normalize(),S.crossVectors(b,w);const P=S.dot(c[_])<0?-1:1;o.setXYZW(_,T.x,T.y,T.z,P)}for(let _=0,w=y.length;_<w;++_){const A=y[_],P=A.start,I=A.count;for(let V=P,N=P+I;V<N;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,f=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new rn(d,u,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class C0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const yn=new F;class fa{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ic=new F,R0=new F,P0=new Ye;class vi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ic.subVectors(i,t).cross(R0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ic),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||P0.getNormalMatrix(e),r=this.coplanarPoint(ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let L0=0;class dr extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Ls,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Bf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new vi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nn extends dr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qr;const xs=new F,Yr=new F,Kr=new F,jr=new Xe,ys=new Xe,lh=new Dt,uo=new F,Ms=new F,fo=new F,od=new Xe,rc=new Xe,ad=new Xe;class Yn extends cn{constructor(e=new Nn){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new C0(t,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new fa(i,3,0,!1)),qr.setAttribute("uv",new fa(i,2,3,!1))}this.geometry=qr,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),lh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Kr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ho(uo.set(-.5,-.5,0),Kr,o,Yr,r,s),ho(Ms.set(.5,-.5,0),Kr,o,Yr,r,s),ho(fo.set(.5,.5,0),Kr,o,Yr,r,s),od.set(0,0),rc.set(1,0),ad.set(1,1);let a=e.ray.intersectTriangle(uo,Ms,fo,!1,xs);if(a===null&&(ho(Ms.set(-.5,.5,0),Kr,o,Yr,r,s),rc.set(0,1),a=e.ray.intersectTriangle(uo,fo,Ms,!1,xs),a===null))return;const c=e.ray.origin.distanceTo(xs);c<e.near||c>e.far||t.push({distance:c,point:xs.clone(),uv:Zn.getInterpolation(xs,uo,Ms,fo,od,rc,ad,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ho(n,e,t,i,r,s){jr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ys.x=s*jr.x-r*jr.y,ys.y=r*jr.x+s*jr.y):ys.copy(jr),n.copy(e),n.x+=ys.x,n.y+=ys.y,n.applyMatrix4(lh)}const Ui=new F,sc=new F,po=new F,mo=new F;class Ea{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sc.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(sc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=mo.dot(this.direction),c=-mo.dot(po),l=mo.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sc).addScaledVector(po,d),h}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,s){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=e.x-o.x,d=e.y-o.y,h=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,p=i.x-o.x,y=i.y-o.y,T=i.z-o.z,S=Math.abs(c),x=Math.abs(l),b=Math.abs(u);let C,_,w,A,P,I,V,N,X,ae,Q,me;if(S>=x&&S>=b?(w=c,I=f,X=g,me=p,c>=0?(C=l,_=u,A=d,P=h,V=v,N=m,ae=y,Q=T):(C=u,_=l,A=h,P=d,V=m,N=v,ae=T,Q=y)):x>=b?(w=l,I=d,X=v,me=y,l>=0?(C=u,_=c,A=h,P=f,V=m,N=g,ae=T,Q=p):(C=c,_=u,A=f,P=h,V=g,N=m,ae=p,Q=T)):(w=u,I=h,X=m,me=T,u>=0?(C=c,_=l,A=f,P=d,V=g,N=v,ae=p,Q=y):(C=l,_=c,A=d,P=f,V=v,N=g,ae=y,Q=p)),w===0)return null;const ce=C/w,fe=_/w,ne=1/w,Re=A-ce*I,Ie=P-fe*I,vt=V-ce*X,Je=N-fe*X,nt=ae-ce*me,oe=Q-fe*me,he=nt*Je-oe*vt,Te=Re*oe-Ie*nt,He=vt*Ie-Je*Re;if(r){if(he<0||Te<0||He<0)return null}else if((he<0||Te<0||He<0)&&(he>0||Te>0||He>0))return null;const Le=he+Te+He;if(Le===0)return null;const Qe=ne*(he*I+Te*X+He*me);return(Le>0?Qe<0:Qe>0)?null:this.at(Qe/Le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nr extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cd=new Dt,mr=new Ea,go=new Zs,ld=new F,_o=new F,vo=new F,xo=new F,oc=new F,yo=new F,ud=new F,Mo=new F;class qe extends cn{constructor(e=new Lt,t=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(oc.fromBufferAttribute(f,e),o?yo.addScaledVector(oc,u):yo.addScaledVector(oc.sub(t),u))}t.add(yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(go.containsPoint(mr.origin)===!1&&(mr.intersectSphere(go,ld)===null||mr.origin.distanceToSquared(ld)>(e.far-e.near)**2))&&(cd.copy(s).invert(),mr.copy(e.ray).applyMatrix4(cd),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,x=T;S<x;S+=3){const b=a.getX(S),C=a.getX(S+1),_=a.getX(S+2);r=So(this,p,e,i,l,u,f,b,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=So(this,o,e,i,l,u,f,y,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,x=T;S<x;S+=3){const b=S,C=S+1,_=S+2;r=So(this,p,e,i,l,u,f,b,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const y=m,T=m+1,S=m+2;r=So(this,o,e,i,l,u,f,y,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function D0(n,e,t,i,r,s,o,a){let c;if(e.side===Tn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Tr,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:n}}function So(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,_o),n.getVertexPosition(c,vo),n.getVertexPosition(l,xo);const u=D0(n,e,t,i,_o,vo,xo,ud);if(u){const f=new F;Zn.getBarycoord(ud,_o,vo,xo,f),r&&(u.uv=Zn.getInterpolatedAttribute(r,a,c,l,f,new Xe)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,a,c,l,f,new Xe)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,c,l,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new F,materialIndex:0};Zn.getNormal(_o,vo,xo,d.normal),u.face=d,u.barycoord=f}return u}class I0 extends _n{constructor(e=null,t=1,i=1,r,s,o,a,c,l=an,u=an,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gr=new Zs,U0=new Xe(.5,.5),bo=new F;class au{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,o=new vi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],v=s[9],m=s[10],p=s[11],y=s[12],T=s[13],S=s[14],x=s[15];if(r[0].setComponents(l-o,h-u,p-g,x-y).normalize(),r[1].setComponents(l+o,h+u,p+g,x+y).normalize(),r[2].setComponents(l+a,h+f,p+v,x+T).normalize(),r[3].setComponents(l-a,h-f,p-v,x-T).normalize(),i)r[4].setComponents(c,d,m,S).normalize(),r[5].setComponents(l-c,h-d,p-m,x-S).normalize();else if(r[4].setComponents(l-c,h-d,p-m,x-S).normalize(),t===Si)r[5].setComponents(l+c,h+d,p+m,x+S).normalize();else if(t===Hs)r[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const t=U0.distanceTo(e.center);return gr.radius=.7071067811865476+t,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ha extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pa=new F,ma=new F,dd=new Dt,Ss=new Ea,Eo=new Zs,ac=new F,fd=new F;class Bo extends cn{constructor(e=new Lt,t=new ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)pa.fromBufferAttribute(t,r-1),ma.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pa.distanceTo(ma);e.setAttribute("lineDistance",new Et(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;dd.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(dd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){const p=u.getX(v),y=u.getX(v+1),T=To(this,e,Ss,c,p,y,v);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=To(this,e,Ss,c,v,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){const p=To(this,e,Ss,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=To(this,e,Ss,c,g-1,h,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function To(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(pa.fromBufferAttribute(a,r),ma.fromBufferAttribute(a,s),t.distanceSqToSegment(pa,ma,ac,fd)>i)return;ac.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ac);if(!(l<e.near||l>e.far))return{distance:l,point:fd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const hd=new F,pd=new F;class md extends Bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hd.fromBufferAttribute(t,r),pd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hd.distanceTo(pd);e.setAttribute("lineDistance",new Et(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cu extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gd=new Dt,ml=new Ea,wo=new Zs,Ao=new F;class uh extends cn{constructor(e=new Lt,t=new cu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;gd.copy(r).invert(),ml.copy(e.ray).applyMatrix4(gd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=d,v=h;g<v;g++){const m=l.getX(g);Ao.fromBufferAttribute(f,m),_d(Ao,m,c,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,v=h;g<v;g++)Ao.fromBufferAttribute(f,g),_d(Ao,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _d(n,e,t,i,r,s,o){const a=ml.distanceSqToPoint(n);if(a<t){const c=new F;ml.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class dh extends _n{constructor(e=[],t=wr,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N0 extends _n{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ws extends _n{constructor(e,t,i=Ci,r,s,o,a=an,c=an,l,u=Vi,f=1){if(u!==Vi&&u!==Mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class F0 extends Ws{constructor(e,t=Ci,i=wr,r,s,o=an,a=an,c,l=Vi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fh extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pi extends Lt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(f,2));function g(v,m,p,y,T,S,x,b,C,_,w){const A=S/C,P=x/_,I=S/2,V=x/2,N=b/2,X=C+1,ae=_+1;let Q=0,me=0;const ce=new F;for(let fe=0;fe<ae;fe++){const ne=fe*P-V;for(let Re=0;Re<X;Re++){const Ie=Re*A-I;ce[v]=Ie*y,ce[m]=ne*T,ce[p]=N,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=b>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Re/C),f.push(1-fe/_),Q+=1}}for(let fe=0;fe<_;fe++)for(let ne=0;ne<C;ne++){const Re=d+ne+X*fe,Ie=d+ne+X*(fe+1),vt=d+(ne+1)+X*(fe+1),Je=d+(ne+1)+X*fe;c.push(Re,Ie,Je),c.push(Ie,vt,Je),me+=6}a.addGroup(h,me,w),h+=me,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kn extends Lt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const v=[],m=i/2;let p=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(h,2));function y(){const S=new F,x=new F;let b=0;const C=(t-e)/i;for(let _=0;_<=s;_++){const w=[],A=_/s,P=A*(t-e)+e;for(let I=0;I<=r;I++){const V=I/r,N=V*c+a,X=Math.sin(N),ae=Math.cos(N);x.x=P*X,x.y=-A*i+m,x.z=P*ae,f.push(x.x,x.y,x.z),S.set(X,C,ae).normalize(),d.push(S.x,S.y,S.z),h.push(V,1-A),w.push(g++)}v.push(w)}for(let _=0;_<r;_++)for(let w=0;w<s;w++){const A=v[w][_],P=v[w+1][_],I=v[w+1][_+1],V=v[w][_+1];(e>0||w!==0)&&(u.push(A,P,V),b+=3),(t>0||w!==s-1)&&(u.push(P,I,V),b+=3)}l.addGroup(p,b,0),p+=b}function T(S){const x=g,b=new Xe,C=new F;let _=0;const w=S===!0?e:t,A=S===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*A,0),d.push(0,A,0),h.push(.5,.5),g++;const P=g;for(let I=0;I<=r;I++){const N=I/r*c+a,X=Math.cos(N),ae=Math.sin(N);C.x=w*ae,C.y=m*A,C.z=w*X,f.push(C.x,C.y,C.z),d.push(0,A,0),b.x=X*.5+.5,b.y=ae*.5*A+.5,h.push(b.x,b.y),g++}for(let I=0;I<r;I++){const V=x+I,N=P+I;S===!0?u.push(N,N+1,V):u.push(N+1,N,V),_+=3}l.addGroup(p,_,S===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends kn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Js(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lu extends Lt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new F,S=new F,x=new F;for(let b=0;b<t.length;b+=3)h(t[b+0],T),h(t[b+1],S),h(t[b+2],x),c(T,S,x,y)}function c(y,T,S,x){const b=x+1,C=[];for(let _=0;_<=b;_++){C[_]=[];const w=y.clone().lerp(S,_/b),A=T.clone().lerp(S,_/b),P=b-_;for(let I=0;I<=P;I++)I===0&&_===b?C[_][I]=w:C[_][I]=w.clone().lerp(A,I/P)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){const A=Math.floor(w/2);w%2===0?(d(C[_][A+1]),d(C[_+1][A]),d(C[_][A])):(d(C[_][A+1]),d(C[_+1][A+1]),d(C[_+1][A]))}}function l(y){const T=new F;for(let S=0;S<s.length;S+=3)T.x=s[S+0],T.y=s[S+1],T.z=s[S+2],T.normalize().multiplyScalar(y),s[S+0]=T.x,s[S+1]=T.y,s[S+2]=T.z}function u(){const y=new F;for(let T=0;T<s.length;T+=3){y.x=s[T+0],y.y=s[T+1],y.z=s[T+2];const S=m(y)/2/Math.PI+.5,x=p(y)/Math.PI+.5;o.push(S,1-x)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){const T=o[y+0],S=o[y+2],x=o[y+4],b=Math.max(T,S,x),C=Math.min(T,S,x);b>.9&&C<.1&&(T<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),x<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,T){const S=y*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function g(){const y=new F,T=new F,S=new F,x=new F,b=new Xe,C=new Xe,_=new Xe;for(let w=0,A=0;w<s.length;w+=9,A+=6){y.set(s[w+0],s[w+1],s[w+2]),T.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),b.set(o[A+0],o[A+1]),C.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),x.copy(y).add(T).add(S).divideScalar(3);const P=m(x);v(b,A+0,y,P),v(C,A+2,T,P),v(_,A+4,S,P)}}function v(y,T,S,x){x<0&&y.x===1&&(o[T]=y.x-1),S.x===0&&S.z===0&&(o[T]=x/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.vertices,e.indices,e.radius,e.detail)}}class uu extends lu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uu(e.radius,e.detail)}}class Qs extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let T=0;T<l;T++){const S=T*f-s;g.push(S,-y,0),v.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const T=y+l*p,S=y+l*(p+1),x=y+1+l*(p+1),b=y+1+l*p;h.push(T,S,b),h.push(S,x,b)}this.setIndex(h),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class du extends Lt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let f=e;const d=(t-e)/r,h=new F,g=new Xe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const y=p+m,T=y,S=y+i+1,x=y+i+2,b=y+1;a.push(T,S,b),a.push(S,x,b)}}this.setIndex(a),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ai extends Lt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new F,d=new F,h=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],T=p/i,S=o+T*a,x=e*Math.cos(S),b=Math.sqrt(e*e-x*x);let C=0;p===0&&o===0?C=.5/t:p===i&&c===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const w=_/t,A=r+w*s;f.x=-b*Math.cos(A),f.y=x,f.z=b*Math.sin(A),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(w+C,1-T),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const T=u[p][y+1],S=u[p][y],x=u[p+1][y],b=u[p+1][y+1];(p!==0||o>0)&&h.push(T,S,b),(p!==i-1||c<Math.PI)&&h.push(S,x,b)}this.setIndex(h),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cr extends Lt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],f=[],d=new F,h=new F,g=new F;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let p=0;p<=r;p++){const y=p/r*s;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(p/r),f.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=r;m++){const p=(r+1)*v+m-1,y=(r+1)*(v-1)+m-1,T=(r+1)*(v-1)+m,S=(r+1)*v+m;c.push(p,y,S),c.push(y,T,S)}this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(vd(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(vd(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Mn(n){const e={};for(let t=0;t<n.length;t++){const i=us(n[t]);for(const r in i)e[r]=i[r]}return e}function vd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function O0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const k0={clone:us,merge:Mn};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Nt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class G0 extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kn extends dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class H0 extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V0 extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cc extends ha{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class ph extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const lc=new Dt,xd=new F,yd=new F;class W0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new au,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(lc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Hs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Co=new F,Ro=new lr,mi=new F;class mh extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Co,Ro,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Ro,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Co,Ro,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Ro,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new F,Md=new Xe,Sd=new Xe;class Bn extends mh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Md,Sd),t.subVectors(Sd,Md)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $0 extends W0{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}}class bd extends ph{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class gh extends mh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class X0 extends ph{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Zr=-90,Jr=1;class q0 extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const s=new Bn(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const o=new Bn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const a=new Bn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const c=new Bn(Zr,Jr,e,t);c.layers=this.layers,this.add(c);const l=new Bn(Zr,Jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Y0 extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class K0{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tu=class Tu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Tu.prototype.isMatrix2=!0;let Ed=Tu;function Td(n,e,t,i){const r=j0(i);switch(t){case Qf:return n*e;case th:return n*e/r.components*r.byteLength;case eu:return n*e/r.components*r.byteLength;case Ar:return n*e*2/r.components*r.byteLength;case tu:return n*e*2/r.components*r.byteLength;case eh:return n*e*3/r.components*r.byteLength;case li:return n*e*4/r.components*r.byteLength;case nu:return n*e*4/r.components*r.byteLength;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case kc:case zc:return Math.max(n,8)*Math.max(e,8)/2;case Hc:case Vc:case $c:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case oa:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case ll:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case aa:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j0(n){switch(n){case zn:case Kf:return{byteLength:1,components:1};case zs:case jf:case Ri:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case Ci:case Zl:case Mi:return{byteLength:4,components:1};case Zf:case Jf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _h(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Z0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dg=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mg=`#define PI 3.141592653589793
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
} // validated`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wg=`#ifdef USE_ENVMAP
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
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#endif`,jg=`uniform sampler2D dfgLUT;
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
}`,Zg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c_=`#if defined( USE_POINTS_UV )
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
#endif`,l_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
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
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M_=`#ifdef USE_NORMALMAP
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
#endif`,S_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O_=`float getShadowMask() {
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
}`,k_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,H_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`#include <common>
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
}`,sv=`#if DEPTH_PACKING == 3200
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
}`,ov=`#define DISTANCE
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
}`,av=`#define DISTANCE
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`uniform float scale;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,hv=`uniform vec3 diffuse;
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define LAMBERT
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
}`,gv=`#define MATCAP
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
}`,_v=`#define MATCAP
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
}`,vv=`#define NORMAL
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
}`,xv=`#define NORMAL
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
}`,yv=`#define PHONG
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
}`,Mv=`#define PHONG
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
}`,Sv=`#define STANDARD
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
}`,bv=`#define STANDARD
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
}`,Ev=`#define TOON
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
}`,Tv=`#define TOON
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
}`,wv=`uniform float size;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Rv=`uniform vec3 color;
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
}`,Pv=`uniform float rotation;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:rg,aomap_pars_fragment:sg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:cg,beginnormal_vertex:lg,bsdfs:ug,iridescence_fragment:dg,bumpmap_pars_fragment:fg,clipping_planes_fragment:hg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:_g,color_pars_fragment:vg,color_pars_vertex:xg,color_vertex:yg,common:Mg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Tg,emissivemap_fragment:wg,emissivemap_pars_fragment:Ag,colorspace_fragment:Cg,colorspace_pars_fragment:Rg,envmap_fragment:Pg,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Dg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Wg,envmap_vertex:Ug,fog_vertex:Ng,fog_pars_vertex:Fg,fog_fragment:Og,fog_pars_fragment:kg,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:zg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:$g,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:Kg,lights_physical_pars_fragment:jg,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:Qg,lightprobes_pars_fragment:e_,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:n_,logdepthbuf_pars_vertex:i_,logdepthbuf_vertex:r_,map_fragment:s_,map_pars_fragment:o_,map_particle_fragment:a_,map_particle_pars_fragment:c_,metalnessmap_fragment:l_,metalnessmap_pars_fragment:u_,morphinstance_vertex:d_,morphcolor_vertex:f_,morphnormal_vertex:h_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:v_,normal_pars_vertex:x_,normal_vertex:y_,normalmap_pars_fragment:M_,clearcoat_normal_fragment_begin:S_,clearcoat_normal_fragment_maps:b_,clearcoat_pars_fragment:E_,iridescence_pars_fragment:T_,opaque_fragment:w_,packing:A_,premultiplied_alpha_fragment:C_,project_vertex:R_,dithering_fragment:P_,dithering_pars_fragment:L_,roughnessmap_fragment:D_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:U_,shadowmap_pars_vertex:N_,shadowmap_vertex:F_,shadowmask_pars_fragment:O_,skinbase_vertex:k_,skinning_pars_vertex:B_,skinning_vertex:z_,skinnormal_vertex:G_,specularmap_fragment:H_,specularmap_pars_fragment:V_,tonemapping_fragment:W_,tonemapping_pars_fragment:$_,transmission_fragment:X_,transmission_pars_fragment:q_,uv_pars_fragment:Y_,uv_pars_vertex:K_,uv_vertex:j_,worldpos_vertex:Z_,background_vert:J_,background_frag:Q_,backgroundCube_vert:ev,backgroundCube_frag:tv,cube_vert:nv,cube_frag:iv,depth_vert:rv,depth_frag:sv,distance_vert:ov,distance_frag:av,equirect_vert:cv,equirect_frag:lv,linedashed_vert:uv,linedashed_frag:dv,meshbasic_vert:fv,meshbasic_frag:hv,meshlambert_vert:pv,meshlambert_frag:mv,meshmatcap_vert:gv,meshmatcap_frag:_v,meshnormal_vert:vv,meshnormal_frag:xv,meshphong_vert:yv,meshphong_frag:Mv,meshphysical_vert:Sv,meshphysical_frag:bv,meshtoon_vert:Ev,meshtoon_frag:Tv,points_vert:wv,points_frag:Av,shadow_vert:Cv,shadow_frag:Rv,sprite_vert:Pv,sprite_frag:Lv},Ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},xi={basic:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Mn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Mn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Mn([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Mn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Mn([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Mn([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Mn([Ae.common,Ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Mn([Ae.lights,Ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};xi.physical={uniforms:Mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Po={r:0,b:0,g:0},Dv=new Dt,vh=new Ye;vh.set(-1,0,0,0,1,0,0,0,1);function Iv(n,e,t,i,r,s){const o=new $e(0);let a=r===!0?0:1,c,l,u=null,f=0,d=null;function h(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const S=y.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(y){let T=!1;const S=h(y);S===null?m(o,a):S&&S.isColor&&(m(S,1),T=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,T){const S=h(T);S&&(S.isCubeTexture||S.mapping===ba)?(l===void 0&&(l=new qe(new pi(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:us(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vh),l.material.toneMapped=ut.getTransfer(S.colorSpace)!==Tt,(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new qe(new Qs(2,2),new Wn({name:"BackgroundMaterial",uniforms:us(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ut.getTransfer(S.colorSpace)!==Tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,T){y.getRGB(Po,hh(n)),t.buffers.color.setClear(Po.r,Po.g,Po.b,T,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:v,dispose:p}}function Uv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(P,I,V,N,X){let ae=!1;const Q=f(P,N,V,I);s!==Q&&(s=Q,l(s.object)),ae=h(P,N,V,X),ae&&g(P,N,V,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,S(P,I,V,N),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,I,V,N){const X=N.wireframe===!0;let ae=i[I.id];ae===void 0&&(ae={},i[I.id]=ae);const Q=P.isInstancedMesh===!0?P.id:0;let me=ae[Q];me===void 0&&(me={},ae[Q]=me);let ce=me[V.id];ce===void 0&&(ce={},me[V.id]=ce);let fe=ce[X];return fe===void 0&&(fe=d(c()),ce[X]=fe),fe}function d(P){const I=[],V=[],N=[];for(let X=0;X<t;X++)I[X]=0,V[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:N,object:P,attributes:{},index:null}}function h(P,I,V,N){const X=s.attributes,ae=I.attributes;let Q=0;const me=V.getAttributes();for(const ce in me)if(me[ce].location>=0){const ne=X[ce];let Re=ae[ce];if(Re===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Re=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Re=P.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;Q++}return s.attributesNum!==Q||s.index!==N}function g(P,I,V,N){const X={},ae=I.attributes;let Q=0;const me=V.getAttributes();for(const ce in me)if(me[ce].location>=0){let ne=ae[ce];ne===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),X[ce]=Re,Q++}s.attributes=X,s.attributesNum=Q,s.index=N}function v(){const P=s.newAttributes;for(let I=0,V=P.length;I<V;I++)P[I]=0}function m(P){p(P,0)}function p(P,I){const V=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;V[P]=1,N[P]===0&&(n.enableVertexAttribArray(P),N[P]=1),X[P]!==I&&(n.vertexAttribDivisor(P,I),X[P]=I)}function y(){const P=s.newAttributes,I=s.enabledAttributes;for(let V=0,N=I.length;V<N;V++)I[V]!==P[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function T(P,I,V,N,X,ae,Q){Q===!0?n.vertexAttribIPointer(P,I,V,X,ae):n.vertexAttribPointer(P,I,V,N,X,ae)}function S(P,I,V,N){v();const X=N.attributes,ae=V.getAttributes(),Q=I.defaultAttributeValues;for(const me in ae){const ce=ae[me];if(ce.location>=0){let fe=X[me];if(fe===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),fe!==void 0){const ne=fe.normalized,Re=fe.itemSize,Ie=e.get(fe);if(Ie===void 0)continue;const vt=Ie.buffer,Je=Ie.type,nt=Ie.bytesPerElement,oe=Je===n.INT||Je===n.UNSIGNED_INT||fe.gpuType===Zl;if(fe.isInterleavedBufferAttribute){const he=fe.data,Te=he.stride,He=fe.offset;if(he.isInstancedInterleavedBuffer){for(let Le=0;Le<ce.locationSize;Le++)p(ce.location+Le,he.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Le=0;Le<ce.locationSize;Le++)m(ce.location+Le);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Le=0;Le<ce.locationSize;Le++)T(ce.location+Le,Re/ce.locationSize,Je,ne,Te*nt,(He+Re/ce.locationSize*Le)*nt,oe)}else{if(fe.isInstancedBufferAttribute){for(let he=0;he<ce.locationSize;he++)p(ce.location+he,fe.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let he=0;he<ce.locationSize;he++)m(ce.location+he);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let he=0;he<ce.locationSize;he++)T(ce.location+he,Re/ce.locationSize,Je,ne,Re*nt,Re/ce.locationSize*he*nt,oe)}}else if(Q!==void 0){const ne=Q[me];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(ce.location,ne);break;case 3:n.vertexAttrib3fv(ce.location,ne);break;case 4:n.vertexAttrib4fv(ce.location,ne);break;default:n.vertexAttrib1fv(ce.location,ne)}}}}y()}function x(){w();for(const P in i){const I=i[P];for(const V in I){const N=I[V];for(const X in N){const ae=N[X];for(const Q in ae)u(ae[Q].object),delete ae[Q];delete N[X]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const V in I){const N=I[V];for(const X in N){const ae=N[X];for(const Q in ae)u(ae[Q].object),delete ae[Q];delete N[X]}}delete i[P.id]}function C(P){for(const I in i){const V=i[I];for(const N in V){const X=V[N];if(X[P.id]===void 0)continue;const ae=X[P.id];for(const Q in ae)u(ae[Q].object),delete ae[Q];delete X[P.id]}}}function _(P){for(const I in i){const V=i[I],N=P.isInstancedMesh===!0?P.id:0,X=V[N];if(X!==void 0){for(const ae in X){const Q=X[ae];for(const me in Q)u(Q[me].object),delete Q[me];delete X[ae]}delete V[N],Object.keys(V).length===0&&delete i[I]}}}function w(){A(),o=!0,s!==r&&(s=r,l(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Nv(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let h=0;h<u;h++)d+=l[h];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Fv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==li&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zn&&C!==Mi&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:x,samples:b}}function Ov(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new vi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const y=s?0:i,T=y*4;let S=p.clippingState||null;c.value=S,S=u(g,d,T,h);for(let x=0;x!==T;++x)S[x]=t[x];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=h+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=h;T!==v;++T,S+=4)o.copy(f[T]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const ns=4,kv=6,Bv=20,zv=256,bs=new gh,wd=new $e;let uc=null,dc=0,fc=0,hc=!1;const Gv=new F,_r=new F;class Ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Gv}=s;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Ri,format:li,colorSpace:ca,depthBuffer:!1},r=Cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hv(s)),this._blurMaterial=Wv(s,e,t),this._ggxMaterial=Vv(s,e,t)}return r}_compileMaterial(e){const t=new qe(new Lt,e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,i,r,s){const c=new Bn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(wd),f.toneMapping=wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new pi,new nr({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(wd),p=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const x=this._cubeSize;Qr(r,S*x,T>2?x:0,x,x),f.setRenderTarget(r),p&&f.render(v,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wr||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Qr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=l*1.25,h=f*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-ns?i-g+ns:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,Qr(s,m,p,3*v,2*v),r.setRenderTarget(s),r.render(a,bs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Qr(e,m,p,3*v,2*v),r.setRenderTarget(e),r.render(a,bs)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-ns?r-this._lodMax+ns:0),d=4*(this._cubeSize-u);Qr(t,f,d,3*u,2*u),o.setRenderTarget(t),o.render(c,bs)}}function Hv(n){const e=[],t=[];let i=n;const r=n-ns+1+kv;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,h=3,g=new Float32Array(h*d*f),v=new Float32Array(h*d*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,T=p>2?0:-1,S=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(S,h*d*p);for(let x=0;x<d;x++){const b=u[x*2]*2-1,C=u[x*2+1]*2-1;p===0?_r.set(1,C,b):p===1?_r.set(-b,1,-C):p===2?_r.set(-b,C,1):p===3?_r.set(-1,C,-b):p===4?_r.set(-b,-1,C):_r.set(b,C,-1),_r.toArray(v,(p*d+x)*h)}}const m=new Lt;m.setAttribute("position",new rn(g,h)),m.setAttribute("outputDirection",new rn(v,h)),t.push(new qe(m,null)),i>ns&&i--}return{lodMeshes:t,sizeLods:e}}function Cd(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Vv(n,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Wv(n,e,t){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Bv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Rd(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Pd(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xh extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pi(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Bi});s.uniforms.tEquirect.value=t;const o=new qe(r,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=gn),new q0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function $v(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?o(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Fa||h===Oa)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new xh(g.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",l),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===Fa||h===Oa,v=h===wr||h===ls;if(g||v){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Ad(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return g&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new Ad(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Fa?d.mapping=wr:h===Oa&&(d.mapping=ls),d}function c(d){let h=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&h++;return h===g}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Xv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&is("WebGLRenderer: "+i+" extension not supported."),r}}}function qv(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const y=h.array;v=h.version;for(let T=0,S=y.length;T<S;T+=3){const x=y[T+0],b=y[T+1],C=y[T+2];d.push(x,b,b,C,C,x)}}else{const y=g.array;v=g.version;for(let T=0,S=y.length/3-1;T<S;T+=3){const x=T+0,b=T+1,C=T+2;d.push(x,b,b,C,C,x)}}const m=new(g.count>=65535?ch:ah)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Yv(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function l(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,s,f*o,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let v=0;for(let m=0;m<h;m++)v+=d[m];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Kv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jv(n,e,t){const i=new WeakMap,r=new Nt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let A=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var h=A;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let x=a.attributes.position.count*S,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*b*4*f),_=new rh(C,x,b,f);_.type=Mi,_.needsUpdate=!0;const w=S*4;for(let P=0;P<f;P++){const I=p[P],V=y[P],N=T[P],X=x*b*4*P;for(let ae=0;ae<I.count;ae++){const Q=ae*w;g===!0&&(r.fromBufferAttribute(I,ae),C[X+Q+0]=r.x,C[X+Q+1]=r.y,C[X+Q+2]=r.z,C[X+Q+3]=0),v===!0&&(r.fromBufferAttribute(V,ae),C[X+Q+4]=r.x,C[X+Q+5]=r.y,C[X+Q+6]=r.z,C[X+Q+7]=0),m===!0&&(r.fromBufferAttribute(N,ae),C[X+Q+8]=r.x,C[X+Q+9]=r.y,C[X+Q+10]=r.z,C[X+Q+11]=N.itemSize===4?r.w:1)}}d={count:f,texture:_,size:new Xe(x,b)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Zv(n,e,t,i,r){let s=new WeakMap;function o(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Jv={[Gf]:"LINEAR_TONE_MAPPING",[Hf]:"REINHARD_TONE_MAPPING",[Vf]:"CINEON_TONE_MAPPING",[Wf]:"ACES_FILMIC_TONE_MAPPING",[Xf]:"AGX_TONE_MAPPING",[qf]:"NEUTRAL_TONE_MAPPING",[$f]:"CUSTOM_TONE_MAPPING"};function Qv(n,e,t,i,r,s){const o=new hi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Lt;l.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Et([0,2,0,0,2,0],2));const u=new G0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new qe(l,u),d=new gh(-1,1,1,-1,0,1);let h=null,g=null,v=!1,m,p=null,y=[],T=!1;this.setSize=function(S,x){o.setSize(S,x),a!==null&&a.setSize(S,x),c!==null&&c.setSize(S,x);for(let b=0;b<y.length;b++){const C=y[b];C.setSize&&C.setSize(S,x)}},this.setEffects=function(S){y=S,T=y.length>0&&y[0].isRenderPass===!0;const x=o.width,b=o.height;y.length>0&&a===null&&(a=new hi(x,b,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),c=new hi(x,b,{type:Ri,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){const _=y[C];_.setSize&&_.setSize(x,b)}},this.begin=function(S,x){if(v||S.toneMapping===wi&&y.length===0)return!1;if(p=x,x!==null){const b=x.width,C=x.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return T===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=wi,!0},this.hasRenderPass=function(){return T},this.end=function(S,x){S.toneMapping=m,v=!0;let b=o,C=a;for(let _=0;_<y.length;_++){const w=y[_];w.enabled!==!1&&(w.render(S,C,b,x),w.needsSwap!==!1&&(b=C,C=C===a?c:a))}if(h!==S.outputColorSpace||g!==S.toneMapping){h=S.outputColorSpace,g=S.toneMapping,u.defines={},ut.getTransfer(h)===Tt&&(u.defines.SRGB_TRANSFER="");const _=Jv[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(f,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const yh=new _n,gl=new Ws(1,1),Mh=new rh,Sh=new g0,bh=new dh,Ld=[],Dd=[],Id=new Float32Array(16),Ud=new Float32Array(9),Nd=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ld[r];if(s===void 0&&(s=new Float32Array(r),Ld[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wa(n,e){let t=Dd[e];t===void 0&&(t=new Int32Array(e),Dd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function rx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Nd.set(i),n.uniformMatrix2fv(this.addr,!1,Nd),tn(t,i)}}function sx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Ud.set(i),n.uniformMatrix3fv(this.addr,!1,Ud),tn(t,i)}}function ox(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Id.set(i),n.uniformMatrix4fv(this.addr,!1,Id),tn(t,i)}}function ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function mx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gl.compareFunction=t.isReversedDepthBuffer()?ru:iu,s=gl):s=yh,t.setTexture2D(e||s,r)}function gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sh,r)}function _x(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bh,r)}function vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mh,r)}function xx(n){switch(n){case 5126:return ex;case 35664:return tx;case 35665:return nx;case 35666:return ix;case 35674:return rx;case 35675:return sx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return cx;case 35668:case 35672:return lx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return hx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return vx}}function yx(n,e){n.uniform1fv(this.addr,e)}function Mx(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function Sx(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function bx(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ex(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tx(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wx(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ax(n,e){n.uniform1iv(this.addr,e)}function Cx(n,e){n.uniform2iv(this.addr,e)}function Rx(n,e){n.uniform3iv(this.addr,e)}function Px(n,e){n.uniform4iv(this.addr,e)}function Lx(n,e){n.uniform1uiv(this.addr,e)}function Dx(n,e){n.uniform2uiv(this.addr,e)}function Ix(n,e){n.uniform3uiv(this.addr,e)}function Ux(n,e){n.uniform4uiv(this.addr,e)}function Nx(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=gl:o=yh;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Fx(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sh,s[o])}function Ox(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bh,s[o])}function kx(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mh,s[o])}function Bx(n){switch(n){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return Ex;case 35675:return Tx;case 35676:return wx;case 5124:case 35670:return Ax;case 35667:case 35671:return Cx;case 35668:case 35672:return Rx;case 35669:case 35673:return Px;case 5125:return Lx;case 36294:return Dx;case 36295:return Ix;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return kx}}class zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xx(t.type)}}class Gx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bx(t.type)}}class Hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function Fd(n,e){n.seq.push(e),n.map[e.id]=e}function Vx(n,e,t){const i=n.name,r=i.length;for(pc.lastIndex=0;;){const s=pc.exec(i),o=pc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Fd(t,l===void 0?new zx(a,n,e):new Gx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Hx(a),Fd(t,f)),t=f}}}class zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Vx(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Od(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Wx=37297;let $x=0;function Xx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const kd=new Ye;function qx(n){ut._getMatrix(kd,ut.workingColorSpace,n);const e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Xx(n.getShaderSource(e),a)}else return s}function Yx(n,e){const t=qx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Kx={[Gf]:"Linear",[Hf]:"Reinhard",[Vf]:"Cineon",[Wf]:"ACESFilmic",[Xf]:"AgX",[qf]:"Neutral",[$f]:"Custom"};function jx(n,e){const t=Kx[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lo=new F;function Zx(){ut.getLuminanceCoefficients(Lo);const n=Lo.x.toFixed(4),e=Lo.y.toFixed(4),t=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Qx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ey(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function As(n){return n!==""}function zd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(ty,iy)}const ny=new Map;function iy(n,e){let t=tt[e];if(t===void 0){const i=ny.get(e);if(i!==void 0)t=tt[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _l(t)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(n){return n.replace(ry,sy)}function sy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const oy={[Uo]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function ay(n){return oy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cy={[wr]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE_UV"};function ly(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const uy={[ls]:"ENVMAP_MODE_REFRACTION"};function dy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fy={[zf]:"ENVMAP_BLENDING_MULTIPLY",[Im]:"ENVMAP_BLENDING_MIX",[Um]:"ENVMAP_BLENDING_ADD"};function hy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fy[n.combine]||"ENVMAP_BLENDING_NONE"}function py(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function my(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ay(t),l=ly(t),u=dy(t),f=hy(t),d=py(t),h=Jx(t),g=Qx(s),v=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`)):(m=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?tt.tonemapping_pars_fragment:"",t.toneMapping!==wi?jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Yx("linearToOutputTexel",t.outputColorSpace),Zx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=_l(o),o=zd(o,t),o=Gd(o,t),a=_l(a),a=zd(a,t),a=Gd(a,t),o=Hd(o),a=Hd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+o,S=y+p+a,x=Od(r,r.VERTEX_SHADER,T),b=Od(r,r.FRAGMENT_SHADER,S);r.attachShader(v,x),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(x)||"",N=r.getShaderInfoLog(b)||"",X=I.trim(),ae=V.trim(),Q=N.trim();let me=!0,ce=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,x,b);else{const fe=Bd(r,x,"vertex"),ne=Bd(r,b,"fragment");gt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+fe+`
`+ne)}else X!==""?We("WebGLProgram: Program Info Log:",X):(ae===""||Q==="")&&(ce=!1);ce&&(P.diagnostics={runnable:me,programLog:X,vertexShader:{log:ae,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(x),r.deleteShader(b),_=new zo(r,v),w=ey(r,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,Wx)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$x++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=b,this}let gy=0;class _y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vy(e),t.set(e,i)),i}}class vy{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}}function xy(n){return n===Ar||n===oa||n===aa}function yy(n,e,t,i,r,s){const o=new sh,a=new _y,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,w,A,P,I,V){const N=P.fog,X=I.geometry,ae=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,me=e.get(_.envMap||ae,Q),ce=me&&me.mapping===ba?me.image.height:null,fe=h[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Re=ne!==void 0?ne.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let vt,Je,nt,oe;if(fe){const pt=xi[fe];vt=pt.vertexShader,Je=pt.fragmentShader}else{vt=_.vertexShader,Je=_.fragmentShader;const pt=a.getVertexShaderStage(_),lt=a.getFragmentShaderStage(_);a.update(_,pt,lt),nt=pt.id,oe=lt.id}const he=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),He=I.isInstancedMesh===!0,Le=I.isBatchedMesh===!0,Qe=!!_.map,Ft=!!_.matcap,Ke=!!me,ct=!!_.aoMap,xt=!!_.lightMap,it=!!_.bumpMap&&_.wireframe===!1,Rt=!!_.normalMap,Vt=!!_.displacementMap,ln=!!_.emissiveMap,Ct=!!_.metalnessMap,Ot=!!_.roughnessMap,W=_.anisotropy>0,Jt=_.clearcoat>0,yt=_.dispersion>0,R=_.retroreflectivity>0,M=_.iridescence>0,Y=_.sheen>0,Z=_.transmission>0,le=W&&!!_.anisotropyMap,k=Jt&&!!_.clearcoatMap,G=Jt&&!!_.clearcoatNormalMap,L=Jt&&!!_.clearcoatRoughnessMap,z=M&&!!_.iridescenceMap,B=M&&!!_.iridescenceThicknessMap,J=Y&&!!_.sheenColorMap,te=Y&&!!_.sheenRoughnessMap,se=!!_.specularMap,_e=!!_.specularColorMap,ye=!!_.specularIntensityMap,Ne=Z&&!!_.transmissionMap,O=Z&&!!_.thicknessMap,ue=!!_.gradientMap,ie=!!_.alphaMap,ve=_.alphaTest>0,Me=!!_.alphaHash,pe=!!_.extensions;let Ue=wi;_.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const De={shaderID:fe,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:Je,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Le,batchingColor:Le&&I._colorsTexture!==null,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Qe,matcap:Ft,envMap:Ke,envMapMode:Ke&&me.mapping,envMapCubeUVHeight:ce,aoMap:ct,lightMap:xt,bumpMap:it,normalMap:Rt,displacementMap:Vt,emissiveMap:ln,normalMapObjectSpace:Rt&&_.normalMapType===Om,normalMapTangentSpace:Rt&&_.normalMapType===pl,packedNormalMap:Rt&&_.normalMapType===pl&&xy(_.normalMap.format),metalnessMap:Ct,roughnessMap:Ot,anisotropy:W,anisotropyMap:le,clearcoat:Jt,clearcoatMap:k,clearcoatNormalMap:G,clearcoatRoughnessMap:L,dispersion:yt,retroreflection:R,iridescence:M,iridescenceMap:z,iridescenceThicknessMap:B,sheen:Y,sheenColorMap:J,sheenRoughnessMap:te,specularMap:se,specularColorMap:_e,specularIntensityMap:ye,transmission:Z,transmissionMap:Ne,thicknessMap:O,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Ls&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:ve,alphaHash:Me,combine:_.combine,mapUv:Qe&&g(_.map.channel),aoMapUv:ct&&g(_.aoMap.channel),lightMapUv:xt&&g(_.lightMap.channel),bumpMapUv:it&&g(_.bumpMap.channel),normalMapUv:Rt&&g(_.normalMap.channel),displacementMapUv:Vt&&g(_.displacementMap.channel),emissiveMapUv:ln&&g(_.emissiveMap.channel),metalnessMapUv:Ct&&g(_.metalnessMap.channel),roughnessMapUv:Ot&&g(_.roughnessMap.channel),anisotropyMapUv:le&&g(_.anisotropyMap.channel),clearcoatMapUv:k&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:G&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:B&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:J&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:te&&g(_.sheenRoughnessMap.channel),specularMapUv:se&&g(_.specularMap.channel),specularColorMapUv:_e&&g(_.specularColorMap.channel),specularIntensityMapUv:ye&&g(_.specularIntensityMap.channel),transmissionMapUv:Ne&&g(_.transmissionMap.channel),thicknessMapUv:O&&g(_.thicknessMap.channel),alphaMapUv:ie&&g(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Rt||W),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(Qe||ie),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&Rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Qe&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:ln&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===jn,flipSided:_.side===Tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)w.push(A),w.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(p(w,_),y(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function T(_){const w=h[_.type];let A;if(w){const P=xi[w];A=k0.clone(P.uniforms)}else A=_.uniforms;return A}function S(_,w){let A=u.get(w);return A!==void 0?++A.usedTimes:(A=new my(n,w,_,r),l.push(A),u.set(w,A)),A}function x(_){if(--_.usedTimes===0){const w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:S,releaseProgram:x,releaseShaderCache:b,programs:l,dispose:C}}function My(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Sy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Wd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $d(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,v,m,p){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},n[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=g,y.materialVariant=o(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function c(d,h,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);const T=a(d,h,g,v,m,p);g.transmission>0?i.push(T):g.transparent===!0?r.push(T):t.push(T)}function l(d,h,g,v,m,p){const y=a(d,h,g,v,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(d,h){t.length>1&&t.sort(d||Sy),i.length>1&&i.sort(h||Wd),r.length>1&&r.sort(h||Wd)}function f(){for(let d=e,h=n.length;d<h;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function by(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $d,n.set(i,[o])):r>=s.length?(o=new $d,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Ty(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wy=0;function Ay(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Cy(n){const e=new Ey,t=Ty(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new Dt,o=new Dt;function a(l){let u=0,f=0,d=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,y=0,T=0,S=0,x=0,b=0,C=0,_=0,w=0,A=0;l.sort(Ay);for(let I=0,V=l.length;I<V;I++){const N=l[I],X=N.color,ae=N.intensity,Q=N.distance;let me=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ar?me=N.shadow.map.texture:me=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=X.r*ae,f+=X.g*ae,d+=X.b*ae;else if(N.isLightProbe){for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(N.sh.coefficients[ce],ae);A++}else if(N.isSunLight){const ce=e.get(N);if(ce.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const fe=N.shadow,ne=t.get(N);ne.shadowIntensity=fe.intensity,ne.shadowBias=fe.bias,ne.shadowNormalBias=fe.normalBias,ne.shadowRadius=fe.radius,ne.shadowMapSize.copy(fe.mapSize).multiply(fe.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=me;const Re=fe.getViewportCount();for(let Ie=0;Ie<Re;Ie++)i.sunShadowMatrix[v+Ie]=fe.getMatrix(Ie),i.sunShadowCascade[v+Ie]=fe._cascadeData[Ie];v+=Re,g++}i.sun[h]=ce,h++}else if(N.isDirectionalLight){const ce=e.get(N);if(ce.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const fe=N.shadow,ne=t.get(N);ne.shadowIntensity=fe.intensity,ne.shadowBias=fe.bias,ne.shadowNormalBias=fe.normalBias,ne.shadowRadius=fe.radius,ne.shadowMapSize=fe.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=me,i.directionalShadowMatrix[m]=N.shadow.matrix,x++}i.directional[m]=ce,m++}else if(N.isSpotLight){const ce=e.get(N);ce.position.setFromMatrixPosition(N.matrixWorld),ce.color.copy(X).multiplyScalar(ae),ce.distance=Q,ce.coneCos=Math.cos(N.angle),ce.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ce.decay=N.decay,i.spot[y]=ce;const fe=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,fe.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[y]=fe.matrix,N.castShadow){const ne=t.get(N);ne.shadowIntensity=fe.intensity,ne.shadowBias=fe.bias,ne.shadowNormalBias=fe.normalBias,ne.shadowRadius=fe.radius,ne.shadowMapSize=fe.mapSize,i.spotShadow[y]=ne,i.spotShadowMap[y]=me,C++}y++}else if(N.isRectAreaLight){const ce=e.get(N);ce.color.copy(X).multiplyScalar(ae),ce.halfWidth.set(N.width*.5,0,0),ce.halfHeight.set(0,N.height*.5,0),i.rectArea[T]=ce,T++}else if(N.isPointLight){const ce=e.get(N);if(ce.color.copy(N.color).multiplyScalar(N.intensity),ce.distance=N.distance,ce.decay=N.decay,N.castShadow){const fe=N.shadow,ne=t.get(N);ne.shadowIntensity=fe.intensity,ne.shadowBias=fe.bias,ne.shadowNormalBias=fe.normalBias,ne.shadowRadius=fe.radius,ne.shadowMapSize=fe.mapSize,ne.shadowCameraNear=fe.camera.near,ne.shadowCameraFar=fe.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=me,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=ce,p++}else if(N.isHemisphereLight){const ce=e.get(N);ce.skyColor.copy(N.color).multiplyScalar(ae),ce.groundColor.copy(N.groundColor).multiplyScalar(ae),i.hemi[S]=ce,S++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.sunLength!==h||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==T||P.hemiLength!==S||P.numSunShadows!==g||P.numDirectionalShadows!==x||P.numPointShadows!==b||P.numSpotShadows!==C||P.numSpotMaps!==_||P.numLightProbes!==A)&&(i.sun.length=h,i.directional.length=m,i.spot.length=y,i.rectArea.length=T,i.point.length=p,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.directionalShadowMatrix.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,P.sunLength=h,P.directionalLength=m,P.pointLength=p,P.spotLength=y,P.rectAreaLength=T,P.hemiLength=S,P.numSunShadows=g,P.numDirectionalShadows=x,P.numPointShadows=b,P.numSpotShadows=C,P.numSpotMaps=_,P.numLightProbes=A,i.version=wy++)}function c(l,u){let f=0,d=0,h=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){const S=l[y];if(S.isSunLight){const x=i.sun[f];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),d++}else if(S.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Xd(n){const e=new Cy(n),t=[],i=[],r=[];function s(d){f.camera=d,t.length=0,i.length=0,r.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Ry(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Xd(n),e.set(r,[a])):s>=o.length?(a=new Xd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
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
}`,Dy=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Iy=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],qd=new Dt,Es=new F,mc=new F;function Uy(n,e,t){let i=new au;const r=new Xe,s=new Xe,o=new Nt,a=new H0,c=new V0,l={},u=t.maxTextureSize,f={[Tr]:Tn,[Tn]:Tr,[jn]:jn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Py,fragmentShader:Ly}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let p=this.type;this.render=function(b,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===pm&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Uo);const w=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Bi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=p!==this.type;V&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(X=>X.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,X=b.length;N<X;N++){const ae=b[N],Q=ae.shadow;if(Q===void 0){We("WebGLShadowMap:",ae,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const me=Q.getFrameExtents();r.multiply(me),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,Q.mapSize.y=s.y));const ce=n.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ce,Q.map===null||V===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ws){if(ae.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new hi(r.x,r.y,{format:Ar,type:Ri,minFilter:gn,magFilter:gn,generateMipmaps:!1}),Q.map.texture.name=ae.name+".shadowMap",Q.map.depthTexture=new Ws(r.x,r.y,Mi),Q.map.depthTexture.name=ae.name+".shadowMapDepth",Q.map.depthTexture.format=Vi,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=an,Q.map.depthTexture.magFilter=an}else ae.isPointLight?(Q.map=new xh(r.x),Q.map.depthTexture=new F0(r.x,Ci)):(Q.map=new hi(r.x,r.y),Q.map.depthTexture=new Ws(r.x,r.y,Ci)),Q.map.depthTexture.name=ae.name+".shadowMap",Q.map.depthTexture.format=Vi,this.type===Uo?(Q.map.depthTexture.compareFunction=ce?ru:iu,Q.map.depthTexture.minFilter=gn,Q.map.depthTexture.magFilter=gn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=an,Q.map.depthTexture.magFilter=an);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==r.x||Q.map.height!==r.y)&&Q.map.setSize(r.x,r.y);const fe=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();ae.isPointLight!==!0&&Q.updateMatrices(ae,_);for(let ne=0;ne<fe;ne++){const Re=Q.getCamera(ne);if(ae.isPointLight){const Ie=Q.camera,vt=Q.matrix,Je=ae.distance||Ie.far;Je!==Ie.far&&(Ie.far=Je,Ie.updateProjectionMatrix()),Es.setFromMatrixPosition(ae.matrixWorld),Ie.position.copy(Es),mc.copy(Ie.position),mc.add(Dy[ne]),Ie.up.copy(Iy[ne]),Ie.lookAt(mc),Ie.updateMatrixWorld(),vt.makeTranslation(-Es.x,-Es.y,-Es.z),qd.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(qd,Ie.coordinateSystem,Ie.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)n.setRenderTarget(Q.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(Q.map),n.clear());const Ie=Q.getViewport(ne);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),I.viewport(o)}i=Q.getFrustum(ne),S(C,_,Re,ae,this.type)}Q.isPointLightShadow!==!0&&this.type===ws&&y(Q,_),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,A,P)};function y(b,C){const _=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new hi(r.x,r.y,{format:Ar,type:Ri}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,_,d,v,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,_,h,v,null)}function T(b,C,_,w){let A=null;const P=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)A=P;else if(A=_.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=A.uuid,V=C.uuid;let N=l[I];N===void 0&&(N={},l[I]=N);let X=N[V];X===void 0&&(X=A.clone(),N[V]=X,C.addEventListener("dispose",x)),A=X}if(A.visible=C.visible,A.wireframe=C.wireframe,w===ws?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:f[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=n.properties.get(A);I.light=_}return A}function S(b,C,_,w,A){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===ws)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const V=e.update(b),N=b.material;if(Array.isArray(N)){const X=V.groups;for(let ae=0,Q=X.length;ae<Q;ae++){const me=X[ae],ce=N[me.materialIndex];if(ce&&ce.visible){const fe=T(b,ce,w,A);b.onBeforeShadow(n,b,C,_,V,fe,me),n.renderBufferDirect(_,null,V,fe,b,me),b.onAfterShadow(n,b,C,_,V,fe,me)}}}else if(N.visible){const X=T(b,N,w,A);b.onBeforeShadow(n,b,C,_,V,X,null),n.renderBufferDirect(_,null,V,X,b,null),b.onAfterShadow(n,b,C,_,V,X,null)}}const I=b.children;for(let V=0,N=I.length;V<N;V++)S(I[V],C,_,w,A)}function x(b){b.target.removeEventListener("dispose",x);for(const _ in l){const w=l[_],A=b.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function Ny(n,e){function t(){let O=!1;const ue=new Nt;let ie=null;const ve=new Nt(0,0,0,0);return{setMask:function(Me){ie!==Me&&!O&&(n.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){O=Me},setClear:function(Me,pe,Ue,De,pt){pt===!0&&(Me*=De,pe*=De,Ue*=De),ue.set(Me,pe,Ue,De),ve.equals(ue)===!1&&(n.clearColor(Me,pe,Ue,De),ve.copy(ue))},reset:function(){O=!1,ie=null,ve.set(-1,0,0,0)}}}function i(){let O=!1,ue=!1,ie=null,ve=null,Me=null;return{setReversed:function(pe){if(ue!==pe){const Ue=e.get("EXT_clip_control");pe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ue=pe;const De=Me;Me=null,this.setClear(De)}},getReversed:function(){return ue},setTest:function(pe){pe?he(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(pe){ie!==pe&&!O&&(n.depthMask(pe),ie=pe)},setFunc:function(pe){if(ue&&(pe=Ym[pe]),ve!==pe){switch(pe){case Pc:n.depthFunc(n.NEVER);break;case Lc:n.depthFunc(n.ALWAYS);break;case Dc:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Ic:n.depthFunc(n.EQUAL);break;case Uc:n.depthFunc(n.GEQUAL);break;case Nc:n.depthFunc(n.GREATER);break;case Fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=pe}},setLocked:function(pe){O=pe},setClear:function(pe){Me!==pe&&(Me=pe,ue&&(pe=1-pe),n.clearDepth(pe))},reset:function(){O=!1,ie=null,ve=null,Me=null,ue=!1}}}function r(){let O=!1,ue=null,ie=null,ve=null,Me=null,pe=null,Ue=null,De=null,pt=null;return{setTest:function(lt){O||(lt?he(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!O&&(n.stencilMask(lt),ue=lt)},setFunc:function(lt,Qt,Gt){(ie!==lt||ve!==Qt||Me!==Gt)&&(n.stencilFunc(lt,Qt,Gt),ie=lt,ve=Qt,Me=Gt)},setOp:function(lt,Qt,Gt){(pe!==lt||Ue!==Qt||De!==Gt)&&(n.stencilOp(lt,Qt,Gt),pe=lt,Ue=Qt,De=Gt)},setLocked:function(lt){O=lt},setClear:function(lt){pt!==lt&&(n.clearStencil(lt),pt=lt)},reset:function(){O=!1,ue=null,ie=null,ve=null,Me=null,pe=null,Ue=null,De=null,pt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,y=null,T=null,S=null,x=null,b=null,C=null,_=new $e(0,0,0),w=0,A=!1,P=null,I=null,V=null,N=null,X=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,me=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ce)[1]),Q=me>=1):ce.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),Q=me>=2);let fe=null,ne={};const Re=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),vt=new Nt().fromArray(Re),Je=new Nt().fromArray(Ie);function nt(O,ue,ie,ve){const Me=new Uint8Array(4),pe=n.createTexture();n.bindTexture(O,pe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<ie;Ue++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ue+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return pe}const oe={};oe[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Bs),it(!1),Rt(Vu),he(n.CULL_FACE),ct(Bi);function he(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Te(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function He(O,ue){return d[O]!==ue?(n.bindFramebuffer(O,ue),d[O]=ue,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(O,ue){let ie=g,ve=!1;if(O){ie=h.get(ue),ie===void 0&&(ie=[],h.set(ue,ie));const Me=O.textures;if(ie.length!==Me.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ue=Me.length;pe<Ue;pe++)ie[pe]=n.COLOR_ATTACHMENT0+pe;ie.length=Me.length,ve=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ve=!0);ve&&n.drawBuffers(ie)}function Qe(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const Ft={[es]:n.FUNC_ADD,[gm]:n.FUNC_SUBTRACT,[_m]:n.FUNC_REVERSE_SUBTRACT};Ft[vm]=n.MIN,Ft[xm]=n.MAX;const Ke={[ym]:n.ZERO,[Mm]:n.ONE,[Sm]:n.SRC_COLOR,[kf]:n.SRC_ALPHA,[Cm]:n.SRC_ALPHA_SATURATE,[wm]:n.DST_COLOR,[Em]:n.DST_ALPHA,[bm]:n.ONE_MINUS_SRC_COLOR,[Bf]:n.ONE_MINUS_SRC_ALPHA,[Am]:n.ONE_MINUS_DST_COLOR,[Tm]:n.ONE_MINUS_DST_ALPHA,[Rm]:n.CONSTANT_COLOR,[Pm]:n.ONE_MINUS_CONSTANT_COLOR,[Lm]:n.CONSTANT_ALPHA,[Dm]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(O,ue,ie,ve,Me,pe,Ue,De,pt,lt){if(O===Bi){m===!0&&(Te(n.BLEND),m=!1);return}if(m===!1&&(he(n.BLEND),m=!0),O!==mm){if(O!==p||lt!==A){if((y!==es||x!==es)&&(n.blendEquation(n.FUNC_ADD),y=es,x=es),lt)switch(O){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case on:n.blendFunc(n.ONE,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $u:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case on:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wu:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $u:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",O);break}T=null,S=null,b=null,C=null,_.set(0,0,0),w=0,p=O,A=lt}return}Me=Me||ue,pe=pe||ie,Ue=Ue||ve,(ue!==y||Me!==x)&&(n.blendEquationSeparate(Ft[ue],Ft[Me]),y=ue,x=Me),(ie!==T||ve!==S||pe!==b||Ue!==C)&&(n.blendFuncSeparate(Ke[ie],Ke[ve],Ke[pe],Ke[Ue]),T=ie,S=ve,b=pe,C=Ue),(De.equals(_)===!1||pt!==w)&&(n.blendColor(De.r,De.g,De.b,pt),_.copy(De),w=pt),p=O,A=!1}function xt(O,ue){O.side===jn?Te(n.CULL_FACE):he(n.CULL_FACE);let ie=O.side===Tn;ue&&(ie=!ie),it(ie),O.blending===Ls&&O.transparent===!1?ct(Bi):ct(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const ve=O.stencilWrite;a.setTest(ve),ve&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ln(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){P!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),P=O)}function Rt(O){O!==fm?(he(n.CULL_FACE),O!==I&&(O===Vu?n.cullFace(n.BACK):O===hm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),I=O}function Vt(O){O!==V&&(Q&&n.lineWidth(O),V=O)}function ln(O,ue,ie){O?(he(n.POLYGON_OFFSET_FILL),(N!==ue||X!==ie)&&(N=ue,X=ie,o.getReversed()&&(ue=-ue),n.polygonOffset(ue,ie))):Te(n.POLYGON_OFFSET_FILL)}function Ct(O){O?he(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Ot(O){O===void 0&&(O=n.TEXTURE0+ae-1),fe!==O&&(n.activeTexture(O),fe=O)}function W(O,ue,ie){ie===void 0&&(fe===null?ie=n.TEXTURE0+ae-1:ie=fe);let ve=ne[ie];ve===void 0&&(ve={type:void 0,texture:void 0},ne[ie]=ve),(ve.type!==O||ve.texture!==ue)&&(fe!==ie&&(n.activeTexture(ie),fe=ie),n.bindTexture(O,ue||oe[O]),ve.type=O,ve.texture=ue)}function Jt(){const O=ne[fe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function yt(){try{n.compressedTexImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function M(){try{n.texSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function Y(){try{n.texSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function k(){try{n.texStorage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function G(){try{n.texStorage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function L(){try{n.texImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function z(){try{n.texImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function B(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function J(O,ue){f[O]!==ue&&(n.pixelStorei(O,ue),f[O]=ue)}function te(O){vt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),vt.copy(O))}function se(O){Je.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Je.copy(O))}function _e(O,ue){let ie=l.get(ue);ie===void 0&&(ie=new WeakMap,l.set(ue,ie));let ve=ie.get(O);ve===void 0&&(ve=n.getUniformBlockIndex(ue,O.name),ie.set(O,ve))}function ye(O,ue){const ve=l.get(ue).get(O);c.get(ue)!==ve&&(n.uniformBlockBinding(ue,ve,O.__bindingPointIndex),c.set(ue,ve))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},fe=null,ne={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,y=null,T=null,S=null,x=null,b=null,C=null,_=new $e(0,0,0),w=0,A=!1,P=null,I=null,V=null,N=null,X=null,vt.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Te,bindFramebuffer:He,drawBuffers:Le,useProgram:Qe,setBlending:ct,setMaterial:xt,setFlipSided:it,setCullFace:Rt,setLineWidth:Vt,setPolygonOffset:ln,setScissorTest:Ct,activeTexture:Ot,bindTexture:W,unbindTexture:Jt,compressedTexImage2D:yt,compressedTexImage3D:R,texImage2D:L,texImage3D:z,pixelStorei:J,getParameter:B,updateUBOMapping:_e,uniformBlockBinding:ye,texStorage2D:k,texStorage3D:G,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:le,scissor:te,viewport:se,reset:Ne}}function Fy(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return g?new OffscreenCanvas(R,M):ua("canvas")}function m(R,M,Y){let Z=1;const le=yt(R);if((le.width>Y||le.height>Y)&&(Z=Y/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const k=Math.floor(Z*le.width),G=Math.floor(Z*le.height);d===void 0&&(d=v(k,G));const L=M?v(k,G):d;return L.width=k,L.height=G,L.getContext("2d").drawImage(R,0,0,k,G),We("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+k+"x"+G+")."),L}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function p(R){return R.generateMipmaps}function y(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,M,Y,Z,le,k=!1){if(R!==null){if(n[R]!==void 0)return n[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let G;Z&&(G=e.get("EXT_texture_norm16"),G||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=M;if(M===n.RED&&(Y===n.FLOAT&&(L=n.R32F),Y===n.HALF_FLOAT&&(L=n.R16F),Y===n.UNSIGNED_BYTE&&(L=n.R8),Y===n.UNSIGNED_SHORT&&G&&(L=G.R16_EXT),Y===n.SHORT&&G&&(L=G.R16_SNORM_EXT)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(L=n.R8UI),Y===n.UNSIGNED_SHORT&&(L=n.R16UI),Y===n.UNSIGNED_INT&&(L=n.R32UI),Y===n.BYTE&&(L=n.R8I),Y===n.SHORT&&(L=n.R16I),Y===n.INT&&(L=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(L=n.RG32F),Y===n.HALF_FLOAT&&(L=n.RG16F),Y===n.UNSIGNED_BYTE&&(L=n.RG8),Y===n.UNSIGNED_SHORT&&G&&(L=G.RG16_EXT),Y===n.SHORT&&G&&(L=G.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(L=n.RG8UI),Y===n.UNSIGNED_SHORT&&(L=n.RG16UI),Y===n.UNSIGNED_INT&&(L=n.RG32UI),Y===n.BYTE&&(L=n.RG8I),Y===n.SHORT&&(L=n.RG16I),Y===n.INT&&(L=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(L=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(L=n.RGB16UI),Y===n.UNSIGNED_INT&&(L=n.RGB32UI),Y===n.BYTE&&(L=n.RGB8I),Y===n.SHORT&&(L=n.RGB16I),Y===n.INT&&(L=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(L=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(L=n.RGBA16UI),Y===n.UNSIGNED_INT&&(L=n.RGBA32UI),Y===n.BYTE&&(L=n.RGBA8I),Y===n.SHORT&&(L=n.RGBA16I),Y===n.INT&&(L=n.RGBA32I)),M===n.RGB&&(Y===n.UNSIGNED_SHORT&&G&&(L=G.RGB16_EXT),Y===n.SHORT&&G&&(L=G.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(L=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(L=n.R11F_G11F_B10F)),M===n.RGBA){const z=k?la:ut.getTransfer(le);Y===n.FLOAT&&(L=n.RGBA32F),Y===n.HALF_FLOAT&&(L=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(L=z===Tt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&G&&(L=G.RGBA16_EXT),Y===n.SHORT&&G&&(L=G.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return(L===n.R16F||L===n.R32F||L===n.RG16F||L===n.RG32F||L===n.RGBA16F||L===n.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function x(R,M){let Y;return R?M===null||M===Ci||M===Gs?Y=n.DEPTH24_STENCIL8:M===Mi?Y=n.DEPTH32F_STENCIL8:M===zs&&(Y=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ci||M===Gs?Y=n.DEPTH_COMPONENT24:M===Mi?Y=n.DEPTH_COMPONENT32F:M===zs&&(Y=n.DEPTH_COMPONENT16),Y}function b(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),w(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function _(R){const M=R.target;M.removeEventListener("dispose",_),P(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const Y=R.source,Z=h.get(Y);if(Z){const le=Z[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&A(R),Object.keys(Z).length===0&&h.delete(Y)}i.remove(R)}function A(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const Y=R.source,Z=h.get(Y);delete Z[M.__cacheKey],o.memory.textures--}function P(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let le=0;le<M.__webglFramebuffer[Z].length;le++)n.deleteFramebuffer(M.__webglFramebuffer[Z][le]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=R.textures;for(let Z=0,le=Y.length;Z<le;Z++){const k=i.get(Y[Z]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(Y[Z])}i.remove(R)}let I=0;function V(){I=0}function N(){return I}function X(R){I=R}function ae(){const R=I;return R>=r.maxTextures&&We("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function Q(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function me(R,M){const Y=i.get(R);if(R.isVideoTexture&&W(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){const Z=R.image;if(Z===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Y,R,M);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function ce(R,M){const Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Te(Y,R,M);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function fe(R,M){const Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Te(Y,R,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function ne(R,M){const Y=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Y.__version!==R.version){He(Y,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}const Re={[sa]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},Ie={[an]:n.NEAREST,[Nm]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},vt={[Bm]:n.NEVER,[Wm]:n.ALWAYS,[zm]:n.LESS,[iu]:n.LEQUAL,[Gm]:n.EQUAL,[ru]:n.GEQUAL,[Hm]:n.GREATER,[Vm]:n.NOTEQUAL};function Je(R,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===ka||M.magFilter===no||M.magFilter===yr||M.minFilter===gn||M.minFilter===ka||M.minFilter===no||M.minFilter===yr)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Re[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Re[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Re[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ie[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ie[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===an||M.minFilter!==no&&M.minFilter!==yr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function nt(R,M){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let le=h.get(Z);le===void 0&&(le={},h.set(Z,le));const k=Q(M);if(k!==R.__cacheKey){le[k]===void 0&&(le[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),le[k].usedTimes++;const G=le[R.__cacheKey];G!==void 0&&(le[R.__cacheKey].usedTimes--,G.usedTimes===0&&A(M)),R.__cacheKey=k,R.__webglTexture=le[k].texture}return Y}function oe(R,M,Y){return Math.floor(Math.floor(R/Y)/M)}function he(R,M,Y,Z){const k=R.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Y,Z,M.data);else{k.sort((J,te)=>J.start-te.start);let G=0;for(let J=1;J<k.length;J++){const te=k[G],se=k[J],_e=te.start+te.count,ye=oe(se.start,M.width,4),Ne=oe(te.start,M.width,4);se.start<=_e+1&&ye===Ne&&oe(se.start+se.count-1,M.width,4)===ye?te.count=Math.max(te.count,se.start+se.count-te.start):(++G,k[G]=se)}k.length=G+1;const L=t.getParameter(n.UNPACK_ROW_LENGTH),z=t.getParameter(n.UNPACK_SKIP_PIXELS),B=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let J=0,te=k.length;J<te;J++){const se=k[J],_e=Math.floor(se.start/4),ye=Math.ceil(se.count/4),Ne=_e%M.width,O=Math.floor(_e/M.width),ue=ye,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ne,O,ue,ie,Y,Z,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,L),t.pixelStorei(n.UNPACK_SKIP_PIXELS,z),t.pixelStorei(n.UNPACK_SKIP_ROWS,B)}}function Te(R,M,Y){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const le=nt(R,M),k=M.source;t.bindTexture(Z,R.__webglTexture,n.TEXTURE0+Y);const G=i.get(k);if(k.version!==G.__version||le===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ie=ut.getPrimaries(ut.workingColorSpace),ve=M.colorSpace===tr?null:ut.getPrimaries(M.colorSpace),Me=M.colorSpace===tr||ie===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let z=m(M.image,!1,r.maxTextureSize);z=Jt(M,z);const B=s.convert(M.format,M.colorSpace),J=s.convert(M.type);let te=S(M.internalFormat,B,J,M.normalized,M.colorSpace,M.isVideoTexture);Je(Z,M);let se;const _e=M.mipmaps,ye=M.isVideoTexture!==!0,Ne=G.__version===void 0||le===!0,O=k.dataReady,ue=b(M,z);if(M.isDepthTexture)te=x(M.format===Mr,M.type),Ne&&(ye?t.texStorage2D(n.TEXTURE_2D,1,te,z.width,z.height):t.texImage2D(n.TEXTURE_2D,0,te,z.width,z.height,0,B,J,null));else if(M.isDataTexture)if(_e.length>0){ye&&Ne&&t.texStorage2D(n.TEXTURE_2D,ue,te,_e[0].width,_e[0].height);for(let ie=0,ve=_e.length;ie<ve;ie++)se=_e[ie],ye?O&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,se.width,se.height,B,J,se.data):t.texImage2D(n.TEXTURE_2D,ie,te,se.width,se.height,0,B,J,se.data);M.generateMipmaps=!1}else ye?(Ne&&t.texStorage2D(n.TEXTURE_2D,ue,te,z.width,z.height),O&&he(M,z,B,J)):t.texImage2D(n.TEXTURE_2D,0,te,z.width,z.height,0,B,J,z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ye&&Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,te,_e[0].width,_e[0].height,z.depth);for(let ie=0,ve=_e.length;ie<ve;ie++)if(se=_e[ie],M.format!==li)if(B!==null)if(ye){if(O)if(M.layerUpdates.size>0){const Me=Td(se.width,se.height,M.format,M.type);for(const pe of M.layerUpdates){const Ue=se.data.subarray(pe*Me/se.data.BYTES_PER_ELEMENT,(pe+1)*Me/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,pe,se.width,se.height,1,B,Ue)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,se.width,se.height,z.depth,B,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,te,se.width,se.height,z.depth,0,se.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,se.width,se.height,z.depth,B,J,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,te,se.width,se.height,z.depth,0,B,J,se.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ye&&Ne&&t.texStorage2D(n.TEXTURE_2D,ue,te,_e[0].width,_e[0].height);for(let ie=0,ve=_e.length;ie<ve;ie++)se=_e[ie],M.format!==li?B!==null?ye?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,se.width,se.height,B,se.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,te,se.width,se.height,0,se.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?O&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,se.width,se.height,B,J,se.data):t.texImage2D(n.TEXTURE_2D,ie,te,se.width,se.height,0,B,J,se.data)}else if(M.isDataArrayTexture)if(ye){if(Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,te,z.width,z.height,z.depth),O)if(M.layerUpdates.size>0){const ie=Td(z.width,z.height,M.format,M.type);for(const ve of M.layerUpdates){const Me=z.data.subarray(ve*ie/z.data.BYTES_PER_ELEMENT,(ve+1)*ie/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,z.width,z.height,1,B,J,Me)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,B,J,z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,z.width,z.height,z.depth,0,B,J,z.data);else if(M.isData3DTexture)ye?(Ne&&t.texStorage3D(n.TEXTURE_3D,ue,te,z.width,z.height,z.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,B,J,z.data)):t.texImage3D(n.TEXTURE_3D,0,te,z.width,z.height,z.depth,0,B,J,z.data);else if(M.isFramebufferTexture){if(Ne)if(ye)t.texStorage2D(n.TEXTURE_2D,ue,te,z.width,z.height);else{let ie=z.width,ve=z.height;for(let Me=0;Me<ue;Me++)t.texImage2D(n.TEXTURE_2D,Me,te,ie,ve,0,B,J,null),ie>>=1,ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),z.parentNode!==ie){ie.appendChild(z),f.add(M),ie.onpaint=ve=>{const Me=ve.changedElements;for(const pe of f)Me.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,z);else{const Me=n.RGBA,pe=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Me,pe,Ue,z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_e.length>0){if(ye&&Ne){const ie=yt(_e[0]);t.texStorage2D(n.TEXTURE_2D,ue,te,ie.width,ie.height)}for(let ie=0,ve=_e.length;ie<ve;ie++)se=_e[ie],ye?O&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,B,J,se):t.texImage2D(n.TEXTURE_2D,ie,te,B,J,se);M.generateMipmaps=!1}else if(ye){if(Ne){const ie=yt(z);t.texStorage2D(n.TEXTURE_2D,ue,te,ie.width,ie.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,B,J,z)}else t.texImage2D(n.TEXTURE_2D,0,te,B,J,z);p(M)&&y(Z),G.__version=k.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function He(R,M,Y){if(M.image.length!==6)return;const Z=nt(R,M),le=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Y);const k=i.get(le);if(le.version!==k.__version||Z===!0){t.activeTexture(n.TEXTURE0+Y);const G=ut.getPrimaries(ut.workingColorSpace),L=M.colorSpace===tr?null:ut.getPrimaries(M.colorSpace),z=M.colorSpace===tr||G===L?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const B=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,te=[];for(let pe=0;pe<6;pe++)!B&&!J?te[pe]=m(M.image[pe],!0,r.maxCubemapSize):te[pe]=J?M.image[pe].image:M.image[pe],te[pe]=Jt(M,te[pe]);const se=te[0],_e=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),Ne=S(M.internalFormat,_e,ye,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,ue=k.__version===void 0||Z===!0,ie=le.dataReady;let ve=b(M,se);Je(n.TEXTURE_CUBE_MAP,M);let Me;if(B){O&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ne,se.width,se.height);for(let pe=0;pe<6;pe++){Me=te[pe].mipmaps;for(let Ue=0;Ue<Me.length;Ue++){const De=Me[Ue];M.format!==li?_e!==null?O?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,De.width,De.height,_e,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Ne,De.width,De.height,0,De.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,De.width,De.height,_e,ye,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Ne,De.width,De.height,0,_e,ye,De.data)}}}else{if(Me=M.mipmaps,O&&ue){Me.length>0&&ve++;const pe=yt(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ne,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(J){O?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,te[pe].width,te[pe].height,_e,ye,te[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ne,te[pe].width,te[pe].height,0,_e,ye,te[pe].data);for(let Ue=0;Ue<Me.length;Ue++){const pt=Me[Ue].image[pe].image;O?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,pt.width,pt.height,_e,ye,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Ne,pt.width,pt.height,0,_e,ye,pt.data)}}else{O?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,_e,ye,te[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ne,_e,ye,te[pe]);for(let Ue=0;Ue<Me.length;Ue++){const De=Me[Ue];O?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,_e,ye,De.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Ne,_e,ye,De.image[pe])}}}p(M)&&y(n.TEXTURE_CUBE_MAP),k.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Le(R,M,Y,Z,le,k){const G=s.convert(Y.format,Y.colorSpace),L=s.convert(Y.type),z=S(Y.internalFormat,G,L,Y.normalized,Y.colorSpace),B=i.get(M),J=i.get(Y);if(J.__renderTarget=M,!B.__hasExternalTextures){const te=Math.max(1,M.width>>k),se=Math.max(1,M.height>>k);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,k,z,te,se,M.depth,0,G,L,null):t.texImage2D(le,k,z,te,se,0,G,L,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,le,J.__webglTexture,0,Ct(M)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,le,J.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(R,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,k=x(M.stencilBuffer,le),G=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ot(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(M),k,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(M),k,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,k,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,R)}else{const Z=M.textures;for(let le=0;le<Z.length;le++){const k=Z[le],G=s.convert(k.format,k.colorSpace),L=s.convert(k.type),z=S(k.internalFormat,G,L,k.normalized,k.colorSpace);Ot(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(M),z,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(M),z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,z,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(R,M,Y){const Z=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(M.depthTexture);if(le.__renderTarget=M,(!le.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(le.__webglInit===void 0&&(le.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),Je(n.TEXTURE_CUBE_MAP,M.depthTexture);const B=s.convert(M.depthTexture.format),J=s.convert(M.depthTexture.type);let te;M.depthTexture.format===Vi?te=n.DEPTH_COMPONENT24:M.depthTexture.format===Mr&&(te=n.DEPTH24_STENCIL8);for(let se=0;se<6;se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,te,M.width,M.height,0,B,J,null)}}else me(M.depthTexture,0);const k=le.__webglTexture,G=Ct(M),L=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,z=M.depthTexture.format===Mr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Vi)Ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,L,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,z,L,k,0);else if(M.depthTexture.format===Mr)Ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,L,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,z,L,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(R){const M=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)Ft(M.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Ft(M.__webglFramebuffer[0],R,0):Ft(M.__webglFramebuffer,R,0)}else if(Y){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),Qe(M.__webglDepthbuffer[Z],R,!1);else{const le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,k)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Qe(M.__webglDepthbuffer,R,!1);else{const le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(R,M,Y){const Z=i.get(R);M!==void 0&&Le(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Ke(R)}function xt(R){const M=R.texture,Y=i.get(R),Z=i.get(M);R.addEventListener("dispose",_);const le=R.textures,k=R.isWebGLCubeRenderTarget===!0,G=le.length>1;if(G||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,o.memory.textures++),k){Y.__webglFramebuffer=[];for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[L]=[];for(let z=0;z<M.mipmaps.length;z++)Y.__webglFramebuffer[L][z]=n.createFramebuffer()}else Y.__webglFramebuffer[L]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let L=0;L<M.mipmaps.length;L++)Y.__webglFramebuffer[L]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(G)for(let L=0,z=le.length;L<z;L++){const B=i.get(le[L]);B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ot(R)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let L=0;L<le.length;L++){const z=le[L];Y.__webglColorRenderbuffer[L]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[L]);const B=s.convert(z.format,z.colorSpace),J=s.convert(z.type),te=S(z.internalFormat,B,J,z.normalized,z.colorSpace,R.isXRRenderTarget===!0),se=Ct(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,Y.__webglColorRenderbuffer[L])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Je(n.TEXTURE_CUBE_MAP,M);for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0)for(let z=0;z<M.mipmaps.length;z++)Le(Y.__webglFramebuffer[L][z],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,z);else Le(Y.__webglFramebuffer[L],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);p(M)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){for(let L=0,z=le.length;L<z;L++){const B=le[L],J=i.get(B);let te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),Je(te,B),Le(Y.__webglFramebuffer,R,B,n.COLOR_ATTACHMENT0+L,te,0),p(B)&&y(te)}t.unbindTexture()}else{let L=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(L=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(L,Z.__webglTexture),Je(L,M),M.mipmaps&&M.mipmaps.length>0)for(let z=0;z<M.mipmaps.length;z++)Le(Y.__webglFramebuffer[z],R,M,n.COLOR_ATTACHMENT0,L,z);else Le(Y.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,L,0);p(M)&&y(L),t.unbindTexture()}R.depthBuffer&&Ke(R)}function it(R){const M=R.textures;for(let Y=0,Z=M.length;Y<Z;Y++){const le=M[Y];if(p(le)){const k=T(R),G=i.get(le).__webglTexture;t.bindTexture(k,G),y(k),t.unbindTexture()}}}const Rt=[],Vt=[];function ln(R){if(R.samples>0){if(Ot(R)===!1){const M=R.textures,Y=R.width,Z=R.height;let le=n.COLOR_BUFFER_BIT;const k=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=i.get(R),L=M.length>1;if(L)for(let B=0;B<M.length;B++)t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);const z=R.texture.mipmaps;z&&z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let B=0;B<M.length;B++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),L){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,G.__webglColorRenderbuffer[B]);const J=i.get(M[B]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,le,n.NEAREST),c===!0&&(Rt.length=0,Vt.length=0,Rt.push(n.COLOR_ATTACHMENT0+B),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Rt.push(k),Vt.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Vt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),L)for(let B=0;B<M.length;B++){t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,G.__webglColorRenderbuffer[B]);const J=i.get(M[B]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ct(R){return Math.min(r.maxSamples,R.samples)}function Ot(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Jt(R,M){const Y=R.colorSpace,Z=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==ca&&Y!==tr&&(ut.getTransfer(Y)===Tt?(Z!==li||le!==zn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",Y)),M}function yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=ae,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=X,this.setTexture2D=me,this.setTexture2DArray=ce,this.setTexture3D=fe,this.setTextureCube=ne,this.rebindTextures=ct,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Oy(n,e){function t(i,r=tr){let s;const o=ut.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kf)return n.BYTE;if(i===jf)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===Qf)return n.ALPHA;if(i===eh)return n.RGB;if(i===li)return n.RGBA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===eu)return n.RED_INTEGER;if(i===Ar)return n.RG;if(i===tu)return n.RG_INTEGER;if(i===nu)return n.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===ko)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kc||i===Bc||i===zc||i===Gc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hc||i===Vc||i===Wc||i===$c||i===Xc||i===oa||i===qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hc||i===Vc)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$c)return s.COMPRESSED_R11_EAC;if(i===Xc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return s.COMPRESSED_RG11_EAC;if(i===qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yc||i===Kc||i===jc||i===Zc||i===Jc||i===Qc||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===ll||i===ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===fl||i===aa||i===hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
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

}`;class zy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:ky,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gy extends Pr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new zy,p={},y=t.getContextAttributes();let T=null,S=null;const x=[],b=[],C=new Xe;let _=null,w=null;const A=new Bn;A.viewport=new Nt;const P=new Bn;P.viewport=new Nt;const I=[A,P],V=new Y0;let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let he=x[oe];return he===void 0&&(he=new $a,x[oe]=he),he.getTargetRaySpace()},this.getControllerGrip=function(oe){let he=x[oe];return he===void 0&&(he=new $a,x[oe]=he),he.getGripSpace()},this.getHand=function(oe){let he=x[oe];return he===void 0&&(he=new $a,x[oe]=he),he.getHandSpace()};function ae(oe){const he=b.indexOf(oe.inputSource);if(he===-1)return;const Te=x[he];Te!==void 0&&(Te.update(oe.inputSource,oe.frame,l||o),Te.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",me);for(let oe=0;oe<x.length;oe++){const he=b[oe];he!==null&&(b[oe]=null,x[oe].disconnect(he))}N=null,X=null,m.reset();for(const oe in p)delete p[oe];if(e.setRenderTarget(T),h=null,d=null,f=null,r=null,S=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),w!==null){const oe=w.camera;oe.fov=w.fov,oe.zoom=w.zoom,oe.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(oe){l=oe},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,He=null,Le=null;y.depth&&(Le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?Mr:Vi,He=y.stencil?Gs:Ci);const Qe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new hi(d.textureWidth,d.textureHeight,{format:li,type:zn,depthTexture:new Ws(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new hi(h.framebufferWidth,h.framebufferHeight,{format:li,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(oe){for(let he=0;he<oe.removed.length;he++){const Te=oe.removed[he],He=b.indexOf(Te);He>=0&&(b[He]=null,x[He].disconnect(Te))}for(let he=0;he<oe.added.length;he++){const Te=oe.added[he];let He=b.indexOf(Te);if(He===-1){for(let Qe=0;Qe<x.length;Qe++)if(Qe>=b.length){b.push(Te),He=Qe;break}else if(b[Qe]===null){b[Qe]=Te,He=Qe;break}if(He===-1)break}const Le=x[He];Le&&Le.connect(Te)}}const ce=new F,fe=new F;function ne(oe,he,Te){ce.setFromMatrixPosition(he.matrixWorld),fe.setFromMatrixPosition(Te.matrixWorld);const He=ce.distanceTo(fe),Le=he.projectionMatrix.elements,Qe=Te.projectionMatrix.elements,Ft=Le[14]/(Le[10]-1),Ke=Le[14]/(Le[10]+1),ct=(Le[9]+1)/Le[5],xt=(Le[9]-1)/Le[5],it=(Le[8]-1)/Le[0],Rt=(Qe[8]+1)/Qe[0],Vt=Ft*it,ln=Ft*Rt,Ct=He/(-it+Rt),Ot=Ct*-it;if(he.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ot),oe.translateZ(Ct),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Le[10]===-1)oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const W=Ft+Ct,Jt=Ke+Ct,yt=Vt-Ot,R=ln+(He-Ot),M=ct*Ke/Jt*W,Y=xt*Ke/Jt*W;oe.projectionMatrix.makePerspective(yt,R,M,Y,W,Jt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Re(oe,he){he===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(he.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let he=oe.near,Te=oe.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),V.near=P.near=A.near=he,V.far=P.far=A.far=Te,(N!==V.near||X!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,X=V.far),V.layers.mask=oe.layers.mask|6,A.layers.mask=V.layers.mask&-5,P.layers.mask=V.layers.mask&-3;const He=oe.parent,Le=V.cameras;Re(V,He);for(let Qe=0;Qe<Le.length;Qe++)Re(Le[Qe],He);Le.length===2?ne(V,A,P):V.projectionMatrix.copy(A.projectionMatrix),w===null&&oe.isPerspectiveCamera&&(w={camera:oe,fov:oe.fov,zoom:oe.zoom}),Ie(oe,V,He)};function Ie(oe,he,Te){Te===null?oe.matrix.copy(he.matrixWorld):(oe.matrix.copy(Te.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(he.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Vs*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(oe){c=oe,d!==null&&(d.fixedFoveation=oe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(oe){return p[oe]};let vt=null;function Je(oe,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const Te=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let He=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,He=!0);for(let Ke=0;Ke<Te.length;Ke++){const ct=Te[Ke];let xt=null;if(h!==null)xt=h.getViewport(ct);else{const Rt=f.getViewSubImage(d,ct);xt=Rt.viewport,Ke===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(S))}let it=I[Ke];it===void 0&&(it=new Bn,it.layers.enable(Ke),it.viewport=new Nt,I[Ke]=it),it.matrix.fromArray(ct.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ct.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(xt.x,xt.y,xt.width,xt.height),Ke===0&&(V.matrix.copy(it.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),He===!0&&V.cameras.push(it)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Ke=f.getDepthInformation(Te[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,r.renderState)}if(Le&&Le.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ke=0;Ke<Te.length;Ke++){const ct=Te[Ke].camera;if(ct){let xt=p[ct];xt||(xt=new fh,p[ct]=xt);const it=f.getCameraImage(ct);xt.sourceTexture=it}}}}for(let Te=0;Te<x.length;Te++){const He=b[Te],Le=x[Te];He!==null&&Le!==void 0&&Le.update(He,he,l||o)}vt&&vt(oe,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const nt=new _h;nt.setAnimationLoop(Je),this.setAnimationLoop=function(oe){vt=oe},this.dispose=function(){}}}const Hy=new Dt,Eh=new Ye;Eh.set(-1,0,0,0,1,0,0,0,1);function Vy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,S=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const b=x.program;i.uniformBlockBinding(S,b)}function l(S,x){let b=r[S.id];b===void 0&&(m(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",y));const C=x.program;i.updateUBOMapping(S,C);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function u(S){const x=f();S.__bindingPointIndex=x;const b=n.createBuffer(),C=S.__size,_=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,b),b}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=r[S.id],b=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let _=0,w=b.length;_<w;_++){const A=b[_];if(Array.isArray(A))for(let P=0,I=A.length;P<I;P++)h(A[P],_,P,C);else h(A,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,x,b,C){if(v(S,x,b,C)===!0){const _=S.__offset,w=S.value;if(Array.isArray(w)){let A=0;for(let P=0;P<w.length;P++){const I=w[P],V=p(I);g(I,S.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,S.__data)}}function g(S,x,b){typeof S=="number"||typeof S=="boolean"?x[0]=S:S.isMatrix3?(x[0]=S.elements[0],x[1]=S.elements[1],x[2]=S.elements[2],x[3]=0,x[4]=S.elements[3],x[5]=S.elements[4],x[6]=S.elements[5],x[7]=0,x[8]=S.elements[6],x[9]=S.elements[7],x[10]=S.elements[8],x[11]=0):ArrayBuffer.isView(S)?x.set(new S.constructor(S.buffer,S.byteOffset,x.length)):S.toArray(x,b)}function v(S,x,b,C){const _=S.value,w=x+"_"+b;if(C[w]===void 0)return typeof _=="number"||typeof _=="boolean"?C[w]=_:ArrayBuffer.isView(_)?C[w]=_.slice():C[w]=_.clone(),!0;{const A=C[w];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return C[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(S){const x=S.uniforms;let b=0;const C=16;for(let w=0,A=x.length;w<A;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let I=0,V=P.length;I<V;I++){const N=P[I],X=Array.isArray(N.value)?N.value:[N.value];for(let ae=0,Q=X.length;ae<Q;ae++){const me=X[ae],ce=p(me),fe=b%C,ne=fe%ce.boundary,Re=fe+ne;b+=ne,Re!==0&&C-Re<ce.storage&&(b+=C-Re),N.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=ce.storage}}}const _=b%C;return _>0&&(b+=C-_),S.__size=b,S.__cache={},this}function p(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(x.boundary=16,x.storage=S.byteLength):We("WebGLRenderer: Unsupported uniform value type.",S),x}function y(S){const x=S.target;x.removeEventListener("dispose",y);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function T(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:T}}const $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function Xy(){return gi===null&&(gi=new I0($y,16,16,Ar,Ri),gi.name="DFG_LUT",gi.minFilter=gn,gi.magFilter=gn,gi.wrapS=Oi,gi.wrapT=Oi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class qy{constructor(e={}){const{canvas:t=Xm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=h,m=new Set([nu,tu,eu]),p=new Set([zn,Ci,zs,Gs,Jl,Ql]),y=new Uint32Array(4),T=new Int32Array(4),S=new F;let x=null,b=null;const C=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1,I=null,V=null,N=null,X=null;this._outputColorSpace=Fn;let ae=0,Q=0,me=null,ce=-1,fe=null;const ne=new Nt,Re=new Nt;let Ie=null;const vt=new $e(0);let Je=0,nt=t.width,oe=t.height,he=1,Te=null,He=null;const Le=new Nt(0,0,nt,oe),Qe=new Nt(0,0,nt,oe);let Ft=!1;const Ke=new au;let ct=!1,xt=!1;const it=new Dt,Rt=new F,Vt=new Nt,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ot(){return me===null?he:1}let W=i;function Jt(E,H){return t.getContext(E,H)}let yt,R,M,Y,Z,le,k,G,L,z,B,J,te,se,_e,ye,Ne,O,ue,ie,ve,Me,pe;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Qt,!1),W===null){const H="webgl2";if(W=Jt(H,E),W===null)throw Jt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(E){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Qt,!1),gt("WebGLRenderer: "+E.message),E}function Ue(){yt=new Xv(W),yt.init(),ve=new Oy(W,yt),R=new Fv(W,yt,e,ve),M=new Ny(W,yt),R.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),V=W.createFramebuffer(),N=W.createFramebuffer(),X=W.createFramebuffer(),Y=new Kv(W),Z=new My,le=new Fy(W,yt,M,Z,R,ve,Y),k=new $v(A),G=new Z0(W),Me=new Uv(W,G),L=new qv(W,G,Y,Me),z=new Zv(W,L,G,Me,Y),O=new jv(W,R,le),_e=new Ov(Z),B=new yy(A,k,yt,R,Me,_e),J=new Vy(A,Z),te=new by,se=new Ry(yt),Ne=new Iv(A,k,M,z,g,c),ye=new Uy(A,z,R),pe=new Wy(W,Y,R,M),ue=new Nv(W,yt,Y),ie=new Yv(W,yt,Y),Y.programs=B.programs,A.capabilities=R,A.extensions=yt,A.properties=Z,A.renderLists=te,A.shadowMap=ye,A.state=M,A.info=Y}v!==zn&&(w=new Qv(v,t.width,t.height,a,r,s));const De=new Gy(A,W);this.xr=De,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(E){E!==void 0&&(he=E,this.setSize(nt,oe,!1))},this.getSize=function(E){return E.set(nt,oe)},this.setSize=function(E,H,ee=!0){if(De.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=E,oe=H,t.width=Math.floor(E*he),t.height=Math.floor(H*he),ee===!0&&(t.style.width=E+"px",t.style.height=H+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(nt*he,oe*he).floor()},this.setDrawingBufferSize=function(E,H,ee){nt=E,oe=H,he=ee,t.width=Math.floor(E*ee),t.height=Math.floor(H*ee),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(v===zn){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,H,ee,K){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,H,ee,K),M.viewport(ne.copy(Le).multiplyScalar(he).round())},this.getScissor=function(E){return E.copy(Qe)},this.setScissor=function(E,H,ee,K){E.isVector4?Qe.set(E.x,E.y,E.z,E.w):Qe.set(E,H,ee,K),M.scissor(Re.copy(Qe).multiplyScalar(he).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){M.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){Te=E},this.setTransparentSort=function(E){He=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,ee=!0){let K=0;if(E){let j=!1;if(me!==null){const we=me.texture.format;j=m.has(we)}if(j){const we=me.texture.type,Pe=p.has(we),be=Ne.getClearColor(),Fe=Ne.getClearAlpha(),de=be.r,ze=be.g,Oe=be.b;Pe?(y[0]=de,y[1]=ze,y[2]=Oe,y[3]=Fe,W.clearBufferuiv(W.COLOR,0,y)):(T[0]=de,T[1]=ze,T[2]=Oe,T[3]=Fe,W.clearBufferiv(W.COLOR,0,T))}else K|=W.COLOR_BUFFER_BIT}H&&(K|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Qt,!1),Ne.dispose(),te.dispose(),se.dispose(),Z.dispose(),k.dispose(),z.dispose(),Me.dispose(),pe.dispose(),B.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ce),De.removeEventListener("sessionend",ht),et.stop()};function pt(E){E.preventDefault(),da("WebGLRenderer: Context Lost."),P=!0}function lt(){da("WebGLRenderer: Context Restored."),P=!1;const E=Y.autoReset,H=ye.enabled,ee=ye.autoUpdate,K=ye.needsUpdate,j=ye.type;Ue(),Y.autoReset=E,ye.enabled=H,ye.autoUpdate=ee,ye.needsUpdate=K,ye.type=j}function Qt(E){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Gt(E){const H=E.target;H.removeEventListener("dispose",Gt),fr(H)}function fr(E){ti(E),Z.remove(E)}function ti(E){const H=Z.get(E).programs;H!==void 0&&(H.forEach(function(ee){B.releaseProgram(ee)}),E.isShaderMaterial&&B.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,ee,K,j,we){H===null&&(H=ln);const Pe=j.isMesh&&j.matrixWorld.determinantAffine()<0,be=eo(E,H,ee,K,j);M.setMaterial(K,Pe);let Fe=ee.index,de=1;if(K.wireframe===!0){if(Fe=L.getWireframeAttribute(ee),Fe===void 0)return;de=2}const ze=ee.drawRange,Oe=ee.attributes.position;let xe=ze.start*de,Ge=(ze.start+ze.count)*de;we!==null&&(xe=Math.max(xe,we.start*de),Ge=Math.min(Ge,(we.start+we.count)*de)),Fe!==null?(xe=Math.max(xe,0),Ge=Math.min(Ge,Fe.count)):Oe!=null&&(xe=Math.max(xe,0),Ge=Math.min(Ge,Oe.count));const rt=Ge-xe;if(rt<0||rt===1/0)return;Me.setup(j,K,be,ee,Fe);let je,mt=ue;if(Fe!==null&&(je=G.get(Fe),mt=ie,mt.setIndex(je)),j.isMesh)K.wireframe===!0?(M.setLineWidth(K.wireframeLinewidth*Ot()),mt.setMode(W.LINES)):mt.setMode(W.TRIANGLES);else if(j.isLine){let It=K.linewidth;It===void 0&&(It=1),M.setLineWidth(It*Ot()),j.isLineSegments?mt.setMode(W.LINES):j.isLineLoop?mt.setMode(W.LINE_LOOP):mt.setMode(W.LINE_STRIP)}else j.isPoints?mt.setMode(W.POINTS):j.isSprite&&mt.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const It=j._multiDrawStarts,Ee=j._multiDrawCounts,Ut=j._multiDrawCount,Ze=Fe?G.get(Fe).bytesPerElement:1,un=Z.get(K).currentProgram.getUniforms();for(let $t=0;$t<Ut;$t++)un.setValue(W,"_gl_DrawID",$t),mt.render(It[$t]/Ze,Ee[$t])}else if(j.isInstancedMesh)mt.renderInstances(xe,rt,j.count);else if(ee.isInstancedBufferGeometry){const It=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ee=Math.min(ee.instanceCount,It);mt.renderInstances(xe,rt,Ee)}else mt.render(xe,rt)};function An(E,H,ee,K){I!==null&&E.isNodeMaterial&&I.setObject(K,E),ct===!0&&_e.setState(E,ee,!1),E.transparent===!0&&E.side===jn&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,sn(E,H,K),E.side=Tr,E.needsUpdate=!0,sn(E,H,K),E.side=jn):sn(E,H,K)}this.compile=function(E,H,ee=null){ee===null&&(ee=E),I!==null&&I.renderStart(E,H,ee),b=se.get(ee),b.init(H),_.push(b),ee.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),E!==ee&&E.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),xt=this.localClippingEnabled,ct=_e.init(this.clippingPlanes,xt),ct===!0&&_e.setGlobalState(this.clippingPlanes,H),I!==null&&ye.render(b.state.shadowsArray,ee,H);const K=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const be=we[Pe];An(be,ee,H,j),K.add(be)}else An(we,ee,H,j),K.add(we)}),b=_.pop(),I!==null&&I.renderEnd(),K},this.compileAsync=function(E,H,ee=null){const K=this.compile(E,H,ee);return new Promise(j=>{function we(){if(K.forEach(function(Pe){const Fe=Z.get(Pe).currentProgram;(Fe===void 0||Fe.isReady())&&K.delete(Pe)}),K.size===0){j(E);return}setTimeout(we,10)}yt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let D=null;function re(E){D&&D(E)}function Ce(){et.stop()}function ht(){et.start()}const et=new _h;et.setAnimationLoop(re),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(E){D=E,De.setAnimationLoop(E),E===null?et.stop():et.start()},De.addEventListener("sessionstart",Ce),De.addEventListener("sessionend",ht),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,H);const ee=De.enabled===!0&&De.isPresenting===!0,K=w!==null&&(me===null||ee)&&w.begin(A,me);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(H),H=De.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,H,me),b=se.get(E,_.length),b.init(H),b.state.textureUnits=le.getTextureUnits(),_.push(b),it.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ke.setFromProjectionMatrix(it,Si,H.reversedDepth),xt=this.localClippingEnabled,ct=_e.init(this.clippingPlanes,xt),x=te.get(E,C.length),x.init(),C.push(x),De.enabled===!0&&De.isPresenting===!0){const Pe=A.xr.getDepthSensingMesh();Pe!==null&&Wt(Pe,H,-1/0,A.sortObjects)}Wt(E,H,0,A.sortObjects),x.finish(),I!==null&&I.updateLights(b.state.lightsArray),A.sortObjects===!0&&x.sort(Te,He),Ct=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Ct&&Ne.addToRenderList(x,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&_e.beginShadows();const j=b.state.shadowsArray;if(ye.render(j,E,H),ct===!0&&_e.endShadows(),(K&&w.hasRenderPass())===!1){const Pe=x.opaque,be=x.transmissive;if(b.setupLights(),H.isArrayCamera){const Fe=H.cameras;if(be.length>0)for(let de=0,ze=Fe.length;de<ze;de++){const Oe=Fe[de];$n(Pe,be,E,Oe)}Ct&&Ne.render(E);for(let de=0,ze=Fe.length;de<ze;de++){const Oe=Fe[de];xn(x,E,Oe,Oe.viewport)}}else be.length>0&&$n(Pe,be,E,H),Ct&&Ne.render(E),xn(x,E,H)}me!==null&&Q===0&&(le.updateMultisampleRenderTarget(me),le.updateRenderTargetMipmap(me)),K&&w.end(A),E.isScene===!0&&E.onAfterRender(A,E,H),Me.resetDefaultState(),ce=-1,fe=null,_.pop(),_.length>0?(b=_[_.length-1],le.setTextureUnits(b.state.textureUnits),ct===!0&&_e.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?x=C[C.length-1]:x=null,I!==null&&I.renderEnd()};function Wt(E,H,ee,K){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ke)){K&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);const Pe=z.update(E),be=E.material;be.visible&&x.push(E,Pe,be,ee,Vt.z,null,H)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ke))){const Pe=z.update(E),be=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Vt.copy(Pe.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(be)){const Fe=Pe.groups;for(let de=0,ze=Fe.length;de<ze;de++){const Oe=Fe[de],xe=be[Oe.materialIndex];xe&&xe.visible&&x.push(E,Pe,xe,ee,Vt.z,Oe,H)}}else be.visible&&x.push(E,Pe,be,ee,Vt.z,null,H)}}const we=E.children;for(let Pe=0,be=we.length;Pe<be;Pe++)Wt(we[Pe],H,ee,K)}function xn(E,H,ee,K){const{opaque:j,transmissive:we,transparent:Pe}=E;b.setupLightsView(ee),ct===!0&&_e.setGlobalState(A.clippingPlanes,ee),K&&M.viewport(ne.copy(K)),j.length>0&&Xn(j,H,ee),we.length>0&&Xn(we,H,ee),Pe.length>0&&Xn(Pe,H,ee),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function $n(E,H,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[K.id]===void 0){const xe=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[K.id]=new hi(1,1,{generateMipmaps:!0,type:xe?Ri:zn,minFilter:yr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const we=b.state.transmissionRenderTarget[K.id],Pe=K.viewport||ne;we.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const be=A.getRenderTarget(),Fe=A.getActiveCubeFace(),de=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(vt),Je=A.getClearAlpha(),Je<1&&A.setClearColor(16777215,.5),A.clear(),Ct&&Ne.render(ee);const ze=A.toneMapping;A.toneMapping=wi;const Oe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),b.setupLightsView(K),ct===!0&&_e.setGlobalState(A.clippingPlanes,K),Xn(E,ee,K),le.updateMultisampleRenderTarget(we),le.updateRenderTargetMipmap(we),yt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ge=0,rt=H.length;Ge<rt;Ge++){const je=H[Ge],{object:mt,geometry:It,material:Ee,group:Ut}=je;if(Ee.side===jn&&mt.layers.test(K.layers)){const Ze=Ee.side;Ee.side=Tn,Ee.needsUpdate=!0,Cn(mt,ee,K,It,Ee,Ut),Ee.side=Ze,Ee.needsUpdate=!0,xe=!0}}xe===!0&&(le.updateMultisampleRenderTarget(we),le.updateRenderTargetMipmap(we))}A.setRenderTarget(be,Fe,de),A.setClearColor(vt,Je),Oe!==void 0&&(K.viewport=Oe),A.toneMapping=ze}function Xn(E,H,ee){const K=H.isScene===!0?H.overrideMaterial:null;for(let j=0,we=E.length;j<we;j++){const Pe=E[j],{object:be,geometry:Fe,group:de}=Pe;let ze=Pe.material;ze.allowOverride===!0&&K!==null&&(ze=K),be.layers.test(ee.layers)&&Cn(be,H,ee,Fe,ze,de)}}function Cn(E,H,ee,K,j,we){I!==null&&j.isNodeMaterial&&I.setObject(E,j),E.onBeforeRender(A,H,ee,K,j,we),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(A,H,ee,K,E,we),j.transparent===!0&&j.side===jn&&j.forceSinglePass===!1?(j.side=Tn,j.needsUpdate=!0,A.renderBufferDirect(ee,H,K,j,E,we),j.side=Tr,j.needsUpdate=!0,A.renderBufferDirect(ee,H,K,j,E,we),j.side=jn):A.renderBufferDirect(ee,H,K,j,E,we),E.onAfterRender(A,H,ee,K,j,we)}function sn(E,H,ee){H.isScene!==!0&&(H=ln);const K=Z.get(E),j=b.state.lights,we=b.state.shadowsArray,Pe=j.state.version,be=B.getParameters(E,j.state,we,H,ee,b.state.lightProbeGridArray),Fe=B.getProgramCacheKey(be);let de=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;const ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=k.get(E.envMap||K.environment,ze),K.envMapRotation=K.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,de===void 0&&(E.addEventListener("dispose",Gt),de=new Map,K.programs=de);let Oe=de.get(Fe);if(Oe!==void 0){if(K.currentProgram===Oe&&K.lightsStateVersion===Pe)return kt(E,be),Oe}else be.uniforms=B.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,ee,be),E.onBeforeCompile(be,A),Oe=B.acquireProgram(be,Fe),de.set(Fe,Oe),K.uniforms=be.uniforms;const xe=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xe.clippingPlanes=_e.uniform),kt(E,be),K.needsLights=Ur(E),K.lightsStateVersion=Pe,K.needsLights&&(xe.ambientLightColor.value=j.state.ambient,xe.lightProbe.value=j.state.probe,xe.sunLights.value=j.state.sun,xe.sunLightShadows.value=j.state.sunShadow,xe.directionalLights.value=j.state.directional,xe.directionalLightShadows.value=j.state.directionalShadow,xe.spotLights.value=j.state.spot,xe.spotLightShadows.value=j.state.spotShadow,xe.rectAreaLights.value=j.state.rectArea,xe.ltc_1.value=j.state.rectAreaLTC1,xe.ltc_2.value=j.state.rectAreaLTC2,xe.pointLights.value=j.state.point,xe.pointLightShadows.value=j.state.pointShadow,xe.hemisphereLights.value=j.state.hemi,xe.sunShadowMatrix.value=j.state.sunShadowMatrix,xe.sunShadowCascade.value=j.state.sunShadowCascade,xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,xe.spotLightMatrix.value=j.state.spotLightMatrix,xe.spotLightMap.value=j.state.spotLightMap,xe.pointShadowMatrix.value=j.state.pointShadowMatrix),K.lightProbeGrid=b.state.lightProbeGridArray.length>0,K.currentProgram=Oe,K.uniformsList=null,Oe}function Rn(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=zo.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function kt(E,H){const ee=Z.get(E);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function Pn(E,H){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let ee=0,K=E.length;ee<K;ee++){const j=E[ee];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function eo(E,H,ee,K,j){H.isScene!==!0&&(H=ln),le.resetTextureUnits();const we=H.fog,Pe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,be=me===null?A.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ut.workingColorSpace,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,de=k.get(K.envMap||Pe,Fe),ze=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Oe=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),xe=!!ee.morphAttributes.position,Ge=!!ee.morphAttributes.normal,rt=!!ee.morphAttributes.color;let je=wi;K.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(je=A.toneMapping);const mt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,It=mt!==void 0?mt.length:0,Ee=Z.get(K),Ut=b.state.lights;if(ct===!0&&(xt===!0||E!==fe)){const Pt=E===fe&&K.id===ce;_e.setState(K,E,Pt)}let Ze=!1;K.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ut.state.version||Ee.outputColorSpace!==be||j.isBatchedMesh&&Ee.batching===!1||!j.isBatchedMesh&&Ee.batching===!0||j.isBatchedMesh&&Ee.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ee.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ee.instancing===!1||!j.isInstancedMesh&&Ee.instancing===!0||j.isSkinnedMesh&&Ee.skinning===!1||!j.isSkinnedMesh&&Ee.skinning===!0||j.isInstancedMesh&&Ee.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ee.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ee.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ee.instancingMorph===!1&&j.morphTexture!==null||Ee.envMap!==de||K.fog===!0&&Ee.fog!==we||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==_e.numPlanes||Ee.numIntersection!==_e.numIntersection)||Ee.vertexAlphas!==ze||Ee.vertexTangents!==Oe||Ee.morphTargets!==xe||Ee.morphNormals!==Ge||Ee.morphColors!==rt||Ee.toneMapping!==je||Ee.morphTargetsCount!==It||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Ee.__version=K.version);let un=Ee.currentProgram;Ze===!0&&(un=sn(K,H,j),I&&K.isNodeMaterial&&I.onUpdateProgram(K,un,Ee));let $t=!1,Wi=!1,Nr=!1;const At=un.getUniforms(),Ht=Ee.uniforms;if(M.useProgram(un.program)&&($t=!0,Wi=!0,Nr=!0),K.id!==ce&&(ce=K.id,Wi=!0),Ee.needsLights){const Pt=Pn(b.state.lightProbeGridArray,j);Ee.lightProbeGrid!==Pt&&(Ee.lightProbeGrid=Pt,Wi=!0)}if($t||fe!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),At.setValue(W,"projectionMatrix",E.projectionMatrix),At.setValue(W,"viewMatrix",E.matrixWorldInverse);const Xi=At.map.cameraPosition;Xi!==void 0&&Xi.setValue(W,Rt.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&At.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&At.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),fe!==E&&(fe=E,Wi=!0,Nr=!0)}if(Ee.needsLights&&(Ut.state.sunShadowMap.length>0&&At.setValue(W,"sunShadowMap",Ut.state.sunShadowMap,le),Ut.state.directionalShadowMap.length>0&&At.setValue(W,"directionalShadowMap",Ut.state.directionalShadowMap,le),Ut.state.spotShadowMap.length>0&&At.setValue(W,"spotShadowMap",Ut.state.spotShadowMap,le),Ut.state.pointShadowMap.length>0&&At.setValue(W,"pointShadowMap",Ut.state.pointShadowMap,le)),j.isSkinnedMesh){At.setOptional(W,j,"bindMatrix"),At.setOptional(W,j,"bindMatrixInverse");const Pt=j.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),At.setValue(W,"boneTexture",Pt.boneTexture,le))}j.isBatchedMesh&&(At.setOptional(W,j,"batchingTexture"),At.setValue(W,"batchingTexture",j._matricesTexture,le),At.setOptional(W,j,"batchingIdTexture"),At.setValue(W,"batchingIdTexture",j._indirectTexture,le),At.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&At.setValue(W,"batchingColorTexture",j._colorsTexture,le));const $i=ee.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&O.update(j,ee,un),(Wi||Ee.receiveShadow!==j.receiveShadow)&&(Ee.receiveShadow=j.receiveShadow,At.setValue(W,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(Ht.envMapIntensity.value=H.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=Xy()),Wi){if(At.setValue(W,"toneMappingExposure",A.toneMappingExposure),Ee.needsLights&&Ia(Ht,Nr),we&&K.fog===!0&&J.refreshFogUniforms(Ht,we),J.refreshMaterialUniforms(Ht,K,he,oe,b.state.transmissionRenderTarget[E.id]),Ee.needsLights&&Ee.lightProbeGrid){const Pt=Ee.lightProbeGrid;Ht.probesSH.value=Pt.texture,Ht.probesMin.value.copy(Pt.boundingBox.min),Ht.probesMax.value.copy(Pt.boundingBox.max),Ht.probesResolution.value.copy(Pt.resolution)}zo.upload(W,Rn(Ee),Ht,le)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(zo.upload(W,Rn(Ee),Ht,le),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&At.setValue(W,"center",j.center),At.setValue(W,"modelViewMatrix",j.modelViewMatrix),At.setValue(W,"normalMatrix",j.normalMatrix),At.setValue(W,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){const Pt=K.uniformsGroups;for(let Xi=0,Fr=Pt.length;Xi<Fr;Xi++){const wu=Pt[Xi];pe.update(wu,un),pe.bind(wu,un)}}return un}function Ia(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.sunLights.needsUpdate=H,E.sunLightShadows.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Ur(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(E,H,ee){const K=Z.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=H,Z.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ee,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const ee=Z.get(E);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,ee=0){me=E,ae=H,Q=ee;let K=null,j=!1,we=!1;if(E){const be=Z.get(E);if(be.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,be.__webglFramebuffer),ne.copy(E.viewport),Re.copy(E.scissor),Ie=E.scissorTest,M.viewport(ne),M.scissor(Re),M.setScissorTest(Ie),ce=-1;return}else if(be.__webglFramebuffer===void 0)le.setupRenderTarget(E);else if(be.__hasExternalTextures)le.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(be.__boundDepthTexture!==ze){if(ze!==null&&Z.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const de=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(de[H])?K=de[H][ee]:K=de[H],j=!0):E.samples>0&&le.useMultisampledRTT(E)===!1?K=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(de)?K=de[ee]:K=de,ne.copy(E.viewport),Re.copy(E.scissor),Ie=E.scissorTest}else ne.copy(Le).multiplyScalar(he).floor(),Re.copy(Qe).multiplyScalar(he).floor(),Ie=Ft;if(ee!==0&&(K=V),M.bindFramebuffer(W.FRAMEBUFFER,K)&&M.drawBuffers(E,K),M.viewport(ne),M.scissor(Re),M.setScissorTest(Ie),j){const be=Z.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,ee)}else if(we){const be=H;for(let Fe=0;Fe<E.textures.length;Fe++){const de=Z.get(E.textures[Fe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Fe,de.__webglTexture,ee,be)}}else if(E!==null&&ee!==0){const be=Z.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,be.__webglTexture,ee)}ce=-1};function Ua(E){const H=Z.get(E);return(H.__readFormat!==E.format||H.__readType!==E.type)&&(H.__readFormat=E.format,H.__readType=E.type,H.__formatReadable=R.textureFormatReadable(E.format),H.__typeReadable=R.textureTypeReadable(E.type)),H}this.readRenderTargetPixels=function(E,H,ee,K,j,we,Pe,be=0){if(!(E&&E.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){M.bindFramebuffer(W.FRAMEBUFFER,Fe);try{const de=E.textures[be],ze=de.format,Oe=de.type;E.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+be);const xe=Ua(de);if(xe.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-K&&ee>=0&&ee<=E.height-j&&W.readPixels(H,ee,K,j,ve.convert(ze),ve.convert(Oe),we)}finally{const de=me!==null?Z.get(me).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(E,H,ee,K,j,we,Pe,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(H>=0&&H<=E.width-K&&ee>=0&&ee<=E.height-j){M.bindFramebuffer(W.FRAMEBUFFER,Fe);const de=E.textures[be],ze=de.format,Oe=de.type;E.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+be);const xe=Ua(de);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ge),W.bufferData(W.PIXEL_PACK_BUFFER,we.byteLength,W.STREAM_READ),W.readPixels(H,ee,K,j,ve.convert(ze),ve.convert(Oe),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const rt=me!==null?Z.get(me).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,rt);const je=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await qm(W,je,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ge),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,we),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Ge),W.deleteSync(je),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,ee=0){const K=Math.pow(2,-ee),j=Math.floor(E.image.width*K),we=Math.floor(E.image.height*K),Pe=H!==null?H.x:0,be=H!==null?H.y:0;le.setTexture2D(E,0),W.copyTexSubImage2D(W.TEXTURE_2D,ee,0,0,Pe,be,j,we),M.unbindTexture()},this.copyTextureToTexture=function(E,H,ee=null,K=null,j=0,we=0){let Pe,be,Fe,de,ze,Oe,xe,Ge,rt;const je=E.isCompressedTexture?E.mipmaps[we]:E.image;if(ee!==null)Pe=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,de=ee.min.x,ze=ee.min.y,Oe=ee.isBox3?ee.min.z:0;else{const Ht=Math.pow(2,-j);Pe=Math.floor(je.width*Ht),be=Math.floor(je.height*Ht),E.isDataArrayTexture?Fe=je.depth:E.isData3DTexture?Fe=Math.floor(je.depth*Ht):Fe=1,de=0,ze=0,Oe=0}K!==null?(xe=K.x,Ge=K.y,rt=K.z):(xe=0,Ge=0,rt=0);const mt=ve.convert(H.format),It=ve.convert(H.type);let Ee;H.isData3DTexture?(le.setTexture3D(H,0),Ee=W.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(le.setTexture2DArray(H,0),Ee=W.TEXTURE_2D_ARRAY):(le.setTexture2D(H,0),Ee=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const Ut=M.getParameter(W.UNPACK_ROW_LENGTH),Ze=M.getParameter(W.UNPACK_IMAGE_HEIGHT),un=M.getParameter(W.UNPACK_SKIP_PIXELS),$t=M.getParameter(W.UNPACK_SKIP_ROWS),Wi=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,je.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,je.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,de),M.pixelStorei(W.UNPACK_SKIP_ROWS,ze),M.pixelStorei(W.UNPACK_SKIP_IMAGES,Oe);const Nr=E.isDataArrayTexture||E.isData3DTexture,At=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Ht=Z.get(E),$i=Z.get(H),Pt=Z.get(Ht.__renderTarget),Xi=Z.get($i.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,Pt.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Fr=0;Fr<Fe;Fr++)Nr&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,j,Oe+Fr),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,we,rt+Fr)),W.blitFramebuffer(de,ze,Pe,be,xe,Ge,Pe,be,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||Z.has(E)){const Ht=Z.get(E),$i=Z.get(H);M.bindFramebuffer(W.READ_FRAMEBUFFER,N),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,X);for(let Pt=0;Pt<Fe;Pt++)Nr?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ht.__webglTexture,j,Oe+Pt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ht.__webglTexture,j),At?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$i.__webglTexture,we,rt+Pt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,$i.__webglTexture,we),j!==0?W.blitFramebuffer(de,ze,Pe,be,xe,Ge,Pe,be,W.COLOR_BUFFER_BIT,W.NEAREST):At?W.copyTexSubImage3D(Ee,we,xe,Ge,rt+Pt,de,ze,Pe,be):W.copyTexSubImage2D(Ee,we,xe,Ge,de,ze,Pe,be);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else At?E.isDataTexture||E.isData3DTexture?W.texSubImage3D(Ee,we,xe,Ge,rt,Pe,be,Fe,mt,It,je.data):H.isCompressedArrayTexture?W.compressedTexSubImage3D(Ee,we,xe,Ge,rt,Pe,be,Fe,mt,je.data):W.texSubImage3D(Ee,we,xe,Ge,rt,Pe,be,Fe,mt,It,je):E.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,we,xe,Ge,Pe,be,mt,It,je.data):E.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,we,xe,Ge,je.width,je.height,mt,je.data):W.texSubImage2D(W.TEXTURE_2D,we,xe,Ge,Pe,be,mt,It,je);M.pixelStorei(W.UNPACK_ROW_LENGTH,Ut),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ze),M.pixelStorei(W.UNPACK_SKIP_PIXELS,un),M.pixelStorei(W.UNPACK_SKIP_ROWS,$t),M.pixelStorei(W.UNPACK_SKIP_IMAGES,Wi),we===0&&H.generateMipmaps&&W.generateMipmap(Ee),M.unbindTexture()},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?le.setTextureCube(E,0):E.isData3DTexture?le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?le.setTexture2DArray(E,0):le.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){ae=0,Q=0,me=null,M.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function gc(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Lt;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0;const f=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+u);u+=n[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Yd(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const h=[];for(let v=0;v<o[u].length;++v)h.push(o[u][v][d]);const g=Yd(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Yd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new rn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/t;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<t;g++){const v=u.getComponent(d,g);a.setComponent(d+f,g,v)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Yy(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(n.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,T=a.length;y<T;y++){const S=a[y],x=n.attributes[S];c[S]=new x.constructor(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);const b=n.morphAttributes[S];b&&(l[S]||(l[S]=[]),b.forEach((C,_)=>{const w=new C.array.constructor(C.count*C.itemSize);l[S][_]=new C.constructor(w,C.itemSize,C.normalized)}))}const h=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=h*v;for(let y=0;y<s;y++){const T=i?i.getX(y):y;let S="";for(let x=0,b=a.length;x<b;x++){const C=a[x],_=n.getAttribute(C),w=_.itemSize;for(let A=0;A<w;A++)S+=`${Math.trunc(_[f[A]](T)*v+m)},`}if(S in t)u.push(t[S]);else{for(let x=0,b=a.length;x<b;x++){const C=a[x],_=n.getAttribute(C),w=n.morphAttributes[C],A=_.itemSize,P=c[C],I=l[C];for(let V=0;V<A;V++){const N=f[V],X=d[V];if(P[X](o,_[N](T)),w)for(let ae=0,Q=w.length;ae<Q;ae++)I[ae][X](o,w[ae][N](T))}}t[S]=o,u.push(o),o++}}const p=n.clone();for(const y in n.attributes){const T=c[y];if(p.setAttribute(y,new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)),y in l)for(let S=0;S<l[y].length;S++){const x=l[y][S];p.morphAttributes[y][S]=new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)}}return p.setIndex(u),p}const Th=["#58b8ff","#ff6a5a","#ffb347"],Ky="#8a90a6",ft=n=>n===Be?Ky:Th[n],Kd=6,jy=400,Zy=120;function or(n,e,t,i=1){const r=document.createElement("canvas");r.width=n*i,r.height=e*i;const s=r.getContext("2d");s.scale(i,i),t(s,n,e);const o=new N0(r);return o.colorSpace=Fn,o}const Ni=or(128,128,n=>{const e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.1)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)}),vl=[0,1,2,3].map(n=>or(128,128,e=>{e.strokeStyle="#fff",e.lineWidth=4;const t=.16,i=.3,r=-Math.PI/4-(n-1)*i/2,s=Array.from({length:n},(c,l)=>r+l*i);let o=s.length?s[s.length-1]+t/2:0;const a=s.length?s[0]-t/2+Math.PI*2:Math.PI*2;e.beginPath(),e.arc(64,64,58,o,a),e.stroke();for(let c=0;c<s.length-1;c++)e.beginPath(),e.arc(64,64,58,s[c]+t/2,s[c+1]-t/2),e.stroke()})),jd=vl[0];function Jy(n,e,t,i,r){for(let s=0;s<6e3;s++)n.fillStyle=i()<.5?`rgba(0,0,0,${r})`:`rgba(255,255,255,${r*.6})`,n.fillRect(i()*e,i()*t,.35,.35)}function Qy(n,e,t,i){let r=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^Math.imul(i,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function eM(n,e,t,i){const r=Math.floor(n),s=Math.floor(e),o=Math.floor(t),a=n-r,c=e-s,l=t-o,u=a*a*(3-2*a),f=c*c*(3-2*c),d=l*l*(3-2*l),h=(v,m,p)=>v+(m-v)*p,g=(v,m,p)=>Qy(r+v,s+m,o+p,i);return h(h(h(g(0,0,0),g(1,0,0),u),h(g(0,1,0),g(1,1,0),u),f),h(h(g(0,0,1),g(1,0,1),u),h(g(0,1,1),g(1,1,1),u),f),d)*2-1}function ki(n,e,t,i,r){let s=0,o=.5,a=1;for(let c=0;c<r;c++)s+=eM(n*a,e*a,t*a,i+c)*o,a*=2.03,o*=.5;return s}function tM(n){return or(512,256,e=>{const t=e.getImageData(0,0,e.canvas.width,e.canvas.height),{width:i,height:r,data:s}=t,o=n.id*31+11;for(let a=0;a<r;a++){const c=(a/r-.5)*Math.PI,l=Math.cos(c),u=.1+.25*Math.abs(Math.sin(c*3));for(let f=0;f<i;f++){const d=f/i*Math.PI*2,h=Math.cos(d)*l,g=Math.sin(c),v=Math.sin(d)*l,m=ki(h*2,g*2,v*2,o+5,3),p=ki(h*3+m,g*6+m*.5,v*3-m,o,5)+u-.3,y=Math.max(0,Math.min(1,p*2.6)),T=(a*i+f)*4;s[T]=s[T+1]=s[T+2]=255,s[T+3]=y*210}}e.putImageData(t,0,0)},1)}function wh(n){const e=[[.08,.42,.32],[.57,.38,.34],[.47,.3,.3],[.02,.45,.3],[.74,.22,.32],[.11,.2,.42]];return e[Math.floor(n.hue*e.length)%e.length]}function nM(n){const e=Ti(Math.floor(n.hue*1e6)+n.id),t=new $e;return or(256,128,(r,s,o)=>{i(r,s,o),Jy(r,s,o,e,n.giant?.05:.12)},n.giant||n.home?2:n.kind==="planet"?4:2);function i(r,s,o){if(n.home){const a=r.getImageData(0,0,r.canvas.width,r.canvas.height),c=a.width,l=a.height,u=n.id*17+3,f=a.data;for(let d=0;d<l;d++){const h=(d/l-.5)*Math.PI,g=Math.cos(h);for(let v=0;v<c;v++){const m=v/c*Math.PI*2,p=Math.cos(m)*g,y=Math.sin(h),T=Math.sin(m)*g,S=ki(p*1.5,y*1.5,T*1.5,u+9,3)*.6,x=ki(p*1.6+S,y*1.6-S,T*1.6+S,u,6)-.04,b=Math.abs(y),C=b>.86-x*.25;let _,w,A;if(C)_=236,w=242,A=248;else if(x<0){const I=Math.max(0,1+x*7);_=12+30*I*I,w=44+70*I*I,A=92+60*I}else{const I=1-b,V=Math.max(0,ki(p*3,y*3,T*3,u+4,3)+(I>.55&&I<.85?.25:-.1)),N=Math.min(1,x*3.2);if(_=58+V*120+N*50,w=86+V*60+N*20,A=40+V*30+N*30,b>.7){const X=(b-.7)/.16;_+=X*40,w+=X*30,A+=X*40}}const P=(d*c+v)*4;f[P]=_,f[P+1]=w,f[P+2]=A,f[P+3]=255}}r.putImageData(a,0,0);return}if(n.kind==="planet"&&n.giant){const a=r.getImageData(0,0,r.canvas.width,r.canvas.height),c=a.width,l=a.height,u=a.data,f=n.id*13+5,[d,h,g]=wh(n),v=e(),m=.3+e()*.4;for(let p=0;p<l;p++){const y=(p/l-.5)*Math.PI,T=Math.cos(y);for(let S=0;S<c;S++){const x=S/c*Math.PI*2,b=Math.cos(x)*T,C=Math.sin(y),_=Math.sin(x)*T,w=ki(b*4,C*10,_*4,f,5)-.5,A=Math.sin(C*14+w*3.2),P=(S/c-v+1.5)%1-.5,I=p/l-m,V=Math.exp(-((P/.06)**2+(I/.035)**2)),N=A*.5+.5+V*.6;t.setHSL(d+N*.05-V*.03,h*(.75+N*.6),g+N*.26+w*.08);const X=(p*c+S)*4;u[X]=t.r*255,u[X+1]=t.g*255,u[X+2]=t.b*255,u[X+3]=255}}r.putImageData(a,0,0)}else{const a=n.kind!=="planet",c=a?.08:[.08,.55,.02,.33][Math.floor(n.hue*4)];t.setHSL(c,a?.05:.3,a?.45:.35),r.fillStyle=`#${t.getHexString()}`,r.fillRect(0,0,s,o);for(let l=0;l<90;l++)t.setHSL(c+(e()-.5)*.05,a?.05:.35,.25+e()*.3),r.fillStyle=`#${t.getHexString()}`,r.globalAlpha=.35,r.beginPath(),r.arc(e()*s,e()*o,2+e()*(a?8:22),0,Math.PI*2),r.fill();r.globalAlpha=.5;for(let l=0;l<(a?40:12);l++){const u=e()*s,f=e()*o,d=1+e()*4;r.strokeStyle="rgba(0,0,0,0.5)",r.beginPath(),r.arc(u,f,d,0,Math.PI*2),r.stroke()}r.globalAlpha=1,a||(r.fillStyle="rgba(255,255,255,0.8)",r.fillRect(0,0,s,5),r.fillRect(0,o-5,s,5))}}}function iM(n){const e=Ti(n.id*131+7);return or(256,128,(i,r,s)=>{i.fillStyle="#000",i.fillRect(0,0,r,s);const o=n.giant?6:n.kind==="moon"?5:18;for(let a=0;a<o;a++){const c=e()*r,l=s*(.15+e()*.7),u=20+Math.floor(e()*60);for(let f=0;f<u;f++){const d=e()**2;i.fillStyle=e()<.2?"#fff4d0":"#ffb95a",i.globalAlpha=.4+e()*.6,i.fillRect((c+(e()-.5)*30*d+r)%r,l+(e()-.5)*14*d,.45,.45)}}i.globalAlpha=1},4)}const Ah={value:new F};function rM(n){return n.onBeforeCompile=e=>{e.uniforms.uSunView=Ah,e.fragmentShader=`uniform vec3 uSunView;
${e.fragmentShader}`.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      {
        float day = dot(normal, normalize(uSunView + vViewPosition));
        totalEmissiveRadiance *= smoothstep(0.12, -0.25, day);
      }`)},n}function sM(){const n=Math.PI/2,e=(h,g)=>(h.userData.tag=g,h),t=(h,g,v,m=0,p=0,y=0,T="hull")=>e(new pi(h,g,v).translate(m,p,y),T),i=(h,g,v,m,p="hull",y=10)=>e(new kn(h,g,v,y).rotateX(n).translate(0,0,m),p),r=(h,g)=>[i(h*.9,h*1.05,.1,g,"dark"),e(new kn(h*.45,h*.9,.14,12,1,!0).rotateX(-n).translate(0,0,g-.11),"dark")],s=new $e("#d5dae2"),o=new $e("#6b7280"),a=(h,g=null)=>{const v=[],m=[];for(const x of h){const b=x.toNonIndexed();if(x.userData.tag==="accent"){m.push(b);continue}const C=.86+v.length*.618%1*.22,_=(v.length*.377%1-.5)*.06,w=x.userData.tag==="dark"?o:s,A={r:w.r*C*(1+_),g:w.g*C,b:w.b*C*(1-_)},P=new Float32Array(b.attributes.position.count*3);for(let I=0;I<P.length;I+=3)P.set([A.r,A.g,A.b],I);b.setAttribute("color",new rn(P,3)),v.push(b)}const p={base:gc(v),accent:gc(m)};p.base.computeBoundingBox();const y=p.base.boundingBox,T=(x,b,C,_,w=.012)=>{const A=new pi(w,w,w).translate(x,b,C).toNonIndexed(),P=new Float32Array(A.attributes.position.count*3),I=new $e(_);for(let V=0;V<P.length;V+=3)P.set([I.r,I.g,I.b],V);return A.setAttribute("color",new rn(P,3)),A},S=[T(0,0,(y.min.z+y.max.z)/2,"#000000",1e-4)];if(g){const[x,b,C,_]=g;for(let w=0;w<_;w++){const A=b+(C-b)*w/Math.max(1,_-1);for(const P of[-1,1])S.push(T(P*(x+.002),.012,A,"#ffd9a0",.008))}}p.lights=gc(S);for(const x of[p.base,p.accent,p.lights])x.scale(1.35,1.35,1);return p},c=(h,g,v,m,p)=>Array.from({length:p},(y,T)=>t(h,g,.006,0,0,v+(m-v)*T/(p-1),"dark")),l=(h,g,v)=>t(.016,.012,.016,h,g,v,"dark"),u=a([e(new Js(.05,.12,4).rotateY(Math.PI/4).rotateX(n).translate(0,0,.33),"hull"),t(.075,.07,.2,0,0,.17),t(.09,.08,.2,0,0,-.03),...c(.094,.084,-.12,.06,4),t(.06,.012,.16,0,.037,.17,"accent"),t(.01,.084,.03,.046,0,0,"accent"),l(.042,.04,.22),l(-.042,-.04,.22),l(.05,-.044,-.06),l(-.05,.044,-.06),t(.004,.004,.07,.02,.05,.1,"dark"),i(.045,.05,.05,-.16,"dark"),...r(.06,-.2)],[.0375,.24,.1,4]),f=a([t(.08,.08,.5,0,0,.04),t(.07,.07,.05,0,0,.31),...c(.086,.086,-.18,.26,7),t(.04,.03,.06,0,.055,.1),t(.082,.014,.12,0,.034,.2,"accent"),t(.16,.003,.08,0,0,-.1,"dark"),l(.044,.044,.28),l(-.044,.044,.28),l(.044,-.044,-.05),l(-.044,-.044,-.05),t(.02,.02,.06,0,-.05,.25,"dark"),...r(.07,-.25)],[.04,.27,-.02,6]),d=a([t(.07,.06,.08,0,0,.3),t(.071,.014,.05,0,.03,.3,"accent"),t(.02,.02,.5,0,0,.04,"dark"),...[.18,.08,-.02,-.12].flatMap((h,g)=>[t(.05,.04,.08,.04,0,h,g%2?"accent":"hull"),t(.05,.04,.08,-.04,0,h,g%2?"hull":"dark")]),t(.12,.003,.06,0,.03,-.18,"dark"),i(.04,.045,.05,-.2,"dark"),...r(.055,-.24)],[.035,.32,.28,2]);return[u,f,d]}function Zd(n){const e=new Kn({color:"#c9ced8",metalness:.6,roughness:.4}),t=new Sn;t.add(new qe(new Cr(n,n*.12,8,32),e));const i=[];for(let o=0;o<40;o++){const a=o/40*Math.PI*2;i.push(new F(Math.cos(a)*n*1.13,Math.sin(a)*n*1.13,(o%3-1)*n*.05))}const r=new uh(new Lt().setFromPoints(i),new cu({color:"#ffd08a",size:2,sizeAttenuation:!1,transparent:!0,opacity:.9}));r.name="windows",r.visible=!1,t.add(r),t.add(new qe(new kn(n*.15,n*.15,n*1.4,12).rotateX(Math.PI/2),e));for(let o=0;o<4;o++){const a=new qe(new kn(n*.04,n*.04,n*2,6),e);a.rotation.z=o*Math.PI/4,t.add(a)}const s=new Kn({color:"#2a3f7a",metalness:.3,roughness:.6,side:jn});for(const o of[-1,1]){const a=new qe(new Qs(n*.5,n*1.4),s);a.position.z=o*n*1.1,a.rotation.y=Math.PI/2,t.add(a)}return t}function Jd(n){const e=Ti(n.id*97+1);let t=new uu(n.size,5);t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=Yy(t);const i=Array.from({length:5},()=>({d:new F(e()-.5,e()-.5,e()-.5).normalize(),f:.6+e()*1.2,ph:e()*6.28,a:.05+e()*.07}));for(let l=0;l<4;l++)i.push({d:new F(e()-.5,e()-.5,e()-.5).normalize(),f:3+e()*3,ph:e()*6.28,a:.015+e()*.015});const r=Array.from({length:6},()=>({d:new F(e()-.5,e()-.5,e()-.5).normalize(),size:.2+e()*.25})),s=new F(1.2+e()*.5,.8+e()*.2,.9+e()*.3),o=t.attributes.position,a=new F,c=new F;for(let l=0;l<o.count;l++){a.fromBufferAttribute(o,l),c.copy(a).normalize();let u=1;for(const f of i)u+=f.a*Math.sin(c.dot(f.d)*f.f*3+f.ph);for(const f of r){const d=c.distanceTo(f.d);d<f.size?u-=.12*Math.cos(d/f.size*Math.PI*.5)**2:d<f.size*1.25&&(u+=.03)}a.multiplyScalar(u).multiply(s),o.setXYZ(l,a.x,a.y,a.z)}return t.computeVertexNormals(),new qe(t,new Kn({color:"#8a7f72",roughness:.95,metalness:.05}))}const Ch={value:new Xe(1,1)};function oM(n){const t=[],i=[],r=[],s=[],o=[],a=f=>[Math.cos(f)*n.r,Math.sin(f)*n.r*n.incl,Math.sin(f)*n.r];for(let f=0;f<=256;f++){const d=f/256*Math.PI*2;for(const h of[-1,1])t.push(...a(d)),i.push(...a(d+.01)),r.push(d),s.push(h);if(f<256){const h=f*2;o.push(h,h+1,h+2,h+1,h+3,h+2)}}const c=new Lt;c.setAttribute("position",new Et(t,3)),c.setAttribute("nextPos",new Et(i,3)),c.setAttribute("ang",new Et(r,1)),c.setAttribute("side",new Et(s,1)),c.setIndex(o);const l=n.parent!==null,u=new qe(c,new Wn({uniforms:{uTh:{value:0},uRes:Ch,uWidth:{value:l?1.4:2.2},uColor:{value:new $e(l?"#5d6a8c":"#7383ad")},uOpacity:{value:l?.55:.75}},vertexShader:`attribute vec3 nextPos; attribute float ang; attribute float side;
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
      }`,transparent:!0,depthWrite:!1,side:jn}));return u.frustumCulled=!1,u}function aM(n){const e=n.giant?new $e().setHSL(wh(n)[0],.5,.75):new $e(n.home?"#6fb6ff":"#b9c8dc"),t=n.home?1.1:n.giant?.45:.6;return new qe(new ai(n.size*1.05,48,32),new Wn({uniforms:{color:{value:e},strength:{value:t}},vertexShader:`varying vec3 vN; varying vec3 vV;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform vec3 color; uniform float strength; varying vec3 vN; varying vec3 vV;
        void main() {
          float rim = pow(1.0 - max(dot(vN, vV), 0.0), 3.0);
          gl_FragColor = vec4(color, rim * strength);
        }`,transparent:!0,blending:on,depthWrite:!1}))}const cM=new Kn({color:"#b9c0cc",metalness:.6,roughness:.45}),lM=new nr({color:"#9fd4ff",transparent:!0,opacity:.35,wireframe:!0});function uM(n,e,t,i,r=1){const s=i?cM:lM,o=Math.max(.25,e.size*.14),a=new Sn;if(n==="shipyard"){a.add(new qe(new Cr(e.size*1.35,o*.12,6,48),s));for(let u=0;u<4;u++){const f=u/4*Math.PI*2,d=new qe(new pi(o*.25,o*.25,o*1.2),s);d.position.set(Math.cos(f)*e.size*1.35,0,Math.sin(f)*e.size*1.35),d.lookAt(0,0,0),a.add(d)}return a.rotation.x=Math.PI/2+.35,a}if(n==="skimmer"){const u=e.size*1.08;for(let f=0;f<r;f++){const d=f/r*Math.PI*2+t,h=new Sn,g=new qe(new Js(o*.35,o*1.4,6),s);g.rotation.z=Math.PI/2;const v=new qe(new ai(o*.3,8,6),s);v.position.x=-o*.6,h.add(g,v),h.position.set(Math.cos(d)*u,0,Math.sin(d)*u),h.rotation.y=-d,a.add(h)}return a.rotation.x=.25+t*.3,a}const c=Ti(e.id*17+t*101+(n==="mine"?5:0)),l=new F(c()-.5,(c()-.5)*.9,c()-.5).normalize();if(n==="defence"){const u=1+(r-1)*.3,f=new qe(new kn(o*.5*u,o*.6*u,o*.35,8),s);a.add(f);for(let d=0;d<r;d++){const h=new qe(new kn(o*.08,o*.08,o*(.9+r*.15),6),s);h.position.set((d-(r-1)/2)*o*.25,o*.45,o*.25),h.rotation.x=.7,a.add(h)}if(r>1){const d=new qe(new ai(o*.3*u,8,6,0,Math.PI*2,0,Math.PI/2),s);d.position.y=o*.17,a.add(d)}}else if(n==="exchange"){const u=new qe(new kn(o*.12,o*.35,o*1.8,6),s);u.position.y=o*.9,a.add(u);const f=new qe(new kn(o*.02,o*.02,o*3,3),s);f.position.y=o*3.2,a.add(f);const d=new qe(new Cr(o*(.4+r*.12),o*.08,6,20),s);if(d.position.y=o*4.7,d.rotation.x=Math.PI/2,a.add(d),i){const h=new Yn(new Nn({map:Ni,color:"#ffe39a",blending:on,depthWrite:!1,transparent:!0}));h.position.y=o*4.7,h.scale.setScalar(o*(1.2+r*.4)),a.add(h)}}else if(n==="lab"){const u=new qe(new kn(o*.1,o*.16,o*1.1,6),s);u.position.y=o*.55,a.add(u,new qe(new pi(o*.8,o*.3,o*.8),s));for(let f=0;f<r;f++){const d=new qe(new ai(o*(.45-f*.08),12,6,0,Math.PI*2,0,Math.PI/3),s);d.position.y=o*(.7+f*.35),d.rotation.set(Math.PI+.5,f*2.1,0),a.add(d)}if(i){const f=new Yn(new Nn({map:Ni,color:"#9fd4ff",blending:on,depthWrite:!1,transparent:!0}));f.position.y=o*(1.1+r*.3),f.scale.setScalar(o*(1+r*.4)),a.add(f)}}else{a.add(new qe(new pi(o*(.9+(r-1)*.4),o*.4,o*.7),s));for(let u=0;u<r;u++){const f=(u-(r-1)/2)*o*.45,d=new qe(new kn(o*.08,o*.14,o*(1.4-u*.2),5),s);if(d.position.set(f,o*.7,0),a.add(d),i){const h=new Yn(new Nn({map:Ni,color:"#ffc070",blending:on,depthWrite:!1,transparent:!0}));h.position.set(f,o*(1.5-u*.2),0),h.scale.setScalar(o*1.6),a.add(h)}}}return a.position.copy(l).multiplyScalar(e.size*(e.kind==="asteroid"?1.1:1)),a.quaternion.setFromUnitVectors(new F(0,1,0),l),a}function dM(n,e){const t=new qy({canvas:n,antialias:!0,logarithmicDepthBuffer:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new E0;i.background=new $e("#03040a");const r=new Bn(45,1,.02,2e4);{const G=new Float32Array(7500),L=new F;for(let B=0;B<2500;B++)L.randomDirection().multiplyScalar(4e3+Math.random()*2e3),G.set([L.x,L.y,L.z],B*3);const z=new Lt;z.setAttribute("position",new rn(G,3)),i.add(new uh(z,new cu({size:1.3,sizeAttenuation:!1,color:"#9aa6c8",transparent:!0,opacity:.7})))}{const L=or(768,384,te=>{const se=te.getImageData(0,0,768,384),_e=se.data,ye=new F(.32,.86,.4).normalize(),Ne=new F(1,0,0).sub(ye.clone().multiplyScalar(ye.x)).normalize(),O=new F().crossVectors(ye,Ne),ue=new F;for(let ie=0;ie<384;ie++){const ve=ie/384*Math.PI;for(let Me=0;Me<768;Me++){const pe=Me/768*Math.PI*2;ue.set(-Math.cos(pe)*Math.sin(ve),Math.cos(ve),Math.sin(pe)*Math.sin(ve));const Ue=Math.asin(Math.max(-1,Math.min(1,ue.dot(ye)))),De=Math.atan2(ue.dot(O),ue.dot(Ne)),pt=ki(ue.x*5,ue.y*5,ue.z*5,41,5),lt=.17*(.75+.6*ki(ue.x*2.5,ue.y*2.5,ue.z*2.5,13,3)),Qt=Math.exp(-((Ue/lt)**2))+.22*Math.exp(-((Ue/.5)**2));if(Qt<.003)continue;const Gt=Math.exp(-((De/.7)**2))*Math.exp(-((Ue/.32)**2)),fr=Math.exp(-(((Ue-.01*Math.sin(De*3))/.035)**2))*Math.max(0,ki(ue.x*9,ue.y*9,ue.z*9,77,4)+.15);let ti=Qt*(.35+pt*1.1)+Gt*.9;ti*=1-Math.min(.85,fr*1.4),ti=Math.max(0,ti)*.38;const An=(ie*768+Me)*4;_e[An]=Math.min(255,(150+Gt*105)*ti),_e[An+1]=Math.min(255,(160+Gt*60)*ti),_e[An+2]=Math.min(255,(205-Gt*40)*ti),_e[An+3]=255}}te.putImageData(se,0,0)}),z=new qe(new ai(9e3,48,24),new nr({map:L,side:Tn,depthWrite:!1,blending:on,transparent:!0}));z.renderOrder=-2,i.add(z);const B=or(256,256,te=>{te.translate(128,128);const se=Ti(5);for(let ye=0;ye<2600;ye++){const Ne=ye%2,O=se()**.7*4.2,ue=O*1.25+Ne*Math.PI+(se()-.5)*.55,ie=8+O*26+(se()-.5)*8;te.fillStyle=`rgba(${200+se()*55|0},${200+se()*40|0},255,${.05+se()*.12*(1-O/4.5)})`,te.beginPath(),te.arc(Math.cos(ue)*ie,Math.sin(ue)*ie*.55,1+se()*2.5,0,Math.PI*2),te.fill()}const _e=te.createRadialGradient(0,0,0,0,0,30);_e.addColorStop(0,"rgba(255,240,215,0.9)"),_e.addColorStop(1,"rgba(255,240,215,0)"),te.fillStyle=_e,te.fillRect(-30,-30,60,60)}),J=new Yn(new Nn({map:B,transparent:!0,depthWrite:!1,blending:on,opacity:.55,rotation:.6}));J.position.set(-5200,2600,-4600),J.scale.setScalar(700),i.add(J)}const s={value:0},o=new Sn;i.add(o),o.add(new qe(new ai(Kd,64,48),new Wn({uniforms:{uT:s},vertexShader:`varying vec3 vP; varying vec3 vN; varying vec3 vV;
      void main() {
        vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform float uT; varying vec3 vP; varying vec3 vN; varying vec3 vV;
      float h(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float n3(vec3 p) {
        vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h(i), h(i + vec3(1,0,0)), f.x), mix(h(i + vec3(0,1,0)), h(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h(i + vec3(0,0,1)), h(i + vec3(1,0,1)), f.x), mix(h(i + vec3(0,1,1)), h(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      float fbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += n3(p) * a; p *= 2.1; a *= 0.5; } return s; }
      void main() {
        vec3 p = normalize(vP);
        float t = uT * 0.02;
        float warp = fbm(p * 3.0 + t);
        float cells = fbm(p * 9.0 + warp * 2.0 - t * 2.0);
        float spots = smoothstep(0.66, 0.74, fbm(p * 2.6 + vec3(0.0, t * 0.3, 0.0)));
        float pen = smoothstep(0.6, 0.66, fbm(p * 2.6 + vec3(0.0, t * 0.3, 0.0)));
        float fac = smoothstep(0.55, 0.62, fbm(p * 5.0 - t * 0.5)) * (1.0 - pen);
        float mu = max(dot(vN, vV), 0.0);
        float limb = 0.45 + 0.55 * pow(mu, 0.5);
        vec3 hot = vec3(1.0, 0.96, 0.82), mid = vec3(1.0, 0.72, 0.32), cool = vec3(0.85, 0.35, 0.1);
        vec3 c = mix(mid * 0.85, hot, smoothstep(0.4, 0.75, cells));
        c = mix(c, cool, (1.0 - limb) * 0.8);
        c += fac * 0.18 * hot;
        c *= 1.0 - pen * 0.35 - spots * 0.5;
        gl_FragColor = vec4(c * (0.55 + 0.4 * limb), 1.0);
      }`})));const a=[];{const k=Ti(7),G=new F(0,1,0);for(let L=0;L<9;L++){const z=.7+k()*1.3,B=new qe(new Cr(z,.07+k()*.08,6,28,Math.PI),new nr({color:new $e().setHSL(.04+k()*.05,1,.55),transparent:!0,opacity:0,blending:on,depthWrite:!1})),J=()=>{const te=new F().randomDirection();B.position.copy(te).multiplyScalar(Kd*.97),B.quaternion.setFromUnitVectors(G,te),B.rotateY(Math.random()*Math.PI)};J(),a.push({m:B,place:J,phase:k()*40,period:25+k()*30,peak:.5+k()*.4,grow:z}),o.add(B)}}for(const[k,G,L]of[[18,"#fff0c0",.5],[40,"#ffd27a",.35],[110,"#ff9a4a",.2]]){const z=new Yn(new Nn({map:Ni,color:G,opacity:L,blending:on,depthWrite:!1,transparent:!0}));z.scale.setScalar(k),o.add(z)}const c=o.clone();c.visible=!1,c.add(new bd("#ffd9b0",1.4,0,0)),i.add(c),i.add(new bd("#fff1dd",3,0,0)),i.add(new X0("#26304a",.35));const l=sM(),u=new Sn;i.add(u);let f=[];const d={az:.4,pol:.9,dist:380,minDist:1.2,maxDist:900,target:new F,vaz:0,vpol:0,follow:null};let h=null;function g(k){if(u.clear(),e.innerHTML="",He.length=0,f=k.bodies.map(G=>{const L=new Sn;let z,B=null,J=null;if(G.kind==="station")z=Zd(G.size);else if(G.kind==="asteroid")z=Jd(G);else if(G.visitor){z=Jd(G),J=new Sn;const ue=ie=>new Yn(new Nn({map:Ni,color:ie,transparent:!0,depthWrite:!1,blending:on,opacity:0}));J.userData.ion=Array.from({length:26},()=>ue("#9fd0ff")),J.userData.dust=Array.from({length:22},()=>ue("#fff0cf")),J.userData.coma=ue("#e8f6ff");for(const ie of[...J.userData.ion,...J.userData.dust,J.userData.coma])J.add(ie);L.add(J),B=Zd(.7),L.add(B)}else{const ue=nM(G);if(z=new qe(new ai(G.size,64,40),rM(new Kn({map:ue,roughness:G.home?.8:1,metalness:0,bumpMap:G.giant?null:ue,bumpScale:G.home?.6:G.kind==="moon"?2:1.2,emissiveMap:iM(G),emissive:"#ffd08a",emissiveIntensity:0}))),z.rotation.z=.2+G.hue*.3,G.kind==="planet"&&L.add(aM(G)),G.home){const ie=new qe(new ai(G.size*1.012,48,32),new Kn({map:tM(G),transparent:!0,depthWrite:!1,roughness:1}));ie.name="clouds",z.add(ie)}if(G.giant&&G.hue>.4){const ie=new qe(new du(G.size*1.4,G.size*2.2,64),new Kn({color:"#c8b89a",transparent:!0,opacity:.55,side:jn}));ie.rotation.x=Math.PI/2-.25,L.add(ie)}}L.add(z);const te=new Sn;z.add(te);const se=new Yn(new Nn({map:jd,transparent:!0,depthWrite:!1,depthTest:!1,opacity:.8}));se.scale.setScalar(G.size*3.2),L.add(se),u.add(L);const _e=oM(G),ye=new Sn;ye.add(_e),u.add(ye);const Ne=document.createElement("div");Ne.className="lbl",e.appendChild(Ne),G.visitor&&(ye.visible=!1);let O=null;if(G.perk&&Hn[G.perk].range){const ue=Hn[G.perk].range,ie=[];for(let ve=0;ve<=96;ve++){const Me=ve/96*Math.PI*2;ie.push(new F(Math.cos(Me)*ue,0,Math.sin(Me)*ue))}O=new Bo(new Lt().setFromPoints(ie),new cc({color:"#ffd479",transparent:!0,opacity:.55,dashSize:2.5,gapSize:2})),O.computeLineDistances(),O.visible=!1,u.add(O)}return{b:G,g:L,body:z,surface:te,mark:se,lineHolder:ye,line:_e,label:Ne,shown:"",owner:null,pulse:0,sig:null,structs:null,hulk:B,tail:J,reach:O}}),h&&(h.removeFromParent(),h=null),k.stars&&k.stars[1]){const G=[];for(let L=0;L<=256;L++){const z=Rs(k,1,L/256*k.stars[1].period);G.push(new F(z.x,z.y,z.z))}h=new Bo(new Lt().setFromPoints(G),new cc({color:"#ffb070",transparent:!0,opacity:.35,dashSize:4,gapSize:4})),h.computeLineDistances(),u.add(h)}}const v=or(128,128,k=>{const G=Ti(17);k.fillStyle="#e4e4e4",k.fillRect(0,0,128,128);const L=(z,B,J,te)=>{if(J<10||te<10||G()<.15){const se=200+G()*55|0;k.fillStyle=`rgb(${se},${se},${se})`,k.fillRect(z+1,B+1,J-2,te-2),k.strokeStyle="rgba(40,44,52,0.55)",k.lineWidth=1,k.strokeRect(z+.5,B+.5,J-1,te-1),G()<.25&&(k.fillStyle="rgba(60,64,72,0.35)",k.fillRect(z+J*.3,B+te*.3,J*.25,te*.2));return}if(J>te){const se=J*(.3+G()*.4)|0;L(z,B,se,te),L(z+se,B,J-se,te)}else{const se=te*(.3+G()*.4)|0;L(z,B,J,se),L(z,B+se,J,te-se)}};L(0,0,128,128);for(let z=0;z<40;z++)k.fillStyle=`rgba(30,30,36,${.04+G()*.06})`,k.fillRect(G()*128,G()*128,1+G()*6,1)});v.wrapS=v.wrapT=sa;const m=[];function p(k){if(k>=jy)return null;if(!m[k]){const G=new qe(l[0].base,new Kn({vertexColors:!0,map:v,bumpMap:v,bumpScale:.6,roughnessMap:v,metalness:.5,roughness:.62,emissive:"#2a2f38"})),L=new qe(l[0].accent,new Kn({metalness:.3,roughness:.5}));G.add(L);const z=new qe(l[0].lights,new nr({vertexColors:!0,toneMapped:!1}));G.add(z);const B=new qe(new Js(.035,1.6,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-1.16),new nr({color:"#9fd4ff",transparent:!0,opacity:.8,blending:on,depthWrite:!1}));G.add(B);const J=new Yn(new Nn({map:Ni,blending:on,depthWrite:!1,transparent:!0}));i.add(G,J),m[k]={mesh:G,accent:L,lights:z,plume:B,glint:J}}return m[k]}const y=new Lt,T=16,S=new Float32Array(200*T*6),x=new Float32Array(200*T*6);y.setAttribute("position",new rn(S,3)),y.setAttribute("color",new rn(x,3));const b=new md(y,new ha({vertexColors:!0,transparent:!0,opacity:.45}));b.frustumCulled=!1,i.add(b);const C=[];function _(k){if(!C[k]){const G=new Yn(new Nn({map:jd,transparent:!0,depthWrite:!1,opacity:.5}));i.add(G),C[k]=G}return C[k]}const w=new Lt().setFromPoints(Array.from({length:33},()=>new F)),A=new Bo(w,new cc({color:Th[0],dashSize:1.5,gapSize:1}));A.frustumCulled=!1,i.add(A);const P=[];let I=0;function V(k,G,L,z){let B=P[I];B||(B=new Yn(new Nn({map:Ni,blending:on,depthWrite:!1,transparent:!0})),B.userData={},i.add(B),P[I]=B),I=(I+1)%Zy,B.position.copy(k),B.material.color.set(G),Object.assign(B.userData,{age:0,life:z,size:L}),B.visible=!0}const N=240,X=[];function ae(k,G,L,z=0,B=!1){let J=X.find(te=>!te.live);if(!J){if(X.length>=N)return;J={a:new F,b:new F,c:new $e},X.push(J)}J.live=!0,J.a.copy(k),J.b.copy(G),J.color=L,J.c.set(L).lerp(new $e("#ffffff"),[.45,.6,.85][z]),J.tail=[.18,.3,1][z],J.age=0,J.life=z===2?.16:Dn.clamp(k.distanceTo(G)/(z?24:14),.1,.7),J.pd=B&&Math.random()<.3,J.pd&&J.b.lerpVectors(k,G,.7+Math.random()*.2)}const Q=new Lt,me=new Float32Array(N*6),ce=new Float32Array(N*6);Q.setAttribute("position",new rn(me,3)),Q.setAttribute("color",new rn(ce,3));const fe=new md(Q,new ha({vertexColors:!0,transparent:!0,blending:on,depthWrite:!1}));fe.frustumCulled=!1,i.add(fe);const ne=new F,Re=new F,Ie=new F,vt=new F,Je=new F(0,1,0),nt=k=>window.innerHeight/(2*Math.tan(Dn.degToRad(r.fov/2))*r.position.distanceTo(k)),oe=(k,G)=>{let L=Math.imul(k^2654435769,2246822507)^Math.imul(G+1663821227,3266489909);return L^=L>>>15,L=Math.imul(L,739982445),((L^L>>>12)>>>0)/4294967296};function he(){t.setSize(window.innerWidth,window.innerHeight,!1),Ch.value.set(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()}const Te=[],He=[];function Le(k){if(!He[k]){const G=document.createElement("div");G.className="flbl",e.appendChild(G),He[k]=G}return He[k]}function Qe(k){for(const G of f){const L=Te[G.b.id];if(!L)continue;const z=G.b.size*1.25+.25,B=z*2,J=k.x-L.x,te=k.y-L.y,se=k.z-L.z,_e=J*J+te*te+se*se;if(_e>=B*B)continue;const ye=Math.sqrt(_e);if(ye<1e-6){k.x=L.x+z;continue}const Ne=(ye+(B-ye)**2*z/(B*B))/ye;k.set(L.x+J*Ne,L.y+te*Ne,L.z+se*Ne)}}function Ft(k,G,L,z,B,J,te,se=te,_e=1){k.mesh.visible=!0;const ye=Math.floor(oe(se,3)*l.length);k.mesh.geometry!==l[ye].base&&(k.mesh.geometry=l[ye].base,k.accent.geometry=l[ye].accent,k.lights.geometry=l[ye].lights);const Ne=.9+oe(se,5)*.25;k.mesh.scale.set(.8,.8,.8*Ne),k.mesh.material.color.setHSL(.6,.05+oe(se,9)*.08,.85+oe(se,11)*.15),Qe(G),k.mesh.position.copy(G),Re.copy(G).add(L),k.mesh.lookAt(Re),k.accent.material.color.set(z),k.accent.material.emissive.set(z).multiplyScalar(.35),k.plume.visible=B,B&&k.plume.scale.set(.8+_e*.2,.8+_e*.2,_e*(.8+Math.sin(J*40+te)*.15));const O=nt(G);k.glint.visible=!0,k.glint.position.copy(G),k.glint.material.color.set(B?"#cfe8ff":z),k.glint.material.opacity=O>60?0:B?1:.7,k.glint.scale.setScalar((B?9:5)/O)}const Ke=new Map,ct=new Kn({color:"#b9bec8",metalness:.5,roughness:.5}),xt=new Kn({color:"#4a505c",metalness:.4,roughness:.7}),it=new Kn({vertexColors:!0,metalness:.55,roughness:.45});function Rt(k){const G=new Sn,L=(B,J,te,se=ct)=>new qe(new pi(B,J,te),se);if(k==="signal"){G.add(L(.12,.12,.18));const B=new qe(new ai(.14,12,6,0,Math.PI*2,0,Math.PI/3),ct);B.position.z=.12,B.rotation.x=-Math.PI/2,G.add(B,L(.5,.004,.08,xt))}else if(k==="wreck"){for(let B=0;B<4;B++){const J=L(.12+B*.03,.1,.22-B*.03,B%2?xt:ct);J.position.set((B-1.5)*.18,Math.sin(B*2)*.08,Math.cos(B*3)*.1),J.rotation.set(B,B*2,B*.5),G.add(J)}for(let B=0;B<6;B++){const J=new Yn(new Nn({map:Ni,color:"#cfe8ff",blending:on,depthWrite:!1,transparent:!0,opacity:.7}));J.position.set(Math.sin(B*5)*.35,Math.cos(B*3)*.2,Math.sin(B*7)*.3),J.scale.setScalar(.12),G.add(J)}}else if(k==="convoy")for(let B=0;B<3;B++){const J=new qe(l[2].base,it);J.position.set((B-1)*.25,0,-B*.5),J.scale.setScalar(.8),G.add(J)}else{for(let B=0;B<6;B++){const J=L(.12,.1,.12,B%3?ct:xt);J.position.set((B%3-1)*.14,Math.floor(B/3)*.11,0),G.add(J)}G.add(L(.46,.02,.16,xt))}const z=new Yn(new Nn({map:Ni,color:"#ffd479",blending:on,depthWrite:!1,transparent:!0}));return i.add(G,z),{g:G,glint:z,kind:k}}function Vt(k,G,L){const z=new Set;for(const B of k.happenings||[]){const J=k.bodies[B.at];if(J.visitor||!Te[J.id])continue;z.add(B.id),Ke.has(B.id)||Ke.set(B.id,Rt(B.kind));const te=Ke.get(B.id),se=Te[J.id],_e=J.size*2.9+1.2,ye=L*.15+B.id;if(ne.set(se.x+Math.cos(ye)*_e,se.y+.4,se.z+Math.sin(ye)*_e),te.kind==="convoy"){const O=Dn.clamp((B.starts-G)/60,0,1),ue=B.id*2.399;ne.x+=Math.cos(ue)*O*70,ne.z+=Math.sin(ue)*O*70,Re.set(-Math.cos(ue),0,-Math.sin(ue)),O<=0&&Re.set(-Math.sin(ye),0,Math.cos(ye)),te.g.lookAt(ne.clone().add(Re))}else te.g.rotation.x+=.004,te.g.rotation.y+=te.kind==="wreck"?.01:.003;te.g.position.copy(ne),te.g.visible=!0;const Ne=nt(te.g.position);te.glint.position.copy(ne),te.glint.scale.setScalar((te.kind==="signal"?.6+.4*Math.sin(L*5):1)*9/Ne),te.glint.material.opacity=Ne>80?.3:.9}for(const[B,J]of Ke)z.has(B)||(J.g.removeFromParent(),J.glint.removeFromParent(),Ke.delete(B))}function ln(k,G,L,z){const B=k.time;s.value=z;const J=k.stars||[{r:0,period:1,phase:0,size:1}];J.slice(0,2).forEach((D,re)=>{const Ce=re?c:o,ht=Rs(k,re,B);Ce.visible=!0,Ce.position.set(ht.x,ht.y,ht.z),Ce.scale.setScalar(D.size)}),J.length<2&&(c.visible=!1);for(const D of a){const re=(z+D.phase)%D.period/D.period;re<D.lastU&&D.place(),D.lastU=re,D.m.material.opacity=Math.sin(re*Math.PI)**2*D.peak,D.m.scale.setScalar(.6+re*.6)}const te=(D,re)=>D>=0&&k.tech?k.tech[D][re]:0;for(const D of f){const re=Mt(k,D.b,B);Te[D.b.id]=re}let se=0;for(const D of f)ks(k,D.b,B)&&(se=Math.max(se,Math.hypot(Te[D.b.id].x,Te[D.b.id].z)));se=se*1.2+20;const _e=Math.hypot(d.target.x,d.target.z);if(_e>se&&(d.target.x*=se/_e,d.target.z*=se/_e),d.target.y=Dn.clamp(d.target.y,-se*.3,se*.3),d.follow===null&&(d.target.y*=1-Math.min(1,L*2)),d.follow!==null){const D=Te[d.follow];d.target.lerp(ne.set(D.x,D.y,D.z),Math.min(1,L*6))}G.dragging||(d.az+=d.vaz,d.pol+=d.vpol,d.vaz*=.92,d.vpol*=.92),d.goalDist&&(d.dist+=(d.goalDist-d.dist)*Math.min(1,L*4),Math.abs(d.goalDist-d.dist)<.01*d.dist&&(d.goalDist=null)),d.pol=Dn.clamp(d.pol,.15,Math.PI-.15),d.dist=Dn.clamp(d.dist,d.minDist,d.maxDist),r.position.setFromSphericalCoords(d.dist,d.pol,d.az).add(d.target),r.lookAt(d.target),r.updateMatrixWorld();const ye=window.innerWidth,Ne=window.innerHeight;let O=0;Ah.value.set(0,0,0).applyMatrix4(r.matrixWorldInverse);const ue=G.vis,ie=D=>!ue||ue.bodies.has(D.id),ve=D=>!ue||D.owner===ue.owner||ue.seesFleet(D,On(D,B)),Me=D=>!ue||D.owner===ue.owner||ue.intel>=2&&ve(D),pe=D=>!ue||D.owner===ue.owner||ue.intel>=3&&ve(D)||ue.warn&&k.bodies[D.to].owner===ue.owner,Ue=D=>!ue||D.owner===ue.owner||ue.intel>=1,De=new Map;for(const D of k.fleets){if(D.probe)continue;const re=k.bodies[D.to];if(D.owner===re.owner?D.owner!==(ue?ue.owner:0):!pe(D))continue;const Ce=D.T-(B-D.t0),ht=`${D.to}:${D.owner}`,et=De.get(ht)||{to:D.to,owner:D.owner,n:0,eta:1/0,sized:Ue(D)};et.n+=D.n,et.eta=Math.min(et.eta,Ce),De.set(ht,et)}const pt=new Map;for(const D of De.values())pt.has(D.to)||pt.set(D.to,[]),pt.get(D.to).push(D);const lt=new Set,Qt=new Map;for(const D of f){const re=D.b;if(re.parent===null||G.selected===re.id||G.target===re.id||re.sieges.length||k.fleets.some(ht=>ht.to===re.id&&ht.owner!==re.owner))continue;const Ce=Te[re.parent];ne.copy(D.g.position).project(r),Re.set(Ce.x,Ce.y,Ce.z).project(r),!(Math.hypot((ne.x-Re.x)*ye,(ne.y-Re.y)*Ne)/2>=46)&&(lt.add(re.id),re.owner!==Be&&re.ships>0&&ie(re)&&(Qt.has(re.parent)||Qt.set(re.parent,[]),Qt.get(re.parent).push(`<span class="kid" style="color:${ft(re.owner)}">+${re.ships}</span>`)))}for(const D of f){const{b:re}=D,Ce=Te[re.id];if(D.g.position.set(Ce.x,Ce.y,Ce.z),D.line.material.uniforms&&(D.line.material.uniforms.uTh.value=re.phase+2*Math.PI*B/re.period),re.parent!==null){const de=Te[re.parent];D.lineHolder.position.set(de.x,de.y,de.z)}else if(re.star){const de=Rs(k,re.star,B);D.lineHolder.position.set(de.x,de.y,de.z)}if(D.reach&&(D.reach.position.set(Ce.x,0,Ce.z),D.reach.visible=G.selected===re.id||G.peek===re.id||G.target===re.id),re.visitor){const de=ks(k,re,B);if(D.g.visible=de,!de){D.label.style.visibility="hidden";continue}const ze=k.visit&&k.visit.kind==="comet";if(D.body.visible=D.tail.visible=ze,D.hulk.visible=!ze,ze){const Oe=Math.max(1,Math.hypot(Ce.x,Ce.y,Ce.z)),xe=Dn.clamp(2600/Oe,8,60),Ge=Dn.clamp(120/Oe,.55,1),rt=Re.set(Ce.x,Ce.y,Ce.z).normalize(),je=Mt(k,re,B+2),mt=new F(Ce.x-je.x,Ce.y-je.y,Ce.z-je.z).normalize(),{ion:It,dust:Ee,coma:Ut}=D.tail.userData;It.forEach((Ze,un)=>{const $t=(un+1)/It.length;Ze.position.copy(rt).multiplyScalar($t*xe),Ze.scale.setScalar(.8+$t*xe*.12),Ze.material.opacity=.5*Ge*(1-$t)**1.3}),Ee.forEach((Ze,un)=>{const $t=(un+1)/Ee.length;Ze.position.copy(rt).multiplyScalar($t*xe*.75).addScaledVector(mt,$t*$t*xe*.35),Ze.scale.setScalar(1+$t*xe*.18),Ze.material.opacity=.38*Ge*(1-$t)**1.1}),Ut.position.set(0,0,0),Ut.scale.setScalar(2.2+Ge*3),Ut.material.opacity=.35+Ge*.4}else D.hulk.rotation.y+=L*.08}if(re.kind==="station")D.body.rotation.z+=L*.5;else if(re.kind==="asteroid")D.body.rotation.x+=L*.3,D.body.rotation.y+=L*.2;else{D.body.rotation.y+=L*.05;const de=D.body.getObjectByName("clouds");de&&(de.rotation.y+=L*.012)}const ht=ft(re.owner);if(D.owner!==re.owner){D.owner!==null&&(D.pulse=1),D.owner=re.owner,D.body.material&&D.body.material.emissiveMap&&(D.body.material.emissiveIntensity=re.owner===Be?0:1.6);const de=D.body.getObjectByName&&D.body.getObjectByName("windows");de&&(de.visible=re.owner!==Be),D.mark.material.color.set(ht),D.label.style.color=ht}D.pulse=Math.max(0,D.pulse-L);const et=re.structures.map(de=>de.type+de.level+(de.left>0&&!de.next||de.scrap?"~":"")).join();et!==D.sig&&(D.sig=et,D.structs&&D.structs.removeFromParent(),D.surface.clear(),D.structs=new Sn,re.structures.forEach((de,ze)=>{if(re.kind==="station"&&de.type==="shipyard")return;const Oe=uM(de.type,re,ze,!de.scrap&&(de.left<=0||!!de.next),de.level);(de.type==="shipyard"||de.type==="skimmer"?D.structs:D.surface).add(Oe)}),D.g.add(D.structs));const Wt=G.selected===re.id,xn=G.target===re.id,$n=nt(D.g.position),Xn=Math.max(re.size*3.2*$n,22);D.mark.scale.setScalar(Xn/$n*(1+D.pulse*.6+(Wt?Math.sin(z*5)*.06:0))),D.mark.material.opacity=Wt?1:xn?.9:re.owner===Be?.25:.7,re.size*$n>70&&(D.mark.material.opacity*=.25);const Cn=ie(re)&&re.ships>0?bn(re.vet):0;D.mark.material.map!==vl[Cn]&&(D.mark.material.map=vl[Cn],D.mark.material.needsUpdate=!0),Wt||xn?D.mark.material.color.set(Wt?"#ffffff":ht):D.mark.material.color.set(ht);const sn=ie(re);D.structs&&(D.structs.visible=sn),D.surface.visible=sn;const Rn=sn&&re.sieges.length>0,kt=[],Pn=[],eo=(de,ze,Oe,xe,Ge,rt)=>{for(let je=0;je<de;je++){const mt=p(O++);if(!mt)return;const It=oe(Ge,je),Ee=It*Math.PI*2+z*xe*(.8+It*.4),Ut=Oe*(1+oe(je,Ge)*.15);ne.set(Ce.x+Math.cos(Ee)*Ut,Ce.y+Math.sin(Ee*.7+It)*Ut*.15,Ce.z+Math.sin(Ee)*Ut),Ie.set(-Math.sin(Ee),0,Math.cos(Ee)),Ft(mt,ne,Ie,ft(ze),!1,z,je,Ge*131+je),mt.glint.material.opacity*=.6,rt&&rt.push({p:ne.clone(),owner:ze})}};sn&&eo(Math.min(re.ships,20),re.owner,re.size*1.8+.4,.25,re.id*13,Rn?kt:null);for(const de of sn?re.sieges:[])eo(Math.min(de.n,20),de.owner,re.size*2.4+.8,-.18,re.id*29+de.owner,Pn);if(Rn){for(let Oe=0;Oe<Math.ceil(re.guns);Oe++){const xe=oe(re.id,Oe*2)*Math.PI*2+z*.05,Ge=(oe(Oe*2+1,re.id)-.5)*1.6,rt=re.size*1.02;kt.push({p:new F(Ce.x+Math.cos(xe)*Math.cos(Ge)*rt,Ce.y+Math.sin(Ge)*rt,Ce.z+Math.sin(xe)*Math.cos(Ge)*rt),owner:re.owner})}const de=Pn.length+kt.length;let ze=de*L*1.6;for(;ze>0&&Pn.length&&kt.length;){if(Math.random()<ze){const Oe=Math.random()<Pn.length/de,xe=(Oe?Pn:kt)[Math.random()*(Oe?Pn:kt).length|0],Ge=(Oe?kt:Pn)[Math.random()*(Oe?kt:Pn).length|0];ae(xe.p,Ge.p,ft(xe.owner),Math.min(2,te(xe.owner,"weapons")),te(Ge.owner,"armour")>=2)}ze-=1}for(const[Oe,xe]of[[re.lostDef,kt],[re.lostAtk,Pn]])for(let Ge=0;Ge<Math.min(3,Oe||0);Ge++){const rt=xe.length?xe[Math.random()*xe.length|0].p:ne.set(Ce.x,Ce.y,Ce.z);V(rt,"#ffffff",3,.3),V(rt,"#ffc070",5,1.2);for(let je=0;je<4;je++)Re.set(rt.x+(Math.random()-.5)*1.6,rt.y+(Math.random()-.5)*1.6,rt.z+(Math.random()-.5)*1.6),V(Re,"#ff8a40",1.4,1+Math.random()*.8)}}re.lostDef=re.lostAtk=0,re.captured&&(D.pulse=1,re.captured=!1);const Ia=re.wonder?1:re.project?Math.max(.02,Math.min(1,1-re.project.left/Bt[re.project.key].time)):0,Ur=Math.round(Ia*60);if(D.megaStep!==Ur&&(D.megaStep=Ur,D.mega&&(D.g.remove(D.mega),D.mega.geometry.dispose(),D.mega=null),Ur)){const de=re.size*2.1+.6;D.mega=new qe(new Cr(de,Math.max(.05,re.size*.04),6,96,Ur/60*Math.PI*2),new nr({color:"#ffd479",transparent:!0,opacity:re.wonder?.9:.55,depthWrite:!1})),D.mega.rotation.x=Math.PI/2,D.g.add(D.mega)}if(D.mega&&(D.mega.rotation.z=z*.05),ne.copy(D.g.position).project(r),ne.z>1||lt.has(re.id)){D.label.style.visibility="hidden";continue}const E=(sn?re.sieges:[]).map(de=>`<span class="atk" style="color:${ft(de.owner)}">${dt("attack")}${de.n}</span>`).join(""),H=sn?re.owner===Be?`<i class="guns">${dt("guns")}${Math.ceil(re.guns)}</i>`:re.ships?`<b>${re.ships}</b>`:"":'<b class="unk">?</b>',ee=(Qt.get(re.id)||[]).join(""),K=(pt.get(re.id)||[]).map(de=>{const ze=Math.max(0,de.eta),Oe=de.owner===re.owner;return`<span class="${Oe?"rein":"inc"}" style="color:${ft(de.owner)}">${dt(Oe?"reinforce":"incoming")}${de.sized?de.n:"?"} ${Math.floor(ze/60)}:${String(Math.floor(ze%60)).padStart(2,"0")}</span>`}).join(""),j=(k.happenings||[]).filter(de=>de.at===re.id).map(de=>{const ze=sr[de.kind],Oe=B<de.starts,xe=!Oe&&de.holder!==Be,Ge=Math.max(0,Oe?de.starts-B:xe?ze.hold-de.held:de.ends-B),rt=xe?ft(de.holder):"#ffd479",je=`${Math.floor(Ge/60)}:${String(Math.floor(Ge%60)).padStart(2,"0")}`;return`<span class="ev" style="color:${rt}">${dt(de.kind)} ${Oe?`in ${je}`:xe?`hold ${je}`:`gone ${je}`}</span>`}).join(""),we=(re.perk?`<i class="perk" title="${Hn[re.perk].name}">${dt(re.perk)}</i> `:"")+(re.wonder?`<i class="perk">${dt(re.wonder)}</i> `:re.project?`<i class="perk proj">${dt(re.project.key)}</i> `:""),Pe=`<span class="row1">${H}${ee}</span>${E}${K}${j}<small>${we}${re.name}</small>`;Pe!==D.shown&&(D.label.innerHTML=Pe,D.shown=Pe),D.label.style.visibility="visible";const be=(ne.x*.5+.5)*ye,Fe=(-ne.y*.5+.5)*Ne;D.label.style.transform=`translate(${be}px, ${Fe+Xn/2+2}px) translate(-50%, 0)`}Vt(k,B,z);let Gt=0,fr=0;for(const D of k.fleets){if(!ve(D))continue;const re=On(D,B),Ce=ft(D.owner),ht=new F(re.nx,re.ny,re.nz);Ie.set(re.vx,re.vy,re.vz),Ie.lengthSq()<1e-9&&Ie.copy(ht),Ie.normalize(),vt.crossVectors(Ie,Je),vt.lengthSq()<1e-6&&vt.set(1,0,0),vt.normalize();for(let et=0;et<(D.probe?1:D.n);et++){const Wt=p(O++);if(!Wt)break;const xn=Math.floor(et/3),$n=et%3-1,Xn=B-D.t0,Cn=Dn.smoothstep(Math.min(Xn,D.T-Xn),0,12)*.92+.08,sn=oe(D.id,et),Rn=oe(et,D.id),kt=oe(D.id+7,et*3),Pn=z*(.3+sn*.4)+Rn*6;ne.set(re.x,re.y,re.z).addScaledVector(vt,($n*(.9+kt*.5)+xn%2*.45+(sn-.5)*.7+Math.sin(Pn)*.08)*Cn).addScaledVector(Je,((Rn-.5)*.9+Math.cos(Pn*.8)*.06)*Cn).addScaledVector(Ie,(-xn*(1.1+kt*.5)-(Rn-.5)*.8)*Cn),Ft(Wt,ne,ht,Ce,re.burning,z,et,D.id*97+et,1+.35*te(D.owner,"drives"))}if(Gt<200*T&&Me(D)){const et=new $e(Ce);let Wt=re;for(let Cn=1;Cn<=T;Cn++){const sn=re.progress+(1-re.progress)*Cn/T,Rn=On(D,D.t0+sn*D.T),kt=1-Cn/T*.7;S.set([Wt.x,Wt.y,Wt.z,Rn.x,Rn.y,Rn.z],Gt*6),x.set([et.r*kt,et.g*kt,et.b*kt,et.r*kt,et.g*kt,et.b*kt],Gt*6),Gt++,Wt=Rn}const xn=_(fr++);xn.visible=!0,xn.position.set(D.p1.x,D.p1.y,D.p1.z),xn.material.color.set(Ce);const $n=D.owner!==(G.me??0),Xn=$n?1+.35*Math.sin(z*6):1;xn.material.opacity=$n?.9:.5,xn.scale.setScalar(($n?22:14)*Xn/nt(xn.position))}}for(let D=O;D<m.length;D++)m[D].mesh.visible=!1,m[D].glint.visible=!1;let ti=0;for(const D of k.fleets){const re=On(D,B);ne.set(re.x,re.y,re.z).project(r);const Ce=Le(ti++);if(ne.z>1||!ve(D)){Ce.style.visibility="hidden";continue}const ht=D.owner===(G.me??0),et=D.probe?`${dt("probe")}${r.position.distanceTo(Re.set(re.x,re.y,re.z))<60?" probe":""}`:`${dt("fleet")}${Ue(D)?D.n:"?"}${D.dark?` ${dt("dark")}`:""}`,Wt=Ue(D)?bn(D.vet):0;Ce._v!==Wt&&(Ce._v=Wt,Ce.dataset.v=Wt),Ce._t!==et&&(Ce._t=et,Ce.innerHTML=et),Ce.style.color=ft(D.owner),Ce.style.borderColor=ft(D.owner),Ce.style.opacity=ht?G.fleet===D.id?1:.85:.6,Ce.classList.toggle("sel",G.fleet===D.id),Ce.style.visibility="visible",Ce.style.transform=`translate(${(ne.x*.5+.5)*ye+12}px, ${(-ne.y*.5+.5)*Ne-9}px)`}for(let D=ti;D<He.length;D++)He[D].style.visibility="hidden";for(let D=fr;D<C.length;D++)C[D].visible=!1;y.setDrawRange(0,Gt*2),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0;let An=0;for(const D of X){if(!D.live)continue;D.age+=L;const re=D.age/D.life;if(re>=1){D.live=!1,D.pd?V(D.b,"#dff4ff",.35,.15):V(D.b,D.color,D.tail===1?.9:.5,.25);continue}if(An>=N)continue;ne.lerpVectors(D.a,D.b,D.tail===1?0:Math.max(0,re-D.tail)),D.tail===1?Re.copy(D.b):Re.lerpVectors(D.a,D.b,re),me.set([ne.x,ne.y,ne.z,Re.x,Re.y,Re.z],An*6);const Ce=D.c;if(D.tail===1){const ht=1-re;ce.set([Ce.r*ht*.6,Ce.g*ht*.6,Ce.b*ht*.6,Ce.r*ht,Ce.g*ht,Ce.b*ht],An*6)}else ce.set([Ce.r*.2,Ce.g*.2,Ce.b*.2,Ce.r,Ce.g,Ce.b],An*6);An++}Q.setDrawRange(0,An*2),Q.attributes.position.needsUpdate=!0,Q.attributes.color.needsUpdate=!0;for(const D of P){if(!D.visible)continue;D.userData.age+=L;const re=D.userData.age/D.userData.life;if(re>=1){D.visible=!1;continue}D.scale.setScalar(D.userData.size*(.4+Math.sqrt(re))),D.material.opacity=Math.min(1,(1-re)*1.6)}if(G.preview){const{p1:D}=G.preview;A.visible=!0;const re={...G.preview,t0:0};for(let ht=0;ht<=32;ht++){const et=On(re,ht/32*re.T);w.attributes.position.setXYZ(ht,et.x,et.y,et.z)}w.attributes.position.needsUpdate=!0,A.computeLineDistances(),A.material.dashSize=6/nt(ne.set(D.x,D.y,D.z)),A.material.gapSize=A.material.dashSize*.7;const Ce=_(fr++);Ce.visible=!0,Ce.position.set(D.x,D.y,D.z),Ce.material.color.set("#ffffff"),Ce.material.opacity=.6,Ce.scale.setScalar(22/nt(Ce.position))}else A.visible=!1;t.render(i,r)}function Ct(k,G){const L=window.innerWidth,z=window.innerHeight;let B=null,J=1/0;for(const te of f){if(!te.g.visible||(ne.copy(te.g.position).project(r),ne.z>1))continue;const se=Math.hypot((ne.x*.5+.5)*L-k,(-ne.y*.5+.5)*z-G),_e=Math.max(30,te.b.size*nt(te.g.position)+12);se<_e&&se<J&&(J=se,B=te.b.id)}return B}function Ot(k,G,L,z){let B=null,J=24;for(const te of k.fleets){if(te.owner!==z)continue;const se=On(te,k.time);if(ne.set(se.x,se.y,se.z).project(r),ne.z>1)continue;const _e=Math.hypot((ne.x*.5+.5)*window.innerWidth-G,(-ne.y*.5+.5)*window.innerHeight-L);_e<J&&(J=_e,B=te.id)}return B}function W(k,G){const L=new F(k/window.innerWidth*2-1,-(G/window.innerHeight)*2+1,.5).unproject(r),z=new Ea(r.position,L.sub(r.position).normalize()),B=new vi(Je.clone(),-d.target.y),J=z.intersectPlane(B,new F);if(J&&J.distanceTo(r.position)<d.dist*4)return J;const te=new vi().setFromNormalAndCoplanarPoint(r.getWorldDirection(new F),d.target);return z.intersectPlane(te,new F)}function Jt(k,G,L){d.follow=null,d.goalDist=null;const z=W(k,G),B=Dn.clamp(d.dist*L,d.minDist,d.maxDist),J=B/d.dist;d.dist=B,z&&d.target.lerp(z,1-J)}function yt(k,G){d.follow=null;const L=2*d.dist*Math.tan(Dn.degToRad(r.fov/2))/window.innerHeight,z=new F().setFromMatrixColumn(r.matrixWorld,0),B=new F().crossVectors(Je,z).normalize();d.target.addScaledVector(z,-k*L).addScaledVector(B,G*L)}function R(k,G,L=!0){if(d.follow=G,G===null||!L)return;const z=k.bodies[G];d.goalDist=Math.max(d.minDist,z.size*9+3)}function M(k,G,L){const z=Ct(G,L);return z!==null?f[z].g.position.clone():W(G,L)||d.target.clone()}function Y(k,G,L){d.follow=null,d.goalDist=null;const z=new F().subVectors(r.position,d.target),B=new K0().setFromVector3(z);L=Dn.clamp(B.phi+L,.15,Math.PI-.15)-B.phi;const te=new F().setFromMatrixColumn(r.matrixWorld,0).normalize(),se=new lr().setFromAxisAngle(Je,G).multiply(new lr().setFromAxisAngle(te,L)),_e=r.position.clone().sub(k).applyQuaternion(se).add(k);d.target.sub(k).applyQuaternion(se).add(k),B.setFromVector3(_e.clone().sub(d.target)),d.az=B.theta,d.pol=B.phi,d.dist=B.radius}function Z(k,G,L){const z=Ct(k,G);if(d.goalDist=null,z===null){Jt(k,G,L);return}d.follow=null;const B=f[z].g.position,J=Dn.clamp(d.dist*L,d.minDist,d.maxDist);d.target.lerp(B,1-J/d.dist),d.dist=J}function le(k){return ne.copy(f[k].g.position).project(r),{x:(ne.x*.5+.5)*window.innerWidth,y:(-ne.y*.5+.5)*window.innerHeight}}return{build:g,render:ln,resize:he,pick:Ct,pickFleet:Ot,orbit:d,zoomAt:Jt,pan:yt,focus:R,screenOf:le,pivotAt:M,rotateAround:Y,zoomToward:Z}}class fM{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return hM(e).buffer}}function hM(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function Rh(n){return new pM(n).unpack()}function Ph(n){const e=new mM,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class pM{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,o;for(;i<e;)s=t[i],s<160?(o=s,i++):(s^192)<32?(o=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(o=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(o=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(o);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class mM{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),o=2**32,a=t<<31|i+1023<<20|s/o&1048575,c=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new fM,this._textEncoder=new TextEncoder}}let Lh=!0,Dh=!0;function Cs(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function Lr(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){fu("Unable to polyfill events");return}const r=n.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(a,c){if(a!==e)return s.apply(this,arguments);const l=u=>{const f=t(u);f&&(c.handleEvent?c.handleEvent(f):c(f))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),s.apply(this,[a,l])};const o=r.removeEventListener;r.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function gM(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Lh=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function _M(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Dh=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function fu(){if(typeof window=="object"){if(Lh)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function hu(n,e){Dh&&console.warn(n+" is deprecated, please use "+e+" instead.")}function vM(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i){const r=parseInt(i.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Cs(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Cs(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Cs(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=Cs(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Qd(n){return Object.prototype.toString.call(n)==="[object Object]"}function Ih(n){return Qd(n)?Object.keys(n).reduce(function(e,t){const i=Qd(n[t]),r=i?Ih(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function xl(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?xl(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{xl(n,n.get(r),t)})}))}function ef(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{n.forEach(a=>{a.type===i&&a.trackId===o.id&&xl(n,a,r)})}),r}const tf=fu;function Uh(n,e){if(e.version>=64)return;const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof a[l]=="object"?a[l]:{ideal:a[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const f=function(d,h){return d?d+h.charAt(0).toUpperCase()+h.slice(1):h==="deviceId"?"sourceId":h};if(u.ideal!==void 0){c.optional=c.optional||[];let d={};typeof u.ideal=="number"?(d[f("min",l)]=u.ideal,c.optional.push(d),d={},d[f("max",l)]=u.ideal,c.optional.push(d)):(d[f("",l)]=u.ideal,c.optional.push(d))}u.exact!==void 0&&typeof u.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[f("",l)]=u.exact):["min","max"].forEach(d=>{u[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[f(d,l)]=u[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},r=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(u,f,d){f in u&&!(d in u)&&(u[d]=u[f],delete u[f])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=i(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete a.video.facingMode;let f;if(l.exact==="environment"||l.ideal==="environment"?f=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(f=["front"]),f)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let h=d.find(g=>f.some(v=>g.label.toLowerCase().includes(v)));return!h&&d.length&&f.includes("back")&&(h=d[d.length-1]),h&&(a.video.deviceId=l.exact?{exact:h.deviceId}:{ideal:h.deviceId}),a.video=i(a.video),tf("chrome: "+JSON.stringify(a)),c(a)})}a.video=i(a.video)}return tf("chrome: "+JSON.stringify(a)),c(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){r(a,u=>{t.webkitGetUserMedia(u,c,f=>{l&&l(s(f))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return r(c,l=>a(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(f=>{f.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function Nh(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function Fh(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===s.track.id):o={track:s.track};const a=new Event("track");a.track=s.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[r.stream],this.dispatchEvent(a)}),r.stream.getTracks().forEach(s=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===s.id):o={track:s};const a=new Event("track");a.track=s,a.receiver=o,a.transceiver={receiver:o},a.streams=[r.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Lr(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Oh(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,c){let l=r.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function kh(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const o=i.apply(this,[]);return o.forEach(a=>a._pc=this),o});const r=n.RTCPeerConnection.prototype.addTrack;r&&(n.RTCPeerConnection.prototype.addTrack=function(){const o=r.apply(this,arguments);return o._pc=this,o}),n.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>ef(a,o.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const s=i.apply(this,[]);return s.forEach(o=>o._pc=this),s}),Lr(n,"track",r=>(r.receiver._pc=r.srcElement,r)),n.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>ef(o,s.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const r=arguments[0];let s,o,a;return this.getSenders().forEach(c=>{c.track===r&&(s?a=!0:s=c)}),this.getReceivers().forEach(c=>(c.track===r&&(o?a=!0:o=c),c.track===r)),a||s&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Bh(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(f=>f.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),r.apply(this,arguments)}}function zh(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Bh(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(f=>this._reverseStreams[f.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(f=>{if(this.getSenders().find(h=>h.track===f))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const f=new n.MediaStream(u.getTracks());this._streams[u.id]=f,this._reverseStreams[f.id]=u,u=f}i.apply(this,[u])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},n.RTCPeerConnection.prototype.addTrack=function(u,f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(v=>v===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[f.id];if(g)g.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new n.MediaStream([u]);this._streams[f.id]=v,this._reverseStreams[v.id]=f,this.addStream(v)}return this.getSenders().find(v=>v.track===u)};function s(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const h=l._reverseStreams[d],g=l._streams[h.id];f=f.replace(new RegExp(g.id,"g"),h.id)}),new RTCSessionDescription({type:u.type,sdp:f})}function o(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const h=l._reverseStreams[d],g=l._streams[h.id];f=f.replace(new RegExp(h.id,"g"),g.id)}),new RTCSessionDescription({type:u.type,sdp:f})}["createOffer","createAnswer"].forEach(function(l){const u=n.RTCPeerConnection.prototype[l],f={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[g=>{const v=s(this,g);d[0].apply(null,[v])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):u.apply(this,arguments).then(g=>s(this,g))}};n.RTCPeerConnection.prototype[l]=f[l]});const a=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),n.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(h=>{this._streams[h].getTracks().find(v=>u.track===v)&&(d=this._streams[h])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function yl(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function Gh(n,e){e.version>102||Lr(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const nf=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Gh,shimAddTrackRemoveTrack:zh,shimAddTrackRemoveTrackWithNative:Bh,shimGetSendersWithDtmf:Oh,shimGetUserMedia:Uh,shimMediaStream:Nh,shimOnTrack:Fh,shimPeerConnection:yl,shimSenderReceiverGetStats:kh},Symbol.toStringTag,{value:"Module"}));function Hh(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,o){hu("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o.audio,"autoGainControl","mozAutoGainControl"),r(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},i&&i.prototype.getSettings){const o=i.prototype.getSettings;i.prototype.getSettings=function(){const a=o.apply(this,arguments);return r(a,"mozAutoGainControl","autoGainControl"),r(a,"mozNoiseSuppression","noiseSuppression"),a}}if(i&&i.prototype.applyConstraints){const o=i.prototype.applyConstraints;i.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a,"autoGainControl","mozAutoGainControl"),r(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function xM(n,e){n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)}))}function Vh(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Ml(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]}))}function Wh(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[s||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((u,f)=>{c.set(f,Object.assign({},u,{type:t[u.type]||u.type}))})}return c}).then(o,a)}}function $h(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Xh(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),Lr(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function qh(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){hu("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function Yh(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function Kh(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.addTransceiver;t&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(s){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=r,a.sendEncodings=r,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function jh(n,e){if(!(typeof n=="object"&&n.RTCRtpSender)||e.version>=110)return;const t=n.RTCRtpSender.prototype.getParameters;t&&(n.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function Zh(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Jh(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const rf=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Kh,shimCreateAnswer:Jh,shimCreateOffer:Zh,shimGetDisplayMedia:xM,shimGetParameters:jh,shimGetStats:Wh,shimGetUserMedia:Hh,shimOnTrack:Vh,shimPeerConnection:Ml,shimRTCDataChannel:Yh,shimReceiverGetStats:Xh,shimRemoveStream:qh,shimSenderGetStats:$h},Symbol.toStringTag,{value:"Module"}));function Qh(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function ep(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,i.dispatchEvent(o)})}),e.apply(i,arguments)}}}function tp(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d},e.createAnswer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d};let a=function(c,l,u){const f=r.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f};e.setLocalDescription=a,a=function(c,l,u){const f=s.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.setRemoteDescription=a,a=function(c,l,u){const f=o.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.addIceCandidate=a}function np(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(ip(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}.bind(e))}function ip(n){return n&&n.video!==void 0?Object.assign({},n,{video:Ih(n.video)}):n}function rp(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let o=0;o<i.iceServers.length;o++){let a=i.iceServers[o];a.urls===void 0&&a.url?(hu("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(i.iceServers[o])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function sp(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function op(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function ap(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const sf=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:ap,shimCallbacksAPI:tp,shimConstraints:ip,shimCreateOfferLegacy:op,shimGetUserMedia:np,shimLocalStreamsAPI:Qh,shimRTCIceServerUrls:rp,shimRemoteStreamsAPI:ep,shimTrackEventTransceiver:sp},Symbol.toStringTag,{value:"Module"}));function yM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var cp={exports:{}};(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let a=3;a<s.length;a++){const c=s[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const u=e.parseRtpMap(l),f=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(u.parameters=f.length?e.parseFmtp(f[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),i.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{i.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(u=>u.type===c.type&&u.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(o=>{r+=e.writeRtpMap(o),r+=e.writeFmtp(o),r+=e.writeRtcpFb(o)});let s=0;return i.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(o=>{r+=e.writeExtmap(o)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,o=r.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));u.length>0&&u[0].length>1&&u[0][0]===c&&(l=u[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let h={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(h.rtx={ssrc:l}),i.push(h),s&&(h=JSON.parse(JSON.stringify(h)),h.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},i.push(h))}}),i.length===0&&c&&i.push({ssrc:c});let f=e.matchPrefix(t,"b=");return f.length&&(f[0].indexOf("b=TIAS:")===0?f=parseInt(f[0].substring(7),10):f[0].indexOf("b=AS:")===0?f=parseInt(f[0].substring(5),10)*1e3*.95-50*40*8:f=void 0,i.forEach(d=>{d.maxBitrate=f})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return i.mux=o.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return i=r[0].substring(7).split(" "),{stream:i[0],track:i[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return i=s[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:i.fmt,maxMessageSize:s};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,i){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
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
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(cp);var lp=cp.exports;const ss=yM(lp),MM=kp({__proto__:null,default:ss},[lp]);function Go(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=ss.parseCandidate(i.candidate);for(const o in s)o in r||Object.defineProperty(r,o,{value:s[o]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,Lr(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Sl(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||Lr(n,"icecandidate",e=>{if(e.candidate){const t=ss.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Ho(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=ss.splitSections(a.sdp);return c.shift(),c.some(l=>{const u=ss.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},i=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},r=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=ss.matchPrefix(a.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=i(arguments[0]),l=r(c),u=s(arguments[0],c);let f;l===0&&u===0?f=Number.POSITIVE_INFINITY:l===0||u===0?f=Math.max(l,u):f=Math.min(l,u);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return f}}),this._sctp=d}return o.apply(this,arguments)}}function Vo(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const o=r.send;r.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(r.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return o.apply(r,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const s=i.apply(this,arguments);return t(s,this),s},Lr(n,"datachannel",r=>(t(r.channel,r.target),r))}function bl(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",r);s.dispatchEvent(o)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function El(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function Wo(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function $o(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const SM=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:El,shimAddIceCandidateNullOrEmpty:Wo,shimConnectionState:bl,shimMaxMessageSize:Ho,shimParameterlessSetLocalDescription:$o,shimRTCIceCandidate:Go,shimRTCIceCandidateRelayProtocol:Sl,shimSendThrowTypeError:Vo},Symbol.toStringTag,{value:"Module"}));function bM({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=fu,i=vM(n),r={browserDetails:i,commonShim:SM,extractVersion:Cs,disableLog:gM,disableWarnings:_M,sdp:MM};switch(i.browser){case"chrome":if(!nf||!yl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=nf,Wo(n,i),$o(n),Uh(n,i),Nh(n),yl(n,i),Fh(n,i),zh(n,i),Oh(n),kh(n,i),Gh(n,i),Go(n),Sl(n),bl(n),Ho(n,i),Vo(n,i),El(n,i);break;case"firefox":if(!rf||!Ml||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=rf,Wo(n,i),$o(n),Hh(n,i),Ml(n,i),Wh(n,i),Vh(n),qh(n),$h(n),Xh(n),Yh(n),Kh(n,i),jh(n,i),Zh(n,i),Jh(n,i),Go(n),bl(n),Ho(n,i),Vo(n,i);break;case"safari":if(!sf||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=sf,Wo(n,i),$o(n),rp(n),op(n),tp(n),Qh(n),ep(n),sp(n),np(n),ap(n),Go(n),Sl(n),Ho(n,i),Vo(n,i),El(n,i);break;default:t("Unsupported browser!");break}return r}const of=bM({window:typeof window>"u"?void 0:window});function Dr(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class up{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,o=0;for(;o<i;){const a=Math.min(i,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:s,data:c,total:r};t.push(l),o=a,s++}return this._dataCount++,t}}}function EM(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const _c=of.default||of,Ts=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return _c.browserDetails.browser}getVersion(){return _c.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=_c.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},TM=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),dp=()=>Math.random().toString(36).slice(2),af={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class wM extends up{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=af,this.browser=Ts.getBrowser(),this.browserVersion=Ts.getVersion(),this.pack=Ph,this.unpack=Rh,this.supports=function(){const t={browser:Ts.isBrowserSupported(),webRTC:Ts.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(af),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Ts.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t}(),this.validateId=TM,this.randomToken=dp}}const Ln=new wM,AM="PeerJS: ";class CM{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[AM,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var ke=new CM,pu={},RM=Object.prototype.hasOwnProperty,wn="~";function $s(){}Object.create&&($s.prototype=Object.create(null),new $s().__proto__||(wn=!1));function PM(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function fp(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new PM(t,i||n,r),o=wn?wn+e:e;return n._events[o]?n._events[o].fn?n._events[o]=[n._events[o],s]:n._events[o].push(s):(n._events[o]=s,n._eventsCount++),n}function Xo(n,e){--n._eventsCount===0?n._events=new $s:delete n._events[e]}function vn(){this._events=new $s,this._eventsCount=0}vn.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)RM.call(t,i)&&e.push(wn?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};vn.prototype.listeners=function(e){var t=wn?wn+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=new Array(s);r<s;r++)o[r]=i[r].fn;return o};vn.prototype.listenerCount=function(e){var t=wn?wn+e:e,i=this._events[t];return i?i.fn?1:i.length:0};vn.prototype.emit=function(e,t,i,r,s,o){var a=wn?wn+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,u,f;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,i),!0;case 4:return c.fn.call(c.context,t,i,r),!0;case 5:return c.fn.call(c.context,t,i,r,s),!0;case 6:return c.fn.call(c.context,t,i,r,s,o),!0}for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];c.fn.apply(c.context,u)}else{var d=c.length,h;for(f=0;f<d;f++)switch(c[f].once&&this.removeListener(e,c[f].fn,void 0,!0),l){case 1:c[f].fn.call(c[f].context);break;case 2:c[f].fn.call(c[f].context,t);break;case 3:c[f].fn.call(c[f].context,t,i);break;case 4:c[f].fn.call(c[f].context,t,i,r);break;default:if(!u)for(h=1,u=new Array(l-1);h<l;h++)u[h-1]=arguments[h];c[f].fn.apply(c[f].context,u)}}return!0};vn.prototype.on=function(e,t,i){return fp(this,e,t,i,!1)};vn.prototype.once=function(e,t,i){return fp(this,e,t,i,!0)};vn.prototype.removeListener=function(e,t,i,r){var s=wn?wn+e:e;if(!this._events[s])return this;if(!t)return Xo(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!r||o.once)&&(!i||o.context===i)&&Xo(this,s);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||r&&!o[a].once||i&&o[a].context!==i)&&c.push(o[a]);c.length?this._events[s]=c.length===1?c[0]:c:Xo(this,s)}return this};vn.prototype.removeAllListeners=function(e){var t;return e?(t=wn?wn+e:e,this._events[t]&&Xo(this,t)):(this._events=new $s,this._eventsCount=0),this};vn.prototype.off=vn.prototype.removeListener;vn.prototype.addListener=vn.prototype.on;vn.prefixed=wn;vn.EventEmitter=vn;pu=vn;var Ir={};Dr(Ir,"ConnectionType",()=>ar);Dr(Ir,"PeerErrorType",()=>qt);Dr(Ir,"BaseConnectionErrorType",()=>Tl);Dr(Ir,"DataConnectionErrorType",()=>mu);Dr(Ir,"SerializationType",()=>Aa);Dr(Ir,"SocketEventType",()=>ir);Dr(Ir,"ServerMessageType",()=>pn);var ar=function(n){return n.Data="data",n.Media="media",n}({}),qt=function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n}({}),Tl=function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n}({}),mu=function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n}({}),Aa=function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n}({}),ir=function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n}({}),pn=function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n}({});const hp="1.5.5";class LM extends pu.EventEmitter{constructor(e,t,i,r,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+hp),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),ke.log("Server message received:",s)}catch{ke.log("Invalid server message",r.data);return}this.emit(ir.Message,s)},this._socket.onclose=r=>{this._disconnected||(ke.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(ir.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ke.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ke.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:pn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(ir.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class pp{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===ar.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ke.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;ke.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(ke.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:pn.Candidate,payload:{candidate:o.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ke.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Tl.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ke.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Tl.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ke.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ke.log("Listening for data channel"),e.ondatachannel=o=>{ke.log("Received data channel");const a=o.channel;s.getConnection(t,i)._initializeDataChannel(a)},ke.log("Listening for remote stream"),e.ontrack=o=>{ke.log("Received remote stream");const a=o.streams[0],c=s.getConnection(t,i);if(c.type===ar.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){ke.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);ke.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),ke.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===ar.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:pn.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(qt.WebRTC,r),ke.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(qt.WebRTC,i),ke.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();ke.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),ke.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:pn.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(qt.WebRTC,r),ke.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(qt.WebRTC,i),ke.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;ke.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),ke.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){r.emitError(qt.WebRTC,o),ke.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){ke.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ke.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(qt.WebRTC,t),ke.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ke.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ke.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){ke.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class mp extends pu.EventEmitter{emitError(e,t){ke.error("Error:",t),this.emit("error",new DM(`${e}`,t))}}class DM extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class gp extends mp{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var Il;const Ns=class Ns extends gp{get type(){return ar.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Ns.ID_PREFIX+Ln.randomToken(),this._negotiator=new pp(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ke.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case pn.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case pn.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:ke.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ke.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Il=new WeakMap,ps(Ns,Il,Ns.ID_PREFIX="mc_");let ga=Ns;class IM{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:o}=this._options,a=new URL(`${t}://${i}:${r}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",hp),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ke.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Ln.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Ln.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ke.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Ul,Nl;const xr=class xr extends gp{get type(){return ar.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||xr.ID_PREFIX+dp(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new pp(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ke.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(mu.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case pn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case pn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ke.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Ul=new WeakMap,Nl=new WeakMap,ps(xr,Ul,xr.ID_PREFIX="dc_"),ps(xr,Nl,xr.MAX_BUFFERED_AMOUNT=8388608);let _a=xr;class gu extends _a{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>_a.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ke.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class vc extends gu{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new up,this.serialization=Aa.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Rh(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=EM(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=Ph(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ke.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class UM extends gu{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Aa.None}}class NM extends gu{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=Ln.chunkedMTU){this.emitError(mu.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=Aa.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Fl;const Fs=class Fs extends mp{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:UM,json:NM,binary:vc,"binary-utf8":vc,default:vc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:Ln.CLOUD_HOST,port:Ln.CLOUD_PORT,path:"/",key:Fs.DEFAULT_KEY,token:Ln.randomToken(),config:Ln.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Ln.CLOUD_HOST?this._options.secure=Ln.isSecure():this._options.host==Ln.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ke.setLogFunction(this._options.logFunction),ke.logLevel=this._options.debug||0,this._api=new IM(t),this._socket=this._createServerConnection(),!Ln.supports.audioVideo&&!Ln.supports.data){this._delayedAbort(qt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Ln.validateId(i)){this._delayedAbort(qt.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(qt.ServerError,r))}_createServerConnection(){const e=new LM(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(ir.Message,t=>{this._handleMessage(t)}),e.on(ir.Error,t=>{this._abort(qt.SocketError,t)}),e.on(ir.Disconnected,()=>{this.disconnected||(this.emitError(qt.Network,"Lost connection to server."),this.disconnect())}),e.on(ir.Close,()=>{this.disconnected||this._abort(qt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case pn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case pn.Error:this._abort(qt.ServerError,i.msg);break;case pn.IdTaken:this._abort(qt.UnavailableID,`ID "${this.id}" is taken`);break;case pn.InvalidKey:this._abort(qt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case pn.Leave:ke.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case pn.Expire:this.emitError(qt.PeerUnavailable,`Could not connect to peer ${r}`);break;case pn.Offer:{const s=i.connectionId;let o=this.getConnection(r,s);if(o&&(o.close(),ke.warn(`Offer received for existing Connection ID:${s}`)),i.type===ar.Media){const c=new ga(r,this,{connectionId:s,_payload:i,metadata:i.metadata});o=c,this._addConnection(r,o),this.emit("call",c)}else if(i.type===ar.Data){const c=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});o=c,this._addConnection(r,o),this.emit("connection",c)}else{ke.warn(`Received malformed connection type:${i.type}`);return}const a=this._getMessages(s);for(const c of a)o.handleMessage(c);break}default:{if(!i){ke.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,o=this.getConnection(r,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):ke.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(qt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(qt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ke.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new ga(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){ke.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ke.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ke.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;ke.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ke.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ke.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(qt.ServerError,t))}};Fl=new WeakMap,ps(Fs,Fl,Fs.DEFAULT_KEY="peerjs");let wl=Fs;var _p=wl;const vp="perihelion-v1-",cf="ABCDEFGHJKLMNPQRSTUVWXYZ",va=3,xc=new URLSearchParams(location.search).get("peer"),xp=xc?{host:xc.split(":")[0],port:Number(xc.split(":")[1]||9e3),path:"/",secure:!1,debug:0}:{debug:0},FM=()=>Array.from({length:5},()=>cf[Math.random()*cf.length|0]).join("");function OM(n,e){const t=FM(),i=new _p(vp+t,xp),r=[{kind:"human",name:n,online:!0}];let s=!1;const o=()=>r.map(l=>({kind:l.kind,name:l.name,online:l.online,difficulty:l.difficulty})),a=(l,u)=>{try{l&&l.open&&l.send(u)}catch{}},c={code:t,seats:r,get started(){return s},broadcast(l){for(const u of r)u.conn&&a(u.conn,l)},sendTo(l,u){a(r[l]?.conn,u)},lobby(){for(const[l,u]of r.entries())u.conn&&a(u.conn,{t:"lobby",seats:o(),you:l,code:t});e.seats(o())},addAI(l){s||r.length>=va||(r.push({kind:"ai",name:`AI · ${l}`,online:!0,difficulty:l}),c.lobby())},remove(l){if(s||l===0||!r[l])return;const[u]=r.splice(l,1);u.conn&&(a(u.conn,{t:"kicked"}),setTimeout(()=>u.conn.close(),200)),c.lobby()},start(){s=!0},close(){i.destroy()}};return i.on("open",()=>e.open(t)),i.on("error",l=>e.error(l.type==="unavailable-id"?"Code clash, try again":`Connection problem (${l.type})`)),i.on("connection",l=>{l.on("data",u=>{if(u.t==="hello"){let f=r.findIndex((d,h)=>h!==0&&d.kind==="human"&&d.name===u.name&&!d.online);if(f<0&&s){a(l,{t:"full",why:"Game already started"});return}if(f<0){if(r.length>=va){a(l,{t:"full",why:"Room is full"});return}r.push({kind:"human",name:kM(r,u.name)}),f=r.length-1}Object.assign(r[f],{conn:l,online:!0}),l.seat=f,c.lobby(),s&&e.rejoin(f)}else u.t==="cmd"&&l.seat!==void 0&&e.cmd(l.seat,u.cmd)}),l.on("close",()=>{const u=r.findIndex(f=>f.conn===l);if(!(u<0)){if(!s){r.splice(u,1),c.lobby();return}r[u].online=!1,r[u].conn=null,c.lobby(),e.left(u)}})}),c}function kM(n,e){let t=e||"Player",i=2;for(;n.some(r=>r.name===t);)t=`${e} ${i++}`;return t}function BM(n,e,t){const i=new _p(xp);let r=null;const s={send(o){try{r&&r.open&&r.send(o)}catch{}},close(){i.destroy()}};return i.on("open",()=>{r=i.connect(vp+n.toUpperCase(),{reliable:!0});const o=setTimeout(()=>{r.open||t.error("No game found with that code")},9e3);r.on("open",()=>{clearTimeout(o),s.send({t:"hello",name:e})}),r.on("data",a=>t.message(a)),r.on("close",()=>t.closed())}),i.on("error",o=>t.error(o.type==="peer-unavailable"?"No game found with that code":`Connection problem (${o.type})`)),s}const q=n=>document.getElementById(n),ui=(n,e)=>{n._html!==e&&(n._html=e,n.innerHTML=e)},Ve=dM(q("scene"),q("labels")),Zt=(()=>{const n={rivals:1,difficulty:"normal",system:"random"};try{return{...n,...JSON.parse(localStorage.getItem("perihelion")||"{}")}}catch{return n}})(),_u=()=>{try{localStorage.setItem("perihelion",JSON.stringify(Zt))}catch{}};let U=null,Ca=[],zt=!1,ge=0,St=null,Qn=!1;const qo=[.5,1,2,4,8];let Er=1;const $={peek:null,pick:null,selected:null,target:null,fleet:null,count:1,dark:!1,preview:null,dragging:!1,vis:null,slot:null,mode:null},_t=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`;function yp(n,e){const t=U.bodies[e.b];if(e.type!=="research"&&e.type!=="spy"&&(!t||t.owner!==n))return!1;switch(e.type){case"launch":return!!br(U,t,U.bodies[e.to],e.n,!!e.dark);case"spy":return!!yf(U,n,t);case"ship":return Ac(U,t);case"cancel":return Lf(U,t);case"build":return Qi(U,t,e.k);case"upgrade":return!!t.structures[e.i]&&Io(U,t,t.structures[e.i]);case"demolish":return!!t.structures[e.i]&&Pf(U,t,t.structures[e.i]);case"research":return xf(U,n,e.k);case"probe":return!!Cc(U,t,U.bodies[e.to]);case"project":return gf(U,t,e.k);case"fund":return _f(U,t,e.how==="ship"?"ship":"cash");default:return!1}}function bi(n){return St?.role==="client"?(St.room.send({t:"cmd",cmd:n}),!0):yp(ge,n)}function Mp(n,e,t){const i=()=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.v===String(e())));n.addEventListener("click",r=>{const s=r.target.closest("button");s&&(t(s.dataset.v),_u(),i())}),i()}Mp(q("rivals"),()=>Zt.rivals,n=>Zt.rivals=Number(n));Mp(q("difficulty"),()=>Zt.difficulty,n=>Zt.difficulty=n);let Ra=[],ds=null;const zM=n=>Zt.system!=="random"&&En[Zt.system]?Zt.system:jo[(n>>>0)%jo.length];function Pa({seed:n=Math.random()*2**31|0,players:e=Zt.rivals+1,seat:t=0,names:i=null,aiSeats:r=null,aiDiffs:s=null,mp:o=!1,system:a=zM(n),day:c=null}={}){ds=c,U=wf({seed:n,opponents:e-1,mp:o,system:a}),i&&(U.names=i),ge=t;const l=Ti(n^2748);Ra=s||(r?r.map(([,d])=>d):o?[]:Array(e-1).fill(Zt.difficulty)),Ca=St?.role==="client"?[]:r?r.map(([d,h])=>Rc(d,h,l)):Array.from({length:e-1},(d,h)=>Rc(h+1,Zt.difficulty,l)),$.selected=$.target=$.preview=$.fleet=$.mode=$.peek=null,$.slot=null,$.me=ge,Qn=!1,os=!1,U.events.length=0,q("feed").innerHTML="",q("research").hidden=!0,Ve.build(U),$.vis=zl(U,ge);const u=U.bodies.find(d=>d.owner===ge);Ve.focus(U,u.id,!1),Ve.orbit.target.set(0,0,0),Ve.orbit.dist=u.size*12+40,Ve.orbit.pol=.9;for(const d of["menu","end","lobby"])q(d).hidden=!0;q("hud").hidden=!1,q("warp").hidden=!!St,q("pause").hidden=St?.role==="client",Er=1,q("warp").textContent="1×",zt=!0,bt();const f=En[U.system];ot(`${ds?"Daily · ":""}${f.name}`,"#aab1c8")}function GM(){Ai(),Pa()}function Sp(){Ai();const n=Tf();Pa({seed:n.seed,system:n.system,day:n.key})}q("daily").addEventListener("click",Sp);const yc=["random",...Ef];function bp(){q("system-pick").textContent=Zt.system==="random"?"Random":`${En[Zt.system].name}${En[Zt.system].test?" (test)":""}`,q("system-pick").title=Zt.system==="random"?"A different system type each game":En[Zt.system].text;const n=Tf();q("daily").innerHTML=`Daily<small>${En[n.system].name}</small>`,q("daily").title=`Today's system, the same for everyone: ${En[n.system].name}`}q("system-pick").addEventListener("click",()=>{Zt.system=yc[(yc.indexOf(Zt.system)+1)%yc.length],_u(),bp()});bp();q("play").addEventListener("click",GM);q("again").addEventListener("click",()=>{if(Ai(),q("end").hidden=!0,ds){Sp();return}q("menu").hidden=!1,q("resume").hidden=!0,q("menu").classList.remove("paused"),q("play").textContent="Play vs AI"});q("pause").addEventListener("click",Ep);q("resume").addEventListener("click",()=>{q("menu").hidden=!0,q("menu").classList.remove("paused"),zt=!0});function Ep(){if(!(!U||U.winner!==null||!zt)){if(St){Qn=!Qn,q("pause").innerHTML=dt(Qn?"play":"pause"),St.room.broadcast({t:"pause",paused:Qn}),Al();return}zt=!1,q("menu").hidden=!1,q("resume").hidden=!1,q("rnd").hidden=!0,q("menu").classList.add("paused"),q("play").textContent="New game"}}function Al(){q("banner").hidden=!Qn,q("banner").textContent=ge===0?"Paused · tap play to resume":"Paused by host"}q("keys").textContent=matchMedia("(pointer: fine)").matches?"Mouse: click to select · drag to pan · right-drag to rotate · scroll to zoom · double-click a world to fly there. Keys: WASD pan · Q/E rotate · +/− zoom · F focus · H whole system · L launch/confirm · P probe · R research · Space pause · 1–5 speed (½× to 8×) · Esc back.":"Drag to rotate · two fingers to pan and zoom · double-tap to fly to a world.";q("name").value=Zt.name||"";q("name").addEventListener("input",()=>{Zt.name=q("name").value.trim(),_u()});const Tp=()=>(q("name").value.trim()||"Player").slice(0,16),di=n=>{q("menu-msg").textContent=n||""};let wp=[];function Ai(){St&&St.room.close(),St=null,Qn=!1,q("banner").hidden=!0,q("pause").innerHTML=dt("pause")}function Cl(n,e){wp=n,q("lobby-code").textContent=e||"·····";const t=St?.role==="host",i=n.map((r,s)=>`<div class="seat"><i style="background:${ft(s)}"></i><span>${r.name}${s===ge?" (you)":""}</span><small>${r.kind==="ai"?"AI":s===0?"host":r.online===!1?"offline":"ready"}</small>${t&&s>0?`<button data-kick="${s}" aria-label="Remove">${dt("close")}</button>`:""}</div>`);for(let r=n.length;r<va;r++)i.push('<div class="seat empty"><span>Open seat</span></div>');q("seats").innerHTML=i.join(""),q("lobby-ai").hidden=!t||n.length>=va,q("lobby-start").hidden=!t,q("lobby-start").disabled=n.length<2,q("lobby-hint").textContent=t?n.length<2?"Tap the code to copy it. Up to 3 empires.":"Ready when you are.":"Waiting for the host to start…"}let Ap="normal";q("ai-diff").addEventListener("click",n=>{const e=n.target.closest("button");e&&(Ap=e.dataset.v,q("ai-diff").querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)))});q("add-ai").addEventListener("click",()=>St?.role==="host"&&St.room.addAI(Ap));q("seats").addEventListener("click",n=>{const e=n.target.closest("button[data-kick]");e&&St?.role==="host"&&St.room.remove(Number(e.dataset.kick))});q("lobby-leave").addEventListener("click",()=>{Ai(),q("lobby").hidden=!0,q("menu").hidden=!1});q("host").addEventListener("click",()=>{Ai(),di("Opening a room…"),ge=0;const n=OM(Tp(),{open:e=>{di(""),q("menu").hidden=!0,q("lobby").hidden=!1,Cl(n.seats,e)},seats:e=>Cl(e,n.code),error:e=>{di(e),n.started||(Ai(),q("lobby").hidden=!0,q("menu").hidden=!1)},cmd:(e,t)=>{U&&zt&&yp(e,t)},left:e=>ot(`${U.names[e]} disconnected`,ft(e)),rejoin:e=>{n.sendTo(e,Cp(e)),ot(`${U.names[e]} is back`,ft(e))}});St={role:"host",room:n}});function Cp(n){return{t:"start",seed:St.seed,players:U.players,names:U.names,seat:n,paused:Qn,aiDiffs:Ra,system:U.system}}q("lobby-start").addEventListener("click",()=>{if(St?.role!=="host"||wp.length<2)return;const n=St.room;n.start(),St.seed=Math.random()*2**31|0;const e=n.seats.map(i=>i.name),t=n.seats.map((i,r)=>[r,i]).filter(([,i])=>i.kind==="ai").map(([i,r])=>[i,r.difficulty]);Pa({seed:St.seed,players:n.seats.length,seat:0,names:e,aiSeats:t,mp:!0}),n.seats.forEach((i,r)=>{i.conn&&n.sendTo(r,Cp(r))})});function Rp(n){q("mp-buttons").hidden=n,q("join-row").hidden=!n,n&&q("code").focus()}q("join").addEventListener("click",()=>{di(""),Rp(!0)});q("join-back").addEventListener("click",()=>{di(""),Rp(!1)});q("code").addEventListener("keydown",n=>{n.key==="Enter"&&q("join-go").click()});q("howto").addEventListener("click",()=>{q("menu").hidden=!0,q("tutorial").hidden=!1});q("tut-close").addEventListener("click",()=>{q("tutorial").hidden=!0,q("menu").hidden=!1});q("lobby-code").addEventListener("click",async()=>{const n=q("lobby-code").textContent;if(!/^\w{5}$/.test(n))return;const e=q("lobby-hint"),t=e.textContent;try{await navigator.clipboard.writeText(n),e.textContent="Code copied"}catch{e.textContent="Long-press the code to copy it"}setTimeout(()=>{e.textContent=t},1800)});q("join-go").addEventListener("click",()=>{const n=q("code").value.trim().toUpperCase();if(n.length!==5){di("Enter the 5-letter code");return}Ai(),di("Connecting…"),St={role:"client",room:BM(n,Tp(),{message:t=>HM(t),error:t=>{di(t),Ai(),q("lobby").hidden=!0,q("menu").hidden=!1},closed:()=>{St&&(Ai(),zt?(ot("Lost connection to the host","#ff7a4d"),zt=!1,setTimeout(()=>{q("menu").hidden=!1},1500)):(q("lobby").hidden=!0,q("menu").hidden=!1,di("The host closed the room")))}}),code:n}});function HM(n){n.t==="lobby"?(ge=n.you,di(""),q("menu").hidden=!0,zt||(q("lobby").hidden=!1),Cl(n.seats,n.code)):n.t==="full"||n.t==="kicked"?(di(n.t==="kicked"?"The host removed you":n.why),Ai(),q("lobby").hidden=!0,q("menu").hidden=!1):n.t==="start"?(Pa({seed:n.seed,players:n.players,seat:n.seat,names:n.names,aiDiffs:n.aiDiffs||[],mp:!0,system:n.system||"classic"}),Qn=n.paused,Al()):n.t==="state"&&U&&zt?$M(n.s):n.t==="events"&&U&&zt?Dp(n.list):n.t==="pause"&&(Qn=n.paused,Al())}const VM=["owner","ships","guns","structures","sieges","queue","build","slips","vet","tf","fighting","totDef","totAtk","resting","restUntil","bonus","name","project","wonder"];function WM(){return{time:U.time,winner:U.winner,credits:U.credits,tech:U.tech,fleets:U.fleets,scans:U.scans,spies:U.spies,happenings:U.happenings,wonders:U.wonders,visit:U.visit,nextId:U.nextId,bodies:U.bodies.map(n=>Object.fromEntries(VM.map(e=>[e,n[e]]))),stats:U.winner!==null?U.stats:void 0}}function $M(n){const e=n.time-U.time;U.time=Qn||Math.abs(e)>1.5?n.time:U.time+e*.5,U.credits=n.credits,U.tech=n.tech,U.fleets=n.fleets,U.scans=n.scans,U.spies=n.spies,U.happenings=n.happenings,U.wonders=n.wonders,U.visit=n.visit,U.nextId=n.nextId,n.bodies.forEach((t,i)=>{const r=U.bodies[i],s=(r.lostDef||0)+Math.max(0,(t.totDef||0)-(r.totDef||0)),o=(r.lostAtk||0)+Math.max(0,(t.totAtk||0)-(r.totAtk||0)),a=r.captured||t.owner!==r.owner;Object.assign(r,t,{lostDef:s,lostAtk:o,captured:a})}),n.stats&&(U.stats=n.stats),n.winner!==null&&(U.winner=n.winner)}function Pp(n){Er=n,q("warp").textContent=`${Er===.5?"½":Er}×`}q("warp").addEventListener("click",()=>Pp(qo[(qo.indexOf(Er)+1)%qo.length]));function Lp(){Ve.orbit.follow=null,Ve.orbit.target.set(0,0,0),Ve.orbit.vaz=Ve.orbit.vpol=0,Ve.orbit.pol=.9,Ve.orbit.goalDist=650}q("system").addEventListener("click",Lp);function vu(){const n=$.fleet!==null&&U?U.fleets.find(o=>o.id===$.fleet):null;if(n||($.fleet=null),q("fleet").hidden=!n||!zt||$.selected!==null||!q("research").hidden,q("fleet").hidden)return;const e=On(n,U.time),t=n.T-(U.time-n.t0),i=n.dark&&!e.burning?jt(`${dt("dark")} coasting dark`,"Drive off: enemies only spot this fleet close in","dim"):e.flipping?"flipping":e.phase===1?"burning":"braking",r=U.bodies[n.to],s=Math.hypot(e.vx,e.vy,e.vz);if(n.probe){ui(q("fleet"),`${dt("probe")} <b>Probe</b> → <b>${r.name}</b> · <b>${_t(t)}</b>`);return}ui(q("fleet"),`<b>${er(n.name)}</b>${bn(n.vet)?` <span class="vet">${Dl(n.vet)}</span>`:""} · <b>${n.n}</b> → <b>${r.name}</b><br><span class="dim">${i}</span> · arrive in <b>${_t(t)}</b>${n.assist!==void 0?` ${jt(dt("assist"),`Gravity assist via ${U.bodies[n.assist].name}`,"assist")}`:""} ${jt(`${Math.round(e.progress*100)}%`,`${s.toFixed(2)} units/s`,"dim")}`)}function XM(){const n=$.peek!==null&&U&&zt&&$.selected===null&&$.fleet===null?U.bodies[$.peek]:null;if(q("peek").hidden=!n,!n)return;const e=!$.vis||$.vis.bodies.has(n.id),t=n.visitor?U.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="planet"&&n.giant?"Gas giant":n.kind[0].toUpperCase()+n.kind.slice(1),i=n.owner===Be?"Independent":ei(n.owner),r=n.structures.filter(o=>o.left<=0||o.next).map(o=>`${Se.structures[o.type].name}${Se.structures[o.type].maxLevel?` ${Us[o.level]}`:""}`),s=e?`${dt("fleet")} <b>${n.ships}</b> ship${n.ships===1?"":"s"} · ${dt("guns")} <b>${Math.ceil(n.guns)}</b> gun${Math.ceil(n.guns)===1?"":"s"}${r.length?` · ${r.join(", ")}`:""}`:jt("Defences unknown","Out of sensor range: send a probe or get a world nearby to see it");ui(q("peek"),`<div class="head"><span class="tag">${t}</span><b>${n.name}</b><span class="grow"></span><span class="tag" style="color:${n.owner===Be?"var(--dim)":ft(n.owner)}">${i}</span></div><div class="row2">${s}</div>${Rl(n,{income:!1,seen:e})}${YM(n)}`)}function qM(){const n={worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};let e=0;for(const s of U.bodies){if(s.owner!==ge)continue;e+=1;const o=Rf(s,U);for(const a in n)n[a]+=o[a]}const t=(U.spies||[]).filter(s=>s.owner===ge&&s.since<=U.time).reduce((s,o)=>s+cs(U.bodies[o.body],U)*Jn.skim,0),i=(U.happenings||[]).some(s=>s.kind==="comet"&&s.holder===ge&&U.time>=s.starts)?sr.comet.pay:0;return[[`${e} world${e===1?"":"s"}`,n.worlds],["Mines",n.mines],["Gas harvesters",n.skimmers],["Exchanges",n.exchanges],["Bonuses and wonders",n.bonuses],["Agents",t],["Comet mining",i]].filter(([,s])=>s>.001).map(([s,o])=>`${s}  +${o.toFixed(1)}/s`).join(`
`)}function YM(n){if(n.owner===Be||n.owner===ge||n.visitor||os)return"";const e=(U.spies||[]).find(i=>i.owner===ge&&i.body===n.id);if(e&&e.since>U.time)return`<div class="spy">${dt("spy")} ${jt(`Agent on the way · ${_t(e.since-U.time)}`,"Slipping in quietly: they start work when they arrive")}</div>`;if(e){const i=Mf(U,n)*60,r=i<.25?"low":i<.5?"rising":"high";return`<div class="spy">${dt("spy")} ${jt(`Agent in place · ${_t(U.time-e.since)}`,"Shows you this world and its launches, skims its income and slows any megaproject here")}<span class="grow"></span>${jt(`risk ${r}`,"Each minute there's a chance the agent is caught. Their Intel and a security bureau nearby raise it",r==="high"?"warn":"dim")}</div>`}const t=Bl(U,ge,n);return t==="needs Signals intercept"?`<div class="spy dim">${dt("spy")} Spies need Signals intercept</div>`:`<div class="spy">${dt("spy")} <span class="dim">No agent here</span><span class="grow"></span><button data-spy="${n.id}" ${t?"disabled":""} title="Plant a spy">Plant spy<small>${Jn.cost}</small></button></div>`}q("peek").addEventListener("click",n=>{const e=n.target.closest("button[data-spy]");if(!e)return;const t=U.bodies[+e.dataset.spy];bi({type:"spy",b:t.id})&&ot(`Agent on the way to ${t.name}`,ft(ge),"spy"),bt()});function bt(){vu(),XM();const n=$.selected!==null&&U?U.bodies[$.selected]:null,e=!!n&&n.owner===ge&&zt;if(q("actions").hidden=!e,!e){$.preview=null,$.mode!=="project"&&($.mode=null);return}!n.ships&&$.mode==="launch"&&($.mode=null);const t=fi(U,n);$.mode==="probe"&&!Ma(n)&&($.mode=null);const i=$.mode==="probe";$.count=t?Math.max(1,Math.min($.count,t)):0,q("count").innerHTML=`${$.count}<small>/${t}</small>`;const r=$.mode==="launch"||i;if(q("actions").classList.toggle("launching",r),q("buildrow").hidden=r,q("stepper").hidden=!r||i,q("cancel").hidden=!r,q("dark").hidden=!r||i,q("dark").classList.toggle("on",$.dark),r)if($.target===null)$.preview=null,ui(q("info"),`<span class="tag">${i?"Probe from":"Launch from"}</span><b>${n.name}</b><span class="grow"></span><span class="tag">tap a destination</span>`),q("launch").textContent="Confirm",q("launch").disabled=!0;else{const s=U.bodies[$.target];$.preview=Ks(U,n,s,U.time,i?Se.probe.speed:1,!1,!i&&$.dark?Ol.burn:.5);const o=s.owner===ge?"reinforce":`${s.ships} ship${s.ships===1?"":"s"}, ${Math.ceil(s.guns)} gun${Math.ceil(s.guns)===1?"":"s"}`,a=s.owner===ge?0:fs(U,s),c=!$.vis||$.vis.bodies.has(s.id),l=c?a?`${o} ${jt(`+${a.toFixed(1)}`,`Cover from ${ra(U,s).map(m=>m.from.name).join(", ")}`)}`:o:"unknown",u=$.preview.assist!==void 0?` ${jt(dt("assist"),`Gravity assist via ${U.bodies[$.preview.assist].name}: a faster route`,"assist")}`:"";if(i){const m=Yl(U,n,s);ui(q("info"),`<span>Probe → <b>${s.name}</b> · <b>${_t($.preview.T)}</b>${m?` · <span class="dim">${m}</span>`:""}</span>`),q("launch").textContent="Confirm",q("launch").disabled=!!m;return}const f=ql(U,n),d=f?` ${jt(`+${f} in ${_t(Math.ceil(n.restUntil-U.time))}`,`${f} ship${f===1?"":"s"} just arrived and can launch in ${_t(Math.ceil(n.restUntil-U.time))}`,"dim")}`:"",h=Gl(U,s),g=$.preview.T>h-5,v=Number.isFinite(h)?` · <span class="${g?"warn":"dim"}">${g?"too late":`leaves ${_t(h)}`}</span>`:"";ui(q("info"),`<span><b>${$.count}</b> → <b>${s.name}</b> <span class="dim">${l}</span> · <b>${_t($.preview.T)}</b>${$.dark?` ${jt("dark","Running dark: enemies only spot this fleet close in","dim")}`:""}${u}${d}${v}</span>${Rl(s,{income:!1,seen:c})}`),q("launch").textContent="Confirm",q("launch").disabled=t<1||g}else{$.preview=null,$.target=null;const s=n.visitor?U.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="station"?"Station":n.kind[0].toUpperCase()+n.kind.slice(1);ui(q("info"),`<span class="tag">${s}</span><b>${n.name}</b><span class="grow"></span>${n.ships?`${n.tf?`<span class="tag">TF ${n.tf}</span>`:""}<span class="num">${n.ships}</span><span class="tag">ship${n.ships===1?"":"s"}</span>`:'<span class="tag">no ships</span>'}`+Rl(n));const o=n.ships&&!t?Math.ceil(n.restUntil-U.time):0;q("launch").textContent=o?`Ready in ${_t(o)}`:"Launch",q("launch").disabled=t<1,jM(n)}}const Us=["","I","II","III"],xu=n=>String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),jt=(n,e,t="")=>`<span class="chip${t?` ${t}`:""}" tabindex="0" data-tip="${xu(e)}">${n}</span>`;function Rl(n,{income:e=!0,seen:t=!0}={}){const i=[];if(e&&n.owner!==Be){const r=cs(n,U),s=Se.income[n.kind]*(n.star?1.5:1),o=r-s;i.push(jt(`<b class="pos">+${r.toFixed(1)}/s</b>`,`Income: ${n.home?"homeworld":n.kind} ${s.toFixed(1)}${o>.001?` + ${o.toFixed(1)} from structures and bonuses`:""} per second`))}if(t){const r=ra(U,n),s=U.bodies.filter(l=>l!==n&&ra(U,l).some(u=>u.from===n)),o=Math.ceil(n.guns),a=r.reduce((l,u)=>l+u.n,0),c=[`${o} gun${o===1?"":"s"} here`];for(const l of r)c.push(`+${l.n.toFixed(1)} from ${l.from.name}`);s.length&&c.push(`these guns also help defend ${s.map(l=>l.name).join(", ")} (${n.parent===null?"half":"quarter"} strength)`),(n.owner!==Be||o)&&i.push(jt(`${dt("guns")} ${o}${a?` <span class="pos">+${a.toFixed(1)}</span>`:""}`,c.join(" · ")))}if(n.perk){const r=Hn[n.perk];let s="";if(r.range&&n.perk==="relay")s=" (dashed ring)";else if(r.range){const o=Mt(U,n,U.time),a=U.bodies.filter(c=>c.owner===ge&&c!==n&&Vn(Mt(U,c,U.time),o)<=r.range).map(c=>c.name);s=` (dashed ring). ${a.length?`Yours inside now: ${a.join(", ")}`:"None of yours inside now"}`}i.push(jt(`${dt(n.perk)} ${r.name}`,`${r.text}${s}`,"gold"))}n.wonder&&i.push(jt(`${dt(n.wonder)} ${Bt[n.wonder].name}`,Bt[n.wonder].text,"gold")),n.project&&i.push(jt(`${dt(n.project.key)} ${Math.floor((1-n.project.left/Bt[n.project.key].time)*100)}%`,`Building the ${Bt[n.project.key].name}: ${Bt[n.project.key].text}. Take the world and it's yours.`,"gold"));for(const r of U.happenings||[]){if(r.at!==n.id)continue;const s=sr[r.kind],o=U.time<r.starts,a=!o&&r.holder!==Be,c=o?`starts in ${_t(r.starts-U.time)}`:a?`${r.holder===ge?"you hold it":`${ei(r.holder)} holds it`}: ${_t(Math.max(0,s.hold-r.held))} to go`:`gone in ${_t(Math.max(0,r.ends-U.time))}`;i.push(jt(`${dt(r.kind)} ${s.name}`,`${s.text}. Hold it for ${_t(s.hold)} without a fight. Now: ${c}`,"gold"))}return i.length?`<div class="chips">${i.join("")}</div>`:""}function KM(n,e){const t=1+.15*U.tech[ge].industry;return n==="mine"?`+${(Se.mineIncome*e*t).toFixed(1)}/s`:Se.structures[n].income?`+${(Se.structures[n].income*e).toFixed(1)}/s`:n==="defence"?`${Se.gunsPerDefence*e} guns`:n==="bureau"?`${e===1?"2.5":"4"}× catch`:n==="lab"?`+${Math.round(Se.labSpeed*e*100)}% research`:""}const lf={bureau:"Security",shipyard:"Yard",mine:"Mine",defence:"Guns",lab:"Lab",skimmer:"Gas rig",exchange:"Exchange"},vr=n=>`${Math.max(0,Math.min(100,Math.floor(n*100)))}%`;function uf(n){return n.scrap?1-n.scrap/Se.scrapTime:n.next?1-n.left/Sa({...n,level:n.next-1}):n.left>0?1-n.left/Se.structures[n.type].time:null}function jM(n){const e=Af(n);$.slot!==null&&$.slot>=e&&($.slot=null);const t=[];for(let s=0;s<e;s++){const o=n.structures[s],a=$.slot===s?" on":"";if(!o){t.push(`<button class="cell empty${a}" data-slot="${s}"><span>+</span></button>`);continue}const c=Se.structures[o.type],l=uf(o),u=c.maxLevel?`<i class="pips">${"▮".repeat(o.level)}${"▯".repeat(c.maxLevel-o.level)}</i>`:"",f=l===null?"":`<i class="prog" style="width:${vr(l)}"></i>`,d=l!==null&&!o.scrap?`<i class="pips">${_t(o.left/ts(U,ge,n))}</i>`:u;t.push(`<button class="cell${l===null?"":" busy"}${a}" data-slot="${s}"><b>${lf[o.type]}</b>${d}${f}</button>`)}let i=`<div class="cells">${t.join("")}</div>`;if($.slot!==null){const s=n.structures[$.slot];let o="";if(!s)o=["shipyard","mine","skimmer","exchange","defence","lab","bureau"].map(a=>{const c=ea(U,n,a);if(c&&c!=="not enough credits")return"";const l=Se.structures[a];return`<button class="opt" data-b="${a}" data-hold="${xu(`${l.name}: ${l.desc}`)}" title="${l.name}: ${l.desc}" ${c?"disabled":""}>${lf[a]}<small>${l.cost} · ${_t(l.time/ts(U,ge,n))}</small></button>`}).join("");else{const a=Se.structures[s.type],c=uf(s),l=s.scrap?`scrapping · ${vr(c)}`:s.next?`upgrading → ${Us[s.next]} · ${vr(c)}`:s.left>0?`building · ${vr(c)}`:a.maxLevel?`level ${Us[s.level]}`:"online",u=ta(U,n,s),f=Wl(U,n,s);if(o=`<span class="what" title="${a.desc}">${a.name} · ${l}</span><button class="danger" data-d="${$.slot}" ${f?"disabled":""}>Scrap<small>${Qo(s)}</small></button>`,a.maxLevel){const d=[];for(let h=1;h<=a.maxLevel;h++){const g=h===1?a.cost:Sr({type:s.type,level:h-1}),v=h<=s.level?"done":h===s.next?"now":"",m=h===s.level+1&&!s.next&&(!u||u==="not enough credits"),p=m?`button data-u="${$.slot}" ${u?"disabled":""}`:"span",y=h<=s.level?"✓":h===s.next?_t(s.left/ts(U,ge,n)):m?`Upgrade · ${g} · ${_t(Sa({type:s.type,level:h-1})/ts(U,ge,n))}`:g;d.push(`<${p} class="lv ${v}${m?" next":""}"><b>${Us[h]}</b> ${KM(s.type,h)}<small>${y}</small></${p.split(" ")[0]}>`)}o+=`<div class="ladder">${d.join("")}</div>`}}i+=`<div class="ctx">${o}</div>`}const r=Ma(n);if(r){const s=na(U,n),o=(n.slips&&n.slips.length?n.slips:[n.build||0]).map(c=>`<span class="slip"><i class="meter"><i style="width:${vr(c)}"></i></i> <span class="dim">${_t((1-c)*Fu(U,n))}</span></span>`).join(""),a=n.queue?`<span class="what">Queue <b class="num">${n.queue}</b><span class="slips">${o}</span></span>`:`<span class="what">${r} yard${r===1?"":"s"} idle</span>`;i+=`<div class="ctx ships">${a}`+(n.queue?`<button data-cancel="1" class="danger" title="Cancel the last queued ship">${dt("close")}<small>+${Math.round(Se.ship.cost*Se.cancelRefund)}</small></button>`:"")+`<button data-b="ship" title="Order a ship (${Se.ship.time}s per yard)" ${s?"disabled":""}>+ Ship<small>${Se.ship.cost} · ${_t(Fu(U,n))}</small></button><button class="mini" data-probe="1" ${U.credits[ge]<Se.probe.cost?"disabled":""} title="Probe: fast one-way flyby that reveals a world">Probe<small>${Se.probe.cost}</small></button></div>`}ui(q("buildrow"),i)}q("buildrow").addEventListener("click",n=>{if($.selected===null)return;const e=U.bodies[$.selected],t=n.target.closest("button[data-slot]");if(t){$.pick=null;const c=Number(t.dataset.slot);$.slot=$.slot===c?null:c,bt();return}if(n.target.closest("button[data-probe]")){$.mode="probe",$.target=null,$.slot=null,bt();return}if(n.target.closest("button[data-cancel]")){bi({type:"cancel",b:e.id})&&ot("Ship build cancelled",ft(ge)),bt();return}const i=n.target.closest("button[data-u]");if(i){const c=e.structures[Number(i.dataset.u)];c&&bi({type:"upgrade",b:e.id,i:Number(i.dataset.u)})&&ot(`Upgrading ${Se.structures[c.type].name} to ${Us[c.level+1]} · ${Math.round(Sa(c))}s`,ft(ge)),bt();return}const r=n.target.closest("button[data-d]");if(r){const c=e.structures[Number(r.dataset.d)];c&&bi({type:"demolish",b:e.id,i:Number(r.dataset.d)})&&ot(`Scrapping ${Se.structures[c.type].name} at ${e.name}`,ft(ge)),$.slot=null,bt();return}const s=n.target.closest("button[data-b]");if(!s)return;const o=s.dataset.b;if(qs){qs=!1;return}bi(o==="ship"?{type:"ship",b:e.id}:{type:"build",b:e.id,k:o})&&(ot(o==="ship"?`Ship ordered at ${e.name}`:`${Se.structures[o].name} under construction at ${e.name}`,ft(ge)),o!=="ship"&&($.slot=null)),bt()});const Mc=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]],ZM={ansible:"Signals",targeting:"Targeting",kinetic:"Kinetic",torch:"Torch",hardened:"Hardened",pdnet:"PD net"};function JM(){const e=([c,l])=>[45*c,30*Math.sqrt(3)*(l+c/2)],t=(c,l,u=28)=>Array.from({length:6},(f,d)=>`${(c+u*Math.cos(Math.PI/3*d)).toFixed(1)},${(l+u*Math.sin(Math.PI/3*d)).toFixed(1)}`).join(" "),i=[];Tc.forEach((c,l)=>{const[u,f]=e(Mc[l]);i.push({key:c,cx:u,cy:f,branch:!0});const d=Mc[l],h=Mc[(l+1)%6],g=Object.keys(mn).find(p=>mn[p].needs.includes(c)&&mn[p].needs.includes(Tc[(l+1)%6])),[v,m]=e([d[0]+h[0],d[1]+h[1]]);i.push({key:g,cx:v,cy:m})});const r=U.tech[ge],s=r.project,o=[`<title>One project at a time. A joint tech needs both neighbours at II. Research stations speed everything up.</title><polygon points="${t(0,0)}" class="hx core"/><text x="0" y="-2" class="hl">R&amp;D</text><text x="0" y="11" class="hs">×${rr(U,ge).toFixed(1)}</text>`];for(const c of i){const l=r[c.key]||0,u=c.branch?Gn[c.key].cost.length:1,f=Os(U,ge,c.key),d=l>=u?"done":s&&s.key===c.key?"run":f==="locked"?"locked":U.credits[ge]<cr(U,ge,c.key).cost?"open poor":"open",h=$.techSel===c.key?" sel":"",g=c.branch?Array.from({length:u},(v,m)=>`<circle cx="${(m-(u-1)/2)*6}" cy="17" r="1.8" class="${m<l?"on":""}"/>`).join(""):"";o.push(`<g data-hex="${c.key}" transform="translate(${c.cx.toFixed(1)},${c.cy.toFixed(1)})" class="hexc ${d}${h}"><polygon points="${t(0,0)}" class="hx"/>`+(()=>{const v=pf(c.key);return`<svg x="-8" y="-17" width="16" height="16" viewBox="${v.vb}" class="ic${v.lu?" lu":""}">${v.body}</svg>`})()+`<text x="0" y="9" class="hl">${c.branch?Gn[c.key].name:ZM[c.key]}</text>${g}</g>`)}const a=Object.keys(Bt).map(c=>{const l=Bt[c].needs,u=U.wonders&&U.wonders[c]!==void 0?U.bodies[U.wonders[c]]:null,f=U.bodies.some(g=>g.owner===ge&&g.project&&g.project.key===c),d=u?u.owner===ge?"done":"taken":f?"run":r[l]?U.credits[ge]<Bt[c].cost?"poor":"open":"locked",h=$.techSel===`mega:${c}`?" sel":"";return`<button data-hex="mega:${c}" class="mtile ${d}${h}" title="${xu(Bt[c].name)}">${dt(c)}</button>`}).join("");return`<svg class="board" viewBox="-124 -114 248 228">${o.join("")}</svg><div class="megarow"><span>Megaprojects</span>${a}</div>`}function QM(n){const e=U.tech[ge],t=e.project,i=mn[n],r=cr(U,ge,n),s=Os(U,ge,n),o=e[n]||0,a=i?i.name:Gn[n].name,c=i?o?[i.text]:[]:Gn[n].levels.slice(0,o).map((u,f)=>`${u}: ${Gn[n].text[f]}`);let l=c.length?`<div class="have">${c.map(u=>`<div>${dt("star")} ${u}</div>`).join("")}</div>`:"";if(!r)l+='<small class="dim">Complete</small>';else if(t&&t.key===n)l+=`<small>Researching ${r.title} · ${Math.floor((1-t.left/t.total)*100)}%</small>`;else{const u=i&&s==="locked"?`<small class="dim">Needs ${i.needs.map(f=>`${Gn[f].name} II`).join(" and ")}</small>`:"";l+=`<div class="nextrow"><span>${i?"":`<b>${r.title}</b>`}<small>${r.text} · ${_t(r.time/rr(U,ge))}</small>${u}</span><button data-k="${n}" ${s?"disabled":""}>Research<small>${r.cost}</small></button></div>`}if(i){const u=Object.keys(Bt).find(f=>Bt[f].needs===n);u&&(l+=`<small class="dim unlocks">Unlocks ${dt(u)} ${Bt[u].name}</small>`)}return`<div class="tdetail"><div class="th">${dt(n)} <b>${a}</b></div>${l}</div>`}function eS(n){const e=Object.keys(Bt).find(u=>Bt[u].needs===n);if(!e)return"";const t=Bt[e],i=`<div class="mega"><div class="th">${dt(e)} <b>${t.name}</b> ${jt("megaproject",`${t.where==="giant"?"Gas giants only. ":t.where==="inner"?"Innermost planet only. ":t.where==="planet"?"Planets only. ":"Any world of yours. "}One per world, and only one empire can finish it`,"dim")}</div><small>${t.text}</small>`,r=U.wonders&&U.wonders[e]!==void 0?U.bodies[U.wonders[e]]:null;if(r)return`${i}<small>${r.owner===ge?"Yours":`Built by ${ei(r.owner)}`}, at ${r.name}</small></div>`;const s=U.bodies.find(u=>u.owner===ge&&u.project&&u.project.key===e),o=U.bodies.filter(u=>u.owner!==ge&&u.project&&u.project.key===e).length,a=o?`<small class="warn">${o} rival${o===1?"":"s"} building it</small>`:"";if(s)return`${i}${a}<div class="nextrow"><span><small>At ${s.name} · ${_t(Math.max(0,s.project.left/rr(U,ge)-Math.min(s.project.rush||0,s.project.left/rr(U,ge)/2)))} left${s.project.rush>0?` · ${jt("rushing",`Twice as fast for ${_t(s.project.rush)}`,"gold")}`:""}</small><i class="meter"><i style="width:${vr(1-s.project.left/t.time)}"></i></i></span><button data-fund="cash" data-fb="${s.id}" ${U.credits[ge]<_i.credits?"disabled":""} title="Pay for overtime: work goes twice as fast for ${_i.cut}s">Rush<small>${_i.credits}</small></button><button data-fund="ship" data-fb="${s.id}" ${fi(U,s)<1?"disabled":""} title="Break up a docked ship there for parts and crew: work goes twice as fast for ${_i.crewCut}s">Rush<small>1 ship</small></button></div></div>`;const c=U.tech[ge][n],l=U.bodies.filter(u=>u.owner===ge&&!ya(U,u,e));return`${i}${a}<div class="nextrow"><span><small>${c?l.length?_t(t.time/rr(U,ge)):"No world of yours can take it yet":`Needs ${mn[n].name}${U.tech[ge][mn[n].needs[0]]<2||U.tech[ge][mn[n].needs[1]]<2?` (after ${mn[n].needs.map(u=>`${Gn[u].name} II`).join(" and ")})`:""}`}</small></span><button data-mega="${e}" ${c&&l.length?"":"disabled"}>Build<small>${t.cost}</small></button></div></div>`}function Xs(){const e=U.tech[ge].project;if(q("rbar").hidden=!0,q("rnd").hidden=!zt||os||!q("menu").hidden||!q("end").hidden||!q("actions").hidden||!q("peek").hidden||!q("fleet").hidden||!q("research").hidden,q("rnd").classList.toggle("idle",!e),ui(q("rndsub"),e?`${Gn[e.key]?Gn[e.key].name:mn[e.key].name} · ${_t(e.left/rr(U,ge))}`:"idle"),q("rndbar").style.width=e?vr(1-e.left/e.total):"0%",q("research").hidden)return;q("rstatus").textContent="",$.techSel||($.techSel=e?e.key:Tc.find(i=>cr(U,ge,i))||"ansible");const t=$.techSel;ui(q("rlist"),JM()+(t.startsWith("mega:")?`<div class="tdetail">${eS(Bt[t.slice(5)].needs)}</div>`:QM(t)))}q("rlist").addEventListener("click",n=>{const e=n.target.closest("[data-hex]");if(e){$.techSel=e.dataset.hex,Xs();return}const t=n.target.closest("button[data-fund]");if(t){bi({type:"fund",b:Number(t.dataset.fb),how:t.dataset.fund}),Xs();return}const i=n.target.closest("button[data-mega]");i&&($.mode="project",$.projKey=i.dataset.mega,$.selected=$.target=null,q("research").hidden=!0,ot(`Tap one of your worlds to build the ${Bt[$.projKey].name}`,"#ffd479",$.projKey),bt())});q("rnd").addEventListener("click",()=>{q("research").hidden=!q("research").hidden,$.selected=$.target=null,bt(),Xs()});q("rclose").addEventListener("click",()=>{q("research").hidden=!0});const tS=n=>{q("research").hidden||n.target.closest("#research, #rnd")||(q("research").hidden=!0,vu())};for(const n of["pointerdown","touchstart","mousedown"])document.addEventListener(n,tS,{capture:!0,passive:!0});q("rlist").addEventListener("click",n=>{const e=n.target.closest("button[data-k]");if(!e)return;const t=mf(e.dataset.k,(U.tech[ge][e.dataset.k]||0)+1);bi({type:"research",k:e.dataset.k})&&(ot(`Researching ${t}`,ft(ge)),q("research").hidden=!0),Xs()});q("less").addEventListener("click",()=>{$.count=Math.max(1,$.count-1),bt()});q("more").addEventListener("click",()=>{$.count+=1,bt()});q("count").addEventListener("click",()=>{const n=$.selected!==null?U.bodies[$.selected]:null;if(!n)return;const e=fi(U,n);$.count=$.count===e?Math.max(1,Math.ceil(e/2)):$.count===Math.max(1,Math.ceil(e/2))&&e>2?1:e,bt()});for(const[n,e]of[["less",-1],["more",1]]){let t=null;const i=()=>{clearInterval(t),t=null};q(n).addEventListener("pointerdown",()=>{i(),t=setTimeout(()=>{t=setInterval(()=>{$.count=Math.max(1,$.count+e),bt()},70)},350)});for(const r of["pointerup","pointerleave","pointercancel"])q(n).addEventListener(r,i)}q("launch").addEventListener("click",()=>{if(!$.mode){$.mode="launch",$.target=null,bt();return}nS()});q("dark").addEventListener("click",()=>{$.dark=!$.dark,bt()});q("cancel").addEventListener("click",()=>{$.mode=null,$.target=null,bt()});q("focus").addEventListener("click",()=>{const n=$.target??$.selected;n!==null&&Ve.focus(U,n),bt()});function nS(){if(!($.selected===null||$.target===null)){if($.mode==="probe"){const n=U.bodies[$.target];bi({type:"probe",b:$.selected,to:$.target})&&ot(`Probe away to ${n.name}`,ft(ge)),$.mode=null,$.selected=$.target=null,bt();return}$.count<1||(bi({type:"launch",b:$.selected,to:$.target,n:$.count,dark:$.dark}),$.mode=null,$.selected=$.target=null,bt())}}let La=matchMedia("(pointer: coarse)").matches;window.addEventListener("pointerdown",n=>{La=n.pointerType!=="mouse"},!0);const si=document.createElement("div");si.id="tipbox";si.hidden=!0;document.body.appendChild(si);let Da=null;function yu(n,e=n.dataset.tip){Da=n,si.textContent=e,si.hidden=!1;const t=n.getBoundingClientRect(),i=Math.min(280,window.innerWidth-24);si.style.maxWidth=`${i}px`;const r=si.offsetWidth,s=si.offsetHeight,o=Math.max(12,Math.min(window.innerWidth-r-12,t.left+t.width/2-r/2)),a=t.top-s-8;si.style.left=`${o}px`,si.style.top=`${a>8?a:t.bottom+8}px`}function Pl(){Da=null,si.hidden=!0}document.addEventListener("mouseover",n=>{const e=n.target.closest?.("[data-tip]");e&&!La&&yu(e)});document.addEventListener("mouseout",n=>{const e=n.target.closest?.("[data-tip]");e&&e===Da&&!La&&Pl()});document.addEventListener("click",n=>{if(qs)return;const e=n.target.closest?.("[data-tip]");if(e&&La){Da===e?Pl():yu(e);return}e||Pl()},!0);let Ll=null,qs=!1;document.addEventListener("pointerdown",n=>{const e=n.target.closest?.("[data-hold]");clearTimeout(Ll),qs=!1,!(!e||n.pointerType==="mouse")&&(Ll=setTimeout(()=>{qs=!0,yu(e,e.dataset.hold)},450))},!0);for(const n of["pointerup","pointercancel","pointermove"])document.addEventListener(n,e=>{(n!=="pointermove"||Math.hypot(e.movementX||0,e.movementY||0)>6)&&clearTimeout(Ll)},!0);function ot(n,e,t=null){const i=q("feed"),r=document.createElement("div");for(r.className="note",r.style.setProperty("--c",e),r.textContent=n,t&&r.insertAdjacentHTML("afterbegin",`${dt(t)} `),i.prepend(r);i.children.length>4;)i.lastChild.remove();setTimeout(()=>r.classList.add("gone"),5200),setTimeout(()=>r.remove(),5800)}const Dl=n=>["","blooded","veteran","elite"][bn(n)],er=n=>`TF ${n}`;function Dp(n=U.events.splice(0)){const e=$.vis,t=r=>U.bodies[r].name,i=ft(ge);for(const r of n){const s=ft(r.owner);switch(r.type){case"launch":if(r.owner===ge){const o=U.fleets.find(a=>a.id===r.fleet);ot(`${er(r.name)} · ${r.n} ship${r.n===1?"":"s"} → ${t(r.to)}${o?` · ${_t(o.T)}`:""}${o&&o.assist!==void 0?` · assist via ${t(o.assist)}`:""}`,i);break}if(!e||e.intel<1||!e.bodies.has(r.from))break;{const o=U.fleets.find(a=>a.id===r.fleet);if(o&&o.dark&&!e.seesFleet(o))break}ot(`Launch detected at ${t(r.from)} · ${r.n} ship${r.n===1?"":"s"}${e.intel>=2?` → ${t(r.to)}`:""}`,s);break;case"arrived":r.owner===ge&&ot(`${er(r.name)} arrived at ${t(r.at)}`,i);break;case"engaged":r.owner===ge?ot(`${er(r.name)} engaging ${t(r.at)}`,i):r.vs===ge&&ot(`${t(r.at)} under attack`,s);break;case"wiped":r.owner===ge?ot(`${er(r.name)} lost with all hands at ${t(r.at)}`,ft(r.vs)):r.vs===ge&&ot(`Enemy ${er(r.name)} destroyed at ${t(r.at)}`,i);break;case"captured":r.owner===ge?ot(`${t(r.at)} taken by ${er(r.name)}`,i):r.from===ge&&ot(`${t(r.at)} lost`,s);break;case"held":r.owner===ge&&ot(`${t(r.at)} held${bn(U.bodies[r.at].vet)?` · garrison ${Dl(U.bodies[r.at].vet)}`:""}`,i);break;case"promoted":r.owner===ge&&ot(`${r.name?er(r.name):`${t(r.at)} garrison`} now ${Dl(r.v)}`,i);break;case"event":{const o=sr[r.kind];r.phase==="soon"?ot(U.bodies[r.at].visitor?`${t(r.at)} incoming`:`${o.name} at ${t(r.at)} in 1:00`,"#ffd479",r.kind):r.phase==="won"?ot(`${r.owner===ge?"You":ei(r.owner)} secured the ${o.name.toLowerCase()} · ${r.what}`,ft(r.owner),r.kind):ot(`${o.name} at ${t(r.at)} is gone`,"#858ca6",r.kind);break}case"visitor":ot(`${r.name} has left the system`,"#858ca6","comet");break;case"project":{const o=Bt[r.key];r.phase==="start"&&r.owner!==ge&&ot(`${ei(r.owner)} began the ${o.name} at ${t(r.at)}`,ft(r.owner),r.key),r.phase==="done"&&ot(`${r.owner===ge?"You":ei(r.owner)} completed the ${o.name}`,ft(r.owner),r.key),r.phase==="lost"&&r.owner===ge&&ot(`Beaten to the ${o.name}: half refunded`,"#ff7a4d",r.key);break}case"spycaught":r.owner===ge?ot(`Agent caught on ${t(r.at)} after ${_t(r.after)}`,"#ff7a4d","spy"):r.by===ge&&ot(`Security caught a ${ei(r.owner)} spy on ${t(r.at)}`,i,"spy");break;case"probed":r.owner===ge&&ot(`Probe flyby of ${t(r.at)} · in view for ${Math.round(Se.probe.scan/60*2)/2} min`,i);break;case"scrapped":r.owner===ge&&ot(`${Se.structures[r.what].name} scrapped at ${t(r.at)}`,i);break;case"research":r.owner===ge&&ot(`${mf(r.key,r.level)} complete`,i,r.key);break}}}function df(n,e,t,i=!1){if(!$.mode){const r=Ve.pickFleet(U,e,t,ge),s=n!==null&&(n===$.peek||n===$.selected);if(r!==null&&(n===null||s)&&$.fleet!==r){$.selected=$.target=$.peek=null,$.fleet=r,bt();return}}if($.fleet=null,n!==null&&!i&&Ve.focus(U,n,!1),$.mode==="project"){const r=n!==null?U.bodies[n]:null,s=r?ya(U,r,$.projKey):"cancelled";r&&!s?bi({type:"project",b:n,k:$.projKey})&&ot(`${Bt[$.projKey].name} begun at ${r.name}`,ft(ge),$.projKey):ot(s==="cancelled"?"Megaproject cancelled":`Can't build it there: ${s}`,"#858ca6"),$.mode=null,bt();return}if($.mode==="launch"||$.mode==="probe")n===null?($.selected=$.target=null,$.mode=null):$.target=n!==$.selected?n:null;else if(n===null||n===$.selected)$.selected=$.target=null;else if(U.bodies[n].owner===ge)$.selected=n,$.slot=null,$.pick=null,$.target=null;else{$.selected=$.target=null,$.peek=$.peek===n?null:n,bt();return}$.peek=null,bt()}const Rr=q("scene"),Ei=new Map;let st=null,Ji={t:0,id:null};Rr.addEventListener("pointerdown",n=>{if(zt){n.preventDefault();try{Rr.setPointerCapture(n.pointerId)}catch{}if(n.pointerType==="mouse"){const e=n.button===2||n.button===1||n.altKey;st={kind:e?"turn":"click",right:n.button===2,mouse:!0,x0:n.clientX,y0:n.clientY,x:n.clientX,y:n.clientY,pivot:e?Ve.pivotAt(U,n.clientX,n.clientY):null},$.dragging=!0,Ve.orbit.vaz=Ve.orbit.vpol=0;return}if(Ei.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ei.size===1)st={kind:"tap",x0:n.clientX,y0:n.clientY};else if(Ei.size===2){const[e,t]=[...Ei.values()];st={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2}}$.dragging=!0,Ve.orbit.vaz=Ve.orbit.vpol=0}});Rr.addEventListener("pointermove",n=>{if(st?.mouse){const r=n.clientX-st.x,s=n.clientY-st.y;st.x=n.clientX,st.y=n.clientY,st.kind==="click"&&Math.hypot(n.clientX-st.x0,n.clientY-st.y0)>5&&(st.kind="pan"),st.kind==="pan"&&Ve.pan(r,s),st.kind==="turn"&&(Ve.rotateAround(st.pivot,-r*.006,-s*.006),Math.hypot(n.clientX-st.x0,n.clientY-st.y0)>5&&(st.moved=!0));return}n.pointerType==="mouse"&&U&&(Rr.style.cursor=Ve.pick(n.clientX,n.clientY)!==null?"pointer":"grab");const e=Ei.get(n.pointerId);if(!e||!st)return;const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,st.kind==="pinch"){if(Ei.size<2)return;const[r,s]=[...Ei.values()],o=Math.hypot(r.x-s.x,r.y-s.y),a=(r.x+s.x)/2,c=(r.y+s.y)/2;Ve.pan(a-st.mx,c-st.my),Ve.zoomAt(a,c,st.d/Math.max(1,o)),st.d=o,st.mx=a,st.my=c;return}if(st.kind==="tap"&&Math.hypot(n.clientX-st.x0,n.clientY-st.y0)>10&&(st.kind="orbit"),st.kind==="orbit"){const r=4/window.innerHeight;Ve.orbit.az-=t*r,Ve.orbit.pol-=i*r,Ve.orbit.vaz=-t*r,Ve.orbit.vpol=-i*r}});function Ip(n){if(st?.mouse){const e=st;if(st=null,$.dragging=!1,e.kind==="turn"&&e.right&&!e.moved&&n.type!=="pointercancel"){const r=Ve.pick(n.clientX,n.clientY),s=$.selected!==null?U.bodies[$.selected]:null;r!==null&&s&&s.owner===ge&&r!==s.id&&s.ships&&($.mode="launch",$.target=r,$.fleet=null,bt());return}if(e.kind!=="click"||n.type==="pointercancel")return;const t=Ve.pick(n.clientX,n.clientY),i=performance.now();t!==null&&Ji.id===t&&i-Ji.t<350?(Ve.focus(U,t),Ji={t:0,id:null},bt()):(Ji={t:i,id:t},df(t,n.clientX,n.clientY,!0));return}if(Ei.delete(n.pointerId)){if(st?.kind==="tap"&&Ei.size===0){const e=Ve.pick(n.clientX,n.clientY),t=performance.now();e!==null&&Ji.id===e&&t-Ji.t<350?(Ve.focus(U,e),Ji={t:0,id:null},bt()):(Ji={t,id:e},df(e,n.clientX,n.clientY))}Ei.size===0?(st=null,$.dragging=!1):st={kind:"orbit"}}}Rr.addEventListener("pointerup",Ip);Rr.addEventListener("pointercancel",n=>{Ip(n),st=null,$.dragging=!1});Rr.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?window.innerHeight:1),t=n.ctrlKey?.01:.0015;Ve.zoomToward(n.clientX,n.clientY,Math.exp(Math.max(-.5,Math.min(.5,e*t))))},{passive:!1});const Ys=new Set;window.addEventListener("keydown",n=>{if(!zt||n.target.closest("input, textarea"))return;const e=n.key.toLowerCase();if(Ys.add(e),e==="escape")$.mode?($.mode=null,$.target=null):$.selected=$.target=$.peek=null,q("research").hidden=!0,bt();else if(e==="f"){const t=$.target??$.selected;t!==null&&Ve.focus(U,t)}else if(e==="h")Lp();else if(e>="1"&&e<="5"&&!St)Pp(qo[Number(e)-1]);else if(e===" ")n.preventDefault(),q("pause").hidden||Ep();else if(e==="l"||e==="enter")$.selected!==null&&!q("launch").disabled&&q("launch").click();else if(e==="d")q("dark").hidden||q("dark").click();else if(e==="p"){const t=document.querySelector("#buildrow button[data-probe]");t&&!t.disabled&&t.click()}else e==="r"&&q("rnd").click()});window.addEventListener("keyup",n=>Ys.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>Ys.clear());function iS(n){if(!Ys.size)return;const e=700*n,t=(...i)=>i.some(r=>Ys.has(r));t("w","arrowup")&&Ve.pan(0,e),t("s","arrowdown")&&Ve.pan(0,-e),t("a","arrowleft")&&Ve.pan(e,0),t("d","arrowright")&&Ve.pan(-e,0),t("q")&&(Ve.orbit.az+=n*1.5),t("e")&&(Ve.orbit.az-=n*1.5),t("=","+")&&Ve.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(-n*1.8)),t("-","_")&&Ve.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(n*1.8))}document.addEventListener("contextmenu",n=>n.preventDefault());for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,e=>e.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});const rS=["You","Red","Amber"],ei=n=>n===ge?"You":U.names?U.names[n]:rS[n];function Sc(n,e,t,i,r=s=>Math.round(s)){const f=t.at(-1).t||1,d=Math.max(1,...t.flatMap(y=>y.p.map(T=>T[e]))),h=y=>30+y/f*256,g=y=>8+(1-y/d)*104,v=i.map(y=>{const T=t.map(x=>`${h(x.t).toFixed(1)},${g(x.p[y][e]).toFixed(1)}`).join(" "),S=t.at(-1).p[y][e];return`<polyline points="${T}" fill="none" stroke="${ft(y)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><text x="${h(f)+4}" y="${g(S)+4}" font-size="10" fill="#aab1c8">${ei(y)}</text>`}).join(""),m=[0,.5,1].map(y=>`<line x1="30" x2="286" y1="${g(d*y)}" y2="${g(d*y)}" stroke="rgba(160,180,255,0.12)" /><text x="26" y="${g(d*y)+3}" font-size="9" fill="#858ca6" text-anchor="end">${r(d*y)}</text>`).join(""),p=`<text x="30" y="126" font-size="9" fill="#858ca6">0:00</text><text x="286" y="126" font-size="9" fill="#858ca6" text-anchor="end">${_t(f)}</text>`;return`<div class="chart" data-key="${e}"><h3>${n}</h3><svg viewBox="0 0 320 130" data-l="30" data-r="286" data-w="320">${m}${p}${v}<line class="cross" y1="8" y2="112" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg><div class="readout">Touch the chart to read values</div></div>`}const Up=[["Ships built","built"],["Ships lost","lost"],["Enemy ships destroyed","killed"],["Worlds captured","captured"],["Worlds lost","worldsLost"],["Credits earned","earned"],["Credits spent","spent"],["Research completed","research"]],ff=new Set(["lost","worldsLost"]);function Np(n,e){const t=e.map(r=>Math.round(U.stats.totals[r][n])),i=ff.has(n)?Math.min(...t):Math.max(...t);return!ff.has(n)&&i<=0?[]:t.every(r=>r===i)?[]:e.filter((r,s)=>t[s]===i)}function sS(){const n=U.players-1,e=[...new Set(Ra)],t=e.length?` · ${U.mp?"AI ":""}${e.join("/")}`:"";return`${ds?`Daily ${ds.slice(5).replace("-","/")} · ${En[U.system].name}`:En[U.system].name} · ${_t(U.time)} · ${n} rival${n===1?"":"s"}${t}`}function oS(n,e,t,i,r,s,o,a){let c=o;for(n.font=a(s,c);c>16&&n.measureText(e).width>r;)n.font=a(s,--c);if(n.measureText(e).width>r){for(;e.length>1&&n.measureText(e+"…").width>r;)e=e.slice(0,-1);e+="…"}n.fillText(e,t,i)}function aS(){const t=document.createElement("canvas");t.width=1080,t.height=1500;const i=t.getContext("2d"),r=Array.from({length:U.players},(m,p)=>p),s=(m,p)=>`${m} ${p}px Rajdhani, system-ui, sans-serif`;i.fillStyle="#03040a",i.fillRect(0,0,1080,1500),i.strokeStyle="rgba(120,190,255,0.25)",i.lineWidth=2,i.strokeRect(24,24,1032,1452),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(600,30),i.fillText("P E R I H E L I O N",1080/2,96);const o=U.winner===ge;i.fillStyle=ft(o?ge:U.winner),i.font=s(700,96),i.fillText(o?"VICTORY":"DEFEAT",1080/2,200),i.fillStyle="#e6ebf7",i.font=s(500,34),i.fillText(sS(),1080/2,252);const a=80,c=170,l=920-c*r.length;let u=330;i.font=s(700,32),i.textAlign="right",r.forEach((m,p)=>{i.fillStyle=ft(m),oS(i,ei(m),a+l+c*(p+1)-20,u,c-30,700,32,s)}),u+=20;for(const[m,p]of Up){u+=52,i.strokeStyle="rgba(160,180,255,0.15)",i.beginPath(),i.moveTo(a,u+16),i.lineTo(1080-a,u+16),i.stroke(),i.textAlign="left",i.fillStyle="#858ca6",i.font=s(500,30),i.fillText(m,a,u);const y=Np(p,r);r.forEach((T,S)=>{const x=a+l+c*(S+1)-20;y.includes(T)?(i.fillStyle="rgba(126,224,161,0.16)",i.fillRect(x-c+30,u-34,c-20,46),i.fillStyle="#7ee0a1"):i.fillStyle="#e6ebf7",i.textAlign="right",i.font=s(y.includes(T)?700:500,32),i.fillText(String(Math.round(U.stats.totals[T][p])),x,u)})}const f=U.stats.series,d=[["Ships","ships"],["Worlds","worlds"],["Income","income"]],h=880/3,g=400,v=u+90;return d.forEach(([m,p],y)=>{const T=80+y*(h+20);i.textAlign="left",i.fillStyle="#e6ebf7",i.font=s(600,30),i.fillText(m,T,v);const S=v+20,x=S+g,b=f.at(-1).t||1,C=Math.max(1,...f.flatMap(_=>_.p.map(w=>w[p])));i.strokeStyle="rgba(160,180,255,0.15)",i.lineWidth=2;for(const _ of[0,.5,1])i.beginPath(),i.moveTo(T,x-_*g),i.lineTo(T+h,x-_*g),i.stroke();for(const _ of r)i.strokeStyle=ft(_),i.lineWidth=4,i.lineJoin="round",i.beginPath(),f.forEach((w,A)=>{const P=T+w.t/b*h,I=x-w.p[_][p]/C*g;A?i.lineTo(P,I):i.moveTo(P,I)}),i.stroke();i.fillStyle="#858ca6",i.font=s(500,24),i.fillText(p==="income"?C.toFixed(1):String(Math.round(C)),T,S+26)}),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(500,26),i.fillText("pretzel-dev.github.io/game-dev/perihelion",1080/2,1444),t}async function cS(){const n=await new Promise(i=>aS().toBlob(i,"image/png")),e=new File([n],"perihelion-report.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i.name==="AbortError")return}const t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e.name,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}q("share").addEventListener("click",cS);function lS(){const n=U.stats,e=Array.from({length:U.players},(s,o)=>o),t=Up,i=`<div class="legend">${e.map(s=>`<span><i style="background:${ft(s)}"></i>${ei(s)}</span>`).join("")}</div>`,r=`<table class="totals"><tr><th></th>${e.map(s=>`<th style="color:${ft(s)}">${ei(s)}</th>`).join("")}</tr>`+t.map(([s,o])=>`<tr><td>${s}</td>${e.map(a=>`<td class="${Np(o,e).includes(a)?"best":""}">${Math.round(n.totals[a][o])}</td>`).join("")}</tr>`).join("")+"</table>";q("report").innerHTML=i+r+Sc("Ships","ships",n.series,e)+Sc("Worlds held","worlds",n.series,e)+Sc("Income (credits/s)","income",n.series,e,s=>s.toFixed(1));for(const s of q("report").querySelectorAll(".chart")){const o=s.querySelector("svg"),a=s.dataset.key,c=l=>{const u=o.getBoundingClientRect(),f=(l.clientX-u.left)/u.width*Number(o.dataset.w),d=Number(o.dataset.l),h=Number(o.dataset.r),g=Math.min(1,Math.max(0,(f-d)/(h-d))),v=n.series[Math.round(g*(n.series.length-1))],m=o.querySelector(".cross"),p=d+v.t/(n.series.at(-1).t||1)*(h-d);m.setAttribute("x1",p),m.setAttribute("x2",p),m.setAttribute("visibility","visible"),s.querySelector(".readout").innerHTML=`${_t(v.t)} · `+e.map(y=>{const T=v.p[y][a];return`${ei(y)} <b>${a==="income"?T.toFixed(1):Math.round(T)}</b>`}).join(" · ")};o.addEventListener("pointerdown",c),o.addEventListener("pointermove",c)}}function uS(){zt=!1,q("rnd").hidden=!0,$.selected=$.target=null,bt();const n=U.winner===ge;q("end-title").textContent=n?"Victory":"Defeat",q("end-title").style.color=ft(n?ge:U.winner);const e=[...new Set(Ra)],t=e.length?` · ${e.map(i=>i[0].toUpperCase()+i.slice(1)).join(" / ")} AI`:"";q("end-sub").textContent=(n?`The system is yours after ${_t(U.time)}.`:`Your last world fell at ${_t(U.time)}.`)+t+` · ${ds?"Daily · ":""}${En[U.system].name}`,lS(),setTimeout(()=>q("end").hidden=!1,1200)}let hf=performance.now(),bc=0,Ec=0,os=!1;function Fp(n){const e=Math.min(.1,(n-hf)/1e3);if(hf=n,U){if(zt&&!Qn)if(St?.role==="client")U.time+=e;else{let t=e*Er;for(;t>0;){const i=Math.min(.25,t);for(const r of Ca)Of(U,r,i);Kl(U,i),t-=i}}if(zt){if($.selected!==null&&U.bodies[$.selected].owner!==ge&&($.selected=$.target=null),St?.role!=="client"){const t=U.events.splice(0);Dp(t),St?.role==="host"&&t.length&&St.room.broadcast({t:"events",list:t})}St?.role==="host"&&(Ec-=e,(Ec<=0||U.winner!==null)&&(Ec=.25,St.room.broadcast({t:"state",s:WM()}))),U.mp&&!os&&!U.bodies.some(t=>t.owner===ge)&&!U.fleets.some(t=>t.owner===ge&&!t.probe)&&U.winner===null&&(os=!0,ot("Your empire has fallen · watching the rest","#ff7a4d"),$.vis=null),$.fleet!==null&&vu(),bc-=e,bc<=0&&(bc=.25,$.vis=os?null:zl(U,ge),bt(),Xs(),ui(q("clock"),`<b>₵ ${Math.floor(U.credits[ge])}</b> ${jt(`+${Vl(U,ge).toFixed(1)}/s`,qM(),"inc")} · T+${_t(U.time)}`)),U.winner!==null&&uS()}zt&&iS(e),Ve.render(U,$,e*(zt?Er:.2),n/1e3)}requestAnimationFrame(Fp)}window.addEventListener("resize",Ve.resize);Ve.resize();U=wf({seed:11,opponents:2});Ca=[0,1,2].map(n=>Rc(n,"hard",Ti(5+n)));Ve.build(U);Ve.orbit.dist=330;(function n(){if(!(zt||q("menu").hidden)){for(let e=0;e<4;e++){for(const t of Ca)Of(U,t,.25);Kl(U,.25)}Ve.orbit.az+=.001,setTimeout(n,50)}})();requestAnimationFrame(Fp);window.__perihelion={get game(){return U},view:Ve,ui:$,sim:{launch:br,fleetState:On,step:Kl}};
