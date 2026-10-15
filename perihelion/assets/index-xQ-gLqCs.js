var pg=n=>{throw TypeError(n)};var lo=(n,e,t)=>e.has(n)?pg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);function mg(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Af={ansible:'<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>',drives:'<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>',sensors:'<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',intel:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',weapons:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',armour:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',industry:'<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>',array:'<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',targeting:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',kinetic:'<path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M4 9v6"/>',torch:'<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>',hardened:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>',pdnet:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',sundiver:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',massdriver:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',ringyard:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',citadel:'<path d="M10 5V3"/><path d="M14 5V3"/><path d="M15 21v-3a3 3 0 0 0-6 0v3"/><path d="M18 3v8"/><path d="M18 5H6"/><path d="M22 11H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"/><path d="M6 3v8"/>',college:'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',spy:'<path d="M18 11c-1.5 0-2.5.5-3 2"/><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"/><path d="M6 11c1.5 0 2.5.5 3 2"/>'},gg={guns:"M3 12h10M5 12V9h6v3M8 9V3.5",attack:"M3 3l10 10M13 3L3 13M3 10v3h3M13 10v3h-3",fleet:"M5 3.5l6 4.5-6 4.5",probe:"M8 2.5l5 5.5-5 5.5-5-5.5z",incoming:"M4 5l4 6 4-6",reinforce:"M4 11l4-6 4 6",system:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",focus:"M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0",pause:"M5.5 3.5v9M10.5 3.5v9",play:"M5 3l8 5-8 5z",close:"M4 4l8 8M12 4l-8 8",assist:"M12.5 5.5A5 5 0 1 0 13 9M12.5 2v3.5H9",spy:"M2.5 7.5h11M4.5 7.5l1.5-4h4l1.5 4M5.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 11.5h1",dark:"M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z",seam:"M8 1.5l4.5 4-4.5 8.5-4.5-8.5zM3.5 5.5h9M6 5.5l2 8.5 2-8.5",relay:"M3.5 9.5a5 5 0 0 0 7-7zM7 6l4.5-4.5M6 11l-2 3.5h7L9 11",depot:"M8 1.5C11 5.5 12 7.5 12 10a4 4 0 0 1-8 0c0-2.5 1-4.5 4-8.5zM6.5 10.5a1.5 1.5 0 0 0 1.5 1.5",post:"M8 9v5.5M5.5 14.5h5M5.2 6.2a4 4 0 0 1 5.6 0M3 4a7 7 0 0 1 10 0M8 8.5m-.6 0a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0",fortress:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5z",archive:"M2 3.5h4.5A1.5 1.5 0 0 1 8 5v9a1.5 1.5 0 0 0-1.5-1.5H2zM14 3.5H9.5A1.5 1.5 0 0 0 8 5v9a1.5 1.5 0 0 1 1.5-1.5H14z",hulk:"M8 5v9.5M5 7.5h6M2.5 10.5a5.5 4.5 0 0 0 11 0M8 2.2m-1.3 0a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0",forge:"M8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5M3.4 3.4l1.8 1.8M10.8 10.8l1.8 1.8M12.6 3.4l-1.8 1.8M5.2 10.8l-1.8 1.8M8 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0",comet:"M5 11m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 9l6.5-6.5M7.8 10.8l5-3.3M5.2 8.2l3.3-5",derelict:"M1.5 9.5l3.5-3h6l3.5 3-3.5 3H5zM9 6.5L7.5 4M6.5 9.5l1.5 1.5 1-2",signal:"M1.5 8.5h3l2-5 3 9 2-4h3",wreck:"M8 1.5v13M2.4 4.8l11.2 6.4M13.6 4.8L2.4 11.2",convoy:"M2 4.5l3 3.5-3 3.5M6.5 4.5l3 3.5-3 3.5M11 4.5l3 3.5-3 3.5",cache:"M2.5 5L8 2l5.5 3v6L8 14l-5.5-3zM2.5 5L8 8l5.5-3M8 8v6",drives:"M8 1.5l2.5 5h-5zM5.5 6.5h5v4h-5zM6.5 10.5L5 14.5M9.5 10.5l1.5 4M8 10.5v4",sensors:"M2.5 10a6 6 0 0 0 8.5-8.5zM6.8 6.2l5-5M12 1.5h2v2",intel:"M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",weapons:"M2 14l8-8M9.5 6.5l1.5-4 2.5 2.5-4 1.5M3 10l3 3",armour:"M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 4.5v7M5 6.5v3M11 6.5v3",industry:"M3 13l5.5-5.5M9.2 2.6a3.3 3.3 0 1 0 4.2 4.2l-2.2-.4-.6-1.6zM2 14l1-1",ansible:"M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4.6 4.6a4.8 4.8 0 0 0 0 6.8M11.4 4.6a4.8 4.8 0 0 1 0 6.8M2.2 2.2a8.2 8.2 0 0 0 0 11.6M13.8 2.2a8.2 8.2 0 0 1 0 11.6",targeting:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M8 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 1v3M8 12v3M1 8h3M12 8h3",kinetic:"M1.5 8h7M5.5 4.5L9 8l-3.5 3.5M11 3v10M13.5 5v6",torch:"M8 1.5c2.5 3 3.5 5 3.5 7.5a3.5 3.5 0 0 1-7 0c0-1.5.7-2.5 1.5-3.5.3 1.5 1 2 2 2 0-2-.5-4 0-6z",hardened:"M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5zM8 5.5v5M5.5 8h5",pdnet:"M2 12.5a6 6 0 0 1 12 0zM4.6 6.2L3.4 4M8 5V2.5M11.4 6.2L12.6 4",sundiver:"M5 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 3.5h5v9h-5zM9.5 8h5M12 3.5v9",massdriver:"M2 13L13 2M4.5 13.5L14 4M10.5 2h3.5v3.5",ringyard:"M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 8m-6.5 0a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0",citadel:"M2.5 14.5v-9h2v2h2v-2h3v2h2v-2h2v9zM6.5 14.5v-3h3v3",telescope:"M2 10l9-5 1.5 3-9 5zM6.5 11.5l-2 3M7.5 11l2 3.5M11 5l1.5-1 1.5 3-1.5 1",star:"M8 1.5l1.9 4.2 4.6.4-3.5 3 1.1 4.5L8 11.2l-4.1 2.4 1.1-4.5-3.5-3 4.6-.4z"},T0=n=>Af[n]?{vb:"0 0 24 24",body:Af[n],lu:!0}:{vb:"0 0 16 16",body:`<path d="${gg[n]}"/>`,lu:!1},Mt=(n,e="")=>{const t=T0(n);return`<svg class="ic${t.lu?" lu":""}${e?` ${e}`:""}" viewBox="${t.vb}" aria-hidden="true">${t.body}</svg>`},Oe=-1,Cf=0,we={accel:.03,outerPeriod:2400,outerRadius:200,startShips:4,startCredits:400,income:{planet:1,moon:.5,station:.6,asteroid:.3,visitor:0},homeIncome:.4,mineIncome:1.5,ship:{cost:150,time:45},structures:{shipyard:{name:"Shipyard",cost:400,time:90,desc:"Builds ships, one at a time"},mine:{name:"Mine",cost:200,time:45,only:["asteroid","moon"],maxLevel:3,desc:"+1.5/s per level"},skimmer:{name:"Gas harvester",cost:350,time:70,where:"giant",maxLevel:3,income:2,desc:"Skims fuel from the clouds: +2/s per level"},exchange:{name:"Orbital exchange",cost:450,time:80,where:"home",maxLevel:2,income:2.5,desc:"Sells war bonds: +2.5/s per level"},defence:{name:"Guns",cost:250,time:50,maxLevel:3,desc:"+2 guns per level"},bureau:{name:"Security bureau",cost:250,time:50,maxLevel:2,desc:"Hunts enemy spies here and on nearby worlds"},lab:{name:"Research station",cost:300,time:60,maxLevel:3,desc:"Research +50% per level"},habitat:{name:"Habitat",cost:300,time:60,maxLevel:3,crewOnly:!0,desc:"Quarters for crews: +4 crew per level"}},baseGuns:1,gunsPerDefence:2,coverShare:.5,moonCover:.25,fire:.12,gunRegen:.02,flipTime:4,scrapRefund:.4,scrapTime:20,cooldown:15,probe:{cost:80,speed:4,scan:150},cancelRefund:.8,labSpeed:.5,upkeep:{free:40,cost:.05},crew:{home:16,planet:8,giant:6,station:6,moon:3,asteroid:1,habitat:4,industry:.1,convoy:4},drill:.004},ti={drives:{name:"Drives",cost:[300,600,1e3],time:[90,150,240],levels:["Magnetic nozzle","Pellet-fusion torch","Catalysed fusion drive"],text:["Tighter plasma, +15% thrust","Pulsed fusion, +30% thrust","Hotter burn, +45% thrust"]},sensors:{name:"Sensors",cost:[250,500,900],time:[80,140,220],levels:["Long-baseline telescopes","Deep-space listening posts","Interferometer net"],text:["Spot drive flares further out","Hear further into the system","Wide-field sight, a long way out"]},intel:{name:"Intel",cost:[300,550,850],time:[90,150,210],levels:["Signals intercept","Agents in the yards","Broken fleet cipher"],text:["Read enemy fleet sizes; recruit agents; catch enemy agents more often","Learn enemy routes and landing points","Know arrival times; get warnings"]},weapons:{name:"Weapons",cost:[400,800],time:[120,200],levels:["Coilgun batteries","Spinal railguns"],text:["Faster slugs, +15% firepower","Hull-length rails, +30% firepower"]},armour:{name:"Armour",cost:[400,800],time:[120,200],levels:["Whipple shielding","Point-defence drone swarm"],text:["Layered plate, 12% less damage","Drones swat rounds, 24% less damage"]},industry:{name:"Industry",cost:[350,700],time:[100,180],levels:["Orbital fabricators","Self-replicating tooling"],text:["Build 12% faster, mines +15%","Build 24% faster, mines +30%"]}},Vc={burn:.12,seen:.3},pi={travel:40,cost:250,catch:1/300,intel:.5,bureau:1.5,bureauRange:40,skim:.4,slow:.25},vg=[70,100,135,175],pu=["intel","sensors","weapons","drives","industry","armour"],Dn={ansible:{name:"Entangled signals",needs:["intel","sensors"],cost:1100,time:220,text:"Read every fleet you can see: its size, destination and arrival time; get warnings"},targeting:{name:"Targeting data",needs:["sensors","weapons"],cost:1100,time:220,text:"+20% firepower when attacking"},kinetic:{name:"Kinetic strike",needs:["weapons","drives"],cost:1100,time:220,text:"Fleets arrive firing: an opening volley destroys a tenth of their number in defenders"},torch:{name:"Torch production",needs:["drives","industry"],cost:1100,time:220,text:"Ships build 25% faster and fly 10% faster"},hardened:{name:"Hardened colonies",needs:["industry","armour"],cost:1100,time:220,text:"+1 gun on every world; guns rebuild twice as fast"},pdnet:{name:"Point-defence net",needs:["armour","intel"],cost:1100,time:220,text:"Your worlds shoot down 15% of every attacking fleet as it arrives"}},Pi=(n,e,t)=>e!==Oe&&!!n.tech&&!!n.tech[e][t],E0=(n,e)=>Dn[n]?Dn[n].name:ti[n].levels[e-1],dn={sundiver:{needs:"torch",name:"Sun-diver collectors",where:"inner",text:"Every world you hold earns 50% more",cost:2e3,time:480},massdriver:{needs:"kinetic",name:"Mass driver",where:"planet",text:"Fleets launched here fly 50% faster",cost:2e3,time:480},ringyard:{needs:"hardened",name:"Ring yard",where:"giant",text:"Ships build three times as fast here",cost:2e3,time:480},citadel:{needs:"pdnet",name:"Fortress world",where:"any",text:"Twice the guns here, and its cover reaches its family at full strength",cost:2e3,time:480},array:{needs:"ansible",name:"Ansible array",where:"any",text:"See every world and fleet in the system, and where they are going",cost:2e3,time:480},college:{needs:"targeting",name:"War college",where:"any",text:"Simulator-trained crews: every ship you build starts as a veteran (second rank)",cost:2e3,time:480}},uc=(n,e,t)=>e!==Oe&&n.bodies.some(i=>i.wonder===t&&i.owner===e);function no(n,e,t){const i=dn[t];if(e.owner===Oe||e.visitor)return"not yours";if(!Pi(n,e.owner,i.needs))return`needs ${Dn[i.needs].name}`;if(e.project||e.wonder)return"this world already has one";if(n.wonders&&n.wonders[t]!==void 0)return"already built";if(n.bodies.some(r=>r.project&&r.project.key===t&&r.owner===e.owner))return"already building it";if(i.where==="giant"&&!e.giant)return"gas giants only";if(i.where==="planet"&&e.kind!=="planet")return"planets only";if(i.where==="inner"){const r=n.bodies.filter(s=>s.kind==="planet"&&s.parent===null&&!s.star).sort((s,a)=>s.r-a.r)[0];if(e!==r)return"the innermost planet only"}return n.credits[e.owner]<i.cost?"not enough credits":null}function A0(n,e,t){if(no(n,e,t))return!1;const i=dn[t];return n.credits[e.owner]-=i.cost,Xt(n,e.owner,"spent",i.cost),e.project={key:t,left:i.time,paid:i.cost},_n(n,{type:"project",phase:"start",owner:e.owner,at:e.id,key:t}),!0}const dc=(n,e)=>1+.5*(sa(n,e)-1);function xg(n,e){for(const t of n.bodies){if(!t.project||t.owner===Oe||t.sieges.length||(t.project.left-=e*dc(n,t.owner)*(yg(n,t).length?1-pi.slow:1),t.project.left>0))continue;const i=t.project.key;t.wonder=i,t.project=null,(n.wonders||(n.wonders={}))[i]=t.id,_n(n,{type:"project",phase:"done",owner:t.owner,at:t.id,key:i});for(const r of n.bodies)!r.project||r.project.key!==i||(r.owner!==Oe&&(n.credits[r.owner]+=Math.round(r.project.paid/2)),_n(n,{type:"project",phase:"lost",owner:r.owner,at:r.id,key:i}),r.project=null)}}const Ji=(n,e,t)=>e===Oe||!n.tech?0:n.tech[e][t];function Xt(n,e,t,i=1){e===Oe||!n.stats||(n.stats.totals[e][t]+=i)}function Rf(n){n.stats.series.push({t:n.time,p:n.credits.map((e,t)=>({ships:n.bodies.reduce((i,r)=>i+(r.owner===t?r.ships:0),0)+n.fleets.reduce((i,r)=>i+(r.owner===t?r.n:0),0),worlds:n.bodies.filter(i=>i.owner===t).length,income:Ko(n,t),credits:e}))})}const Xo=(n,e)=>we.accel*(n.thrust||1)*(1+.15*Ji(n,e,"drives"))*(Pi(n,e,"torch")?1.1**2:1),Ad=(n,e)=>1+.15*Ji(n,e,"weapons"),C0=(n,e)=>Ad(n,e)*(Pi(n,e,"targeting")?1.2:1),fc=(n,e)=>1-.12*Ji(n,e,"armour"),Bs=(n,e,t=null)=>(1+.12*Ji(n,e,"industry"))*(t&&t.perk==="forge"?mn.forge.boost:1);function Nr(n,e,t){const i=n.tech[e][t]||0;if(Dn[t]){const s=Dn[t];return i?null:{level:1,cost:s.cost,time:s.time,text:s.text,title:s.name}}const r=ti[t];return i<r.cost.length?{level:i+1,cost:r.cost[i],time:r.time[i],text:R0(n,t,i),title:r.levels[i]}:null}function R0(n,e,t){const i=ti[e].text[t];return n.crew&&e==="industry"?`${i}, crews +${Math.round(we.crew.industry*100*(t+1))}%`:i}function _g(n,e){const t=ur[e].text;return n.crew&&e==="convoy"?`${t}, and ${we.crew.convoy} crew sign on`:t}function sa(n,e){const t=n.bodies.reduce((i,r)=>i+(r.owner===e?Hs(r,"lab")*(r.perk==="archive"?2:1):0),0);return(1+we.labSpeed*t)*(N0(n,e,"archive")?mn.archive.boost:1)*(n.research||1)}function qo(n,e,t){const i=Nr(n,e,t);return i?Dn[t]&&Dn[t].needs.some(r=>n.tech[e][r]<2)?"locked":n.tech[e].project?"already researching":n.credits[e]<i.cost?"not enough credits":null:"complete"}function P0(n,e,t){if(qo(n,e,t))return!1;const i=Nr(n,e,t);return n.credits[e]-=i.cost,Xt(n,e,"spent",i.cost),n.tech[e].project={key:t,left:i.time,total:i.time},!0}function Cd(n,e,t){return e===Oe||!t||t.owner===Oe||t.owner===e?"enemy worlds only":Ji(n,e,"intel")<1?"needs Signals intercept":(n.spies||[]).some(i=>i.owner===e&&i.body===t.id)?"already a spy there":n.credits[e]<pi.cost?"not enough credits":null}function L0(n,e,t){if(Cd(n,e,t)||n.winner!==null)return null;n.credits[e]-=pi.cost,Xt(n,e,"spent",pi.cost);const i={id:n.nextId++,owner:e,body:t.id,since:n.time+pi.travel};return(n.spies||(n.spies=[])).push(i),i}const D0=(n,e)=>pi.bureauRange*(e.perk==="post"?2:1)*kr(n),Vs=(n,e)=>mn[e].range*kr(n),yg=(n,e)=>(n.spies||[]).filter(t=>t.body===e.id&&t.owner!==e.owner&&t.since<=n.time);function Rd(n,e){if(e.owner===Oe)return 1;const t=_t(n,e,n.time);let i=0;for(const r of n.bodies){if(r.owner!==e.owner)continue;const s=r.structures.find(a=>a.type==="bureau"&&a.left<=0);s&&(r===e||In(_t(n,r,n.time),t)<=D0(n,r))&&(i=Math.max(i,s.level))}return pi.catch*(1+pi.intel*Ji(n,e.owner,"intel"))*(1+pi.bureau*i)}const Mg=(n,e)=>{const t=Math.sin(n*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function bg(n,e){if(!n.spies||!n.spies.length)return;const t=Math.floor(n.time-e);n.spies=n.spies.filter(i=>{const r=n.bodies[i.body];if(r.owner===i.owner||r.owner===Oe)return!1;if(i.since>n.time)return!0;const s=Math.min(n.credits[r.owner],Ys(r,n)*pi.skim*e);n.credits[r.owner]-=s,n.credits[i.owner]+=s,Xt(n,i.owner,"earned",s);const a=Rd(n,r);for(let c=Math.max(t,Math.floor(i.since))+1;c<=Math.floor(n.time);c++)if(Mg(i.id,c)<a)return _n(n,{type:"spycaught",owner:i.owner,by:r.owner,at:r.id,after:n.time-i.since}),!1;return!0})}function ts(n,e){const t=vg[Ji(n,e,"sensors")]*kr(n),i=[];for(const l of n.bodies)l.owner===e&&i.push([_t(n,l,n.time),t]);for(const l of n.fleets)l.owner===e&&i.push([An(l,n.time),20*kr(n)]);for(const l of n.bodies)l.sieges.some(u=>u.owner===e)&&i.push([_t(n,l,n.time),20]);for(const l of n.scans||[])l.owner===e&&l.until>n.time&&i.push([_t(n,n.bodies[l.body],n.time),14]);for(const l of n.spies||[])l.owner===e&&l.since<=n.time&&i.push([_t(n,n.bodies[l.body],n.time),30]);const r=l=>i.some(([u,p])=>In(u,l)<=p);for(const l of n.bodies)l.perk==="relay"&&l.owner===e&&i.push([_t(n,l,n.time),Vs(n,"relay")]);const s=new Set(n.bodies.filter(l=>l.owner===e||r(_t(n,l,n.time))).map(l=>l.id)),a=Math.max(Ji(n,e,"intel"),Pi(n,e,"ansible")||uc(n,e,"array")?3:0),c=new Set((n.spies||[]).filter(l=>l.owner===e&&l.since<=n.time).map(l=>l.body)),o=(l,u=An(l,n.time))=>l.owner===e||c.has(l.from)||(l.dark&&!u.burning?i.some(([p,d])=>In(p,u)<=d*Vc.seen):r(u));return uc(n,e,"array")?{owner:e,sees:()=>!0,seesFleet:()=>!0,bodies:new Set(n.bodies.map(l=>l.id)),intel:a,warn:!0}:{owner:e,sees:r,seesFleet:o,bodies:s,intel:a,warn:N0(n,e,"post")||Pi(n,e,"ansible")}}function Mi(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const In=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),Pf=["Aurelion","Seraphine","Caelestis","Vespera","Solenne","Astraeon","Halcyra","Lumeris","Orionde","Celestine","Empyra","Noctara","Stellarin","Zenitha","Aethelis","Borealis Major","Cygnara","Draconis","Elysion","Fulgora","Galathea","Heliara","Ixora","Lyrae","Meridia","Nebulon","Ophira","Polaria","Quasara","Radiantis","Sidera","Thessaly Prime","Uranara","Valenor","Wynthera","Xandria","Ysolde","Zephyra","Aquilon","Brightholm","Corvessa","Dawnmere","Equinoxa","Firmament","Gloriana","Hyperion Tor","Irisca","Kyrios","Luminara","Magellane","Nimbara","Ouranos Minor","Perigee","Radiance","Solstira","Tethra","Umbrielle","Vireon","Aldebara","Betelline","Capellan","Deneba","Etamin","Fomalhara","Hadara","Izarine","Kochaba","Mirzana","Nashira","Pollara","Rigelle","Sadalmel","Talitha","Vegara","Alcyone Deep","Canopea","Mimosa","Aludra","Suhail","Menkara"],Lf=["Selene Minor","Lucen","Nyxa","Astra","Eos","Hesperel","Stilbe","Aglaia","Phaenna","Asteria","Chione","Lampetia","Aether","Hemera","Orphne","Aura","Pleia","Maia Minor","Electra Minor","Merope Minor","Taygete Minor","Sterope","Celaeno Minor","Alcyon","Aphelia","Periel","Syzyn","Nadira","Zenia","Umbra","Penumbra","Crescen","Gibbous","Waxen","Occulta","Transita","Libra Minor","Albedo","Lumen","Nimbus","Corona Minor","Halo","Parhelia","Glimmer","Starling","Morrowlight","Duskmere","Emberlight","Frostlight","Glowworm","Ashlight","Moth","Lantern","Candela","Lux","Ignis","Scintilla","Stella Parva","Vela Minor","Nova Parva","Pulsa","Quark","Photon","Zodia","Ecliptica"],Sg=["Ring One","Anchor","Meridian","Longreach","Holdfast","Keystone","Lantern","Tollgate","Crossways","Beacon Hill","Harbourline","Windlass","Capstan","Stillwater","Gantry Nine","Fairhaven","Moorings","Pinwheel","Carrick Yard","Halfway House","Sentinel","Spindle","Drydock Four","Tether","Outlook","Commonwealth","Linchpin","Caravel","Weigh Station","Portcullis"],wg=["Hollow","Gravel","Anvil","Cairn","Dolmen","Flinders","Grist","Hearth","Kiln","Loam","Menhir","Nugget","Quarry","Rubble","Slag","Tor","Whetstone","Boulder","Clinker","Dregs","Ingot","Lump","Pumice","Scoria","Talus","Tuff","Cobalt","Nickel Jack","Old Iron","Spall","Brickbat","Crag","Scree","Knapp","Hardpan"],Df=["Resolute","Tenacity","Wayfarer","Undaunted","Nightingale","Clemency","Forbearance","Hardihood","Persistence","Sparrowhawk","Temerity","Valiance","Wanderlust","Adamant","Bellicose","Candour","Diligence","Endeavour","Fortitude","Gallantry","Harbinger","Impetus","Jubilee","Kittiwake","Longbow","Mistral","Nonesuch","Obstinate","Paladin","Quicksilver","Rapier","Sirocco","Tempest","Unbowed","Vigilant","Warspite","Xiphias","Yeoman","Zealous","Albatross","Brigantine","Corsair","Dauntless","Equinox","Firebrand","Grenadier","Halberd","Inflexible","Javelin","Kingfisher","Lionheart","Mariner","Nemesis","Onslaught","Peregrine","Quarterstaff","Relentless","Stalwart","Thunderer","Unicorn","Vanguard","Wolfhound","Arbalest","Bulwark","Cutlass","Defiance","Ember Tide","Falconer","Goshawk","Hotspur","Invictus","Jackdaw","Kraken","Lodestone","Monsoon","Northwind","Outrider","Pathfinder","Quarrel","Redoubt","Scimitar","Trident","Upholder","Vortex","Whirlwind","Asp","Basilisk","Cockatrice","Dragonet","Estoc","Fulmar","Glaive","Hurricane","Ironside","Jaeger","Kestrel Wing","Lance","Magpie","Narwhal","Osprey","Petrel","Raven","Shrike","Tern","Umbra","Viper","Wyvern Wing","Auk","Bittern","Curlew","Dunlin","Egret","Fieldfare","Gannet","Heron","Ibis","Jay","Kite","Lapwing","Merlin","Nuthatch","Oriole","Plover","Redshank","Skua","Tanager","Veery","Whimbrel","Stoic","Candle","Hearthguard"],qs=.08,I0=[1,2.5,4.5],wn=n=>I0.filter(e=>(n||0)>=e).length,If=(n,e,t)=>{const i=Math.min(2,Math.max(0,n/Math.max(e,.5)));return Math.min(4.5,.15+.35*Math.min(1,t/Math.max(e,1))+.3*i**1.3)};function _n(n,e){n.events&&(n.events.push({t:n.time,...e}),n.events.length>60&&n.events.splice(0,n.events.length-60))}function U0(n){const e=Df[(n.nameSeed+n.nextId*7919)%Df.length];return n.fleets.some(i=>i.name===e)?`${e} ${["II","III","IV","V"][n.nextId%4]}`:e}const Xa=(n,e,t,i)=>e+i>0?(n*e+t*i)/(e+i):0,Uf=n=>we.outerPeriod*(n/we.outerRadius)**1.5,mn={seam:{name:"Rich seam",text:"Mines here pay double",kinds:["asteroid","moon"],fits:"mine"},relay:{name:"Old relay",text:"See everything inside its ring",range:160},depot:{name:"Fuel depot",text:"Fleets launched from your worlds inside its ring fly 20% faster",range:120,boost:1.2},post:{name:"Listening post",text:"Warns of fleets heading for your worlds. A Security bureau here reaches twice as far",fits:"bureau"},fortress:{name:"Fortress rock",text:"Heavy guns; +1 gun on each of your worlds inside its ring. Guns built here give half as many again",range:100,fits:"defence"},archive:{name:"Ancient archive",text:"Research 25% faster. Research stations here count double",boost:1.25,fits:"lab"},hulk:{name:"Drydock hulk",text:"Ships built here start as veterans. Its shipyards build 50% faster",vet:2.5,fits:"shipyard"},forge:{name:"Tidal forge",text:"Tidal heat runs the foundries: structures, upgrades and ships build twice as fast here",boost:2,giantMoon:!0}},ur={comet:{name:"Comet pass",text:"Catch it on its pass round the sun and hold it to mine it",hold:60,pay:12},derelict:{name:"Derelict warship",text:"Catch the drifting hulk and hold it to salvage veteran ships",hold:45,ships:4},signal:{name:"Lost probe signal",text:"Hold to recover a research level",hold:40},wreck:{name:"Ice-hauler wreck",text:"Hold to salvage its cargo",hold:45,credits:450},convoy:{name:"Refugee convoy",text:"Hold when it docks: the world earns +1/s for good",hold:30,bonus:1},cache:{name:"Supply cache",text:"Hold for a free structure upgrade",hold:30}},mu={comet:{inside:420,q:[70,120],guns:0},derelict:{inside:480,q:[100,160],guns:2}},Yo=(n,e,t=n.time)=>!e.visitor||!!n.visit&&t>=n.visit.t0&&t<=n.visit.t0+n.visit.T,Pd=(n,e)=>e.visitor?n.visit?n.visit.t0+n.visit.T-n.time:0:1/0;function Tg(n,e){const t=n.visit;if(!t||e<t.t0||e>t.t0+t.T)return{x:4e3,y:0,z:4e3};const i=(e-t.t0-t.T/2)/t.tau;let r=i;for(let l=0;l<8;l++)r-=(r+r*r*r/3-i)/(1+r*r);const s=2*Math.atan(r),a=t.q*(1+r*r),c=a*Math.cos(s),o=a*Math.sin(s);return{x:c*Math.cos(t.w)-o*Math.sin(t.w),y:a*.04*Math.sin(s),z:c*Math.sin(t.w)+o*Math.cos(t.w)}}function Eg(n,e){const t=mu[e],i=t.q[0]+lr(n)*(t.q[1]-t.q[0]),r=Math.max(...n.bodies.filter(l=>l.parent===null&&!l.visitor).map(l=>l.r)),s=l=>{const u=Math.sqrt(Math.max(0,l/i-1));return u+u**3/3},a=t.inside*hc(n)/2/s(r),c=2*a*s(r+60);n.visit={kind:e,t0:n.time,T:c,q:i,w:lr(n)*Math.PI*2,tau:a};const o=n.bodies.find(l=>l.visitor);return o.owner=Oe,o.ships=0,o.guns=o.guns0=t.guns,o.sieges=[],o.vet=0,o.tf=null,o.name=e==="comet"?`Comet ${String.fromCharCode(65+Math.floor(lr(n)*26))}/${10+Math.floor(lr(n)*90)}`:`Derelict ${U0(n)}`,o}function Ag(n){const e=n.bodies.find(a=>a.visitor),t=(a,c)=>n.bodies.filter(o=>o.owner===a&&!o.visitor).sort((o,l)=>In(_t(n,o,n.time),c)-In(_t(n,l,n.time),c))[0],i=_t(n,e,n.time),r=(a,c,o,l)=>{const u=t(a,i);if(!(c<1)){if(!u){Xt(n,a,"lost",c);return}e.owner=a,e.ships=c,e.vet=o,e.tf=l,e.restUntil=0,Wc(n,e,u,c)}},s=e.sieges;e.sieges=[],e.owner!==Oe&&r(e.owner,e.ships,e.vet,e.tf);for(const a of s)r(a.owner,a.n,a.vet,a.name);for(const a of n.fleets){if(a.to!==e.id)continue;const c=An(a,n.time),o=t(a.owner,c);if(!o){Xt(n,a.owner,"lost",a.n),a.n=0;continue}const l=ns(n,null,o,n.time,Xo(n,a.owner),{p:{x:c.x,y:c.y,z:c.z},v:{x:c.vx,y:c.vy,z:c.vz}});delete a.assist,delete a.gs,delete a.legs,delete a.detour,Object.assign(a,l,{t0:n.time,to:o.id})}n.fleets=n.fleets.filter(a=>a.n>0||a.probe),e.owner=Oe,e.ships=0,e.guns=0,_n(n,{type:"visitor",phase:"left",name:e.name}),n.visit=null}const Cg={first:300,every:510,jitter:90,notice:90,grace:120};function lr(n){return n.evSeed=Math.imul(n.evSeed^n.evSeed>>>15,2246822507)+1831565813>>>0,n.evSeed/4294967296}function Rg(n,e){const t=Cg,i=hc(n);if(n.nextEvent===void 0&&(n.nextEvent=(t.first+(lr(n)-.5)*2*60)*i),n.happenings||(n.happenings=[]),n.time>=n.nextEvent){const r=Object.keys(ur).filter(o=>!mu[o]||!n.visit),s=r[Math.floor(lr(n)*r.length)];let a;if(mu[s]){const o=Eg(n,s);a={id:n.nextId++,kind:s,at:o.id,starts:n.time+t.notice*i,ends:n.visit.t0+n.visit.T-20,holder:Oe,held:0}}else{const o=n.bodies.filter(p=>!p.home&&!p.visitor&&!n.happenings.some(d=>d.at===p.id)),l=o.some(p=>p.owner===Oe)?o.filter(p=>p.owner===Oe):o,u=l[Math.floor(lr(n)*l.length)];a={id:n.nextId++,kind:s,at:u.id,starts:n.time+t.notice*i,ends:n.time+(t.notice+t.grace)*i+ur[s].hold,holder:Oe,held:0}}const c=n.bodies[a.at];n.happenings.push(a),_n(n,{type:"event",phase:"soon",kind:s,at:c.id}),n.nextEvent=n.time+(t.every+(lr(n)-.5)*2*t.jitter)*i}for(const r of n.happenings){if(n.time<r.starts)continue;const s=n.bodies[r.at],a=ur[r.kind],c=s.sieges.length?Oe:s.owner;c!==r.holder&&(r.holder=c,r.held=0),c!==Oe&&(r.held+=e,r.kind==="comet"&&(n.credits[c]+=a.pay*e,Xt(n,c,"earned",a.pay*e)),r.held>=a.hold&&(Pg(n,r,s,c),r.done=!0))}n.visit&&n.time>=n.visit.t0+n.visit.T-1&&Ag(n);for(const r of n.happenings)!r.done&&n.time>r.ends&&(r.done=!0,_n(n,{type:"event",phase:"gone",kind:r.kind,at:r.at}));n.happenings=n.happenings.filter(r=>!r.done)}function Pg(n,e,t,i){const r=ur[e.kind];let s="";if(e.kind==="derelict"&&(t.vet=Xa(t.vet||0,t.ships,2.5,r.ships),t.ships+=r.ships,s=`${r.ships} veteran ships`),e.kind==="wreck"&&(n.credits[i]+=r.credits,Xt(n,i,"earned",r.credits),s=`${r.credits} credits`),e.kind==="convoy"&&(t.bonus=(t.bonus||0)+r.bonus,n.crew&&(t.crewBonus=(t.crewBonus||0)+we.crew.convoy),s=`+${r.bonus}/s here${n.crew?` and ${we.crew.convoy} crew`:""}`),e.kind==="comet"&&(s="the comet mined"),e.kind==="signal"){const a=Object.keys(ti).filter(o=>Nr(n,i,o)&&n.tech[i].project?.key!==o),c=a[Math.floor(lr(n)*a.length)];c?(n.tech[i][c]+=1,c==="drives"&&K0(n,i),s=ti[c].levels[n.tech[i][c]-1]):(n.credits[i]+=400,Xt(n,i,"earned",400),s="400 credits")}if(e.kind==="cache"){const a=t.structures.find(c=>we.structures[c.type].maxLevel&&c.level<we.structures[c.type].maxLevel&&c.left<=0&&!c.scrap);a?(a.level+=1,s=`${we.structures[a.type].name} to level ${a.level}`):(n.credits[i]+=300,Xt(n,i,"earned",300),s="300 credits")}_n(n,{type:"event",phase:"won",kind:e.kind,at:t.id,owner:i,what:s})}const N0=(n,e,t)=>e!==Oe&&n.bodies.some(i=>i.perk===t&&i.owner===e),Qn={classic:{name:"Classic",text:"Six worlds, a belt, a few moons"},court:{name:"Giant’s court",text:"One huge gas giant ringed with moons",court:!0},wide:{name:"Wide and cold",text:"Few worlds, far apart",gap:30,moons:.5,rocks:3},crowded:{name:"Crowded",text:"Worlds packed close: short, sharp trips",gap:8,stations:3},belt:{name:"Rich belt",text:"A thick asteroid belt worth mining",rocks:8,beltW:12},binary:{name:"Binary",text:"A second sun and its worlds swing around the system; its worlds earn +50%",companion:!0},vast:{name:"Vast",text:"A system at true-to-life proportions: every voyage is a commitment",scale:4,thrust:.5,worlds:2,orbits:7,sunR:160,research:.6,test:!0}},kr=n=>n.scale||1,hc=n=>Math.sqrt(kr(n)/(n.thrust||1)),Nf=2.6,vl=6,k0=Object.keys(Qn),pc=k0.filter(n=>!Qn[n].test);function No(n,e,t=n.time){const i=n.stars[e];if(i.e){const s=i.phase+2*Math.PI*t/i.period;let a=s;for(let l=0;l<6;l++)a-=(a-i.e*Math.sin(a)-s)/(1-i.e*Math.cos(a));const c=i.a*(Math.cos(a)-i.e),o=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(a);return{x:c*Math.cos(i.w)-o*Math.sin(i.w),y:0,z:c*Math.sin(i.w)+o*Math.cos(i.w)}}const r=i.phase+2*Math.PI*t/i.period;return{x:Math.cos(r)*i.r,y:0,z:Math.sin(r)*i.r}}function F0(n=new Date){const e=n.toISOString().slice(0,10);let t=2166136261;for(const i of e)t=Math.imul(t^i.charCodeAt(0),16777619);return{seed:t>>>0,system:pc[(t>>>0)%pc.length],key:e}}function O0({seed:n=Date.now(),opponents:e=1,mp:t=!1,system:i="classic"}={}){const r=Mi(n),s=Qn[i]||Qn.classic,a=(L,O)=>{const V=L.filter(re=>!O.has(re)),oe=V[Math.floor(r()*V.length)]??`${L[0]} ${O.size}`;return O.add(oe),oe},c=L=>{for(let O=L.length-1;O>0;O--){const V=Math.floor(r()*(O+1));[L[O],L[V]]=[L[V],L[O]]}return L},o=new Set,l=[],u=L=>(L.id=l.length,L.owner=Oe,L.ships=0,L.build=0,L.queue=0,L.structures=[],L.guns=L.kind==="planet"?L.giant?5:2:1+Math.floor(r()*2),L.sieges=[],l.push(L),L),p=[],d=s.worlds||1,f=s.orbits||1,v=s.scale||1,y=e+1,m=c([1,2,3,4]).slice(0,y);for(let L=0;L<6;L++){const O=s.court&&L===5,V=O||!m.includes(L)&&L>=3&&(r()<(s.court?.3:.7)||L===5&&!p.some(ge=>ge.giant)),oe=O?5:V?3.2+r()*1.2:1.6+r()*1.1;let re=L===0?0:m.includes(L)?1:O?5:V?1+Math.floor(r()*3):Math.floor(r()*2);s.moons&&!m.includes(L)&&(re=Math.floor(re*s.moons));const de=[];for(let ge=0;ge<re;ge++)de.push({r:(oe*3.4+6+ge*7+r()*.8)*f,size:(.5+r()*.5)*d,period:300+ge*150+r()*120});p.push({giant:V,size:oe*d,base:oe,moons:de,station:!1})}const h=c([1,2,3,4,5]).slice(0,s.stations||2);for(const L of h)p[L].station=!0;for(const L of m)p[L].station&&(p[L].moons=[]);for(const L of p)L.reach=Math.max(L.size*1.6,L.station?(L.base*2.4+2.5)*f:0,...L.moons.map(O=>O.r+O.size));const g=(s.gap||16)*v,w=s.sunR||vl*Nf;let _=0,S=null;for(const[L,O]of p.entries())S?O.r=S.r+S.reach+O.reach+g+r()*10*v:O.r=s.sunR?w*1.8+O.reach+g:s.inner||56,L===4&&(_=S.r+S.reach+g,O.r=_+(s.beltW||6)*v+g+O.reach+r()*10*v),S=O;for(const L of p){const O=u({kind:"planet",name:a(Pf,o),parent:null,r:L.r,period:Uf(L.r),phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:L.size,baseSize:L.base,giant:L.giant,hue:r()});for(const V of L.moons)u({kind:"moon",name:a(Lf,o),parent:O.id,r:V.r,period:V.period,phase:r()*Math.PI*2,incl:(r()-.5)*.3,size:V.size,baseSize:V.size/d,hue:r()});L.station&&u({kind:"station",name:a(Sg,o),parent:O.id,r:(L.base*2.4+1.5)*f,period:200+r()*60,phase:r()*Math.PI*2,incl:.2,size:.45*d,baseSize:.45,hue:0})}const b=s.rocks||4;for(let L=0;L<b;L++){const O=_+r()*(s.beltW||6)*v,V=u({kind:"asteroid",name:a(wg,o),parent:null,r:O,period:Uf(O),phase:L/b*Math.PI*2+r()*.8,incl:(r()-.5)*.1,size:.5+r()*.4,hue:r()});V.baseSize=V.size,V.size*=d}const T=[{r:0,period:1,phase:0,size:Nf}];if(s.companion){const O=Math.max(...l.filter(oe=>oe.parent===null).map(oe=>oe.r))+22,V=.35;T.push({a:O/(1-V),e:V,w:r()*Math.PI*2,period:2800,phase:r()*Math.PI*2,size:.5,clear:9}),[[16,1.9],[30,2.4]].forEach(([oe,re],de)=>{const ge=u({kind:"planet",name:a(Pf,o),parent:null,star:1,r:oe,period:140+de*160,phase:r()*Math.PI*2,incl:(r()-.5)*.06,size:re,giant:!1,hue:r()});de===1&&u({kind:"moon",name:a(Lf,o),parent:ge.id,r:re*3.4+6,period:260,phase:r()*Math.PI*2,incl:.2,size:.7,hue:r()})})}u({kind:"visitor",name:"Visitor",parent:null,r:0,period:1,phase:0,incl:0,size:.8,hue:.55,visitor:!0}).guns=0,s.sunR&&(T[0].size=s.sunR/vl);const x={mp:t,crew:s.crew!==!1,research:s.research||1,scale:s.scale||1,thrust:s.thrust||1,system:s===Qn[i]?i:"classic",stars:T,gravity:!0,sunClear:vl*T[0].size*1.8,bodies:l,fleets:[],players:y,time:0,winner:null,nextId:1,events:[],nameSeed:Math.floor(r()*1e5)},M=l.filter(L=>L.kind==="planet"),E=m.map(L=>M[L]),P=r()*Math.PI*2;E.forEach((L,O)=>{L.phase=P+O*Math.PI*2/y});for(const L of l)L.kind==="station"&&L.structures.push({type:"shipyard",level:1,left:0});E.forEach((L,O)=>{L.owner=O,L.ships=we.startShips,L.home=!0;for(const V of l)V.parent===L.id&&V.kind==="moon"&&(V.homeMoon=!0);L.structures.push({type:"shipyard",level:1,left:0},{type:"defence",level:1,left:0}),L.guns=gc(L)});const R=new Set(E.flatMap(L=>[L.id,...l.filter(O=>O.parent===L.id).map(O=>O.id)])),z=c(Object.keys(mn));let N=0;for(const L of z){if(N>=3)break;const O=mn[L],V=l.filter(_e=>_e.owner===Oe&&!_e.perk&&!_e.visitor&&!R.has(_e.id)&&(!O.kinds||O.kinds.includes(_e.kind))&&(!O.giantMoon||_e.kind==="moon"&&l[_e.parent].giant)),oe=_e=>_e.parent===null?_e.id:_e.parent,re=_e=>l.filter(et=>et.perk&&oe(et)===oe(_e)).length,de=V.filter(_e=>re(_e)===0),ge=de.length?de:V.filter(_e=>re(_e)<2);if(!ge.length)continue;const Be=ge[Math.floor(r()*ge.length)];Be.perk=L,L==="fortress"&&(Be.structures.push({type:"defence",level:2,left:0}),Be.guns=gc(Be)+1),L==="hulk"&&!Be.structures.some(_e=>_e.type==="shipyard")&&Be.structures.push({type:"shipyard",level:1,left:0}),N++}for(const L of l)L.guns0=L.owner===Oe?L.guns:0;return x.evSeed=Math.floor(r()*2**31),x.credits=Array.from({length:x.players},()=>we.startCredits),x.stats={totals:Array.from({length:x.players},()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,earned:0,spent:0,research:0})),series:[]},x.tech=Array.from({length:x.players},()=>({drives:0,sensors:0,intel:0,weapons:0,armour:0,industry:0,project:null})),x}function z0(n){if(n.visitor)return 0;if(n.kind==="station")return 2;if(n.kind==="asteroid")return 1;const e=n.baseSize??n.size;return n.kind==="moon"?n.homeMoon||e>.8?2:1:n.home?5:n.giant?4:e>2.2?3:2}const Ld=n=>!n.scrap&&(n.left<=0||n.next),mc=(n,e)=>n.structures.some(t=>t.type===e&&Ld(t)),Hs=(n,e)=>n.structures.reduce((t,i)=>t+(i.type===e&&Ld(i)?i.level:0),0);function Dd(n,e){if(e.owner===Oe||e.perk==="fortress")return 0;const t=_t(n,e,n.time);return n.bodies.some(i=>i.perk==="fortress"&&i.owner===e.owner&&In(_t(n,i,n.time),t)<=Vs(n,"fortress"))?1:0}const Lg=(n,e)=>(gc(e)+Dd(n,e)+(Pi(n,e.owner,"hardened")?1:0))*(e.wonder==="citadel"?2:1),gc=n=>we.baseGuns+Math.round(we.gunsPerDefence*Hs(n,"defence")*(n.perk==="fortress"&&n.owner!==Oe?1.5:1)),B0=(n,e)=>{if(n.owner===Oe)return{worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};const t=1+.15*(e?Ji(e,n.owner,"industry"):0),i=we.structures,r={worlds:we.income[n.kind]*(n.star?1.5:1)+(n.home?we.homeIncome:0),mines:we.mineIncome*Hs(n,"mine")*t*(n.perk==="seam"?2:1),skimmers:i.skimmer.income*Hs(n,"skimmer"),exchanges:i.exchange.income*Hs(n,"exchange"),bonuses:n.bonus||0};return e&&uc(e,n.owner,"sundiver")&&(r.bonuses+=.5*(r.worlds+r.mines+r.skimmers+r.exchanges+r.bonuses)),r},Ys=(n,e)=>{const t=B0(n,e);return t.worlds+t.mines+t.skimmers+t.exchanges+t.bonuses},Ko=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?Ys(i,n):0),0),G0=(n,e)=>n.bodies.reduce((t,i)=>t+(i.owner===e?i.ships:0),0)+n.fleets.reduce((t,i)=>t+(i.owner===e&&!i.probe?i.n:0),0);function qa(n){if(n.owner===Oe||n.visitor)return 0;const e=we.crew;return(n.home?e.home:n.kind==="planet"?n.giant?e.giant:e.planet:e[n.kind]||0)+e.habitat*Hs(n,"habitat")+(n.crewBonus||0)}function vc(n,e){if(!n.crew)return 1/0;const t=n.bodies.reduce((i,r)=>i+(r.owner===e?qa(r):0),0);return Math.floor(t*(1+we.crew.industry*Ji(n,e,"industry")))}const xc=(n,e)=>G0(n,e)+n.bodies.reduce((t,i)=>t+(i.owner===e?i.queue:0),0),jo=(n,e)=>Math.max(0,G0(n,e)-we.upkeep.free)*we.upkeep.cost,Hc=n=>n.structures.filter(e=>e.type==="shipyard"&&Ld(e)).length,Ya=n=>{let e=we.structures[n.type].cost;for(let t=1;t<(n.level||1);t++)e+=Dr({type:n.type,level:t});return Math.round(e*we.scrapRefund)};function Id(n,e,t){return e.owner===Oe?"not yours":t.scrap?"already scrapping":e.sieges.length?"under attack":null}function V0(n,e,t){return Id(n,e,t)?!1:(t.scrap=we.scrapTime,Hc(e)||(e.build=0),!0)}function H0(n,e){return e.owner===Oe||e.queue<1?!1:(e.queue-=1,n.credits[e.owner]+=Math.round(we.ship.cost*we.cancelRefund),e.queue===0&&(e.build=0),!0)}function _c(n,e,t){const i=we.structures[t];return e.owner===Oe?"not yours":i.only&&!i.only.includes(e.kind)?`${e.kind}s can't have one`:i.where==="giant"&&!e.giant?"gas giants only":i.where==="home"&&!e.home?"homeworlds only":i.crewOnly&&!n.crew?"not on this map":e.structures.length>=z0(e)?"no free slots":n.credits[e.owner]<i.cost?"not enough credits":null}function Ai(n,e,t){if(_c(n,e,t))return!1;const i=we.structures[t];return n.credits[e.owner]-=i.cost,Xt(n,e.owner,"spent",i.cost),e.structures.push({type:t,level:1,left:i.time}),!0}const Dr=n=>Math.round(we.structures[n.type].cost*(n.type==="defence"?.9:(n.level+1)*.75)),kf=(n,e)=>we.ship.time/(Bs(n,e.owner,e)*(Pi(n,e.owner,"torch")?1.25:1)*(e.wonder==="ringyard"?3:1)*(e.perk==="hulk"?1.5:1)),$c=n=>we.structures[n.type].time*(1+n.level*.5);function ko(n,e,t){const i=we.structures[t.type];return e.owner===Oe?"not yours":i.maxLevel?t.left>0||t.scrap?"busy":t.level>=i.maxLevel?"at max level":n.credits[e.owner]<Dr(t)?"not enough credits":null:"can't be upgraded"}function Co(n,e,t){return ko(n,e,t)?!1:(Xt(n,e.owner,"spent",Dr(t)),n.credits[e.owner]-=Dr(t),t.next=t.level+1,t.left=$c(t),!0)}function yc(n,e){return e.owner===Oe?"not yours":mc(e,"shipyard")?n.credits[e.owner]<we.ship.cost?"not enough credits":xc(n,e.owner)>=vc(n,e.owner)?"no crew to spare":null:"needs a shipyard"}function gu(n,e){return yc(n,e)?!1:(n.credits[e.owner]-=we.ship.cost,Xt(n,e.owner,"spent",we.ship.cost),e.queue+=1,!0)}function _t(n,e,t){if(e.visitor)return Tg(n,t);const i=e.phase+2*Math.PI*t/e.period,r={x:Math.cos(i)*e.r,y:Math.sin(i)*e.r*e.incl,z:Math.sin(i)*e.r};if(e.star){const s=No(n,e.star,t);r.x+=s.x,r.z+=s.z}if(e.parent!==null){const s=_t(n,n.bodies[e.parent],t);r.x+=s.x,r.y+=s.y,r.z+=s.z}return r}const Dg=n=>2*Math.sqrt(n/we.accel);function Ff(n,e,t){const r=_t(n,e,t-.5),s=_t(n,e,t+.5);return{x:(s.x-r.x)/(2*.5),y:(s.y-r.y)/(2*.5),z:(s.z-r.z)/(2*.5)}}const $0=14,Ig=n=>n.size*1.8+.4,Ud=(n,e)=>({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}),En=n=>Math.hypot(n.x,n.y,n.z);function Of(n,e,t,i,r,s=r/2){const a={x:t.x-n.x-e.x*r,y:t.y-n.y-e.y*r,z:t.z-n.z-e.z*r},c=Ud(i,e),o=s*s/2,l=1/(s*(r-s)),u={x:(a.x-o*c.x/s)*l,y:(a.y-o*c.y/s)*l,z:(a.z-o*c.z/s)*l},p={x:c.x/s-u.x,y:c.y/s-u.y,z:c.z/s-u.z};return{a1:u,a2:p,need:Math.max(En(u),En(p))}}function Ks(n,e){if(n.legs){const[r,s]=n.legs;return e<r.T?Ks(r,e):Ks(s,e-r.T)}const t=Nd(n,e);if(!n.gs)return t;const i=q0(n.gs,Math.max(0,Math.min(1,e/n.T)));return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2],vx:t.vx+i[3],vy:t.vy+i[4],vz:t.vz+i[5]}}function Nd(n,e){const t=n.bf?n.bf*n.T:n.T/2,i=Math.min(e,t);let r=n.p0.x+n.v0.x*i+.5*n.a1.x*i*i,s=n.p0.y+n.v0.y*i+.5*n.a1.y*i*i,a=n.p0.z+n.v0.z*i+.5*n.a1.z*i*i,c=n.v0.x+n.a1.x*i,o=n.v0.y+n.a1.y*i,l=n.v0.z+n.a1.z*i;const u=Math.max(0,Math.min(e,n.T-t)-t);if(r+=c*u,s+=o*u,a+=l*u,e>n.T-t){const p=e-(n.T-t);r+=c*p+.5*n.a2.x*p*p,s+=o*p+.5*n.a2.y*p*p,a+=l*p+.5*n.a2.z*p*p,c+=n.a2.x*p,o+=n.a2.y*p,l+=n.a2.z*p}return{x:r,y:s,z:a,vx:c,vy:o,vz:l}}function xl(n,e,t){for(let i=1;i<128;i++){const r=i/128*n.T,s=Ks(n,r);if(En(s)<(e.sunClear||$0))return!1;for(let a=1;a<(e.stars||[]).length;a++)if(In(s,No(e,a,t+r))<e.stars[a].clear)return!1}return!0}const W0={boost:1.25,range:16};function zf(n,e,t,i,r){const s=new Set([t.id,i.id,t.parent,i.parent]);let a=null;for(const c of n.bodies)if(!(!c.giant||s.has(c.id)))for(let o=1;o<24;o++){const l=o/24*e.T,u=In(Ks(e,l),_t(n,c,r+l));u<c.size*W0.range&&(!a||u<a.d)&&(a={g:c,d:u})}return a&&a.g}function X0(n,e,t=n.time){if(e.owner===Oe)return 1;const i=_t(n,e,t);return n.bodies.some(r=>r.perk==="depot"&&r.owner===e.owner&&In(_t(n,r,t),i)<=Vs(n,"depot"))?mn.depot.boost:1}function oa(n,e,t,i=n.time,r=1,s=!1,a=.5){const c=X0(n,e,i)*(e.wonder==="massdriver"?1.5:1);r*=c*c;const o=ns(n,e,t,i,Xo(n,e.owner)*r,null,s,a),l=zf(n,o,e,t,i);if(!l)return o;const u=ns(n,e,t,i,Xo(n,e.owner)*r*W0.boost,null,s,a);return u.T<o.T&&zf(n,u,e,t,i)===l?{...u,assist:l.id}:o}const Ug={share:1},Ng=4*Math.PI*Math.PI*we.outerRadius**3/we.outerPeriod**2,Xi=48;function Bf(n,e){const t=n.T/Xi,i=[[0,0,0,0,0,0]];let r=0,s=0,a=0,c=0,o=0,l=0;for(let u=0;u<Xi;u++){const p=(u+.5)*t,d=Nd(n,p),f=e?q0(e,(u+.5)/Xi):[r+c*t*.5,s+o*t*.5,a+l*t*.5],v=d.x+f[0],y=d.y+f[1],m=d.z+f[2],h=v*v+y*y+m*m,g=-Ng*Ug.share/(h*Math.sqrt(h));c+=g*v*t,o+=g*y*t,l+=g*m*t,r+=c*t,s+=o*t,a+=l*t,i.push([r,s,a,c,o,l])}return i}function q0(n,e){const t=Math.min(Xi-1,Math.floor(e*Xi)),i=e*Xi-t,r=n[t],s=n[t+1];return r.map((a,c)=>a+(s[c]-a)*i)}function ns(n,e,t,i,r,s=null,a=!1,c=.5,o=!1){const l=s?s.p:_t(n,e,i),u=s?s.v:Ff(n,e,i),p=(h,g)=>{if(o||!g||t.fixed)return h;const w=kg(n,t,i,r,l,u,a,c);return w&&w.T<h.T?w:h},d=h=>{const g=t.fixed?t.fixed.p:_t(n,t,i+h),w=Ud(l,g),_=En(w)||1,S=t.fixed?0:Ig(t),b={x:g.x+w.x/_*S,y:g.y+w.y/_*S,z:g.z+w.z/_*S},T=t.fixed?t.fixed.v:Ff(n,t,i+h);return{p0:l,v0:u,p1:b,v1:T,T:h,...c<.5?{bf:c}:{},...Of(l,u,b,T,h,h*c)}},f=h=>{let g=d(h),w=null;for(let T=0;T<12;T++){w=Bf(g,w);const x=w[Xi],M={x:g.p1.x-x[0],y:g.p1.y-x[1],z:g.p1.z-x[2]},E={x:g.v1.x-x[3],y:g.v1.y-x[4],z:g.v1.z-x[5]},P=Of(l,u,M,E,h,h*c),R=T<2?1:.7,z=(O,V)=>({x:O.x+(V.x-O.x)*R,y:O.y+(V.y-O.y)*R,z:O.z+(V.z-O.z)*R}),N=z(g.a1,P.a1),L=z(g.a2,P.a2);g={...g,a1:N,a2:L,need:Math.max(En(N),En(L))}}const _=Bf(g,w),S=Nd(g,h),b=Math.hypot(S.x+_[Xi][0]-g.p1.x,S.y+_[Xi][1]-g.p1.y,S.z+_[Xi][2]-g.p1.z);return g.gs=_,b>.5&&(g.need=1/0),g},v=d;let y=1,m=!1;for(let h=2;h<2e4;h+=2){let g=v(h);if(g.need>r){y=h;continue}let w=y,_=h;for(let S=0;S<30;S++){const b=(w+_)/2;v(b).need>r?w=b:_=b}if(g=v(_),n.gravity&&!a&&xl(g,n,i)){for(let S=_;S<_*2.5+40;S*=1.06){const b=f(S);if(b.need<=r&&xl(b,n,i))return p(b,m)}return p(g,m)}if(xl(g,n,i))return p(g,m);m=!0,y=h}return p(n.gravity&&!a?f(2e4):v(2e4),m)}function kg(n,e,t,i,r,s,a,c){const o=n.sunClear||$0,l=Dg(In(r,_t(n,e,t)))*Math.sqrt(we.accel/i),u=_t(n,e,t+l),p=Ud(u,r),d=p.x*p.x+p.y*p.y+p.z*p.z||1,f=Math.max(0,Math.min(1,-(r.x*p.x+r.y*p.y+r.z*p.z)/d));let v={x:r.x+p.x*f,y:0,z:r.z+p.z*f};En(v)<1&&(v={x:-p.z,y:0,z:p.x});const y=En(v)||1;v={x:v.x/y,y:0,z:v.z/y};let m=null;for(const h of[1,-1])for(const g of a?[1.35]:[1.35,1.9]){const w={x:v.x*h*o*g,y:0,z:v.z*h*o*g};let _={x:-w.z,y:0,z:w.x};_.x*p.x+_.z*p.z<0&&(_={x:-_.x,y:0,z:-_.z});const S=En(_)||1,b=In(r,w),T=In(w,u),x=.8*Math.sqrt(2*i*Math.min(b,T)),M={x:_.x/S*x,y:0,z:_.z/S*x},E=ns(n,null,{fixed:{p:w,v:M}},t,i,{p:r,v:s},a,c,!0);if(E.need>i||m&&E.T>=m.T)continue;const P=Ks(E,E.T),R=ns(n,null,e,t+E.T,i,{p:{x:P.x,y:P.y,z:P.z},v:{x:P.vx,y:P.vy,z:P.vz}},a,c,!0);if(R.need>i)continue;const z=E.T+R.T;(!m||z<m.T)&&(m={legs:[E,R],T:z,p0:r,v0:s,p1:R.p1,v1:R.v1,a1:E.a1,a2:R.a2,need:Math.max(E.need,R.need),detour:!0,...c<.5?{bf:c}:{}})}return m}const kd=(n,e)=>e.restUntil>n.time?Math.min(e.resting||0,e.ships):0,Ir=(n,e)=>e.ships-kd(n,e);function Y0(n,e,t){e.resting=kd(n,e)+t,e.restUntil=n.time+we.cooldown}function Wc(n,e,t,i,r=!1){if(i=Math.min(Math.floor(i),Ir(n,e)),i<1||e===t||n.winner!==null)return null;const s=oa(n,e,t,n.time,1,!1,r?Vc.burn:.5);if(s.T>Pd(n,t)-5||!Yo(n,t))return null;if(e.ships-=i,e.sieges.length){const c=Math.floor(i/2);i-=c,Xt(n,e.owner,"lost",c);for(const o of e.sieges)Xt(n,o.owner,"killed",c/e.sieges.length);if(_n(n,{type:"breakout",owner:e.owner,at:e.id,lost:c,n:i}),i<1)return null}const a={id:n.nextId++,owner:e.owner,n:i,from:e.id,to:t.id,...s,t0:n.time,vet:e.vet||0};return r&&(a.dark=!0),e.tf&&i*2>=i+e.ships?(a.name=e.tf,e.tf=null):a.name=U0(n),e.ships||(e.tf=null),n.fleets.push(a),_n(n,{type:"launch",owner:a.owner,fleet:a.id,name:a.name,n:i,from:e.id,to:t.id,T:a.T,...r?{dark:!0}:{}}),a}function K0(n,e){for(const t of n.fleets){if(t.owner!==e)continue;const i=t.T-(n.time-t.t0);if(i<10)continue;const r=An(t,n.time),s=Xo(n,e)*(t.probe?we.probe.speed:1),a=ns(n,null,n.bodies[t.to],n.time,s,{p:{x:r.x,y:r.y,z:r.z},v:{x:r.vx,y:r.vy,z:r.vz}},!1,t.bf||.5);a.T>=i||(delete t.assist,delete t.gs,delete t.legs,delete t.detour,Object.assign(t,a,{t0:n.time}))}}function Fg(n,e,t){if(!e||e.probe||!!e.dark===t||n.winner!==null||e.T-(n.time-e.t0)<10)return!1;const r=An(e,n.time),s=ns(n,null,n.bodies[e.to],n.time,Xo(n,e.owner),{p:{x:r.x,y:r.y,z:r.z},v:{x:r.vx,y:r.vy,z:r.vz}},!1,t?Vc.burn:.5);return delete e.assist,delete e.bf,delete e.gs,delete e.legs,delete e.detour,Object.assign(e,s,{t0:n.time}),t?e.dark=!0:delete e.dark,!0}function Fd(n,e,t){return e.owner===Oe?"not yours":!t||t===e?"pick a target":mc(e,"shipyard")?n.credits[e.owner]<we.probe.cost?"not enough credits":null:"needs a shipyard"}function vu(n,e,t){if(Fd(n,e,t)||n.winner!==null||!Yo(n,t))return null;n.credits[e.owner]-=we.probe.cost,Xt(n,e.owner,"spent",we.probe.cost);const i={id:n.nextId++,owner:e.owner,n:0,probe:!0,from:e.id,to:t.id,...oa(n,e,t,n.time,we.probe.speed),t0:n.time,vet:0,name:"Probe"};return n.fleets.push(i),i}function An(n,e){const t=Math.min(n.T,Math.max(0,e-n.t0));if(n.legs){const[u,p]=n.legs,d=t<u.T?u:p;return{...An({...d,t0:0},d===u?t:t-u.T),progress:t/n.T,leg:d===u?1:2}}const i=Ks(n,t),r=n.T/2,s=r-we.flipTime/2,a=Math.abs(t-r)<we.flipTime/2,c=En(n.a1)>1e-9?{x:n.a1.x/En(n.a1),y:n.a1.y/En(n.a1),z:n.a1.z/En(n.a1)}:{x:0,y:0,z:1},o=En(n.a2)>1e-9?{x:n.a2.x/En(n.a2),y:n.a2.y/En(n.a2),z:n.a2.z/En(n.a2)}:c;let l=t<r?c:o;if(a){const u=(1-Math.cos((t-s)/we.flipTime*Math.PI))/2,p=Math.max(-1,Math.min(1,c.x*o.x+c.y*o.y+c.z*o.z)),d=Math.acos(p)*u;let f={x:c.y*o.z-c.z*o.y,y:c.z*o.x-c.x*o.z,z:c.x*o.y-c.y*o.x};En(f)<1e-4&&(f=Math.abs(c.y)<.9?{x:-c.z,y:0,z:c.x}:{x:1,y:0,z:0});const v=En(f)||1;f={x:f.x/v,y:f.y/v,z:f.z/v};const y=Math.cos(d),m=Math.sin(d),h={x:f.y*c.z-f.z*c.y,y:f.z*c.x-f.x*c.z,z:f.x*c.y-f.y*c.x},g=f.x*c.x+f.y*c.y+f.z*c.z;l={x:c.x*y+h.x*m+f.x*g*(1-y),y:c.y*y+h.y*m+f.y*g*(1-y),z:c.z*y+h.z*m+f.z*g*(1-y)}}return{x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz,nx:l.x,ny:l.y,nz:l.z,progress:t/n.T,burning:!a&&t<n.T&&(!n.bf||t<n.bf*n.T||t>n.T-n.bf*n.T),flipping:a,phase:t<r?1:2}}function Mc(n,e){if(e.owner===Oe||e.visitor)return[];const t=e.parent===null?e:n.bodies[e.parent],i=[t,...n.bodies.filter(s=>s.parent===t.id)],r=[];for(const s of i){if(s===e||s.owner!==e.owner||s.guns<=0)continue;const a=s.wonder==="citadel"?1:s===t?we.coverShare:we.moonCover;r.push({from:s,n:s.guns*a})}return r}const io=(n,e)=>Mc(n,e).reduce((t,i)=>t+i.n,0);function Og(n,e,t){let i=!1;const r=e.sieges.reduce((c,o)=>c+o.n,0),s=(e.ships*(1+qs*wn(e.vet))+e.guns+io(n,e))*Ad(n,e.owner);let a=0;for(const c of e.sieges){const o=r>0?c.n/r:0;c.dmg=(c.dmg||0)+we.fire*s*o*fc(n,c.owner)*t,a+=c.n*(1+qs*wn(c.vet))*C0(n,c.owner)}for(e.dmg=(e.dmg||0)+we.fire*a*fc(n,e.owner)*t,e.fighting=!0;e.dmg>=1&&e.ships+e.guns>0;){e.dmg-=1,e.ships>0&&(e.guns<1||e.ships>=e.guns)?(e.ships-=1,Xt(n,e.owner,"lost"),Xt(n,e.sieges.slice().sort((o,l)=>l.n-o.n)[0].owner,"killed")):e.guns=Math.max(0,e.guns-1);const c=e.sieges.slice().sort((o,l)=>l.n-o.n)[0];c.kills=(c.kills||0)+1,e.lostDef=(e.lostDef||0)+1,e.totDef=(e.totDef||0)+1}for(const c of e.sieges)for(;c.dmg>=1&&c.n>0;)c.dmg-=1,c.n-=1,e.lostAtk=(e.lostAtk||0)+1,e.totAtk=(e.totAtk||0)+1,Xt(n,c.owner,"lost"),Xt(n,e.owner,"killed"),e.kills=(e.kills||0)+1;for(const c of e.sieges)c.n<=0&&_n(n,{type:"wiped",owner:c.owner,name:c.name,at:e.id,vs:e.owner});if(e.ships||(e.tf=null),e.sieges=e.sieges.filter(c=>c.n>0),e.ships+e.guns<=0&&e.sieges.length){const c=e.sieges.sort((o,l)=>l.n-o.n)[0];Xt(n,e.owner,"worldsLost"),Xt(n,c.owner,"captured"),_n(n,{type:"captured",owner:c.owner,from:e.owner,at:e.id,name:c.name}),e.owner=c.owner,e.ships=c.n,e.resting=0,Y0(n,e,c.n),e.vet=Math.min(4.5,(c.vet||0)+If(c.foe0||1,c.n0||c.n,c.kills||0)),e.cadre=wn(e.vet),e.tf=c.name,wn(e.vet)>wn(c.vet)&&_n(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),e.guns=0,e.dmg=0,e.build=0,e.slips=[],e.queue=0,e.structures=e.structures.filter(o=>o.left<=0||o.next);for(const o of e.structures)o.next&&(delete o.next,o.left=0),delete o.scrap;e.sieges=e.sieges.filter(o=>o!==c),e.captured=!0,i=!0}if(!e.sieges.length){if(e.fighting&&!i&&e.ships>0){const c=e.vet;e.vet=Math.min(4.5,(e.vet||0)+If(e.foe0||1,e.own0||1,e.kills||0)),wn(e.vet)>wn(c)&&_n(n,{type:"promoted",owner:e.owner,at:e.id,name:e.tf,v:e.vet}),_n(n,{type:"held",owner:e.owner,at:e.id})}e.dmg=0,e.fighting=!1,e.foe0=e.own0=e.kills=0}}function Od(n,e){if(n.winner!==null)return;n.stats&&(!n.stats.series.length||n.time-n.stats.series.at(-1).t>=10)&&Rf(n),n.time+=e;for(const i of n.bodies){if(i.owner===Oe){!i.sieges.length&&i.guns<(i.guns0||0)&&(i.guns=Math.min(i.guns0,i.guns+we.gunRegen*e));continue}n.credits[i.owner]+=Ys(i,n)*e,Xt(n,i.owner,"earned",Ys(i,n)*e);const r=Bs(n,i.owner,i),s=Lg(n,i);if(i.guns>s&&(i.guns=s),i.sieges.length)continue;for(const l of i.structures){if(l.scrap){l.scrap=Math.max(0,l.scrap-e),l.scrap||(l.gone=!0);continue}l.left<=0||(l.left=Math.max(0,l.left-e*r),l.left===0&&l.next&&(l.level=l.next,delete l.next))}for(const l of i.structures.filter(u=>u.gone))n.credits[i.owner]+=Ya(l),Xt(n,i.owner,"earned",Ya(l)),_n(n,{type:"scrapped",owner:i.owner,at:i.id,what:l.type,fee:Ya(l)});i.structures=i.structures.filter(l=>!l.gone);const a=Hc(i);for(i.slips||(i.slips=[]);i.slips.length<Math.min(a,i.queue);)i.slips.push(0);i.slips.length=Math.min(i.slips.length,a,i.queue);const c=(Pi(n,i.owner,"torch")?1.25:1)*(i.wonder==="ringyard"?3:1)*(i.perk==="hulk"?1.5:1);i.slips=i.slips.map(l=>l+e*r*c/we.ship.time);for(const l of i.slips)l>=1&&(i.vet=Xa(i.vet||0,i.ships,Math.max(i.perk==="hulk"?mn.hulk.vet:0,uc(n,i.owner,"college")?2.5:0),1),i.queue-=1,i.ships+=1,Xt(n,i.owner,"built"));i.slips=i.slips.filter(l=>l<1),i.build=i.slips.length?Math.max(...i.slips):0;const o=we.gunRegen*(Pi(n,i.owner,"hardened")?2:1);i.guns<s&&(i.guns=Math.min(s,i.guns+o*e))}for(let i=0;i<n.players;i++){const r=jo(n,i)*e;if(r>0){const s=Math.min(n.credits[i],r);n.credits[i]-=s,Xt(n,i,"spent",s)}}for(const i of n.bodies)i.owner!==Oe&&(i.ships?(i.cadre=Math.max(i.cadre||0,wn(i.vet)),!i.sieges.length&&wn(i.vet)<i.cadre&&(i.vet=Math.min(I0[i.cadre-1],(i.vet||0)+we.drill*e))):i.cadre=0);for(const[i,r]of(n.tech||[]).entries())if(r.project&&(r.project.left-=e*sa(n,i),r.project.left<=0)){const s=Dn[r.project.key]?1:ti[r.project.key].cost.length;r[r.project.key]=Math.min(s,(r[r.project.key]||0)+1),r.project.key==="drives"&&K0(n,i),_n(n,{type:"research",owner:i,key:r.project.key,level:r[r.project.key]}),r.project=null,Xt(n,i,"research")}n.scans&&(n.scans=n.scans.filter(i=>i.until>n.time)),bg(n,e),n.fleets=n.fleets.filter(i=>{if(n.time-i.t0<i.T)return!0;const r=n.bodies[i.to];if(i.probe)return(n.scans||(n.scans=[])).push({owner:i.owner,body:r.id,until:n.time+we.probe.scan}),_n(n,{type:"probed",owner:i.owner,at:r.id}),!1;if(r.owner===i.owner)r.cadre=Math.max(r.cadre||0,wn(r.vet),wn(i.vet)),r.vet=Xa(r.vet||0,r.ships,i.vet||0,i.n),(!r.tf||i.n>=r.ships)&&(r.tf=i.name),r.ships+=i.n,Y0(n,r,i.n),_n(n,{type:"arrived",owner:i.owner,name:i.name,n:i.n,at:r.id});else{let s=0;if(Pi(n,r.owner,"pdnet")){const o=Math.floor(i.n*.15);s=i.n*.15-o,i.n-=o,Xt(n,i.owner,"lost",o),Xt(n,r.owner,"killed",o)}if(i.n<=0)return _n(n,{type:"wiped",owner:i.owner,name:i.name,at:r.id,vs:r.owner}),!1;if(Pi(n,i.owner,"kinetic")){let o=Math.floor(i.n*.1);for(r.dmg=(r.dmg||0)+(i.n*.1-o);o-- >0&&r.ships+r.guns>0;)r.ships>0?(r.ships-=1,Xt(n,r.owner,"lost"),Xt(n,i.owner,"killed")):r.guns=Math.max(0,r.guns-1)}const a=r.ships*(1+qs*wn(r.vet))+r.guns+io(n,r);r.own0=Math.max(r.own0||0,a),r.foe0=(r.foe0||0)+i.n;const c=r.sieges.find(o=>o.owner===i.owner);c?(c.vet=Xa(c.vet||0,c.n,i.vet||0,i.n),c.n+=i.n,c.n0+=i.n,c.dmg=(c.dmg||0)+s):r.sieges.push({owner:i.owner,n:i.n,vet:i.vet||0,name:i.name,n0:i.n,foe0:a,dmg:s}),_n(n,{type:"engaged",owner:i.owner,name:i.name,n:i.n,at:r.id,vs:r.owner})}return!1});for(const i of n.bodies)i.sieges.length&&Og(n,i,e);xg(n,e),n.evSeed!==void 0&&Rg(n,e);const t=new Set;for(const i of n.bodies){i.owner!==Oe&&t.add(i.owner);for(const r of i.sieges)t.add(r.owner)}for(const i of n.fleets)i.probe||t.add(i.owner);n.mp?t.size<=1&&(n.winner=[...t][0]??Oe):t.has(Cf)?t.size===1&&(n.winner=Cf):n.winner=[...t][0]??Oe,n.winner!==null&&n.stats&&Rf(n)}const zg={cadet:{think:14,acts:1,margin:.85,extra:0,seenExtra:0,skill:.1,eco:.5,calm:480},easy:{think:8,acts:1,margin:1,extra:1,seenExtra:0,skill:.35,eco:.7,calm:240},normal:{think:4,acts:2,margin:1.2,extra:1,seenExtra:1,skill:.7},hard:{think:2,acts:3,margin:1.3,extra:1,seenExtra:1,skill:.95,eco:1.4,smart:!0},brutal:{think:.8,acts:5,margin:1.4,extra:2,seenExtra:1,skill:1,eco:2.1,smart:!0}};function xu(n,e,t){return{owner:n,d:zg[e],rand:t,clock:2+t()*3,plan:null}}const Ka=(n,e,t,i)=>e.sieges.length?null:Wc(n,e,t,i);function Gf(n,e,t,i=0,r=!0,s=null){const a=s||{ships:t.ships,vet:t.vet,guns:t.guns,cover:io(n,t)},c=C0(n,e)*(1+qs*wn(i)),o=fc(n,e),l=t.owner,u=l===Oe?1:Ad(n,l),p=l===Oe?1:fc(n,l),d=1+qs*wn(a.vet),f=m=>{let h=m,g=0,w=a.ships,_=a.guns,S=0;for(let b=0;b<1200;b++){for(g+=we.fire*(w*d+_+a.cover)*u*o*.5,S+=we.fire*h*c*p*.5;S>=1&&w+_>0;)S-=1,w>0&&(_<1||w>=_)?w-=1:_=Math.max(0,_-1);for(;g>=1&&h>0;)g-=1,h-=1;if(h<=0)return!1;if(w+_<=0)return!0}return!1};let v=1,y=1;for(;!f(y);)if(y*=2,y>256)return 1/0;for(;v<y;){const m=v+y>>1;f(m)?y=m:v=m+1}return y}function j0(n,e,t){if(e.d.eco&&n.winner===null&&(n.credits[e.owner]=Math.max(0,n.credits[e.owner]+Ko(n,e.owner)*(e.d.eco-1)*t)),e.clock-=t,e.clock>0||n.winner!==null)return;e.clock=e.d.think*(.8+e.rand()*.4);const i=ts(n,e.owner),r=f=>{if(!i.seesFleet(f))return!1;const v=n.bodies[f.to];return v.owner===e.owner&&In(An(f,n.time),_t(n,v,n.time))<60*kr(n)},s=f=>f.owner===e.owner||i.intel>=2&&i.seesFleet(f)||r(f),a=f=>f.owner===e.owner||i.intel>=1?f.n:5,c=(f,v)=>n.fleets.filter(y=>!y.probe&&y.to===f.id&&y.owner===e.owner===v&&s(y)).reduce((y,m)=>y+a(m),0),o=()=>e.rand()<e.d.skill,l=f=>f.ships*(1+qs*wn(f.vet)),u=new Map,d={vis:i,coming:c,route:(f,v)=>{const y=f.id*1e3+v.id;return u.has(y)||u.set(y,oa(n,f,v,n.time,1,!0).T),u.get(y)}};Gg(n,e,n.bodies.filter(f=>f.owner===e.owner),i,s,a,l,o);for(let f=0;f<e.d.acts&&Bg(n,e,d);f++);for(let f=0;f<e.d.acts;f++){const v=Vg(n,e,n.bodies.filter(y=>y.owner===e.owner),c,o);if(!v||v==="save")break}}function Vf(n,e,t,i){return t.bodies.has(i.id)?{ships:i.ships,vet:i.vet,guns:i.guns,cover:io(n,i)}:i.owner===Oe?{ships:0,vet:0,guns:i.perk==="fortress"?6:i.giant?5:(i.kind==="planet",2),cover:0}:{ships:6,vet:1,guns:3,cover:1}}function Bg(n,e,{vis:t,coming:i,route:r}){const s=n.bodies.filter(g=>g.owner===e.owner),a=e.d.smart,c=e.d.calm&&n.time<e.d.calm,o=g=>g.home&&n.time>900?2:1,l=g=>Ir(n,g)-Math.ceil(i(g,!1)*1.2)-o(g),u=g=>(n.scans||[]).some(w=>w.owner===e.owner&&w.body===g.id),p=g=>n.fleets.some(w=>w.probe&&w.owner===e.owner&&w.to===g.id),d=g=>n.fleets.filter(w=>!w.probe&&w.owner===e.owner&&w.to===g.id).reduce((w,_)=>w+_.n,0),f=(g,w)=>Math.ceil(g*e.d.margin)+(t.bodies.has(w.id)?e.d.seenExtra:e.d.extra);if(a&&!n.fleets.some(g=>g.probe&&g.owner===e.owner)&&n.credits[e.owner]>we.probe.cost+200){const g=s.filter(S=>mc(S,"shipyard")),w=S=>Math.min(...g.map(b=>In(_t(n,b,n.time),_t(n,S,n.time)))),_=n.bodies.filter(S=>S.owner!==e.owner&&S.owner!==Oe&&!S.visitor&&!t.bodies.has(S.id)&&!u(S)).sort((S,b)=>w(S)-w(b))[0];if(_&&g.length&&w(_)<160*kr(n)&&e.rand()<.5){const S=b=>In(_t(n,b,n.time),_t(n,_,n.time));if(vu(n,g.sort((b,T)=>S(b)-S(T))[0],_))return!0}}let v=null;for(const g of s){const w=l(g);if(!(w<1))for(const _ of n.bodies){if(_.owner===e.owner||!Yo(n,_)||c&&_.owner!==Oe||d(_)>0)continue;const S=r(g,_);if(S>Pd(n,_)-10)continue;const b=Vf(n,e,t,_);_.owner!==Oe&&mc(_,"shipyard")&&(b.ships+=Math.min(_.queue||1,S/we.ship.time)),_.owner!==Oe&&(b.guns=Math.max(b.guns,Math.min(gc(_)+Dd(n,_),b.guns+we.gunRegen*S))),b.ships+=i(_,!1);const T=f(Gf(n,e.owner,_,g.vet,!0,b),_);if(T<1||T>w)continue;let x=_.kind==="planet"?_.giant?4:3:_.kind==="station"?2:1.5;a&&_.owner!==Oe&&n.time>900&&(x*=_.home?1.6:1.25),_.perk&&(x*=1.5),(n.happenings||[]).some(E=>E.at===_.id)&&(x*=2);const M=x/(T+S/(25*hc(n)));(!v||M>v.score)&&(v={s:g,t:_,need:T,score:M})}}if(v&&a&&v.t.owner!==Oe&&!t.bodies.has(v.t.id)&&!u(v.t))if(p(v.t))v=null;else{const g=s.find(w=>!Fd(n,w,v.t));if(g&&vu(n,g,v.t))return!0}if(v)return Ka(n,v.s,v.t,v.need),!0;if(e.plan){const g=n.bodies[e.plan.target],w=n.bodies[e.plan.stage];if(g.owner===e.owner||w.owner!==e.owner||n.time>e.plan.until)e.plan=null;else{if(Ir(n,w)-o(w)>=e.plan.need)return Ka(n,w,g,Ir(n,w)-o(w)),e.plan=null,!0;{const _=s.filter(S=>S!==w&&l(S)>=1&&!n.fleets.some(b=>b.from===S.id&&b.to===w.id)).sort((S,b)=>r(S,w)-r(b,w))[0];return _?(Ka(n,_,w,l(_)),!0):!1}}}const y=s.reduce((g,w)=>g+Math.max(0,l(w)),0);let m=null,h=1/0;for(const g of n.bodies){if(g.owner===e.owner||g.visitor||c&&g.owner!==Oe)continue;const w=f(Gf(n,e.owner,g,0,!0,Vf(n,e,t,g)),g)+1;w<=y&&w<h&&(m=g,h=w)}if(m&&s.length>1){const g=s.slice().sort((w,_)=>r(w,m)-r(_,m))[0];e.plan={target:m.id,stage:g.id,need:h,until:n.time+600*hc(n)}}return!1}function Gg(n,e,t,i,r,s,a,c){for(const o of t){const l=n.fleets.filter(m=>m.to===o.id&&m.owner!==e.owner&&r(m));if(!l.length)continue;const u=Math.min(...l.map(m=>m.t0+m.T-n.time)),p=l.reduce((m,h)=>m+s(h),0)*1.2,d=a(o)+o.guns+io(n,o);if(d>=p)continue;const f=Math.ceil(p-d)+1,v=t.filter(m=>m!==o&&Ir(n,m)>=3&&!n.fleets.some(h=>h.to===m.id&&h.owner!==e.owner&&r(h))).map(m=>({s:m,T:oa(n,m,o,n.time,1,!0).T})).filter(m=>m.T<u-5).sort((m,h)=>m.T-h.T),y=v.find(m=>Ir(n,m.s)-1>=f)||(e.d.smart?null:v[0]);if(y&&c())return Ka(n,y.s,o,Math.min(Ir(n,y.s)-1,f)),!0;if(!y&&o.queue>0&&d*2<p&&c()){for(;o.queue>0;)H0(n,o);return!0}}return!1}function Vg(n,e,t,i,r){const s=e.d.smart,a=x=>i(x,!1)>0||x.sieges.length,c=(x,M)=>!_c(n,x,M),o=t.find(x=>a(x)&&c(x,"defence")&&x.structures.filter(M=>M.type==="defence").length<2);if(o)return Ai(n,o,"defence");const l=t.find(x=>(x.kind==="asteroid"||x.kind==="moon")&&!x.structures.some(M=>M.type==="mine")&&(c(x,"mine")||_c(n,x,"mine")==="not enough credits"));if(l){if(c(l,"mine"))return Ai(n,l,"mine");if(!a(l)&&r())return"save"}if(n.crew&&xc(n,e.owner)>=vc(n,e.owner)-2){const x=t.flatMap(E=>E.structures.filter(P=>P.type==="habitat"&&!ko(n,E,P)).map(P=>[E,P]))[0];if(x)return Co(n,x[0],x[1]);const M=t.filter(E=>c(E,"habitat")&&!a(E)).sort((E,P)=>(P.kind==="planet")-(E.kind==="planet"))[0];if(M)return Ai(n,M,"habitat")}const u=t.filter(x=>!yc(n,x)&&x.queue<1)[0];if(u&&jo(n,e.owner)<Ko(n,e.owner)*.4)return gu(n,u);const p=t.find(x=>x.perk&&mn[x.perk].fits&&mn[x.perk].fits!=="mine"&&!x.structures.some(M=>M.type===mn[x.perk].fits)&&c(x,mn[x.perk].fits));if(p&&(s||r()))return Ai(n,p,mn[p.perk].fits);for(const x of["exchange","skimmer"]){const M=t.find(E=>c(E,x)&&!a(E)&&!E.structures.some(P=>P.type===x));if(M&&(s||r()))return Ai(n,M,x)}const d=n.credits[e.owner],f=t.flatMap(x=>x.structures.filter(M=>M.type==="mine"&&ko(n,x,M)==="not enough credits").map(M=>[x,M]))[0];if(f&&!a(f[0])&&t.reduce((x,M)=>x+M.ships,0)>=6&&r()&&d<Dr(f[1]))return"save";for(const x of t)for(const M of x.structures)if(!ko(n,x,M)&&((M.type==="mine"||M.type==="skimmer"||M.type==="exchange")&&d>=Dr(M)&&r()||M.type==="lab"&&n.tech[e.owner].project&&d>Dr(M)+300&&r()||M.type==="defence"&&a(x)&&r()))return Co(n,x,M);if(s&&!t.find(M=>M.project)&&d>2500&&t.length>=4)for(const M of["sundiver","ringyard","citadel","massdriver","array","college"]){const E=N=>N.structures.filter(L=>L.type==="shipyard").length,P=N=>M==="ringyard"?E(N)*10+(c(N,"shipyard")?1:0):M==="massdriver"?E(N)*4+N.ships+(N.home?3:0):N.home?5:N.kind==="planet"?1:0,z=t.filter(N=>!a(N)&&!no(n,N,M)).sort((N,L)=>P(L)-P(N))[0];if(!(M==="ringyard"&&z&&!E(z)&&!c(z,"shipyard"))&&z)return A0(n,z,M)}if(s&&d>1100&&!(n.spies||[]).some(x=>x.owner===e.owner)){const x=n.bodies.filter(M=>!Cd(n,e.owner,M)).sort((M,E)=>(E.project?2:E.home?1:0)-(M.project?2:M.home?1:0))[0];if(x&&r())return!!L0(n,e.owner,x)}const v=t.find(x=>x.home);if(e.d.skill>=.7&&v&&t.length>=(s?6:5)&&d>1e3&&c(v,"bureau")&&!v.structures.some(x=>x.type==="bureau"))return Ai(n,v,"bureau");const y=t.find(x=>(x.wonder==="ringyard"||x.project?.key==="ringyard")&&!x.structures.some(M=>M.type==="shipyard")&&c(x,"shipyard"));if(y)return Ai(n,y,"shipyard");if(t.filter(x=>x.structures.some(M=>M.type==="shipyard")).length<1+Math.floor(t.length/3)&&r()){const x=t.filter(M=>M.kind==="planet"&&c(M,"shipyard")).sort((M,E)=>E.size-M.size)[0];if(x)return Ai(n,x,"shipyard")}const h=s?["industry","sensors","intel","drives","weapons","armour","industry","drives","weapons","armour","sensors","intel","drives","sensors","intel"]:["sensors","drives","intel","industry","weapons","armour","drives","sensors","weapons","armour","industry","intel","drives","sensors","intel"],g=["torch","hardened","targeting","kinetic","pdnet","ansible"],w=[...h,...g].find(x=>Nr(n,e.owner,x)&&qo(n,e.owner,x)!=="locked");if(w&&!qo(n,e.owner,w)&&d>Nr(n,e.owner,w).cost+we.ship.cost*2&&t.length>=3)return P0(n,e.owner,w);const _=t.reduce((x,M)=>x+M.structures.filter(E=>E.type==="lab").length,0);if(_<2&&d>700+_*500&&t.length>2+_*2&&r()){const x=t.find(P=>P.perk==="archive"&&c(P,"lab"))||t.find(P=>c(P,"lab")&&P.kind!=="asteroid");if(x)return Ai(n,x,"lab");const M=t.find(P=>P.kind!=="asteroid"&&!a(P)&&P.structures.filter(R=>R.type==="defence").length>1),E=M&&M.structures.find(P=>P.type==="defence"&&P.level===1&&!Id(n,M,P));if(E&&d>900)return V0(n,M,E)}const S=jo(n,e.owner)>Ko(n,e.owner)*.4,b=t.filter(x=>!yc(n,x)&&x.queue<3).sort((x,M)=>x.queue-M.queue)[0];if(b&&!S&&(s||e.rand()<.8))return gu(n,b);const T=t.find(x=>x.home)||t[0];return T&&n.credits[e.owner]>600&&c(T,"defence")&&T.structures.filter(x=>x.type==="defence").length<2?Ai(n,T,"defence"):!1}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="186",Hg=0,Hf=1,$g=2,ja=1,Wg=2,Ro=3,is=0,ni=1,ai=2,dr=0,Fo=1,zn=2,$f=3,Wf=4,Xg=5,zs=100,qg=101,Yg=102,Kg=103,jg=104,Zg=200,Jg=201,Qg=202,ev=203,Z0=204,J0=205,tv=206,nv=207,iv=208,rv=209,sv=210,ov=211,av=212,cv=213,lv=214,_u=0,yu=1,Mu=2,Zo=3,bu=4,Su=5,wu=6,Tu=7,Q0=0,uv=1,dv=2,Zi=0,ep=1,tp=2,np=3,ip=4,rp=5,sp=6,op=7,ap=300,rs=301,js=302,_l=303,yl=304,Xc=306,Jo=1e3,qi=1001,Eu=1002,Bn=1003,fv=1004,da=1005,gn=1006,Ml=1007,Rr=1008,ei=1009,cp=1010,lp=1011,Qo=1012,Bd=1013,zi=1014,Li=1015,bi=1016,Gd=1017,Vd=1018,ea=1020,up=35902,dp=35899,fp=1021,hp=1022,_i=1023,mr=1026,Qr=1027,Hd=1028,$d=1029,ss=1030,Wd=1031,Xd=1033,Za=33776,Ja=33777,Qa=33778,ec=33779,Au=35840,Cu=35841,Ru=35842,Pu=35843,Lu=36196,Du=37492,Iu=37496,Uu=37488,Nu=37489,bc=37490,ku=37491,Fu=37808,Ou=37809,zu=37810,Bu=37811,Gu=37812,Vu=37813,Hu=37814,$u=37815,Wu=37816,Xu=37817,qu=37818,Yu=37819,Ku=37820,ju=37821,Zu=36492,Ju=36494,Qu=36495,ed=36283,td=36284,Sc=36285,nd=36286,hv=3200,id=0,pv=1,Ar="",Wn="srgb",wc="srgb-linear",Tc="linear",Zt="srgb",bl=7680,mv=519,gv=512,vv=513,xv=514,qd=515,_v=516,yv=517,Yd=518,Mv=519,pp=35044,Er=35048,Xf="300 es",Yi=2e3,ta=2001;function bv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sv(){const n=Ec("canvas");return n.style.display="block",n}const qf={};function Ac(...n){const e="THREE."+n.shift();console.log(e,...n)}function mp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=mp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Bt(...n){n=mp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $s(...n){const e=n.join(" ");e in qf||(qf[e]=!0,st(...n))}function wv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Tv={[_u]:yu,[Mu]:wu,[bu]:Tu,[Zo]:Su,[yu]:_u,[wu]:Mu,[Tu]:bu,[Su]:Zo};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yf=1234567;const Oo=Math.PI/180,na=180/Math.PI;function fr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function Kd(n,e){return(n%e+e)%e}function Ev(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Av(n,e,t){return n!==e?(t-n)/(e-n):0}function zo(n,e,t){return(1-t)*n+t*e}function Cv(n,e,t,i){return zo(n,e,1-Math.exp(-t*i))}function Rv(n,e=1){return e-Math.abs(Kd(n,e*2)-e)}function Pv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Iv(n,e){return n+Math.random()*(e-n)}function Uv(n){return n*(.5-Math.random())}function Nv(n){n!==void 0&&(Yf=n);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kv(n){return n*Oo}function Fv(n){return n*na}function Ov(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function zv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gv(n,e,t,i,r){const s=Math.cos,a=Math.sin,c=s(t/2),o=a(t/2),l=s((e+i)/2),u=a((e+i)/2),p=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(c*u,o*p,o*d,c*l);break;case"YZY":n.set(o*d,c*u,o*p,c*l);break;case"ZXZ":n.set(o*p,o*d,c*u,c*l);break;case"XZX":n.set(c*u,o*v,o*f,c*l);break;case"YXY":n.set(o*f,c*u,o*v,c*l);break;case"ZYZ":n.set(o*v,o*f,c*u,c*l);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const kt={DEG2RAD:Oo,RAD2DEG:na,generateUUID:fr,clamp:Tt,euclideanModulo:Kd,mapLinear:Ev,inverseLerp:Av,lerp:zo,damp:Cv,pingpong:Rv,smoothstep:Pv,smootherstep:Lv,randInt:Dv,randFloat:Iv,randFloatSpread:Uv,seededRandom:Nv,degToRad:kv,radToDeg:Fv,isPowerOfTwo:Ov,ceilPowerOfTwo:zv,floorPowerOfTwo:Bv,setQuaternionFromProperEuler:Gv,normalize:Jt,denormalize:Ri},Mf=class Mf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mf.prototype.isVector2=!0;let Qe=Mf;class qn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,c){let o=i[r+0],l=i[r+1],u=i[r+2],p=i[r+3],d=s[a+0],f=s[a+1],v=s[a+2],y=s[a+3];if(p!==y||o!==d||l!==f||u!==v){let m=o*d+l*f+u*v+p*y;m<0&&(d=-d,f=-f,v=-v,y=-y,m=-m);let h=1-c;if(m<.9995){const g=Math.acos(m),w=Math.sin(g);h=Math.sin(h*g)/w,c=Math.sin(c*g)/w,o=o*h+d*c,l=l*h+f*c,u=u*h+v*c,p=p*h+y*c}else{o=o*h+d*c,l=l*h+f*c,u=u*h+v*c,p=p*h+y*c;const g=1/Math.sqrt(o*o+l*l+u*u+p*p);o*=g,l*=g,u*=g,p*=g}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const c=i[r],o=i[r+1],l=i[r+2],u=i[r+3],p=s[a],d=s[a+1],f=s[a+2],v=s[a+3];return e[t]=c*v+u*p+o*f-l*d,e[t+1]=o*v+u*d+l*p-c*f,e[t+2]=l*v+u*f+c*d-o*p,e[t+3]=u*v-c*p-o*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,o=Math.sin,l=c(i/2),u=c(r/2),p=c(s/2),d=o(i/2),f=o(r/2),v=o(s/2);switch(a){case"XYZ":this._x=d*u*p+l*f*v,this._y=l*f*p-d*u*v,this._z=l*u*v+d*f*p,this._w=l*u*p-d*f*v;break;case"YXZ":this._x=d*u*p+l*f*v,this._y=l*f*p-d*u*v,this._z=l*u*v-d*f*p,this._w=l*u*p+d*f*v;break;case"ZXY":this._x=d*u*p-l*f*v,this._y=l*f*p+d*u*v,this._z=l*u*v+d*f*p,this._w=l*u*p-d*f*v;break;case"ZYX":this._x=d*u*p-l*f*v,this._y=l*f*p+d*u*v,this._z=l*u*v-d*f*p,this._w=l*u*p+d*f*v;break;case"YZX":this._x=d*u*p+l*f*v,this._y=l*f*p+d*u*v,this._z=l*u*v-d*f*p,this._w=l*u*p-d*f*v;break;case"XZY":this._x=d*u*p-l*f*v,this._y=l*f*p-d*u*v,this._z=l*u*v+d*f*p,this._w=l*u*p+d*f*v;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],c=t[5],o=t[9],l=t[2],u=t[6],p=t[10],d=i+c+p;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-o)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>c&&i>p){const f=2*Math.sqrt(1+i-c-p);this._w=(u-o)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(c>p){const f=2*Math.sqrt(1+c-i-p);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(o+u)/f}else{const f=2*Math.sqrt(1+p-i-c);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(o+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,c=t._x,o=t._y,l=t._z,u=t._w;return this._x=i*u+a*c+r*l-s*o,this._y=r*u+a*o+s*c-i*l,this._z=s*u+a*l+i*o-r*c,this._w=a*u-i*c-r*o-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,c=this.dot(e);c<0&&(i=-i,r=-r,s=-s,a=-a,c=-c);let o=1-t;if(c<.9995){const l=Math.acos(c),u=Math.sin(l);o=Math.sin(o*l)/u,t=Math.sin(t*l)/u,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+s*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+s*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bf=class bf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,c=e.z,o=e.w,l=2*(a*r-c*i),u=2*(c*t-s*r),p=2*(s*i-a*t);return this.x=t+o*l+a*p-c*u,this.y=i+o*u+c*l-s*p,this.z=r+o*p+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,c=t.y,o=t.z;return this.x=r*o-s*c,this.y=s*a-i*o,this.z=i*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bf.prototype.isVector3=!0;let D=bf;const Sl=new D,Kf=new qn,Sf=class Sf{constructor(e,t,i,r,s,a,c,o,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,o,l)}set(e,t,i,r,s,a,c,o,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=c,u[3]=t,u[4]=s,u[5]=o,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[3],o=i[6],l=i[1],u=i[4],p=i[7],d=i[2],f=i[5],v=i[8],y=r[0],m=r[3],h=r[6],g=r[1],w=r[4],_=r[7],S=r[2],b=r[5],T=r[8];return s[0]=a*y+c*g+o*S,s[3]=a*m+c*w+o*b,s[6]=a*h+c*_+o*T,s[1]=l*y+u*g+p*S,s[4]=l*m+u*w+p*b,s[7]=l*h+u*_+p*T,s[2]=d*y+f*g+v*S,s[5]=d*m+f*w+v*b,s[8]=d*h+f*_+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8];return t*a*u-t*c*l-i*s*u+i*c*o+r*s*l-r*a*o}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],p=u*a-c*l,d=c*o-u*s,f=l*s-a*o,v=t*p+i*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(r*l-u*i)*y,e[2]=(c*i-r*a)*y,e[3]=d*y,e[4]=(u*t-r*o)*y,e[5]=(r*s-c*t)*y,e[6]=f*y,e[7]=(i*o-l*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,c){const o=Math.cos(s),l=Math.sin(s);return this.set(i*o,i*l,-i*(o*a+l*c)+a+e,-r*l,r*o,-r*(-l*a+o*c)+c+t,0,0,1),this}scale(e,t){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(e,t)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sf.prototype.isMatrix3=!0;let ut=Sf;const wl=new ut,jf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const n={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Zt&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ar?Tc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wc]:{primaries:e,whitePoint:i,transfer:Tc,toXYZ:jf,fromXYZ:Zf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:Zt,toXYZ:jf,fromXYZ:Zf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),n}const It=Vv();function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ys;class Hv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ys===void 0&&(ys=Ec("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ec("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $v=0;class jd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(Tl(r[a].image)):s.push(Tl(r[a]))}else s=Tl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Wv=0;const El=new D;class Yn extends as{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,i=qi,r=qi,s=gn,a=Rr,c=_i,o=ei,l=Yn.DEFAULT_ANISOTROPY,u=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=fr(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=o,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jo:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jo:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=ap;Yn.DEFAULT_ANISOTROPY=1;const wf=class wf{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const o=e.elements,l=o[0],u=o[4],p=o[8],d=o[1],f=o[5],v=o[9],y=o[2],m=o[6],h=o[10];if(Math.abs(u-d)<.01&&Math.abs(p-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+y)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,_=(f+1)/2,S=(h+1)/2,b=(u+d)/4,T=(p+y)/4,x=(v+m)/4;return w>_&&w>S?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=b/i,s=T/i):_>S?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=b/r,s=x/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=T/s,r=x/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(p-y)*(p-y)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(p-y)/g,this.z=(d-u)/g,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wf.prototype.isVector4=!0;let Qt=wf;class Xv extends as{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Yn(r),a=i.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gp extends Yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qv extends Yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gc=class Gc{constructor(e,t,i,r,s,a,c,o,l,u,p,d,f,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,o,l,u,p,d,f,v,y,m)}set(e,t,i,r,s,a,c,o,l,u,p,d,f,v,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=c,h[13]=o,h[2]=l,h[6]=u,h[10]=p,h[14]=d,h[3]=f,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),c=Math.sin(i),o=Math.cos(r),l=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*p,v=c*u,y=c*p;t[0]=o*u,t[4]=-o*p,t[8]=l,t[1]=f+v*l,t[5]=d-y*l,t[9]=-c*o,t[2]=y-d*l,t[6]=v+f*l,t[10]=a*o}else if(e.order==="YXZ"){const d=o*u,f=o*p,v=l*u,y=l*p;t[0]=d+y*c,t[4]=v*c-f,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-c,t[2]=f*c-v,t[6]=y+d*c,t[10]=a*o}else if(e.order==="ZXY"){const d=o*u,f=o*p,v=l*u,y=l*p;t[0]=d-y*c,t[4]=-a*p,t[8]=v+f*c,t[1]=f+v*c,t[5]=a*u,t[9]=y-d*c,t[2]=-a*l,t[6]=c,t[10]=a*o}else if(e.order==="ZYX"){const d=a*u,f=a*p,v=c*u,y=c*p;t[0]=o*u,t[4]=v*l-f,t[8]=d*l+y,t[1]=o*p,t[5]=y*l+d,t[9]=f*l-v,t[2]=-l,t[6]=c*o,t[10]=a*o}else if(e.order==="YZX"){const d=a*o,f=a*l,v=c*o,y=c*l;t[0]=o*u,t[4]=y-d*p,t[8]=v*p+f,t[1]=p,t[5]=a*u,t[9]=-c*u,t[2]=-l*u,t[6]=f*p+v,t[10]=d-y*p}else if(e.order==="XZY"){const d=a*o,f=a*l,v=c*o,y=c*l;t[0]=o*u,t[4]=-p,t[8]=l*u,t[1]=d*p+y,t[5]=a*u,t[9]=f*p-v,t[2]=v*p-f,t[6]=c*u,t[10]=y*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,Kv)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),_r.crossVectors(i,di),_r.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),_r.crossVectors(i,di)),_r.normalize(),fa.crossVectors(di,_r),r[0]=_r.x,r[4]=fa.x,r[8]=di.x,r[1]=_r.y,r[5]=fa.y,r[9]=di.y,r[2]=_r.z,r[6]=fa.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[4],o=i[8],l=i[12],u=i[1],p=i[5],d=i[9],f=i[13],v=i[2],y=i[6],m=i[10],h=i[14],g=i[3],w=i[7],_=i[11],S=i[15],b=r[0],T=r[4],x=r[8],M=r[12],E=r[1],P=r[5],R=r[9],z=r[13],N=r[2],L=r[6],O=r[10],V=r[14],oe=r[3],re=r[7],de=r[11],ge=r[15];return s[0]=a*b+c*E+o*N+l*oe,s[4]=a*T+c*P+o*L+l*re,s[8]=a*x+c*R+o*O+l*de,s[12]=a*M+c*z+o*V+l*ge,s[1]=u*b+p*E+d*N+f*oe,s[5]=u*T+p*P+d*L+f*re,s[9]=u*x+p*R+d*O+f*de,s[13]=u*M+p*z+d*V+f*ge,s[2]=v*b+y*E+m*N+h*oe,s[6]=v*T+y*P+m*L+h*re,s[10]=v*x+y*R+m*O+h*de,s[14]=v*M+y*z+m*V+h*ge,s[3]=g*b+w*E+_*N+S*oe,s[7]=g*T+w*P+_*L+S*re,s[11]=g*x+w*R+_*O+S*de,s[15]=g*M+w*z+_*V+S*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],c=e[5],o=e[9],l=e[13],u=e[2],p=e[6],d=e[10],f=e[14],v=e[3],y=e[7],m=e[11],h=e[15],g=o*f-l*d,w=c*f-l*p,_=c*d-o*p,S=a*f-l*u,b=a*d-o*u,T=a*p-c*u;return t*(y*g-m*w+h*_)-i*(v*g-m*S+h*b)+r*(v*w-y*S+h*T)-s*(v*_-y*b+m*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],c=e[9],o=e[2],l=e[6],u=e[10];return t*(a*u-c*l)-i*(s*u-c*o)+r*(s*l-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],p=e[9],d=e[10],f=e[11],v=e[12],y=e[13],m=e[14],h=e[15],g=t*c-i*a,w=t*o-r*a,_=t*l-s*a,S=i*o-r*c,b=i*l-s*c,T=r*l-s*o,x=u*y-p*v,M=u*m-d*v,E=u*h-f*v,P=p*m-d*y,R=p*h-f*y,z=d*h-f*m,N=g*z-w*R+_*P+S*E-b*M+T*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=(c*z-o*R+l*P)*L,e[1]=(r*R-i*z-s*P)*L,e[2]=(y*T-m*b+h*S)*L,e[3]=(d*b-p*T-f*S)*L,e[4]=(o*E-a*z-l*M)*L,e[5]=(t*z-r*E+s*M)*L,e[6]=(m*_-v*T-h*w)*L,e[7]=(u*T-d*_+f*w)*L,e[8]=(a*R-c*E+l*x)*L,e[9]=(i*E-t*R-s*x)*L,e[10]=(v*b-y*_+h*g)*L,e[11]=(p*_-u*b-f*g)*L,e[12]=(c*M-a*P-o*x)*L,e[13]=(t*P-i*M+r*x)*L,e[14]=(y*w-v*S-m*g)*L,e[15]=(u*S-p*w+d*g)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,c=e.y,o=e.z,l=s*a,u=s*c;return this.set(l*a+i,l*c-r*o,l*o+r*c,0,l*c+r*o,u*c+i,u*o-r*a,0,l*o-r*c,u*o+r*a,s*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,c=t._z,o=t._w,l=s+s,u=a+a,p=c+c,d=s*l,f=s*u,v=s*p,y=a*u,m=a*p,h=c*p,g=o*l,w=o*u,_=o*p,S=i.x,b=i.y,T=i.z;return r[0]=(1-(y+h))*S,r[1]=(f+_)*S,r[2]=(v-w)*S,r[3]=0,r[4]=(f-_)*b,r[5]=(1-(d+h))*b,r[6]=(m+g)*b,r[7]=0,r[8]=(v+w)*T,r[9]=(m-g)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ms.set(r[0],r[1],r[2]).length();const c=Ms.set(r[4],r[5],r[6]).length(),o=Ms.set(r[8],r[9],r[10]).length();s<0&&(a=-a),wi.copy(this);const l=1/a,u=1/c,p=1/o;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,t.setFromRotationMatrix(wi),i.x=a,i.y=c,i.z=o,this}makePerspective(e,t,i,r,s,a,c=Yi,o=!1){const l=this.elements,u=2*s/(t-e),p=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let v,y;if(o)v=s/(a-s),y=a*s/(a-s);else if(c===Yi)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(c===ta)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,c=Yi,o=!1){const l=this.elements,u=2/(t-e),p=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let v,y;if(o)v=1/(a-s),y=a/(a-s);else if(c===Yi)v=-2/(a-s),y=-(a+s)/(a-s);else if(c===ta)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Gc.prototype.isMatrix4=!0;let Ut=Gc;const Ms=new D,wi=new Ut,Yv=new D(0,0,0),Kv=new D(1,1,1),_r=new D,fa=new D,di=new D,Jf=new Ut,Qf=new qn;class gr{constructor(e=0,t=0,i=0,r=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],c=r[8],o=r[1],l=r[5],u=r[9],p=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jv=0;const eh=new D,bs=new qn,ir=new Ut,ha=new D,uo=new D,Zv=new D,Jv=new qn,th=new D(1,0,0),nh=new D(0,1,0),ih=new D(0,0,1),rh={type:"added"},Qv={type:"removed"},Ss={type:"childadded",child:null},Al={type:"childremoved",child:null};class Gn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new D,t=new gr,i=new qn,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ut}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(uo,ha,this.up):ir.lookAt(ha,uo,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(ir),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qv),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,o){return c[o.uuid]===void 0&&(c[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const o=c.shapes;if(Array.isArray(o))for(let l=0,u=o.length;l<u;l++){const p=o[l];s(e.shapes,p)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let o=0,l=this.material.length;o<l;o++)c.push(s(e.materials,this.material[o]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const o=this.animations[c];r.animations.push(s(e.animations,o))}}if(t){const c=a(e.geometries),o=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);c.length>0&&(i.geometries=c),o.length>0&&(i.materials=o),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(c){const o=[];for(const l in c){const u=c[l];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gn.DEFAULT_UP=new D(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fn extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const c=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,v=.005;l.inputState.pinching&&d>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return c!==null&&(c.visible=r!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=It.workingColorSpace){if(e=Kd(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Rl(a,s,e+1/3),this.g=Rl(a,s,e),this.b=Rl(a,s,e-1/3)}return It.colorSpaceToWorking(this,r),this}setStyle(e,t=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=xp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return It.workingToColorSpace($n.copy(this),e),Math.round(Tt($n.r*255,0,255))*65536+Math.round(Tt($n.g*255,0,255))*256+Math.round(Tt($n.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace($n.copy(this),t);const i=$n.r,r=$n.g,s=$n.b,a=Math.max(i,r,s),c=Math.min(i,r,s);let o,l;const u=(c+a)/2;if(c===a)o=0,l=0;else{const p=a-c;switch(l=u<=.5?p/(a+c):p/(2-a-c),a){case i:o=(r-s)/p+(r<s?6:0);break;case r:o=(s-i)/p+2;break;case s:o=(i-r)/p+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=Wn){It.workingToColorSpace($n.copy(this),e);const t=$n.r,i=$n.g,r=$n.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(pa);const i=zo(yr.h,pa.h,t),r=zo(yr.s,pa.s,t),s=zo(yr.l,pa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new ot;ot.NAMES=xp;class qc extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ti=new D,rr=new D,Pl=new D,sr=new D,ws=new D,Ts=new D,sh=new D,Ll=new D,Dl=new D,Il=new D,Ul=new Qt,Nl=new Qt,kl=new Qt;class vi{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ti.subVectors(e,t),r.cross(Ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ti.subVectors(r,t),rr.subVectors(i,t),Pl.subVectors(e,t);const a=Ti.dot(Ti),c=Ti.dot(rr),o=Ti.dot(Pl),l=rr.dot(rr),u=rr.dot(Pl),p=a*l-c*c;if(p===0)return s.set(0,0,0),null;const d=1/p,f=(l*o-c*u)*d,v=(a*u-c*o)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,i,r,s,a,c,o){return this.getBarycoord(e,t,i,r,sr)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,sr.x),o.addScaledVector(a,sr.y),o.addScaledVector(c,sr.z),o)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ul.setScalar(0),Nl.setScalar(0),kl.setScalar(0),Ul.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,i),kl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ul,s.x),a.addScaledVector(Nl,s.y),a.addScaledVector(kl,s.z),a}static isFrontFacing(e,t,i,r){return Ti.subVectors(i,t),rr.subVectors(e,t),Ti.cross(rr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ti.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,c;ws.subVectors(r,i),Ts.subVectors(s,i),Ll.subVectors(e,i);const o=ws.dot(Ll),l=Ts.dot(Ll);if(o<=0&&l<=0)return t.copy(i);Dl.subVectors(e,r);const u=ws.dot(Dl),p=Ts.dot(Dl);if(u>=0&&p<=u)return t.copy(r);const d=o*p-u*l;if(d<=0&&o>=0&&u<=0)return a=o/(o-u),t.copy(i).addScaledVector(ws,a);Il.subVectors(e,s);const f=ws.dot(Il),v=Ts.dot(Il);if(v>=0&&f<=v)return t.copy(s);const y=f*l-o*v;if(y<=0&&l>=0&&v<=0)return c=l/(l-v),t.copy(i).addScaledVector(Ts,c);const m=u*v-f*p;if(m<=0&&p-u>=0&&f-v>=0)return sh.subVectors(s,r),c=(p-u)/(p-u+(f-v)),t.copy(r).addScaledVector(sh,c);const h=1/(m+y+d);return a=y*h,c=d*h,t.copy(i).addScaledVector(ws,a).addScaledVector(Ts,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cs{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),ga.subVectors(this.max,fo),Es.subVectors(e.a,fo),As.subVectors(e.b,fo),Cs.subVectors(e.c,fo),Mr.subVectors(As,Es),br.subVectors(Cs,As),Xr.subVectors(Es,Cs);let t=[0,-Mr.z,Mr.y,0,-br.z,br.y,0,-Xr.z,Xr.y,Mr.z,0,-Mr.x,br.z,0,-br.x,Xr.z,0,-Xr.x,-Mr.y,Mr.x,0,-br.y,br.x,0,-Xr.y,Xr.x,0];return!Fl(t,Es,As,Cs,ga)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,Es,As,Cs,ga))?!1:(va.crossVectors(Mr,br),t=[va.x,va.y,va.z],Fl(t,Es,As,Cs,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new D,new D,new D,new D,new D,new D,new D,new D],Ei=new D,ma=new cs,Es=new D,As=new D,Cs=new D,Mr=new D,br=new D,Xr=new D,fo=new D,ga=new D,va=new D,qr=new D;function Fl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){qr.fromArray(n,s);const c=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),o=e.dot(qr),l=t.dot(qr),u=i.dot(qr);if(Math.max(-Math.max(o,l,u),Math.min(o,l,u))>c)return!1}return!0}const Mn=new D,xa=new Qe;let t1=0;class hn extends as{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pp,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class _p extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yp extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const n1=new cs,ho=new D,Ol=new D;class ls{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):n1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(Ol)),this.expandByPoint(ho.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let i1=0;const gi=new Ut,zl=new Gn,Rs=new D,fi=new cs,po=new cs,Ln=new D;class Ht extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bv(e)?yp:_p)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,i){return gi.makeTranslation(e,t,i),this.applyMatrix4(gi),this}scale(e,t,i){return gi.makeScale(e,t,i),this.applyMatrix4(gi),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];po.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(fi.min,po.min),fi.expandByPoint(Ln),Ln.addVectors(fi.max,po.max),fi.expandByPoint(Ln)):(fi.expandByPoint(po.min),fi.expandByPoint(po.max))}fi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ln));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],o=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)Ln.fromBufferAttribute(c,l),o&&(Rs.fromBufferAttribute(e,l),Ln.add(Rs)),r=Math.max(r,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const c=[],o=[];for(let x=0;x<i.count;x++)c[x]=new D,o[x]=new D;const l=new D,u=new D,p=new D,d=new Qe,f=new Qe,v=new Qe,y=new D,m=new D;function h(x,M,E){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),p.fromBufferAttribute(i,E),d.fromBufferAttribute(s,x),f.fromBufferAttribute(s,M),v.fromBufferAttribute(s,E),u.sub(l),p.sub(l),f.sub(d),v.sub(d);const P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(P),c[x].add(y),c[M].add(y),c[E].add(y),o[x].add(m),o[M].add(m),o[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,M=g.length;x<M;++x){const E=g[x],P=E.start,R=E.count;for(let z=P,N=P+R;z<N;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new D,_=new D,S=new D,b=new D;function T(x){S.fromBufferAttribute(r,x),b.copy(S);const M=c[x];w.copy(M),w.sub(S.multiplyScalar(S.dot(M))).normalize(),_.crossVectors(b,M);const P=_.dot(o[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,M=g.length;x<M;++x){const E=g[x],P=E.start,R=E.count;for(let z=P,N=P+R;z<N;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,c=new D,o=new D,l=new D,u=new D,p=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),c.fromBufferAttribute(i,v),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),c.add(u),o.add(u),l.add(u),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(c,o){const l=c.array,u=c.itemSize,p=c.normalized,d=new l.constructor(o.length*u);let f=0,v=0;for(let y=0,m=o.length;y<m;y++){c.isInterleavedBufferAttribute?f=o[y]*c.data.stride+c.offset:f=o[y]*u;for(let h=0;h<u;h++)d[v++]=l[f++]}return new hn(d,u,p)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,r=this.attributes;for(const c in r){const o=r[c],l=e(o,i);t.setAttribute(c,l)}const s=this.morphAttributes;for(const c in s){const o=[],l=s[c];for(let u=0,p=l.length;u<p;u++){const d=l[u],f=e(d,i);o.push(f)}t.morphAttributes[c]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,o=a.length;c<o;c++){const l=a[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const l=i[o];e.data.attributes[o]=l.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],u=[];for(let p=0,d=l.length;p<d;p++){const f=l[p];u.push(f.toJSON(e.data))}u.length>0&&(r[o]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],p=s[l];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class r1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pp,this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Zn=new D;class Cc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ac("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ac("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bl=new D,s1=new D,o1=new ut;class Hi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bl.subVectors(i,t).cross(s1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Bl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||o1.getNormalMatrix(e),r=this.coplanarPoint(Bl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let a1=0;class Fr extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Fo,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Z0,this.blendDst=J0,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bl,this.stencilZFail=bl,this.stencilZPass=bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const c in s){const o=s[c];delete o.metadata,a.push(o)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bo extends Fr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ps;const mo=new D,Ls=new D,Ds=new D,Is=new Qe,go=new Qe,Mp=new Ut,_a=new D,vo=new D,ya=new D,oh=new Qe,Gl=new Qe,ah=new Qe;class tc extends Gn{constructor(e=new Bo){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new r1(t,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Cc(i,3,0,!1)),Ps.setAttribute("uv",new Cc(i,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new Qe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Mp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ma(_a.set(-.5,-.5,0),Ds,a,Ls,r,s),Ma(vo.set(.5,-.5,0),Ds,a,Ls,r,s),Ma(ya.set(.5,.5,0),Ds,a,Ls,r,s),oh.set(0,0),Gl.set(1,0),ah.set(1,1);let c=e.ray.intersectTriangle(_a,vo,ya,!1,mo);if(c===null&&(Ma(vo.set(-.5,.5,0),Ds,a,Ls,r,s),Gl.set(0,1),c=e.ray.intersectTriangle(_a,ya,vo,!1,mo),c===null))return;const o=e.ray.origin.distanceTo(mo);o<e.near||o>e.far||t.push({distance:o,point:mo.clone(),uv:vi.getInterpolation(mo,_a,vo,ya,oh,Gl,ah,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ma(n,e,t,i,r,s){Is.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(go.x=s*Is.x-r*Is.y,go.y=r*Is.x+s*Is.y):go.copy(Is),n.copy(e),n.x+=go.x,n.y+=go.y,n.applyMatrix4(Mp)}const ar=new D,Vl=new D,ba=new D,Sa=new D;class Yc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Sa.copy(this.origin).sub(Vl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ba),c=Sa.dot(this.direction),o=-Sa.dot(ba),l=Sa.lengthSq(),u=Math.abs(1-a*a);let p,d,f,v;if(u>0)if(p=a*o-c,d=a*c-o,v=s*u,p>=0)if(d>=-v)if(d<=v){const y=1/u;p*=y,d*=y,f=p*(p+a*d+2*c)+d*(a*p+d+2*o)+l}else d=s,p=Math.max(0,-(a*d+c)),f=-p*p+d*(d+2*o)+l;else d=-s,p=Math.max(0,-(a*d+c)),f=-p*p+d*(d+2*o)+l;else d<=-v?(p=Math.max(0,-(-a*s+c)),d=p>0?-s:Math.min(Math.max(-s,-o),s),f=-p*p+d*(d+2*o)+l):d<=v?(p=0,d=Math.min(Math.max(-s,-o),s),f=d*(d+2*o)+l):(p=Math.max(0,-(a*s+c)),d=p>0?s:Math.min(Math.max(-s,-o),s),f=-p*p+d*(d+2*o)+l);else d=a>0?-s:s,p=Math.max(0,-(a*d+c)),f=-p*p+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Vl).addScaledVector(ba,d),f}intersectSphere(e,t){if(e.radius<0)return null;ar.subVectors(e.center,this.origin);const i=ar.dot(this.direction),r=ar.dot(ar)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=i-a,o=i+a;return o<0?null:c<0?this.at(o,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,c,o;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(c=(e.min.z-d.z)*p,o=(e.max.z-d.z)*p):(c=(e.max.z-d.z)*p,o=(e.min.z-d.z)*p),i>o||c>r)||((c>i||i!==i)&&(i=c),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,c=this.direction,o=c.x,l=c.y,u=c.z,p=e.x-a.x,d=e.y-a.y,f=e.z-a.z,v=t.x-a.x,y=t.y-a.y,m=t.z-a.z,h=i.x-a.x,g=i.y-a.y,w=i.z-a.z,_=Math.abs(o),S=Math.abs(l),b=Math.abs(u);let T,x,M,E,P,R,z,N,L,O,V,oe;if(_>=S&&_>=b?(M=o,R=p,L=v,oe=h,o>=0?(T=l,x=u,E=d,P=f,z=y,N=m,O=g,V=w):(T=u,x=l,E=f,P=d,z=m,N=y,O=w,V=g)):S>=b?(M=l,R=d,L=y,oe=g,l>=0?(T=u,x=o,E=f,P=p,z=m,N=v,O=w,V=h):(T=o,x=u,E=p,P=f,z=v,N=m,O=h,V=w)):(M=u,R=f,L=m,oe=w,u>=0?(T=o,x=l,E=p,P=d,z=v,N=y,O=h,V=g):(T=l,x=o,E=d,P=p,z=y,N=v,O=g,V=h)),M===0)return null;const re=T/M,de=x/M,ge=1/M,Be=E-re*R,_e=P-de*R,et=z-re*L,Xe=N-de*L,Ve=O-re*oe,ae=V-de*oe,me=Ve*Xe-ae*et,De=Be*ae-_e*Ve,it=et*_e-Xe*Be;if(r){if(me<0||De<0||it<0)return null}else if((me<0||De<0||it<0)&&(me>0||De>0||it>0))return null;const fe=me+De+it;if(fe===0)return null;const Ge=ge*(me*R+De*L+it*oe);return(fe>0?Ge<0:Ge>0)?null:this.at(Ge/fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zd extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ch=new Ut,Yr=new Yc,wa=new ls,lh=new D,Ta=new D,Ea=new D,Aa=new D,Hl=new D,Ca=new D,uh=new D,Ra=new D;class Ot extends Gn{constructor(e=new Ht,t=new Zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Ca.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const u=c[o],p=s[o];u!==0&&(Hl.fromBufferAttribute(p,e),a?Ca.addScaledVector(Hl,u):Ca.addScaledVector(Hl.sub(t),u))}t.add(Ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(wa.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(wa,lh)===null||Yr.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(ch.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(ch),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,c=s.index,o=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,f=s.drawRange;if(c!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const m=d[v],h=a[m.materialIndex],g=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=g,S=w;_<S;_+=3){const b=c.getX(_),T=c.getX(_+1),x=c.getX(_+2);r=Pa(this,h,e,i,l,u,p,b,T,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=v,h=y;m<h;m+=3){const g=c.getX(m),w=c.getX(m+1),_=c.getX(m+2);r=Pa(this,a,e,i,l,u,p,g,w,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const m=d[v],h=a[m.materialIndex],g=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=g,S=w;_<S;_+=3){const b=_,T=_+1,x=_+2;r=Pa(this,h,e,i,l,u,p,b,T,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=v,h=y;m<h;m+=3){const g=m,w=m+1,_=m+2;r=Pa(this,a,e,i,l,u,p,g,w,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function c1(n,e,t,i,r,s,a,c){let o;if(e.side===ni?o=i.intersectTriangle(a,s,r,!0,c):o=i.intersectTriangle(r,s,a,e.side===is,c),o===null)return null;Ra.copy(c),Ra.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ra);return l<t.near||l>t.far?null:{distance:l,point:Ra.clone(),object:n}}function Pa(n,e,t,i,r,s,a,c,o,l){n.getVertexPosition(c,Ta),n.getVertexPosition(o,Ea),n.getVertexPosition(l,Aa);const u=c1(n,e,t,i,Ta,Ea,Aa,uh);if(u){const p=new D;vi.getBarycoord(uh,Ta,Ea,Aa,p),r&&(u.uv=vi.getInterpolatedAttribute(r,c,o,l,p,new Qe)),s&&(u.uv1=vi.getInterpolatedAttribute(s,c,o,l,p,new Qe)),a&&(u.normal=vi.getInterpolatedAttribute(a,c,o,l,p,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:c,b:o,c:l,normal:new D,materialIndex:0};vi.getNormal(Ta,Ea,Aa,d.normal),u.face=d,u.barycoord=p}return u}class Jd extends Yn{constructor(e=null,t=1,i=1,r,s,a,c,o,l=Bn,u=Bn,p,d){super(null,a,c,o,l,u,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs extends hn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new Ut,dh=new Ut,La=[],fh=new cs,l1=new Ut,xo=new Ot,_o=new ls;class Rc extends Ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,l1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),fh.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),_o.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let c=0;c<i.length;c++)i[c]=r[a+c]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(i),e.ray.intersectsSphere(_o)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Us),dh.multiplyMatrices(i,Us),xo.matrixWorld=dh,xo.raycast(e,La);for(let a=0,c=La.length;a<c;a++){const o=La[a];o.instanceId=s,o.object=this,t.push(o)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jd(new Float32Array(r*this.count),r,this.count,Hd,Li));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const c=this.geometry.morphTargetsRelative?1:1-a,o=r*e;return s[o]=c,s.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kr=new ls,u1=new Qe(.5,.5),Da=new D;class Qd{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi,i=!1){const r=this.planes,s=e.elements,a=s[0],c=s[1],o=s[2],l=s[3],u=s[4],p=s[5],d=s[6],f=s[7],v=s[8],y=s[9],m=s[10],h=s[11],g=s[12],w=s[13],_=s[14],S=s[15];if(r[0].setComponents(l-a,f-u,h-v,S-g).normalize(),r[1].setComponents(l+a,f+u,h+v,S+g).normalize(),r[2].setComponents(l+c,f+p,h+y,S+w).normalize(),r[3].setComponents(l-c,f-p,h-y,S-w).normalize(),i)r[4].setComponents(o,d,m,_).normalize(),r[5].setComponents(l-o,f-d,h-m,S-_).normalize();else if(r[4].setComponents(l-o,f-d,h-m,S-_).normalize(),t===Yi)r[5].setComponents(l+o,f+d,h+m,S+_).normalize();else if(t===ta)r[5].setComponents(o,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=u1.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ef extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new D,Lc=new D,hh=new Ut,yo=new Yc,Ia=new ls,$l=new D,ph=new D;class Po extends Gn{constructor(e=new Ht,t=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Pc.fromBufferAttribute(t,r-1),Lc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Pc.distanceTo(Lc);e.setAttribute("lineDistance",new yt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,e.ray.intersectsSphere(Ia)===!1)return;hh.copy(r).invert(),yo.copy(e.ray).applyMatrix4(hh);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let y=f,m=v-1;y<m;y+=l){const h=u.getX(y),g=u.getX(y+1),w=Ua(this,e,yo,o,h,g,y);w&&t.push(w)}if(this.isLineLoop){const y=u.getX(v-1),m=u.getX(f),h=Ua(this,e,yo,o,y,m,v-1);h&&t.push(h)}}else{const f=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let y=f,m=v-1;y<m;y+=l){const h=Ua(this,e,yo,o,y,y+1,y);h&&t.push(h)}if(this.isLineLoop){const y=Ua(this,e,yo,o,v-1,f,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Ua(n,e,t,i,r,s,a){const c=n.geometry.attributes.position;if(Pc.fromBufferAttribute(c,r),Lc.fromBufferAttribute(c,s),t.distanceSqToSegment(Pc,Lc,$l,ph)>i)return;$l.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo($l);if(!(l<e.near||l>e.far))return{distance:l,point:ph.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const mh=new D,gh=new D;class d1 extends Po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)mh.fromBufferAttribute(t,r),gh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+mh.distanceTo(gh);e.setAttribute("lineDistance",new yt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class f1 extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new Ut,rd=new Yc,Na=new ls,ka=new D;class tf extends Gn{constructor(e=new Ht,t=new f1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;vh.copy(r).invert(),rd.copy(e.ray).applyMatrix4(vh);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=i.index,p=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let v=d,y=f;v<y;v++){const m=l.getX(v);ka.fromBufferAttribute(p,m),xh(ka,m,o,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let v=d,y=f;v<y;v++)ka.fromBufferAttribute(p,v),xh(ka,v,o,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function xh(n,e,t,i,r,s,a){const c=rd.distanceSqToPoint(n);if(c<t){const o=new D;rd.closestPointToPoint(n,o),o.applyMatrix4(i);const l=r.ray.origin.distanceTo(o);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(c),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class bp extends Yn{constructor(e=[],t=rs,i,r,s,a,c,o,l,u){super(e,t,i,r,s,a,c,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nf extends Yn{constructor(e,t,i,r,s,a,c,o,l){super(e,t,i,r,s,a,c,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Yn{constructor(e,t,i=zi,r,s,a,c=Bn,o=Bn,l,u=mr,p=1){if(u!==mr&&u!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,r,s,a,c,o,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class h1 extends Js{constructor(e,t=zi,i=rs,r,s,a=Bn,c=Bn,o,l=mr){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,c,o,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sp extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sn extends Ht{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const o=[],l=[],u=[],p=[];let d=0,f=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function v(y,m,h,g,w,_,S,b,T,x,M){const E=_/T,P=S/x,R=_/2,z=S/2,N=b/2,L=T+1,O=x+1;let V=0,oe=0;const re=new D;for(let de=0;de<O;de++){const ge=de*P-z;for(let Be=0;Be<L;Be++){const _e=Be*E-R;re[y]=_e*g,re[m]=ge*w,re[h]=N,l.push(re.x,re.y,re.z),re[y]=0,re[m]=0,re[h]=b>0?1:-1,u.push(re.x,re.y,re.z),p.push(Be/T),p.push(1-de/x),V+=1}}for(let de=0;de<x;de++)for(let ge=0;ge<T;ge++){const Be=d+ge+L*de,_e=d+ge+L*(de+1),et=d+(ge+1)+L*(de+1),Xe=d+(ge+1)+L*de;o.push(Be,_e,Xe),o.push(_e,et,Xe),oe+=6}c.addGroup(f,oe,M),f+=oe,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rf extends Ht{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],c=[],o=[],l=[],u=t/2,p=Math.PI/2*e,d=t,f=2*p+d,v=i*2+s,y=r+1,m=new D,h=new D;for(let g=0;g<=v;g++){let w=0,_=0,S=0,b=0;if(g<=i){const M=g/i,E=M*Math.PI/2;_=-u-e*Math.cos(E),S=e*Math.sin(E),b=-e*Math.cos(E),w=M*p}else if(g<=i+s){const M=(g-i)/s;_=-u+M*t,S=e,b=0,w=p+M*d}else{const M=(g-i-s)/i,E=M*Math.PI/2;_=u+e*Math.sin(E),S=e*Math.cos(E),b=e*Math.sin(E),w=p+d+M*p}const T=Math.max(0,Math.min(1,w/f));let x=0;g===0?x=.5/r:g===v&&(x=-.5/r);for(let M=0;M<=r;M++){const E=M/r,P=E*Math.PI*2,R=Math.sin(P),z=Math.cos(P);h.x=-S*z,h.y=_,h.z=S*R,c.push(h.x,h.y,h.z),m.set(-S*z,b,S*R),m.normalize(),o.push(m.x,m.y,m.z),l.push(E+x,T)}if(g>0){const M=(g-1)*y;for(let E=0;E<r;E++){const P=M+E,R=M+E+1,z=g*y+E,N=g*y+E+1;a.push(P,R,z),a.push(R,N,z)}}}this.setIndex(a),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ft extends Ht{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,c=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:o};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],d=[],f=[];let v=0;const y=[],m=i/2;let h=0;g(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function g(){const _=new D,S=new D;let b=0;const T=(t-e)/i;for(let x=0;x<=s;x++){const M=[],E=x/s,P=E*(t-e)+e;for(let R=0;R<=r;R++){const z=R/r,N=z*o+c,L=Math.sin(N),O=Math.cos(N);S.x=P*L,S.y=-E*i+m,S.z=P*O,p.push(S.x,S.y,S.z),_.set(L,T,O).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-E),M.push(v++)}y.push(M)}for(let x=0;x<r;x++)for(let M=0;M<s;M++){const E=y[M][x],P=y[M+1][x],R=y[M+1][x+1],z=y[M][x+1];(e>0||M!==0)&&(u.push(E,P,z),b+=3),(t>0||M!==s-1)&&(u.push(P,R,z),b+=3)}l.addGroup(h,b,0),h+=b}function w(_){const S=v,b=new Qe,T=new D;let x=0;const M=_===!0?e:t,E=_===!0?1:-1;for(let R=1;R<=r;R++)p.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),v++;const P=v;for(let R=0;R<=r;R++){const N=R/r*o+c,L=Math.cos(N),O=Math.sin(N);T.x=M*O,T.y=m*E,T.z=M*L,p.push(T.x,T.y,T.z),d.push(0,E,0),b.x=L*.5+.5,b.y=O*.5*E+.5,f.push(b.x,b.y),v++}for(let R=0;R<r;R++){const z=S+R,N=P+R;_===!0?u.push(N,N+1,z):u.push(N+1,N,z),x+=3}l.addGroup(h,x,_===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sf extends Ht{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];c(r),l(i),u(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(g){const w=new D,_=new D,S=new D;for(let b=0;b<t.length;b+=3)f(t[b+0],w),f(t[b+1],_),f(t[b+2],S),o(w,_,S,g)}function o(g,w,_,S){const b=S+1,T=[];for(let x=0;x<=b;x++){T[x]=[];const M=g.clone().lerp(_,x/b),E=w.clone().lerp(_,x/b),P=b-x;for(let R=0;R<=P;R++)R===0&&x===b?T[x][R]=M:T[x][R]=M.clone().lerp(E,R/P)}for(let x=0;x<b;x++)for(let M=0;M<2*(b-x)-1;M++){const E=Math.floor(M/2);M%2===0?(d(T[x][E+1]),d(T[x+1][E]),d(T[x][E])):(d(T[x][E+1]),d(T[x+1][E+1]),d(T[x+1][E]))}}function l(g){const w=new D;for(let _=0;_<s.length;_+=3)w.x=s[_+0],w.y=s[_+1],w.z=s[_+2],w.normalize().multiplyScalar(g),s[_+0]=w.x,s[_+1]=w.y,s[_+2]=w.z}function u(){const g=new D;for(let w=0;w<s.length;w+=3){g.x=s[w+0],g.y=s[w+1],g.z=s[w+2];const _=m(g)/2/Math.PI+.5,S=h(g)/Math.PI+.5;a.push(_,1-S)}v(),p()}function p(){for(let g=0;g<a.length;g+=6){const w=a[g+0],_=a[g+2],S=a[g+4],b=Math.max(w,_,S),T=Math.min(w,_,S);b>.9&&T<.1&&(w<.2&&(a[g+0]+=1),_<.2&&(a[g+2]+=1),S<.2&&(a[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function f(g,w){const _=g*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function v(){const g=new D,w=new D,_=new D,S=new D,b=new Qe,T=new Qe,x=new Qe;for(let M=0,E=0;M<s.length;M+=9,E+=6){g.set(s[M+0],s[M+1],s[M+2]),w.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),b.set(a[E+0],a[E+1]),T.set(a[E+2],a[E+3]),x.set(a[E+4],a[E+5]),S.copy(g).add(w).add(_).divideScalar(3);const P=m(S);y(b,E+0,g,P),y(T,E+2,w,P),y(x,E+4,_,P)}}function y(g,w,_,S){S<0&&g.x===1&&(a[w]=g.x-1),_.x===0&&_.z===0&&(a[w]=S/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.vertices,e.indices,e.radius,e.detail)}}class of extends sf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new of(e.radius,e.detail)}}class Dc extends Ht{constructor(e=[new Qe(0,-.5),new Qe(.5,0),new Qe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Tt(r,0,Math.PI*2);const s=[],a=[],c=[],o=[],l=[],u=1/t,p=new D,d=new Qe,f=new D,v=new D,y=new D;let m=0,h=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,h=e[g+1].y-e[g].y,f.x=h*1,f.y=-m,f.z=h*0,y.copy(f),f.normalize(),o.push(f.x,f.y,f.z);break;case e.length-1:o.push(y.x,y.y,y.z);break;default:m=e[g+1].x-e[g].x,h=e[g+1].y-e[g].y,f.x=h*1,f.y=-m,f.z=h*0,v.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),o.push(f.x,f.y,f.z),y.copy(v)}for(let g=0;g<=t;g++){const w=i+g*u*r,_=Math.sin(w),S=Math.cos(w);for(let b=0;b<=e.length-1;b++){p.x=e[b].x*_,p.y=e[b].y,p.z=e[b].x*S,a.push(p.x,p.y,p.z),d.x=g/t,d.y=b/(e.length-1),c.push(d.x,d.y);const T=o[3*b+0]*_,x=o[3*b+1],M=o[3*b+0]*S;l.push(T,x,M)}}for(let g=0;g<t;g++)for(let w=0;w<e.length-1;w++){const _=w+g*e.length,S=_,b=_+e.length,T=_+e.length+1,x=_+1;s.push(S,b,x),s.push(T,x,b)}this.setIndex(s),this.setAttribute("position",new yt(a,3)),this.setAttribute("uv",new yt(c,2)),this.setAttribute("normal",new yt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.points,e.segments,e.phiStart,e.phiLength)}}class ro extends Ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,c=Math.floor(i),o=Math.floor(r),l=c+1,u=o+1,p=e/c,d=t/o,f=[],v=[],y=[],m=[];for(let h=0;h<u;h++){const g=h*d-a;for(let w=0;w<l;w++){const _=w*p-s;v.push(_,-g,0),y.push(0,0,1),m.push(w/c),m.push(1-h/o)}}for(let h=0;h<o;h++)for(let g=0;g<c;g++){const w=g+l*h,_=g+l*(h+1),S=g+1+l*(h+1),b=g+1+l*h;f.push(w,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kc extends Ht{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const c=[],o=[],l=[],u=[];let p=e;const d=(t-e)/r,f=new D,v=new Qe;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const h=s+m/i*a;f.x=p*Math.cos(h),f.y=p*Math.sin(h),o.push(f.x,f.y,f.z),l.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,u.push(v.x,v.y)}p+=d}for(let y=0;y<r;y++){const m=y*(i+1);for(let h=0;h<i;h++){const g=h+m,w=g,_=g+i+1,S=g+i+2,b=g+1;c.push(w,_,b),c.push(_,S,b)}}this.setIndex(c),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bi extends Ht{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+c,Math.PI);let l=0;const u=[],p=new D,d=new D,f=[],v=[],y=[],m=[];for(let h=0;h<=i;h++){const g=[],w=h/i,_=a+w*c,S=e*Math.cos(_),b=Math.sqrt(e*e-S*S);let T=0;h===0&&a===0?T=.5/t:h===i&&o===Math.PI&&(T=-.5/t);for(let x=0;x<=t;x++){const M=x/t,E=r+M*s;p.x=-b*Math.cos(E),p.y=S,p.z=b*Math.sin(E),v.push(p.x,p.y,p.z),d.copy(p).normalize(),y.push(d.x,d.y,d.z),m.push(M+T,1-w),g.push(l++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<t;g++){const w=u[h][g+1],_=u[h][g],S=u[h+1][g],b=u[h+1][g+1];(h!==0||a>0)&&f.push(w,_,b),(h!==i-1||o<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Di extends Ht{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:c},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],u=[],p=[],d=new D,f=new D,v=new D;for(let y=0;y<=i;y++){const m=a+y/i*c;for(let h=0;h<=r;h++){const g=h/r*s;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),v.subVectors(f,d).normalize(),u.push(v.x,v.y,v.z),p.push(h/r),p.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){const h=(r+1)*y+m-1,g=(r+1)*(y-1)+m-1,w=(r+1)*(y-1)+m,_=(r+1)*y+m;o.push(h,g,_),o.push(g,w,_)}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(_h(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(_h(r[0])){const s=[];for(let a=0,c=r.length;a<c;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Jn(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const r in i)e[r]=i[r]}return e}function _h(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function p1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const m1={clone:Qs,merge:Jn};var g1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g1,this.fragmentShader=v1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=p1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(r.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Qt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class x1 extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ic extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _1 extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y1 extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fa extends ef{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Tp extends Gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Wl=new Ut,yh=new D,Mh=new D;class M1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,c=r?r.w/s.y:1,o=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ta||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*c,0,.5*c+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*c,0,.5*c+l,0,0,.5,.5,0,0,0,1),t.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oa=new D,za=new qn,Gi=new D;class jc extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oa,za,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,za,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Oa,za,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,za,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new D,bh=new Qe,Sh=new Qe;class hi extends jc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,bh,Sh),t.subVectors(Sh,bh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/o,t-=a.offsetY*i/l,r*=a.width/o,i*=a.height/l}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class b1 extends M1{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class wh extends Tp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new b1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ep extends jc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,c=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,c-=u*this.view.offsetY,o=c-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class S1 extends Tp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ap extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ns=-90,ks=1;class Cp extends Gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(Ns,ks,e,t);r.layers=this.layers,this.add(r);const s=new hi(Ns,ks,e,t);s.layers=this.layers,this.add(s);const a=new hi(Ns,ks,e,t);a.layers=this.layers,this.add(a);const c=new hi(Ns,ks,e,t);c.layers=this.layers,this.add(c);const o=new hi(Ns,ks,e,t);o.layers=this.layers,this.add(o);const l=new hi(Ns,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,c,o]=t;for(const l of t)this.remove(l);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,o,l,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class w1 extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class T1{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tf=class Tf{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Tf.prototype.isMatrix2=!0;let Th=Tf;function Eh(n,e,t,i){const r=E1(i);switch(t){case fp:return n*e;case Hd:return n*e/r.components*r.byteLength;case $d:return n*e/r.components*r.byteLength;case ss:return n*e*2/r.components*r.byteLength;case Wd:return n*e*2/r.components*r.byteLength;case hp:return n*e*3/r.components*r.byteLength;case _i:return n*e*4/r.components*r.byteLength;case Xd:return n*e*4/r.components*r.byteLength;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cu:case Pu:return Math.max(n,16)*Math.max(e,8)/4;case Au:case Ru:return Math.max(n,8)*Math.max(e,8)/2;case Lu:case Du:case Uu:case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Iu:case bc:case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zu:case Ju:case Qu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ed:case td:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sc:case nd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E1(n){switch(n){case ei:case cp:return{byteLength:1,components:1};case Qo:case lp:case bi:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case zi:case Bd:case Li:return{byteLength:4,components:1};case up:case dp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rp(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function A1(n){const e=new WeakMap;function t(c,o){const l=c.array,u=c.usage,p=l.byteLength,d=n.createBuffer();n.bindBuffer(o,d),n.bufferData(o,l,u),c.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:p}}function i(c,o,l){const u=o.array,p=o.updateRanges;if(n.bindBuffer(l,c),p.length===0)n.bufferSubData(l,0,u);else{p.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<p.length;f++){const v=p[d],y=p[f];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,p[d]=y)}p.length=d+1;for(let f=0,v=p.length;f<v;f++){const y=p[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const o=e.get(c);o&&(n.deleteBuffer(o.buffer),e.delete(c))}function a(c,o){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const l=e.get(c);if(l===void 0)e.set(c,t(c,o));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,o),l.version=c.version}}return{get:r,remove:s,update:a}}var C1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
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
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U1=`#ifdef USE_AOMAP
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
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
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
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G1=`#ifdef USE_IRIDESCENCE
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
#endif`,V1=`#ifdef USE_BUMPMAP
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Z1=`#define PI 3.141592653589793
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
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q1=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
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
#endif`,Ex=`uniform sampler2D dfgLUT;
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
}`,Ax=`
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
}`,k_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,H_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define MATCAP
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,j_=`#define PHONG
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
}`,Z_=`#define PHONG
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
}`,J_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,sy=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:C1,alphahash_pars_fragment:R1,alphamap_fragment:P1,alphamap_pars_fragment:L1,alphatest_fragment:D1,alphatest_pars_fragment:I1,aomap_fragment:U1,aomap_pars_fragment:N1,batching_pars_vertex:k1,batching_vertex:F1,begin_vertex:O1,beginnormal_vertex:z1,bsdfs:B1,iridescence_fragment:G1,bumpmap_pars_fragment:V1,clipping_planes_fragment:H1,clipping_planes_pars_fragment:$1,clipping_planes_pars_vertex:W1,clipping_planes_vertex:X1,color_fragment:q1,color_pars_fragment:Y1,color_pars_vertex:K1,color_vertex:j1,common:Z1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:Q1,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:rx,colorspace_pars_fragment:sx,envmap_fragment:ox,envmap_common_pars_fragment:ax,envmap_pars_fragment:cx,envmap_pars_vertex:lx,envmap_physical_pars_fragment:yx,envmap_vertex:ux,fog_vertex:dx,fog_pars_vertex:fx,fog_fragment:hx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:xx,lights_pars_begin:_x,lights_toon_fragment:Mx,lights_toon_pars_fragment:bx,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ex,lights_fragment_begin:Ax,lights_fragment_maps:Cx,lights_fragment_end:Rx,lightprobes_pars_fragment:Px,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Ux,map_fragment:Nx,map_pars_fragment:kx,map_particle_fragment:Fx,map_particle_pars_fragment:Ox,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Bx,morphinstance_vertex:Gx,morphcolor_vertex:Vx,morphnormal_vertex:Hx,morphtarget_pars_vertex:$x,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:qx,normal_pars_fragment:Yx,normal_pars_vertex:Kx,normal_vertex:jx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:e_,iridescence_pars_fragment:t_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:r_,project_vertex:s_,dithering_fragment:o_,dithering_pars_fragment:a_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:d_,shadowmap_vertex:f_,shadowmask_pars_fragment:h_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:v_,specularmap_fragment:x_,specularmap_pars_fragment:__,tonemapping_fragment:y_,tonemapping_pars_fragment:M_,transmission_fragment:b_,transmission_pars_fragment:S_,uv_pars_fragment:w_,uv_pars_vertex:T_,uv_vertex:E_,worldpos_vertex:A_,background_vert:C_,background_frag:R_,backgroundCube_vert:P_,backgroundCube_frag:L_,cube_vert:D_,cube_frag:I_,depth_vert:U_,depth_frag:N_,distance_vert:k_,distance_frag:F_,equirect_vert:O_,equirect_frag:z_,linedashed_vert:B_,linedashed_frag:G_,meshbasic_vert:V_,meshbasic_frag:H_,meshlambert_vert:$_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:Y_,meshnormal_frag:K_,meshphong_vert:j_,meshphong_frag:Z_,meshphysical_vert:J_,meshphysical_frag:Q_,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:ry,shadow_frag:sy,sprite_vert:oy,sprite_frag:ay},ke={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},$i={basic:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Jn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Jn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new ot(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Jn([ke.points,ke.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Jn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Jn([ke.common,ke.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Jn([ke.sprite,ke.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Jn([ke.common,ke.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Jn([ke.lights,ke.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};$i.physical={uniforms:Jn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Ba={r:0,b:0,g:0},cy=new Ut,Pp=new ut;Pp.set(-1,0,0,0,1,0,0,0,1);function ly(n,e,t,i,r,s){const a=new ot(0);let c=r===!0?0:1,o,l,u=null,p=0,d=null;function f(g){let w=g.isScene===!0?g.background:null;if(w&&w.isTexture){const _=g.backgroundBlurriness>0;w=e.get(w,_)}return w}function v(g){let w=!1;const _=f(g);_===null?m(a,c):_&&_.isColor&&(m(_,1),w=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,w){const _=f(w);_&&(_.isCubeTexture||_.mapping===Xc)?(l===void 0&&(l=new Ot(new Sn(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Qs($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Pp),l.material.toneMapped=It.getTransfer(_.colorSpace)!==Zt,(u!==_||p!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,p=_.version,d=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new Ot(new ro(2,2),new $t({name:"BackgroundMaterial",uniforms:Qs($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.toneMapped=It.getTransfer(_.colorSpace)!==Zt,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||d!==n.toneMapping)&&(o.material.needsUpdate=!0,u=_,p=_.version,d=n.toneMapping),o.layers.enableAll(),g.unshift(o,o.geometry,o.material,0,0,null))}function m(g,w){g.getRGB(Ba,wp(n)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,w,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,w=1){a.set(g),c=w,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,m(a,c)},render:v,addToRenderList:y,dispose:h}}function uy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function c(P,R,z,N,L){let O=!1;const V=p(P,N,z,R);s!==V&&(s=V,l(s.object)),O=f(P,N,z,L),O&&v(P,N,z,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,_(P,R,z,N),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function o(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function p(P,R,z,N){const L=N.wireframe===!0;let O=i[R.id];O===void 0&&(O={},i[R.id]=O);const V=P.isInstancedMesh===!0?P.id:0;let oe=O[V];oe===void 0&&(oe={},O[V]=oe);let re=oe[z.id];re===void 0&&(re={},oe[z.id]=re);let de=re[L];return de===void 0&&(de=d(o()),re[L]=de),de}function d(P){const R=[],z=[],N=[];for(let L=0;L<t;L++)R[L]=0,z[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,R,z,N){const L=s.attributes,O=R.attributes;let V=0;const oe=z.getAttributes();for(const re in oe)if(oe[re].location>=0){const ge=L[re];let Be=O[re];if(Be===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(Be=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(Be=P.instanceColor)),ge===void 0||ge.attribute!==Be||Be&&ge.data!==Be.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function v(P,R,z,N){const L={},O=R.attributes;let V=0;const oe=z.getAttributes();for(const re in oe)if(oe[re].location>=0){let ge=O[re];ge===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor));const Be={};Be.attribute=ge,ge&&ge.data&&(Be.data=ge.data),L[re]=Be,V++}s.attributes=L,s.attributesNum=V,s.index=N}function y(){const P=s.newAttributes;for(let R=0,z=P.length;R<z;R++)P[R]=0}function m(P){h(P,0)}function h(P,R){const z=s.newAttributes,N=s.enabledAttributes,L=s.attributeDivisors;z[P]=1,N[P]===0&&(n.enableVertexAttribArray(P),N[P]=1),L[P]!==R&&(n.vertexAttribDivisor(P,R),L[P]=R)}function g(){const P=s.newAttributes,R=s.enabledAttributes;for(let z=0,N=R.length;z<N;z++)R[z]!==P[z]&&(n.disableVertexAttribArray(z),R[z]=0)}function w(P,R,z,N,L,O,V){V===!0?n.vertexAttribIPointer(P,R,z,L,O):n.vertexAttribPointer(P,R,z,N,L,O)}function _(P,R,z,N){y();const L=N.attributes,O=z.getAttributes(),V=R.defaultAttributeValues;for(const oe in O){const re=O[oe];if(re.location>=0){let de=L[oe];if(de===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),de!==void 0){const ge=de.normalized,Be=de.itemSize,_e=e.get(de);if(_e===void 0)continue;const et=_e.buffer,Xe=_e.type,Ve=_e.bytesPerElement,ae=Xe===n.INT||Xe===n.UNSIGNED_INT||de.gpuType===Bd;if(de.isInterleavedBufferAttribute){const me=de.data,De=me.stride,it=de.offset;if(me.isInstancedInterleavedBuffer){for(let fe=0;fe<re.locationSize;fe++)h(re.location+fe,me.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let fe=0;fe<re.locationSize;fe++)m(re.location+fe);n.bindBuffer(n.ARRAY_BUFFER,et);for(let fe=0;fe<re.locationSize;fe++)w(re.location+fe,Be/re.locationSize,Xe,ge,De*Ve,(it+Be/re.locationSize*fe)*Ve,ae)}else{if(de.isInstancedBufferAttribute){for(let me=0;me<re.locationSize;me++)h(re.location+me,de.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let me=0;me<re.locationSize;me++)m(re.location+me);n.bindBuffer(n.ARRAY_BUFFER,et);for(let me=0;me<re.locationSize;me++)w(re.location+me,Be/re.locationSize,Xe,ge,Be*Ve,Be/re.locationSize*me*Ve,ae)}}else if(V!==void 0){const ge=V[oe];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(re.location,ge);break;case 3:n.vertexAttrib3fv(re.location,ge);break;case 4:n.vertexAttrib4fv(re.location,ge);break;default:n.vertexAttrib1fv(re.location,ge)}}}}g()}function S(){M();for(const P in i){const R=i[P];for(const z in R){const N=R[z];for(const L in N){const O=N[L];for(const V in O)u(O[V].object),delete O[V];delete N[L]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const R=i[P.id];for(const z in R){const N=R[z];for(const L in N){const O=N[L];for(const V in O)u(O[V].object),delete O[V];delete N[L]}}delete i[P.id]}function T(P){for(const R in i){const z=i[R];for(const N in z){const L=z[N];if(L[P.id]===void 0)continue;const O=L[P.id];for(const V in O)u(O[V].object),delete O[V];delete L[P.id]}}}function x(P){for(const R in i){const z=i[R],N=P.isInstancedMesh===!0?P.id:0,L=z[N];if(L!==void 0){for(const O in L){const V=L[O];for(const oe in V)u(V[oe].object),delete V[oe];delete L[O]}delete z[N],Object.keys(z).length===0&&delete i[R]}}}function M(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:M,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function dy(n,e,t){let i;function r(o){i=o}function s(o,l){n.drawArrays(i,o,l),t.update(l,i,1)}function a(o,l,u){u!==0&&(n.drawArraysInstanced(i,o,l,u),t.update(l,i,u))}function c(o,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c}function fy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==_i&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(T){const x=T===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ei&&T!==Li&&!x&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=o(l);u!==l&&(st("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function hy(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hi,c=new ut,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const f=p.length!==0||d||i!==0||r;return r=d,i=p.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,f){const v=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,h=n.get(p);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const g=s?0:i,w=g*4;let _=h.clippingState||null;o.value=_,_=u(v,d,w,f);for(let S=0;S!==w;++S)_[S]=t[S];h.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,f,v){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=o.value,v!==!0||m===null){const h=f+y*4,g=d.matrixWorldInverse;c.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,_=f;w!==y;++w,_+=4)a.copy(p[w]).applyMatrix4(g,c),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Gs=4,py=6,my=20,gy=256,Mo=new Ep,Ah=new ot;let Xl=null,ql=0,Yl=0,Kl=!1;const vy=new D,jr=new D;class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:c=vy}=s;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,c),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:bi,format:_i,colorSpace:wc,depthBuffer:!1},r=Ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xy(s)),this._blurMaterial=yy(s,e,t),this._ggxMaterial=_y(s,e,t)}return r}_compileMaterial(e){const t=new Ot(new Ht,e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,i,r,s){const o=new hi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,f=p.toneMapping;p.getClearColor(Ah),p.toneMapping=Zi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Sn,new Zd({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(Ah),h=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+u[w],s.y,s.z)):_===1?(o.up.set(0,0,l[w]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+u[w],s.z)):(o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+u[w]));const S=this._cubeSize;Fs(r,_*S,w>2?S:0,S,S),p.setRenderTarget(r),h&&p.render(y,o),p.render(e,o)}p.toneMapping=f,p.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const c=s.uniforms;c.envMap.value=e;const o=this._cubeSize;Fs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Mo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;const o=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),d=l*1.25,f=p*d,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Gs?i-v+Gs:0),h=4*(this._cubeSize-y);o.envMap.value=e.texture,o.roughness.value=f,o.mipInt.value=v-t,Fs(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(c,Mo),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=v-i,Fs(e,m,h,3*y,2*y),r.setRenderTarget(e),r.render(c,Mo)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,c=this._blurMaterial,o=this._lodMeshes[r];o.material=c;const l=c.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],p=3*u*(r>this._lodMax-Gs?r-this._lodMax+Gs:0),d=4*(this._cubeSize-u);Fs(t,p,d,3*u,2*u),a.setRenderTarget(t),a.render(o,Mo)}}function xy(n){const e=[],t=[];let i=n;const r=n-Gs+1+py;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const c=1/(a-2),o=-c,l=1+c,u=[o,o,l,o,l,l,o,o,l,l,o,l],p=6,d=6,f=3,v=new Float32Array(f*d*p),y=new Float32Array(f*d*p);for(let h=0;h<p;h++){const g=h%3*2/3-1,w=h>2?0:-1,_=[g,w,0,g+2/3,w,0,g+2/3,w+1,0,g,w,0,g+2/3,w+1,0,g,w+1,0];v.set(_,f*d*h);for(let S=0;S<d;S++){const b=u[S*2]*2-1,T=u[S*2+1]*2-1;h===0?jr.set(1,T,b):h===1?jr.set(-b,1,-T):h===2?jr.set(-b,T,1):h===3?jr.set(-1,T,-b):h===4?jr.set(-b,-1,T):jr.set(b,T,-1),jr.toArray(y,(h*d+S)*f)}}const m=new Ht;m.setAttribute("position",new hn(v,f)),m.setAttribute("outputDirection",new hn(y,f)),t.push(new Ot(m,null)),i>Gs&&i--}return{lodMeshes:t,sizeLods:e}}function Ch(n,e,t){const i=new ui(n,e,t);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _y(n,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function yy(n,e,t){return new $t({name:"SphericalGaussianBlur",defines:{SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Rh(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Ph(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class af extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sn(5,5,5),s=new $t({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:dr});s.uniforms.tEquirect.value=t;const a=new Ot(r,s),c=t.minFilter;return t.minFilter===Rr&&(t.minFilter=gn),new Cp(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function My(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===_l||f===yl)if(e.has(d)){const v=e.get(d).texture;return c(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const y=new af(v.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",l),c(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,v=f===_l||f===yl,y=f===rs||f===js;if(v||y){let m=t.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new sd(n)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return v&&g&&g.height>0||y&&g&&o(g)?(i===null&&(i=new sd(n)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function c(d,f){return f===_l?d.mapping=rs:f===yl&&(d.mapping=js),d}function o(d){let f=0;const v=6;for(let y=0;y<v;y++)d[y]!==void 0&&f++;return f===v}function l(d){const f=d.target;f.removeEventListener("dispose",l);const v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function by(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$s("WebGLRenderer: "+i+" extension not supported."),r}}}function Sy(n,e,t,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function o(p){const d=p.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(p){const d=[],f=p.index,v=p.attributes.position;let y=0;if(v===void 0)return;if(f!==null){const g=f.array;y=f.version;for(let w=0,_=g.length;w<_;w+=3){const S=g[w+0],b=g[w+1],T=g[w+2];d.push(S,b,b,T,T,S)}}else{const g=v.array;y=v.version;for(let w=0,_=g.length/3-1;w<_;w+=3){const S=w+0,b=w+1,T=w+2;d.push(S,b,b,T,T,S)}}const m=new(v.count>=65535?yp:_p)(d,1);m.version=y;const h=s.get(p);h&&e.remove(h),s.set(p,m)}function u(p){const d=s.get(p);if(d){const f=p.index;f!==null&&d.version<f.version&&l(p)}else l(p);return s.get(p)}return{get:c,update:o,getWireframeAttribute:u}}function wy(n,e,t){let i;function r(p){i=p}let s,a;function c(p){s=p.type,a=p.bytesPerElement}function o(p,d){n.drawElements(i,d,s,p*a),t.update(d,i,1)}function l(p,d,f){f!==0&&(n.drawElementsInstanced(i,d,s,p*a,f),t.update(d,i,f))}function u(p,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,i,1)}this.setMode=r,this.setIndex=c,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Ty(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ey(n,e,t){const i=new WeakMap,r=new Qt;function s(a,c,o){const l=a.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0;let d=i.get(c);if(d===void 0||d.count!==p){let E=function(){x.dispose(),i.delete(c),c.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,h=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let _=0;v===!0&&(_=1),y===!0&&(_=2),m===!0&&(_=3);let S=c.attributes.position.count*_,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*b*4*p),x=new gp(T,S,b,p);x.type=Li,x.needsUpdate=!0;const M=_*4;for(let P=0;P<p;P++){const R=h[P],z=g[P],N=w[P],L=S*b*4*P;for(let O=0;O<R.count;O++){const V=O*M;v===!0&&(r.fromBufferAttribute(R,O),T[L+V+0]=r.x,T[L+V+1]=r.y,T[L+V+2]=r.z,T[L+V+3]=0),y===!0&&(r.fromBufferAttribute(z,O),T[L+V+4]=r.x,T[L+V+5]=r.y,T[L+V+6]=r.z,T[L+V+7]=0),m===!0&&(r.fromBufferAttribute(N,O),T[L+V+8]=r.x,T[L+V+9]=r.y,T[L+V+10]=r.z,T[L+V+11]=N.itemSize===4?r.w:1)}}d={count:p,texture:x,size:new Qe(S,b)},i.set(c,d),c.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const y=c.morphTargetsRelative?1:1-v;o.getUniforms().setValue(n,"morphTargetBaseInfluence",y),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Ay(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,p=l.geometry,d=e.get(l,p);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function c(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:c}}const Cy={[ep]:"LINEAR_TONE_MAPPING",[tp]:"REINHARD_TONE_MAPPING",[np]:"CINEON_TONE_MAPPING",[ip]:"ACES_FILMIC_TONE_MAPPING",[sp]:"AGX_TONE_MAPPING",[op]:"NEUTRAL_TONE_MAPPING",[rp]:"CUSTOM_TONE_MAPPING"};function Ry(n,e,t,i,r,s){const a=new ui(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,o=null;const l=new Ht;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));const u=new x1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ot(l,u),d=new Ep(-1,1,1,-1,0,1);let f=null,v=null,y=!1,m,h=null,g=[],w=!1;this.setSize=function(_,S){a.setSize(_,S),c!==null&&c.setSize(_,S),o!==null&&o.setSize(_,S);for(let b=0;b<g.length;b++){const T=g[b];T.setSize&&T.setSize(_,S)}},this.setEffects=function(_){g=_,w=g.length>0&&g[0].isRenderPass===!0;const S=a.width,b=a.height;g.length>0&&c===null&&(c=new ui(S,b,{type:bi,depthBuffer:!1,stencilBuffer:!1}),o=new ui(S,b,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<g.length;T++){const x=g[T];x.setSize&&x.setSize(S,b)}},this.begin=function(_,S){if(y||_.toneMapping===Zi&&g.length===0)return!1;if(h=S,S!==null){const b=S.width,T=S.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Zi,!0},this.hasRenderPass=function(){return w},this.end=function(_,S){_.toneMapping=m,y=!0;let b=a,T=c;for(let x=0;x<g.length;x++){const M=g[x];M.enabled!==!1&&(M.render(_,T,b,S),M.needsSwap!==!1&&(b=T,T=T===c?o:c))}if(f!==_.outputColorSpace||v!==_.toneMapping){f=_.outputColorSpace,v=_.toneMapping,u.defines={},It.getTransfer(f)===Zt&&(u.defines.SRGB_TRANSFER="");const x=Cy[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(h),_.render(p,d),h=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),c!==null&&c.dispose(),o!==null&&o.dispose(),l.dispose(),u.dispose()}}const Lp=new Yn,od=new Js(1,1),Dp=new gp,Ip=new qv,Up=new bp,Lh=[],Dh=[],Ih=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lh[r];if(s===void 0&&(s=new Float32Array(r),Lh[r]=s),e!==0){i.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(s,c)}return s}function Cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jc(n,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Py(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;n.uniform2fv(this.addr,e),Rn(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;n.uniform3fv(this.addr,e),Rn(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;n.uniform4fv(this.addr,e),Rn(t,e)}}function Uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),Rn(t,i)}}function Ny(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,i))return;Uh.set(i),n.uniformMatrix3fv(this.addr,!1,Uh),Rn(t,i)}}function ky(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,i))return;Ih.set(i),n.uniformMatrix4fv(this.addr,!1,Ih),Rn(t,i)}}function Fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;n.uniform2iv(this.addr,e),Rn(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;n.uniform3iv(this.addr,e),Rn(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;n.uniform4iv(this.addr,e),Rn(t,e)}}function Gy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;n.uniform2uiv(this.addr,e),Rn(t,e)}}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;n.uniform3uiv(this.addr,e),Rn(t,e)}}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;n.uniform4uiv(this.addr,e),Rn(t,e)}}function Wy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(od.compareFunction=t.isReversedDepthBuffer()?Yd:qd,s=od):s=Lp,t.setTexture2D(e||s,r)}function Xy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ip,r)}function qy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Up,r)}function Yy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dp,r)}function Ky(n){switch(n){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Iy;case 35674:return Uy;case 35675:return Ny;case 35676:return ky;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return zy;case 35669:case 35673:return By;case 5125:return Gy;case 36294:return Vy;case 36295:return Hy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function jy(n,e){n.uniform1fv(this.addr,e)}function Zy(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function Jy(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function Qy(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function eM(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tM(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nM(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iM(n,e){n.uniform1iv(this.addr,e)}function rM(n,e){n.uniform2iv(this.addr,e)}function sM(n,e){n.uniform3iv(this.addr,e)}function oM(n,e){n.uniform4iv(this.addr,e)}function aM(n,e){n.uniform1uiv(this.addr,e)}function cM(n,e){n.uniform2uiv(this.addr,e)}function lM(n,e){n.uniform3uiv(this.addr,e)}function uM(n,e){n.uniform4uiv(this.addr,e)}function dM(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);Cn(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=od:a=Lp;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||a,s[c])}function fM(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);Cn(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ip,s[a])}function hM(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);Cn(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Up,s[a])}function pM(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);Cn(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dp,s[a])}function mM(n){switch(n){case 5126:return jy;case 35664:return Zy;case 35665:return Jy;case 35666:return Qy;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return cM;case 36295:return lM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}class gM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}}class vM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mM(t.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(e,t[c.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function kh(n,e){n.seq.push(e),n.map[e.id]=e}function _M(n,e,t){const i=n.name,r=i.length;for(jl.lastIndex=0;;){const s=jl.exec(i),a=jl.lastIndex;let c=s[1];const o=s[2]==="]",l=s[3];if(o&&(c=c|0),l===void 0||l==="["&&a+2===r){kh(t,l===void 0?new gM(c,n,e):new vM(c,n,e));break}else{let p=t.map[c];p===void 0&&(p=new xM(c),kh(t,p)),t=p}}}class nc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const c=e.getActiveUniform(t,a),o=e.getUniformLocation(t,c.name);_M(c,o,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const c=t[s],o=i[c.id];o.needsUpdate!==!1&&c.setValue(e,o.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yM=37297;let MM=0;function bM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}const Oh=new ut;function SM(n){It._getMatrix(Oh,It.workingColorSpace,n);const e=`mat3( ${Oh.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(n)){case Tc:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+bM(n.getShaderSource(e),c)}else return s}function wM(n,e){const t=SM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TM={[ep]:"Linear",[tp]:"Reinhard",[np]:"Cineon",[ip]:"ACESFilmic",[sp]:"AgX",[op]:"Neutral",[rp]:"Custom"};function EM(n,e){const t=TM[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ga=new D;function AM(){It.getLuminanceCoefficients(Ga);const n=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function RM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}function Lo(n){return n!==""}function Bh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(n){return n.replace(LM,IM)}const DM=new Map;function IM(n,e){let t=St[e];if(t===void 0){const i=DM.get(e);if(i!==void 0)t=St[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ad(t)}const UM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(n){return n.replace(UM,NM)}function NM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const kM={[ja]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function FM(n){return kM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OM={[rs]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function zM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":OM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const BM={[js]:"ENVMAP_MODE_REFRACTION"};function GM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":BM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VM={[Q0]:"ENVMAP_BLENDING_MULTIPLY",[uv]:"ENVMAP_BLENDING_MIX",[dv]:"ENVMAP_BLENDING_ADD"};function HM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":VM[n.combine]||"ENVMAP_BLENDING_NONE"}function $M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const o=FM(t),l=zM(t),u=GM(t),p=HM(t),d=$M(t),f=CM(t),v=RM(s),y=r.createProgram();let m,h,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lo).join(`
`),h.length>0&&(h+=`
`)):(m=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),h=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?St.tonemapping_pars_fragment:"",t.toneMapping!==Zi?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,wM("linearToOutputTexel",t.outputColorSpace),AM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),a=ad(a),a=Bh(a,t),a=Gh(a,t),c=ad(c),c=Bh(c,t),c=Gh(c,t),a=Vh(a),c=Vh(c),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=g+m+a,_=g+h+c,S=Fh(r,r.VERTEX_SHADER,w),b=Fh(r,r.FRAGMENT_SHADER,_);r.attachShader(y,S),r.attachShader(y,b),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(P){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(y)||"",z=r.getShaderInfoLog(S)||"",N=r.getShaderInfoLog(b)||"",L=R.trim(),O=z.trim(),V=N.trim();let oe=!0,re=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,S,b);else{const de=zh(r,S,"vertex"),ge=zh(r,b,"fragment");Bt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+de+`
`+ge)}else L!==""?st("WebGLProgram: Program Info Log:",L):(O===""||V==="")&&(re=!1);re&&(P.diagnostics={runnable:oe,programLog:L,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(S),r.deleteShader(b),x=new nc(r,y),M=PM(r,y)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,yM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=b,this}let XM=0;class qM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YM(e),t.set(e,i)),i}}class YM{constructor(e){this.id=XM++,this.code=e,this.usedTimes=0}}function KM(n){return n===ss||n===bc||n===Sc}function jM(n,e,t,i,r,s){const a=new vp,c=new qM,o=new Set,l=[],u=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return o.add(x),x===0?"uv":`uv${x}`}function y(x,M,E,P,R,z){const N=P.fog,L=R.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,oe=e.get(x.envMap||O,V),re=oe&&oe.mapping===Xc?oe.image.height:null,de=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&st("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ge=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Be=ge!==void 0?ge.length:0;let _e=0;L.morphAttributes.position!==void 0&&(_e=1),L.morphAttributes.normal!==void 0&&(_e=2),L.morphAttributes.color!==void 0&&(_e=3);let et,Xe,Ve,ae;if(de){const jt=$i[de];et=jt.vertexShader,Xe=jt.fragmentShader}else{et=x.vertexShader,Xe=x.fragmentShader;const jt=c.getVertexShaderStage(x),Pt=c.getFragmentShaderStage(x);c.update(x,jt,Pt),Ve=jt.id,ae=Pt.id}const me=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),it=R.isInstancedMesh===!0,fe=R.isBatchedMesh===!0,Ge=!!x.map,Lt=!!x.matcap,ht=!!oe,Je=!!x.aoMap,rt=!!x.lightMap,nt=!!x.bumpMap&&x.wireframe===!1,At=!!x.normalMap,on=!!x.displacementMap,Dt=!!x.emissiveMap,Yt=!!x.metalnessMap,Kt=!!x.roughnessMap,j=x.anisotropy>0,Vt=x.clearcoat>0,Rt=x.dispersion>0,k=x.retroreflectivity>0,A=x.iridescence>0,Z=x.sheen>0,te=x.transmission>0,ue=j&&!!x.anisotropyMap,Ae=Vt&&!!x.clearcoatMap,Ce=Vt&&!!x.clearcoatNormalMap,ce=Vt&&!!x.clearcoatRoughnessMap,ve=A&&!!x.iridescenceMap,Te=A&&!!x.iridescenceThicknessMap,Fe=Z&&!!x.sheenColorMap,Ie=Z&&!!x.sheenRoughnessMap,Re=!!x.specularMap,Ye=!!x.specularColorMap,tt=!!x.specularIntensityMap,ct=te&&!!x.transmissionMap,X=te&&!!x.thicknessMap,Pe=!!x.gradientMap,he=!!x.alphaMap,Le=x.alphaTest>0,Ne=!!x.alphaHash,xe=!!x.extensions;let He=Zi;x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(He=n.toneMapping);const We={shaderID:de,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:Xe,defines:x.defines,customVertexShaderID:Ve,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:fe,batchingColor:fe&&R._colorsTexture!==null,instancing:it,instancingColor:it&&R.instanceColor!==null,instancingMorph:it&&R.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:Lt,envMap:ht,envMapMode:ht&&oe.mapping,envMapCubeUVHeight:re,aoMap:Je,lightMap:rt,bumpMap:nt,normalMap:At,displacementMap:on,emissiveMap:Dt,normalMapObjectSpace:At&&x.normalMapType===pv,normalMapTangentSpace:At&&x.normalMapType===id,packedNormalMap:At&&x.normalMapType===id&&KM(x.normalMap.format),metalnessMap:Yt,roughnessMap:Kt,anisotropy:j,anisotropyMap:ue,clearcoat:Vt,clearcoatMap:Ae,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ce,dispersion:Rt,retroreflection:k,iridescence:A,iridescenceMap:ve,iridescenceThicknessMap:Te,sheen:Z,sheenColorMap:Fe,sheenRoughnessMap:Ie,specularMap:Re,specularColorMap:Ye,specularIntensityMap:tt,transmission:te,transmissionMap:ct,thicknessMap:X,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Fo&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Ne,combine:x.combine,mapUv:Ge&&v(x.map.channel),aoMapUv:Je&&v(x.aoMap.channel),lightMapUv:rt&&v(x.lightMap.channel),bumpMapUv:nt&&v(x.bumpMap.channel),normalMapUv:At&&v(x.normalMap.channel),displacementMapUv:on&&v(x.displacementMap.channel),emissiveMapUv:Dt&&v(x.emissiveMap.channel),metalnessMapUv:Yt&&v(x.metalnessMap.channel),roughnessMapUv:Kt&&v(x.roughnessMap.channel),anisotropyMapUv:ue&&v(x.anisotropyMap.channel),clearcoatMapUv:Ae&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(x.sheenRoughnessMap.channel),specularMapUv:Re&&v(x.specularMap.channel),specularColorMapUv:Ye&&v(x.specularColorMap.channel),specularIntensityMapUv:tt&&v(x.specularIntensityMap.channel),transmissionMapUv:ct&&v(x.transmissionMap.channel),thicknessMapUv:X&&v(x.thicknessMap.channel),alphaMapUv:he&&v(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(At||j),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(Ge||he),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&At===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:De,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:_e,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&It.getTransfer(x.map.colorSpace)===Zt,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&It.getTransfer(x.emissiveMap.colorSpace)===Zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ai,flipSided:x.side===ni,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=o.has(1),We.vertexUv2s=o.has(2),We.vertexUv3s=o.has(3),o.clear(),We}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)M.push(E),M.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(h(M,x),g(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function h(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const M=f[x.type];let E;if(M){const P=$i[M];E=m1.clone(P.uniforms)}else E=x.uniforms;return E}function _(x,M){let E=u.get(M);return E!==void 0?++E.usedTimes:(E=new WM(n,M,x,r),l.push(E),u.set(M,E)),E}function S(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){c.remove(x)}function T(){c.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:T}}function ZM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function r(a,c,o){n.get(a)[c]=o}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function JM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function c(d,f,v,y,m,h){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:v,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:h},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=v,g.materialVariant=a(d),g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=m,g.group=h),e++,g}function o(d,f,v,y,m,h,g){g.reversedDepth===!0&&(m=-m);const w=c(d,f,v,y,m,h);v.transmission>0?i.push(w):v.transparent===!0?r.push(w):t.push(w)}function l(d,f,v,y,m,h){const g=c(d,f,v,y,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,f){t.length>1&&t.sort(d||JM),i.length>1&&i.sort(f||$h),r.length>1&&r.sort(f||$h)}function p(){for(let d=e,f=n.length;d<f;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:p,sort:u}}function QM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Wh,n.set(i,[a])):r>=s.length?(a=new Wh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ot};break;case"SpotLight":t={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nb=0;function ib(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rb(n){const e=new eb,t=tb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new Ut,a=new Ut;function c(l){let u=0,p=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let f=0,v=0,y=0,m=0,h=0,g=0,w=0,_=0,S=0,b=0,T=0,x=0,M=0,E=0;l.sort(ib);for(let R=0,z=l.length;R<z;R++){const N=l[R],L=N.color,O=N.intensity,V=N.distance;let oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ss?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=L.r*O,p+=L.g*O,d+=L.b*O;else if(N.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(N.sh.coefficients[re],O);E++}else if(N.isSunLight){const re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const de=N.shadow,ge=t.get(N);ge.shadowIntensity=de.intensity,ge.shadowBias=de.bias,ge.shadowNormalBias=de.normalBias,ge.shadowRadius=de.radius,ge.shadowMapSize.copy(de.mapSize).multiply(de.getFrameExtents()),i.sunShadow[v]=ge,i.sunShadowMap[v]=oe;const Be=de.getViewportCount();for(let _e=0;_e<Be;_e++)i.sunShadowMatrix[y+_e]=de.getMatrix(_e),i.sunShadowCascade[y+_e]=de._cascadeData[_e];y+=Be,v++}i.sun[f]=re,f++}else if(N.isDirectionalLight){const re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const de=N.shadow,ge=t.get(N);ge.shadowIntensity=de.intensity,ge.shadowBias=de.bias,ge.shadowNormalBias=de.normalBias,ge.shadowRadius=de.radius,ge.shadowMapSize=de.mapSize,i.directionalShadow[m]=ge,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=N.shadow.matrix,S++}i.directional[m]=re,m++}else if(N.isSpotLight){const re=e.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(L).multiplyScalar(O),re.distance=V,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,i.spot[g]=re;const de=N.shadow;if(N.map&&(i.spotLightMap[x]=N.map,x++,de.updateMatrices(N),N.castShadow&&M++),i.spotLightMatrix[g]=de.matrix,N.castShadow){const ge=t.get(N);ge.shadowIntensity=de.intensity,ge.shadowBias=de.bias,ge.shadowNormalBias=de.normalBias,ge.shadowRadius=de.radius,ge.shadowMapSize=de.mapSize,i.spotShadow[g]=ge,i.spotShadowMap[g]=oe,T++}g++}else if(N.isRectAreaLight){const re=e.get(N);re.color.copy(L).multiplyScalar(O),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=re,w++}else if(N.isPointLight){const re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),re.distance=N.distance,re.decay=N.decay,N.castShadow){const de=N.shadow,ge=t.get(N);ge.shadowIntensity=de.intensity,ge.shadowBias=de.bias,ge.shadowNormalBias=de.normalBias,ge.shadowRadius=de.radius,ge.shadowMapSize=de.mapSize,ge.shadowCameraNear=de.camera.near,ge.shadowCameraFar=de.camera.far,i.pointShadow[h]=ge,i.pointShadowMap[h]=oe,i.pointShadowMatrix[h]=N.shadow.matrix,b++}i.point[h]=re,h++}else if(N.isHemisphereLight){const re=e.get(N);re.skyColor.copy(N.color).multiplyScalar(O),re.groundColor.copy(N.groundColor).multiplyScalar(O),i.hemi[_]=re,_++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;const P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==h||P.spotLength!==g||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==v||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==T||P.numSpotMaps!==x||P.numLightProbes!==E)&&(i.sun.length=f,i.directional.length=m,i.spot.length=g,i.rectArea.length=w,i.point.length=h,i.hemi.length=_,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+x-M,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=E,P.sunLength=f,P.directionalLength=m,P.pointLength=h,P.spotLength=g,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=v,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=T,P.numSpotMaps=x,P.numLightProbes=E,i.version=nb++)}function o(l,u){let p=0,d=0,f=0,v=0,y=0,m=0;const h=u.matrixWorldInverse;for(let g=0,w=l.length;g<w;g++){const _=l[g];if(_.isSunLight){const S=i.sun[p];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(h),p++}else if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),d++}else if(_.isSpotLight){const S=i.spot[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),v++}else if(_.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(h),a.identity(),s.copy(_.matrixWorld),s.premultiply(h),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(h),f++}else if(_.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(h),m++}}}return{setup:c,setupView:o,state:i}}function Xh(n){const e=new rb(n),t=[],i=[],r=[];function s(d){p.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function c(d){i.push(d)}function o(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:c,pushLightProbeGrid:o}}function sb(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let c;return a===void 0?(c=new Xh(n),e.set(r,[c])):s>=a.length?(c=new Xh(n),a.push(c)):c=a[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
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
}`,cb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],lb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],qh=new Ut,bo=new D,Zl=new D;function ub(n,e,t){let i=new Qd;const r=new Qe,s=new Qe,a=new Qt,c=new _1,o=new y1,l={},u=t.maxTextureSize,p={[is]:ni,[ni]:is,[ai]:ai},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ht;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ot(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let h=this.type;this.render=function(b,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Wg&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ja);const M=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),R=n.state;R.setBlending(dr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const z=h!==this.type;z&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(L=>L.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,L=b.length;N<L;N++){const O=b[N],V=O.shadow;if(V===void 0){st("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const oe=V.getFrameExtents();r.multiply(oe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,V.mapSize.y=s.y));const re=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=re,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ro){if(O.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ui(r.x,r.y,{format:ss,type:bi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new Js(r.x,r.y,Li),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=mr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bn,V.map.depthTexture.magFilter=Bn}else O.isPointLight?(V.map=new af(r.x),V.map.depthTexture=new h1(r.x,zi)):(V.map=new ui(r.x,r.y),V.map.depthTexture=new Js(r.x,r.y,zi)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=mr,this.type===ja?(V.map.depthTexture.compareFunction=re?Yd:qd,V.map.depthTexture.minFilter=gn,V.map.depthTexture.magFilter=gn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bn,V.map.depthTexture.magFilter=Bn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const de=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();O.isPointLight!==!0&&V.updateMatrices(O,x);for(let ge=0;ge<de;ge++){const Be=V.getCamera(ge);if(O.isPointLight){const _e=V.camera,et=V.matrix,Xe=O.distance||_e.far;Xe!==_e.far&&(_e.far=Xe,_e.updateProjectionMatrix()),bo.setFromMatrixPosition(O.matrixWorld),_e.position.copy(bo),Zl.copy(_e.position),Zl.add(cb[ge]),_e.up.copy(lb[ge]),_e.lookAt(Zl),_e.updateMatrixWorld(),et.makeTranslation(-bo.x,-bo.y,-bo.z),qh.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),V._frustum.setFromProjectionMatrix(qh,_e.coordinateSystem,_e.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(V.map),n.clear());const _e=V.getViewport(ge);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),R.viewport(a)}i=V.getFrustum(ge),_(T,x,Be,O,this.type)}V.isPointLightShadow!==!0&&this.type===Ro&&g(V,x),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,P)};function g(b,T){const x=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new ui(r.x,r.y,{format:ss,type:bi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,x,d,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,x,f,y,null)}function w(b,T,x,M){let E=null;const P=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=x.isPointLight===!0?o:c,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=E.uuid,z=T.uuid;let N=l[R];N===void 0&&(N={},l[R]=N);let L=N[z];L===void 0&&(L=E.clone(),N[z]=L,T.addEventListener("dispose",S)),E=L}if(E.visible=T.visible,E.wireframe=T.wireframe,M===Ro?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:p[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,x.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const R=n.properties.get(E);R.light=x}return E}function _(b,T,x,M,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Ro)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const z=e.update(b),N=b.material;if(Array.isArray(N)){const L=z.groups;for(let O=0,V=L.length;O<V;O++){const oe=L[O],re=N[oe.materialIndex];if(re&&re.visible){const de=w(b,re,M,E);b.onBeforeShadow(n,b,T,x,z,de,oe),n.renderBufferDirect(x,null,z,de,b,oe),b.onAfterShadow(n,b,T,x,z,de,oe)}}}else if(N.visible){const L=w(b,N,M,E);b.onBeforeShadow(n,b,T,x,z,L,null),n.renderBufferDirect(x,null,z,L,b,null),b.onAfterShadow(n,b,T,x,z,L,null)}}const R=b.children;for(let z=0,N=R.length;z<N;z++)_(R[z],T,x,M,E)}function S(b){b.target.removeEventListener("dispose",S);for(const x in l){const M=l[x],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function db(n,e){function t(){let X=!1;const Pe=new Qt;let he=null;const Le=new Qt(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!X&&(n.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){X=Ne},setClear:function(Ne,xe,He,We,jt){jt===!0&&(Ne*=We,xe*=We,He*=We),Pe.set(Ne,xe,He,We),Le.equals(Pe)===!1&&(n.clearColor(Ne,xe,He,We),Le.copy(Pe))},reset:function(){X=!1,he=null,Le.set(-1,0,0,0)}}}function i(){let X=!1,Pe=!1,he=null,Le=null,Ne=null;return{setReversed:function(xe){if(Pe!==xe){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Pe=xe;const We=Ne;Ne=null,this.setClear(We)}},getReversed:function(){return Pe},setTest:function(xe){xe?me(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(xe){he!==xe&&!X&&(n.depthMask(xe),he=xe)},setFunc:function(xe){if(Pe&&(xe=Tv[xe]),Le!==xe){switch(xe){case _u:n.depthFunc(n.NEVER);break;case yu:n.depthFunc(n.ALWAYS);break;case Mu:n.depthFunc(n.LESS);break;case Zo:n.depthFunc(n.LEQUAL);break;case bu:n.depthFunc(n.EQUAL);break;case Su:n.depthFunc(n.GEQUAL);break;case wu:n.depthFunc(n.GREATER);break;case Tu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Ne!==xe&&(Ne=xe,Pe&&(xe=1-xe),n.clearDepth(xe))},reset:function(){X=!1,he=null,Le=null,Ne=null,Pe=!1}}}function r(){let X=!1,Pe=null,he=null,Le=null,Ne=null,xe=null,He=null,We=null,jt=null;return{setTest:function(Pt){X||(Pt?me(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(Pt){Pe!==Pt&&!X&&(n.stencilMask(Pt),Pe=Pt)},setFunc:function(Pt,Un,jn){(he!==Pt||Le!==Un||Ne!==jn)&&(n.stencilFunc(Pt,Un,jn),he=Pt,Le=Un,Ne=jn)},setOp:function(Pt,Un,jn){(xe!==Pt||He!==Un||We!==jn)&&(n.stencilOp(Pt,Un,jn),xe=Pt,He=Un,We=jn)},setLocked:function(Pt){X=Pt},setClear:function(Pt){jt!==Pt&&(n.clearStencil(Pt),jt=Pt)},reset:function(){X=!1,Pe=null,he=null,Le=null,Ne=null,xe=null,He=null,We=null,jt=null}}}const s=new t,a=new i,c=new r,o=new WeakMap,l=new WeakMap;let u={},p={},d={},f=new WeakMap,v=[],y=null,m=!1,h=null,g=null,w=null,_=null,S=null,b=null,T=null,x=new ot(0,0,0),M=0,E=!1,P=null,R=null,z=null,N=null,L=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,oe=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(re)[1]),V=oe>=1):re.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),V=oe>=2);let de=null,ge={};const Be=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),et=new Qt().fromArray(Be),Xe=new Qt().fromArray(_e);function Ve(X,Pe,he,Le){const Ne=new Uint8Array(4),xe=n.createTexture();n.bindTexture(X,xe),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<he;He++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Pe,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Pe+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return xe}const ae={};ae[n.TEXTURE_2D]=Ve(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),me(n.DEPTH_TEST),a.setFunc(Zo),nt(!1),At(Hf),me(n.CULL_FACE),Je(dr);function me(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function De(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function it(X,Pe){return d[X]!==Pe?(n.bindFramebuffer(X,Pe),d[X]=Pe,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Pe),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Pe),!0):!1}function fe(X,Pe){let he=v,Le=!1;if(X){he=f.get(Pe),he===void 0&&(he=[],f.set(Pe,he));const Ne=X.textures;if(he.length!==Ne.length||he[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,He=Ne.length;xe<He;xe++)he[xe]=n.COLOR_ATTACHMENT0+xe;he.length=Ne.length,Le=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Le=!0);Le&&n.drawBuffers(he)}function Ge(X){return y!==X?(n.useProgram(X),y=X,!0):!1}const Lt={[zs]:n.FUNC_ADD,[qg]:n.FUNC_SUBTRACT,[Yg]:n.FUNC_REVERSE_SUBTRACT};Lt[Kg]=n.MIN,Lt[jg]=n.MAX;const ht={[Zg]:n.ZERO,[Jg]:n.ONE,[Qg]:n.SRC_COLOR,[Z0]:n.SRC_ALPHA,[sv]:n.SRC_ALPHA_SATURATE,[iv]:n.DST_COLOR,[tv]:n.DST_ALPHA,[ev]:n.ONE_MINUS_SRC_COLOR,[J0]:n.ONE_MINUS_SRC_ALPHA,[rv]:n.ONE_MINUS_DST_COLOR,[nv]:n.ONE_MINUS_DST_ALPHA,[ov]:n.CONSTANT_COLOR,[av]:n.ONE_MINUS_CONSTANT_COLOR,[cv]:n.CONSTANT_ALPHA,[lv]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(X,Pe,he,Le,Ne,xe,He,We,jt,Pt){if(X===dr){m===!0&&(De(n.BLEND),m=!1);return}if(m===!1&&(me(n.BLEND),m=!0),X!==Xg){if(X!==h||Pt!==E){if((g!==zs||S!==zs)&&(n.blendEquation(n.FUNC_ADD),g=zs,S=zs),Pt)switch(X){case Fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zn:n.blendFunc(n.ONE,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",X);break}else switch(X){case Fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $f:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wf:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",X);break}w=null,_=null,b=null,T=null,x.set(0,0,0),M=0,h=X,E=Pt}return}Ne=Ne||Pe,xe=xe||he,He=He||Le,(Pe!==g||Ne!==S)&&(n.blendEquationSeparate(Lt[Pe],Lt[Ne]),g=Pe,S=Ne),(he!==w||Le!==_||xe!==b||He!==T)&&(n.blendFuncSeparate(ht[he],ht[Le],ht[xe],ht[He]),w=he,_=Le,b=xe,T=He),(We.equals(x)===!1||jt!==M)&&(n.blendColor(We.r,We.g,We.b,jt),x.copy(We),M=jt),h=X,E=!1}function rt(X,Pe){X.side===ai?De(n.CULL_FACE):me(n.CULL_FACE);let he=X.side===ni;Pe&&(he=!he),nt(he),X.blending===Fo&&X.transparent===!1?Je(dr):Je(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Le=X.stencilWrite;c.setTest(Le),Le&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Dt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(X){P!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),P=X)}function At(X){X!==Hg?(me(n.CULL_FACE),X!==R&&(X===Hf?n.cullFace(n.BACK):X===$g?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),R=X}function on(X){X!==z&&(V&&n.lineWidth(X),z=X)}function Dt(X,Pe,he){X?(me(n.POLYGON_OFFSET_FILL),(N!==Pe||L!==he)&&(N=Pe,L=he,a.getReversed()&&(Pe=-Pe),n.polygonOffset(Pe,he))):De(n.POLYGON_OFFSET_FILL)}function Yt(X){X?me(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function Kt(X){X===void 0&&(X=n.TEXTURE0+O-1),de!==X&&(n.activeTexture(X),de=X)}function j(X,Pe,he){he===void 0&&(de===null?he=n.TEXTURE0+O-1:he=de);let Le=ge[he];Le===void 0&&(Le={type:void 0,texture:void 0},ge[he]=Le),(Le.type!==X||Le.texture!==Pe)&&(de!==he&&(n.activeTexture(he),de=he),n.bindTexture(X,Pe||ae[X]),Le.type=X,Le.texture=Pe)}function Vt(){const X=ge[de];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Rt(){try{n.compressedTexImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function A(){try{n.texSubImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Z(){try{n.texSubImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function te(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Ae(){try{n.texStorage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Ce(){try{n.texStorage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function ce(){try{n.texImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function ve(){try{n.texImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Te(X){return p[X]!==void 0?p[X]:n.getParameter(X)}function Fe(X,Pe){p[X]!==Pe&&(n.pixelStorei(X,Pe),p[X]=Pe)}function Ie(X){et.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),et.copy(X))}function Re(X){Xe.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Xe.copy(X))}function Ye(X,Pe){let he=l.get(Pe);he===void 0&&(he=new WeakMap,l.set(Pe,he));let Le=he.get(X);Le===void 0&&(Le=n.getUniformBlockIndex(Pe,X.name),he.set(X,Le))}function tt(X,Pe){const Le=l.get(Pe).get(X);o.get(Pe)!==Le&&(n.uniformBlockBinding(Pe,Le,X.__bindingPointIndex),o.set(Pe,Le))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},de=null,ge={},d={},f=new WeakMap,v=[],y=null,m=!1,h=null,g=null,w=null,_=null,S=null,b=null,T=null,x=new ot(0,0,0),M=0,E=!1,P=null,R=null,z=null,N=null,L=null,et.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:me,disable:De,bindFramebuffer:it,drawBuffers:fe,useProgram:Ge,setBlending:Je,setMaterial:rt,setFlipSided:nt,setCullFace:At,setLineWidth:on,setPolygonOffset:Dt,setScissorTest:Yt,activeTexture:Kt,bindTexture:j,unbindTexture:Vt,compressedTexImage2D:Rt,compressedTexImage3D:k,texImage2D:ce,texImage3D:ve,pixelStorei:Fe,getParameter:Te,updateUBOMapping:Ye,uniformBlockBinding:tt,texStorage2D:Ae,texStorage3D:Ce,texSubImage2D:A,texSubImage3D:Z,compressedTexSubImage2D:te,compressedTexSubImage3D:ue,scissor:Ie,viewport:Re,reset:ct}}function fb(n,e,t,i,r,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap,p=new Set;let d;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,A){return v?new OffscreenCanvas(k,A):Ec("canvas")}function m(k,A,Z){let te=1;const ue=Rt(k);if((ue.width>Z||ue.height>Z)&&(te=Z/Math.max(ue.width,ue.height)),te<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Ae=Math.floor(te*ue.width),Ce=Math.floor(te*ue.height);d===void 0&&(d=y(Ae,Ce));const ce=A?y(Ae,Ce):d;return ce.width=Ae,ce.height=Ce,ce.getContext("2d").drawImage(k,0,0,Ae,Ce),st("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Ae+"x"+Ce+")."),ce}else return"data"in k&&st("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),k;return k}function h(k){return k.generateMipmaps}function g(k){n.generateMipmap(k)}function w(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(k,A,Z,te,ue,Ae=!1){if(k!==null){if(n[k]!==void 0)return n[k];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ce;te&&(Ce=e.get("EXT_texture_norm16"),Ce||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=A;if(A===n.RED&&(Z===n.FLOAT&&(ce=n.R32F),Z===n.HALF_FLOAT&&(ce=n.R16F),Z===n.UNSIGNED_BYTE&&(ce=n.R8),Z===n.UNSIGNED_SHORT&&Ce&&(ce=Ce.R16_EXT),Z===n.SHORT&&Ce&&(ce=Ce.R16_SNORM_EXT)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.R8UI),Z===n.UNSIGNED_SHORT&&(ce=n.R16UI),Z===n.UNSIGNED_INT&&(ce=n.R32UI),Z===n.BYTE&&(ce=n.R8I),Z===n.SHORT&&(ce=n.R16I),Z===n.INT&&(ce=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(ce=n.RG32F),Z===n.HALF_FLOAT&&(ce=n.RG16F),Z===n.UNSIGNED_BYTE&&(ce=n.RG8),Z===n.UNSIGNED_SHORT&&Ce&&(ce=Ce.RG16_EXT),Z===n.SHORT&&Ce&&(ce=Ce.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RG16UI),Z===n.UNSIGNED_INT&&(ce=n.RG32UI),Z===n.BYTE&&(ce=n.RG8I),Z===n.SHORT&&(ce=n.RG16I),Z===n.INT&&(ce=n.RG32I)),A===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),Z===n.UNSIGNED_INT&&(ce=n.RGB32UI),Z===n.BYTE&&(ce=n.RGB8I),Z===n.SHORT&&(ce=n.RGB16I),Z===n.INT&&(ce=n.RGB32I)),A===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ce=n.RGBA32UI),Z===n.BYTE&&(ce=n.RGBA8I),Z===n.SHORT&&(ce=n.RGBA16I),Z===n.INT&&(ce=n.RGBA32I)),A===n.RGB&&(Z===n.UNSIGNED_SHORT&&Ce&&(ce=Ce.RGB16_EXT),Z===n.SHORT&&Ce&&(ce=Ce.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),A===n.RGBA){const ve=Ae?Tc:It.getTransfer(ue);Z===n.FLOAT&&(ce=n.RGBA32F),Z===n.HALF_FLOAT&&(ce=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ce=ve===Zt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Ce&&(ce=Ce.RGBA16_EXT),Z===n.SHORT&&Ce&&(ce=Ce.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(k,A){let Z;return k?A===null||A===zi||A===ea?Z=n.DEPTH24_STENCIL8:A===Li?Z=n.DEPTH32F_STENCIL8:A===Qo&&(Z=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zi||A===ea?Z=n.DEPTH_COMPONENT24:A===Li?Z=n.DEPTH_COMPONENT32F:A===Qo&&(Z=n.DEPTH_COMPONENT16),Z}function b(k,A){return h(k)===!0||k.isFramebufferTexture&&k.minFilter!==Bn&&k.minFilter!==gn?Math.log2(Math.max(A.width,A.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?A.mipmaps.length:1}function T(k){const A=k.target;A.removeEventListener("dispose",T),M(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&p.delete(A)}function x(k){const A=k.target;A.removeEventListener("dispose",x),P(A)}function M(k){const A=i.get(k);if(A.__webglInit===void 0)return;const Z=k.source,te=f.get(Z);if(te){const ue=te[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&E(k),Object.keys(te).length===0&&f.delete(Z)}i.remove(k)}function E(k){const A=i.get(k);n.deleteTexture(A.__webglTexture);const Z=k.source,te=f.get(Z);delete te[A.__cacheKey],a.memory.textures--}function P(k){const A=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let ue=0;ue<A.__webglFramebuffer[te].length;ue++)n.deleteFramebuffer(A.__webglFramebuffer[te][ue]);else n.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)n.deleteFramebuffer(A.__webglFramebuffer[te]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=k.textures;for(let te=0,ue=Z.length;te<ue;te++){const Ae=i.get(Z[te]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(Z[te])}i.remove(k)}let R=0;function z(){R=0}function N(){return R}function L(k){R=k}function O(){const k=R;return k>=r.maxTextures&&st("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+r.maxTextures),R+=1,k}function V(k){const A=[];return A.push(k.wrapS),A.push(k.wrapT),A.push(k.wrapR||0),A.push(k.magFilter),A.push(k.minFilter),A.push(k.anisotropy),A.push(k.internalFormat),A.push(k.format),A.push(k.type),A.push(k.generateMipmaps),A.push(k.premultiplyAlpha),A.push(k.flipY),A.push(k.unpackAlignment),A.push(k.colorSpace),A.join()}function oe(k,A){const Z=i.get(k);if(k.isVideoTexture&&j(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&Z.__version!==k.version){const te=k.image;if(te===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{De(Z,k,A);return}}else k.isExternalTexture&&(Z.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function re(k,A){const Z=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){De(Z,k,A);return}else k.isExternalTexture&&(Z.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function de(k,A){const Z=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){De(Z,k,A);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function ge(k,A){const Z=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&Z.__version!==k.version){it(Z,k,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}const Be={[Jo]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[Eu]:n.MIRRORED_REPEAT},_e={[Bn]:n.NEAREST,[fv]:n.NEAREST_MIPMAP_NEAREST,[da]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[Rr]:n.LINEAR_MIPMAP_LINEAR},et={[gv]:n.NEVER,[Mv]:n.ALWAYS,[vv]:n.LESS,[qd]:n.LEQUAL,[xv]:n.EQUAL,[Yd]:n.GEQUAL,[_v]:n.GREATER,[yv]:n.NOTEQUAL};function Xe(k,A){if(A.type===Li&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===gn||A.magFilter===Ml||A.magFilter===da||A.magFilter===Rr||A.minFilter===gn||A.minFilter===Ml||A.minFilter===da||A.minFilter===Rr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,Be[A.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,Be[A.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,Be[A.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,_e[A.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,_e[A.minFilter]),A.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Bn||A.minFilter!==da&&A.minFilter!==Rr||A.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ve(k,A){let Z=!1;k.__webglInit===void 0&&(k.__webglInit=!0,A.addEventListener("dispose",T));const te=A.source;let ue=f.get(te);ue===void 0&&(ue={},f.set(te,ue));const Ae=V(A);if(Ae!==k.__cacheKey){ue[Ae]===void 0&&(ue[Ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ue[Ae].usedTimes++;const Ce=ue[k.__cacheKey];Ce!==void 0&&(ue[k.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(A)),k.__cacheKey=Ae,k.__webglTexture=ue[Ae].texture}return Z}function ae(k,A,Z){return Math.floor(Math.floor(k/Z)/A)}function me(k,A,Z,te){const Ae=k.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,Z,te,A.data);else{Ae.sort((Fe,Ie)=>Fe.start-Ie.start);let Ce=0;for(let Fe=1;Fe<Ae.length;Fe++){const Ie=Ae[Ce],Re=Ae[Fe],Ye=Ie.start+Ie.count,tt=ae(Re.start,A.width,4),ct=ae(Ie.start,A.width,4);Re.start<=Ye+1&&tt===ct&&ae(Re.start+Re.count-1,A.width,4)===tt?Ie.count=Math.max(Ie.count,Re.start+Re.count-Ie.start):(++Ce,Ae[Ce]=Re)}Ae.length=Ce+1;const ce=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Te=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let Fe=0,Ie=Ae.length;Fe<Ie;Fe++){const Re=Ae[Fe],Ye=Math.floor(Re.start/4),tt=Math.ceil(Re.count/4),ct=Ye%A.width,X=Math.floor(Ye/A.width),Pe=tt,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,ct,X,Pe,he,Z,te,A.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function De(k,A,Z){let te=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=n.TEXTURE_3D);const ue=Ve(k,A),Ae=A.source;t.bindTexture(te,k.__webglTexture,n.TEXTURE0+Z);const Ce=i.get(Ae);if(Ae.version!==Ce.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const he=It.getPrimaries(It.workingColorSpace),Le=A.colorSpace===Ar?null:It.getPrimaries(A.colorSpace),Ne=A.colorSpace===Ar||he===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let ve=m(A.image,!1,r.maxTextureSize);ve=Vt(A,ve);const Te=s.convert(A.format,A.colorSpace),Fe=s.convert(A.type);let Ie=_(A.internalFormat,Te,Fe,A.normalized,A.colorSpace,A.isVideoTexture);Xe(te,A);let Re;const Ye=A.mipmaps,tt=A.isVideoTexture!==!0,ct=Ce.__version===void 0||ue===!0,X=Ae.dataReady,Pe=b(A,ve);if(A.isDepthTexture)Ie=S(A.format===Qr,A.type),ct&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Ie,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Te,Fe,null));else if(A.isDataTexture)if(Ye.length>0){tt&&ct&&t.texStorage2D(n.TEXTURE_2D,Pe,Ie,Ye[0].width,Ye[0].height);for(let he=0,Le=Ye.length;he<Le;he++)Re=Ye[he],tt?X&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Re.width,Re.height,Te,Fe,Re.data):t.texImage2D(n.TEXTURE_2D,he,Ie,Re.width,Re.height,0,Te,Fe,Re.data);A.generateMipmaps=!1}else tt?(ct&&t.texStorage2D(n.TEXTURE_2D,Pe,Ie,ve.width,ve.height),X&&me(A,ve,Te,Fe)):t.texImage2D(n.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Te,Fe,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ie,Ye[0].width,Ye[0].height,ve.depth);for(let he=0,Le=Ye.length;he<Le;he++)if(Re=Ye[he],A.format!==_i)if(Te!==null)if(tt){if(X)if(A.layerUpdates.size>0){const Ne=Eh(Re.width,Re.height,A.format,A.type);for(const xe of A.layerUpdates){const He=Re.data.subarray(xe*Ne/Re.data.BYTES_PER_ELEMENT,(xe+1)*Ne/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,xe,Re.width,Re.height,1,Te,He)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,ve.depth,Te,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ie,Re.width,Re.height,ve.depth,0,Re.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,ve.depth,Te,Fe,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ie,Re.width,Re.height,ve.depth,0,Te,Fe,Re.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{tt&&ct&&t.texStorage2D(n.TEXTURE_2D,Pe,Ie,Ye[0].width,Ye[0].height);for(let he=0,Le=Ye.length;he<Le;he++)Re=Ye[he],A.format!==_i?Te!==null?tt?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ie,Re.width,Re.height,0,Re.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?X&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Re.width,Re.height,Te,Fe,Re.data):t.texImage2D(n.TEXTURE_2D,he,Ie,Re.width,Re.height,0,Te,Fe,Re.data)}else if(A.isDataArrayTexture)if(tt){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ie,ve.width,ve.height,ve.depth),X)if(A.layerUpdates.size>0){const he=Eh(ve.width,ve.height,A.format,A.type);for(const Le of A.layerUpdates){const Ne=ve.data.subarray(Le*he/ve.data.BYTES_PER_ELEMENT,(Le+1)*he/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Le,ve.width,ve.height,1,Te,Fe,Ne)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Te,Fe,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ve.width,ve.height,ve.depth,0,Te,Fe,ve.data);else if(A.isData3DTexture)tt?(ct&&t.texStorage3D(n.TEXTURE_3D,Pe,Ie,ve.width,ve.height,ve.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Te,Fe,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ve.width,ve.height,ve.depth,0,Te,Fe,ve.data);else if(A.isFramebufferTexture){if(ct)if(tt)t.texStorage2D(n.TEXTURE_2D,Pe,Ie,ve.width,ve.height);else{let he=ve.width,Le=ve.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ie,he,Le,0,Te,Fe,null),he>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ve.parentNode!==he){he.appendChild(ve),p.add(A),he.onpaint=Le=>{const Ne=Le.changedElements;for(const xe of p)Ne.includes(xe.image)&&(xe.needsUpdate=!0)},he.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const Ne=n.RGBA,xe=n.RGBA,He=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,xe,He,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(tt&&ct){const he=Rt(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Ie,he.width,he.height)}for(let he=0,Le=Ye.length;he<Le;he++)Re=Ye[he],tt?X&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te,Fe,Re):t.texImage2D(n.TEXTURE_2D,he,Ie,Te,Fe,Re);A.generateMipmaps=!1}else if(tt){if(ct){const he=Rt(ve);t.texStorage2D(n.TEXTURE_2D,Pe,Ie,he.width,he.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Fe,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Te,Fe,ve);h(A)&&g(te),Ce.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function it(k,A,Z){if(A.image.length!==6)return;const te=Ve(k,A),ue=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+Z);const Ae=i.get(ue);if(ue.version!==Ae.__version||te===!0){t.activeTexture(n.TEXTURE0+Z);const Ce=It.getPrimaries(It.workingColorSpace),ce=A.colorSpace===Ar?null:It.getPrimaries(A.colorSpace),ve=A.colorSpace===Ar||Ce===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Te=A.isCompressedTexture||A.image[0].isCompressedTexture,Fe=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!Te&&!Fe?Ie[xe]=m(A.image[xe],!0,r.maxCubemapSize):Ie[xe]=Fe?A.image[xe].image:A.image[xe],Ie[xe]=Vt(A,Ie[xe]);const Re=Ie[0],Ye=s.convert(A.format,A.colorSpace),tt=s.convert(A.type),ct=_(A.internalFormat,Ye,tt,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,Pe=Ae.__version===void 0||te===!0,he=ue.dataReady;let Le=b(A,Re);Xe(n.TEXTURE_CUBE_MAP,A);let Ne;if(Te){X&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ct,Re.width,Re.height);for(let xe=0;xe<6;xe++){Ne=Ie[xe].mipmaps;for(let He=0;He<Ne.length;He++){const We=Ne[He];A.format!==_i?Ye!==null?X?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,We.width,We.height,Ye,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,ct,We.width,We.height,0,We.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,We.width,We.height,Ye,tt,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,ct,We.width,We.height,0,Ye,tt,We.data)}}}else{if(Ne=A.mipmaps,X&&Pe){Ne.length>0&&Le++;const xe=Rt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Fe){X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,Ye,tt,Ie[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Ie[xe].width,Ie[xe].height,0,Ye,tt,Ie[xe].data);for(let He=0;He<Ne.length;He++){const jt=Ne[He].image[xe].image;X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,jt.width,jt.height,Ye,tt,jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,ct,jt.width,jt.height,0,Ye,tt,jt.data)}}else{X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ye,tt,Ie[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Ye,tt,Ie[xe]);for(let He=0;He<Ne.length;He++){const We=Ne[He];X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Ye,tt,We.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,ct,Ye,tt,We.image[xe])}}}h(A)&&g(n.TEXTURE_CUBE_MAP),Ae.__version=ue.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function fe(k,A,Z,te,ue,Ae){const Ce=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),ve=_(Z.internalFormat,Ce,ce,Z.normalized,Z.colorSpace),Te=i.get(A),Fe=i.get(Z);if(Fe.__renderTarget=A,!Te.__hasExternalTextures){const Ie=Math.max(1,A.width>>Ae),Re=Math.max(1,A.height>>Ae);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,Ae,ve,Ie,Re,A.depth,0,Ce,ce,null):t.texImage2D(ue,Ae,ve,Ie,Re,0,Ce,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Kt(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ue,Fe.__webglTexture,0,Yt(A)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ue,Fe.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(k,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,k),A.depthBuffer){const te=A.depthTexture,ue=te&&te.isDepthTexture?te.type:null,Ae=S(A.stencilBuffer,ue),Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Kt(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(A),Ae,A.width,A.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(A),Ae,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,k)}else{const te=A.textures;for(let ue=0;ue<te.length;ue++){const Ae=te[ue],Ce=s.convert(Ae.format,Ae.colorSpace),ce=s.convert(Ae.type),ve=_(Ae.internalFormat,Ce,ce,Ae.normalized,Ae.colorSpace);Kt(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(A),ve,A.width,A.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(A),ve,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ve,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(k,A,Z){const te=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=i.get(A.depthTexture);if(ue.__renderTarget=A,(!ue.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),te){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,A.depthTexture.addEventListener("dispose",T)),ue.__webglTexture===void 0){ue.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,A.depthTexture);const Te=s.convert(A.depthTexture.format),Fe=s.convert(A.depthTexture.type);let Ie;A.depthTexture.format===mr?Ie=n.DEPTH_COMPONENT24:A.depthTexture.format===Qr&&(Ie=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ie,A.width,A.height,0,Te,Fe,null)}}else oe(A.depthTexture,0);const Ae=ue.__webglTexture,Ce=Yt(A),ce=te?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,ve=A.depthTexture.format===Qr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===mr)Kt(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ce,Ae,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ve,ce,Ae,0);else if(A.depthTexture.format===Qr)Kt(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ce,Ae,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ve,ce,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(k){const A=i.get(k),Z=k.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==k.depthTexture){const te=k.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),te){const ue=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,te.removeEventListener("dispose",ue)};te.addEventListener("dispose",ue),A.__depthDisposeCallback=ue}A.__boundDepthTexture=te}if(k.depthTexture&&!A.__autoAllocateDepthBuffer)if(Z)for(let te=0;te<6;te++)Lt(A.__webglFramebuffer[te],k,te);else{const te=k.texture.mipmaps;te&&te.length>0?Lt(A.__webglFramebuffer[0],k,0):Lt(A.__webglFramebuffer,k,0)}else if(Z){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]===void 0)A.__webglDepthbuffer[te]=n.createRenderbuffer(),Ge(A.__webglDepthbuffer[te],k,!1);else{const ue=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Ae)}}else{const te=k.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ge(A.__webglDepthbuffer,k,!1);else{const ue=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(k,A,Z){const te=i.get(k);A!==void 0&&fe(te.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ht(k)}function rt(k){const A=k.texture,Z=i.get(k),te=i.get(A);k.addEventListener("dispose",x);const ue=k.textures,Ae=k.isWebGLCubeRenderTarget===!0,Ce=ue.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=A.version,a.memory.textures++),Ae){Z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[ce]=[];for(let ve=0;ve<A.mipmaps.length;ve++)Z.__webglFramebuffer[ce][ve]=n.createFramebuffer()}else Z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)Z.__webglFramebuffer[ce]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ce=0,ve=ue.length;ce<ve;ce++){const Te=i.get(ue[ce]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(k.samples>0&&Kt(k)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ce=0;ce<ue.length;ce++){const ve=ue[ce];Z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);const Te=s.convert(ve.format,ve.colorSpace),Fe=s.convert(ve.type),Ie=_(ve.internalFormat,Te,Fe,ve.normalized,ve.colorSpace,k.isXRRenderTarget===!0),Re=Yt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ie,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(Z.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)fe(Z.__webglFramebuffer[ce][ve],k,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else fe(Z.__webglFramebuffer[ce],k,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);h(A)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ce=0,ve=ue.length;ce<ve;ce++){const Te=ue[ce],Fe=i.get(Te);let Ie=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ie=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Fe.__webglTexture),Xe(Ie,Te),fe(Z.__webglFramebuffer,k,Te,n.COLOR_ATTACHMENT0+ce,Ie,0),h(Te)&&g(Ie)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ce=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),Xe(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)fe(Z.__webglFramebuffer[ve],k,A,n.COLOR_ATTACHMENT0,ce,ve);else fe(Z.__webglFramebuffer,k,A,n.COLOR_ATTACHMENT0,ce,0);h(A)&&g(ce),t.unbindTexture()}k.depthBuffer&&ht(k)}function nt(k){const A=k.textures;for(let Z=0,te=A.length;Z<te;Z++){const ue=A[Z];if(h(ue)){const Ae=w(k),Ce=i.get(ue).__webglTexture;t.bindTexture(Ae,Ce),g(Ae),t.unbindTexture()}}}const At=[],on=[];function Dt(k){if(k.samples>0){if(Kt(k)===!1){const A=k.textures,Z=k.width,te=k.height;let ue=n.COLOR_BUFFER_BIT;const Ae=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(k),ce=A.length>1;if(ce)for(let Te=0;Te<A.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ve=k.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<A.length;Te++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const Fe=i.get(A[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,Z,te,0,0,Z,te,ue,n.NEAREST),o===!0&&(At.length=0,on.length=0,At.push(n.COLOR_ATTACHMENT0+Te),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(At.push(Ae),on.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,on)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Te=0;Te<A.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const Fe=i.get(A[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&o){const A=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Yt(k){return Math.min(r.maxSamples,k.samples)}function Kt(k){const A=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function j(k){const A=a.render.frame;u.get(k)!==A&&(u.set(k,A),k.update())}function Vt(k,A){const Z=k.colorSpace,te=k.format,ue=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Z!==wc&&Z!==Ar&&(It.getTransfer(Z)===Zt?(te!==_i||ue!==ei)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",Z)),A}function Rt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(l.width=k.naturalWidth||k.width,l.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(l.width=k.displayWidth,l.height=k.displayHeight):(l.width=k.width,l.height=k.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=L,this.setTexture2D=oe,this.setTexture2DArray=re,this.setTexture3D=de,this.setTextureCube=ge,this.rebindTextures=Je,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hb(n,e){function t(i,r=Ar){let s;const a=It.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===Gd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===up)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cp)return n.BYTE;if(i===lp)return n.SHORT;if(i===Qo)return n.UNSIGNED_SHORT;if(i===Bd)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===Li)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===fp)return n.ALPHA;if(i===hp)return n.RGB;if(i===_i)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Hd)return n.RED;if(i===$d)return n.RED_INTEGER;if(i===ss)return n.RG;if(i===Wd)return n.RG_INTEGER;if(i===Xd)return n.RGBA_INTEGER;if(i===Za||i===Ja||i===Qa||i===ec)if(a===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Au||i===Cu||i===Ru||i===Pu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Au)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lu||i===Du||i===Iu||i===Uu||i===Nu||i===bc||i===ku)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lu||i===Du)return a===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Iu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uu)return s.COMPRESSED_R11_EAC;if(i===Nu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===bc)return s.COMPRESSED_RG11_EAC;if(i===ku)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fu||i===Ou||i===zu||i===Bu||i===Gu||i===Vu||i===Hu||i===$u||i===Wu||i===Xu||i===qu||i===Yu||i===Ku||i===ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ou)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$u)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ku)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zu||i===Ju||i===Qu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zu)return a===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ju)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ed||i===td||i===Sc||i===nd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ed)return s.COMPRESSED_RED_RGTC1_EXT;if(i===td)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`;class gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $t({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends as{constructor(e,t){super();const i=this;let r=null,s=1,a=null,c="local-floor",o=1,l=null,u=null,p=null,d=null,f=null,v=null;const y=typeof XRWebGLBinding<"u",m=new gb,h={},g=t.getContextAttributes();let w=null,_=null;const S=[],b=[],T=new Qe;let x=null,M=null;const E=new hi;E.viewport=new Qt;const P=new hi;P.viewport=new Qt;const R=[E,P],z=new w1;let N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let me=S[ae];return me===void 0&&(me=new Cl,S[ae]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ae){let me=S[ae];return me===void 0&&(me=new Cl,S[ae]=me),me.getGripSpace()},this.getHand=function(ae){let me=S[ae];return me===void 0&&(me=new Cl,S[ae]=me),me.getHandSpace()};function O(ae){const me=b.indexOf(ae.inputSource);if(me===-1)return;const De=S[me];De!==void 0&&(De.update(ae.inputSource,ae.frame,l||a),De.dispatchEvent({type:ae.type,data:ae.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",oe);for(let ae=0;ae<S.length;ae++){const me=b[ae];me!==null&&(b[ae]=null,S[ae].disconnect(me))}N=null,L=null,m.reset();for(const ae in h)delete h[ae];if(e.setRenderTarget(w),f=null,d=null,p=null,r=null,_=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),M!==null){const ae=M.camera;ae.fov=M.fov,ae.zoom=M.zoom,ae.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,it=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=g.stencil?Qr:mr,it=g.stencil?ea:zi);const Ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ui(d.textureWidth,d.textureHeight,{format:_i,type:ei,depthTexture:new Js(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const De={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,De),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ui(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await r.requestReferenceSpace(c),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(ae){for(let me=0;me<ae.removed.length;me++){const De=ae.removed[me],it=b.indexOf(De);it>=0&&(b[it]=null,S[it].disconnect(De))}for(let me=0;me<ae.added.length;me++){const De=ae.added[me];let it=b.indexOf(De);if(it===-1){for(let Ge=0;Ge<S.length;Ge++)if(Ge>=b.length){b.push(De),it=Ge;break}else if(b[Ge]===null){b[Ge]=De,it=Ge;break}if(it===-1)break}const fe=S[it];fe&&fe.connect(De)}}const re=new D,de=new D;function ge(ae,me,De){re.setFromMatrixPosition(me.matrixWorld),de.setFromMatrixPosition(De.matrixWorld);const it=re.distanceTo(de),fe=me.projectionMatrix.elements,Ge=De.projectionMatrix.elements,Lt=fe[14]/(fe[10]-1),ht=fe[14]/(fe[10]+1),Je=(fe[9]+1)/fe[5],rt=(fe[9]-1)/fe[5],nt=(fe[8]-1)/fe[0],At=(Ge[8]+1)/Ge[0],on=Lt*nt,Dt=Lt*At,Yt=it/(-nt+At),Kt=Yt*-nt;if(me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Kt),ae.translateZ(Yt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),fe[10]===-1)ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const j=Lt+Yt,Vt=ht+Yt,Rt=on-Kt,k=Dt+(it-Kt),A=Je*ht/Vt*j,Z=rt*ht/Vt*j;ae.projectionMatrix.makePerspective(Rt,k,A,Z,j,Vt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Be(ae,me){me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let me=ae.near,De=ae.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(De=m.depthFar)),z.near=P.near=E.near=me,z.far=P.far=E.far=De,(N!==z.near||L!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,L=z.far),z.layers.mask=ae.layers.mask|6,E.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const it=ae.parent,fe=z.cameras;Be(z,it);for(let Ge=0;Ge<fe.length;Ge++)Be(fe[Ge],it);fe.length===2?ge(z,E,P):z.projectionMatrix.copy(E.projectionMatrix),M===null&&ae.isPerspectiveCamera&&(M={camera:ae,fov:ae.fov,zoom:ae.zoom}),_e(ae,z,it)};function _e(ae,me,De){De===null?ae.matrix.copy(me.matrixWorld):(ae.matrix.copy(De.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=na*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return o},this.setFoveation=function(ae){o=ae,d!==null&&(d.fixedFoveation=ae),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(ae){return h[ae]};let et=null;function Xe(ae,me){if(u=me.getViewerPose(l||a),v=me,u!==null){const De=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let it=!1;De.length!==z.cameras.length&&(z.cameras.length=0,it=!0);for(let ht=0;ht<De.length;ht++){const Je=De[ht];let rt=null;if(f!==null)rt=f.getViewport(Je);else{const At=p.getViewSubImage(d,Je);rt=At.viewport,ht===0&&(e.setRenderTargetTextures(_,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(_))}let nt=R[ht];nt===void 0&&(nt=new hi,nt.layers.enable(ht),nt.viewport=new Qt,R[ht]=nt),nt.matrix.fromArray(Je.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Je.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(rt.x,rt.y,rt.width,rt.height),ht===0&&(z.matrix.copy(nt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),it===!0&&z.cameras.push(nt)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){p=i.getBinding();const ht=p.getDepthInformation(De[0]);ht&&ht.isValid&&ht.texture&&m.init(ht,r.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let ht=0;ht<De.length;ht++){const Je=De[ht].camera;if(Je){let rt=h[Je];rt||(rt=new Sp,h[Je]=rt);const nt=p.getCameraImage(Je);rt.sourceTexture=nt}}}}for(let De=0;De<S.length;De++){const it=b[De],fe=S[De];it!==null&&fe!==void 0&&fe.update(it,me,l||a)}et&&et(ae,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const Ve=new Rp;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(ae){et=ae},this.dispose=function(){}}}const xb=new Ut,Np=new ut;Np.set(-1,0,0,0,1,0,0,0,1);function _b(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,wp(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,w,_){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),p(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&f(m,h,_)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&c(m,h)):h.isPointsMaterial?o(m,h,g,w):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ni&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ni&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),w=g.envMap,_=g.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Np),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function c(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function o(m,h,g,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=w*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ni&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yb(n,e,t,i){let r={},s={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,S){const b=S.program;i.uniformBlockBinding(_,b)}function l(_,S){let b=r[_.id];b===void 0&&(m(_),b=u(_),r[_.id]=b,_.addEventListener("dispose",g));const T=S.program;i.updateUBOMapping(_,T);const x=e.render.frame;s[_.id]!==x&&(d(_),s[_.id]=x)}function u(_){const S=p();_.__bindingPointIndex=S;const b=n.createBuffer(),T=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function p(){for(let _=0;_<c;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const S=r[_.id],b=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,M=b.length;x<M;x++){const E=b[x];if(Array.isArray(E))for(let P=0,R=E.length;P<R;P++)f(E[P],x,P,T);else f(E,x,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,b,T){if(y(_,S,b,T)===!0){const x=_.__offset,M=_.value;if(Array.isArray(M)){let E=0;for(let P=0;P<M.length;P++){const R=M[P],z=h(R);v(R,_.__data,E),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(E+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(M,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function v(_,S,b){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,b)}function y(_,S,b,T){const x=_.value,M=S+"_"+b;if(T[M]===void 0)return typeof x=="number"||typeof x=="boolean"?T[M]=x:ArrayBuffer.isView(x)?T[M]=x.slice():T[M]=x.clone(),!0;{const E=T[M];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return T[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function m(_){const S=_.uniforms;let b=0;const T=16;for(let M=0,E=S.length;M<E;M++){const P=Array.isArray(S[M])?S[M]:[S[M]];for(let R=0,z=P.length;R<z;R++){const N=P[R],L=Array.isArray(N.value)?N.value:[N.value];for(let O=0,V=L.length;O<V;O++){const oe=L[O],re=h(oe),de=b%T,ge=de%re.boundary,Be=de+ge;b+=ge,Be!==0&&T-Be<re.storage&&(b+=T-Be),N.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=re.storage}}}const x=b%T;return x>0&&(b+=T-x),_.__size=b,_.__cache={},this}function h(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):st("WebGLRenderer: Unsupported uniform value type.",_),S}function g(_){const S=_.target;S.removeEventListener("dispose",g);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function w(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:o,update:l,dispose:w}}const Mb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function bb(){return Vi===null&&(Vi=new Jd(Mb,16,16,ss,bi),Vi.name="DFG_LUT",Vi.minFilter=gn,Vi.magFilter=gn,Vi.wrapS=qi,Vi.wrapT=qi,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class Sb{constructor(e={}){const{canvas:t=Sv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ei}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const y=f,m=new Set([Xd,Wd,$d]),h=new Set([ei,zi,Qo,ea,Gd,Vd]),g=new Uint32Array(4),w=new Int32Array(4),_=new D;let S=null,b=null;const T=[],x=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1,R=null,z=null,N=null,L=null;this._outputColorSpace=Wn;let O=0,V=0,oe=null,re=-1,de=null;const ge=new Qt,Be=new Qt;let _e=null;const et=new ot(0);let Xe=0,Ve=t.width,ae=t.height,me=1,De=null,it=null;const fe=new Qt(0,0,Ve,ae),Ge=new Qt(0,0,Ve,ae);let Lt=!1;const ht=new Qd;let Je=!1,rt=!1;const nt=new Ut,At=new D,on=new Qt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Kt(){return oe===null?me:1}let j=i;function Vt(C,Y){return t.getContext(C,Y)}let Rt,k,A,Z,te,ue,Ae,Ce,ce,ve,Te,Fe,Ie,Re,Ye,tt,ct,X,Pe,he,Le,Ne,xe;try{const C={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",jt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Un,!1),j===null){const Y="webgl2";if(j=Vt(Y,C),j===null)throw Vt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(C){throw t.removeEventListener("webglcontextlost",jt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),Bt("WebGLRenderer: "+C.message),C}function He(){Rt=new by(j),Rt.init(),Le=new hb(j,Rt),k=new fy(j,Rt,e,Le),A=new db(j,Rt),k.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),z=j.createFramebuffer(),N=j.createFramebuffer(),L=j.createFramebuffer(),Z=new Ty(j),te=new ZM,ue=new fb(j,Rt,A,te,k,Le,Z),Ae=new My(E),Ce=new A1(j),Ne=new uy(j,Ce),ce=new Sy(j,Ce,Z,Ne),ve=new Ay(j,ce,Ce,Ne,Z),X=new Ey(j,k,ue),Ye=new hy(te),Te=new jM(E,Ae,Rt,k,Ne,Ye),Fe=new _b(E,te),Ie=new QM,Re=new sb(Rt),ct=new ly(E,Ae,A,ve,v,o),tt=new ub(E,ve,k),xe=new yb(j,Z,k,A),Pe=new dy(j,Rt,Z),he=new wy(j,Rt,Z),Z.programs=Te.programs,E.capabilities=k,E.extensions=Rt,E.properties=te,E.renderLists=Ie,E.shadowMap=tt,E.state=A,E.info=Z}y!==ei&&(M=new Ry(y,t.width,t.height,c,r,s));const We=new vb(E,j);this.xr=We,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(Ve,ae,!1))},this.getSize=function(C){return C.set(Ve,ae)},this.setSize=function(C,Y,ie=!0){if(We.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=C,ae=Y,t.width=Math.floor(C*me),t.height=Math.floor(Y*me),ie===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(Ve*me,ae*me).floor()},this.setDrawingBufferSize=function(C,Y,ie){Ve=C,ae=Y,me=ie,t.width=Math.floor(C*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(y===ei){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ge)},this.getViewport=function(C){return C.copy(fe)},this.setViewport=function(C,Y,ie,Q){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,Y,ie,Q),A.viewport(ge.copy(fe).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(Ge)},this.setScissor=function(C,Y,ie,Q){C.isVector4?Ge.set(C.x,C.y,C.z,C.w):Ge.set(C,Y,ie,Q),A.scissor(Be.copy(Ge).multiplyScalar(me).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(C){A.setScissorTest(Lt=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){it=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ie=!0){let Q=0;if(C){let ee=!1;if(oe!==null){const F=oe.texture.format;ee=m.has(F)}if(ee){const F=oe.texture.type,H=h.has(F),K=ct.getClearColor(),$=ct.getClearAlpha(),q=K.r,W=K.g,se=K.b;H?(g[0]=q,g[1]=W,g[2]=se,g[3]=$,j.clearBufferuiv(j.COLOR,0,g)):(w[0]=q,w[1]=W,w[2]=se,w[3]=$,j.clearBufferiv(j.COLOR,0,w))}else Q|=j.COLOR_BUFFER_BIT}Y&&(Q|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(Q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&j.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),R=C},this.dispose=function(){t.removeEventListener("webglcontextlost",jt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),ct.dispose(),Ie.dispose(),Re.dispose(),te.dispose(),Ae.dispose(),ve.dispose(),Ne.dispose(),xe.dispose(),Te.dispose(),We.dispose(),We.removeEventListener("sessionstart",hs),We.removeEventListener("sessionend",aa),Qi.stop()};function jt(C){C.preventDefault(),Ac("WebGLRenderer: Context Lost."),P=!0}function Pt(){Ac("WebGLRenderer: Context Restored."),P=!1;const C=Z.autoReset,Y=tt.enabled,ie=tt.autoUpdate,Q=tt.needsUpdate,ee=tt.type;He(),Z.autoReset=C,tt.enabled=Y,tt.autoUpdate=ie,tt.needsUpdate=Q,tt.type=ee}function Un(C){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function jn(C){const Y=C.target;Y.removeEventListener("dispose",jn),cl(Y)}function cl(C){ll(C),te.remove(C)}function ll(C){const Y=te.get(C).programs;Y!==void 0&&(Y.forEach(function(ie){Te.releaseProgram(ie)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ie,Q,ee,F){Y===null&&(Y=Dt);const H=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,K=fl(C,Y,ie,Q,ee);A.setMaterial(Q,H);let $=ie.index,q=1;if(Q.wireframe===!0){if($=ce.getWireframeAttribute(ie),$===void 0)return;q=2}const W=ie.drawRange,se=ie.attributes.position;let ne=W.start*q,ye=(W.start+W.count)*q;F!==null&&(ne=Math.max(ne,F.start*q),ye=Math.min(ye,(F.start+F.count)*q)),$!==null?(ne=Math.max(ne,0),ye=Math.min(ye,$.count)):se!=null&&(ne=Math.max(ne,0),ye=Math.min(ye,se.count));const Ee=ye-ne;if(Ee<0||Ee===1/0)return;Ne.setup(ee,Q,K,ie,$);let Ue,Ke=Pe;if($!==null&&(Ue=Ce.get($),Ke=he,Ke.setIndex(Ue)),ee.isMesh)Q.wireframe===!0?(A.setLineWidth(Q.wireframeLinewidth*Kt()),Ke.setMode(j.LINES)):Ke.setMode(j.TRIANGLES);else if(ee.isLine){let pt=Q.linewidth;pt===void 0&&(pt=1),A.setLineWidth(pt*Kt()),ee.isLineSegments?Ke.setMode(j.LINES):ee.isLineLoop?Ke.setMode(j.LINE_LOOP):Ke.setMode(j.LINE_STRIP)}else ee.isPoints?Ke.setMode(j.POINTS):ee.isSprite&&Ke.setMode(j.TRIANGLES);if(ee.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Ke.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const pt=ee._multiDrawStarts,be=ee._multiDrawCounts,mt=ee._multiDrawCount,qe=$?Ce.get($).bytesPerElement:1,gt=te.get(Q).currentProgram.getUniforms();for(let Ct=0;Ct<mt;Ct++)gt.setValue(j,"_gl_DrawID",Ct),Ke.render(pt[Ct]/qe,be[Ct])}else if(ee.isInstancedMesh)Ke.renderInstances(ne,Ee,ee.count);else if(ie.isInstancedBufferGeometry){const pt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,be=Math.min(ie.instanceCount,pt);Ke.renderInstances(ne,Ee,be)}else Ke.render(ne,Ee)};function zr(C,Y,ie,Q){R!==null&&C.isNodeMaterial&&R.setObject(Q,C),Je===!0&&Ye.setState(C,ie,!1),C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=ni,C.needsUpdate=!0,gs(C,Y,Q),C.side=is,C.needsUpdate=!0,gs(C,Y,Q),C.side=ai):gs(C,Y,Q)}this.compile=function(C,Y,ie=null){ie===null&&(ie=C),R!==null&&R.renderStart(C,Y,ie),b=Re.get(ie),b.init(Y),x.push(b),ie.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),C!==ie&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),b.setupLights(),R!==null&&R.updateLights(b.state.lightsArray),rt=this.localClippingEnabled,Je=Ye.init(this.clippingPlanes,rt),Je===!0&&Ye.setGlobalState(this.clippingPlanes,Y),R!==null&&tt.render(b.state.shadowsArray,ie,Y);const Q=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const F=ee.material;if(F)if(Array.isArray(F))for(let H=0;H<F.length;H++){const K=F[H];zr(K,ie,Y,ee),Q.add(K)}else zr(F,ie,Y,ee),Q.add(F)}),b=x.pop(),R!==null&&R.renderEnd(),Q},this.compileAsync=function(C,Y,ie=null){const Q=this.compile(C,Y,ie);return new Promise(ee=>{function F(){if(Q.forEach(function(H){const $=te.get(H).currentProgram;($===void 0||$.isReady())&&Q.delete(H)}),Q.size===0){ee(C);return}setTimeout(F,10)}Rt.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let Br=null;function ul(C){Br&&Br(C)}function hs(){Qi.stop()}function aa(){Qi.start()}const Qi=new Rp;Qi.setAnimationLoop(ul),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){Br=C,We.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},We.addEventListener("sessionstart",hs),We.addEventListener("sessionend",aa),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;R!==null&&R.renderStart(C,Y);const ie=We.enabled===!0&&We.isPresenting===!0,Q=M!==null&&(oe===null||ie)&&M.begin(E,oe);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Y),Y=We.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,Y,oe),b=Re.get(C,x.length),b.init(Y),b.state.textureUnits=ue.getTextureUnits(),x.push(b),nt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ht.setFromProjectionMatrix(nt,Yi,Y.reversedDepth),rt=this.localClippingEnabled,Je=Ye.init(this.clippingPlanes,rt),S=Ie.get(C,T.length),S.init(),T.push(S),We.enabled===!0&&We.isPresenting===!0){const H=E.xr.getDepthSensingMesh();H!==null&&ps(H,Y,-1/0,E.sortObjects)}ps(C,Y,0,E.sortObjects),S.finish(),R!==null&&R.updateLights(b.state.lightsArray),E.sortObjects===!0&&S.sort(De,it),Yt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Yt&&ct.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ye.beginShadows();const ee=b.state.shadowsArray;if(tt.render(ee,C,Y),Je===!0&&Ye.endShadows(),(Q&&M.hasRenderPass())===!1){const H=S.opaque,K=S.transmissive;if(b.setupLights(),Y.isArrayCamera){const $=Y.cameras;if(K.length>0)for(let q=0,W=$.length;q<W;q++){const se=$[q];ca(H,K,C,se)}Yt&&ct.render(C);for(let q=0,W=$.length;q<W;q++){const se=$[q];oo(S,C,se,se.viewport)}}else K.length>0&&ca(H,K,C,Y),Yt&&ct.render(C),oo(S,C,Y)}oe!==null&&V===0&&(ue.updateMultisampleRenderTarget(oe),ue.updateRenderTargetMipmap(oe)),Q&&M.end(E),C.isScene===!0&&C.onAfterRender(E,C,Y),Ne.resetDefaultState(),re=-1,de=null,x.pop(),x.length>0?(b=x[x.length-1],ue.setTextureUnits(b.state.textureUnits),Je===!0&&Ye.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,R!==null&&R.renderEnd()};function ps(C,Y,ie,Q){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ht)){Q&&on.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nt);const H=ve.update(C),K=C.material;K.visible&&S.push(C,H,K,ie,on.z,null,Y)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ht))){const H=ve.update(C),K=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),on.copy(C.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),on.copy(H.boundingSphere.center)),on.applyMatrix4(C.matrixWorld).applyMatrix4(nt)),Array.isArray(K)){const $=H.groups;for(let q=0,W=$.length;q<W;q++){const se=$[q],ne=K[se.materialIndex];ne&&ne.visible&&S.push(C,H,ne,ie,on.z,se,Y)}}else K.visible&&S.push(C,H,K,ie,on.z,null,Y)}}const F=C.children;for(let H=0,K=F.length;H<K;H++)ps(F[H],Y,ie,Q)}function oo(C,Y,ie,Q){const{opaque:ee,transmissive:F,transparent:H}=C;b.setupLightsView(ie),Je===!0&&Ye.setGlobalState(E.clippingPlanes,ie),Q&&A.viewport(ge.copy(Q)),ee.length>0&&ms(ee,Y,ie),F.length>0&&ms(F,Y,ie),H.length>0&&ms(H,Y,ie),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function ca(C,Y,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Q.id]===void 0){const ne=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Q.id]=new ui(1,1,{generateMipmaps:!0,type:ne?bi:ei,minFilter:Rr,samples:Math.max(4,k.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const F=b.state.transmissionRenderTarget[Q.id],H=Q.viewport||ge;F.setSize(H.z*E.transmissionResolutionScale,H.w*E.transmissionResolutionScale);const K=E.getRenderTarget(),$=E.getActiveCubeFace(),q=E.getActiveMipmapLevel();E.setRenderTarget(F),E.getClearColor(et),Xe=E.getClearAlpha(),Xe<1&&E.setClearColor(16777215,.5),E.clear(),Yt&&ct.render(ie);const W=E.toneMapping;E.toneMapping=Zi;const se=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),b.setupLightsView(Q),Je===!0&&Ye.setGlobalState(E.clippingPlanes,Q),ms(C,ie,Q),ue.updateMultisampleRenderTarget(F),ue.updateRenderTargetMipmap(F),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let ye=0,Ee=Y.length;ye<Ee;ye++){const Ue=Y[ye],{object:Ke,geometry:pt,material:be,group:mt}=Ue;if(be.side===ai&&Ke.layers.test(Q.layers)){const qe=be.side;be.side=ni,be.needsUpdate=!0,la(Ke,ie,Q,pt,be,mt),be.side=qe,be.needsUpdate=!0,ne=!0}}ne===!0&&(ue.updateMultisampleRenderTarget(F),ue.updateRenderTargetMipmap(F))}E.setRenderTarget(K,$,q),E.setClearColor(et,Xe),se!==void 0&&(Q.viewport=se),E.toneMapping=W}function ms(C,Y,ie){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,F=C.length;ee<F;ee++){const H=C[ee],{object:K,geometry:$,group:q}=H;let W=H.material;W.allowOverride===!0&&Q!==null&&(W=Q),K.layers.test(ie.layers)&&la(K,Y,ie,$,W,q)}}function la(C,Y,ie,Q,ee,F){R!==null&&ee.isNodeMaterial&&R.setObject(C,ee),C.onBeforeRender(E,Y,ie,Q,ee,F),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(E,Y,ie,Q,C,F),ee.transparent===!0&&ee.side===ai&&ee.forceSinglePass===!1?(ee.side=ni,ee.needsUpdate=!0,E.renderBufferDirect(ie,Y,Q,ee,C,F),ee.side=is,ee.needsUpdate=!0,E.renderBufferDirect(ie,Y,Q,ee,C,F),ee.side=ai):E.renderBufferDirect(ie,Y,Q,ee,C,F),C.onAfterRender(E,Y,ie,Q,ee,F)}function gs(C,Y,ie){Y.isScene!==!0&&(Y=Dt);const Q=te.get(C),ee=b.state.lights,F=b.state.shadowsArray,H=ee.state.version,K=Te.getParameters(C,ee.state,F,Y,ie,b.state.lightProbeGridArray),$=Te.getProgramCacheKey(K);let q=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;const W=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=Ae.get(C.envMap||Q.environment,W),Q.envMapRotation=Q.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,q===void 0&&(C.addEventListener("dispose",jn),q=new Map,Q.programs=q);let se=q.get($);if(se!==void 0){if(Q.currentProgram===se&&Q.lightsStateVersion===H)return co(C,K),se}else K.uniforms=Te.getUniforms(C),R!==null&&C.isNodeMaterial&&R.build(C,ie,K),C.onBeforeCompile(K,E),se=Te.acquireProgram(K,$),q.set($,se),Q.uniforms=K.uniforms;const ne=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=Ye.uniform),co(C,K),Q.needsLights=vs(C),Q.lightsStateVersion=H,Q.needsLights&&(ne.ambientLightColor.value=ee.state.ambient,ne.lightProbe.value=ee.state.probe,ne.sunLights.value=ee.state.sun,ne.sunLightShadows.value=ee.state.sunShadow,ne.directionalLights.value=ee.state.directional,ne.directionalLightShadows.value=ee.state.directionalShadow,ne.spotLights.value=ee.state.spot,ne.spotLightShadows.value=ee.state.spotShadow,ne.rectAreaLights.value=ee.state.rectArea,ne.ltc_1.value=ee.state.rectAreaLTC1,ne.ltc_2.value=ee.state.rectAreaLTC2,ne.pointLights.value=ee.state.point,ne.pointLightShadows.value=ee.state.pointShadow,ne.hemisphereLights.value=ee.state.hemi,ne.sunShadowMatrix.value=ee.state.sunShadowMatrix,ne.sunShadowCascade.value=ee.state.sunShadowCascade,ne.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ne.spotLightMatrix.value=ee.state.spotLightMatrix,ne.spotLightMap.value=ee.state.spotLightMap,ne.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=b.state.lightProbeGridArray.length>0,Q.currentProgram=se,Q.uniformsList=null,se}function ao(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=nc.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function co(C,Y){const ie=te.get(C);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function dl(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(Y.matrixWorld);for(let ie=0,Q=C.length;ie<Q;ie++){const ee=C[ie];if(ee.texture!==null&&ee.boundingBox.containsPoint(_))return ee}return null}function fl(C,Y,ie,Q,ee){Y.isScene!==!0&&(Y=Dt),ue.resetTextureUnits();const F=Y.fog,H=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,K=oe===null?E.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:It.workingColorSpace,$=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,q=Ae.get(Q.envMap||H,$),W=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,se=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ne=!!ie.morphAttributes.position,ye=!!ie.morphAttributes.normal,Ee=!!ie.morphAttributes.color;let Ue=Zi;Q.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ue=E.toneMapping);const Ke=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,pt=Ke!==void 0?Ke.length:0,be=te.get(Q),mt=b.state.lights;if(Je===!0&&(rt===!0||C!==de)){const Nt=C===de&&Q.id===re;Ye.setState(Q,C,Nt)}let qe=!1;Q.version===be.__version?(be.needsLights&&be.lightsStateVersion!==mt.state.version||be.outputColorSpace!==K||ee.isBatchedMesh&&be.batching===!1||!ee.isBatchedMesh&&be.batching===!0||ee.isBatchedMesh&&be.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&be.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&be.instancing===!1||!ee.isInstancedMesh&&be.instancing===!0||ee.isSkinnedMesh&&be.skinning===!1||!ee.isSkinnedMesh&&be.skinning===!0||ee.isInstancedMesh&&be.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&be.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&be.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&be.instancingMorph===!1&&ee.morphTexture!==null||be.envMap!==q||Q.fog===!0&&be.fog!==F||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ye.numPlanes||be.numIntersection!==Ye.numIntersection)||be.vertexAlphas!==W||be.vertexTangents!==se||be.morphTargets!==ne||be.morphNormals!==ye||be.morphColors!==Ee||be.toneMapping!==Ue||be.morphTargetsCount!==pt||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,be.__version=Q.version);let gt=be.currentProgram;qe===!0&&(gt=gs(Q,Y,ee),R&&Q.isNodeMaterial&&R.onUpdateProgram(Q,gt,be));let Ct=!1,zt=!1,qt=!1;const bt=gt.getUniforms(),en=be.uniforms;if(A.useProgram(gt.program)&&(Ct=!0,zt=!0,qt=!0),Q.id!==re&&(re=Q.id,zt=!0),be.needsLights){const Nt=dl(b.state.lightProbeGridArray,ee);be.lightProbeGrid!==Nt&&(be.lightProbeGrid=Nt,zt=!0)}if(Ct||de!==C){A.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),bt.setValue(j,"projectionMatrix",C.projectionMatrix),bt.setValue(j,"viewMatrix",C.matrixWorldInverse);const mi=bt.map.cameraPosition;mi!==void 0&&mi.setValue(j,At.setFromMatrixPosition(C.matrixWorld)),k.logarithmicDepthBuffer&&bt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&bt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,zt=!0,qt=!0)}if(be.needsLights&&(mt.state.sunShadowMap.length>0&&bt.setValue(j,"sunShadowMap",mt.state.sunShadowMap,ue),mt.state.directionalShadowMap.length>0&&bt.setValue(j,"directionalShadowMap",mt.state.directionalShadowMap,ue),mt.state.spotShadowMap.length>0&&bt.setValue(j,"spotShadowMap",mt.state.spotShadowMap,ue),mt.state.pointShadowMap.length>0&&bt.setValue(j,"pointShadowMap",mt.state.pointShadowMap,ue)),ee.isSkinnedMesh){bt.setOptional(j,ee,"bindMatrix"),bt.setOptional(j,ee,"bindMatrixInverse");const Nt=ee.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),bt.setValue(j,"boneTexture",Nt.boneTexture,ue))}ee.isBatchedMesh&&(bt.setOptional(j,ee,"batchingTexture"),bt.setValue(j,"batchingTexture",ee._matricesTexture,ue),bt.setOptional(j,ee,"batchingIdTexture"),bt.setValue(j,"batchingIdTexture",ee._indirectTexture,ue),bt.setOptional(j,ee,"batchingColorTexture"),ee._colorsTexture!==null&&bt.setValue(j,"batchingColorTexture",ee._colorsTexture,ue));const Vn=ie.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&X.update(ee,ie,gt),(zt||be.receiveShadow!==ee.receiveShadow)&&(be.receiveShadow=ee.receiveShadow,bt.setValue(j,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(en.envMapIntensity.value=Y.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=bb()),zt){if(bt.setValue(j,"toneMappingExposure",E.toneMappingExposure),be.needsLights&&hl(en,qt),F&&Q.fog===!0&&Fe.refreshFogUniforms(en,F),Fe.refreshMaterialUniforms(en,Q,me,ae,b.state.transmissionRenderTarget[C.id]),be.needsLights&&be.lightProbeGrid){const Nt=be.lightProbeGrid;en.probesSH.value=Nt.texture,en.probesMin.value.copy(Nt.boundingBox.min),en.probesMax.value.copy(Nt.boundingBox.max),en.probesResolution.value.copy(Nt.resolution)}nc.upload(j,ao(be),en,ue)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(nc.upload(j,ao(be),en,ue),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&bt.setValue(j,"center",ee.center),bt.setValue(j,"modelViewMatrix",ee.modelViewMatrix),bt.setValue(j,"normalMatrix",ee.normalMatrix),bt.setValue(j,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){const Nt=Q.uniformsGroups;for(let mi=0,er=Nt.length;mi<er;mi++){const I=Nt[mi];xe.update(I,gt),xe.bind(I,gt)}}return gt}function hl(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.sunLights.needsUpdate=Y,C.sunLightShadows.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function vs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(C,Y,ie){const Q=te.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),te.get(C.texture).__webglTexture=Y,te.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ie,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ie=te.get(C);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ie=0){oe=C,O=Y,V=ie;let Q=null,ee=!1,F=!1;if(C){const K=te.get(C);if(K.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(j.FRAMEBUFFER,K.__webglFramebuffer),ge.copy(C.viewport),Be.copy(C.scissor),_e=C.scissorTest,A.viewport(ge),A.scissor(Be),A.setScissorTest(_e),re=-1;return}else if(K.__webglFramebuffer===void 0)ue.setupRenderTarget(C);else if(K.__hasExternalTextures)ue.rebindTextures(C,te.get(C.texture).__webglTexture,te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const W=C.depthTexture;if(K.__boundDepthTexture!==W){if(W!==null&&te.has(W)&&(C.width!==W.image.width||C.height!==W.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(C)}}const $=C.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(F=!0);const q=te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(q[Y])?Q=q[Y][ie]:Q=q[Y],ee=!0):C.samples>0&&ue.useMultisampledRTT(C)===!1?Q=te.get(C).__webglMultisampledFramebuffer:Array.isArray(q)?Q=q[ie]:Q=q,ge.copy(C.viewport),Be.copy(C.scissor),_e=C.scissorTest}else ge.copy(fe).multiplyScalar(me).floor(),Be.copy(Ge).multiplyScalar(me).floor(),_e=Lt;if(ie!==0&&(Q=z),A.bindFramebuffer(j.FRAMEBUFFER,Q)&&A.drawBuffers(C,Q),A.viewport(ge),A.scissor(Be),A.setScissorTest(_e),ee){const K=te.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K.__webglTexture,ie)}else if(F){const K=Y;for(let $=0;$<C.textures.length;$++){const q=te.get(C.textures[$]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$,q.__webglTexture,ie,K)}}else if(C!==null&&ie!==0){const K=te.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,K.__webglTexture,ie)}re=-1};function xs(C){const Y=te.get(C);return(Y.__readFormat!==C.format||Y.__readType!==C.type)&&(Y.__readFormat=C.format,Y.__readType=C.type,Y.__formatReadable=k.textureFormatReadable(C.format),Y.__typeReadable=k.textureTypeReadable(C.type)),Y}this.readRenderTargetPixels=function(C,Y,ie,Q,ee,F,H,K=0){if(!(C&&C.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&H!==void 0&&($=$[H]),$){A.bindFramebuffer(j.FRAMEBUFFER,$);try{const q=C.textures[K],W=q.format,se=q.type;C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+K);const ne=xs(q);if(ne.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ne.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-Q&&ie>=0&&ie<=C.height-ee&&j.readPixels(Y,ie,Q,ee,Le.convert(W),Le.convert(se),F)}finally{const q=oe!==null?te.get(oe).__webglFramebuffer:null;A.bindFramebuffer(j.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ie,Q,ee,F,H,K=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&H!==void 0&&($=$[H]),$)if(Y>=0&&Y<=C.width-Q&&ie>=0&&ie<=C.height-ee){A.bindFramebuffer(j.FRAMEBUFFER,$);const q=C.textures[K],W=q.format,se=q.type;C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+K);const ne=xs(q);if(ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ye),j.bufferData(j.PIXEL_PACK_BUFFER,F.byteLength,j.STREAM_READ),j.readPixels(Y,ie,Q,ee,Le.convert(W),Le.convert(se),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const Ee=oe!==null?te.get(oe).__webglFramebuffer:null;A.bindFramebuffer(j.FRAMEBUFFER,Ee);const Ue=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await wv(j,Ue,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ye),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,F),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(ye),j.deleteSync(Ue),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ie=0){const Q=Math.pow(2,-ie),ee=Math.floor(C.image.width*Q),F=Math.floor(C.image.height*Q),H=Y!==null?Y.x:0,K=Y!==null?Y.y:0;ue.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,ie,0,0,H,K,ee,F),A.unbindTexture()},this.copyTextureToTexture=function(C,Y,ie=null,Q=null,ee=0,F=0){let H,K,$,q,W,se,ne,ye,Ee;const Ue=C.isCompressedTexture?C.mipmaps[F]:C.image;if(ie!==null)H=ie.max.x-ie.min.x,K=ie.max.y-ie.min.y,$=ie.isBox3?ie.max.z-ie.min.z:1,q=ie.min.x,W=ie.min.y,se=ie.isBox3?ie.min.z:0;else{const en=Math.pow(2,-ee);H=Math.floor(Ue.width*en),K=Math.floor(Ue.height*en),C.isDataArrayTexture?$=Ue.depth:C.isData3DTexture?$=Math.floor(Ue.depth*en):$=1,q=0,W=0,se=0}Q!==null?(ne=Q.x,ye=Q.y,Ee=Q.z):(ne=0,ye=0,Ee=0);const Ke=Le.convert(Y.format),pt=Le.convert(Y.type);let be;Y.isData3DTexture?(ue.setTexture3D(Y,0),be=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ue.setTexture2DArray(Y,0),be=j.TEXTURE_2D_ARRAY):(ue.setTexture2D(Y,0),be=j.TEXTURE_2D),A.activeTexture(j.TEXTURE0),A.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),A.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),A.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const mt=A.getParameter(j.UNPACK_ROW_LENGTH),qe=A.getParameter(j.UNPACK_IMAGE_HEIGHT),gt=A.getParameter(j.UNPACK_SKIP_PIXELS),Ct=A.getParameter(j.UNPACK_SKIP_ROWS),zt=A.getParameter(j.UNPACK_SKIP_IMAGES);A.pixelStorei(j.UNPACK_ROW_LENGTH,Ue.width),A.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ue.height),A.pixelStorei(j.UNPACK_SKIP_PIXELS,q),A.pixelStorei(j.UNPACK_SKIP_ROWS,W),A.pixelStorei(j.UNPACK_SKIP_IMAGES,se);const qt=C.isDataArrayTexture||C.isData3DTexture,bt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const en=te.get(C),Vn=te.get(Y),Nt=te.get(en.__renderTarget),mi=te.get(Vn.__renderTarget);A.bindFramebuffer(j.READ_FRAMEBUFFER,Nt.__webglFramebuffer),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let er=0;er<$;er++)qt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,te.get(C).__webglTexture,ee,se+er),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,te.get(Y).__webglTexture,F,Ee+er)),j.blitFramebuffer(q,W,H,K,ne,ye,H,K,j.DEPTH_BUFFER_BIT,j.NEAREST);A.bindFramebuffer(j.READ_FRAMEBUFFER,null),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||te.has(C)){const en=te.get(C),Vn=te.get(Y);A.bindFramebuffer(j.READ_FRAMEBUFFER,N),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,L);for(let Nt=0;Nt<$;Nt++)qt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,en.__webglTexture,ee,se+Nt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,en.__webglTexture,ee),bt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Vn.__webglTexture,F,Ee+Nt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Vn.__webglTexture,F),ee!==0?j.blitFramebuffer(q,W,H,K,ne,ye,H,K,j.COLOR_BUFFER_BIT,j.NEAREST):bt?j.copyTexSubImage3D(be,F,ne,ye,Ee+Nt,q,W,H,K):j.copyTexSubImage2D(be,F,ne,ye,q,W,H,K);A.bindFramebuffer(j.READ_FRAMEBUFFER,null),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else bt?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(be,F,ne,ye,Ee,H,K,$,Ke,pt,Ue.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(be,F,ne,ye,Ee,H,K,$,Ke,Ue.data):j.texSubImage3D(be,F,ne,ye,Ee,H,K,$,Ke,pt,Ue):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,F,ne,ye,H,K,Ke,pt,Ue.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,F,ne,ye,Ue.width,Ue.height,Ke,Ue.data):j.texSubImage2D(j.TEXTURE_2D,F,ne,ye,H,K,Ke,pt,Ue);A.pixelStorei(j.UNPACK_ROW_LENGTH,mt),A.pixelStorei(j.UNPACK_IMAGE_HEIGHT,qe),A.pixelStorei(j.UNPACK_SKIP_PIXELS,gt),A.pixelStorei(j.UNPACK_SKIP_ROWS,Ct),A.pixelStorei(j.UNPACK_SKIP_IMAGES,zt),F===0&&Y.generateMipmaps&&j.generateMipmap(be),A.unbindTexture()},this.initRenderTarget=function(C){te.get(C).__webglFramebuffer===void 0&&ue.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ue.setTextureCube(C,0):C.isData3DTexture?ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ue.setTexture2DArray(C,0):ue.setTexture2D(C,0),A.unbindTexture()},this.resetState=function(){O=0,V=0,oe=null,A.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}function Yh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},c=n[0].morphTargetsRelative,o=new Ht;let l=0;for(let u=0;u<n.length;++u){const p=n[u];let d=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in p.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(c!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in p.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,f,u),l+=f}}if(t){let u=0;const p=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let v=0;v<f.count;++v)p.push(f.getX(v)+u);u+=n[d].attributes.position.count}o.setIndex(p)}for(const u in s){const p=Kh(s[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,p)}for(const u in a){const p=a[u][0].length;if(p!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let d=0;d<p;++d){const f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][d]);const v=Kh(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(v)}}}return o}function Kh(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),c=new hn(a,t,i);let o=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const p=o/t;for(let d=0,f=u.count;d<f;d++)for(let v=0;v<t;v++){const y=u.getComponent(d,v);c.setComponent(d+p,v,y)}}else a.set(u.array,o);o+=u.count*t}return r!==void 0&&(c.gpuType=r),c}function wb(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let a=0;const c=Object.keys(n.attributes),o={},l={},u=[],p=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let g=0,w=c.length;g<w;g++){const _=c[g],S=n.attributes[_];o[_]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);const b=n.morphAttributes[_];b&&(l[_]||(l[_]=[]),b.forEach((T,x)=>{const M=new T.array.constructor(T.count*T.itemSize);l[_][x]=new T.constructor(M,T.itemSize,T.normalized)}))}const f=e*.5,v=Math.log10(1/e),y=Math.pow(10,v),m=f*y;for(let g=0;g<s;g++){const w=i?i.getX(g):g;let _="";for(let S=0,b=c.length;S<b;S++){const T=c[S],x=n.getAttribute(T),M=x.itemSize;for(let E=0;E<M;E++)_+=`${Math.trunc(x[p[E]](w)*y+m)},`}if(_ in t)u.push(t[_]);else{for(let S=0,b=c.length;S<b;S++){const T=c[S],x=n.getAttribute(T),M=n.morphAttributes[T],E=x.itemSize,P=o[T],R=l[T];for(let z=0;z<E;z++){const N=p[z],L=d[z];if(P[L](a,x[N](w)),M)for(let O=0,V=M.length;O<V;O++)R[O][L](a,M[O][N](w))}}t[_]=a,u.push(a),a++}}const h=n.clone();for(const g in n.attributes){const w=o[g];if(h.setAttribute(g,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),g in l)for(let _=0;_<l[g].length;_++){const S=l[g][_];h.morphAttributes[g][_]=new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return h.setIndex(u),h}const Ui=`#include <common>
#include <logdepthbuf_pars_vertex>`,Ni="#include <logdepthbuf_vertex>",ki="#include <logdepthbuf_pars_fragment>",Fi="#include <logdepthbuf_fragment>",pr=`
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
`,Go=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function Tb(n){const e=new Ht;e.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const t=new Ot(e);t.frustumCulled=!1;const i=new qc;i.add(t);const r=new jc,s=n.extensions,a=s.has("EXT_color_buffer_float")||s.has("EXT_color_buffer_half_float")?bi:ei,c={type:a,depthBuffer:!1,minFilter:gn,magFilter:gn};let o=null;const l=(M,E)=>new ui(M,E,{type:a,samples:g,depthBuffer:!0,depthTexture:new Js(M,E,zi)}),u=[],p=6,d=()=>({value:new Qe}),f=new $t({uniforms:{tSrc:{value:null},uTexel:d(),uPrefilter:{value:0},uThreshold:{value:1.3},uKnee:{value:.2}},vertexShader:Go,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1}),v=new $t({uniforms:{tSrc:{value:null},uTexel:d(),uRadius:{value:1}},vertexShader:Go,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
      void main() {
        vec3 col = s(vec2(0)) * 4.0 + (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.0
          + s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
        gl_FragColor = vec4(col / 16.0, 1.0);
      }`,blending:zn,depthTest:!1,depthWrite:!1}),y={pos:new Qe(.5,.5),vis:0,color:new ot("#ffe2b0")},m=new $t({uniforms:{tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:6e3},uFocus:{value:100},uDof:{value:0},tBloom:{value:null},uBloom:{value:.17},uExposure:{value:1},uTime:{value:0},uAspect:{value:1},uSun:{value:y.pos},uSunVis:{value:0},uSunColor:{value:y.color},uTexel:d(),uCA:{value:1},uGrain:{value:1}},vertexShader:Go,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1});let h=new Qe(1,1),g=4;function w(M,E,P){const R=Math.max(1,Math.round(M*P)),z=Math.max(1,Math.round(E*P));h.set(R,z),o?o.setSize(R,z):o=l(R,z);let N=Math.max(1,R>>1),L=Math.max(1,z>>1);for(let O=0;O<p;O++)u[O]?u[O].setSize(N,L):u[O]=new ui(N,L,c),N=Math.max(1,N>>1),L=Math.max(1,L>>1);m.uniforms.uAspect.value=M/E}function _(M){M!==g&&(g=M,o&&(o.dispose(),o=l(h.x,h.y)))}function S(M,E){t.material=M,n.setRenderTarget(E),n.render(i,r)}function b(M,E,P){m.uniforms.uNear.value=E.near,m.uniforms.uFar.value=E.far,n.setRenderTarget(o),n.clear(),n.render(M,E);let R=o.texture,z=h.x,N=h.y;for(let O=0;O<T;O++)f.uniforms.tSrc.value=R,f.uniforms.uTexel.value.set(1/z,1/N),f.uniforms.uPrefilter.value=O===0?1:0,S(f,u[O]),R=u[O].texture,z=u[O].width,N=u[O].height;for(let O=T-2;O>=0;O--)v.uniforms.tSrc.value=u[O+1].texture,v.uniforms.uTexel.value.set(1/u[O+1].width,1/u[O+1].height),n.autoClear=!1,S(v,u[O]),n.autoClear=!0;const L=m.uniforms;L.tScene.value=o.texture,L.tDepth.value=o.depthTexture,L.uTexel.value.set(1/h.x,1/h.y),L.tBloom.value=u[0].texture,L.uTime.value=P,L.uSunVis.value=y.vis,S(m,null)}let T=p;function x(M){T=M==="high"?p:4}return{setSize:w,setSamples:_,setLevel:x,render:b,flare:y,uniforms:m.uniforms}}const Va=[[[.1,.45,.55],[.55,.12,.4]],[[.65,.3,.08],[.35,.06,.08]],[[.2,.3,.75],[.45,.15,.6]],[[.15,.5,.4],[.6,.45,.15]],[[.6,.2,.25],[.15,.25,.6]],[[.4,.55,.7],[.25,.1,.35]]],Eb=`
${pr}
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
}`;function Ab(n,e){const t=e==="high"?1024:512,i=n.extensions,r=i.has("EXT_color_buffer_float")||i.has("EXT_color_buffer_half_float")?bi:ei,s=new af(t,{type:r,generateMipmaps:!1,minFilter:gn,magFilter:gn}),a=new Cp(.1,100,s),c=new qc,o={uPole:{value:new D},uNebDir:{value:[new D,new D,new D]},uNebA:{value:[new D,new D,new D]},uNebB:{value:[new D,new D,new D]},uNebSize:{value:[0,0,0]},uGal:{value:[new D,new D,new D]},uSeed:{value:0},uRes:{value:t}};c.add(new Ot(new Bi(10,64,32),new $t({uniforms:o,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:Eb,side:ni,depthWrite:!1})));const l=new sd(n);let u=null,p=null;const d=e==="high"?9e3:5e3,f=new Ht,v=new Float32Array(d*3),y=new Float32Array(d*3),m=new Float32Array(d);f.setAttribute("position",new hn(v,3)),f.setAttribute("color",new hn(y,3)),f.setAttribute("size",new hn(m,1));const h=new $t({uniforms:{uT:{value:0},uPR:{value:1}},vertexShader:`
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
      }`,blending:zn,depthTest:!1,depthWrite:!1}),g=new tf(f,h);g.frustumCulled=!1,g.renderOrder=-100;function w(_=1){if(p===_)return;p=_;const S=Mi(_*7919+13),b=()=>{const R=S()*2-1,z=S()*Math.PI*2,N=Math.sqrt(1-R*R);return new D(Math.cos(z)*N,R,Math.sin(z)*N)};o.uPole.value.set(.3+S()*.4,.75+S()*.2,.3-S()*.6).normalize();const T=Va[Math.floor(S()*Va.length)],x=Va[Math.floor(S()*Va.length)],M=1;for(let R=0;R<3;R++){const z=R===1?x:T,N=S()<.4;o.uNebDir.value[R].copy(b()),o.uNebA.value[R].fromArray(N?z[1]:z[0]),o.uNebB.value[R].fromArray(N?z[0]:z[1]),o.uNebSize.value[R]=R<M?.3+S()*.2:0,o.uGal.value[R].copy(b()).multiplyScalar(.6+S()*1.2)}o.uSeed.value=Math.floor(S()*1e3),a.update(n,c),u&&u.dispose(),u=l.fromCubemap(s.texture);const E=o.uPole.value,P=new D;for(let R=0;R<d;R++){P.copy(b()),S()<.5&&P.addScaledVector(E,-P.dot(E)*(.75+S()*.25)).normalize(),v.set([P.x,P.y,P.z],R*3);const z=S()**7,N=S(),L=N<.18?[.7,.82,1]:N<.75?[1,.97,.93]:N<.94?[1,.84,.62]:[1,.62,.48],O=.12+S()*.12+z*3.5;y.set([L[0]*O,L[1]*O,L[2]*O],R*3),m[R]=z*2.2}f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0,f.attributes.size.needsUpdate=!0}return{stars:g,bake:w,get background(){return s.texture},get env(){return u?u.texture:null},update(_,S){h.uniforms.uT.value=_,h.uniforms.uPR.value=S}}}function jh(n,e){const t=new Fn,i={value:0},r=e==="high",s=new Ot(new Bi(n,96,64),new $t({uniforms:{uT:i,uTint:{value:new ot(1,1,1)}},vertexShader:`${Ui}
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
          ${Ni}
        }`,fragmentShader:`${ki}
        ${pr}
        uniform float uT; uniform vec3 uTint;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          ${Fi}
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
        }`}));t.add(s);const a=new Ot(new ro(2,2),new $t({uniforms:{uT:i,uR:{value:n},uTint:s.material.uniforms.uTint},vertexShader:`${Ui}
        uniform float uR; varying vec2 vXY;
        void main() {
          float s = length(modelMatrix[0].xyz) * uR * 2.2;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 2.2; // in star radii
          gl_Position = projectionMatrix * mv;
          ${Ni}
        }`,fragmentShader:`${ki}
        ${pr}
        uniform float uT; uniform vec3 uTint; varying vec2 vXY;
        void main() {
          ${Fi}
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
        }`,blending:zn,transparent:!0,depthWrite:!1}));a.frustumCulled=!1,t.add(a);const c=[],o=d=>new $t({uniforms:{uT:i,uA:{value:0},uC:{value:new ot().setHSL(d,1,.55)},uTint:s.material.uniforms.uTint},vertexShader:`${Ui}
      varying vec2 vUv; varying float vRim;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vRim = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
        ${Ni}
      }`,fragmentShader:`${ki}
      ${pr}
      uniform float uT, uA; uniform vec3 uC, uTint; varying vec2 vUv; varying float vRim;
      void main() {
        ${Fi}
        float flow = snoise(vec3(vUv.x * 14.0 - uT * 0.6, vUv.y * 3.0, uT * 0.1)) * 0.5 + 0.5;
        float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float k = uA * (0.35 + flow) * (0.4 + 0.6 * vRim) * (0.5 + ends * 0.5);
        gl_FragColor = vec4(uC * uTint * k * 2.2, 1.0);
      }`,blending:zn,transparent:!0,depthWrite:!1,side:ai});{const d=Mi(7),f=new D(0,1,0);for(let v=0;v<9;v++){const y=.7+d()*1.3,m=new Ot(new Di(y,.07+d()*.08,8,40,Math.PI),o(.03+d()*.05)),h=()=>{const g=new D().randomDirection();m.position.copy(g).multiplyScalar(n*.97),m.quaternion.setFromUnitVectors(f,g),m.rotateY(Math.random()*Math.PI)};h(),c.push({m,place:h,phase:d()*40,period:25+d()*30,peak:.5+d()*.4,lastU:0}),t.add(m)}}const l=Cb(),u=[];for(const[d,f,v]of[[15,"#ffc080",.22],[28,"#ff9a50",.09],[60,"#ff7a30",.03]]){const y=new tc(new Bo({map:l,color:f,opacity:v,blending:zn,depthWrite:!1,transparent:!0}));y.scale.setScalar(d),y.userData.base=d,u.push(y),t.add(y)}function p(d){i.value=d,u.forEach((f,v)=>f.scale.setScalar(f.userData.base*(1+.03*Math.sin(d*(.5+v*.23)+v))));for(const f of c){const v=(d+f.phase)%f.period/f.period;v<f.lastU&&f.place(),f.lastU=v,f.m.material.uniforms.uA.value=Math.sin(v*Math.PI)**2*f.peak,f.m.scale.setScalar(.6+v*.6)}}return{group:t,update:p,tint:s.material.uniforms.uTint.value}}function Cb(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.5)"),t.addColorStop(.5,"rgba(255,255,255,0.1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new nf(n);return i.colorSpace=Wn,i}const kp={value:800},pe=0,le=1,Ze=2,xn=3,xi=4,Wi=5,ln=6,Zh=7,Jh=8,Rb=9;let wr=null;function Pb(){if(wr)return wr;const n=256,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=Mi(17);t.fillStyle="#d8d8d8",t.fillRect(0,0,n,n);const r=(s,a,c,o,l)=>{if(l>4||c<18||o<18||l>1&&i()<.18){const u=196+i()*52|0;t.fillStyle=`rgb(${u},${u},${u+2})`,t.fillRect(s+1,a+1,c-2,o-2),t.strokeStyle="rgba(30,34,40,0.6)",t.lineWidth=1,t.strokeRect(s+.5,a+.5,c-1,o-1),t.strokeStyle="rgba(255,255,255,0.25)",t.beginPath(),t.moveTo(s+1.5,a+o-1.5),t.lineTo(s+1.5,a+1.5),t.lineTo(s+c-1.5,a+1.5),t.stroke();const p=i();if(p<.15)t.fillStyle="rgba(40,44,52,0.45)",t.fillRect(s+c*.3,a+o*.3,c*.3,o*.25);else if(p<.25){t.fillStyle="rgba(30,32,36,0.5)";for(let d=0;d<5;d++)t.fillRect(s+3,a+3+d*3,c*.4,1)}else if(p<.33){t.fillStyle="rgba(30,30,30,0.45)";for(let d=3;d<c-3;d+=4)t.fillRect(s+d,a+2,1,1),t.fillRect(s+d,a+o-3,1,1)}else if(p<.36){t.save(),t.beginPath(),t.rect(s+2,a+o-7,c-4,5),t.clip();for(let d=-10;d<c;d+=6)t.fillStyle="rgba(190,140,30,0.7)",t.beginPath(),t.moveTo(s+d,a+o),t.lineTo(s+d+3,a+o),t.lineTo(s+d+8,a+o-8),t.lineTo(s+d+5,a+o-8),t.fill();t.restore()}return}if(c>o){const u=c*(.3+i()*.4)|0;r(s,a,u,o,l+1),r(s+u,a,c-u,o,l+1)}else{const u=o*(.3+i()*.4)|0;r(s,a,c,u,l+1),r(s,a+u,c,o-u,l+1)}};r(0,0,n,n,0);for(let s=0;s<90;s++)t.fillStyle=`rgba(20,20,26,${.03+i()*.06})`,t.fillRect(i()*n,i()*n,1+i()*14,1);for(let s=0;s<1200;s++)t.fillStyle=i()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",t.fillRect(i()*n,i()*n,1,1);return wr=new nf(e),wr.colorSpace=Wn,wr.wrapS=wr.wrapT=Jo,wr.anisotropy=4,wr}const Ha=new D(0,1,0);function cn(n){const e=[],t=Mi(n),i=Math.PI/2,r=(a,c,o=1)=>(a.userData.kind=c,a.userData.tint=o,e.push(a),a),s={r:t,add:(a,c=pe,o=1)=>r(a,c,o),box:(a,c,o,l=0,u=0,p=0,d=pe,f)=>r(new Sn(a,c,o).translate(l,u,p),d,f),cyl:(a,c,o,l,u=pe,p=12,d=0,f=0,v)=>r(new ft(a,c,o,p).rotateX(i).translate(d,f,l),u,v),oct:(a,c,o,l,u=1,p=0,d=0,f=pe,v)=>r(new ft(.5*u,.5,o,8).rotateY(Math.PI/8).rotateX(i).scale(a,c,1).translate(p,d,l),f,v),sphere:(a,c,o,l,u=pe,p,d=10)=>r(new Bi(a,d,Math.max(6,d*.6|0)).translate(c,o,l),u,p),tank:(a,c,o,l,u,p=pe,d)=>r(new rf(a,c,2,8).rotateX(i).translate(o,l,u),p,d),boom:(a,c,o,l,u,p=.004,d=le,f)=>{const v=new D(...l).normalize(),y=new Sn(p,u,p).translate(0,u/2,0);return y.applyQuaternion(new qn().setFromUnitVectors(Ha,v)).translate(a,c,o),r(y,d,f),[a+v.x*u,c+v.y*u,o+v.z*u]},dish:(a,c,o,l,u,p=pe)=>{const d=new D(...u).normalize(),f=new qn().setFromUnitVectors(Ha,d);r(new ft(a,a*.14,a*.32,18).translate(0,a*.16,0).applyQuaternion(f).translate(c,o,l),p,1.05),s.boom(c,o,l,u,a*.75,Math.max(.002,a*.06))},radiator:(a,c,o,l,u,p,d=3,f=.003,v=Jh)=>{const y=u*.035,m=(u-y*(d-1))/d;for(let g=0;g<d;g++){const w=o-u/2+m/2+g*(m+y);r(new Sn(l,f,m).translate(l/2,0,0).rotateZ(p).translate(a,c,w),v,(v===Jh?.92:.55)+t()*.14),s.strut(a+Math.cos(p)*l,c+Math.sin(p)*l,w-m/2,a+Math.cos(p)*l,c+Math.sin(p)*l,w+m/2,f*1.8,le,.7)}if(s.cyl(f*1.5,f*1.5,u*1.04,o,pe,6,a,c,.75),Math.hypot(a,c)>1e-4)for(const g of[-.42,.42])s.pipe(a,c,o+g*u,a*.55,c*.55,o+g*u*1.1,f*.9,le);return[a+Math.cos(p)*l,c+Math.sin(p)*l]},strut:(a,c,o,l,u,p,d=.003,f=le,v)=>{const y=new D(l-a,u-c,p-o),m=y.length();if(m<1e-6)return;const h=new ft(d*.62,d*.62,m,3,1,!0).translate(0,m/2,0);h.applyQuaternion(new qn().setFromUnitVectors(Ha,y.normalize())).translate(a,c,o),r(h,f,v)},pipe:(a,c,o,l,u,p,d=.0022,f=pe)=>{const v=new D(l-a,u-c,p-o),y=v.length();if(y<1e-6)return;const m=new ft(d,d,y,4,1,!0).translate(0,y/2,0);m.applyQuaternion(new qn().setFromUnitVectors(Ha,v.normalize())).translate(a,c,o),r(m,f,.8)},truss3:(a,c,o,l,u,p,d=.004,f=0,v=le)=>{const y=[0,1,2].map(h=>{const g=f+Math.PI/2+h*2*Math.PI/3;return[a+Math.cos(g)*u,c+Math.sin(g)*u]});for(const[h,g]of y)s.strut(h,g,o,h,g,l,d,v);const m=(l-o)/p;for(let h=0;h<=p;h++){const g=o+h*m;for(let w=0;w<3;w++)s.strut(y[w][0],y[w][1],g,y[(w+1)%3][0],y[(w+1)%3][1],g,d*.8,v);if(h===p)break;for(let w=0;w<3;w++){const[_,S]=h%2?[y[w],y[(w+1)%3]]:[y[(w+1)%3],y[w]];s.strut(_[0],_[1],g,S[0],S[1],g+m,d*.7,v,.85)}}},frame:(a,c,o,l,u,p,d=.003,f=le)=>{const v=l-a/2,y=l+a/2,m=u-c/2,h=u+c/2,g=p-o/2,w=p+o/2;for(const _ of[m,h])for(const S of[g,w])s.strut(v,_,S,y,_,S,d,f);for(const _ of[v,y])for(const S of[g,w])s.strut(_,m,S,_,h,S,d,f);for(const _ of[v,y])for(const S of[m,h])s.strut(_,S,g,_,S,w,d,f)},strapped:(a,c,o,l,u,p=!1,d=1)=>{s.tank(a,c,o,l,u,pe,d);const f=(v,y,m,h,g)=>r(new ft(v,v,y,10,1,!0).rotateX(i).translate(o,l,m),h,g);for(const v of[-.32,.32])f(a*1.06,a*.16,u+v*c,le,.8);p&&f(a*1.04,c*.3,u,Ze,1)},collar:(a,c,o=0,l=0,u=1)=>{s.cyl(a*.85,a*.85,.014,c,pe,12,o,l,.9),s.cyl(a*1.25,a*1.25,.004,c+u*.007,le,14,o,l)},engine:(a,c,o,l,u,p=6)=>{s.bell(a,c,o);for(let d=0;d<p;d++){const f=d/p*Math.PI*2+.3;s.strut(Math.cos(f)*l,Math.sin(f)*l,u,Math.cos(f)*a*.5,Math.sin(f)*a*.5,c-o*.12,.004,le,.8)}s.cyl(l*1.05,l*1.05,.008,u,le,14)},solar:(a,c,o,l,u,p,d=.003)=>{r(new Sn(l,d,u).translate(l/2,0,0).rotateZ(p).translate(a,c,o),Rb,1),r(new Sn(l,d*1.4,d*1.4).translate(l/2,0,0).rotateZ(p).translate(a,c,o),le,.7),r(new Sn(d*1.4,d*1.4,u).translate(l,0,0).rotateZ(p).translate(a,c,o),le,.7)},truss:(a,c,o,l,u,p,d=.004,f=le)=>{const v=(l-o)/p;for(const y of[-1,1])for(const m of[-1,1])s.strut(a+y*u/2,c+m*u/2,o,a+y*u/2,c+m*u/2,l,d,f);for(let y=0;y<=p;y++){const m=o+y*v;for(const g of[-1,1])s.strut(a-u/2,c+g*u/2,m,a+u/2,c+g*u/2,m,d,f),s.strut(a+g*u/2,c-u/2,m,a+g*u/2,c+u/2,m,d,f);if(y===p)break;const h=y%2?1:-1;for(const g of[-1,1])s.strut(a+g*u/2,c-h*g*u/2,m,a+g*u/2,c+h*g*u/2,m+v,d*.8,f,.85),s.strut(a-h*g*u/2,c+g*u/2,m,a+h*g*u/2,c+g*u/2,m+v,d*.8,f,.85)}},shield:(a,c)=>r(new ft(a,a*.62,.014,18).rotateX(i).translate(0,0,c),le,.75),turret:(a,c,o,l=1,u=1)=>{s.cyl(.017*u,.02*u,.01*u,o,le,10,a,c),s.box(.026*u,.012*u*l,.03*u,a,c+.008*u*l,o,pe,.85);for(const p of[-.005,.005])s.box(.004*u,.004*u,.06*u,a+p*u,c+.01*u*l,o+.04*u,le,.6)},cells:(a,c,o,l,u,p=.011)=>{for(let d=0;d<l;d++)for(let f=0;f<u;f++)s.box(p*.72,.002,p*.72,a+(d-(l-1)/2)*p,c,o+(f-(u-1)/2)*p,le,.45+t()*.3)},rcs:(a,c,o,l,u)=>{s.box(.011,.011,.014,a,c,o,le,.8),s.box(.004,.004,.004,a+l*.0075,c+u*.0075,o,le,.5),s.box(.004,.004,.004,a,c,o+.009,le,.5)},hoop:(a,c,o,l,u=0,p=0,d=0,f=.004,v=pe)=>{for(let y=0;y<l;y++){const m=y/l*Math.PI*2;s.add(new Sn(c,2*Math.PI*a/l*1.02,o).rotateZ(m).translate(Math.cos(m)*a,Math.sin(m)*a,u),y%9===4?Ze:v,.9+t()*.2),f&&y%2===0&&s.add(new Sn(f*.5,2*Math.PI*a/l*.55,o*.3).rotateZ(m).translate(Math.cos(m)*(a-c/2-f*.2),Math.sin(m)*(a-c/2-f*.2),u+(t()-.5)*o*.4),xn)}for(let y=0;y<p;y++){const m=y/p*Math.PI*2+.3;s.add(new ft(o*.12,o*.12,a-c/2-d,8).translate(0,d+(a-c/2-d)/2,0).rotateZ(m).translate(0,0,u),le)}},bell:(a,c,o=.16)=>{const l=[];for(let u=0;u<=8;u++){const p=u/8;l.push(new Qe(a*(.42+.58*Math.pow(p,1.6)),-p*o))}r(new Dc(l,20).rotateX(-i).translate(0,0,c),le,.7),r(new ft(a*.4,a*.4,.004,16).rotateX(i).translate(0,0,c-.012),Zh),s.nozzle===void 0&&(s.nozzle=c-o-.01)},bell2:(a,c,o,l,u=.05)=>{const p=[];for(let d=0;d<=6;d++){const f=d/6;p.push(new Qe(a*(.45+.55*Math.pow(f,1.5)),-f*u))}r(new Dc(p,12).rotateX(-i).translate(c,o,l),le,.65)},greeble:(a,c,o,l,u,p,d,f="tbs")=>{for(let v=0;v<d;v++){const y=f[Math.floor(t()*f.length)],m=(.1+t()*.25)*a,h=(.08+t()*.3)*o,g=.004+t()*.012,w=l+(t()-.5)*(a-m),_=p+(t()-.5)*(o-h),S=t()<.6?le:pe;if(y==="t")s.box(m,g,h,w,u+c/2+g/2,_,S);else if(y==="b")s.box(m,g,h,w,u-c/2-g/2,_,S);else{const b=t()<.5?-1:1,T=u+(t()-.5)*(c-m*.6);s.box(g,Math.min(m,c*.4),h,l+b*(a/2+g/2),T,_,S)}}},pdc:(a,c,o,l=1)=>{s.cyl(.011,.013,.008,o,le,8,a,c),s.box(.014,.01*l,.014,a,c+.006*l,o,le,.9),s.box(.003,.003,.03,a-.003,c+.009*l,o+.016,le,.6),s.box(.003,.003,.03,a+.003,c+.009*l,o+.016,le,.6)},light:(a,c,o,l,u=.008)=>s.box(u,u,u,a,c,o,l),windows:(a,c,o,l,u,p=[-1,1])=>{for(let d=0;d<u;d++){const f=o+(l-o)*d/Math.max(1,u-1);for(const v of p)s.box(.002,.006,.01,v*a,c,f,xn)}},build(a=1.35,c=7,o=0){const l=[],u=[];for(const d of e){const f=d.index?d.toNonIndexed():d;f.deleteAttribute("uv");const v=f.attributes.position.count,y=new Float32Array(v).fill(d.userData.kind),m=new Float32Array(v).fill(d.userData.tint*(.9+t()*.2));f.setAttribute("kind",new hn(y,1)),f.setAttribute("tint",new hn(m,1)),f.computeVertexNormals();const h=f.attributes.position,g=f.attributes.normal,w=new Float32Array(v*2);for(let _=0;_<v;_++){const S=Math.abs(g.getX(_)),b=Math.abs(g.getY(_)),T=Math.abs(g.getZ(_)),x=h.getX(_),M=h.getY(_),E=h.getZ(_);S>=b&&S>=T?(w[_*2]=E*c,w[_*2+1]=M*c):b>=T?(w[_*2]=x*c,w[_*2+1]=E*c):(w[_*2]=x*c,w[_*2+1]=M*c)}if(f.setAttribute("uv",new hn(w,2)),l.push(f),o){f.computeBoundingSphere();const _=d.userData.kind;(f.boundingSphere.radius>=o||_>=xn&&_<=Zh)&&u.push(f)}}const p=Yh(l);if(p.scale(a,a,1),p.computeBoundingSphere(),p.userData.nozzle=s.nozzle??0,o){const d=Yh(u);d.scale(a,a,1),d.computeBoundingSphere(),p.userData.coarse=d}return p}};return s}const So=.04;function Lb(){const n=cn(11);n.tank(.034,.07,0,0,.33,pe,1.05),n.cyl(.036,.036,.034,.325,Ze,14),n.collar(.016,.39),n.box(.03,.006,.004,0,.018,.372,xn),n.box(.02,.003,.02,0,.036,.31,le),n.truss3(0,0,-.205,.29,.036,7,.0045),n.strapped(.021,.08,.04,-.012,.13,!0),n.strapped(.021,.08,-.038,-.012,.06),n.strapped(.018,.06,0,.05,-.04,!1,.95),n.pipe(.04,-.012,.08,.012,-.016,-.2),n.pipe(-.038,-.012,.01,-.012,-.016,-.2),n.pipe(0,.05,-.08,0,.02,-.2),n.shield(.046,-.21),n.cyl(.032,.038,.05,-.24,le,12),n.engine(.05,-.27,.12,.036,-.262),n.radiator(.03,.018,-.07,.05,.24,.45,6),n.radiator(-.03,.018,-.07,.05,.24,Math.PI-.45,6);for(const R of[-1,1])n.boom(0,0,.29,[R,0,0],.05,.004),n.rcs(R*.05,0,.29,R,0),n.boom(0,0,-.2,[R,0,0],.05,.004),n.rcs(R*.05,0,-.2,R,0);n.light(-.055,0,.29,xi),n.light(.055,0,.29,Wi),n.light(0,.04,-.03,ln);const e=n.build(1.35,7,So),t=cn(23);t.cyl(.064,.064,.14,.2,pe,18),t.cyl(.05,.064,.03,.285,pe,18),t.cyl(.066,.066,.05,.19,Ze,18),t.collar(.022,.305);for(let R=0;R<6;R++){const z=R/6*Math.PI*2+.5;t.box(.012,.005,.005,Math.cos(z)*.064,Math.sin(z)*.064,.245,xn)}t.box(.022,.003,.022,0,.066,.15,le),t.box(.003,.022,.022,.066,0,.25,le),t.oct(.15,.15,.024,.118,1,0,0,le,.8),t.greeble(.15,.15,.024,0,0,.118,8,"tb"),t.cyl(.018,.018,.17,.02,le,8);for(let R=0;R<6;R++){const z=R/6*Math.PI*2+.26,N=Math.cos(z)*.056,L=Math.sin(z)*.056;t.strapped(.025,.065,N,L,.035,R%3===0),t.pipe(N*.6,L*.6,-.01,Math.cos(z)*.02,Math.sin(z)*.02,-.07)}t.shield(.052,-.075),t.cyl(.04,.044,.05,-.105,le,12),t.engine(.056,-.135,.11,.046,-.128);for(const R of[.6,2.7,4.6])t.radiator(Math.cos(R)*.042,Math.sin(R)*.042,-.105,.05,.05,R,2,.003,le);t.pdc(0,.066,.24),t.sphere(.012,-.045,.045,.272,le,.6,10);for(const R of[.8,2.35,3.9,5.5])t.rcs(Math.cos(R)*.07,Math.sin(R)*.07,.26,Math.cos(R),Math.sin(R));for(const R of[0,Math.PI])t.rcs(Math.cos(R)*.085,Math.sin(R)*.085,.035,Math.cos(R),0);t.light(-.066,0,.2,xi),t.light(.066,0,.2,Wi),t.light(0,0,.316,ln);const i=t.build(1.35,7,So),r=cn(37);r.truss(0,0,-.17,.3,.03,6),r.cyl(.028,.028,.07,.31,pe,12,.032,.026),r.cyl(.03,.03,.02,.3,Ze,12,.032,.026),r.collar(.014,.352,.032,.026),r.box(.02,.005,.004,.032,.04,.346,xn),r.strut(.015,.015,.29,.032,.026,.29,.005);const s=[[.21,[[.05,0,.03,.08,!0],[-.045,.018,.027,.08],[0,.052,.024,.07]]],[.07,[[.056,.016,.035,.1],[-.052,-.02,.035,.1,!0],[0,-.056,.03,.09],[.004,.056,.03,.09]]]];for(const[R,z]of s){for(const[N,L,O,V,oe]of z)r.strapped(O,V,N,L,R,!!oe),r.strut(N*.4,L*.4,R,N*.75,L*.75,R,.005);r.frame(.15,.15,.012,0,0,R-.05,.004)}r.sphere(.042,.044,.004,-.075,pe,.95,10),r.sphere(.036,-.038,.03,-.085,pe,1.02,10),r.cyl(.044,.044,.012,-.075,Ze,12,.044,.004),r.frame(.07,.06,.08,-.04,-.045,-.06,.003),r.pipe(.044,.004,-.115,.01,0,-.17),r.pipe(-.038,.03,-.12,-.01,.01,-.17),r.shield(.05,-.175),r.cyl(.036,.042,.05,-.205,le,12),r.engine(.05,-.235,.12,.04,-.228),r.radiator(.022,.022,-.205,.06,.07,.9,2),r.rcs(.05,0,.29,1,0),r.rcs(-.025,-.02,.29,-1,0),r.rcs(.03,.03,-.19,1,0),r.rcs(-.03,-.03,-.19,-1,0),r.light(-.03,0,.3,xi),r.light(.06,.026,.31,Wi),r.light(0,.03,-.12,ln);const a=r.build(1.35,7,So),c=cn(53);c.oct(.1,.086,.15,.27,.82),c.cyl(.018,.018,.006,.346,le,12,0,.008),c.box(.07,.008,.1,0,.044,.26,Ze),c.box(.008,.06,.1,.051,0,.26,Ze),c.turret(0,.048,.205,1,1.1),c.turret(0,-.045,.3,-1,.9),c.box(.036,.012,.08,-.034,.048,.25),c.cells(-.034,.055,.25,3,6,.011),c.cyl(.011,.014,.05,.33,le,10,-.056,-.02),c.radiator(-.06,-.03,.27,.03,.05,Math.PI+.6,2,.003,le),c.windows(.051,-.02,.22,.25,2,[-1]),c.collar(.016,.19,0,-.03,-1),c.truss(0,0,-.15,.195,.034,4),c.strapped(.02,.1,.036,0,.08),c.strapped(.02,.1,-.036,0,.03,!0),c.pipe(.036,0,.02,.01,0,-.15),c.pipe(-.036,0,-.03,-.01,0,-.15);for(const R of[.62,2.5,3.8,5.6])c.radiator(Math.cos(R)*.026,Math.sin(R)*.026,-.03,.15,.24,R,6);c.shield(.06,-.158),c.oct(.08,.08,.07,-.195,1),c.cyl(.05,.055,.02,-.24,le,14),c.engine(.062,-.255,.13,.05,-.245);for(const[R,z]of[[.058,.03],[-.058,-.03]])c.rcs(R,z,.31,Math.sign(R),0);for(const[R,z]of[[.046,-.036],[-.046,.036]])c.rcs(R,z,-.2,Math.sign(R),0);c.light(-.063,0,.25,xi),c.light(.063,0,.25,Wi),c.light(0,0,-.03,ln);const o=c.build(1.35,7,So),l=cn(67);l.cyl(.024,.03,.05,.33,pe,12),l.boom(0,0,.355,[0,0,1],.05,.004),l.box(.01,.01,.01,0,0,.405,le),l.box(.008,.008,.008,.02,.02,.33,le),l.boom(.02,.02,.33,[1,.7,.3],.07),l.dish(.04,-.03,.03,.3,[-.5,.6,.6]),l.cyl(.028,.028,.12,.22,pe,14),l.cyl(.04,.04,.03,.2,le,14),l.cyl(.03,.03,.03,.255,Ze,14),l.collar(.014,.16,0,0,-1),l.truss3(0,0,-.17,.16,.026,5,.004),l.strapped(.02,.08,.03,.01,.06),l.strapped(.02,.08,-.03,0,0,!0),l.strapped(.016,.06,0,-.032,-.07),l.pipe(.03,.01,.01,.008,0,-.17),l.pipe(-.03,0,-.05,-.008,0,-.17),l.radiator(.016,0,-.11,.1,.12,.12,4),l.radiator(-.016,0,-.11,.05,.12,Math.PI-.3,4,.003,le),l.shield(.045,-.176),l.cyl(.03,.036,.05,-.205,le,12),l.engine(.042,-.232,.11,.032,-.226),l.rcs(.03,0,.3,1,0),l.rcs(-.03,0,.3,-1,0),l.rcs(.024,.02,-.18,1,0),l.rcs(-.024,-.02,-.18,-1,0),l.light(-.07,.07,.2,xi),l.light(.07,-.07,.2,Wi),l.light(0,0,.41,ln);const u=l.build(1.35,7,So),p=cn(71);p.hoop(.085,.022,.03,24,.2,3,.04),u.userData.rotor=p.build(),u.userData.rotorSpin=.6;const d=cn(41);d.oct(.05,.05,.06,0,1),d.box(.05,.003,.04,0,.026,-.005,Ze),d.cyl(.014,.016,.04,.05,le,12),d.add(new ft(.02,.018,.022,12,1,!0).rotateX(Math.PI/2).translate(0,0,.08),pe,.9),d.dish(.036,0,.026,0,[0,1,.25]),d.box(.008,.008,.008,-.025,0,-.01,le),d.box(.008,.008,.008,.022,-.022,-.02,le);const[f,v,y]=d.boom(-.025,0,-.01,[-1,.15,-.1],.18,.003);d.box(.012,.012,.012,f,v,y,le,.7);const[m,h,g]=d.boom(.022,-.022,-.02,[.7,-.7,-.2],.05,.004);d.cyl(.01,.01,.04,g,le,8,m,h);for(const R of[0,1,2,3])d.box(R%2?.004:.03,R%2?.03:.004,.032,m,h,g,le,.6);for(const R of[-1,1])d.rcs(R*.028,.02,-.025,R,0);d.bell(.018,-.035,.028),d.light(0,.03,-.02,ln,.006);const w=d.build(),_=cn(43);_.box(.04,.04,.05,0,0,0),_.box(.042,.042,.012,0,0,-.01,Ze),_.dish(.075,0,0,.026,[0,0,1]),_.boom(.02,0,0,[1,0,0],.03),_.solar(.05,0,0,.12,.05,0),_.boom(-.02,0,0,[-1,0,0],.025),_.solar(-.045,0,0,.08,.05,Math.PI+.4),_.radiator(0,-.02,-.005,.03,.03,-Math.PI/2,1),_.boom(.01,.02,-.02,[.3,1,-.4],.09,.002),_.boom(-.01,-.02,-.02,[-.2,-1,-.5],.07,.002);for(const R of[-1,1])_.rcs(R*.022,.018,-.022,R,0);_.bell(.014,-.025,.022),_.light(0,-.024,0,ln,.006);const S=_.build(),b=cn(47);b.sphere(.03,0,0,0,pe,1,14),b.cyl(.031,.031,.014,0,Ze,14),b.box(.04,.03,.03,0,.03,.02,pe,.9),b.greeble(.04,.03,.03,0,.03,.02,3,"t");const[T,x,M]=b.boom(0,.02,.035,[0,-.3,1],.045,.006);b.sphere(.013,T,x,M,le,.6,12),b.cyl(.005,.005,.004,M+.012,xn,8,T,x);for(const R of[.785,2.356,3.927,5.498])b.boom(0,0,-.012,[Math.cos(R),Math.sin(R),0],.04,.003),b.rcs(Math.cos(R)*.04,Math.sin(R)*.04,-.012,Math.cos(R),Math.sin(R));b.solar(.02,.045,.02,.05,.035,.35),b.boom(-.012,.045,.01,[-.2,1,-.3],.06,.0018),b.engine(.022,-.045,.04,.02,-.03,4),b.light(0,.046,0,ln,.005);const E=b.build(),P=[e,i,a,o,u];return P.probes=[w,S,E],P}function Fp(n){const e=Pb(),t=new Ic({color:"#d4d8de",map:e,roughnessMap:e,metalness:.35,roughness:.62,emissive:"#06070a"});return t.onBeforeCompile=i=>{i.uniforms.uT=n,i.uniforms.uPxK=kp,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},t}function Db(n){return new $t({uniforms:{uT:n},vertexShader:`${Ui}
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
        ${Ni}
      }`,fragmentShader:`${ki}
      uniform float uT;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        ${Fi}
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
      }`,blending:zn,transparent:!0,depthWrite:!1})}function Ib(){return new $t({uniforms:{uPR:{value:1}},vertexShader:`${Ui}
      attribute vec3 color; attribute float size;
      uniform float uPR; varying vec3 vCol;
      void main() {
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPR;
        ${Ni}
      }`,fragmentShader:`${ki}
      varying vec3 vCol;
      void main() {
        ${Fi}
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float k = exp(-r * r * 5.0) + exp(-abs(p.y) * 40.0) * (1.0 - r) * 0.35;
        if (k < 0.01) discard;
        gl_FragColor = vec4(vCol * k, 1.0);
      }`,blending:zn,transparent:!0,depthWrite:!1})}function Pr(n,e){const t=n.clone(),i=new Rc(t,Qh||(Qh=Fp(e)),1),r=(o,l)=>{const u=new Zs(new Float32Array(l),l.length);return t.setAttribute(o,u),u},s=r("iPaint",[.6,.6,.6]),a=r("iSun",[1]),c=r("iLit",[0]);return r("iSeed",[Math.random()]),r("iHull",[.95]),i.setMatrixAt(0,new Ut),i.frustumCulled=!1,i.userData.set=(o,l,u)=>{const p=new ot(o);s.setXYZ(0,p.r,p.g,p.b),s.needsUpdate=!0,a.setX(0,l),a.needsUpdate=!0,c.setX(0,u?1:0),c.needsUpdate=!0},i}let Qh=null;const Ub=40;function Nb(n,e){const t={value:0},i=Lb(),r=[...i,...i.probes],s=i.length,a=Fp(t),c=_e=>{const et=_e.clone(),Xe=new Rc(et,a,e);Xe.instanceMatrix.setUsage(Er);const Ve=(ae,me)=>{const De=new Zs(new Float32Array(e*me),me);return De.setUsage(Er),et.setAttribute(ae,De),De};return Xe.userData={paint:Ve("iPaint",3),sun:Ve("iSun",1),seed:Ve("iSeed",1),hull:Ve("iHull",1),n:0},Ve("iLit",1).array.fill(1),Xe.frustumCulled=!1,Xe.count=0,n.add(Xe),Xe},o=r.map(c),l=r.map(_e=>_e.userData.rotor?c(_e.userData.rotor):null),u=r.map(_e=>_e.userData.coarse?c(_e.userData.coarse):null),p=[...o,...l.filter(Boolean),...u.filter(Boolean)],d=new Ut,f=new Ap;f.setAttribute("position",new yt([-1,-.02,0,1,-.02,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),f.setAttribute("part",new yt([0,0,0,0,1,1,1,1],1)),f.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]);const v=e*3,y=(_e,et)=>{const Xe=new Zs(new Float32Array(v*et),et);return Xe.setUsage(Er),f.setAttribute(_e,Xe),Xe},m=y("iPow",1),h=y("iSeed",1),g=y("iTint",3),w=new Rc(f,Db(t),v);w.instanceMatrix.setUsage(Er),w.frustumCulled=!1,w.count=0,w.renderOrder=2,n.add(w);const _=new Ht,S=new Float32Array(e*3),b=new Float32Array(e*3),T=new Float32Array(e);_.setAttribute("position",new hn(S,3).setUsage(Er)),_.setAttribute("color",new hn(b,3).setUsage(Er)),_.setAttribute("size",new hn(T,1).setUsage(Er));const x=Ib(),M=new tf(_,x);M.frustumCulled=!1,M.renderOrder=3,n.add(M);const E=new Ut,P=new qn,R=new D,z=new D,N=new D(0,1,0),L=new ot;let O=0,V=0,oe=0;const re=new ot(.35,.6,1),de=new ot(.85,.9,1),ge=new qn,Be=new D(1,0,0);return{geometries:i,hulls:i.length,probeType:i.length,probes:i.probes.length,uT:t,begin(_e,et){t.value=_e,x.uniforms.uPR.value=et;for(const Xe of p)Xe.userData.n=0;O=V=oe=0},add(_e,et,Xe,Ve,ae,me,De,it,fe,Ge,Lt,ht){if(!(oe>=e)){if(oe++,z.copy(et).add(Xe),E.lookAt(z,et,Math.abs(Xe.y)>.99?R.set(1,0,0):N),P.setFromRotationMatrix(E),Lt>1.5){const Je=Lt<Ub&&u[_e]?u[_e]:o[_e],rt=Je.userData.n++;E.compose(et,P,R.set(Ve[0],Ve[1],Ve[2])),Je.setMatrixAt(rt,E),L.set(ae),Je.userData.paint.setXYZ(rt,L.r,L.g,L.b),Je.userData.sun.setX(rt,ht),Je.userData.seed.setX(rt,De*.137%1),Je.userData.hull.setX(rt,me);const nt=l[_e];if(nt){const At=nt.userData.n++;nt.setMatrixAt(At,E.multiply(d.makeRotationZ(t.value*r[_e].userData.rotorSpin+De))),nt.userData.paint.setXYZ(At,L.r,L.g,L.b),nt.userData.sun.setX(At,ht),nt.userData.seed.setX(At,De*.137%1),nt.userData.hull.setX(At,me)}}if(it&&O<v){const Je=O++;z.set(0,0,r[_e].userData.nozzle).multiply(R.set(Ve[0],Ve[1],Ve[2])).applyQuaternion(P).add(et);const rt=1.9*fe*Math.max(Ve[2],.62);E.compose(z,P,R.set(.06*Ve[0]*(_e>=s?.5:1),1,rt)),w.setMatrixAt(Je,E),m.setX(Je,1-.35*kt.smoothstep(Lt,120,500)),h.setX(Je,De*.371%1),g.setXYZ(Je,re.r,re.g,re.b)}if(Ge&&Ge[0]>0){const Je=V++;S[Je*3]=et.x,S[Je*3+1]=et.y,S[Je*3+2]=et.z,L.set(it?"#cfe8ff":ae);const rt=Ge[1]*(it?2.2:1);b[Je*3]=L.r*rt,b[Je*3+1]=L.g*rt,b[Je*3+2]=L.b*rt,T[Je]=Ge[0]}}},jet(_e,et,Xe,Ve,ae,me){if(O>=v)return;const De=O++;z.copy(_e).sub(et),E.lookAt(z,_e,Math.abs(et.y)>.99?Be:N),ge.setFromRotationMatrix(E),E.compose(_e,ge,R.set(Ve,1,Xe)),w.setMatrixAt(De,E),m.setX(De,ae),h.setX(De,me*.613%1),g.setXYZ(De,de.r,de.g,de.b)},end(){for(const _e of p)if(_e.count=_e.userData.n,!!_e.count){_e.instanceMatrix.needsUpdate=!0;for(const et of["paint","sun","seed","hull"])_e.userData[et].needsUpdate=!0}w.count=O,O&&(w.instanceMatrix.needsUpdate=!0,m.needsUpdate=h.needsUpdate=g.needsUpdate=!0),_.setDrawRange(0,V),V&&(_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0,_.attributes.size.needsUpdate=!0)}}}const e0=3,Op=[.785,2.356,3.927,5.498];function t0(n,e,t){const i=n,r=cn(e*31+7),s=r.r,a=(f,v,y,m=pe,h=16,g=0,w=0)=>r.cyl(f,f,v,y,m,h,g,w);if(e===0){a(i*.27,i*.44,0),r.cyl(i*.15,i*.27,i*.1,i*.27,pe,18),r.cyl(i*.27,i*.2,i*.1,-i*.27,pe,18),a(i*.28,i*.14,i*.02,Ze);for(let f=0;f<10;f++){const v=f/10*Math.PI*2+.3;r.box(i*.03,i*.03,i*.06,Math.cos(v)*i*.272,Math.sin(v)*i*.272,-i*.12,xn)}}else if(e===1){r.sphere(i*.19,0,0,0,pe,1,16),a(i*.12,i*.5,-i*.1),a(i*.2,i*.08,0,Ze);for(const f of Op){const v=Math.cos(f),y=Math.sin(f),m=-y,h=v,g=i*.15,w=i*.68,_=i*.055,S=[[m*_,h*_,_],[-m*_,-h*_,_],[0,0,-_]];for(const[b,T,x]of S)r.strut(v*g+b,y*g+T,x,v*w+b,y*w+T,x,i*.018);for(let b=0;b<=4;b++){const T=g+(w-g)*b/4;for(let x=0;x<3;x++){const M=S[x],E=S[(x+1)%3];r.strut(v*T+M[0],y*T+M[1],M[2],v*T+E[0],y*T+E[1],E[2],i*.012)}}r.pipe(v*g,y*g,0,v*w,y*w,0,i*.025,pe),r.sphere(i*.075,v*i*.72,y*i*.72,0,pe,1,12)}}else{a(i*.07,i*1.2,-i*.15,le,10);for(const[f,v,y,m,h,g]of[[.28,.17,.26,0,0,pe],[0,.2,.22,.02,-.01,Ze],[-.24,.15,.24,-.02,.02,pe],[-.5,.12,.18,0,0,pe]]){r.cyl(i*v,i*v,i*y,i*f,g===Ze?pe:g,16,i*m,i*h,.85+s()*.25);for(const w of[-.5,.5])r.cyl(i*v*1.04,i*v*1.04,i*.02,i*(f+w*y),le,16,i*m,i*h)}a(i*.205,i*.1,0,Ze)}a(i*.1,i*.12,i*.42,le,12),r.greeble(i*.36,i*.36,i*.5,0,0,0,6);for(const f of zp(e)){const[v,y,m]=f.p,[h,g]=f.n;r.boom(v*i-h*i*.1,y*i-g*i*.1,m*i,[h,g,0],i*.1,i*.09,pe,.95),r.boom(v*i-h*i*.01,y*i-g*i*.01,m*i,[h,g,0],i*.02,i*.13,le)}r.truss(0,0,-i*.75,-i*.3,i*.14,3,i*.018),a(i*.09,i*.18,-i*.68,le,12),r.cyl(i*.16,i*.1,i*.03,-i*.56,le,16),r.radiator(i*.08,0,-i*.66,i*.42,i*.2,.75+e*.4,3,i*.01),r.radiator(-i*.08,0,-i*.64,i*.32,i*.16,Math.PI+.9+e*.3,2,i*.01);const[c,o,l]=r.boom(-i*.07,i*.07,-i*.45,[-.6,.6,-.2],i*.4,i*.022);r.dish(i*.1,c,o,l,[-.4,.6,.5]),r.light(0,0,i*.49,ln,i*.05),r.light(i*.2,0,-i*.1,Wi,i*.04),r.light(-i*.2,0,-i*.1,xi,i*.04);const u=Pr(r.build(1,Do(i)),t);u.userData.spin=.015;const p=u.userData.set,d={S:i,uT:t,parts:[],wip:[],last:["#6a7080",1,!1]};return u.userData.station=d,u.userData.set=(f,v,y)=>{d.last=[f,v,y],p(f,v,y);for(const m of d.parts)m.userData.set?.(f,v,y)},u}const Do=n=>7/Math.max(n*2.5,1);function n0(n,e,t){const i=n.userData.station;for(const c of i.parts)c.removeFromParent();i.parts.length=0,i.wip.length=0,n.userData.rotor=null;const r=i.S;let s=0;for(const[c,o]of e.entries()){const l=cn(o.type.length*13+c*7+o.level);let u=null,p=null;if(o.type==="shipyard")p=kb(l,r,s++);else if(o.type==="lab")Ob(l,r,o.level);else if(o.type==="bureau")zb(l,r,o.level);else if(o.type==="defence")Bb(l,r,o.level);else if(o.type==="habitat")u=Gb(l,r,o.level,o.done);else continue;const d=l.build(1,Do(r)),f=o.done||!t?Pr(d,i.uT):new Ot(d,t);if(n.add(f),i.parts.push(f),u&&f.userData.set){const v=Pr(u.build(1,Do(r)),i.uT);v.position.set(0,0,0),v.userData.spin=.22,f.add(v);const y=f.userData.set;f.userData.set=(m,h,g)=>{y(m,h,g),v.userData.set(m,h,g)},n.userData.rotor=v}if(p&&f.userData.set){const v=p.map(m=>Pr(m.build(1,Do(r)),i.uT));for(const m of v)f.add(m);const y=f.userData.set;f.userData.set=(m,h,g)=>{y(m,h,g);for(const w of v)w.userData.set(m,h,g)},i.wip.push(v)}f.userData.set?.(...i.last)}const a=e.reduce((c,o)=>c+(o.done?o.type==="shipyard"?1:o.level:0),0);if(a>=2){const c=cn(400+a);for(let l=0;l<Math.min(5,a-1);l++){const u=.3+l*1.27;c.radiator(Math.cos(u)*r*.08,Math.sin(u)*r*.08,-r*(.4+l%2*.22),r*(.3+l*.04),r*.16,u,2,r*.01)}a>=4&&(c.cyl(r*.07,r*.07,r*.16,-r*.5,le,12,r*.15,-r*.12),c.strut(0,0,-r*.5,r*.15,-r*.12,-r*.5,r*.03));const o=Pr(c.build(1,Do(r)),i.uT);n.add(o),i.parts.push(o),o.userData.set(...i.last)}}function kb(n,e,t=0){const i=Fb,r=i*.45,s=i*.36,a=i*.03,c=e*.42+i*.13,o=c+i*1.7,l=t*(r*2+i*.2);t===0?n.truss(0,0,e*.42,c,i*.16,1,i*.02):n.box(l-r,a*1.5,a*1.5,(l-r)/2,-s,c+i*.2,le);for(const m of[-1,1])for(const h of[-1,1])n.box(a,a,o-c,l+m*r,h*s,(c+o)/2,le);const u=5;for(let m=0;m<=u;m++){const h=c+(o-c)*m/u;for(const g of[-1,1])n.box(r*2,a,a,l,g*s,h,le),m<u&&n.box(a,s*2,a,l+g*r,0,h,le);m<u&&m%2&&n.strut(l-r,-s,h,l-r,s,h+(o-c)/u,a*.8)}n.box(r*2,i*.04,i*.18,l,s,c+i*.05,Ze);const p=cn(77+t*5),d=cn(78+t*5),f=cn(79+t*5),v=c+i*.2,y=o-i*.15;p.cyl(i*.05,i*.05,y-v,(v+y)/2,le,10,l,0);for(const[m,h]of[[.3,.35],[-.3,.85],[.3,1.25]])p.light(l+i*m,s*.5,c+i*h,ln,i*.035);for(let m=0;m<7;m++){const h=v+(y-v)*(m+.5)/7;p.add(new Di(i*.2,i*.012,4,16,m>3?Math.PI*2:Math.PI*1.1).translate(l,0,h),le,.9)}for(let m=0;m<3;m++)d.box(i*.016,i*.26,i*.18,l+i*.2,0,y-i*(.15+m*.2),m===1?Ze:pe);for(let m=0;m<3;m++)d.box(i*.016,i*.26,i*.18,l-i*.2,0,y-i*(.15+m*.2),pe);f.cyl(i*.1,i*.17,i*.2,v-i*.02,le,14,l,0);for(let m=0;m<3;m++)f.box(i*.26,i*.016,i*.18,l,i*.2,y-i*(.75+m*.2),m===0?Ze:pe);return n.box(r*2.1,i*.05,i*.07,l,s+i*.05,c+i*.95,pe),n.box(i*.1,i*.08,i*.12,l-i*.12,s,c+i*.95,le),n.box(i*.025,i*.26,i*.025,l-i*.12,s-i*.16,c+i*.95,le),n.light(l+r,s,o,Wi,i*.04),n.light(l-r,-s,o,xi,i*.04),n.light(l-r,s,o,ln,i*.045),[p,d,f]}const Fb=.28;function Ob(n,e,t){n.boom(e*.18,0,e*.05,[1,0,0],e*.5,e*.06,pe,.9);const i=e*.85;n.cyl(e*.17,e*.17,e*.48,e*.05,pe,16,i,0),n.cyl(e*.12,e*.17,e*.08,e*.33,pe,16,i,0),n.cyl(e*.175,e*.175,e*.14,-e*.05,Ze,16,i,0);for(let c=0;c<8;c++){const o=c/8*Math.PI*2;n.box(e*.02,e*.02,e*.05,i+Math.cos(o)*e*.172,Math.sin(o)*e*.172,e*.15,xn)}const[r,s,a]=n.boom(i+e*.12,e*.1,e*.2,[1,.6,.4],e*.5,e*.025);if(n.box(e*.07,e*.07,e*.07,r,s,a,le,.7),n.sphere(e*.04,r,s+e*.06,a,pe,1,10),t>=2&&(n.cyl(e*.12,e*.12,e*.36,-e*.02,pe,14,i,-e*.32),n.cyl(e*.125,e*.125,e*.08,-e*.02,Ze,14,i,-e*.32),n.strut(i,-e*.17,-e*.02,i,-e*.2,-e*.02,e*.08,pe,.9),n.cyl(e*.06,e*.07,e*.34,e*.3,pe,14,i,-e*.32),n.cyl(e*.05,e*.05,e*.01,e*.475,le,14,i,-e*.32)),t>=3){const[c,o,l]=n.boom(i+e*.17,-e*.02,-e*.1,[1,-.15,-.2],e*.8,e*.022);n.frame(e*.24,e*.06,e*.24,c,o,l,e*.012),n.box(e*.12,e*.1,e*.12,c,o+e*.08,l,pe,.9),n.radiator(c,o+e*.03,l-e*.1,e*.2,e*.12,-Math.PI/2,2,e*.008);for(const u of[-.12,.16])n.dish(e*.13,i+e*.12,e*.16,e*u,[.4,1,.2])}n.light(i,e*.18,e*.33,ln,e*.04)}function zb(n,e,t){n.boom(-e*.18,0,-e*.05,[-1,0,0],e*.38,e*.1,le,.8);const i=-e*.72;n.oct(e*.34,e*.3,e*.44,-e*.05,.9,i,0),n.box(e*.36,e*.03,e*.3,i,e*.16,-e*.05,Ze);for(const c of[-.2,.1])n.oct(e*.37,e*.33,e*.04,e*c,1,i,0,le);n.box(e*.01,e*.02,e*.12,i-e*.17,e*.02,-e*.05,xn),n.cyl(e*.05,e*.06,e*.06,e*.1,le,12,i,e*.2),n.box(e*.08,e*.06,e*.06,i,e*.24,e*.1,pe,.9),n.cyl(e*.022,e*.022,e*.01,e*.135,xn,10,i,e*.24);const[r,s,a]=n.boom(i-e*.1,-e*.12,-e*.15,[-.6,-1,-.2],e*.32,e*.02);n.sphere(e*.05,r,s,a,le,.7,10),t>=2&&(n.strut(i,0,-e*.27,i,0,-e*.4,e*.1,pe,.9),n.oct(e*.26,e*.24,e*.26,-e*.52,.9,i,0),n.box(e*.27,e*.025,e*.18,i,e*.13,-e*.52,Ze),n.add(new Sn(e*.03,e*.26,e*.3).rotateZ(-.35).translate(i-e*.2,e*.08,-e*.52),le,.6),n.sphere(e*.06,i+e*.05,e*.15,-e*.62,pe,1.12,12)),n.light(i-e*.17,e*.15,-e*.27,xi,e*.035)}function Bb(n,e,t){const i=[[0,1],[0,-1],[0,1]];for(let r=0;r<Math.min(t,3);r++){const[s,a]=i[r],c=r===2?-e*.3:e*.1,o=f=>[s*f,a*f];n.boom(...o(e*.16),c,[s,a,0],e*.32,e*.06,le,.85);const[l,u]=o(e*.36);n.box(Math.abs(a)*e*.2+Math.abs(s)*e*.14,Math.abs(s)*e*.2+Math.abs(a)*e*.14,e*.18,l,u,c,pe,.85),n.box(Math.abs(a)*e*.21+e*.01,Math.abs(s)*e*.21+e*.01,e*.04,l,u,c,Ze);const[p,d]=o(e*.5);n.sphere(e*.08,p,d,c,pe,.9,12);for(const f of[-1,1]){const v=p+-a*f*e*.03,y=d+s*f*e*.03;n.boom(v,y,c,[s,a,.35],e*.36,e*.025,le,.6)}n.light(...o(e*.6),c-e*.06,xi,e*.03)}}function Gb(n,e,t,i){const r=Math.min(t,3),s=[-1.15,-1.55,-1.95].slice(0,r).map(c=>c*e);n.truss(0,0,s[r-1]-e*.12,-e*.75,e*.12,2+r,e*.016);const a=cn(91+t);for(const c of s)n.cyl(e*.16,e*.16,e*.2,c,le,16),a.hoop(e*.85,e*.16,e*.26,36,c,5,e*.16,e*.012);if(!i){for(const c of s)n.hoop(e*.85,e*.16,e*.26,24,c,0,0,0);return null}return a}function zp(n){const e=[];for(const[t,i]of Op.entries()){const r=n===1?.8:n===0?.36:[.26,.29,.26,.24][t],s=n===1?0:n===0?-.12:[.28,0,-.24,0][t];e.push({p:[Math.cos(i)*r,Math.sin(i)*r,s],n:[Math.cos(i),Math.sin(i),0]})}return e}function Vb(n,e,t,i){const r=e.size,s=.5,a=[cn(11),cn(12),cn(13)],[c,o,l]=a;let u=new Ut,p=!1,d=!1,f=null;if(n==="sundiver"){p=!0;const m=r*1.6;c.cyl(s*.16,s*.16,s*.7,m-s*.3,pe,16),c.cyl(s*.17,s*.17,s*.12,m-s*.3,Ze,16);for(const h of[0,Math.PI/2,Math.PI,Math.PI*1.5])c.radiator(Math.cos(h)*s*.16,Math.sin(h)*s*.16,m-s*.45,s*.7,s*.35,h,3,s*.012);c.light(0,0,m-s*.7,ln,s*.04),o.dish(s*.95,0,0,m+s*.05,[0,0,1]),o.add(new Di(s*.95,s*.03,6,48).translate(0,0,m+s*.35),le,.7);for(let h=0;h<3;h++){const g=h/3*Math.PI*2+.4,w=Math.cos(g)*s*.6,_=Math.sin(g)*s*.6,S=m+s*(1.3+h*.25);l.add(new ft(s*.01,s*.2,s*.16,16).rotateX(Math.PI/2).translate(w,_,S),pe,1.15),l.cyl(s*.05,s*.06,s*.22,S-s*.18,le,10,w,_),l.box(s*.12,s*.02,s*.08,w,_,S-s*.22,Ze)}}else if(n==="massdriver"){d=!0;const m=s*3.2,h=S=>Math.sqrt(Math.max(0,r*r-S*S))-r,g=S=>s*.12+(S+m/2)/m*s*.75,w=12;for(let S=0;S<=w;S++){const b=-m/2+m*S/w,T=g(b);for(const x of[-1,1])c.strut(b,T,x*s*.08,b,h(b)-s*.02,x*s*.14,s*.03);if(S<w){const x=b+m/w;for(const M of[-1,1])c.strut(b,T,M*s*.05,x,g(x),M*s*.05,s*.04,pe,.9);o.add(new Di(s*.11,s*.025,6,16).rotateY(Math.PI/2).rotateZ(Math.atan2(s*.75,m)).translate(b+m/w/2,(T+g(x))/2,0),S%3===0?Ze:le,.9)}}const _=-m/2-s*.35;l.box(s*.45,s*.3,s*.5,_,h(_)+s*.15,0,pe),l.box(s*.47,s*.05,s*.52,_,h(_)+s*.3,0,Ze);for(const S of[-.18,0,.18])l.add(new ft(s*.06,s*.06,s*.25,10).translate(_-s*.32,h(_)+s*.12,s*S),pe,.9);for(const S of[-.32,.32])l.radiator(_,h(_)+s*.28,s*S,s*.4,s*.3,Math.PI/2,2,s*.012);l.box(s*.2,s*.07,s*.07,-m*.2,g(-m*.2)+s*.06,0,Ze),l.light(m/2,g(m/2)+s*.06,0,ln,s*.04)}else if(n==="ringyard"){const m=r*1.45,h=s*.2;for(const[g,w]of[[-h,-h],[-h,h],[h,-h],[h,h]])c.add(new Di(m+g,s*.03,5,160).rotateX(Math.PI/2).translate(0,w,0),le);c.add(new Di(m,s*.06,6,160).rotateX(Math.PI/2).scale(1,.4,1),pe,.9);for(let g=0;g<72;g++){const w=g/72*Math.PI*2,_=Math.cos(w),S=Math.sin(w);c.strut(_*(m-h),-h,S*(m-h),_*(m+h),h,S*(m+h),s*.03),c.strut(_*(m-h),h,S*(m-h),_*(m-h),-h,S*(m-h),s*.025),c.strut(_*(m+h),h,S*(m+h),_*(m+h),-h,S*(m+h),s*.025),g%12===0&&c.box(s*.5,s*.04,s*.5,_*m,h+s*.02,S*m,Ze)}for(let g=0;g<3;g++){const w=g/3*Math.PI*2;o.add(new ft(s*.3,s*.3,s*.7,16).translate(Math.cos(w)*m,0,Math.sin(w)*m),pe),o.add(new ft(s*.31,s*.31,s*.15,16).translate(Math.cos(w)*m,0,Math.sin(w)*m),Ze),o.radiator(Math.cos(w)*m,s*.3,Math.sin(w)*m,s*.6,s*.4,Math.PI/2,3,s*.015),o.light(Math.cos(w)*m,s*.22,Math.sin(w)*m,ln,s*.04)}for(let g=0;g<6;g++){const w=g/6*Math.PI*2+Math.PI/6,_=Math.cos(w),S=Math.sin(w),b=new D(_*(m+s*.45),0,S*(m+s*.45)),T=new D(-S,0,_),x=new D(_,0,S),M=new D(0,1,0),E=s*.45,P=s*.2,R=s*.2,z=(O,V,oe)=>b.clone().addScaledVector(T,O).addScaledVector(x,V).addScaledVector(M,oe),N=(O,V)=>l.strut(O.x,O.y,O.z,V.x,V.y,V.z,s*.014);for(const O of[-P,P])for(const V of[-R,R])N(z(-E,O,V),z(E,O,V));for(const O of[-E,E])for(const V of[-R,R])N(z(O,-P,V),z(O,P,V));for(const O of[-E,E])for(const V of[-P,P])N(z(O,V,-R),z(O,V,R));const L=new ft(s*.1,s*.1,s*.7,10).applyQuaternion(new qn().setFromUnitVectors(M,T)).translate(b.x,b.y,b.z);l.add(L,g%2?pe:Ze),l.strut(_*(m+h),0,S*(m+h),_*(m+s*.25),0,S*(m+s*.25),s*.05)}}else if(n==="citadel"){const m=r*1.4,h=s*1.8;for(let g=0;g<6;g++){const w=a[Math.floor(g/2)],_=g/6*Math.PI*2+.3,S=Math.cos(_),b=Math.sin(_),T=S*m,x=b*m;w.add(new ft(h*.24,h*.28,h*.14,6).translate(T,0,x),pe),w.add(new ft(h*.29,h*.29,h*.03,6).translate(T,-h*.07,x),le),w.add(new ft(h*.245,h*.245,h*.03,6).translate(T,h*.06,x),Ze);for(const M of[-1,1]){const E=T+-b*M*h*.1,P=x+S*M*h*.1;w.add(new ft(h*.06,h*.07,h*.05,10).translate(E,h*.08,P),le),w.box(h*.1,h*.07,h*.1,E,h*.13,P,pe,.85),w.boom(E+S*h*.04,h*.14,P+b*h*.04,[S,.12,b],h*.36,h*.03,le,.6)}w.boom(T-S*h*.12,h*.07,x-b*h*.12,[0,1,0],h*.14,h*.02),w.sphere(h*.05,T-S*h*.12,h*.23,x-b*h*.12,pe,1.1,10),w.radiator(T-S*h*.26,0,x-b*h*.26,h*.22,h*.14,Math.PI/2,2,h*.01),w.light(T,-h*.1,x,xi,h*.03)}}else if(n==="array"){u=i0(r*1.6,.9),c.sphere(s*.16,0,0,0,pe,1,16),c.cyl(s*.1,s*.1,s*.5,0,le,12),c.cyl(s*.17,s*.17,s*.06,0,Ze,16);for(let m=0;m<3;m++){const h=m/3*Math.PI*2+Math.PI/2,g=Math.cos(h),w=Math.sin(h),_=s*1.2;for(const[b,T]of[[.05,.05],[-.05,.05],[0,-.06]])c.strut(g*s*.15+b*s*-w,T*s,w*s*.15+b*s*g,g*_+b*s*-w,T*s,w*_+b*s*g,s*.018);const S=m<2?o:l;S.dish(s*.38,g*_,0,w*_,[g*.25,1,w*.25]),S.box(s*.12,s*.08,s*.12,g*_,-s*.06,w*_,pe,.9)}l.cyl(s*.03,s*.04,s*.2,-s*.35,pe,10),l.light(0,s*.2,0,ln,s*.04)}else if(n==="college"){u=i0(r*1.55,2.4),c.cyl(s*.1,s*.1,s*1.3,0,pe,14);for(const h of[-.45,-.2,.25,.5])c.cyl(s*.17,s*.17,s*.1,s*h,h>0?Ze:pe,16);for(const h of[.38])c.add(new Bi(s*.15,16,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).translate(0,0,s*h),pe,1.1);for(let h=0;h<8;h++){const g=h/8*Math.PI*2;c.box(s*.03,s*.03,s*.05,Math.cos(g)*s*.172,Math.sin(g)*s*.172,s*.25,xn)}o.cyl(s*.14,s*.14,s*.12,0,le,16);for(let h=0;h<4;h++){const g=h/4*Math.PI*2;o.box(s*.1,s*.1,s*.14,Math.cos(g)*s*.2,Math.sin(g)*s*.2,-s*.62,pe,.9)}const m=cn(14);m.hoop(s*.75,s*.12,s*.18,40,0,4,s*.1,s*.012),f=m;for(let h=0;h<4;h++)l.box(s*.06,s*.06,s*.06,s*(1.1+h%2*.2),s*(.3-h*.2),s*.4,le,.7);for(const[h,g]of[[.12,.12],[-.12,-.12]])l.box(s*.05,s*.05,s*.3,s*h,s*g,-s*.85,pe),l.box(s*.06,s*.02,s*.1,s*h,s*g,-s*.8,Ze);l.light(0,0,s*.68,ln,s*.04)}const v=new Fn,y=[];for(const m of a){const h=m.build(1,7);h.applyMatrix4(u);const g=Pr(h,t),w=new Ot(h,i);v.add(g,w),y.push([g,w])}if(f){const m=f.build(1,7),h=Pr(m,t);h.applyMatrix4(u);const g=new Ot(m,i);g.applyMatrix4(u),v.add(h,g),y[1].push(h,g),v.userData.spinner=h}return v.userData={...v.userData,stages:y,faceSun:p,surface:d},v.userData.set=(m,h)=>{for(const g of y)for(const w of g)w.userData.set?.(m,h,!0)},v}function i0(n,e){const t=new D(Math.cos(e),0,Math.sin(e)),i=new D(0,1,0),r=new D().crossVectors(t,i);return new Ut().makeBasis(r,t,i).setPosition(t.clone().multiplyScalar(n))}function Hb(n,e,t){n.userData.stages.forEach((i,r)=>{const s=t||e>=(r+1)/3;for(let a=0;a<i.length;a+=2)i[a].visible=s,i[a+1].visible=!s})}function $b(n,e,t,i,r,s,a,c){var S,b;const o=Gp(e),l=Bp(),u=cn(e.id*17+t*101+r);u.r;const p=n==="shipyard"||n==="skimmer",d=[],f=(T,x,M,E,P,R,z=pe,N=12,L)=>u.add(new ft(T,x,M,N).translate(E,P+M/2,R),z,L),v=(T,x,M,E,P=pe,R)=>u.add(new Bi(T,16,8,0,Math.PI*2,0,Math.PI/2).translate(x,M,E),P,R),y=(T,x,M,E,P,R=1,z="z")=>{for(let N=0;N<P;N++){const L=(N-(P-1)/2)*(T/P);z==="z"?u.box(o*.035,o*.025,o*.006,x+L,M,E+R*.003,xn):u.box(o*.006,o*.025,o*.035,x+R*.003,M,E+L,xn)}};let m=null;if(n==="shipyard"){m=r0(e.size*1.5,.4+t*1.6);const x=7*.078,M=1.2*.078,E=1*.078,P=.078*.1;for(const O of[-1,1])for(const V of[-1,1])u.box(x,P,P,0,O*E,V*M,le);for(let O=0;O<=7;O++){const V=-x/2+x*O/7;for(const oe of[-1,1])u.box(P,P,M*2,V,oe*E,0,le);for(const oe of[-1,1])u.box(P,E*2,P,V,0,oe*M,le);if(O<7)for(const oe of[-1,1])u.strut(V,-E,oe*M,V+x/7,E,oe*M,P*.7)}u.box(x*.18,P*2.2,M*2.1,x*.41,E,0,Ze),u.box(x*.18,P*2.2,M*2.1,-x*.41,-E,0,Ze),u.box(.078*.35,.078*.25,M*2.3,.078*.8,E+.078*.18,0,pe),u.box(.078*.2,.078*.2,.078*.3,.078*.8,E,.078*.3,le),u.box(.078*.08,E*.8,.078*.08,.078*.8,E*.55,.078*.3,le);const R=-x/2-1.9*.078;u.strut(-x/2,0,0,R+.078*.6,0,0,.078*.22,le),u.add(new ft(.078*.6,.078*.6,.078*1.6,16).rotateX(Math.PI/2).translate(R,0,0),pe),u.add(new ft(.078*.62,.078*.62,.078*.4,16).rotateX(Math.PI/2).translate(R,0,0),Ze);for(let O=0;O<6;O++){const V=O/6*Math.PI*2;u.box(.078*.12,.078*.06,.078*.06,R+Math.cos(V)*.078*.61,Math.sin(V)*.078*.61,.078*.5,xn)}u.solar(R,.078*.6,0,.078*2.2,.078*1,Math.PI/2,.078*.04),u.radiator(R,-.078*.6,0,.078*1.6,.078*.9,-Math.PI/2,3,.078*.04),u.dish(.078*.45,R-.078*.5,0,.078*.9,[-.4,.3,1]),u.light(x/2,E,M,Wi,.078*.12),u.light(x/2,-E,-M,xi,.078*.12),u.light(R,.078*.7,0,ln,.078*.14);const z=cn(e.id*7+3),N=cn(e.id*7+4),L=cn(e.id*7+5);z.add(new ft(.078*.18,.078*.18,x*.7,10).rotateZ(Math.PI/2),le);for(const[O,V]of[[-.2,1],[.05,-1],[.25,1]])z.light(x*O,E*.6,M*.5*V,ln,.078*.1);for(let O=0;O<7;O++)z.add(new Di(.078*.62,.078*.05,4,18,O<4?Math.PI*2:Math.PI*1.1).rotateY(Math.PI/2).translate(-x*.3+O*x*.09,0,0),le,.9);for(let O=0;O<4;O++)N.add(new ft(.078*.66,.078*.66,x*.08,16,1,!0,0,Math.PI*1.3).rotateZ(Math.PI/2).translate(-x*.28+O*x*.09,0,0),O===1?Ze:pe);for(let O=4;O<7;O++)L.add(new ft(.078*.66,.078*.66,x*.08,16,1,!0,0,Math.PI*2).rotateZ(Math.PI/2).translate(-x*.28+O*x*.09,0,0),O===5?Ze:pe);L.add(new ft(.078*.3,.078*.55,.078*.7,16,1,!0).rotateZ(Math.PI/2).translate(-x*.4,0,0),le,.7),d.push([z,"wip"],[N,"wip"],[L,"wip"])}else if(n==="skimmer"){const T=l*.22,x=e.size*1.03;m=r0(x,.3+t*1.1);for(let P=0;P<r;P++){const R=(P-(r-1)/2)*5*T,z=Math.sqrt(x*x-R*R)-x+T*.6;u.add(new Bi(T,14,8).scale(2.4,.95,.95).translate(R,z+T*.9,0),pe,1.05),u.add(new ft(T*.99,T*.99,T*.7,18,1,!0).rotateZ(Math.PI/2).scale(1,.96,.96).translate(R,z+T*.9,0),Ze),u.box(T*1.4,T*.35,T*.45,R,z,0,pe,.85),u.add(new ft(T*.45,T*.2,T*.8,14,1,!0).rotateZ(Math.PI/2).translate(R+T*1,z-T*.05,0),le,.7),u.strapped(T*.16,T*.5,R-T*.25,z-T*.28,0,!1);for(const N of[-1,1])u.strut(R+N*T*.5,z+T*.15,0,R+N*T*.8,z+T*.55,0,T*.05);u.light(R,z-T*.2,T*.25,ln,T*.1)}const M=T*5.5,E=T*(3+r*1.8);u.truss(0,M,-E/2,E/2,T*.45,3+r,T*.05),u.add(new ft(T*.4,T*.4,T*.9,14).rotateX(Math.PI/2).translate(0,M,E/2+T*.4),pe),u.add(new ft(T*.28,T*.28,T*.1,14).rotateX(Math.PI/2).translate(0,M,E/2+T*.9),le);for(let P=0;P<r+1;P++){const R=-E/2+T*1.1+P*T*1.5;for(const z of[-1,1])u.strapped(T*.36,T*.7,z*T*.6,M,R,P%2===0&&z>0)}u.radiator(0,M+T*.3,-E*.1,T*2,E*.6,Math.PI/2,2+r,T*.04),u.tank(T*.18,T*.5,T*1.4,M*.55,0,pe),u.light(0,M+T*.5,E/2+T*.9,Wi,T*.12)}else if(n==="defence"){const T=o*(.5+r*.14);f(T,T*1.12,o*.16,0,0,0,le,8),f(T*1.01,T*1.01,o*.03,0,o*.16,0,Ze,8),u.box(T*.7,o*.2,T*.5,0,o*.19+o*.1,0,pe,.9),u.box(T*.72,o*.04,T*.08,0,o*.3,T*.2,le);const x=r*2;for(let M=0;M<x;M++){const E=M/x*Math.PI*2+.4,P=Math.cos(E)*T*.72,R=Math.sin(E)*T*.72,z=o*.19;f(o*.11,o*.13,o*.08,P,z,R,le,8),u.add(new Sn(o*.17,o*.1,o*.15).rotateY(-E).translate(P,z+o*.13,R),pe),u.boom(P+Math.cos(E)*o*.06,z+o*.15,R+Math.sin(E)*o*.06,[Math.cos(E),.45,Math.sin(E)],o*.42,o*.04,le,.6)}u.boom(-T*.15,o*.3,-T*.15,[0,1,0],o*.5,o*.04),u.sphere(o*.1,-T*.15,o*.82,-T*.15,pe,1.1,12),u.box(o*.04,o*.04,o*.04,T*.6,o*.2,0,xi)}else if(n==="exchange"){f(o*.7,o*.8,o*.12,0,0,0,le,8),f(o*.5,o*.6,o*.18,0,o*.12,0,pe,8),f(o*.51,o*.51,o*.04,0,o*.24,0,Ze,8),f(o*.16,o*.22,o*.5,0,o*.3,0,pe,10);for(const E of[.5,2.6,4.4])u.radiator(Math.cos(E)*o*.55,o*.14,Math.sin(E)*o*.55,o*.28,o*.22,Math.PI/2,2,o*.015);y(o*.8,0,o*.2,o*.6,8);const T=o*3.6,x=o*2.5;for(const E of[-1,1])u.add(new ft(o*.018,o*.018,T-o*.8,5).translate(E*o*.05,o*.8+(T-o*.8)/2,0),le);for(const E of[1.25,1.9,3.1])u.box(o*.16,o*.2,o*.12,0,o*E,0,pe,.9),u.box(o*.12,o*.03,o*.004,0,o*E,o*.062,xn);const M=o*.95;f(M*.32,M*.32,M*.4,0,x-M*.2,0,pe,16),f(M*.33,M*.33,M*.1,0,x-M*.05,0,Ze,16);for(const E of[-1,1]){const[P,R]=u.boom(E*M*.3,x,0,[E,0,0],M*.45,M*.07,pe,.9);u.box(M*.06,M*.16,M*.16,P,R,0,le),u.strapped(M*.07,M*.16,E*M*.5,x-M*.14,0,E>0)}if(r>=2){u.add(new Di(M*1,M*.08,8,48).rotateX(Math.PI/2).translate(0,x,0),pe);for(let E=0;E<6;E++){const P=E/6*Math.PI*2+.26;u.strut(Math.cos(P)*M*.32,x,Math.sin(P)*M*.32,Math.cos(P)*M*.95,x,Math.sin(P)*M*.95,M*.04),u.frame(M*.28,M*.18,M*.28,Math.cos(P)*M*1.18,x,Math.sin(P)*M*1.18,M*.02),E%2===0&&u.sphere(M*.09,Math.cos(P)*M*1.18,x,Math.sin(P)*M*1.18,E===0?Ze:pe,1,10)}f(M*.4,M*.4,M*.3,0,x-M*.6,0,pe,16);for(let E=0;E<12;E++){const P=E/12*Math.PI*2;u.box(M*.04,M*.03,M*.05,Math.cos(P)*M*1.08,x,Math.sin(P)*M*1.08,xn)}}u.box(o*.5,o*.35,o*.4,0,T,0,le,.7),u.box(o*.3,o*.25,o*.3,o*.22,T+o*.2,o*.1,le,.6),u.box(o*.05,o*.05,o*.05,0,T+o*.25,0,ln)}else if(n==="habitat")if(e.kind==="asteroid"){for(const x of[-1,1])f(o*.06,o*.09,o*.5,x*o*(.35+r*.12),0,0,le,6);u.add(new ft(o*.05,o*.05,o*(.9+r*.25),8).rotateZ(Math.PI/2).translate(0,o*.5,0),le);const T=cn(e.id*5+r);for(let x=0;x<r;x++){const M=(x-(r-1)/2)*o*.3;T.add(new ft(o*.3,o*.3,o*.24,20).rotateZ(Math.PI/2).translate(M,0,0),x===1?Ze:pe);for(let E=0;E<10;E++){const P=E/10*Math.PI*2;T.box(o*.12,o*.025,o*.025,M,Math.cos(P)*o*.302,Math.sin(P)*o*.302,xn)}}d.push([T,"spin",[0,o*.5,0]])}else{f(o*(.6+r*.18),o*(.66+r*.18),o*.05,0,0,0,le,10),v(o*.28,0,o*.05,0,pe,1.05),f(o*.29,o*.29,o*.04,0,o*.05,0,Ze,16),y(o*.3,0,o*.12,o*.28,6);const T=(M,E,P,R,z,N=0)=>{u.add(new Sn(P,R,z).rotateY(N).translate(M,o*.05+R/2,E),pe,.95);for(let L=0;L<Math.max(1,Math.round(R/(o*.08)));L++)u.add(new Sn(P*.85,o*.018,z+o*.008).rotateY(N).translate(M,o*.09+L*o*.08,E),xn)},x=(M,E,P,R)=>u.strut(M,o*.09,E,P,o*.09,R,o*.07,pe,.85);T(o*.48,0,o*.22,o*.16,o*.4),x(o*.28,0,o*.37,0),T(-o*.42,o*.18,o*.3,o*.12,o*.2,.4),x(-o*.26,o*.1,-o*.3,o*.14),r>=2&&(T(-o*.2,-o*.5,o*.18,o*.5,o*.18),u.box(o*.2,o*.03,o*.2,-o*.2,o*.56,-o*.5,Ze),x(-o*.1,-o*.26,-o*.17,-o*.41),v(o*.18,o*.42,o*.05,-o*.48,pe,1.05),x(o*.3,-o*.2,o*.38,-o*.36)),r>=3&&(v(o*.34,-o*.62,o*.05,-o*.18,pe,1.05),f(o*.35,o*.35,o*.04,-o*.62,o*.05,-o*.18,Ze,16),T(o*.15,o*.55,o*.5,o*.1,o*.16),T(o*.15,o*.55,o*.36,o*.2,o*.1),T(o*.72,-o*.2,o*.16,o*.7,o*.16),x(o*.06,o*.27,o*.12,o*.46));for(const M of[2,5])u.radiator(Math.cos(M)*o*(.6+r*.12),o*.05,Math.sin(M)*o*(.6+r*.12),o*.22,o*.2,Math.PI/2,2,o*.012);u.box(o*.04,o*.04,o*.04,0,o*.35,0,ln)}else if(n==="bureau"){f(o*.4,o*.48,o*.24,0,0,0,pe,8),f(o*.41,o*.41,o*.035,0,o*.18,0,Ze,8),u.box(o*.3,o*.025,o*.008,0,o*.12,o*.42,xn),f(o*.13,o*.16,o*.12,o*.62,0,-o*.1,le,8),u.sphere(o*.2,o*.62,o*.3,-o*.1,pe,1.12,16),f(o*.06,o*.08,o*.22,-o*.18,o*.24,o*.12,le,8),u.add(new ft(o*.08,o*.08,o*.16,12).rotateX(.8).translate(-o*.18,o*.52,o*.16),pe),u.add(new ft(o*.055,o*.055,o*.01,12).rotateX(.8).translate(-o*.18,o*.579,o*.221),xn);const T=-o*.62,x=-o*.3;for(const M of[0,2.1,4.2])u.strut(T+Math.cos(M)*o*.1,0,x+Math.sin(M)*o*.1,T+Math.cos(M)*o*.03,o*1.15,x+Math.sin(M)*o*.03,o*.02);for(let M=1;M<5;M++)f(o*(.1-M*.016),o*(.1-M*.016),o*.012,T,o*M*.23,x,le,3);u.box(o*.04,o*.04,o*.04,T,o*1.18,x,ln),r>=2&&(u.strut(o*.3,o*.1,o*.25,o*.55,o*.1,o*.52,o*.12,pe,.9),f(o*.26,o*.3,o*.2,o*.68,0,o*.68,pe,8),f(o*.27,o*.27,o*.03,o*.68,o*.15,o*.68,Ze,8),u.add(new Sn(o*.42,o*.36,o*.03).rotateX(-.5).translate(o*.68,o*.38,o*.92),le,.6),u.frame(o*.44,o*.03,o*.03,o*.68,o*.22,o*.86,o*.015),u.sphere(o*.13,-o*.15,o*.18,-o*.62,pe,1.12,14),f(o*.1,o*.12,o*.08,-o*.15,0,-o*.62,le,8))}else if(n==="lab"){u.box(o*.7,o*.2,o*.36,0,o*.1,0,pe),u.box(o*.72,o*.035,o*.38,0,o*.2,0,Ze),y(o*.6,0,o*.12,o*.18,8);const T=(x,M,E,P)=>{f(o*.06,o*.1,o*.3,x,0,M,le,8),u.dish(E,x,o*.34,M,P)};if(T(-o*.55,-o*.3,o*.34,[.3,1,.5]),r>=2){u.strut(o*.35,o*.1,0,o*.6,o*.1,0,o*.1,pe,.9),u.add(new ft(o*.16,o*.16,o*.5,16).rotateZ(Math.PI/2).translate(o*.85,o*.16,0),pe),u.add(new ft(o*.165,o*.165,o*.1,16).rotateZ(Math.PI/2).translate(o*.85,o*.16,0),Ze),f(o*.12,o*.14,o*.1,o*.3,0,o*.5,le,10);for(const x of[-1,1])u.box(o*.03,o*.22,o*.05,o*.3+x*o*.11,o*.2,o*.5,le);u.add(new ft(o*.09,o*.1,o*.55,14).rotateX(.6).translate(o*.3,o*.38,o*.55),pe,1.05),u.add(new ft(o*.07,o*.07,o*.01,14).rotateX(.6).translate(o*.3,o*.612,o*.707),le,.4),u.box(o*.22,o*.16,o*.2,o*.85,o*.08,-o*.42,le,.8),u.radiator(o*.85,o*.16,-o*.42,o*.3,o*.26,Math.PI/2,2,o*.012)}if(r>=3){f(o*.27,o*.27,o*.14,-o*.15,0,o*.62,pe,16),v(o*.27,-o*.15,o*.14,o*.62,pe,1.1),u.add(new Sn(o*.07,o*.28,o*.02).translate(-o*.15,o*.3,o*.88),le,.4),u.strut(-o*.15,o*.1,o*.2,-o*.15,o*.1,o*.38,o*.1,pe,.9);for(let x=0;x<3;x++)T(-o*(.5+x*.32),-o*.75,o*.18,[.2,1,.4]);for(const[x,M]of[[-.95,.1],[-1.25,.1],[-.95,.4],[-1.25,.4]])u.box(o*.025,o*.2,o*.025,x*o,o*.1,M*o,le);u.box(o*.36,o*.025,o*.36,-o*1.1,o*.2,o*.25,le,.75),u.box(o*.1,o*.1,o*.1,-o*1.02,o*.27,o*.18,pe),u.sphere(o*.06,-o*1.2,o*.28,o*.34,pe,1.1,10),u.strut(-o*.35,o*.1,0,-o*.92,o*.2,o*.2,o*.05,pe,.8),u.solar(-o*.55,o*.1,-o*1.15,o*.5,o*.3,.25,o*.012)}u.box(o*.04,o*.04,o*.04,-o*.55,o*.72,-o*.3,ln)}else{const T=o*(.9+(r-1)*.45);f(T*.62,T*.7,o*.03,0,0,0,le,14,.7);const x=(E,P)=>{u.box(o*.32,o*.08,o*.32,E,o*.04,P,le);for(const[R,z]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.strut(E+R*o*.14,o*.08,P+z*o*.14,E+R*o*.05,o*.5,P+z*o*.05,o*.035);u.box(o*.16,o*.16,o*.16,E,o*.52,P,pe),f(o*.035,o*.035,o*.5,E,0,P,le,6),u.box(o*.2,o*.12,o*.04,E,o*.14,P+o*.17,pe,.8)},M=(E,P)=>{for(const[R,z]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.box(o*.025,o*.2,o*.025,E+R*o*.1,o*.1,P+z*o*.1,le);u.add(new ft(o*.17,o*.06,o*.2,4).rotateY(Math.PI/4).translate(E,o*.3,P),pe),u.add(new ft(o*.175,o*.175,o*.03,4).rotateY(Math.PI/4).translate(E,o*.41,P),Ze)};if(x(-T*.3,0),M(0,-o*.12),u.box(o*.2,o*.03,o*.06,-T*.15,o*.25,-o*.06,le),u.box(o*.16,o*.12,o*.14,o*.2,o*.06,o*.2,pe),u.box(o*.1,o*.025,o*.004,o*.2,o*.08,o*.272,xn),r>=2){x(-T*.3,-o*.45),u.box(T*.6,o*.06,o*.08,T*.1,o*.3,-o*.12,pe,.85);for(let E=0;E<3;E++)u.box(o*.03,o*.3,o*.03,T*(-.1+E*.2),o*.15,-o*.12,le);f(o*.2,o*.2,o*.5,T*.42,0,-o*.12,pe,14),v(o*.2,T*.42,o*.5,-o*.12,pe,1.05),f(o*.205,o*.205,o*.06,T*.42,o*.36,-o*.12,Ze,14)}if(r>=3){u.box(o*.5,o*.3,o*.36,-T*.05,o*.15,o*.5,pe),u.box(o*.52,o*.04,o*.38,-T*.05,o*.3,o*.5,Ze),u.pipe(-T*.05,o*.3,o*.4,0,o*.42,-o*.12,o*.025);for(const E of[.38,.62])u.radiator(-T*.05-o*.25,o*.3,o*E,o*.3,o*.18,Math.PI/2+.3,2,o*.012);f(o*.16,o*.16,o*.42,T*.42,0,o*.3,pe,14),v(o*.16,T*.42,o*.42,o*.3,pe,1.05),f(o*.3,o*.32,o*.03,T*.45,0,o*.75,le,12);for(const E of[-1,1])u.box(o*.04,o*.5,o*.04,T*.45+E*o*.3,o*.25,o*.55,le);u.box(o*.68,o*.05,o*.06,T*.45,o*.52,o*.55,pe),u.box(o*.08,o*.08,o*.1,T*.45,o*.46,o*.55,le),u.box(o*.04,o*.04,o*.04,T*.45+o*.3,o*.06,o*.75,Wi)}u.box(o*.04,o*.04,o*.04,-T*.3,o*.62,0,ln)}const h=T=>{if(m&&T.applyMatrix4(m),!i)return new Ot(T,a);const x=Pr(T,s);return x.userData.set(c,1,!0),x},g=new Fn;g.userData.type=n,g.add(h(u.build(1)));for(const[T,x,M]of d){if(x==="wip"&&!i)continue;const E=h(T.build(1));x==="spin"&&(E.position.set(...M),((S=g.userData).spin||(S.spin=[])).push({mesh:E,axis:"x",rate:.5})),x==="wip"&&((b=g.userData).wip||(b.wip=[])).push(E),g.add(E)}if(p)return g.rotation.x=Math.PI/2+.35,g;const w=Mi(e.id*17+t*101+(n==="mine"?5:0)),_=new D(w()-.5,(w()-.5)*.9,w()-.5).normalize();return g.position.copy(_).multiplyScalar(e.size*(e.kind==="asteroid"?1.02:.99)),g.quaternion.setFromUnitVectors(new D(0,1,0),_),g}const Bp=()=>.36,Gp=n=>Math.min(.86*Bp(),.45*n.size);function r0(n,e){const t=new D(Math.cos(e),Math.sin(e),0),i=new D(-Math.sin(e),Math.cos(e),0),r=new D(0,0,-1);return new Ut().makeBasis(i,t,r).setPosition(t.clone().multiplyScalar(n))}function Wb(n,e,t,i){let r=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^Math.imul(i,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Xb(n,e,t,i){const r=Math.floor(n),s=Math.floor(e),a=Math.floor(t),c=n-r,o=e-s,l=t-a,u=c*c*(3-2*c),p=o*o*(3-2*o),d=l*l*(3-2*l),f=(y,m,h)=>y+(m-y)*h,v=(y,m,h)=>Wb(r+y,s+m,a+h,i);return f(f(f(v(0,0,0),v(1,0,0),u),f(v(0,1,0),v(1,1,0),u),p),f(f(v(0,0,1),v(1,0,1),u),f(v(0,1,1),v(1,1,1),u),p),d)}function $a(n,e,t,i,r){let s=0,a=.5,c=1;for(let o=0;o<r;o++)s+=Xb(n*c,e*c,t*c,i+o)*a,c*=2.03,a*=.5;return s}function Vp(n,e,t=5,i=1){const r=Mi(n*97+1);let s=new of(e,t);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=wb(s);const a=Array.from({length:5},()=>({d:new D(r()-.5,r()-.5,r()-.5).normalize(),f:.6+r()*1.2,ph:r()*6.28,a:.05+r()*.08})),c=Array.from({length:7+Math.floor(r()*5)},()=>({d:new D(r()-.5,r()-.5,r()-.5).normalize(),size:.15+r()*.3})),o=new D(1.2+r()*.6,.75+r()*.2,.85+r()*.35),l=Math.floor(n)%1e3,u=s.attributes.position,p=new D,d=new D,f=[],v=r()<.35,y=v?[1.08,.95,.82]:[1,.98,.95],m=v?.26:.16;for(let h=0;h<u.count;h++){p.fromBufferAttribute(u,h),d.copy(p).normalize();let g=1;for(const S of a)g+=S.a*Math.sin(d.dot(S.d)*S.f*3+S.ph);g+=(Math.abs($a(d.x*2.2,d.y*2.2,d.z*2.2,l+7,3)-.5)-.15)*.25*i;let w=0;for(const S of c){const b=d.distanceTo(S.d)/S.size;if(b<1){const T=1-b*b;g-=.11*T*S.size*3,w=Math.max(w,T)}else b<1.3&&(g+=.025*(1-(b-1)/.3)*S.size*3)}g+=($a(d.x*7,d.y*7,d.z*7,l+5,3)-.5)*.09*i,p.multiplyScalar(g).multiply(o),u.setXYZ(h,p.x,p.y,p.z);let _=m+($a(d.x*2.5,d.y*2.5,d.z*2.5,l+9,4)-.5)*.18+(g-1)*.25-w*.04;_+=($a(d.x*12,d.y*12,d.z*12,l+2,2)-.5)*.08,_=Math.max(.05,Math.min(.5,_)),f.push(_*y[0],_*y[1],_*y[2])}return s.setAttribute("color",new yt(f,3)),s.computeVertexNormals(),s}function Hp(n={}){const e=new Ic({vertexColors:!0,roughness:.92,metalness:.04}),t=n.scale??6,i=!!n.tumble;return e.onBeforeCompile=r=>{r.uniforms.uT=n.uT||{value:0},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
        ${pr}
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
        }`)},e}const Jl={mat:null};function s0(n){const e=Vp(n.id,n.size,5);return Jl.mat||(Jl.mat=Hp({scale:5})),new Ot(e,Jl.mat)}function qb(n,e,t,i,r){const s=new Fn,a=i==="high"?2400:900,c=[0,1,2,3].map(v=>Vp(500+v*17,1,2,1.3)),o=Hp({scale:4,tumble:!0,uT:r}),l=Mi(Math.floor(n*131)),u=[],p=3;for(let v=0;v<p;v++){const y=new Fn,m=n+(e-n)*v/p,h=n+(e-n)*(v+1)/p;y.userData.omega=Math.PI*2/t((m+h)/2),s.add(y),u.push(y);const g=Math.ceil(a/p/c.length);for(const w of c){const _=new Rc(w,o,g),S=new Ut,b=new qn,T=new D,x=new D;for(let M=0;M<g;M++){const E=m+l()*(h-m),P=l()*Math.PI*2,R=(l()+l()+l()-1.5)*1.6;T.set(Math.cos(P)*E,R,Math.sin(P)*E),b.setFromEuler(new gr(l()*6,l()*6,l()*6));const z=.04+Math.pow(l(),4)*.32;S.compose(T,b,x.setScalar(z)),_.setMatrixAt(M,S)}_.frustumCulled=!1,y.add(_)}}const d=new Kc(n-4,e+4,256,4).rotateX(-Math.PI/2),f=new Ot(d,new $t({uniforms:{uR0:{value:n-4},uR1:{value:e+4}},vertexShader:`#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vW;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`#include <logdepthbuf_pars_fragment>
      ${pr}
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
      }`,blending:zn,transparent:!0,depthWrite:!1,side:ai}));return s.add(f),{group:s,update(v){for(const y of u)y.rotation.y=-y.userData.omega*v},dispose(){for(const v of c)v.dispose();d.dispose()}}}const wo=0,To=1,Eo=2,Ql=3,o0=4,eu=5;function Yb(n,e=4096){const t={value:0},i=new Ap;i.setAttribute("position",new yt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);const r={},s=(m,h)=>{const g=new Zs(new Float32Array(e*h),h);g.setUsage(Er),i.setAttribute(m,g),r[m]=g};s("aP0",3),s("aVel",3),s("aDrift",3),s("aDir",3),s("aCol",3),s("aTime",2),s("aSize",2),s("aKind",2),r.aTime.array.fill(-1e6),i.instanceCount=e;const a=new $t({uniforms:{uT:t,uPx:{value:.002}},vertexShader:`${Ui}
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
        float drag = aKind.x == ${Eo}.0 ? 1.2 : aKind.x == ${To}.0 ? 2.5 : 0.0;
        float travel = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
        vec3 p = aP0 + aVel * travel + aDrift * t; // drift: carried along with the world it's at
        float size = mix(aSize.x, aSize.y, aKind.x == ${To}.0 ? sqrt(age) : age);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Far away, a flash only a pixel or two across fades rather than sparkles.
        vFade = aKind.x == ${wo}.0 || aKind.x == ${To}.0 || aKind.x == ${Ql}.0 ? clamp(size / (uPx * -mv.z) / 4.0, 0.12, 1.0) : 1.0;
        // Rounds, beams and sparks never get thinner than about a pixel.
        if (aKind.x == ${Eo}.0 || aKind.x == ${o0}.0 || aKind.x == ${eu}.0) size = max(size, uPx * -mv.z * (aKind.x == ${eu}.0 ? 2.0 : 1.3));
        vec3 dirW = aDir;
        if (aKind.x == ${Eo}.0) dirW = -aVel * exp(-drag * t) * 0.06;
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
        ${Ni}
      }`,fragmentShader:`${ki}
      ${pr}
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        ${Fi}
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
      }`,blending:zn,transparent:!0,depthWrite:!1,side:ai}),c=new Ot(i,a);c.frustumCulled=!1,c.renderOrder=5,n.add(c);let o=0,l=!1;const u=new ot;function p(m,h,g,w,_,S,b,T,x=0,M=1){const E=o;o=(o+1)%e,r.aP0.setXYZ(E,h.x,h.y,h.z),r.aVel.setXYZ(E,g?g.x:0,g?g.y:0,g?g.z:0),r.aDrift.setXYZ(E,v.x,v.y,v.z),r.aDir.setXYZ(E,w?w.x:0,w?w.y:0,w?w.z:0),u.set(_).multiplyScalar(M),r.aCol.setXYZ(E,u.r,u.g,u.b),r.aTime.setXY(E,t.value+x,S),r.aSize.setXY(E,b,T),r.aKind.setXY(E,m,Math.random()),l=!0}const d=new D,f=new D,v=new D,y=()=>d.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{uT:t,drift:v,update(m,h){if(t.value=m,h&&(a.uniforms.uPx.value=h),l){for(const g in r)r[g].needsUpdate=!0;l=!1}},explosion(m,h=1){p(wo,m,null,null,"#ffffff",.16,.3*h,1.5*h,0,3.5),p(Ql,m,null,null,"#9fd4ff",.5,.15*h,1.9*h,0,1.2),p(To,m,y().multiplyScalar(.2),null,"#ffffff",.75+Math.random()*.2,.25*h,.95*h,.02,2.2);for(let g=0;g<2;g++)p(To,f.copy(m).add(y().multiplyScalar(.25*h)),y().multiplyScalar(.4),null,"#ffffff",.55,.12*h,.5*h,.08+g*.12,2);for(let g=0;g<16;g++)p(Eo,m,y().multiplyScalar((1.5+Math.random()*3.5)*h),null,"#ff9a40",.5+Math.random()*.8,.025*h,.015*h,0,3);for(let g=0;g<6;g++)p(wo,m,y().multiplyScalar(.4+Math.random()*.8),null,"#ff7a30",1.5+Math.random()*1.5,.06*h,.025*h,.05,2.5)},impact(m,h,g=!1){p(wo,m,null,null,h,.15,.1,g?.6:.35,0,1.6);for(let w=0;w<(g?6:3);w++)p(Eo,m,y().multiplyScalar(1.5+Math.random()*3),null,"#ffd090",.25+Math.random()*.3,.02,.01,0,2.5)},intercept(m){p(wo,m,null,null,"#dff4ff",.12,.05,.3,0,3)},bolt(m,h,g,w,_,S,b=0){f.subVectors(h,m);const T=d.copy(f).divideScalar(w),x=f.clone().normalize().multiplyScalar(-_);p(o0,m,T,x,g,w,S,S,b,1.6)},beam(m,h,g,w=.3){f.subVectors(h,m),p(eu,h,null,f.clone().negate(),g,w,.045,.02,0,1.4)},ring(m,h,g,w=1.2){p(Ql,m,null,null,h,w,g*.3,g,0,1.5)}}}const $p=`
vec3 dirFromUv(vec2 uv) {
  float phi = uv.x * 6.28318530718;
  float th = (1.0 - uv.y) * 3.14159265359;
  return vec3(-cos(phi) * sin(th), cos(th), sin(phi) * sin(th));
}`,Kb=`
${pr}
${$p}
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
}`,jb=`
${pr}
${$p}
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
}`,Wp=["temperate","desert","ice","jungle","steppe","ocean"],a0={temperate:[.35,.6,1],desert:[1,.7,.45],ice:[.6,.8,1],jungle:[.4,.7,.85],steppe:[.55,.62,.9],ocean:[.3,.55,1]},tu=[[[.5,.33,.18],[.82,.7,.52],[.62,.3,.15]],[[.3,.45,.6],[.7,.82,.88],[.2,.3,.55]],[[.22,.42,.4],[.55,.72,.66],[.15,.3,.32]],[[.45,.2,.12],[.78,.55,.4],[.35,.12,.08]],[[.35,.28,.45],[.7,.62,.75],[.25,.18,.4]],[[.62,.55,.4],[.88,.84,.72],[.5,.4,.28]]];function Xp(n){return tu[Math.floor(n.hue*tu.length)%tu.length]}function Zb(n){if(n.home)return{kind:0,type:Math.max(0,Wp.indexOf(n.biome||"temperate")),atmo:a0[n.biome]||a0.temperate,atmoK:1,clouds:1,relief:.06};if(n.giant)return{kind:3,type:0,atmo:Xp(n)[1].map(t=>t*.9+.1),atmoK:.55,clouds:0,relief:0};if(n.kind==="planet"){const t=Math.floor(n.hue*4)%4,i=[[1,.6,.4],null,[1,.85,.55],[.6,.75,1]][t];return{kind:1,type:t,atmo:i,atmoK:t===2?1.2:.45,clouds:0,relief:t===2?0:.09,airless:t===1}}return{kind:2,type:Math.floor(n.hue*4)%4,atmo:null,atmoK:0,clouds:0,relief:.12,airless:!0}}function Jb(n,e){const t=new Ht;t.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Ot(t);i.frustumCulled=!1;const r=new qc;r.add(i);const s=new jc,a=new $t({uniforms:{uKind:{value:0},uType:{value:0},uSeed:{value:0},uPalA:{value:new D},uPalB:{value:new D},uPalC:{value:new D},uStorm:{value:[0,1,2,3].map(()=>new Qt)}},vertexShader:Go,fragmentShader:Kb,depthTest:!1,depthWrite:!1}),c=new $t({uniforms:{tAlb:{value:null},uTexel:{value:new Qe},uRelief:{value:1},uKind:{value:0},uType:{value:0},uSeed:{value:0},uClouds:{value:0}},vertexShader:Go,fragmentShader:jb,depthTest:!1,depthWrite:!1}),o=Math.min(8,n.capabilities.getMaxAnisotropy()),l=(u,p)=>{const d=new ui(u,p,{depthBuffer:!1,generateMipmaps:!0,minFilter:Rr,magFilter:gn,wrapS:Jo,wrapT:qi});return d.texture.anisotropy=o,d};return function(p,d){const f=e()==="high",v=d.kind===0?f?2048:1024:f?1024:512,y=v/2,m=(p.id*7.31+p.hue*13.7)%97,h=a.uniforms;if(h.uKind.value=d.kind,h.uType.value=d.type,h.uSeed.value=m,d.kind===3){const b=Xp(p);h.uPalA.value.fromArray(b[0]),h.uPalB.value.fromArray(b[1]),h.uPalC.value.fromArray(b[2]);let T=Math.floor(m*1e3);const x=()=>(T=T*16807%2147483647)/2147483647;h.uStorm.value.forEach((M,E)=>{const P=(x()-.5)*(E?1.4:.9),R=x()*Math.PI*2;M.set(Math.cos(P)*Math.cos(R),Math.sin(P),Math.cos(P)*Math.sin(R),E===0?.12+x()*.06:.04+x()*.03)})}const g=l(v,y),w=l(v,y),_=n.getRenderTarget();i.material=a,n.setRenderTarget(g),n.render(r,s);const S=c.uniforms;return S.tAlb.value=g.texture,S.uTexel.value.set(1/v,1/y),S.uRelief.value=d.relief*(v/1024)*.5+d.relief*.5,S.uKind.value=d.kind,S.uType.value=d.type,S.uSeed.value=m,S.uClouds.value=d.clouds,i.material=c,n.setRenderTarget(w),n.render(r,s),n.setRenderTarget(_),{alb:g.texture,aux:w.texture,rts:[g,w]}}}const yi={pos:{value:[new D,new D]},col:{value:[new D(1.22,1.17,1.08),new D]}},cf=`
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
}`;function Qb(n,e,t,i){const r=e.kind===3,s={tAlb:{value:t.alb},tAux:{value:t.aux},uStarPos:yi.pos,uStarCol:yi.col,uCity:{value:0},uCityCol:{value:new D(2.4,1.5,.7)},uCloudShift:{value:0},uCloudK:{value:e.clouds?.55:0},uOcean:{value:e.kind===0&&e.type!==1?1:0},uAirless:{value:e.airless?1:0},uAtmo:{value:new D(...e.atmo||[0,0,0])},uAtmoK:{value:e.atmoK},uT:{value:0},uFlow:{value:r?1:e.kind===1&&e.type===2?.4:0},uOcc:{value:[0,1,2,3].map(()=>new Qt(0,0,0,0))},uRingN:{value:new D(0,1,0)},uRingIn:{value:0},uRingOut:{value:0},tRing:{value:i?i.tex:null},uCenter:{value:new D},uRadius:{value:n.size}};return new $t({uniforms:s,vertexShader:`${Ui}
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
        ${Ni}
      }`,fragmentShader:`${ki}
      ${cf}
      uniform sampler2D tAlb, tAux, tRing;
      uniform vec3 uStarPos[2], uStarCol[2];
      uniform float uCity, uCloudShift, uCloudK, uOcean, uAirless, uAtmoK, uT, uFlow, uRingIn, uRingOut, uRadius;
      uniform vec3 uCityCol, uAtmo, uRingN, uCenter;
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      vec3 fromS(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
      void main() {
        ${Fi}
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
      }`})}function eS(n){return new $t({uniforms:{tAux:{value:n.aux},uStarPos:yi.pos,uStarCol:yi.col,uOcc:{value:[0,1,2,3].map(()=>new Qt(0,0,0,0))},uHoles:{value:Array.from({length:6},()=>new Qt(0,1,0,2))}},vertexShader:`${Ui}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        vUv = uv;
        vDir = normalize(position);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Ni}
      }`,fragmentShader:`${ki}
      ${cf}
      uniform sampler2D tAux; uniform vec3 uStarPos[2], uStarCol[2]; uniform vec4 uHoles[6];
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        ${Fi}
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
      }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})}function tS(n,e,t="high"){const i=e.kind===3?.035:e.kind===0?.045:.035,r=n.size*(1+i),s=e.atmo,a=new D(s[0],s[1],s[2]),c=new Ot(new Bi(r,64,40),new $t({uniforms:{uCenter:{value:new D},uRp:{value:n.size*.998},uRa:{value:r},uStarPos:yi.pos,uStarCol:yi.col,uBeta:{value:a},uK:{value:e.atmoK},uOcc:{value:[0,1,2,3].map(()=>new Qt(0,0,0,0))}},vertexShader:`${Ui}
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
          ${Ni}
        }`,fragmentShader:`${ki}
        ${cf}
        uniform vec3 uCenter, uBeta; uniform float uRp, uRa, uK;
        uniform vec3 uStarPos[2], uStarCol[2];
        varying vec3 vWorld;
        void main() {
          ${Fi}
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
        }`,defines:{STEPS:t==="high"?8:5},transparent:!0,blending:zn,depthWrite:!1}));return c.renderOrder=1,c}function nS(n){const r=new Uint8Array(2048);let s=Math.floor(n.hue*1e6)+n.id*97;const a=()=>(s=s*16807%2147483647)/2147483647,c=Array.from({length:3},()=>({at:.2+a()*.7,w:.006+a()*.025})),o=new Float32Array(512);let l=.5;for(let f=0;f<512;f++)l+=(a()-.5)*.18,l+=(.55-l)*.04,o[f]=l;for(let f=0;f<512;f++){const v=f/511;let y=(o[Math.max(0,f-1)]+o[f]+o[Math.min(511,f+1)])/3;y*=.65+.35*Math.sin(v*9+a()*.2),y*=Math.min(1,v/.1)*Math.min(1,(1-v)/.06),v>.42&&v<.72&&(y*=1.4),v<.18&&(y*=.45);for(const g of c)Math.abs(v-g.at)<g.w&&(y*=.06);y=Math.max(0,Math.min(1,y));const m=.8+.2*o[f*7%512],h=v<.3?.6:.2;r.set([(170+h*20)*m,(163+h*5)*m,(150-h*25)*m,y*255],f*4)}const u=new Jd(r,512,1,_i);u.colorSpace=Wn,u.magFilter=gn,u.minFilter=gn,u.needsUpdate=!0;const p=new Kc(n.size*1.35,n.size*2.35,160,1),d=new Ot(p,new $t({uniforms:{tRing:{value:u},uIn:{value:1.35},uOut:{value:2.35},uR:{value:n.size},uCenter:{value:new D},uStarPos:yi.pos,uStarCol:yi.col},vertexShader:`${Ui}
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        vLocal = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Ni}
      }`,fragmentShader:`${ki}
      uniform sampler2D tRing; uniform float uIn, uOut, uR; uniform vec3 uCenter;
      uniform vec3 uStarPos[2], uStarCol[2];
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        ${Fi}
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
      }`,transparent:!0,depthWrite:!1,side:ai}));return d.userData.ring={tex:u,inner:1.35,outer:2.35},d}const qp=["#58b8ff","#ff6a5a","#ffb347"],iS="#8a90a6",xt=n=>n===Oe?iS:qp[n],c0=6,Os=.45,rS=.55,nu=.03,l0=.8,sS=new D(0,1,0),iu=-.045,Wa=400;function oS(n,e,t,i=1){const r=document.createElement("canvas");r.width=n*i,r.height=e*i;const s=r.getContext("2d");s.scale(i,i),t(s,n,e);const a=new nf(r);return a.colorSpace=Wn,a}const ru=oS(128,128,n=>{const e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.1)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)}),Yp={value:1},aS=new ro(2,2);function u0(n=!1){const e=new Ot(aS,new $t({uniforms:{uColor:{value:new ot("#ffffff")},uOpacity:{value:.8},uLvl:{value:0},uWidth:{value:1.6},uPR:Yp},vertexShader:`varying vec2 vQ;
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
      }`,transparent:!0,depthWrite:!1,depthTest:n}));return e.frustumCulled=!1,e.renderOrder=10,e}const Kp={value:new Qe(1,1)};function cS(n){const e=n.parent!==null?192:512,t=[],i=[],r=[],s=[],a=[],c=p=>[Math.cos(p)*n.r,Math.sin(p)*n.r*n.incl,Math.sin(p)*n.r];for(let p=0;p<=e;p++){const d=p/e*Math.PI*2;for(const f of[-1,1])t.push(...c(d)),i.push(...c(d+.01)),r.push(d),s.push(f);if(p<e){const f=p*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}}const o=new Ht;o.setAttribute("position",new yt(t,3)),o.setAttribute("nextPos",new yt(i,3)),o.setAttribute("ang",new yt(r,1)),o.setAttribute("side",new yt(s,1)),o.setIndex(a);const l=n.parent!==null,u=new Ot(o,new $t({uniforms:{uTh:{value:0},uRes:Kp,uWidth:{value:l?1.4:2.2},uColor:{value:new ot(l?"#5d6a8c":"#7383ad")},uOpacity:{value:l?.55:.75}},vertexShader:`attribute vec3 nextPos; attribute float ang; attribute float side;
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
      }`,transparent:!0,depthWrite:!1,side:ai}));return u.frustumCulled=!1,u}const jp={value:0},su=new $t({uniforms:{uT:jp},vertexShader:`${Ui}
    varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vW = wp.xyz;
      vec4 mv = viewMatrix * wp;
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
      ${Ni}
    }`,fragmentShader:`${ki}
    uniform float uT; varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      ${Fi}
      float rim = pow(max(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0), 2.0);
      float scan = 0.55 + 0.45 * sin(vW.y * 60.0 - uT * 6.0);
      float flick = 0.85 + 0.15 * sin(uT * 23.0) * sin(uT * 7.0);
      gl_FragColor = vec4(vec3(0.45, 0.8, 1.3) * (0.12 + rim * 0.9) * scan * flick, 1.0);
    }`,blending:zn,transparent:!0,depthWrite:!1});function lS(n,e,t={}){const i=new Sb({canvas:n,antialias:!1,powerPreference:"high-performance"});let r=t.quality||"high";const s=()=>Math.min(window.devicePixelRatio||1,r==="high"?2:1.25);let a=s();i.setPixelRatio(1),i.autoClear=!0;const c=new qc,o=new hi(45,1,.02,2e4),l=Tb(i);l.setSamples(r==="high"?4:2);const u=Ab(i,r);c.add(u.stars),c.environmentIntensity=.9,c.backgroundIntensity=.7;const p=r==="high"?700:350,d=new Ht;{const F=new Float32Array(p*3);for(let H=0;H<F.length;H++)F[H]=Math.random();d.setAttribute("position",new hn(F,3))}const f=new $t({uniforms:{uBox:{value:50},uPR:{value:1}},vertexShader:`uniform float uBox, uPR; varying float vA;
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
      }`,blending:zn,transparent:!0,depthWrite:!1}),v=new tf(d,f);v.frustumCulled=!1,c.add(v);const y=jh(c0,r),m=y.group;c.add(m);const h=jh(c0,r);h.tint.set(1,.78,.6);const g=h.group;g.visible=!1,g.add(new wh("#ffd9b0",1.4,0,0)),c.add(g),c.add(new wh("#fff1dd",3,0,0)),c.add(new S1("#2a3550",.7));const w=new Fn;c.add(w);let _=[],S=6e3;const b={az:.4,pol:.9,dist:380,minDist:1.2,maxDist:2200,target:new D,vaz:0,vpol:0,follow:null};let T=null,x=null;const M=Jb(i,()=>r),E=[],P=new Map;function R(F,H){const K=`${F}:${H}`;return P.has(K)||P.set(K,new Bi(F,H?128:96,H?80:56)),P.get(K)}function z(F){const H=F.scale||1;b.maxDist=2200*H,S=6e3*H;{const $=Mi((F.nameSeed||1)+77),q=Math.max(...F.bodies.filter(ne=>ne.kind==="planet"&&ne.parent===null&&!ne.star).map(ne=>ne.r)),W=ne=>ne<.3?["desert","steppe"]:ne<.55?["temperate","ocean","jungle"]:ne<.68?["steppe","temperate"]:["ice","steppe"],se=new Set;for(const ne of F.bodies.filter(ye=>ye.home)){const ye=W(ne.r/q).filter(Ue=>!se.has(Ue)),Ee=ye.length?ye[Math.floor($()*(ne.r/q>=.3&&ne.r/q<.55?ye.length:1))]:Wp.find(Ue=>!se.has(Ue))||"temperate";se.add(Ee),ne.biome=Ee}}u.bake((F.nameSeed||1)+1),c.background=u.background,c.environment=u.env;for(const $ of E)$.dispose();E.length=0,w.clear(),e.innerHTML="",Rt.length=0,_=F.bodies.map($=>{const q=new Fn;let W,se=null,ne=null,ye=null,Ee=null;if($.kind==="station")W=t0($.size*l0,$.id%e0,N.uT);else if($.kind==="asteroid")W=s0($);else if($.visitor){W=s0($),ne=new Fn;const gt=Ct=>new tc(new Bo({map:ru,color:Ct,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));ne.userData.ion=Array.from({length:26},()=>gt("#9fd0ff")),ne.userData.dust=Array.from({length:22},()=>gt("#fff0cf")),ne.userData.coma=gt("#e8f6ff");for(const Ct of[...ne.userData.ion,...ne.userData.dust,ne.userData.coma])ne.add(Ct);q.add(ne),se=t0(.7,0,N.uT),n0(se,[{type:"shipyard",level:1,done:!0},{type:"habitat",level:1,done:!0}],null),se.userData.set("#3a3d44",.8,!1),q.add(se)}else{const gt=Zb($),Ct=M($,gt);E.push(...Ct.rts);const zt=.2+$.hue*.3;if($.giant&&$.hue>.4){ye=nS($),ye.rotation.x=Math.PI/2;const qt=new Fn;qt.rotation.z=zt,qt.add(ye),q.add(qt)}if(W=new Ot(R($.size,gt.kind===0||gt.kind===3?1:0),Qb($,gt,Ct,ye&&ye.userData.ring)),W.rotation.order="ZYX",W.rotation.z=zt,gt.atmo&&(Ee=tS($,gt,r),q.add(Ee)),gt.clouds){const qt=new Ot(R($.size*1.008,1),eS(Ct));qt.name="clouds",W.add(qt)}}q.add(W);const Ue=new Fn;W.add(Ue);const Ke=u0(!1);Ke.scale.setScalar($.size*3.2),q.add(Ke),w.add(q);const pt=cS($),be=new Fn;be.add(pt),w.add(be);const mt=document.createElement("div");mt.className="lbl",e.appendChild(mt),$.visitor&&(be.visible=!1);let qe=null;if($.perk&&mn[$.perk].range){const gt=mn[$.perk].range*H,Ct=[];for(let zt=0;zt<=96;zt++){const qt=zt/96*Math.PI*2;Ct.push(new D(Math.cos(qt)*gt,0,Math.sin(qt)*gt))}qe=new Po(new Ht().setFromPoints(Ct),new Fa({color:"#c7a6ff",transparent:!0,opacity:.55,dashSize:2.5,gapSize:2})),qe.computeLineDistances(),qe.visible=!1,w.add(qe)}return{b:$,g:q,body:W,surface:Ue,mark:Ke,lineHolder:be,line:pt,label:mt,shown:"",owner:null,pulse:0,sig:null,structs:null,hulk:se,tail:ne,reach:qe,ring:ye,atmo:Ee,ringN:new D,occ:[],ports:$.kind==="station"?zp($.id%e0):null}}),x&&(x.group.removeFromParent(),x.dispose(),x=null);const K=F.bodies.filter($=>$.kind==="asteroid");if(K.length){const $=K[0],q=Math.min(...K.map(se=>se.r))-2,W=Math.max(...K.map(se=>se.r))+2;x=qb(q,W,se=>$.period*Math.pow(se/$.r,1.5),r,N.uT),w.add(x.group)}for(const $ of _){const q=$.b;if(q.kind!=="planet"&&q.kind!=="moon")continue;const W=q.kind==="planet"?F.bodies.filter(se=>se.parent===q.id&&se.kind==="moon"):F.bodies.filter(se=>se.id===q.parent||se.parent===q.parent&&se.kind==="moon"&&se.id!==q.id);$.occ=W.slice(0,4).map(se=>se.id)}if(T&&(T.removeFromParent(),T=null),F.stars&&F.stars[1]){const $=[];for(let q=0;q<=256;q++){const W=No(F,1,q/256*F.stars[1].period);$.push(new D(W.x,W.y,W.z))}T=new Po(new Ht().setFromPoints($),new Fa({color:"#ffb070",transparent:!0,opacity:.35,dashSize:4,gapSize:4})),T.computeLineDistances(),w.add(T)}}const N=Nb(c,Wa),L=N.geometries;let O=0;const V=new Ht,oe=64,re=new Float32Array(200*oe*6),de=new Float32Array(200*oe*6);V.setAttribute("position",new hn(re,3)),V.setAttribute("color",new hn(de,3));const ge=new d1(V,new ef({vertexColors:!0,transparent:!0,opacity:.45}));ge.frustumCulled=!1,c.add(ge);const Be=[];function _e(F){if(!Be[F]){const H=u0(!0);c.add(H),Be[F]=H}return Be[F]}const et=new Ht().setFromPoints(Array.from({length:129},()=>new D)),Xe=new Po(et,new Fa({color:qp[0],dashSize:1.5,gapSize:1}));Xe.frustumCulled=!1,c.add(Xe);const Ve=Yb(c,r==="high"?4096:2048),ae=240,me=[],De=new ot("#ffffff");function it(F,H,K,$=0,q=!1){let W=me.find(se=>!se.live);if(!W){if(me.length>=ae)return;W={a:new D,b:new D,c:new ot},me.push(W)}if(W.live=!0,W.a.copy(F),W.b.copy(H),W.color=K,W.c.set(K).lerp(De,[.45,.6,.85][$]),W.rail=$===2,W.age=0,(W.drift??(W.drift=new D)).copy(Ve.drift),W.t0=zr,W.life=$===2?.05:kt.clamp(F.distanceTo(H)/($?24:14),.1,.7),W.pd=q&&Math.random()<.3,W.pd&&W.b.lerpVectors(F,H,.7+Math.random()*.2),$===2)Ve.beam(W.a,W.b,W.c,.35);else if($===1)Ve.bolt(W.a,W.b,W.c,W.life,.5,.035);else for(let se=0;se<4;se++)Ge.copy(W.b).add(Lt.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.25)),Ve.bolt(W.a,Ge,W.c,W.life,.22,.018,se*.045)}const fe=new D,Ge=new D,Lt=new D,ht=new D,Je=new D,rt=new D,nt=new D,At=new D(0,1,0),on=F=>window.innerHeight/(2*Math.tan(kt.degToRad(o.fov/2))*o.position.distanceTo(F)),Dt=(F,H)=>{let K=Math.imul(F^2654435769,2246822507)^Math.imul(H+1663821227,3266489909);return K^=K>>>15,K=Math.imul(K,739982445),((K^K>>>12)>>>0)/4294967296};function Yt(){const F=window.innerWidth,H=window.innerHeight;i.setSize(Math.round(F*a),Math.round(H*a),!1),n.style.width=F+"px",n.style.height=H+"px",l.setSize(F,H,a),Yp.value=a,Kp.value.set(F,H),o.aspect=F/H,o.updateProjectionMatrix()}const Kt=new D;function j(F){Kt.copy(m.position).project(o);let H=Kt.z<1&&Math.abs(Kt.x)<1.1&&Math.abs(Kt.y)<1.1?1:0;if(H){const $=o.position;Lt.copy(m.position).sub($);const q=Lt.length();Lt.divideScalar(q);for(const W of _){if(!W.g.visible)continue;Ge.copy(W.g.position).sub($);const se=Ge.dot(Lt);if(se<0||se>q)continue;if(Math.sqrt(Math.max(0,Ge.lengthSq()-se*se))<W.b.size){H=0;break}}H*=kt.clamp((1.1-Math.max(Math.abs(Kt.x),Math.abs(Kt.y)))*4,0,1)}const K=l.flare;K.vis+=(H*.9-K.vis)*Math.min(1,F*8+.05),K.pos.set(Kt.x*.5+.5,Kt.y*.5+.5)}const Vt=[],Rt=[];function k(F){if(!Rt[F]){const H=document.createElement("div");H.className="flbl",e.appendChild(H),Rt[F]=H}return Rt[F]}function A(F){for(const H of _){if(H.b.kind==="station")continue;const K=Vt[H.b.id];if(!K)continue;const $=H.b.size*1.25+.25,q=$*2,W=F.x-K.x,se=F.y-K.y,ne=F.z-K.z,ye=W*W+se*se+ne*ne;if(ye>=q*q)continue;const Ee=Math.sqrt(ye);if(Ee<1e-6){F.x=K.x+$;continue}const Ue=(Ee+(q-Ee)**2*$/(q*q))/Ee;F.set(K.x+W*Ue,K.y+se*Ue,K.z+ne*Ue)}}function Z(F,H,K,$,q,W,se,ne){const ye=Vt[F.id],Ee=Dt(q,H),Ue=Ee*Math.PI*2+W*$*(.8+Ee*.4),Ke=K*(1+Dt(H,q)*.15);return ne&&ne.set(-Math.sin(Ue),0,Math.cos(Ue)).multiplyScalar(Math.sign($)||1),se.set(ye.x+Math.cos(Ue)*Ke,ye.y+Math.sin(Ue*.7+Ee)*Ke*.15,ye.z+Math.sin(Ue)*Ke),F.kind==="station"&&$>0&&Ae(F,H,W,se,ne),se}const te=new D,ue=new D;function Ae(F,H,K,$,q){const W=Dt(H,F.id*7+3);if(W<.45)return;const se=120+W*80,ne=(K/se+Dt(F.id,H*5))%1,ye=kt.smootherstep(ne,.5,.57)*(1-kt.smootherstep(ne,.75,.82));if(ye<=0)return;const Ee=_[F.id]?.b===F?_[F.id]:_.find(be=>be.b===F);if(!Ee||!Ee.ports)return;const Ue=Ee.ports[H%Ee.ports.length];Ee.body.updateMatrixWorld();const Ke=F.size*l0;te.set(Ue.p[0]*Ke,Ue.p[1]*Ke,Ue.p[2]*Ke).applyMatrix4(Ee.body.matrixWorld),ue.set(Ue.n[0],Ue.n[1],Ue.n[2]).transformDirection(Ee.body.matrixWorld);const pt=Os*.7+Math.floor(H/Ee.ports.length)*Os*1.6;te.addScaledVector(ue,pt+(1-ye)*(1-ye)*1.2),$.lerp(te,ye),q&&q.lerp(ue.negate(),ye).normalize()}const Ce=new D,ce=new D,ve=new D,Te=new D,Fe=new D,Ie=new D,Re=F=>F.size*3+4;function Ye(F,H){const K=`${H?"d":"a"}${F.t0}:${F.T}`;if(F._blend&&F._blend.key===K)return F._blend.w;const $=X.bodies[H?F.from:F.to];let q=0;const W=se=>{const ne=H?F.t0+se:F.t0+F.T-se,ye=An(F,ne),Ee=_t(X,$,ne);return Math.hypot(ye.x-Ee.x,ye.y-Ee.y,ye.z-Ee.z)};if($&&W(0)<$.size*2+1){let se=0,ne=F.T*.45;if(W(ne)>=Re($))for(let ye=0;ye<14;ye++){const Ee=(se+ne)/2;W(Ee)>=Re($)?ne=Ee:se=Ee}q=Math.min(25,Math.max(4,ne))}return Object.defineProperty(F,"_blend",{value:{key:K,w:q},enumerable:!1,configurable:!0,writable:!0}),q}function tt(F,H,K,$,q,W,se){return $||H.owner===F.owner?Z(H,($?K:H.ships+K)%20,H.size*1.8+.4,nu,H.id*13,q,W,se):Z(H,K%20,H.size*2.4+.8,iu,H.id*29+F.owner,q,W,se)}function ct(F,H,K,$,q){if(F.probe)return 1;const W=K<F.T-K,se=Ye(F,W),ne=W?K:F.T-K;if(ne>=se)return 1;const ye=X.bodies[W?F.from:F.to],Ee=ye&&Vt[ye.id];if(!Ee)return 1;const Ue=kt.smootherstep(ne,0,se);tt(F,ye,H,W,q,Ce,ve),Ce.sub(Ee),ce.set(fe.x-Ee.x,fe.y-Ee.y,fe.z-Ee.z),Fe.set($.x-Ee.x,$.y-Ee.y,$.z-Ee.z).addScaledVector(rt,W?Re(ye):-Re(ye)),Fe.lengthSq()<1e-8&&Fe.copy(rt),Fe.normalize(),tt(F,ye,H,W,W?F.t0:F.t0+F.T,Te),Te.sub(Ee).addScaledVector(Fe,-Te.dot(Fe)),Te.lengthSq()<1e-8&&Te.crossVectors(Fe,At),Te.lengthSq()<1e-8&&Te.set(1,0,0),Te.normalize(),Ie.crossVectors(Fe,Te);let Ke=Math.atan2(Ce.dot(Te),Ce.dot(Fe));Ke<-Math.PI/2&&(Ke+=Math.PI*2);const pt=Math.hypot(Ce.dot(Fe),Ce.dot(Te)),be=Ce.dot(Ie),mt=ce.dot(Fe);ce.addScaledVector(Fe,-mt);const qe=Ke*(1-Ue),gt=ye.size*1.3+.4,Ct=gt*.3;let zt=pt+(mt-pt)*Ue;const qt=(zt+gt+Math.sqrt((zt-gt)**2+Ct*Ct))/2;return zt+=(qt-zt)*(1-Ue)*kt.smoothstep(Ue,0,.05),ce.multiplyScalar(Ue).addScaledVector(Fe,Math.cos(qe)*zt).addScaledVector(Te,Math.sin(qe)*zt).addScaledVector(Ie,be*(1-Ue)),fe.set(Ee.x+ce.x,Ee.y+ce.y,Ee.z+ce.z),Ue}let X=null;function Pe(F){let H=1;const K=m.position.x,$=m.position.y,q=m.position.z;let W=K-F.x,se=$-F.y,ne=q-F.z;const ye=Math.hypot(W,se,ne)||1;W/=ye,se/=ye,ne/=ye;for(const Ee of _){if(Ee.b.kind!=="planet"&&Ee.b.kind!=="moon")continue;const Ue=Vt[Ee.b.id],Ke=Ue.x-F.x,pt=Ue.y-F.y,be=Ue.z-F.z,mt=Ke*W+pt*se+be*ne;if(mt<=0||mt>ye)continue;const qe=Ke-W*mt,gt=pt-se*mt,Ct=be-ne*mt,zt=Math.sqrt(qe*qe+gt*gt+Ct*Ct),qt=Ee.b.size,bt=qt*.08+mt*.012;zt<qt+bt&&(H*=kt.smoothstep(zt,qt-bt,qt+bt))}return H}const he=new Map,Le=new D,Ne=new D,xe=new D,He=new D;function We(F,H,K,$,q,W,se){let ne=he.get(F);if(!ne){he.set(F,{n:K.clone(),w:new D,a:new D,t:q,seen:W});return}ne.seen=W;const ye=q-ne.t;if(ye<=1e-4){ye<-1&&(ne.t=q);return}if(ye>2){ne.n.copy(K),ne.w.set(0,0,0),ne.a.set(0,0,0),ne.t=q;return}Le.crossVectors(ne.n,K).divideScalar(ye);const Ee=1-Math.exp(-ye*6);if(Ne.copy(Le).sub(ne.w).divideScalar(ye),ne.w.lerp(Le,Ee),ne.a.lerp(Ne,Ee),ne.n.copy(K),ne.t=q,se<2)return;const Ue=ne.a.length(),Ke=5+Dt(F,17)*5,pt=W*Ke+Dt(F,23)*9,be=Math.floor(pt),mt=Dt(F*7+be,31),qe=Dt(be,F*3+1),gt=pt-be;let Ct;if(Ue>=.04){Ct=Math.min(1,(Ue-.04)*3);const Nt=.45+.35*Ct;if(mt>Nt||gt>.35+qe*.6)return}else{if(mt>.05||gt>.3)return;Ct=.15+qe*.2,Ne.set(qe-.5,Dt(be,F)-.5,Dt(F,be*5)-.5)}const zt=$*.32;if(He.crossVectors(Ue>=.04?ne.a:Ne,K),He.lengthSq()<1e-10)return;He.normalize();const qt=$*(.06+.1*Ct)*(.75+qe*.5),bt=$*.05,en=(.35+.5*Ct)*(.8+mt*.4),Vn=qe<.18?1:qe>.86?2:3;Vn&1&&(xe.copy(H).addScaledVector(K,zt).addScaledVector(He,-$*.06),N.jet(xe,Je.copy(He).negate(),qt,bt,en,F)),Vn&2&&(xe.copy(H).addScaledVector(K,-zt*.85).addScaledVector(He,$*.06),N.jet(xe,He,qt*(.85+mt*.3),bt,en,F+.5))}function jt(F,H,K,$,q,W,se=W,ne=1,ye=!1,Ee=1,Ue=null){if(O>=Wa)return;O++;const Ke=ye?N.probeType+Math.floor(Dt(se,29)*N.probes):Math.floor(Dt(se,3)*N.hulls),pt=.9+Dt(se,5)*.25,be=ye?[.3,.3,.3]:[Os,Os,Os*pt];A(F);const mt=on(F),qe=.6*Os/.8*mt,gt=1-kt.smoothstep(qe,3,14),Ct=gt<=0?null:[($?9:5)*(ye?.8:1),($?1:.7)*Ee*gt];N.add(Ke,F,H,be,K,.82+Dt(se,11)*.28,se,$,ne*(.8+Math.sin(q*40+W)*.05)*(ye?.35:1),Ct,.6*mt,Pe(F)),Ue!==null&&!ye&&We(se,F,H,be[2],Ue,q,qe)}const Pt=new Map,Un=new Ic({color:"#b9bec8",metalness:.5,roughness:.5}),jn=new Ic({color:"#4a505c",metalness:.4,roughness:.7});function cl(F){const H=new Fn,K=(q,W,se,ne=Un)=>new Ot(new Sn(q,W,se),ne);if(F==="signal"){H.add(K(.12,.12,.18));const q=new Ot(new Bi(.14,12,6,0,Math.PI*2,0,Math.PI/3),Un);q.position.z=.12,q.rotation.x=-Math.PI/2,H.add(q,K(.5,.004,.08,jn))}else if(F==="wreck"){for(let q=0;q<4;q++){const W=K(.12+q*.03,.1,.22-q*.03,q%2?jn:Un);W.position.set((q-1.5)*.18,Math.sin(q*2)*.08,Math.cos(q*3)*.1),W.rotation.set(q,q*2,q*.5),H.add(W)}for(let q=0;q<6;q++){const W=new tc(new Bo({map:ru,color:"#cfe8ff",blending:zn,depthWrite:!1,transparent:!0,opacity:.7}));W.position.set(Math.sin(q*5)*.35,Math.cos(q*3)*.2,Math.sin(q*7)*.3),W.scale.setScalar(.12),H.add(W)}}else if(F==="convoy")for(let q=0;q<3;q++){const W=new Ot(L[2],Un);W.position.set((q-1)*.25,0,-q*.5),W.scale.setScalar(.8),H.add(W)}else{for(let q=0;q<6;q++){const W=K(.12,.1,.12,q%3?Un:jn);W.position.set((q%3-1)*.14,Math.floor(q/3)*.11,0),H.add(W)}H.add(K(.46,.02,.16,jn))}const $=new tc(new Bo({map:ru,color:"#c7a6ff",blending:zn,depthWrite:!1,transparent:!0}));return c.add(H,$),{g:H,glint:$,kind:F}}function ll(F,H,K){const $=new Set;for(const q of F.happenings||[]){const W=F.bodies[q.at];if(W.visitor||!Vt[W.id])continue;$.add(q.id),Pt.has(q.id)||Pt.set(q.id,cl(q.kind));const se=Pt.get(q.id),ne=Vt[W.id],ye=W.size*2.9+1.2,Ee=K*.15+q.id;if(fe.set(ne.x+Math.cos(Ee)*ye,ne.y+.4,ne.z+Math.sin(Ee)*ye),se.kind==="convoy"){const Ke=kt.clamp((q.starts-H)/60,0,1),pt=q.id*2.399;fe.x+=Math.cos(pt)*Ke*70,fe.z+=Math.sin(pt)*Ke*70,Ge.set(-Math.cos(pt),0,-Math.sin(pt)),Ke<=0&&Ge.set(-Math.sin(Ee),0,Math.cos(Ee)),se.g.lookAt(fe.clone().add(Ge))}else se.g.rotation.x+=.004,se.g.rotation.y+=se.kind==="wreck"?.01:.003;se.g.position.copy(fe),se.g.visible=!0;const Ue=on(se.g.position);se.glint.position.copy(fe),se.glint.scale.setScalar((se.kind==="signal"?.6+.4*Math.sin(K*5):1)*9/Ue),se.glint.material.opacity=Ue>80?.3:.9}for(const[q,W]of Pt)$.has(q)||(W.g.removeFromParent(),W.glint.removeFromParent(),Pt.delete(q))}let zr=0,Br=1;function ul(F,H,K,$){X=F;const q=$-zr;q>0&&q<.5&&(Br+=(kt.clamp(K/q,0,20)-Br)*Math.min(1,q*4)),zr=$;const W=F.time,se=F.stars||[{r:0,period:1,phase:0,size:1}];se.slice(0,2).forEach((I,J)=>{const ze=J?g:m,tn=No(F,J,W);ze.visible=!0,ze.position.set(tn.x,tn.y,tn.z),ze.scale.setScalar(I.size)}),se.length<2&&(g.visible=!1),yi.pos.value[0].copy(m.position),yi.pos.value[1].copy(g.position),g.visible?yi.col.value[1].set(1.25,.95,.72):yi.col.value[1].set(0,0,0),y.update($),jp.value=$,Ve.update($),x&&x.update(W),g.visible&&h.update($+50),u.update($,a);const ne=(I,J)=>I>=0&&F.tech?F.tech[I][J]:0;for(const I of _){const J=_t(F,I.b,W);Vt[I.b.id]=J}let ye=0;for(const I of _)Yo(F,I.b,W)&&(ye=Math.max(ye,Math.hypot(Vt[I.b.id].x,Vt[I.b.id].z)));ye=ye*1.2+20;const Ee=Math.hypot(b.target.x,b.target.z);if(Ee>ye&&(b.target.x*=ye/Ee,b.target.z*=ye/Ee),b.target.y=kt.clamp(b.target.y,-ye*.3,ye*.3),b.fleet!=null){const I=F.fleets.find(J=>J.id===b.fleet);if(!I)b.fleet=null;else{const J=An(I,W);b.target.lerp(fe.set(J.x,J.y,J.z),Math.min(1,K*6))}}if(b.follow===null&&b.fleet==null&&(b.target.y*=1-Math.min(1,K*2)),b.follow!==null){const I=Vt[b.follow];b.target.lerp(fe.set(I.x,I.y,I.z),Math.min(1,K*6))}H.dragging||(b.az+=b.vaz,b.pol+=b.vpol,b.vaz*=.92,b.vpol*=.92),b.goalDist&&(b.dist+=(b.goalDist-b.dist)*Math.min(1,K*4),Math.abs(b.goalDist-b.dist)<.01*b.dist&&(b.goalDist=null)),b.pol=kt.clamp(b.pol,.15,Math.PI-.15),b.dist=kt.clamp(b.dist,b.minDist,b.maxDist),o.position.setFromSphericalCoords(b.dist,b.pol,b.az).add(b.target),o.lookAt(b.target);const Ue=kt.clamp(b.dist*.02,.01,12);Math.abs(Ue-o.near)>o.near*.05&&(o.near=Ue,o.far=S,o.updateProjectionMatrix()),o.updateMatrixWorld();const Ke=window.innerWidth,pt=window.innerHeight;O=0,N.begin($,a);const be=H.vis,mt=I=>!be||be.bodies.has(I.id),qe=I=>!be||I.owner===be.owner||be.seesFleet(I,An(I,W)),gt=I=>!be||I.owner===be.owner||be.intel>=2&&qe(I),Ct=I=>!be||I.owner===be.owner||be.intel>=3&&qe(I)||be.warn&&F.bodies[I.to].owner===be.owner,zt=I=>!be||I.owner===be.owner||be.intel>=1,qt=new Map;for(const I of F.fleets){if(I.probe)continue;const J=F.bodies[I.to];if(I.owner===J.owner?I.owner!==(be?be.owner:0):!Ct(I))continue;const ze=I.T-(W-I.t0),tn=`${I.to}:${I.owner}`,vn=qt.get(tn)||{to:I.to,owner:I.owner,n:0,eta:1/0,sized:zt(I)};vn.n+=I.n,vn.eta=Math.min(vn.eta,ze),qt.set(tn,vn)}const bt=new Map;for(const I of qt.values())bt.has(I.to)||bt.set(I.to,[]),bt.get(I.to).push(I);const en=new Set,Vn=new Map;for(const I of _){const J=I.b;if(J.parent===null||H.selected===J.id||H.target===J.id||J.sieges.length||F.fleets.some(tn=>tn.to===J.id&&tn.owner!==J.owner))continue;const ze=Vt[J.parent];fe.copy(I.g.position).project(o),Ge.set(ze.x,ze.y,ze.z).project(o),!(Math.hypot((fe.x-Ge.x)*Ke,(fe.y-Ge.y)*pt)/2>=46)&&(en.add(J.id),J.owner!==Oe&&J.ships>0&&mt(J)&&(Vn.has(J.parent)||Vn.set(J.parent,[]),Vn.get(J.parent).push(`<span class="kid" style="color:${xt(J.owner)}">+${J.ships}</span>`)))}for(const I of _){const{b:J}=I,ze=Vt[J.id];if(I.g.position.set(ze.x,ze.y,ze.z),I.line.material.uniforms&&(I.line.material.uniforms.uTh.value=J.phase+2*Math.PI*W/J.period),J.parent!==null){const Se=Vt[J.parent];I.lineHolder.position.set(Se.x,Se.y,Se.z)}else if(J.star){const Se=No(F,J.star,W);I.lineHolder.position.set(Se.x,Se.y,Se.z)}I.reach&&(I.reach.position.set(ze.x,0,ze.z),I.reach.visible=H.selected===J.id||H.peek===J.id||H.target===J.id);{const lt=(H.selected===J.id||H.peek===J.id||H.target===J.id)&&mt(J)&&J.structures.some(dt=>dt.type==="bureau"&&(dt.left<=0||dt.next)&&!dt.scrap);if(lt&&!I.bureau){const dt=[];for(let Wt=0;Wt<=96;Wt++){const rn=Wt/96*Math.PI*2;dt.push(new D(Math.cos(rn),0,Math.sin(rn)))}I.bureau=new Po(new Ht().setFromPoints(dt),new Fa({color:"#7fd1c8",transparent:!0,opacity:.6,dashSize:.03,gapSize:.025})),I.bureau.computeLineDistances(),w.add(I.bureau)}I.bureau&&(I.bureau.visible=lt,lt&&(I.bureau.position.set(ze.x,0,ze.z),I.bureau.scale.setScalar(D0(F,J))))}if(J.visitor){const Se=Yo(F,J,W);if(I.g.visible=Se,!Se){I.label.style.visibility="hidden";continue}const lt=F.visit&&F.visit.kind==="comet";if(I.body.visible=I.tail.visible=lt,I.hulk.visible=!lt,lt){const dt=Math.max(1,Math.hypot(ze.x,ze.y,ze.z)),Wt=kt.clamp(2600/dt,8,60),rn=kt.clamp(120/dt,.55,1),an=Ge.set(ze.x,ze.y,ze.z).normalize(),yn=_t(F,J,W+2),xr=new D(ze.x-yn.x,ze.y-yn.y,ze.z-yn.z).normalize(),{ion:_s,dust:Ef,coma:ml}=I.tail.userData;_s.forEach((Wr,gl)=>{const nr=(gl+1)/_s.length;Wr.position.copy(an).multiplyScalar(nr*Wt),Wr.scale.setScalar(.8+nr*Wt*.12),Wr.material.opacity=.5*rn*(1-nr)**1.3}),Ef.forEach((Wr,gl)=>{const nr=(gl+1)/Ef.length;Wr.position.copy(an).multiplyScalar(nr*Wt*.75).addScaledVector(xr,nr*nr*Wt*.35),Wr.scale.setScalar(1+nr*Wt*.18),Wr.material.opacity=.38*rn*(1-nr)**1.1}),ml.position.set(0,0,0),ml.scale.setScalar(2.2+rn*3),ml.material.opacity=.35+rn*.4}else I.hulk.rotation.y+=K*.08}if(J.kind==="station"){I.body.rotation.z+=K*(I.body.userData.spin??.5);const Se=I.body.userData.rotor;Se&&(Se.rotation.z+=K*Se.userData.spin),I.body.userData.set(J.owner===Oe?"#6a7080":xt(J.owner),Pe(ze),J.owner!==Oe)}else if(J.kind==="asteroid")I.body.rotation.x+=K*.3,I.body.rotation.y+=K*.2;else{I.body.rotation.y+=K*.05;const Se=I.body.getObjectByName("clouds");if(Se){Se.rotation.y+=K*.012;const dt=Se.material.uniforms.uHoles.value;for(let Wt=0;Wt<dt.length;Wt++){const rn=Wt<(I.holes?.length||0)?I.holes[Wt]:I.megaHole&&Wt===(I.holes?.length||0)?I.megaHole:null;if(!rn||!I.surface.visible){dt[Wt].w=2;continue}fe.copy(rn.dir).applyAxisAngle(sS,-Se.rotation.y),dt[Wt].set(fe.x,fe.y,fe.z,rn.cos)}}const lt=I.body.material.uniforms;lt&&(lt.uT.value=$,Se&&(lt.uCloudShift.value=-Se.rotation.y/(Math.PI*2)),lt.uCenter.value.set(ze.x,ze.y,ze.z),I.occ.forEach((dt,Wt)=>{const rn=Vt[dt];lt.uOcc.value[Wt].set(rn.x,rn.y,rn.z,F.bodies[dt].size)}),Se&&(Se.material.uniforms.uOcc.value=lt.uOcc.value),I.atmo&&(I.atmo.material.uniforms.uCenter.value.set(ze.x,ze.y,ze.z),I.atmo.material.uniforms.uOcc.value=lt.uOcc.value),I.ring&&(I.ring.updateMatrixWorld(!0),lt.uRingN.value.set(0,0,1).transformDirection(I.ring.matrixWorld),lt.uRingIn.value=I.ring.userData.ring.inner,lt.uRingOut.value=I.ring.userData.ring.outer,I.ring.material.uniforms.uCenter.value.set(ze.x,ze.y,ze.z)))}const tn=xt(J.owner);I.owner!==J.owner&&(I.owner!==null&&(I.pulse=1),I.owner=J.owner,I.body.material&&I.body.material.uniforms&&I.body.material.uniforms.uCity&&(I.body.material.uniforms.uCity.value=J.owner===Oe?0:1),I.mark.material.uniforms.uColor.value.set(tn),I.label.style.color=tn),I.pulse=Math.max(0,I.pulse-K);const vn=J.owner+":"+J.structures.map(Se=>Se.type+Se.level+(Se.left>0&&!Se.next||Se.scrap?"~":"")).join();if(vn!==I.sig&&(I.sig=vn,I.structs&&I.structs.removeFromParent(),I.surface.clear(),I.structs=new Fn,I.wips=[],I.holes=[],I.spins=[],J.kind==="station"?(n0(I.body,J.structures.map(Se=>({type:Se.type,level:Se.level,done:!Se.scrap&&(Se.left<=0||!!Se.next)})),su),I.wips.push(...I.body.userData.station.wip)):J.structures.forEach((Se,lt)=>{const dt=$b(Se.type,J,lt,!Se.scrap&&(Se.left<=0||!!Se.next),Se.level,N.uT,su,J.owner===Oe?"#6a7080":xt(J.owner));dt.userData.wip&&I.wips.push(dt.userData.wip),Se.type!=="shipyard"&&Se.type!=="skimmer"&&I.holes.push({dir:dt.position.clone().normalize(),cos:Math.cos(Math.min(.6,Gp(J)*(Se.type==="lab"||Se.type==="mine"?1.5:1.15)/J.size))}),dt.userData.spin&&I.spins.push(...dt.userData.spin),(Se.type==="shipyard"||Se.type==="skimmer"?I.structs:I.surface).add(dt)}),I.g.add(I.structs)),I.wips){const Se=J.slips||[];I.wips.forEach((lt,dt)=>lt.forEach((Wt,rn)=>{Wt.visible=dt<Se.length&&Se[dt]>=rn/3}));for(const lt of I.spins)lt.mesh.rotation[lt.axis]+=K*lt.rate}const Pn=H.selected===J.id,Gr=H.target===J.id,Vr=on(I.g.position),ua=J.parent!==null,Hr=Math.max(J.size*(ua?2:2.4)*Vr,Pn||Gr?8:ua?4:5.5);if(I.mark.scale.setScalar(Hr/Vr*(1+I.pulse*.6+(Pn?Math.sin($*5)*.06:0))),I.mark.material.uniforms.uWidth.value=kt.clamp(Hr/12,1,1.6),I.mark.material.uniforms.uOpacity.value=Pn?1:Gr?.9:J.owner===Oe?.25:.7,J.size*Vr>70&&(I.mark.material.uniforms.uOpacity.value*=.25),J.parent!==null&&!Pn&&!Gr){const Se=Vt[J.parent];fe.copy(I.g.position).project(o),Ge.set(Se.x,Se.y,Se.z).project(o);const lt=Math.hypot((fe.x-Ge.x)*Ke,(fe.y-Ge.y)*pt)/2;I.mark.material.uniforms.uOpacity.value*=kt.smoothstep(lt,30,60)}const un=mt(J)&&J.ships>0?wn(J.vet):0;I.mark.material.uniforms.uLvl.value=un,Pn||Gr?I.mark.material.uniforms.uColor.value.set(Pn?"#ffffff":tn):I.mark.material.uniforms.uColor.value.set(tn);const nn=mt(J);if(I.structs&&(I.structs.visible=nn),I.surface.visible=nn,J.kind==="station")for(const Se of I.body.userData.station.parts)Se.visible=nn;const Nn=nn&&J.sieges.length>0,pn=[],Tn=[],Si=(Se,lt,dt,Wt,rn,an)=>{for(let yn=0;yn<Se;yn++){if(O>=Wa)return;Z(J,yn,dt,Wt,rn,W,fe,rt),jt(fe,rt,xt(lt),!1,$,yn,rn*131+yn,1,!1,.6),an&&an.push({p:fe.clone(),owner:lt})}};nn&&Si(Math.min(J.ships,20),J.owner,J.size*1.8+.4,nu,J.id*13,Nn?pn:null);for(const Se of nn?J.sieges:[])Si(Math.min(Se.n,20),Se.owner,J.size*2.4+.8,iu,J.id*29+Se.owner,Tn);if(Nn){const Se=_t(F,J,W+.5),lt=_t(F,J,W-.5);Ve.drift.set(Se.x-lt.x,Se.y-lt.y,Se.z-lt.z).multiplyScalar(Br);for(let an=0;an<Math.ceil(J.guns);an++){const yn=Dt(J.id,an*2)*Math.PI*2+$*.05,xr=(Dt(an*2+1,J.id)-.5)*1.6,_s=J.size*1.02;pn.push({p:new D(ze.x+Math.cos(yn)*Math.cos(xr)*_s,ze.y+Math.sin(xr)*_s,ze.z+Math.sin(yn)*Math.cos(xr)*_s),owner:J.owner})}const dt=Tn.length+pn.length;let Wt=dt*K*1.6;for(;Wt>0&&Tn.length&&pn.length;){if(Math.random()<Wt){const an=Math.random()<Tn.length/dt,yn=(an?Tn:pn)[Math.random()*(an?Tn:pn).length|0],xr=(an?pn:Tn)[Math.random()*(an?pn:Tn).length|0];it(yn.p,xr.p,xt(yn.owner),Math.min(2,ne(yn.owner,"weapons")),ne(xr.owner,"armour")>=2)}Wt-=1}for(let an=0;an<Math.min(3,J.lostDef||0);an++)J.ships>0||!pn.length?Z(J,J.ships+an,J.size*1.8+.4,nu,J.id*13,W,Ge):Ge.copy(pn[Math.random()*pn.length|0].p),Ve.explosion(Ge,.9+Math.random()*.3);const rn=J.sieges[0];for(let an=0;an<Math.min(3,J.lostAtk||0);an++){if(rn)Z(J,rn.n+an,J.size*2.4+.8,iu,J.id*29+rn.owner,W,Ge);else if(Tn.length)Ge.copy(Tn[Math.random()*Tn.length|0].p);else break;Ve.explosion(Ge,.9+Math.random()*.3)}}Ve.drift.set(0,0,0),J.lostDef=J.lostAtk=0,J.captured&&(I.pulse=1,J.captured=!1,Ve.ring(fe.set(ze.x,ze.y,ze.z),xt(J.owner),J.size*3.5,1.4));const ri=J.wonder?1:J.project?Math.max(.02,Math.min(1,1-J.project.left/dn[J.project.key].time)):0,si=J.wonder||J.project&&J.project.key||null;if(I.megaKey!==si&&(I.megaKey=si,I.megaObj&&(I.megaObj.removeFromParent(),I.megaObj=null,I.megaHole=null),si)){const Se=Vb(si,J,N.uT,su);if(Se.userData.surface){const lt=Mi(J.id*31+7),dt=new D(lt()-.5,(lt()-.5)*.5,lt()-.5).normalize();Se.position.copy(dt).multiplyScalar(J.size*.995),Se.quaternion.setFromUnitVectors(new D(0,1,0),dt),I.body.add(Se),I.megaHole={dir:dt,cos:Math.cos(Math.min(.8,1/J.size))}}else I.g.add(Se);I.megaObj=Se}I.megaObj&&(Hb(I.megaObj,ri,!!J.wonder),I.megaObj.userData.set(J.owner===Oe?"#6a7080":xt(J.owner),Pe(ze)),I.megaObj.userData.faceSun&&I.megaObj.lookAt(0,0,0),I.megaObj.userData.spinner?.rotateZ(K*.25));const kn=J.wonder?0:Math.round(ri*60);if(I.megaStep!==kn&&(I.megaStep=kn,I.mega&&(I.g.remove(I.mega),I.mega.geometry.dispose(),I.mega=null),kn)){const Se=J.size*2.1+.6;I.mega=new Ot(new Di(Se,Math.max(.05,J.size*.04),6,96,kn/60*Math.PI*2),new Zd({color:"#c7a6ff",transparent:!0,opacity:.55,depthWrite:!1})),I.mega.rotation.x=Math.PI/2,I.g.add(I.mega)}if(I.mega&&(I.mega.rotation.z=$*.05),fe.copy(I.g.position).project(o),fe.z>1||en.has(J.id)){I.label.style.visibility="hidden";continue}const tr=(nn?J.sieges:[]).map(Se=>`<span class="atk" style="color:${xt(Se.owner)}">${Mt("attack")}${Se.n}</span>`).join(""),vr=nn?J.owner===Oe?`<i class="guns">${Mt("guns")}${Math.ceil(J.guns)}</i>`:J.ships?`<b>${J.ships}</b>`:"":'<b class="unk">?</b>',cg=(Vn.get(J.id)||[]).join(""),lg=(bt.get(J.id)||[]).map(Se=>{const lt=Math.max(0,Se.eta),dt=Se.owner===J.owner;return`<span class="${dt?"rein":"inc"}" style="color:${xt(Se.owner)}">${Mt(dt?"reinforce":"incoming")}${Se.sized?Se.n:"?"} ${Math.floor(lt/60)}:${String(Math.floor(lt%60)).padStart(2,"0")}</span>`}).join(""),ug=(F.happenings||[]).filter(Se=>Se.at===J.id).map(Se=>{const lt=ur[Se.kind],dt=W<Se.starts,Wt=!dt&&Se.holder!==Oe,rn=Math.max(0,dt?Se.starts-W:Wt?lt.hold-Se.held:Se.ends-W),an=Wt?xt(Se.holder):"#c7a6ff",yn=`${Math.floor(rn/60)}:${String(Math.floor(rn%60)).padStart(2,"0")}`;return`<span class="ev" style="color:${an}">${Mt(Se.kind)} ${dt?`in ${yn}`:Wt?`hold ${yn}`:`gone ${yn}`}</span>`}).join(""),dg=(J.perk?`<i class="perk" title="${mn[J.perk].name}">${Mt(J.perk)}</i> `:"")+(J.wonder?`<i class="perk">${Mt(J.wonder)}</i> `:J.project?`<i class="perk proj">${Mt(J.project.key)}</i> `:""),pl=`<span class="row1">${vr}${cg}</span>${tr}${lg}${ug}<small>${dg}${J.name}</small>`;pl!==I.shown&&(I.label.innerHTML=pl,I.shown=pl),I.label.classList.toggle("can",H.mode==="project"&&J.owner===(H.me??0)&&!no(F,J,H.projKey)),I.label.style.visibility="visible";const fg=(fe.x*.5+.5)*Ke,hg=(-fe.y*.5+.5)*pt;I.label.style.transform=`translate(${fg}px, ${hg+Hr/2+2}px) translate(-50%, 0)`}ll(F,W,$);let Nt=0,mi=0;for(const I of F.fleets){if(!qe(I))continue;const J=An(I,W),ze=xt(I.owner);rt.set(I.p1.x-I.p0.x,I.p1.y-I.p0.y,I.p1.z-I.p0.z),rt.lengthSq()<1e-9&&rt.set(J.nx,J.ny,J.nz),rt.normalize(),nt.crossVectors(rt,At),nt.lengthSq()<1e-6&&nt.set(1,0,0),nt.normalize();const tn=I.probe?1:zt(I)?I.n:Math.min(I.n,3),vn=Math.max(3,Math.ceil(Math.sqrt(tn))),Pn=W-I.t0,Gr=(un,nn,Nn,pn)=>{if(I.probe)return fe.set(nn.x,nn.y,nn.z),1;const Tn=Math.floor(un/vn),Si=un%vn-(vn-1)/2,ri=(kt.smoothstep(Math.min(Nn,I.T-Nn),0,12)*.5+.5)*rS,si=Dt(I.id,un),kn=Dt(un,I.id),$r=Dt(I.id+7,un*3),tr=$*(.3+si*.4)+kn*6;return fe.set(nn.x,nn.y,nn.z).addScaledVector(nt,(Si*(.8+$r*.4)+Tn%2*.4+(si-.5)*.6+Math.sin(tr)*.08)*ri).addScaledVector(At,((kn-.5)*.9+Math.cos(tr*.8)*.06)*ri).addScaledVector(rt,(-Tn*(.9+$r*.4)-(kn-.5)*.7)*ri),ct(I,un,Nn,nn,pn)},Vr=.8,ua=I.probe?null:An(I,W+.5),Hr=!I.probe&&X.bodies[Pn<I.T-Pn?I.from:I.to];for(let un=0;un<tn&&!(O>=Wa);un++){const nn=Gr(un,J,Pn,W),Nn=Dt(I.id+7,un*3),pn=I.probe?J:An(I,W+(Nn-.5)*2.5);Lt.set(pn.nx,pn.ny,pn.nz);let Tn=pn.burning,Si=1+.35*ne(I.owner,"drives");if(nn<1&&Hr){const ri=ht.copy(fe);Gr(un,ua,Pn+.5,W+.5);const si=_t(X,Hr,W),kn=_t(X,Hr,W+.5);Je.set(fe.x-ri.x-(kn.x-si.x),fe.y-ri.y-(kn.y-si.y),fe.z-ri.z-(kn.z-si.z)),fe.copy(ri),ve.lerp(Je.lengthSq()>1e-8?Je.normalize():ve,kt.smoothstep(nn,0,.25));const $r=kt.smoothstep(nn,Vr,1);Lt.lerp(ve,1-$r),Lt.lengthSq()<.05&&Lt.addScaledVector(nt,.4),Lt.normalize(),nn<Vr?(Tn=Math.sin($*(5+Nn*4)+un*1.7)>.35,Si=.12):Si*=kt.smoothstep(nn,Vr,1)*.9+.1}jt(fe,Lt,ze,Tn,$,un,I.id*97+un,Si,I.probe,1,W)}if(Nt<200*oe&&gt(I)){const un=new ot(ze);let nn=J;for(let kn=1;kn<=oe;kn++){const $r=J.progress+(1-J.progress)*kn/oe,tr=An(I,I.t0+$r*I.T),vr=1-kn/oe*.7;re.set([nn.x,nn.y,nn.z,tr.x,tr.y,tr.z],Nt*6),de.set([un.r*vr,un.g*vr,un.b*vr,un.r*vr,un.g*vr,un.b*vr],Nt*6),Nt++,nn=tr}const Nn=_e(mi++);Nn.visible=!0,Nn.position.set(I.p1.x,I.p1.y,I.p1.z),Nn.material.uniforms.uColor.value.set(ze);const pn=I.owner!==(H.me??0),Tn=pn?1+.35*Math.sin($*6):1;Nn.material.uniforms.uOpacity.value=pn?.9:.5;const Si=on(Nn.position),ri=X.bodies[I.to],si=Math.min(pn?22:14,Math.max(ri?ri.size*2.6*Si:0,pn?7:5));Nn.scale.setScalar(si*Tn/Si),Nn.material.uniforms.uWidth.value=kt.clamp(si/12,1,1.6)}}if(N.end(),he.size>400||Math.floor($)%5===0)for(const[I,J]of he)$-J.seen>3&&he.delete(I);let er=0;for(const I of F.fleets){const J=An(I,W);fe.set(J.x,J.y,J.z).project(o);const ze=k(er++);if(fe.z>1||!qe(I)){ze.style.visibility="hidden";continue}const tn=I.owner===(H.me??0),vn=I.probe?`${Mt("probe")}${o.position.distanceTo(Ge.set(J.x,J.y,J.z))<60?" probe":""}`:`${Mt("fleet")}${zt(I)?I.n:"?"}${I.dark?` ${Mt("dark")}`:""}`,Pn=zt(I)?wn(I.vet):0;ze._v!==Pn&&(ze._v=Pn,ze.dataset.v=Pn),ze._t!==vn&&(ze._t=vn,ze.innerHTML=vn),ze.style.color=xt(I.owner),ze.style.borderColor=xt(I.owner),ze.style.opacity=tn?H.fleet===I.id?1:.85:.6,ze.classList.toggle("sel",H.fleet===I.id),ze.style.visibility="visible",ze.style.transform=`translate(${(fe.x*.5+.5)*Ke+12}px, ${(-fe.y*.5+.5)*pt-9}px)`}for(let I=er;I<Rt.length;I++)Rt[I].style.visibility="hidden";for(let I=mi;I<Be.length;I++)Be[I].visible=!1;V.setDrawRange(0,Nt*2),V.attributes.position.needsUpdate=!0,V.attributes.color.needsUpdate=!0;for(const I of me)I.live&&(I.age+=K,!(I.age<I.life)&&(I.live=!1,Ve.drift.copy(I.drift),fe.copy(I.b).addScaledVector(I.drift,zr-I.t0),I.pd?Ve.intercept(fe):Ve.impact(fe,I.c,I.rail)));if(Ve.drift.set(0,0,0),Ve.update($,2*Math.tan(kt.degToRad(o.fov/2))/window.innerHeight),H.preview){const{p1:I}=H.preview;Xe.visible=!0;const J={...H.preview,t0:0};for(let tn=0;tn<=128;tn++){const vn=An(J,tn/128*J.T);et.attributes.position.setXYZ(tn,vn.x,vn.y,vn.z)}et.attributes.position.needsUpdate=!0,Xe.computeLineDistances(),Xe.material.dashSize=6/on(fe.set(I.x,I.y,I.z)),Xe.material.gapSize=Xe.material.dashSize*.7;const ze=_e(mi++);ze.visible=!0,ze.position.set(I.x,I.y,I.z),ze.material.uniforms.uColor.value.set("#ffffff"),ze.material.uniforms.uOpacity.value=.6;{const tn=on(ze.position),vn=X.bodies[H.target],Pn=Math.min(22,Math.max(vn?vn.size*2.6*tn:0,8));ze.scale.setScalar(Pn/tn),ze.material.uniforms.uWidth.value=kt.clamp(Pn/12,1,1.6)}}else Xe.visible=!1;j(K),kp.value=window.innerHeight*a/(2*Math.tan(kt.degToRad(o.fov/2))),f.uniforms.uBox.value=b.dist*.9,f.uniforms.uPR.value=a,l.uniforms.uFocus.value=b.dist,l.uniforms.uDof.value=r==="high"?1-kt.smoothstep(b.dist,10,40):0,ee($),l.render(c,o,$)}function hs(F,H){const K=window.innerWidth,$=window.innerHeight;let q=null,W=1/0;for(const se of _){if(!se.g.visible||(fe.copy(se.g.position).project(o),fe.z>1))continue;const ne=Math.hypot((fe.x*.5+.5)*K-F,(-fe.y*.5+.5)*$-H),ye=Math.max(30,se.b.size*on(se.g.position)+12);ne<ye&&ne<W&&(W=ne,q=se.b.id)}return q}function aa(F,H){b.follow=null,b.fleet=H,b.goalDist=Math.min(b.dist,10)}function Qi(F,H,K,$){let q=null,W=30;for(const se of F.fleets){if(se.owner!==$)continue;const ne=An(se,F.time);if(fe.set(ne.x,ne.y,ne.z).project(o),fe.z>1)continue;const ye=(fe.x*.5+.5)*window.innerWidth,Ee=(-fe.y*.5+.5)*window.innerHeight,Ue=Math.min(Math.hypot(ye-H,Ee-K),Math.hypot(ye+32-H,Ee-K)-6);Ue<W&&(W=Ue,q=se.id)}return q}function ps(F,H){const K=new D(F/window.innerWidth*2-1,-(H/window.innerHeight)*2+1,.5).unproject(o),$=new Yc(o.position,K.sub(o.position).normalize()),q=new Hi(At.clone(),-b.target.y),W=$.intersectPlane(q,new D);if(W&&W.distanceTo(o.position)<b.dist*4)return W;const se=new Hi().setFromNormalAndCoplanarPoint(o.getWorldDirection(new D),b.target);return $.intersectPlane(se,new D)}function oo(F,H,K){b.fleet=null,b.follow=null,b.goalDist=null;const $=ps(F,H),q=kt.clamp(b.dist*K,b.minDist,b.maxDist),W=q/b.dist;b.dist=q,$&&b.target.lerp($,1-W)}function ca(F,H){b.fleet=null,b.follow=null;const K=2*b.dist*Math.tan(kt.degToRad(o.fov/2))/window.innerHeight,$=new D().setFromMatrixColumn(o.matrixWorld,0),q=new D().crossVectors(At,$).normalize();b.target.addScaledVector($,-F*K).addScaledVector(q,H*K)}function ms(F,H,K=!0){if(b.fleet=null,b.follow=H,H===null||!K)return;const $=F.bodies[H];b.goalDist=Math.max(b.minDist,$.size*9+3)}function la(F,H,K){const $=hs(H,K);return $!==null?_[$].g.position.clone():ps(H,K)||b.target.clone()}function gs(F,H,K){b.fleet=null,b.follow=null,b.goalDist=null;const $=new D().subVectors(o.position,b.target),q=new T1().setFromVector3($);K=kt.clamp(q.phi+K,.15,Math.PI-.15)-q.phi;const se=new D().setFromMatrixColumn(o.matrixWorld,0).normalize(),ne=new qn().setFromAxisAngle(At,H).multiply(new qn().setFromAxisAngle(se,K)),ye=o.position.clone().sub(F).applyQuaternion(ne).add(F);b.target.sub(F).applyQuaternion(ne).add(F),q.setFromVector3(ye.clone().sub(b.target)),b.az=q.theta,b.pol=q.phi,b.dist=q.radius}const ao=()=>b.follow!==null||b.fleet!=null;function co(F){b.goalDist=null,b.dist=kt.clamp(b.dist*F,b.minDist,b.maxDist)}function dl(F,H,K){if(ao()){co(K);return}const $=hs(F,H);if(b.goalDist=null,$===null){oo(F,H,K);return}b.follow=null;const q=_[$].g.position,W=kt.clamp(b.dist*K,b.minDist,b.maxDist);b.target.lerp(q,1-W/b.dist),b.dist=W}function fl(F){return fe.copy(_[F].g.position).project(o),{x:(fe.x*.5+.5)*window.innerWidth,y:(-fe.y*.5+.5)*window.innerHeight}}function hl(F){r=F,a=s(),l.setSamples(F==="high"?4:2),l.setLevel(F),Yt()}l.setLevel(r);let vs=0,xs=0,C=null,Y=0,ie=null,Q=!1;function ee(F){if(C!==null){const q=F-C;q>0&&q<.5&&(xs+=q,vs++)}if(C=F,vs<90)return;const H=xs/vs;xs=0,vs=0;const K=s(),$=K>=1.5?Math.max(1,K*.65):K*.85;if(ie){H>ie.avg*.9&&(a=ie.pr,Q=!0,Yt()),ie=null;return}!Q&&H>1/45&&a>$?(ie={pr:a,avg:H},a=Math.max($,a-.25),Y=F+20,Yt()):H<1/57&&a<K&&F>Y&&(a=Math.min(K,a+.25),Yt())}return{_debug:{scene:c,renderer:i,post:l,camera:o,fx:Ve,get pixelRatio(){return a}},build:z,render:ul,resize:Yt,setQuality:hl,pick:hs,pickFleet:Qi,followFleet:aa,orbit:b,zoomAt:oo,pan:ca,focus:ms,screenOf:fl,pivotAt:la,rotateAround:gs,zoomToward:dl,zoomBy:co,following:ao}}class uS{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return dS(e).buffer}}function dS(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function Zp(n){return new fS(n).unpack()}function Jp(n){const e=new hS,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class fS{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,a;for(;i<e;)s=t[i],s<160?(a=s,i++):(s^192)<32?(a=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(a=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(a=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class hS{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),a=2**32,c=t<<31|i+1023<<20|s/a&1048575,o=s%a;this._bufferBuilder.append(203),this.pack_int32(c),this.pack_int32(o)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const a=t[s];if(e.hasOwnProperty(a)){this.pack(a);const c=this.pack(e[a]);if(c instanceof Promise)return c.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new uS,this._textEncoder=new TextEncoder}}let Qp=!0,em=!0;function Io(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function us(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){lf("Unable to polyfill events");return}const r=n.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(c,o){if(c!==e)return s.apply(this,arguments);const l=u=>{const p=t(u);p&&(o.handleEvent?o.handleEvent(p):o(p))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(o,l),s.apply(this,[c,l])};const a=r.removeEventListener;r.removeEventListener=function(c,o){if(c!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(o))return a.apply(this,arguments);const l=this._eventMap[e].get(o);return this._eventMap[e].delete(o),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[c,l])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(c){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),c&&this.addEventListener(e,this["_on"+e]=c)},enumerable:!0,configurable:!0})}function pS(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Qp=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function mS(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(em=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function lf(){if(typeof window=="object"){if(Qp)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function uf(n,e){em&&console.warn(n+" is deprecated, please use "+e+" instead.")}function gS(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i){const r=parseInt(i.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Io(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Io(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Io(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=Io(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function d0(n){return Object.prototype.toString.call(n)==="[object Object]"}function tm(n){return d0(n)?Object.keys(n).reduce(function(e,t){const i=d0(n[t]),r=i?tm(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function cd(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?cd(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{cd(n,n.get(r),t)})}))}function f0(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&s.push(a)}),s.forEach(a=>{n.forEach(c=>{c.type===i&&c.trackId===a.id&&cd(n,c,r)})}),r}const h0=lf;function nm(n,e){if(e.version>=64)return;const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(c){if(typeof c!="object"||c.mandatory||c.optional)return c;const o={};return Object.keys(c).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof c[l]=="object"?c[l]:{ideal:c[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const p=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(u.ideal!==void 0){o.optional=o.optional||[];let d={};typeof u.ideal=="number"?(d[p("min",l)]=u.ideal,o.optional.push(d),d={},d[p("max",l)]=u.ideal,o.optional.push(d)):(d[p("",l)]=u.ideal,o.optional.push(d))}u.exact!==void 0&&typeof u.exact!="number"?(o.mandatory=o.mandatory||{},o.mandatory[p("",l)]=u.exact):["min","max"].forEach(d=>{u[d]!==void 0&&(o.mandatory=o.mandatory||{},o.mandatory[p(d,l)]=u[d])})}),c.advanced&&(o.optional=(o.optional||[]).concat(c.advanced)),o},r=function(c,o){if(e.version>=61)return o(c);if(c=JSON.parse(JSON.stringify(c)),c&&typeof c.audio=="object"){const l=function(u,p,d){p in u&&!(d in u)&&(u[d]=u[p],delete u[p])};c=JSON.parse(JSON.stringify(c)),l(c.audio,"autoGainControl","googAutoGainControl"),l(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=i(c.audio)}if(c&&typeof c.video=="object"){let l=c.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete c.video.facingMode;let p;if(l.exact==="environment"||l.ideal==="environment"?p=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(p=["front"]),p)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(v=>v.kind==="videoinput");let f=d.find(v=>p.some(y=>v.label.toLowerCase().includes(y)));return!f&&d.length&&p.includes("back")&&(f=d[d.length-1]),f&&(c.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),c.video=i(c.video),h0("chrome: "+JSON.stringify(c)),o(c)})}c.video=i(c.video)}return h0("chrome: "+JSON.stringify(c)),o(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(c,o,l){r(c,u=>{t.webkitGetUserMedia(u,o,p=>{l&&l(s(p))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const c=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(o){return r(o,l=>c(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(p=>{p.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function im(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function rm(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(o=>o.track&&o.track.id===s.track.id):a={track:s.track};const c=new Event("track");c.track=s.track,c.receiver=a,c.transceiver={receiver:a},c.streams=[r.stream],this.dispatchEvent(c)}),r.stream.getTracks().forEach(s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(o=>o.track&&o.track.id===s.id):a={track:s};const c=new Event("track");c.track=s,c.receiver=a,c.transceiver={receiver:a},c.streams=[r.stream],this.dispatchEvent(c)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else us(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function sm(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(c,o){let l=r.apply(this,arguments);return l||(l=e(this,c),this._senders.push(l)),l};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(c){s.apply(this,arguments);const o=this._senders.indexOf(c);o!==-1&&this._senders.splice(o,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(a=>{const c=this._senders.find(o=>o.track===a);c&&this._senders.splice(this._senders.indexOf(c),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function om(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const a=i.apply(this,[]);return a.forEach(c=>c._pc=this),a});const r=n.RTCPeerConnection.prototype.addTrack;r&&(n.RTCPeerConnection.prototype.addTrack=function(){const a=r.apply(this,arguments);return a._pc=this,a}),n.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(c=>f0(c,a.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const s=i.apply(this,[]);return s.forEach(a=>a._pc=this),s}),us(n,"track",r=>(r.receiver._pc=r.srcElement,r)),n.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(a=>f0(a,s.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const r=arguments[0];let s,a,c;return this.getSenders().forEach(o=>{o.track===r&&(s?c=!0:s=o)}),this.getReceivers().forEach(o=>(o.track===r&&(a?c=!0:a=o),o.track===r)),c||s&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function am(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,c){if(!c)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const o=e.apply(this,arguments);return this._shimmedLocalStreams[c.id]?this._shimmedLocalStreams[c.id].indexOf(o)===-1&&this._shimmedLocalStreams[c.id].push(o):this._shimmedLocalStreams[c.id]=[c,o],o};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(p=>p.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const c=this.getSenders();t.apply(this,arguments);const o=this.getSenders().filter(l=>c.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(o)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(c=>{const o=this._shimmedLocalStreams[c].indexOf(a);o!==-1&&this._shimmedLocalStreams[c].splice(o,1),this._shimmedLocalStreams[c].length===1&&delete this._shimmedLocalStreams[c]}),r.apply(this,arguments)}}function cm(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return am(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(p=>this._reverseStreams[p.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(p=>{if(this.getSenders().find(f=>f.track===p))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const p=new n.MediaStream(u.getTracks());this._streams[u.id]=p,this._reverseStreams[p.id]=u,u=p}i.apply(this,[u])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},n.RTCPeerConnection.prototype.addTrack=function(u,p){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(y=>y===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(y=>y.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const v=this._streams[p.id];if(v)v.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const y=new n.MediaStream([u]);this._streams[p.id]=y,this._reverseStreams[y.id]=p,this.addStream(y)}return this.getSenders().find(y=>y.track===u)};function s(l,u){let p=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],v=l._streams[f.id];p=p.replace(new RegExp(v.id,"g"),f.id)}),new RTCSessionDescription({type:u.type,sdp:p})}function a(l,u){let p=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],v=l._streams[f.id];p=p.replace(new RegExp(f.id,"g"),v.id)}),new RTCSessionDescription({type:u.type,sdp:p})}["createOffer","createAnswer"].forEach(function(l){const u=n.RTCPeerConnection.prototype[l],p={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[v=>{const y=s(this,v);d[0].apply(null,[y])},v=>{d[1]&&d[1].apply(null,v)},arguments[2]]):u.apply(this,arguments).then(v=>s(this,v))}};n.RTCPeerConnection.prototype[l]=p[l]});const c=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?c.apply(this,arguments):(arguments[0]=a(this,arguments[0]),c.apply(this,arguments))};const o=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const l=o.get.apply(this);return l.type===""?l:s(this,l)}}),n.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(y=>u.track===y)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function ld(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function lm(n,e){e.version>102||us(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const p0=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:lm,shimAddTrackRemoveTrack:cm,shimAddTrackRemoveTrackWithNative:am,shimGetSendersWithDtmf:sm,shimGetUserMedia:nm,shimMediaStream:im,shimOnTrack:rm,shimPeerConnection:ld,shimSenderReceiverGetStats:om},Symbol.toStringTag,{value:"Module"}));function um(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,a){uf("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(a,c,o){c in a&&!(o in a)&&(a[o]=a[c],delete a[c])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a.audio,"autoGainControl","mozAutoGainControl"),r(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},i&&i.prototype.getSettings){const a=i.prototype.getSettings;i.prototype.getSettings=function(){const c=a.apply(this,arguments);return r(c,"mozAutoGainControl","autoGainControl"),r(c,"mozNoiseSuppression","noiseSuppression"),c}}if(i&&i.prototype.applyConstraints){const a=i.prototype.applyConstraints;i.prototype.applyConstraints=function(c){return this.kind==="audio"&&typeof c=="object"&&(c=JSON.parse(JSON.stringify(c)),r(c,"autoGainControl","mozAutoGainControl"),r(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}function vS(n,e){n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)}))}function dm(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function ud(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]}))}function fm(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,a,c]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[s||null]).then(o=>{if(e.version<53&&!a)try{o.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;o.forEach((u,p)=>{o.set(p,Object.assign({},u,{type:t[u.type]||u.type}))})}return o}).then(a,c)}}function hm(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function pm(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),us(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function mm(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){uf("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function gm(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function vm(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.addTransceiver;t&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(c=>{if("rid"in c&&!/^[a-z0-9]{0,16}$/i.test(c.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in c&&!(parseFloat(c.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in c&&!(parseFloat(c.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(s){const{sender:c}=a,o=c.getParameters();(!("encodings"in o)||o.encodings.length===1&&Object.keys(o.encodings[0]).length===0)&&(o.encodings=r,c.sendEncodings=r,this.setParametersPromises.push(c.setParameters(o).then(()=>{delete c.sendEncodings}).catch(()=>{delete c.sendEncodings})))}return a})}function xm(n,e){if(!(typeof n=="object"&&n.RTCRtpSender)||e.version>=110)return;const t=n.RTCRtpSender.prototype.getParameters;t&&(n.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function _m(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function ym(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const m0=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:vm,shimCreateAnswer:ym,shimCreateOffer:_m,shimGetDisplayMedia:vS,shimGetParameters:xm,shimGetStats:fm,shimGetUserMedia:um,shimOnTrack:dm,shimPeerConnection:ud,shimRTCDataChannel:gm,shimReceiverGetStats:pm,shimRemoveStream:mm,shimSenderGetStats:hm},Symbol.toStringTag,{value:"Module"}));function Mm(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function bm(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const a=new Event("addstream");a.stream=s,i.dispatchEvent(a)})}),e.apply(i,arguments)}}}function Sm(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,u){const p=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[p]);return u?(d.then(l,u),Promise.resolve()):d},e.createAnswer=function(l,u){const p=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[p]);return u?(d.then(l,u),Promise.resolve()):d};let c=function(o,l,u){const p=r.apply(this,[o]);return u?(p.then(l,u),Promise.resolve()):p};e.setLocalDescription=c,c=function(o,l,u){const p=s.apply(this,[o]);return u?(p.then(l,u),Promise.resolve()):p},e.setRemoteDescription=c,c=function(o,l,u){const p=a.apply(this,[o]);return u?(p.then(l,u),Promise.resolve()):p},e.addIceCandidate=c}function wm(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(Tm(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}.bind(e))}function Tm(n){return n&&n.video!==void 0?Object.assign({},n,{video:tm(n.video)}):n}function Em(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let a=0;a<i.iceServers.length;a++){let c=i.iceServers[a];c.urls===void 0&&c.url?(uf("RTCIceServer.url","RTCIceServer.urls"),c=JSON.parse(JSON.stringify(c)),c.urls=c.url,delete c.url,s.push(c)):s.push(i.iceServers[a])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Am(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Cm(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Rm(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const g0=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Rm,shimCallbacksAPI:Sm,shimConstraints:Tm,shimCreateOfferLegacy:Cm,shimGetUserMedia:wm,shimLocalStreamsAPI:Mm,shimRTCIceServerUrls:Em,shimRemoteStreamsAPI:bm,shimTrackEventTransceiver:Am},Symbol.toStringTag,{value:"Module"}));function xS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Pm={exports:{}};(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let c=3;c<s.length;c++){const o=s[c],l=e.matchPrefix(t,"a=rtpmap:"+o+" ")[0];if(l){const u=e.parseRtpMap(l),p=e.matchPrefix(t,"a=fmtp:"+o+" ");switch(u.parameters=p.length?e.parseFmtp(p[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+o+" ").map(e.parseRtcpFb),i.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(c=>{i.headerExtensions.push(e.parseExtmap(c))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(c=>{a.forEach(o=>{c.rtcpFeedback.find(u=>u.type===o.type&&u.parameter===o.parameter)||c.rtcpFeedback.push(o)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(a=>{r+=e.writeRtpMap(a),r+=e.writeFmtp(a),r+=e.writeRtcpFb(a)});let s=0;return i.codecs.forEach(a=>{a.maxptime>s&&(s=a.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(a=>{r+=e.writeExtmap(a)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,a=r.fecMechanisms.indexOf("ULPFEC")!==-1,c=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),o=c.length>0&&c[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(v=>parseInt(v,10)));u.length>0&&u[0].length>1&&u[0][0]===o&&(l=u[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:o,codecPayloadType:parseInt(d.parameters.apt,10)};o&&l&&(f.rtx={ssrc:l}),i.push(f),s&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:o,mechanism:a?"red+ulpfec":"red"},i.push(f))}}),i.length===0&&o&&i.push({ssrc:o});let p=e.matchPrefix(t,"b=");return p.length&&(p[0].indexOf("b=TIAS:")===0?p=parseInt(p[0].substring(7),10):p[0].indexOf("b=AS:")===0?p=parseInt(p[0].substring(5),10)*1e3*.95-50*40*8:p=void 0,i.forEach(d=>{d.maxBitrate=p})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(c=>e.parseSsrcMedia(c)).filter(c=>c.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return i.mux=a.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
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
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(Pm);var Lm=Pm.exports;const Xs=xS(Lm),_S=mg({__proto__:null,default:Xs},[Lm]);function ic(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=Xs.parseCandidate(i.candidate);for(const a in s)a in r||Object.defineProperty(r,a,{value:s[a]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,us(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function dd(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||us(n,"icecandidate",e=>{if(e.candidate){const t=Xs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function rc(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(c){if(!c||!c.sdp)return!1;const o=Xs.splitSections(c.sdp);return o.shift(),o.some(l=>{const u=Xs.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},i=function(c){const o=c.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(o===null||o.length<2)return-1;const l=parseInt(o[1],10);return l!==l?-1:l},r=function(c){let o=65536;return e.browser==="firefox"&&(e.version<57?c===-1?o=16384:o=2147483637:e.version<60?o=e.version===57?65535:65536:o=2147483637),o},s=function(c,o){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=Xs.matchPrefix(c.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&o!==-1&&(l=2147483637),l},a=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:o}=this.getConfiguration();o==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const o=i(arguments[0]),l=r(o),u=s(arguments[0],o);let p;l===0&&u===0?p=Number.POSITIVE_INFINITY:l===0||u===0?p=Math.max(l,u):p=Math.min(l,u);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return p}}),this._sctp=d}return a.apply(this,arguments)}}function sc(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const a=r.send;r.send=function(){const o=arguments[0],l=o.length||o.size||o.byteLength;if(r.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return a.apply(r,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const s=i.apply(this,arguments);return t(s,this),s},us(n,"datachannel",r=>(t(r.channel,r.target),r))}function fd(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const a=new Event("connectionstatechange",r);s.dispatchEvent(a)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function hd(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function oc(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function ac(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const yS=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:hd,shimAddIceCandidateNullOrEmpty:oc,shimConnectionState:fd,shimMaxMessageSize:rc,shimParameterlessSetLocalDescription:ac,shimRTCIceCandidate:ic,shimRTCIceCandidateRelayProtocol:dd,shimSendThrowTypeError:sc},Symbol.toStringTag,{value:"Module"}));function MS({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=lf,i=gS(n),r={browserDetails:i,commonShim:yS,extractVersion:Io,disableLog:pS,disableWarnings:mS,sdp:_S};switch(i.browser){case"chrome":if(!p0||!ld||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=p0,oc(n,i),ac(n),nm(n,i),im(n),ld(n,i),rm(n,i),cm(n,i),sm(n),om(n,i),lm(n,i),ic(n),dd(n),fd(n),rc(n,i),sc(n,i),hd(n,i);break;case"firefox":if(!m0||!ud||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=m0,oc(n,i),ac(n),um(n,i),ud(n,i),fm(n,i),dm(n),mm(n),hm(n),pm(n),gm(n),vm(n,i),xm(n,i),_m(n,i),ym(n,i),ic(n),fd(n),rc(n,i),sc(n,i);break;case"safari":if(!g0||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=g0,oc(n,i),ac(n),Em(n),Cm(n),Sm(n),Mm(n),bm(n),Am(n),wm(n),Rm(n),ic(n),dd(n),rc(n,i),sc(n,i),hd(n,i);break;default:t("Unsupported browser!");break}return r}const v0=MS({window:typeof window>"u"?void 0:window});function ds(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class Dm{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,a=0;for(;a<i;){const c=Math.min(i,a+this.chunkedMTU),o=e.slice(a,c),l={__peerData:this._dataCount,n:s,data:o,total:r};t.push(l),a=c,s++}return this._dataCount++,t}}}function bS(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const ou=v0.default||v0,Ao=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return ou.browserDetails.browser}getVersion(){return ou.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=ou.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},SS=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),Im=()=>Math.random().toString(36).slice(2),x0={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class wS extends Dm{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=x0,this.browser=Ao.getBrowser(),this.browserVersion=Ao.getVersion(),this.pack=Jp,this.unpack=Zp,this.supports=function(){const t={browser:Ao.isBrowserSupported(),webRTC:Ao.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(x0),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Ao.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t}(),this.validateId=SS,this.randomToken=Im}}const oi=new wS,TS="PeerJS: ";class ES{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[TS,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var $e=new ES,df={},AS=Object.prototype.hasOwnProperty,ii="~";function ia(){}Object.create&&(ia.prototype=Object.create(null),new ia().__proto__||(ii=!1));function CS(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function Um(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new CS(t,i||n,r),a=ii?ii+e:e;return n._events[a]?n._events[a].fn?n._events[a]=[n._events[a],s]:n._events[a].push(s):(n._events[a]=s,n._eventsCount++),n}function cc(n,e){--n._eventsCount===0?n._events=new ia:delete n._events[e]}function Kn(){this._events=new ia,this._eventsCount=0}Kn.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)AS.call(t,i)&&e.push(ii?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Kn.prototype.listeners=function(e){var t=ii?ii+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,a=new Array(s);r<s;r++)a[r]=i[r].fn;return a};Kn.prototype.listenerCount=function(e){var t=ii?ii+e:e,i=this._events[t];return i?i.fn?1:i.length:0};Kn.prototype.emit=function(e,t,i,r,s,a){var c=ii?ii+e:e;if(!this._events[c])return!1;var o=this._events[c],l=arguments.length,u,p;if(o.fn){switch(o.once&&this.removeListener(e,o.fn,void 0,!0),l){case 1:return o.fn.call(o.context),!0;case 2:return o.fn.call(o.context,t),!0;case 3:return o.fn.call(o.context,t,i),!0;case 4:return o.fn.call(o.context,t,i,r),!0;case 5:return o.fn.call(o.context,t,i,r,s),!0;case 6:return o.fn.call(o.context,t,i,r,s,a),!0}for(p=1,u=new Array(l-1);p<l;p++)u[p-1]=arguments[p];o.fn.apply(o.context,u)}else{var d=o.length,f;for(p=0;p<d;p++)switch(o[p].once&&this.removeListener(e,o[p].fn,void 0,!0),l){case 1:o[p].fn.call(o[p].context);break;case 2:o[p].fn.call(o[p].context,t);break;case 3:o[p].fn.call(o[p].context,t,i);break;case 4:o[p].fn.call(o[p].context,t,i,r);break;default:if(!u)for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];o[p].fn.apply(o[p].context,u)}}return!0};Kn.prototype.on=function(e,t,i){return Um(this,e,t,i,!1)};Kn.prototype.once=function(e,t,i){return Um(this,e,t,i,!0)};Kn.prototype.removeListener=function(e,t,i,r){var s=ii?ii+e:e;if(!this._events[s])return this;if(!t)return cc(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!r||a.once)&&(!i||a.context===i)&&cc(this,s);else{for(var c=0,o=[],l=a.length;c<l;c++)(a[c].fn!==t||r&&!a[c].once||i&&a[c].context!==i)&&o.push(a[c]);o.length?this._events[s]=o.length===1?o[0]:o:cc(this,s)}return this};Kn.prototype.removeAllListeners=function(e){var t;return e?(t=ii?ii+e:e,this._events[t]&&cc(this,t)):(this._events=new ia,this._eventsCount=0),this};Kn.prototype.off=Kn.prototype.removeListener;Kn.prototype.addListener=Kn.prototype.on;Kn.prefixed=ii;Kn.EventEmitter=Kn;df=Kn;var fs={};ds(fs,"ConnectionType",()=>Ur);ds(fs,"PeerErrorType",()=>bn);ds(fs,"BaseConnectionErrorType",()=>pd);ds(fs,"DataConnectionErrorType",()=>ff);ds(fs,"SerializationType",()=>Qc);ds(fs,"SocketEventType",()=>Lr);ds(fs,"ServerMessageType",()=>Xn);var Ur=function(n){return n.Data="data",n.Media="media",n}({}),bn=function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n}({}),pd=function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n}({}),ff=function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n}({}),Qc=function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n}({}),Lr=function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n}({}),Xn=function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n}({});const Nm="1.5.5";class RS extends df.EventEmitter{constructor(e,t,i,r,s,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const c=e?"wss://":"ws://";this._baseUrl=c+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+Nm),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),$e.log("Server message received:",s)}catch{$e.log("Invalid server message",r.data);return}this.emit(Lr.Message,s)},this._socket.onclose=r=>{this._disconnected||($e.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(Lr.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),$e.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){$e.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Xn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Lr.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class km{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Ur.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){$e.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;$e.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||($e.log(`Received ICE candidates for ${t}:`,a.candidate),s.socket.send({type:Xn.Candidate,payload:{candidate:a.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":$e.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(pd.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":$e.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(pd.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":$e.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},$e.log("Listening for data channel"),e.ondatachannel=a=>{$e.log("Received data channel");const c=a.channel;s.getConnection(t,i)._initializeDataChannel(c)},$e.log("Listening for remote stream"),e.ontrack=a=>{$e.log("Received remote stream");const c=a.streams[0],o=s.getConnection(t,i);if(o.type===Ur.Media){const l=o;this._addStreamToMediaConnection(c,l)}}}cleanup(){$e.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);$e.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),$e.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Ur.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Xn.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(bn.WebRTC,r),$e.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(bn.WebRTC,i),$e.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();$e.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),$e.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:Xn.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(bn.WebRTC,r),$e.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(bn.WebRTC,i),$e.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;$e.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),$e.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(a){r.emitError(bn.WebRTC,a),$e.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){$e.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),$e.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(bn.WebRTC,t),$e.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if($e.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return $e.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){$e.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Fm extends df.EventEmitter{emitError(e,t){$e.error("Error:",t),this.emit("error",new PS(`${e}`,t))}}class PS extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Om extends Fm{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var Sd;const $o=class $o extends Om{get type(){return Ur.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||$o.ID_PREFIX+oi.randomToken(),this._negotiator=new km(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{$e.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{$e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){$e.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case Xn.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case Xn.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:$e.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){$e.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Sd=new WeakMap,lo($o,Sd,$o.ID_PREFIX="mc_");let Uc=$o;class LS{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:a}=this._options,c=new URL(`${t}://${i}:${r}${s}${a}/${e}`);return c.searchParams.set("ts",`${Date.now()}${Math.random()}`),c.searchParams.set("version",Nm),fetch(c.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){$e.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==oi.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===oi.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw $e.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var wd,Td;const Jr=class Jr extends Om{get type(){return Ur.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||Jr.ID_PREFIX+Im(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new km(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{$e.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{$e.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{$e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(ff.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Xn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Xn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:$e.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};wd=new WeakMap,Td=new WeakMap,lo(Jr,wd,Jr.ID_PREFIX="dc_"),lo(Jr,Td,Jr.MAX_BUFFERED_AMOUNT=8388608);let Nc=Jr;class hf extends Nc{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Nc.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return $e.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class au extends hf{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new Dm,this.serialization=Qc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Zp(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=bS(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=Jp(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);$e.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class DS extends hf{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Qc.None}}class IS extends hf{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=oi.chunkedMTU){this.emitError(ff.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=Qc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Ed;const Wo=class Wo extends Fm{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:DS,json:IS,binary:au,"binary-utf8":au,default:au},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:oi.CLOUD_HOST,port:oi.CLOUD_PORT,path:"/",key:Wo.DEFAULT_KEY,token:oi.randomToken(),config:oi.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==oi.CLOUD_HOST?this._options.secure=oi.isSecure():this._options.host==oi.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&$e.setLogFunction(this._options.logFunction),$e.logLevel=this._options.debug||0,this._api=new LS(t),this._socket=this._createServerConnection(),!oi.supports.audioVideo&&!oi.supports.data){this._delayedAbort(bn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!oi.validateId(i)){this._delayedAbort(bn.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(bn.ServerError,r))}_createServerConnection(){const e=new RS(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Lr.Message,t=>{this._handleMessage(t)}),e.on(Lr.Error,t=>{this._abort(bn.SocketError,t)}),e.on(Lr.Disconnected,()=>{this.disconnected||(this.emitError(bn.Network,"Lost connection to server."),this.disconnect())}),e.on(Lr.Close,()=>{this.disconnected||this._abort(bn.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case Xn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Xn.Error:this._abort(bn.ServerError,i.msg);break;case Xn.IdTaken:this._abort(bn.UnavailableID,`ID "${this.id}" is taken`);break;case Xn.InvalidKey:this._abort(bn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Xn.Leave:$e.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Xn.Expire:this.emitError(bn.PeerUnavailable,`Could not connect to peer ${r}`);break;case Xn.Offer:{const s=i.connectionId;let a=this.getConnection(r,s);if(a&&(a.close(),$e.warn(`Offer received for existing Connection ID:${s}`)),i.type===Ur.Media){const o=new Uc(r,this,{connectionId:s,_payload:i,metadata:i.metadata});a=o,this._addConnection(r,a),this.emit("call",o)}else if(i.type===Ur.Data){const o=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});a=o,this._addConnection(r,a),this.emit("connection",o)}else{$e.warn(`Received malformed connection type:${i.type}`);return}const c=this._getMessages(s);for(const o of c)a.handleMessage(o);break}default:{if(!i){$e.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,a=this.getConnection(r,s);a&&a.peerConnection?a.handleMessage(e):s?this._storeMessage(s,e):$e.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){$e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(bn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){$e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(bn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){$e.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new Uc(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){$e.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){$e.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||($e.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;$e.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)$e.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)$e.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(bn.ServerError,t))}};Ed=new WeakMap,lo(Wo,Ed,Wo.DEFAULT_KEY="peerjs");let md=Wo;var zm=md;const Bm="perihelion-v1-",_0="ABCDEFGHJKLMNPQRSTUVWXYZ",kc=3,cu=new URLSearchParams(location.search).get("peer"),Gm=cu?{host:cu.split(":")[0],port:Number(cu.split(":")[1]||9e3),path:"/",secure:!1,debug:0}:{debug:0},US=()=>Array.from({length:5},()=>_0[Math.random()*_0.length|0]).join("");function NS(n,e){const t=US(),i=new zm(Bm+t,Gm),r=[{kind:"human",name:n,online:!0}];let s=!1;const a=()=>r.map(l=>({kind:l.kind,name:l.name,online:l.online,difficulty:l.difficulty})),c=(l,u)=>{try{l&&l.open&&l.send(u)}catch{}},o={code:t,seats:r,get started(){return s},broadcast(l){for(const u of r)u.conn&&c(u.conn,l)},sendTo(l,u){c(r[l]?.conn,u)},lobby(){for(const[l,u]of r.entries())u.conn&&c(u.conn,{t:"lobby",seats:a(),you:l,code:t});e.seats(a())},addAI(l){s||r.length>=kc||(r.push({kind:"ai",name:`AI · ${l}`,online:!0,difficulty:l}),o.lobby())},remove(l){if(s||l===0||!r[l])return;const[u]=r.splice(l,1);u.conn&&(c(u.conn,{t:"kicked"}),setTimeout(()=>u.conn.close(),200)),o.lobby()},start(){s=!0},close(){i.destroy()}};return i.on("open",()=>e.open(t)),i.on("error",l=>e.error(l.type==="unavailable-id"?"Code clash, try again":`Connection problem (${l.type})`)),i.on("connection",l=>{l.on("data",u=>{if(u.t==="hello"){const p=Vm(u.name),d=typeof u.token=="string"?u.token.slice(0,64):"";let f=d?r.findIndex((v,y)=>y!==0&&v.kind==="human"&&!v.online&&v.token===d):-1;if(f<0&&s){c(l,{t:"full",why:"Game already started"});return}if(f<0){if(r.length>=kc){c(l,{t:"full",why:"Room is full"});return}if(r.some(v=>v.online&&v.token&&v.token===d)){c(l,{t:"full",why:"Already in this room"});return}r.push({kind:"human",name:kS(r,p),token:d}),f=r.length-1}Object.assign(r[f],{conn:l,online:!0}),o.lobby(),s&&e.rejoin(f)}else if(u.t==="cmd"&&u.cmd&&typeof u.cmd=="object"){const p=r.findIndex(d=>d.conn===l);p>0&&e.cmd(p,u.cmd)}}),l.on("close",()=>{const u=r.findIndex(p=>p.conn===l);if(!(u<0)){if(!s){r.splice(u,1),o.lobby();return}r[u].online=!1,r[u].conn=null,o.lobby(),e.left(u)}})}),o}function Vm(n){return String(n??"").replace(/[<>&"'`]/g,"").trim().slice(0,16)||"Player"}function kS(n,e){let t=e||"Player",i=2;for(;n.some(r=>r.name===t);)t=`${e} ${i++}`;return t}function FS(n,e,t,i){const r=new zm(Gm);let s=null;const a={send(c){try{s&&s.open&&s.send(c)}catch{}},close(){r.destroy()}};return r.on("open",()=>{s=r.connect(Bm+n.toUpperCase(),{reliable:!0});const c=setTimeout(()=>{s.open||i.error("No game found with that code")},9e3);s.on("open",()=>{clearTimeout(c),a.send({t:"hello",name:e,token:t})}),s.on("data",o=>i.message(o)),s.on("close",()=>i.closed())}),r.on("error",c=>i.error(c.type==="peer-unavailable"?"No game found with that code":`Connection problem (${c.type})`)),a}const G=n=>document.getElementById(n);let Fc=null;const gd=new Set,On=(n,e)=>{if(Fc&&n.contains(Fc)){n._pending=e,gd.add(n);return}n._pending=void 0,n._html!==e&&(n._html=e,n.innerHTML=e)},pf=()=>{Fc=null;for(const n of gd)gd.delete(n),n._pending!==void 0&&On(n,n._pending)};window.addEventListener("pointerdown",n=>{Fc=n.target},!0);let Oc=0;window.addEventListener("pointerup",()=>{clearTimeout(Oc),Oc=setTimeout(pf,350)},!0);window.addEventListener("pointercancel",()=>{clearTimeout(Oc),pf()},!0);window.addEventListener("click",()=>{clearTimeout(Oc),setTimeout(pf,0)});const at=(()=>{const n={rivals:1,difficulty:"normal",system:"random",pct:100,dev:!1,gfx:"auto"};try{return{...n,...JSON.parse(localStorage.getItem("perihelion")||"{}")}}catch{return n}})(),Or=()=>{try{localStorage.setItem("perihelion",JSON.stringify(at))}catch{}};at.token||(at.token=Array.from(crypto.getRandomValues(new Uint8Array(12)),n=>n.toString(16).padStart(2,"0")).join(""),Or());function mf(){const n=new URLSearchParams(location.search).get("gfx");if(n==="high"||n==="low")return n;if(at.gfx==="high"||at.gfx==="low")return at.gfx;const e=matchMedia("(pointer: coarse)").matches,t=(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4;return e&&t?"low":"high"}const je=lS(G("scene"),G("labels"),{quality:mf()});let U=null,el=[],fn=!1,Me=0,Et=null,ci=!1;const lc=[.5,1,2,4,8];let es=1;const B={peek:null,pick:null,selected:null,target:null,fleet:null,count:1,dark:!1,preview:null,dragging:!1,vis:null,slot:null,mode:null},Ft=n=>(n=Math.max(0,n),`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`);function Hm(n,e){const t=U.bodies[e.b];if(e.type!=="research"&&e.type!=="spy"&&e.type!=="dark"&&(!t||t.owner!==n))return!1;const i=(r,s)=>typeof s=="string"&&Object.hasOwn(r,s);if((e.type==="launch"||e.type==="probe")&&!U.bodies[e.to]||e.type==="launch"&&!Number.isFinite(e.n)||e.type==="build"&&!i(we.structures,e.k)||e.type==="research"&&!i(ti,e.k)&&!i(Dn,e.k)||e.type==="project"&&!i(dn,e.k)||(e.type==="upgrade"||e.type==="demolish")&&!Number.isInteger(e.i))return!1;switch(e.type){case"launch":return!!Wc(U,t,U.bodies[e.to],e.n,!!e.dark);case"spy":return!!L0(U,n,t);case"dark":{const r=U.fleets.find(s=>s.id===e.f&&s.owner===n);return Fg(U,r,!!e.on)}case"ship":return gu(U,t);case"cancel":return H0(U,t);case"build":return Ai(U,t,e.k);case"upgrade":return!!t.structures[e.i]&&Co(U,t,t.structures[e.i]);case"demolish":return!!t.structures[e.i]&&V0(U,t,t.structures[e.i]);case"research":return P0(U,n,e.k);case"probe":return!!vu(U,t,U.bodies[e.to]);case"project":return A0(U,t,e.k);default:return!1}}function Ki(n){return ci?!1:Et?.role==="client"?(Et.room.send({t:"cmd",cmd:n}),!0):Hm(Me,n)}function $m(n,e,t){const i=()=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.v===String(e())));n.addEventListener("click",r=>{const s=r.target.closest("button");s&&(t(s.dataset.v),Or(),i())}),i()}$m(G("rivals"),()=>at.rivals,n=>at.rivals=Number(n));$m(G("difficulty"),()=>at.difficulty,n=>at.difficulty=n);let tl=[],eo=null;const OS=n=>at.system!=="random"&&Qn[at.system]?at.system:pc[(n>>>0)%pc.length];function nl({seed:n=Math.random()*2**31|0,players:e=at.rivals+1,seat:t=0,names:i=null,aiSeats:r=null,aiDiffs:s=null,mp:a=!1,system:c=OS(n),day:o=null}={}){eo=o,U=O0({seed:n,opponents:e-1,mp:a,system:c}),i&&(U.names=i),Me=t;const l=Mi(n^2748);tl=s||(r?r.map(([,d])=>d):a?[]:Array(e-1).fill(at.difficulty)),el=Et?.role==="client"?[]:r?r.map(([d,f])=>xu(d,f,l)):Array.from({length:e-1},(d,f)=>xu(f+1,at.difficulty,l)),B.selected=B.target=B.preview=B.fleet=B.mode=B.peek=null,B.slot=null,B.me=Me,ci=!1,Cr=!1,_f=null,bd=!0,yf=performance.now(),Uo=!1,typeof B.devAs=="number"&&B.devAs>=U.players&&(B.devAs=void 0),U.events.length=0,G("feed").innerHTML="",G("research").hidden=!0,je.build(U),B.vis=ts(U,Me);const u=U.bodies.find(d=>d.owner===Me);je.focus(U,u.id,!1),je.orbit.target.set(0,0,0),je.orbit.dist=u.size*12+40,je.orbit.pol=.9;for(const d of["menu","end","lobby"])G(d).hidden=!0;G("hud").hidden=!1,G("leave").hidden=!0,G("warp").hidden=!!Et,G("pause").hidden=Et?.role==="client",es=1,G("warp").textContent="1×",fn=!0,gf(),G("resume").hidden=!0,G("menu").classList.remove("paused"),Gt();const p=Qn[U.system];wt(`${eo?"Daily · ":""}${p.name}`,"#aab1c8")}const il=()=>G("resume").hidden||confirm("Leave the game in progress? It will be lost.");function zS(){il()&&(Oi(),nl())}function Wm(){if(!il())return;Oi();const n=F0();nl({seed:n.seed,system:n.system,day:n.key})}G("daily").addEventListener("click",Wm);const lu=["random",...k0];function Xm(){G("system-pick").textContent=at.system==="random"?"Random":`${Qn[at.system].name}${Qn[at.system].test?" (test)":""}`,G("system-pick").title=at.system==="random"?"A different system type each game":Qn[at.system].text;const n=F0();G("daily").innerHTML=`Daily<small>${Qn[n.system].name}</small>`,G("daily").title=`Today's system, the same for everyone: ${Qn[n.system].name}`}G("system-pick").addEventListener("click",()=>{at.system=lu[(lu.indexOf(at.system)+1)%lu.length],Or(),Xm()});Xm();G("play").addEventListener("click",zS);G("again").addEventListener("click",()=>{if(Oi(),G("end").hidden=!0,G("resume").hidden=!0,G("menu").classList.remove("paused"),eo){Wm();return}G("menu").hidden=!1,G("play").textContent="Play vs AI"});G("pause").addEventListener("click",qm);G("leave").addEventListener("click",()=>{Oi(),fn=!1,G("leave").hidden=!0,G("hud").hidden=!0,G("menu").hidden=!1,G("resume").hidden=!0});G("resume").addEventListener("click",()=>{G("menu").hidden=!0,G("menu").classList.remove("paused"),fn=!0});function qm(){if(!(!U||U.winner!==null||!fn)){if(Et){ci=!ci,G("pause").innerHTML=Mt(ci?"play":"pause"),Et.room.broadcast({t:"pause",paused:ci}),zc();return}fn=!1,G("menu").hidden=!1,G("resume").hidden=!1,G("rnd").hidden=!0,G("menu").classList.add("paused"),G("play").textContent="New game"}}function zc(){G("banner").hidden=!ci,G("banner").textContent=Me===0?"Paused · tap play to resume":"Paused by host"}G("keys").textContent=matchMedia("(pointer: fine)").matches?"Mouse: click to select · drag to pan · right-drag to rotate · scroll to zoom · double-click a world to fly there. Keys: WASD pan · Q/E rotate · +/− zoom · F focus · H whole system · L launch/confirm · P probe · R research · Space pause · 1–5 speed (½× to 8×) · Esc back.":"Drag to rotate · two fingers to pan and zoom · double-tap to fly to a world.";G("name").value=at.name||"";G("name").addEventListener("input",()=>{at.name=G("name").value.trim(),Or()});const Ym=()=>Vm(G("name").value),Ii=n=>{G("menu-msg").textContent=n||""};let Km=[];function Oi(){Et&&Et.room.close(),Et=null,ci=!1,G("banner").hidden=!0,G("pause").innerHTML=Mt("pause")}function vd(n,e){Km=n,G("lobby-code").textContent=e||"·····";const t=Et?.role==="host",i=n.map((r,s)=>`<div class="seat"><i style="background:${xt(s)}"></i><span>${r.name}${s===Me?" (you)":""}</span><small>${r.kind==="ai"?"AI":s===0?"host":r.online===!1?"offline":"ready"}</small>${t&&s>0?`<button data-kick="${s}" aria-label="Remove">${Mt("close")}</button>`:""}</div>`);for(let r=n.length;r<kc;r++)i.push('<div class="seat empty"><span>Open seat</span></div>');G("seats").innerHTML=i.join(""),G("lobby-ai").hidden=!t||n.length>=kc,G("lobby-start").hidden=!t,G("lobby-start").disabled=n.length<2,G("lobby-hint").textContent=t?n.length<2?"Tap the code to copy it. Up to 3 empires.":"Ready when you are.":"Waiting for the host to start…"}let jm="normal";G("ai-diff").addEventListener("click",n=>{const e=n.target.closest("button");e&&(jm=e.dataset.v,G("ai-diff").querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)))});G("add-ai").addEventListener("click",()=>Et?.role==="host"&&Et.room.addAI(jm));G("seats").addEventListener("click",n=>{const e=n.target.closest("button[data-kick]");e&&Et?.role==="host"&&Et.room.remove(Number(e.dataset.kick))});G("lobby-leave").addEventListener("click",()=>{Oi(),G("lobby").hidden=!0,G("menu").hidden=!1});G("host").addEventListener("click",()=>{if(!il())return;Oi(),Ii("Opening a room…"),Me=0;const n=NS(Ym(),{open:e=>{Ii(""),G("menu").hidden=!0,G("lobby").hidden=!1,vd(n.seats,e)},seats:e=>vd(e,n.code),error:e=>{Ii(e),n.started||(Oi(),G("lobby").hidden=!0,G("menu").hidden=!1)},cmd:(e,t)=>{U&&fn&&!ci&&Hm(e,t)},left:e=>wt(`${U.names[e]} disconnected`,xt(e)),rejoin:e=>{n.sendTo(e,Zm(e)),wt(`${U.names[e]} is back`,xt(e))}});Et={role:"host",room:n}});function Zm(n){return{t:"start",seed:Et.seed,players:U.players,names:U.names,seat:n,paused:ci,aiDiffs:tl,system:U.system}}G("lobby-start").addEventListener("click",()=>{if(Et?.role!=="host"||Km.length<2)return;const n=Et.room;n.start(),Et.seed=Math.random()*2**31|0;const e=n.seats.map(i=>i.name),t=n.seats.map((i,r)=>[r,i]).filter(([,i])=>i.kind==="ai").map(([i,r])=>[i,r.difficulty]);nl({seed:Et.seed,players:n.seats.length,seat:0,names:e,aiSeats:t,mp:!0}),n.seats.forEach((i,r)=>{i.conn&&n.sendTo(r,Zm(r))})});function Jm(n){G("mp-buttons").hidden=n,G("join-row").hidden=!n,n&&G("code").focus()}G("join").addEventListener("click",()=>{Ii(""),Jm(!0)});G("join-back").addEventListener("click",()=>{Ii(""),Jm(!1)});G("code").addEventListener("keydown",n=>{n.key==="Enter"&&G("join-go").click()});G("devtoggle").addEventListener("click",()=>{at.dev=!at.dev,Or(),gf()});G("gfxtoggle").addEventListener("click",()=>{at.gfx={auto:"high",high:"low",low:"auto"}[at.gfx]||"auto",Or(),je.setQuality(mf()),Qm()});function Qm(){G("gfxtoggle").textContent=`Graphics ${at.gfx==="auto"?`auto (${mf()})`:at.gfx}`}Qm();function gf(){G("devtoggle").textContent=`Dev view ${at.dev?"on":"off"}`,G("devbar").hidden=!at.dev||Et!==null||!U}gf();function eg(){G("devbar").hidden=!1;const n=B.devAs===void 0?Me:B.devAs,e=[...Array.from({length:U.players},(t,i)=>[i,li(i)]),["all","All"]];On(G("devbar"),`<span>View as</span>${e.map(([t,i])=>`<button data-as="${t}" class="${String(n)===String(t)?"on":""}" style="${t==="all"?"":`color:${xt(t)}`}">${i}</button>`).join("")}<button data-w16="1">16×</button>`)}G("devbar").addEventListener("click",n=>{const e=n.target.closest("button");if(e&&!Et){if(e.dataset.w16){vf(16);return}B.devAs=e.dataset.as==="all"?"all":Number(e.dataset.as),B.vis=B.devAs==="all"?null:ts(U,B.devAs),eg()}});G("howto").addEventListener("click",()=>{G("menu").hidden=!0,G("tutorial").hidden=!1});G("tut-close").addEventListener("click",()=>{G("tutorial").hidden=!0,G("menu").hidden=!1});G("lobby-code").addEventListener("click",async()=>{const n=G("lobby-code").textContent;if(!/^\w{5}$/.test(n))return;const e=G("lobby-hint"),t=e.textContent;try{await navigator.clipboard.writeText(n),e.textContent="Code copied"}catch{e.textContent="Long-press the code to copy it"}setTimeout(()=>{e.textContent=t},1800)});G("join-go").addEventListener("click",()=>{if(!il())return;const n=G("code").value.trim().toUpperCase();if(n.length!==5){Ii("Enter the 5-letter code");return}Oi(),Ii("Connecting…"),Et={role:"client",room:FS(n,Ym(),at.token,{message:t=>BS(t),error:t=>{fn&&U?.mp||(Ii(t),Oi(),G("lobby").hidden=!0,G("menu").hidden=!1)},closed:()=>{Et&&(Oi(),fn?(wt("Lost connection to the host","#ff7a4d"),fn=!1,setTimeout(()=>{G("menu").hidden=!1},1500)):(G("lobby").hidden=!0,G("menu").hidden=!1,Ii("The host closed the room")))}}),code:n}});function BS(n){n.t==="lobby"?(Me=n.you,Ii(""),G("menu").hidden=!0,!fn&&G("end").hidden&&(G("lobby").hidden=!1),vd(n.seats,n.code)):n.t==="full"||n.t==="kicked"?(Ii(n.t==="kicked"?"The host removed you":n.why),Oi(),G("lobby").hidden=!0,G("menu").hidden=!1):n.t==="start"?(nl({seed:n.seed,players:n.players,seat:n.seat,names:n.names,aiDiffs:n.aiDiffs||[],mp:!0,system:n.system||"classic"}),ci=n.paused,zc()):n.t==="state"&&U&&fn?(yf=performance.now(),XS(n.s)):n.t==="events"&&U&&fn?ig(n.list):n.t==="pause"&&(ci=n.paused,zc())}const GS=["crewBonus","owner","ships","guns","structures","sieges","queue","build","slips","vet","tf","fighting","totDef","totAtk","resting","restUntil","bonus","name","project","wonder"],VS=n=>U.bodies.some(e=>e.owner===n||e.sieges.some(t=>t.owner===n))||U.fleets.some(e=>e.owner===n&&!e.probe),HS=["owner","bonus","name","project","wonder"];function $S(n=null){const e=n!==null&&VS(n)?ts(U,n):null;return{time:U.time,winner:U.winner,credits:U.credits,tech:U.tech,fleets:e?U.fleets.filter(t=>e.seesFleet(t)):U.fleets,scans:e?(U.scans||[]).filter(t=>t.owner===n):U.scans,spies:e?(U.spies||[]).filter(t=>t.owner===n):U.spies,happenings:U.happenings,wonders:U.wonders,visit:U.visit,nextId:U.nextId,bodies:U.bodies.map(t=>e&&!e.bodies.has(t.id)?{...Object.fromEntries(HS.map(i=>[i,t[i]])),hidden:!0}:Object.fromEntries(GS.map(i=>[i,t[i]]))),stats:U.winner!==null?U.stats:void 0}}const WS={ships:0,guns:0,structures:[],sieges:[],queue:0,build:0,slips:[],vet:0,tf:null,fighting:!1,resting:0,restUntil:0};function XS(n){const e=n.time-U.time;U.time=ci||Math.abs(e)>1.5?n.time:U.time+e*.5,U.credits=n.credits,U.tech=n.tech,U.fleets=n.fleets,U.scans=n.scans,U.spies=n.spies,U.happenings=n.happenings,U.wonders=n.wonders,U.visit=n.visit,U.nextId=n.nextId,n.bodies.forEach((t,i)=>{const r=U.bodies[i];if(t.hidden){Object.assign(r,t,WS);return}const s=bd||r.hidden,a=s?0:(r.lostDef||0)+Math.max(0,(t.totDef||0)-(r.totDef||0)),c=s?0:(r.lostAtk||0)+Math.max(0,(t.totAtk||0)-(r.totAtk||0)),o=!s&&(r.captured||t.owner!==r.owner);Object.assign(r,t,{lostDef:a,lostAtk:c,captured:o,hidden:!1})}),bd=!1,n.stats&&(U.stats=n.stats),n.winner!==null&&(U.winner=n.winner)}function vf(n){es=n,G("warp").textContent=`${es===.5?"½":es}×`}G("warp").addEventListener("click",()=>vf(lc[(lc.indexOf(es)+1)%lc.length]));function tg(){B.selected=B.target=B.peek=B.fleet=null,B.mode=null,G("research").hidden=!0,Gt()}function ng(){tg(),je.orbit.follow=null,je.orbit.fleet=null,je.orbit.target.set(0,0,0),je.orbit.vaz=je.orbit.vpol=0,je.orbit.pol=.9,je.orbit.goalDist=650*kr(U)}G("system").addEventListener("click",ng);function rl(){const n=B.fleet!==null&&U?U.fleets.find(l=>l.id===B.fleet):null;if(n||(B.fleet=null),G("fleet").hidden=!n||!fn||B.selected!==null||!G("research").hidden,G("fleet").hidden)return;const e=An(n,U.time),t=n.T-(U.time-n.t0),i=n.dark&&!e.burning?sn(`${Mt("dark")} coasting dark`,"Drive off: enemies only spot this fleet close in","dim"):e.flipping?"flipping":e.phase===1?"burning":"braking",r=U.bodies[n.to],s=Math.hypot(e.vx,e.vy,e.vz);if(n.probe){G("fdark").hidden=!0,On(G("fleetText"),`${Mt("probe")} <b>Probe</b> → <b>${r.name}</b> · <b>${Ft(t)}</b>`);return}const a=n.owner===Me&&!n.probe&&t>10;G("fdark").hidden=!a,a&&(G("fdark").classList.toggle("on",!!n.dark),On(G("fdark"),`${Mt("dark")} ${n.dark?"Light up":"Go dark"}`),G("fdark").title=n.dark?"Light the drive: burn the rest of the way (sooner, easy to spot)":"Go dark: cut the drive and coast (later, hard to spot)");const c="",o=at.dev&&!Et?`<br><span class="dim">seen by ${U.names,""}${Array.from({length:U.players},(l,u)=>u).filter(l=>l!==n.owner).map(l=>`<span style="color:${xt(l)}">${li(l)} ${ts(U,l).seesFleet(n)?"✓":"✗"}</span>`).join(" · ")}</span>`:"";On(G("fleetText"),`<b>${cr(n.name)}</b>${wn(n.vet)?` <span class="vet">${Md(n.vet)}</span>`:""} · <b>${n.n}</b> → <b>${r.name}</b><br><span class="dim">${i}</span> · arrive in <b>${Ft(t)}</b>${n.assist!==void 0?` ${sn(Mt("assist"),`Gravity assist via ${U.bodies[n.assist].name}`,"assist")}`:""}${n.detour?` ${sn("round the sun","Steering round the sun: a turn beside it, then on to the target","dim")}`:""} ${sn(`${Math.round(e.progress*100)}%`,`${s.toFixed(2)} units/s`,"dim")}${c}${o}`)}G("fdark").addEventListener("click",()=>{const n=U.fleets.find(t=>t.id===B.fleet),e=n&&!n.dark;n&&Ki({type:"dark",f:n.id,on:e})&&wt(`${cr(n.name)} ${e?"running dark":"drive lit"}`,xt(Me),"dark"),rl()});function qS(){const n=B.peek!==null&&U&&fn&&B.selected===null&&B.fleet===null?U.bodies[B.peek]:null;if(G("peek").hidden=!n,!n)return;const e=!B.vis||B.vis.bodies.has(n.id),t=n.visitor?U.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="planet"&&n.giant?"Gas giant":n.kind[0].toUpperCase()+n.kind.slice(1),i=n.owner===Oe?"Independent":li(n.owner),r=n.structures.filter(a=>a.left<=0||a.next).map(a=>`${we.structures[a.type].name}${we.structures[a.type].maxLevel?` ${Vo[a.level]}`:""}`),s=e?`${Mt("fleet")} <b>${n.ships}</b> ship${n.ships===1?"":"s"} · ${Mt("guns")} <b>${Math.ceil(n.guns)}</b> gun${Math.ceil(n.guns)===1?"":"s"}${r.length?` · ${r.join(", ")}`:""}`:sn("Defences unknown","Out of sensor range: send a probe or get a world nearby to see it");On(G("peek"),`<div class="head"><span class="tag">${t}</span><b>${n.name}</b><span class="grow"></span><span class="tag" style="color:${n.owner===Oe?"var(--dim)":xt(n.owner)}">${i}</span></div><div class="row2">${s}</div>${xd(n,{income:!1,seen:e})}${jS(n)}`)}const YS=()=>window.innerWidth<760;function KS(){const n={worlds:0,mines:0,skimmers:0,exchanges:0,bonuses:0};let e=0;for(const a of U.bodies){if(a.owner!==Me)continue;e+=1;const c=B0(a,U);for(const o in n)n[o]+=c[o]}const t=(U.spies||[]).filter(a=>a.owner===Me&&a.since<=U.time).reduce((a,c)=>a+Ys(U.bodies[c.body],U)*pi.skim,0),i=(U.happenings||[]).some(a=>a.kind==="comet"&&a.holder===Me&&U.time>=a.starts)?ur.comet.pay:0,r=[[`${e} world${e===1?"":"s"}`,n.worlds],["Mines",n.mines],["Gas harvesters",n.skimmers],["Exchanges",n.exchanges],["Bonuses and wonders",n.bonuses],["Agents",t],["Comet mining",i]],s=jo(U,Me);return r.filter(([,a])=>a>.001).map(([a,c])=>`${a}  +${c.toFixed(1)}/s`).concat(s>.001?[`Fleet upkeep (ships beyond ${we.upkeep.free})  −${s.toFixed(1)}/s`]:[]).join(`
`)}function jS(n){if(n.owner===Oe||n.owner===Me||n.visitor||Cr)return"";const e=(U.spies||[]).find(i=>i.owner===Me&&i.body===n.id);if(e&&e.since>U.time)return`<div class="spy">${Mt("spy")} ${sn(`Recruiting · ${Ft(e.since-U.time)}`,"Finding someone on the inside: they start work once recruited")}</div>`;if(e){const i=Rd(U,n)*60,r=i<.25?"low":i<.5?"rising":"high";return`<div class="spy">${Mt("spy")} ${sn(`Agent in place · ${Ft(U.time-e.since)}`,"Shows you this world and its launches, skims its income and slows any megaproject here")}<span class="grow"></span>${sn(`risk ${r}`,"Each minute there's a chance the agent is caught. Their Intel and a security bureau nearby raise it",r==="high"?"warn":"dim")}</div>`}const t=Cd(U,Me,n);return t==="needs Signals intercept"?`<div class="spy dim">${Mt("spy")} Agents need Signals intercept (Intel I)</div>`:`<div class="spy">${Mt("spy")} <span class="dim">${t||"No agent here"}</span><span class="grow"></span><button data-spy="${n.id}" ${t?"disabled":""} title="Recruit an agent there (${Ft(pi.travel)} to get in place)">Recruit agent<small>${pi.cost}</small></button></div>`}G("peek").addEventListener("click",n=>{const e=n.target.closest("button[data-spy]");if(!e)return;const t=U.bodies[+e.dataset.spy];Ki({type:"spy",b:t.id})&&wt(`Recruiting an agent on ${t.name}`,xt(Me),"spy"),Gt()});G("hintCancel").addEventListener("click",()=>{B.mode=null,B.target=null,Gt()});function Gt(){if(G("hint").hidden=B.mode!=="project",B.mode==="project"){const s=dn[B.projKey];On(G("hintText"),`${Mt(B.projKey)} Tap a world for the <b>${s.name}</b><small>${s.where==="giant"?"Gas giants only":s.where==="inner"?"Innermost planet only":s.where==="planet"?"Planets only":"Any world of yours"} · they're ringed in violet</small>`)}rl(),qS();const n=B.selected!==null&&U?U.bodies[B.selected]:null,e=!!n&&n.owner===Me&&fn;if(G("actions").hidden=!e,!e){B.preview=null,B.mode!=="project"&&(B.mode=null);return}if(B.mode==="projconfirm"){const s=dn[B.projKey],a=no(U,n,B.projKey);G("actions").classList.add("launching"),G("buildrow").hidden=G("stepper").hidden=G("dark").hidden=!0,G("cancel").hidden=!1,On(G("info"),`<span>${Mt(B.projKey)} Build the <b>${s.name}</b> at <b>${n.name}</b> · <b>${s.cost}</b> · ${Ft(s.time/dc(U,Me))}${a?` · <span class="warn">${a}</span>`:""}</span><small class="dim" style="flex-basis:100%">${s.text}. Only one empire can finish it; if a rival gets there first you get half back.</small>`),G("launch").textContent="Confirm",G("launch").disabled=!!a;return}!n.ships&&B.mode==="launch"&&(B.mode=null);const t=Ir(U,n);B.mode==="probe"&&!Hc(n)&&(B.mode=null);const i=B.mode==="probe";B.count=t?Math.max(1,Math.min(t,Math.round(t*at.pct/100))):0,On(G("count"),`${B.count}<small>${at.pct}%</small>`),G("count").title=`${B.count} of ${t} ready ships (${at.pct}%). Tap: all, half, a quarter`,Number(G("pct").value)!==at.pct&&(G("pct").value=at.pct),G("pct").style.setProperty("--fill",`${at.pct}%`);const r=B.mode==="launch"||i;if(G("actions").classList.toggle("launching",r),G("buildrow").hidden=r,G("stepper").hidden=!r||i,G("cancel").hidden=!r,G("dark").hidden=!r||i,G("dark").classList.toggle("on",B.dark),r)if(B.target===null)B.preview=null,On(G("info"),`<span class="tag">${i?"Probe from":"Launch from"}</span><b>${n.name}</b><span class="grow"></span><span class="tag">tap a destination</span>`),G("launch").textContent="Confirm",G("launch").disabled=!0;else{const s=U.bodies[B.target];B.preview=oa(U,n,s,U.time,i?we.probe.speed:1,!1,!i&&B.dark?Vc.burn:.5);const a=s.owner===Me?"reinforce":`${s.ships} ship${s.ships===1?"":"s"}, ${Math.ceil(s.guns)} gun${Math.ceil(s.guns)===1?"":"s"}`,c=s.owner===Me?0:io(U,s),o=!B.vis||B.vis.bodies.has(s.id),l=o?c?`${a} ${sn(`+${c.toFixed(1)}`,`Cover from ${Mc(U,s).map(h=>h.from.name).join(", ")}`)}`:a:"unknown",u=(B.preview.assist!==void 0?` ${sn(Mt("assist"),`Gravity assist via ${U.bodies[B.preview.assist].name}: a faster route`,"assist")}`:"")+(B.preview.detour?` ${sn("round the sun","The straight line would cross the sun: the fleet steers round it under full thrust","dim")}`:"");if(i){const h=Fd(U,n,s);On(G("info"),`<span>Probe → <b>${s.name}</b> · <b>${Ft(B.preview.T)}</b>${h?` · <span class="dim">${h}</span>`:""}</span>`),G("launch").textContent="Confirm",G("launch").disabled=!!h;return}const p=kd(U,n),d=p?` ${sn(`+${p} in ${Ft(Math.ceil(n.restUntil-U.time))}`,`${p} ship${p===1?"":"s"} just arrived and can launch in ${Ft(Math.ceil(n.restUntil-U.time))}`,"dim")}`:"",f=Pd(U,s),v=B.preview.T>f-5,y=Number.isFinite(f)?` · <span class="${v?"warn":"dim"}">${v?"too late":`leaves ${Ft(f)}`}</span>`:"",m=n.sieges.length?` · <span class="warn">${sn("breaking out","This world is under attack: half the ships launched will be shot down leaving orbit","warn")}</span>`:"";On(G("info"),`<span><b>${B.count}</b>${m} → <b>${s.name}</b> <span class="dim">${l}</span> · <b>${Ft(B.preview.T)}</b>${B.dark?` ${sn("dark","Running dark: enemies only spot this fleet close in","dim")}`:""}${u}${d}${y}</span>${xd(s,{income:!1,seen:o})}`),G("launch").textContent="Confirm",G("launch").disabled=t<1||v}else{B.preview=null,B.target=null;const s=n.visitor?U.visit?.kind==="comet"?"Comet":"Derelict":n.kind==="station"?"Station":n.kind[0].toUpperCase()+n.kind.slice(1);On(G("info"),`<span class="tag">${s}</span><b>${n.name}</b><span class="grow"></span>${n.ships?`${n.tf?`<span class="tag">TF ${n.tf}</span>`:""}<span class="num">${n.ships}</span><span class="tag">ship${n.ships===1?"":"s"}</span>`:'<span class="tag">no ships</span>'}`+xd(n));const a=n.ships&&!t?Math.ceil(n.restUntil-U.time):0;G("launch").textContent=a?`Ready in ${Ft(a)}`:"Launch",G("launch").disabled=t<1,JS(n)}}const Vo=["","I","II","III"],Bc=n=>String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),sn=(n,e,t="")=>`<span class="chip${t?` ${t}`:""}" tabindex="0" data-tip="${Bc(e)}">${n}</span>`;function xd(n,{income:e=!0,seen:t=!0}={}){const i=[];if(e&&n.owner!==Oe){const r=Ys(n,U),s=we.income[n.kind]*(n.star?1.5:1),a=r-s;i.push(sn(`<b class="pos">+${r.toFixed(1)}/s</b>`,`Income: ${n.home?"homeworld":n.kind} ${s.toFixed(1)}${a>.001?` + ${a.toFixed(1)} from structures and bonuses`:""} per second`))}if(t){const r=Mc(U,n),s=U.bodies.filter(l=>l!==n&&Mc(U,l).some(u=>u.from===n)),a=Math.ceil(n.guns),c=r.reduce((l,u)=>l+u.n,0),o=[`${a} gun${a===1?"":"s"} here`];for(const l of r)o.push(`+${l.n.toFixed(1)} from ${l.from.name}`);s.length&&o.push(`these guns also help defend ${s.map(l=>l.name).join(", ")} (${n.parent===null?"half":"quarter"} strength)`),(n.owner!==Oe||a)&&i.push(sn(`${Mt("guns")} ${a}${c?` <span class="pos">+${c.toFixed(1)}</span>`:""}`,o.join(" · ")))}if(U.crew&&t&&n.owner!==Oe&&qa(n)&&i.push(sn(`Crew ${qa(n)}`,`Crew: this world fields ${qa(n)} toward its owner's crew cap (Habitats and a refugee convoy add more)`)),n.owner===Me&&!n.visitor){const r=Rd(U,n)*60,s=r<.25?"low":r<.5?"medium":"high";i.push(sn(`Security ${s}`,`Security ${s}: an enemy agent here has about a ${Math.round(Math.min(1,r)*100)}% chance a minute of being caught. A security bureau here or nearby, and Intel research, raise it`,s==="high"?"pos":"dim"))}if(n.owner!==Oe&&n.perk!=="fortress"&&Dd(U,n)){const r=U.bodies.find(s=>s.perk==="fortress"&&s.owner===n.owner&&In(_t(U,s,U.time),_t(U,n,U.time))<=Vs(U,"fortress"));i.push(sn(`${Mt("fortress")} +1 gun`,`Covered by the ${mn.fortress.name}${r?` at ${r.name}`:""}: +1 gun here while it's inside the ring`,"gold"))}if(n.owner!==Oe&&n.perk!=="depot"&&X0(U,n)>1&&i.push(sn(`${Mt("depot")} +20% speed`,`A ${mn.depot.name} nearby: fleets launched from here fly ${Math.round((mn.depot.boost-1)*100)}% faster`,"gold")),n.owner!==Oe&&n.perk!=="relay"&&U.bodies.some(r=>r.perk==="relay"&&r.owner===n.owner&&In(_t(U,r,U.time),_t(U,n,U.time))<=Vs(U,"relay"))&&i.push(sn(`${Mt("relay")} watched`,`Inside your ${mn.relay.name}'s ring: everything around here is in view`,"gold")),n.perk){const r=mn[n.perk];let s="";if(r.range&&n.perk==="relay")s=" (dashed ring)";else if(r.range){const a=_t(U,n,U.time),c=U.bodies.filter(o=>o.owner===Me&&o!==n&&In(_t(U,o,U.time),a)<=Vs(U,n.perk)).map(o=>o.name);s=` (dashed ring). ${c.length?`Yours inside now: ${c.join(", ")}`:"None of yours inside now"}`}i.push(sn(`${Mt(n.perk)} ${r.name}`,`${r.text}${s}`,"gold"))}n.wonder&&i.push(sn(`${Mt(n.wonder)} ${dn[n.wonder].name}`,dn[n.wonder].text,"gold")),n.project&&i.push(sn(`${Mt(n.project.key)} ${Math.floor((1-n.project.left/dn[n.project.key].time)*100)}%`,`Building the ${dn[n.project.key].name}: ${dn[n.project.key].text}. Take the world and it's yours.`,"gold"));for(const r of U.happenings||[]){if(r.at!==n.id)continue;const s=ur[r.kind],a=U.time<r.starts,c=!a&&r.holder!==Oe,o=a?`starts in ${Ft(r.starts-U.time)}`:c?`${r.holder===Me?"you hold it":`${li(r.holder)} holds it`}: ${Ft(Math.max(0,s.hold-r.held))} to go`:`gone in ${Ft(Math.max(0,r.ends-U.time))}`;i.push(sn(`${Mt(r.kind)} ${s.name}`,`${_g(U,r.kind)}. Hold it for ${Ft(s.hold)} without a fight. Now: ${o}`,"gold"))}return i.length?`<div class="chips">${i.join("")}</div>`:""}function ZS(n,e,t){const i=1+.15*U.tech[Me].industry,r=t&&t.perk&&mn[t.perk].fits===n;return n==="mine"?`+${(we.mineIncome*e*i*(r?2:1)).toFixed(1)}/s`:we.structures[n].income?`+${(we.structures[n].income*e).toFixed(1)}/s`:n==="defence"?`${Math.round(we.gunsPerDefence*e*(r?1.5:1))} guns`:n==="bureau"?`${e===1?"2.5":"4"}× catch`:n==="lab"?`+${Math.round(we.labSpeed*e*(r?2:1)*100)}% research`:n==="habitat"?`+${we.crew.habitat*e} crew`:""}const y0={bureau:"Security",shipyard:"Yard",mine:"Mine",defence:"Guns",lab:"Lab",skimmer:"Gas rig",exchange:"Exchange",habitat:"Habitat"},Zr=n=>`${Math.max(0,Math.min(100,Math.floor(n*100)))}%`;function M0(n){return n.scrap?1-n.scrap/we.scrapTime:n.next?1-n.left/$c({...n,level:n.next-1}):n.left>0?1-n.left/we.structures[n.type].time:null}function JS(n){const e=z0(n);B.slot!==null&&B.slot>=e&&(B.slot=null);const t=[];for(let s=0;s<e;s++){const a=n.structures[s],c=B.slot===s?" on":"";if(!a){t.push(`<button class="cell empty${c}" data-slot="${s}"><span>+</span></button>`);continue}const o=we.structures[a.type],l=M0(a),u=o.maxLevel?`<i class="pips">${"▮".repeat(a.level)}${"▯".repeat(o.maxLevel-a.level)}</i>`:"",p=l===null?"":`<i class="prog" style="width:${Zr(l)}"></i>`,d=l!==null&&!a.scrap?`<i class="pips">${Ft(a.left/Bs(U,Me,n))}</i>`:u;t.push(`<button class="cell${l===null?"":" busy"}${c}" data-slot="${s}"><b>${y0[a.type]}</b>${d}${p}</button>`)}let i=`<div class="cells">${t.join("")}</div>`;if(B.slot!==null){const s=n.structures[B.slot];let a="";if(!s)a=["shipyard","mine","skimmer","exchange","defence","lab","bureau","habitat"].map(c=>{const o=_c(U,n,c);if(o&&o!=="not enough credits")return"";const l=we.structures[c],u=n.perk&&mn[n.perk].fits===c,p=`${l.name}: ${l.desc}${u?` · boosted by the ${mn[n.perk].name}`:""}`;return`<button class="opt${u?" fit":""}" data-b="${c}" data-hold="${Bc(p)}" title="${Bc(p)}" ${o?"disabled":""}>${y0[c]}<small>${l.cost} · ${Ft(l.time/Bs(U,Me,n))}</small></button>`}).join("");else{const c=we.structures[s.type],o=M0(s),l=s.scrap?`scrapping · ${Zr(o)}`:s.next?`upgrading → ${Vo[s.next]} · ${Zr(o)}`:s.left>0?`building · ${Zr(o)}`:c.maxLevel?`level ${Vo[s.level]}`:"online",u=ko(U,n,s),p=Id(U,n,s);if(a=`<span class="what" title="${c.desc}">${c.name} · ${l}</span><button class="danger" data-d="${B.slot}" ${p?"disabled":""}>Scrap<small>+${Ya(s)}</small></button>`,c.maxLevel){const d=[];for(let f=1;f<=c.maxLevel;f++){const v=f===1?c.cost:Dr({type:s.type,level:f-1}),y=f<=s.level?"done":f===s.next?"now":f>s.level+1||s.next?"later":"",m=f===s.level+1&&!s.next&&(!u||u==="not enough credits"),h=m?`button data-u="${B.slot}" ${u?"disabled":""}`:"span",g=f<=s.level?"✓":f===s.next?Ft(s.left/Bs(U,Me,n)):m?`Upgrade · ${v} · ${Ft($c({type:s.type,level:f-1})/Bs(U,Me,n))}`:v;d.push(`<${h} class="lv ${y}${m?" next":""}"><b>${Vo[f]}</b> ${ZS(s.type,f,n)}<small>${g}</small></${h.split(" ")[0]}>`)}a+=`<div class="ladder">${d.join("")}</div>`}}i+=`<div class="ctx">${a}</div>`}const r=Hc(n);if(r){const s=yc(U,n),c=Array.from({length:r},(l,u)=>n.slips&&n.slips[u]!==void 0?n.slips[u]:0).map(l=>`<i class="meter"><i style="width:${Zr(l)}"></i></i>`).join(""),o=n.queue&&n.slips&&n.slips.length?Ft((1-Math.max(...n.slips))*kf(U,n)):"";i+=`<div class="ctx ships"><span class="what">${n.queue?`Queue <b class="num">${n.queue}</b>`:`${r} yard${r===1?"":"s"} idle`}<span class="bars">${c}</span><span class="dim">${o}</span></span></div><div class="ctx shipbtns"><button data-b="ship" title="${s==="no crew to spare"?"No crew to spare: take more worlds or build a Habitat":`Order a ship (${we.ship.time}s per yard)`}" ${s?"disabled":""}>+ Ship<small>${s==="no crew to spare"?"no crew":`${we.ship.cost} · ${Ft(kf(U,n))}`}</small></button><button data-cancel="1" class="danger" title="Cancel the last queued ship" ${n.queue?"":"disabled"}>${Mt("close")}<small>+${Math.round(we.ship.cost*we.cancelRefund)}</small></button><button class="mini" data-probe="1" ${U.credits[Me]<we.probe.cost?"disabled":""} title="Probe: fast one-way flyby that reveals a world">Probe<small>${we.probe.cost}</small></button></div>`}On(G("buildrow"),i)}G("buildrow").addEventListener("click",n=>{if(B.selected===null)return;const e=U.bodies[B.selected],t=n.target.closest("button[data-slot]");if(t){B.pick=null;const o=Number(t.dataset.slot);B.slot=B.slot===o?null:o,Gt();return}if(n.target.closest("button[data-probe]")){B.mode="probe",B.target=null,B.slot=null,Gt();return}if(n.target.closest("button[data-cancel]")){Ki({type:"cancel",b:e.id})&&wt("Ship build cancelled",xt(Me)),Gt();return}const i=n.target.closest("button[data-u]");if(i){const o=e.structures[Number(i.dataset.u)];o&&Ki({type:"upgrade",b:e.id,i:Number(i.dataset.u)})&&wt(`Upgrading ${we.structures[o.type].name} to ${Vo[o.level+1]} · ${Math.round($c(o))}s`,xt(Me)),Gt();return}const r=n.target.closest("button[data-d]");if(r){const o=e.structures[Number(r.dataset.d)];o&&Ki({type:"demolish",b:e.id,i:Number(r.dataset.d)})&&wt(`Scrapping ${we.structures[o.type].name} at ${e.name}`,xt(Me)),B.slot=null,Gt();return}const s=n.target.closest("button[data-b]");if(!s)return;const a=s.dataset.b;if(ra){ra=!1;return}Ki(a==="ship"?{type:"ship",b:e.id}:{type:"build",b:e.id,k:a})&&(wt(a==="ship"?`Ship ordered at ${e.name}`:`${we.structures[a].name} under construction at ${e.name}`,xt(Me)),a!=="ship"&&(B.slot=null)),Gt()});const uu=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]],QS={ansible:"Signals",targeting:"Targeting",kinetic:"Kinetic",torch:"Torch",hardened:"Hardened",pdnet:"PD net"};function e2(){const e=([o,l])=>[45*o,30*Math.sqrt(3)*(l+o/2)],t=(o,l,u=28)=>Array.from({length:6},(p,d)=>`${(o+u*Math.cos(Math.PI/3*d)).toFixed(1)},${(l+u*Math.sin(Math.PI/3*d)).toFixed(1)}`).join(" "),i=[];pu.forEach((o,l)=>{const[u,p]=e(uu[l]);i.push({key:o,cx:u,cy:p,branch:!0});const d=uu[l],f=uu[(l+1)%6],v=Object.keys(Dn).find(h=>Dn[h].needs.includes(o)&&Dn[h].needs.includes(pu[(l+1)%6])),[y,m]=e([d[0]+f[0],d[1]+f[1]]);i.push({key:v,cx:y,cy:m})});const r=U.tech[Me],s=r.project,a=[`<title>One project at a time. A joint tech needs both neighbours at II. Research stations speed everything up.</title><polygon points="${t(0,0)}" class="hx core"/><text x="0" y="-2" class="hl">R&amp;D</text><text x="0" y="11" class="hs">×${sa(U,Me).toFixed(1)}</text>`];for(const o of i){const l=r[o.key]||0,u=o.branch?ti[o.key].cost.length:1,p=qo(U,Me,o.key),d=l>=u?"done":s&&s.key===o.key?"run":p==="locked"?"locked":U.credits[Me]<Nr(U,Me,o.key).cost?"open poor":"open",f=B.techSel===o.key?" sel":"",v=o.branch?Array.from({length:u},(y,m)=>`<circle cx="${(m-(u-1)/2)*6}" cy="17" r="1.8" class="${m<l?"on":""}"/>`).join(""):"";a.push(`<g data-hex="${o.key}" transform="translate(${o.cx.toFixed(1)},${o.cy.toFixed(1)})" class="hexc ${d}${f}"><polygon points="${t(0,0)}" class="hx"/>`+(()=>{const y=T0(o.key);return`<svg x="-8" y="-17" width="16" height="16" viewBox="${y.vb}" class="ic${y.lu?" lu":""}">${y.body}</svg>`})()+`<text x="0" y="9" class="hl">${o.branch?ti[o.key].name:QS[o.key]}</text>${v}</g>`)}const c=Object.keys(dn).map(o=>{const l=dn[o].needs,u=U.wonders&&U.wonders[o]!==void 0?U.bodies[U.wonders[o]]:null,p=U.bodies.some(v=>v.owner===Me&&v.project&&v.project.key===o),d=u?u.owner===Me?"done":"taken":p?"run":r[l]?U.credits[Me]<dn[o].cost?"poor":"open":"locked",f=B.techSel===`mega:${o}`?" sel":"";return`<button data-hex="mega:${o}" class="mtile ${d}${f}" title="${Bc(dn[o].name)}">${Mt(o)}</button>`}).join("");return`<svg class="board" viewBox="-124 -114 248 228">${a.join("")}</svg><div class="megarow"><span>Megaprojects</span>${c}</div>`}function t2(n){const e=U.tech[Me],t=e.project,i=Dn[n],r=Nr(U,Me,n),s=qo(U,Me,n),a=e[n]||0,c=i?i.name:ti[n].name,o=i?a?[i.text]:[]:ti[n].levels.slice(0,a).map((u,p)=>`${u}: ${R0(U,n,p)}`);let l=o.length?`<div class="have">${o.map(u=>`<div>${Mt("star")} ${u}</div>`).join("")}</div>`:"";if(!r)l+='<small class="dim">Complete</small>';else if(t&&t.key===n)l+=`<small>Researching ${r.title} · ${Math.floor((1-t.left/t.total)*100)}%</small>`;else{const u=i&&s==="locked"?`<small class="dim">Needs ${i.needs.map(p=>`${ti[p].name} II`).join(" and ")}</small>`:"";l+=`<div class="nextrow"><span>${i?"":`<b>${r.title}</b>`}<small>${r.text} · ${Ft(r.time/sa(U,Me))}</small>${u}</span><button data-k="${n}" ${s?"disabled":""}>Research<small>${r.cost}</small></button></div>`}if(i){const u=Object.keys(dn).find(p=>dn[p].needs===n);u&&(l+=`<small class="dim unlocks">Unlocks ${Mt(u)} ${dn[u].name}</small>`)}return`<div class="tdetail"><div class="th">${Mt(n)} <b>${c}</b></div>${l}</div>`}function n2(n){const e=Object.keys(dn).find(u=>dn[u].needs===n);if(!e)return"";const t=dn[e],i=`<div class="mega"><div class="th">${Mt(e)} <b>${t.name}</b> <span class="dim">megaproject</span></div><small>${t.text}</small><small class="dim">${t.where==="giant"?"Gas giants only":t.where==="inner"?"Innermost planet only":t.where==="planet"?"Planets only":"Any world of yours"} · one per world · only one empire can finish it</small>`,r=U.wonders&&U.wonders[e]!==void 0?U.bodies[U.wonders[e]]:null;if(r)return`${i}<small>${r.owner===Me?"Yours":`Built by ${li(r.owner)}`}, at ${r.name}</small></div>`;const s=U.bodies.find(u=>u.owner===Me&&u.project&&u.project.key===e),a=U.bodies.filter(u=>u.owner!==Me&&u.project&&u.project.key===e).length,c=a?`<small class="warn">${a} rival${a===1?"":"s"} building it</small>`:"";if(s)return`${i}${c}<div class="nextrow"><span><small>At ${s.name} · ${Ft(s.project.left/dc(U,Me))} left · research stations speed it up (half as much as research)</small><i class="meter"><i style="width:${Zr(1-s.project.left/t.time)}"></i></i></span></div></div>`;const o=U.tech[Me][n],l=U.bodies.filter(u=>u.owner===Me&&!no(U,u,e));return`${i}${c}<div class="nextrow"><span><small>${o?l.length?Ft(t.time/dc(U,Me)):"No world of yours can take it yet":`Needs ${Dn[n].name}${U.tech[Me][Dn[n].needs[0]]<2||U.tech[Me][Dn[n].needs[1]]<2?` (after ${Dn[n].needs.map(u=>`${ti[u].name} II`).join(" and ")})`:""}`}</small></span><button data-mega="${e}" ${o&&l.length?"":"disabled"}>Build<small>${t.cost}</small></button></div></div>`}function sl(){const e=U.tech[Me].project;if(G("rbar").hidden=!0,G("rnd").hidden=!fn||Cr||B.mode==="project"||!G("menu").hidden||!G("end").hidden||!G("research").hidden||YS()&&(!G("actions").hidden||!G("peek").hidden||!G("fleet").hidden),G("rnd").classList.toggle("idle",!e),On(G("rndsub"),e?`${ti[e.key]?ti[e.key].name:Dn[e.key].name} · ${Ft(e.left/sa(U,Me))}`:"idle"),G("rndbar").style.width=e?Zr(1-e.left/e.total):"0%",G("research").hidden)return;G("rstatus").textContent="",B.techSel||(B.techSel=e?e.key:pu.find(i=>Nr(U,Me,i))||"ansible");const t=B.techSel;On(G("rlist"),e2()+(t.startsWith("mega:")?`<div class="tdetail">${n2(dn[t.slice(5)].needs)}</div>`:t2(t)))}G("rlist").addEventListener("click",n=>{const e=n.target.closest("[data-hex]");if(e){B.techSel=e.dataset.hex,sl();return}const t=n.target.closest("button[data-mega]");t&&(B.mode="project",B.projKey=t.dataset.mega,B.selected=B.target=null,G("research").hidden=!0,Gt())});G("rnd").addEventListener("click",()=>{G("research").hidden=!G("research").hidden,B.selected=B.target=null,Gt(),sl()});G("rclose").addEventListener("click",()=>{G("research").hidden=!0});const i2=n=>{G("research").hidden||n.target.closest("#research, #rnd")||(G("research").hidden=!0,rl())};for(const n of["pointerdown","touchstart","mousedown"])document.addEventListener(n,i2,{capture:!0,passive:!0});G("rlist").addEventListener("click",n=>{const e=n.target.closest("button[data-k]");if(!e)return;const t=E0(e.dataset.k,(U.tech[Me][e.dataset.k]||0)+1);Ki({type:"research",k:e.dataset.k})&&(wt(`Researching ${t}`,xt(Me)),G("research").hidden=!0),sl()});G("pct").addEventListener("input",()=>{at.pct=Number(G("pct").value),Or(),Gt()});G("count").addEventListener("click",()=>{at.pct=at.pct===100?50:at.pct===50?25:100,Or(),Gt()});G("launch").addEventListener("click",()=>{if(!B.mode){B.mode="launch",B.target=null,Gt();return}r2()});G("dark").addEventListener("click",()=>{B.dark=!B.dark,Gt()});G("cancel").addEventListener("click",()=>{B.dark=!1,B.mode=null,B.target=null,Gt()});G("focus").addEventListener("click",()=>{const n=B.target??B.selected;n!==null&&je.focus(U,n),Gt()});function r2(){if(B.mode==="projconfirm"&&B.selected!==null){const n=U.bodies[B.selected];Ki({type:"project",b:n.id,k:B.projKey})&&wt(`${dn[B.projKey].name} begun at ${n.name}`,xt(Me),B.projKey),B.mode=null,Gt();return}if(!(B.selected===null||B.target===null)){if(B.mode==="probe"){const n=U.bodies[B.target];Ki({type:"probe",b:B.selected,to:B.target})&&wt(`Probe away to ${n.name}`,xt(Me)),B.mode=null,B.selected=B.target=null,Gt();return}B.count<1||(Ki({type:"launch",b:B.selected,to:B.target,n:B.count,dark:B.dark}),B.dark=!1,B.mode=null,B.selected=B.target=null,Gt())}}let ol=matchMedia("(pointer: coarse)").matches;window.addEventListener("pointerdown",n=>{ol=n.pointerType!=="mouse"},!0);const Ci=document.createElement("div");Ci.id="tipbox";Ci.hidden=!0;document.body.appendChild(Ci);let al=null;function xf(n,e=n.dataset.tip){al=n,Ci.textContent=e,Ci.hidden=!1;const t=n.getBoundingClientRect(),i=Math.min(280,window.innerWidth-24);Ci.style.maxWidth=`${i}px`;const r=Ci.offsetWidth,s=Ci.offsetHeight,a=Math.max(12,Math.min(window.innerWidth-r-12,t.left+t.width/2-r/2)),c=t.top-s-8;Ci.style.left=`${a}px`,Ci.style.top=`${c>8?c:t.bottom+8}px`}function _d(){al=null,Ci.hidden=!0}document.addEventListener("mouseover",n=>{const e=n.target.closest?.("[data-tip]");e&&!ol&&xf(e)});document.addEventListener("mouseout",n=>{const e=n.target.closest?.("[data-tip]");e&&e===al&&!ol&&_d()});document.addEventListener("click",n=>{if(ra)return;const e=n.target.closest?.("[data-tip]");if(e&&ol){al===e?_d():xf(e);return}e||_d()},!0);let yd=null,ra=!1;document.addEventListener("pointerdown",n=>{const e=n.target.closest?.("[data-hold]");clearTimeout(yd),ra=!1,!(!e||n.pointerType==="mouse")&&(yd=setTimeout(()=>{ra=!0,xf(e,e.dataset.hold)},450))},!0);for(const n of["pointerup","pointercancel","pointermove"])document.addEventListener(n,e=>{(n!=="pointermove"||Math.hypot(e.movementX||0,e.movementY||0)>6)&&clearTimeout(yd)},!0);let Ho=null;function wt(n,e,t=null){const i=G("feed"),r=document.createElement("div");if(r.className="note",Ho!==null&&U&&U.bodies[Ho]){const s=Ho;r.classList.add("go"),r.addEventListener("click",()=>{je.focus(U,s),B.mode=null,B.fleet=null,B.selected=U.bodies[s].owner===Me?s:null,B.peek=s,Gt()})}for(r.style.setProperty("--c",e),r.textContent=n,t&&r.insertAdjacentHTML("afterbegin",`${Mt(t)} `),i.prepend(r);i.children.length>4;)i.lastChild.remove();setTimeout(()=>r.classList.add("gone"),5200),setTimeout(()=>r.remove(),5800)}const Md=n=>["","blooded","veteran","elite"][wn(n)],cr=n=>`TF ${n}`;function ig(n=U.events.splice(0)){const e=B.vis,t=r=>U.bodies[r].name,i=xt(Me);for(const r of n){Ho=r.at??r.to??r.from??null;const s=xt(r.owner);switch(r.type){case"launch":if(r.owner===Me){const a=U.fleets.find(o=>o.id===r.fleet),c=a?a.T:r.T;wt(`${cr(r.name)} · ${r.n} ship${r.n===1?"":"s"} → ${t(r.to)}${c?` · ${Ft(c)}`:""}${a&&a.assist!==void 0?` · assist via ${t(a.assist)}`:""}`,i);break}if(!e||e.intel<1||!e.bodies.has(r.from))break;if(r.dark){const a=U.fleets.find(c=>c.id===r.fleet);if(!a||!e.seesFleet(a))break}wt(`Launch detected at ${t(r.from)} · ${r.n} ship${r.n===1?"":"s"}${e.intel>=2?` → ${t(r.to)}`:""}`,s);break;case"arrived":r.owner===Me&&wt(`${cr(r.name)} arrived at ${t(r.at)}`,i);break;case"engaged":r.owner===Me?wt(`${cr(r.name)} engaging ${t(r.at)}`,i):r.vs===Me&&wt(`${t(r.at)} under attack`,s);break;case"wiped":r.owner===Me?wt(`${cr(r.name)} lost with all hands at ${t(r.at)}`,xt(r.vs)):r.vs===Me&&wt(`Enemy ${cr(r.name)} destroyed at ${t(r.at)}`,i);break;case"captured":r.owner===Me?wt(`${t(r.at)} taken by ${cr(r.name)}`,i):r.from===Me&&wt(`${t(r.at)} lost`,s);break;case"held":r.owner===Me&&wt(`${t(r.at)} held${wn(U.bodies[r.at].vet)?` · garrison ${Md(U.bodies[r.at].vet)}`:""}`,i);break;case"promoted":r.owner===Me&&wt(`${r.name?cr(r.name):`${t(r.at)} garrison`} now ${Md(r.v)}`,i);break;case"event":{const a=ur[r.kind];r.phase==="soon"?wt(U.bodies[r.at].visitor?`${t(r.at)} incoming`:`${a.name} at ${t(r.at)} in 1:00`,"#c7a6ff",r.kind):r.phase==="won"?wt(`${r.owner===Me?"You":li(r.owner)} secured the ${a.name.toLowerCase()} · ${r.what}`,xt(r.owner),r.kind):wt(`${a.name} at ${t(r.at)} is gone`,"#858ca6",r.kind);break}case"visitor":wt(`${r.name} has left the system`,"#858ca6","comet");break;case"project":{const a=dn[r.key];r.phase==="start"&&r.owner!==Me&&wt(`${li(r.owner)} began the ${a.name} at ${t(r.at)}`,xt(r.owner),r.key),r.phase==="done"&&wt(`${r.owner===Me?"You":li(r.owner)} completed the ${a.name}`,xt(r.owner),r.key),r.phase==="lost"&&r.owner===Me&&wt(`Beaten to the ${a.name}: half refunded`,"#ff7a4d",r.key);break}case"spycaught":r.owner===Me?wt(`Agent caught on ${t(r.at)} after ${Ft(r.after)}`,"#ff7a4d","spy"):r.by===Me&&wt(`Security caught a ${li(r.owner)} spy on ${t(r.at)}`,i,"spy");break;case"breakout":r.owner===Me&&wt(`Broke out of ${t(r.at)}: ${r.lost} ship${r.lost===1?"":"s"} lost${r.n?`, ${r.n} got away`:""}`,"#ff7a4d");break;case"probed":r.owner===Me&&wt(`Probe flyby of ${t(r.at)} · in view for ${Math.round(we.probe.scan/60*2)/2} min`,i);break;case"scrapped":r.owner===Me&&wt(`${we.structures[r.what].name} scrapped at ${t(r.at)}`,i);break;case"research":r.owner===Me&&wt(`${E0(r.key,r.level)} complete`,i,r.key);break}}Ho=null}function b0(n,e,t,i=!1){if(!B.mode){const r=je.pickFleet(U,e,t,Me),s=n!==null&&(n===B.peek||n===B.selected);if(r!==null&&B.fleet===r&&n!==null){tg();return}if(r!==null&&(n===null||s)&&B.fleet!==r){B.selected=B.target=B.peek=null,B.fleet=r,je.followFleet(U,r),Gt();return}}if(B.fleet=null,n!==null&&je.focus(U,n,!1),B.mode==="project"){const r=n!==null?U.bodies[n]:null,s=r?no(U,r,B.projKey):"cancelled";if(r&&!s){B.selected=n,B.peek=null,B.mode="projconfirm",Gt();return}wt(s==="cancelled"?"Megaproject cancelled":`Can't build it there: ${s}`,"#858ca6"),B.mode=null,Gt();return}if(B.mode==="launch"||B.mode==="probe")n===null?(B.selected=B.target=null,B.mode=null):B.target=n!==B.selected?n:null;else if(n===null||n===B.selected)B.selected=B.target=null,B.mode=null;else if(U.bodies[n].owner===Me)B.selected=n,B.slot=null,B.pick=null,B.target=null;else{B.selected=B.target=null,B.peek=B.peek===n?null:n,Gt();return}B.peek=null,Gt()}const os=G("scene"),ji=new Map;let vt=null,Tr={t:0,id:null};os.addEventListener("pointerdown",n=>{if(fn){n.preventDefault();try{os.setPointerCapture(n.pointerId)}catch{}if(n.pointerType==="mouse"){const e=n.button===2||n.button===1||n.altKey;vt={kind:e?"turn":"click",right:n.button===2,mouse:!0,x0:n.clientX,y0:n.clientY,x:n.clientX,y:n.clientY,pivot:e&&!je.following()?je.pivotAt(U,n.clientX,n.clientY):null},B.dragging=!0,je.orbit.vaz=je.orbit.vpol=0;return}if(ji.set(n.pointerId,{x:n.clientX,y:n.clientY}),ji.size===1)vt={kind:"tap",x0:n.clientX,y0:n.clientY};else if(ji.size===2){const[e,t]=[...ji.values()];vt={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2,mx0:(e.x+t.x)/2,my0:(e.y+t.y)/2}}B.dragging=!0,je.orbit.vaz=je.orbit.vpol=0}});os.addEventListener("pointermove",n=>{if(vt?.mouse){const r=n.clientX-vt.x,s=n.clientY-vt.y;vt.x=n.clientX,vt.y=n.clientY,vt.kind==="click"&&Math.hypot(n.clientX-vt.x0,n.clientY-vt.y0)>5&&(vt.kind="pan"),vt.kind==="pan"&&je.pan(r,s),vt.kind==="turn"&&(vt.pivot?je.rotateAround(vt.pivot,-r*.006,-s*.006):(je.orbit.az-=r*.006,je.orbit.pol-=s*.006),Math.hypot(n.clientX-vt.x0,n.clientY-vt.y0)>5&&(vt.moved=!0));return}n.pointerType==="mouse"&&U&&(os.style.cursor=je.pick(n.clientX,n.clientY)!==null?"pointer":"grab");const e=ji.get(n.pointerId);if(!e||!vt)return;const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,vt.kind==="pinch"){if(ji.size<2)return;const[r,s]=[...ji.values()],a=Math.hypot(r.x-s.x,r.y-s.y),c=(r.x+s.x)/2,o=(r.y+s.y)/2;je.following()&&Math.hypot(c-vt.mx0,o-vt.my0)<40?je.zoomBy(vt.d/Math.max(1,a)):(je.pan(c-vt.mx,o-vt.my),je.zoomAt(c,o,vt.d/Math.max(1,a))),vt.d=a,vt.mx=c,vt.my=o;return}if(vt.kind==="tap"&&Math.hypot(n.clientX-vt.x0,n.clientY-vt.y0)>10&&(vt.kind="orbit"),vt.kind==="orbit"){const r=4/window.innerHeight;je.orbit.az-=t*r,je.orbit.pol-=i*r,je.orbit.vaz=-t*r,je.orbit.vpol=-i*r}});function rg(n){if(vt?.mouse){const e=vt;if(vt=null,B.dragging=!1,e.kind==="turn"&&e.right&&!e.moved&&n.type!=="pointercancel"){const r=je.pick(n.clientX,n.clientY),s=B.selected!==null?U.bodies[B.selected]:null;r!==null&&s&&s.owner===Me&&r!==s.id&&s.ships&&(B.mode="launch",B.target=r,B.fleet=null,Gt());return}if(e.kind!=="click"||n.type==="pointercancel")return;const t=je.pick(n.clientX,n.clientY),i=performance.now();t!==null&&Tr.id===t&&i-Tr.t<350?(je.focus(U,t),Tr={t:0,id:null},Gt()):(Tr={t:i,id:t},b0(t,n.clientX,n.clientY,!0));return}if(ji.delete(n.pointerId)){if(vt?.kind==="tap"&&ji.size===0&&n.type!=="pointercancel"){const e=je.pick(n.clientX,n.clientY),t=performance.now();e!==null&&Tr.id===e&&t-Tr.t<350?(je.focus(U,e),Tr={t:0,id:null},Gt()):(Tr={t,id:e},b0(e,n.clientX,n.clientY))}ji.size===0?(vt=null,B.dragging=!1):vt={kind:"orbit"}}}os.addEventListener("pointerup",rg);os.addEventListener("pointercancel",n=>{rg(n),vt=null,B.dragging=!1});os.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?window.innerHeight:1),t=n.ctrlKey?.01:.0015;je.zoomToward(n.clientX,n.clientY,Math.exp(Math.max(-.5,Math.min(.5,e*t))))},{passive:!1});const to=new Set;window.addEventListener("keydown",n=>{if(!fn||n.target.closest("input, textarea"))return;const e=n.key.toLowerCase();if(to.add(e),e==="escape")B.mode?(B.mode=null,B.target=null):B.selected=B.target=B.peek=null,G("research").hidden=!0,Gt();else if(e==="f"){const t=B.target??B.selected;t!==null&&je.focus(U,t)}else if(e==="h")ng();else if(e>="1"&&e<="5"&&!Et)vf(lc[Number(e)-1]);else if(e===" ")n.preventDefault(),G("pause").hidden||qm();else if(e==="l"||e==="enter")B.selected!==null&&!G("launch").disabled&&G("launch").click();else if(e==="d")G("dark").hidden||(G("dark").click(),to.delete("d"));else if(e==="p"){const t=document.querySelector("#buildrow button[data-probe]");t&&!t.disabled&&t.click()}else e==="r"&&G("rnd").click()});window.addEventListener("keyup",n=>to.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>to.clear());function s2(n){if(!to.size)return;const e=700*n,t=(...i)=>i.some(r=>to.has(r));t("w","arrowup")&&je.pan(0,e),t("s","arrowdown")&&je.pan(0,-e),t("a","arrowleft")&&je.pan(e,0),t("d","arrowright")&&je.pan(-e,0),t("q")&&(je.orbit.az+=n*1.5),t("e")&&(je.orbit.az-=n*1.5),t("=","+")&&je.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(-n*1.8)),t("-","_")&&je.zoomAt(window.innerWidth/2,window.innerHeight/2,Math.exp(n*1.8))}document.addEventListener("contextmenu",n=>n.preventDefault());for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,e=>e.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});const o2=["You","Red","Amber"],li=n=>n===Me?"You":U.names?U.names[n]:o2[n];function du(n,e,t,i,r=s=>Math.round(s)){const p=t.at(-1).t||1,d=Math.max(1,...t.flatMap(g=>g.p.map(w=>w[e]))),f=g=>30+g/p*256,v=g=>8+(1-g/d)*104,y=i.map(g=>{const w=t.map(S=>`${f(S.t).toFixed(1)},${v(S.p[g][e]).toFixed(1)}`).join(" "),_=t.at(-1).p[g][e];return`<polyline points="${w}" fill="none" stroke="${xt(g)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><text x="${f(p)+4}" y="${v(_)+4}" font-size="10" fill="#aab1c8">${li(g)}</text>`}).join(""),m=[0,.5,1].map(g=>`<line x1="30" x2="286" y1="${v(d*g)}" y2="${v(d*g)}" stroke="rgba(160,180,255,0.12)" /><text x="26" y="${v(d*g)+3}" font-size="9" fill="#858ca6" text-anchor="end">${r(d*g)}</text>`).join(""),h=`<text x="30" y="126" font-size="9" fill="#858ca6">0:00</text><text x="286" y="126" font-size="9" fill="#858ca6" text-anchor="end">${Ft(p)}</text>`;return`<div class="chart" data-key="${e}"><h3>${n}</h3><svg viewBox="0 0 320 130" data-l="30" data-r="286" data-w="320">${m}${h}${y}<line class="cross" y1="8" y2="112" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg><div class="readout">Touch the chart to read values</div></div>`}const sg=[["Ships built","built"],["Ships lost","lost"],["Enemy ships destroyed","killed"],["Worlds captured","captured"],["Worlds lost","worldsLost"],["Credits earned","earned"],["Credits spent","spent"],["Research completed","research"]],S0=new Set(["lost","worldsLost"]);function og(n,e){const t=e.map(r=>Math.round(U.stats.totals[r][n])),i=S0.has(n)?Math.min(...t):Math.max(...t);return!S0.has(n)&&i<=0?[]:t.every(r=>r===i)?[]:e.filter((r,s)=>t[s]===i)}function a2(){const n=U.players-1,e=[...new Set(tl)],t=e.length?` · ${U.mp?"AI ":""}${e.join("/")}`:"";return`${eo?`Daily ${eo.slice(5).replace("-","/")} · ${Qn[U.system].name}`:Qn[U.system].name} · ${Ft(U.time)} · ${n} rival${n===1?"":"s"}${t}`}function c2(n,e,t,i,r,s,a,c){let o=a;for(n.font=c(s,o);o>16&&n.measureText(e).width>r;)n.font=c(s,--o);if(n.measureText(e).width>r){for(;e.length>1&&n.measureText(e+"…").width>r;)e=e.slice(0,-1);e+="…"}n.fillText(e,t,i)}function l2(){const t=document.createElement("canvas");t.width=1080,t.height=1500;const i=t.getContext("2d"),r=Array.from({length:U.players},(m,h)=>h),s=(m,h)=>`${m} ${h}px Rajdhani, system-ui, sans-serif`;i.fillStyle="#03040a",i.fillRect(0,0,1080,1500),i.strokeStyle="rgba(120,190,255,0.25)",i.lineWidth=2,i.strokeRect(24,24,1032,1452),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(600,30),i.fillText("P E R I H E L I O N",1080/2,96);const a=U.winner===Me;i.fillStyle=xt(a?Me:U.winner),i.font=s(700,96),i.fillText(a?"VICTORY":"DEFEAT",1080/2,200),i.fillStyle="#e6ebf7",i.font=s(500,34),i.fillText(a2(),1080/2,252);const c=80,o=170,l=920-o*r.length;let u=330;i.font=s(700,32),i.textAlign="right",r.forEach((m,h)=>{i.fillStyle=xt(m),c2(i,li(m),c+l+o*(h+1)-20,u,o-30,700,32,s)}),u+=20;for(const[m,h]of sg){u+=52,i.strokeStyle="rgba(160,180,255,0.15)",i.beginPath(),i.moveTo(c,u+16),i.lineTo(1080-c,u+16),i.stroke(),i.textAlign="left",i.fillStyle="#858ca6",i.font=s(500,30),i.fillText(m,c,u);const g=og(h,r);r.forEach((w,_)=>{const S=c+l+o*(_+1)-20;g.includes(w)?(i.fillStyle="rgba(126,224,161,0.16)",i.fillRect(S-o+30,u-34,o-20,46),i.fillStyle="#7ee0a1"):i.fillStyle="#e6ebf7",i.textAlign="right",i.font=s(g.includes(w)?700:500,32),i.fillText(String(Math.round(U.stats.totals[w][h])),S,u)})}const p=U.stats.series,d=[["Ships","ships"],["Worlds","worlds"],["Income","income"]],f=880/3,v=400,y=u+90;return d.forEach(([m,h],g)=>{const w=80+g*(f+20);i.textAlign="left",i.fillStyle="#e6ebf7",i.font=s(600,30),i.fillText(m,w,y);const _=y+20,S=_+v,b=p.at(-1).t||1,T=Math.max(1,...p.flatMap(x=>x.p.map(M=>M[h])));i.strokeStyle="rgba(160,180,255,0.15)",i.lineWidth=2;for(const x of[0,.5,1])i.beginPath(),i.moveTo(w,S-x*v),i.lineTo(w+f,S-x*v),i.stroke();for(const x of r)i.strokeStyle=xt(x),i.lineWidth=4,i.lineJoin="round",i.beginPath(),p.forEach((M,E)=>{const P=w+M.t/b*f,R=S-M.p[x][h]/T*v;E?i.lineTo(P,R):i.moveTo(P,R)}),i.stroke();i.fillStyle="#858ca6",i.font=s(500,24),i.fillText(h==="income"?T.toFixed(1):String(Math.round(T)),w,_+26)}),i.textAlign="center",i.fillStyle="#858ca6",i.font=s(500,26),i.fillText("pretzel-dev.github.io/game-dev/perihelion",1080/2,1444),t}async function u2(){const n=await new Promise(i=>l2().toBlob(i,"image/png")),e=new File([n],"perihelion-report.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i.name==="AbortError")return}const t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e.name,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}G("share").addEventListener("click",u2);function d2(){const n=U.stats,e=Array.from({length:U.players},(s,a)=>a),t=sg,i=`<div class="legend">${e.map(s=>`<span><i style="background:${xt(s)}"></i>${li(s)}</span>`).join("")}</div>`,r=`<table class="totals"><tr><th></th>${e.map(s=>`<th style="color:${xt(s)}">${li(s)}</th>`).join("")}</tr>`+t.map(([s,a])=>`<tr><td>${s}</td>${e.map(c=>`<td class="${og(a,e).includes(c)?"best":""}">${Math.round(n.totals[c][a])}</td>`).join("")}</tr>`).join("")+"</table>";G("report").innerHTML=i+r+du("Ships","ships",n.series,e)+du("Worlds held","worlds",n.series,e)+du("Income (credits/s)","income",n.series,e,s=>s.toFixed(1));for(const s of G("report").querySelectorAll(".chart")){const a=s.querySelector("svg"),c=s.dataset.key,o=l=>{const u=a.getBoundingClientRect(),p=(l.clientX-u.left)/u.width*Number(a.dataset.w),d=Number(a.dataset.l),f=Number(a.dataset.r),v=Math.min(1,Math.max(0,(p-d)/(f-d))),y=n.series[Math.round(v*(n.series.length-1))],m=a.querySelector(".cross"),h=d+y.t/(n.series.at(-1).t||1)*(f-d);m.setAttribute("x1",h),m.setAttribute("x2",h),m.setAttribute("visibility","visible"),s.querySelector(".readout").innerHTML=`${Ft(y.t)} · `+e.map(g=>{const w=y.p[g][c];return`${li(g)} <b>${c==="income"?w.toFixed(1):Math.round(w)}</b>`}).join(" · ")};a.addEventListener("pointerdown",o),a.addEventListener("pointermove",o)}}function f2(){fn=!1,G("rnd").hidden=!0,B.selected=B.target=null,Gt();const n=U.winner===Me;G("end-title").textContent=n?"Victory":"Defeat",G("end-title").style.color=xt(n?Me:U.winner);const e=[...new Set(tl)],t=e.length?` · ${e.map(i=>i[0].toUpperCase()+i.slice(1)).join(" / ")} AI`:"";G("end-sub").textContent=(n?`The system is yours after ${Ft(U.time)}.`:`Your last world fell at ${Ft(_f??U.time)}.`)+t+` · ${eo?"Daily · ":""}${Qn[U.system].name}`,d2(),setTimeout(()=>G("end").hidden=!1,1200)}let w0=performance.now(),fu=0,hu=0,Cr=!1,_f=null,bd=!0,yf=0,Uo=!1;function ag(n){const e=Math.min(.1,(n-w0)/1e3);if(w0=n,U){if(fn&&!ci)if(Et?.role==="client"){const t=n-yf>3e3;t!==Uo&&(Uo=t,Uo?(G("banner").hidden=!1,G("banner").textContent="Waiting for the host…"):zc()),Uo||(U.time+=e)}else{let t=e*es;for(;t>0;){const i=Math.min(.25,t);for(const r of el)j0(U,r,i);Od(U,i),t-=i}}if(fn){if(B.selected!==null&&U.bodies[B.selected].owner!==Me&&(B.selected=B.target=null),Et?.role!=="client"){const i=U.events.splice(0);ig(i),Et?.role==="host"&&i.length&&Et.room.broadcast({t:"events",list:i})}Et?.role==="host"&&(hu-=e,(hu<=0||U.winner!==null)&&(hu=.25,Et.room.seats.forEach((i,r)=>{r>0&&i.conn&&Et.room.sendTo(r,{t:"state",s:$S(r)})})));const t=U.bodies.some(i=>i.owner===Me||i.sieges.some(r=>r.owner===Me))||U.fleets.some(i=>i.owner===Me&&!i.probe);if(U.mp&&U.winner===null&&Cr===t&&(Cr=!t,Cr?(_f=U.time,wt("Your empire has fallen · watching the rest","#ff7a4d"),B.vis=null):B.vis=ts(U,Me),G("leave").hidden=!(Cr&&Et?.role==="client")),B.fleet!==null&&rl(),fu-=e,fu<=0){fu=.25,B.vis=Cr||at.dev&&!Et&&B.devAs==="all"?null:ts(U,at.dev&&!Et&&B.devAs!==void 0?B.devAs:Me),at.dev&&!Et&&eg(),Gt(),sl();{const i=Ko(U,Me)-jo(U,Me),r=U.crew?` · ${sn(`Crew ${xc(U,Me)}/${vc(U,Me)}`,"Ships in service and on order, against the crews your worlds can field. More worlds, Habitats and Industry research raise it.",xc(U,Me)>=vc(U,Me)?"warn":"inc")}`:"";On(G("clock"),`<b>₵ ${Math.floor(U.credits[Me])}</b> ${sn(`${i<0?"−":"+"}${Math.abs(i).toFixed(1)}/s`,KS(),"inc")}${r} · T+${Ft(U.time)}`)}}U.winner!==null&&f2()}fn&&s2(e),je.render(U,B,e*(fn?es:.2),n/1e3)}requestAnimationFrame(ag)}window.addEventListener("resize",je.resize);je.resize();U=O0({seed:11,opponents:2});el=[0,1,2].map(n=>xu(n,"hard",Mi(5+n)));je.build(U);je.orbit.dist=330;(function n(){if(!(fn||G("menu").hidden)){for(let e=0;e<4;e++){for(const t of el)j0(U,t,.25);Od(U,.25)}je.orbit.az+=.001,setTimeout(n,50)}})();requestAnimationFrame(ag);window.__perihelion={get game(){return U},view:je,ui:B,sim:{launch:Wc,fleetState:An,step:Od,posAt:_t}};
