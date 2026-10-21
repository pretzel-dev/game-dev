var zg=n=>{throw TypeError(n)};var _o=(n,e,t)=>e.has(n)?zg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);function Bg(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Hf={ansible:'<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>',drives:'<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>',sensors:'<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',intel:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',weapons:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',armour:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',industry:'<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>',array:'<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',targeting:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',kinetic:'<path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M4 9v6"/>',torch:'<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>',hardened:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>',pdnet:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',sundiver:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',massdriver:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',ringyard:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',citadel:'<path d="M10 5V3"/><path d="M14 5V3"/><path d="M15 21v-3a3 3 0 0 0-6 0v3"/><path d="M18 3v8"/><path d="M18 5H6"/><path d="M22 11H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"/><path d="M6 3v8"/>',college:'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',spy:'<path d="M18 11c-1.5 0-2.5.5-3 2"/><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"/><path d="M6 11c1.5 0 2.5.5 3 2"/>'},Gg={guns:"M3 12h10M5 12V9h6v3M8 9V3.5",attack:"M3 3l10 10M13 3L3 13M3 10v3h3M13 10v3h-3",fleet:"M5 3.5l6 4.5-6 4.5",probe:"M8 2.5l5 5.5-5 5.5-5-5.5z",incoming:"M4 5l4 6 4-6",reinforce:"M4 11l4-6 4 6",system:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",focus:"M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0",pause:"M5.5 3.5v9M10.5 3.5v9",play:"M5 3l8 5-8 5z",close:"M4 4l8 8M12 4l-8 8",assist:"M12.5 5.5A5 5 0 1 0 13 9M12.5 2v3.5H9",spy:"M2.5 7.5h11M4.5 7.5l1.5-4h4l1.5 4M5.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 11.5h1",dark:"M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z",seam:"M8 1.5l4.5 4-4.5 8.5-4.5-8.5zM3.5 5.5h9M6 5.5l2 8.5 2-8.5",relay:"M3.5 9.5a5 5 0 0 0 7-7zM7 6l4.5-4.5M6 11l-2 3.5h7L9 11",depot:"M8 1.5C11 5.5 12 7.5 12 10a4 4 0 0 1-8 0c0-2.5 1-4.5 4-8.5zM6.5 10.5a1.5 1.5 0 0 0 1.5 1.5",post:"M8 9v5.5M5.5 14.5h5M5.2 6.2a4 4 0 0 1 5.6 0M3 4a7 7 0 0 1 10 0M8 8.5m-.6 0a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0",fortress:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5z",archive:"M2 3.5h4.5A1.5 1.5 0 0 1 8 5v9a1.5 1.5 0 0 0-1.5-1.5H2zM14 3.5H9.5A1.5 1.5 0 0 0 8 5v9a1.5 1.5 0 0 1 1.5-1.5H14z",hulk:"M8 5v9.5M5 7.5h6M2.5 10.5a5.5 4.5 0 0 0 11 0M8 2.2m-1.3 0a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0",forge:"M8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5M3.4 3.4l1.8 1.8M10.8 10.8l1.8 1.8M12.6 3.4l-1.8 1.8M5.2 10.8l-1.8 1.8M8 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0",comet:"M5 11m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 9l6.5-6.5M7.8 10.8l5-3.3M5.2 8.2l3.3-5",derelict:"M1.5 9.5l3.5-3h6l3.5 3-3.5 3H5zM9 6.5L7.5 4M6.5 9.5l1.5 1.5 1-2",signal:"M1.5 8.5h3l2-5 3 9 2-4h3",wreck:"M8 1.5v13M2.4 4.8l11.2 6.4M13.6 4.8L2.4 11.2",convoy:"M2 4.5l3 3.5-3 3.5M6.5 4.5l3 3.5-3 3.5M11 4.5l3 3.5-3 3.5",cache:"M2.5 5L8 2l5.5 3v6L8 14l-5.5-3zM2.5 5L8 8l5.5-3M8 8v6",drives:"M8 1.5l2.5 5h-5zM5.5 6.5h5v4h-5zM6.5 10.5L5 14.5M9.5 10.5l1.5 4M8 10.5v4",sensors:"M2.5 10a6 6 0 0 0 8.5-8.5zM6.8 6.2l5-5M12 1.5h2v2",intel:"M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",weapons:"M2 14l8-8M9.5 6.5l1.5-4 2.5 2.5-4 1.5M3 10l3 3",armour:"M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 4.5v7M5 6.5v3M11 6.5v3",industry:"M3 13l5.5-5.5M9.2 2.6a3.3 3.3 0 1 0 4.2 4.2l-2.2-.4-.6-1.6zM2 14l1-1",ansible:"M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4.6 4.6a4.8 4.8 0 0 0 0 6.8M11.4 4.6a4.8 4.8 0 0 1 0 6.8M2.2 2.2a8.2 8.2 0 0 0 0 11.6M13.8 2.2a8.2 8.2 0 0 1 0 11.6",targeting:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M8 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 1v3M8 12v3M1 8h3M12 8h3",kinetic:"M1.5 8h7M5.5 4.5L9 8l-3.5 3.5M11 3v10M13.5 5v6",torch:"M8 1.5c2.5 3 3.5 5 3.5 7.5a3.5 3.5 0 0 1-7 0c0-1.5.7-2.5 1.5-3.5.3 1.5 1 2 2 2 0-2-.5-4 0-6z",hardened:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5zM8 5.5v5M5.5 8h5",pdnet:"M2 12.5a6 6 0 0 1 12 0zM4.6 6.2L3.4 4M8 5V2.5M11.4 6.2L12.6 4",sundiver:"M5 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 3.5h5v9h-5zM9.5 8h5M12 3.5v9",massdriver:"M2 13L13 2M4.5 13.5L14 4M10.5 2h3.5v3.5",ringyard:"M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 8m-6.5 0a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0",citadel:"M2.5 14.5v-9h2v2h2v-2h3v2h2v-2h2v9zM6.5 14.5v-3h3v3",telescope:"M2 10l9-5 1.5 3-9 5zM6.5 11.5l-2 3M7.5 11l2 3.5M11 5l1.5-1 1.5 3-1.5 1",star:"M8 1.5l1.9 4.2 4.6.4-3.5 3 1.1 4.5L8 11.2l-4.1 2.4 1.1-4.5-3.5-3 4.6-.4z"},$0=n=>Hf[n]?{vb:"0 0 24 24",body:Hf[n],lu:!0}:{vb:"0 0 16 16",body:`<path d="${Gg[n]}"/>`,lu:!1},bt=(n,e="")=>{const t=$0(n);return`<svg class="ic${t.lu?" lu":""}${e?` ${e}`:""}" viewBox="${t.vb}" aria-hidden="true">${t.body}</svg>`},Oe=-1,$f=0,be={accel:.03,outerPeriod:2400,outerRadius:200,startShips:4,startCredits:400,income:{planet:1,moon:.5,station:.6,asteroid:.3,visitor:0},homeIncome:.4,mineIncome:1.5,ship:{cost:150,time:45},structures:{shipyard:{name:"Shipyard",cost:400,time:90,desc:"Builds ships, one at a time"},mine:{name:"Mine",cost:200,time:45,only:["asteroid","moon"],maxLevel:3,desc:"+1.5/s per level"},skimmer:{name:"Gas harvester",cost:350,time:70,where:"giant",maxLevel:3,income:2,desc:"Skims fuel from the clouds: +2/s per level"},exchange:{name:"Orbital exchange",cost:450,time:80,where:"home",maxLevel:2,income:2.5,desc:"Sells war bonds: +2.5/s per level"},defence:{name:"Guns",cost:250,time:50,maxLevel:3,desc:"+2 guns per level"},bureau:{name:"Security bureau",cost:250,time:50,maxLevel:2,desc:"Hunts enemy spies here and on nearby worlds"},lab:{name:"Research station",cost:300,time:60,maxLevel:3,desc:"Research +50% per level"},habitat:{name:"Habitat",cost:300,time:60,maxLevel:3,crewOnly:!0,desc:"Quarters for crews: +4 crew per level"}},baseGuns:1,gunsPerDefence:2,coverShare:.5,moonCover:.25,fire:.12,gunRegen:.02,flipTime:4,scrapRefund:.4,scrapTime:20,cooldown:15,probe:{cost:80,speed:4,scan:150},cancelRefund:.8,labSpeed:.5,upkeep:{free:40,cost:.05},crew:{home:16,planet:8,giant:6,station:6,moon:3,asteroid:1,habitat:4,industry:.1,convoy:4},drill:.004,fuel:{tank:1.2,probe:2}},ni={drives:{name:"Drives",cost:[300,600,1e3],time:[90,150,240],levels:["Magnetic nozzle","Pellet-fusion torch","Catalysed fusion drive"],text:["Tighter plasma, +15% thrust","Pulsed fusion, +30% thrust","Hotter burn, +45% thrust"]},sensors:{name:"Sensors",cost:[250,500,900],time:[80,140,220],levels:["Long-baseline telescopes","Deep-space listening posts","Interferometer net"],text:["Spot drive flares further out","Hear further into the system","Wide-field sight, a long way out"]},intel:{name:"Intel",cost:[300,550,850],time:[90,150,210],levels:["Signals intercept","Agents in the yards","Broken fleet cipher"],text:["Read enemy fleet sizes; recruit agents; catch enemy agents more often","Learn enemy routes and landing points","Know arrival times; get warnings"]},weapons:{name:"Weapons",cost:[400,800],time:[120,200],levels:["Coilgun batteries","Spinal railguns"],text:["Faster slugs, +15% firepower","Hull-length rails, +30% firepower"]},armour:{name:"Armour",cost:[400,800],time:[120,200],levels:["Whipple shielding","Point-defence drone swarm"],text:["Layered plate, 12% less damage","Drones swat rounds, 24% less damage"]},industry:{name:"Industry",cost:[350,700],time:[100,180],levels:["Orbital fabricators","Self-replicating tooling"],text:["Build 12% faster, mines +15%","Build 24% faster, mines +30%"]}},tl={burn:.12,seen:.3},gi={travel:40,cost:250,catch:1/300,intel:.5,bureau:1.5,bureauRange:40,skim:.4,slow:.25},Vg=[70,100,135,175],Su=["intel","sensors","weapons","drives","industry","armour"],Nn={ansible:{name:"Entangled signals",needs:["intel","sensors"],cost:1100,time:220,text:"Read every fleet you can see: its size, destination and arrival time; get warnings"},targeting:{name:"Targeting data",needs:["sensors","weapons"],cost:1100,time:220,text:"+20% firepower when attacking"},kinetic:{name:"Kinetic strike",needs:["weapons","drives"],cost:1100,time:220,text:"Fleets arrive firing: an opening volley destroys a tenth of their number in defenders"},torch:{name:"Torch production",needs:["drives","industry"],cost:1100,time:220,text:"Ships build 25% faster and fly 10% faster"},hardened:{name:"Hardened colonies",needs:["industry","armour"],cost:1100,time:220,text:"+1 gun on every world; guns rebuild twice as fast"},pdnet:{name:"Point-defence net",needs:["armour","intel"],cost:1100,time:220,text:"Your worlds shoot down 15% of every attacking fleet as it arrives"}},Ui=(n,e,t)=>e!==Oe&&!!n.tech&&!!n.tech[e][t],W0=(n,e)=>Nn[n]?Nn[n].name:ni[n].levels[e-1],pn={sundiver:{needs:"torch",name:"Sun-diver collectors",where:"inner",text:"Every world you hold earns 50% more",cost:2e3,time:480},massdriver:{needs:"kinetic",name:"Mass driver",where:"planet",text:"Fleets launched here fly 50% faster",cost:2e3,time:480},ringyard:{needs:"hardened",name:"Ring yard",where:"giant",text:"Ships build three times as fast here",cost:2e3,time:480},citadel:{needs:"pdnet",name:"Fortress world",where:"any",text:"Twice the guns here, and its cover reaches its family at full strength",cost:2e3,time:480},array:{needs:"ansible",name:"Ansible array",where:"any",text:"See every world and fleet in the system, and where they are going",cost:2e3,time:480},college:{needs:"targeting",name:"War college",where:"any",text:"Simulator-trained crews: every ship you build starts as a veteran (second rank)",cost:2e3,time:480}},Sc=(n,e,t)=>e!==Oe&&n.bodies.some(i=>i.wonder===t&&i.owner===e);function uo(n,e,t){const i=pn[t];if(e.owner===Oe||e.visitor)return"not yours";if(!Ui(n,e.owner,i.needs))return`needs ${Nn[i.needs].name}`;if(e.project||e.wonder)return"this world already has one";if(n.wonders&&n.wonders[t]!==void 0)return"already built";if(n.bodies.some(r=>r.project&&r.project.key===t&&r.owner===e.owner))return"already building it";if(i.where==="giant"&&!e.giant)return"gas giants only";if(i.where==="planet"&&e.kind!=="planet")return"planets only";if(i.where==="inner"){const r=n.bodies.filter(s=>s.kind==="planet"&&s.parent===null&&!s.star).sort((s,a)=>s.r-a.r)[0];if(e!==r)return"the innermost planet only"}return n.credits[e.owner]<i.cost?"not enough credits":null}function X0(n,e,t){if(uo(n,e,t))return!1;const i=pn[t];return n.credits[e.owner]-=i.cost,qt(n,e.owner,"spent",i.cost),e.project={key:t,left:i.time,paid:i.cost},Mn(n,{type:"project",phase:"start",owner:e.owner,at:e.id,key:t}),!0}const wc=(n,e)=>1+.5*(ma(n,e)-1);function Hg(n,e){for(const t of n.bodies){if(!t.project||t.owner===Oe||t.sieges.length||(t.project.left-=e*wc(n,t.owner)*(Wg(n,t).length?1-gi.slow:1),t.project.left>0))continue;const i=t.project.key;t.wonder=i,t.project=null,(n.wonders||(n.wonders={}))[i]=t.id,Mn(n,{type:"project",phase:"done",owner:t.owner,at:t.id,key:i});for(const r of n.bodies)!r.project||r.project.key!==i||(r.owner!==Oe&&(n.credits[r.owner]+=Math.round(r.project.paid/2)),Mn(n,{type:"project",phase:"lost",owner:r.owner,at:r.id,key:i}),r.project=null)}}const Vi=(n,e,t)=>e===Oe||!n.tech?0:n.tech[e][t];function qt(n,e,t,i=1){e===Oe||!n.stats||(n.stats.totals[e][t]+=i)}function Wf(n){n.stats.series.push({t:n.time,p:n.credits.map((e,t)=>({ships:n.bodies.reduce((i,r)=>i+(r.owner===t?r.ships:0),0)+n.fleets.reduce((i,r)=>i+(r.owner===t?r.n:0),0),worlds:n.bodies.filter(i=>i.owner===t).length,income:ra(n,t),credits:e}))})}const Fd=(n,e)=>n.fuel?be.fuel.tank*(1+.15*Vi(n,e,"drives")):1/0,nl=(n,e)=>be.accel*(n.thrust||1)*(1+.15*Vi(n,e,"drives"))*(Ui(n,e,"torch")?1.1**2:1),Od=(n,e)=>1+.15*Vi(n,e,"weapons"),q0=(n,e)=>Od(n,e)*(Ui(n,e,"targeting")?1.2:1),Tc=(n,e)=>1-.12*Vi(n,e,"armour"),Xs=(n,e,t=null)=>(1+.12*Vi(n,e,"industry"))*(t&&t.perk==="forge"?vn.forge.boost:1);function Vr(n,e,t){const i=n.tech[e][t]||0;if(Nn[t]){const s=Nn[t];return i?null:{level:1,cost:s.cost,time:s.time,text:s.text,title:s.name}}const r=ni[t];return i<r.cost.length?{level:i+1,cost:r.cost[i],time:r.time[i],text:Y0(n,t,i),title:r.levels[i]}:null}function Y0(n,e,t){const i=ni[e].text[t];return n.crew&&e==="industry"?`${i}, crews +${Math.round(be.crew.industry*100*(t+1))}%`:i}function $g(n,e){const t=hr[e].text;return n.crew&&e==="convoy"?`${t}, and ${be.crew.convoy} crew sign on`:t}function ma(n,e){const t=n.bodies.reduce((i,r)=>i+(r.owner===e?js(r,"lab")*(r.perk==="archive"?2:1):0),0);return(1+be.labSpeed*t)*(ep(n,e,"archive")?vn.archive.boost:1)*(n.research||1)}function ia(n,e,t){const i=Vr(n,e,t);return i?Nn[t]&&Nn[t].needs.some(r=>n.tech[e][r]<2)?"locked":n.tech[e].project?"already researching":n.credits[e]<i.cost?"not enough credits":null:"complete"}function K0(n,e,t){if(ia(n,e,t))return!1;const i=Vr(n,e,t);return n.credits[e]-=i.cost,qt(n,e,"spent",i.cost),n.tech[e].project={key:t,left:i.time,total:i.time},!0}function zd(n,e,t){return e===Oe||!t||t.owner===Oe||t.owner===e?"enemy worlds only":Vi(n,e,"intel")<1?"needs Signals intercept":(n.spies||[]).some(i=>i.owner===e&&i.body===t.id)?"already a spy there":n.credits[e]<gi.cost?"not enough credits":null}function j0(n,e,t){if(zd(n,e,t)||n.winner!==null)return null;n.credits[e]-=gi.cost,qt(n,e,"spent",gi.cost);const i={id:n.nextId++,owner:e,body:t.id,since:n.time+gi.travel};return(n.spies||(n.spies=[])).push(i),i}const Z0=(n,e)=>gi.bureauRange*(e.perk==="post"?2:1)*er(n),Ys=(n,e)=>vn[e].range*er(n),Wg=(n,e)=>(n.spies||[]).filter(t=>t.body===e.id&&t.owner!==e.owner&&t.since<=n.time);function Bd(n,e){if(e.owner===Oe)return 1;const t=lt(n,e,n.time);let i=0;for(const r of n.bodies){if(r.owner!==e.owner)continue;const s=r.structures.find(a=>a.type==="bureau"&&a.left<=0);s&&(r===e||Cn(lt(n,r,n.time),t)<=Z0(n,r))&&(i=Math.max(i,s.level))}return gi.catch*(1+gi.intel*Vi(n,e.owner,"intel"))*(1+gi.bureau*i)}const Xg=(n,e)=>{const t=Math.sin(n*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function qg(n,e){if(!n.spies||!n.spies.length)return;const t=Math.floor(n.time-e);n.spies=n.spies.filter(i=>{const r=n.bodies[i.body];if(r.owner===i.owner||r.owner===Oe)return!1;if(i.since>n.time)return!0;const s=Math.min(n.credits[r.owner],io(r,n)*gi.skim*e);n.credits[r.owner]-=s,n.credits[i.owner]+=s,qt(n,i.owner,"earned",s);const a=Bd(n,r);for(let c=Math.max(t,Math.floor(i.since))+1;c<=Math.floor(n.time);c++)if(Xg(i.id,c)<a)return Mn(n,{type:"spycaught",owner:i.owner,by:r.owner,at:r.id,after:n.time-i.since}),!1;return!0})}function as(n,e){const t=Vg[Vi(n,e,"sensors")]*er(n),i=[];for(const l of n.bodies)l.owner===e&&i.push([lt(n,l,n.time),t]);for(const l of n.fleets)l.owner===e&&i.push([Pn(l,n.time),20*er(n)]);for(const l of n.bodies)l.sieges.some(u=>u.owner===e)&&i.push([lt(n,l,n.time),20]);for(const l of n.scans||[])l.owner===e&&l.until>n.time&&i.push([lt(n,n.bodies[l.body],n.time),14]);for(const l of n.spies||[])l.owner===e&&l.since<=n.time&&i.push([lt(n,n.bodies[l.body],n.time),30]);const r=l=>i.some(([u,h])=>Cn(u,l)<=h);for(const l of n.bodies)l.perk==="relay"&&l.owner===e&&i.push([lt(n,l,n.time),Ys(n,"relay")]);const s=new Set(n.bodies.filter(l=>l.owner===e||r(lt(n,l,n.time))).map(l=>l.id)),a=Math.max(Vi(n,e,"intel"),Ui(n,e,"ansible")||Sc(n,e,"array")?3:0),c=new Set((n.spies||[]).filter(l=>l.owner===e&&l.since<=n.time).map(l=>l.body)),o=(l,u=Pn(l,n.time))=>l.owner===e||c.has(l.from)||(l.dark&&!u.burning?i.some(([h,d])=>Cn(h,u)<=d*tl.seen):r(u));return Sc(n,e,"array")?{owner:e,sees:()=>!0,seesFleet:()=>!0,bodies:new Set(n.bodies.map(l=>l.id)),intel:a,warn:!0}:{owner:e,sees:r,seesFleet:o,bodies:s,intel:a,warn:ep(n,e,"post")||Ui(n,e,"ansible")}}function Ti(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Cn=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),Xf=["Aurelion","Seraphine","Caelestis","Vespera","Solenne","Astraeon","Halcyra","Lumeris","Orionde","Celestine","Empyra","Noctara","Stellarin","Zenitha","Aethelis","Borealis Major","Cygnara","Draconis","Elysion","Fulgora","Galathea","Heliara","Ixora","Lyrae","Meridia","Nebulon","Ophira","Polaria","Quasara","Radiantis","Sidera","Thessaly Prime","Uranara","Valenor","Wynthera","Xandria","Ysolde","Zephyra","Aquilon","Brightholm","Corvessa","Dawnmere","Equinoxa","Firmament","Gloriana","Hyperion Tor","Irisca","Kyrios","Luminara","Magellane","Nimbara","Ouranos Minor","Perigee","Radiance","Solstira","Tethra","Umbrielle","Vireon","Aldebara","Betelline","Capellan","Deneba","Etamin","Fomalhara","Hadara","Izarine","Kochaba","Mirzana","Nashira","Pollara","Rigelle","Sadalmel","Talitha","Vegara","Alcyone Deep","Canopea","Mimosa","Aludra","Suhail","Menkara"],qf=["Selene Minor","Lucen","Nyxa","Astra","Eos","Hesperel","Stilbe","Aglaia","Phaenna","Asteria","Chione","Lampetia","Aether","Hemera","Orphne","Aura","Pleia","Maia Minor","Electra Minor","Merope Minor","Taygete Minor","Sterope","Celaeno Minor","Alcyon","Aphelia","Periel","Syzyn","Nadira","Zenia","Umbra","Penumbra","Crescen","Gibbous","Waxen","Occulta","Transita","Libra Minor","Albedo","Lumen","Nimbus","Corona Minor","Halo","Parhelia","Glimmer","Starling","Morrowlight","Duskmere","Emberlight","Frostlight","Glowworm","Ashlight","Moth","Lantern","Candela","Lux","Ignis","Scintilla","Stella Parva","Vela Minor","Nova Parva","Pulsa","Quark","Photon","Zodia","Ecliptica"],Yg=["Ring One","Anchor","Meridian","Longreach","Holdfast","Keystone","Lantern","Tollgate","Crossways","Beacon Hill","Harbourline","Windlass","Capstan","Stillwater","Gantry Nine","Fairhaven","Moorings","Pinwheel","Carrick Yard","Halfway House","Sentinel","Spindle","Drydock Four","Tether","Outlook","Commonwealth","Linchpin","Caravel","Weigh Station","Portcullis"],Kg=["Hollow","Gravel","Anvil","Cairn","Dolmen","Flinders","Grist","Hearth","Kiln","Loam","Menhir","Nugget","Quarry","Rubble","Slag","Tor","Whetstone","Boulder","Clinker","Dregs","Ingot","Lump","Pumice","Scoria","Talus","Tuff","Cobalt","Nickel Jack","Old Iron","Spall","Brickbat","Crag","Scree","Knapp","Hardpan"],Yf=["Resolute","Tenacity","Wayfarer","Undaunted","Nightingale","Clemency","Forbearance","Hardihood","Persistence","Sparrowhawk","Temerity","Valiance","Wanderlust","Adamant","Bellicose","Candour","Diligence","Endeavour","Fortitude","Gallantry","Harbinger","Impetus","Jubilee","Kittiwake","Longbow","Mistral","Nonesuch","Obstinate","Paladin","Quicksilver","Rapier","Sirocco","Tempest","Unbowed","Vigilant","Warspite","Xiphias","Yeoman","Zealous","Albatross","Brigantine","Corsair","Dauntless","Equinox","Firebrand","Grenadier","Halberd","Inflexible","Javelin","Kingfisher","Lionheart","Mariner","Nemesis","Onslaught","Peregrine","Quarterstaff","Relentless","Stalwart","Thunderer","Unicorn","Vanguard","Wolfhound","Arbalest","Bulwark","Cutlass","Defiance","Ember Tide","Falconer","Goshawk","Hotspur","Invictus","Jackdaw","Kraken","Lodestone","Monsoon","Northwind","Outrider","Pathfinder","Quarrel","Redoubt","Scimitar","Trident","Upholder","Vortex","Whirlwind","Asp","Basilisk","Cockatrice","Dragonet","Estoc","Fulmar","Glaive","Hurricane","Ironside","Jaeger","Kestrel Wing","Lance","Magpie","Narwhal","Osprey","Petrel","Raven","Shrike","Tern","Umbra","Viper","Wyvern Wing","Auk","Bittern","Curlew","Dunlin","Egret","Fieldfare","Gannet","Heron","Ibis","Jay","Kite","Lapwing","Merlin","Nuthatch","Oriole","Plover","Redshank","Skua","Tanager","Veery","Whimbrel","Stoic","Candle","Hearthguard"],eo=.08,J0=[1,2.5,4.5],An=n=>J0.filter(e=>(n||0)>=e).length,Kf=(n,e,t)=>{const i=Math.min(2,Math.max(0,n/Math.max(e,.5)));return Math.min(4.5,.15+.35*Math.min(1,t/Math.max(e,1))+.3*i**1.3)};function Mn(n,e){n.events&&(n.events.push({t:n.time,...e}),n.events.length>60&&n.events.splice(0,n.events.length-60))}function Q0(n){const e=Yf[(n.nameSeed+n.nextId*7919)%Yf.length];return n.fleets.some(i=>i.name===e)?`${e} ${["II","III","IV","V"][n.nextId%4]}`:e}const sc=(n,e,t,i)=>e+i>0?(n*e+t*i)/(e+i):0,jf=n=>be.outerPeriod*(n/be.outerRadius)**1.5,dr=4*Math.PI*Math.PI*be.outerRadius**3/be.outerPeriod**2,yo=(n,e)=>2*Math.PI*Math.sqrt(n*n*n/e),Mo={rock:.06,gas:.035},jg={rock:3e-5,gas:.001},Zf=.5,Zg=(n,e,t)=>n*Math.cbrt(e/(3*t)),vn={seam:{name:"Rich seam",text:"Mines here pay double",kinds:["asteroid","moon"],fits:"mine"},relay:{name:"Old relay",text:"See everything inside its ring",range:160},depot:{name:"Fuel depot",text:"Fleets launched from your worlds inside its ring fly 20% faster",range:120,boost:1.2},post:{name:"Listening post",text:"Warns of fleets heading for your worlds. A Security bureau here reaches twice as far",fits:"bureau"},fortress:{name:"Fortress rock",text:"Heavy guns; +1 gun on each of your worlds inside its ring. Guns built here give half as many again",range:100,fits:"defence"},archive:{name:"Ancient archive",text:"Research 25% faster. Research stations here count double",boost:1.25,fits:"lab"},hulk:{name:"Drydock hulk",text:"Ships built here start as veterans. Its shipyards build 50% faster",vet:2.5,fits:"shipyard"},forge:{name:"Tidal forge",text:"Tidal heat runs the foundries: structures, upgrades and ships build twice as fast here",boost:2,giantMoon:!0}},hr={comet:{name:"Comet pass",text:"Catch it on its pass round the sun and hold it to mine it",hold:60,pay:9},derelict:{name:"Derelict warship",text:"Catch the drifting hulk and hold it to salvage veteran ships",hold:45,ships:4},signal:{name:"Lost probe signal",text:"Hold to recover a research level",hold:40},wreck:{name:"Ice-hauler wreck",text:"Hold to salvage its cargo",hold:45,credits:450},convoy:{name:"Refugee convoy",text:"Hold when it docks: the world earns +1/s for good",hold:30,bonus:1},cache:{name:"Supply cache",text:"Hold for a free structure upgrade",hold:30}},wu={comet:{inside:600,q:[70,120],guns:0},derelict:{inside:540,q:[100,160],guns:2}},to=(n,e,t=n.time)=>!e.visitor||!!n.visit&&t>=n.visit.t0&&t<=n.visit.t0+n.visit.T,Gd=(n,e)=>e.visitor?n.visit?n.visit.t0+n.visit.T-n.time:0:1/0;function Jg(n,e){const t=n.visit;if(!t||e<t.t0||e>t.t0+t.T)return{x:4e3,y:0,z:4e3};const i=t.n*(e-t.t0-t.T/2);let r=Math.asinh(i/t.e);for(let l=0;l<30;l++){const u=(t.e*Math.sinh(r)-r-i)/(t.e*Math.cosh(r)-1);if(r-=u,Math.abs(u)<1e-12)break}const s=t.a*(t.e-Math.cosh(r)),a=t.a*Math.sqrt(t.e*t.e-1)*Math.sinh(r),c=a*.04,o=a*Math.sqrt(1-.0016);return{x:s*Math.cos(t.w)-o*Math.sin(t.w),y:c,z:s*Math.sin(t.w)+o*Math.cos(t.w)}}function Jf(n,e,t){const i=n/(e-1),r=Math.acosh(Math.max(1,(t/i+1)/e));return 2*(e*Math.sinh(r)-r)/Math.sqrt(dr/(i*i*i))}function Qg(n,e){const t=wu[e],i=t.q[0]+fr(n)*(t.q[1]-t.q[0]),r=Math.max(...n.bodies.filter(d=>d.parent===null&&!d.visitor).map(d=>d.r)),s=t.inside*no(n);let a=1+1e-6,c=1e4;for(let d=0;d<80;d++){const f=Math.sqrt(a*c);Jf(i,f,r)>s?a=f:c=f}const o=a,l=i/(o-1),u=Jf(i,o,r+60*er(n));n.visit={kind:e,t0:n.time,T:u,q:i,e:o,a:l,n:Math.sqrt(dr/(l*l*l)),w:fr(n)*Math.PI*2};const h=n.bodies.find(d=>d.visitor);return h.owner=Oe,h.ships=0,h.guns=h.guns0=t.guns,h.sieges=[],h.vet=0,h.tf=null,h.name=e==="comet"?`Comet ${String.fromCharCode(65+Math.floor(fr(n)*26))}/${10+Math.floor(fr(n)*90)}`:`Derelict ${Q0(n)}`,h}function ev(n){const e=n.bodies.find(a=>a.visitor),t=(a,c)=>n.bodies.filter(o=>o.owner===a&&!o.visitor).sort((o,l)=>Cn(lt(n,o,n.time),c)-Cn(lt(n,l,n.time),c))[0],i=lt(n,e,n.time),r=(a,c,o,l)=>{const u=t(a,i);if(!(c<1)){if(!u){qt(n,a,"lost",c);return}e.owner=a,e.ships=c,e.vet=o,e.tf=l,e.restUntil=0,sl(n,e,u,c)}},s=e.sieges;e.sieges=[],e.owner!==Oe&&r(e.owner,e.ships,e.vet,e.tf);for(const a of s)r(a.owner,a.n,a.vet,a.name);for(const a of n.fleets){if(a.to!==e.id)continue;const c=Pn(a,n.time),o=t(a.owner,c);if(!o){qt(n,a.owner,"lost",a.n),a.n=0;continue}const l=ls(n,e,o,n.time,nl(n,a.owner),{p:{x:c.x,y:c.y,z:c.z},v:{x:c.vx,y:c.vy,z:c.vz}});qd(a,l,{t0:n.time,to:o.id})}n.fleets=n.fleets.filter(a=>a.n>0||a.probe),e.owner=Oe,e.ships=0,e.guns=0,Mn(n,{type:"visitor",phase:"left",name:e.name}),n.visit=null}const tv={first:300,every:510,jitter:90,notice:90,grace:120};function fr(n){return n.evSeed=Math.imul(n.evSeed^n.evSeed>>>15,2246822507)+1831565813>>>0,n.evSeed/4294967296}function nv(n,e){const t=tv,i=no(n);if(n.nextEvent===void 0&&(n.nextEvent=(t.first+(fr(n)-.5)*2*60)*i),n.happenings||(n.happenings=[]),n.time>=n.nextEvent){const r=Object.keys(hr).filter(o=>!wu[o]||!n.visit),s=r[Math.floor(fr(n)*r.length)];let a;if(wu[s]){const o=Qg(n,s);a={id:n.nextId++,kind:s,at:o.id,starts:n.time+t.notice*i,ends:n.visit.t0+n.visit.T-20,holder:Oe,held:0}}else{const o=n.bodies.filter(h=>!h.home&&!h.visitor&&!n.happenings.some(d=>d.at===h.id)),l=o.some(h=>h.owner===Oe)?o.filter(h=>h.owner===Oe):o,u=l[Math.floor(fr(n)*l.length)];a={id:n.nextId++,kind:s,at:u.id,starts:n.time+t.notice*i,ends:n.time+(t.notice+t.grace)*i+hr[s].hold,holder:Oe,held:0}}const c=n.bodies[a.at];n.happenings.push(a),Mn(n,{type:"event",phase:"soon",kind:s,at:c.id}),n.nextEvent=n.time+(t.every+(fr(n)-.5)*2*t.jitter)*i}for(const r of n.happenings){if(n.time<r.starts)continue;const s=n.bodies[r.at],a=hr[r.kind],c=s.sieges.length?Oe:s.owner;c!==r.holder&&(r.holder=c,r.held=0),c!==Oe&&(r.held+=e,r.kind==="comet"&&(n.credits[c]+=a.pay*e,qt(n,c,"earned",a.pay*e)),r.held>=a.hold&&(iv(n,r,s,c),r.done=!0))}n.visit&&n.time>=n.visit.t0+n.visit.T-1&&ev(n);for(const r of n.happenings)!r.done&&n.time>r.ends&&(r.done=!0,Mn(n,{type:"event",phase:"gone",kind:r.kind,at:r.at}));n.happenings=n.happenings.filter(r=>!r.done)}function iv(n,e,t,i){const r=hr[e.kind];let s="";if(e.kind==="derelict"&&(t.vet=sc(t.vet||0,t.ships,2.5,r.ships),t.ships+=r.ships,s=`${r.ships} veteran ships`),e.kind==="wreck"&&(n.credits[i]+=r.credits,qt(n,i,"earned",r.credits),s=`${r.credits} credits`),e.kind==="convoy"&&(t.bonus=(t.bonus||0)+r.bonus,n.crew&&(t.crewBonus=(t.crewBonus||0)+be.crew.convoy),s=`+${r.bonus}/s here${n.crew?` and ${be.crew.convoy} crew`:""}`),e.kind==="comet"&&(s="the comet mined"),e.kind==="signal"){const a=Object.keys(ni).filter(o=>Vr(n,i,o)&&n.tech[i].project?.key!==o),c=a[Math.floor(fr(n)*a.length)];c?(n.tech[i][c]+=1,c==="drives"&&gp(n,i),s=ni[c].levels[n.tech[i][c]-1]):(n.credits[i]+=400,qt(n,i,"earned",400),s="400 credits")}if(e.kind==="cache"){const a=t.structures.find(c=>be.structures[c.type].maxLevel&&c.level<be.structures[c.type].maxLevel&&c.left<=0&&!c.scrap);a?(a.level+=1,s=`${be.structures[a.type].name} to level ${a.level}`):(n.credits[i]+=300,qt(n,i,"earned",300),s="300 credits")}Mn(n,{type:"event",phase:"won",kind:e.kind,at:t.id,owner:i,what:s})}const ep=(n,e,t)=>e!==Oe&&n.bodies.some(i=>i.perk===t&&i.owner===e),ei={classic:{name:"Classic",text:"Six worlds, a belt, a few moons"},court:{name:"Giant’s court",text:"One huge gas giant ringed with moons",court:!0},wide:{name:"Wide and cold",text:"Few worlds, far apart",gap:30,moons:.5,rocks:3},crowded:{name:"Crowded",text:"Worlds packed close: short, sharp trips",gap:8,stations:3},belt:{name:"Rich belt",text:"A thick asteroid belt worth mining",rocks:8,beltW:12},binary:{name:"Binary",text:"A second sun and its worlds swing around the system; its worlds earn +50%",companion:!0},fuel:{name:"Reaction mass",text:"Ships carry little fuel: they coast, wait for launch windows and swing past worlds",fuel:!0,test:!0},vast:{name:"Vast",text:"A system at true-to-life proportions: every voyage is a commitment",scale:4,thrust:.5,worlds:.6,real:!0,inner:360,sunR:5,sunClear:60,research:.6,test:!0}},er=n=>n.scale||1,no=n=>Math.sqrt(er(n)/(n.thrust||1)),rv=2.6,Qf=6,tp=Object.keys(ei),Ec=tp.filter(n=>!ei[n].test);function Ks(n,e,t=n.time){const i=n.stars[e];if(i.e){const s=i.phase+2*Math.PI*t/i.period;let a=s;for(let l=0;l<6;l++)a-=(a-i.e*Math.sin(a)-s)/(1-i.e*Math.cos(a));const c=i.a*(Math.cos(a)-i.e),o=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(a);return{x:c*Math.cos(i.w)-o*Math.sin(i.w),y:0,z:c*Math.sin(i.w)+o*Math.cos(i.w)}}const r=i.phase+2*Math.PI*t/i.period;return{x:Math.cos(r)*i.r,y:0,z:Math.sin(r)*i.r}}function np(n=new Date){const e=n.toISOString().slice(0,10);let t=2166136261;for(const i of e)t=Math.imul(t^i.charCodeAt(0),16777619);return{seed:t>>>0,system:Ec[(t>>>0)%Ec.length],key:e}}function ip({seed:n=Date.now(),opponents:e=1,mp:t=!1,system:i="classic"}={}){const r=Ti(n),s=ei[i]||ei.classic,a=(A,L)=>{const k=A.filter(V=>!L.has(V)),z=k[Math.floor(r()*k.length)]??`${A[0]} ${L.size}`;return L.add(z),z},c=A=>{for(let L=A.length-1;L>0;L--){const k=Math.floor(r()*(L+1));[A[L],A[k]]=[A[k],A[L]]}return A},o=new Set,l=[],u=A=>(A.id=l.length,A.owner=Oe,A.ships=0,A.build=0,A.queue=0,A.structures=[],A.guns=A.kind==="planet"?A.giant?5:2:1+Math.floor(r()*2),A.sieges=[],A.node=A.id*2.39996%(Math.PI*2),l.push(A),A),h=[],d=s.worlds||1,f=s.scale||1,x=e+1,_=c([1,2,3,4]).slice(0,x);for(let A=0;A<6;A++){const L=s.court&&A===5,k=L||!_.includes(A)&&A>=3&&(r()<(s.court?.3:.7)||A===5&&!h.some(te=>te.giant)),z=L?5:k?3.2+r()*1.2:1.6+r()*1.1;let V=A===0?0:_.includes(A)?1:L?5:k?1+Math.floor(r()*3):Math.floor(r()*2);s.moons&&!_.includes(A)&&(V=Math.floor(V*s.moons));const oe=[];for(let te=0;te<V;te++)oe.push({r:z*3.4+6+te*7+r()*.8,size:(.5+r()*.5)*d});h.push({giant:k,size:z*d,base:z,moons:oe,station:!1})}const m=c([1,2,3,4,5]).slice(0,s.stations||2);for(const A of m)h[A].station=!0;for(const A of _)h[A].station&&(h[A].moons=[]);for(const A of h)A.reach=s.real?A.size*1.6+2:Math.max(A.size*1.6,A.station?A.base*2.4+2.5:0,...A.moons.map(L=>L.r+L.size));const p=(s.gap||16)*f;let v=0,w=null;for(const[A,L]of h.entries())w?L.r=w.r+w.reach+L.reach+p+r()*10*f:L.r=s.inner||56,A===4&&(v=w.r+w.reach+p,L.r=v+(s.beltW||6)*f+p+L.reach+r()*10*f),w=L;for(const A of h){const L=A.giant?"gas":"rock";A.gm=s.real?jg[L]*(A.base/(A.giant?3.8:2.1))**3*dr:Mo[L]*A.size**3;const k=Xd(A);if(s.real){const V=Zg(A.r,A.gm,dr);let oe=k+1;A.moons.forEach((te,ce)=>{te.r=Math.max(oe+te.size*2,V*(.12+.1*ce)),oe=te.r+te.size*2+.5})}A.stationR=s.real?k+1.2:A.base*2.4+1.5;const z=Math.max(0,...A.moons.map(V=>V.r),A.station?A.stationR:0);z&&(A.gm=Math.max(A.gm,3*dr*(z/(Zf*A.r))**3))}for(const A of h){const L=u({kind:"planet",name:a(Xf,o),parent:null,r:A.r,period:jf(A.r),phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:A.size,baseSize:A.base,giant:A.giant,gm:A.gm,hue:r()});for(const k of A.moons)u({kind:"moon",name:a(qf,o),parent:L.id,r:k.r,period:yo(k.r,A.gm),phase:r()*Math.PI*2,incl:(r()-.5)*.3,size:k.size,baseSize:k.size/d,gm:Mo.rock*k.size**3,hue:r()});A.station&&u({kind:"station",name:a(Yg,o),parent:L.id,r:A.stationR,period:yo(A.stationR,A.gm),phase:r()*Math.PI*2,incl:.2,size:.45*d,baseSize:.45,hue:0})}const y=s.rocks||4;for(let A=0;A<y;A++){const L=v+r()*(s.beltW||6)*f,k=u({kind:"asteroid",name:a(Kg,o),parent:null,r:L,period:jf(L),phase:A/y*Math.PI*2+r()*.8,incl:(r()-.5)*.1,size:.5+r()*.4,hue:r()});k.baseSize=k.size,k.size*=d,k.gm=.7*Mo.rock*k.size**3}const S=[{r:0,period:1,phase:0,size:s.sunR?s.sunR/Qf:rv,gm:dr}];if(s.companion){const A=dr*.25,k=Math.max(...l.filter(ce=>ce.parent===null).map(ce=>ce.r))+40,z=.35,V=k/(1-z),oe=yo(V,dr+A),te=600+r()*1800;S.push({a:V,e:z,w:r()*Math.PI*2,period:oe,phase:-2*Math.PI*te/oe,size:.5,clear:9,gm:A}),[[20,1.9],[45,2.4]].forEach(([ce,le],Be)=>{const je=Math.max(Mo.rock*le**3,Be===1?3*A*(7.5/(Zf*ce))**3:0),He=u({kind:"planet",name:a(Xf,o),parent:null,star:1,r:ce,period:yo(ce,A),phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:le,giant:!1,gm:je,hue:r()});Be===1&&u({kind:"moon",name:a(qf,o),parent:He.id,r:7.5,period:yo(7.5,je),phase:r()*Math.PI*2,incl:.2,size:.7,gm:Mo.rock*.7**3,hue:r()})})}u({kind:"visitor",name:"Visitor",parent:null,r:0,period:1,phase:0,incl:0,size:.8,hue:.55,visitor:!0}).guns=0;const b={mp:t,fuel:!!s.fuel,crew:s.crew!==!1,research:s.research||1,scale:s.scale||1,thrust:s.thrust||1,system:s===ei[i]?i:"classic",stars:S,gravity:!0,sunClear:s.sunClear||Qf*S[0].size*1.8,bodies:l,fleets:[],players:x,time:0,winner:null,nextId:1,events:[],nameSeed:Math.floor(r()*1e5)},T=l.filter(A=>A.kind==="planet"),g=_.map(A=>T[A]),M=r()*Math.PI*2;g.forEach((A,L)=>{A.phase=M+L*Math.PI*2/x});for(const A of l)A.kind==="station"&&A.structures.push({type:"shipyard",level:1,left:0});g.forEach((A,L)=>{A.owner=L,A.ships=be.startShips,A.home=!0;for(const k of l)k.parent===A.id&&k.kind==="moon"&&(k.homeMoon=!0);A.structures.push({type:"shipyard",level:1,left:0},{type:"defence",level:1,left:0}),A.guns=Cc(A)});const E=new Set(g.flatMap(A=>[A.id,...l.filter(L=>L.parent===A.id).map(L=>L.id)])),D=c(Object.keys(vn));let R=0;for(const A of D){if(R>=3)break;const L=vn[A],k=l.filter(le=>le.owner===Oe&&!le.perk&&!le.visitor&&!E.has(le.id)&&(!L.kinds||L.kinds.includes(le.kind))&&(!L.giantMoon||le.kind==="moon"&&l[le.parent].giant)),z=le=>le.parent===null?le.id:le.parent,V=le=>l.filter(Be=>Be.perk&&z(Be)===z(le)).length,oe=k.filter(le=>V(le)===0),te=oe.length?oe:k.filter(le=>V(le)<2);if(!te.length)continue;const ce=te[Math.floor(r()*te.length)];ce.perk=A,A==="fortress"&&(ce.structures.push({type:"defence",level:2,left:0}),ce.guns=Cc(ce)+1),A==="hulk"&&!ce.structures.some(le=>le.type==="shipyard")&&ce.structures.push({type:"shipyard",level:1,left:0}),R++}for(const A of l)A.guns0=A.owner===Oe?A.guns:0;return b.evSeed=Math.floor(r()*2**31),b.credits=Array.from({length:b.players},()=>be.startCredits),b.stats={totals:Array.from({length:b.players},()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,earned:0,spent:0,research:0})),series:[]},b.tech=Array.from({length:b.players},()=>({drives:0,sensors:0,intel:0,weapons:0,armour:0,industry:0,project:null})),b}function rp(n){if(n.visitor)return 0;if(n.kind==="station")return 2;if(n.kind==="asteroid")return 1;const e=n.baseSize??n.size;return n.kind==="moon"?n.homeMoon||e>.8?2:1:n.home?5:n.giant?4:e>2.2?3:2}const Vd=n=>!n.scrap&&(n.left<=0||n.next),Ac=(n,e)=>n.structures.some(t=>t.type===e&&Vd(t)),js=(n,e)=>n.structures.reduce((t,i)=>t+(i.type===e&&Vd(i)?i.level:0),0);function Hd(n,e){if(e.owner===Oe||e.perk==="fortress")return 0;const t=lt(n,e,n.time);return n.bodies.some(i=>i.perk==="fortress"&&i.owner===e.owner&&Cn(lt(n,i,n.time),t)<=Ys(n,"fortress"))?1:0}const sv=(n,e)=>(Cc(e)+Hd(n,e)+(Ui(n,e.owner,"hardened")?1:0))*(e.wonder==="citadel"?2:1),Cc=n=>be.baseGuns+Math.round(be.gunsPerDefence*js(n,"defence")*(n.perk==="fortress"&&n.owner!==Oe?1.5:1)),sp=(n,e)=>{if(n.owner===Oe)return{worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};const t=1+.15*(e?Vi(e,n.owner,"industry"):0),i=be.structures,r={worlds:be.income[n.kind]*(n.star?1.5:1)+(n.home?be.homeIncome:0),mines:be.mineIncome*js(n,"mine")*t*(n.perk==="seam"?2:1),skimmers:i.skimmer.income*js(n,"skimmer"),exchanges:i.exchange.income*js(n,"exchange"),bonuses:n.bonus||0};return e&&Sc(e,n.owner,"sundiver")&&(r.bonuses+=.5*(r.worlds+r.mines+r.skimmers+r.exchanges+r.bonuses)),r},io=(n,e)=>{const t=sp(n,e);return t.worlds+t.mines+t.skimmers+t.exchanges+t.bonuses},ra=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?io(i,n):0),0),op=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?i.ships:0),0)+n.fleets.reduce((t,i)=>t+(i.owner===e&&!i.probe?i.n:0),0);function oc(n){if(n.owner===Oe||n.visitor)return 0;const e=be.crew;return(n.home?e.home:n.kind==="planet"?n.giant?e.giant:e.planet:e[n.kind]||0)+e.habitat*js(n,"habitat")+(n.crewBonus||0)}function Rc(n,e){if(!n.crew)return 1/0;const t=n.bodies.reduce((i,r)=>i+(r.owner===e?oc(r):0),0);return Math.floor(t*(1+be.crew.industry*Vi(n,e,"industry")))}const Pc=(n,e)=>op(n,e)+n.bodies.reduce((t,i)=>t+(i.owner===e?i.queue:0),0),sa=(n,e)=>Math.max(0,op(n,e)-be.upkeep.free)*be.upkeep.cost,il=n=>n.structures.filter(e=>e.type==="shipyard"&&Vd(e)).length,ac=n=>{let e=be.structures[n.type].cost;for(let t=1;t<(n.level||1);t++)e+=Or({type:n.type,level:t});return Math.round(e*be.scrapRefund)};function $d(n,e,t){return e.owner===Oe?"not yours":t.scrap?"already scrapping":e.sieges.length?"under attack":null}function ap(n,e,t){return $d(n,e,t)?!1:(t.scrap=be.scrapTime,il(e)||(e.build=0),!0)}function cp(n,e){return e.owner===Oe||e.queue<1?!1:(e.queue-=1,n.credits[e.owner]+=Math.round(be.ship.cost*be.cancelRefund),e.queue===0&&(e.build=0),!0)}function Lc(n,e,t){const i=be.structures[t];return e.owner===Oe?"not yours":i.only&&!i.only.includes(e.kind)?`${e.kind}s can't have one`:i.where==="giant"&&!e.giant?"gas giants only":i.where==="home"&&!e.home?"homeworlds only":i.crewOnly&&!n.crew?"not on this map":e.structures.length>=rp(e)?"no free slots":n.credits[e.owner]<i.cost?"not enough credits":null}function Li(n,e,t){if(Lc(n,e,t))return!1;const i=be.structures[t];return n.credits[e.owner]-=i.cost,qt(n,e.owner,"spent",i.cost),e.structures.push({type:t,level:1,left:i.time}),!0}const Or=n=>Math.round(be.structures[n.type].cost*(n.type==="defence"?.9:(n.level+1)*.75)),eh=(n,e)=>be.ship.time/(Xs(n,e.owner,e)*(Ui(n,e.owner,"torch")?1.25:1)*(e.wonder==="ringyard"?3:1)*(e.perk==="hulk"?1.5:1)),rl=n=>be.structures[n.type].time*(1+n.level*.5);function qo(n,e,t){const i=be.structures[t.type];return e.owner===Oe?"not yours":i.maxLevel?t.left>0||t.scrap?"busy":t.level>=i.maxLevel?"at max level":n.credits[e.owner]<Or(t)?"not enough credits":null:"can't be upgraded"}function zo(n,e,t){return qo(n,e,t)?!1:(qt(n,e.owner,"spent",Or(t)),n.credits[e.owner]-=Or(t),t.next=t.level+1,t.left=rl(t),!0)}function Dc(n,e){return e.owner===Oe?"not yours":Ac(e,"shipyard")?n.credits[e.owner]<be.ship.cost?"not enough credits":Pc(n,e.owner)>=Rc(n,e.owner)?"no crew to spare":null:"needs a shipyard"}function Tu(n,e){return Dc(n,e)?!1:(n.credits[e.owner]-=be.ship.cost,qt(n,e.owner,"spent",be.ship.cost),e.queue+=1,!0)}function lp(n,e){const t=e-(n.node||0),i=Math.cos(t)*n.r,r=Math.sin(t)*n.r,s=Math.cos(n.node||0),a=Math.sin(n.node||0),c=Math.cos(n.incl),o=Math.sin(n.incl);return{x:i*s-r*a*c,y:r*o,z:i*a+r*s*c}}function lt(n,e,t){if(e.visitor)return Jg(n,t);const i=lp(e,e.phase+2*Math.PI*t/e.period);if(e.star){const r=Ks(n,e.star,t);i.x+=r.x,i.z+=r.z}if(e.parent!==null){const r=lt(n,n.bodies[e.parent],t);i.x+=r.x,i.y+=r.y,i.z+=r.z}return i}const up=n=>2*Math.sqrt(n/be.accel);function th(n,e,t){const r=lt(n,e,t-.5),s=lt(n,e,t+.5);return{x:(s.x-r.x)/(2*.5),y:(s.y-r.y)/(2*.5),z:(s.z-r.z)/(2*.5)}}const Wd=14,Xd=n=>n.size*1.8+.4,ov=n=>n.gm?Math.sqrt(n.gm/Xd(n)):0,Dr=(n,e)=>({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}),an=n=>Math.hypot(n.x,n.y,n.z),os=(n,e=.5)=>Math.min(n*e,Math.max(n*.35,n/2-be.flipTime/2));function av(n,e,t,i,r,s){const a={x:t.x-n.x-e.x*r,y:t.y-n.y-e.y*r,z:t.z-n.z-e.z*r},c=Dr(i,e),o=s*s/2,l=1/(s*(r-s)),u={x:(a.x-o*c.x/s)*l,y:(a.y-o*c.y/s)*l,z:(a.z-o*c.z/s)*l},h={x:c.x/s-u.x,y:c.y/s-u.y,z:c.z/s-u.z};return{a1:u,a2:h,need:Math.max(an(u),an(h))}}function cs(n,e){if(n.legs){const[r,s]=n.legs;return e<r.T?cs(r,e):cs(s,e-r.T)}const t=Ic(n,e);if(!n.gs)return t;const i=fv(n.gs,Math.max(0,Math.min(1,e/n.T)));return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2],vx:t.vx+i[3],vy:t.vy+i[4],vz:t.vz+i[5]}}function Ic(n,e){const t=os(n.T,n.bf),i=Math.min(e,t);let r=n.p0.x+n.v0.x*i+.5*n.a1.x*i*i,s=n.p0.y+n.v0.y*i+.5*n.a1.y*i*i,a=n.p0.z+n.v0.z*i+.5*n.a1.z*i*i,c=n.v0.x+n.a1.x*i,o=n.v0.y+n.a1.y*i,l=n.v0.z+n.a1.z*i;const u=Math.max(0,Math.min(e,n.T-t)-t);if(r+=c*u,s+=o*u,a+=l*u,e>n.T-t){const h=e-(n.T-t);r+=c*h+.5*n.a2.x*h*h,s+=o*h+.5*n.a2.y*h*h,a+=l*h+.5*n.a2.z*h*h,c+=n.a2.x*h,o+=n.a2.y*h,l+=n.a2.z*h}return{x:r,y:s,z:a,vx:c,vy:o,vz:l}}function cv(n,e,t,i=[],r=!1){const s=r?[]:e.bodies.filter(c=>c.kind==="planet"&&!i.includes(c.id)),a=r?48:128;for(let c=1;c<a;c++){const o=c/a*n.T,l=cs(n,o);if(an(l)<(e.sunClear||Wd))return!1;for(let u=1;u<(e.stars||[]).length;u++)if(Cn(l,Ks(e,u,t+o))<e.stars[u].clear)return!1;for(const u of s)if(Cn(l,lt(e,u,t+o))<u.size*1.3+.3)return!1}return!0}function dp(n,e,t=n.time){if(e.owner===Oe)return 1;const i=lt(n,e,t);return n.bodies.some(r=>r.perk==="depot"&&r.owner===e.owner&&Cn(lt(n,r,t),i)<=Ys(n,"depot"))?vn.depot.boost:1}function fo(n,e,t,i=n.time,r=1,s=!1,a=.5,c=Fd(n,e.owner)){const o=dp(n,e,i)*(e.wonder==="massdriver"?1.5:1);r*=o*o,c*=o;const l=nl(n,e.owner)*r,u=ls(n,e,t,i,l,null,s,a,!1,null,c);if(u.out)return s?u:{...u,window:lv(n,e,t,i,l,c)};const h=s?null:u.flyby!==void 0?n.bodies[u.flyby]:pv(n,u);return h?{...u,assist:h.id}:u}const fp=n=>2400*no(n);function lv(n,e,t,i,r,s){const a=30*no(n);for(let c=a;c<=fp(n)/2;c+=a){if(!to(n,t,i+c))return null;if(!ls(n,e,t,i+c,r,null,!0,.5,!0,null,s).out)return c}return null}const nh={share:1},Si=64,uv={min:.06};function dv(...n){return[...new Set(n.filter(e=>e&&e.id!==void 0).map(e=>e.parent===null?e.id:e.parent))]}function Uc(n,e,t,i){const r=i/Si,s=[],a=n.stars||[],c=new Set(e.map(o=>n.bodies[o].star).filter(Boolean));for(let o=1;o<a.length;o++)a[o].gm&&!c.has(o)&&s.push({gm:a[o].gm,s2:(a[o].clear*.15)**2,at:l=>Ks(n,o,l)});for(const o of n.bodies)o.kind==="planet"&&o.gm&&!e.includes(o.id)&&s.push({b:o,gm:o.gm,s2:(o.size*.5)**2,at:l=>lt(n,o,l)});for(const o of s){o.gm*=nh.share,o.P=new Float64Array(3*(Si+1));for(let l=0;l<=Si;l++){const u=o.at(t+l*r);o.P[3*l]=u.x,o.P[3*l+1]=u.y,o.P[3*l+2]=u.z}}return{list:s,sun:dr*nh.share,s2:((n.sunClear||Wd)*.15)**2}}function Eu(n,e,t,i,r,s){const a=t*t+i*i+r*r+n.s2,c=-n.sun/(a*Math.sqrt(a));let o=c*t,l=c*i,u=c*r;for(const h of n.list){const d=h.P[3*e],f=h.P[3*e+1],x=h.P[3*e+2],_=t-d,m=i-f,p=r-x,v=_*_+m*m+p*p+h.s2,w=-h.gm/(v*Math.sqrt(v)),y=d*d+f*f+x*x,S=-h.gm/(y*Math.sqrt(y));o+=w*_+S*d,l+=w*m+S*f,u+=w*p+S*x}s[0]=o,s[1]=l,s[2]=u}function hp(n,e){const t=n.T/Si,i=[0,0,0],r=[[0,0,0,0,0,0]];let s=0,a=0,c=0,o=0,l=0,u=0,h=Ic(n,0);Eu(e,0,h.x,h.y,h.z,i);for(let d=0;d<Si;d++)o+=i[0]*t*.5,l+=i[1]*t*.5,u+=i[2]*t*.5,s+=o*t,a+=l*t,c+=u*t,h=Ic(n,(d+1)*t),Eu(e,d+1,h.x+s,h.y+a,h.z+c,i),o+=i[0]*t*.5,l+=i[1]*t*.5,u+=i[2]*t*.5,r.push([s,a,c,o,l,u]);return r}function fv(n,e){const t=Math.min(Si-1,Math.floor(e*Si)),i=e*Si-t,r=n[t],s=n[t+1];return r.map((a,c)=>a+(s[c]-a)*i)}function hv(n,e){for(let t=0;t<6;t++){let i=t;for(let r=t+1;r<6;r++)Math.abs(n[r][t])>Math.abs(n[i][t])&&(i=r);if([n[t],n[i]]=[n[i],n[t]],[e[t],e[i]]=[e[i],e[t]],Math.abs(n[t][t])<1e-14)return!1;for(let r=t+1;r<6;r++){const s=n[r][t]/n[t][t];for(let a=t;a<6;a++)n[r][a]-=s*n[t][a];e[r]-=s*e[t]}}for(let t=5;t>=0;t--){for(let i=t+1;i<6;i++)e[t]-=n[t][i]*e[i];e[t]/=n[t][t]}return!0}function ih(n,e){const t=_=>[{x:_[0],y:_[1],z:_[2]},{x:_[3],y:_[4],z:_[5]}],i=_=>{const[m,p]=t(_),v={...n,a1:m,a2:p},w=hp(v,e),y=Ic(v,n.T),S=w[Si],b=[y.x+S[0]-n.p1.x,y.y+S[1]-n.p1.y,y.z+S[2]-n.p1.z,y.vx+S[3]-n.v1.x,y.vy+S[4]-n.v1.y,y.vz+S[5]-n.v1.z];return{a:_,gs:w,r:b,miss:Math.hypot(b[0],b[1],b[2]),slip:Math.hypot(b[3],b[4],b[5])}},r=_=>_.miss+_.slip*20;let s=i([n.a1.x,n.a1.y,n.a1.z,n.a2.x,n.a2.y,n.a2.z]);const a=()=>{const m=[0,1,2,3,4,5].map(p=>{const v=s.a.slice();return v[p]+=1e-5,i(v).r});return[0,1,2,3,4,5].map(p=>m.map(v=>(v[p]-s.r[p])/1e-5))},c=os(n.T,n.bf),o=c*n.T-c*c/2,l=c*c/2;let u=[0,1,2,3,4,5].map(_=>[0,1,2,3,4,5].map(m=>_%3!==m%3?0:_<3?m<3?o:l:c)),h=!1;for(let _=0;_<16&&(s.miss>.02||s.slip>.001);_++){u||(u=a(),h=!0);const m=s.r.map(v=>-v);if(!hv(u.map(v=>v.slice()),m))break;let p=null;for(let v=1;v>=1/16;v/=2){const w=i(s.a.map((y,S)=>y+m[S]*v));if(r(w)<r(s)){p=w;break}if(!h)break}if(!p){if(h)break;u=null;continue}!h&&r(p)>r(s)*.3&&(u=null),h=!1,s=p}const[d,f]=t(s.a),x=s.miss<.3&&s.slip<.005;return{...n,a1:d,a2:f,gs:s.gs,need:x?Math.max(an(d),an(f)):1/0}}function pv(n,e){if(!e.gs||e.legs)return null;const t=Uc(n,e.skip,e.tp,e.T),i=e.T/Si,r=[0,0,0];let s=null;for(const a of t.list){if(!a.b)continue;const c={list:[a],sun:0,s2:1};let o=0;for(let l=0;l<=Si;l++){const u=cs(e,l*i),h=Math.hypot(u.vx,u.vy,u.vz)||1;Eu(c,l,u.x,u.y,u.z,r),o+=(r[0]*u.vx+r[1]*u.vy+r[2]*u.vz)/h*i*(l===0||l===Si?.5:1)}o>uv.min*Math.sqrt(er(n))&&(!s||o>s.kick)&&(s={b:a.b,kick:o})}return s&&s.b}function pp(n,e){if(e.legs){for(const t of e.legs)pp(n,t);return e}return e.grav&&!e.gs&&(e.gs=hp(e,Uc(n,e.skip,e.tp,e.T))),e}function ls(n,e,t,i,r,s=null,a=!1,c=.5,o=!1,l=null,u=1/0){const h=c;l=l||dv(e,t);const d=s?s.p:lt(n,e,i),f=s?s.v:th(n,e,i),x=S=>cv(S,n,i,l,a),_=(S,b)=>{if(o||!b||t.fixed||u<1/0)return S;const T=mv(n,e,t,i,r,d,f,a,c,l);return T&&T.T<S.T?T:S},m=(S,b=h)=>{const T=t.fixed?t.fixed.p:lt(n,t,i+S),g=Dr(d,T),M=an(g)||1,E=t.fixed?0:Xd(t),D={x:T.x+g.x/M*E,y:T.y+g.y/M*E,z:T.z+g.z/M*E},R=t.fixed?t.fixed.v:th(n,t,i+S),A=t.fixed?0:ov(t),L=Math.hypot(g.x,g.z);return A&&L>1e-9&&(R.x-=g.z/L*A,R.z+=g.x/L*A),{p0:d,v0:f,p1:D,v1:R,T:S,...b<.5?{bf:b}:{},...av(d,f,D,R,S,os(S,b))}},p=(S,b=h)=>({...ih(m(S,b),Uc(n,l,i,S)),grav:!0,tp:i,skip:l}),v=S=>S.need<=r&&x(S);if(u<1/0){const S=A=>os(A.T,A.bf)*(an(A.a1)+an(A.a2)),b=A=>{if(m(A,.5).need>r)return null;let L=.01,k=.5;if(m(A,L).need<=r)return L;for(let z=0;z<14;z++){const V=(L+k)/2;m(A,V).need<=r?k=V:L=V}return k},T=(A,L)=>({x:A.x*L,y:A.y*L,z:A.z*L}),g=(A,L,k)=>{const z=m(A,.5),V=Dr(T(Dr(L,d),1/k),f),oe=Dr(z.v1,T(Dr(z.p1,L),1/(A-k))),te=Math.min(.5,Math.max(.01,Math.max(an(V),an(oe))/r/A*1.15)),ce=os(A,te);return{...m(A,te),a1:T(V,1/ce),a2:T(oe,1/ce),guess:an(V)+an(oe)}},M=n.bodies.filter(A=>A.kind==="planet"&&A.gm>=.4&&!l.includes(A.id)),E=A=>{const L=b(A);if(a||!n.gravity){if(L===null)return null;const Te=m(A,L);return S(Te)<=u&&x(Te)?Te:null}let k=null;const z=Te=>({...ih(Te,k||(k=Uc(n,l,i,A))),grav:!0,tp:i,skip:l}),V=Te=>Te.need<=r&&S(Te)<=u&&x(Te);if(L!==null&&S(m(A,L))<=u*1.5)for(const Te of[1,1.5,2.5]){const re=z(m(A,Math.min(.5,L*Te)));if(re.need<=r){if(V(re))return re;break}}const oe=lt(n,t,i+A),te=Math.atan2(d.z,d.x),ce=((Math.atan2(oe.z,oe.x)-te)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);if(ce>.3){const Te=te+ce/2,re=(an(d)+an(oe))/2,ue=g(A,{x:Math.cos(Te)*re,y:0,z:Math.sin(Te)*re},A/2);if(ue.guess<=u*1.5){const{guess:Ae,...nt}=z(ue);if(V(nt))return{...nt,arc:!0}}}const le=Dr(oe,d),Be=Math.hypot(le.x,le.z)||1,we={x:-le.z/Be,z:le.x/Be},je=[];for(const Te of M)for(const re of[.35,.5,.65]){const ue=lt(n,Te,i+A*re);for(const Ae of[1,-1]){const nt={x:ue.x+we.x*Ae*(Te.size*2.5+1),y:ue.y,z:ue.z+we.z*Ae*(Te.size*2.5+1)},pe=g(A,nt,A*re);pe.guess<=u*2&&je.push({...pe,flyby:Te.id})}}je.sort((Te,re)=>Te.guess-re.guess);const He=(Te,re)=>{for(let ue=0;ue<=64;ue++)if(Cn(cs(Te,ue/64*A),lt(n,re,i+ue/64*A))<re.size*8)return!0;return!1};for(const Te of je.slice(0,2)){const{flyby:re,guess:ue,...Ae}=z(Te);if(V(Ae))return He(Ae,n.bodies[re])?{...Ae,flyby:re}:Ae}return null},D=a?1.1:1.07;let R=null;for(let A=Math.max(4,up(Cn(d,lt(n,t,i)))*Math.sqrt(be.accel/r)*.6);A<fp(n);A*=D){let L=E(A);if(!L){R=A;continue}if(R!==null)for(let k=0;k<3;k++){const z=(R+L.T)/2,V=E(z);V?L=V:R=z}return{...L,fuel:Math.min(1,S(L)/u)}}return{p0:d,v0:f,T:1/0,need:1/0,out:!0}}let w=1,y=!1;for(let S=2;S<2e4;S+=Math.max(2,S*.04)){let b=m(S);if(b.need>r){w=S;continue}let T=w,g=S;for(let A=0;A<30;A++){const L=(T+g)/2;m(L).need>r?T=L:g=L}if(b=m(g),!x(b)){y=!0,w=S;continue}if(!n.gravity||a)return _(b,y);let M=null,E=null,D=null;const R=A=>{const L=p(A);return L.need<1/0&&(!D||L.need/r<D.need/r)&&(D=L),v(L)?L:null};if(M=R(g),M)for(let A=g/1.08;A>g*.4;A/=1.08){const L=R(A);if(!L){E=A;break}M=L}else{E=g;for(let A=g*1.06;A<g*8+40&&(M=R(A),!M);A*=1.06)E=A}if(M&&E!==null){let A=Math.min(E,M.T),L=Math.max(E,M.T);E>M.T&&([A,L]=[M.T,E]);for(let k=0;k<3;k++){const z=(A+L)/2,V=R(z);V&&V.T<M.T&&(M=V),E<M.T?V?L=z:A=z:V?A=z:L=z}}return _(M||D||b,y)}return _(m(2e4),y)}function mv(n,e,t,i,r,s,a,c,o,l){const u=n.sunClear||Wd,h=up(Cn(s,lt(n,t,i)))*Math.sqrt(be.accel/r),d=lt(n,t,i+h),f=Dr(d,s),x=f.x*f.x+f.y*f.y+f.z*f.z||1,_=Math.max(0,Math.min(1,-(s.x*f.x+s.y*f.y+s.z*f.z)/x));let m={x:s.x+f.x*_,y:0,z:s.z+f.z*_};an(m)<1&&(m={x:-f.z,y:0,z:f.x});const p=an(m)||1;m={x:m.x/p,y:0,z:m.z/p};let v=null;for(const w of[1,-1])for(const y of c?[1.35]:[1.35,1.9]){const S={x:m.x*w*u*y,y:0,z:m.z*w*u*y};let b={x:-S.z,y:0,z:S.x};b.x*f.x+b.z*f.z<0&&(b={x:-b.x,y:0,z:-b.z});const T=an(b)||1,g=Cn(s,S),M=Cn(S,d),E=.8*Math.sqrt(2*r*Math.min(g,M)),D={x:b.x/T*E,y:0,z:b.z/T*E},R=ls(n,e,{fixed:{p:S,v:D}},i,r,{p:s,v:a},c,o,!0,l);if(R.need>r||v&&R.T>=v.T)continue;const A=cs(R,R.T),L=ls(n,e,t,i+R.T,r,{p:{x:A.x,y:A.y,z:A.z},v:{x:A.vx,y:A.vy,z:A.vz}},c,o,!0,l);if(L.need>r)continue;const k=R.T+L.T;(!v||k<v.T)&&(v={legs:[R,L],T:k,p0:s,v0:a,p1:L.p1,v1:L.v1,a1:R.a1,a2:L.a2,need:Math.max(R.need,L.need),detour:!0,...o<.5?{bf:o}:{}})}return v}function qd(n,e,t={}){for(const i of["assist","bf","gs","legs","detour","grav","tp","skip"])delete n[i];return Object.assign(n,e,t)}const Yd=(n,e)=>e.restUntil>n.time?Math.min(e.resting||0,e.ships):0,zr=(n,e)=>e.ships-Yd(n,e);function mp(n,e,t){e.resting=Yd(n,e)+t,e.restUntil=n.time+be.cooldown}function sl(n,e,t,i,r=!1){if(i=Math.min(Math.floor(i),zr(n,e)),i<1||e===t||n.winner!==null)return null;const s=fo(n,e,t,n.time,1,!1,r?tl.burn:.5);if(s.out||s.T>Gd(n,t)-5||!to(n,t))return null;if(e.ships-=i,e.sieges.length){const c=Math.floor(i/2);i-=c,qt(n,e.owner,"lost",c);for(const o of e.sieges)qt(n,o.owner,"killed",c/e.sieges.length);if(Mn(n,{type:"breakout",owner:e.owner,at:e.id,lost:c,n:i}),i<1)return null}const a={id:n.nextId++,owner:e.owner,n:i,from:e.id,to:t.id,...s,t0:n.time,vet:e.vet||0};return r&&(a.dark=!0),e.tf&&i*2>=i+e.ships?(a.name=e.tf,e.tf=null):a.name=Q0(n),e.ships||(e.tf=null),n.fleets.push(a),Mn(n,{type:"launch",owner:a.owner,fleet:a.id,name:a.name,n:i,from:e.id,to:t.id,T:a.T,...r?{dark:!0}:{}}),a}function gp(n,e){if(!n.fuel)for(const t of n.fleets){if(t.owner!==e)continue;const i=t.T-(n.time-t.t0);if(i<10)continue;const r=Pn(t,n.time),s=nl(n,e)*(t.probe?be.probe.speed:1),a=ls(n,n.bodies[t.from],n.bodies[t.to],n.time,s,{p:{x:r.x,y:r.y,z:r.z},v:{x:r.vx,y:r.vy,z:r.vz}},!1,t.bf||.5);a.T>=i||qd(t,a,{t0:n.time})}}function gv(n,e,t){if(!e||e.probe||n.fuel||!!e.dark===t||n.winner!==null||e.T-(n.time-e.t0)<10)return!1;const r=Pn(e,n.time),s=ls(n,n.bodies[e.from],n.bodies[e.to],n.time,nl(n,e.owner),{p:{x:r.x,y:r.y,z:r.z},v:{x:r.vx,y:r.vy,z:r.vz}},!1,t?tl.burn:.5);return qd(e,s,{t0:n.time}),t?e.dark=!0:delete e.dark,!0}function Kd(n,e,t){return e.owner===Oe?"not yours":!t||t===e?"pick a target":Ac(e,"shipyard")?n.credits[e.owner]<be.probe.cost?"not enough credits":null:"needs a shipyard"}function Au(n,e,t){if(Kd(n,e,t)||n.winner!==null||!to(n,t))return null;const i=fo(n,e,t,n.time,be.probe.speed,!1,.5,Fd(n,e.owner)*be.fuel.probe);if(i.out)return null;n.credits[e.owner]-=be.probe.cost,qt(n,e.owner,"spent",be.probe.cost);const r={id:n.nextId++,owner:e.owner,n:0,probe:!0,from:e.id,to:t.id,...i,t0:n.time,vet:0,name:"Probe"};return n.fleets.push(r),r}function Pn(n,e){const t=Math.min(n.T,Math.max(0,e-n.t0));if(n.legs){const[u,h]=n.legs,d=t<u.T?u:h;return{...Pn({...d,t0:0},d===u?t:t-u.T),progress:t/n.T,leg:d===u?1:2}}const i=cs(n,t),r=n.T/2,s=r-be.flipTime/2,a=Math.abs(t-r)<be.flipTime/2,c=an(n.a1)>1e-9?{x:n.a1.x/an(n.a1),y:n.a1.y/an(n.a1),z:n.a1.z/an(n.a1)}:{x:0,y:0,z:1},o=an(n.a2)>1e-9?{x:n.a2.x/an(n.a2),y:n.a2.y/an(n.a2),z:n.a2.z/an(n.a2)}:c;let l=t<r?c:o;if(a){const u=(1-Math.cos((t-s)/be.flipTime*Math.PI))/2,h=Math.max(-1,Math.min(1,c.x*o.x+c.y*o.y+c.z*o.z)),d=Math.acos(h)*u;let f={x:c.y*o.z-c.z*o.y,y:c.z*o.x-c.x*o.z,z:c.x*o.y-c.y*o.x};an(f)<1e-4&&(f=Math.abs(c.y)<.9?{x:-c.z,y:0,z:c.x}:{x:1,y:0,z:0});const x=an(f)||1;f={x:f.x/x,y:f.y/x,z:f.z/x};const _=Math.cos(d),m=Math.sin(d),p={x:f.y*c.z-f.z*c.y,y:f.z*c.x-f.x*c.z,z:f.x*c.y-f.y*c.x},v=f.x*c.x+f.y*c.y+f.z*c.z;l={x:c.x*_+p.x*m+f.x*v*(1-_),y:c.y*_+p.y*m+f.y*v*(1-_),z:c.z*_+p.z*m+f.z*v*(1-_)}}return{x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz,nx:l.x,ny:l.y,nz:l.z,progress:t/n.T,burning:!a&&t<n.T&&(t<os(n.T,n.bf)||t>n.T-os(n.T,n.bf)),flipping:a,phase:t<r?1:2}}function Nc(n,e){if(e.owner===Oe||e.visitor)return[];const t=e.parent===null?e:n.bodies[e.parent],i=[t,...n.bodies.filter(s=>s.parent===t.id)],r=[];for(const s of i){if(s===e||s.owner!==e.owner||s.guns<=0)continue;const a=s.wonder==="citadel"?1:s===t?be.coverShare:be.moonCover;r.push({from:s,n:s.guns*a})}return r}const ho=(n,e)=>Nc(n,e).reduce((t,i)=>t+i.n,0);function vv(n,e,t){let i=!1;const r=e.sieges.reduce((c,o)=>c+o.n,0),s=(e.ships*(1+eo*An(e.vet))+e.guns+ho(n,e))*Od(n,e.owner);let a=0;for(const c of e.sieges){const o=r>0?c.n/r:0;c.dmg=(c.dmg||0)+be.fire*s*o*Tc(n,c.owner)*t,a+=c.n*(1+eo*An(c.vet))*q0(n,c.owner)}for(e.dmg=(e.dmg||0)+be.fire*a*Tc(n,e.owner)*t,e.fighting=!0;e.dmg>=1&&e.ships+e.guns>0;){e.dmg-=1,e.ships>0&&(e.guns<1||e.ships>=e.guns)?(e.ships-=1,qt(n,e.owner,"lost"),qt(n,e.sieges.slice().sort((o,l)=>l.n-o.n)[0].owner,"killed")):e.guns=Math.max(0,e.guns-1);const c=e.sieges.slice().sort((o,l)=>l.n-o.n)[0];c.kills=(c.kills||0)+1,e.lostDef=(e.lostDef||0)+1,e.totDef=(e.totDef||0)+1}for(const c of e.sieges)for(;c.dmg>=1&&c.n>0;)c.dmg-=1,c.n-=1,e.lostAtk=(e.lostAtk||0)+1,e.totAtk=(e.totAtk||0)+1,qt(n,c.owner,"lost"),qt(n,e.owner,"killed"),e.kills=(e.kills||0)+1;for(const c of e.sieges)c.n<=0&&Mn(n,{type:"wiped",owner:c.owner,name:c.name,at:e.id,vs:e.owner});if(e.ships||(e.tf=null),e.sieges=e.sieges.filter(c=>c.n>0),e.ships+e.guns<=0&&e.sieges.length){const c=e.sieges.sort((o,l)=>l.n-o.n)[0];qt(n,e.owner,"worldsLost"),qt(n,c.owner,"captured"),Mn(n,{type:"captured",owner:c.owner,from:e.owner,at:e.id,name:c.name}),e.owner=c.owner,e.ships=c.n,e.resting=0,mp(n,e,c.n),e.vet=Math.min(4.5,(c.vet||0)+Kf(c.foe0||1,c.n0||c.n,c.kills||0)),e.cadre=An(e.vet),e.tf=c.name,An(e.vet)>An(c.vet)&&Mn(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),e.guns=0,e.dmg=0,e.build=0,e.slips=[],e.queue=0,e.structures=e.structures.filter(o=>o.left<=0||o.next);for(const o of e.structures)o.next&&(delete o.next,o.left=0),delete o.scrap;e.sieges=e.sieges.filter(o=>o!==c),e.captured=!0,i=!0}if(!e.sieges.length){if(e.fighting&&!i&&e.ships>0){const c=e.vet;e.vet=Math.min(4.5,(e.vet||0)+Kf(e.foe0||1,e.own0||1,e.kills||0)),An(e.vet)>An(c)&&Mn(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),Mn(n,{type:"held",owner:e.owner,at:e.id})}e.dmg=0,e.fighting=!1,e.foe0=e.own0=e.kills=0}}function jd(n,e){if(n.winner!==null)return;n.stats&&(!n.stats.series.length||n.time-n.stats.series.at(-1).t>=10)&&Wf(n),n.time+=e;for(const i of n.bodies){if(i.owner===Oe){!i.sieges.length&&i.guns<(i.guns0||0)&&(i.guns=Math.min(i.guns0,i.guns+be.gunRegen*e));continue}n.credits[i.owner]+=io(i,n)*e,qt(n,i.owner,"earned",io(i,n)*e);const r=Xs(n,i.owner,i),s=sv(n,i);if(i.guns>s&&(i.guns=s),i.sieges.length)continue;for(const l of i.structures){if(l.scrap){l.scrap=Math.max(0,l.scrap-e),l.scrap||(l.gone=!0);continue}l.left<=0||(l.left=Math.max(0,l.left-e*r),l.left===0&&l.next&&(l.level=l.next,delete l.next))}for(const l of i.structures.filter(u=>u.gone))n.credits[i.owner]+=ac(l),qt(n,i.owner,"earned",ac(l)),Mn(n,{type:"scrapped",owner:i.owner,at:i.id,what:l.type,fee:ac(l)});i.structures=i.structures.filter(l=>!l.gone);const a=il(i);for(i.slips||(i.slips=[]);i.slips.length<Math.min(a,i.queue);)i.slips.push(0);i.slips.length=Math.min(i.slips.length,a,i.queue);const c=(Ui(n,i.owner,"torch")?1.25:1)*(i.wonder==="ringyard"?3:1)*(i.perk==="hulk"?1.5:1);i.slips=i.slips.map(l=>l+e*r*c/be.ship.time);for(const l of i.slips)l>=1&&(i.vet=sc(i.vet||0,i.ships,Math.max(i.perk==="hulk"?vn.hulk.vet:0,Sc(n,i.owner,"college")?2.5:0),1),i.queue-=1,i.ships+=1,qt(n,i.owner,"built"));i.slips=i.slips.filter(l=>l<1),i.build=i.slips.length?Math.max(...i.slips):0;const o=be.gunRegen*(Ui(n,i.owner,"hardened")?2:1);i.guns<s&&(i.guns=Math.min(s,i.guns+o*e))}for(let i=0;i<n.players;i++){const r=sa(n,i)*e;if(r>0){const s=Math.min(n.credits[i],r);n.credits[i]-=s,qt(n,i,"spent",s)}}for(const i of n.bodies)i.owner!==Oe&&(i.ships?(i.cadre=Math.max(i.cadre||0,An(i.vet)),!i.sieges.length&&An(i.vet)<i.cadre&&(i.vet=Math.min(J0[i.cadre-1],(i.vet||0)+be.drill*e))):i.cadre=0);for(const[i,r]of(n.tech||[]).entries())if(r.project&&(r.project.left-=e*ma(n,i),r.project.left<=0)){const s=Nn[r.project.key]?1:ni[r.project.key].cost.length;r[r.project.key]=Math.min(s,(r[r.project.key]||0)+1),r.project.key==="drives"&&gp(n,i),Mn(n,{type:"research",owner:i,key:r.project.key,level:r[r.project.key]}),r.project=null,qt(n,i,"research")}n.scans&&(n.scans=n.scans.filter(i=>i.until>n.time)),qg(n,e),n.fleets=n.fleets.filter(i=>{if(n.time-i.t0<i.T)return!0;const r=n.bodies[i.to];if(i.probe)return(n.scans||(n.scans=[])).push({owner:i.owner,body:r.id,until:n.time+be.probe.scan}),Mn(n,{type:"probed",owner:i.owner,at:r.id}),!1;if(r.owner===i.owner)r.cadre=Math.max(r.cadre||0,An(r.vet),An(i.vet)),r.vet=sc(r.vet||0,r.ships,i.vet||0,i.n),(!r.tf||i.n>=r.ships)&&(r.tf=i.name),r.ships+=i.n,mp(n,r,i.n),Mn(n,{type:"arrived",owner:i.owner,name:i.name,n:i.n,at:r.id});else{let s=0;if(Ui(n,r.owner,"pdnet")){const o=Math.floor(i.n*.15);s=i.n*.15-o,i.n-=o,qt(n,i.owner,"lost",o),qt(n,r.owner,"killed",o)}if(i.n<=0)return Mn(n,{type:"wiped",owner:i.owner,name:i.name,at:r.id,vs:r.owner}),!1;if(Ui(n,i.owner,"kinetic")){let o=Math.floor(i.n*.1);for(r.dmg=(r.dmg||0)+(i.n*.1-o);o-- >0&&r.ships+r.guns>0;)r.ships>0?(r.ships-=1,qt(n,r.owner,"lost"),qt(n,i.owner,"killed")):r.guns=Math.max(0,r.guns-1)}const a=r.ships*(1+eo*An(r.vet))+r.guns+ho(n,r);r.own0=Math.max(r.own0||0,a),r.foe0=(r.foe0||0)+i.n;const c=r.sieges.find(o=>o.owner===i.owner);c?(c.vet=sc(c.vet||0,c.n,i.vet||0,i.n),c.n+=i.n,c.n0+=i.n,c.dmg=(c.dmg||0)+s):r.sieges.push({owner:i.owner,n:i.n,vet:i.vet||0,name:i.name,n0:i.n,foe0:a,dmg:s}),Mn(n,{type:"engaged",owner:i.owner,name:i.name,n:i.n,at:r.id,vs:r.owner})}return!1});for(const i of n.bodies)i.sieges.length&&vv(n,i,e);Hg(n,e),n.evSeed!==void 0&&nv(n,e);const t=new Set;for(const i of n.bodies){i.owner!==Oe&&t.add(i.owner);for(const r of i.sieges)t.add(r.owner)}for(const i of n.fleets)i.probe||t.add(i.owner);n.mp?t.size<=1&&(n.winner=[...t][0]??Oe):t.has($f)?t.size===1&&(n.winner=$f):n.winner=[...t][0]??Oe,n.winner!==null&&n.stats&&Wf(n)}const xv={cadet:{think:14,acts:1,margin:.85,extra:0,seenExtra:0,skill:.1,eco:.5,calm:480},easy:{think:8,acts:1,margin:1,extra:1,seenExtra:0,skill:.35,eco:.7,calm:240},normal:{think:4,acts:2,margin:1.2,extra:1,seenExtra:1,skill:.7},hard:{think:2,acts:3,margin:1.3,extra:1,seenExtra:1,skill:.95,eco:1.4,smart:!0},brutal:{think:.8,acts:5,margin:1.4,extra:2,seenExtra:1,skill:1,eco:2.1,smart:!0}};function Cu(n,e,t){return{owner:n,d:xv[e],rand:t,clock:2+t()*3,plan:null}}const cc=(n,e,t,i)=>e.sieges.length?null:sl(n,e,t,i);function rh(n,e,t,i=0,r=!0,s=null){const a=s||{ships:t.ships,vet:t.vet,guns:t.guns,cover:ho(n,t)},c=q0(n,e)*(1+eo*An(i)),o=Tc(n,e),l=t.owner,u=l===Oe?1:Od(n,l),h=l===Oe?1:Tc(n,l),d=1+eo*An(a.vet),f=m=>{let p=m,v=0,w=a.ships,y=a.guns,S=0;for(let b=0;b<1200;b++){for(v+=be.fire*(w*d+y+a.cover)*u*o*.5,S+=be.fire*p*c*h*.5;S>=1&&w+y>0;)S-=1,w>0&&(y<1||w>=y)?w-=1:y=Math.max(0,y-1);for(;v>=1&&p>0;)v-=1,p-=1;if(p<=0)return!1;if(w+y<=0)return!0}return!1};let x=1,_=1;for(;!f(_);)if(_*=2,_>256)return 1/0;for(;x<_;){const m=x+_>>1;f(m)?_=m:x=m+1}return _}function vp(n,e,t){if(e.d.eco&&n.winner===null&&(n.credits[e.owner]=Math.max(0,n.credits[e.owner]+ra(n,e.owner)*(e.d.eco-1)*t)),e.clock-=t,e.clock>0||n.winner!==null)return;e.clock=e.d.think*(.8+e.rand()*.4);const i=as(n,e.owner),r=f=>{if(!i.seesFleet(f))return!1;const x=n.bodies[f.to];return x.owner===e.owner&&Cn(Pn(f,n.time),lt(n,x,n.time))<60*er(n)},s=f=>f.owner===e.owner||i.intel>=2&&i.seesFleet(f)||r(f),a=f=>f.owner===e.owner||i.intel>=1?f.n:5,c=(f,x)=>n.fleets.filter(_=>!_.probe&&_.to===f.id&&_.owner===e.owner===x&&s(_)).reduce((_,m)=>_+a(m),0),o=()=>e.rand()<e.d.skill,l=f=>f.ships*(1+eo*An(f.vet)),u=new Map,d={vis:i,coming:c,route:(f,x)=>{const _=f.id*1e3+x.id;return u.has(_)||u.set(_,fo(n,f,x,n.time,1,!0).T),u.get(_)}};yv(n,e,n.bodies.filter(f=>f.owner===e.owner),i,s,a,l,o);for(let f=0;f<e.d.acts&&_v(n,e,d);f++);for(let f=0;f<e.d.acts;f++){const x=Mv(n,e,n.bodies.filter(_=>_.owner===e.owner),c,o);if(!x||x==="save")break}}function sh(n,e,t,i){return t.bodies.has(i.id)?{ships:i.ships,vet:i.vet,guns:i.guns,cover:ho(n,i)}:i.owner===Oe?{ships:0,vet:0,guns:i.perk==="fortress"?6:i.giant?5:(i.kind==="planet",2),cover:0}:{ships:6,vet:1,guns:3,cover:1}}function _v(n,e,{vis:t,coming:i,route:r}){const s=n.bodies.filter(v=>v.owner===e.owner),a=e.d.smart,c=e.d.calm&&n.time<e.d.calm,o=v=>v.home&&n.time>900?2:1,l=v=>zr(n,v)-Math.ceil(i(v,!1)*1.2)-o(v),u=v=>(n.scans||[]).some(w=>w.owner===e.owner&&w.body===v.id),h=v=>n.fleets.some(w=>w.probe&&w.owner===e.owner&&w.to===v.id),d=v=>n.fleets.filter(w=>!w.probe&&w.owner===e.owner&&w.to===v.id).reduce((w,y)=>w+y.n,0),f=(v,w)=>Math.ceil(v*e.d.margin)+(t.bodies.has(w.id)?e.d.seenExtra:e.d.extra);if(a&&!n.fleets.some(v=>v.probe&&v.owner===e.owner)&&n.credits[e.owner]>be.probe.cost+200){const v=s.filter(S=>Ac(S,"shipyard")),w=S=>Math.min(...v.map(b=>Cn(lt(n,b,n.time),lt(n,S,n.time)))),y=n.bodies.filter(S=>S.owner!==e.owner&&S.owner!==Oe&&!S.visitor&&!t.bodies.has(S.id)&&!u(S)).sort((S,b)=>w(S)-w(b))[0];if(y&&v.length&&w(y)<160*er(n)&&e.rand()<.5){const S=b=>Cn(lt(n,b,n.time),lt(n,y,n.time));if(Au(n,v.sort((b,T)=>S(b)-S(T))[0],y))return!0}}let x=null;for(const v of s){const w=l(v);if(!(w<1))for(const y of n.bodies){if(y.owner===e.owner||!to(n,y)||c&&y.owner!==Oe||d(y)>0)continue;const S=r(v,y);if(!(S<Gd(n,y)-10))continue;const b=sh(n,e,t,y);y.owner!==Oe&&Ac(y,"shipyard")&&(b.ships+=Math.min(y.queue||1,S/be.ship.time)),y.owner!==Oe&&(b.guns=Math.max(b.guns,Math.min(Cc(y)+Hd(n,y),b.guns+be.gunRegen*S))),b.ships+=i(y,!1);const T=f(rh(n,e.owner,y,v.vet,!0,b),y);if(T<1||T>w)continue;let g=y.kind==="planet"?y.giant?4:3:y.kind==="station"?2:1.5;a&&y.owner!==Oe&&n.time>900&&(g*=y.home?1.6:1.25),y.perk&&(g*=1.5),(n.happenings||[]).some(E=>E.at===y.id)&&(g*=2);const M=g/(T+S/(25*no(n)));(!x||M>x.score)&&(x={s:v,t:y,need:T,score:M})}}if(x&&a&&x.t.owner!==Oe&&!t.bodies.has(x.t.id)&&!u(x.t))if(h(x.t))x=null;else{const v=s.find(w=>!Kd(n,w,x.t));if(v&&Au(n,v,x.t))return!0}if(x&&cc(n,x.s,x.t,x.need))return!0;if(e.plan){const v=n.bodies[e.plan.target],w=n.bodies[e.plan.stage];if(v.owner===e.owner||w.owner!==e.owner||n.time>e.plan.until)e.plan=null;else{if(zr(n,w)-o(w)>=e.plan.need)return cc(n,w,v,zr(n,w)-o(w))?(e.plan=null,!0):!1;{const y=s.filter(S=>S!==w&&l(S)>=1&&!n.fleets.some(b=>b.from===S.id&&b.to===w.id)).filter(S=>r(S,w)<1/0).sort((S,b)=>r(S,w)-r(b,w))[0];return!!(y&&cc(n,y,w,l(y)))}}}const _=s.reduce((v,w)=>v+Math.max(0,l(w)),0);let m=null,p=1/0;for(const v of n.bodies){if(v.owner===e.owner||v.visitor||c&&v.owner!==Oe)continue;const w=f(rh(n,e.owner,v,0,!0,sh(n,e,t,v)),v)+1;w<=_&&w<p&&(m=v,p=w)}if(m&&s.length>1){const v=s.slice().sort((w,y)=>r(w,m)-r(y,m))[0];e.plan={target:m.id,stage:v.id,need:p,until:n.time+600*no(n)}}return!1}function yv(n,e,t,i,r,s,a,c){for(const o of t){const l=n.fleets.filter(m=>m.to===o.id&&m.owner!==e.owner&&r(m));if(!l.length)continue;const u=Math.min(...l.map(m=>m.t0+m.T-n.time)),h=l.reduce((m,p)=>m+s(p),0)*1.2,d=a(o)+o.guns+ho(n,o);if(d>=h)continue;const f=Math.ceil(h-d)+1,x=t.filter(m=>m!==o&&zr(n,m)>=3&&!n.fleets.some(p=>p.to===m.id&&p.owner!==e.owner&&r(p))).map(m=>({s:m,T:fo(n,m,o,n.time,1,!0).T})).filter(m=>m.T<u-5).sort((m,p)=>m.T-p.T),_=x.find(m=>zr(n,m.s)-1>=f)||(e.d.smart?null:x[0]);if(_&&c())return cc(n,_.s,o,Math.min(zr(n,_.s)-1,f)),!0;if(!_&&o.queue>0&&d*2<h&&c()){for(;o.queue>0;)cp(n,o);return!0}}return!1}function Mv(n,e,t,i,r){const s=e.d.smart,a=g=>i(g,!1)>0||g.sieges.length,c=(g,M)=>!Lc(n,g,M),o=t.find(g=>a(g)&&c(g,"defence")&&g.structures.filter(M=>M.type==="defence").length<2);if(o)return Li(n,o,"defence");const l=t.find(g=>(g.kind==="asteroid"||g.kind==="moon")&&!g.structures.some(M=>M.type==="mine")&&(c(g,"mine")||Lc(n,g,"mine")==="not enough credits"));if(l){if(c(l,"mine"))return Li(n,l,"mine");if(!a(l)&&r())return"save"}if(n.crew&&Pc(n,e.owner)>=Rc(n,e.owner)-2){const g=t.flatMap(E=>E.structures.filter(D=>D.type==="habitat"&&!qo(n,E,D)).map(D=>[E,D]))[0];if(g)return zo(n,g[0],g[1]);const M=t.filter(E=>c(E,"habitat")&&!a(E)).sort((E,D)=>(D.kind==="planet")-(E.kind==="planet"))[0];if(M)return Li(n,M,"habitat")}const u=t.filter(g=>!Dc(n,g)&&g.queue<1)[0];if(u&&sa(n,e.owner)<ra(n,e.owner)*.4)return Tu(n,u);const h=t.find(g=>g.perk&&vn[g.perk].fits&&vn[g.perk].fits!=="mine"&&!g.structures.some(M=>M.type===vn[g.perk].fits)&&c(g,vn[g.perk].fits));if(h&&(s||r()))return Li(n,h,vn[h.perk].fits);for(const g of["exchange","skimmer"]){const M=t.find(E=>c(E,g)&&!a(E)&&!E.structures.some(D=>D.type===g));if(M&&(s||r()))return Li(n,M,g)}const d=n.credits[e.owner],f=t.flatMap(g=>g.structures.filter(M=>M.type==="mine"&&qo(n,g,M)==="not enough credits").map(M=>[g,M]))[0];if(f&&!a(f[0])&&t.reduce((g,M)=>g+M.ships,0)>=6&&r()&&d<Or(f[1]))return"save";for(const g of t)for(const M of g.structures)if(!qo(n,g,M)&&((M.type==="mine"||M.type==="skimmer"||M.type==="exchange")&&d>=Or(M)&&r()||M.type==="lab"&&n.tech[e.owner].project&&d>Or(M)+300&&r()||M.type==="defence"&&a(g)&&r()))return zo(n,g,M);if(s&&!t.find(M=>M.project)&&d>2500&&t.length>=4)for(const M of["sundiver","ringyard","citadel","massdriver","array","college"]){const E=L=>L.structures.filter(k=>k.type==="shipyard").length,D=L=>M==="ringyard"?E(L)*10+(c(L,"shipyard")?1:0):M==="massdriver"?E(L)*4+L.ships+(L.home?3:0):L.home?5:L.kind==="planet"?1:0,A=t.filter(L=>!a(L)&&!uo(n,L,M)).sort((L,k)=>D(k)-D(L))[0];if(!(M==="ringyard"&&A&&!E(A)&&!c(A,"shipyard"))&&A)return X0(n,A,M)}if(s&&d>1100&&!(n.spies||[]).some(g=>g.owner===e.owner)){const g=n.bodies.filter(M=>!zd(n,e.owner,M)).sort((M,E)=>(E.project?2:E.home?1:0)-(M.project?2:M.home?1:0))[0];if(g&&r())return!!j0(n,e.owner,g)}const x=t.find(g=>g.home);if(e.d.skill>=.7&&x&&t.length>=(s?6:5)&&d>1e3&&c(x,"bureau")&&!x.structures.some(g=>g.type==="bureau"))return Li(n,x,"bureau");const _=t.find(g=>(g.wonder==="ringyard"||g.project?.key==="ringyard")&&!g.structures.some(M=>M.type==="shipyard")&&c(g,"shipyard"));if(_)return Li(n,_,"shipyard");if(t.filter(g=>g.structures.some(M=>M.type==="shipyard")).length<1+Math.floor(t.length/3)&&r()){const g=t.filter(M=>M.kind==="planet"&&c(M,"shipyard")).sort((M,E)=>E.size-M.size)[0];if(g)return Li(n,g,"shipyard")}const p=s?["industry","sensors","intel","drives","weapons","armour","industry","drives","weapons","armour","sensors","intel","drives","sensors","intel"]:["sensors","drives","intel","industry","weapons","armour","drives","sensors","weapons","armour","industry","intel","drives","sensors","intel"],v=["torch","hardened","targeting","kinetic","pdnet","ansible"],w=[...p,...v].find(g=>Vr(n,e.owner,g)&&ia(n,e.owner,g)!=="locked");if(w&&!ia(n,e.owner,w)&&d>Vr(n,e.owner,w).cost+be.ship.cost*2&&t.length>=3)return K0(n,e.owner,w);const y=t.reduce((g,M)=>g+M.structures.filter(E=>E.type==="lab").length,0);if(y<2&&d>700+y*500&&t.length>2+y*2&&r()){const g=t.find(D=>D.perk==="archive"&&c(D,"lab"))||t.find(D=>c(D,"lab")&&D.kind!=="asteroid");if(g)return Li(n,g,"lab");const M=t.find(D=>D.kind!=="asteroid"&&!a(D)&&D.structures.filter(R=>R.type==="defence").length>1),E=M&&M.structures.find(D=>D.type==="defence"&&D.level===1&&!$d(n,M,D));if(E&&d>900)return ap(n,M,E)}const S=sa(n,e.owner)>ra(n,e.owner)*.4,b=t.filter(g=>!Dc(n,g)&&g.queue<3).sort((g,M)=>g.queue-M.queue)[0];if(b&&!S&&(s||e.rand()<.8))return Tu(n,b);const T=t.find(g=>g.home)||t[0];return T&&n.credits[e.owner]>600&&c(T,"defence")&&T.structures.filter(g=>g.type==="defence").length<2?Li(n,T,"defence"):!1}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="186",bv=0,oh=1,Sv=2,lc=1,wv=2,Bo=3,us=0,ii=1,ci=2,pr=0,Yo=1,Bn=2,ah=3,ch=4,Tv=5,Ws=100,Ev=101,Av=102,Cv=103,Rv=104,Pv=200,Lv=201,Dv=202,Iv=203,xp=204,_p=205,Uv=206,Nv=207,kv=208,Fv=209,Ov=210,zv=211,Bv=212,Gv=213,Vv=214,Ru=0,Pu=1,Lu=2,oa=3,Du=4,Iu=5,Uu=6,Nu=7,yp=0,Hv=1,$v=2,Qi=0,Mp=1,bp=2,Sp=3,wp=4,Tp=5,Ep=6,Ap=7,Cp=300,ds=301,ro=302,Cl=303,Rl=304,ol=306,aa=1e3,ji=1001,ku=1002,Gn=1003,Wv=1004,wa=1005,xn=1006,Pl=1007,Nr=1008,ti=1009,Rp=1010,Pp=1011,ca=1012,Jd=1013,Hi=1014,Ni=1015,Ei=1016,Qd=1017,ef=1018,la=1020,Lp=35902,Dp=35899,Ip=1021,Up=1022,Mi=1023,xr=1026,ss=1027,tf=1028,nf=1029,fs=1030,rf=1031,sf=1033,uc=33776,dc=33777,fc=33778,hc=33779,Fu=35840,Ou=35841,zu=35842,Bu=35843,Gu=36196,Vu=37492,Hu=37496,$u=37488,Wu=37489,kc=37490,Xu=37491,qu=37808,Yu=37809,Ku=37810,ju=37811,Zu=37812,Ju=37813,Qu=37814,ed=37815,td=37816,nd=37817,id=37818,rd=37819,sd=37820,od=37821,ad=36492,cd=36494,ld=36495,ud=36283,dd=36284,Fc=36285,fd=36286,Xv=3200,hd=0,qv=1,Ir="",Xn="srgb",Oc="srgb-linear",zc="linear",Jt="srgb",Ll=7680,Yv=519,Kv=512,jv=513,Zv=514,of=515,Jv=516,Qv=517,af=518,e1=519,Np=35044,Lr=35048,lh="300 es",Zi=2e3,ua=2001;function t1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n1(){const n=Bc("canvas");return n.style.display="block",n}const uh={};function Gc(...n){const e="THREE."+n.shift();console.log(e,...n)}function kp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=kp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Bt(...n){n=kp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zs(...n){const e=n.join(" ");e in uh||(uh[e]=!0,st(...n))}function i1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const r1={[Ru]:Pu,[Lu]:Uu,[Du]:Nu,[oa]:Iu,[Pu]:Ru,[Uu]:Lu,[Nu]:Du,[Iu]:oa};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const Ko=Math.PI/180,da=180/Math.PI;function mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($n[n&255]+$n[n>>8&255]+$n[n>>16&255]+$n[n>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function cf(n,e){return(n%e+e)%e}function s1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function o1(n,e,t){return n!==e?(t-n)/(e-n):0}function jo(n,e,t){return(1-t)*n+t*e}function a1(n,e,t,i){return jo(n,e,1-Math.exp(-t*i))}function c1(n,e=1){return e-Math.abs(cf(n,e*2)-e)}function l1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function u1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function f1(n,e){return n+Math.random()*(e-n)}function h1(n){return n*(.5-Math.random())}function p1(n){n!==void 0&&(dh=n);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m1(n){return n*Ko}function g1(n){return n*da}function v1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function x1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function y1(n,e,t,i,r){const s=Math.cos,a=Math.sin,c=s(t/2),o=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(c*u,o*h,o*d,c*l);break;case"YZY":n.set(o*d,c*u,o*h,c*l);break;case"ZXZ":n.set(o*h,o*d,c*u,c*l);break;case"XZX":n.set(c*u,o*x,o*f,c*l);break;case"YXY":n.set(o*f,c*u,o*x,c*l);break;case"ZYZ":n.set(o*x,o*f,c*u,c*l);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nt={DEG2RAD:Ko,RAD2DEG:da,generateUUID:mr,clamp:Et,euclideanModulo:cf,mapLinear:s1,inverseLerp:o1,lerp:jo,damp:a1,pingpong:c1,smoothstep:l1,smootherstep:u1,randInt:d1,randFloat:f1,randFloatSpread:h1,seededRandom:p1,degToRad:m1,radToDeg:g1,isPowerOfTwo:v1,ceilPowerOfTwo:x1,floorPowerOfTwo:_1,setQuaternionFromProperEuler:y1,normalize:Qt,denormalize:Ii},Ff=class Ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ff.prototype.isVector2=!0;let tt=Ff;class Yn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,c){let o=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],x=s[a+2],_=s[a+3];if(h!==_||o!==d||l!==f||u!==x){let m=o*d+l*f+u*x+h*_;m<0&&(d=-d,f=-f,x=-x,_=-_,m=-m);let p=1-c;if(m<.9995){const v=Math.acos(m),w=Math.sin(v);p=Math.sin(p*v)/w,c=Math.sin(c*v)/w,o=o*p+d*c,l=l*p+f*c,u=u*p+x*c,h=h*p+_*c}else{o=o*p+d*c,l=l*p+f*c,u=u*p+x*c,h=h*p+_*c;const v=1/Math.sqrt(o*o+l*l+u*u+h*h);o*=v,l*=v,u*=v,h*=v}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const c=i[r],o=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],x=s[a+3];return e[t]=c*x+u*h+o*f-l*d,e[t+1]=o*x+u*d+l*h-c*f,e[t+2]=l*x+u*f+c*d-o*h,e[t+3]=u*x-c*h-o*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,o=Math.sin,l=c(i/2),u=c(r/2),h=c(s/2),d=o(i/2),f=o(r/2),x=o(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h+d*f*x;break;case"YZX":this._x=d*u*h+l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h-d*f*x;break;case"XZY":this._x=d*u*h-l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h+d*f*x;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],c=t[5],o=t[9],l=t[2],u=t[6],h=t[10],d=i+c+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-o)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>c&&i>h){const f=2*Math.sqrt(1+i-c-h);this._w=(u-o)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(c>h){const f=2*Math.sqrt(1+c-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(o+u)/f}else{const f=2*Math.sqrt(1+h-i-c);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(o+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,c=t._x,o=t._y,l=t._z,u=t._w;return this._x=i*u+a*c+r*l-s*o,this._y=r*u+a*o+s*c-i*l,this._z=s*u+a*l+i*o-r*c,this._w=a*u-i*c-r*o-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,c=this.dot(e);c<0&&(i=-i,r=-r,s=-s,a=-a,c=-c);let o=1-t;if(c<.9995){const l=Math.acos(c),u=Math.sin(l);o=Math.sin(o*l)/u,t=Math.sin(t*l)/u,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+s*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+s*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Of=class Of{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,c=e.z,o=e.w,l=2*(a*r-c*i),u=2*(c*t-s*r),h=2*(s*i-a*t);return this.x=t+o*l+a*h-c*u,this.y=i+o*u+c*l-s*h,this.z=r+o*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,c=t.y,o=t.z;return this.x=r*o-s*c,this.y=s*a-i*o,this.z=i*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Of.prototype.isVector3=!0;let U=Of;const Dl=new U,fh=new Yn,zf=class zf{constructor(e,t,i,r,s,a,c,o,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,o,l)}set(e,t,i,r,s,a,c,o,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=c,u[3]=t,u[4]=s,u[5]=o,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[3],o=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],x=i[8],_=r[0],m=r[3],p=r[6],v=r[1],w=r[4],y=r[7],S=r[2],b=r[5],T=r[8];return s[0]=a*_+c*v+o*S,s[3]=a*m+c*w+o*b,s[6]=a*p+c*y+o*T,s[1]=l*_+u*v+h*S,s[4]=l*m+u*w+h*b,s[7]=l*p+u*y+h*T,s[2]=d*_+f*v+x*S,s[5]=d*m+f*w+x*b,s[8]=d*p+f*y+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8];return t*a*u-t*c*l-i*s*u+i*c*o+r*s*l-r*a*o}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],h=u*a-c*l,d=c*o-u*s,f=l*s-a*o,x=t*h+i*d+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(c*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*o)*_,e[5]=(r*s-c*t)*_,e[6]=f*_,e[7]=(i*o-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,c){const o=Math.cos(s),l=Math.sin(s);return this.set(i*o,i*l,-i*(o*a+l*c)+a+e,-r*l,r*o,-r*(-l*a+o*c)+c+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zf.prototype.isMatrix3=!0;let ht=zf;const Il=new ht,hh=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M1(){const n={enabled:!0,workingColorSpace:Oc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Oc]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:hh,fromXYZ:ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:Jt,toXYZ:hh,fromXYZ:ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}const kt=M1();function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class b1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=Bc("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gr(t[i]/255)*255):t[i]=gr(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let S1=0;class lf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(Ul(r[a].image)):s.push(Ul(r[a]))}else s=Ul(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let w1=0;const Nl=new U;class Kn extends hs{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,i=ji,r=ji,s=xn,a=Nr,c=Mi,o=ti,l=Kn.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=mr(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=o,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Cp;Kn.DEFAULT_ANISOTROPY=1;const Bf=class Bf{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const o=e.elements,l=o[0],u=o[4],h=o[8],d=o[1],f=o[5],x=o[9],_=o[2],m=o[6],p=o[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(f+1)/2,S=(p+1)/2,b=(u+d)/4,T=(h+_)/4,g=(x+m)/4;return w>y&&w>S?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=b/i,s=T/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=g/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=T/s,r=g/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-x)*(m-x)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bf.prototype.isVector4=!0;let tn=Bf;class T1 extends hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Kn(r),a=i.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new lf(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends T1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fp extends Kn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E1 extends Kn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const el=class el{constructor(e,t,i,r,s,a,c,o,l,u,h,d,f,x,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,o,l,u,h,d,f,x,_,m)}set(e,t,i,r,s,a,c,o,l,u,h,d,f,x,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=c,p[13]=o,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=x,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new el().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),c=Math.sin(i),o=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,x=c*u,_=c*h;t[0]=o*u,t[4]=-o*h,t[8]=l,t[1]=f+x*l,t[5]=d-_*l,t[9]=-c*o,t[2]=_-d*l,t[6]=x+f*l,t[10]=a*o}else if(e.order==="YXZ"){const d=o*u,f=o*h,x=l*u,_=l*h;t[0]=d+_*c,t[4]=x*c-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-c,t[2]=f*c-x,t[6]=_+d*c,t[10]=a*o}else if(e.order==="ZXY"){const d=o*u,f=o*h,x=l*u,_=l*h;t[0]=d-_*c,t[4]=-a*h,t[8]=x+f*c,t[1]=f+x*c,t[5]=a*u,t[9]=_-d*c,t[2]=-a*l,t[6]=c,t[10]=a*o}else if(e.order==="ZYX"){const d=a*u,f=a*h,x=c*u,_=c*h;t[0]=o*u,t[4]=x*l-f,t[8]=d*l+_,t[1]=o*h,t[5]=_*l+d,t[9]=f*l-x,t[2]=-l,t[6]=c*o,t[10]=a*o}else if(e.order==="YZX"){const d=a*o,f=a*l,x=c*o,_=c*l;t[0]=o*u,t[4]=_-d*h,t[8]=x*h+f,t[1]=h,t[5]=a*u,t[9]=-c*u,t[2]=-l*u,t[6]=f*h+x,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*o,f=a*l,x=c*o,_=c*l;t[0]=o*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=c*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A1,e,C1)}lookAt(e,t,i){const r=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),wr.crossVectors(i,hi),wr.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),wr.crossVectors(i,hi)),wr.normalize(),Ta.crossVectors(hi,wr),r[0]=wr.x,r[4]=Ta.x,r[8]=hi.x,r[1]=wr.y,r[5]=Ta.y,r[9]=hi.y,r[2]=wr.z,r[6]=Ta.z,r[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[4],o=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],x=i[2],_=i[6],m=i[10],p=i[14],v=i[3],w=i[7],y=i[11],S=i[15],b=r[0],T=r[4],g=r[8],M=r[12],E=r[1],D=r[5],R=r[9],A=r[13],L=r[2],k=r[6],z=r[10],V=r[14],oe=r[3],te=r[7],ce=r[11],le=r[15];return s[0]=a*b+c*E+o*L+l*oe,s[4]=a*T+c*D+o*k+l*te,s[8]=a*g+c*R+o*z+l*ce,s[12]=a*M+c*A+o*V+l*le,s[1]=u*b+h*E+d*L+f*oe,s[5]=u*T+h*D+d*k+f*te,s[9]=u*g+h*R+d*z+f*ce,s[13]=u*M+h*A+d*V+f*le,s[2]=x*b+_*E+m*L+p*oe,s[6]=x*T+_*D+m*k+p*te,s[10]=x*g+_*R+m*z+p*ce,s[14]=x*M+_*A+m*V+p*le,s[3]=v*b+w*E+y*L+S*oe,s[7]=v*T+w*D+y*k+S*te,s[11]=v*g+w*R+y*z+S*ce,s[15]=v*M+w*A+y*V+S*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],c=e[5],o=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],_=e[7],m=e[11],p=e[15],v=o*f-l*d,w=c*f-l*h,y=c*d-o*h,S=a*f-l*u,b=a*d-o*u,T=a*h-c*u;return t*(_*v-m*w+p*y)-i*(x*v-m*S+p*b)+r*(x*w-_*S+p*T)-s*(x*y-_*b+m*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],c=e[9],o=e[2],l=e[6],u=e[10];return t*(a*u-c*l)-i*(s*u-c*o)+r*(s*l-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],_=e[13],m=e[14],p=e[15],v=t*c-i*a,w=t*o-r*a,y=t*l-s*a,S=i*o-r*c,b=i*l-s*c,T=r*l-s*o,g=u*_-h*x,M=u*m-d*x,E=u*p-f*x,D=h*m-d*_,R=h*p-f*_,A=d*p-f*m,L=v*A-w*R+y*D+S*E-b*M+T*g;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=(c*A-o*R+l*D)*k,e[1]=(r*R-i*A-s*D)*k,e[2]=(_*T-m*b+p*S)*k,e[3]=(d*b-h*T-f*S)*k,e[4]=(o*E-a*A-l*M)*k,e[5]=(t*A-r*E+s*M)*k,e[6]=(m*y-x*T-p*w)*k,e[7]=(u*T-d*y+f*w)*k,e[8]=(a*R-c*E+l*g)*k,e[9]=(i*E-t*R-s*g)*k,e[10]=(x*b-_*y+p*v)*k,e[11]=(h*y-u*b-f*v)*k,e[12]=(c*M-a*D-o*g)*k,e[13]=(t*D-i*M+r*g)*k,e[14]=(_*w-x*S-m*v)*k,e[15]=(u*S-h*w+d*v)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,c=e.y,o=e.z,l=s*a,u=s*c;return this.set(l*a+i,l*c-r*o,l*o+r*c,0,l*c+r*o,u*c+i,u*o-r*a,0,l*o-r*c,u*o+r*a,s*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,c=t._z,o=t._w,l=s+s,u=a+a,h=c+c,d=s*l,f=s*u,x=s*h,_=a*u,m=a*h,p=c*h,v=o*l,w=o*u,y=o*h,S=i.x,b=i.y,T=i.z;return r[0]=(1-(_+p))*S,r[1]=(f+y)*S,r[2]=(x-w)*S,r[3]=0,r[4]=(f-y)*b,r[5]=(1-(d+p))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(x+w)*T,r[9]=(m-v)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=As.set(r[0],r[1],r[2]).length();const c=As.set(r[4],r[5],r[6]).length(),o=As.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ci.copy(this);const l=1/a,u=1/c,h=1/o;return Ci.elements[0]*=l,Ci.elements[1]*=l,Ci.elements[2]*=l,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,t.setFromRotationMatrix(Ci),i.x=a,i.y=c,i.z=o,this}makePerspective(e,t,i,r,s,a,c=Zi,o=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let x,_;if(o)x=s/(a-s),_=a*s/(a-s);else if(c===Zi)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(c===ua)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,c=Zi,o=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let x,_;if(o)x=1/(a-s),_=a/(a-s);else if(c===Zi)x=-2/(a-s),_=-(a+s)/(a-s);else if(c===ua)x=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};el.prototype.isMatrix4=!0;let Ft=el;const As=new U,Ci=new Ft,A1=new U(0,0,0),C1=new U(1,1,1),wr=new U,Ta=new U,hi=new U,mh=new Ft,gh=new Yn;class _r{constructor(e=0,t=0,i=0,r=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],c=r[8],o=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R1=0;const vh=new U,Cs=new Yn,sr=new Ft,Ea=new U,bo=new U,P1=new U,L1=new Yn,xh=new U(1,0,0),_h=new U(0,1,0),yh=new U(0,0,1),Mh={type:"added"},D1={type:"removed"},Rs={type:"childadded",child:null},kl={type:"childremoved",child:null};class Vn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new U,t=new _r,i=new Yn,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ht}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(yh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ea.copy(e):Ea.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(bo,Ea,this.up):sr.lookAt(Ea,bo,this.up),this.quaternion.setFromRotationMatrix(sr),r&&(sr.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(sr),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D1),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,P1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,o){return c[o.uuid]===void 0&&(c[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const o=c.shapes;if(Array.isArray(o))for(let l=0,u=o.length;l<u;l++){const h=o[l];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let o=0,l=this.material.length;o<l;o++)c.push(s(e.materials,this.material[o]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const o=this.animations[c];r.animations.push(s(e.animations,o))}}if(t){const c=a(e.geometries),o=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);c.length>0&&(i.geometries=c),o.length>0&&(i.materials=o),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(c){const o=[];for(const l in c){const u=c[l];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vn.DEFAULT_UP=new U(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zn extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I1={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const c=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return c!==null&&(c.visible=r!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=kt.workingColorSpace){return this.r=e,this.g=t,this.b=i,kt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=kt.workingColorSpace){if(e=cf(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ol(a,s,e+1/3),this.g=Ol(a,s,e),this.b=Ol(a,s,e-1/3)}return kt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const i=zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return kt.workingToColorSpace(Wn.copy(this),e),Math.round(Et(Wn.r*255,0,255))*65536+Math.round(Et(Wn.g*255,0,255))*256+Math.round(Et(Wn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(Wn.copy(this),t);const i=Wn.r,r=Wn.g,s=Wn.b,a=Math.max(i,r,s),c=Math.min(i,r,s);let o,l;const u=(c+a)/2;if(c===a)o=0,l=0;else{const h=a-c;switch(l=u<=.5?h/(a+c):h/(2-a-c),a){case i:o=(r-s)/h+(r<s?6:0);break;case r:o=(s-i)/h+2;break;case s:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Xn){kt.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,i=Wn.g,r=Wn.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Aa);const i=jo(Tr.h,Aa.h,t),r=jo(Tr.s,Aa.s,t),s=jo(Tr.l,Aa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new ot;ot.NAMES=zp;class al extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new U,or=new U,zl=new U,ar=new U,Ps=new U,Ls=new U,bh=new U,Bl=new U,Gl=new U,Vl=new U,Hl=new tn,$l=new tn,Wl=new tn;class _i{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ri.subVectors(e,t),r.cross(Ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ri.subVectors(r,t),or.subVectors(i,t),zl.subVectors(e,t);const a=Ri.dot(Ri),c=Ri.dot(or),o=Ri.dot(zl),l=or.dot(or),u=or.dot(zl),h=a*l-c*c;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*o-c*u)*d,x=(a*u-c*o)*d;return s.set(1-f-x,x,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,i,r,s,a,c,o){return this.getBarycoord(e,t,i,r,ar)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,ar.x),o.addScaledVector(a,ar.y),o.addScaledVector(c,ar.z),o)}static getInterpolatedAttribute(e,t,i,r,s,a){return Hl.setScalar(0),$l.setScalar(0),Wl.setScalar(0),Hl.fromBufferAttribute(e,t),$l.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hl,s.x),a.addScaledVector($l,s.y),a.addScaledVector(Wl,s.z),a}static isFrontFacing(e,t,i,r){return Ri.subVectors(i,t),or.subVectors(e,t),Ri.cross(or).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ri.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,c;Ps.subVectors(r,i),Ls.subVectors(s,i),Bl.subVectors(e,i);const o=Ps.dot(Bl),l=Ls.dot(Bl);if(o<=0&&l<=0)return t.copy(i);Gl.subVectors(e,r);const u=Ps.dot(Gl),h=Ls.dot(Gl);if(u>=0&&h<=u)return t.copy(r);const d=o*h-u*l;if(d<=0&&o>=0&&u<=0)return a=o/(o-u),t.copy(i).addScaledVector(Ps,a);Vl.subVectors(e,s);const f=Ps.dot(Vl),x=Ls.dot(Vl);if(x>=0&&f<=x)return t.copy(s);const _=f*l-o*x;if(_<=0&&l>=0&&x<=0)return c=l/(l-x),t.copy(i).addScaledVector(Ls,c);const m=u*x-f*h;if(m<=0&&h-u>=0&&f-x>=0)return bh.subVectors(s,r),c=(h-u)/(h-u+(f-x)),t.copy(r).addScaledVector(bh,c);const p=1/(m+_+d);return a=_*p,c=d*p,t.copy(i).addScaledVector(Ps,a).addScaledVector(Ls,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ps{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Ra.subVectors(this.max,So),Ds.subVectors(e.a,So),Is.subVectors(e.b,So),Us.subVectors(e.c,So),Er.subVectors(Is,Ds),Ar.subVectors(Us,Is),Zr.subVectors(Ds,Us);let t=[0,-Er.z,Er.y,0,-Ar.z,Ar.y,0,-Zr.z,Zr.y,Er.z,0,-Er.x,Ar.z,0,-Ar.x,Zr.z,0,-Zr.x,-Er.y,Er.x,0,-Ar.y,Ar.x,0,-Zr.y,Zr.x,0];return!Xl(t,Ds,Is,Us,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,Ds,Is,Us,Ra))?!1:(Pa.crossVectors(Er,Ar),t=[Pa.x,Pa.y,Pa.z],Xl(t,Ds,Is,Us,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new U,new U,new U,new U,new U,new U,new U,new U],Pi=new U,Ca=new ps,Ds=new U,Is=new U,Us=new U,Er=new U,Ar=new U,Zr=new U,So=new U,Ra=new U,Pa=new U,Jr=new U;function Xl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Jr.fromArray(n,s);const c=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),o=e.dot(Jr),l=t.dot(Jr),u=i.dot(Jr);if(Math.max(-Math.max(o,l,u),Math.min(o,l,u))>c)return!1}return!0}const Sn=new U,La=new tt;let U1=0;class mn extends hs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Np,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Bp extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gp extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const N1=new ps,wo=new U,ql=new U;class ms{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):N1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const t=wo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(ql)),this.expandByPoint(wo.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let k1=0;const xi=new Ft,Yl=new Vn,Ns=new U,pi=new ps,To=new ps,Un=new U;class $t extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t1(e)?Gp:Bp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];To.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(pi.min,To.min),pi.expandByPoint(Un),Un.addVectors(pi.max,To.max),pi.expandByPoint(Un)):(pi.expandByPoint(To.min),pi.expandByPoint(To.max))}pi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Un));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],o=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)Un.fromBufferAttribute(c,l),o&&(Ns.fromBufferAttribute(e,l),Un.add(Ns)),r=Math.max(r,i.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const c=[],o=[];for(let g=0;g<i.count;g++)c[g]=new U,o[g]=new U;const l=new U,u=new U,h=new U,d=new tt,f=new tt,x=new tt,_=new U,m=new U;function p(g,M,E){l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),d.fromBufferAttribute(s,g),f.fromBufferAttribute(s,M),x.fromBufferAttribute(s,E),u.sub(l),h.sub(l),f.sub(d),x.sub(d);const D=1/(f.x*x.y-x.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(D),c[g].add(_),c[M].add(_),c[E].add(_),o[g].add(m),o[M].add(m),o[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let g=0,M=v.length;g<M;++g){const E=v[g],D=E.start,R=E.count;for(let A=D,L=D+R;A<L;A+=3)p(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const w=new U,y=new U,S=new U,b=new U;function T(g){S.fromBufferAttribute(r,g),b.copy(S);const M=c[g];w.copy(M),w.sub(S.multiplyScalar(S.dot(M))).normalize(),y.crossVectors(b,M);const D=y.dot(o[g])<0?-1:1;a.setXYZW(g,w.x,w.y,w.z,D)}for(let g=0,M=v.length;g<M;++g){const E=v[g],D=E.start,R=E.count;for(let A=D,L=D+R;A<L;A+=3)T(e.getX(A+0)),T(e.getX(A+1)),T(e.getX(A+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,c=new U,o=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),c.fromBufferAttribute(i,x),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.add(u),o.add(u),l.add(u),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(c,o){const l=c.array,u=c.itemSize,h=c.normalized,d=new l.constructor(o.length*u);let f=0,x=0;for(let _=0,m=o.length;_<m;_++){c.isInterleavedBufferAttribute?f=o[_]*c.data.stride+c.offset:f=o[_]*u;for(let p=0;p<u;p++)d[x++]=l[f++]}return new mn(d,u,h)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,r=this.attributes;for(const c in r){const o=r[c],l=e(o,i);t.setAttribute(c,l)}const s=this.morphAttributes;for(const c in s){const o=[],l=s[c];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);o.push(f)}t.morphAttributes[c]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,o=a.length;c<o;c++){const l=a[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const l=i[o];e.data.attributes[o]=l.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[o]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class F1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Np,this.updateRanges=[],this.version=0,this.uuid=mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Jn=new U;class Vc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Gc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kl=new U,O1=new U,z1=new ht;class qi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kl.subVectors(i,t).cross(O1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Kl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||z1.getNormalMatrix(e),r=this.coplanarPoint(Kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let B1=0;class $r extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=Yo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xp,this.blendDst=_p,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const c in s){const o=s[c];delete o.metadata,a.push(o)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new qi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zo extends $r{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ks;const Eo=new U,Fs=new U,Os=new U,zs=new tt,Ao=new tt,Vp=new Ft,Da=new U,Co=new U,Ia=new U,Sh=new tt,jl=new tt,wh=new tt;class pc extends Vn{constructor(e=new Zo){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new $t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new F1(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Vc(i,3,0,!1)),ks.setAttribute("uv",new Vc(i,2,3,!1))}this.geometry=ks,this.material=e,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Os.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ua(Da.set(-.5,-.5,0),Os,a,Fs,r,s),Ua(Co.set(.5,-.5,0),Os,a,Fs,r,s),Ua(Ia.set(.5,.5,0),Os,a,Fs,r,s),Sh.set(0,0),jl.set(1,0),wh.set(1,1);let c=e.ray.intersectTriangle(Da,Co,Ia,!1,Eo);if(c===null&&(Ua(Co.set(-.5,.5,0),Os,a,Fs,r,s),jl.set(0,1),c=e.ray.intersectTriangle(Da,Ia,Co,!1,Eo),c===null))return;const o=e.ray.origin.distanceTo(Eo);o<e.near||o>e.far||t.push({distance:o,point:Eo.clone(),uv:_i.getInterpolation(Eo,Da,Co,Ia,Sh,jl,wh,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ua(n,e,t,i,r,s){zs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ao.x=s*zs.x-r*zs.y,Ao.y=r*zs.x+s*zs.y):Ao.copy(zs),n.copy(e),n.x+=Ao.x,n.y+=Ao.y,n.applyMatrix4(Vp)}const lr=new U,Zl=new U,Na=new U,ka=new U;class cl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zl.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),ka.copy(this.origin).sub(Zl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Na),c=ka.dot(this.direction),o=-ka.dot(Na),l=ka.lengthSq(),u=Math.abs(1-a*a);let h,d,f,x;if(u>0)if(h=a*o-c,d=a*c-o,x=s*u,h>=0)if(d>=-x)if(d<=x){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*c)+d*(a*h+d+2*o)+l}else d=s,h=Math.max(0,-(a*d+c)),f=-h*h+d*(d+2*o)+l;else d=-s,h=Math.max(0,-(a*d+c)),f=-h*h+d*(d+2*o)+l;else d<=-x?(h=Math.max(0,-(-a*s+c)),d=h>0?-s:Math.min(Math.max(-s,-o),s),f=-h*h+d*(d+2*o)+l):d<=x?(h=0,d=Math.min(Math.max(-s,-o),s),f=d*(d+2*o)+l):(h=Math.max(0,-(a*s+c)),d=h>0?s:Math.min(Math.max(-s,-o),s),f=-h*h+d*(d+2*o)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+c)),f=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zl).addScaledVector(Na,d),f}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),r=lr.dot(lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=i-a,o=i+a;return o<0?null:c<0?this.at(o,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,c,o;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(c=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(c=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||c>r)||((c>i||i!==i)&&(i=c),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,c=this.direction,o=c.x,l=c.y,u=c.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,x=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,v=i.y-a.y,w=i.z-a.z,y=Math.abs(o),S=Math.abs(l),b=Math.abs(u);let T,g,M,E,D,R,A,L,k,z,V,oe;if(y>=S&&y>=b?(M=o,R=h,k=x,oe=p,o>=0?(T=l,g=u,E=d,D=f,A=_,L=m,z=v,V=w):(T=u,g=l,E=f,D=d,A=m,L=_,z=w,V=v)):S>=b?(M=l,R=d,k=_,oe=v,l>=0?(T=u,g=o,E=f,D=h,A=m,L=x,z=w,V=p):(T=o,g=u,E=h,D=f,A=x,L=m,z=p,V=w)):(M=u,R=f,k=m,oe=w,u>=0?(T=o,g=l,E=h,D=d,A=x,L=_,z=p,V=v):(T=l,g=o,E=d,D=h,A=_,L=x,z=v,V=p)),M===0)return null;const te=T/M,ce=g/M,le=1/M,Be=E-te*R,we=D-ce*R,je=A-te*k,He=L-ce*k,Te=z-te*oe,re=V-ce*oe,ue=Te*He-re*je,Ae=Be*re-we*Te,nt=je*we-He*Be;if(r){if(ue<0||Ae<0||nt<0)return null}else if((ue<0||Ae<0||nt<0)&&(ue>0||Ae>0||nt>0))return null;const pe=ue+Ae+nt;if(pe===0)return null;const Ve=le*(ue*R+Ae*k+nt*oe);return(pe>0?Ve<0:Ve>0)?null:this.at(Ve/pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uf extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Th=new Ft,Qr=new cl,Fa=new ms,Eh=new U,Oa=new U,za=new U,Ba=new U,Jl=new U,Ga=new U,Ah=new U,Va=new U;class zt extends Vn{constructor(e=new $t,t=new uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Ga.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const u=c[o],h=s[o];u!==0&&(Jl.fromBufferAttribute(h,e),a?Ga.addScaledVector(Jl,u):Ga.addScaledVector(Jl.sub(t),u))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(Fa.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Fa,Eh)===null||Qr.origin.distanceToSquared(Eh)>(e.far-e.near)**2))&&(Th.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,c=s.index,o=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(c!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=w;y<S;y+=3){const b=c.getX(y),T=c.getX(y+1),g=c.getX(y+2);r=Ha(this,p,e,i,l,u,h,b,T,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=x,p=_;m<p;m+=3){const v=c.getX(m),w=c.getX(m+1),y=c.getX(m+2);r=Ha(this,a,e,i,l,u,h,v,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=w;y<S;y+=3){const b=y,T=y+1,g=y+2;r=Ha(this,p,e,i,l,u,h,b,T,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=x,p=_;m<p;m+=3){const v=m,w=m+1,y=m+2;r=Ha(this,a,e,i,l,u,h,v,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function G1(n,e,t,i,r,s,a,c){let o;if(e.side===ii?o=i.intersectTriangle(a,s,r,!0,c):o=i.intersectTriangle(r,s,a,e.side===us,c),o===null)return null;Va.copy(c),Va.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Va);return l<t.near||l>t.far?null:{distance:l,point:Va.clone(),object:n}}function Ha(n,e,t,i,r,s,a,c,o,l){n.getVertexPosition(c,Oa),n.getVertexPosition(o,za),n.getVertexPosition(l,Ba);const u=G1(n,e,t,i,Oa,za,Ba,Ah);if(u){const h=new U;_i.getBarycoord(Ah,Oa,za,Ba,h),r&&(u.uv=_i.getInterpolatedAttribute(r,c,o,l,h,new tt)),s&&(u.uv1=_i.getInterpolatedAttribute(s,c,o,l,h,new tt)),a&&(u.normal=_i.getInterpolatedAttribute(a,c,o,l,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:c,b:o,c:l,normal:new U,materialIndex:0};_i.getNormal(Oa,za,Ba,d.normal),u.face=d,u.barycoord=h}return u}class df extends Kn{constructor(e=null,t=1,i=1,r,s,a,c,o,l=Gn,u=Gn,h,d){super(null,a,c,o,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class so extends mn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new Ft,Ch=new Ft,$a=[],Rh=new ps,V1=new Ft,Ro=new zt,Po=new ms;class Hc extends zt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new so(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,V1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ps),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),Rh.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),Po.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let c=0;c<i.length;c++)i[c]=r[a+c]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(i),e.ray.intersectsSphere(Po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Bs),Ch.multiplyMatrices(i,Bs),Ro.matrixWorld=Ch,Ro.raycast(e,$a);for(let a=0,c=$a.length;a<c;a++){const o=$a[a];o.instanceId=s,o.object=this,t.push(o)}$a.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new so(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new df(new Float32Array(r*this.count),r,this.count,tf,Ni));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const c=this.geometry.morphTargetsRelative?1:1-a,o=r*e;return s[o]=c,s.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const es=new ms,H1=new tt(.5,.5),Wa=new U;class ff{constructor(e=new qi,t=new qi,i=new qi,r=new qi,s=new qi,a=new qi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi,i=!1){const r=this.planes,s=e.elements,a=s[0],c=s[1],o=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],x=s[8],_=s[9],m=s[10],p=s[11],v=s[12],w=s[13],y=s[14],S=s[15];if(r[0].setComponents(l-a,f-u,p-x,S-v).normalize(),r[1].setComponents(l+a,f+u,p+x,S+v).normalize(),r[2].setComponents(l+c,f+h,p+_,S+w).normalize(),r[3].setComponents(l-c,f-h,p-_,S-w).normalize(),i)r[4].setComponents(o,d,m,y).normalize(),r[5].setComponents(l-o,f-d,p-m,S-y).normalize();else if(r[4].setComponents(l-o,f-d,p-m,S-y).normalize(),t===Zi)r[5].setComponents(l+o,f+d,p+m,S+y).normalize();else if(t===ua)r[5].setComponents(o,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=H1.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hf extends $r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new U,Wc=new U,Ph=new Ft,Lo=new cl,Xa=new ms,Ql=new U,Lh=new U;class Go extends Vn{constructor(e=new $t,t=new hf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)$c.fromBufferAttribute(t,r-1),Wc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$c.distanceTo(Wc);e.setAttribute("lineDistance",new yt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;Ph.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(Ph);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let _=f,m=x-1;_<m;_+=l){const p=u.getX(_),v=u.getX(_+1),w=qa(this,e,Lo,o,p,v,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(x-1),m=u.getX(f),p=qa(this,e,Lo,o,_,m,x-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let _=f,m=x-1;_<m;_+=l){const p=qa(this,e,Lo,o,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=qa(this,e,Lo,o,x-1,f,x-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function qa(n,e,t,i,r,s,a){const c=n.geometry.attributes.position;if($c.fromBufferAttribute(c,r),Wc.fromBufferAttribute(c,s),t.distanceSqToSegment($c,Wc,Ql,Lh)>i)return;Ql.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ql);if(!(l<e.near||l>e.far))return{distance:l,point:Lh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Dh=new U,Ih=new U;class $1 extends Go{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Dh.fromBufferAttribute(t,r),Ih.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dh.distanceTo(Ih);e.setAttribute("lineDistance",new yt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class W1 extends $r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uh=new Ft,pd=new cl,Ya=new ms,Ka=new U;class pf extends Vn{constructor(e=new $t,t=new W1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;Uh.copy(r).invert(),pd.copy(e.ray).applyMatrix4(Uh);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let x=d,_=f;x<_;x++){const m=l.getX(x);Ka.fromBufferAttribute(h,m),Nh(Ka,m,o,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=d,_=f;x<_;x++)Ka.fromBufferAttribute(h,x),Nh(Ka,x,o,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Nh(n,e,t,i,r,s,a){const c=pd.distanceSqToPoint(n);if(c<t){const o=new U;pd.closestPointToPoint(n,o),o.applyMatrix4(i);const l=r.ray.origin.distanceTo(o);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(c),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Hp extends Kn{constructor(e=[],t=ds,i,r,s,a,c,o,l,u){super(e,t,i,r,s,a,c,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mf extends Kn{constructor(e,t,i,r,s,a,c,o,l){super(e,t,i,r,s,a,c,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends Kn{constructor(e,t,i=Hi,r,s,a,c=Gn,o=Gn,l,u=xr,h=1){if(u!==xr&&u!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,c,o,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class X1 extends oo{constructor(e,t=Hi,i=ds,r,s,a=Gn,c=Gn,o,l=xr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,c,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $p extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tn extends $t{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const o=[],l=[],u=[],h=[];let d=0,f=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function x(_,m,p,v,w,y,S,b,T,g,M){const E=y/T,D=S/g,R=y/2,A=S/2,L=b/2,k=T+1,z=g+1;let V=0,oe=0;const te=new U;for(let ce=0;ce<z;ce++){const le=ce*D-A;for(let Be=0;Be<k;Be++){const we=Be*E-R;te[_]=we*v,te[m]=le*w,te[p]=L,l.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=b>0?1:-1,u.push(te.x,te.y,te.z),h.push(Be/T),h.push(1-ce/g),V+=1}}for(let ce=0;ce<g;ce++)for(let le=0;le<T;le++){const Be=d+le+k*ce,we=d+le+k*(ce+1),je=d+(le+1)+k*(ce+1),He=d+(le+1)+k*ce;o.push(Be,we,He),o.push(we,je,He),oe+=6}c.addGroup(f,oe,M),f+=oe,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gf extends $t{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],c=[],o=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,x=i*2+s,_=r+1,m=new U,p=new U;for(let v=0;v<=x;v++){let w=0,y=0,S=0,b=0;if(v<=i){const M=v/i,E=M*Math.PI/2;y=-u-e*Math.cos(E),S=e*Math.sin(E),b=-e*Math.cos(E),w=M*h}else if(v<=i+s){const M=(v-i)/s;y=-u+M*t,S=e,b=0,w=h+M*d}else{const M=(v-i-s)/i,E=M*Math.PI/2;y=u+e*Math.sin(E),S=e*Math.cos(E),b=e*Math.sin(E),w=h+d+M*h}const T=Math.max(0,Math.min(1,w/f));let g=0;v===0?g=.5/r:v===x&&(g=-.5/r);for(let M=0;M<=r;M++){const E=M/r,D=E*Math.PI*2,R=Math.sin(D),A=Math.cos(D);p.x=-S*A,p.y=y,p.z=S*R,c.push(p.x,p.y,p.z),m.set(-S*A,b,S*R),m.normalize(),o.push(m.x,m.y,m.z),l.push(E+g,T)}if(v>0){const M=(v-1)*_;for(let E=0;E<r;E++){const D=M+E,R=M+E+1,A=v*_+E,L=v*_+E+1;a.push(D,R,A),a.push(R,L,A)}}}this.setIndex(a),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class mt extends $t{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,c=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:o};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let x=0;const _=[],m=i/2;let p=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function v(){const y=new U,S=new U;let b=0;const T=(t-e)/i;for(let g=0;g<=s;g++){const M=[],E=g/s,D=E*(t-e)+e;for(let R=0;R<=r;R++){const A=R/r,L=A*o+c,k=Math.sin(L),z=Math.cos(L);S.x=D*k,S.y=-E*i+m,S.z=D*z,h.push(S.x,S.y,S.z),y.set(k,T,z).normalize(),d.push(y.x,y.y,y.z),f.push(A,1-E),M.push(x++)}_.push(M)}for(let g=0;g<r;g++)for(let M=0;M<s;M++){const E=_[M][g],D=_[M+1][g],R=_[M+1][g+1],A=_[M][g+1];(e>0||M!==0)&&(u.push(E,D,A),b+=3),(t>0||M!==s-1)&&(u.push(D,R,A),b+=3)}l.addGroup(p,b,0),p+=b}function w(y){const S=x,b=new tt,T=new U;let g=0;const M=y===!0?e:t,E=y===!0?1:-1;for(let R=1;R<=r;R++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),x++;const D=x;for(let R=0;R<=r;R++){const L=R/r*o+c,k=Math.cos(L),z=Math.sin(L);T.x=M*z,T.y=m*E,T.z=M*k,h.push(T.x,T.y,T.z),d.push(0,E,0),b.x=k*.5+.5,b.y=z*.5*E+.5,f.push(b.x,b.y),x++}for(let R=0;R<r;R++){const A=S+R,L=D+R;y===!0?u.push(L,L+1,A):u.push(L+1,L,A),g+=3}l.addGroup(p,g,y===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vf extends $t{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];c(r),l(i),u(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(v){const w=new U,y=new U,S=new U;for(let b=0;b<t.length;b+=3)f(t[b+0],w),f(t[b+1],y),f(t[b+2],S),o(w,y,S,v)}function o(v,w,y,S){const b=S+1,T=[];for(let g=0;g<=b;g++){T[g]=[];const M=v.clone().lerp(y,g/b),E=w.clone().lerp(y,g/b),D=b-g;for(let R=0;R<=D;R++)R===0&&g===b?T[g][R]=M:T[g][R]=M.clone().lerp(E,R/D)}for(let g=0;g<b;g++)for(let M=0;M<2*(b-g)-1;M++){const E=Math.floor(M/2);M%2===0?(d(T[g][E+1]),d(T[g+1][E]),d(T[g][E])):(d(T[g][E+1]),d(T[g+1][E+1]),d(T[g+1][E]))}}function l(v){const w=new U;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(v),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function u(){const v=new U;for(let w=0;w<s.length;w+=3){v.x=s[w+0],v.y=s[w+1],v.z=s[w+2];const y=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(y,1-S)}x(),h()}function h(){for(let v=0;v<a.length;v+=6){const w=a[v+0],y=a[v+2],S=a[v+4],b=Math.max(w,y,S),T=Math.min(w,y,S);b>.9&&T<.1&&(w<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,w){const y=v*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function x(){const v=new U,w=new U,y=new U,S=new U,b=new tt,T=new tt,g=new tt;for(let M=0,E=0;M<s.length;M+=9,E+=6){v.set(s[M+0],s[M+1],s[M+2]),w.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),b.set(a[E+0],a[E+1]),T.set(a[E+2],a[E+3]),g.set(a[E+4],a[E+5]),S.copy(v).add(w).add(y).divideScalar(3);const D=m(S);_(b,E+0,v,D),_(T,E+2,w,D),_(g,E+4,y,D)}}function _(v,w,y,S){S<0&&v.x===1&&(a[w]=v.x-1),y.x===0&&y.z===0&&(a[w]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.vertices,e.indices,e.radius,e.detail)}}class xf extends vf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xf(e.radius,e.detail)}}class Xc extends $t{constructor(e=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Et(r,0,Math.PI*2);const s=[],a=[],c=[],o=[],l=[],u=1/t,h=new U,d=new tt,f=new U,x=new U,_=new U;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),o.push(f.x,f.y,f.z);break;case e.length-1:o.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),o.push(f.x,f.y,f.z),_.copy(x)}for(let v=0;v<=t;v++){const w=i+v*u*r,y=Math.sin(w),S=Math.cos(w);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*y,h.y=e[b].y,h.z=e[b].x*S,a.push(h.x,h.y,h.z),d.x=v/t,d.y=b/(e.length-1),c.push(d.x,d.y);const T=o[3*b+0]*y,g=o[3*b+1],M=o[3*b+0]*S;l.push(T,g,M)}}for(let v=0;v<t;v++)for(let w=0;w<e.length-1;w++){const y=w+v*e.length,S=y,b=y+e.length,T=y+e.length+1,g=y+1;s.push(S,b,g),s.push(T,g,b)}this.setIndex(s),this.setAttribute("position",new yt(a,3)),this.setAttribute("uv",new yt(c,2)),this.setAttribute("normal",new yt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.points,e.segments,e.phiStart,e.phiLength)}}class po extends $t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,c=Math.floor(i),o=Math.floor(r),l=c+1,u=o+1,h=e/c,d=t/o,f=[],x=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-a;for(let w=0;w<l;w++){const y=w*h-s;x.push(y,-v,0),_.push(0,0,1),m.push(w/c),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let v=0;v<c;v++){const w=v+l*p,y=v+l*(p+1),S=v+1+l*(p+1),b=v+1+l*p;f.push(w,y,b),f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}class ll extends $t{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const c=[],o=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new U,x=new tt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const p=s+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),o.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,u.push(x.x,x.y)}h+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,w=v,y=v+i+1,S=v+i+2,b=v+1;c.push(w,y,b),c.push(y,S,b)}}this.setIndex(c),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $i extends $t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+c,Math.PI);let l=0;const u=[],h=new U,d=new U,f=[],x=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],w=p/i,y=a+w*c,S=e*Math.cos(y),b=Math.sqrt(e*e-S*S);let T=0;p===0&&a===0?T=.5/t:p===i&&o===Math.PI&&(T=-.5/t);for(let g=0;g<=t;g++){const M=g/t,E=r+M*s;h.x=-b*Math.cos(E),h.y=S,h.z=b*Math.sin(E),x.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(M+T,1-w),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const w=u[p][v+1],y=u[p][v],S=u[p+1][v],b=u[p+1][v+1];(p!==0||a>0)&&f.push(w,y,b),(p!==i-1||o<Math.PI)&&f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ki extends $t{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:c},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],u=[],h=[],d=new U,f=new U,x=new U;for(let _=0;_<=i;_++){const m=a+_/i*c;for(let p=0;p<=r;p++){const v=p/r*s;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),x.subVectors(f,d).normalize(),u.push(x.x,x.y,x.z),h.push(p/r),h.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=r;m++){const p=(r+1)*_+m-1,v=(r+1)*(_-1)+m-1,w=(r+1)*(_-1)+m,y=(r+1)*_+m;o.push(p,v,y),o.push(v,w,y)}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ao(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(kh(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(kh(r[0])){const s=[];for(let a=0,c=r.length;a<c;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Qn(n){const e={};for(let t=0;t<n.length;t++){const i=ao(n[t]);for(const r in i)e[r]=i[r]}return e}function kh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function q1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const Y1={clone:ao,merge:Qn};var K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=j1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(r.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new U().fromArray(r.value);break;case"v4":this.uniforms[i].value=new tn().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ft().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Z1 extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qc extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J1 extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q1 extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ja extends hf{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Xp extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const eu=new Ft,Fh=new U,Oh=new U;class ex{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ff,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){eu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(eu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,c=r?r.w/s.y:1,o=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ua||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*c,0,.5*c+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*c,0,.5*c+l,0,0,.5,.5,0,0,0,1),t.multiply(eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Za=new U,Ja=new Yn,Wi=new U;class ul extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Ja,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Za,Ja,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new U,zh=new tt,Bh=new tt;class mi extends ul{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,zh,Bh),t.subVectors(Bh,zh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/o,t-=a.offsetY*i/l,r*=a.width/o,i*=a.height/l}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tx extends ex{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class Gh extends Xp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class qp extends ul{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,c=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,c-=u*this.view.offsetY,o=c-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nx extends Xp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yp extends $t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Gs=-90,Vs=1;class Kp extends Vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mi(Gs,Vs,e,t);r.layers=this.layers,this.add(r);const s=new mi(Gs,Vs,e,t);s.layers=this.layers,this.add(s);const a=new mi(Gs,Vs,e,t);a.layers=this.layers,this.add(a);const c=new mi(Gs,Vs,e,t);c.layers=this.layers,this.add(c);const o=new mi(Gs,Vs,e,t);o.layers=this.layers,this.add(o);const l=new mi(Gs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,c,o]=t;for(const l of t)this.remove(l);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,o,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ix extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rx{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gf=class Gf{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Gf.prototype.isMatrix2=!0;let Vh=Gf;function Hh(n,e,t,i){const r=sx(i);switch(t){case Ip:return n*e;case tf:return n*e/r.components*r.byteLength;case nf:return n*e/r.components*r.byteLength;case fs:return n*e*2/r.components*r.byteLength;case rf:return n*e*2/r.components*r.byteLength;case Up:return n*e*3/r.components*r.byteLength;case Mi:return n*e*4/r.components*r.byteLength;case sf:return n*e*4/r.components*r.byteLength;case uc:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fc:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ou:case Bu:return Math.max(n,16)*Math.max(e,8)/4;case Fu:case zu:return Math.max(n,8)*Math.max(e,8)/2;case Gu:case Vu:case $u:case Wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hu:case kc:case Xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ku:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ju:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ed:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case td:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case od:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ad:case cd:case ld:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ud:case dd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fc:case fd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sx(n){switch(n){case ti:case Rp:return{byteLength:1,components:1};case ca:case Pp:case Ei:return{byteLength:2,components:1};case Qd:case ef:return{byteLength:2,components:4};case Hi:case Jd:case Ni:return{byteLength:4,components:1};case Lp:case Dp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jp(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ox(n){const e=new WeakMap;function t(c,o){const l=c.array,u=c.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(o,d),n.bufferData(o,l,u),c.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:h}}function i(c,o,l){const u=o.array,h=o.updateRanges;if(n.bindBuffer(l,c),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<h.length;f++){const x=h[d],_=h[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,x=h.length;f<x;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const o=e.get(c);o&&(n.deleteBuffer(o.buffer),e.delete(c))}function a(c,o){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const l=e.get(c);if(l===void 0)e.set(c,t(c,o));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,o),l.version=c.version}}return{get:r,remove:s,update:a}}var ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
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
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qx=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,s_=`uniform sampler2D dfgLUT;
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
}`,o_=`
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
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
}`,py=`#if DEPTH_PACKING == 3200
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
}`,my=`#define DISTANCE
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
}`,gy=`#define DISTANCE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,Sy=`#define LAMBERT
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
}`,wy=`#define LAMBERT
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
}`,Ty=`#define MATCAP
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
}`,Ey=`#define MATCAP
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
}`,Ay=`#define NORMAL
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
}`,Cy=`#define NORMAL
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
}`,Ry=`#define PHONG
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
}`,Py=`#define PHONG
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
}`,Ly=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Iy=`#define TOON
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
}`,Uy=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 color;
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
}`,zy=`uniform float rotation;
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
}`,By=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:ax,alphahash_pars_fragment:cx,alphamap_fragment:lx,alphamap_pars_fragment:ux,alphatest_fragment:dx,alphatest_pars_fragment:fx,aomap_fragment:hx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:vx,beginnormal_vertex:xx,bsdfs:_x,iridescence_fragment:yx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Tx,color_fragment:Ex,color_pars_fragment:Ax,color_pars_vertex:Cx,color_vertex:Rx,common:Px,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Ix,displacementmap_vertex:Ux,emissivemap_fragment:Nx,emissivemap_pars_fragment:kx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:zx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:Gx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:Qx,envmap_vertex:Hx,fog_vertex:$x,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:Kx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Zx,lights_pars_begin:Jx,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:r_,lights_physical_pars_fragment:s_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:c_,lightprobes_pars_fragment:l_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:d_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:h_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:v_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:__,morphinstance_vertex:y_,morphcolor_vertex:M_,morphnormal_vertex:b_,morphtarget_pars_vertex:S_,morphtarget_vertex:w_,normal_fragment_begin:T_,normal_fragment_maps:E_,normal_pars_fragment:A_,normal_pars_vertex:C_,normal_vertex:R_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:D_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:U_,opaque_fragment:N_,packing:k_,premultiplied_alpha_fragment:F_,project_vertex:O_,dithering_fragment:z_,dithering_pars_fragment:B_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:$_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:K_,skinnormal_vertex:j_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:Q_,tonemapping_pars_fragment:ey,transmission_fragment:ty,transmission_pars_fragment:ny,uv_pars_fragment:iy,uv_pars_vertex:ry,uv_vertex:sy,worldpos_vertex:oy,background_vert:ay,background_frag:cy,backgroundCube_vert:ly,backgroundCube_frag:uy,cube_vert:dy,cube_frag:fy,depth_vert:hy,depth_frag:py,distance_vert:my,distance_frag:gy,equirect_vert:vy,equirect_frag:xy,linedashed_vert:_y,linedashed_frag:yy,meshbasic_vert:My,meshbasic_frag:by,meshlambert_vert:Sy,meshlambert_frag:wy,meshmatcap_vert:Ty,meshmatcap_frag:Ey,meshnormal_vert:Ay,meshnormal_frag:Cy,meshphong_vert:Ry,meshphong_frag:Py,meshphysical_vert:Ly,meshphysical_frag:Dy,meshtoon_vert:Iy,meshtoon_frag:Uy,points_vert:Ny,points_frag:ky,shadow_vert:Fy,shadow_frag:Oy,sprite_vert:zy,sprite_frag:By},Fe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Yi={basic:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Qn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Qn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Qn([Fe.points,Fe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Qn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Qn([Fe.common,Fe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Qn([Fe.sprite,Fe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Qn([Fe.common,Fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Qn([Fe.lights,Fe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Yi.physical={uniforms:Qn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Qa={r:0,b:0,g:0},Gy=new Ft,Zp=new ht;Zp.set(-1,0,0,0,1,0,0,0,1);function Vy(n,e,t,i,r,s){const a=new ot(0);let c=r===!0?0:1,o,l,u=null,h=0,d=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const y=v.backgroundBlurriness>0;w=e.get(w,y)}return w}function x(v){let w=!1;const y=f(v);y===null?m(a,c):y&&y.isColor&&(m(y,1),w=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,w){const y=f(w);y&&(y.isCubeTexture||y.mapping===ol)?(l===void 0&&(l=new zt(new Tn(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:ao(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zp),l.material.toneMapped=kt.getTransfer(y.colorSpace)!==Jt,(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(o===void 0&&(o=new zt(new po(2,2),new Wt({name:"BackgroundMaterial",uniforms:ao(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=y,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.toneMapped=kt.getTransfer(y.colorSpace)!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),o.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(o.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function m(v,w){v.getRGB(Qa,Wp(n)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),c=w,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:x,addToRenderList:_,dispose:p}}function Hy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function c(D,R,A,L,k){let z=!1;const V=h(D,L,A,R);s!==V&&(s=V,l(s.object)),z=f(D,L,A,k),z&&x(D,L,A,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(D,R,A,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function o(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,R,A,L){const k=L.wireframe===!0;let z=i[R.id];z===void 0&&(z={},i[R.id]=z);const V=D.isInstancedMesh===!0?D.id:0;let oe=z[V];oe===void 0&&(oe={},z[V]=oe);let te=oe[A.id];te===void 0&&(te={},oe[A.id]=te);let ce=te[k];return ce===void 0&&(ce=d(o()),te[k]=ce),ce}function d(D){const R=[],A=[],L=[];for(let k=0;k<t;k++)R[k]=0,A[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:A,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,R,A,L){const k=s.attributes,z=R.attributes;let V=0;const oe=A.getAttributes();for(const te in oe)if(oe[te].location>=0){const le=k[te];let Be=z[te];if(Be===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(Be=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(Be=D.instanceColor)),le===void 0||le.attribute!==Be||Be&&le.data!==Be.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function x(D,R,A,L){const k={},z=R.attributes;let V=0;const oe=A.getAttributes();for(const te in oe)if(oe[te].location>=0){let le=z[te];le===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(le=D.instanceColor));const Be={};Be.attribute=le,le&&le.data&&(Be.data=le.data),k[te]=Be,V++}s.attributes=k,s.attributesNum=V,s.index=L}function _(){const D=s.newAttributes;for(let R=0,A=D.length;R<A;R++)D[R]=0}function m(D){p(D,0)}function p(D,R){const A=s.newAttributes,L=s.enabledAttributes,k=s.attributeDivisors;A[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),k[D]!==R&&(n.vertexAttribDivisor(D,R),k[D]=R)}function v(){const D=s.newAttributes,R=s.enabledAttributes;for(let A=0,L=R.length;A<L;A++)R[A]!==D[A]&&(n.disableVertexAttribArray(A),R[A]=0)}function w(D,R,A,L,k,z,V){V===!0?n.vertexAttribIPointer(D,R,A,k,z):n.vertexAttribPointer(D,R,A,L,k,z)}function y(D,R,A,L){_();const k=L.attributes,z=A.getAttributes(),V=R.defaultAttributeValues;for(const oe in z){const te=z[oe];if(te.location>=0){let ce=k[oe];if(ce===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),ce!==void 0){const le=ce.normalized,Be=ce.itemSize,we=e.get(ce);if(we===void 0)continue;const je=we.buffer,He=we.type,Te=we.bytesPerElement,re=He===n.INT||He===n.UNSIGNED_INT||ce.gpuType===Jd;if(ce.isInterleavedBufferAttribute){const ue=ce.data,Ae=ue.stride,nt=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let pe=0;pe<te.locationSize;pe++)p(te.location+pe,ue.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<te.locationSize;pe++)m(te.location+pe);n.bindBuffer(n.ARRAY_BUFFER,je);for(let pe=0;pe<te.locationSize;pe++)w(te.location+pe,Be/te.locationSize,He,le,Ae*Te,(nt+Be/te.locationSize*pe)*Te,re)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<te.locationSize;ue++)p(te.location+ue,ce.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<te.locationSize;ue++)m(te.location+ue);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ue=0;ue<te.locationSize;ue++)w(te.location+ue,Be/te.locationSize,He,le,Be*Te,Be/te.locationSize*ue*Te,re)}}else if(V!==void 0){const le=V[oe];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(te.location,le);break;case 3:n.vertexAttrib3fv(te.location,le);break;case 4:n.vertexAttrib4fv(te.location,le);break;default:n.vertexAttrib1fv(te.location,le)}}}}v()}function S(){M();for(const D in i){const R=i[D];for(const A in R){const L=R[A];for(const k in L){const z=L[k];for(const V in z)u(z[V].object),delete z[V];delete L[k]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const R=i[D.id];for(const A in R){const L=R[A];for(const k in L){const z=L[k];for(const V in z)u(z[V].object),delete z[V];delete L[k]}}delete i[D.id]}function T(D){for(const R in i){const A=i[R];for(const L in A){const k=A[L];if(k[D.id]===void 0)continue;const z=k[D.id];for(const V in z)u(z[V].object),delete z[V];delete k[D.id]}}}function g(D){for(const R in i){const A=i[R],L=D.isInstancedMesh===!0?D.id:0,k=A[L];if(k!==void 0){for(const z in k){const V=k[z];for(const oe in V)u(V[oe].object),delete V[oe];delete k[z]}delete A[L],Object.keys(A).length===0&&delete i[R]}}}function M(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:M,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function $y(n,e,t){let i;function r(o){i=o}function s(o,l){n.drawArrays(i,o,l),t.update(l,i,1)}function a(o,l,u){u!==0&&(n.drawArraysInstanced(i,o,l,u),t.update(l,i,u))}function c(o,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c}function Wy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Mi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(T){const g=T===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ti&&T!==Ni&&!g&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=o(l);u!==l&&(st("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:b}}function Xy(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new qi,c=new ht,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const x=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):l();else{const v=s?0:i,w=v*4;let y=p.clippingState||null;o.value=y,y=u(x,d,w,f);for(let S=0;S!==w;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,x){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=o.value,x!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;c.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==_;++w,y+=4)a.copy(h[w]).applyMatrix4(v,c),a.normal.toArray(m,y),m[y+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const qs=4,qy=6,Yy=20,Ky=256,Do=new qp,$h=new ot;let tu=null,nu=0,iu=0,ru=!1;const jy=new U,ts=new U;class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:c=jy}=s;tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,c),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ei,format:Mi,colorSpace:Oc,depthBuffer:!1},r=Wh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zy(s)),this._blurMaterial=Qy(s,e,t),this._ggxMaterial=Jy(s,e,t)}return r}_compileMaterial(e){const t=new zt(new $t,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,i,r,s){const o=new mi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($h),h.toneMapping=Qi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new Tn,new uf({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy($h),p=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+u[w],s.y,s.z)):y===1?(o.up.set(0,0,l[w]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+u[w],s.z)):(o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+u[w]));const S=this._cubeSize;Hs(r,y*S,w>2?S:0,S,S),h.setRenderTarget(r),p&&h.render(_,o),h.render(e,o)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ds||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const c=s.uniforms;c.envMap.value=e;const o=this._cubeSize;Hs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Do)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;const o=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:x}=this,_=this._sizeLods[i],m=3*_*(i>x-qs?i-x+qs:0),p=4*(this._cubeSize-_);o.envMap.value=e.texture,o.roughness.value=f,o.mipInt.value=x-t,Hs(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(c,Do),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=x-i,Hs(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(c,Do)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,c=this._blurMaterial,o=this._lodMeshes[r];o.material=c;const l=c.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-qs?r-this._lodMax+qs:0),d=4*(this._cubeSize-u);Hs(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(o,Do)}}function Zy(n){const e=[],t=[];let i=n;const r=n-qs+1+qy;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const c=1/(a-2),o=-c,l=1+c,u=[o,o,l,o,l,l,o,o,l,l,o,l],h=6,d=6,f=3,x=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let p=0;p<h;p++){const v=p%3*2/3-1,w=p>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];x.set(y,f*d*p);for(let S=0;S<d;S++){const b=u[S*2]*2-1,T=u[S*2+1]*2-1;p===0?ts.set(1,T,b):p===1?ts.set(-b,1,-T):p===2?ts.set(-b,T,1):p===3?ts.set(-1,T,-b):p===4?ts.set(-b,-1,T):ts.set(b,T,-1),ts.toArray(_,(p*d+S)*f)}}const m=new $t;m.setAttribute("position",new mn(x,f)),m.setAttribute("outputDirection",new mn(_,f)),t.push(new zt(m,null)),i>qs&&i--}return{lodMeshes:t,sizeLods:e}}function Wh(n,e,t){const i=new fi(n,e,t);return i.texture.mapping=ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jy(n,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Qy(n,e,t){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:Yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Xh(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function qh(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _f extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:pr});s.uniforms.tEquirect.value=t;const a=new zt(r,s),c=t.minFilter;return t.minFilter===Nr&&(t.minFilter=xn),new Kp(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function eM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Cl||f===Rl)if(e.has(d)){const x=e.get(d).texture;return c(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const _=new _f(x.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",l),c(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,x=f===Cl||f===Rl,_=f===ds||f===ro;if(x||_){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new md(n)),m=x?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return x&&v&&v.height>0||_&&v&&o(v)?(i===null&&(i=new md(n)),m=x?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function c(d,f){return f===Cl?d.mapping=ds:f===Rl&&(d.mapping=ro),d}function o(d){let f=0;const x=6;for(let _=0;_<x;_++)d[_]!==void 0&&f++;return f===x}function l(d){const f=d.target;f.removeEventListener("dispose",l);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function tM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zs("WebGLRenderer: "+i+" extension not supported."),r}}}function nM(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function o(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,x=h.attributes.position;let _=0;if(x===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let w=0,y=v.length;w<y;w+=3){const S=v[w+0],b=v[w+1],T=v[w+2];d.push(S,b,b,T,T,S)}}else{const v=x.array;_=x.version;for(let w=0,y=v.length/3-1;w<y;w+=3){const S=w+0,b=w+1,T=w+2;d.push(S,b,b,T,T,S)}}const m=new(x.count>=65535?Gp:Bp)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:c,update:o,getWireframeAttribute:u}}function iM(n,e,t){let i;function r(h){i=h}let s,a;function c(h){s=h.type,a=h.bytesPerElement}function o(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,s,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,i,1)}this.setMode=r,this.setIndex=c,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function rM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sM(n,e,t){const i=new WeakMap,r=new tn;function s(a,c,o){const l=a.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(c);if(d===void 0||d.count!==h){let E=function(){g.dispose(),i.delete(c),c.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const x=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let y=0;x===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let S=c.attributes.position.count*y,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*b*4*h),g=new Fp(T,S,b,h);g.type=Ni,g.needsUpdate=!0;const M=y*4;for(let D=0;D<h;D++){const R=p[D],A=v[D],L=w[D],k=S*b*4*D;for(let z=0;z<R.count;z++){const V=z*M;x===!0&&(r.fromBufferAttribute(R,z),T[k+V+0]=r.x,T[k+V+1]=r.y,T[k+V+2]=r.z,T[k+V+3]=0),_===!0&&(r.fromBufferAttribute(A,z),T[k+V+4]=r.x,T[k+V+5]=r.y,T[k+V+6]=r.z,T[k+V+7]=0),m===!0&&(r.fromBufferAttribute(L,z),T[k+V+8]=r.x,T[k+V+9]=r.y,T[k+V+10]=r.z,T[k+V+11]=L.itemSize===4?r.w:1)}}d={count:h,texture:g,size:new tt(S,b)},i.set(c,d),c.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const _=c.morphTargetsRelative?1:1-x;o.getUniforms().setValue(n,"morphTargetBaseInfluence",_),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function oM(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function c(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:c}}const aM={[Mp]:"LINEAR_TONE_MAPPING",[bp]:"REINHARD_TONE_MAPPING",[Sp]:"CINEON_TONE_MAPPING",[wp]:"ACES_FILMIC_TONE_MAPPING",[Ep]:"AGX_TONE_MAPPING",[Ap]:"NEUTRAL_TONE_MAPPING",[Tp]:"CUSTOM_TONE_MAPPING"};function cM(n,e,t,i,r,s){const a=new fi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,o=null;const l=new $t;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));const u=new Z1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new zt(l,u),d=new qp(-1,1,1,-1,0,1);let f=null,x=null,_=!1,m,p=null,v=[],w=!1;this.setSize=function(y,S){a.setSize(y,S),c!==null&&c.setSize(y,S),o!==null&&o.setSize(y,S);for(let b=0;b<v.length;b++){const T=v[b];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){v=y,w=v.length>0&&v[0].isRenderPass===!0;const S=a.width,b=a.height;v.length>0&&c===null&&(c=new fi(S,b,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),o=new fi(S,b,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<v.length;T++){const g=v[T];g.setSize&&g.setSize(S,b)}},this.begin=function(y,S){if(_||y.toneMapping===Qi&&v.length===0)return!1;if(p=S,S!==null){const b=S.width,T=S.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Qi,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=m,_=!0;let b=a,T=c;for(let g=0;g<v.length;g++){const M=v[g];M.enabled!==!1&&(M.render(y,T,b,S),M.needsSwap!==!1&&(b=T,T=T===c?o:c))}if(f!==y.outputColorSpace||x!==y.toneMapping){f=y.outputColorSpace,x=y.toneMapping,u.defines={},kt.getTransfer(f)===Jt&&(u.defines.SRGB_TRANSFER="");const g=aM[x];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(h,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),c!==null&&c.dispose(),o!==null&&o.dispose(),l.dispose(),u.dispose()}}const Jp=new Kn,gd=new oo(1,1),Qp=new Fp,em=new E1,tm=new Hp,Yh=[],Kh=[],jh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function mo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yh[r];if(s===void 0&&(s=new Float32Array(r),Yh[r]=s),e!==0){i.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(s,c)}return s}function Ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fl(n,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;n.uniform2fv(this.addr,e),Dn(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;n.uniform3fv(this.addr,e),Dn(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;n.uniform4fv(this.addr,e),Dn(t,e)}}function hM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,i))return;Jh.set(i),n.uniformMatrix2fv(this.addr,!1,Jh),Dn(t,i)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),Dn(t,i)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,i))return;jh.set(i),n.uniformMatrix4fv(this.addr,!1,jh),Dn(t,i)}}function gM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;n.uniform2iv(this.addr,e),Dn(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;n.uniform3iv(this.addr,e),Dn(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;n.uniform4iv(this.addr,e),Dn(t,e)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;n.uniform2uiv(this.addr,e),Dn(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;n.uniform3uiv(this.addr,e),Dn(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;n.uniform4uiv(this.addr,e),Dn(t,e)}}function wM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gd.compareFunction=t.isReversedDepthBuffer()?af:of,s=gd):s=Jp,t.setTexture2D(e||s,r)}function TM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||em,r)}function EM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tm,r)}function AM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qp,r)}function CM(n){switch(n){case 5126:return lM;case 35664:return uM;case 35665:return dM;case 35666:return fM;case 35674:return hM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return _M;case 5125:return yM;case 36294:return MM;case 36295:return bM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return AM}}function RM(n,e){n.uniform1fv(this.addr,e)}function PM(n,e){const t=mo(e,this.size,2);n.uniform2fv(this.addr,t)}function LM(n,e){const t=mo(e,this.size,3);n.uniform3fv(this.addr,t)}function DM(n,e){const t=mo(e,this.size,4);n.uniform4fv(this.addr,t)}function IM(n,e){const t=mo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UM(n,e){const t=mo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NM(n,e){const t=mo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kM(n,e){n.uniform1iv(this.addr,e)}function FM(n,e){n.uniform2iv(this.addr,e)}function OM(n,e){n.uniform3iv(this.addr,e)}function zM(n,e){n.uniform4iv(this.addr,e)}function BM(n,e){n.uniform1uiv(this.addr,e)}function GM(n,e){n.uniform2uiv(this.addr,e)}function VM(n,e){n.uniform3uiv(this.addr,e)}function HM(n,e){n.uniform4uiv(this.addr,e)}function $M(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);Ln(i,s)||(n.uniform1iv(this.addr,s),Dn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=gd:a=Jp;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||a,s[c])}function WM(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);Ln(i,s)||(n.uniform1iv(this.addr,s),Dn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||em,s[a])}function XM(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);Ln(i,s)||(n.uniform1iv(this.addr,s),Dn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tm,s[a])}function qM(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);Ln(i,s)||(n.uniform1iv(this.addr,s),Dn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qp,s[a])}function YM(n){switch(n){case 5126:return RM;case 35664:return PM;case 35665:return LM;case 35666:return DM;case 35674:return IM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return kM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return zM;case 5125:return BM;case 36294:return GM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CM(t.type)}}class jM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(e,t[c.id],i)}}}const su=/(\w+)(\])?(\[|\.)?/g;function Qh(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){const i=n.name,r=i.length;for(su.lastIndex=0;;){const s=su.exec(i),a=su.lastIndex;let c=s[1];const o=s[2]==="]",l=s[3];if(o&&(c=c|0),l===void 0||l==="["&&a+2===r){Qh(t,l===void 0?new KM(c,n,e):new jM(c,n,e));break}else{let h=t.map[c];h===void 0&&(h=new ZM(c),Qh(t,h)),t=h}}}class mc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const c=e.getActiveUniform(t,a),o=e.getUniformLocation(t,c.name);JM(c,o,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const c=t[s],o=i[c.id];o.needsUpdate!==!1&&c.setValue(e,o.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function e0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QM=37297;let eb=0;function tb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}const t0=new ht;function nb(n){kt._getMatrix(t0,kt.workingColorSpace,n);const e=`mat3( ${t0.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(n)){case zc:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function n0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+tb(n.getShaderSource(e),c)}else return s}function ib(n,e){const t=nb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rb={[Mp]:"Linear",[bp]:"Reinhard",[Sp]:"Cineon",[wp]:"ACESFilmic",[Ep]:"AgX",[Ap]:"Neutral",[Tp]:"Custom"};function sb(n,e){const t=rb[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new U;function ob(){kt.getLuminanceCoefficients(ec);const n=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ab(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function cb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}function Vo(n){return n!==""}function i0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(n){return n.replace(ub,fb)}const db=new Map;function fb(n,e){let t=wt[e];if(t===void 0){const i=db.get(e);if(i!==void 0)t=wt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vd(t)}const hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(n){return n.replace(hb,pb)}function pb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function o0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const mb={[lc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function gb(n){return mb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vb={[ds]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[ol]:"ENVMAP_TYPE_CUBE_UV"};function xb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const _b={[ro]:"ENVMAP_MODE_REFRACTION"};function yb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_b[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mb={[yp]:"ENVMAP_BLENDING_MULTIPLY",[Hv]:"ENVMAP_BLENDING_MIX",[$v]:"ENVMAP_BLENDING_ADD"};function bb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Mb[n.combine]||"ENVMAP_BLENDING_NONE"}function Sb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const o=gb(t),l=xb(t),u=yb(t),h=bb(t),d=Sb(t),f=ab(t),x=cb(s),_=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vo).join(`
`),p.length>0&&(p+=`
`)):(m=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),p=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?wt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,ib("linearToOutputTexel",t.outputColorSpace),ob(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),a=vd(a),a=i0(a,t),a=r0(a,t),c=vd(c),c=i0(c,t),c=r0(c,t),a=s0(a),c=s0(c),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=v+m+a,y=v+p+c,S=e0(r,r.VERTEX_SHADER,w),b=e0(r,r.FRAGMENT_SHADER,y);r.attachShader(_,S),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(D){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(_)||"",A=r.getShaderInfoLog(S)||"",L=r.getShaderInfoLog(b)||"",k=R.trim(),z=A.trim(),V=L.trim();let oe=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,S,b);else{const ce=n0(r,S,"vertex"),le=n0(r,b,"fragment");Bt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+ce+`
`+le)}else k!==""?st("WebGLProgram: Program Info Log:",k):(z===""||V==="")&&(te=!1);te&&(D.diagnostics={runnable:oe,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(S),r.deleteShader(b),g=new mc(r,_),M=lb(r,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,QM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let Tb=0;class Eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ab(e),t.set(e,i)),i}}class Ab{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}}function Cb(n){return n===fs||n===kc||n===Fc}function Rb(n,e,t,i,r,s){const a=new Op,c=new Eb,o=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return o.add(g),g===0?"uv":`uv${g}`}function _(g,M,E,D,R,A){const L=D.fog,k=R.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,oe=e.get(g.envMap||z,V),te=oe&&oe.mapping===ol?oe.image.height:null,ce=f[g.type];g.precision!==null&&(d=i.getMaxPrecision(g.precision),d!==g.precision&&st("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Be=le!==void 0?le.length:0;let we=0;k.morphAttributes.position!==void 0&&(we=1),k.morphAttributes.normal!==void 0&&(we=2),k.morphAttributes.color!==void 0&&(we=3);let je,He,Te,re;if(ce){const Zt=Yi[ce];je=Zt.vertexShader,He=Zt.fragmentShader}else{je=g.vertexShader,He=g.fragmentShader;const Zt=c.getVertexShaderStage(g),Lt=c.getFragmentShaderStage(g);c.update(g,Zt,Lt),Te=Zt.id,re=Lt.id}const ue=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),nt=R.isInstancedMesh===!0,pe=R.isBatchedMesh===!0,Ve=!!g.map,Rt=!!g.matcap,gt=!!oe,Qe=!!g.aoMap,at=!!g.lightMap,Ze=!!g.bumpMap&&g.wireframe===!1,Ct=!!g.normalMap,cn=!!g.displacementMap,It=!!g.emissiveMap,Kt=!!g.metalnessMap,jt=!!g.roughnessMap,j=g.anisotropy>0,Ht=g.clearcoat>0,Pt=g.dispersion>0,F=g.retroreflectivity>0,C=g.iridescence>0,J=g.sheen>0,ie=g.transmission>0,he=j&&!!g.anisotropyMap,Re=Ht&&!!g.clearcoatMap,Pe=Ht&&!!g.clearcoatNormalMap,de=Ht&&!!g.clearcoatRoughnessMap,ve=C&&!!g.iridescenceMap,Ee=C&&!!g.iridescenceThicknessMap,ze=J&&!!g.sheenColorMap,Ue=J&&!!g.sheenRoughnessMap,Le=!!g.specularMap,Ke=!!g.specularColorMap,it=!!g.specularIntensityMap,dt=ie&&!!g.transmissionMap,X=ie&&!!g.thicknessMap,De=!!g.gradientMap,me=!!g.alphaMap,Ie=g.alphaTest>0,ke=!!g.alphaHash,_e=!!g.extensions;let $e=Qi;g.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&($e=n.toneMapping);const Xe={shaderID:ce,shaderType:g.type,shaderName:g.name,vertexShader:je,fragmentShader:He,defines:g.defines,customVertexShaderID:Te,customFragmentShaderID:re,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:pe,batchingColor:pe&&R._colorsTexture!==null,instancing:nt,instancingColor:nt&&R.instanceColor!==null,instancingMorph:nt&&R.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ve,matcap:Rt,envMap:gt,envMapMode:gt&&oe.mapping,envMapCubeUVHeight:te,aoMap:Qe,lightMap:at,bumpMap:Ze,normalMap:Ct,displacementMap:cn,emissiveMap:It,normalMapObjectSpace:Ct&&g.normalMapType===qv,normalMapTangentSpace:Ct&&g.normalMapType===hd,packedNormalMap:Ct&&g.normalMapType===hd&&Cb(g.normalMap.format),metalnessMap:Kt,roughnessMap:jt,anisotropy:j,anisotropyMap:he,clearcoat:Ht,clearcoatMap:Re,clearcoatNormalMap:Pe,clearcoatRoughnessMap:de,dispersion:Pt,retroreflection:F,iridescence:C,iridescenceMap:ve,iridescenceThicknessMap:Ee,sheen:J,sheenColorMap:ze,sheenRoughnessMap:Ue,specularMap:Le,specularColorMap:Ke,specularIntensityMap:it,transmission:ie,transmissionMap:dt,thicknessMap:X,gradientMap:De,opaque:g.transparent===!1&&g.blending===Yo&&g.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:ke,combine:g.combine,mapUv:Ve&&x(g.map.channel),aoMapUv:Qe&&x(g.aoMap.channel),lightMapUv:at&&x(g.lightMap.channel),bumpMapUv:Ze&&x(g.bumpMap.channel),normalMapUv:Ct&&x(g.normalMap.channel),displacementMapUv:cn&&x(g.displacementMap.channel),emissiveMapUv:It&&x(g.emissiveMap.channel),metalnessMapUv:Kt&&x(g.metalnessMap.channel),roughnessMapUv:jt&&x(g.roughnessMap.channel),anisotropyMapUv:he&&x(g.anisotropyMap.channel),clearcoatMapUv:Re&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(g.sheenRoughnessMap.channel),specularMapUv:Le&&x(g.specularMap.channel),specularColorMapUv:Ke&&x(g.specularColorMap.channel),specularIntensityMapUv:it&&x(g.specularIntensityMap.channel),transmissionMapUv:dt&&x(g.transmissionMap.channel),thicknessMapUv:X&&x(g.thicknessMap.channel),alphaMapUv:me&&x(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ct||j),vertexNormals:!!k.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!k.attributes.uv&&(Ve||me),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&Ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ae,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:we,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:A.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ve&&g.map.isVideoTexture===!0&&kt.getTransfer(g.map.colorSpace)===Jt,decodeVideoTextureEmissive:It&&g.emissiveMap.isVideoTexture===!0&&kt.getTransfer(g.emissiveMap.colorSpace)===Jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ci,flipSided:g.side===ii,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:_e&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&g.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Xe.vertexUv1s=o.has(1),Xe.vertexUv2s=o.has(2),Xe.vertexUv3s=o.has(3),o.clear(),Xe}function m(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const E in g.defines)M.push(E),M.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(p(M,g),v(M,g),M.push(n.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function v(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function w(g){const M=f[g.type];let E;if(M){const D=Yi[M];E=Y1.clone(D.uniforms)}else E=g.uniforms;return E}function y(g,M){let E=u.get(M);return E!==void 0?++E.usedTimes:(E=new wb(n,M,g,r),l.push(E),u.set(M,E)),E}function S(g){if(--g.usedTimes===0){const M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function b(g){c.remove(g)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:T}}function Pb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function r(a,c,o){n.get(a)[c]=o}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function a0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function c0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function c(d,f,x,_,m,p){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=x,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function o(d,f,x,_,m,p,v){v.reversedDepth===!0&&(m=-m);const w=c(d,f,x,_,m,p);x.transmission>0?i.push(w):x.transparent===!0?r.push(w):t.push(w)}function l(d,f,x,_,m,p){const v=c(d,f,x,_,m,p);x.transmission>0?i.unshift(v):x.transparent===!0?r.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||Lb),i.length>1&&i.sort(f||a0),r.length>1&&r.sort(f||a0)}function h(){for(let d=e,f=n.length;d<f;d++){const x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function Db(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new c0,n.set(i,[a])):r>=s.length?(a=new c0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ib(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new ot};break;case"SpotLight":t={position:new U,direction:new U,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Nb=0;function kb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fb(n){const e=new Ib,t=Ub(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new Ft,a=new Ft;function c(l){let u=0,h=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let f=0,x=0,_=0,m=0,p=0,v=0,w=0,y=0,S=0,b=0,T=0,g=0,M=0,E=0;l.sort(kb);for(let R=0,A=l.length;R<A;R++){const L=l[R],k=L.color,z=L.intensity,V=L.distance;let oe=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===fs?oe=L.shadow.map.texture:oe=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=k.r*z,h+=k.g*z,d+=k.b*z;else if(L.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(L.sh.coefficients[te],z);E++}else if(L.isSunLight){const te=e.get(L);if(te.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ce=L.shadow,le=t.get(L);le.shadowIntensity=ce.intensity,le.shadowBias=ce.bias,le.shadowNormalBias=ce.normalBias,le.shadowRadius=ce.radius,le.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),i.sunShadow[x]=le,i.sunShadowMap[x]=oe;const Be=ce.getViewportCount();for(let we=0;we<Be;we++)i.sunShadowMatrix[_+we]=ce.getMatrix(we),i.sunShadowCascade[_+we]=ce._cascadeData[we];_+=Be,x++}i.sun[f]=te,f++}else if(L.isDirectionalLight){const te=e.get(L);if(te.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ce=L.shadow,le=t.get(L);le.shadowIntensity=ce.intensity,le.shadowBias=ce.bias,le.shadowNormalBias=ce.normalBias,le.shadowRadius=ce.radius,le.shadowMapSize=ce.mapSize,i.directionalShadow[m]=le,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=te,m++}else if(L.isSpotLight){const te=e.get(L);te.position.setFromMatrixPosition(L.matrixWorld),te.color.copy(k).multiplyScalar(z),te.distance=V,te.coneCos=Math.cos(L.angle),te.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),te.decay=L.decay,i.spot[v]=te;const ce=L.shadow;if(L.map&&(i.spotLightMap[g]=L.map,g++,ce.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[v]=ce.matrix,L.castShadow){const le=t.get(L);le.shadowIntensity=ce.intensity,le.shadowBias=ce.bias,le.shadowNormalBias=ce.normalBias,le.shadowRadius=ce.radius,le.shadowMapSize=ce.mapSize,i.spotShadow[v]=le,i.spotShadowMap[v]=oe,T++}v++}else if(L.isRectAreaLight){const te=e.get(L);te.color.copy(k).multiplyScalar(z),te.halfWidth.set(L.width*.5,0,0),te.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=te,w++}else if(L.isPointLight){const te=e.get(L);if(te.color.copy(L.color).multiplyScalar(L.intensity),te.distance=L.distance,te.decay=L.decay,L.castShadow){const ce=L.shadow,le=t.get(L);le.shadowIntensity=ce.intensity,le.shadowBias=ce.bias,le.shadowNormalBias=ce.normalBias,le.shadowRadius=ce.radius,le.shadowMapSize=ce.mapSize,le.shadowCameraNear=ce.camera.near,le.shadowCameraFar=ce.camera.far,i.pointShadow[p]=le,i.pointShadowMap[p]=oe,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=te,p++}else if(L.isHemisphereLight){const te=e.get(L);te.skyColor.copy(L.color).multiplyScalar(z),te.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[y]=te,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==x||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==g||D.numLightProbes!==E)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=p,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+g-M,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=E,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=v,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=x,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=g,D.numLightProbes=E,i.version=Nb++)}function o(l,u){let h=0,d=0,f=0,x=0,_=0,m=0;const p=u.matrixWorldInverse;for(let v=0,w=l.length;v<w;v++){const y=l[v];if(y.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),h++}else if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(y.isSpotLight){const S=i.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),x++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:c,setupView:o,state:i}}function l0(n){const e=new Fb(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function c(d){i.push(d)}function o(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:c,pushLightProbeGrid:o}}function Ob(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let c;return a===void 0?(c=new l0(n),e.set(r,[c])):s>=a.length?(c=new l0(n),a.push(c)):c=a[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
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
}`,Gb=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Vb=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],u0=new Ft,Io=new U,ou=new U;function Hb(n,e,t){let i=new ff;const r=new tt,s=new tt,a=new tn,c=new J1,o=new Q1,l={},u=t.maxTextureSize,h={[us]:ii,[ii]:us,[ci]:ci},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:zb,fragmentShader:Bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new $t;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let p=this.type;this.render=function(b,T,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===wv&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lc);const M=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),R=n.state;R.setBlending(pr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const A=p!==this.type;A&&T.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=b.length;L<k;L++){const z=b[L],V=z.shadow;if(V===void 0){st("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const oe=V.getFrameExtents();r.multiply(oe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,V.mapSize.y=s.y));const te=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=te,V.map===null||A===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Bo){if(z.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new fi(r.x,r.y,{format:fs,type:Ei,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new oo(r.x,r.y,Ni),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=xr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn}else z.isPointLight?(V.map=new _f(r.x),V.map.depthTexture=new X1(r.x,Hi)):(V.map=new fi(r.x,r.y),V.map.depthTexture=new oo(r.x,r.y,Hi)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=xr,this.type===lc?(V.map.depthTexture.compareFunction=te?af:of,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const ce=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,g);for(let le=0;le<ce;le++){const Be=V.getCamera(le);if(z.isPointLight){const we=V.camera,je=V.matrix,He=z.distance||we.far;He!==we.far&&(we.far=He,we.updateProjectionMatrix()),Io.setFromMatrixPosition(z.matrixWorld),we.position.copy(Io),ou.copy(we.position),ou.add(Gb[le]),we.up.copy(Vb[le]),we.lookAt(ou),we.updateMatrixWorld(),je.makeTranslation(-Io.x,-Io.y,-Io.z),u0.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),V._frustum.setFromProjectionMatrix(u0,we.coordinateSystem,we.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,le),n.clear();else{le===0&&(n.setRenderTarget(V.map),n.clear());const we=V.getViewport(le);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),R.viewport(a)}i=V.getFrustum(le),y(T,g,Be,z,this.type)}V.isPointLightShadow!==!0&&this.type===Bo&&v(V,g),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,D)};function v(b,T){const g=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new fi(r.x,r.y,{format:fs,type:Ei}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,g,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,g,f,_,null)}function w(b,T,g,M){let E=null;const D=g.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)E=D;else if(E=g.isPointLight===!0?o:c,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=E.uuid,A=T.uuid;let L=l[R];L===void 0&&(L={},l[R]=L);let k=L[A];k===void 0&&(k=E.clone(),L[A]=k,T.addEventListener("dispose",S)),E=k}if(E.visible=T.visible,E.wireframe=T.wireframe,M===Bo?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,g.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const R=n.properties.get(E);R.light=g}return E}function y(b,T,g,M,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Bo)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);const A=e.update(b),L=b.material;if(Array.isArray(L)){const k=A.groups;for(let z=0,V=k.length;z<V;z++){const oe=k[z],te=L[oe.materialIndex];if(te&&te.visible){const ce=w(b,te,M,E);b.onBeforeShadow(n,b,T,g,A,ce,oe),n.renderBufferDirect(g,null,A,ce,b,oe),b.onAfterShadow(n,b,T,g,A,ce,oe)}}}else if(L.visible){const k=w(b,L,M,E);b.onBeforeShadow(n,b,T,g,A,k,null),n.renderBufferDirect(g,null,A,k,b,null),b.onAfterShadow(n,b,T,g,A,k,null)}}const R=b.children;for(let A=0,L=R.length;A<L;A++)y(R[A],T,g,M,E)}function S(b){b.target.removeEventListener("dispose",S);for(const g in l){const M=l[g],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function $b(n,e){function t(){let X=!1;const De=new tn;let me=null;const Ie=new tn(0,0,0,0);return{setMask:function(ke){me!==ke&&!X&&(n.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){X=ke},setClear:function(ke,_e,$e,Xe,Zt){Zt===!0&&(ke*=Xe,_e*=Xe,$e*=Xe),De.set(ke,_e,$e,Xe),Ie.equals(De)===!1&&(n.clearColor(ke,_e,$e,Xe),Ie.copy(De))},reset:function(){X=!1,me=null,Ie.set(-1,0,0,0)}}}function i(){let X=!1,De=!1,me=null,Ie=null,ke=null;return{setReversed:function(_e){if(De!==_e){const $e=e.get("EXT_clip_control");_e?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),De=_e;const Xe=ke;ke=null,this.setClear(Xe)}},getReversed:function(){return De},setTest:function(_e){_e?ue(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(_e){me!==_e&&!X&&(n.depthMask(_e),me=_e)},setFunc:function(_e){if(De&&(_e=r1[_e]),Ie!==_e){switch(_e){case Ru:n.depthFunc(n.NEVER);break;case Pu:n.depthFunc(n.ALWAYS);break;case Lu:n.depthFunc(n.LESS);break;case oa:n.depthFunc(n.LEQUAL);break;case Du:n.depthFunc(n.EQUAL);break;case Iu:n.depthFunc(n.GEQUAL);break;case Uu:n.depthFunc(n.GREATER);break;case Nu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=_e}},setLocked:function(_e){X=_e},setClear:function(_e){ke!==_e&&(ke=_e,De&&(_e=1-_e),n.clearDepth(_e))},reset:function(){X=!1,me=null,Ie=null,ke=null,De=!1}}}function r(){let X=!1,De=null,me=null,Ie=null,ke=null,_e=null,$e=null,Xe=null,Zt=null;return{setTest:function(Lt){X||(Lt?ue(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(Lt){De!==Lt&&!X&&(n.stencilMask(Lt),De=Lt)},setFunc:function(Lt,kn,Zn){(me!==Lt||Ie!==kn||ke!==Zn)&&(n.stencilFunc(Lt,kn,Zn),me=Lt,Ie=kn,ke=Zn)},setOp:function(Lt,kn,Zn){(_e!==Lt||$e!==kn||Xe!==Zn)&&(n.stencilOp(Lt,kn,Zn),_e=Lt,$e=kn,Xe=Zn)},setLocked:function(Lt){X=Lt},setClear:function(Lt){Zt!==Lt&&(n.clearStencil(Lt),Zt=Lt)},reset:function(){X=!1,De=null,me=null,Ie=null,ke=null,_e=null,$e=null,Xe=null,Zt=null}}}const s=new t,a=new i,c=new r,o=new WeakMap,l=new WeakMap;let u={},h={},d={},f=new WeakMap,x=[],_=null,m=!1,p=null,v=null,w=null,y=null,S=null,b=null,T=null,g=new ot(0,0,0),M=0,E=!1,D=null,R=null,A=null,L=null,k=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,oe=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(te)[1]),V=oe>=1):te.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),V=oe>=2);let ce=null,le={};const Be=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),je=new tn().fromArray(Be),He=new tn().fromArray(we);function Te(X,De,me,Ie){const ke=new Uint8Array(4),_e=n.createTexture();n.bindTexture(X,_e),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<me;$e++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(De+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return _e}const re={};re[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ue(n.DEPTH_TEST),a.setFunc(oa),Ze(!1),Ct(oh),ue(n.CULL_FACE),Qe(pr);function ue(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function Ae(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function nt(X,De){return d[X]!==De?(n.bindFramebuffer(X,De),d[X]=De,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=De),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=De),!0):!1}function pe(X,De){let me=x,Ie=!1;if(X){me=f.get(De),me===void 0&&(me=[],f.set(De,me));const ke=X.textures;if(me.length!==ke.length||me[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,$e=ke.length;_e<$e;_e++)me[_e]=n.COLOR_ATTACHMENT0+_e;me.length=ke.length,Ie=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(me)}function Ve(X){return _!==X?(n.useProgram(X),_=X,!0):!1}const Rt={[Ws]:n.FUNC_ADD,[Ev]:n.FUNC_SUBTRACT,[Av]:n.FUNC_REVERSE_SUBTRACT};Rt[Cv]=n.MIN,Rt[Rv]=n.MAX;const gt={[Pv]:n.ZERO,[Lv]:n.ONE,[Dv]:n.SRC_COLOR,[xp]:n.SRC_ALPHA,[Ov]:n.SRC_ALPHA_SATURATE,[kv]:n.DST_COLOR,[Uv]:n.DST_ALPHA,[Iv]:n.ONE_MINUS_SRC_COLOR,[_p]:n.ONE_MINUS_SRC_ALPHA,[Fv]:n.ONE_MINUS_DST_COLOR,[Nv]:n.ONE_MINUS_DST_ALPHA,[zv]:n.CONSTANT_COLOR,[Bv]:n.ONE_MINUS_CONSTANT_COLOR,[Gv]:n.CONSTANT_ALPHA,[Vv]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(X,De,me,Ie,ke,_e,$e,Xe,Zt,Lt){if(X===pr){m===!0&&(Ae(n.BLEND),m=!1);return}if(m===!1&&(ue(n.BLEND),m=!0),X!==Tv){if(X!==p||Lt!==E){if((v!==Ws||S!==Ws)&&(n.blendEquation(n.FUNC_ADD),v=Ws,S=Ws),Lt)switch(X){case Yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bn:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",X);break}else switch(X){case Yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ah:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",X);break}w=null,y=null,b=null,T=null,g.set(0,0,0),M=0,p=X,E=Lt}return}ke=ke||De,_e=_e||me,$e=$e||Ie,(De!==v||ke!==S)&&(n.blendEquationSeparate(Rt[De],Rt[ke]),v=De,S=ke),(me!==w||Ie!==y||_e!==b||$e!==T)&&(n.blendFuncSeparate(gt[me],gt[Ie],gt[_e],gt[$e]),w=me,y=Ie,b=_e,T=$e),(Xe.equals(g)===!1||Zt!==M)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Zt),g.copy(Xe),M=Zt),p=X,E=!1}function at(X,De){X.side===ci?Ae(n.CULL_FACE):ue(n.CULL_FACE);let me=X.side===ii;De&&(me=!me),Ze(me),X.blending===Yo&&X.transparent===!1?Qe(pr):Qe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ie=X.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),It(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(X){D!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),D=X)}function Ct(X){X!==bv?(ue(n.CULL_FACE),X!==R&&(X===oh?n.cullFace(n.BACK):X===Sv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),R=X}function cn(X){X!==A&&(V&&n.lineWidth(X),A=X)}function It(X,De,me){X?(ue(n.POLYGON_OFFSET_FILL),(L!==De||k!==me)&&(L=De,k=me,a.getReversed()&&(De=-De),n.polygonOffset(De,me))):Ae(n.POLYGON_OFFSET_FILL)}function Kt(X){X?ue(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function jt(X){X===void 0&&(X=n.TEXTURE0+z-1),ce!==X&&(n.activeTexture(X),ce=X)}function j(X,De,me){me===void 0&&(ce===null?me=n.TEXTURE0+z-1:me=ce);let Ie=le[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[me]=Ie),(Ie.type!==X||Ie.texture!==De)&&(ce!==me&&(n.activeTexture(me),ce=me),n.bindTexture(X,De||re[X]),Ie.type=X,Ie.texture=De)}function Ht(){const X=le[ce];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Pt(){try{n.compressedTexImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function C(){try{n.texSubImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function J(){try{n.texSubImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Re(){try{n.texStorage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Pe(){try{n.texStorage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function de(){try{n.texImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function ve(){try{n.texImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Ee(X){return h[X]!==void 0?h[X]:n.getParameter(X)}function ze(X,De){h[X]!==De&&(n.pixelStorei(X,De),h[X]=De)}function Ue(X){je.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),je.copy(X))}function Le(X){He.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),He.copy(X))}function Ke(X,De){let me=l.get(De);me===void 0&&(me=new WeakMap,l.set(De,me));let Ie=me.get(X);Ie===void 0&&(Ie=n.getUniformBlockIndex(De,X.name),me.set(X,Ie))}function it(X,De){const Ie=l.get(De).get(X);o.get(De)!==Ie&&(n.uniformBlockBinding(De,Ie,X.__bindingPointIndex),o.set(De,Ie))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ce=null,le={},d={},f=new WeakMap,x=[],_=null,m=!1,p=null,v=null,w=null,y=null,S=null,b=null,T=null,g=new ot(0,0,0),M=0,E=!1,D=null,R=null,A=null,L=null,k=null,je.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:ue,disable:Ae,bindFramebuffer:nt,drawBuffers:pe,useProgram:Ve,setBlending:Qe,setMaterial:at,setFlipSided:Ze,setCullFace:Ct,setLineWidth:cn,setPolygonOffset:It,setScissorTest:Kt,activeTexture:jt,bindTexture:j,unbindTexture:Ht,compressedTexImage2D:Pt,compressedTexImage3D:F,texImage2D:de,texImage3D:ve,pixelStorei:ze,getParameter:Ee,updateUBOMapping:Ke,uniformBlockBinding:it,texStorage2D:Re,texStorage3D:Pe,texSubImage2D:C,texSubImage3D:J,compressedTexSubImage2D:ie,compressedTexSubImage3D:he,scissor:Ue,viewport:Le,reset:dt}}function Wb(n,e,t,i,r,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(F,C){return x?new OffscreenCanvas(F,C):Bc("canvas")}function m(F,C,J){let ie=1;const he=Pt(F);if((he.width>J||he.height>J)&&(ie=J/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Re=Math.floor(ie*he.width),Pe=Math.floor(ie*he.height);d===void 0&&(d=_(Re,Pe));const de=C?_(Re,Pe):d;return de.width=Re,de.height=Pe,de.getContext("2d").drawImage(F,0,0,Re,Pe),st("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Re+"x"+Pe+")."),de}else return"data"in F&&st("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function p(F){return F.generateMipmaps}function v(F){n.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(F,C,J,ie,he,Re=!1){if(F!==null){if(n[F]!==void 0)return n[F];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Pe;ie&&(Pe=e.get("EXT_texture_norm16"),Pe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=C;if(C===n.RED&&(J===n.FLOAT&&(de=n.R32F),J===n.HALF_FLOAT&&(de=n.R16F),J===n.UNSIGNED_BYTE&&(de=n.R8),J===n.UNSIGNED_SHORT&&Pe&&(de=Pe.R16_EXT),J===n.SHORT&&Pe&&(de=Pe.R16_SNORM_EXT)),C===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(de=n.R8UI),J===n.UNSIGNED_SHORT&&(de=n.R16UI),J===n.UNSIGNED_INT&&(de=n.R32UI),J===n.BYTE&&(de=n.R8I),J===n.SHORT&&(de=n.R16I),J===n.INT&&(de=n.R32I)),C===n.RG&&(J===n.FLOAT&&(de=n.RG32F),J===n.HALF_FLOAT&&(de=n.RG16F),J===n.UNSIGNED_BYTE&&(de=n.RG8),J===n.UNSIGNED_SHORT&&Pe&&(de=Pe.RG16_EXT),J===n.SHORT&&Pe&&(de=Pe.RG16_SNORM_EXT)),C===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(de=n.RG8UI),J===n.UNSIGNED_SHORT&&(de=n.RG16UI),J===n.UNSIGNED_INT&&(de=n.RG32UI),J===n.BYTE&&(de=n.RG8I),J===n.SHORT&&(de=n.RG16I),J===n.INT&&(de=n.RG32I)),C===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(de=n.RGB8UI),J===n.UNSIGNED_SHORT&&(de=n.RGB16UI),J===n.UNSIGNED_INT&&(de=n.RGB32UI),J===n.BYTE&&(de=n.RGB8I),J===n.SHORT&&(de=n.RGB16I),J===n.INT&&(de=n.RGB32I)),C===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),J===n.UNSIGNED_INT&&(de=n.RGBA32UI),J===n.BYTE&&(de=n.RGBA8I),J===n.SHORT&&(de=n.RGBA16I),J===n.INT&&(de=n.RGBA32I)),C===n.RGB&&(J===n.UNSIGNED_SHORT&&Pe&&(de=Pe.RGB16_EXT),J===n.SHORT&&Pe&&(de=Pe.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),C===n.RGBA){const ve=Re?zc:kt.getTransfer(he);J===n.FLOAT&&(de=n.RGBA32F),J===n.HALF_FLOAT&&(de=n.RGBA16F),J===n.UNSIGNED_BYTE&&(de=ve===Jt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Pe&&(de=Pe.RGBA16_EXT),J===n.SHORT&&Pe&&(de=Pe.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function S(F,C){let J;return F?C===null||C===Hi||C===la?J=n.DEPTH24_STENCIL8:C===Ni?J=n.DEPTH32F_STENCIL8:C===ca&&(J=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Hi||C===la?J=n.DEPTH_COMPONENT24:C===Ni?J=n.DEPTH_COMPONENT32F:C===ca&&(J=n.DEPTH_COMPONENT16),J}function b(F,C){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Gn&&F.minFilter!==xn?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function T(F){const C=F.target;C.removeEventListener("dispose",T),M(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function g(F){const C=F.target;C.removeEventListener("dispose",g),D(C)}function M(F){const C=i.get(F);if(C.__webglInit===void 0)return;const J=F.source,ie=f.get(J);if(ie){const he=ie[C.__cacheKey];he.usedTimes--,he.usedTimes===0&&E(F),Object.keys(ie).length===0&&f.delete(J)}i.remove(F)}function E(F){const C=i.get(F);n.deleteTexture(C.__webglTexture);const J=F.source,ie=f.get(J);delete ie[C.__cacheKey],a.memory.textures--}function D(F){const C=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(C.__webglFramebuffer[ie]))for(let he=0;he<C.__webglFramebuffer[ie].length;he++)n.deleteFramebuffer(C.__webglFramebuffer[ie][he]);else n.deleteFramebuffer(C.__webglFramebuffer[ie]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[ie])}else{if(Array.isArray(C.__webglFramebuffer))for(let ie=0;ie<C.__webglFramebuffer.length;ie++)n.deleteFramebuffer(C.__webglFramebuffer[ie]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ie=0;ie<C.__webglColorRenderbuffer.length;ie++)C.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[ie]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const J=F.textures;for(let ie=0,he=J.length;ie<he;ie++){const Re=i.get(J[ie]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),a.memory.textures--),i.remove(J[ie])}i.remove(F)}let R=0;function A(){R=0}function L(){return R}function k(F){R=F}function z(){const F=R;return F>=r.maxTextures&&st("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),R+=1,F}function V(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function oe(F,C){const J=i.get(F);if(F.isVideoTexture&&j(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const ie=F.image;if(ie===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(J,F,C);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+C)}function te(F,C){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Ae(J,F,C);return}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+C)}function ce(F,C){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Ae(J,F,C);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+C)}function le(F,C){const J=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&J.__version!==F.version){nt(J,F,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+C)}const Be={[aa]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[ku]:n.MIRRORED_REPEAT},we={[Gn]:n.NEAREST,[Wv]:n.NEAREST_MIPMAP_NEAREST,[wa]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},je={[Kv]:n.NEVER,[e1]:n.ALWAYS,[jv]:n.LESS,[of]:n.LEQUAL,[Zv]:n.EQUAL,[af]:n.GEQUAL,[Jv]:n.GREATER,[Qv]:n.NOTEQUAL};function He(F,C){if(C.type===Ni&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===xn||C.magFilter===Pl||C.magFilter===wa||C.magFilter===Nr||C.minFilter===xn||C.minFilter===Pl||C.minFilter===wa||C.minFilter===Nr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Be[C.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Be[C.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Be[C.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,we[C.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,we[C.minFilter]),C.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,je[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Gn||C.minFilter!==wa&&C.minFilter!==Nr||C.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Te(F,C){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",T));const ie=C.source;let he=f.get(ie);he===void 0&&(he={},f.set(ie,he));const Re=V(C);if(Re!==F.__cacheKey){he[Re]===void 0&&(he[Re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),he[Re].usedTimes++;const Pe=he[F.__cacheKey];Pe!==void 0&&(he[F.__cacheKey].usedTimes--,Pe.usedTimes===0&&E(C)),F.__cacheKey=Re,F.__webglTexture=he[Re].texture}return J}function re(F,C,J){return Math.floor(Math.floor(F/J)/C)}function ue(F,C,J,ie){const Re=F.updateRanges;if(Re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,C.width,C.height,J,ie,C.data);else{Re.sort((ze,Ue)=>ze.start-Ue.start);let Pe=0;for(let ze=1;ze<Re.length;ze++){const Ue=Re[Pe],Le=Re[ze],Ke=Ue.start+Ue.count,it=re(Le.start,C.width,4),dt=re(Ue.start,C.width,4);Le.start<=Ke+1&&it===dt&&re(Le.start+Le.count-1,C.width,4)===it?Ue.count=Math.max(Ue.count,Le.start+Le.count-Ue.start):(++Pe,Re[Pe]=Le)}Re.length=Pe+1;const de=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,C.width);for(let ze=0,Ue=Re.length;ze<Ue;ze++){const Le=Re[ze],Ke=Math.floor(Le.start/4),it=Math.ceil(Le.count/4),dt=Ke%C.width,X=Math.floor(Ke/C.width),De=it,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,dt,X,De,me,J,ie,C.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Ae(F,C,J){let ie=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ie=n.TEXTURE_3D);const he=Te(F,C),Re=C.source;t.bindTexture(ie,F.__webglTexture,n.TEXTURE0+J);const Pe=i.get(Re);if(Re.version!==Pe.__version||he===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const me=kt.getPrimaries(kt.workingColorSpace),Ie=C.colorSpace===Ir?null:kt.getPrimaries(C.colorSpace),ke=C.colorSpace===Ir||me===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment);let ve=m(C.image,!1,r.maxTextureSize);ve=Ht(C,ve);const Ee=s.convert(C.format,C.colorSpace),ze=s.convert(C.type);let Ue=y(C.internalFormat,Ee,ze,C.normalized,C.colorSpace,C.isVideoTexture);He(ie,C);let Le;const Ke=C.mipmaps,it=C.isVideoTexture!==!0,dt=Pe.__version===void 0||he===!0,X=Re.dataReady,De=b(C,ve);if(C.isDepthTexture)Ue=S(C.format===ss,C.type),dt&&(it?t.texStorage2D(n.TEXTURE_2D,1,Ue,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ee,ze,null));else if(C.isDataTexture)if(Ke.length>0){it&&dt&&t.texStorage2D(n.TEXTURE_2D,De,Ue,Ke[0].width,Ke[0].height);for(let me=0,Ie=Ke.length;me<Ie;me++)Le=Ke[me],it?X&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Le.width,Le.height,Ee,ze,Le.data):t.texImage2D(n.TEXTURE_2D,me,Ue,Le.width,Le.height,0,Ee,ze,Le.data);C.generateMipmaps=!1}else it?(dt&&t.texStorage2D(n.TEXTURE_2D,De,Ue,ve.width,ve.height),X&&ue(C,ve,Ee,ze)):t.texImage2D(n.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ee,ze,ve.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){it&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ue,Ke[0].width,Ke[0].height,ve.depth);for(let me=0,Ie=Ke.length;me<Ie;me++)if(Le=Ke[me],C.format!==Mi)if(Ee!==null)if(it){if(X)if(C.layerUpdates.size>0){const ke=Hh(Le.width,Le.height,C.format,C.type);for(const _e of C.layerUpdates){const $e=Le.data.subarray(_e*ke/Le.data.BYTES_PER_ELEMENT,(_e+1)*ke/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,_e,Le.width,Le.height,1,Ee,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Le.width,Le.height,ve.depth,Ee,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ue,Le.width,Le.height,ve.depth,0,Le.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Le.width,Le.height,ve.depth,Ee,ze,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ue,Le.width,Le.height,ve.depth,0,Ee,ze,Le.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{it&&dt&&t.texStorage2D(n.TEXTURE_2D,De,Ue,Ke[0].width,Ke[0].height);for(let me=0,Ie=Ke.length;me<Ie;me++)Le=Ke[me],C.format!==Mi?Ee!==null?it?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Le.width,Le.height,Ee,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ue,Le.width,Le.height,0,Le.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Le.width,Le.height,Ee,ze,Le.data):t.texImage2D(n.TEXTURE_2D,me,Ue,Le.width,Le.height,0,Ee,ze,Le.data)}else if(C.isDataArrayTexture)if(it){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ue,ve.width,ve.height,ve.depth),X)if(C.layerUpdates.size>0){const me=Hh(ve.width,ve.height,C.format,C.type);for(const Ie of C.layerUpdates){const ke=ve.data.subarray(Ie*me/ve.data.BYTES_PER_ELEMENT,(Ie+1)*me/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,ve.width,ve.height,1,Ee,ze,ke)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ee,ze,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ve.width,ve.height,ve.depth,0,Ee,ze,ve.data);else if(C.isData3DTexture)it?(dt&&t.texStorage3D(n.TEXTURE_3D,De,Ue,ve.width,ve.height,ve.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ee,ze,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ve.width,ve.height,ve.depth,0,Ee,ze,ve.data);else if(C.isFramebufferTexture){if(dt)if(it)t.texStorage2D(n.TEXTURE_2D,De,Ue,ve.width,ve.height);else{let me=ve.width,Ie=ve.height;for(let ke=0;ke<De;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ue,me,Ie,0,Ee,ze,null),me>>=1,Ie>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ve.parentNode!==me){me.appendChild(ve),h.add(C),me.onpaint=Ie=>{const ke=Ie.changedElements;for(const _e of h)ke.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const ke=n.RGBA,_e=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,_e,$e,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(it&&dt){const me=Pt(Ke[0]);t.texStorage2D(n.TEXTURE_2D,De,Ue,me.width,me.height)}for(let me=0,Ie=Ke.length;me<Ie;me++)Le=Ke[me],it?X&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ee,ze,Le):t.texImage2D(n.TEXTURE_2D,me,Ue,Ee,ze,Le);C.generateMipmaps=!1}else if(it){if(dt){const me=Pt(ve);t.texStorage2D(n.TEXTURE_2D,De,Ue,me.width,me.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,ze,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Ee,ze,ve);p(C)&&v(ie),Pe.__version=Re.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function nt(F,C,J){if(C.image.length!==6)return;const ie=Te(F,C),he=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+J);const Re=i.get(he);if(he.version!==Re.__version||ie===!0){t.activeTexture(n.TEXTURE0+J);const Pe=kt.getPrimaries(kt.workingColorSpace),de=C.colorSpace===Ir?null:kt.getPrimaries(C.colorSpace),ve=C.colorSpace===Ir||Pe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ze=C.image[0]&&C.image[0].isDataTexture,Ue=[];for(let _e=0;_e<6;_e++)!Ee&&!ze?Ue[_e]=m(C.image[_e],!0,r.maxCubemapSize):Ue[_e]=ze?C.image[_e].image:C.image[_e],Ue[_e]=Ht(C,Ue[_e]);const Le=Ue[0],Ke=s.convert(C.format,C.colorSpace),it=s.convert(C.type),dt=y(C.internalFormat,Ke,it,C.normalized,C.colorSpace),X=C.isVideoTexture!==!0,De=Re.__version===void 0||ie===!0,me=he.dataReady;let Ie=b(C,Le);He(n.TEXTURE_CUBE_MAP,C);let ke;if(Ee){X&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,dt,Le.width,Le.height);for(let _e=0;_e<6;_e++){ke=Ue[_e].mipmaps;for(let $e=0;$e<ke.length;$e++){const Xe=ke[$e];C.format!==Mi?Ke!==null?X?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,Xe.width,Xe.height,Ke,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,dt,Xe.width,Xe.height,0,Xe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,Xe.width,Xe.height,Ke,it,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,dt,Xe.width,Xe.height,0,Ke,it,Xe.data)}}}else{if(ke=C.mipmaps,X&&De){ke.length>0&&Ie++;const _e=Pt(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,dt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ze){X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue[_e].width,Ue[_e].height,Ke,it,Ue[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,dt,Ue[_e].width,Ue[_e].height,0,Ke,it,Ue[_e].data);for(let $e=0;$e<ke.length;$e++){const Zt=ke[$e].image[_e].image;X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,Zt.width,Zt.height,Ke,it,Zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,dt,Zt.width,Zt.height,0,Ke,it,Zt.data)}}else{X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ke,it,Ue[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,dt,Ke,it,Ue[_e]);for(let $e=0;$e<ke.length;$e++){const Xe=ke[$e];X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,Ke,it,Xe.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,dt,Ke,it,Xe.image[_e])}}}p(C)&&v(n.TEXTURE_CUBE_MAP),Re.__version=he.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function pe(F,C,J,ie,he,Re){const Pe=s.convert(J.format,J.colorSpace),de=s.convert(J.type),ve=y(J.internalFormat,Pe,de,J.normalized,J.colorSpace),Ee=i.get(C),ze=i.get(J);if(ze.__renderTarget=C,!Ee.__hasExternalTextures){const Ue=Math.max(1,C.width>>Re),Le=Math.max(1,C.height>>Re);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Re,ve,Ue,Le,C.depth,0,Pe,de,null):t.texImage2D(he,Re,ve,Ue,Le,0,Pe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),jt(C)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,he,ze.__webglTexture,0,Kt(C)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,he,ze.__webglTexture,Re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(F,C,J){if(n.bindRenderbuffer(n.RENDERBUFFER,F),C.depthBuffer){const ie=C.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,Re=S(C.stencilBuffer,he),Pe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(C)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(C),Re,C.width,C.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(C),Re,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Re,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,F)}else{const ie=C.textures;for(let he=0;he<ie.length;he++){const Re=ie[he],Pe=s.convert(Re.format,Re.colorSpace),de=s.convert(Re.type),ve=y(Re.internalFormat,Pe,de,Re.normalized,Re.colorSpace);jt(C)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(C),ve,C.width,C.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(C),ve,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ve,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(F,C,J){const ie=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(C.depthTexture);if(he.__renderTarget=C,(!he.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ie){if(he.__webglInit===void 0&&(he.__webglInit=!0,C.depthTexture.addEventListener("dispose",T)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),He(n.TEXTURE_CUBE_MAP,C.depthTexture);const Ee=s.convert(C.depthTexture.format),ze=s.convert(C.depthTexture.type);let Ue;C.depthTexture.format===xr?Ue=n.DEPTH_COMPONENT24:C.depthTexture.format===ss&&(Ue=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ue,C.width,C.height,0,Ee,ze,null)}}else oe(C.depthTexture,0);const Re=he.__webglTexture,Pe=Kt(C),de=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ve=C.depthTexture.format===ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(C.depthTexture.format===xr)jt(C)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,de,Re,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,ve,de,Re,0);else if(C.depthTexture.format===ss)jt(C)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,de,Re,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,ve,de,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(F){const C=i.get(F),J=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const ie=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ie){const he=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),C.__depthDisposeCallback=he}C.__boundDepthTexture=ie}if(F.depthTexture&&!C.__autoAllocateDepthBuffer)if(J)for(let ie=0;ie<6;ie++)Rt(C.__webglFramebuffer[ie],F,ie);else{const ie=F.texture.mipmaps;ie&&ie.length>0?Rt(C.__webglFramebuffer[0],F,0):Rt(C.__webglFramebuffer,F,0)}else if(J){C.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[ie]),C.__webglDepthbuffer[ie]===void 0)C.__webglDepthbuffer[ie]=n.createRenderbuffer(),Ve(C.__webglDepthbuffer[ie],F,!1);else{const he=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=C.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,Re),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Re)}}else{const ie=F.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),Ve(C.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Re),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(F,C,J){const ie=i.get(F);C!==void 0&&pe(ie.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&gt(F)}function at(F){const C=F.texture,J=i.get(F),ie=i.get(C);F.addEventListener("dispose",g);const he=F.textures,Re=F.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=C.version,a.memory.textures++),Re){J.__webglFramebuffer=[];for(let de=0;de<6;de++)if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer[de]=[];for(let ve=0;ve<C.mipmaps.length;ve++)J.__webglFramebuffer[de][ve]=n.createFramebuffer()}else J.__webglFramebuffer[de]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer=[];for(let de=0;de<C.mipmaps.length;de++)J.__webglFramebuffer[de]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let de=0,ve=he.length;de<ve;de++){const Ee=i.get(he[de]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(F.samples>0&&jt(F)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const ve=he[de];J.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[de]);const Ee=s.convert(ve.format,ve.colorSpace),ze=s.convert(ve.type),Ue=y(ve.internalFormat,Ee,ze,ve.normalized,ve.colorSpace,F.isXRRenderTarget===!0),Le=Kt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ue,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,J.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Re){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),He(n.TEXTURE_CUBE_MAP,C);for(let de=0;de<6;de++)if(C.mipmaps&&C.mipmaps.length>0)for(let ve=0;ve<C.mipmaps.length;ve++)pe(J.__webglFramebuffer[de][ve],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else pe(J.__webglFramebuffer[de],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(C)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let de=0,ve=he.length;de<ve;de++){const Ee=he[de],ze=i.get(Ee);let Ue=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ue=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ue,ze.__webglTexture),He(Ue,Ee),pe(J.__webglFramebuffer,F,Ee,n.COLOR_ATTACHMENT0+de,Ue,0),p(Ee)&&v(Ue)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(de=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),He(de,C),C.mipmaps&&C.mipmaps.length>0)for(let ve=0;ve<C.mipmaps.length;ve++)pe(J.__webglFramebuffer[ve],F,C,n.COLOR_ATTACHMENT0,de,ve);else pe(J.__webglFramebuffer,F,C,n.COLOR_ATTACHMENT0,de,0);p(C)&&v(de),t.unbindTexture()}F.depthBuffer&&gt(F)}function Ze(F){const C=F.textures;for(let J=0,ie=C.length;J<ie;J++){const he=C[J];if(p(he)){const Re=w(F),Pe=i.get(he).__webglTexture;t.bindTexture(Re,Pe),v(Re),t.unbindTexture()}}}const Ct=[],cn=[];function It(F){if(F.samples>0){if(jt(F)===!1){const C=F.textures,J=F.width,ie=F.height;let he=n.COLOR_BUFFER_BIT;const Re=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(F),de=C.length>1;if(de)for(let Ee=0;Ee<C.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ve=F.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ee=0;Ee<C.length;Ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);const ze=i.get(C[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,J,ie,0,0,J,ie,he,n.NEAREST),o===!0&&(Ct.length=0,cn.length=0,Ct.push(n.COLOR_ATTACHMENT0+Ee),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Ct.push(Re),cn.push(Re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,cn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<C.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);const ze=i.get(C[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&o){const C=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Kt(F){return Math.min(r.maxSamples,F.samples)}function jt(F){const C=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function j(F){const C=a.render.frame;u.get(F)!==C&&(u.set(F,C),F.update())}function Ht(F,C){const J=F.colorSpace,ie=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==Oc&&J!==Ir&&(kt.getTransfer(J)===Jt?(ie!==Mi||he!==ti)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",J)),C}function Pt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=A,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=oe,this.setTexture2DArray=te,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Qe,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xb(n,e){function t(i,r=Ir){let s;const a=kt.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===Qd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ef)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rp)return n.BYTE;if(i===Pp)return n.SHORT;if(i===ca)return n.UNSIGNED_SHORT;if(i===Jd)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===Ei)return n.HALF_FLOAT;if(i===Ip)return n.ALPHA;if(i===Up)return n.RGB;if(i===Mi)return n.RGBA;if(i===xr)return n.DEPTH_COMPONENT;if(i===ss)return n.DEPTH_STENCIL;if(i===tf)return n.RED;if(i===nf)return n.RED_INTEGER;if(i===fs)return n.RG;if(i===rf)return n.RG_INTEGER;if(i===sf)return n.RGBA_INTEGER;if(i===uc||i===dc||i===fc||i===hc)if(a===Jt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fu||i===Ou||i===zu||i===Bu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gu||i===Vu||i===Hu||i===$u||i===Wu||i===kc||i===Xu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gu||i===Vu)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hu)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$u)return s.COMPRESSED_R11_EAC;if(i===Wu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===kc)return s.COMPRESSED_RG11_EAC;if(i===Xu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qu||i===Yu||i===Ku||i===ju||i===Zu||i===Ju||i===Qu||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qu)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yu)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ku)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ju)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zu)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ju)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ed)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===td)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nd)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===id)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rd)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sd)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===od)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ad||i===cd||i===ld)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ad)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ld)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ud||i===dd||i===Fc||i===fd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ud)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===la?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yb=`
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

}`;class Kb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wt({vertexShader:qb,fragmentShader:Yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jb extends hs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,c="local-floor",o=1,l=null,u=null,h=null,d=null,f=null,x=null;const _=typeof XRWebGLBinding<"u",m=new Kb,p={},v=t.getContextAttributes();let w=null,y=null;const S=[],b=[],T=new tt;let g=null,M=null;const E=new mi;E.viewport=new tn;const D=new mi;D.viewport=new tn;const R=[E,D],A=new ix;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ue=S[re];return ue===void 0&&(ue=new Fl,S[re]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(re){let ue=S[re];return ue===void 0&&(ue=new Fl,S[re]=ue),ue.getGripSpace()},this.getHand=function(re){let ue=S[re];return ue===void 0&&(ue=new Fl,S[re]=ue),ue.getHandSpace()};function z(re){const ue=b.indexOf(re.inputSource);if(ue===-1)return;const Ae=S[ue];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,l||a),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",oe);for(let re=0;re<S.length;re++){const ue=b[re];ue!==null&&(b[re]=null,S[re].disconnect(ue))}L=null,k=null,m.reset();for(const re in p)delete p[re];if(e.setRenderTarget(w),f=null,d=null,h=null,r=null,y=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(T.width,T.height,!1),M!==null){const re=M.camera;re.fov=M.fov,re.zoom=M.zoom,re.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){c=re,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,nt=null,pe=null;v.depth&&(pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=v.stencil?ss:xr,nt=v.stencil?la:Hi);const Ve={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fi(d.textureWidth,d.textureHeight,{format:Mi,type:ti,depthTexture:new oo(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fi(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await r.requestReferenceSpace(c),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(re){for(let ue=0;ue<re.removed.length;ue++){const Ae=re.removed[ue],nt=b.indexOf(Ae);nt>=0&&(b[nt]=null,S[nt].disconnect(Ae))}for(let ue=0;ue<re.added.length;ue++){const Ae=re.added[ue];let nt=b.indexOf(Ae);if(nt===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=b.length){b.push(Ae),nt=Ve;break}else if(b[Ve]===null){b[Ve]=Ae,nt=Ve;break}if(nt===-1)break}const pe=S[nt];pe&&pe.connect(Ae)}}const te=new U,ce=new U;function le(re,ue,Ae){te.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Ae.matrixWorld);const nt=te.distanceTo(ce),pe=ue.projectionMatrix.elements,Ve=Ae.projectionMatrix.elements,Rt=pe[14]/(pe[10]-1),gt=pe[14]/(pe[10]+1),Qe=(pe[9]+1)/pe[5],at=(pe[9]-1)/pe[5],Ze=(pe[8]-1)/pe[0],Ct=(Ve[8]+1)/Ve[0],cn=Rt*Ze,It=Rt*Ct,Kt=nt/(-Ze+Ct),jt=Kt*-Ze;if(ue.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(jt),re.translateZ(Kt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),pe[10]===-1)re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const j=Rt+Kt,Ht=gt+Kt,Pt=cn-jt,F=It+(nt-jt),C=Qe*gt/Ht*j,J=at*gt/Ht*j;re.projectionMatrix.makePerspective(Pt,F,C,J,j,Ht),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Be(re,ue){ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ue=re.near,Ae=re.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),A.near=D.near=E.near=ue,A.far=D.far=E.far=Ae,(L!==A.near||k!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,k=A.far),A.layers.mask=re.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;const nt=re.parent,pe=A.cameras;Be(A,nt);for(let Ve=0;Ve<pe.length;Ve++)Be(pe[Ve],nt);pe.length===2?le(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),M===null&&re.isPerspectiveCamera&&(M={camera:re,fov:re.fov,zoom:re.zoom}),we(re,A,nt)};function we(re,ue,Ae){Ae===null?re.matrix.copy(ue.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=da*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return o},this.setFoveation=function(re){o=re,d!==null&&(d.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)},this.getCameraTexture=function(re){return p[re]};let je=null;function He(re,ue){if(u=ue.getViewerPose(l||a),x=ue,u!==null){const Ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let nt=!1;Ae.length!==A.cameras.length&&(A.cameras.length=0,nt=!0);for(let gt=0;gt<Ae.length;gt++){const Qe=Ae[gt];let at=null;if(f!==null)at=f.getViewport(Qe);else{const Ct=h.getViewSubImage(d,Qe);at=Ct.viewport,gt===0&&(e.setRenderTargetTextures(y,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(y))}let Ze=R[gt];Ze===void 0&&(Ze=new mi,Ze.layers.enable(gt),Ze.viewport=new tn,R[gt]=Ze),Ze.matrix.fromArray(Qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(at.x,at.y,at.width,at.height),gt===0&&(A.matrix.copy(Ze.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),nt===!0&&A.cameras.push(Ze)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const gt=h.getDepthInformation(Ae[0]);gt&&gt.isValid&&gt.texture&&m.init(gt,r.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let gt=0;gt<Ae.length;gt++){const Qe=Ae[gt].camera;if(Qe){let at=p[Qe];at||(at=new $p,p[Qe]=at);const Ze=h.getCameraImage(Qe);at.sourceTexture=Ze}}}}for(let Ae=0;Ae<S.length;Ae++){const nt=b[Ae],pe=S[Ae];nt!==null&&pe!==void 0&&pe.update(nt,ue,l||a)}je&&je(re,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}const Te=new jp;Te.setAnimationLoop(He),this.setAnimationLoop=function(re){je=re},this.dispose=function(){}}}const Zb=new Ft,nm=new ht;nm.set(-1,0,0,0,1,0,0,0,1);function Jb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?o(m,p,v,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ii&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ii&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,v,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ii&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qb(n,e,t,i){let r={},s={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(y,S){const b=S.program;i.uniformBlockBinding(y,b)}function l(y,S){let b=r[y.id];b===void 0&&(m(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",v));const T=S.program;i.updateUBOMapping(y,T);const g=e.render.frame;s[y.id]!==g&&(d(y),s[y.id]=g)}function u(y){const S=h();y.__bindingPointIndex=S;const b=n.createBuffer(),T=y.__size,g=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function h(){for(let y=0;y<c;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=r[y.id],b=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let g=0,M=b.length;g<M;g++){const E=b[g];if(Array.isArray(E))for(let D=0,R=E.length;D<R;D++)f(E[D],g,D,T);else f(E,g,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,S,b,T){if(_(y,S,b,T)===!0){const g=y.__offset,M=y.value;if(Array.isArray(M)){let E=0;for(let D=0;D<M.length;D++){const R=M[D],A=p(R);x(R,y.__data,E),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(E+=A.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,y.__data)}}function x(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function _(y,S,b,T){const g=y.value,M=S+"_"+b;if(T[M]===void 0)return typeof g=="number"||typeof g=="boolean"?T[M]=g:ArrayBuffer.isView(g)?T[M]=g.slice():T[M]=g.clone(),!0;{const E=T[M];if(typeof g=="number"||typeof g=="boolean"){if(E!==g)return T[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(E.equals(g)===!1)return E.copy(g),!0}}return!1}function m(y){const S=y.uniforms;let b=0;const T=16;for(let M=0,E=S.length;M<E;M++){const D=Array.isArray(S[M])?S[M]:[S[M]];for(let R=0,A=D.length;R<A;R++){const L=D[R],k=Array.isArray(L.value)?L.value:[L.value];for(let z=0,V=k.length;z<V;z++){const oe=k[z],te=p(oe),ce=b%T,le=ce%te.boundary,Be=ce+le;b+=le,Be!==0&&T-Be<te.storage&&(b+=T-Be),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=te.storage}}}const g=b%T;return g>0&&(b+=T-g),y.__size=b,y.__cache={},this}function p(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):st("WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){const S=y.target;S.removeEventListener("dispose",v);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function w(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:o,update:l,dispose:w}}const e2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function t2(){return Xi===null&&(Xi=new df(e2,16,16,fs,Ei),Xi.name="DFG_LUT",Xi.minFilter=xn,Xi.magFilter=xn,Xi.wrapS=ji,Xi.wrapT=ji,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class n2{constructor(e={}){const{canvas:t=n1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ti}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const _=f,m=new Set([sf,rf,nf]),p=new Set([ti,Hi,ca,la,Qd,ef]),v=new Uint32Array(4),w=new Int32Array(4),y=new U;let S=null,b=null;const T=[],g=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let D=!1,R=null,A=null,L=null,k=null;this._outputColorSpace=Xn;let z=0,V=0,oe=null,te=-1,ce=null;const le=new tn,Be=new tn;let we=null;const je=new ot(0);let He=0,Te=t.width,re=t.height,ue=1,Ae=null,nt=null;const pe=new tn(0,0,Te,re),Ve=new tn(0,0,Te,re);let Rt=!1;const gt=new ff;let Qe=!1,at=!1;const Ze=new Ft,Ct=new U,cn=new tn,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function jt(){return oe===null?ue:1}let j=i;function Ht(P,Y){return t.getContext(P,Y)}let Pt,F,C,J,ie,he,Re,Pe,de,ve,Ee,ze,Ue,Le,Ke,it,dt,X,De,me,Ie,ke,_e;try{const P={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zd}`),t.addEventListener("webglcontextlost",Zt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",kn,!1),j===null){const Y="webgl2";if(j=Ht(Y,P),j===null)throw Ht(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(P){throw t.removeEventListener("webglcontextlost",Zt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),Bt("WebGLRenderer: "+P.message),P}function $e(){Pt=new tM(j),Pt.init(),Ie=new Xb(j,Pt),F=new Wy(j,Pt,e,Ie),C=new $b(j,Pt),F.reversedDepthBuffer&&d&&C.buffers.depth.setReversed(!0),A=j.createFramebuffer(),L=j.createFramebuffer(),k=j.createFramebuffer(),J=new rM(j),ie=new Pb,he=new Wb(j,Pt,C,ie,F,Ie,J),Re=new eM(E),Pe=new ox(j),ke=new Hy(j,Pe),de=new nM(j,Pe,J,ke),ve=new oM(j,de,Pe,ke,J),X=new sM(j,F,he),Ke=new Xy(ie),Ee=new Rb(E,Re,Pt,F,ke,Ke),ze=new Jb(E,ie),Ue=new Db,Le=new Ob(Pt),dt=new Vy(E,Re,C,ve,x,o),it=new Hb(E,ve,F),_e=new Qb(j,J,F,C),De=new $y(j,Pt,J),me=new iM(j,Pt,J),J.programs=Ee.programs,E.capabilities=F,E.extensions=Pt,E.properties=ie,E.renderLists=Ue,E.shadowMap=it,E.state=C,E.info=J}_!==ti&&(M=new cM(_,t.width,t.height,c,r,s));const Xe=new jb(E,j);this.xr=Xe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=Pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(P){P!==void 0&&(ue=P,this.setSize(Te,re,!1))},this.getSize=function(P){return P.set(Te,re)},this.setSize=function(P,Y,se=!0){if(Xe.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=P,re=Y,t.width=Math.floor(P*ue),t.height=Math.floor(Y*ue),se===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(Te*ue,re*ue).floor()},this.setDrawingBufferSize=function(P,Y,se){Te=P,re=Y,ue=se,t.width=Math.floor(P*se),t.height=Math.floor(Y*se),this.setViewport(0,0,P,Y)},this.setEffects=function(P){if(_===ti){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Y=0;Y<P.length;Y++)if(P[Y].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(le)},this.getViewport=function(P){return P.copy(pe)},this.setViewport=function(P,Y,se,Q){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,Y,se,Q),C.viewport(le.copy(pe).multiplyScalar(ue).round())},this.getScissor=function(P){return P.copy(Ve)},this.setScissor=function(P,Y,se,Q){P.isVector4?Ve.set(P.x,P.y,P.z,P.w):Ve.set(P,Y,se,Q),C.scissor(Be.copy(Ve).multiplyScalar(ue).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(P){C.setScissorTest(Rt=P)},this.setOpaqueSort=function(P){Ae=P},this.setTransparentSort=function(P){nt=P},this.getClearColor=function(P){return P.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,se=!0){let Q=0;if(P){let ee=!1;if(oe!==null){const O=oe.texture.format;ee=m.has(O)}if(ee){const O=oe.texture.type,H=p.has(O),K=dt.getClearColor(),$=dt.getClearAlpha(),q=K.r,W=K.g,ae=K.b;H?(v[0]=q,v[1]=W,v[2]=ae,v[3]=$,j.clearBufferuiv(j.COLOR,0,v)):(w[0]=q,w[1]=W,w[2]=ae,w[3]=$,j.clearBufferiv(j.COLOR,0,w))}else Q|=j.COLOR_BUFFER_BIT}Y&&(Q|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&j.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),R=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Zt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),dt.dispose(),Ue.dispose(),Le.dispose(),ie.dispose(),Re.dispose(),ve.dispose(),ke.dispose(),_e.dispose(),Ee.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",_s),Xe.removeEventListener("sessionend",ya),tr.stop()};function Zt(P){P.preventDefault(),Gc("WebGLRenderer: Context Lost."),D=!0}function Lt(){Gc("WebGLRenderer: Context Restored."),D=!1;const P=J.autoReset,Y=it.enabled,se=it.autoUpdate,Q=it.needsUpdate,ee=it.type;$e(),J.autoReset=P,it.enabled=Y,it.autoUpdate=se,it.needsUpdate=Q,it.type=ee}function kn(P){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Zn(P){const Y=P.target;Y.removeEventListener("dispose",Zn),_l(Y)}function _l(P){yl(P),ie.remove(P)}function yl(P){const Y=ie.get(P).programs;Y!==void 0&&(Y.forEach(function(se){Ee.releaseProgram(se)}),P.isShaderMaterial&&Ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,se,Q,ee,O){Y===null&&(Y=It);const H=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,K=Sl(P,Y,se,Q,ee);C.setMaterial(Q,H);let $=se.index,q=1;if(Q.wireframe===!0){if($=de.getWireframeAttribute(se),$===void 0)return;q=2}const W=se.drawRange,ae=se.attributes.position;let ne=W.start*q,ye=(W.start+W.count)*q;O!==null&&(ne=Math.max(ne,O.start*q),ye=Math.min(ye,(O.start+O.count)*q)),$!==null?(ne=Math.max(ne,0),ye=Math.min(ye,$.count)):ae!=null&&(ne=Math.max(ne,0),ye=Math.min(ye,ae.count));const Ce=ye-ne;if(Ce<0||Ce===1/0)return;ke.setup(ee,Q,K,se,$);let Ne,et=De;if($!==null&&(Ne=Pe.get($),et=me,et.setIndex(Ne)),ee.isMesh)Q.wireframe===!0?(C.setLineWidth(Q.wireframeLinewidth*jt()),et.setMode(j.LINES)):et.setMode(j.TRIANGLES);else if(ee.isLine){let ct=Q.linewidth;ct===void 0&&(ct=1),C.setLineWidth(ct*jt()),ee.isLineSegments?et.setMode(j.LINES):ee.isLineLoop?et.setMode(j.LINE_LOOP):et.setMode(j.LINE_STRIP)}else ee.isPoints?et.setMode(j.POINTS):ee.isSprite&&et.setMode(j.TRIANGLES);if(ee.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))et.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const ct=ee._multiDrawStarts,Me=ee._multiDrawCounts,vt=ee._multiDrawCount,Ye=$?Pe.get($).bytesPerElement:1,xt=ie.get(Q).currentProgram.getUniforms();for(let Tt=0;Tt<vt;Tt++)xt.setValue(j,"_gl_DrawID",Tt),et.render(ct[Tt]/Ye,Me[Tt])}else if(ee.isInstancedMesh)et.renderInstances(ne,Ce,ee.count);else if(se.isInstancedBufferGeometry){const ct=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Me=Math.min(se.instanceCount,ct);et.renderInstances(ne,Ce,Me)}else et.render(ne,Ce)};function Wr(P,Y,se,Q){R!==null&&P.isNodeMaterial&&R.setObject(Q,P),Qe===!0&&Ke.setState(P,se,!1),P.transparent===!0&&P.side===ci&&P.forceSinglePass===!1?(P.side=ii,P.needsUpdate=!0,bs(P,Y,Q),P.side=us,P.needsUpdate=!0,bs(P,Y,Q),P.side=ci):bs(P,Y,Q)}this.compile=function(P,Y,se=null){se===null&&(se=P),R!==null&&R.renderStart(P,Y,se),b=Le.get(se),b.init(Y),g.push(b),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),P!==se&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),b.setupLights(),R!==null&&R.updateLights(b.state.lightsArray),at=this.localClippingEnabled,Qe=Ke.init(this.clippingPlanes,at),Qe===!0&&Ke.setGlobalState(this.clippingPlanes,Y),R!==null&&it.render(b.state.shadowsArray,se,Y);const Q=new Set;return P.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const O=ee.material;if(O)if(Array.isArray(O))for(let H=0;H<O.length;H++){const K=O[H];Wr(K,se,Y,ee),Q.add(K)}else Wr(O,se,Y,ee),Q.add(O)}),b=g.pop(),R!==null&&R.renderEnd(),Q},this.compileAsync=function(P,Y,se=null){const Q=this.compile(P,Y,se);return new Promise(ee=>{function O(){if(Q.forEach(function(H){const $=ie.get(H).currentProgram;($===void 0||$.isReady())&&Q.delete(H)}),Q.size===0){ee(P);return}setTimeout(O,10)}Pt.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Xr=null;function Ml(P){Xr&&Xr(P)}function _s(){tr.stop()}function ya(){tr.start()}const tr=new jp;tr.setAnimationLoop(Ml),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(P){Xr=P,Xe.setAnimationLoop(P),P===null?tr.stop():tr.start()},Xe.addEventListener("sessionstart",_s),Xe.addEventListener("sessionend",ya),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;R!==null&&R.renderStart(P,Y);const se=Xe.enabled===!0&&Xe.isPresenting===!0,Q=M!==null&&(oe===null||se)&&M.begin(E,oe);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(Y),Y=Xe.getCamera()),P.isScene===!0&&P.onBeforeRender(E,P,Y,oe),b=Le.get(P,g.length),b.init(Y),b.state.textureUnits=he.getTextureUnits(),g.push(b),Ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),gt.setFromProjectionMatrix(Ze,Zi,Y.reversedDepth),at=this.localClippingEnabled,Qe=Ke.init(this.clippingPlanes,at),S=Ue.get(P,T.length),S.init(),T.push(S),Xe.enabled===!0&&Xe.isPresenting===!0){const H=E.xr.getDepthSensingMesh();H!==null&&ys(H,Y,-1/0,E.sortObjects)}ys(P,Y,0,E.sortObjects),S.finish(),R!==null&&R.updateLights(b.state.lightsArray),E.sortObjects===!0&&S.sort(Ae,nt),Kt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Kt&&dt.addToRenderList(S,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ke.beginShadows();const ee=b.state.shadowsArray;if(it.render(ee,P,Y),Qe===!0&&Ke.endShadows(),(Q&&M.hasRenderPass())===!1){const H=S.opaque,K=S.transmissive;if(b.setupLights(),Y.isArrayCamera){const $=Y.cameras;if(K.length>0)for(let q=0,W=$.length;q<W;q++){const ae=$[q];Ma(H,K,P,ae)}Kt&&dt.render(P);for(let q=0,W=$.length;q<W;q++){const ae=$[q];go(S,P,ae,ae.viewport)}}else K.length>0&&Ma(H,K,P,Y),Kt&&dt.render(P),go(S,P,Y)}oe!==null&&V===0&&(he.updateMultisampleRenderTarget(oe),he.updateRenderTargetMipmap(oe)),Q&&M.end(E),P.isScene===!0&&P.onAfterRender(E,P,Y),ke.resetDefaultState(),te=-1,ce=null,g.pop(),g.length>0?(b=g[g.length-1],he.setTextureUnits(b.state.textureUnits),Qe===!0&&Ke.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,R!==null&&R.renderEnd()};function ys(P,Y,se,Q){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLightProbeGrid)b.pushLightProbeGrid(P);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(gt)){Q&&cn.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ze);const H=ve.update(P),K=P.material;K.visible&&S.push(P,H,K,se,cn.z,null,Y)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(gt))){const H=ve.update(P),K=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),cn.copy(P.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),cn.copy(H.boundingSphere.center)),cn.applyMatrix4(P.matrixWorld).applyMatrix4(Ze)),Array.isArray(K)){const $=H.groups;for(let q=0,W=$.length;q<W;q++){const ae=$[q],ne=K[ae.materialIndex];ne&&ne.visible&&S.push(P,H,ne,se,cn.z,ae,Y)}}else K.visible&&S.push(P,H,K,se,cn.z,null,Y)}}const O=P.children;for(let H=0,K=O.length;H<K;H++)ys(O[H],Y,se,Q)}function go(P,Y,se,Q){const{opaque:ee,transmissive:O,transparent:H}=P;b.setupLightsView(se),Qe===!0&&Ke.setGlobalState(E.clippingPlanes,se),Q&&C.viewport(le.copy(Q)),ee.length>0&&Ms(ee,Y,se),O.length>0&&Ms(O,Y,se),H.length>0&&Ms(H,Y,se),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Ma(P,Y,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Q.id]===void 0){const ne=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Q.id]=new fi(1,1,{generateMipmaps:!0,type:ne?Ei:ti,minFilter:Nr,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const O=b.state.transmissionRenderTarget[Q.id],H=Q.viewport||le;O.setSize(H.z*E.transmissionResolutionScale,H.w*E.transmissionResolutionScale);const K=E.getRenderTarget(),$=E.getActiveCubeFace(),q=E.getActiveMipmapLevel();E.setRenderTarget(O),E.getClearColor(je),He=E.getClearAlpha(),He<1&&E.setClearColor(16777215,.5),E.clear(),Kt&&dt.render(se);const W=E.toneMapping;E.toneMapping=Qi;const ae=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),b.setupLightsView(Q),Qe===!0&&Ke.setGlobalState(E.clippingPlanes,Q),Ms(P,se,Q),he.updateMultisampleRenderTarget(O),he.updateRenderTargetMipmap(O),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let ye=0,Ce=Y.length;ye<Ce;ye++){const Ne=Y[ye],{object:et,geometry:ct,material:Me,group:vt}=Ne;if(Me.side===ci&&et.layers.test(Q.layers)){const Ye=Me.side;Me.side=ii,Me.needsUpdate=!0,ba(et,se,Q,ct,Me,vt),Me.side=Ye,Me.needsUpdate=!0,ne=!0}}ne===!0&&(he.updateMultisampleRenderTarget(O),he.updateRenderTargetMipmap(O))}E.setRenderTarget(K,$,q),E.setClearColor(je,He),ae!==void 0&&(Q.viewport=ae),E.toneMapping=W}function Ms(P,Y,se){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,O=P.length;ee<O;ee++){const H=P[ee],{object:K,geometry:$,group:q}=H;let W=H.material;W.allowOverride===!0&&Q!==null&&(W=Q),K.layers.test(se.layers)&&ba(K,Y,se,$,W,q)}}function ba(P,Y,se,Q,ee,O){R!==null&&ee.isNodeMaterial&&R.setObject(P,ee),P.onBeforeRender(E,Y,se,Q,ee,O),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(E,Y,se,Q,P,O),ee.transparent===!0&&ee.side===ci&&ee.forceSinglePass===!1?(ee.side=ii,ee.needsUpdate=!0,E.renderBufferDirect(se,Y,Q,ee,P,O),ee.side=us,ee.needsUpdate=!0,E.renderBufferDirect(se,Y,Q,ee,P,O),ee.side=ci):E.renderBufferDirect(se,Y,Q,ee,P,O),P.onAfterRender(E,Y,se,Q,ee,O)}function bs(P,Y,se){Y.isScene!==!0&&(Y=It);const Q=ie.get(P),ee=b.state.lights,O=b.state.shadowsArray,H=ee.state.version,K=Ee.getParameters(P,ee.state,O,Y,se,b.state.lightProbeGridArray),$=Ee.getProgramCacheKey(K);let q=Q.programs;Q.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;const W=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Q.envMap=Re.get(P.envMap||Q.environment,W),Q.envMapRotation=Q.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,q===void 0&&(P.addEventListener("dispose",Zn),q=new Map,Q.programs=q);let ae=q.get($);if(ae!==void 0){if(Q.currentProgram===ae&&Q.lightsStateVersion===H)return xo(P,K),ae}else K.uniforms=Ee.getUniforms(P),R!==null&&P.isNodeMaterial&&R.build(P,se,K),P.onBeforeCompile(K,E),ae=Ee.acquireProgram(K,$),q.set($,ae),Q.uniforms=K.uniforms;const ne=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ne.clippingPlanes=Ke.uniform),xo(P,K),Q.needsLights=Ss(P),Q.lightsStateVersion=H,Q.needsLights&&(ne.ambientLightColor.value=ee.state.ambient,ne.lightProbe.value=ee.state.probe,ne.sunLights.value=ee.state.sun,ne.sunLightShadows.value=ee.state.sunShadow,ne.directionalLights.value=ee.state.directional,ne.directionalLightShadows.value=ee.state.directionalShadow,ne.spotLights.value=ee.state.spot,ne.spotLightShadows.value=ee.state.spotShadow,ne.rectAreaLights.value=ee.state.rectArea,ne.ltc_1.value=ee.state.rectAreaLTC1,ne.ltc_2.value=ee.state.rectAreaLTC2,ne.pointLights.value=ee.state.point,ne.pointLightShadows.value=ee.state.pointShadow,ne.hemisphereLights.value=ee.state.hemi,ne.sunShadowMatrix.value=ee.state.sunShadowMatrix,ne.sunShadowCascade.value=ee.state.sunShadowCascade,ne.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ne.spotLightMatrix.value=ee.state.spotLightMatrix,ne.spotLightMap.value=ee.state.spotLightMap,ne.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=b.state.lightProbeGridArray.length>0,Q.currentProgram=ae,Q.uniformsList=null,ae}function vo(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=mc.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function xo(P,Y){const se=ie.get(P);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function bl(P,Y){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;y.setFromMatrixPosition(Y.matrixWorld);for(let se=0,Q=P.length;se<Q;se++){const ee=P[se];if(ee.texture!==null&&ee.boundingBox.containsPoint(y))return ee}return null}function Sl(P,Y,se,Q,ee){Y.isScene!==!0&&(Y=It),he.resetTextureUnits();const O=Y.fog,H=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,K=oe===null?E.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:kt.workingColorSpace,$=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,q=Re.get(Q.envMap||H,$),W=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ae=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ne=!!se.morphAttributes.position,ye=!!se.morphAttributes.normal,Ce=!!se.morphAttributes.color;let Ne=Qi;Q.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ne=E.toneMapping);const et=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ct=et!==void 0?et.length:0,Me=ie.get(Q),vt=b.state.lights;if(Qe===!0&&(at===!0||P!==ce)){const Ot=P===ce&&Q.id===te;Ke.setState(Q,P,Ot)}let Ye=!1;Q.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==vt.state.version||Me.outputColorSpace!==K||ee.isBatchedMesh&&Me.batching===!1||!ee.isBatchedMesh&&Me.batching===!0||ee.isBatchedMesh&&Me.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Me.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Me.instancing===!1||!ee.isInstancedMesh&&Me.instancing===!0||ee.isSkinnedMesh&&Me.skinning===!1||!ee.isSkinnedMesh&&Me.skinning===!0||ee.isInstancedMesh&&Me.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Me.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Me.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Me.instancingMorph===!1&&ee.morphTexture!==null||Me.envMap!==q||Q.fog===!0&&Me.fog!==O||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ke.numPlanes||Me.numIntersection!==Ke.numIntersection)||Me.vertexAlphas!==W||Me.vertexTangents!==ae||Me.morphTargets!==ne||Me.morphNormals!==ye||Me.morphColors!==Ce||Me.toneMapping!==Ne||Me.morphTargetsCount!==ct||!!Me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,Me.__version=Q.version);let xt=Me.currentProgram;Ye===!0&&(xt=bs(Q,Y,ee),R&&Q.isNodeMaterial&&R.onUpdateProgram(Q,xt,Me));let Tt=!1,Ut=!1,Yt=!1;const St=xt.getUniforms(),nn=Me.uniforms;if(C.useProgram(xt.program)&&(Tt=!0,Ut=!0,Yt=!0),Q.id!==te&&(te=Q.id,Ut=!0),Me.needsLights){const Ot=bl(b.state.lightProbeGridArray,ee);Me.lightProbeGrid!==Ot&&(Me.lightProbeGrid=Ot,Ut=!0)}if(Tt||ce!==P){C.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),St.setValue(j,"projectionMatrix",P.projectionMatrix),St.setValue(j,"viewMatrix",P.matrixWorldInverse);const vi=St.map.cameraPosition;vi!==void 0&&vi.setValue(j,Ct.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&St.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&St.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),ce!==P&&(ce=P,Ut=!0,Yt=!0)}if(Me.needsLights&&(vt.state.sunShadowMap.length>0&&St.setValue(j,"sunShadowMap",vt.state.sunShadowMap,he),vt.state.directionalShadowMap.length>0&&St.setValue(j,"directionalShadowMap",vt.state.directionalShadowMap,he),vt.state.spotShadowMap.length>0&&St.setValue(j,"spotShadowMap",vt.state.spotShadowMap,he),vt.state.pointShadowMap.length>0&&St.setValue(j,"pointShadowMap",vt.state.pointShadowMap,he)),ee.isSkinnedMesh){St.setOptional(j,ee,"bindMatrix"),St.setOptional(j,ee,"bindMatrixInverse");const Ot=ee.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),St.setValue(j,"boneTexture",Ot.boneTexture,he))}ee.isBatchedMesh&&(St.setOptional(j,ee,"batchingTexture"),St.setValue(j,"batchingTexture",ee._matricesTexture,he),St.setOptional(j,ee,"batchingIdTexture"),St.setValue(j,"batchingIdTexture",ee._indirectTexture,he),St.setOptional(j,ee,"batchingColorTexture"),ee._colorsTexture!==null&&St.setValue(j,"batchingColorTexture",ee._colorsTexture,he));const Hn=se.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&X.update(ee,se,xt),(Ut||Me.receiveShadow!==ee.receiveShadow)&&(Me.receiveShadow=ee.receiveShadow,St.setValue(j,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(nn.envMapIntensity.value=Y.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=t2()),Ut){if(St.setValue(j,"toneMappingExposure",E.toneMappingExposure),Me.needsLights&&wl(nn,Yt),O&&Q.fog===!0&&ze.refreshFogUniforms(nn,O),ze.refreshMaterialUniforms(nn,Q,ue,re,b.state.transmissionRenderTarget[P.id]),Me.needsLights&&Me.lightProbeGrid){const Ot=Me.lightProbeGrid;nn.probesSH.value=Ot.texture,nn.probesMin.value.copy(Ot.boundingBox.min),nn.probesMax.value.copy(Ot.boundingBox.max),nn.probesResolution.value.copy(Ot.resolution)}mc.upload(j,vo(Me),nn,he)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(mc.upload(j,vo(Me),nn,he),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&St.setValue(j,"center",ee.center),St.setValue(j,"modelViewMatrix",ee.modelViewMatrix),St.setValue(j,"normalMatrix",ee.normalMatrix),St.setValue(j,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){const Ot=Q.uniformsGroups;for(let vi=0,nr=Ot.length;vi<nr;vi++){const N=Ot[vi];_e.update(N,xt),_e.bind(N,xt)}}return xt}function wl(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.sunLights.needsUpdate=Y,P.sunLightShadows.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Ss(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(P,Y,se){const Q=ie.get(P);Q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ie.get(P.texture).__webglTexture=Y,ie.get(P.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){const se=ie.get(P);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,se=0){oe=P,z=Y,V=se;let Q=null,ee=!1,O=!1;if(P){const K=ie.get(P);if(K.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(j.FRAMEBUFFER,K.__webglFramebuffer),le.copy(P.viewport),Be.copy(P.scissor),we=P.scissorTest,C.viewport(le),C.scissor(Be),C.setScissorTest(we),te=-1;return}else if(K.__webglFramebuffer===void 0)he.setupRenderTarget(P);else if(K.__hasExternalTextures)he.rebindTextures(P,ie.get(P.texture).__webglTexture,ie.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const W=P.depthTexture;if(K.__boundDepthTexture!==W){if(W!==null&&ie.has(W)&&(P.width!==W.image.width||P.height!==W.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(P)}}const $=P.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(O=!0);const q=ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(q[Y])?Q=q[Y][se]:Q=q[Y],ee=!0):P.samples>0&&he.useMultisampledRTT(P)===!1?Q=ie.get(P).__webglMultisampledFramebuffer:Array.isArray(q)?Q=q[se]:Q=q,le.copy(P.viewport),Be.copy(P.scissor),we=P.scissorTest}else le.copy(pe).multiplyScalar(ue).floor(),Be.copy(Ve).multiplyScalar(ue).floor(),we=Rt;if(se!==0&&(Q=A),C.bindFramebuffer(j.FRAMEBUFFER,Q)&&C.drawBuffers(P,Q),C.viewport(le),C.scissor(Be),C.setScissorTest(we),ee){const K=ie.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K.__webglTexture,se)}else if(O){const K=Y;for(let $=0;$<P.textures.length;$++){const q=ie.get(P.textures[$]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$,q.__webglTexture,se,K)}}else if(P!==null&&se!==0){const K=ie.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,K.__webglTexture,se)}te=-1};function ws(P){const Y=ie.get(P);return(Y.__readFormat!==P.format||Y.__readType!==P.type)&&(Y.__readFormat=P.format,Y.__readType=P.type,Y.__formatReadable=F.textureFormatReadable(P.format),Y.__typeReadable=F.textureTypeReadable(P.type)),Y}this.readRenderTargetPixels=function(P,Y,se,Q,ee,O,H,K=0){if(!(P&&P.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&H!==void 0&&($=$[H]),$){C.bindFramebuffer(j.FRAMEBUFFER,$);try{const q=P.textures[K],W=q.format,ae=q.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+K);const ne=ws(q);if(ne.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ne.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-Q&&se>=0&&se<=P.height-ee&&j.readPixels(Y,se,Q,ee,Ie.convert(W),Ie.convert(ae),O)}finally{const q=oe!==null?ie.get(oe).__webglFramebuffer:null;C.bindFramebuffer(j.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(P,Y,se,Q,ee,O,H,K=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&H!==void 0&&($=$[H]),$)if(Y>=0&&Y<=P.width-Q&&se>=0&&se<=P.height-ee){C.bindFramebuffer(j.FRAMEBUFFER,$);const q=P.textures[K],W=q.format,ae=q.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+K);const ne=ws(q);if(ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ye),j.bufferData(j.PIXEL_PACK_BUFFER,O.byteLength,j.STREAM_READ),j.readPixels(Y,se,Q,ee,Ie.convert(W),Ie.convert(ae),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const Ce=oe!==null?ie.get(oe).__webglFramebuffer:null;C.bindFramebuffer(j.FRAMEBUFFER,Ce);const Ne=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await i1(j,Ne,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ye),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,O),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(ye),j.deleteSync(Ne),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,se=0){const Q=Math.pow(2,-se),ee=Math.floor(P.image.width*Q),O=Math.floor(P.image.height*Q),H=Y!==null?Y.x:0,K=Y!==null?Y.y:0;he.setTexture2D(P,0),j.copyTexSubImage2D(j.TEXTURE_2D,se,0,0,H,K,ee,O),C.unbindTexture()},this.copyTextureToTexture=function(P,Y,se=null,Q=null,ee=0,O=0){let H,K,$,q,W,ae,ne,ye,Ce;const Ne=P.isCompressedTexture?P.mipmaps[O]:P.image;if(se!==null)H=se.max.x-se.min.x,K=se.max.y-se.min.y,$=se.isBox3?se.max.z-se.min.z:1,q=se.min.x,W=se.min.y,ae=se.isBox3?se.min.z:0;else{const nn=Math.pow(2,-ee);H=Math.floor(Ne.width*nn),K=Math.floor(Ne.height*nn),P.isDataArrayTexture?$=Ne.depth:P.isData3DTexture?$=Math.floor(Ne.depth*nn):$=1,q=0,W=0,ae=0}Q!==null?(ne=Q.x,ye=Q.y,Ce=Q.z):(ne=0,ye=0,Ce=0);const et=Ie.convert(Y.format),ct=Ie.convert(Y.type);let Me;Y.isData3DTexture?(he.setTexture3D(Y,0),Me=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(he.setTexture2DArray(Y,0),Me=j.TEXTURE_2D_ARRAY):(he.setTexture2D(Y,0),Me=j.TEXTURE_2D),C.activeTexture(j.TEXTURE0),C.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),C.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),C.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=C.getParameter(j.UNPACK_ROW_LENGTH),Ye=C.getParameter(j.UNPACK_IMAGE_HEIGHT),xt=C.getParameter(j.UNPACK_SKIP_PIXELS),Tt=C.getParameter(j.UNPACK_SKIP_ROWS),Ut=C.getParameter(j.UNPACK_SKIP_IMAGES);C.pixelStorei(j.UNPACK_ROW_LENGTH,Ne.width),C.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ne.height),C.pixelStorei(j.UNPACK_SKIP_PIXELS,q),C.pixelStorei(j.UNPACK_SKIP_ROWS,W),C.pixelStorei(j.UNPACK_SKIP_IMAGES,ae);const Yt=P.isDataArrayTexture||P.isData3DTexture,St=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){const nn=ie.get(P),Hn=ie.get(Y),Ot=ie.get(nn.__renderTarget),vi=ie.get(Hn.__renderTarget);C.bindFramebuffer(j.READ_FRAMEBUFFER,Ot.__webglFramebuffer),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let nr=0;nr<$;nr++)Yt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ie.get(P).__webglTexture,ee,ae+nr),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ie.get(Y).__webglTexture,O,Ce+nr)),j.blitFramebuffer(q,W,H,K,ne,ye,H,K,j.DEPTH_BUFFER_BIT,j.NEAREST);C.bindFramebuffer(j.READ_FRAMEBUFFER,null),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ee!==0||P.isRenderTargetTexture||ie.has(P)){const nn=ie.get(P),Hn=ie.get(Y);C.bindFramebuffer(j.READ_FRAMEBUFFER,L),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,k);for(let Ot=0;Ot<$;Ot++)Yt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,nn.__webglTexture,ee,ae+Ot):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,nn.__webglTexture,ee),St?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Hn.__webglTexture,O,Ce+Ot):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Hn.__webglTexture,O),ee!==0?j.blitFramebuffer(q,W,H,K,ne,ye,H,K,j.COLOR_BUFFER_BIT,j.NEAREST):St?j.copyTexSubImage3D(Me,O,ne,ye,Ce+Ot,q,W,H,K):j.copyTexSubImage2D(Me,O,ne,ye,q,W,H,K);C.bindFramebuffer(j.READ_FRAMEBUFFER,null),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else St?P.isDataTexture||P.isData3DTexture?j.texSubImage3D(Me,O,ne,ye,Ce,H,K,$,et,ct,Ne.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Me,O,ne,ye,Ce,H,K,$,et,Ne.data):j.texSubImage3D(Me,O,ne,ye,Ce,H,K,$,et,ct,Ne):P.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,O,ne,ye,H,K,et,ct,Ne.data):P.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,O,ne,ye,Ne.width,Ne.height,et,Ne.data):j.texSubImage2D(j.TEXTURE_2D,O,ne,ye,H,K,et,ct,Ne);C.pixelStorei(j.UNPACK_ROW_LENGTH,vt),C.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ye),C.pixelStorei(j.UNPACK_SKIP_PIXELS,xt),C.pixelStorei(j.UNPACK_SKIP_ROWS,Tt),C.pixelStorei(j.UNPACK_SKIP_IMAGES,Ut),O===0&&Y.generateMipmaps&&j.generateMipmap(Me),C.unbindTexture()},this.initRenderTarget=function(P){ie.get(P).__webglFramebuffer===void 0&&he.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?he.setTextureCube(P,0):P.isData3DTexture?he.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?he.setTexture2DArray(P,0):he.setTexture2D(P,0),C.unbindTexture()},this.resetState=function(){z=0,V=0,oe=null,C.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}function d0(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},c=n[0].morphTargetsRelative,o=new $t;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(c!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let x=0;x<f.count;++x)h.push(f.getX(x)+u);u+=n[d].attributes.position.count}o.setIndex(h)}for(const u in s){const h=f0(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const x=f0(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(x)}}}return o}function f0(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),c=new mn(a,t,i);let o=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=o/t;for(let d=0,f=u.count;d<f;d++)for(let x=0;x<t;x++){const _=u.getComponent(d,x);c.setComponent(d+h,x,_)}}else a.set(u.array,o);o+=u.count*t}return r!==void 0&&(c.gpuType=r),c}function i2(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let a=0;const c=Object.keys(n.attributes),o={},l={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,w=c.length;v<w;v++){const y=c[v],S=n.attributes[y];o[y]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);const b=n.morphAttributes[y];b&&(l[y]||(l[y]=[]),b.forEach((T,g)=>{const M=new T.array.constructor(T.count*T.itemSize);l[y][g]=new T.constructor(M,T.itemSize,T.normalized)}))}const f=e*.5,x=Math.log10(1/e),_=Math.pow(10,x),m=f*_;for(let v=0;v<s;v++){const w=i?i.getX(v):v;let y="";for(let S=0,b=c.length;S<b;S++){const T=c[S],g=n.getAttribute(T),M=g.itemSize;for(let E=0;E<M;E++)y+=`${Math.trunc(g[h[E]](w)*_+m)},`}if(y in t)u.push(t[y]);else{for(let S=0,b=c.length;S<b;S++){const T=c[S],g=n.getAttribute(T),M=n.morphAttributes[T],E=g.itemSize,D=o[T],R=l[T];for(let A=0;A<E;A++){const L=h[A],k=d[A];if(D[k](a,g[L](w)),M)for(let z=0,V=M.length;z<V;z++)R[z][k](a,M[z][L](w))}}t[y]=a,u.push(a),a++}}const p=n.clone();for(const v in n.attributes){const w=o[v];if(p.setAttribute(v,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),v in l)for(let y=0;y<l[v].length;y++){const S=l[v][y];p.morphAttributes[v][y]=new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(u),p}const Oi=`#include <common>
#include <logdepthbuf_pars_vertex>`,zi="#include <logdepthbuf_vertex>",Bi="#include <logdepthbuf_pars_fragment>",Gi="#include <logdepthbuf_fragment>",vr=`
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
`,Jo=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function r2(n){const e=new $t;e.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const t=new zt(e);t.frustumCulled=!1;const i=new al;i.add(t);const r=new ul,s=n.extensions,a=s.has("EXT_color_buffer_float")||s.has("EXT_color_buffer_half_float")?Ei:ti,c={type:a,depthBuffer:!1,minFilter:xn,magFilter:xn};let o=null;const l=(M,E)=>new fi(M,E,{type:a,samples:v,depthBuffer:!0,depthTexture:new oo(M,E,Hi)}),u=[],h=6,d=()=>({value:new tt}),f=new Wt({uniforms:{tSrc:{value:null},uTexel:d(),uPrefilter:{value:0},uThreshold:{value:1.3},uKnee:{value:.2}},vertexShader:Jo,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1}),x=new Wt({uniforms:{tSrc:{value:null},uTexel:d(),uRadius:{value:1}},vertexShader:Jo,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
      void main() {
        vec3 col = s(vec2(0)) * 4.0 + (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.0
          + s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
        gl_FragColor = vec4(col / 16.0, 1.0);
      }`,blending:Bn,depthTest:!1,depthWrite:!1}),_={pos:new tt(.5,.5),vis:0,color:new ot("#ffe2b0")},m=new Wt({uniforms:{tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:6e3},uFocus:{value:100},uDof:{value:0},tBloom:{value:null},uBloom:{value:.17},uExposure:{value:1},uTime:{value:0},uAspect:{value:1},uSun:{value:_.pos},uSunVis:{value:0},uSunColor:{value:_.color},uTexel:d(),uCA:{value:1},uGrain:{value:1}},vertexShader:Jo,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1});let p=new tt(1,1),v=4;function w(M,E,D){const R=Math.max(1,Math.round(M*D)),A=Math.max(1,Math.round(E*D));p.set(R,A),o?o.setSize(R,A):o=l(R,A);let L=Math.max(1,R>>1),k=Math.max(1,A>>1);for(let z=0;z<h;z++)u[z]?u[z].setSize(L,k):u[z]=new fi(L,k,c),L=Math.max(1,L>>1),k=Math.max(1,k>>1);m.uniforms.uAspect.value=M/E}function y(M){M!==v&&(v=M,o&&(o.dispose(),o=l(p.x,p.y)))}function S(M,E){t.material=M,n.setRenderTarget(E),n.render(i,r)}function b(M,E,D){m.uniforms.uNear.value=E.near,m.uniforms.uFar.value=E.far,n.setRenderTarget(o),n.clear(),n.render(M,E);let R=o.texture,A=p.x,L=p.y;for(let z=0;z<T;z++)f.uniforms.tSrc.value=R,f.uniforms.uTexel.value.set(1/A,1/L),f.uniforms.uPrefilter.value=z===0?1:0,S(f,u[z]),R=u[z].texture,A=u[z].width,L=u[z].height;for(let z=T-2;z>=0;z--)x.uniforms.tSrc.value=u[z+1].texture,x.uniforms.uTexel.value.set(1/u[z+1].width,1/u[z+1].height),n.autoClear=!1,S(x,u[z]),n.autoClear=!0;const k=m.uniforms;k.tScene.value=o.texture,k.tDepth.value=o.depthTexture,k.uTexel.value.set(1/p.x,1/p.y),k.tBloom.value=u[0].texture,k.uTime.value=D,k.uSunVis.value=_.vis,S(m,null)}let T=h;function g(M){T=M==="high"?h:4}return{setSize:w,setSamples:y,setLevel:g,render:b,flare:_,uniforms:m.uniforms}}const tc=[[[.1,.45,.55],[.55,.12,.4]],[[.65,.3,.08],[.35,.06,.08]],[[.2,.3,.75],[.45,.15,.6]],[[.15,.5,.4],[.6,.45,.15]],[[.6,.2,.25],[.15,.25,.6]],[[.4,.55,.7],[.25,.1,.35]]],s2=`
${vr}
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
}`;function o2(n,e){const t=e==="high"?1024:512,i=n.extensions,r=i.has("EXT_color_buffer_float")||i.has("EXT_color_buffer_half_float")?Ei:ti,s=new _f(t,{type:r,generateMipmaps:!1,minFilter:xn,magFilter:xn}),a=new Kp(.1,100,s),c=new al,o={uPole:{value:new U},uNebDir:{value:[new U,new U,new U]},uNebA:{value:[new U,new U,new U]},uNebB:{value:[new U,new U,new U]},uNebSize:{value:[0,0,0]},uGal:{value:[new U,new U,new U]},uSeed:{value:0},uRes:{value:t}};c.add(new zt(new $i(10,64,32),new Wt({uniforms:o,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:s2,side:ii,depthWrite:!1})));const l=new md(n);let u=null,h=null;const d=e==="high"?9e3:5e3,f=new $t,x=new Float32Array(d*3),_=new Float32Array(d*3),m=new Float32Array(d);f.setAttribute("position",new mn(x,3)),f.setAttribute("color",new mn(_,3)),f.setAttribute("size",new mn(m,1));const p=new Wt({uniforms:{uT:{value:0},uPR:{value:1}},vertexShader:`
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
      }`,blending:Bn,depthTest:!1,depthWrite:!1}),v=new pf(f,p);v.frustumCulled=!1,v.renderOrder=-100;function w(y=1){if(h===y)return;h=y;const S=Ti(y*7919+13),b=()=>{const R=S()*2-1,A=S()*Math.PI*2,L=Math.sqrt(1-R*R);return new U(Math.cos(A)*L,R,Math.sin(A)*L)};o.uPole.value.set(.3+S()*.4,.75+S()*.2,.3-S()*.6).normalize();const T=tc[Math.floor(S()*tc.length)],g=tc[Math.floor(S()*tc.length)],M=1;for(let R=0;R<3;R++){const A=R===1?g:T,L=S()<.4;o.uNebDir.value[R].copy(b()),o.uNebA.value[R].fromArray(L?A[1]:A[0]),o.uNebB.value[R].fromArray(L?A[0]:A[1]),o.uNebSize.value[R]=R<M?.3+S()*.2:0,o.uGal.value[R].copy(b()).multiplyScalar(.6+S()*1.2)}o.uSeed.value=Math.floor(S()*1e3),a.update(n,c),u&&u.dispose(),u=l.fromCubemap(s.texture);const E=o.uPole.value,D=new U;for(let R=0;R<d;R++){D.copy(b()),S()<.5&&D.addScaledVector(E,-D.dot(E)*(.75+S()*.25)).normalize(),x.set([D.x,D.y,D.z],R*3);const A=S()**7,L=S(),k=L<.18?[.7,.82,1]:L<.75?[1,.97,.93]:L<.94?[1,.84,.62]:[1,.62,.48],z=.12+S()*.12+A*3.5;_.set([k[0]*z,k[1]*z,k[2]*z],R*3),m[R]=A*2.2}f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0,f.attributes.size.needsUpdate=!0}return{stars:v,bake:w,get background(){return s.texture},get env(){return u?u.texture:null},update(y,S){p.uniforms.uT.value=y,p.uniforms.uPR.value=S}}}function h0(n,e){const t=new zn,i={value:0},r=e==="high",s=new zt(new $i(n,96,64),new Wt({uniforms:{uT:i,uTint:{value:new ot(1,1,1)}},vertexShader:`${Oi}
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
          ${zi}
        }`,fragmentShader:`${Bi}
        ${vr}
        uniform float uT; uniform vec3 uTint;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          ${Gi}
          vec3 p = normalize(vP);
          float t = uT;
          // Seen as in a solar observatory's images: a deep orange disc with a
          // fine churning network, bright active regions threaded with arching
          // magnetic loops, dark snaking filaments, and a bright fringe at the edge.
          vec3 w = vec3(fbm(p * 3.0 + t * 0.012, 3), fbm(p * 3.0 + 5.0 - t * 0.012, 3), fbm(p * 3.0 + 9.0, 3));
          float net = fbm(p * 38.0 + w * 2.5 + t * 0.03, ${r?5:4}) * 0.5 + 0.5;
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
        }`}));t.add(s);const a=new zt(new po(2,2),new Wt({uniforms:{uT:i,uR:{value:n},uTint:s.material.uniforms.uTint},vertexShader:`${Oi}
        uniform float uR; varying vec2 vXY;
        void main() {
          float s = length(modelMatrix[0].xyz) * uR * 2.2;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 2.2; // in star radii
          gl_Position = projectionMatrix * mv;
          ${zi}
        }`,fragmentShader:`${Bi}
        ${vr}
        uniform float uT; uniform vec3 uTint; varying vec2 vXY;
        void main() {
          ${Gi}
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
        }`,blending:Bn,transparent:!0,depthWrite:!1}));a.frustumCulled=!1,t.add(a);const c=[],o=d=>new Wt({uniforms:{uT:i,uA:{value:0},uC:{value:new ot().setHSL(d,1,.55)},uTint:s.material.uniforms.uTint},vertexShader:`${Oi}
      varying vec2 vUv; varying float vRim;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vRim = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
        ${zi}
      }`,fragmentShader:`${Bi}
      ${vr}
      uniform float uT, uA; uniform vec3 uC, uTint; varying vec2 vUv; varying float vRim;
      void main() {
        ${Gi}
        float flow = snoise(vec3(vUv.x * 14.0 - uT * 0.6, vUv.y * 3.0, uT * 0.1)) * 0.5 + 0.5;
        float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float k = uA * (0.35 + flow) * (0.4 + 0.6 * vRim) * (0.5 + ends * 0.5);
        gl_FragColor = vec4(uC * uTint * k * 2.2, 1.0);
      }`,blending:Bn,transparent:!0,depthWrite:!1,side:ci});{const d=Ti(7),f=new U(0,1,0);for(let x=0;x<9;x++){const _=.7+d()*1.3,m=new zt(new ki(_,.07+d()*.08,8,40,Math.PI),o(.03+d()*.05)),p=()=>{const v=new U().randomDirection();m.position.copy(v).multiplyScalar(n*.97),m.quaternion.setFromUnitVectors(f,v),m.rotateY(Math.random()*Math.PI)};p(),c.push({m,place:p,phase:d()*40,period:25+d()*30,peak:.5+d()*.4,lastU:0}),t.add(m)}}const l=a2(),u=[];for(const[d,f,x]of[[15,"#ffc080",.22],[28,"#ff9a50",.09],[60,"#ff7a30",.03]]){const _=new pc(new Zo({map:l,color:f,opacity:x,blending:Bn,depthWrite:!1,transparent:!0}));_.scale.setScalar(d),_.userData.base=d,u.push(_),t.add(_)}function h(d){i.value=d,u.forEach((f,x)=>f.scale.setScalar(f.userData.base*(1+.03*Math.sin(d*(.5+x*.23)+x))));for(const f of c){const x=(d+f.phase)%f.period/f.period;x<f.lastU&&f.place(),f.lastU=x,f.m.material.uniforms.uA.value=Math.sin(x*Math.PI)**2*f.peak,f.m.scale.setScalar(.6+x*.6)}}return{group:t,update:h,tint:s.material.uniforms.uTint.value}}function a2(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.5)"),t.addColorStop(.5,"rgba(255,255,255,0.1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new mf(n);return i.colorSpace=Xn,i}const im={value:800},ge=0,fe=1,Je=2,yn=3,yi=4,Ki=5,dn=6,p0=7,m0=8,c2=9;let Rr=null;function l2(){if(Rr)return Rr;const n=256,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=Ti(17);t.fillStyle="#d8d8d8",t.fillRect(0,0,n,n);const r=(s,a,c,o,l)=>{if(l>4||c<18||o<18||l>1&&i()<.18){const u=196+i()*52|0;t.fillStyle=`rgb(${u},${u},${u+2})`,t.fillRect(s+1,a+1,c-2,o-2),t.strokeStyle="rgba(30,34,40,0.6)",t.lineWidth=1,t.strokeRect(s+.5,a+.5,c-1,o-1),t.strokeStyle="rgba(255,255,255,0.25)",t.beginPath(),t.moveTo(s+1.5,a+o-1.5),t.lineTo(s+1.5,a+1.5),t.lineTo(s+c-1.5,a+1.5),t.stroke();const h=i();if(h<.15)t.fillStyle="rgba(40,44,52,0.45)",t.fillRect(s+c*.3,a+o*.3,c*.3,o*.25);else if(h<.25){t.fillStyle="rgba(30,32,36,0.5)";for(let d=0;d<5;d++)t.fillRect(s+3,a+3+d*3,c*.4,1)}else if(h<.33){t.fillStyle="rgba(30,30,30,0.45)";for(let d=3;d<c-3;d+=4)t.fillRect(s+d,a+2,1,1),t.fillRect(s+d,a+o-3,1,1)}else if(h<.36){t.save(),t.beginPath(),t.rect(s+2,a+o-7,c-4,5),t.clip();for(let d=-10;d<c;d+=6)t.fillStyle="rgba(190,140,30,0.7)",t.beginPath(),t.moveTo(s+d,a+o),t.lineTo(s+d+3,a+o),t.lineTo(s+d+8,a+o-8),t.lineTo(s+d+5,a+o-8),t.fill();t.restore()}return}if(c>o){const u=c*(.3+i()*.4)|0;r(s,a,u,o,l+1),r(s+u,a,c-u,o,l+1)}else{const u=o*(.3+i()*.4)|0;r(s,a,c,u,l+1),r(s,a+u,c,o-u,l+1)}};r(0,0,n,n,0);for(let s=0;s<90;s++)t.fillStyle=`rgba(20,20,26,${.03+i()*.06})`,t.fillRect(i()*n,i()*n,1+i()*14,1);for(let s=0;s<1200;s++)t.fillStyle=i()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",t.fillRect(i()*n,i()*n,1,1);return Rr=new mf(e),Rr.colorSpace=Xn,Rr.wrapS=Rr.wrapT=aa,Rr.anisotropy=4,Rr}const nc=new U(0,1,0);function un(n){const e=[],t=Ti(n),i=Math.PI/2,r=(a,c,o=1)=>(a.userData.kind=c,a.userData.tint=o,e.push(a),a),s={r:t,add:(a,c=ge,o=1)=>r(a,c,o),box:(a,c,o,l=0,u=0,h=0,d=ge,f)=>r(new Tn(a,c,o).translate(l,u,h),d,f),cyl:(a,c,o,l,u=ge,h=12,d=0,f=0,x)=>r(new mt(a,c,o,h).rotateX(i).translate(d,f,l),u,x),oct:(a,c,o,l,u=1,h=0,d=0,f=ge,x)=>r(new mt(.5*u,.5,o,8).rotateY(Math.PI/8).rotateX(i).scale(a,c,1).translate(h,d,l),f,x),sphere:(a,c,o,l,u=ge,h,d=10)=>r(new $i(a,d,Math.max(6,d*.6|0)).translate(c,o,l),u,h),tank:(a,c,o,l,u,h=ge,d)=>r(new gf(a,c,2,8).rotateX(i).translate(o,l,u),h,d),boom:(a,c,o,l,u,h=.004,d=fe,f)=>{const x=new U(...l).normalize(),_=new Tn(h,u,h).translate(0,u/2,0);return _.applyQuaternion(new Yn().setFromUnitVectors(nc,x)).translate(a,c,o),r(_,d,f),[a+x.x*u,c+x.y*u,o+x.z*u]},dish:(a,c,o,l,u,h=ge)=>{const d=new U(...u).normalize(),f=new Yn().setFromUnitVectors(nc,d);r(new mt(a,a*.14,a*.32,18).translate(0,a*.16,0).applyQuaternion(f).translate(c,o,l),h,1.05),s.boom(c,o,l,u,a*.75,Math.max(.002,a*.06))},radiator:(a,c,o,l,u,h,d=3,f=.003,x=m0)=>{const _=u*.035,m=(u-_*(d-1))/d;for(let v=0;v<d;v++){const w=o-u/2+m/2+v*(m+_);r(new Tn(l,f,m).translate(l/2,0,0).rotateZ(h).translate(a,c,w),x,(x===m0?.92:.55)+t()*.14),s.strut(a+Math.cos(h)*l,c+Math.sin(h)*l,w-m/2,a+Math.cos(h)*l,c+Math.sin(h)*l,w+m/2,f*1.8,fe,.7)}if(s.cyl(f*1.5,f*1.5,u*1.04,o,ge,6,a,c,.75),Math.hypot(a,c)>1e-4)for(const v of[-.42,.42])s.pipe(a,c,o+v*u,a*.55,c*.55,o+v*u*1.1,f*.9,fe);return[a+Math.cos(h)*l,c+Math.sin(h)*l]},strut:(a,c,o,l,u,h,d=.003,f=fe,x)=>{const _=new U(l-a,u-c,h-o),m=_.length();if(m<1e-6)return;const p=new mt(d*.62,d*.62,m,3,1,!0).translate(0,m/2,0);p.applyQuaternion(new Yn().setFromUnitVectors(nc,_.normalize())).translate(a,c,o),r(p,f,x)},pipe:(a,c,o,l,u,h,d=.0022,f=ge)=>{const x=new U(l-a,u-c,h-o),_=x.length();if(_<1e-6)return;const m=new mt(d,d,_,4,1,!0).translate(0,_/2,0);m.applyQuaternion(new Yn().setFromUnitVectors(nc,x.normalize())).translate(a,c,o),r(m,f,.8)},truss3:(a,c,o,l,u,h,d=.004,f=0,x=fe)=>{const _=[0,1,2].map(p=>{const v=f+Math.PI/2+p*2*Math.PI/3;return[a+Math.cos(v)*u,c+Math.sin(v)*u]});for(const[p,v]of _)s.strut(p,v,o,p,v,l,d,x);const m=(l-o)/h;for(let p=0;p<=h;p++){const v=o+p*m;for(let w=0;w<3;w++)s.strut(_[w][0],_[w][1],v,_[(w+1)%3][0],_[(w+1)%3][1],v,d*.8,x);if(p===h)break;for(let w=0;w<3;w++){const[y,S]=p%2?[_[w],_[(w+1)%3]]:[_[(w+1)%3],_[w]];s.strut(y[0],y[1],v,S[0],S[1],v+m,d*.7,x,.85)}}},frame:(a,c,o,l,u,h,d=.003,f=fe)=>{const x=l-a/2,_=l+a/2,m=u-c/2,p=u+c/2,v=h-o/2,w=h+o/2;for(const y of[m,p])for(const S of[v,w])s.strut(x,y,S,_,y,S,d,f);for(const y of[x,_])for(const S of[v,w])s.strut(y,m,S,y,p,S,d,f);for(const y of[x,_])for(const S of[m,p])s.strut(y,S,v,y,S,w,d,f)},strapped:(a,c,o,l,u,h=!1,d=1)=>{s.tank(a,c,o,l,u,ge,d);const f=(x,_,m,p,v)=>r(new mt(x,x,_,10,1,!0).rotateX(i).translate(o,l,m),p,v);for(const x of[-.32,.32])f(a*1.06,a*.16,u+x*c,fe,.8);h&&f(a*1.04,c*.3,u,Je,1)},collar:(a,c,o=0,l=0,u=1)=>{s.cyl(a*.85,a*.85,.014,c,ge,12,o,l,.9),s.cyl(a*1.25,a*1.25,.004,c+u*.007,fe,14,o,l)},engine:(a,c,o,l,u,h=6)=>{s.bell(a,c,o);for(let d=0;d<h;d++){const f=d/h*Math.PI*2+.3;s.strut(Math.cos(f)*l,Math.sin(f)*l,u,Math.cos(f)*a*.5,Math.sin(f)*a*.5,c-o*.12,.004,fe,.8)}s.cyl(l*1.05,l*1.05,.008,u,fe,14)},solar:(a,c,o,l,u,h,d=.003)=>{r(new Tn(l,d,u).translate(l/2,0,0).rotateZ(h).translate(a,c,o),c2,1),r(new Tn(l,d*1.4,d*1.4).translate(l/2,0,0).rotateZ(h).translate(a,c,o),fe,.7),r(new Tn(d*1.4,d*1.4,u).translate(l,0,0).rotateZ(h).translate(a,c,o),fe,.7)},truss:(a,c,o,l,u,h,d=.004,f=fe)=>{const x=(l-o)/h;for(const _ of[-1,1])for(const m of[-1,1])s.strut(a+_*u/2,c+m*u/2,o,a+_*u/2,c+m*u/2,l,d,f);for(let _=0;_<=h;_++){const m=o+_*x;for(const v of[-1,1])s.strut(a-u/2,c+v*u/2,m,a+u/2,c+v*u/2,m,d,f),s.strut(a+v*u/2,c-u/2,m,a+v*u/2,c+u/2,m,d,f);if(_===h)break;const p=_%2?1:-1;for(const v of[-1,1])s.strut(a+v*u/2,c-p*v*u/2,m,a+v*u/2,c+p*v*u/2,m+x,d*.8,f,.85),s.strut(a-p*v*u/2,c+v*u/2,m,a+p*v*u/2,c+v*u/2,m+x,d*.8,f,.85)}},shield:(a,c)=>r(new mt(a,a*.62,.014,18).rotateX(i).translate(0,0,c),fe,.75),turret:(a,c,o,l=1,u=1)=>{s.cyl(.017*u,.02*u,.01*u,o,fe,10,a,c),s.box(.026*u,.012*u*l,.03*u,a,c+.008*u*l,o,ge,.85);for(const h of[-.005,.005])s.box(.004*u,.004*u,.06*u,a+h*u,c+.01*u*l,o+.04*u,fe,.6)},cells:(a,c,o,l,u,h=.011)=>{for(let d=0;d<l;d++)for(let f=0;f<u;f++)s.box(h*.72,.002,h*.72,a+(d-(l-1)/2)*h,c,o+(f-(u-1)/2)*h,fe,.45+t()*.3)},rcs:(a,c,o,l,u)=>{s.box(.011,.011,.014,a,c,o,fe,.8),s.box(.004,.004,.004,a+l*.0075,c+u*.0075,o,fe,.5),s.box(.004,.004,.004,a,c,o+.009,fe,.5)},hoop:(a,c,o,l,u=0,h=0,d=0,f=.004,x=ge)=>{for(let _=0;_<l;_++){const m=_/l*Math.PI*2;s.add(new Tn(c,2*Math.PI*a/l*1.02,o).rotateZ(m).translate(Math.cos(m)*a,Math.sin(m)*a,u),_%9===4?Je:x,.9+t()*.2),f&&_%2===0&&s.add(new Tn(f*.5,2*Math.PI*a/l*.55,o*.3).rotateZ(m).translate(Math.cos(m)*(a-c/2-f*.2),Math.sin(m)*(a-c/2-f*.2),u+(t()-.5)*o*.4),yn)}for(let _=0;_<h;_++){const m=_/h*Math.PI*2+.3;s.add(new mt(o*.12,o*.12,a-c/2-d,8).translate(0,d+(a-c/2-d)/2,0).rotateZ(m).translate(0,0,u),fe)}},bell:(a,c,o=.16)=>{const l=[];for(let u=0;u<=8;u++){const h=u/8;l.push(new tt(a*(.42+.58*Math.pow(h,1.6)),-h*o))}r(new Xc(l,20).rotateX(-i).translate(0,0,c),fe,.7),r(new mt(a*.4,a*.4,.004,16).rotateX(i).translate(0,0,c-.012),p0),s.nozzle===void 0&&(s.nozzle=c-o-.01)},bell2:(a,c,o,l,u=.05)=>{const h=[];for(let d=0;d<=6;d++){const f=d/6;h.push(new tt(a*(.45+.55*Math.pow(f,1.5)),-f*u))}r(new Xc(h,12).rotateX(-i).translate(c,o,l),fe,.65)},greeble:(a,c,o,l,u,h,d,f="tbs")=>{for(let x=0;x<d;x++){const _=f[Math.floor(t()*f.length)],m=(.1+t()*.25)*a,p=(.08+t()*.3)*o,v=.004+t()*.012,w=l+(t()-.5)*(a-m),y=h+(t()-.5)*(o-p),S=t()<.6?fe:ge;if(_==="t")s.box(m,v,p,w,u+c/2+v/2,y,S);else if(_==="b")s.box(m,v,p,w,u-c/2-v/2,y,S);else{const b=t()<.5?-1:1,T=u+(t()-.5)*(c-m*.6);s.box(v,Math.min(m,c*.4),p,l+b*(a/2+v/2),T,y,S)}}},pdc:(a,c,o,l=1)=>{s.cyl(.011,.013,.008,o,fe,8,a,c),s.box(.014,.01*l,.014,a,c+.006*l,o,fe,.9),s.box(.003,.003,.03,a-.003,c+.009*l,o+.016,fe,.6),s.box(.003,.003,.03,a+.003,c+.009*l,o+.016,fe,.6)},light:(a,c,o,l,u=.008)=>s.box(u,u,u,a,c,o,l),windows:(a,c,o,l,u,h=[-1,1])=>{for(let d=0;d<u;d++){const f=o+(l-o)*d/Math.max(1,u-1);for(const x of h)s.box(.002,.006,.01,x*a,c,f,yn)}},build(a=1.35,c=7,o=0){const l=[],u=[];for(const d of e){const f=d.index?d.toNonIndexed():d;f.deleteAttribute("uv");const x=f.attributes.position.count,_=new Float32Array(x).fill(d.userData.kind),m=new Float32Array(x).fill(d.userData.tint*(.9+t()*.2));f.setAttribute("kind",new mn(_,1)),f.setAttribute("tint",new mn(m,1)),f.computeVertexNormals();const p=f.attributes.position,v=f.attributes.normal,w=new Float32Array(x*2);for(let y=0;y<x;y++){const S=Math.abs(v.getX(y)),b=Math.abs(v.getY(y)),T=Math.abs(v.getZ(y)),g=p.getX(y),M=p.getY(y),E=p.getZ(y);S>=b&&S>=T?(w[y*2]=E*c,w[y*2+1]=M*c):b>=T?(w[y*2]=g*c,w[y*2+1]=E*c):(w[y*2]=g*c,w[y*2+1]=M*c)}if(f.setAttribute("uv",new mn(w,2)),l.push(f),o){f.computeBoundingSphere();const y=d.userData.kind;(f.boundingSphere.radius>=o||y>=yn&&y<=p0)&&u.push(f)}}const h=d0(l);if(h.scale(a,a,1),h.computeBoundingSphere(),h.userData.nozzle=s.nozzle??0,o){const d=d0(u);d.scale(a,a,1),d.computeBoundingSphere(),h.userData.coarse=d}return h}};return s}const Uo=.04;function u2(){const n=un(11);n.tank(.034,.07,0,0,.33,ge,1.05),n.cyl(.036,.036,.034,.325,Je,14),n.collar(.016,.39),n.box(.03,.006,.004,0,.018,.372,yn),n.box(.02,.003,.02,0,.036,.31,fe),n.truss3(0,0,-.205,.29,.036,7,.0045),n.strapped(.021,.08,.04,-.012,.13,!0),n.strapped(.021,.08,-.038,-.012,.06),n.strapped(.018,.06,0,.05,-.04,!1,.95),n.pipe(.04,-.012,.08,.012,-.016,-.2),n.pipe(-.038,-.012,.01,-.012,-.016,-.2),n.pipe(0,.05,-.08,0,.02,-.2),n.shield(.046,-.21),n.cyl(.032,.038,.05,-.24,fe,12),n.engine(.05,-.27,.12,.036,-.262),n.radiator(.03,.018,-.07,.05,.24,.45,6),n.radiator(-.03,.018,-.07,.05,.24,Math.PI-.45,6);for(const R of[-1,1])n.boom(0,0,.29,[R,0,0],.05,.004),n.rcs(R*.05,0,.29,R,0),n.boom(0,0,-.2,[R,0,0],.05,.004),n.rcs(R*.05,0,-.2,R,0);n.light(-.055,0,.29,yi),n.light(.055,0,.29,Ki),n.light(0,.04,-.03,dn);const e=n.build(1.35,7,Uo),t=un(23);t.cyl(.064,.064,.14,.2,ge,18),t.cyl(.05,.064,.03,.285,ge,18),t.cyl(.066,.066,.05,.19,Je,18),t.collar(.022,.305);for(let R=0;R<6;R++){const A=R/6*Math.PI*2+.5;t.box(.012,.005,.005,Math.cos(A)*.064,Math.sin(A)*.064,.245,yn)}t.box(.022,.003,.022,0,.066,.15,fe),t.box(.003,.022,.022,.066,0,.25,fe),t.oct(.15,.15,.024,.118,1,0,0,fe,.8),t.greeble(.15,.15,.024,0,0,.118,8,"tb"),t.cyl(.018,.018,.17,.02,fe,8);for(let R=0;R<6;R++){const A=R/6*Math.PI*2+.26,L=Math.cos(A)*.056,k=Math.sin(A)*.056;t.strapped(.025,.065,L,k,.035,R%3===0),t.pipe(L*.6,k*.6,-.01,Math.cos(A)*.02,Math.sin(A)*.02,-.07)}t.shield(.052,-.075),t.cyl(.04,.044,.05,-.105,fe,12),t.engine(.056,-.135,.11,.046,-.128);for(const R of[.6,2.7,4.6])t.radiator(Math.cos(R)*.042,Math.sin(R)*.042,-.105,.05,.05,R,2,.003,fe);t.pdc(0,.066,.24),t.sphere(.012,-.045,.045,.272,fe,.6,10);for(const R of[.8,2.35,3.9,5.5])t.rcs(Math.cos(R)*.07,Math.sin(R)*.07,.26,Math.cos(R),Math.sin(R));for(const R of[0,Math.PI])t.rcs(Math.cos(R)*.085,Math.sin(R)*.085,.035,Math.cos(R),0);t.light(-.066,0,.2,yi),t.light(.066,0,.2,Ki),t.light(0,0,.316,dn);const i=t.build(1.35,7,Uo),r=un(37);r.truss(0,0,-.17,.3,.03,6),r.cyl(.028,.028,.07,.31,ge,12,.032,.026),r.cyl(.03,.03,.02,.3,Je,12,.032,.026),r.collar(.014,.352,.032,.026),r.box(.02,.005,.004,.032,.04,.346,yn),r.strut(.015,.015,.29,.032,.026,.29,.005);const s=[[.21,[[.05,0,.03,.08,!0],[-.045,.018,.027,.08],[0,.052,.024,.07]]],[.07,[[.056,.016,.035,.1],[-.052,-.02,.035,.1,!0],[0,-.056,.03,.09],[.004,.056,.03,.09]]]];for(const[R,A]of s){for(const[L,k,z,V,oe]of A)r.strapped(z,V,L,k,R,!!oe),r.strut(L*.4,k*.4,R,L*.75,k*.75,R,.005);r.frame(.15,.15,.012,0,0,R-.05,.004)}r.sphere(.042,.044,.004,-.075,ge,.95,10),r.sphere(.036,-.038,.03,-.085,ge,1.02,10),r.cyl(.044,.044,.012,-.075,Je,12,.044,.004),r.frame(.07,.06,.08,-.04,-.045,-.06,.003),r.pipe(.044,.004,-.115,.01,0,-.17),r.pipe(-.038,.03,-.12,-.01,.01,-.17),r.shield(.05,-.175),r.cyl(.036,.042,.05,-.205,fe,12),r.engine(.05,-.235,.12,.04,-.228),r.radiator(.022,.022,-.205,.06,.07,.9,2),r.rcs(.05,0,.29,1,0),r.rcs(-.025,-.02,.29,-1,0),r.rcs(.03,.03,-.19,1,0),r.rcs(-.03,-.03,-.19,-1,0),r.light(-.03,0,.3,yi),r.light(.06,.026,.31,Ki),r.light(0,.03,-.12,dn);const a=r.build(1.35,7,Uo),c=un(53);c.oct(.1,.086,.15,.27,.82),c.cyl(.018,.018,.006,.346,fe,12,0,.008),c.box(.07,.008,.1,0,.044,.26,Je),c.box(.008,.06,.1,.051,0,.26,Je),c.turret(0,.048,.205,1,1.1),c.turret(0,-.045,.3,-1,.9),c.box(.036,.012,.08,-.034,.048,.25),c.cells(-.034,.055,.25,3,6,.011),c.cyl(.011,.014,.05,.33,fe,10,-.056,-.02),c.radiator(-.06,-.03,.27,.03,.05,Math.PI+.6,2,.003,fe),c.windows(.051,-.02,.22,.25,2,[-1]),c.collar(.016,.19,0,-.03,-1),c.truss(0,0,-.15,.195,.034,4),c.strapped(.02,.1,.036,0,.08),c.strapped(.02,.1,-.036,0,.03,!0),c.pipe(.036,0,.02,.01,0,-.15),c.pipe(-.036,0,-.03,-.01,0,-.15);for(const R of[.62,2.5,3.8,5.6])c.radiator(Math.cos(R)*.026,Math.sin(R)*.026,-.03,.15,.24,R,6);c.shield(.06,-.158),c.oct(.08,.08,.07,-.195,1),c.cyl(.05,.055,.02,-.24,fe,14),c.engine(.062,-.255,.13,.05,-.245);for(const[R,A]of[[.058,.03],[-.058,-.03]])c.rcs(R,A,.31,Math.sign(R),0);for(const[R,A]of[[.046,-.036],[-.046,.036]])c.rcs(R,A,-.2,Math.sign(R),0);c.light(-.063,0,.25,yi),c.light(.063,0,.25,Ki),c.light(0,0,-.03,dn);const o=c.build(1.35,7,Uo),l=un(67);l.cyl(.024,.03,.05,.33,ge,12),l.boom(0,0,.355,[0,0,1],.05,.004),l.box(.01,.01,.01,0,0,.405,fe),l.box(.008,.008,.008,.02,.02,.33,fe),l.boom(.02,.02,.33,[1,.7,.3],.07),l.dish(.04,-.03,.03,.3,[-.5,.6,.6]),l.cyl(.028,.028,.12,.22,ge,14),l.cyl(.04,.04,.03,.2,fe,14),l.cyl(.03,.03,.03,.255,Je,14),l.collar(.014,.16,0,0,-1),l.truss3(0,0,-.17,.16,.026,5,.004),l.strapped(.02,.08,.03,.01,.06),l.strapped(.02,.08,-.03,0,0,!0),l.strapped(.016,.06,0,-.032,-.07),l.pipe(.03,.01,.01,.008,0,-.17),l.pipe(-.03,0,-.05,-.008,0,-.17),l.radiator(.016,0,-.11,.1,.12,.12,4),l.radiator(-.016,0,-.11,.05,.12,Math.PI-.3,4,.003,fe),l.shield(.045,-.176),l.cyl(.03,.036,.05,-.205,fe,12),l.engine(.042,-.232,.11,.032,-.226),l.rcs(.03,0,.3,1,0),l.rcs(-.03,0,.3,-1,0),l.rcs(.024,.02,-.18,1,0),l.rcs(-.024,-.02,-.18,-1,0),l.light(-.07,.07,.2,yi),l.light(.07,-.07,.2,Ki),l.light(0,0,.41,dn);const u=l.build(1.35,7,Uo),h=un(71);h.hoop(.085,.022,.03,24,.2,3,.04),u.userData.rotor=h.build(),u.userData.rotorSpin=.6;const d=un(41);d.oct(.05,.05,.06,0,1),d.box(.05,.003,.04,0,.026,-.005,Je),d.cyl(.014,.016,.04,.05,fe,12),d.add(new mt(.02,.018,.022,12,1,!0).rotateX(Math.PI/2).translate(0,0,.08),ge,.9),d.dish(.036,0,.026,0,[0,1,.25]),d.box(.008,.008,.008,-.025,0,-.01,fe),d.box(.008,.008,.008,.022,-.022,-.02,fe);const[f,x,_]=d.boom(-.025,0,-.01,[-1,.15,-.1],.18,.003);d.box(.012,.012,.012,f,x,_,fe,.7);const[m,p,v]=d.boom(.022,-.022,-.02,[.7,-.7,-.2],.05,.004);d.cyl(.01,.01,.04,v,fe,8,m,p);for(const R of[0,1,2,3])d.box(R%2?.004:.03,R%2?.03:.004,.032,m,p,v,fe,.6);for(const R of[-1,1])d.rcs(R*.028,.02,-.025,R,0);d.bell(.018,-.035,.028),d.light(0,.03,-.02,dn,.006);const w=d.build(),y=un(43);y.box(.04,.04,.05,0,0,0),y.box(.042,.042,.012,0,0,-.01,Je),y.dish(.075,0,0,.026,[0,0,1]),y.boom(.02,0,0,[1,0,0],.03),y.solar(.05,0,0,.12,.05,0),y.boom(-.02,0,0,[-1,0,0],.025),y.solar(-.045,0,0,.08,.05,Math.PI+.4),y.radiator(0,-.02,-.005,.03,.03,-Math.PI/2,1),y.boom(.01,.02,-.02,[.3,1,-.4],.09,.002),y.boom(-.01,-.02,-.02,[-.2,-1,-.5],.07,.002);for(const R of[-1,1])y.rcs(R*.022,.018,-.022,R,0);y.bell(.014,-.025,.022),y.light(0,-.024,0,dn,.006);const S=y.build(),b=un(47);b.sphere(.03,0,0,0,ge,1,14),b.cyl(.031,.031,.014,0,Je,14),b.box(.04,.03,.03,0,.03,.02,ge,.9),b.greeble(.04,.03,.03,0,.03,.02,3,"t");const[T,g,M]=b.boom(0,.02,.035,[0,-.3,1],.045,.006);b.sphere(.013,T,g,M,fe,.6,12),b.cyl(.005,.005,.004,M+.012,yn,8,T,g);for(const R of[.785,2.356,3.927,5.498])b.boom(0,0,-.012,[Math.cos(R),Math.sin(R),0],.04,.003),b.rcs(Math.cos(R)*.04,Math.sin(R)*.04,-.012,Math.cos(R),Math.sin(R));b.solar(.02,.045,.02,.05,.035,.35),b.boom(-.012,.045,.01,[-.2,1,-.3],.06,.0018),b.engine(.022,-.045,.04,.02,-.03,4),b.light(0,.046,0,dn,.005);const E=b.build(),D=[e,i,a,o,u];return D.probes=[w,S,E],D}function rm(n){const e=l2(),t=new qc({color:"#d4d8de",map:e,roughnessMap:e,metalness:.35,roughness:.62,emissive:"#06070a"});return t.onBeforeCompile=i=>{i.uniforms.uT=n,i.uniforms.uPxK=im,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute float kind; attribute float tint; attribute vec3 iPaint; attribute float iSun; attribute float iSeed; attribute float iHull; attribute float iLit;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit;
        uniform float uPxK; varying float vPx; varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vLocal = position;
        vKind = kind; vTint = tint; vPaint = iPaint; vSun = iSun; vSeed = iSeed; vHull = iHull; vLit = iLit;`).replace("#include <project_vertex>",`#include <project_vertex>
        // How big the whole vessel is on screen, in pixels.
        vPx = uPxK * length((modelMatrix * instanceMatrix)[0].xyz) * 0.6 / max(-mvPosition.z, 1e-3);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uT;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying float vPx; varying vec3 vLocal;
        float isK(float k) { return 1.0 - step(0.5, abs(vKind - k)); }`).replace("#include <map_fragment>",`#include <map_fragment>
        // Radiators and solar cells aren't armour plate: no plating pattern.
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuse, isK(8.0) + isK(9.0));`).replace("#include <color_fragment>",`#include <color_fragment>
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
        diffuseColor.rgb *= mix(base, vPaint * 0.9 + 0.04, paint);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        // Bare structure is worked metal (it catches the sun), radiators are
        // matte ceramic, solar cells glassy.
        roughnessFactor = mix(roughnessFactor, 0.45, isK(1.0));
        roughnessFactor = mix(roughnessFactor, 0.9, isK(8.0));
        roughnessFactor = mix(roughnessFactor, 0.22, isK(9.0));`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.7, isK(1.0));
        metalnessFactor = mix(metalnessFactor, 0.05, isK(8.0));
        metalnessFactor = mix(metalnessFactor, 0.5, isK(9.0));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
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
        reflectedLight.directDiffuse *= vSun;
        reflectedLight.directSpecular *= vSun;
        {
          // Fill: a faint cool skylight and an edge rim, so the side away from
          // the sun keeps its outline against space instead of vanishing. The
          // sun stays the one strong, directional light.
          float ndv = abs(dot(normal, normalize(vViewPosition)));
          float rim = pow(1.0 - ndv, 3.0);
          reflectedLight.indirectDiffuse += diffuseColor.rgb * vec3(0.5, 0.58, 0.78) * (0.05 + rim * 0.3);
        }`)},t}function d2(n){return new Wt({uniforms:{uT:n},vertexShader:`${Oi}
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
        ${zi}
      }`,fragmentShader:`${Bi}
      uniform float uT;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        ${Gi}
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
      }`,blending:Bn,transparent:!0,depthWrite:!1})}function f2(){return new Wt({uniforms:{uPR:{value:1}},vertexShader:`${Oi}
      attribute vec3 color; attribute float size;
      uniform float uPR; varying vec3 vCol;
      void main() {
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPR;
        ${zi}
      }`,fragmentShader:`${Bi}
      varying vec3 vCol;
      void main() {
        ${Gi}
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float k = exp(-r * r * 5.0) + exp(-abs(p.y) * 40.0) * (1.0 - r) * 0.35;
        if (k < 0.01) discard;
        gl_FragColor = vec4(vCol * k, 1.0);
      }`,blending:Bn,transparent:!0,depthWrite:!1})}function kr(n,e){const t=n.clone(),i=new Hc(t,g0||(g0=rm(e)),1),r=(o,l)=>{const u=new so(new Float32Array(l),l.length);return t.setAttribute(o,u),u},s=r("iPaint",[.6,.6,.6]),a=r("iSun",[1]),c=r("iLit",[0]);return r("iSeed",[Math.random()]),r("iHull",[.95]),i.setMatrixAt(0,new Ft),i.frustumCulled=!1,i.userData.set=(o,l,u)=>{const h=new ot(o);s.setXYZ(0,h.r,h.g,h.b),s.needsUpdate=!0,a.setX(0,l),a.needsUpdate=!0,c.setX(0,u?1:0),c.needsUpdate=!0},i}let g0=null;const h2=40;function p2(n,e){const t={value:0},i=u2(),r=[...i,...i.probes],s=i.length,a=rm(t),c=we=>{const je=we.clone(),He=new Hc(je,a,e);He.instanceMatrix.setUsage(Lr);const Te=(re,ue)=>{const Ae=new so(new Float32Array(e*ue),ue);return Ae.setUsage(Lr),je.setAttribute(re,Ae),Ae};return He.userData={paint:Te("iPaint",3),sun:Te("iSun",1),seed:Te("iSeed",1),hull:Te("iHull",1),n:0},Te("iLit",1).array.fill(1),He.frustumCulled=!1,He.count=0,n.add(He),He},o=r.map(c),l=r.map(we=>we.userData.rotor?c(we.userData.rotor):null),u=r.map(we=>we.userData.coarse?c(we.userData.coarse):null),h=[...o,...l.filter(Boolean),...u.filter(Boolean)],d=new Ft,f=new Yp;f.setAttribute("position",new yt([-1,-.02,0,1,-.02,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),f.setAttribute("part",new yt([0,0,0,0,1,1,1,1],1)),f.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]);const x=e*3,_=(we,je)=>{const He=new so(new Float32Array(x*je),je);return He.setUsage(Lr),f.setAttribute(we,He),He},m=_("iPow",1),p=_("iSeed",1),v=_("iTint",3),w=new Hc(f,d2(t),x);w.instanceMatrix.setUsage(Lr),w.frustumCulled=!1,w.count=0,w.renderOrder=2,n.add(w);const y=new $t,S=new Float32Array(e*3),b=new Float32Array(e*3),T=new Float32Array(e);y.setAttribute("position",new mn(S,3).setUsage(Lr)),y.setAttribute("color",new mn(b,3).setUsage(Lr)),y.setAttribute("size",new mn(T,1).setUsage(Lr));const g=f2(),M=new pf(y,g);M.frustumCulled=!1,M.renderOrder=3,n.add(M);const E=new Ft,D=new Yn,R=new U,A=new U,L=new U(0,1,0),k=new ot;let z=0,V=0,oe=0;const te=new ot(.35,.6,1),ce=new ot(.85,.9,1),le=new Yn,Be=new U(1,0,0);return{geometries:i,hulls:i.length,probeType:i.length,probes:i.probes.length,uT:t,begin(we,je){t.value=we,g.uniforms.uPR.value=je;for(const He of h)He.userData.n=0;z=V=oe=0},add(we,je,He,Te,re,ue,Ae,nt,pe,Ve,Rt,gt){if(!(oe>=e)){if(oe++,A.copy(je).add(He),E.lookAt(A,je,Math.abs(He.y)>.99?R.set(1,0,0):L),D.setFromRotationMatrix(E),Rt>1.5){const Qe=Rt<h2&&u[we]?u[we]:o[we],at=Qe.userData.n++;E.compose(je,D,R.set(Te[0],Te[1],Te[2])),Qe.setMatrixAt(at,E),k.set(re),Qe.userData.paint.setXYZ(at,k.r,k.g,k.b),Qe.userData.sun.setX(at,gt),Qe.userData.seed.setX(at,Ae*.137%1),Qe.userData.hull.setX(at,ue);const Ze=l[we];if(Ze){const Ct=Ze.userData.n++;Ze.setMatrixAt(Ct,E.multiply(d.makeRotationZ(t.value*r[we].userData.rotorSpin+Ae))),Ze.userData.paint.setXYZ(Ct,k.r,k.g,k.b),Ze.userData.sun.setX(Ct,gt),Ze.userData.seed.setX(Ct,Ae*.137%1),Ze.userData.hull.setX(Ct,ue)}}if(nt&&z<x){const Qe=z++;A.set(0,0,r[we].userData.nozzle).multiply(R.set(Te[0],Te[1],Te[2])).applyQuaternion(D).add(je);const at=1.9*pe*Math.max(Te[2],.62);E.compose(A,D,R.set(.06*Te[0]*(we>=s?.5:1),1,at)),w.setMatrixAt(Qe,E);const Ze=Nt.smoothstep(Rt,4,40);m.setX(Qe,(1-.35*Nt.smoothstep(Rt,120,500))*(pe<.2?Ze:.3+.7*Ze)),p.setX(Qe,Ae*.371%1),v.setXYZ(Qe,te.r,te.g,te.b)}if(Ve&&Ve[0]>0){const Qe=V++;S[Qe*3]=je.x,S[Qe*3+1]=je.y,S[Qe*3+2]=je.z;const at=Ve[2]??nt;k.set(at?"#cfe8ff":re);const Ze=Ve[1]*(at?1.5:1);b[Qe*3]=k.r*Ze,b[Qe*3+1]=k.g*Ze,b[Qe*3+2]=k.b*Ze,T[Qe]=Ve[0]}}},jet(we,je,He,Te,re,ue){if(z>=x)return;const Ae=z++;A.copy(we).sub(je),E.lookAt(A,we,Math.abs(je.y)>.99?Be:L),le.setFromRotationMatrix(E),E.compose(we,le,R.set(Te,1,He)),w.setMatrixAt(Ae,E),m.setX(Ae,re),p.setX(Ae,ue*.613%1),v.setXYZ(Ae,ce.r,ce.g,ce.b)},end(){for(const we of h)if(we.count=we.userData.n,!!we.count){we.instanceMatrix.needsUpdate=!0;for(const je of["paint","sun","seed","hull"])we.userData[je].needsUpdate=!0}w.count=z,z&&(w.instanceMatrix.needsUpdate=!0,m.needsUpdate=p.needsUpdate=v.needsUpdate=!0),y.setDrawRange(0,V),V&&(y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0,y.attributes.size.needsUpdate=!0)}}}const v0=3,sm=[.785,2.356,3.927,5.498];function x0(n,e,t){const i=n,r=un(e*31+7),s=r.r,a=(f,x,_,m=ge,p=16,v=0,w=0)=>r.cyl(f,f,x,_,m,p,v,w);if(e===0){a(i*.27,i*.44,0),r.cyl(i*.15,i*.27,i*.1,i*.27,ge,18),r.cyl(i*.27,i*.2,i*.1,-i*.27,ge,18),a(i*.28,i*.14,i*.02,Je);for(let f=0;f<10;f++){const x=f/10*Math.PI*2+.3;r.box(i*.03,i*.03,i*.06,Math.cos(x)*i*.272,Math.sin(x)*i*.272,-i*.12,yn)}}else if(e===1){r.sphere(i*.19,0,0,0,ge,1,16),a(i*.12,i*.5,-i*.1),a(i*.2,i*.08,0,Je);for(const f of sm){const x=Math.cos(f),_=Math.sin(f),m=-_,p=x,v=i*.15,w=i*.68,y=i*.055,S=[[m*y,p*y,y],[-m*y,-p*y,y],[0,0,-y]];for(const[b,T,g]of S)r.strut(x*v+b,_*v+T,g,x*w+b,_*w+T,g,i*.018);for(let b=0;b<=4;b++){const T=v+(w-v)*b/4;for(let g=0;g<3;g++){const M=S[g],E=S[(g+1)%3];r.strut(x*T+M[0],_*T+M[1],M[2],x*T+E[0],_*T+E[1],E[2],i*.012)}}r.pipe(x*v,_*v,0,x*w,_*w,0,i*.025,ge),r.sphere(i*.075,x*i*.72,_*i*.72,0,ge,1,12)}}else{a(i*.07,i*1.2,-i*.15,fe,10);for(const[f,x,_,m,p,v]of[[.28,.17,.26,0,0,ge],[0,.2,.22,.02,-.01,Je],[-.24,.15,.24,-.02,.02,ge],[-.5,.12,.18,0,0,ge]]){r.cyl(i*x,i*x,i*_,i*f,v===Je?ge:v,16,i*m,i*p,.85+s()*.25);for(const w of[-.5,.5])r.cyl(i*x*1.04,i*x*1.04,i*.02,i*(f+w*_),fe,16,i*m,i*p)}a(i*.205,i*.1,0,Je)}a(i*.1,i*.12,i*.42,fe,12),r.greeble(i*.36,i*.36,i*.5,0,0,0,6);for(const f of om(e)){const[x,_,m]=f.p,[p,v]=f.n;r.boom(x*i-p*i*.1,_*i-v*i*.1,m*i,[p,v,0],i*.1,i*.09,ge,.95),r.boom(x*i-p*i*.01,_*i-v*i*.01,m*i,[p,v,0],i*.02,i*.13,fe)}r.truss(0,0,-i*.75,-i*.3,i*.14,3,i*.018),a(i*.09,i*.18,-i*.68,fe,12),r.cyl(i*.16,i*.1,i*.03,-i*.56,fe,16),r.radiator(i*.08,0,-i*.66,i*.42,i*.2,.75+e*.4,3,i*.01),r.radiator(-i*.08,0,-i*.64,i*.32,i*.16,Math.PI+.9+e*.3,2,i*.01);const[c,o,l]=r.boom(-i*.07,i*.07,-i*.45,[-.6,.6,-.2],i*.4,i*.022);r.dish(i*.1,c,o,l,[-.4,.6,.5]),r.light(0,0,i*.49,dn,i*.05),r.light(i*.2,0,-i*.1,Ki,i*.04),r.light(-i*.2,0,-i*.1,yi,i*.04);const u=kr(r.build(1,Ho(i)),t);u.userData.spin=.015;const h=u.userData.set,d={S:i,uT:t,parts:[],wip:[],last:["#6a7080",1,!1]};return u.userData.station=d,u.userData.set=(f,x,_)=>{d.last=[f,x,_],h(f,x,_);for(const m of d.parts)m.userData.set?.(f,x,_)},u}const Ho=n=>7/Math.max(n*2.5,1);function _0(n,e,t){const i=n.userData.station;for(const c of i.parts)c.removeFromParent();i.parts.length=0,i.wip.length=0,n.userData.rotor=null;const r=i.S;let s=0;for(const[c,o]of e.entries()){const l=un(o.type.length*13+c*7+o.level);let u=null,h=null;if(o.type==="shipyard")h=m2(l,r,s++);else if(o.type==="lab")v2(l,r,o.level);else if(o.type==="bureau")x2(l,r,o.level);else if(o.type==="defence")_2(l,r,o.level);else if(o.type==="habitat")u=y2(l,r,o.level,o.done);else continue;const d=l.build(1,Ho(r)),f=o.done||!t?kr(d,i.uT):new zt(d,t);if(n.add(f),i.parts.push(f),u&&f.userData.set){const x=kr(u.build(1,Ho(r)),i.uT);x.position.set(0,0,0),x.userData.spin=.22,f.add(x);const _=f.userData.set;f.userData.set=(m,p,v)=>{_(m,p,v),x.userData.set(m,p,v)},n.userData.rotor=x}if(h&&f.userData.set){const x=h.map(m=>kr(m.build(1,Ho(r)),i.uT));for(const m of x)f.add(m);const _=f.userData.set;f.userData.set=(m,p,v)=>{_(m,p,v);for(const w of x)w.userData.set(m,p,v)},i.wip.push(x)}f.userData.set?.(...i.last)}const a=e.reduce((c,o)=>c+(o.done?o.type==="shipyard"?1:o.level:0),0);if(a>=2){const c=un(400+a);for(let l=0;l<Math.min(5,a-1);l++){const u=.3+l*1.27;c.radiator(Math.cos(u)*r*.08,Math.sin(u)*r*.08,-r*(.4+l%2*.22),r*(.3+l*.04),r*.16,u,2,r*.01)}a>=4&&(c.cyl(r*.07,r*.07,r*.16,-r*.5,fe,12,r*.15,-r*.12),c.strut(0,0,-r*.5,r*.15,-r*.12,-r*.5,r*.03));const o=kr(c.build(1,Ho(r)),i.uT);n.add(o),i.parts.push(o),o.userData.set(...i.last)}}function m2(n,e,t=0){const i=g2,r=i*.45,s=i*.36,a=i*.03,c=e*.42+i*.13,o=c+i*1.7,l=t*(r*2+i*.2);t===0?n.truss(0,0,e*.42,c,i*.16,1,i*.02):n.box(l-r,a*1.5,a*1.5,(l-r)/2,-s,c+i*.2,fe);for(const m of[-1,1])for(const p of[-1,1])n.box(a,a,o-c,l+m*r,p*s,(c+o)/2,fe);const u=5;for(let m=0;m<=u;m++){const p=c+(o-c)*m/u;for(const v of[-1,1])n.box(r*2,a,a,l,v*s,p,fe),m<u&&n.box(a,s*2,a,l+v*r,0,p,fe);m<u&&m%2&&n.strut(l-r,-s,p,l-r,s,p+(o-c)/u,a*.8)}n.box(r*2,i*.04,i*.18,l,s,c+i*.05,Je);const h=un(77+t*5),d=un(78+t*5),f=un(79+t*5),x=c+i*.2,_=o-i*.15;h.cyl(i*.05,i*.05,_-x,(x+_)/2,fe,10,l,0);for(const[m,p]of[[.3,.35],[-.3,.85],[.3,1.25]])h.light(l+i*m,s*.5,c+i*p,dn,i*.035);for(let m=0;m<7;m++){const p=x+(_-x)*(m+.5)/7;h.add(new ki(i*.2,i*.012,4,16,m>3?Math.PI*2:Math.PI*1.1).translate(l,0,p),fe,.9)}for(let m=0;m<3;m++)d.box(i*.016,i*.26,i*.18,l+i*.2,0,_-i*(.15+m*.2),m===1?Je:ge);for(let m=0;m<3;m++)d.box(i*.016,i*.26,i*.18,l-i*.2,0,_-i*(.15+m*.2),ge);f.cyl(i*.1,i*.17,i*.2,x-i*.02,fe,14,l,0);for(let m=0;m<3;m++)f.box(i*.26,i*.016,i*.18,l,i*.2,_-i*(.75+m*.2),m===0?Je:ge);return n.box(r*2.1,i*.05,i*.07,l,s+i*.05,c+i*.95,ge),n.box(i*.1,i*.08,i*.12,l-i*.12,s,c+i*.95,fe),n.box(i*.025,i*.26,i*.025,l-i*.12,s-i*.16,c+i*.95,fe),n.light(l+r,s,o,Ki,i*.04),n.light(l-r,-s,o,yi,i*.04),n.light(l-r,s,o,dn,i*.045),[h,d,f]}const g2=.28;function v2(n,e,t){n.boom(e*.18,0,e*.05,[1,0,0],e*.5,e*.06,ge,.9);const i=e*.85;n.cyl(e*.17,e*.17,e*.48,e*.05,ge,16,i,0),n.cyl(e*.12,e*.17,e*.08,e*.33,ge,16,i,0),n.cyl(e*.175,e*.175,e*.14,-e*.05,Je,16,i,0);for(let c=0;c<8;c++){const o=c/8*Math.PI*2;n.box(e*.02,e*.02,e*.05,i+Math.cos(o)*e*.172,Math.sin(o)*e*.172,e*.15,yn)}const[r,s,a]=n.boom(i+e*.12,e*.1,e*.2,[1,.6,.4],e*.5,e*.025);if(n.box(e*.07,e*.07,e*.07,r,s,a,fe,.7),n.sphere(e*.04,r,s+e*.06,a,ge,1,10),t>=2&&(n.cyl(e*.12,e*.12,e*.36,-e*.02,ge,14,i,-e*.32),n.cyl(e*.125,e*.125,e*.08,-e*.02,Je,14,i,-e*.32),n.strut(i,-e*.17,-e*.02,i,-e*.2,-e*.02,e*.08,ge,.9),n.cyl(e*.06,e*.07,e*.34,e*.3,ge,14,i,-e*.32),n.cyl(e*.05,e*.05,e*.01,e*.475,fe,14,i,-e*.32)),t>=3){const[c,o,l]=n.boom(i+e*.17,-e*.02,-e*.1,[1,-.15,-.2],e*.8,e*.022);n.frame(e*.24,e*.06,e*.24,c,o,l,e*.012),n.box(e*.12,e*.1,e*.12,c,o+e*.08,l,ge,.9),n.radiator(c,o+e*.03,l-e*.1,e*.2,e*.12,-Math.PI/2,2,e*.008);for(const u of[-.12,.16])n.dish(e*.13,i+e*.12,e*.16,e*u,[.4,1,.2])}n.light(i,e*.18,e*.33,dn,e*.04)}function x2(n,e,t){n.boom(-e*.18,0,-e*.05,[-1,0,0],e*.38,e*.1,fe,.8);const i=-e*.72;n.oct(e*.34,e*.3,e*.44,-e*.05,.9,i,0),n.box(e*.36,e*.03,e*.3,i,e*.16,-e*.05,Je);for(const c of[-.2,.1])n.oct(e*.37,e*.33,e*.04,e*c,1,i,0,fe);n.box(e*.01,e*.02,e*.12,i-e*.17,e*.02,-e*.05,yn),n.cyl(e*.05,e*.06,e*.06,e*.1,fe,12,i,e*.2),n.box(e*.08,e*.06,e*.06,i,e*.24,e*.1,ge,.9),n.cyl(e*.022,e*.022,e*.01,e*.135,yn,10,i,e*.24);const[r,s,a]=n.boom(i-e*.1,-e*.12,-e*.15,[-.6,-1,-.2],e*.32,e*.02);n.sphere(e*.05,r,s,a,fe,.7,10),t>=2&&(n.strut(i,0,-e*.27,i,0,-e*.4,e*.1,ge,.9),n.oct(e*.26,e*.24,e*.26,-e*.52,.9,i,0),n.box(e*.27,e*.025,e*.18,i,e*.13,-e*.52,Je),n.add(new Tn(e*.03,e*.26,e*.3).rotateZ(-.35).translate(i-e*.2,e*.08,-e*.52),fe,.6),n.sphere(e*.06,i+e*.05,e*.15,-e*.62,ge,1.12,12)),n.light(i-e*.17,e*.15,-e*.27,yi,e*.035)}function _2(n,e,t){const i=[[0,1],[0,-1],[0,1]];for(let r=0;r<Math.min(t,3);r++){const[s,a]=i[r],c=r===2?-e*.3:e*.1,o=f=>[s*f,a*f];n.boom(...o(e*.16),c,[s,a,0],e*.32,e*.06,fe,.85);const[l,u]=o(e*.36);n.box(Math.abs(a)*e*.2+Math.abs(s)*e*.14,Math.abs(s)*e*.2+Math.abs(a)*e*.14,e*.18,l,u,c,ge,.85),n.box(Math.abs(a)*e*.21+e*.01,Math.abs(s)*e*.21+e*.01,e*.04,l,u,c,Je);const[h,d]=o(e*.5);n.sphere(e*.08,h,d,c,ge,.9,12);for(const f of[-1,1]){const x=h+-a*f*e*.03,_=d+s*f*e*.03;n.boom(x,_,c,[s,a,.35],e*.36,e*.025,fe,.6)}n.light(...o(e*.6),c-e*.06,yi,e*.03)}}function y2(n,e,t,i){const r=Math.min(t,3),s=[-1.15,-1.55,-1.95].slice(0,r).map(c=>c*e);n.truss(0,0,s[r-1]-e*.12,-e*.75,e*.12,2+r,e*.016);const a=un(91+t);for(const c of s)n.cyl(e*.16,e*.16,e*.2,c,fe,16),a.hoop(e*.85,e*.16,e*.26,36,c,5,e*.16,e*.012);if(!i){for(const c of s)n.hoop(e*.85,e*.16,e*.26,24,c,0,0,0);return null}return a}function om(n){const e=[];for(const[t,i]of sm.entries()){const r=n===1?.8:n===0?.36:[.26,.29,.26,.24][t],s=n===1?0:n===0?-.12:[.28,0,-.24,0][t];e.push({p:[Math.cos(i)*r,Math.sin(i)*r,s],n:[Math.cos(i),Math.sin(i),0]})}return e}function M2(n,e,t,i){const r=e.size,s=.5,a=[un(11),un(12),un(13)],[c,o,l]=a;let u=new Ft,h=!1,d=!1,f=null;if(n==="sundiver"){h=!0;const m=r*1.6;c.cyl(s*.16,s*.16,s*.7,m-s*.3,ge,16),c.cyl(s*.17,s*.17,s*.12,m-s*.3,Je,16);for(const p of[0,Math.PI/2,Math.PI,Math.PI*1.5])c.radiator(Math.cos(p)*s*.16,Math.sin(p)*s*.16,m-s*.45,s*.7,s*.35,p,3,s*.012);c.light(0,0,m-s*.7,dn,s*.04),o.dish(s*.95,0,0,m+s*.05,[0,0,1]),o.add(new ki(s*.95,s*.03,6,48).translate(0,0,m+s*.35),fe,.7);for(let p=0;p<3;p++){const v=p/3*Math.PI*2+.4,w=Math.cos(v)*s*.6,y=Math.sin(v)*s*.6,S=m+s*(1.3+p*.25);l.add(new mt(s*.01,s*.2,s*.16,16).rotateX(Math.PI/2).translate(w,y,S),ge,1.15),l.cyl(s*.05,s*.06,s*.22,S-s*.18,fe,10,w,y),l.box(s*.12,s*.02,s*.08,w,y,S-s*.22,Je)}}else if(n==="massdriver"){d=!0;const m=s*3.2,p=S=>Math.sqrt(Math.max(0,r*r-S*S))-r,v=S=>s*.12+(S+m/2)/m*s*.75,w=12;for(let S=0;S<=w;S++){const b=-m/2+m*S/w,T=v(b);for(const g of[-1,1])c.strut(b,T,g*s*.08,b,p(b)-s*.02,g*s*.14,s*.03);if(S<w){const g=b+m/w;for(const M of[-1,1])c.strut(b,T,M*s*.05,g,v(g),M*s*.05,s*.04,ge,.9);o.add(new ki(s*.11,s*.025,6,16).rotateY(Math.PI/2).rotateZ(Math.atan2(s*.75,m)).translate(b+m/w/2,(T+v(g))/2,0),S%3===0?Je:fe,.9)}}const y=-m/2-s*.35;l.box(s*.45,s*.3,s*.5,y,p(y)+s*.15,0,ge),l.box(s*.47,s*.05,s*.52,y,p(y)+s*.3,0,Je);for(const S of[-.18,0,.18])l.add(new mt(s*.06,s*.06,s*.25,10).translate(y-s*.32,p(y)+s*.12,s*S),ge,.9);for(const S of[-.32,.32])l.radiator(y,p(y)+s*.28,s*S,s*.4,s*.3,Math.PI/2,2,s*.012);l.box(s*.2,s*.07,s*.07,-m*.2,v(-m*.2)+s*.06,0,Je),l.light(m/2,v(m/2)+s*.06,0,dn,s*.04)}else if(n==="ringyard"){const m=r*1.45,p=s*.2;for(const[v,w]of[[-p,-p],[-p,p],[p,-p],[p,p]])c.add(new ki(m+v,s*.03,5,160).rotateX(Math.PI/2).translate(0,w,0),fe);c.add(new ki(m,s*.06,6,160).rotateX(Math.PI/2).scale(1,.4,1),ge,.9);for(let v=0;v<72;v++){const w=v/72*Math.PI*2,y=Math.cos(w),S=Math.sin(w);c.strut(y*(m-p),-p,S*(m-p),y*(m+p),p,S*(m+p),s*.03),c.strut(y*(m-p),p,S*(m-p),y*(m-p),-p,S*(m-p),s*.025),c.strut(y*(m+p),p,S*(m+p),y*(m+p),-p,S*(m+p),s*.025),v%12===0&&c.box(s*.5,s*.04,s*.5,y*m,p+s*.02,S*m,Je)}for(let v=0;v<3;v++){const w=v/3*Math.PI*2;o.add(new mt(s*.3,s*.3,s*.7,16).translate(Math.cos(w)*m,0,Math.sin(w)*m),ge),o.add(new mt(s*.31,s*.31,s*.15,16).translate(Math.cos(w)*m,0,Math.sin(w)*m),Je),o.radiator(Math.cos(w)*m,s*.3,Math.sin(w)*m,s*.6,s*.4,Math.PI/2,3,s*.015),o.light(Math.cos(w)*m,s*.22,Math.sin(w)*m,dn,s*.04)}for(let v=0;v<6;v++){const w=v/6*Math.PI*2+Math.PI/6,y=Math.cos(w),S=Math.sin(w),b=new U(y*(m+s*.45),0,S*(m+s*.45)),T=new U(-S,0,y),g=new U(y,0,S),M=new U(0,1,0),E=s*.45,D=s*.2,R=s*.2,A=(z,V,oe)=>b.clone().addScaledVector(T,z).addScaledVector(g,V).addScaledVector(M,oe),L=(z,V)=>l.strut(z.x,z.y,z.z,V.x,V.y,V.z,s*.014);for(const z of[-D,D])for(const V of[-R,R])L(A(-E,z,V),A(E,z,V));for(const z of[-E,E])for(const V of[-R,R])L(A(z,-D,V),A(z,D,V));for(const z of[-E,E])for(const V of[-D,D])L(A(z,V,-R),A(z,V,R));const k=new mt(s*.1,s*.1,s*.7,10).applyQuaternion(new Yn().setFromUnitVectors(M,T)).translate(b.x,b.y,b.z);l.add(k,v%2?ge:Je),l.strut(y*(m+p),0,S*(m+p),y*(m+s*.25),0,S*(m+s*.25),s*.05)}}else if(n==="citadel"){const m=r*1.4,p=s*1.8;for(let v=0;v<6;v++){const w=a[Math.floor(v/2)],y=v/6*Math.PI*2+.3,S=Math.cos(y),b=Math.sin(y),T=S*m,g=b*m;w.add(new mt(p*.24,p*.28,p*.14,6).translate(T,0,g),ge),w.add(new mt(p*.29,p*.29,p*.03,6).translate(T,-p*.07,g),fe),w.add(new mt(p*.245,p*.245,p*.03,6).translate(T,p*.06,g),Je);for(const M of[-1,1]){const E=T+-b*M*p*.1,D=g+S*M*p*.1;w.add(new mt(p*.06,p*.07,p*.05,10).translate(E,p*.08,D),fe),w.box(p*.1,p*.07,p*.1,E,p*.13,D,ge,.85),w.boom(E+S*p*.04,p*.14,D+b*p*.04,[S,.12,b],p*.36,p*.03,fe,.6)}w.boom(T-S*p*.12,p*.07,g-b*p*.12,[0,1,0],p*.14,p*.02),w.sphere(p*.05,T-S*p*.12,p*.23,g-b*p*.12,ge,1.1,10),w.radiator(T-S*p*.26,0,g-b*p*.26,p*.22,p*.14,Math.PI/2,2,p*.01),w.light(T,-p*.1,g,yi,p*.03)}}else if(n==="array"){u=y0(r*1.6,.9),c.sphere(s*.16,0,0,0,ge,1,16),c.cyl(s*.1,s*.1,s*.5,0,fe,12),c.cyl(s*.17,s*.17,s*.06,0,Je,16);for(let m=0;m<3;m++){const p=m/3*Math.PI*2+Math.PI/2,v=Math.cos(p),w=Math.sin(p),y=s*1.2;for(const[b,T]of[[.05,.05],[-.05,.05],[0,-.06]])c.strut(v*s*.15+b*s*-w,T*s,w*s*.15+b*s*v,v*y+b*s*-w,T*s,w*y+b*s*v,s*.018);const S=m<2?o:l;S.dish(s*.38,v*y,0,w*y,[v*.25,1,w*.25]),S.box(s*.12,s*.08,s*.12,v*y,-s*.06,w*y,ge,.9)}l.cyl(s*.03,s*.04,s*.2,-s*.35,ge,10),l.light(0,s*.2,0,dn,s*.04)}else if(n==="college"){u=y0(r*1.55,2.4),c.cyl(s*.1,s*.1,s*1.3,0,ge,14);for(const p of[-.45,-.2,.25,.5])c.cyl(s*.17,s*.17,s*.1,s*p,p>0?Je:ge,16);for(const p of[.38])c.add(new $i(s*.15,16,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).translate(0,0,s*p),ge,1.1);for(let p=0;p<8;p++){const v=p/8*Math.PI*2;c.box(s*.03,s*.03,s*.05,Math.cos(v)*s*.172,Math.sin(v)*s*.172,s*.25,yn)}o.cyl(s*.14,s*.14,s*.12,0,fe,16);for(let p=0;p<4;p++){const v=p/4*Math.PI*2;o.box(s*.1,s*.1,s*.14,Math.cos(v)*s*.2,Math.sin(v)*s*.2,-s*.62,ge,.9)}const m=un(14);m.hoop(s*.75,s*.12,s*.18,40,0,4,s*.1,s*.012),f=m;for(let p=0;p<4;p++)l.box(s*.06,s*.06,s*.06,s*(1.1+p%2*.2),s*(.3-p*.2),s*.4,fe,.7);for(const[p,v]of[[.12,.12],[-.12,-.12]])l.box(s*.05,s*.05,s*.3,s*p,s*v,-s*.85,ge),l.box(s*.06,s*.02,s*.1,s*p,s*v,-s*.8,Je);l.light(0,0,s*.68,dn,s*.04)}const x=new zn,_=[];for(const m of a){const p=m.build(1,7);p.applyMatrix4(u);const v=kr(p,t),w=new zt(p,i);x.add(v,w),_.push([v,w])}if(f){const m=f.build(1,7),p=kr(m,t);p.applyMatrix4(u);const v=new zt(m,i);v.applyMatrix4(u),x.add(p,v),_[1].push(p,v),x.userData.spinner=p}return x.userData={...x.userData,stages:_,faceSun:h,surface:d},x.userData.set=(m,p)=>{for(const v of _)for(const w of v)w.userData.set?.(m,p,!0)},x}function y0(n,e){const t=new U(Math.cos(e),0,Math.sin(e)),i=new U(0,1,0),r=new U().crossVectors(t,i);return new Ft().makeBasis(r,t,i).setPosition(t.clone().multiplyScalar(n))}function b2(n,e,t){n.userData.stages.forEach((i,r)=>{const s=t||e>=(r+1)/3;for(let a=0;a<i.length;a+=2)i[a].visible=s,i[a+1].visible=!s})}function S2(n,e,t,i,r,s,a,c){var S,b;const o=cm(e),l=am(),u=un(e.id*17+t*101+r);u.r;const h=n==="shipyard"||n==="skimmer",d=[],f=(T,g,M,E,D,R,A=ge,L=12,k)=>u.add(new mt(T,g,M,L).translate(E,D+M/2,R),A,k),x=(T,g,M,E,D=ge,R)=>u.add(new $i(T,16,8,0,Math.PI*2,0,Math.PI/2).translate(g,M,E),D,R),_=(T,g,M,E,D,R=1,A="z")=>{for(let L=0;L<D;L++){const k=(L-(D-1)/2)*(T/D);A==="z"?u.box(o*.035,o*.025,o*.006,g+k,M,E+R*.003,yn):u.box(o*.006,o*.025,o*.035,g+R*.003,M,E+k,yn)}};let m=null;if(n==="shipyard"){m=M0(e.size*1.5,.4+t*1.6);const g=7*.078,M=1.2*.078,E=1*.078,D=.078*.1;for(const z of[-1,1])for(const V of[-1,1])u.box(g,D,D,0,z*E,V*M,fe);for(let z=0;z<=7;z++){const V=-g/2+g*z/7;for(const oe of[-1,1])u.box(D,D,M*2,V,oe*E,0,fe);for(const oe of[-1,1])u.box(D,E*2,D,V,0,oe*M,fe);if(z<7)for(const oe of[-1,1])u.strut(V,-E,oe*M,V+g/7,E,oe*M,D*.7)}u.box(g*.18,D*2.2,M*2.1,g*.41,E,0,Je),u.box(g*.18,D*2.2,M*2.1,-g*.41,-E,0,Je),u.box(.078*.35,.078*.25,M*2.3,.078*.8,E+.078*.18,0,ge),u.box(.078*.2,.078*.2,.078*.3,.078*.8,E,.078*.3,fe),u.box(.078*.08,E*.8,.078*.08,.078*.8,E*.55,.078*.3,fe);const R=-g/2-1.9*.078;u.strut(-g/2,0,0,R+.078*.6,0,0,.078*.22,fe),u.add(new mt(.078*.6,.078*.6,.078*1.6,16).rotateX(Math.PI/2).translate(R,0,0),ge),u.add(new mt(.078*.62,.078*.62,.078*.4,16).rotateX(Math.PI/2).translate(R,0,0),Je);for(let z=0;z<6;z++){const V=z/6*Math.PI*2;u.box(.078*.12,.078*.06,.078*.06,R+Math.cos(V)*.078*.61,Math.sin(V)*.078*.61,.078*.5,yn)}u.solar(R,.078*.6,0,.078*2.2,.078*1,Math.PI/2,.078*.04),u.radiator(R,-.078*.6,0,.078*1.6,.078*.9,-Math.PI/2,3,.078*.04),u.dish(.078*.45,R-.078*.5,0,.078*.9,[-.4,.3,1]),u.light(g/2,E,M,Ki,.078*.12),u.light(g/2,-E,-M,yi,.078*.12),u.light(R,.078*.7,0,dn,.078*.14);const A=un(e.id*7+3),L=un(e.id*7+4),k=un(e.id*7+5);A.add(new mt(.078*.18,.078*.18,g*.7,10).rotateZ(Math.PI/2),fe);for(const[z,V]of[[-.2,1],[.05,-1],[.25,1]])A.light(g*z,E*.6,M*.5*V,dn,.078*.1);for(let z=0;z<7;z++)A.add(new ki(.078*.62,.078*.05,4,18,z<4?Math.PI*2:Math.PI*1.1).rotateY(Math.PI/2).translate(-g*.3+z*g*.09,0,0),fe,.9);for(let z=0;z<4;z++)L.add(new mt(.078*.66,.078*.66,g*.08,16,1,!0,0,Math.PI*1.3).rotateZ(Math.PI/2).translate(-g*.28+z*g*.09,0,0),z===1?Je:ge);for(let z=4;z<7;z++)k.add(new mt(.078*.66,.078*.66,g*.08,16,1,!0,0,Math.PI*2).rotateZ(Math.PI/2).translate(-g*.28+z*g*.09,0,0),z===5?Je:ge);k.add(new mt(.078*.3,.078*.55,.078*.7,16,1,!0).rotateZ(Math.PI/2).translate(-g*.4,0,0),fe,.7),d.push([A,"wip"],[L,"wip"],[k,"wip"])}else if(n==="skimmer"){const T=l*.22,g=e.size*1.03;m=M0(g,.3+t*1.1);for(let D=0;D<r;D++){const R=(D-(r-1)/2)*5*T,A=Math.sqrt(g*g-R*R)-g+T*.6;u.add(new $i(T,14,8).scale(2.4,.95,.95).translate(R,A+T*.9,0),ge,1.05),u.add(new mt(T*.99,T*.99,T*.7,18,1,!0).rotateZ(Math.PI/2).scale(1,.96,.96).translate(R,A+T*.9,0),Je),u.box(T*1.4,T*.35,T*.45,R,A,0,ge,.85),u.add(new mt(T*.45,T*.2,T*.8,14,1,!0).rotateZ(Math.PI/2).translate(R+T*1,A-T*.05,0),fe,.7),u.strapped(T*.16,T*.5,R-T*.25,A-T*.28,0,!1);for(const L of[-1,1])u.strut(R+L*T*.5,A+T*.15,0,R+L*T*.8,A+T*.55,0,T*.05);u.light(R,A-T*.2,T*.25,dn,T*.1)}const M=T*5.5,E=T*(3+r*1.8);u.truss(0,M,-E/2,E/2,T*.45,3+r,T*.05),u.add(new mt(T*.4,T*.4,T*.9,14).rotateX(Math.PI/2).translate(0,M,E/2+T*.4),ge),u.add(new mt(T*.28,T*.28,T*.1,14).rotateX(Math.PI/2).translate(0,M,E/2+T*.9),fe);for(let D=0;D<r+1;D++){const R=-E/2+T*1.1+D*T*1.5;for(const A of[-1,1])u.strapped(T*.36,T*.7,A*T*.6,M,R,D%2===0&&A>0)}u.radiator(0,M+T*.3,-E*.1,T*2,E*.6,Math.PI/2,2+r,T*.04),u.tank(T*.18,T*.5,T*1.4,M*.55,0,ge),u.light(0,M+T*.5,E/2+T*.9,Ki,T*.12)}else if(n==="defence"){const T=o*(.5+r*.14);f(T,T*1.12,o*.16,0,0,0,fe,8),f(T*1.01,T*1.01,o*.03,0,o*.16,0,Je,8),u.box(T*.7,o*.2,T*.5,0,o*.19+o*.1,0,ge,.9),u.box(T*.72,o*.04,T*.08,0,o*.3,T*.2,fe);const g=r*2;for(let M=0;M<g;M++){const E=M/g*Math.PI*2+.4,D=Math.cos(E)*T*.72,R=Math.sin(E)*T*.72,A=o*.19;f(o*.11,o*.13,o*.08,D,A,R,fe,8),u.add(new Tn(o*.17,o*.1,o*.15).rotateY(-E).translate(D,A+o*.13,R),ge),u.boom(D+Math.cos(E)*o*.06,A+o*.15,R+Math.sin(E)*o*.06,[Math.cos(E),.45,Math.sin(E)],o*.42,o*.04,fe,.6)}u.boom(-T*.15,o*.3,-T*.15,[0,1,0],o*.5,o*.04),u.sphere(o*.1,-T*.15,o*.82,-T*.15,ge,1.1,12),u.box(o*.04,o*.04,o*.04,T*.6,o*.2,0,yi)}else if(n==="exchange"){f(o*.7,o*.8,o*.12,0,0,0,fe,8),f(o*.5,o*.6,o*.18,0,o*.12,0,ge,8),f(o*.51,o*.51,o*.04,0,o*.24,0,Je,8),f(o*.16,o*.22,o*.5,0,o*.3,0,ge,10);for(const E of[.5,2.6,4.4])u.radiator(Math.cos(E)*o*.55,o*.14,Math.sin(E)*o*.55,o*.28,o*.22,Math.PI/2,2,o*.015);_(o*.8,0,o*.2,o*.6,8);const T=o*3.6,g=o*2.5;for(const E of[-1,1])u.add(new mt(o*.018,o*.018,T-o*.8,5).translate(E*o*.05,o*.8+(T-o*.8)/2,0),fe);for(const E of[1.25,1.9,3.1])u.box(o*.16,o*.2,o*.12,0,o*E,0,ge,.9),u.box(o*.12,o*.03,o*.004,0,o*E,o*.062,yn);const M=o*.95;f(M*.32,M*.32,M*.4,0,g-M*.2,0,ge,16),f(M*.33,M*.33,M*.1,0,g-M*.05,0,Je,16);for(const E of[-1,1]){const[D,R]=u.boom(E*M*.3,g,0,[E,0,0],M*.45,M*.07,ge,.9);u.box(M*.06,M*.16,M*.16,D,R,0,fe),u.strapped(M*.07,M*.16,E*M*.5,g-M*.14,0,E>0)}if(r>=2){u.add(new ki(M*1,M*.08,8,48).rotateX(Math.PI/2).translate(0,g,0),ge);for(let E=0;E<6;E++){const D=E/6*Math.PI*2+.26;u.strut(Math.cos(D)*M*.32,g,Math.sin(D)*M*.32,Math.cos(D)*M*.95,g,Math.sin(D)*M*.95,M*.04),u.frame(M*.28,M*.18,M*.28,Math.cos(D)*M*1.18,g,Math.sin(D)*M*1.18,M*.02),E%2===0&&u.sphere(M*.09,Math.cos(D)*M*1.18,g,Math.sin(D)*M*1.18,E===0?Je:ge,1,10)}f(M*.4,M*.4,M*.3,0,g-M*.6,0,ge,16);for(let E=0;E<12;E++){const D=E/12*Math.PI*2;u.box(M*.04,M*.03,M*.05,Math.cos(D)*M*1.08,g,Math.sin(D)*M*1.08,yn)}}u.box(o*.5,o*.35,o*.4,0,T,0,fe,.7),u.box(o*.3,o*.25,o*.3,o*.22,T+o*.2,o*.1,fe,.6),u.box(o*.05,o*.05,o*.05,0,T+o*.25,0,dn)}else if(n==="habitat")if(e.kind==="asteroid"){for(const g of[-1,1])f(o*.06,o*.09,o*.5,g*o*(.35+r*.12),0,0,fe,6);u.add(new mt(o*.05,o*.05,o*(.9+r*.25),8).rotateZ(Math.PI/2).translate(0,o*.5,0),fe);const T=un(e.id*5+r);for(let g=0;g<r;g++){const M=(g-(r-1)/2)*o*.3;T.add(new mt(o*.3,o*.3,o*.24,20).rotateZ(Math.PI/2).translate(M,0,0),g===1?Je:ge);for(let E=0;E<10;E++){const D=E/10*Math.PI*2;T.box(o*.12,o*.025,o*.025,M,Math.cos(D)*o*.302,Math.sin(D)*o*.302,yn)}}d.push([T,"spin",[0,o*.5,0]])}else{f(o*(.6+r*.18),o*(.66+r*.18),o*.05,0,0,0,fe,10),x(o*.28,0,o*.05,0,ge,1.05),f(o*.29,o*.29,o*.04,0,o*.05,0,Je,16),_(o*.3,0,o*.12,o*.28,6);const T=(M,E,D,R,A,L=0)=>{u.add(new Tn(D,R,A).rotateY(L).translate(M,o*.05+R/2,E),ge,.95);for(let k=0;k<Math.max(1,Math.round(R/(o*.08)));k++)u.add(new Tn(D*.85,o*.018,A+o*.008).rotateY(L).translate(M,o*.09+k*o*.08,E),yn)},g=(M,E,D,R)=>u.strut(M,o*.09,E,D,o*.09,R,o*.07,ge,.85);T(o*.48,0,o*.22,o*.16,o*.4),g(o*.28,0,o*.37,0),T(-o*.42,o*.18,o*.3,o*.12,o*.2,.4),g(-o*.26,o*.1,-o*.3,o*.14),r>=2&&(T(-o*.2,-o*.5,o*.18,o*.5,o*.18),u.box(o*.2,o*.03,o*.2,-o*.2,o*.56,-o*.5,Je),g(-o*.1,-o*.26,-o*.17,-o*.41),x(o*.18,o*.42,o*.05,-o*.48,ge,1.05),g(o*.3,-o*.2,o*.38,-o*.36)),r>=3&&(x(o*.34,-o*.62,o*.05,-o*.18,ge,1.05),f(o*.35,o*.35,o*.04,-o*.62,o*.05,-o*.18,Je,16),T(o*.15,o*.55,o*.5,o*.1,o*.16),T(o*.15,o*.55,o*.36,o*.2,o*.1),T(o*.72,-o*.2,o*.16,o*.7,o*.16),g(o*.06,o*.27,o*.12,o*.46));for(const M of[2,5])u.radiator(Math.cos(M)*o*(.6+r*.12),o*.05,Math.sin(M)*o*(.6+r*.12),o*.22,o*.2,Math.PI/2,2,o*.012);u.box(o*.04,o*.04,o*.04,0,o*.35,0,dn)}else if(n==="bureau"){f(o*.4,o*.48,o*.24,0,0,0,ge,8),f(o*.41,o*.41,o*.035,0,o*.18,0,Je,8),u.box(o*.3,o*.025,o*.008,0,o*.12,o*.42,yn),f(o*.13,o*.16,o*.12,o*.62,0,-o*.1,fe,8),u.sphere(o*.2,o*.62,o*.3,-o*.1,ge,1.12,16),f(o*.06,o*.08,o*.22,-o*.18,o*.24,o*.12,fe,8),u.add(new mt(o*.08,o*.08,o*.16,12).rotateX(.8).translate(-o*.18,o*.52,o*.16),ge),u.add(new mt(o*.055,o*.055,o*.01,12).rotateX(.8).translate(-o*.18,o*.579,o*.221),yn);const T=-o*.62,g=-o*.3;for(const M of[0,2.1,4.2])u.strut(T+Math.cos(M)*o*.1,0,g+Math.sin(M)*o*.1,T+Math.cos(M)*o*.03,o*1.15,g+Math.sin(M)*o*.03,o*.02);for(let M=1;M<5;M++)f(o*(.1-M*.016),o*(.1-M*.016),o*.012,T,o*M*.23,g,fe,3);u.box(o*.04,o*.04,o*.04,T,o*1.18,g,dn),r>=2&&(u.strut(o*.3,o*.1,o*.25,o*.55,o*.1,o*.52,o*.12,ge,.9),f(o*.26,o*.3,o*.2,o*.68,0,o*.68,ge,8),f(o*.27,o*.27,o*.03,o*.68,o*.15,o*.68,Je,8),u.add(new Tn(o*.42,o*.36,o*.03).rotateX(-.5).translate(o*.68,o*.38,o*.92),fe,.6),u.frame(o*.44,o*.03,o*.03,o*.68,o*.22,o*.86,o*.015),u.sphere(o*.13,-o*.15,o*.18,-o*.62,ge,1.12,14),f(o*.1,o*.12,o*.08,-o*.15,0,-o*.62,fe,8))}else if(n==="lab"){u.box(o*.7,o*.2,o*.36,0,o*.1,0,ge),u.box(o*.72,o*.035,o*.38,0,o*.2,0,Je),_(o*.6,0,o*.12,o*.18,8);const T=(g,M,E,D)=>{f(o*.06,o*.1,o*.3,g,0,M,fe,8),u.dish(E,g,o*.34,M,D)};if(T(-o*.55,-o*.3,o*.34,[.3,1,.5]),r>=2){u.strut(o*.35,o*.1,0,o*.6,o*.1,0,o*.1,ge,.9),u.add(new mt(o*.16,o*.16,o*.5,16).rotateZ(Math.PI/2).translate(o*.85,o*.16,0),ge),u.add(new mt(o*.165,o*.165,o*.1,16).rotateZ(Math.PI/2).translate(o*.85,o*.16,0),Je),f(o*.12,o*.14,o*.1,o*.3,0,o*.5,fe,10);for(const g of[-1,1])u.box(o*.03,o*.22,o*.05,o*.3+g*o*.11,o*.2,o*.5,fe);u.add(new mt(o*.09,o*.1,o*.55,14).rotateX(.6).translate(o*.3,o*.38,o*.55),ge,1.05),u.add(new mt(o*.07,o*.07,o*.01,14).rotateX(.6).translate(o*.3,o*.612,o*.707),fe,.4),u.box(o*.22,o*.16,o*.2,o*.85,o*.08,-o*.42,fe,.8),u.radiator(o*.85,o*.16,-o*.42,o*.3,o*.26,Math.PI/2,2,o*.012)}if(r>=3){f(o*.27,o*.27,o*.14,-o*.15,0,o*.62,ge,16),x(o*.27,-o*.15,o*.14,o*.62,ge,1.1),u.add(new Tn(o*.07,o*.28,o*.02).translate(-o*.15,o*.3,o*.88),fe,.4),u.strut(-o*.15,o*.1,o*.2,-o*.15,o*.1,o*.38,o*.1,ge,.9);for(let g=0;g<3;g++)T(-o*(.5+g*.32),-o*.75,o*.18,[.2,1,.4]);for(const[g,M]of[[-.95,.1],[-1.25,.1],[-.95,.4],[-1.25,.4]])u.box(o*.025,o*.2,o*.025,g*o,o*.1,M*o,fe);u.box(o*.36,o*.025,o*.36,-o*1.1,o*.2,o*.25,fe,.75),u.box(o*.1,o*.1,o*.1,-o*1.02,o*.27,o*.18,ge),u.sphere(o*.06,-o*1.2,o*.28,o*.34,ge,1.1,10),u.strut(-o*.35,o*.1,0,-o*.92,o*.2,o*.2,o*.05,ge,.8),u.solar(-o*.55,o*.1,-o*1.15,o*.5,o*.3,.25,o*.012)}u.box(o*.04,o*.04,o*.04,-o*.55,o*.72,-o*.3,dn)}else{const T=o*(.9+(r-1)*.45);f(T*.62,T*.7,o*.03,0,0,0,fe,14,.7);const g=(E,D)=>{u.box(o*.32,o*.08,o*.32,E,o*.04,D,fe);for(const[R,A]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.strut(E+R*o*.14,o*.08,D+A*o*.14,E+R*o*.05,o*.5,D+A*o*.05,o*.035);u.box(o*.16,o*.16,o*.16,E,o*.52,D,ge),f(o*.035,o*.035,o*.5,E,0,D,fe,6),u.box(o*.2,o*.12,o*.04,E,o*.14,D+o*.17,ge,.8)},M=(E,D)=>{for(const[R,A]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.box(o*.025,o*.2,o*.025,E+R*o*.1,o*.1,D+A*o*.1,fe);u.add(new mt(o*.17,o*.06,o*.2,4).rotateY(Math.PI/4).translate(E,o*.3,D),ge),u.add(new mt(o*.175,o*.175,o*.03,4).rotateY(Math.PI/4).translate(E,o*.41,D),Je)};if(g(-T*.3,0),M(0,-o*.12),u.box(o*.2,o*.03,o*.06,-T*.15,o*.25,-o*.06,fe),u.box(o*.16,o*.12,o*.14,o*.2,o*.06,o*.2,ge),u.box(o*.1,o*.025,o*.004,o*.2,o*.08,o*.272,yn),r>=2){g(-T*.3,-o*.45),u.box(T*.6,o*.06,o*.08,T*.1,o*.3,-o*.12,ge,.85);for(let E=0;E<3;E++)u.box(o*.03,o*.3,o*.03,T*(-.1+E*.2),o*.15,-o*.12,fe);f(o*.2,o*.2,o*.5,T*.42,0,-o*.12,ge,14),x(o*.2,T*.42,o*.5,-o*.12,ge,1.05),f(o*.205,o*.205,o*.06,T*.42,o*.36,-o*.12,Je,14)}if(r>=3){u.box(o*.5,o*.3,o*.36,-T*.05,o*.15,o*.5,ge),u.box(o*.52,o*.04,o*.38,-T*.05,o*.3,o*.5,Je),u.pipe(-T*.05,o*.3,o*.4,0,o*.42,-o*.12,o*.025);for(const E of[.38,.62])u.radiator(-T*.05-o*.25,o*.3,o*E,o*.3,o*.18,Math.PI/2+.3,2,o*.012);f(o*.16,o*.16,o*.42,T*.42,0,o*.3,ge,14),x(o*.16,T*.42,o*.42,o*.3,ge,1.05),f(o*.3,o*.32,o*.03,T*.45,0,o*.75,fe,12);for(const E of[-1,1])u.box(o*.04,o*.5,o*.04,T*.45+E*o*.3,o*.25,o*.55,fe);u.box(o*.68,o*.05,o*.06,T*.45,o*.52,o*.55,ge),u.box(o*.08,o*.08,o*.1,T*.45,o*.46,o*.55,fe),u.box(o*.04,o*.04,o*.04,T*.45+o*.3,o*.06,o*.75,Ki)}u.box(o*.04,o*.04,o*.04,-T*.3,o*.62,0,dn)}const p=T=>{if(m&&T.applyMatrix4(m),!i)return new zt(T,a);const g=kr(T,s);return g.userData.set(c,1,!0),g},v=new zn;v.userData.type=n,v.add(p(u.build(1)));for(const[T,g,M]of d){if(g==="wip"&&!i)continue;const E=p(T.build(1));g==="spin"&&(E.position.set(...M),((S=v.userData).spin||(S.spin=[])).push({mesh:E,axis:"x",rate:.5})),g==="wip"&&((b=v.userData).wip||(b.wip=[])).push(E),v.add(E)}if(h)return v.rotation.x=Math.PI/2+.35,v;const w=Ti(e.id*17+t*101+(n==="mine"?5:0)),y=new U(w()-.5,(w()-.5)*.9,w()-.5).normalize();return v.position.copy(y).multiplyScalar(e.size*(e.kind==="asteroid"?1.02:.99)),v.quaternion.setFromUnitVectors(new U(0,1,0),y),v}const am=()=>.36,cm=n=>Math.min(.86*am(),.45*n.size);function M0(n,e){const t=new U(Math.cos(e),Math.sin(e),0),i=new U(-Math.sin(e),Math.cos(e),0),r=new U(0,0,-1);return new Ft().makeBasis(i,t,r).setPosition(t.clone().multiplyScalar(n))}function w2(n,e,t,i){let r=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^Math.imul(i,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function T2(n,e,t,i){const r=Math.floor(n),s=Math.floor(e),a=Math.floor(t),c=n-r,o=e-s,l=t-a,u=c*c*(3-2*c),h=o*o*(3-2*o),d=l*l*(3-2*l),f=(_,m,p)=>_+(m-_)*p,x=(_,m,p)=>w2(r+_,s+m,a+p,i);return f(f(f(x(0,0,0),x(1,0,0),u),f(x(0,1,0),x(1,1,0),u),h),f(f(x(0,0,1),x(1,0,1),u),f(x(0,1,1),x(1,1,1),u),h),d)}function ic(n,e,t,i,r){let s=0,a=.5,c=1;for(let o=0;o<r;o++)s+=T2(n*c,e*c,t*c,i+o)*a,c*=2.03,a*=.5;return s}function lm(n,e,t=5,i=1){const r=Ti(n*97+1);let s=new xf(e,t);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=i2(s);const a=Array.from({length:5},()=>({d:new U(r()-.5,r()-.5,r()-.5).normalize(),f:.6+r()*1.2,ph:r()*6.28,a:.05+r()*.08})),c=Array.from({length:7+Math.floor(r()*5)},()=>({d:new U(r()-.5,r()-.5,r()-.5).normalize(),size:.15+r()*.3})),o=new U(1.2+r()*.6,.75+r()*.2,.85+r()*.35),l=Math.floor(n)%1e3,u=s.attributes.position,h=new U,d=new U,f=[],x=r()<.35,_=x?[1.08,.95,.82]:[1,.98,.95],m=x?.26:.16;for(let p=0;p<u.count;p++){h.fromBufferAttribute(u,p),d.copy(h).normalize();let v=1;for(const S of a)v+=S.a*Math.sin(d.dot(S.d)*S.f*3+S.ph);v+=(Math.abs(ic(d.x*2.2,d.y*2.2,d.z*2.2,l+7,3)-.5)-.15)*.25*i;let w=0;for(const S of c){const b=d.distanceTo(S.d)/S.size;if(b<1){const T=1-b*b;v-=.11*T*S.size*3,w=Math.max(w,T)}else b<1.3&&(v+=.025*(1-(b-1)/.3)*S.size*3)}v+=(ic(d.x*7,d.y*7,d.z*7,l+5,3)-.5)*.09*i,h.multiplyScalar(v).multiply(o),u.setXYZ(p,h.x,h.y,h.z);let y=m+(ic(d.x*2.5,d.y*2.5,d.z*2.5,l+9,4)-.5)*.18+(v-1)*.25-w*.04;y+=(ic(d.x*12,d.y*12,d.z*12,l+2,2)-.5)*.08,y=Math.max(.05,Math.min(.5,y)),f.push(y*_[0],y*_[1],y*_[2])}return s.setAttribute("color",new yt(f,3)),s.computeVertexNormals(),s}function um(n={}){const e=new qc({vertexColors:!0,roughness:.92,metalness:.04}),t=n.scale??6,i=!!n.tumble;return e.onBeforeCompile=r=>{r.uniforms.uT=n.uT||{value:0},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
        ${vr}
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
        }`)},e}const au={mat:null};function b0(n){const e=lm(n.id,n.size,5);return au.mat||(au.mat=um({scale:5})),new zt(e,au.mat)}function E2(n,e,t,i,r){const s=new zn,a=i==="high"?2400:900,c=[0,1,2,3].map(x=>lm(500+x*17,1,2,1.3)),o=um({scale:4,tumble:!0,uT:r}),l=Ti(Math.floor(n*131)),u=[],h=3;for(let x=0;x<h;x++){const _=new zn,m=n+(e-n)*x/h,p=n+(e-n)*(x+1)/h;_.userData.omega=Math.PI*2/t((m+p)/2),s.add(_),u.push(_);const v=Math.ceil(a/h/c.length);for(const w of c){const y=new Hc(w,o,v),S=new Ft,b=new Yn,T=new U,g=new U;for(let M=0;M<v;M++){const E=m+l()*(p-m),D=l()*Math.PI*2,R=(l()+l()+l()-1.5)*1.6;T.set(Math.cos(D)*E,R,Math.sin(D)*E),b.setFromEuler(new _r(l()*6,l()*6,l()*6));const A=.04+Math.pow(l(),4)*.32;S.compose(T,b,g.setScalar(A)),y.setMatrixAt(M,S)}y.frustumCulled=!1,_.add(y)}}const d=new ll(n-4,e+4,256,4).rotateX(-Math.PI/2),f=new zt(d,new Wt({uniforms:{uR0:{value:n-4},uR1:{value:e+4}},vertexShader:`#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vW;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`#include <logdepthbuf_pars_fragment>
      ${vr}
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
      }`,blending:Bn,transparent:!0,depthWrite:!1,side:ci}));return s.add(f),{group:s,update(x){for(const _ of u)_.rotation.y=-_.userData.omega*x},dispose(){for(const x of c)x.dispose();d.dispose()}}}const No=0,ko=1,Fo=2,cu=3,S0=4,lu=5;function A2(n,e=4096){const t={value:0},i=new Yp;i.setAttribute("position",new yt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);const r={},s=(m,p)=>{const v=new so(new Float32Array(e*p),p);v.setUsage(Lr),i.setAttribute(m,v),r[m]=v};s("aP0",3),s("aVel",3),s("aDrift",3),s("aDir",3),s("aCol",3),s("aTime",2),s("aSize",2),s("aKind",2),r.aTime.array.fill(-1e6),i.instanceCount=e;const a=new Wt({uniforms:{uT:t,uPx:{value:.002}},vertexShader:`${Oi}
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
        float drag = aKind.x == ${Fo}.0 ? 1.2 : aKind.x == ${ko}.0 ? 2.5 : 0.0;
        float travel = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
        vec3 p = aP0 + aVel * travel + aDrift * t; // drift: carried along with the world it's at
        float size = mix(aSize.x, aSize.y, aKind.x == ${ko}.0 ? sqrt(age) : age);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Far away, a flash only a pixel or two across fades rather than sparkles.
        vFade = aKind.x == ${No}.0 || aKind.x == ${ko}.0 || aKind.x == ${cu}.0 ? clamp(size / (uPx * -mv.z) / 4.0, 0.12, 1.0) : 1.0;
        // Rounds, beams and sparks never get thinner than about a pixel.
        if (aKind.x == ${Fo}.0 || aKind.x == ${S0}.0 || aKind.x == ${lu}.0) size = max(size, uPx * -mv.z * (aKind.x == ${lu}.0 ? 2.0 : 1.3));
        vec3 dirW = aDir;
        if (aKind.x == ${Fo}.0) dirW = -aVel * exp(-drag * t) * 0.06;
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
        ${zi}
      }`,fragmentShader:`${Bi}
      ${vr}
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        ${Gi}
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
      }`,blending:Bn,transparent:!0,depthWrite:!1,side:ci}),c=new zt(i,a);c.frustumCulled=!1,c.renderOrder=5,n.add(c);let o=0,l=!1;const u=new ot;function h(m,p,v,w,y,S,b,T,g=0,M=1){const E=o;o=(o+1)%e,r.aP0.setXYZ(E,p.x,p.y,p.z),r.aVel.setXYZ(E,v?v.x:0,v?v.y:0,v?v.z:0),r.aDrift.setXYZ(E,x.x,x.y,x.z),r.aDir.setXYZ(E,w?w.x:0,w?w.y:0,w?w.z:0),u.set(y).multiplyScalar(M),r.aCol.setXYZ(E,u.r,u.g,u.b),r.aTime.setXY(E,t.value+g,S),r.aSize.setXY(E,b,T),r.aKind.setXY(E,m,Math.random()),l=!0}const d=new U,f=new U,x=new U,_=()=>d.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{uT:t,drift:x,update(m,p){if(t.value=m,p&&(a.uniforms.uPx.value=p),l){for(const v in r)r[v].needsUpdate=!0;l=!1}},explosion(m,p=1){h(No,m,null,null,"#ffffff",.16,.3*p,1.5*p,0,3.5),h(cu,m,null,null,"#9fd4ff",.5,.15*p,1.9*p,0,1.2),h(ko,m,_().multiplyScalar(.2),null,"#ffffff",.75+Math.random()*.2,.25*p,.95*p,.02,2.2);for(let v=0;v<2;v++)h(ko,f.copy(m).add(_().multiplyScalar(.25*p)),_().multiplyScalar(.4),null,"#ffffff",.55,.12*p,.5*p,.08+v*.12,2);for(let v=0;v<16;v++)h(Fo,m,_().multiplyScalar((1.5+Math.random()*3.5)*p),null,"#ff9a40",.5+Math.random()*.8,.025*p,.015*p,0,3);for(let v=0;v<6;v++)h(No,m,_().multiplyScalar(.4+Math.random()*.8),null,"#ff7a30",1.5+Math.random()*1.5,.06*p,.025*p,.05,2.5)},impact(m,p,v=!1){h(No,m,null,null,p,.15,.1,v?.6:.35,0,1.6);for(let w=0;w<(v?6:3);w++)h(Fo,m,_().multiplyScalar(1.5+Math.random()*3),null,"#ffd090",.25+Math.random()*.3,.02,.01,0,2.5)},intercept(m){h(No,m,null,null,"#dff4ff",.12,.05,.3,0,3)},bolt(m,p,v,w,y,S,b=0){f.subVectors(p,m);const T=d.copy(f).divideScalar(w),g=f.clone().normalize().multiplyScalar(-y);h(S0,m,T,g,v,w,S,S,b,1.6)},beam(m,p,v,w=.3){f.subVectors(p,m),h(lu,p,null,f.clone().negate(),v,w,.045,.02,0,1.4)},ring(m,p,v,w=1.2){h(cu,m,null,null,p,w,v*.3,v,0,1.5)}}}const dm=`
vec3 dirFromUv(vec2 uv) {
  float phi = uv.x * 6.28318530718;
  float th = (1.0 - uv.y) * 3.14159265359;
  return vec3(-cos(phi) * sin(th), cos(th), sin(phi) * sin(th));
}`,C2=`
${vr}
${dm}
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
}`,R2=`
${vr}
${dm}
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
}`,fm=["temperate","desert","ice","jungle","steppe","ocean"],w0={temperate:[.35,.6,1],desert:[1,.7,.45],ice:[.6,.8,1],jungle:[.4,.7,.85],steppe:[.55,.62,.9],ocean:[.3,.55,1]},uu=[[[.5,.33,.18],[.82,.7,.52],[.62,.3,.15]],[[.3,.45,.6],[.7,.82,.88],[.2,.3,.55]],[[.22,.42,.4],[.55,.72,.66],[.15,.3,.32]],[[.45,.2,.12],[.78,.55,.4],[.35,.12,.08]],[[.35,.28,.45],[.7,.62,.75],[.25,.18,.4]],[[.62,.55,.4],[.88,.84,.72],[.5,.4,.28]]];function hm(n){return uu[Math.floor(n.hue*uu.length)%uu.length]}function P2(n){if(n.home)return{kind:0,type:Math.max(0,fm.indexOf(n.biome||"temperate")),atmo:w0[n.biome]||w0.temperate,atmoK:1,clouds:1,relief:.06};if(n.giant)return{kind:3,type:0,atmo:hm(n)[1].map(t=>t*.9+.1),atmoK:.55,clouds:0,relief:0};if(n.kind==="planet"){const t=Math.floor(n.hue*4)%4,i=[[1,.6,.4],null,[1,.85,.55],[.6,.75,1]][t];return{kind:1,type:t,atmo:i,atmoK:t===2?1.2:.45,clouds:0,relief:t===2?0:.09,airless:t===1}}return{kind:2,type:Math.floor(n.hue*4)%4,atmo:null,atmoK:0,clouds:0,relief:.12,airless:!0}}function L2(n,e){const t=new $t;t.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const i=new zt(t);i.frustumCulled=!1;const r=new al;r.add(i);const s=new ul,a=new Wt({uniforms:{uKind:{value:0},uType:{value:0},uSeed:{value:0},uPalA:{value:new U},uPalB:{value:new U},uPalC:{value:new U},uStorm:{value:[0,1,2,3].map(()=>new tn)}},vertexShader:Jo,fragmentShader:C2,depthTest:!1,depthWrite:!1}),c=new Wt({uniforms:{tAlb:{value:null},uTexel:{value:new tt},uRelief:{value:1},uKind:{value:0},uType:{value:0},uSeed:{value:0},uClouds:{value:0}},vertexShader:Jo,fragmentShader:R2,depthTest:!1,depthWrite:!1}),o=Math.min(8,n.capabilities.getMaxAnisotropy()),l=(u,h)=>{const d=new fi(u,h,{depthBuffer:!1,generateMipmaps:!0,minFilter:Nr,magFilter:xn,wrapS:aa,wrapT:ji});return d.texture.anisotropy=o,d};return function(h,d){const f=e()==="high",x=d.kind===0?f?2048:1024:f?1024:512,_=x/2,m=(h.id*7.31+h.hue*13.7)%97,p=a.uniforms;if(p.uKind.value=d.kind,p.uType.value=d.type,p.uSeed.value=m,d.kind===3){const b=hm(h);p.uPalA.value.fromArray(b[0]),p.uPalB.value.fromArray(b[1]),p.uPalC.value.fromArray(b[2]);let T=Math.floor(m*1e3);const g=()=>(T=T*16807%2147483647)/2147483647;p.uStorm.value.forEach((M,E)=>{const D=(g()-.5)*(E?1.4:.9),R=g()*Math.PI*2;M.set(Math.cos(D)*Math.cos(R),Math.sin(D),Math.cos(D)*Math.sin(R),E===0?.12+g()*.06:.04+g()*.03)})}const v=l(x,_),w=l(x,_),y=n.getRenderTarget();i.material=a,n.setRenderTarget(v),n.render(r,s);const S=c.uniforms;return S.tAlb.value=v.texture,S.uTexel.value.set(1/x,1/_),S.uRelief.value=d.relief*(x/1024)*.5+d.relief*.5,S.uKind.value=d.kind,S.uType.value=d.type,S.uSeed.value=m,S.uClouds.value=d.clouds,i.material=c,n.setRenderTarget(w),n.render(r,s),n.setRenderTarget(y),{alb:v.texture,aux:w.texture,rts:[v,w]}}}const bi={pos:{value:[new U,new U]},col:{value:[new U(1.22,1.17,1.08),new U]}},yf=`
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
}`;function D2(n,e,t,i){const r=e.kind===3,s={tAlb:{value:t.alb},tAux:{value:t.aux},uStarPos:bi.pos,uStarCol:bi.col,uCity:{value:0},uCityCol:{value:new U(2.4,1.5,.7)},uCloudShift:{value:0},uCloudK:{value:e.clouds?.55:0},uOcean:{value:e.kind===0&&e.type!==1?1:0},uAirless:{value:e.airless?1:0},uAtmo:{value:new U(...e.atmo||[0,0,0])},uAtmoK:{value:e.atmoK},uT:{value:0},uFlow:{value:r?1:e.kind===1&&e.type===2?.4:0},uOcc:{value:[0,1,2,3].map(()=>new tn(0,0,0,0))},uRingN:{value:new U(0,1,0)},uRingIn:{value:0},uRingOut:{value:0},tRing:{value:i?i.tex:null},uCenter:{value:new U},uRadius:{value:n.size}};return new Wt({uniforms:s,vertexShader:`${Oi}
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
        ${zi}
      }`,fragmentShader:`${Bi}
      ${yf}
      uniform sampler2D tAlb, tAux, tRing;
      uniform vec3 uStarPos[2], uStarCol[2];
      uniform float uCity, uCloudShift, uCloudK, uOcean, uAirless, uAtmoK, uT, uFlow, uRingIn, uRingOut, uRadius;
      uniform vec3 uCityCol, uAtmo, uRingN, uCenter;
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      vec3 fromS(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
      void main() {
        ${Gi}
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
      }`})}function I2(n){return new Wt({uniforms:{tAux:{value:n.aux},uStarPos:bi.pos,uStarCol:bi.col,uOcc:{value:[0,1,2,3].map(()=>new tn(0,0,0,0))},uHoles:{value:Array.from({length:6},()=>new tn(0,1,0,2))}},vertexShader:`${Oi}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        vUv = uv;
        vDir = normalize(position);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${zi}
      }`,fragmentShader:`${Bi}
      ${yf}
      uniform sampler2D tAux; uniform vec3 uStarPos[2], uStarCol[2]; uniform vec4 uHoles[6];
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        ${Gi}
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
      }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})}function U2(n,e,t="high"){const i=e.kind===3?.035:e.kind===0?.045:.035,r=n.size*(1+i),s=e.atmo,a=new U(s[0],s[1],s[2]),c=new zt(new $i(r,64,40),new Wt({uniforms:{uCenter:{value:new U},uRp:{value:n.size*.998},uRa:{value:r},uStarPos:bi.pos,uStarCol:bi.col,uBeta:{value:a},uK:{value:e.atmoK},uOcc:{value:[0,1,2,3].map(()=>new tn(0,0,0,0))}},vertexShader:`${Oi}
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
          ${zi}
        }`,fragmentShader:`${Bi}
        ${yf}
        uniform vec3 uCenter, uBeta; uniform float uRp, uRa, uK;
        uniform vec3 uStarPos[2], uStarCol[2];
        varying vec3 vWorld;
        void main() {
          ${Gi}
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
        }`,defines:{STEPS:t==="high"?8:5},transparent:!0,blending:Bn,depthWrite:!1}));return c.renderOrder=1,c}function N2(n){const r=new Uint8Array(2048);let s=Math.floor(n.hue*1e6)+n.id*97;const a=()=>(s=s*16807%2147483647)/2147483647,c=Array.from({length:3},()=>({at:.2+a()*.7,w:.006+a()*.025})),o=new Float32Array(512);let l=.5;for(let f=0;f<512;f++)l+=(a()-.5)*.18,l+=(.55-l)*.04,o[f]=l;for(let f=0;f<512;f++){const x=f/511;let _=(o[Math.max(0,f-1)]+o[f]+o[Math.min(511,f+1)])/3;_*=.65+.35*Math.sin(x*9+a()*.2),_*=Math.min(1,x/.1)*Math.min(1,(1-x)/.06),x>.42&&x<.72&&(_*=1.4),x<.18&&(_*=.45);for(const v of c)Math.abs(x-v.at)<v.w&&(_*=.06);_=Math.max(0,Math.min(1,_));const m=.8+.2*o[f*7%512],p=x<.3?.6:.2;r.set([(170+p*20)*m,(163+p*5)*m,(150-p*25)*m,_*255],f*4)}const u=new df(r,512,1,Mi);u.colorSpace=Xn,u.magFilter=xn,u.minFilter=xn,u.needsUpdate=!0;const h=new ll(n.size*1.35,n.size*2.35,160,1),d=new zt(h,new Wt({uniforms:{tRing:{value:u},uIn:{value:1.35},uOut:{value:2.35},uR:{value:n.size},uCenter:{value:new U},uStarPos:bi.pos,uStarCol:bi.col},vertexShader:`${Oi}
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        vLocal = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${zi}
      }`,fragmentShader:`${Bi}
      uniform sampler2D tRing; uniform float uIn, uOut, uR; uniform vec3 uCenter;
      uniform vec3 uStarPos[2], uStarCol[2];
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        ${Gi}
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
      }`,transparent:!0,depthWrite:!1,side:ci}));return d.userData.ring={tex:u,inner:1.35,outer:2.35},d}const pm=["#58b8ff","#ff6a5a","#ffb347"],k2="#8a90a6",_t=n=>n===Oe?k2:pm[n],T0=6,$s=.45,F2=.55,du=.03,E0=.8,O2=new U(0,1,0),fu=-.045,rc=400;function z2(n,e,t,i=1){const r=document.createElement("canvas");r.width=n*i,r.height=e*i;const s=r.getContext("2d");s.scale(i,i),t(s,n,e);const a=new mf(r);return a.colorSpace=Xn,a}const hu=z2(128,128,n=>{const e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.1)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)}),mm={value:1},B2=new po(2,2);function A0(n=!1){const e=new zt(B2,new Wt({uniforms:{uColor:{value:new ot("#ffffff")},uOpacity:{value:.8},uLvl:{value:0},uWidth:{value:1.6},uPR:mm},vertexShader:`varying vec2 vQ;
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
      }`,transparent:!0,depthWrite:!1,depthTest:n}));return e.frustumCulled=!1,e.renderOrder=10,e}const gm={value:new tt(1,1)};function G2(n){const e=n.parent!==null?192:512,t=[],i=[],r=[],s=[],a=[],c=h=>{const d=lp(n,h);return[d.x,d.y,d.z]};for(let h=0;h<=e;h++){const d=h/e*Math.PI*2;for(const f of[-1,1])t.push(...c(d)),i.push(...c(d+.01)),r.push(d),s.push(f);if(h<e){const f=h*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}}const o=new $t;o.setAttribute("position",new yt(t,3)),o.setAttribute("nextPos",new yt(i,3)),o.setAttribute("ang",new yt(r,1)),o.setAttribute("side",new yt(s,1)),o.setIndex(a);const l=n.parent!==null,u=new zt(o,new Wt({uniforms:{uTh:{value:0},uRes:gm,uWidth:{value:l?1.4:2.2},uColor:{value:new ot(l?"#5d6a8c":"#7383ad")},uOpacity:{value:l?.55:.75}},vertexShader:`attribute vec3 nextPos; attribute float ang; attribute float side;
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
      }`,transparent:!0,depthWrite:!1,side:ci}));return u.frustumCulled=!1,u}const vm={value:0},pu=new Wt({uniforms:{uT:vm},vertexShader:`${Oi}
    varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vW = wp.xyz;
      vec4 mv = viewMatrix * wp;
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
      ${zi}
    }`,fragmentShader:`${Bi}
    uniform float uT; varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      ${Gi}
      float rim = pow(max(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0), 2.0);
      float scan = 0.55 + 0.45 * sin(vW.y * 60.0 - uT * 6.0);
      float flick = 0.85 + 0.15 * sin(uT * 23.0) * sin(uT * 7.0);
      gl_FragColor = vec4(vec3(0.45, 0.8, 1.3) * (0.12 + rim * 0.9) * scan * flick, 1.0);
    }`,blending:Bn,transparent:!0,depthWrite:!1});function V2(n,e,t={}){const i=new n2({canvas:n,antialias:!1,powerPreference:"high-performance"});let r=t.quality||"high";const s=()=>Math.min(window.devicePixelRatio||1,r==="high"?2:1.25);let a=s();i.setPixelRatio(1),i.autoClear=!0;const c=new al,o=new mi(45,1,.02,2e4),l=r2(i);l.setSamples(r==="high"?4:2);const u=o2(i,r);c.add(u.stars),c.environmentIntensity=.9,c.backgroundIntensity=.7;const h=r==="high"?700:350,d=new $t;{const O=new Float32Array(h*3);for(let H=0;H<O.length;H++)O[H]=Math.random();d.setAttribute("position",new mn(O,3))}const f=new Wt({uniforms:{uBox:{value:50},uPR:{value:1}},vertexShader:`uniform float uBox, uPR; varying float vA;
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
      }`,blending:Bn,transparent:!0,depthWrite:!1}),x=new pf(d,f);x.frustumCulled=!1,c.add(x);const _=h0(T0,r),m=_.group;c.add(m);const p=h0(T0,r);p.tint.set(1,.78,.6);const v=p.group;v.visible=!1,v.add(new Gh("#ffd9b0",1.4,0,0)),c.add(v),c.add(new Gh("#fff1dd",3,0,0)),c.add(new nx("#2a3550",.7));const w=new zn;c.add(w);let y=[],S=6e3;const b={az:.4,pol:.9,dist:380,minDist:1.2,maxDist:2200,target:new U,vaz:0,vpol:0,follow:null};let T=null,g=null;const M=L2(i,()=>r),E=[],D=new Map;function R(O,H){const K=`${O}:${H}`;return D.has(K)||D.set(K,new $i(O,H?128:96,H?80:56)),D.get(K)}function A(O){const H=O.scale||1;b.maxDist=2200*H,S=6e3*H;{const $=Ti((O.nameSeed||1)+77),q=Math.max(...O.bodies.filter(ne=>ne.kind==="planet"&&ne.parent===null&&!ne.star).map(ne=>ne.r)),W=ne=>ne<.3?["desert","steppe"]:ne<.55?["temperate","ocean","jungle"]:ne<.68?["steppe","temperate"]:["ice","steppe"],ae=new Set;for(const ne of O.bodies.filter(ye=>ye.home)){const ye=W(ne.r/q).filter(Ne=>!ae.has(Ne)),Ce=ye.length?ye[Math.floor($()*(ne.r/q>=.3&&ne.r/q<.55?ye.length:1))]:fm.find(Ne=>!ae.has(Ne))||"temperate";ae.add(Ce),ne.biome=Ce}}u.bake((O.nameSeed||1)+1),c.background=u.background,c.environment=u.env;for(const $ of E)$.dispose();E.length=0,w.clear(),e.innerHTML="",Pt.length=0,y=O.bodies.map($=>{const q=new zn;let W,ae=null,ne=null,ye=null,Ce=null;if($.kind==="station")W=x0($.size*E0,$.id%v0,L.uT);else if($.kind==="asteroid")W=b0($);else if($.visitor){W=b0($),ne=new zn;const xt=Tt=>new pc(new Zo({map:hu,color:Tt,transparent:!0,depthWrite:!1,blending:Bn,opacity:0}));ne.userData.ion=Array.from({length:26},()=>xt("#9fd0ff")),ne.userData.dust=Array.from({length:22},()=>xt("#fff0cf")),ne.userData.coma=xt("#e8f6ff");for(const Tt of[...ne.userData.ion,...ne.userData.dust,ne.userData.coma])ne.add(Tt);q.add(ne),ae=x0(.7,0,L.uT),_0(ae,[{type:"shipyard",level:1,done:!0},{type:"habitat",level:1,done:!0}],null),ae.userData.set("#3a3d44",.8,!1),q.add(ae)}else{const xt=P2($),Tt=M($,xt);E.push(...Tt.rts);const Ut=.2+$.hue*.3;if($.giant&&$.hue>.4){ye=N2($),ye.rotation.x=Math.PI/2;const Yt=new zn;Yt.rotation.z=Ut,Yt.add(ye),q.add(Yt)}if(W=new zt(R($.size,xt.kind===0||xt.kind===3?1:0),D2($,xt,Tt,ye&&ye.userData.ring)),W.rotation.order="ZYX",W.rotation.z=Ut,xt.atmo&&(Ce=U2($,xt,r),q.add(Ce)),xt.clouds){const Yt=new zt(R($.size*1.008,1),I2(Tt));Yt.name="clouds",W.add(Yt)}}q.add(W);const Ne=new zn;W.add(Ne);const et=A0(!1);et.scale.setScalar($.size*3.2),q.add(et),w.add(q);const ct=G2($),Me=new zn;Me.add(ct),w.add(Me);const vt=document.createElement("div");vt.className="lbl",e.appendChild(vt),$.visitor&&(Me.visible=!1);let Ye=null;if($.perk&&vn[$.perk].range){const xt=vn[$.perk].range*H,Tt=[];for(let Ut=0;Ut<=96;Ut++){const Yt=Ut/96*Math.PI*2;Tt.push(new U(Math.cos(Yt)*xt,0,Math.sin(Yt)*xt))}Ye=new Go(new $t().setFromPoints(Tt),new ja({color:"#c7a6ff",transparent:!0,opacity:.55,dashSize:2.5,gapSize:2})),Ye.computeLineDistances(),Ye.visible=!1,w.add(Ye)}return{b:$,g:q,body:W,surface:Ne,mark:et,lineHolder:Me,line:ct,label:vt,shown:"",owner:null,pulse:0,sig:null,structs:null,hulk:ae,tail:ne,reach:Ye,ring:ye,atmo:Ce,ringN:new U,occ:[],ports:$.kind==="station"?om($.id%v0):null}}),g&&(g.group.removeFromParent(),g.dispose(),g=null);const K=O.bodies.filter($=>$.kind==="asteroid");if(K.length){const $=K[0],q=Math.min(...K.map(ae=>ae.r))-2,W=Math.max(...K.map(ae=>ae.r))+2;g=E2(q,W,ae=>$.period*Math.pow(ae/$.r,1.5),r,L.uT),w.add(g.group)}for(const $ of y){const q=$.b;if(q.kind!=="planet"&&q.kind!=="moon")continue;const W=q.kind==="planet"?O.bodies.filter(ae=>ae.parent===q.id&&ae.kind==="moon"):O.bodies.filter(ae=>ae.id===q.parent||ae.parent===q.parent&&ae.kind==="moon"&&ae.id!==q.id);$.occ=W.slice(0,4).map(ae=>ae.id)}if(T&&(T.removeFromParent(),T=null),O.stars&&O.stars[1]){const $=[];for(let q=0;q<=256;q++){const W=Ks(O,1,q/256*O.stars[1].period);$.push(new U(W.x,W.y,W.z))}T=new Go(new $t().setFromPoints($),new ja({color:"#ffb070",transparent:!0,opacity:.35,dashSize:4,gapSize:4})),T.computeLineDistances(),w.add(T)}}const L=p2(c,rc),k=L.geometries;let z=0;const V=new $t,oe=64,te=new Float32Array(200*oe*6),ce=new Float32Array(200*oe*6);V.setAttribute("position",new mn(te,3)),V.setAttribute("color",new mn(ce,3));const le=new $1(V,new hf({vertexColors:!0,transparent:!0,opacity:.45}));le.frustumCulled=!1,c.add(le);const Be=[];function we(O){if(!Be[O]){const H=A0(!0);c.add(H),Be[O]=H}return Be[O]}const je=new $t().setFromPoints(Array.from({length:129},()=>new U)),He=new Go(je,new ja({color:pm[0],dashSize:1.5,gapSize:1}));He.frustumCulled=!1,c.add(He);const Te=A2(c,r==="high"?4096:2048),re=240,ue=[],Ae=new ot("#ffffff");function nt(O,H,K,$=0,q=!1){let W=ue.find(ae=>!ae.live);if(!W){if(ue.length>=re)return;W={a:new U,b:new U,c:new ot},ue.push(W)}if(W.live=!0,W.a.copy(O),W.b.copy(H),W.color=K,W.c.set(K).lerp(Ae,[.45,.6,.85][$]),W.rail=$===2,W.age=0,(W.drift??(W.drift=new U)).copy(Te.drift),W.t0=Wr,W.life=$===2?.05:Nt.clamp(O.distanceTo(H)/($?24:14),.1,.7),W.pd=q&&Math.random()<.3,W.pd&&W.b.lerpVectors(O,H,.7+Math.random()*.2),$===2)Te.beam(W.a,W.b,W.c,.35);else if($===1)Te.bolt(W.a,W.b,W.c,W.life,.5,.035);else for(let ae=0;ae<4;ae++)Ve.copy(W.b).add(Rt.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.25)),Te.bolt(W.a,Ve,W.c,W.life,.22,.018,ae*.045)}const pe=new U,Ve=new U,Rt=new U,gt=new U,Qe=new U,at=new U,Ze=new U,Ct=new U(0,1,0),cn=O=>window.innerHeight/(2*Math.tan(Nt.degToRad(o.fov/2))*o.position.distanceTo(O)),It=(O,H)=>{let K=Math.imul(O^2654435769,2246822507)^Math.imul(H+1663821227,3266489909);return K^=K>>>15,K=Math.imul(K,739982445),((K^K>>>12)>>>0)/4294967296};function Kt(){const O=window.innerWidth,H=window.innerHeight;i.setSize(Math.round(O*a),Math.round(H*a),!1),n.style.width=O+"px",n.style.height=H+"px",l.setSize(O,H,a),mm.value=a,gm.value.set(O,H),o.aspect=O/H,o.updateProjectionMatrix()}const jt=new U;function j(O){jt.copy(m.position).project(o);let H=jt.z<1&&Math.abs(jt.x)<1.1&&Math.abs(jt.y)<1.1?1:0;if(H){const $=o.position;Rt.copy(m.position).sub($);const q=Rt.length();Rt.divideScalar(q);for(const W of y){if(!W.g.visible)continue;Ve.copy(W.g.position).sub($);const ae=Ve.dot(Rt);if(ae<0||ae>q)continue;if(Math.sqrt(Math.max(0,Ve.lengthSq()-ae*ae))<W.b.size){H=0;break}}H*=Nt.clamp((1.1-Math.max(Math.abs(jt.x),Math.abs(jt.y)))*4,0,1)}const K=l.flare;K.vis+=(H*.9-K.vis)*Math.min(1,O*8+.05),K.pos.set(jt.x*.5+.5,jt.y*.5+.5)}const Ht=[],Pt=[];function F(O){if(!Pt[O]){const H=document.createElement("div");H.className="flbl",e.appendChild(H),Pt[O]=H}return Pt[O]}function C(O){for(const H of y){if(H.b.kind==="station")continue;const K=Ht[H.b.id];if(!K)continue;const $=H.b.size*1.25+.25,q=$*2,W=O.x-K.x,ae=O.y-K.y,ne=O.z-K.z,ye=W*W+ae*ae+ne*ne;if(ye>=q*q)continue;const Ce=Math.sqrt(ye);if(Ce<1e-6){O.x=K.x+$;continue}const Ne=(Ce+(q-Ce)**2*$/(q*q))/Ce;O.set(K.x+W*Ne,K.y+ae*Ne,K.z+ne*Ne)}}function J(O,H,K,$,q,W,ae,ne){const ye=Ht[O.id],Ce=It(q,H),Ne=K*(1+It(H,q)*.15),et=O.gm?Math.sign($)*Math.sqrt(O.gm/(Ne*Ne*Ne)):$*(.8+Ce*.4),ct=Ce*Math.PI*2+W*et;return ne&&ne.set(-Math.sin(ct),0,Math.cos(ct)).multiplyScalar(Math.sign($)||1),ae.set(ye.x+Math.cos(ct)*Ne,ye.y+Math.sin(ct*.7+Ce)*Ne*.15,ye.z+Math.sin(ct)*Ne),O.kind==="station"&&$>0&&Re(O,H,W,ae,ne),ae}const ie=new U,he=new U;function Re(O,H,K,$,q){const W=It(H,O.id*7+3);if(W<.45)return;const ae=120+W*80,ne=(K/ae+It(O.id,H*5))%1,ye=Nt.smootherstep(ne,.5,.57)*(1-Nt.smootherstep(ne,.75,.82));if(ye<=0)return;const Ce=y[O.id]?.b===O?y[O.id]:y.find(Me=>Me.b===O);if(!Ce||!Ce.ports)return;const Ne=Ce.ports[H%Ce.ports.length];Ce.body.updateMatrixWorld();const et=O.size*E0;ie.set(Ne.p[0]*et,Ne.p[1]*et,Ne.p[2]*et).applyMatrix4(Ce.body.matrixWorld),he.set(Ne.n[0],Ne.n[1],Ne.n[2]).transformDirection(Ce.body.matrixWorld);const ct=$s*.7+Math.floor(H/Ce.ports.length)*$s*1.6;ie.addScaledVector(he,ct+(1-ye)*(1-ye)*1.2),$.lerp(ie,ye),q&&q.lerp(he.negate(),ye).normalize()}const Pe=new U,de=new U,ve=new U,Ee=new U,ze=new U,Ue=new U,Le=O=>O.size*3+4;function Ke(O,H){const K=`${H?"d":"a"}${O.t0}:${O.T}`;if(O._blend&&O._blend.key===K)return O._blend.w;const $=X.bodies[H?O.from:O.to];let q=0;const W=ae=>{const ne=H?O.t0+ae:O.t0+O.T-ae,ye=Pn(O,ne),Ce=lt(X,$,ne);return Math.hypot(ye.x-Ce.x,ye.y-Ce.y,ye.z-Ce.z)};if($&&W(0)<$.size*2+1){let ae=0,ne=O.T*.45;if(W(ne)>=Le($))for(let ye=0;ye<14;ye++){const Ce=(ae+ne)/2;W(Ce)>=Le($)?ne=Ce:ae=Ce}q=Math.min(25,Math.max(4,ne))}return Object.defineProperty(O,"_blend",{value:{key:K,w:q},enumerable:!1,configurable:!0,writable:!0}),q}function it(O,H,K,$,q,W,ae){return $||H.owner===O.owner?J(H,($?K:H.ships+K)%20,H.size*1.8+.4,du,H.id*13,q,W,ae):J(H,K%20,H.size*2.4+.8,fu,H.id*29+O.owner,q,W,ae)}function dt(O,H,K,$,q){if(O.probe)return 1;const W=K<O.T-K,ae=Ke(O,W),ne=W?K:O.T-K;if(ne>=ae)return 1;const ye=X.bodies[W?O.from:O.to],Ce=ye&&Ht[ye.id];if(!Ce)return 1;const Ne=Nt.smootherstep(ne,0,ae);it(O,ye,H,W,q,Pe,ve),Pe.sub(Ce),de.set(pe.x-Ce.x,pe.y-Ce.y,pe.z-Ce.z),ze.set($.x-Ce.x,$.y-Ce.y,$.z-Ce.z).addScaledVector(at,W?Le(ye):-Le(ye)),ze.lengthSq()<1e-8&&ze.copy(at),ze.normalize(),it(O,ye,H,W,W?O.t0:O.t0+O.T,Ee),Ee.sub(Ce).addScaledVector(ze,-Ee.dot(ze)),Ee.lengthSq()<1e-8&&Ee.crossVectors(ze,Ct),Ee.lengthSq()<1e-8&&Ee.set(1,0,0),Ee.normalize(),Ue.crossVectors(ze,Ee);let et=Math.atan2(Pe.dot(Ee),Pe.dot(ze));et<-Math.PI/2&&(et+=Math.PI*2);const ct=Math.hypot(Pe.dot(ze),Pe.dot(Ee)),Me=Pe.dot(Ue),vt=de.dot(ze);de.addScaledVector(ze,-vt);const Ye=et*(1-Ne),xt=ye.size*1.3+.4,Tt=xt*.3;let Ut=ct+(vt-ct)*Ne;const Yt=(Ut+xt+Math.sqrt((Ut-xt)**2+Tt*Tt))/2;return Ut+=(Yt-Ut)*(1-Ne)*Nt.smoothstep(Ne,0,.05),de.multiplyScalar(Ne).addScaledVector(ze,Math.cos(Ye)*Ut).addScaledVector(Ee,Math.sin(Ye)*Ut).addScaledVector(Ue,Me*(1-Ne)),pe.set(Ce.x+de.x,Ce.y+de.y,Ce.z+de.z),Ne}let X=null;function De(O){let H=1;const K=m.position.x,$=m.position.y,q=m.position.z;let W=K-O.x,ae=$-O.y,ne=q-O.z;const ye=Math.hypot(W,ae,ne)||1;W/=ye,ae/=ye,ne/=ye;for(const Ce of y){if(Ce.b.kind!=="planet"&&Ce.b.kind!=="moon")continue;const Ne=Ht[Ce.b.id],et=Ne.x-O.x,ct=Ne.y-O.y,Me=Ne.z-O.z,vt=et*W+ct*ae+Me*ne;if(vt<=0||vt>ye)continue;const Ye=et-W*vt,xt=ct-ae*vt,Tt=Me-ne*vt,Ut=Math.sqrt(Ye*Ye+xt*xt+Tt*Tt),Yt=Ce.b.size,St=Yt*.08+vt*.012;Ut<Yt+St&&(H*=Nt.smoothstep(Ut,Yt-St,Yt+St))}return H}const me=new Map,Ie=new U,ke=new U,_e=new U,$e=new U;function Xe(O,H,K,$,q,W,ae){let ne=me.get(O);if(!ne){me.set(O,{n:K.clone(),w:new U,a:new U,t:q,seen:W});return}ne.seen=W;const ye=q-ne.t;if(ye<=1e-4){ye<-1&&(ne.t=q);return}if(ye>2){ne.n.copy(K),ne.w.set(0,0,0),ne.a.set(0,0,0),ne.t=q;return}Ie.crossVectors(ne.n,K).divideScalar(ye);const Ce=1-Math.exp(-ye*6);if(ke.copy(Ie).sub(ne.w).divideScalar(ye),ne.w.lerp(Ie,Ce),ne.a.lerp(ke,Ce),ne.n.copy(K),ne.t=q,ae<8)return;const Ne=ne.a.length(),et=5+It(O,17)*5,ct=W*et+It(O,23)*9,Me=Math.floor(ct),vt=It(O*7+Me,31),Ye=It(Me,O*3+1),xt=ct-Me;let Tt;if(Ne>=.04){Tt=Math.min(1,(Ne-.04)*3);const Ot=.45+.35*Tt;if(vt>Ot||xt>.35+Ye*.6)return}else{if(vt>.05||xt>.3)return;Tt=.15+Ye*.2,ke.set(Ye-.5,It(Me,O)-.5,It(O,Me*5)-.5)}const Ut=$*.32;if($e.crossVectors(Ne>=.04?ne.a:ke,K),$e.lengthSq()<1e-10)return;$e.normalize();const Yt=$*(.06+.1*Tt)*(.75+Ye*.5),St=$*.05,nn=(.35+.5*Tt)*(.8+vt*.4),Hn=Ye<.18?1:Ye>.86?2:3;Hn&1&&(_e.copy(H).addScaledVector(K,Ut).addScaledVector($e,-$*.06),L.jet(_e,Qe.copy($e).negate(),Yt,St,nn,O)),Hn&2&&(_e.copy(H).addScaledVector(K,-Ut*.85).addScaledVector($e,$*.06),L.jet(_e,$e,Yt*(.85+vt*.3),St,nn,O+.5))}function Zt(O,H,K,$,q,W,ae=W,ne=1,ye=!1,Ce=1,Ne=null){if(z>=rc)return;z++;const et=ye?L.probeType+Math.floor(It(ae,29)*L.probes):Math.floor(It(ae,3)*L.hulls),ct=.9+It(ae,5)*.25,Me=ye?[.3,.3,.3]:[$s,$s,$s*ct];C(O);const vt=cn(O),Ye=.6*$s/.8*vt,xt=1-Nt.smoothstep(Ye,3,14),Tt=$&&ne>=.2,Ut=xt<=0?null:[(Tt?6.5:5)*(ye?.8:1),(Tt?.85:.7)*Ce*xt,Tt];L.add(et,O,H,Me,K,.82+It(ae,11)*.28,ae,$,ne*(.8+Math.sin(q*40+W)*.05)*(ye?.35:1),Ut,.6*vt,De(O)),Ne!==null&&!ye&&Xe(ae,O,H,Me[2],Ne,q,Ye)}const Lt=new Map,kn=new qc({color:"#b9bec8",metalness:.5,roughness:.5}),Zn=new qc({color:"#4a505c",metalness:.4,roughness:.7});function _l(O){const H=new zn,K=(q,W,ae,ne=kn)=>new zt(new Tn(q,W,ae),ne);if(O==="signal"){H.add(K(.12,.12,.18));const q=new zt(new $i(.14,12,6,0,Math.PI*2,0,Math.PI/3),kn);q.position.z=.12,q.rotation.x=-Math.PI/2,H.add(q,K(.5,.004,.08,Zn))}else if(O==="wreck"){for(let q=0;q<4;q++){const W=K(.12+q*.03,.1,.22-q*.03,q%2?Zn:kn);W.position.set((q-1.5)*.18,Math.sin(q*2)*.08,Math.cos(q*3)*.1),W.rotation.set(q,q*2,q*.5),H.add(W)}for(let q=0;q<6;q++){const W=new pc(new Zo({map:hu,color:"#cfe8ff",blending:Bn,depthWrite:!1,transparent:!0,opacity:.7}));W.position.set(Math.sin(q*5)*.35,Math.cos(q*3)*.2,Math.sin(q*7)*.3),W.scale.setScalar(.12),H.add(W)}}else if(O==="convoy")for(let q=0;q<3;q++){const W=new zt(k[2],kn);W.position.set((q-1)*.25,0,-q*.5),W.scale.setScalar(.8),H.add(W)}else{for(let q=0;q<6;q++){const W=K(.12,.1,.12,q%3?kn:Zn);W.position.set((q%3-1)*.14,Math.floor(q/3)*.11,0),H.add(W)}H.add(K(.46,.02,.16,Zn))}const $=new pc(new Zo({map:hu,color:"#c7a6ff",blending:Bn,depthWrite:!1,transparent:!0}));return c.add(H,$),{g:H,glint:$,kind:O}}function yl(O,H,K){const $=new Set;for(const q of O.happenings||[]){const W=O.bodies[q.at];if(W.visitor||!Ht[W.id])continue;$.add(q.id),Lt.has(q.id)||Lt.set(q.id,_l(q.kind));const ae=Lt.get(q.id),ne=Ht[W.id],ye=W.size*2.9+1.2,Ce=K*.15+q.id;if(pe.set(ne.x+Math.cos(Ce)*ye,ne.y+.4,ne.z+Math.sin(Ce)*ye),ae.kind==="convoy"){const et=Nt.clamp((q.starts-H)/60,0,1),ct=q.id*2.399;pe.x+=Math.cos(ct)*et*70,pe.z+=Math.sin(ct)*et*70,Ve.set(-Math.cos(ct),0,-Math.sin(ct)),et<=0&&Ve.set(-Math.sin(Ce),0,Math.cos(Ce)),ae.g.lookAt(pe.clone().add(Ve))}else ae.g.rotation.x+=.004,ae.g.rotation.y+=ae.kind==="wreck"?.01:.003;ae.g.position.copy(pe),ae.g.visible=!0;const Ne=cn(ae.g.position);ae.glint.position.copy(pe),ae.glint.scale.setScalar((ae.kind==="signal"?.6+.4*Math.sin(K*5):1)*9/Ne),ae.glint.material.opacity=Ne>80?.3:.9}for(const[q,W]of Lt)$.has(q)||(W.g.removeFromParent(),W.glint.removeFromParent(),Lt.delete(q))}let Wr=0,Xr=1;function Ml(O,H,K,$){X=O;const q=$-Wr;q>0&&q<.5&&(Xr+=(Nt.clamp(K/q,0,20)-Xr)*Math.min(1,q*4)),Wr=$;const W=O.time,ae=O.stars||[{r:0,period:1,phase:0,size:1}];ae.slice(0,2).forEach((N,Z)=>{const Ge=Z?v:m,rn=Ks(O,Z,W);Ge.visible=!0,Ge.position.set(rn.x,rn.y,rn.z),Ge.scale.setScalar(N.size)}),ae.length<2&&(v.visible=!1),bi.pos.value[0].copy(m.position),bi.pos.value[1].copy(v.position),v.visible?bi.col.value[1].set(1.25,.95,.72):bi.col.value[1].set(0,0,0),_.update($),vm.value=$,Te.update($),g&&g.update(W),v.visible&&p.update($+50),u.update($,a);const ne=(N,Z)=>N>=0&&O.tech?O.tech[N][Z]:0;for(const N of y){const Z=lt(O,N.b,W);Ht[N.b.id]=Z}let ye=0;for(const N of y)to(O,N.b,W)&&(ye=Math.max(ye,Math.hypot(Ht[N.b.id].x,Ht[N.b.id].z)));ye=ye*1.2+20;const Ce=Math.hypot(b.target.x,b.target.z);if(Ce>ye&&(b.target.x*=ye/Ce,b.target.z*=ye/Ce),b.target.y=Nt.clamp(b.target.y,-ye*.3,ye*.3),b.fleet!=null){const N=O.fleets.find(Z=>Z.id===b.fleet);if(!N)b.fleet=null;else{const Z=Pn(N,W);b.target.lerp(pe.set(Z.x,Z.y,Z.z),Math.min(1,K*6))}}if(b.follow===null&&b.fleet==null&&(b.target.y*=1-Math.min(1,K*2)),b.follow!==null){const N=Ht[b.follow];b.target.lerp(pe.set(N.x,N.y,N.z),Math.min(1,K*6))}H.dragging||(b.az+=b.vaz,b.pol+=b.vpol,b.vaz*=.92,b.vpol*=.92),b.goalDist&&(b.dist+=(b.goalDist-b.dist)*Math.min(1,K*4),Math.abs(b.goalDist-b.dist)<.01*b.dist&&(b.goalDist=null)),b.pol=Nt.clamp(b.pol,.15,Math.PI-.15),b.dist=Nt.clamp(b.dist,b.minDist,b.maxDist),o.position.setFromSphericalCoords(b.dist,b.pol,b.az).add(b.target),o.lookAt(b.target);const Ne=Nt.clamp(b.dist*.02,.01,12);Math.abs(Ne-o.near)>o.near*.05&&(o.near=Ne,o.far=S,o.updateProjectionMatrix()),o.updateMatrixWorld();const et=window.innerWidth,ct=window.innerHeight;z=0,L.begin($,a);const Me=H.vis,vt=N=>!Me||Me.bodies.has(N.id),Ye=N=>!Me||N.owner===Me.owner||Me.seesFleet(N,Pn(N,W)),xt=N=>!Me||N.owner===Me.owner||Me.intel>=2&&Ye(N),Tt=N=>!Me||N.owner===Me.owner||Me.intel>=3&&Ye(N)||Me.warn&&O.bodies[N.to].owner===Me.owner,Ut=N=>!Me||N.owner===Me.owner||Me.intel>=1,Yt=new Map;for(const N of O.fleets){if(N.probe)continue;const Z=O.bodies[N.to];if(N.owner===Z.owner?N.owner!==(Me?Me.owner:0):!Tt(N))continue;const Ge=N.T-(W-N.t0),rn=`${N.to}:${N.owner}`,_n=Yt.get(rn)||{to:N.to,owner:N.owner,n:0,eta:1/0,sized:Ut(N)};_n.n+=N.n,_n.eta=Math.min(_n.eta,Ge),Yt.set(rn,_n)}const St=new Map;for(const N of Yt.values())St.has(N.to)||St.set(N.to,[]),St.get(N.to).push(N);const nn=new Set,Hn=new Map;for(const N of y){const Z=N.b;if(Z.parent===null||H.selected===Z.id||H.target===Z.id||Z.sieges.length||O.fleets.some(rn=>rn.to===Z.id&&rn.owner!==Z.owner))continue;const Ge=Ht[Z.parent];pe.copy(N.g.position).project(o),Ve.set(Ge.x,Ge.y,Ge.z).project(o),!(Math.hypot((pe.x-Ve.x)*et,(pe.y-Ve.y)*ct)/2>=46)&&(nn.add(Z.id),Z.owner!==Oe&&Z.ships>0&&vt(Z)&&(Hn.has(Z.parent)||Hn.set(Z.parent,[]),Hn.get(Z.parent).push(`<span class="kid" style="color:${_t(Z.owner)}">+${Z.ships}</span>`)))}for(const N of y){const{b:Z}=N,Ge=Ht[Z.id];if(N.g.position.set(Ge.x,Ge.y,Ge.z),N.line.material.uniforms&&(N.line.material.uniforms.uTh.value=Z.phase+2*Math.PI*W/Z.period),Z.parent!==null){const Se=Ht[Z.parent];N.lineHolder.position.set(Se.x,Se.y,Se.z)}else if(Z.star){const Se=Ks(O,Z.star,W);N.lineHolder.position.set(Se.x,Se.y,Se.z)}N.reach&&(N.reach.position.set(Ge.x,0,Ge.z),N.reach.visible=H.selected===Z.id||H.peek===Z.id||H.target===Z.id);{const ft=(H.selected===Z.id||H.peek===Z.id||H.target===Z.id)&&vt(Z)&&Z.structures.some(pt=>pt.type==="bureau"&&(pt.left<=0||pt.next)&&!pt.scrap);if(ft&&!N.bureau){const pt=[];for(let Xt=0;Xt<=96;Xt++){const on=Xt/96*Math.PI*2;pt.push(new U(Math.cos(on),0,Math.sin(on)))}N.bureau=new Go(new $t().setFromPoints(pt),new ja({color:"#7fd1c8",transparent:!0,opacity:.6,dashSize:.03,gapSize:.025})),N.bureau.computeLineDistances(),w.add(N.bureau)}N.bureau&&(N.bureau.visible=ft,ft&&(N.bureau.position.set(Ge.x,0,Ge.z),N.bureau.scale.setScalar(Z0(O,Z))))}if(Z.visitor){const Se=to(O,Z,W);if(N.g.visible=Se,!Se){N.label.style.visibility="hidden";continue}const ft=O.visit&&O.visit.kind==="comet";if(N.body.visible=N.tail.visible=ft,N.hulk.visible=!ft,ft){const pt=Math.max(1,Math.hypot(Ge.x,Ge.y,Ge.z)),Xt=Nt.clamp(2600/pt,8,60),on=Nt.clamp(120/pt,.55,1),ln=Ve.set(Ge.x,Ge.y,Ge.z).normalize(),bn=lt(O,Z,W+2),Sr=new U(Ge.x-bn.x,Ge.y-bn.y,Ge.z-bn.z).normalize(),{ion:Ts,dust:Vf,coma:El}=N.tail.userData;Ts.forEach((jr,Al)=>{const rr=(Al+1)/Ts.length;jr.position.copy(ln).multiplyScalar(rr*Xt),jr.scale.setScalar(.8+rr*Xt*.12),jr.material.opacity=.5*on*(1-rr)**1.3}),Vf.forEach((jr,Al)=>{const rr=(Al+1)/Vf.length;jr.position.copy(ln).multiplyScalar(rr*Xt*.75).addScaledVector(Sr,rr*rr*Xt*.35),jr.scale.setScalar(1+rr*Xt*.18),jr.material.opacity=.38*on*(1-rr)**1.1}),El.position.set(0,0,0),El.scale.setScalar(2.2+on*3),El.material.opacity=.35+on*.4}else N.hulk.rotation.y+=K*.08}if(Z.kind==="station"){N.body.rotation.z+=K*(N.body.userData.spin??.5);const Se=N.body.userData.rotor;Se&&(Se.rotation.z+=K*Se.userData.spin),N.body.userData.set(Z.owner===Oe?"#6a7080":_t(Z.owner),De(Ge),Z.owner!==Oe)}else if(Z.kind==="asteroid")N.body.rotation.x+=K*.3,N.body.rotation.y+=K*.2;else{N.body.rotation.y+=K*.05;const Se=N.body.getObjectByName("clouds");if(Se){Se.rotation.y+=K*.012;const pt=Se.material.uniforms.uHoles.value;for(let Xt=0;Xt<pt.length;Xt++){const on=Xt<(N.holes?.length||0)?N.holes[Xt]:N.megaHole&&Xt===(N.holes?.length||0)?N.megaHole:null;if(!on||!N.surface.visible){pt[Xt].w=2;continue}pe.copy(on.dir).applyAxisAngle(O2,-Se.rotation.y),pt[Xt].set(pe.x,pe.y,pe.z,on.cos)}}const ft=N.body.material.uniforms;ft&&(ft.uT.value=$,Se&&(ft.uCloudShift.value=-Se.rotation.y/(Math.PI*2)),ft.uCenter.value.set(Ge.x,Ge.y,Ge.z),N.occ.forEach((pt,Xt)=>{const on=Ht[pt];ft.uOcc.value[Xt].set(on.x,on.y,on.z,O.bodies[pt].size)}),Se&&(Se.material.uniforms.uOcc.value=ft.uOcc.value),N.atmo&&(N.atmo.material.uniforms.uCenter.value.set(Ge.x,Ge.y,Ge.z),N.atmo.material.uniforms.uOcc.value=ft.uOcc.value),N.ring&&(N.ring.updateMatrixWorld(!0),ft.uRingN.value.set(0,0,1).transformDirection(N.ring.matrixWorld),ft.uRingIn.value=N.ring.userData.ring.inner,ft.uRingOut.value=N.ring.userData.ring.outer,N.ring.material.uniforms.uCenter.value.set(Ge.x,Ge.y,Ge.z)))}const rn=_t(Z.owner);N.owner!==Z.owner&&(N.owner!==null&&(N.pulse=1),N.owner=Z.owner,N.body.material&&N.body.material.uniforms&&N.body.material.uniforms.uCity&&(N.body.material.uniforms.uCity.value=Z.owner===Oe?0:1),N.mark.material.uniforms.uColor.value.set(rn),N.label.style.color=rn),N.pulse=Math.max(0,N.pulse-K);const _n=Z.owner+":"+Z.structures.map(Se=>Se.type+Se.level+(Se.left>0&&!Se.next||Se.scrap?"~":"")).join();if(_n!==N.sig&&(N.sig=_n,N.structs&&N.structs.removeFromParent(),N.surface.clear(),N.structs=new zn,N.wips=[],N.holes=[],N.spins=[],Z.kind==="station"?(_0(N.body,Z.structures.map(Se=>({type:Se.type,level:Se.level,done:!Se.scrap&&(Se.left<=0||!!Se.next)})),pu),N.wips.push(...N.body.userData.station.wip)):Z.structures.forEach((Se,ft)=>{const pt=S2(Se.type,Z,ft,!Se.scrap&&(Se.left<=0||!!Se.next),Se.level,L.uT,pu,Z.owner===Oe?"#6a7080":_t(Z.owner));pt.userData.wip&&N.wips.push(pt.userData.wip),Se.type!=="shipyard"&&Se.type!=="skimmer"&&N.holes.push({dir:pt.position.clone().normalize(),cos:Math.cos(Math.min(.6,cm(Z)*(Se.type==="lab"||Se.type==="mine"?1.5:1.15)/Z.size))}),pt.userData.spin&&N.spins.push(...pt.userData.spin),(Se.type==="shipyard"||Se.type==="skimmer"?N.structs:N.surface).add(pt)}),N.g.add(N.structs)),N.wips){const Se=Z.slips||[];N.wips.forEach((ft,pt)=>ft.forEach((Xt,on)=>{Xt.visible=pt<Se.length&&Se[pt]>=on/3}));for(const ft of N.spins)ft.mesh.rotation[ft.axis]+=K*ft.rate}const In=H.selected===Z.id,qr=H.target===Z.id,Yr=cn(N.g.position),Sa=Z.parent!==null,Mr=Math.max(Z.size*(Sa?2:2.4)*Yr,In||qr?8:Sa?4:5.5);if(N.mark.scale.setScalar(Mr/Yr*(1+N.pulse*.6+(In?Math.sin($*5)*.06:0))),N.mark.material.uniforms.uWidth.value=Nt.clamp(Mr/12,1,1.6),N.mark.material.uniforms.uOpacity.value=In?1:qr?.9:Z.owner===Oe?.25:.7,Z.size*Yr>70&&(N.mark.material.uniforms.uOpacity.value*=.25),Z.parent!==null&&!In&&!qr){const Se=Ht[Z.parent];pe.copy(N.g.position).project(o),Ve.set(Se.x,Se.y,Se.z).project(o);const ft=Math.hypot((pe.x-Ve.x)*et,(pe.y-Ve.y)*ct)/2;N.mark.material.uniforms.uOpacity.value*=Nt.smoothstep(ft,30,60)}const hn=vt(Z)&&Z.ships>0?An(Z.vet):0;N.mark.material.uniforms.uLvl.value=hn,In||qr?N.mark.material.uniforms.uColor.value.set(In?"#ffffff":rn):N.mark.material.uniforms.uColor.value.set(rn);const sn=vt(Z);if(N.structs&&(N.structs.visible=sn),N.surface.visible=sn,Z.kind==="station")for(const Se of N.body.userData.station.parts)Se.visible=sn;const Fn=sn&&Z.sieges.length>0,gn=[],Rn=[],Ai=(Se,ft,pt,Xt,on,ln)=>{for(let bn=0;bn<Se;bn++){if(z>=rc)return;J(Z,bn,pt,Xt,on,W,pe,at),Zt(pe,at,_t(ft),!1,$,bn,on*131+bn,1,!1,.6),ln&&ln.push({p:pe.clone(),owner:ft})}};sn&&Ai(Math.min(Z.ships,20),Z.owner,Z.size*1.8+.4,du,Z.id*13,Fn?gn:null);for(const Se of sn?Z.sieges:[])Ai(Math.min(Se.n,20),Se.owner,Z.size*2.4+.8,fu,Z.id*29+Se.owner,Rn);if(Fn){const Se=lt(O,Z,W+.5),ft=lt(O,Z,W-.5);Te.drift.set(Se.x-ft.x,Se.y-ft.y,Se.z-ft.z).multiplyScalar(Xr);for(let ln=0;ln<Math.ceil(Z.guns);ln++){const bn=It(Z.id,ln*2)*Math.PI*2+$*.05,Sr=(It(ln*2+1,Z.id)-.5)*1.6,Ts=Z.size*1.02;gn.push({p:new U(Ge.x+Math.cos(bn)*Math.cos(Sr)*Ts,Ge.y+Math.sin(Sr)*Ts,Ge.z+Math.sin(bn)*Math.cos(Sr)*Ts),owner:Z.owner})}const pt=Rn.length+gn.length;let Xt=pt*K*1.6;for(;Xt>0&&Rn.length&&gn.length;){if(Math.random()<Xt){const ln=Math.random()<Rn.length/pt,bn=(ln?Rn:gn)[Math.random()*(ln?Rn:gn).length|0],Sr=(ln?gn:Rn)[Math.random()*(ln?gn:Rn).length|0];nt(bn.p,Sr.p,_t(bn.owner),Math.min(2,ne(bn.owner,"weapons")),ne(Sr.owner,"armour")>=2)}Xt-=1}for(let ln=0;ln<Math.min(3,Z.lostDef||0);ln++)Z.ships>0||!gn.length?J(Z,Z.ships+ln,Z.size*1.8+.4,du,Z.id*13,W,Ve):Ve.copy(gn[Math.random()*gn.length|0].p),Te.explosion(Ve,.9+Math.random()*.3);const on=Z.sieges[0];for(let ln=0;ln<Math.min(3,Z.lostAtk||0);ln++){if(on)J(Z,on.n+ln,Z.size*2.4+.8,fu,Z.id*29+on.owner,W,Ve);else if(Rn.length)Ve.copy(Rn[Math.random()*Rn.length|0].p);else break;Te.explosion(Ve,.9+Math.random()*.3)}}Te.drift.set(0,0,0),Z.lostDef=Z.lostAtk=0,Z.captured&&(N.pulse=1,Z.captured=!1,Te.ring(pe.set(Ge.x,Ge.y,Ge.z),_t(Z.owner),Z.size*3.5,1.4));const si=Z.wonder?1:Z.project?Math.max(.02,Math.min(1,1-Z.project.left/pn[Z.project.key].time)):0,oi=Z.wonder||Z.project&&Z.project.key||null;if(N.megaKey!==oi&&(N.megaKey=oi,N.megaObj&&(N.megaObj.removeFromParent(),N.megaObj=null,N.megaHole=null),oi)){const Se=M2(oi,Z,L.uT,pu);if(Se.userData.surface){const ft=Ti(Z.id*31+7),pt=new U(ft()-.5,(ft()-.5)*.5,ft()-.5).normalize();Se.position.copy(pt).multiplyScalar(Z.size*.995),Se.quaternion.setFromUnitVectors(new U(0,1,0),pt),N.body.add(Se),N.megaHole={dir:pt,cos:Math.cos(Math.min(.8,1/Z.size))}}else N.g.add(Se);N.megaObj=Se}N.megaObj&&(b2(N.megaObj,si,!!Z.wonder),N.megaObj.userData.set(Z.owner===Oe?"#6a7080":_t(Z.owner),De(Ge)),N.megaObj.userData.faceSun&&N.megaObj.lookAt(0,0,0),N.megaObj.userData.spinner?.rotateZ(K*.25));const On=Z.wonder?0:Math.round(si*60);if(N.megaStep!==On&&(N.megaStep=On,N.mega&&(N.g.remove(N.mega),N.mega.geometry.dispose(),N.mega=null),On)){const Se=Z.size*2.1+.6;N.mega=new zt(new ki(Se,Math.max(.05,Z.size*.04),6,96,On/60*Math.PI*2),new uf({color:"#c7a6ff",transparent:!0,opacity:.55,depthWrite:!1})),N.mega.rotation.x=Math.PI/2,N.g.add(N.mega)}if(N.mega&&(N.mega.rotation.z=$*.05),pe.copy(N.g.position).project(o),pe.z>1||nn.has(Z.id)&&H.tutWorld!==Z.id){N.label.style.visibility="hidden";continue}const ir=(sn?Z.sieges:[]).map(Se=>`<span class="atk" style="color:${_t(Se.owner)}">${bt("attack")}${Se.n}</span>`).join(""),br=sn?Z.owner===Oe?`<i class="guns">${bt("guns")}${Math.ceil(Z.guns)}</i>`:Z.ships?`<b>${Z.ships}</b>`:"":'<b class="unk">?</b>',Ig=(Hn.get(Z.id)||[]).join(""),Ug=(St.get(Z.id)||[]).map(Se=>{const ft=Math.max(0,Se.eta),pt=Se.owner===Z.owner;return`<span class="${pt?"rein":"inc"}" style="color:${_t(Se.owner)}">${bt(pt?"reinforce":"incoming")}${Se.sized?Se.n:"?"} ${Math.floor(ft/60)}:${String(Math.floor(ft%60)).padStart(2,"0")}</span>`}).join(""),Ng=(O.happenings||[]).filter(Se=>Se.at===Z.id).map(Se=>{const ft=hr[Se.kind],pt=W<Se.starts,Xt=!pt&&Se.holder!==Oe,on=Math.max(0,pt?Se.starts-W:Xt?ft.hold-Se.held:Se.ends-W),ln=Xt?_t(Se.holder):"#c7a6ff",bn=`${Math.floor(on/60)}:${String(Math.floor(on%60)).padStart(2,"0")}`;return`<span class="ev" style="color:${ln}">${bt(Se.kind)} ${pt?`in ${bn}`:Xt?`hold ${bn}`:`gone ${bn}`}</span>`}).join(""),kg=(Z.perk?`<i class="perk" title="${vn[Z.perk].name}">${bt(Z.perk)}</i> `:"")+(Z.wonder?`<i class="perk">${bt(Z.wonder)}</i> `:Z.project?`<i class="perk proj">${bt(Z.project.key)}</i> `:""),Tl=`<span class="row1">${br}${Ig}</span>${ir}${Ug}${Ng}<small>${kg}${Z.name}</small>`;Tl!==N.shown&&(N.label.innerHTML=Tl,N.shown=Tl),N.label.classList.toggle("can",H.mode==="project"&&Z.owner===(H.me??0)&&!uo(O,Z,H.projKey)),N.label.classList.toggle("tut",H.tutWorld===Z.id),H.tutWorld===Z.id&&N.label.style.setProperty("--mk",`${Math.round(Mr)}px`),N.label.style.visibility="visible";const Fg=(pe.x*.5+.5)*et,Og=(-pe.y*.5+.5)*ct;N.label.style.transform=`translate(${Fg}px, ${Og+Mr/2+2}px) translate(-50%, 0)`}yl(O,W,$);let Ot=0,vi=0;for(const N of O.fleets){if(!Ye(N))continue;const Z=Pn(N,W),Ge=_t(N.owner);at.set(N.p1.x-N.p0.x,N.p1.y-N.p0.y,N.p1.z-N.p0.z),at.lengthSq()<1e-9&&at.set(Z.nx,Z.ny,Z.nz),at.normalize(),Ze.crossVectors(at,Ct),Ze.lengthSq()<1e-6&&Ze.set(1,0,0),Ze.normalize();const rn=N.probe?1:Ut(N)?N.n:Math.min(N.n,3),_n=Math.max(3,Math.ceil(Math.sqrt(rn))),In=W-N.t0,qr=(hn,sn,Fn,gn)=>{if(N.probe)return pe.set(sn.x,sn.y,sn.z),1;const Rn=Math.floor(hn/_n),Ai=hn%_n-(_n-1)/2,si=(Nt.smoothstep(Math.min(Fn,N.T-Fn),0,12)*.5+.5)*F2,oi=It(N.id,hn),On=It(hn,N.id),Kr=It(N.id+7,hn*3),ir=$*(.3+oi*.4)+On*6;return pe.set(sn.x,sn.y,sn.z).addScaledVector(Ze,(Ai*(.8+Kr*.4)+Rn%2*.4+(oi-.5)*.6+Math.sin(ir)*.08)*si).addScaledVector(Ct,((On-.5)*.9+Math.cos(ir*.8)*.06)*si).addScaledVector(at,(-Rn*(.9+Kr*.4)-(On-.5)*.7)*si),dt(N,hn,Fn,sn,gn)},Yr=.8,Sa=N.probe?null:Pn(N,W+.5),Mr=!N.probe&&X.bodies[In<N.T-In?N.from:N.to];for(let hn=0;hn<rn&&!(z>=rc);hn++){const sn=qr(hn,Z,In,W),Fn=It(N.id+7,hn*3),gn=N.probe?Z:Pn(N,W+(Fn-.5)*2.5);Rt.set(gn.nx,gn.ny,gn.nz);let Rn=gn.burning,Ai=1+.35*ne(N.owner,"drives");if(sn<1&&Mr){const si=gt.copy(pe);qr(hn,Sa,In+.5,W+.5);const oi=lt(X,Mr,W),On=lt(X,Mr,W+.5);Qe.set(pe.x-si.x-(On.x-oi.x),pe.y-si.y-(On.y-oi.y),pe.z-si.z-(On.z-oi.z)),pe.copy(si),ve.lerp(Qe.lengthSq()>1e-8?Qe.normalize():ve,Nt.smoothstep(sn,0,.25));const Kr=Nt.smoothstep(sn,Yr,1);Rt.lerp(ve,1-Kr),Rt.lengthSq()<.05&&Rt.addScaledVector(Ze,.4),Rt.normalize(),sn<Yr?(Rn=Math.sin($*(5+Fn*4)+hn*1.7)>.35,Ai=.12):Ai*=Nt.smoothstep(sn,Yr,1)*.9+.1}Zt(pe,Rt,Ge,Rn,$,hn,N.id*97+hn,Ai,N.probe,1,W)}if(Ot<200*oe&&xt(N)){const hn=new ot(Ge);let sn=Z;for(let On=1;On<=oe;On++){const Kr=Z.progress+(1-Z.progress)*On/oe,ir=Pn(N,N.t0+Kr*N.T),br=1-On/oe*.7;te.set([sn.x,sn.y,sn.z,ir.x,ir.y,ir.z],Ot*6),ce.set([hn.r*br,hn.g*br,hn.b*br,hn.r*br,hn.g*br,hn.b*br],Ot*6),Ot++,sn=ir}const Fn=we(vi++);Fn.visible=!0,Fn.position.set(N.p1.x,N.p1.y,N.p1.z),Fn.material.uniforms.uColor.value.set(Ge);const gn=N.owner!==(H.me??0),Rn=gn?1+.35*Math.sin($*6):1;Fn.material.uniforms.uOpacity.value=gn?.9:.5;const Ai=cn(Fn.position),si=X.bodies[N.to],oi=Math.min(gn?22:14,Math.max(si?si.size*2.6*Ai:0,gn?7:5));Fn.scale.setScalar(oi*Rn/Ai),Fn.material.uniforms.uWidth.value=Nt.clamp(oi/12,1,1.6)}}if(L.end(),me.size>400||Math.floor($)%5===0)for(const[N,Z]of me)$-Z.seen>3&&me.delete(N);let nr=0;for(const N of O.fleets){const Z=Pn(N,W);pe.set(Z.x,Z.y,Z.z).project(o);const Ge=F(nr++);if(pe.z>1||!Ye(N)){Ge.style.visibility="hidden";continue}const rn=N.owner===(H.me??0),_n=N.probe?`${bt("probe")}${o.position.distanceTo(Ve.set(Z.x,Z.y,Z.z))<60?" probe":""}`:`${bt("fleet")}${Ut(N)?N.n:"?"}${N.dark?` ${bt("dark")}`:""}`,In=Ut(N)?An(N.vet):0;Ge._v!==In&&(Ge._v=In,Ge.dataset.v=In),Ge._t!==_n&&(Ge._t=_n,Ge.innerHTML=_n),Ge.style.color=_t(N.owner),Ge.style.borderColor=_t(N.owner),Ge.style.opacity=rn?H.fleet===N.id?1:.85:.6,Ge.classList.toggle("sel",H.fleet===N.id),Ge.style.visibility="visible",Ge.style.transform=`translate(${(pe.x*.5+.5)*et+12}px, ${(-pe.y*.5+.5)*ct-9}px)`}for(let N=nr;N<Pt.length;N++)Pt[N].style.visibility="hidden";for(let N=vi;N<Be.length;N++)Be[N].visible=!1;V.setDrawRange(0,Ot*2),V.attributes.position.needsUpdate=!0,V.attributes.color.needsUpdate=!0;for(const N of ue)N.live&&(N.age+=K,!(N.age<N.life)&&(N.live=!1,Te.drift.copy(N.drift),pe.copy(N.b).addScaledVector(N.drift,Wr-N.t0),N.pd?Te.intercept(pe):Te.impact(pe,N.c,N.rail)));if(Te.drift.set(0,0,0),Te.update($,2*Math.tan(Nt.degToRad(o.fov/2))/window.innerHeight),H.preview&&!H.preview.out){const{p1:N}=H.preview;He.visible=!0;const Z={...H.preview,t0:0};for(let rn=0;rn<=128;rn++){const _n=Pn(Z,rn/128*Z.T);je.attributes.position.setXYZ(rn,_n.x,_n.y,_n.z)}je.attributes.position.needsUpdate=!0,He.computeLineDistances(),He.material.dashSize=6/cn(pe.set(N.x,N.y,N.z)),He.material.gapSize=He.material.dashSize*.7;const Ge=we(vi++);Ge.visible=!0,Ge.position.set(N.x,N.y,N.z),Ge.material.uniforms.uColor.value.set("#ffffff"),Ge.material.uniforms.uOpacity.value=.6;{const rn=cn(Ge.position),_n=X.bodies[H.target],In=Math.min(22,Math.max(_n?_n.size*2.6*rn:0,8));Ge.scale.setScalar(In/rn),Ge.material.uniforms.uWidth.value=Nt.clamp(In/12,1,1.6)}}else He.visible=!1;j(K),im.value=window.innerHeight*a/(2*Math.tan(Nt.degToRad(o.fov/2))),f.uniforms.uBox.value=b.dist*.9,f.uniforms.uPR.value=a,l.uniforms.uFocus.value=b.dist,l.uniforms.uDof.value=r==="high"?1-Nt.smoothstep(b.dist,10,40):0,ee($),l.render(c,o,$)}function _s(O,H){const K=window.innerWidth,$=window.innerHeight;let q=null,W=1/0;for(const ae of y){if(!ae.g.visible||(pe.copy(ae.g.position).project(o),pe.z>1))continue;const ne=Math.hypot((pe.x*.5+.5)*K-O,(-pe.y*.5+.5)*$-H),ye=Math.max(30,ae.b.size*cn(ae.g.position)+12);ne<ye&&ne<W&&(W=ne,q=ae.b.id)}return q}function ya(O,H){b.follow=null,b.fleet=H,b.goalDist=Math.min(b.dist,10)}function tr(O,H,K,$){let q=null,W=30;for(const ae of O.fleets){if(ae.owner!==$)continue;const ne=Pn(ae,O.time);if(pe.set(ne.x,ne.y,ne.z).project(o),pe.z>1)continue;const ye=(pe.x*.5+.5)*window.innerWidth,Ce=(-pe.y*.5+.5)*window.innerHeight,Ne=Math.min(Math.hypot(ye-H,Ce-K),Math.hypot(ye+32-H,Ce-K)-6);Ne<W&&(W=Ne,q=ae.id)}return q}function ys(O,H){const K=new U(O/window.innerWidth*2-1,-(H/window.innerHeight)*2+1,.5).unproject(o),$=new cl(o.position,K.sub(o.position).normalize()),q=new qi(Ct.clone(),-b.target.y),W=$.intersectPlane(q,new U);if(W&&W.distanceTo(o.position)<b.dist*4)return W;const ae=new qi().setFromNormalAndCoplanarPoint(o.getWorldDirection(new U),b.target);return $.intersectPlane(ae,new U)}function go(O,H,K){b.fleet=null,b.follow=null,b.goalDist=null;const $=ys(O,H),q=Nt.clamp(b.dist*K,b.minDist,b.maxDist),W=q/b.dist;b.dist=q,$&&b.target.lerp($,1-W)}function Ma(O,H){b.fleet=null,b.follow=null;const K=2*b.dist*Math.tan(Nt.degToRad(o.fov/2))/window.innerHeight,$=new U().setFromMatrixColumn(o.matrixWorld,0),q=new U().crossVectors(Ct,$).normalize();b.target.addScaledVector($,-O*K).addScaledVector(q,H*K)}function Ms(O,H,K=!0){if(b.fleet=null,b.follow=H,H===null||!K)return;const $=O.bodies[H];b.goalDist=Math.max(b.minDist,$.size*9+3)}function ba(O,H,K){const $=_s(H,K);return $!==null?y[$].g.position.clone():ys(H,K)||b.target.clone()}function bs(O,H,K){b.fleet=null,b.follow=null,b.goalDist=null;const $=new U().subVectors(o.position,b.target),q=new rx().setFromVector3($);K=Nt.clamp(q.phi+K,.15,Math.PI-.15)-q.phi;const ae=new U().setFromMatrixColumn(o.matrixWorld,0).normalize(),ne=new Yn().setFromAxisAngle(Ct,H).multiply(new Yn().setFromAxisAngle(ae,K)),ye=o.position.clone().sub(O).applyQuaternion(ne).add(O);b.target.sub(O).applyQuaternion(ne).add(O),q.setFromVector3(ye.clone().sub(b.target)),b.az=q.theta,b.pol=q.phi,b.dist=q.radius}const vo=()=>b.follow!==null||b.fleet!=null;function xo(O){b.goalDist=null,b.dist=Nt.clamp(b.dist*O,b.minDist,b.maxDist)}function bl(O,H,K){if(vo()){xo(K);return}const $=_s(O,H);if(b.goalDist=null,$===null){go(O,H,K);return}b.follow=null;const q=y[$].g.position,W=Nt.clamp(b.dist*K,b.minDist,b.maxDist);b.target.lerp(q,1-W/b.dist),b.dist=W}function Sl(O){return pe.copy(y[O].g.position).project(o),{x:(pe.x*.5+.5)*window.innerWidth,y:(-pe.y*.5+.5)*window.innerHeight}}function wl(O){r=O,a=s(),l.setSamples(O==="high"?4:2),l.setLevel(O),Kt()}l.setLevel(r);let Ss=0,ws=0,P=null,Y=0,se=null,Q=!1;function ee(O){if(P!==null){const q=O-P;q>0&&q<.5&&(ws+=q,Ss++)}if(P=O,Ss<90)return;const H=ws/Ss;ws=0,Ss=0;const K=s(),$=K>=1.5?Math.max(1,K*.65):K*.85;if(se){H>se.avg*.9&&(a=se.pr,Q=!0,Kt()),se=null;return}!Q&&H>1/45&&a>$?(se={pr:a,avg:H},a=Math.max($,a-.25),Y=O+20,Kt()):H<1/57&&a<K&&O>Y&&(a=Math.min(K,a+.25),Kt())}return{_debug:{scene:c,renderer:i,post:l,camera:o,fx:Te,get pixelRatio(){return a}},build:A,render:Ml,resize:Kt,setQuality:wl,pick:_s,pickFleet:tr,followFleet:ya,orbit:b,zoomAt:go,pan:Ma,focus:Ms,screenOf:Sl,pivotAt:ba,rotateAround:bs,zoomToward:bl,zoomBy:xo,following:vo}}class H2{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return $2(e).buffer}}function $2(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function xm(n){return new W2(n).unpack()}function _m(n){const e=new X2,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class W2{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,a;for(;i<e;)s=t[i],s<160?(a=s,i++):(s^192)<32?(a=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(a=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(a=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class X2{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),a=2**32,c=t<<31|i+1023<<20|s/a&1048575,o=s%a;this._bufferBuilder.append(203),this.pack_int32(c),this.pack_int32(o)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const a=t[s];if(e.hasOwnProperty(a)){this.pack(a);const c=this.pack(e[a]);if(c instanceof Promise)return c.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new H2,this._textEncoder=new TextEncoder}}let ym=!0,Mm=!0;function $o(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function gs(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Mf("Unable to polyfill events");return}const r=n.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(c,o){if(c!==e)return s.apply(this,arguments);const l=u=>{const h=t(u);h&&(o.handleEvent?o.handleEvent(h):o(h))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(o,l),s.apply(this,[c,l])};const a=r.removeEventListener;r.removeEventListener=function(c,o){if(c!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(o))return a.apply(this,arguments);const l=this._eventMap[e].get(o);return this._eventMap[e].delete(o),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[c,l])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(c){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),c&&this.addEventListener(e,this["_on"+e]=c)},enumerable:!0,configurable:!0})}function q2(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(ym=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function Y2(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Mm=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function Mf(){if(typeof window=="object"){if(ym)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function bf(n,e){Mm&&console.warn(n+" is deprecated, please use "+e+" instead.")}function K2(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i){const r=parseInt(i.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt($o(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt($o(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt($o(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=$o(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function C0(n){return Object.prototype.toString.call(n)==="[object Object]"}function bm(n){return C0(n)?Object.keys(n).reduce(function(e,t){const i=C0(n[t]),r=i?bm(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function xd(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?xd(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{xd(n,n.get(r),t)})}))}function R0(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&s.push(a)}),s.forEach(a=>{n.forEach(c=>{c.type===i&&c.trackId===a.id&&xd(n,c,r)})}),r}const P0=Mf;function Sm(n,e){if(e.version>=64)return;const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(c){if(typeof c!="object"||c.mandatory||c.optional)return c;const o={};return Object.keys(c).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof c[l]=="object"?c[l]:{ideal:c[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const h=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(u.ideal!==void 0){o.optional=o.optional||[];let d={};typeof u.ideal=="number"?(d[h("min",l)]=u.ideal,o.optional.push(d),d={},d[h("max",l)]=u.ideal,o.optional.push(d)):(d[h("",l)]=u.ideal,o.optional.push(d))}u.exact!==void 0&&typeof u.exact!="number"?(o.mandatory=o.mandatory||{},o.mandatory[h("",l)]=u.exact):["min","max"].forEach(d=>{u[d]!==void 0&&(o.mandatory=o.mandatory||{},o.mandatory[h(d,l)]=u[d])})}),c.advanced&&(o.optional=(o.optional||[]).concat(c.advanced)),o},r=function(c,o){if(e.version>=61)return o(c);if(c=JSON.parse(JSON.stringify(c)),c&&typeof c.audio=="object"){const l=function(u,h,d){h in u&&!(d in u)&&(u[d]=u[h],delete u[h])};c=JSON.parse(JSON.stringify(c)),l(c.audio,"autoGainControl","googAutoGainControl"),l(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=i(c.audio)}if(c&&typeof c.video=="object"){let l=c.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete c.video.facingMode;let h;if(l.exact==="environment"||l.ideal==="environment"?h=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(h=["front"]),h)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(x=>x.kind==="videoinput");let f=d.find(x=>h.some(_=>x.label.toLowerCase().includes(_)));return!f&&d.length&&h.includes("back")&&(f=d[d.length-1]),f&&(c.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),c.video=i(c.video),P0("chrome: "+JSON.stringify(c)),o(c)})}c.video=i(c.video)}return P0("chrome: "+JSON.stringify(c)),o(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(c,o,l){r(c,u=>{t.webkitGetUserMedia(u,o,h=>{l&&l(s(h))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const c=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(o){return r(o,l=>c(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(h=>{h.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function wm(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function Tm(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(o=>o.track&&o.track.id===s.track.id):a={track:s.track};const c=new Event("track");c.track=s.track,c.receiver=a,c.transceiver={receiver:a},c.streams=[r.stream],this.dispatchEvent(c)}),r.stream.getTracks().forEach(s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(o=>o.track&&o.track.id===s.id):a={track:s};const c=new Event("track");c.track=s,c.receiver=a,c.transceiver={receiver:a},c.streams=[r.stream],this.dispatchEvent(c)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else gs(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Em(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(c,o){let l=r.apply(this,arguments);return l||(l=e(this,c),this._senders.push(l)),l};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(c){s.apply(this,arguments);const o=this._senders.indexOf(c);o!==-1&&this._senders.splice(o,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(a=>{const c=this._senders.find(o=>o.track===a);c&&this._senders.splice(this._senders.indexOf(c),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Am(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const a=i.apply(this,[]);return a.forEach(c=>c._pc=this),a});const r=n.RTCPeerConnection.prototype.addTrack;r&&(n.RTCPeerConnection.prototype.addTrack=function(){const a=r.apply(this,arguments);return a._pc=this,a}),n.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(c=>R0(c,a.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const s=i.apply(this,[]);return s.forEach(a=>a._pc=this),s}),gs(n,"track",r=>(r.receiver._pc=r.srcElement,r)),n.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(a=>R0(a,s.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const r=arguments[0];let s,a,c;return this.getSenders().forEach(o=>{o.track===r&&(s?c=!0:s=o)}),this.getReceivers().forEach(o=>(o.track===r&&(a?c=!0:a=o),o.track===r)),c||s&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Cm(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,c){if(!c)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const o=e.apply(this,arguments);return this._shimmedLocalStreams[c.id]?this._shimmedLocalStreams[c.id].indexOf(o)===-1&&this._shimmedLocalStreams[c.id].push(o):this._shimmedLocalStreams[c.id]=[c,o],o};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(h=>h.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const c=this.getSenders();t.apply(this,arguments);const o=this.getSenders().filter(l=>c.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(o)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(c=>{const o=this._shimmedLocalStreams[c].indexOf(a);o!==-1&&this._shimmedLocalStreams[c].splice(o,1),this._shimmedLocalStreams[c].length===1&&delete this._shimmedLocalStreams[c]}),r.apply(this,arguments)}}function Rm(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Cm(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(h=>this._reverseStreams[h.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(h=>{if(this.getSenders().find(f=>f.track===h))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const h=new n.MediaStream(u.getTracks());this._streams[u.id]=h,this._reverseStreams[h.id]=u,u=h}i.apply(this,[u])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},n.RTCPeerConnection.prototype.addTrack=function(u,h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const x=this._streams[h.id];if(x)x.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new n.MediaStream([u]);this._streams[h.id]=_,this._reverseStreams[_.id]=h,this.addStream(_)}return this.getSenders().find(_=>_.track===u)};function s(l,u){let h=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],x=l._streams[f.id];h=h.replace(new RegExp(x.id,"g"),f.id)}),new RTCSessionDescription({type:u.type,sdp:h})}function a(l,u){let h=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],x=l._streams[f.id];h=h.replace(new RegExp(f.id,"g"),x.id)}),new RTCSessionDescription({type:u.type,sdp:h})}["createOffer","createAnswer"].forEach(function(l){const u=n.RTCPeerConnection.prototype[l],h={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[x=>{const _=s(this,x);d[0].apply(null,[_])},x=>{d[1]&&d[1].apply(null,x)},arguments[2]]):u.apply(this,arguments).then(x=>s(this,x))}};n.RTCPeerConnection.prototype[l]=h[l]});const c=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?c.apply(this,arguments):(arguments[0]=a(this,arguments[0]),c.apply(this,arguments))};const o=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const l=o.get.apply(this);return l.type===""?l:s(this,l)}}),n.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(_=>u.track===_)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function _d(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function Pm(n,e){e.version>102||gs(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const L0=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Pm,shimAddTrackRemoveTrack:Rm,shimAddTrackRemoveTrackWithNative:Cm,shimGetSendersWithDtmf:Em,shimGetUserMedia:Sm,shimMediaStream:wm,shimOnTrack:Tm,shimPeerConnection:_d,shimSenderReceiverGetStats:Am},Symbol.toStringTag,{value:"Module"}));function Lm(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,a){bf("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(a,c,o){c in a&&!(o in a)&&(a[o]=a[c],delete a[c])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a.audio,"autoGainControl","mozAutoGainControl"),r(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},i&&i.prototype.getSettings){const a=i.prototype.getSettings;i.prototype.getSettings=function(){const c=a.apply(this,arguments);return r(c,"mozAutoGainControl","autoGainControl"),r(c,"mozNoiseSuppression","noiseSuppression"),c}}if(i&&i.prototype.applyConstraints){const a=i.prototype.applyConstraints;i.prototype.applyConstraints=function(c){return this.kind==="audio"&&typeof c=="object"&&(c=JSON.parse(JSON.stringify(c)),r(c,"autoGainControl","mozAutoGainControl"),r(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}function j2(n,e){n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)}))}function Dm(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function yd(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]}))}function Im(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,a,c]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[s||null]).then(o=>{if(e.version<53&&!a)try{o.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;o.forEach((u,h)=>{o.set(h,Object.assign({},u,{type:t[u.type]||u.type}))})}return o}).then(a,c)}}function Um(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Nm(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),gs(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function km(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){bf("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function Fm(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function Om(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.addTransceiver;t&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(c=>{if("rid"in c&&!/^[a-z0-9]{0,16}$/i.test(c.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in c&&!(parseFloat(c.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in c&&!(parseFloat(c.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(s){const{sender:c}=a,o=c.getParameters();(!("encodings"in o)||o.encodings.length===1&&Object.keys(o.encodings[0]).length===0)&&(o.encodings=r,c.sendEncodings=r,this.setParametersPromises.push(c.setParameters(o).then(()=>{delete c.sendEncodings}).catch(()=>{delete c.sendEncodings})))}return a})}function zm(n,e){if(!(typeof n=="object"&&n.RTCRtpSender)||e.version>=110)return;const t=n.RTCRtpSender.prototype.getParameters;t&&(n.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function Bm(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Gm(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const D0=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Om,shimCreateAnswer:Gm,shimCreateOffer:Bm,shimGetDisplayMedia:j2,shimGetParameters:zm,shimGetStats:Im,shimGetUserMedia:Lm,shimOnTrack:Dm,shimPeerConnection:yd,shimRTCDataChannel:Fm,shimReceiverGetStats:Nm,shimRemoveStream:km,shimSenderGetStats:Um},Symbol.toStringTag,{value:"Module"}));function Vm(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function Hm(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const a=new Event("addstream");a.stream=s,i.dispatchEvent(a)})}),e.apply(i,arguments)}}}function $m(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,u){const h=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[h]);return u?(d.then(l,u),Promise.resolve()):d},e.createAnswer=function(l,u){const h=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[h]);return u?(d.then(l,u),Promise.resolve()):d};let c=function(o,l,u){const h=r.apply(this,[o]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=c,c=function(o,l,u){const h=s.apply(this,[o]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=c,c=function(o,l,u){const h=a.apply(this,[o]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=c}function Wm(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(Xm(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}.bind(e))}function Xm(n){return n&&n.video!==void 0?Object.assign({},n,{video:bm(n.video)}):n}function qm(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let a=0;a<i.iceServers.length;a++){let c=i.iceServers[a];c.urls===void 0&&c.url?(bf("RTCIceServer.url","RTCIceServer.urls"),c=JSON.parse(JSON.stringify(c)),c.urls=c.url,delete c.url,s.push(c)):s.push(i.iceServers[a])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Ym(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Km(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function jm(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const I0=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:jm,shimCallbacksAPI:$m,shimConstraints:Xm,shimCreateOfferLegacy:Km,shimGetUserMedia:Wm,shimLocalStreamsAPI:Vm,shimRTCIceServerUrls:qm,shimRemoteStreamsAPI:Hm,shimTrackEventTransceiver:Ym},Symbol.toStringTag,{value:"Module"}));function Z2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zm={exports:{}};(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(r=>r.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const r={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let s=8;s<i.length;s+=2)switch(i[s]){case"raddr":r.relatedAddress=i[s+1];break;case"rport":r.relatedPort=parseInt(i[s+1],10);break;case"tcptype":r.tcpType=i[s+1];break;case"ufrag":r.ufrag=i[s+1],r.usernameFragment=i[s+1];break;default:r[i[s]]===void 0&&(r[i[s]]=i[s+1]);break}return r},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const r=t.component;r==="rtp"?i.push(1):r==="rtcp"?i.push(2):i.push(r),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const s=t.type;return i.push("typ"),i.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const r={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),r.name=i[0],r.clockRate=parseInt(i[1],10),r.channels=i.length===3?parseInt(i[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<s.length;a++)r=s[a].trim().split("="),i[r[0].trim()]=r[1];return i},e.writeFmtp=function(t){let i="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?s.push(a+"="+t.parameters[a]):s.push(a)}),i+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{i+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,i),10)},s=t.indexOf(":",i);return s>-1?(r.attribute=t.substring(i+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(i+1),r},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(r=>parseInt(r,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let r="a=setup:"+i+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const r=e.matchPrefix(t+i,"a=ice-ufrag:")[0],s=e.matchPrefix(t+i,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let c=3;c<s.length;c++){const o=s[c],l=e.matchPrefix(t,"a=rtpmap:"+o+" ")[0];if(l){const u=e.parseRtpMap(l),h=e.matchPrefix(t,"a=fmtp:"+o+" ");switch(u.parameters=h.length?e.parseFmtp(h[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+o+" ").map(e.parseRtcpFb),i.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(c=>{i.headerExtensions.push(e.parseExtmap(c))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(c=>{a.forEach(o=>{c.rtcpFeedback.find(u=>u.type===o.type&&u.parameter===o.parameter)||c.rtcpFeedback.push(o)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(a=>{r+=e.writeRtpMap(a),r+=e.writeFmtp(a),r+=e.writeRtcpFb(a)});let s=0;return i.codecs.forEach(a=>{a.maxptime>s&&(s=a.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(a=>{r+=e.writeExtmap(a)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,a=r.fecMechanisms.indexOf("ULPFEC")!==-1,c=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),o=c.length>0&&c[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(x=>parseInt(x,10)));u.length>0&&u[0].length>1&&u[0][0]===o&&(l=u[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:o,codecPayloadType:parseInt(d.parameters.apt,10)};o&&l&&(f.rtx={ssrc:l}),i.push(f),s&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:o,mechanism:a?"red+ulpfec":"red"},i.push(f))}}),i.length===0&&o&&i.push({ssrc:o});let h=e.matchPrefix(t,"b=");return h.length&&(h[0].indexOf("b=TIAS:")===0?h=parseInt(h[0].substring(7),10):h[0].indexOf("b=AS:")===0?h=parseInt(h[0].substring(5),10)*1e3*.95-50*40*8:h=void 0,i.forEach(d=>{d.maxBitrate=h})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(c=>e.parseSsrcMedia(c)).filter(c=>c.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return i.mux=a.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return i=r[0].substring(7).split(" "),{stream:i[0],track:i[1]};const s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(s.length>0)return i=s[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:i.fmt,maxMessageSize:s};const c=e.matchPrefix(t,"a=sctpmap:");if(c.length>0){const o=c[0].substring(10).split(" ");return{port:parseInt(o[0],10),protocol:o[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,i){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&r.push("a=max-message-size:"+i.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,r){let s;const a=i!==void 0?i:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(Zm);var Jm=Zm.exports;const Qs=Z2(Jm),J2=Bg({__proto__:null,default:Qs},[Jm]);function gc(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=Qs.parseCandidate(i.candidate);for(const a in s)a in r||Object.defineProperty(r,a,{value:s[a]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,gs(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Md(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||gs(n,"icecandidate",e=>{if(e.candidate){const t=Qs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function vc(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(c){if(!c||!c.sdp)return!1;const o=Qs.splitSections(c.sdp);return o.shift(),o.some(l=>{const u=Qs.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},i=function(c){const o=c.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(o===null||o.length<2)return-1;const l=parseInt(o[1],10);return l!==l?-1:l},r=function(c){let o=65536;return e.browser==="firefox"&&(e.version<57?c===-1?o=16384:o=2147483637:e.version<60?o=e.version===57?65535:65536:o=2147483637),o},s=function(c,o){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=Qs.matchPrefix(c.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&o!==-1&&(l=2147483637),l},a=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:o}=this.getConfiguration();o==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const o=i(arguments[0]),l=r(o),u=s(arguments[0],o);let h;l===0&&u===0?h=Number.POSITIVE_INFINITY:l===0||u===0?h=Math.max(l,u):h=Math.min(l,u);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return h}}),this._sctp=d}return a.apply(this,arguments)}}function xc(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const a=r.send;r.send=function(){const o=arguments[0],l=o.length||o.size||o.byteLength;if(r.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return a.apply(r,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const s=i.apply(this,arguments);return t(s,this),s},gs(n,"datachannel",r=>(t(r.channel,r.target),r))}function bd(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const a=new Event("connectionstatechange",r);s.dispatchEvent(a)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function Sd(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function _c(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function yc(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Q2=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Sd,shimAddIceCandidateNullOrEmpty:_c,shimConnectionState:bd,shimMaxMessageSize:vc,shimParameterlessSetLocalDescription:yc,shimRTCIceCandidate:gc,shimRTCIceCandidateRelayProtocol:Md,shimSendThrowTypeError:xc},Symbol.toStringTag,{value:"Module"}));function eS({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Mf,i=K2(n),r={browserDetails:i,commonShim:Q2,extractVersion:$o,disableLog:q2,disableWarnings:Y2,sdp:J2};switch(i.browser){case"chrome":if(!L0||!_d||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=L0,_c(n,i),yc(n),Sm(n,i),wm(n),_d(n,i),Tm(n,i),Rm(n,i),Em(n),Am(n,i),Pm(n,i),gc(n),Md(n),bd(n),vc(n,i),xc(n,i),Sd(n,i);break;case"firefox":if(!D0||!yd||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=D0,_c(n,i),yc(n),Lm(n,i),yd(n,i),Im(n,i),Dm(n),km(n),Um(n),Nm(n),Fm(n),Om(n,i),zm(n,i),Bm(n,i),Gm(n,i),gc(n),bd(n),vc(n,i),xc(n,i);break;case"safari":if(!I0||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=I0,_c(n,i),yc(n),qm(n),Km(n),$m(n),Vm(n),Hm(n),Ym(n),Wm(n),jm(n),gc(n),Md(n),vc(n,i),xc(n,i),Sd(n,i);break;default:t("Unsupported browser!");break}return r}const U0=eS({window:typeof window>"u"?void 0:window});function vs(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class Qm{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,a=0;for(;a<i;){const c=Math.min(i,a+this.chunkedMTU),o=e.slice(a,c),l={__peerData:this._dataCount,n:s,data:o,total:r};t.push(l),a=c,s++}return this._dataCount++,t}}}function tS(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const mu=U0.default||U0,Oo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return mu.browserDetails.browser}getVersion(){return mu.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=mu.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},nS=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),eg=()=>Math.random().toString(36).slice(2),N0={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class iS extends Qm{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=N0,this.browser=Oo.getBrowser(),this.browserVersion=Oo.getVersion(),this.pack=_m,this.unpack=xm,this.supports=function(){const t={browser:Oo.isBrowserSupported(),webRTC:Oo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(N0),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Oo.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t}(),this.validateId=nS,this.randomToken=eg}}const ai=new iS,rS="PeerJS: ";class sS{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[rS,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var We=new sS,Sf={},oS=Object.prototype.hasOwnProperty,ri="~";function fa(){}Object.create&&(fa.prototype=Object.create(null),new fa().__proto__||(ri=!1));function aS(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function tg(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new aS(t,i||n,r),a=ri?ri+e:e;return n._events[a]?n._events[a].fn?n._events[a]=[n._events[a],s]:n._events[a].push(s):(n._events[a]=s,n._eventsCount++),n}function Mc(n,e){--n._eventsCount===0?n._events=new fa:delete n._events[e]}function jn(){this._events=new fa,this._eventsCount=0}jn.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)oS.call(t,i)&&e.push(ri?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};jn.prototype.listeners=function(e){var t=ri?ri+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,a=new Array(s);r<s;r++)a[r]=i[r].fn;return a};jn.prototype.listenerCount=function(e){var t=ri?ri+e:e,i=this._events[t];return i?i.fn?1:i.length:0};jn.prototype.emit=function(e,t,i,r,s,a){var c=ri?ri+e:e;if(!this._events[c])return!1;var o=this._events[c],l=arguments.length,u,h;if(o.fn){switch(o.once&&this.removeListener(e,o.fn,void 0,!0),l){case 1:return o.fn.call(o.context),!0;case 2:return o.fn.call(o.context,t),!0;case 3:return o.fn.call(o.context,t,i),!0;case 4:return o.fn.call(o.context,t,i,r),!0;case 5:return o.fn.call(o.context,t,i,r,s),!0;case 6:return o.fn.call(o.context,t,i,r,s,a),!0}for(h=1,u=new Array(l-1);h<l;h++)u[h-1]=arguments[h];o.fn.apply(o.context,u)}else{var d=o.length,f;for(h=0;h<d;h++)switch(o[h].once&&this.removeListener(e,o[h].fn,void 0,!0),l){case 1:o[h].fn.call(o[h].context);break;case 2:o[h].fn.call(o[h].context,t);break;case 3:o[h].fn.call(o[h].context,t,i);break;case 4:o[h].fn.call(o[h].context,t,i,r);break;default:if(!u)for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];o[h].fn.apply(o[h].context,u)}}return!0};jn.prototype.on=function(e,t,i){return tg(this,e,t,i,!1)};jn.prototype.once=function(e,t,i){return tg(this,e,t,i,!0)};jn.prototype.removeListener=function(e,t,i,r){var s=ri?ri+e:e;if(!this._events[s])return this;if(!t)return Mc(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!r||a.once)&&(!i||a.context===i)&&Mc(this,s);else{for(var c=0,o=[],l=a.length;c<l;c++)(a[c].fn!==t||r&&!a[c].once||i&&a[c].context!==i)&&o.push(a[c]);o.length?this._events[s]=o.length===1?o[0]:o:Mc(this,s)}return this};jn.prototype.removeAllListeners=function(e){var t;return e?(t=ri?ri+e:e,this._events[t]&&Mc(this,t)):(this._events=new fa,this._eventsCount=0),this};jn.prototype.off=jn.prototype.removeListener;jn.prototype.addListener=jn.prototype.on;jn.prefixed=ri;jn.EventEmitter=jn;Sf=jn;var xs={};vs(xs,"ConnectionType",()=>Br);vs(xs,"PeerErrorType",()=>wn);vs(xs,"BaseConnectionErrorType",()=>wd);vs(xs,"DataConnectionErrorType",()=>wf);vs(xs,"SerializationType",()=>hl);vs(xs,"SocketEventType",()=>Fr);vs(xs,"ServerMessageType",()=>qn);var Br=function(n){return n.Data="data",n.Media="media",n}({}),wn=function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n}({}),wd=function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n}({}),wf=function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n}({}),hl=function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n}({}),Fr=function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n}({}),qn=function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n}({});const ng="1.5.5";class cS extends Sf.EventEmitter{constructor(e,t,i,r,s,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const c=e?"wss://":"ws://";this._baseUrl=c+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+ng),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),We.log("Server message received:",s)}catch{We.log("Invalid server message",r.data);return}this.emit(Fr.Message,s)},this._socket.onclose=r=>{this._disconnected||(We.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(Fr.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),We.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){We.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:qn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Fr.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class ig{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Br.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){We.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;We.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(We.log(`Received ICE candidates for ${t}:`,a.candidate),s.socket.send({type:qn.Candidate,payload:{candidate:a.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":We.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(wd.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":We.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(wd.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":We.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},We.log("Listening for data channel"),e.ondatachannel=a=>{We.log("Received data channel");const c=a.channel;s.getConnection(t,i)._initializeDataChannel(c)},We.log("Listening for remote stream"),e.ontrack=a=>{We.log("Received remote stream");const c=a.streams[0],o=s.getConnection(t,i);if(o.type===Br.Media){const l=o;this._addStreamToMediaConnection(c,l)}}}cleanup(){We.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);We.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),We.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Br.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:qn.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(wn.WebRTC,r),We.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(wn.WebRTC,i),We.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();We.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),We.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:qn.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(wn.WebRTC,r),We.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(wn.WebRTC,i),We.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;We.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),We.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(a){r.emitError(wn.WebRTC,a),We.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){We.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),We.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(wn.WebRTC,t),We.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(We.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return We.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){We.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class rg extends Sf.EventEmitter{emitError(e,t){We.error("Error:",t),this.emit("error",new lS(`${e}`,t))}}class lS extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class sg extends rg{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var Id;const ta=class ta extends sg{get type(){return Br.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||ta.ID_PREFIX+ai.randomToken(),this._negotiator=new ig(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{We.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{We.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){We.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case qn.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case qn.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:We.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){We.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Id=new WeakMap,_o(ta,Id,ta.ID_PREFIX="mc_");let Yc=ta;class uS{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:a}=this._options,c=new URL(`${t}://${i}:${r}${s}${a}/${e}`);return c.searchParams.set("ts",`${Date.now()}${Math.random()}`),c.searchParams.set("version",ng),fetch(c.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){We.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==ai.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===ai.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw We.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Ud,Nd;const rs=class rs extends sg{get type(){return Br.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||rs.ID_PREFIX+eg(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new ig(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{We.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{We.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{We.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(wf.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case qn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case qn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:We.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Ud=new WeakMap,Nd=new WeakMap,_o(rs,Ud,rs.ID_PREFIX="dc_"),_o(rs,Nd,rs.MAX_BUFFERED_AMOUNT=8388608);let Kc=rs;class Tf extends Kc{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Kc.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return We.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class gu extends Tf{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new Qm,this.serialization=hl.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=xm(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=tS(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=_m(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);We.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class dS extends Tf{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=hl.None}}class fS extends Tf{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=ai.chunkedMTU){this.emitError(wf.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=hl.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var kd;const na=class na extends rg{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:dS,json:fS,binary:gu,"binary-utf8":gu,default:gu},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:ai.CLOUD_HOST,port:ai.CLOUD_PORT,path:"/",key:na.DEFAULT_KEY,token:ai.randomToken(),config:ai.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==ai.CLOUD_HOST?this._options.secure=ai.isSecure():this._options.host==ai.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&We.setLogFunction(this._options.logFunction),We.logLevel=this._options.debug||0,this._api=new uS(t),this._socket=this._createServerConnection(),!ai.supports.audioVideo&&!ai.supports.data){this._delayedAbort(wn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!ai.validateId(i)){this._delayedAbort(wn.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(wn.ServerError,r))}_createServerConnection(){const e=new cS(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Fr.Message,t=>{this._handleMessage(t)}),e.on(Fr.Error,t=>{this._abort(wn.SocketError,t)}),e.on(Fr.Disconnected,()=>{this.disconnected||(this.emitError(wn.Network,"Lost connection to server."),this.disconnect())}),e.on(Fr.Close,()=>{this.disconnected||this._abort(wn.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case qn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case qn.Error:this._abort(wn.ServerError,i.msg);break;case qn.IdTaken:this._abort(wn.UnavailableID,`ID "${this.id}" is taken`);break;case qn.InvalidKey:this._abort(wn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case qn.Leave:We.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case qn.Expire:this.emitError(wn.PeerUnavailable,`Could not connect to peer ${r}`);break;case qn.Offer:{const s=i.connectionId;let a=this.getConnection(r,s);if(a&&(a.close(),We.warn(`Offer received for existing Connection ID:${s}`)),i.type===Br.Media){const o=new Yc(r,this,{connectionId:s,_payload:i,metadata:i.metadata});a=o,this._addConnection(r,a),this.emit("call",o)}else if(i.type===Br.Data){const o=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});a=o,this._addConnection(r,a),this.emit("connection",o)}else{We.warn(`Received malformed connection type:${i.type}`);return}const c=this._getMessages(s);for(const o of c)a.handleMessage(o);break}default:{if(!i){We.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,a=this.getConnection(r,s);a&&a.peerConnection?a.handleMessage(e):s?this._storeMessage(s,e):We.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){We.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(wn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){We.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(wn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){We.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new Yc(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){We.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){We.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(We.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;We.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)We.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)We.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(wn.ServerError,t))}};kd=new WeakMap,_o(na,kd,na.DEFAULT_KEY="peerjs");let Td=na;var og=Td;const ag="perihelion-v1-",k0="ABCDEFGHJKLMNPQRSTUVWXYZ",jc=3,vu=new URLSearchParams(location.search).get("peer"),cg=vu?{host:vu.split(":")[0],port:Number(vu.split(":")[1]||9e3),path:"/",secure:!1,debug:0}:{debug:0},hS=()=>Array.from({length:5},()=>k0[Math.random()*k0.length|0]).join("");function pS(n,e){const t=hS(),i=new og(ag+t,cg),r=[{kind:"human",name:n,online:!0}];let s=!1;const a=()=>r.map(l=>({kind:l.kind,name:l.name,online:l.online,difficulty:l.difficulty})),c=(l,u)=>{try{l&&l.open&&l.send(u)}catch{}},o={code:t,seats:r,get started(){return s},broadcast(l){for(const u of r)u.conn&&c(u.conn,l)},sendTo(l,u){c(r[l]?.conn,u)},lobby(){for(const[l,u]of r.entries())u.conn&&c(u.conn,{t:"lobby",seats:a(),you:l,code:t});e.seats(a())},addAI(l){s||r.length>=jc||(r.push({kind:"ai",name:`AI · ${l}`,online:!0,difficulty:l}),o.lobby())},remove(l){if(s||l===0||!r[l])return;const[u]=r.splice(l,1);u.conn&&(c(u.conn,{t:"kicked"}),setTimeout(()=>u.conn.close(),200)),o.lobby()},start(){s=!0},close(){i.destroy()}};return i.on("open",()=>e.open(t)),i.on("error",l=>e.error(l.type==="unavailable-id"?"Code clash, try again":`Connection problem (${l.type})`)),i.on("connection",l=>{l.on("data",u=>{if(u.t==="hello"){const h=lg(u.name),d=typeof u.token=="string"?u.token.slice(0,64):"";let f=d?r.findIndex((x,_)=>_!==0&&x.kind==="human"&&!x.online&&x.token===d):-1;if(f<0&&s){c(l,{t:"full",why:"Game already started"});return}if(f<0){if(r.length>=jc){c(l,{t:"full",why:"Room is full"});return}if(r.some(x=>x.online&&x.token&&x.token===d)){c(l,{t:"full",why:"Already in this room"});return}r.push({kind:"human",name:mS(r,h),token:d}),f=r.length-1}Object.assign(r[f],{conn:l,online:!0}),o.lobby(),s&&e.rejoin(f)}else if(u.t==="cmd"&&u.cmd&&typeof u.cmd=="object"){const h=r.findIndex(d=>d.conn===l);h>0&&e.cmd(h,u.cmd)}}),l.on("close",()=>{const u=r.findIndex(h=>h.conn===l);if(!(u<0)){if(!s){r.splice(u,1),o.lobby();return}r[u].online=!1,r[u].conn=null,o.lobby(),e.left(u)}})}),o}function lg(n){return String(n??"").replace(/[<>&"'`]/g,"").trim().slice(0,16)||"Player"}function mS(n,e){let t=e||"Player",i=2;for(;n.some(r=>r.name===t);)t=`${e} ${i++}`;return t}function gS(n,e,t,i){const r=new og(cg);let s=null;const a={send(c){try{s&&s.open&&s.send(c)}catch{}},close(){r.destroy()}};return r.on("open",()=>{s=r.connect(ag+n.toUpperCase(),{reliable:!0});const c=setTimeout(()=>{s.open||i.error("No game found with that code")},9e3);s.on("open",()=>{clearTimeout(c),a.send({t:"hello",name:e,token:t})}),s.on("data",o=>i.message(o)),s.on("close",()=>i.closed())}),r.on("error",c=>i.error(c.type==="peer-unavailable"?"No game found with that code":`Connection problem (${c.type})`)),a}function ug(n,e){const t=n.bodies.find(s=>s.owner===e&&s.home)||n.bodies.find(s=>s.owner===e);if(!t)return null;const i=s=>fo(n,t,s,n.time).T+(s.ships+s.guns)*25,r=n.bodies.filter(s=>s.owner===Oe&&!s.visitor&&!s.giant).map(s=>[i(s),s]);return r.sort((s,a)=>s[0]-a[0]),r.length?r[0][1]:null}const ns=n=>n.touch?"tap":"click",F0=n=>n.touch?"Tap":"Click",Wo=[{title:"Your homeworld",text:n=>`This is <b>${n.home.name}</b>. Blue rings mark your worlds. ${n.touch?"Tap":"Click"} it to select it.`,world:n=>n.home.id,done:n=>n.ui.selected===n.home.id},{title:"Look around",text:n=>n.touch?"Drag to turn the view. Pinch to zoom, and drag with two fingers to slide the map. Double-tap a world to fly to it; the target button shows the whole system.":"Right-drag to turn the view, scroll to zoom, drag to slide the map. Double-click a world to fly to it; the target button (or H) shows the whole system.",point:"#system",done:n=>n.moved>1},{title:"Credits and crew",text:n=>`Top left: your credits, and what you earn each second. Every world you hold earns; mines and harvesters add more.${n.game.crew?" Beside it, crew: every ship needs one, and your worlds and Habitats supply them.":""}`,point:"#clock"},{title:"Order a ship",text:n=>`${n.ui.selected===n.home.id?"":`Select <b>${n.home.name}</b>, then ${ns(n)}`}${n.ui.selected===n.home.id?F0(n):""} <b>+ Ship</b>. Its shipyard builds one at a time (${be.ship.cost} credits each). Ships are never built for you.`,point:'[data-b="ship"]',world:n=>n.ui.selected===n.home.id?null:n.home.id,on:"ship"},{title:"Build",text:n=>`${n.ui.selected===n.home.id?"":`Select <b>${n.home.name}</b>. `}${F0(n)} an empty <b>+</b> slot, then pick a building (${n.touch?"press and hold one":"hover over one"} to read what it does). A <b>Lab</b> (research station) speeds up research.`,point:n=>n.ui.slot!==null&&n.ui.selected===n.home.id?".ctx .opt:not([disabled])":".cell.empty",world:n=>n.ui.selected===n.home.id?null:n.home.id,on:"build"},{title:"Research",text:n=>`${n.touch?"Tap empty space to close the panel, then tap":"Click"} <b>R&amp;D</b> (bottom left). Pick a branch, then <b>Research</b>. One project at a time, paid in credits.`,point:n=>n.researchOpen?"#rlist button[data-k]:not([disabled])":"#rnd",on:"research"},{title:"Send ships",text:n=>{const e=n.target?`<b>${n.target.name}</b>`:"a nearby grey world";return n.ui.mode==="launch"&&n.ui.target!==null?`Set how many with the slider, then <b>Confirm</b>. The dashed line is the route to where ${e} <em>will</em> be.`:n.ui.mode==="launch"?`Now ${ns(n)} ${e} (ringed) as the destination.`:`Take a world: select <b>${n.home.name}</b>, ${ns(n)} <b>Launch</b>, then ${ns(n)} ${e}. Grey worlds are independent and lightly held.`},point:n=>n.ui.mode==="launch"?n.ui.target!==null?"#launch":null:n.ui.selected===n.home.id?"#launch":null,world:n=>n.ui.mode==="launch"?n.ui.target===null&&n.target?n.target.id:null:n.ui.selected===n.home.id?null:n.home.id,on:"launch"},{title:"Speed up time",text:n=>`${n.eta!==null?`Your ships reach <b>${n.sentName}</b> in <b>${n.eta}</b>. Nothing to do but wait: `:"Trips take a while. "}${ns(n)} <b>1×</b> to run time faster (up to 8×), and back to 1× when things get busy.`,point:"#warp",done:n=>n.warp>1||n.gained>0},{title:"Take it",text:n=>n.fighting?`Your ships are fighting at <b>${n.sentName}</b>, against its guns and any ships there. Win and it's yours.`:n.eta!==null?`On the way to <b>${n.sentName}</b>: arrives in <b>${n.eta}</b>. Your fleet burns halfway, flips and brakes into orbit, then fights. Nothing to do until then; ${ns(n)} the fleet to follow it, or order more ships meanwhile.`:"That attack fell short: send more ships (order a few first if you need to).",world:n=>n.sentTo,done:n=>n.gained>0},{title:"Over to you",text:n=>`${n.gained>0?"The world is yours and earns for you now. ":""}Your rival is out in the fog: take every one of their worlds to win. A ▼ on a label means enemies are on the way. Special worlds carry perks; ${ns(n)} any world to see what it has.`,last:!0}],G=n=>document.getElementById(n);let ha=null,dg=0;const Ed=new Set,En=(n,e)=>{if(ha&&performance.now()-dg<1500&&n.contains(ha)){n._pending=e,Ed.add(n);return}n._pending=void 0,n._html!==e&&(n._html=e,n.innerHTML=e)},Ef=()=>{ha=null;for(const n of Ed)Ed.delete(n),n._pending!==void 0&&En(n,n._pending)};window.addEventListener("pointerdown",n=>{ha=n.target,dg=performance.now()},!0);let Zc=0;window.addEventListener("pointerup",()=>{clearTimeout(Zc),Zc=setTimeout(Ef,350)},!0);window.addEventListener("pointercancel",()=>{clearTimeout(Zc),Ef()},!0);window.addEventListener("click",()=>{clearTimeout(Zc),setTimeout(Ef,0)});const rt=(()=>{const n={rivals:1,difficulty:"normal",system:"random",pct:100,dev:!1,gfx:"auto"};try{return{...n,...JSON.parse(localStorage.getItem("perihelion")||"{}")}}catch{return n}})(),yr=()=>{try{localStorage.setItem("perihelion",JSON.stringify(rt))}catch{}};rt.token||(rt.token=Array.from(crypto.getRandomValues(new Uint8Array(12)),n=>n.toString(16).padStart(2,"0")).join(""),yr());function Af(){const n=new URLSearchParams(location.search).get("gfx");if(n==="high"||n==="low")return n;if(rt.gfx==="high"||rt.gfx==="low")return rt.gfx;const e=matchMedia("(pointer: coarse)").matches,t=(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4;return e&&t?"low":"high"}const qe=V2(G("scene"),G("labels"),{quality:Af()});let I=null,pl=[],fn=!1,xe=0,At=null,ui=!1;const bc=[.5,1,2,4,8];let Gr=1;const B={peek:null,pick:null,selected:null,target:null,fleet:null,count:1,dark:!1,preview:null,dragging:!1,vis:null,slot:null,mode:null},Dt=n=>(n=Math.max(0,n),`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`);function fg(n,e){const t=I.bodies[e.b];if(e.type!=="research"&&e.type!=="spy"&&e.type!=="dark"&&(!t||t.owner!==n))return!1;const i=(r,s)=>typeof s=="string"&&Object.hasOwn(r,s);if((e.type==="launch"||e.type==="probe")&&!I.bodies[e.to]||e.type==="launch"&&!Number.isFinite(e.n)||e.type==="build"&&!i(be.structures,e.k)||e.type==="research"&&!i(ni,e.k)&&!i(Nn,e.k)||e.type==="project"&&!i(pn,e.k)||(e.type==="upgrade"||e.type==="demolish")&&!Number.isInteger(e.i))return!1;switch(e.type){case"launch":return!!sl(I,t,I.bodies[e.to],e.n,!!e.dark);case"spy":return!!j0(I,n,t);case"dark":{const r=I.fleets.find(s=>s.id===e.f&&s.owner===n);return gv(I,r,!!e.on)}case"ship":return Tu(I,t);case"cancel":return cp(I,t);case"build":return Li(I,t,e.k);case"upgrade":return!!t.structures[e.i]&&zo(I,t,t.structures[e.i]);case"demolish":return!!t.structures[e.i]&&ap(I,t,t.structures[e.i]);case"research":return K0(I,n,e.k);case"probe":return!!Au(I,t,I.bodies[e.to]);case"project":return X0(I,t,e.k);default:return!1}}function Ji(n){if(ui)return!1;if(At?.role==="client")return At.room.send({t:"cmd",cmd:n}),!0;const e=fg(xe,n);return e&&yS(n),e}function hg(n,e,t){const i=()=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.v===String(e())));n.addEventListener("click",r=>{const s=r.target.closest("button");s&&(t(s.dataset.v),yr(),i())}),i()}hg(G("rivals"),()=>rt.rivals,n=>rt.rivals=Number(n));hg(G("difficulty"),()=>rt.difficulty,n=>rt.difficulty=n);let ml=[],co=null;const vS=n=>rt.system!=="random"&&ei[rt.system]?rt.system:Ec[(n>>>0)%Ec.length];function ga({seed:n=Math.random()*2**31|0,players:e=rt.rivals+1,seat:t=0,names:i=null,aiSeats:r=null,aiDiffs:s=null,mp:a=!1,system:c=vS(n),day:o=null,training:l=!1}={}){co=o,I=ip({seed:n,opponents:e-1,mp:a,system:c}),Gt=null,i&&(I.names=i),xe=t;const u=Ti(n^2748);ml=s||(r?r.map(([,f])=>f):a?[]:Array(e-1).fill(rt.difficulty)),pl=At?.role==="client"?[]:r?r.map(([f,x])=>Cu(f,x,u)):Array.from({length:e-1},(f,x)=>Cu(x+1,rt.difficulty,u)),B.selected=B.target=B.preview=B.fleet=B.mode=B.peek=null,B.slot=null,B.me=xe,ui=!1,Ur=!1,Nf=null,Dd=!0,kf=performance.now(),Xo=!1,typeof B.devAs=="number"&&B.devAs>=I.players&&(B.devAs=void 0),I.events.length=0,G("feed").innerHTML="",G("research").hidden=!0,qe.build(I),B.vis=as(I,xe);const h=I.bodies.find(f=>f.owner===xe);qe.focus(I,h.id,!1),qe.orbit.target.set(0,0,0),qe.orbit.dist=h.size*12+40,qe.orbit.pol=.9;for(const f of["menu","end","lobby"])G(f).hidden=!0;G("hud").hidden=!1,G("leave").hidden=!0,G("warp").hidden=!!At,G("pause").hidden=At?.role==="client",Gr=1,G("warp").textContent="1×",fn=!0,Lf(),G("resume").hidden=!0,G("menu").classList.remove("paused"),Vt();const d=ei[I.system];l?_S():Mt(`${co?"Daily · ":""}${d.name}`,"#aab1c8"),xa()}const va=()=>G("resume").hidden||confirm("Leave the game in progress? It will be lost.");function xS(){va()&&(wi(),ga())}function pg(){if(!va())return;wi();const n=np();ga({seed:n.seed,system:n.system,day:n.key})}G("daily").addEventListener("click",pg);const xu=["random",...tp];function mg(){G("system-pick").textContent=rt.system==="random"?"Random":`${ei[rt.system].name}${ei[rt.system].test?" (test)":""}`,G("system-pick").title=rt.system==="random"?"A different system type each game":ei[rt.system].text;const n=np();G("daily").innerHTML=`Daily<small>${ei[n.system].name}</small>`,G("daily").title=`Today's system, the same for everyone: ${ei[n.system].name}`}const Cf=n=>{const e=xu.length;rt.system=xu[(xu.indexOf(rt.system)+n+e)%e],yr(),mg()};G("system-pick").addEventListener("click",()=>Cf(1));G("system-prev").addEventListener("click",()=>Cf(-1));G("system-next").addEventListener("click",()=>Cf(1));mg();G("play").addEventListener("click",xS);G("again").addEventListener("click",()=>{if(wi(),G("end").hidden=!0,G("resume").hidden=!0,G("menu").classList.remove("paused"),co){pg();return}G("menu").hidden=!1,G("play").textContent="Play vs AI"});G("pause").addEventListener("click",gg);G("leave").addEventListener("click",()=>{wi(),fn=!1,G("leave").hidden=!0,G("hud").hidden=!0,G("menu").hidden=!1,G("resume").hidden=!0});G("resume").addEventListener("click",()=>{G("menu").hidden=!0,G("menu").classList.remove("paused"),fn=!0});function gg(){if(!(!I||I.winner!==null||!fn)){if(At){ui=!ui,G("pause").innerHTML=bt(ui?"play":"pause"),At.room.broadcast({t:"pause",paused:ui}),Jc();return}fn=!1,G("menu").hidden=!1,G("resume").hidden=!1,G("rnd").hidden=!0,G("menu").classList.add("paused"),G("play").textContent="New game"}}function Jc(){G("banner").hidden=!ui,G("banner").textContent=xe===0?"Paused · tap play to resume":"Paused by host"}let Gt=null;function _S(){I.credits[xe]+=800,Gt={i:0,free:!1,did:new Set,sentTo:null,target:ug(I,xe),held0:I.bodies.filter(n=>n.owner===xe).length},Rf()}function Rf(){const n=qe.orbit;Gt.cam={az:n.az,pol:n.pol,dist:n.dist,x:n.target.x,y:n.target.y,z:n.target.z}}function O0(){const n=qe.orbit,e=Gt.cam,t=2*(Math.abs(n.az-e.az)+Math.abs(n.pol-e.pol)+Math.abs(Math.log(n.dist/e.dist)))+3*Math.hypot(n.target.x-e.x,n.target.y-e.y,n.target.z-e.z)/e.dist,i=I.bodies.filter(a=>a.owner===xe);(!Gt.target||Gt.target.owner!==Oe)&&(Gt.target=ug(I,xe));const r=I.fleets.filter(a=>a.owner===xe&&!a.probe),s=r.some(a=>a.to===Gt.sentTo)?r.filter(a=>a.to===Gt.sentTo):r;return{game:I,ui:B,me:xe,warp:Gr,moved:t,touch:_a,target:Gt.target,sentTo:Gt.sentTo,home:i.find(a=>a.home)||i[0],gained:i.length-Gt.held0,inFlight:s.length>0,eta:s.length?Dt(Math.min(...s.map(a=>a.T-(I.time-a.t0)))):null,fighting:I.bodies.some(a=>a.sieges.some(c=>c.owner===xe)),sentName:Gt.sentTo!==null?I.bodies[Gt.sentTo].name:"",researchOpen:!G("research").hidden}}function yS(n){!Gt||Gt.free||(Gt.did.add(n.type),n.type==="launch"&&(Gt.sentTo=n.to),xa())}function Pf(){Gt&&(Gt.free=!0,rt.tutorialDone=!0,yr(),wg(),xa())}function xa(){const n=!!Gt&&!Gt.free&&fn&&!!I;if(document.body.classList.toggle("tut-on",n),G("coach").hidden=!n,B.tutWorld=null,!n){G("tut-glow").textContent="";return}let e=O0();if(!e.home){Pf();return}for(let s=Wo[Gt.i];!s.last&&(s.on&&Gt.did.has(s.on)||s.done&&s.done(e));s=Wo[Gt.i])Gt.i+=1,Rf(),e=O0();const t=Wo[Gt.i],i=typeof t.point=="function"?t.point(e):t.point;G("tut-glow").textContent=i?`${i} { animation: tutglow 0.9s ease-in-out infinite alternate; }`:"",B.tutWorld=t.world?t.world(e):null;const r=B.tutWorld!==null&&B.tutWorld!==void 0?`<button class="show" data-go="${B.tutWorld}">Show</button>`:"";En(G("coachText"),`<small>Training · ${Gt.i+1}/${Wo.length}</small><b>${t.title}</b><span>${t.text(e)}</span>`),En(G("coachShow"),r),G("coachNext").textContent=t.last?"Play on":t.on||t.done?"Skip":"Next",G("coachNext").classList.toggle("ghost",!!(t.on||t.done))}G("coachNext").addEventListener("click",()=>{if(Gt){if(Wo[Gt.i].last){Pf(),Mt("Your rival is on the move","#aab1c8");return}Gt.i+=1,Rf(),xa()}});G("coachClose").addEventListener("click",()=>{Pf(),Mt("Tutorial closed · your rival is on the move","#aab1c8")});G("coachShow").addEventListener("click",n=>{const e=n.target.closest("button[data-go]");e&&qe.focus(I,Number(e.dataset.go))});G("keys").textContent=matchMedia("(pointer: fine)").matches?"Mouse: click to select · drag to pan · right-drag to rotate · scroll to zoom · double-click a world to fly there. Keys: WASD pan · Q/E rotate · +/− zoom · F focus · H whole system · L launch/confirm · P probe · R research · Space pause · 1–5 speed (½× to 8×) · Esc back.":"Drag to rotate · two fingers to pan and zoom · double-tap to fly to a world.";G("name").value=rt.name||"";G("name").addEventListener("input",()=>{rt.name=G("name").value.trim(),yr()});const vg=()=>lg(G("name").value),Fi=n=>{G("menu-msg").textContent=n||""};let xg=[];function wi(){At&&At.room.close(),At=null,ui=!1,G("banner").hidden=!0,G("pause").innerHTML=bt("pause")}function Ad(n,e){xg=n,G("lobby-code").textContent=e||"·····";const t=At?.role==="host",i=n.map((r,s)=>`<div class="seat"><i style="background:${_t(s)}"></i><span>${r.name}${s===xe?" (you)":""}</span><small>${r.kind==="ai"?"AI":s===0?"host":r.online===!1?"offline":"ready"}</small>${t&&s>0?`<button data-kick="${s}" aria-label="Remove">${bt("close")}</button>`:""}</div>`);for(let r=n.length;r<jc;r++)i.push('<div class="seat empty"><span>Open seat</span></div>');G("seats").innerHTML=i.join(""),G("lobby-ai").hidden=!t||n.length>=jc,G("lobby-start").hidden=!t,G("lobby-start").disabled=n.length<2,G("lobby-hint").textContent=t?n.length<2?"Tap the code to copy it. Up to 3 empires.":"Ready when you are.":"Waiting for the host to start…"}let _g="normal";G("ai-diff").addEventListener("click",n=>{const e=n.target.closest("button");e&&(_g=e.dataset.v,G("ai-diff").querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)))});G("add-ai").addEventListener("click",()=>At?.role==="host"&&At.room.addAI(_g));G("seats").addEventListener("click",n=>{const e=n.target.closest("button[data-kick]");e&&At?.role==="host"&&At.room.remove(Number(e.dataset.kick))});G("lobby-leave").addEventListener("click",()=>{wi(),G("lobby").hidden=!0,G("menu").hidden=!1});G("host").addEventListener("click",()=>{if(!va())return;wi(),Fi("Opening a room…"),xe=0;const n=pS(vg(),{open:e=>{Fi(""),G("menu").hidden=!0,G("lobby").hidden=!1,Ad(n.seats,e)},seats:e=>Ad(e,n.code),error:e=>{Fi(e),n.started||(wi(),G("lobby").hidden=!0,G("menu").hidden=!1)},cmd:(e,t)=>{I&&fn&&!ui&&fg(e,t)},left:e=>Mt(`${I.names[e]} disconnected`,_t(e)),rejoin:e=>{n.sendTo(e,yg(e)),Mt(`${I.names[e]} is back`,_t(e))}});At={role:"host",room:n}});function yg(n){return{t:"start",seed:At.seed,players:I.players,names:I.names,seat:n,paused:ui,aiDiffs:ml,system:I.system}}G("lobby-start").addEventListener("click",()=>{if(At?.role!=="host"||xg.length<2)return;const n=At.room;n.start(),At.seed=Math.random()*2**31|0;const e=n.seats.map(i=>i.name),t=n.seats.map((i,r)=>[r,i]).filter(([,i])=>i.kind==="ai").map(([i,r])=>[i,r.difficulty]);ga({seed:At.seed,players:n.seats.length,seat:0,names:e,aiSeats:t,mp:!0}),n.seats.forEach((i,r)=>{i.conn&&n.sendTo(r,yg(r))})});function Mg(n){G("mp-buttons").hidden=n,G("join-row").hidden=!n,n&&G("code").focus()}G("join").addEventListener("click",()=>{Fi(""),Mg(!0)});G("join-back").addEventListener("click",()=>{Fi(""),Mg(!1)});G("code").addEventListener("keydown",n=>{n.key==="Enter"&&G("join-go").click()});G("devtoggle").addEventListener("click",()=>{rt.dev=!rt.dev,yr(),Lf()});G("gfxtoggle").addEventListener("click",()=>{rt.gfx={auto:"high",high:"low",low:"auto"}[rt.gfx]||"auto",yr(),qe.setQuality(Af()),bg()});function bg(){G("gfxtoggle").textContent=`Graphics ${rt.gfx==="auto"?`auto (${Af()})`:rt.gfx}`}bg();function Lf(){G("devtoggle").textContent=`Dev view ${rt.dev?"on":"off"}`,G("devbar").hidden=!rt.dev||At!==null||!I}Lf();function Sg(){G("devbar").hidden=!1;const n=B.devAs===void 0?xe:B.devAs,e=[...Array.from({length:I.players},(t,i)=>[i,di(i)]),["all","All"]];En(G("devbar"),`<span>View as</span>${e.map(([t,i])=>`<button data-as="${t}" class="${String(n)===String(t)?"on":""}" style="${t==="all"?"":`color:${_t(t)}`}">${i}</button>`).join("")}<button data-w16="1">16×</button>`)}G("devbar").addEventListener("click",n=>{const e=n.target.closest("button");if(e&&!At){if(e.dataset.w16){Df(16);return}B.devAs=e.dataset.as==="all"?"all":Number(e.dataset.as),B.vis=B.devAs==="all"?null:as(I,B.devAs),Sg()}});G("learn").addEventListener("click",()=>{va()&&(wi(),ga({seed:7,players:2,aiSeats:[[1,"cadet"]],system:"classic",training:!0}))});const wg=()=>{G("learn").className=rt.tutorialDone?"link":"primary ghost"};wg();G("howto").addEventListener("click",()=>{G("menu").hidden=!0,G("tutorial").hidden=!1});G("tut-close").addEventListener("click",()=>{G("tutorial").hidden=!0,G("menu").hidden=!1});G("lobby-code").addEventListener("click",async()=>{const n=G("lobby-code").textContent;if(!/^\w{5}$/.test(n))return;const e=G("lobby-hint"),t=e.textContent;try{await navigator.clipboard.writeText(n),e.textContent="Code copied"}catch{e.textContent="Long-press the code to copy it"}setTimeout(()=>{e.textContent=t},1800)});G("join-go").addEventListener("click",()=>{if(!va())return;const n=G("code").value.trim().toUpperCase();if(n.length!==5){Fi("Enter the 5-letter code");return}wi(),Fi("Connecting…"),At={role:"client",room:gS(n,vg(),rt.token,{message:t=>MS(t),error:t=>{fn&&I?.mp||(Fi(t),wi(),G("lobby").hidden=!0,G("menu").hidden=!1)},closed:()=>{At&&(wi(),fn?(Mt("Lost connection to the host","#ff7a4d"),fn=!1,setTimeout(()=>{G("menu").hidden=!1},1500)):(G("lobby").hidden=!0,G("menu").hidden=!1,Fi("The host closed the room")))}}),code:n}});function MS(n){n.t==="lobby"?(xe=n.you,Fi(""),G("menu").hidden=!0,!fn&&G("end").hidden&&(G("lobby").hidden=!1),Ad(n.seats,n.code)):n.t==="full"||n.t==="kicked"?(Fi(n.t==="kicked"?"The host removed you":n.why),wi(),G("lobby").hidden=!0,G("menu").hidden=!1):n.t==="start"?(ga({seed:n.seed,players:n.players,seat:n.seat,names:n.names,aiDiffs:n.aiDiffs||[],mp:!0,system:n.system||"classic"}),ui=n.paused,Jc()):n.t==="state"&&I&&fn?(kf=performance.now(),AS(n.s)):n.t==="events"&&I&&fn?Ag(n.list):n.t==="pause"&&(ui=n.paused,Jc())}const bS=["crewBonus","owner","ships","guns","structures","sieges","queue","build","slips","vet","tf","fighting","totDef","totAtk","resting","restUntil","bonus","name","project","wonder"],SS=n=>I.bodies.some(e=>e.owner===n||e.sieges.some(t=>t.owner===n))||I.fleets.some(e=>e.owner===n&&!e.probe),wS=["owner","bonus","name","project","wonder"];function TS(n=null){const e=n!==null&&SS(n)?as(I,n):null;return{time:I.time,winner:I.winner,credits:I.credits,tech:I.tech,fleets:(e?I.fleets.filter(t=>e.seesFleet(t)):I.fleets).map(t=>({...t,gs:null,legs:t.legs&&t.legs.map(i=>({...i,gs:null}))})),scans:e?(I.scans||[]).filter(t=>t.owner===n):I.scans,spies:e?(I.spies||[]).filter(t=>t.owner===n):I.spies,happenings:I.happenings,wonders:I.wonders,visit:I.visit,nextId:I.nextId,bodies:I.bodies.map(t=>e&&!e.bodies.has(t.id)?{...Object.fromEntries(wS.map(i=>[i,t[i]])),hidden:!0}:Object.fromEntries(bS.map(i=>[i,t[i]]))),stats:I.winner!==null?I.stats:void 0}}const ES={ships:0,guns:0,structures:[],sieges:[],queue:0,build:0,slips:[],vet:0,tf:null,fighting:!1,resting:0,restUntil:0};function AS(n){const e=n.time-I.time;I.time=ui||Math.abs(e)>1.5?n.time:I.time+e*.5,I.credits=n.credits,I.tech=n.tech;const t=new Map(I.fleets.map(i=>[i.id,i]));I.fleets=n.fleets.map(i=>{const r=t.get(i.id);return r&&r.t0===i.t0&&r.T===i.T&&(i.gs=r.gs,i.legs&&r.legs&&i.legs.forEach((s,a)=>{s.gs=r.legs[a]&&r.legs[a].gs})),pp(I,i)}),I.scans=n.scans,I.spies=n.spies,I.happenings=n.happenings,I.wonders=n.wonders,I.visit=n.visit,I.nextId=n.nextId,n.bodies.forEach((i,r)=>{const s=I.bodies[r];if(i.hidden){Object.assign(s,i,ES);return}const a=Dd||s.hidden,c=a?0:(s.lostDef||0)+Math.max(0,(i.totDef||0)-(s.totDef||0)),o=a?0:(s.lostAtk||0)+Math.max(0,(i.totAtk||0)-(s.totAtk||0)),l=!a&&(s.captured||i.owner!==s.owner);Object.assign(s,i,{lostDef:c,lostAtk:o,captured:l,hidden:!1})}),Dd=!1,n.stats&&(I.stats=n.stats),n.winner!==null&&(I.winner=n.winner)}function Df(n){Gr=n,G("warp").textContent=`${Gr===.5?"½":Gr}×`}G("warp").addEventListener("click",()=>Df(bc[(bc.indexOf(Gr)+1)%bc.length]));function Tg(){B.selected=B.target=B.peek=B.fleet=null,B.mode=null,G("research").hidden=!0,Vt()}function Eg(){Tg(),qe.orbit.follow=null,qe.orbit.fleet=null,qe.orbit.target.set(0,0,0),qe.orbit.vaz=qe.orbit.vpol=0,qe.orbit.pol=.9,qe.orbit.goalDist=650*er(I)}G("system").addEventListener("click",Eg);function gl(){const n=B.fleet!==null&&I?I.fleets.find(l=>l.id===B.fleet):null;if(n||(B.fleet=null),G("fleet").hidden=!n||!fn||B.selected!==null||!G("research").hidden,G("fleet").hidden)return;const e=Pn(n,I.time),t=n.T-(I.time-n.t0),i=n.dark&&!e.burning?en(`${bt("dark")} coasting dark`,"Drive off: enemies only spot this fleet close in","dim"):e.flipping?"flipping":e.burning?e.phase===1?"burning":"braking":"coasting",r=I.bodies[n.to],s=Math.hypot(e.vx,e.vy,e.vz);if(n.probe){G("fdark").hidden=!0,En(G("fleetText"),`${bt("probe")} <b>Probe</b> → <b>${r.name}</b> · <b>${Dt(t)}</b>`);return}const a=n.owner===xe&&!n.probe&&!I.fuel&&t>10;G("fdark").hidden=!a,a&&(G("fdark").classList.toggle("on",!!n.dark),En(G("fdark"),`${bt("dark")} ${n.dark?"Light up":"Go dark"}`),G("fdark").title=n.dark?"Light the drive: burn the rest of the way (sooner, easy to spot)":"Go dark: cut the drive and coast (later, hard to spot)");const c="",o=rt.dev&&!At?`<br><span class="dim">seen by ${I.names,""}${Array.from({length:I.players},(l,u)=>u).filter(l=>l!==n.owner).map(l=>`<span style="color:${_t(l)}">${di(l)} ${as(I,l).seesFleet(n)?"✓":"✗"}</span>`).join(" · ")}</span>`:"";En(G("fleetText"),`<b>${ur(n.name)}</b>${An(n.vet)?` <span class="vet">${Ld(n.vet)}</span>`:""} · <b>${n.n}</b> → <b>${r.name}</b><br><span class="dim">${i}</span> · arrive in <b>${Dt(t)}</b>${n.assist!==void 0?` ${en(bt("assist"),`Gravity assist via ${I.bodies[n.assist].name}`,"assist")}`:""}${n.detour?` ${en("round the sun","Steering round the sun: a turn beside it, then on to the target","dim")}`:""} ${en(`${Math.round(e.progress*100)}%`,`${s.toFixed(2)} units/s`,"dim")}${c}${o}`)}G("fdark").addEventListener("click",()=>{const n=I.fleets.find(t=>t.id===B.fleet),e=n&&!n.dark;n&&Ji({type:"dark",f:n.id,on:e})&&Mt(`${ur(n.name)} ${e?"running dark":"drive lit"}`,_t(xe),"dark"),gl()});function CS(){const n=B.peek!==null&&I&&fn&&B.selected===null&&B.fleet===null?I.bodies[B.peek]:null;if(G("peek").hidden=!n,!n)return;const e=!B.vis||B.vis.bodies.has(n.id),t=n.visitor?I.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="planet"&&n.giant?"Gas giant":n.kind[0].toUpperCase()+n.kind.slice(1),i=n.owner===Oe?"Independent":di(n.owner),r=n.structures.filter(a=>a.left<=0||a.next).map(a=>`${be.structures[a.type].name}${be.structures[a.type].maxLevel?` ${Qo[a.level]}`:""}`),s=e?`${bt("fleet")} <b>${n.ships}</b> ship${n.ships===1?"":"s"} · ${bt("guns")} <b>${Math.ceil(n.guns)}</b> gun${Math.ceil(n.guns)===1?"":"s"}${r.length?` · ${r.join(", ")}`:""}`:en("Defences unknown","Out of sensor range: send a probe or get a world nearby to see it");En(G("peek"),`<div class="head"><span class="tag">${t}</span><b>${n.name}</b><span class="grow"></span><span class="tag" style="color:${n.owner===Oe?"var(--dim)":_t(n.owner)}">${i}</span></div><div class="row2">${s}</div>${Cd(n,{income:!1,seen:e})}${LS(n)}`)}const RS=()=>window.innerWidth<760;function PS(){const n={worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};let e=0;for(const a of I.bodies){if(a.owner!==xe)continue;e+=1;const c=sp(a,I);for(const o in n)n[o]+=c[o]}const t=(I.spies||[]).filter(a=>a.owner===xe&&a.since<=I.time).reduce((a,c)=>a+io(I.bodies[c.body],I)*gi.skim,0),i=(I.happenings||[]).some(a=>a.kind==="comet"&&a.holder===xe&&I.time>=a.starts)?hr.comet.pay:0,r=[[`${e} world${e===1?"":"s"}`,n.worlds],["Mines",n.mines],["Gas harvesters",n.skimmers],["Exchanges",n.exchanges],["Bonuses and wonders",n.bonuses],["Agents",t],["Comet mining",i]],s=sa(I,xe);return r.filter(([,a])=>a>.001).map(([a,c])=>`${a}  +${c.toFixed(1)}/s`).concat(s>.001?[`Fleet upkeep (ships beyond ${be.upkeep.free})  −${s.toFixed(1)}/s`]:[]).join(`
`)}function LS(n){if(n.owner===Oe||n.owner===xe||n.visitor||Ur)return"";const e=(I.spies||[]).find(i=>i.owner===xe&&i.body===n.id);if(e&&e.since>I.time)return`<div class="spy">${bt("spy")} ${en(`Recruiting · ${Dt(e.since-I.time)}`,"Finding someone on the inside: they start work once recruited")}</div>`;if(e){const i=Bd(I,n)*60,r=i<.25?"low":i<.5?"rising":"high";return`<div class="spy">${bt("spy")} ${en(`Agent in place · ${Dt(I.time-e.since)}`,"Shows you this world and its launches, skims its income and slows any megaproject here")}<span class="grow"></span>${en(`risk ${r}`,"Each minute there's a chance the agent is caught. Their Intel and a security bureau nearby raise it",r==="high"?"warn":"dim")}</div>`}const t=zd(I,xe,n);return t==="needs Signals intercept"?`<div class="spy dim">${bt("spy")} Agents need Signals intercept (Intel I)</div>`:`<div class="spy">${bt("spy")} <span class="dim">${t||"No agent here"}</span><span class="grow"></span><button data-spy="${n.id}" ${t?"disabled":""} title="Recruit an agent there (${Dt(gi.travel)} to get in place)">Recruit agent<small>${gi.cost}</small></button></div>`}G("peek").addEventListener("click",n=>{const e=n.target.closest("button[data-spy]");if(!e)return;const t=I.bodies[+e.dataset.spy];Ji({type:"spy",b:t.id})&&Mt(`Recruiting an agent on ${t.name}`,_t(xe),"spy"),Vt()});G("hintCancel").addEventListener("click",()=>{B.mode=null,B.target=null,Vt()});function Vt(){if(G("hint").hidden=B.mode!=="project",B.mode==="project"){const s=pn[B.projKey];En(G("hintText"),`${bt(B.projKey)} Tap a world for the <b>${s.name}</b><small>${s.where==="giant"?"Gas giants only":s.where==="inner"?"Innermost planet only":s.where==="planet"?"Planets only":"Any world of yours"} · they're ringed in violet</small>`)}gl(),CS();const n=B.selected!==null&&I?I.bodies[B.selected]:null,e=!!n&&n.owner===xe&&fn;if(G("actions").hidden=!e,!e){B.preview=null,B.mode!=="project"&&(B.mode=null);return}if(B.mode==="projconfirm"){const s=pn[B.projKey],a=uo(I,n,B.projKey);G("actions").classList.add("launching"),G("buildrow").hidden=G("stepper").hidden=G("dark").hidden=!0,G("cancel").hidden=!1,En(G("info"),`<span>${bt(B.projKey)} Build the <b>${s.name}</b> at <b>${n.name}</b> · <b>${s.cost}</b> · ${Dt(s.time/wc(I,xe))}${a?` · <span class="warn">${a}</span>`:""}</span><small class="dim" style="flex-basis:100%">${s.text}. Only one empire can finish it; if a rival gets there first you get half back.</small>`),G("launch").textContent="Confirm",G("launch").disabled=!!a;return}!n.ships&&B.mode==="launch"&&(B.mode=null);const t=zr(I,n);B.mode==="probe"&&!il(n)&&(B.mode=null);const i=B.mode==="probe";B.count=t?Math.max(1,Math.min(t,Math.round(t*rt.pct/100))):0,En(G("count"),`${B.count}<small>${rt.pct}%</small>`),G("count").title=`${B.count} of ${t} ready ships (${rt.pct}%). Tap: all, half, a quarter`,Number(G("pct").value)!==rt.pct&&(G("pct").value=rt.pct),G("pct").style.setProperty("--fill",`${rt.pct}%`);const r=B.mode==="launch"||i;if(G("actions").classList.toggle("launching",r),G("buildrow").hidden=r,G("stepper").hidden=!r||i,G("cancel").hidden=!r,G("dark").hidden=!r||i||I.fuel,G("dark").classList.toggle("on",B.dark),r)if(B.target===null)B.preview=null,En(G("info"),`<span class="tag">${i?"Probe from":"Launch from"}</span><b>${n.name}</b><span class="grow"></span><span class="tag">tap a destination</span>`),G("launch").textContent="Confirm",G("launch").disabled=!0;else{const s=I.bodies[B.target],a=`${n.id}:${s.id}:${i}:${B.dark}:${n.owner}`;if((!B.preview||B.previewKey!==a||Math.abs(I.time-B.previewAt)>(I.fuel?3:1))&&(B.preview=fo(I,n,s,I.time,i?be.probe.speed:1,!1,!i&&B.dark?tl.burn:.5,Fd(I,xe)*(i?be.fuel.probe:1)),B.previewKey=a,B.previewAt=I.time),B.preview.out){const w=B.preview.window===null?null:B.preview.window-(I.time-B.previewAt);En(G("info"),`<span>${i?"Probe":`<b>${B.count}</b>`} → <b>${s.name}</b> · ${en("out of reach","Too far for one tank of fuel from here, now. As the worlds move, a launch window opens","warn")}${w!==null?` · window in <b>${Dt(Math.max(1,Math.ceil(w)))}</b>`:""}</span>`),G("launch").textContent="Confirm",G("launch").disabled=!0;return}const c=B.preview.fuel!==void 0?` ${en(`<span class="fuel${B.preview.fuel>.85?" low":""}"><i style="width:${Math.round(B.preview.fuel*100)}%"></i></span>`,"Fuel this route burns, of one tank (each world you hold refuels you). Waiting for the worlds to line up can cost less","dim")}`:"",o=s.owner===xe?"reinforce":`${s.ships} ship${s.ships===1?"":"s"}, ${Math.ceil(s.guns)} gun${Math.ceil(s.guns)===1?"":"s"}`,l=s.owner===xe?0:ho(I,s),u=!B.vis||B.vis.bodies.has(s.id),h=u?l?`${o} ${en(`+${l.toFixed(1)}`,`Cover from ${Nc(I,s).map(w=>w.from.name).join(", ")}`)}`:o:"unknown",d=(B.preview.assist!==void 0?` ${en(bt("assist"),`Gravity assist via ${I.bodies[B.preview.assist].name}: its pull speeds the route`,"assist")}`:"")+(B.preview.detour?` ${en("round the sun","The straight line would cross the sun: the fleet steers round it under full thrust","dim")}`:"");if(i){const w=Kd(I,n,s);En(G("info"),`<span>Probe → <b>${s.name}</b> · <b>${Dt(B.preview.T)}</b>${c}${w?` · <span class="dim">${w}</span>`:""}</span>`),G("launch").textContent="Confirm",G("launch").disabled=!!w;return}const f=Yd(I,n),x=f?` ${en(`+${f} in ${Dt(Math.ceil(n.restUntil-I.time))}`,`${f} ship${f===1?"":"s"} just arrived and can launch in ${Dt(Math.ceil(n.restUntil-I.time))}`,"dim")}`:"",_=Gd(I,s),m=B.preview.T>_-5,p=Number.isFinite(_)?` · <span class="${m?"warn":"dim"}">${m?"too late":`leaves ${Dt(_)}`}</span>`:"",v=n.sieges.length?` · <span class="warn">${en("breaking out","This world is under attack: half the ships launched will be shot down leaving orbit","warn")}</span>`:"";En(G("info"),`<span><b>${B.count}</b>${v} → <b>${s.name}</b> <span class="dim">${h}</span> · <b>${Dt(B.preview.T)}</b>${c}${B.dark?` ${en("dark","Running dark: enemies only spot this fleet close in","dim")}`:""}${d}${x}${p}</span>${Cd(s,{income:!1,seen:u})}`),G("launch").textContent="Confirm",G("launch").disabled=t<1||m}else{B.preview=null,B.target=null;const s=n.visitor?I.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="station"?"Station":n.kind[0].toUpperCase()+n.kind.slice(1);En(G("info"),`<span class="tag">${s}</span><b>${n.name}</b><span class="grow"></span>${n.ships?`${n.tf?`<span class="tag">TF ${n.tf}</span>`:""}<span class="num">${n.ships}</span><span class="tag">ship${n.ships===1?"":"s"}</span>`:'<span class="tag">no ships</span>'}`+Cd(n));const a=n.ships&&!t?Math.ceil(n.restUntil-I.time):0;G("launch").textContent=a?`Ready in ${Dt(a)}`:"Launch",G("launch").disabled=t<1,IS(n)}}const Qo=["","I","II","III"],Qc=n=>String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),en=(n,e,t="")=>`<span class="chip${t?` ${t}`:""}" tabindex="0" data-tip="${Qc(e)}">${n}</span>`;function Cd(n,{income:e=!0,seen:t=!0}={}){const i=[];if(e&&n.owner!==Oe){const r=io(n,I),s=be.income[n.kind]*(n.star?1.5:1),a=r-s;i.push(en(`<b class="pos">+${r.toFixed(1)}/s</b>`,`Income: ${n.home?"homeworld":n.kind} ${s.toFixed(1)}${a>.001?` + ${a.toFixed(1)} from structures and bonuses`:""} per second`))}if(t){const r=Nc(I,n),s=I.bodies.filter(l=>l!==n&&Nc(I,l).some(u=>u.from===n)),a=Math.ceil(n.guns),c=r.reduce((l,u)=>l+u.n,0),o=[`${a} gun${a===1?"":"s"} here`];for(const l of r)o.push(`+${l.n.toFixed(1)} from ${l.from.name}`);s.length&&o.push(`these guns also help defend ${s.map(l=>l.name).join(", ")} (${n.parent===null?"half":"quarter"} strength)`),(n.owner!==Oe||a)&&i.push(en(`${bt("guns")} ${a}${c?` <span class="pos">+${c.toFixed(1)}</span>`:""}`,o.join(" · ")))}if(I.crew&&t&&n.owner!==Oe&&oc(n)&&i.push(en(`Crew ${oc(n)}`,`Crew: this world fields ${oc(n)} toward its owner's crew cap (Habitats and a refugee convoy add more)`)),n.owner===xe&&!n.visitor){const r=Bd(I,n)*60,s=r<.25?"low":r<.5?"medium":"high";i.push(en(`Security ${s}`,`Security ${s}: an enemy agent here has about a ${Math.round(Math.min(1,r)*100)}% chance a minute of being caught. A security bureau here or nearby, and Intel research, raise it`,s==="high"?"pos":"dim"))}if(n.owner!==Oe&&n.perk!=="fortress"&&Hd(I,n)){const r=I.bodies.find(s=>s.perk==="fortress"&&s.owner===n.owner&&Cn(lt(I,s,I.time),lt(I,n,I.time))<=Ys(I,"fortress"));i.push(en(`${bt("fortress")} +1 gun`,`Covered by the ${vn.fortress.name}${r?` at ${r.name}`:""}: +1 gun here while it's inside the ring`,"gold"))}if(n.owner!==Oe&&n.perk!=="depot"&&dp(I,n)>1&&i.push(en(`${bt("depot")} +20% speed`,`A ${vn.depot.name} nearby: fleets launched from here fly ${Math.round((vn.depot.boost-1)*100)}% faster`,"gold")),n.owner!==Oe&&n.perk!=="relay"&&I.bodies.some(r=>r.perk==="relay"&&r.owner===n.owner&&Cn(lt(I,r,I.time),lt(I,n,I.time))<=Ys(I,"relay"))&&i.push(en(`${bt("relay")} watched`,`Inside your ${vn.relay.name}'s ring: everything around here is in view`,"gold")),n.perk){const r=vn[n.perk];let s="";if(r.range&&n.perk==="relay")s=" (dashed ring)";else if(r.range){const a=lt(I,n,I.time),c=I.bodies.filter(o=>o.owner===xe&&o!==n&&Cn(lt(I,o,I.time),a)<=Ys(I,n.perk)).map(o=>o.name);s=` (dashed ring). ${c.length?`Yours inside now: ${c.join(", ")}`:"None of yours inside now"}`}i.push(en(`${bt(n.perk)} ${r.name}`,`${r.text}${s}`,"gold"))}n.wonder&&i.push(en(`${bt(n.wonder)} ${pn[n.wonder].name}`,pn[n.wonder].text,"gold")),n.project&&i.push(en(`${bt(n.project.key)} ${Math.floor((1-n.project.left/pn[n.project.key].time)*100)}%`,`Building the ${pn[n.project.key].name}: ${pn[n.project.key].text}. Take the world and it's yours.`,"gold"));for(const r of I.happenings||[]){if(r.at!==n.id)continue;const s=hr[r.kind],a=I.time<r.starts,c=!a&&r.holder!==Oe,o=a?`starts in ${Dt(r.starts-I.time)}`:c?`${r.holder===xe?"you hold it":`${di(r.holder)} holds it`}: ${Dt(Math.max(0,s.hold-r.held))} to go`:`gone in ${Dt(Math.max(0,r.ends-I.time))}`;i.push(en(`${bt(r.kind)} ${s.name}`,`${$g(I,r.kind)}. Hold it for ${Dt(s.hold)} without a fight. Now: ${o}`,"gold"))}return i.length?`<div class="chips">${i.join("")}</div>`:""}function DS(n,e,t){const i=1+.15*I.tech[xe].industry,r=t&&t.perk&&vn[t.perk].fits===n;return n==="mine"?`+${(be.mineIncome*e*i*(r?2:1)).toFixed(1)}/s`:be.structures[n].income?`+${(be.structures[n].income*e).toFixed(1)}/s`:n==="defence"?`${Math.round(be.gunsPerDefence*e*(r?1.5:1))} guns`:n==="bureau"?`${e===1?"2.5":"4"}× catch`:n==="lab"?`+${Math.round(be.labSpeed*e*(r?2:1)*100)}% research`:n==="habitat"?`+${be.crew.habitat*e} crew`:""}const z0={bureau:"Security",shipyard:"Yard",mine:"Mine",defence:"Guns",lab:"Lab",skimmer:"Gas rig",exchange:"Exchange",habitat:"Habitat"},is=n=>`${Math.max(0,Math.min(100,Math.floor(n*100)))}%`;function B0(n){return n.scrap?1-n.scrap/be.scrapTime:n.next?1-n.left/rl({...n,level:n.next-1}):n.left>0?1-n.left/be.structures[n.type].time:null}function IS(n){const e=rp(n);B.slot!==null&&B.slot>=e&&(B.slot=null);const t=[];for(let s=0;s<e;s++){const a=n.structures[s],c=B.slot===s?" on":"";if(!a){t.push(`<button class="cell empty${c}" data-slot="${s}"><span>+</span></button>`);continue}const o=be.structures[a.type],l=B0(a),u=o.maxLevel?`<i class="pips">${"▮".repeat(a.level)}${"▯".repeat(o.maxLevel-a.level)}</i>`:"",h=l===null?"":`<i class="prog" style="width:${is(l)}"></i>`,d=l!==null&&!a.scrap?`<i class="pips">${Dt(a.left/Xs(I,xe,n))}</i>`:u;t.push(`<button class="cell${l===null?"":" busy"}${c}" data-slot="${s}"><b>${z0[a.type]}</b>${d}${h}</button>`)}let i=`<div class="cells">${t.join("")}</div>`;if(B.slot!==null){const s=n.structures[B.slot];let a="";if(!s)a=["shipyard","mine","skimmer","exchange","defence","lab","bureau","habitat"].map(c=>{const o=Lc(I,n,c);if(o&&o!=="not enough credits")return"";const l=be.structures[c],u=n.perk&&vn[n.perk].fits===c,h=`${l.name}: ${l.desc}${u?` · boosted by the ${vn[n.perk].name}`:""}`;return`<button class="opt${u?" fit":""}" data-b="${c}" data-hold="${Qc(h)}" title="${Qc(h)}" ${o?"disabled":""}>${z0[c]}<small>${l.cost} · ${Dt(l.time/Xs(I,xe,n))}</small></button>`}).join("");else{const c=be.structures[s.type],o=B0(s),l=s.scrap?`scrapping · ${is(o)}`:s.next?`upgrading → ${Qo[s.next]} · ${is(o)}`:s.left>0?`building · ${is(o)}`:c.maxLevel?`level ${Qo[s.level]}`:"online",u=qo(I,n,s),h=$d(I,n,s);if(a=`<span class="what" title="${c.desc}">${c.name} · ${l}</span><button class="danger" data-d="${B.slot}" ${h?"disabled":""}>Scrap<small>+${ac(s)}</small></button>`,c.maxLevel){const d=[];for(let f=1;f<=c.maxLevel;f++){const x=f===1?c.cost:Or({type:s.type,level:f-1}),_=f<=s.level?"done":f===s.next?"now":f>s.level+1||s.next?"later":"",m=f===s.level+1&&!s.next&&(!u||u==="not enough credits"),p=m?`button data-u="${B.slot}" ${u?"disabled":""}`:"span",v=f<=s.level?"✓":f===s.next?Dt(s.left/Xs(I,xe,n)):m?`Upgrade · ${x} · ${Dt(rl({type:s.type,level:f-1})/Xs(I,xe,n))}`:x;d.push(`<${p} class="lv ${_}${m?" next":""}"><b>${Qo[f]}</b> ${DS(s.type,f,n)}<small>${v}</small></${p.split(" ")[0]}>`)}a+=`<div class="ladder">${d.join("")}</div>`}}i+=`<div class="ctx">${a}</div>`}const r=il(n);if(r){const s=Dc(I,n),c=Array.from({length:r},(l,u)=>n.slips&&n.slips[u]!==void 0?n.slips[u]:0).map(l=>`<i class="meter"><i style="width:${is(l)}"></i></i>`).join(""),o=n.queue&&n.slips&&n.slips.length?Dt((1-Math.max(...n.slips))*eh(I,n)):"";i+=`<div class="ctx ships"><span class="what">${n.queue?`Queue <b class="num">${n.queue}</b>`:`${r} yard${r===1?"":"s"} idle`}<span class="bars">${c}</span><span class="dim">${o}</span></span></div><div class="ctx shipbtns"><button data-b="ship" title="${s==="no crew to spare"?"No crew to spare: take more worlds or build a Habitat":`Order a ship (${be.ship.time}s per yard)`}" ${s?"disabled":""}>+ Ship<small>${s==="no crew to spare"?"no crew":`${be.ship.cost} · ${Dt(eh(I,n))}`}</small></button><button data-cancel="1" class="danger" title="Cancel the last queued ship" ${n.queue?"":"disabled"}>${bt("close")}<small>+${Math.round(be.ship.cost*be.cancelRefund)}</small></button><button class="mini" data-probe="1" ${I.credits[xe]<be.probe.cost?"disabled":""} title="Probe: fast one-way flyby that reveals a world">Probe<small>${be.probe.cost}</small></button></div>`}En(G("buildrow"),i)}G("buildrow").addEventListener("click",n=>{if(B.selected===null)return;const e=I.bodies[B.selected],t=n.target.closest("button[data-slot]");if(t){B.pick=null;const o=Number(t.dataset.slot);B.slot=B.slot===o?null:o,Vt();return}if(n.target.closest("button[data-probe]")){B.mode="probe",B.target=null,B.slot=null,Vt();return}if(n.target.closest("button[data-cancel]")){Ji({type:"cancel",b:e.id})&&Mt("Ship build cancelled",_t(xe)),Vt();return}const i=n.target.closest("button[data-u]");if(i){const o=e.structures[Number(i.dataset.u)];o&&Ji({type:"upgrade",b:e.id,i:Number(i.dataset.u)})&&Mt(`Upgrading ${be.structures[o.type].name} to ${Qo[o.level+1]} · ${Math.round(rl(o))}s`,_t(xe)),Vt();return}const r=n.target.closest("button[data-d]");if(r){const o=e.structures[Number(r.dataset.d)];o&&Ji({type:"demolish",b:e.id,i:Number(r.dataset.d)})&&Mt(`Scrapping ${be.structures[o.type].name} at ${e.name}`,_t(xe)),B.slot=null,Vt();return}const s=n.target.closest("button[data-b]");if(!s)return;const a=s.dataset.b;if(pa){pa=!1;return}Ji(a==="ship"?{type:"ship",b:e.id}:{type:"build",b:e.id,k:a})&&(Mt(a==="ship"?`Ship ordered at ${e.name}`:`${be.structures[a].name} under construction at ${e.name}`,_t(xe)),a!=="ship"&&(B.slot=null)),Vt()});const _u=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]],US={ansible:"Signals",targeting:"Targeting",kinetic:"Kinetic",torch:"Torch",hardened:"Hardened",pdnet:"PD net"};function NS(){const e=([o,l])=>[45*o,30*Math.sqrt(3)*(l+o/2)],t=(o,l,u=28)=>Array.from({length:6},(h,d)=>`${(o+u*Math.cos(Math.PI/3*d)).toFixed(1)},${(l+u*Math.sin(Math.PI/3*d)).toFixed(1)}`).join(" "),i=[];Su.forEach((o,l)=>{const[u,h]=e(_u[l]);i.push({key:o,cx:u,cy:h,branch:!0});const d=_u[l],f=_u[(l+1)%6],x=Object.keys(Nn).find(p=>Nn[p].needs.includes(o)&&Nn[p].needs.includes(Su[(l+1)%6])),[_,m]=e([d[0]+f[0],d[1]+f[1]]);i.push({key:x,cx:_,cy:m})});const r=I.tech[xe],s=r.project,a=[`<title>One project at a time. A joint tech needs both neighbours at II. Research stations speed everything up.</title><polygon points="${t(0,0)}" class="hx core"/><text x="0" y="-2" class="hl">R&amp;D</text><text x="0" y="11" class="hs">×${ma(I,xe).toFixed(1)}</text>`];for(const o of i){const l=r[o.key]||0,u=o.branch?ni[o.key].cost.length:1,h=ia(I,xe,o.key),d=l>=u?"done":s&&s.key===o.key?"run":h==="locked"?"locked":I.credits[xe]<Vr(I,xe,o.key).cost?"open poor":"open",f=B.techSel===o.key?" sel":"",x=o.branch?Array.from({length:u},(_,m)=>`<circle cx="${(m-(u-1)/2)*6}" cy="17" r="1.8" class="${m<l?"on":""}"/>`).join(""):"";a.push(`<g data-hex="${o.key}" transform="translate(${o.cx.toFixed(1)},${o.cy.toFixed(1)})" class="hexc ${d}${f}"><polygon points="${t(0,0)}" class="hx"/>`+(()=>{const _=$0(o.key);return`<svg x="-8" y="-17" width="16" height="16" viewBox="${_.vb}" class="ic${_.lu?" lu":""}">${_.body}</svg>`})()+`<text x="0" y="9" class="hl">${o.branch?ni[o.key].name:US[o.key]}</text>${x}</g>`)}const c=Object.keys(pn).map(o=>{const l=pn[o].needs,u=I.wonders&&I.wonders[o]!==void 0?I.bodies[I.wonders[o]]:null,h=I.bodies.some(x=>x.owner===xe&&x.project&&x.project.key===o),d=u?u.owner===xe?"done":"taken":h?"run":r[l]?I.credits[xe]<pn[o].cost?"poor":"open":"locked",f=B.techSel===`mega:${o}`?" sel":"";return`<button data-hex="mega:${o}" class="mtile ${d}${f}" title="${Qc(pn[o].name)}">${bt(o)}</button>`}).join("");return`<svg class="board" viewBox="-124 -114 248 228">${a.join("")}</svg><div class="megarow"><span>Megaprojects</span>${c}</div>`}function kS(n){const e=I.tech[xe],t=e.project,i=Nn[n],r=Vr(I,xe,n),s=ia(I,xe,n),a=e[n]||0,c=i?i.name:ni[n].name,o=i?a?[i.text]:[]:ni[n].levels.slice(0,a).map((u,h)=>`${u}: ${Y0(I,n,h)}`);let l=o.length?`<div class="have">${o.map(u=>`<div>${bt("star")} ${u}</div>`).join("")}</div>`:"";if(!r)l+='<small class="dim">Complete</small>';else if(t&&t.key===n)l+=`<small>Researching ${r.title} · ${Math.floor((1-t.left/t.total)*100)}%</small>`;else{const u=i&&s==="locked"?`<small class="dim">Needs ${i.needs.map(h=>`${ni[h].name} II`).join(" and ")}</small>`:"";l+=`<div class="nextrow"><span>${i?"":`<b>${r.title}</b>`}<small>${r.text} · ${Dt(r.time/ma(I,xe))}</small>${u}</span><button data-k="${n}" ${s?"disabled":""}>Research<small>${r.cost}</small></button></div>`}if(i){const u=Object.keys(pn).find(h=>pn[h].needs===n);u&&(l+=`<small class="dim unlocks">Unlocks ${bt(u)} ${pn[u].name}</small>`)}return`<div class="tdetail"><div class="th">${bt(n)} <b>${c}</b></div>${l}</div>`}function FS(n){const e=Object.keys(pn).find(u=>pn[u].needs===n);if(!e)return"";const t=pn[e],i=`<div class="mega"><div class="th">${bt(e)} <b>${t.name}</b> <span class="dim">megaproject</span></div><small>${t.text}</small><small class="dim">${t.where==="giant"?"Gas giants only":t.where==="inner"?"Innermost planet only":t.where==="planet"?"Planets only":"Any world of yours"} · one per world · only one empire can finish it</small>`,r=I.wonders&&I.wonders[e]!==void 0?I.bodies[I.wonders[e]]:null;if(r)return`${i}<small>${r.owner===xe?"Yours":`Built by ${di(r.owner)}`}, at ${r.name}</small></div>`;const s=I.bodies.find(u=>u.owner===xe&&u.project&&u.project.key===e),a=I.bodies.filter(u=>u.owner!==xe&&u.project&&u.project.key===e).length,c=a?`<small class="warn">${a} rival${a===1?"":"s"} building it</small>`:"";if(s)return`${i}${c}<div class="nextrow"><span><small>At ${s.name} · ${Dt(s.project.left/wc(I,xe))} left · research stations speed it up (half as much as research)</small><i class="meter"><i style="width:${is(1-s.project.left/t.time)}"></i></i></span></div></div>`;const o=I.tech[xe][n],l=I.bodies.filter(u=>u.owner===xe&&!uo(I,u,e));return`${i}${c}<div class="nextrow"><span><small>${o?l.length?Dt(t.time/wc(I,xe)):"No world of yours can take it yet":`Needs ${Nn[n].name}${I.tech[xe][Nn[n].needs[0]]<2||I.tech[xe][Nn[n].needs[1]]<2?` (after ${Nn[n].needs.map(u=>`${ni[u].name} II`).join(" and ")})`:""}`}</small></span><button data-mega="${e}" ${o&&l.length?"":"disabled"}>Build<small>${t.cost}</small></button></div></div>`}function vl(){const e=I.tech[xe].project;if(G("rbar").hidden=!0,G("rnd").hidden=!fn||Ur||B.mode==="project"||!G("menu").hidden||!G("end").hidden||!G("research").hidden||RS()&&(!G("actions").hidden||!G("peek").hidden||!G("fleet").hidden),G("rnd").classList.toggle("idle",!e),En(G("rndsub"),e?`${ni[e.key]?ni[e.key].name:Nn[e.key].name} · ${Dt(e.left/ma(I,xe))}`:"idle"),G("rndbar").style.width=e?is(1-e.left/e.total):"0%",G("research").hidden)return;G("rstatus").textContent="",B.techSel||(B.techSel=e?e.key:Su.find(i=>Vr(I,xe,i))||"ansible");const t=B.techSel;En(G("rlist"),NS()+(t.startsWith("mega:")?`<div class="tdetail">${FS(pn[t.slice(5)].needs)}</div>`:kS(t)))}G("rlist").addEventListener("click",n=>{const e=n.target.closest("[data-hex]");if(e){B.techSel=e.dataset.hex,vl();return}const t=n.target.closest("button[data-mega]");t&&(B.mode="project",B.projKey=t.dataset.mega,B.selected=B.target=null,G("research").hidden=!0,Vt())});G("rnd").addEventListener("click",()=>{G("research").hidden=!G("research").hidden,B.selected=B.target=null,Vt(),vl()});G("rclose").addEventListener("click",()=>{G("research").hidden=!0});const OS=n=>{G("research").hidden||n.target.closest("#research, #rnd")||(G("research").hidden=!0,gl())};for(const n of["pointerdown","touchstart","mousedown"])document.addEventListener(n,OS,{capture:!0,passive:!0});G("rlist").addEventListener("click",n=>{const e=n.target.closest("button[data-k]");if(!e)return;const t=W0(e.dataset.k,(I.tech[xe][e.dataset.k]||0)+1);Ji({type:"research",k:e.dataset.k})&&(Mt(`Researching ${t}`,_t(xe)),G("research").hidden=!0),vl()});G("pct").addEventListener("input",()=>{rt.pct=Number(G("pct").value),yr(),Vt()});G("count").addEventListener("click",()=>{rt.pct=rt.pct===100?50:rt.pct===50?25:100,yr(),Vt()});G("launch").addEventListener("click",()=>{if(!B.mode){B.mode="launch",B.target=null,Vt();return}zS()});G("dark").addEventListener("click",()=>{B.dark=!B.dark,Vt()});G("cancel").addEventListener("click",()=>{B.dark=!1,B.mode=null,B.target=null,Vt()});G("focus").addEventListener("click",()=>{const n=B.target??B.selected;n!==null&&qe.focus(I,n),Vt()});function zS(){if(B.mode==="projconfirm"&&B.selected!==null){const n=I.bodies[B.selected];Ji({type:"project",b:n.id,k:B.projKey})&&Mt(`${pn[B.projKey].name} begun at ${n.name}`,_t(xe),B.projKey),B.mode=null,Vt();return}if(!(B.selected===null||B.target===null)){if(B.mode==="probe"){const n=I.bodies[B.target];Ji({type:"probe",b:B.selected,to:B.target})&&Mt(`Probe away to ${n.name}`,_t(xe)),B.mode=null,B.selected=B.target=null,Vt();return}B.count<1||(Ji({type:"launch",b:B.selected,to:B.target,n:B.count,dark:B.dark}),B.dark=!1,B.mode=null,B.selected=B.target=null,Vt())}}let _a=matchMedia("(pointer: coarse)").matches;window.addEventListener("pointerdown",n=>{_a=n.pointerType!=="mouse"},!0);const Di=document.createElement("div");Di.id="tipbox";Di.hidden=!0;document.body.appendChild(Di);let xl=null;function If(n,e=n.dataset.tip){xl=n,Di.textContent=e,Di.hidden=!1;const t=n.getBoundingClientRect(),i=Math.min(280,window.innerWidth-24);Di.style.maxWidth=`${i}px`;const r=Di.offsetWidth,s=Di.offsetHeight,a=Math.max(12,Math.min(window.innerWidth-r-12,t.left+t.width/2-r/2)),c=t.top-s-8;Di.style.left=`${a}px`,Di.style.top=`${c>8?c:t.bottom+8}px`}function Rd(){xl=null,Di.hidden=!0}document.addEventListener("mouseover",n=>{const e=n.target.closest?.("[data-tip]");e&&!_a&&If(e)});document.addEventListener("mouseout",n=>{const e=n.target.closest?.("[data-tip]");e&&e===xl&&!_a&&Rd()});document.addEventListener("click",n=>{if(pa)return;const e=n.target.closest?.("[data-tip]");if(e&&_a){xl===e?Rd():If(e);return}e||Rd()},!0);let Pd=null,pa=!1;document.addEventListener("pointerdown",n=>{const e=n.target.closest?.("[data-hold]");clearTimeout(Pd),pa=!1,!(!e||n.pointerType==="mouse")&&(Pd=setTimeout(()=>{pa=!0,If(e,e.dataset.hold)},450))},!0);for(const n of["pointerup","pointercancel","pointermove"])document.addEventListener(n,e=>{(n!=="pointermove"||Math.hypot(e.movementX||0,e.movementY||0)>6)&&clearTimeout(Pd)},!0);let ea=null;function Mt(n,e,t=null){const i=G("feed"),r=document.createElement("div");if(r.className="note",ea!==null&&I&&I.bodies[ea]){const s=ea;r.classList.add("go"),r.addEventListener("click",()=>{qe.focus(I,s),B.mode=null,B.fleet=null,B.selected=I.bodies[s].owner===xe?s:null,B.peek=s,Vt()})}for(r.style.setProperty("--c",e),r.textContent=n,t&&r.insertAdjacentHTML("afterbegin",`${bt(t)} `),i.prepend(r);i.children.length>4;)i.lastChild.remove();setTimeout(()=>r.classList.add("gone"),5200),setTimeout(()=>r.remove(),5800)}const Ld=n=>["","blooded","veteran","elite"][An(n)],ur=n=>`TF ${n}`;function Ag(n=I.events.splice(0)){const e=B.vis,t=r=>I.bodies[r].name,i=_t(xe);for(const r of n){ea=r.at??r.to??r.from??null;const s=_t(r.owner);switch(r.type){case"launch":if(r.owner===xe){const a=I.fleets.find(o=>o.id===r.fleet),c=a?a.T:r.T;Mt(`${ur(r.name)} · ${r.n} ship${r.n===1?"":"s"} → ${t(r.to)}${c?` · ${Dt(c)}`:""}${a&&a.assist!==void 0?` · assist via ${t(a.assist)}`:""}`,i);break}if(!e||e.intel<1||!e.bodies.has(r.from))break;if(r.dark){const a=I.fleets.find(c=>c.id===r.fleet);if(!a||!e.seesFleet(a))break}Mt(`Launch detected at ${t(r.from)} · ${r.n} ship${r.n===1?"":"s"}${e.intel>=2?` → ${t(r.to)}`:""}`,s);break;case"arrived":r.owner===xe&&Mt(`${ur(r.name)} arrived at ${t(r.at)}`,i);break;case"engaged":r.owner===xe?Mt(`${ur(r.name)} engaging ${t(r.at)}`,i):r.vs===xe&&Mt(`${t(r.at)} under attack`,s);break;case"wiped":r.owner===xe?Mt(`${ur(r.name)} lost with all hands at ${t(r.at)}`,_t(r.vs)):r.vs===xe&&Mt(`Enemy ${ur(r.name)} destroyed at ${t(r.at)}`,i);break;case"captured":r.owner===xe?Mt(`${t(r.at)} taken by ${ur(r.name)}`,i):r.from===xe&&Mt(`${t(r.at)} lost`,s);break;case"held":r.owner===xe&&Mt(`${t(r.at)} held${An(I.bodies[r.at].vet)?` · garrison ${Ld(I.bodies[r.at].vet)}`:""}`,i);break;case"promoted":r.owner===xe&&Mt(`${r.name?ur(r.name):`${t(r.at)} garrison`} now ${Ld(r.v)}`,i);break;case"event":{const a=hr[r.kind];r.phase==="soon"?Mt(I.bodies[r.at].visitor?`${t(r.at)} incoming`:`${a.name} at ${t(r.at)} in 1:00`,"#c7a6ff",r.kind):r.phase==="won"?Mt(`${r.owner===xe?"You":di(r.owner)} secured the ${a.name.toLowerCase()} · ${r.what}`,_t(r.owner),r.kind):Mt(`${a.name} at ${t(r.at)} is gone`,"#858ca6",r.kind);break}case"visitor":Mt(`${r.name} has left the system`,"#858ca6","comet");break;case"project":{const a=pn[r.key];r.phase==="start"&&r.owner!==xe&&Mt(`${di(r.owner)} began the ${a.name} at ${t(r.at)}`,_t(r.owner),r.key),r.phase==="done"&&Mt(`${r.owner===xe?"You":di(r.owner)} completed the ${a.name}`,_t(r.owner),r.key),r.phase==="lost"&&r.owner===xe&&Mt(`Beaten to the ${a.name}: half refunded`,"#ff7a4d",r.key);break}case"spycaught":r.owner===xe?Mt(`Agent caught on ${t(r.at)} after ${Dt(r.after)}`,"#ff7a4d","spy"):r.by===xe&&Mt(`Security caught a ${di(r.owner)} spy on ${t(r.at)}`,i,"spy");break;case"breakout":r.owner===xe&&Mt(`Broke out of ${t(r.at)}: ${r.lost} ship${r.lost===1?"":"s"} lost${r.n?`, ${r.n} got away`:""}`,"#ff7a4d");break;case"probed":r.owner===xe&&Mt(`Probe flyby of ${t(r.at)} · in view for ${Math.round(be.probe.scan/60*2)/2} min`,i);break;case"scrapped":r.owner===xe&&Mt(`${be.structures[r.what].name} scrapped at ${t(r.at)}`,i);break;case"research":r.owner===xe&&Mt(`${W0(r.key,r.level)} complete`,i,r.key);break}}ea=null}function G0(n,e,t,i=!1){if(!B.mode){const r=qe.pickFleet(I,e,t,xe),s=n!==null&&(n===B.peek||n===B.selected);if(r!==null&&B.fleet===r&&n!==null){Tg();return}if(r!==null&&(n===null||s)&&B.fleet!==r){B.selected=B.target=B.peek=null,B.fleet=r,qe.followFleet(I,r),Vt();return}}if(B.fleet=null,n!==null&&qe.focus(I,n,!1),B.mode==="project"){const r=n!==null?I.bodies[n]:null,s=r?uo(I,r,B.projKey):"cancelled";if(r&&!s){B.selected=n,B.peek=null,B.mode="projconfirm",Vt();return}Mt(s==="cancelled"?"Megaproject cancelled":`Can't build it there: ${s}`,"#858ca6"),B.mode=null,Vt();return}if(B.mode==="launch"||B.mode==="probe")n===null?(B.selected=B.target=null,B.mode=null):B.target=n!==B.selected?n:null;else if(n===null||n===B.selected)B.selected=B.target=null,B.mode=null;else if(I.bodies[n].owner===xe)B.selected=n,B.slot=null,B.pick=null,B.target=null;else{B.selected=B.target=null,B.peek=B.peek===n?null:n,Vt();return}B.peek=null,Vt()}const Hr=G("scene"),li=new Map;let ut=null,Pr={t:0,id:null};Hr.addEventListener("pointerdown",n=>{if(fn){n.preventDefault();try{Hr.setPointerCapture(n.pointerId)}catch{}if(n.pointerType==="mouse"){const e=n.button===2||n.button===1||n.altKey;ut={kind:e?"turn":"click",right:n.button===2,mouse:!0,x0:n.clientX,y0:n.clientY,x:n.clientX,y:n.clientY,pivot:e&&!qe.following()?qe.pivotAt(I,n.clientX,n.clientY):null},B.dragging=!0,qe.orbit.vaz=qe.orbit.vpol=0;return}if(n.isPrimary&&li.clear(),li.set(n.pointerId,{x:n.clientX,y:n.clientY}),li.size===1)ut={kind:"tap",x0:n.clientX,y0:n.clientY};else if(li.size===2){const[e,t]=[...li.values()];ut={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2,mx0:(e.x+t.x)/2,my0:(e.y+t.y)/2}}B.dragging=!0,qe.orbit.vaz=qe.orbit.vpol=0}});Hr.addEventListener("pointermove",n=>{if(ut?.mouse){const r=n.clientX-ut.x,s=n.clientY-ut.y;ut.x=n.clientX,ut.y=n.clientY,ut.kind==="click"&&Math.hypot(n.clientX-ut.x0,n.clientY-ut.y0)>5&&(ut.kind="pan"),ut.kind==="pan"&&qe.pan(r,s),ut.kind==="turn"&&(ut.pivot?qe.rotateAround(ut.pivot,-r*.006,-s*.006):(qe.orbit.az-=r*.006,qe.orbit.pol-=s*.006),Math.hypot(n.clientX-ut.x0,n.clientY-ut.y0)>5&&(ut.moved=!0));return}n.pointerType==="mouse"&&I&&(Hr.style.cursor=qe.pick(n.clientX,n.clientY)!==null?"pointer":"grab");const e=li.get(n.pointerId);if(!e||!ut)return;const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,ut.kind==="pinch"){if(li.size<2)return;const[r,s]=[...li.values()],a=Math.hypot(r.x-s.x,r.y-s.y),c=(r.x+s.x)/2,o=(r.y+s.y)/2;qe.following()&&Math.hypot(c-ut.mx0,o-ut.my0)<40?qe.zoomBy(ut.d/Math.max(1,a)):(qe.pan(c-ut.mx,o-ut.my),qe.zoomAt(c,o,ut.d/Math.max(1,a))),ut.d=a,ut.mx=c,ut.my=o;return}if(ut.kind==="tap"&&Math.hypot(n.clientX-ut.x0,n.clientY-ut.y0)>10&&(ut.kind="orbit"),ut.kind==="orbit"){const r=4/window.innerHeight;qe.orbit.az-=t*r,qe.orbit.pol-=i*r,qe.orbit.vaz=-t*r,qe.orbit.vpol=-i*r}});function Cg(n){if(ut?.mouse){const e=ut;if(ut=null,B.dragging=!1,e.kind==="turn"&&e.right&&!e.moved&&n.type!=="pointercancel"){const r=qe.pick(n.clientX,n.clientY),s=B.selected!==null?I.bodies[B.selected]:null;r!==null&&s&&s.owner===xe&&r!==s.id&&s.ships&&(B.mode="launch",B.target=r,B.fleet=null,Vt());return}if(e.kind!=="click"||n.type==="pointercancel")return;const t=qe.pick(n.clientX,n.clientY),i=performance.now();t!==null&&Pr.id===t&&i-Pr.t<350?(qe.focus(I,t),Pr={t:0,id:null},Vt()):(Pr={t:i,id:t},G0(t,n.clientX,n.clientY,!0));return}if(li.delete(n.pointerId)){if(ut?.kind==="tap"&&li.size===0&&n.type!=="pointercancel"){const e=qe.pick(n.clientX,n.clientY),t=performance.now();e!==null&&Pr.id===e&&t-Pr.t<350?(qe.focus(I,e),Pr={t:0,id:null},Vt()):(Pr={t,id:e},G0(e,n.clientX,n.clientY))}li.size===0?(ut=null,B.dragging=!1):ut={kind:"orbit"}}}Hr.addEventListener("pointerup",Cg);Hr.addEventListener("pointercancel",n=>{Cg(n),ut=null,B.dragging=!1});const Uf=n=>{li.delete(n.pointerId)&&(li.size===0?(ut=null,B.dragging=!1):ut={kind:"orbit"})};window.addEventListener("pointerup",Uf);window.addEventListener("pointercancel",Uf);Hr.addEventListener("lostpointercapture",Uf);const Rg=()=>{li.clear(),ut=null,B.dragging=!1,ha=null};window.addEventListener("blur",Rg);document.addEventListener("visibilitychange",Rg);Hr.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?window.innerHeight:1),t=n.ctrlKey?.01:.0015;qe.zoomToward(n.clientX,n.clientY,Math.exp(Math.max(-.5,Math.min(.5,e*t))))},{passive:!1});const lo=new Set;window.addEventListener("keydown",n=>{if(!fn||n.target.closest("input, textarea"))return;const e=n.key.toLowerCase();if(lo.add(e),e==="escape")B.mode?(B.mode=null,B.target=null):B.selected=B.target=B.peek=null,G("research").hidden=!0,Vt();else if(e==="f"){const t=B.target??B.selected;t!==null&&qe.focus(I,t)}else if(e==="h")Eg();else if(e>="1"&&e<="5"&&!At)Df(bc[Number(e)-1]);else if(e===" ")n.preventDefault(),G("pause").hidden||gg();else if(e==="l"||e==="enter")B.selected!==null&&!G("launch").disabled&&G("launch").click();else if(e==="d")G("dark").hidden||(G("dark").click(),lo.delete("d"));else if(e==="p"){const t=document.querySelector("#buildrow button[data-probe]");t&&!t.disabled&&t.click()}else e==="r"&&G("rnd").click()});window.addEventListener("keyup",n=>lo.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>lo.clear());function BS(n){if(!lo.size)return;const e=700*n,t=(...i)=>i.some(r=>lo.has(r));t("w","arrowup")&&qe.pan(0,e),t("s","arrowdown")&&qe.pan(0,-e),t("a","arrowleft")&&qe.pan(e,0),t("d","arrowright")&&qe.pan(-e,0),t("q")&&(qe.orbit.az+=n*1.5),t("e")&&(qe.orbit.az-=n*1.5),t("=","+")&&qe.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(-n*1.8)),t("-","_")&&qe.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(n*1.8))}document.addEventListener("contextmenu",n=>n.preventDefault());for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,e=>e.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});const GS=["You","Red","Amber"],di=n=>n===xe?"You":I.names?I.names[n]:GS[n];function yu(n,e,t,i,r=s=>Math.round(s)){const h=t.at(-1).t||1,d=Math.max(1,...t.flatMap(v=>v.p.map(w=>w[e]))),f=v=>30+v/h*256,x=v=>8+(1-v/d)*104,_=i.map(v=>{const w=t.map(S=>`${f(S.t).toFixed(1)},${x(S.p[v][e]).toFixed(1)}`).join(" "),y=t.at(-1).p[v][e];return`<polyline points="${w}" fill="none" stroke="${_t(v)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><text x="${f(h)+4}" y="${x(y)+4}" font-size="10" fill="#aab1c8">${di(v)}</text>`}).join(""),m=[0,.5,1].map(v=>`<line x1="30" x2="286" y1="${x(d*v)}" y2="${x(d*v)}" stroke="rgba(160,180,255,0.12)" /><text x="26" y="${x(d*v)+3}" font-size="9" fill="#858ca6" text-anchor="end">${r(d*v)}</text>`).join(""),p=`<text x="30" y="126" font-size="9" fill="#858ca6">0:00</text><text x="286" y="126" font-size="9" fill="#858ca6" text-anchor="end">${Dt(h)}</text>`;return`<div class="chart" data-key="${e}"><h3>${n}</h3><svg viewBox="0 0 320 130" data-l="30" data-r="286" data-w="320">${m}${p}${_}<line class="cross" y1="8" y2="112" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg><div class="readout">Touch the chart to read values</div></div>`}const Pg=[["Ships built","built"],["Ships lost","lost"],["Enemy ships destroyed","killed"],["Worlds captured","captured"],["Worlds lost","worldsLost"],["Credits earned","earned"],["Credits spent","spent"],["Research completed","research"]],V0=new Set(["lost","worldsLost"]);function Lg(n,e){const t=e.map(r=>Math.round(I.stats.totals[r][n])),i=V0.has(n)?Math.min(...t):Math.max(...t);return!V0.has(n)&&i<=0?[]:t.every(r=>r===i)?[]:e.filter((r,s)=>t[s]===i)}function VS(){const n=I.players-1,e=[...new Set(ml)],t=e.length?` · ${I.mp?"AI ":""}${e.join("/")}`:"";return`${co?`Daily ${co.slice(5).replace("-","/")} · ${ei[I.system].name}`:ei[I.system].name} · ${Dt(I.time)} · ${n} rival${n===1?"":"s"}${t}`}function HS(n,e,t,i,r,s,a,c){let o=a;for(n.font=c(s,o);o>16&&n.measureText(e).width>r;)n.font=c(s,--o);if(n.measureText(e).width>r){for(;e.length>1&&n.measureText(e+"…").width>r;)e=e.slice(0,-1);e+="…"}n.fillText(e,t,i)}function $S(){const t=document.createElement("canvas");t.width=1080,t.height=1500;const i=t.getContext("2d"),r=Array.from({length:I.players},(m,p)=>p),s=(m,p)=>`${m} ${p}px Rajdhani, system-ui, sans-serif`;i.fillStyle="#03040a",i.fillRect(0,0,1080,1500),i.strokeStyle="rgba(120,190,255,0.25)",i.lineWidth=2,i.strokeRect(24,24,1032,1452),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(600,30),i.fillText("P E R I H E L I O N",1080/2,96);const a=I.winner===xe;i.fillStyle=_t(a?xe:I.winner),i.font=s(700,96),i.fillText(a?"VICTORY":"DEFEAT",1080/2,200),i.fillStyle="#e6ebf7",i.font=s(500,34),i.fillText(VS(),1080/2,252);const c=80,o=170,l=920-o*r.length;let u=330;i.font=s(700,32),i.textAlign="right",r.forEach((m,p)=>{i.fillStyle=_t(m),HS(i,di(m),c+l+o*(p+1)-20,u,o-30,700,32,s)}),u+=20;for(const[m,p]of Pg){u+=52,i.strokeStyle="rgba(160,180,255,0.15)",i.beginPath(),i.moveTo(c,u+16),i.lineTo(1080-c,u+16),i.stroke(),i.textAlign="left",i.fillStyle="#858ca6",i.font=s(500,30),i.fillText(m,c,u);const v=Lg(p,r);r.forEach((w,y)=>{const S=c+l+o*(y+1)-20;v.includes(w)?(i.fillStyle="rgba(126,224,161,0.16)",i.fillRect(S-o+30,u-34,o-20,46),i.fillStyle="#7ee0a1"):i.fillStyle="#e6ebf7",i.textAlign="right",i.font=s(v.includes(w)?700:500,32),i.fillText(String(Math.round(I.stats.totals[w][p])),S,u)})}const h=I.stats.series,d=[["Ships","ships"],["Worlds","worlds"],["Income","income"]],f=880/3,x=400,_=u+90;return d.forEach(([m,p],v)=>{const w=80+v*(f+20);i.textAlign="left",i.fillStyle="#e6ebf7",i.font=s(600,30),i.fillText(m,w,_);const y=_+20,S=y+x,b=h.at(-1).t||1,T=Math.max(1,...h.flatMap(g=>g.p.map(M=>M[p])));i.strokeStyle="rgba(160,180,255,0.15)",i.lineWidth=2;for(const g of[0,.5,1])i.beginPath(),i.moveTo(w,S-g*x),i.lineTo(w+f,S-g*x),i.stroke();for(const g of r)i.strokeStyle=_t(g),i.lineWidth=4,i.lineJoin="round",i.beginPath(),h.forEach((M,E)=>{const D=w+M.t/b*f,R=S-M.p[g][p]/T*x;E?i.lineTo(D,R):i.moveTo(D,R)}),i.stroke();i.fillStyle="#858ca6",i.font=s(500,24),i.fillText(p==="income"?T.toFixed(1):String(Math.round(T)),w,y+26)}),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(500,26),i.fillText("pretzel-dev.github.io/game-dev/perihelion",1080/2,1444),t}async function WS(){const n=await new Promise(i=>$S().toBlob(i,"image/png")),e=new File([n],"perihelion-report.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i.name==="AbortError")return}const t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e.name,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}G("share").addEventListener("click",WS);function XS(){const n=I.stats,e=Array.from({length:I.players},(s,a)=>a),t=Pg,i=`<div class="legend">${e.map(s=>`<span><i style="background:${_t(s)}"></i>${di(s)}</span>`).join("")}</div>`,r=`<table class="totals"><tr><th></th>${e.map(s=>`<th style="color:${_t(s)}">${di(s)}</th>`).join("")}</tr>`+t.map(([s,a])=>`<tr><td>${s}</td>${e.map(c=>`<td class="${Lg(a,e).includes(c)?"best":""}">${Math.round(n.totals[c][a])}</td>`).join("")}</tr>`).join("")+"</table>";G("report").innerHTML=i+r+yu("Ships","ships",n.series,e)+yu("Worlds held","worlds",n.series,e)+yu("Income (credits/s)","income",n.series,e,s=>s.toFixed(1));for(const s of G("report").querySelectorAll(".chart")){const a=s.querySelector("svg"),c=s.dataset.key,o=l=>{const u=a.getBoundingClientRect(),h=(l.clientX-u.left)/u.width*Number(a.dataset.w),d=Number(a.dataset.l),f=Number(a.dataset.r),x=Math.min(1,Math.max(0,(h-d)/(f-d))),_=n.series[Math.round(x*(n.series.length-1))],m=a.querySelector(".cross"),p=d+_.t/(n.series.at(-1).t||1)*(f-d);m.setAttribute("x1",p),m.setAttribute("x2",p),m.setAttribute("visibility","visible"),s.querySelector(".readout").innerHTML=`${Dt(_.t)} · `+e.map(v=>{const w=_.p[v][c];return`${di(v)} <b>${c==="income"?w.toFixed(1):Math.round(w)}</b>`}).join(" · ")};a.addEventListener("pointerdown",o),a.addEventListener("pointermove",o)}}function qS(){fn=!1,G("rnd").hidden=!0,B.selected=B.target=null,Vt();const n=I.winner===xe;G("end-title").textContent=n?"Victory":"Defeat",G("end-title").style.color=_t(n?xe:I.winner);const e=[...new Set(ml)],t=e.length?` · ${e.map(i=>i[0].toUpperCase()+i.slice(1)).join(" / ")} AI`:"";G("end-sub").textContent=(n?`The system is yours after ${Dt(I.time)}.`:`Your last world fell at ${Dt(Nf??I.time)}.`)+t+` · ${co?"Daily · ":""}${ei[I.system].name}`,XS(),setTimeout(()=>G("end").hidden=!1,1200)}let H0=performance.now(),Mu=0,bu=0,Ur=!1,Nf=null,Dd=!0,kf=0,Xo=!1;function Dg(n){const e=Math.min(.1,(n-H0)/1e3);if(H0=n,I){if(fn&&!ui)if(At?.role==="client"){const t=n-kf>3e3;t!==Xo&&(Xo=t,Xo?(G("banner").hidden=!1,G("banner").textContent="Waiting for the host…"):Jc()),Xo||(I.time+=e)}else{let t=e*Gr;for(;t>0;){const i=Math.min(.25,t);if(!Gt||Gt.free)for(const r of pl)vp(I,r,i);jd(I,i),t-=i}}if(fn){if(B.selected!==null&&I.bodies[B.selected].owner!==xe&&(B.selected=B.target=null),At?.role!=="client"){const i=I.events.splice(0);Ag(i),At?.role==="host"&&i.length&&At.room.broadcast({t:"events",list:i})}At?.role==="host"&&(bu-=e,(bu<=0||I.winner!==null)&&(bu=.25,At.room.seats.forEach((i,r)=>{r>0&&i.conn&&At.room.sendTo(r,{t:"state",s:TS(r)})})));const t=I.bodies.some(i=>i.owner===xe||i.sieges.some(r=>r.owner===xe))||I.fleets.some(i=>i.owner===xe&&!i.probe);if(I.mp&&I.winner===null&&Ur===t&&(Ur=!t,Ur?(Nf=I.time,Mt("Your empire has fallen · watching the rest","#ff7a4d"),B.vis=null):B.vis=as(I,xe),G("leave").hidden=!(Ur&&At?.role==="client")),B.fleet!==null&&gl(),Mu-=e,Mu<=0){Mu=.25,B.vis=Ur||rt.dev&&!At&&B.devAs==="all"?null:as(I,rt.dev&&!At&&B.devAs!==void 0?B.devAs:xe),rt.dev&&!At&&Sg(),Vt(),vl(),xa();{const i=ra(I,xe)-sa(I,xe),r=I.crew?` · ${en(`Crew ${Pc(I,xe)}/${Rc(I,xe)}`,"Ships in service and on order, against the crews your worlds can field. More worlds, Habitats and Industry research raise it.",Pc(I,xe)>=Rc(I,xe)?"warn":"inc")}`:"";En(G("clock"),`<b>₵ ${Math.floor(I.credits[xe])}</b> ${en(`${i<0?"−":"+"}${Math.abs(i).toFixed(1)}/s`,PS(),"inc")}${r} · T+${Dt(I.time)}`)}}I.winner!==null&&qS()}fn&&BS(e),qe.render(I,B,e*(fn?Gr:.2),n/1e3)}requestAnimationFrame(Dg)}window.addEventListener("resize",qe.resize);qe.resize();I=ip({seed:11,opponents:2});pl=[0,1,2].map(n=>Cu(n,"hard",Ti(5+n)));qe.build(I);qe.orbit.dist=330;(function n(){if(!(fn||G("menu").hidden)){for(let e=0;e<4;e++){for(const t of pl)vp(I,t,.25);jd(I,.25)}qe.orbit.az+=.001,setTimeout(n,50)}})();requestAnimationFrame(Dg);window.__perihelion={get game(){return I},view:qe,ui:B,sim:{launch:sl,fleetState:Pn,step:jd,posAt:lt}};
