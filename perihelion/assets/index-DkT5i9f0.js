var xv=n=>{throw TypeError(n)};var Po=(n,e,t)=>e.has(n)?xv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);function _v(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in n)){const r=Object.getOwnPropertyDescriptor(i,s);r&&Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const y0={ansible:'<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>',drives:'<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>',sensors:'<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',intel:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',weapons:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',armour:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',industry:'<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>',array:'<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',targeting:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',kinetic:'<path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M4 9v6"/>',torch:'<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>',hardened:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>',pdnet:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',sundiver:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',massdriver:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',ringyard:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',citadel:'<path d="M10 5V3"/><path d="M14 5V3"/><path d="M15 21v-3a3 3 0 0 0-6 0v3"/><path d="M18 3v8"/><path d="M18 5H6"/><path d="M22 11H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"/><path d="M6 3v8"/>',college:'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',spy:'<path d="M18 11c-1.5 0-2.5.5-3 2"/><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"/><path d="M6 11c1.5 0 2.5.5 3 2"/>'},yv={guns:"M3 12h10M5 12V9h6v3M8 9V3.5",attack:"M3 3l10 10M13 3L3 13M3 10v3h3M13 10v3h-3",fleet:"M5 3.5l6 4.5-6 4.5",probe:"M8 2.5l5 5.5-5 5.5-5-5.5z",incoming:"M4 5l4 6 4-6",reinforce:"M4 11l4-6 4 6",system:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",focus:"M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0",pause:"M5.5 3.5v9M10.5 3.5v9",play:"M5 3l8 5-8 5z",close:"M4 4l8 8M12 4l-8 8",assist:"M12.5 5.5A5 5 0 1 0 13 9M12.5 2v3.5H9",spy:"M2.5 7.5h11M4.5 7.5l1.5-4h4l1.5 4M5.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 11.5h1",dark:"M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z",seam:"M8 1.5l4.5 4-4.5 8.5-4.5-8.5zM3.5 5.5h9M6 5.5l2 8.5 2-8.5",relay:"M3.5 9.5a5 5 0 0 0 7-7zM7 6l4.5-4.5M6 11l-2 3.5h7L9 11",depot:"M8 1.5C11 5.5 12 7.5 12 10a4 4 0 0 1-8 0c0-2.5 1-4.5 4-8.5zM6.5 10.5a1.5 1.5 0 0 0 1.5 1.5",post:"M8 9v5.5M5.5 14.5h5M5.2 6.2a4 4 0 0 1 5.6 0M3 4a7 7 0 0 1 10 0M8 8.5m-.6 0a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0",fortress:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5z",archive:"M2 3.5h4.5A1.5 1.5 0 0 1 8 5v9a1.5 1.5 0 0 0-1.5-1.5H2zM14 3.5H9.5A1.5 1.5 0 0 0 8 5v9a1.5 1.5 0 0 1 1.5-1.5H14z",hulk:"M8 5v9.5M5 7.5h6M2.5 10.5a5.5 4.5 0 0 0 11 0M8 2.2m-1.3 0a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0",forge:"M8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5M3.4 3.4l1.8 1.8M10.8 10.8l1.8 1.8M12.6 3.4l-1.8 1.8M5.2 10.8l-1.8 1.8M8 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0",comet:"M5 11m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 9l6.5-6.5M7.8 10.8l5-3.3M5.2 8.2l3.3-5",derelict:"M1.5 9.5l3.5-3h6l3.5 3-3.5 3H5zM9 6.5L7.5 4M6.5 9.5l1.5 1.5 1-2",signal:"M1.5 8.5h3l2-5 3 9 2-4h3",wreck:"M8 1.5v13M2.4 4.8l11.2 6.4M13.6 4.8L2.4 11.2",convoy:"M2 4.5l3 3.5-3 3.5M6.5 4.5l3 3.5-3 3.5M11 4.5l3 3.5-3 3.5",cache:"M2.5 5L8 2l5.5 3v6L8 14l-5.5-3zM2.5 5L8 8l5.5-3M8 8v6",drives:"M8 1.5l2.5 5h-5zM5.5 6.5h5v4h-5zM6.5 10.5L5 14.5M9.5 10.5l1.5 4M8 10.5v4",sensors:"M2.5 10a6 6 0 0 0 8.5-8.5zM6.8 6.2l5-5M12 1.5h2v2",intel:"M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",weapons:"M2 14l8-8M9.5 6.5l1.5-4 2.5 2.5-4 1.5M3 10l3 3",armour:"M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 4.5v7M5 6.5v3M11 6.5v3",industry:"M3 13l5.5-5.5M9.2 2.6a3.3 3.3 0 1 0 4.2 4.2l-2.2-.4-.6-1.6zM2 14l1-1",ansible:"M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4.6 4.6a4.8 4.8 0 0 0 0 6.8M11.4 4.6a4.8 4.8 0 0 1 0 6.8M2.2 2.2a8.2 8.2 0 0 0 0 11.6M13.8 2.2a8.2 8.2 0 0 1 0 11.6",targeting:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M8 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 1v3M8 12v3M1 8h3M12 8h3",kinetic:"M1.5 8h7M5.5 4.5L9 8l-3.5 3.5M11 3v10M13.5 5v6",torch:"M8 1.5c2.5 3 3.5 5 3.5 7.5a3.5 3.5 0 0 1-7 0c0-1.5.7-2.5 1.5-3.5.3 1.5 1 2 2 2 0-2-.5-4 0-6z",hardened:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5zM8 5.5v5M5.5 8h5",pdnet:"M2 12.5a6 6 0 0 1 12 0zM4.6 6.2L3.4 4M8 5V2.5M11.4 6.2L12.6 4",sundiver:"M5 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 3.5h5v9h-5zM9.5 8h5M12 3.5v9",massdriver:"M2 13L13 2M4.5 13.5L14 4M10.5 2h3.5v3.5",ringyard:"M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 8m-6.5 0a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0",citadel:"M2.5 14.5v-9h2v2h2v-2h3v2h2v-2h2v9zM6.5 14.5v-3h3v3",telescope:"M2 10l9-5 1.5 3-9 5zM6.5 11.5l-2 3M7.5 11l2 3.5M11 5l1.5-1 1.5 3-1.5 1",star:"M8 1.5l1.9 4.2 4.6.4-3.5 3 1.1 4.5L8 11.2l-4.1 2.4 1.1-4.5-3.5-3 4.6-.4z"},Mp=n=>y0[n]?{vb:"0 0 24 24",body:y0[n],lu:!0}:{vb:"0 0 16 16",body:`<path d="${yv[n]}"/>`,lu:!1},At=(n,e="")=>{const t=Mp(n);return`<svg class="ic${t.lu?" lu":""}${e?` ${e}`:""}" viewBox="${t.vb}" aria-hidden="true">${t.body}</svg>`},Ve=-1,M0=0,Se={accel:.03,outerPeriod:2400,outerRadius:200,startShips:4,startCredits:400,income:{planet:1,moon:.5,station:.6,asteroid:.3,visitor:0},homeIncome:.4,mineIncome:1.5,ship:{cost:150,time:45},structures:{shipyard:{name:"Shipyard",cost:400,time:90,desc:"Builds ships, one at a time"},mine:{name:"Mine",cost:200,time:45,only:["asteroid","moon"],maxLevel:3,desc:"+1.5/s per level"},skimmer:{name:"Gas harvester",cost:350,time:70,where:"giant",maxLevel:3,income:2,desc:"Skims fuel from the clouds: +2/s per level"},exchange:{name:"Orbital exchange",cost:450,time:80,where:"home",maxLevel:2,income:2.5,desc:"Sells war bonds: +2.5/s per level"},defence:{name:"Guns",cost:250,time:50,maxLevel:3,desc:"+2 guns per level"},bureau:{name:"Security bureau",cost:250,time:50,maxLevel:2,desc:"Hunts enemy spies here and on nearby worlds"},lab:{name:"Research station",cost:300,time:60,maxLevel:3,desc:"Research +50% per level"},habitat:{name:"Habitat",cost:300,time:60,maxLevel:3,crewOnly:!0,desc:"Quarters for crews: +4 crew per level"}},baseGuns:1,gunsPerDefence:2,coverShare:.5,moonCover:.25,fire:.12,gunRegen:.02,flipTime:4,scrapRefund:.4,scrapTime:20,cooldown:15,probe:{cost:80,speed:4,scan:150},cancelRefund:.8,labSpeed:.5,upkeep:{free:40,cost:.05},crew:{home:16,planet:8,giant:6,station:6,moon:3,asteroid:1,habitat:4,industry:.1,convoy:4},drill:.004,fuel:{tank:1.2,probe:2}},ui={drives:{name:"Drives",cost:[300,600,1e3],time:[90,150,240],levels:["Magnetic nozzle","Pellet-fusion torch","Catalysed fusion drive"],text:["Tighter plasma, +15% thrust","Pulsed fusion, +30% thrust","Hotter burn, +45% thrust"]},sensors:{name:"Sensors",cost:[250,500,900],time:[80,140,220],levels:["Long-baseline telescopes","Deep-space listening posts","Interferometer net"],text:["Spot drive flares further out","Hear further into the system","Wide-field sight, a long way out"]},intel:{name:"Intel",cost:[300,550,850],time:[90,150,210],levels:["Signals intercept","Agents in the yards","Broken fleet cipher"],text:["Read enemy fleet sizes; recruit agents; catch enemy agents more often","Learn enemy routes and landing points","Know arrival times; get warnings"]},weapons:{name:"Weapons",cost:[400,800],time:[120,200],levels:["Coilgun batteries","Spinal railguns"],text:["Faster slugs, +15% firepower","Hull-length rails, +30% firepower"]},armour:{name:"Armour",cost:[400,800],time:[120,200],levels:["Whipple shielding","Point-defence drone swarm"],text:["Layered plate, 12% less damage","Drones swat rounds, 24% less damage"]},industry:{name:"Industry",cost:[350,700],time:[100,180],levels:["Orbital fabricators","Self-replicating tooling"],text:["Build 12% faster, mines +15%","Build 24% faster, mines +30%"]}},Sl={burn:.12,seen:.3},wi={travel:40,cost:250,catch:1/300,intel:.5,bureau:1.5,bureauRange:40,skim:.4,slow:.25},Mv=[70,100,135,175],qu=["intel","sensors","weapons","drives","industry","armour"],Xn={ansible:{name:"Entangled signals",needs:["intel","sensors"],cost:1100,time:220,text:"Read every fleet you can see: its size, destination and arrival time; get warnings"},targeting:{name:"Targeting data",needs:["sensors","weapons"],cost:1100,time:220,text:"+20% firepower when attacking"},kinetic:{name:"Kinetic strike",needs:["weapons","drives"],cost:1100,time:220,text:"Fleets arrive firing: an opening volley destroys a tenth of their number in defenders"},torch:{name:"Torch production",needs:["drives","industry"],cost:1100,time:220,text:"Ships build 25% faster and fly 10% faster"},hardened:{name:"Hardened colonies",needs:["industry","armour"],cost:1100,time:220,text:"+1 gun on every world; guns rebuild twice as fast"},pdnet:{name:"Point-defence net",needs:["armour","intel"],cost:1100,time:220,text:"Your worlds shoot down 15% of every attacking fleet as it arrives"}},$i=(n,e,t)=>e!==Ve&&!!n.tech&&!!n.tech[e][t],bp=(n,e)=>Xn[n]?Xn[n].name:ui[n].levels[e-1],vn={sundiver:{needs:"torch",name:"Sun-diver collectors",where:"inner",text:"Every world you hold earns 50% more",cost:2e3,time:480},massdriver:{needs:"kinetic",name:"Mass driver",where:"planet",text:"Fleets launched here fly 50% faster",cost:2e3,time:480},ringyard:{needs:"hardened",name:"Ring yard",where:"giant",text:"Ships build three times as fast here",cost:2e3,time:480},citadel:{needs:"pdnet",name:"Fortress world",where:"any",text:"Twice the guns here, and its cover reaches its family at full strength",cost:2e3,time:480},array:{needs:"ansible",name:"Ansible array",where:"any",text:"See every world and fleet in the system, and where they are going",cost:2e3,time:480},college:{needs:"targeting",name:"War college",where:"any",text:"Simulator-trained crews: every ship you build starts as a veteran (second rank)",cost:2e3,time:480}},Hc=(n,e,t)=>e!==Ve&&n.bodies.some(i=>i.wonder===t&&i.owner===e);function bo(n,e,t){const i=vn[t];if(e.owner===Ve||e.visitor)return"not yours";if(!$i(n,e.owner,i.needs))return`needs ${Xn[i.needs].name}`;if(e.project||e.wonder)return"this world already has one";if(n.wonders&&n.wonders[t]!==void 0)return"already built";if(n.bodies.some(s=>s.project&&s.project.key===t&&s.owner===e.owner))return"already building it";if(i.where==="giant"&&!e.giant)return"gas giants only";if(i.where==="planet"&&e.kind!=="planet")return"planets only";if(i.where==="inner"){const s=n.bodies.filter(r=>r.kind==="planet"&&r.parent===null&&!r.star).sort((r,o)=>r.r-o.r)[0];if(e!==s)return"the innermost planet only"}return n.credits[e.owner]<i.cost?"not enough credits":null}function Sp(n,e,t){if(bo(n,e,t))return!1;const i=vn[t];return n.credits[e.owner]-=i.cost,Kt(n,e.owner,"spent",i.cost),e.project={key:t,left:i.time,paid:i.cost},En(n,{type:"project",phase:"start",owner:e.owner,at:e.id,key:t}),!0}const $c=(n,e)=>1+.5*(Ca(n,e)-1);function bv(n,e){for(const t of n.bodies){if(!t.project||t.owner===Ve||t.sieges.length||(t.project.left-=e*$c(n,t.owner)*(wv(n,t).length?1-wi.slow:1),t.project.left>0))continue;const i=t.project.key;t.wonder=i,t.project=null,(n.wonders||(n.wonders={}))[i]=t.id,En(n,{type:"project",phase:"done",owner:t.owner,at:t.id,key:i});for(const s of n.bodies)!s.project||s.project.key!==i||(s.owner!==Ve&&(n.credits[s.owner]+=Math.round(s.project.paid/2)),En(n,{type:"project",phase:"lost",owner:s.owner,at:s.id,key:i}),s.project=null)}}const Ji=(n,e,t)=>e===Ve||!n.tech?0:n.tech[e][t];function Kt(n,e,t,i=1){e===Ve||!n.stats||(n.stats.totals[e][t]+=i)}function b0(n){n.stats.series.push({t:n.time,p:n.credits.map((e,t)=>({ships:n.bodies.reduce((i,s)=>i+(s.owner===t?s.ships:0),0)+n.fleets.reduce((i,s)=>i+(s.owner===t?s.n:0),0),worlds:n.bodies.filter(i=>i.owner===t).length,income:va(n,t),credits:e}))})}const df=(n,e)=>n.fuel?Se.fuel.tank*(1+.15*Ji(n,e,"drives")):1/0,wl=(n,e)=>Se.accel*(n.thrust||1)*(1+.15*Ji(n,e,"drives"))*($i(n,e,"torch")?1.1**2:1),ff=(n,e)=>1+.15*Ji(n,e,"weapons"),wp=(n,e)=>ff(n,e)*($i(n,e,"targeting")?1.2:1),Wc=(n,e)=>1-.12*Ji(n,e,"armour"),to=(n,e,t=null)=>(1+.12*Ji(n,e,"industry"))*(t&&t.perk==="forge"?yn.forge.boost:1);function Js(n,e,t){const i=n.tech[e][t]||0;if(Xn[t]){const r=Xn[t];return i?null:{level:1,cost:r.cost,time:r.time,text:r.text,title:r.name}}const s=ui[t];return i<s.cost.length?{level:i+1,cost:s.cost[i],time:s.time[i],text:Tp(n,t,i),title:s.levels[i]}:null}function Tp(n,e,t){const i=ui[e].text[t];return n.crew&&e==="industry"?`${i}, crews +${Math.round(Se.crew.industry*100*(t+1))}%`:i}function Sv(n,e){const t=_s[e].text;return n.crew&&e==="convoy"?`${t}, and ${Se.crew.convoy} crew sign on`:t}function Ca(n,e){const t=n.bodies.reduce((i,s)=>i+(s.owner===e?ro(s,"lab")*(s.perk==="archive"?2:1):0),0);return(1+Se.labSpeed*t)*(Lp(n,e,"archive")?yn.archive.boost:1)*(n.research||1)}function ga(n,e,t){const i=Js(n,e,t);return i?Xn[t]&&Xn[t].needs.some(s=>n.tech[e][s]<2)?"locked":n.tech[e].project?"already researching":n.credits[e]<i.cost?"not enough credits":null:"complete"}function Ep(n,e,t){if(ga(n,e,t))return!1;const i=Js(n,e,t);return n.credits[e]-=i.cost,Kt(n,e,"spent",i.cost),n.tech[e].project={key:t,left:i.time,total:i.time},!0}function hf(n,e,t){return e===Ve||!t||t.owner===Ve||t.owner===e?"enemy worlds only":Ji(n,e,"intel")<1?"needs Signals intercept":(n.spies||[]).some(i=>i.owner===e&&i.body===t.id)?"already a spy there":n.credits[e]<wi.cost?"not enough credits":null}function Ap(n,e,t){if(hf(n,e,t)||n.winner!==null)return null;n.credits[e]-=wi.cost,Kt(n,e,"spent",wi.cost);const i={id:n.nextId++,owner:e,body:t.id,since:n.time+wi.travel};return(n.spies||(n.spies=[])).push(i),i}const Cp=(n,e)=>wi.bureauRange*(e.perk==="post"?2:1)*as(n),io=(n,e)=>yn[e].range*as(n),wv=(n,e)=>(n.spies||[]).filter(t=>t.body===e.id&&t.owner!==e.owner&&t.since<=n.time);function pf(n,e){if(e.owner===Ve)return 1;const t=vt(n,e,n.time);let i=0;for(const s of n.bodies){if(s.owner!==e.owner)continue;const r=s.structures.find(o=>o.type==="bureau"&&o.left<=0);r&&(s===e||In(vt(n,s,n.time),t)<=Cp(n,s))&&(i=Math.max(i,r.level))}return wi.catch*(1+wi.intel*Ji(n,e.owner,"intel"))*(1+wi.bureau*i)}const Tv=(n,e)=>{const t=Math.sin(n*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function Ev(n,e){if(!n.spies||!n.spies.length)return;const t=Math.floor(n.time-e);n.spies=n.spies.filter(i=>{const s=n.bodies[i.body];if(s.owner===i.owner||s.owner===Ve)return!1;if(i.since>n.time)return!0;const r=Math.min(n.credits[s.owner],ho(s,n)*wi.skim*e);n.credits[s.owner]-=r,n.credits[i.owner]+=r,Kt(n,i.owner,"earned",r);const o=pf(n,s);for(let a=Math.max(t,Math.floor(i.since))+1;a<=Math.floor(n.time);a++)if(Tv(i.id,a)<o)return En(n,{type:"spycaught",owner:i.owner,by:s.owner,at:s.id,after:n.time-i.since}),!1;return!0})}function xr(n,e){const t=Mv[Ji(n,e,"sensors")]*as(n),i=[];for(const l of n.bodies)l.owner===e&&i.push([vt(n,l,n.time),t]);for(const l of n.fleets)l.owner===e&&i.push([Nn(l,n.time),20*as(n)]);for(const l of n.bodies)l.sieges.some(u=>u.owner===e)&&i.push([vt(n,l,n.time),20]);for(const l of n.scans||[])l.owner===e&&l.until>n.time&&i.push([vt(n,n.bodies[l.body],n.time),14]);for(const l of n.spies||[])l.owner===e&&l.since<=n.time&&i.push([vt(n,n.bodies[l.body],n.time),30]);const s=l=>i.some(([u,f])=>In(u,l)<=f);for(const l of n.bodies)l.perk==="relay"&&l.owner===e&&i.push([vt(n,l,n.time),io(n,"relay")]);const r=new Set(n.bodies.filter(l=>l.owner===e||s(vt(n,l,n.time))).map(l=>l.id)),o=Math.max(Ji(n,e,"intel"),$i(n,e,"ansible")||Hc(n,e,"array")?3:0),a=new Set((n.spies||[]).filter(l=>l.owner===e&&l.since<=n.time).map(l=>l.body)),c=(l,u=Nn(l,n.time))=>l.owner===e||a.has(l.from)||(l.dark&&!u.burning?i.some(([f,d])=>In(f,u)<=d*Sl.seen):s(u));return Hc(n,e,"array")?{owner:e,sees:()=>!0,seesFleet:()=>!0,bodies:new Set(n.bodies.map(l=>l.id)),intel:o,warn:!0}:{owner:e,sees:s,seesFleet:c,bodies:r,intel:o,warn:Lp(n,e,"post")||$i(n,e,"ansible")}}function Ui(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const In=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),S0=["Aurelion","Seraphine","Caelestis","Vespera","Solenne","Astraeon","Halcyra","Lumeris","Orionde","Celestine","Empyra","Noctara","Stellarin","Zenitha","Aethelis","Borealis Major","Cygnara","Draconis","Elysion","Fulgora","Galathea","Heliara","Ixora","Lyrae","Meridia","Nebulon","Ophira","Polaria","Quasara","Radiantis","Sidera","Thessaly Prime","Uranara","Valenor","Wynthera","Xandria","Ysolde","Zephyra","Aquilon","Brightholm","Corvessa","Dawnmere","Equinoxa","Firmament","Gloriana","Hyperion Tor","Irisca","Kyrios","Luminara","Magellane","Nimbara","Ouranos Minor","Perigee","Radiance","Solstira","Tethra","Umbrielle","Vireon","Aldebara","Betelline","Capellan","Deneba","Etamin","Fomalhara","Hadara","Izarine","Kochaba","Mirzana","Nashira","Pollara","Rigelle","Sadalmel","Talitha","Vegara","Alcyone Deep","Canopea","Mimosa","Aludra","Suhail","Menkara"],w0=["Selene Minor","Lucen","Nyxa","Astra","Eos","Hesperel","Stilbe","Aglaia","Phaenna","Asteria","Chione","Lampetia","Aether","Hemera","Orphne","Aura","Pleia","Maia Minor","Electra Minor","Merope Minor","Taygete Minor","Sterope","Celaeno Minor","Alcyon","Aphelia","Periel","Syzyn","Nadira","Zenia","Umbra","Penumbra","Crescen","Gibbous","Waxen","Occulta","Transita","Libra Minor","Albedo","Lumen","Nimbus","Corona Minor","Halo","Parhelia","Glimmer","Starling","Morrowlight","Duskmere","Emberlight","Frostlight","Glowworm","Ashlight","Moth","Lantern","Candela","Lux","Ignis","Scintilla","Stella Parva","Vela Minor","Nova Parva","Pulsa","Quark","Photon","Zodia","Ecliptica"],Av=["Ring One","Anchor","Meridian","Longreach","Holdfast","Keystone","Lantern","Tollgate","Crossways","Beacon Hill","Harbourline","Windlass","Capstan","Stillwater","Gantry Nine","Fairhaven","Moorings","Pinwheel","Carrick Yard","Halfway House","Sentinel","Spindle","Drydock Four","Tether","Outlook","Commonwealth","Linchpin","Caravel","Weigh Station","Portcullis"],Cv=["Hollow","Gravel","Anvil","Cairn","Dolmen","Flinders","Grist","Hearth","Kiln","Loam","Menhir","Nugget","Quarry","Rubble","Slag","Tor","Whetstone","Boulder","Clinker","Dregs","Ingot","Lump","Pumice","Scoria","Talus","Tuff","Cobalt","Nickel Jack","Old Iron","Spall","Brickbat","Crag","Scree","Knapp","Hardpan"],T0=["Resolute","Tenacity","Wayfarer","Undaunted","Nightingale","Clemency","Forbearance","Hardihood","Persistence","Sparrowhawk","Temerity","Valiance","Wanderlust","Adamant","Bellicose","Candour","Diligence","Endeavour","Fortitude","Gallantry","Harbinger","Impetus","Jubilee","Kittiwake","Longbow","Mistral","Nonesuch","Obstinate","Paladin","Quicksilver","Rapier","Sirocco","Tempest","Unbowed","Vigilant","Warspite","Xiphias","Yeoman","Zealous","Albatross","Brigantine","Corsair","Dauntless","Equinox","Firebrand","Grenadier","Halberd","Inflexible","Javelin","Kingfisher","Lionheart","Mariner","Nemesis","Onslaught","Peregrine","Quarterstaff","Relentless","Stalwart","Thunderer","Unicorn","Vanguard","Wolfhound","Arbalest","Bulwark","Cutlass","Defiance","Ember Tide","Falconer","Goshawk","Hotspur","Invictus","Jackdaw","Kraken","Lodestone","Monsoon","Northwind","Outrider","Pathfinder","Quarrel","Redoubt","Scimitar","Trident","Upholder","Vortex","Whirlwind","Asp","Basilisk","Cockatrice","Dragonet","Estoc","Fulmar","Glaive","Hurricane","Ironside","Jaeger","Kestrel Wing","Lance","Magpie","Narwhal","Osprey","Petrel","Raven","Shrike","Tern","Umbra","Viper","Wyvern Wing","Auk","Bittern","Curlew","Dunlin","Egret","Fieldfare","Gannet","Heron","Ibis","Jay","Kite","Lapwing","Merlin","Nuthatch","Oriole","Plover","Redshank","Skua","Tanager","Veery","Whimbrel","Stoic","Candle","Hearthguard"],lo=.08,Rp=[1,2.5,4.5],Ln=n=>Rp.filter(e=>(n||0)>=e).length,E0=(n,e,t)=>{const i=Math.min(2,Math.max(0,n/Math.max(e,.5)));return Math.min(4.5,.15+.35*Math.min(1,t/Math.max(e,1))+.3*i**1.3)};function En(n,e){n.events&&(n.events.push({t:n.time,...e}),n.events.length>60&&n.events.splice(0,n.events.length-60))}function Pp(n){const e=T0[(n.nameSeed+n.nextId*7919)%T0.length];return n.fleets.some(i=>i.name===e)?`${e} ${["II","III","IV","V"][n.nextId%4]}`:e}const wc=(n,e,t,i)=>e+i>0?(n*e+t*i)/(e+i):0,A0=n=>Se.outerPeriod*(n/Se.outerRadius)**1.5,vs=4*Math.PI*Math.PI*Se.outerRadius**3/Se.outerPeriod**2,Lo=(n,e)=>2*Math.PI*Math.sqrt(n*n*n/e),Io={rock:.06,gas:.035},Rv={rock:3e-5,gas:.001},C0=.5,Pv=(n,e,t)=>n*Math.cbrt(e/(3*t)),yn={seam:{name:"Rich seam",text:"Mines here pay double",kinds:["asteroid","moon"],fits:"mine"},relay:{name:"Old relay",text:"See everything inside its ring",range:160},depot:{name:"Fuel depot",text:"Fleets launched from your worlds inside its ring fly 20% faster",range:120,boost:1.2},post:{name:"Listening post",text:"Warns of fleets heading for your worlds. A Security bureau here reaches twice as far",fits:"bureau"},fortress:{name:"Fortress rock",text:"Heavy guns; +1 gun on each of your worlds inside its ring. Guns built here give half as many again",range:100,fits:"defence"},archive:{name:"Ancient archive",text:"Research 25% faster. Research stations here count double",boost:1.25,fits:"lab"},hulk:{name:"Drydock hulk",text:"Ships built here start as veterans. Its shipyards build 50% faster",vet:2.5,fits:"shipyard"},forge:{name:"Tidal forge",text:"Tidal heat runs the foundries: structures, upgrades and ships build twice as fast here",boost:2,giantMoon:!0}},_s={comet:{name:"Comet pass",text:"Catch it on its pass round the sun and hold it to mine it",hold:60,pay:9},derelict:{name:"Derelict warship",text:"Catch the drifting hulk and hold it to salvage veteran ships",hold:45,ships:4},signal:{name:"Lost probe signal",text:"Hold to recover a research level",hold:40},wreck:{name:"Ice-hauler wreck",text:"Hold to salvage its cargo",hold:45,credits:450},convoy:{name:"Refugee convoy",text:"Hold when it docks: the world earns +1/s for good",hold:30,bonus:1},cache:{name:"Supply cache",text:"Hold for a free structure upgrade",hold:30}},Yu={comet:{inside:600,q:[70,120],guns:0},derelict:{inside:540,q:[100,160],guns:2}},uo=(n,e,t=n.time)=>!e.visitor||!!n.visit&&t>=n.visit.t0&&t<=n.visit.t0+n.visit.T,mf=(n,e)=>e.visitor?n.visit?n.visit.t0+n.visit.T-n.time:0:1/0;function Lv(n,e){const t=n.visit;if(!t||e<t.t0||e>t.t0+t.T)return{x:4e3,y:0,z:4e3};const i=t.n*(e-t.t0-t.T/2);let s=Math.asinh(i/t.e);for(let l=0;l<30;l++){const u=(t.e*Math.sinh(s)-s-i)/(t.e*Math.cosh(s)-1);if(s-=u,Math.abs(u)<1e-12)break}const r=t.a*(t.e-Math.cosh(s)),o=t.a*Math.sqrt(t.e*t.e-1)*Math.sinh(s),a=o*.04,c=o*Math.sqrt(1-.0016);return{x:r*Math.cos(t.w)-c*Math.sin(t.w),y:a,z:r*Math.sin(t.w)+c*Math.cos(t.w)}}function R0(n,e,t){const i=n/(e-1),s=Math.acosh(Math.max(1,(t/i+1)/e));return 2*(e*Math.sinh(s)-s)/Math.sqrt(vs/(i*i*i))}function Iv(n,e){const t=Yu[e],i=t.q[0]+xs(n)*(t.q[1]-t.q[0]),s=Math.max(...n.bodies.filter(d=>d.parent===null&&!d.visitor).map(d=>d.r)),r=t.inside*fo(n);let o=1+1e-6,a=1e4;for(let d=0;d<80;d++){const h=Math.sqrt(o*a);R0(i,h,s)>r?o=h:a=h}const c=o,l=i/(c-1),u=R0(i,c,s+60*as(n));n.visit={kind:e,t0:n.time,T:u,q:i,e:c,a:l,n:Math.sqrt(vs/(l*l*l)),w:xs(n)*Math.PI*2};const f=n.bodies.find(d=>d.visitor);return f.owner=Ve,f.ships=0,f.guns=f.guns0=t.guns,f.sieges=[],f.vet=0,f.tf=null,f.name=e==="comet"?`Comet ${String.fromCharCode(65+Math.floor(xs(n)*26))}/${10+Math.floor(xs(n)*90)}`:`Derelict ${Pp(n)}`,f}function Dv(n){const e=n.bodies.find(o=>o.visitor),t=(o,a)=>n.bodies.filter(c=>c.owner===o&&!c.visitor).sort((c,l)=>In(vt(n,c,n.time),a)-In(vt(n,l,n.time),a))[0],i=vt(n,e,n.time),s=(o,a,c,l)=>{const u=t(o,i);if(!(a<1)){if(!u){Kt(n,o,"lost",a);return}e.owner=o,e.ships=a,e.vet=c,e.tf=l,e.restUntil=0,Al(n,e,u,a)}},r=e.sieges;e.sieges=[],e.owner!==Ve&&s(e.owner,e.ships,e.vet,e.tf);for(const o of r)s(o.owner,o.n,o.vet,o.name);for(const o of n.fleets){if(o.to!==e.id)continue;const a=Nn(o,n.time),c=t(o.owner,a);if(!c){Kt(n,o.owner,"lost",o.n),o.n=0;continue}const l=yr(n,e,c,n.time,wl(n,o.owner),{p:{x:a.x,y:a.y,z:a.z},v:{x:a.vx,y:a.vy,z:a.vz}});Mf(o,l,{t0:n.time,to:c.id})}n.fleets=n.fleets.filter(o=>o.n>0||o.probe),e.owner=Ve,e.ships=0,e.guns=0,En(n,{type:"visitor",phase:"left",name:e.name}),n.visit=null}const Uv={first:300,every:510,jitter:90,notice:90,grace:120};function xs(n){return n.evSeed=Math.imul(n.evSeed^n.evSeed>>>15,2246822507)+1831565813>>>0,n.evSeed/4294967296}function kv(n,e){const t=Uv,i=fo(n);if(n.nextEvent===void 0&&(n.nextEvent=(t.first+(xs(n)-.5)*2*60)*i),n.happenings||(n.happenings=[]),n.time>=n.nextEvent){const s=Object.keys(_s).filter(c=>!Yu[c]||!n.visit),r=s[Math.floor(xs(n)*s.length)];let o;if(Yu[r]){const c=Iv(n,r);o={id:n.nextId++,kind:r,at:c.id,starts:n.time+t.notice*i,ends:n.visit.t0+n.visit.T-20,holder:Ve,held:0}}else{const c=n.bodies.filter(f=>!f.home&&!f.visitor&&!n.happenings.some(d=>d.at===f.id)),l=c.some(f=>f.owner===Ve)?c.filter(f=>f.owner===Ve):c,u=l[Math.floor(xs(n)*l.length)];o={id:n.nextId++,kind:r,at:u.id,starts:n.time+t.notice*i,ends:n.time+(t.notice+t.grace)*i+_s[r].hold,holder:Ve,held:0}}const a=n.bodies[o.at];n.happenings.push(o),En(n,{type:"event",phase:"soon",kind:r,at:a.id}),n.nextEvent=n.time+(t.every+(xs(n)-.5)*2*t.jitter)*i}for(const s of n.happenings){if(n.time<s.starts)continue;const r=n.bodies[s.at],o=_s[s.kind],a=r.sieges.length?Ve:r.owner;a!==s.holder&&(s.holder=a,s.held=0),a!==Ve&&(s.held+=e,s.kind==="comet"&&(n.credits[a]+=o.pay*e,Kt(n,a,"earned",o.pay*e)),s.held>=o.hold&&(Nv(n,s,r,a),s.done=!0))}n.visit&&n.time>=n.visit.t0+n.visit.T-1&&Dv(n);for(const s of n.happenings)!s.done&&n.time>s.ends&&(s.done=!0,En(n,{type:"event",phase:"gone",kind:s.kind,at:s.at}));n.happenings=n.happenings.filter(s=>!s.done)}function Nv(n,e,t,i){const s=_s[e.kind];let r="";if(e.kind==="derelict"&&(t.vet=wc(t.vet||0,t.ships,2.5,s.ships),t.ships+=s.ships,r=`${s.ships} veteran ships`),e.kind==="wreck"&&(n.credits[i]+=s.credits,Kt(n,i,"earned",s.credits),r=`${s.credits} credits`),e.kind==="convoy"&&(t.bonus=(t.bonus||0)+s.bonus,n.crew&&(t.crewBonus=(t.crewBonus||0)+Se.crew.convoy),r=`+${s.bonus}/s here${n.crew?` and ${Se.crew.convoy} crew`:""}`),e.kind==="comet"&&(r="the comet mined"),e.kind==="signal"){const o=Object.keys(ui).filter(c=>Js(n,i,c)&&n.tech[i].project?.key!==c),a=o[Math.floor(xs(n)*o.length)];a?(n.tech[i][a]+=1,a==="drives"&&qp(n,i),r=ui[a].levels[n.tech[i][a]-1]):(n.credits[i]+=400,Kt(n,i,"earned",400),r="400 credits")}if(e.kind==="cache"){const o=t.structures.find(a=>Se.structures[a.type].maxLevel&&a.level<Se.structures[a.type].maxLevel&&a.left<=0&&!a.scrap);o?(o.level+=1,r=`${Se.structures[o.type].name} to level ${o.level}`):(n.credits[i]+=300,Kt(n,i,"earned",300),r="300 credits")}En(n,{type:"event",phase:"won",kind:e.kind,at:t.id,owner:i,what:r})}const Lp=(n,e,t)=>e!==Ve&&n.bodies.some(i=>i.perk===t&&i.owner===e),oi={classic:{name:"Classic",text:"Six worlds, a belt, a few moons"},court:{name:"Giant’s court",text:"One huge gas giant ringed with moons",court:!0},wide:{name:"Wide and cold",text:"Few worlds, far apart",gap:30,moons:.5,rocks:3},crowded:{name:"Crowded",text:"Worlds packed close: short, sharp trips",gap:8,stations:3},belt:{name:"Rich belt",text:"A thick asteroid belt worth mining",rocks:8,beltW:12},binary:{name:"Binary",text:"A second sun and its worlds swing around the system; its worlds earn +50%",companion:!0},fuel:{name:"Reaction mass",text:"Ships carry little fuel: they coast, wait for launch windows and swing past worlds",fuel:!0,test:!0},vast:{name:"Vast",text:"A system at true-to-life proportions: every voyage is a commitment",scale:4,thrust:.5,worlds:.6,real:!0,inner:360,sunR:5,sunClear:60,research:.6,test:!0}},as=n=>n.scale||1,fo=n=>Math.sqrt(as(n)/(n.thrust||1)),Fv=2.6,P0=6,Ip=Object.keys(oi),Xc=Ip.filter(n=>!oi[n].test);function so(n,e,t=n.time){const i=n.stars[e];if(i.e){const r=i.phase+2*Math.PI*t/i.period;let o=r;for(let l=0;l<6;l++)o-=(o-i.e*Math.sin(o)-r)/(1-i.e*Math.cos(o));const a=i.a*(Math.cos(o)-i.e),c=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(o);return{x:a*Math.cos(i.w)-c*Math.sin(i.w),y:0,z:a*Math.sin(i.w)+c*Math.cos(i.w)}}const s=i.phase+2*Math.PI*t/i.period;return{x:Math.cos(s)*i.r,y:0,z:Math.sin(s)*i.r}}function Dp(n=new Date){const e=n.toISOString().slice(0,10);let t=2166136261;for(const i of e)t=Math.imul(t^i.charCodeAt(0),16777619);return{seed:t>>>0,system:Xc[(t>>>0)%Xc.length],key:e}}function Up({seed:n=Date.now(),opponents:e=1,mp:t=!1,system:i="classic"}={}){const s=Ui(n),r=oi[i]||oi.classic,o=(E,P)=>{const U=E.filter(V=>!P.has(V)),B=U[Math.floor(s()*U.length)]??`${E[0]} ${P.size}`;return P.add(B),B},a=E=>{for(let P=E.length-1;P>0;P--){const U=Math.floor(s()*(P+1));[E[P],E[U]]=[E[U],E[P]]}return E},c=new Set,l=[],u=E=>(E.id=l.length,E.owner=Ve,E.ships=0,E.build=0,E.queue=0,E.structures=[],E.guns=E.kind==="planet"?E.giant?5:2:1+Math.floor(s()*2),E.sieges=[],E.node=E.id*2.39996%(Math.PI*2),l.push(E),E),f=[],d=r.worlds||1,h=r.scale||1,g=e+1,x=a([1,2,3,4]).slice(0,g);for(let E=0;E<6;E++){const P=r.court&&E===5,U=P||!x.includes(E)&&E>=3&&(s()<(r.court?.3:.7)||E===5&&!f.some(q=>q.giant)),B=P?5:U?3.2+s()*1.2:1.6+s()*1.1;let V=E===0?0:x.includes(E)?1:P?5:U?1+Math.floor(s()*3):Math.floor(s()*2);r.moons&&!x.includes(E)&&(V=Math.floor(V*r.moons));const ne=[];for(let q=0;q<V;q++)ne.push({r:B*3.4+6+q*7+s()*.8,size:(.5+s()*.5)*d});f.push({giant:U,size:B*d,base:B,moons:ne,station:!1})}const m=a([1,2,3,4,5]).slice(0,r.stations||2);for(const E of m)f[E].station=!0;for(const E of x)f[E].station&&(f[E].moons=[]);for(const E of f)E.reach=r.real?E.size*1.6+2:Math.max(E.size*1.6,E.station?E.base*2.4+2.5:0,...E.moons.map(P=>P.r+P.size));const p=(r.gap||16)*h;let v=0,b=null;for(const[E,P]of f.entries())b?P.r=b.r+b.reach+P.reach+p+s()*10*h:P.r=r.inner||56,E===4&&(v=b.r+b.reach+p,P.r=v+(r.beltW||6)*h+p+P.reach+s()*10*h),b=P;for(const E of f){const P=E.giant?"gas":"rock";E.gm=r.real?Rv[P]*(E.base/(E.giant?3.8:2.1))**3*vs:Io[P]*E.size**3;const U=yf(E);if(r.real){const V=Pv(E.r,E.gm,vs);let ne=U+1;E.moons.forEach((q,Y)=>{q.r=Math.max(ne+q.size*2,V*(.12+.1*Y)),ne=q.r+q.size*2+.5})}E.stationR=r.real?U+1.2:E.base*2.4+1.5;const B=Math.max(0,...E.moons.map(V=>V.r),E.station?E.stationR:0);B&&(E.gm=Math.max(E.gm,3*vs*(B/(C0*E.r))**3))}for(const E of f){const P=u({kind:"planet",name:o(S0,c),parent:null,r:E.r,period:A0(E.r),phase:s()*Math.PI*2,incl:(s()-.5)*.06,size:E.size,baseSize:E.base,giant:E.giant,gm:E.gm,hue:s()});for(const U of E.moons)u({kind:"moon",name:o(w0,c),parent:P.id,r:U.r,period:Lo(U.r,E.gm),phase:s()*Math.PI*2,incl:(s()-.5)*.3,size:U.size,baseSize:U.size/d,gm:Io.rock*U.size**3,hue:s()});E.station&&u({kind:"station",name:o(Av,c),parent:P.id,r:E.stationR,period:Lo(E.stationR,E.gm),phase:s()*Math.PI*2,incl:.2,size:.45*d,baseSize:.45,hue:0})}const _=r.rocks||4;for(let E=0;E<_;E++){const P=v+s()*(r.beltW||6)*h,U=u({kind:"asteroid",name:o(Cv,c),parent:null,r:P,period:A0(P),phase:E/_*Math.PI*2+s()*.8,incl:(s()-.5)*.1,size:.5+s()*.4,hue:s()});U.baseSize=U.size,U.size*=d,U.gm=.7*Io.rock*U.size**3}const M=[{r:0,period:1,phase:0,size:r.sunR?r.sunR/P0:Fv,gm:vs}];if(r.companion){const E=vs*.25,U=Math.max(...l.filter(Y=>Y.parent===null).map(Y=>Y.r))+40,B=.35,V=U/(1-B),ne=Lo(V,vs+E),q=600+s()*1800;M.push({a:V,e:B,w:s()*Math.PI*2,period:ne,phase:-2*Math.PI*q/ne,size:.5,clear:9,gm:E}),[[20,1.9],[45,2.4]].forEach(([Y,oe],De)=>{const st=Math.max(Io.rock*oe**3,De===1?3*E*(7.5/(C0*Y))**3:0),Qe=u({kind:"planet",name:o(S0,c),parent:null,star:1,r:Y,period:Lo(Y,E),phase:s()*Math.PI*2,incl:(s()-.5)*.06,size:oe,giant:!1,gm:st,hue:s()});De===1&&u({kind:"moon",name:o(w0,c),parent:Qe.id,r:7.5,period:Lo(7.5,st),phase:s()*Math.PI*2,incl:.2,size:.7,gm:Io.rock*.7**3,hue:s()})})}u({kind:"visitor",name:"Visitor",parent:null,r:0,period:1,phase:0,incl:0,size:.8,hue:.55,visitor:!0}).guns=0;const S={mp:t,fuel:!!r.fuel,crew:r.crew!==!1,research:r.research||1,scale:r.scale||1,thrust:r.thrust||1,system:r===oi[i]?i:"classic",stars:M,gravity:!0,sunClear:r.sunClear||P0*M[0].size*1.8,bodies:l,fleets:[],players:g,time:0,winner:null,nextId:1,events:[],nameSeed:Math.floor(s()*1e5)},w=l.filter(E=>E.kind==="planet"),y=x.map(E=>w[E]),T=s()*Math.PI*2;y.forEach((E,P)=>{E.phase=T+P*Math.PI*2/g});for(const E of l)E.kind==="station"&&E.structures.push({type:"shipyard",level:1,left:0});y.forEach((E,P)=>{E.owner=P,E.ships=Se.startShips,E.home=!0;for(const U of l)U.parent===E.id&&U.kind==="moon"&&(U.homeMoon=!0);E.structures.push({type:"shipyard",level:1,left:0},{type:"defence",level:1,left:0}),E.guns=Yc(E)});const L=new Set(y.flatMap(E=>[E.id,...l.filter(P=>P.parent===E.id).map(P=>P.id)])),C=a(Object.keys(yn));let R=0;for(const E of C){if(R>=3)break;const P=yn[E],U=l.filter(oe=>oe.owner===Ve&&!oe.perk&&!oe.visitor&&!L.has(oe.id)&&(!P.kinds||P.kinds.includes(oe.kind))&&(!P.giantMoon||oe.kind==="moon"&&l[oe.parent].giant)),B=oe=>oe.parent===null?oe.id:oe.parent,V=oe=>l.filter(De=>De.perk&&B(De)===B(oe)).length,ne=U.filter(oe=>V(oe)===0),q=ne.length?ne:U.filter(oe=>V(oe)<2);if(!q.length)continue;const Y=q[Math.floor(s()*q.length)];Y.perk=E,E==="fortress"&&(Y.structures.push({type:"defence",level:2,left:0}),Y.guns=Yc(Y)+1),E==="hulk"&&!Y.structures.some(oe=>oe.type==="shipyard")&&Y.structures.push({type:"shipyard",level:1,left:0}),R++}for(const E of l)E.guns0=E.owner===Ve?E.guns:0;return S.evSeed=Math.floor(s()*2**31),S.credits=Array.from({length:S.players},()=>Se.startCredits),S.stats={totals:Array.from({length:S.players},()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,earned:0,spent:0,research:0})),series:[]},S.tech=Array.from({length:S.players},()=>({drives:0,sensors:0,intel:0,weapons:0,armour:0,industry:0,project:null})),S}function kp(n){if(n.visitor)return 0;if(n.kind==="station")return 2;if(n.kind==="asteroid")return 1;const e=n.baseSize??n.size;return n.kind==="moon"?n.homeMoon||e>.8?2:1:n.home?5:n.giant?4:e>2.2?3:2}const gf=n=>!n.scrap&&(n.left<=0||n.next),qc=(n,e)=>n.structures.some(t=>t.type===e&&gf(t)),ro=(n,e)=>n.structures.reduce((t,i)=>t+(i.type===e&&gf(i)?i.level:0),0);function vf(n,e){if(e.owner===Ve||e.perk==="fortress")return 0;const t=vt(n,e,n.time);return n.bodies.some(i=>i.perk==="fortress"&&i.owner===e.owner&&In(vt(n,i,n.time),t)<=io(n,"fortress"))?1:0}const Ov=(n,e)=>(Yc(e)+vf(n,e)+($i(n,e.owner,"hardened")?1:0))*(e.wonder==="citadel"?2:1),Yc=n=>Se.baseGuns+Math.round(Se.gunsPerDefence*ro(n,"defence")*(n.perk==="fortress"&&n.owner!==Ve?1.5:1)),Np=(n,e)=>{if(n.owner===Ve)return{worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};const t=1+.15*(e?Ji(e,n.owner,"industry"):0),i=Se.structures,s={worlds:Se.income[n.kind]*(n.star?1.5:1)+(n.home?Se.homeIncome:0),mines:Se.mineIncome*ro(n,"mine")*t*(n.perk==="seam"?2:1),skimmers:i.skimmer.income*ro(n,"skimmer"),exchanges:i.exchange.income*ro(n,"exchange"),bonuses:n.bonus||0};return e&&Hc(e,n.owner,"sundiver")&&(s.bonuses+=.5*(s.worlds+s.mines+s.skimmers+s.exchanges+s.bonuses)),s},ho=(n,e)=>{const t=Np(n,e);return t.worlds+t.mines+t.skimmers+t.exchanges+t.bonuses},va=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?ho(i,n):0),0),Fp=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?i.ships:0),0)+n.fleets.reduce((t,i)=>t+(i.owner===e&&!i.probe?i.n:0),0);function Tc(n){if(n.owner===Ve||n.visitor)return 0;const e=Se.crew;return(n.home?e.home:n.kind==="planet"?n.giant?e.giant:e.planet:e[n.kind]||0)+e.habitat*ro(n,"habitat")+(n.crewBonus||0)}function jc(n,e){if(!n.crew)return 1/0;const t=n.bodies.reduce((i,s)=>i+(s.owner===e?Tc(s):0),0);return Math.floor(t*(1+Se.crew.industry*Ji(n,e,"industry")))}const Zc=(n,e)=>Fp(n,e)+n.bodies.reduce((t,i)=>t+(i.owner===e?i.queue:0),0),xa=(n,e)=>Math.max(0,Fp(n,e)-Se.upkeep.free)*Se.upkeep.cost,Tl=n=>n.structures.filter(e=>e.type==="shipyard"&&gf(e)).length,Ec=n=>{let e=Se.structures[n.type].cost;for(let t=1;t<(n.level||1);t++)e+=qs({type:n.type,level:t});return Math.round(e*Se.scrapRefund)};function xf(n,e,t){return e.owner===Ve?"not yours":t.scrap?"already scrapping":e.sieges.length?"under attack":null}function Op(n,e,t){return xf(n,e,t)?!1:(t.scrap=Se.scrapTime,Tl(e)||(e.build=0),!0)}function zp(n,e){return e.owner===Ve||e.queue<1?!1:(e.queue-=1,n.credits[e.owner]+=Math.round(Se.ship.cost*Se.cancelRefund),e.queue===0&&(e.build=0),!0)}function Jc(n,e,t){const i=Se.structures[t];return e.owner===Ve?"not yours":i.only&&!i.only.includes(e.kind)?`${e.kind}s can't have one`:i.where==="giant"&&!e.giant?"gas giants only":i.where==="home"&&!e.home?"homeworlds only":i.crewOnly&&!n.crew?"not on this map":e.structures.length>=kp(e)?"no free slots":n.credits[e.owner]<i.cost?"not enough credits":null}function Gi(n,e,t){if(Jc(n,e,t))return!1;const i=Se.structures[t];return n.credits[e.owner]-=i.cost,Kt(n,e.owner,"spent",i.cost),e.structures.push({type:t,level:1,left:i.time}),!0}const qs=n=>Math.round(Se.structures[n.type].cost*(n.type==="defence"?.9:(n.level+1)*.75)),L0=(n,e)=>Se.ship.time/(to(n,e.owner,e)*($i(n,e.owner,"torch")?1.25:1)*(e.wonder==="ringyard"?3:1)*(e.perk==="hulk"?1.5:1)),El=n=>Se.structures[n.type].time*(1+n.level*.5);function ra(n,e,t){const i=Se.structures[t.type];return e.owner===Ve?"not yours":i.maxLevel?t.left>0||t.scrap?"busy":t.level>=i.maxLevel?"at max level":n.credits[e.owner]<qs(t)?"not enough credits":null:"can't be upgraded"}function Zo(n,e,t){return ra(n,e,t)?!1:(Kt(n,e.owner,"spent",qs(t)),n.credits[e.owner]-=qs(t),t.next=t.level+1,t.left=El(t),!0)}function Kc(n,e){return e.owner===Ve?"not yours":qc(e,"shipyard")?n.credits[e.owner]<Se.ship.cost?"not enough credits":Zc(n,e.owner)>=jc(n,e.owner)?"no crew to spare":null:"needs a shipyard"}function ju(n,e){return Kc(n,e)?!1:(n.credits[e.owner]-=Se.ship.cost,Kt(n,e.owner,"spent",Se.ship.cost),e.queue+=1,!0)}function Bp(n,e){const t=e-(n.node||0),i=Math.cos(t)*n.r,s=Math.sin(t)*n.r,r=Math.cos(n.node||0),o=Math.sin(n.node||0),a=Math.cos(n.incl),c=Math.sin(n.incl);return{x:i*r-s*o*a,y:s*c,z:i*o+s*r*a}}function vt(n,e,t){if(e.visitor)return Lv(n,t);const i=Bp(e,e.phase+2*Math.PI*t/e.period);if(e.star){const s=so(n,e.star,t);i.x+=s.x,i.z+=s.z}if(e.parent!==null){const s=vt(n,n.bodies[e.parent],t);i.x+=s.x,i.y+=s.y,i.z+=s.z}return i}const Gp=n=>2*Math.sqrt(n/Se.accel);function I0(n,e,t){const s=vt(n,e,t-.5),r=vt(n,e,t+.5);return{x:(r.x-s.x)/(2*.5),y:(r.y-s.y)/(2*.5),z:(r.z-s.z)/(2*.5)}}const _f=14,yf=n=>n.size*1.8+.4,zv=n=>n.gm?Math.sqrt(n.gm/yf(n)):0,Bs=(n,e)=>({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}),an=n=>Math.hypot(n.x,n.y,n.z),gr=(n,e=.5)=>Math.min(n*e,Math.max(n*.35,n/2-Se.flipTime/2));function Bv(n,e,t,i,s,r){const o={x:t.x-n.x-e.x*s,y:t.y-n.y-e.y*s,z:t.z-n.z-e.z*s},a=Bs(i,e),c=r*r/2,l=1/(r*(s-r)),u={x:(o.x-c*a.x/r)*l,y:(o.y-c*a.y/r)*l,z:(o.z-c*a.z/r)*l},f={x:a.x/r-u.x,y:a.y/r-u.y,z:a.z/r-u.z};return{a1:u,a2:f,need:Math.max(an(u),an(f))}}function _r(n,e){if(n.legs){const[s,r]=n.legs;return e<s.T?_r(s,e):_r(r,e-s.T)}const t=Qc(n,e);if(!n.gs)return t;const i=Wv(n.gs,Math.max(0,Math.min(1,e/n.T)));return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2],vx:t.vx+i[3],vy:t.vy+i[4],vz:t.vz+i[5]}}function Qc(n,e){const t=gr(n.T,n.bf),i=Math.min(e,t);let s=n.p0.x+n.v0.x*i+.5*n.a1.x*i*i,r=n.p0.y+n.v0.y*i+.5*n.a1.y*i*i,o=n.p0.z+n.v0.z*i+.5*n.a1.z*i*i,a=n.v0.x+n.a1.x*i,c=n.v0.y+n.a1.y*i,l=n.v0.z+n.a1.z*i;const u=Math.max(0,Math.min(e,n.T-t)-t);if(s+=a*u,r+=c*u,o+=l*u,e>n.T-t){const f=e-(n.T-t);s+=a*f+.5*n.a2.x*f*f,r+=c*f+.5*n.a2.y*f*f,o+=l*f+.5*n.a2.z*f*f,a+=n.a2.x*f,c+=n.a2.y*f,l+=n.a2.z*f}return{x:s,y:r,z:o,vx:a,vy:c,vz:l}}function Gv(n,e,t,i=[],s=!1){const r=s?[]:e.bodies.filter(a=>a.kind==="planet"&&!i.includes(a.id)),o=s?48:128;for(let a=1;a<o;a++){const c=a/o*n.T,l=_r(n,c);if(an(l)<(e.sunClear||_f))return!1;for(let u=1;u<(e.stars||[]).length;u++)if(In(l,so(e,u,t+c))<e.stars[u].clear)return!1;for(const u of r)if(In(l,vt(e,u,t+c))<u.size*1.3+.3)return!1}return!0}function Vp(n,e,t=n.time){if(e.owner===Ve)return 1;const i=vt(n,e,t);return n.bodies.some(s=>s.perk==="depot"&&s.owner===e.owner&&In(vt(n,s,t),i)<=io(n,"depot"))?yn.depot.boost:1}function So(n,e,t,i=n.time,s=1,r=!1,o=.5,a=df(n,e.owner)){const c=Vp(n,e,i)*(e.wonder==="massdriver"?1.5:1);s*=c*c,a*=c;const l=wl(n,e.owner)*s,u=yr(n,e,t,i,l,null,r,o,!1,null,a);if(u.out)return r?u:{...u,window:Vv(n,e,t,i,l,a)};const f=r?null:u.flyby!==void 0?n.bodies[u.flyby]:qv(n,u);return f?{...u,assist:f.id}:u}const Hp=n=>2400*fo(n);function Vv(n,e,t,i,s,r){const o=30*fo(n);for(let a=o;a<=Hp(n)/2;a+=o){if(!uo(n,t,i+a))return null;if(!yr(n,e,t,i+a,s,null,!0,.5,!0,null,r).out)return a}return null}const D0={share:1},Ii=64,Hv={min:.06};function $v(...n){return[...new Set(n.filter(e=>e&&e.id!==void 0).map(e=>e.parent===null?e.id:e.parent))]}function el(n,e,t,i){const s=i/Ii,r=[],o=n.stars||[],a=new Set(e.map(c=>n.bodies[c].star).filter(Boolean));for(let c=1;c<o.length;c++)o[c].gm&&!a.has(c)&&r.push({gm:o[c].gm,s2:(o[c].clear*.15)**2,at:l=>so(n,c,l)});for(const c of n.bodies)c.kind==="planet"&&c.gm&&!e.includes(c.id)&&r.push({b:c,gm:c.gm,s2:(c.size*.5)**2,at:l=>vt(n,c,l)});for(const c of r){c.gm*=D0.share,c.P=new Float64Array(3*(Ii+1));for(let l=0;l<=Ii;l++){const u=c.at(t+l*s);c.P[3*l]=u.x,c.P[3*l+1]=u.y,c.P[3*l+2]=u.z}}return{list:r,sun:vs*D0.share,s2:((n.sunClear||_f)*.15)**2}}function Zu(n,e,t,i,s,r){const o=t*t+i*i+s*s+n.s2,a=-n.sun/(o*Math.sqrt(o));let c=a*t,l=a*i,u=a*s;for(const f of n.list){const d=f.P[3*e],h=f.P[3*e+1],g=f.P[3*e+2],x=t-d,m=i-h,p=s-g,v=x*x+m*m+p*p+f.s2,b=-f.gm/(v*Math.sqrt(v)),_=d*d+h*h+g*g,M=-f.gm/(_*Math.sqrt(_));c+=b*x+M*d,l+=b*m+M*h,u+=b*p+M*g}r[0]=c,r[1]=l,r[2]=u}function $p(n,e){const t=n.T/Ii,i=[0,0,0],s=[[0,0,0,0,0,0]];let r=0,o=0,a=0,c=0,l=0,u=0,f=Qc(n,0);Zu(e,0,f.x,f.y,f.z,i);for(let d=0;d<Ii;d++)c+=i[0]*t*.5,l+=i[1]*t*.5,u+=i[2]*t*.5,r+=c*t,o+=l*t,a+=u*t,f=Qc(n,(d+1)*t),Zu(e,d+1,f.x+r,f.y+o,f.z+a,i),c+=i[0]*t*.5,l+=i[1]*t*.5,u+=i[2]*t*.5,s.push([r,o,a,c,l,u]);return s}function Wv(n,e){const t=Math.min(Ii-1,Math.floor(e*Ii)),i=e*Ii-t,s=n[t],r=n[t+1];return s.map((o,a)=>o+(r[a]-o)*i)}function Xv(n,e){for(let t=0;t<6;t++){let i=t;for(let s=t+1;s<6;s++)Math.abs(n[s][t])>Math.abs(n[i][t])&&(i=s);if([n[t],n[i]]=[n[i],n[t]],[e[t],e[i]]=[e[i],e[t]],Math.abs(n[t][t])<1e-14)return!1;for(let s=t+1;s<6;s++){const r=n[s][t]/n[t][t];for(let o=t;o<6;o++)n[s][o]-=r*n[t][o];e[s]-=r*e[t]}}for(let t=5;t>=0;t--){for(let i=t+1;i<6;i++)e[t]-=n[t][i]*e[i];e[t]/=n[t][t]}return!0}function U0(n,e){const t=x=>[{x:x[0],y:x[1],z:x[2]},{x:x[3],y:x[4],z:x[5]}],i=x=>{const[m,p]=t(x),v={...n,a1:m,a2:p},b=$p(v,e),_=Qc(v,n.T),M=b[Ii],S=[_.x+M[0]-n.p1.x,_.y+M[1]-n.p1.y,_.z+M[2]-n.p1.z,_.vx+M[3]-n.v1.x,_.vy+M[4]-n.v1.y,_.vz+M[5]-n.v1.z];return{a:x,gs:b,r:S,miss:Math.hypot(S[0],S[1],S[2]),slip:Math.hypot(S[3],S[4],S[5])}},s=x=>x.miss+x.slip*20;let r=i([n.a1.x,n.a1.y,n.a1.z,n.a2.x,n.a2.y,n.a2.z]);const o=()=>{const m=[0,1,2,3,4,5].map(p=>{const v=r.a.slice();return v[p]+=1e-5,i(v).r});return[0,1,2,3,4,5].map(p=>m.map(v=>(v[p]-r.r[p])/1e-5))},a=gr(n.T,n.bf),c=a*n.T-a*a/2,l=a*a/2;let u=[0,1,2,3,4,5].map(x=>[0,1,2,3,4,5].map(m=>x%3!==m%3?0:x<3?m<3?c:l:a)),f=!1;for(let x=0;x<16&&(r.miss>.02||r.slip>.001);x++){u||(u=o(),f=!0);const m=r.r.map(v=>-v);if(!Xv(u.map(v=>v.slice()),m))break;let p=null;for(let v=1;v>=1/16;v/=2){const b=i(r.a.map((_,M)=>_+m[M]*v));if(s(b)<s(r)){p=b;break}if(!f)break}if(!p){if(f)break;u=null;continue}!f&&s(p)>s(r)*.3&&(u=null),f=!1,r=p}const[d,h]=t(r.a),g=r.miss<.3&&r.slip<.005;return{...n,a1:d,a2:h,gs:r.gs,need:g?Math.max(an(d),an(h)):1/0}}function qv(n,e){if(!e.gs||e.legs)return null;const t=el(n,e.skip,e.tp,e.T),i=e.T/Ii,s=[0,0,0];let r=null;for(const o of t.list){if(!o.b)continue;const a={list:[o],sun:0,s2:1};let c=0;for(let l=0;l<=Ii;l++){const u=_r(e,l*i),f=Math.hypot(u.vx,u.vy,u.vz)||1;Zu(a,l,u.x,u.y,u.z,s),c+=(s[0]*u.vx+s[1]*u.vy+s[2]*u.vz)/f*i*(l===0||l===Ii?.5:1)}c>Hv.min*Math.sqrt(as(n))&&(!r||c>r.kick)&&(r={b:o.b,kick:c})}return r&&r.b}function Wp(n,e){if(e.legs){for(const t of e.legs)Wp(n,t);return e}return e.grav&&!e.gs&&(e.gs=$p(e,el(n,e.skip,e.tp,e.T))),e}function yr(n,e,t,i,s,r=null,o=!1,a=.5,c=!1,l=null,u=1/0){const f=a;l=l||$v(e,t);const d=r?r.p:vt(n,e,i),h=r?r.v:I0(n,e,i),g=M=>Gv(M,n,i,l,o),x=(M,S)=>{if(c||!S||t.fixed||u<1/0)return M;const w=Yv(n,e,t,i,s,d,h,o,a,l);return w&&w.T<M.T?w:M},m=(M,S=f)=>{const w=t.fixed?t.fixed.p:vt(n,t,i+M),y=Bs(d,w),T=an(y)||1,L=t.fixed?0:yf(t),C={x:w.x+y.x/T*L,y:w.y+y.y/T*L,z:w.z+y.z/T*L},R=t.fixed?t.fixed.v:I0(n,t,i+M),E=t.fixed?0:zv(t),P=Math.hypot(y.x,y.z);return E&&P>1e-9&&(R.x-=y.z/P*E,R.z+=y.x/P*E),{p0:d,v0:h,p1:C,v1:R,T:M,...S<.5?{bf:S}:{},...Bv(d,h,C,R,M,gr(M,S))}},p=(M,S=f)=>({...U0(m(M,S),el(n,l,i,M)),grav:!0,tp:i,skip:l}),v=M=>M.need<=s&&g(M);if(u<1/0){const M=E=>gr(E.T,E.bf)*(an(E.a1)+an(E.a2)),S=E=>{if(m(E,.5).need>s)return null;let P=.01,U=.5;if(m(E,P).need<=s)return P;for(let B=0;B<14;B++){const V=(P+U)/2;m(E,V).need<=s?U=V:P=V}return U},w=(E,P)=>({x:E.x*P,y:E.y*P,z:E.z*P}),y=(E,P,U)=>{const B=m(E,.5),V=Bs(w(Bs(P,d),1/U),h),ne=Bs(B.v1,w(Bs(B.p1,P),1/(E-U))),q=Math.min(.5,Math.max(.01,Math.max(an(V),an(ne))/s/E*1.15)),Y=gr(E,q);return{...m(E,q),a1:w(V,1/Y),a2:w(ne,1/Y),guess:an(V)+an(ne)}},T=n.bodies.filter(E=>E.kind==="planet"&&E.gm>=.4&&!l.includes(E.id)),L=E=>{const P=S(E);if(o||!n.gravity){if(P===null)return null;const Ce=m(E,P);return M(Ce)<=u&&g(Ce)?Ce:null}let U=null;const B=Ce=>({...U0(Ce,U||(U=el(n,l,i,E))),grav:!0,tp:i,skip:l}),V=Ce=>Ce.need<=s&&M(Ce)<=u&&g(Ce);if(P!==null&&M(m(E,P))<=u*1.5)for(const Ce of[1,1.5,2.5]){const te=B(m(E,Math.min(.5,P*Ce)));if(te.need<=s){if(V(te))return te;break}}const ne=vt(n,t,i+E),q=Math.atan2(d.z,d.x),Y=((Math.atan2(ne.z,ne.x)-q)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);if(Y>.3){const Ce=q+Y/2,te=(an(d)+an(ne))/2,ue=y(E,{x:Math.cos(Ce)*te,y:0,z:Math.sin(Ce)*te},E/2);if(ue.guess<=u*1.5){const{guess:we,...dt}=B(ue);if(V(dt))return{...dt,arc:!0}}}const oe=Bs(ne,d),De=Math.hypot(oe.x,oe.z)||1,Me={x:-oe.z/De,z:oe.x/De},st=[];for(const Ce of T)for(const te of[.35,.5,.65]){const ue=vt(n,Ce,i+E*te);for(const we of[1,-1]){const dt={x:ue.x+Me.x*we*(Ce.size*2.5+1),y:ue.y,z:ue.z+Me.z*we*(Ce.size*2.5+1)},Ge=y(E,dt,E*te);Ge.guess<=u*2&&st.push({...Ge,flyby:Ce.id})}}st.sort((Ce,te)=>Ce.guess-te.guess);const Qe=(Ce,te)=>{for(let ue=0;ue<=64;ue++)if(In(_r(Ce,ue/64*E),vt(n,te,i+ue/64*E))<te.size*8)return!0;return!1};for(const Ce of st.slice(0,2)){const{flyby:te,guess:ue,...we}=B(Ce);if(V(we))return Qe(we,n.bodies[te])?{...we,flyby:te}:we}return null},C=o?1.1:1.07;let R=null;for(let E=Math.max(4,Gp(In(d,vt(n,t,i)))*Math.sqrt(Se.accel/s)*.6);E<Hp(n);E*=C){let P=L(E);if(!P){R=E;continue}if(R!==null)for(let U=0;U<3;U++){const B=(R+P.T)/2,V=L(B);V?P=V:R=B}return{...P,fuel:Math.min(1,M(P)/u)}}return{p0:d,v0:h,T:1/0,need:1/0,out:!0}}let b=1,_=!1;for(let M=2;M<2e4;M+=Math.max(2,M*.04)){let S=m(M);if(S.need>s){b=M;continue}let w=b,y=M;for(let E=0;E<30;E++){const P=(w+y)/2;m(P).need>s?w=P:y=P}if(S=m(y),!g(S)){_=!0,b=M;continue}if(!n.gravity||o)return x(S,_);let T=null,L=null,C=null;const R=E=>{const P=p(E);return P.need<1/0&&(!C||P.need/s<C.need/s)&&(C=P),v(P)?P:null};if(T=R(y),T)for(let E=y/1.08;E>y*.4;E/=1.08){const P=R(E);if(!P){L=E;break}T=P}else{L=y;for(let E=y*1.06;E<y*8+40&&(T=R(E),!T);E*=1.06)L=E}if(T&&L!==null){let E=Math.min(L,T.T),P=Math.max(L,T.T);L>T.T&&([E,P]=[T.T,L]);for(let U=0;U<3;U++){const B=(E+P)/2,V=R(B);V&&V.T<T.T&&(T=V),L<T.T?V?P=B:E=B:V?E=B:P=B}}return x(T||C||S,_)}return x(m(2e4),_)}function Yv(n,e,t,i,s,r,o,a,c,l){const u=n.sunClear||_f,f=Gp(In(r,vt(n,t,i)))*Math.sqrt(Se.accel/s),d=vt(n,t,i+f),h=Bs(d,r),g=h.x*h.x+h.y*h.y+h.z*h.z||1,x=Math.max(0,Math.min(1,-(r.x*h.x+r.y*h.y+r.z*h.z)/g));let m={x:r.x+h.x*x,y:0,z:r.z+h.z*x};an(m)<1&&(m={x:-h.z,y:0,z:h.x});const p=an(m)||1;m={x:m.x/p,y:0,z:m.z/p};let v=null;for(const b of[1,-1])for(const _ of a?[1.35]:[1.35,1.9]){const M={x:m.x*b*u*_,y:0,z:m.z*b*u*_};let S={x:-M.z,y:0,z:M.x};S.x*h.x+S.z*h.z<0&&(S={x:-S.x,y:0,z:-S.z});const w=an(S)||1,y=In(r,M),T=In(M,d),L=.8*Math.sqrt(2*s*Math.min(y,T)),C={x:S.x/w*L,y:0,z:S.z/w*L},R=yr(n,e,{fixed:{p:M,v:C}},i,s,{p:r,v:o},a,c,!0,l);if(R.need>s||v&&R.T>=v.T)continue;const E=_r(R,R.T),P=yr(n,e,t,i+R.T,s,{p:{x:E.x,y:E.y,z:E.z},v:{x:E.vx,y:E.vy,z:E.vz}},a,c,!0,l);if(P.need>s)continue;const U=R.T+P.T;(!v||U<v.T)&&(v={legs:[R,P],T:U,p0:r,v0:o,p1:P.p1,v1:P.v1,a1:R.a1,a2:P.a2,need:Math.max(R.need,P.need),detour:!0,...c<.5?{bf:c}:{}})}return v}function Mf(n,e,t={}){for(const i of["assist","bf","gs","legs","detour","grav","tp","skip"])delete n[i];return Object.assign(n,e,t)}const bf=(n,e)=>e.restUntil>n.time?Math.min(e.resting||0,e.ships):0,Ys=(n,e)=>e.ships-bf(n,e);function Xp(n,e,t){e.resting=bf(n,e)+t,e.restUntil=n.time+Se.cooldown}function Al(n,e,t,i,s=!1){if(i=Math.min(Math.floor(i),Ys(n,e)),i<1||e===t||n.winner!==null)return null;const r=So(n,e,t,n.time,1,!1,s?Sl.burn:.5);if(r.out||r.T>mf(n,t)-5||!uo(n,t))return null;if(e.ships-=i,e.sieges.length){const a=Math.floor(i/2);i-=a,Kt(n,e.owner,"lost",a);for(const c of e.sieges)Kt(n,c.owner,"killed",a/e.sieges.length);if(En(n,{type:"breakout",owner:e.owner,at:e.id,lost:a,n:i}),i<1)return null}const o={id:n.nextId++,owner:e.owner,n:i,from:e.id,to:t.id,...r,t0:n.time,vet:e.vet||0};return s&&(o.dark=!0),e.tf&&i*2>=i+e.ships?(o.name=e.tf,e.tf=null):o.name=Pp(n),e.ships||(e.tf=null),n.fleets.push(o),En(n,{type:"launch",owner:o.owner,fleet:o.id,name:o.name,n:i,from:e.id,to:t.id,T:o.T,...s?{dark:!0}:{}}),o}function qp(n,e){if(!n.fuel)for(const t of n.fleets){if(t.owner!==e)continue;const i=t.T-(n.time-t.t0);if(i<10)continue;const s=Nn(t,n.time),r=wl(n,e)*(t.probe?Se.probe.speed:1),o=yr(n,n.bodies[t.from],n.bodies[t.to],n.time,r,{p:{x:s.x,y:s.y,z:s.z},v:{x:s.vx,y:s.vy,z:s.vz}},!1,t.bf||.5);o.T>=i||Mf(t,o,{t0:n.time})}}function jv(n,e,t){if(!e||e.probe||n.fuel||!!e.dark===t||n.winner!==null||e.T-(n.time-e.t0)<10)return!1;const s=Nn(e,n.time),r=yr(n,n.bodies[e.from],n.bodies[e.to],n.time,wl(n,e.owner),{p:{x:s.x,y:s.y,z:s.z},v:{x:s.vx,y:s.vy,z:s.vz}},!1,t?Sl.burn:.5);return Mf(e,r,{t0:n.time}),t?e.dark=!0:delete e.dark,!0}function Sf(n,e,t){return e.owner===Ve?"not yours":!t||t===e?"pick a target":qc(e,"shipyard")?n.credits[e.owner]<Se.probe.cost?"not enough credits":null:"needs a shipyard"}function Ju(n,e,t){if(Sf(n,e,t)||n.winner!==null||!uo(n,t))return null;const i=So(n,e,t,n.time,Se.probe.speed,!1,.5,df(n,e.owner)*Se.fuel.probe);if(i.out)return null;n.credits[e.owner]-=Se.probe.cost,Kt(n,e.owner,"spent",Se.probe.cost);const s={id:n.nextId++,owner:e.owner,n:0,probe:!0,from:e.id,to:t.id,...i,t0:n.time,vet:0,name:"Probe"};return n.fleets.push(s),s}function Nn(n,e){const t=Math.min(n.T,Math.max(0,e-n.t0));if(n.legs){const[u,f]=n.legs,d=t<u.T?u:f;return{...Nn({...d,t0:0},d===u?t:t-u.T),progress:t/n.T,leg:d===u?1:2}}const i=_r(n,t),s=n.T/2,r=s-Se.flipTime/2,o=Math.abs(t-s)<Se.flipTime/2,a=an(n.a1)>1e-9?{x:n.a1.x/an(n.a1),y:n.a1.y/an(n.a1),z:n.a1.z/an(n.a1)}:{x:0,y:0,z:1},c=an(n.a2)>1e-9?{x:n.a2.x/an(n.a2),y:n.a2.y/an(n.a2),z:n.a2.z/an(n.a2)}:a;let l=t<s?a:c;if(o){const u=(1-Math.cos((t-r)/Se.flipTime*Math.PI))/2,f=Math.max(-1,Math.min(1,a.x*c.x+a.y*c.y+a.z*c.z)),d=Math.acos(f)*u;let h={x:a.y*c.z-a.z*c.y,y:a.z*c.x-a.x*c.z,z:a.x*c.y-a.y*c.x};an(h)<1e-4&&(h=Math.abs(a.y)<.9?{x:-a.z,y:0,z:a.x}:{x:1,y:0,z:0});const g=an(h)||1;h={x:h.x/g,y:h.y/g,z:h.z/g};const x=Math.cos(d),m=Math.sin(d),p={x:h.y*a.z-h.z*a.y,y:h.z*a.x-h.x*a.z,z:h.x*a.y-h.y*a.x},v=h.x*a.x+h.y*a.y+h.z*a.z;l={x:a.x*x+p.x*m+h.x*v*(1-x),y:a.y*x+p.y*m+h.y*v*(1-x),z:a.z*x+p.z*m+h.z*v*(1-x)}}return{x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz,nx:l.x,ny:l.y,nz:l.z,progress:t/n.T,burning:!o&&t<n.T&&(t<gr(n.T,n.bf)||t>n.T-gr(n.T,n.bf)),flipping:o,phase:t<s?1:2}}function tl(n,e){if(e.owner===Ve||e.visitor)return[];const t=e.parent===null?e:n.bodies[e.parent],i=[t,...n.bodies.filter(r=>r.parent===t.id)],s=[];for(const r of i){if(r===e||r.owner!==e.owner||r.guns<=0)continue;const o=r.wonder==="citadel"?1:r===t?Se.coverShare:Se.moonCover;s.push({from:r,n:r.guns*o})}return s}const wo=(n,e)=>tl(n,e).reduce((t,i)=>t+i.n,0);function Zv(n,e,t){let i=!1;const s=e.sieges.reduce((a,c)=>a+c.n,0),r=(e.ships*(1+lo*Ln(e.vet))+e.guns+wo(n,e))*ff(n,e.owner);let o=0;for(const a of e.sieges){const c=s>0?a.n/s:0;a.dmg=(a.dmg||0)+Se.fire*r*c*Wc(n,a.owner)*t,o+=a.n*(1+lo*Ln(a.vet))*wp(n,a.owner)}for(e.dmg=(e.dmg||0)+Se.fire*o*Wc(n,e.owner)*t,e.fighting=!0;e.dmg>=1&&e.ships+e.guns>0;){e.dmg-=1,e.ships>0&&(e.guns<1||e.ships>=e.guns)?(e.ships-=1,Kt(n,e.owner,"lost"),Kt(n,e.sieges.slice().sort((c,l)=>l.n-c.n)[0].owner,"killed")):e.guns=Math.max(0,e.guns-1);const a=e.sieges.slice().sort((c,l)=>l.n-c.n)[0];a.kills=(a.kills||0)+1,e.lostDef=(e.lostDef||0)+1,e.totDef=(e.totDef||0)+1}for(const a of e.sieges)for(;a.dmg>=1&&a.n>0;)a.dmg-=1,a.n-=1,e.lostAtk=(e.lostAtk||0)+1,e.totAtk=(e.totAtk||0)+1,Kt(n,a.owner,"lost"),Kt(n,e.owner,"killed"),e.kills=(e.kills||0)+1;for(const a of e.sieges)a.n<=0&&En(n,{type:"wiped",owner:a.owner,name:a.name,at:e.id,vs:e.owner});if(e.ships||(e.tf=null),e.sieges=e.sieges.filter(a=>a.n>0),e.ships+e.guns<=0&&e.sieges.length){const a=e.sieges.sort((c,l)=>l.n-c.n)[0];Kt(n,e.owner,"worldsLost"),Kt(n,a.owner,"captured"),En(n,{type:"captured",owner:a.owner,from:e.owner,at:e.id,name:a.name}),e.owner=a.owner,e.ships=a.n,e.resting=0,Xp(n,e,a.n),e.vet=Math.min(4.5,(a.vet||0)+E0(a.foe0||1,a.n0||a.n,a.kills||0)),e.cadre=Ln(e.vet),e.tf=a.name,Ln(e.vet)>Ln(a.vet)&&En(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),e.guns=0,e.dmg=0,e.build=0,e.slips=[],e.queue=0,e.structures=e.structures.filter(c=>c.left<=0||c.next);for(const c of e.structures)c.next&&(delete c.next,c.left=0),delete c.scrap;e.sieges=e.sieges.filter(c=>c!==a),e.captured=!0,i=!0}if(!e.sieges.length){if(e.fighting&&!i&&e.ships>0){const a=e.vet;e.vet=Math.min(4.5,(e.vet||0)+E0(e.foe0||1,e.own0||1,e.kills||0)),Ln(e.vet)>Ln(a)&&En(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),En(n,{type:"held",owner:e.owner,at:e.id})}e.dmg=0,e.fighting=!1,e.foe0=e.own0=e.kills=0}}function wf(n,e){if(n.winner!==null)return;n.stats&&(!n.stats.series.length||n.time-n.stats.series.at(-1).t>=10)&&b0(n),n.time+=e;for(const i of n.bodies){if(i.owner===Ve){!i.sieges.length&&i.guns<(i.guns0||0)&&(i.guns=Math.min(i.guns0,i.guns+Se.gunRegen*e));continue}n.credits[i.owner]+=ho(i,n)*e,Kt(n,i.owner,"earned",ho(i,n)*e);const s=to(n,i.owner,i),r=Ov(n,i);if(i.guns>r&&(i.guns=r),i.sieges.length)continue;for(const l of i.structures){if(l.scrap){l.scrap=Math.max(0,l.scrap-e),l.scrap||(l.gone=!0);continue}l.left<=0||(l.left=Math.max(0,l.left-e*s),l.left===0&&l.next&&(l.level=l.next,delete l.next))}for(const l of i.structures.filter(u=>u.gone))n.credits[i.owner]+=Ec(l),Kt(n,i.owner,"earned",Ec(l)),En(n,{type:"scrapped",owner:i.owner,at:i.id,what:l.type,fee:Ec(l)});i.structures=i.structures.filter(l=>!l.gone);const o=Tl(i);for(i.slips||(i.slips=[]);i.slips.length<Math.min(o,i.queue);)i.slips.push(0);i.slips.length=Math.min(i.slips.length,o,i.queue);const a=($i(n,i.owner,"torch")?1.25:1)*(i.wonder==="ringyard"?3:1)*(i.perk==="hulk"?1.5:1);i.slips=i.slips.map(l=>l+e*s*a/Se.ship.time);for(const l of i.slips)l>=1&&(i.vet=wc(i.vet||0,i.ships,Math.max(i.perk==="hulk"?yn.hulk.vet:0,Hc(n,i.owner,"college")?2.5:0),1),i.queue-=1,i.ships+=1,Kt(n,i.owner,"built"));i.slips=i.slips.filter(l=>l<1),i.build=i.slips.length?Math.max(...i.slips):0;const c=Se.gunRegen*($i(n,i.owner,"hardened")?2:1);i.guns<r&&(i.guns=Math.min(r,i.guns+c*e))}for(let i=0;i<n.players;i++){const s=xa(n,i)*e;if(s>0){const r=Math.min(n.credits[i],s);n.credits[i]-=r,Kt(n,i,"spent",r)}}for(const i of n.bodies)i.owner!==Ve&&(i.ships?(i.cadre=Math.max(i.cadre||0,Ln(i.vet)),!i.sieges.length&&Ln(i.vet)<i.cadre&&(i.vet=Math.min(Rp[i.cadre-1],(i.vet||0)+Se.drill*e))):i.cadre=0);for(const[i,s]of(n.tech||[]).entries())if(s.project&&(s.project.left-=e*Ca(n,i),s.project.left<=0)){const r=Xn[s.project.key]?1:ui[s.project.key].cost.length;s[s.project.key]=Math.min(r,(s[s.project.key]||0)+1),s.project.key==="drives"&&qp(n,i),En(n,{type:"research",owner:i,key:s.project.key,level:s[s.project.key]}),s.project=null,Kt(n,i,"research")}n.scans&&(n.scans=n.scans.filter(i=>i.until>n.time)),Ev(n,e),n.fleets=n.fleets.filter(i=>{if(n.time-i.t0<i.T)return!0;const s=n.bodies[i.to];if(i.probe)return(n.scans||(n.scans=[])).push({owner:i.owner,body:s.id,until:n.time+Se.probe.scan}),En(n,{type:"probed",owner:i.owner,at:s.id}),!1;if(s.owner===i.owner)s.cadre=Math.max(s.cadre||0,Ln(s.vet),Ln(i.vet)),s.vet=wc(s.vet||0,s.ships,i.vet||0,i.n),(!s.tf||i.n>=s.ships)&&(s.tf=i.name),s.ships+=i.n,Xp(n,s,i.n),En(n,{type:"arrived",owner:i.owner,name:i.name,n:i.n,at:s.id});else{let r=0;if($i(n,s.owner,"pdnet")){const c=Math.floor(i.n*.15);r=i.n*.15-c,i.n-=c,Kt(n,i.owner,"lost",c),Kt(n,s.owner,"killed",c)}if(i.n<=0)return En(n,{type:"wiped",owner:i.owner,name:i.name,at:s.id,vs:s.owner}),!1;if($i(n,i.owner,"kinetic")){let c=Math.floor(i.n*.1);for(s.dmg=(s.dmg||0)+(i.n*.1-c);c-- >0&&s.ships+s.guns>0;)s.ships>0?(s.ships-=1,Kt(n,s.owner,"lost"),Kt(n,i.owner,"killed")):s.guns=Math.max(0,s.guns-1)}const o=s.ships*(1+lo*Ln(s.vet))+s.guns+wo(n,s);s.own0=Math.max(s.own0||0,o),s.foe0=(s.foe0||0)+i.n;const a=s.sieges.find(c=>c.owner===i.owner);a?(a.vet=wc(a.vet||0,a.n,i.vet||0,i.n),a.n+=i.n,a.n0+=i.n,a.dmg=(a.dmg||0)+r):s.sieges.push({owner:i.owner,n:i.n,vet:i.vet||0,name:i.name,n0:i.n,foe0:o,dmg:r}),En(n,{type:"engaged",owner:i.owner,name:i.name,n:i.n,at:s.id,vs:s.owner})}return!1});for(const i of n.bodies)i.sieges.length&&Zv(n,i,e);bv(n,e),n.evSeed!==void 0&&kv(n,e);const t=new Set;for(const i of n.bodies){i.owner!==Ve&&t.add(i.owner);for(const s of i.sieges)t.add(s.owner)}for(const i of n.fleets)i.probe||t.add(i.owner);n.mp?t.size<=1&&(n.winner=[...t][0]??Ve):t.has(M0)?t.size===1&&(n.winner=M0):n.winner=[...t][0]??Ve,n.winner!==null&&n.stats&&b0(n)}const Jv={cadet:{think:14,acts:1,margin:.85,extra:0,seenExtra:0,skill:.1,eco:.5,calm:480},easy:{think:8,acts:1,margin:1,extra:1,seenExtra:0,skill:.35,eco:.7,calm:240},normal:{think:4,acts:2,margin:1.2,extra:1,seenExtra:1,skill:.7},hard:{think:2,acts:3,margin:1.3,extra:1,seenExtra:1,skill:.95,eco:1.4,smart:!0},brutal:{think:.8,acts:5,margin:1.4,extra:2,seenExtra:1,skill:1,eco:2.1,smart:!0}};function Ku(n,e,t){return{owner:n,d:Jv[e],rand:t,clock:2+t()*3,plan:null}}const Ac=(n,e,t,i)=>e.sieges.length?null:Al(n,e,t,i);function k0(n,e,t,i=0,s=!0,r=null){const o=r||{ships:t.ships,vet:t.vet,guns:t.guns,cover:wo(n,t)},a=wp(n,e)*(1+lo*Ln(i)),c=Wc(n,e),l=t.owner,u=l===Ve?1:ff(n,l),f=l===Ve?1:Wc(n,l),d=1+lo*Ln(o.vet),h=m=>{let p=m,v=0,b=o.ships,_=o.guns,M=0;for(let S=0;S<1200;S++){for(v+=Se.fire*(b*d+_+o.cover)*u*c*.5,M+=Se.fire*p*a*f*.5;M>=1&&b+_>0;)M-=1,b>0&&(_<1||b>=_)?b-=1:_=Math.max(0,_-1);for(;v>=1&&p>0;)v-=1,p-=1;if(p<=0)return!1;if(b+_<=0)return!0}return!1};let g=1,x=1;for(;!h(x);)if(x*=2,x>256)return 1/0;for(;g<x;){const m=g+x>>1;h(m)?x=m:g=m+1}return x}function Yp(n,e,t){if(e.d.eco&&n.winner===null&&(n.credits[e.owner]=Math.max(0,n.credits[e.owner]+va(n,e.owner)*(e.d.eco-1)*t)),e.clock-=t,e.clock>0||n.winner!==null)return;e.clock=e.d.think*(.8+e.rand()*.4);const i=xr(n,e.owner),s=h=>{if(!i.seesFleet(h))return!1;const g=n.bodies[h.to];return g.owner===e.owner&&In(Nn(h,n.time),vt(n,g,n.time))<60*as(n)},r=h=>h.owner===e.owner||i.intel>=2&&i.seesFleet(h)||s(h),o=h=>h.owner===e.owner||i.intel>=1?h.n:5,a=(h,g)=>n.fleets.filter(x=>!x.probe&&x.to===h.id&&x.owner===e.owner===g&&r(x)).reduce((x,m)=>x+o(m),0),c=()=>e.rand()<e.d.skill,l=h=>h.ships*(1+lo*Ln(h.vet)),u=new Map,d={vis:i,coming:a,route:(h,g)=>{const x=h.id*1e3+g.id;return u.has(x)||u.set(x,So(n,h,g,n.time,1,!0).T),u.get(x)}};Qv(n,e,n.bodies.filter(h=>h.owner===e.owner),i,r,o,l,c);for(let h=0;h<e.d.acts&&Kv(n,e,d);h++);for(let h=0;h<e.d.acts;h++){const g=e1(n,e,n.bodies.filter(x=>x.owner===e.owner),a,c);if(!g||g==="save")break}}function N0(n,e,t,i){return t.bodies.has(i.id)?{ships:i.ships,vet:i.vet,guns:i.guns,cover:wo(n,i)}:i.owner===Ve?{ships:0,vet:0,guns:i.perk==="fortress"?6:i.giant?5:(i.kind==="planet",2),cover:0}:{ships:6,vet:1,guns:3,cover:1}}function Kv(n,e,{vis:t,coming:i,route:s}){const r=n.bodies.filter(v=>v.owner===e.owner),o=e.d.smart,a=e.d.calm&&n.time<e.d.calm,c=v=>v.home&&n.time>900?2:1,l=v=>Ys(n,v)-Math.ceil(i(v,!1)*1.2)-c(v),u=v=>(n.scans||[]).some(b=>b.owner===e.owner&&b.body===v.id),f=v=>n.fleets.some(b=>b.probe&&b.owner===e.owner&&b.to===v.id),d=v=>n.fleets.filter(b=>!b.probe&&b.owner===e.owner&&b.to===v.id).reduce((b,_)=>b+_.n,0),h=(v,b)=>Math.ceil(v*e.d.margin)+(t.bodies.has(b.id)?e.d.seenExtra:e.d.extra);if(o&&!n.fleets.some(v=>v.probe&&v.owner===e.owner)&&n.credits[e.owner]>Se.probe.cost+200){const v=r.filter(M=>qc(M,"shipyard")),b=M=>Math.min(...v.map(S=>In(vt(n,S,n.time),vt(n,M,n.time)))),_=n.bodies.filter(M=>M.owner!==e.owner&&M.owner!==Ve&&!M.visitor&&!t.bodies.has(M.id)&&!u(M)).sort((M,S)=>b(M)-b(S))[0];if(_&&v.length&&b(_)<160*as(n)&&e.rand()<.5){const M=S=>In(vt(n,S,n.time),vt(n,_,n.time));if(Ju(n,v.sort((S,w)=>M(S)-M(w))[0],_))return!0}}let g=null;for(const v of r){const b=l(v);if(!(b<1))for(const _ of n.bodies){if(_.owner===e.owner||!uo(n,_)||a&&_.owner!==Ve||d(_)>0)continue;const M=s(v,_);if(!(M<mf(n,_)-10))continue;const S=N0(n,e,t,_);_.owner!==Ve&&qc(_,"shipyard")&&(S.ships+=Math.min(_.queue||1,M/Se.ship.time)),_.owner!==Ve&&(S.guns=Math.max(S.guns,Math.min(Yc(_)+vf(n,_),S.guns+Se.gunRegen*M))),S.ships+=i(_,!1);const w=h(k0(n,e.owner,_,v.vet,!0,S),_);if(w<1||w>b)continue;let y=_.kind==="planet"?_.giant?4:3:_.kind==="station"?2:1.5;o&&_.owner!==Ve&&n.time>900&&(y*=_.home?1.6:1.25),_.perk&&(y*=1.5),(n.happenings||[]).some(L=>L.at===_.id)&&(y*=2);const T=y/(w+M/(25*fo(n)));(!g||T>g.score)&&(g={s:v,t:_,need:w,score:T})}}if(g&&o&&g.t.owner!==Ve&&!t.bodies.has(g.t.id)&&!u(g.t))if(f(g.t))g=null;else{const v=r.find(b=>!Sf(n,b,g.t));if(v&&Ju(n,v,g.t))return!0}if(g&&Ac(n,g.s,g.t,g.need))return!0;if(e.plan){const v=n.bodies[e.plan.target],b=n.bodies[e.plan.stage];if(v.owner===e.owner||b.owner!==e.owner||n.time>e.plan.until)e.plan=null;else{if(Ys(n,b)-c(b)>=e.plan.need)return Ac(n,b,v,Ys(n,b)-c(b))?(e.plan=null,!0):!1;{const _=r.filter(M=>M!==b&&l(M)>=1&&!n.fleets.some(S=>S.from===M.id&&S.to===b.id)).filter(M=>s(M,b)<1/0).sort((M,S)=>s(M,b)-s(S,b))[0];return!!(_&&Ac(n,_,b,l(_)))}}}const x=r.reduce((v,b)=>v+Math.max(0,l(b)),0);let m=null,p=1/0;for(const v of n.bodies){if(v.owner===e.owner||v.visitor||a&&v.owner!==Ve)continue;const b=h(k0(n,e.owner,v,0,!0,N0(n,e,t,v)),v)+1;b<=x&&b<p&&(m=v,p=b)}if(m&&r.length>1){const v=r.slice().sort((b,_)=>s(b,m)-s(_,m))[0];e.plan={target:m.id,stage:v.id,need:p,until:n.time+600*fo(n)}}return!1}function Qv(n,e,t,i,s,r,o,a){for(const c of t){const l=n.fleets.filter(m=>m.to===c.id&&m.owner!==e.owner&&s(m));if(!l.length)continue;const u=Math.min(...l.map(m=>m.t0+m.T-n.time)),f=l.reduce((m,p)=>m+r(p),0)*1.2,d=o(c)+c.guns+wo(n,c);if(d>=f)continue;const h=Math.ceil(f-d)+1,g=t.filter(m=>m!==c&&Ys(n,m)>=3&&!n.fleets.some(p=>p.to===m.id&&p.owner!==e.owner&&s(p))).map(m=>({s:m,T:So(n,m,c,n.time,1,!0).T})).filter(m=>m.T<u-5).sort((m,p)=>m.T-p.T),x=g.find(m=>Ys(n,m.s)-1>=h)||(e.d.smart?null:g[0]);if(x&&a())return Ac(n,x.s,c,Math.min(Ys(n,x.s)-1,h)),!0;if(!x&&c.queue>0&&d*2<f&&a()){for(;c.queue>0;)zp(n,c);return!0}}return!1}function e1(n,e,t,i,s){const r=e.d.smart,o=y=>i(y,!1)>0||y.sieges.length,a=(y,T)=>!Jc(n,y,T),c=t.find(y=>o(y)&&a(y,"defence")&&y.structures.filter(T=>T.type==="defence").length<2);if(c)return Gi(n,c,"defence");const l=t.find(y=>(y.kind==="asteroid"||y.kind==="moon")&&!y.structures.some(T=>T.type==="mine")&&(a(y,"mine")||Jc(n,y,"mine")==="not enough credits"));if(l){if(a(l,"mine"))return Gi(n,l,"mine");if(!o(l)&&s())return"save"}if(n.crew&&Zc(n,e.owner)>=jc(n,e.owner)-2){const y=t.flatMap(L=>L.structures.filter(C=>C.type==="habitat"&&!ra(n,L,C)).map(C=>[L,C]))[0];if(y)return Zo(n,y[0],y[1]);const T=t.filter(L=>a(L,"habitat")&&!o(L)).sort((L,C)=>(C.kind==="planet")-(L.kind==="planet"))[0];if(T)return Gi(n,T,"habitat")}const u=t.filter(y=>!Kc(n,y)&&y.queue<1)[0];if(u&&xa(n,e.owner)<va(n,e.owner)*.4)return ju(n,u);const f=t.find(y=>y.perk&&yn[y.perk].fits&&yn[y.perk].fits!=="mine"&&!y.structures.some(T=>T.type===yn[y.perk].fits)&&a(y,yn[y.perk].fits));if(f&&(r||s()))return Gi(n,f,yn[f.perk].fits);for(const y of["exchange","skimmer"]){const T=t.find(L=>a(L,y)&&!o(L)&&!L.structures.some(C=>C.type===y));if(T&&(r||s()))return Gi(n,T,y)}const d=n.credits[e.owner],h=t.flatMap(y=>y.structures.filter(T=>T.type==="mine"&&ra(n,y,T)==="not enough credits").map(T=>[y,T]))[0];if(h&&!o(h[0])&&t.reduce((y,T)=>y+T.ships,0)>=6&&s()&&d<qs(h[1]))return"save";for(const y of t)for(const T of y.structures)if(!ra(n,y,T)&&((T.type==="mine"||T.type==="skimmer"||T.type==="exchange")&&d>=qs(T)&&s()||T.type==="lab"&&n.tech[e.owner].project&&d>qs(T)+300&&s()||T.type==="defence"&&o(y)&&s()))return Zo(n,y,T);if(r&&!t.find(T=>T.project)&&d>2500&&t.length>=4)for(const T of["sundiver","ringyard","citadel","massdriver","array","college"]){const L=P=>P.structures.filter(U=>U.type==="shipyard").length,C=P=>T==="ringyard"?L(P)*10+(a(P,"shipyard")?1:0):T==="massdriver"?L(P)*4+P.ships+(P.home?3:0):P.home?5:P.kind==="planet"?1:0,E=t.filter(P=>!o(P)&&!bo(n,P,T)).sort((P,U)=>C(U)-C(P))[0];if(!(T==="ringyard"&&E&&!L(E)&&!a(E,"shipyard"))&&E)return Sp(n,E,T)}if(r&&d>1100&&!(n.spies||[]).some(y=>y.owner===e.owner)){const y=n.bodies.filter(T=>!hf(n,e.owner,T)).sort((T,L)=>(L.project?2:L.home?1:0)-(T.project?2:T.home?1:0))[0];if(y&&s())return!!Ap(n,e.owner,y)}const g=t.find(y=>y.home);if(e.d.skill>=.7&&g&&t.length>=(r?6:5)&&d>1e3&&a(g,"bureau")&&!g.structures.some(y=>y.type==="bureau"))return Gi(n,g,"bureau");const x=t.find(y=>(y.wonder==="ringyard"||y.project?.key==="ringyard")&&!y.structures.some(T=>T.type==="shipyard")&&a(y,"shipyard"));if(x)return Gi(n,x,"shipyard");if(t.filter(y=>y.structures.some(T=>T.type==="shipyard")).length<1+Math.floor(t.length/3)&&s()){const y=t.filter(T=>T.kind==="planet"&&a(T,"shipyard")).sort((T,L)=>L.size-T.size)[0];if(y)return Gi(n,y,"shipyard")}const p=r?["industry","sensors","intel","drives","weapons","armour","industry","drives","weapons","armour","sensors","intel","drives","sensors","intel"]:["sensors","drives","intel","industry","weapons","armour","drives","sensors","weapons","armour","industry","intel","drives","sensors","intel"],v=["torch","hardened","targeting","kinetic","pdnet","ansible"],b=[...p,...v].find(y=>Js(n,e.owner,y)&&ga(n,e.owner,y)!=="locked");if(b&&!ga(n,e.owner,b)&&d>Js(n,e.owner,b).cost+Se.ship.cost*2&&t.length>=3)return Ep(n,e.owner,b);const _=t.reduce((y,T)=>y+T.structures.filter(L=>L.type==="lab").length,0);if(_<2&&d>700+_*500&&t.length>2+_*2&&s()){const y=t.find(C=>C.perk==="archive"&&a(C,"lab"))||t.find(C=>a(C,"lab")&&C.kind!=="asteroid");if(y)return Gi(n,y,"lab");const T=t.find(C=>C.kind!=="asteroid"&&!o(C)&&C.structures.filter(R=>R.type==="defence").length>1),L=T&&T.structures.find(C=>C.type==="defence"&&C.level===1&&!xf(n,T,C));if(L&&d>900)return Op(n,T,L)}const M=xa(n,e.owner)>va(n,e.owner)*.4,S=t.filter(y=>!Kc(n,y)&&y.queue<3).sort((y,T)=>y.queue-T.queue)[0];if(S&&!M&&(r||e.rand()<.8))return ju(n,S);const w=t.find(y=>y.home)||t[0];return w&&n.credits[e.owner]>600&&a(w,"defence")&&w.structures.filter(y=>y.type==="defence").length<2?Gi(n,w,"defence"):!1}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tf="186",t1=0,F0=1,n1=2,Cc=1,i1=2,Jo=3,Mr=0,di=1,ai=2,ys=0,oa=1,Zn=2,O0=3,z0=4,s1=5,eo=100,r1=101,o1=102,a1=103,c1=104,l1=200,u1=201,d1=202,f1=203,jp=204,Zp=205,h1=206,p1=207,m1=208,g1=209,v1=210,x1=211,_1=212,y1=213,M1=214,Qu=0,ed=1,td=2,_a=3,nd=4,id=5,sd=6,rd=7,Jp=0,b1=1,S1=2,os=0,Kp=1,Qp=2,em=3,tm=4,nm=5,im=6,sm=7,rm=300,br=301,po=302,Zl=303,Jl=304,Cl=306,ya=1e3,is=1001,od=1002,zn=1003,w1=1004,Va=1005,Mn=1006,Kl=1007,$s=1008,ci=1009,om=1010,am=1011,Ma=1012,Ef=1013,Ki=1014,Wi=1015,ki=1016,Af=1017,Cf=1018,ba=1020,cm=35902,lm=35899,um=1021,dm=1022,Pi=1023,ws=1026,mr=1027,Rf=1028,Pf=1029,Sr=1030,Lf=1031,If=1033,Rc=33776,Pc=33777,Lc=33778,Ic=33779,ad=35840,cd=35841,ld=35842,ud=35843,dd=36196,fd=37492,hd=37496,pd=37488,md=37489,nl=37490,gd=37491,vd=37808,xd=37809,_d=37810,yd=37811,Md=37812,bd=37813,Sd=37814,wd=37815,Td=37816,Ed=37817,Ad=37818,Cd=37819,Rd=37820,Pd=37821,Ld=36492,Id=36494,Dd=36495,Ud=36283,kd=36284,il=36285,Nd=36286,T1=3200,Fd=0,E1=1,Vs="",ei="srgb",sl="srgb-linear",rl="linear",en="srgb",Ql=7680,A1=519,C1=512,R1=513,P1=514,Df=515,L1=516,I1=517,Uf=518,D1=519,fm=35044,zs=35048,B0="300 es",ss=2e3,Sa=2001;function U1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ol(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function k1(){const n=ol("canvas");return n.style.display="block",n}const G0={};function al(...n){const e="THREE."+n.shift();console.log(e,...n)}function hm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function gt(...n){n=hm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ht(...n){n=hm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function oo(...n){const e=n.join(" ");e in G0||(G0[e]=!0,gt(...n))}function N1(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const F1={[Qu]:ed,[td]:sd,[nd]:rd,[_a]:id,[ed]:Qu,[sd]:td,[rd]:nd,[id]:_a};class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let V0=1234567;const aa=Math.PI/180,wa=180/Math.PI;function Ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[t&63|128]+Kn[t>>8&255]+"-"+Kn[t>>16&255]+Kn[t>>24&255]+Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function kf(n,e){return(n%e+e)%e}function O1(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function z1(n,e,t){return n!==e?(t-n)/(e-n):0}function ca(n,e,t){return(1-t)*n+t*e}function B1(n,e,t,i){return ca(n,e,1-Math.exp(-t*i))}function G1(n,e=1){return e-Math.abs(kf(n,e*2)-e)}function V1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function H1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function W1(n,e){return n+Math.random()*(e-n)}function X1(n){return n*(.5-Math.random())}function q1(n){n!==void 0&&(V0=n);let e=V0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y1(n){return n*aa}function j1(n){return n*wa}function Z1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function J1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function K1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Q1(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*f,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rt={DEG2RAD:aa,RAD2DEG:wa,generateUUID:Ms,clamp:It,euclideanModulo:kf,mapLinear:O1,inverseLerp:z1,lerp:ca,damp:B1,pingpong:G1,smoothstep:V1,smootherstep:H1,randInt:$1,randFloat:W1,randFloatSpread:X1,seededRandom:q1,degToRad:Y1,radToDeg:j1,isPowerOfTwo:Z1,ceilPowerOfTwo:J1,floorPowerOfTwo:K1,setQuaternionFromProperEuler:Q1,normalize:tn,denormalize:Hi},h0=class h0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};h0.prototype.isVector2=!0;let Be=h0;class Bn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||c!==d||l!==h||u!==g){let m=c*d+l*h+u*g+f*x;m<0&&(d=-d,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);p=Math.sin(p*v)/b,a=Math.sin(a*v)/b,c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+x*a;const v=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=v,l*=v,u*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-a*h,e[t+2]=l*g+u*h+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),d=c(i/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const p0=class p0{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(H0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};p0.prototype.isVector3=!0;let D=p0;const eu=new D,H0=new Bn,m0=class m0{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=s[0],m=s[3],p=s[6],v=s[1],b=s[4],_=s[7],M=s[2],S=s[5],w=s[8];return r[0]=o*x+a*v+c*M,r[3]=o*m+a*b+c*S,r[6]=o*p+a*_+c*w,r[1]=l*x+u*v+f*M,r[4]=l*m+u*b+f*S,r[7]=l*p+u*_+f*w,r[2]=d*x+h*v+g*M,r[5]=d*m+h*b+g*S,r[8]=d*p+h*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*r,h=l*r-o*c,g=t*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(s*l-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tu.makeScale(e,t)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tu.makeRotation(-e)),this}translate(e,t){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};m0.prototype.isMatrix3=!0;let bt=m0;const tu=new bt,$0=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ex(){const n={enabled:!0,workingColorSpace:sl,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===en&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===en&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vs?rl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sl]:{primaries:e,whitePoint:i,transfer:rl,toXYZ:$0,fromXYZ:W0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:i,transfer:en,toXYZ:$0,fromXYZ:W0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Bt=ex();function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ur;class tx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=ol("canvas")),Ur.width=e.width,Ur.height=e.height;const s=Ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ol("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bs(t[i]/255)*255):t[i]=bs(t[i]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nx=0;class Nf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nu(s[o].image)):r.push(nu(s[o]))}else r=nu(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function nu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let ix=0;const iu=new D;class ni extends wr{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=is,s=is,r=Mn,o=$s,a=Pi,c=ci,l=ni.DEFAULT_ANISOTROPY,u=Vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ms(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=rm;ni.DEFAULT_ANISOTROPY=1;const g0=class g0{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,_=(h+1)/2,M=(p+1)/2,S=(u+d)/4,w=(f+x)/4,y=(g+m)/4;return b>_&&b>M?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=w/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=y/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};g0.prototype.isVector4=!0;let sn=g0;class sx extends wr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new ni(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nf(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends sx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pm extends ni{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends ni{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bl=class bl{constructor(e,t,i,s,r,o,a,c,l,u,f,d,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,f,d,h,g,x,m)}set(e,t,i,s,r,o,a,c,l,u,f,d,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/kr.setFromMatrixColumn(e,0).length(),r=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,x=l*f;t[0]=d+x*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,x=l*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-x*f}else if(e.order==="XZY"){const d=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ox,e,ax)}lookAt(e,t,i){const s=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Is.crossVectors(i,yi),Is.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Is.crossVectors(i,yi)),Is.normalize(),Ha.crossVectors(yi,Is),s[0]=Is.x,s[4]=Ha.x,s[8]=yi.x,s[1]=Is.y,s[5]=Ha.y,s[9]=yi.y,s[2]=Is.z,s[6]=Ha.z,s[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],b=i[7],_=i[11],M=i[15],S=s[0],w=s[4],y=s[8],T=s[12],L=s[1],C=s[5],R=s[9],E=s[13],P=s[2],U=s[6],B=s[10],V=s[14],ne=s[3],q=s[7],Y=s[11],oe=s[15];return r[0]=o*S+a*L+c*P+l*ne,r[4]=o*w+a*C+c*U+l*q,r[8]=o*y+a*R+c*B+l*Y,r[12]=o*T+a*E+c*V+l*oe,r[1]=u*S+f*L+d*P+h*ne,r[5]=u*w+f*C+d*U+h*q,r[9]=u*y+f*R+d*B+h*Y,r[13]=u*T+f*E+d*V+h*oe,r[2]=g*S+x*L+m*P+p*ne,r[6]=g*w+x*C+m*U+p*q,r[10]=g*y+x*R+m*B+p*Y,r[14]=g*T+x*E+m*V+p*oe,r[3]=v*S+b*L+_*P+M*ne,r[7]=v*w+b*C+_*U+M*q,r[11]=v*y+b*R+_*B+M*Y,r[15]=v*T+b*E+_*V+M*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],v=c*h-l*d,b=a*h-l*f,_=a*d-c*f,M=o*h-l*u,S=o*d-c*u,w=o*f-a*u;return t*(x*v-m*b+p*_)-i*(g*v-m*M+p*S)+s*(g*b-x*M+p*w)-r*(g*_-x*S+m*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=t*a-i*o,b=t*c-s*o,_=t*l-r*o,M=i*c-s*a,S=i*l-r*a,w=s*l-r*c,y=u*x-f*g,T=u*m-d*g,L=u*p-h*g,C=f*m-d*x,R=f*p-h*x,E=d*p-h*m,P=v*E-b*R+_*C+M*L-S*T+w*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=(a*E-c*R+l*C)*U,e[1]=(s*R-i*E-r*C)*U,e[2]=(x*w-m*S+p*M)*U,e[3]=(d*S-f*w-h*M)*U,e[4]=(c*L-o*E-l*T)*U,e[5]=(t*E-s*L+r*T)*U,e[6]=(m*_-g*w-p*b)*U,e[7]=(u*w-d*_+h*b)*U,e[8]=(o*R-a*L+l*y)*U,e[9]=(i*L-t*R-r*y)*U,e[10]=(g*S-x*_+p*v)*U,e[11]=(f*_-u*S-h*v)*U,e[12]=(a*T-o*C-c*y)*U,e[13]=(t*C-i*T+s*y)*U,e[14]=(x*b-g*M-m*v)*U,e[15]=(u*M-f*b+d*v)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,d=r*l,h=r*u,g=r*f,x=o*u,m=o*f,p=a*f,v=c*l,b=c*u,_=c*f,M=i.x,S=i.y,w=i.z;return s[0]=(1-(x+p))*M,s[1]=(h+_)*M,s[2]=(g-b)*M,s[3]=0,s[4]=(h-_)*S,s[5]=(1-(d+p))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+b)*w,s[9]=(m-v)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=kr.set(s[0],s[1],s[2]).length();const a=kr.set(s[4],s[5],s[6]).length(),c=kr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Oi.copy(this);const l=1/o,u=1/a,f=1/c;return Oi.elements[0]*=l,Oi.elements[1]*=l,Oi.elements[2]*=l,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=f,Oi.elements[9]*=f,Oi.elements[10]*=f,t.setFromRotationMatrix(Oi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=ss,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ss)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Sa)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ss,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ss)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Sa)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};bl.prototype.isMatrix4=!0;let Nt=bl;const kr=new D,Oi=new Nt,ox=new D(0,0,0),ax=new D(1,1,1),Is=new D,Ha=new D,yi=new D,X0=new Nt,q0=new Bn;class Ts{constructor(e=0,t=0,i=0,s=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return X0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(X0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return q0.setFromEuler(this),this.setFromQuaternion(q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class mm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cx=0;const Y0=new D,Nr=new Bn,ds=new Nt,$a=new D,Do=new D,lx=new D,ux=new Bn,j0=new D(1,0,0),Z0=new D(0,1,0),J0=new D(0,0,1),K0={type:"added"},dx={type:"removed"},Fr={type:"childadded",child:null},su={type:"childremoved",child:null};class Jn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new D,t=new Ts,i=new Bn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new bt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(Z0,e)}rotateZ(e){return this.rotateOnAxis(J0,e)}translateOnAxis(e,t){return Y0.copy(e).applyQuaternion(this.quaternion),this.position.add(Y0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(Z0,e)}translateZ(e){return this.translateOnAxis(J0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$a.copy(e):$a.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Do,$a,this.up):ds.lookAt($a,Do,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(ds),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K0),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ds.multiply(e.parent.matrixWorld)),e.applyMatrix4(ds),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K0),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jn.DEFAULT_UP=new D(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jn extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Bt.workingColorSpace){if(e=kf(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ou(o,r,e+1/3),this.g=ou(o,r,e),this.b=ou(o,r,e-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(e,t=ei){function i(r){r!==void 0&&parseFloat(r)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const i=gm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Bt.workingToColorSpace(Qn.copy(this),e),Math.round(It(Qn.r*255,0,255))*65536+Math.round(It(Qn.g*255,0,255))*256+Math.round(It(Qn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Qn.copy(this),t);const i=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=ei){Bt.workingToColorSpace(Qn.copy(this),e);const t=Qn.r,i=Qn.g,s=Qn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(Wa);const i=ca(Ds.h,Wa.h,t),s=ca(Ds.s,Wa.s,t),r=ca(Ds.l,Wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qn=new pt;pt.NAMES=gm;class Rl extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zi=new D,fs=new D,au=new D,hs=new D,Or=new D,zr=new D,Q0=new D,cu=new D,lu=new D,uu=new D,du=new sn,fu=new sn,hu=new sn;class Ri{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zi.subVectors(e,t),s.cross(zi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zi.subVectors(s,t),fs.subVectors(i,t),au.subVectors(e,t);const o=zi.dot(zi),a=zi.dot(fs),c=zi.dot(au),l=fs.dot(fs),u=fs.dot(au),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,hs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hs.x),c.addScaledVector(o,hs.y),c.addScaledVector(a,hs.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return du.setScalar(0),fu.setScalar(0),hu.setScalar(0),du.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,i),hu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(du,r.x),o.addScaledVector(fu,r.y),o.addScaledVector(hu,r.z),o}static isFrontFacing(e,t,i,s){return zi.subVectors(i,t),fs.subVectors(e,t),zi.cross(fs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),zi.cross(fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Or.subVectors(s,i),zr.subVectors(r,i),cu.subVectors(e,i);const c=Or.dot(cu),l=zr.dot(cu);if(c<=0&&l<=0)return t.copy(i);lu.subVectors(e,s);const u=Or.dot(lu),f=zr.dot(lu);if(u>=0&&f<=u)return t.copy(s);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Or,o);uu.subVectors(e,r);const h=Or.dot(uu),g=zr.dot(uu);if(g>=0&&h<=g)return t.copy(r);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(zr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Q0.subVectors(r,s),a=(f-u)/(f-u+(h-g)),t.copy(s).addScaledVector(Q0,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Or,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Tr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(r,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),qa.subVectors(this.max,Uo),Br.subVectors(e.a,Uo),Gr.subVectors(e.b,Uo),Vr.subVectors(e.c,Uo),Us.subVectors(Gr,Br),ks.subVectors(Vr,Gr),ar.subVectors(Br,Vr);let t=[0,-Us.z,Us.y,0,-ks.z,ks.y,0,-ar.z,ar.y,Us.z,0,-Us.x,ks.z,0,-ks.x,ar.z,0,-ar.x,-Us.y,Us.x,0,-ks.y,ks.x,0,-ar.y,ar.x,0];return!pu(t,Br,Gr,Vr,qa)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,Br,Gr,Vr,qa))?!1:(Ya.crossVectors(Us,ks),t=[Ya.x,Ya.y,Ya.z],pu(t,Br,Gr,Vr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ps=[new D,new D,new D,new D,new D,new D,new D,new D],Bi=new D,Xa=new Tr,Br=new D,Gr=new D,Vr=new D,Us=new D,ks=new D,ar=new D,Uo=new D,qa=new D,Ya=new D,cr=new D;function pu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cr.fromArray(n,r);const a=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),c=e.dot(cr),l=t.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Cn=new D,ja=new Be;let hx=0;class mn extends wr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vm extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xm extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const px=new Tr,ko=new D,mu=new D;class Er{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):px.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ko,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(mu)),this.expandByPoint(ko.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mx=0;const Ei=new Nt,gu=new Jn,Hr=new D,Mi=new Tr,No=new Tr,Wn=new D;class Wt extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U1(e)?xm:vm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new bt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];No.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(Mi.min,No.min),Mi.expandByPoint(Wn),Wn.addVectors(Mi.max,No.max),Mi.expandByPoint(Wn)):(Mi.expandByPoint(No.min),Mi.expandByPoint(No.max))}Mi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wn.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(e,l),Wn.add(Hr)),s=Math.max(s,i.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new D,c[y]=new D;const l=new D,u=new D,f=new D,d=new Be,h=new Be,g=new Be,x=new D,m=new D;function p(y,T,L){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,y),h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),a[y].add(x),a[T].add(x),a[L].add(x),c[y].add(m),c[T].add(m),c[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,T=v.length;y<T;++y){const L=v[y],C=L.start,R=L.count;for(let E=C,P=C+R;E<P;E+=3)p(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const b=new D,_=new D,M=new D,S=new D;function w(y){M.fromBufferAttribute(s,y),S.copy(M);const T=a[y];b.copy(T),b.sub(M.multiplyScalar(M.dot(T))).normalize(),_.crossVectors(S,T);const C=_.dot(c[y])<0?-1:1;o.setXYZW(y,b.x,b.y,b.z,C)}for(let y=0,T=v.length;y<T;++y){const L=v[y],C=L.start,R=L.count;for(let E=C,P=C+R;E<P;E+=3)w(e.getX(E+0)),w(e.getX(E+1)),w(e.getX(E+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,f=new D;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new mn(d,u,f)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fm,this.updateRanges=[],this.version=0,this.uuid=Ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const si=new D;class cl{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){al("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){al("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vu=new D,vx=new D,xx=new bt;class ts{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=vu.subVectors(i,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(vu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xx.getNormalMatrix(e),s=this.coplanarPoint(vu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _x=0;class er extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=oa,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jp,this.blendDst=Zp,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ts().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class la extends er{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const Fo=new D,Wr=new D,Xr=new D,qr=new Be,Oo=new Be,_m=new Nt,Za=new D,zo=new D,Ja=new D,eh=new Be,xu=new Be,th=new Be;class Dc extends Jn{constructor(e=new la){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gx(t,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new cl(i,3,0,!1)),$r.setAttribute("uv",new cl(i,2,3,!1))}this.geometry=$r,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),_m.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ka(Za.set(-.5,-.5,0),Xr,o,Wr,s,r),Ka(zo.set(.5,-.5,0),Xr,o,Wr,s,r),Ka(Ja.set(.5,.5,0),Xr,o,Wr,s,r),eh.set(0,0),xu.set(1,0),th.set(1,1);let a=e.ray.intersectTriangle(Za,zo,Ja,!1,Fo);if(a===null&&(Ka(zo.set(-.5,.5,0),Xr,o,Wr,s,r),xu.set(0,1),a=e.ray.intersectTriangle(Za,Ja,zo,!1,Fo),a===null))return;const c=e.ray.origin.distanceTo(Fo);c<e.near||c>e.far||t.push({distance:c,point:Fo.clone(),uv:Ri.getInterpolation(Fo,Za,zo,Ja,eh,xu,th,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ka(n,e,t,i,s,r){qr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Oo.x=r*qr.x-s*qr.y,Oo.y=s*qr.x+r*qr.y):Oo.copy(qr),n.copy(e),n.x+=Oo.x,n.y+=Oo.y,n.applyMatrix4(_m)}const ms=new D,_u=new D,Qa=new D,ec=new D;class Pl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ms.copy(this.origin).addScaledVector(this.direction,t),ms.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_u.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),ec.copy(this.origin).sub(_u);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Qa),a=ec.dot(this.direction),c=-ec.dot(Qa),l=ec.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*c-a,d=o*a-c,g=r*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),h=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(_u).addScaledVector(Qa,d),h}intersectSphere(e,t){if(e.radius<0)return null;ms.subVectors(e.center,this.origin);const i=ms.dot(this.direction),s=ms.dot(ms)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ms)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=e.x-o.x,d=e.y-o.y,h=e.z-o.z,g=t.x-o.x,x=t.y-o.y,m=t.z-o.z,p=i.x-o.x,v=i.y-o.y,b=i.z-o.z,_=Math.abs(c),M=Math.abs(l),S=Math.abs(u);let w,y,T,L,C,R,E,P,U,B,V,ne;if(_>=M&&_>=S?(T=c,R=f,U=g,ne=p,c>=0?(w=l,y=u,L=d,C=h,E=x,P=m,B=v,V=b):(w=u,y=l,L=h,C=d,E=m,P=x,B=b,V=v)):M>=S?(T=l,R=d,U=x,ne=v,l>=0?(w=u,y=c,L=h,C=f,E=m,P=g,B=b,V=p):(w=c,y=u,L=f,C=h,E=g,P=m,B=p,V=b)):(T=u,R=h,U=m,ne=b,u>=0?(w=c,y=l,L=f,C=d,E=g,P=x,B=p,V=v):(w=l,y=c,L=d,C=f,E=x,P=g,B=v,V=p)),T===0)return null;const q=w/T,Y=y/T,oe=1/T,De=L-q*R,Me=C-Y*R,st=E-q*U,Qe=P-Y*U,Ce=B-q*ne,te=V-Y*ne,ue=Ce*Qe-te*st,we=De*te-Me*Ce,dt=st*Me-Qe*De;if(s){if(ue<0||we<0||dt<0)return null}else if((ue<0||we<0||dt<0)&&(ue>0||we>0||dt>0))return null;const Ge=ue+we+dt;if(Ge===0)return null;const ye=oe*(ue*R+we*U+dt*ne);return(Ge>0?ye<0:ye>0)?null:this.at(ye/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ff extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=Jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nh=new Nt,lr=new Pl,tc=new Er,ih=new D,nc=new D,ic=new D,sc=new D,yu=new D,rc=new D,sh=new D,oc=new D;class Vt extends Jn{constructor(e=new Wt,t=new Ff){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){rc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(yu.fromBufferAttribute(f,e),o?rc.addScaledVector(yu,u):rc.addScaledVector(yu.sub(t),u))}t.add(rc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),lr.copy(e.ray).recast(e.near),!(tc.containsPoint(lr.origin)===!1&&(lr.intersectSphere(tc,ih)===null||lr.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(r).invert(),lr.copy(e.ray).applyMatrix4(nh),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,M=b;_<M;_+=3){const S=a.getX(_),w=a.getX(_+1),y=a.getX(_+2);s=ac(this,p,e,i,l,u,f,S,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);s=ac(this,o,e,i,l,u,f,v,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,M=b;_<M;_+=3){const S=_,w=_+1,y=_+2;s=ac(this,p,e,i,l,u,f,S,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const v=m,b=m+1,_=m+2;s=ac(this,o,e,i,l,u,f,v,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function yx(n,e,t,i,s,r,o,a){let c;if(e.side===di?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Mr,a),c===null)return null;oc.copy(a),oc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(oc);return l<t.near||l>t.far?null:{distance:l,point:oc.clone(),object:n}}function ac(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,nc),n.getVertexPosition(c,ic),n.getVertexPosition(l,sc);const u=yx(n,e,t,i,nc,ic,sc,sh);if(u){const f=new D;Ri.getBarycoord(sh,nc,ic,sc,f),s&&(u.uv=Ri.getInterpolatedAttribute(s,a,c,l,f,new Be)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,a,c,l,f,new Be)),o&&(u.normal=Ri.getInterpolatedAttribute(o,a,c,l,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};Ri.getNormal(nc,ic,sc,d.normal),u.face=d,u.barycoord=f}return u}class Ll extends ni{constructor(e=null,t=1,i=1,s,r,o,a,c,l=zn,u=zn,f,d){super(null,o,a,c,l,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo extends mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yr=new Nt,rh=new Nt,cc=[],oh=new Tr,Mx=new Nt,Bo=new Vt,Go=new Er;class ll extends Vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Mx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),oh.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(oh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),Go.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(i),e.ray.intersectsSphere(Go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yr),rh.multiplyMatrices(i,Yr),Bo.matrixWorld=rh,Bo.raycast(e,cc);for(let o=0,a=cc.length;o<a;o++){const c=cc[o];c.instanceId=r,c.object=this,t.push(c)}cc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ll(new Float32Array(s*this.count),s,this.count,Rf,Wi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ur=new Er,bx=new Be(.5,.5),lc=new D;class Of{constructor(e=new ts,t=new ts,i=new ts,s=new ts,r=new ts,o=new ts){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ss,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],b=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-o,h-u,p-g,M-v).normalize(),s[1].setComponents(l+o,h+u,p+g,M+v).normalize(),s[2].setComponents(l+a,h+f,p+x,M+b).normalize(),s[3].setComponents(l-a,h-f,p-x,M-b).normalize(),i)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,h-d,p-m,M-_).normalize();else if(s[4].setComponents(l-c,h-d,p-m,M-_).normalize(),t===ss)s[5].setComponents(l+c,h+d,p+m,M+_).normalize();else if(t===Sa)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const t=bx.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lc.x=s.normal.x>0?e.max.x:e.min.x,lc.y=s.normal.y>0?e.max.y:e.min.y,lc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zf extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ul=new D,dl=new D,ah=new Nt,Vo=new Pl,uc=new Er,Mu=new D,ch=new D;class Ko extends Jn{constructor(e=new Wt,t=new zf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ul.fromBufferAttribute(t,s-1),dl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ul.distanceTo(dl);e.setAttribute("lineDistance",new yt(i,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,e.ray.intersectsSphere(uc)===!1)return;ah.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),b=dc(this,e,Vo,c,p,v,x);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(h),p=dc(this,e,Vo,c,x,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=l){const p=dc(this,e,Vo,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=dc(this,e,Vo,c,g-1,h,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dc(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ul.fromBufferAttribute(a,s),dl.fromBufferAttribute(a,r),t.distanceSqToSegment(ul,dl,Mu,ch)>i)return;Mu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:ch.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const lh=new D,uh=new D;class Sx extends Ko{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)lh.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lh.distanceTo(uh);e.setAttribute("lineDistance",new yt(i,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wx extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dh=new Nt,Od=new Pl,fc=new Er,hc=new D;class Bf extends Jn{constructor(e=new Wt,t=new wx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),fc.radius+=r,e.ray.intersectsSphere(fc)===!1)return;dh.copy(s).invert(),Od.copy(e.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=d,x=h;g<x;g++){const m=l.getX(g);hc.fromBufferAttribute(f,m),fh(hc,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,x=h;g<x;g++)hc.fromBufferAttribute(f,g),fh(hc,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fh(n,e,t,i,s,r,o){const a=Od.distanceSqToPoint(n);if(a<t){const c=new D;Od.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ym extends ni{constructor(e=[],t=br,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gf extends ni{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class go extends ni{constructor(e,t,i=Ki,s,r,o,a=zn,c=zn,l,u=ws,f=1){if(u!==ws&&u!==mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Tx extends go{constructor(e,t=Ki,i=br,s,r,o=zn,a=zn,c,l=ws){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mm extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ut extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function g(x,m,p,v,b,_,M,S,w,y,T){const L=_/w,C=M/y,R=_/2,E=M/2,P=S/2,U=w+1,B=y+1;let V=0,ne=0;const q=new D;for(let Y=0;Y<B;Y++){const oe=Y*C-E;for(let De=0;De<U;De++){const Me=De*L-R;q[x]=Me*v,q[m]=oe*b,q[p]=P,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=S>0?1:-1,u.push(q.x,q.y,q.z),f.push(De/w),f.push(1-Y/y),V+=1}}for(let Y=0;Y<y;Y++)for(let oe=0;oe<w;oe++){const De=d+oe+U*Y,Me=d+oe+U*(Y+1),st=d+(oe+1)+U*(Y+1),Qe=d+(oe+1)+U*Y;c.push(De,Me,Qe),c.push(Me,st,Qe),ne+=6}a.addGroup(h,ne,T),h+=ne,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vo extends Wt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,f=Math.PI/2*e,d=t,h=2*f+d,g=i*2+r,x=s+1,m=new D,p=new D;for(let v=0;v<=g;v++){let b=0,_=0,M=0,S=0;if(v<=i){const T=v/i,L=T*Math.PI/2;_=-u-e*Math.cos(L),M=e*Math.sin(L),S=-e*Math.cos(L),b=T*f}else if(v<=i+r){const T=(v-i)/r;_=-u+T*t,M=e,S=0,b=f+T*d}else{const T=(v-i-r)/i,L=T*Math.PI/2;_=u+e*Math.sin(L),M=e*Math.cos(L),S=e*Math.sin(L),b=f+d+T*f}const w=Math.max(0,Math.min(1,b/h));let y=0;v===0?y=.5/s:v===g&&(y=-.5/s);for(let T=0;T<=s;T++){const L=T/s,C=L*Math.PI*2,R=Math.sin(C),E=Math.cos(C);p.x=-M*E,p.y=_,p.z=M*R,a.push(p.x,p.y,p.z),m.set(-M*E,S,M*R),m.normalize(),c.push(m.x,m.y,m.z),l.push(L+y,w)}if(v>0){const T=(v-1)*x;for(let L=0;L<s;L++){const C=T+L,R=T+L+1,E=v*x+L,P=v*x+L+1;o.push(C,R,E),o.push(R,P,E)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vf extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,u=new Be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const h=i+f/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ee extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const x=[],m=i/2;let p=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(h,2));function v(){const _=new D,M=new D;let S=0;const w=(t-e)/i;for(let y=0;y<=r;y++){const T=[],L=y/r,C=L*(t-e)+e;for(let R=0;R<=s;R++){const E=R/s,P=E*c+a,U=Math.sin(P),B=Math.cos(P);M.x=C*U,M.y=-L*i+m,M.z=C*B,f.push(M.x,M.y,M.z),_.set(U,w,B).normalize(),d.push(_.x,_.y,_.z),h.push(E,1-L),T.push(g++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){const L=x[T][y],C=x[T+1][y],R=x[T+1][y+1],E=x[T][y+1];(e>0||T!==0)&&(u.push(L,C,E),S+=3),(t>0||T!==r-1)&&(u.push(C,R,E),S+=3)}l.addGroup(p,S,0),p+=S}function b(_){const M=g,S=new Be,w=new D;let y=0;const T=_===!0?e:t,L=_===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,m*L,0),d.push(0,L,0),h.push(.5,.5),g++;const C=g;for(let R=0;R<=s;R++){const P=R/s*c+a,U=Math.cos(P),B=Math.sin(P);w.x=T*B,w.y=m*L,w.z=T*U,f.push(w.x,w.y,w.z),d.push(0,L,0),S.x=U*.5+.5,S.y=B*.5*L+.5,h.push(S.x,S.y),g++}for(let R=0;R<s;R++){const E=M+R,P=C+R;_===!0?u.push(P,P+1,E):u.push(P+1,P,E),y+=3}l.addGroup(p,y,_===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ee(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hf extends Ee{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Hf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Il extends Wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const b=new D,_=new D,M=new D;for(let S=0;S<t.length;S+=3)h(t[S+0],b),h(t[S+1],_),h(t[S+2],M),c(b,_,M,v)}function c(v,b,_,M){const S=M+1,w=[];for(let y=0;y<=S;y++){w[y]=[];const T=v.clone().lerp(_,y/S),L=b.clone().lerp(_,y/S),C=S-y;for(let R=0;R<=C;R++)R===0&&y===S?w[y][R]=T:w[y][R]=T.clone().lerp(L,R/C)}for(let y=0;y<S;y++)for(let T=0;T<2*(S-y)-1;T++){const L=Math.floor(T/2);T%2===0?(d(w[y][L+1]),d(w[y+1][L]),d(w[y][L])):(d(w[y][L+1]),d(w[y+1][L+1]),d(w[y+1][L]))}}function l(v){const b=new D;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){const v=new D;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const _=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;o.push(_,1-M)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){const b=o[v+0],_=o[v+2],M=o[v+4],S=Math.max(b,_,M),w=Math.min(b,_,M);S>.9&&w<.1&&(b<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function h(v,b){const _=v*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){const v=new D,b=new D,_=new D,M=new D,S=new Be,w=new Be,y=new Be;for(let T=0,L=0;T<r.length;T+=9,L+=6){v.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(o[L+0],o[L+1]),w.set(o[L+2],o[L+3]),y.set(o[L+4],o[L+5]),M.copy(v).add(b).add(_).divideScalar(3);const C=m(M);x(S,L+0,v,C),x(w,L+2,b,C),x(y,L+4,_,C)}}function x(v,b,_,M){M<0&&v.x===1&&(o[b]=v.x-1),_.x===0&&_.z===0&&(o[b]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.vertices,e.indices,e.radius,e.detail)}}class $f extends Il{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $f(e.radius,e.detail)}}class vr extends Wt{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=It(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,f=new D,d=new Be,h=new D,g=new D,x=new D;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,h.x=p*1,h.y=-m,h.z=p*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let v=0;v<=t;v++){const b=i+v*u*s,_=Math.sin(b),M=Math.cos(b);for(let S=0;S<=e.length-1;S++){f.x=e[S].x*_,f.y=e[S].y,f.z=e[S].x*M,o.push(f.x,f.y,f.z),d.x=v/t,d.y=S/(e.length-1),a.push(d.x,d.y);const w=c[3*S+0]*_,y=c[3*S+1],T=c[3*S+0]*M;l.push(w,y,T)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const _=b+v*e.length,M=_,S=_+e.length,w=_+e.length+1,y=_+1;r.push(M,S,y),r.push(w,y,S)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.points,e.segments,e.phiStart,e.phiLength)}}class Dl extends Il{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dl(e.radius,e.detail)}}class To extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=e/a,d=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let b=0;b<l;b++){const _=b*f-r;g.push(_,-v,0),x.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const b=v+l*p,_=v+l*(p+1),M=v+1+l*(p+1),S=v+1+l*p;h.push(b,_,S),h.push(_,M,S)}this.setIndex(h),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}class xo extends Wt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let f=e;const d=(t-e)/s,h=new D,g=new Be;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const v=p+m,b=v,_=v+i+1,M=v+i+2,S=v+1;a.push(b,_,S),a.push(_,M,S)}}this.setIndex(a),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fn extends Wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new D,d=new D,h=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const v=[],b=p/i,_=o+b*a,M=e*Math.cos(_),S=Math.sqrt(e*e-M*M);let w=0;p===0&&o===0?w=.5/t:p===i&&c===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){const T=y/t,L=s+T*r;f.x=-S*Math.cos(L),f.y=M,f.z=S*Math.sin(L),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(T+w,1-b),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const b=u[p][v+1],_=u[p][v],M=u[p+1][v],S=u[p+1][v+1];(p!==0||o>0)&&h.push(b,_,S),(p!==i-1||c<Math.PI)&&h.push(_,M,S)}this.setIndex(h),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class On extends Wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],f=[],d=new D,h=new D,g=new D;for(let x=0;x<=i;x++){const m=o+x/i*a;for(let p=0;p<=s;p++){const v=p/s*r;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){const p=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,_=(s+1)*x+m;c.push(p,v,_),c.push(v,b,_)}this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function _o(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(hh(s))s.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(hh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ri(n){const e={};for(let t=0;t<n.length;t++){const i=_o(n[t]);for(const s in i)e[s]=i[s]}return e}function hh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ex(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const Ax={clone:_o,merge:ri};var Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=Ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new pt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new sn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Nt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Px extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fl extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lx extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pc extends zf{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Sm extends Jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const bu=new Nt,ph=new D,mh=new D;class Dx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(bu,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Sa||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mc=new D,gc=new Bn,Qi=new D;class Ul extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ss,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mc,gc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(mc,gc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new D,gh=new Be,vh=new Be;class bi extends Ul{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,gh,vh),t.subVectors(vh,gh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ux extends Dx{constructor(){super(new bi(90,1,.5,500)),this.isPointLightShadow=!0}}class xh extends Sm{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wf extends Ul{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kx extends Sm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wm extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const jr=-90,Zr=1;class Tm extends Jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bi(jr,Zr,e,t);s.layers=this.layers,this.add(s);const r=new bi(jr,Zr,e,t);r.layers=this.layers,this.add(r);const o=new bi(jr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new bi(jr,Zr,e,t);a.layers=this.layers,this.add(a);const c=new bi(jr,Zr,e,t);c.layers=this.layers,this.add(c);const l=new bi(jr,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nx extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fx{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=It(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const v0=class v0{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};v0.prototype.isMatrix2=!0;let _h=v0;function yh(n,e,t,i){const s=Ox(i);switch(t){case um:return n*e;case Rf:return n*e/s.components*s.byteLength;case Pf:return n*e/s.components*s.byteLength;case Sr:return n*e*2/s.components*s.byteLength;case Lf:return n*e*2/s.components*s.byteLength;case dm:return n*e*3/s.components*s.byteLength;case Pi:return n*e*4/s.components*s.byteLength;case If:return n*e*4/s.components*s.byteLength;case Rc:case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cd:case ud:return Math.max(n,16)*Math.max(e,8)/4;case ad:case ld:return Math.max(n,8)*Math.max(e,8)/2;case dd:case fd:case pd:case md:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hd:case nl:case gd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ld:case Id:case Dd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ud:case kd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case il:case Nd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ox(n){switch(n){case ci:case om:return{byteLength:1,components:1};case Ma:case am:case ki:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case Ki:case Ef:case Wi:return{byteLength:4,components:1};case cm:case lm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tf}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Em(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zx(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gx=`#ifdef USE_ALPHAHASH
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
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
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
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
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
#endif`,jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
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
#endif`,e_=`#ifdef USE_BUMPMAP
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
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l_=`#define PI 3.141592653589793
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
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,I_=`#ifdef USE_ENVMAP
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
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F_=`PhysicalMaterial material;
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
#endif`,O_=`uniform sampler2D dfgLUT;
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
}`,z_=`
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,H_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
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
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
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
#endif`,uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,My=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ty=`float getShadowMask() {
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
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uy=`#ifdef USE_TRANSMISSION
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
#endif`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,qy=`#if DEPTH_PACKING == 3200
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
}`,Yy=`#define DISTANCE
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
}`,jy=`#define DISTANCE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define LAMBERT
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
}`,sM=`#define MATCAP
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
}`,rM=`#define MATCAP
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
}`,oM=`#define NORMAL
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
}`,aM=`#define NORMAL
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
}`,cM=`#define PHONG
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
}`,lM=`#define PHONG
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
}`,uM=`#define STANDARD
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
}`,dM=`#define STANDARD
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
}`,fM=`#define TOON
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
}`,hM=`#define TOON
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
}`,pM=`uniform float size;
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#include <common>
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
}`,vM=`uniform vec3 color;
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
}`,xM=`uniform float rotation;
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
}`,_M=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:Bx,alphahash_pars_fragment:Gx,alphamap_fragment:Vx,alphamap_pars_fragment:Hx,alphatest_fragment:$x,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:jx,begin_vertex:Zx,beginnormal_vertex:Jx,bsdfs:Kx,iridescence_fragment:Qx,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:s_,color_fragment:r_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:c_,common:l_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:d_,displacementmap_pars_vertex:f_,displacementmap_vertex:h_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,colorspace_fragment:g_,colorspace_pars_fragment:v_,envmap_fragment:x_,envmap_common_pars_fragment:__,envmap_pars_fragment:y_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:I_,envmap_vertex:b_,fog_vertex:S_,fog_pars_vertex:w_,fog_fragment:T_,fog_pars_fragment:E_,gradientmap_pars_fragment:A_,lightmap_pars_fragment:C_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:P_,lights_pars_begin:L_,lights_toon_fragment:D_,lights_toon_pars_fragment:U_,lights_phong_fragment:k_,lights_phong_pars_fragment:N_,lights_physical_fragment:F_,lights_physical_pars_fragment:O_,lights_fragment_begin:z_,lights_fragment_maps:B_,lights_fragment_end:G_,lightprobes_pars_fragment:V_,logdepthbuf_fragment:H_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:X_,map_fragment:q_,map_pars_fragment:Y_,map_particle_fragment:j_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:K_,morphinstance_vertex:Q_,morphcolor_vertex:ey,morphnormal_vertex:ty,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:sy,normal_fragment_maps:ry,normal_pars_fragment:oy,normal_pars_vertex:ay,normal_vertex:cy,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:uy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:fy,iridescence_pars_fragment:hy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:vy,dithering_fragment:xy,dithering_pars_fragment:_y,roughnessmap_fragment:yy,roughnessmap_pars_fragment:My,shadowmap_pars_fragment:by,shadowmap_pars_vertex:Sy,shadowmap_vertex:wy,shadowmask_pars_fragment:Ty,skinbase_vertex:Ey,skinning_pars_vertex:Ay,skinning_vertex:Cy,skinnormal_vertex:Ry,specularmap_fragment:Py,specularmap_pars_fragment:Ly,tonemapping_fragment:Iy,tonemapping_pars_fragment:Dy,transmission_fragment:Uy,transmission_pars_fragment:ky,uv_pars_fragment:Ny,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:zy,background_vert:By,background_frag:Gy,backgroundCube_vert:Vy,backgroundCube_frag:Hy,cube_vert:$y,cube_frag:Wy,depth_vert:Xy,depth_frag:qy,distance_vert:Yy,distance_frag:jy,equirect_vert:Zy,equirect_frag:Jy,linedashed_vert:Ky,linedashed_frag:Qy,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:sM,meshmatcap_frag:rM,meshnormal_vert:oM,meshnormal_frag:aM,meshphong_vert:cM,meshphong_frag:lM,meshphysical_vert:uM,meshphysical_frag:dM,meshtoon_vert:fM,meshtoon_frag:hM,points_vert:pM,points_frag:mM,shadow_vert:gM,shadow_frag:vM,sprite_vert:xM,sprite_frag:_M},ze={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},ns={basic:{uniforms:ri([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:ri([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:ri([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:ri([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:ri([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new pt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:ri([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:ri([ze.points,ze.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:ri([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:ri([ze.common,ze.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:ri([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:ri([ze.sprite,ze.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:ri([ze.common,ze.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:ri([ze.lights,ze.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};ns.physical={uniforms:ri([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const vc={r:0,b:0,g:0},yM=new Nt,Am=new bt;Am.set(-1,0,0,0,1,0,0,0,1);function MM(n,e,t,i,s,r){const o=new pt(0);let a=s===!0?0:1,c,l,u=null,f=0,d=null;function h(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const _=v.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(v){let b=!1;const _=h(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),b=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,b){const _=h(b);_&&(_.isCubeTexture||_.mapping===Cl)?(l===void 0&&(l=new Vt(new ut(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:_o(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Am),l.material.toneMapped=Bt.getTransfer(_.colorSpace)!==en,(u!==_||f!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Vt(new To(2,2),new qt({name:"BackgroundMaterial",uniforms:_o(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(_.colorSpace)!==en,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(vc,bm(n)),t.buffers.color.setClear(vc.r,vc.g,vc.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function bM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(C,R,E,P,U){let B=!1;const V=f(C,P,E,R);r!==V&&(r=V,l(r.object)),B=h(C,P,E,U),B&&g(C,P,E,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(C,R,E,P),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function f(C,R,E,P){const U=P.wireframe===!0;let B=i[R.id];B===void 0&&(B={},i[R.id]=B);const V=C.isInstancedMesh===!0?C.id:0;let ne=B[V];ne===void 0&&(ne={},B[V]=ne);let q=ne[E.id];q===void 0&&(q={},ne[E.id]=q);let Y=q[U];return Y===void 0&&(Y=d(c()),q[U]=Y),Y}function d(C){const R=[],E=[],P=[];for(let U=0;U<t;U++)R[U]=0,E[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:E,attributeDivisors:P,object:C,attributes:{},index:null}}function h(C,R,E,P){const U=r.attributes,B=R.attributes;let V=0;const ne=E.getAttributes();for(const q in ne)if(ne[q].location>=0){const oe=U[q];let De=B[q];if(De===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(De=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(De=C.instanceColor)),oe===void 0||oe.attribute!==De||De&&oe.data!==De.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function g(C,R,E,P){const U={},B=R.attributes;let V=0;const ne=E.getAttributes();for(const q in ne)if(ne[q].location>=0){let oe=B[q];oe===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const De={};De.attribute=oe,oe&&oe.data&&(De.data=oe.data),U[q]=De,V++}r.attributes=U,r.attributesNum=V,r.index=P}function x(){const C=r.newAttributes;for(let R=0,E=C.length;R<E;R++)C[R]=0}function m(C){p(C,0)}function p(C,R){const E=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;E[C]=1,P[C]===0&&(n.enableVertexAttribArray(C),P[C]=1),U[C]!==R&&(n.vertexAttribDivisor(C,R),U[C]=R)}function v(){const C=r.newAttributes,R=r.enabledAttributes;for(let E=0,P=R.length;E<P;E++)R[E]!==C[E]&&(n.disableVertexAttribArray(E),R[E]=0)}function b(C,R,E,P,U,B,V){V===!0?n.vertexAttribIPointer(C,R,E,U,B):n.vertexAttribPointer(C,R,E,P,U,B)}function _(C,R,E,P){x();const U=P.attributes,B=E.getAttributes(),V=R.defaultAttributeValues;for(const ne in B){const q=B[ne];if(q.location>=0){let Y=U[ne];if(Y===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),Y!==void 0){const oe=Y.normalized,De=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;const st=Me.buffer,Qe=Me.type,Ce=Me.bytesPerElement,te=Qe===n.INT||Qe===n.UNSIGNED_INT||Y.gpuType===Ef;if(Y.isInterleavedBufferAttribute){const ue=Y.data,we=ue.stride,dt=Y.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<q.locationSize;Ge++)p(q.location+Ge,ue.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)m(q.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ge=0;Ge<q.locationSize;Ge++)b(q.location+Ge,De/q.locationSize,Qe,oe,we*Ce,(dt+De/q.locationSize*Ge)*Ce,te)}else{if(Y.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue,Y.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ue=0;ue<q.locationSize;ue++)b(q.location+ue,De/q.locationSize,Qe,oe,De*Ce,De/q.locationSize*ue*Ce,te)}}else if(V!==void 0){const oe=V[ne];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(q.location,oe);break;case 3:n.vertexAttrib3fv(q.location,oe);break;case 4:n.vertexAttrib4fv(q.location,oe);break;default:n.vertexAttrib1fv(q.location,oe)}}}}v()}function M(){T();for(const C in i){const R=i[C];for(const E in R){const P=R[E];for(const U in P){const B=P[U];for(const V in B)u(B[V].object),delete B[V];delete P[U]}}delete i[C]}}function S(C){if(i[C.id]===void 0)return;const R=i[C.id];for(const E in R){const P=R[E];for(const U in P){const B=P[U];for(const V in B)u(B[V].object),delete B[V];delete P[U]}}delete i[C.id]}function w(C){for(const R in i){const E=i[R];for(const P in E){const U=E[P];if(U[C.id]===void 0)continue;const B=U[C.id];for(const V in B)u(B[V].object),delete B[V];delete U[C.id]}}}function y(C){for(const R in i){const E=i[R],P=C.isInstancedMesh===!0?C.id:0,U=E[P];if(U!==void 0){for(const B in U){const V=U[B];for(const ne in V)u(V[ne].object),delete V[ne];delete U[B]}delete E[P],Object.keys(E).length===0&&delete i[R]}}}function T(){L(),o=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function SM(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let h=0;h<u;h++)d+=l[h];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Pi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const y=w===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ci&&w!==Wi&&!y&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(gt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:M,samples:S}}function TM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ts,a=new bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,b=v*4;let _=p.clippingState||null;c.value=_,_=u(g,d,b,h);for(let M=0;M!==b;++M)_[M]=t[M];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=h;b!==x;++b,_+=4)o.copy(f[b]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const no=4,EM=6,AM=20,CM=256,Ho=new Wf,Mh=new pt;let Su=null,wu=0,Tu=0,Eu=!1;const RM=new D,dr=new D;class zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=RM}=r;Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,wu,Tu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ki,format:Pi,colorSpace:sl,depthBuffer:!1},s=bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PM(r)),this._blurMaterial=IM(r,e,t),this._ggxMaterial=LM(r,e,t)}return s}_compileMaterial(e){const t=new Vt(new Wt,e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,s,r){const c=new bi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Mh),f.toneMapping=os,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new ut,new Ff({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Mh),p=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const M=this._cubeSize;Jr(s,_*M,b>2?M:0,M,M),f.setRenderTarget(s),p&&f.render(x,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===br||e.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Jr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=l*1.25,h=f*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-no?i-g+no:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,Jr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Ho),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Jr(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Ho)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-no?s-this._lodMax+no:0),d=4*(this._cubeSize-u);Jr(t,f,d,3*u,2*u),o.setRenderTarget(t),o.render(c,Ho)}}function PM(n){const e=[],t=[];let i=n;const s=n-no+1+EM;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,h=3,g=new Float32Array(h*d*f),x=new Float32Array(h*d*f);for(let p=0;p<f;p++){const v=p%3*2/3-1,b=p>2?0:-1,_=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];g.set(_,h*d*p);for(let M=0;M<d;M++){const S=u[M*2]*2-1,w=u[M*2+1]*2-1;p===0?dr.set(1,w,S):p===1?dr.set(-S,1,-w):p===2?dr.set(-S,w,1):p===3?dr.set(-1,w,-S):p===4?dr.set(-S,-1,w):dr.set(S,w,-1),dr.toArray(x,(p*d+M)*h)}}const m=new Wt;m.setAttribute("position",new mn(g,h)),m.setAttribute("outputDirection",new mn(x,h)),t.push(new Vt(m,null)),i>no&&i--}return{lodMeshes:t,sizeLods:e}}function bh(n,e,t){const i=new fi(n,e,t);return i.texture.mapping=Cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function LM(n,e,t){return new qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function IM(n,e,t){return new qt({name:"SphericalGaussianBlur",defines:{SAMPLES:AM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Sh(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function wh(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xf extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ym(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ut(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:ys});r.uniforms.tEquirect.value=t;const o=new Vt(s,r),a=t.minFilter;return t.minFilter===$s&&(t.minFilter=Mn),new Tm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function DM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Zl||h===Jl)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Xf(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===Zl||h===Jl,x=h===br||h===po;if(g||x){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new zd(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new zd(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Zl?d.mapping=br:h===Jl&&(d.mapping=po),d}function c(d){let h=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function UM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&oo("WebGLRenderer: "+i+" extension not supported."),s}}}function kM(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(h!==null){const v=h.array;x=h.version;for(let b=0,_=v.length;b<_;b+=3){const M=v[b+0],S=v[b+1],w=v[b+2];d.push(M,S,S,w,w,M)}}else{const v=g.array;x=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){const M=b+0,S=b+1,w=b+2;d.push(M,S,S,w,w,M)}}const m=new(g.count>=65535?xm:vm)(d,1);m.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function NM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,r,f*o,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let x=0;for(let m=0;m<h;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function FM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function OM(n,e,t){const i=new WeakMap,s=new sn;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var h=L;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let M=a.attributes.position.count*_,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*S*4*f),y=new pm(w,M,S,f);y.type=Wi,y.needsUpdate=!0;const T=_*4;for(let C=0;C<f;C++){const R=p[C],E=v[C],P=b[C],U=M*S*4*C;for(let B=0;B<R.count;B++){const V=B*T;g===!0&&(s.fromBufferAttribute(R,B),w[U+V+0]=s.x,w[U+V+1]=s.y,w[U+V+2]=s.z,w[U+V+3]=0),x===!0&&(s.fromBufferAttribute(E,B),w[U+V+4]=s.x,w[U+V+5]=s.y,w[U+V+6]=s.z,w[U+V+7]=0),m===!0&&(s.fromBufferAttribute(P,B),w[U+V+8]=s.x,w[U+V+9]=s.y,w[U+V+10]=s.z,w[U+V+11]=P.itemSize===4?s.w:1)}}d={count:f,texture:y,size:new Be(M,S)},i.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function zM(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const BM={[Kp]:"LINEAR_TONE_MAPPING",[Qp]:"REINHARD_TONE_MAPPING",[em]:"CINEON_TONE_MAPPING",[tm]:"ACES_FILMIC_TONE_MAPPING",[im]:"AGX_TONE_MAPPING",[sm]:"NEUTRAL_TONE_MAPPING",[nm]:"CUSTOM_TONE_MAPPING"};function GM(n,e,t,i,s,r){const o=new fi(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Wt;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));const u=new Px({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Vt(l,u),d=new Wf(-1,1,1,-1,0,1);let h=null,g=null,x=!1,m,p=null,v=[],b=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),c!==null&&c.setSize(_,M);for(let S=0;S<v.length;S++){const w=v[S];w.setSize&&w.setSize(_,M)}},this.setEffects=function(_){v=_,b=v.length>0&&v[0].isRenderPass===!0;const M=o.width,S=o.height;v.length>0&&a===null&&(a=new fi(M,S,{type:ki,depthBuffer:!1,stencilBuffer:!1}),c=new fi(M,S,{type:ki,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const y=v[w];y.setSize&&y.setSize(M,S)}},this.begin=function(_,M){if(x||_.toneMapping===os&&v.length===0)return!1;if(p=M,M!==null){const S=M.width,w=M.height;(o.width!==S||o.height!==w)&&this.setSize(S,w)}return b===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=os,!0},this.hasRenderPass=function(){return b},this.end=function(_,M){_.toneMapping=m,x=!0;let S=o,w=a;for(let y=0;y<v.length;y++){const T=v[y];T.enabled!==!1&&(T.render(_,w,S,M),T.needsSwap!==!1&&(S=w,w=w===a?c:a))}if(h!==_.outputColorSpace||g!==_.toneMapping){h=_.outputColorSpace,g=_.toneMapping,u.defines={},Bt.getTransfer(h)===en&&(u.defines.SRGB_TRANSFER="");const y=BM[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(f,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Cm=new ni,Bd=new go(1,1),Rm=new pm,Pm=new rx,Lm=new ym,Th=[],Eh=[],Ah=new Float32Array(16),Ch=new Float32Array(9),Rh=new Float32Array(4);function Eo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Th[s];if(r===void 0&&(r=new Float32Array(s),Th[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nl(n,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;n.uniform2fv(this.addr,e),Vn(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gn(t,e))return;n.uniform3fv(this.addr,e),Vn(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;n.uniform4fv(this.addr,e),Vn(t,e)}}function XM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vn(t,e)}else{if(Gn(t,i))return;Rh.set(i),n.uniformMatrix2fv(this.addr,!1,Rh),Vn(t,i)}}function qM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vn(t,e)}else{if(Gn(t,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),Vn(t,i)}}function YM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vn(t,e)}else{if(Gn(t,i))return;Ah.set(i),n.uniformMatrix4fv(this.addr,!1,Ah),Vn(t,i)}}function jM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;n.uniform2iv(this.addr,e),Vn(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gn(t,e))return;n.uniform3iv(this.addr,e),Vn(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;n.uniform4iv(this.addr,e),Vn(t,e)}}function QM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;n.uniform2uiv(this.addr,e),Vn(t,e)}}function t2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gn(t,e))return;n.uniform3uiv(this.addr,e),Vn(t,e)}}function n2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;n.uniform4uiv(this.addr,e),Vn(t,e)}}function i2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bd.compareFunction=t.isReversedDepthBuffer()?Uf:Df,r=Bd):r=Cm,t.setTexture2D(e||r,s)}function s2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pm,s)}function r2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Lm,s)}function o2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rm,s)}function a2(n){switch(n){case 5126:return VM;case 35664:return HM;case 35665:return $M;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return jM;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return KM;case 5125:return QM;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return o2}}function c2(n,e){n.uniform1fv(this.addr,e)}function l2(n,e){const t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function u2(n,e){const t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function d2(n,e){const t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function f2(n,e){const t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h2(n,e){const t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p2(n,e){const t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m2(n,e){n.uniform1iv(this.addr,e)}function g2(n,e){n.uniform2iv(this.addr,e)}function v2(n,e){n.uniform3iv(this.addr,e)}function x2(n,e){n.uniform4iv(this.addr,e)}function _2(n,e){n.uniform1uiv(this.addr,e)}function y2(n,e){n.uniform2uiv(this.addr,e)}function M2(n,e){n.uniform3uiv(this.addr,e)}function b2(n,e){n.uniform4uiv(this.addr,e)}function S2(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);Gn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Bd:o=Cm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function w2(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);Gn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pm,r[o])}function T2(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);Gn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Lm,r[o])}function E2(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);Gn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rm,r[o])}function A2(n){switch(n){case 5126:return c2;case 35664:return l2;case 35665:return u2;case 35666:return d2;case 35674:return f2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return v2;case 35669:case 35673:return x2;case 5125:return _2;case 36294:return y2;case 36295:return M2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return E2}}class C2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a2(t.type)}}class R2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A2(t.type)}}class P2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function Ph(n,e){n.seq.push(e),n.map[e.id]=e}function L2(n,e,t){const i=n.name,s=i.length;for(Au.lastIndex=0;;){const r=Au.exec(i),o=Au.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ph(t,l===void 0?new C2(a,n,e):new R2(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new P2(a),Ph(t,f)),t=f}}}class Uc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);L2(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const I2=37297;let D2=0;function U2(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ih=new bt;function k2(n){Bt._getMatrix(Ih,Bt.workingColorSpace,n);const e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case rl:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+U2(n.getShaderSource(e),a)}else return r}function N2(n,e){const t=k2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const F2={[Kp]:"Linear",[Qp]:"Reinhard",[em]:"Cineon",[tm]:"ACESFilmic",[im]:"AgX",[sm]:"Neutral",[nm]:"Custom"};function O2(n,e){const t=F2[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xc=new D;function z2(){Bt.getLuminanceCoefficients(xc);const n=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function G2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qo(n){return n!==""}function Uh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(n){return n.replace(H2,W2)}const $2=new Map;function W2(n,e){let t=Pt[e];if(t===void 0){const i=$2.get(e);if(i!==void 0)t=Pt[i],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gd(t)}const X2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(X2,q2)}function q2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Y2={[Cc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function j2(n){return Y2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z2={[br]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Cl]:"ENVMAP_TYPE_CUBE_UV"};function J2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Z2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const K2={[po]:"ENVMAP_MODE_REFRACTION"};function Q2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":K2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eb={[Jp]:"ENVMAP_BLENDING_MULTIPLY",[b1]:"ENVMAP_BLENDING_MIX",[S1]:"ENVMAP_BLENDING_ADD"};function tb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":eb[n.combine]||"ENVMAP_BLENDING_NONE"}function nb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ib(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=j2(t),l=J2(t),u=Q2(t),f=tb(t),d=nb(t),h=B2(t),g=G2(r),x=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?Pt.tonemapping_pars_fragment:"",t.toneMapping!==os?O2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,N2("linearToOutputTexel",t.outputColorSpace),z2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Gd(o),o=Uh(o,t),o=kh(o,t),a=Gd(a),a=Uh(a,t),a=kh(a,t),o=Nh(o),a=Nh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=v+m+o,_=v+p+a,M=Lh(s,s.VERTEX_SHADER,b),S=Lh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(x)||"",E=s.getShaderInfoLog(M)||"",P=s.getShaderInfoLog(S)||"",U=R.trim(),B=E.trim(),V=P.trim();let ne=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,S);else{const Y=Dh(s,M,"vertex"),oe=Dh(s,S,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+Y+`
`+oe)}else U!==""?gt("WebGLProgram: Program Info Log:",U):(B===""||V==="")&&(q=!1);q&&(C.diagnostics={runnable:ne,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(M),s.deleteShader(S),y=new Uc(s,x),T=V2(s,x)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,I2)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}let sb=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ob(e),t.set(e,i)),i}}class ob{constructor(e){this.id=sb++,this.code=e,this.usedTimes=0}}function ab(n){return n===Sr||n===nl||n===il}function cb(n,e,t,i,s,r){const o=new mm,a=new rb,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,T,L,C,R,E){const P=C.fog,U=R.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||B,V),q=ne&&ne.mapping===Cl?ne.image.height:null,Y=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&gt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const oe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,De=oe!==void 0?oe.length:0;let Me=0;U.morphAttributes.position!==void 0&&(Me=1),U.morphAttributes.normal!==void 0&&(Me=2),U.morphAttributes.color!==void 0&&(Me=3);let st,Qe,Ce,te;if(Y){const Yt=ns[Y];st=Yt.vertexShader,Qe=Yt.fragmentShader}else{st=y.vertexShader,Qe=y.fragmentShader;const Yt=a.getVertexShaderStage(y),zt=a.getFragmentShaderStage(y);a.update(y,Yt,zt),Ce=Yt.id,te=zt.id}const ue=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),dt=R.isInstancedMesh===!0,Ge=R.isBatchedMesh===!0,ye=!!y.map,cn=!!y.matcap,et=!!ne,Ze=!!y.aoMap,Lt=!!y.lightMap,lt=!!y.bumpMap&&y.wireframe===!1,Tt=!!y.normalMap,un=!!y.displacementMap,Sn=!!y.emissiveMap,dn=!!y.metalnessMap,xn=!!y.roughnessMap,W=y.anisotropy>0,kt=y.clearcoat>0,Ot=y.dispersion>0,F=y.retroreflectivity>0,A=y.iridescence>0,J=y.sheen>0,ae=y.transmission>0,he=W&&!!y.anisotropyMap,Ae=kt&&!!y.clearcoatMap,Re=kt&&!!y.clearcoatNormalMap,pe=kt&&!!y.clearcoatRoughnessMap,ve=A&&!!y.iridescenceMap,Ue=A&&!!y.iridescenceThicknessMap,Ye=J&&!!y.sheenColorMap,Pe=J&&!!y.sheenRoughnessMap,Le=!!y.specularMap,We=!!y.specularColorMap,je=!!y.specularIntensityMap,xt=ae&&!!y.transmissionMap,X=ae&&!!y.thicknessMap,ke=!!y.gradientMap,ge=!!y.alphaMap,Ne=y.alphaTest>0,Ie=!!y.alphaHash,_e=!!y.extensions;let nt=os;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Je={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:Qe,defines:y.defines,customVertexShaderID:Ce,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ge,batchingColor:Ge&&R._colorsTexture!==null,instancing:dt,instancingColor:dt&&R.instanceColor!==null,instancingMorph:dt&&R.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ye,matcap:cn,envMap:et,envMapMode:et&&ne.mapping,envMapCubeUVHeight:q,aoMap:Ze,lightMap:Lt,bumpMap:lt,normalMap:Tt,displacementMap:un,emissiveMap:Sn,normalMapObjectSpace:Tt&&y.normalMapType===E1,normalMapTangentSpace:Tt&&y.normalMapType===Fd,packedNormalMap:Tt&&y.normalMapType===Fd&&ab(y.normalMap.format),metalnessMap:dn,roughnessMap:xn,anisotropy:W,anisotropyMap:he,clearcoat:kt,clearcoatMap:Ae,clearcoatNormalMap:Re,clearcoatRoughnessMap:pe,dispersion:Ot,retroreflection:F,iridescence:A,iridescenceMap:ve,iridescenceThicknessMap:Ue,sheen:J,sheenColorMap:Ye,sheenRoughnessMap:Pe,specularMap:Le,specularColorMap:We,specularIntensityMap:je,transmission:ae,transmissionMap:xt,thicknessMap:X,gradientMap:ke,opaque:y.transparent===!1&&y.blending===oa&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ne,alphaHash:Ie,combine:y.combine,mapUv:ye&&g(y.map.channel),aoMapUv:Ze&&g(y.aoMap.channel),lightMapUv:Lt&&g(y.lightMap.channel),bumpMapUv:lt&&g(y.bumpMap.channel),normalMapUv:Tt&&g(y.normalMap.channel),displacementMapUv:un&&g(y.displacementMap.channel),emissiveMapUv:Sn&&g(y.emissiveMap.channel),metalnessMapUv:dn&&g(y.metalnessMap.channel),roughnessMapUv:xn&&g(y.roughnessMap.channel),anisotropyMapUv:he&&g(y.anisotropyMap.channel),clearcoatMapUv:Ae&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(y.sheenRoughnessMap.channel),specularMapUv:Le&&g(y.specularMap.channel),specularColorMapUv:We&&g(y.specularColorMap.channel),specularIntensityMapUv:je&&g(y.specularIntensityMap.channel),transmissionMapUv:xt&&g(y.transmissionMap.channel),thicknessMapUv:X&&g(y.thicknessMap.channel),alphaMapUv:ge&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Tt||W),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!U.attributes.uv&&(ye||ge),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&Tt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:E.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&Bt.getTransfer(y.map.colorSpace)===en,decodeVideoTextureEmissive:Sn&&y.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(y.emissiveMap.colorSpace)===en,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ai,flipSided:y.side===di,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(T,y),v(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function b(y){const T=h[y.type];let L;if(T){const C=ns[T];L=Ax.clone(C.uniforms)}else L=y.uniforms;return L}function _(y,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new ib(n,T,y,s),l.push(L),u.set(T,L)),L}function M(y){if(--y.usedTimes===0){const T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:w}}function lb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ub(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Oh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,x,m,p){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},n[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function c(d,h,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);const b=a(d,h,g,x,m,p);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):t.push(b)}function l(d,h,g,x,m,p){const v=a(d,h,g,x,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function u(d,h){t.length>1&&t.sort(d||ub),i.length>1&&i.sort(h||Oh),s.length>1&&s.sort(h||Oh)}function f(){for(let d=e,h=n.length;d<h;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function db(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new zh,n.set(i,[o])):s>=r.length?(o=new zh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new pt};break;case"SpotLight":t={position:new D,direction:new D,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function hb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pb=0;function mb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gb(n){const e=new fb,t=hb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,r=new Nt,o=new Nt;function a(l){let u=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,v=0,b=0,_=0,M=0,S=0,w=0,y=0,T=0,L=0;l.sort(mb);for(let R=0,E=l.length;R<E;R++){const P=l[R],U=P.color,B=P.intensity,V=P.distance;let ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Sr?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*B,f+=U.g*B,d+=U.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],B);L++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,oe=t.get(P);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[g]=oe,i.sunShadowMap[g]=ne;const De=Y.getViewportCount();for(let Me=0;Me<De;Me++)i.sunShadowMatrix[x+Me]=Y.getMatrix(Me),i.sunShadowCascade[x+Me]=Y._cascadeData[Me];x+=De,g++}i.sun[h]=q,h++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,oe=t.get(P);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,i.directionalShadow[m]=oe,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=P.shadow.matrix,M++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(U).multiplyScalar(B),q.distance=V,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[v]=q;const Y=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,Y.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[v]=Y.matrix,P.castShadow){const oe=t.get(P);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,i.spotShadow[v]=oe,i.spotShadowMap[v]=ne,w++}v++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(U).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=q,b++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Y=P.shadow,oe=t.get(P);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,oe.shadowCameraNear=Y.camera.near,oe.shadowCameraFar=Y.camera.far,i.pointShadow[p]=oe,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=P.shadow.matrix,S++}i.point[p]=q,p++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[_]=q,_++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.sunLength!==h||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==b||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==w||C.numSpotMaps!==y||C.numLightProbes!==L)&&(i.sun.length=h,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,C.sunLength=h,C.directionalLength=m,C.pointLength=p,C.spotLength=v,C.rectAreaLength=b,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=w,C.numSpotMaps=y,C.numLightProbes=L,i.version=pb++)}function c(l,u){let f=0,d=0,h=0,g=0,x=0,m=0;const p=u.matrixWorldInverse;for(let v=0,b=l.length;v<b;v++){const _=l[v];if(_.isSunLight){const M=i.sun[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),f++}else if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Bh(n){const e=new gb(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function vb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Bh(n),e.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
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
}`,yb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Mb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Gh=new Nt,$o=new D,Cu=new D;function bb(n,e,t){let i=new Of;const s=new Be,r=new Be,o=new sn,a=new Lx,c=new Ix,l={},u=t.maxTextureSize,f={[Mr]:di,[di]:Mr,[ai]:ai},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:xb,fragmentShader:_b}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let p=this.type;this.render=function(S,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===i1&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cc);const T=n.getRenderTarget(),L=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),R=n.state;R.setBlending(ys),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const E=p!==this.type;E&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=S.length;P<U;P++){const B=S[P],V=B.shadow;if(V===void 0){gt("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ne=V.getFrameExtents();s.multiply(ne),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||E===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Jo){if(B.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new fi(s.x,s.y,{format:Sr,type:ki,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new go(s.x,s.y,Wi),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=ws,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zn,V.map.depthTexture.magFilter=zn}else B.isPointLight?(V.map=new Xf(s.x),V.map.depthTexture=new Tx(s.x,Ki)):(V.map=new fi(s.x,s.y),V.map.depthTexture=new go(s.x,s.y,Ki)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=ws,this.type===Cc?(V.map.depthTexture.compareFunction=q?Uf:Df,V.map.depthTexture.minFilter=Mn,V.map.depthTexture.magFilter=Mn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zn,V.map.depthTexture.magFilter=zn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const Y=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();B.isPointLight!==!0&&V.updateMatrices(B,y);for(let oe=0;oe<Y;oe++){const De=V.getCamera(oe);if(B.isPointLight){const Me=V.camera,st=V.matrix,Qe=B.distance||Me.far;Qe!==Me.far&&(Me.far=Qe,Me.updateProjectionMatrix()),$o.setFromMatrixPosition(B.matrixWorld),Me.position.copy($o),Cu.copy(Me.position),Cu.add(yb[oe]),Me.up.copy(Mb[oe]),Me.lookAt(Cu),Me.updateMatrixWorld(),st.makeTranslation(-$o.x,-$o.y,-$o.z),Gh.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Gh,Me.coordinateSystem,Me.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(V.map),n.clear());const Me=V.getViewport(oe);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),R.viewport(o)}i=V.getFrustum(oe),_(w,y,De,B,this.type)}V.isPointLightShadow!==!0&&this.type===Jo&&v(V,y),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,L,C)};function v(S,w){const y=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null?S.mapPass=new fi(s.x,s.y,{format:Sr,type:ki}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,y,d,x,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,y,h,x,null)}function b(S,w,y,T){let L=null;const C=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)L=C;else if(L=y.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const R=L.uuid,E=w.uuid;let P=l[R];P===void 0&&(P={},l[R]=P);let U=P[E];U===void 0&&(U=L.clone(),P[E]=U,w.addEventListener("dispose",M)),L=U}if(L.visible=w.visible,L.wireframe=w.wireframe,T===Jo?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:f[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const R=n.properties.get(L);R.light=y}return L}function _(S,w,y,T,L){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Jo)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);const E=e.update(S),P=S.material;if(Array.isArray(P)){const U=E.groups;for(let B=0,V=U.length;B<V;B++){const ne=U[B],q=P[ne.materialIndex];if(q&&q.visible){const Y=b(S,q,T,L);S.onBeforeShadow(n,S,w,y,E,Y,ne),n.renderBufferDirect(y,null,E,Y,S,ne),S.onAfterShadow(n,S,w,y,E,Y,ne)}}}else if(P.visible){const U=b(S,P,T,L);S.onBeforeShadow(n,S,w,y,E,U,null),n.renderBufferDirect(y,null,E,U,S,null),S.onAfterShadow(n,S,w,y,E,U,null)}}const R=S.children;for(let E=0,P=R.length;E<P;E++)_(R[E],w,y,T,L)}function M(S){S.target.removeEventListener("dispose",M);for(const y in l){const T=l[y],L=S.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function Sb(n,e){function t(){let X=!1;const ke=new sn;let ge=null;const Ne=new sn(0,0,0,0);return{setMask:function(Ie){ge!==Ie&&!X&&(n.colorMask(Ie,Ie,Ie,Ie),ge=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,_e,nt,Je,Yt){Yt===!0&&(Ie*=Je,_e*=Je,nt*=Je),ke.set(Ie,_e,nt,Je),Ne.equals(ke)===!1&&(n.clearColor(Ie,_e,nt,Je),Ne.copy(ke))},reset:function(){X=!1,ge=null,Ne.set(-1,0,0,0)}}}function i(){let X=!1,ke=!1,ge=null,Ne=null,Ie=null;return{setReversed:function(_e){if(ke!==_e){const nt=e.get("EXT_clip_control");_e?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),ke=_e;const Je=Ie;Ie=null,this.setClear(Je)}},getReversed:function(){return ke},setTest:function(_e){_e?ue(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(_e){ge!==_e&&!X&&(n.depthMask(_e),ge=_e)},setFunc:function(_e){if(ke&&(_e=F1[_e]),Ne!==_e){switch(_e){case Qu:n.depthFunc(n.NEVER);break;case ed:n.depthFunc(n.ALWAYS);break;case td:n.depthFunc(n.LESS);break;case _a:n.depthFunc(n.LEQUAL);break;case nd:n.depthFunc(n.EQUAL);break;case id:n.depthFunc(n.GEQUAL);break;case sd:n.depthFunc(n.GREATER);break;case rd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Ie!==_e&&(Ie=_e,ke&&(_e=1-_e),n.clearDepth(_e))},reset:function(){X=!1,ge=null,Ne=null,Ie=null,ke=!1}}}function s(){let X=!1,ke=null,ge=null,Ne=null,Ie=null,_e=null,nt=null,Je=null,Yt=null;return{setTest:function(zt){X||(zt?ue(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(zt){ke!==zt&&!X&&(n.stencilMask(zt),ke=zt)},setFunc:function(zt,Dn,Ti){(ge!==zt||Ne!==Dn||Ie!==Ti)&&(n.stencilFunc(zt,Dn,Ti),ge=zt,Ne=Dn,Ie=Ti)},setOp:function(zt,Dn,Ti){(_e!==zt||nt!==Dn||Je!==Ti)&&(n.stencilOp(zt,Dn,Ti),_e=zt,nt=Dn,Je=Ti)},setLocked:function(zt){X=zt},setClear:function(zt){Yt!==zt&&(n.clearStencil(zt),Yt=zt)},reset:function(){X=!1,ke=null,ge=null,Ne=null,Ie=null,_e=null,nt=null,Je=null,Yt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],x=null,m=!1,p=null,v=null,b=null,_=null,M=null,S=null,w=null,y=new pt(0,0,0),T=0,L=!1,C=null,R=null,E=null,P=null,U=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=ne>=2);let Y=null,oe={};const De=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),st=new sn().fromArray(De),Qe=new sn().fromArray(Me);function Ce(X,ke,ge,Ne){const Ie=new Uint8Array(4),_e=n.createTexture();n.bindTexture(X,_e),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ge;nt++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(ke,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(ke+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return _e}const te={};te[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(_a),lt(!1),Tt(F0),ue(n.CULL_FACE),Ze(ys);function ue(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function we(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function dt(X,ke){return d[X]!==ke?(n.bindFramebuffer(X,ke),d[X]=ke,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ke),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ke),!0):!1}function Ge(X,ke){let ge=g,Ne=!1;if(X){ge=h.get(ke),ge===void 0&&(ge=[],h.set(ke,ge));const Ie=X.textures;if(ge.length!==Ie.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,nt=Ie.length;_e<nt;_e++)ge[_e]=n.COLOR_ATTACHMENT0+_e;ge.length=Ie.length,Ne=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(ge)}function ye(X){return x!==X?(n.useProgram(X),x=X,!0):!1}const cn={[eo]:n.FUNC_ADD,[r1]:n.FUNC_SUBTRACT,[o1]:n.FUNC_REVERSE_SUBTRACT};cn[a1]=n.MIN,cn[c1]=n.MAX;const et={[l1]:n.ZERO,[u1]:n.ONE,[d1]:n.SRC_COLOR,[jp]:n.SRC_ALPHA,[v1]:n.SRC_ALPHA_SATURATE,[m1]:n.DST_COLOR,[h1]:n.DST_ALPHA,[f1]:n.ONE_MINUS_SRC_COLOR,[Zp]:n.ONE_MINUS_SRC_ALPHA,[g1]:n.ONE_MINUS_DST_COLOR,[p1]:n.ONE_MINUS_DST_ALPHA,[x1]:n.CONSTANT_COLOR,[_1]:n.ONE_MINUS_CONSTANT_COLOR,[y1]:n.CONSTANT_ALPHA,[M1]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(X,ke,ge,Ne,Ie,_e,nt,Je,Yt,zt){if(X===ys){m===!0&&(we(n.BLEND),m=!1);return}if(m===!1&&(ue(n.BLEND),m=!0),X!==s1){if(X!==p||zt!==L){if((v!==eo||M!==eo)&&(n.blendEquation(n.FUNC_ADD),v=eo,M=eo),zt)switch(X){case oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFunc(n.ONE,n.ONE);break;case O0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case z0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",X);break}else switch(X){case oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case O0:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z0:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",X);break}b=null,_=null,S=null,w=null,y.set(0,0,0),T=0,p=X,L=zt}return}Ie=Ie||ke,_e=_e||ge,nt=nt||Ne,(ke!==v||Ie!==M)&&(n.blendEquationSeparate(cn[ke],cn[Ie]),v=ke,M=Ie),(ge!==b||Ne!==_||_e!==S||nt!==w)&&(n.blendFuncSeparate(et[ge],et[Ne],et[_e],et[nt]),b=ge,_=Ne,S=_e,w=nt),(Je.equals(y)===!1||Yt!==T)&&(n.blendColor(Je.r,Je.g,Je.b,Yt),y.copy(Je),T=Yt),p=X,L=!1}function Lt(X,ke){X.side===ai?we(n.CULL_FACE):ue(n.CULL_FACE);let ge=X.side===di;ke&&(ge=!ge),lt(ge),X.blending===oa&&X.transparent===!1?Ze(ys):Ze(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Ne=X.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Sn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(X){C!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),C=X)}function Tt(X){X!==t1?(ue(n.CULL_FACE),X!==R&&(X===F0?n.cullFace(n.BACK):X===n1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),R=X}function un(X){X!==E&&(V&&n.lineWidth(X),E=X)}function Sn(X,ke,ge){X?(ue(n.POLYGON_OFFSET_FILL),(P!==ke||U!==ge)&&(P=ke,U=ge,o.getReversed()&&(ke=-ke),n.polygonOffset(ke,ge))):we(n.POLYGON_OFFSET_FILL)}function dn(X){X?ue(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function xn(X){X===void 0&&(X=n.TEXTURE0+B-1),Y!==X&&(n.activeTexture(X),Y=X)}function W(X,ke,ge){ge===void 0&&(Y===null?ge=n.TEXTURE0+B-1:ge=Y);let Ne=oe[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},oe[ge]=Ne),(Ne.type!==X||Ne.texture!==ke)&&(Y!==ge&&(n.activeTexture(ge),Y=ge),n.bindTexture(X,ke||te[X]),Ne.type=X,Ne.texture=ke)}function kt(){const X=oe[Y];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ot(){try{n.compressedTexImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function A(){try{n.texSubImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function J(){try{n.texSubImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Ae(){try{n.texStorage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Re(){try{n.texStorage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function pe(){try{n.texImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function ve(){try{n.texImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Ue(X){return f[X]!==void 0?f[X]:n.getParameter(X)}function Ye(X,ke){f[X]!==ke&&(n.pixelStorei(X,ke),f[X]=ke)}function Pe(X){st.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),st.copy(X))}function Le(X){Qe.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Qe.copy(X))}function We(X,ke){let ge=l.get(ke);ge===void 0&&(ge=new WeakMap,l.set(ke,ge));let Ne=ge.get(X);Ne===void 0&&(Ne=n.getUniformBlockIndex(ke,X.name),ge.set(X,Ne))}function je(X,ke){const Ne=l.get(ke).get(X);c.get(ke)!==Ne&&(n.uniformBlockBinding(ke,Ne,X.__bindingPointIndex),c.set(ke,Ne))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},Y=null,oe={},d={},h=new WeakMap,g=[],x=null,m=!1,p=null,v=null,b=null,_=null,M=null,S=null,w=null,y=new pt(0,0,0),T=0,L=!1,C=null,R=null,E=null,P=null,U=null,st.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:we,bindFramebuffer:dt,drawBuffers:Ge,useProgram:ye,setBlending:Ze,setMaterial:Lt,setFlipSided:lt,setCullFace:Tt,setLineWidth:un,setPolygonOffset:Sn,setScissorTest:dn,activeTexture:xn,bindTexture:W,unbindTexture:kt,compressedTexImage2D:Ot,compressedTexImage3D:F,texImage2D:pe,texImage3D:ve,pixelStorei:Ye,getParameter:Ue,updateUBOMapping:We,uniformBlockBinding:je,texStorage2D:Ae,texStorage3D:Re,texSubImage2D:A,texSubImage3D:J,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Pe,viewport:Le,reset:xt}}function wb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,A){return g?new OffscreenCanvas(F,A):ol("canvas")}function m(F,A,J){let ae=1;const he=Ot(F);if((he.width>J||he.height>J)&&(ae=J/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Ae=Math.floor(ae*he.width),Re=Math.floor(ae*he.height);d===void 0&&(d=x(Ae,Re));const pe=A?x(Ae,Re):d;return pe.width=Ae,pe.height=Re,pe.getContext("2d").drawImage(F,0,0,Ae,Re),gt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+Re+")."),pe}else return"data"in F&&gt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function p(F){return F.generateMipmaps}function v(F){n.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(F,A,J,ae,he,Ae=!1){if(F!==null){if(n[F]!==void 0)return n[F];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=A;if(A===n.RED&&(J===n.FLOAT&&(pe=n.R32F),J===n.HALF_FLOAT&&(pe=n.R16F),J===n.UNSIGNED_BYTE&&(pe=n.R8),J===n.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),J===n.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.R8UI),J===n.UNSIGNED_SHORT&&(pe=n.R16UI),J===n.UNSIGNED_INT&&(pe=n.R32UI),J===n.BYTE&&(pe=n.R8I),J===n.SHORT&&(pe=n.R16I),J===n.INT&&(pe=n.R32I)),A===n.RG&&(J===n.FLOAT&&(pe=n.RG32F),J===n.HALF_FLOAT&&(pe=n.RG16F),J===n.UNSIGNED_BYTE&&(pe=n.RG8),J===n.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),J===n.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RG8UI),J===n.UNSIGNED_SHORT&&(pe=n.RG16UI),J===n.UNSIGNED_INT&&(pe=n.RG32UI),J===n.BYTE&&(pe=n.RG8I),J===n.SHORT&&(pe=n.RG16I),J===n.INT&&(pe=n.RG32I)),A===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),J===n.UNSIGNED_INT&&(pe=n.RGB32UI),J===n.BYTE&&(pe=n.RGB8I),J===n.SHORT&&(pe=n.RGB16I),J===n.INT&&(pe=n.RGB32I)),A===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),J===n.UNSIGNED_INT&&(pe=n.RGBA32UI),J===n.BYTE&&(pe=n.RGBA8I),J===n.SHORT&&(pe=n.RGBA16I),J===n.INT&&(pe=n.RGBA32I)),A===n.RGB&&(J===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),J===n.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),A===n.RGBA){const ve=Ae?rl:Bt.getTransfer(he);J===n.FLOAT&&(pe=n.RGBA32F),J===n.HALF_FLOAT&&(pe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(pe=ve===en?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),J===n.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function M(F,A){let J;return F?A===null||A===Ki||A===ba?J=n.DEPTH24_STENCIL8:A===Wi?J=n.DEPTH32F_STENCIL8:A===Ma&&(J=n.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ki||A===ba?J=n.DEPTH_COMPONENT24:A===Wi?J=n.DEPTH_COMPONENT32F:A===Ma&&(J=n.DEPTH_COMPONENT16),J}function S(F,A){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==zn&&F.minFilter!==Mn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function w(F){const A=F.target;A.removeEventListener("dispose",w),T(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function y(F){const A=F.target;A.removeEventListener("dispose",y),C(A)}function T(F){const A=i.get(F);if(A.__webglInit===void 0)return;const J=F.source,ae=h.get(J);if(ae){const he=ae[A.__cacheKey];he.usedTimes--,he.usedTimes===0&&L(F),Object.keys(ae).length===0&&h.delete(J)}i.remove(F)}function L(F){const A=i.get(F);n.deleteTexture(A.__webglTexture);const J=F.source,ae=h.get(J);delete ae[A.__cacheKey],o.memory.textures--}function C(F){const A=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let he=0;he<A.__webglFramebuffer[ae].length;he++)n.deleteFramebuffer(A.__webglFramebuffer[ae][he]);else n.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)n.deleteFramebuffer(A.__webglFramebuffer[ae]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=F.textures;for(let ae=0,he=J.length;ae<he;ae++){const Ae=i.get(J[ae]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(J[ae])}i.remove(F)}let R=0;function E(){R=0}function P(){return R}function U(F){R=F}function B(){const F=R;return F>=s.maxTextures&&gt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,F}function V(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function ne(F,A){const J=i.get(F);if(F.isVideoTexture&&W(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const ae=F.image;if(ae===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(J,F,A);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function q(F,A){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){we(J,F,A);return}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function Y(F,A){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){we(J,F,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function oe(F,A){const J=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&J.__version!==F.version){dt(J,F,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}const De={[ya]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[od]:n.MIRRORED_REPEAT},Me={[zn]:n.NEAREST,[w1]:n.NEAREST_MIPMAP_NEAREST,[Va]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Kl]:n.LINEAR_MIPMAP_NEAREST,[$s]:n.LINEAR_MIPMAP_LINEAR},st={[C1]:n.NEVER,[D1]:n.ALWAYS,[R1]:n.LESS,[Df]:n.LEQUAL,[P1]:n.EQUAL,[Uf]:n.GEQUAL,[L1]:n.GREATER,[I1]:n.NOTEQUAL};function Qe(F,A){if(A.type===Wi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Mn||A.magFilter===Kl||A.magFilter===Va||A.magFilter===$s||A.minFilter===Mn||A.minFilter===Kl||A.minFilter===Va||A.minFilter===$s)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,De[A.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,De[A.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,De[A.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,Me[A.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,Me[A.minFilter]),A.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,st[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===zn||A.minFilter!==Va&&A.minFilter!==$s||A.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ce(F,A){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",w));const ae=A.source;let he=h.get(ae);he===void 0&&(he={},h.set(ae,he));const Ae=V(A);if(Ae!==F.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),he[Ae].usedTimes++;const Re=he[F.__cacheKey];Re!==void 0&&(he[F.__cacheKey].usedTimes--,Re.usedTimes===0&&L(A)),F.__cacheKey=Ae,F.__webglTexture=he[Ae].texture}return J}function te(F,A,J){return Math.floor(Math.floor(F/J)/A)}function ue(F,A,J,ae){const Ae=F.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,J,ae,A.data);else{Ae.sort((Ye,Pe)=>Ye.start-Pe.start);let Re=0;for(let Ye=1;Ye<Ae.length;Ye++){const Pe=Ae[Re],Le=Ae[Ye],We=Pe.start+Pe.count,je=te(Le.start,A.width,4),xt=te(Pe.start,A.width,4);Le.start<=We+1&&je===xt&&te(Le.start+Le.count-1,A.width,4)===je?Pe.count=Math.max(Pe.count,Le.start+Le.count-Pe.start):(++Re,Ae[Re]=Le)}Ae.length=Re+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let Ye=0,Pe=Ae.length;Ye<Pe;Ye++){const Le=Ae[Ye],We=Math.floor(Le.start/4),je=Math.ceil(Le.count/4),xt=We%A.width,X=Math.floor(We/A.width),ke=je,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,xt,X,ke,ge,J,ae,A.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function we(F,A,J){let ae=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=n.TEXTURE_3D);const he=Ce(F,A),Ae=A.source;t.bindTexture(ae,F.__webglTexture,n.TEXTURE0+J);const Re=i.get(Ae);if(Ae.version!==Re.__version||he===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ge=Bt.getPrimaries(Bt.workingColorSpace),Ne=A.colorSpace===Vs?null:Bt.getPrimaries(A.colorSpace),Ie=A.colorSpace===Vs||ge===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let ve=m(A.image,!1,s.maxTextureSize);ve=kt(A,ve);const Ue=r.convert(A.format,A.colorSpace),Ye=r.convert(A.type);let Pe=_(A.internalFormat,Ue,Ye,A.normalized,A.colorSpace,A.isVideoTexture);Qe(ae,A);let Le;const We=A.mipmaps,je=A.isVideoTexture!==!0,xt=Re.__version===void 0||he===!0,X=Ae.dataReady,ke=S(A,ve);if(A.isDepthTexture)Pe=M(A.format===mr,A.type),xt&&(je?t.texStorage2D(n.TEXTURE_2D,1,Pe,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ve.width,ve.height,0,Ue,Ye,null));else if(A.isDataTexture)if(We.length>0){je&&xt&&t.texStorage2D(n.TEXTURE_2D,ke,Pe,We[0].width,We[0].height);for(let ge=0,Ne=We.length;ge<Ne;ge++)Le=We[ge],je?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ue,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Ue,Ye,Le.data);A.generateMipmaps=!1}else je?(xt&&t.texStorage2D(n.TEXTURE_2D,ke,Pe,ve.width,ve.height),X&&ue(A,ve,Ue,Ye)):t.texImage2D(n.TEXTURE_2D,0,Pe,ve.width,ve.height,0,Ue,Ye,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){je&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Pe,We[0].width,We[0].height,ve.depth);for(let ge=0,Ne=We.length;ge<Ne;ge++)if(Le=We[ge],A.format!==Pi)if(Ue!==null)if(je){if(X)if(A.layerUpdates.size>0){const Ie=yh(Le.width,Le.height,A.format,A.type);for(const _e of A.layerUpdates){const nt=Le.data.subarray(_e*Ie/Le.data.BYTES_PER_ELEMENT,(_e+1)*Ie/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,_e,Le.width,Le.height,1,Ue,nt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ve.depth,Ue,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,ve.depth,0,Le.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ve.depth,Ue,Ye,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,ve.depth,0,Ue,Ye,Le.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{je&&xt&&t.texStorage2D(n.TEXTURE_2D,ke,Pe,We[0].width,We[0].height);for(let ge=0,Ne=We.length;ge<Ne;ge++)Le=We[ge],A.format!==Pi?Ue!==null?je?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Le.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ue,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Ue,Ye,Le.data)}else if(A.isDataArrayTexture)if(je){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Pe,ve.width,ve.height,ve.depth),X)if(A.layerUpdates.size>0){const ge=yh(ve.width,ve.height,A.format,A.type);for(const Ne of A.layerUpdates){const Ie=ve.data.subarray(Ne*ge/ve.data.BYTES_PER_ELEMENT,(Ne+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,ve.width,ve.height,1,Ue,Ye,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Ye,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ve.width,ve.height,ve.depth,0,Ue,Ye,ve.data);else if(A.isData3DTexture)je?(xt&&t.texStorage3D(n.TEXTURE_3D,ke,Pe,ve.width,ve.height,ve.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Ye,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ve.width,ve.height,ve.depth,0,Ue,Ye,ve.data);else if(A.isFramebufferTexture){if(xt)if(je)t.texStorage2D(n.TEXTURE_2D,ke,Pe,ve.width,ve.height);else{let ge=ve.width,Ne=ve.height;for(let Ie=0;Ie<ke;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Pe,ge,Ne,0,Ue,Ye,null),ge>>=1,Ne>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),f.add(A),ge.onpaint=Ne=>{const Ie=Ne.changedElements;for(const _e of f)Ie.includes(_e.image)&&(_e.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const Ie=n.RGBA,_e=n.RGBA,nt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ie,_e,nt,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(je&&xt){const ge=Ot(We[0]);t.texStorage2D(n.TEXTURE_2D,ke,Pe,ge.width,ge.height)}for(let ge=0,Ne=We.length;ge<Ne;ge++)Le=We[ge],je?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ue,Ye,Le):t.texImage2D(n.TEXTURE_2D,ge,Pe,Ue,Ye,Le);A.generateMipmaps=!1}else if(je){if(xt){const ge=Ot(ve);t.texStorage2D(n.TEXTURE_2D,ke,Pe,ge.width,ge.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Ye,ve)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Ue,Ye,ve);p(A)&&v(ae),Re.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function dt(F,A,J){if(A.image.length!==6)return;const ae=Ce(F,A),he=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+J);const Ae=i.get(he);if(he.version!==Ae.__version||ae===!0){t.activeTexture(n.TEXTURE0+J);const Re=Bt.getPrimaries(Bt.workingColorSpace),pe=A.colorSpace===Vs?null:Bt.getPrimaries(A.colorSpace),ve=A.colorSpace===Vs||Re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ue=A.isCompressedTexture||A.image[0].isCompressedTexture,Ye=A.image[0]&&A.image[0].isDataTexture,Pe=[];for(let _e=0;_e<6;_e++)!Ue&&!Ye?Pe[_e]=m(A.image[_e],!0,s.maxCubemapSize):Pe[_e]=Ye?A.image[_e].image:A.image[_e],Pe[_e]=kt(A,Pe[_e]);const Le=Pe[0],We=r.convert(A.format,A.colorSpace),je=r.convert(A.type),xt=_(A.internalFormat,We,je,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,ke=Ae.__version===void 0||ae===!0,ge=he.dataReady;let Ne=S(A,Le);Qe(n.TEXTURE_CUBE_MAP,A);let Ie;if(Ue){X&&ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,xt,Le.width,Le.height);for(let _e=0;_e<6;_e++){Ie=Pe[_e].mipmaps;for(let nt=0;nt<Ie.length;nt++){const Je=Ie[nt];A.format!==Pi?We!==null?X?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,Je.width,Je.height,We,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,xt,Je.width,Je.height,0,Je.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,Je.width,Je.height,We,je,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,xt,Je.width,Je.height,0,We,je,Je.data)}}}else{if(Ie=A.mipmaps,X&&ke){Ie.length>0&&Ne++;const _e=Ot(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,xt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ye){X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe[_e].width,Pe[_e].height,We,je,Pe[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,xt,Pe[_e].width,Pe[_e].height,0,We,je,Pe[_e].data);for(let nt=0;nt<Ie.length;nt++){const Yt=Ie[nt].image[_e].image;X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,Yt.width,Yt.height,We,je,Yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,xt,Yt.width,Yt.height,0,We,je,Yt.data)}}else{X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,We,je,Pe[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,xt,We,je,Pe[_e]);for(let nt=0;nt<Ie.length;nt++){const Je=Ie[nt];X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,We,je,Je.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,xt,We,je,Je.image[_e])}}}p(A)&&v(n.TEXTURE_CUBE_MAP),Ae.__version=he.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Ge(F,A,J,ae,he,Ae){const Re=r.convert(J.format,J.colorSpace),pe=r.convert(J.type),ve=_(J.internalFormat,Re,pe,J.normalized,J.colorSpace),Ue=i.get(A),Ye=i.get(J);if(Ye.__renderTarget=A,!Ue.__hasExternalTextures){const Pe=Math.max(1,A.width>>Ae),Le=Math.max(1,A.height>>Ae);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Ae,ve,Pe,Le,A.depth,0,Re,pe,null):t.texImage2D(he,Ae,ve,Pe,Le,0,Re,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),xn(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,he,Ye.__webglTexture,0,dn(A)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,he,Ye.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(F,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,F),A.depthBuffer){const ae=A.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Ae=M(A.stencilBuffer,he),Re=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xn(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dn(A),Ae,A.width,A.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,dn(A),Ae,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,F)}else{const ae=A.textures;for(let he=0;he<ae.length;he++){const Ae=ae[he],Re=r.convert(Ae.format,Ae.colorSpace),pe=r.convert(Ae.type),ve=_(Ae.internalFormat,Re,pe,Ae.normalized,Ae.colorSpace);xn(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dn(A),ve,A.width,A.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,dn(A),ve,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ve,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function cn(F,A,J){const ae=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(A.depthTexture);if(he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,A.depthTexture);const Ue=r.convert(A.depthTexture.format),Ye=r.convert(A.depthTexture.type);let Pe;A.depthTexture.format===ws?Pe=n.DEPTH_COMPONENT24:A.depthTexture.format===mr&&(Pe=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Pe,A.width,A.height,0,Ue,Ye,null)}}else ne(A.depthTexture,0);const Ae=he.__webglTexture,Re=dn(A),pe=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ve=A.depthTexture.format===mr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===ws)xn(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Ae,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Ae,0);else if(A.depthTexture.format===mr)xn(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Ae,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(F){const A=i.get(F),J=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const ae=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ae){const he=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),A.__depthDisposeCallback=he}A.__boundDepthTexture=ae}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let ae=0;ae<6;ae++)cn(A.__webglFramebuffer[ae],F,ae);else{const ae=F.texture.mipmaps;ae&&ae.length>0?cn(A.__webglFramebuffer[0],F,0):cn(A.__webglFramebuffer,F,0)}else if(J){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]===void 0)A.__webglDepthbuffer[ae]=n.createRenderbuffer(),ye(A.__webglDepthbuffer[ae],F,!1);else{const he=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ae)}}else{const ae=F.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),ye(A.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(F,A,J){const ae=i.get(F);A!==void 0&&Ge(ae.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&et(F)}function Lt(F){const A=F.texture,J=i.get(F),ae=i.get(A);F.addEventListener("dispose",y);const he=F.textures,Ae=F.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=A.version,o.memory.textures++),Ae){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let ve=0;ve<A.mipmaps.length;ve++)J.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else J.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)J.__webglFramebuffer[pe]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Re)for(let pe=0,ve=he.length;pe<ve;pe++){const Ue=i.get(he[pe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&xn(F)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ve=he[pe];J.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const Ue=r.convert(ve.format,ve.colorSpace),Ye=r.convert(ve.type),Pe=_(ve.internalFormat,Ue,Ye,ve.normalized,ve.colorSpace,F.isXRRenderTarget===!0),Le=dn(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Pe,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)Ge(J.__webglFramebuffer[pe][ve],F,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else Ge(J.__webglFramebuffer[pe],F,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(A)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,ve=he.length;pe<ve;pe++){const Ue=he[pe],Ye=i.get(Ue);let Pe=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Pe=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ye.__webglTexture),Qe(Pe,Ue),Ge(J.__webglFramebuffer,F,Ue,n.COLOR_ATTACHMENT0+pe,Pe,0),p(Ue)&&v(Pe)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pe=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Qe(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)Ge(J.__webglFramebuffer[ve],F,A,n.COLOR_ATTACHMENT0,pe,ve);else Ge(J.__webglFramebuffer,F,A,n.COLOR_ATTACHMENT0,pe,0);p(A)&&v(pe),t.unbindTexture()}F.depthBuffer&&et(F)}function lt(F){const A=F.textures;for(let J=0,ae=A.length;J<ae;J++){const he=A[J];if(p(he)){const Ae=b(F),Re=i.get(he).__webglTexture;t.bindTexture(Ae,Re),v(Ae),t.unbindTexture()}}}const Tt=[],un=[];function Sn(F){if(F.samples>0){if(xn(F)===!1){const A=F.textures,J=F.width,ae=F.height;let he=n.COLOR_BUFFER_BIT;const Ae=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(F),pe=A.length>1;if(pe)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ve=F.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ue]);const Ye=i.get(A[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,J,ae,0,0,J,ae,he,n.NEAREST),c===!0&&(Tt.length=0,un.length=0,Tt.push(n.COLOR_ATTACHMENT0+Ue),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Tt.push(Ae),un.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,un)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ue]);const Ye=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){const A=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function dn(F){return Math.min(s.maxSamples,F.samples)}function xn(F){const A=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function W(F){const A=o.render.frame;u.get(F)!==A&&(u.set(F,A),F.update())}function kt(F,A){const J=F.colorSpace,ae=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==sl&&J!==Vs&&(Bt.getTransfer(J)===en?(ae!==Pi||he!==ci)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",J)),A}function Ot(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=E,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=oe,this.rebindTextures=Ze,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=xn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tb(n,e){function t(i,s=Vs){let r;const o=Bt.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===Af)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===om)return n.BYTE;if(i===am)return n.SHORT;if(i===Ma)return n.UNSIGNED_SHORT;if(i===Ef)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Wi)return n.FLOAT;if(i===ki)return n.HALF_FLOAT;if(i===um)return n.ALPHA;if(i===dm)return n.RGB;if(i===Pi)return n.RGBA;if(i===ws)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===Rf)return n.RED;if(i===Pf)return n.RED_INTEGER;if(i===Sr)return n.RG;if(i===Lf)return n.RG_INTEGER;if(i===If)return n.RGBA_INTEGER;if(i===Rc||i===Pc||i===Lc||i===Ic)if(o===en)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ic)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ad||i===cd||i===ld||i===ud)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ad)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ld)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ud)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dd||i===fd||i===hd||i===pd||i===md||i===nl||i===gd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dd||i===fd)return o===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pd)return r.COMPRESSED_R11_EAC;if(i===md)return r.COMPRESSED_SIGNED_R11_EAC;if(i===nl)return r.COMPRESSED_RG11_EAC;if(i===gd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vd||i===xd||i===_d||i===yd||i===Md||i===bd||i===Sd||i===wd||i===Td||i===Ed||i===Ad||i===Cd||i===Rd||i===Pd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_d)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Md)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Td)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ed)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ad)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pd)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ld||i===Id||i===Dd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ld)return o===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Id)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ud||i===kd||i===il||i===Nd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ud)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
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

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qt({vertexShader:Eb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends wr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Cb,p={},v=t.getContextAttributes();let b=null,_=null;const M=[],S=[],w=new Be;let y=null,T=null;const L=new bi;L.viewport=new sn;const C=new bi;C.viewport=new sn;const R=[L,C],E=new Nx;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=M[te];return ue===void 0&&(ue=new ru,M[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=M[te];return ue===void 0&&(ue=new ru,M[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=M[te];return ue===void 0&&(ue=new ru,M[te]=ue),ue.getHandSpace()};function B(te){const ue=S.indexOf(te.inputSource);if(ue===-1)return;const we=M[ue];we!==void 0&&(we.update(te.inputSource,te.frame,l||o),we.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ne);for(let te=0;te<M.length;te++){const ue=S[te];ue!==null&&(S[te]=null,M[te].disconnect(ue))}P=null,U=null,m.reset();for(const te in p)delete p[te];if(e.setRenderTarget(b),h=null,d=null,f=null,s=null,_=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),T!==null){const te=T.camera;te.fov=T.fov,te.zoom=T.zoom,te.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,dt=null,Ge=null;v.depth&&(Ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=v.stencil?mr:ws,dt=v.stencil?ba:Ki);const ye={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new fi(d.textureWidth,d.textureHeight,{format:Pi,type:ci,depthTexture:new go(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new fi(h.framebufferWidth,h.framebufferHeight,{format:Pi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(te){for(let ue=0;ue<te.removed.length;ue++){const we=te.removed[ue],dt=S.indexOf(we);dt>=0&&(S[dt]=null,M[dt].disconnect(we))}for(let ue=0;ue<te.added.length;ue++){const we=te.added[ue];let dt=S.indexOf(we);if(dt===-1){for(let ye=0;ye<M.length;ye++)if(ye>=S.length){S.push(we),dt=ye;break}else if(S[ye]===null){S[ye]=we,dt=ye;break}if(dt===-1)break}const Ge=M[dt];Ge&&Ge.connect(we)}}const q=new D,Y=new D;function oe(te,ue,we){q.setFromMatrixPosition(ue.matrixWorld),Y.setFromMatrixPosition(we.matrixWorld);const dt=q.distanceTo(Y),Ge=ue.projectionMatrix.elements,ye=we.projectionMatrix.elements,cn=Ge[14]/(Ge[10]-1),et=Ge[14]/(Ge[10]+1),Ze=(Ge[9]+1)/Ge[5],Lt=(Ge[9]-1)/Ge[5],lt=(Ge[8]-1)/Ge[0],Tt=(ye[8]+1)/ye[0],un=cn*lt,Sn=cn*Tt,dn=dt/(-lt+Tt),xn=dn*-lt;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(xn),te.translateZ(dn),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const W=cn+dn,kt=et+dn,Ot=un-xn,F=Sn+(dt-xn),A=Ze*et/kt*W,J=Lt*et/kt*W;te.projectionMatrix.makePerspective(Ot,F,A,J,W,kt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function De(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ue=te.near,we=te.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(we=m.depthFar)),E.near=C.near=L.near=ue,E.far=C.far=L.far=we,(P!==E.near||U!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,U=E.far),E.layers.mask=te.layers.mask|6,L.layers.mask=E.layers.mask&-5,C.layers.mask=E.layers.mask&-3;const dt=te.parent,Ge=E.cameras;De(E,dt);for(let ye=0;ye<Ge.length;ye++)De(Ge[ye],dt);Ge.length===2?oe(E,L,C):E.projectionMatrix.copy(L.projectionMatrix),T===null&&te.isPerspectiveCamera&&(T={camera:te,fov:te.fov,zoom:te.zoom}),Me(te,E,dt)};function Me(te,ue,we){we===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=wa*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(E)},this.getCameraTexture=function(te){return p[te]};let st=null;function Qe(te,ue){if(u=ue.getViewerPose(l||o),g=ue,u!==null){const we=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let dt=!1;we.length!==E.cameras.length&&(E.cameras.length=0,dt=!0);for(let et=0;et<we.length;et++){const Ze=we[et];let Lt=null;if(h!==null)Lt=h.getViewport(Ze);else{const Tt=f.getViewSubImage(d,Ze);Lt=Tt.viewport,et===0&&(e.setRenderTargetTextures(_,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(_))}let lt=R[et];lt===void 0&&(lt=new bi,lt.layers.enable(et),lt.viewport=new sn,R[et]=lt),lt.matrix.fromArray(Ze.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Ze.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),et===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),dt===!0&&E.cameras.push(lt)}const Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const et=f.getDepthInformation(we[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(Ge&&Ge.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let et=0;et<we.length;et++){const Ze=we[et].camera;if(Ze){let Lt=p[Ze];Lt||(Lt=new Mm,p[Ze]=Lt);const lt=f.getCameraImage(Ze);Lt.sourceTexture=lt}}}}for(let we=0;we<M.length;we++){const dt=S[we],Ge=M[we];dt!==null&&Ge!==void 0&&Ge.update(dt,ue,l||o)}st&&st(te,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ce=new Em;Ce.setAnimationLoop(Qe),this.setAnimationLoop=function(te){st=te},this.dispose=function(){}}}const Pb=new Nt,Im=new bt;Im.set(-1,0,0,0,1,0,0,0,1);function Lb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,b,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===di&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===di&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),b=v.envMap,_=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Im),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===di&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ib(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){const S=M.program;i.uniformBlockBinding(_,S)}function l(_,M){let S=s[_.id];S===void 0&&(m(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",v));const w=M.program;i.updateUBOMapping(_,w);const y=e.render.frame;r[_.id]!==y&&(d(_),r[_.id]=y)}function u(_){const M=f();_.__bindingPointIndex=M;const S=n.createBuffer(),w=_.__size,y=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const M=s[_.id],S=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,T=S.length;y<T;y++){const L=S[y];if(Array.isArray(L))for(let C=0,R=L.length;C<R;C++)h(L[C],y,C,w);else h(L,y,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,M,S,w){if(x(_,M,S,w)===!0){const y=_.__offset,T=_.value;if(Array.isArray(T)){let L=0;for(let C=0;C<T.length;C++){const R=T[C],E=p(R);g(R,_.__data,L),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(L+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,_.__data)}}function g(_,M,S){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,S)}function x(_,M,S,w){const y=_.value,T=M+"_"+S;if(w[T]===void 0)return typeof y=="number"||typeof y=="boolean"?w[T]=y:ArrayBuffer.isView(y)?w[T]=y.slice():w[T]=y.clone(),!0;{const L=w[T];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return w[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function m(_){const M=_.uniforms;let S=0;const w=16;for(let T=0,L=M.length;T<L;T++){const C=Array.isArray(M[T])?M[T]:[M[T]];for(let R=0,E=C.length;R<E;R++){const P=C[R],U=Array.isArray(P.value)?P.value:[P.value];for(let B=0,V=U.length;B<V;B++){const ne=U[B],q=p(ne),Y=S%w,oe=Y%q.boundary,De=Y+oe;S+=oe,De!==0&&w-De<q.storage&&(S+=w-De),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=q.storage}}}const y=S%w;return y>0&&(S+=w-y),_.__size=S,_.__cache={},this}function p(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){const M=_.target;M.removeEventListener("dispose",v);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}const Db=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let es=null;function Ub(){return es===null&&(es=new Ll(Db,16,16,Sr,ki),es.name="DFG_LUT",es.minFilter=Mn,es.magFilter=Mn,es.wrapS=is,es.wrapT=is,es.generateMipmaps=!1,es.needsUpdate=!0),es}class kb{constructor(e={}){const{canvas:t=k1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=ci}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=h,m=new Set([If,Lf,Pf]),p=new Set([ci,Ki,Ma,ba,Af,Cf]),v=new Uint32Array(4),b=new Int32Array(4),_=new D;let M=null,S=null;const w=[],y=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,R=null,E=null,P=null,U=null;this._outputColorSpace=ei;let B=0,V=0,ne=null,q=-1,Y=null;const oe=new sn,De=new sn;let Me=null;const st=new pt(0);let Qe=0,Ce=t.width,te=t.height,ue=1,we=null,dt=null;const Ge=new sn(0,0,Ce,te),ye=new sn(0,0,Ce,te);let cn=!1;const et=new Of;let Ze=!1,Lt=!1;const lt=new Nt,Tt=new D,un=new sn,Sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function xn(){return ne===null?ue:1}let W=i;function kt(I,$){return t.getContext(I,$)}let Ot,F,A,J,ae,he,Ae,Re,pe,ve,Ue,Ye,Pe,Le,We,je,xt,X,ke,ge,Ne,Ie,_e;try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tf}`),t.addEventListener("webglcontextlost",Yt,!1),t.addEventListener("webglcontextrestored",zt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),W===null){const $="webgl2";if(W=kt($,I),W===null)throw kt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(I){throw t.removeEventListener("webglcontextlost",Yt,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Ht("WebGLRenderer: "+I.message),I}function nt(){Ot=new UM(W),Ot.init(),Ne=new Tb(W,Ot),F=new wM(W,Ot,e,Ne),A=new Sb(W,Ot),F.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),E=W.createFramebuffer(),P=W.createFramebuffer(),U=W.createFramebuffer(),J=new FM(W),ae=new lb,he=new wb(W,Ot,A,ae,F,Ne,J),Ae=new DM(L),Re=new zx(W),Ie=new bM(W,Re),pe=new kM(W,Re,J,Ie),ve=new zM(W,pe,Re,Ie,J),X=new OM(W,F,he),We=new TM(ae),Ue=new cb(L,Ae,Ot,F,Ie,We),Ye=new Lb(L,ae),Pe=new db,Le=new vb(Ot),xt=new MM(L,Ae,A,ve,g,c),je=new bb(L,ve,F),_e=new Ib(W,J,F,A),ke=new SM(W,Ot,J),ge=new NM(W,Ot,J),J.programs=Ue.programs,L.capabilities=F,L.extensions=Ot,L.properties=ae,L.renderLists=Pe,L.shadowMap=je,L.state=A,L.info=J}x!==ci&&(T=new GM(x,t.width,t.height,a,s,r));const Je=new Rb(L,W);this.xr=Je,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const I=Ot.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ot.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(I){I!==void 0&&(ue=I,this.setSize(Ce,te,!1))},this.getSize=function(I){return I.set(Ce,te)},this.setSize=function(I,$,ce=!0){if(Je.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=I,te=$,t.width=Math.floor(I*ue),t.height=Math.floor($*ue),ce===!0&&(t.style.width=I+"px",t.style.height=$+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(Ce*ue,te*ue).floor()},this.setDrawingBufferSize=function(I,$,ce){Ce=I,te=$,ue=ce,t.width=Math.floor(I*ce),t.height=Math.floor($*ce),this.setViewport(0,0,I,$)},this.setEffects=function(I){if(x===ci){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let $=0;$<I.length;$++)if(I[$].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(oe)},this.getViewport=function(I){return I.copy(Ge)},this.setViewport=function(I,$,ce,ie){I.isVector4?Ge.set(I.x,I.y,I.z,I.w):Ge.set(I,$,ce,ie),A.viewport(oe.copy(Ge).multiplyScalar(ue).round())},this.getScissor=function(I){return I.copy(ye)},this.setScissor=function(I,$,ce,ie){I.isVector4?ye.set(I.x,I.y,I.z,I.w):ye.set(I,$,ce,ie),A.scissor(De.copy(ye).multiplyScalar(ue).round())},this.getScissorTest=function(){return cn},this.setScissorTest=function(I){A.setScissorTest(cn=I)},this.setOpaqueSort=function(I){we=I},this.setTransparentSort=function(I){dt=I},this.getClearColor=function(I){return I.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,ce=!0){let ie=0;if(I){let se=!1;if(ne!==null){const Oe=ne.texture.format;se=m.has(Oe)}if(se){const Oe=ne.texture.type,He=p.has(Oe),Fe=xt.getClearColor(),Ke=xt.getClearAlpha(),O=Fe.r,Z=Fe.g,re=Fe.b;He?(v[0]=O,v[1]=Z,v[2]=re,v[3]=Ke,W.clearBufferuiv(W.COLOR,0,v)):(b[0]=O,b[1]=Z,b[2]=re,b[3]=Ke,W.clearBufferiv(W.COLOR,0,b))}else ie|=W.COLOR_BUFFER_BIT}$&&(ie|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),R=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Yt,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),xt.dispose(),Pe.dispose(),Le.dispose(),ae.dispose(),Ae.dispose(),ve.dispose(),Ie.dispose(),_e.dispose(),Ue.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Ua),Je.removeEventListener("sessionend",nr),Ni.stop()};function Yt(I){I.preventDefault(),al("WebGLRenderer: Context Lost."),C=!0}function zt(){al("WebGLRenderer: Context Restored."),C=!1;const I=J.autoReset,$=je.enabled,ce=je.autoUpdate,ie=je.needsUpdate,se=je.type;nt(),J.autoReset=I,je.enabled=$,je.autoUpdate=ce,je.needsUpdate=ie,je.type=se}function Dn(I){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ti(I){const $=I.target;$.removeEventListener("dispose",Ti),Da($)}function Da(I){tr(I),ae.remove(I)}function tr(I){const $=ae.get(I).programs;$!==void 0&&($.forEach(function(ce){Ue.releaseProgram(ce)}),I.isShaderMaterial&&Ue.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ce,ie,se,Oe){$===null&&($=Sn);const He=se.isMesh&&se.matrixWorld.determinantAffine()<0,Fe=Wl(I,$,ce,ie,se);A.setMaterial(ie,He);let Ke=ce.index,O=1;if(ie.wireframe===!0){if(Ke=pe.getWireframeAttribute(ce),Ke===void 0)return;O=2}const Z=ce.drawRange,re=ce.attributes.position;let H=Z.start*O,K=(Z.start+Z.count)*O;Oe!==null&&(H=Math.max(H,Oe.start*O),K=Math.min(K,(Oe.start+Oe.count)*O)),Ke!==null?(H=Math.max(H,0),K=Math.min(K,Ke.count)):re!=null&&(H=Math.max(H,0),K=Math.min(K,re.count));const j=K-H;if(j<0||j===1/0)return;Ie.setup(se,ie,Fe,ce,Ke);let de,me=ke;if(Ke!==null&&(de=Re.get(Ke),me=ge,me.setIndex(de)),se.isMesh)ie.wireframe===!0?(A.setLineWidth(ie.wireframeLinewidth*xn()),me.setMode(W.LINES)):me.setMode(W.TRIANGLES);else if(se.isLine){let Te=ie.linewidth;Te===void 0&&(Te=1),A.setLineWidth(Te*xn()),se.isLineSegments?me.setMode(W.LINES):se.isLineLoop?me.setMode(W.LINE_LOOP):me.setMode(W.LINE_STRIP)}else se.isPoints?me.setMode(W.POINTS):se.isSprite&&me.setMode(W.TRIANGLES);if(se.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))me.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Te=se._multiDrawStarts,fe=se._multiDrawCounts,Xe=se._multiDrawCount,rt=Ke?Re.get(Ke).bytesPerElement:1,Mt=ae.get(ie).currentProgram.getUniforms();for(let Gt=0;Gt<Xe;Gt++)Mt.setValue(W,"_gl_DrawID",Gt),me.render(Te[Gt]/rt,fe[Gt])}else if(se.isInstancedMesh)me.renderInstances(H,j,se.count);else if(ce.isInstancedBufferGeometry){const Te=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,fe=Math.min(ce.instanceCount,Te);me.renderInstances(H,j,fe)}else me.render(H,j)};function Es(I,$,ce,ie){R!==null&&I.isNodeMaterial&&R.setObject(ie,I),Ze===!0&&We.setState(I,ce,!1),I.transparent===!0&&I.side===ai&&I.forceSinglePass===!1?(I.side=di,I.needsUpdate=!0,ir(I,$,ie),I.side=Mr,I.needsUpdate=!0,ir(I,$,ie),I.side=ai):ir(I,$,ie)}this.compile=function(I,$,ce=null){ce===null&&(ce=I),R!==null&&R.renderStart(I,$,ce),S=Le.get(ce),S.init($),y.push(S),ce.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),I!==ce&&I.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),S.setupLights(),R!==null&&R.updateLights(S.state.lightsArray),Lt=this.localClippingEnabled,Ze=We.init(this.clippingPlanes,Lt),Ze===!0&&We.setGlobalState(this.clippingPlanes,$),R!==null&&je.render(S.state.shadowsArray,ce,$);const ie=new Set;return I.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let He=0;He<Oe.length;He++){const Fe=Oe[He];Es(Fe,ce,$,se),ie.add(Fe)}else Es(Oe,ce,$,se),ie.add(Oe)}),S=y.pop(),R!==null&&R.renderEnd(),ie},this.compileAsync=function(I,$,ce=null){const ie=this.compile(I,$,ce);return new Promise(se=>{function Oe(){if(ie.forEach(function(He){const Ke=ae.get(He).currentProgram;(Ke===void 0||Ke.isReady())&&ie.delete(He)}),ie.size===0){se(I);return}setTimeout(Oe,10)}Ot.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let As=null;function Hl(I){As&&As(I)}function Ua(){Ni.stop()}function nr(){Ni.start()}const Ni=new Em;Ni.setAnimationLoop(Hl),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(I){As=I,Je.setAnimationLoop(I),I===null?Ni.stop():Ni.start()},Je.addEventListener("sessionstart",Ua),Je.addEventListener("sessionend",nr),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R!==null&&R.renderStart(I,$);const ce=Je.enabled===!0&&Je.isPresenting===!0,ie=T!==null&&(ne===null||ce)&&T.begin(L,ne);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera($),$=Je.getCamera()),I.isScene===!0&&I.onBeforeRender(L,I,$,ne),S=Le.get(I,y.length),S.init($),S.state.textureUnits=he.getTextureUnits(),y.push(S),lt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),et.setFromProjectionMatrix(lt,ss,$.reversedDepth),Lt=this.localClippingEnabled,Ze=We.init(this.clippingPlanes,Lt),M=Pe.get(I,w.length),M.init(),w.push(M),Je.enabled===!0&&Je.isPresenting===!0){const He=L.xr.getDepthSensingMesh();He!==null&&Ao(He,$,-1/0,L.sortObjects)}Ao(I,$,0,L.sortObjects),M.finish(),R!==null&&R.updateLights(S.state.lightsArray),L.sortObjects===!0&&M.sort(we,dt),dn=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,dn&&xt.addToRenderList(M,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&We.beginShadows();const se=S.state.shadowsArray;if(je.render(se,I,$),Ze===!0&&We.endShadows(),(ie&&T.hasRenderPass())===!1){const He=M.opaque,Fe=M.transmissive;if(S.setupLights(),$.isArrayCamera){const Ke=$.cameras;if(Fe.length>0)for(let O=0,Z=Ke.length;O<Z;O++){const re=Ke[O];ka(He,Fe,I,re)}dn&&xt.render(I);for(let O=0,Z=Ke.length;O<Z;O++){const re=Ke[O];Pr(M,I,re,re.viewport)}}else Fe.length>0&&ka(He,Fe,I,$),dn&&xt.render(I),Pr(M,I,$)}ne!==null&&V===0&&(he.updateMultisampleRenderTarget(ne),he.updateRenderTargetMipmap(ne)),ie&&T.end(L),I.isScene===!0&&I.onAfterRender(L,I,$),Ie.resetDefaultState(),q=-1,Y=null,y.pop(),y.length>0?(S=y[y.length-1],he.setTextureUnits(S.state.textureUnits),Ze===!0&&We.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,R!==null&&R.renderEnd()};function Ao(I,$,ce,ie){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ce=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLightProbeGrid)S.pushLightProbeGrid(I);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(et)){ie&&un.setFromMatrixPosition(I.matrixWorld).applyMatrix4(lt);const He=ve.update(I),Fe=I.material;Fe.visible&&M.push(I,He,Fe,ce,un.z,null,$)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(et))){const He=ve.update(I),Fe=I.material;if(ie&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),un.copy(I.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),un.copy(He.boundingSphere.center)),un.applyMatrix4(I.matrixWorld).applyMatrix4(lt)),Array.isArray(Fe)){const Ke=He.groups;for(let O=0,Z=Ke.length;O<Z;O++){const re=Ke[O],H=Fe[re.materialIndex];H&&H.visible&&M.push(I,He,H,ce,un.z,re,$)}}else Fe.visible&&M.push(I,He,Fe,ce,un.z,null,$)}}const Oe=I.children;for(let He=0,Fe=Oe.length;He<Fe;He++)Ao(Oe[He],$,ce,ie)}function Pr(I,$,ce,ie){const{opaque:se,transmissive:Oe,transparent:He}=I;S.setupLightsView(ce),Ze===!0&&We.setGlobalState(L.clippingPlanes,ce),ie&&A.viewport(oe.copy(ie)),se.length>0&&Lr(se,$,ce),Oe.length>0&&Lr(Oe,$,ce),He.length>0&&Lr(He,$,ce),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function ka(I,$,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){const H=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new fi(1,1,{generateMipmaps:!0,type:H?ki:ci,minFilter:$s,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const Oe=S.state.transmissionRenderTarget[ie.id],He=ie.viewport||oe;Oe.setSize(He.z*L.transmissionResolutionScale,He.w*L.transmissionResolutionScale);const Fe=L.getRenderTarget(),Ke=L.getActiveCubeFace(),O=L.getActiveMipmapLevel();L.setRenderTarget(Oe),L.getClearColor(st),Qe=L.getClearAlpha(),Qe<1&&L.setClearColor(16777215,.5),L.clear(),dn&&xt.render(ce);const Z=L.toneMapping;L.toneMapping=os;const re=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),Ze===!0&&We.setGlobalState(L.clippingPlanes,ie),Lr(I,ce,ie),he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let H=!1;for(let K=0,j=$.length;K<j;K++){const de=$[K],{object:me,geometry:Te,material:fe,group:Xe}=de;if(fe.side===ai&&me.layers.test(ie.layers)){const rt=fe.side;fe.side=di,fe.needsUpdate=!0,Co(me,ce,ie,Te,fe,Xe),fe.side=rt,fe.needsUpdate=!0,H=!0}}H===!0&&(he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe))}L.setRenderTarget(Fe,Ke,O),L.setClearColor(st,Qe),re!==void 0&&(ie.viewport=re),L.toneMapping=Z}function Lr(I,$,ce){const ie=$.isScene===!0?$.overrideMaterial:null;for(let se=0,Oe=I.length;se<Oe;se++){const He=I[se],{object:Fe,geometry:Ke,group:O}=He;let Z=He.material;Z.allowOverride===!0&&ie!==null&&(Z=ie),Fe.layers.test(ce.layers)&&Co(Fe,$,ce,Ke,Z,O)}}function Co(I,$,ce,ie,se,Oe){R!==null&&se.isNodeMaterial&&R.setObject(I,se),I.onBeforeRender(L,$,ce,ie,se,Oe),I.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),se.onBeforeRender(L,$,ce,ie,I,Oe),se.transparent===!0&&se.side===ai&&se.forceSinglePass===!1?(se.side=di,se.needsUpdate=!0,L.renderBufferDirect(ce,$,ie,se,I,Oe),se.side=Mr,se.needsUpdate=!0,L.renderBufferDirect(ce,$,ie,se,I,Oe),se.side=ai):L.renderBufferDirect(ce,$,ie,se,I,Oe),I.onAfterRender(L,$,ce,ie,se,Oe)}function ir(I,$,ce){$.isScene!==!0&&($=Sn);const ie=ae.get(I),se=S.state.lights,Oe=S.state.shadowsArray,He=se.state.version,Fe=Ue.getParameters(I,se.state,Oe,$,ce,S.state.lightProbeGridArray),Ke=Ue.getProgramCacheKey(Fe);let O=ie.programs;ie.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;const Z=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ie.envMap=Ae.get(I.envMap||ie.environment,Z),ie.envMapRotation=ie.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,O===void 0&&(I.addEventListener("dispose",Ti),O=new Map,ie.programs=O);let re=O.get(Ke);if(re!==void 0){if(ie.currentProgram===re&&ie.lightsStateVersion===He)return Fa(I,Fe),re}else Fe.uniforms=Ue.getUniforms(I),R!==null&&I.isNodeMaterial&&R.build(I,ce,Fe),I.onBeforeCompile(Fe,L),re=Ue.acquireProgram(Fe,Ke),O.set(Ke,re),ie.uniforms=Fe.uniforms;const H=ie.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(H.clippingPlanes=We.uniform),Fa(I,Fe),ie.needsLights=za(I),ie.lightsStateVersion=He,ie.needsLights&&(H.ambientLightColor.value=se.state.ambient,H.lightProbe.value=se.state.probe,H.sunLights.value=se.state.sun,H.sunLightShadows.value=se.state.sunShadow,H.directionalLights.value=se.state.directional,H.directionalLightShadows.value=se.state.directionalShadow,H.spotLights.value=se.state.spot,H.spotLightShadows.value=se.state.spotShadow,H.rectAreaLights.value=se.state.rectArea,H.ltc_1.value=se.state.rectAreaLTC1,H.ltc_2.value=se.state.rectAreaLTC2,H.pointLights.value=se.state.point,H.pointLightShadows.value=se.state.pointShadow,H.hemisphereLights.value=se.state.hemi,H.sunShadowMatrix.value=se.state.sunShadowMatrix,H.sunShadowCascade.value=se.state.sunShadowCascade,H.directionalShadowMatrix.value=se.state.directionalShadowMatrix,H.spotLightMatrix.value=se.state.spotLightMatrix,H.spotLightMap.value=se.state.spotLightMap,H.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.lightProbeGrid=S.state.lightProbeGridArray.length>0,ie.currentProgram=re,ie.uniformsList=null,re}function Na(I){if(I.uniformsList===null){const $=I.currentProgram.getUniforms();I.uniformsList=Uc.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function Fa(I,$){const ce=ae.get(I);ce.outputColorSpace=$.outputColorSpace,ce.batching=$.batching,ce.batchingColor=$.batchingColor,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.instancingMorph=$.instancingMorph,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function $l(I,$){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;_.setFromMatrixPosition($.matrixWorld);for(let ce=0,ie=I.length;ce<ie;ce++){const se=I[ce];if(se.texture!==null&&se.boundingBox.containsPoint(_))return se}return null}function Wl(I,$,ce,ie,se){$.isScene!==!0&&($=Sn),he.resetTextureUnits();const Oe=$.fog,He=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,Fe=ne===null?L.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Bt.workingColorSpace,Ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,O=Ae.get(ie.envMap||He,Ke),Z=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,re=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),H=!!ce.morphAttributes.position,K=!!ce.morphAttributes.normal,j=!!ce.morphAttributes.color;let de=os;ie.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(de=L.toneMapping);const me=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Te=me!==void 0?me.length:0,fe=ae.get(ie),Xe=S.state.lights;if(Ze===!0&&(Lt===!0||I!==Y)){const ot=I===Y&&ie.id===q;We.setState(ie,I,ot)}let rt=!1;ie.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Xe.state.version||fe.outputColorSpace!==Fe||se.isBatchedMesh&&fe.batching===!1||!se.isBatchedMesh&&fe.batching===!0||se.isBatchedMesh&&fe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&fe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&fe.instancing===!1||!se.isInstancedMesh&&fe.instancing===!0||se.isSkinnedMesh&&fe.skinning===!1||!se.isSkinnedMesh&&fe.skinning===!0||se.isInstancedMesh&&fe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&fe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&fe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&fe.instancingMorph===!1&&se.morphTexture!==null||fe.envMap!==O||ie.fog===!0&&fe.fog!==Oe||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==We.numPlanes||fe.numIntersection!==We.numIntersection)||fe.vertexAlphas!==Z||fe.vertexTangents!==re||fe.morphTargets!==H||fe.morphNormals!==K||fe.morphColors!==j||fe.toneMapping!==de||fe.morphTargetsCount!==Te||!!fe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,fe.__version=ie.version);let Mt=fe.currentProgram;rt===!0&&(Mt=ir(ie,$,se),R&&ie.isNodeMaterial&&R.onUpdateProgram(ie,Mt,fe));let Gt=!1,mt=!1,Qt=!1;const ht=Mt.getUniforms(),St=fe.uniforms;if(A.useProgram(Mt.program)&&(Gt=!0,mt=!0,Qt=!0),ie.id!==q&&(q=ie.id,mt=!0),fe.needsLights){const ot=$l(S.state.lightProbeGridArray,se);fe.lightProbeGrid!==ot&&(fe.lightProbeGrid=ot,mt=!0)}if(Gt||Y!==I){A.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),ht.setValue(W,"projectionMatrix",I.projectionMatrix),ht.setValue(W,"viewMatrix",I.matrixWorldInverse);const Zt=ht.map.cameraPosition;Zt!==void 0&&Zt.setValue(W,Tt.setFromMatrixPosition(I.matrixWorld)),F.logarithmicDepthBuffer&&ht.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&ht.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),Y!==I&&(Y=I,mt=!0,Qt=!0)}if(fe.needsLights&&(Xe.state.sunShadowMap.length>0&&ht.setValue(W,"sunShadowMap",Xe.state.sunShadowMap,he),Xe.state.directionalShadowMap.length>0&&ht.setValue(W,"directionalShadowMap",Xe.state.directionalShadowMap,he),Xe.state.spotShadowMap.length>0&&ht.setValue(W,"spotShadowMap",Xe.state.spotShadowMap,he),Xe.state.pointShadowMap.length>0&&ht.setValue(W,"pointShadowMap",Xe.state.pointShadowMap,he)),se.isSkinnedMesh){ht.setOptional(W,se,"bindMatrix"),ht.setOptional(W,se,"bindMatrixInverse");const ot=se.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),ht.setValue(W,"boneTexture",ot.boneTexture,he))}se.isBatchedMesh&&(ht.setOptional(W,se,"batchingTexture"),ht.setValue(W,"batchingTexture",se._matricesTexture,he),ht.setOptional(W,se,"batchingIdTexture"),ht.setValue(W,"batchingIdTexture",se._indirectTexture,he),ht.setOptional(W,se,"batchingColorTexture"),se._colorsTexture!==null&&ht.setValue(W,"batchingColorTexture",se._colorsTexture,he));const jt=ce.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&X.update(se,ce,Mt),(mt||fe.receiveShadow!==se.receiveShadow)&&(fe.receiveShadow=se.receiveShadow,ht.setValue(W,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(St.envMapIntensity.value=$.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Ub()),mt){if(ht.setValue(W,"toneMappingExposure",L.toneMappingExposure),fe.needsLights&&Oa(St,Qt),Oe&&ie.fog===!0&&Ye.refreshFogUniforms(St,Oe),Ye.refreshMaterialUniforms(St,ie,ue,te,S.state.transmissionRenderTarget[I.id]),fe.needsLights&&fe.lightProbeGrid){const ot=fe.lightProbeGrid;St.probesSH.value=ot.texture,St.probesMin.value.copy(ot.boundingBox.min),St.probesMax.value.copy(ot.boundingBox.max),St.probesResolution.value.copy(ot.resolution)}Uc.upload(W,Na(fe),St,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Uc.upload(W,Na(fe),St,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&ht.setValue(W,"center",se.center),ht.setValue(W,"modelViewMatrix",se.modelViewMatrix),ht.setValue(W,"normalMatrix",se.normalMatrix),ht.setValue(W,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){const ot=ie.uniformsGroups;for(let Zt=0,wn=ot.length;Zt<wn;Zt++){const Hn=ot[Zt];_e.update(Hn,Mt),_e.bind(Hn,Mt)}}return Mt}function Oa(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.sunLights.needsUpdate=$,I.sunLightShadows.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function za(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(I,$,ce){const ie=ae.get(I);ie.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ae.get(I.texture).__webglTexture=$,ae.get(I.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){const ce=ae.get(I);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,ce=0){ne=I,B=$,V=ce;let ie=null,se=!1,Oe=!1;if(I){const Fe=ae.get(I);if(Fe.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(W.FRAMEBUFFER,Fe.__webglFramebuffer),oe.copy(I.viewport),De.copy(I.scissor),Me=I.scissorTest,A.viewport(oe),A.scissor(De),A.setScissorTest(Me),q=-1;return}else if(Fe.__webglFramebuffer===void 0)he.setupRenderTarget(I);else if(Fe.__hasExternalTextures)he.rebindTextures(I,ae.get(I.texture).__webglTexture,ae.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Z=I.depthTexture;if(Fe.__boundDepthTexture!==Z){if(Z!==null&&ae.has(Z)&&(I.width!==Z.image.width||I.height!==Z.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(I)}}const Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Oe=!0);const O=ae.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(O[$])?ie=O[$][ce]:ie=O[$],se=!0):I.samples>0&&he.useMultisampledRTT(I)===!1?ie=ae.get(I).__webglMultisampledFramebuffer:Array.isArray(O)?ie=O[ce]:ie=O,oe.copy(I.viewport),De.copy(I.scissor),Me=I.scissorTest}else oe.copy(Ge).multiplyScalar(ue).floor(),De.copy(ye).multiplyScalar(ue).floor(),Me=cn;if(ce!==0&&(ie=E),A.bindFramebuffer(W.FRAMEBUFFER,ie)&&A.drawBuffers(I,ie),A.viewport(oe),A.scissor(De),A.setScissorTest(Me),se){const Fe=ae.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe.__webglTexture,ce)}else if(Oe){const Fe=$;for(let Ke=0;Ke<I.textures.length;Ke++){const O=ae.get(I.textures[Ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ke,O.__webglTexture,ce,Fe)}}else if(I!==null&&ce!==0){const Fe=ae.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Fe.__webglTexture,ce)}q=-1};function Ba(I){const $=ae.get(I);return($.__readFormat!==I.format||$.__readType!==I.type)&&($.__readFormat=I.format,$.__readType=I.type,$.__formatReadable=F.textureFormatReadable(I.format),$.__typeReadable=F.textureTypeReadable(I.type)),$}this.readRenderTargetPixels=function(I,$,ce,ie,se,Oe,He,Fe=0){if(!(I&&I.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=ae.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke){A.bindFramebuffer(W.FRAMEBUFFER,Ke);try{const O=I.textures[Fe],Z=O.format,re=O.type;I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe);const H=Ba(O);if(H.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(H.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-ie&&ce>=0&&ce<=I.height-se&&W.readPixels($,ce,ie,se,Ne.convert(Z),Ne.convert(re),Oe)}finally{const O=ne!==null?ae.get(ne).__webglFramebuffer:null;A.bindFramebuffer(W.FRAMEBUFFER,O)}}},this.readRenderTargetPixelsAsync=async function(I,$,ce,ie,se,Oe,He,Fe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=ae.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke)if($>=0&&$<=I.width-ie&&ce>=0&&ce<=I.height-se){A.bindFramebuffer(W.FRAMEBUFFER,Ke);const O=I.textures[Fe],Z=O.format,re=O.type;I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe);const H=Ba(O);if(H.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(H.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const K=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,K),W.bufferData(W.PIXEL_PACK_BUFFER,Oe.byteLength,W.STREAM_READ),W.readPixels($,ce,ie,se,Ne.convert(Z),Ne.convert(re),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const j=ne!==null?ae.get(ne).__webglFramebuffer:null;A.bindFramebuffer(W.FRAMEBUFFER,j);const de=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await N1(W,de,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,K),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Oe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(K),W.deleteSync(de),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,ce=0){const ie=Math.pow(2,-ce),se=Math.floor(I.image.width*ie),Oe=Math.floor(I.image.height*ie),He=$!==null?$.x:0,Fe=$!==null?$.y:0;he.setTexture2D(I,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,He,Fe,se,Oe),A.unbindTexture()},this.copyTextureToTexture=function(I,$,ce=null,ie=null,se=0,Oe=0){let He,Fe,Ke,O,Z,re,H,K,j;const de=I.isCompressedTexture?I.mipmaps[Oe]:I.image;if(ce!==null)He=ce.max.x-ce.min.x,Fe=ce.max.y-ce.min.y,Ke=ce.isBox3?ce.max.z-ce.min.z:1,O=ce.min.x,Z=ce.min.y,re=ce.isBox3?ce.min.z:0;else{const St=Math.pow(2,-se);He=Math.floor(de.width*St),Fe=Math.floor(de.height*St),I.isDataArrayTexture?Ke=de.depth:I.isData3DTexture?Ke=Math.floor(de.depth*St):Ke=1,O=0,Z=0,re=0}ie!==null?(H=ie.x,K=ie.y,j=ie.z):(H=0,K=0,j=0);const me=Ne.convert($.format),Te=Ne.convert($.type);let fe;$.isData3DTexture?(he.setTexture3D($,0),fe=W.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(he.setTexture2DArray($,0),fe=W.TEXTURE_2D_ARRAY):(he.setTexture2D($,0),fe=W.TEXTURE_2D),A.activeTexture(W.TEXTURE0),A.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);const Xe=A.getParameter(W.UNPACK_ROW_LENGTH),rt=A.getParameter(W.UNPACK_IMAGE_HEIGHT),Mt=A.getParameter(W.UNPACK_SKIP_PIXELS),Gt=A.getParameter(W.UNPACK_SKIP_ROWS),mt=A.getParameter(W.UNPACK_SKIP_IMAGES);A.pixelStorei(W.UNPACK_ROW_LENGTH,de.width),A.pixelStorei(W.UNPACK_IMAGE_HEIGHT,de.height),A.pixelStorei(W.UNPACK_SKIP_PIXELS,O),A.pixelStorei(W.UNPACK_SKIP_ROWS,Z),A.pixelStorei(W.UNPACK_SKIP_IMAGES,re);const Qt=I.isDataArrayTexture||I.isData3DTexture,ht=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){const St=ae.get(I),jt=ae.get($),ot=ae.get(St.__renderTarget),Zt=ae.get(jt.__renderTarget);A.bindFramebuffer(W.READ_FRAMEBUFFER,ot.__webglFramebuffer),A.bindFramebuffer(W.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let wn=0;wn<Ke;wn++)Qt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ae.get(I).__webglTexture,se,re+wn),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ae.get($).__webglTexture,Oe,j+wn)),W.blitFramebuffer(O,Z,He,Fe,H,K,He,Fe,W.DEPTH_BUFFER_BIT,W.NEAREST);A.bindFramebuffer(W.READ_FRAMEBUFFER,null),A.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(se!==0||I.isRenderTargetTexture||ae.has(I)){const St=ae.get(I),jt=ae.get($);A.bindFramebuffer(W.READ_FRAMEBUFFER,P),A.bindFramebuffer(W.DRAW_FRAMEBUFFER,U);for(let ot=0;ot<Ke;ot++)Qt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,St.__webglTexture,se,re+ot):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,St.__webglTexture,se),ht?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jt.__webglTexture,Oe,j+ot):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jt.__webglTexture,Oe),se!==0?W.blitFramebuffer(O,Z,He,Fe,H,K,He,Fe,W.COLOR_BUFFER_BIT,W.NEAREST):ht?W.copyTexSubImage3D(fe,Oe,H,K,j+ot,O,Z,He,Fe):W.copyTexSubImage2D(fe,Oe,H,K,O,Z,He,Fe);A.bindFramebuffer(W.READ_FRAMEBUFFER,null),A.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ht?I.isDataTexture||I.isData3DTexture?W.texSubImage3D(fe,Oe,H,K,j,He,Fe,Ke,me,Te,de.data):$.isCompressedArrayTexture?W.compressedTexSubImage3D(fe,Oe,H,K,j,He,Fe,Ke,me,de.data):W.texSubImage3D(fe,Oe,H,K,j,He,Fe,Ke,me,Te,de):I.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Oe,H,K,He,Fe,me,Te,de.data):I.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Oe,H,K,de.width,de.height,me,de.data):W.texSubImage2D(W.TEXTURE_2D,Oe,H,K,He,Fe,me,Te,de);A.pixelStorei(W.UNPACK_ROW_LENGTH,Xe),A.pixelStorei(W.UNPACK_IMAGE_HEIGHT,rt),A.pixelStorei(W.UNPACK_SKIP_PIXELS,Mt),A.pixelStorei(W.UNPACK_SKIP_ROWS,Gt),A.pixelStorei(W.UNPACK_SKIP_IMAGES,mt),Oe===0&&$.generateMipmaps&&W.generateMipmap(fe),A.unbindTexture()},this.initRenderTarget=function(I){ae.get(I).__webglFramebuffer===void 0&&he.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?he.setTextureCube(I,0):I.isData3DTexture?he.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?he.setTexture2DArray(I,0):he.setTexture2D(I,0),A.unbindTexture()},this.resetState=function(){B=0,V=0,ne=null,A.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}function Vh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Wt;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0;const f=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+u);u+=n[d].attributes.position.count}c.setIndex(f)}for(const u in r){const f=Hh(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][d]);const g=Hh(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Hh(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new mn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/t;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);a.setComponent(d+f,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Nb(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let o=0;const a=Object.keys(n.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,b=a.length;v<b;v++){const _=a[v],M=n.attributes[_];c[_]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const S=n.morphAttributes[_];S&&(l[_]||(l[_]=[]),S.forEach((w,y)=>{const T=new w.array.constructor(w.count*w.itemSize);l[_][y]=new w.constructor(T,w.itemSize,w.normalized)}))}const h=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=h*x;for(let v=0;v<r;v++){const b=i?i.getX(v):v;let _="";for(let M=0,S=a.length;M<S;M++){const w=a[M],y=n.getAttribute(w),T=y.itemSize;for(let L=0;L<T;L++)_+=`${Math.trunc(y[f[L]](b)*x+m)},`}if(_ in t)u.push(t[_]);else{for(let M=0,S=a.length;M<S;M++){const w=a[M],y=n.getAttribute(w),T=n.morphAttributes[w],L=y.itemSize,C=c[w],R=l[w];for(let E=0;E<L;E++){const P=f[E],U=d[E];if(C[U](o,y[P](b)),T)for(let B=0,V=T.length;B<V;B++)R[B][U](o,T[B][P](b))}}t[_]=o,u.push(o),o++}}const p=n.clone();for(const v in n.attributes){const b=c[v];if(p.setAttribute(v,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),v in l)for(let _=0;_<l[v].length;_++){const M=l[v][_];p.morphAttributes[v][_]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(u),p}const qi=`#include <common>
#include <logdepthbuf_pars_vertex>`,Yi="#include <logdepthbuf_vertex>",ji="#include <logdepthbuf_pars_fragment>",Zi="#include <logdepthbuf_fragment>",Ss=`
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
`,ua=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function Fb(n){const e=new Wt;e.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const t=new Vt(e);t.frustumCulled=!1;const i=new Rl;i.add(t);const s=new Ul,r=n.extensions,o=r.has("EXT_color_buffer_float")||r.has("EXT_color_buffer_half_float")?ki:ci,a={type:o,depthBuffer:!1,minFilter:Mn,magFilter:Mn};let c=null;const l=(T,L)=>new fi(T,L,{type:o,samples:v,depthBuffer:!0,depthTexture:new go(T,L,Ki)}),u=[],f=6,d=()=>({value:new Be}),h=new qt({uniforms:{tSrc:{value:null},uTexel:d(),uPrefilter:{value:0},uThreshold:{value:1.3},uKnee:{value:.2}},vertexShader:ua,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uPrefilter, uThreshold, uKnee;
      varying vec2 vUv;
      // Any broken (not-a-number or infinite) pixel counts as black, so one bad
      // value from any shader can never bloom into a flash.
      vec3 s(vec2 o) { vec3 c = texture2D(tSrc, vUv + o * uTexel).rgb; return any(isnan(c)) || any(isinf(c)) ? vec3(0.0) : c; }
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
      }`,depthTest:!1,depthWrite:!1}),g=new qt({uniforms:{tSrc:{value:null},uTexel:d(),uRadius:{value:1}},vertexShader:ua,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
      void main() {
        vec3 col = s(vec2(0)) * 4.0 + (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.0
          + s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
        gl_FragColor = vec4(col / 16.0, 1.0);
      }`,blending:Zn,depthTest:!1,depthWrite:!1}),x={pos:new Be(.5,.5),vis:0,color:new pt("#ffe2b0")},m=new qt({uniforms:{tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:6e3},uFocus:{value:100},uDof:{value:0},tBloom:{value:null},uBloom:{value:.17},uExposure:{value:1},uTime:{value:0},uAspect:{value:1},uSun:{value:x.pos},uSunVis:{value:0},uSunColor:{value:x.color},uTexel:d(),uCA:{value:1},uGrain:{value:1}},vertexShader:ua,fragmentShader:`
      uniform sampler2D tScene, tBloom, tDepth; uniform float uNear, uFar, uFocus, uDof; uniform float uBloom, uExposure, uTime, uAspect, uSunVis, uCA, uGrain;
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
        return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
      }
      float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float disc(vec2 p, vec2 c, float r, float soft) { return 1.0 - smoothstep(r * (1.0 - soft), r, length((p - c) * vec2(uAspect, 1.0))); }
      void main() {
        vec2 fromC = vUv - 0.5;
        vec3 col = texture2D(tScene, vUv).rgb;
        if (any(isnan(col)) || any(isinf(col))) col = vec3(0.0);
        // Depth of field when zoomed in close: what's far behind the thing
        // you're looking at goes soft (the sky stays sharp), for a sense of
        // distance and scale.
        if (uDof > 0.001) {
          float dz = texture2D(tDepth, vUv).r;
          if (dz < 0.9999) {
            float z = uNear * uFar / (uFar - dz * (uFar - uNear));
            float coc = clamp((z - uFocus * 2.5) / (uFocus * 10.0), 0.0, 1.0) * uDof;
            if (coc > 0.02) {
              vec2 rr = uTexel * coc * 7.0;
              vec3 acc = col;
              acc += texture2D(tScene, vUv + rr * vec2(1.0, 0.0)).rgb + texture2D(tScene, vUv + rr * vec2(-1.0, 0.0)).rgb;
              acc += texture2D(tScene, vUv + rr * vec2(0.0, 1.0)).rgb + texture2D(tScene, vUv + rr * vec2(0.0, -1.0)).rgb;
              acc += texture2D(tScene, vUv + rr * vec2(0.7, 0.7)).rgb + texture2D(tScene, vUv + rr * vec2(-0.7, 0.7)).rgb;
              acc += texture2D(tScene, vUv + rr * vec2(0.7, -0.7)).rgb + texture2D(tScene, vUv + rr * vec2(-0.7, -0.7)).rgb;
              col = mix(col, acc / 9.0, smoothstep(0.02, 0.3, coc));
            }
          }
        }
        col += texture2D(tBloom, vUv).rgb * uBloom;
        // Lens flare from the sun: ghosts strung along the line through the
        // centre of the frame, a faint halo, and a thin anamorphic streak.
        if (uSunVis > 0.001) {
          vec2 sd = uSun - 0.5;
          vec3 fl = vec3(0.0); // (no ghost discs: they drifted across worlds like flashes)
          vec2 dv = (vUv - uSun) * vec2(uAspect, 1.0);
          float streak = exp(-abs(dv.y) * 700.0) * exp(-abs(dv.x) * 6.0);
          fl += streak * vec3(0.55, 0.75, 1.0) * 0.3;
          col += fl * uSunVis * uSunColor;
        }
        col *= uExposure;
        float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));

        col = neutral(max(col, 0.0));
        // Vignette.
        float v = smoothstep(0.95, 0.25, length(fromC * vec2(uAspect * 0.85, 1.0)));
        col *= mix(0.72, 1.0, v);
        vec3 outc = toSRGB(col);
        // A whisper of dither, just enough to hide banding in the dark sky.
        float gr = h12(gl_FragCoord.xy + fract(uTime * 7.31) * 517.0) - 0.5;
        outc += gr * 0.006 * uGrain;
        gl_FragColor = vec4(outc, 1.0);
      }`,depthTest:!1,depthWrite:!1});let p=new Be(1,1),v=4;function b(T,L,C){const R=Math.max(1,Math.round(T*C)),E=Math.max(1,Math.round(L*C));p.set(R,E),c?c.setSize(R,E):c=l(R,E);let P=Math.max(1,R>>1),U=Math.max(1,E>>1);for(let B=0;B<f;B++)u[B]?u[B].setSize(P,U):u[B]=new fi(P,U,a),P=Math.max(1,P>>1),U=Math.max(1,U>>1);m.uniforms.uAspect.value=T/L}function _(T){T!==v&&(v=T,c&&(c.dispose(),c=l(p.x,p.y)))}function M(T,L){t.material=T,n.setRenderTarget(L),n.render(i,s)}function S(T,L,C){m.uniforms.uNear.value=L.near,m.uniforms.uFar.value=L.far,n.setRenderTarget(c),n.clear(),n.render(T,L);let R=c.texture,E=p.x,P=p.y;for(let B=0;B<w;B++)h.uniforms.tSrc.value=R,h.uniforms.uTexel.value.set(1/E,1/P),h.uniforms.uPrefilter.value=B===0?1:0,M(h,u[B]),R=u[B].texture,E=u[B].width,P=u[B].height;for(let B=w-2;B>=0;B--)g.uniforms.tSrc.value=u[B+1].texture,g.uniforms.uTexel.value.set(1/u[B+1].width,1/u[B+1].height),n.autoClear=!1,M(g,u[B]),n.autoClear=!0;const U=m.uniforms;U.tScene.value=c.texture,U.tDepth.value=c.depthTexture,U.uTexel.value.set(1/p.x,1/p.y),U.tBloom.value=u[0].texture,U.uTime.value=C,U.uSunVis.value=x.vis,M(m,null)}let w=f;function y(T){w=T==="high"?f:4}return{setSize:b,setSamples:_,setLevel:y,render:S,flare:x,uniforms:m.uniforms}}const _c=[[[.1,.45,.55],[.55,.12,.4]],[[.65,.3,.08],[.35,.06,.08]],[[.2,.3,.75],[.45,.15,.6]],[[.15,.5,.4],[.6,.45,.15]],[[.6,.2,.25],[.15,.25,.6]],[[.4,.55,.7],[.25,.1,.35]]],Ob=`
${Ss}
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
  float band = exp(-pow(abs(lat / wob), 2.0)) + 0.25 * exp(-pow(abs(lat / 0.55), 2.0));
  float clouds = fbm(d * 6.0 + 41.0, 6) * 0.5 + 0.5;
  float core = exp(-pow(abs(lon / 0.75), 2.0)) * exp(-pow(abs(lat / 0.28), 2.0));
  float lanes = ridged(d * 7.0 + 77.0, 5);
  float dust = smoothstep(0.35, 0.8, lanes) * exp(-pow(abs((lat - 0.02 * sin(lon * 3.0)) / 0.07), 2.0));
  float mw = band * (0.25 + clouds * 0.9) + core * 1.4;
  mw *= 1.0 - min(0.92, dust * 1.3);
  col += mix(vec3(0.55, 0.62, 0.85), vec3(1.0, 0.82, 0.6), clamp(core * 1.4, 0.0, 1.0)) * mw * 0.016;

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
    col += c * glow * 0.028 * (1.0 - dk * 0.85);
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
}`;function zb(n,e){const t=e==="high"?1024:512,i=n.extensions,s=i.has("EXT_color_buffer_float")||i.has("EXT_color_buffer_half_float")?ki:ci,r=new Xf(t,{type:s,generateMipmaps:!1,minFilter:Mn,magFilter:Mn}),o=new Tm(.1,100,r),a=new Rl,c={uPole:{value:new D},uNebDir:{value:[new D,new D,new D]},uNebA:{value:[new D,new D,new D]},uNebB:{value:[new D,new D,new D]},uNebSize:{value:[0,0,0]},uGal:{value:[new D,new D,new D]},uSeed:{value:0},uRes:{value:t}};a.add(new Vt(new Fn(10,64,32),new qt({uniforms:c,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:Ob,side:di,depthWrite:!1})));const l=new zd(n);let u=null,f=null;const d=e==="high"?9e3:5e3,h=new Wt,g=new Float32Array(d*3),x=new Float32Array(d*3),m=new Float32Array(d);h.setAttribute("position",new mn(g,3)),h.setAttribute("color",new mn(x,3)),h.setAttribute("size",new mn(m,1));const p=new qt({uniforms:{uT:{value:0},uPR:{value:1}},vertexShader:`
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
      }`,blending:Zn,depthTest:!1,depthWrite:!1}),v=new Bf(h,p);v.frustumCulled=!1,v.renderOrder=-100;function b(_=1){if(f===_)return;f=_;const M=Ui(_*7919+13),S=()=>{const R=M()*2-1,E=M()*Math.PI*2,P=Math.sqrt(1-R*R);return new D(Math.cos(E)*P,R,Math.sin(E)*P)};c.uPole.value.set(.3+M()*.4,.75+M()*.2,.3-M()*.6).normalize();const w=_c[Math.floor(M()*_c.length)],y=_c[Math.floor(M()*_c.length)],T=1;for(let R=0;R<3;R++){const E=R===1?y:w,P=M()<.4;c.uNebDir.value[R].copy(S()),c.uNebA.value[R].fromArray(P?E[1]:E[0]),c.uNebB.value[R].fromArray(P?E[0]:E[1]),c.uNebSize.value[R]=R<T?.3+M()*.2:0,c.uGal.value[R].copy(S()).multiplyScalar(.6+M()*1.2)}c.uSeed.value=Math.floor(M()*1e3),o.update(n,a),u&&u.dispose(),u=l.fromCubemap(r.texture);const L=c.uPole.value,C=new D;for(let R=0;R<d;R++){C.copy(S()),M()<.5&&C.addScaledVector(L,-C.dot(L)*(.75+M()*.25)).normalize(),g.set([C.x,C.y,C.z],R*3);const E=M()**7,P=M(),U=P<.18?[.7,.82,1]:P<.75?[1,.97,.93]:P<.94?[1,.84,.62]:[1,.62,.48],B=.12+M()*.12+E*3.5;x.set([U[0]*B,U[1]*B,U[2]*B],R*3),m[R]=E*2.2}h.attributes.position.needsUpdate=!0,h.attributes.color.needsUpdate=!0,h.attributes.size.needsUpdate=!0}return{stars:v,bake:b,get background(){return r.texture},get env(){return u?u.texture:null},update(_,M){p.uniforms.uT.value=_,p.uniforms.uPR.value=M}}}function $h(n,e){const t=new jn,i={value:0},s=e==="high",r=new Vt(new Fn(n,96,64),new qt({uniforms:{uT:i,uTint:{value:new pt(1,1,1)}},vertexShader:`${qi}
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
          ${Yi}
        }`,fragmentShader:`${ji}
        ${Ss}
        uniform float uT; uniform vec3 uTint;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          ${Zi}
          vec3 p = normalize(vP);
          float t = uT;
          // Seen as in a solar observatory's images: a deep orange disc with a
          // fine churning network, bright active regions threaded with arching
          // magnetic loops, dark snaking filaments, and a bright fringe at the edge.
          vec3 w = vec3(fbm(p * 3.0 + t * 0.012, 3), fbm(p * 3.0 + 5.0 - t * 0.012, 3), fbm(p * 3.0 + 9.0, 3));
          float net = fbm(p * 38.0 + w * 2.5 + t * 0.03, ${s?5:4}) * 0.5 + 0.5;
          float act = fbm(p * 2.1 + w * 0.6 + vec3(0.0, t * 0.006, 0.0), 3);
          act = smoothstep(0.08, 0.45, act) * smoothstep(0.95, 0.35, abs(p.y));
          // Loops: bright fibres wound round each active region.
          float loops = ridged(p * 11.0 + w * 3.0 + vec3(t * 0.02, 0.0, 0.0), 4);
          float plage = act * (0.35 + 1.4 * pow(max(loops, 0.0), 3.0));
          float core = smoothstep(0.75, 1.0, act) * (0.6 + 0.4 * net);
          // Filaments: thin dark lines away from the active regions.
          float fil = exp(-pow(abs(snoise(p * 3.2 + w * 0.8 + 21.0) / 0.022), 2.0)) * (1.0 - act) * smoothstep(0.2, 0.6, fbm(p * 2.0 + 40.0, 2) * 0.5 + 0.5);
          float mu = max(dot(vN, vV), 0.0);
          float edge = pow(max(1.0 - mu, 0.0), 6.0);
          vec3 deep = vec3(0.75, 0.22, 0.03), base = vec3(1.0, 0.46, 0.08), hotc = vec3(1.0, 0.78, 0.38), white = vec3(1.0, 0.95, 0.82);
          vec3 c = mix(deep, base, 0.35 + net * 0.75);
          c = mix(c, hotc, clamp(plage, 0.0, 1.0));
          c += white * core * 1.4 + hotc * max(plage - 1.0, 0.0) * 0.8;
          c *= 1.0 - fil * 0.3;
          c = mix(c, hotc * 1.3, edge * 0.8); // the bright fringe at the limb
          // Bright, but not white: the bloom does the rest.
          gl_FragColor = vec4(c * uTint * (0.85 + 0.25 * mu), 1.0);
        }`}));t.add(r);const o=new Vt(new To(2,2),new qt({uniforms:{uT:i,uR:{value:n},uTint:r.material.uniforms.uTint},vertexShader:`${qi}
        uniform float uR; varying vec2 vXY;
        void main() {
          float s = length(modelMatrix[0].xyz) * uR * 2.2;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 2.2; // in star radii
          gl_Position = projectionMatrix * mv;
          ${Yi}
        }`,fragmentShader:`${ji}
        ${Ss}
        uniform float uT; uniform vec3 uTint; varying vec2 vXY;
        void main() {
          ${Zi}
          float r = length(vXY);
          if (r < 0.97) discard;
          vec2 dir = vXY / r;
          // A close, fibrous fringe: fine bright threads standing off the limb,
          // flickering and drifting, brighter over the actv longitudes, and a
          // soft glow beyond.
          float rot = uT * 0.01;
          vec2 rd = vec2(dir.x * cos(rot) - dir.y * sin(rot), dir.x * sin(rot) + dir.y * cos(rot));
          float fib = fbm(vec3(rd * 26.0, uT * 0.12 + r * 2.0), 3) * 0.5 + 0.5;
          float fib2 = fbm(vec3(rd * 60.0 + 3.0, uT * 0.2 - r * 4.0), 2) * 0.5 + 0.5;
          float actv = smoothstep(0.35, 0.75, fbm(vec3(rd * 3.0, uT * 0.02), 3) * 0.5 + 0.5);
          float h = r - 1.0;
          float threads = pow(max(fib, 0.0), 3.0) * 1.6 + pow(max(fib2, 0.0), 4.0) * 0.8;
          float fringe = exp(-h / (0.07 + 0.12 * actv * fib)) * (0.6 + threads);
          float glow = exp(-h * 3.0) * 0.18 + exp(-h * 1.1) * 0.04;
          float k = (fringe * (0.7 + actv * 0.8) + glow) * smoothstep(2.2, 1.6, r);
          vec3 c = mix(vec3(1.0, 0.42, 0.08), vec3(1.0, 0.75, 0.35), clamp(fringe * 0.6, 0.0, 1.0)) * uTint;
          gl_FragColor = vec4(c * k * 0.9, 1.0);
        }`,blending:Zn,transparent:!0,depthWrite:!1}));o.frustumCulled=!1,t.add(o);const a=[],c=d=>new qt({uniforms:{uT:i,uA:{value:0},uC:{value:new pt().setHSL(d,1,.55)},uTint:r.material.uniforms.uTint},vertexShader:`${qi}
      varying vec2 vUv; varying float vRim;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vRim = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
        ${Yi}
      }`,fragmentShader:`${ji}
      ${Ss}
      uniform float uT, uA; uniform vec3 uC, uTint; varying vec2 vUv; varying float vRim;
      void main() {
        ${Zi}
        float flow = snoise(vec3(vUv.x * 14.0 - uT * 0.6, vUv.y * 3.0, uT * 0.1)) * 0.5 + 0.5;
        float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float k = uA * (0.35 + flow) * (0.4 + 0.6 * vRim) * (0.5 + ends * 0.5);
        gl_FragColor = vec4(uC * uTint * k * 2.2, 1.0);
      }`,blending:Zn,transparent:!0,depthWrite:!1,side:ai});{const d=Ui(7),h=new D(0,1,0);for(let g=0;g<9;g++){const x=.7+d()*1.3,m=new Vt(new On(x,.07+d()*.08,8,40,Math.PI),c(.03+d()*.05)),p=()=>{const v=new D().randomDirection();m.position.copy(v).multiplyScalar(n*.97),m.quaternion.setFromUnitVectors(h,v),m.rotateY(Math.random()*Math.PI)};p(),a.push({m,place:p,phase:d()*40,period:25+d()*30,peak:.5+d()*.4,lastU:0}),t.add(m)}}const l=Bb(),u=[];for(const[d,h,g]of[[15,"#ffc080",.22],[28,"#ff9a50",.09],[60,"#ff7a30",.03]]){const x=new Dc(new la({map:l,color:h,opacity:g,blending:Zn,depthWrite:!1,transparent:!0}));x.scale.setScalar(d),x.userData.base=d,u.push(x),t.add(x)}function f(d){i.value=d,u.forEach((h,g)=>h.scale.setScalar(h.userData.base*(1+.03*Math.sin(d*(.5+g*.23)+g))));for(const h of a){const g=(d+h.phase)%h.period/h.period;g<h.lastU&&h.place(),h.lastU=g,h.m.material.uniforms.uA.value=Math.sin(g*Math.PI)**2*h.peak,h.m.scale.setScalar(.6+g*.6)}}return{group:t,update:f,tint:r.material.uniforms.uTint.value}}function Bb(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.5)"),t.addColorStop(.5,"rgba(255,255,255,0.1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new Gf(n);return i.colorSpace=ei,i}const hl=3,Gs={tShadow:{value:null},uShadowMat:{value:new Nt},uShadowOn:{value:0},uShadowRange:{value:1},uShadowTexel:{value:1/1024}},Dm=`
vec4 shPack(float v) { vec3 e = fract(v * vec3(1.0, 255.0, 65025.0)); e -= e.yzz * vec3(1.0 / 255.0, 1.0 / 255.0, 0.0); return vec4(e, 1.0); }
float shUnpack(vec4 c) { return dot(c.rgb, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0)); }`,qf=`${Dm}
uniform sampler2D tShadow; uniform mat4 uShadowMat; uniform float uShadowOn, uShadowRange, uShadowTexel;
float sunShadow(vec3 wp, float bias) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 sc = uShadowMat * vec4(wp, 1.0);
  vec3 p = sc.xyz / sc.w * 0.5 + 0.5;
  if (p.x <= 0.0 || p.x >= 1.0 || p.y <= 0.0 || p.y >= 1.0 || p.z >= 1.0) return 1.0;
  float d = p.z * uShadowRange - bias;
  float lit = 0.0;
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++)
    lit += step(d, shUnpack(texture2D(tShadow, p.xy + vec2(float(i), float(j)) * uShadowTexel)) * uShadowRange);
  // Fade out at the edge of the framed patch, so its border never shows.
  vec2 e = min(p.xy, 1.0 - p.xy);
  return mix(1.0, lit / 9.0, smoothstep(0.0, 0.08, min(e.x, e.y)));
}`;function Yf(n){for(const e in Gs)n[e]=Gs[e]}function Gb(n,e){let t=0,i=null;const s=new Wf(-1,1,1,-1,.01,10);s.layers.set(hl);const r=new qt({vertexShader:`
      attribute float kind;
      varying float vZ; varying float vKind;
      void main() {
        vec4 p = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          p = instanceMatrix * p;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * p;
        vZ = gl_Position.z / gl_Position.w * 0.5 + 0.5;
        vKind = kind;
      }`,fragmentShader:`
      ${Dm}
      varying float vZ; varying float vKind;
      void main() {
        if (abs(vKind - 10.0) < 0.5) discard; // worked ground: it is the ground, it doesn't cast
        gl_FragColor = shPack(clamp(vZ, 0.0, 0.9999));
      }`,side:ai}),o=new pt,a=new pt(1,1,1),c=new D,l=new D,u=new D;return{update(f,d,h,g,x){if(!f){Gs.uShadowOn.value=0;return}t!==x&&(i?.dispose(),t=x,i=new fi(x,x,{depthBuffer:!0,generateMipmaps:!1,minFilter:zn,magFilter:zn}),Gs.tShadow.value=i.texture,Gs.uShadowTexel.value=1/x);const m=g.position.distanceTo(f)-d;c.copy(g.position).sub(f).normalize().multiplyScalar(d).add(f);const p=Rt.clamp(m*1.4,.06,d*1.2);l.copy(h).sub(c).normalize(),u.set(0,1,0),Math.abs(l.y)>.95&&u.set(1,0,0);const v=d+1;s.position.copy(c).addScaledVector(l,v),s.up.copy(u),s.lookAt(c),s.left=-p,s.right=p,s.top=p,s.bottom=-p,s.near=.01,s.far=v+p*2,s.updateProjectionMatrix(),s.updateMatrixWorld(),Gs.uShadowMat.value.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Gs.uShadowRange.value=s.far-s.near,Gs.uShadowOn.value=1;const b=e.background,_=e.overrideMaterial,M=n.getRenderTarget(),S=n.getClearAlpha();n.getClearColor(o),e.background=null,e.overrideMaterial=r,n.setRenderTarget(i),n.setClearColor(a,1),n.clear(),n.render(e,s),n.setRenderTarget(M),n.setClearColor(o,S),e.background=b,e.overrideMaterial=_}}}const Um={value:800},le=0,ee=1,qe=2,Ut=3,li=4,Si=5,ln=6,Vd=7,pl=8,Ks=9,Ci=10;let Fs=null;function Vb(){if(Fs)return Fs;const n=256,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=Ui(17);t.fillStyle="#d8d8d8",t.fillRect(0,0,n,n);const s=(r,o,a,c,l)=>{if(l>4||a<18||c<18||l>1&&i()<.18){const u=196+i()*52|0;t.fillStyle=`rgb(${u},${u},${u+2})`,t.fillRect(r+1,o+1,a-2,c-2),t.strokeStyle="rgba(30,34,40,0.6)",t.lineWidth=1,t.strokeRect(r+.5,o+.5,a-1,c-1),t.strokeStyle="rgba(255,255,255,0.25)",t.beginPath(),t.moveTo(r+1.5,o+c-1.5),t.lineTo(r+1.5,o+1.5),t.lineTo(r+a-1.5,o+1.5),t.stroke();const f=i();if(f<.15)t.fillStyle="rgba(40,44,52,0.45)",t.fillRect(r+a*.3,o+c*.3,a*.3,c*.25);else if(f<.25){t.fillStyle="rgba(30,32,36,0.5)";for(let d=0;d<5;d++)t.fillRect(r+3,o+3+d*3,a*.4,1)}else if(f<.33){t.fillStyle="rgba(30,30,30,0.45)";for(let d=3;d<a-3;d+=4)t.fillRect(r+d,o+2,1,1),t.fillRect(r+d,o+c-3,1,1)}else if(f<.36){t.save(),t.beginPath(),t.rect(r+2,o+c-7,a-4,5),t.clip();for(let d=-10;d<a;d+=6)t.fillStyle="rgba(190,140,30,0.7)",t.beginPath(),t.moveTo(r+d,o+c),t.lineTo(r+d+3,o+c),t.lineTo(r+d+8,o+c-8),t.lineTo(r+d+5,o+c-8),t.fill();t.restore()}return}if(a>c){const u=a*(.3+i()*.4)|0;s(r,o,u,c,l+1),s(r+u,o,a-u,c,l+1)}else{const u=c*(.3+i()*.4)|0;s(r,o,a,u,l+1),s(r,o+u,a,c-u,l+1)}};s(0,0,n,n,0);for(let r=0;r<90;r++)t.fillStyle=`rgba(20,20,26,${.03+i()*.06})`,t.fillRect(i()*n,i()*n,1+i()*14,1);for(let r=0;r<1200;r++)t.fillStyle=i()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",t.fillRect(i()*n,i()*n,1,1);return Fs=new Gf(e),Fs.colorSpace=ei,Fs.wrapS=Fs.wrapT=ya,Fs.anisotropy=4,Fs}const yc=new D(0,1,0);function hn(n){const e=[],t=Ui(n),i=Math.PI/2,s=(o,a,c=1)=>(o.userData.kind=a,o.userData.tint=c,e.push(o),o),r={r:t,add:(o,a=le,c=1)=>s(o,a,c),box:(o,a,c,l=0,u=0,f=0,d=le,h)=>s(new ut(o,a,c).translate(l,u,f),d,h),cyl:(o,a,c,l,u=le,f=12,d=0,h=0,g)=>s(new Ee(o,a,c,f).rotateX(i).translate(d,h,l),u,g),oct:(o,a,c,l,u=1,f=0,d=0,h=le,g)=>s(new Ee(.5*u,.5,c,8).rotateY(Math.PI/8).rotateX(i).scale(o,a,1).translate(f,d,l),h,g),sphere:(o,a,c,l,u=le,f,d=10)=>s(new Fn(o,d,Math.max(6,d*.6|0)).translate(a,c,l),u,f),tank:(o,a,c,l,u,f=le,d)=>s(new vo(o,a,2,8).rotateX(i).translate(c,l,u),f,d),boom:(o,a,c,l,u,f=.004,d=ee,h)=>{const g=new D(...l).normalize(),x=new ut(f,u,f).translate(0,u/2,0);return x.applyQuaternion(new Bn().setFromUnitVectors(yc,g)).translate(o,a,c),s(x,d,h),[o+g.x*u,a+g.y*u,c+g.z*u]},dish:(o,a,c,l,u,f=le)=>{const d=new D(...u).normalize(),h=new Bn().setFromUnitVectors(yc,d);s(new Ee(o,o*.14,o*.32,18).translate(0,o*.16,0).applyQuaternion(h).translate(a,c,l),f,1.05),r.boom(a,c,l,u,o*.75,Math.max(.002,o*.06))},radiator:(o,a,c,l,u,f,d=3,h=.003,g=pl)=>{const x=u*.035,m=(u-x*(d-1))/d;for(let v=0;v<d;v++){const b=c-u/2+m/2+v*(m+x);s(new ut(l,h,m).translate(l/2,0,0).rotateZ(f).translate(o,a,b),g,(g===pl?.92:.55)+t()*.14),r.strut(o+Math.cos(f)*l,a+Math.sin(f)*l,b-m/2,o+Math.cos(f)*l,a+Math.sin(f)*l,b+m/2,h*1.8,ee,.7)}if(r.cyl(h*1.5,h*1.5,u*1.04,c,le,6,o,a,.75),Math.hypot(o,a)>1e-4)for(const v of[-.42,.42])r.pipe(o,a,c+v*u,o*.55,a*.55,c+v*u*1.1,h*.9,ee);return[o+Math.cos(f)*l,a+Math.sin(f)*l]},strut:(o,a,c,l,u,f,d=.003,h=ee,g)=>{const x=new D(l-o,u-a,f-c),m=x.length();if(m<1e-6)return;const p=new Ee(d*.62,d*.62,m,3,1,!0).translate(0,m/2,0);p.applyQuaternion(new Bn().setFromUnitVectors(yc,x.normalize())).translate(o,a,c),s(p,h,g)},pipe:(o,a,c,l,u,f,d=.0022,h=le)=>{const g=new D(l-o,u-a,f-c),x=g.length();if(x<1e-6)return;const m=new Ee(d,d,x,4,1,!0).translate(0,x/2,0);m.applyQuaternion(new Bn().setFromUnitVectors(yc,g.normalize())).translate(o,a,c),s(m,h,.8)},truss3:(o,a,c,l,u,f,d=.004,h=0,g=ee)=>{const x=[0,1,2].map(p=>{const v=h+Math.PI/2+p*2*Math.PI/3;return[o+Math.cos(v)*u,a+Math.sin(v)*u]});for(const[p,v]of x)r.strut(p,v,c,p,v,l,d,g);const m=(l-c)/f;for(let p=0;p<=f;p++){const v=c+p*m;for(let b=0;b<3;b++)r.strut(x[b][0],x[b][1],v,x[(b+1)%3][0],x[(b+1)%3][1],v,d*.8,g);if(p===f)break;for(let b=0;b<3;b++){const[_,M]=p%2?[x[b],x[(b+1)%3]]:[x[(b+1)%3],x[b]];r.strut(_[0],_[1],v,M[0],M[1],v+m,d*.7,g,.85)}}},frame:(o,a,c,l,u,f,d=.003,h=ee)=>{const g=l-o/2,x=l+o/2,m=u-a/2,p=u+a/2,v=f-c/2,b=f+c/2;for(const _ of[m,p])for(const M of[v,b])r.strut(g,_,M,x,_,M,d,h);for(const _ of[g,x])for(const M of[v,b])r.strut(_,m,M,_,p,M,d,h);for(const _ of[g,x])for(const M of[m,p])r.strut(_,M,v,_,M,b,d,h)},strapped:(o,a,c,l,u,f=!1,d=1)=>{r.tank(o,a,c,l,u,le,d);const h=(g,x,m,p,v)=>s(new Ee(g,g,x,10,1,!0).rotateX(i).translate(c,l,m),p,v);for(const g of[-.32,.32])h(o*1.06,o*.16,u+g*a,ee,.8);f&&h(o*1.04,a*.3,u,qe,1)},collar:(o,a,c=0,l=0,u=1)=>{r.cyl(o*.85,o*.85,.014,a,le,12,c,l,.9),r.cyl(o*1.25,o*1.25,.004,a+u*.007,ee,14,c,l)},engine:(o,a,c,l,u,f=6)=>{r.bell(o,a,c);for(let d=0;d<f;d++){const h=d/f*Math.PI*2+.3;r.strut(Math.cos(h)*l,Math.sin(h)*l,u,Math.cos(h)*o*.5,Math.sin(h)*o*.5,a-c*.12,.004,ee,.8)}r.cyl(l*1.05,l*1.05,.008,u,ee,14)},solar:(o,a,c,l,u,f,d=.003)=>{s(new ut(l,d,u).translate(l/2,0,0).rotateZ(f).translate(o,a,c),Ks,1),s(new ut(l,d*1.4,d*1.4).translate(l/2,0,0).rotateZ(f).translate(o,a,c),ee,.7),s(new ut(d*1.4,d*1.4,u).translate(l,0,0).rotateZ(f).translate(o,a,c),ee,.7)},truss:(o,a,c,l,u,f,d=.004,h=ee)=>{const g=(l-c)/f;for(const x of[-1,1])for(const m of[-1,1])r.strut(o+x*u/2,a+m*u/2,c,o+x*u/2,a+m*u/2,l,d,h);for(let x=0;x<=f;x++){const m=c+x*g;for(const v of[-1,1])r.strut(o-u/2,a+v*u/2,m,o+u/2,a+v*u/2,m,d,h),r.strut(o+v*u/2,a-u/2,m,o+v*u/2,a+u/2,m,d,h);if(x===f)break;const p=x%2?1:-1;for(const v of[-1,1])r.strut(o+v*u/2,a-p*v*u/2,m,o+v*u/2,a+p*v*u/2,m+g,d*.8,h,.85),r.strut(o-p*v*u/2,a+v*u/2,m,o+p*v*u/2,a+v*u/2,m+g,d*.8,h,.85)}},shield:(o,a)=>s(new Ee(o,o*.62,.014,18).rotateX(i).translate(0,0,a),ee,.75),turret:(o,a,c,l=1,u=1)=>{r.cyl(.017*u,.02*u,.01*u,c,ee,10,o,a),r.box(.026*u,.012*u*l,.03*u,o,a+.008*u*l,c,le,.85);for(const f of[-.005,.005])r.box(.004*u,.004*u,.06*u,o+f*u,a+.01*u*l,c+.04*u,ee,.6)},cells:(o,a,c,l,u,f=.011)=>{for(let d=0;d<l;d++)for(let h=0;h<u;h++)r.box(f*.72,.002,f*.72,o+(d-(l-1)/2)*f,a,c+(h-(u-1)/2)*f,ee,.45+t()*.3)},rcs:(o,a,c,l,u)=>{r.box(.011,.011,.014,o,a,c,ee,.8),r.box(.004,.004,.004,o+l*.0075,a+u*.0075,c,ee,.5),r.box(.004,.004,.004,o,a,c+.009,ee,.5)},hoop:(o,a,c,l,u=0,f=0,d=0,h=.004,g=le)=>{for(let x=0;x<l;x++){const m=x/l*Math.PI*2;r.add(new ut(a,2*Math.PI*o/l*1.02,c).rotateZ(m).translate(Math.cos(m)*o,Math.sin(m)*o,u),x%9===4?qe:g,.9+t()*.2),h&&x%2===0&&r.add(new ut(h*.5,2*Math.PI*o/l*.55,c*.3).rotateZ(m).translate(Math.cos(m)*(o-a/2-h*.2),Math.sin(m)*(o-a/2-h*.2),u+(t()-.5)*c*.4),Ut)}for(let x=0;x<f;x++){const m=x/f*Math.PI*2+.3;r.add(new Ee(c*.12,c*.12,o-a/2-d,8).translate(0,d+(o-a/2-d)/2,0).rotateZ(m).translate(0,0,u),ee)}},bell:(o,a,c=.16)=>{const l=[];for(let u=0;u<=8;u++){const f=u/8;l.push(new Be(o*(.42+.58*Math.pow(f,1.6)),-f*c))}s(new vr(l,20).rotateX(-i).translate(0,0,a),ee,.7),s(new Ee(o*.4,o*.4,.004,16).rotateX(i).translate(0,0,a-.012),Vd),r.nozzle===void 0&&(r.nozzle=a-c-.01)},bell2:(o,a,c,l,u=.05)=>{const f=[];for(let d=0;d<=6;d++){const h=d/6;f.push(new Be(o*(.45+.55*Math.pow(h,1.5)),-h*u))}s(new vr(f,12).rotateX(-i).translate(a,c,l),ee,.65)},greeble:(o,a,c,l,u,f,d,h="tbs")=>{for(let g=0;g<d;g++){const x=h[Math.floor(t()*h.length)],m=(.1+t()*.25)*o,p=(.08+t()*.3)*c,v=.004+t()*.012,b=l+(t()-.5)*(o-m),_=f+(t()-.5)*(c-p),M=t()<.6?ee:le;if(x==="t")r.box(m,v,p,b,u+a/2+v/2,_,M);else if(x==="b")r.box(m,v,p,b,u-a/2-v/2,_,M);else{const S=t()<.5?-1:1,w=u+(t()-.5)*(a-m*.6);r.box(v,Math.min(m,a*.4),p,l+S*(o/2+v/2),w,_,M)}}},pdc:(o,a,c,l=1)=>{r.cyl(.011,.013,.008,c,ee,8,o,a),r.box(.014,.01*l,.014,o,a+.006*l,c,ee,.9),r.box(.003,.003,.03,o-.003,a+.009*l,c+.016,ee,.6),r.box(.003,.003,.03,o+.003,a+.009*l,c+.016,ee,.6)},light:(o,a,c,l,u=.008)=>r.box(u,u,u,o,a,c,l),windows:(o,a,c,l,u,f=[-1,1])=>{for(let d=0;d<u;d++){const h=c+(l-c)*d/Math.max(1,u-1);for(const g of f)r.box(.002,.006,.01,g*o,a,h,Ut)}},build(o=1.35,a=7,c=0){const l=[],u=[];for(const d of e){const h=d.index?d.toNonIndexed():d;h.deleteAttribute("uv");const g=h.attributes.position.count,x=new Float32Array(g).fill(d.userData.kind),m=new Float32Array(g).fill(d.userData.tint*(.9+t()*.2));h.setAttribute("kind",new mn(x,1)),h.setAttribute("tint",new mn(m,1)),h.computeVertexNormals();const p=h.attributes.position,v=h.attributes.normal,b=new Float32Array(g*2);for(let _=0;_<g;_++){const M=Math.abs(v.getX(_)),S=Math.abs(v.getY(_)),w=Math.abs(v.getZ(_)),y=p.getX(_),T=p.getY(_),L=p.getZ(_);M>=S&&M>=w?(b[_*2]=L*a,b[_*2+1]=T*a):S>=w?(b[_*2]=y*a,b[_*2+1]=L*a):(b[_*2]=y*a,b[_*2+1]=T*a)}if(h.setAttribute("uv",new mn(b,2)),l.push(h),c){h.computeBoundingSphere();const _=d.userData.kind;(h.boundingSphere.radius>=c||_>=Ut&&_<=Vd)&&u.push(h)}}const f=Vh(l);if(f.scale(o,o,1),f.computeBoundingSphere(),f.userData.nozzle=r.nozzle??0,c){const d=Vh(u);d.scale(o,o,1),d.computeBoundingSphere(),f.userData.coarse=d}return f}};return r}const Wo=.04;function Hb(){const n=hn(11);n.tank(.034,.07,0,0,.33,le,1.05),n.cyl(.036,.036,.034,.325,qe,14),n.collar(.016,.39),n.box(.03,.006,.004,0,.018,.372,Ut),n.box(.02,.003,.02,0,.036,.31,ee),n.truss3(0,0,-.205,.29,.036,7,.0045),n.strapped(.021,.08,.04,-.012,.13,!0),n.strapped(.021,.08,-.038,-.012,.06),n.strapped(.018,.06,0,.05,-.04,!1,.95),n.pipe(.04,-.012,.08,.012,-.016,-.2),n.pipe(-.038,-.012,.01,-.012,-.016,-.2),n.pipe(0,.05,-.08,0,.02,-.2),n.shield(.046,-.21),n.cyl(.032,.038,.05,-.24,ee,12),n.engine(.05,-.27,.12,.036,-.262),n.radiator(.03,.018,-.07,.05,.24,.45,6),n.radiator(-.03,.018,-.07,.05,.24,Math.PI-.45,6);for(const R of[-1,1])n.boom(0,0,.29,[R,0,0],.05,.004),n.rcs(R*.05,0,.29,R,0),n.boom(0,0,-.2,[R,0,0],.05,.004),n.rcs(R*.05,0,-.2,R,0);n.light(-.055,0,.29,li),n.light(.055,0,.29,Si),n.light(0,.04,-.03,ln);const e=n.build(1.35,7,Wo),t=hn(23);t.cyl(.064,.064,.14,.2,le,18),t.cyl(.05,.064,.03,.285,le,18),t.cyl(.066,.066,.05,.19,qe,18),t.collar(.022,.305);for(let R=0;R<6;R++){const E=R/6*Math.PI*2+.5;t.box(.012,.005,.005,Math.cos(E)*.064,Math.sin(E)*.064,.245,Ut)}t.box(.022,.003,.022,0,.066,.15,ee),t.box(.003,.022,.022,.066,0,.25,ee),t.oct(.15,.15,.024,.118,1,0,0,ee,.8),t.greeble(.15,.15,.024,0,0,.118,8,"tb"),t.cyl(.018,.018,.17,.02,ee,8);for(let R=0;R<6;R++){const E=R/6*Math.PI*2+.26,P=Math.cos(E)*.056,U=Math.sin(E)*.056;t.strapped(.025,.065,P,U,.035,R%3===0),t.pipe(P*.6,U*.6,-.01,Math.cos(E)*.02,Math.sin(E)*.02,-.07)}t.shield(.052,-.075),t.cyl(.04,.044,.05,-.105,ee,12),t.engine(.056,-.135,.11,.046,-.128);for(const R of[.6,2.7,4.6])t.radiator(Math.cos(R)*.042,Math.sin(R)*.042,-.105,.05,.05,R,2,.003,ee);t.pdc(0,.066,.24),t.sphere(.012,-.045,.045,.272,ee,.6,10);for(const R of[.8,2.35,3.9,5.5])t.rcs(Math.cos(R)*.07,Math.sin(R)*.07,.26,Math.cos(R),Math.sin(R));for(const R of[0,Math.PI])t.rcs(Math.cos(R)*.085,Math.sin(R)*.085,.035,Math.cos(R),0);t.light(-.066,0,.2,li),t.light(.066,0,.2,Si),t.light(0,0,.316,ln);const i=t.build(1.35,7,Wo),s=hn(37);s.truss(0,0,-.17,.3,.03,6),s.cyl(.028,.028,.07,.31,le,12,.032,.026),s.cyl(.03,.03,.02,.3,qe,12,.032,.026),s.collar(.014,.352,.032,.026),s.box(.02,.005,.004,.032,.04,.346,Ut),s.strut(.015,.015,.29,.032,.026,.29,.005);const r=[[.21,[[.05,0,.03,.08,!0],[-.045,.018,.027,.08],[0,.052,.024,.07]]],[.07,[[.056,.016,.035,.1],[-.052,-.02,.035,.1,!0],[0,-.056,.03,.09],[.004,.056,.03,.09]]]];for(const[R,E]of r){for(const[P,U,B,V,ne]of E)s.strapped(B,V,P,U,R,!!ne),s.strut(P*.4,U*.4,R,P*.75,U*.75,R,.005);s.frame(.15,.15,.012,0,0,R-.05,.004)}s.sphere(.042,.044,.004,-.075,le,.95,10),s.sphere(.036,-.038,.03,-.085,le,1.02,10),s.cyl(.044,.044,.012,-.075,qe,12,.044,.004),s.frame(.07,.06,.08,-.04,-.045,-.06,.003),s.pipe(.044,.004,-.115,.01,0,-.17),s.pipe(-.038,.03,-.12,-.01,.01,-.17),s.shield(.05,-.175),s.cyl(.036,.042,.05,-.205,ee,12),s.engine(.05,-.235,.12,.04,-.228),s.radiator(.022,.022,-.205,.06,.07,.9,2),s.rcs(.05,0,.29,1,0),s.rcs(-.025,-.02,.29,-1,0),s.rcs(.03,.03,-.19,1,0),s.rcs(-.03,-.03,-.19,-1,0),s.light(-.03,0,.3,li),s.light(.06,.026,.31,Si),s.light(0,.03,-.12,ln);const o=s.build(1.35,7,Wo),a=hn(53);a.oct(.1,.086,.15,.27,.82),a.cyl(.018,.018,.006,.346,ee,12,0,.008),a.box(.07,.008,.1,0,.044,.26,qe),a.box(.008,.06,.1,.051,0,.26,qe),a.turret(0,.048,.205,1,1.1),a.turret(0,-.045,.3,-1,.9),a.box(.036,.012,.08,-.034,.048,.25),a.cells(-.034,.055,.25,3,6,.011),a.cyl(.011,.014,.05,.33,ee,10,-.056,-.02),a.radiator(-.06,-.03,.27,.03,.05,Math.PI+.6,2,.003,ee),a.windows(.051,-.02,.22,.25,2,[-1]),a.collar(.016,.19,0,-.03,-1),a.truss(0,0,-.15,.195,.034,4),a.strapped(.02,.1,.036,0,.08),a.strapped(.02,.1,-.036,0,.03,!0),a.pipe(.036,0,.02,.01,0,-.15),a.pipe(-.036,0,-.03,-.01,0,-.15);for(const R of[.62,2.5,3.8,5.6])a.radiator(Math.cos(R)*.026,Math.sin(R)*.026,-.03,.15,.24,R,6);a.shield(.06,-.158),a.oct(.08,.08,.07,-.195,1),a.cyl(.05,.055,.02,-.24,ee,14),a.engine(.062,-.255,.13,.05,-.245);for(const[R,E]of[[.058,.03],[-.058,-.03]])a.rcs(R,E,.31,Math.sign(R),0);for(const[R,E]of[[.046,-.036],[-.046,.036]])a.rcs(R,E,-.2,Math.sign(R),0);a.light(-.063,0,.25,li),a.light(.063,0,.25,Si),a.light(0,0,-.03,ln);const c=a.build(1.35,7,Wo),l=hn(67);l.cyl(.024,.03,.05,.33,le,12),l.boom(0,0,.355,[0,0,1],.05,.004),l.box(.01,.01,.01,0,0,.405,ee),l.box(.008,.008,.008,.02,.02,.33,ee),l.boom(.02,.02,.33,[1,.7,.3],.07),l.dish(.04,-.03,.03,.3,[-.5,.6,.6]),l.cyl(.028,.028,.12,.22,le,14),l.cyl(.04,.04,.03,.2,ee,14),l.cyl(.03,.03,.03,.255,qe,14),l.collar(.014,.16,0,0,-1),l.truss3(0,0,-.17,.16,.026,5,.004),l.strapped(.02,.08,.03,.01,.06),l.strapped(.02,.08,-.03,0,0,!0),l.strapped(.016,.06,0,-.032,-.07),l.pipe(.03,.01,.01,.008,0,-.17),l.pipe(-.03,0,-.05,-.008,0,-.17),l.radiator(.016,0,-.11,.1,.12,.12,4),l.radiator(-.016,0,-.11,.05,.12,Math.PI-.3,4,.003,ee),l.shield(.045,-.176),l.cyl(.03,.036,.05,-.205,ee,12),l.engine(.042,-.232,.11,.032,-.226),l.rcs(.03,0,.3,1,0),l.rcs(-.03,0,.3,-1,0),l.rcs(.024,.02,-.18,1,0),l.rcs(-.024,-.02,-.18,-1,0),l.light(-.07,.07,.2,li),l.light(.07,-.07,.2,Si),l.light(0,0,.41,ln);const u=l.build(1.35,7,Wo),f=hn(71);f.hoop(.085,.022,.03,24,.2,3,.04),u.userData.rotor=f.build(),u.userData.rotorSpin=.6;const d=hn(41);d.oct(.05,.05,.06,0,1),d.box(.05,.003,.04,0,.026,-.005,qe),d.cyl(.014,.016,.04,.05,ee,12),d.add(new Ee(.02,.018,.022,12,1,!0).rotateX(Math.PI/2).translate(0,0,.08),le,.9),d.dish(.036,0,.026,0,[0,1,.25]),d.box(.008,.008,.008,-.025,0,-.01,ee),d.box(.008,.008,.008,.022,-.022,-.02,ee);const[h,g,x]=d.boom(-.025,0,-.01,[-1,.15,-.1],.18,.003);d.box(.012,.012,.012,h,g,x,ee,.7);const[m,p,v]=d.boom(.022,-.022,-.02,[.7,-.7,-.2],.05,.004);d.cyl(.01,.01,.04,v,ee,8,m,p);for(const R of[0,1,2,3])d.box(R%2?.004:.03,R%2?.03:.004,.032,m,p,v,ee,.6);for(const R of[-1,1])d.rcs(R*.028,.02,-.025,R,0);d.bell(.018,-.035,.028),d.light(0,.03,-.02,ln,.006);const b=d.build(),_=hn(43);_.box(.04,.04,.05,0,0,0),_.box(.042,.042,.012,0,0,-.01,qe),_.dish(.075,0,0,.026,[0,0,1]),_.boom(.02,0,0,[1,0,0],.03),_.solar(.05,0,0,.12,.05,0),_.boom(-.02,0,0,[-1,0,0],.025),_.solar(-.045,0,0,.08,.05,Math.PI+.4),_.radiator(0,-.02,-.005,.03,.03,-Math.PI/2,1),_.boom(.01,.02,-.02,[.3,1,-.4],.09,.002),_.boom(-.01,-.02,-.02,[-.2,-1,-.5],.07,.002);for(const R of[-1,1])_.rcs(R*.022,.018,-.022,R,0);_.bell(.014,-.025,.022),_.light(0,-.024,0,ln,.006);const M=_.build(),S=hn(47);S.sphere(.03,0,0,0,le,1,14),S.cyl(.031,.031,.014,0,qe,14),S.box(.04,.03,.03,0,.03,.02,le,.9),S.greeble(.04,.03,.03,0,.03,.02,3,"t");const[w,y,T]=S.boom(0,.02,.035,[0,-.3,1],.045,.006);S.sphere(.013,w,y,T,ee,.6,12),S.cyl(.005,.005,.004,T+.012,Ut,8,w,y);for(const R of[.785,2.356,3.927,5.498])S.boom(0,0,-.012,[Math.cos(R),Math.sin(R),0],.04,.003),S.rcs(Math.cos(R)*.04,Math.sin(R)*.04,-.012,Math.cos(R),Math.sin(R));S.solar(.02,.045,.02,.05,.035,.35),S.boom(-.012,.045,.01,[-.2,1,-.3],.06,.0018),S.engine(.022,-.045,.04,.02,-.03,4),S.light(0,.046,0,ln,.005);const L=S.build(),C=[e,i,o,c,u];return C.probes=[b,M,L],C}const km=new Ll(new Uint8Array([255,255,255,255]),1,1);km.needsUpdate=!0;function Hd(n,e=null){const t=Vb(),i=new fl({color:"#d4d8de",map:t,roughnessMap:t,metalness:.35,roughness:.62,emissive:"#06070a"});return i.onBeforeCompile=s=>{s.uniforms.uT=n,s.uniforms.uPxK=Um,s.uniforms.tGround={value:e||km},s.uniforms.uGroundTex={value:e?1:0},Yf(s.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        attribute float kind; attribute float tint; attribute vec3 iPaint; attribute float iSun; attribute float iSeed; attribute float iHull; attribute float iLit; attribute vec3 iGround; attribute vec3 gnd;
        varying vec3 vGnd;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying vec3 vGround;
        uniform float uPxK; varying float vPx; varying vec3 vLocal; varying vec3 vShW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vLocal = position;
        vKind = kind; vTint = tint; vPaint = iPaint; vSun = iSun; vSeed = iSeed; vHull = iHull; vLit = iLit; vGround = iGround; vGnd = gnd;`).replace("#include <project_vertex>",`#include <project_vertex>
        // How big the whole vessel is on screen, in pixels.
        vPx = uPxK * length((modelMatrix * instanceMatrix)[0].xyz) * 0.6 / max(-mvPosition.z, 1e-3);
        vShW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uT;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying float vPx; varying vec3 vLocal; varying vec3 vGround;
        varying vec3 vGnd; uniform sampler2D tGround; uniform float uGroundTex;
        varying vec3 vShW;
        ${qf}
        float isK(float k) { return 1.0 - step(0.5, abs(vKind - k)); }`).replace("#include <map_fragment>",`#include <map_fragment>
        // Radiators and solar cells aren't armour plate: no plating pattern.
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuse, isK(8.0) + isK(9.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), isK(10.0));`).replace("#include <color_fragment>",`#include <color_fragment>
        float dark = isK(1.0) + isK(7.0);
        float paint = isK(2.0);
        float rad = isK(8.0); // radiator panels: pale ceramic
        float sol = isK(9.0); // solar cells: deep blue
        vec3 base = mix(mix(mix(vec3(vHull), vec3(0.26, 0.27, 0.3), dark), vec3(0.9, 0.88, 0.84), rad), vec3(0.06, 0.09, 0.2), sol) * vTint;
        // Close up, radiators show their coolant ribs (across the panel) and
        // solar arrays their cell grid and bus bars; both fade out far off.
        float fine = smoothstep(40.0, 140.0, vPx);
        float rib = smoothstep(0.55, 0.85, abs(fract(vLocal.z * 150.0) - 0.5) * 2.0);
        base *= 1.0 - rad * rib * 0.3 * fine;
        vec2 cg = abs(fract(vec2(vLocal.x + vLocal.y, vLocal.z) * 90.0) - 0.5) * 2.0;
        float cell = max(smoothstep(0.8, 0.95, cg.x), smoothstep(0.8, 0.95, cg.y));
        base = mix(base, vec3(0.55, 0.58, 0.62), sol * cell * 0.6 * fine);
        diffuseColor.rgb *= mix(base, vPaint * 0.9 + 0.04, paint);
        {
          // Worked ground: the world's colour, with grit up close.
          vec3 q = floor(vLocal * 900.0);
          float grit = fract(sin(dot(q, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          float gnd = isK(10.0);
          // painted with the world's own surface where it has a map (gnd.xy
          // on it), else a mottling; gnd.z is the rock's light and dark and
          // the shade at the foot of the structures standing on it.
          vec3 gmap = (uGroundTex > 0.5 ? pow(texture2D(tGround, vGnd.xy).rgb, vec3(2.2)) : vec3(1.0)) * vGnd.z;
          float mot = (sin(vLocal.x * 9.0 + vLocal.z * 3.1) + sin(vLocal.z * 11.0 - vLocal.x * 4.3) + sin((vLocal.x + vLocal.z) * 23.0)) * (1.0 - uGroundTex);
          diffuseColor.rgb = mix(diffuseColor.rgb, vGround * gmap * vTint * (0.9 + grit * 0.2 * fine) * (1.0 + mot * 0.06), gnd);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        // Bare structure is worked metal (it catches the sun), radiators are
        // matte ceramic, solar cells glassy.
        roughnessFactor = mix(roughnessFactor, 0.45, isK(1.0));
        roughnessFactor = mix(roughnessFactor, 0.9, isK(8.0));
        roughnessFactor = mix(roughnessFactor, 0.22, isK(9.0));
        roughnessFactor = mix(roughnessFactor, 1.0, isK(10.0));`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.7, isK(1.0));
        metalnessFactor = mix(metalnessFactor, 0.05, isK(8.0));
        metalnessFactor = mix(metalnessFactor, 0.5, isK(9.0));
        metalnessFactor = mix(metalnessFactor, 0.0, isK(10.0));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // Soft pulses, not on/off: a light switching on in one frame reads as a flash.
          float ph = fract(uT * 0.7 + vSeed);
          float blink = smoothstep(0.0, 0.03, ph) * smoothstep(0.12, 0.05, ph);
          float ps = fract(uT * 0.45 + vSeed * 1.7);
          float flash = smoothstep(0.0, 0.02, ps) * smoothstep(0.08, 0.03, ps);
          // Running lights only show once the vessel is big enough on screen
          // to see them on it; far off, a lone bright pixel blooms into a halo
          // bigger than the ship (the "flashes" round distant worlds).
          float near = smoothstep(10.0, 30.0, vPx);
          totalEmissiveRadiance += isK(3.0) * vec3(1.6, 1.1, 0.55) * vLit * near;
          totalEmissiveRadiance += isK(4.0) * vec3(2.2, 0.1, 0.06) * (0.35 + blink * 0.6) * vLit * near;
          totalEmissiveRadiance += isK(5.0) * vec3(0.08, 2.2, 0.45) * (0.35 + blink * 0.6) * vLit * near;
          totalEmissiveRadiance += isK(6.0) * vec3(2.2) * flash * vLit * near;
          totalEmissiveRadiance += isK(7.0) * vec3(0.6, 0.9, 1.6) * vLit * near;
          totalEmissiveRadiance += paint * vPaint * 0.05;
        }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        // In the sun's eye (an eclipse: vSun) and out of other buildings' shadows.
        float shd = vSun * sunShadow(vShW, 0.004);
        reflectedLight.directDiffuse *= shd;
        reflectedLight.directSpecular *= shd;
        {
          // Fill: a faint cool skylight and an edge rim, so the side away from
          // the sun keeps its outline against space instead of vanishing. The
          // sun stays the one strong, directional light.
          float ndv = abs(dot(normal, normalize(vViewPosition)));
          float rim = pow(1.0 - ndv, 3.0);
          reflectedLight.indirectDiffuse += diffuseColor.rgb * vec3(0.5, 0.58, 0.78) * (0.05 + rim * 0.3);
        }`)},i}function $b(n){return new qt({uniforms:{uT:n},vertexShader:`${qi}
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
        ${Yi}
      }`,fragmentShader:`${ji}
      uniform float uT;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        ${Zi}
        if (vPow <= 0.0) discard;
        float flick = 0.88 + 0.12 * sin(uT * 53.0 + vSeed * 17.0) * sin(uT * 31.0 + vSeed * 5.0);
        vec3 col;
        if (vPart < 0.5) {
          float v = clamp(vQ.y, 0.0, 1.0);
          float u = vQ.x;
          float w = 0.16 * (1.0 + v * 1.6);
          float core = exp(-pow(abs(u / (w * 0.35)), 2.0)) * pow(max(1.0 - v, 0.0), 1.4);
          float sheath = exp(-pow(abs(u / w), 2.0)) * pow(max(1.0 - v, 0.0), 2.2);
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
      }`,blending:Zn,transparent:!0,depthWrite:!1})}function Wb(){return new qt({uniforms:{uPR:{value:1}},vertexShader:`${qi}
      attribute vec3 color; attribute float size;
      uniform float uPR; varying vec3 vCol;
      void main() {
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPR;
        ${Yi}
      }`,fragmentShader:`${ji}
      varying vec3 vCol;
      void main() {
        ${Zi}
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float k = exp(-r * r * 5.0) + exp(-abs(p.y) * 40.0) * (1.0 - r) * 0.35;
        if (k < 0.01) discard;
        gl_FragColor = vec4(vCol * k, 1.0);
      }`,blending:Zn,transparent:!0,depthWrite:!1})}function Ws(n,e,t=null){const i=n.clone();let s=Wh||(Wh=Hd(e));t&&(Ru.has(t)||Ru.set(t,Hd(e,t)),s=Ru.get(t));const r=new ll(i,s,1),o=(f,d)=>{const h=new mo(new Float32Array(d),d.length);return i.setAttribute(f,h),h},a=o("iPaint",[.6,.6,.6]),c=o("iSun",[1]),l=o("iLit",[0]),u=o("iGround",[.2,.19,.18]);return o("iSeed",[Math.random()]),o("iHull",[.95]),r.setMatrixAt(0,new Nt),r.frustumCulled=!1,r.userData.set=(f,d,h)=>{const g=new pt(f);a.setXYZ(0,g.r,g.g,g.b),a.needsUpdate=!0,c.setX(0,d),c.needsUpdate=!0,l.setX(0,h?1:0),l.needsUpdate=!0},r.userData.ground=f=>{u.setXYZ(0,f[0],f[1],f[2]),u.needsUpdate=!0},r}let Wh=null;const Ru=new WeakMap,Xb=40;function qb(n,e){const t={value:0},i=Hb(),s=[...i,...i.probes],r=i.length,o=Hd(t),a=Me=>{const st=Me.clone(),Qe=new ll(st,o,e);Qe.instanceMatrix.setUsage(zs);const Ce=(te,ue)=>{const we=new mo(new Float32Array(e*ue),ue);return we.setUsage(zs),st.setAttribute(te,we),we};return Qe.userData={paint:Ce("iPaint",3),sun:Ce("iSun",1),seed:Ce("iSeed",1),hull:Ce("iHull",1),n:0},Ce("iLit",1).array.fill(1),Qe.frustumCulled=!1,Qe.count=0,n.add(Qe),Qe},c=s.map(a),l=s.map(Me=>Me.userData.rotor?a(Me.userData.rotor):null),u=s.map(Me=>Me.userData.coarse?a(Me.userData.coarse):null),f=[...c,...l.filter(Boolean),...u.filter(Boolean)],d=new Nt,h=new wm;h.setAttribute("position",new yt([-1,-.02,0,1,-.02,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),h.setAttribute("part",new yt([0,0,0,0,1,1,1,1],1)),h.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]);const g=e*3,x=(Me,st)=>{const Qe=new mo(new Float32Array(g*st),st);return Qe.setUsage(zs),h.setAttribute(Me,Qe),Qe},m=x("iPow",1),p=x("iSeed",1),v=x("iTint",3),b=new ll(h,$b(t),g);b.instanceMatrix.setUsage(zs),b.frustumCulled=!1,b.count=0,b.renderOrder=2,n.add(b);const _=new Wt,M=new Float32Array(e*3),S=new Float32Array(e*3),w=new Float32Array(e);_.setAttribute("position",new mn(M,3).setUsage(zs)),_.setAttribute("color",new mn(S,3).setUsage(zs)),_.setAttribute("size",new mn(w,1).setUsage(zs));const y=Wb(),T=new Bf(_,y);T.frustumCulled=!1,T.renderOrder=3,n.add(T);const L=new Nt,C=new Bn,R=new D,E=new D,P=new D(0,1,0),U=new pt;let B=0,V=0,ne=0;const q=new pt(.35,.6,1),Y=new pt(.85,.9,1),oe=new Bn,De=new D(1,0,0);return{geometries:i,hulls:i.length,probeType:i.length,probes:i.probes.length,uT:t,begin(Me,st){t.value=Me,y.uniforms.uPR.value=st;for(const Qe of f)Qe.userData.n=0;B=V=ne=0},add(Me,st,Qe,Ce,te,ue,we,dt,Ge,ye,cn,et){if(!(ne>=e)){if(ne++,E.copy(st).add(Qe),L.lookAt(E,st,Math.abs(Qe.y)>.99?R.set(1,0,0):P),C.setFromRotationMatrix(L),cn>1.5){const Ze=cn<Xb&&u[Me]?u[Me]:c[Me],Lt=Ze.userData.n++;L.compose(st,C,R.set(Ce[0],Ce[1],Ce[2])),Ze.setMatrixAt(Lt,L),U.set(te),Ze.userData.paint.setXYZ(Lt,U.r,U.g,U.b),Ze.userData.sun.setX(Lt,et),Ze.userData.seed.setX(Lt,we*.137%1),Ze.userData.hull.setX(Lt,ue);const lt=l[Me];if(lt){const Tt=lt.userData.n++;lt.setMatrixAt(Tt,L.multiply(d.makeRotationZ(t.value*s[Me].userData.rotorSpin+we))),lt.userData.paint.setXYZ(Tt,U.r,U.g,U.b),lt.userData.sun.setX(Tt,et),lt.userData.seed.setX(Tt,we*.137%1),lt.userData.hull.setX(Tt,ue)}}if(dt&&B<g){const Ze=B++;E.set(0,0,s[Me].userData.nozzle).multiply(R.set(Ce[0],Ce[1],Ce[2])).applyQuaternion(C).add(st);const Lt=1.9*Ge*Math.max(Ce[2],.62);L.compose(E,C,R.set(.06*Ce[0]*(Me>=r?.5:1),1,Lt)),b.setMatrixAt(Ze,L);const lt=Rt.smoothstep(cn,4,40);m.setX(Ze,(1-.35*Rt.smoothstep(cn,120,500))*(Ge<.2?lt:.3+.7*lt)),p.setX(Ze,we*.371%1),v.setXYZ(Ze,q.r,q.g,q.b)}if(ye&&ye[0]>0){const Ze=V++;M[Ze*3]=st.x,M[Ze*3+1]=st.y,M[Ze*3+2]=st.z;const Lt=ye[2]??dt;U.set(Lt?"#cfe8ff":te);const lt=ye[1]*(Lt?1.5:1);S[Ze*3]=U.r*lt,S[Ze*3+1]=U.g*lt,S[Ze*3+2]=U.b*lt,w[Ze]=ye[0]}}},jet(Me,st,Qe,Ce,te,ue){if(B>=g)return;const we=B++;E.copy(Me).sub(st),L.lookAt(E,Me,Math.abs(st.y)>.99?De:P),oe.setFromRotationMatrix(L),L.compose(Me,oe,R.set(Ce,1,Qe)),b.setMatrixAt(we,L),m.setX(we,te),p.setX(we,ue*.613%1),v.setXYZ(we,Y.r,Y.g,Y.b)},end(){for(const Me of f)if(Me.count=Me.userData.n,!!Me.count){Me.instanceMatrix.needsUpdate=!0;for(const st of["paint","sun","seed","hull"])Me.userData[st].needsUpdate=!0}b.count=B,B&&(b.instanceMatrix.needsUpdate=!0,m.needsUpdate=p.needsUpdate=v.needsUpdate=!0),_.setDrawRange(0,V),V&&(_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0,_.attributes.size.needsUpdate=!0)}}}const Xh=3,Nm=[.785,2.356,3.927,5.498];function qh(n,e,t){const i=n,s=hn(e*31+7),r=s.r,o=(h,g,x,m=le,p=16,v=0,b=0)=>s.cyl(h,h,g,x,m,p,v,b);if(e===0){o(i*.27,i*.44,0),s.cyl(i*.15,i*.27,i*.1,i*.27,le,18),s.cyl(i*.27,i*.2,i*.1,-i*.27,le,18),o(i*.28,i*.14,i*.02,qe);for(let h=0;h<10;h++){const g=h/10*Math.PI*2+.3;s.box(i*.03,i*.03,i*.06,Math.cos(g)*i*.272,Math.sin(g)*i*.272,-i*.12,Ut)}for(const h of[-.18,.12])o(i*.285,i*.025,i*h,ee);for(let h=0;h<14;h++){const g=h/14*Math.PI*2;s.box(i*.022,i*.022,i*.04,Math.cos(g)*i*.272,Math.sin(g)*i*.272,i*.06,Ut)}for(const h of[1.2,2.9,4.4])s.box(i*.1,i*.08,i*.16,Math.cos(h)*i*.31,Math.sin(h)*i*.31,i*0,ee,.75);for(const h of[-1,1])s.radiator(h*i*.27,0,i*0,i*.36,i*.2,h>0?.2:Math.PI-.2,2,i*.008)}else if(e===1){s.sphere(i*.19,0,0,0,le,1,16),o(i*.12,i*.5,-i*.1),o(i*.2,i*.08,0,qe);for(const h of Nm){const g=Math.cos(h),x=Math.sin(h),m=-x,p=g,v=i*.15,b=i*.68,_=i*.055,M=[[m*_,p*_,_],[-m*_,-p*_,_],[0,0,-_]];for(const[S,w,y]of M)s.strut(g*v+S,x*v+w,y,g*b+S,x*b+w,y,i*.018);for(let S=0;S<=4;S++){const w=v+(b-v)*S/4;for(let y=0;y<3;y++){const T=M[y],L=M[(y+1)%3];s.strut(g*w+T[0],x*w+T[1],T[2],g*w+L[0],x*w+L[1],L[2],i*.012)}}s.pipe(g*v,x*v,0,g*b,x*b,0,i*.025,le),s.sphere(i*.075,g*i*.72,x*i*.72,0,le,1,12),s.cyl(i*.07,i*.07,i*.26,0,le,12,g*i*.6,x*i*.6);for(const S of[-1,1])s.box(i*.02,i*.02,i*.05,g*i*.6+m*i*.07,x*i*.6+p*i*.07,S*i*.06,Ut)}for(const h of[-1,1])s.strapped(i*.06,i*.18,h*i*.13,h*i*.13,-i*.3,h>0)}else{o(i*.07,i*1.2,-i*.15,ee,10);for(const[h,g,x,m,p,v]of[[.28,.17,.26,0,0,le],[0,.2,.22,.02,-.01,qe],[-.24,.15,.24,-.02,.02,le],[-.5,.12,.18,0,0,le]]){s.cyl(i*g,i*g,i*x,i*h,v===qe?le:v,16,i*m,i*p,.85+r()*.25);for(const b of[-.5,.5])s.cyl(i*g*1.04,i*g*1.04,i*.02,i*(h+b*x),ee,16,i*m,i*p)}o(i*.205,i*.1,0,qe);for(let h=0;h<4;h++){const g=h/4*Math.PI*2+Math.PI/4,x=Math.cos(g)*i*.12,m=Math.sin(g)*i*.12;s.frame(i*.1,i*.1,i*.3,x,m,i*.58,i*.008);for(let p=0;p<3;p++)(h+p)%4!==3&&s.box(i*.085,i*.085,i*.085,x,m,i*(.48+p*.1),(h+p)%3===0?qe:le,.8+r()*.3)}}o(i*.1,i*.12,i*.42,ee,12),s.greeble(i*.36,i*.36,i*.5,0,0,0,6);for(const h of Om(e)){const[g,x,m]=h.p,[p,v]=h.n;s.boom(g*i-p*i*.1,x*i-v*i*.1,m*i,[p,v,0],i*.1,i*.09,le,.95),s.boom(g*i-p*i*.01,x*i-v*i*.01,m*i,[p,v,0],i*.02,i*.13,ee)}s.truss(0,0,-i*.75,-i*.3,i*.14,3,i*.018),o(i*.09,i*.18,-i*.68,ee,12),s.cyl(i*.16,i*.1,i*.03,-i*.56,ee,16),s.radiator(i*.08,0,-i*.66,i*.42,i*.2,.75+e*.4,3,i*.01),s.radiator(-i*.08,0,-i*.64,i*.32,i*.16,Math.PI+.9+e*.3,2,i*.01);const[a,c,l]=s.boom(-i*.07,i*.07,-i*.45,[-.6,.6,-.2],i*.4,i*.022);s.dish(i*.1,a,c,l,[-.4,.6,.5]),s.light(0,0,i*.49,ln,i*.05),s.light(i*.2,0,-i*.1,Si,i*.04),s.light(-i*.2,0,-i*.1,li,i*.04);const u=Fm(Ws(s.build(1,ea(i)),t));u.userData.spin=.015;const f=u.userData.set,d={S:i,uT:t,parts:[],wip:[],last:["#6a7080",1,!1]};return u.userData.station=d,u.userData.set=(h,g,x)=>{d.last=[h,g,x],f(h,g,x);for(const m of d.parts)m.userData.set?.(h,g,x)},u}const ea=n=>7/Math.max(n*2.5,1),Fm=n=>(n.computeBoundingSphere(),n.frustumCulled=!0,n);function Yh(n,e,t){const i=n.userData.station;for(const a of i.parts)a.removeFromParent();i.parts.length=0,i.wip.length=0,n.userData.rotor=null;const s=i.S;let r=0;for(const[a,c]of e.entries()){const l=hn(c.type.length*13+a*7+c.level);let u=null,f=null;if(c.type==="shipyard")f=Yb(l,s,r++);else if(c.type==="lab")Zb(l,s,c.level);else if(c.type==="bureau")Jb(l,s,c.level);else if(c.type==="defence")Kb(l,s,c.level);else if(c.type==="habitat")u=Qb(l,s,c.level,c.done);else continue;const d=l.build(1,ea(s)),h=c.done||!t?Fm(Ws(d,i.uT)):new Vt(d,t);if(n.add(h),i.parts.push(h),u&&h.userData.set){const g=Ws(u.build(1,ea(s)),i.uT);g.position.set(0,0,0),g.userData.spin=.22,h.add(g);const x=h.userData.set;h.userData.set=(m,p,v)=>{x(m,p,v),g.userData.set(m,p,v)},n.userData.rotor=g}if(f&&h.userData.set){const g=f.map(m=>Ws(m.build(1,ea(s)),i.uT));for(const m of g)h.add(m);const x=h.userData.set;h.userData.set=(m,p,v)=>{x(m,p,v);for(const b of g)b.userData.set(m,p,v)},i.wip.push(g)}h.userData.set?.(...i.last)}const o=e.reduce((a,c)=>a+(c.done?c.type==="shipyard"?1:c.level:0),0);if(o>=2){const a=hn(400+o);for(let l=0;l<Math.min(5,o-1);l++){const u=.3+l*1.27;a.radiator(Math.cos(u)*s*.08,Math.sin(u)*s*.08,-s*(.4+l%2*.22),s*(.3+l*.04),s*.16,u,2,s*.01)}o>=4&&(a.cyl(s*.07,s*.07,s*.16,-s*.5,ee,12,s*.15,-s*.12),a.strut(0,0,-s*.5,s*.15,-s*.12,-s*.5,s*.03));const c=Ws(a.build(1,ea(s)),i.uT);n.add(c),i.parts.push(c),c.userData.set(...i.last)}}function Yb(n,e,t=0){const i=jb,s=i*.45,r=i*.36,o=i*.03,a=e*.42+i*.13,c=a+i*1.7,l=t*(s*2+i*.2);t===0?n.truss(0,0,e*.42,a,i*.16,1,i*.02):n.box(l-s,o*1.5,o*1.5,(l-s)/2,-r,a+i*.2,ee);for(const m of[-1,1])for(const p of[-1,1])n.box(o,o,c-a,l+m*s,p*r,(a+c)/2,ee);const u=5;for(let m=0;m<=u;m++){const p=a+(c-a)*m/u;for(const v of[-1,1])n.box(s*2,o,o,l,v*r,p,ee),m<u&&n.box(o,r*2,o,l+v*s,0,p,ee);m<u&&m%2&&n.strut(l-s,-r,p,l-s,r,p+(c-a)/u,o*.8)}n.box(s*2,i*.04,i*.18,l,r,a+i*.05,qe);const f=hn(77+t*5),d=hn(78+t*5),h=hn(79+t*5),g=a+i*.2,x=c-i*.15;f.cyl(i*.05,i*.05,x-g,(g+x)/2,ee,10,l,0);for(const[m,p]of[[.3,.35],[-.3,.85],[.3,1.25]])f.light(l+i*m,r*.5,a+i*p,ln,i*.035);for(let m=0;m<7;m++){const p=g+(x-g)*(m+.5)/7;f.add(new On(i*.2,i*.012,4,16,m>3?Math.PI*2:Math.PI*1.1).translate(l,0,p),ee,.9)}for(let m=0;m<3;m++)d.box(i*.016,i*.26,i*.18,l+i*.2,0,x-i*(.15+m*.2),m===1?qe:le);for(let m=0;m<3;m++)d.box(i*.016,i*.26,i*.18,l-i*.2,0,x-i*(.15+m*.2),le);h.cyl(i*.1,i*.17,i*.2,g-i*.02,ee,14,l,0);for(let m=0;m<3;m++)h.box(i*.26,i*.016,i*.18,l,i*.2,x-i*(.75+m*.2),m===0?qe:le);return n.box(s*2.1,i*.05,i*.07,l,r+i*.05,a+i*.95,le),n.box(i*.1,i*.08,i*.12,l-i*.12,r,a+i*.95,ee),n.box(i*.025,i*.26,i*.025,l-i*.12,r-i*.16,a+i*.95,ee),n.light(l+s,r,c,Si,i*.04),n.light(l-s,-r,c,li,i*.04),n.light(l-s,r,c,ln,i*.045),[f,d,h]}const jb=.28;function Zb(n,e,t){n.boom(e*.18,0,e*.05,[1,0,0],e*.5,e*.06,le,.9);const i=e*.85;n.cyl(e*.17,e*.17,e*.48,e*.05,le,16,i,0),n.cyl(e*.12,e*.17,e*.08,e*.33,le,16,i,0),n.cyl(e*.175,e*.175,e*.14,-e*.05,qe,16,i,0);for(let a=0;a<8;a++){const c=a/8*Math.PI*2;n.box(e*.02,e*.02,e*.05,i+Math.cos(c)*e*.172,Math.sin(c)*e*.172,e*.15,Ut)}const[s,r,o]=n.boom(i+e*.12,e*.1,e*.2,[1,.6,.4],e*.5,e*.025);if(n.box(e*.07,e*.07,e*.07,s,r,o,ee,.7),n.sphere(e*.04,s,r+e*.06,o,le,1,10),t>=2&&(n.cyl(e*.12,e*.12,e*.36,-e*.02,le,14,i,-e*.32),n.cyl(e*.125,e*.125,e*.08,-e*.02,qe,14,i,-e*.32),n.strut(i,-e*.17,-e*.02,i,-e*.2,-e*.02,e*.08,le,.9),n.cyl(e*.06,e*.07,e*.34,e*.3,le,14,i,-e*.32),n.cyl(e*.05,e*.05,e*.01,e*.475,ee,14,i,-e*.32)),t>=3){const[a,c,l]=n.boom(i+e*.17,-e*.02,-e*.1,[1,-.15,-.2],e*.8,e*.022);n.frame(e*.24,e*.06,e*.24,a,c,l,e*.012),n.box(e*.12,e*.1,e*.12,a,c+e*.08,l,le,.9),n.radiator(a,c+e*.03,l-e*.1,e*.2,e*.12,-Math.PI/2,2,e*.008);for(const u of[-.12,.16])n.dish(e*.13,i+e*.12,e*.16,e*u,[.4,1,.2])}n.light(i,e*.18,e*.33,ln,e*.04)}function Jb(n,e,t){n.boom(-e*.18,0,-e*.05,[-1,0,0],e*.38,e*.1,ee,.8);const i=-e*.72;n.oct(e*.34,e*.3,e*.44,-e*.05,.9,i,0),n.box(e*.36,e*.03,e*.3,i,e*.16,-e*.05,qe);for(const a of[-.2,.1])n.oct(e*.37,e*.33,e*.04,e*a,1,i,0,ee);n.box(e*.01,e*.02,e*.12,i-e*.17,e*.02,-e*.05,Ut),n.cyl(e*.05,e*.06,e*.06,e*.1,ee,12,i,e*.2),n.box(e*.08,e*.06,e*.06,i,e*.24,e*.1,le,.9),n.cyl(e*.022,e*.022,e*.01,e*.135,Ut,10,i,e*.24);const[s,r,o]=n.boom(i-e*.1,-e*.12,-e*.15,[-.6,-1,-.2],e*.32,e*.02);n.sphere(e*.05,s,r,o,ee,.7,10),t>=2&&(n.strut(i,0,-e*.27,i,0,-e*.4,e*.1,le,.9),n.oct(e*.26,e*.24,e*.26,-e*.52,.9,i,0),n.box(e*.27,e*.025,e*.18,i,e*.13,-e*.52,qe),n.add(new ut(e*.03,e*.26,e*.3).rotateZ(-.35).translate(i-e*.2,e*.08,-e*.52),ee,.6),n.sphere(e*.06,i+e*.05,e*.15,-e*.62,le,1.12,12)),n.light(i-e*.17,e*.15,-e*.27,li,e*.035)}function Kb(n,e,t){const i=[[0,1],[0,-1],[0,1]];for(let s=0;s<Math.min(t,3);s++){const[r,o]=i[s],a=s===2?-e*.3:e*.1,c=h=>[r*h,o*h];n.boom(...c(e*.16),a,[r,o,0],e*.32,e*.06,ee,.85);const[l,u]=c(e*.36);n.box(Math.abs(o)*e*.2+Math.abs(r)*e*.14,Math.abs(r)*e*.2+Math.abs(o)*e*.14,e*.18,l,u,a,le,.85),n.box(Math.abs(o)*e*.21+e*.01,Math.abs(r)*e*.21+e*.01,e*.04,l,u,a,qe);const[f,d]=c(e*.5);n.sphere(e*.08,f,d,a,le,.9,12);for(const h of[-1,1]){const g=f+-o*h*e*.03,x=d+r*h*e*.03;n.boom(g,x,a,[r,o,.35],e*.36,e*.025,ee,.6)}n.light(...c(e*.6),a-e*.06,li,e*.03)}}function Qb(n,e,t,i){const s=Math.min(t,3),r=[-1.15,-1.55,-1.95].slice(0,s).map(a=>a*e);n.truss(0,0,r[s-1]-e*.12,-e*.75,e*.12,2+s,e*.016);const o=hn(91+t);for(const a of r)n.cyl(e*.16,e*.16,e*.2,a,ee,16),o.hoop(e*.85,e*.16,e*.26,36,a,5,e*.16,e*.012);if(!i){for(const a of r)n.hoop(e*.85,e*.16,e*.26,24,a,0,0,0);return null}return o}function Om(n){const e=[];for(const[t,i]of Nm.entries()){const s=n===1?.8:n===0?.36:[.26,.29,.26,.24][t],r=n===1?0:n===0?-.12:[.28,0,-.24,0][t];e.push({p:[Math.cos(i)*s,Math.sin(i)*s,r],n:[Math.cos(i),Math.sin(i),0]})}return e}function eS(n,e,t,i){const s=e.size,r=.5,o=[hn(11),hn(12),hn(13)],[a,c,l]=o;let u=new Nt,f=!1,d=!1,h=null;if(n==="sundiver"){f=!0;const m=s*1.6,p=r*1.7;a.add(new On(p,r*.04,6,64).translate(0,0,m),ee,.8),a.add(new On(p*.98,r*.02,4,64).translate(0,0,m-r*.12),ee,.7);for(let b=0;b<12;b++){const _=b/12*Math.PI*2,M=Math.cos(_),S=Math.sin(_);a.strut(M*r*.2,S*r*.2,m-r*.05,M*p,S*p,m,r*.025),a.strut(M*p,S*p,m,M*p*.98,S*p*.98,m-r*.12,r*.015)}a.cyl(r*.18,r*.18,r*.8,m-r*.5,le,16),a.cyl(r*.19,r*.19,r*.12,m-r*.4,qe,16);for(const b of[0,Math.PI/2,Math.PI,Math.PI*1.5])a.radiator(Math.cos(b)*r*.18,Math.sin(b)*r*.18,m-r*.6,r*.8,r*.4,b,3,r*.012);const v=r*.21;for(let b=-8;b<=8;b++)for(let _=-8;_<=8;_++){const M=v*1.5*b,S=v*Math.sqrt(3)*(_+b/2),w=Math.hypot(M,S);w>p*.93||w<r*.45||c.add(new Ee(v*.95,v*.95,r*.012,6).rotateX(Math.PI/2).translate(M,S,m+r*.02),Ks,.9+(b*7+_*3)%5*.04)}l.dish(r*.45,0,0,m+r*.05,[0,0,1]);for(let b=0;b<3;b++){const _=b/3*Math.PI*2+.4,M=Math.cos(_)*r*.6,S=Math.sin(_)*r*.6,w=m+r*(2+b*.35);l.add(new Ee(r*.01,r*.22,r*.16,16).rotateX(Math.PI/2).translate(M,S,w),le,1.15),l.cyl(r*.05,r*.06,r*.22,w-r*.18,ee,10,M,S),l.box(r*.12,r*.02,r*.08,M,S,w-r*.22,qe)}for(let b=0;b<8;b++){const _=b/8*Math.PI*2;l.light(Math.cos(_)*p,Math.sin(_)*p,m+r*.05,b%2?ln:Si,r*.04)}}else if(n==="massdriver"){d=!0;const m=r*4.6,p=S=>Math.sqrt(Math.max(0,s*s-S*S))-s,v=S=>r*.12+(S+m/2)/m*r*.75,b=12;for(let S=0;S<=b;S++){const w=-m/2+m*S/b,y=v(w);for(const T of[-1,1])a.strut(w,y,T*r*.08,w,p(w)-r*.02,T*r*.14,r*.03);if(S<b){const T=w+m/b;for(const L of[-1,1])a.strut(w,y,L*r*.05,T,v(T),L*r*.05,r*.04,le,.9);c.add(new On(r*.11,r*.025,6,16).rotateY(Math.PI/2).rotateZ(Math.atan2(r*.75,m)).translate(w+m/b/2,(y+v(T))/2,0),S%3===0?qe:ee,.9)}}const _=-m/2-r*.35;l.box(r*.45,r*.3,r*.5,_,p(_)+r*.15,0,le),l.box(r*.47,r*.05,r*.52,_,p(_)+r*.3,0,qe);for(const S of[-.18,0,.18])l.add(new Ee(r*.06,r*.06,r*.25,10).translate(_-r*.32,p(_)+r*.12,r*S),le,.9);for(const S of[-.32,.32])l.radiator(_,p(_)+r*.28,r*S,r*.4,r*.3,Math.PI/2,2,r*.012);l.box(r*.2,r*.07,r*.07,-m*.2,v(-m*.2)+r*.06,0,qe),l.light(m/2,v(m/2)+r*.06,0,ln,r*.04);const M=m/2;for(const S of[-1,1])l.strut(M,v(M),S*r*.12,M,p(M)-r*.02,S*r*.25,r*.05);l.add(new On(r*.16,r*.04,6,18).rotateY(Math.PI/2).rotateZ(Math.atan2(r*.75,m)).translate(M,v(M),0),qe,1);for(let S=1;S<6;S++){const w=-m/2+m*S/6;l.light(w,v(w)+r*.14,r*.1,S%2?Si:li,r*.03)}}else if(n==="ringyard"){const m=s*1.45,p=r*.2;for(const[v,b]of[[-p,-p],[-p,p],[p,-p],[p,p]])a.add(new On(m+v,r*.03,5,160).rotateX(Math.PI/2).translate(0,b,0),ee);a.add(new On(m,r*.06,6,160).rotateX(Math.PI/2).scale(1,.4,1),le,.9);for(let v=0;v<72;v++){const b=v/72*Math.PI*2,_=Math.cos(b),M=Math.sin(b);a.strut(_*(m-p),-p,M*(m-p),_*(m+p),p,M*(m+p),r*.03),a.strut(_*(m-p),p,M*(m-p),_*(m-p),-p,M*(m-p),r*.025),a.strut(_*(m+p),p,M*(m+p),_*(m+p),-p,M*(m+p),r*.025),v%12===0&&a.box(r*.5,r*.04,r*.5,_*m,p+r*.02,M*m,qe)}for(let v=0;v<3;v++){const b=v/3*Math.PI*2;c.add(new Ee(r*.3,r*.3,r*.7,16).translate(Math.cos(b)*m,0,Math.sin(b)*m),le),c.add(new Ee(r*.31,r*.31,r*.15,16).translate(Math.cos(b)*m,0,Math.sin(b)*m),qe),c.radiator(Math.cos(b)*m,r*.3,Math.sin(b)*m,r*.6,r*.4,Math.PI/2,3,r*.015),c.light(Math.cos(b)*m,r*.22,Math.sin(b)*m,ln,r*.04)}for(let v=0;v<6;v++){const b=v/6*Math.PI*2+Math.PI/6,_=Math.cos(b),M=Math.sin(b),S=new D(_*(m+r*.45),0,M*(m+r*.45)),w=new D(-M,0,_),y=new D(_,0,M),T=new D(0,1,0),L=r*.45,C=r*.2,R=r*.2,E=(ne,q,Y)=>S.clone().addScaledVector(w,ne).addScaledVector(y,q).addScaledVector(T,Y),P=(ne,q)=>l.strut(ne.x,ne.y,ne.z,q.x,q.y,q.z,r*.014);for(const ne of[-C,C])for(const q of[-R,R])P(E(-L,ne,q),E(L,ne,q));for(const ne of[-L,L])for(const q of[-R,R])P(E(ne,-C,q),E(ne,C,q));for(const ne of[-L,L])for(const q of[-C,C])P(E(ne,q,-R),E(ne,q,R));const U=new Ee(r*.1,r*.1,r*.7,10).applyQuaternion(new Bn().setFromUnitVectors(T,w)).translate(S.x,S.y,S.z);l.add(U,v%2?le:qe),l.strut(_*(m+p),0,M*(m+p),_*(m+r*.25),0,M*(m+r*.25),r*.05);const B=E(0,-C,R+r*.25),V=E(L*.6,0,R+r*.25);l.strut(S.x,S.y+R,S.z,B.x,B.y,B.z,r*.03),l.strut(B.x,B.y,B.z,V.x,V.y,V.z,r*.025,le,.9);for(const ne of[-L,L]){const q=E(ne,C,R);l.light(q.x,q.y,q.z,Ut,r*.035)}}}else if(n==="citadel"){const m=s*1.4,p=r*1.8;for(let v=0;v<6;v++){const b=o[Math.floor(v/2)],_=v/6*Math.PI*2+.3,M=Math.cos(_),S=Math.sin(_),w=M*m,y=S*m;b.add(new Ee(p*.24,p*.28,p*.14,6).translate(w,0,y),le),b.add(new Ee(p*.29,p*.29,p*.03,6).translate(w,-p*.07,y),ee),b.add(new Ee(p*.245,p*.245,p*.03,6).translate(w,p*.06,y),qe);for(const T of[-1,1]){const L=w+-S*T*p*.1,C=y+M*T*p*.1;b.add(new Ee(p*.06,p*.07,p*.05,10).translate(L,p*.08,C),ee),b.box(p*.1,p*.07,p*.1,L,p*.13,C,le,.85),b.boom(L+M*p*.04,p*.14,C+S*p*.04,[M,.12,S],p*.36,p*.03,ee,.6)}b.boom(w-M*p*.12,p*.07,y-S*p*.12,[0,1,0],p*.14,p*.02),b.sphere(p*.05,w-M*p*.12,p*.23,y-S*p*.12,le,1.1,10),b.radiator(w-M*p*.26,0,y-S*p*.26,p*.22,p*.14,Math.PI/2,2,p*.01),b.light(w,-p*.1,y,li,p*.03)}for(let v=0;v<12;v++){const b=v/12*Math.PI*2+.3+Math.PI/12,_=Math.cos(b),M=Math.sin(b);l.sphere(p*.04,_*m,p*.02,M*m,le,1.05,10),l.box(p*.12,p*.01,p*.05,_*m,p*.02,M*m,Ks),l.light(_*m,p*.07,M*m,li,p*.02)}}else if(n==="array"){u=jh(s*1.6,.9),a.sphere(r*.16,0,0,0,le,1,16),a.cyl(r*.1,r*.1,r*.5,0,ee,12),a.cyl(r*.17,r*.17,r*.06,0,qe,16);for(let m=0;m<3;m++){const p=m/3*Math.PI*2+Math.PI/2,v=Math.cos(p),b=Math.sin(p),_=r*1.2;for(const[S,w]of[[.05,.05],[-.05,.05],[0,-.06]])a.strut(v*r*.15+S*r*-b,w*r,b*r*.15+S*r*v,v*_+S*r*-b,w*r,b*_+S*r*v,r*.018);const M=m<2?c:l;M.dish(r*.38,v*_,0,b*_,[v*.25,1,b*.25]),M.box(r*.12,r*.08,r*.12,v*_,-r*.06,b*_,le,.9)}for(let m=0;m<3;m++){const p=m/3*Math.PI*2+Math.PI/2,v=Math.cos(p),b=Math.sin(p);for(const _ of[.45,.8])l.dish(r*.14,v*r*1.2*_,r*.06,b*r*1.2*_,[v*.4,1,b*.4])}l.cyl(r*.03,r*.04,r*.2,-r*.35,le,10),l.light(0,r*.2,0,ln,r*.04)}else if(n==="college"){u=jh(s*1.55,2.4),a.cyl(r*.1,r*.1,r*1.3,0,le,14);for(const p of[-.45,-.2,.25,.5])a.cyl(r*.17,r*.17,r*.1,r*p,p>0?qe:le,16);for(const p of[.38])a.add(new Fn(r*.15,16,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).translate(0,0,r*p),le,1.1);for(let p=0;p<8;p++){const v=p/8*Math.PI*2;a.box(r*.03,r*.03,r*.05,Math.cos(v)*r*.172,Math.sin(v)*r*.172,r*.25,Ut)}c.cyl(r*.14,r*.14,r*.12,0,ee,16);for(let p=0;p<4;p++){const v=p/4*Math.PI*2;c.box(r*.1,r*.1,r*.14,Math.cos(v)*r*.2,Math.sin(v)*r*.2,-r*.62,le,.9)}const m=hn(14);m.hoop(r*.75,r*.12,r*.18,40,0,4,r*.1,r*.012),h=m;for(let p=0;p<8;p++)l.box(r*.06,r*.06,r*.06,r*(1.1+p%3*.22),r*(.5-p*.14),r*(.3+p%2*.25),ee,.7);for(let p=0;p<4;p++){const v=p/4*Math.PI*2+.7;l.tank(r*.04,r*.14,Math.cos(v)*r*1.05,Math.sin(v)*r*1.05,r*.15,le),l.light(Math.cos(v)*r*1.05,Math.sin(v)*r*1.05,r*.26,ln,r*.025)}for(const[p,v]of[[.12,.12],[-.12,-.12]])l.box(r*.05,r*.05,r*.3,r*p,r*v,-r*.85,le),l.box(r*.06,r*.02,r*.1,r*p,r*v,-r*.8,qe);l.light(0,0,r*.68,ln,r*.04)}const g=new jn,x=[];for(const m of o){const p=m.build(1,7);p.applyMatrix4(u);const v=Ws(p,t);v.computeBoundingSphere(),v.frustumCulled=!0,v.layers.enable(hl);const b=new Vt(p,i);g.add(v,b),x.push([v,b])}if(h){const m=h.build(1,7),p=Ws(m,t);p.applyMatrix4(u);const v=new Vt(m,i);v.applyMatrix4(u),g.add(p,v),x[1].push(p,v),g.userData.spinner=p}return g.userData={...g.userData,stages:x,faceSun:f,surface:d},g.userData.set=(m,p)=>{for(const v of x)for(const b of v)b.userData.set?.(m,p,!0)},g}function jh(n,e){const t=new D(Math.cos(e),0,Math.sin(e)),i=new D(0,1,0),s=new D().crossVectors(t,i);return new Nt().makeBasis(s,t,i).setPosition(t.clone().multiplyScalar(n))}function tS(n,e,t){n.userData.stages.forEach((i,s)=>{const r=t||e>=(s+1)/3;for(let o=0;o<i.length;o+=2)i[o].visible=r,i[o+1].visible=!r})}function $d(n,e,t,i,s,r,o,a,c=null){var y,T,L;const l=zm(),u=hn(e.id*17+t*101+s),f=jf[n],d=f?rS(e,t,c):null,h=d?f.r[s-1]*kn:0,g=d&&{rock:e.kind==="asteroid",deck:d.deck,air:!!(c&&c.air),sink:d.sink/kn,spins:[]},x=d&&d.key+n+s;u.r;const m=[];let p=null;if(d)Kr.has(x)||f.build(dS(u,g),u,s,g);else if(n==="shipyard"){p=ml(e.size*1.5,.4+t*1.6);const R=7*.078,E=1.2*.078,P=1*.078,U=.078*.1;for(const Y of[-1,1])for(const oe of[-1,1])u.box(R,U,U,0,Y*P,oe*E,ee);for(let Y=0;Y<=7;Y++){const oe=-R/2+R*Y/7;for(const De of[-1,1])u.box(U,U,E*2,oe,De*P,0,ee);for(const De of[-1,1])u.box(U,P*2,U,oe,0,De*E,ee);if(Y<7)for(const De of[-1,1])u.strut(oe,-P,De*E,oe+R/7,P,De*E,U*.7)}for(const Y of[-1,1])u.box(R*.03,U*1.4,E*2.02,Y*R*.47,Y*P,0,qe);u.box(.078*.35,.078*.25,E*2.3,.078*.8,P+.078*.18,0,le),u.box(.078*.2,.078*.2,.078*.3,.078*.8,P,.078*.3,ee),u.box(.078*.08,P*.8,.078*.08,.078*.8,P*.55,.078*.3,ee);const B=-R/2-1.9*.078;u.strut(-R/2,0,0,B+.078*.6,0,0,.078*.22,ee),u.add(new Ee(.078*.6,.078*.6,.078*1.6,16).rotateX(Math.PI/2).translate(B,0,0),le),u.add(new Ee(.078*.62,.078*.62,.078*.4,16).rotateX(Math.PI/2).translate(B,0,0),qe);for(let Y=0;Y<6;Y++){const oe=Y/6*Math.PI*2;u.box(.078*.12,.078*.06,.078*.06,B+Math.cos(oe)*.078*.61,Math.sin(oe)*.078*.61,.078*.5,Ut)}u.solar(B,.078*.6,0,.078*2.2,.078*1,Math.PI/2,.078*.04),u.radiator(B,-.078*.6,0,.078*1.6,.078*.9,-Math.PI/2,3,.078*.04),u.dish(.078*.45,B-.078*.5,0,.078*.9,[-.4,.3,1]),u.light(R/2,P,E,Si,.078*.12),u.light(R/2,-P,-E,li,.078*.12),u.light(B,.078*.7,0,ln,.078*.14);for(const[Y,oe]of[[-.18,1],[.12,-1],[.3,1]]){const De=R*Y,Me=oe*E;u.box(.078*.16,.078*.12,.078*.16,De,P*.2,Me,ee,.8);const[st,Qe,Ce]=u.boom(De,P*.2,Me,[.3,.5,-oe*.8],.078*.55,.078*.07,le,.9);u.sphere(.078*.06,st,Qe,Ce,ee,.7,8);const[te,ue,we]=u.boom(st,Qe,Ce,[.2,-.7,-oe*.6],.078*.45,.078*.05,le,.85);u.box(.078*.08,.078*.08,.078*.08,te,ue,we,ee,.6),u.light(te,ue-.078*.05,we,Ut,.078*.035)}for(const Y of[-1,1])for(const oe of[-1,1])u.light(Y*R*.48,P+U,oe*E,Ut,.078*.05);u.add(new Ee(.078*.32,.078*.32,.078*1.6,14).translate(B,0,0),le,.95);for(let Y=0;Y<5;Y++)u.box(.078*.05,.078*.14,.078*.05,B+.078*.32,(Y-2)*.078*.28,0,Ut);u.truss(B-.078*.2,-.078*.9,-.078*.4,.078*2.6,.078*.35,4,.078*.04);for(let Y=0;Y<4;Y++)u.strapped(.078*.22,.078*.55,B-.078*.2+(Y%2?.3:-.3)*.078,-.078*.9,.078*(.4+Math.floor(Y/2)*1.1),Y===0);u.tank(.078*.16,.078*.6,B+.078*1.4,.078*.9,.078*1.2,le),u.box(.078*.3,.078*.2,.078*.25,B+.078*1.4,.078*.9,.078*1.75,ee,.7);const V=hn(e.id*7+3),ne=hn(e.id*7+4),q=hn(e.id*7+5);V.add(new Ee(.078*.18,.078*.18,R*.7,10).rotateZ(Math.PI/2),ee);for(const[Y,oe]of[[-.2,1],[.05,-1],[.25,1]])V.light(R*Y,P*.6,E*.5*oe,ln,.078*.1);for(let Y=0;Y<7;Y++)V.add(new On(.078*.62,.078*.05,4,18,Y<4?Math.PI*2:Math.PI*1.1).rotateY(Math.PI/2).translate(-R*.3+Y*R*.09,0,0),ee,.9);for(let Y=0;Y<4;Y++)ne.add(new Ee(.078*.66,.078*.66,R*.08,16,1,!0,0,Math.PI*1.3).rotateZ(Math.PI/2).translate(-R*.28+Y*R*.09,0,0),Y===1?qe:le);for(let Y=4;Y<7;Y++)q.add(new Ee(.078*.66,.078*.66,R*.08,16,1,!0,0,Math.PI*2).rotateZ(Math.PI/2).translate(-R*.28+Y*R*.09,0,0),Y===5?qe:le);q.add(new Ee(.078*.3,.078*.55,.078*.7,16,1,!0).rotateZ(Math.PI/2).translate(-R*.4,0,0),ee,.7),m.push([V,"wip"],[ne,"wip"],[q,"wip"])}else if(kc[n])p=kc[n](u,e);else if(n==="skimmer"){const C=l*.22,R=e.size*1.03;p=ml(R,.3+t*1.1);for(let U=0;U<s;U++){const B=(U-(s-1)/2)*5*C,V=Math.sqrt(R*R-B*B)-R+C*.6;u.add(new Fn(C,14,8).scale(2.4,.95,.95).translate(B,V+C*.9,0),le,1.05),u.add(new Ee(C*.99,C*.99,C*.7,18,1,!0).rotateZ(Math.PI/2).scale(1,.96,.96).translate(B,V+C*.9,0),qe),u.box(C*1.4,C*.35,C*.45,B,V,0,le,.85),u.add(new Ee(C*.45,C*.2,C*.8,14,1,!0).rotateZ(Math.PI/2).translate(B+C*1,V-C*.05,0),ee,.7),u.strapped(C*.16,C*.5,B-C*.25,V-C*.28,0,!1);for(const ne of[-1,1])u.strut(B+ne*C*.5,V+C*.15,0,B+ne*C*.8,V+C*.55,0,C*.05);u.light(B,V-C*.2,C*.25,ln,C*.1);for(let ne=0;ne<3;ne++)u.add(new On(C*(.42-ne*.07),C*.02,3,14).rotateY(Math.PI/2).translate(B+C*(1.35-ne*.12),V-C*.05,0),ee,.6);u.strut(B,V+C*1.85,0,B*.2,C*5.5-C*.45,0,C*.03,ee,.8)}const E=C*5.5,P=C*(3+s*1.8);u.truss(0,E,-P/2,P/2,C*.45,3+s,C*.05),u.add(new Ee(C*.4,C*.4,C*.9,14).rotateX(Math.PI/2).translate(0,E,P/2+C*.4),le),u.add(new Ee(C*.28,C*.28,C*.1,14).rotateX(Math.PI/2).translate(0,E,P/2+C*.9),ee);for(let U=0;U<s+1;U++){const B=-P/2+C*1.1+U*C*1.5;for(const V of[-1,1])u.strapped(C*.36,C*.7,V*C*.6,E,B,U%2===0&&V>0)}u.radiator(0,E+C*.3,-P*.1,C*2,P*.6,Math.PI/2,2+s,C*.04),u.tank(C*.18,C*.5,C*1.4,E*.55,0,le),u.light(0,E+C*.5,P/2+C*.9,Si,C*.12),u.add(new Ee(C*.3,C*.3,C*1.2,14).rotateZ(Math.PI/2).translate(0,E+C*.65,-P*.3),le);for(let U=0;U<6;U++)u.box(C*.08,C*.05,C*.02,(U-2.5)*C*.18,E+C*.65,-P*.3+C*.3,Ut);u.tank(C*.28,C*1.2,0,E,P/2+C*1.9,le),u.add(new Ee(C*.3,C*.3,C*.35,12,1,!0).rotateX(Math.PI/2).translate(0,E,P/2+C*1.9),qe),u.add(new Ee(C*.12,C*.22,C*.3,12,1,!0).rotateX(Math.PI/2).translate(0,E,P/2+C*2.9),ee,.6)}const v=C=>{p&&C.applyMatrix4(p);let R;return i?(R=Ws(C,r,d&&d.tex),R.userData.set(a,1,!0),R.userData.paint=a,d&&R.userData.ground(d.ground)):R=new Vt(C,o),d&&R.scale.setScalar(h),R.isInstancedMesh&&(R.computeBoundingSphere(),R.frustumCulled=!0),R},b=new jn;if(b.userData.type=n,d){let C=Kr.get(x);if(!C){const P=u.build(1,7*kn,sS);C=[P,P.userData.coarse],delete P.userData.coarse;for(const V of C){V.rotateY(d.spin);const ne=V.attributes.position;for(let q=0;q<ne.count;q++)ne.setY(q,ne.getY(q)+d.lift(ne.getX(q),ne.getZ(q)));oS(V,d),V.scale(kn/h,kn/h,kn/h),V.computeBoundingSphere()}const U=Math.cos(d.spin),B=Math.sin(d.spin);C.push(g.spins.map(V=>{const ne=V.K.build(1,7*kn).scale(kn/h,kn/h,kn/h);ne.computeBoundingSphere();const[q,Y,oe]=V.at,De=q*U+oe*B,Me=-q*B+oe*U;return{geo:ne,pos:[De*kn,(Y+d.lift(De,Me))*kn,Me*kn],axis:V.axis,rate:V.rate}})),Kr.set(x,C),Kr.size>48&&Kr.delete(Kr.keys().next().value)}const R=v(C[0].clone()),E=v(C[1].clone());E.visible=!1,b.add(R,E),b.userData.lod={fine:R,coarse:E,r:Math.max(h,(f.tall||0)*kn),extra:[]};for(const P of C[2]){const U=v(P.geo.clone());U.position.set(...P.pos),U.rotation.order="YXZ",U.rotation.y=d.spin,((y=b.userData).spin||(y.spin=[])).push({mesh:U,axis:P.axis,rate:P.rate}),b.userData.lod.extra.push(U),b.add(U)}return b.position.copy(d.p),b.quaternion.setFromUnitVectors(new D(0,1,0),d.n),b}const _=u.build(1,7,.006),M=_.userData.coarse;delete _.userData.coarse;const S=v(_),w=v(M);w.visible=!1,b.add(S,w),b.userData.lod={fine:S,coarse:w,r:n==="shipyard"?.35:kc[n]?.5:l*.22*6,extra:[]};for(const[C,R,E]of m){if(R==="wip"&&!i)continue;const P=v(C.build(1));R==="spin"&&(P.position.set(...E),((T=b.userData).spin||(T.spin=[])).push({mesh:P,axis:"x",rate:.5})),R==="wip"&&((L=b.userData).wip||(L.wip=[])).push(P),b.add(P)}return b.rotation.x=Math.PI/2+.35,b}const zm=()=>.36,nS=n=>Math.min(.86*zm(),.45*n.size);function ml(n,e){const t=new D(Math.cos(e),Math.sin(e),0),i=new D(-Math.sin(e),Math.cos(e),0),s=new D(0,0,-1);return new Nt().makeBasis(i,t,s).setPosition(t.clone().multiplyScalar(n))}const kn=.09,iS=1.4,sS=.045,Mc=new Map,Kr=new Map,Bm=new D(0,1,0);function rS(n,e,t){const i=t&&t.body,s=n.kind==="asteroid"&&i&&i.geometry&&i.geometry.attributes.color?i.geometry:null,r=`${n.id}:${e}:${s?s.uuid:n.size}:`;if(Mc.has(r))return Mc.get(r);const o=iS*kn,a=Ui(n.id*17+e*101+5),c=s&&aS(s),l=[...Mc.values()].filter(d=>d.bid===n.id);let u=null;for(let d=0;d<(c?6:10);d++){const h=new D(a()-.5,(a()-.5)*.9,a()-.5).normalize(),g=c?cS(c,h,o):{p:h.clone().multiplyScalar(n.size),n:h,rough:0};let x=g.rough;for(const m of l)m.p.distanceTo(g.p)<o*2.1&&(x+=100);if(t&&t.wet&&t.wet(h)&&(x+=1e3),(!u||x<u.score)&&(u={...g,score:x}),!c&&x===0)break}u.bid=n.id;const f=n.size/kn;return n.giant?(u.deck=!0,u.p.multiplyScalar((n.size+.03)/n.size),u.lift=()=>0,u.sink=0):c?(Object.assign(u,uS(c,u.p,u.n,o*1.3)),u.sink=.004):(u.lift=(d,h)=>-(f-Math.sqrt(Math.max(0,f*f-d*d-h*h))),u.sink=.0015),u.spin=a()*Math.PI*2,u.key=r,t&&t.tex&&!n.giant?(u.tex=t.tex,u.ground=t.groundK,u.u0=Math.atan2(u.n.z,-u.n.x)/(2*Math.PI)):u.ground=c?u.mean.map(d=>d*.8):[.16,.15,.14],Mc.set(r,u),u}function oS(n,e){const t=n.attributes.position,i=t.count,s=new Float32Array(i*3),r=lS(n,e),o=new Bn().setFromUnitVectors(Bm,e.n),a=new D;for(let c=0;c<i;c++){const l=t.getX(c),u=t.getZ(c);if(e.tex){a.set(l,t.getY(c),u).multiplyScalar(kn).applyQuaternion(o).add(e.p).normalize();const f=Math.atan2(a.z,-a.x)/(2*Math.PI);s[c*3]=e.u0+((f-e.u0+.5)%1+1)%1-.5,s[c*3+1]=1-Math.acos(Rt.clamp(a.y,-1,1))/Math.PI}s[c*3+2]=(e.shadeAt?e.shadeAt(l,u):1)*r(l,u)}n.setAttribute("gnd",new mn(s,3))}const Pu=new WeakMap;function aS(n){if(Pu.has(n))return Pu.get(n);const e=n.attributes.position,t=n.attributes.color,i=e.count,s=new Float32Array(i*3),r=new Float32Array(i);for(let u=0;u<i;u++){const f=e.getX(u),d=e.getY(u),h=e.getZ(u),g=Math.hypot(f,d,h);s[u*3]=f/g,s[u*3+1]=d/g,s[u*3+2]=h/g,r[u]=g}const o=[0,0,0],a=[-2,-2,-2],l={at:(u,f,d)=>{a[0]=a[1]=a[2]=-2;for(let x=0;x<i;x++){const m=s[x*3]*u.x+s[x*3+1]*u.y+s[x*3+2]*u.z;m<=a[2]||(m>a[0]?(a[2]=a[1],o[2]=o[1],a[1]=a[0],o[1]=o[0],a[0]=m,o[0]=x):m>a[1]?(a[2]=a[1],o[2]=o[1],a[1]=m,o[1]=x):(a[2]=m,o[2]=x))}let h=0,g=0;for(let x=0;x<3;x++){const m=1/(1.0000001-a[x]);h+=m,g+=r[o[x]]*m,d&&(d[0]+=t.getX(o[x])/3,d[1]+=t.getY(o[x])/3,d[2]+=t.getZ(o[x])/3)}return f.copy(u).multiplyScalar(g/h)}};return Pu.set(n,l),l}function cS(n,e,t){const i=n.at(e,new D),s=new D().crossVectors(e,Math.abs(e.y)<.9?new D(0,1,0):new D(1,0,0)).normalize(),r=new D().crossVectors(e,s),o=[0,0,0],a=new D,c=new D,l=(x,m,p)=>(a.copy(i).addScaledVector(s,x).addScaledVector(r,m).normalize(),n.at(a,c,p).sub(i).dot(e)),u=(l(t,0,o)-l(-t,0,o))/(2*t),f=(l(0,t,o)-l(0,-t,o))/(2*t),d=e.clone().addScaledVector(s,-u).addScaledVector(r,-f).normalize().multiplyScalar(.6).addScaledVector(e,.4).normalize();let h=0,g=0;for(let x=0;x<8;x++){const m=x/8*Math.PI*2;a.copy(i).addScaledVector(s,Math.cos(m)*t).addScaledVector(r,Math.sin(m)*t).normalize();const p=n.at(a,c).sub(i).dot(d);h=Math.min(h,p),g=Math.max(g,p)}return{p:i,n:d,rough:g-h,ground:[o[0]/4,o[1]/4,o[2]/4]}}const Tn=64,Zh=2;function lS(n,e){const t=n.attributes.position,i=n.attributes.kind,s=new Float32Array(Tn*Tn),r=2*Zh/Tn,o=c=>Math.floor((c+Zh)/r);for(let c=0;c<t.count;c+=3){if(i.getX(c)===Ci)continue;let l=1/0,u=-1/0,f=1/0,d=-1/0,h=1/0;for(let g=c;g<c+3;g++){const x=t.getX(g),m=t.getZ(g);l=Math.min(l,x),u=Math.max(u,x),f=Math.min(f,m),d=Math.max(d,m),h=Math.min(h,t.getY(g)-e.lift(x,m))}if(!(h>.06||u-l>1||d-f>1))for(let g=Math.max(0,o(l));g<=Math.min(Tn-1,o(u));g++)for(let x=Math.max(0,o(f));x<=Math.min(Tn-1,o(d));x++)s[g*Tn+x]=1}const a=new Float32Array(Tn*Tn);for(let c=0;c<2;c++){for(let l=0;l<Tn;l++)for(let u=0;u<Tn;u++){let f=0,d=0;for(let h=-2;h<=2;h++){const g=u+h;g>=0&&g<Tn&&(f+=s[l*Tn+g],d++)}a[l*Tn+u]=f/d}for(let l=0;l<Tn;l++)for(let u=0;u<Tn;u++){let f=0,d=0;for(let h=-2;h<=2;h++){const g=l+h;g>=0&&g<Tn&&(f+=a[g*Tn+u],d++)}s[l*Tn+u]=f/d}}return(c,l)=>{const u=o(c),f=o(l);return u<0||f<0||u>=Tn||f>=Tn?1:1-.6*Math.min(1,s[u*Tn+f]*1.8)}}function uS(n,e,t,i){const s=new Bn().setFromUnitVectors(Bm,t),r=new D(1,0,0).applyQuaternion(s),o=new D(0,0,1).applyQuaternion(s),a=9,c=new Float32Array(a*a),l=new Float32Array(a*a*3),u=new D,f=new D,d=[0,0,0];for(let p=0;p<a;p++)for(let v=0;v<a;v++){const b=(p/(a-1)-.5)*2*i,_=(v/(a-1)-.5)*2*i;u.copy(e).addScaledVector(r,b).addScaledVector(o,_).normalize(),d[0]=d[1]=d[2]=0,c[p*a+v]=n.at(u,f,d).sub(e).dot(t)/kn,l.set(d,(p*a+v)*3)}const h=(a-1)/(2*i/kn),g=(p,v,b,_,M)=>{const S=Rt.clamp(p*h+(a-1)/2,0,a-1.001),w=Rt.clamp(v*h+(a-1)/2,0,a-1.001),y=Math.floor(S),T=Math.floor(w),L=S-y,C=w-T,R=(E,P)=>b[(E*a+P)*M+_];return(R(y,T)*(1-L)+R(y+1,T)*L)*(1-C)+(R(y,T+1)*(1-L)+R(y+1,T+1)*L)*C},x=[0,0,0];for(let p=0;p<a*a;p++)for(let v=0;v<3;v++)x[v]+=l[p*3+v]/(a*a);const m=x[0]+x[1]+x[2]||1;return{lift:(p,v)=>g(p,v,c,0,1),shadeAt:(p,v)=>(g(p,v,l,0,3)+g(p,v,l,1,3)+g(p,v,l,2,3))/m,mean:x}}function dS(n,e){const t=Math.PI/2,i=e.sink,s=e.deck,r=(c,l,u,f,d=0)=>c.rotateY(d).translate(l,u,f),o=(c,l,u)=>{const f=c.attributes.position,d=n.r()*6,h=n.r()*6;for(let g=0;g<f.count;g++){const x=f.getX(g),m=f.getZ(g),p=Math.hypot(x,m);if(p<l)continue;const v=Math.atan2(m,x),b=1+(p-l)/l*u*(Math.sin(3*v+d)+.5*Math.sin(5*v+h)+.3*Math.sin(11*v+d*2));f.setX(g,x*b),f.setZ(g,m*b)}return c},a={foot(c,l,u,f,d=.015,h=0,g=ee,x=.55){n.add(r(new ut(u,d+i,f),c,(d-i)/2,l,h),g,x)},can(c,l,u,f,d=0,h=!1,g=0){const x=g+u*1.25;n.add(r(new Ee(u,u,f,14).rotateZ(t),c,x,l,d),le);for(const m of[-1,1])n.add(r(new Fn(u,14,6,0,Math.PI*2,0,t).scale(1,.45,1).rotateZ(-m*t).translate(m*f/2,0,0),c,x,l,d),le,.95),n.add(r(new ut(u*.35,u*1.25+g+i,u*1.6).translate(m*f*.3,(u*1.25+g-i)/2-g,0),c,g,l,d),ee,.6);h&&n.add(r(new Ee(u*1.02,u*1.02,f*.22,14,1,!0).rotateZ(t),c,x,l,d),qe);for(let m=0;m<4;m++)n.add(r(new ut(f*.09,u*.22,u*.08).translate((m-1.5)*f*.18,0,u*.98),c,x+u*.2,l,d),Ut);return x},tube(c,l,u,f,d,h=.02){n.strut(c,d,l,u,d,f,h*2.4,le,.85)},silo(c,l,u,f,d=!1){return n.add(new Ee(u*1.15,u*1.2,.015+i,12).translate(c,(.015-i)/2,l),ee,.55),n.add(new Ee(u,u,f,14).translate(c,f/2,l),le,.95),n.add(new Ee(u*.15,u,u*.6,14).translate(c,f+u*.3,l),le,.9),n.add(new Ee(u*1.02,u*1.02,f*.12,14,1,!0).translate(c,f*.78,l),d?qe:ee,d?1:.7),n.box(u*.12,f,u*.06,c+u,f/2,l,ee,.6),f+u*.6},tower(c,l,u,f,d=.008,h=ee){const g=u*.45,x=[[-1,-1],[1,-1],[1,1],[-1,1]];for(const[p,v]of x)n.strut(c+p*u/2,-i,l+v*u/2,c+p*g/2,f,l+v*g/2,d,h);const m=Math.max(2,Math.round(f/(u*1.2)));for(let p=0;p<=m;p++){const v=p/m,b=v*f,_=(u+(g-u)*v)/2;for(let M=0;M<4;M++){const[S,w]=x[M],[y,T]=x[(M+1)%4];n.strut(c+S*_,b,l+w*_,c+y*_,b,l+T*_,d*.7,h)}if(p<m){const M=(p+1)/m,S=M*f,w=(u+(g-u)*M)/2;for(let y=0;y<4;y++){const[T,L]=x[y],[C,R]=x[(y+1)%4];n.strut(c+T*_,b,l+L*_,c+C*w,S,l+R*w,d*.6,h,.85)}}}return f},lamp(c,l,u=.14){n.strut(c,-i,l,c,u,l,.008,ee),n.box(.03,.012,.02,c,u,l,ee,.7),n.box(.022,.006,.014,c,u-.008,l,Ut)},mast(c,l,u){a.tower(c,l,.05,u,.006),n.dish(.05,c+.03,u*.75,l,[.6,.7,.3]),n.box(.012,.012,.012,c,u+.008,l,ln)},solar(c,l,u,f,d=0,h=.45){const g=u/f;for(let x=0;x<f;x++){const m=(x-(f-1)/2)*g;n.add(r(new ut(g*.92,.006,.14).rotateX(h).translate(m,.07,0),c,0,l,d),Ks),n.add(r(new ut(.008,.07+i,.008).translate(m,(.07-i)/2,0),c,0,l,d),ee,.6)}n.add(r(new ut(u,.008,.008).translate(0,.07,0),c,0,l,d),ee,.7)},radiators(c,l,u,f,d,h=0){const g=u/d;for(let x=0;x<d;x++)n.add(r(new ut(g*.9,f,.006).translate((x-(d-1)/2)*g,f/2+.03,0),c,0,l,h),pl,.9+n.r()*.15);n.add(r(new ut(u*1.04,.03+i,.03).translate(0,(.03-i)/2,0),c,0,l,h),ee,.6),n.add(r(new Ee(.008,.008,u,6).rotateZ(t).translate(0,f+.035,0),c,0,l,h),le,.8)},conveyor(c,l,u,f,d,h,g=!1){const x=new D(f-c,d-l,h-u),m=x.length();g?n.pipe(c,l,u,f,d,h,.018,le):n.boom(c,l,u,[x.x,x.y,x.z],m,.03,le,.85);const p=Math.max(1,Math.floor(m/.18));for(let v=1;v<=p;v++){const b=v/(p+1),_=c+x.x*b,M=l+x.y*b,S=u+x.z*b;M>.02&&n.strut(_,-i,S,_,M,S,.012,ee)}},truck(c,l,u=0,f=0){n.add(r(new ut(.035,.03,.04).translate(.035,.03,0),c,f,l,u),le),n.add(r(new ut(.06,.03,.045).translate(-.015,.035,0),c,f,l,u),ee,.85);for(const[d,h]of[[-.03,-1],[-.03,1],[.035,-1],[.035,1]])n.add(r(new Ee(.014,.014,.01,8).rotateX(t).translate(d,.014,h*.025),c,f,l,u),ee,.5)},pit(c,l,u,f,d=.85,h=0){if(s)return{H:0,r0:u*.32,step:0,hb:0};const g=[new Be(0,0)],x=.014,m=u*.32,p=(u-m)/f;g.push(new Be(m,0));for(let w=0;w<f;w++){const y=m+w*p,T=(w+1)*x;g.push(new Be(y+p*.35,T),new Be(y+p,T))}const v=f*x;g.push(new Be(u*1.04,v+.004),new Be(u*1.14,v*.6),new Be(u*1.3,v*.15),new Be(u*1.4,-i));const b=new vr(g.reverse(),30).scale(1,1,d),_=b.attributes.position,M=n.r()*6,S=n.r()*6;for(let w=0;w<_.count;w++){const y=_.getX(w),T=_.getZ(w),L=Math.hypot(y,T);if(L<u*1.06)continue;const C=Math.atan2(T,y),R=1+(L-u*1.06)/u*(.5*Math.sin(3*C+M)+.3*Math.sin(7*C+S));_.setX(w,y*R),_.setZ(w,T*R)}return n.add(r(b,c,0,l,h),Ci,.92),n.add(r(new Vf(m*1.02,20).rotateX(-t).scale(1,1,d),c,.002,l,h),Ci,.7),{H:v,r0:m,step:p,hb:x}},ramp(c,l,u,f,d,h,g=.05){if(s)return;const x=new D(f-c,d-l,h-u),m=x.length(),p=new ut(g,.006,m).translate(0,.003,m/2);p.lookAt(x),n.add(p.translate(c,l,u),Ci,1.15)},heap(c,l,u,f,d=1.02){if(s)return;const h=[new Be(u*1.08,-i),new Be(u,0),new Be(u*.7,f*.55),new Be(u*.35,f*.92),new Be(0,f)];n.add(new vr(h,16).scale(1,1,.75+n.r()*.2).rotateY(n.r()*3).translate(c,0,l),Ci,d)},rig(c,l,u,f=0,d=0){n.add(r(new ut(.1,.025,.07).translate(0,.0125,0),c,f,l,d),ee,.6),n.add(r(new ut(.05,.035,.05).translate(.02,.042,0),c,f,l,d),le,.9),n.add(r(new ut(.04,.03,.004).translate(.02,.045,.026),c,f,l,d),Ut);const h=Math.cos(d),g=Math.sin(d),x=c-.03*h,m=l+.03*g;for(const[p,v]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.strut(x+p*.012,f+.025,m+v*.012,x+p*.006,f+u,m+v*.006,.006,ee);for(let p=1;p<5;p++)n.box(.022-p*.002,.004,.022-p*.002,x,f+.025+(u-.025)*(p/5),m,ee,.7);n.box(.02,.016,.02,x,f+u,m,le),n.strut(x,f-.02,m,x,f+u,m,.006,le,.7)},plant(c,l,u,f,d,h=0){a.foot(c,l,u*1.12,f*1.15,.012,h),n.add(r(new ut(u,d,f).translate(0,d/2,0),c,0,l,h),le,.95),n.add(r(new ut(u*1.01,d*.12,f*1.01).translate(0,d*.82,0),c,0,l,h),qe),n.add(r(new ut(u*.38,d*.75,f*.7).translate(-u*.25,d*1.35,0),c,0,l,h),le,.9);for(let g=0;g<5;g++)n.add(r(new ut(u*.12,d*.08,.004).translate((g-2)*u*.18,d*.5,f/2+.002),c,0,l,h),Ut);for(let g=0;g<3;g++)n.add(r(new ut(u*.12,d*.18,f*.2).translate(u*(.08+g*.13),d+d*.09,(g-1)*f*.25),c,0,l,h),ee,.7)},pad(c,l,u){n.add(new Ee(u,u*1.04,.012+i,20).translate(c,(.012-i)/2,l),ee,.5),n.add(new xo(u*.6,u*.7,20).rotateX(-t).translate(c,.0125,l),qe);for(let f=0;f<6;f++){const d=f/6*Math.PI*2;n.box(.01,.01,.01,c+Math.cos(d)*u*.92,.016,l+Math.sin(d)*u*.92,Si)}},lander(c,l,u=.012){n.add(new vo(.032,.05,2,10).translate(c,u+.085,l),le),n.add(new Ee(.034,.034,.02,10,1,!0).translate(c,u+.1,l),qe),n.add(new Ee(.012,.026,.03,10,1,!0).translate(c,u+.035,l),ee,.6);for(let f=0;f<4;f++){const d=f/4*Math.PI*2+.6;n.strut(c+Math.cos(d)*.025,u+.07,l+Math.sin(d)*.025,c+Math.cos(d)*.065,u,l+Math.sin(d)*.065,.006,ee)}},tank(c,l,u,f,d=0,h=!1){n.add(r(new vo(u,f,3,12).rotateZ(t),c,u*1.1,l,d),le,.95),h&&n.add(r(new Ee(u*1.03,u*1.03,f*.25,12,1,!0).rotateZ(t),c,u*1.1,l,d),qe);for(const g of[-.3,.3])n.add(r(new ut(u*.3,u*1.1+i,u*1.6).translate(g*f,(u*1.1-i)/2,0),c,0,l,d),ee,.6)},reactor(c,l,u=0){n.add(r(new Ee(.08,.09,.05+i,12).translate(0,(.05-i)/2,0),c,0,l,u),ee,.6),n.add(r(new Fn(.065,14,6,0,Math.PI*2,0,t).translate(0,.05,0),c,0,l,u),le,1.05);for(const f of[-1,1])a.radiators(c+Math.cos(u)*f*.22,l-Math.sin(u)*f*.22,.28,.09,4,u)},guys(c,l,u,f){for(let d=0;d<3;d++){const h=d/3*Math.PI*2+.4;n.strut(c,u,l,c+Math.cos(h)*f,-i*.5,l+Math.sin(h)*f,.003,ee,.8)}},worked(c,l,u,f=.8){s||e.air||n.add(o(new xo(u*.005,u,48,14).rotateX(-t),u*.6,.12).translate(c,.004,l),Ci,f)},tracks(c,l,u,f,d=.03){if(s)return;const h=Math.hypot(u-c,f-l);n.add(new ut(h,.004,d).translate(h/2,.006,0).rotateY(-Math.atan2(f-l,u-c)).translate(c,0,l),Ci,.8)},berm(c,l,u,f,d){if(s)return;const h=[new Be(u+d,-i),new Be(u+d*.35,f),new Be(u-d*.35,f),new Be(u-d,-i)];n.add(new vr(h,32).translate(c,0,l),Ci,.95)},mound(c,l,u,f,d=0){const h=a.can(c,l,u,f,d,!1);return n.add(r(new ut(u*.7,u*.9,u*.7).translate(f/2+u*.45,u*.45,0),c,0,l,d),ee,.7),n.add(r(new ut(u*.3,u*.25,u*.72).translate(f/2+u*.45,u*.55,0),c,0,l,d),Ut),s||n.add(r(new Fn(1,18,8,0,Math.PI*2,0,t).scale(f*.46,u*2.6,u*2.2),c,-i,l,d),Ci,.97),h},bunker(c,l,u,f,d,h=0){n.add(r(new ut(u,d+i,f).translate(0,(d-i)/2,0),c,0,l,h),ee,.65),n.add(r(new ut(u*.3,d*.7,.01).translate(0,d*.35,f/2+.004),c,0,l,h),qe,.8),s||n.add(r(new Fn(1,16,7,0,Math.PI*2,0,t).scale(u*.8,d*1.7,f*.62),c,-i,l,h),Ci,.95)},dome(c,l,u,f=!0){if(n.add(new Ee(u*1.04,u*1.08,.02+i,20).translate(c,(.02-i)/2,l),ee,.6),n.add(new Fn(u,20,8,0,Math.PI*2,0,t).translate(c,.02,l),f?Ks:le,f?.8:1.05),f)for(let d=0;d<6;d++)n.add(new On(u*1.005,u*.012,3,24,Math.PI).rotateY(d/6*Math.PI).translate(c,.02,l),le,.9);for(let d=0;d<10;d++){const h=d/10*Math.PI*2;n.box(u*.18,u*.06,u*.05,c+Math.cos(h)*u*.98,.03,l+Math.sin(h)*u*.98,Ut)}},turret(c,l,u){n.add(new Ee(.045,.055,.03+i,10).translate(c,(.03-i)/2,l),ee,.6),n.add(r(new ut(.08,.04,.07).translate(-.01,.05,0),c,0,l,-u),le,.95),n.add(r(new ut(.012,.004,.072).translate(-.03,.071,0),c,0,l,-u),qe);for(const f of[-.016,.016])n.add(r(new ut(.2,.011,.011).translate(.1,0,0).rotateZ(.32).translate(.02,.055,f),c,0,l,-u),ee,.55)},radome(c,l,u,f=.06){n.add(new Ee(u*.6,u*.75,f+i,10).translate(c,(f-i)/2,l),ee,.65),n.add(new Fn(u,16,10).translate(c,f+u*.8,l),le,1.1)},bigDish(c,l,u,f=[.35,1,.3]){n.add(new Ee(u*.25,u*.35,u*.7+i,8).translate(c,(u*.7-i)/2,l),ee,.65),n.dish(u,c,u*.85,l,f)},observatory(c,l,u){n.add(new Ee(u,u*1.05,u*.9+i,16).translate(c,(u*.9-i)/2,l),le,.95),n.add(new Fn(u*1.02,16,8,0,Math.PI*2,0,t).translate(c,u*.9,l),le,1.1),n.add(new ut(u*.3,u*1.1,u*.4).translate(c,u*1.4,l+u*.75),ee,.35),n.add(new Ee(u*1.02,u*1.02,u*.14,16,1,!0).translate(c,u*.6,l),qe)},block(c,l,u,f,d,h=0,g=!0){n.add(r(new ut(u,d+i,f).translate(0,(d-i)/2,0),c,0,l,h),le,.95),g&&n.add(r(new ut(u*1.01,d*.14,f*1.01).translate(0,d*.8,0),c,0,l,h),qe);for(let p=0;p<4;p++)n.add(r(new ut(u*.14,d*.12,.004).translate((p-1.5)*u*.22,d*.55,f/2+.002),c,0,l,h),Ut);for(const[p,v]of[[-.25,.1],[.2,-.15]])n.add(r(new ut(u*.2,d*.25,f*.3).translate(p*u,d*1.12,v*f),c,0,l,h),ee,.7);const x=Math.min(d*.55,.045),m=1+1.4*x/Math.min(u,f);s||n.add(r(new Ee(Math.SQRT1_2,Math.SQRT1_2*m,x+i,4,1).rotateY(Math.PI/4).scale(u,1,f).translate(0,(x-i)/2,0),c,0,l,h),Ci,.95)},fence(c,l,u,f){for(let d=0;d<f;d++){const h=d/f*Math.PI*2,g=(d+1)/f*Math.PI*2;n.strut(c+Math.cos(h)*u,-i,l+Math.sin(h)*u,c+Math.cos(h)*u,.05,l+Math.sin(h)*u,.005,ee),n.strut(c+Math.cos(h)*u,.05,l+Math.sin(h)*u,c+Math.cos(g)*u,.05,l+Math.sin(g)*u,.003,ee,.8)}},deck(c){n.add(new Ee(c,c*.96,.025,28).translate(0,-.0125,0),ee,.6),n.add(new Ee(c*1.005,c*1.005,.01,28,1,!0).translate(0,-.005,0),qe);for(let l=0;l<8;l++){const u=l/8*Math.PI*2;n.strut(Math.cos(u)*c*.9,-.025,Math.sin(u)*c*.9,Math.cos(u)*c*.3,-.18,Math.sin(u)*c*.3,.012,ee)}for(let l=0;l<3;l++){const u=l/3*Math.PI*2+.5,f=Math.cos(u)*c*.55,d=Math.sin(u)*c*.55;n.add(new Fn(c*.32,16,10).scale(1.6,.8,1).rotateY(-u).translate(f,-.22,d),le,1.05),n.strut(f,-.16,d,f*.5,-.025,d*.5,.008,ee)}for(let l=0;l<8;l++){const u=l/8*Math.PI*2;n.box(.012,.012,.012,Math.cos(u)*c*.98,.006,Math.sin(u)*c*.98,l%2?Si:li)}},spinner(c,l,u,f,d,h){const g=hn(Math.floor(n.r()*1e6));h(g),e.spins.push({K:g,at:[c,l,u],axis:f,rate:d})}};return a}function fS(n,e,t,i){const s=i.rock,r=i.sink,o=t>=2,a=t>=3,c=[.34,.46,.6][t-1],l=-.2-(t-1)*.08,u=.02,f=s?2:t+2,d=n.pit(l,u,c,f,s?.95:.82,.3),h=d.H;if(n.heap(l-c*1.45,u+c*.6,.16+t*.02,.025+t*.005,.94),o&&n.heap(l-c*.6,u-c*1.5,.18,.03,.9),a&&n.heap(l+c*.3,u+c*1.5,.2,.035,.97),n.rig(l+.04,u-.03,.2,0,.6),o&&n.rig(l-d.r0*.9-d.step,u+.1,.17,d.hb,2.2),a&&n.rig(l+.05,u+d.r0+d.step*1.2,.18,d.hb*2,4.1),s){e.add(new Ee(c*.4,c*.6,.035,18,1,!0).translate(l,.09,u),ee,.6);for(let _=0;_<3;_++){const M=_/3*Math.PI*2+.5;e.strut(l+Math.cos(M)*c*.8,.07,u+Math.sin(M)*c*.8,l+Math.cos(M)*c*1.05,-r,u+Math.sin(M)*c*1.05,.012,ee)}}else n.ramp(l+d.r0*.8,.004,u-d.r0*.5,l+c*1.05,h+.008,u-c*.75),n.truck(l+d.r0*1.6,u-c*.45,-.65,h*.45),o&&n.truck(l+c*1.25,u-c*.95,.4,0),a&&n.truck(l-d.r0*.6,u-d.r0*.2,1.9,0);const g=l+c*1.25,x=u+.02;n.foot(g,x,.1,.1,h),e.add(new Ee(.065,.025,.07,4).rotateY(Math.PI/4).translate(g,h+.07,x),le,.9),e.add(new Ee(.067,.067,.012,4).rotateY(Math.PI/4).translate(g,h+.1,x),qe);const m=o?.72:.42,p=o?-.28:-.06;if(s){for(let _=0;_<t;_++){const M=m+_%2*.12,S=p+Math.floor(_/2)*.13-0;e.add(new Fn(.06,14,10).translate(M,.075,S),le,.95),e.add(new Ee(.062,.062,.015,14,1,!0).translate(M,.075,S),_===0?qe:ee,_===0?1:.7),n.foot(M,S,.07,.07,.02)}n.conveyor(g,h+.05,x,m,.08,p,!0)}else n.silo(m,p,.055,.2,!0),o&&n.silo(m,p+.16,.055,.2),n.conveyor(g+.03,h+.08,x,m-.06,.2,p,!1);o&&(n.plant(.42,.06,.24,.15,.09,.15),n.conveyor(g+.05,h+.06,x+.02,.3,.1,.05,s));const v=[[.3,.38,.4],[.58,.42,-.3],[.48,.66,1.2]].slice(0,t);let b=null;for(const[_,M,S]of v){n.foot(_,M,.3,.12,.012,S);const w=n.can(_,M,.05,.2,S,b===null);b&&n.tube(b[0],b[1],_,M,w),b=[_,M]}if(n.solar(.02,.62,.42,4,.15),o&&n.solar(.08,.82,.42,4,.15),n.radiators(.72,.18,.16+t*.06,.06,2+t,Math.PI/2),n.mast(.78,.55,.32),s&&n.guys(.78,.55,.25,.14),n.lamp(l+c*.9,u+c*.75),o&&n.lamp(l-c*.2,u-c*1.1),n.lamp(.55,-.02),a){n.reactor(-.25,.9,.2);for(let _=0;_<4;_++)n.tank(.95+_%2*.1,.2+Math.floor(_/2)*.13,.04,.14,Math.PI/2,_===0);e.add(new Ee(.035,.04,.3,12).translate(.62,.15,.12),le,.95),e.add(new Ee(.037,.037,.04,12,1,!0).translate(.62,.24,.12),qe),n.tower(.62,.12,.1,.33,.006),s?(n.tower(1,-.4,.09,.42,.008),n.guys(1,-.4,.35,.2),e.add(new Ee(.03,.03,.02,12).translate(1,.43,-.4),ee),e.add(new vo(.028,.08,2,10).translate(1,.5,-.4),le),e.add(new Ee(.03,.03,.025,10,1,!0).translate(1,.5,-.4),qe),n.conveyor(m+.1,.08,p,1,.3,-.4,!0)):(n.pad(1,-.45,.17),n.lander(1,-.45),n.conveyor(m+.05,.16,p+.16,.86,.1,-.35,!1)),n.lamp(.85,-.7),n.lamp(-.05,1.05)}}function hS(n,e,t,i){const s=[.5,.6,.7][t-1];i.deck&&n.deck(s+.18),n.worked(0,0,s+.14),n.berm(0,0,s*.92,.04,.08),n.bunker(0,0,.18,.12,.05,.4);const r=t*2;for(let c=0;c<r;c++){const l=c/r*Math.PI*2+.3;n.turret(Math.cos(l)*s*.58,Math.sin(l)*s*.58,l)}const o=s+.08,a=-.12;n.tower(o,a,.045,.24,.005),e.dish(.045,o,.25,a,[.4,1,-.3]),e.box(.012,.012,.012,o,.29,a,ln),i.rock&&n.guys(o,a,.2,.12),n.foot(o-.02,a+.14,.09,.07,.04),t>=2&&(n.foot(-s-.06,.1,.1,.18,.05,0,le,.9),n.radiators(-s-.06,.1,.18,.05,3,Math.PI/2+.2)),t>=3&&n.radome(.1,s+.1,.05,.05),n.lamp(s*.3,-s-.05,.12),n.lamp(-s*.4,s+.02,.12),n.tracks(0,0,-s-.25,-.2)}function pS(n,e,t,i){const s=t>=2?.72:.56;i.deck&&n.deck(s+.12),n.worked(0,0,s+.08),n.fence(0,0,s,22+t*8),n.block(-.08,.04,.24,.15,.075,.25),n.radome(.22,-.18,.075,.07),e.add(new Ee(.03,.04,.09+i.sink,8).translate(.2,(.09-i.sink)/2,.2),ee,.65),e.add(new Ee(.035,.035,.07,12).rotateX(.7).translate(.2,.12,.21),le),e.add(new Ee(.026,.026,.006,12).rotateX(.7).translate(.2,.145,.235),Ut);const r=-.32,o=-.3;n.tower(r,o,.05,.46,.005);for(const a of[.3,.38])e.box(.14,.006,.006,r,a,o,ee,.7);if(e.box(.012,.012,.012,r,.47,o,ln),i.rock&&n.guys(r,o,.4,.16),n.lamp(.38,.05,.12),n.lamp(-.3,.32,.12),t>=2){n.block(.32,.38,.16,.12,.06,-.4),n.tube(.04,.12,.26,.32,.04,.018);for(const[a,c,l]of[[-.48,.1,.3],[-.42,.34,-.5]])e.add(new ut(.14,.12,.012).rotateX(-.6).rotateY(l).translate(a,.08,c),ee,.55),e.strut(a,-i.sink,c,a,.06,c,.01,ee);n.radome(.48,-.1,.055,.05)}}function mS(n,e,t,i){const s=t>=2,r=t>=3;i.deck&&n.deck([.55,.7,.9][t-1]),n.worked(0,0,[.5,.65,.85][t-1]),n.foot(-.02,.06,.3,.12,.012,.2);const o=n.can(-.02,.06,.05,.22,.2,!0);if(n.foot(.24,.24,.24,.1,.012,1.3),n.can(.24,.24,.045,.18,1.3),n.tube(.06,.1,.2,.18,o),n.bigDish(-.3,-.2,.12),n.solar(.12,-.32,.3,3,.1),n.mast(.42,-.06,.24),i.rock&&n.guys(.42,-.06,.2,.1),n.lamp(-.16,.3,.12),s&&(n.observatory(.08,.5,.08),n.foot(-.3,.32,.24,.1,.012,2.4),n.can(-.3,.32,.045,.18,2.4),n.tube(-.12,.14,-.24,.26,o),n.foot(.5,.25,.12,.1,.06,.4,le,.85),n.radiators(.5,.25,.16,.05,3,.4)),r){for(let a=0;a<3;a++)n.bigDish(-.55+a*.14,-.5+a*.05,.06,[.2,1,.5]);e.frame(.22,.05,.16,-.58,.07,.2,.006),e.box(.22,.006,.16,-.58,.095,.2,ee,.6),e.box(.05,.04,.05,-.62,.12,.18,le),e.sphere(.025,-.52,.12,.24,le,1.1,10);for(const[a,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.strut(-.58+a*.1,-i.sink,.2+c*.07,-.58+a*.1,.045,.2+c*.07,.008,ee);i.deck||(n.pad(.62,-.42,.14),n.lander(.62,-.42),n.tracks(.5,-.32,.2,-.05)),n.lamp(.45,-.6,.12)}}function gS(n,e,t,i){if(i.rock){const o=.22+t*.12;for(const a of[-1,1])e.add(new Ee(.03,.05,.2+i.sink,8).translate(a*(o/2+.04),(.2-i.sink)/2,0),ee,.65),n.guys(a*(o/2+.04),0,.18,.12);e.add(new Ee(.018,.018,o+.12,8).rotateZ(Math.PI/2).translate(0,.2,0),ee,.7),n.spinner(0,.2,0,"x",.5,a=>{for(let c=0;c<t;c++){const l=(c-(t-1)/2)*.13;a.add(new Ee(.11,.11,.1,22).rotateZ(Math.PI/2).translate(l,0,0),c===1?qe:le);for(let u=0;u<12;u++){const f=u/12*Math.PI*2;a.box(.04,.01,.012,l,Math.cos(f)*.111,Math.sin(f)*.111,Ut)}}}),n.solar(0,.32,.36,3,0,.6),n.mast(.3,-.25,.22),n.guys(.3,-.25,.18,.1),n.lamp(-.25,-.22,.12);return}const s=t>=2,r=t>=3;if(i.deck&&n.deck([.55,.75,.95][t-1]),n.worked(0,0,[.5,.68,.88][t-1]),n.mound(-.12,.1,.05,.26,.35),n.mound(.16,-.12,.05,.24,1.9),n.dome(.2,.2,.08),n.tube(.02,0,.14,.14,.05),n.solar(-.15,-.34,.32,3,.2),n.radiators(.4,-.05,.14,.05,2,Math.PI/2),n.lamp(-.32,.12,.12),s&&(n.dome(-.18,.42,.12,!1),n.mound(-.45,.05,.05,.24,2.6),n.mound(.1,.5,.05,.22,.1),n.tube(-.12,.2,-.16,.32,.05),n.lamp(.3,.42,.12)),r){n.block(.45,.3,.1,.1,.36,.3,!0);for(let o=0;o<6;o++)e.add(new ut(.104,.008,.104).rotateY(.3).translate(.45,.06+o*.05,.3),Ut);e.add(new Ee(.03,.045,.08+i.sink,10).translate(-.4,(.08-i.sink)/2,-.32),ee,.65),n.spinner(-.4,.1,-.32,"y",.35,o=>{for(let a=0;a<16;a++){const c=a/16*Math.PI*2;o.add(new ut(.05,.035,.042).rotateY(-c).translate(Math.cos(c)*.16,0,Math.sin(c)*.16),a%8===3?qe:le,.95),a%2===0&&o.box(.012,.01,.02,Math.cos(c)*.186,0,Math.sin(c)*.186,Ut)}for(let a=0;a<4;a++){const c=a/4*Math.PI*2+.4;o.strut(0,0,0,Math.cos(c)*.14,0,Math.sin(c)*.14,.01,ee)}o.add(new Ee(.03,.03,.04,10),le)})}}const Ai=8.5,ta=12;function vS(n,e,t,i){n.worked(0,0,.82),e.add(new Ee(.28,.32,.06+i.sink,16).translate(0,(.06-i.sink)/2,0),ee,.6),e.add(new Ee(.2,.24,.08,16).translate(0,.1,0),le,.95),e.add(new Ee(.205,.205,.02,16,1,!0).translate(0,.12,0),qe),e.add(new Ee(.06,.08,.3,12).translate(0,.29,0),le);for(let r=0;r<12;r++){const o=r/12*Math.PI*2;e.box(.04,.012,.01,Math.cos(o)*.243,.1,Math.sin(o)*.243,Ut)}n.block(.5,.15,.2,.12,.07,.3),n.block(-.45,-.3,.18,.12,.06,-.6),n.tracks(.25,.05,.42,.13),n.tracks(-.22,-.12,-.38,-.26),n.radiators(.15,-.5,.24,.06,3,.3),n.lamp(.36,-.3,.14),n.lamp(-.3,.38,.14);for(const r of[-1,1])e.strut(r*.03,.44,0,r*.03,ta,0,.045,ee);for(const r of[2.2,4.8,7.1,10.2])e.box(.14,.2,.12,0,r,0,le,.9),e.box(.1,.03,.004,0,r,.062,Ut);const s=.45;e.add(new Ee(s*.8,s*.8,s,16).translate(0,Ai,0),le),e.add(new Ee(s*.82,s*.82,s*.25,16,1,!0).translate(0,Ai+s*.1,0),qe);for(const r of[-1,1]){const[o,a]=e.boom(r*s*.75,Ai,0,[r,0,0],s*1.1,s*.14,le,.9);e.box(s*.12,s*.35,s*.35,o,a,0,ee),e.strapped(s*.16,s*.4,r*s*1.2,Ai-s*.3,0,r>0)}if(e.solar(0,Ai+s*.5,0,s*2.2,s*.8,Math.PI/2+.3,.01),t>=2){e.add(new On(s*2.4,s*.16,8,48).rotateX(Math.PI/2).translate(0,Ai,0),le);for(let r=0;r<6;r++){const o=r/6*Math.PI*2+.26;e.strut(Math.cos(o)*s*.8,Ai,Math.sin(o)*s*.8,Math.cos(o)*s*2.3,Ai,Math.sin(o)*s*2.3,s*.08),e.frame(s*.6,s*.4,s*.6,Math.cos(o)*s*2.8,Ai,Math.sin(o)*s*2.8,s*.04),r%2===0&&e.sphere(s*.2,Math.cos(o)*s*2.8,Ai,Math.sin(o)*s*2.8,r===0?qe:le,1,10)}for(let r=0;r<16;r++){const o=r/16*Math.PI*2;e.box(s*.1,s*.06,s*.12,Math.cos(o)*s*2.58,Ai,Math.sin(o)*s*2.58,Ut)}e.add(new Ee(s*.9,s*.9,s*.7,16).translate(0,Ai-s*1.2,0),le)}e.box(.6,.4,.5,0,ta,0,ee,.7),e.box(.35,.3,.3,.25,ta+.3,.1,ee,.6),e.box(.03,.03,.03,0,ta+.25,0,ln)}const jf={mine:{r:[1,1.2,1.4],build:fS},defence:{r:[.75,.85,.95],build:hS},bureau:{r:[.7,.85],build:pS},lab:{r:[.7,.85,1.05],build:mS},habitat:{r:[.65,.85,1],build:gS},exchange:{r:[1,1.1],build:vS,tall:ta}},xS=50,Jh="#6a7080";function _S(n,e,t){const i=[];return jf["perk-"+n.perk]&&!n.giant&&i.push({m:$d("perk-"+n.perk,n,xS,!0,1,e,null,Jh,t),orbital:!1}),kc["orbit-"+n.perk]&&i.push({m:$d("orbit-"+n.perk,n,0,!0,1,e,null,Jh,t),orbital:!0}),i}function yS(n,e,t,i){for(let s=0;s<6;s++){const r=e.r()*Math.PI,o=.5+e.r()*.7,a=(e.r()-.5)*.9,c=(e.r()-.5)*.9;e.add(new ut(o,.03+i.sink,.045+e.r()*.03).translate(0,(.03-i.sink)/2,0).rotateY(r).translate(a,0,c),Ci,1.5);for(let l=0;l<3;l++){const u=(l/2-.5)*o*.8,f=a+Math.cos(r)*u,d=c-Math.sin(r)*u;e.add(new Dl(.015+e.r()*.015).scale(1,1.4,1).rotateZ((e.r()-.5)*.8).rotateY(e.r()*3).translate(f,.03,d),Ks,1.4)}}for(let s=0;s<7;s++){const r=s/7*Math.PI*2,o=Math.cos(r)*.75,a=Math.sin(r)*.75;e.strut(o,-i.sink,a,o,.08,a,.008,ee),e.box(.014,.014,.014,o,.085,a,li)}n.pit(.4,-.35,.14,2,.9)}function MS(n,e,t,i){e.add(new Ee(.22,.3,.06+i.sink,10).translate(0,(.06-i.sink)/2,0),ee,.4),n.tower(0,0,.2,.34,.012,ee);const s=new Bn().setFromUnitVectors(new D(0,1,0),new D(.45,1,.2).normalize());e.add(new Ee(.55,.07,.17,26,1,!0,0,Math.PI*1.7).translate(0,.085,0).applyQuaternion(s).translate(0,.38,0),le,.5),e.add(new On(.55,.012,4,26,Math.PI*1.7).rotateX(Math.PI/2).translate(0,.17,0).applyQuaternion(s).translate(0,.38,0),ee,.45);const r=new D(0,.42,0).applyQuaternion(s);e.strut(0,.38,0,r.x,.38+r.y,r.z,.012,ee,.5),e.box(.05,.05,.05,r.x,.38+r.y,r.z,le,.5),e.truss(.55,.05,-.75,.25,.07,6,.008,ee);for(let o=0;o<5;o++)e.box(.04+e.r()*.06,.02,.04+e.r()*.05,(e.r()-.5)*1.3,.01,(e.r()-.5)*1.3,le,.45)}function bS(n,e,t,i){for(let s=0;s<6;s++)n.bigDish(-.8+s*.32,-.15+s%2*.08,.1,[.25,1,.35]);n.tracks(-.8,-.15,.8,-.1,.015),n.radome(.15,.35,.09,.06),n.block(-.25,.38,.18,.12,.06,.2),n.mast(.55,.4,.3),n.lamp(-.5,.25,.12)}function SS(n,e,t,i){n.radome(0,0,.12,.06);for(let s=0;s<3;s++){const r=s/3*Math.PI*2+.4,o=Math.cos(r)*.6,a=Math.sin(r)*.6;n.bunker(o,a,.22,.16,.07,-r+Math.PI/2),e.add(new ut(.34,.025,.025).translate(.17,0,0).rotateY(-r).translate(o+Math.cos(r)*.08,.05,a+Math.sin(r)*.08),ee,.5),n.tracks(0,0,o*.85,a*.85,.04),n.berm(o,a,.2,.04,.05)}n.mast(-.25,.3,.28)}function wS(n,e,t,i){for(let s=0;s<7;s++){const r=s/7*Math.PI*2,o=Math.cos(r)*.5,a=Math.sin(r)*.5,c=.32+s*37%5*.05;e.add(new Dl(1).scale(.055,c,.055).rotateY(r).translate(o,c*.75-i.sink,a),Ks,.45),e.add(new ut(.006,c*.8,.006).translate(o*1.11,c*.6,a*1.11),Vd,1)}e.add(new Hf(.22,.2,4).rotateY(Math.PI/4).translate(0,.1-i.sink*.5,0),Ks,.5),n.foot(.85,-.25,.26,.12,.012,.4),n.can(.85,-.25,.045,.2,.4,!0),n.lamp(.7,-.05,.12),n.lamp(.95,.05,.12),n.tracks(.75,-.2,.35,-.05,.02)}function TS(n,e,t,i){for(let s=0;s<3;s++){const r=-.45+s*.3,o=-.25;e.add(new Ee(.06,.08,.42+i.sink,12).translate(r,(.42-i.sink)/2,o),le,.9),e.add(new Ee(.065,.065,.04,12,1,!0).translate(r,.34,o),qe);for(let a=0;a<4;a++)e.add(new ut(.004,.3,.07).translate(.08,.2,0).rotateY(a/4*Math.PI*2).translate(r,0,o),pl,.95);e.add(new Ee(.05,.05,.006,10).translate(r+.1,.004,o+.08),Ut)}n.radiators(.1,.25,.6,.12,6,.1),n.radiators(.1,.45,.6,.12,6,.1),n.plant(.55,-.25,.26,.18,.12,.3);for(let s=0;s<3;s++)e.box(.05,.05,.004,.47+s*.07,.035,-.15,Ut);for(let s=0;s<3;s++)e.pipe(-.45+s*.3,.12,-.25,.42,.06,-.25,.012);n.lamp(-.7,.1,.14)}for(const[n,e,t]of[["seam",.95,yS],["relay",1,MS],["post",1,bS],["fortress",.9,SS],["archive",1,wS],["forge",1,TS]])jf["perk-"+n]={r:[e],build:t};const kc={"orbit-relay":(n,e)=>{const t=e.size*2.1;n.add(new On(t,.012,4,120,Math.PI*1.35).rotateX(Math.PI/2),ee,.5),n.add(new On(t,.007,3,120,Math.PI*1.2).rotateX(Math.PI/2).translate(0,.035,0),ee,.45);for(let i=0;i<40;i++){const s=i/40*Math.PI*1.2,r=Math.cos(s)*t,o=-Math.sin(s)*t;n.strut(r,0,o,r,.035,o,.006,ee,.45),i%8===0&&n.box(.06,.05,.06,r,.02,o,le,.45)}return new Nt},"orbit-depot":(n,e)=>{n.truss(0,0,-.078*3,.078*3,.078*.4,6,.078*.05);for(let i=0;i<6;i++)for(const s of[-1,1])n.strapped(.078*.32,.078*.6,s*.078*.6,0,-.078*2.4+i*.078*.95,i%3===0&&s>0);n.add(new Ee(.078*.4,.078*.4,.078*1,14).rotateX(Math.PI/2).translate(0,.078*.6,.078*3.2),le);for(let i=0;i<6;i++)n.box(.078*.05,.078*.1,.078*.02,(i-2.5)*.078*.12,.078*.6,.078*3.71,Ut);for(const i of[-1,1]){const[s,r,o]=n.boom(i*.078*.3,.031200000000000002,.0936,[i,.6,.2],.0936,.00468,le,.9);n.box(.078*.15,.078*.15,.078*.15,s,r,o,ee,.7)}return n.tank(.078*.3,.078*1.3,.078*2.2,.078*.4,.078*1.6,le),n.radiator(0,-.078*.4,0,.078*1.5,.078*3,-Math.PI/2,4,.078*.04),n.light(0,.078*.9,.078*3.2,ln,.078*.12),ml(e.size*1.8,2.2)},"orbit-hulk":(n,e)=>{const s=.058499999999999996;for(let r=0;r<9;r++){const o=-.351+(r+.5)*.078,a=r%3===1;n.add(new Ee(s,s,.702/9*.96,16,1,!0,a?.6:0,a?Math.PI*1.3:Math.PI*2).rotateZ(Math.PI/2).translate(o,0,0),le,.55+r%2*.1),n.add(new On(s*.98,.078*.05,4,18).rotateY(Math.PI/2).translate(o-.702/18,0,0),ee,.5)}n.add(new Ee(s*.7,s*1.2,.078*1.5,16,1,!0).rotateZ(Math.PI/2).translate(-.702/2-.078*.7,0,0),ee,.5),n.add(new Ee(s*.3,s,.078*.9,16).rotateZ(-Math.PI/2).translate(.702/2+.078*.45,0,0),le,.5);for(let r=0;r<3;r++)n.frame(.702*.18,s*2.8,s*2.8,-.702*.2+r*.702*.2,0,0,.078*.03);n.boom(0,s*1.4,s*1.4,[.6,.4,0],.078*2,.078*.08,le,.9);for(let r=0;r<6;r++)n.light(-.702*.3+r*.702*.12,s*1.45,(r%2?1:-1)*s*1.4,Ut,.078*.06);return ml(e.size*1.9,4)}};function ES(n,e,t,i){let s=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^Math.imul(i,1274126177);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function AS(n,e,t,i){const s=Math.floor(n),r=Math.floor(e),o=Math.floor(t),a=n-s,c=e-r,l=t-o,u=a*a*(3-2*a),f=c*c*(3-2*c),d=l*l*(3-2*l),h=(x,m,p)=>x+(m-x)*p,g=(x,m,p)=>ES(s+x,r+m,o+p,i);return h(h(h(g(0,0,0),g(1,0,0),u),h(g(0,1,0),g(1,1,0),u),f),h(h(g(0,0,1),g(1,0,1),u),h(g(0,1,1),g(1,1,1),u),f),d)}function bc(n,e,t,i,s){let r=0,o=.5,a=1;for(let c=0;c<s;c++)r+=AS(n*a,e*a,t*a,i+c)*o,a*=2.03,o*=.5;return r}function Gm(n,e,t=5,i=1){const s=Ui(n*97+1);let r=new $f(e,t);r.deleteAttribute("normal"),r.deleteAttribute("uv"),r=Nb(r);const o=Array.from({length:5},()=>({d:new D(s()-.5,s()-.5,s()-.5).normalize(),f:.6+s()*1.2,ph:s()*6.28,a:.05+s()*.08})),a=Array.from({length:7+Math.floor(s()*5)},()=>({d:new D(s()-.5,s()-.5,s()-.5).normalize(),size:.15+s()*.3})),c=new D(1.2+s()*.6,.75+s()*.2,.85+s()*.35),l=Math.floor(n)%1e3,u=r.attributes.position,f=new D,d=new D,h=[],g=s()<.35,x=g?[1.08,.95,.82]:[1,.98,.95],m=g?.26:.16;for(let p=0;p<u.count;p++){f.fromBufferAttribute(u,p),d.copy(f).normalize();let v=1;for(const M of o)v+=M.a*Math.sin(d.dot(M.d)*M.f*3+M.ph);v+=(Math.abs(bc(d.x*2.2,d.y*2.2,d.z*2.2,l+7,3)-.5)-.15)*.25*i;let b=0;for(const M of a){const S=d.distanceTo(M.d)/M.size;if(S<1){const w=1-S*S;v-=.11*w*M.size*3,b=Math.max(b,w)}else S<1.3&&(v+=.025*(1-(S-1)/.3)*M.size*3)}v+=(bc(d.x*7,d.y*7,d.z*7,l+5,3)-.5)*.09*i,f.multiplyScalar(v).multiply(c),u.setXYZ(p,f.x,f.y,f.z);let _=m+(bc(d.x*2.5,d.y*2.5,d.z*2.5,l+9,4)-.5)*.18+(v-1)*.25-b*.04;_+=(bc(d.x*12,d.y*12,d.z*12,l+2,2)-.5)*.08,_=Math.max(.05,Math.min(.5,_)),h.push(_*x[0],_*x[1],_*x[2])}return r.setAttribute("color",new yt(h,3)),r.computeVertexNormals(),r}function Vm(n={}){const e=new fl({vertexColors:!0,roughness:.92,metalness:.04}),t=n.scale??6,i=!!n.tumble;return e.onBeforeCompile=s=>{s.uniforms.uT=n.uT||{value:0},Yf(s.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        uniform float uT; varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz; varying vec3 vShW;
        mat3 rotAxis(vec3 a, float t) { float c = cos(t), s = sin(t); vec3 u = normalize(a); return mat3(c + u.x*u.x*(1.0-c), u.y*u.x*(1.0-c) + u.z*s, u.z*u.x*(1.0-c) - u.y*s, u.x*u.y*(1.0-c) - u.z*s, c + u.y*u.y*(1.0-c), u.z*u.y*(1.0-c) + u.x*s, u.x*u.z*(1.0-c) + u.y*s, u.y*u.z*(1.0-c) - u.x*s, c + u.z*u.z*(1.0-c)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${i?`float fid = float(gl_InstanceID);
        vec3 ax = vec3(fract(sin(fid * 12.9898) * 43758.5), fract(sin(fid * 78.233) * 43758.5), fract(sin(fid * 37.719) * 43758.5)) - 0.5;
        mat3 tum = rotAxis(ax + 1e-3, uT * (0.05 + fract(fid * 0.618) * 0.3) + fid);
        objectNormal = tum * objectNormal;`:""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        ${i?"transformed = tum * transformed;":""}
        vObj = transformed;
        vRx = normalMatrix * vec3(1.0, 0.0, 0.0); vRy = normalMatrix * vec3(0.0, 1.0, 0.0); vRz = normalMatrix * vec3(0.0, 0.0, 1.0);
        {
          vec4 sw = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            sw = instanceMatrix * sw;
          #endif
          vShW = (modelMatrix * sw).xyz;
        }`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz; varying vec3 vShW;
        ${qf}
        ${Ss}
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
        }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        { float shd = sunShadow(vShW, 0.002); reflectedLight.directDiffuse *= shd; reflectedLight.directSpecular *= shd; }`)},e}const Lu={mat:null};function Kh(n){const e=Gm(n.id,n.size,5);return Lu.mat||(Lu.mat=Vm({scale:5})),new Vt(e,Lu.mat)}function CS(n,e,t,i,s){const r=new jn,o=i==="high"?2400:900,a=[0,1,2,3].map(g=>Gm(500+g*17,1,2,1.3)),c=Vm({scale:4,tumble:!0,uT:s}),l=Ui(Math.floor(n*131)),u=[],f=3;for(let g=0;g<f;g++){const x=new jn,m=n+(e-n)*g/f,p=n+(e-n)*(g+1)/f;x.userData.omega=Math.PI*2/t((m+p)/2),r.add(x),u.push(x);const v=Math.ceil(o/f/a.length);for(const b of a){const _=new ll(b,c,v),M=new Nt,S=new Bn,w=new D,y=new D;for(let T=0;T<v;T++){const L=m+l()*(p-m),C=l()*Math.PI*2,R=(l()+l()+l()-1.5)*1.6;w.set(Math.cos(C)*L,R,Math.sin(C)*L),S.setFromEuler(new Ts(l()*6,l()*6,l()*6));const E=.04+Math.pow(l(),4)*.32;M.compose(w,S,y.setScalar(E)),_.setMatrixAt(T,M)}_.frustumCulled=!1,x.add(_)}}const d=new xo(n-4,e+4,256,4).rotateX(-Math.PI/2),h=new Vt(d,new qt({uniforms:{uR0:{value:n-4},uR1:{value:e+4}},vertexShader:`#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vW;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`#include <logdepthbuf_pars_fragment>
      ${Ss}
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
      }`,blending:Zn,transparent:!0,depthWrite:!1,side:ai}));return r.add(h),{group:r,update(g){for(const x of u)x.rotation.y=-x.userData.omega*g},dispose(){for(const g of a)g.dispose();d.dispose()}}}const Xo=0,qo=1,Yo=2,Iu=3,Qh=4,Du=5;function RS(n,e=4096){const t={value:0},i=new wm;i.setAttribute("position",new yt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);const s={},r=(m,p)=>{const v=new mo(new Float32Array(e*p),p);v.setUsage(zs),i.setAttribute(m,v),s[m]=v};r("aP0",3),r("aVel",3),r("aDrift",3),r("aDir",3),r("aCol",3),r("aTime",2),r("aSize",2),r("aKind",2),s.aTime.array.fill(-1e6),i.instanceCount=e;const o=new qt({uniforms:{uT:t,uPx:{value:.002}},vertexShader:`${qi}
      attribute vec3 aP0, aVel, aDrift, aDir, aCol; attribute vec2 aTime, aSize, aKind;
      uniform float uT, uPx;
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        float age = (uT - aTime.x) / aTime.y; // 0..1 over its life
        vAge = age;
        vKind = aKind.x; vSeed = aKind.y; vCol = aCol; vQ = position.xy;
        if (age < 0.0 || age > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
        float t = age * aTime.y;
        // Debris and sparks slow a little (a tidy look, not physics).
        float drag = aKind.x == ${Yo}.0 ? 1.2 : aKind.x == ${qo}.0 ? 2.5 : 0.0;
        float travel = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
        vec3 p = aP0 + aVel * travel + aDrift * t; // drift: carried along with the world it's at
        float size = mix(aSize.x, aSize.y, aKind.x == ${qo}.0 ? sqrt(age) : age);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Far away, a flash only a pixel or two across fades rather than sparkles.
        vFade = aKind.x == ${Xo}.0 || aKind.x == ${qo}.0 || aKind.x == ${Iu}.0 ? clamp(size / (uPx * -mv.z) / 4.0, 0.12, 1.0) : 1.0;
        // Rounds, beams and sparks never get thinner than about a pixel.
        if (aKind.x == ${Yo}.0 || aKind.x == ${Qh}.0 || aKind.x == ${Du}.0) size = max(size, uPx * -mv.z * (aKind.x == ${Du}.0 ? 2.0 : 1.3));
        vec3 dirW = aDir;
        if (aKind.x == ${Yo}.0) dirW = -aVel * exp(-drag * t) * 0.06;
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
        ${Yi}
      }`,fragmentShader:`${ji}
      ${Ss}
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        ${Zi}
        if (vAge < 0.0 || vAge > 1.0) discard;
        float r = length(vQ);
        vec3 col;
        if (vKind < 0.5) {
          // Flash: hot core, soft halo, gone fast.
          float k = (exp(-r * r * 6.0) * 1.5 + exp(-r * 3.5) * 0.35) * smoothstep(1.0, 0.6, r);
          col = vCol * k * pow(abs(1.0 - vAge), 2.0);
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
          float k = exp(-pow(abs((r - 0.85) / 0.06), 2.0));
          col = vCol * k * pow(max(1.0 - vAge, 0.0), 1.5);
        } else if (vKind < 4.5) {
          // Tracer round: a short bright dash with a hotter head.
          float across = exp(-vQ.x * vQ.x * 3.0);
          float along = smoothstep(1.0, 0.2, vQ.y) * smoothstep(-1.0, -0.85, vQ.y);
          float head = exp(-pow(abs((vQ.y + 0.8) / 0.2), 2.0));
          col = (vCol * along + vec3(1.0, 0.95, 0.9) * head * 1.5) * across * 1.6;
        } else {
          // Railgun beam: a white-hot core in a coloured sheath, fading fast.
          float core = exp(-vQ.x * vQ.x * 30.0);
          float sheath = exp(-vQ.x * vQ.x * 3.0);
          float fade = pow(abs(1.0 - vAge), 2.0);
          col = (vec3(1.0) * core * 4.0 + vCol * sheath * 1.2) * fade * smoothstep(1.0, 0.85, abs(vQ.y));
        }
        gl_FragColor = vec4(col * vFade, 1.0);
      }`,blending:Zn,transparent:!0,depthWrite:!1,side:ai}),a=new Vt(i,o);a.frustumCulled=!1,a.renderOrder=5,n.add(a);let c=0,l=!1;const u=new pt;function f(m,p,v,b,_,M,S,w,y=0,T=1){const L=c;c=(c+1)%e,s.aP0.setXYZ(L,p.x,p.y,p.z),s.aVel.setXYZ(L,v?v.x:0,v?v.y:0,v?v.z:0),s.aDrift.setXYZ(L,g.x,g.y,g.z),s.aDir.setXYZ(L,b?b.x:0,b?b.y:0,b?b.z:0),u.set(_).multiplyScalar(T),s.aCol.setXYZ(L,u.r,u.g,u.b),s.aTime.setXY(L,t.value+y,M),s.aSize.setXY(L,S,w),s.aKind.setXY(L,m,Math.random()),l=!0}const d=new D,h=new D,g=new D,x=()=>d.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{uT:t,drift:g,update(m,p){if(t.value=m,p&&(o.uniforms.uPx.value=p),l){for(const v in s)s[v].needsUpdate=!0;l=!1}},explosion(m,p=1){f(Xo,m,null,null,"#ffffff",.16,.3*p,1.5*p,0,3.5),f(Iu,m,null,null,"#9fd4ff",.5,.15*p,1.9*p,0,1.2),f(qo,m,x().multiplyScalar(.2),null,"#ffffff",.75+Math.random()*.2,.25*p,.95*p,.02,2.2);for(let v=0;v<2;v++)f(qo,h.copy(m).add(x().multiplyScalar(.25*p)),x().multiplyScalar(.4),null,"#ffffff",.55,.12*p,.5*p,.08+v*.12,2);for(let v=0;v<16;v++)f(Yo,m,x().multiplyScalar((1.5+Math.random()*3.5)*p),null,"#ff9a40",.5+Math.random()*.8,.025*p,.015*p,0,3);for(let v=0;v<6;v++)f(Xo,m,x().multiplyScalar(.4+Math.random()*.8),null,"#ff7a30",1.5+Math.random()*1.5,.06*p,.025*p,.05,2.5)},impact(m,p,v=!1){f(Xo,m,null,null,p,.15,.1,v?.6:.35,0,1.6);for(let b=0;b<(v?6:3);b++)f(Yo,m,x().multiplyScalar(1.5+Math.random()*3),null,"#ffd090",.25+Math.random()*.3,.02,.01,0,2.5)},intercept(m){f(Xo,m,null,null,"#dff4ff",.12,.05,.3,0,3)},bolt(m,p,v,b,_,M,S=0){h.subVectors(p,m);const w=d.copy(h).divideScalar(b),y=h.clone().normalize().multiplyScalar(-_);f(Qh,m,w,y,v,b,M,M,S,1.6)},beam(m,p,v,b=.3){h.subVectors(p,m),f(Du,p,null,h.clone().negate(),v,b,.045,.02,0,1.4)},ring(m,p,v,b=1.2){f(Iu,m,null,null,p,b,v*.3,v,0,1.5)}}}const Hm=`
vec3 dirFromUv(vec2 uv) {
  float phi = uv.x * 6.28318530718;
  float th = (1.0 - uv.y) * 3.14159265359;
  return vec3(-cos(phi) * sin(th), cos(th), sin(phi) * sin(th));
}`,PS=`
${Ss}
${Hm}
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
    prof += 0.32 * exp(-pow(abs((r - 1.0) / 0.16), 2.0));
    prof += r > 1.0 ? 0.05 * exp(-(r - 1.0) * 2.5) : 0.0;
    h += prof * k;
    // Old craters have dark lava-filled floors; young ones throw bright rays.
    if (hh.z > 0.82) {
      vec3 t1 = normalize(cross(cd, vec3(0.3, 1.0, 0.2)));
      vec3 t2 = cross(cd, t1);
      float ang = atan(dot(d, t2), dot(d, t1));
      float rays = pow(0.5 + 0.5 * sin(ang * 23.0 + hh.y * 40.0), 6.0) * pow(abs(0.5 + 0.5 * sin(ang * 9.0 + hh.x * 70.0)), 2.0);
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
    l = max(l, exp(-pow(abs(n / 0.025), 2.0)) * (0.6 + 0.4 * snoise(d * 5.0 + f * 3.0)));
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
    } else if (uType == 4) {
      // Steppe: a dry, lived-in world. Golden grassland and savanna, ochre
      // uplands, dark scrub along the wetter lowlands, and long inland seas.
      if (land < 0.0) {
        float k = clamp(1.0 + land * 5.0, 0.0, 1.0);
        col = mix(vec3(0.006, 0.022, 0.05), vec3(0.04, 0.13, 0.15), k * k * k);
      } else {
        float wet = clamp(moist * 1.3 - 0.2 + smoothstep(0.08, 0.0, land) * 0.3, 0.0, 1.0);
        vec3 gold = vec3(0.34, 0.27, 0.11), ochre = vec3(0.40, 0.24, 0.11), scrub = vec3(0.10, 0.11, 0.04);
        col = mix(ochre, gold, smoothstep(0.1, 0.45, wet));
        col = mix(col, scrub, smoothstep(0.55, 0.9, wet));
        col = mix(col, vec3(0.26, 0.17, 0.10), smoothstep(0.08, 0.3, hgt - land) * 0.8); // uplands
        col = mix(col, vec3(0.55, 0.47, 0.33), smoothstep(0.0, 0.015, 0.015 - land) * 0.6); // shores
        col *= 0.85 + fine * 0.25;
        col = mix(col, vec3(0.66, 0.66, 0.64), smoothstep(0.34, 0.44, hgt - land) * 0.8); // snow on peaks
      }
    } else if (uType == 2) {
      // Ice: white sheets, blue crevasses, a few dark frozen seas.
      float cr = lineae(d, uSeed);
      col = land < 0.0 ? vec3(0.08, 0.18, 0.28) * (0.8 + fine * 0.3) : mix(vec3(0.48, 0.55, 0.62), vec3(0.66, 0.69, 0.72), smoothstep(0.0, 0.3, land));
      col = mix(col, vec3(0.15, 0.3, 0.45), cr * 0.7);
      hgt = max(hgt, -0.05) - cr * 0.02;
    }
    if (alat > iceLine && uType != 1) col = mix(col, vec3(0.7, 0.73, 0.76), smoothstep(0.0, 0.04, alat - iceLine));
    if (uType == 1 && alat > iceLine) col = mix(col, vec3(0.8, 0.78, 0.74), 0.8);
    h = clamp(max(hgt, uType == 1 ? -1.0 : 0.0) * 0.5 + 0.5, 0.0, 1.0);
    if (land < 0.0 && uType != 1) h = 0.5 + land * 0.04; // sea floor, below the waterline
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
      float ang = 5.0 * exp(-pow(abs(dd / sz), 2.0)) * (i == 0 ? 1.0 : -1.0);
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
    float st = exp(-pow(abs(length(d - uStorm[0].xyz) / (uStorm[0].w * 0.6)), 2.0));
    col = mix(col, uPalC * 1.15, st * 0.7);
    for (int i = 1; i < 4; i++) col = mix(col, vec3(0.85, 0.83, 0.78), exp(-pow(abs(length(d - uStorm[i].xyz) / (uStorm[i].w * 0.35)), 2.0)) * 0.8);
    col = mix(col, col * vec3(0.8, 0.85, 0.95), smoothstep(0.75, 0.95, alat)); // bluish poles
    h = 0.5;
  }
  gl_FragColor = vec4(toS(col), h);
}`,LS=`
${Ss}
${Hm}
// Wind the sphere round every nearby cyclone centre (mid-latitudes only).
// Each twist fades to nothing well before the next cell, so the cloud
// field stays continuous (twisting round only the nearest centre left seams).
vec3 cyclones(vec3 d, float seed) {
  vec3 p = d * 2.6;
  vec3 c0 = floor(p);
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 cell = c0 + vec3(float(x), float(y), float(z));
    vec3 cc = normalize(cell + hash33(cell + seed));
    float la = asin(cc.y);
    float str = smoothstep(0.35, 0.7, abs(la)) * smoothstep(1.35, 1.05, abs(la)) * sign(la);
    str *= step(0.55, hash33(cell + seed + 7.0).x); // only some cells hold a storm
    float dd = length(d - cc);
    float ang = str * 3.0 * exp(-dd * dd / 0.008);
    float c = cos(ang), s = sin(ang);
    d = d * c + cross(cc, d) * s + cc * dot(cc, d) * (1.0 - c);
  }
  return normalize(d);
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
  if (uClouds > 0.0) {
    // Weather: an equatorial band of storms, clear subtropics with scattered
    // fair-weather cumulus, and mid-latitude storm tracks wound into spiral
    // cyclones (turning opposite ways in each hemisphere).
    vec3 dc = cyclones(d, uSeed);
    float lat = asin(d.y);
    vec3 w = vec3(fbm(dc * 2.0 + 5.0, 4), fbm(dc * 2.0 + 8.0, 4), fbm(dc * 2.0 + 11.0, 4));
    float big = fbm(vec3(dc.x * 2.4, dc.y * 4.5, dc.z * 2.4) + w * 0.7 + uSeed + 50.0, 7);
    float alat = abs(lat);
    float bias = -0.1 + 0.25 * exp(-pow(abs(lat / 0.12), 2.0))
      + 0.2 * smoothstep(0.6, 0.9, alat) * smoothstep(1.45, 1.1, alat)
      - 0.18 * exp(-pow(abs((alat - 0.4) / 0.14), 2.0));
    float cov = smoothstep(0.0, 0.22, big + bias);
    float streak = fbm(vec3(dc.x * 10.0, dc.y * 40.0, dc.z * 10.0) + w * 2.0, 4);
    cov *= 0.75 + 0.35 * streak;
    float cu = 0.0; // (fair-weather specks read as paint flecks)
    a = clamp(cov + cu, 0.0, 1.0) * uClouds;
    if (uType == 1) a *= 0.35; // desert: thin
    if (uType == 2) a *= 0.7;
    if (uType == 3 || uType == 5) a = min(1.0, a * 1.2); // wet worlds
  }
  gl_FragColor = vec4(n.xy * 0.5 + 0.5, clamp(lights, 0.0, 1.0), a);
}`,$m=["temperate","desert","ice","jungle","steppe","ocean"],ep={temperate:[.35,.6,1],desert:[1,.7,.45],ice:[.6,.8,1],jungle:[.4,.7,.85],steppe:[.55,.62,.9],ocean:[.3,.55,1]},Uu=[[[.5,.33,.18],[.82,.7,.52],[.62,.3,.15]],[[.3,.45,.6],[.7,.82,.88],[.2,.3,.55]],[[.22,.42,.4],[.55,.72,.66],[.15,.3,.32]],[[.45,.2,.12],[.78,.55,.4],[.35,.12,.08]],[[.35,.28,.45],[.7,.62,.75],[.25,.18,.4]],[[.62,.55,.4],[.88,.84,.72],[.5,.4,.28]]];function Wm(n){return Uu[Math.floor(n.hue*Uu.length)%Uu.length]}function IS(n){if(n.home)return{kind:0,type:Math.max(0,$m.indexOf(n.biome||"temperate")),atmo:ep[n.biome]||ep.temperate,atmoK:1,clouds:1,relief:.06};if(n.giant)return{kind:3,type:0,atmo:Wm(n)[1].map(t=>t*.9+.1),atmoK:.55,clouds:0,relief:0};if(n.kind==="planet"){const t=Math.floor(n.hue*4)%4,i=[[1,.6,.4],null,[1,.85,.55],[.6,.75,1]][t];return{kind:1,type:t,atmo:i,atmoK:t===2?1.2:.45,clouds:0,relief:t===2?0:.09,airless:t===1}}return{kind:2,type:Math.floor(n.hue*4)%4,atmo:null,atmoK:0,clouds:0,relief:.12,airless:!0}}function DS(n,e){const t=new Wt;t.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Vt(t);i.frustumCulled=!1;const s=new Rl;s.add(i);const r=new Ul,o=new qt({uniforms:{uKind:{value:0},uType:{value:0},uSeed:{value:0},uPalA:{value:new D},uPalB:{value:new D},uPalC:{value:new D},uStorm:{value:[0,1,2,3].map(()=>new sn)}},vertexShader:ua,fragmentShader:PS,depthTest:!1,depthWrite:!1}),a=new qt({uniforms:{tAlb:{value:null},uTexel:{value:new Be},uRelief:{value:1},uKind:{value:0},uType:{value:0},uSeed:{value:0},uClouds:{value:0}},vertexShader:ua,fragmentShader:LS,depthTest:!1,depthWrite:!1}),c=Math.min(8,n.capabilities.getMaxAnisotropy()),l=(u,f)=>{const d=new fi(u,f,{depthBuffer:!1,generateMipmaps:!0,minFilter:$s,magFilter:Mn,wrapS:ya,wrapT:is});return d.texture.anisotropy=c,d};return function(f,d){const h=e()==="high",g=d.kind===0?h?2048:1024:h?1024:512,x=g/2,m=(f.id*7.31+f.hue*13.7)%97,p=o.uniforms;if(p.uKind.value=d.kind,p.uType.value=d.type,p.uSeed.value=m,d.kind===3){const S=Wm(f);p.uPalA.value.fromArray(S[0]),p.uPalB.value.fromArray(S[1]),p.uPalC.value.fromArray(S[2]);let w=Math.floor(m*1e3);const y=()=>(w=w*16807%2147483647)/2147483647;p.uStorm.value.forEach((T,L)=>{const C=(y()-.5)*(L?1.4:.9),R=y()*Math.PI*2;T.set(Math.cos(C)*Math.cos(R),Math.sin(C),Math.cos(C)*Math.sin(R),L===0?.12+y()*.06:.04+y()*.03)})}const v=l(g,x),b=l(g,x),_=n.getRenderTarget();i.material=o,n.setRenderTarget(v),n.render(s,r);const M=a.uniforms;return M.tAlb.value=v.texture,M.uTexel.value.set(1/g,1/x),M.uRelief.value=d.relief*(g/1024)*.5+d.relief*.5,M.uKind.value=d.kind,M.uType.value=d.type,M.uSeed.value=m,M.uClouds.value=d.clouds,i.material=a,n.setRenderTarget(b),n.render(s,r),n.setRenderTarget(_),{alb:v.texture,aux:b.texture,rts:[v,b]}}}const Li={pos:{value:[new D,new D]},col:{value:[new D(1.22,1.17,1.08),new D]}},Zf=`
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
}`;function US(n,e,t,i){const s=e.kind===3,r={tAlb:{value:t.alb},tAux:{value:t.aux},uStarPos:Li.pos,uStarCol:Li.col,uCity:{value:0},uCityCol:{value:new D(2.4,1.5,.7)},uCloudShift:{value:0},uCloudK:{value:e.clouds?.55:0},uOcean:{value:e.kind===0&&e.type!==1?1:0},uAirless:{value:e.airless?1:0},uAtmo:{value:new D(...e.atmo||[0,0,0])},uAtmoK:{value:e.atmoK},uT:{value:0},uFlow:{value:s?1:e.kind===1&&e.type===2?.4:0},uOcc:{value:[0,1,2,3].map(()=>new sn(0,0,0,0))},uRingN:{value:new D(0,1,0)},uRingIn:{value:0},uRingOut:{value:0},tRing:{value:i?i.tex:null},uCenter:{value:new D},uRadius:{value:n.size}};return Yf(r),new qt({uniforms:r,vertexShader:`${qi}
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
        ${Yi}
      }`,fragmentShader:`${ji}
      ${Zf}
      ${qf}
      uniform sampler2D tAlb, tAux, tRing;
      uniform vec3 uStarPos[2], uStarCol[2];
      uniform float uCity, uCloudShift, uCloudK, uOcean, uAirless, uAtmoK, uT, uFlow, uRingIn, uRingOut, uRadius;
      uniform vec3 uCityCol, uAtmo, uRingN, uCenter;
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      vec3 fromS(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
      void main() {
        ${Zi}
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
          if (i == 0) sh *= sunShadow(vWorld, 0.0015); // buildings' shadows on the ground
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
            float fres = 0.02 + 0.98 * pow(max(1.0 - dot(Ng, V), 0.0), 5.0);
            float spec = (pow(max(nh, 0.0), 600.0) * 0.9 + pow(max(nh, 0.0), 60.0) * 0.03) * (0.4 + fres);
            spec *= clamp(1.0 - length(fwidth(Ng)) * 25.0, 0.0, 1.0); // fade on small, distant worlds
            col += sc * spec * water * sh * smoothstep(0.0, 0.1, ngl);
          }
          dayAll = max(dayAll, smoothstep(-0.15, 0.25, ngl));
        }
        // Night: city lights, dimmed under cloud.
        float night = 1.0 - smoothstep(-0.1, 0.12, dayAll);
        col += aux.b * uCity * uCityCol * night * (1.0 - clouds * 0.7) * 1.1;
        // A whisper of skylight on the dark side (starlight, ring- and moonshine).
        col += albedo * vec3(0.006, 0.007, 0.01);
        gl_FragColor = vec4(col, 1.0);
      }`})}function kS(n){return new qt({uniforms:{tAux:{value:n.aux},uStarPos:Li.pos,uStarCol:Li.col,uOcc:{value:[0,1,2,3].map(()=>new sn(0,0,0,0))},uHoles:{value:Array.from({length:6},()=>new sn(0,1,0,2))}},vertexShader:`${qi}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        vUv = uv;
        vDir = normalize(position);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Yi}
      }`,fragmentShader:`${ji}
      ${Zf}
      uniform sampler2D tAux; uniform vec3 uStarPos[2], uStarCol[2]; uniform vec4 uHoles[6];
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        ${Zi}
        float a = texture2D(tAux, vUv).a;
        // The sky clears over buildings, so they aren't lost under the clouds.
        for (int i = 0; i < 6; i++) a *= 1.0 - 0.92 * smoothstep(uHoles[i].w - 0.004, uHoles[i].w + 0.002, dot(vDir, uHoles[i].xyz));
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
      }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})}function NS(n,e,t="high"){const i=e.kind===3?.035:e.kind===0?.045:.035,s=n.size*(1+i),r=e.atmo,o=new D(r[0],r[1],r[2]),a=new Vt(new Fn(s,64,40),new qt({uniforms:{uCenter:{value:new D},uRp:{value:n.size*.998},uRa:{value:s},uStarPos:Li.pos,uStarCol:Li.col,uBeta:{value:o},uK:{value:e.atmoK},uOcc:{value:[0,1,2,3].map(()=>new sn(0,0,0,0))}},vertexShader:`${qi}
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
          ${Yi}
        }`,fragmentShader:`${ji}
        ${Zf}
        uniform vec3 uCenter, uBeta; uniform float uRp, uRa, uK;
        uniform vec3 uStarPos[2], uStarCol[2];
        varying vec3 vWorld;
        void main() {
          ${Zi}
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
              // A soft forward glow when backlit (kept gentle: a strong one
              // flares like a camera flash as the view turns past the sun).
              float g = 0.5;
              float pm = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * cth, 1.5) * 0.03;
              sum += dens * lit * att * sc * pr * dt;
              mie += dens * lit * att * sc * pm * dt;
            }
          }
          vec3 col = (sum * uBeta * 0.55 + mie * 0.9) * uK;
          col = min(col, vec3(0.9)); // never a highlight
          // Over the ground, the air is a thin haze: fade it so the surface reads.
          if (ground) col *= 0.75;
          gl_FragColor = vec4(col, 1.0);
        }`,defines:{STEPS:t==="high"?8:5},transparent:!0,blending:Zn,depthWrite:!1}));return a.renderOrder=1,a}function FS(n){const s=new Uint8Array(2048);let r=Math.floor(n.hue*1e6)+n.id*97;const o=()=>(r=r*16807%2147483647)/2147483647,a=Array.from({length:3},()=>({at:.2+o()*.7,w:.006+o()*.025})),c=new Float32Array(512);let l=.5;for(let h=0;h<512;h++)l+=(o()-.5)*.18,l+=(.55-l)*.04,c[h]=l;for(let h=0;h<512;h++){const g=h/511;let x=(c[Math.max(0,h-1)]+c[h]+c[Math.min(511,h+1)])/3;x*=.65+.35*Math.sin(g*9+o()*.2),x*=Math.min(1,g/.1)*Math.min(1,(1-g)/.06),g>.42&&g<.72&&(x*=1.4),g<.18&&(x*=.45);for(const v of a)Math.abs(g-v.at)<v.w&&(x*=.06);x=Math.max(0,Math.min(1,x));const m=.8+.2*c[h*7%512],p=g<.3?.6:.2;s.set([(170+p*20)*m,(163+p*5)*m,(150-p*25)*m,x*255],h*4)}const u=new Ll(s,512,1,Pi);u.colorSpace=ei,u.magFilter=Mn,u.minFilter=Mn,u.needsUpdate=!0;const f=new xo(n.size*1.35,n.size*2.35,160,1),d=new Vt(f,new qt({uniforms:{tRing:{value:u},uIn:{value:1.35},uOut:{value:2.35},uR:{value:n.size},uCenter:{value:new D},uStarPos:Li.pos,uStarCol:Li.col},vertexShader:`${qi}
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        vLocal = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Yi}
      }`,fragmentShader:`${ji}
      uniform sampler2D tRing; uniform float uIn, uOut, uR; uniform vec3 uCenter;
      uniform vec3 uStarPos[2], uStarCol[2];
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        ${Zi}
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
          col += pow(max(tx.rgb, vec3(0.0)), vec3(2.2)) * sc * lit * sh;
        }
        gl_FragColor = vec4(col, tx.a * 0.92);
      }`,transparent:!0,depthWrite:!1,side:ai}));return d.userData.ring={tex:u,inner:1.35,outer:2.35},d}const Xm=["#58b8ff","#ff6a5a","#ffb347"],OS="#8a90a6",wt=n=>n===Ve?OS:Xm[n],tp=6,Qr=.45,zS=.55,ku=.03,np=.8,ip=30,BS=new D(0,1,0),Nu=-.045,Sc=400;function GS(n,e,t,i=1){const s=document.createElement("canvas");s.width=n*i,s.height=e*i;const r=s.getContext("2d");r.scale(i,i),t(r,n,e);const o=new Gf(s);return o.colorSpace=ei,o}const Fu=GS(128,128,n=>{const e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.1)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)}),qm={value:1},VS=new To(2,2);function sp(n=!1){const e=new Vt(VS,new qt({uniforms:{uColor:{value:new pt("#ffffff")},uOpacity:{value:.8},uLvl:{value:0},uWidth:{value:1.6},uPR:qm},vertexShader:`varying vec2 vQ;
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
      }`,transparent:!0,depthWrite:!1,depthTest:n}));return e.frustumCulled=!1,e.renderOrder=10,e}const Ym={value:new Be(1,1)};function HS(n){const e=n.parent!==null?192:512,t=[],i=[],s=[],r=[],o=[],a=f=>{const d=Bp(n,f);return[d.x,d.y,d.z]};for(let f=0;f<=e;f++){const d=f/e*Math.PI*2;for(const h of[-1,1])t.push(...a(d)),i.push(...a(d+.01)),s.push(d),r.push(h);if(f<e){const h=f*2;o.push(h,h+1,h+2,h+1,h+3,h+2)}}const c=new Wt;c.setAttribute("position",new yt(t,3)),c.setAttribute("nextPos",new yt(i,3)),c.setAttribute("ang",new yt(s,1)),c.setAttribute("side",new yt(r,1)),c.setIndex(o);const l=n.parent!==null,u=new Vt(c,new qt({uniforms:{uTh:{value:0},uRes:Ym,uWidth:{value:l?1.4:2.2},uColor:{value:new pt(l?"#5d6a8c":"#7383ad")},uOpacity:{value:l?.55:.75}},vertexShader:`attribute vec3 nextPos; attribute float ang; attribute float side;
      uniform float uTh; uniform vec2 uRes; uniform float uWidth;
      varying float vF; varying float vSide;
      void main() {
        vec4 c = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 n = projectionMatrix * modelViewMatrix * vec4(nextPos, 1.0);
        vec2 dir = normalize((n.xy / n.w - c.xy / c.w) * uRes + 1e-6);
        vF = fract((uTh - ang) / 6.2831853); // 0 just behind the world, 1 a full turn later
        float w = uWidth * pow(max(1.0 - vF, 0.0), 0.9);
        c.xy += vec2(-dir.y, dir.x) * side * w / uRes * c.w;
        vSide = side;
        gl_Position = c;
      }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; varying float vF; varying float vSide;
      void main() {
        // max(): rounding on phone GPUs can push 1 - vF a hair below zero, and
        // pow() of a negative is not-a-number: a broken pixel the bloom blew up into a flash.
        float a = uOpacity * pow(max(1.0 - vF, 0.0), 1.3) * smoothstep(1.0, 0.35, abs(vSide));
        gl_FragColor = vec4(uColor, a);
      }`,transparent:!0,depthWrite:!1,side:ai}));return u.frustumCulled=!1,u}const jm={value:0},Ou=new qt({uniforms:{uT:jm},vertexShader:`${qi}
    varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vW = wp.xyz;
      vec4 mv = viewMatrix * wp;
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
      ${Yi}
    }`,fragmentShader:`${ji}
    uniform float uT; varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      ${Zi}
      float rim = pow(max(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0), 2.0);
      float scan = 0.55 + 0.45 * sin(vW.y * 60.0 - uT * 6.0);
      float flick = 0.85 + 0.15 * sin(uT * 23.0) * sin(uT * 7.0);
      gl_FragColor = vec4(vec3(0.45, 0.8, 1.3) * (0.12 + rim * 0.9) * scan * flick, 1.0);
    }`,blending:Zn,transparent:!0,depthWrite:!1});function $S(n,e,t={}){const i=new kb({canvas:n,antialias:!1,powerPreference:"high-performance"});let s=t.quality||"high";const r=()=>Math.min(window.devicePixelRatio||1,s==="high"?2:1.25);let o=r();i.setPixelRatio(1),i.autoClear=!0;const a=new Rl,c=Gb(i,a),l=new bi(45,1,.02,2e4),u=Fb(i);u.setSamples(s==="high"?4:2);const f=zb(i,s);a.add(f.stars),a.environmentIntensity=.9,a.backgroundIntensity=.7;const d=s==="high"?700:350,h=new Wt;{const O=new Float32Array(d*3);for(let Z=0;Z<O.length;Z++)O[Z]=Math.random();h.setAttribute("position",new mn(O,3))}const g=new qt({uniforms:{uBox:{value:50},uPR:{value:1}},vertexShader:`uniform float uBox, uPR; varying float vA;
      void main() {
        vec3 rel = (fract(position - cameraPosition / uBox) - 0.5) * uBox;
        vec4 mv = viewMatrix * vec4(cameraPosition + rel, 1.0);
        float d = -mv.z;
        // Fade at the edges of the box and right in front of the lens.
        vA = smoothstep(uBox * 0.5, uBox * 0.3, length(rel)) * smoothstep(uBox * 0.02, uBox * 0.08, d);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(uBox * 0.06 / max(d, 0.001), 1.0, 3.0) * uPR;
      }`,fragmentShader:`varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - r * r) * vA * 0.22;
        if (a <= 0.002) discard;
        gl_FragColor = vec4(vec3(0.75, 0.72, 0.66) * a, 1.0);
      }`,blending:Zn,transparent:!0,depthWrite:!1}),x=new Bf(h,g);x.frustumCulled=!1,a.add(x);const m=$h(tp,s),p=m.group;a.add(p);const v=$h(tp,s);v.tint.set(1,.78,.6);const b=v.group;b.visible=!1,b.add(new xh("#ffd9b0",1.4,0,0)),a.add(b),a.add(new xh("#fff1dd",3,0,0)),a.add(new kx("#2a3550",.7));const _=new jn;a.add(_);let M=[],S=6e3;const w={az:.4,pol:.9,dist:380,minDist:1.2,maxDist:2200,target:new D,vaz:0,vpol:0,follow:null};let y=null,T=null;const L=DS(i,()=>s),C=[],R=new Map;function E(O,Z){const re=`${O}:${Z}`;return R.has(re)||R.set(re,new Fn(O,Z?128:96,Z?80:56)),R.get(re)}function P(O){const Z=O.scale||1;w.maxDist=2200*Z,S=6e3*Z;{const H=Ui((O.nameSeed||1)+77),K=Math.max(...O.bodies.filter(me=>me.kind==="planet"&&me.parent===null&&!me.star).map(me=>me.r)),j=me=>me<.3?["desert","steppe"]:me<.55?["temperate","ocean","jungle"]:me<.68?["steppe","temperate"]:["ice","steppe"],de=new Set;for(const me of O.bodies.filter(Te=>Te.home)){const Te=j(me.r/K).filter(Xe=>!de.has(Xe)),fe=Te.length?Te[Math.floor(H()*(me.r/K>=.3&&me.r/K<.55?Te.length:1))]:$m.find(Xe=>!de.has(Xe))||"temperate";de.add(fe),me.biome=fe}}f.bake((O.nameSeed||1)+1),a.background=f.background,a.environment=f.env;for(const H of C)H.dispose();C.length=0,_.clear(),e.innerHTML="",ae.length=0,M=O.bodies.map(H=>{const K=new jn;let j,de=null,me=null,Te=null,fe=null,Xe=null,rt=!1,Mt=!1;if(H.kind==="station")j=qh(H.size*np,H.id%Xh,U.uT);else if(H.kind==="asteroid")j=Kh(H);else if(H.visitor){j=Kh(H),me=new jn;const ot=Zt=>new Dc(new la({map:Fu,color:Zt,transparent:!0,depthWrite:!1,blending:Zn,opacity:0}));me.userData.ion=Array.from({length:26},()=>ot("#9fd0ff")),me.userData.dust=Array.from({length:22},()=>ot("#fff0cf")),me.userData.coma=ot("#e8f6ff");for(const Zt of[...me.userData.ion,...me.userData.dust,me.userData.coma])me.add(Zt);K.add(me),de=qh(.7,0,U.uT),Yh(de,[{type:"shipyard",level:1,done:!0},{type:"habitat",level:1,done:!0}],null),de.userData.set("#3a3d44",.8,!1),K.add(de)}else{const ot=IS(H),Zt=L(H,ot);C.push(...Zt.rts),Xe=Zt.rts[0],rt=ot.kind===0&&ot.type!==1,Mt=!!ot.atmo;const wn=.2+H.hue*.3;if(H.giant&&H.hue>.4){Te=FS(H),Te.rotation.x=Math.PI/2;const Hn=new jn;Hn.rotation.z=wn,Hn.add(Te),K.add(Hn)}if(j=new Vt(E(H.size,ot.kind===0||ot.kind===3?1:0),US(H,ot,Zt,Te&&Te.userData.ring)),j.rotation.order="ZYX",j.rotation.z=wn,ot.atmo&&(fe=NS(H,ot,s),K.add(fe)),ot.clouds){const Hn=new Vt(E(H.size*1.008,1),kS(Zt));Hn.name="clouds",j.add(Hn)}}K.add(j);const Gt=new jn;j.add(Gt);const mt=sp(!1);mt.scale.setScalar(H.size*3.2),K.add(mt),_.add(K);const Qt=HS(H),ht=new jn;ht.add(Qt),_.add(ht);const St=document.createElement("div");St.className="lbl",e.appendChild(St),H.visitor&&(ht.visible=!1);let jt=null;if(H.perk&&yn[H.perk].range){const ot=yn[H.perk].range*Z,Zt=[];for(let wn=0;wn<=96;wn++){const Hn=wn/96*Math.PI*2;Zt.push(new D(Math.cos(Hn)*ot,0,Math.sin(Hn)*ot))}jt=new Ko(new Wt().setFromPoints(Zt),new pc({color:"#c7a6ff",transparent:!0,opacity:.55,dashSize:2.5,gapSize:2})),jt.computeLineDistances(),jt.visible=!1,_.add(jt)}return{b:H,g:K,body:j,surface:Gt,mark:mt,lineHolder:ht,line:Qt,label:St,shown:"",owner:null,pulse:0,sig:null,structs:null,hulk:de,tail:me,reach:jt,ring:Te,atmo:fe,alb:Xe,ocean:rt,air:Mt,lods:[],ringN:new D,occ:[],ports:H.kind==="station"?Om(H.id%Xh):null}});for(const H of M)if(H.perk={lods:[],lit:[]},!(!H.b.perk||H.b.kind==="station"))for(const{m:K,orbital:j}of _S(H.b,U.uT,xn(H))){(j?H.g:H.body).add(K),K.userData.lod&&H.perk.lods.push(K.userData.lod);const de=[];K.traverse(me=>{me.userData.set&&(de.push(me),me.layers.enable(hl))}),H.perk.lit.push({g:K,lit:de,sun:1})}T&&(T.group.removeFromParent(),T.dispose(),T=null);const re=O.bodies.filter(H=>H.kind==="asteroid");if(re.length){const H=re[0],K=Math.min(...re.map(de=>de.r))-2,j=Math.max(...re.map(de=>de.r))+2;T=CS(K,j,de=>H.period*Math.pow(de/H.r,1.5),s,U.uT),_.add(T.group)}for(const H of M){const K=H.b;if(K.kind!=="planet"&&K.kind!=="moon")continue;const j=K.kind==="planet"?O.bodies.filter(de=>de.parent===K.id&&de.kind==="moon"):O.bodies.filter(de=>de.id===K.parent||de.parent===K.parent&&de.kind==="moon"&&de.id!==K.id);H.occ=j.slice(0,4).map(de=>de.id)}if(y&&(y.removeFromParent(),y=null),O.stars&&O.stars[1]){const H=[];for(let K=0;K<=256;K++){const j=so(O,1,K/256*O.stars[1].period);H.push(new D(j.x,j.y,j.z))}y=new Ko(new Wt().setFromPoints(H),new pc({color:"#ffb070",transparent:!0,opacity:.35,dashSize:4,gapSize:4})),y.computeLineDistances(),_.add(y)}}const U=qb(a,Sc),B=U.geometries;let V=0;const ne=new Wt,q=64,Y=new Float32Array(200*q*6),oe=new Float32Array(200*q*6);ne.setAttribute("position",new mn(Y,3)),ne.setAttribute("color",new mn(oe,3));const De=new Sx(ne,new zf({vertexColors:!0,transparent:!0,opacity:.45}));De.frustumCulled=!1,a.add(De);const Me=[];function st(O){if(!Me[O]){const Z=sp(!0);a.add(Z),Me[O]=Z}return Me[O]}const Qe=new Wt().setFromPoints(Array.from({length:129},()=>new D)),Ce=new Ko(Qe,new pc({color:Xm[0],dashSize:1.5,gapSize:1}));Ce.frustumCulled=!1,a.add(Ce);const te=RS(a,s==="high"?4096:2048),ue=240,we=[],dt=new pt("#ffffff");function Ge(O,Z,re,H=0,K=!1){let j=we.find(de=>!de.live);if(!j){if(we.length>=ue)return;j={a:new D,b:new D,c:new pt},we.push(j)}if(j.live=!0,j.a.copy(O),j.b.copy(Z),j.color=re,j.c.set(re).lerp(dt,[.45,.6,.85][H]),j.rail=H===2,j.age=0,(j.drift??(j.drift=new D)).copy(te.drift),j.t0=nr,j.life=H===2?.05:Rt.clamp(O.distanceTo(Z)/(H?24:14),.1,.7),j.pd=K&&Math.random()<.3,j.pd&&j.b.lerpVectors(O,Z,.7+Math.random()*.2),H===2)te.beam(j.a,j.b,j.c,.35);else if(H===1)te.bolt(j.a,j.b,j.c,j.life,.5,.035);else for(let de=0;de<4;de++)et.copy(j.b).add(Ze.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.25)),te.bolt(j.a,et,j.c,j.life,.22,.018,de*.045)}const ye=new D,cn=new D,et=new D,Ze=new D,Lt=new D,lt=new D,Tt=new D,un=new D,Sn=new D(0,1,0),dn=[1.22/(1*3/Math.PI),1.17/(.879*3/Math.PI),1.08/(.723*3/Math.PI)].map(O=>O*.9);function xn(O){if(O.env)return O.env;const Z={body:O.body,giant:!!O.b.giant,air:O.air};if(O.alb&&!O.b.giant&&(Z.tex=O.alb.texture,Z.groundK=dn,O.ocean)){const re=O.alb.width,H=O.alb.height;let K=null;Z.wet=j=>{K||(K=new Uint8Array(re*H*4),i.readRenderTargetPixels(O.alb,0,0,re,H,K));const de=(Math.atan2(j.z,-j.x)/(2*Math.PI)%1+1)%1,me=1-Math.acos(Rt.clamp(j.y,-1,1))/Math.PI;return K[(Math.min(H-1,Math.floor(me*H))*re+Math.min(re-1,Math.floor(de*re)))*4+3]<130}}return O.env=Z}const W=O=>window.innerHeight/(2*Math.tan(Rt.degToRad(l.fov/2))*l.position.distanceTo(O)),kt=(O,Z)=>{let re=Math.imul(O^2654435769,2246822507)^Math.imul(Z+1663821227,3266489909);return re^=re>>>15,re=Math.imul(re,739982445),((re^re>>>12)>>>0)/4294967296};function Ot(){const O=window.innerWidth,Z=window.innerHeight;i.setSize(Math.round(O*o),Math.round(Z*o),!1),n.style.width=O+"px",n.style.height=Z+"px",u.setSize(O,Z,o),qm.value=o,Ym.value.set(O,Z),l.aspect=O/Z,l.updateProjectionMatrix()}const F=new D;function A(O){F.copy(p.position).project(l);let Z=F.z<1&&Math.abs(F.x)<1.1&&Math.abs(F.y)<1.1?1:0;if(Z){const H=l.position;Ze.copy(p.position).sub(H);const K=Ze.length();Ze.divideScalar(K);for(const j of M){if(!j.g.visible)continue;et.copy(j.g.position).sub(H);const de=et.dot(Ze);if(de<0||de>K)continue;if(Math.sqrt(Math.max(0,et.lengthSq()-de*de))<j.b.size){Z=0;break}}Z*=Rt.clamp((1.1-Math.max(Math.abs(F.x),Math.abs(F.y)))*4,0,1)}const re=u.flare;re.vis+=(Z*.9-re.vis)*Math.min(1,O*8+.05),re.pos.set(F.x*.5+.5,F.y*.5+.5)}const J=[],ae=[];function he(O){if(!ae[O]){const Z=document.createElement("div");Z.className="flbl",e.appendChild(Z),ae[O]=Z}return ae[O]}function Ae(O){for(const Z of M){if(Z.b.kind==="station")continue;const re=J[Z.b.id];if(!re)continue;const H=Z.b.size*1.25+.25,K=H*2,j=O.x-re.x,de=O.y-re.y,me=O.z-re.z,Te=j*j+de*de+me*me;if(Te>=K*K)continue;const fe=Math.sqrt(Te);if(fe<1e-6){O.x=re.x+H;continue}const Xe=(fe+(K-fe)**2*H/(K*K))/fe;O.set(re.x+j*Xe,re.y+de*Xe,re.z+me*Xe)}}function Re(O,Z,re,H,K,j,de,me){const Te=J[O.id],fe=kt(K,Z),Xe=re*(1+kt(Z,K)*.15),rt=O.gm?Math.sign(H)*Math.sqrt(O.gm/(Xe*Xe*Xe)):H*(.8+fe*.4),Mt=fe*Math.PI*2+j*rt;return me&&me.set(-Math.sin(Mt),0,Math.cos(Mt)).multiplyScalar(Math.sign(H)||1),de.set(Te.x+Math.cos(Mt)*Xe,Te.y+Math.sin(Mt*.7+fe)*Xe*.15,Te.z+Math.sin(Mt)*Xe),O.kind==="station"&&H>0&&Ue(O,Z,j,de,me),de}const pe=new D,ve=new D;function Ue(O,Z,re,H,K){const j=kt(Z,O.id*7+3);if(j<.45)return;const de=120+j*80,me=(re/de+kt(O.id,Z*5))%1,Te=Rt.smootherstep(me,.5,.57)*(1-Rt.smootherstep(me,.75,.82));if(Te<=0)return;const fe=M[O.id]?.b===O?M[O.id]:M.find(Gt=>Gt.b===O);if(!fe||!fe.ports)return;const Xe=fe.ports[Z%fe.ports.length];fe.body.updateMatrixWorld();const rt=O.size*np;pe.set(Xe.p[0]*rt,Xe.p[1]*rt,Xe.p[2]*rt).applyMatrix4(fe.body.matrixWorld),ve.set(Xe.n[0],Xe.n[1],Xe.n[2]).transformDirection(fe.body.matrixWorld);const Mt=Qr*.7+Math.floor(Z/fe.ports.length)*Qr*1.6;pe.addScaledVector(ve,Mt+(1-Te)*(1-Te)*1.2),H.lerp(pe,Te),K&&K.lerp(ve.negate(),Te).normalize()}const Ye=new D,Pe=new D,Le=new D,We=new D,je=new D,xt=new D,X=O=>O.size*3+4;function ke(O,Z){const re=`${Z?"d":"a"}${O.t0}:${O.T}`;if(O._blend&&O._blend.key===re)return O._blend.w;const H=Ie.bodies[Z?O.from:O.to];let K=0;const j=de=>{const me=Z?O.t0+de:O.t0+O.T-de,Te=Nn(O,me),fe=vt(Ie,H,me);return Math.hypot(Te.x-fe.x,Te.y-fe.y,Te.z-fe.z)};if(H&&j(0)<H.size*2+1){let de=0,me=O.T*.45;if(j(me)>=X(H))for(let Te=0;Te<14;Te++){const fe=(de+me)/2;j(fe)>=X(H)?me=fe:de=fe}K=Math.min(25,Math.max(4,me))}return Object.defineProperty(O,"_blend",{value:{key:re,w:K},enumerable:!1,configurable:!0,writable:!0}),K}function ge(O,Z,re,H,K,j,de){return H||Z.owner===O.owner?Re(Z,(H?re:Z.ships+re)%20,Z.size*1.8+.4,ku,Z.id*13,K,j,de):Re(Z,re%20,Z.size*2.4+.8,Nu,Z.id*29+O.owner,K,j,de)}function Ne(O,Z,re,H,K){if(O.probe)return 1;const j=re<O.T-re,de=ke(O,j),me=j?re:O.T-re;if(me>=de)return 1;const Te=Ie.bodies[j?O.from:O.to],fe=Te&&J[Te.id];if(!fe)return 1;const Xe=Rt.smootherstep(me,0,de);ge(O,Te,Z,j,K,Ye,Le),Ye.sub(fe),Pe.set(ye.x-fe.x,ye.y-fe.y,ye.z-fe.z),je.set(H.x-fe.x,H.y-fe.y,H.z-fe.z).addScaledVector(Tt,j?X(Te):-X(Te)),je.lengthSq()<1e-8&&je.copy(Tt),je.normalize(),ge(O,Te,Z,j,j?O.t0:O.t0+O.T,We),We.sub(fe).addScaledVector(je,-We.dot(je)),We.lengthSq()<1e-8&&We.crossVectors(je,Sn),We.lengthSq()<1e-8&&We.set(1,0,0),We.normalize(),xt.crossVectors(je,We);let rt=Math.atan2(Ye.dot(We),Ye.dot(je));rt<-Math.PI/2&&(rt+=Math.PI*2);const Mt=Math.hypot(Ye.dot(je),Ye.dot(We)),Gt=Ye.dot(xt),mt=Pe.dot(je);Pe.addScaledVector(je,-mt);const Qt=rt*(1-Xe),ht=Te.size*1.3+.4,St=ht*.3;let jt=Mt+(mt-Mt)*Xe;const ot=(jt+ht+Math.sqrt((jt-ht)**2+St*St))/2;return jt+=(ot-jt)*(1-Xe)*Rt.smoothstep(Xe,0,.05),Pe.multiplyScalar(Xe).addScaledVector(je,Math.cos(Qt)*jt).addScaledVector(We,Math.sin(Qt)*jt).addScaledVector(xt,Gt*(1-Xe)),ye.set(fe.x+Pe.x,fe.y+Pe.y,fe.z+Pe.z),Xe}let Ie=null;function _e(O){let Z=1;const re=p.position.x,H=p.position.y,K=p.position.z;let j=re-O.x,de=H-O.y,me=K-O.z;const Te=Math.hypot(j,de,me)||1;j/=Te,de/=Te,me/=Te;for(const fe of M){if(fe.b.kind!=="planet"&&fe.b.kind!=="moon")continue;const Xe=J[fe.b.id],rt=Xe.x-O.x,Mt=Xe.y-O.y,Gt=Xe.z-O.z,mt=rt*j+Mt*de+Gt*me;if(mt<=0||mt>Te)continue;const Qt=rt-j*mt,ht=Mt-de*mt,St=Gt-me*mt,jt=Math.sqrt(Qt*Qt+ht*ht+St*St),ot=fe.b.size,Zt=ot*.08+mt*.012;jt<ot+Zt&&(Z*=Rt.smoothstep(jt,ot-Zt,ot+Zt))}return Z}const nt=new Map,Je=new D,Yt=new D,zt=new D,Dn=new D;function Ti(O,Z,re,H,K,j,de){let me=nt.get(O);if(!me){nt.set(O,{n:re.clone(),w:new D,a:new D,t:K,seen:j});return}me.seen=j;const Te=K-me.t;if(Te<=1e-4){Te<-1&&(me.t=K);return}if(Te>2){me.n.copy(re),me.w.set(0,0,0),me.a.set(0,0,0),me.t=K;return}Je.crossVectors(me.n,re).divideScalar(Te);const fe=1-Math.exp(-Te*6);if(Yt.copy(Je).sub(me.w).divideScalar(Te),me.w.lerp(Je,fe),me.a.lerp(Yt,fe),me.n.copy(re),me.t=K,de<8)return;const Xe=me.a.length(),rt=5+kt(O,17)*5,Mt=j*rt+kt(O,23)*9,Gt=Math.floor(Mt),mt=kt(O*7+Gt,31),Qt=kt(Gt,O*3+1),ht=Mt-Gt;let St;if(Xe>=.04){St=Math.min(1,(Xe-.04)*3);const Ir=.45+.35*St;if(mt>Ir||ht>.35+Qt*.6)return}else{if(mt>.05||ht>.3)return;St=.15+Qt*.2,Yt.set(Qt-.5,kt(Gt,O)-.5,kt(O,Gt*5)-.5)}const jt=H*.32;if(Dn.crossVectors(Xe>=.04?me.a:Yt,re),Dn.lengthSq()<1e-10)return;Dn.normalize();const ot=H*(.06+.1*St)*(.75+Qt*.5),Zt=H*.05,wn=(.35+.5*St)*(.8+mt*.4),Hn=Qt<.18?1:Qt>.86?2:3;Hn&1&&(zt.copy(Z).addScaledVector(re,jt).addScaledVector(Dn,-H*.06),U.jet(zt,lt.copy(Dn).negate(),ot,Zt,wn,O)),Hn&2&&(zt.copy(Z).addScaledVector(re,-jt*.85).addScaledVector(Dn,H*.06),U.jet(zt,Dn,ot*(.85+mt*.3),Zt,wn,O+.5))}function Da(O,Z,re,H,K,j,de=j,me=1,Te=!1,fe=1,Xe=null){if(V>=Sc)return;V++;const rt=Te?U.probeType+Math.floor(kt(de,29)*U.probes):Math.floor(kt(de,3)*U.hulls),Mt=.9+kt(de,5)*.25,Gt=Te?[.3,.3,.3]:[Qr,Qr,Qr*Mt];Ae(O);const mt=W(O),Qt=.6*Qr/.8*mt,ht=1-Rt.smoothstep(Qt,3,14),St=H&&me>=.2,jt=ht<=0?null:[(St?6.5:5)*(Te?.8:1),(St?.85:.7)*fe*ht,St];U.add(rt,O,Z,Gt,re,.82+kt(de,11)*.28,de,H,me*(.8+Math.sin(K*40+j)*.05)*(Te?.35:1),jt,.6*mt,_e(O)),Xe!==null&&!Te&&Ti(de,O,Z,Gt[2],Xe,K,Qt)}const tr=new Map,Es=new fl({color:"#b9bec8",metalness:.5,roughness:.5}),As=new fl({color:"#4a505c",metalness:.4,roughness:.7});function Hl(O){const Z=new jn,re=(K,j,de,me=Es)=>new Vt(new ut(K,j,de),me);if(O==="signal"){Z.add(re(.12,.12,.18));const K=new Vt(new Fn(.14,12,6,0,Math.PI*2,0,Math.PI/3),Es);K.position.z=.12,K.rotation.x=-Math.PI/2,Z.add(K,re(.5,.004,.08,As))}else if(O==="wreck"){for(let K=0;K<4;K++){const j=re(.12+K*.03,.1,.22-K*.03,K%2?As:Es);j.position.set((K-1.5)*.18,Math.sin(K*2)*.08,Math.cos(K*3)*.1),j.rotation.set(K,K*2,K*.5),Z.add(j)}for(let K=0;K<6;K++){const j=new Dc(new la({map:Fu,color:"#cfe8ff",blending:Zn,depthWrite:!1,transparent:!0,opacity:.7}));j.position.set(Math.sin(K*5)*.35,Math.cos(K*3)*.2,Math.sin(K*7)*.3),j.scale.setScalar(.12),Z.add(j)}}else if(O==="convoy")for(let K=0;K<3;K++){const j=new Vt(B[2],Es);j.position.set((K-1)*.25,0,-K*.5),j.scale.setScalar(.8),Z.add(j)}else{for(let K=0;K<6;K++){const j=re(.12,.1,.12,K%3?Es:As);j.position.set((K%3-1)*.14,Math.floor(K/3)*.11,0),Z.add(j)}Z.add(re(.46,.02,.16,As))}const H=new Dc(new la({map:Fu,color:"#c7a6ff",blending:Zn,depthWrite:!1,transparent:!0}));return a.add(Z,H),{g:Z,glint:H,kind:O}}function Ua(O,Z,re){const H=new Set;for(const K of O.happenings||[]){const j=O.bodies[K.at];if(j.visitor||!J[j.id])continue;H.add(K.id),tr.has(K.id)||tr.set(K.id,Hl(K.kind));const de=tr.get(K.id),me=J[j.id],Te=j.size*2.9+1.2,fe=re*.15+K.id;if(ye.set(me.x+Math.cos(fe)*Te,me.y+.4,me.z+Math.sin(fe)*Te),de.kind==="convoy"){const rt=Rt.clamp((K.starts-Z)/60,0,1),Mt=K.id*2.399;ye.x+=Math.cos(Mt)*rt*70,ye.z+=Math.sin(Mt)*rt*70,et.set(-Math.cos(Mt),0,-Math.sin(Mt)),rt<=0&&et.set(-Math.sin(fe),0,Math.cos(fe)),de.g.lookAt(ye.clone().add(et))}else de.g.rotation.x+=.004,de.g.rotation.y+=de.kind==="wreck"?.01:.003;de.g.position.copy(ye),de.g.visible=!0;const Xe=W(de.g.position);de.glint.position.copy(ye),de.glint.scale.setScalar((de.kind==="signal"?.6+.4*Math.sin(re*5):1)*9/Xe),de.glint.material.opacity=Xe>80?.3:.9}for(const[K,j]of tr)H.has(K)||(j.g.removeFromParent(),j.glint.removeFromParent(),tr.delete(K))}let nr=0,Ni=1;function Ao(O,Z,re,H){Ie=O;const K=H-nr;K>0&&K<.5&&(Ni+=(Rt.clamp(re/K,0,20)-Ni)*Math.min(1,K*4)),nr=H;const j=O.time,de=O.stars||[{r:0,period:1,phase:0,size:1}];de.slice(0,2).forEach((k,Q)=>{const $e=Q?b:p,rn=so(O,Q,j);$e.visible=!0,$e.position.set(rn.x,rn.y,rn.z),$e.scale.setScalar(k.size)}),de.length<2&&(b.visible=!1),Li.pos.value[0].copy(p.position),Li.pos.value[1].copy(b.position),b.visible?Li.col.value[1].set(1.25,.95,.72):Li.col.value[1].set(0,0,0),m.update(H),jm.value=H,te.update(H),T&&T.update(j),b.visible&&v.update(H+50),f.update(H,o);const me=(k,Q)=>k>=0&&O.tech?O.tech[k][Q]:0;for(const k of M){const Q=vt(O,k.b,j);J[k.b.id]=Q}let Te=0;for(const k of M)uo(O,k.b,j)&&(Te=Math.max(Te,Math.hypot(J[k.b.id].x,J[k.b.id].z)));Te=Te*1.2+20;const fe=Math.hypot(w.target.x,w.target.z);if(fe>Te&&(w.target.x*=Te/fe,w.target.z*=Te/fe),w.target.y=Rt.clamp(w.target.y,-Te*.3,Te*.3),w.fleet!=null){const k=O.fleets.find(Q=>Q.id===w.fleet);if(!k)w.fleet=null;else{const Q=Nn(k,j);w.target.lerp(ye.set(Q.x,Q.y,Q.z),Math.min(1,re*6))}}if(w.follow===null&&w.fleet==null&&(w.target.y*=1-Math.min(1,re*2)),w.follow!==null){const k=J[w.follow];w.target.lerp(ye.set(k.x,k.y,k.z),Math.min(1,re*6))}Z.dragging||(w.az+=w.vaz,w.pol+=w.vpol,w.vaz*=.92,w.vpol*=.92),w.goalDist&&(w.dist+=(w.goalDist-w.dist)*Math.min(1,re*4),Math.abs(w.goalDist-w.dist)<.01*w.dist&&(w.goalDist=null)),w.pol=Rt.clamp(w.pol,.15,Math.PI-.15);const Xe=w.follow!==null&&O.bodies[w.follow]?O.bodies[w.follow].size*1.08+.1:1.2;w.minDist+=(Xe-w.minDist)*Math.min(1,re*3),w.dist=Rt.clamp(w.dist,w.minDist,w.maxDist),l.position.setFromSphericalCoords(w.dist,w.pol,w.az).add(w.target),l.lookAt(w.target);const rt=Rt.clamp(w.dist*.02,.01,12);Math.abs(rt-l.near)>l.near*.05&&(l.near=rt,l.far=S,l.updateProjectionMatrix()),l.updateMatrixWorld();const Mt=window.innerWidth,Gt=window.innerHeight;V=0,U.begin(H,o);const mt=Z.vis,Qt=k=>!mt||mt.bodies.has(k.id),ht=k=>!mt||k.owner===mt.owner||mt.seesFleet(k,Nn(k,j)),St=k=>!mt||k.owner===mt.owner||mt.intel>=2&&ht(k),jt=k=>!mt||k.owner===mt.owner||mt.intel>=3&&ht(k)||mt.warn&&O.bodies[k.to].owner===mt.owner,ot=k=>!mt||k.owner===mt.owner||mt.intel>=1,Zt=new Map;for(const k of O.fleets){if(k.probe)continue;const Q=O.bodies[k.to];if(k.owner===Q.owner?k.owner!==(mt?mt.owner:0):!jt(k))continue;const $e=k.T-(j-k.t0),rn=`${k.to}:${k.owner}`,bn=Zt.get(rn)||{to:k.to,owner:k.owner,n:0,eta:1/0,sized:ot(k)};bn.n+=k.n,bn.eta=Math.min(bn.eta,$e),Zt.set(rn,bn)}const wn=new Map;for(const k of Zt.values())wn.has(k.to)||wn.set(k.to,[]),wn.get(k.to).push(k);const Hn=new Set,Ir=new Map;for(const k of M){const Q=k.b;if(Q.parent===null||Z.selected===Q.id||Z.target===Q.id||Q.sieges.length||O.fleets.some(rn=>rn.to===Q.id&&rn.owner!==Q.owner))continue;const $e=J[Q.parent];ye.copy(k.g.position).project(l),et.set($e.x,$e.y,$e.z).project(l),!(Math.hypot((ye.x-et.x)*Mt,(ye.y-et.y)*Gt)/2>=46)&&(Hn.add(Q.id),Q.owner!==Ve&&Q.ships>0&&Qt(Q)&&(Ir.has(Q.parent)||Ir.set(Q.parent,[]),Ir.get(Q.parent).push(`<span class="kid" style="color:${wt(Q.owner)}">+${Q.ships}</span>`)))}for(const k of M){const{b:Q}=k,$e=J[Q.id];if(k.g.position.set($e.x,$e.y,$e.z),k.line.material.uniforms&&(k.line.material.uniforms.uTh.value=Q.phase+2*Math.PI*j/Q.period),Q.parent!==null){const be=J[Q.parent];k.lineHolder.position.set(be.x,be.y,be.z)}else if(Q.star){const be=so(O,Q.star,j);k.lineHolder.position.set(be.x,be.y,be.z)}k.reach&&(k.reach.position.set($e.x,0,$e.z),k.reach.visible=Z.selected===Q.id||Z.peek===Q.id||Z.target===Q.id);{const ct=(Z.selected===Q.id||Z.peek===Q.id||Z.target===Q.id)&&Qt(Q)&&Q.structures.some(at=>at.type==="bureau"&&(at.left<=0||at.next)&&!at.scrap);if(ct&&!k.bureau){const at=[];for(let Ct=0;Ct<=96;Ct++){const Jt=Ct/96*Math.PI*2;at.push(new D(Math.cos(Jt),0,Math.sin(Jt)))}k.bureau=new Ko(new Wt().setFromPoints(at),new pc({color:"#7fd1c8",transparent:!0,opacity:.6,dashSize:.03,gapSize:.025})),k.bureau.computeLineDistances(),_.add(k.bureau)}k.bureau&&(k.bureau.visible=ct,ct&&(k.bureau.position.set($e.x,0,$e.z),k.bureau.scale.setScalar(Cp(O,Q))))}if(Q.visitor){const be=uo(O,Q,j);if(k.g.visible=be,!be){k.label.style.visibility="hidden";continue}const ct=O.visit&&O.visit.kind==="comet";if(k.body.visible=k.tail.visible=ct,k.hulk.visible=!ct,ct){const at=Math.max(1,Math.hypot($e.x,$e.y,$e.z)),Ct=Rt.clamp(2600/at,8,60),Jt=Rt.clamp(120/at,.55,1),fn=et.set($e.x,$e.y,$e.z).normalize(),An=vt(O,Q,j+2),Ls=new D($e.x-An.x,$e.y-An.y,$e.z-An.z).normalize(),{ion:Dr,dust:_0,coma:Yl}=k.tail.userData;Dr.forEach((or,jl)=>{const us=(jl+1)/Dr.length;or.position.copy(fn).multiplyScalar(us*Ct),or.scale.setScalar(.8+us*Ct*.12),or.material.opacity=.5*Jt*(1-us)**1.3}),_0.forEach((or,jl)=>{const us=(jl+1)/_0.length;or.position.copy(fn).multiplyScalar(us*Ct*.75).addScaledVector(Ls,us*us*Ct*.35),or.scale.setScalar(1+us*Ct*.18),or.material.opacity=.38*Jt*(1-us)**1.1}),Yl.position.set(0,0,0),Yl.scale.setScalar(2.2+Jt*3),Yl.material.opacity=.35+Jt*.4}else k.hulk.rotation.y+=re*.08}if(Q.kind==="station"){k.body.rotation.z+=re*(k.body.userData.spin??.5);const be=k.body.userData.rotor;be&&(be.rotation.z+=re*be.userData.spin),k.body.userData.set(Q.owner===Ve?"#6a7080":wt(Q.owner),_e($e),Q.owner!==Ve)}else if(Q.kind==="asteroid")k.body.rotation.x+=re*.3,k.body.rotation.y+=re*.2;else{k.body.rotation.y+=re*.05;const be=k.body.getObjectByName("clouds");if(be){be.rotation.y+=re*.012;const at=be.material.uniforms.uHoles.value;for(let Ct=0;Ct<at.length;Ct++){const Jt=Ct<(k.holes?.length||0)?k.holes[Ct]:k.megaHole&&Ct===(k.holes?.length||0)?k.megaHole:null;if(!Jt||!k.surface.visible){at[Ct].w=2;continue}ye.copy(Jt.dir).applyAxisAngle(BS,-be.rotation.y),at[Ct].set(ye.x,ye.y,ye.z,Jt.cos)}}const ct=k.body.material.uniforms;ct&&(ct.uT.value=H,be&&(ct.uCloudShift.value=-be.rotation.y/(Math.PI*2)),ct.uCenter.value.set($e.x,$e.y,$e.z),k.occ.forEach((at,Ct)=>{const Jt=J[at];ct.uOcc.value[Ct].set(Jt.x,Jt.y,Jt.z,O.bodies[at].size)}),be&&(be.material.uniforms.uOcc.value=ct.uOcc.value),k.atmo&&(k.atmo.material.uniforms.uCenter.value.set($e.x,$e.y,$e.z),k.atmo.material.uniforms.uOcc.value=ct.uOcc.value),k.ring&&(k.ring.updateMatrixWorld(!0),ct.uRingN.value.set(0,0,1).transformDirection(k.ring.matrixWorld),ct.uRingIn.value=k.ring.userData.ring.inner,ct.uRingOut.value=k.ring.userData.ring.outer,k.ring.material.uniforms.uCenter.value.set($e.x,$e.y,$e.z)))}const rn=wt(Q.owner);k.owner!==Q.owner&&(k.owner!==null&&(k.pulse=1),k.owner=Q.owner,k.body.material&&k.body.material.uniforms&&k.body.material.uniforms.uCity&&(k.body.material.uniforms.uCity.value=Q.owner===Ve?0:1),k.mark.material.uniforms.uColor.value.set(rn),k.label.style.color=rn),k.pulse=Math.max(0,k.pulse-re);const bn=Q.owner+":"+Q.structures.map(be=>be.type+be.level+(be.left>0&&!be.next||be.scrap?"~":"")).join();if(bn!==k.sig){k.sig=bn;for(const be of[k.structs,k.surface])be?.traverse(ct=>{ct.isMesh&&ct.geometry.dispose()});k.structs&&k.structs.removeFromParent(),k.surface.clear(),k.structs=new jn,k.wips=[],k.holes=[],k.spins=[],k.lods=[],k.lit=[],Q.kind==="station"?(Yh(k.body,Q.structures.map(be=>({type:be.type,level:be.level,done:!be.scrap&&(be.left<=0||!!be.next)})),Ou),k.wips.push(...k.body.userData.station.wip)):Q.structures.forEach((be,ct)=>{const at=$d(be.type,Q,ct,!be.scrap&&(be.left<=0||!!be.next),be.level,U.uT,Ou,Q.owner===Ve?"#6a7080":wt(Q.owner),xn(k));at.userData.wip&&k.wips.push(at.userData.wip),at.userData.lod&&k.lods.push(at.userData.lod);const Ct=[];at.traverse(Jt=>{Jt.userData.set&&(Ct.push(Jt),Jt.layers.enable(hl))}),Ct.length&&k.lit.push({g:at,lit:Ct,sun:1}),be.type!=="shipyard"&&be.type!=="skimmer"&&k.holes.push({dir:at.position.clone().normalize(),cos:Math.cos(Math.min(.6,(at.userData.lod?at.userData.lod.r*1.4:nS(Q)*1.15)/Q.size))}),at.userData.spin&&k.spins.push(...at.userData.spin),(be.type==="shipyard"||be.type==="skimmer"?k.structs:k.surface).add(at)}),k.g.add(k.structs)}if(k.wips){const be=Q.slips||[];k.wips.forEach((ct,at)=>ct.forEach((Ct,Jt)=>{Ct.visible=at<be.length&&be[at]>=Jt/3}));for(const ct of k.spins)ct.mesh.rotation[ct.axis]+=re*ct.rate}const $n=Z.selected===Q.id,sr=Z.target===Q.id,Cs=W(k.g.position);for(const be of[k.lit,k.perk.lit])if(be)for(const ct of be){const at=_e(ct.g.getWorldPosition(cn));if(Math.abs(at-ct.sun)>.01){ct.sun=at;for(const Ct of ct.lit)Ct.userData.set(Ct.userData.paint,at,!0)}}for(const be of[k.lods,k.perk.lods])for(const ct of be){const at=ct.r*Cs;ct.fine.visible=at>ip,ct.coarse.visible=at<=ip&&at>1.5;for(const Ct of ct.extra)Ct.visible=at>1.5}const Ga=Q.parent!==null,Rs=Math.max(Q.size*(Ga?2:2.4)*Cs,$n||sr?8:Ga?4:5.5);if(k.mark.scale.setScalar(Rs/Cs*(1+k.pulse*.6+($n?Math.sin(H*5)*.06:0))),k.mark.material.uniforms.uWidth.value=Rt.clamp(Rs/12,1,1.6),k.mark.material.uniforms.uOpacity.value=$n?1:sr?.9:Q.owner===Ve?.25:.7,Q.size*Cs>70&&(k.mark.material.uniforms.uOpacity.value*=.25),Q.parent!==null&&!$n&&!sr){const be=J[Q.parent];ye.copy(k.g.position).project(l),et.set(be.x,be.y,be.z).project(l);const ct=Math.hypot((ye.x-et.x)*Mt,(ye.y-et.y)*Gt)/2;k.mark.material.uniforms.uOpacity.value*=Rt.smoothstep(ct,30,60)}const gn=Qt(Q)&&Q.ships>0?Ln(Q.vet):0;k.mark.material.uniforms.uLvl.value=gn,$n||sr?k.mark.material.uniforms.uColor.value.set($n?"#ffffff":rn):k.mark.material.uniforms.uColor.value.set(rn);const on=Qt(Q);if(k.structs&&(k.structs.visible=on),k.surface.visible=on,Q.kind==="station")for(const be of k.body.userData.station.parts)be.visible=on;const qn=on&&Q.sieges.length>0,_n=[],Un=[],Fi=(be,ct,at,Ct,Jt,fn)=>{for(let An=0;An<be;An++){if(V>=Sc)return;Re(Q,An,at,Ct,Jt,j,ye,Tt),Da(ye,Tt,wt(ct),!1,H,An,Jt*131+An,1,!1,.6),fn&&fn.push({p:ye.clone(),owner:ct})}};on&&Fi(Math.min(Q.ships,20),Q.owner,Q.size*1.8+.4,ku,Q.id*13,qn?_n:null);for(const be of on?Q.sieges:[])Fi(Math.min(be.n,20),be.owner,Q.size*2.4+.8,Nu,Q.id*29+be.owner,Un);if(qn){const be=vt(O,Q,j+.5),ct=vt(O,Q,j-.5);te.drift.set(be.x-ct.x,be.y-ct.y,be.z-ct.z).multiplyScalar(Ni);for(let fn=0;fn<Math.ceil(Q.guns);fn++){const An=kt(Q.id,fn*2)*Math.PI*2+H*.05,Ls=(kt(fn*2+1,Q.id)-.5)*1.6,Dr=Q.size*1.02;_n.push({p:new D($e.x+Math.cos(An)*Math.cos(Ls)*Dr,$e.y+Math.sin(Ls)*Dr,$e.z+Math.sin(An)*Math.cos(Ls)*Dr),owner:Q.owner})}const at=Un.length+_n.length;let Ct=at*re*1.6;for(;Ct>0&&Un.length&&_n.length;){if(Math.random()<Ct){const fn=Math.random()<Un.length/at,An=(fn?Un:_n)[Math.random()*(fn?Un:_n).length|0],Ls=(fn?_n:Un)[Math.random()*(fn?_n:Un).length|0];Ge(An.p,Ls.p,wt(An.owner),Math.min(2,me(An.owner,"weapons")),me(Ls.owner,"armour")>=2)}Ct-=1}for(let fn=0;fn<Math.min(3,Q.lostDef||0);fn++)Q.ships>0||!_n.length?Re(Q,Q.ships+fn,Q.size*1.8+.4,ku,Q.id*13,j,et):et.copy(_n[Math.random()*_n.length|0].p),te.explosion(et,.9+Math.random()*.3);const Jt=Q.sieges[0];for(let fn=0;fn<Math.min(3,Q.lostAtk||0);fn++){if(Jt)Re(Q,Jt.n+fn,Q.size*2.4+.8,Nu,Q.id*29+Jt.owner,j,et);else if(Un.length)et.copy(Un[Math.random()*Un.length|0].p);else break;te.explosion(et,.9+Math.random()*.3)}}te.drift.set(0,0,0),Q.lostDef=Q.lostAtk=0,Q.captured&&(k.pulse=1,Q.captured=!1,te.ring(ye.set($e.x,$e.y,$e.z),wt(Q.owner),Q.size*3.5,1.4));const pi=Q.wonder?1:Q.project?Math.max(.02,Math.min(1,1-Q.project.left/vn[Q.project.key].time)):0,mi=Q.wonder||Q.project&&Q.project.key||null;if(k.megaKey!==mi&&(k.megaKey=mi,k.megaObj&&(k.megaObj.removeFromParent(),k.megaObj=null,k.megaHole=null),mi)){const be=eS(mi,Q,U.uT,Ou);if(be.userData.surface){const ct=Ui(Q.id*31+7),at=new D(ct()-.5,(ct()-.5)*.5,ct()-.5).normalize();be.position.copy(at).multiplyScalar(Q.size*.995),be.quaternion.setFromUnitVectors(new D(0,1,0),at),k.body.add(be),k.megaHole={dir:at,cos:Math.cos(Math.min(.8,1/Q.size))}}else k.g.add(be);k.megaObj=be}k.megaObj&&(tS(k.megaObj,pi,!!Q.wonder),k.megaObj.userData.set(Q.owner===Ve?"#6a7080":wt(Q.owner),_e($e)),k.megaObj.userData.faceSun&&k.megaObj.lookAt(0,0,0),k.megaObj.userData.spinner?.rotateZ(re*.25));const Yn=Q.wonder?0:Math.round(pi*60);if(k.megaStep!==Yn&&(k.megaStep=Yn,k.mega&&(k.g.remove(k.mega),k.mega.geometry.dispose(),k.mega=null),Yn)){const be=Q.size*2.1+.6;k.mega=new Vt(new On(be,Math.max(.05,Q.size*.04),6,96,Yn/60*Math.PI*2),new Ff({color:"#c7a6ff",transparent:!0,opacity:.55,depthWrite:!1})),k.mega.rotation.x=Math.PI/2,k.g.add(k.mega)}if(k.mega&&(k.mega.rotation.z=H*.05),ye.copy(k.g.position).project(l),ye.z>1||Hn.has(Q.id)&&Z.tutWorld!==Q.id){k.label.style.visibility="hidden";continue}const ls=(on?Q.sieges:[]).map(be=>`<span class="atk" style="color:${wt(be.owner)}">${At("attack")}${be.n}</span>`).join(""),Ps=on?Q.owner===Ve?`<i class="guns">${At("guns")}${Math.ceil(Q.guns)}</i>`:Q.ships?`<b>${Q.ships}</b>`:"":'<b class="unk">?</b>',fv=(Ir.get(Q.id)||[]).join(""),hv=(wn.get(Q.id)||[]).map(be=>{const ct=Math.max(0,be.eta),at=be.owner===Q.owner;return`<span class="${at?"rein":"inc"}" style="color:${wt(be.owner)}">${At(at?"reinforce":"incoming")}${be.sized?be.n:"?"} ${Math.floor(ct/60)}:${String(Math.floor(ct%60)).padStart(2,"0")}</span>`}).join(""),pv=(O.happenings||[]).filter(be=>be.at===Q.id).map(be=>{const ct=_s[be.kind],at=j<be.starts,Ct=!at&&be.holder!==Ve,Jt=Math.max(0,at?be.starts-j:Ct?ct.hold-be.held:be.ends-j),fn=Ct?wt(be.holder):"#c7a6ff",An=`${Math.floor(Jt/60)}:${String(Math.floor(Jt%60)).padStart(2,"0")}`;return`<span class="ev" style="color:${fn}">${At(be.kind)} ${at?`in ${An}`:Ct?`hold ${An}`:`gone ${An}`}</span>`}).join(""),mv=(Q.perk?`<i class="perk" title="${yn[Q.perk].name}">${At(Q.perk)}</i> `:"")+(Q.wonder?`<i class="perk">${At(Q.wonder)}</i> `:Q.project?`<i class="perk proj">${At(Q.project.key)}</i> `:""),ql=`<span class="row1">${Ps}${fv}</span>${ls}${hv}${pv}<small>${mv}${Q.name}</small>`;ql!==k.shown&&(k.label.innerHTML=ql,k.shown=ql),k.label.classList.toggle("can",Z.mode==="project"&&Q.owner===(Z.me??0)&&!bo(O,Q,Z.projKey)),k.label.classList.toggle("tut",Z.tutWorld===Q.id),Z.tutWorld===Q.id&&k.label.style.setProperty("--mk",`${Math.round(Rs)}px`),k.label.style.visibility="visible";const gv=(ye.x*.5+.5)*Mt,vv=(-ye.y*.5+.5)*Gt;k.label.style.transform=`translate(${gv}px, ${vv+Rs/2+2}px) translate(-50%, 0)`}Ua(O,j,H);let Ro=0,Xl=0;for(const k of O.fleets){if(!ht(k))continue;const Q=Nn(k,j),$e=wt(k.owner);Tt.set(k.p1.x-k.p0.x,k.p1.y-k.p0.y,k.p1.z-k.p0.z),Tt.lengthSq()<1e-9&&Tt.set(Q.nx,Q.ny,Q.nz),Tt.normalize(),un.crossVectors(Tt,Sn),un.lengthSq()<1e-6&&un.set(1,0,0),un.normalize();const rn=k.probe?1:ot(k)?k.n:Math.min(k.n,3),bn=Math.max(3,Math.ceil(Math.sqrt(rn))),$n=j-k.t0,sr=(gn,on,qn,_n)=>{if(k.probe)return ye.set(on.x,on.y,on.z),1;const Un=Math.floor(gn/bn),Fi=gn%bn-(bn-1)/2,pi=(Rt.smoothstep(Math.min(qn,k.T-qn),0,12)*.5+.5)*zS,mi=kt(k.id,gn),Yn=kt(gn,k.id),rr=kt(k.id+7,gn*3),ls=H*(.3+mi*.4)+Yn*6;return ye.set(on.x,on.y,on.z).addScaledVector(un,(Fi*(.8+rr*.4)+Un%2*.4+(mi-.5)*.6+Math.sin(ls)*.08)*pi).addScaledVector(Sn,((Yn-.5)*.9+Math.cos(ls*.8)*.06)*pi).addScaledVector(Tt,(-Un*(.9+rr*.4)-(Yn-.5)*.7)*pi),Ne(k,gn,qn,on,_n)},Cs=.8,Ga=k.probe?null:Nn(k,j+.5),Rs=!k.probe&&Ie.bodies[$n<k.T-$n?k.from:k.to];for(let gn=0;gn<rn&&!(V>=Sc);gn++){const on=sr(gn,Q,$n,j),qn=kt(k.id+7,gn*3),_n=k.probe?Q:Nn(k,j+(qn-.5)*2.5);Ze.set(_n.nx,_n.ny,_n.nz);let Un=_n.burning,Fi=1+.35*me(k.owner,"drives");if(on<1&&Rs){const pi=Lt.copy(ye);sr(gn,Ga,$n+.5,j+.5);const mi=vt(Ie,Rs,j),Yn=vt(Ie,Rs,j+.5);lt.set(ye.x-pi.x-(Yn.x-mi.x),ye.y-pi.y-(Yn.y-mi.y),ye.z-pi.z-(Yn.z-mi.z)),ye.copy(pi),Le.lerp(lt.lengthSq()>1e-8?lt.normalize():Le,Rt.smoothstep(on,0,.25));const rr=Rt.smoothstep(on,Cs,1);Ze.lerp(Le,1-rr),Ze.lengthSq()<.05&&Ze.addScaledVector(un,.4),Ze.normalize(),on<Cs?(Un=Math.sin(H*(5+qn*4)+gn*1.7)>.35,Fi=.12):Fi*=Rt.smoothstep(on,Cs,1)*.9+.1}Da(ye,Ze,$e,Un,H,gn,k.id*97+gn,Fi,k.probe,1,j)}if(Ro<200*q&&St(k)){const gn=new pt($e);let on=Q;for(let Yn=1;Yn<=q;Yn++){const rr=Q.progress+(1-Q.progress)*Yn/q,ls=Nn(k,k.t0+rr*k.T),Ps=1-Yn/q*.7;Y.set([on.x,on.y,on.z,ls.x,ls.y,ls.z],Ro*6),oe.set([gn.r*Ps,gn.g*Ps,gn.b*Ps,gn.r*Ps,gn.g*Ps,gn.b*Ps],Ro*6),Ro++,on=ls}const qn=st(Xl++);qn.visible=!0,qn.position.set(k.p1.x,k.p1.y,k.p1.z),qn.material.uniforms.uColor.value.set($e);const _n=k.owner!==(Z.me??0),Un=_n?1+.35*Math.sin(H*6):1;qn.material.uniforms.uOpacity.value=_n?.9:.5;const Fi=W(qn.position),pi=Ie.bodies[k.to],mi=Math.min(_n?22:14,Math.max(pi?pi.size*2.6*Fi:0,_n?7:5));qn.scale.setScalar(mi*Un/Fi),qn.material.uniforms.uWidth.value=Rt.clamp(mi/12,1,1.6)}}if(U.end(),nt.size>400||Math.floor(H)%5===0)for(const[k,Q]of nt)H-Q.seen>3&&nt.delete(k);let x0=0;for(const k of O.fleets){const Q=Nn(k,j);ye.set(Q.x,Q.y,Q.z).project(l);const $e=he(x0++);if(ye.z>1||!ht(k)){$e.style.visibility="hidden";continue}const rn=k.owner===(Z.me??0),bn=k.probe?`${At("probe")}${l.position.distanceTo(et.set(Q.x,Q.y,Q.z))<60?" probe":""}`:`${At("fleet")}${ot(k)?k.n:"?"}${k.dark?` ${At("dark")}`:""}`,$n=ot(k)?Ln(k.vet):0;$e._v!==$n&&($e._v=$n,$e.dataset.v=$n),$e._t!==bn&&($e._t=bn,$e.innerHTML=bn),$e.style.color=wt(k.owner),$e.style.borderColor=wt(k.owner),$e.style.opacity=rn?Z.fleet===k.id?1:.85:.6,$e.classList.toggle("sel",Z.fleet===k.id),$e.style.visibility="visible",$e.style.transform=`translate(${(ye.x*.5+.5)*Mt+12}px, ${(-ye.y*.5+.5)*Gt-9}px)`}for(let k=x0;k<ae.length;k++)ae[k].style.visibility="hidden";for(let k=Xl;k<Me.length;k++)Me[k].visible=!1;ne.setDrawRange(0,Ro*2),ne.attributes.position.needsUpdate=!0,ne.attributes.color.needsUpdate=!0;for(const k of we)k.live&&(k.age+=re,!(k.age<k.life)&&(k.live=!1,te.drift.copy(k.drift),ye.copy(k.b).addScaledVector(k.drift,nr-k.t0),k.pd?te.intercept(ye):te.impact(ye,k.c,k.rail)));if(te.drift.set(0,0,0),te.update(H,2*Math.tan(Rt.degToRad(l.fov/2))/window.innerHeight),Z.preview&&!Z.preview.out){const{p1:k}=Z.preview;Ce.visible=!0;const Q={...Z.preview,t0:0};for(let rn=0;rn<=128;rn++){const bn=Nn(Q,rn/128*Q.T);Qe.attributes.position.setXYZ(rn,bn.x,bn.y,bn.z)}Qe.attributes.position.needsUpdate=!0,Ce.computeLineDistances(),Ce.material.dashSize=6/W(ye.set(k.x,k.y,k.z)),Ce.material.gapSize=Ce.material.dashSize*.7;const $e=st(Xl++);$e.visible=!0,$e.position.set(k.x,k.y,k.z),$e.material.uniforms.uColor.value.set("#ffffff"),$e.material.uniforms.uOpacity.value=.6;{const rn=W($e.position),bn=Ie.bodies[Z.target],$n=Math.min(22,Math.max(bn?bn.size*2.6*rn:0,8));$e.scale.setScalar($n/rn),$e.material.uniforms.uWidth.value=Rt.clamp($n/12,1,1.6)}}else Ce.visible=!1;A(re),Um.value=window.innerHeight*o/(2*Math.tan(Rt.degToRad(l.fov/2))),g.uniforms.uBox.value=w.dist*.9,g.uniforms.uPR.value=o,u.uniforms.uFocus.value=w.dist,u.uniforms.uDof.value=s==="high"?1-Rt.smoothstep(w.dist,10,40):0;{const k=w.follow!==null?M[w.follow]:null,Q=k&&(k.lit&&k.lit.length||k.perk.lit.length||k.megaObj)?J[w.follow]:null,$e=Q&&l.position.distanceTo(ye.set(Q.x,Q.y,Q.z))-k.b.size<k.b.size*2.5+.4;c.update($e?ye:null,k?k.b.size:0,p.position,l,s==="high"?2048:1024)}Ke(H),u.render(a,l,H)}function Pr(O,Z){const re=window.innerWidth,H=window.innerHeight;let K=null,j=1/0;for(const de of M){if(!de.g.visible||(ye.copy(de.g.position).project(l),ye.z>1))continue;const me=Math.hypot((ye.x*.5+.5)*re-O,(-ye.y*.5+.5)*H-Z),Te=Math.max(30,de.b.size*W(de.g.position)+12);me<Te&&me<j&&(j=me,K=de.b.id)}return K}function ka(O,Z){w.follow=null,w.fleet=Z,w.goalDist=Math.min(w.dist,10)}function Lr(O,Z,re,H){let K=null,j=30;for(const de of O.fleets){if(de.owner!==H)continue;const me=Nn(de,O.time);if(ye.set(me.x,me.y,me.z).project(l),ye.z>1)continue;const Te=(ye.x*.5+.5)*window.innerWidth,fe=(-ye.y*.5+.5)*window.innerHeight,Xe=Math.min(Math.hypot(Te-Z,fe-re),Math.hypot(Te+32-Z,fe-re)-6);Xe<j&&(j=Xe,K=de.id)}return K}function Co(O,Z){const re=new D(O/window.innerWidth*2-1,-(Z/window.innerHeight)*2+1,.5).unproject(l),H=new Pl(l.position,re.sub(l.position).normalize()),K=new ts(Sn.clone(),-w.target.y),j=H.intersectPlane(K,new D);if(j&&j.distanceTo(l.position)<w.dist*4)return j;const de=new ts().setFromNormalAndCoplanarPoint(l.getWorldDirection(new D),w.target);return H.intersectPlane(de,new D)}function ir(O,Z,re){w.fleet=null,w.follow=null,w.goalDist=null;const H=Co(O,Z),K=Rt.clamp(w.dist*re,w.minDist,w.maxDist),j=K/w.dist;w.dist=K,H&&w.target.lerp(H,1-j)}function Na(O,Z){w.fleet=null,w.follow=null;const re=2*w.dist*Math.tan(Rt.degToRad(l.fov/2))/window.innerHeight,H=new D().setFromMatrixColumn(l.matrixWorld,0),K=new D().crossVectors(Sn,H).normalize();w.target.addScaledVector(H,-O*re).addScaledVector(K,Z*re)}function Fa(O,Z,re=!0){if(w.fleet=null,w.follow=Z,Z===null||!re)return;const H=O.bodies[Z];w.goalDist=Math.max(w.minDist,H.size*9+3)}function $l(O,Z,re){const H=Pr(Z,re);return H!==null?M[H].g.position.clone():Co(Z,re)||w.target.clone()}function Wl(O,Z,re){w.fleet=null,w.follow=null,w.goalDist=null;const H=new D().subVectors(l.position,w.target),K=new Fx().setFromVector3(H);re=Rt.clamp(K.phi+re,.15,Math.PI-.15)-K.phi;const de=new D().setFromMatrixColumn(l.matrixWorld,0).normalize(),me=new Bn().setFromAxisAngle(Sn,Z).multiply(new Bn().setFromAxisAngle(de,re)),Te=l.position.clone().sub(O).applyQuaternion(me).add(O);w.target.sub(O).applyQuaternion(me).add(O),K.setFromVector3(Te.clone().sub(w.target)),w.az=K.theta,w.pol=K.phi,w.dist=K.radius}const Oa=()=>w.follow!==null||w.fleet!=null;function za(O){w.goalDist=null,w.dist=Rt.clamp(w.dist*O,w.minDist,w.maxDist)}function Ba(O,Z,re){if(Oa()){za(re);return}const H=Pr(O,Z);if(w.goalDist=null,H===null){ir(O,Z,re);return}w.follow=null;const K=M[H].g.position,j=Rt.clamp(w.dist*re,w.minDist,w.maxDist);w.target.lerp(K,1-j/w.dist),w.dist=j}function I(O){return ye.copy(M[O].g.position).project(l),{x:(ye.x*.5+.5)*window.innerWidth,y:(-ye.y*.5+.5)*window.innerHeight}}function $(O){s=O,o=r(),u.setSamples(O==="high"?4:2),u.setLevel(O),Ot()}u.setLevel(s);let ce=0,ie=0,se=null,Oe=0,He=null,Fe=!1;function Ke(O){if(se!==null){const K=O-se;K>0&&K<.5&&(ie+=K,ce++)}if(se=O,ce<90)return;const Z=ie/ce;ie=0,ce=0;const re=r(),H=re>=1.5?Math.max(1,re*.65):re*.85;if(He){Z>He.avg*.9&&(o=He.pr,Fe=!0,Ot()),He=null;return}!Fe&&Z>1/45&&o>H?(He={pr:o,avg:Z},o=Math.max(H,o-.25),Oe=O+20,Ot()):Z<1/57&&o<re&&O>Oe&&(o=Math.min(re,o+.25),Ot())}return{_debug:{scene:a,renderer:i,post:u,camera:l,fx:te,get pixelRatio(){return o}},build:P,render:Ao,resize:Ot,setQuality:$,pick:Pr,pickFleet:Lr,followFleet:ka,orbit:w,zoomAt:ir,pan:Na,focus:Fa,screenOf:I,pivotAt:$l,rotateAround:Wl,zoomToward:Ba,zoomBy:za,following:Oa}}class WS{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return XS(e).buffer}}function XS(n){let e=0;for(const s of n)e+=s.byteLength;const t=new Uint8Array(e);let i=0;for(const s of n){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,i),i+=s.byteLength}return t}function Zm(n){return new qS(n).unpack()}function Jm(n){const e=new YS,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class qS{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,s="",r,o;for(;i<e;)r=t[i],r<160?(o=r,i++):(r^192)<32?(o=(r&31)<<6|t[i+1]&63,i+=2):(r^224)<16?(o=(r&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(o=(r&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(i===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class YS{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>i(s+1)):i(s+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),s=e/2**i-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|i+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new WS,this._textEncoder=new TextEncoder}}let Km=!0,Qm=!0;function na(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function Ar(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Jf("Unable to polyfill events");return}const s=n.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const l=u=>{const f=t(u);f&&(c.handleEvent?c.handleEvent(f):c(f))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};const o=s.removeEventListener;s.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function jS(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Km=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function ZS(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Qm=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function Jf(){if(typeof window=="object"){if(Km)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Kf(n,e){Qm&&console.warn(n+" is deprecated, please use "+e+" instead.")}function JS(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(i){const s=parseInt(i.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(na(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(na(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(na(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=na(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function rp(n){return Object.prototype.toString.call(n)==="[object Object]"}function eg(n){return rp(n)?Object.keys(n).reduce(function(e,t){const i=rp(n[t]),s=i?eg(n[t]):n[t],r=i&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):n}function Wd(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?Wd(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(s=>{Wd(n,n.get(s),t)})}))}function op(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return n.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{n.forEach(a=>{a.type===i&&a.trackId===o.id&&Wd(n,a,s)})}),s}const ap=Jf;function tg(n,e){if(e.version>=64)return;const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof a[l]=="object"?a[l]:{ideal:a[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const f=function(d,h){return d?d+h.charAt(0).toUpperCase()+h.slice(1):h==="deviceId"?"sourceId":h};if(u.ideal!==void 0){c.optional=c.optional||[];let d={};typeof u.ideal=="number"?(d[f("min",l)]=u.ideal,c.optional.push(d),d={},d[f("max",l)]=u.ideal,c.optional.push(d)):(d[f("",l)]=u.ideal,c.optional.push(d))}u.exact!==void 0&&typeof u.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[f("",l)]=u.exact):["min","max"].forEach(d=>{u[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[f(d,l)]=u[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(u,f,d){f in u&&!(d in u)&&(u[d]=u[f],delete u[f])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=i(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete a.video.facingMode;let f;if(l.exact==="environment"||l.ideal==="environment"?f=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(f=["front"]),f)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let h=d.find(g=>f.some(x=>g.label.toLowerCase().includes(x)));return!h&&d.length&&f.includes("back")&&(h=d[d.length-1]),h&&(a.video.deviceId=l.exact?{exact:h.deviceId}:{ideal:h.deviceId}),a.video=i(a.video),ap("chrome: "+JSON.stringify(a)),c(a)})}a.video=i(a.video)}return ap("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){s(a,u=>{t.webkitGetUserMedia(u,c,f=>{l&&l(r(f))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>a(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(f=>{f.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(r(u))))}}}function ng(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function ig(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ar(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function sg(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,c){let l=s.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],i.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(s=>s._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function rg(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const o=i.apply(this,[]);return o.forEach(a=>a._pc=this),o});const s=n.RTCPeerConnection.prototype.addTrack;s&&(n.RTCPeerConnection.prototype.addTrack=function(){const o=s.apply(this,arguments);return o._pc=this,o}),n.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>op(a,o.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const r=i.apply(this,[]);return r.forEach(o=>o._pc=this),r}),Ar(n,"track",s=>(s.receiver._pc=s.srcElement,s)),n.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>op(o,r.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const s=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===s&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(o?a=!0:o=c),c.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function og(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(f=>f.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],i.apply(this,arguments)};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function ag(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return og(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(f=>this._reverseStreams[f.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(f=>{if(this.getSenders().find(h=>h.track===f))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const f=new n.MediaStream(u.getTracks());this._streams[u.id]=f,this._reverseStreams[f.id]=u,u=f}i.apply(this,[u])};const s=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},n.RTCPeerConnection.prototype.addTrack=function(u,f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(x=>x===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(x=>x.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[f.id];if(g)g.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const x=new n.MediaStream([u]);this._streams[f.id]=x,this._reverseStreams[x.id]=f,this.addStream(x)}return this.getSenders().find(x=>x.track===u)};function r(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const h=l._reverseStreams[d],g=l._streams[h.id];f=f.replace(new RegExp(g.id,"g"),h.id)}),new RTCSessionDescription({type:u.type,sdp:f})}function o(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const h=l._reverseStreams[d],g=l._streams[h.id];f=f.replace(new RegExp(h.id,"g"),g.id)}),new RTCSessionDescription({type:u.type,sdp:f})}["createOffer","createAnswer"].forEach(function(l){const u=n.RTCPeerConnection.prototype[l],f={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[g=>{const x=r(this,g);d[0].apply(null,[x])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):u.apply(this,arguments).then(g=>r(this,g))}};n.RTCPeerConnection.prototype[l]=f[l]});const a=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),n.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(h=>{this._streams[h].getTracks().find(x=>u.track===x)&&(d=this._streams[h])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Xd(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=s[t]})}function cg(n,e){e.version>102||Ar(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const cp=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:cg,shimAddTrackRemoveTrack:ag,shimAddTrackRemoveTrackWithNative:og,shimGetSendersWithDtmf:sg,shimGetUserMedia:tg,shimMediaStream:ng,shimOnTrack:ig,shimPeerConnection:Xd,shimSenderReceiverGetStats:rg},Symbol.toStringTag,{value:"Module"}));function lg(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){Kf("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},i&&i.prototype.getSettings){const o=i.prototype.getSettings;i.prototype.getSettings=function(){const a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(i&&i.prototype.applyConstraints){const o=i.prototype.applyConstraints;i.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function KS(n,e){n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)}))}function ug(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function qd(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=s[t]}))}function dg(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((u,f)=>{c.set(f,Object.assign({},u,{type:t[u.type]||u.type}))})}return c}).then(o,a)}}function fg(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function hg(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(s=>s._pc=this),i}),Ar(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function pg(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){Kf("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function mg(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function gg(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.addTransceiver;t&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function vg(n,e){if(!(typeof n=="object"&&n.RTCRtpSender)||e.version>=110)return;const t=n.RTCRtpSender.prototype.getParameters;t&&(n.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function xg(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function _g(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const lp=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:gg,shimCreateAnswer:_g,shimCreateOffer:xg,shimGetDisplayMedia:KS,shimGetParameters:vg,shimGetStats:dg,shimGetUserMedia:lg,shimOnTrack:ug,shimPeerConnection:qd,shimRTCDataChannel:mg,shimReceiverGetStats:hg,shimRemoveStream:pg,shimSenderGetStats:fg},Symbol.toStringTag,{value:"Module"}));function yg(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(s=>e.call(this,s,i)),i.getVideoTracks().forEach(s=>e.call(this,s,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Mg(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(r)>=0)return;i._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,i.dispatchEvent(o)})}),e.apply(i,arguments)}}}function bg(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d},e.createAnswer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d};let a=function(c,l,u){const f=s.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f};e.setLocalDescription=a,a=function(c,l,u){const f=r.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.setRemoteDescription=a,a=function(c,l,u){const f=o.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.addIceCandidate=a}function Sg(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>i(wg(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,s,r){e.mediaDevices.getUserMedia(i).then(s,r)}.bind(e))}function wg(n){return n&&n.video!==void 0?Object.assign({},n,{video:eg(n.video)}):n}function Tg(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,s){if(i&&i.iceServers){const r=[];for(let o=0;o<i.iceServers.length;o++){let a=i.iceServers[o];a.urls===void 0&&a.url?(Kf("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(i.iceServers[o])}i.iceServers=r}return new e(i,s)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Eg(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Ag(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Cg(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const up=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Cg,shimCallbacksAPI:bg,shimConstraints:wg,shimCreateOfferLegacy:Ag,shimGetUserMedia:Sg,shimLocalStreamsAPI:yg,shimRTCIceServerUrls:Tg,shimRemoteStreamsAPI:Mg,shimTrackEventTransceiver:Eg},Symbol.toStringTag,{value:"Module"}));function QS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Rg={exports:{}};(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(s=>s.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const s={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let r=8;r<i.length;r+=2)switch(i[r]){case"raddr":s.relatedAddress=i[r+1];break;case"rport":s.relatedPort=parseInt(i[r+1],10);break;case"tcptype":s.tcpType=i[r+1];break;case"ufrag":s.ufrag=i[r+1],s.usernameFragment=i[r+1];break;default:s[i[r]]===void 0&&(s[i[r]]=i[r+1]);break}return s},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const s=t.component;s==="rtp"?i.push(1):s==="rtcp"?i.push(2):i.push(s),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const r=t.type;return i.push("typ"),i.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const s={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),s.name=i[0],s.clockRate=parseInt(i[1],10),s.channels=i.length===3?parseInt(i[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)s=r[o].trim().split("="),i[s[0].trim()]=s[1];return i},e.writeFmtp=function(t){let i="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),i+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{i+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,i),10)},r=t.indexOf(":",i);return r>-1?(s.attribute=t.substring(i+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(i+1),s},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(s=>parseInt(s,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let s="a=setup:"+i+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const s=e.matchPrefix(t+i,"a=ice-ufrag:")[0],r=e.matchPrefix(t+i,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");i.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const u=e.parseRtpMap(l),f=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(u.parameters=f.length?e.parseFmtp(f[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),i.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{i.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(u=>u.type===c.type&&u.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),i},e.writeRtpDescription=function(t,i){let s="";s+="m="+t+" ",s+=i.codecs.length>0?"9":"0",s+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=i.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(o=>{s+=e.writeRtpMap(o),s+=e.writeFmtp(o),s+=e.writeRtcpFb(o)});let r=0;return i.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(o=>{s+=e.writeExtmap(o)}),s},e.parseRtpEncodingParameters=function(t){const i=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,o=s.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));u.length>0&&u[0].length>1&&u[0][0]===c&&(l=u[0][1]),s.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let h={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(h.rtx={ssrc:l}),i.push(h),r&&(h=JSON.parse(JSON.stringify(h)),h.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},i.push(h))}}),i.length===0&&c&&i.push({ssrc:c});let f=e.matchPrefix(t,"b=");return f.length&&(f[0].indexOf("b=TIAS:")===0?f=parseInt(f[0].substring(7),10):f[0].indexOf("b=AS:")===0?f=parseInt(f[0].substring(5),10)*1e3*.95-50*40*8:f=void 0,i.forEach(d=>{d.maxBitrate=f})),i},e.parseRtcpParameters=function(t){const i={},s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];s&&(i.cname=s.value,i.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=r.length>0,i.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return i.mux=o.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return i=s[0].substring(7).split(" "),{stream:i[0],track:i[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return i=r[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:i.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,i){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&s.push("a=max-message-size:"+i.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,s){let r;const o=i!==void 0?i:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let s=0;s<i.length;s++)if(i[s].length<2||i[s].charAt(1)!=="=")return!1;return!0},n.exports=e})(Rg);var Pg=Rg.exports;const co=QS(Pg),ew=_v({__proto__:null,default:co},[Pg]);function Nc(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const s=new e(i),r=co.parseCandidate(i.candidate);for(const o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,Ar(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Yd(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||Ar(n,"icecandidate",e=>{if(e.candidate){const t=co.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Fc(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=co.splitSections(a.sdp);return c.shift(),c.some(l=>{const u=co.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},i=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=co.matchPrefix(a.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=i(arguments[0]),l=s(c),u=r(arguments[0],c);let f;l===0&&u===0?f=Number.POSITIVE_INFINITY:l===0||u===0?f=Math.max(l,u):f=Math.min(l,u);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return f}}),this._sctp=d}return o.apply(this,arguments)}}function Oc(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const o=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const r=i.apply(this,arguments);return t(r,this),r},Ar(n,"datachannel",s=>(t(s.channel,s.target),s))}function jd(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function Zd(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&s instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function zc(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Bc(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const tw=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Zd,shimAddIceCandidateNullOrEmpty:zc,shimConnectionState:jd,shimMaxMessageSize:Fc,shimParameterlessSetLocalDescription:Bc,shimRTCIceCandidate:Nc,shimRTCIceCandidateRelayProtocol:Yd,shimSendThrowTypeError:Oc},Symbol.toStringTag,{value:"Module"}));function nw({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Jf,i=JS(n),s={browserDetails:i,commonShim:tw,extractVersion:na,disableLog:jS,disableWarnings:ZS,sdp:ew};switch(i.browser){case"chrome":if(!cp||!Xd||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=cp,zc(n,i),Bc(n),tg(n,i),ng(n),Xd(n,i),ig(n,i),ag(n,i),sg(n),rg(n,i),cg(n,i),Nc(n),Yd(n),jd(n),Fc(n,i),Oc(n,i),Zd(n,i);break;case"firefox":if(!lp||!qd||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=lp,zc(n,i),Bc(n),lg(n,i),qd(n,i),dg(n,i),ug(n),pg(n),fg(n),hg(n),mg(n),gg(n,i),vg(n,i),xg(n,i),_g(n,i),Nc(n),jd(n),Fc(n,i),Oc(n,i);break;case"safari":if(!up||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=up,zc(n,i),Bc(n),Tg(n),Ag(n),bg(n),yg(n),Mg(n),Eg(n),Sg(n),Cg(n),Nc(n),Yd(n),Fc(n,i),Oc(n,i),Zd(n,i);break;default:t("Unsupported browser!");break}return s}const dp=nw({window:typeof window>"u"?void 0:window});function Cr(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class Lg{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,s=Math.ceil(i/this.chunkedMTU);let r=0,o=0;for(;o<i;){const a=Math.min(i,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),o=a,r++}return this._dataCount++,t}}}function iw(n){let e=0;for(const s of n)e+=s.byteLength;const t=new Uint8Array(e);let i=0;for(const s of n)t.set(s,i),i+=s.byteLength;return t}const zu=dp.default||dp,jo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return zu.browserDetails.browser}getVersion(){return zu.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=zu.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},sw=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),Ig=()=>Math.random().toString(36).slice(2),fp={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class rw extends Lg{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(s){s.target&&t(s.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=fp,this.browser=jo.getBrowser(),this.browserVersion=jo.getVersion(),this.pack=Jm,this.unpack=Zm,this.supports=function(){const t={browser:jo.isBrowserSupported(),webRTC:jo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(fp),t.audioVideo=!0;let s;try{s=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!jo.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{i&&i.close()}return t}(),this.validateId=sw,this.randomToken=Ig}}const gi=new rw,ow="PeerJS: ";class aw{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[ow,...t];for(const s in i)i[s]instanceof Error&&(i[s]="("+i[s].name+") "+i[s].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var tt=new aw,Qf={},cw=Object.prototype.hasOwnProperty,hi="~";function Ta(){}Object.create&&(Ta.prototype=Object.create(null),new Ta().__proto__||(hi=!1));function lw(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function Dg(n,e,t,i,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new lw(t,i||n,s),o=hi?hi+e:e;return n._events[o]?n._events[o].fn?n._events[o]=[n._events[o],r]:n._events[o].push(r):(n._events[o]=r,n._eventsCount++),n}function Gc(n,e){--n._eventsCount===0?n._events=new Ta:delete n._events[e]}function ii(){this._events=new Ta,this._eventsCount=0}ii.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)cw.call(t,i)&&e.push(hi?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};ii.prototype.listeners=function(e){var t=hi?hi+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var s=0,r=i.length,o=new Array(r);s<r;s++)o[s]=i[s].fn;return o};ii.prototype.listenerCount=function(e){var t=hi?hi+e:e,i=this._events[t];return i?i.fn?1:i.length:0};ii.prototype.emit=function(e,t,i,s,r,o){var a=hi?hi+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,u,f;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,i),!0;case 4:return c.fn.call(c.context,t,i,s),!0;case 5:return c.fn.call(c.context,t,i,s,r),!0;case 6:return c.fn.call(c.context,t,i,s,r,o),!0}for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];c.fn.apply(c.context,u)}else{var d=c.length,h;for(f=0;f<d;f++)switch(c[f].once&&this.removeListener(e,c[f].fn,void 0,!0),l){case 1:c[f].fn.call(c[f].context);break;case 2:c[f].fn.call(c[f].context,t);break;case 3:c[f].fn.call(c[f].context,t,i);break;case 4:c[f].fn.call(c[f].context,t,i,s);break;default:if(!u)for(h=1,u=new Array(l-1);h<l;h++)u[h-1]=arguments[h];c[f].fn.apply(c[f].context,u)}}return!0};ii.prototype.on=function(e,t,i){return Dg(this,e,t,i,!1)};ii.prototype.once=function(e,t,i){return Dg(this,e,t,i,!0)};ii.prototype.removeListener=function(e,t,i,s){var r=hi?hi+e:e;if(!this._events[r])return this;if(!t)return Gc(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!i||o.context===i)&&Gc(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||s&&!o[a].once||i&&o[a].context!==i)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:Gc(this,r)}return this};ii.prototype.removeAllListeners=function(e){var t;return e?(t=hi?hi+e:e,this._events[t]&&Gc(this,t)):(this._events=new Ta,this._eventsCount=0),this};ii.prototype.off=ii.prototype.removeListener;ii.prototype.addListener=ii.prototype.on;ii.prefixed=hi;ii.EventEmitter=ii;Qf=ii;var Rr={};Cr(Rr,"ConnectionType",()=>js);Cr(Rr,"PeerErrorType",()=>Rn);Cr(Rr,"BaseConnectionErrorType",()=>Jd);Cr(Rr,"DataConnectionErrorType",()=>e0);Cr(Rr,"SerializationType",()=>Fl);Cr(Rr,"SocketEventType",()=>Xs);Cr(Rr,"ServerMessageType",()=>ti);var js=function(n){return n.Data="data",n.Media="media",n}({}),Rn=function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n}({}),Jd=function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n}({}),e0=function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n}({}),Fl=function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n}({}),Xs=function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n}({}),ti=function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n}({});const Ug="1.5.5";class uw extends Qf.EventEmitter{constructor(e,t,i,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+i+s+"peerjs?key="+r}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+Ug),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),tt.log("Server message received:",r)}catch{tt.log("Invalid server message",s.data);return}this.emit(Xs.Message,r)},this._socket.onclose=s=>{this._disconnected||(tt.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Xs.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),tt.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){tt.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:ti.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Xs.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class kg{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===js.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(i.label,s);i._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){tt.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;tt.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(tt.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:ti.Candidate,payload:{candidate:o.candidate,type:s,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":tt.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Jd.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":tt.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Jd.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":tt.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},tt.log("Listening for data channel"),e.ondatachannel=o=>{tt.log("Received data channel");const a=o.channel;r.getConnection(t,i)._initializeDataChannel(a)},tt.log("Listening for remote stream"),e.ontrack=o=>{tt.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,i);if(c.type===js.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){tt.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const s=this.connection.dataChannel;s&&(i=!!s.readyState&&s.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);tt.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),tt.log("Set localDescription:",i,`for:${this.connection.peer}`);let s={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===js.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:ti.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Rn.WebRTC,s),tt.log("Failed to setLocalDescription, ",s))}}catch(i){t.emitError(Rn.WebRTC,i),tt.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();tt.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),tt.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:ti.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Rn.WebRTC,s),tt.log("Failed to setLocalDescription, ",s)}}catch(i){t.emitError(Rn.WebRTC,i),tt.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,s=this.connection.provider;tt.log("Setting remote description",t);const r=this;try{await i.setRemoteDescription(t),tt.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(Rn.WebRTC,o),tt.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){tt.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),tt.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Rn.WebRTC,t),tt.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(tt.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return tt.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){tt.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Ng extends Qf.EventEmitter{emitError(e,t){tt.error("Error:",t),this.emit("error",new dw(`${e}`,t))}}class dw extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Fg extends Ng{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var af;const pa=class pa extends Fg{get type(){return js.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||pa.ID_PREFIX+gi.randomToken(),this._negotiator=new kg(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{tt.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{tt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){tt.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case ti.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case ti.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:tt.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){tt.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const s of i)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};af=new WeakMap,Po(pa,af,pa.ID_PREFIX="mc_");let gl=pa;class fw{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${i}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Ug),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){tt.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==gi.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===gi.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw tt.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var cf,lf;const pr=class pr extends Fg{get type(){return js.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||pr.ID_PREFIX+Ig(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new kg(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{tt.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{tt.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{tt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(e0.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case ti.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case ti.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:tt.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};cf=new WeakMap,lf=new WeakMap,Po(pr,cf,pr.ID_PREFIX="dc_"),Po(pr,lf,pr.MAX_BUFFERED_AMOUNT=8388608);let vl=pr;class t0 extends vl{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>vl.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return tt.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Bu extends t0{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new Lg,this.serialization=Fl.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Zm(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const s=iw(i.data);this._handleDataMessage({data:s})}}_send(e,t){const i=Jm(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);tt.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class hw extends t0{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Fl.None}}class pw extends t0{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=gi.chunkedMTU){this.emitError(e0.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=Fl.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var uf;const ma=class ma extends Ng{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:hw,json:pw,binary:Bu,"binary-utf8":Bu,default:Bu},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:gi.CLOUD_HOST,port:gi.CLOUD_PORT,path:"/",key:ma.DEFAULT_KEY,token:gi.randomToken(),config:gi.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==gi.CLOUD_HOST?this._options.secure=gi.isSecure():this._options.host==gi.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&tt.setLogFunction(this._options.logFunction),tt.logLevel=this._options.debug||0,this._api=new fw(t),this._socket=this._createServerConnection(),!gi.supports.audioVideo&&!gi.supports.data){this._delayedAbort(Rn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!gi.validateId(i)){this._delayedAbort(Rn.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Rn.ServerError,s))}_createServerConnection(){const e=new uw(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Xs.Message,t=>{this._handleMessage(t)}),e.on(Xs.Error,t=>{this._abort(Rn.SocketError,t)}),e.on(Xs.Disconnected,()=>{this.disconnected||(this.emitError(Rn.Network,"Lost connection to server."),this.disconnect())}),e.on(Xs.Close,()=>{this.disconnected||this._abort(Rn.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,s=e.src;switch(t){case ti.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case ti.Error:this._abort(Rn.ServerError,i.msg);break;case ti.IdTaken:this._abort(Rn.UnavailableID,`ID "${this.id}" is taken`);break;case ti.InvalidKey:this._abort(Rn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case ti.Leave:tt.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case ti.Expire:this.emitError(Rn.PeerUnavailable,`Could not connect to peer ${s}`);break;case ti.Offer:{const r=i.connectionId;let o=this.getConnection(s,r);if(o&&(o.close(),tt.warn(`Offer received for existing Connection ID:${r}`)),i.type===js.Media){const c=new gl(s,this,{connectionId:r,_payload:i,metadata:i.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(i.type===js.Data){const c=new this._serializers[i.serialization](s,this,{connectionId:r,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{tt.warn(`Received malformed connection type:${i.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!i){tt.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=i.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):tt.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){tt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Rn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){tt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Rn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){tt.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new gl(e,this,{...i,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){tt.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const s of i)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){tt.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(tt.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;tt.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)tt.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)tt.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Rn.ServerError,t))}};uf=new WeakMap,Po(ma,uf,ma.DEFAULT_KEY="peerjs");let Kd=ma;var Og=Kd;const zg="perihelion-v1-",hp="ABCDEFGHJKLMNPQRSTUVWXYZ",xl=3,Gu=new URLSearchParams(location.search).get("peer"),Bg=Gu?{host:Gu.split(":")[0],port:Number(Gu.split(":")[1]||9e3),path:"/",secure:!1,debug:0}:{debug:0},mw=()=>Array.from({length:5},()=>hp[Math.random()*hp.length|0]).join("");function gw(n,e){const t=mw(),i=new Og(zg+t,Bg),s=[{kind:"human",name:n,online:!0}];let r=!1;const o=()=>s.map(l=>({kind:l.kind,name:l.name,online:l.online,difficulty:l.difficulty})),a=(l,u)=>{try{l&&l.open&&l.send(u)}catch{}},c={code:t,seats:s,get started(){return r},broadcast(l){for(const u of s)u.conn&&a(u.conn,l)},sendTo(l,u){a(s[l]?.conn,u)},lobby(){for(const[l,u]of s.entries())u.conn&&a(u.conn,{t:"lobby",seats:o(),you:l,code:t});e.seats(o())},addAI(l){r||s.length>=xl||(s.push({kind:"ai",name:`AI · ${l}`,online:!0,difficulty:l}),c.lobby())},remove(l){if(r||l===0||!s[l])return;const[u]=s.splice(l,1);u.conn&&(a(u.conn,{t:"kicked"}),setTimeout(()=>u.conn.close(),200)),c.lobby()},start(){r=!0},close(){i.destroy()}};return i.on("open",()=>e.open(t)),i.on("error",l=>e.error(l.type==="unavailable-id"?"Code clash, try again":`Connection problem (${l.type})`)),i.on("connection",l=>{l.on("data",u=>{if(u.t==="hello"){const f=Gg(u.name),d=typeof u.token=="string"?u.token.slice(0,64):"";let h=d?s.findIndex((g,x)=>x!==0&&g.kind==="human"&&!g.online&&g.token===d):-1;if(h<0&&r){a(l,{t:"full",why:"Game already started"});return}if(h<0){if(s.length>=xl){a(l,{t:"full",why:"Room is full"});return}if(s.some(g=>g.online&&g.token&&g.token===d)){a(l,{t:"full",why:"Already in this room"});return}s.push({kind:"human",name:vw(s,f),token:d}),h=s.length-1}Object.assign(s[h],{conn:l,online:!0}),c.lobby(),r&&e.rejoin(h)}else if(u.t==="cmd"&&u.cmd&&typeof u.cmd=="object"){const f=s.findIndex(d=>d.conn===l);f>0&&e.cmd(f,u.cmd)}}),l.on("close",()=>{const u=s.findIndex(f=>f.conn===l);if(!(u<0)){if(!r){s.splice(u,1),c.lobby();return}s[u].online=!1,s[u].conn=null,c.lobby(),e.left(u)}})}),c}function Gg(n){return String(n??"").replace(/[<>&"'`]/g,"").trim().slice(0,16)||"Player"}function vw(n,e){let t=e||"Player",i=2;for(;n.some(s=>s.name===t);)t=`${e} ${i++}`;return t}function xw(n,e,t,i){const s=new Og(Bg);let r=null;const o={send(a){try{r&&r.open&&r.send(a)}catch{}},close(){s.destroy()}};return s.on("open",()=>{r=s.connect(zg+n.toUpperCase(),{reliable:!0});const a=setTimeout(()=>{r.open||i.error("No game found with that code")},9e3);r.on("open",()=>{clearTimeout(a),o.send({t:"hello",name:e,token:t})}),r.on("data",c=>i.message(c)),r.on("close",()=>i.closed())}),s.on("error",a=>i.error(a.type==="peer-unavailable"?"No game found with that code":`Connection problem (${a.type})`)),o}function Vg(n,e){const t=n.bodies.find(r=>r.owner===e&&r.home)||n.bodies.find(r=>r.owner===e);if(!t)return null;const i=r=>So(n,t,r,n.time).T+(r.ships+r.guns)*25,s=n.bodies.filter(r=>r.owner===Ve&&!r.visitor&&!r.giant).map(r=>[i(r),r]);return s.sort((r,o)=>r[0]-o[0]),s.length?s[0][1]:null}const fr=n=>n.touch?"tap":"click",pp=n=>n.touch?"Tap":"Click",ia=[{title:"Your homeworld",text:n=>`This is <b>${n.home.name}</b>. Blue rings mark your worlds. ${n.touch?"Tap":"Click"} it to select it.`,world:n=>n.home.id,done:n=>n.ui.selected===n.home.id},{title:"Look around",text:n=>n.touch?"Drag to turn the view. Pinch to zoom, and drag with two fingers to slide the map. Double-tap a world to fly to it; the target button shows the whole system.":"Right-drag to turn the view, scroll to zoom, drag to slide the map. Double-click a world to fly to it; the target button (or H) shows the whole system.",point:"#system",done:n=>n.moved>1},{title:"Credits and crew",text:n=>`Top left: your credits, and what you earn each second. Every world you hold earns; mines and harvesters add more.${n.game.crew?" Beside it, crew: every ship needs one, and your worlds and Habitats supply them.":""}`,point:"#clock"},{title:"Order a ship",text:n=>`${n.ui.selected===n.home.id?"":`Select <b>${n.home.name}</b>, then ${fr(n)}`}${n.ui.selected===n.home.id?pp(n):""} <b>+ Ship</b>. Its shipyard builds one at a time (${Se.ship.cost} credits each). Ships are never built for you.`,point:'[data-b="ship"]',world:n=>n.ui.selected===n.home.id?null:n.home.id,on:"ship"},{title:"Build",text:n=>`${n.ui.selected===n.home.id?"":`Select <b>${n.home.name}</b>. `}${pp(n)} an empty <b>+</b> slot, then pick a building (${n.touch?"press and hold one":"hover over one"} to read what it does). A <b>Lab</b> (research station) speeds up research.`,point:n=>n.ui.slot!==null&&n.ui.selected===n.home.id?".ctx .opt:not([disabled])":".cell.empty",world:n=>n.ui.selected===n.home.id?null:n.home.id,on:"build"},{title:"Research",text:n=>`${n.touch?"Tap empty space to close the panel, then tap":"Click"} <b>R&amp;D</b> (bottom left). Pick a branch, then <b>Research</b>. One project at a time, paid in credits.`,point:n=>n.researchOpen?"#rlist button[data-k]:not([disabled])":"#rnd",on:"research"},{title:"Send ships",text:n=>{const e=n.target?`<b>${n.target.name}</b>`:"a nearby grey world";return n.ui.mode==="launch"&&n.ui.target!==null?`Set how many with the slider, then <b>Confirm</b>. The dashed line is the route to where ${e} <em>will</em> be.`:n.ui.mode==="launch"?`Now ${fr(n)} ${e} (ringed) as the destination.`:`Take a world: select <b>${n.home.name}</b>, ${fr(n)} <b>Launch</b>, then ${fr(n)} ${e}. Grey worlds are independent and lightly held.`},point:n=>n.ui.mode==="launch"?n.ui.target!==null?"#launch":null:n.ui.selected===n.home.id?"#launch":null,world:n=>n.ui.mode==="launch"?n.ui.target===null&&n.target?n.target.id:null:n.ui.selected===n.home.id?null:n.home.id,on:"launch"},{title:"Speed up time",text:n=>`${n.eta!==null?`Your ships reach <b>${n.sentName}</b> in <b>${n.eta}</b>. Nothing to do but wait: `:"Trips take a while. "}${fr(n)} <b>1×</b> to run time faster (up to 8×), and back to 1× when things get busy.`,point:"#warp",done:n=>n.warp>1||n.gained>0},{title:"Take it",text:n=>n.fighting?`Your ships are fighting at <b>${n.sentName}</b>, against its guns and any ships there. Win and it's yours.`:n.eta!==null?`On the way to <b>${n.sentName}</b>: arrives in <b>${n.eta}</b>. Your fleet burns halfway, flips and brakes into orbit, then fights. Nothing to do until then; ${fr(n)} the fleet to follow it, or order more ships meanwhile.`:"That attack fell short: send more ships (order a few first if you need to).",world:n=>n.sentTo,done:n=>n.gained>0},{title:"Over to you",text:n=>`${n.gained>0?"The world is yours and earns for you now. ":""}Your rival is out in the fog: take every one of their worlds to win. A ▼ on a label means enemies are on the way. Special worlds carry perks; ${fr(n)} any world to see what it has.`,last:!0}],G=n=>document.getElementById(n);let Ea=null,Hg=0;const Qd=new Set,Pn=(n,e)=>{if(Ea&&performance.now()-Hg<1500&&n.contains(Ea)){n._pending=e,Qd.add(n);return}n._pending=void 0,n._html!==e&&(n._html=e,n.innerHTML=e)},n0=()=>{Ea=null;for(const n of Qd)Qd.delete(n),n._pending!==void 0&&Pn(n,n._pending)};window.addEventListener("pointerdown",n=>{Ea=n.target,Hg=performance.now()},!0);let _l=0;window.addEventListener("pointerup",()=>{clearTimeout(_l),_l=setTimeout(n0,350)},!0);window.addEventListener("pointercancel",()=>{clearTimeout(_l),n0()},!0);window.addEventListener("click",()=>{clearTimeout(_l),setTimeout(n0,0)});const ft=(()=>{const n={rivals:1,difficulty:"normal",system:"random",pct:100,dev:!1,gfx:"auto",ui:1};try{return{...n,...JSON.parse(localStorage.getItem("perihelion")||"{}")}}catch{return n}})(),cs=()=>{try{localStorage.setItem("perihelion",JSON.stringify(ft))}catch{}};ft.token||(ft.token=Array.from(crypto.getRandomValues(new Uint8Array(12)),n=>n.toString(16).padStart(2,"0")).join(""),cs());function i0(){const n=new URLSearchParams(location.search).get("gfx");if(n==="high"||n==="low")return n;if(ft.gfx==="high"||ft.gfx==="low")return ft.gfx;const e=matchMedia("(pointer: coarse)").matches,t=(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4;return e&&t?"low":"high"}const it=$S(G("scene"),G("labels"),{quality:i0()});let N=null,Ol=[],pn=!1,xe=0,Dt=null,xi=!1;const Vc=[.5,1,2,4,8];let Zs=1;const z={peek:null,pick:null,selected:null,target:null,fleet:null,count:1,dark:!1,preview:null,dragging:!1,vis:null,slot:null,mode:null},Ft=n=>(n=Math.max(0,n),`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`);function $g(n,e){const t=N.bodies[e.b];if(e.type!=="research"&&e.type!=="spy"&&e.type!=="dark"&&(!t||t.owner!==n))return!1;const i=(s,r)=>typeof r=="string"&&Object.hasOwn(s,r);if((e.type==="launch"||e.type==="probe")&&!N.bodies[e.to]||e.type==="launch"&&!Number.isFinite(e.n)||e.type==="build"&&!i(Se.structures,e.k)||e.type==="research"&&!i(ui,e.k)&&!i(Xn,e.k)||e.type==="project"&&!i(vn,e.k)||(e.type==="upgrade"||e.type==="demolish")&&!Number.isInteger(e.i))return!1;switch(e.type){case"launch":return!!Al(N,t,N.bodies[e.to],e.n,!!e.dark);case"spy":return!!Ap(N,n,t);case"dark":{const s=N.fleets.find(r=>r.id===e.f&&r.owner===n);return jv(N,s,!!e.on)}case"ship":return ju(N,t);case"cancel":return zp(N,t);case"build":return Gi(N,t,e.k);case"upgrade":return!!t.structures[e.i]&&Zo(N,t,t.structures[e.i]);case"demolish":return!!t.structures[e.i]&&Op(N,t,t.structures[e.i]);case"research":return Ep(N,n,e.k);case"probe":return!!Ju(N,t,N.bodies[e.to]);case"project":return Sp(N,t,e.k);default:return!1}}function rs(n){if(xi)return!1;if(Dt?.role==="client")return Dt.room.send({t:"cmd",cmd:n}),!0;const e=$g(xe,n);return e&&bw(n),e}function Wg(n,e,t){const i=()=>n.querySelectorAll("button").forEach(s=>s.classList.toggle("on",s.dataset.v===String(e())));n.addEventListener("click",s=>{const r=s.target.closest("button");r&&(t(r.dataset.v),cs(),i())}),i()}Wg(G("rivals"),()=>ft.rivals,n=>ft.rivals=Number(n));Wg(G("difficulty"),()=>ft.difficulty,n=>ft.difficulty=n);let zl=[],yo=null;const _w=n=>ft.system!=="random"&&oi[ft.system]?ft.system:Xc[(n>>>0)%Xc.length];function Ra({seed:n=Math.random()*2**31|0,players:e=ft.rivals+1,seat:t=0,names:i=null,aiSeats:s=null,aiDiffs:r=null,mp:o=!1,system:a=_w(n),day:c=null,training:l=!1}={}){yo=c,N=Up({seed:n,opponents:e-1,mp:o,system:a}),$t=null,i&&(N.names=i),xe=t;const u=Ui(n^2748);zl=r||(s?s.map(([,h])=>h):o?[]:Array(e-1).fill(ft.difficulty)),Ol=Dt?.role==="client"?[]:s?s.map(([h,g])=>Ku(h,g,u)):Array.from({length:e-1},(h,g)=>Ku(g+1,ft.difficulty,u)),z.selected=z.target=z.preview=z.fleet=z.mode=z.peek=null,z.slot=null,z.me=xe,xi=!1,Hs=!1,d0=null,of=!0,f0=performance.now(),sa=!1,typeof z.devAs=="number"&&z.devAs>=N.players&&(z.devAs=void 0),N.events.length=0,G("feed").innerHTML="",G("research").hidden=!0,it.build(N),z.vis=xr(N,xe);const f=N.bodies.find(h=>h.owner===xe);it.focus(N,f.id,!1),it.orbit.target.set(0,0,0),it.orbit.dist=f.size*12+40,it.orbit.pol=.9;for(const h of["menu","end","lobby"])G(h).hidden=!0;G("hud").hidden=!1,G("leave").hidden=!0,G("warp").hidden=!!Dt,G("pause").hidden=Dt?.role==="client",Zs=1,G("warp").textContent="1×",pn=!0,a0(),G("resume").hidden=!0,G("menu").classList.remove("paused"),Xt();const d=oi[N.system];l?Mw():Et(`${yo?"Daily · ":""}${d.name}`,"#aab1c8"),La()}const Pa=()=>G("resume").hidden||confirm("Leave the game in progress? It will be lost.");function yw(){Pa()&&(Di(),Ra())}function Xg(){if(!Pa())return;Di();const n=Dp();Ra({seed:n.seed,system:n.system,day:n.key})}G("daily").addEventListener("click",Xg);const Vu=["random",...Ip];function qg(){G("system-pick").textContent=ft.system==="random"?"Random":`${oi[ft.system].name}${oi[ft.system].test?" (test)":""}`,G("system-pick").title=ft.system==="random"?"A different system type each game":oi[ft.system].text;const n=Dp();G("daily").innerHTML=`Daily<small>${oi[n.system].name}</small>`,G("daily").title=`Today's system, the same for everyone: ${oi[n.system].name}`}const s0=n=>{const e=Vu.length;ft.system=Vu[(Vu.indexOf(ft.system)+n+e)%e],cs(),qg()};G("system-pick").addEventListener("click",()=>s0(1));G("system-prev").addEventListener("click",()=>s0(-1));G("system-next").addEventListener("click",()=>s0(1));qg();G("play").addEventListener("click",yw);G("again").addEventListener("click",()=>{if(Di(),G("end").hidden=!0,G("resume").hidden=!0,G("menu").classList.remove("paused"),yo){Xg();return}G("menu").hidden=!1,G("play").textContent="Play vs AI"});G("pause").addEventListener("click",Yg);G("leave").addEventListener("click",()=>{Di(),pn=!1,G("leave").hidden=!0,G("hud").hidden=!0,G("menu").hidden=!1,G("resume").hidden=!0});G("resume").addEventListener("click",()=>{G("menu").hidden=!0,G("menu").classList.remove("paused"),pn=!0});function Yg(){if(!(!N||N.winner!==null||!pn)){if(Dt){xi=!xi,G("pause").innerHTML=At(xi?"play":"pause"),Dt.room.broadcast({t:"pause",paused:xi}),yl();return}pn=!1,G("menu").hidden=!1,G("resume").hidden=!1,G("rnd").hidden=!0,G("menu").classList.add("paused"),G("play").textContent="New game"}}function yl(){G("banner").hidden=!xi,G("banner").textContent=xe===0?"Paused · tap play to resume":"Paused by host"}let $t=null;function Mw(){N.credits[xe]+=800,$t={i:0,free:!1,did:new Set,sentTo:null,target:Vg(N,xe),held0:N.bodies.filter(n=>n.owner===xe).length},r0()}function r0(){const n=it.orbit;$t.cam={az:n.az,pol:n.pol,dist:n.dist,x:n.target.x,y:n.target.y,z:n.target.z}}function mp(){const n=it.orbit,e=$t.cam,t=2*(Math.abs(n.az-e.az)+Math.abs(n.pol-e.pol)+Math.abs(Math.log(n.dist/e.dist)))+3*Math.hypot(n.target.x-e.x,n.target.y-e.y,n.target.z-e.z)/e.dist,i=N.bodies.filter(o=>o.owner===xe);(!$t.target||$t.target.owner!==Ve)&&($t.target=Vg(N,xe));const s=N.fleets.filter(o=>o.owner===xe&&!o.probe),r=s.some(o=>o.to===$t.sentTo)?s.filter(o=>o.to===$t.sentTo):s;return{game:N,ui:z,me:xe,warp:Zs,moved:t,touch:Ia,target:$t.target,sentTo:$t.sentTo,home:i.find(o=>o.home)||i[0],gained:i.length-$t.held0,inFlight:r.length>0,eta:r.length?Ft(Math.min(...r.map(o=>o.T-(N.time-o.t0)))):null,fighting:N.bodies.some(o=>o.sieges.some(a=>a.owner===xe)),sentName:$t.sentTo!==null?N.bodies[$t.sentTo].name:"",researchOpen:!G("research").hidden}}function bw(n){!$t||$t.free||($t.did.add(n.type),n.type==="launch"&&($t.sentTo=n.to),La())}function o0(){$t&&($t.free=!0,ft.tutorialDone=!0,cs(),iv(),La())}function La(){const n=!!$t&&!$t.free&&pn&&!!N;if(document.body.classList.toggle("tut-on",n),G("coach").hidden=!n,z.tutWorld=null,!n){G("tut-glow").textContent="";return}let e=mp();if(!e.home){o0();return}for(let r=ia[$t.i];!r.last&&(r.on&&$t.did.has(r.on)||r.done&&r.done(e));r=ia[$t.i])$t.i+=1,r0(),e=mp();const t=ia[$t.i],i=typeof t.point=="function"?t.point(e):t.point;G("tut-glow").textContent=i?`${i} { animation: tutglow 0.9s ease-in-out infinite alternate; }`:"",z.tutWorld=t.world?t.world(e):null;const s=z.tutWorld!==null&&z.tutWorld!==void 0?`<button class="show" data-go="${z.tutWorld}">Show</button>`:"";Pn(G("coachText"),`<small>Training · ${$t.i+1}/${ia.length}</small><b>${t.title}</b><span>${t.text(e)}</span>`),Pn(G("coachShow"),s),G("coachNext").textContent=t.last?"Play on":t.on||t.done?"Skip":"Next",G("coachNext").classList.toggle("ghost",!!(t.on||t.done))}G("coachNext").addEventListener("click",()=>{if($t){if(ia[$t.i].last){o0(),Et("Your rival is on the move","#aab1c8");return}$t.i+=1,r0(),La()}});G("coachClose").addEventListener("click",()=>{o0(),Et("Tutorial closed · your rival is on the move","#aab1c8")});G("coachShow").addEventListener("click",n=>{const e=n.target.closest("button[data-go]");e&&it.focus(N,Number(e.dataset.go))});G("keys").textContent=matchMedia("(pointer: fine)").matches?"Mouse: click to select · drag to pan · right-drag to rotate · scroll to zoom · double-click a world to fly there. Keys: WASD pan · Q/E rotate · +/− zoom · F focus · H whole system · L launch/confirm · P probe · R research · Space pause · 1–5 speed (½× to 8×) · Esc back.":"Drag to rotate · two fingers to pan and zoom · double-tap to fly to a world.";G("name").value=ft.name||"";G("name").addEventListener("input",()=>{ft.name=G("name").value.trim(),cs()});const jg=()=>Gg(G("name").value),Xi=n=>{G("menu-msg").textContent=n||""};let Zg=[];function Di(){Dt&&Dt.room.close(),Dt=null,xi=!1,G("banner").hidden=!0,G("pause").innerHTML=At("pause")}function ef(n,e){Zg=n,G("lobby-code").textContent=e||"·····";const t=Dt?.role==="host",i=n.map((s,r)=>`<div class="seat"><i style="background:${wt(r)}"></i><span>${s.name}${r===xe?" (you)":""}</span><small>${s.kind==="ai"?"AI":r===0?"host":s.online===!1?"offline":"ready"}</small>${t&&r>0?`<button data-kick="${r}" aria-label="Remove">${At("close")}</button>`:""}</div>`);for(let s=n.length;s<xl;s++)i.push('<div class="seat empty"><span>Open seat</span></div>');G("seats").innerHTML=i.join(""),G("lobby-ai").hidden=!t||n.length>=xl,G("lobby-start").hidden=!t,G("lobby-start").disabled=n.length<2,G("lobby-hint").textContent=t?n.length<2?"Tap the code to copy it. Up to 3 empires.":"Ready when you are.":"Waiting for the host to start…"}let Jg="normal";G("ai-diff").addEventListener("click",n=>{const e=n.target.closest("button");e&&(Jg=e.dataset.v,G("ai-diff").querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)))});G("add-ai").addEventListener("click",()=>Dt?.role==="host"&&Dt.room.addAI(Jg));G("seats").addEventListener("click",n=>{const e=n.target.closest("button[data-kick]");e&&Dt?.role==="host"&&Dt.room.remove(Number(e.dataset.kick))});G("lobby-leave").addEventListener("click",()=>{Di(),G("lobby").hidden=!0,G("menu").hidden=!1});G("host").addEventListener("click",()=>{if(!Pa())return;Di(),Xi("Opening a room…"),xe=0;const n=gw(jg(),{open:e=>{Xi(""),G("menu").hidden=!0,G("lobby").hidden=!1,ef(n.seats,e)},seats:e=>ef(e,n.code),error:e=>{Xi(e),n.started||(Di(),G("lobby").hidden=!0,G("menu").hidden=!1)},cmd:(e,t)=>{N&&pn&&!xi&&$g(e,t)},left:e=>Et(`${N.names[e]} disconnected`,wt(e)),rejoin:e=>{n.sendTo(e,Kg(e)),Et(`${N.names[e]} is back`,wt(e))}});Dt={role:"host",room:n}});function Kg(n){return{t:"start",seed:Dt.seed,players:N.players,names:N.names,seat:n,paused:xi,aiDiffs:zl,system:N.system}}G("lobby-start").addEventListener("click",()=>{if(Dt?.role!=="host"||Zg.length<2)return;const n=Dt.room;n.start(),Dt.seed=Math.random()*2**31|0;const e=n.seats.map(i=>i.name),t=n.seats.map((i,s)=>[s,i]).filter(([,i])=>i.kind==="ai").map(([i,s])=>[i,s.difficulty]);Ra({seed:Dt.seed,players:n.seats.length,seat:0,names:e,aiSeats:t,mp:!0}),n.seats.forEach((i,s)=>{i.conn&&n.sendTo(s,Kg(s))})});function Qg(n){G("mp-buttons").hidden=n,G("join-row").hidden=!n,n&&G("code").focus()}G("join").addEventListener("click",()=>{Xi(""),Qg(!0)});G("join-back").addEventListener("click",()=>{Xi(""),Qg(!1)});G("code").addEventListener("keydown",n=>{n.key==="Enter"&&G("join-go").click()});G("devtoggle").addEventListener("click",()=>{ft.dev=!ft.dev,cs(),a0()});G("gfxtoggle").addEventListener("click",()=>{ft.gfx={auto:"high",high:"low",low:"auto"}[ft.gfx]||"auto",cs(),it.setQuality(i0()),tv()});const da=[[1,"Standard"],[1.2,"Large"],[1.4,"Larger"]];G("uitoggle").addEventListener("click",()=>{const n=da.findIndex(([e])=>e===ft.ui);ft.ui=da[(n+1)%da.length][0],cs(),ev()});function ev(){document.documentElement.style.setProperty("--ui-mult",ft.ui),G("uitoggle").textContent=`Text size: ${(da.find(([n])=>n===ft.ui)||da[0])[1]}`}ev();function tv(){G("gfxtoggle").textContent=`Graphics ${ft.gfx==="auto"?`auto (${i0()})`:ft.gfx}`}tv();function a0(){G("devtoggle").textContent=`Dev view ${ft.dev?"on":"off"}`,G("devbar").hidden=!ft.dev||Dt!==null||!N}a0();function nv(){G("devbar").hidden=!1;const n=z.devAs===void 0?xe:z.devAs,e=[...Array.from({length:N.players},(t,i)=>[i,_i(i)]),["all","All"]];Pn(G("devbar"),`<span>View as</span>${e.map(([t,i])=>`<button data-as="${t}" class="${String(n)===String(t)?"on":""}" style="${t==="all"?"":`color:${wt(t)}`}">${i}</button>`).join("")}<button data-w16="1">16×</button>`)}G("devbar").addEventListener("click",n=>{const e=n.target.closest("button");if(e&&!Dt){if(e.dataset.w16){c0(16);return}z.devAs=e.dataset.as==="all"?"all":Number(e.dataset.as),z.vis=z.devAs==="all"?null:xr(N,z.devAs),nv()}});G("learn").addEventListener("click",()=>{Pa()&&(Di(),Ra({seed:7,players:2,aiSeats:[[1,"cadet"]],system:"classic",training:!0}))});const iv=()=>{G("learn").className=ft.tutorialDone?"link":"primary ghost"};iv();G("howto").addEventListener("click",()=>{G("menu").hidden=!0,G("tutorial").hidden=!1});G("tut-close").addEventListener("click",()=>{G("tutorial").hidden=!0,G("menu").hidden=!1});G("lobby-code").addEventListener("click",async()=>{const n=G("lobby-code").textContent;if(!/^\w{5}$/.test(n))return;const e=G("lobby-hint"),t=e.textContent;try{await navigator.clipboard.writeText(n),e.textContent="Code copied"}catch{e.textContent="Long-press the code to copy it"}setTimeout(()=>{e.textContent=t},1800)});G("join-go").addEventListener("click",()=>{if(!Pa())return;const n=G("code").value.trim().toUpperCase();if(n.length!==5){Xi("Enter the 5-letter code");return}Di(),Xi("Connecting…"),Dt={role:"client",room:xw(n,jg(),ft.token,{message:t=>Sw(t),error:t=>{pn&&N?.mp||(Xi(t),Di(),G("lobby").hidden=!0,G("menu").hidden=!1)},closed:()=>{Dt&&(Di(),pn?(Et("Lost connection to the host","#ff7a4d"),pn=!1,setTimeout(()=>{G("menu").hidden=!1},1500)):(G("lobby").hidden=!0,G("menu").hidden=!1,Xi("The host closed the room")))}}),code:n}});function Sw(n){n.t==="lobby"?(xe=n.you,Xi(""),G("menu").hidden=!0,!pn&&G("end").hidden&&(G("lobby").hidden=!1),ef(n.seats,n.code)):n.t==="full"||n.t==="kicked"?(Xi(n.t==="kicked"?"The host removed you":n.why),Di(),G("lobby").hidden=!0,G("menu").hidden=!1):n.t==="start"?(Ra({seed:n.seed,players:n.players,seat:n.seat,names:n.names,aiDiffs:n.aiDiffs||[],mp:!0,system:n.system||"classic"}),xi=n.paused,yl()):n.t==="state"&&N&&pn?(f0=performance.now(),Rw(n.s)):n.t==="events"&&N&&pn?ov(n.list):n.t==="pause"&&(xi=n.paused,yl())}const ww=["crewBonus","owner","ships","guns","structures","sieges","queue","build","slips","vet","tf","fighting","totDef","totAtk","resting","restUntil","bonus","name","project","wonder"],Tw=n=>N.bodies.some(e=>e.owner===n||e.sieges.some(t=>t.owner===n))||N.fleets.some(e=>e.owner===n&&!e.probe),Ew=["owner","bonus","name","project","wonder"];function Aw(n=null){const e=n!==null&&Tw(n)?xr(N,n):null;return{time:N.time,winner:N.winner,credits:N.credits,tech:N.tech,fleets:(e?N.fleets.filter(t=>e.seesFleet(t)):N.fleets).map(t=>({...t,gs:null,legs:t.legs&&t.legs.map(i=>({...i,gs:null}))})),scans:e?(N.scans||[]).filter(t=>t.owner===n):N.scans,spies:e?(N.spies||[]).filter(t=>t.owner===n):N.spies,happenings:N.happenings,wonders:N.wonders,visit:N.visit,nextId:N.nextId,bodies:N.bodies.map(t=>e&&!e.bodies.has(t.id)?{...Object.fromEntries(Ew.map(i=>[i,t[i]])),hidden:!0}:Object.fromEntries(ww.map(i=>[i,t[i]]))),stats:N.winner!==null?N.stats:void 0}}const Cw={ships:0,guns:0,structures:[],sieges:[],queue:0,build:0,slips:[],vet:0,tf:null,fighting:!1,resting:0,restUntil:0};function Rw(n){const e=n.time-N.time;N.time=xi||Math.abs(e)>1.5?n.time:N.time+e*.5,N.credits=n.credits,N.tech=n.tech;const t=new Map(N.fleets.map(i=>[i.id,i]));N.fleets=n.fleets.map(i=>{const s=t.get(i.id);return s&&s.t0===i.t0&&s.T===i.T&&(i.gs=s.gs,i.legs&&s.legs&&i.legs.forEach((r,o)=>{r.gs=s.legs[o]&&s.legs[o].gs})),Wp(N,i)}),N.scans=n.scans,N.spies=n.spies,N.happenings=n.happenings,N.wonders=n.wonders,N.visit=n.visit,N.nextId=n.nextId,n.bodies.forEach((i,s)=>{const r=N.bodies[s];if(i.hidden){Object.assign(r,i,Cw);return}const o=of||r.hidden,a=o?0:(r.lostDef||0)+Math.max(0,(i.totDef||0)-(r.totDef||0)),c=o?0:(r.lostAtk||0)+Math.max(0,(i.totAtk||0)-(r.totAtk||0)),l=!o&&(r.captured||i.owner!==r.owner);Object.assign(r,i,{lostDef:a,lostAtk:c,captured:l,hidden:!1})}),of=!1,n.stats&&(N.stats=n.stats),n.winner!==null&&(N.winner=n.winner)}function c0(n){Zs=n,G("warp").textContent=`${Zs===.5?"½":Zs}×`}G("warp").addEventListener("click",()=>c0(Vc[(Vc.indexOf(Zs)+1)%Vc.length]));function sv(){z.selected=z.target=z.peek=z.fleet=null,z.mode=null,G("research").hidden=!0,Xt()}function rv(){sv(),it.orbit.follow=null,it.orbit.fleet=null,it.orbit.target.set(0,0,0),it.orbit.vaz=it.orbit.vpol=0,it.orbit.pol=.9,it.orbit.goalDist=650*as(N)}G("system").addEventListener("click",rv);function Bl(){const n=z.fleet!==null&&N?N.fleets.find(l=>l.id===z.fleet):null;if(n||(z.fleet=null),G("fleet").hidden=!n||!pn||z.selected!==null||!G("research").hidden,G("fleet").hidden)return;const e=Nn(n,N.time),t=n.T-(N.time-n.t0),i=n.dark&&!e.burning?nn(`${At("dark")} coasting dark`,"Drive off: enemies only spot this fleet close in","dim"):e.flipping?"flipping":e.burning?e.phase===1?"burning":"braking":"coasting",s=N.bodies[n.to],r=Math.hypot(e.vx,e.vy,e.vz);if(n.probe){G("fdark").hidden=!0,Pn(G("fleetText"),`${At("probe")} <b>Probe</b> → <b>${s.name}</b> · <b>${Ft(t)}</b>`);return}const o=n.owner===xe&&!n.probe&&!N.fuel&&t>10;G("fdark").hidden=!o,o&&(G("fdark").classList.toggle("on",!!n.dark),Pn(G("fdark"),`${At("dark")} ${n.dark?"Light up":"Go dark"}`),G("fdark").title=n.dark?"Light the drive: burn the rest of the way (sooner, easy to spot)":"Go dark: cut the drive and coast (later, hard to spot)");const a="",c=ft.dev&&!Dt?`<br><span class="dim">seen by ${N.names,""}${Array.from({length:N.players},(l,u)=>u).filter(l=>l!==n.owner).map(l=>`<span style="color:${wt(l)}">${_i(l)} ${xr(N,l).seesFleet(n)?"✓":"✗"}</span>`).join(" · ")}</span>`:"";Pn(G("fleetText"),`<b>${gs(n.name)}</b>${Ln(n.vet)?` <span class="vet">${rf(n.vet)}</span>`:""} · <b>${n.n}</b> → <b>${s.name}</b><br><span class="dim">${i}</span> · arrive in <b>${Ft(t)}</b>${n.assist!==void 0?` ${nn(At("assist"),`Gravity assist via ${N.bodies[n.assist].name}`,"assist")}`:""}${n.detour?` ${nn("round the sun","Steering round the sun: a turn beside it, then on to the target","dim")}`:""} ${nn(`${Math.round(e.progress*100)}%`,`${r.toFixed(2)} units/s`,"dim")}${a}${c}`)}G("fdark").addEventListener("click",()=>{const n=N.fleets.find(t=>t.id===z.fleet),e=n&&!n.dark;n&&rs({type:"dark",f:n.id,on:e})&&Et(`${gs(n.name)} ${e?"running dark":"drive lit"}`,wt(xe),"dark"),Bl()});function Pw(){const n=z.peek!==null&&N&&pn&&z.selected===null&&z.fleet===null?N.bodies[z.peek]:null;if(G("peek").hidden=!n,!n)return;const e=!z.vis||z.vis.bodies.has(n.id),t=n.visitor?N.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="planet"&&n.giant?"Gas giant":n.kind[0].toUpperCase()+n.kind.slice(1),i=n.owner===Ve?"Independent":_i(n.owner),s=n.structures.filter(o=>o.left<=0||o.next).map(o=>`${Se.structures[o.type].name}${Se.structures[o.type].maxLevel?` ${fa[o.level]}`:""}`),r=e?`${At("fleet")} <b>${n.ships}</b> ship${n.ships===1?"":"s"} · ${At("guns")} <b>${Math.ceil(n.guns)}</b> gun${Math.ceil(n.guns)===1?"":"s"}${s.length?` · ${s.join(", ")}`:""}`:nn("Defences unknown","Out of sensor range: send a probe or get a world nearby to see it");Pn(G("peek"),`<div class="head"><span class="tag">${t}</span><b>${n.name}</b><span class="grow"></span><span class="tag" style="color:${n.owner===Ve?"var(--dim)":wt(n.owner)}">${i}</span></div><div class="row2">${r}</div>${tf(n,{income:!1,seen:e})}${Dw(n)}`)}const Lw=()=>window.innerWidth<760;function Iw(){const n={worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};let e=0;for(const o of N.bodies){if(o.owner!==xe)continue;e+=1;const a=Np(o,N);for(const c in n)n[c]+=a[c]}const t=(N.spies||[]).filter(o=>o.owner===xe&&o.since<=N.time).reduce((o,a)=>o+ho(N.bodies[a.body],N)*wi.skim,0),i=(N.happenings||[]).some(o=>o.kind==="comet"&&o.holder===xe&&N.time>=o.starts)?_s.comet.pay:0,s=[[`${e} world${e===1?"":"s"}`,n.worlds],["Mines",n.mines],["Gas harvesters",n.skimmers],["Exchanges",n.exchanges],["Bonuses and wonders",n.bonuses],["Agents",t],["Comet mining",i]],r=xa(N,xe);return s.filter(([,o])=>o>.001).map(([o,a])=>`${o}  +${a.toFixed(1)}/s`).concat(r>.001?[`Fleet upkeep (ships beyond ${Se.upkeep.free})  −${r.toFixed(1)}/s`]:[]).join(`
`)}function Dw(n){if(n.owner===Ve||n.owner===xe||n.visitor||Hs)return"";const e=(N.spies||[]).find(i=>i.owner===xe&&i.body===n.id);if(e&&e.since>N.time)return`<div class="spy">${At("spy")} ${nn(`Recruiting · ${Ft(e.since-N.time)}`,"Finding someone on the inside: they start work once recruited")}</div>`;if(e){const i=pf(N,n)*60,s=i<.25?"low":i<.5?"rising":"high";return`<div class="spy">${At("spy")} ${nn(`Agent in place · ${Ft(N.time-e.since)}`,"Shows you this world and its launches, skims its income and slows any megaproject here")}<span class="grow"></span>${nn(`risk ${s}`,"Each minute there's a chance the agent is caught. Their Intel and a security bureau nearby raise it",s==="high"?"warn":"dim")}</div>`}const t=hf(N,xe,n);return t==="needs Signals intercept"?`<div class="spy dim">${At("spy")} Agents need Signals intercept (Intel I)</div>`:`<div class="spy">${At("spy")} <span class="dim">${t||"No agent here"}</span><span class="grow"></span><button data-spy="${n.id}" ${t?"disabled":""} title="Recruit an agent there (${Ft(wi.travel)} to get in place)">Recruit agent<small>${wi.cost}</small></button></div>`}G("peek").addEventListener("click",n=>{const e=n.target.closest("button[data-spy]");if(!e)return;const t=N.bodies[+e.dataset.spy];rs({type:"spy",b:t.id})&&Et(`Recruiting an agent on ${t.name}`,wt(xe),"spy"),Xt()});G("hintCancel").addEventListener("click",()=>{z.mode=null,z.target=null,Xt()});function Xt(){if(G("hint").hidden=z.mode!=="project",z.mode==="project"){const r=vn[z.projKey];Pn(G("hintText"),`${At(z.projKey)} Tap a world for the <b>${r.name}</b><small>${r.where==="giant"?"Gas giants only":r.where==="inner"?"Innermost planet only":r.where==="planet"?"Planets only":"Any world of yours"} · they're ringed in violet</small>`)}Bl(),Pw();const n=z.selected!==null&&N?N.bodies[z.selected]:null,e=!!n&&n.owner===xe&&pn;if(G("actions").hidden=!e,!e){z.preview=null,z.mode!=="project"&&(z.mode=null);return}if(z.mode==="projconfirm"){const r=vn[z.projKey],o=bo(N,n,z.projKey);G("actions").classList.add("launching"),G("buildrow").hidden=G("stepper").hidden=G("dark").hidden=!0,G("cancel").hidden=!1,Pn(G("info"),`<span>${At(z.projKey)} Build the <b>${r.name}</b> at <b>${n.name}</b> · <b>${r.cost}</b> · ${Ft(r.time/$c(N,xe))}${o?` · <span class="warn">${o}</span>`:""}</span><small class="dim" style="flex-basis:100%">${r.text}. Only one empire can finish it; if a rival gets there first you get half back.</small>`),G("launch").textContent="Confirm",G("launch").disabled=!!o;return}!n.ships&&z.mode==="launch"&&(z.mode=null);const t=Ys(N,n);z.mode==="probe"&&!Tl(n)&&(z.mode=null);const i=z.mode==="probe";z.count=t?Math.max(1,Math.min(t,Math.round(t*ft.pct/100))):0,Pn(G("count"),`${z.count}<small>${ft.pct}%</small>`),G("count").title=`${z.count} of ${t} ready ships (${ft.pct}%). Tap: all, half, a quarter`,Number(G("pct").value)!==ft.pct&&(G("pct").value=ft.pct),G("pct").style.setProperty("--fill",`${ft.pct}%`);const s=z.mode==="launch"||i;if(G("actions").classList.toggle("launching",s),G("buildrow").hidden=s,G("stepper").hidden=!s||i,G("cancel").hidden=!s,G("dark").hidden=!s||i||N.fuel,G("dark").classList.toggle("on",z.dark),s)if(z.target===null)z.preview=null,Pn(G("info"),`<span class="tag">${i?"Probe from":"Launch from"}</span><b>${n.name}</b><span class="grow"></span><span class="tag">tap a destination</span>`),G("launch").textContent="Confirm",G("launch").disabled=!0;else{const r=N.bodies[z.target],o=`${n.id}:${r.id}:${i}:${z.dark}:${n.owner}`;if((!z.preview||z.previewKey!==o||Math.abs(N.time-z.previewAt)>(N.fuel?3:1))&&(z.preview=So(N,n,r,N.time,i?Se.probe.speed:1,!1,!i&&z.dark?Sl.burn:.5,df(N,xe)*(i?Se.fuel.probe:1)),z.previewKey=o,z.previewAt=N.time),z.preview.out){const b=z.preview.window===null?null:z.preview.window-(N.time-z.previewAt);Pn(G("info"),`<span>${i?"Probe":`<b>${z.count}</b>`} → <b>${r.name}</b> · ${nn("out of reach","Too far for one tank of fuel from here, now. As the worlds move, a launch window opens","warn")}${b!==null?` · window in <b>${Ft(Math.max(1,Math.ceil(b)))}</b>`:""}</span>`),G("launch").textContent="Confirm",G("launch").disabled=!0;return}const a=z.preview.fuel!==void 0?` ${nn(`<span class="fuel${z.preview.fuel>.85?" low":""}"><i style="width:${Math.round(z.preview.fuel*100)}%"></i></span>`,"Fuel this route burns, of one tank (each world you hold refuels you). Waiting for the worlds to line up can cost less","dim")}`:"",c=r.owner===xe?"reinforce":`${r.ships} ship${r.ships===1?"":"s"}, ${Math.ceil(r.guns)} gun${Math.ceil(r.guns)===1?"":"s"}`,l=r.owner===xe?0:wo(N,r),u=!z.vis||z.vis.bodies.has(r.id),f=u?l?`${c} ${nn(`+${l.toFixed(1)}`,`Cover from ${tl(N,r).map(b=>b.from.name).join(", ")}`)}`:c:"unknown",d=(z.preview.assist!==void 0?` ${nn(At("assist"),`Gravity assist via ${N.bodies[z.preview.assist].name}: its pull speeds the route`,"assist")}`:"")+(z.preview.detour?` ${nn("round the sun","The straight line would cross the sun: the fleet steers round it under full thrust","dim")}`:"");if(i){const b=Sf(N,n,r);Pn(G("info"),`<span>Probe → <b>${r.name}</b> · <b>${Ft(z.preview.T)}</b>${a}${b?` · <span class="dim">${b}</span>`:""}</span>`),G("launch").textContent="Confirm",G("launch").disabled=!!b;return}const h=bf(N,n),g=h?` ${nn(`+${h} in ${Ft(Math.ceil(n.restUntil-N.time))}`,`${h} ship${h===1?"":"s"} just arrived and can launch in ${Ft(Math.ceil(n.restUntil-N.time))}`,"dim")}`:"",x=mf(N,r),m=z.preview.T>x-5,p=Number.isFinite(x)?` · <span class="${m?"warn":"dim"}">${m?"too late":`leaves ${Ft(x)}`}</span>`:"",v=n.sieges.length?` · <span class="warn">${nn("breaking out","This world is under attack: half the ships launched will be shot down leaving orbit","warn")}</span>`:"";Pn(G("info"),`<span><b>${z.count}</b>${v} → <b>${r.name}</b> <span class="dim">${f}</span> · <b>${Ft(z.preview.T)}</b>${a}${z.dark?` ${nn("dark","Running dark: enemies only spot this fleet close in","dim")}`:""}${d}${g}${p}</span>${tf(r,{income:!1,seen:u})}`),G("launch").textContent="Confirm",G("launch").disabled=t<1||m}else{z.preview=null,z.target=null;const r=n.visitor?N.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="station"?"Station":n.kind[0].toUpperCase()+n.kind.slice(1);Pn(G("info"),`<span class="tag">${r}</span><b>${n.name}</b><span class="grow"></span>${n.ships?`${n.tf?`<span class="tag">TF ${n.tf}</span>`:""}<span class="num">${n.ships}</span><span class="tag">ship${n.ships===1?"":"s"}</span>`:'<span class="tag">no ships</span>'}`+tf(n));const o=n.ships&&!t?Math.ceil(n.restUntil-N.time):0;G("launch").textContent=o?`Ready in ${Ft(o)}`:"Launch",G("launch").disabled=t<1,kw(n)}}const fa=["","I","II","III"],Ml=n=>String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),nn=(n,e,t="")=>`<span class="chip${t?` ${t}`:""}" tabindex="0" data-tip="${Ml(e)}">${n}</span>`;function tf(n,{income:e=!0,seen:t=!0}={}){const i=[];if(e&&n.owner!==Ve){const s=ho(n,N),r=Se.income[n.kind]*(n.star?1.5:1),o=s-r;i.push(nn(`<b class="pos">+${s.toFixed(1)}/s</b>`,`Income: ${n.home?"homeworld":n.kind} ${r.toFixed(1)}${o>.001?` + ${o.toFixed(1)} from structures and bonuses`:""} per second`))}if(t){const s=tl(N,n),r=N.bodies.filter(l=>l!==n&&tl(N,l).some(u=>u.from===n)),o=Math.ceil(n.guns),a=s.reduce((l,u)=>l+u.n,0),c=[`${o} gun${o===1?"":"s"} here`];for(const l of s)c.push(`+${l.n.toFixed(1)} from ${l.from.name}`);r.length&&c.push(`these guns also help defend ${r.map(l=>l.name).join(", ")} (${n.parent===null?"half":"quarter"} strength)`),(n.owner!==Ve||o)&&i.push(nn(`${At("guns")} ${o}${a?` <span class="pos">+${a.toFixed(1)}</span>`:""}`,c.join(" · ")))}if(N.crew&&t&&n.owner!==Ve&&Tc(n)&&i.push(nn(`Crew ${Tc(n)}`,`Crew: this world fields ${Tc(n)} toward its owner's crew cap (Habitats and a refugee convoy add more)`)),n.owner===xe&&!n.visitor){const s=pf(N,n)*60,r=s<.25?"low":s<.5?"medium":"high";i.push(nn(`Security ${r}`,`Security ${r}: an enemy agent here has about a ${Math.round(Math.min(1,s)*100)}% chance a minute of being caught. A security bureau here or nearby, and Intel research, raise it`,r==="high"?"pos":"dim"))}if(n.owner!==Ve&&n.perk!=="fortress"&&vf(N,n)){const s=N.bodies.find(r=>r.perk==="fortress"&&r.owner===n.owner&&In(vt(N,r,N.time),vt(N,n,N.time))<=io(N,"fortress"));i.push(nn(`${At("fortress")} +1 gun`,`Covered by the ${yn.fortress.name}${s?` at ${s.name}`:""}: +1 gun here while it's inside the ring`,"gold"))}if(n.owner!==Ve&&n.perk!=="depot"&&Vp(N,n)>1&&i.push(nn(`${At("depot")} +20% speed`,`A ${yn.depot.name} nearby: fleets launched from here fly ${Math.round((yn.depot.boost-1)*100)}% faster`,"gold")),n.owner!==Ve&&n.perk!=="relay"&&N.bodies.some(s=>s.perk==="relay"&&s.owner===n.owner&&In(vt(N,s,N.time),vt(N,n,N.time))<=io(N,"relay"))&&i.push(nn(`${At("relay")} watched`,`Inside your ${yn.relay.name}'s ring: everything around here is in view`,"gold")),n.perk){const s=yn[n.perk];let r="";if(s.range&&n.perk==="relay")r=" (dashed ring)";else if(s.range){const o=vt(N,n,N.time),a=N.bodies.filter(c=>c.owner===xe&&c!==n&&In(vt(N,c,N.time),o)<=io(N,n.perk)).map(c=>c.name);r=` (dashed ring). ${a.length?`Yours inside now: ${a.join(", ")}`:"None of yours inside now"}`}i.push(nn(`${At(n.perk)} ${s.name}`,`${s.text}${r}`,"gold"))}n.wonder&&i.push(nn(`${At(n.wonder)} ${vn[n.wonder].name}`,vn[n.wonder].text,"gold")),n.project&&i.push(nn(`${At(n.project.key)} ${Math.floor((1-n.project.left/vn[n.project.key].time)*100)}%`,`Building the ${vn[n.project.key].name}: ${vn[n.project.key].text}. Take the world and it's yours.`,"gold"));for(const s of N.happenings||[]){if(s.at!==n.id)continue;const r=_s[s.kind],o=N.time<s.starts,a=!o&&s.holder!==Ve,c=o?`starts in ${Ft(s.starts-N.time)}`:a?`${s.holder===xe?"you hold it":`${_i(s.holder)} holds it`}: ${Ft(Math.max(0,r.hold-s.held))} to go`:`gone in ${Ft(Math.max(0,s.ends-N.time))}`;i.push(nn(`${At(s.kind)} ${r.name}`,`${Sv(N,s.kind)}. Hold it for ${Ft(r.hold)} without a fight. Now: ${c}`,"gold"))}return i.length?`<div class="chips">${i.join("")}</div>`:""}function Uw(n,e,t){const i=1+.15*N.tech[xe].industry,s=t&&t.perk&&yn[t.perk].fits===n;return n==="mine"?`+${(Se.mineIncome*e*i*(s?2:1)).toFixed(1)}/s`:Se.structures[n].income?`+${(Se.structures[n].income*e).toFixed(1)}/s`:n==="defence"?`${Math.round(Se.gunsPerDefence*e*(s?1.5:1))} guns`:n==="bureau"?`${e===1?"2.5":"4"}× catch`:n==="lab"?`+${Math.round(Se.labSpeed*e*(s?2:1)*100)}% research`:n==="habitat"?`+${Se.crew.habitat*e} crew`:""}const gp={bureau:"Security",shipyard:"Yard",mine:"Mine",defence:"Guns",lab:"Lab",skimmer:"Gas rig",exchange:"Exchange",habitat:"Habitat"},hr=n=>`${Math.max(0,Math.min(100,Math.floor(n*100)))}%`;function vp(n){return n.scrap?1-n.scrap/Se.scrapTime:n.next?1-n.left/El({...n,level:n.next-1}):n.left>0?1-n.left/Se.structures[n.type].time:null}function kw(n){const e=kp(n);z.slot!==null&&z.slot>=e&&(z.slot=null);const t=[];for(let r=0;r<e;r++){const o=n.structures[r],a=z.slot===r?" on":"";if(!o){t.push(`<button class="cell empty${a}" data-slot="${r}"><span>+</span></button>`);continue}const c=Se.structures[o.type],l=vp(o),u=c.maxLevel?`<i class="pips">${"▮".repeat(o.level)}${"▯".repeat(c.maxLevel-o.level)}</i>`:"",f=l===null?"":`<i class="prog" style="width:${hr(l)}"></i>`,d=l!==null&&!o.scrap?`<i class="pips">${Ft(o.left/to(N,xe,n))}</i>`:u;t.push(`<button class="cell${l===null?"":" busy"}${a}" data-slot="${r}"><b>${gp[o.type]}</b>${d}${f}</button>`)}let i=`<div class="cells">${t.join("")}</div>`;if(z.slot!==null){const r=n.structures[z.slot];let o="";if(!r)o=["shipyard","mine","skimmer","exchange","defence","lab","bureau","habitat"].map(a=>{const c=Jc(N,n,a);if(c&&c!=="not enough credits")return"";const l=Se.structures[a],u=n.perk&&yn[n.perk].fits===a,f=`${l.name}: ${l.desc}${u?` · boosted by the ${yn[n.perk].name}`:""}`;return`<button class="opt${u?" fit":""}" data-b="${a}" data-hold="${Ml(f)}" title="${Ml(f)}" ${c?"disabled":""}>${gp[a]}<small>${l.cost} · ${Ft(l.time/to(N,xe,n))}</small></button>`}).join("");else{const a=Se.structures[r.type],c=vp(r),l=r.scrap?`scrapping · ${hr(c)}`:r.next?`upgrading → ${fa[r.next]} · ${hr(c)}`:r.left>0?`building · ${hr(c)}`:a.maxLevel?`level ${fa[r.level]}`:"online",u=ra(N,n,r),f=xf(N,n,r);if(o=`<span class="what" title="${a.desc}">${a.name} · ${l}</span><button class="danger" data-d="${z.slot}" ${f?"disabled":""}>Scrap<small>+${Ec(r)}</small></button>`,a.maxLevel){const d=[];for(let h=1;h<=a.maxLevel;h++){const g=h===1?a.cost:qs({type:r.type,level:h-1}),x=h<=r.level?"done":h===r.next?"now":h>r.level+1||r.next?"later":"",m=h===r.level+1&&!r.next&&(!u||u==="not enough credits"),p=m?`button data-u="${z.slot}" ${u?"disabled":""}`:"span",v=h<=r.level?"✓":h===r.next?Ft(r.left/to(N,xe,n)):m?`Upgrade · ${g} · ${Ft(El({type:r.type,level:h-1})/to(N,xe,n))}`:g;d.push(`<${p} class="lv ${x}${m?" next":""}"><b>${fa[h]}</b> ${Uw(r.type,h,n)}<small>${v}</small></${p.split(" ")[0]}>`)}o+=`<div class="ladder">${d.join("")}</div>`}}i+=`<div class="ctx">${o}</div>`}const s=Tl(n);if(s){const r=Kc(N,n),a=Array.from({length:s},(l,u)=>n.slips&&n.slips[u]!==void 0?n.slips[u]:0).map(l=>`<i class="meter"><i style="width:${hr(l)}"></i></i>`).join(""),c=n.queue&&n.slips&&n.slips.length?Ft((1-Math.max(...n.slips))*L0(N,n)):"";i+=`<div class="ctx ships"><span class="what">${n.queue?`Queue <b class="num">${n.queue}</b>`:`${s} yard${s===1?"":"s"} idle`}<span class="bars">${a}</span><span class="dim">${c}</span></span></div><div class="ctx shipbtns"><button data-b="ship" title="${r==="no crew to spare"?"No crew to spare: take more worlds or build a Habitat":`Order a ship (${Se.ship.time}s per yard)`}" ${r?"disabled":""}>+ Ship<small>${r==="no crew to spare"?"no crew":`${Se.ship.cost} · ${Ft(L0(N,n))}`}</small></button><button data-cancel="1" class="danger" title="Cancel the last queued ship" ${n.queue?"":"disabled"}>${At("close")}<small>+${Math.round(Se.ship.cost*Se.cancelRefund)}</small></button><button class="mini" data-probe="1" ${N.credits[xe]<Se.probe.cost?"disabled":""} title="Probe: fast one-way flyby that reveals a world">Probe<small>${Se.probe.cost}</small></button></div>`}Pn(G("buildrow"),i)}G("buildrow").addEventListener("click",n=>{if(z.selected===null)return;const e=N.bodies[z.selected],t=n.target.closest("button[data-slot]");if(t){z.pick=null;const c=Number(t.dataset.slot);z.slot=z.slot===c?null:c,Xt();return}if(n.target.closest("button[data-probe]")){z.mode="probe",z.target=null,z.slot=null,Xt();return}if(n.target.closest("button[data-cancel]")){rs({type:"cancel",b:e.id})&&Et("Ship build cancelled",wt(xe)),Xt();return}const i=n.target.closest("button[data-u]");if(i){const c=e.structures[Number(i.dataset.u)];c&&rs({type:"upgrade",b:e.id,i:Number(i.dataset.u)})&&Et(`Upgrading ${Se.structures[c.type].name} to ${fa[c.level+1]} · ${Math.round(El(c))}s`,wt(xe)),Xt();return}const s=n.target.closest("button[data-d]");if(s){const c=e.structures[Number(s.dataset.d)];c&&rs({type:"demolish",b:e.id,i:Number(s.dataset.d)})&&Et(`Scrapping ${Se.structures[c.type].name} at ${e.name}`,wt(xe)),z.slot=null,Xt();return}const r=n.target.closest("button[data-b]");if(!r)return;const o=r.dataset.b;if(Aa){Aa=!1;return}rs(o==="ship"?{type:"ship",b:e.id}:{type:"build",b:e.id,k:o})&&(Et(o==="ship"?`Ship ordered at ${e.name}`:`${Se.structures[o].name} under construction at ${e.name}`,wt(xe)),o!=="ship"&&(z.slot=null)),Xt()});const Hu=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]],Nw={ansible:"Signals",targeting:"Targeting",kinetic:"Kinetic",torch:"Torch",hardened:"Hardened",pdnet:"PD net"};function Fw(){const e=([c,l])=>[45*c,30*Math.sqrt(3)*(l+c/2)],t=(c,l,u=28)=>Array.from({length:6},(f,d)=>`${(c+u*Math.cos(Math.PI/3*d)).toFixed(1)},${(l+u*Math.sin(Math.PI/3*d)).toFixed(1)}`).join(" "),i=[];qu.forEach((c,l)=>{const[u,f]=e(Hu[l]);i.push({key:c,cx:u,cy:f,branch:!0});const d=Hu[l],h=Hu[(l+1)%6],g=Object.keys(Xn).find(p=>Xn[p].needs.includes(c)&&Xn[p].needs.includes(qu[(l+1)%6])),[x,m]=e([d[0]+h[0],d[1]+h[1]]);i.push({key:g,cx:x,cy:m})});const s=N.tech[xe],r=s.project,o=[`<title>One project at a time. A joint tech needs both neighbours at II. Research stations speed everything up.</title><polygon points="${t(0,0)}" class="hx core"/><text x="0" y="-2" class="hl">R&amp;D</text><text x="0" y="11" class="hs">×${Ca(N,xe).toFixed(1)}</text>`];for(const c of i){const l=s[c.key]||0,u=c.branch?ui[c.key].cost.length:1,f=ga(N,xe,c.key),d=l>=u?"done":r&&r.key===c.key?"run":f==="locked"?"locked":N.credits[xe]<Js(N,xe,c.key).cost?"open poor":"open",h=z.techSel===c.key?" sel":"",g=c.branch?Array.from({length:u},(x,m)=>`<circle cx="${(m-(u-1)/2)*6}" cy="17" r="1.8" class="${m<l?"on":""}"/>`).join(""):"";o.push(`<g data-hex="${c.key}" transform="translate(${c.cx.toFixed(1)},${c.cy.toFixed(1)})" class="hexc ${d}${h}"><polygon points="${t(0,0)}" class="hx"/>`+(()=>{const x=Mp(c.key);return`<svg x="-8" y="-17" width="16" height="16" viewBox="${x.vb}" class="ic${x.lu?" lu":""}">${x.body}</svg>`})()+`<text x="0" y="9" class="hl">${c.branch?ui[c.key].name:Nw[c.key]}</text>${g}</g>`)}const a=Object.keys(vn).map(c=>{const l=vn[c].needs,u=N.wonders&&N.wonders[c]!==void 0?N.bodies[N.wonders[c]]:null,f=N.bodies.some(g=>g.owner===xe&&g.project&&g.project.key===c),d=u?u.owner===xe?"done":"taken":f?"run":s[l]?N.credits[xe]<vn[c].cost?"poor":"open":"locked",h=z.techSel===`mega:${c}`?" sel":"";return`<button data-hex="mega:${c}" class="mtile ${d}${h}" title="${Ml(vn[c].name)}">${At(c)}</button>`}).join("");return`<svg class="board" viewBox="-124 -114 248 228">${o.join("")}</svg><div class="megarow"><span>Megaprojects</span>${a}</div>`}function Ow(n){const e=N.tech[xe],t=e.project,i=Xn[n],s=Js(N,xe,n),r=ga(N,xe,n),o=e[n]||0,a=i?i.name:ui[n].name,c=i?o?[i.text]:[]:ui[n].levels.slice(0,o).map((u,f)=>`${u}: ${Tp(N,n,f)}`);let l=c.length?`<div class="have">${c.map(u=>`<div>${At("star")} ${u}</div>`).join("")}</div>`:"";if(!s)l+='<small class="dim">Complete</small>';else if(t&&t.key===n)l+=`<small>Researching ${s.title} · ${Math.floor((1-t.left/t.total)*100)}%</small>`;else{const u=i&&r==="locked"?`<small class="dim">Needs ${i.needs.map(f=>`${ui[f].name} II`).join(" and ")}</small>`:"";l+=`<div class="nextrow"><span>${i?"":`<b>${s.title}</b>`}<small>${s.text} · ${Ft(s.time/Ca(N,xe))}</small>${u}</span><button data-k="${n}" ${r?"disabled":""}>Research<small>${s.cost}</small></button></div>`}if(i){const u=Object.keys(vn).find(f=>vn[f].needs===n);u&&(l+=`<small class="dim unlocks">Unlocks ${At(u)} ${vn[u].name}</small>`)}return`<div class="tdetail"><div class="th">${At(n)} <b>${a}</b></div>${l}</div>`}function zw(n){const e=Object.keys(vn).find(u=>vn[u].needs===n);if(!e)return"";const t=vn[e],i=`<div class="mega"><div class="th">${At(e)} <b>${t.name}</b> <span class="dim">megaproject</span></div><small>${t.text}</small><small class="dim">${t.where==="giant"?"Gas giants only":t.where==="inner"?"Innermost planet only":t.where==="planet"?"Planets only":"Any world of yours"} · one per world · only one empire can finish it</small>`,s=N.wonders&&N.wonders[e]!==void 0?N.bodies[N.wonders[e]]:null;if(s)return`${i}<small>${s.owner===xe?"Yours":`Built by ${_i(s.owner)}`}, at ${s.name}</small></div>`;const r=N.bodies.find(u=>u.owner===xe&&u.project&&u.project.key===e),o=N.bodies.filter(u=>u.owner!==xe&&u.project&&u.project.key===e).length,a=o?`<small class="warn">${o} rival${o===1?"":"s"} building it</small>`:"";if(r)return`${i}${a}<div class="nextrow"><span><small>At ${r.name} · ${Ft(r.project.left/$c(N,xe))} left · research stations speed it up (half as much as research)</small><i class="meter"><i style="width:${hr(1-r.project.left/t.time)}"></i></i></span></div></div>`;const c=N.tech[xe][n],l=N.bodies.filter(u=>u.owner===xe&&!bo(N,u,e));return`${i}${a}<div class="nextrow"><span><small>${c?l.length?Ft(t.time/$c(N,xe)):"No world of yours can take it yet":`Needs ${Xn[n].name}${N.tech[xe][Xn[n].needs[0]]<2||N.tech[xe][Xn[n].needs[1]]<2?` (after ${Xn[n].needs.map(u=>`${ui[u].name} II`).join(" and ")})`:""}`}</small></span><button data-mega="${e}" ${c&&l.length?"":"disabled"}>Build<small>${t.cost}</small></button></div></div>`}function Gl(){const e=N.tech[xe].project;if(G("rbar").hidden=!0,G("rnd").hidden=!pn||Hs||z.mode==="project"||!G("menu").hidden||!G("end").hidden||!G("research").hidden||Lw()&&(!G("actions").hidden||!G("peek").hidden||!G("fleet").hidden),G("rnd").classList.toggle("idle",!e),Pn(G("rndsub"),e?`${ui[e.key]?ui[e.key].name:Xn[e.key].name} · ${Ft(e.left/Ca(N,xe))}`:"idle"),G("rndbar").style.width=e?hr(1-e.left/e.total):"0%",G("research").hidden)return;G("rstatus").textContent="",z.techSel||(z.techSel=e?e.key:qu.find(i=>Js(N,xe,i))||"ansible");const t=z.techSel;Pn(G("rlist"),Fw()+(t.startsWith("mega:")?`<div class="tdetail">${zw(vn[t.slice(5)].needs)}</div>`:Ow(t)))}G("rlist").addEventListener("click",n=>{const e=n.target.closest("[data-hex]");if(e){z.techSel=e.dataset.hex,Gl();return}const t=n.target.closest("button[data-mega]");t&&(z.mode="project",z.projKey=t.dataset.mega,z.selected=z.target=null,G("research").hidden=!0,Xt())});G("rnd").addEventListener("click",()=>{G("research").hidden=!G("research").hidden,z.selected=z.target=null,Xt(),Gl()});G("rclose").addEventListener("click",()=>{G("research").hidden=!0});const Bw=n=>{G("research").hidden||n.target.closest("#research, #rnd")||(G("research").hidden=!0,Bl())};for(const n of["pointerdown","touchstart","mousedown"])document.addEventListener(n,Bw,{capture:!0,passive:!0});G("rlist").addEventListener("click",n=>{const e=n.target.closest("button[data-k]");if(!e)return;const t=bp(e.dataset.k,(N.tech[xe][e.dataset.k]||0)+1);rs({type:"research",k:e.dataset.k})&&(Et(`Researching ${t}`,wt(xe)),G("research").hidden=!0),Gl()});G("pct").addEventListener("input",()=>{ft.pct=Number(G("pct").value),cs(),Xt()});G("count").addEventListener("click",()=>{ft.pct=ft.pct===100?50:ft.pct===50?25:100,cs(),Xt()});G("launch").addEventListener("click",()=>{if(!z.mode){z.mode="launch",z.target=null,Xt();return}Gw()});G("dark").addEventListener("click",()=>{z.dark=!z.dark,Xt()});G("cancel").addEventListener("click",()=>{z.dark=!1,z.mode=null,z.target=null,Xt()});G("focus").addEventListener("click",()=>{const n=z.target??z.selected;n!==null&&it.focus(N,n),Xt()});function Gw(){if(z.mode==="projconfirm"&&z.selected!==null){const n=N.bodies[z.selected];rs({type:"project",b:n.id,k:z.projKey})&&Et(`${vn[z.projKey].name} begun at ${n.name}`,wt(xe),z.projKey),z.mode=null,Xt();return}if(!(z.selected===null||z.target===null)){if(z.mode==="probe"){const n=N.bodies[z.target];rs({type:"probe",b:z.selected,to:z.target})&&Et(`Probe away to ${n.name}`,wt(xe)),z.mode=null,z.selected=z.target=null,Xt();return}z.count<1||(rs({type:"launch",b:z.selected,to:z.target,n:z.count,dark:z.dark}),z.dark=!1,z.mode=null,z.selected=z.target=null,Xt())}}let Ia=matchMedia("(pointer: coarse)").matches;window.addEventListener("pointerdown",n=>{Ia=n.pointerType!=="mouse"},!0);const Vi=document.createElement("div");Vi.id="tipbox";Vi.hidden=!0;document.body.appendChild(Vi);let Vl=null;function l0(n,e=n.dataset.tip){Vl=n,Vi.textContent=e,Vi.hidden=!1;const t=n.getBoundingClientRect(),i=Math.min(280,window.innerWidth-24);Vi.style.maxWidth=`${i}px`;const s=Vi.offsetWidth,r=Vi.offsetHeight,o=Math.max(12,Math.min(window.innerWidth-s-12,t.left+t.width/2-s/2)),a=t.top-r-8;Vi.style.left=`${o}px`,Vi.style.top=`${a>8?a:t.bottom+8}px`}function nf(){Vl=null,Vi.hidden=!0}document.addEventListener("mouseover",n=>{const e=n.target.closest?.("[data-tip]");e&&!Ia&&l0(e)});document.addEventListener("mouseout",n=>{const e=n.target.closest?.("[data-tip]");e&&e===Vl&&!Ia&&nf()});document.addEventListener("click",n=>{if(Aa)return;const e=n.target.closest?.("[data-tip]");if(e&&Ia){Vl===e?nf():l0(e);return}e||nf()},!0);let sf=null,Aa=!1;document.addEventListener("pointerdown",n=>{const e=n.target.closest?.("[data-hold]");clearTimeout(sf),Aa=!1,!(!e||n.pointerType==="mouse")&&(sf=setTimeout(()=>{Aa=!0,l0(e,e.dataset.hold)},450))},!0);for(const n of["pointerup","pointercancel","pointermove"])document.addEventListener(n,e=>{(n!=="pointermove"||Math.hypot(e.movementX||0,e.movementY||0)>6)&&clearTimeout(sf)},!0);let ha=null;function Et(n,e,t=null){const i=G("feed"),s=document.createElement("div");if(s.className="note",ha!==null&&N&&N.bodies[ha]){const r=ha;s.classList.add("go"),s.addEventListener("click",()=>{it.focus(N,r),z.mode=null,z.fleet=null,z.selected=N.bodies[r].owner===xe?r:null,z.peek=r,Xt()})}for(s.style.setProperty("--c",e),s.textContent=n,t&&s.insertAdjacentHTML("afterbegin",`${At(t)} `),i.prepend(s);i.children.length>4;)i.lastChild.remove();setTimeout(()=>s.classList.add("gone"),5200),setTimeout(()=>s.remove(),5800)}const rf=n=>["","blooded","veteran","elite"][Ln(n)],gs=n=>`TF ${n}`;function ov(n=N.events.splice(0)){const e=z.vis,t=s=>N.bodies[s].name,i=wt(xe);for(const s of n){ha=s.at??s.to??s.from??null;const r=wt(s.owner);switch(s.type){case"launch":if(s.owner===xe){const o=N.fleets.find(c=>c.id===s.fleet),a=o?o.T:s.T;Et(`${gs(s.name)} · ${s.n} ship${s.n===1?"":"s"} → ${t(s.to)}${a?` · ${Ft(a)}`:""}${o&&o.assist!==void 0?` · assist via ${t(o.assist)}`:""}`,i);break}if(!e||e.intel<1||!e.bodies.has(s.from))break;if(s.dark){const o=N.fleets.find(a=>a.id===s.fleet);if(!o||!e.seesFleet(o))break}Et(`Launch detected at ${t(s.from)} · ${s.n} ship${s.n===1?"":"s"}${e.intel>=2?` → ${t(s.to)}`:""}`,r);break;case"arrived":s.owner===xe&&Et(`${gs(s.name)} arrived at ${t(s.at)}`,i);break;case"engaged":s.owner===xe?Et(`${gs(s.name)} engaging ${t(s.at)}`,i):s.vs===xe&&Et(`${t(s.at)} under attack`,r);break;case"wiped":s.owner===xe?Et(`${gs(s.name)} lost with all hands at ${t(s.at)}`,wt(s.vs)):s.vs===xe&&Et(`Enemy ${gs(s.name)} destroyed at ${t(s.at)}`,i);break;case"captured":s.owner===xe?Et(`${t(s.at)} taken by ${gs(s.name)}`,i):s.from===xe&&Et(`${t(s.at)} lost`,r);break;case"held":s.owner===xe&&Et(`${t(s.at)} held${Ln(N.bodies[s.at].vet)?` · garrison ${rf(N.bodies[s.at].vet)}`:""}`,i);break;case"promoted":s.owner===xe&&Et(`${s.name?gs(s.name):`${t(s.at)} garrison`} now ${rf(s.v)}`,i);break;case"event":{const o=_s[s.kind];s.phase==="soon"?Et(N.bodies[s.at].visitor?`${t(s.at)} incoming`:`${o.name} at ${t(s.at)} in 1:00`,"#c7a6ff",s.kind):s.phase==="won"?Et(`${s.owner===xe?"You":_i(s.owner)} secured the ${o.name.toLowerCase()} · ${s.what}`,wt(s.owner),s.kind):Et(`${o.name} at ${t(s.at)} is gone`,"#858ca6",s.kind);break}case"visitor":Et(`${s.name} has left the system`,"#858ca6","comet");break;case"project":{const o=vn[s.key];s.phase==="start"&&s.owner!==xe&&Et(`${_i(s.owner)} began the ${o.name} at ${t(s.at)}`,wt(s.owner),s.key),s.phase==="done"&&Et(`${s.owner===xe?"You":_i(s.owner)} completed the ${o.name}`,wt(s.owner),s.key),s.phase==="lost"&&s.owner===xe&&Et(`Beaten to the ${o.name}: half refunded`,"#ff7a4d",s.key);break}case"spycaught":s.owner===xe?Et(`Agent caught on ${t(s.at)} after ${Ft(s.after)}`,"#ff7a4d","spy"):s.by===xe&&Et(`Security caught a ${_i(s.owner)} spy on ${t(s.at)}`,i,"spy");break;case"breakout":s.owner===xe&&Et(`Broke out of ${t(s.at)}: ${s.lost} ship${s.lost===1?"":"s"} lost${s.n?`, ${s.n} got away`:""}`,"#ff7a4d");break;case"probed":s.owner===xe&&Et(`Probe flyby of ${t(s.at)} · in view for ${Math.round(Se.probe.scan/60*2)/2} min`,i);break;case"scrapped":s.owner===xe&&Et(`${Se.structures[s.what].name} scrapped at ${t(s.at)}`,i);break;case"research":s.owner===xe&&Et(`${bp(s.key,s.level)} complete`,i,s.key);break}}ha=null}function xp(n,e,t,i=!1){if(!z.mode){const s=it.pickFleet(N,e,t,xe),r=n!==null&&(n===z.peek||n===z.selected);if(s!==null&&z.fleet===s&&n!==null){sv();return}if(s!==null&&(n===null||r)&&z.fleet!==s){z.selected=z.target=z.peek=null,z.fleet=s,it.followFleet(N,s),Xt();return}}if(z.fleet=null,n!==null&&it.focus(N,n,!1),z.mode==="project"){const s=n!==null?N.bodies[n]:null,r=s?bo(N,s,z.projKey):"cancelled";if(s&&!r){z.selected=n,z.peek=null,z.mode="projconfirm",Xt();return}Et(r==="cancelled"?"Megaproject cancelled":`Can't build it there: ${r}`,"#858ca6"),z.mode=null,Xt();return}if(z.mode==="launch"||z.mode==="probe")n===null?(z.selected=z.target=null,z.mode=null):z.target=n!==z.selected?n:null;else if(n===null||n===z.selected)z.selected=z.target=null,z.mode=null;else if(N.bodies[n].owner===xe)z.selected=n,z.slot=null,z.pick=null,z.target=null;else{z.selected=z.target=null,z.peek=z.peek===n?null:n,Xt();return}z.peek=null,Xt()}const Qs=G("scene"),vi=new Map;let _t=null,Os={t:0,id:null};Qs.addEventListener("pointerdown",n=>{if(pn){n.preventDefault();try{Qs.setPointerCapture(n.pointerId)}catch{}if(n.pointerType==="mouse"){const e=n.button===2||n.button===1||n.altKey;_t={kind:e?"turn":"click",right:n.button===2,mouse:!0,x0:n.clientX,y0:n.clientY,x:n.clientX,y:n.clientY,pivot:e&&!it.following()?it.pivotAt(N,n.clientX,n.clientY):null},z.dragging=!0,it.orbit.vaz=it.orbit.vpol=0;return}if(n.isPrimary&&vi.clear(),vi.set(n.pointerId,{x:n.clientX,y:n.clientY}),vi.size===1)_t={kind:"tap",x0:n.clientX,y0:n.clientY};else if(vi.size===2){const[e,t]=[...vi.values()];_t={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2,mx0:(e.x+t.x)/2,my0:(e.y+t.y)/2}}z.dragging=!0,it.orbit.vaz=it.orbit.vpol=0}});Qs.addEventListener("pointermove",n=>{if(_t?.mouse){const s=n.clientX-_t.x,r=n.clientY-_t.y;_t.x=n.clientX,_t.y=n.clientY,_t.kind==="click"&&Math.hypot(n.clientX-_t.x0,n.clientY-_t.y0)>5&&(_t.kind="pan"),_t.kind==="pan"&&it.pan(s,r),_t.kind==="turn"&&(_t.pivot?it.rotateAround(_t.pivot,-s*.006,-r*.006):(it.orbit.az-=s*.006,it.orbit.pol-=r*.006),Math.hypot(n.clientX-_t.x0,n.clientY-_t.y0)>5&&(_t.moved=!0));return}n.pointerType==="mouse"&&N&&(Qs.style.cursor=it.pick(n.clientX,n.clientY)!==null?"pointer":"grab");const e=vi.get(n.pointerId);if(!e||!_t)return;const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,_t.kind==="pinch"){if(vi.size<2)return;const[s,r]=[...vi.values()],o=Math.hypot(s.x-r.x,s.y-r.y),a=(s.x+r.x)/2,c=(s.y+r.y)/2;it.following()&&Math.hypot(a-_t.mx0,c-_t.my0)<40?it.zoomBy(_t.d/Math.max(1,o)):(it.pan(a-_t.mx,c-_t.my),it.zoomAt(a,c,_t.d/Math.max(1,o))),_t.d=o,_t.mx=a,_t.my=c;return}if(_t.kind==="tap"&&Math.hypot(n.clientX-_t.x0,n.clientY-_t.y0)>10&&(_t.kind="orbit"),_t.kind==="orbit"){const s=4/window.innerHeight;it.orbit.az-=t*s,it.orbit.pol-=i*s,it.orbit.vaz=-t*s,it.orbit.vpol=-i*s}});function av(n){if(_t?.mouse){const e=_t;if(_t=null,z.dragging=!1,e.kind==="turn"&&e.right&&!e.moved&&n.type!=="pointercancel"){const s=it.pick(n.clientX,n.clientY),r=z.selected!==null?N.bodies[z.selected]:null;s!==null&&r&&r.owner===xe&&s!==r.id&&r.ships&&(z.mode="launch",z.target=s,z.fleet=null,Xt());return}if(e.kind!=="click"||n.type==="pointercancel")return;const t=it.pick(n.clientX,n.clientY),i=performance.now();t!==null&&Os.id===t&&i-Os.t<350?(it.focus(N,t),Os={t:0,id:null},Xt()):(Os={t:i,id:t},xp(t,n.clientX,n.clientY,!0));return}if(vi.delete(n.pointerId)){if(_t?.kind==="tap"&&vi.size===0&&n.type!=="pointercancel"){const e=it.pick(n.clientX,n.clientY),t=performance.now();e!==null&&Os.id===e&&t-Os.t<350?(it.focus(N,e),Os={t:0,id:null},Xt()):(Os={t,id:e},xp(e,n.clientX,n.clientY))}vi.size===0?(_t=null,z.dragging=!1):_t={kind:"orbit"}}}Qs.addEventListener("pointerup",av);Qs.addEventListener("pointercancel",n=>{av(n),_t=null,z.dragging=!1});const u0=n=>{vi.delete(n.pointerId)&&(vi.size===0?(_t=null,z.dragging=!1):_t={kind:"orbit"})};window.addEventListener("pointerup",u0);window.addEventListener("pointercancel",u0);Qs.addEventListener("lostpointercapture",u0);const cv=()=>{vi.clear(),_t=null,z.dragging=!1,Ea=null};window.addEventListener("blur",cv);document.addEventListener("visibilitychange",cv);Qs.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?window.innerHeight:1),t=n.ctrlKey?.01:.0015;it.zoomToward(n.clientX,n.clientY,Math.exp(Math.max(-.5,Math.min(.5,e*t))))},{passive:!1});const Mo=new Set;window.addEventListener("keydown",n=>{if(!pn||n.target.closest("input, textarea"))return;const e=n.key.toLowerCase();if(Mo.add(e),e==="escape")z.mode?(z.mode=null,z.target=null):z.selected=z.target=z.peek=null,G("research").hidden=!0,Xt();else if(e==="f"){const t=z.target??z.selected;t!==null&&it.focus(N,t)}else if(e==="h")rv();else if(e>="1"&&e<="5"&&!Dt)c0(Vc[Number(e)-1]);else if(e===" ")n.preventDefault(),G("pause").hidden||Yg();else if(e==="l"||e==="enter")z.selected!==null&&!G("launch").disabled&&G("launch").click();else if(e==="d")G("dark").hidden||(G("dark").click(),Mo.delete("d"));else if(e==="p"){const t=document.querySelector("#buildrow button[data-probe]");t&&!t.disabled&&t.click()}else e==="r"&&G("rnd").click()});window.addEventListener("keyup",n=>Mo.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>Mo.clear());function Vw(n){if(!Mo.size)return;const e=700*n,t=(...i)=>i.some(s=>Mo.has(s));t("w","arrowup")&&it.pan(0,e),t("s","arrowdown")&&it.pan(0,-e),t("a","arrowleft")&&it.pan(e,0),t("d","arrowright")&&it.pan(-e,0),t("q")&&(it.orbit.az+=n*1.5),t("e")&&(it.orbit.az-=n*1.5),t("=","+")&&it.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(-n*1.8)),t("-","_")&&it.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(n*1.8))}document.addEventListener("contextmenu",n=>n.preventDefault());for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,e=>e.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});const Hw=["You","Red","Amber"],_i=n=>n===xe?"You":N.names?N.names[n]:Hw[n];function $u(n,e,t,i,s=r=>Math.round(r)){const f=t.at(-1).t||1,d=Math.max(1,...t.flatMap(v=>v.p.map(b=>b[e]))),h=v=>30+v/f*256,g=v=>8+(1-v/d)*104,x=i.map(v=>{const b=t.map(M=>`${h(M.t).toFixed(1)},${g(M.p[v][e]).toFixed(1)}`).join(" "),_=t.at(-1).p[v][e];return`<polyline points="${b}" fill="none" stroke="${wt(v)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><text x="${h(f)+4}" y="${g(_)+4}" font-size="10" fill="#aab1c8">${_i(v)}</text>`}).join(""),m=[0,.5,1].map(v=>`<line x1="30" x2="286" y1="${g(d*v)}" y2="${g(d*v)}" stroke="rgba(160,180,255,0.12)" /><text x="26" y="${g(d*v)+3}" font-size="9" fill="#858ca6" text-anchor="end">${s(d*v)}</text>`).join(""),p=`<text x="30" y="126" font-size="9" fill="#858ca6">0:00</text><text x="286" y="126" font-size="9" fill="#858ca6" text-anchor="end">${Ft(f)}</text>`;return`<div class="chart" data-key="${e}"><h3>${n}</h3><svg viewBox="0 0 320 130" data-l="30" data-r="286" data-w="320">${m}${p}${x}<line class="cross" y1="8" y2="112" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg><div class="readout">Touch the chart to read values</div></div>`}const lv=[["Ships built","built"],["Ships lost","lost"],["Enemy ships destroyed","killed"],["Worlds captured","captured"],["Worlds lost","worldsLost"],["Credits earned","earned"],["Credits spent","spent"],["Research completed","research"]],_p=new Set(["lost","worldsLost"]);function uv(n,e){const t=e.map(s=>Math.round(N.stats.totals[s][n])),i=_p.has(n)?Math.min(...t):Math.max(...t);return!_p.has(n)&&i<=0?[]:t.every(s=>s===i)?[]:e.filter((s,r)=>t[r]===i)}function $w(){const n=N.players-1,e=[...new Set(zl)],t=e.length?` · ${N.mp?"AI ":""}${e.join("/")}`:"";return`${yo?`Daily ${yo.slice(5).replace("-","/")} · ${oi[N.system].name}`:oi[N.system].name} · ${Ft(N.time)} · ${n} rival${n===1?"":"s"}${t}`}function Ww(n,e,t,i,s,r,o,a){let c=o;for(n.font=a(r,c);c>16&&n.measureText(e).width>s;)n.font=a(r,--c);if(n.measureText(e).width>s){for(;e.length>1&&n.measureText(e+"…").width>s;)e=e.slice(0,-1);e+="…"}n.fillText(e,t,i)}function Xw(){const t=document.createElement("canvas");t.width=1080,t.height=1500;const i=t.getContext("2d"),s=Array.from({length:N.players},(m,p)=>p),r=(m,p)=>`${m} ${p}px Rajdhani, 'Segoe UI', system-ui, sans-serif`;i.fillStyle="#03040a",i.fillRect(0,0,1080,1500),i.strokeStyle="rgba(120,190,255,0.25)",i.lineWidth=2,i.strokeRect(24,24,1032,1452),i.textAlign="center",i.fillStyle="#858ca6",i.font=r(600,30),i.fillText("P E R I H E L I O N",1080/2,96);const o=N.winner===xe;i.fillStyle=wt(o?xe:N.winner),i.font=r(700,96),i.fillText(o?"VICTORY":"DEFEAT",1080/2,200),i.fillStyle="#e6ebf7",i.font=r(500,34),i.fillText($w(),1080/2,252);const a=80,c=170,l=920-c*s.length;let u=330;i.font=r(700,32),i.textAlign="right",s.forEach((m,p)=>{i.fillStyle=wt(m),Ww(i,_i(m),a+l+c*(p+1)-20,u,c-30,700,32,r)}),u+=20;for(const[m,p]of lv){u+=52,i.strokeStyle="rgba(160,180,255,0.15)",i.beginPath(),i.moveTo(a,u+16),i.lineTo(1080-a,u+16),i.stroke(),i.textAlign="left",i.fillStyle="#858ca6",i.font=r(500,30),i.fillText(m,a,u);const v=uv(p,s);s.forEach((b,_)=>{const M=a+l+c*(_+1)-20;v.includes(b)?(i.fillStyle="rgba(126,224,161,0.16)",i.fillRect(M-c+30,u-34,c-20,46),i.fillStyle="#7ee0a1"):i.fillStyle="#e6ebf7",i.textAlign="right",i.font=r(v.includes(b)?700:500,32),i.fillText(String(Math.round(N.stats.totals[b][p])),M,u)})}const f=N.stats.series,d=[["Ships","ships"],["Worlds","worlds"],["Income","income"]],h=880/3,g=400,x=u+90;return d.forEach(([m,p],v)=>{const b=80+v*(h+20);i.textAlign="left",i.fillStyle="#e6ebf7",i.font=r(600,30),i.fillText(m,b,x);const _=x+20,M=_+g,S=f.at(-1).t||1,w=Math.max(1,...f.flatMap(y=>y.p.map(T=>T[p])));i.strokeStyle="rgba(160,180,255,0.15)",i.lineWidth=2;for(const y of[0,.5,1])i.beginPath(),i.moveTo(b,M-y*g),i.lineTo(b+h,M-y*g),i.stroke();for(const y of s)i.strokeStyle=wt(y),i.lineWidth=4,i.lineJoin="round",i.beginPath(),f.forEach((T,L)=>{const C=b+T.t/S*h,R=M-T.p[y][p]/w*g;L?i.lineTo(C,R):i.moveTo(C,R)}),i.stroke();i.fillStyle="#858ca6",i.font=r(500,24),i.fillText(p==="income"?w.toFixed(1):String(Math.round(w)),b,_+26)}),i.textAlign="center",i.fillStyle="#858ca6",i.font=r(500,26),i.fillText("pretzel-dev.github.io/game-dev/perihelion",1080/2,1444),t}async function qw(){try{await document.fonts.load("700 30px Rajdhani"),await document.fonts.load("500 30px Rajdhani")}catch{}const n=await new Promise(i=>Xw().toBlob(i,"image/png")),e=new File([n],"perihelion-report.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i.name==="AbortError")return}const t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e.name,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}G("share").addEventListener("click",qw);function Yw(){const n=N.stats,e=Array.from({length:N.players},(r,o)=>o),t=lv,i=`<div class="legend">${e.map(r=>`<span><i style="background:${wt(r)}"></i>${_i(r)}</span>`).join("")}</div>`,s=`<table class="totals"><tr><th></th>${e.map(r=>`<th style="color:${wt(r)}">${_i(r)}</th>`).join("")}</tr>`+t.map(([r,o])=>`<tr><td>${r}</td>${e.map(a=>`<td class="${uv(o,e).includes(a)?"best":""}">${Math.round(n.totals[a][o])}</td>`).join("")}</tr>`).join("")+"</table>";G("report").innerHTML=i+s+$u("Ships","ships",n.series,e)+$u("Worlds held","worlds",n.series,e)+$u("Income (credits/s)","income",n.series,e,r=>r.toFixed(1));for(const r of G("report").querySelectorAll(".chart")){const o=r.querySelector("svg"),a=r.dataset.key,c=l=>{const u=o.getBoundingClientRect(),f=(l.clientX-u.left)/u.width*Number(o.dataset.w),d=Number(o.dataset.l),h=Number(o.dataset.r),g=Math.min(1,Math.max(0,(f-d)/(h-d))),x=n.series[Math.round(g*(n.series.length-1))],m=o.querySelector(".cross"),p=d+x.t/(n.series.at(-1).t||1)*(h-d);m.setAttribute("x1",p),m.setAttribute("x2",p),m.setAttribute("visibility","visible"),r.querySelector(".readout").innerHTML=`${Ft(x.t)} · `+e.map(v=>{const b=x.p[v][a];return`${_i(v)} <b>${a==="income"?b.toFixed(1):Math.round(b)}</b>`}).join(" · ")};o.addEventListener("pointerdown",c),o.addEventListener("pointermove",c)}}function jw(){pn=!1,G("rnd").hidden=!0,z.selected=z.target=null,Xt();const n=N.winner===xe;G("end-title").textContent=n?"Victory":"Defeat",G("end-title").style.color=wt(n?xe:N.winner);const e=[...new Set(zl)],t=e.length?` · ${e.map(i=>i[0].toUpperCase()+i.slice(1)).join(" / ")} AI`:"";G("end-sub").textContent=(n?`The system is yours after ${Ft(N.time)}.`:`Your last world fell at ${Ft(d0??N.time)}.`)+t+` · ${yo?"Daily · ":""}${oi[N.system].name}`,Yw(),setTimeout(()=>G("end").hidden=!1,1200)}let yp=performance.now(),Wu=0,Xu=0,Hs=!1,d0=null,of=!0,f0=0,sa=!1;function dv(n){const e=Math.min(.1,(n-yp)/1e3);if(yp=n,N){if(pn&&!xi)if(Dt?.role==="client"){const t=n-f0>3e3;t!==sa&&(sa=t,sa?(G("banner").hidden=!1,G("banner").textContent="Waiting for the host…"):yl()),sa||(N.time+=e)}else{let t=e*Zs;for(;t>0;){const i=Math.min(.25,t);if(!$t||$t.free)for(const s of Ol)Yp(N,s,i);wf(N,i),t-=i}}if(pn){if(z.selected!==null&&N.bodies[z.selected].owner!==xe&&(z.selected=z.target=null),Dt?.role!=="client"){const i=N.events.splice(0);ov(i),Dt?.role==="host"&&i.length&&Dt.room.broadcast({t:"events",list:i})}Dt?.role==="host"&&(Xu-=e,(Xu<=0||N.winner!==null)&&(Xu=.25,Dt.room.seats.forEach((i,s)=>{s>0&&i.conn&&Dt.room.sendTo(s,{t:"state",s:Aw(s)})})));const t=N.bodies.some(i=>i.owner===xe||i.sieges.some(s=>s.owner===xe))||N.fleets.some(i=>i.owner===xe&&!i.probe);if(N.mp&&N.winner===null&&Hs===t&&(Hs=!t,Hs?(d0=N.time,Et("Your empire has fallen · watching the rest","#ff7a4d"),z.vis=null):z.vis=xr(N,xe),G("leave").hidden=!(Hs&&Dt?.role==="client")),z.fleet!==null&&Bl(),Wu-=e,Wu<=0){Wu=.25,z.vis=Hs||ft.dev&&!Dt&&z.devAs==="all"?null:xr(N,ft.dev&&!Dt&&z.devAs!==void 0?z.devAs:xe),ft.dev&&!Dt&&nv(),Xt(),Gl(),La();{const i=va(N,xe)-xa(N,xe),s=N.crew?` · ${nn(`Crew ${Zc(N,xe)}/${jc(N,xe)}`,"Ships in service and on order, against the crews your worlds can field. More worlds, Habitats and Industry research raise it.",Zc(N,xe)>=jc(N,xe)?"warn":"inc")}`:"";Pn(G("clock"),`<b>₵ ${Math.floor(N.credits[xe])}</b> ${nn(`${i<0?"−":"+"}${Math.abs(i).toFixed(1)}/s`,Iw(),"inc")}${s} · T+${Ft(N.time)}`)}}N.winner!==null&&jw()}pn&&Vw(e),it.render(N,z,e*(pn?Zs:.2),n/1e3)}requestAnimationFrame(dv)}window.addEventListener("resize",it.resize);it.resize();N=Up({seed:11,opponents:2});Ol=[0,1,2].map(n=>Ku(n,"hard",Ui(5+n)));it.build(N);it.orbit.dist=330;(function n(){if(!(pn||G("menu").hidden)){for(let e=0;e<4;e++){for(const t of Ol)Yp(N,t,.25);wf(N,.25)}it.orbit.az+=.001,setTimeout(n,50)}})();requestAnimationFrame(dv);window.__perihelion={get game(){return N},view:it,ui:z,sim:{launch:Al,fleetState:Nn,step:wf,posAt:vt}};
